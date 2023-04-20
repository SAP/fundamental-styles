import {withCssResources} from '@storybook/addon-cssresources';
import {DocsContainer} from '@storybook/addon-docs';
import { fundamentalTheme } from 'fundamental-styles/storybook';
import {MainDocPage} from "./MainDocPage";
import {directionalities} from "fundamental-styles/configuration";
import {withDirectionality, withThemeProvider} from "fundamental-styles/storybook";
import { Preview } from '@storybook/html';

export default {
    parameters: {
        cssresources: [
            {
                id: 'normalize',
                code: `<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"/>`,
                picked: false
            },
            {
                id: 'unnormalize',
                code: `<link rel="stylesheet" type="text/css" href="./unnormalize.css"/>`,
                picked: false
            },
            {
                id: 'theme-ugly',
                code: `<link rel="stylesheet" type="text/css" href="./theme-ugly.css"/>`,
                picked: false
            },
            {
                id: 'windows-hcm-1',
                code: '<link rel="stylesheet" type="text/css" href="./windows-hcm-1.css"/>',
                picked: false
            },
            {
                id: 'windows-hcm-2',
                code: '<link rel="stylesheet" type="text/css" href="./windows-hcm-2.css"/>',
                picked: false
            },
            {
                id: 'windows-hcm-dark',
                code: '<link rel="stylesheet" type="text/css" href="./windows-hcm-dark.css"/>',
                picked: false
            },
            {
                id: 'windows-hcm-light',
                code: '<link rel="stylesheet" type="text/css" href="./windows-hcm-light.css"/>',
                picked: false
            }
        ],
        docs: {
            container: DocsContainer,
            page: MainDocPage,
            theme: fundamentalTheme,
            source: {
                transform:  (src) => {
                    // we strip out the () =>` ` from the story
                    // so that the source can be formatted and
                    // rendered as HTML.
                    const SOURCE_REGEX = /^\(\) => `((.|\n)*)`$/;
                    const match = SOURCE_REGEX.exec(src);
                    return match ? match[1] : src;
                }
            }
        },
        options: {
            storySort: (a, b) => {
                const introductionName = 'Introduction',
                    aIsIntroduction = a.title.includes(introductionName),
                    bIsIntroduction = b.title.includes(introductionName);
                if (aIsIntroduction && bIsIntroduction) {
                    return 0;
                }
                if (aIsIntroduction) {
                    return -1;
                }
                if (bIsIntroduction) {
                    return 1;
                }
                if (a.name?.endsWith('Docs')) {
                    return -1;
                }
                if (b.name?.endsWith('Docs')) {
                    return 1;
                }
                return a.id.localeCompare(b.id, undefined, { numeric: true });
            },
            initialActive: 'docs'
        }
    },
    globalTypes : {
        ['packageId']: {
            defaultValue: 'all'
        },
        ['styles-theme']: {},
        ['cx-theme']: {},
        ['fn-theme']: {},
        ['common-css-theme']: {},
        directionality: {
            title: 'Directionality',
            description: 'Directionality of components',
            defaultValue: 'ltr',
            toolbar: {
                icon: 'paragraph',
                items: directionalities
            }
        }
    },
    decorators: [withCssResources, withDirectionality, withThemeProvider]
} as Preview;
