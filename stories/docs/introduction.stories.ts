import { fundamentalTheme as theme, RenderPackageIntroduction } from 'fundamental-styles/storybook';
import Readme from '../../README.md?raw';
import { Docs, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
    title: 'Docs / Introduction',
    component: () => {
        return null;
    },
    parameters: {
        docs: {
            DocsContainer,
            page: RenderPackageIntroduction(Readme),
            theme
        },
        previewTabs: {
            canvas: {
                hidden: true
            }
        },
        viewMode: 'docs',
        visualDisabled: true,
        docsOnly: true
    }
};

export const Overview = {
    render: () => {
        /*
          this will serve as default redirect to the docs page,
          otherwise it will render this empty div without ability
          to select 'docs'
         */
        return '<div></div>';
    },

    parameters: {
        title: 'Overview',
        storyshots: { disable: true },
        viewMode: 'docs',
        docsOnly: true
    }
};
