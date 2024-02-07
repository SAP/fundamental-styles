const recommendedVersion = require('conventional-recommended-bump');
const semver = require('semver');
const fs = require('fs');
const core = require('@actions/core');
const lernaJson = JSON.parse(fs.readFileSync('./lerna.json', 'utf8'));
const releaseType = core.getInput('isPrerelease') !== 'false'  ? 'prerelease' : 'release';
const writeFile = core.getInput('writeFile') !== 'false';
const currentVersion = lernaJson.version;
const prereleaseRequested = releaseType === 'prerelease';

function isInPrerelease(version) {
    return Array.isArray(semver.prerelease(version));
}

function shouldContinuePrerelease(version, expectType) {
    return getCurrentActiveType(version) === expectType;
}

const TypeList = ['major', 'minor', 'patch'].reverse();

/**
 * extract the in-pre-release type in target version
 *
 * @param version
 * @return {string}
 */
function getCurrentActiveType(version) {
    return TypeList.find(type => semver[type](version));
}

/**
 * calculate the priority of release type,
 * major - 2, minor - 1, patch - 0
 *
 * @param type
 * @return {number}
 */
function getTypePriority(type) {
    return TypeList.indexOf(type);
}

const bumpedVersionType = async () => {
    const release = await recommendedVersion({
        //preset: 'conventionalcommits',
        preset: {
            name: require.resolve('conventional-changelog-conventionalcommits'),
            preMajor: semver.lt(currentVersion, '1.0.0')
        },
        tagPrefix: 'v'
    });

    if (prereleaseRequested) {
        if (isInPrerelease(currentVersion)) {
            if (shouldContinuePrerelease(currentVersion, release.releaseType) ||
                getTypePriority(getCurrentActiveType(currentVersion)) > getTypePriority(release.releaseType)
            ) {
                release.releaseType = 'prerelease';
                return release;
            }
        }
        release.releaseType = 'pre' + release.releaseType;
        return release;
    }
    return release;
};

const getNewVersion = (release, currentVersion, prereleaseRequested) => {
    return semver.valid(release.releaseType) || semver.inc(currentVersion, release.releaseType, prereleaseRequested, 'rc');
};

// const writeNewVersionToLernaJson = (newVersion) => {
//     lernaJson.version = newVersion;
//     fs.writeFileSync('./lerna.json', JSON.stringify(lernaJson, null, 2));
// };

const run = async() => {
    const release = await bumpedVersionType();
    core.info(`${release.reason}, therefore release type should be ${release.releaseType}`);

    const newVersion = getNewVersion(release, currentVersion, prereleaseRequested);
    core.info(`new version is ${newVersion}`);

    // if (writeFile) {
    //     writeNewVersionToLernaJson(newVersion);
    // }

    core.setOutput('newVersion', newVersion);
    core.setOutput('isPrerelease', semver.prerelease(newVersion) ? 'true' : 'false');
};

run();
