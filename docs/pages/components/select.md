---
title: Select
id: select
keywords: select, dropdown, dropdowns
sidebar: left-navigation-sidebar
toc: false
permalink: components/select.html
folder: components
tags: [f3, a11y, theme]
---

The select component is commonly used to enable users to select an item from a predefined list.
It should be used when there are less than 12 items to choose from. 
For lists that require more than 12 options, the <a href="/patterns/combobox-input.html">Combobox Input</a> should be used.
{: .docs-intro}

## Sizes

{% capture select-sizes %}
<label class="fd-form-label" id="f45564A57">
    Select Cozy Mode
</label>
<br>
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select">
         <div
            aria-controls="s12LFMR5"
            aria-expanded="false"
            aria-haspopup="listbox"
            class="fd-select__control"
            role="combobox"
            tabindex="0">
             <span class="fd-select__text-content">Select</span>
             <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
         </div>
      </div>
  </div>
  <div
    aria-hidden="true"
    class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown"
    id="h0C6A325">
     <ul
        aria-labelledby="f45564A57"
        class="fd-list fd-list--dropdown"
        role="listbox"
        id="s12LFMR5">
        <li aria-selected="true"
            class="fd-list__item is-selected"
            role="option"
            tabindex="0">
           <span class="fd-list__title">List item 1</span>
        </li>
        <li class="fd-list__item"
            role="option"
            tabindex="-1">
           <span class="fd-list__title">List item 2</span>
       </li>
        <li class="fd-list__item"
            role="option"
            tabindex="-1">
           <span class="fd-list__title">List item 3</span>
        </li>
        <li class="fd-list__item"
            role="option"
            tabindex="-1">
           <span class="fd-list__title">List item 4</span>
        </li>
     </ul>
  </div>
</div>
<br />
<br />

<label class="fd-form-label" id="f45564A58">
    Select Compact Mode
</label>
<br>
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select fd-select--compact">
        <div class="fd-select__control" role="combobox" tabindex="0" aria-controls="o53EM7U8" aria-expanded="false" aria-haspopup="listbox">
            <span class="fd-select__text-content">Select</span>
            <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
        </div>
     </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h0C6A326">
     <ul tabIndex="-1" aria-labelledby="f45564A58" class="fd-list fd-list--dropdown fd-list--compact" role="listbox" id="o53EM7U8">
        <li class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
           <span class="fd-list__title">
               Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text, Very long text
               Very long text, Very long text, Very long text
           </span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 2</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 3</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 4</span>
        </li>
     </ul>
  </div>
</div>
{% endcapture %}

{% include display-component.html component=select-sizes %}

## Two Columns
The `Select` component can be customized by adding additional information in additional columns.

{% capture two-col %}
<label class="fd-form-label" id="f45564A59">
    Select Cozy Mode With 2 Columns
</label>
<br>
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select">
         <div class="fd-select__control" role="combobox" tabindex="0" aria-controls="a34FL7NC" aria-expanded="false" aria-haspopup="listbox">
             <span class="fd-select__text-content">Select Product</span>
             <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
         </div>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h0C62325">
     <ul tabIndex="-1" aria-labelledby="f45564A59" class="fd-list fd-list--dropdown" role="listbox" id="a34FL7NC">
        <li class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
           <span class="fd-list__title">Product 1</span>
           <span class="fd-list__secondary">1000 EUR</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">Product 2</span>
           <span class="fd-list__secondary">750 EUR</span>
       </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">Product 3</span>
           <span class="fd-list__secondary">780 EUR</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">Product 4</span>
           <span class="fd-list__secondary">40 EUR</span>
        </li>
     </ul>
  </div>
</div>
<br />
<br />


<label class="fd-form-label" id="g45564A59">
    Select Compact Mode With 2 Columns 
