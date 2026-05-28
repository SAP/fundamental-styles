---
component: fd-message-strip
title: Components/Message Strip
category: Components
selector: fd-message-strip
cssFile: message-strip.css
sourcePath: packages/styles/stories/Components/message-strip/message-strip.stories.js
tags: []
dependencies: ["button","icon","link","message-strip"]
relatedComponents: ["button","icon","link","message-strip"]
stability: stable
generatedAt: 2026-06-01T19:23:59.998Z
---

# Components/Message Strip

Message Strip is a component that enables the embedding of application-related messages in the application. They are useed to draw the user’s attention to information that is important in the context of the page content. This could be a warning or a change of state, that would be easy to miss it.

##Usage
**Use the message strip if:**

- You want to provide information within the detail area of an object.
- You want to inform your user about a status of an object.
- You want to warn your user about an issue.

**Do not use the message strip if:**

- You want to display information within the object page header, a control, in the master list, or above the page header.

##Anatomy
- <b>Container </b>- holds the icon, text and Close button.
- <b>Icon (optional) </b>- graphic element within the component. Use the modifier class \

## Usage Guidelines

**Use the message strip if:**

- You want to provide information within the detail area of an object.
- You want to inform your user about a status of an object.
- You want to warn your user about an issue.

## When Not To Use

- You want to display information within the object page header, a control, in the master list, or above the page header.

## Dependencies

This component depends on the following CSS files:

- `button.css`
- `icon.css`
- `link.css`
- `message-strip.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/message-strip.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/link.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/message-strip.css" rel="stylesheet">
```

## Basic Usage

```html
<div
    class="fd-message-strip fd-message-strip--no-icon"
    role="note"
    aria-labelledby="message-strip-hidden-text-1 message-strip-text-1">
    <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-1">Information Bar</span>
    <p class="fd-message-strip__text" id="message-strip-text-1">
        This is a message.
    </p>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-message-strip--dismissible` | To display message strip without an icon, add the `fd-message-strip--no-icon` modifier class to the main element |
| `fd-message-strip--error` | To display the error message strip, add the \ |
| `fd-message-strip--indication-color-` | Style variant |
| `fd-message-strip--information` | To display an information message strip, add the `fd-message-strip--information` modifier class to the main element. |
| `fd-message-strip--link` | The Link inside Message Strip has additional styling |
| `fd-message-strip--no-icon` | To display message strip without an icon, add the `fd-message-strip--no-icon` modifier class to the main element |
| `fd-message-strip--success` | To display a success message strip, add the `fd-message-strip--success` modifier class to the main element. |
| `fd-message-strip--warning` | To display a warning message strip, add the \ |

## States

| Class | Description |
|-------|-------------|
| `is-compact` | Compact state |

## BEM Elements

This component uses the following BEM elements:

- `fd-message-strip__close`
- `fd-message-strip__icon-container`
- `fd-message-strip__sr-only`
- `fd-message-strip__text`

## Related Components

This component works with or depends on:

- `button`
- `icon`
- `link`
- `message-strip`

## Design Tokens

Key CSS variables used by this component:

- `--dismissible`
- `--error`
- `--fdButtonBackgroundColor`
- `--fdButtonBorderColor`
- `--fdButtonColor`
- `--fdMessageStrip_Background_Color`
- `--fdMessageStrip_Border_Color`
- `--fdMessageStrip_Border_Color_Error`
- `--fdMessageStrip_Border_Color_Informative`
- `--fdMessageStrip_Border_Color_Neutral`
- `--fdMessageStrip_Border_Color_Success`
- `--fdMessageStrip_Border_Color_Warning`
- `--fdMessageStrip_Icon_Color`
- `--fdMessageStrip_Icon_Color_Error`
- `--fdMessageStrip_Icon_Color_Information`

*...and 5 more*

## Examples

### Default

The default message strip can be used for general messages that don’t fit into any of the semantic type use cases.

```html
<div
    class="fd-message-strip fd-message-strip--no-icon"
    role="note"
    aria-labelledby="message-strip-hidden-text-1 message-strip-text-1">
    <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-1">Information Bar</span>
    <p class="fd-message-strip__text" id="message-strip-text-1">
        This is a message.
    </p>
```

