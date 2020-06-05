---
title: Section
id: section
keywords: section layout
toc: false
sidebar: left-navigation-sidebar
permalink: /layouts/section.html
folder: layouts
summary:
---
The section is a page-level structure container used to divide a page into stacked sections with appropriate padding applied. These should be used to separate large groups of content on a page.
{: .docs-intro}

You will generally use a section inside a page container which will give you the appropriate side margins. Since a section is full-width by default it can be used as a well with background colors or images.

Can hold two child types:
- `.fd-layout-panel`
- `.fd-container` and `fd-col--[num]` can be used to organize panels or content when a grid layout is not desired.

> {{ site.data.strings.headerDisclaimer }}


## Section structure

{% capture section-layout %}
<section class="fd-section">
    .fd-section
</section>
<section class="fd-section">
    .fd-section
</section>
<section class="fd-section">
    .fd-section
</section>
{% endcapture %}
{% include display-component.html component=section-layout class="section" %}


## Section with layout grid
{: .docs-header-h3}
Shows an example with the grid span helper class. This is most appropriate when displaying a collection of content in a linear order.
{% capture section-layout-example %}
<section class="fd-section">
    <div class="fd-layout-grid">
        <div class="fd-layout-panel fd-layout-grid__span-column-2">
            .fd-layout-panel
        </div>
        <div class="fd-layout-panel">
            .fd-layout-panel
        </div>
        <div class="fd-layout-panel">
            .fd-layout-panel
        </div>
        <div class="fd-layout-panel">
            .fd-layout-panel
        </div>
        <div class="fd-layout-panel">
            .fd-layout-panel
        </div>
    </div>
</section>
{% endcapture %}
{% include display-component.html component=section-layout-example %}


## Section with panels
{: .docs-header-h3}
Shows an alternate layout option using columns. This may be more appropriate depending on the need to maintain source order and structure.
{% capture section-layout-example %}
<section class="fd-section">
    <div class="fd-container">
        <div class="fd-layout-panel">
            .fd-layout-panel
        </div>
    </div>
</section>
<section class="fd-section">
    <div class="fd-container">
        <div class="fd-col--6">
            <div class="fd-layout-panel">
                .fd-layout-panel
            </div>
        </div>
        <div class="fd-col--6">
            <div class="fd-layout-panel">
                .fd-layout-panel
            </div>
        </div>
    </div>
</section>
{% endcapture %}
{% include display-component.html component=section-layout-example %}


## Section with header
{: .docs-header-h3}
Header and title elements are available when necessary to label content groups.

{% capture section-layout-example %}
<section class="fd-section">
    <div class="fd-section__header">
      <h3 class="fd-section__title">Section title</h3>
    </div>
    <div class="fd-layout-panel">
        .fd-layout-panel
    </div>
</section>
{% endcapture %}
{% include display-component.html component=section-layout-example %}

