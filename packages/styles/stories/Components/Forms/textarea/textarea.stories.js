import statesExampleHtml from "./states.example.html?raw";
import disabledAndReadOnlyExampleHtml from "./disabled-and-read-only.example.html?raw";
import counterExampleHtml from "./counter.example.html?raw";
import primaryExampleHtml from "./primary.example.html?raw";
import aiExampleHtml from "./ai.example.html?raw";
import '../../../../src/textarea.scss';
import '../../../../src/fieldset.scss';
import '../../../../src/form-label.scss';
import '../../../../src/form-message.scss';
import '../../../../src/form-item.scss';
import '../../../../src/form-group.scss';
import '../../../../src/popover.scss';
import '../../../../src/menu.scss';
import '../../../../src/button.scss';
import '../../../../src/icon.scss';
export default {
  title: 'Components/Forms/Textarea',
  parameters: {
    description: `
The text area is an input component that allows the user to enter several lines of text.
Use the text area if you want users to enter multiple lines of unformatted text.

Do not use the text area if

- You only want them to enter a single line of text, use the input component instead.
- Users need to enter formatted text. Use the rich text editor instead.
`,
    tags: ['f3', 'a11y', 'theme']
  }
};
export const Primary = () => primaryExampleHtml;
Primary.parameters = {
  docs: {}
};
export const Counter = () => counterExampleHtml;
Counter.parameters = {
  docs: {
    description: {
      story: 'Textarea can have a counter to display the number of characters entered or left to type. The counter is displayed below the textarea.'
    }
  }
};
export const DisabledAndReadOnly = () => disabledAndReadOnlyExampleHtml;
DisabledAndReadOnly.parameters = {
  docs: {
    story: {
    
    }
  }
};
export const States = () => statesExampleHtml;
States.storyName = 'Responsiveness';
States.parameters = {
  docs: {
    description: {
      story: 'As with any other input component, you can validate the fields and show the result as a value state of the component. Possible value states are error, warning, success, information, or neutral (none).'
    }
  }
};

export const AI = () => aiExampleHtml;
AI.storyName = 'AI Text Highlight Pattern';
AI.parameters = {
  docs: {
    description: {
      story: 'The AI Text Highlight pattern helps users differentiate between AI-generated and human-authored text. This clear distinction is vital for maintaining transparency and trust, especially as AI becomes more prevalent in applications. By visually distinguishing the two types of text, users can easily identify the source of the information, aiding in understanding the context and any potential biases. This pattern is especially useful in scenarios where both AI and human inputs are present.'
    }
  }
};