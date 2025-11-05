const semver = require('semver');
const fs = require('fs');
const gitSemverTags = require('git-semver-tags');

const readLernaJson = () => {
    return JSON.parse(fs.readFileSync('./lerna.json', 'utf8'));
}

const semverTags = (maxVersion) => {
    return new Promise((resolve, reject) => {
        gitSemverTags({ tagPrefix: 'v', skipUnstable: false }, function(err, result) {
            if (err) {
                reject(err);
            } else {
                const firstLessIndex = result.findIndex(v => semver.lt(v, maxVersion));
                resolve(result.slice(firstLessIndex, result.length));
            }
        });
    });
};

const findClosestVersionIndex = (isPrerelease, availableVersions) => {
    let closestIndex = 0;
    if (!isPrerelease) {
        closestIndex = availableVersions.findIndex(v => !semver.prerelease(v));
    }
    return closestIndex;
}

module.exports = async() => {
    const packageJson = readLernaJson();
    const isPrerelease = !!semver.prerelease(packageJson.version);
    const availableVersions = await semverTags(packageJson.version);
    const closestIndex = findClosestVersionIndex(isPrerelease, availableVersions);
    return {
        closest: availableVersions[closestIndex],
        tagsTillClosest: availableVersions.slice(0, closestIndex)
    };
};
