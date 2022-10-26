import '../../../src/bar.scss';
import '../../../src/button.scss';
import '../../../src/dialog.scss';
import '../../../src/icon.scss';
import '../../../src/menu.scss';
import '../../../src/title.scss';
export default {
    title: 'Components/Menu',
    parameters: {
        tags: ['f3', 'a11y', 'theme', 'development'],
        description: `
The menu component is the listing structure with optional headers to create menus.

Commonly used as the contents when composing "dropdowns", "contextual menus", etc, when paired with the popover component.
`
    }
};


export const DesktopAndTablet = () => `
<label class="fd-form-label">Combobox Tablet Cozy Mode - default mode</label><br/><br/>

<nav aria-label="navigation menu" class="fd-menu">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 1</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 2</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 3</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 4</span>
            </a>
        </li>
    </ul>
</nav>

<br>
<label class="fd-form-label">Combobox Desktop Compact Mode</label><br/><br/>

<nav class="fd-menu fd-menu--compact">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 1</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 2</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 3</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 4</span>
            </a>
        </li>
    </ul>
</nav>
`;

DesktopAndTablet.storyName = 'Desktop and Tablet Modes';
DesktopAndTablet.parameters = {
    docs: {
        iframeHeight: 300,
        description: {
            story: 'The basic stucture of a menu. Place the menu item title in a `<span>` tag using class `fd-menu__title` and wrap it in the `fd-menu__link` and `fd-menu__item` classes as shown. Default mode is the cozy tablet mode, no class has to be added for this. Use class modifier`fd-menu--compact` on menu container level for desktop mode.'
        }
    }
};

export const DesktopAndTabletOverflow = () => `
<label class="fd-form-label">Combobox Tablet Cozy Mode - default mode</label><br/><br/>

<nav aria-label="navigation menu" class="fd-menu fd-menu--overflow" style="max-height: 200px;">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 1</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 2</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 3</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 4</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 5</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 6</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 7</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 8</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 9</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 10</span>
            </a>
        </li>
    </ul>
</nav>

<br>
<label class="fd-form-label">Combobox Desktop Compact Mode</label><br/><br/>

<nav class="fd-menu fd-menu--compact fd-menu--overflow" style="max-height: 120px;">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 1</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 2</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 3</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 4</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 5</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 6</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 7</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 8</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 9</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 10</span>
            </a>
        </li>
    </ul>
</nav>
`;

DesktopAndTabletOverflow.storyName = 'Desktop and Tablet Modes with vertical overflow';
DesktopAndTabletOverflow.parameters = {
    docs: {
        iframeHeight: 300,
        description: {
            story: 'The `fd-menu--overflow` modifier class will clip the content and add a vertical scroll to the element. You need to manually set the max-height of the element on the `fd-menu` level. For example: `style="max-height: 120px;"`. <br><b>Important: </b>this modifier class cannot be used in cases where the menu has a submenu.'
        }
    }
};

