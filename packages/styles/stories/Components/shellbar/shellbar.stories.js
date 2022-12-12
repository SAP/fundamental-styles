import '../../../src/button.scss';
import '../../../src/input-group.scss';
import '../../../src/icon.scss';
import '../../../src/menu.scss';
import '../../../src/avatar.scss';
import '../../../src/input-group.scss';
import '../../../src/popover.scss';
import '../../../src/product-switch.scss';
import '../../../src/shellbar.scss';
export default {
    title: 'Components/Shellbar',
    parameters: {
        tags: ['f3', 'a11y', 'theme'],
        description: `
The shellbar offers consistent, responsive navigation across all products and applications. It also includes support for branding, product navigation, search, notifications, and user settings. This is a composite component comprised of mandatory and optional elements. Shellbar should always be placed inside the shell layout container. As mentioned earlier, it is completely responsive by default with margins and padding already built in.

**Shellbar has two primary container groups:**

-	Product: for branding and product elements.
-	Actions: for search, product links, and user settings.

**Note:** There is a third container group for [SAP CoPilot](https://help.sap.com/viewer/product/SAP_COPILOT/1902/en-US), which is a chatbot feature leveraged internally at SAP. The SAP CoPilot icon is displayed in the product switch example, and can act as a placeholder for third-party chatbot applications.

##Elements
The shellbar supports layout functionality and has some built-in elements, but relies on standalone components for most of its content.

Elements | Class | Description
:------------ | :------- | :------------
Logo (mandatory) | \`fd-shellbar__logo\` | For company branding, add the \`--image-replaced\` modifier class when using CSS to display the logo. The logo can become a link by replacing the "span" tag with an "a" tag.
Title (mandatory) | \`fd-shellbar__title\` | Displays the current application.
Subtitle | \`fd-shellbar__subtitle\` | Displays an application context. Subtitles should seldom be used.
Action button (mandatory) | \`fd-shellbar__action\` | A container for each product action and link.
Mobile action button (optional) | \`fd-shellbar__action--mobile\` | For product actions only, visible on small shellbar (--s).
Desktop action button (optional) | \`fd-shellbar__action--desktop\` | For product actions only, visible on desktop screens (--m/l/xl).
Avatar (mandatory) | \`fd-avatar\` | For user settings and application meta links such as _Sign Out_. Accent colors between 11-15 can be randomly assigned to the background.
Product Switch (optional) | \`fd-product-switch\` | For navigating between products.
Notifications (optional) | \`fd-button__badge\` | To display notifications, add this class to the button. See **Button** to find documentation on Badge button.
<br>
`
    }
};

export const Primary = () => `<div style="height:150px">
    <div class="fd-shellbar">
        <div class="fd-shellbar__group fd-shellbar__group--product">
            <span class="fd-shellbar__logo"><img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" width="48" height="24" alt="SAP"></span>
        <span class="fd-shellbar__title">Corporate Portal</span>
        </div>
        <div class="fd-shellbar__group fd-shellbar__group--actions">
            <div class="fd-shellbar__action">
                <div class="fd-popover fd-popover--right">
                    <div class="fd-popover__control">
                        <div class="fd-button fd-button--transparent fd-shellbar__button fd-user-menu__control" aria-controls="WV3AY276" aria-expanded="false" aria-haspopup="true" role="button" tabindex="0">
                            <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-shellbar__avatar--circle">WW</span>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true" id="WV3AY276">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a role="button" class="fd-menu__link">
                                        <span class="fd-menu__title">Settings</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a role="button" class="fd-menu__link">
                                        <span class="fd-menu__title">Sign Out</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;
Primary.parameters = {
    docs: {
        description: {
            story: `
