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
the `.fd-layout-grid` class will create a grid and give it one column
{% capture default %}
<div class="fd-layout-grid ">
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

{% endcapture %}
{% include display-component.html component=default %}

<br/>

## Layout Grid with `--no-gap`
The `.fd-layout-grid--no-gap` modifier will remove margins between the panels.
{% capture default %}
<div class="fd-layout-grid fd-layout-grid--3 fd-layout-grid--no-gap">
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

## Layout Grid with equally divided columns
The `.fd-layout-grid--x` modifier will render a grid with each col being 12/x columns
{% capture equal %}
<div class="fd-layout-grid fd-layout-grid--6 ">
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
{% endcapture %}
{% include display-component.html component=equal %}

<br/>


## Layout Grid with unequal columns
The `.fd-layout-grid--x-y` modifier will render a grid with 12/x and 12/y columns. The grid can go up to 4 possibilities (x-y-w-z)
{% capture unequal %}
<div class="fd-layout-grid fd-layout-grid--2-6">
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
{% endcapture %}
{% include display-component.html component=unequal %}

<br/>

## Layout Grid with nested columns
The `.fd-layout-grid--x-y` modifier will render a grid with 12/x and 12/y columns. The grid can go up to 4 possibilities (x-y-w-z)
{% capture nested %}
<div class="fd-layout-grid fd-layout-grid--3-6">
    <div class="fd-layout-grid fd-layout-grid--2">
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
{% endcapture %}
{% include display-component.html component=nested %}

<br/>

## Layout Grid with nested columns (2 levels)
The `.fd-layout-grid--x-y` modifier will render a grid with 12/x and 12/y columns. The grid can go up to 4 possibilities (x-y-w-z)
{% capture nested1 %}
<div class="fd-layout-grid fd-layout-grid--2-6">
    <div class="fd-layout-grid fd-layout-grid--2">
        <div class="fd-layout-grid fd-layout-grid--1">
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
{% endcapture %}
{% include display-component.html component=nested1 %}

<br/>

## Layout Grid with more than one row
The `.fd-layout-grid-row` class is when there is more than one row. It is applied to every row after the first one.
{% capture rows %}
    <div class="fd-layout-grid fd-layout-grid--2-6">
        <div class="fd-layout-grid fd-layout-grid--2">
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
        <div class="fd-panel">
            <div class="fd-panel__header">
                <div class="fd-panel__head">
                    <h3 class="fd-panel__title">
                        .fd-panel__title
                    </h3>
                </div>
            </div>
        </div>
        <!-- <div class="fd-panel">
            <div class="fd-panel__header">
                <div class="fd-panel__head">
                    <h3 class="fd-panel__title">
                        .fd-panel__title
                    </h3>
                </div>
            </div>
        </div> -->
    </div>
<div class="fd-layout-grid-row">
    <div class="fd-layout-grid fd-layout-grid--2-2">
        <div class="fd-layout-grid fd-layout-grid--2">
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
{% endcapture %}
{% include display-component.html component=rows %}

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
{% include display-component.html component=default %}
