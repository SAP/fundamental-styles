import fundamentals from './custom/fundamentals';
import { addDecorator, addParameters, configure } from "@storybook/html";
import { withCssResources } from "@storybook/addon-cssresources";
// import { withA11y } from "@storybook/addon-a11y";
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
  ],
  docs: {
      container: DocsContainer,
      page: DocsPage
  },
});

addDecorator(withCssResources);
// addDecorator(withA11y);
