import aiAcknowledgmentExampleHtml from "./ai-acknowledgment.example.html?raw";
import '../../../../src/form-label.scss';
import '../../../../src/form-item.scss';
import '../../../../src/checkbox.scss';
import '../../../../src/button.scss';
import '../../../../src/icon.scss';
import '../../../../src/link.scss';
import '../../../../src/title.scss';
import '../../../../src/bar.scss';
import '../../../../src/dialog.scss';
import '../../../../src/message-box.scss';

export default {
  title: 'AI/Patterns/Acknowledgment',
  parameters: {
    description: `AI Acknowledgment provides users with important information and updates about an AI service in a standardized format. Its main goal is to educate users on the key aspects of AI-enabled applications, including potential risks, opportunities, and limitations. This helps set user expectations and fosters trust.

<b>Anatomy</b>
<ul>
    <li>Container: could be a Dialog or Message Box</li>
    <li>Illustrated Messages (optional): an image representing the AI service.
    Note: No specific AI illustrations are currently available. Please request new images if needed.
    </li>
    <li>Intro / Primary Message: The main message</li>
    <li>Headlines (optional): Descriptive headline for the paragraph.</li>
    <li>Reason / Key Aspects: The reason for this message</li>
    <li>Details / Link: Additional information and resources</li>
    <li>Checkbox Option: “Don't show this message again”</li>
</ul>
For more information see utilised/reused components in this pattern: Dialog, Message Box, and Illustrated Messages.

<br><b>Note: The component is in an experimental state.</b>`,
    tags: ['ai', 'experimental']
  }
};
export const AIAcknowledgment = () => aiAcknowledgmentExampleHtml;
AIAcknowledgment.parameters = {
  docs: {
   description: {
      story: ''
    }
  }
};