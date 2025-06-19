import statesExampleHtml from "./states.example.html?raw";
import primaryExampleHtml from "./primary.example.html?raw";
import '../../../../src/form-item.scss';
import '../../../../src/form-label.scss';
import '../../../../src/input.scss';
import '../../../../src/popover.scss';
import '../../../../src/form-message.scss';
export default {
  title: 'Components/Forms/Input',
  parameters: {
    description: `Inputs are used to collect data from the user and should always be paired with a label. When a field is required, the label should include an asterisk (*).

A text input field allows users to enter and edit text or numeric values in one line. To help users enter a valid value, it provides additional features like “auto-complete”, “suggestions”, and “value help”.

##Usage

Use the input field if:

- The user needs to enter a short, single-line text or numbers, dates or times.
- The user needs to select one or more items from a list of items, such a a multi-input.
- The user needs to find one or more items out of a list of items by searching for more than one attribute, such as a combobox.

Do not use the input field if:

- The user needs to enter long texts. In this case, use the textarea.
- The user needs to carry out a search. In this case, use the search field.
        `,
    tags: []
  }
};
export const Primary = () => primaryExampleHtml;
Primary.storyName = 'Default';
Primary.parameters = {
  docs: {
   description: {
      story: 'The standard input component can be displayed by using `fd-input` class'
    }
  }
};
export const States = () => statesExampleHtml;
States.parameters = {
  docs: {
    storyDescription: `
 The state of the input field can reflect validity of the data entered, whether the input data is editable or disabled.

- **Default**: The field is editable but no validation has occurred
- **Success**: The data format entered has been validated and it's correct, such as an email address.
- **Error**: The data entered is not valid and must be corrected.
- **Warning**: The data entered is formatted correctly but there are other issues are problematic but will not stop the user from moving forward.
- **Disabled**: This indicates the field is not editable. A common use case is that this field is dependent on a previous entry or selection within the form.
- **Read Only**: Used to display static information in the context of a form.

Along with Error and Warning, error messages should be displayed below the field so the user can correct the error and move forward.`
  }
};