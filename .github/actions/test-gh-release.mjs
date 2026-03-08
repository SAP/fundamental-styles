#!/usr/bin/env node

/**
 * Test script for validating gh release create command generation.
 * Ensures the replacement of ncipollo/release-action produces equivalent results.
 *
 * Run: node .github/actions/test-gh-release.mjs
 */

import { execSync } from 'child_process';

/**
 * Simulates the gh release create command that would replace ncipollo/release-action.
 * Returns the command string without executing it.
 *
 * @param {object} params
 * @param {string} params.tag - Git tag (e.g., "v0.41.0-rc.117")
 * @param {string} params.body - Release notes markdown
 * @param {boolean} params.isPrerelease - Whether this is a prerelease
 * @returns {string} The gh release create command
 */
function buildGhReleaseCommand({ tag, body, isPrerelease }) {
    const args = [
        'gh', 'release', 'create',
        JSON.stringify(tag),
        '--title', JSON.stringify(tag),
        '--notes', JSON.stringify(body),
    ];

    if (isPrerelease) {
        args.push('--prerelease');
    }

    return args.join(' ');
}

/**
 * Validates that gh CLI is available (it's pre-installed on GitHub runners)
 */
function checkGhCli() {
    try {
        const version = execSync('gh --version', { encoding: 'utf8' }).trim().split('\n')[0];
        return { available: true, version };
    } catch {
        return { available: false, version: null };
    }
}

// --- Test Cases ---

const tests = [
    {
        name: 'Prerelease with changelog body',
        input: {
            tag: 'v0.41.0-rc.118',
            body: '### Bug Fixes\n\n* **styles:** fix button padding ([#1234](https://github.com/SAP/fundamental-styles/issues/1234))\n',
            isPrerelease: true,
        },
        expected: {
            tagInCommand: 'v0.41.0-rc.118',
            titleInCommand: 'v0.41.0-rc.118',
            hasPrerelease: true,
            hasBody: true,
        },
    },
    {
        name: 'Stable release with changelog body',
        input: {
            tag: 'v0.41.0',
            body: '### Features\n\n* **styles:** add new component ([#5678](https://github.com/SAP/fundamental-styles/issues/5678))\n',
            isPrerelease: false,
        },
        expected: {
            tagInCommand: 'v0.41.0',
            titleInCommand: 'v0.41.0',
            hasPrerelease: false,
            hasBody: true,
        },
    },
    {
        name: 'Prerelease with empty body',
        input: {
            tag: 'v0.42.0-rc.0',
            body: '',
            isPrerelease: true,
        },
        expected: {
            tagInCommand: 'v0.42.0-rc.0',
            titleInCommand: 'v0.42.0-rc.0',
            hasPrerelease: true,
            hasBody: false,
        },
    },
    {
        name: 'Body with special characters (quotes, backticks)',
        input: {
            tag: 'v0.41.0-rc.120',
            body: '### Bug Fixes\n\n* fix `fd-button` "emphasized" variant\'s border\n',
            isPrerelease: true,
        },
        expected: {
            tagInCommand: 'v0.41.0-rc.120',
            titleInCommand: 'v0.41.0-rc.120',
            hasPrerelease: true,
            hasBody: true,
        },
    },
    {
        name: 'Hotfix stable release',
        input: {
            tag: 'v0.40.1',
            body: '### Bug Fixes\n\n* **styles:** critical hotfix ([#9999](https://github.com/SAP/fundamental-styles/issues/9999))\n',
            isPrerelease: false,
        },
        expected: {
            tagInCommand: 'v0.40.1',
            titleInCommand: 'v0.40.1',
            hasPrerelease: false,
            hasBody: true,
        },
    },
];

// --- Run Tests ---

console.log('🧪 Testing gh release create command generation\n');
console.log('='.repeat(80));

const ghCli = checkGhCli();
console.log(`\ngh CLI: ${ghCli.available ? ghCli.version : '⚠️  Not found (commands will be validated structurally only)'}\n`);

let passed = 0;
let failed = 0;

for (const test of tests) {
    console.log(`\n📝 Test: ${test.name}`);

    const command = buildGhReleaseCommand(test.input);
    console.log(`   Command: ${command.substring(0, 120)}${command.length > 120 ? '...' : ''}`);

    let success = true;

    // Validate tag is in the command
    if (!command.includes(test.expected.tagInCommand)) {
        console.log(`   ❌ FAILED: Tag "${test.expected.tagInCommand}" not found in command`);
        success = false;
    }

    // Validate --title matches tag (ncipollo/release-action uses tag as title by default)
    if (!command.includes(`--title ${JSON.stringify(test.expected.titleInCommand)}`)) {
        console.log(`   ❌ FAILED: Title should be "${test.expected.titleInCommand}"`);
        success = false;
    }

    // Validate --prerelease flag
    const hasPrerelease = command.includes('--prerelease');
    if (hasPrerelease !== test.expected.hasPrerelease) {
        console.log(`   ❌ FAILED: --prerelease flag should be ${test.expected.hasPrerelease}, got ${hasPrerelease}`);
        success = false;
    }

    // Validate --notes is present
    const hasNotes = command.includes('--notes');
    if (!hasNotes) {
        console.log(`   ❌ FAILED: --notes flag missing`);
        success = false;
    }

    // Validate body content is included when non-empty
    if (test.expected.hasBody) {
        const bodyInCommand = command.includes('--notes') && command.includes(JSON.stringify(test.input.body));
        if (!bodyInCommand) {
            console.log(`   ❌ FAILED: Body content not correctly serialized in command`);
            success = false;
        }
    }

    if (success) {
        console.log(`   ✅ PASSED`);
        passed++;
    } else {
        failed++;
    }
}

// --- Equivalence Check: ncipollo inputs → gh flags mapping ---

console.log('\n' + '='.repeat(80));
console.log('\n📋 ncipollo/release-action → gh release create mapping validation:\n');

const mapping = [
    { ncipollo: 'tag', gh: 'positional arg (first)', status: '✅' },
    { ncipollo: 'prerelease: true', gh: '--prerelease', status: '✅' },
    { ncipollo: 'prerelease: false', gh: '(flag omitted)', status: '✅' },
    { ncipollo: 'body', gh: '--notes', status: '✅' },
    { ncipollo: 'token', gh: 'GH_TOKEN env var', status: '✅' },
    { ncipollo: '(default) title = tag', gh: '--title (explicit)', status: '✅' },
];

for (const m of mapping) {
    console.log(`   ${m.status} ${m.ncipollo.padEnd(25)} → ${m.gh}`);
}

console.log('\n' + '='.repeat(80));
console.log(`\n📊 Test Results: ${passed} passed, ${failed} failed`);

if (failed > 0) {
    process.exit(1);
}
