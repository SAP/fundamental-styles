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
<ul class="fd-list" role="list">
  <li role="listitem" tabindex="0"  class="fd-list__item is-selected">
      <span class="fd-list__title">List item 1</span>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 2</span>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 3</span>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 4</span>
  </li>
</ul>

<br />
<h4>Compact Size</h4>
<ul class="fd-list fd-list--compact" role="list">
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 1</span>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 2</span>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 3</span>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 4</span>
  </li>
</ul>
{% endcapture %}

{% include display-component.html component=standard-list %}

## Standard List With Navigation
{% capture list-with-links %}
<ul class="fd-list fd-list--navigation" role="list">
  <li role="listitem" class="fd-list__item">
      <a tabindex="0" class="fd-list__link" href="#">
        <span class="fd-list__title">List item 1</span>
      </a>
  </li>
  <li role="listitem" class="fd-list__item">
      <a tabindex="0" class="fd-list__link" href="#">
        <span class="fd-list__icon sap-icon--history"></span>
        <span class="fd-list__title">List item 2</span>
      </a>
  </li>
  <li role="listitem" class="fd-list__item">
      <a tabindex="0" class="fd-list__link" href="#">
        <span class="fd-list__title">List item 3</span>
        <span class="fd-list__icon sap-icon--map"></span>
      </a>
  </li>
</ul>
{% endcapture %}

{% include display-component.html component=list-with-links%}

## Standard List With Navigation Indication
If only a subset of the list items are navigable you should indicate those by displaying a navigation arrow. This is achieved by applying the `fd-list--navigation-indication` modifier class to the `ul` element. Do not show arrows if all items are navigable. In this case use a Standard List with Navigation.

{% capture list-with-links-navigation %}
<ul class="fd-list fd-list--navigation fd-list--navigation-indication" role="list">
  <li role="listitem" class="fd-list__item">
      <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
        <span class="fd-list__title">List item 1</span>
        <!-- <span class="fd-list__navigation-indicator"></span> -->
      </a>
  </li>
  <li role="listitem" class="fd-list__item">
      <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
        <span class="fd-list__icon sap-icon--history"></span>
        <span class="fd-list__title">List item 2</span>
        <!-- <span class="fd-list__navigation-indicator"></span> -->
      </a>
  </li>
  <li role="listitem" class="fd-list__item">
      <a tabindex="0" class="fd-list__link" href="#">
        <span class="fd-list__icon sap-icon--history"></span>
        <span class="fd-list__title">List item 3</span>
      </a>
  </li>
  <li role="listitem" class="fd-list__item">
      <a tabindex="0" class="fd-list__link" href="#">
        <span class="fd-list__title">List item 4</span>
        <span class="fd-list__icon sap-icon--map"></span>
      </a>
  </li>
  <li role="listitem" class="fd-list__item">
      <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
        <span class="fd-list__title">List item 5</span>
        <span class="fd-list__icon sap-icon--map"></span>
        <!-- <span class="fd-list__navigation-indicator"></span> -->
      </a>
  </li>
</ul>
{% endcapture %}

{% include display-component.html component=list-with-links-navigation %}

## Secondary Data

{% capture secondary-data %}
<ul class="fd-list" role="list">
  <li role="listitem" tabindex="0"  class="fd-list__item is-selected">
      <span class="fd-list__title">List item 1</span>
      <span class="fd-list__secondary fd-has-color-status-1">Positive</span>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 2</span>
      <span class="fd-list__secondary fd-has-color-status-3">Negative</span>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 3</span>
      <span class="fd-list__secondary fd-has-color-status-1">Positive</span>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 4</span>
      <span class="fd-list__secondary fd-has-color-status-3">Negative</span>
  </li>
</ul>
{% endcapture %}

{% include display-component.html component=secondary-data %}

## Icons

{% capture list-with-icons %}
<ul class="fd-list" role="list">
  <li role="listitem" tabindex="0"  class="fd-list__item is-selected">
      <span class="fd-list__icon sap-icon--cart"></span>
      <span class="fd-list__title">List item 1</span>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <span class="fd-list__icon sap-icon--wrench"></span>
      <span class="fd-list__title">List item 2</span>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 3</span>
      <span class="fd-list__icon sap-icon--lightbulb"></span>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 4</span>
      <span class="fd-list__icon sap-icon--history"></span>
  </li>
