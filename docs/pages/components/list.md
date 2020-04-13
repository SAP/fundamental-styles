---
title: List
id: list
keywords: list, lists, groups
sidebar: left-navigation-sidebar
toc: false
permalink: components/list.html
folder: components
---

In SAP Fiori, we distinguish between tables and lists. Both usually contain homogeneous data, but lists generally have rather basic data, whereas the data in tables tends to be more complex. Lists are mostly used in the master list for a master-detail scenario using the flexible column layout, as well as in popovers or dialogs.

{: .docs-intro}

## Standard List

{% capture standard-list %}
<ul class="fd-list">
  <li tabindex="0"  class="fd-list__item is-selected">
      <span class="fd-list__title">List item 1</span>
  </li>
  <li tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 2</span>
  </li>
  <li tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 3</span>
  </li>
  <li tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 4</span>
  </li>
</ul>
<br />

<h4>Compact Size</h4>
<ul class="fd-list fd-list--compact">
  <li tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 1</span>
  </li>
  <li tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 2</span>
  </li>
  <li tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 3</span>
  </li>
  <li tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 4</span>
  </li>
</ul>
{% endcapture %}

{% include display-component.html component=standard-list %}

## Secondary Data

{% capture secondary-data %}
<ul class="fd-list">
  <li tabindex="0"  class="fd-list__item is-selected">
      <span class="fd-list__title">List item 1</span>
      <span class="fd-list__secondary fd-has-color-status-1">Positive</span>
  </li>
  <li tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 2</span>
      <span class="fd-list__secondary fd-has-color-status-3">Negative</span>
  </li>
  <li tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 3</span>
      <span class="fd-list__secondary fd-has-color-status-1">Positive</span>
  </li>
  <li tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 4</span>
      <span class="fd-list__secondary fd-has-color-status-3">Negative</span>
  </li>
</ul>
{% endcapture %}

{% include display-component.html component=secondary-data %}

## Icons

{% capture list-with-icons %}
<ul class="fd-list">
  <li tabindex="0"  class="fd-list__item is-selected">
      <span class="fd-list__icon sap-icon--cart"></span>
      <span class="fd-list__title">List item 1</span>
  </li>
  <li tabindex="0"  class="fd-list__item">
      <span class="fd-list__icon sap-icon--wrench"></span>
      <span class="fd-list__title">List item 2</span>
  </li>
  <li tabindex="0"  class="fd-list__item">
      <span class="fd-list__icon sap-icon--lightbulb"></span>
      <span class="fd-list__title">List item 3</span>
  </li>
  <li tabindex="0"  class="fd-list__item">
      <span class="fd-list__icon sap-icon--history"></span>
      <span class="fd-list__title">List item 4</span>
  </li>
</ul>
<br /><br />
<ul class="fd-list">
  <li tabindex="0"  class="fd-list__item is-selected">
      <span class="fd-list__title">List item 1</span>
      <span class="fd-list__icon sap-icon--navigation-right-arrow"></span>
  </li>
  <li tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 2</span>
      <span class="fd-list__icon sap-icon--navigation-right-arrow"></span>
  </li>
  <li tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 3</span>
      <span class="fd-list__icon sap-icon--navigation-right-arrow"></span>
  </li>
</ul>
{% endcapture %}

{% include display-component.html component=list-with-icons %}

## Group Header

{% capture list-with-group-header %}
<ul class="fd-list">
  <li tabindex="0"  class="fd-list__group-header">
    Group Header 1
  </li>
  <li tabindex="0"  class="fd-list__item is-selected">
      <span class="fd-list__title">List item 1</span>
  </li>
  <li tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 2</span>
  </li>
  <li tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 3</span>
  </li>
  <li tabindex="0"  class="fd-list__group-header">
    Group Header 2
  </li>
  <li tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 4</span>
  </li>
  <li tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 5</span>
  </li>
  <li tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 6</span>
  </li>
</ul>
{% endcapture %}

{% include display-component.html component=list-with-group-header %}

## Footer

{% capture list-with-footer %}
<ul class="fd-list">
  <li tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 1</span>
  </li>
  <li tabindex="0"  class="fd-list__item is-selected">
      <span class="fd-list__title">List item 2</span>
  </li>
  <li tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 3</span>
  </li>
  <li tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 4</span>
  </li>
  <li tabindex="0"  class="fd-list__footer">
    Footer text
  </li>
</ul>
{% endcapture %}

{% include display-component.html component=list-with-footer %}

## Borderless

{% capture list-without-borders %}
<ul class="fd-list fd-list--no-border">
  <li tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 1</span>
  </li>
  <li tabindex="0"  class="fd-list__item is-selected">
      <span class="fd-list__title">List item 2</span>
  </li>
  <li tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 3</span>
  </li>
  <li tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 4</span>
  </li>
</ul>
{% endcapture %}

