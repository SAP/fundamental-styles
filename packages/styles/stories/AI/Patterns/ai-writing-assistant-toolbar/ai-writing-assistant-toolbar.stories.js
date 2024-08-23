import aiWritingAssistantToolbarExampleHtml from "./ai-writing-assistant-toolbar.example.html?raw";

import '../../../../src/button.scss';
import '../../../../src/icon.scss';
import '../../../../src/form-label.scss';
import '../../../../src/toolbar.scss';
import '../../../../src/ai-writing-assistant-versioning.scss';

export default {
  title: 'AI/Patterns/Writing Assistant Toolbar',
  parameters: {
    description: `The AI writing assistant toolbar is part of AI writing assistant pattern for text areas and rich text editors. It allows users to access AI writing assistant capabilities within Text Areas and Rich Text Editor.

<b>Anatomy:</b><br>
AI Writing Assistant Toolbar extends the toolbar component to enable new AI-specific interactions and is composed by:
<br>
<ul>
    <li>Toolbar Container: Embedded at the bottom of the Text Area or Rich Text Editor, the toolbar spans the entire width of the parent component.</li>
    <li>AI Icon Menu Button: Positioned on the right side of the AI toolbar, it indicates AI writing assistance and provides a menu with AI prompts for fine-tuning the content.</li>
    <li>Performed AI Prompt: Uses the label component to display the AI prompt applied to this version of the content is shown to the right of the versioning element.</li>
    <li>Versioning: Positioned within the AI writing assistant toolbar, it includes:
      <ul>
        <li>previous version icon for navigation</li>
        <li>version indicator</li>
        <li>next version icon for navigation</li>
      </ul>
      This versioning feature allows users to view different versions of AI-generated content.
    </li>
</ul>

<br><b>Note: The component is in an experimental state.</b>`,
    tags: ['ai', 'experimental']
  }
};
export const AIWritingAssistantToolbar = () => aiWritingAssistantToolbarExampleHtml;
AIWritingAssistantToolbar.parameters = {
  docs: {
   description: {
      story: ``
    }
  }
};