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

The modal is a container generally displayed in response to an action.
{: .docs-intro}
It is used for short forms, confirmation messages or to display contextual information that does not require a page.

> {{ site.data.strings.headerDisclaimer }}

## Modal structure
Modal consists of following elements:
<table class="docs-table">
    <tbody>
        <tr>
            <td>Modal</td>
            <td><code style="white-space:nowrap;">.fd-modal</code></td>
            <td>Wraps modal and displays it with <code style="white-space:nowrap;">position: fixed</code>. By default modal is hidden by <code style="white-space:nowrap;">display: none</code>. Modal can be made visible by applying <code style="white-space:nowrap;">.fd-modal--active</code> class.</td>
        </tr>
        <tr>
            <td>Dialog</td>
            <td><code style="white-space:nowrap;">.fd-modal__content</code></td>
            <td>Element representing modals dialog window.</td>
        </tr>
        <tr>
            <td>Header</td>
            <td><code style="white-space:nowrap;">.fd-modal__header</code></td>
            <td>Header placed at the top of the component includes title of the modal styled with <code style="white-space:nowrap;">.fd-modal__title</code>
                and a button styled with <code style="white-space:nowrap;">.fd-modal__close</code> used for closing the modal.</td>
        </tr>
        <tr>
            <td>Body</td>
            <td><code style="white-space:nowrap;">.fd-modal__body</code></td>
            <td>Main container holding modals content</td>
        </tr>
        <tr>
            <td>Footer</td>
            <td><code style="white-space:nowrap;">.fd-modal__footer</code></td>
            <td>Footer placed at the bottom of the component. Contains modals buttons.</td>
        </tr>
    </tbody>
</table>

{% capture modal-anatomy %}
    <div class="fd-modal fd-modal--active" style="position: static">
        <div class="fd-modal__content">
            <header class="fd-modal__header">
                <h3 class="fd-modal__title">Modal title</h3>
                <button class="fd-button--light fd-modal__close sap-icon--decline sap-icon--l" aria-label="close"></button>
            </header>
            <div class="fd-modal__body">
                Modal body
            </div>
            <footer class="fd-modal__footer">
                Modal footer
            </footer>
        </div>
    </div>
{% endcapture %}

{% include display-component.html component=modal-anatomy %}


## Modal size modifiers
Modifying header/footer horizontal paddings (default 1rem):
<ul>
    <li><code>.fd-modal__content--s</code>: 1rem</li>
    <li><code>.fd-modal__content--m</code>, <code>.fd-modal__content--l</code>: 2rem</li>
    <li><code>.fd-modal__content--xl</code>, <code>.fd-modal__content--xxl</code>: 3rem</li>
</ul>

Compact mode - modifying header/footer height (default 2.75rem):
<ul>
    <li><code>.fd-modal__content--compact</code>: 2.5rem</li>
</ul>


### Modal header/footer horizontal paddings
{% capture modal-size %}
    <div class="fd-modal fd-modal--active" style="position: static">
        <div class="fd-modal__content fd-modal__content--s">
            <header class="fd-modal__header">
                <h3 class="fd-modal__title">Lorem ipsum</h3>
                <button class="fd-button--light fd-modal__close sap-icon--decline sap-icon--l" aria-label="close"></button>
            </header>
            <div class="fd-modal__body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </div>
            <footer class="fd-modal__footer">
                <button class="fd-button">Yes</button>
                <button class="fd-button--light">No</button>
            </footer>
        </div>
    </div>
    
    <div class="fd-modal fd-modal--active" style="position: static">
            <div class="fd-modal__content fd-modal__content--m">
                <header class="fd-modal__header">
                    <h3 class="fd-modal__title">Lorem ipsum</h3>
                    <button class="fd-button--light fd-modal__close sap-icon--decline sap-icon--l" aria-label="close"></button>
                </header>
                <div class="fd-modal__body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </div>
                <footer class="fd-modal__footer">
                    <button class="fd-button">Yes</button>
                    <button class="fd-button--light">No</button>
                </footer>
            </div>
    </div>
    
    <div class="fd-modal fd-modal--active" style="position: static">
            <div class="fd-modal__content fd-modal__content--xl">
                <header class="fd-modal__header">
                    <h3 class="fd-modal__title">Lorem ipsum</h3>
                    <button class="fd-button--light fd-modal__close sap-icon--decline sap-icon--l" aria-label="close"></button>
                </header>
                <div class="fd-modal__body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </div>
                <footer class="fd-modal__footer">
                    <button class="fd-button">Yes</button>
                    <button class="fd-button--light">No</button>
                </footer>
            </div>
    </div>
        
