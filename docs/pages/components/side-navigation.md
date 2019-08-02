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
    <div class="fd-side-nav__main-navigation">
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__title">Link Item</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link is-selected" aira-selected="true" href="#">
                    <div class="fd-side-nav__title">Link Item</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__title">Link Item</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__title">Link Item</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__title">Link Item</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__title">Link Item</div>
                </a>
            </li>
        </ul>
    </div>
    <div class="fd-side-nav__utility">
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__title">Link Item</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__title">Link Item</div>
                </a>
            </li>
        </ul>
    </div>
</nav>
{% endcapture %}
{% include display-component.html component=default %}

<br>

## Side navigation with multiple levels
Use this when there is more than one level of hierarchy in the left navigation. Each level can be expanded and collapsed.

{% capture default %}
<nav class="fd-side-nav">
    <div class="fd-side-nav__main-navigation">
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__title">item link</div>
                </a>
            </li>
            <li class="fd-side-nav__item has-child">
                <a class="fd-side-nav__link" href="#" aria-controls="sublist-01"
                aria-haspopup="true">
                    <div class="fd-side-nav__title">item link</div>
                </a>
                <ul class="fd-side-nav__sublist" id="sublist-01" aria-hidden="true">
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__title">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__title">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__title">Link Item</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-side-nav__item has-child">
                <a class="fd-side-nav__link" href="#" aria-controls="sublist-02"
                aria-haspopup="true">
                    <div class="fd-side-nav__title">item link</div>
                </a>
                <ul class="fd-side-nav__sublist" id="sublist-02" aria-hidden="true">
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__title">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__title">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__title">Link Item</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-side-nav__item has-child">
                <a class="fd-side-nav__link" href="#" aria-controls="sublist-03"
                aria-haspopup="true" aria-expanded="true">
                    <div class="fd-side-nav__title">item link</div>
                </a>
                <ul class="fd-side-nav__sublist" id="sublist-03" aria-hidden="false">
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink is-selected" href="#">
                            <div class="fd-side-nav__title">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__title">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__title">Link Item</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__title">item link</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__title">item link</div>
                </a>
            </li>
        </ul>
    </div>
    <div class="fd-side-nav__utility">
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__title">Link Item</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__title">Link Item</div>
                </a>
            </li>
        </ul>
    </div>
</nav>
{% endcapture %}
{% include display-component.html component=default %}

<br>

## Side navigation with multiple levels compact
Use this when there is more than one level of hierarchy in the left navigation. Each level can be expanded and collapsed.

{% capture default %}
<nav class="fd-side-nav compact">
    <div class="fd-side-nav__main-navigation">
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__title">item link</div>
                </a>
            </li>
            <li class="fd-side-nav__item has-child">
                <a class="fd-side-nav__link" href="#" aria-controls="sublist-04"
                aria-haspopup="true">
                    <div class="fd-side-nav__title">item link</div>
                </a>
                <ul class="fd-side-nav__sublist" id="sublist-04" aria-hidden="true">
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__title">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__title">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__title">Link Item</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-side-nav__item has-child">
                <a class="fd-side-nav__link" href="#" aria-controls="sublist-05"
                aria-haspopup="true">
                    <div class="fd-side-nav__title">item link</div>
                </a>
                <ul class="fd-side-nav__sublist" id="sublist-05" aria-hidden="true">
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__title">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__title">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__title">Link Item</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-side-nav__item has-child">
                <a class="fd-side-nav__link" href="#" aria-controls="sublist-06"
                aria-haspopup="true" aria-expanded="true">
                    <div class="fd-side-nav__title">item link</div>
                </a>
                <ul class="fd-side-nav__sublist" id="sublist-06" aria-hidden="false">
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink is-selected" href="#">
                            <div class="fd-side-nav__title">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__title">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__title">Link Item</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__title">item link</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__title">item link</div>
                </a>
            </li>
        </ul>
    </div>
    <div class="fd-side-nav__utility">
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__title">Link Item</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__title">Link Item</div>
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
<nav class="fd-side-nav has-icons">
    <div class="fd-side-nav__main-navigation">
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link is-selected" href="#">
                    <i class="fd-side-nav__icon sap-icon--employee" role="presentation"></i>
                    <div class="fd-side-nav__title">item link</div>
                </a>
            </li>
            <li class="fd-side-nav__item has-child">
                <a class="fd-side-nav__link" href="#" aria-controls="sublist-07"
                aria-haspopup="true">
                    <i class="fd-side-nav__icon sap-icon--appointment" role="presentation"></i>
                    <div class="fd-side-nav__title">item link</div>
                </a>
                <ul class="fd-side-nav__sublist" id="sublist-07" aria-hidden="true">
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__title">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__title">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__title">Link Item</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-side-nav__item has-child">
                <a class="fd-side-nav__link" href="#" aria-controls="sublist-08"
                aria-haspopup="true">
                    <i class="fd-side-nav__icon sap-icon--contacts" role="presentation"></i>
                    <div class="fd-side-nav__title">item link</div>
                </a>
                <ul class="fd-side-nav__sublist" id="sublist-08" aria-hidden="true">
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__title">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__title">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__title">Link Item</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-side-nav__item has-child">
                <a class="fd-side-nav__link" href="#" aria-controls="sublist-09"
                aria-haspopup="true">
                    <i class="fd-side-nav__icon sap-icon--shipping-status" role="presentation"></i>
                    <div class="fd-side-nav__title">item link</div>
                </a>
                <ul class="fd-side-nav__sublist" id="sublist-09" aria-hidden="true">
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__title">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__title">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__title">Link Item</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-side-nav__item no-icon">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__title">item link</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <i class="fd-side-nav__icon sap-icon--value-help" role="presentation"></i>
                    <div class="fd-side-nav__title">item link</div>
                </a>
            </li>
        </ul>
    </div>
    <div class="fd-side-nav__utility">
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <i class="fd-side-nav__icon sap-icon--compare" role="presentation"></i>
                    <div class="fd-side-nav__title">Link Item</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <i class="fd-side-nav__icon sap-icon--chain-link" role="presentation"></i>
                    <div class="fd-side-nav__title">Link Item</div>
                </a>
            </li>
        </ul>
    </div>
