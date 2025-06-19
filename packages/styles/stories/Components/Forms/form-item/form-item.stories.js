import requiredExampleHtml from "./required.example.html?raw";
import primaryExampleHtml from "./primary.example.html?raw";
import '../../../../src/form-item.scss';
import '../../../../src/form-label.scss';
import '../../../../src/input.scss';
export default {
  title: 'Components/Forms/Form Item',
  parameters: {
    description: `A form item is a combination of a label and an input field. The label clearly describes the expected input, and is associated with the input for accessibility.`,
    tags: []
  }
};
export const Primary = () => primaryExampleHtml;
Primary.storyName = 'Default';
Primary.parameters = {
  docs: {
    description: {
      story: `Use the default form item when the input is optional and does not require additional validation or indication.
        `
    }
  }
};
export const Required = () => requiredExampleHtml;
Required.parameters = {
  docs: {
    description: {
      story: `To mark an input as required, use the <code>fd-form-label--required</code> modifier. Also set <code>aria-required="true"</code> on the input to ensure screen readers announce the requirement.
        `
    }
  }
};