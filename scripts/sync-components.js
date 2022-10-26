/**
 * This file allows to quickly search for missing components that are not imported into main scss file.
 */
const fs = require('fs');
const { resolve, parse } = require('path');
const postCssScss = require('postcss-scss');
const glob = require('glob');

const config = {
    fiori: {
        rootDir: resolve(__dirname, '../packages/styles/src'),
        mainFile: resolve(__dirname, '../packages/styles/src/fundamental-styles.scss')
    },
    fn: {
        rootDir: resolve(__dirname, '../packages/fn/src'),
        mainFile: resolve(__dirname, '../packages/fn/src/fundamental-next.scss')
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
    const globFiles = glob.sync(`${libConfig.rootDir}/*.scss`, {
        ignore: [
            libConfig.mainFile,
            `${libConfig.rootDir}/_*`
        ]
    }).map(fileName => {
        return parse(fileName).name;
    });
    const files = new Set(globFiles);

    const importTemplate = (file) => `@import "${file.replace('.scss', '')}";`;

    const postCssResult = postCssScss.parse(fs.readFileSync(libConfig.mainFile, 'utf-8'), { from: libConfig.mainFile });
    postCssResult.walkAtRules('import', (node) => {
        const componentName = node.params.replace(/['"]/g, '');
        files.delete(componentName);
    });

    const missingFiles = [...files.keys()];
    const missingContent = missingFiles.map((f) => importTemplate(f)).join('\n') + '\n';
    if (isFix && missingFiles.length) {
        fs.appendFileSync(libConfig.mainFile, missingContent);
        return;
    }

    if (missingFiles.length > 0) {
        throw Error(`Found ${missingFiles.length} file(s) that are not included into the root styles file:
${missingFiles.join('\n')}
Add these lines to the ${libConfig.mainFile} file:\n${missingContent}
        `);
    }
};

getComponentsList(config[lib]);
