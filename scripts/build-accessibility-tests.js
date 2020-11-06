/* eslint-disable no-console */
const { lstatSync, readdirSync, writeFileSync } = require('fs');
const path = require('path');
const srcPath = path.join(__dirname, '../stories');
const rimraf = require('rimraf');

console.info('Trying to clean/remove all accessibility tests. 🧪 🗑 ');

rimraf('**/*.accessibility.test.js', (rimRafError) => {
    if (rimRafError) {
        console.error('Unable to clean all accessibility tests!! 🧪 ❌', rimRafError);
    } else {
        console.info('Removed all accessibility tests. 🧪 🗑 ✅');
    }

    console.info('Trying to build all accessibility tests. 🧪 🏗');

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


                const fileContents =
`import { axe } from '../../scripts/axe-unit-test';
import { toHaveNoViolations } from 'jest-axe';
import * as stories from './${componentName}.stories.js';

expect.extend(toHaveNoViolations);
describe('${componentName} and all its variants', () => {
    it('should not have any accessibility violations', async() => {
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
});
