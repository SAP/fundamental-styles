export default {
    title: 'Components/Message View',
    parameters: {
        description: `
Message view is used to display messages that are not related to form or table fields. These messages are triggered in response to a user action.

The message view can be embedded within multiple controls, but it's recommended that you use it only within a dialog or popover.

##Usage

**Use message toast if:**

- You want to display multiple messages triggered by an action within a disruptive dialog.
        

**Do not use the message toast if:**

- You want to display messages for form field validation. Instead, use the message popover.
- You want to display a single message that require user interruption. Instead, use the message box.
        `,
        tags: ['f3', 'a11y', 'theme'],
        components: ['message-view', 'icon', 'object-status', 'link', 'list']
    }
};

export const listViewMultipleTypes = () => `
<div style="width: 350px; height: 400px; border: 1px solid black;">
    <div class="fd-message-view">
        <div class="fd-message-view__filtering-area"></div>
        <div class="fd-message-view__list-area">
            <ul class="fd-list fd-list--navigation fd-list--navigation-indication fd-message-view__list" role="list">
                <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link fd-message-view__list-item">
                    <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                        <span class="fd-list__title fd-message-view__title">List item 1</span>
                        <div>1</div>
                    </a>
                </li>
                <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link fd-message-view__list-item">
                    <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator is-selected" href="#">
                        <i role="presentation" class="fd-list__icon sap-icon--history"></i>
                        <span class="fd-list__title fd-message-view__title fd-message-view__title">List item 2</span>
                        <div>1</div>
                    </a>
                </li>
                <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link fd-message-view__list-item fd-message-view__list-item--byline">
                    <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator is-selected" href="#">
                        <i role="presentation" class="fd-list__icon sap-icon--history"></i>
                        <span class="fd-list__title fd-message-view__title fd-message-view__title">List item 2</span>
                        <div>1</div>
                    </a>
                </li>
                <li tabindex="0" role="listitem" class="fd-list__item fd-message-view__list-item">
                    <i role="presentation" class="fd-list__icon sap-icon--history"></i>
                    <span class="fd-list__title fd-message-view__title">List item 3</span>
                </li>
                <li tabindex="0" role="listitem" class="fd-list__item fd-message-view__list-item">
                    <span class="fd-list__title fd-message-view__title">List item 4</span>
                </li>
                <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link fd-message-view__list-item">
                    <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator is-navigated" href="#">
                        <span class="fd-list__title fd-message-view__title">List item 5</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
`;

listViewMultipleTypes.storyName = 'List view with multiple message types';

listViewMultipleTypes.parameters = {
    docs: {
        iframeHeight: 210,
        storyDescription: `If different types of message are available, users can filter messages by type (error, warning, success, and information) using the segmented buttons at the top of the message view.
        `
    }
};

export const listViewOneType = () => `
<div class="fd-message-view">Test</div>
`;

listViewOneType.storyName = 'List view with one message type only';

listViewOneType.parameters = {
    docs: {
        iframeHeight: 210,
        storyDescription: `The filter bar is hidden if there is only one type of message (for example, only errors).
        `
    }
};

export const detailsView = () => `
<div style="width: 350px; height: 400px; border: 1px solid black;">
    <div class="fd-message-view">
        <div class="fd-message-view__title-area">
            <div class="fd-message-view__icon-container">
                <span class="fd-object-status fd-object-status--negative">
                    <i class="fd-object-status__icon sap-icon--sys-cancel" aria-label="Negative"></i>
                </span>
            </div>
            <div class="fd-message-view__title-container">
                <div class="fd-message-view__title">The file could not be uploaded</div>
                <div class="fd-message-view__subtitle">The file type provided is not supported</div>
            </div>
        </div>
        <div class="fd-message-view__content-area">
            <div class="fd-message-view__title">The file could not be uploaded</div>
            <div class="fd-message-view__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <a href="#" class="fd-link fd-link--emphasized" tabindex="0">Emphasized link</a>
        </div>
    </div>
</div>
`;

detailsView.storyName = 'Details View';

detailsView.parameters = {
    docs: {
        iframeHeight: 210,
        storyDescription: `If the backend contains a long text, the user can click the arrow/chevron on the right-hand side to view the full text in the second page of the message view.
        `
    }
};
