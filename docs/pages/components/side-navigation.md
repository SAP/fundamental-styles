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

The left navigation can always display or expand/collapse using the menu icon within the global navigation.
{: .docs-intro}

> {{ site.data.strings.headerDisclaimer }}

## Side Navigation with one level
{% capture default %}
<nav class="fd-side-nav">
    <ul class="fd-side-nav__list">
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                Link Item
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link is-selected" aira-selected="true" href="#">
               Link Item
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                Link Item
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                Link Item
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                Link Item
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                Link Item
            </a>
        </li>
    </ul>
</nav>
{% endcapture %}
{% include display-component.html component=default %}

<br>

## Side navigation with titles
Use this to group navigation. Titles are not clickable.

{% capture default %}
<nav class="fd-side-nav">
    <div class="fd-side-nav__group">
        <h3 class="fd-side-nav__title">Group Title</h3>
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                   icon link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                   item link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    icon link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
        </ul>
    </div>
    <div class="fd-side-nav__group">
        <h3 class="fd-side-nav__title">Group Title</h3>
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
        </ul>
    </div>
</nav>
{% endcapture %}
{% include display-component.html component=default %}


## Side navigation with multiple levels
Use this when there is more than one level of hierarchy in the left navigation. Each level can be expanded and collapsed.

{% capture default %}
<nav class="fd-side-nav">
    <div class="fd-side-nav__group">
        <h3 class="fd-side-nav__title">Group Name</h3>
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link has-child" href="#" aria-controls="Rk65C501"
                aria-haspopup="true">
                    item link
            </a>
            <ul class="fd-side-nav__sublist" id="Rk65C501" aria-hidden="true">
                <li class="fd-side-nav__subitem">
                    <a class="fd-side-nav__sublink" href="#">
                        Link
                    </a>
                </li>
                <li class="fd-side-nav__subitem">
                    <a class="fd-side-nav__sublink" href="#">
                        Link
                    </a>
                </li>
                <li class="fd-side-nav__subitem">
                    <a class="fd-side-nav__sublink" href="#">
                        Link
                    </a>
                </li>
            </ul>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link has-child" href="#" aria-controls="mM3Zf660"
            aria-haspopup="true">
            item link
        </a>
        <ul class="fd-side-nav__sublist" id="mM3Zf660" aria-hidden="true">
            <li class="fd-side-nav__subitem">
                <a class="fd-side-nav__sublink" href="#">
                    Link
                </a>
            </li>
            <li class="fd-side-nav__subitem">
                <a class="fd-side-nav__sublink" href="#">
                    Link
                </a>
            </li>
            <li class="fd-side-nav__subitem">
                <a class="fd-side-nav__sublink" href="#">
                    Link
                </a>
            </li>
        </ul>
    </li>
    <li class="fd-side-nav__item">
        <a class="fd-side-nav__link has-child" href="#" aria-controls="8t8RN919"
        aria-haspopup="true">
        item link
    </a>
    <ul class="fd-side-nav__sublist" id="8t8RN919" aria-hidden="true">
        <li class="fd-side-nav__subitem">
            <a class="fd-side-nav__sublink" href="#">
                Link
            </a>
        </li>
        <li class="fd-side-nav__subitem">
            <a class="fd-side-nav__sublink" href="#">
                Link
            </a>
        </li>
        <li class="fd-side-nav__subitem">
            <a class="fd-side-nav__sublink" href="#">
                Link
            </a>
        </li>
    </ul>
</li>
<li class="fd-side-nav__item">
    <a class="fd-side-nav__link" href="#">
        item link
    </a>
</li>
</ul>
</div>
<div class="fd-side-nav__group">
    <h3 class="fd-side-nav__title">Group Name</h3>
    <ul class="fd-side-nav__list">
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                item link
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                item link
            </a></li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
        </ul>
    </div>
</nav>
{% endcapture %}
{% include display-component.html component=default %}

<br>

## Side navigation with icons
{% capture default %}
<nav class="fd-side-nav">
    <ul class="fd-side-nav__list">
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                Link icon
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                Link icon
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                Link icon
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                Link icon with two row text to test wrapping 
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                Link icon with two row text to test wrapping  
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                Link icon with two row text to test wrapping  
            </a>
        </li>
    </ul>
</nav>
{% endcapture %}
{% include display-component.html component=default %}

<br>

## Side navigation collapsed with icons
The user can identify which level they are on based on the icon displayed as selected when the navigation is collapsed. Note that the suggested use is when there is only one level of navigation as the user can only see one level of navigation when collapsed.

{% capture default %}
<nav class="fd-side-nav fd-side-nav--icons">
    <ul class="fd-side-nav__list">
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
            </a>
        </li>
    </ul>
</nav>
{% endcapture %}
{% include display-component.html component=default %}
