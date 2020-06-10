import '../../dist/menu.css';

export default {
    title: 'Components/Menu',
    parameters: {
        description: `
The menu component is the listing structure with optional headers to create menus.
Commonly used as the contents when composing "dropdowns", "contextual menus", etc, when paired with the popover component.
        `,
        tags: ['f3', 'a11y', 'theme']
    }
};

const iframeHeight = 300;

export const structure = () => `
<div class="side-by-side">    
    <div>    
        <label class="fd-form-label">Combobox Tablet Cozy Mode - default mode</label><br/><br/>
        
        <nav class="fd-menu" aria-label="Tablet menu">
            <ul class="fd-menu__list" role="menu">
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" role="menuitem">
                        <span class="fd-menu__title">Option 1</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" role="menuitem">
                        <span class="fd-menu__title">Option 2</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" role="menuitem">
                        <span class="fd-menu__title">Option 3</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" role="menuitem">
                        <span class="fd-menu__title">Option 4</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
    
    <div>
        <label class="fd-form-label">Combobox Desktop Compact Mode</label><br/><br/>
        
        <nav class="fd-menu fd-menu--compact" aria-label="Desktop menu">
            <ul class="fd-menu__list" role="menu">
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" role="menuitem">
                        <span class="fd-menu__title">Option 1</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" role="menuitem">
                        <span class="fd-menu__title">Option 2</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" role="menuitem">
                        <span class="fd-menu__title">Option 3</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" role="menuitem">
                        <span class="fd-menu__title">Option 4</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>
`;

structure.storyName = 'Dektop and table mode';
structure.parameters = {
    docs: {
        iframeHeight,
        storyDescription: `
The basic stucture of a menu. 
Place the menu item title in a \`<span>\` tag using class \`fd-menu__title\` and wrap it in the \`fd-menu__link\` and \`fd-menu__item\` classes as shown.

Default mode is the cozy tablet mode, no class has to be added for this.
Use class modifier\`fd-menu--compact\` on menu container level for desktop mode. 
`
    }
};

export const mobile = () => `
<div class="side-by-side">
    <div>
        <div class="fd-dialog fd-dialog-docs-static fd-select-docs-max-height fd-dialog--active" id="select-dialog-example">
        <div class="fd-dialog__content fd-dialog__content--mobile">
            <header class="fd-dialog__header fd-bar fd-bar--header">
                <div class="fd-bar__left">
                    <div class="fd-bar__element">
                        <h3 class="fd-dialog__title">
                            Menu title
                        </h3>
                    </div>
                </div>
            </header>
            <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
                 <nav class="fd-menu fd-menu--mobile" aria-label="Mobile menu" aria-hidden="true" id="parent-menu">
                    <ul class="fd-menu__list" role="menu">
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" role="menuitem">
                                <span class="fd-menu__addon-before sap-icon--grid"></span>
                                <span class="fd-menu__title">Option 1</span>
                                <span class="fd-menu__addon-after sap-icon--wrench"></span> 
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link is-active" role="menuitem">
                                <span class="fd-menu__addon-before sap-icon--accept"></span>
                                <span class="fd-menu__title">Option 2</span>
                                <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" role="menuitem">
                                <span class="fd-menu__addon-before sap-icon--history"></span>
                                <span class="fd-menu__title">Option 3</span>
                                <span class="fd-menu__addon-after sap-icon--lightbulb"></span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" role="menuitem">
                                <span class="fd-menu__addon-before sap-icon--grid"></span>
                                <span class="fd-menu__title">Option 4</span>
                                <span class="fd-menu__addon-after sap-icon--history"></span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
           <footer class="fd-dialog__footer fd-bar fd-bar--cosy fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--light fd-dialog__decisive-button">Cancel</button>
                    </div>
                </div>
            </footer>
        </div>
    </div>
    </div>
    <div>
        <div class="fd-dialog fd-dialog-docs-static fd-select-docs-max-height fd-dialog--active" id="select-dialog-example">
        <div class="fd-dialog__content fd-dialog__content--mobile">
            <header class="fd-dialog__header fd-bar fd-bar--header">
                <div class="fd-bar__left">
                    <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent sap-icon--navigation-left-arrow"></button>
                </div>
                <div class="fd-bar__element">
                        <h3 class="fd-dialog__title">
                            Option 2
                        </h3>
                    </div>
                </div>
            </header>
            <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
                 <nav class="fd-menu fd-menu--mobile" aria-label="Mobile menu sublevel">
                    <ul class="fd-menu__sublist" role="menu">
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" role="menuitem">
                                <span class="fd-menu__title">Sub-option 1</span>
                            </a>                    
                        </li>
                        <li class="fd-menu__item" role="presentation">                    
                            <a class="fd-menu__link" role="menuitem">
                                <span class="fd-menu__title">Sub-option 2</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">                    
                            <a class="fd-menu__link" role="menuitem">
                                <span class="fd-menu__title">Sub-option 3</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">                    
                            <a class="fd-menu__link" role="menuitem">
                                <span class="fd-menu__title">Sub-option 4</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
           <footer class="fd-dialog__footer fd-bar fd-bar--cosy fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--light fd-dialog__decisive-button">Cancel</button>
                    </div>
                </div>
            </footer>
        </div>
    </div>
    </div>
</div>
`;

