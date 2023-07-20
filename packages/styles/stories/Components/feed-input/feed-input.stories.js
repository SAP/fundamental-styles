import overMaxHeightExampleHtml from "./over-max-height.example.html?raw";
import inputGrowthExampleHtml from "./input-growth.example.html?raw";
import placeholderImageExampleHtml from "./placeholder-image.example.html?raw";
import withoutUserImageExampleHtml from "./without-user-image.example.html?raw";
import disabledExampleHtml from "./disabled.example.html?raw";
import notEmptyExampleHtml from "./not-empty.example.html?raw";
import standardExampleHtml from "./standard.example.html?raw";
import '../../../src/button.scss';
import '../../../src/textarea.scss';
import '../../../src/avatar.scss';
import '../../../src/feed-input.scss';
import '../../../src/button.scss';
import '../../../src/icon.scss';
export default {
  title: 'Components/Feed Input',
  parameters: {
    description: `The feed input is specifically designed for users to type their own notes or comments and post them to a corresponding feed.

##Usage
**Use the feed input if:**

- A user needs to input small amounts of text without formatting.
- You expect multiple instances, such as notes or feed entries.

**Do not use the feed input if:**

- The user needs to format the text (rich text editor).
- You need only a single text box instance. In this case, use the **Textarea** component (for multiple lines) or the text control (for a single line).

`,
    tags: ['f3', 'a11y', 'theme']
  }
};
export const Standard = () => standardExampleHtml;
Standard.storyName = 'Default';
Standard.parameters = {
  docs: {
   description: {
      story: 'The default feed input displays an empty text field with an inactive submit button.'
    }
  }
};
export const NotEmpty = () => notEmptyExampleHtml;
NotEmpty.storyName = 'With text';
NotEmpty.parameters = {
  docs: {
   description: {
      story: 'The input with text displays some text, activating the submit button.'
    }
  }
};
export const Disabled = () => disabledExampleHtml;
Disabled.parameters = {
  docs: {
   description: {
      story: 'The disabled feed input displays a text field and submit button that users cannot interact with.'
    }
  }
};
export const WithoutUserImage = () => withoutUserImageExampleHtml;
WithoutUserImage.storyName = 'No thumbnail';
WithoutUserImage.parameters = {
  docs: {
   description: {
      story: 'Although the default feed input has a thumbnail, it is possible to remove it. Without a thumbnail, the input area size increases automatically.'
    }
  }
};
export const PlaceholderImage = () => placeholderImageExampleHtml;
PlaceholderImage.storyName = 'Generic thumbnail';
PlaceholderImage.parameters = {
  docs: {
   description: {
      story: 'A generic thumbnail will be displayed if no image has been chosen by the user.'
    }
  }
};
export const InputGrowth = () => inputGrowthExampleHtml;
InputGrowth.storyName = 'Multiline';
InputGrowth.parameters = {
  docs: {
   description: {
      story: 'The multiline feed input displays a text field with multiple lines of text, which expands until a maximum height is reached.'
    }
  }
};
export const OverMaxHeight = () => overMaxHeightExampleHtml;
OverMaxHeight.storyName = 'Max height';
OverMaxHeight.parameters = {
  docs: {
   description: {
      story: 'The max height feed input displays a text field with the maximum amount of text lines it can contain. Once the text field has reached the maximum height, a scrollbar appears to access the overflowing text.'
    }
  }
};