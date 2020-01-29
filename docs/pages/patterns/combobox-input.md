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

The combobox input component is an opinionated composition of the `input group`, `popover` and `list` components with the use of a styled button.
{: .docs-intro}

{% capture default %}
<div class="documentation-site-popover-container">
  <div class="fd-popover">
      <div class="fd-popover__control fd-input-group__control" aria-controls="F4GcX348" aria-expanded="false" aria-haspopup="true">
          <div class="fd-input-group">
              <input type="text" class="fd-input fd-input-group__input" id="" placeholder="Select Fruit">
              <span class="fd-input-group__addon fd-input-group__addon--button">
                  <button class="fd-input-group__button fd-button--light sap-icon--navigation-down-arrow fd-select__button"></button>
              </span>
          </div>
      </div>
      <div class="fd-popover__body fd-popover__body--no-arrow fd-dropdown-list__popover" aria-hidden="true" id="F4GcX348">
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
                    <span class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button">
                        <button class="fd-input-group__button fd-button--compact fd-button--light sap-icon--navigation-down-arrow fd-select__button"></button>
                    </span>
                </div>
            </div>
      <div class="fd-popover__body fd-popover__body--no-arrow fd-dropdown-list__popover" aria-hidden="true" id="F4GcX34">
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



## Disabled Mode
{% capture disabled %}
<div class="fd-popover">
  <div class="fd-popover__control fd-input-group__control" aria-controls="F4GcX348" aria-expanded="false" aria-haspopup="true" aria-disabled="true" disabled>
      <div class="fd-input-group" aria-disabled="true" disabled>
          <input type="text" class="fd-input fd-input-group__input" id="" value="Orange" placeholder="Select Fruit">
          <span class="fd-input-group__addon fd-input-group__addon--button">
              <button class="fd-input-group__button fd-button--light sap-icon--navigation-down-arrow fd-select__button"></button>
          </span>
      </div>
  </div>
</div>
{% endcapture %}
{% include display-component.html component=disabled %}



## Readonly Mode
{% capture readonly %}
<div class="fd-popover">
  <div class="fd-popover__control fd-input-group__control" aria-controls="F4GcX348" aria-expanded="false" aria-haspopup="false" aria-readonly="true" readonly>
      <input type="text" class="fd-input fd-input-group__input" id="" value="Orange" aria-readonly="true" readonly>
  </div>
</div>
{% endcapture %}
{% include display-component.html component=readonly %}


## Semantic Mode
Whole list of states for Combobox can be found on `form` and `select` documentation.

{% capture semantic %}
<div class="documentation-site-popover-container">
  <div class="fd-popover">
      <div class="fd-popover__control fd-input-group__control" aria-controls="F4GcEX34" aria-expanded="false" aria-haspopup="true">
                <div class="fd-input-group is-valid">
                    <input type="text" class="fd-input fd-input--compact fd-input-group__input" id="" placeholder="Select Fruit">
                    <span class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button">
                        <button class="fd-input-group__button fd-button--compact fd-button--light sap-icon--navigation-down-arrow fd-select__button"></button>
                    </span>
                </div>
            </div>
      <div class="fd-popover__body fd-popover__body--no-arrow fd-dropdown-list__popover" aria-hidden="true" id="F4GcEX34">
            <ul class="fd-dropdown-list fd-dropdown-list--has-message fd-dropdown-list--compact" role="listbox">
                <li class="fd-dropdown-list__message fd-dropdown-list__message--success">Success message</li>
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
<span class="fd-form-message fd-form-message--static fd-form-message--success">Success message</span>
{% endcapture %}
{% include display-component.html component=semantic %}
