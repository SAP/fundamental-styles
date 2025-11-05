import semver from 'semver';
import getVersion from './get-version.mjs';

/**
 * Get the release tag for the current release
 * @param isHotfix {boolean}
 * @param isPrerelease {boolean}
 * @param currentVersion {string}
 * @returns {Promise<'latest' | 'hotfix' | 'prerelease'>}
 */
export default async (isHotfix, isPrerelease, currentVersion) => {
    const getTag = (isHotfixCheck, prereleaseCheck) => 
        isHotfix && isHotfixCheck(currentVersion)
        ? 'hotfix'
        : isPrerelease && prereleaseCheck
        ? 'prerelease'
        : 'latest';

    if (isHotfix && isPrerelease) {
        throw new Error('Cannot be both hotfix and a prerelease');
    }

    const isHotfixMatch = async () => {
        const latestVersion = await getVersion('origin/main');
        return !semver.lt(latestVersion, currentVersion);
    }

    return getTag(isHotfixMatch, () => true);
};