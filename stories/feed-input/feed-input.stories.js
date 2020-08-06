import '../../dist/button.css';
import '../../dist/textarea.css';
import '../../dist/avatar.css';
import '../../dist/feed-input.css';

export default {
    title: 'Components/Feed Input',
    parameters: {
        description: 'The feed input component is specifically designed for the users to type their own notes or comments and post them to a corresponding feed.',
        tags: ['f3', 'a11y', 'theme']
    }
};

export const standard = () => `
    <div class="fd-feed-input" 
         role="region" 
         aria-label="Feed input empty example">
        <div class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-input__thumb" 
             style="background-image: url(http://lorempixel.com/460/620/people/7/)" 
             role="img" 
             aria-label="John Doe"
             title="John Doe"></div>
        <textarea class="fd-textarea fd-feed-input__textarea"  
                  placeholder="Post something here" 
                  aria-label="Feed message" 
                  aria-required
                  rows="1"></textarea>
        <button class="fd-button sap-icon--feeder-arrow fd-feed-input__submit-button" 
                aria-label="Send"  
                aria-disabled="true" 
                disabled
                title="Send"></button>
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
    <div class="fd-feed-input" 
         role="region" 
         aria-label="Feed input with one row text">
        <div class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-input__thumb" 
             style="background-image: url(http://lorempixel.com/460/620/people/7/)" 
             role="img" 
             aria-label="John Doe"
             title="John Doe"></div>
        <textarea class="fd-textarea fd-feed-input__textarea" 
                  placeholder="Post something here"
                  aria-label="Feed message" 
                  aria-required 
                  rows="1">"Textarea" with a text makes submit button active</textarea>
        <button class="fd-button sap-icon--feeder-arrow 
                fd-feed-input__submit-button" 
                aria-label="Send"
                aria-disabled="false" 
                title="Send"></button>
    </div>
`;

notEmpty.storyName = 'Input with text';
notEmpty.parameters = {
    docs: {
        iframeHeight: 150,
        storyDescription: 'The input with text displays some text within the field, which activates the submit button.'
    }
};

export const disabled = () => `
    <div class="fd-feed-input" 
         role="region" 
         aria-label="Feed input disabled example">
        <div class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-input__thumb" 
             style="background-image: url(http://lorempixel.com/460/620/people/7/)" 
             role="img" 
             aria-label="John Doe"
             title="John Doe"></div>
        <textarea class="fd-textarea fd-feed-input__textarea"  
                  placeholder="Post something here" 
                  aria-label="Feed message" 
                  aria-required
                  rows="1"
                  aria-disabled="true" 
                  disabled>Disabled</textarea>
        <button class="fd-button sap-icon--feeder-arrow fd-feed-input__submit-button" 
                aria-label="Send"  
                aria-disabled="true" 
                disabled
                title="Send"></button>
    </div>
`;

disabled.storyName = 'Disabled';
disabled.parameters = {
    docs: {
        iframeHeight: 150,
        storyDescription: 'The disabled feed input component displays disabled text field with disabled submit button.'
    }
};

export const withoutUserImage = () => `
    <div class="fd-feed-input" 
         role="region" 
         aria-label="Feed input empty example">
        <textarea class="fd-textarea fd-feed-input__textarea"  
                  placeholder="Post something here" 
                  aria-label="Feed message" 
                  aria-required
                  rows="1">Without user image</textarea>
        <button class="fd-button sap-icon--feeder-arrow fd-feed-input__submit-button" 
                aria-label="Send"  
                title="Send"></button>
    </div>
`;

withoutUserImage.storyName = 'Without user image';
withoutUserImage.parameters = {
    docs: {
        iframeHeight: 150,
        storyDescription: 'You can also choose not to show user images at all. In this case, the size of the input area increases automatically.'
    }
};

export const placeholderImage = () => `
    <div class="fd-feed-input" 
         role="region" 
         aria-label="Feed input empty example">
        <div class="fd-avatar fd-avatar--s fd-avatar--placeholder sap-icon--person-placeholder fd-feed-input__thumb"
             role="img"
             aria-label="John Doe" 
             title="John Doe"></div>
        <textarea class="fd-textarea fd-feed-input__textarea"  
                  placeholder="Post something here" 
                  aria-label="Feed message" 
                  aria-required
                  rows="1">With generic user image</textarea>
        <button class="fd-button sap-icon--feeder-arrow fd-feed-input__submit-button" 
                aria-label="Send"  
                title="Send"></button>
    </div>
`;

placeholderImage.storyName = 'Generic user image';
placeholderImage.parameters = {
    docs: {
        iframeHeight: 150,
        storyDescription: 'It\'s possible to use generic user image.'
    }
};

export const inputGrowth = () => `
    <div class="fd-feed-input" 
         role="region" 
         aria-label="Feed input height growth">
        <div class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-input__thumb" 
             style="background-image: url(http://lorempixel.com/460/620/people/7/)" 
             role="img"
             aria-label="John Doe" 
             title="John Doe"></div>
        <textarea class="fd-textarea fd-feed-input__textarea" 
                  placeholder="Post something here"
                  aria-label="Feed" 
                  aria-required 
                  rows="4">With every line\n"textarea" grows upward\nuntil it reaches\nthe max height</textarea>
        <button class="fd-button sap-icon--feeder-arrow fd-feed-input__submit-button" 
                aria-label="Send"  
                aria-disabled="false"
                title="Send"></button>
    </div>
`;

inputGrowth.storyName = 'Multiline';
inputGrowth.parameters = {
    docs: {
        iframeHeight: 190,
        storyDescription: 'Every new line extends `textarea` height until maximum height is reached. The multiline feed input displays a text field with multiple lines of text. When a new line is added to the field, the `textarea\'s` height extends until the maximum height is reached.'
    }
};

export const overMaxHeight = () => `
    <div class="fd-feed-input" 
         role="region" 
         aria-label="Feed input over max height">
        <div class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-input__thumb" 
             style="background-image: url(http://lorempixel.com/460/620/people/7/)" 
             role="img" 
             aria-label="John Doe"
             title="John Doe"></div>
        <textarea class="fd-textarea fd-feed-input__textarea"
                  placeholder="Post something here" 
                  aria-label="Feed message" 
                  aria-required 
                  rows="18">X\nX\nX\nX\nX\nX\nX\nX\nX\nX\nX\nX\nX\nX\nX\nX\nX\nX\nX\nX</textarea>
        <button class="fd-button sap-icon--feeder-arrow fd-feed-input__submit-button" 
                aria-label="Send" 
                aria-disabled="false" 
                title="Send"></button>
    </div>
`;

overMaxHeight.storyName = 'Max height';
overMaxHeight.parameters = {
    docs: {
        iframeHeight: 420,
        storyDescription: 'The max height feed input displays a text field with the maximum amount of text lines it can contain. Once the text field has reached the maximum height, a scrollbar appears to access the overflowing text.'
    }
};

export const rtl = () => `
    <div dir="rtl">
        <div class="fd-feed-input" 
             role="region" 
             aria-label="Feed input with RTL support">
            <div class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-input__thumb" 
                 style="background-image: url(http://lorempixel.com/460/620/people/7/)" 
                 role="img" 
                 aria-label="John Doe"
                 title="John Doe"></div>
            <textarea class="fd-textarea fd-feed-input__textarea" 
                      placeholder="Post something here" 
                      aria-label="Feed" 
                      aria-required 
                      rows="1">Post message here</textarea>
            <button class="fd-button sap-icon--feeder-arrow fd-feed-input__submit-button" 
                    aria-label="Send" 
                    aria-disabled="false" 
                    title="Send"></button>
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
