### Fundamental styles package build executor

Executor receives

| Name       | Type                    | Description                             | Required |
|------------|-------------------------|-----------------------------------------|----------|
| source     | string                  | Source path from root                   | Yes      |
| outputPath | string                  | Output path from root                   | Yes      |
| assets     | (string OR AssetGlob)[] | List of assets                           | No       |
| minify     | boolean                 | Whether or not output should be minified | No       |

Information about the `AssetGlob` type can be found either [here](https://nx.dev/packages/js/executors/tsc?ref=root/properties/assets/items/oneOf/0)
or [here](https://angular.io/guide/workspace-config#asset-config), just except for `followSymlinks` property.

Executor compiles files in `source` path and outputs them to `outputPath` path, Then processes it using postCSS and if
`minify` is `true` it also passes it through `cssnano`. Copies all the assets and updates placeholders in project's package.json.
Making it effectively ready to be published.
