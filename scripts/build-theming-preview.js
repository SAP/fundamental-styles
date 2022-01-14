/* eslint-disable no-console */
const fs = require('fs');

if (!fs.existsSync('dist-theming')) {
    fs.mkdirSync('dist-theming', { recursive: true });
}

fs.cp('theming-preview', 'dist-theming', { recursive: true }, () => {
    console.log('Copied theming preview to dist-theming');
});
if (!fs.existsSync('dist/fundamental-styles.css')) {
    throw new Error('"dist/fundamental-styles.css" could not be found');
}
fs.cp('dist/fundamental-styles.css', 'dist-theming/fundamental-styles.css', { recursive: true }, () => {
    console.log('Copied fundamental styles css');
});
