export default {
    title: 'Experimental/Message Strip',
    parameters: {
        description: `**Modifier classes for Message Strip:**

| Style&nbsp;&nbsp;&nbsp;&nbsp;      | Modifier class                |
| ---------------------------------- | ----------------------------- |
| fn-message-strip    | \`Default ("information") message strip.\`                      |
| fn-message-strip--success    | \`The "success" message strip.\`                      |
| fn-message-strip--warning    | \`The "warning" message strip.\`                      |
| fn-message-strip--error    | \`The "error" message strip.\`                      |
| fn-message-strip--dismissible    | \`A dismissible message strip.\`                      |
| fn-message-strip__icon    | \`Class applied to the icon for the message strip.\`                      |
| fn-message-strip__text    | \`Class applied to the text for the message strip.\`                      |

        `,
        components: ['fn-message-strip', 'fn-button', 'icon']
    }
};

const localStyles = `
<style>
    .fn-message-strip {
        margin-bottom: 1rem;
    }
</style>
`;

export const Primary = () => `${localStyles}
    <div class="fn-message-strip fn-message-strip--dismissible">
        <span class="sap-icon sap-icon--message-information fn-message-strip__icon"></span>
        <span class="fn-message-strip__text">Information (default) Message Strip Text</span>
        <button class="fn-button fn-button--transparent fn-button--icon-only fn-message-strip__close-button" aria-label="Close">
            <span class="sap-icon sap-icon--decline"></span>
        </button>
    </div>
    <div class="fn-message-strip fn-message-strip--success fn-message-strip--dismissible">
        <span class="sap-icon sap-icon--message-success fn-message-strip__icon"></span>
        <span class="fn-message-strip__text">Success Message Strip Text</span>
        <button class="fn-button fn-button--transparent fn-button--icon-only fn-message-strip__close-button" aria-label="Close">
            <span class="sap-icon sap-icon--decline"></span>
        </button>
    </div>
    <div class="fn-message-strip fn-message-strip--warning fn-message-strip--dismissible">
        <span class="sap-icon sap-icon--message-warning fn-message-strip__icon"></span>
        <span class="fn-message-strip__text">Warning Message Strip Text</span>
        <button class="fn-button fn-button--transparent fn-button--icon-only fn-message-strip__close-button" aria-label="Close">
            <span class="sap-icon sap-icon--decline"></span>
        </button>
    </div>
    <div class="fn-message-strip fn-message-strip--error fn-message-strip--dismissible">
        <span class="sap-icon sap-icon--message-error fn-message-strip__icon"></span>
        <span class="fn-message-strip__text">Error Message Strip Text</span>
        <button class="fn-button fn-button--transparent fn-button--icon-only fn-message-strip__close-button" aria-label="Close">
            <span class="sap-icon sap-icon--decline"></span>
        </button>
    </div>
`;

Primary.storyName = 'Message Strip';

Primary.parameters = {
    docs: {
        description: {
            story: 'The message strip displays information bars with semantic colors and icons, indicating different levels of urgency and/or action required by the user. The message strip is fully responsive, with an icon and close button on opposite sides of the message text. Text and links behave differently, and wrap if space is limited.'
        }
    }
};

export const NoIcon = () => `${localStyles}
    <div class="fn-message-strip fn-message-strip--dismissible">
        <span class="fn-message-strip__text">Information (default) Message Strip Text</span>
        <button class="fn-button fn-button--transparent fn-button--icon-only fn-message-strip__close-button" aria-label="Close">
            <span class="sap-icon sap-icon--decline"></span>
        </button>
    </div>
    <div class="fn-message-strip fn-message-strip--success fn-message-strip--dismissible">
        <span class="fn-message-strip__text">Success Message Strip Text</span>
        <button class="fn-button fn-button--transparent fn-button--icon-only fn-message-strip__close-button" aria-label="Close">
            <span class="sap-icon sap-icon--decline"></span>
        </button>
    </div>
    <div class="fn-message-strip fn-message-strip--warning fn-message-strip--dismissible">
        <span class="fn-message-strip__text">Warning Message Strip Text</span>
        <button class="fn-button fn-button--transparent fn-button--icon-only fn-message-strip__close-button" aria-label="Close">
            <span class="sap-icon sap-icon--decline"></span>
        </button>
    </div>
    <div class="fn-message-strip fn-message-strip--error fn-message-strip--dismissible">
        <span class="fn-message-strip__text">Error Message Strip Text</span>
        <button class="fn-button fn-button--transparent fn-button--icon-only fn-message-strip__close-button" aria-label="Close">
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
    <div class="fn-message-strip fn-message-strip--warning">
        <span class="sap-icon sap-icon--message-warning fn-message-strip__icon"></span>
        <span class="fn-message-strip__text">Warning Message Strip Text</span>
    </div>
    <div class="fn-message-strip fn-message-strip--error">
        <span class="sap-icon sap-icon--message-error fn-message-strip__icon"></span>
        <span class="fn-message-strip__text">Error Message Strip Text</span>
    </div>
`;

NoDismiss.storyName = 'Non-Dismissible Message Strip';
