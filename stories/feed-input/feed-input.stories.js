import '../../dist/textarea.css';
import '../../dist/feed-input.css';

export default {
    title: 'Components/Feed Input',
    parameters: {
        description: `
        The feed input component is specifically designed for the users to type their own notes or comments and post them to a corresponding feed.
`,
        tags: ['f3', 'a11y', 'theme']
    }
};

export const standard = () => `
    <div class="fd-feed-input" role="region" aria-label="Feed input empty example">
        <div class="fd-feed-input__thumb" style="background-image: url(http://lorempixel.com/460/620/people/7/)" role="img" title="Jhon Doe" aria-label="Jhon Doe"></div>
        <textarea class="fd-textarea fd-feed-input__textarea" id="textarea-1" rows="1" placeholder="Post something here" aria-label="Feed message" aria-required></textarea>
        <button class="fd-button sap-icon--feeder-arrow fd-feed-input__submit-button" aria-label="Send" title="Send" aria-disabled="true" disabled></button>
    </div>
`;

standard.storyName = 'Standard';
standard.parameters = {
    docs: {
        iframeHeight: 150,
        storyDescription: 'The standard feed input component displays an empty text field with an inactive submit button.'
    }
};


export const notEmpty = () => `
    <div class="fd-feed-input" role="region" aria-label="Feed input with one row text">
        <div class="fd-feed-input__thumb" style="background-image: url(http://lorempixel.com/460/620/people/7/)" role="img" title="Thumbnail"></div>
        <textarea class="fd-textarea fd-feed-input__textarea" id="textarea-2" aria-label="Feed message" aria-required rows="1" placeholder="Post something here">Textarea with a text makes submit button active</textarea>
        <button class="fd-button sap-icon--feeder-arrow fd-feed-input__submit-button" aria-label="Send" title="Send" aria-disabled="false"></button>
    </div>
`;

notEmpty.storyName = 'Input with text';
notEmpty.parameters = {
    docs: {
        iframeHeight: 150,
        storyDescription: 'The input with text displays some text within the field, which activates the submit button.'
    }
};

export const inputGrowth = () => `
    <div class="fd-feed-input" role="region" aria-label="Feed input height growth">
        <div class="fd-feed-input__thumb" style="background-image: url(http://lorempixel.com/460/620/people/7/)" role="img" title="Thumbnail"></div>
        <textarea class="fd-textarea fd-feed-input__textarea" id="textarea-3" aria-label="Feed" aria-required rows="3" placeholder="Post something here">With every line\ntext area grows upward\nuntil it reaches the max height</textarea>
        <button class="fd-button sap-icon--feeder-arrow fd-feed-input__submit-button" aria-label="Send" title="Send" aria-disabled="false"></button>
    </div>
`;

inputGrowth.storyName = 'Multiline';
inputGrowth.parameters = {
    docs: {
        iframeHeight: 180,
        storyDescription: 'Every new line extends textarea height until maximum height is reached. The multiline feed input displays a text field with multiple lines of text. When a new line is added to the field, the text area\'s height extends until the maximum height is reached.'
    }
};

export const overMaxHeight = () => `
    <div class="fd-feed-input" role="region" aria-label="Feed input over max height">
        <div class="fd-feed-input__thumb" style="background-image: url(http://lorempixel.com/460/620/people/7/)" role="img" title="Thumbnail"></div>
        <textarea class="fd-textarea fd-feed-input__textarea" id="textarea-4" rows="18" aria-label="Feed message" aria-required placeholder="Post something here">Text\nText\nText\nText\nText\nText\nText\nText\nText\nText\nText\nText\nText\nText\nText\nText\nText\nText\nText\nText</textarea>
        <button class="fd-button sap-icon--feeder-arrow fd-feed-input__submit-button" aria-label="Send" title="Send" aria-disabled="false"></button>
    </div>
`;

overMaxHeight.storyName = 'Max height';
overMaxHeight.parameters = {
    docs: {
        iframeHeight: 420,
        storyDescription: 'The maximum feed input displays a text field with the maximum amount of text lines it can contain. Once the text field has reached the maximum height, a scrollbar appears to access the overflowing text.'
    }
};

export const rtl = () => `
<div dir="rtl">
    <div class="fd-feed-input" role="region" aria-label="Feed input with RTL support">
        <div class="fd-feed-input__thumb" style="background-image: url(http://lorempixel.com/460/620/people/7/)" role="img" title="Thumbnail"></div>
        <textarea class="fd-textarea fd-feed-input__textarea" id="textarea-5" rows="1" aria-label="Feed" aria-required placeholder="Post something here">POst message here</textarea>
        <button class="fd-button sap-icon--feeder-arrow fd-feed-input__submit-button" aria-label="Send" title="Send" aria-disabled="false"></button>
    </div>
</div>
`;

rtl.storyName = 'RTL';
rtl.parameters = {
    docs: {
        iframeHeight: 150,
        storyDescription: 'The right-to-left feed input displays input with text and an active submit button, however it is positioned on the right side of the screen.'
    }
};
