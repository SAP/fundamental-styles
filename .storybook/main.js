const path = require("path");
const glob = require("glob");
const { exec } = require("child_process");

const cssLoader = ["style-loader", "css-loader"];
const scssLoader = [
  {
    loader: "sass-loader",
    options: {
      implementation: require("node-sass"),
    },
  },
];

module.exports = {
  stories: ["../stories/**/*.stories.js"],
  addons: [
    "@storybook/addon-knobs/register",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/preset-scss",
    "@storybook/addon-a11y/register",
    "@storybook/addon-cssresources/register",
    "@storybook/addon-viewport/register",
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules = [
      {
        test: /\.(css|scss)$/,
        use: [...cssLoader, ...scssLoader],
        include: path.resolve(__dirname, "../"),
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loaders: ["file-loader"],
      },
      {
        test: /\.(html|svelte)$/,
        use: ["svelte-loader"],
        include: path.resolve(__dirname, "../stories"),
        exclude: path.resolve(__dirname, "../node_modules"),
      },
    ];
    config.plugins.push({
      // Custom plugin to add scss files to webpack watcher
      apply: (compiler) => {
        compiler.hooks.afterCompile.tap("after-compile", (comp) => {
          const files = glob.sync("src/**/*.scss", {
            cwd: process.cwd(),
            dot: true,
            absolute: true,
          });
          files.forEach((file) => {
            comp.fileDependencies.add(path.resolve(file));
          });
        });
      },
    });
    config.plugins.push({
      // Custom plugin to rebuild css styles for each scss change
      apply: (compiler) => {
        compiler.hooks.watchRun.tap("watchRun", (comp) => {
          const filesChanged = comp.watchFileSystem.watcher.mtimes;
          const wasLessChanged = Object.keys(filesChanged).some((file) => file.includes(".scss"));

          if (wasLessChanged) {
            exec("npm run build:default", (err, stdout, stderr) => {
              if (stdout) process.stdout.write(stdout);
              if (stderr) process.stderr.write(stderr);
            });
          }
        });
      },
    });

    return config;
  },
};
