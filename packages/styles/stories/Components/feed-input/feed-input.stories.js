import '../../../src/button.scss';
import '../../../src/textarea.scss';
import '../../../src/avatar.scss';
import '../../../src/feed-input.scss';
import '../../../src/button.scss';
import '../../../src/icon.scss';
export default {
    title: 'Components/Feed Input',
    parameters: {
        description: `The feed input is specifically designed for users to type their own notes or comments and post them to a corresponding feed.

##Usage
**Use the feed input if:**

- A user needs to input small amounts of text without formatting.
- You expect multiple instances, such as notes or feed entries.

**Do not use the feed input if:**

- The user needs to format the text (rich text editor).
- You need only a single text box instance. In this case, use the **Textarea** component (for multiple lines) or the text control (for a single line).

`,
        tags: ['f3', 'a11y', 'theme']
    }
};

export const Standard = () => `<div class="fd-feed-input"
         role="region"
         aria-label="Feed input empty example">
        <div class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-input__thumb"
             style="background-image: url('assets/images/avatars/4.svg')"
             role="img"
             aria-label="John Doe"
             title="John Doe"></div>
        <textarea class="fd-textarea fd-feed-input__textarea"
                  placeholder="Post something here"
                  aria-label="Feed message"
                  required
                  rows="1"></textarea>
        <button class="fd-button fd-feed-input__submit-button"
                aria-label="Send"
                aria-disabled="true"
                disabled
                title="Send">
            <i role="presentation" class="sap-icon--feeder-arrow"></i>
        </button>
    </div>
`;

Standard.storyName = 'Default';
Standard.parameters = {
    docs: {
        iframeHeight: 150,
        description: {
            story: 'The default feed input displays an empty text field with an inactive submit button.'
        }
    }
};

export const NotEmpty = () => `    <div class="fd-feed-input"
         role="region"
         aria-label="Feed input with one row text">
        <div class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-input__thumb"
             style="background-image: url('assets/images/avatars/4.svg')"
             role="img"
             aria-label="John Doe"
             title="John Doe"></div>
        <textarea class="fd-textarea fd-feed-input__textarea"
                  placeholder="Post something here"
                  aria-label="Feed message"
                  required
                  rows="1">"When there is text, the submit button becomes active.</textarea>
        <button class="fd-button
                fd-feed-input__submit-button"
                aria-label="Send"
                aria-disabled="false"
                title="Send">
            <i role="presentation" class="sap-icon--feeder-arrow"></i>
        </button>
    </div>
`;

NotEmpty.storyName = 'With text';
NotEmpty.parameters = {
    docs: {
        iframeHeight: 150,
        description: {
            story: 'The input with text displays some text, activating the submit button.'
        }
    }
};

export const Disabled = () => `    <div class="fd-feed-input is-disabled"
         role="region"
         aria-label="Feed input disabled example">
        <div class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-input__thumb"
             style="background-image: url('assets/images/avatars/4.svg')"
             role="img"
             aria-label="John Doe"
             title="John Doe"></div>
        <textarea class="fd-textarea fd-feed-input__textarea"
                  placeholder="Post something here"
                  aria-label="Feed message"
                  required
                  rows="1"
                  aria-disabled="true"
                  disabled>Disabled</textarea>
        <button class="fd-button fd-feed-input__submit-button"
                aria-label="Send"
                aria-disabled="true"
                disabled
                title="Send">
            <i role="presentation" class="sap-icon--feeder-arrow"></i>
        </button>
    </div>
`;

Disabled.parameters = {
    docs: {
        iframeHeight: 150,
        description: {
            story: 'The disabled feed input displays a text field and submit button that users cannot interact with.'
        }
    }
};

export const WithoutUserImage = () => `    <div class="fd-feed-input"
         role="region"
         aria-label="Feed input empty example">
        <textarea class="fd-textarea fd-feed-input__textarea"
                  placeholder="Post something here"
                  aria-label="Feed message"
                  required
                  rows="1">Without user image</textarea>
        <button class="fd-button fd-feed-input__submit-button"
                aria-label="Send"
                title="Send">
            <i role="presentation" class="sap-icon--feeder-arrow"></i>
        </button>
    </div>
`;

WithoutUserImage.storyName = 'No thumbnail';
WithoutUserImage.parameters = {
    docs: {
        iframeHeight: 150,
        description: {
            story: 'Although the default feed input has a thumbnail, it is possible to remove it. Without a thumbnail, the input area size increases automatically.'
        }
    }
};

export const PlaceholderImage = () => `    <div class="fd-feed-input"
         role="region"
         aria-label="Feed input empty example">
        <div class="fd-avatar fd-avatar--s fd-avatar--placeholder sap-icon--person-placeholder fd-feed-input__thumb"
             role="img"
             aria-label="John Doe"
             title="John Doe"></div>
        <textarea class="fd-textarea fd-feed-input__textarea"
                  placeholder="Post something here"
                  aria-label="Feed message"
                  required
                  rows="1">With generic user image</textarea>
        <button class="fd-button fd-feed-input__submit-button"
                aria-label="Send"
                title="Send">
            <i role="presentation" class="sap-icon--feeder-arrow"></i>
        </button>
    </div>
`;

PlaceholderImage.storyName = 'Generic thumbnail';
PlaceholderImage.parameters = {
    docs: {
        iframeHeight: 150,
        description: {
            story: 'A generic thumbnail will be displayed if no image has been chosen by the user.'
        }
    }
};

export const InputGrowth = () => `    <div class="fd-feed-input"
         role="region"
         aria-label="Feed input height growth">
        <div class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-input__thumb"
             style="background-image: url('assets/images/avatars/4.svg')"
             role="img"
             aria-label="John Doe"
             title="John Doe"></div>
        <textarea class="fd-textarea fd-feed-input__textarea"
                  placeholder="Post something here"
                  aria-label="Feed"
                  required
                  rows="4">With every line\n"textarea" grows upward\nuntil it reaches\nthe max height</textarea>
        <button class="fd-button fd-feed-input__submit-button"
                aria-label="Send"
                aria-disabled="false"
                title="Send">
            <i role="presentation" class="sap-icon--feeder-arrow"></i>
        </button>
    </div>
`;

InputGrowth.storyName = 'Multiline';
InputGrowth.parameters = {
    docs: {
        iframeHeight: 190,
        description: {
            story: 'The multiline feed input displays a text field with multiple lines of text, which expands until a maximum height is reached.'
        }
    }
};

export const OverMaxHeight = () => `    <div class="fd-feed-input"
         role="region"
         aria-label="Feed input over max height">
        <div class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-input__thumb"
             style="background-image: url('assets/images/avatars/4.svg')"
             role="img"
             aria-label="John Doe"
             title="John Doe"></div>
        <textarea class="fd-textarea fd-feed-input__textarea"
                  placeholder="Post something here"
                  aria-label="Feed message"
                  required
                  rows="18">X\nX\nX\nX\nX\nX\nX\nX\nX\nX\nX\nX\nX\nX\nX\nX\nX\nX\nX\nX</textarea>
        <button class="fd-button fd-feed-input__submit-button"
                aria-label="Send"
                aria-disabled="false"
                title="Send">
            <i role="presentation" class="sap-icon--feeder-arrow"></i>
        </button>
    </div>
`;

OverMaxHeight.storyName = 'Max height';
OverMaxHeight.parameters = {
    docs: {
        iframeHeight: 420,
        description: {
            story: 'The max height feed input displays a text field with the maximum amount of text lines it can contain. Once the text field has reached the maximum height, a scrollbar appears to access the overflowing text.'
        }
    }
};
