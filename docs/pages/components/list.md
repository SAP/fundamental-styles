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


## Standard List with Byline

{% capture list-byline %}
<ul class="fd-list fd-list--byline">
  <li tabindex="0"  class="fd-list__item">
      <span class="sap-icon--activate fd-list__thumbnail"></span>
      <div class="fd-list__content">
        <div class="fd-list__title">Title</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
  </li>
  <li tabindex="0"  class="fd-list__item is-selected">
      <span class="sap-icon--employee fd-list__thumbnail"></span>
      <div class="fd-list__content">
        <div class="fd-list__title">List Item With No Byline</div>
      </div>
  </li>
  <li tabindex="0"  class="fd-list__item">
    <span class="fd-image--s fd-list__thumbnail" aria-label="Image label"
style="background-image: url('https://placeimg.com/400/400/nature');"></span>
    <div class="fd-list__content">
        <div class="fd-list__title">List Item With Two-Column Byline</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in Byline (Standard text item)</div>
            <div class="fd-list__byline-right">Second text item in Byline (Can be semantic (Status) or not)</div>
        </div>
    </div>
  </li>
  <li tabindex="0"  class="fd-list__item">
      <div class="fd-list__content">
        <div class="fd-list__title">Text-Only List Item</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
  </li>
</ul>

<br><br>
<h4>Compact Size</h4>

<ul class="fd-list fd-list--compact fd-list--byline">
  <li tabindex="0"  class="fd-list__item">
    <span class="sap-icon--e-care fd-list__thumbnail"></span>
    <div class="fd-list__content">
        <div class="fd-list__title">List Item With Two-Column Byline and Semantic Byline Second Item</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in Byline (Standard text item)</div>
            <div class="fd-list__byline-right fd-list__byline-right--neutral">Second text item in Byline - Neutral</div>
        </div>
    </div>
  </li>
  <li tabindex="0"  class="fd-list__item">
    <span class="sap-icon--globe fd-list__thumbnail"></span>
    <div class="fd-list__content">
        <div class="fd-list__title">List Item With Two-Column Byline and Semantic Byline Second Item</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in Byline (Standard text item)</div>
            <div class="fd-list__byline-right fd-list__byline-right--positive">Second text item in Byline - Positive</div>
        </div>
    </div>
  </li>
  <li tabindex="0"  class="fd-list__item">
    <span class="sap-icon--manager fd-list__thumbnail"></span>
    <div class="fd-list__content">
        <div class="fd-list__title">List Item With Two-Column Byline and Semantic Byline Second Item</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in Byline (Standard text item)</div>
            <div class="fd-list__byline-right fd-list__byline-right--critical">Second text item in Byline - Critical</div>
        </div>
    </div>
  </li>
  <li tabindex="0"  class="fd-list__item">
    <span class="sap-icon--loan fd-list__thumbnail"></span>
    <div class="fd-list__content">
        <div class="fd-list__title">List Item With Two-Column Byline and Semantic Byline Second Item</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in Byline (Standard text item)</div>
            <div class="fd-list__byline-right fd-list__byline-right--negative">Second text item in Byline - Negative</div>
        </div>
    </div>
  </li>
  <li tabindex="0"  class="fd-list__item">
    <span class="sap-icon--home-share fd-list__thumbnail"></span>
    <div class="fd-list__content">
        <div class="fd-list__title">List Item With Two-Column Byline and Semantic Byline Second Item</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in Byline (Standard text item)</div>
            <div class="fd-list__byline-right fd-list__byline-right--informative">Second text item in Byline - Informative</div>
        </div>
    </div>
  </li>
</ul>

{% endcapture %}

{% include display-component.html component=list-byline %}


## Standard List with Byline Borderless Design

{% capture list-byline-borderless %}
<ul class="fd-list fd-list--no-border fd-list--byline">
  <li tabindex="0"  class="fd-list__item">
      <span class="sap-icon--activate fd-list__thumbnail"></span>
      <div class="fd-list__content">
        <div class="fd-list__title">Title</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
  </li>
  <li tabindex="0"  class="fd-list__item">
      <span class="sap-icon--employee fd-list__thumbnail"></span>
      <div class="fd-list__content">
        <div class="fd-list__title">List Item With No Byline</div>
      </div>
  </li>
  <li tabindex="0"  class="fd-list__item">
    <span class="fd-image--s fd-list__thumbnail" aria-label="Image label"
style="background-image: url('https://placeimg.com/400/400/nature');"></span>
    <div class="fd-list__content">
        <div class="fd-list__title">List Item With Two-Column Byline</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in Byline (Standard text item)</div>
            <div class="fd-list__byline-right fd-list__byline-right--positive">Second text item in Byline - Semantic Positive</div>
        </div>
    </div>
  </li>
  <li tabindex="0"  class="fd-list__item is-selected">
    <span class="sap-icon--world fd-list__thumbnail"></span>
    <div class="fd-list__content">
        <div class="fd-list__title">List Item With Two-Column Byline and Semantic Byline Second Item</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in Byline (Standard text item)</div>
            <div class="fd-list__byline-right fd-list__byline-right--informative">Second text item in Byline - Semantic Informative</div>
        </div>
    </div>
  </li>
</ul>
{% endcapture %}

{% include display-component.html component=list-byline-borderless %}