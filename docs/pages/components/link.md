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

<br>

{% capture default %}
<a href="#" class="fd-link break break--single">Standard Link</a>
<a href="#" class="fd-link break break--single"><strong>Emphasized Link</strong></a>
<a href="#" class="fd-link break break--single" aria-disabled="true">Disabled Link</a>
<a href="#" class="fd-link break break--single">
    Icon Left Link 
    <span class="sap-icon--slim-arrow-right sap-icon--s"></span>
</a>
<a href="#" class="fd-link">
    <span class="sap-icon--slim-arrow-left sap-icon--s"></span> 
    Icon Right Link
</a>
{% endcapture %}
{% include display-component.html component=default %}
