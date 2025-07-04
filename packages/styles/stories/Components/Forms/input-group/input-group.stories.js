import focusExampleHtml from "./focus.example.html?raw";
import statesExampleHtml from "./states.example.html?raw";
import inputWithActionsExampleHtml from "./input-with-actions.example.html?raw";
import inputWithIconsExampleHtml from "./input-with-icons.example.html?raw";
import textAddOnExampleHtml from "./text-add-on.example.html?raw";
import defaultExampleHtml from "./sizes.example.html?raw";
import '../../../../src/icon.scss';
import '../../../../src/button.scss';
import '../../../../src/form-item.scss';
import '../../../../src/form-label.scss';
import '../../../../src/input.scss';
import '../../../../src/popover.scss';
import '../../../../src/input-group.scss';
export default {
  title: 'Components/Forms/Input Group',
  parameters: {
    description: 'The Input Group includes form inputs with add-ons that allow the user to better understand the information being entered.',
    tags: []
  }
};
export const Default = () => defaultExampleHtml;
Default.parameters = {
  docs: {
    description: {
      story: 'Basic Input Group with no additional elements or value state modifiers.'
    }
  }
};
export const TextAddOn = () => textAddOnExampleHtml;
TextAddOn.parameters = {
  docs: {
   description: {
      story: 'An Input Group with a text add-on (e.g., currency or unit). The add-on can be positioned before, after, or on both sides of the input field to clarify the expected value format.'
    }
  }
};
export const InputWithIcons = () => inputWithIconsExampleHtml;
InputWithIcons.parameters = {
  docs: {
   description: {
      story: 'Demonstrates how to use an icon as an add-on. Typically used for visual cues like visibility toggles, status, or type indication.'
    }
  }
};
export const InputWithActions = () => inputWithActionsExampleHtml;
InputWithActions.parameters = {
  docs: {
   description: {
      story: 'An Input Group with a button add-on. Supports buttons with either text or icons, typically used for actions like submit, search, or trigger.'
    }
  }
};
export const States = () => statesExampleHtml;
States.parameters = {
  docs: {
    description: {
       story: 'Input Groups can visually represent different validation or feedback states such as success, error, warning, and information. Use modifier classes like `.is-success`, `.is-error`, `.is-warning`, or `.is-information` on the `.fd-input-group` container.'
     }
   }
};

export const Focus = () => focusExampleHtml;
Focus.parameters = {
  docs: {
   description: {
      story: 'The focussed state of Input Group is achieved by adding the `.is-focus` class to the parent element with class `.fd-input-group`.'
    }
  }
};
