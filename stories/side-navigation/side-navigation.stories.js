export default {
  title: "Components/SideNavigation",
  parameters: {
    description: `
  The left navigation area can be used to display navigation structures with links that change the content in the main area. The side navigation consists of two container section:  the Main Navigation Section (top-aligned) with links used to navigate within the user’s current work context, and Utility Section (bottom-aligned) that contains links to additional information.
  Each of the sections uses a Nested List to display the navigation items.
        `
  }
};

/** Side Navigation with one level - text-only, cozy mode.
 * There is only one level of navigation; all further navigation is shown in the content area.
 * The lists in both sections (Main and Utility) should have the fd-nested-list--text-only modifier class.
 */

export const cozy = () => `
<div class="fd-side-nav">
    <a class="fd-side-nav__skip-link" href="#content">Skip navigation</a>
    <nav class="fd-side-nav__main-navigation">
        <ul class="fd-nested-list fd-nested-list--text-only">
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
    <nav class="fd-side-nav__utility">
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

cozy.parameters = {
};


/** Side Navigation with one level - with icons, cozy mode. */

export const cozyIcons = () => `
<div class="fd-side-nav">
    <a class="fd-side-nav__skip-link" href="#content">Skip navigation</a>
    <nav class="fd-side-nav__main-navigation">
        <ul class="fd-nested-list">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-hidden="true" class="fd-nested-list__icon sap-icon--home"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link is-selected" href="#">
                    <span aria-hidden="true" class="fd-nested-list__icon sap-icon--calendar"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-hidden="true" class="fd-nested-list__icon sap-icon--employee"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-hidden="true" class="fd-nested-list__icon sap-icon--activities"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fd-side-nav__utility">
        <ul class="fd-nested-list">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-hidden="true" class="fd-nested-list__icon sap-icon--compare"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-hidden="true" class="fd-nested-list__icon sap-icon--chain-link"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;

cozyIcons.parameters = {};

/** Use this when there is more than one level of hierarchy in the left navigation.
 * The entries on the first level are just group headers(don't trigger navigation themselves).
 * It's recommended to use up to two levels of navigation. For more levels of navigation, use the content area.
 * On expand, the `is-expanded` class should be propagated also to `__content` element. `fd-nested-list__button`
 * is the element which triggers another level.. */

export const cozyMultiple = () => `
<div class="fd-side-nav">
    <a class="fd-side-nav__skip-link" href="#content">Skip navigation</a>
    <nav class="fd-side-nav__main-navigation">
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
                        onclick="onSideNavClick('EX100L2')"
                        aria-controls="EX100L2" 
                        aria-haspopup="true" 
                        aria-expanded="false" 
                        aria-label="Expand submenu"></button>
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
    <nav class="fd-side-nav__utility">
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

/** Side navigation with 2 levels - with icons and group headers, cozy mode */

export const complexCozySideNav = () => `
<div class="fd-side-nav">
    <a class="fd-side-nav__skip-link" href="#content">Skip navigation</a>
    <div class="fd-side-nav__group-header" id="EX400H1">
        Group Header 1
    </div>
    <nav class="fd-side-nav__main-navigation">
        <ul class="fd-nested-list" aria-labelledby="EX400H1">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-hidden="true" class="fd-nested-list__icon sap-icon--home"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-hidden="true" class="fd-nested-list__icon sap-icon--calendar"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <div class="fd-nested-list__content is-selected has-child">
                    <a class="fd-nested-list__link" href="#">
                        <span aria-hidden="true" class="fd-nested-list__icon sap-icon--employee"></span>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </a>
                    <button 
                        class="fd-button fd-nested-list__button" 
                        aria-controls="EX400L2" 
                        aria-haspopup="true" 
                        aria-expanded="false" 
                        onclick="onSideNavClick('EX400L2')"
                        aria-label="Expand submenu"></button>
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
                    <span aria-hidden="true" class="fd-nested-list__icon sap-icon--activities"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
        <div class="fd-side-nav__group-header" id="EX400H2">
            Group Header 2
        </div>
        <ul class="fd-nested-list" aria-labelledby="EX400H2">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#" aria-labelledby="group-2-header">
                    <span aria-hidden="true" class="fd-nested-list__icon sap-icon--bar-chart"></span>
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
    <nav class="fd-side-nav__utility">
        <ul class="fd-nested-list" aria-label="Utility Menu">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-hidden="true" class="fd-nested-list__icon sap-icon--compare"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-hidden="true" class="fd-nested-list__icon sap-icon--chain-link"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;


