---
component: fd-message-box-docs-static
title: Components/Message Box
category: Components
selector: fd-message-box-docs-static
cssFile: message-box-docs-static.css
sourcePath: packages/styles/stories/Components/message-box/message-box.stories.js
tags: []
dependencies: ["bar","button","icon","link","message-box","title"]
relatedComponents: ["bar","button","icon","link","message-box","title"]
stability: stable
---

# Components/Message Box

The message box displays a dialog with a simple message to the user. Contrary to the **Popover**, message box can relay messages unrelated to the UI, such as technical errors. This component inherits the look and behavior of the **Dialog** (excluding dragging/resizing).

Note: Include two action buttons in the message box when the user's decision is required before continuing. The primary action button should always explicitly display the action they're performing (in text), while the secondary buttons provides them with an option to cancel.

**The messages can be displayed with semantic colors and icons to indicate:**

- Error
- Warning
- Success
- Information
- Confirmation


##Usage

**Use the message box if:**

- You want to display non-field-related messages.
- You want to interrupt the user while he or she performs an action.
- You want to display error, warning, success, confirmation, or information messages.
- You need to interrupt the user for some other reason.
- You need the user to acknowledge the message.
- You need the user to make a decision.


**Do not use the message box if:**

- You want to display a short success message. Instead, use **Message Toast**.
- You can show the message directly in a form field.


##Structure
**Message box follows the structure of a dialog, consisting of following elements:**

- \

## Usage Guidelines

**Use the message box if:**

- You want to display non-field-related messages.
- You want to interrupt the user while he or she performs an action.
- You want to display error, warning, success, confirmation, or information messages.
- You need to interrupt the user for some other reason.
- You need the user to acknowledge the message.
- You need the user to make a decision.

## When Not To Use

- You want to display a short success message. Instead, use **Message Toast**.
- You can show the message directly in a form field.

## Dependencies

This component depends on the following CSS files:

- `bar.css`
- `button.css`
- `icon.css`
- `link.css`
- `message-box.css`
- `title.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/message-box-docs-static.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/bar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/link.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/message-box.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/title.css" rel="stylesheet">
```

## Basic Usage

```html
<div
    class="fd-message-box-docs-static fd-message-box fd-message-box--active"
    role="alertdialog"
    aria-modal="true"
    aria-labelledby="fd-message-box-title-1"
    aria-describedby="fd-message-box-text-1"
    tabindex="-1">
    <div class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h1 class="fd-title fd-title--h5" id="fd-message-box-title-1">Title</h1>
                </div>
            </div>
        </header>

        <section class="fd-message-box__body" id="fd-message-box-text-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </section>

        <footer class="fd-bar fd-bar--footer fd-message-box__footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-message-box__decisive-button">
                        Begin button
                    </button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent fd-message-box__decisive-button">
                        End button
                    </button>
                </div>
            </div>
        </footer>
    </div>
```

## Component Structure

**Message box follows the structure of a dialog, consisting of following elements:**

- \

## Related Components

This component works with or depends on:

- `bar`
- `button`
- `icon`
- `link`
- `message-box`
- `title`

## Examples

### Default

The default message box displays a small dialog with a title, message text and action buttons. Use the default if the message does not fit with one of the semantic types.

```html
<div
    class="fd-message-box-docs-static fd-message-box fd-message-box--active"
    role="alertdialog"
    aria-modal="true"
    aria-labelledby="fd-message-box-title-1"
    aria-describedby="fd-message-box-text-1"
    tabindex="-1">
    <div class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h1 class="fd-title fd-title--h5" id="fd-message-box-title-1">Title</h1>
                </div>
            </div>
        </header>

        <section class="fd-message-box__body" id="fd-message-box-text-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </section>

        <footer class="fd-bar fd-bar--footer fd-message-box__footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-message-box__decisive-button">
                        Begin button
                    </button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent fd-message-box__decisive-button">
                        End button
                    </button>
                </div>
            </div>
        </footer>
    </div>
```

### Semantic types

The message box can be displayed with various semantic colors and icons, indicating the type of message being relayed.

|Semantic type | Modifier class | Description
:------------------ | :------------------- | :---------------
Confirmation | \

