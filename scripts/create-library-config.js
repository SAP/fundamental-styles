#!/usr/bin/env node
const fs = require('fs');
var loadJsonFile = require('load-json-file');
var yaml = require('write-yaml');

const packageJson = loadJsonFile.sync('package.json');
const data = {
    'library_version': packageJson.version
};

yaml.sync('docs/_config-library.yml', data);

// copy fonts and icons for docs site
fs.copyFile('./node_modules/@sap-theming/theming-base-content/content/Base/baseLib/sap_base_fiori/fonts/72-Regular.woff', 'docs/css/fonts/72-Regular.woff', (err) => {
    if (err) throw err;
});

fs.copyFile('./node_modules/@sap-theming/theming-base-content/content/Base/baseLib/sap_fiori_3/fonts/SAP-icons.woff', 'docs/css/fonts/SAP-icons.woff', (err) => {
    if (err) throw err;
});
