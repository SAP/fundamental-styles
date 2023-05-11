import informationExampleHtml from "./information.example.html?raw";
import warningExampleHtml from "./warning.example.html?raw";
import errorExampleHtml from "./error.example.html?raw";
import successExampleHtml from "./success.example.html?raw";
import '../../../../src/form-message.scss';
import '../../../../src/form-item.scss';
import '../../../../src/form-label.scss';
import '../../../../src/input.scss';
import '../../../../src/popover.scss';
export default {
  title: 'Components/Forms/Form Message',
  parameters: {
    description: `
A form message can appear as a result of interacting with an input field. It essentially sends semantic feedback to the user, informing them whether the data they entered was successful, erroneous, needs further attention, or more.

##Highlight indicators
Form messages can be displayed in various semantic states by adding the following classes to the \`fd-input\` element:

States | Class | Description
:----- | :---- | :----------
Default | _n/a_ | The field is editable, but no validation has occurred.
Success | \`is-success\` | The data format entered has been validated and is correct, such as an email address.
Error |\`is-error\` | The data entered is not valid and must be corrected, stopping the user from moving forward.
Warning | \`is-warning\` | The data entered is formatted correctly but there are other issues that are problematic. However, these issues will not stop the user from moving forward.
Disabled | \`is-disabled\` | Indicates the field is not editable. This state is commonly used when the field is dependent on a previous entry/selection within the form.
Read-only&nbsp;&nbsp;&nbsp; | \`is-readonly\`&nbsp;&nbsp;&nbsp; | Used to display static information in the context of a form.

        `,
    tags: ['f3', 'a11y', 'theme']
  }
};
export const Success = () => successExampleHtml;
Success.parameters = {
  docs: {
    description: {
      story: `To display a success message below an input field, add the \`--success\` modifier class to the \`fd-form-message\` element.
        `
    }
  }
};
export const Error = () => errorExampleHtml;
Error.parameters = {
  docs: {
    description: {
      story: `To display an error message below an input field, add the \`--error\` modifier class to the \`fd-form-message\` element.
        `
    }
  }
};
export const Warning = () => warningExampleHtml;
Warning.parameters = {
  docs: {
    description: {
      story: `To display a warning message below an input field, add the \`--warning\` modifier class to the \`fd-form-message\` element.
        `
    }
  }
};
export const Information = () => informationExampleHtml;
Information.parameters = {
  docs: {
    description: {
      story: `To display an information message below an input field, add the \`--information\` modifier class to the \`fd-form-message\` element.
        `
    }
  }
};