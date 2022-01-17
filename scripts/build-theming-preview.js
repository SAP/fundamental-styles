/* eslint-disable no-console */
const fs = require('fs-extra');

if (!fs.pathExistsSync('dist-theming')) {
    fs.mkdirp('dist-theming', { recursive: true });
}

fs.copySync('theming-preview', 'dist-theming', { recursive: true });
console.log('Copied theming preview to dist-theming');

if (!fs.pathExistsSync('dist/fundamental-styles.css')) {
    throw new Error('"dist/fundamental-styles.css" could not be found');
}
fs.copySync('dist/fundamental-styles.css', 'dist-theming/fundamental-styles.css', { recursive: true });
console.log('Copied fundamental styles css');
