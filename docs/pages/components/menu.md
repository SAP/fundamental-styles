---
title: Menu
id: menu
keywords: menu
sidebar: left-navigation-sidebar
toc: false
permalink: components/menu.html
folder: components
summary:
---

The menu component is the listing structure with optional headers to create menus.
{: .docs-intro}
Commonly used as the contents when composing "dropdowns", "contextual menus", etc, when paired with the popover component.

> {{ site.data.strings.headerDisclaimer }}

## Menu - Desktop and Tablet Modes

The basic stucture of a menu. 
Place the menu item title in a `<span>` tag using class `fd-menu__title` and wrap it in the `fd-menu__link` and `fd-menu__item` classes as shown.
Default mode is the cozy tablet mode, no class has to be added for this.
Use class modifier`fd-menu--compact` on menu container level for desktop mode. 

{% capture default-menu %}

<div style="width: 50%; display: inline-block">    
    <label class="fd-form-label">Combobox Tablet Cozy Mode - default mode</label><br/><br/>
    
    <nav class="fd-menu">
        <ul class="fd-menu__list">
            <li class="fd-menu__item">
                <a class="fd-menu__link" href="#">
                    <span class="fd-menu__title">Option 1</span>
                </a>
            </li>
            <li class="fd-menu__item">
                <a class="fd-menu__link" href="#">
                    <span class="fd-menu__title">Option 2</span>
                </a>
            </li>
            <li class="fd-menu__item">
                <a class="fd-menu__link" href="#">
                    <span class="fd-menu__title">Option 3</span>
                </a>
            </li>
            <li class="fd-menu__item">
                <a class="fd-menu__link" href="#">
                    <span class="fd-menu__title">Option 4</span>
                </a>
            </li>
        </ul>
    </nav>
</div>

<div style="display: inline-block">
    <label class="fd-form-label">Combobox Desktop Compact Mode</label><br/><br/>
    
    <nav class="fd-menu fd-menu--compact">
        <ul class="fd-menu__list">
            <li class="fd-menu__item">
                <a class="fd-menu__link" href="#">
                    <span class="fd-menu__title">Option 1</span>
                </a>
            </li>
            <li class="fd-menu__item">
                <a class="fd-menu__link" href="#">
                    <span class="fd-menu__title">Option 2</span>
                </a>
            </li>
            <li class="fd-menu__item">
                <a class="fd-menu__link" href="#">
                    <span class="fd-menu__title">Option 3</span>
                </a>
            </li>
            <li class="fd-menu__item">
                <a class="fd-menu__link" href="#">
                    <span class="fd-menu__title">Option 4</span>
                </a>
            </li>
        </ul>
    </nav>
</div>

{% endcapture %}

{% include display-component.html component=default-menu %}

## Menu - Mobile Cozy Mode

The basic stucture of a menu in mobile where it opens as a dialog. Use class `fd-menu--mobile` on menu container level.
Example shows the parent menu's item in active state to simulate a pressed/touched event. 

{% capture default-menuwgroup %}

<div class="fd-dialog fd-dialog-docs-static fd-select-docs-max-height fd-dialog--active" id="select-dialog-example">
    <div class="fd-dialog__content fd-dialog__content--mobile">
        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 class="fd-dialog__title">
                        Example Submenu
                    </h3>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
             <nav class="fd-menu fd-menu--mobile" aria-hidden="true" id="parent-menu">
                <ul class="fd-menu__list">
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__addon-before sap-icon--grid"></span>
                            <span class="fd-menu__title">Option 1</span>
                            <span class="fd-menu__addon-after sap-icon--wrench"></span> 
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a class="fd-menu__link is-active" href="#">
                            <span class="fd-menu__addon-before sap-icon--accept"></span>
                            <span class="fd-menu__title">Option 2</span>
                            <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__addon-before sap-icon--history"></span>
                            <span class="fd-menu__title">Option 3</span>
                            <span class="fd-menu__addon-after sap-icon--lightbulb"></span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
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

<br />
<br />
<h4> Submenu appears in its own fullscreen dialog in mobile devices. The device's back button takes one back to the parent menu fullscreen dialog.
</h4>
<br />
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
             <nav class="fd-menu fd-menu--mobile">
                <ul class="fd-menu__sublist" style="position:relative; left:0; margin:0;">
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Sub-option 1</span>
                        </a>                    
                    </li>
                    <li class="fd-menu__item">                    
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Sub-option 2</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">                    
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Sub-option 3</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">                    
                        <a class="fd-menu__link" href="#">
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

{% endcapture %}

{% include display-component.html component=default-menuwgroup %}

## Menu list with separated items

To add separators between the items, use the class `fd-menu__separator` in its own `<span>` after the `<li>` item where you want the separation.

{% capture default-menuwgroup %}

