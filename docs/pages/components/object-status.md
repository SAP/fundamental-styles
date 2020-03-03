---
title: Object Status
id:
keywords: object status, status, object, object-status, clickable, generic indication
sidebar: left-navigation-sidebar
toc: false
permalink: components/object-status.html
folder: components
---
Object Status is replacing the Label Status Indicator and Badges (now Inverted Object Status). It's used for representing a status. 
{: .docs-intro}

<br>

# Object Status Icon Only
{% capture badge %}
<span class="fd-object-status fd-object-status--negative sap-icon--status-negative"></span>
<span class="fd-object-status fd-object-status--critical sap-icon--status-critical"></span>
<span class="fd-object-status fd-object-status--positive sap-icon--status-positive"></span>
<span class="fd-object-status fd-object-status--informative sap-icon--hint"></span>
<span class="fd-object-status sap-icon--to-be-reviewed"></span>

{% endcapture %}
{% include display-component.html component=badge %}

<br>

# Object Status Text Only
{% capture badge %}
<span class="fd-object-status fd-object-status--negative">Negative</span>
<span class="fd-object-status fd-object-status--critical">Critical</span>
<span class="fd-object-status fd-object-status--positive">Positive</span>
<span class="fd-object-status fd-object-status--informative">informative</span>
<span class="fd-object-status">Default</span>
{% endcapture %}
{% include display-component.html component=badge %}

<br>

# Object Status Icon and Text
{% capture badge %}
<span class="fd-object-status fd-object-status--negative sap-icon--status-negative">Negative</span>
<span class="fd-object-status fd-object-status--critical sap-icon--status-critical">Critical</span>
<span class="fd-object-status fd-object-status--positive sap-icon--status-positive">Positive</span>
<span class="fd-object-status fd-object-status--informative sap-icon--hint">Informative</span>
<span class="fd-object-status sap-icon--to-be-reviewed">Default</span>

<br><br>

<div dir="rtl">
<h4>RTL Support</h4>
    <span class="fd-object-status fd-object-status--negative sap-icon--status-negative">Negative</span>
    <span class="fd-object-status fd-object-status--critical sap-icon--status-critical">Critical</span>
    <span class="fd-object-status fd-object-status--positive sap-icon--status-positive">Positive</span>
    <span class="fd-object-status fd-object-status--informative sap-icon--hint">Informative</span>
    <span class="fd-object-status sap-icon--to-be-reviewed">Default</span>
</div>
{% endcapture %}
{% include display-component.html component=badge %}

<br>

# Object Status with Generic Indication Colors
{% capture badge %}
<span class="fd-object-status fd-object-status--indication-1">Dark Red</span>
<span class="fd-object-status fd-object-status--indication-2">Red</span>
<span class="fd-object-status fd-object-status--indication-3">Yellow</span>
<span class="fd-object-status fd-object-status--indication-4">Green</span>
<span class="fd-object-status fd-object-status--indication-5">Blue</span>
<span class="fd-object-status fd-object-status--indication-6">Teal</span>
<span class="fd-object-status fd-object-status--indication-7">Purple</span>
<span class="fd-object-status fd-object-status--indication-8">Pink</span>
{% endcapture %}
{% include display-component.html component=badge %}

<br>

# Clickable Object Status
For clickable Object Status add the `fd-object-status--link` modifier class. 
{% capture badge %}
<a href="#" class="fd-object-status fd-object-status--link">Default</a>
<a href="#" class="fd-object-status fd-object-status--negative fd-object-status--link">Negative</a>
<a href="#" class="fd-object-status fd-object-status--positive fd-object-status--link">Positive</a>
<span role="button" class="fd-object-status fd-object-status--critical fd-object-status--link sap-icon--status-critical">Critical</span>
<span role="button" class="fd-object-status fd-object-status--informative fd-object-status--link sap-icon--hint">Informative</span>

<br><br>

