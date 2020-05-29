---
title: Loading Spinner
id: spinner
keywords: loading, spinner
sidebar: left-navigation-sidebar
toc: false
permalink: components/loading-spinner.html
folder: components
summary:
---

A loading spinner informs the user of an ongoing operation. Only one busy indicator should be shown at a time.
{: .docs-intro}
> **DEPRECATED**. Loading Spinner has been deprecated in Fiori 3. The successor of the loading spinner is [Busy Indicator component]({{site.baseurl}}/components/busy-indicator.html). There is no overlay version of Alert in Fiori 3.
{: .docs-deprecated}
The aria-hidden attribute is used to hide and show the element.
Loading indicators are not visible all the time, only when needed. To show and hide the loading indicator the `aria-hidden` attribute is used to hide/show the element.

> {{ site.data.strings.headerDisclaimer }}

## Loader element

The loading element is used to display the loading indicator animation.

{% capture default %}
<div class="fd-spinner" aria-hidden="false" aria-label="Loading">
    <div class="fd-spinner__body"></div>
</div>
{% endcapture %}

{% include display-component.html component=default %}

<br>

## Usage with other elements
The loading indicator is most often used within another component to indicate the loading state. A container (even `ui-`, `app-`, and page-level) can be “activated” by setting `aria-busy="true"`.

The spinner should be included inside the container. Visibility can be toggled in relation to the aria-busy attribute. They should always be opposites, i.e, if currently loading, `section[aria-busy="true"]`, `.fd-spinner[aria-hidden="false"]`, once the content is loaded, toggle to false and true respectively.

{% capture aria %}
<div class="fd-layout-panel" aria-busy="true">
    <div class="fd-spinner" aria-hidden="false" aria-label="Loading">
        <div class="fd-spinner__body"></div>
    </div>
    <div class="fd-layout-panel__header">
        <h3 class="fd-layout-panel__title">Lorem ipsum</h3>
    </div>
    <!-- Loaded content goes here -->
    <div class="fd-layout-panel__footer">
        <p><em>Etiam pulvinar turpis sed velit porttitor vel adipiscing velit fringilla.</em></p>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=aria %}
