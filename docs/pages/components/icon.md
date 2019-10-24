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
Icons are used throughout the UI to save space, allow for visual clarity and focus, and for fun.
{: .docs-intro}
Icons can be used adaptively if desired, but at this point they are used more as visual elements within other components.

<br>

## Icon usage and size options
{% capture icon %}
<span class="sap-icon--cart sap-icon--s"></span>
<span class="sap-icon--cart"></span>
<span class="sap-icon--cart sap-icon--m"></span>
<span class="sap-icon--cart sap-icon--l"></span>
<span class="sap-icon--cart sap-icon--xl"></span>

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="18px" height="18px" viewBox="0 0 36 36" enable-background="new 0 0 38 38" xml:space="preserve">
<polyline fill="#C1272D" points="38,38 5.933,38 6,20 13,20 13,27 20,27 20,20 27,20 27,13 20,13 20,6 38,6.016 "/>
<path fill="#C1272D" d="M1,1 1,13 13,13 13,1 ">
</path>
</svg>

<img src="{{site.baseurl}}/images/thumbs/rodney.artichoke.png"/>

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
  <!-- <span class="sap-icon--{{ icon.name }} sap-icon--s"></span>
  <span class="sap-icon--{{ icon.name }}"></span>
  <span class="sap-icon--{{ icon.name }} sap-icon--m"></span>
  <span class="sap-icon--{{ icon.name }} sap-icon--l"></span> -->
  <span class="sap-icon--{{ icon.name }} sap-icon--xl"></span>
  <h5>.sap-icon--{{ icon.name }}</h5>
</div>
{% endfor %}
