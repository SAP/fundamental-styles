import aiPromptInputExampleHtml from "./ai-prompt-input.example.html?raw";

import '../../../../src/button.scss';
import '../../../../src/icon.scss';
import '../../../../src/text.scss';
import '../../../../src/prompt-input.scss';
import '../../../../src/input.scss';
import '../../../../src/input-group.scss';
import '../../../../src/form-message.scss';
import '../../../../src/popover.scss';

export default {
  title: 'AI/Components/Prompt Input',
  parameters: {
    description: `The Prompt Input component allows the user to write custom instructions in natural language, so that AI is guided to generate content tailored to user needs.
<br><b>Note: The component is in an experimental state.</b>`,
    tags: ['ai', 'experimental']
  }
};
export const AIPromptInput = () => aiPromptInputExampleHtml;
AIPromptInput.parameters = {
  docs: {
   description: {
      story: 'The Prompt Input is built on top of [Input Group](https://fundamental-styles.netlify.app/?path=/docs/sap-fiori-components-forms-input-group--docs) and inherits its states (disabled, read-only, information, etc.).'
    }
  }
};