<nav class="fd-menu">
    <ul class="fd-menu__list">
        <li class="fd-menu__item">
            <a class="fd-menu__link" href="#">
                <span class="fd-menu__title">Option 1</span>
            </a>
        </li>
        <li class="fd-menu__item">
            <a class="fd-menu__link" href="#">
                <span class="fd-menu__title">Option 2</span>
            </a>
        </li>
        <span class="fd-menu__separator"></span>
        <li class="fd-menu__item">
            <a class="fd-menu__link" href="#">
                <span class="fd-menu__title">Option 3</span>
            </a>
        </li>
        <li class="fd-menu__item">
            <a class="fd-menu__link" href="#">
                <span class="fd-menu__title">Option 4</span>
            </a>
        </li>
        <span class="fd-menu__separator"></span>
        <li class="fd-menu__item">
            <a class="fd-menu__link" href="#">
                <span class="fd-menu__title">Option 5</span>
            </a>
        </li>
    </ul>
</nav>
{% endcapture %}

{% include display-component.html component=default-menuwgroup %}

## Menu list with different states

Simulate different states to show state behaviour between the items.
- For simulating hover state, use class `is-hover` on the menu item.
- For simulating active state, use class `is-active` on the menu item.
- For simulating selected state, use class `is-selected` on the menu item.
- For simulating selected-hover state, use classes `is-selected is-hover` on the menu item.
- For simulating disabled state, use class `is-disabled` on the menu item.

To remove default box shadow from menu containers use `fd-menu__list--no-shadow` or `fd-menu__sublist--no-shadow`.

{% capture default-menuwgroup %}
<div style="width: 50%; display: inline-block">
    <nav class="fd-menu">
        <ul class="fd-menu__list">
            <li class="fd-menu__item">
                <a class="fd-menu__link" href="#">
                    <span class="fd-menu__title">Option 1- Regular</span>
                </a>
            </li>
             <li class="fd-menu__item">
                <a class="fd-menu__link is-hover" href="#">
                    <span class="fd-menu__title">Option 2 - Hover</span>
                </a>
            </li>
            <li class="fd-menu__item">
                <a class="fd-menu__link is-active" href="#">
                    <span class="fd-menu__title">Option 3 - Active</span>
                </a>
            </li>
            <li class="fd-menu__item">
                <a class="fd-menu__link is-selected" href="#">
                    <span class="fd-menu__title">Option 4 - Selected</span>
                </a>
            </li>
            <li class="fd-menu__item">
                <a class="fd-menu__link is-selected is-hover" href="#">
                    <span class="fd-menu__title">Option 5 - Selected-Hover</span>
                </a>
            </li>
            <li class="fd-menu__item">
                <a class="fd-menu__link is-disabled" href="#">
                    <span class="fd-menu__title">Option 6 - Disabled</span>
                </a>
            </li>
        </ul>
    </nav>
</div>

<div style="width: 49%; display: inline-block">
    <nav class="fd-menu">
        <ul class="fd-menu__list fd-menu__list--no-shadow">
            <li class="fd-menu__item">
                <a class="fd-menu__link" href="#">
                    <span class="fd-menu__title">Option 1</span>
                </a>                    
            </li>
            <li class="fd-menu__item">                    
                <a class="fd-menu__link" href="#">
                    <span class="fd-menu__title">Option 2</span>
                </a>
            </li>
            <li class="fd-menu__item">                    
                <a class="fd-menu__link" href="#">
                    <span class="fd-menu__title">Option 3</span>
                </a>
            </li>
            <li class="fd-menu__item">                    
                <a class="fd-menu__link" href="#">
                    <span class="fd-menu__title">Option 4</span>
                </a>
            </li>
            <li class="fd-menu__item">                    
                <a class="fd-menu__link" href="#">
                    <span class="fd-menu__title">Option 5</span>
                </a>
            </li>
            <li class="fd-menu__item">                    
                <a class="fd-menu__link" href="#">
                    <span class="fd-menu__title">Option 6</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
{% endcapture %}

{% include display-component.html component=default-menuwgroup %}

## Menu with addon containers

This is an additional container that can be used for an icon before or/and after the menu item text. Use `fd-menu__addon-before` in its own `<span>` to get an icon at the start of the item, and `fd-menu__addon-after` in its own `<span>` to get an icon at the end of the item.
Wrap these the same way `fd-menu__title` is wrapped, inside `fd-menu__link` and `fd-menu__item` classes.

{% capture default-menuwgroup %}

