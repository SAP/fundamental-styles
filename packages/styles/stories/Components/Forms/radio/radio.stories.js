import textTruncationExampleHtml from "./text-truncation.example.html?raw";
import interactionStatesExampleHtml from "./interaction-states.example.html?raw";
import inlineExampleHtml from "./inline.example.html?raw";
import primaryExampleHtml from "./primary.example.html?raw";
import '../../../../src/radio.scss';
import '../../../../src/form-label.scss';
import '../../../../src/fieldset.scss';
import '../../../../src/form-group.scss';
export default {
  title: 'Components/Forms/Radio',
  parameters: {
    description: `
Radio buttons provide users with a set of mutually exclusive options. They allow a user to select only one option from two or more choices. Each option is represented by a radio button. Consequently, radio buttons only work in groups.

<b>Use the radio button if:</b>

- You need to help users choose quickly between at least two clearly different choices.

<b>Do not use the radio button if:</b>

- You need to offer the user the option of multiple selection. In this case, use checkboxes instead because radio buttons are for single-selection contexts only.
- You need to present more than 8 options. Use a dropdown box or list view.
In special cases, there are only two mutually exclusive options. Combine them into a single checkbox or switch. For example, use a checkbox for “I agree” (for example, to terms and conditions) instead of two radio buttons for “I agree” and “I don't agree”.
- The options are numbers with fixed steps. Use a slider control.
`,
    tags: []
  }
};
export const Primary = () => primaryExampleHtml;
Primary.parameters = {
  docs: {}
};
export const Inline = () => inlineExampleHtml;
Inline.parameters = {
  docs: {
    description: {
      story: `
Try to align radio buttons vertically instead of horizontally, especially for long labels. Horizontal alignment is harder to read and localize. Consider horizontal alignment in cases of one-word labels, such as in the background color settings example above.

In forms, always align radio buttons vertically instead of horizontally as the length of the labels may vary for different languages.

Do not put two radio button groups right next to each other as it is difficult to determine which buttons belong to which group. Use group labels and padding to separate them.
`
    }
  }
};
export const InteractionStates = () => interactionStatesExampleHtml;
InteractionStates.parameters = {
  docs: {
    description: {
      story: 'A radio button can have different states that affect its appearance value states, such as “error” or “warning”, which are indicated using semantic colors'
    }
  }
};
export const TextTruncation = () => textTruncationExampleHtml;
TextTruncation.parameters = {
  docs: {
    description: {
      story: `By default, long radio label truncates with ellipsis. For this behaviour no modifier class is needed. For radio label that wraps on a new line to show the entire content, use \`.fd-radio__label--wrap\` modifier class applied with \`.fd-radio__label\`. Keep in mind that for this to work <b>max-width</b> should be set on the label. For a <b>top-left aligned</b> label use the \`.fd-radio__label--wrap-top-aligned\` modifier class.`
    }
  }
};