export default {
    title: 'Components/Message Toast',
    parameters: {
        description: `
The message toast is a small, non-disruptive popup for success messages that disappears automatically after a few seconds. When message toast is displayed, it is always centered horizontally at the bottom of the screen and fades in and out automatically.

Note: The timing and duration of the message toast is defined by the application, the standard value being 3000 ms. The duration can be above 3000 ms, but it's not recommended to be less than 3000 ms.
        
##Usage

**Use message toast if:**

- To display a short success message.
- To avoid interrupting the user while they are performing an action.
- To confirm a successful action.
        

**Do not use the message toast if:**

- You want to display an error or warning message.
- You want to interrupt users while they are performing an action.
- You want to make sure that users read the message before they leave the page.
        `,
        tags: ['f3', 'a11y', 'theme'],
        components: ['message-toast']
    }
};

export const defaultToast = () => `
<div class="fd-message-toast">Product added</div>
<br><br>
<div class="fd-message-toast">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
`;



defaultToast.storyName = 'Default';

defaultToast.parameters = {
    docs: {
        iframeHeight: 210,
        storyDescription: `The default message toast displays a simple popup with non-interactive text. The text wraps once it reaches the max-width of 15rem.
        `
    }
};