</label>
<br>
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select fd-select--compact">
        <div class="fd-select__control" role="combobox" tabindex="0" aria-controls="s12LFMR5" aria-expanded="false" aria-haspopup="listbox">
            <span class="fd-select__text-content">Select Product</span>
            <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
        </div>
     </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h07jj326">
     <ul tabIndex="-1" aria-labelledby="g45564A59" class="fd-list fd-list--dropdown fd-list--compact" role="listbox" id="s12LFMR5">
        <li class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
           <span class="fd-list__title">Product 1</span>
           <span class="fd-list__secondary">1000 EUR</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">Product 2</span>
           <span class="fd-list__secondary">750 EUR</span>
       </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">Product 3</span>
           <span class="fd-list__secondary">780 EUR</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">Product 4</span>
           <span class="fd-list__secondary">40 EUR</span>
        </li>
     </ul>
  </div>
</div>


<br />
<br />


<label class="fd-form-label" id="g45564A50">
    Select Cozy Mode With 2 Columns and Icons
</label>
<br>
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select">
         <div class="fd-select__control" role="combobox" tabindex="0" aria-controls="t53GL7U8" aria-expanded="false" aria-haspopup="listbox">
             <span class="fd-select__text-content">Select Product</span>
             <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
         </div>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h090G325">
     <ul tabIndex="-1" aria-labelledby="g45564A50" class="fd-list fd-list--dropdown" role="listbox" id="t53GL7U8">
        <li class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
           <span class="fd-list__icon sap-icon--marketing-campaign"></span>
           <span class="fd-list__title">Marketing</span>
           <span class="fd-list__secondary">1000 EUR</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__icon sap-icon--save"></span>
           <span class="fd-list__title">Backups</span>
           <span class="fd-list__secondary">500 EUR</span>
       </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__icon sap-icon--shipping-status"></span>
           <span class="fd-list__title">Shipping</span>
           <span class="fd-list__secondary">125 EUR</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
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
In cases where the list items need to be categorized into groups, it is possible to add headers for each category.

{% capture select-group %}
<label class="fd-form-label" id="g45464A50">
    Select with Items Grouping
</label>
<br>
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select">
         <div class="fd-select__control" role="combobox" tabindex="0" aria-controls="wGH468IL" aria-expanded="false" aria-haspopup="listbox">
             <span class="fd-select__text-content">Select Ingredient</span>
             <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
         </div>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="true" id="h09GDGG325">
        <ul tabIndex="-1" aria-labelledby="g45464A50" class="fd-list fd-list--dropdown" role="listbox" id="wGH468IL">
            <li class="fd-list__group-header">
                Fruits
            </li>
            <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                <span class="fd-list__title">Apple</span>
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
                <span class="fd-list__title">Orange</span>
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
                <span class="fd-list__title">Banana</span>
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
                <span class="fd-list__title">Kiwi</span>
            </li>
            <li class="fd-list__group-header">
                Vegetables
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
                <span class="fd-list__title">Tomato</span>
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
                <span class="fd-list__title">Onion</span>
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
                <span class="fd-list__title">Spinach</span>
            </li>
            <li role="option" tabindex="-1" class="fd-list__item">
                <span class="fd-list__title">Potato</span>
            </li>
        </ul>
  </div>
</div>
{% endcapture %}
{% include display-component.html component=select-group %}

## Text Wrapping
In the `Select` component, the text is wrapped by default. In order to prevent the text from wrapping, 
the `--no-wrap` modifier can be added to the `fd-list__title`, or `fd-list__secondary` elements.

{% capture select-wrap %}
<label class="fd-form-label" id="g45464A40">
    Select with more text
</label>
<br>
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select">
         <div class="fd-select__control" role="combobox" tabindex="0" aria-controls="s34GLW8I" aria-expanded="false" aria-haspopup="listbox">
             <span class="fd-select__text-content">Select</span>
             <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
         </div>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h0GFF2325">
     <ul tabIndex="-1" aria-labelledby="g45464A40" class="fd-list fd-list--dropdown" role="listbox" id="s34GLW8I">
        <li class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
           <span class="fd-list__title">Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text </span>
           <span class="fd-list__secondary">A1</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 2</span>
           <span class="fd-list__secondary">A2</span>
       </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 3</span>
           <span class="fd-list__secondary">A3</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 4</span>
           <span class="fd-list__secondary">A4</span>
        </li>
     </ul>
  </div>
