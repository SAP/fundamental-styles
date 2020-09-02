import fundamentals from './custom/fundamentals';
import { addDecorator, addParameters } from "@storybook/html";
import { withCssResources } from "@storybook/addon-cssresources";
import { DocsContainer } from '@storybook/addon-docs/blocks';
import DocsPage from './custom/components/DocsPage';

addParameters({
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
        id: 'windows-hcm-black',
        code: '<link rel="stylesheet" type="text/css" href="./windows-hcm-black.css"></link>',
        picked: false
    },
    {
        id: 'windows-hcm-white',
        code: '<link rel="stylesheet" type="text/css" href="./windows-hcm-white.css"></link>',
        picked: false
    },
    {
      id: 'css_variables',
      code: `
            <link rel="stylesheet" type="text/css" href="./sap_fiori_3.css"></link>
            <link rel="stylesheet" type="text/css" href="./theming-base-content/content/Base/baseLib/sap_fiori_3/css_variables.css"></link>
    `,
      picked: true
    },
    {
        id: 'dark_css_variables',
        code: `
            <link rel="stylesheet" type="text/css" href="./sap_fiori_3_dark.css"></link>
            <link rel="stylesheet" type="text/css" href="./theming-base-content/content/Base/baseLib/sap_fiori_3_dark/css_variables.css"></link>
        `,
        picked: false
    },
    {
        id: 'light_dark_css_variables',
        code: `
            <link rel="stylesheet" type="text/css" href="./sap_fiori_3_light-dark.css"></link>
            <link rel="stylesheet" type="text/css" href="./theming-base-content/content/Base/baseLib/sap_fiori_3_light_dark/css_variables.css"></link>
        `,
        picked: false
    },
    {
        id: 'HCB_css_variables',
        code: `
            <link rel="stylesheet" type="text/css" href="./sap_fiori_3_hcb.css"></link>
            <link rel="stylesheet" type="text/css" href="./theming-base-content/content/Base/baseLib/sap_fiori_3_hcb/css_variables.css"></link>
        `,
        picked: false
    },
    {
        id: 'HCW_css_variables',
        code: `
            <link rel="stylesheet" type="text/css" href="./sap_fiori_3_hcw.css"></link>
            <link rel="stylesheet" type="text/css" href="./theming-base-content/content/Base/baseLib/sap_fiori_3_hcw/css_variables.css"></link>`,
        picked: false
    }
  ],
  docs: {
      container: DocsContainer,
      page: DocsPage,
      theme: fundamentals
  },
});

addDecorator(withCssResources);
