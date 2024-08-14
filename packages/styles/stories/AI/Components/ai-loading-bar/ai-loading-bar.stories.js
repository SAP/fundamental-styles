import aiLoadingBarExampleHtml from './ai-loading-bar.example.html?raw';
import '../../../../src/ai-loading-bar.scss';

export default {
    title: 'AI/Components/Loading Bar',
    parameters: {
        description: `The AI Loading bar informs the user about an ongoing operation powered by AI and it's part of AI progress indicator pattern. For more information refer to AI progress indicator pattern.<br>
        <b>Note:AI Loading bar is part of AI Progress Indicator pattern and is intended to be used in text generation scenarios within a text area or rich text editor. <br><br>The component is in an experimental state.</b>`,
        tags: ['ai', 'experimental']
    }
};


export const AILoadingBar = () => aiLoadingBarExampleHtml;
AILoadingBar.parameters = {
    docs: {
     description: {
        story: `The AI Loading bar component consists of:
<br>
<b>Loading bar:</b> An gradient bar animated (<b style="color: red;">the animation is in development</b>) in loop that visually reinforces that the system is actively processing tasks or generating results. For more information see AI Progress Indicator.`
      }
    }
  };