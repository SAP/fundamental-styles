const fs = require('fs');

const packageJson = 'package.json';
const packageJsonLock = 'package-lock.json';

let dots = fs.existsSync(`./${packageJson}`) ? '.' : '..';

let version = process.argv[2];

if (version) {
    version = version.replace('v', '');
    let packageContent = JSON.parse(fs.readFileSync(`${dots}/${packageJson}`, 'utf8'));
    packageContent.version = version;

    if (fs.existsSync(`${dots}/${packageJsonLock}`)) {
        let lockContent = JSON.parse(fs.readFileSync(`${dots}/${packageJsonLock}`, 'utf8'));
        lockContent.version = version;
        fs.writeFileSync(`${dots}/${packageJsonLock}`, JSON.stringify(lockContent, null, '\t'));
    }

    fs.writeFileSync(`${dots}/${packageJson}`, JSON.stringify(packageContent, null, '\t'));
}
