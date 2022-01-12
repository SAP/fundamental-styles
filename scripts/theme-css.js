const fs = require('fs-extra');
const path = require('path');
const supportedThemes = require('../config/constants');

fs.readdirSync('dist').forEach(file => {
    let originalExtension;
    const extensionRegex = /\.[^.]+$/;
    const extensionRegexMatch = file.match(extensionRegex);
    const fileName = file.replace(extensionRegex, '');
    if (extensionRegexMatch) {
        originalExtension = extensionRegexMatch[0].replace('.', '');
    }
    if (originalExtension !== 'css') return;

    supportedThemes.forEach(theme => {
        fs.copyFile(path.resolve(__dirname, `../dist/${file}`), `dist/${fileName}-${theme}.css`, (err) => {
            if (err) throw err;
        });
    });
}, { withFileTypes: true });
