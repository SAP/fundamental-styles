import '../../../../src/side-nav.scss';
import '../../../../src/button.scss';
import '../../../../src/icon.scss';
import '../../../../src/_nested-list.scss';
import '../../../../src/popover.scss';
export default {
    title: 'Deprecated/Components/Side Navigation',
    parameters: {
        description: `
## DEPRECATED

This component is deprecated in favor of the vertical navigation component.
The side navigation area can be used to display navigation structures with up to two levels and contains links that change the content area.
The side navigation consists of two container sections: the **main navigation section** (top-aligned) with links used to navigate within the user’s current work context,
and the **utility section** (bottom-aligned) that contains links to additional information. Both of these sections use a nested list to display navigation items.

##Usage
**Use the side navigation if:**

- You need to display global navigation structures of up to two levels.
- Your scenarios are in the tooling or administration space.
- If you want the entries to change as though they are dynamic content.


**Do not use the side navigation if:**

- Your scenarios are not in the tooling or administration space.
- You want the entries to open a new browser window.

##States
Side navigation can be viewed in three different states:

- **Expanded:** everything is shown; icons and/or text.
- **Condensed:** only icons are shown; text-only condensed state is not supported.
- **Off-canvas:** side navigation is completely off-screen, and can be triggered via the menu icon in the shellbar.

**Note:** It is recommend to use only two states per device.

        `,

        tags: ['f3', 'a11y', 'theme']
    }
};

export const Cozy = () => `<div class="fd-side-nav">
    <a class="fd-side-nav__skip-link" href="#content">Skip navigation</a>
    <nav class="fd-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fd-nested-list fd-nested-list--text-only" aria-label="Main Menu">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link">
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link is-selected">
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link">
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link">
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fd-side-nav__utility" aria-label="Utility Menu">
        <ul class="fd-nested-list fd-nested-list--text-only" aria-label="Utility Menu">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link">
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link">
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;

Cozy.storyName = 'Default';

Cozy.parameters = {
    docs: {
        iframeHeight: 400,
        description: {
            story: `
The default side navigation is displayed in cozy mode with one navigation level. Because there is only one level, all further navigation is shown in the content area. The \`fd-nested-list--text-only\` modifier class should be added to the lists in both the main and utility sections.
        `
        }
    }
};

export const CozyIcons = () => `<div class="fd-side-nav">
    <a class="fd-side-nav__skip-link" href="#content">Skip navigation</a>
    <nav class="fd-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fd-nested-list">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--home"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link is-selected" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--calendar"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--employee"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--activities"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fd-side-nav__utility" aria-label="Utility Menu">
        <ul class="fd-nested-list">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--compare"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--chain-link"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;

CozyIcons.storyName = 'Icons';

CozyIcons.parameters = {
    docs: {
        iframeHeight: 400,
        description: {
            story: `
Side navigation can be displayed with icons. In the expanded state, entries can consist of only text or an icon with text. The use or non-use of icons must be consistent for all links on one level. Do not combine entries with and without icons on the same level. To display icons in list items, add the \`fd-nested-list__icon\` class within the list items.
        `
        }
    }
};

export const CozyGrouping = () => `<div class="fd-side-nav">
    <a class="fd-side-nav__skip-link" href="#content">Skip navigation</a>
    <nav class="fd-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fd-nested-list fd-nested-list--text-only">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link is-selected" href="#">
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <div class="fd-nested-list__content has-child">
                    <a class="fd-nested-list__link" href="#">
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </a>
                    <button class="fd-button fd-nested-list__button"
                        aria-controls="EX100L2"
                        aria-haspopup="true"
                        aria-expanded="false"
                        aria-label="Expand submenu"
                        onclick="toggleNestedListSubmenu(event)"
                        >
                        <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                    </button>
                </div>
                <ul class="fd-nested-list level-2" id="EX100L2" aria-hidden="true">
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <span class="fd-nested-list__title">Level 2 Item</span>
                        </a>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <span class="fd-nested-list__title">Level 2 Item</span>
                        </a>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <span class="fd-nested-list__title">Level 2 Item</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fd-side-nav__utility" aria-label="Utility Menu">
        <ul class="fd-nested-list fd-nested-list--text-only" aria-label="Utility Menu">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;

CozyGrouping.storyName = 'Group';

CozyGrouping.parameters = {
    docs: {
        iframeHeight: 400,
        description: {
            story: `