{% include display-component.html component=list-without-borders %}

## Display List Item

{% capture display-list-item %}
<ul class="fd-list">              
  <li tabindex="0" class="fd-list__item fd-list__item--display is-selected">
     <span class="fd-list__title">List item 1</span>
      <span class="fd-list__secondary">Complete</span>
      <span class="fd-list__icon"></span>
  </li>
   <li tabindex="0" class="fd-list__item fd-list__item--display is-active">
     <span class="fd-list__title">List item 2</span>
      <span class="fd-list__secondary">Incomplete</span>
      <span class="fd-list__icon"></span>
  </li>
   <li tabindex="0" class="fd-list__item fd-list__item--display">
     <span class="fd-list__title">List item 3</span>
      <span class="fd-list__secondary"></span>
      <span class="fd-list__icon sap-icon--navigation-right-arrow"></span>
  </li>
   <li tabindex="0" class="fd-list__item fd-list__item--display is-hover">
     <span class="fd-list__title">List item 4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</span>
      <span class="fd-list__secondary">Complete</span>
      <span class="fd-list__icon sap-icon--navigation-right-arrow"></span>
  </li>
  </ul>
<br />

<h4>Compact Size</h4>
<ul class="fd-list fd-list--compact">
<li tabindex="0" class="fd-list__item fd-list__item--display is-selected">
     <span class="fd-list__title">List item 1</span>
      <span class="fd-list__secondary">Complete</span>
      <span class="fd-list__icon"></span>
  </li>               
  <li tabindex="0" class="fd-list__item fd-list__item--display is-active">
     <span class="fd-list__title">List item 2</span>
      <span class="fd-list__secondary">Incomplete</span>
      <span class="fd-list__icon"></span>
  </li>               
  <li tabindex="0" class="fd-list__item fd-list__item--display">
     <span class="fd-list__title">List item 3</span>
      <span class="fd-list__secondary"></span>
      <span class="fd-list__icon sap-icon--navigation-right-arrow"></span>
  </li>              
  <li tabindex="0" class="fd-list__item fd-list__item--display is-hover">
     <span class="fd-list__title">List item 4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</span>
      <span class="fd-list__secondary">Complete</span>
      <span class="fd-list__icon sap-icon--navigation-right-arrow"></span>
  </li>
</ul>
<br />

<h4>In Action</h4>
<ul class="fd-list">
  <li tabindex="0"  class="fd-list__item fd-list__item--display fd-list__item--display--action is-selected">
     <span class="fd-list__title">List item 1</span>
      <span class="fd-list__secondary">Complete</span>
      <span class="fd-list__icon"></span>
  </li>
  <li tabindex="0"  class="fd-list__item fd-list__item--display fd-list__item--display--action is-active">
     <span class="fd-list__title">List item 2</span>
      <span class="fd-list__secondary">Incomplete</span>
      <span class="fd-list__icon"></span>
  </li>
  <li tabindex="0"  class="fd-list__item fd-list__item--display fd-list__item--display--action">
    <span class="fd-list__title">List item 3</span>
      <span class="fd-list__secondary"></span>
      <span class="fd-list__icon sap-icon--navigation-right-arrow"></span>
  </li>
  <li tabindex="0"  class="fd-list__item fd-list__item--display fd-list__item--display--action is-hover">
    <span class="fd-list__title">List item 4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</span>
      <span class="fd-list__secondary">Complete</span>
      <span class="fd-list__icon sap-icon--navigation-right-arrow"></span>
  </li>
</ul>
{% endcapture %}

{% include display-component.html component=display-list-item %}



## Action List Item

{% capture action-list-item %}
<ul class="fd-list">
<li tabindex="0" class="fd-list__item fd-list__item--action">
     <span class="fd-list__title">Reject</span></li>
  <li tabindex="0" class="fd-list__item fd-list__item--action is-selected">
     <span class="fd-list__title">Accept</span></li>
  <li tabindex="0" class="fd-list__item fd-list__item--action is-active">
     <span class="fd-list__title">Delete</span></li>
  <li tabindex="0" class="fd-list__item fd-list__item--action is-hover">
     <span class="fd-list__title">Mail</span></li>
  </ul>
<br />

<h4>Compact Size</h4>
<ul class="fd-list fd-list--compact">
 <li tabindex="0" class="fd-list__item fd-list__item--action">
     <span class="fd-list__title">Reject</span></li>
   <li tabindex="0" class="fd-list__item fd-list__item--action is-selected">
     <span class="fd-list__title">Accept</span></li>
  <li tabindex="0" class="fd-list__item fd-list__item--action is-active">
     <span class="fd-list__title">Delete</span></li>
   <li tabindex="0" class="fd-list__item fd-list__item--action is-hover">
     <span class="fd-list__title">Mail</span></li>
</ul>
{% endcapture %}

{% include display-component.html component=action-list-item %}