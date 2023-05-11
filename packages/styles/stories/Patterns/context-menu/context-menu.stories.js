import withIconAndButtonExampleHtml from "./with-icon-and-button.example.html?raw";
import '../../../src/radio.scss';
import '../../../src/popover.scss';
import '../../../src/menu.scss';
import '../../../src/button.scss';
import '../../../src/icon.scss';
export default {
  title: 'Patterns/Contextual Menu',
  parameters: {
    description: `
The contextual menu component is an opinionated composition of the \`popover\` and \`menu\` components with the use of a styled button.

A More icon or the word, "More", is used to indicate there are more options than room to display them. On click or tap, a contextual menu opens. Composed by the "popover" and "menu" components.

This component is completely composed from other components CSS and doesn't have any of its own.

Implementation Guidelines:

- Only one menu should be open at a give time

- Opening one menu should close all other menus

- Clicking away from the menu should also close the menu
`,
    tags: ['f3', 'a11y', 'theme']
  }
};
export const WithIconAndButton = () => withIconAndButtonExampleHtml;
WithIconAndButton.storyName = 'Examples with Icon and Button';