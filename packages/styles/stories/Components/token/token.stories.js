import primaryExampleHtml from "./primary.example.html?raw";
import '../../../src/input.scss';
import '../../../src/token.scss';
export default {
  title: 'Components/Token',
  parameters: {
    description: `Tokens are small items of information (similar to tags) that mainly serve to visualize previously selected items. The tokenizer is the container that handles the tokens. Tokens can be added, removed, selected, or deselected.

##Usage
- Use tokens only in the **Multi Input** component.

The default token is displayed in grey with text, and a close button that will remove the token when selected.

| **Modifier Class** | **Usage** |
| -----: | :----- | 
| \`fd-token--selected\` | signaling to the user that they are selected |
| \`fd-token--disabled\` | change to disabled coursor |
| \`fd-token--readonly\` | displayed as read-only, indicating that they cannot be interacted with. Read-only tokens should not contain a close button |
        `,
    tags: ['f3', 'a11y', 'theme']
  }
};
export const Primary = () => primaryExampleHtml;
Primary.storyName = 'Tokens';
Primary.parameters = {
  docs: {
    description: {
      story: `The default token is displayed in grey with text, and a close button that will remove the token when selected. It is displayed in cozy mode, which is ideal for mobile and tablet screens.
        `
    }
  }
};
