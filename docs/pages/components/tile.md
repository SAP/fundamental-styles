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


A tile component can be used to display information in a simple container format.
{: .docs-intro}
The component is ideal for displaying collection data when a grid or list layout is preferred. See [`layout-grid`](layouts/layout-grid.html).

> {{ site.data.strings.headerDisclaimer }}

## Simple Tile

{% capture tile %}
<div class="fd-tile">
    <div class="fd-tile__content">
        <h3 class="fd-tile__title">Tile Title</h3>
        <p>Tile Description</p>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=tile %}

<br>

## Tile with `.fd-media` container

{% capture tile %}
<div class="fd-tile">
    <div class="fd-tile__media">
        <span class="fd-avatarier fd-avatarier--m fd-avatarier--transparent sap-icon--home"></span>
    </div>
    <div class="fd-tile__content">
        <h3 class="fd-tile__title">Tile Title</h3>
    </div>
</div>

<br>

<div class="fd-tile">
    <div class="fd-tile__media">
        <span class="fd-avatarier fd-avatarier--m sap-icon--home fd-has-background-color-accent-3"></span>
    </div>
    <div class="fd-tile__content">
        <h3 class="fd-tile__title">Tile Title</h3>
        <p>Tile Description</p>
    </div>
</div>

<br>

<div class="fd-tile">
    <div class="fd-tile__media">
        <span class=" fd-image--m" aria-label="TILE_MEDIA_ALT" style="background-image: url('https://placeimg.com/400/400/nature');"></span>
    </div>
    <div class="fd-tile__content">
        <h3 class="fd-tile__title">Tile Title</h3>
    </div>
</div>

<br>

<div class="fd-tile">
    <div class="fd-tile__media">
        <span class=" fd-image--m fd-image--circle" aria-label="TILE_MEDIA_ALT" style="background-image: url('https://placeimg.com/400/400/nature');"></span>
    </div>
    <div class="fd-tile__content">
        <h3 class="fd-tile__title">Tile Title</h3>
        <p class="fd-tile__text">Tile Description</p>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=tile %}

## Tile with `.fd-actions` container

{% capture tile %}
<div class="fd-tile">
    <div class="fd-tile__content">
        <h3 class="fd-tile__title">Tile Title</h3>
    </div>
    <div class="fd-tile__actions">
        <div class="fd-popover fd-popover--right">
            <div class="fd-popover__control">
                <button class="fd-button fd-button--transparent sap-icon--overflow" aria-label="More" aria-expanded="false"
                    aria-controls="WQIDD179" aria-haspopup="true"></button>
            </div>
            <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow" aria-hidden="true" id="WQIDD179">
                <nav class="fd-menu" id="">
                    <ul class="fd-menu__list">
                        <li class="fd-menu__item">
                            <a href="#" class="fd-menu__link">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a href="#" class="fd-menu__link">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a href="#" class="fd-menu__link">
                                <span class="fd-menu__title">Option 3</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=tile %}

<br>

## Tile as a Button
Add `role=button` to rendering a tile as a button

{% capture tile %}
<div class="fd-tile" role="button">
    <div class="fd-tile__content">
        <h3 class="fd-tile__title">Tile Title</h3>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=tile %}

<br>

## Product Tile
`fd-product-tile` can be used to display product information.

{% capture tile %}
<div class="fd-product-tile">
    <div class="fd-product-tile__media" style="background-image: url('https://placeimg.com/400/400/nature');"></div>
    <div class="fd-product-tile__content">
        <h3 class="fd-product-tile__title">Default Product Tile</h3>
        <p class="fd-product-tile__text">Tile Description</p>
    </div>
</div>

<div class="fd-product-tile" role="button">
    <div class="fd-product-tile__media" style="background-image: url('https://placeimg.com/400/400/nature');"></div>
    <div class="fd-product-tile__content">
        <h3 class="fd-product-tile__title">Product Tile Button</h3>
    </div>
</div>

{% endcapture %}
{% include display-component.html component=tile %}

<br>

## Disabled state
Add class `is-disabled`

{% capture tile %}
<div class="fd-tile is-disabled" aria-disabled="true">
    <div class="fd-tile__content">
        <h3 class="fd-tile__title">Tile Title</h3>
    </div>
</div>

<br>

<div class="fd-tile is-disabled" aria-disabled="true">
    <div class="fd-tile__media">
        <span class="fd-avatarier fd-avatarier--m fd-avatarier--transparent sap-icon--home"></span>
    </div>
    <div class="fd-tile__content">
        <h3 class="fd-tile__title">Tile Title</h3>
    </div>
</div>

<br>

<div class="fd-product-tile is-disabled" aria-disabled="true">
    <div class="fd-product-tile__media" style="background-image: url('https://placeimg.com/400/400/nature');"></div>
    <div class="fd-product-tile__content">
        <h3 class="fd-product-tile__title">Disabled Product Tile</h3>
    </div>
</div>

{% endcapture %}
{% include display-component.html component=tile %}

<br>
