---
title: Modal
id: modal
keywords: modal, modals
sidebar: left-navigation-sidebar
toc: false
permalink: components/modal.html
folder: components
summary:
---

The modal is a container displayed in response to an action.
{: .docs-intro}

## Introduction
The dialog control interrupts the current app process to prompt the user for information or for a response. It forces a decision or a confirmation that needs to be signed off by the user.

Use the dialog if:
<ul>
    <li>You want to display complex content, but don’t want the user to navigate away from the current page.</li>
    <li>You want to display an additional step or process that needs to be confirmed by a user action.</li>
    <li>You want to enable the user to create an object with a small number of fields (up to 8 fields).</li>
</ul>

Do not use the dialog if:
<ul>
    <li>You want to display a simple message. Use the message box instead.</li>
    <li>You just want to confirm a successful action.</li>
    <li>You do not want to interrupt the user.</li>
    <li>You want to enable users to create an object with more than 8 fields. Use an object page instead.</li>
</ul>

## Modal structure
Modal consists of following elements:
<ul>
    <li><code>.fd-modal</code>: Wraps modal and displays it with <code>position: fixed</code>. Modal can be made visible by applying <code style="white-space:nowrap;">.fd-modal--active</code> class
        <ul>
            <li><code>.fd-modal__content</code>: Modal dialog window
                <ul>
                    <li><code>.fd-modal__header</code>: Header
                        <ul>
                            <li><code>.fd-modal__title</code>: Modal title</li>
                        </ul>
                    </li>
                    <li><code>.fd-modal__subheader</code>: Subheader</li>
                    <li><code>.fd-modal__body</code>: Modal content</li>
                    <li><code>.fd-modal__loader</code>: Modal loader</li>
                    <li><code>.fd-modal__footer</code>: Modal footer</li>
                </ul>
            </li>
        </ul>
    </li>
</ul>

Modals header, subheader and footer elements are composed out of [Bar Component]({{site.baseurl}}/components/bar.html).
CSS classes provided by Modal component are used to slightly override Bar behaviour in favour of Modal styling, but
Modal headers and footer can be customized using Bar component features. 

<br>

{% capture modal-anatomy %}
    <div class="fd-modal fd-modal--active">
        <div class="fd-modal__content">
            <header class="fd-modal__header fd-bar fd-bar--header-with-subheader">
                <div class="fd-bar__left">
                    <div class="fd-bar__element">
                        Modal header
                    </div>
                    <div class="fd-bar__element fd-modal__title">
                        Modal title
                    </div>
                </div>
            </header>
            <div class="fd-modal__subheader fd-bar fd-bar--subheader">
                <div class="fd-bar__left">
                    <div class="fd-bar__element">
                        Modal subheader
                    </div>
                </div>
            </div>
            <div class="fd-modal__body">
                Modal body
                <div class="fd-modal__loader">
                    Modal loader
                </div>
            </div>
            <footer class="fd-modal__footer fd-bar fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        Modal footer
                    </div>
                </div>
            </footer>
        </div>
    </div>
{% endcapture %}

{% include display-component.html component=modal-anatomy %}


## Modal size modifiers
Header subheader and footer by default uses padding values determined by [Bar Component]({{site.baseurl}}/components/bar.html). By default modal body has no horizontal paddings.
Horizontal paddings should be applied depending on dialog width.
<br>
Modifying header/body/footer horizontal paddings:
<ul>
    <li><code>.fd-modal__content--s</code>: 1rem - max-width: 599px</li>
    <li><code>.fd-modal__content--m</code>: 2rem - min-width: 600px and max-width: 1023px</li>
    <li><code>.fd-modal__content--l</code>: 2rem - min-width: 1024px and max-width: 1439px</li>
    <li><code>.fd-modal__content--xl</code>: 3rem - min-width: 1440px</li>
</ul>

By default modal on mobile devices takes full height and width of the screen. This behaviour can be changed using following class, which will add additional spacing around modal.
<ul>
    <li><code>.fd-modal__content--no-mobile-stretch</code>: margin: 6% 10%</li>
</ul>

By default modal body has horizontal padding. This behavior might be changed using 
<ul>
    <li><code>.fd-modal__body--no-vertical-padding</code>: padding-top: 0, padding-bottom: 0</li>
</ul>


### Modal header/footer horizontal paddings
{% capture modal-size %}
    <div class="fd-modal__content fd-modal__content--s">
        <header class="fd-modal__header fd-bar">
            <div class="fd-bar__left">
                <div class="fd-bar__element fd-modal__title">
                    Lorem ipsum
                </div>
            </div>
        </header>
        <div class="fd-modal__body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </div>
        <footer class="fd-modal__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-button--compact">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--light fd-button--compact">Cancel</button>
                </div>
            </div>
        </footer>
    </div>
    <div class="fd-modal__content fd-modal__content--m">
        <header class="fd-modal__header fd-bar">
            <div class="fd-bar__left">
                <div class="fd-bar__element fd-modal__title">
                    Lorem ipsum
                </div>
            </div>
        </header>
        <div class="fd-modal__body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </div>
        <footer class="fd-modal__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-button--compact">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--light fd-button--compact">Cancel</button>
                </div>
            </div>
        </footer>
    </div> 
    <div class="fd-modal__content fd-modal__content--xl">
        <header class="fd-modal__header fd-bar">
            <div class="fd-bar__left">
                <div class="fd-bar__element fd-modal__title">
                    Lorem ipsum
                </div>
            </div>
        </header>
        <div class="fd-modal__body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </div>
        <footer class="fd-modal__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-button--compact">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--light fd-button--compact">Cancel</button>
                </div>
            </div>
        </footer>
    </div>
{% endcapture %}
{% include display-component.html component=modal-size %}

