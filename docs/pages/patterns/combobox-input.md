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

The Combobox Input component is an opinionated composition of the input group, popover and list components. 
The popover and `dropdown list` is shared between the multi-input and select components.
Please see the `select` documentation for the complete list of modifiers that are also  supported by the combobox component.
<br/><br/>
`Combobox` allows users to select an item from a predefined list. 
It provides an editable input field for filtering the list, and a dropdown menu with a list of the available options. 
If the entries are not validated by the application, users can also enter custom values.
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
              <button class="fd-input-group__button fd-button fd-button--transparent sap-icon--navigation-down-arrow" aria-controls="F4GcX348" aria-expanded="false" aria-haspopup="true"></button>
          </span>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="true" id="F4GcX348">
    <div class="fd-popover__body__no-overflow">
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
                <button class="fd-input-group__button fd-button fd-button--compact fd-button--transparent sap-icon--navigation-down-arrow fd-select__button" aria-controls="F4GcX34" aria-expanded="false" aria-haspopup="true"></button>
            </span>
        </div>
    </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="true" id="F4GcX34">
    <div class="fd-popover__body__no-overflow">
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
</div>
{% endcapture %}
{% include display-component.html component=default %}

## Two Columns
The `ComboBox` component can be customized by adding additional information in additional columns as seen below.

{% capture default %}
<div class="fd-popover">
  <div class="fd-popover__control" aria-controls="F4GRTGLK6" aria-expanded="false" aria-haspopup="true">
      <div class="fd-input-group fd-input-group--control">
          <input type="text" class="fd-input fd-input-group__input" id="" placeholder="Select Product">
          <span class="fd-input-group__addon fd-input-group__addon--button">
              <button class="fd-input-group__button fd-button fd-button--transparent sap-icon--navigation-down-arrow" aria-controls="F4GRTGLK6" aria-expanded="false" aria-haspopup="true"></button>
          </span>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="true" id="F4GRTGLK6">
    <div class="fd-popover__body__no-overflow">
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
</div>
{% endcapture %}
{% include display-component.html component=default %}

## Combobox with Items Grouping
In cases where the list items need to be categorized into groups, it is possible to add headers for each category.
 
{% capture combobox-group %}
<div class="fd-popover">
  <div class="fd-popover__control" aria-controls="F4GcXLK6" aria-expanded="false" aria-haspopup="true">
      <div class="fd-input-group fd-input-group--control">
          <input type="text" class="fd-input fd-input-group__input" id="" placeholder="Select Ingredient">
          <span class="fd-input-group__addon fd-input-group__addon--button">
              <button class="fd-input-group__button fd-button fd-button--transparent sap-icon--navigation-down-arrow" aria-controls="F4GcXLK6" aria-expanded="false" aria-haspopup="true"></button>
          </span>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="true" id="F4GcXLK6">
    <div class="fd-popover__body__no-overflow">
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
</div>
{% endcapture %}
{% include display-component.html component=combobox-group %}


## Match Popover Body Size
The default length size of the popover body is often different from the text length.
The body length can be adjusted to match the text length by adding the `fd-popover__body--dropdown-fill` 
class to the `fd-popover__body`. 
This class has been added to all the `Combobox` examples above.
In the example you can see how the `Combobox` component looks without the `fd-popover__body--dropdown-fill` modifier.

{% capture combobox-fill %}
<div class="fd-popover">
  <div class="fd-popover__control" aria-controls="F4HTFDLK6" aria-expanded="false" aria-haspopup="true">
      <div class="fd-input-group fd-input-group--control">
          <input type="text" class="fd-input fd-input-group__input" id="" placeholder="Select Ingredient">
          <span class="fd-input-group__addon fd-input-group__addon--button">
              <button class="fd-input-group__button fd-button fd-button--transparent sap-icon--navigation-down-arrow" aria-controls="F4HTFDLK6" aria-expanded="false" aria-haspopup="true"></button>
          </span>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="F4HTFDLK6">
    <div class="fd-popover__body__no-overflow">
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
</div>
{% endcapture %}
{% include display-component.html component=combobox-fill %}

