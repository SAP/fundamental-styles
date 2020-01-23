---
title: Layout Grid
id: layout_grid
keywords: layout_grid
sidebar: left-navigation-sidebar
toc: false
permalink: layouts/layout-grid.html
folder: layouts
summary:
---

{: .docs-intro}

## Layout Grid

Use a layout grid to create a column of a certain width. The default value will create a column the full width of the parent.

## Default Layout Grid (12 columns)
{% capture default %}
<div class="fd-layout-grid-container">
        <div class="fd-layout-grid">
            <div class="fd-panel">
                <div class="fd-panel__header">
                    <div class="fd-panel__head">
                        <h3 class="fd-panel__title">
                            .fd-panel__title
                        </h3>
                    </div>
                    <div class="fd-panel__body">
                        <p>.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body</p>
                    </div>
                </div>
            </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=default %}

<br/>

## Layout Grid with sizing (6 columns for all)
To define the size of that column use the `fd-layout-grid--col-x` modifier, where x can go from 1-12, or 1-16 with the large feature.
{% capture size %}
<div class="fd-layout-grid-container">
        <div class="fd-layout-grid fd-layout-grid--col-6">
            <div class="fd-panel">
                <div class="fd-panel__header">
                    <div class="fd-panel__head">
                        <h3 class="fd-panel__title">
                            .fd-panel__title
                        </h3>
                    </div>
                    <div class="fd-panel__body">
                        <p>.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body</p>
                    </div>
                </div>
            </div>
            <div class="fd-panel">
                <div class="fd-panel__header">
                    <div class="fd-panel__head">
                        <h3 class="fd-panel__title">
                            .fd-panel__title
                        </h3>
                    </div>
                    <div class="fd-panel__body">
                        <p>.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-layout-grid fd-layout-grid--col-6">
            <div class="fd-panel">
                <div class="fd-panel__header">
                    <div class="fd-panel__head">
                        <h3 class="fd-panel__title">
                            .fd-panel__title
                        </h3>
                    <div class="fd-panel__body">
                        <p>.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body</p>
                    </div>
                    </div>
                </div>
            </div>
            <div class="fd-panel">
                <div class="fd-panel__header">
                    <div class="fd-panel__head">
                        <h3 class="fd-panel__title">
                            .fd-panel__title
                        </h3>
                    </div>
                    <div class="fd-panel__body">
                        <p>.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body</p>
                    </div>
                </div>
            </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=size %}

<br/>

##  Layout Grid with sizing and responsiveness
Add the `fd-layout-grid-size--col-x` to define that column size only for a certain screen size and above
{% capture breakpoints %}
<div class="fd-layout-grid-container">
    <div class="fd-layout-grid fd-layout-grid--col-12 fd-layout-grid-l--col-6">
            <div class="fd-panel">
                <div class="fd-panel__header">
                    <div class="fd-panel__head">
                        <h3 class="fd-panel__title">
                            .fd-panel__title
                        </h3>
                    </div>
                </div>
            </div>
            <div class="fd-panel">
                <div class="fd-panel__header">
                    <div class="fd-panel__head">
                        <h3 class="fd-panel__title">
                            .fd-panel__title
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-layout-grid fd-layout-grid--col-12 fd-layout-grid-l--col-6 fd-layout-grid--nested">
                <div class="fd-layout-grid fd-layout-grid--col-3 fd-layout-grid-l--col-4">
            <div class="fd-panel">
                <div class="fd-panel__header">
                    <div class="fd-panel__head">
                        <h3 class="fd-panel__title">
                            .fd-panel__title
                        </h3>
                    </div>
                </div>
            </div>
                </div>
                <div class="fd-layout-grid fd-layout-grid--col-9 fd-layout-grid-l--col-8">
            <div class="fd-panel">
                <div class="fd-panel__header">
                    <div class="fd-panel__head">
                        <h3 class="fd-panel__title">
                            .fd-panel__title
                        </h3>
                    </div>
                </div>
            </div>
            <div class="fd-panel">
                <div class="fd-panel__header">
                    <div class="fd-panel__head">
                        <h3 class="fd-panel__title">
                            .fd-panel__title
                        </h3>
                    </div>
                </div>
            </div>
            <div class="fd-panel">
                <div class="fd-panel__header">
                    <div class="fd-panel__head">
                        <h3 class="fd-panel__title">
                            .fd-panel__title
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=breakpoints %}
<br/>


