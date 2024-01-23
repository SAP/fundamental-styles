const semver = require('semver');
const { execSync } = require('child_process');

const getTags = () => {
    return execSync('git tag -l', { maxBuffer: Infinity })
        .toString()
        .split('\n');
};

const isValid = (tag) => {
    return semver.valid(tag) !== null;
};

const isStable = (tag) => {
    return semver.prerelease(tag) === null;
};

const isLessThanOrEqualToMaxVersion = (tag, maxVersion) => {
    return !(maxVersion && semver.gt(tag, maxVersion));
};

/**
 * Get all semver tags. Sorted in descending order
 * @param maxVersion
 * @param skipUnstable
 * @returns {Promise<string[]>}
 */
module.exports = (maxVersion = null, skipUnstable = false) => {
    return getTags()
        .filter((tag) => isValid(tag) && (!skipUnstable || isStable(tag)) && isLessThanOrEqualToMaxVersion(tag, maxVersion))
        .sort(semver.rcompare);
};
