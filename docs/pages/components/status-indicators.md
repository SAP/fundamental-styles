---
title: Status Indicators
id:
keywords: status indicators, status, indicators, badge, label, counter
sidebar: left-navigation-sidebar
toc: false
permalink: components/status-indicators.html
folder: components
---

Status indicators are used to easily highlight the state of an object. `badge`, `label`, `status-label` and `counter`
{: .docs-intro}

<br>

# Badge

## Badge Style Options
`badge` Status Indicator has three options: `default`, `--pill` and `--filled`
{% capture badge %}
<span class="fd-badge">Label</span>
<span class="fd-badge fd-badge--filled">Label</span>
<span class="fd-badge fd-badge--pill"> Label </span>


{% endcapture %}
{% include display-component.html component=badge %}

<br>

### Badge Color Options
In addition the the default grey, there are three additional Semantic color options available: `--success`, `--warning` and `-error`
{% capture badge %}
<span class="fd-badge fd-badge--success">Label</span>
<span class="fd-badge fd-badge--warning">Label</span>
<span class="fd-badge fd-badge--error">Label</span>
<br><br>
<span class="fd-badge fd-badge--success fd-badge--pill">Label</span>
<span class="fd-badge fd-badge--warning fd-badge--pill">Label</span>
<span class="fd-badge fd-badge--error fd-badge--pill">Label</span>
<br><br>
<span class="fd-badge fd-badge--success fd-badge--filled">Label</span>
<span class="fd-badge fd-badge--warning fd-badge--filled">Label</span>
<span class="fd-badge fd-badge--error fd-badge--filled">Label</span>

{% endcapture %}
{% include display-component.html component=badge %}

<hr>

# Label
A `label` is similar to the `badge` status Indicator, but it does not have have any borders or background color. Color options of default grey, `--success`, `--warning` and `--error` are available.
{% capture badge %}
<span class="fd-label">Default</span>
<span class="fd-label fd-label--success">Success</span>
<span class="fd-label fd-label--warning">Warning</span>
<span class="fd-label fd-label--error">Error</span>
{% endcapture %}
{% include display-component.html component=badge %}

<hr>

# Status Indicator Label
## Status Indicator Label with build in status icons

{% capture badge %}
<span class="fd-status-label fd-status-label--available">Available</span>
<span class="fd-status-label fd-status-label--away">Away</span>
<span class="fd-status-label fd-status-label--busy">Busy</span>
<span class="fd-status-label fd-status-label--offline">Appear Offline</span>
{% endcapture %}
{% include display-component.html component=badge %}

<br>

## Status Indicator Label with any icons

{% capture badge %}
<span class="fd-status-label sap-icon--history">Custom Icon</span>
<span class="fd-status-label sap-icon--message-success">Success</span>
<span class="fd-status-label sap-icon--message-warning">Warning</span>
<span class="fd-status-label sap-icon--message-error">Error</span>
{% endcapture %}
{% include display-component.html component=badge %}

<br>

## Status Indicator Label with Semantic colors

{% capture badge %}
<span class="fd-status-label">Default</span>
<span class="fd-status-label fd-status-label--success">Success</span>
<span class="fd-status-label fd-status-label--warning">Warning</span>
<span class="fd-status-label fd-status-label--error">Error</span>
{% endcapture %}
{% include display-component.html component=badge %}


<hr>

# Counter

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

<br>




<style>
.fd-badge, .fd-label, .fd-status-label {
    margin-right: 20px;
}
</style>
