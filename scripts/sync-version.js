/* eslint-disable no-console */
const NEW_VERSION = require('../package.json').version;
const fs = require('fs');
const klawSync = require('klaw-sync');
const versionPlaceHolderRegex = /VERSION_PLACEHOLDER/g;

const filesInDirKlaw = (directory, regx) => klawSync(directory, {
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

const replaceInFiles = (items, matcherRegex, newValue) => {
    for (const item of items) {
        const content = fs.readFileSync(item.path, { encoding: 'utf8', flag: 'r' });
        const newContent = content.replace(matcherRegex, newValue);
        fs.writeFileSync(item.path, newContent, { encoding: 'utf8' });
    }
};

const theming = filesInDirKlaw('./dist-theming', versionPlaceHolderRegex);
const fn = filesInDirKlaw('./dist-fn', versionPlaceHolderRegex);
const fnIcons = filesInDirKlaw('./dist-fn-icons', versionPlaceHolderRegex);

console.log(`Updating files under dist-theming/libs with version ${NEW_VERSION}`);
replaceInFiles(theming, versionPlaceHolderRegex, NEW_VERSION);

console.log(`Updating files under fn/libs with version ${NEW_VERSION}`);
replaceInFiles(fn, versionPlaceHolderRegex, NEW_VERSION);

console.log(`Updating files under fn-icons/libs with version ${NEW_VERSION}`);
replaceInFiles(fnIcons, versionPlaceHolderRegex, NEW_VERSION);
