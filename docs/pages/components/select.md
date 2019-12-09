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
<div class="documentation-site-popover-container break break--single">
   <div class="fd-popover">
      <div class="fd-popover__control">
         <div class="fd-select">
            <button class="fd-select__control" aria-controls="h0C6A325" aria-expanded="false" aria-haspopup="true">
               Select
            </button>
         </div>
      </div>
      <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="h0C6A325">
         <ul class="fd-list fd-list--no-border" role="listbox">
            <li class="fd-list__item" role="option">
               <span class="fd-list__title">List item 1</span>
            </li>
            <li class="fd-list__item" role="option">
               <span class="fd-list__title">List item 2</span>
            </li>
            <li class="fd-list__item" role="option">
               <span class="fd-list__title">List item 3</span>
            </li>
            <li class="fd-list__item" role="option">
               <span class="fd-list__title">List item 4</span>
            </li>
         </ul>
      </div>
   </div>
</div>
<h4>Compact Size</h4>
<div class="documentation-site-popover-container">
   <div class="fd-popover">
      <div class="fd-popover__control">
         <div class="fd-select fd-select--compact">
            <button class="fd-select__control" aria-controls="h0C6A326" aria-expanded="false" aria-haspopup="true">
               Select
            </button>
         </div>
      </div>
      <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="h0C6A326">
         <ul class="fd-list fd-list--no-border fd-list--compact" role="listbox">
            <li class="fd-list__item" role="option">
               <span class="fd-list__title">List item 1</span>
            </li>
            <li class="fd-list__item" role="option">
               <span class="fd-list__title">List item 2</span>
            </li>
            <li class="fd-list__item" role="option">
               <span class="fd-list__title">List item 3</span>
            </li>
            <li class="fd-list__item" role="option">
               <span class="fd-list__title">List item 4</span>
            </li>
         </ul>
      </div>
   </div>
</div>
{% endcapture %}

{% include display-component.html component=select-sizes %}

## Inline

{% capture inline-select %}
<div class="fd-popover">
   <div class="fd-popover__control">
      <div class="fd-select fd-select--inline">
         <button class="fd-select__control" aria-controls="h0C6A335" aria-expanded="false" aria-haspopup="true">
            Select
         </button>
      </div>
   </div>
   <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="h0C6A335">
      <ul class="fd-list fd-list--no-border" role="listbox">
         <li class="fd-list__item" role="option">
            <span class="fd-list__title">List item 1</span>
         </li>
         <li class="fd-list__item" role="option">
            <span class="fd-list__title">List item 2</span>
         </li>
         <li class="fd-list__item" role="option">
            <span class="fd-list__title">List item 3</span>
         </li>
         <li class="fd-list__item" role="option">
            <span class="fd-list__title">List item 4</span>
         </li>
      </ul>
   </div>
</div>

<div class="fd-popover">
   <div class="fd-popover__control">
      <div class="fd-select fd-select--inline fd-select--compact">
         <button class="fd-select__control" aria-controls="h0C6A336" aria-expanded="false" aria-haspopup="true">
            Select
         </button>
      </div>
   </div>
   <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="h0C6A336">
      <ul class="fd-list fd-list--no-border fd-list--compact" role="listbox">
         <li class="fd-list__item" role="option">
            <span class="fd-list__title">List item 1</span>
         </li>
         <li class="fd-list__item" role="option">
            <span class="fd-list__title">List item 2</span>
         </li>
         <li class="fd-list__item" role="option">
            <span class="fd-list__title">List item 3</span>
         </li>
         <li class="fd-list__item" role="option">
            <span class="fd-list__title">List item 4</span>
         </li>
      </ul>
   </div>
</div>
{% endcapture %}

{% include display-component.html component=inline-select %}


## Disabled State

Disabled state can be rendered with a `disabled` attribute.

{% capture disabled-select %}
<div class="fd-select">
   <button class="fd-select__control" aria-controls="" aria-expanded="false" aria-haspopup="true" disabled>
      Select
   </button>
</div>
{% endcapture %}

{% include display-component.html component=disabled-select %}
