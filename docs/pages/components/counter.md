---
title: Counter
id:
keywords: counter
sidebar: left-navigation-sidebar
toc: false
permalink: components/counter.html
folder: components
tags: [development]
---
> **UNDER REVIEW**. This component is under review. A new version will be implemented soon.
{: .docs-intro}

## Default Counter
Counter has a minimum value 1. Maximum display is 999+
{% capture badge %}
<span class="fd-counter" aria-label="Unread count">5</span>
<span class="fd-counter" aria-label="Unread count">25</span>
<span class="fd-counter" aria-label="Unread count">101</span>
<span class="fd-counter" aria-label="Unread count">999+</span>
{% endcapture %}
{% include display-component.html component=badge %}

<br>

## Counter inline with a paragraph
{% capture badge %}
<p>Lorem ipsum <span class="fd-counter" aria-label="Unread count">5</span> </p>
{% endcapture %}
{% include display-component.html component=badge %}

<br>

## Counter with Tabs

{% capture badge %}
<ul class="fd-tabs" role="tablist">
   <li class="fd-tabs__item">
      <a class="fd-tabs__link" aria-controls="AvcVC566" href="#AvcVC566" role="tab">Link
      <span class="fd-counter" aria-label="Unread count">25</span></a>
   </li>
   <li class="fd-tabs__item">
      <a class="fd-tabs__link" aria-controls="5mxO9110" aria-selected="true" href="#5mxO9110"
      role="tab">Selected</a>
   </li>
   <li class="fd-tabs__item">
      <a class="fd-tabs__link" aria-controls="r0pk3445" href="#r0pk3445" role="tab">Link</a>
   </li>
   <li class="fd-tabs__item">
      <a class="fd-tabs__link" aria-controls="Dj1Ri832" aria-disabled="true"
      role="tab">Disabled</a>
   </li>
</ul>
{% endcapture %}
{% include display-component.html component=badge %}

<br>

## Counter with `--notification` modifier

{% capture badge %}
<button class="fd-button fd-button--transparent sap-icon--bell" aria-label="Notifications">
    <span class="fd-counter fd-counter--notification" aria-label="Unread count">1</span>
</button>

<button class="fd-button fd-button--transparent sap-icon--bell" aria-label="Notifications">
    <span class="fd-counter fd-counter--notification" aria-label="Unread count">20</span>
</button>

<button class="fd-button fd-button--transparent sap-icon--bell" aria-label="Notifications">
    <span class="fd-counter fd-counter--notification" aria-label="Unread count">300</span>
</button>

<button class="fd-button fd-button--transparent sap-icon--bell" aria-label="Notifications">
    <span class="fd-counter fd-counter--notification" aria-label="Unread count">999+</span>
</button>

{% endcapture %}
{% include display-component.html component=badge %}
