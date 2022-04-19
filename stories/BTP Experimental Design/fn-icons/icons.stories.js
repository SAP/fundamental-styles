/* eslint-disable no-unused-vars */
import { DocsContainer } from '@storybook/addon-docs';
import IconsDocsPage from './IconsDocsPage';
import { independentSVGUsage } from './svg-icons/IndependentSVGUsage/IndependentSVGUsage';
import React from 'react';
import { SAPContainer } from '../../../.storybook/custom/components/SAPContainer';
import { spriteSVGUsage } from './svg-icons/SpriteSVGUsage/SpriteSVGUsage';
import usedComponents from './usedComponents';

export default {
    title: 'BTP Experimental Design/Icons',
    parameters: {
        docs: {
            container: DocsContainer,
            page: () => (
                <SAPContainer>
                    <IconsDocsPage />
                </SAPContainer>
            )
        },
        components: usedComponents
    }
};

export const IndependentSVGUsage = independentSVGUsage;

export const SpriteSVGUsage = spriteSVGUsage;
