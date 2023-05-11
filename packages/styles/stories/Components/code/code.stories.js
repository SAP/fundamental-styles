import inlineCodeExampleHtml from "./inline-code.example.html?raw";
import primaryExampleHtml from "./primary.example.html?raw";
import '../../../src/code.scss';
export default {
  title: 'Components/Code',
  parameters: {
    description: `The code component helps with formating and styling code snippets. It differantiates the code lines from the normal text.
##Usage

**Use the code if:**
* You want to display a block of code.
* You want to dispaly a line of code.

`,
    tags: ['f3', 'a11y', 'theme', 'development']
  }
};
export const Primary = () => primaryExampleHtml;
Primary.storyName = 'Code Block';
Primary.parameters = {
  docs: {
    description: {
      story: 'Code Block is a combination of multiple lines of code which can be displayed as a standalone element.'
    }
  }
};
export const InlineCode = () => inlineCodeExampleHtml;
InlineCode.parameters = {
  docs: {
    description: {
      story: 'Inline Code is used to hightlight a short snippet code inside a paragraph.'
    }
  }
};