{% endcapture %}
{% include display-component.html component=modal-size %}

### Modal compact
{% capture modal-size-compact %}
    <div class="fd-modal fd-modal--active" style="position: static">
        <div class="fd-modal__content fd-modal__content--compact">
            <header class="fd-modal__header">
                <h3 class="fd-modal__title">Lorem ipsum</h3>
                <button class="fd-button--light fd-modal__close sap-icon--decline sap-icon--l" aria-label="close"></button>
            </header>
            <div class="fd-modal__body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </div>
            <footer class="fd-modal__footer">
                <button class="fd-button">Yes</button>
                <button class="fd-button--light">No</button>
            </footer>
        </div>
    </div>
{% endcapture %}
{% include display-component.html component=modal-size-compact %}

## Modal resizable mode
Modal can be opened in resizable mode, enabling to horizontally and vertically resize modals dialog (only for <b>desktop</b>).

{% capture modal-resize %}
    <div class="fd-modal fd-modal--active" style="position: static">
        <div class="fd-modal__content fd-modal__content--resizable">
            <header class="fd-modal__header">
                <h3 class="fd-modal__title">Lorem ipsum</h3>
                <button class="fd-button--light fd-modal__close sap-icon--decline sap-icon--l" aria-label="close"></button>
            </header>
            <div class="fd-modal__body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <footer class="fd-modal__footer">
                <button class="fd-button">Yes</button>
                <button class="fd-button--light">No</button>
            </footer>
        </div>
    </div>
{% endcapture %}
{% include display-component.html component=modal-resize %}



## Examples
## Informational Modal
This is used to present information to the user but the Alert Component doesn’t fit all the information.

{% capture modal-information %}
    <div class="fd-modal fd-modal--active" style="position: static">
        <div class="fd-modal__content" role="document">
            <header class="fd-modal__header">
                <h3 class="fd-modal__title">Product Added</h3>
                <button class="fd-button--light fd-modal__close sap-icon--decline sap-icon--l" aria-label="close"></button>
            </header>
            <div class="fd-modal__body">
                <b>Thew new product have been added to your catalog.</b><br/>
                <br/>
                Automatic Product ID: <b>PD-3465334</b><br/>
                <br/>
                Expiration date: <b>13/03/2018</b><br/>
            </div>
        </div>
    </div>
{% endcapture %}

{% include display-component.html component=modal-information %}

## Confirmation Modal
This is used to confirm with the user before continuing with a destructive or complex action. In this case, the modal has action buttons at the bottom.

{% capture modal-confirmation %}
    <div class="fd-modal fd-modal--active" style="position: static">
        <div class="fd-modal__content" role="document">
            <header class="fd-modal__header">
            <h3 class="fd-modal__title">Delete</h3>
                <button class="fd-button--light fd-modal__close sap-icon--decline sap-icon--l" aria-label="close"></button>
            </header>
            <div class="fd-modal__body">
                Do you want to delete item <b>X</b>?
            </div>
            <footer class="fd-modal__footer">
                <button class="fd-button">Yes</button>
                <button class="fd-button--light">No</button>
            </footer>
        </div>
    </div>
{% endcapture %}
{% include display-component.html component=modal-confirmation %}

## Form Modal
This is used for short forms in order to collect information from the user.

{% capture modal-form %}
    <div class="fd-modal fd-modal--active" style="position: static">
        <div class="fd-modal__content" role="document">
            <header class="fd-modal__header">
            <h3 class="fd-modal__title">Invite user</h3>
                <button class="fd-button--light fd-modal__close sap-icon--decline sap-icon--l" aria-label="close"></button>
            </header>
            <div class="fd-modal__body">
                <div class="fd-form-item">
                    <label class="fd-form-label" aria-required="true" for="input-2">Email</label>
                    <input class="fd-input" type="text" id="input-2">
                </div>            
            </div>
            <footer class="fd-modal__footer">
                <button class="fd-button">Invite</button>
                <button class="fd-button--light">Cancel</button>
            </footer>
        </div>
    </div>
{% endcapture %}

{% include display-component.html component=modal-form %}
