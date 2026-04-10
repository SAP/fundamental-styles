import aiProgressIndicatorExampleHtml from './ai-progress-indicator.example.html?raw';

import '../../../../src/textarea.scss';
import '../../../../src/fieldset.scss';
import '../../../../src/form-label.scss';
import '../../../../src/form-item.scss';
import '../../../../src/form-group.scss';
import '../../../../src/button.scss';
import '../../../../src/icon.scss';
import '../../../../src/ai-busy-indicator.scss';
import '../../../../src/ai-loading-bar.scss';
import '../../../../src/ai-text.scss';

export default {
    title: 'AI/Patterns/Progress Indicator',
    parameters: {
        description: `AI Progress Indicator provides information about the status of a user's request while they wait for the content to be generated. The main goal of this pattern is to keep the user engaged and informed, manage their expectations and show that the system is actively working. 
        <br><br>
<b>Use Progress Indicator: </b>
<ul>
    <li>when the duration of the AI generation process is uncertain</li>
    <li>to show users that the system is actively working</li>
    <li>when you need to keep users informed about the status of their request</li>
    <li>to provide real-time updates on the progress of the AI task</li>
</ul><br>
<b>Do not use Progress Indicator: </b>
<ul>
    <li>for operations that take less than one second</li>
    <li>when providing a time estimate for the process</li>
    <li>in non-AI scenarios</li>
</ul>
<b>Note: The component is in an experimental state.</b>`,
        tags: ['ai', 'experimental']
    }
};


export const AIProgressIndicator = () => aiProgressIndicatorExampleHtml;
AIProgressIndicator.parameters = {
    docs: {
     description: {
        story: `AI Progress Indicator pattern extends the following components to enable new AI-specific interactions:
<ul>
    <li><b>AI button</b> (Stop generating Button): provides user the option to stop the generation at any given time.  For more information see AI button.</li>
    <li><b>AI Icon</b>: AI icon with looped animation conveys to users that AI processes are actively underway. Text string keeps users updated on the status of their request. We advise the usage of the standard UI text ”Analyzing request...". For more information see AI busy indicator.</li>
    <li><b>AI Busy Indicator</b>: informs the user about an ongoing operation powered by AI</li>
    <li><b>AI Loading bar</b>: an animated gradient bar visually reinforces that the system is actively processing tasks. For more information see AI loading bar.</li>
    <li><b>Text area</b></li>
    <li><b>Rich text editor</b></li>
</ul>`
      }
    }
  };