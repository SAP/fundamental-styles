import {withCssResources} from '@storybook/addon-cssresources';
import {DocsContainer} from '@storybook/addon-docs';
import { fundamentalTheme } from 'fundamental-styles/storybook';
import {MainDocPage} from "./MainDocPage";
import {directionalities} from "fundamental-styles/configuration";
import {withDirectionality, withThemeProvider} from "fundamental-styles/storybook";

export const parameters = {
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
        transformSource: (src) => {
            // we strip out the () =>` ` from the story
            // so that the source can be formatted and
            // rendered as HTML.
            const SOURCE_REGEX = /^\(\) => `((.|\n)*)`$/;
            const match = SOURCE_REGEX.exec(src);
            return match ? match[1] : src;
        }
    },
    options: {
        storySort: (a, b) => {
            // We have to be extra specific here because Storybook compiler is pulling
            // this function from the context of the file and executes it in absolutely isolated environment.
            // So we have to declare variables inside function and not declare it in upper scope.
            const storiesOrderByPackage = [
                'styles',
                'fn',
                'cx',
                'common-css'
            ];
            const aPackage = storiesOrderByPackage.indexOf(a.importPath.split('/')[2]);
            const bPackage = storiesOrderByPackage.indexOf(b.importPath.split('/')[2]);
            if (aPackage === -1 && bPackage === -1) {
                if (a.title === 'Introduction') {
                    return -1
                }
                if (b.title === 'Introduction') {
                    return 1
                }
                return a.id.localeCompare(b.id, undefined, { numeric: true });
            }
            if (aPackage === -1 || bPackage === -1) {
                return aPackage === -1 ? -1 : 1;
            }
            return aPackage - bPackage;
        },
        initialActive: 'docs'
    }
};

// this adds a toolbar addon for switching themes
export const globalTypes = {
    ['packageId']: {
        defaultValue: 'all'
    },
    ['styles-theme']: {},
    ['fn-theme']: {},
    directionality: {
        name: 'Directionality',
        description: 'Directionality of components',
        defaultValue: 'ltr',
        toolbar: {
            icon: 'paragraph',
            items: directionalities
        }
    }
};

export const decorators = [withCssResources, withDirectionality, withThemeProvider];
