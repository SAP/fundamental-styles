---
title: Select
id: select
keywords: select, dropdown, dropdowns
sidebar: left-navigation-sidebar
toc: false
permalink: components/select.html
folder: components
---

The select control (also known as a dropdown) is commonly used to enable users, to select an item from a predefined list. 
It should be used, when there is less than 12 items to choose. Otherwise  <a href="/patterns/combobox-input.html">
Combobox Input</a> should be used.
{: .docs-intro}

## Sizes

{% capture select-sizes %}
<label class="fd-form-label">
    Select Cozy Mode
</label>
<br>
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select">
         <div class="fd-select__control" tabindex="0" aria-controls="h0C6A325" aria-expanded="false" aria-haspopup="true">
             Select
             <button class="fd-button fd-button--light sap-icon--slim-arrow-down fd-select__button"></button>
         </div>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h0C6A325">
     <ul class="fd-list fd-list--dropdown" role="listbox">
        <li class="fd-list__item is-selected" role="option" tabindex="0">
           <span class="fd-list__title">List item 1</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="0">
           <span class="fd-list__title">List item 2</span>
       </li>
        <li class="fd-list__item" role="option" tabindex="0">
           <span class="fd-list__title">List item 3</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="0">
           <span class="fd-list__title">List item 4</span>
        </li>
     </ul>
  </div>
</div>
<br />
<br />

<label class="fd-form-label">
    Select Compact Mode
</label>
<br>
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select fd-select--compact">
        <div class="fd-select__control" tabindex="0" aria-controls="h0C6A326" aria-expanded="false" aria-haspopup="true">
            Select
            <button class="fd-button fd-button--light sap-icon--slim-arrow-down fd-select__button"></button>
        </div>
     </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h0C6A326">
     <ul class="fd-list fd-list--dropdown fd-list--compact" role="listbox">
        <li class="fd-list__item is-selected" role="option" tabindex="0">
           <span class="fd-list__title">
               Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text
               Very long text, Very long text, Very long text
           </span>
        </li>
        <li class="fd-list__item" role="option" tabindex="0">
           <span class="fd-list__title">List item 2</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="0">
           <span class="fd-list__title">List item 3</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="0">
           <span class="fd-list__title">List item 4</span>
        </li>
     </ul>
  </div>
</div>
{% endcapture %}

{% include display-component.html component=select-sizes %}

## Two Columns
Second column can be used, to add some general information about item, or shortcuts. 

{% capture two-col %}
<label class="fd-form-label">
    Select Cozy Mode With 2 Columns
</label>
<br>
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select">
         <div class="fd-select__control" tabindex="0" aria-controls="h0C62325" aria-expanded="false" aria-haspopup="true">
             Select Product
             <button class="fd-button fd-button--light sap-icon--slim-arrow-down fd-select__button"></button>
         </div>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h0C62325">
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
<br />
<br />


<label class="fd-form-label">
    Select Compact Mode With 2 Columns 
</label>
<br>
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select fd-select--compact">
        <div class="fd-select__control" tabindex="0" aria-controls="h07jj326" aria-expanded="false" aria-haspopup="true">
            Select Product
            <button class="fd-button fd-button--light sap-icon--slim-arrow-down fd-select__button"></button>
        </div>
     </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h07jj326">
     <ul class="fd-list fd-list--dropdown fd-list--compact" role="listbox">
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


<br />
<br />


<label class="fd-form-label">
    Select Cozy Mode With 2 Columns and Icons
</label>
<br>
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select">
         <div class="fd-select__control" tabindex="0" aria-controls="h090G325" aria-expanded="false" aria-haspopup="true">
             Select Product
             <button class="fd-button fd-button--light sap-icon--slim-arrow-down fd-select__button"></button>
         </div>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h090G325">
     <ul class="fd-list fd-list--dropdown" role="listbox">
        <li class="fd-list__item is-selected" role="option" tabindex="0">
           <span class="fd-list__icon sap-icon--marketing-campaign"></span>
           <span class="fd-list__title">Marketing</span>
           <span class="fd-list__secondary">1000 EUR</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="0">
           <span class="fd-list__icon sap-icon--save"></span>
           <span class="fd-list__title">Backups</span>
           <span class="fd-list__secondary">500 EUR</span>
       </li>
        <li class="fd-list__item" role="option" tabindex="0">
           <span class="fd-list__icon sap-icon--shipping-status"></span>
           <span class="fd-list__title">Shipping</span>
           <span class="fd-list__secondary">125 EUR</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="0">
           <span class="fd-list__icon sap-icon--headset"></span>
           <span class="fd-list__title">Consulting</span>
           <span class="fd-list__secondary">200 EUR</span>
        </li>
     </ul>
  </div>