</div>
<br />
<br />


<label class="fd-form-label" id="g45464B40">
    Select with more text and removed wrapping
</label>
<br>
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select fd-select--compact">
        <div class="fd-select__control" role="combobox" tabindex="0" aria-controls="e36GLS1W" aria-expanded="false" aria-haspopup="listbox">
            <span class="fd-select__text-content">Select</span>
            <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
        </div>
     </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h0GZH2325">
     <ul tabIndex="-1" aria-labelledby="g45464B40" class="fd-list fd-list--dropdown fd-list--compact" role="listbox" id="e36GLS1W">
        <li class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
           <span class="fd-list__title fd-list__title--no-wrap">
               Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text Very Long Text 
           </span>
           <span class="fd-list__secondary">A1</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 2</span>
           <span class="fd-list__secondary">A2</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 3</span>
           <span class="fd-list__secondary">A3</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 4</span>
           <span class="fd-list__secondary">A4</span>
        </li>
     </ul>
  </div>
</div>
{% endcapture %}

{% include display-component.html component=select-wrap %}


## Match Select Popover Body Size
The default size for the popover body is often longer than the text length. 
The length can be adjusted to match the text length by adding the `fd-popover__body--dropdown-fill` class to `fd-popover__body`.
{% capture select-fill %}
<label class="fd-form-label" id="g4546C40">
    Fill Control Element
</label>
<br>
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select">
         <div class="fd-select__control" role="combobox" tabindex="0" aria-controls="s490DG4M" aria-expanded="false" aria-haspopup="listbox">
             <span class="fd-select__text-content">Much Longer than Usual</span>
             <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
         </div>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="true" id="h0GTKE325">
     <ul tabIndex="-1" aria-labelledby="g4546C40" class="fd-list fd-list--dropdown" role="listbox" id="s490DG4M">
        <li class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
           <span class="fd-list__title">List item 1</span>
           <span class="fd-list__secondary">A1</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 2</span>
           <span class="fd-list__secondary">A2</span>
       </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 3</span>
           <span class="fd-list__secondary">A3</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 4</span>
           <span class="fd-list__secondary">A4</span>
        </li>
     </ul>
  </div>
</div>
{% endcapture %}

{% include display-component.html component=select-fill %}


## Disabled State
To disable a `Select` component, the `aria-disabled="true"` attribute needs to be added to the `fd-popover__control` and the `fd-select__control` elements.

{% capture disabled-select %}
<div class="fd-popover">
    <div class="fd-popover__control" aria-disabled="true">
        <div class="fd-select">
            <div class="fd-select__control" role="combobox" aria-expanded="false" aria-haspopup="false" aria-disabled="true">
                <span class="fd-select__text-content">Select</span>
                <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
            </div>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=disabled-select %}


## Readonly State
To make the `Select` component read-only, the `.is-readonly` class needs to be added to the `fd-select__control` element. 

{% capture readonly-select %}
<div class="fd-popover">
    <div class="fd-popover__control">
        <div class="fd-select">
            <div class="fd-select__control is-readonly" role="combobox" tabindex="0" aria-expanded="false" aria-label="Select" aria-haspopup="false">
              <span class="fd-select__text-content">Selected Item 2</span>
            </div>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=readonly-select %}

## Semantic States
The semantic mode can be used to modify the  select component by adding one of the 
`is-error` | `is-success` | `is-warning` | `is-information` classes into the `fd-select__control` element.
To add text in the body of the component, simply include your text in the `fd-list__message` under the `ul` element. 

{% capture semantic-select %}
<label class="fd-form-label" id="a4546C40">
    Success Select Example