mobile.storyName = 'Mobile mode';
mobile.parameters = {
    docs: {
        iframeHeight,
        storyDescription: `
The basic stucture of a menu in mobile where it opens as a dialog. Use class \`fd-menu--mobile\` on menu container level.
Example shows the parent menu's item in active state to simulate a pressed/touched event. Submenu appears in its own fullscreen dialog in mobile devices. The device's back button takes one back to the parent menu fullscreen dialog.
`
    }
};

export const separator = () => `
<nav class="fd-menu" aria-label="Menu with separator">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" role="menuitem">
                <span class="fd-menu__title">Option 1</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" role="menuitem">
                <span class="fd-menu__title">Option 2</span>
            </a>
        </li>
        <span class="fd-menu__separator"></span>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" role="menuitem">
                <span class="fd-menu__title">Option 3</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" role="menuitem">
                <span class="fd-menu__title">Option 4</span>
            </a>
        </li>
        <span class="fd-menu__separator"></span>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" role="menuitem">
                <span class="fd-menu__title">Option 5</span>
            </a>
        </li>
    </ul>
</nav>
`;

separator.storyName = 'Separator';
separator.parameters = {
    docs: {
        iframeHeight,
        storyDescription: `
To add separators between the items, use the class \`fd-menu__separator\` in its own
\`<span>\` after the \`<li>\` item where you want the separation.
`
    }
};

export const states = () => `
<div class="side-by-side">

    <nav class="fd-menu" aria-label="Menu sates">
        <ul class="fd-menu__list" role="menu">
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" role="menuitem">
                    <span class="fd-menu__title">Option 1- Regular</span>
                </a>
            </li>
             <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link is-hover" role="menuitem">
                    <span class="fd-menu__title">Option 2 - Hover</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link is-active" role="menuitem">
                    <span class="fd-menu__title">Option 3 - Active</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link is-selected" role="menuitem">
                    <span class="fd-menu__title">Option 4 - Selected</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link is-selected is-hover" role="menuitem">
                    <span class="fd-menu__title">Option 5 - Selected-Hover</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link is-disabled" role="menuitem">
                    <span class="fd-menu__title">Option 6 - Disabled</span>
                </a>
            </li>
        </ul>
    </nav>

    <nav class="fd-menu" aria-label="Menu borderless">
        <ul class="fd-menu__list fd-menu__list--no-shadow" role="menu">
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" role="menuitem">
                    <span class="fd-menu__title">Option 1</span>
                </a>                    
            </li>
            <li class="fd-menu__item" role="presentation">                    
                <a class="fd-menu__link" role="menuitem">
                    <span class="fd-menu__title">Option 2</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">                    
                <a class="fd-menu__link" role="menuitem">
                    <span class="fd-menu__title">Option 3</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">                    
                <a class="fd-menu__link" role="menuitem">
                    <span class="fd-menu__title">Option 4</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">                    
                <a class="fd-menu__link" role="menuitem">
                    <span class="fd-menu__title">Option 5</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">                    
                <a class="fd-menu__link" role="menuitem">
                    <span class="fd-menu__title">Option 6</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;

states.storyName = 'States';
states.parameters = {
    docs: {
        iframeHeight,
        storyDescription: `
Simulate different states to show state behaviour between the items.
- For simulating hover state, use class \`is-hover\` on the menu item.
- For simulating active state, use class \`is-active\` on the menu item.
- For simulating selected state, use class \`is-selected\` on the menu item.
- For simulating selected-hover state, use classes \`is-selected is-hover\` on the menu item.
- For simulating disabled state, use class \`is-disabled\` on the menu item.

To remove default box shadow from menu containers use \`fd-menu__list--no-shadow\` or \`fd-menu__sublist--no-shadow\`.
`
    }
};

export const addons = () => `
<nav class="fd-menu" aria-label="Menu addons">
        <ul class="fd-menu__list" role="menu">
            <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" role="menuitem">
                        <span class="fd-menu__addon-before sap-icon--grid"></span>
                        <span class="fd-menu__title">Option 1</span>
                        <span class="fd-menu__addon-after sap-icon--wrench"></span>
                    </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" role="menuitem">
                        <span class="fd-menu__addon-before sap-icon--accept"></span>
                        <span class="fd-menu__title">Option 2</span>
                        <span class="fd-menu__addon-after sap-icon--history"></span>
                    </a>            
            </li>
            <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" role="menuitem">
                        <span class="fd-menu__addon-before sap-icon--wrench"></span>
                        <span class="fd-menu__title">Option 3</span>
                        <span class="fd-menu__addon-after sap-icon--lightbulb"></span>
                    </a>
            </li>
            <li class="fd-menu__item" role="presentation">            
                    <a class="fd-menu__link" role="menuitem">
                        <span class="fd-menu__addon-before sap-icon--cart"></span>
                        <span class="fd-menu__title">Option 4</span>
                        <span class="fd-menu__shortcut">Ctrl + A</span>
                        <span class="fd-menu__addon-after sap-icon--history"></span>
                    </a>
            </li>
        </ul>
    </nav>
`;

