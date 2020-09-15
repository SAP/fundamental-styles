import '../../dist/button.css';
import '../../dist/icon.css';
import '../../dist/menu.css';
import '../../dist/title.css';

export default {
    title: 'Components/Menu',
    parameters: {
        tags: ['f3', 'a11y', 'theme', 'development'],
        description: `The menu component displays a dropdown menu with multiple actions, which is usually triggered by a menu button. Visually, actions can be either divided by a separator or grouped together in a submenu. Menu is commonly used with the **Popover** component.
`
    }
};


export const tablet = () => `   
<label class="fd-form-label">Default menu (tablet)</label><br/><br/>

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
`;

tablet.storyName = 'Default (tablet)';
tablet.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: 'The default menu is optimized for tablet. To display a default menu, add the <code>fd-menu\\_\\_list</code> class to the main element. To display options or actions, wrap the <code>fd-menu\\_\\_title</code> in the <code>fd-menu\\_\\_link</code> and <code>fd-menu\\_\\_item</code> classes.'
    }
};

export const desktop = () => `   
<label class="fd-form-label">Desktop menu (compact)</label><br/><br/>

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

desktop.storyName = 'Desktop';
desktop.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: 'To display the compact menu for desktop, add the <code>fd-menu--compact</code> modifier class to the main element.'
    }
};

export const mobileCozyMode = () => `
<div style="width: 50%; display: inline-block" class="fd-dialog fd-dialog-docs-static fd-select-docs-max-height fd-dialog--active" id="select-dialog-example">
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
                            <span class="fd-menu__addon-before sap-icon--grid"></span>
                            <span class="fd-menu__title">Option 1</span>
                            <span class="fd-menu__addon-after sap-icon--wrench"></span> 
                        </a>
                    </li>
                    <li class="fd-menu__item" role="presentation">
                        <a class="fd-menu__link is-active" href="#" role="menuitem">
                            <span class="fd-menu__addon-before sap-icon--accept"></span>
                            <span class="fd-menu__title">Option 2</span>
                            <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                        </a>
                    </li>
                    <li class="fd-menu__item" role="presentation">
                        <a class="fd-menu__link" href="#" role="menuitem">
                            <span class="fd-menu__addon-before sap-icon--history"></span>
                            <span class="fd-menu__title">Option 3</span>
                            <span class="fd-menu__addon-after sap-icon--lightbulb"></span>
                        </a>
                    </li>
                    <li class="fd-menu__item" role="presentation">
                        <a class="fd-menu__link" href="#" role="menuitem">
                            <span class="fd-menu__addon-before sap-icon--grid"></span>
                            <span class="fd-menu__title">Option 4</span>
                            <span class="fd-menu__addon-after sap-icon--history"></span>
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
                    <i class="sap-icon--navigation-left-arrow"></i>
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

mobileCozyMode.storyName = 'Mobile';
mobileCozyMode.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: 'On a mobile screen, menu is displayed within a **Dialog** and uses its structure. However, you can add the <code>fd menu fd-menu--mobile</code> modifier class to dialog\'s body container to display a menu.'
    }
};

export const seperatedItems = () => `
<nav class="fd-menu">
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

seperatedItems.storyName = 'Separators';
seperatedItems.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: `Menu can display separators between menu items. To display a separator, add the <code>fd-menu\\_\\_separator</code> wrapped in <code>span</code> tags after the list item where you want the separation.
        `
    }
};

export const differentStates = () => `
<div style="width: 50%; display: inline-block">
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

differentStates.storyName = 'States';
differentStates.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: `The list items in a menu can display different state behaviours by adding certain classes to the menu items. You can also remove the default box shadow from menu containers by using either <code>fd-menu\\_\\_list—no-shadow</code> or <code>fd-menu\\_\\_sublist—no-shadow</code>.

| **States** | **Class** |
| ------: | :------ |
| Regular | _n/a_ |
| Hover | <code>is-hover</code> |
| Active | <code>is-active</code> |
| Selected | <code>is-selected</code> |
| Selected (Hover) | <code>is-selected is-hover</code> |
| Disabled | <code>is-disabled</code> |
        `
    }
};

