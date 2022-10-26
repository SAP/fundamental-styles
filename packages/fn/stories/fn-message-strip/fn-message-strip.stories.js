import 'fn/src/fn-message-strip.scss';
import 'fn/src/fn-button.scss';
import 'fn/src/fn-nested-button.scss';
import 'styles/src/icon.scss';

export default {
  title: 'Message Strip',
  parameters: {
    description: `**Modifier classes for Message Strip:**

| Modifier                                                      | Message Strip Type              |
| ------------------------------------------------------------- | ------------------------------- |
| \`.fn-message-strip\` &nbsp;&nbsp;&nbsp;&nbsp;                | default ("information")         |
| \`.fn-message-strip--success\` &nbsp;&nbsp;&nbsp;&nbsp;       | success                         |
| \`.fn-message-strip--warning\` &nbsp;&nbsp;&nbsp;&nbsp;       | warning                         |
| \`.fn-message-strip--error\` &nbsp;&nbsp;&nbsp;&nbsp;         | error                           |
| \`.fn-message-strip--dismissible\` &nbsp;&nbsp;&nbsp;&nbsp;   | dismissible (with close button) |


## Structure

- \`.fn-message-strip\`. Modifier classes: \`.fn-message-strip--success\`, \`.fn-message-strip--warning\`, \`.fn-message-strip--error\`, \`.fn-message-strip--dismissible\`.
    - \`.fn-message-strip__text\`. Modifier classes: \`fn-message-strip__text--truncate\`.
    - \`.fn-message-strip__icon\`.
    - \`.fn-message-strip__close-button\`.
        `,
    tags: []
  }
};
const localStyles = `
<style>
    .docs-story {
        background: white;
    }

    .docs-story .fn-message-strip {
        margin-bottom: 1rem;
    }
</style>
`;
export const Primary = () => `${localStyles}
    <div class="fn-message-strip fn-message-strip--dismissible">
        <span class="sap-icon sap-icon--message-information fn-message-strip__icon"></span>
        <span class="fn-message-strip__text">Information (default) Message Strip Text</span>
        <button class="fn-nested-button fn-message-strip__close-button" aria-label="close">
            <span class="sap-icon sap-icon--decline"></span>
        </button>
    </div>
    <div class="fn-message-strip fn-message-strip--dismissible fn-message-strip--success">
        <span class="sap-icon sap-icon--message-success fn-message-strip__icon"></span>
        <span class="fn-message-strip__text">Success Message Strip Text</span>
        <button class="fn-nested-button fn-message-strip__close-button" aria-label="close">
            <span class="sap-icon sap-icon--decline"></span>
        </button>
    </div>
    <div class="fn-message-strip fn-message-strip--dismissible fn-message-strip--warning">
        <span class="sap-icon sap-icon--message-warning fn-message-strip__icon"></span>
        <span class="fn-message-strip__text">Warning Message Strip Text</span>
        <button class="fn-nested-button fn-message-strip__close-button" aria-label="close">
            <span class="sap-icon sap-icon--decline"></span>
        </button>
    </div>
    <div class="fn-message-strip fn-message-strip--dismissible fn-message-strip--error">
        <span class="sap-icon sap-icon--message-error fn-message-strip__icon"></span>
        <span class="fn-message-strip__text">Error Message Strip Very Long Text lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
        <button class="fn-nested-button fn-message-strip__close-button" aria-label="close">
            <span class="sap-icon sap-icon--decline"></span>
        </button>
    </div>
`;
Primary.storyName = 'Dismissible Message Strip';
Primary.parameters = {
  docs: {
    description: {
      story: 'The message strip displays information bars with semantic colors and icons, indicating different levels of urgency and/or action required by the user. The message strip is fully responsive, with an icon and close button on opposite sides of the message text. Text and links behave differently, and wrap if space is limited. For dismissible message strip add the `.fn-message-strip--dismissible` modifier class to `.fn-message-strip` base class.'
    }
  }
};
export const NoIcon = () => `${localStyles}
    <div class="fn-message-strip fn-message-strip--dismissible">
        <span class="fn-message-strip__text">Information (default) Message Strip Text</span>
        <button class="fn-nested-button fn-message-strip__close-button" aria-label="close">
            <span class="sap-icon sap-icon--decline"></span>
        </button>
    </div>
    <div class="fn-message-strip fn-message-strip--dismissible fn-message-strip--success">
        <span class="fn-message-strip__text">Success Message Strip Text</span>
        <button class="fn-nested-button fn-message-strip__close-button" aria-label="close">
            <span class="sap-icon sap-icon--decline"></span>
        </button>
    </div>
    <div class="fn-message-strip fn-message-strip--dismissible fn-message-strip--warning">
        <span class="fn-message-strip__text">Warning Message Strip Text</span>
        <button class="fn-nested-button fn-message-strip__close-button" aria-label="close">
            <span class="sap-icon sap-icon--decline"></span>
        </button>
    </div>
    <div class="fn-message-strip fn-message-strip--dismissible fn-message-strip--error">
        <span class="fn-message-strip__text">Error Message Strip Text</span>
        <button class="fn-nested-button fn-message-strip__close-button" aria-label="close">
            <span class="sap-icon sap-icon--decline"></span>
        </button>
    </div>
`;
NoIcon.storyName = 'Message Strip with No Icon';
export const NoDismiss = () => `${localStyles}
    <div class="fn-message-strip">
        <span class="sap-icon sap-icon--message-information fn-message-strip__icon"></span>
        <span class="fn-message-strip__text">Information (default) Message Strip Text</span>
    </div>
    <div class="fn-message-strip fn-message-strip--success">
        <span class="sap-icon sap-icon--message-success fn-message-strip__icon"></span>
        <span class="fn-message-strip__text">Success Message Strip Text</span>
    </div>
    <div class="fn-message-strip fn-message-strip--warning" style="max-width: 300px;">
        <span class="sap-icon sap-icon--message-warning fn-message-strip__icon"></span>
        <span class="fn-message-strip__text fn-message-strip__text--truncate">Warning Message Strip very long text with truncation</span>
    </div>
    <div class="fn-message-strip fn-message-strip--error" style="max-width: 300px;">
        <span class="sap-icon sap-icon--message-error fn-message-strip__icon"></span>
        <span class="fn-message-strip__text">Error Message Strip very long text without truncation</span>
    </div>
`;
NoDismiss.storyName = 'Non-Dismissible Message Strip';
NoDismiss.parameters = {
  docs: {
    description: {
      story: 'No modifier class is required for non-dismissible message strip. Long text wrap in multi line if the space is limited and can truncate if the `.fn-message-strip__text--truncate` modifier class is added to the `.fn-message-strip__text` base class. The width of the message strip can be controlled with inline css, for example: `style="max-width: 300px;"`'
    }
  }
};