### Information

To display an information message strip, add the `fd-message-strip--information` modifier class to the main element.

```html
<div
    role="note"
    aria-labelledby="message-strip-hidden-text-2 message-strip-text-2"
    class="fd-message-strip fd-message-strip--information fd-message-strip--dismissible">
    <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-2">Information Bar Closable</span>

    <div class="fd-message-strip__icon-container" aria-hidden="true">
        <span class="sap-icon sap-icon--message-information" role="presentation" aria-hidden="true"></span>
    </div>

    <p class="fd-message-strip__text" id="message-strip-text-2">
        Information Message Strip
    </p>

    <button
        role="button"
        class="fd-button fd-button--transparent is-compact fd-message-strip__close"
        aria-label="Information Bar Close"
        title="Information Bar Close">
        <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
    </button>
```

### Success

To display a success message strip, add the `fd-message-strip--success` modifier class to the main element.

```html
<div
    role="note"
    aria-labelledby="message-strip-hidden-text-3 message-strip-text-3"
    class="fd-message-strip fd-message-strip--success fd-message-strip--dismissible">
    <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-3">Success Information Bar Closable</span>

    <div class="fd-message-strip__icon-container" aria-hidden="true">
        <span class="sap-icon sap-icon--message-success" role="presentation" aria-hidden="true"></span>
    </div>

    <p class="fd-message-strip__text" id="message-strip-text-3">
        Success Message Strip
    </p>

    <button
        role="button"
        class="fd-button fd-button--transparent is-compact fd-message-strip__close"
        aria-label="Success Information Bar Close"
        title="Success Information Bar Close">
        <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
    </button>
```

### Warning

To display a warning message strip, add the \

```html
<div
    role="note"
    aria-labelledby="message-strip-hidden-text-4 message-strip-text-4"
    class="fd-message-strip fd-message-strip--warning fd-message-strip--dismissible">
    <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-4">Warning Information Bar Closable</span>

    <div class="fd-message-strip__icon-container" aria-hidden="true">
        <span class="sap-icon sap-icon--message-warning" role="presentation" aria-hidden="true"></span>
    </div>

    <p class="fd-message-strip__text" id="message-strip-text-4">
        Warning Message Strip
    </p>

    <button
        role="button"
        class="fd-button fd-button--transparent is-compact fd-message-strip__close"
        aria-label="Warning Information Bar Close"
        title="Warning Information Bar Close">
        <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
    </button>
```

### Error

To display the error message strip, add the \

```html
<div
    role="note"
    aria-labelledby="message-strip-hidden-text-5 message-strip-text-5"
    class="fd-message-strip fd-message-strip--error fd-message-strip--dismissible">
    <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-5">Error Information Bar Closable</span>

    <div class="fd-message-strip__icon-container" aria-hidden="true">
        <span class="sap-icon sap-icon--message-error" role="presentation" aria-hidden="true"></span>
    </div>

    <p class="fd-message-strip__text" id="message-strip-text-5">
        Error Message Strip
    </p>

    <button
        role="button"
        class="fd-button fd-button--transparent is-compact fd-message-strip__close"
        aria-label="Error Information Bar Close"
        title="Error Information Bar Close">
        <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
    </button>
```

### No icon

To display message strip without an icon, add the `fd-message-strip--no-icon` modifier class to the main element. Add the `fd-message-strip--dismissible` modifier class if the element is dismissible.

