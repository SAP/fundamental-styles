import aiWritingAssistantInputsExampleHtml from "./ai-writing-assistant-inputs.example.html?raw";

import '../../../../src/textarea.scss';
import '../../../../src/form-item.scss';
import '../../../../src/input.scss';
import '../../../../src/input-group.scss';
import '../../../../src/button.scss';
import '../../../../src/icon.scss';
import '../../../../src/form-label.scss';
import '../../../../src/link.scss';
import '../../../../src/menu.scss';
import '../../../../src/ai-text.scss';
import '../../../../src/ai-writing-assistant.scss';
import '../../../../src/ai-writing-assistant-versioning.scss';

export default {
  title: 'AI/Patterns/Writing Assistant',
  parameters: {
    description: `The AI Writing Assistant simplifies interactions with generative AI, improving task efficiency and creating an intuitive, valuable user experience.
It integrates with input fields, textareas and riche text editors, assisting users in crafting, refining, and enhancing text through Quick Prompts. These prompts, designed by prompt engineers who specialize in quality, guide the AI's output. The AI Writing Assistant Menu offers writing-focused options like "Change Tone," "Adjust Length," "Translate," and "Analyze Text," which can be applied to all or part of the text.

<b>Use Writing Assistant: </b>
<ul>
    <li>for repetitive or common text editing tasks within a workflow.</li>
    <li>when minimizing user bias in writing prompts is important.</li>
    <li>when consistent and predictable outcomes are essential.</li>
    <li>use recommended AI action labels.</li>
    <li>always pair with the AI Notice pattern.</li>
    <li>to ensure users are aware they're interacting with AI.</li>
    <li>to enable the AI Writing Assistant only on key fields in longer forms for optimal performance.</li>
    <li>to ensure text areas and rich text editors have a proper minimum height to accommodate the AI Writing Assistant</li>
</ul>

<b>Do not use Writing Assistant: </b>
<ul>
  <li>with AI Menu Button Quick Prompts.</li>
  <li>where AI-assisted editing is unlikely to add value.</li>
  <li>when the AI lacks context for high-quality results; consider custom or guided prompts instead.</li>
  <li>for non-AI functions.</li>
  <li>avoid mixing AI and non-AI functions in the AI Writing Assistant menu and toolbar.</li>
</ul>

<br><b>Note: The component is in an experimental state.</b>`,
    tags: ['ai', 'experimental']
  }
};
export const AIWritingAssistantForInputFileds = () => aiWritingAssistantInputsExampleHtml;