Side navigation can be displayed with group headers that organize the entries, which is ideal for when there is more than one level of hierarchy. When they are grouped, the entries on the first level are just headers and don't trigger navigation themselves.
<br><br>It's recommended to use up to two levels of navigation, however; for more levels of navigation, use the content area. When expanded, the \`is-expanded\` class should also be extended to the content element. To trigger another level, use the \`fd-nested-list__button\` element.
        `
        }
    }
};

export const ComplexCozySideNav = () => `<div class="fd-side-nav">
    <a class="fd-side-nav__skip-link" href="#content">Skip navigation</a>
    <div class="fd-side-nav__group-header" id="EX400H1">
        Group Header 1
    </div>
    <nav class="fd-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fd-nested-list " aria-labelledby="EX400H1">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--home"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--calendar"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <div class="fd-nested-list__content is-selected has-child">
                    <a class="fd-nested-list__link" href="#">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--employee"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </a>
                    <button
                        class="fd-button fd-nested-list__button"
                        aria-controls="EX400L2"
                        aria-haspopup="true"
                        aria-expanded="false"
                        aria-label="Expand submenu"
                        onclick="toggleNestedListSubmenu(event)">
                        <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                    </button>
                </div>
                <ul class="fd-nested-list fd-nested-list--text-only level-2" id="EX400L2" aria-hidden="true">
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <span class="fd-nested-list__title">Level 2 Item</span>
                        </a>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link is-selected" href="#">
                            <span class="fd-nested-list__title">Level 2 Item</span>
                        </a>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <span class="fd-nested-list__title">Level 2 Item</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--activities"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
        <div class="fd-side-nav__group-header" id="EX400H2">
            Group Header 2
        </div>
        <ul class="fd-nested-list" aria-labelledby="EX400H2">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--bar-chart"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fd-side-nav__utility" aria-label="Utility Menu">
        <ul class="fd-nested-list" aria-label="Utility Menu">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--compare"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--chain-link"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;

ComplexCozySideNav.storyName = 'Complex';

ComplexCozySideNav.parameters = {
    docs: {
        iframeHeight: 550,
        description: {
            story: `
Side navigation can display several different features such as icons, group headers, and two levels of navigation.
        `
        }
    }
};

export const ComplexCompactSideNav = () => `<div class="fd-side-nav">
    <a class="fd-side-nav__skip-link" href="#content">Skip navigation</a>
    <div class="fd-side-nav__group-header" id="EX500H1">
        Group Header 1
    </div>
    <nav class="fd-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fd-nested-list fd-nested-list--compact" aria-labelledby="EX500H1">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--home"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link is-selected" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--calendar"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <div class="fd-nested-list__content has-child">
                    <a class="fd-nested-list__link" href="#">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--employee"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </a>
                    <button class="fd-button fd-nested-list__button"
                        aria-controls="EX500L2"
                        aria-haspopup="true"
                        aria-expanded="false"
                        aria-label="Expand submenu"
                        onclick="toggleNestedListSubmenu(event)">
                        <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                    </button>
                </div>
                <ul class="fd-nested-list fd-nested-list--text-only level-2" id="EX500L2" aria-hidden="true">
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <span class="fd-nested-list__title">Level 2 Item</span>
                        </a>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <span class="fd-nested-list__title">Level 2 Item</span>
                        </a>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <span class="fd-nested-list__title">Level 2 Item</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--activities"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
        <div class="fd-side-nav__group-header" id="EX500H2">
                Group Header 2
        </div>
        <ul class="fd-nested-list fd-nested-list--compact" aria-labelledby="EX500H2">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--bar-chart"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fd-side-nav__utility" aria-label="Utility Menu">
        <ul class="fd-nested-list fd-nested-list--compact" aria-label="Utility Menu">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--compare"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--chain-link"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;

ComplexCompactSideNav.storyName = 'Complex (compact)';

ComplexCompactSideNav.parameters = {
    docs: {
        iframeHeight: 550,
        description: {
            story: `
Side navigation can be displayed in compact mode and can also display several features like icons, group headers, and two levels of navigation. Compact mode is best viewed from a large desktop screen. To display a complex side navigation in compact mode, add the \`fd-nested-list--compact\` modifier class to the nested list element.
        `
        }
    }
};