export const menuIcon = () => `
<nav class="fd-menu">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__addon-before sap-icon--grid"></span>
                    <span class="fd-menu__title">Option 1</span>
                    <span class="fd-menu__addon-after sap-icon--wrench"></span>
                </a>
        </li>
        <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__addon-before sap-icon--accept"></span>
                    <span class="fd-menu__title">Option 2</span>
                    <span class="fd-menu__addon-after sap-icon--history"></span>
                </a>            
        </li>
        <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__addon-before sap-icon--wrench"></span>
                    <span class="fd-menu__title">Option 3</span>
                    <span class="fd-menu__addon-after sap-icon--lightbulb"></span>
                </a>
        </li>
        <li class="fd-menu__item" role="presentation">            
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__addon-before sap-icon--cart"></span>
                    <span class="fd-menu__title">Option 4</span>
                    <span class="fd-menu__shortcut">Ctrl + A</span>
                    <span class="fd-menu__addon-after sap-icon--history"></span>
                </a>
        </li>
    </ul>
</nav>
`;

menuIcon.storyName = 'Icons';
menuIcon.parameters = {
    docs: {
        iframeHeight: 220,
        storyDescription: `Menu can display icons on either side of the menu items. To display icons, place the addon class before or after the <code>fd-menu\\_\\_title</code> class. In the case that you want the icon to display before the text in the menu item, add the <code>fd-menu\\_\\_addon-before</code>.

| Displays addon… | Class |
| -------------------: | :---------------------- |
| Before text | <code>fd-menu\\_\\_addon-before</code> |
| After text | <code>fd-menu\\_\\_addon-after</code> |
        `
    }
};

export const withSubmenu = () => `
<nav class="fd-menu">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item" role="presentation">            
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 1</span>  
            </a>          
        </li>
        <li class="fd-menu__item" role="presentation">
        <!-- For submenu, have the parent menu item in its own span so that its states do not override the submenu states -->
            <a class="fd-menu__link has-child" aria-controls="EX100M2" href="#" aria-haspopup="true" role="menuitem" onclick = onPopoverClick('EX100M2')>
                <span class="fd-menu__title">Option 2 with submenu</span>
                <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span> 
            </a>       
            <ul class="fd-menu__sublist" id="EX100M2" aria-hidden="true" role="menu">
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
withSubmenu.storyName = 'Submenu';
withSubmenu.parameters = {
    docs: {
        iframeHeight: 220,
        storyDescription: `
Menu can display an additional submenu that further groups the list items into a secondary level that is not visible until selected. 

**To display a submenu:**

-	Add the <code>has-child</code> class to the <code>fd-menu\\_\\_link</code> container.
-	Then add a <code>fd-menu\\_\\_addon-after--submenu</code> class (with an icon) after the title of the menu item where you want the submenu.
-	On the next line, add the <code>fd-menu\\_\\_sublist</code> with its own unordered list (where the submenu items will be).


Note: The same <code>fd-menu\\_\\_item</code> and <code>fd-menu\\_\\_link</code> classes can be used for submenu items too.
        
`
    }
};

export const RTL = () => `
<nav class="fd-menu" dir="rtl">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__addon-before sap-icon--grid"></span>
                <span class="fd-menu__title">Option 1</span>
                <span class="fd-menu__addon-after sap-icon--history"></span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__addon-before sap-icon--accept"></span>
                <span class="fd-menu__title">Option 2</span>
                <span class="fd-menu__addon-after sap-icon--grid"></span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__addon-before sap-icon--history"></span>
                <span class="fd-menu__title">Option 3</span>
                <span class="fd-menu__addon-after sap-icon--cart"></span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__addon-before sap-icon--grid"></span>
                <span class="fd-menu__title">Option 4</span>
                <span class="fd-menu__addon-after sap-icon--lightbulb"></span>
            </a>
        </li>
    </ul>
</nav>
`;

RTL.parameters = {
    docs: {
        iframeHeight: 220,
        storyDescription: 'The menu can be displayed from right to left so it may be used internationally. '
    }
};
