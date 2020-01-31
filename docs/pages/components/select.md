---
title: Select
id: select
keywords: select, dropdown, dropdowns
sidebar: left-navigation-sidebar
toc: false
permalink: components/select.html
folder: components
---

The select control (also known as a dropdown) is commonly used to enable users to select an item from a predefined list.
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

{% capture two-col %}
<label class="fd-form-label">
    Select Cozy Mode With 2 Columns
</label>
<br>
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select">
         <div class="fd-select__control" tabindex="0" aria-controls="h0C62325" aria-expanded="false" aria-haspopup="true">
             Select
             <button class="fd-button fd-button--light sap-icon--slim-arrow-down fd-select__button"></button>
         </div>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h0C62325">
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
            Select
            <button class="fd-button fd-button--light sap-icon--slim-arrow-down fd-select__button"></button>
        </div>
     </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h07jj326">
     <ul class="fd-list fd-list--dropdown fd-popover__body--dropdown fd-list--compact" role="listbox">
        <li class="fd-list__item is-selected" role="option" tabindex="0">
           <span class="fd-list__title">
               Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text
               Very long text, Very long text, Very long text
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

{% include display-component.html component=two-col %}


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
    <div class="fd-popover__control">
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
