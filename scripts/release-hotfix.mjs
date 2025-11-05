import getVersion from '../.github/actions/helpers/get-version.mjs';
const currentVersion = getVersion();
import { execSync } from 'child_process';
import semver from 'semver';
const hotfixBranchName = 'tmp_hotfix_branch';

const execAndLog = (command) => {
    console.log(execSync(command, { maxBuffer: Infinity, encoding: 'utf8' }));
};

const checkPreRelease = (version) => {
    if (semver.prerelease(version, undefined)) {
        throw new Error('Cannot release a hotfix from a prerelease version');
    }
};

const checkGitStatus = () => {
    const gitDirty = execSync('git status --porcelain', { maxBuffer: Infinity, encoding: 'utf8' });
    if (gitDirty !== '') {
        throw new Error(
            'Cannot release a hotfix from a dirty git tree, please commit your changes first:' + '\n' + gitDirty
        );
    }
};

const createHotfixBranch = () => {
    execAndLog(`git checkout -b ${hotfixBranchName}`);
};

const bumpVersion = (version) => {
    const nextVersion = semver.inc(version, 'patch');
    return execAndLog(`npx lerna version ${nextVersion} --force-publish --yes --no-push`);
};

const pushBranch = () => {
    execAndLog(`git push --set-upstream origin ${hotfixBranchName} --follow-tags`);
    console.log('Hotfix release complete, rest of the process will be handled by the CI');
    execAndLog('git checkout main');
    execAndLog(`git branch -D ${hotfixBranchName}`);
};

/**
 * Releases a hotfix from the current HEAD.
 * This will create a new branch from the current HEAD, bump the patch version and push the changes to the remote.
 * The rest of the process will be handled by the CI.
 *
 * If the process fails after creating the branch, but before actually pushing changes to the remote,
 * you can run `git checkout main` and `git branch -D tmp_hotfix_branch` to clean up.
 */
const releaseHotfix = async () => {
    checkPreRelease(currentVersion);
    checkGitStatus();
    createHotfixBranch();
    await bumpVersion(currentVersion);
    pushBranch();
};

releaseHotfix()