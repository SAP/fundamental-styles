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
            <!--li class="fd-list__navigation-item">
                <i class="fd-list__navigation-item__icon sap-icon--home"></i>
                <span class="fd-list__navigation-item__text">Overview</span>
            </li-->
            <li class="fd-list__navigation-item is-expanded" onclick="toggleVerticalNavSubmenu(event)">
                <i class="fd-list__navigation-item__icon sap-icon--calendar"></i>
                <span class="fd-list__navigation-item__text">Calendar</span>
                <i class="fd-list__navigation-item__arrow sap-icon--navigation-down-arrow is-expanded"></i>
                <ul class="fd-list">
                    <li class="fd-list__navigation-item fd-list__navigation-item--second">
                        <span class="fd-list__navigation-item__text">Second level item 1</span>
                    </li>
                    <li class="fd-list__navigation-item fd-list__navigation-item--second">
                        <span class="fd-list__navigation-item__text">Second level item 2</span>
                    </li>
                </ul>
            </li>
            <li class="fd-list__navigation-item is-expanded" onclick="toggleVerticalNavSubmenu(event)">
                <i class="fd-list__navigation-item__icon sap-icon--customer"></i>
                <span class="fd-list__navigation-item__text">Customers</span>
                <i class="fd-list__navigation-item__arrow sap-icon--navigation-down-arrow is-expanded"></i>
                <ul class="fd-list">
                    <li class="fd-list__navigation-item fd-list__navigation-item--second">
                        <span class="fd-list__navigation-item__text">Second level item 1</span>
                    </li>
                    <li class="fd-list__navigation-item fd-list__navigation-item--second">
                        <span class="fd-list__navigation-item__text">Second level item 2</span>
                    </li>
                </ul>
            </li>
            <!--li class="fd-list__navigation-item">
                <i class="fd-list__navigation-item__icon sap-icon--shipping-status"></i>
                <span class="fd-list__navigation-item__text">Deliveries</span>
            </li-->
        </ul>
    </nav>
</div>
`;

cozy.storyName = 'Default';

cozy.parameters = {
    docs: {
        iframeHeight: 700,
        storyDescription: `
The default vertical navigation is comprised of several navigation list items.
        `
    }
};

export const condensed = () => `<div class="fd-vertical-nav fd-vertical-nav--condensed">
    <nav class="fd-vertical-nav__main-navigation" aria-label="Main Menu">
        <ul class="fd-list" aria-label="Main Menu">
            <li class="fd-list__navigation-item--condensed">
                <i class="fd-list__navigation-item__icon sap-icon--home"></i>
                <span class="fd-list__navigation-item__text">Overview</span>
            </li>
            <li class="fd-list__navigation-item--condensed">
                <i class="fd-list__navigation-item__icon sap-icon--calendar"></i>
                <span class="fd-list__navigation-item__text">Calendar</span>
                <i class="fd-list__navigation-item__arrow sap-icon--navigation-down-arrow is-expanded"></i>    
            </li>
            <li class="fd-list__navigation-item--condensed">
                <i class="fd-list__navigation-item__icon sap-icon--customer"></i>
                <span class="fd-list__navigation-item__text">Customers</span>
                <i class="fd-list__navigation-item__arrow sap-icon--navigation-down-arrow is-expanded"></i>    
            </li>
            <li class="fd-list__navigation-item--condensed">
                <i class="fd-list__navigation-item__icon sap-icon--shipping-status"></i>
                <span class="fd-list__navigation-item__text">Deliveries</span>
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
