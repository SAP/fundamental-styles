---
title: Inline Help
id: inline-help
keywords: inline, help
sidebar: left-navigation-sidebar
toc: false
permalink: components/inline-help.html
folder: components
summary:
tags: [non-f3, a11y]
---
> **DEPRECATED**. The component is deprecated.
{: .docs-intro}
Inline help is used to display help text in a popover, often inline with headers, body text and form labels.

<br>

## Default Position
The default positioning of inline help component is bottom right.
{% capture inline-help %}

<span class="fd-inline-help">
    <span class="fd-inline-help__content fd-inline-help__content--bottom-right">
        Lorem ipsum dolor sit amet, consectetur adipiscing.
    </span>
</span>
{% endcapture %}
{% include display-component.html component=inline-help %}

<br>

## Bottom Left Position
{% capture inline-help %}

<span class="fd-inline-help">
    <span class="fd-inline-help__content fd-inline-help__content--bottom-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing.
    </span>
</span>
{% endcapture %}
{% include display-component.html component=inline-help %}

<br>

## Bottom Center Position
{% capture inline-help %}

<span class="fd-inline-help">
    <span class="fd-inline-help__content fd-inline-help__content--bottom-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing.
    </span>
</span>
{% endcapture %}
{% include display-component.html component=inline-help %}

<br>

## Right Position
{% capture inline-help %}

<span class="fd-inline-help">
    <span class="fd-inline-help__content fd-inline-help__content--right">
        Lorem ipsum dolor sit amet, consectetur adipiscing.
    </span>
</span>
{% endcapture %}
{% include display-component.html component=inline-help %}

<br>

## Left Position
{% capture inline-help %}

<span class="fd-inline-help">
    <span class="fd-inline-help__content fd-inline-help__content--left">
        Lorem ipsum dolor sit amet, consectetur adipiscing.
    </span>
</span>
{% endcapture %}
{% include display-component.html component=inline-help %}

<style>
    /* align examples to center for this page only - necessary for left side popover examples */
    .fd-tile__content {
        text-align: center;
    }
</style>