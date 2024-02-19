# Adding package to the workspace

This document describes the process of adding a new package to the workspace.
While there is a simple command to create a new package, we will be going through the process manually to understand
the structure and the configuration of the package.

## Prerequisites
- [Node.js](https://nodejs.org/en/) installed
- [Yarn](https://yarnpkg.com/) installed
- node modules installed in the root of the workspace

## Steps
- Create empty js project in the workspace using command
```
nx g @nx/js:library package-name --importPath=@fundamental-styles/<package-name> --bundler=none --minimal --strict --unitTestRunner=none --directory=packages/<package-name> --projectNameAndRootFormat=as-provided
```
- Create an empty `package.json` file in the root of the package
```json
{
  "name": "@fundamental-styles/<package-name>",
  "version": "VERSION_PLACEHOLDER",
  "license": "Apache-2.0",
  "homepage": "https://sap.github.io/fundamental-styles/",
  "description": "SAP UI Common CSS",
  "repository": {
    "type": "git",
    "url": "https://github.com/SAP/fundamental-styles"
  }
}
```
- Open up the `{workspaceRoot}/projects.js` file and edit the `workspaceProjects` object to include the new package
```diff
@@ -6,7 +6,8 @@ import { snakeCase } from 'lodash/string';
 const workspaceProjects = {
     styles: 'packages/styles',
     ['common-css']: 'packages/common-css',
-    cx: 'packages/cx'
+    cx: 'packages/cx',
+    ['<package-name>']: 'packages/<package-name>'
 };

```
- Add the package human-readable name to the `projectNames` object in the same file
```diff
@@ -92,7 +93,8 @@ export const themes = {
 const projectNames = {
     styles: 'SAP Fiori',
     ['common-css']: 'Common CSS',
-    cx: 'CX'
+    cx: 'CX',
+    ['<package-name>']: 'Package name'
 };
```

- Create the fundamental-<package-name>.scss file in the `src` folder of the package. This will serve as the single bundle file for all the styles in the package.

- Add the following configurations to the projects `project.json`
```
{
    ...otherProperties,
    "targets": {
        "build": {
            "executor": "workspace-plugins:build",
                "outputs": ["{options.outputPath}"],
                "options": {
                "source": "packages/<package-name>/src",
                "outputPath": "dist/packages/<package-name>",
                "assets": ["packages/<package-name>/*.md"]
            },
            "configurations": {
                "production": {
                    "minify": true
                }
            }
        },
        "sync-entry": {
            "executor": "workspace-plugins:sync-components",
                "options": {
                "entry": "{projectRoot}/src/fundamental-<package-name>.scss",
                "include": ["{projectRoot}/src/*.scss"],
                "exclude": ["{options.entry}"]
            },
            "outputs": ["{options.entry}"]
        },
        "lint": {
            "executor": "@nx/eslint:lint",
            "outputs": ["{options.outputFile}"]
        },
        "stylelint": {
            "executor": "nx-stylelint:lint",
            "outputs": ["{options.outputFile}"],
            "options": {
                "lintFilePatterns": ["packages/<package-name>/**/*.scss"]
            }
        }
    }
}
```

Additional configurations can be added to the `projects.js` file if your package has a themes support.
In `projects.js` file, add the following configurations to the `themes` object
```
{
    ...otherPackages,
    [<package-name>]: {
        defaultTheme: 'default_theme_name',
        themes: [
            {
                value: 'default_theme_name',
                title: 'Name which is visible in selector'
            },
            {
                value: 'other_theme_name',
                title: 'Name which is visible in selector'
            }
        ]
    }
}
```
and then create `packages/<package-name>/package-config.ts` file and populate with the following content
```ts
import { PackageConfigInterface } from 'fundamental-styles/storybook';

import { projects } from '../../projects';

// The values in the themesVariables object should be replaced with the actual theme variables
// Either from the package or from the design system
const themesVariables = {
    default_theme_name: `
        :root {
            // theme variables
        }
    `,
    other_theme_name: `
        :root {
            // other theme variables
        }
    `
};

export const packageConfig: PackageConfigInterface = {
    ...projects['<package-name>'],
    value: '<package-name>',
    themes: projects['<package-name>'].themes.map((theme) => {
        return {
            id: theme.value,
            name: theme.title,
            variables: themesVariables[theme.value]
        }
    })
};
```
Do not forget to add `export * from './package-config';` to the `packages/<package-name>/index.ts` file!

Then head to the `packages/configuration/src/lib/packages.ts` and `import { packageConfig as packageNameConfig } from '@fundamental-styles/<package-name>';`
and add `packageNameConfig` to the `packages` array.

### Publishing
After all steps from above are done, package is ready to be published. To publish the package add it to the github workflows create-release.yml and create-hotfix.yml files.
You need to find step which uses `./.github/actions/npm-publish` action and add the dist folder of the package to the `packagePaths` input of the action.

After that, you can create a release and the package will be published to npm.