addons.storyName = 'Addons';
addons.parameters = {
    docs: {
        iframeHeight,
        storyDescription: `
To create an addon before or after \`fd-menu__title\` element, use elements with folowing classes inside \`fd-menu__link\`:
- \`fd-menu__addon-before\`   - styles addon befotre \`fd-menu__title\`
- \`fd-menu__addon-after\`    - styles addon after \`fd-menu__title\`
- \`fd-menu__shortcut\`       - styles shortcut placed after \`fd-menu__title\`
According to Fiori3 design shortcuts should be on desktop devices.
`
    }
};

export const submenu = () => `
<nav class="fd-menu" aria-label="">
        <ul class="fd-menu__list" role="menu">
            <li class="fd-menu__item" role="presentation">            
                <a class="fd-menu__link" role="menuitem">
                    <span class="fd-menu__title">Option 1</span>  
                </a>          
            </li>
            <li class="fd-menu__item" role="presentation">
            <!-- For submenu, have the parent menu item in its own span so that its states do not override the submenu states -->
                <a class="fd-menu__link has-child" aria-controls="EX100M2" aria-haspopup="true" role="menuitem">
                    <span class="fd-menu__title">Option 2 with submenu</span>
                    <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span> 
                </a>       
                <ul class="fd-menu__sublist" id="EX100M2" aria-hidden="true" role="menu">
                    <li class="fd-menu__item" role="presentation">
                        <a class="fd-menu__link" role="menuitem">
                            <span class="fd-menu__title">Sub-option 1</span>
                        </a>                    
                    </li>
                    <li class="fd-menu__item" role="presentation">                    
                        <a class="fd-menu__link" role="menuitem">
                            <span class="fd-menu__title">Sub-option 2</span>
                        </a>
                    </li>
                    <li class="fd-menu__item" role="presentation">                    
                        <a class="fd-menu__link" role="menuitem">
                            <span class="fd-menu__title">Sub-option 3</span>
                        </a>
                    </li>
                    <li class="fd-menu__item" role="presentation">                    
                        <a class="fd-menu__link" role="menuitem">
                            <span class="fd-menu__title">Sub-option 4</span>
                        </a>
                    </li>
                </ul>
            </li>
            <span class="fd-menu__separator"></span>
            <li class="fd-menu__item" role="presentation">            
                <a class="fd-menu__link" role="menuitem">
                    <span class="fd-menu__title">Option 3</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">            
                <a class="fd-menu__link" role="menuitem">
                    <span class="fd-menu__title">Option 4</span>
                </a>
            </li>        
        </ul>
    </nav>
`;

submenu.storyName = 'Submenu';
submenu.parameters = {
    docs: {
        iframeHeight,
        storyDescription: `
Menu with an additional submenu that can be used for items that can be further grouped under a level but not necessarily visible to user always.
For a submenu, do the following:
- Specify \`fd-menu__link\` class normally like other items. Use \`has-child\` class to apply styles for parent containing the submenu.
- Create an addon indicating submenu level using \`fd-menu__addon-after--submenu\` class and an icon.
- After the end of the \`fd-menu__link\` container, use \`fd-menu__sublist\` class in its own \`<ul>\` 
- Follow the same template for submenu as you would for a normal menu. The same \`fd-menu__item\` and \`fd-menu__link\` works for the subitems too.
`
    }
};

export const rtl = () => `
<nav class="fd-menu" dir="rtl" aria-label="Rtl menu">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" role="menuitem">
                <span class="fd-menu__addon-before sap-icon--grid"></span>
                <span class="fd-menu__title">Option 1</span>
                <span class="fd-menu__addon-after sap-icon--history"></span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" role="menuitem">
                <span class="fd-menu__addon-before sap-icon--accept"></span>
                <span class="fd-menu__title">Option 2</span>
                <span class="fd-menu__addon-after sap-icon--grid"></span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" role="menuitem">
                <span class="fd-menu__addon-before sap-icon--history"></span>
                <span class="fd-menu__title">Option 3</span>
                <span class="fd-menu__addon-after sap-icon--cart"></span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" role="menuitem">
                <span class="fd-menu__addon-before sap-icon--grid"></span>
                <span class="fd-menu__title">Option 4</span>
                <span class="fd-menu__addon-after sap-icon--lightbulb"></span>
            </a>
        </li>
    </ul>
</nav>
`;

rtl.storyName = 'Rtl';
rtl.parameters = {
    docs: {
        iframeHeight,
        storyDescription: 'The basic structure of a menu in RTL simulated mode.'
    }
};
