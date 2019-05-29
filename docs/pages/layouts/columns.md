---
title: Column Layouts
id:
keywords: containers column grid
toc: false
sidebar: left-navigation-sidebar
permalink: /layouts/columns.html
folder: layouts
summary:
---

Layout containers used to arrange content on a 12-column grid. Can be used inside other layout containers like sections and panels.
{: .docs-intro}

Includes:
- **[Containers](#container)** contain the columns. A required wrapper with some modifiers available for width and text alignment.
- **[Columns](#container)** contain the content. Modifiers are used to adjust the width, i.e., span columns.


<br>

## Container
{: .docs-header-h1}

Columns must be wrapper with this container. Some modifiers are provided to give you better control over your layout.


### Default Container
{: .docs-header-h3}

Default container has a letterbox max-width of `1290px`.

{% capture container %}
<div class="fd-container">
 fd-container
</div>
{% endcapture %}
{% include display-component.html component=container class="container" %}

### Fluid Container
{: .docs-header-h3}

`.fd-container--fluid` modifier overrides the max-width for a fluid layout with 100% of parent container.

{% capture container-fluid %}
<div class="fd-container fd-container--fluid">
 fd-container--fluid
</div>
{% endcapture %}
{% include display-component.html component=container-fluid class="container" %}

### Centered Container
{: .docs-header-h3}

`.fd-container--centered` modifier for aligning the wrapper in the of the parent container.

{% capture container-centered %}
<div class="fd-container fd-container--centered">
 fd-container--centered
</div>
{% endcapture %}
{% include display-component.html component=container-centered class="container" %}

### Flex Container
{: .docs-header-h3}

`.fd-container--flex` modifier for using flexbox option with the columns.

{% capture container-flex %}
<div class="fd-container fd-container--flex">
 fd-container--flex
</div>
{% endcapture %}
{% include display-component.html component=container-flex class="container" %}


## Columns
{: .docs-header-h1}

## Equal width Columns
{: .docs-header-h2}

### 12 columns
{: .docs-header-h3}

This component use `.fd-col--1` to illustrate the how the grid works with the spacing.

{% capture container-flex %}
<div class="fd-container fd-container--fluid">
    <div class="fd-col--1">col</div>
    <div class="fd-col--1">col</div>
    <div class="fd-col--1">col</div>
    <div class="fd-col--1">col</div>
    <div class="fd-col--1">col</div>
    <div class="fd-col--1">col</div>
    <div class="fd-col--1">col</div>
    <div class="fd-col--1">col</div>
    <div class="fd-col--1">col</div>
    <div class="fd-col--1">col</div>
    <div class="fd-col--1">col</div>
    <div class="fd-col--1">col</div>
</div>
{% endcapture %}
{% include display-component.html component=container-flex class="container" %}

### Three columns
{: .docs-header-h3}

Using `.fd-col--4` you can build a three column layout.

{% capture container-flex %}
<div class="fd-container fd-container--fluid">
    <div class="fd-col--4">col</div>
    <div class="fd-col--4">col</div>
    <div class="fd-col--4">col</div>
</div>
{% endcapture %}
{% include display-component.html component=container-flex class="container" %}

### Two columns
{: .docs-header-h3}

Probably the most used layout. With `.fd-col--6` you can achieve the two columns layout.

{% capture container-flex %}
<div class="fd-container fd-container--fluid">
    <div class="fd-col--6">col</div>
    <div class="fd-col--6">col</div>
</div>
{% endcapture %}
{% include display-component.html component=container-flex class="container" %}

## Unequal width columns
{: .docs-header-h2}

You can use arbitrary column sizes depending on the information you need to display.

### Two columns (3/9)
{: .docs-header-h3}

{% capture container-flex %}
<div class="fd-container fd-container--centered">
    <div class="fd-col--3">col</div>
    <div class="fd-col--9">col</div>
</div>
{% endcapture %}
{% include display-component.html component=container-flex class="container" %}

The grid can be used with any column size.

### Three col (3/6/3)
{: .docs-header-h3}

Example of a three column layout.

{% capture container-flex %}
<div class="fd-container fd-container--centered">
    <div class="fd-col--3">col</div>
    <div class="fd-col--6">col</div>
    <div class="fd-col--3">col</div>
</div>
{% endcapture %}
{% include display-component.html component=container-flex class="container" %}

You can also shift columns to get a balanced visual design on your page.

### One column, shifted by three columns
{: .docs-header-h3}

In the following component we have only one columns that is shifted by 3 columns.

{% capture container-flex %}
<div class="fd-container fd-container--centered">
    <div class="fd-col--9 fd-col--shift-3">col</div>
</div>
{% endcapture %}
{% include display-component.html component=container-flex class="container" %}

## Flex width Columns
{: .docs-header-h2}

With the fundamental grid you can take advantage of CSS Flexbox and make your grid more flexible.

### Four columns and Three flex columns
{: .docs-header-h3}

Inside flex containers, use .fd-col to evenly fill the left over space. The columns leave without a given size will adjust the size according to the CSS Flexbox rules.

{% capture container-flex %}
<div class="fd-container fd-container--centered fd-container--flex">
    <div class="fd-col--9">fix col</div>
    <div class="fd-col">flex col</div>
    <div class="fd-col">flex col</div>
    <div class="fd-col">flex col</div>
</div>
{% endcapture %}
{% include display-component.html component=container-flex class="container" %}

### Three columns using flexbox
{: .docs-header-h3}

Inside flex containers, use .fd-col to distribute space with no margin.

{% capture container-flex %}
<div class="fd-container fd-container--centered fd-container--flex">
    <div class="fd-col">flex col</div>
    <div class="fd-col">flex col</div>
    <div class="fd-col">flex col</div>
</div>
{% endcapture %}
{% include display-component.html component=container-flex class="container" %}
