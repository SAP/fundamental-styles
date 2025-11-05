const semver = require('semver');
const { info, setOutput } = require('@actions/core');
const currentVersion = require('../helpers/current-version.cjs');

const isPrerelease = (version) => !!semver.prerelease(version, undefined);

const logVersionInfo = (prerelease) => {
    const message = prerelease
        ? `Current version is a prerelease, skipping...`
        : `Current version is a stable release, continuing...`;
    info(message);
};

const setOutputs = (prerelease, version) => {
    setOutput('pre-release', prerelease);
    setOutput('version', version);
};

const run = () => {
    const prerelease = isPrerelease(currentVersion);
    logVersionInfo(prerelease);
    setOutputs(prerelease, currentVersion);
};

run();