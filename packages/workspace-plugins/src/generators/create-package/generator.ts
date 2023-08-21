import { Tree } from 'nx/src/generators/tree';
import { CreatePackageSchema } from './schema';
import { formatFiles, generateFiles, logger, names, updateJson, workspaceRoot } from '@nx/devkit';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import { types } from '@babel/core';
import generate from '@babel/generator';

export default async function(tree: Tree, schema: CreatePackageSchema) {
    const namings = names(schema.name);
    const projectRoot = `packages/${namings.fileName}`;
    generateFiles(tree, `${__dirname}/files/package`, 'packages/', {
        ...namings,
        ...schema
    });

    updateJson(tree, './tsconfig.base.json', (json) => {
        json.compilerOptions.paths[schema.importPath] = [projectRoot];
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
                }
                if ((declaratorPath.node.id as types.Identifier).name === 'workspaceProjects') {
                    const objectExpression = declaratorPath.node.init as types.ObjectExpression;
                    objectExpression.properties.push(
                        types.objectProperty(types.identifier(namings.fileName), types.stringLiteral(projectRoot))
                    );
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
            const existingPackagePaths = new Set(workflowContent.match(/packagePaths: '(.*)'/)![1].split(','));
            existingPackagePaths.add(`dist/packages/${namings.fileName}`)
            const packageList = [...existingPackagePaths.values()].join(',');
            tree.write(
                pathToWorkflow,
                workflowContent.replace(/packagePaths: '(.*)'/, `packagePaths: '${packageList}'`)
            );
        });
    }

    await formatFiles(tree);
    return () => {
        logger.info(`
        Next steps:
        - Open ${workspaceRoot}/projects.js file and confirm that the name is correct'
        - Open '.storybook/preview.ts' file and add your package to the order of the packages. The key for the new package is '${namings.fileName}'
        - Commit the changes
        `);
    };
}