/** Side navigation with 2 levels - with icons and group headers, compact mode */

export const complexCompactSideNav = () => `
<div class="fd-side-nav">
    <a class="fd-side-nav__skip-link" href="#content">Skip navigation</a>
    <div class="fd-side-nav__group-header" id="EX500H1">
        Group Header 1
    </div>
    <nav class="fd-side-nav__main-navigation">
        <ul class="fd-nested-list fd-nested-list--compact" aria-labelledby="EX500H1">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-hidden="true" class="fd-nested-list__icon sap-icon--home"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link is-selected" href="#">
                    <span aria-hidden="true" class="fd-nested-list__icon sap-icon--calendar"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <div class="fd-nested-list__content has-child">
                    <a class="fd-nested-list__link" href="#">
                        <span aria-hidden="true" class="fd-nested-list__icon sap-icon--employee"></span>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </a>
                    <button class="fd-button fd-nested-list__button"
                        onclick="onSideNavClick('EX500L2')"
                        aria-controls="EX500L2" 
                        aria-haspopup="true" 
                        aria-expanded="false" 
                        aria-label="Expand submenu"></button>
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
                    <span aria-hidden="true" class="fd-nested-list__icon sap-icon--activities"></span>
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
                    <span aria-hidden="true" class="fd-nested-list__icon sap-icon--bar-chart"></span>
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
    <nav class="fd-side-nav__utility">
        <ul class="fd-nested-list fd-nested-list--compact" aria-label="Utility Menu">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-hidden="true" class="fd-nested-list__icon sap-icon--compare"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span class="fd-nested-list__icon sap-icon--chain-link"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;

export const condensedStateCozy = () => `
<nav class="fd-side-nav fd-side-nav--condensed">
    <a class="fd-side-nav__skip-link" href="#content">Skip navigation</a>
    <div class="fd-side-nav__main-navigation">
        <ul class="fd-nested-list">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--home"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--calendar"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <div class="fd-nested-list__content is-selected has-child">
                    <button class="fd-nested-list__link" aria-controls="EX500L2" aria-haspopup="true" aria-expanded="false" aria-label="Expand submenu">
                        <span aria-hidden="true" class="fd-nested-list__icon sap-icon--employee"></span>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </button>
                </div>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--activities"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--bar-chart"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </div>
    <div class="fd-side-nav__utility" aria-label="Utility Menu">
        <ul class="fd-nested-list">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--compare"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--chain-link"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </div>
</nav>
`;

condensedStateCozy.parameters = {};

/** The default size for the popover body is often longer than the text length. The length can be adjusted to match the text
 * length by adding the `fd-popover__body--dropdown-fill` class to `fd-popover__body`. */

export const condensedStateCompact = () => `
<nav class="fd-side-nav fd-side-nav--condensed">
    <a class="fd-side-nav__skip-link" href="#content">Skip navigation</a>
    <div class="fd-side-nav__main-navigation">
        <ul class="fd-nested-list fd-nested-list--compact">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--home"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--calendar"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <div class="fd-nested-list__content is-selected has-child">
                    <button class="fd-nested-list__link" aria-controls="EX600L2" aria-haspopup="true" aria-expanded="false" aria-label="Expand submenu">
                        <span aria-hidden="true" class="fd-nested-list__icon sap-icon--employee"></span>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </button>
                </div>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--activities"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--bar-chart"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </div>
    <div class="fd-side-nav__utility">
        <ul class="fd-nested-list fd-nested-list--compact" aria-label="Utility Menu">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--compare"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--chain-link"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </div>
</nav>
`;


condensedStateCompact.parameters = {};