</nav>
{% endcapture %}
{% include display-component.html component=default %}

<br>

## Side navigation collapsed with icons
The user can identify which level they are on based on the icon displayed as selected when the navigation is collapsed. Note that the suggested use is when there is only one level of navigation as the user can only see one level of navigation when collapsed.

{% capture default %}
<nav class="fd-side-nav condensed">
    <div class="fd-side-nav__main-navigation">
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link is-selected" href="#">
                    <i class="fd-side-nav__icon sap-icon--home" role="presentation"></i>
                    <div class="fd-side-nav__title">Link icon</div>
                </a>
            </li>
            <li class="fd-side-nav__item no-icon">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__title">Link icon</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <i class="fd-side-nav__icon sap-icon--add-document" role="presentation"></i>
                    <div class="fd-side-nav__title">Link icon</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <i class="fd-side-nav__icon sap-icon--user-settings" role="presentation"></i>
                    <div class="fd-side-nav__title">Link icon</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <i class="fd-side-nav__icon sap-icon--call" role="presentation"></i>
                    <div class="fd-side-nav__title">Link icon</div>
                </a>
            </li>
        </ul>
    </div>
    <div class="fd-side-nav__utility">
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <i class="fd-side-nav__icon sap-icon--compare" role="presentation"></i>
                    <div class="fd-side-nav__title">Link Item</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <i class="fd-side-nav__icon sap-icon--chain-link" role="presentation"></i>
                    <div class="fd-side-nav__title">Link Item</div>
                </a>
            </li>
        </ul>
    </div>
</nav>
{% endcapture %}
{% include display-component.html component=default %}

<br>

## Side navigation collapsed with icons compact

{% capture default %}
<nav class="fd-side-nav condensed compact">
    <div class="fd-side-nav__main-navigation">
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link is-selected" href="#">
                    <i class="fd-side-nav__icon sap-icon--home" role="presentation"></i>
                    <div class="fd-side-nav__title">Link icon</div>
                </a>
            </li>
            <li class="fd-side-nav__item no-icon">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__title">Link icon</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <i class="fd-side-nav__icon sap-icon--add-document" role="presentation"></i>
                    <div class="fd-side-nav__title">Link icon</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <i class="fd-side-nav__icon sap-icon--user-settings" role="presentation"></i>
                    <div class="fd-side-nav__title">Link icon</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <i class="fd-side-nav__icon sap-icon--call" role="presentation"></i>
                    <div class="fd-side-nav__title">Link icon</div>
                </a>
            </li>
        </ul>
    </div>
    <div class="fd-side-nav__utility">
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <i class="fd-side-nav__icon sap-icon--compare" role="presentation"></i>
                    <div class="fd-side-nav__title">Link Item</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <i class="fd-side-nav__icon sap-icon--chain-link" role="presentation"></i>
                    <div class="fd-side-nav__title">Link Item</div>
                </a>
            </li>
        </ul>
    </div>
</nav>
{% endcapture %}
{% include display-component.html component=default %}
