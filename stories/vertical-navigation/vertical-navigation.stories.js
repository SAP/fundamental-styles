export default {
    title: 'Components/Vertical Navigation',
    parameters: {
        description: `
The side navigation area can be used to display navigation structures with up to two levels. It contains links that change the content area. The side navigation area has three visual states: off-canvas, medium and large. Depending on the device context, two of these states are used per device.

##Usage      
**Use the vertical navigation if:**

- You need to display global navigation structures of up to two levels.
- Your scenarios are in the tooling or administration space.
- If you want the entries to change as though they are dynamic content.

**Do not use the vertical navigation if:**

- Your scenarios are not in the tooling or administration space.

##States
Side navigation can be viewed in three different states:

- **Expanded:** everything is shown; icons and/or text.
- **Condensed:** only icons are shown; text-only condensed state is not supported.
- **Off-canvas:** side navigation is completely off-screen, and can be triggered via the menu icon in the shellbar.

**Note:** It is recommend to use only two states per device.
        `,

        tags: ['f3', 'a11y', 'theme'],
        components: ['vertical-nav', 'button', 'icon', 'list', 'popover']
    }
};

export const cozy = () => `<div class="fd-vertical-nav">
    <nav class="fd-vertical-nav__main-navigation" aria-label="Main Menu">
        <ul class="fd-list" aria-label="Main Menu List">
            <li class="fd-list__navigation-item">
                <i class="fd-list__navigation-item-icon sap-icon--home"></i>
                <span class="fd-list__navigation-item-text">Overview</span>
            </li>
            <li class="fd-list__navigation-item is-expanded" onclick="toggleVerticalNavSubmenu(event)">
                <i class="fd-list__navigation-item-icon sap-icon--calendar"></i>
                <span class="fd-list__navigation-item-text">Calendar</span>
                <i class="fd-list__navigation-item-arrow sap-icon--navigation-down-arrow is-expanded"></i>
                <ul class="fd-list">
                    <li class="fd-list__navigation-item fd-list__navigation-item--second">
                        <span class="fd-list__navigation-item-text">Second level item 1</span>
                    </li>
                    <li class="fd-list__navigation-item fd-list__navigation-item--second">
                        <span class="fd-list__navigation-item-text">Second level item 2</span>
                    </li>
                </ul>
            </li>
            <li class="fd-list__navigation-item is-expanded" onclick="toggleVerticalNavSubmenu(event)">
                <i class="fd-list__navigation-item-icon sap-icon--customer"></i>
                <span class="fd-list__navigation-item-text">Customers</span>
                <i class="fd-list__navigation-item-arrow sap-icon--navigation-down-arrow is-expanded"></i>
                <ul class="fd-list">
                    <li class="fd-list__navigation-item fd-list__navigation-item--second">
                        <span class="fd-list__navigation-item-text">Second level item 1</span>
                    </li>
                    <li class="fd-list__navigation-item fd-list__navigation-item--second">
                        <span class="fd-list__navigation-item-text">Second level item 2</span>
                    </li>
                </ul>
            </li>
            <li class="fd-list__navigation-item">
                <i class="fd-list__navigation-item-icon sap-icon--shipping-status"></i>
                <span class="fd-list__navigation-item-text">Deliveries</span>
            </li>
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
        <ul class="fd-list" aria-label="Main Menu List">
            <li class="fd-list__navigation-item--condensed">
                <i class="fd-list__navigation-item-icon sap-icon--home"></i>
                <span class="fd-list__navigation-item-text">Overview</span>
            </li>
            <li class="fd-list__navigation-item--condensed">
                <i class="fd-list__navigation-item-icon sap-icon--calendar"></i>
                <span class="fd-list__navigation-item-text">Calendar</span>
            </li>
            <li class="fd-list__navigation-item--condensed">
                <i class="fd-list__navigation-item-icon sap-icon--customer"></i>
                <span class="fd-list__navigation-item-text">Customers</span>
            </li>
            <li class="fd-list__navigation-item--condensed">
                <i class="fd-list__navigation-item-icon sap-icon--shipping-status"></i>
                <span class="fd-list__navigation-item-text">Deliveries</span>
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
In condensed mode, only icons are shown unless some navigation items have second levels and the second level is expanded.
        `
    }
};

export const text = () => `<div class="fd-vertical-nav">
    <nav class="fd-vertical-nav__main-navigation" aria-label="Main Menu">
        <ul class="fd-list" aria-label="Main Menu List">
            <li class="fd-list__navigation-item">
                <span class="fd-list__navigation-item-text">Overview</span>
            </li>
            <li class="fd-list__navigation-item is-expanded" onclick="toggleVerticalNavSubmenu(event)">
                <span class="fd-list__navigation-item-text">Calendar</span>
                <i class="fd-list__navigation-item-arrow sap-icon--navigation-down-arrow is-expanded"></i>
                <ul class="fd-list">
                    <li class="fd-list__navigation-item fd-list__navigation-item--second">
                        <span class="fd-list__navigation-item-text">Second level item 1</span>
                    </li>
                    <li class="fd-list__navigation-item fd-list__navigation-item--second">
                        <span class="fd-list__navigation-item-text">Second level item 2</span>
                    </li>
                </ul>
            </li>
            <li class="fd-list__navigation-item is-expanded" onclick="toggleVerticalNavSubmenu(event)">
                <span class="fd-list__navigation-item-text">Customers</span>
                <i class="fd-list__navigation-item-arrow sap-icon--navigation-down-arrow is-expanded"></i>
                <ul class="fd-list">
                    <li class="fd-list__navigation-item fd-list__navigation-item--second">
                        <span class="fd-list__navigation-item-text">Second level item 1</span>
                    </li>
                    <li class="fd-list__navigation-item fd-list__navigation-item--second">
                        <span class="fd-list__navigation-item-text">Second level item 2</span>
                    </li>
                </ul>
            </li>
            <li class="fd-list__navigation-item">
                <span class="fd-list__navigation-item-text">Deliveries</span>
            </li>
        </ul>
    </nav>
</div>
`;