</div>
{% endcapture %}

{% include display-component.html component=two-col %}



## Select with Items Grouping
Item group headers can be used, to categorize certain types of elements.

{% capture select-group %}
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select">
         <div class="fd-select__control" tabindex="0" aria-controls="h09GDGG325" aria-expanded="false" aria-haspopup="true">
             Select Ingredient
             <button class="fd-button fd-button--light sap-icon--slim-arrow-down fd-select__button"></button>
         </div>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="true" id="h09GDGG325">
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
{% include display-component.html component=select-group %}

## Text Wrapping
By default text is wrapped, to prevent from wrapping, there is a need to use `--no-wrap` modifier for 
`fd-list__title`, or `fd-list__secondary` element.

{% capture select-wrap %}
<label class="fd-form-label">
    Select with more text
</label>
<br>
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select">
         <div class="fd-select__control" tabindex="0" aria-controls="h0GFF2325" aria-expanded="false" aria-haspopup="true">
             Select
             <button class="fd-button fd-button--light sap-icon--slim-arrow-down fd-select__button"></button>
         </div>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h0GFF2325">
     <ul class="fd-list fd-list--dropdown" role="listbox">
        <li class="fd-list__item is-selected" role="option" tabindex="0">
           <span class="fd-list__title">Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text </span>
           <span class="fd-list__secondary">A1</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="0">
           <span class="fd-list__title">List item 2</span>
           <span class="fd-list__secondary">A2</span>
       </li>
        <li class="fd-list__item" role="option" tabindex="0">
           <span class="fd-list__title">List item 3</span>
           <span class="fd-list__secondary">A3</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="0">
           <span class="fd-list__title">List item 4</span>
           <span class="fd-list__secondary">A4</span>
        </li>
     </ul>
  </div>
</div>
<br />
<br />


<label class="fd-form-label">
    Select with more text and removed wrapping
</label>
<br>
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select fd-select--compact">
        <div class="fd-select__control" tabindex="0" aria-controls="h0GZH2325" aria-expanded="false" aria-haspopup="true">
            Select
            <button class="fd-button fd-button--light sap-icon--slim-arrow-down fd-select__button"></button>
        </div>
     </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h0GZH2325">
     <ul class="fd-list fd-list--dropdown fd-list--compact" role="listbox">
        <li class="fd-list__item is-selected" role="option" tabindex="0">
           <span class="fd-list__title fd-list__title--no-wrap">
               Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text 
           </span>
           <span class="fd-list__secondary">A1</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="0">
           <span class="fd-list__title">List item 2</span>
           <span class="fd-list__secondary">A2</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="0">
           <span class="fd-list__title">List item 3</span>
           <span class="fd-list__secondary">A3</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="0">
           <span class="fd-list__title">List item 4</span>
           <span class="fd-list__secondary">A4</span>
        </li>
     </ul>
  </div>
</div>
{% endcapture %}

{% include display-component.html component=select-wrap %}


## Match Select Popover Body Size
By default popover body takes as much width as it needs, of course with some limits. In general it's not dependent on
control element. There is way to change it, by adding `fd-popover__body--dropdown-fill` class to `fd-popover__body`.
{% capture select-fill %}
<label class="fd-form-label">
    Fill Control Element