```html
<div
    role="note"
    aria-labelledby="message-strip-hidden-text-6 message-strip-text-6"
    class="fd-message-strip fd-message-strip--information fd-message-strip--dismissible fd-message-strip--no-icon" >
    <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-6">Information Bar Closable</span>

    <p class="fd-message-strip__text" id="message-strip-text-6">
        Information Message Strip
    </p>

    <button
        role="button"
        class="fd-button fd-button--transparent is-compact fd-message-strip__close"
        aria-label="Information Bar Close"
        title="Information Bar Close">
        <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
    </button>

    <div
        role="note"
        aria-labelledby="message-strip-hidden-text-7 message-strip-text-7"
        class="fd-message-strip fd-message-strip--success fd-message-strip--dismissible fd-message-strip--no-icon">
        <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-7">Success Information Bar Closable</span>

        <p class="fd-message-strip__text" id="message-strip-text-7">
            Success Message Strip
        </p>

        <button
            role="button"
            class="fd-button fd-button--transparent is-compact fd-message-strip__close"
            aria-label="Success Information Bar Close"
            title="Success Information Bar Close">
            <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
        </button>

        <div
            role="note"
            aria-labelledby="message-strip-hidden-text-8 message-strip-text-8"
            class="fd-message-strip fd-message-strip--warning fd-message-strip--dismissible fd-message-strip--no-icon">
            <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-8">Warning Information Bar Closable</span>

            <p class="fd-message-strip__text" id="message-strip-text-8">
                Warning Message Strip
            </p>

            <button
                role="button"
                class="fd-button fd-button--transparent is-compact fd-message-strip__close"
                aria-label="Warning Information Bar Close"
                title="Warning Information Bar Close">
                <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
            </button>

            <div
                role="note"
                aria-labelledby="message-strip-hidden-text-9 message-strip-text-9"
                class="fd-message-strip fd-message-strip--error fd-message-strip--dismissible fd-message-strip--no-icon">
                <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-9">Error Information Bar Closable</span>

                <p class="fd-message-strip__text" id="message-strip-text-9">
                    Error Message Strip
                </p>

                <button
                    role="button"
                    class="fd-button fd-button--transparent is-compact fd-message-strip__close"
                    aria-label="Error Information Bar Close"
                    title="Error Information Bar Close">
                    <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
                </button>
```

### No icon and no dismiss button

To display message strip without an icon, add the `fd-message-strip--no-icon` modifier class to the main element.

```html
<div
    role="note"
    aria-labelledby="message-strip-hidden-text-10 message-strip-text-10"
    class="fd-message-strip fd-message-strip--information fd-message-strip--no-icon" >
    <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-10">Information Bar</span>
    <p class="fd-message-strip__text" id="message-strip-text-10">
        Information Message Strip
    </p>

    <div
        role="note"
        aria-labelledby="message-strip-hidden-text-11 message-strip-text-11"
        class="fd-message-strip fd-message-strip--success fd-message-strip--no-icon">
        <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-11">Success Information Bar</span>
        <p class="fd-message-strip__text" id="message-strip-text-11">
            Success Message Strip
        </p>

        <div
            role="note"
            aria-labelledby="message-strip-hidden-text-12 message-strip-text-12"
            class="fd-message-strip fd-message-strip--warning fd-message-strip--no-icon">
            <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-12">Warning Information Bar</span>
            <p class="fd-message-strip__text" id="message-strip-text-12">
                Warning Message Strip
            </p>

            <div
                role="note"
                aria-labelledby="message-strip-hidden-text-13 message-strip-text-13"
                class="fd-message-strip fd-message-strip--error fd-message-strip--no-icon">
                <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-13">Error Information Bar</span>
                <p class="fd-message-strip__text" id="message-strip-text-13">
                    Error Message Strip
                </p>
```

### Text with link

The Link inside Message Strip has additional styling. Add the <code>fd-message-strip--link</code> modifier class if the message contains a link element. <br>
The MessageStrip can include multiple links—not just one. This allows applications to provide additional context or actions related to the message, such as links to:
<ul>
  <li>Other apps where the issue originated</li>
  <li>Apps where the issue can be resolved</li>
  <li>Related objects or specific sections</li>
  <li>Help documentation</li>
</ul>

