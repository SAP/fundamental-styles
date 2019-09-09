---
title: Application Shell
id: shell
keywords: shell application layouts overlay
toc: false
sidebar: left-navigation-sidebar
permalink: /layouts/shell-layout.html
folder: layouts
summary:
---

Shell layout containers are used to construct the master template and application containers, providing structure to your application. The structure is divided into two layout components — `shell` and `app`.

- The `shell` layer is only for high-level containers: global header, app content, global footer and full-page overlay.
- The `app` layer is for application-level containers: sidebar and page content.

These are dumb containers only concerned with placement with no effect on their contents. Simple responsive behaviors are built-in.
<br><br>

## Container hierarchy

* `.fd-shell`: The outermost full-screen root wrapper
    * `.fd-shell__header`: Global header for [shellbar component]({{base.siteurl}}/components/shellbar.html)
        * `.fd-shell__header--fixed`: Modifier to make the header persistent (sticky)
    * `.fd-shell__app`: The wrapper for the app content
        * `.fd-app`: The root application content container
            * `.fd-app__navigation`: Optional navigation container, use `--horizontal` or `--vertical` orientations
            * `.fd-app__main`: Main app content
    * `.fd_shell__footer`: Optional global footer
        * `.fd-shell__footer--fixed`: Modifier to make the footer persistent (sticky)
    * `.fd-shell__overlay`: Appended container for overlaying content
        * `.fd-overlay`: Common standalone component used to dim background

## Application with only Top Bar
{: .docs-header-h2}
This is the master layout which provides the foundation for all page templates. Use this foundation when a full-width layout is needed, e.g., home page, launchpad, dashboard, etc.

Both the header and footer can be fixed by applying the `.fd-shell--fixed` modifier to the `.fd-shell` container, or each can be fixed individual by apply `.fd-shell__header--fixed` or `.fd-shell__footer--fixed`.

> See the [shellbar component]({{base.siteurl}}/components/shellbar.html) which is used in the header container.

The `app` containers here provide additional structure to application content.

{% capture app-layout-no-sidebar %}
<div class="fd-shell fd-shell--fundamentals">
    <div class="fd-shell__header">
        fd-shell__header
    </div>
    <div class="fd-shell__app">
        <div class="fd-app">
            <main class="fd-app__main">
                fd-app__main
            </main>
        </div>
    </div>
    <div class="fd-shell__footer">
        fd-shell__footer
    </div>
</div>
{% endcapture %}
{% include display-component.html component=app-layout-no-sidebar class="app" %}


## Application with horizontal navigation
{: .docs-header-h2}

The sidebar is an optional `app` layout container and should be used with applications with more than two levels of navigation.

{% capture app-layout %}
<div class="fd-shell fd-shell--fundamentals">
    <div class="fd-shell__header">
        fd-shell__header
    </div>
    <div class="fd-shell__app">
        <div class="fd-app">
            <div class="fd-app__navigation fd-app__navigation--horizontal">
                fd-app__navigation--horizontal
            </div>
            <main class="fd-app__main">
                fd-app__main
            </main>
        </div>
    </div>
    <div class="fd-shell__footer">
        fd-shell__footer
    </div>
</div>
{% endcapture %}
{% include display-component.html component=app-layout class="app" %}

## Application with Sidebar
{: .docs-header-h2}

The sidebar is an optional `app` layout container and should be used with applications with more than two levels of navigation.

{% capture app-layout %}
<div class="fd-shell fd-shell--fundamentals">
    <div class="fd-shell__header">
        fd-shell__header
    </div>
    <div class="fd-shell__app">
        <div class="fd-app">
            <div class="fd-app__navigation fd-app__navigation--vertical">
                fd-app__navigation--vertical
            </div>
            <main class="fd-app__main">
                fd-app__main
            </main>
        </div>
    </div>
    <div class="fd-shell__footer">
        fd-shell__footer
    </div>
</div>
{% endcapture %}
{% include display-component.html component=app-layout class="app" %}

## Application with UI overlay
{: .docs-header-h2}
The overlay container is meant to accommodate any content that needs to be positioned on top of the UI. The is often included at the bottom of the DOM to overcome positioning and overflow styles of content container.
There are two options for Application overlay.

- `.fd-overlay--modal`: Dims background and position the modal in the center of the viewport.
- `.fd-overlay--alert`: Does not dim the background and positions the alert component near the top of the viewport.
Commonly the `fd-overlay` class will be added to the overlay to dim the background and center the content, as with a modal. However, the container is generic enough to accommodate any full-UI takeover.

The container visibility can be toggled with the `aria-hidden` attribute.

### Application Overlay Modal example
{: .docs-header-h3}

{% capture app-layout-no-sidebar %}
<div class="fd-shell fd-shell--fundamentals">
    <div class="fd-shell__header">
        fd-shell__header
    </div>
    <div class="fd-shell__app">
        <div class="fd-app">
            <main class="fd-app__main">
                fd-app__main
            </main>
        </div>
    </div>
    <div class="fd-shell__footer">
        fd-shell__footer
    </div>
    <div class="fd-shell__overlay fd-overlay fd-overlay--modal" aria-hidden="false">
        <div class="fd-modal" role="dialog">
          <div class="fd-modal__content" role="document">
              <header class="fd-modal__header">
                  <h3 class="fd-modal__title">fd-modal__header</h3>
                  <button class="fd-button--light fd-modal__close"></button>
              </header>
              <div class="fd-modal__body">
                  fd-modal__body
              </div>
              <footer class="fd-modal__footer">
                <button class=" fd-button--light">Button</button>
                <button class=" fd-button">Button</button>
                </footer>
          </div>
        </div>
    </div>
</div>



{% endcapture %}
{% include display-component.html component=app-layout-no-sidebar class="app" %}

### Application Overlay Alert example
{: .docs-header-h3}

{% capture app-layout-no-sidebar %}
<div class="fd-shell fd-shell--fundamentals">
    <div class="fd-shell__header">
        fd-shell__header
    </div>
    <div class="fd-shell__app">
        <div class="fd-app">
            <main class="fd-app__main">
                fd-app__main
            </main>
        </div>
    </div>
    <div class="fd-shell__footer">
        fd-shell__footer
    </div>
    <div class="fd-shell__overlay fd-overlay fd-overlay--alert" aria-hidden="false">
        <div class="fd-alert fd-alert--warning fd-alert--dismissible" role="alert" id="4Nolz351">
          <button class="fd-alert__close" aria-controls="4Nolz351" aria-label="Close"></button>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </div>
    </div>
</div>



{% endcapture %}
{% include display-component.html component=app-layout-no-sidebar class="app" %}
