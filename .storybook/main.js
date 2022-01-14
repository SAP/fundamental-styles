const { merge } = require('webpack-merge');
const CompileOnSassFileChangesPlugin = require('./CompileOnSassFileChangesPlugin');
const AddSCSSFilesToWatchPlugin = require('./AddSCSSFilesToWatchPlugin');

const maxAssetSize = 1024 * 1024;

const storiesToInclude = () => {
    const mode = process.env.STORYBOOK_ENV;
    switch (mode) {
        case 'docs':
            return '(stories)';
        case 'chromatic':
            return '(visual)';
        default:
            return '(stories|visual)';
    }
};

const includedStories = storiesToInclude();

module.exports = {
    stories: ['../stories/docs/introduction.stories.mdx', `../stories/**/*.@${includedStories}.@(js|mdx)`],
    staticDirs: ['static/', '../node_modules/@sap-theming', '../dist/', '../dist-fn/dist/'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/preset-scss',
        '@storybook/addon-a11y',
        '@storybook/addon-cssresources/register',
        '@storybook/addon-viewport/register',
        '@storybook/addon-docs',
        '@storybook/addon-toolbars',
        '@storybook/addon-controls'
    ],
    core: {
        builder: 'webpack5'
    },
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.stories\.js?$/,
            use: [{ loader: 'story-description-loader' }]
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

        config.plugins.push(new AddSCSSFilesToWatchPlugin());
        config.plugins.push(new CompileOnSassFileChangesPlugin());

        return merge(config, {
            optimization: {
                splitChunks: {
                    chunks: 'all',
                    minSize: 30 * 1024,
                    maxSize: maxAssetSize
                },
                runtimeChunk: true
            },
            performance: {
                hints: 'warning',
                maxAssetSize: maxAssetSize
            }
        });
    }
};
