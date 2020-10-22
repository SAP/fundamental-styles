export default {
    title: 'Components/Menu',
    parameters: {
        tags: ['f3', 'a11y', 'theme', 'development'],
        description: `
The menu component is the listing structure with optional headers to create menus.

Commonly used as the contents when composing "dropdowns", "contextual menus", etc, when paired with the popover component.
`,
        components: ['bar', 'button', 'dialog', 'icon', 'menu', 'title']
    }
};


export const desktopAndTablet = () => `
<label class="fd-form-label">Combobox Tablet Cozy Mode - default mode</label><br/><br/>

<nav aria-label="fd-menu-nav" class="fd-menu">
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

desktopAndTablet.storyName = 'Desktop and Tablet Modes';
desktopAndTablet.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: 'The basic stucture of a menu. Place the menu item title in a `<span>` tag using class `fd-menu__title` and wrap it in the `fd-menu__link` and `fd-menu__item` classes as shown. Default mode is the cozy tablet mode, no class has to be added for this. Use class modifier`fd-menu--compact` on menu container level for desktop mode.'
    }
};

export const mobileCozyMode = () => `<div style="width: 50%; display: inline-block" class="fd-dialog fd-dialog-docs-static fd-select-docs-max-height fd-dialog--active" id="select-dialog-example">
    <div class="fd-dialog__content fd-dialog__content--mobile">
        <header aria-label="bar-header" class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 class="fd-title fd-title--h5">
                        Example Submenu
                    </h3>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
             <nav tabindex="-1" class="fd-menu fd-menu--mobile" aria-hidden="true" id="parent-menu">
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
       <footer aria-label="bar-footer" class="fd-dialog__footer fd-bar fd-bar--cozy fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button aria-label="fd-button" role="button" class="fd-button fd-button--light fd-dialog__decisive-button">Cancel</button>
                </div>
            </div>
        </footer>
    </div>
</div>

<div style="display: inline-block; width: auto;" class="fd-dialog fd-dialog-docs-static fd-select-docs-max-height fd-dialog--active" id="select-dialog-example-inner">
    <div class="fd-dialog__content fd-dialog__content--mobile">
        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                <button aria-label="fd-button" role="button" class="fd-button fd-button--transparent">
                    <i class="sap-icon--navigation-left-arrow" role="presentation"></i>
                </button>
            </div>
            <div class="fd-bar__element">
                    <h3 class="fd-title fd-title--h5">
                        Option 2
                    </h3>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
             <nav class="fd-menu fd-menu--mobile">
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
                </ul>
            </nav>
        </div>
       <footer class="fd-dialog__footer fd-bar fd-bar--cozy fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button aria-label="fd-button" role="button" class="fd-button fd-button--light fd-dialog__decisive-button">Cancel</button>
                </div>
            </div>
        </footer>
    </div>
</div>
`;

mobileCozyMode.storyName = 'Mobile Cozy Mode';
mobileCozyMode.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: 'The basic stucture of a menu in mobile where it opens as a dialog. Use class <code>fd-menu--mobile</code> on menu container level. Example shows the parent menu\'s item in active state to simulate a pressed/touched event. Submenu appears in its own fullscreen dialog in mobile devices. The device\'s back button takes one back to the parent menu fullscreen dialog.'
    }
};

export const seperatedItems = () => `<nav class="fd-menu">
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

seperatedItems.storyName = 'List with separated items';
seperatedItems.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: 'To add separators between the items, use the class `fd-menu__separator` in its own `<span>` after the `<li>` item where you want the separation.'
    }
};

export const differentStates = () => `<div style="width: 50%; display: inline-block">
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
                <a class="fd-menu__link is-disabled" href="#" role="menuitem">
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

differentStates.storyName = 'List different states';
differentStates.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: `
Simulate different states to show state behaviour between the items.

- For simulating hover state, use class <code>is-hover</code> on the menu item.
- For simulating active state, use class <code>is-active</code> on the menu item.
- For simulating selected state, use class <code>is-selected</code> on the menu item.
- For simulating selected-hover state, use classes <code>is-selected is-hover</code> on the menu item.
- For simulating disabled state, use class <code>is-disabled</code> on the menu item.

To remove default box shadow from menu containers use <code>fd-menu__list--no-shadow</code> or <code>fd-menu__sublist--no-shadow</code>.`
    }
};

export const menuIcon = () => `<nav class="fd-menu">
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

menuIcon.storyName = 'List with Icon';
menuIcon.parameters = {
    docs: {
        iframeHeight: 220,
        storyDescription: `
To create an addon before or after <code>fd-menu__title</code> element, use elements with folowing classes inside <code>fd-menu__link<code>:
- <code>fd-menu__addon-before</code>   - styles addon befotre <code>fd-menu__title</code>
- <code>fd-menu__addon-after</code>    - styles addon after <code>fd-menu__title</code>
- <code>fd-menu__shortcut</code>       - styles shortcut placed after <code>fd-menu__title</code>
According to Fiori3 design shortcuts should be on desktop devices.`
    }
};

export const withSubmenu = () => `<nav class="fd-menu">
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
`;
withSubmenu.parameters = {
    docs: {
        iframeHeight: 220,
        storyDescription: `
Menu with an additional submenu that can be used for items that can be further grouped under a level but not necessarily visible to user always.

For a submenu, do the following:
- Specify <code>fd-menu__link</code> class normally like other items. Use <code>has-child</code> class to apply styles for parent containing the submenu.
- Create an addon indicating submenu level using <code>fd-menu__addon-after--submenu</code> class and an icon.
- After the end of the <code>fd-menu__link</code> container, use <code>fd-menu__sublist</code> class in its own <code><ul><code>
- Follow the same template for submenu as you would for a normal menu. The same <code>fd-menu__item</code> and <code>fd-menu__link</code> works for the subitems too.
`
    }
};
