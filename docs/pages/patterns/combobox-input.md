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
      <div class="fd-popover__control fd-input-group__control" aria-controls="F4GcX348" aria-expanded="false" aria-haspopup="true">
          <div class="fd-input-group">
              <input type="text" class="fd-input fd-input-group__input" id="" placeholder="Select Fruit">
              <a class="fd-input-group__addon fd-input-group__addon--button">
                  <button class="fd-input-group__button fd-button--light sap-icon--navigation-down-arrow fd-select__button"></button>
              </a>
          </div>
      </div>
      <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="F4GcX348">
            <ul class="fd-dropdown-list" role="listbox">
                <li role="option">
                    <a href="#" class="fd-dropdown-list__item is-selected">
                        <span class="fd-dropdown-list__title">List item 1</span>
                    </a>
                </li>
                <li role="option">
                    <a href="#" class="fd-dropdown-list__item">
                        <span class="fd-dropdown-list__title">List item 2</span>
                    </a>
                </li>
                <li role="option">
                    <a href="#" class="fd-dropdown-list__item">
                        <span class="fd-dropdown-list__title">List item 3</span>
                    </a>
                </li>
                <li role="option">
                    <a href="#" class="fd-dropdown-list__item">
                        <span class="fd-dropdown-list__title">List item 4</span>
                    </a>
                </li>
            </ul>
      </div>
  </div>
</div>

<br>

<div class="documentation-site-popover-container">
  <div class="fd-popover">
      <div class="fd-popover__control fd-input-group__control" aria-controls="F4GcX34" aria-expanded="false" aria-haspopup="true">
                <div class="fd-input-group">
                    <input type="text" class="fd-input fd-input--compact fd-input-group__input" id="" placeholder="Select Fruit">
                    <a class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button">
                        <button class="fd-input-group__button fd-button--compact fd-button--light sap-icon--navigation-down-arrow fd-select__button"></button>
                    </a>
                </div>
            </div>
      <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="F4GcX34">
            <ul class="fd-dropdown-list fd-dropdown-list--compact" role="listbox">
                <li role="option">
                    <a href="#" class="fd-dropdown-list__item is-selected">
                        <span class="fd-dropdown-list__title">List item 1</span>
                    </a>
                </li>
                <li role="option">
                    <a href="#" class="fd-dropdown-list__item">
                        <span class="fd-dropdown-list__title">List item 2</span>
                    </a>
                </li>
                <li role="option">
                    <a href="#" class="fd-dropdown-list__item">
                        <span class="fd-dropdown-list__title">List item 3</span>
                    </a>
                </li>
                <li role="option">
                    <a href="#" class="fd-dropdown-list__item">
                        <span class="fd-dropdown-list__title">List item 4</span>
                    </a>
                </li>
            </ul>
      </div>
  </div>
</div>
{% endcapture %}
{% include display-component.html component=default %}




{% capture disabled %}
<div class="fd-popover">
  <div class="fd-popover__control fd-input-group__control" aria-controls="F4GcX348" aria-expanded="false" aria-haspopup="true" aria-disabled="true" disabled>
      <div class="fd-input-group" aria-disabled="true" disabled>
          <input type="text" class="fd-input fd-input-group__input" id="" value="Orange" placeholder="Select Fruit">
          <a class="fd-input-group__addon fd-input-group__addon--button">
              <button class="fd-input-group__button fd-button--light sap-icon--navigation-down-arrow fd-select__button"></button>
          </a>
      </div>
  </div>
</div>
{% endcapture %}
{% include display-component.html component=disabled %}




{% capture readonly %}
<div class="fd-popover">
  <div class="fd-popover__control fd-input-group__control" aria-controls="F4GcX348" aria-expanded="false" aria-haspopup="false" aria-readonly="true" readonly>
      <input type="text" class="fd-input fd-input-group__input" id="" value="Orange" aria-readonly="true" readonly>
  </div>
</div>
{% endcapture %}
{% include display-component.html component=readonly %}
