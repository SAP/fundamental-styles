# Fundamental styles visual stories executor

Executor generates `Visual` stories for target project's stories. It combines every story in every `*.stories.(ts|tsx|js|jsx)`
file with every theme which is passed to it from options.

You can ignore stories by providing `Regex` pattern to options property `excludedStoriesKinds` or by setting
`true` in `parameters.visualDisabled`.

## Usage

In `project.json` of the target project, add new task with a configuration like so:
```
{
    // Rest of the project.json
    "targets": {
        // Rest of the targets
        "build-visual": {
            "executor": "workspace-plugins:visual-stories",
                "options": {
                "themes": [
                    // The list of the themes which will be used to generate stories
                    // Themes should be attached to the given project in the `{workspaceRoot}/projects.js` file
                ],
                "excludedStoriesKinds": [
                    // The list of the regex patterns which will be used to exclude stories
                    // The passed parameters will be matched agains story titles
                    "^(Helpers|Dev)"
                ]
            },
            "outputs": ["path/to/output/folder/relative/to/workspaceRoot"]
        }
    }
}
```
after that you can run the executor with `nx run <project-name>:build-visual` command and look for the generated
stories in the `path/to/output/folder/relative/to/workspaceRoot` folder.

## How it works

The executor will look for every `/stories/**/*.stories.+(js|jsx|ts|tsx)` file inside target project's root
folder, so for example if you have a project in `{workspaceRoot}/packages/styles`, then executor will look for
stories with micromatch `{workspaceRoot}/packages/styles/stories/**/*.stories.+(js|jsx|ts|tsx)`.

Then the executor will find the themes, from the [projects.js](projects.js) file. The themes should be attached to
the target project in the `projects.js` file, otherwise executor will throw an error.

After that, executor will traverse every story, parse the story file(using babel), find the default export object and
using that, it will find what is the title of the story and also if it's excluded from the visual story generation.
Meaning if there is a `parameters.visualDisabled` property in the story object and it's set to `true`, then the story
will be excluded from the generation.

From the story title, we try and figure out what should be the name of the generated visuals file. The pattern used is
`{outputPath}/{storyOriginalPath.replace('{projectRoot}', '')/{dashCase(storyTitle)}.{themeName}.visual.ts`

The created visual stories file will import `* as stories` from the original story file and will export a new default
object, which will have a title `Visuals/{storyTitle}/{themeName}`. The stories themselves are by design written in
HTML framework of storybook, so basically they are a functions, which return a string of HTML. We use that fact and we
have a function which will traverse the `stories` object and will call every story function and generate in runtime
the HTML string, which will be used to generate the visual story. More details about that function can be found in
[visual-stories.ts](packages/storybook/src/lib/visual-stories.ts) file.
