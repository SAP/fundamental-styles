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

export const empty = () => `
    <div class="fd-feed-input">
        <img class="fd-feed-input__thumb" src="https://placeimg.com/300/300/people" alt="Thumbnail" role="presentation" />
        <textarea class="fd-textarea fd-feed-input__textarea" id="textarea-1" rows="1" placeholder="Post something here"></textarea>
        <button class="fd-button sap-icon--navigation-right-arrow fd-feed-input__submit-button" aria-label="Submit" aria-disabled="true" disabled></button>
    </div>
`;

empty.storyName = 'Empty';
empty.parameters = {
    docs: {
        storyDescription: 'Example with an empty text field'
    }
};


export const notEmpty = () => `
    <div class="fd-feed-input">
        <img class="fd-feed-input__thumb" src="https://placeimg.com/300/300/people" alt="Thumbnail" role="presentation" />
        <textarea class="fd-textarea fd-feed-input__textarea" id="textarea-2" rows="1" placeholder="Post something here">Textarea with a text makes submit button active</textarea>
        <button class="fd-button sap-icon--navigation-right-arrow fd-feed-input__submit-button" aria-label="Submit" aria-disavled="false"></button>
    </div>
`;

notEmpty.storyName = 'With some text';
notEmpty.parameters = {
    docs: {
        storyDescription: 'Example with a one row text'
    }
};

export const inputGrowth = () => `
    <div class="fd-feed-input">
        <img class="fd-feed-input__thumb" src="https://placeimg.com/300/300/people" alt="Thumbnail" role="presentation" />
        <textarea class="fd-textarea fd-feed-input__textarea" id="textarea-3" rows="3" placeholder="Post something here">With every line\ntextarea growths up\nuntil it reaches the max height</textarea>
        <button class="fd-button sap-icon--navigation-right-arrow fd-feed-input__submit-button" aria-label="Submit" aria-disavled="false"></button>
    </div>
`;

inputGrowth.storyName = 'Multiple lines';
inputGrowth.parameters = {
    docs: {
        storyDescription: 'Every new line extends textarea height until maximum height is reached'
    }
};

export const overMaxHeight = () => `
    <div class="fd-feed-input">
        <img class="fd-feed-input__thumb" src="https://placeimg.com/300/300/people" alt="Thumbnail" role="presentation" />
        <textarea class="fd-textarea fd-feed-input__textarea" id="textarea-4" rows="18" placeholder="Post something here">Over max height\nOver max height\nOver max height\nOver max height\nOver max height\nOver max height\nOver max height\nOver max height\nOver max height\nOver max height\nOver max height\nOver max height\nOver max height\nOver max height\nOver max height\nOver max height\nOver max height\nOver max height</textarea>
        <button class="fd-button sap-icon--navigation-right-arrow fd-feed-input__submit-button" aria-label="Submit" aria-disavled="false"></button>
    </div>
`;

overMaxHeight.storyName = 'Over max height';
overMaxHeight.parameters = {
    docs: {
        storyDescription: 'Once textarea reaches the maximum height the textarea scroll is shown'
    }
};

export const rtl = () => `
<div dir="rtl">
    <div class="fd-feed-input">
        <img class="fd-feed-input__thumb" src="https://placeimg.com/300/300/people" alt="Thumbnail" role="presentation" />
        <textarea class="fd-textarea fd-feed-input__textarea" id="textarea-5" rows="1" placeholder="Post something here">POst message here</textarea>
        <button class="fd-button sap-icon--navigation-left-arrow fd-feed-input__submit-button" aria-label="Submit" aria-disavled="false"></button>
    </div>
</div>
`;

rtl.storyName = 'RTL example';
rtl.parameters = {
    docs: {
        storyDescription: 'Right-to-left example'
    }
};
