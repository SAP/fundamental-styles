/* eslint-disable no-console */
const { resolve } = require('path');
const colors = require('colors/safe');
const klawSync = require('klaw-sync');
const fs = require('fs-extra');
const iconsPath = resolve(__dirname, '../src/icons');
const packagePath = resolve(__dirname, '../dist-fn-icons');
const distPath = resolve(packagePath, 'dist');
const configPath = resolve(__dirname, '../config/fn-icons');

const bgGreen = (text) => colors.bgGreen(text);
const pathStyle = (path) => colors.bgYellow(colors.underline(path));
const copy = ([source, dest]) => {
    try {
        fs.copySync(source, dest);
    } catch (e) {
        console.error(colors.bgRed(`Failed to copy ${pathStyle(source)} to ${pathStyle(dest)}`));
        throw e;
    }
};

console.info(bgGreen(`Copying assets from ${pathStyle(iconsPath)}`));
klawSync(iconsPath, {
    fs,
    nodir: true,
    traverseAll: true,
    filter: (item) => {
        if (item.stats.isDirectory()) {
            return false;
        }
        return !/\.scss$/i.test(item.path);
    }
}).forEach((item) => copy([item.path, item.path.replace(iconsPath, distPath)]));

console.info(bgGreen(`Copied assets from ${pathStyle(iconsPath)} to ${pathStyle(distPath)} successfully`));

console.info(bgGreen(`Copying config from ${pathStyle(configPath)}`));

klawSync(configPath).forEach(({ path }) => copy([path, path.replace(configPath, packagePath)]));

console.info(bgGreen(`Copied config from ${pathStyle(configPath)} to ${pathStyle(packagePath)} successfully`));
