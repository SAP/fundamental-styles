import { createRequire } from "node:module";
import { StorybookConfig } from '@storybook/html-vite';
import { readFileSync } from 'fs';
import { mergeConfig } from 'vite';
import { loadCsf } from 'storybook/internal/csf-tools';
import { getOwner } from './custom/addons/utilities/get-owner';
import { relative, dirname, join } from 'path';
import remarkGfm from 'remark-gfm';
import { storybookPackages } from '../projects';
import { resolve } from 'path';

const require = createRequire(import.meta.url);

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
const storybookAddons = [getAbsolutePath("@storybook/addon-links"), getAbsolutePath("@storybook/addon-a11y"), {
    name: getAbsolutePath("@storybook/addon-docs"),
    options: {
        transcludeMarkdown: true,
        mdxPluginOptions: {
            mdxCompileOptions: {
                remarkPlugins: [remarkGfm],
            },
        },
    }
}, getAbsolutePath("./custom/addons/theme-switcher/register"), getAbsolutePath("@chromatic-com/storybook")];
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
        name: getAbsolutePath("@storybook/html-vite"),
        options: {}
    }
};
export default config;

function getAbsolutePath(value: string): string {
    if (value.startsWith('.') || value.startsWith('/')) {
        // Assume relative/local path
        return resolve(__dirname, value);
    }
    // Assume it's a package
    return dirname(require.resolve(join(value, "package.json")));
}
