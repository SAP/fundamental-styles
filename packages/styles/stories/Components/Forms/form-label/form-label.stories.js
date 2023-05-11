import disabledExampleHtml from "./disabled.example.html?raw";
import colonExampleHtml from "./colon.example.html?raw";
import requiredExampleHtml from "./required.example.html?raw";
import primaryExampleHtml from "./primary.example.html?raw";
import '../../../../src/form-item.scss';
import '../../../../src/form-label.scss';
import '../../../../src/input.scss';
export default {
  title: 'Components/Forms/Form Label',
  parameters: {
    description: `
Form labels are used to identify form elements such as input fields, checkboxes and radio buttons. This component is best used as a child element of the **Form Item** component.
        `,
    tags: ['f3', 'a11y', 'theme']
  }
};
export const Primary = () => primaryExampleHtml;
Primary.storyName = 'Default';
Primary.parameters = {
  docs: {
    description: {
      story: `
The default form label is displayed in grey text above an input field. To display a form label, add the \`fd-form-label\` class as a child element of the \`fd-form-item\` element.
        `
    }
  }
};
export const Required = () => requiredExampleHtml;
Required.parameters = {
  docs: {
    description: {
      story: `
To indicate to the user that it’s required to fill out an input field, add the \`--required\` modifier class to the \`fd-form-label\` element.
        `
    }
  }
};
export const Colon = () => colonExampleHtml;
Colon.parameters = {
  docs: {
    description: {
      story: `
A form label can be displayed with a colon that does not disappear when truncated. To achieve this, add the \`--colon\` modifier class to the \`fd-form-label\` element.
        `
    }
  }
};
export const Disabled = () => disabledExampleHtml;
Disabled.parameters = {
  docs: {
    description: {
      story: `
A form label can be displayed as disabled to indicate to the users that it cannot be interacted with. To display a disabled form label, add the \`is-disabled\` class to the \`fd-input\` element.
        `
    }
  }
};