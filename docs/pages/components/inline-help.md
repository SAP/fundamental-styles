---
title: Inline Help
id: inline-help
keywords: inline, help
sidebar: left-navigation-sidebar
toc: false
permalink: components/inline-help.html
folder: components
summary:
---
> **DEPRECATED**. The component is deprecated.
{: .docs-intro}
Inline help is used to display help text in a popover, often inline with headers, body text and form labels.

<br>

## Default Position
The default positioning of inline help component is bottom right.
{% capture inline-help %}
<div class="fd-popover" aria-label ="inline-help">
    <div class="fd-popover__control">
        <span class="fd-inline-help" tabindex="0" role="button" aria-controls="h0C6A326" aria-expanded="false" aria-haspopup="true">
        </span>
    </div>
    <div id="h0C6A326" class="fd-popover__popper" aria-hidden="true" x-placement="bottom-start" style="left: -14px;">
        <span class="fd-inline-help__content fd-no-border">Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
        <span class="fd-popover__arrow" style="left: 7px;"></span>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=inline-help %}

<br>

## Bottom Left Position
{% capture inline-help %}
<div class="fd-popover" aria-label ="inline-help">
    <div class="fd-popover__control">
        <span class="fd-inline-help" tabindex="0" role="button" aria-controls="bbh0C6A3261" aria-expanded="false" aria-haspopup="true">
        </span>
    </div>
    <div id="bbh0C6A3261" class="fd-popover__popper" aria-hidden="true" x-placement="bottom-end" style="right: -14px;">
        <span class="fd-inline-help__content fd-no-border">Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
        <span class="fd-popover__arrow" style="right: 7px;"></span>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=inline-help %}

<br>

## Bottom Center Position
{% capture inline-help %}

<div class="fd-popover" aria-label ="inline-help">
    <div class="fd-popover__control">
        <span class="fd-inline-help" tabindex="0" role="button" aria-controls="aah0C6A32611" aria-expanded="false" aria-haspopup="true">
        </span>
    </div>
    <div id="aah0C6A32611" class="fd-popover__popper" aria-hidden="true" x-placement="bottom" style="left: -185px;" >
        <span class="fd-inline-help__content fd-no-border">Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
        <span class="fd-popover__arrow" style="left: 178px;"></span>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=inline-help %}

<br>

## Right Position
{% capture inline-help %}

<div class="fd-popover" aria-label ="inline-help">
    <div class="fd-popover__control">
        <span class="fd-inline-help" tabindex="0" role="button" aria-controls="cch0C6A3261" aria-expanded="false" aria-haspopup="true">
        </span>
    </div>
    <div id="cch0C6A3261" class="fd-popover__popper" aria-hidden="true" x-placement="right" style="left: 18px;top: -7px;" >
        <span class="fd-inline-help__content fd-no-border">Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
        <span class="fd-popover__arrow" style="top: 4px;"></span>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=inline-help %}

<br>

## Left Position
{% capture inline-help %}

<div class="fd-popover" aria-label ="inline-help">
    <div class="fd-popover__control">
        <span class="fd-inline-help" tabindex="0" role="button" aria-controls="ddh0C6A3261" aria-expanded="false" aria-haspopup="true">
        </span>
    </div>
    <div id="ddh0C6A3261" class="fd-popover__popper" aria-hidden="true" x-placement="left" style="right: 18px;top: -7px;" >
        <span class="fd-inline-help__content fd-no-border">Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
        <span class="fd-popover__arrow" style="top: 4px;"></span>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=inline-help %}

<style>
    /* align examples to center for this page only - necessary for left side popover examples */
    .docs-tile__content {
        text-align: center;
    }
</style>