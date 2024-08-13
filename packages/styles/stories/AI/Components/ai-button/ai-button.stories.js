import aiButtonExampleHtml from './ai-button.example.html?raw';

import '../../../../src/icon.scss';
import '../../../../src/button.scss';
import '../../../../src/menu.scss';

export default {
    title: 'AI/Components/Button',
    parameters: {
        description: `The AI button is a button used in AI-related scenarios. It enables users to trigger actions by clicking or tapping the button, or by pressing the Enter key. The AI button can have one or more states. Each state have a name that identifies it and can have text, icon and end icon defined (in any combination) depending on the state purpose. <br>
        <b>Note: The component is in an experimental state.</b>`,
        tags: ['ai', 'experimental']
    }
};


export const AIButton = () => aiButtonExampleHtml;
