---
title: Page
id: page
keywords: page layout
toc: false
sidebar: left-navigation-sidebar
permalink: /layouts/page-layout.html
folder: layouts
summary:
---
Page layout containers are used to construct the view states of the application. The `page` layer includes the header and content containers.
{: .docs-intro}

The `.fd-page` container is the workhorse of the application where page content updates occur based on navigation selections.

Like the app-level, these are dumb containers only concerned with placement with no effect on their contents.

<br>

## Container hierarchy
The elements used to construct a page are:
* `.fd-page`: The page-level wrapper
  * `.fd-page__header`: The page-level header holds the page title, breadcrumb and main actions
  * `.fd-page__content`: Holds the page content

<br/>

## Basic page
The `.fd-page__header` container most often will include the `.fd-breadcrumb` and `.fd-action-bar` components. The header does include side padding.

The `.fd-page__content` container should have one or more `.fd-section` containers. The content container does not include padding — allows for full-bleed content — so child sections are necessary.

{% capture page-layout %}
<main class="fd-page">
    <header class="fd-page__header fd-has-background-color-background-2">
        fd-page_header
    </header>
    <div class="fd-page__content fd-has-background-color-neutral-2">
        fd-page_content
    </div>
</main>
{% endcapture %}
{% include display-component.html component=page-layout  class="page"%}

<style media="screen">
    .fd-page__content{
        height: 300px;
    }
</style>