The primary shellbar displays a logo, title, and an avatar where the user settings are found. If the avatar does not contain a thumbnail, then the initials of the user will be displayed.
    `
        }
    }
};

export const ProductMenuAndSearch = () => `<div style="height:200px">
    <div class="fd-shellbar">
        <div class="fd-shellbar__group fd-shellbar__group--product">
            <a class="fd-shellbar__logo" href="https://www.sap.com/index.html" target="_blank">
                <img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" width="48" height="24" alt="SAP">
            </a>
            <div class="fd-popover">
                <div class="fd-popover__control">
                    <button class="fd-button fd-button--transparent fd-shellbar__button fd-shellbar__button--menu fd-button--menu" onclick="onPopoverClick('9GLB26941');" aria-controls="9GLB26941" aria-haspopup="true" aria-expanded="false">
                        <span class="fd-shellbar__title">Corporate Portal</span>
                        <i class="sap-icon--megamenu"></i>
                    </button>
                </div>
                <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="9GLB26941">
                    <nav class="fd-menu">
                        <ul class="fd-menu__list fd-menu__list--no-shadow">
                            <li class="fd-menu__item">
                                <a role="button" class="fd-menu__link">
                                    <span class="fd-menu__title">Application A</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a role="button" class="fd-menu__link">
                                    <span class="fd-menu__title">Application B</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a role="button" class="fd-menu__link">
                                    <span class="fd-menu__title">Application C</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a role="button" class="fd-menu__link">
                                    <span class="fd-menu__title">Application D</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        <div class="fd-shellbar__subtitle">Subtitle</div>
        </div>
        <div class="fd-shellbar__group fd-shellbar__group--actions">
            <div class="fd-shellbar__action fd-shellbar__action--desktop">
                <div class="fd-popover__control">
                    <div aria-label="Image label" onclick="onPopoverClick('F4GcX348b')" aria-controls="F4GcX348b" aria-expanded="false" aria-haspopup="true">
                        <div class="fd-input-group fd-shellbar__input-group">
                            <input aria-label="search-input" type="text" class="fd-input fd-input-group__input fd-shellbar__input-group-input" id="F4GcX348b1" placeholder="Search">
                            <span class="fd-input-group__addon fd-shellbar__input-group-addon fd-input-group__addon--button">
                                <button aria-label="button-decline" class="fd-shellbar__button fd-button fd-button--transparent">
                                        <i class="sap-icon--decline"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-shellbar__action fd-shellbar__action--desktop">
                <button class="fd-button fd-button--transparent fd-shellbar__button" aria-label="Search">
                        <i class="sap-icon--search"></i>
                </button>
            </div>
            <div class="fd-shellbar__action">
                <div class="fd-popover fd-popover--right">
                    <div class="fd-popover__control">
                        <div class="fd-button fd-button--transparent fd-shellbar__button fd-user-menu__control" aria-controls="ZY3AY276" onclick="onPopoverClick('ZY3AY276')" aria-expanded="false" aria-haspopup="true" role="button" tabindex="0">
                            <span
                                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail fd-shellbar__avatar--circle"
                                style="background-image: url('assets/images/avatars/1.svg');"
                                aria-label="William Wallingham">
                            </span>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="false" id="ZY3AY276">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a role="button" class="fd-menu__link">
                                        <span class="fd-menu__title">Settings</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a role="button" class="fd-menu__link">
                                        <span class="fd-menu__title">Sign Out</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

ProductMenuAndSearch.storyName = 'Product menu and search';

ProductMenuAndSearch.parameters = {
    docs: {
        description: {
            story: `
Shellbar can be displayed with a product menu and search box. The product menu is used for navigating to other applications within the product. To display a product menu, add the \`fd-popover\` class after the \`fd-shellbar__logo\` class. The logo can become a link by replacing the "span" tag with an "a" tag.
    `
        }
    }
};