</ul>
{% endcapture %}

{% include display-component.html component=list-with-icons %}

## Group Header

{% capture list-with-group-header %}
<ul class="fd-list" role="list">
  <li role="listitem" tabindex="0"  class="fd-list__group-header">
    Group Header 1
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item is-selected">
      <span class="fd-list__title">List item 1</span>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 2</span>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 3</span>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__group-header">
    Group Header 2
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 4</span>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 5</span>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 6</span>
  </li>
</ul>
{% endcapture %}

{% include display-component.html component=list-with-group-header %}

## Footer

{% capture list-with-footer %}
<ul class="fd-list" role="list">
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 1</span>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item is-selected">
      <span class="fd-list__title">List item 2</span>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 3</span>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 4</span>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__footer">
    Footer text
  </li>
</ul>
{% endcapture %}

{% include display-component.html component=list-with-footer %}

## Borderless

{% capture list-without-borders %}
<ul class="fd-list fd-list--no-border" role="list">
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 1</span>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item is-selected">
      <span class="fd-list__title">List item 2</span>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 3</span>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <span class="fd-list__title">List item 4</span>
  </li>
</ul>
{% endcapture %}

{% include display-component.html component=list-without-borders %}

## Selection

{% capture list-selection %}

<ul class="fd-list" role="list">
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox" id="Ai4ez1">
          <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez1"></label>
      </div>
      <span class="fd-list__title">List item 1</span>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item is-selected">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox" id="Ai4ez2">
          <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez2"></label>
      </div>
      <span class="fd-list__title">List item 2</span>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox" id="Ai4ez3">
          <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez3"></label>
      </div>
      <span class="fd-list__title">List item 3</span>
  </li>
</ul>

<br><br>
<h4>Compact Size</h4>

<ul class="fd-list fd-list--compact fd-list--no-border" role="list">
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez4">
          <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez4"></label>
      </div>
      <span class="fd-list__title">List item 1</span>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item is-selected">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez5">
          <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez5"></label>
      </div>
      <span class="fd-list__title">List item 2</span>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez6">
          <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez6"></label>
      </div>
      <span class="fd-list__title">List item 3</span>
  </li>
</ul>

<br><br>
<h4>Borderless Design</h4>

<ul class="fd-list fd-list--no-border" role="list">
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox" id="Ai4ez7">
          <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez7"></label>
      </div>
      <span class="fd-list__title">List item 1</span>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item is-selected">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox" id="Ai4ez8">
          <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez8"></label>
      </div>
      <span class="fd-list__title">List item 2</span>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox" id="Ai4ez9">
          <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez9"></label>
      </div>
      <span class="fd-list__title">List item 3</span>
  </li>
</ul>
{% endcapture %}

{% include display-component.html component=list-selection %}


## Standard List with Byline
Add the `fd-list--byline` modifier class for a Standard List with Byline (description).
For a two-column byline you need to add the `fd-list__byline--2-col` modifier class to the element. The first text item (`fd-list__byline-left`) is a standard text (description) and takes 60% of the available space. The second text item (`fd-list__byline-right`) could be a standard text or semantic (status) and takes the remaining 40% of the available space. For semantic (status) use a modifier class (`fd-list__byline-right--* `) to represent `neutral`, `positive`, `critical`, `negative` and `informative` status.

{% capture list-byline %}
<ul class="fd-list fd-list--byline" role="list">
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <span class="sap-icon--activate fd-list__thumbnail"></span>
      <div class="fd-list__content">
        <div class="fd-list__title">Title</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item is-selected">
      <span class="sap-icon--employee fd-list__thumbnail"></span>
      <div class="fd-list__content">
        <div class="fd-list__title">List Item With No Byline</div>
      </div>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
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
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <div class="fd-list__content">
        <div class="fd-list__title">Text-Only List Item</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
  </li>
</ul>

<br><br>
<h4>Compact Size</h4>

