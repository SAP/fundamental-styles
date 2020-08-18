import '../../dist/message-page.css';

export default {
    title: 'Components/Message Page',
    parameters: {
        description: `Message page gives feedback to the user when an app or list is empty, or when an error has occurred. The text and icon of the Message Page change depending on the use case, the layout stays the same.
        
The message page can be used in the following situations:

- Filtering with no results
- Searching with no results
- Empty app
- Too many items
- Item saved as a tile that is not longer available
- Error

## Responsiveness
The size of the message page adjusts to fit the available space.

## Guidelines

- The icon in the message page is mandatory. It can vary depending on the message. The default icon is <code class="docs-code">.sap-icon--documents</code>.
- The title is also mandatory. Add a description with further details if needed. 
- The message should be as concise as possible.
        `,
        tags: ['f3', 'a11y', 'theme', 'development']
    }
};

const messageBoxHeight = 800;

export const filter = () => `
<div style="height: 600px; width: 100%;">
    <div class="fd-message-page">
        <div class="fd-message-page__container">
            <div class="fd-message-page__icon-container">
                <span class="sap-icon sap-icon--filter fd-message-page__icon"></span>
            </div>
            <div class="fd-message-page__content">
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

filter.storyName = 'Message Page with Filter';
filter.parameters = {
    docs: {
        iframeHeight: messageBoxHeight,
        storyDescription: `Use case: The user has set a filter and there are no results.

Icon: <code class="docs-code">.sap-icon--filter</code>
    `
    }
};

export const search = () => `
<div style="height: 600px; width: 100%;">
    <div class="fd-message-page">
        <div class="fd-message-page__container">
            <div class="fd-message-page__icon-container">
                <span class="sap-icon sap-icon--search fd-message-page__icon"></span>
            </div>
            <div class="fd-message-page__content">
                <div class="fd-message-page__title">
                    No matching items found.
                </div>
            </div>
        </div>
    </div>
</div>
`;

search.storyName = 'Message Page with Search';
search.parameters = {
    docs: {
        iframeHeight: messageBoxHeight,
        storyDescription: `Use case: The user has searched for something but there are no results.

Icon: <code class="docs-code">.sap-icon--search</code>
    `
    }
};

export const noItems = () => `
<div style="height: 600px; width: 100%;">
    <div class="fd-message-page">
        <div class="fd-message-page__container">
            <div class="fd-message-page__icon-container">
                <span class="sap-icon sap-icon--product fd-message-page__icon"></span>
            </div>
            <div class="fd-message-page__content">
                <div class="fd-message-page__title">
                    No items are currently available.
                </div>
            </div>
        </div>
    </div>
</div>
`;

noItems.storyName = 'Message Page with No Items';
noItems.parameters = {
    docs: {
        iframeHeight: messageBoxHeight,
        storyDescription: `Use case: The app contains no items.

Icon: Show the product icon or an icon that matches your use case.
    `
    }
};

export const error = () => `
<div style="height: 600px; width: 100%;">
    <div class="fd-message-page">
        <div class="fd-message-page__container">
            <div class="fd-message-page__icon-container">
                <span class="sap-icon sap-icon--document fd-message-page__icon"></span>
            </div>
            <div class="fd-message-page__content">
                <div class="fd-message-page__title">
                    Sorry, we can’t find this page.
                </div>
                <div class="fd-message-page__subtitle">
                    <a href="#" class="fd-link" tabindex="0">Home Page</a>
                </div>
            </div>
        </div>
    </div>
</div>
`;

error.storyName = 'Message Page with an Error';
error.parameters = {
    docs: {
        iframeHeight: messageBoxHeight,
        storyDescription: `Use case: The app cannot show any content due to an error.

Icon: <code class="docs-code">.sap-icon--document</code>

Provide a link to the app start screen if you can.
    `
    }
};












export const buttons = () => `
<div style="height: 600px; width: 100%;">
    <div class="fd-message-page">
        <div class="fd-message-page__container">
            <div class="fd-message-page__icon-container">
                <span class="sap-icon sap-icon--documents fd-message-page__icon"></span>
            </div>
            <div class="fd-message-page__content">
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

buttons.storyName = 'Message Page with Formatted Text and Buttons';
buttons.parameters = {
    docs: {
        iframeHeight: messageBoxHeight,
        storyDescription: `The text on the Message Page can be formatted (such as bold, italic, underline, and bullet points), and also buttons can be added in the Actions area. It's recommended to not use more than 2 buttons in the Actions area.
    `
    }
};

