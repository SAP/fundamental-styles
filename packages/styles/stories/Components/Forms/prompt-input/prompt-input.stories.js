import basicExampleHtml from "./basic.example.html?raw";

import '../../../../src/button.scss';
import '../../../../src/icon.scss';
import '../../../../src/form-item.scss';
import '../../../../src/form-label.scss';
import '../../../../src/input.scss';
import '../../../../src/popover.scss';
import '../../../../src/form-message.scss';
import '../../../../src/prompt-input.scss';
import '../../../../src/input-group.scss';

export default {
  title: 'Components/Forms/Prompt Input',
  parameters: {
    description: `The Prompt Input component allows the user to write custom instructions in natural language, so that AI is guided to generate content tailored to user needs.
<br><b>Note: The component is in an experimental state.</b>
        `,
    tags: ['ai', 'experimental']
  }
};
export const Basic = () => basicExampleHtml;
Basic.storyName = 'Basic Sample';
Basic.parameters = {
  docs: {
   description: {
      story: 'The Prompt Input is built on top of [Input Group](https://fundamental-styles.netlify.app/?path=/docs/sap-fiori-components-forms-input-group--docs) and inherits its states (disabled, read-only, information, etc.).'
    }
  }
};