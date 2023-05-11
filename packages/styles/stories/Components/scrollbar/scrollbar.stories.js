import defaultExampleExampleHtml from "./default-example.example.html?raw";
import '../../../src/scrollbar.scss';
export default {
  title: 'Components/Scrollbar',
  parameters: {
    description: `
Themeable scrollbar is the scrollbar component made accordingly to the Fiori 3 design guidelines.
Using the themeable scrollbar is preferred over the browser's default in the components that support having scrollbars and made accordingly to the Fiori 3 design guidelines.
Themeable scrollbar works in Chrome, Safari, and other WebKit-based browsers and partially works in Firefox (no hover effects).
Component not working in the IE, default scrollbar is shown instead.
            `,
    docs: {
      story: {
        iframeHeight: 400
      }
    },
    tags: ['f3', 'theme', 'development']
  }
};
export const DefaultExample = () => defaultExampleExampleHtml;
DefaultExample.storyName = 'Default';
DefaultExample.parameters = {
  docs: {
    story: {
      iframeHeight: 950
    },
    description: {
      story: `To use themeable scrollbar use \`fd-scrollbar\` class on scrollable element.
`
    }
  }
};