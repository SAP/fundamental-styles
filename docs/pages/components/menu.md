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

{% capture default-menu %}
<label class="fd-form-label">
Combobox Desktop Compact Mode
</label>
<br/>
<br/>

<nav class="fd-menu fd-menu--compact">
        <ul class="fd-menu__list">
            <li class="fd-menu__item" role="option" tabindex="0"><span class="fd-menu__title">Option 1 with very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long header</span></li>
            <li class="fd-menu__item" role="option" tabindex="0"><span class="fd-menu__title">Option 2</span></li>
            <li class="fd-menu__item" role="option" tabindex="0"><span class="fd-menu__title">Option 3</span></li>
            <li class="fd-menu__item" role="option" tabindex="0"><span class="fd-menu__title">Option 4</span></li>
        </ul>
</nav>
<br />
<br/>
<br/>
<label class="fd-form-label">
    Combobox Tablet Cozy Mode - default mode
</label>
<br/>
<br/>
<nav class="fd-menu">
        <ul class="fd-menu__list">
            <li class="fd-menu__item" role="option" tabindex="0"><span class="fd-menu__title">Option 1 with very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long header</span></li>
            <li class="fd-menu__item" role="option" tabindex="0"><span class="fd-menu__title">Option 2</span></li>
            <li class="fd-menu__item" role="option" tabindex="0"><span class="fd-menu__title">Option 3</span></li>
            <li class="fd-menu__item" role="option" tabindex="0"><span class="fd-menu__title">Option 4</span></li>
        </ul>
</nav>
{% endcapture %}

{% include display-component.html component=default-menu %}

## Menu - Mobile Cozy Mode

The basic stucture of a menu in mobile where it opens as a dialog.

{% capture default-menuwgroup %}

<div class="fd-dialog fd-dialog-docs-static fd-select-docs-max-height fd-dialog--active" id="select-dialog-example">
    <div class="fd-dialog__content">
        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 class="fd-dialog__title">
                        Area 51
                    </h3>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
             <nav class="fd-menu fd-menu--addon-before fd-menu--mobile">
                <ul class="fd-menu__list">
                    <li class="fd-menu__item" role="option" tabindex="0">                        
                            <span class="fd-menu__addon-before sap-icon--grid"></span>
                            <span class="fd-menu__title">Option 1 with two icons and very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long header</span>
                            <span class="fd-menu__addon-after sap-icon--cart"></span>                        
                    </li>
                    <li class="fd-menu__item" role="option" tabindex="0">                        
                            <span class="fd-menu__addon-before sap-icon--accept"></span>
                            <span class="fd-menu__title">Option 2 with one icon</span>                        
                    </li>
                    <li class="fd-menu__item" role="option" tabindex="0">                        
                            <span class="fd-menu__title">Option 3 with no icon and very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long header</span>
                            <span class="fd-menu__addon-after sap-icon--lightbulb"></span>                        
                    </li>
                    <li class="fd-menu__item" role="option" tabindex="0">                        
                            <span class="fd-menu__addon-before sap-icon--grid"></span>
                            <span class="fd-menu__title">Option 4 with two icons</span>
                            <span class="fd-menu__addon-after sap-icon--history"></span>                        
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

Use a modifier on the list element to add separators between the items.

{% capture default-menuwgroup %}

<nav class="fd-menu">
    <ul class="fd-menu__list">
        <li class="fd-menu__item" role="option" tabindex="0"><span class="fd-menu__title">Option 1</span>
        </li>
        <li class="fd-menu__item" role="option" tabindex="0"><span class="fd-menu__title">Option 2</span>
        </li>
        <span class="fd-menu__separator"></span>
        <li class="fd-menu__item" role="option" tabindex="0"><span class="fd-menu__title">Option 3</span>
        </li>
        <li class="fd-menu__item" role="option" tabindex="0"><span class="fd-menu__title">Option 4</span>
        </li>
        <span class="fd-menu__separator"></span>
        <li class="fd-menu__item" role="option" tabindex="0"><span class="fd-menu__title">Option 5</span>
        </li>
    </ul>
</nav>
{% endcapture %}

{% include display-component.html component=default-menuwgroup %}

## Menu list with different states

Simulate different states to show state behaviour between the items.

{% capture default-menuwgroup %}

<nav class="fd-menu">
    <ul class="fd-menu__list">
      <li class="fd-menu__item" role="option" tabindex="0"><span class="fd-menu__title">Option 1- Regular</span>
    </li>
      <li class="fd-menu__item is-hover" role="option" tabindex="0"><span class="fd-menu__title">Option 2 - Hover</span>
    </li>
      <li class="fd-menu__item is-active" role="option" tabindex="0"><span class="fd-menu__title">Option 3 - Active</span>
    </li>
      <li class="fd-menu__item is-selected" role="option" tabindex="0"><span class="fd-menu__title">Option 4 - Selected</span>
    </li>
      <li class="fd-menu__item is-selected is-hover" role="option" tabindex="0"><span class="fd-menu__title">Option 5 - Selected-Hover</span>
    </li>
      <li class="fd-menu__item is-disabled" role="option" tabindex="0"><span class="fd-menu__title">Option 6 - Disabled</span>
    </li>
    </ul>
