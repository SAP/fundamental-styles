---
title: Info Label
id:
keywords: info label, info, label, info-label, counter
sidebar: left-navigation-sidebar
toc: false
permalink: components/info-label.html
folder: components
---

Info Label is a small non-interactive numeric or text-based control. Its primary use is to add user-defined characteristic to an object. `fd-info-label`, `fd-info-label--numeric`, `fd-info-label--accent-color-1` and `fd-info-label--icon`
{: .docs-intro}

<br>

# info-label

## info-label Style Options
`info-label` Info Label has three options: `--accent-color-1,accent-color-2...`, `--icon` and `--numeric`
{% capture info-label %}
<span class="fd-info-label fd-info-label--numeric fd-info-label--accent-color-1">6</span>
<span class="fd-info-label fd-info-label--numeric fd-info-label--accent-color-2">6.2</span>
<span class="fd-info-label fd-info-label--numeric fd-info-label--accent-color-3">42k</span>
<span class="fd-info-label fd-info-label--accent-color-3">Info Label </span>
<span class="fd-info-label fd-info-label--accent-color-4">Missing Item</span>
<span class="fd-info-label fd-info-label--accent-color-5 fd-info-label--icon sap-icon--photo-voltaic">Delivered</span>

{% endcapture %}
{% include display-component.html component=info-label %}

<br>

### info-label Color Options
In addition the the default grey, there are additional Semantic color options available `--accent-color-1,accent-color-2...`.
{% capture info-label %}

<span class="fd-info-label fd-info-label--accent-color-1">Info Label</span>
<br><br>
<span class="fd-info-label fd-info-label--accent-color-2">Info Label</span>
<br><br>
<span class="fd-info-label fd-info-label--accent-color-3">Info Label</span>
<br><br>
<span class="fd-info-label fd-info-label--accent-color-4">Info Label</span>
<br><br>
<span class="fd-info-label fd-info-label--accent-color-5">Info Label</span>
<br><br>
<span class="fd-info-label fd-info-label--accent-color-6">Info Label</span>
<br><br>
<span class="fd-info-label fd-info-label--accent-color-7">Info Label</span>
<br><br>
<span class="fd-info-label fd-info-label--accent-color-8">Info Label</span>
<br><br>
<span class="fd-info-label fd-info-label--accent-color-9">Info Label</span>
<br><br>
<span class="fd-info-label fd-info-label--accent-color-10">Info Label</span>

{% endcapture %}
{% include display-component.html component=info-label %}

<hr>


## Status Indicator Label with any icons

In addition the the default grey, there are additional Semantic color options available `--icon`, and Icons placeholder with sap Icon `sap-icon--`.

{% capture info-label %}

<span class="fd-info-label fd-info-label--accent-color-1 fd-info-label--icon sap-icon--future">Info Label</span>
<br><br>
<span class="fd-info-label fd-info-label--accent-color-2 fd-info-label--icon sap-icon--add-activity-2">Info Label</span>
<br><br>
<span class="fd-info-label fd-info-label--accent-color-3 fd-info-label--icon sap-icon--bar-code">Info Label</span>
<br><br>
<span class="fd-info-label fd-info-label--accent-color-4 fd-info-label--icon sap-icon--time-entry-request">Info Label</span>
<br><br>
<span class="fd-info-label fd-info-label--accent-color-5 fd-info-label--icon sap-icon--bubble-chart">Info Label</span>
<br><br>
<span class="fd-info-label fd-info-label--accent-color-6 fd-info-label--icon sap-icon--hide">Info Label</span>
<br><br>
<span class="fd-info-label fd-info-label--accent-color-7 fd-info-label--icon sap-icon--key">Info Label</span>
<br><br>
<span class="fd-info-label fd-info-label--accent-color-8 fd-info-label--icon sap-icon--technical-object">Info Label</span>
<br><br>
<span class="fd-info-label fd-info-label--accent-color-9 fd-info-label--icon sap-icon--upload-to-cloud">Info Label</span>
<br><br>
<span class="fd-info-label fd-info-label--accent-color-10 fd-info-label--only-icon sap-icon--upload-to-cloud"></span>

{% endcapture %}
{% include display-component.html component=info-label %}

<br>

<style>
.fd-info-label{
    margin-right: 20px;
}
</style>
