/* eslint-disable no-unused-vars */
import { DocsContainer } from '@storybook/addon-docs';
import IconsDocsPage from './IconsDocsPage';
import { independentSVGUsage } from './svg-icons/IntependentSVGUsage';
import React from 'react';
import { SAPContainer } from 'fundamental-styles/doc-ui';
import { spriteSVGUsage } from './svg-icons/SpriteSVGUsage';

import 'styles/src/page.scss';
import 'styles/src/bar.scss';
import 'fn/src/fn-search.scss';

export default {
    title: 'Icons',
    parameters: {
        docs: {
            container: DocsContainer,
            page: () => (
                <SAPContainer>
                    <IconsDocsPage/>
                </SAPContainer>
            )
        },
        tags: []
    }
};

export const IndependentSVGUsage = independentSVGUsage;

export const SpriteSVGUsage = spriteSVGUsage;