</nav>
{% endcapture %}

{% include display-component.html component=default-menuwgroup %}

## Menu with addon containers

This is an additional container that can be used for an icon before or/and after the menu item text.

{% capture default-menuwgroup %}

<nav class="fd-menu fd-menu--addon-before">
    <ul class="fd-menu__list">
        <li class="fd-menu__item" role="option" tabindex="0">
                <span class="fd-menu__addon-before sap-icon--grid"></span>
                <span class="fd-menu__title">Option 1 with two icons and very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long header</span>
                <span class="fd-menu__addon-after sap-icon--wrench"></span>
        </li>
        <li class="fd-menu__item" role="option" tabindex="0">
                <span class="fd-menu__addon-before sap-icon--accept"></span>
                <span class="fd-menu__title">Option 2 with one icon</span>
        </li>
        <li class="fd-menu__item" role="option" tabindex="0">
                <span class="fd-menu__title">Option 3 with one icon and very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long header</span>
                <span class="fd-menu__addon-after sap-icon--lightbulb"></span>
        </li>
        <li class="fd-menu__item" role="option" tabindex="0">            
                <span class="fd-menu__addon-before sap-icon--cart"></span>
                <span class="fd-menu__title">Option 4 with two icons</span>
                <span class="fd-menu__addon-after sap-icon--history"></span>             
        </li>
    </ul>
</nav>
{% endcapture %}

{% include display-component.html component=default-menuwgroup %}

## Menu with a submenu

Menu with an additional submenu that can be used for items that can be further grouped under a level but not necessarily visible to user always.

{% capture default-menuwgroup %}

<nav class="fd-menu fd-menu--addon-before">
    <ul class="fd-menu__list">
        <li class="fd-menu__item" role="option" tabindex="0">            
                <span class="fd-menu__addon-before sap-icon--grid"></span>
                <span class="fd-menu__title">Option 1</span>            
        </li>
        <li>
        <!-- For submenu, have the parent menu item in its own span so that its states do not override the submenu states -->
            <span class="fd-menu__item is-selected" role="option" tabindex="0">
                <span class="fd-menu__addon-before sap-icon--grid"></span>
                <span class="fd-menu__title">Option 2 with submenu</span>
                <span class="fd-menu__addon-after fd-menu__addon-after--submenu sap-icon--navigation-right-arrow"></span>        
            </span>    
            <ul class="fd-menu__sublist">
                <li class="fd-menu__item" role="option" tabindex="0">
                            <span class="fd-menu__title">Sub-option 1</span>                    
                </li>
                <li class="fd-menu__item" role="option" tabindex="0">                    
                            <span class="fd-menu__addon-before sap-icon--grid"></span>
                            <span class="fd-menu__title">Sub-option 2</span>
                </li>
                <li class="fd-menu__item" role="option" tabindex="0">                    
                            <span class="fd-menu__title">Sub-option 3</span>
                </li>
                <li class="fd-menu__item" role="option" tabindex="0">                    
                            <span class="fd-menu__title">Sub-option 4</span>
                </li>
            </ul>
        </li>
        <span class="fd-menu__separator"></span>
        <li class="fd-menu__item" role="option" tabindex="0">            
                <span class="fd-menu__title">Option 3</span>
        </li>
        <li class="fd-menu__item" role="option" tabindex="0">            
                <span class="fd-menu__title">Option 4</span>
        </li>        
    </ul>
</nav>
{% endcapture %}

{% include display-component.html component=default-menuwgroup %}

## Menu with RTL mode

The basic stucture of a menu in RTL simulated mode.

{% capture default-menu %}

<nav class="fd-menu fd-menu--addon-before fd-menu--compact" dir="rtl">
    <ul class="fd-menu__list">
        <li class="fd-menu__item" role="option" tabindex="0">
                <span class="fd-menu__addon-before sap-icon--grid"></span>
                <span class="fd-menu__title">Option 1 with two icons and very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long header</span>
                <span class="fd-menu__addon-after sap-icon--history"></span>
        </li>
        <li class="fd-menu__item" role="option" tabindex="0">
                <span class="fd-menu__addon-before sap-icon--accept"></span>
                <span class="fd-menu__title">Option 2 with one icon</span>
        </li>
        <li class="fd-menu__item" role="option" tabindex="0">
                <span class="fd-menu__title">Option 3 with one icon and very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long header</span>
                <span class="fd-menu__addon-after sap-icon--cart"></span>
        </li>
        <li class="fd-menu__item" role="option" tabindex="0">
                <span class="fd-menu__addon-before sap-icon--grid"></span>
                <span class="fd-menu__title">Option 4 with two icons</span>
                <span class="fd-menu__addon-after sap-icon--lightbulb"></span>
        </li>
    </ul>
</nav>
{% endcapture %}

{% include display-component.html component=default-menu %}
