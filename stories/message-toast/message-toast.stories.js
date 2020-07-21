import '../../dist/message-toast.css';

export default {
    title: 'Components/Message Toast',
    parameters: {
        description: `
Message Toast is a small, non-disruptive popup for success messages that disappears automatically after a few seconds.
        
__Usage__
Message Toast is used in the following cases:

* To display a short success message.
* To avoid interrupting the user while they are performing an action.
* To confirm a successful action.

__Responsiveness__

* The behavior of the message toast is the same on all devices. The max-width of the element is 15rem, after which the text wraps.

__Position__

* The message toast is always centered horizontally at the bottom of the screen.

__Behavior and Interaction__

* The message toast fades in and out automatically. The timing and duration of the message toast is defined by the app.
        `,
        tags: ['f3', 'a11y', 'theme']
    }
};

export const defaultToast = () => `
<div class="fd-message-toast">Product added</div>
<br><br>
<div class="fd-message-toast">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
`;



defaultToast.storyName = 'Default Toast';

defaultToast.parameters = {
    docs: {
        iframeHeight: 210
    }
};
