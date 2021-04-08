export default {
    title: 'Components/Vertical Navigation',
    parameters: {
        description: `
The vertical navigation area can be used to display navigation structures with up to two levels and contains links that change the content area.
        `,

        tags: ['f3', 'a11y', 'theme'],
        components: ['vertical-nav', 'button', 'icon', 'list']
    }
};

export const cozy = () => `<div class="fd-vertical-nav">
    <nav class="fd-vertical-nav__main-navigation" aria-label="Main Menu">
        <ul class="fd-list" aria-label="Main Menu">
            <li class="fd-list--navigation-item">
                <i class="fd-list--navigation-item__icon sap-icon--bell"></i>
                <span class="fd-list--navigation-item__text">Level 1 Item</span>
                <i class="fd-list--navigation-item__arrow sap-icon--navigation-right-arrow"></i>    
            </li>
        </ul>
    </nav>
</div>
`;

cozy.storyName = 'Default';

cozy.parameters = {
    docs: {
        iframeHeight: 400,
        storyDescription: `
The default vertical navigation is comprised of several navigation list items.
        `
    }
};

export const condensed = () => `<div class="fd-vertical-nav--condensed">
    <nav class="fd-vertical-nav__main-navigation" aria-label="Main Menu">
        <ul class="fd-list" aria-label="Main Menu">
            <li class="fd-list--navigation-item--condensed">
                <i class="fd-list--navigation-item__icon sap-icon--bell"></i>
                <i class="fd-list--navigation-item__arrow sap-icon--navigation-right-arrow"></i>    
            </li>
        </ul>
    </nav>
</div>
`;

condensed.storyName = 'Condensed';

condensed.parameters = {
    docs: {
        iframeHeight: 400,
        storyDescription: `
The condensed vertical navigation.
        `
    }
};
