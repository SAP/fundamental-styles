const { sync } = require('fast-glob');
const { parse } = require('@babel/core');
const generate = require('@babel/generator');
const { parse: parsePath, resolve } = require('path');
const { readFileSync, writeFileSync, unlinkSync } = require('fs');
const storyFiles = sync('packages/styles/**/*.stories.js');

const storiesContainingCompact = [];

for (const storiesFilePath of storyFiles) {
    const parsedPath = parsePath(storiesFilePath);
    const content = readFileSync(storiesFilePath, 'utf8');
    const ast = parse(content);
    const imports = ast.program.body.filter(node => node.type === 'ImportDeclaration' && node.specifiers.length === 1 && node.specifiers[0].type === 'ImportDefaultSpecifier' && node.specifiers[0].local.name.endsWith('ExampleHtml'));

    const stories = imports.map(node => {
        const storyName = node.specifiers[0].local.name[0].toUpperCase() + node.specifiers[0].local.name.replace('ExampleHtml', '').substring(1);
        const htmlImportFile = resolve(parsedPath.dir, node.source.value.replace('?raw', '')).replace('/Users/giorgicheishvili/Projects/SAP/fundamental-styles/', '');
        const htmlImport = readFileSync(htmlImportFile, 'utf8');
        const foundIn = storyName.toLowerCase().indexOf('compact') > -1 ? 'name' : (htmlImport.indexOf('--compact') > -1 ? 'html' : null);
        return {
            ast,
            storiesFilePath,
            storyName,
            htmlImportFile,
            foundIn,
            importNode: node,
            storyNode: ast.program.body.find(node => node.type === 'ExportNamedDeclaration' && node.declaration.declarations[0].id.name === storyName)
        };
    });

    storiesContainingCompact.push(...stories.filter(story => story.foundIn));
}

for (const storyContainingCompact of storiesContainingCompact) {
    if (storyContainingCompact.foundIn === 'name') {
        storyContainingCompact.ast.program.body.splice(storyContainingCompact.ast.program.body.indexOf(storyContainingCompact.importNode), 1);

        storyContainingCompact.ast.program.body.splice(storyContainingCompact.ast.program.body.indexOf(storyContainingCompact.storyNode), 1);

        [...storyContainingCompact.ast.program.body].forEach(node => {
            if (node.type === 'ExpressionStatement' && node.expression.left.object.name === storyContainingCompact.storyName) {
                storyContainingCompact.ast.program.body.splice(storyContainingCompact.ast.program.body.indexOf(node), 1);
            }
        });
        const { code } = generate.default(storyContainingCompact.ast.program, { code: true });
        writeFileSync(storyContainingCompact.storiesFilePath, code);
        unlinkSync(storyContainingCompact.htmlImportFile);
    }
}

// const mappedStories = storiesContainingCompact.reduce((acc, story) => {
//     const formattedStory = {
//         storyName: story.storyName,
//         foundIn: story.foundIn,
//         htmlImportFile: story.htmlImportFile
//     };
//     if (acc[story.storiesFilePath]) {
//         acc[story.storiesFilePath].push(formattedStory);
//     } else {
//         acc[story.storiesFilePath] = [formattedStory];
//     }
//     return acc;
// }, {});
//
// writeFileSync('stories-containing-compact.json', JSON.stringify(mappedStories, null, 2));
