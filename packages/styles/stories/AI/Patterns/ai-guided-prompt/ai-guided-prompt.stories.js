import aiGuidedPromptExampleHtml from "./ai-guided-prompt.example.html?raw";

import '../../../../src/textarea.scss';
import '../../../../src/fieldset.scss';
import '../../../../src/form-label.scss';
import '../../../../src/form-message.scss';
import '../../../../src/form-item.scss';
import '../../../../src/form-group.scss';
import '../../../../src/popover.scss';
import '../../../../src/menu.scss';
import '../../../../src/button.scss';
import '../../../../src/slider.scss';
import '../../../../src/title.scss';
import '../../../../src/bar.scss';
import '../../../../src/segmented-button.scss';
import '../../../../src/icon.scss';
import '../../../../src/select.scss';
import '../../../../src/list.scss';
import '../../../../src/ai-text.scss';

export default {
  title: 'AI/Patterns/Guided Prompt',
  parameters: {
    description: `Guided prompts provide structured input-UIs to guide the user in instructing the generative Al model on the desired output. They are helpful when users want to specify certain attributes, styles, or parameters for the generated content.<br> Guided prompts offer control and precision in generating output that aligns with user preferences. All provided information is combined into a processable prompt in the back-end and the user only needs to select the desired option instead of verbalizing them in a custom prompt.<br><br>
    <b>Use Guided prompt when: </b>
<ul>
    <li>users are using the generative AI feature for specific, predefined use cases or queries</li>
    <li>the system can assist with a limited number of defined actions</li>
    <li>users lack expertise or experience in writing prompts</li>
    <li>users need the ability to customize and personalize inputs for flexibility</li>
    <li>consistency and predictability in the outcome are essential</li>
</ul><br>
<b>Do not use Guided prompt when: </b>
<ul>
    <li>users require a high level of flexibility to define outcomes (opt for custom prompts)</li>
    <li>the task involves only a few specific actions (consider using quick prompts)</li>
    <li>user intents or desired outcomes are unpredictable or undefined (use custom prompts)</li>
</ul>

<b>Anatomy:</b>A guided prompt is structured around a <b>container</b>, which provides the framework for the input content. The container can be any existing component within the Design System, such as a Popover, Dialog, Sidecontent, or Card, with the choice depending on the application's use case. <br>
The <b>input content</b> within the container includes a variety of input controls, selected based on the use case. It's important to use a diverse range of controls and avoid relying solely on drop-down menus. All controls should adhere to the Design System's visual, behavioral, and interaction guidelines.<br>
The <b>action</b> for the guided prompt is defined according to the use case and aligned with User Assistance. The placement of the action follows the container's general guidelines, while the button's visual design adheres to the AI-specific guidance. <br><br>

<b>Variants:</b> 
<b>Popover:</b> Ideal for guiding prompts tied to a specific input, such as text. It offers quick, limited options that directly affect the related content.<br>
<b>Dialog:</b> Suitable for more complex guided prompts. Avoid layering multiple dialogs.<br>
<b>Dynamic Side Content:</b> Useful for displaying dense information without losing connection to the main content. It's great for complex prompts without causing significant disruption.
<br><br><br><b>Note: The component is in an experimental state.</b>`,
    tags: ['ai', 'experimental']
  }
};
export const AIGuidedPrompt = () => aiGuidedPromptExampleHtml;
AIGuidedPrompt.parameters = {
  docs: {
   description: {
      story: ``
    }
  }
};