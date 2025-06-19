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
    tags: []
  }
};
export const Primary = () => primaryExampleHtml;
Primary.storyName = 'Default';
Primary.parameters = {
  docs: {
    description: {
      story: `Use the default form label when the field is optional and does not require special styling or behavior.`
    }
  }
};
export const Required = () => requiredExampleHtml;
Required.parameters = {
  docs: {
    description: {
      story: `To visually and programmatically indicate a required field, add the <code>fd-form-label--required</code> modifier to the label and use the <code>required</code> and <code>aria-required="true"</code> attributes on the input.`
    }
  }
};
export const Colon = () => colonExampleHtml;
Colon.parameters = {
  docs: {
    description: {
      story: `To display a label with a colon, add the <code>fd-form-label--colon</code> modifier.`
    }
  }
};
export const Disabled = () => disabledExampleHtml;
Disabled.parameters = {
  docs: {
    description: {
      story: `There are 3 ways to visually show that a label is disabled:
1. Add <code>aria-disabled="true"</code>. This communicates to assistive technologies (like screen readers) that the label is representing a disabled UI element.
2. Add <code>is-disabled</code> class to <code>fd-form-label</code> class.
3. Add <code>fd-form-label--disabled</code> modifier class to <code>fd-form-label</code> class.
        `
    }
  }
};