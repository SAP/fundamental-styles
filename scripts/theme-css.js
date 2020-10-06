const fs = require('fs-extra');
const path = require('path');
const supportedThemes = require('../config/constants');

fs.readdirSync('dist').forEach(file => {
    const fileName = file.replace(/\.[^.]+$/, '');

    if (file.indexOf('.css') === -1) return;

    supportedThemes.forEach(theme => {
        fs.copyFile(path.resolve(__dirname, `../dist/${file}`), `dist/${fileName}-${theme}.css`, (err) => {
            if (err) throw err;
        });
    });
}, { withFileTypes: true });
