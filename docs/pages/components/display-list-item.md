---
title: Display List Item
id: display-list-item
keywords: list, lists, display, item
sidebar: left-navigation-sidebar
toc: false
permalink: components/display-list-item.html
folder: components
---
The display list item is the simplest form of a list item and is only capable of showing a label and values.
{: .docs-intro}

## Display List Item

{% capture display-list-item %}
<ul class="fd-list">
  <li class="fd-display-list-item fd-display-list-item--selected" tabindex="0">
    <div class="fd-display-list-item--content">
    <div class="fd-display-list-item--label">Item 1</div>
    <div class="fd-display-list-item--value">value 1</div>
    </div>
  </li>
   <li class="fd-display-list-item" tabindex="0">
    <div class="fd-display-list-item--content">
    <div class="fd-display-list-item--label">Item 2</div>
    <span class="fd-display-list-item--value">value 2</span>
    </div>
  </li>
   <li class="fd-display-list-item" tabindex="0">
    <div class="fd-display-list-item--content">
    <div class="fd-display-list-item--label">Item 3</div>
    <span class="fd-display-list-item--value">value 3</span>
    </div>
  </li>
   <li class="fd-display-list-item" tabindex="0">
    <div class="fd-display-list-item--content">
    <div class="fd-display-list-item--label">Item 4</div>
    <span class="fd-display-list-item--value">value 4</span>
    </div>
  </li>
</ul>
{% endcapture %}

{% include display-component.html component=display-list-item %}


## Compact Display List Item

{% capture display-list-item-compact %}
<ul class="fd-list">
  <li class="fd-display-list-item fd-display-list-item--compact" tabindex="0">
    <div class="fd-display-list-item--content fd-display-list-item--content--compact">
    <div class="fd-display-list-item--label fd-display-list-item--label--compact">Item 1</div>
    <div class="fd-display-list-item--value">Value 1</div>
    </div>
  </li>
  <li class="fd-display-list-item fd-display-list-item--compact" tabindex="0">
    <div class="fd-display-list-item--content fd-display-list-item--content--compact">
    <div class="fd-display-list-item--label fd-display-list-item--label--compact">Item 2</div>
    <div class="fd-display-list-item--value">Value 2</div>
    </div>
  </li>
  <li class="fd-display-list-item fd-display-list-item--compact" tabindex="0">
    <div class="fd-display-list-item--content fd-display-list-item--content--compact">
    <div class="fd-display-list-item--label fd-display-list-item--label--compact">Item 3</div>
    <div class="fd-display-list-item--value">Value 3</div>
    </div>
  </li>
  <li class="fd-display-list-item fd-display-list-item--compact" tabindex="0">
    <div class="fd-display-list-item--content fd-display-list-item--content--compact">
    <div class="fd-display-list-item--label fd-display-list-item--label--compact">Item 4</div>
    <div class="fd-display-list-item--value">Value 4</div>
    </div>
  </li>
</ul>
{% endcapture %}

{% include display-component.html component=display-list-item-compact %}


## Display List Item in Action

{% capture display-list-item-action %}
<ul class="fd-list">
  <li class="fd-display-list-item fd-display-list-item--action" tabindex="0">
    <div class="fd-display-list-item--content">
    <div class="fd-display-list-item--label">Item 1</div>
     <div class="fd-display-list-item--value">value 1</div>
   <div class="sap-icon--navigation-right-arrow fd-display-list-item--navigation"></div>
    </div>
  </li>
  <li class="fd-display-list-item fd-display-list-item--action" tabindex="0">
    <div class="fd-display-list-item--content">
    <div class="fd-display-list-item--label">Item 2</div>
    <div class="fd-display-list-item--value">value 2</div>
    <div class="sap-icon--navigation-right-arrow fd-display-list-item--navigation"></div>
    </div>
  </li>
  <li class="fd-display-list-item fd-display-list-item--action" tabindex="0">
    <div class="fd-display-list-item--content">
   <div class="fd-display-list-item--label">Item 3</div>
     <div class="fd-display-list-item--value">value 3</div>
    <div class="sap-icon--navigation-right-arrow fd-display-list-item--navigation"></div>
    </div>
  </li>
  <li class="fd-display-list-item fd-display-list-item--action" tabindex="0">
    <div class="fd-display-list-item--content">
    <div class="fd-display-list-item--label">Item 4</div>
    <div class="fd-display-list-item--value">value 4</div>
    <div class="sap-icon--navigation-right-arrow fd-display-list-item--navigation"></div>
    </div>
  </li>
</ul>

{% endcapture %}

{% include display-component.html component=display-list-item-action %}
