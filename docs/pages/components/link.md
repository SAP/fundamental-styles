---
title: Link
id: link
keywords: link
sidebar: left-navigation-sidebar
toc: false
permalink: components/link.html
folder: components
summary:
---

Used when extra emphasis is needed especially when a link needs to standout from the surrounding text.
{: .docs-intro}
<style>
    a{
        margin-right: 10px !important;
    }
</style>

{% capture default %}
<a role="link" href="#" class="fd-link">Standard Link</a>
<a role="link" href="#" class="fd-link" design="Emphasized">Emphasized Link</a>
<a role="link" class="fd-link" aria-disabled="true" disabled>Disabled Link</a>
<br>
<a role="link" href="#" class="fd-link">
    Icon Left Link 
    <span class="sap-icon--slim-arrow-right sap-icon--s"></span>
</a>
<br>
<a role="link" href="#" class="fd-link">
    <span class="sap-icon--slim-arrow-left sap-icon--s"></span> 
    Icon Right Link
</a>
{% endcapture %}
{% include display-component.html component=default %}
