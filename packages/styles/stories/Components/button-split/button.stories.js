
import splitMenuButtonExampleHtml from "./split-menu-button.example.html?raw";
import '../../../src/icon.scss';
import '../../../src/button.scss';
import '../../../src/button-split.scss';
export default {
  title: 'Components/Buttons/Button Split',
  parameters: {
    description: `The split menu button has two separate areas: the text label and the arrow down icon.
The separator between them indicates that each area results in a different action, giving the user two choices: trigger the main action or open the menu.

**If the default action is displayed as an icon only, all the menu items must contain icons.**

The split menu button can behave in two different ways:

1. The main button triggers the default action set by the developer. If no default action is defined, the first item in the menu list should be the default.
2. The main button triggers the last action chosen by the user from the menu list. Initially, it triggers the default action. However, when the user selects a different action, the default switches to the last action selected by the user.
    
The split menu button can be displayed by using container with \`fd-button-split\` class with \`role=”group”\` and the \`aria-label=”button-split”\` attribute.
`,
tags: ['f3', 'a11y', 'theme']
  }
};
export const SplitMenuButton = () => splitMenuButtonExampleHtml;
SplitMenuButton.storyName = 'Split menu button';
SplitMenuButton.parameters = {
  docs: {
    description: {
      story: `
`
    }
  }
};
