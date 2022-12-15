import {StorybookViteConfig} from "@storybook/builder-vite";
import {mergeConfig} from "vite";

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
const storybookAddons = [
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
    './custom/addons/package-switch/register',
    './custom/addons/theme-switcher/register'
];

const config: StorybookViteConfig = {
    stories: [
        '../stories/docs/introduction.stories.js',
        `../packages/**/*.@${includedStories}.@(ts|tsx|js|jsx)`,
        `../stories/**/*.@${includedStories}.@(ts|tsx|js|jsx)`
    ],
    staticDirs: staticDirs,
    addons: storybookAddons,
    core: {
        builder: '@storybook/builder-vite'
    },
    features: {
        storyStoreV7: true,
    },
    typescript: {
        check: false
    },
    async viteFinal(config) {
        const base = await import('../vite.config');
        return mergeConfig(config, {
            ...base.default,
            base: process.env.STORYBOOK_BASE_HREF
        });
    }
};

export default config;