</label>
<br>
<div class="fd-popover">
    <div class="fd-popover__control">
        <div class="fd-select">
            <div class="fd-select__control is-success" role="combobox" tabindex="0" aria-controls="h031XCM5"  aria-expanded="false" aria-haspopup="listbox">
                <span class="fd-select__text-content">Success</span>
                <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
            </div>
        </div>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h07jjhYH">
        <div aria-live="assertive" class="fd-list__message fd-list__message--success" role="alert">Success message</div>
         <ul tabIndex="-1" aria-labelledby="a4546C40" class="fd-list fd-list--has-message fd-list--dropdown fd-list--compact" role="listbox" id="h031XCM5">
            <li class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
               <span class="fd-list__title">
                   List Item 1
               </span>
               <span class="fd-list__secondary">A1</span>
            </li>
            <li class="fd-list__item" role="option" tabindex="-1">
               <span class="fd-list__title">List item 2</span>
               <span class="fd-list__secondary">A2</span>
            </li>
            <li class="fd-list__item" role="option" tabindex="-1">
               <span class="fd-list__title">List item 3</span>
               <span class="fd-list__secondary">A3</span>
            </li>
            <li class="fd-list__item" role="option" tabindex="-1">
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
<label class="fd-form-label" id="b4546C40">
    Error Select Example
</label>
<br>
<div class="fd-popover">
   <div class="fd-popover__control">
       <div class="fd-select">
           <div class="fd-select__control is-error" role="combobox" tabindex="0" aria-controls="h037CLM5"  aria-expanded="false" aria-haspopup="listbox">
               <span class="fd-select__text-content">Error</span>
               <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
           </div>
       </div>
   </div>
   <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h07j9978H">
        <div aria-live="assertive" class="fd-list__message fd-list__message--error" role="alert">Error message</div>
        <ul tabIndex="-1" aria-labelledby="b4546C40" class="fd-list fd-list--has-message fd-list--dropdown fd-list--compact" role="listbox" id="h037CLM5">
           <li class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
              <span class="fd-list__title">
                  List Item 1
              </span>
              <span class="fd-list__secondary">A1</span>
           </li>
           <li class="fd-list__item" role="option" tabindex="-1">
              <span class="fd-list__title">List item 2</span>
              <span class="fd-list__secondary">A2</span>
           </li>
           <li class="fd-list__item" role="option" tabindex="-1">
              <span class="fd-list__title">List item 3</span>
              <span class="fd-list__secondary">A3</span>
           </li>
           <li class="fd-list__item" role="option" tabindex="-1">
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
<label class="fd-form-label" id="b45336C4">
    Warning Select Example
</label>
<br />
<div class="fd-popover">
   <div class="fd-popover__control">
       <div class="fd-select">
           <div class="fd-select__control is-warning" role="combobox" tabindex="0" aria-controls="h0C62325"  aria-expanded="false" aria-haspopup="listbox">
               <span class="fd-select__text-content">Warning</span>
               <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
           </div>
       </div>
   </div>
   <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h07j998hhH">
        <div aria-live="assertive" class="fd-list__message fd-list__message--warning" role="alert">Warning message</div>
        <ul tabIndex="-1" aria-labelledby="b45336C4" class="fd-list fd-list--has-message fd-list--dropdown fd-list--compact" role="listbox" id="h0C62325">
           <li class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
              <span class="fd-list__title">
                  List Item 1
              </span>
              <span class="fd-list__secondary">A1</span>
           </li>
           <li class="fd-list__item" role="option" tabindex="-1">
              <span class="fd-list__title">List item 2</span>
              <span class="fd-list__secondary">A2</span>
           </li>
           <li class="fd-list__item" role="option" tabindex="-1">
              <span class="fd-list__title">List item 3</span>
              <span class="fd-list__secondary">A3</span>
           </li>
           <li class="fd-list__item" role="option" tabindex="-1">
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
<label class="fd-form-label" id="h45336C4">
    Information Select Example
