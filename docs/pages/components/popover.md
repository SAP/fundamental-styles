---
title: Popover
id: popover
keywords: popover
sidebar: left-navigation-sidebar
toc: false
permalink: components/popover.html
folder: components
summary:
---

The popover is a wrapping component that accepts a "control" as well as a "body".
{: .docs-intro}

A control can be anything that you want to trigger the interaction from. The body will be the contents of what you reveal on the page after triggering the popover. Commonly used as the interaction/wrapping component when composing "dropdowns", "contextual menus", "mega menu", etc, when paired with the menu component.

As a general rule, it is suggested that one popover be revealed on the page at any given time. Opening one popover should close all others to prevent multiple layers and collisions of several popovers.

<br>

## Popover Structure
The basic wrapping structure of a popover.

* `fd-popover` - wrapper for the whole container
* `fd-popover__control` - control element to toggle the display of the popover
* `fd-popover__body` - wrapper that contains the popover content for CSS-only implementations
* `fd-popover__popper` - wrapper that contains the popover content when implemented using [popper.js](https://github.com/FezVrasta/popper.js) (use this instead of `fd-popover__body`). See [Implementation Options](#implementation-options) for more information.

<br>

## Modifiers
* `--left`, `--right` - modifier classes for `fd-popover__body` placement
* `--no-arrow` - modifier to render `fd-popover__body` or `fd-popover__popper` without an arrow

<br>


## Placement Options
There are four placement options:

* Left Aligned - This is the default palcement and no extra modifier classes are needed
* Right Aligned - A modifier class `--right` should be applied at the block level wrapper `fd-popover` and `--right` to the `fd-popover__body` warapper
* No Arrow & Left Aligned - `--no-arrow` modifier class on the `fd-popover__body` wrapper
* No Arrow & Right Aligned - Modifier classes `--right` at the block level wrapper `fd-popover`, `--right` and `--no-arrow` calss on the `fd-popover_body`

<style media="screen">
    .fd-popover{ margin-right: 30px;}
</style>
{% capture default-popoverwmenu %}
<div class="fd-popover">
    <div class="fd-popover__control">
        <button class="fd-button fd-popover__control" aria-label="Image label" aria-controls="jhqD0558a" aria-expanded="false" aria-haspopup="true">Left Aligned (default)</button>
    </div>
    <div class="fd-popover__body" aria-hidden="true" id="jhqD0558a">
        <nav class="fd-menu" id="">
            <ul class="fd-menu__list">
                <li><a href="#" class="fd-menu__item">Option 1</a></li>
                <li><a href="#" class="fd-menu__item">Option 2</a></li>
                <li><a href="#" class="fd-menu__item">Option 3</a></li>
                <li><a href="#" class="fd-menu__item">Option 4</a></li>
            </ul>
        </nav>
    </div>
</div>

<div class="fd-popover fd-popover--right">
    <div class="fd-popover__control">
        <button class="fd-button fd-popover__control" aria-label="Image label" aria-controls="jhqD055" aria-expanded="false" aria-haspopup="true">Right Aligned</button>
    </div>
    <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="jhqD055">
        <nav class="fd-menu" id="">
            <ul class="fd-menu__list">
                <li><a href="#" class="fd-menu__item">Option 1</a></li>
                <li><a href="#" class="fd-menu__item">Option 2</a></li>
                <li><a href="#" class="fd-menu__item">Option 3</a></li>
                <li><a href="#" class="fd-menu__item">Option 4</a></li>
            </ul>
        </nav>
    </div>
</div>

<div class="fd-popover">
    <div class="fd-popover__control">
        <button class="fd-button fd-popover__control" aria-label="Image label" aria-controls="jhqD0" aria-expanded="false" aria-haspopup="true">No Arrow & Left Aligned</button>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="jhqD0">
        <nav class="fd-menu" id="">
            <ul class="fd-menu__list">
                <li><a href="#" class="fd-menu__item">Option 1</a></li>
                <li><a href="#" class="fd-menu__item">Option 2</a></li>
                <li><a href="#" class="fd-menu__item">Option 3</a></li>
                <li><a href="#" class="fd-menu__item">Option 4</a></li>
            </ul>
        </nav>
    </div>
</div>

<div class="fd-popover fd-popover--right">
    <div class="fd-popover__control">
        <button class="fd-button fd-popover__control" aria-label="Image label" aria-controls="jhqDa2" aria-expanded="false" aria-haspopup="true">No Arrow & Right Aligned</button>
    </div>
    <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow" aria-hidden="true" id="jhqDa2">
        <nav class="fd-menu" id="">
            <ul class="fd-menu__list">
                <li><a href="#" class="fd-menu__item">Option 1</a></li>
                <li><a href="#" class="fd-menu__item">Option 2</a></li>
                <li><a href="#" class="fd-menu__item">Option 3</a></li>
                <li><a href="#" class="fd-menu__item">Option 4</a></li>
            </ul>
        </nav>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=default-popoverwmenu %}

