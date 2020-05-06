---
title: Tile
id: tile
keywords: tile
sidebar: left-navigation-sidebar
toc: false
permalink: components/tile.html
folder: components
summary:
---


Bla bla bla about Tiles
{: .docs-intro}


## Simple Tile

{% capture tile %}

<div class="fd-tile">
    <div class="fd-tile__header"></div>
    <div class="fd-tile__content"></div>
    <div class="fd-tile__footer"></div>
</div>

<br><br>

<div class="fd-tile">
    <div class="fd-tile__header fd-tile__header--2-col">
        <div class="fd-tile__section"></div>
        <div class="fd-tile__section"></div>
    </div>
    <div class="fd-tile__content fd-tile__content--2-col">
        <div class="fd-tile__section"></div>
        <div class="fd-tile__section"></div>
    </div>
    <div class="fd-tile__footer fd-tile__footer--2-col">
        <div class="fd-tile__section"></div>
        <div class="fd-tile__section"></div>
    </div>
</div>

{% endcapture %}
{% include display-component.html component=tile %}

<br>







<br>
## Tile docs template

{% capture tile %}

{% endcapture %}
{% include display-component.html component=tile %}