<ul class="fd-list fd-list--compact fd-list--byline" role="list">
  <li role="listitem" tabindex="0"  class="fd-list__item">
    <span class="sap-icon--e-care fd-list__thumbnail"></span>
    <div class="fd-list__content">
        <div class="fd-list__title">List Item With Two-Column Byline and Semantic Byline Second Item</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in Byline (Standard text item)</div>
            <div class="fd-list__byline-right fd-list__byline-right--neutral">Second text item in Byline - Neutral</div>
        </div>
    </div>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
    <span class="sap-icon--globe fd-list__thumbnail"></span>
    <div class="fd-list__content">
        <div class="fd-list__title">List Item With Two-Column Byline and Semantic Byline Second Item</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in Byline (Standard text item)</div>
            <div class="fd-list__byline-right fd-list__byline-right--positive">Second text item in Byline - Positive</div>
        </div>
    </div>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
    <span class="sap-icon--manager fd-list__thumbnail"></span>
    <div class="fd-list__content">
        <div class="fd-list__title">List Item With Two-Column Byline and Semantic Byline Second Item</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in Byline (Standard text item)</div>
            <div class="fd-list__byline-right fd-list__byline-right--critical">Second text item in Byline - Critical</div>
        </div>
    </div>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
    <span class="sap-icon--loan fd-list__thumbnail"></span>
    <div class="fd-list__content">
        <div class="fd-list__title">List Item With Two-Column Byline and Semantic Byline Second Item</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in Byline (Standard text item)</div>
            <div class="fd-list__byline-right fd-list__byline-right--negative">Second text item in Byline - Negative</div>
        </div>
    </div>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
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
<ul class="fd-list fd-list--no-border fd-list--byline" role="list">
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <span class="sap-icon--activate fd-list__thumbnail"></span>
      <div class="fd-list__content">
        <div class="fd-list__title">Title</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <span class="sap-icon--employee fd-list__thumbnail"></span>
      <div class="fd-list__content">
        <div class="fd-list__title">List Item With No Byline</div>
      </div>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
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
  <li role="listitem" tabindex="0"  class="fd-list__item is-selected">
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


## Standard List with Byline and Selection

{% capture list-byline-selection %}
<ul class="fd-list fd-list--byline" role="list">
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox" id="Ai4ez6111">
          <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6111"></label>
      </div>
      <span class="sap-icon--activate fd-list__thumbnail"></span>
      <div class="fd-list__content">
        <span class="fd-list__title">Title</span>
        <span class="fd-list__byline">Byline (description)</span>
      </div>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
    <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox" id="Ai4ez6112">
          <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6112"></label>
      </div>
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
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox" id="Ai4ez6113">
          <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6113"></label>
      </div>
      <div class="fd-list__content">
        <div class="fd-list__title">Text-Only List Item</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
  </li>
</ul>

<br><br>
<h4>Compact Size</h4>

<ul class="fd-list fd-list--compact fd-list--byline" role="list">
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez6115">
          <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez6115"></label>
      </div>
      <span class="sap-icon--activate fd-list__thumbnail"></span>
      <div class="fd-list__content">
        <span class="fd-list__title">Title</span>
        <span class="fd-list__byline">Byline (description)</span>
      </div>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
    <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez6116">
          <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez6116"></label>
      </div>
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
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez6117">
          <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez6117"></label>
      </div>
      <div class="fd-list__content">
        <div class="fd-list__title">Text-Only List Item</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
  </li>
</ul>


<br><br>
<h4>Borderless Design</h4>
<ul class="fd-list fd-list--no-border fd-list--byline" role="list">
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox" id="Ai4ez6118">
          <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6118"></label>
      </div>
      <span class="sap-icon--activate fd-list__thumbnail"></span>
      <div class="fd-list__content">
        <span class="fd-list__title">Title</span>
        <span class="fd-list__byline">Byline (description)</span>
      </div>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
    <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox" id="Ai4ez6119">
          <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6119"></label>
      </div>
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
  <li role="listitem" tabindex="0"  class="fd-list__item">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox" id="Ai4ez61110">
          <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez61110"></label>
      </div>
      <div class="fd-list__content">
        <div class="fd-list__title">Text-Only List Item</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
  </li>
</ul>


{% endcapture %}

{% include display-component.html component=list-byline-selection %}


## Standard List with Byline, Selection and Navigation