## Modal resizable mode
Modal can be opened in resizable mode using <code>.fd-modal__content--resizable</code>, enabling to horizontally and vertically resize modals dialog (only for <b>desktop</b>).
{% capture modal-resize %}
    <div class="fd-modal fd-modal--active">
        <div class="fd-modal__content fd-modal__content--resizable fd-modal__content--s">
            <header class="fd-modal__header fd-bar">
                <div class="fd-bar__left">
                    <div class="fd-bar__element fd-modal__title">
                        Lorem ipsum
                    </div>
                </div>
            </header>
            <div class="fd-modal__body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </div>
            <footer class="fd-modal__footer fd-bar fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--emphasized fd-button--compact">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--light fd-button--compact">Cancel</button>
                    </div>
                </div>
            </footer>
        </div>
    </div>
{% endcapture %}
{% include display-component.html component=modal-resize %}

## Modal draggable mode
Modal can be opened in draggable mode, enabling drag dialog over browser view-port area (only for <b>desktop</b>).
Draggable mode can be visualized using following classes:
<ul>
    <li><code>.fd-modal__content--draggable-grab</code>: element can be dragged</li>
    <li><code>.fd-modal__content--draggable-grabbing</code>: element is being dragged</li>
</ul>
{% capture modal-drag %}
    <div class="fd-modal fd-modal--active">
        <div class="fd-modal__content fd-modal__content--draggable-grab fd-modal__content--s">
            <header class="fd-modal__header fd-bar">
                <div class="fd-bar__left">
                    <div class="fd-bar__element fd-modal__title">
                        Lorem ipsum
                    </div>
                </div>
            </header>
            <div class="fd-modal__body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </div>
            <footer class="fd-modal__footer fd-bar fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--emphasized fd-button--compact">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--light fd-button--compact">Cancel</button>
                    </div>
                </div>
            </footer>
        </div>
    </div>
{% endcapture %}
{% include display-component.html component=modal-drag %}

## Examples
## Select Dialog
{% capture modal-information %}
    <div class="fd-modal fd-modal--active">
        <div class="fd-modal__content">
            <header class="fd-modal__header fd-bar fd-bar--header-with-subheader">
                <div class="fd-bar__left">
                    <div class="fd-bar__element fd-modal__title">
                        Select dialog
                    </div>
                </div>
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-input-group__button fd-button--light fd-button--compact">Clear</button>
                    </div>
                </div>
            </header>
            <div class="fd-modal__subheader fd-bar fd-bar--subheader">
                <div class="fd-bar__middle">
                    <div class="fd-input-group">
                        <input class="fd-input fd-input-group__input fd-input--compact" type="text" placeholder="Search...">
                        <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--compact">
                            <button class="fd-input-group__button fd-button--icon fd-button--light fd-button--compact sap-icon--search"></button>
                        </span>
                    </div>
                </div>
            </div>
            <div class="fd-modal__body fd-modal__body--no-vertical-padding">
                <ul class="fd-list fd-list--compact">
                  <li class="fd-list__item">
                      <span class="fd-list__title">List item 1</span>
                  </li>
                  <li class="fd-list__item">
                      <span class="fd-list__title">List item 2</span>
                  </li>
                  <li class="fd-list__item is-active">
                      <span class="fd-list__title">List item 3</span>
                  </li>
                  <li class="fd-list__item is-active">
                      <span class="fd-list__title">List item 4</span>
                  </li>
                  <li class="fd-list__item">
                      <span class="fd-list__title">List item 5</span>
                  </li>
                  <li class="fd-list__item">
                      <span class="fd-list__title">List item 6</span>
                  </li>
                  <li class="fd-list__footer">
                      2 items selected
                  </li>
                </ul>
            </div>
            <footer class="fd-modal__footer fd-bar fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--emphasized fd-button--compact">Select</button>
                    </div>
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--light fd-button--compact">Cancel</button>
                    </div>
                </div>
            </footer>
        </div>
    </div>
{% endcapture %}

{% include display-component.html component=modal-information %}

## Loading Modal
{% capture modal-loading %}
    <div class="fd-modal fd-modal--active">
        <div class="fd-modal__content fd-modal__content--s">
            <header class="fd-modal__header fd-bar">
                <div class="fd-bar__left">
                    <div class="fd-bar__element fd-modal__title">
                        Loading Data...
                    </div>
                </div>
            </header>
            <div class="fd-modal__body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                <div class="fd-modal__loader fd-busy-indicator--l" aria-hidden="false" aria-label="Loading">
                    <div class="fd-busy-indicator--circle-0"></div>
                    <div class="fd-busy-indicator--circle-1"></div>
                    <div class="fd-busy-indicator--circle-2"></div>
                </div>
            </div>
            <footer class="fd-modal__footer fd-bar fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--light fd-button--compact">Cancel</button>
                    </div>
                </div>
            </footer>
        </div>
    </div>
{% endcapture %}
{% include display-component.html component=modal-loading %}