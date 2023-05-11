import statesExampleHtml from "./states.example.html?raw";
import disabledAndReadOnlyExampleHtml from "./disabled-and-read-only.example.html?raw";
import counterExampleHtml from "./counter.example.html?raw";
import primaryExampleHtml from "./primary.example.html?raw";
import '../../../../src/textarea.scss';
import '../../../../src/fieldset.scss';
import '../../../../src/form-label.scss';
import '../../../../src/form-message.scss';
import '../../../../src/form-item.scss';
import '../../../../src/form-group.scss';
import '../../../../src/popover.scss';
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
Primary.storyName = 'Content Density - cozy and compact';
Primary.parameters = {
  docs: {
    iframeHeight: 250
  }
};
export const Counter = () => counterExampleHtml;
Counter.parameters = {
  docs: {
    story: {
      iframeHeight: 150
    },
    description: {
      story: 'A checkbox can appear in two different sizes. In `cozy` mode, it is bigger than it is in `compact` mode. This makes the checkbox easier to select on touch devices.'
    }
  }
};
export const DisabledAndReadOnly = () => disabledAndReadOnlyExampleHtml;
DisabledAndReadOnly.parameters = {
  docs: {
    story: {
      iframeHeight: 200
    },
    description: {
      story: 'A checkbox can appear in two different sizes. In `cozy` mode, it is bigger than it is in `compact` mode. This makes the checkbox easier to select on touch devices.'
    }
  }
};
export const States = () => statesExampleHtml;
States.storyName = 'Responsiveness';
States.parameters = {
  docs: {
    story: {
      iframeHeight: 500
    },
    description: {
      story: 'As with any other input component, you can validate the fields and show the result as a value state of the component. Possible value states are error, warning, success, information, or neutral (none).'
    }
  }
};