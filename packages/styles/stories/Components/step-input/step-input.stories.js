import readOnlyExampleHtml from "./read-only.example.html?raw";
import disabledExampleHtml from "./disabled.example.html?raw";
import focusedExampleHtml from "./focused.example.html?raw";
import statesExampleHtml from "./states.example.html?raw";
import primaryExampleHtml from "./primary.example.html?raw";
import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/form-item.scss';
import '../../../src/step-input.scss';
import '../../../src/form-label.scss';
import '../../../src/input.scss';
export default {
  title: 'Components/StepInput',
  parameters: {
    description: `
The step input control allows the user to change the input values in predefined increments (steps).

##Usage
**Use the step input if:**

- The user needs to adjust amounts, quantities, or other values quickly.
- The user needs to adjust values for a specific step (for example, in a shopping cart).

**Do not use the step input if:**

- The user needs to enter a static number (for example, postal code, phone number, or ID). In this case, use **Input Field** instead.
- You want to display a value that rarely needs to be adjusted and does not pertain to a particular step. In this case, use **Input Field** instead.
- You want the user to enter dates and times. In this case, use the **Date Picker** or **Time Picker** pattern instead.

`
  }
};
export const Primary = () => primaryExampleHtml;
Primary.storyName = 'Default';
Primary.parameters = {
  docs: {
    story: {
      iframeHeight: 300
    },
    description: {
      story: `The default step input displays an input field with a plus and minus icon on opposing sides to either increase or decrease the value. It is displayed in cozy mode, which is ideal for mobile and tablet screens.
        `
    }
  }
};
export const States = () => statesExampleHtml;
States.parameters = {
  docs: {
    story: {
      iframeHeight: 300
    },
    description: {
      story: `Step input can be displayed in various states such as Success, Information, Error and Warning.

**To display step input in a semantic state, add the following classes to the main elements:**

State | Class
:------ | :-----------
Success | \`is-success\`
Information | \`is-information\`
Error | \`is-error\`
Warning | \`is-warning\`

        `
    }
  }
};
export const Focused = () => focusedExampleHtml;
Focused.parameters = {
  docs: {
    story: {
      iframeHeight: 300
    },
    description: {
      story: `To enable the focused state add the \`.is-focus\` class to the main element with class \`.fd-step-input\`.
        `
    }
  }
};
export const Disabled = () => disabledExampleHtml;
Disabled.parameters = {
  docs: {
    story: {
      iframeHeight: 300
    },
    description: {
      story: `Step input can be disabled by adding the \`is-disabled\` class to the main element.
        `
    }
  }
};
export const ReadOnly = () => readOnlyExampleHtml;
ReadOnly.storyName = 'Read-only';
ReadOnly.parameters = {
  docs: {
    story: {
      iframeHeight: 300
    },
    description: {
      story: `Step input can be displayed as read-only by adding the \`is-readonly\` class to the main element.
        `
    }
  }
};