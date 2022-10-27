import { DocsContainer as container } from '@storybook/addon-docs';
import { fundamentalTheme as theme, IntroductionPageWrapper } from 'fundamental-styles/storybook';
import Readme from '../README.md';

export default {
    title: 'Introduction',
    component: () => {
        return null;
    },
    parameters: {
        docs: {
            container,
            page: () => <IntroductionPageWrapper content={<Readme />} />,
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

export const Styles = () => {
    /*
      this will serve as default redirect to the docs page,
      otherwise it will render this empty div without ability
      to select 'docs'
     */
    return '<div></div>';
};

Styles.parameters = {
    storyshots: { disable: true },
    docsOnly: true
};
