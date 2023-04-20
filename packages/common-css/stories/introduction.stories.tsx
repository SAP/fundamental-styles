import { DocsContainer as container } from '@storybook/addon-docs';
import { fundamentalTheme as theme, IntroductionPageWrapper } from 'fundamental-styles/storybook';
import Readme from '../README.md?raw';
import Markdown from 'markdown-to-jsx';

export default {
    title: 'Common CSS / Introduction',
    component: () => {
        return null;
    },
    parameters: {
        docs: {
            container,
            page: () => <IntroductionPageWrapper><Markdown children={Readme}/></IntroductionPageWrapper>,
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

export const CommonCSS = () => {
    /*
      this will serve as default redirect to the docs page,
      otherwise it will render this empty div without ability
      to select 'docs'
     */
    return '<div></div>';
};

CommonCSS.parameters = {
    storyshots: { disable: true },
    docsOnly: true
};
