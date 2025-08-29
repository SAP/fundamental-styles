import scrollableTokenizerExampleHtml from "./scrollable-tokenizer.example.html?raw";
import cozyTokenizerExampleHtml from "./cozy-tokenizer.example.html?raw";
import tokenizerModesHtml from "./tokenizer-modes.html?raw";
import '../../../src/input.scss';
import '../../../src/token.scss';
import '../../../src/tokenizer.scss';
export default {
  title: 'Components/Tokenizer',
  parameters: {
    description: `Tokenizer is a container that wraps multiple tokens. The Tokenizer is used either stand alone or within Input controls such as **MultiInput**.In cozy mode the user can swipe the tokens to the left or right.

##Usage
- Use tokenizer in the **Multi Input**, **Multi Combobox**, or as a standalone component.
        `,
    tags: ['f3', 'a11y', 'theme']
  }
};

export const CozyTokenizer = () => cozyTokenizerExampleHtml;
CozyTokenizer.storyName = 'Tokenizer';

export const ReadonlyAndDisplayOnlyModes = () => tokenizerModesHtml;
ReadonlyAndDisplayOnlyModes.storyName = 'Readonly and Display-only Modes';

export const ScrollableTokenizer = () => scrollableTokenizerExampleHtml;
ScrollableTokenizer.storyName = 'Scrollable tokenizer';
ScrollableTokenizer.parameters = {
  docs: {
    description: {
      story: `The tokenizer can be scrollable by adding the \`fd-tokenizer--scrollable\` modifier class to the main element. The user can view the tokens by pressing the \`Tab\` key, then \`Shift + Tab\` to jump to the next one.
        `
    }
  }
};