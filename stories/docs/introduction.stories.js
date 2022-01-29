/* eslint-disable sort-imports,no-unused-vars */
import { DocsContainer } from '@storybook/addon-docs';
import React from 'react';
import { SAPContainer } from '../../.storybook/custom/components/SAPContainer';
import fundamentals from '../../.storybook/custom/constants/fundamentals';
import { IntroductionPage } from './introduction.page';

export default {
    title: 'Introduction',
    component: (props) => {
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
        viewMode: 'docs'
    }
};

export const Overview = () => {
    return '<div></div>';
};