</label>
<br />
<div class="fd-popover">
   <div class="fd-popover__control">
       <div class="fd-select">
           <div class="fd-select__control is-information" role="combobox" tabindex="0" aria-controls="d301CQF4"  aria-expanded="false" aria-haspopup="listbox">
               <span class="fd-select__text-content">Information</span>
               <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
           </div>
       </div>
   </div>
   <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="hkhh998hhH">
        <div aria-live="assertive" class="fd-list__message fd-list__message--information" role="alert">Information message</div>
        <ul tabIndex="-1" aria-labelledby="h45336C4" class="fd-list fd-list--has-message fd-list--dropdown fd-list--compact" role="listbox" id="d301CQF4">
           <li class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
              <span class="fd-list__title">
                  List Item 1
              </span>
              <span class="fd-list__secondary">A1</span>
           </li>
           <li class="fd-list__item" role="option" tabindex="-1">
              <span class="fd-list__title">List item 2</span>
              <span class="fd-list__secondary">A2</span>
           </li>
           <li class="fd-list__item" role="option" tabindex="-1">
              <span class="fd-list__title">List item 3</span>
              <span class="fd-list__secondary">A3</span>
           </li>
           <li class="fd-list__item" role="option" tabindex="-1">
              <span class="fd-list__title">List item 4</span>
              <span class="fd-list__secondary">A4</span>
           </li>
        </ul>
    </div>
</div>
<span class="fd-form-message fd-form-message--static fd-form-message--information">Information message</span>

{% endcapture %}

{% include display-component.html component=semantic-select %}

## Blank Option
If a user should not be presented with a default selection, a blank option can be added to force a user to choose. Provide an `aria-label` for the blank option for screen readers.

{% capture blank-option %}
<label class="fd-form-label" id="h45336F3">
    Select with Blank Option
</label>
<br>
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select">
         <div class="fd-select__control" role="combobox" tabindex="0" aria-controls="h090G325" aria-expanded="false" aria-haspopup="listbox">
             <span class="fd-select__text-content"></span>
             <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
         </div>
      </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h0B6A326">
     <ul tabIndex="-1" aria-labelledby="h45336F3" class="fd-list fd-list--dropdown" role="listbox" id="h090G325">
        <li class="fd-list__item is-selected" aria-label="None selected" aria-selected="true" role="option" tabIndex="0">
           <span class="fd-list__title" />
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 1</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 2</span>
       </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 3</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 4</span>
        </li>
     </ul>
  </div>
</div>
<br />
<br />
<label class="fd-form-label" id="h45336F4">
    Select with Blank Option - Compact Mode
</label>
<br>
<div class="fd-popover">
  <div class="fd-popover__control">
     <div class="fd-select fd-select--compact">
        <div class="fd-select__control" role="combobox" tabindex="0" aria-controls="f34HLM5G" aria-expanded="false" aria-haspopup="listbox">
            <span class="fd-select__text-content"></span>
            <span class="fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button"></span>
        </div>
     </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="true" id="h0B6A327">
     <ul tabIndex="-1" aria-labelledby="h45336F4" class="fd-list fd-list--dropdown fd-list--compact" role="listbox" id="f34HLM5G">
        <li class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
           <span class="fd-list__title" />
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 2</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 3</span>
        </li>
        <li class="fd-list__item" role="option" tabindex="-1">
           <span class="fd-list__title">List item 4</span>
        </li>
     </ul>
  </div>
</div>
<br />
<br />
{% endcapture %}

{% include display-component.html component=blank-option %}

## Select Mobile Mode
For mobile devices, or tablets, select component should be displayed in fullscreen mode. It can be achieved by wrapping
select component in `dialog` and `bar` components. 
{% capture disabled-select %}
<div class="fd-dialog fd-dialog-docs-static fd-select-docs-max-height fd-dialog--active" id="select-dialog-example">
    <div class="fd-dialog__content">
        <header class="fd-dialog__header fd-bar fd-bar--header-with-subheader">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 class="fd-dialog__title">
                        Select Ingredient
                    </h3>
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button tabindex="-1" class="fd-button fd-button--transparent sap-icon--decline" aria-label="close"></button>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <div aria-live="assertive" class="fd-list__message fd-list__message--information" role="alert">Choose one item</div>
            <ul class="fd-list fd-list--has-message fd-list--dropdown fd-list--compact" role="listbox">
                <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
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

{% include display-component.html component=disabled-select %}
