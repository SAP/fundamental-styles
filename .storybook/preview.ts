import { DocsContainer } from '@storybook/addon-docs';
import {
    fundamentalTheme,
    withContentDensity,
    withDirectionality,
    withThemeProvider
} from 'fundamental-styles/storybook';
import { MainDocPage } from './MainDocPage';
import { contentDensities, directionalities } from 'fundamental-styles/configuration';
import { Preview } from '@storybook/html';

export default {
    parameters: {
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
            },
            story: {
                inline: true
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
                return a.title.localeCompare(b.title);
            },
            initialActive: 'docs'
        }
    },
    globalTypes : {
        ['styles-theme']: {},
        ['cx-theme']: {},
        ['common-css-theme']: {},
        directionality: {
            title: 'Directionality',
            description: 'Directionality of components',
            defaultValue: 'ltr',
            toolbar: {
                icon: 'paragraph',
                items: directionalities,
                dynamicTitle: true
            }
        },
        contentDensity: {
            title: 'Content Density',
            description: 'Content Density of components',
            defaultValue: 'cozy',
            toolbar: {
                icon: 'zoom',
                items: contentDensities,
                dynamicTitle: true
            }
        }
    },
    decorators: [withDirectionality, withThemeProvider, withContentDensity]
} as Preview;
