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

The `fd-link` component supports the use of modifiers, as well as the `is-visited` flag, which allows for optimal customization of your hyperlink. There are currently no restrictions as to which content can be included in this component.
{: .docs-intro}

<br>

{% capture default %}
<a href="#" class="fd-link" tabindex="0">Standard Link</a>
<br><br>
<a href="#" class="fd-link fd-link--emphasized" tabindex="0">Emphasized Link</a>
<br><br>
<a class="fd-link" aria-disabled="true">Disabled Link</a>
<br><br>
<a href="#" class="fd-link fd-link--inverted">Inverted Link</a>
<br><br>
<a href="#" class="fd-link" tabindex="0">
    Icon Left Link 
    <span class="sap-icon--slim-arrow-right sap-icon--s"></span>
</a>
<br><br>
<a href="#" class="fd-link" tabindex="0">
    <span class="sap-icon--slim-arrow-left sap-icon--s"></span> 
    Icon Right Link
</a>
{% endcapture %}
{% include display-component.html component=default %}