export const LinksWithCollapsibleMenuXlSize = () => `<div style="height:300px">
    <div class="fd-shellbar fd-shellbar--xl">
        <div class="fd-shellbar__group fd-shellbar__group--product">
            <span class="fd-shellbar__logo"><img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png"
                                                 srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x"
                                                 width="48" height="24" alt="SAP"></span>
            <span class="fd-shellbar__title">Corporate Portal</span>
        </div>
        <div class="fd-shellbar__group fd-shellbar__group--actions">
            <div class="fd-shellbar__action fd-shellbar__action--desktop">
                <div class="fd-popover__control">
                    <div aria-label="Image label" aria-controls="UIO6J688" aria-expanded="false" aria-haspopup="true">
                        <div class="fd-input-group fd-shellbar__input-group">
                            <input aria-label="search" type="text"
                                   class="fd-input fd-input-group__input fd-shellbar__input-group-input" id="UIO6J6881"
                                   placeholder="Search">
                            <span
                                class="fd-input-group__addon fd-shellbar__input-group-addon fd-input-group__addon--button">
                                <button aria-label="navigation-down-arrow-button" class="fd-shellbar__button fd-button fd-button--transparent">
                                    <i class="sap-icon--decline"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-shellbar__action fd-shellbar__action--desktop">
                <button class="fd-button fd-button--transparent fd-shellbar__button" aria-label="Search">
                    <i class="sap-icon--search"></i>
                </button>
            </div>
            <div class="fd-shellbar__action fd-shellbar__action--desktop">
                <button class="fd-button fd-button--transparent fd-shellbar__button" aria-label="Notifications">
                    <i class="sap-icon--bell"></i>
                    <span class="fd-button__badge">251K</span>
                </button>
            </div>
            <div class="fd-shellbar__action fd-shellbar__action--desktop">
                <button class="fd-button fd-button--transparent fd-shellbar__button" aria-label="Pool">
                    <i class="sap-icon--pool"></i>
                </button>
            </div>
            <div class="fd-shellbar__action fd-shellbar__action--mobile">
                <div class="fd-shellbar-collapse">
                    <div class="fd-popover fd-popover--right">
                        <div class="fd-popover__control">
                            <div class="fd-shellbar-collapse--control" onclick="onPopoverClick('CWaGGD78')"
                                 aria-controls="CWaGGD78" aria-expanded="false" aria-haspopup="true" role="button">
                                <button class="fd-button fd-button--transparentfd-shellbar__button" aria-controls="undefined"
                                        aria-haspopup="true" aria-expanded="false">
                                    <i class="sap-icon--overflow"></i>
                                    <span class="fd-buton__badge">251K</span>
                                </button>
                            </div>
                        </div>
                        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right"
                             aria-hidden="true" id="CWaGGD78">
                            <nav class="fd-menu">
                                <ul class="fd-menu__list fd-menu__list--no-shadow">
                                    <li class="fd-menu__item">
                                        <a role="button" class="fd-menu__link">
                                            <span class="fd-menu__title">Search</span>
                                        </a>
                                    </li>
                                    <li class="fd-menu__item">
                                        <a role="button" class="fd-menu__link">
                                            <span class="fd-menu__title">Notifications Out</span>
                                        </a>
                                    </li>
                                    <li class="fd-menu__item">
                                        <a role="button" class="fd-menu__link">
                                            <span class="fd-menu__title">Pool</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-shellbar__action">
                <div class="fd-popover fd-popover--right">
                    <div class="fd-popover__control">
                        <div class="fd-button fd-button--transparent fd-shellbar__button fd-user-menu__control"
                             onclick="onPopoverClick('DD35G276')" aria-controls="DD35G276" aria-expanded="false"
                             aria-haspopup="true" role="button" tabindex="0">
                            <span
                                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-shellbar__avatar--circle">WW</span>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true"
                         id="DD35G276">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a role="button" class="fd-menu__link">
                                        <span class="fd-menu__title">Settings</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a role="button" class="fd-menu__link">
                                        <span class="fd-menu__title">Sign Out</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

LinksWithCollapsibleMenuXlSize.storyName = 'Extra large';

LinksWithCollapsibleMenuXlSize.parameters = {
    docs: {
        description: {
            story: `
The shellbar can be optimized for extra-large screens. To achieve this style, add the \`fd-shellbar--xl\` modifier class to the main element, which increases the container padding to 3rem.
        `
        }
    }
};