export const CondensedStateCozy = () => `<nav class="fd-side-nav fd-side-nav--condensed">
    <a class="fd-side-nav__skip-link" href="#content">Skip navigation</a>
    <div class="fd-side-nav__main-navigation">
        <ul class="fd-nested-list">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--home"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--calendar"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <div class="fd-nested-list__content is-selected has-child">
                    <button class="fd-nested-list__link" aria-controls="EX500L2" aria-haspopup="true" aria-expanded="false" aria-label="Expand submenu">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--employee"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </button>
                </div>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--activities"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--bar-chart"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </div>
    <div class="fd-side-nav__utility" aria-label="Utility Menu">
        <ul class="fd-nested-list">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--compare"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--chain-link"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </div>
</nav>
`;

CondensedStateCozy.storyName = 'Condensed';

CondensedStateCozy.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `
Side navigation can be displayed in a condensed state, showing only icons that represent the navigation entries. When the user selects an entry from the navigation, a **Popover** is displayed. The default size for the popover body is often longer than the text length. However, the length can be adjusted to match the text length by adding the \`fd-popover__body--dropdown-fill\` class to the \`fd-popover__body\` element.
<br><br>To display a condensed side navigation, add the \`fd-side-nav--condensed\` modifier class to the main element.
        `
        }
    }
};

export const CondensedStateCompact = () => `<nav class="fd-side-nav fd-side-nav--condensed">
    <a class="fd-side-nav__skip-link" href="#content">Skip navigation</a>
    <div class="fd-side-nav__main-navigation">
        <ul class="fd-nested-list fd-nested-list--compact">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--home"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--calendar"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <div class="fd-nested-list__content is-selected has-child">
                    <button class="fd-nested-list__link" aria-controls="EX600L2" aria-haspopup="true" aria-expanded="false" aria-label="Expand submenu">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--employee"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </button>
                </div>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--activities"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--bar-chart"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </div>
    <div class="fd-side-nav__utility">
        <ul class="fd-nested-list fd-nested-list--compact" aria-label="Utility Menu">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--compare"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <i role="presentation" class="fd-nested-list__icon sap-icon--chain-link"></i>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </div>
</nav>
`;

CondensedStateCompact.storyName = 'Condensed (compact)';

CondensedStateCompact.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `
Side navigation can be displayed in a condensed state, showing only icons that represent the navigation entries. Like the previous example, the default size for the popover body is often longer than the text length, and can be adjusted by adding the \`fd-popover__body--dropdown-fill\` class to the \`fd-popover__body\` element.
<br><br>To display a condensed side navigation in compact mode, add the \` fd-side-nav--condensed\` modifier class to the main element and the \`fd-nested-list--compact\` modifier class to the nested list element.
`
        }
    }
};

