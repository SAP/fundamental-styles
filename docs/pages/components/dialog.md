---
title: Dialog
id: dialog
keywords: dialog, dialogs, modal, modals
sidebar: left-navigation-sidebar
toc: false
permalink: components/dialog.html
folder: components
summary:
---

The dialog is a container displayed in response to an action.
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

## Dialog structure
Dialog consists of following elements:
<ul>
    <li><code>.fd-dialog</code>: Wraps dialog and displays it with <code>position: fixed</code>. Dialog can be made visible by applying <code style="white-space:nowrap;">.fd-dialog--active</code> class
        <ul>
            <li><code>.fd-dialog__content</code>: Dialog window
                <ul>
                    <li><code>.fd-dialog__header</code>: Header
                        <ul>
                            <li><code>.fd-dialog__title</code>: Dialog title</li>
                        </ul>
                    </li>
                    <li><code>.fd-dialog__subheader</code>: Subheader</li>
                    <li><code>.fd-dialog__body</code>: Dialog content</li>
                    <li><code>.fd-dialog__loader</code>: Dialog loader</li>
                    <li><code>.fd-dialog__footer</code>: Dialog footer
                        <ul>
                            <li><code>.fd-dialog__decisive-button</code>: Footer begin/end button </li>
                        </ul>
                    </li>
                    <li><code>.fd-dialog__resize-handle</code>: Handle for resizing modal</li>
                </ul>
            </li>
        </ul>
    </li>
</ul>

Dialogs header, subheader and footer elements are composed out of [Bar Component]({{site.baseurl}}/components/bar.html).
CSS classes provided by Dialog component are used to slightly override Bar behaviour in favour of Dialog styling, but
Dialog headers and footer can be customized using Bar component features. 

<br>

{% capture dialog-anatomy %}
    <div class="fd-dialog-docs-static fd-dialog fd-dialog--active">
        <div class="fd-dialog__content" role="dialog" aria-modal="true" aria-labelledby="dialog-title-1">
            <span class="fd-dialog__resize-handle"></span>
            <header class="fd-dialog__header fd-bar fd-bar--header-with-subheader">
                <div class="fd-bar__left">
                    <div class="fd-bar__element">
                        Dialog header
                    </div>
                    <div class="fd-bar__element">
                        <h3 class="fd-dialog__title" id="dialog-title-1">
                            Dialog title
                        </h3>
                    </div>
                </div>
            </header>
            <div class="fd-dialog__subheader fd-bar fd-bar--subheader">
                <div class="fd-bar__left">
                    <div class="fd-bar__element">
                        Dialog subheader
                    </div>
                </div>
            </div>
            <div class="fd-dialog__body">
                Dialog body
                <div class="fd-dialog__loader">
                    Dialog loader
                </div>
            </div>
            <footer class="fd-dialog__footer fd-bar fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        Dialog footer
                    </div>
                    <div class="fd-bar__element">
                        <button class="fd-dialog__decisive-button fd-button fd-button--compact">
                            Begin button
                        </button>
                    </div>
                    <div class="fd-bar__element">
                        <button class="fd-dialog__decisive-button fd-button fd-button--compact">
                            End button
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    </div>
{% endcapture %}

{% include display-component.html component=dialog-anatomy %}


## Dialog size modifiers
By default dialog body has no horizontal paddings. Header, subheader, body and footer paddings should be applied responsively based on dialogs window width.
<br>
Modifying header/subheader/body/footer horizontal paddings:
<ul>
    <li><code>.fd-dialog__content--s</code>: 1rem - max-width: 599px</li>
    <li><code>.fd-dialog__content--m</code>: 2rem - min-width: 600px and max-width: 1023px</li>
    <li><code>.fd-dialog__content--l</code>: 2rem - min-width: 1024px and max-width: 1439px</li>
    <li><code>.fd-dialog__content--xl</code>: 3rem - min-width: 1440px</li>
</ul>

By default dialog body has vertical padding. This behavior might be changed using:
<ul>
    <li><code>.fd-dialog__body--no-vertical-padding</code>: padding-top: 0, padding-bottom: 0</li>
</ul>

By default dialog on mobile devices should take full height and width of the screen.
This behaviour can be changed using <code>.fd-dialog__content--no-mobile-stretch</code> class, which will add additional spacing around dialog.
<ul>
    <li><code>.fd-dialog__content--mobile</code>: dialog takes full height and width</li>
    <li><code>.fd-dialog__content--no-mobile-stretch</code>: margin: 6% 10%</li>
</ul>
Please remember that on mobile devices Bar component should be used with <code>.fd-bar--cosy</code> class.