export const LinksWithCollapsibleMenuMSize = () => `<div style="height:300px; max-width: 1024px;">
    <div class="fd-shellbar fd-shellbar--m">
        <div class="fd-shellbar__group fd-shellbar__group--product">
            <span class="fd-shellbar__logo"><img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png"
                                                 srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x"
                                                 width="48" height="24" alt="SAP"></span>
            <span class="fd-shellbar__title">Corporate Portal</span>
        </div>
        <div class="fd-shellbar__group fd-shellbar__group--actions">
            <div class="fd-shellbar__action fd-shellbar__action--desktop">
                <div class="fd-popover__control">
                    <div aria-label="Image label" aria-controls="UIBFJ688" aria-expanded="false" aria-haspopup="true">
                        <div class="fd-input-group fd-shellbar__input-group">
                            <input aria-label="search" type="text"
                                   class="fd-input fd-input-group__input fd-shellbar__input-group-input" id="UIO6J6881"
                                   placeholder="Search">
                            <span
                                class="fd-input-group__addon fd-shellbar__input-group-addon fd-input-group__addon--button">
                                <button aria-label="navigation-down-arrow-button" class="fd-shellbar__button fd-button fd-button--transparent">
                                    <i class="sap-icon--decline"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-shellbar__action fd-shellbar__action--desktop">
                <button class="fd-button fd-button--transparent fd-shellbar__button" aria-label="Search">
                    <i class="sap-icon--search"></i>
                </button>
            </div>
            <div class="fd-shellbar__action fd-shellbar__action--desktop">
                <button class="fd-button fd-button--transparent fd-shellbar__button" aria-label="Notifications">
                    <i class="sap-icon--bell"></i>
                    <span class="fd-button__badge">251K</span>
                </button>
            </div>
            <div class="fd-shellbar__action fd-shellbar__action--desktop">
                <button class="fd-button fd-button--transparent fd-shellbar__button" aria-label="Pool">
                    <i class="sap-icon--pool"></i>
                </button>
            </div>
            <div class="fd-shellbar__action fd-shellbar__action--mobile">
                <div class="fd-shellbar-collapse">
                    <div class="fd-popover fd-popover--right">
                        <div class="fd-popover__control">
                            <div class="fd-shellbar-collapse--control" onclick="onPopoverClick('CWaGNGD78')"
                                 aria-controls="CWaGNGD78" aria-expanded="false" aria-haspopup="true" role="button">
                                <button class="fd-button fd-button--transparent fd-shellbar__button" aria-controls="undefined"
                                        aria-haspopup="true" aria-expanded="false">
                                    <i class="sap-icon--overflow"></i>
                                    <span class="fd-button__badge">251K</span>
                                </button>
                            </div>
                        </div>
                        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right"
                             aria-hidden="true" id="CWaGNGD78">
                            <nav class="fd-menu">
                                <ul class="fd-menu__list fd-menu__list--no-shadow">
                                    <li class="fd-menu__item">
                                        <a role="button" class="fd-menu__link">
                                            <span class="fd-menu__title">Search</span>
                                        </a>
                                    </li>
                                    <li class="fd-menu__item">
                                        <a role="button" class="fd-menu__link">
                                            <span class="fd-menu__title">Notifications Out</span>
                                        </a>
                                    </li>
                                    <li class="fd-menu__item">
                                        <a role="button" class="fd-menu__link">
                                            <span class="fd-menu__title">Pool</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-shellbar__action">
                <div class="fd-popover fd-popover--right">
                    <div class="fd-popover__control">
                        <div class="fd-button fd-button--transparent fd-shellbar__button fd-user-menu__control"
                             onclick="onPopoverClick('DD35GBK6')" aria-controls="DD35GBK6" aria-expanded="false"
                             aria-haspopup="true" role="button" tabindex="0">
                            <span
                                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-shellbar__avatar--circle">WW</span>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true"
                         id="DD35GBK6">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a role="button" class="fd-menu__link">
                                        <span class="fd-menu__title">Settings</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a role="button" class="fd-menu__link">
                                        <span class="fd-menu__title">Sign Out</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

LinksWithCollapsibleMenuMSize.storyName = 'Medium-large';

LinksWithCollapsibleMenuMSize.parameters = {
    docs: {
        description: {
            story: `
The shellbar can be optimized for medium-large screens. To achieve this style, add the \`fd-shellbar--m\` or \`fd-shellbar--l\`modifier class to the main element, which increases the container padding to 2rem.
        `
        }
    }
};