export const NestedListWithoutIcons = () => `<ul class="fd-nested-list fd-nested-list--text-only">
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link"href="#/">
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link is-selected"href="#/">
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
	    <div class="fd-nested-list__content has-child is-expanded">
			<a class="fd-nested-list__link" href="#" >
				<span class="fd-nested-list__title">Level 1 Item</span>
            </a>
            <button class="fd-button fd-nested-list__button"
                    aria-controls="EX100L25"
                    aria-haspopup="true"
                    aria-expanded="true"
                    aria-label="Expand submenu">
                    <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
            </button>
		</div>
        <ul class="fd-nested-list level-2" id="EX100L25" aria-hidden="false">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link"href="#/">
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
			   <div class="fd-nested-list__content has-child" tabindex="0">
					<a class="fd-nested-list__link" href="#" tabindex="-1">
						<span class="fd-nested-list__title">Level 2 Item</span>
                    </a>
                    <button class="fd-button fd-nested-list__button"
                        aria-controls="EX100L35"
                        aria-haspopup="true"
                        aria-expanded="true"
                        aria-label="Expand submenu">
                        <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                    </button>
				</div>
                <ul class="fd-nested-list level-3" id="EX100L35" aria-hidden="false">
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link"href="#/">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                    </li>
                    <li class="fd-nested-list__item">
					   <div class="fd-nested-list__content has-child" tabindex="0">
							<a class="fd-nested-list__link" href="#" tabindex="-1">
								<span class="fd-nested-list__title">Level 3 Item</span>
							</a>
                            <button class="fd-button fd-nested-list__button"
                                aria-controls="EX100L45"
                                aria-haspopup="true"
                                aria-expanded="true"
                                aria-label="Expand submenu">
                                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                            </button>
						</div>
                        <ul class="fd-nested-list level-4" id="EX100L45" aria-hidden="false">
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link"href="#/">
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
							   <div class="fd-nested-list__content has-child" tabindex="0">
									<a class="fd-nested-list__link" href="#" tabindex="-1">
										<span class="fd-nested-list__title">Level 4 Item</span>
									</a>
                                    <button class="fd-button fd-nested-list__button"
                                        aria-controls="EX100L55"
                                        aria-haspopup="true"
                                        aria-expanded="true"
                                        aria-label="Expand submenu">
                                        <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                                    </button>
								</div>
                                <ul class="fd-nested-list level-5" id="EX100L55" aria-hidden="false">
                                    <li class="fd-nested-list__item">
                                        <a class="fd-nested-list__link"href="#/">
                                            <span class="fd-nested-list__title">Level 5 Item</span>
                                        </a>
                                    </li>
                                    <li class="fd-nested-list__item">
									   <div class="fd-nested-list__content has-child" tabindex="0">
											<a class="fd-nested-list__link" href="#" tabindex="-1">
												<span class="fd-nested-list__title">Level 5 Item</span>
											</a>
                                            <button class="fd-button fd-nested-list__button"
                                                aria-controls="EX100L65"
                                                aria-haspopup="true"
                                                aria-expanded="true"
                                                aria-label="Expand submenu">
                                                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                                            </button>
										</div>
                                        <ul class="fd-nested-list level-6" id="EX100L65" aria-hidden="false">
                                            <li class="fd-nested-list__item">
                                                <a class="fd-nested-list__link"href="#/">
                                                    <span class="fd-nested-list__title">Level 6 Item</span>
                                                </a>
                                            </li>
                                            <li class="fd-nested-list__item">
                                                <a class="fd-nested-list__link"href="#/" >
                                                    <span class="fd-nested-list__title">Level 6 Item</span>
                                                </a>
                                            </li>
                                            <li class="fd-nested-list__item">
                                                <a class="fd-nested-list__link"href="#/">
                                                    <span class="fd-nested-list__title">Level 6 Item</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="fd-nested-list__item">
                                        <a class="fd-nested-list__link"href="#/">
                                            <span class="fd-nested-list__title">Level 5 Item</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link"href="#/">
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link"href="#/">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link"href="#/">
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </a>
            </li>
        </ul>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link"href="#/">
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link"href="#/">
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
</ul>
`;

NestedListWithoutIcons.parameters = {
    docs: {
        disable: true
    }
};

export const NestedListWithIconsOnlyInFirstLevel = () => `<ul class="fd-nested-list">
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link"href="#/">
            <i role="presentation" class="fd-nested-list__icon sap-icon--home"></i>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link is-selected"href="#/">
            <i role="presentation" class="fd-nested-list__icon sap-icon--calendar"></i>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
	   <div class="fd-nested-list__content has-child is-expanded" tabindex="0">
			<a class="fd-nested-list__link" href="#" tabindex="-1">
				<i role="presentation" class="fd-nested-list__icon sap-icon--employee"></i>
				<span class="fd-nested-list__title">Level 1 Item</span>
			</a>
            <button class="fd-button fd-nested-list__button"
                aria-controls="EX300L2"
                aria-haspopup="true"
                aria-expanded="true"
                aria-label="Expand submenu">
                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
            </button>
		</div>
        <ul class="fd-nested-list fd-nested-list--text-only level-2" id="EX300L2" aria-hidden="false">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link"href="#/">
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
			   <div class="fd-nested-list__content has-child" tabindex="0">
					<a class="fd-nested-list__link" href="#" tabindex="-1">
						<span class="fd-nested-list__title">Level 2 Item</span>
					</a>
                    <button class="fd-button fd-nested-list__button"
                        aria-controls="EX300L3"
                        aria-haspopup="true"
                        aria-expanded="true"
                        aria-label="Expand submenu">
                        <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                    </button>
				</div>
                <ul class="fd-nested-list fd-nested-list--text-only level-3" id="EX300L3" aria-hidden="false">
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link"href="#/">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                    </li>
                    <li class="fd-nested-list__item">
					   <div class="fd-nested-list__content has-child" tabindex="0">
							<a class="fd-nested-list__link" href="#" tabindex="-1">
								<span class="fd-nested-list__title">Level 3 Item</span>
							</a>
                            <button class="fd-button fd-nested-list__button"
                                aria-controls="EX300L4"
                                aria-haspopup="true"
                                aria-expanded="true"
                                aria-label="Expand submenu">
                                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                            </button>
						</div>
                        <ul class="fd-nested-list fd-nested-list--text-only level-4" id="EX300L4" aria-hidden="false">
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link"href="#/">
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link"href="#/" >
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link"href="#/">
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link"href="#/">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link"href="#/">
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </a>
            </li>
        </ul>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link"href="#/">
            <i role="presentation" class="fd-nested-list__icon sap-icon--activities"></i>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link"href="#/">
            <i role="presentation" class="fd-nested-list__icon sap-icon--bar-chart"></i>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link"href="#/">
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
</ul>
`;

