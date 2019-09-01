---
title: Panel
id: panel
keywords: panel
sidebar: left-navigation-sidebar
toc: false
permalink: layouts/panel.html
folder: layouts
summary:
---
Panels are used to encapsulate part of the content, form elements, lists, collections, etc., on a page.
{: .docs-intro}

Place patterns and interactions within panels on your pages to achieve focus and separation for the tasks at-hand with the information displayed inside the panel.

> {{ site.data.strings.headerDisclaimer }}

## Elements

- `.fd-panel__header`: Panel header container.
- `.fd-panel__title`: Title of the panel.
- `.fd-panel__description`: Title of the description.
- `.fd-panel__actions`: Panel level actions such as add, remove, delete, sort, etc.
- `.fd-panel__filters`: Panel level filters that is specific to the data being displayed within the panel.
- `.fd-panel__body`: Main content of the panel can that hold lists, table, tree, text, form or any other infomation.
- `.fd-panel__footer`: Panel footer can be utilized for pagination, secondary actions, add more data, etc.

{% capture default %}
<div class="fd-panel">
    <div class="fd-panel__header">
        <h3 class="fd-panel__title">
            .fd-panel__title
        </h3>
        <p class="fd-panel__description">
            .fd-panel__description
        </p>
        <div class="fd-panel__actions">
            .fd-panel__actions
        </div>
    </div>
    <div class="fd-panel__filters" id="">
        .fd-panel__filters
    </div>
    <div class="fd-panel__body">
        <p>.fd-panel__body</p>
    </div>
    <div class="fd-panel__footer">
        .fd-panel__footer
    </div>
</div>
{% endcapture %}
{% include display-component.html component=default %}

<br/>

