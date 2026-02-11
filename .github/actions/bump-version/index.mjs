import { Bumper } from 'conventional-recommended-bump';
import semver from 'semver';
import { readFileSync } from 'fs';
import * as core from '@actions/core';
import getReleaseTag from '../helpers/get-release-tag.mjs';
import { loadPreset } from 'conventional-changelog-preset-loader';

const lernaJson = JSON.parse(readFileSync('./lerna.json', 'utf8'));
const releaseType = core.getInput('isPrerelease') === 'true'  ? 'prerelease' : 'release';
const isHotfix = core.getInput('isHotfix') === 'true';
const currentVersion = lernaJson.version;
const prereleaseRequested = releaseType === 'prerelease';
const isManual = core.getInput('isManual') === 'true';

const isInPrerelease = version => Array.isArray(semver.prerelease(version))

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
const getCurrentActiveType = version => TypeList.find(type => semver[type](version));


/**
 * calculate the priority of release type,
 * major - 2, minor - 1, patch - 0
 *
 * @param type
 * @return {number}
 */
const getTypePriority = type => TypeList.indexOf(type);

const bumpedVersionType = async () => {
    const config = await loadPreset({
        name: 'conventionalcommits',
        preMajor: semver.lt(currentVersion, '1.0.0')
    });

    const bumper = new Bumper()
        .commits({}, config.recommendedBumpOpts.parserOpts)
        .tag({ prefix: 'v' });

    const release = await bumper.bump(config.recommendedBumpOpts.whatBump);

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

const run = async() => {
    if(isManual) {
        const isPrerelease = !!semver.prerelease(currentVersion, undefined);
        const releaseTag = await getReleaseTag(isHotfix, isPrerelease, currentVersion);
        core.setOutput('newVersion', currentVersion);
        core.setOutput('isPrerelease', isPrerelease.toString());
        core.setOutput('releaseTag', releaseTag);
        core.info(`new version is ${currentVersion} with release tag ${releaseTag}`);
        return;
    }

    const release = await bumpedVersionType();
    core.info(`${release.reason}, therefore release type should be ${release.releaseType}`);

    const newVersion = getNewVersion(release, currentVersion, prereleaseRequested);
    const isPrerelease = !!semver.prerelease(newVersion, undefined);
    const releaseTag = await getReleaseTag(isHotfix, isPrerelease, newVersion);
    core.info(`new version is ${newVersion} with release tag ${releaseTag}`);

    core.setOutput('newVersion', newVersion);
    core.setOutput('releaseTag', releaseTag);
    core.setOutput('isPrerelease', semver.prerelease(newVersion) ? 'true' : 'false');
};

run();