/* eslint-disable no-console */
const fs = require('fs');

if (!fs.existsSync('dist-fn')) {
    fs.mkdirSync('dist-fn', { recursive: true });
}

fs.cp('config/fn/README.md', 'dist-fn/README.md', { recursive: true }, () => {
    console.log('Copied README.md');
});

fs.cp('config/fn/package.json', 'dist-fn/package.json', { recursive: true }, () => {
    console.log('Copied package.json');
});
