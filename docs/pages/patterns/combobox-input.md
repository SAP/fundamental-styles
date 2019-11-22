---
title: Combobox Input
id: combobox-input
keywords: combobox input
sidebar: left-navigation-sidebar
toc: false
permalink: patterns/combobox-input.html
folder: patterns
summary:
---

The combobox input component is an opinionated composition of the `input group`, `popover` and `menu` components with the use of a styled button.
{: .docs-intro}

{% capture default %}
<div class="documentation-site-popover-container">
  <div class="fd-popover">
      <div class="fd-popover__control">
          <div aria-label="Image label" aria-controls="F4GcX348" aria-expanded="false" aria-haspopup="true">
              <div class="fd-input-group">
                  <input type="text" class="fd-input fd-input-group__input" id="" placeholder="Select Fruit">
                  <span class="fd-input-group__addon fd-input-group__addon--button">
                      <button class="fd-input-group__button fd-button--light sap-icon--navigation-down-arrow"></button>
                  </span>
              </div>
          </div>
      </div>
      <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="F4GcX348">
          <nav class="fd-menu">
          <ul class="fd-menu__list">
              <li><a href="#" class="fd-menu__item">Pear</a></li>
              <li><a href="#" class="fd-menu__item">Strawberry</a></li>
              <li><a href="#" class="fd-menu__item">Raspberry</a></li>
              <li><a href="#" class="fd-menu__item fd-menu__link">+ New Item</a></li>
          </ul>
          </nav>
      </div>
  </div>
</div>

<br>

<div class="documentation-site-popover-container">
  <div class="fd-popover">
      <div class="fd-popover__control">
          <div aria-label="Image label" aria-controls="F4GcX34" aria-expanded="false" aria-haspopup="true">
              <div class="fd-input-group fd-input-group--compact">
                  <input type="text" class="fd-input fd-input-group__input" id="" placeholder="Select Fruit">
                  <span class="fd-input-group__addon fd-input-group__addon--button">
                      <button class="fd-input-group__button fd-button--compact fd-button--light sap-icon--navigation-down-arrow"></button>
                  </span>
              </div>
          </div>
      </div>
      <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="F4GcX34">
          <nav class="fd-menu">
          <ul class="fd-menu__list">
              <li><a href="#" class="fd-menu__item">Pear</a></li>
              <li><a href="#" class="fd-menu__item">Strawberry</a></li>
              <li><a href="#" class="fd-menu__item">Raspberry</a></li>
              <li><a href="#" class="fd-menu__item fd-menu__link">+ New Item</a></li>
          </ul>
          </nav>
      </div>
  </div>
</div>
{% endcapture %}
{% include display-component.html component=default %}
