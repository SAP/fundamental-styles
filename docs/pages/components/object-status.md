---
title: Object Status
id:
keywords: object status, status, object, object-status, clickable, generic indication
sidebar: left-navigation-sidebar
toc: false
permalink: components/object-status.html
folder: components
---
Status indicators are used to easily highlight the state of an object. `status`, `object-status`, `status-object-status` and `clickable`
{: .docs-intro}

<br>

# Object Status Only Icon
A `object-status` is similar to the `object status` status Indicator, but it does not have have any borders or background color. Color options of default grey, `--success`, `--warning`, `info` and `--error` are available.
there are few types of object status to be used as shown below

# Object Status Only Icon
{% capture badge %}
<span class="fd-object-status--icon fd-object-status--error sap-icon--status-negative"></span>
<span class="fd-object-status--icon fd-object-status--warning sap-icon--status-critical"></span>
<span class="fd-object-status--icon fd-object-status--success sap-icon--status-positive"></span>
<span class="fd-object-status--icon fd-object-status--info sap-icon--hint"></span>
<span class="fd-object-status--icon sap-icon--to-be-reviewed"></span>

{% endcapture %}
{% include display-component.html component=badge %}

<hr>

# Object Status Only Label

{% capture badge %}
<span class="fd-object-status fd-object-status--error">Error</span>
<span class="fd-object-status fd-object-status--warning">Warning</span>
<span class="fd-object-status fd-object-status--success">Success</span>
<span class="fd-object-status fd-object-status--info">informative</span>
<span class="fd-object-status">Default</span>
{% endcapture %}
{% include display-component.html component=badge %}

<br>

## Object Status Label and Icon

{% capture badge %}
<span class="fd-object-status fd-object-status--error sap-icon--status-negative">Error</span>
<span class="fd-object-status fd-object-status--warning sap-icon--status-critical">Warning</span>
<span class="fd-object-status fd-object-status--success sap-icon--status-positive">Success</span>
<span class="fd-object-status fd-object-status--info sap-icon--hint">informative</span>
<span class="fd-object-status sap-icon--to-be-reviewed">Default</span>
{% endcapture %}
{% include display-component.html component=badge %}


<br>

## Clickable Object Status
Clickable object status on clicking on the object status the underline property appears.
{% capture badge %}
<span class="fd-object-status fd-object-status--error fd-object-status--click-able">Error</span>
{% endcapture %}
{% include display-component.html component=badge %}

<br>

## Object Status with Generic Indication Colors

Generic indication of the object to define the status of the object and also includes the `:hover`, `:active` and `:visited` properties to improve the visuals.

{% capture badge %}
<span class="fd-object-status fd-object-status--indication-color-1">Dark Red</span>
<span class="fd-object-status fd-object-status--indication-color-2">Red</span>
<span class="fd-object-status fd-object-status--indication-color-3">Yellow</span>
<span class="fd-object-status fd-object-status--indication-color-4">Green</span>
<span class="fd-object-status fd-object-status--indication-color-5">Blue</span>
<span class="fd-object-status fd-object-status--indication-color-6">Teal</span>
<span class="fd-object-status fd-object-status--indication-color-7">Purple</span>
<span class="fd-object-status fd-object-status--indication-color-8">Pink</span>
{% endcapture %}
{% include display-component.html component=badge %}

<br>

# Object Status Only Label

{% capture badge %}
<span class="fd-inverted-status fd-inverted-status--error">Inverted Negative</span>
<span class="fd-inverted-status fd-inverted-status--warning">Inverted Warning</span>
<span class="fd-inverted-status fd-inverted-status--success">Inverted Success</span>
<span class="fd-inverted-status fd-inverted-status--info">Inverted informative</span>
<span class="fd-inverted-status fd-inverted-status--success">3</span>
<span class="fd-inverted-status fd-inverted-status--info">2.99</span>
<span class="fd-inverted-status">Inverted Default</span>
<span class="fd-inverted-status fd-inverted-status--icon fd-inverted-status--error sap-icon--status-negative"></span>
{% endcapture %}
{% include display-component.html component=badge %}

<br>

## Object Status Label and Icon

{% capture badge %}
<span class="fd-inverted-status fd-inverted-status--icon fd-inverted-status--error sap-icon--status-negative">Negative</span>
<span class="fd-inverted-status fd-inverted-status--icon fd-inverted-status--warning sap-icon--status-critical">Critical</span>
<span class="fd-inverted-status fd-inverted-status--icon fd-inverted-status--success sap-icon--status-positive">Success</span>
<span class="fd-inverted-status fd-inverted-status--icon fd-inverted-status--info sap-icon--hint">Informative</span>
<span class="fd-inverted-status fd-inverted-status--icon sap-icon--to-be-reviewed">Default</span>
{% endcapture %}
{% include display-component.html component=badge %}

## Object Status with Generic Indication Colors

Generic indication of the object to define the status of the object and also includes the `:hover`, `:active` and `:visited` properties to improve the visuals.

{% capture badge %}
<span class="fd-inverted-status fd-inverted-status--indication-color-1">Indication1</span>
<span class="fd-inverted-status fd-inverted-status--indication-color-2">Indication2</span>
<span class="fd-inverted-status fd-inverted-status--indication-color-3">Indication3</span>
<span class="fd-inverted-status fd-inverted-status--indication-color-4">Indication4</span>
<span class="fd-inverted-status fd-inverted-status--indication-color-5">Indication5</span>
<span class="fd-inverted-status fd-inverted-status--indication-color-6">Indication6</span>
<span class="fd-inverted-status fd-inverted-status--indication-color-7">Indication7</span>
<span class="fd-inverted-status fd-object-status--indication-color-8">Indication8</span>
{% endcapture %}
{% include display-component.html component=badge %}

<br>


<style>
.fd-object-status, .fd-inverted-status {
    margin-right: 20px;
}
</style>