<a href="#" class="fd-object-status fd-object-status--link fd-object-status--indication-1">Dark Red</a>
<a href="#" class="fd-object-status fd-object-status--link fd-object-status--indication-2">Red</a>
<a href="#" class="fd-object-status fd-object-status--link fd-object-status--indication-3">Yellow</a>
<a href="#" class="fd-object-status fd-object-status--link fd-object-status--indication-4">Green</a>
<a href="#" class="fd-object-status fd-object-status--link fd-object-status--indication-5">Blue</a>
<span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-6">Teal</span>
<span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-7">Purple</span>
<span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-8">Pink</span>
{% endcapture %}
{% include display-component.html component=badge %}

<br>

# Inverted Object Status
Inverted Object Status is achieved by adding the `fd-object-status--inverted` modifier class. 
{% capture badge %}
<span class="fd-object-status fd-object-status--inverted fd-object-status--negative">Inverted Negative</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--critical">Inverted Warning</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--positive">Inverted Success</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--informative">Inverted informative</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--positive">3</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--informative">2.99</span>

<br><br>

<span class="fd-object-status fd-object-status--inverted">Inverted Default</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--negative sap-icon--status-negative"></span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--negative sap-icon--status-negative">Negative</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--critical sap-icon--status-critical">Critical</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--positive sap-icon--status-positive">Positive</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--informative sap-icon--hint">Informative</span>
<span class="fd-object-status fd-object-status--inverted sap-icon--to-be-reviewed">Neutral</span>

<br>
<br>
<h4>Clickable Inverted Object Status</h4>
<a class="fd-object-status fd-object-status--link fd-object-status--inverted fd-object-status--negative sap-icon--status-negative">Negative</a>
<a class="fd-object-status fd-object-status--link fd-object-status--inverted fd-object-status--critical sap-icon--status-critical">Critical</a>
<a class="fd-object-status fd-object-status--link fd-object-status--inverted fd-object-status--positive sap-icon--status-positive">Positive</a>
<a class="fd-object-status fd-object-status--link fd-object-status--inverted fd-object-status--informative sap-icon--hint">Informative</a>
<a class="fd-object-status fd-object-status--link fd-object-status--inverted sap-icon--to-be-reviewed">Neutral</a>

<br><br>

<div dir="rtl">
<h4>RTL Support</h4>
<span class="fd-object-status fd-object-status--inverted fd-object-status--negative">Inverted Negative</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--critical">Inverted Warning</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--positive">Inverted Success</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--informative">Inverted informative</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--positive">3</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--informative">2.99</span>

<br><br>

<span class="fd-object-status fd-object-status--inverted">Inverted Default</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--negative sap-icon--status-negative"></span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--negative sap-icon--status-negative">Negative</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--critical sap-icon--status-critical">Critical</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--positive sap-icon--status-positive">Positive</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--informative sap-icon--hint">Informative</span>
<span class="fd-object-status fd-object-status--inverted sap-icon--to-be-reviewed">Neutral</span>
</div>
{% endcapture %}
{% include display-component.html component=badge %}

<br>

# Object Status with Generic Indication Colors
{% capture badge %}
<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-1">Indication1</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-2">Indication2</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-3">Indication3</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-4">Indication4</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-5">Indication5</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-6">Indication6</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-7">Indication7</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-8">Indication8</span>

<br>
<br>

<h4>Clickable Inverted Object Status</h4>
<a href="#" class="fd-object-status fd-object-status--link fd-object-status--inverted fd-object-status--indication-1">Indication1</a>
<a href="#" class="fd-object-status fd-object-status--link fd-object-status--inverted fd-object-status--indication-2">Indication2</a>
<a href="#" class="fd-object-status fd-object-status--link fd-object-status--inverted fd-object-status--indication-3">Indication3</a>
<a href="#" class="fd-object-status fd-object-status--link fd-object-status--inverted fd-object-status--indication-4">Indication4</a>
<a href="#" class="fd-object-status fd-object-status--link fd-object-status--inverted fd-object-status--indication-5">Indication5</a>
<a href="#" class="fd-object-status fd-object-status--link fd-object-status--inverted fd-object-status--indication-6">Indication6</a>
<a href="#" class="fd-object-status fd-object-status--link fd-object-status--inverted fd-object-status--indication-7">Indication7</a>
<a href="#" class="fd-object-status fd-object-status--link fd-object-status--inverted fd-object-status--indication-8">Indication8</a>
{% endcapture %}
{% include display-component.html component=badge %}

