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
    description: `The input control offers four value states, for which can be shown an additional value state text message when the focus is on the input field.


##Modifier classes.

Apply the following modifier classes to the \`fd-input\` element to reflect various input states:

States | Class 
:----- | :---- 
Success | \`is-success\` 
Error |\`is-error\` 
Warning | \`is-warning\` 
Information |  \`is-information\`

<br>
Apply the following modifier classes to the \`fd-form-message \` element to indicate different message types:

States | Class 
:----- | :---- 
Success | \`fd-form-message--success\`
Error | \`fd-form-message--error\`
Warning |  \`fd-form-message--warning\`
Information |  \`fd-form-message--information\`

        `,
    tags: []
  }
};
export const Success = () => successExampleHtml;

export const Error = () => errorExampleHtml;

export const Warning = () => warningExampleHtml;

export const Information = () => informationExampleHtml;
