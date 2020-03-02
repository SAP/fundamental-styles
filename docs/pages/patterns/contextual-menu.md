---
title: Contextual Menu
id: contextual-menu
keywords: contextual, menu
sidebar: left-navigation-sidebar
toc: false
permalink: patterns/contextual-menu.html
folder: patterns
summary:
---


The contextual menu component is an opinionated composition of the `popover` and `menu` components with the use of a styled button.
{: .docs-intro}
A More icon or the word, "More", is used to indicate there are more options than room to display them. On click or tap, a contextual menu opens. Composed by the "popover" and "menu" components.

This component is completely composed from other components CSS and doesn't have any of its own.

Implementation Guidelines:
- Only one menu should be open at a give time
- Opening one menu should close all other menus
- Clicking away from the menu should also close the menu

> {{ site.data.strings.headerDisclaimer }}

## With Icon
{% capture default-contextualmenu %}
<div class="fd-popover">
    <div class="fd-popover__control">
        <button class="fd-button fd-button--transparent sap-icon--overflow" aria-controls="pQqQR213" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
    </div>
    <div class="fd-popover__body" aria-hidden="true" id="pQqQR213">
        <nav class="fd-menu">
            <ul class="fd-menu__list">
                <li><a href="#" class="fd-menu__item">Option 1</a></li>
                <li><a href="#" class="fd-menu__item">Option 2</a></li>
                <li><a href="#" class="fd-menu__item">Option 3</a></li>
            </ul>
        </nav>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=default-contextualmenu %}

<br>

## With Text Button and Group Header

{% capture default-contextualmenuwheader %}
<div class="fd-popover">
    <div class="fd-popover__control">
        <button class="fd-button" aria-controls="jhqD0558" aria-haspopup="true" aria-expanded="false" aria-label="More">More</button>
    </div>
    <div class="fd-popover__body" aria-hidden="true" id="jhqD0558">
        <nav class="fd-menu">
            <ul class="fd-menu__list">
                <li><a href="#" class="fd-menu__item">Option 1</a></li>
                <li><a href="#" class="fd-menu__item">Option 2</a></li>
                <li><a href="#" class="fd-menu__item">Option 3</a></li>
            </ul>
            <div class="fd-menu__group">
                <h3 class="fd-menu__title">Group Header</h3>
                <ul class="fd-menu__list">
                    <li><a href="#" class="fd-menu__item">Option 4</a></li>
                    <li><a href="#" class="fd-menu__item">Option 5</a></li>
                    <li><a href="#" class="fd-menu__item">Option 6</a></li>
                </ul>
            </div>
        </nav>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=default-contextualmenuwheader %}
