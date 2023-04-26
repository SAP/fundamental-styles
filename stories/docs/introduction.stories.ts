import { fundamentalTheme as theme, RenderPackageIntroduction } from 'fundamental-styles/storybook';
import Readme from '../../README.md?raw';
import { DocsContainer as container } from '@storybook/addon-docs';

export default {
    title: 'Introduction',
    component: () => {
        return null;
    },
    parameters: {
        docs: {
            container,
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

export const Overview = () => {
    /*
      this will serve as default redirect to the docs page,
      otherwise it will render this empty div without ability
      to select 'docs'
     */
    return '<div></div>';
};

Overview.parameters = {
    title: 'Overview',
    storyshots: { disable: true },
    viewMode: 'docs',
    docsOnly: true
};
