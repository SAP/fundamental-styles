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

## Type Weights
{: .docs-header-h2}

{% capture type-weight %}
<p class="fd-has-font-weight-light">This is font with weight light</p>
<p class="fd-has-font-weight-normal">This is font with weight regular</p>
<p class="fd-has-font-weight-bold">This is font with weight bold</p>
{% endcapture %}
{% include display-component.html component=type-weight %}

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
