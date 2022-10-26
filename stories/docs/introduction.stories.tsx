/* eslint-disable sort-imports,no-unused-vars */
import { DocsContainer } from '@storybook/addon-docs';
import React from 'react';
import { SAPContainer } from 'fundamental-styles/doc-ui';
import fundamentals from '../../.storybook/custom/constants/fundamentals';
import { IntroductionPage } from './introduction.page';
import addons from '@storybook/addons';
import { SELECT_STORY } from '@storybook/core-events';

export default {
    title: 'Introduction',
    component: () => {
        return null;
    },
    parameters: {
        docs: {
            container: DocsContainer,
            page: () => (
                <SAPContainer>
                    <IntroductionPage />
                </SAPContainer>
            ),
            theme: fundamentals
        },
        previewTabs: {
            canvas: {
                hidden: true
            }
        },
        viewMode: 'docs',
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
    storyshots: { disable: true },
    docsOnly: true
};
