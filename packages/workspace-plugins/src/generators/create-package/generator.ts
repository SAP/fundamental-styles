import { Tree } from 'nx/src/generators/tree';
import { CreatePackageSchema } from './schema';
import { formatFiles, generateFiles, getWorkspacePath, logger, names, updateJson, workspaceRoot } from '@nrwl/devkit';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import { types } from '@babel/core';
import generate from '@babel/generator';

export default async function (tree: Tree, schema: CreatePackageSchema) {
    const namings = names(schema.name);
    generateFiles(tree, `${__dirname}/files/package`, 'packages/', {
        ...namings,
        ...schema
    });
    updateJson(tree, '.' + getWorkspacePath(tree), (json) => {
        json.projects[namings.fileName] = `packages/${namings.fileName}`;
        return json;
    });
    updateJson(tree, './tsconfig.base.json', (json) => {
        json.compilerOptions.paths[schema.importPath] = [`packages/${namings.fileName}`];
        return json;
    });

    if (schema.hasStories) {
        const projectsJs = tree.read('./projects.js', 'utf-8') as string;
        const ast = parse(projectsJs, {
            sourceType: 'module'
        });
        traverse(ast, {
            VariableDeclarator: (declaratorPath) => {
                if ((declaratorPath.node.id as types.Identifier).name === 'projectNames') {
                    const objectExpression = declaratorPath.node.init as types.ObjectExpression;
                    objectExpression.properties.push(
                        types.objectProperty(types.identifier(namings.fileName), types.stringLiteral(namings.name))
                    );
                    declaratorPath.stop();
                }
            }
        });
        tree.write('./projects.js', generate(ast).code);

        generateFiles(tree, `${__dirname}/files/package-info`, `packages/${namings.fileName}`, namings);

        const packagesConfigTsContent = tree.read('packages/configuration/src/lib/packages.ts', 'utf-8') as string;

        const packagesConfigTsAst = parse(packagesConfigTsContent, {
            sourceType: 'module',
            plugins: ['typescript']
        });
        traverse(packagesConfigTsAst, {
            VariableDeclarator: (declaratorPath) => {
                if ((declaratorPath.node.id as types.Identifier).name === 'packages') {
                    const arrayExpression = declaratorPath.node.init as types.ArrayExpression;
                    arrayExpression.elements.push(types.identifier(namings.propertyName));
                    declaratorPath.stop();
                }
            }
        });
        const newPackagesContent = `
            import {packageConfig as ${namings.propertyName}} from '${schema.importPath}';
            ${generate(packagesConfigTsAst).code}
            `;
        tree.write('packages/configuration/src/lib/packages.ts', newPackagesContent);

        ['.github/workflows/create-hotfix.yml', '.github/workflows/create-release.yml'].forEach((pathToWorkflow) => {
            const workflowContent = tree.read(pathToWorkflow, 'utf-8') as string;
            const packageList = [
                ...workflowContent.match(/packagePaths: "(.*)"/)![1].split(','),
                `dist/packages/${namings.fileName}`
            ].join(',');
            tree.write(pathToWorkflow, workflowContent.replace(/packagePaths: "(.*)"/, `packagePaths: "${packageList}"`));
        });
    }

    await formatFiles(tree);
    return () => {
        logger.info(`
        Next steps:
        - Open ${workspaceRoot}/projects.js file and confirm that name is correct'
        - Open '.storybook/preview.ts' file and add your package to the order of the packages. Key for new package is '${namings.fileName}'
        - Commit changes
        `);
    };
}