```html
<div
    class="fd-message-box-docs-static fd-message-box fd-message-box--confirmation fd-message-box--active"
    role="alertdialog"
    aria-modal="true"
    aria-labelledby="fd-message-box-title-2"
    aria-describedby="fd-message-box-text-2"
    tabindex="-1">
    <div class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <i class="sap-icon--sys-help-2" role="presentation" aria-hidden="true"></i>
                    <h1 class="fd-title fd-title--h5" id="fd-message-box-title-2">Confirmation</h1>
                </div>
            </div>
        </header>

        <section class="fd-message-box__body" id="fd-message-box-text-2">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </section>

        <footer class="fd-bar fd-bar--footer fd-message-box__footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-message-box__decisive-button">
                        OK
                    </button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent fd-message-box__decisive-button">
                        Cancel
                    </button>
                </div>
            </div>
        </footer>
    </div>

    <div
        class="fd-message-box-docs-static fd-message-box fd-message-box--error fd-message-box--active" role="alertdialog"
        aria-modal="true"
        aria-labelledby="fd-message-box-title-3"
        aria-describedby="fd-message-box-text-3"
        tabindex="-1">
        <div class="fd-message-box__content">
            <header class="fd-bar fd-bar--header fd-message-box__header">
                <div class="fd-bar__left">
                    <div class="fd-bar__element">
                        <i class="sap-icon--error" role="presentation" aria-hidden="true"></i>
                        <h1 class="fd-title fd-title--h5" id="fd-message-box-title-3">Error</h1>
                    </div>
                </div>
            </header>

            <section class="fd-message-box__body" id="fd-message-box-text-3">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </section>

            <footer class="fd-bar fd-bar--footer fd-message-box__footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--emphasized fd-message-box__decisive-button">
                            Close
                        </button>
                    </div>
                </div>
            </footer>
        </div>

        <div
            class="fd-message-box-docs-static fd-message-box fd-message-box--success fd-message-box--active"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="fd-message-box-title-4"
            aria-describedby="fd-message-box-text-4"
            tabindex="-1">
            <div class="fd-message-box__content">
                <header class="fd-bar fd-bar--header fd-message-box__header">
                    <div class="fd-bar__left">
                        <div class="fd-bar__element">
                            <i class="sap-icon--sys-enter-2" role="presentation" aria-hidden="true"></i>
                            <h1 class="fd-title fd-title--h5" id="fd-message-box-title-4">Success</h1>
                        </div>
                    </div>
                </header>

                <section class="fd-message-box__body" id="fd-message-box-text-4">
                    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et mattis erat vel aliquet in sem urna et sagittis diam in vehicula.
                </section>

                <footer class="fd-bar fd-bar--footer fd-message-box__footer">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--emphasized fd-message-box__decisive-button">
                                Close
                            </button>
                        </div>
                    </div>
                </footer>
            </div>

            <div
                class="fd-message-box-docs-static fd-message-box fd-message-box--warning fd-message-box--active"
                role="alertdialog"
                aria-modal="true"
                aria-labelledby="fd-message-box-title-5"
                aria-describedby="fd-message-box-text-5"
                tabindex="-1">
                <div class="fd-message-box__content">
                    <header class="fd-bar fd-bar--header fd-message-box__header">
                        <div class="fd-bar__left">
                            <div class="fd-bar__element">
                                <i class="sap-icon--alert" role="presentation" aria-hidden="true"></i>
                                <h1 class="fd-title fd-title--h5" id="fd-message-box-title-5">Warning</h1>
                            </div>
                        </div>
                    </header>

                    <section class="fd-message-box__body" id="fd-message-box-text-5">
                        Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
                    </section>

                    <footer class="fd-bar fd-bar--footer fd-message-box__footer">
                        <div class="fd-bar__right">
                            <div class="fd-bar__element">
                                <button class="fd-button fd-button--emphasized fd-message-box__decisive-button">
                                    Close
                                </button>
                            </div>
                        </div>
                    </footer>
                </div>

                <div
                    class="fd-message-box-docs-static fd-message-box fd-message-box--information fd-message-box--active"
                    role="alertdialog"
                    aria-modal="true"
                    aria-labelledby="fd-message-box-title-6"
                    aria-describedby="fd-message-box-text-6"
                    tabindex="-1">
                    <div class="fd-message-box__content">
                        <header class="fd-bar fd-bar--header fd-message-box__header">
                            <div class="fd-bar__left">
                                <div class="fd-bar__element">
                                    <i class="sap-icon--information" role="presentation" aria-hidden="true"></i>
                                    <h1 class="fd-title fd-title--h5" id="fd-message-box-title-6">Information</h1>
                                </div>
                            </div>
                        </header>

                        <section class="fd-message-box__body" id="fd-message-box-text-6">
                            Vivamus sagittis diam in vehicula lobortis.
                        </section>

                        <footer class="fd-bar fd-bar--footer fd-message-box__footer">
                            <div class="fd-bar__right">
                                <div class="fd-bar__element">
                                    <button class="fd-button fd-button--emphasized fd-message-box__decisive-button">
                                        Close
                                    </button>
                                </div>
                            </div>
                        </footer>
                    </div>
```

