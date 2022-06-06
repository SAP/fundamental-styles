/**
 * This file allows to quickly search for missing components that are not imported into main scss file.
 */
const fs = require('fs');
const { resolve } = require('path');

const config = {
    fiori: {
        rootDir: resolve(__dirname, '../src/styles'),
        mainFile: resolve(__dirname, '../src/styles/fundamental-styles.scss')
    },
    fn: {
        rootDir: resolve(__dirname, '../src/fn'),
        mainFile: resolve(__dirname, '../src/fn/fundamental-next.scss')
    }
};

const libFlag = 'lib=';

const isFix = process.argv.includes('fix');

const lib = (process.argv.find((a) => a.includes(libFlag)) || 'fiori').replace(libFlag, '');

if (!config[lib]) {
    throw Error('Library is not found.');
}

const getComponentsList = (libConfig) => {
    // Include only main scss files.
    const files = fs.readdirSync(libConfig.rootDir).filter((f) => !f.startsWith('_') && f.endsWith('.scss'));

    const importTemplate = (file) => `@import "./${file.replace('.scss', '')}";`;

    // Get list of imported files in root styles file.
    const addedFiles = fs
        .readFileSync(libConfig.mainFile, 'utf-8')
        .replace(/(?:\\[r]|[\r]+)+/g, '')
        .split('\n')
        .filter((l) => l.startsWith('@import'))
        .map((l) => l.replace(/@import "(\.\/)(.*)";/, '$2'));

    const missingFiles = files.filter(
        (f) => !libConfig.mainFile.includes(f) && !addedFiles.find((af) => f.includes(af))
    );

    if (isFix) {
        fs.appendFileSync(libConfig.mainFile, missingFiles.map((f) => importTemplate(f)).join('\n'));
        return;
    }

    if (missingFiles.length > 0) {
        throw Error(`Found ${missingFiles.length} file(s) that are not included into the root styles file:
${missingFiles.join('\n')}
Add these lines to the ${libConfig.mainFile} file:\n${missingFiles.map((f) => importTemplate(f)).join('\n')}
        `);
    }
};

getComponentsList(config[lib]);
