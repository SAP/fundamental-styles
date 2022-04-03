/* eslint-disable no-console */
const fs = require('fs-extra');

if (!fs.pathExistsSync('dist-fn')) {
    fs.mkdirp('dist-common-css', { recursive: true });
}

fs.copySync('config/common-css/README.md', 'dist-common-css/README.md', { recursive: true });
console.log('Copied README.md');

fs.copy('config/common-css/package.json', 'dist-common-css/package.json', { recursive: true });
console.log('Copied package.json');
