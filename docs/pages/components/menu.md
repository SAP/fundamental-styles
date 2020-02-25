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

## Menu

The basic stucture of a menu.

{% capture default-menu %}

<nav class="fd-menu">
        <ul class="fd-menu__list">
            <li><a href="#" class="fd-menu__item"><span class="fd-menu__option-name">Option 1 with very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long header</span></a></li>
            <li><a href="#" class="fd-menu__item"><span class="fd-menu__option-name">Option 2</span></a></li>
            <li><a href="#" class="fd-menu__item"><span class="fd-menu__option-name">Option 3</span></a></li>
            <li><a href="#" class="fd-menu__item"><span class="fd-menu__option-name">Option 4</span></a></li>
        </ul>
</nav>
{% endcapture %}

{% include display-component.html component=default-menu %}

## Menu list with separated items

Use a modifier on the list element to add separators between the items.

{% capture default-menuwgroup %}

<nav class="fd-menu">
    <ul class="fd-menu__list">
      <li><a href="#" class="fd-menu__item"><span class="fd-menu__option-name">Option 1</span></a>
    </li>
      <li><a href="#" class="fd-menu__item fd-menu__item--separated"><span class="fd-menu__option-name">Option 2</span></a>
    </li>
      <li><a href="#" class="fd-menu__item"><span class="fd-menu__option-name">Option 3</span></a>
    </li>
      <li><a href="#" class="fd-menu__item fd-menu__item--separated"><span class="fd-menu__option-name">Option 4</span></a>
    </li>
    <li><a href="#" class="fd-menu__item"><span class="fd-menu__option-name">Option 5</span></a>
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
      <li><a href="#" class="fd-menu__item"><span class="fd-menu__option-name">Option 1- Regular</span></a>
    </li>
      <li><a href="#" class="fd-menu__item is-hover"><span class="fd-menu__option-name">Option 2 - Hover</span></a>
    </li>
      <li><a href="#" class="fd-menu__item is-active"><span class="fd-menu__option-name">Option 3 - Active</span></a>
    </li>
      <li><a href="#" class="fd-menu__item is-selected"><span class="fd-menu__option-name">Option 4 - Selected</span></a>
    </li>
      <li><a href="#" class="fd-menu__item is-selected is-hover"><span class="fd-menu__option-name">Option 5 - Selected-Hover</span></a>
    </li>
      <li><a href="#" class="fd-menu__item is-disabled"><span class="fd-menu__option-name">Option 6 - Disabled</span></a>
    </li>
    </ul>
</nav>
{% endcapture %}

{% include display-component.html component=default-menuwgroup %}

## Menu with an addon container

This is an additional container that can be used for an icon or checkbox before the meni item text.

{% capture default-menuwgroup %}

<nav class="fd-menu fd-menu--addon-before">
    <ul class="fd-menu__list fd-menu__list--separated">
        <li>
            <a href="#" class="fd-menu__item">
                <span class="fd-menu__addon-before sap-icon--grid"></span>
                <span class="fd-menu__option-name">Option 1 with two icons and very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long header</span>
                <span class="fd-menu__addon-after sap-icon--navigation-right-arrow"></span>
            </a>
        </li>
        <li>
            <a href="#" class="fd-menu__item">
                <span class="fd-menu__addon-before sap-icon--accept"></span>
                <span class="fd-menu__option-name">Option 2 with one icon</span>
            </a>
        </li>
        <li>
            <a href="#" class="fd-menu__item">
                <span class="fd-menu__option-name">Option 3 with one icon and very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long header</span>
                <span class="fd-menu__addon-after sap-icon--navigation-right-arrow"></span>
            </a>
        </li>
        <li>
            <a href="#" class="fd-menu__item">
                <span class="fd-menu__addon-before sap-icon--grid"></span>
                <span class="fd-menu__option-name">Option 4 with two icons</span>
                <span class="fd-menu__addon-after sap-icon--navigation-right-arrow"></span>
            </a> 
        </li>
    </ul>
</nav>
{% endcapture %}

{% include display-component.html component=default-menuwgroup %}

## Menu with a submenu

Menu with an additional submenu that can be used for items that can be further grouped under a level but not necessarily visible to user always.

{% capture default-menuwgroup %}

<nav class="fd-menu fd-menu--addon-before">
    <ul class="fd-menu__list fd-menu__list--separated">
        <li>
            <a href="#" class="fd-menu__item">
                <span class="fd-menu__addon-before sap-icon--grid"></span>
                <span class="fd-menu__option-name">Option 1</span>
            </a>
        </li>
        <li>
            <a href="#" class="fd-menu__item is-selected">
                <span class="fd-menu__addon-before sap-icon--grid"></span>
                <span class="fd-menu__option-name">Option 2 with submenu</span>
                <span class="fd-menu__addon-after sap-icon--navigation-right-arrow"></span>
            </a>
            <ul class="fd-menu__sublist">
              <li>
                    <a href="#" class="fd-menu__item">
                        <span class="fd-menu__option-name">Sub-option 1</span>
                    </a>
              </li>
              <li>
                    <a href="#" class="fd-menu__item">
                        <span class="fd-menu__addon-before sap-icon--grid"></span>
                        <span class="fd-menu__option-name">Sub-option 2</span>
                    </a>
              </li>
              <li>
                    <a href="#" class="fd-menu__item">
                        <span class="fd-menu__option-name">Sub-option 3</span>
                    </a>
              </li>
              <li>
                    <a href="#" class="fd-menu__item">
                        <span class="fd-menu__option-name">Sub-option 4</span>
                    </a>
              </li>
            </ul>
        </li>
        <li>
            <a href="#" class="fd-menu__item">
                <span class="fd-menu__option-name">Option 3</span>
            </a>
        </li>
        <li>
            <a href="#" class="fd-menu__item">
                <span class="fd-menu__option-name">Option 4</span>
            </a>
        </li>
        
    </ul>
</nav>
{% endcapture %}

{% include display-component.html component=default-menuwgroup %}