##  Layout Grid with nesting and rows
Add a `fd-layout-grid-row` class when using more than one row. Use the `fd-layout-grid--nested` modifier to have a div contain other grid columns.
{% capture layout-grid-multi-level %}
<div class="fd-layout-grid-container">
    <div class="fd-layout-grid-row">
        <div class="fd-layout-grid fd-layout-grid--col-6">
            <div class="fd-panel">
                <div class="fd-panel__header">
                    <div class="fd-panel__head">
                        <h3 class="fd-panel__title">
                            .fd-panel__title
                        </h3>
                    </div>
                    <div class="fd-panel__body">
                        <p>.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body</p>
                    </div>
                </div>
            </div>
            <div class="fd-panel">
                <div class="fd-panel__header">
                    <div class="fd-panel__head">
                        <h3 class="fd-panel__title">
                            .fd-panel__title
                        </h3>
                    </div>
                    <div class="fd-panel__body">
                        <p>.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body.fd-panel__body</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-layout-grid fd-layout-grid--col-6 fd-layout-grid--nested">
            <div class="fd-layout-grid fd-layout-grid--col-2">
                <div class="fd-panel">
                    <div class="fd-panel__header">
                        <div class="fd-panel__head">
                            <h3 class="fd-panel__title">
                                .fd-panel__title
                            </h3>
                        </div>
                    </div>
                </div>  
            </div>
            <div class="fd-layout-grid fd-layout-grid--col-10 fd-layout-grid--nested">
                <div class="fd-layout-grid fd-layout-grid--col-6">
                    <div class="fd-panel">
                        <div class="fd-panel__header">
                            <div class="fd-panel__head">
                                <h3 class="fd-panel__title">
                                    .fd-panel__title
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>      
                <div class="fd-layout-grid fd-layout-grid--col-6">
                    <div class="fd-panel">
                        <div class="fd-panel__header">
                            <div class="fd-panel__head">
                                <h3 class="fd-panel__title">
                                    .fd-panel__title
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="fd-layout-grid-row">
            <div class="fd-layout-grid fd-layout-grid--col-3 fd-layout-grid--offset-4">
                <div class="fd-panel">
                    <div class="fd-panel__header">
                        <div class="fd-panel__head">
                            <h3 class="fd-panel__title">
                                .fd-panel__title
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-layout-grid fd-layout-grid--col-4">
                <div class="fd-panel">
                    <div class="fd-panel__header">
                        <div class="fd-panel__head">
                            <h3 class="fd-panel__title">
                                .fd-panel__title
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=layout-grid-multi-level %}

<br/>

##  Layout Grid with no gap
To remove gutters between columns apply the `fd-layout-grid-container--no-gap` modifier for the container and the `fd-layout-grid--no-gap` modifier with the column.
{% capture layout-grid-multi-level %}
<div class="fd-layout-grid-container fd-layout-grid-container--no-gap">
    <div class="fd-layout-grid fd-layout-grid--col-4 fd-layout-grid--no-gap">
        <div class="fd-panel">
            <div class="fd-panel__header">
                <div class="fd-panel__head">
                    <h3 class="fd-panel__title">
                        .fd-panel__title
                    </h3>
                </div>
            </div>
        </div>
    </div>
    <div class="fd-layout-grid fd-layout-grid--col-4 fd-layout-grid--no-gap">
        <div class="fd-panel">
            <div class="fd-panel__header">
                <div class="fd-panel__head">
                    <h3 class="fd-panel__title">
                        .fd-panel__title
                    </h3>
                </div>
            </div>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=layout-grid-multi-level %}

<br/>