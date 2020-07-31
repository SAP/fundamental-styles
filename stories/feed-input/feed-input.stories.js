import '../../dist/form-item.css';
import '../../dist/input.css';

export default {
    title: 'Components/Feed Input',
    parameters: {
        description: `
        The Feed Input is a component specifically design to allow the user to type his/her own notes and add them to a Feed.
`,
        tags: ['f3', 'a11y', 'theme']
    }
};

export const primary = () => `
    <div class="fd-feed-input">
        <img class="fd-feed-input__thumb" src="/assets/twitter.png" alt="Thumbnail" />
        <textarea class="fd-textarea fd-feed-input__textarea" id="textarea-1" placeholder="Post something here"></textarea>
        <button class="fd-button sap-icon--navigation-right-arrow fd-feed-input__submit-button" aria-label="Submit"></button>
    </div>
`;

primary.storyName = 'Default';
