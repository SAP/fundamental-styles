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
      <div class="fd-popover__control" aria-controls="F4GcX348" aria-expanded="false" aria-haspopup="true">
          <div class="fd-input-group fd-input-group--control">
              <input type="text" class="fd-input fd-input-group__input" id="" placeholder="Select Fruit">
              <span class="fd-input-group__addon fd-input-group__addon--button">
                  <button class="fd-input-group__button fd-button--light sap-icon--navigation-down-arrow" aria-controls="F4GcX348" aria-expanded="false" aria-haspopup="true"></button>
              </span>
          </div>
      </div>
      <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="F4GcX348">
            <ul class="fd-dropdown" role="listbox">
                <li role="option" tabindex="0" class="fd-dropdown__item is-selected">
                    <span class="fd-dropdown__title">List item 1</span>
                </li>
                <li role="option" tabindex="0" class="fd-dropdown__item">
                    <span class="fd-dropdown__title">List item 2</span>
                </li>
                <li role="option" tabindex="0" class="fd-dropdown__item">
                    <span class="fd-dropdown__title">List item 3</span>
                </li>
                <li role="option" tabindex="0" class="fd-dropdown__item">
                    <span class="fd-dropdown__title">List item 4</span>
                </li>
            </ul>
      </div>
  </div>
</div>

<br>

<div class="documentation-site-popover-container">
  <div class="fd-popover">
      <div class="fd-popover__control" aria-controls="F4GcX34" aria-expanded="false" aria-haspopup="true">
                <div class="fd-input-group fd-input-group--control">
                    <input type="text" class="fd-input fd-input--compact fd-input-group__input" id="" placeholder="Select Fruit">
                    <span class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button">
                        <button class="fd-input-group__button fd-button--compact fd-button--light sap-icon--navigation-down-arrow fd-select__button" aria-controls="F4GcX34" aria-expanded="false" aria-haspopup="true"></button>
                    </span>
                </div>
            </div>
      <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="F4GcX34">
            <ul class="fd-dropdown fd-dropdown--compact" role="listbox">
                <li role="option" tabindex="0" class="fd-dropdown__item is-selected">
                    <span class="fd-dropdown__title">List item 1</span>
                </li>
                <li role="option" tabindex="0" class="fd-dropdown__item">
                    <span class="fd-dropdown__title">List item 2</span>
                </li>
                <li role="option" tabindex="0" class="fd-dropdown__item">
                    <span class="fd-dropdown__title">List item 3</span>
                </li>
                <li role="option" tabindex="0" class="fd-dropdown__item">
                    <span class="fd-dropdown__title">List item 4</span>
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
  <div class="fd-popover__control" aria-controls="F4GcX348" aria-expanded="false" aria-haspopup="true" aria-disabled="true" disabled>
      <div class="fd-input-group fd-input-group--control" aria-disabled="true" disabled>
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
  <div class="fd-popover__control" aria-controls="F4GcX348" aria-expanded="false" aria-haspopup="false" aria-readonly="true" readonly>
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
      <div class="fd-popover__control" aria-controls="F4GcEX34" aria-expanded="false" aria-haspopup="true">
                <div class="fd-input-group fd-input-group--control is-valid">
                    <input type="text" class="fd-input fd-input--compact fd-input-group__input" id="" placeholder="Select Fruit">
                    <span class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button">
                        <button class="fd-input-group__button fd-button--compact fd-button--light sap-icon--navigation-down-arrow fd-select__button" 
                        aria-controls="F4GcEX34" aria-expanded="false" aria-haspopup="true"></button>
                    </span>
                </div>
            </div>
      <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="F4GcEX34">
            <ul class="fd-dropdown fd-dropdown--has-message fd-dropdown--compact" role="listbox">
                <li class="fd-dropdown__message fd-dropdown__message--success">Success message</li>
                <li role="option" tabindex="0" class="fd-dropdown__item is-selected">
                    <span class="fd-dropdown__title">List item 1</span>
                </li>
                <li role="option" tabindex="0" class="fd-dropdown__item">
                    <span class="fd-dropdown__title">List item 2</span>
                </li>
                <li role="option" tabindex="0" class="fd-dropdown__item">
                    <span class="fd-dropdown__title">List item 3</span>
                </li>
                <li role="option" tabindex="0" class="fd-dropdown__item">
                    <span class="fd-dropdown__title">List item 4</span>
                </li>
            </ul>
      </div>
  </div>
</div>
<span class="fd-form-message fd-form-message--static fd-form-message--success">Success message</span>
{% endcapture %}
{% include display-component.html component=semantic %}