### Responsive

The message box has 1rem padding all around the body, and the header and footer both inherit their padding from the **Bar** component. Responsive horizontal padding can be applied to the header, body and footer of the message box; however, the amount depends on the screen width.

**To display responsive padding, add the following modifier classes to the content container:**

|Modifier class | rem | Screen width
------------------ | ---- | ---------------------
\

```html
<div
    class="fd-message-box-docs-static fd-message-box fd-message-box--information fd-message-box--active"
    role="alertdialog"
    aria-modal="true"
    aria-labelledby="fd-message-box-title-7"
    aria-describedby="fd-message-box-text-7"
    tabindex="-1">
    <div class="fd-message-box__content fd-message-box__content--s">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h1 class="fd-title fd-title--h5" id="fd-message-box-title-7">Information</h1>
                </div>
            </div>
        </header>

        <section class="fd-message-box__body" id="fd-message-box-text-7">
            Informative message box for a small screen in cozy mode (mobile) and a "Show more" link in the body.
            <div class="fd-message-box__more">
                <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">Show more</span></a>
            </div>
        </section>

        <footer class="fd-bar fd-bar--footer fd-message-box__footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-message-box__decisive-button">
                        Close
                    </button>
                </div>
            </div>
        </footer>
    </div>

    <div
        class="fd-message-box-docs-static fd-message-box fd-message-box--error fd-message-box--active"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="fd-message-box-title-8"
        aria-describedby="fd-message-box-text-8"
        tabindex="-1">
        <div class="fd-message-box__content fd-message-box__content--m">
            <header class="fd-bar fd-bar--header fd-message-box__header">
                <div class="fd-bar__left">
                    <div class="fd-bar__element">
                        <h1 class="fd-title fd-title--h5" id="fd-message-box-title-8">Error</h1>
                    </div>
                </div>
            </header>

            <section class="fd-message-box__body" id="fd-message-box-text-8">
                Error message box for a medium-sized screen in cozy mode (mobile).
            </section>

            <footer class="fd-bar fd-bar--footer fd-message-box__footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--emphasized fd-message-box__decisive-button">
                            Close
                        </button>
                    </div>
                </div>
            </footer>
        </div>

        <div
            class="fd-message-box-docs-static fd-message-box fd-message-box--success fd-message-box--active"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="fd-message-box-title-9"
            aria-describedby="fd-message-box-text-9"
            tabindex="-1">
            <div class="fd-message-box__content fd-message-box__content--l">
                <header class="fd-bar fd-bar--header fd-message-box__header">
                    <div class="fd-bar__left">
                        <div class="fd-bar__element">
                            <h1 class="fd-title fd-title--h5" id="fd-message-box-title-9">Success</h1>
                        </div>
                    </div>
                </header>

                <section class="fd-message-box__body" id="fd-message-box-text-9">
                    Success message box for a large screen in compact mode (desktop).
                </section>

                <footer class="fd-bar fd-bar--footer fd-message-box__footer">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--emphasized fd-message-box__decisive-button">
                                Close
                            </button>
                        </div>
                    </div>
                </footer>
            </div>

            <div
                class="fd-message-box-docs-static fd-message-box fd-message-box--warning fd-message-box--active"
                role="alertdialog"
                aria-modal="true"
                aria-labelledby="fd-message-box-title-10"
                aria-describedby="fd-message-box-text-10"
                tabindex="-1">
                <div class="fd-message-box__content fd-message-box__content--xl">
                    <header class="fd-bar fd-bar--header fd-message-box__header">
                        <div class="fd-bar__left">
                            <div class="fd-bar__element">
                                <h1 class="fd-title fd-title--h5" id="fd-message-box-title-10">Warning</h1>
                            </div>
                        </div>
                    </header>

                    <section class="fd-message-box__body" id="fd-message-box-text-10">
                        Warning message box for an extra large screen in compact mode (desktop).
                    </section>

                    <footer class="fd-bar fd-bar--footer fd-message-box__footer">
                        <div class="fd-bar__right">
                            <div class="fd-bar__element">
                                <button class="fd-button fd-button--emphasized fd-message-box__decisive-button">
                                    Close
                                </button>
                            </div>
                        </div>
                    </footer>
                </div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/message-box/message-box.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
