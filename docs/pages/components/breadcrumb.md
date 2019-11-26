---
title: Breadcrumb
id: breadcrumb
keywords: breadcrumb
sidebar: left-navigation-sidebar
toc: false
permalink: components/breadcrumb.html
folder: components
summary:
---

The breadcrumb allows users to see the current page and navigation path to that page.
{: .docs-intro}
Users can navigate to previous levels in the path. When clicking on the current page, a dropdown allows users to access other pages at that same level.

<br>

{% capture default %}
<ul class="fd-breadcrumb">
    <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" href="#">Link Text</a></li>
    <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" href="#">Link Text</a></li>
    <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" href="#">Link Text</a></li>
</ul>
{% endcapture %}

{% include display-component.html component=default %}