### Dialog header/body/footer horizontal paddings
{% capture dialog-size %}
    <div class="fd-dialog-docs-static fd-dialog fd-dialog--active">
        <div class="fd-dialog__content fd-dialog__content--s" role="dialog" aria-modal="true" aria-labelledby="dialog-title-2">
            <header class="fd-dialog__header fd-bar fd-bar--header">
                <div class="fd-bar__left">
                    <div class="fd-bar__element">
                        <h3 class="fd-dialog__title" id="dialog-title-2">
                            Small Dialog
                        </h3>
                    </div>
                </div>
            </header>
            <div class="fd-dialog__body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </div>
            <footer class="fd-dialog__footer fd-bar fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-dialog__decisive-button fd-button fd-button--emphasized fd-button--compact">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button class="fd-dialog__decisive-button fd-button fd-button--transparent fd-button--compact">Cancel</button>
                    </div>
                </div>
            </footer>
        </div>
    </div>
    <br />
    <div class="fd-dialog-docs-static fd-dialog fd-dialog--active">
        <div class="fd-dialog__content fd-dialog__content--m" role="dialog" aria-modal="true" aria-labelledby="dialog-title-3">
            <header class="fd-dialog__header fd-bar fd-bar--header">
                <div class="fd-bar__left">
                    <div class="fd-bar__element">
                        <h3 class="fd-dialog__title" id="dialog-title-3">
                            Medium Dialog
                        </h3>
                    </div>
                </div>
            </header>
            <div class="fd-dialog__body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </div>
            <footer class="fd-dialog__footer fd-bar fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-dialog__decisive-button fd-button fd-button--emphasized fd-button--compact">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button class="fd-dialog__decisive-button fd-button fd-button--transparent fd-button--compact">Cancel</button>
                    </div>
                </div>
            </footer>
        </div> 
    </div>
    <br />
    <div class="fd-dialog-docs-static fd-dialog fd-dialog--active">
        <div class="fd-dialog__content fd-dialog__content--l" role="dialog" aria-modal="true" aria-labelledby="dialog-title-4">
            <header class="fd-dialog__header fd-bar fd-bar--header">
                <div class="fd-bar__left">
                    <div class="fd-bar__element">
                        <h3 class="fd-dialog__title" id="dialog-title-4">
                            Large Dialog
                        </h3>
                    </div>
                </div>
            </header>
            <div class="fd-dialog__body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </div>
            <footer class="fd-dialog__footer fd-bar fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-dialog__decisive-button fd-button fd-button--emphasized fd-button--compact">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button class="fd-dialog__decisive-button fd-button fd-button--transparent fd-button--compact">Cancel</button>
                    </div>
                </div>
            </footer>
        </div>
    </div>
    <br />
    <div class="fd-dialog-docs-static fd-dialog fd-dialog--active">
        <div class="fd-dialog__content fd-dialog__content--xl" role="dialog" aria-modal="true" aria-labelledby="dialog-title-5">
            <header class="fd-dialog__header fd-bar fd-bar--header">
                <div class="fd-bar__left">
                    <div class="fd-bar__element">
                        <h3 class="fd-dialog__title" id="dialog-title-5">
                            Extra Large Dialog
                        </h3>
                    </div>
                </div>
            </header>
            <div class="fd-dialog__body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </div>
            <footer class="fd-dialog__footer fd-bar fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-dialog__decisive-button fd-button fd-button--emphasized fd-button--compact">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button class="fd-dialog__decisive-button fd-button fd-button--transparent fd-button--compact">Cancel</button>
                    </div>
                </div>
            </footer>
        </div>
    </div>
{% endcapture %}
{% include display-component.html component=dialog-size %}

## Dialog with resize handle
To open Dialog with resize handle add span element with <code>.fd-dialog__resize-handle</code> class inside <code>.fd-dialog__content</code> container.
Horizontal and vertical resize should be enabled only for <b>desktop</b> devices.
Resizable Dialog should be desktop only feature. 
{% capture dialog-resize %}
    <div class="fd-dialog-docs-static fd-dialog fd-dialog--active">
        <div class="fd-dialog__content fd-dialog__content--s" role="dialog" aria-modal="true" aria-labelledby="dialog-title-6">
            <span class="fd-dialog__resize-handle"></span>
            <header class="fd-dialog__header fd-bar fd-bar--header">
                <div class="fd-bar__left">
                    <div class="fd-bar__element">
                        <h3 class="fd-dialog__title" id="dialog-title-6">
                            Lorem ipsum
                        </h3>
                    </div>
                </div>
            </header>
            <div class="fd-dialog__body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </div>
            <footer class="fd-dialog__footer fd-bar fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-dialog__decisive-button fd-button fd-button--emphasized fd-button--compact">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button class="fd-dialog__decisive-button fd-button fd-button--transparent fd-button--compact">Cancel</button>
                    </div>
                </div>
            </footer>
        </div>
    </div>
{% endcapture %}
{% include display-component.html component=dialog-resize %}