{% capture list-byline-selection-navigation %}
<ul class="fd-list fd-list--byline fd-list--navigation fd-list--navigation-indication" role="list">
  <li role="listitem" tabindex="0"  class="fd-list__item">
    <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox" id="Ai4ez6111">
          <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6111"></label>
      </div>
      <span class="sap-icon--activate fd-list__thumbnail"></span>
      <div class="fd-list__content">
        <span class="fd-list__title">Title</span>
        <span class="fd-list__byline">Byline (description)</span>
      </div>
    </a>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
    <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
    <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox" id="Ai4ez6112">
          <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6112"></label>
      </div>
    <span class="fd-image--s fd-list__thumbnail" aria-label="Image label"
style="background-image: url('https://placeimg.com/400/400/nature');"></span>
    <div class="fd-list__content">
        <div class="fd-list__title">List Item With Two-Column Byline</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in Byline (Standard text item)</div>
            <div class="fd-list__byline-right">Second text item in Byline (Can be semantic (Status) or not)</div>
        </div>
    </div>
    </a>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
    <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox" id="Ai4ez6113">
          <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6113"></label>
      </div>
      <div class="fd-list__content">
        <div class="fd-list__title">Text-Only List Item</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
    </a>
  </li>
</ul>

<br><br>
<h4>Compact Size</h4>

<ul class="fd-list fd-list--compact fd-list--byline fd-list--navigation fd-list--navigation-indication" role="list">
  <li role="listitem" tabindex="0"  class="fd-list__item">
    <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez6115">
          <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez6115"></label>
      </div>
      <span class="sap-icon--activate fd-list__thumbnail"></span>
      <div class="fd-list__content">
        <span class="fd-list__title">Title</span>
        <span class="fd-list__byline">Byline (description)</span>
      </div>
    </a>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
    <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
    <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez6116">
          <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez6116"></label>
      </div>
    <span class="fd-image--s fd-list__thumbnail" aria-label="Image label"
style="background-image: url('https://placeimg.com/400/400/nature');"></span>
    <div class="fd-list__content">
        <div class="fd-list__title">List Item With Two-Column Byline</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in Byline (Standard text item)</div>
            <div class="fd-list__byline-right">Second text item in Byline (Can be semantic (Status) or not)</div>
        </div>
    </div>
    </a>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
    <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez6117">
          <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez6117"></label>
      </div>
      <div class="fd-list__content">
        <div class="fd-list__title">Text-Only List Item</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
    </a>
  </li>
</ul>


<br><br>
<h4>Borderless Design</h4>
<ul class="fd-list fd-list--no-border fd-list--byline fd-list--navigation fd-list--navigation-indication" role="list">
  <li role="listitem" tabindex="0"  class="fd-list__item">
    <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox" id="Ai4ez6118">
          <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6118"></label>
      </div>
      <span class="sap-icon--activate fd-list__thumbnail"></span>
      <div class="fd-list__content">
        <span class="fd-list__title">Title</span>
        <span class="fd-list__byline">Byline (description)</span>
      </div>
    </a>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
    <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
    <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox" id="Ai4ez6119">
          <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6119"></label>
      </div>
    <span class="fd-image--s fd-list__thumbnail" aria-label="Image label"
style="background-image: url('https://placeimg.com/400/400/nature');"></span>
    <div class="fd-list__content">
        <div class="fd-list__title">List Item With Two-Column Byline</div>
        <div class="fd-list__byline fd-list__byline--2-col">
            <div class="fd-list__byline-left">First text item in Byline (Standard text item)</div>
            <div class="fd-list__byline-right">Second text item in Byline (Can be semantic (Status) or not)</div>
        </div>
    </div>
    </a>
  </li>
  <li role="listitem" tabindex="0"  class="fd-list__item">
    <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
      <div class="fd-form-item fd-list__form-item">
          <input type="checkbox" class="fd-checkbox" id="Ai4ez61110">
          <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez61110"></label>
      </div>
      <div class="fd-list__content">
        <div class="fd-list__title">Text-Only List Item</div>
        <div class="fd-list__byline">Byline (description)</div>
      </div>
    </a>
  </li>
</ul>


{% endcapture %}

{% include display-component.html component=list-byline-selection-navigation %}