NestedListWithIconsOnlyInFirstLevel.parameters = {
    docs: {
        disable: true
    }
};

export const NestedListWithGroupHeaders = () => `<ul class="fd-nested-list">
    <li class="fd-nested-list__group-header">
        Group Header 1
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link"href="#/">
            <i role="presentation" class="fd-nested-list__icon sap-icon--home"></i>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link is-selected"href="#/">
            <i role="presentation" class="fd-nested-list__icon sap-icon--calendar"></i>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
	   <div class="fd-nested-list__content has-child" tabindex="0">
			<a class="fd-nested-list__link" href="#" tabindex="-1">
				<i role="presentation" class="fd-nested-list__icon sap-icon--employee"></i>
				<span class="fd-nested-list__title">Level 1 Item</span>
			</a>
            <button class="fd-button fd-nested-list__button"
                aria-controls="EX400L222"
                aria-haspopup="true"
                aria-expanded="true"
                aria-label="Expand submenu">
                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
            </button>
		</div>
        <ul class="fd-nested-list fd-nested-list--text-only level-2" id="EX400L222" aria-hidden="false">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link"href="#/">
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
			   <div class="fd-nested-list__content has-child" tabindex="0">
					<a class="fd-nested-list__link" href="#" tabindex="-1">
						<span class="fd-nested-list__title">Level 2 Item</span>
					</a>
                    <button class="fd-button fd-nested-list__button"
                        aria-controls="EX400L3"
                        aria-haspopup="true"
                        aria-expanded="true"
                        aria-label="Expand submenu">
                        <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                    </button>
				</div>
                <ul class="fd-nested-list fd-nested-list--text-only level-3" id="EX400L3" aria-hidden="false">
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link"href="#/">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                    </li>
                    <li class="fd-nested-list__item">
					   <div class="fd-nested-list__content has-child" tabindex="0">
							<a class="fd-nested-list__link" href="#" tabindex="-1">
								<span class="fd-nested-list__title">Level 3 Item</span>
							</a>
                            <button class="fd-button fd-nested-list__button"
                                aria-controls="EX400L4"
                                aria-haspopup="true"
                                aria-expanded="true"
                                aria-label="Expand submenu">
                                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                            </button>
						</div>
                        <ul class="fd-nested-list fd-nested-list--text-only level-4" id="EX400L4" aria-hidden="false">
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link"href="#/">
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link"href="#/" >
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link"href="#/">
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link"href="#/">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link"href="#/">
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </a>
            </li>
        </ul>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link"href="#/">
            <i role="presentation" class="fd-nested-list__icon sap-icon--activities"></i>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__group-header">
        Group Header 2
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link"href="#/">
            <i role="presentation" class="fd-nested-list__icon sap-icon--bar-chart"></i>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link"href="#/">
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
</ul>
`;

NestedListWithGroupHeaders.parameters = {
    docs: {
        disable: true
    }
};