text.storyName = 'Text Only';

text.parameters = {
    docs: {
        iframeHeight: 700,
        storyDescription: `
A vertical navigation list does not need to have icons. However this is only available in expanded mode.
        `
    }
};

export const indication = () => `<div class="fd-vertical-nav">
    <nav class="fd-vertical-nav__main-navigation" aria-label="Main Menu">
        <ul class="fd-list" aria-label="Main Menu List">
            <li class="fd-list__navigation-item">
                <i class="fd-list__navigation-item-icon sap-icon--home"></i>
                <span class="fd-list__navigation-item-text">Overview</span>
            </li>
            <li class="fd-list__navigation-item is-expanded" onclick="toggleVerticalNavSubmenu(event)">
                <i class="fd-list__navigation-item-icon sap-icon--calendar"></i>
                <span class="fd-list__navigation-item-text">Calendar</span>
                <i class="fd-list__navigation-item-arrow sap-icon--navigation-down-arrow is-expanded"></i>
                <ul class="fd-list">
                    <li class="fd-list__navigation-item fd-list__navigation-item--second fd-list__navigation-item--indicated">
                        <span class="fd-list__navigation-item-text">Second level item 1</span>
                        <span class="fd-list__navigation-item-indicator"></span>
                    </li>
                    <li class="fd-list__navigation-item fd-list__navigation-item--second">
                        <span class="fd-list__navigation-item-text">Second level item 2</span>
                    </li>
                </ul>
                <span class="fd-list__navigation-item-indicator"></span>
            </li>
        </ul>
    </nav>
</div>
<br/><br/>
<div class="fd-vertical-nav fd-vertical-nav--condensed">
    <nav class="fd-vertical-nav__main-navigation" aria-label="Main Menu">
        <ul class="fd-list" aria-label="Main Menu List">
            <li class="fd-list__navigation-item--condensed">
                <i class="fd-list__navigation-item-icon sap-icon--home"></i>
                <span class="fd-list__navigation-item-text">Overview</span>
            </li>
            <li class="fd-list__navigation-item--condensed" onclick="toggleCondensedVerticalNavSubmenu(event, 'parent')">
                <i class="fd-list__navigation-item-icon sap-icon--calendar"></i>
                <i class="fd-list__navigation-item-arrow sap-icon--navigation-down-arrow"></i>    
                <span class="fd-list__navigation-item-indicator"></span>
                <div class="fd-popover__body fd-popover__body--left fd-popover__body--no-arrow fd-list__navigation-item-popover--first" aria-hidden="false" id="popoverA1">
                    <ul class="fd-list">
                        <li class="fd-list__navigation-item--condensed" onclick="toggleCondensedVerticalNavSubmenu(event, 'child')">
                            <i class="fd-list__navigation-item-icon sap-icon--calendar"></i>
                            <span class="fd-list__navigation-item-text">Calendar</span>
                        </li>
                    </ul>
                </div>
                <div class="fd-popover__body fd-popover__body--left fd-popover__body--no-arrow fd-list__navigation-item-popover--second" aria-hidden="false" id="popoverA1">
                    <ul class="fd-list">
                        <li class="fd-list__navigation-item--condensed fd-list__navigation-item--second fd-list__navigation-item--indicated">
                            <span class="fd-list__navigation-item-text">Second level item 1</span>
                            <span class="fd-list__navigation-item-indicator"></span>
                        </li>
                        <li class="fd-list__navigation-item--condensed fd-list__navigation-item--second">
                            <span class="fd-list__navigation-item-text">Second level item 2</span>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="fd-list__navigation-item--condensed">
                <i class="fd-list__navigation-item-icon sap-icon--customer"></i>
                <span class="fd-list__navigation-item-text">Customers</span>
            </li>
            <li class="fd-list__navigation-item--condensed">
                <i class="fd-list__navigation-item-icon sap-icon--shipping-status"></i>
                <span class="fd-list__navigation-item-text">Deliveries</span>
            </li>
        </ul>
    </nav>
</div>
`;

indication.storyName = 'Navigation Indication';

indication.parameters = {
    docs: {
        iframeHeight: 700,
        storyDescription: `
All the possible combinations of navigation indication are visualized below. When a second level item has been navigated to and the second list has been collapsed, the indicator is shown on the right of the corresponding first level item, but the text and icon color do not change.
        `
    }
};
