---
title: Side Navigation
id: side-nav
keywords: side navigation
sidebar: left-navigation-sidebar
toc: false
permalink: components/side-navigation.html
folder: components
summary:
---

The left navigation area can be used to display navigation structures with links that change the content in the main area. The side navigation consists of two container section:  the Main Navigation Section (top-aligned) with links used to navigate within the user’s current work context, and Utility Section (bottom-aligned) that contains links to additional information.
Each of the sections uses a Nested List to display the navigation items.
{: .docs-intro}

> {{ site.data.strings.headerDisclaimer }}

## Side Navigation with one level - text-only, cozy mode
There is only one level of navigation; all further navigation is shown in the content area.
<br>
The lists in both sections (Main and Utility) should have the `fd-nested-list--text-only` modifier class.

{% capture default %}
<div class="fd-side-nav">
    <a class="fd-side-nav__skip-link" href="#content">Skip navigation</a>
    <nav class="fd-side-nav__main-navigation">
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
    <nav class="fd-side-nav__utility">
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
{% endcapture %}
{% include display-component.html component=default %}

<br>

## Side Navigation with one level - with icons, cozy mode

{% capture default %}
<div class="fd-side-nav">
    <a class="fd-side-nav__skip-link" href="#content">Skip navigation</a>
    <nav class="fd-side-nav__main-navigation">
        <ul class="fd-nested-list">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span class="fd-nested-list__icon sap-icon--home"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link is-selected" href="#">
                    <span class="fd-nested-list__icon sap-icon--calendar"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span class="fd-nested-list__icon sap-icon--employee"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span class="fd-nested-list__icon sap-icon--activities"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fd-side-nav__utility">
        <ul class="fd-nested-list">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span class="fd-nested-list__icon sap-icon--compare"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span class="fd-nested-list__icon sap-icon--chain-link"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
{% endcapture %}
{% include display-component.html component=default %}

<br>

