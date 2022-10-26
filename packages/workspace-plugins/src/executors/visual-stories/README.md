### Fundamental styles visual stories executor

Executor generates `Visual` stories for target project's stories. It combines every story in every `*.stories.(ts|tsx|js|jsx)`
file with every theme which is passed to it from options.

You can ignore stories by providing `Regex` pattern to options property `excludedStoriesKinds` or by setting
`true` in `parameters.visualDisabled`.
