const { merge } = require('webpack-merge');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const stylesLoader = require('./custom/loaders/load-styles');
const isProduction = require('./custom/constants/isProduction');
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
const staticDirs = ['static/', '../node_modules/@sap-theming'];
const addons = [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-cssresources/register',
    '@storybook/addon-viewport/register',
    {
        name: '@storybook/addon-docs',
        options: {
            transcludeMarkdown: true
        }
    },
    '@storybook/addon-toolbars',
    '@storybook/addon-controls',
    './custom/addons/FioriVersion/register.js'
];

if (isProduction) {
    staticDirs.push('../dist/', '../dist-fn/dist/', '../dist-common-css/dist/', '../dist-fn-icons/dist/');
}

module.exports = {
    stories: ['../stories/docs/introduction.stories.js', `../stories/**/*.@${includedStories}.@(js|mdx)`],
    staticDirs: staticDirs,
    addons: addons,
    core: {
        builder: 'webpack5',
        disableTelemetry: true, // 👈 Disables telemetry
    },
    webpackFinal: async (config) => {
        config.plugins.push(
            new DefinePlugin({
                PRODUCTION: JSON.stringify(isProduction),
                STORYBOOK_ENV: JSON.stringify(process.env.STORYBOOK_ENV)
            })
        );

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
                },
                'css-loader'
            ]
        });

        config.module.rules.push(stylesLoader);

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
