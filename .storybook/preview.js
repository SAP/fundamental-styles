import { addDecorator, addParameters, configure } from "@storybook/svelte";
import { withCssResources } from "@storybook/addon-cssresources";
import { withA11y } from "@storybook/addon-a11y";

addParameters({
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
});

addDecorator(withCssResources);
addDecorator(withA11y);
