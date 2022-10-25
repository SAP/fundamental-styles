import 'fn/src/fn-message-toast.scss';

export default {
  title: 'Message Toast',
  parameters: {
    description: `

        `,
    tags: []
  }
};
const localStyles = `
<style>
    .docs-story {
        background: white;
    }

    .docs-fn-container > .fn-message-toast {
        margin-bottom: 1rem;
    }
</style>
`;
export const MessageToast = () => `${localStyles}
<div class="docs-fn-container">
    <div class="fn-message-toast">
        <span class="fn-message-toast__text">Operation failed successfully.</span>
    </div>

    <div class="fn-message-toast">
        <span class="fn-message-toast__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </span>
    </div>

    <div class="fn-message-toast">
        <span class="fn-message-toast__text fn-message-toast__text--truncate">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </span>
    </div>

    <div class="fn-message-toast" style="width: 400px;">
        <span class="fn-message-toast__text fn-message-toast__text--truncate">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </span>
    </div>
</div>
`;
MessageToast.parameters = {
  docs: {
    iframeHeight: 500,
    description: {
      story: `To truncate long text apply the \`.fn-message-toast__text--truncate\` modifier class to the \`.fn-message-toast__text\` base class. <br>
            You can control the width of the Message Toast with inline styling. For example, by adding \` style="width: 400px;"\` to the parent element with class \`.fn-message-toast\`.
            `
    }
  }
};
