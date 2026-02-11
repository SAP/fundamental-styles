import { Bumper } from 'conventional-recommended-bump';
import semver from 'semver';
import { execSync } from 'child_process';
import { writeFileSync, readFileSync, mkdtempSync, rmSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';
import { loadPreset } from 'conventional-changelog-preset-loader';

/**
 * Test script for version bumping logic
 * This simulates the bump-version action locally with different scenarios
 */

const TypeList = ['major', 'minor', 'patch'].reverse();

const isInPrerelease = version => Array.isArray(semver.prerelease(version));

const getCurrentActiveType = version => TypeList.find(type => semver[type](version));

const getTypePriority = type => TypeList.indexOf(type);

function shouldContinuePrerelease(version, expectType) {
    return getCurrentActiveType(version) === expectType;
}

async function testVersionBump(currentVersion, commitMessage, isPrerelease = true) {
    // Create a temporary git repo for testing
    const tempDir = mkdtempSync(join(tmpdir(), 'test-bump-'));

    try {
        // Initialize git repo
        execSync('git init', { cwd: tempDir, stdio: 'pipe' });
        execSync('git config user.email "test@test.com"', { cwd: tempDir, stdio: 'pipe' });
        execSync('git config user.name "Test User"', { cwd: tempDir, stdio: 'pipe' });

        // Create initial commit
        writeFileSync(join(tempDir, 'package.json'), JSON.stringify({ version: currentVersion }));
        execSync('git add .', { cwd: tempDir, stdio: 'pipe' });
        execSync('git commit -m "initial commit"', { cwd: tempDir, stdio: 'pipe' });
        execSync(`git tag v${currentVersion}`, { cwd: tempDir, stdio: 'pipe' });

        // Create commit with the test message
        writeFileSync(join(tempDir, 'test.txt'), 'test change');
        execSync('git add .', { cwd: tempDir, stdio: 'pipe' });

        // Write commit message to file to handle multiline messages
        const commitMsgFile = join(tempDir, 'commit-msg.txt');
        writeFileSync(commitMsgFile, commitMessage);
        execSync(`git commit -F "${commitMsgFile}"`, { cwd: tempDir, stdio: 'pipe' });

        // Run bump logic
        const config = await loadPreset({
            name: 'conventionalcommits',
            preMajor: semver.lt(currentVersion, '1.0.0')
        });

        const bumper = new Bumper(tempDir)
            .commits({}, config.recommendedBumpOpts.parserOpts)
            .tag({ prefix: 'v' });

        const release = await bumper.bump(config.recommendedBumpOpts.whatBump);

        let releaseType = release.releaseType;

        // Apply prerelease logic
        if (isPrerelease) {
            if (isInPrerelease(currentVersion)) {
                if (shouldContinuePrerelease(currentVersion, release.releaseType) ||
                    getTypePriority(getCurrentActiveType(currentVersion)) > getTypePriority(release.releaseType)
                ) {
                    releaseType = 'prerelease';
                } else {
                    releaseType = 'pre' + release.releaseType;
                }
            } else {
                releaseType = 'pre' + release.releaseType;
            }
        }

        const newVersion = semver.inc(currentVersion, releaseType, isPrerelease, 'rc');

        return {
            currentVersion,
            releaseType,
            recommendedType: release.releaseType,
            newVersion,
            reason: release.reason
        };
    } finally {
        // Cleanup
        rmSync(tempDir, { recursive: true, force: true });
    }
}

async function runTests() {
    console.log('🧪 Testing version bump logic\n');
    console.log('='.repeat(80));

    const tests = [
        {
            name: 'BREAKING CHANGE in 0.x prerelease (should bump to next minor prerelease)',
            currentVersion: '0.41.0-rc.103',
            commitMessage: `fix(styles): update component

BREAKING CHANGE: updated markup`,
            expectedMajor: 0,
            expectedMinor: 41,
            expectedPatch: 0,
            expectedPrerelease: 104,
            isPrerelease: true
        },
        {
            name: 'BREAKING CHANGE in 0.x stable (should bump MINOR)',
            currentVersion: '0.41.0',
            commitMessage: `fix(styles): update component

BREAKING CHANGE: updated markup`,
            expectedMajor: 0,
            expectedMinor: 42,
            isPrerelease: false
        },
        {
            name: 'Feature in 0.x prerelease (should bump prerelease)',
            currentVersion: '0.41.0-rc.103',
            commitMessage: 'feat(styles): add new feature',
            expectedMajor: 0,
            expectedMinor: 41,
            expectedPatch: 0,
            expectedPrerelease: 104,
            isPrerelease: true
        },
        {
            name: 'Fix in 0.x prerelease (should bump prerelease)',
            currentVersion: '0.41.0-rc.103',
            commitMessage: 'fix(styles): fix bug',
            expectedMajor: 0,
            expectedMinor: 41,
            expectedPatch: 0,
            expectedPrerelease: 104,
            isPrerelease: true
        },
        {
            name: 'BREAKING CHANGE in 1.x prerelease (should bump MAJOR)',
            currentVersion: '1.5.0-rc.10',
            commitMessage: `fix(styles): update component

BREAKING CHANGE: updated markup`,
            expectedMajor: 2,
            expectedMinor: 0,
            isPrerelease: true
        },
        {
            name: 'Feature in 1.x prerelease (should bump prerelease)',
            currentVersion: '1.5.0-rc.10',
            commitMessage: 'feat(styles): add new feature',
            expectedMajor: 1,
            expectedMinor: 5,
            expectedPatch: 0,
            expectedPrerelease: 11,
            isPrerelease: true
        },
        {
            name: 'BREAKING CHANGE from patch prerelease to new minor prerelease',
            currentVersion: '0.34.1-rc.10',
            commitMessage: `fix(styles): update component

BREAKING CHANGE: updated markup`,
            expectedMajor: 0,
            expectedMinor: 35,
            expectedPatch: 0,
            expectedPrerelease: 0,
            isPrerelease: true
        },
        {
            name: 'BREAKING CHANGE continues existing minor prerelease',
            currentVersion: '0.35.0-rc.42',
            commitMessage: `fix(styles): update component

BREAKING CHANGE: updated markup`,
            expectedMajor: 0,
            expectedMinor: 35,
            expectedPatch: 0,
            expectedPrerelease: 43,
            isPrerelease: true
        },
        {
            name: 'Graduate patch prerelease to stable with fix',
            currentVersion: '0.63.1-rc.10',
            commitMessage: 'fix(styles): final fix',
            expectedMajor: 0,
            expectedMinor: 63,
            expectedPatch: 1,
            isPrerelease: false
        },
        {
            name: 'Graduate minor prerelease to stable with fix',
            currentVersion: '0.64.0-rc.55',
            commitMessage: 'fix(styles): final fix',
            expectedMajor: 0,
            expectedMinor: 64,
            expectedPatch: 0,
            isPrerelease: false
        }
    ];

    let passed = 0;
    let failed = 0;

    for (const test of tests) {
        try {
            console.log(`\n📝 Test: ${test.name}`);
            console.log(`   Current version: ${test.currentVersion}`);

            const result = await testVersionBump(
                test.currentVersion,
                test.commitMessage,
                test.isPrerelease
            );

            console.log(`   Recommended type: ${result.recommendedType}`);
            console.log(`   Applied type: ${result.releaseType}`);
            console.log(`   New version: ${result.newVersion}`);
            console.log(`   Reason: ${result.reason}`);

            const newSemver = semver.parse(result.newVersion);
            let success = true;

            if (test.expectedMajor !== undefined && newSemver.major !== test.expectedMajor) {
                console.log(`   ❌ FAILED: Expected major ${test.expectedMajor}, got ${newSemver.major}`);
                success = false;
            }
            if (test.expectedMinor !== undefined && newSemver.minor !== test.expectedMinor) {
                console.log(`   ❌ FAILED: Expected minor ${test.expectedMinor}, got ${newSemver.minor}`);
                success = false;
            }
            if (test.expectedPatch !== undefined && newSemver.patch !== test.expectedPatch) {
                console.log(`   ❌ FAILED: Expected patch ${test.expectedPatch}, got ${newSemver.patch}`);
                success = false;
            }
            if (test.expectedPrerelease !== undefined && newSemver.prerelease[1] !== test.expectedPrerelease) {
                console.log(`   ❌ FAILED: Expected prerelease ${test.expectedPrerelease}, got ${newSemver.prerelease[1]}`);
                success = false;
            }

            if (success) {
                console.log(`   ✅ PASSED`);
                passed++;
            } else {
                failed++;
            }
        } catch (error) {
            console.log(`   ❌ ERROR: ${error.message}`);
            console.log(`   Stack: ${error.stack}`);
            failed++;
        }
    }

    console.log('\n' + '='.repeat(80));
    console.log(`\n📊 Test Results: ${passed} passed, ${failed} failed`);

    if (failed > 0) {
        process.exit(1);
    }
}

runTests().catch(error => {
    console.error('Test execution failed:', error);
    process.exit(1);
});
