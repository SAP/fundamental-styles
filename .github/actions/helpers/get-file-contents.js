const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const BRANCH = 'origin/main';
const ENCODING = 'utf8';
const JSON_EXTENSION = '.json';

const resolveFileContent = (filePath, data) => {
    if (filePath.endsWith(JSON_EXTENSION)) {
        try {
            return JSON.parse(data);
        } catch (e) {
            return data;
        }
    }
    return data;
};

const getFileContentFromGit = (filePath, branch) => {
    const data = execSync(`git show ${branch}:${filePath}`, { maxBuffer: Infinity, encoding: ENCODING });
    return resolveFileContent(filePath, data);
};

const getFileContentLocally = filePath => {
    const data = fs.readFileSync(path.join(process.cwd(), filePath), ENCODING);
    return resolveFileContent(filePath, data);
};

/**
 * Get file contents from git or locally.
 * if branch is `null` it will use the local file lookup.
 * path is relative to the root of the project.
 * @param filePath
 * @param branch {string|null}
 * @returns {string | object}
 */
module.exports = (filePath, branch = BRANCH) => {
    return branch
        ? getFileContentFromGit(filePath, branch)
        : getFileContentLocally(filePath);
};