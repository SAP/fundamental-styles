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
    <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Link Text</a></li>
    <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Link Text</a></li>
    <li class="fd-breadcrumb__item">Link Text</li>
</ul>
{% endcapture %}

{% include display-component.html component=default %}

<br>

## Overflow
The breadcrumb takes the width of its parent container. If there is not enough space to display all breadcrumb items,
there should be popover with missing options.

{% capture overflow %}
<ul class="fd-breadcrumb">
    <li class="fd-breadcrumb__item">
        <div class="fd-popover">
            <div class="fd-popover__control">
                <a class="fd-breadcrumb__link" href="#" aria-controls="breadcrumb1" aria-expanded="false" aria-haspopup="true">
                    ...
                    <span class="fd-breadcrumb__dropdown-icon"></span>
                </a>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="breadcrumb1">
                <ul class="fd-list fd-list--compact">
                    <li class="fd-list__item">
                      <a class="fd-list__title" href="#">Link Text</a>
                    </li>
                    <li class="fd-list__item">
                      <a class="fd-list__title" href="#">Link Text</a>                    
                    </li>
                    <li class="fd-list__item">
                      <a class="fd-list__title" href="#">Link Text</a>
                    </li>
                    <li class="fd-list__item">
                      <a class="fd-list__title" href="#">Link Text</a>
                    </li>
                </ul>
            </div>
        </div>
    </li>
    <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Link Text</a></li>
    <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Link Text</a></li>
    <li class="fd-breadcrumb__item">Link Text</li>
</ul>
{% endcapture %}

{% include display-component.html component=overflow %}
