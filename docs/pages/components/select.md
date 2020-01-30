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
<div class="documentation-site-popover-container">
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
         <ul class="fd-dropdown" role="listbox">
            <li class="fd-dropdown__item is-selected" role="option" tabindex="0">
               <span class="fd-dropdown__title">List item 1</span>
            </li>
            <li class="fd-dropdown__item" role="option" tabindex="0">
               <span class="fd-dropdown__title">List item 2</span>
           </li>
            <li class="fd-dropdown__item" role="option" tabindex="0">
               <span class="fd-dropdown__title">List item 3</span>
            </li>
            <li class="fd-dropdown__item" role="option" tabindex="0">
               <span class="fd-dropdown__title">List item 4</span>
            </li>
         </ul>
      </div>
   </div>
</div>
<br />

<h4>Compact Size</h4>
<div class="documentation-site-popover-container">
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
         <ul class="fd-dropdown fd-dropdown--compact" role="listbox">
            <li class="fd-dropdown__item is-selected" role="option" tabindex="0">
               <span class="fd-dropdown__title">
                   Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text
                   Very long text, Very long text, Very long text
               </span>
            </li>
            <li class="fd-dropdown__item" role="option" tabindex="0">
               <span class="fd-dropdown__title">List item 2</span>
            </li>
            <li class="fd-dropdown__item" role="option" tabindex="0">
               <span class="fd-dropdown__title">List item 3</span>
            </li>
            <li class="fd-dropdown__item" role="option" tabindex="0">
               <span class="fd-dropdown__title">List item 4</span>
            </li>
         </ul>
      </div>
   </div>
</div>
{% endcapture %}

{% include display-component.html component=select-sizes %}

## Two Columns

{% capture two-col %}
<div class="documentation-site-popover-container">
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
         <ul class="fd-dropdown" role="listbox">
            <li class="fd-dropdown__item is-selected" role="option" tabindex="0">
               <span class="fd-dropdown__title">List item 1</span>
               <span class="fd-dropdown__secondary">A1</span>
            </li>
            <li class="fd-dropdown__item" role="option" tabindex="0">
               <span class="fd-dropdown__title">List item 2</span>
               <span class="fd-dropdown__secondary">A2</span>
           </li>
            <li class="fd-dropdown__item" role="option" tabindex="0">
               <span class="fd-dropdown__title">List item 3</span>
               <span class="fd-dropdown__secondary">A3</span>
            </li>
            <li class="fd-dropdown__item" role="option" tabindex="0">
               <span class="fd-dropdown__title">List item 4</span>
               <span class="fd-dropdown__secondary">A4</span>
            </li>
         </ul>
      </div>
   </div>
</div>
<br />

<h4>Compact Size</h4>
<div class="documentation-site-popover-container">
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
         <ul class="fd-dropdown fd-dropdown--compact" role="listbox">
            <li class="fd-dropdown__item is-selected" role="option" tabindex="0">
               <span class="fd-dropdown__title">
                   Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text
                   Very long text, Very long text, Very long text
               </span>
               <span class="fd-dropdown__secondary">A1</span>
            </li>
            <li class="fd-dropdown__item" role="option" tabindex="0">
               <span class="fd-dropdown__title">List item 2</span>
               <span class="fd-dropdown__secondary">A2</span>
            </li>
            <li class="fd-dropdown__item" role="option" tabindex="0">
               <span class="fd-dropdown__title">List item 3</span>
               <span class="fd-dropdown__secondary">A3</span>
            </li>
            <li class="fd-dropdown__item" role="option" tabindex="0">
               <span class="fd-dropdown__title">List item 4</span>
               <span class="fd-dropdown__secondary">A4</span>
            </li>
         </ul>
      </div>
   </div>
</div>
{% endcapture %}

{% include display-component.html component=two-col %}


## Disabled State

Disabled state can be rendered with a `disabled` attribute.

{% capture disabled-select %}
<div class="documentation-site-popover-container">
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
</div>
{% endcapture %}

{% include display-component.html component=disabled-select %}


## Readonly State

Disabled state can be rendered with a `readonly` attribute.

{% capture disabled-select %}
<div class="documentation-site-popover-container">
<div class="fd-popover">
    <div class="fd-popover__control"  aria-disabled="true" disabled>
        <div class="fd-select">
            <div class="fd-select__control" aria-expanded="false" aria-haspopup="false" aria-readonly="true" readonly>
                Select
           </div>
        </div>
    </div>
</div>
</div>
{% endcapture %}

{% include display-component.html component=disabled-select %}

## Semantic States

