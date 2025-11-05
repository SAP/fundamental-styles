import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import path from 'path';

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
    const data = readFileSync(path.join(process.cwd(), filePath), ENCODING);
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
export default (filePath, branch = BRANCH) => {
    return branch
        ? getFileContentFromGit(filePath, branch)
        : getFileContentLocally(filePath);
};