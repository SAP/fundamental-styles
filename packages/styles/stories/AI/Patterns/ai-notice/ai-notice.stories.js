import aiNoticeExampleHtml from "./ai-notice.example.html?raw";

import '../../../../src/textarea.scss';
import '../../../../src/form-item.scss';
import '../../../../src/button.scss';
import '../../../../src/icon.scss';
import '../../../../src/form-label.scss';
import '../../../../src/link.scss';
import '../../../../src/ai-text.scss';

export default {
  title: 'AI/Patterns/Notice',
  parameters: {
    description: `The "AI Notice" pattern provides clear references about the quality and reliability of AI-generated results in written text. It is an essential part of the broader "messaging patterns" associated with AI services and integrates with other AI interaction patterns like explainability and feedback. This pattern helps users understand the trustworthiness of AI-generated content, enhancing transparency and confidence. It's especially useful in environments where AI-generated information is key, such as collaborative platforms, educational tools, content creation apps, and informational websites.
<br><b>Note: The component is in an experimental state.</b>`,
    tags: ['ai', 'experimental']
  }
};
export const AINotice = () => aiNoticeExampleHtml;
AINotice.parameters = {
  docs: {
   description: {
      story: ``
    }
  }
};