export const NestedListWithGroupHeadersCompactMode = () => `<ul class="fd-nested-list fd-nested-list--compact">
    <li class="fd-nested-list__group-header">
        Group Header 1
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link"href="#/">
            <i role="presentation" class="fd-nested-list__icon sap-icon--home"></i>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link is-selected"href="#/">
            <i role="presentation" class="fd-nested-list__icon sap-icon--calendar"></i>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
	   <div class="fd-nested-list__content has-child" tabindex="0">
			<a class="fd-nested-list__link" href="#" tabindex="-1">
            	<i role="presentation" class="fd-nested-list__icon sap-icon--employee"></i>
				<span class="fd-nested-list__title">Level 1 Item</span>
			</a>
            <button class="fd-button fd-nested-list__button"
                aria-controls="EX500L2"
                aria-haspopup="true"
                aria-expanded="true"
                aria-label="Expand submenu">
                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
            </button>
		</div>
        <ul class="fd-nested-list fd-nested-list--text-only level-2" id="EX500L2" aria-hidden="false">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link"href="#/">
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
			   <div class="fd-nested-list__content has-child" tabindex="0">
					<a class="fd-nested-list__link" href="#" tabindex="-1">
						<span class="fd-nested-list__title">Level 2 Item</span>
					</a>
                    <button class="fd-button fd-nested-list__button"
                        aria-controls="EX500L3"
                        aria-haspopup="true"
                        aria-expanded="true"
                        aria-label="Expand submenu">
                        <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                    </button>
				</div>
                <ul class="fd-nested-list fd-nested-list--text-only level-3" id="EX500L3" aria-hidden="false">
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link"href="#/">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                    </li>
                    <li class="fd-nested-list__item">
					   <div class="fd-nested-list__content has-child" tabindex="0">
							<a class="fd-nested-list__link" href="#" tabindex="-1">
								<span class="fd-nested-list__title">Level 3 Item</span>
							</a>
                            <button class="fd-button fd-nested-list__button"
                                aria-controls="EX500L4"
                                aria-haspopup="true"
                                aria-expanded="true"
                                aria-label="Expand submenu">
                                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                            </button>
						</div>
                        <ul class="fd-nested-list fd-nested-list--text-only level-4" id="EX500L4" aria-hidden="false">
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link"href="#/">
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link"href="#/" >
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link"href="#/">
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link"href="#/">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link"href="#/">
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </a>
            </li>
        </ul>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link"href="#/">
            <i role="presentation" class="fd-nested-list__icon sap-icon--activities"></i>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__group-header">
        Group Header 2
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link"href="#/">
            <i role="presentation" class="fd-nested-list__icon sap-icon--bar-chart"></i>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
    <li class="fd-nested-list__item">
        <a class="fd-nested-list__link"href="#/">
            <span class="fd-nested-list__title">Level 1 Item</span>
        </a>
    </li>
</ul>
`;

NestedListWithGroupHeadersCompactMode.parameters = {
    docs: {
        disable: true
    }
};

