import '../../../src/message-page.scss';
import '../../../src/icon.scss';
import '../../../src/button.scss';
import '../../../src/link.scss';
export default {
    title: 'Components/Message Page',
    parameters: {
        description: `Message page displays a message to the user when an app or list is empty or if an error has occurred. The text and icon on the message page changes depending on the use case, however, the layout stays the same. It is responsive and adjusts to fit the available screen space.

**The message page can be used in the following situations:**

- Filter with no results
- Search with no results
- Empty app
- Too many items
- Item saved as a tile that is no longer available
- Error

##Guidelines
- The icon is mandatory and can vary depending on the message. The default icon is \`.sap-icon--documents\`.
- The title is also mandatory. Add a description with further details if needed.
- The message should be as concise as possible.
        `,
        tags: ['f3', 'a11y', 'theme', 'development']
    }
};

const messageBoxHeight = 800;

export const Filter = () => `<div style="height: 600px; width: 100%;">
    <div class="fd-message-page">
        <div class="fd-message-page__container">
            <div class="fd-message-page__icon-container">
                <i role="presentation" class="sap-icon--filter fd-message-page__icon"></i>
            </div>
            <div role="status" aria-live="polite" class="fd-message-page__content">
                <div class="fd-message-page__title">
                    No matching items found.
                </div>
                <div class="fd-message-page__subtitle">
                    Check the filter settings.
                </div>
            </div>
        </div>
    </div>
</div>
`;

Filter.parameters = {
    docs: {
        iframeHeight: messageBoxHeight,
        description: {
            story: `The filter message page is displayed when the user has set a filter and there are no results. This message then prompts the user to remove or re-evaluate the filter they set for the page. It is mandatory to use the \`.sap-icon--filter\`  icon.
    `
        }
    }
};

export const Search = () => `<div style="height: 600px; width: 100%;">
    <div class="fd-message-page">
        <div class="fd-message-page__container">
            <div class="fd-message-page__icon-container">
                <i role="presentation" class="sap-icon--search fd-message-page__icon"></i>
            </div>
            <div role="status" aria-live="polite" class="fd-message-page__content">
                <div class="fd-message-page__title">
                    No matching items found.
                </div>
            </div>
        </div>
    </div>
</div>
`;

Search.parameters = {
    docs: {
        iframeHeight: messageBoxHeight,
        description: {
            story: `The search message page is displayed when a user has searched for something, but there are no results for that inquiry. It is mandatory to use the \`.sap-icon--search\` icon.
    `
        }
    }
};

export const NoItems = () => `<div style="height: 600px; width: 100%;">
    <div class="fd-message-page">
        <div class="fd-message-page__container">
            <div class="fd-message-page__icon-container">
                <i role="presentation" class="sap-icon--product fd-message-page__icon"></i>
            </div>
            <div role="status" aria-live="polite" class="fd-message-page__content">
                <div class="fd-message-page__title">
                    No items are currently available.
                </div>
            </div>
        </div>
    </div>
</div>
`;

NoItems.storyName = 'No items';
NoItems.parameters = {
    docs: {
        iframeHeight: messageBoxHeight,
        description: {
            story: `Message page displays a message indicating that there are no items when the user attempts to view a page that is supposed to contain items, but they are either not available or do not exist. It is mandatory to use either the \`.sap-icon--product\` icon, or another icon that matches your use case.
        `
        }
    }
};

export const Error = () => `<div style="height: 600px; width: 100%;">
    <div class="fd-message-page">
        <div class="fd-message-page__container">
            <div class="fd-message-page__icon-container">
                <i role="presentation" class="sap-icon--document fd-message-page__icon"></i>
            </div>
            <div role="status" aria-live="polite" class="fd-message-page__content">
                <div class="fd-message-page__title">
                    Sorry, we can’t find this page.
                </div>
                <div class="fd-message-page__subtitle">
                    <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">Home Page</span></a>
                </div>
            </div>
        </div>
    </div>
</div>
`;

Error.parameters = {
    docs: {
        iframeHeight: messageBoxHeight,
        description: {
            story: `The error message page is displayed when the user attempts to view a page but an error has occurred, resulting in no available content. If you can, provide a link to the app start screen in the error message. It is mandatory to use the \`.sap-icon--document\` icon.
    `
        }
    }
};

export const Buttons = () => `<div style="height: 600px; width: 100%;">
    <div class="fd-message-page">
        <div class="fd-message-page__container">
            <div class="fd-message-page__icon-container">
                <i role="presentation" class="sap-icon--documents fd-message-page__icon"></i>
            </div>
            <div role="status" aria-live="polite" class="fd-message-page__content">
                <div class="fd-message-page__title">
                    Sorry, we can't find the page
                </div>
                <div class="fd-message-page__subtitle">
                    <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.
                    <i>Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</i>
                </div>
                <div class="fd-message-page__actions">
                    <button
                        class="fd-button fd-button--compact fd-button--emphasized"
                        style="margin: 0 0.25rem;">
                        Contact Support
                    </button>
                    <button class="fd-button fd-button--compact">Reload Page</button>
                </div>
                <div class="fd-message-page__more">
                    <button
                        class="fd-button fd-button--compact fd-button--transparent">
                        Show Details
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
`;

Buttons.storyName = 'Formatted text and buttons';
Buttons.parameters = {
    docs: {
        iframeHeight: messageBoxHeight,
        description: {
            story: `The message page with formatted text and buttons is useful for when you want to add formatted text (bold, italic, underline and/or bullet points) and buttons to the action area. It's highly recommended not to add more than two buttons.
    `
        }
    }
};