export const MobileCozyMode = () => `<div style="width: 50%; display: inline-block" class="fd-dialog fd-dialog-docs-static fd-select-docs-max-height fd-dialog--active" id="select-dialog-example">
    <section
        aria-labelledby="exampleSubMenuHeader"
        class="fd-dialog__content fd-dialog__content--mobile"
        role="dialog">
        <header aria-label="bar-header" class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3
                        id="exampleSubMenuHeader"
                        class="fd-title fd-title--h5">
                        Example Submenu
                    </h3>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
             <nav
                aria-label="example sub-menu options"
                class="fd-menu fd-menu--mobile"
                id="parent-menu"
                tabindex="-1">
                <ul class="fd-menu__list" role="menu">
                    <li class="fd-menu__item" role="presentation">
                        <a class="fd-menu__link" href="#" role="menuitem">
                            <span class="fd-menu__addon-before"><i class="sap-icon--grid" role="presentation"></i></span>
                            <span class="fd-menu__title">Option 1</span>
                            <span class="fd-menu__addon-after"><i class="sap-icon--wrench" role="presentation"></i></span>
                        </a>
                    </li>
                    <li class="fd-menu__item" role="presentation">
                        <a class="fd-menu__link is-active" href="#" role="menuitem">
                            <span class="fd-menu__addon-before"><i class="sap-icon--accept" role="presentation"></i></span>
                            <span class="fd-menu__title">Option 2</span>
                            <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                        </a>
                    </li>
                    <li class="fd-menu__item" role="presentation">
                        <a class="fd-menu__link" href="#" role="menuitem">
                            <span class="fd-menu__addon-before"><i class="sap-icon--history" role="presentation"></i></span>
                            <span class="fd-menu__title">Option 3</span>
                            <span class="fd-menu__addon-after"><i class="sap-icon--lightbulb" role="presentation"></i></span>
                        </a>
                    </li>
                    <li class="fd-menu__item" role="presentation">
                        <a class="fd-menu__link" href="#" role="menuitem">
                            <span class="fd-menu__addon-before"><i class="sap-icon--grid" role="presentation"></i></span>
                            <span class="fd-menu__title">Option 4</span>
                            <span class="fd-menu__addon-after"><i class="sap-icon--history" role="presentation"></i></span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
       <footer class="fd-dialog__footer fd-bar fd-bar--cozy fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button
                        aria-label="close options dialog"
                        class="fd-button fd-button--light fd-dialog__decisive-button">
                        Cancel
                    </button>
                </div>
            </div>
        </footer>
    </section>
</div>

<div style="display: inline-block; width: auto;" class="fd-dialog fd-dialog-docs-static fd-select-docs-max-height fd-dialog--active" id="select-dialog-example-inner">
    <section
        aria-labelledby="subOptionHeader"
        class="fd-dialog__content fd-dialog__content--mobile"
        role="dialog">
        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                <button
                    aria-label="Show main menu options"
                    class="fd-button fd-button--transparent">
                    <i class="sap-icon--navigation-left-arrow" role="presentation"></i>
                </button>
            </div>
            <div class="fd-bar__element">
                    <h3
                        class="fd-title fd-title--h5"
                        id="subOptionHeader">
                        Option 2
                    </h3>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
             <nav
                aria-label="option 2 sub-options"
                class="fd-menu fd-menu--mobile">
                <ul class="fd-menu__sublist" role="menu">
                    <li class="fd-menu__item" role="presentation">
                        <a class="fd-menu__link" href="#" role="menuitem">
                            <span class="fd-menu__title">Sub-option 1</span>
                        </a>
                    </li>
                    <li class="fd-menu__item" role="presentation">
                        <a class="fd-menu__link" href="#" role="menuitem">
                            <span class="fd-menu__title">Sub-option 2</span>
                        </a>
                    </li>
                    <li class="fd-menu__item" role="presentation">
                        <a class="fd-menu__link" href="#" role="menuitem">
                            <span class="fd-menu__title">Sub-option 3</span>
                        </a>
                    </li>
                    <li class="fd-menu__item" role="presentation">
                        <a class="fd-menu__link" href="#" role="menuitem">
                            <span class="fd-menu__title">Sub-option 4</span>
                        </a>
                    </li>
                    <li class="fd-menu__item" role="presentation">
                        <a class="fd-menu__link" href="#" role="menuitem">
                            <span class="fd-menu__title">Sub-option 5 with very very very very long text</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
       <footer class="fd-dialog__footer fd-bar fd-bar--cozy fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button
                        aria-label="close options dialog"
                        class="fd-button fd-button--light fd-dialog__decisive-button">
                        Cancel
                    </button>
                </div>
            </div>
        </footer>
    </section>
</div>
`;

MobileCozyMode.parameters = {
    docs: {
        iframeHeight: 300,
        description: {
            story: 'The basic stucture of a menu in mobile where it opens as a dialog. Use class `fd-menu--mobile` on menu container level. Example shows the parent menu\'s item in active state to simulate a pressed/touched event. Submenu appears in its own fullscreen dialog in mobile devices. The device\'s back button takes one back to the parent menu fullscreen dialog.'
        }
    }
};

export const SeperatedItems = () => `<nav class="fd-menu">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 1</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 2</span>
            </a>
        </li>
        <span class="fd-menu__separator"></span>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 3</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 4</span>
            </a>
        </li>
        <span class="fd-menu__separator"></span>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 5</span>
            </a>
        </li>
    </ul>
</nav>
`;

SeperatedItems.storyName = 'List with separated items';
SeperatedItems.parameters = {
    docs: {
        iframeHeight: 300,
        description: {
            story: 'To add separators between the items, use the class `fd-menu__separator` in its own `<span>` after the `<li>` item where you want the separation.'
        }
    }
};

export const DifferentStates = () => `<div style="width: 50%; display: inline-block">
    <nav aria-label="navbar" class="fd-menu">
        <ul class="fd-menu__list" role="menu">
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__title">Option 1- Regular</span>
                </a>
            </li>
             <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link is-hover" href="#" role="menuitem">
                    <span class="fd-menu__title">Option 2 - Hover</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link is-active" href="#" role="menuitem">
                    <span class="fd-menu__title">Option 3 - Active</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link is-selected" href="#" role="menuitem">
                    <span class="fd-menu__title">Option 4 - Selected</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link is-selected is-hover" href="#" role="menuitem">
                    <span class="fd-menu__title">Option 5 - Selected-Hover</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link is-disabled" href="#" role="menuitem" tabindex="-1">
                    <span class="fd-menu__title">Option 6 - Disabled</span>
                </a>
            </li>
        </ul>
    </nav>
</div>

<div style="width: 49%; display: inline-block">
    <nav class="fd-menu">
        <ul class="fd-menu__list fd-menu__list--no-shadow" role="menu">
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__title">Option 1</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__title">Option 2</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__title">Option 3</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__title">Option 4</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__title">Option 5</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__title">Option 6</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;

DifferentStates.storyName = 'List different states';
DifferentStates.parameters = {
    docs: {
        iframeHeight: 300,
        description: {
            story: `
