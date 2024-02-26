const { getInput, setOutput, info } = require('@actions/core');
const getVersion = require('../helpers/get-version');
const gitSemverTags = require('../helpers/git-semver-tags');
const semver = require('semver');

const createTagObject = (ghTag, npmTag, mainNeedsSync) => ({
    gh: ghTag,
    npm: npmTag,
    mainNeedsSync: mainNeedsSync
});

/**
 *
 * @param bumpTag {'latest' | 'hotfix' | 'prerelease'}
 * @param bumpedVersion {string}
 * @returns {Promise<{ gh: 'prerelease' | 'release', npm: 'latest' | 'hotfix' | 'prerelease', mainNeedsSync: boolean }>}
 */
const getTags = async (bumpTag, bumpedVersion) => {
    const mainVersion = getVersion('origin/main');
    const mainIsPrerelease = !!semver.prerelease(mainVersion, undefined);
    const bumpedIsGreaterThanMain = semver.gt(bumpedVersion, mainVersion);
    const semverTags = await gitSemverTags(null, true);
    const latestStableVersion = semverTags[0].replace('v', '');
    const bumpedIsGreaterThanLatestStable = semver.gt(bumpedVersion, latestStableVersion);
    const ghTag = bumpTag === 'prerelease' ? 'prerelease' : 'release';

    if (bumpTag === 'hotfix') {
        return bumpedIsGreaterThanMain
            ? createTagObject(ghTag, 'latest', true)
            : mainIsPrerelease && bumpedIsGreaterThanLatestStable
                ? createTagObject(ghTag, 'latest', false)
                : createTagObject(ghTag, 'hotfix', false);
    }

    return createTagObject(ghTag, bumpTag, bumpTag === 'prerelease' || bumpedIsGreaterThanMain);
};

module.exports.getTags = getTags;

const run = async () => {
    const bumpedVersion = getInput('bumpedVersion');
    const bumpTag = getInput('bumpTag');
    const { gh, npm, mainNeedsSync } = await getTags(bumpTag, bumpedVersion);
    info(JSON.stringify({ bumpedVersion, bumpTag, gh, npm, mainNeedsSync }, null, 2));
    setOutput('gh', gh);
    setOutput('npm', npm);
    setOutput('mainNeedsSync', mainNeedsSync);
};

run();