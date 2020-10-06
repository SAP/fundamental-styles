const fs = require('fs-extra');
const path = require('path');

const supportedThemes = [
    'sap_fiori_3',
    'sap_fiori_3_dark',
    'sap_fiori_3_hcb',
    'sap_fiori_3_hcw',
    'sap_fiori_3_light_dark'
];

fs.readdirSync('dist').forEach(file => {
    const fileName = file.replace(/\.[^.]+$/, '');

    if (file.indexOf('.css') === -1) return;

    supportedThemes.forEach(theme => {
        fs.copyFile(path.resolve(__dirname, `../dist/${file}`), `dist/${fileName}-${theme}.css`, (err) => {
            if (err) throw err;
        });
    });
}, { withFileTypes: true });
