import '../../dist/side-nav.css';

export default {
    title: 'Components/Side Navigation',
    parameters: {
        description: `
  The left navigation area can be used to display navigation structures with links that change the content in the main area. The side navigation consists of two container section:  the Main Navigation Section (top-aligned) with links used to navigate within the user’s current work context, and Utility Section (bottom-aligned) that contains links to additional information.
  Each of the sections uses a Nested List to display the navigation items.`,
        docs: {
            iframeHeight: 400
        },
        tags: ['f3', 'a11y', 'theme']
    }
};

/** Side Navigation with one level - text-only, cozy mode.
 * There is only one level of navigation; all further navigation is shown in the content area.
 * The lists in both sections (Main and Utility) should have the fd-nested-list--text-only modifier class.
 */

export const cozy = () => `
<div class="fd-side-nav">
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

export const cozyIcons = () => `
<div class="fd-side-nav">
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

cozyIcons.parameters = {
    docs: {
        iframeHeight: 400,
        storyDescription: 'Side Navigation with one level - with icons, cozy mode.'
    }
};

export const cozyMultiple = () => `
<div class="fd-side-nav">
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
                        aria-label="Expand submenu">
                        <i class="sap-icon--navigation-right-arrow"></i>    
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

cozyMultiple.parameters = {
    docs: {
        iframeHeight: 400,
        storyDescription: `
Use this when there is more than one level of hierarchy in the left navigation.
The entries on the first level are just group headers(don't trigger navigation themselves).
It's recommended to use up to two levels of navigation. For more levels of navigation, use the content area.
On expand, the <code>is-expanded</code> class should be propagated also to <code>__content</code> element. <code>fd-nested-list__button</code>
is the element which triggers another level..
        `
    }
};

export const complexCozySideNav = () => `
<div class="fd-side-nav">
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
                        aria-label="Expand submenu">
                        <i class="sap-icon--navigation-right-arrow"></i>    
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

complexCozySideNav.parameters = {
    docs: {
        iframeHeight: 550,
        storyDescription: 'Side navigation with 2 levels - with icons and group headers, cozy mode'
    }
};

export const complexCompactSideNav = () => `
<div class="fd-side-nav">
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
                        aria-label="Expand submenu">
                        <i class="sap-icon--navigation-right-arrow"></i>    
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

complexCompactSideNav.parameters = {
    docs: {
        iframeHeight: 550,
        storyDescription: 'Side navigation with 2 levels - with icons and group headers, compact mode'
    }
};

export const condensedStateCozy = () => `
<nav class="fd-side-nav fd-side-nav--condensed">
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

condensedStateCozy.parameters = {
    docs: {
        iframeHeight: 500
    }
};


export const condensedStateCompact = () => `
<nav class="fd-side-nav fd-side-nav--condensed">
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


condensedStateCompact.parameters = {
    docs: {
        storyDescription: `
The default size for the popover body is often longer than the text length. The length can be adjusted to match the text
length by adding the <code>fd-popover__body--dropdown-fill</code> class to <code>fd-popover__body</code>.
`
    }
};

export const nestedListWithoutIcons = () => `
<ul class="fd-nested-list fd-nested-list--text-only">
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
                    <i class="sap-icon--navigation-right-arrow"></i>    
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
                        <i class="sap-icon--navigation-right-arrow"></i>    
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
                                <i class="sap-icon--navigation-right-arrow"></i>    
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
                                        <i class="sap-icon--navigation-right-arrow"></i>    
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
                                                <i class="sap-icon--navigation-right-arrow"></i>
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

nestedListWithoutIcons.parameters = {
    docs: {
        disable: true
    }
};

export const nestedListWithIconsOnlyInFirstLevel = () => `
<ul class="fd-nested-list">
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
                <i class="sap-icon--navigation-right-arrow"></i>    
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
                        <i class="sap-icon--navigation-right-arrow"></i>    
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
                                <i class="sap-icon--navigation-right-arrow"></i>    
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

nestedListWithIconsOnlyInFirstLevel.parameters = {
    docs: {
        disable: true
    }
};

export const nestedListWithGroupHeaders = () => `
<ul class="fd-nested-list">
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
                <i class="sap-icon--navigation-right-arrow"></i>    
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
                        <i class="sap-icon--navigation-right-arrow"></i>    
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
                                <i class="sap-icon--navigation-right-arrow"></i>    
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

nestedListWithGroupHeaders.parameters = {
    docs: {
        disable: true
    }
};

export const nestedListWithGroupHeadersCompactMode = () => `
<ul class="fd-nested-list fd-nested-list--compact">
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
                <i class="sap-icon--navigation-right-arrow"></i>    
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
                        <i class="sap-icon--navigation-right-arrow"></i>    
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
                                <i class="sap-icon--navigation-right-arrow"></i>    
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

nestedListWithGroupHeadersCompactMode.parameters = {
    docs: {
        disable: true
    }
};

export const nestedListWithoutLinks = () => `
<ul class="fd-nested-list fd-nested-list--compact">
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
                <i class="sap-icon--navigation-right-arrow"></i>    
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
                        <i class="sap-icon--navigation-right-arrow"></i>    
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
                                <i class="sap-icon--navigation-right-arrow"></i>    
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


nestedListWithoutLinks.parameters = {
    docs: {
        disable: true
    }
};

export const rtlExample = () => `
<ul class="fd-nested-list" dir="rtl">
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
                aria-controls="EX400L2122" 
                aria-haspopup="true" 
                aria-expanded="true" 
                aria-label="Expand submenu">
                <i class="sap-icon--navigation-left-arrow"></i>    
            </button>
		</div>
        <ul class="fd-nested-list fd-nested-list--text-only level-2" id="EX400L2122" aria-hidden="false">
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
                        <i class="sap-icon--navigation-left-arrow"></i>    
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
                                <i class="sap-icon--navigation-left-arrow"></i>    
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


rtlExample.parameters = {
    docs: {
        disable: true
    }
};

export const rtlCozyMultiple = () => `
<div class="fd-side-nav" dir="rtl">
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
                        aria-controls="EX100L233" 
                        aria-haspopup="true" 
                        aria-expanded="false" 
                        aria-label="Expand submenu">
                        <i class="sap-icon--navigation-left-arrow"></i>    
                    </button>
                </div>
                <ul class="fd-nested-list level-2" id="EX100L233" aria-hidden="true">
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

rtlCozyMultiple.parameters = {
    docs: {
        disable: true
    }
};
