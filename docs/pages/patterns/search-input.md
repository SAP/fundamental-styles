---
title: Search Input
id: search-input
keywords: search input
sidebar: left-navigation-sidebar
toc: false
permalink: patterns/search-input.html
folder: patterns
summary:
---

The search input component is an opinionated composition of the `input group`, `popover` and `menu` components with the use of a styled button.
{: .docs-intro}
> **DEPRECATED**. Search Input does not exist as a Fiori 3 component so it has been deprecated. 
{: .docs-deprecated}

{% capture default %}
<div class="documentation-site-popover-container">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <div aria-label="Image label" aria-controls="F4GcX348bc" aria-expanded="false" aria-haspopup="true">
                <div class="fd-input-group">
                    <input type="text" class="fd-input fd-input-group__input" id="" value="Ba" placeholder="Select Fruit">
                    <span class="fd-input-group__addon fd-input-group__addon--button">
                        <button class="fd-input-group__button fd-button fd-button--transparent sap-icon--search"></button>
                    </span>
                </div>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="F4GcX348bc">
            <nav class="fd-menu fd-menu--full-width">
                <ul class="fd-menu__list fd-menu__list--no-shadow">
                    <li class="fd-menu__item">
                        <a href="#" class="fd-menu__link">
                            <span class="fd-menu__title"><strong>Ba</strong>nana</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a href="#" class="fd-menu__link">
                            <span class="fd-menu__title"><strong>Ba</strong>rk</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a href="#" class="fd-menu__link">
                            <span class="fd-menu__title"><strong>Ba</strong>ts</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</div>

<br>

<div class="documentation-site-popover-container">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <div aria-label="Image label" aria-controls="F4GcX34b" aria-expanded="false" aria-haspopup="true">
                <div class="fd-input-group">
                    <input type="text" class="fd-input fd-input--compact fd-input-group__input" id="" value="Ba" placeholder="Select Fruit">
                    <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--compact">
                        <button class="fd-input-group__button fd-button fd-button--compact fd-button--transparent sap-icon--search"></button>
                    </span>
                </div>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="F4GcX34b">
            <nav class="fd-menu fd-menu--compact">
                <ul class="fd-menu__list fd-menu__list--no-shadow">
                    <li class="fd-menu__item">
                        <a href="#" class="fd-menu__link">
                            <span class="fd-menu__title"><strong>Ba</strong>nana</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a href="#" class="fd-menu__link">
                            <span class="fd-menu__title"><strong>Ba</strong>rk</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a href="#" class="fd-menu__link">
                            <span class="fd-menu__title"><strong>Ba</strong>ts</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=default %}