</label>
<br>
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select">
         <div class="fd-select__control" tabindex="0" aria-controls="h0GTKE325" aria-expanded="false" aria-haspopup="true">
             Select Title Much Longer Than Usually
             <button class="fd-button fd-button--light sap-icon--slim-arrow-down fd-select__button"></button>
         </div>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="true" id="h0GTKE325">
     <ul class="fd-list fd-list--dropdown" role="listbox">
        <li class="fd-list__item is-selected" role="option" tabindex="0">
           <span class="fd-list__title">List item 1</span>
           <span class="fd-list__secondary">A1</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="0">
           <span class="fd-list__title">List item 2</span>
           <span class="fd-list__secondary">A2</span>
       </li>
        <li class="fd-list__item" role="option" tabindex="0">
           <span class="fd-list__title">List item 3</span>
           <span class="fd-list__secondary">A3</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="0">
           <span class="fd-list__title">List item 4</span>
           <span class="fd-list__secondary">A4</span>
        </li>
     </ul>
  </div>
</div>
{% endcapture %}

{% include display-component.html component=select-fill %}


## Disabled State
To add disabled state, it is mandatory to add `disabled` attribute to `fd-popover__control` and `fd-select__control` element
Disabled state can be enabled also by adding `.is-disabled` class, or `aria-disabled="true"` 

{% capture disabled-select %}
<div class="fd-popover">
    <div class="fd-popover__control" aria-disabled="true" disabled>
        <div class="fd-select">
            <div class="fd-select__control" aria-expanded="false" aria-haspopup="false" aria-disabled="true" disabled>
                Select
                <button class="fd-button sap-icon--slim-arrow-down fd-select__button"></button>
            </div>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=disabled-select %}


## Readonly State
To add readonly state, it is mandatory to add `readonly` attribute to `fd-select__control` element
Readonly state can be enabled also by adding `.is-readonly` class, or `aria-readonly="true"` 

{% capture disabled-select %}
<div class="fd-popover">
    <div class="fd-popover__control" aria-expanded="false" aria-haspopup="false" aria-readonly="true" readonly>
        <div class="fd-select">
            <div class="fd-select__control" aria-expanded="false" aria-haspopup="false" aria-readonly="true" readonly>
                Select
           </div>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=disabled-select %}

## Semantic States
To add `semantic` mode into `select`, it's mandatory to add one of `is-invalid` | `is-valid` | `is-warning` | `is-information` class into `fd-select__control` element
To add message inside `body`, it's needed to put element with `fd-list__message` class.
Also the `fd-list--has-message` modifier should be added to `ul` element.


{% capture semantic-select %}
<div class="fd-popover">
    <div class="fd-popover__control">
        <div class="fd-select">
            <div class="fd-select__control is-valid" tabindex="0" aria-controls="h07jjhYH"  aria-expanded="false" aria-haspopup="true">
                Valid
                <button class="fd-button sap-icon--slim-arrow-down fd-select__button"></button>
            </div>
        </div>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h07jjhYH">
         <ul class="fd-list fd-list--has-message fd-list--dropdown fd-list--compact" role="listbox">
            <li class="fd-list__message fd-list__message--success">Success message</li>
            <li class="fd-list__item is-selected" role="option" tabindex="0">
               <span class="fd-list__title">
                   List Item 1
               </span>
               <span class="fd-list__secondary">A1</span>
            </li>
            <li class="fd-list__item" role="option" tabindex="0">
               <span class="fd-list__title">List item 2</span>
               <span class="fd-list__secondary">A2</span>
            </li>
            <li class="fd-list__item" role="option" tabindex="0">
               <span class="fd-list__title">List item 3</span>
               <span class="fd-list__secondary">A3</span>
            </li>
            <li class="fd-list__item" role="option" tabindex="0">
               <span class="fd-list__title">List item 4</span>
               <span class="fd-list__secondary">A4</span>
            </li>
         </ul>
    </div>
</div>
<span class="fd-form-message fd-form-message--static fd-form-message--success">Success message</span>

<br/>
<br/>
<br/>