## Side navigation with multiple levels - cozy mode
Use this when there is more than one level of hierarchy in the left navigation. The entries on the first level are just group headers(don't trigger navigation themselves). It's recommended to use up to two levels of navigation. For more levels of navigation, use the content area. 
On expand, the `is-expanded` class should be propagated also to `__content` element. `fd-nested-list__button` is the element which triggers another level.

{% capture default %}
<div class="fd-side-nav">
    <a class="fd-side-nav__skip-link" href="#content">Skip navigation</a>
    <nav class="fd-side-nav__main-navigation">
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
                    <span class="fd-nested-list__link">
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </span>
                    <button class="fd-button fd-nested-list__button" aria-controls="EX100L2" aria-haspopup="true" aria-expanded="false"></button>
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
    <nav class="fd-side-nav__utility">
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
{% endcapture %}
{% include display-component.html component=default %}

<br>

## Side navigation with 2 levels - with icons and group headers, cozy mode

{% capture default %}
<div class="fd-side-nav">
    <a class="fd-side-nav__skip-link" href="#content">Skip navigation</a>
    <div class="fd-side-nav__group-header" id="EX400H1">
        Group Header 1
    </div>
    <nav class="fd-side-nav__main-navigation">
        <ul class="fd-nested-list" aria-labelledby="EX400H1">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-hidden="true" class="fd-nested-list__icon sap-icon--home"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-hidden="true" class="fd-nested-list__icon sap-icon--calendar"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <div class="fd-nested-list__content is-selected has-child">
                    <span class="fd-nested-list__link">
                        <span aria-hidden="true" class="fd-nested-list__icon sap-icon--employee"></span>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </span>
                    <button class="fd-button fd-nested-list__button" aria-controls="EX100L2" aria-haspopup="true" aria-expanded="false"></button>
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
                    <span aria-hidden="true" class="fd-nested-list__icon sap-icon--activities"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
        <div class="fd-side-nav__group-header" id="EX400H2">
            Group Header 2
        </div>
        <ul class="fd-nested-list" aria-labelledby="EX400H2">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#" aria-labelledby="group-2-header">
                    <span aria-hidden="true" class="fd-nested-list__icon sap-icon--bar-chart"></span>
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
    <nav class="fd-side-nav__utility">
        <ul class="fd-nested-list" aria-label="Utility Menu">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-hidden="true" class="fd-nested-list__icon sap-icon--compare"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-hidden="true" class="fd-nested-list__icon sap-icon--chain-link"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
{% endcapture %}
{% include display-component.html component=default %}

<br>

## Side navigation with 2 levels - compact mode
In compact mode the dimensions of the controls are reduced, allowing more information to be displayed. This mode is suggested for devices operated by mouse and keyboard. <br>
The lists in both sections (Main and Utility) should have the `fd-nested-list--compact` modifier class.

{% capture default %}
<div class="fd-side-nav">
    <a class="fd-side-nav__skip-link" href="#content">Skip navigation</a>
    <div class="fd-side-nav__group-header" id="EX500H1">
        Group Header 1
    </div>
    <nav class="fd-side-nav__main-navigation">
        <ul class="fd-nested-list fd-nested-list--compact" aria-labelledby="EX500H1">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-hidden="true" class="fd-nested-list__icon sap-icon--home"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link is-selected" href="#">
                    <span aria-hidden="true" class="fd-nested-list__icon sap-icon--calendar"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <div class="fd-nested-list__content has-child">
                    <span class="fd-nested-list__link">
                        <span aria-hidden="true" class="fd-nested-list__icon sap-icon--employee"></span>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </span>
                    <button class="fd-button fd-nested-list__button" aria-controls="EX100L2" aria-haspopup="true" aria-expanded="false"></button>
                </div>
                <ul class="fd-nested-list fd-nested-list--text-only level-2" id="EX500L2" aria-hidden="true">
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <span class="fd-nested-list__title">Level 2 Item</span>
                        </a>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link">
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
                    <span aria-hidden="true" class="fd-nested-list__icon sap-icon--activities"></span>
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
                    <span aria-hidden="true" class="fd-nested-list__icon sap-icon--bar-chart"></span>
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
    <nav class="fd-side-nav__utility">
        <ul class="fd-nested-list fd-nested-list--compact" aria-label="Utility Menu">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-hidden="true" class="fd-nested-list__icon sap-icon--compare"></span>
                    <span aria-hidden="true" class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span class="fd-nested-list__icon sap-icon--chain-link"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
{% endcapture %}
{% include display-component.html component=default %}

<br>

## Side navigation with icons - condensed state
Use the `fd-side-nav--condensed` modifier class for `condensed` state.
The following requirements must be met:
<ul class="docs-ul">
    <li>
        all first level items of the Side Navigation should have icons
    </li>
    <li>
        the Side Navigation should not have Group Headers
    </li>
</ul>
{% capture default %}
<nav class="fd-side-nav fd-side-nav--condensed">
    <a class="fd-side-nav__skip-link" href="#content">Skip navigation</a>
    <div class="fd-side-nav__main-navigation">
        <ul class="fd-nested-list">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--home"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--calendar"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <div class="fd-nested-list__content is-selected has-child" tabindex="0">
                    <span class="fd-nested-list__link">
                        <span aria-hidden="true" class="fd-nested-list__icon sap-icon--employee"></span>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </span>
                    <button class="fd-button fd-nested-list__button" aria-controls="EX100L2" aria-haspopup="true" aria-expanded="false"></button>
                </div>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--activities"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--bar-chart"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </div>
    <div class="fd-side-nav__utility" aria-label="Utility Menu">
        <ul class="fd-nested-list">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--compare"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--chain-link"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </div>
</nav>
{% endcapture %}
{% include display-component.html component=default %}

<br>

## Side navigation with icons - condensed state, compact mode

{% capture default %}
<nav class="fd-side-nav fd-side-nav--condensed">
    <a class="fd-side-nav__skip-link" href="#content">Skip navigation</a>
    <div class="fd-side-nav__main-navigation">
        <ul class="fd-nested-list fd-nested-list--compact">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--home"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--calendar"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <div class="fd-nested-list__content is-selected has-child" tabindex="0">
                    <span class="fd-nested-list__link">
                        <span aria-hidden="true" class="fd-nested-list__icon sap-icon--employee"></span>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </span>
                    <button class="fd-button fd-nested-list__button" aria-controls="EX100L2" aria-haspopup="true" aria-expanded="false"></button>
                </div>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--activities"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--bar-chart"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </div>
    <div class="fd-side-nav__utility">
        <ul class="fd-nested-list fd-nested-list--compact" aria-label="Utility Menu">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--compare"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <span aria-label="Level 1 Item" class="fd-nested-list__icon sap-icon--chain-link"></span>
                    <span class="fd-nested-list__title">Level 1 Item</span>
                </a>
            </li>
        </ul>
    </div>
</nav>
{% endcapture %}
{% include display-component.html component=default %}
