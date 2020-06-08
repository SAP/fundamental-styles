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
      id: 'css_variables',
      code: '<link rel="stylesheet" type="text/css" href="./css_variables.css"></link>',
      picked: true
  },
  {
      id: 'dark_css_variables',
      code: '<link rel="stylesheet" type="text/css" href="./dark_css_variables.css"></link>',
      picked: false
  },
  {
      id: 'light_dark_css_variables',
      code: '<link rel="stylesheet" type="text/css" href="./light_dark_css_variables.css"></link>',
      picked: false
  },
  {
      id: 'HCB_css_variables',
      code: '<link rel="stylesheet" type="text/css" href="./HCB_css_variables.css"></link>',
      picked: false
  },
  {
      id: 'HCW_css_variables',
      code: '<link rel="stylesheet" type="text/css" href="./HCW_css_variables.css"></link>',
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
