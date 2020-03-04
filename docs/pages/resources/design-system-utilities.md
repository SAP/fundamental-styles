---
title: Design System Utilities
keywords: design system cheat sheet
sidebar: left-navigation-sidebar
toc: false
permalink: resources/design-system-utilities.html
folder: resources
summary: The following guide covers some major utility features of the Fundamental Library Styles design system toolkit.
---


<div class="fd-message-strip fd-message-strip--warning fd-message-strip--dismissible" role="alert">
  <p class="fd-message-strip__text">
    This page is under construction and the utility features may change. We are migrating those features towards the Fiori 3 Design System, so you may expect some breaking changes(e.g. the color system)
  </p>
</div>

## Text Utilities
{: .docs-header-h2}

Use the text utilities to set the text style and the justification.

{% capture text-util %}
<p class="fd-has-font-weight-bold">This text is bold</p>
<p class="fd-has-font-style-italic">This text is italic</p>
<p class="fd-has-text-align-center">This text is centered</p>
<p class="fd-has-text-align-right">This text is right aligned</p>
<p class="fd-has-text-transform-none">text with no transformation</p>
{% endcapture %}
{% include display-component.html component=text-util %}
## Floats
{: .docs-header-h2}

The float helper classes are used to control the element floats in the HTML element.

{% capture float-util %}
<p class="fd-has-float-left">This text is floating on left</p>
<p class="fd-has-float-right">This text is floating on right</p>
{% endcapture %}
{% include display-component.html component=float-util %}

## Type Sizes
{: .docs-header-h2}

Use these CSS classes to control the text size. Used mainly for content text, all standard components have the right text size by default.

{% capture type-util %}
<p class="fd-has-type">This is the default body type size</p>
<p class="fd-has-type-minus-1">This is text type size -1</p>
<p class="fd-has-type-0">This is text type size 0 (same as default)</p>
<p class="fd-has-type-1">This is text type size 1</p>
<p class="fd-has-type-2">This is text type size 2</p>
<p class="fd-has-type-3">This is text type size 3</p>
<p class="fd-has-type-4">This is text type size 4</p>
<p class="fd-has-type-5">This is text type size 5</p>
<p class="fd-has-type-6">This is text type size 5</p>
{% endcapture %}
{% include display-component.html component=type-util %}

## Type Weights
{: .docs-header-h2}

{% capture type-weight %}
<p class="fd-has-font-weight-light">This is font with weight light</p>
<p class="fd-has-font-weight-normal">This is font with weight regular</p>
<p class="fd-has-font-weight-bold">This is font with weight bold</p>
{% endcapture %}
{% include display-component.html component=type-weight %}

## Margin and Padding
{: .docs-header-h2}

Margin and/or padding can be applied on all sides to an element with the following helper classes. These helper classes are structured as `.fd-has-margin-{size}` and `.fd-has-padding-{size}`. The following table list all the available options for `{size}` and it's rendered value.

{: .docs-table}
| {size} options | Value |
| -------------- | ----- |
| `none`         | 0     |
| `tiny`         | 8px   |
| `small`           | 16px   |
| `medium`            | 32px  |
| `large`          | 48px  |

Similar to adding margin or padding on all sides of an element, you can use the `{side}` option to selectively add to a single side. The helper classes for a specific side is structured as `.fd-has-margin-{side}-{size}` and `.fd-has-padding-{side}-{size}`. For example to add margin to the bottom on an element you could use a helper class `.fd-has-margin-bottom-tiny`. To remove margin from the left size of an element you can use the class `.fd-has-margin-left-none`. The following table lists all the available options for `{side}` an `{size}` options

{: .docs-table}
| Class structure                | {side} options                    | {size} options                            |
| ------------------------------ | --------------------------------- | ----------------------------------------- |
| `.fd-has-margin-{side}-{size}` | `top`, `right`, `bottom`, `left` | `none`, `tiny`, `small`, `medium`, `large` |
| `.fd-has-padding-{side}-{size}` | `top`, `right`, `bottom`, `left` | `none`, `tiny`, `small`, `medium`, `large` |

<style>
.{
  outline: solid 1px lightgray;
  display: flex;
  font-family: monospace;
  margin: 16px;
}
</style>
{% capture margin %}
<h3> Margin helper classes </h3>
<span class="fd-has-margin-none"> .fd-has-margin-none //margin: 0 </span>
<span class="fd-has-margin-tiny"> .fd-has-margin-tiny //margin: 8px</span>
<span class="fd-has-margin-small"> .fd-has-margin-small //margin: 16px</span>
<span class="fd-has-margin-medium"> .fd-has-margin-medium //margin: 32px</span>
<span class="fd-has-margin-large"> .fd-has-margin-large//margin: 48px</span>

<hr>

<h3> Removing margin by side using helper classes</h3>
<span class="fd-has-margin-medium fd-has-margin-top-none">.fd-has-margin-top-none</span>
<span class="fd-has-margin-medium fd-has-margin-right-none">.fd-has-margin-right-none</span>
<span class="fd-has-margin-medium fd-has-margin-bottom-none">.fd-has-margin-bottom-none</span>
<span class="fd-has-margin-medium fd-has-margin-left-none">.fd-has-margin-left-none</span>

<hr>

<h3> Padding helper classes</h3>
<span class="fd-has-padding-none">.fd-has-padding-none</span>
<span class="fd-has-padding-tiny">.fd-has-padding-tiny</span>
<span class="fd-has-padding-small">.fd-has-padding-small</span>
<span class="fd-has-padding-medium">.fd-has-padding-medium</span>
<span class="fd-has-padding-large">.fd-has-padding-large</span>

<hr>

<h3> Removing padding by side using helper classes</h3>
<span class="fd-has-padding-medium fd-has-padding-top-none">.fd-has-padding-top-none</span>
<span class="fd-has-padding-medium fd-has-padding-right-none">.fd-has-padding-right-none</span>
<span class="fd-has-padding-medium fd-has-padding-bottom-none">.fd-has-padding-bottom-none</span>
<span class="fd-has-padding-medium fd-has-padding-left-none">.fd-has-padding-left-none</span>
{% endcapture %}
{% include display-component.html component=margin class="margin-padding-helpers"%}


## Other Utilities
{: .docs-header-h2}

### Clearfix
{: .docs-header-h3}

{% capture clear %}
<span class="fd-has-clearfix">This element clear all</span>
{% endcapture %}

{% include display-component.html component=clear %}

### Display Flex
{: .docs-header-h3}

{% capture flex %}
<span class="fd-has-display-flex">This element is display flex</span>
{% endcapture %}

{% include display-component.html component=flex %}

### Display Block
{: .docs-header-h3}

{% capture block %}
<span class="fd-has-display-block">This element is display block</span>
{% endcapture %}

{% include display-component.html component=block %}

### Align items center
{: .docs-header-h3}

{% capture block %}
<span class="fd-has-align-items-center">This element is align items center</span>
{% endcapture %}

{% include display-component.html component=block %}

### Flex grow
{: .docs-header-h3}

{% capture block %}
<span class="fd-has-flex-grow-1">This element is flex grow</span>
{% endcapture %}

{% include display-component.html component=block %}

### Screen reader only
{: .docs-header-h3}

{% capture block %}
<span class="fd-screen-reader-only">This element can only be read by screen readers</span>
{% endcapture %}

{% include display-component.html component=block %}
