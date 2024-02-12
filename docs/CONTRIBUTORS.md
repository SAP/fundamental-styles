## Directories and files

First of all, project is using NX workspaces, so everything that is applicable to NX workspaces is applicable to this project as well.
This file describes the specific things that are done for the `fundamental-styles`.
* `./packages` - Here resides packages that are publishable or are for internal use.
  * `./packages/doc-ui` - Components, hooks and contexts for the documentation pages.
  * `./packages/storybook` - Storybook decorators and interfaces
  * `./packages/configuration` - Configuration for the project, things like list of 
    packages for storybook UI, previous versions and etc.
  * `./packages/workspace-plugins` - Plugin for workspace management. Executors for building, version syncing and etc.
  * `./packages/**` - Packages that are publishable
* `./projects.js` - List of the projects; This file exists, because it is consumable by both storybook manager and preview parts.
    In general, they work in different environments. Manager is running with ESBuild and preview is running with Vite.
    ESBuild can only include in itself JS or TS files, but we also need to have access to other types of files, things like `scss`
    files for theming and etc. List of the available themes is described in this file, but what stands behind particular theme is resolved in the
    `packages/configuration/src/lib/packages.ts` file. Per project themes are described in their folders.
* `./packages/*/theming/*.scss` - are files, where the variables for themes are defined or collected from various places.
* `./packages/*/package-config.ts` - are files, where the already collected data from `./projects.js` is consumed and combined
    with the data from `./packages/*/theming/*.scss` files. These files are later imported in `packages/configuration/src/lib/packages.ts`
    and then used by the storybook to properly set themes for previews.

## Executors
Executors are used to run commands in the workspace.
* `workspace-plugins:build` executor, that is used to build the
project and sync versions of the packages. It is used in the `build` script in the `package.json` file.
* `workspace-plugins:visual-stories` executor creates visual stories for regression testing.
* `workspace-plugins:build-theming-preview` executor builds the theming preview package. **it is only for that**

## Generators
Generators are used to create new files in the workspace.
* `workspace-plugins:create-package` generator creates new package in the workspace.

## Package types
There are two types of `publishable` packages:
* Packages that have stories attached to them
* Packages that are used by other packages **AND** do not have stories attached to them

Stories for the first type are located in the `./packages/*/stories` folder. Stories can be written in `js`, `jsx`,
`ts` or `tsx` files, but latter two are preferred.

## .storybook folder
This folder contains the configuration for the storybook. In there are custom addons.
* `package-switch` addon is responsible for tracking global variable changes and updating sidebar accordingly.
* `theme-switch` addon is adding theme switcher dropdown to the story previews. It is different from storybook's
globalTypes toolbar addon in a way that it is aware that there will be many different sets for many different stories.
It updates list of available themes for each story, based on the package's configuration, from which the story is coming from.
It only adds this dropdown when in "canvas" mode.

In `preview.ts` file you'll see `globalTypes`, which have empty objects as a value. That is because otherwise storybook
will not save the global otherwise when switching between stories. There you'll see object properties `fn-theme` and `styles-theme`.
This project supports different sets of themes for different packages. For example, when you open up story from `styles` package,
it will consume theme, declared under `styles-theme` global property. Same applies to every other package.

## Writing stories

* Stories should **import** CSS files directly to ensure direct dependency on the CSS files. This is important for the
correct work of the HMR in the storybook.
* Stories should be placed in folders so that it reflects path under which they will be rendered in storybook sidebar.
* Title should always be StringLiteral, meaning no variable usage in them and no template literals.
* Story file name should end with `.stories.(ts|tsx|js|jsx)`.
* Story file name should be the same as the component name.
* Story function should return either `HTMLElement` or valid HTML string
* Default story file export can have additional parameters
    * tags - Array of the strings, that will be used to display the tags under the title in documentation
    * description - Markdown String, that will be used to display the description under the tags
* Story functions can have additional info as well in this fashion
 ```js
StoryFunction.storyName = 'Story name'; // optional
StoryFunction.parameters = {
  docs: {
    story: {
        iframeHeight: 500
    }, // optional
    description: {
      story: 'Story description in markdown format', // optional
    }
  }
};
```

## Versioning

fundamental-styles consists of multiple sub-packages and the versions for all of them
are managed by the root package.json file. This is done to ensure that all the packages
are in sync with each other. The versioning of the packages is done using
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) and [Semantic Versioning](https://semver.org/).

All the information about the versioning is given in the links above
but TL;DR is that before we reach version 1, every fix, feature or chore is resulting in the patch version change,
if those changes do not break the API, and if they do, then the minor version is changed.

After version 1, the patch version is the result of the bug fixes, minor version is the result of the new features,
and major version is the result of the breaking changes.

After every merge into the main, `rc` version is released automatically with the changes it includes,
this ensures fast feedback loop for the users of the library, and allows us to test the changes in the real world.
