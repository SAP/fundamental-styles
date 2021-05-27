/* eslint-disable no-console */
const { lstatSync, readdirSync, writeFileSync } = require('fs');
const path = require('path');
const srcPath = path.join(__dirname, '../stories');
const rimraf = require('rimraf');

console.info('Accessibility unit tests 🔬');
console.info('  Trying to clean/remove all accessibility tests. 🗑');

const componentsToExclude = [
    'object-list',
    'object-status',
    'tabs',
    'facets',
    'counter',
    'busy-indicator',
    'object-marker',
    'multi-input',
    'token',
    'notification',
    'card',
    'list-grid',
    'wizard',
    'table',
    'numeric-content',
    'shellbar',
    'user-menu',
    'dialog',
    'avatar-group',
    'side-navigation',
    'multi-combo-box',
    'generic-tile',
    'dynamic-page'
];

rimraf('**/*.accessibility.test.js', (rimRafError) => {
    if (rimRafError) {
        console.error('    Failed to clean all accessibility tests!! ❌ ', rimRafError);
    } else {
        console.info('    Removed all accessibility tests. ✅ ');
    }

    try {
        console.info('  Trying to build all accessibility tests. 🏗');

        const isComponentDirectory = (source) => {
            const ignoredDirectories = ['utils', 'Docs'];
            return lstatSync(source).isDirectory() && !ignoredDirectories.some(ignored => source.includes(ignored));
        };

        const componentDirs = readdirSync(srcPath).map(name => path.join(srcPath, name)).filter(isComponentDirectory).map(directory => {
            return {
                path: `${directory}/`,
                fileNames: readdirSync(`${directory}/`)
            };
        });

        // For every component directory.
        componentDirs.map((directory) => {
            // Loop through its files.
            directory.fileNames.map(async(fileName) => {
                // get only stories.js files
                if (fileName.includes('.stories.js')) {
                    // Grab the component name
                    const componentName = fileName.substr(0, fileName.indexOf('.'));

                    const isExcluded = componentsToExclude.includes(fileName.replace('.stories.js', ''));

                    const fileContents =
`import { axe } from '../../scripts/axe-unit-test';
import { toHaveNoViolations } from 'jest-axe';
import * as stories from './${componentName}.stories.js';

expect.extend(toHaveNoViolations);
jest.setTimeout(30000); //to give some time (30s) for dom rendering

describe('${componentName} and all its variants', () => {
    it${isExcluded ? '.skip' : ''}('should not have any accessibility violations', async() => {
        let storyNames = Object.keys(stories).filter(story => story !== 'default' && story !== 'dev');
        for ( const eachStoryName of storyNames ) {
            const eachStory = stories[eachStoryName];
            expect(await axe(eachStory())).toHaveNoViolations();
        }
    });
});

`;
                    // write the accessibility test file into the directory.
                    let testPath = path.join(directory.path, `${componentName}.accessibility.test.js`);
                    writeFileSync(testPath, fileContents);
                }
            });
        });
        console.info('    Built all accessibility tests. ✅');
    } catch (error) {
        console.error('    Failed to build all accessibility tests. ❌', error);

    }
});