## Dialog draggable mode
Dialog can be opened in draggable mode, enabling drag dialog over browser view-port area (only for <b>desktop</b>).
Draggable mode can be visualized using following classes:
<ul>
    <li><code>.fd-dialog__content--draggable-grab</code>: element can be dragged</li>
    <li><code>.fd-dialog__content--draggable-grabbing</code>: element is being dragged</li>
</ul>
{% capture dialog-drag %}
    <div class="fd-dialog-docs-static fd-dialog fd-dialog--active">
        <div class="fd-dialog__content fd-dialog__content--draggable-grab fd-dialog__content--s" role="dialog" aria-modal="true" aria-labelledby="dialog-title-7">
            <header class="fd-dialog__header fd-bar fd-bar--header">
                <div class="fd-bar__left">
                    <div class="fd-bar__element">
                        <h3 class="fd-dialog__title" id="dialog-title-7">
                            Lorem ipsum
                        </h3>
                    </div>
                </div>
            </header>
            <div class="fd-dialog__body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </div>
            <footer class="fd-dialog__footer fd-bar fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-dialog__decisive-button fd-button fd-button--emphasized fd-button--compact">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button class="fd-dialog__decisive-button fd-button fd-button--transparent fd-button--compact">Cancel</button>
                    </div>
                </div>
            </footer>
        </div>
    </div>
{% endcapture %}
{% include display-component.html component=dialog-drag %}

## Examples
## Select Dialog
{% capture dialog-select %}
    <button class="fd-button" onclick="toggleDialog('select-dialog-example', true)">Open example</button>
    <div class="fd-dialog" id="select-dialog-example">
        <div class="fd-dialog__content" role="dialog" aria-modal="true" aria-labelledby="dialog-title-8">
            <header class="fd-dialog__header fd-bar fd-bar--header-with-subheader">
                <div class="fd-bar__left">
                    <div class="fd-bar__element">
                        <h3 class="fd-dialog__title" id="dialog-title-8">
                            Select Dialog
                        </h3>
                    </div>
                </div>
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--transparent fd-button--compact">Clear</button>
                    </div>
                </div>
            </header>
            <div class="fd-dialog__subheader fd-bar fd-bar--subheader">
                <div class="fd-bar__middle">
                    <div class="fd-input-group">
                        <input class="fd-input fd-input-group__input fd-input--compact" type="text" placeholder="Search...">
                        <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--compact">
                            <button class="fd-button fd-input-group__button fd-button--icon fd-button--transparent fd-button--compact sap-icon--search"></button>
                        </span>
                    </div>
                </div>
            </div>
            <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
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
            <footer class="fd-dialog__footer fd-bar fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-dialog__decisive-button fd-button fd-button--emphasized fd-button--compact">Select</button>
                    </div>
                    <div class="fd-bar__element">
                        <button class="fd-dialog__decisive-button fd-button fd-button--transparent fd-button--compact" onclick="toggleDialog('select-dialog-example', false)">Cancel</button>
                    </div>
                </div>
            </footer>
        </div>
    </div>
{% endcapture %}

{% include display-component.html component=dialog-select %}

## Loading Dialog
{% capture dialog-loading %}
    <button class="fd-button" onclick="toggleDialog('loading-dialog-example', true)">Open example</button>
    <div class="fd-dialog" id="loading-dialog-example">
        <div class="fd-dialog__content fd-dialog__content--s" role="dialog" aria-modal="true" aria-labelledby="dialog-title-9">
            <header class="fd-dialog__header fd-bar fd-bar--header">
                <div class="fd-bar__left">
                    <div class="fd-bar__element">
                        <h1 class="fd-dialog__title" id="dialog-title-9">
                            Loading Data...
                        </h1>
                    </div>
                </div>
            </header>
            <div class="fd-dialog__body">
                <strong>Status:</strong> Connecting 127.0.0.1
                <div class="fd-dialog__loader fd-busy-indicator--l" aria-hidden="false" aria-label="Loading">
                    <div class="fd-busy-indicator--circle-0"></div>
                    <div class="fd-busy-indicator--circle-1"></div>
                    <div class="fd-busy-indicator--circle-2"></div>
                </div>
            </div>
            <footer class="fd-dialog__footer fd-bar fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-dialog__decisive-button fd-button fd-button--transparent fd-button--compact" onclick="toggleDialog('loading-dialog-example', false)">Cancel</button>
                    </div>
                </div>
            </footer>
        </div>
    </div>
{% endcapture %}
{% include display-component.html component=dialog-loading %}