{% capture semantic-select %}
<div class="documentation-site-popover-container">
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
         <ul class="fd-dropdown fd-dropdown--has-message fd-dropdown--compact" role="listbox">
            <li class="fd-dropdown__message fd-dropdown__message--success">Success message</li>
            <li class="fd-dropdown__item is-selected" role="option" tabindex="0">
               <span class="fd-dropdown__title">
                   List Item 1
               </span>
               <span class="fd-dropdown__secondary">A1</span>
            </li>
            <li class="fd-dropdown__item" role="option" tabindex="0">
               <span class="fd-dropdown__title">List item 2</span>
               <span class="fd-dropdown__secondary">A2</span>
            </li>
            <li class="fd-dropdown__item" role="option" tabindex="0">
               <span class="fd-dropdown__title">List item 3</span>
               <span class="fd-dropdown__secondary">A3</span>
            </li>
            <li class="fd-dropdown__item" role="option" tabindex="0">
               <span class="fd-dropdown__title">List item 4</span>
               <span class="fd-dropdown__secondary">A4</span>
            </li>
         </ul>
    </div>
</div>
</div>
<span class="fd-form-message fd-form-message--static fd-form-message--success">Success message</span>

<br/>
<br/>
<br/>

<div class="documentation-site-popover-container">
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
            <ul class="fd-dropdown fd-dropdown--has-message fd-dropdown--compact" role="listbox">
               <li class="fd-dropdown__message fd-dropdown__message--error">Error message</li>
               <li class="fd-dropdown__item is-selected" role="option" tabindex="0">
                  <span class="fd-dropdown__title">
                      List Item 1
                  </span>
                  <span class="fd-dropdown__secondary">A1</span>
               </li>
               <li class="fd-dropdown__item" role="option" tabindex="0">
                  <span class="fd-dropdown__title">List item 2</span>
                  <span class="fd-dropdown__secondary">A2</span>
               </li>
               <li class="fd-dropdown__item" role="option" tabindex="0">
                  <span class="fd-dropdown__title">List item 3</span>
                  <span class="fd-dropdown__secondary">A3</span>
               </li>
               <li class="fd-dropdown__item" role="option" tabindex="0">
                  <span class="fd-dropdown__title">List item 4</span>
                  <span class="fd-dropdown__secondary">A4</span>
               </li>
            </ul>
       </div>
    </div>
</div>
<span class="fd-form-message fd-form-message--static fd-form-message--error">Error message</span>

<br/>
<br/>
<br/>

<div class="documentation-site-popover-container">
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
            <ul class="fd-dropdown fd-dropdown--has-message fd-dropdown--compact" role="listbox">
               <li class="fd-dropdown__message fd-dropdown__message--warning">Warning message</li>
               <li class="fd-dropdown__item is-selected" role="option" tabindex="0">
                  <span class="fd-dropdown__title">
                      List Item 1
                  </span>
                  <span class="fd-dropdown__secondary">A1</span>
               </li>
               <li class="fd-dropdown__item" role="option" tabindex="0">
                  <span class="fd-dropdown__title">List item 2</span>
                  <span class="fd-dropdown__secondary">A2</span>
               </li>
               <li class="fd-dropdown__item" role="option" tabindex="0">
                  <span class="fd-dropdown__title">List item 3</span>
                  <span class="fd-dropdown__secondary">A3</span>
               </li>
               <li class="fd-dropdown__item" role="option" tabindex="0">
                  <span class="fd-dropdown__title">List item 4</span>
                  <span class="fd-dropdown__secondary">A4</span>
               </li>
            </ul>
        </div>
    </div>
</div>
<span class="fd-form-message fd-form-message--static fd-form-message--warning">Warning message</span>

<br/>
<br/>
<br/>

<div class="documentation-site-popover-container">
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
            <ul class="fd-dropdown fd-dropdown--has-message fd-dropdown--compact" role="listbox">
               <li class="fd-dropdown__message fd-dropdown__message--information">Information message</li>
               <li class="fd-dropdown__item is-selected" role="option" tabindex="0">
                  <span class="fd-dropdown__title">
                      List Item 1
                  </span>
                  <span class="fd-dropdown__secondary">A1</span>
               </li>
               <li class="fd-dropdown__item" role="option" tabindex="0">
                  <span class="fd-dropdown__title">List item 2</span>
                  <span class="fd-dropdown__secondary">A2</span>
               </li>
               <li class="fd-dropdown__item" role="option" tabindex="0">
                  <span class="fd-dropdown__title">List item 3</span>
                  <span class="fd-dropdown__secondary">A3</span>
               </li>
               <li class="fd-dropdown__item" role="option" tabindex="0">
                  <span class="fd-dropdown__title">List item 4</span>
                  <span class="fd-dropdown__secondary">A4</span>
               </li>
            </ul>
        </div>
    </div>
</div>
<span class="fd-form-message fd-form-message--static fd-form-message--information">Information message</span>

{% endcapture %}

{% include display-component.html component=semantic-select %}
