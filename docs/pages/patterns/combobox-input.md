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

The combobox input component is an opinionated composition of the `input group`, `popover` and `list` components.
The `popover` is shared between `multi-input` and `select` component. In `Select` there are much more examples of 
modifications that can be provided also to combobox component. <br/><br/>
Combobox allows users to select an item from a predefined list and it provides an editable input field for filtering 
the list, and a dropdown menu with a list of the available options. If the entries are not validated by the application,
users can also enter custom values.
{: .docs-intro}

{% capture default %}

<label class="fd-form-label">
    Combobox Cozy Mode
</label>
<br/>
<div class="fd-popover">
  <div class="fd-popover__control" aria-controls="F4GcX348" aria-expanded="false" aria-haspopup="true">
      <div class="fd-input-group fd-input-group--control">
          <input type="text" class="fd-input fd-input-group__input" id="" placeholder="Select Fruit">
          <span class="fd-input-group__addon fd-input-group__addon--button">
              <button class="fd-input-group__button fd-button--light sap-icon--navigation-down-arrow" aria-controls="F4GcX348" aria-expanded="false" aria-haspopup="true"></button>
          </span>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="true" id="F4GcX348">
        <ul class="fd-list fd-list--dropdown" role="listbox">
            <li role="option" tabindex="0" class="fd-list__item is-selected">
                <span class="fd-list__title">
                    <span class="fd-list__bold">App</span>le
                </span>
            </li>
            <li role="option" tabindex="0" class="fd-list__item">
                <span class="fd-list__title">Orange</span>
            </li>
            <li role="option" tabindex="0" class="fd-list__item">
                <span class="fd-list__title">Banana</span>
            </li>
            <li role="option" tabindex="0" class="fd-list__item">
                <span class="fd-list__title">Kiwi</span>
            </li>
        </ul>
  </div>
</div>

<br/>
<br>

<label class="fd-form-label">
    Combobox Compact Mode
</label>
<br>
<div class="fd-popover">
  <div class="fd-popover__control" aria-controls="F4GcX34" aria-expanded="false" aria-haspopup="true">
        <div class="fd-input-group fd-input-group--control">
            <input type="text" class="fd-input fd-input--compact fd-input-group__input" id="" placeholder="Select Fruit">
            <span class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button">
                <button class="fd-input-group__button fd-button--compact fd-button--light sap-icon--navigation-down-arrow fd-select__button" aria-controls="F4GcX34" aria-expanded="false" aria-haspopup="true"></button>
            </span>
        </div>
    </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="true" id="F4GcX34">
        <ul class="fd-list fd-list--dropdown fd-list--compact" role="listbox">
            <li role="option" tabindex="0" class="fd-list__item is-selected">
                <span class="fd-list__title">
                    <span class="fd-list__bold">App</span>le
                </span>
            </li>
            <li role="option" tabindex="0" class="fd-list__item">
                <span class="fd-list__title">Orange</span>
            </li>
            <li role="option" tabindex="0" class="fd-list__item">
                <span class="fd-list__title">Banana</span>
            </li>
            <li role="option" tabindex="0" class="fd-list__item">
                <span class="fd-list__title">Kiwi</span>
            </li>
        </ul>
  </div>
</div>
{% endcapture %}
{% include display-component.html component=default %}

## Combobox with 2 Columns
Second column can be used, to add some general information about item, or shortcuts. 

{% capture default %}
<div class="fd-popover">
  <div class="fd-popover__control" aria-controls="F4GRTGLK6" aria-expanded="false" aria-haspopup="true">
      <div class="fd-input-group fd-input-group--control">
          <input type="text" class="fd-input fd-input-group__input" id="" placeholder="Select Product">
          <span class="fd-input-group__addon fd-input-group__addon--button">
              <button class="fd-input-group__button fd-button--light sap-icon--navigation-down-arrow" aria-controls="F4GRTGLK6" aria-expanded="false" aria-haspopup="true"></button>
          </span>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="true" id="F4GRTGLK6">
        <ul class="fd-list fd-list--dropdown" role="listbox">
           <li class="fd-list__item is-selected" role="option" tabindex="0">
               <span class="fd-list__title">Product 1</span>
               <span class="fd-list__secondary">1000 EUR</span>
            </li>
            <li class="fd-list__item" role="option" tabindex="0">
               <span class="fd-list__title">Product 2</span>
               <span class="fd-list__secondary">750 EUR</span>
           </li>
            <li class="fd-list__item" role="option" tabindex="0">
               <span class="fd-list__title">Product 3</span>
               <span class="fd-list__secondary">780 EUR</span>
            </li>
            <li class="fd-list__item" role="option" tabindex="0">
               <span class="fd-list__title">Product 4</span>
               <span class="fd-list__secondary">40 EUR</span>
            </li>
        </ul>
  </div>
</div>
{% endcapture %}
{% include display-component.html component=default %}

## Combobox with Items Grouping
Item group headers can be used, to categorize certain types of elements.

