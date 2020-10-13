const path = require("path");
const glob = require("glob");
const { exec } = require("child_process");
const { merge } = require('webpack-merge');

const maxAssetSize = 1024 * 1024;

const storiesToInclude = () => {
  const mode = process.env.STORYBOOK_ENV;
  switch(mode){
    case 'docs':
      return '(stories)';
    case 'chromatic':
      return '(visual)';
    default:
      return '(stories|visual)';
  }
}

const includedStories = storiesToInclude();

module.exports = {
  stories: ['../stories/docs/introduction.stories.mdx', `../stories/**/*.@${includedStories}.@(js|mdx)`],
  addons: [
    "@storybook/addon-knobs/register",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/preset-scss",
    "@storybook/addon-a11y",
    "@storybook/addon-cssresources/register",
    "@storybook/addon-viewport/register",
    '@storybook/addon-docs',
    '@storybook/addon-toolbars',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.stories\.js?$/,
      use: [{ loader: 'story-description-loader' }],
    });
    config.module.rules.push({
      test: /\.css?$/,
      use: [
        {
            loader: 'style-loader',
            options: {
                injectType: 'lazyStyleTag'
            }
        }
    ]
    });
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

    return merge(config, {
      optimization: {
          splitChunks: {
              chunks: 'all',
              minSize: 30 * 1024,
              maxSize: maxAssetSize,
          },
          runtimeChunk: true,
        },
        performance: {
          hints: 'warning',
          maxAssetSize: maxAssetSize
        }
  });
  },
};
