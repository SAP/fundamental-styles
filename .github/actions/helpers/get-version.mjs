import getFileContents from './get-file-contents.mjs';

const getVersionFromJson = (jsonContent) => {
    return jsonContent.version;
};

const getVersionFromFile = (fileName, branch) => {
    try {
        const fileContents = getFileContents(fileName, branch);
        return getVersionFromJson(fileContents);
    } catch (e) {
        return null;
    }
};

/**
 * Get the version from the provided branch. If nothing is provided, then it will use the current file system
 * @param branch
 * @returns {string}
 */
export default (branch = null) => {
    const version = getVersionFromFile('lerna.json', branch) || getVersionFromFile('package.json', branch);
    return version;
};