{% capture combobox-group %}
<div class="fd-popover">
  <div class="fd-popover__control" aria-controls="F4GcXLK6" aria-expanded="false" aria-haspopup="true">
      <div class="fd-input-group fd-input-group--control">
          <input type="text" class="fd-input fd-input-group__input" id="" placeholder="Select Ingredient">
          <span class="fd-input-group__addon fd-input-group__addon--button">
              <button class="fd-input-group__button fd-button--light sap-icon--navigation-down-arrow" aria-controls="F4GcXLK6" aria-expanded="false" aria-haspopup="true"></button>
          </span>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="true" id="F4GcXLK6">
        <ul class="fd-list fd-list--dropdown" role="listbox">
            <li class="fd-list__group-header">
                Fruits
            </li>
            <li role="option" tabindex="0" class="fd-list__item is-selected">
                <span class="fd-list__title">Apple</span>
            </li>
            <li role="option" tabindex="0" class="fd-list__item">
                <span class="fd-list__title">Orange</span>
            </li>
            <li role="option" tabindex="0" class="fd-list__item">
                <span class="fd-list__title">Banana</span>
            </li>
            <li role="option" tabindex="0" class="fd-list__item">
                <span class="fd-list__title">Kiwi</span>
            </li>
            <li class="fd-list__group-header">
                Vegetables
            </li>
            <li role="option" tabindex="0" class="fd-list__item">
                <span class="fd-list__title">Tomato</span>
            </li>
            <li role="option" tabindex="0" class="fd-list__item">
                <span class="fd-list__title">Onion</span>
            </li>
            <li role="option" tabindex="0" class="fd-list__item">
                <span class="fd-list__title">Spinach</span>
            </li>
            <li role="option" tabindex="0" class="fd-list__item">
                <span class="fd-list__title">Potato</span>
            </li>
        </ul>
  </div>
</div>
{% endcapture %}
{% include display-component.html component=combobox-group %}


## Match Popover Body Size
By default popover body takes as much width as it needs, of course with some limits. 
In general it’s not dependent on control element.
I can be changed, by adding `fd-popover__body--dropdown-fill` class to `fd-popover__body`.
For all of Combobox examples this class is added. There is example below how does it look without 
`fd-popover__body--dropdown-fill`
{% capture combobox-fill %}
<div class="fd-popover">
  <div class="fd-popover__control" aria-controls="F4HTFDLK6" aria-expanded="false" aria-haspopup="true">
      <div class="fd-input-group fd-input-group--control">
          <input type="text" class="fd-input fd-input-group__input" id="" placeholder="Select Ingredient">
          <span class="fd-input-group__addon fd-input-group__addon--button">
              <button class="fd-input-group__button fd-button--light sap-icon--navigation-down-arrow" aria-controls="F4HTFDLK6" aria-expanded="false" aria-haspopup="true"></button>
          </span>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="F4HTFDLK6">
        <ul class="fd-list fd-list--dropdown" role="listbox">
            <li role="option" tabindex="0" class="fd-list__item is-selected">
                <span class="fd-list__title">Apple</span>
            </li>
            <li role="option" tabindex="0" class="fd-list__item">
                <span class="fd-list__title">Orange</span>
            </li>
            <li role="option" tabindex="0" class="fd-list__item">
                <span class="fd-list__title">Banana</span>
            </li>
            <li role="option" tabindex="0" class="fd-list__item">
                <span class="fd-list__title">Kiwi</span>
            </li>
        </ul>
  </div>
</div>
{% endcapture %}
{% include display-component.html component=combobox-fill %}

## Disabled Mode
To add disabled state, it is mandatory to add `disabled` attribute to `fd-popover__control` and `fd-nput-group` element
Disabled state can be enabled also by adding `.is-disabled` class, or `aria-disabled="true"` 

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
To add readonly state, it is mandatory to add `readonly` attribute to `fd-nput-group` element
Readonly state can be enabled also by adding `.is-readonly` class, or `aria-readonly="true"` 

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
To add `semantic` mode into `combobox`, it's mandatory to add one of `is-invalid` | `is-valid` | `is-warning` | `is-information` class into `fd-input-group`
To add message inside `body`, it's needed to put element with `fd-list__message` class.
Also the `fd-list--has-message` modifier should be added to `ul` element.

{% capture semantic %}
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
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="true" id="F4GcEX34">
        <ul class="fd-list fd-list--has-message fd-list--dropdown fd-list--compact" role="listbox">
            <li class="fd-list__message fd-list__message--success">Success message</li>
            <li role="option" tabindex="0" class="fd-list__item is-selected">
                <span class="fd-list__title">
                    <span class="fd-list__bold">App</span>le
                </span>
            </li>
            <li role="option" tabindex="0" class="fd-list__item">
                <span class="fd-list__title">Orange</span>
            </li>
            <li role="option" tabindex="0" class="fd-list__item">
                <span class="fd-list__title">Banana</span>
            </li>
            <li role="option" tabindex="0" class="fd-list__item">
                <span class="fd-list__title">Kiwi</span>
            </li>
        </ul>
  </div>
</div>
<span class="fd-form-message fd-form-message--static fd-form-message--success">Success message</span>
{% endcapture %}
{% include display-component.html component=semantic %}