export const LinksWithCollapsibleMenuSSize = () => `<div style="height:300px; max-width: 600px;">
    <div class="fd-shellbar fd-shellbar--s">
        <div class="fd-shellbar__group fd-shellbar__group--product">
            <span class="fd-shellbar__logo"><img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png"
                                                 srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x"
                                                 width="48" height="24" alt="SAP"></span>
            <span class="fd-shellbar__title">Corporate Portal</span>
        </div>
        <div class="fd-shellbar__group fd-shellbar__group--actions">
            <div class="fd-shellbar__action fd-shellbar__action--desktop">
                <div class="fd-popover__control">
                    <div aria-label="Image label" aria-controls="UIBFJ688" aria-expanded="false" aria-haspopup="true">
                        <div class="fd-input-group fd-shellbar__input-group">
                            <input aria-label="search" type="text"
                                   class="fd-input fd-input-group__input fd-shellbar__input-group-input" id="UIO6J6881"
                                   placeholder="Search">
                            <span
                                class="fd-input-group__addon fd-shellbar__input-group-addon fd-input-group__addon--button">
                                <button aria-label="navigation-down-arrow-button" class="fd-shellbar__button fd-button fd-button--transparent">
                                    <i class="sap-icon--decline"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-shellbar__action fd-shellbar__action--desktop">
                <button class="fd-button fd-button--transparent fd-shellbar__button" aria-label="Search">
                    <i class="sap-icon--search"></i>
                </button>
            </div>
            <div class="fd-shellbar__action fd-shellbar__action--desktop">
                <button class="fd-button fd-button--transparent fd-shellbar__button" aria-label="Notifications">
                    <i class="sap-icon--bell"></i>
                    <span class="fd-button__badge">251K</span>
                </button>
            </div>
            <div class="fd-shellbar__action fd-shellbar__action--desktop">
                <button class="fd-button fd-button--transparent fd-shellbar__button" aria-label="Pool">
                    <i class="sap-icon--pool"></i>
                </button>
            </div>
            <div class="fd-shellbar__action fd-shellbar__action--mobile">
                <div class="fd-shellbar-collapse">
                    <div class="fd-popover fd-popover--right">
                        <div class="fd-popover__control">
                            <div class="fd-shellbar-collapse--control" onclick="onPopoverClick('CWaGNGD78')"
                                 aria-controls="CWaGNGD78" aria-expanded="false" aria-haspopup="true" role="button">
                                <button class="fd-button fd-button--transparent fd-shellbar__button" aria-controls="undefined"
                                        aria-haspopup="true" aria-expanded="false">
                                    <i class="sap-icon--overflow"></i>
                                    <span class="fd-button__badge">251K</span>
                                </button>
                            </div>
                        </div>
                        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right"
                             aria-hidden="true" id="CWaGNGD78">
                            <nav class="fd-menu">
                                <ul class="fd-menu__list fd-menu__list--no-shadow">
                                    <li class="fd-menu__item">
                                        <a role="button" class="fd-menu__link">
                                            <span class="fd-menu__title">Search</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-shellbar__action">
                <div class="fd-popover fd-popover--right">
                    <div class="fd-popover__control">
                        <div class="fd-button fd-button--transparent fd-shellbar__button fd-user-menu__control"
                             onclick="onPopoverClick('DD35GBK6')" aria-controls="DD35GBK6" aria-expanded="false"
                             aria-haspopup="true" role="button" tabindex="0">
                            <span
                                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-shellbar__avatar--circle">WW</span>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true"
                         id="DD35GBK6">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a role="button" class="fd-menu__link">
                                        <span class="fd-menu__title">Settings</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a role="button" class="fd-menu__link">
                                        <span class="fd-menu__title">Sign Out</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

LinksWithCollapsibleMenuSSize.storyName = 'Small';

LinksWithCollapsibleMenuSSize.parameters = {
    docs: {
        description: {
            story: `
The shellbar can be optimized for mobile and small tablet screens. To achieve this style, add the \`fd-shellbar--s\` modifier class to the main element. All actions except the user menu should be collapsed, displaying an overflow button.
        `
        }
    }
};

