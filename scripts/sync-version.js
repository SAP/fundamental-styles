/* eslint-disable no-console */
const NEW_VERSION = require('../package.json').version;
const NEW_VERSION_THEMING = require('../package.json').devDependencies['@sap-theming/theming-base-content'];
const fs = require('fs');
const klawSync = require('klaw-sync');
const { resolve } = require('path');

const versionPlaceHolderRegex = /VERSION_PLACEHOLDER/g;

const themingFolderPath = resolve(__dirname, '../dist-theming');
const fnFolderPath = resolve(__dirname, '../dist-fn');
const iconsFolderPath = resolve(__dirname, '../dist-fn-icons');
const commonCSSFolderPath = resolve(__dirname, '../dist-common-css');

const filesInDirKlaw = (directory, regx) => {
    console.info(`Looking into directory ${directory}`);
    return klawSync(directory, {
        fs,
        nodir: true,
        traverseAll: true,
        filter: (item) => {
            if (item.stats.isDirectory()) {
                return false;
            }
            const content = fs.readFileSync(item.path, { encoding: 'utf8', flag: 'r' });
            return content.match(regx);
        }
    });
};

const replaceInFiles = (items, matcherRegex, newValue) => {
    for (const item of items) {
        const content = fs.readFileSync(item.path, { encoding: 'utf8', flag: 'r' });
        const newContent = content.replace(matcherRegex, newValue);
        fs.writeFileSync(item.path, newContent, { encoding: 'utf8' });
    }
    console.info(`Successfully replaced in ${items.length} files`);
};

console.log('='.repeat(5));
console.info(`Updating files under dist-theming/libs with version ${NEW_VERSION}`);
const theming = filesInDirKlaw(themingFolderPath, versionPlaceHolderRegex);
if (theming.length > 0) {
    console.info(`Found ${theming.length} files in ${themingFolderPath}`);
    replaceInFiles(theming, versionPlaceHolderRegex, NEW_VERSION);
} else {
    console.info(`No files match ${versionPlaceHolderRegex.toString()}`);
}

console.log('='.repeat(5));
console.info(`Updating files under fn/libs with version ${NEW_VERSION}`);
const fn = filesInDirKlaw(fnFolderPath, versionPlaceHolderRegex);
if (fn.length > 0) {
    console.info(`Found ${theming.length} files in ${fnFolderPath}`);
    replaceInFiles(fn, versionPlaceHolderRegex, NEW_VERSION);
} else {
    console.info(`No files match ${versionPlaceHolderRegex.toString()}`);
}

console.log('='.repeat(5));
console.info(`Updating packages.json under fn-icons/libs with version ${NEW_VERSION}`);
const fnIcons = filesInDirKlaw(iconsFolderPath, versionPlaceHolderRegex);
if (fnIcons.length > 0) {
    console.info(`Found ${theming.length} files in ${iconsFolderPath}`);
    replaceInFiles(fnIcons, versionPlaceHolderRegex, NEW_VERSION);
} else {
    console.info(`No files match ${versionPlaceHolderRegex.toString()}`);
}

console.log('='.repeat(5));
console.info(`Updating packages.json under common-css/libs with version ${NEW_VERSION_THEMING}`);
const commonCSSs = filesInDirKlaw(commonCSSFolderPath, versionPlaceHolderRegex);
if (commonCSSs.length > 0) {
    console.info(`Found ${theming.length} files in ${commonCSSFolderPath}`);
    replaceInFiles(commonCSSs, versionPlaceHolderRegex, NEW_VERSION_THEMING);
} else {
    console.info(`No files match ${versionPlaceHolderRegex.toString()}`);
}
