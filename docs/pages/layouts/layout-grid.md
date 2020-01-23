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

Use a layout grid to arrange components evenly in a grid layout.

## Default Layout Grid (12 columns)
{% capture default %}
<div class="fd-layout-grid-container">
        <div class="fd-layout-grid fd-layout-grid--col-12">
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


##  Layout Grid with multi layers and rows
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

<!-- ## Layout Grid with `--no-gap`
The `.fd-layout-grid-no-gap` modifier will remove margins between the panels.
{% capture default %}
<div class="fd-layout-grid fd-layout-grid--no-gap">
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

## Layout Grid with `--gap-1`
The `.fd-layout-grid-gap-1` modifier will leave `1px` margins between the panels.
{% capture default %}
<div class="fd-layout-grid fd-layout-grid--gap-1">
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

## Layout Grid with 1 column
The `.fd-layout-grid--col-1` modifier will render a 1 column grid.
{% capture default %}
<div class="fd-layout-grid fd-layout-grid--col-1">
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


## Layout Grid with 2 columns
The `.fd-layout-grid--col-2` modifier will render a 2 column grid.
{% capture default %}
<div class="fd-layout-grid fd-layout-grid--col-2">
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

## Layout Grid with 4 columns
The `.fd-layout-grid--col-4` modifier will render a 4 column grid.
{% capture default %}
<div class="fd-layout-grid fd-layout-grid--col-4">
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

## Layout Grid with 5 columns
The `.fd-layout-grid--col-5` modifier will render a 5 column grid.
{% capture default %}
<div class="fd-layout-grid fd-layout-grid--col-5">
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

## Layout Grid with 6 columns
The `.fd-layout-grid--col-6` modifier will render a 6 column grid.
{% capture default %}
<div class="fd-layout-grid fd-layout-grid--col-6">
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

## Layout Grid with column span
The `.fd-layout-grid__span-column-[num]`. `[num]` option ranges from 2 to 6.
{% capture default %}
<div class="fd-layout-grid fd-layout-grid--col-6">
    <div class="fd-panel fd-layout-grid__span-column-2">
        <div class="fd-panel__body">
            <p>.fd-layout-grid__span-column-2 </p>
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
    <div class="fd-panel fd-layout-grid__span-column-3">
        <div class="fd-panel__body">
            <p>.fd-layout-grid__span-column-3</p>
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
    <div class="fd-panel fd-layout-grid__span-column-4">
        <div class="fd-panel__body">
            <p>.fd-layout-grid__span-column-4</p>
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
    <div class="fd-panel fd-layout-grid__span-column-5">
        <div class="fd-panel__body">
            <p>.fd-layout-grid__span-column-5</p>
        </div>
    </div>
    <div class="fd-panel">
        <div class="fd-panel__body">
            <p>.fd-panel</p>
        </div>
    </div>
    <div class="fd-panel fd-layout-grid__span-column-6">
        <div class="fd-panel__body">
            <p>fd-layout-grid__span-column-6</p>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=default %} -->
