import primaryExampleHtml from "./primary.example.html?raw";
import '../../../../src/form-header.scss';
export default {
  title: 'Components/Forms/Form Header',
  parameters: {
    description: `
Form headers are essentially titles that provide users with more context about a group of input fields. For instance, a form header titled with “Personal information” would categorize input fields with labels: “Name, Address, etc.”
`,
    tags: []
  }
};
export const Primary = () => primaryExampleHtml;
Primary.storyName = 'Default';
Primary.parameters = {
  docs: {
    description: {
      story: `
Default form headers are displayed in text that does not wrap but truncates into an ellipsis.
`
    }
  }
};