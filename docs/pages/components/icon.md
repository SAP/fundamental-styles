---
title: Icon
id: icon
keywords: icon
sidebar: left-navigation-sidebar
toc: false
permalink: components/icon.html
folder: components
summary:
---
> **UNDER REVIEW**. This component is under review. A new version will be implemented soon.
{: .docs-intro}

Icons are used throughout the UI to save space, allow for visual clarity and focus, and for fun.
Icons can be used adaptively if desired, but at this point they are used more as visual elements within other components. See [Getting Started](../getting-started.html#project-configuration) for instructions for making the SAP icon font available on your page.

<br>

## Icon usage and size options
{% capture icon %}
<span class="sap-icon--cart sap-icon--s"></span>
<span class="sap-icon--cart"></span>
<span class="sap-icon--cart sap-icon--m"></span>
<span class="sap-icon--cart sap-icon--l"></span>
<span class="sap-icon--cart sap-icon--xl"></span>
{% endcapture %}
{% include display-component.html component=icon class="icon" %}

<br />
## Icon animations
{% capture icon %}
<span class="sap-icon--synchronize sap-icon--xl sap-icon--animate-spin"></span>
<span class="sap-icon--synchronize sap-icon--xl sap-icon--animate-pulse"></span>
{% endcapture %}
{% include display-component.html component=icon class="icon" %}

## Available Icons
{% for icon in site.data.icons %}
<div class="demo-icon-wrapper">
  <span class="sap-icon--{{ icon.name }} sap-icon--xl"></span>
  <h5>.sap-icon--{{ icon.name }}</h5>
</div>
{% endfor %}
