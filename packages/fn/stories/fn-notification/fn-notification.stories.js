import 'fn/src/fn-notification.scss';
import 'styles/src/icon.scss';
import 'fn/src/fn-button.scss';
import 'fn/src/fn-nested-button.scss';
import 'fn/src/fn-avatar.scss';
import 'fn/src/fn-object-status.scss';

export default {
  title: 'Notification',
  parameters: {
    description: `
## Modifiers

### Semantic

|             Modifier class                | Semantic mode |
| ------------------------------------------| ------------- |
| \`fd-notification--positive\` &nbsp;&nbsp;| Positive      |
| \`fd-notification--info\` &nbsp;&nbsp;    | Information   |
| \`fd-notification--negative\` &nbsp;&nbsp;| Negative      |
| \`fd-notification--critical\` &nbsp;&nbsp;| Critical      |

`,
    tags: []
  }
};
const localStyles = `
<style>
    .docs-story {
        background: white;
    }
</style>
`;
export const Notification = () => `${localStyles}
    <div class="fn-notification" style="max-width: 500px;">
        <div class="fn-notification__main-container">
            <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--thumbnail">
                <div class="fn-avatar__thumbnail" role="img" aria-label="John Doe" style="background-image: url('/assets/images/backgrounds/city.jpg')"></div>
            </div>
            <div class="fn-notification__text-container">
                <span class="fn-notification__title">Quo culpa sint aut tempora rerum placeat.</span>
                <span class="fn-notification__text">Modi doloremque nesciunt nemo delectus cum dignissimos est voluptas commodi.</span>
            </div>
            <button class="fn-nested-button" aria-label="nested button">
                <span class="sap-icon sap-icon--decline"></span>
            </button>
        </div>
        <div class="fn-notification__button-container">
            <button class="fn-button fn-button--emphasized">
                <span class="sap-icon sap-icon--sys-enter"></span>
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
export const SemanticNotification = () => `${localStyles}
    <div class="fn-notification fn-notification--positive">
        <div class="fn-notification__semantic-container">
            <span class="sap-icon sap-icon--status-positive"></span>
            <span class="fn-notification__semantic-title">Positive</span>
        </div>
        <div class="fn-notification__main-container">
            <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--thumbnail">
                <div class="fn-avatar__thumbnail" role="img" aria-label="John Doe" style="background-image: url('/assets/images/backgrounds/city.jpg')"></div>
            </div>
            <div class="fn-notification__text-container">
                <span class="fn-notification__text">Modi doloremque nesciunt nemo delectus cum dignissimos est voluptas commodi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            </div>
        </div>
        <div class="fn-notification__button-container">
            <button class="fn-button fn-button--positive fn-button--emphasized">
                <span class="sap-icon sap-icon--sys-enter"></span>
                <span class="fn-button__text">Approve</span>
            </button>
            <button class="fn-button fn-button--secondary">
                <span class="fn-button__text">Reject</span>
            </button>
        </div>
    </div>
    <br/><br/><br/>
    <div class="fn-notification fn-notification--info">
        <div class="fn-notification__semantic-container">
            <span class="sap-icon sap-icon--information"></span>
            <span class="fn-notification__semantic-title">Information</span>
        </div>
        <div class="fn-notification__main-container">
            <div class="fn-notification__text-container">
                <span class="fn-notification__text">Modi doloremque nesciunt nemo delectus cum dignissimos est voluptas commodi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            </div>
        </div>
        <div class="fn-notification__button-container">
            <button class="fn-button fn-button--emphasized">
                <span class="sap-icon sap-icon--sys-enter"></span>
                <span class="fn-button__text">Approve</span>
            </button>
            <button class="fn-button fn-button--secondary">
                <span class="fn-button__text">Reject</span>
            </button>
        </div>
    </div>
    <br/><br/><br/>
    <div class="fn-notification fn-notification--critical">
        <div class="fn-notification__semantic-container">
            <span class="sap-icon sap-icon--status-critical"></span>
            <span class="fn-notification__semantic-title">Critical</span>
        </div>
        <div class="fn-notification__main-container">
            <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--raspberry">
                <div class="fn-avatar__initials">M</div>
            </div>
            <div class="fn-notification__text-container">
                <span class="fn-notification__text">Modi doloremque nesciunt nemo delectus cum dignissimos est voluptas commodi.</span>
            </div>
        </div>
        <div class="fn-notification__button-container">
            <button class="fn-button fn-button--critical fn-button--emphasized">
                <span class="sap-icon sap-icon--sys-enter"></span>
                <span class="fn-button__text">Approve</span>
            </button>
            <button class="fn-button fn-button--secondary">
                <span class="fn-button__text">Reject</span>
            </button>
        </div>
    </div>
    <br/><br/><br/>
    <div class="fn-notification fn-notification--negative" style="max-width: 400px;">
        <div class="fn-notification__semantic-container">
            <span class="sap-icon sap-icon--status-negative"></span>
            <span class="fn-notification__semantic-title">Negative</span>
        </div>
        <div class="fn-notification__main-container">
            <div class="fn-avatar fn-avatar--circle fn-avatar--m fn-avatar--raspberry">
                <div class="fn-avatar__icon" role="presentation">
                    <span class="sap-icon sap-icon--person-placeholder"></span>
                </div>
            </div>
            <div class="fn-notification__text-container">
                <span class="fn-notification__text">Modi doloremque nesciunt nemo delectus cum dignissimos est voluptas commodi.</span>
            </div>
        </div>
        <div class="fn-notification__button-container">
            <button class="fn-button fn-button--negative fn-button--emphasized">
                <span class="sap-icon sap-icon--sys-enter"></span>
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
