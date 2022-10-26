import glob from 'glob';
import { moveSync } from 'fs-extra';
import { parse } from '@babel/core';
import { dirname, join, relative } from 'path';
import { readFileSync, writeFileSync } from 'fs';

const storyFiles = glob.sync('packages/styles/stories/**/*.stories.js');

(async () => {
    for (const storyFile of storyFiles) {
        const storyDirname = dirname(storyFile);

        const { default: defaultExport } = await import(storyFile);
        if (defaultExport.parameters?.components) {
            const imports = defaultExport.parameters?.components
                .map((componentName) => {
                    if (componentName.startsWith('sap-')) {
                        const pathToComponentStyles = relative(
                            storyDirname,
                            `packages/common-css/src/${componentName}.scss`
                        ).replace(/\\/g, '/');
                        return `import '${pathToComponentStyles}';`;
                    }
                    const pathToComponentStyles = relative(
                        storyDirname,
                        `packages/styles/src/${componentName}.scss`
                    ).replace(/\\/g, '/');
                    return `import '${pathToComponentStyles}';`;
                })
                .join('\n');
            writeFileSync(storyFile, `${imports}\n${readFileSync(storyFile, { encoding: 'utf-8' })}`);
        }
    }
})();