export const NestedListWithoutLinks = () => `<ul class="fd-nested-list fd-nested-list--compact">
    <li class="fd-nested-list__group-header">
        Group Header 1
    </li>
    <li class="fd-nested-list__item">
        <div class="fd-nested-list__content">
            <i role="presentation" class="fd-nested-list__icon sap-icon--home"></i>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </div>
    </li>
    <li class="fd-nested-list__item">
        <div class="fd-nested-list__content is-selected">
            <i role="presentation" class="fd-nested-list__icon sap-icon--calendar"></i>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </div>
    </li>
    <li class="fd-nested-list__item">
	   <div class="fd-nested-list__content has-child" tabindex="0">
            <i role="presentation" class="fd-nested-list__icon sap-icon--employee"></i>
			<span class="fd-nested-list__title">Level 1 Item</span>
            <button class="fd-button fd-nested-list__button"
                aria-controls="EX600L2"
                aria-haspopup="true"
                aria-expanded="true"
                aria-label="Expand submenu">
                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
            </button>
		</div>
        <ul class="fd-nested-list fd-nested-list--text-only level-2" id="EX600L2" aria-hidden="false">
            <li class="fd-nested-list__item">
                <div class="fd-nested-list__content">
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </div>
            </li>
            <li class="fd-nested-list__item">
			   <div class="fd-nested-list__content has-child" tabindex="0">
					<span class="fd-nested-list__title">Level 2 Item</span>
                    <button class="fd-button fd-nested-list__button"
                        aria-controls="EX600L3"
                        aria-haspopup="true"
                        aria-expanded="true"
                        aria-label="Expand submenu">
                        <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                    </button>
				</div>
                <ul class="fd-nested-list fd-nested-list--text-only level-3" id="EX600L3" aria-hidden="false">
                    <li class="fd-nested-list__item">
                        <div class="fd-nested-list__content">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </div>
                    </li>
                    <li class="fd-nested-list__item">
					   <div class="fd-nested-list__content has-child" tabindex="0">
							<span class="fd-nested-list__title">Level 3 Item</span>
                            <button class="fd-button fd-nested-list__button"
                                aria-controls="EX600L4"
                                aria-haspopup="true"
                                aria-expanded="true"
                                aria-label="Expand submenu">
                                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                            </button>
						</div>
                        <ul class="fd-nested-list fd-nested-list--text-only level-4" id="EX600L4" aria-hidden="false">
                            <li class="fd-nested-list__item">
                                <div class="fd-nested-list__content">
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </div>
                            </li>
                            <li class="fd-nested-list__item">
                                <div class="fd-nested-list__content" >
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </div>
                            </li>
                            <li class="fd-nested-list__item">
                                <div class="fd-nested-list__content">
                                    <span class="fd-nested-list__title">Level 4 Item</span>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="fd-nested-list__item">
                        <div class="fd-nested-list__content">
                            <span class="fd-nested-list__title">Level 3 Item</span>
                        </div>
                    </li>
                </ul>
            </li>
            <li class="fd-nested-list__item">
                <div class="fd-nested-list__content">
                    <span class="fd-nested-list__title">Level 2 Item</span>
                </div>
            </li>
        </ul>
    </li>
    <li class="fd-nested-list__item">
        <div class="fd-nested-list__content">
            <i role="presentation" class="fd-nested-list__icon sap-icon--activities"></i>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </div>
    </li>
    <li class="fd-nested-list__group-header">
        Group Header 2
    </li>
    <li class="fd-nested-list__item">
        <div class="fd-nested-list__content">
            <i role="presentation" class="fd-nested-list__icon sap-icon--bar-chart"></i>
            <span class="fd-nested-list__title">Level 1 Item</span>
        </div>
    </li>
    <li class="fd-nested-list__item">
        <div class="fd-nested-list__content">
            <span class="fd-nested-list__title">Level 1 Item</span>
        </div>
    </li>
</ul>
`;

NestedListWithoutLinks.parameters = {
    docs: {
        disable: true
    }
};

export const NestedListPopover = () => `<div class="fddocs-container" style="margin-bottom: 200px;">
    <div class="fd-popover fd-popover--right">
        <div class="fd-popover__control">
            <ul class="fd-nested-list fd-nested-list--compact">
                <li class="fd-nested-list__item">
                    <a class="fd-nested-list__link" href="#/">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--home"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false" id="popoverA11">
            <ul class="fd-nested-list fd-nested-list--popover fd-nested-list--compact">
                <li class="fd-nested-list__group-header">
                    Group Header 1
                </li>
                <li class="fd-nested-list__item">
                    <a class="fd-nested-list__link" href="#/">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--home"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </a>
                </li>
                <li class="fd-nested-list__item">
                    <a class="fd-nested-list__link is-selected" href="#/">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--calendar"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </a>
                </li>
                <li class="fd-nested-list__item">
                    <a class="fd-nested-list__link" href="#/">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--activities"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="fd-popover fd-popover--right">
        <div class="fd-popover__control">
            <ul class="fd-nested-list fd-nested-list--compact">
                <li class="fd-nested-list__item">
                    <a class="fd-nested-list__link" href="#/">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--home"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false" id="popoverA12">
            <ul class="fd-nested-list fd-nested-list--popover fd-nested-list--compact">
                <li class="fd-nested-list__item fd-nested-list__item--popover">
                    <a class="fd-nested-list__link" href="#/">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--home"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </a>
                </li>
                <li class="fd-nested-list__item fd-nested-list__item--popover">
                    <a class="fd-nested-list__link is-selected" href="#/">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--calendar"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </a>
                </li>
                <li class="fd-nested-list__item fd-nested-list__item--popover">
                    <a class="fd-nested-list__link" href="#/">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--activities"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
`;

NestedListPopover.parameters = {
    docs: {
        iframeHeight: 900,
        description: {
            story: `
Nested list can be displayed inside popover.
        `
        }
    }
};