Simulate different states to show state behaviour between the items.

- For simulating hover state, use class \`is-hover\` on the menu item.
- For simulating active state, use class \`is-active\` on the menu item.
- For simulating selected state, use class \`is-selected\` on the menu item.
- For simulating selected-hover state, use classes \`is-selected is-hover\` on the menu item.
- For simulating disabled state, use class \`is-disabled\` on the menu item.

To remove default box shadow from menu containers use \`fd-menu__list--no-shadow\` or \`fd-menu__sublist--no-shadow\`.`
        }
    }
};

export const MenuIcon = () => `<nav class="fd-menu">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__addon-before"><i class="sap-icon--grid" role="presentation"></i></span>
                    <span class="fd-menu__title">Option 1</span>
                    <span class="fd-menu__addon-after"><i class="sap-icon--wrench" role="presentation"></i></span>
                </a>
        </li>
        <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__addon-before"><i class="sap-icon--accept" role="presentation"></i></span>
                    <span class="fd-menu__title">Option 2</span>
                    <span class="fd-menu__addon-after"><i class="sap-icon--history" role="presentation"></i></span>
                </a>
        </li>
        <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__addon-before"><i class="sap-icon--wrench" role="presentation"></i></span>
                    <span class="fd-menu__title">Option 3</span>
                    <span class="fd-menu__addon-after"><i class="sap-icon--lightbulb" role="presentation"></i></span>
                </a>
        </li>
        <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__addon-before"><i class="sap-icon--cart" role="presentation"></i></span>
                    <span class="fd-menu__title">Option 4</span>
                    <span class="fd-menu__shortcut">Ctrl + A</span>
                    <span class="fd-menu__addon-after"><i class="sap-icon--history" role="presentation"></i></span>
                </a>
        </li>
    </ul>
</nav>
`;

MenuIcon.storyName = 'List with Icon';
MenuIcon.parameters = {
    docs: {
        iframeHeight: 220,
        description: {
            story: `
To create an addon before or after \`fd-menu__title\` element, use elements with folowing classes inside \`fd-menu__link\`:
- \`fd-menu__addon-before\`   - styles addon befotre \`fd-menu__title\`
- \`fd-menu__addon-after\`    - styles addon after \`fd-menu__title\`
- \`fd-menu__shortcut\`       - styles shortcut placed after \`fd-menu__title\`
According to Fiori3 design shortcuts should be on desktop devices.`
        }
    }
};

export const WithSubmenu = () => `<nav class="fd-menu">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 1</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
        <!-- For submenu, have the parent menu item in its own span so that its states do not override the submenu states -->
            <span
                class="fd-menu__link has-child is-expanded"
                aria-controls="EX100M2"
                aria-expanded="true"
                aria-haspopup="true"
                role="menuitem"
                onclick = onPopoverClick('EX100M2')>
                    <span class="fd-menu__title">Option 2 with submenu</span>
                    <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
            </span>
            <ul class="fd-menu__sublist" id="EX100M2" aria-hidden="false" role="menu">
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <span class="fd-menu__title">Sub-option 1</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <span class="fd-menu__title">Sub-option 2</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <span class="fd-menu__title">Sub-option 3</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <span class="fd-menu__title">Sub-option 4</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <span class="fd-menu__title">Sub-option 5 with very very very very long text</span>
                    </a>
                </li>
            </ul>
        </li>
        <span class="fd-menu__separator"></span>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 3</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 4</span>
            </a>
        </li>
    </ul>
</nav>
<div style="min-height: 75px"></div>
`;
WithSubmenu.parameters = {
    docs: {
        iframeHeight: 400,
        description: {
            story: `
Menu with an additional submenu that can be used for items that can be further grouped under a level but not necessarily visible to user always.

For a submenu, do the following:
- Specify \`fd-menu__link\` class normally like other items. Use \`has-child\` class to apply styles for parent containing the submenu.
- Create an addon indicating submenu level using \`fd-menu__addon-after--submenu\` class and an icon.
- After the end of the \`fd-menu__link\` container, use \`fd-menu__sublist\` class in its own \`<ul>\`
- Follow the same template for submenu as you would for a normal menu. The same \`fd-menu__item\` and \`fd-menu__link\` works for the subitems too.
`
        }
    }
};