<nav class="fd-menu">
    <ul class="fd-menu__list">
        <li class="fd-menu__item">
                <a class="fd-menu__link" href="#">
                    <span class="fd-menu__addon-before sap-icon--grid"></span>
                    <span class="fd-menu__title">Option 1</span>
                    <span class="fd-menu__addon-after sap-icon--wrench"></span>
                </a>
        </li>
        <li class="fd-menu__item">
                <a class="fd-menu__link" href="#">
                    <span class="fd-menu__addon-before sap-icon--accept"></span>
                    <span class="fd-menu__title">Option 2</span>
                    <span class="fd-menu__addon-after sap-icon--history"></span>
                </a>            
        </li>
        <li class="fd-menu__item">
                <a class="fd-menu__link" href="#">
                    <span class="fd-menu__addon-before sap-icon--wrench"></span>
                    <span class="fd-menu__title">Option 3</span>
                    <span class="fd-menu__addon-after sap-icon--lightbulb"></span>
                </a>
        </li>
        <li class="fd-menu__item">            
                <a class="fd-menu__link" href="#">
                    <span class="fd-menu__addon-before sap-icon--cart"></span>
                    <span class="fd-menu__title">Option 4</span>
                    <span class="fd-menu__addon-after sap-icon--history"></span>
                </a>
        </li>
    </ul>
</nav>
{% endcapture %}

{% include display-component.html component=default-menuwgroup %}

## Menu with a submenu

Menu with an additional submenu that can be used for items that can be further grouped under a level but not necessarily visible to user always.
For a submenu, do the following:
- Specify `fd-menu__link` class normally like other items. Use `has-child` class to apply styles for parent containing the submenu.
- Also specify class `fd-menu__addon-after--submenu` for default right navigation arrow icon. If you want a custom icon, leave out this class and give your custom SAP icon name instead.
- After the end of the `fd-menu__link` container, use `fd-menu__sublist` class in its own `<ul>` 
- Follow the same template for submenu as you would for a normal menu. The same `fd-menu__item` and `fd-menu__link` works for the subitems too.

{% capture menu-submenu %}

<nav class="fd-menu">
    <ul class="fd-menu__list">
        <li class="fd-menu__item">            
            <a class="fd-menu__link" href="#">
                <span class="fd-menu__title">Option 1</span>  
            </a>          
        </li>
        <li class="fd-menu__item">
        <!-- For submenu, have the parent menu item in its own span so that its states do not override the submenu states -->
            <a class="fd-menu__link has-child" href="#" aria-controls="EX100M2" aria-haspopup="true">
                <span class="fd-menu__title">Option 2 with submenu</span>
                <span class="fd-menu__addon-after fd-menu__addon-after--submenu sap-icon--navigation-right-arrow"></span> 
            </a>       
            <ul class="fd-menu__sublist" id="EX100M2" aria-hidden="true">
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Sub-option 1</span>
                    </a>                    
                </li>
                <li class="fd-menu__item">                    
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Sub-option 2</span>
                    </a>
                </li>
                <li class="fd-menu__item">                    
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Sub-option 3</span>
                    </a>
                </li>
                <li class="fd-menu__item">                    
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Sub-option 4</span>
                    </a>
                </li>
            </ul>
        </li>
        <span class="fd-menu__separator"></span>
        <li class="fd-menu__item">            
            <a class="fd-menu__link" href="#">
                <span class="fd-menu__title">Option 3</span>
            </a>
        </li>
        <li class="fd-menu__item">            
            <a class="fd-menu__link" href="#">
                <span class="fd-menu__title">Option 4</span>
            </a>
        </li>        
    </ul>
</nav>
{% endcapture %}

{% include display-component.html component=menu-submenu %}

## Menu and A11y

To support best accessibility practices use following features:
- Add `role="menu"` to  `<ul>` elements
- Add `role="presentation"` to `<li>` elements
- Add `role="menuitem"` to `<a>` elements 

{% capture menu-a11y %}
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
{% endcapture %}

{% include display-component.html component=menu-a11y %}


## Menu with RTL mode

The basic stucture of a menu in RTL simulated mode.

{% capture default-menu %}

<nav class="fd-menu" dir="rtl">
    <ul class="fd-menu__list">
        <li class="fd-menu__item">
            <a class="fd-menu__link" href="#">
                <span class="fd-menu__addon-before sap-icon--grid"></span>
                <span class="fd-menu__title">Option 1</span>
                <span class="fd-menu__addon-after sap-icon--history"></span>
            </a>
        </li>
        <li class="fd-menu__item">
            <a class="fd-menu__link" href="#">
                <span class="fd-menu__addon-before sap-icon--accept"></span>
                <span class="fd-menu__title">Option 2</span>
                <span class="fd-menu__addon-after sap-icon--grid"></span>
            </a>
        </li>
        <li class="fd-menu__item">
            <a class="fd-menu__link" href="#">
                <span class="fd-menu__addon-before sap-icon--history"></span>
                <span class="fd-menu__title">Option 3</span>
                <span class="fd-menu__addon-after sap-icon--cart"></span>
            </a>
        </li>
        <li class="fd-menu__item">
            <a class="fd-menu__link" href="#">
                <span class="fd-menu__addon-before sap-icon--grid"></span>
                <span class="fd-menu__title">Option 4</span>
                <span class="fd-menu__addon-after sap-icon--lightbulb"></span>
            </a>
        </li>
    </ul>
</nav>
{% endcapture %}

{% include display-component.html component=default-menu %}
