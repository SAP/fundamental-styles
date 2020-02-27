#!/usr/bin/env node
const fs = require('fs');
var loadJsonFile = require('load-json-file');
var yaml = require('write-yaml');

const packageJson = loadJsonFile.sync('package.json');
const data = {
    'library_version': packageJson.version
};

yaml.sync('docs/_config-library.yml', data);

const fontPath = require.resolve('@sap-theming/theming-base-content/content/Base/baseLib/sap_base_fiori/fonts/72-Regular.woff');
const fontPathLight = require.resolve('@sap-theming/theming-base-content/content/Base/baseLib/sap_base_fiori/fonts/72-Light.woff');
const fontPathBold = require.resolve('@sap-theming/theming-base-content/content/Base/baseLib/sap_base_fiori/fonts/72-Bold.woff');
const iconPath = require.resolve('@sap-theming/theming-base-content/content/Base/baseLib/sap_fiori_3/fonts/SAP-icons.woff');

// copy fonts and icons for docs site
fs.copyFile(fontPath, 'docs/css/72-Regular.woff', (err) => {
    if (err) throw err;
});
fs.copyFile(fontPathLight, 'docs/css/72-Light.woff', (err) => {
    if (err) throw err;
});
fs.copyFile(fontPathBold, 'docs/css/72-Bold.woff', (err) => {
    if (err) throw err;
});
fs.copyFile(iconPath, 'docs/css/fonts/SAP-icons.woff', (err) => {
    if (err) throw err;
});