<br>

# Object Status Large Design
For Object Status in Large Design use the `fd-object-status--large` modifier class.
{% capture badge %}
<span class="fd-object-status fd-object-status--large fd-object-status--negative sap-icon--status-negative"></span>
<span class="fd-object-status fd-object-status--large fd-object-status--critical sap-icon--status-critical"></span>
<span class="fd-object-status fd-object-status--large fd-object-status--positive">Success</span>
<span class="fd-object-status fd-object-status--large fd-object-status--informative">Informative</span>
<span class="fd-object-status fd-object-status--large fd-object-status--negative sap-icon--status-negative">Negative</span>
<span class="fd-object-status fd-object-status--large fd-object-status--critical sap-icon--status-critical">Critical</span>
<span class="fd-object-status fd-object-status--large fd-object-status--positive sap-icon--status-positive">Positive</span>
<span class="fd-object-status fd-object-status--large fd-object-status--informative sap-icon--hint">Informative</span>
<span class="fd-object-status fd-object-status--large sap-icon--to-be-reviewed">Default</span>

<br><br>

<span class="fd-object-status fd-object-status--large fd-object-status--inverted fd-object-status--negative">Inverted Negative</span>
<span class="fd-object-status fd-object-status--large fd-object-status--inverted fd-object-status--critical">Inverted Warning</span>
<span class="fd-object-status fd-object-status--large fd-object-status--inverted fd-object-status--positive">Inverted Success</span>
<span class="fd-object-status fd-object-status--large fd-object-status--inverted fd-object-status--informative">Inverted informative</span>
<span class="fd-object-status fd-object-status--large fd-object-status--inverted fd-object-status--positive">3</span>
<span class="fd-object-status fd-object-status--large fd-object-status--inverted fd-object-status--informative">2.99</span>

<br><br>

<span class="fd-object-status fd-object-status--large fd-object-status--inverted">Inverted Default</span>
<span class="fd-object-status fd-object-status--large fd-object-status--inverted fd-object-status--negative sap-icon--status-negative"></span>
<span class="fd-object-status fd-object-status--large fd-object-status--inverted fd-object-status--negative sap-icon--status-negative">Negative</span>
<span class="fd-object-status fd-object-status--large fd-object-status--inverted fd-object-status--critical sap-icon--status-critical">Critical</span>
<span class="fd-object-status fd-object-status--large fd-object-status--inverted fd-object-status--positive sap-icon--status-positive">Positive</span>
<span class="fd-object-status fd-object-status--large fd-object-status--inverted fd-object-status--informative sap-icon--hint">Informative</span>
<span class="fd-object-status fd-object-status--large fd-object-status--inverted sap-icon--to-be-reviewed">Neutral</span>

<br><br>

<a href="#" class="fd-object-status fd-object-status--large fd-object-status--link fd-object-status--inverted fd-object-status--indication-1">Indication1</a>
<a href="#" class="fd-object-status fd-object-status--large fd-object-status--link fd-object-status--inverted fd-object-status--indication-2">Indication2</a>
<a href="#" class="fd-object-status fd-object-status--large fd-object-status--link fd-object-status--inverted fd-object-status--indication-3">Indication3</a>
<a href="#" class="fd-object-status fd-object-status--large fd-object-status--link fd-object-status--inverted fd-object-status--indication-4">Indication4</a>
<a href="#" class="fd-object-status fd-object-status--large fd-object-status--link fd-object-status--inverted fd-object-status--indication-5">Indication5</a>
<a href="#" class="fd-object-status fd-object-status--large fd-object-status--link fd-object-status--inverted fd-object-status--indication-6">Indication6</a>
<a href="#" class="fd-object-status fd-object-status--large fd-object-status--link fd-object-status--inverted fd-object-status--indication-7">Indication7</a>
<a href="#" class="fd-object-status fd-object-status--large fd-object-status--link fd-object-status--inverted fd-object-status--indication-8">Indication8</a>

{% endcapture %}
{% include display-component.html component=badge %}


<br>


<style>
.fd-object-status, .fd-inverted-status {
    margin-right: 20px;
}
</style>