<div class="fd-popover">
   <div class="fd-popover__control">
       <div class="fd-select">
           <div class="fd-select__control is-invalid" tabindex="0" aria-controls="h07j9978H"  aria-expanded="false" aria-haspopup="true">
               Error
               <button class="fd-button sap-icon--slim-arrow-down fd-select__button"></button>
           </div>
       </div>
   </div>
   <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h07j9978H">
        <ul class="fd-list fd-list--has-message fd-list--dropdown fd-list--compact" role="listbox">
           <li class="fd-list__message fd-list__message--error">Error message</li>
           <li class="fd-list__item is-selected" role="option" tabindex="0">
              <span class="fd-list__title">
                  List Item 1
              </span>
              <span class="fd-list__secondary">A1</span>
           </li>
           <li class="fd-list__item" role="option" tabindex="0">
              <span class="fd-list__title">List item 2</span>
              <span class="fd-list__secondary">A2</span>
           </li>
           <li class="fd-list__item" role="option" tabindex="0">
              <span class="fd-list__title">List item 3</span>
              <span class="fd-list__secondary">A3</span>
           </li>
           <li class="fd-list__item" role="option" tabindex="0">
              <span class="fd-list__title">List item 4</span>
              <span class="fd-list__secondary">A4</span>
           </li>
        </ul>
   </div>
</div>
<span class="fd-form-message fd-form-message--static fd-form-message--error">Error message</span>

<br/>
<br/>
<br/>

<div class="fd-popover">
   <div class="fd-popover__control">
       <div class="fd-select">
           <div class="fd-select__control is-warning" tabindex="0" aria-controls="h07j998hhH"  aria-expanded="false" aria-haspopup="true">
               Warning
               <button class="fd-button sap-icon--slim-arrow-down fd-select__button"></button>
           </div>
       </div>
   </div>
   <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h07j998hhH">
        <ul class="fd-list fd-list--has-message fd-list--dropdown fd-list--compact" role="listbox">
           <li class="fd-list__message fd-list__message--warning">Warning message</li>
           <li class="fd-list__item is-selected" role="option" tabindex="0">
              <span class="fd-list__title">
                  List Item 1
              </span>
              <span class="fd-list__secondary">A1</span>
           </li>
           <li class="fd-list__item" role="option" tabindex="0">
              <span class="fd-list__title">List item 2</span>
              <span class="fd-list__secondary">A2</span>
           </li>
           <li class="fd-list__item" role="option" tabindex="0">
              <span class="fd-list__title">List item 3</span>
              <span class="fd-list__secondary">A3</span>
           </li>
           <li class="fd-list__item" role="option" tabindex="0">
              <span class="fd-list__title">List item 4</span>
              <span class="fd-list__secondary">A4</span>
           </li>
        </ul>
    </div>
</div>
<span class="fd-form-message fd-form-message--static fd-form-message--warning">Warning message</span>

<br/>
<br/>
<br/>

<div class="fd-popover">
   <div class="fd-popover__control">
       <div class="fd-select">
           <div class="fd-select__control is-information" tabindex="0" aria-controls="hkhh998hhH"  aria-expanded="false" aria-haspopup="true">
               Information
               <button class="fd-button sap-icon--slim-arrow-down fd-select__button"></button>
           </div>
       </div>
   </div>
   <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="hkhh998hhH">
        <ul class="fd-list fd-list--has-message fd-list--dropdown fd-list--compact" role="listbox">
           <li class="fd-list__message fd-list__message--information">Information message</li>
           <li class="fd-list__item is-selected" role="option" tabindex="0">
              <span class="fd-list__title">
                  List Item 1
              </span>
              <span class="fd-list__secondary">A1</span>
           </li>
           <li class="fd-list__item" role="option" tabindex="0">
              <span class="fd-list__title">List item 2</span>
              <span class="fd-list__secondary">A2</span>
           </li>
           <li class="fd-list__item" role="option" tabindex="0">
              <span class="fd-list__title">List item 3</span>
              <span class="fd-list__secondary">A3</span>
           </li>
           <li class="fd-list__item" role="option" tabindex="0">
              <span class="fd-list__title">List item 4</span>
              <span class="fd-list__secondary">A4</span>
           </li>
        </ul>
    </div>
</div>
<span class="fd-form-message fd-form-message--static fd-form-message--information">Information message</span>

{% endcapture %}

{% include display-component.html component=semantic-select %}
