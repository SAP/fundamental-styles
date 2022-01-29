/* eslint-disable sort-imports,no-unused-vars */
import { DocsContainer, DocsContext } from '@storybook/addon-docs';
import addons from '@storybook/addons';
import React from 'react';
import { useContext } from 'react';
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
        viewMode: 'docs',
        withToolbar: false
    }
};

export const Overview = () => {
    return '<div></div>';
};

Overview.storyName = 'Overview';
