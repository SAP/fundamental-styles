export default {
    title: 'Components/Counter',
    parameters: {
        description: 'Counter can be used as a standalone component or linked to another component. The counter of an item quickly shows how many detail elements are related, without having to navigate to the detail page.',
        tags: ['development'],
        components: ['counter', 'tabs', 'button']
    }
};


export const primary = () => `
<span class="fd-counter" aria-label="Unread count">5</span>
<span class="fd-counter" aria-label="Unread count">25</span>
<span class="fd-counter" aria-label="Unread count">101</span>
<span class="fd-counter" aria-label="Unread count">999+</span>
`;

primary.storyName = 'Standalone';
primary.parameters = {
    docs: {
        storyDescription: 'Counter used as a standlone component'
    }
};

export const paragraph = () => `<p>Lorem ipsum <span class="fd-counter" aria-label="Unread count">5</span> </p>
`;
paragraph.storyName = 'Text';
paragraph.parameters = {
    docs: {
        storyDescription: 'Counter inserted in paragraph'
    }
};

export const tabs = () => `<ul class="fd-tabs" role="tablist">
    <li class="fd-tabs__item" role="tab">
        <a class="fd-tabs__link" href="#AvcVC566">Link
        <span class="fd-counter" aria-label="Unread count">25</span></a>
    </li>
    <li class="fd-tabs__item" role="tab" aria-selected="true">
        <a class="fd-tabs__link" href="#5mxO9110">
            <span class="fd-tabs__tag">Selected</span>
        </a>
    </li>
    <li class="fd-tabs__item" role="tab">
        <a class="fd-tabs__link" href="#r0pk3445">Link</a>
    </li>
    <li class="fd-tabs__item" role="tab" aria-disabled="true">
        <a class="fd-tabs__link">Disabled</a>
    </li>
</ul>
`;

tabs.storyName = 'Tabs';
tabs.parameters = {
    docs: {
        storyDescription: 'Counter added to a tab'
    }
};

export const notifier = () => `
<button class="fd-button fd-button--transparent" aria-label="Notifications">
    <i class="sap-icon--bell"></i>
    <span class="fd-counter fd-counter--notification" aria-label="Unread count">1</span>
</button>

<button class="fd-button fd-button--transparent" aria-label="Notifications">
    <i class="sap-icon--bell"></i>
    <span class="fd-counter fd-counter--notification" aria-label="Unread count">20</span>
</button>

<button class="fd-button fd-button--transparent" aria-label="Notifications">
    <i class="sap-icon--bell"></i>
    <span class="fd-counter fd-counter--notification" aria-label="Unread count">300</span>
</button>

<button class="fd-button fd-button--transparent" aria-label="Notifications">
    <i class="sap-icon--bell"></i>
    <span class="fd-counter fd-counter--notification" aria-label="Unread count">999+</span>
</button>
`;

notifier.storyName = 'Notification';
notifier.parameters = {
    docs: {
        storyDescription: 'Counter with `--notification` modifier'
    }
};
