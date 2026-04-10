import aiQuickPromptExampleHtml from "./ai-quick-prompt.example.html?raw";


import '../../../../src/popover.scss';
import '../../../../src/menu.scss';
import '../../../../src/button.scss';
import '../../../../src/icon.scss';
import '../../../../src/list.scss';

export default {
  title: 'AI/Patterns/Quick Prompt',
  parameters: {
    description: `In generative AI, prompts direct the AI to produce outputs that meet users' needs with high-quality instructions.<br>Quick prompts, integrated into workflows, enable users to execute predefined actions effortlessly. These prompts are designed by prompt engineers who prioritize AI efficiency. <br>

<b>Use Quick Prompt: </b>
<ul>
    <li>for repetitive tasks or common actions within a workflow</li>
    <li>when input options are limited, especially in mobile scenarios</li>
    <li>when the system can only assist with specific actions</li>
    <li>when users lack expertise in the subject matter</li>
    <li>to minimize bias introduced by users' writing prompts</li>
    <li>when consistent and predictable outcomes are essential</li>
</ul>

<b>Do not use Quick Prompt: </b>

<ul>
    <li>when a user's intent is unpredictable</li>
    <li>when users need flexibility in directing the AI model's output</li>
    <li>for non-AI-related actions, use a dedicated menu button for those items</li>
</ul>

<b>Note: The component is in an experimental state.</b>
`,
    tags: ['ai', 'experimental']
  }
};
export const AIQuickPrompt = () => aiQuickPromptExampleHtml;
AIQuickPrompt.parameters = {
  docs: {
   description: {
      story: ``
    }
  }
};