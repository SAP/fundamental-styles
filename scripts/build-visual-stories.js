const { lstatSync, readdirSync, writeFileSync } = require('fs');
const path = require('path');
const lineReader = require('line-reader');
const srcPath = path.join(__dirname, '../stories');
const babelParser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const fs = require('fs');

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

// const getStyleImports = (storyFile) => {
//     return new Promise(resolve => {
//         const cssImportStatementRegex = /import.*\.css';/g;
//         let styleImports = [];
//         lineReader.eachLine(storyFile, (line, last) => {
//             if (line.match(cssImportStatementRegex)) {
//                 styleImports.push(line);
//             }

//             if (last) {
//                 resolve(styleImports.length ? styleImports.join('\n') : '');
//                 return false; // stop reading
//             }
//         });
//     });
// };

const print = (fileName, printer) => {
    if (fileName.indexOf('button') !== -1) {
        printer();
    }
};

const getStyleImports = (storyFile) => {
    return new Promise(resolve => {
        fs.readFile(storyFile, (err, data) => {
            if (err) {
                console.error('☢️', err);
            }
            if (data) {
                const ast = babelParser.parse(data.toString(), {
                    sourceType: 'module'
                });
                traverse(ast, {
                    ObjectProperty: function(astPath) {
                        // print(storyFile, () => {
                        //     console.log('🕸', astPath.node.key.name, '>>>>>>>.');
                        // });
                        const identifier = astPath.node.key || {};
                        const value = astPath.node.value || {};
                        if (identifier.name === 'components') {
                            let depsAsString = 'empty';
                            if (value.type === 'ArrayExpression') {
                                const dependencies = value.elements || [];
                                depsAsString = dependencies.map(eachDependency => {
                                    if (eachDependency.value && eachDependency.value.trim().length) {
                                        return `'${eachDependency.value}'`;
                                    }
                                    return '';
                                }).join(', ');
                                resolve(`components: [${depsAsString}]`);
                            }
                            // print(storyFile, () => {
                            //     console.log('🕸', depsAsString);
                            // });
                        }
                    }
                });
            }
        });
    });
};

// For every component directory.
componentDirs.map((directory) => {
    // Loop through its files.
    directory.fileNames.map(async(fileName) => {
        // get only stories.js files
        if (fileName.includes('.stories.js')) {
            // Grab the component name
            const componentName = fileName.substr(0, fileName.indexOf('.'));
            const prettyCompName = componentName.split('-').map(str => str[0].toUpperCase() + str.substr(1)).join(' ');
            const visualStoryName = componentName.split('-').map(str => str[0].toUpperCase() + str.substr(1)).join('');
            const dependentStyleImports = await getStyleImports(`${directory.path}/${fileName}`);
            const fileContents =
`import * as Case from 'case';
import * as stories from './${componentName}.stories.js';

export default {
    title: 'Visual/${prettyCompName}'${dependentStyleImports ? ',' : ''}
    ${
    dependentStyleImports ?
        `parameters: {
        ${dependentStyleImports}
    }
` : ''
}
};

export const ${visualStoryName} = () => {
    let storyNames = Object.keys(stories).filter(story => story !== 'default' && story !== 'dev');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<h2>' + Case.capital(item) + '</h2>' +
        '<div>' + stories[item]() + '</div> <br /> <hr /> <br /> <br />';
    }).join('');
    return div;
};

`;
            // write the visual story file into the directory.
            let visualPath = path.join(directory.path, `${componentName}.visual.js`);
            writeFileSync(visualPath, fileContents);
        }
    });
});