```html
<div
    role="note"
    aria-labelledby="message-strip-hidden-text-14 message-strip-text-14"
    class="fd-message-strip fd-message-strip--information fd-message-strip--no-icon fd-message-strip--link">
    <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-14">Information Bar</span>
    <p class="fd-message-strip__text" id="message-strip-text-14">
        Information Message Strip
        <a href="#" class="fd-link fd-link--emphasized" tabindex="0"><span class="fd-link__content">Link</span></a>
    </p>

    <div
        role="note"
        aria-labelledby="message-strip-hidden-text-15 message-strip-text-15"
        class="fd-message-strip fd-message-strip--success fd-message-strip--no-icon fd-message-strip--link">
        <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-15">Success Information Bar</span>
        <p class="fd-message-strip__text" id="message-strip-text-15">
            Success Message Strip
            <a href="#" class="fd-link fd-link--emphasized" tabindex="0"><span class="fd-link__content">Link1</span></a>
            <a href="#" class="fd-link fd-link--emphasized" tabindex="0"><span class="fd-link__content">Link2</span></a>
        </p>

        <div
            role="note"
            aria-labelledby="message-strip-hidden-text-16 message-strip-text-16"
            class="fd-message-strip fd-message-strip--error fd-message-strip--dismissible fd-message-strip--link">
            <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-16">Error Information Bar Closable</span>

            <div class="fd-message-strip__icon-container" aria-hidden="true">
                <span class="sap-icon sap-icon--message-error" role="presentation" aria-hidden="true"></span>
            </div>

            <p class="fd-message-strip__text" id="message-strip-text-16">
                Error Message Strip
                <a href="#" class="fd-link fd-link--emphasized" tabindex="0"><span class="fd-link__content">Link1</span></a>
                and
                <a href="#" class="fd-link fd-link--emphasized" tabindex="0"><span class="fd-link__content">Link2</span></a>
            </p>

            <button
                role="button"
                class="fd-button fd-button--transparent is-compact fd-message-strip__close"
                aria-label="Error Information Bar Close"
                title="Error Information Bar Close">
                <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
            </button>
```

### Custom icon

The message strip can be customized by changing the status icon. Check <a href=

```html
<div
    class="fd-message-strip"
    role="note"
    aria-labelledby="message-strip-hidden-text-17 message-strip-text-17">
    <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-17">Information Bar</span>
    <div class="fd-message-strip__icon-container" aria-hidden="true">
        <span class="sap-icon sap-icon--master-task-triangle-2" role="presentation" aria-hidden="true"></span>
    </div>
    <p class="fd-message-strip__text" id="message-strip-text-17">
        Message with a custom icon
    </p>

    <div
        role="note"
        aria-labelledby="message-strip-hidden-text-18 message-strip-text-18"
        class="fd-message-strip fd-message-strip--error fd-message-strip--dismissible">
        <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-18">Error Information Bar Closable</span>

        <div class="fd-message-strip__icon-container" aria-hidden="true">
            <span class="sap-icon sap-icon--not-editable" role="presentation" aria-hidden="true"></span>
        </div>

        <p class="fd-message-strip__text" id="message-strip-text-18">
            Error Message Strip
        </p>

        <button
            role="button"
            class="fd-button fd-button--transparent is-compact fd-message-strip__close"
            aria-label="Error Information Bar Close"
            title="Error Information Bar Close">
            <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
        </button>
```

### Custom Message Strip

If the application needs a custom Message Strip, other than the semantic variations, then the colours from Inverted Object Status/Tag control should be used. Use the modifier classes \