<br>

## Popover Control Examples
Virtually any component can be used as a `fd-popover__control` to control the display of `fd-popover__body`
<style media="screen">
    .fd-popover{ margin-right: 30px;}
</style>
{% capture default-popoverwmenu %}
<div class="fd-popover">
    <div class="fd-popover__control">
        <a href="#" class="fd-link  fd-popover__control" aria-label="Image label" aria-controls="jhqD05581" aria-expanded="false" aria-haspopup="true">
            Link with a popover
        </a>
    </div>
    <div class="fd-popover__body" aria-hidden="true" id="jhqD05581">
        <nav class="fd-menu" id="">
            <ul class="fd-menu__list">
                <li><a href="#" class="fd-menu__item">Option 1</a></li>
                <li><a href="#" class="fd-menu__item">Option 2</a></li>
                <li><a href="#" class="fd-menu__item">Option 3</a></li>
                <li><a href="#" class="fd-menu__item">Option 4</a></li>
            </ul>
        </nav>
    </div>
</div>

<div class="fd-popover fd-popover--right">
    <div class="fd-popover__control">
        <span class=" fd-image--m fd-image--circle fd-popover__control" aria-label="Image label" aria-controls="jhqD0551" aria-expanded="false" aria-haspopup="true" aria-label="Image label"
style="background-image: url('https://placeimg.com/400/400/nature');"></span>
    </div>
    <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="jhqD0551">
        <nav class="fd-menu" id="">
            <ul class="fd-menu__list">
                <li><a href="#" class="fd-menu__item">Option 1</a></li>
                <li><a href="#" class="fd-menu__item">Option 2</a></li>
                <li><a href="#" class="fd-menu__item">Option 3</a></li>
                <li><a href="#" class="fd-menu__item">Option 4</a></li>
            </ul>
        </nav>
    </div>
</div>

<div class="fd-popover">
    <div class="fd-popover__control">
        <div class="fd-form__item " >
        <label class="fd-form__label" for="input-1">Input with a Popover:</label>
        <input class="fd-form__control fd-popover__control" type="text" id="input-1" placeholder="Field placeholder text" aria-label="Image label" aria-controls="jhqD01" aria-expanded="false" aria-haspopup="true">
    </div>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="jhqD01">
        <nav class="fd-menu" id="">
            <ul class="fd-menu__list">
                <li><a href="#" class="fd-menu__item">Option 1</a></li>
                <li><a href="#" class="fd-menu__item">Option 2</a></li>
                <li><a href="#" class="fd-menu__item">Option 3</a></li>
                <li><a href="#" class="fd-menu__item">Option 4</a></li>
            </ul>
        </nav>
    </div>
</div>


<div class="fd-popover fd-popover--right">
    <div class="fd-popover__control">
        <span class="sap-icon--cart sap-icon--xl fd-popover__control" aria-label="Image label" aria-controls="jhqD1" aria-expanded="false" aria-haspopup="true"></span>
    </div>
    <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow" aria-hidden="true" id="jhqD1">
        <nav class="fd-menu" id="">
            <ul class="fd-menu__list">
                <li><a href="#" class="fd-menu__item">Option 1</a></li>
                <li><a href="#" class="fd-menu__item">Option 2</a></li>
                <li><a href="#" class="fd-menu__item">Option 3</a></li>
                <li><a href="#" class="fd-menu__item">Option 4</a></li>
            </ul>
        </nav>
    </div>
</div>

{% endcapture %}
{% include display-component.html component=default-popoverwmenu %}

<br>

## Implementation Options

Using [popper.js](https://github.com/FezVrasta/popper.js) allows for programmatic positioning, but requires slightly different styling.  Use the `fd-popover__popper` class for wrapping the popover content instead of `fd-popover__body`. See the implementation libraries for specifc details:

* [Fundamental React](https://sap.github.io/fundamental-react/popover)
* [Fundamental NGX](https://sap.github.io/fundamental-ngx/popover)
* [Fundamental Vue](https://sap.github.io/fundamental-vue/#/example/popover)
