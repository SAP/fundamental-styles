import scrollableTokenizerExampleHtml from "./scrollable-tokenizer.example.html?raw";
import cozyTokenizerExampleHtml from "./cozy-tokenizer.example.html?raw";
import readOnlyTokenExampleHtml from "./read-only-token.example.html?raw";
import selectedExampleHtml from "./selected.example.html?raw";
import primaryExampleHtml from "./primary.example.html?raw";
import '../../../src/input.scss';
import '../../../src/token.scss';
import '../../../src/tokenizer.scss';
export default {
  title: 'Components/Token',
  parameters: {
    description: `Tokens are small items of information (similar to tags) that mainly serve to visualize previously selected items. The tokenizer is the container that handles the tokens. Tokens can be added, removed, selected, or deselected.

##Usage
- Use tokens only in the **Multi Input** component.
        `,
    tags: ['f3', 'a11y', 'theme']
  }
};
export const Primary = () => primaryExampleHtml;
Primary.storyName = 'Default';
Primary.parameters = {
  docs: {
    story: {
      iframeHeight: 350
    },
    description: {
      story: `The default token is displayed in grey with text, and a close button that will remove the token when selected. It is displayed in cozy mode, which is ideal for mobile and tablet screens.
        `
    }
  }
};
export const Selected = () => selectedExampleHtml;
Selected.parameters = {
  docs: {
    story: {
      iframeHeight: 350
    },
    description: {
      story: `Tokens can be displayed in blue, signaling to the user that they are selected. To display selected tokens, add the \`fd-token--selected\` modifier class to the main element.
        `
    }
  }
};
export const ReadOnlyToken = () => readOnlyTokenExampleHtml;
ReadOnlyToken.storyName = 'Read-only';
ReadOnlyToken.parameters = {
  docs: {
    story: {
      iframeHeight: 350
    },
    description: {
      story: `Tokens can be displayed as read-only, indicating that they cannot be interacted with. Read-only tokens should not contain a close button. To display tokens as read-only, add the \`fd-token--readonly\` modifier class to the main element.
        `
    }
  }
};
export const CozyTokenizer = () => cozyTokenizerExampleHtml;
CozyTokenizer.storyName = 'Tokenizer';
CozyTokenizer.parameters = {
  docs: {
    story: {
      iframeHeight: 350
    },
    description: {
      story: `Tokenizer is a container for tokens, which is often placed inside **Multi-Input** components. It is displayed in cozy mode; therefore, the user can swipe the tokens to the left or right.

To enable focus, the \`is-focus\` class must be added the container.
        `
    }
  }
};
export const ScrollableTokenizer = () => scrollableTokenizerExampleHtml;
ScrollableTokenizer.storyName = 'Scrollable tokenizer';
ScrollableTokenizer.parameters = {
  docs: {
    story: {
      iframeHeight: 350
    },
    description: {
      story: `The tokenizer can be scrollable by adding the \`fd-tokenizer--scrollable\` modifier class to the main element. The user can view the tokens by pressing the \`Tab\` key, then \`Shift + Tab\` to jump to the next one.
        `
    }
  }
};