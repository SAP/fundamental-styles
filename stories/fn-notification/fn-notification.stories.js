export default {
    title: 'Experimental/Notification',
    parameters: {
        components: ['fn-notification', 'icon', 'fn-button', 'fn-avatar'],
        description: `
## Modifiers

### Semantic

These modifier classes are used to display the general look of the calendar component.\n
| Modifier class | Use to... |
| -------------:| :------------- |
| \`fd-notification--positive\` | Display notification in positive semantic mode
| \`fd-notification--info\` | Display notification in information semantic mode
| \`fd-notification--negative\` | Display notification in negative semantic mode
| \`fd-notification--critical\` | Display notification in critical semantic mode

`
    }
};

export const Notification = () => `
    <div class="fn-notification">
        <div class="fn-notification__main-container">
            <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--crimson">
                <div class="fn-avatar__initials">M</div>
            </div>
            <div class="fn-notification__text-container">
                <span class="fn-notification__title">Quo culpa sint aut tempora rerum placeat.</span>
                <span class="fn-notification__text">Modi doloremque nesciunt nemo delectus cum dignissimos est voluptas commodi.</span>
            </div>
            <button class="fn-button fn-button--layout fn-button--icon-only" aria-label="More">
                <span class="sap-icon sap-icon--decline"></span>
            </button>
        </div>
        <div class="fn-notification__button-container">
            <button class="fn-button fn-button--emphasized">
                <span class="sap-icon sap-icon--accept"></span>
                <span class="fn-button__text">Approve</span>
            </button>
            <button class="fn-button fn-button--secondary">
                <span class="fn-button__text">Reject</span>
            </button>
        </div>
    </div>
`;

Notification.parameters = {
    docs: {
        storyDescription: 'This is the default notification component.'
    }
};

export const SemanticNotification = () => `
    <div class="fn-notification fn-notification--positive">
        <div class="fn-notification__semantic-container">
            <div class="fn-avatar fn-avatar--xs fn-avatar--circle fn-notification__semantic-icon fn-notification__semantic-icon--positive">
                <div class="fn-avatar__icon">
                    <span class="sap-icon sap-icon--accept"></span>
                </div>
            </div>
            <span class="fn-notification__semantic-title">Positive</span>
        </div>
        <div class="fn-notification__main-container">
            <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--crimson">
                <div class="fn-avatar__initials">M</div>
            </div>
            <div class="fn-notification__text-container">
                <span class="fn-notification__text">Modi doloremque nesciunt nemo delectus cum dignissimos est voluptas commodi.</span>
            </div>
        </div>
        <div class="fn-notification__button-container">
            <button class="fn-button fn-button--emphasized">
                <span class="sap-icon sap-icon--accept"></span>
                <span class="fn-button__text">Approve</span>
            </button>
            <button class="fn-button fn-button--secondary">
                <span class="fn-button__text">Reject</span>
            </button>
        </div>
    </div>
`;

SemanticNotification.parameters = {
    docs: {
        storyDescription: 'Notifications can be made semantic with various modifier classes.'
    }
};
