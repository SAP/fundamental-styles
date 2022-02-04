export default {
    title: 'FN Components/Notification',
    parameters: {
        components: ['fn-notification', 'icon', 'fn-button', 'fn-avatar', 'fn-object-status'],
        description: `
## Modifiers

### Semantic

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
            <div class="fn-object-status fn-object-status--positive">
                <span class="sap-icon sap-icon--status-positive"></span>
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
    <br/>
    <div class="fn-notification fn-notification--info">
        <div class="fn-notification__semantic-container">
            <div class="fn-object-status fn-object-status--info">
                <span class="sap-icon sap-icon--status-positive"></span>
            </div>
            <span class="fn-notification__semantic-title">Information</span>
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
    <br/>
    <div class="fn-notification fn-notification--critical">
        <div class="fn-notification__semantic-container">
            <div class="fn-object-status fn-object-status--critical">
                <span class="sap-icon sap-icon--status-critical"></span>
            </div>
            <span class="fn-notification__semantic-title">Critical</span>
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
    <br/>
    <div class="fn-notification fn-notification--negative">
        <div class="fn-notification__semantic-container">
            <div class="fn-object-status fn-object-status--negative">
                <span class="sap-icon sap-icon--status-negative"></span>
            </div>
            <span class="fn-notification__semantic-title">Negative</span>
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
