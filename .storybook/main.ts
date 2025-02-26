import { StorybookConfig } from '@storybook/html-vite';
import { readFileSync } from 'fs';
import { mergeConfig } from 'vite';
import { loadCsf } from '@storybook/csf-tools';
import { getOwner } from './custom/addons/utilities/get-owner';
import { relative } from 'path';
import remarkGfm from 'remark-gfm';
import { storybookPackages } from '../projects';

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
const includedPackages = `(${storybookPackages})`;
const staticDirs = ['static/', '../node_modules/@sap-theming'];
const storybookAddons = [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    {
        name: '@storybook/addon-docs',
        options: {
            transcludeMarkdown: true,
            mdxPluginOptions: {
                mdxCompileOptions: {
                    remarkPlugins: [remarkGfm],
                },
            },
        }
    },
    '@storybook/addon-toolbars',
    '@storybook/addon-controls',
    './custom/addons/theme-switcher/register',
    '@chromatic-com/storybook'
];
const config: StorybookConfig = {
    stories: ['../stories/docs/introduction.stories.ts', '../stories/docs/compact-docs.stories.ts', `../packages/@${includedPackages}/**/*.@${includedStories}.@(ts|tsx|js|jsx)`, `../stories/**/*.@${includedStories}.@(ts|tsx|js|jsx)`],
    staticDirs: staticDirs,
    addons: storybookAddons,
    core: {
        disableTelemetry: true,
    },
    experimental_indexers: (indexers) => {
        const createIndex = async (fileName, opts) => {
            const owner = getOwner({ importPath: './' + relative(process.cwd(), fileName).replace(/\\/g, '/') });
            const code = readFileSync(fileName, { encoding: 'utf-8' });
            return loadCsf(code, {
                ...opts, fileName, makeTitle: (userTitle) => {
                    return owner ? `${owner.title} / ${userTitle}` : userTitle;
                }
            }).parse().indexInputs;
        };

        return [
            {
                test: /(visual|stories)\.(js|ts)$/,
                createIndex
            } as any,
            ...(indexers || [])
        ];
    },
    typescript: {
        check: false
    },
    async viteFinal(config) {
        return mergeConfig(config, {
            base: process.env.STORYBOOK_BASE_HREF
        });
    },
    framework: {
        name: '@storybook/html-vite',
        options: {}
    },
    docs: {}
};
export default config;
