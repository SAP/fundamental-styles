---
title: Busy Indicator
id: busy-indicator
keywords: busy indicator, busy, spinner, loader
sidebar: left-navigation-sidebar
toc: false
permalink: components/busy-indicator.html
folder: components
summary:
---

A busy indicator informs the user of an ongoing operation. Only one busy indicator should be shown at a time.
{: .docs-intro}
Busy indicators are not visible all the time, only when needed.

<br>
## Busy indicator usage and size options
{% capture busy-indicator %}
<div style="text-align: center">
    <div class="fd-busy-indicator--l" aria-hidden="false" aria-label="Loading">
        <div class="fd-busy-indicator--circle-0"></div>
        <div class="fd-busy-indicator--circle-1"></div>
        <div class="fd-busy-indicator--circle-2"></div>
    </div><br /><br />
    <div class="fd-busy-indicator--m" aria-hidden="false" aria-label="Loading">
        <div class="fd-busy-indicator--circle-0"></div>
        <div class="fd-busy-indicator--circle-1"></div>
        <div class="fd-busy-indicator--circle-2"></div>
    </div><br /><br />
    <div class="fd-busy-indicator" aria-hidden="false" aria-label="Loading">
        <div class="fd-busy-indicator--circle-0"></div>
        <div class="fd-busy-indicator--circle-1"></div>
        <div class="fd-busy-indicator--circle-2"></div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=busy-indicator %}

## Busy indicator usage in contrast mode
{% capture contrast-busy-indicator %}
<div style="display:flex;justify-content:center;flex-direction:column;align-items:center;background-color:cadetblue;height:250px">
    <div class="fd-busy-indicator--l contrast" aria-hidden="false" aria-label="Loading">
        <div class="fd-busy-indicator--circle-0"></div>
        <div class="fd-busy-indicator--circle-1"></div>
        <div class="fd-busy-indicator--circle-2"></div>
    </div>
</div>
{% endcapture %}
{% include display-component.html component=contrast-busy-indicator %}
