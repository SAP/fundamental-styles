---
title: Panel
id: panel
keywords: panel, panel-grid, gird
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

- `.fd-panel__title`: Title of the panel.
- `.fd-panel__description`: Title of the description.
- `.fd-panel__actions`: Panel level actions such as add, remove, delete, sort, etc.
- `.fd-panel__filters`: Panel level filters that is specific to the data being displayed within the panel.
- `.fd-panel__body`: Main content of the panel can that hold lists, table, tree, text, form or any other infomation.
- `.fd-panel__footer`: Panel footer can be utilized for pagination, secondary actions, add more data, etc.

{% capture default %}
<div class="fd-panel">
    <div class="fd-panel__header">
        <div class="fd-panel__head">
            <h3 class="fd-panel__title">
                .fd-panel__title
            </h3>
            <p class="fd-panel__description">
                .fd-panel__description
            </p>
        </div>
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


# Panel Grid

Use a panel grid to arrange panels evenly in a grid layout.

> This uses CSS grid which is [not supported by some older browsers](https://caniuse.com/#feat=css-grid). A flexbox fallback is included but it is recommended you test your page if you have a significant number of users on IE 11, for example.

## Default Panel Grid (3 columns)
{% capture default %}
<div class="fd-panel-grid">
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=default %}

<br/>

## Panel Grid with `--nogap`
The `.fd-panel-grid-nogap` modifier will remove margins between the panels.
{% capture default %}
<div class="fd-panel-grid fd-panel-grid--nogap">
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=default %}

<br/>

## Panel Grid with 1 column
The `.fd-panel-grid--1col` modifier will render a 1 column grid.
{% capture default %}
<div class="fd-panel-grid fd-panel-grid--1col">
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=default %}

<br/>


## Panel Grid with 2 columns
The `.fd-panel-grid--2col` modifier will render a 2 column grid.
{% capture default %}
<div class="fd-panel-grid fd-panel-grid--2col">
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=default %}

<br/>

## Panel Grid with 4 columns
The `.fd-panel-grid--4col` modifier will render a 4 column grid.
{% capture default %}
<div class="fd-panel-grid fd-panel-grid--4col">
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=default %}

<br/>

## Panel Grid with 5 columns
The `.fd-panel-grid--5col` modifier will render a 5 column grid.
{% capture default %}
<div class="fd-panel-grid fd-panel-grid--5col">
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=default %}

<br/>

## Panel Grid with 6 columns
The `.fd-panel-grid--6col` modifier will render a 6 column grid.
{% capture default %}
<div class="fd-panel-grid fd-panel-grid--6col">
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=default %}

<br/>

## Panel Grid with column span
The `.fd-has-grid-column-span-[num]` modifier will render a 6 column grid. [num] option ranges from 2 to 6
{% capture default %}
<div class="fd-panel-grid fd-panel-grid--6col">
    <div class="fd-panel fd-has-grid-column-span-2">
        <div class="fd-panel__body">
            <p>.fd-has-grid-column-span-2 </p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel fd-has-grid-column-span-3">
        <div class="fd-panel__body">
            <p>.fd-has-grid-column-span-3</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel fd-has-grid-column-span-4">
        <div class="fd-panel__body">
            <p>.fd-has-grid-column-span-4</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel fd-has-grid-column-span-5">
        <div class="fd-panel__body">
            <p>.fd-has-grid-column-span-5</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel fd-has-grid-column-span-6">
        <div class="fd-panel__body">
            <p>.fd-has-grid-column-span-6</p>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=default %}
