import aiTextHighlightExampleHtml from "./ai-text-highlight.example.html?raw";

import '../../../../src/textarea.scss';
import '../../../../src/fieldset.scss';
import '../../../../src/form-label.scss';
import '../../../../src/form-message.scss';
import '../../../../src/form-item.scss';
import '../../../../src/form-group.scss';
import '../../../../src/popover.scss';
import '../../../../src/menu.scss';
import '../../../../src/button.scss';
import '../../../../src/icon.scss';
import '../../../../src/ai-text.scss';

export default {
  title: 'AI/Patterns/Text Highlight',
  parameters: {
    description: `The AI Text Highlight pattern helps users differentiate between AI-generated and human-authored text. This clear distinction is vital for maintaining transparency and trust, especially as AI becomes more prevalent in applications. By visually distinguishing the two types of text, users can easily identify the source of the information, aiding in understanding the context and any potential biases. This pattern is especially useful in scenarios where both AI and human inputs are present.
<br><b>Note: The component is in an experimental state.</b>`,
    tags: ['ai', 'experimental']
  }
};
export const AITextHighlight = () => aiTextHighlightExampleHtml;
AITextHighlight.parameters = {
  docs: {
   description: {
      story: 'The AI Text highlight pattern is always used on a block of text shown within components like Text Area, Rich Text Editor etc.'
    }
  }
};