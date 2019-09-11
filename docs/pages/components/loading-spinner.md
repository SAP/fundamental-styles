---
title: Loading Spinner / Busy Indicator
id: spinner
keywords: loading, spinner, busy, indicator
sidebar: left-navigation-sidebar
toc: false
permalink: components/loading-spinner.html
folder: components
summary:
---

A loading spinner/busy indicator informs the user of an ongoing operation. Only one busy indicator should be shown at a time.
{: .docs-intro}

## Loading Spinner

- Use `aria-hidden` attribute is used to hide and show the element.
- Default size  is medium. To render small or large size, `--small` and `--large` modifier are avialable. 

{% capture default %}
<div class="fd-loading-spinner fd-loading-spinner--small" aria-hidden="false" aria-label="Loading"></div>
<div class="fd-loading-spinner" aria-hidden="false" aria-label="Loading"></div>
<div class="fd-loading-spinner fd-loading-spinner--large" aria-hidden="false" aria-label="Loading"></div>
{% endcapture %}

{% include display-component.html component=default %}

## Loading Dots

- Use `aria-hidden` attribute is used to hide and show the element.

{% capture default %}
<div class="fd-loading-dots" aria-hidden="false" aria-label="Loading">
    <div></div>
    <div></div>
    <div></div>
</div>
{% endcapture %}

{% include display-component.html component=default %}

<br>

## Spinner (deprecated)
> Note: `fd-spinner` has been deprecated in favor of `fd-loading-spinner` and `fd-loading-dots`
The loading element is used to display the loading indicator animation.

{% capture default %}
<div class="fd-spinner" aria-hidden="false" aria-label="Loading">
    <div></div>
</div>
{% endcapture %}

{% include display-component.html component=default %}