## Disabled Mode
To disable a `Combobox` component, the disabled attribute needs to be added to the `fd-popover__control` and the `fd-input__control` elements.
The disabled state can also be achieved by adding the `.is-disabled` class or the `aria-disabled="true"` attribute.

{% capture disabled %}
<div class="fd-popover">
  <div class="fd-popover__control" aria-controls="F4GcX348" aria-expanded="false" aria-haspopup="true" aria-disabled="true" disabled>
      <div class="fd-input-group fd-input-group--control" aria-disabled="true" disabled>
          <input type="text" class="fd-input fd-input-group__input" id="" value="Orange" placeholder="Select Fruit">
          <span class="fd-input-group__addon fd-input-group__addon--button">
              <button class="fd-input-group__button fd-button fd-button--transparent sap-icon--navigation-down-arrow fd-select__button"></button>
          </span>
      </div>
  </div>
</div>
{% endcapture %}
{% include display-component.html component=disabled %}



## Readonly Mode
To make the `Combobox` component read-only, the readonly attribute needs to be added to the `fd-nput-group` element.
This can also be done by using the `.is-readonly` class or `aria-readonly="true"` attribute.

{% capture readonly %}
<div class="fd-popover">
  <div class="fd-popover__control" aria-controls="F4GcX348" aria-expanded="false" aria-haspopup="false" aria-readonly="true" readonly>
      <input type="text" class="fd-input fd-input-group__input" id="" value="Orange" aria-readonly="true" readonly>
  </div>
</div>
{% endcapture %}
{% include display-component.html component=readonly %}


## Semantic Mode
For a complete list of states supported by the `combobox` component, please see the documentation for the form or select components.
<br/><br/> 
The semantic mode can be used to modify the combobox component by adding one of 
`is-error` | `is-success` | `is-warning` | `is-information` classes into fd-input-group element. 
To add text in the `body` of the component, simply include your text in the `fd-list__message` under the `ul` element.


{% capture semantic %}
<div class="fd-popover">
  <div class="fd-popover__control" aria-controls="F4GcEX34" aria-expanded="false" aria-haspopup="true">
            <div class="fd-input-group fd-input-group--control is-success">
                <input type="text" class="fd-input fd-input--compact fd-input-group__input" id="" placeholder="Select Fruit">
                <span class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button">
                    <button class="fd-input-group__button fd-button fd-button--compact fd-button--transparent sap-icon--navigation-down-arrow fd-select__button" 
                    aria-controls="F4GcEX34" aria-expanded="false" aria-haspopup="true"></button>
                </span>
            </div>
        </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="true" id="F4GcEX34">
    <div class="fd-popover__body__no-overflow">
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
</div>
<span class="fd-form-message fd-form-message--static fd-form-message--success">Success message</span>
{% endcapture %}
{% include display-component.html component=semantic %}

## Combobox Mobile Mode
For mobile devices, or tablets, combobox component should be displayed in fullscreen mode.
So instead of using popover and dropdown, it should be wrapped in `dialog` and `bar` components.
{% capture mobile-combobox %}
<div class="fd-dialog fd-dialog-docs-static fd-select-docs-max-height fd-dialog--active" id="select-dialog-example">
    <div class="fd-dialog__content">
        <header class="fd-dialog__header fd-bar fd-bar--header-with-subheader">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 class="fd-dialog__title">
                        Ingredients
                    </h3>
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent sap-icon--decline" aria-label="close"></button>
                </div>
            </div>
        </header>
        <div class="fd-dialog__subheader fd-bar fd-bar--cosy fd-bar--subheader">
            <div class="fd-bar__middle">
                <div class="fd-input-group fd-input-group--control">
                     <input type="text" class="fd-input fd-input-group__input" value="Apple" id="" placeholder="Select Ingredient">
                     <span class="fd-input-group__addon fd-input-group__addon--button">
                         <button class="fd-input-group__button fd-button fd-button--transparent sap-icon--navigation-down-arrow"></button>
                     </span>
                 </div>
            </div>
        </div>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
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
       <footer class="fd-dialog__footer fd-bar fd-bar--cosy fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-dialog__decisive-button">OK</button>
                </div>
            </div>
        </footer>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=mobile-combobox %}
