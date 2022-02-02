/* eslint-disable no-unused-vars */
import description from '!!raw-loader!./description.md?raw';
import { DocsContainer } from '@storybook/addon-docs';
import IconsDocsPage from './IconsDocsPage';
import { independentSVGUsage } from './svg-icons/IndependentSVGUsage/IndependentSVGUsage';
import React from 'react';
import { SAPContainer } from '../../.storybook/custom/components/SAPContainer';

export default {
    parameters: {
        description,
        docs: {
            container: DocsContainer,
            page: () => (
                <SAPContainer>
                    <IconsDocsPage />
                </SAPContainer>
            )
        },
        components: ['fn-search', 'page', 'bar']
    }
};

export const IndependentSVGUsage = independentSVGUsage;

export const SpriteSVGUsage = () => {
    return '<div>will demonstrate usage with sprite</div>';
};
