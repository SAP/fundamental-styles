/* eslint-disable no-console */
const fs = require('fs-extra');

if (!fs.pathExistsSync('dist-fn')) {
    fs.mkdirp('dist-fn', { recursive: true });
}

fs.copySync('config/fn/README.md', 'dist-fn/README.md', { recursive: true });
console.log('Copied README.md');

fs.copy('config/fn/package.json', 'dist-fn/package.json', { recursive: true });
console.log('Copied package.json');