```html
<div
    class="fd-message-strip fd-message-strip--dismissible fd-message-strip--link fd-message-strip--indication-color-1"
    role="note"
    aria-labelledby="message-strip-hidden-text-19 message-strip-text-19">

    <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-19">Custom Information Bar Closable</span>

    <div class="fd-message-strip__icon-container" aria-hidden="true">
        <span class="sap-icon sap-icon--master-task-triangle-2" role="presentation" aria-hidden="true"></span>
    </div>

    <p class="fd-message-strip__text" id="message-strip-text-19">
        Message Strip with indication color 1 (Dark Red)
        <a href="#" class="fd-link fd-link--subtle" tabindex="0"><span class="fd-link__content">Link</span></a>
    </p>

    <button
        role="button"
        class="fd-button fd-button--transparent is-compact fd-message-strip__close"
        aria-label="Custom Information Bar Close"
        title="Custom Information Bar Close">
        <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
    </button>

    <div
        class="fd-message-strip fd-message-strip--dismissible fd-message-strip--link fd-message-strip--indication-color-1b"
        role="note"
        aria-labelledby="message-strip-hidden-text-20 message-strip-text-20">

        <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-20">Custom Information Bar Closable</span>

        <div class="fd-message-strip__icon-container" aria-hidden="true">
            <span class="sap-icon sap-icon--master-task-triangle-2" role="presentation" aria-hidden="true"></span>
        </div>

        <p class="fd-message-strip__text" id="message-strip-text-20">
            Message Strip with indication color 1b (Dark Red)
            <a href="#" class="fd-link fd-link--subtle" tabindex="0"><span class="fd-link__content">Link</span></a>
        </p>

        <button
            role="button"
            class="fd-button fd-button--transparent is-compact fd-message-strip__close"
            aria-label="Custom Information Bar Close"
            title="Custom Information Bar Close">
            <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
        </button>

        <div
            class="fd-message-strip fd-message-strip--dismissible fd-message-strip--link  fd-message-strip--indication-color-2"
            role="note"
            aria-labelledby="message-strip-hidden-text-21 message-strip-text-21">

            <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-21">Custom Information Bar Closable</span>

            <div class="fd-message-strip__icon-container" aria-hidden="true">
                <span class="sap-icon sap-icon--cloud" role="presentation" aria-hidden="true"></span>
            </div>

            <p class="fd-message-strip__text" id="message-strip-text-21">
                Message Strip with indication color 2 (Red)
                <a href="#" class="fd-link fd-link--subtle" tabindex="0"><span class="fd-link__content">Link</span></a>
            </p>

            <button
                role="button"
                class="fd-button fd-button--transparent is-compact fd-message-strip__close"
                aria-label="Custom Information Bar Close"
                title="Custom Information Bar Close">
                <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
            </button>

            <div
                class="fd-message-strip fd-message-strip--dismissible fd-message-strip--link fd-message-strip--indication-color-2b"
                role="note"
                aria-labelledby="message-strip-hidden-text-22 message-strip-text-22">

                <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-22">Custom Information Bar Closable</span>

                <div class="fd-message-strip__icon-container" aria-hidden="true">
                    <span class="sap-icon sap-icon--cloud" role="presentation" aria-hidden="true"></span>
                </div>

                <p class="fd-message-strip__text" id="message-strip-text-22">
                    Message Strip with indication color 2b (Red)
                    <a href="#" class="fd-link fd-link--subtle" tabindex="0"><span class="fd-link__content">Link</span></a>
                </p>

                <button
                    role="button"
                    class="fd-button fd-button--transparent is-compact fd-message-strip__close"
                    aria-label="Custom Information Bar Close"
                    title="Custom Information Bar Close">
                    <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
                </button>

                <div
                    class="fd-message-strip fd-message-strip--dismissible fd-message-strip--link fd-message-strip--indication-color-3"
                    role="note"
                    aria-labelledby="message-strip-hidden-text-23 message-strip-text-23">

                    <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-23">Custom Information Bar Closable</span>

                    <div class="fd-message-strip__icon-container" aria-hidden="true">
                        <span class="sap-icon sap-icon--heart-2" role="presentation" aria-hidden="true"></span>
                    </div>

                    <p class="fd-message-strip__text" id="message-strip-text-23">
                        Message Strip with indication color 3 (Yellow)
                        <a href="#" class="fd-link fd-link--subtle" tabindex="0"><span class="fd-link__content">Link</span></a>
                    </p>

                    <button
                        role="button"
                        class="fd-button fd-button--transparent is-compact fd-message-strip__close"
                        aria-label="Custom Information Bar Close"
                        title="Custom Information Bar Close">
                        <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
                    </button>

                    <div
                        class="fd-message-strip fd-message-strip--dismissible fd-message-strip--indication-color-3b"
                        role="note"
                        aria-labelledby="message-strip-hidden-text-24 message-strip-text-24">

                        <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-24">Custom Information Bar Closable</span>

                        <div class="fd-message-strip__icon-container" aria-hidden="true">
                            <span class="sap-icon sap-icon--heart-2" role="presentation" aria-hidden="true"></span>
                        </div>

                        <p class="fd-message-strip__text" id="message-strip-text-24">
                            Message Strip with indication color 3b (Yellow)
                        </p>

                        <button
                            role="button"
                            class="fd-button fd-button--transparent is-compact fd-message-strip__close"
                            aria-label="Custom Information Bar Close"
                            title="Custom Information Bar Close">
                            <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
                        </button>

                        <div
                            class="fd-message-strip fd-message-strip--dismissible fd-message-strip--indication-color-4"
                            role="note"
                            aria-labelledby="message-strip-hidden-text-25 message-strip-text-25">

                            <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-25">Custom Information Bar Closable</span>

                            <div class="fd-message-strip__icon-container" aria-hidden="true">
                                <span class="sap-icon sap-icon--circle-task" role="presentation" aria-hidden="true"></span>
                            </div>

                            <p class="fd-message-strip__text" id="message-strip-text-25">
                                Message Strip with indication color 4 (Green)
                            </p>

                            <button
                                role="button"
                                class="fd-button fd-button--transparent is-compact fd-message-strip__close"
                                aria-label="Custom Information Bar Close"
                                title="Custom Information Bar Close">
                                <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
                            </button>

                            <div
                                class="fd-message-strip fd-message-strip--dismissible fd-message-strip--indication-color-4b"
                                role="note"
                                aria-labelledby="message-strip-hidden-text-26 message-strip-text-26">

                                <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-26">Custom Information Bar Closable</span>

                                <div class="fd-message-strip__icon-container" aria-hidden="true">
                                    <span class="sap-icon sap-icon--circle-task" role="presentation" aria-hidden="true"></span>
                                </div>

                                <p class="fd-message-strip__text" id="message-strip-text-26">
                                    Message Strip with indication color 4b (Green)
                                </p>

                                <button
                                    role="button"
                                    class="fd-button fd-button--transparent is-compact fd-message-strip__close"
                                    aria-label="Custom Information Bar Close"
                                    title="Custom Information Bar Close">
                                    <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
                                </button>

                                <div
                                    class="fd-message-strip fd-message-strip--dismissible fd-message-strip--indication-color-5"
                                    role="note"
                                    aria-labelledby="message-strip-hidden-text-27 message-strip-text-27">

                                    <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-27">Custom Information Bar Closable</span>

                                    <div class="fd-message-strip__icon-container" aria-hidden="true">
                                        <span class="sap-icon sap-icon--feedback" role="presentation" aria-hidden="true"></span>
                                    </div>

                                    <p class="fd-message-strip__text" id="message-strip-text-27">
                                        Message Strip with indication color 5 (Blue)
                                    </p>

                                    <button
                                        role="button"
                                        class="fd-button fd-button--transparent is-compact fd-message-strip__close"
                                        aria-label="Custom Information Bar Close"
                                        title="Custom Information Bar Close">
                                        <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
                                    </button>

                                    <div
                                        class="fd-message-strip fd-message-strip--dismissible fd-message-strip--indication-color-5b"
                                        role="note"
                                        aria-labelledby="message-strip-hidden-text-28 message-strip-text-28">

                                        <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-28">Custom Information Bar Closable</span>

                                        <div class="fd-message-strip__icon-container" aria-hidden="true">
                                            <span class="sap-icon sap-icon--feedback" role="presentation" aria-hidden="true"></span>
                                        </div>

                                        <p class="fd-message-strip__text" id="message-strip-text-28">
                                            Message Strip with indication color 5b (Blue)
                                        </p>

                                        <button
                                            role="button"
                                            class="fd-button fd-button--transparent is-compact fd-message-strip__close"
                                            aria-label="Custom Information Bar Close"
                                            title="Custom Information Bar Close">
                                            <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
                                        </button>

                                        <div
                                            class="fd-message-strip fd-message-strip--dismissible fd-message-strip--indication-color-6"
                                            role="note"
                                            aria-labelledby="message-strip-hidden-text-29 message-strip-text-29">

                                            <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-29">Custom Information Bar Closable</span>

                                            <div class="fd-message-strip__icon-container" aria-hidden="true">
                                                <span class="sap-icon sap-icon--text-color" role="presentation" aria-hidden="true"></span>
                                            </div>

                                            <p class="fd-message-strip__text" id="message-strip-text-29">
                                                Message Strip with indication color 6 (Teal)
                                            </p>

                                            <button
                                                role="button"
                                                class="fd-button fd-button--transparent is-compact fd-message-strip__close"
                                                aria-label="Custom Information Bar Close"
                                                title="Custom Information Bar Close">
                                                <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
                                            </button>

                                            <div
                                                class="fd-message-strip fd-message-strip--dismissible fd-message-strip--indication-color-6b"
                                                role="note"
                                                aria-labelledby="message-strip-hidden-text-30 message-strip-text-30">

                                                <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-30">Custom Information Bar Closable</span>

                                                <div class="fd-message-strip__icon-container" aria-hidden="true">
                                                    <span class="sap-icon sap-icon--text-color" role="presentation" aria-hidden="true"></span>
                                                </div>

                                                <p class="fd-message-strip__text" id="message-strip-text-30">
                                                    Message Strip with indication color 6b (Teal)
                                                </p>

                                                <button
                                                    role="button"
                                                    class="fd-button fd-button--transparent is-compact fd-message-strip__close"
                                                    aria-label="Custom Information Bar Close"
                                                    title="Custom Information Bar Close">
                                                    <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
                                                </button>

                                                <div
                                                    class="fd-message-strip fd-message-strip--dismissible fd-message-strip--indication-color-7"
                                                    role="note"
                                                    aria-labelledby="message-strip-hidden-text-31 message-strip-text-31">

                                                    <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-31">Custom Information Bar Closable</span>

                                                    <div class="fd-message-strip__icon-container" aria-hidden="true">
                                                        <span class="sap-icon sap-icon--away" role="presentation" aria-hidden="true"></span>
                                                    </div>

                                                    <p class="fd-message-strip__text" id="message-strip-text-31">
                                                        Message Strip with indication color 7 (Purple)
                                                    </p>

                                                    <button
                                                        role="button"
                                                        class="fd-button fd-button--transparent is-compact fd-message-strip__close"
                                                        aria-label="Custom Information Bar Close"
                                                        title="Custom Information Bar Close">
                                                        <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
                                                    </button>

                                                    <div
                                                        class="fd-message-strip fd-message-strip--dismissible fd-message-strip--indication-color-7b"
                                                        role="note"
                                                        aria-labelledby="message-strip-hidden-text-32 message-strip-text-32">

                                                        <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-32">Custom Information Bar Closable</span>

                                                        <div class="fd-message-strip__icon-container" aria-hidden="true">
                                                            <span class="sap-icon sap-icon--away" role="presentation" aria-hidden="true"></span>
                                                        </div>

                                                        <p class="fd-message-strip__text" id="message-strip-text-32">
                                                            Message Strip with indication color 7b (Purple)
                                                        </p>

                                                        <button
                                                            role="button"
                                                            class="fd-button fd-button--transparent is-compact fd-message-strip__close"
                                                            aria-label="Custom Information Bar Close"
                                                            title="Custom Information Bar Close">
                                                            <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
                                                        </button>

                                                        <div
                                                            class="fd-message-strip fd-message-strip--dismissible fd-message-strip--indication-color-8"
                                                            role="note"
                                                            aria-labelledby="message-strip-hidden-text-33 message-strip-text-33">

                                                            <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-33">Custom Information Bar Closable</span>

                                                            <div class="fd-message-strip__icon-container" aria-hidden="true">
                                                                <span class="sap-icon sap-icon--cursor" role="presentation" aria-hidden="true"></span>
                                                            </div>

                                                            <p class="fd-message-strip__text" id="message-strip-text-33">
                                                                Message Strip with indication color 8 (Pink)
                                                            </p>

                                                            <button
                                                                role="button"
                                                                class="fd-button fd-button--transparent is-compact fd-message-strip__close"
                                                                aria-label="Custom Information Bar Close"
                                                                title="Custom Information Bar Close">
                                                                <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
                                                            </button>

                                                            <div
                                                                class="fd-message-strip fd-message-strip--dismissible fd-message-strip--indication-color-8b"
                                                                role="note"
                                                                aria-labelledby="message-strip-hidden-text-34 message-strip-text-34">

                                                                <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-34">Custom Information Bar Closable</span>

                                                                <div class="fd-message-strip__icon-container" aria-hidden="true">
                                                                    <span class="sap-icon sap-icon--cursor" role="presentation" aria-hidden="true"></span>
                                                                </div>

                                                                <p class="fd-message-strip__text" id="message-strip-text-34">
                                                                    Message Strip with indication color 8b (Pink)
                                                                </p>

                                                                <button
                                                                    role="button"
                                                                    class="fd-button fd-button--transparent is-compact fd-message-strip__close"
                                                                    aria-label="Custom Information Bar Close"
                                                                    title="Custom Information Bar Close">
                                                                    <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
                                                                </button>

                                                                <div
                                                                    class="fd-message-strip fd-message-strip--dismissible fd-message-strip--indication-color-9"
                                                                    role="note"
                                                                    aria-labelledby="message-strip-hidden-text-35 message-strip-text-35">

                                                                    <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-35">Custom Information Bar Closable</span>

                                                                    <div class="fd-message-strip__icon-container" aria-hidden="true">
                                                                        <span class="sap-icon sap-icon--copy" role="presentation" aria-hidden="true"></span>
                                                                    </div>

                                                                    <p class="fd-message-strip__text" id="message-strip-text-35">
                                                                        Message Strip with indication color 9 (Black/White)
                                                                    </p>

                                                                    <button
                                                                        role="button"
                                                                        class="fd-button fd-button--transparent is-compact fd-message-strip__close"
                                                                        aria-label="Custom Information Bar Close"
                                                                        title="Custom Information Bar Close">
                                                                        <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
                                                                    </button>

                                                                    <div
                                                                        class="fd-message-strip fd-message-strip--dismissible fd-message-strip--indication-color-9b"
                                                                        role="note"
                                                                        aria-labelledby="message-strip-hidden-text-36 message-strip-text-36">

                                                                        <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-36">Custom Information Bar Closable</span>

                                                                        <div class="fd-message-strip__icon-container" aria-hidden="true">
                                                                            <span class="sap-icon sap-icon--copy" role="presentation" aria-hidden="true"></span>
                                                                        </div>

                                                                        <p class="fd-message-strip__text" id="message-strip-text-36">
                                                                            Message Strip with indication color 9b (Black/White)
                                                                        </p>

                                                                        <button
                                                                            role="button"
                                                                            class="fd-button fd-button--transparent is-compact fd-message-strip__close"
                                                                            aria-label="Custom Information Bar Close"
                                                                            title="Custom Information Bar Close">
                                                                            <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
                                                                        </button>

                                                                        <div
                                                                            class="fd-message-strip fd-message-strip--dismissible fd-message-strip--indication-color-10"
                                                                            role="note"
                                                                            aria-labelledby="message-strip-hidden-text-37 message-strip-text-37">

                                                                            <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-37">Custom Information Bar Closable</span>

                                                                            <div class="fd-message-strip__icon-container" aria-hidden="true">
                                                                                <span class="sap-icon sap-icon--reset" role="presentation" aria-hidden="true"></span>
                                                                            </div>

                                                                            <p class="fd-message-strip__text" id="message-strip-text-37">
                                                                                Message Strip with indication color 10 (Grey)
                                                                            </p>

                                                                            <button
                                                                                role="button"
                                                                                class="fd-button fd-button--transparent is-compact fd-message-strip__close"
                                                                                aria-label="Custom Information Bar Close"
                                                                                title="Custom Information Bar Close">
                                                                                <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
                                                                            </button>

                                                                            <div
                                                                                class="fd-message-strip fd-message-strip--dismissible fd-message-strip--indication-color-10b"
                                                                                role="note"
                                                                                aria-labelledby="message-strip-hidden-text-38 message-strip-text-38">

                                                                                <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-38">Custom Information Bar Closable</span>

                                                                                <div class="fd-message-strip__icon-container" aria-hidden="true">
                                                                                    <span class="sap-icon sap-icon--reset" role="presentation" aria-hidden="true"></span>
                                                                                </div>

                                                                                <p class="fd-message-strip__text" id="message-strip-text-38">
                                                                                    Message Strip with indication color 10b (Grey)
                                                                                </p>

                                                                                <button
                                                                                    role="button"
                                                                                    class="fd-button fd-button--transparent is-compact fd-message-strip__close"
                                                                                    aria-label="Custom Information Bar Close"
                                                                                    title="Custom Information Bar Close">
                                                                                    <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
                                                                                </button>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/message-strip/message-strip.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
