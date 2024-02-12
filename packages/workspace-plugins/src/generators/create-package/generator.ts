import { Tree } from 'nx/src/generators/tree';
import { CreatePackageSchema } from './schema';
import { formatFiles, generateFiles, logger, names, updateJson, workspaceRoot } from '@nx/devkit';
import { updateProjectsJs } from './update-projects-js';
import { updatePackageConfigurations } from './update-package-configurations';

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
        updateProjectsJs(tree, {
            projectTitle: namings.name,
            projectName: namings.fileName,
            root: projectRoot
        });

        generateFiles(tree, `${__dirname}/files/package-info`, projectRoot, namings);

        updatePackageConfigurations(tree, {
            importPath: schema.importPath,
            configName: namings.propertyName
        });

        ['.github/workflows/create-release.yml'].forEach((pathToWorkflow) => {
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
