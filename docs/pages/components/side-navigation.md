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

The left navigation area can be used to display navigation structures with up to two levels. It contains links that change the content in the main area. 

The side navigation consists of two container section:  the Main Navigation Section (top-aligned) with links used to navigate within the user’s current work context, and Utility Section (bottom-aligned) that contains links to additional information.

{: .docs-intro}

> {{ site.data.strings.headerDisclaimer }}

## Side Navigation with one level - cozy mode
There is only one level of navigation; all further navigation is shown in the content area.

{% capture default %}
<nav class="fd-side-nav">
    <div class="fd-side-nav__main-navigation">
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__text">Link Item</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link is-selected" aira-selected="true" href="#">
                    <div class="fd-side-nav__text">Link Item</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__text">Link Item</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__text">Link Item</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__text">Link Item</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__text">Link Item</div>
                </a>
            </li>
        </ul>
    </div>
    <div class="fd-side-nav__utility">
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__text">Link Item</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__text">Link Item</div>
                </a>
            </li>
        </ul>
    </div>
</nav>
{% endcapture %}
{% include display-component.html component=default %}

<br>

## Side navigation with multiple levels - cozy mode
Use this when there is more than one level of hierarchy in the left navigation. The entries on the first level are just group headers(don't trigger navigation themselves). There are only two levels of navigation. For more levels of navigation, use the content area. 

{% capture default %}
<nav class="fd-side-nav">
    <div class="fd-side-nav__main-navigation">
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__text">item link</div>
                </a>
            </li>
            <li class="fd-side-nav__item has-child">
                <a class="fd-side-nav__link" href="#" aria-controls="sublist-01"
                aria-haspopup="true">
                    <div class="fd-side-nav__text">item link</div>
                </a>
                <ul class="fd-side-nav__sublist" id="sublist-01" aria-hidden="true">
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__text">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__text">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__text">Link Item</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-side-nav__item has-child">
                <a class="fd-side-nav__link" href="#" aria-controls="sublist-02"
                aria-haspopup="true">
                    <div class="fd-side-nav__text">item link</div>
                </a>
                <ul class="fd-side-nav__sublist" id="sublist-02" aria-hidden="true">
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__text">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__text">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__text">Link Item</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-side-nav__item has-child">
                <a class="fd-side-nav__link" href="#" aria-controls="sublist-03"
                aria-haspopup="true" aria-expanded="true">
                    <div class="fd-side-nav__text">item link</div>
                </a>
                <ul class="fd-side-nav__sublist" id="sublist-03" aria-hidden="false">
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink is-selected" href="#">
                            <div class="fd-side-nav__text">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__text">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__text">Link Item</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__text">item link</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__text">item link</div>
                </a>
            </li>
        </ul>
    </div>
    <div class="fd-side-nav__utility">
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__text">Link Item</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__text">Link Item</div>
                </a>
            </li>
        </ul>
    </div>
</nav>
{% endcapture %}
{% include display-component.html component=default %}

<br>

## Side navigation with multiple levels - compact mode
In compact mode the dimensions of the controls are reduced, allowing more information to be displayed. This mode is suggested for devices operated by mouse and keyboard.

{% capture default %}
<nav class="fd-side-nav compact">
    <div class="fd-side-nav__main-navigation">
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__text">item link</div>
                </a>
            </li>
            <li class="fd-side-nav__item has-child">
                <a class="fd-side-nav__link" href="#" aria-controls="sublist-04"
                aria-haspopup="true">
                    <div class="fd-side-nav__text">item link</div>
                </a>
                <ul class="fd-side-nav__sublist" id="sublist-04" aria-hidden="true">
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__text">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__text">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__text">Link Item</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-side-nav__item has-child">
                <a class="fd-side-nav__link" href="#" aria-controls="sublist-05"
                aria-haspopup="true">
                    <div class="fd-side-nav__text">item link</div>
                </a>
                <ul class="fd-side-nav__sublist" id="sublist-05" aria-hidden="true">
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__text">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__text">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__text">Link Item</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-side-nav__item has-child">
                <a class="fd-side-nav__link" href="#" aria-controls="sublist-06"
                aria-haspopup="true" aria-expanded="true">
                    <div class="fd-side-nav__text">item link</div>
                </a>
                <ul class="fd-side-nav__sublist" id="sublist-06" aria-hidden="false">
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink is-selected" href="#">
                            <div class="fd-side-nav__text">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__text">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__text">Link Item</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__text">item link</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__text">item link</div>
                </a>
            </li>
        </ul>
    </div>
    <div class="fd-side-nav__utility">
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__text">Link Item</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <div class="fd-side-nav__text">Link Item</div>
                </a>
            </li>
        </ul>
    </div>
</nav>
{% endcapture %}
{% include display-component.html component=default %}

<br>

## Side navigation with icons - cozy mode
The entries in the side navigation consist of an icon with text. The use or non-use of icons must be consistent for all links on one level (avoid mixing entries with and without icons on the same level). The use of icons on the second level is not recommended. 

{% capture default %}
<nav class="fd-side-nav has-icons">
    <div class="fd-side-nav__main-navigation">
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link is-selected" href="#">
                    <i class="fd-side-nav__icon sap-icon--employee" role="presentation"></i>
                    <div class="fd-side-nav__text">item link</div>
                </a>
            </li>
            <li class="fd-side-nav__item has-child">
                <a class="fd-side-nav__link" href="#" aria-controls="sublist-07"
                aria-haspopup="true">
                    <i class="fd-side-nav__icon sap-icon--appointment" role="presentation"></i>
                    <div class="fd-side-nav__text">item link</div>
                </a>
                <ul class="fd-side-nav__sublist" id="sublist-07" aria-hidden="true">
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__text">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__text">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__text">Link Item</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-side-nav__item has-child">
                <a class="fd-side-nav__link" href="#" aria-controls="sublist-08"
                aria-haspopup="true">
                    <i class="fd-side-nav__icon sap-icon--contacts" role="presentation"></i>
                    <div class="fd-side-nav__text">item link</div>
                </a>
                <ul class="fd-side-nav__sublist" id="sublist-08" aria-hidden="true">
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__text">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__text">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__text">Link Item</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-side-nav__item has-child">
                <a class="fd-side-nav__link" href="#" aria-controls="sublist-09"
                aria-haspopup="true">
                    <i class="fd-side-nav__icon sap-icon--shipping-status" role="presentation"></i>
                    <div class="fd-side-nav__text">item link</div>
                </a>
                <ul class="fd-side-nav__sublist" id="sublist-09" aria-hidden="true">
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__text">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__text">Link Item</div>
                        </a>
                    </li>
                    <li class="fd-side-nav__subitem">
                        <a class="fd-side-nav__sublink" href="#">
                            <div class="fd-side-nav__text">Link Item</div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <i class="fd-side-nav__icon sap-icon--value-help" role="presentation"></i>
                    <div class="fd-side-nav__text">item link</div>
                </a>
            </li>
        </ul>
    </div>
    <div class="fd-side-nav__utility">
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <i class="fd-side-nav__icon sap-icon--compare" role="presentation"></i>
                    <div class="fd-side-nav__text">Link Item</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <i class="fd-side-nav__icon sap-icon--chain-link" role="presentation"></i>
                    <div class="fd-side-nav__text">Link Item</div>
                </a>
            </li>
        </ul>
    </div>
</nav>
{% endcapture %}
{% include display-component.html component=default %}

<br>

## Side navigation with icons - condensed state

{% capture default %}
<nav class="fd-side-nav condensed">
    <div class="fd-side-nav__main-navigation">
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link is-selected" href="#">
                    <i class="fd-side-nav__icon sap-icon--home" role="presentation"></i>
                    <div class="fd-side-nav__text">Link icon</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <i class="fd-side-nav__icon sap-icon--add-document" role="presentation"></i>
                    <div class="fd-side-nav__text">Link icon</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <i class="fd-side-nav__icon sap-icon--user-settings" role="presentation"></i>
                    <div class="fd-side-nav__text">Link icon</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <i class="fd-side-nav__icon sap-icon--call" role="presentation"></i>
                    <div class="fd-side-nav__text">Link icon</div>
                </a>
            </li>
        </ul>
    </div>
    <div class="fd-side-nav__utility">
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <i class="fd-side-nav__icon sap-icon--compare" role="presentation"></i>
                    <div class="fd-side-nav__text">Link Item</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <i class="fd-side-nav__icon sap-icon--chain-link" role="presentation"></i>
                    <div class="fd-side-nav__text">Link Item</div>
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
<nav class="fd-side-nav condensed compact">
    <div class="fd-side-nav__main-navigation">
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link is-selected" href="#">
                    <i class="fd-side-nav__icon sap-icon--home" role="presentation"></i>
                    <div class="fd-side-nav__text">Link icon</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <i class="fd-side-nav__icon sap-icon--add-document" role="presentation"></i>
                    <div class="fd-side-nav__text">Link icon</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <i class="fd-side-nav__icon sap-icon--user-settings" role="presentation"></i>
                    <div class="fd-side-nav__text">Link icon</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <i class="fd-side-nav__icon sap-icon--call" role="presentation"></i>
                    <div class="fd-side-nav__text">Link icon</div>
                </a>
            </li>
        </ul>
    </div>
    <div class="fd-side-nav__utility">
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <i class="fd-side-nav__icon sap-icon--compare" role="presentation"></i>
                    <div class="fd-side-nav__text">Link Item</div>
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    <i class="fd-side-nav__icon sap-icon--chain-link" role="presentation"></i>
                    <div class="fd-side-nav__text">Link Item</div>
                </a>
            </li>
        </ul>
    </div>
</nav>
{% endcapture %}
{% include display-component.html component=default %}