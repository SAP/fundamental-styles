---
title: Message Box
id: message-box
keywords: message message-box
sidebar: left-navigation-sidebar
toc: false
permalink: components/message-box.html
folder: components
summary:
---

Message Box is used to display simple messages to the user. These messages could be Standard (Default), Confirmation, Error, Success, Warning and Information (Neutral). The Message Box component inherits the look and the behaviour of the [Dialog]({{site.baseurl}}/components/dialog.html) component. 
{: .docs-intro}

<br>

## Message Box Structure
 
The Message Box follows the [Dialog]({{site.baseurl}}/components/dialog.html) structure and consists of following elements:
<ul>
    <li><code>.fd-message-box</code>: styles the Backdrop and displays the Message Box Container with <code>position: fixed</code>. The Message Box becomes visible by applying <code style="white-space:nowrap;">.fd-message--active</code> modifier class.
        <ul>
            <li><code>.fd-message__content</code>: Message Box container
                <ul>
                    <li><code>.fd-message__header</code>: Message Box Header
                        <ul>
                            <li><code>.fd-message__title</code>: Message Box Title</li>
                        </ul>
                    </li>
                    <li><code>.fd-message__body</code>: Message Box Content</li>
                    <li><code>.fd-message__footer</code>: Message Box Footer
                        <ul>
                            <li><code>.fd-message__decisive-button</code>: Footer begin/end button </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
</ul>

{% capture default-message-box %}
<div class="fd-message-box-docs-static fd-message-box fd-message-box--active">
    <div class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-message-box__title">Title</h2>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </div>
        <footer class="fd-bar fd-bar--footer fd-message-box__footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-button--compact fd-message-box__decisive-button">
                        Begin button
                    </button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent fd-button--compact fd-message-box__decisive-button">
                        End button
                    </button>
                </div>
            </div>
        </footer>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=default-message-box %}

<br>

## Message Box Types
Available options are `standard | confirmation | error | success | warning | information`. Add modifier classes `fd-message-box--confirmation`, `fd-message-box--error`, `fd-message-box--success`, `fd-message-box--warning`, and `fd-message-box--information` to the container class. For standard Message Box you don't need a modifier class.
<br>

{% capture default-message-box %}
<div class="fd-message-box-docs-static fd-message-box fd-message-box--active">
    <div class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-message-box__title">Standard</h2>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <a href="#" class="fd-link fd-message-box__link" tabindex="0">Show more</a>
        </div>
        <footer class="fd-bar fd-bar--footer fd-message-box__footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-button--compact fd-message-box__decisive-button">
                        Close
                    </button>
                </div>
            </div>
        </footer>
    </div>
</div>

<br><br><br>

<div class="fd-message-box-docs-static fd-message-box fd-message-box--confirmation fd-message-box--active">
    <div class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-message-box__title">Confirmation</h2>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
        <footer class="fd-bar fd-bar--footer fd-message-box__footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-button--compact fd-message-box__decisive-button">
                        OK
                    </button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent fd-button--compact fd-message-box__decisive-button">
                        Cancel
                    </button>
                </div>
            </div>
        </footer>
    </div>
</div>

<br><br><br>

<div class="fd-message-box-docs-static fd-message-box fd-message-box--error fd-message-box--active">
    <div class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-message-box__title">Error</h2>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <footer class="fd-bar fd-bar--footer fd-message-box__footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-button--compact fd-message-box__decisive-button">
                        Close
                    </button>
                </div>
            </div>
        </footer>
    </div>
</div>

<br><br><br>

<div class="fd-message-box-docs-static fd-message-box fd-message-box--success fd-message-box--active">
    <div class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-message-box__title">Success</h2>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
            Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et mattis erat vel aliquet in sem urna et sagittis diam in vehicula.
        </div>
        <footer class="fd-bar fd-bar--footer fd-message-box__footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-button--compact fd-message-box__decisive-button">
                        Close
                    </button>
                </div>
            </div>
        </footer>
    </div>
</div>

<br><br><br>

<div class="fd-message-box-docs-static fd-message-box fd-message-box--warning fd-message-box--active">
    <div class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-message-box__title">Warning</h2>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
            Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et. 
        </div>
        <footer class="fd-bar fd-bar--footer fd-message-box__footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-button--compact fd-message-box__decisive-button">
                        Close
                    </button>
                </div>
            </div>
        </footer>
    </div>
</div>

<br><br><br>

<div class="fd-message-box-docs-static fd-message-box fd-message-box--information fd-message-box--active">
    <div class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-message-box__title">Information</h2>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
            Vivamus sagittis diam in vehicula lobortis. 
        </div>
        <footer class="fd-bar fd-bar--footer fd-message-box__footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-button--compact fd-message-box__decisive-button">
                        Close
                    </button>
                </div>
            </div>
        </footer>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=default-message-box %}


