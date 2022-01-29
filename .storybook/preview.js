import { withCssResources } from '@storybook/addon-cssresources';
import { DocsContainer, DocsContext } from '@storybook/addon-docs';
import addons from '@storybook/addons';
import prettify from 'pretty';
import React, { useContext } from 'react';
import availableThemes from './custom/constants/availableThemes';
import DocsPage from './custom/components/DocsPage';
import { SAPContainer } from './custom/components/SAPContainer';
import directionalities from './custom/constants/directionalities';
import { withDirectionality } from './custom/decorators/directionalityProvider';
import fundamentals from './custom/constants/fundamentals';

import { withThemeProvider } from './custom/decorators/themeProvider';
import { check, isProduction } from './environment';

check();

if (!isProduction) {
    const { default: customStyles } = require('./custom/custom.scss');
    customStyles.use();
    const { default: tocStyles } = require('./custom/toc.scss');
    tocStyles.use();
}

export const parameters = {
    cssresources: [
        {
            id: 'normalize',
            code: `<link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css'></link>`,
            picked: false
        },
        {
            id: 'unnormalize',
            code: `<link rel='stylesheet' type='text/css' href='./unnormalize.css'></link>`,
            picked: false
        },
        {
            id: 'theme-ugly',
            code: `<link rel='stylesheet' type='text/css' href='./theme-ugly.css'></link>`,
            picked: false
        },
        {
            id: 'windows-hcm-1',
            code: '<link rel="stylesheet" type="text/css" href="./windows-hcm-1.css"></link>',
            picked: false
        },
        {
            id: 'windows-hcm-2',
            code: '<link rel="stylesheet" type="text/css" href="./windows-hcm-2.css"></link>',
            picked: false
        },
        {
            id: 'windows-hcm-dark',
            code: '<link rel="stylesheet" type="text/css" href="./windows-hcm-dark.css"></link>',
            picked: false
        },
        {
            id: 'windows-hcm-light',
            code: '<link rel="stylesheet" type="text/css" href="./windows-hcm-light.css"></link>',
            picked: false
        }
    ],
    docs: {
        container: DocsContainer,
        page: () => {
            const channel = addons.getChannel();
            const docsContext = useContext(DocsContext);
            return (
                <SAPContainer channel={channel} docsContext={docsContext}>
                    <DocsPage />
                </SAPContainer>
            );
        },
        theme: fundamentals,
        transformSource: (src) => {
            // we strip out the () =>` ` from the story
            // so that the source can be formatted and
            // rendered as HTML.
            const SOURCE_REGEX = /^\(\) => `((.|\n)*)`$/;
            const match = SOURCE_REGEX.exec(src);
            return prettify(match ? match[1] : src);
        }
    }
};

// this adds a toolbar addon for switching themes
export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'sap_fiori_3',
        toolbar: {
            icon: 'paintbrush',
            items: availableThemes
        }
    },
    directionality: {
        name: 'Directionality',
        description: 'Directionality of components',
        defaultValue: 'ltr',
        toolbar: {
            icon: 'paragraph',
            items: directionalities
        }
    },
    fioriVersion: {
        defaultValue: 'fiori'
    }
};

export const decorators = [withThemeProvider, withDirectionality, withCssResources];
