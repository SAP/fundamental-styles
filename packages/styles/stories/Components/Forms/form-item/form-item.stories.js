import requiredExampleHtml from "./required.example.html?raw";
import primaryExampleHtml from "./primary.example.html?raw";
import '../../../../src/form-item.scss';
import '../../../../src/form-label.scss';
import '../../../../src/input.scss';
export default {
  title: 'Components/Forms/Form Item',
  parameters: {
    description: `
A form item is essentially a label positioned above an input field. When the user places their cursor in the input field, the field is highlighted in blue to indicate that it’s active.
        `,
    tags: ['f3', 'a11y', 'theme']
  }
};
export const Primary = () => primaryExampleHtml;
Primary.storyName = 'Default';
Primary.parameters = {
  docs: {
    description: {
      story: `The default form item displays a label placed above an empty input field with placeholder text that can be replaced with regular text.
        `
    }
  }
};
export const Required = () => requiredExampleHtml;
Required.parameters = {
  docs: {
    description: {
      story: `To indicate to the user that it’s required to fill out an input field, add the \`--required\` modifier class to the \`fd-form-label\` element.
        `
    }
  }
};