export const ProductSwitch = () => `<div style="height:600px">
    <div class="fd-shellbar fd-shellbar--responsive-paddings">
        <div class="fd-shellbar__group fd-shellbar__group--product">
        <span class="fd-shellbar__logo">
            <svg style="height: 32px; width: 64px" width="286" height="143" viewBox="0 0 286 143"
                 xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="-91.234%" y1="50%" x2="98.574%" y2="50%"
                                                                          id="a"><stop stop-color="#32B79D"
                                                                                       stop-opacity=".59" offset="0%"/><stop
                stop-color="#33EAFF" stop-opacity=".59" offset="35.525%"/><stop stop-color="#7FCAFF" stop-opacity=".59"
                                                                                offset="73.603%"/><stop
                stop-color="#84A2FF" stop-opacity=".59" offset="100%"/></linearGradient></defs><g
                transform="translate(-19)" fill="url(#a)" fill-rule="evenodd"><path
                d="M114.232.963h190.464c0 16.966-13.754 30.72-30.72 30.72H83.512c0-16.966 13.754-30.72 30.72-30.72zM80.44 56.259h116.736c0 16.966-13.754 30.72-30.72 30.72H49.72c0-16.966 13.754-30.72 30.72-30.72zM49.72 111.555h18.432c0 16.966-13.754 30.72-30.72 30.72H19c0-16.966 13.754-30.72 30.72-30.72z"/></g></svg>
        </span>
            <span class="fd-shellbar__title">Corporate Portal</span>
        </div>
        <div class="fd-shellbar__group fd-shellbar__group--copilot">
            <button class="fd-button fd-button--transparent fd-shellbar__button"><img
                src="//unpkg.com/fundamental-styles/dist/images/copilot.png" alt="CoPilot" height="30" width="30"/>
            </button>
        </div>
        <div class="fd-shellbar__group fd-shellbar__group--actions">
            <div class="fd-shellbar__action">
                <div class="fd-popover fd-popover--right">
                    <div class="fd-popover__control">
                        <div class="fd-button fd-button--transparent fd-shellbar__button fd-user-menu__control"
                             onclick="onPopoverClick('MKFAY276')" aria-controls="MKFAY276" aria-expanded="false"
                             aria-haspopup="true" role="button" tabindex="0">
                            <span
                                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail fd-shellbar__avatar--circle"
                                style="background-image: url('assets/images/avatars/1.svg');"
                                aria-label="William Wallingham">
                            </span>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true"
                         id="MKFAY276">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a role="button" class="fd-menu__link">
                                        <span class="fd-menu__title">Settings</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a role="button" class="fd-menu__link">
                                        <span class="fd-menu__title">Sign Out</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="fd-shellbar__action fd-shellbar__action--desktop">
                <div class="fd-product-switch">
                    <div class="fd-popover fd-popover--right">
                        <button
                            class="fd-button fd-button--transparent fd-shellbar__button fd-popover__control"
                            aria-label="Image label"
                            aria-controls="product-switch-body"
                            aria-expanded="true"
                            aria-haspopup="true"
                            onclick="onPopoverClick('product-switch-body')">
                            <i class="sap-icon--grid"></i>
                        </button>
                        <div class="fd-popover__body fd-popover__body--right" aria-hidden="false"
                             id="product-switch-body">
                            <div class="fd-product-switch__body">
                                <ul class="fd-product-switch__list">
                                    <li class="fd-product-switch__item">
                                        <div class="fd-product-switch__icon sap-icon--home"></div>
                                        <div class="fd-product-switch__text">
                                            <div class="fd-product-switch__title">Home</div>
                                            <div class="fd-product-switch__subtitle">Central Home</div>
                                        </div>
                                    </li>
                                    <li class="fd-product-switch__item selected">
                                        <div
                                            class="fd-product-switch__icon sap-icon--business-objects-experience"></div>
                                        <div class="fd-product-switch__text">
                                            <div class="fd-product-switch__title">Analytics Cloud</div>
                                            <div class="fd-product-switch__subtitle">Analytics Cloud</div>
                                        </div>
                                    </li>
                                    <li class="fd-product-switch__item">
                                        <div class="fd-product-switch__icon sap-icon--contacts"></div>
                                        <div class="fd-product-switch__text">
                                            <div class="fd-product-switch__title">Catalog</div>
                                            <div class="fd-product-switch__subtitle">Ariba</div>
                                        </div>
                                    </li>
                                    <li class="fd-product-switch__item">
                                        <div class="fd-product-switch__icon sap-icon--credit-card"></div>
                                        <div class="fd-product-switch__text">
                                            <div class="fd-product-switch__title">Guided Buying</div>
                                        </div>
                                    </li>
                                    <li class="fd-product-switch__item">
                                        <div class="fd-product-switch__icon sap-icon--cart-3"></div>
                                        <div class="fd-product-switch__text">
                                            <div class="fd-product-switch__title">Strategic Procurement</div>
                                        </div>
                                    </li>
                                    <li class="fd-product-switch__item">
                                        <div class="fd-product-switch__icon sap-icon--flight"></div>
                                        <div class="fd-product-switch__text">
                                            <div class="fd-product-switch__title">Travel & Expense</div>
                                            <div class="fd-product-switch__subtitle">Concur</div>
                                        </div>
                                    </li>
                                    <li class="fd-product-switch__item">
                                        <div class="fd-product-switch__icon sap-icon--shipping-status"></div>
                                        <div class="fd-product-switch__text">
                                            <div class="fd-product-switch__title">Vendor Management</div>
                                            <div class="fd-product-switch__subtitle">Fieldglass</div>
                                        </div>
                                    </li>
                                    <li class="fd-product-switch__item">
                                        <div class="fd-product-switch__icon sap-icon--customer"></div>
                                        <div class="fd-product-switch__text">
                                            <div class="fd-product-switch__title">Human Capital Management</div>
                                        </div>
                                    </li>
                                    <li class="fd-product-switch__item">
                                        <div class="fd-product-switch__icon sap-icon--sales-notification"></div>
                                        <div class="fd-product-switch__text">
                                            <div class="fd-product-switch__title">Sales Cloud</div>
                                            <div class="fd-product-switch__subtitle">Sales Cloud</div>
                                        </div>
                                    </li>
                                    <li class="fd-product-switch__item">
                                        <div class="fd-product-switch__icon sap-icon--retail-store"></div>
                                        <div class="fd-product-switch__text">
                                            <div class="fd-product-switch__title">Commerce Cloud</div>
                                            <div class="fd-product-switch__subtitle">Commerce Cloud</div>
                                        </div>
                                    </li>
                                    <li class="fd-product-switch__item">
                                        <div class="fd-product-switch__icon sap-icon--marketing-campaign"></div>
                                        <div class="fd-product-switch__text">
                                            <div class="fd-product-switch__title">Marketing Cloud</div>
                                            <div class="fd-product-switch__subtitle">Marketing Cloud</div>
                                        </div>
                                    </li>
                                    <li class="fd-product-switch__item">
                                        <div class="fd-product-switch__icon sap-icon--family-care"></div>
                                        <div class="fd-product-switch__text">
                                            <div class="fd-product-switch__title">Service Cloud</div>
                                        </div>
                                    </li>
                                    <li class="fd-product-switch__item">
                                        <div class="fd-product-switch__icon sap-icon--customer-briefing"></div>
                                        <div class="fd-product-switch__text">
                                            <div class="fd-product-switch__title">Customer Data Cloud</div>
                                        </div>
                                    </li>
                                    <li class="fd-product-switch__item">
                                        <div class="fd-product-switch__icon sap-icon--batch-payments"></div>
                                        <div class="fd-product-switch__text">
                                            <div class="fd-product-switch__title">S/4HANA</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

ProductSwitch.storyName = 'Product switch';

ProductSwitch.parameters = {
    docs: {
        description: {
            story: `
Shellbar can be displayed with a product switch component, indicating to the user that they can navigate to other products. See [Product Switch](product-switch.html) for more details.

**Note:** There is an [SAP CoPilot](https://help.sap.com/viewer/product/SAP_COPILOT/1902/en-US) icon displayed in the middle of the shellbar, which can be used to trigger a chatbot if desired.
    `
        }
    }
};
