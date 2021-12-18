import fundamentals from './custom/fundamentals';
import { withCssResources } from "@storybook/addon-cssresources";
import { withThemeProvider } from './custom/themeProvider';
import { DocsContainer } from '@storybook/addon-docs';
import DocsPage from './custom/components/DocsPage';
import { makeDecorator } from '@storybook/addons';
import prettify from 'pretty';

export const parameters = {
  options: {
    showRoots: true,
    theme: fundamentals
  },
  cssresources: [
    {
      id: "normalize",
      code: `<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"></link>`,
      picked: false,
    },
    {
      id: "unnormalize",
      code: `<link rel="stylesheet" type="text/css" href="./unnormalize.css"></link>`,
      picked: false,
    },
    {
      id: "theme-ugly",
      code: `<link rel="stylesheet" type="text/css" href="./theme-ugly.css"></link>`,
      picked: false,
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
      page: DocsPage,
      theme: fundamentals,
      transformSource: (src) => {
        // we strip out the () =>` ` from the story
        // so that the source can be formatted and
        // rendered as HTML.
        const SOURCE_REGEX = /^\(\) => `((.|\n)*)`$/;
        const match = SOURCE_REGEX.exec(src);
        return prettify(match ? match[1] : src);
      },
  },
};

// this adds a toolbar addon for switching themes
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'sap_fiori_3',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'sap_fiori_3', title: 'Quartz Light' },
        { value: 'sap_fiori_3_dark', title: 'Quartz Dark' },
        { value: 'sap_fiori_3_light_dark', title: 'Light Dark' },
        { value: 'sap_fiori_3_hcw', title: 'High Contrast White' },
        { value: 'sap_fiori_3_hcb', title: 'High Contrast Black' },
        { value: 'sap_horizon', title: 'Horizon Preview' },
      ],
    },
  },
};

export const decorators = [
  withThemeProvider,
  withCssResources,
];
