## Fundamental Library package generator

This generator creates a new package in the workspace. It is intended to be used for creating
SCSS packages. It can scaffold a new package and add initial configuration for allowing that package
to appear in the storybook package switcher. It receives few options:

* `name` - name of the package
* `importPath` - import path of the package, which will be used in `package.json` file and also as path alias in tsconfig
* `hasStories` - Boolean input that indicates if the package has stories attached to it. If it does, it will be added to the
  storybook package switcher. If it does not, it will be added to the list of packages that are used by other packages.

### Usage
```bash
nx g workspace-plugins:create-package --name=cx --importPath=@fundamental-styles/cx --hasStories
```

### After generation

After the generation is done, you'll most probably want to specify order of the package stories in storybook sidebar
if you specified it to have stories. To do that, you'll need to navigate to the `.storybook/preview.ts` file and update
variable `storiesOrderByPackage`.

To update the name which is visible on the storybook sidebar and in the package switcher, you'll need to navigate to
`./projects.js` file and update `projectNames` map accordingly.

Package will have generic `README.md` file, which you'll need to update with the package description.
That description will be used both for the `Introduction` page of the package in storybook and also for the package
repository in `npmjs`