<br>

## Message Box Types With No Icons

To remove the semantic icon from the title of the Message Box apply the `fd-message-box--no-icon` modifier class to the container.

{% capture default-message-box %}
<div class="fd-message-box-docs-static fd-message-box fd-message-box--no-icon fd-message-box--success fd-message-box--active">
    <div class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-message-box__title">Success</h2>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
            Success Message Box with no status icon in the title and "Show more" link in the body
            <a href="#" class="fd-link fd-message-box__link" tabindex="0">Show more</a>
        </div>
        <footer class="fd-bar fd-bar--footer fd-message-box__footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-button--compact fd-message-box__decisive-button">
                        Close
                    </button>
                </div>
            </div>
        </footer>
    </div>
</div>

<br><br><br>

<div class="fd-message-box-docs-static fd-message-box fd-message-box--error fd-message-box--no-icon fd-message-box--active">
    <div class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-message-box__title">Error</h2>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
            Error Message Box with no status icon in the title
        </div>
        <footer class="fd-bar fd-bar--footer fd-message-box__footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-button--compact fd-message-box__decisive-button">
                        Close
                    </button>
                </div>
            </div>
        </footer>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=default-message-box %}

<br>

## Message Box With Responsive Behavior

By default the Message Box body has 1rem padding all around the content. The values for the paddings in the header and the footer are inhereted from the [Bar]({{site.baseurl}}/components/bar.html) component. 
<br><br>
Horizontal responsive paddings can be applied to the header, the body and the footer of the Message Box. Their values depend on the screen size. <br>
To enable responsive behavior for the paddings use the following modifier classes on the content container:
<br>
<ul>
    <li><code>.fd-message-box__content--s</code>: 1rem - max-width: 599px</li>
    <li><code>.fd-message-box__content--m</code>: 2rem - min-width: 600px and max-width: 1023px</li>
    <li><code>.fd-message-box__content--l</code>: 2rem - min-width: 1024px and max-width: 1439px</li>
    <li><code>.fd-message-box__content--xl</code>: 3rem - min-width: 1440px</li>
</ul>
<br><br>
On mobile devices the component should be in `cosy` mode. Add the `fd-bar--cosy` modifier class to the header and the footer. The buttons in the footer should also be in Cosy mode. The deafult mode for Buttons is `cosy` so no modifier classes are required.
<br><br>
On phone devices the content container takes 100vh and 100vw. It's achieved by applying the `fd-message-box__content--mobile` modifier class on the Message Box content container.
<br>

{% capture default-message-box %}
<div class="fd-message-box-docs-static fd-message-box fd-message-box--no-icon fd-message-box--information fd-message-box--active">
    <div class="fd-message-box__content fd-message-box__content--s">
        <header class="fd-bar fd-bar--cosy fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-message-box__title">Information</h2>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
            Information Message Box on small screen in Cosy mode 
            <a href="#" class="fd-link fd-message-box__link" tabindex="0">Show more</a>
        </div>
        <footer class="fd-bar fd-bar--cosy fd-bar--footer fd-message-box__footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-message-box__decisive-button">
                        Close
                    </button>
                </div>
            </div>
        </footer>
    </div>
</div>

<br><br><br>

<div class="fd-message-box-docs-static fd-message-box fd-message-box--error fd-message-box--no-icon fd-message-box--active">
    <div class="fd-message-box__content fd-message-box__content--m">
        <header class="fd-bar fd-bar--cosy fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-message-box__title">Error</h2>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
            Error Message Box on medium screen in Cosy mode  
        </div>
        <footer class="fd-bar fd-bar--cosy fd-bar--footer fd-message-box__footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-message-box__decisive-button">
                        Close
                    </button>
                </div>
            </div>
        </footer>
    </div>
</div>


<br><br><br>

<div class="fd-message-box-docs-static fd-message-box fd-message-box--success fd-message-box--active">
    <div class="fd-message-box__content fd-message-box__content--l">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-message-box__title">Success</h2>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
            Success Message Box on large screen in compact (desktop) mode  
        </div>
        <footer class="fd-bar fd-bar--footer fd-message-box__footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-button--compact fd-message-box__decisive-button">
                        Close
                    </button>
                </div>
            </div>
        </footer>
    </div>
</div>

<br><br><br>

<div class="fd-message-box-docs-static fd-message-box fd-message-box--warning fd-message-box--active">
    <div class="fd-message-box__content fd-message-box__content--xl">
        <header class="fd-bar fd-bar--header fd-message-box__header">
             <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-message-box__title">Warning</h2>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
           Warning Message Box on extra large screen in compact (desktop) mode 
        </div>
        <footer class="fd-bar fd-bar--footer fd-message-box__footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-button--compact fd-message-box__decisive-button">
                        Close
                    </button>
                </div>
            </div>
        </footer>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=default-message-box %}