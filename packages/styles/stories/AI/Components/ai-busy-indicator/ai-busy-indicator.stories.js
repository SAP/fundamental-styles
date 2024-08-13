import aiBusyIndicatorExampleHtml from './ai-busy-indicator.example.html?raw';

import '../../../../src/icon.scss';
import '../../../../src/ai-busy-indicator.scss';


export default {
    title: 'AI/Components/Busy Indicator',
    parameters: {
        description: `The AI busy indicator informs the user about an ongoing operation powered by AI and it's part of AI progress indicator pattern. For more information refer to AI progress indicator pattern.<br>
        <b>Note: AI Busy indicator is part of AI Progress Indicator pattern and is intended to be used in text generation scenarios within a text area or rich text editor. <br><br>The component is in an experimental state.</b>`,
        tags: ['ai', 'experimental']
    }
};


export const AIBusyIndicator = () => aiBusyIndicatorExampleHtml;
AIBusyIndicator.parameters = {
    docs: {
     description: {
        story: `The AI busy indicator component consists of two parts:
<br>
<b>Icon: </b>AI icon with looped animation (<b style="color: red;">the animation is in development</b>) conveys to users that AI processes are actively underway.<br>
<b>Text: </b>Keeps users updated on the status of their request. While AI is processing the request we advise the usage of the standard UI text ”Analyzing request...".`
      }
    }
  };