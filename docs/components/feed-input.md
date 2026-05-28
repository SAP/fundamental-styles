---
component: fd-feed-input
title: Components/Feed Input
category: Components
selector: fd-feed-input
cssFile: feed-input.css
sourcePath: packages/styles/stories/Components/feed-input/feed-input.stories.js
tags: []
dependencies: ["avatar","button","feed-input","icon","textarea"]
relatedComponents: ["avatar","button","feed-input","icon","textarea"]
stability: stable
generatedAt: 2026-05-28T16:47:21.039Z
---

# Components/Feed Input

The feed input is specifically designed for users to type their own notes or comments and post them to a corresponding feed.

##Usage
**Use the feed input if:**

- A user needs to input small amounts of text without formatting.
- You expect multiple instances, such as notes or feed entries.

**Do not use the feed input if:**

- The user needs to format the text (rich text editor).
- You need only a single text box instance. In this case, use the **Textarea** component (for multiple lines) or the text control (for a single line).

## Usage Guidelines

**Use the feed input if:**

- A user needs to input small amounts of text without formatting.
- You expect multiple instances, such as notes or feed entries.

## When Not To Use

- The user needs to format the text (rich text editor).
- You need only a single text box instance. In this case, use the **Textarea** component (for multiple lines) or the text control (for a single line).

## Dependencies

This component depends on the following CSS files:

- `avatar.css`
- `button.css`
- `feed-input.css`
- `icon.css`
- `textarea.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/feed-input.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/avatar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/feed-input.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/textarea.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-feed-input"
    role="group"
    aria-label="Feed input empty example">
    <div class="fd-feed-input__container">

        <textarea class="fd-textarea fd-feed-input__textarea"
            placeholder="Post something here"
            required
            rows="1"></textarea>
            <button class="fd-button fd-feed-input__submit-button"
                disabled
                role="button"
                aria-disabled="true"
                aria-label="Submit"
                title="Submit">
                <i role="presentation" aria-hidden="true" class="sap-icon--paper-plane"></i>
            </button>
```

## States

| Class | Description |
|-------|-------------|
| `is-disabled` | Disabled state |

## BEM Elements

This component uses the following BEM elements:

- `fd-feed-input__container`
- `fd-feed-input__submit-button`
- `fd-feed-input__textarea`
- `fd-feed-input__thumb`

## Related Components

This component works with or depends on:

- `avatar`
- `button`
- `feed-input`
- `icon`
- `textarea`

## Design Tokens

Key CSS variables used by this component:

- `--fdButton_Badge_Margin_Inline_Start`
- `--fdButton_Badge_Size_Attention`
- `--fdButton_Clickable_Height`
- `--fdButton_Compact_Height`
- `--fdButton_Min_Width`
- `--fdButton_Padding_X`
- `--fdFeed_Input_Placeholder_Font_Style`
- `--sapElement_Height`
- `--sapGroup_ContentBackground`
- `--sapTextColor`

## Examples

### Default

The default feed input displays an empty text field with an inactive submit button.

```html
<div class="fd-feed-input"
    role="group"
    aria-label="Feed input empty example">
    <div class="fd-feed-input__container">

        <textarea class="fd-textarea fd-feed-input__textarea"
            placeholder="Post something here"
            required
            rows="1"></textarea>
            <button class="fd-button fd-feed-input__submit-button"
                disabled
                role="button"
                aria-disabled="true"
                aria-label="Submit"
                title="Submit">
                <i role="presentation" aria-hidden="true" class="sap-icon--paper-plane"></i>
            </button>
```

### With text

The input with text displays some text, activating the submit button.

```html
<div class="fd-feed-input"
    role="group"
    aria-label="Feed input with one row text">
    <div class="fd-feed-input__container">

        <textarea class="fd-textarea fd-feed-input__textarea"
            placeholder="Post something here"
            required
            rows="1">When there is text, the submit button becomes active.
        </textarea>
        <button
            class="fd-button fd-feed-input__submit-button"
            aria-label="Submit"
            aria-disabled="false"
            title="Submit"
            role="button"
            >
            <i role="presentation" aria-hidden="true" class="sap-icon--feeder-arrow"></i>
        </button>
```

### Disabled

The disabled feed input displays a text field and submit button that users cannot interact with.

```html
<div class="fd-feed-input is-disabled"
    role="group"
    aria-label="Feed input disabled example">
    <div class="fd-feed-input__container">

        <textarea class="fd-textarea fd-feed-input__textarea"
            placeholder="Post something here"
            required
            rows="1"
            aria-disabled="true"
            disabled>Disabled</textarea>
            <button class="fd-button fd-feed-input__submit-button"
                disabled
                role="button"
                aria-label="Submit"
                aria-disabled="true"
                title="Submit">
                <i role="presentation" aria-hidden="true" class="sap-icon--feeder-arrow"></i>
            </button>
```

### No thumbnail

Although the default feed input has a thumbnail, it is possible to remove it. Without a thumbnail, the input area size increases automatically.

```html
<div class="fd-feed-input"
    role="group"
    aria-label="Feed input empty example">
    <div class="fd-feed-input__container">
        <textarea class="fd-textarea fd-feed-input__textarea"
            placeholder="Post something here"
            required
            rows="1">Without user image
        </textarea>
        <button class="fd-button fd-feed-input__submit-button"
            role="button"
            aria-label="Submit"
            title="Submit">
            <i role="presentation" aria-hidden="true" class="sap-icon--feeder-arrow"></i>
        </button>
    </div>
```

### Generic thumbnail

A generic thumbnail will be displayed if no image has been chosen by the user.

```html
<div class="fd-feed-input"
    role="group"
    aria-label="Feed input empty example">
    <div class="fd-feed-input__container">
        <div class="fd-avatar fd-avatar--s fd-avatar--placeholder fd-feed-input__thumb"
            role="img"
            aria-label="John Doe">
            <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
        </div>
        <textarea class="fd-textarea fd-feed-input__textarea"
            placeholder="Post something here"
            required
            rows="1">With generic user image
        </textarea>
        <button
            class="fd-button fd-feed-input__submit-button"
            role="button"
            aria-label="Submit"
            title="Submit">
            <i role="presentation" aria-hidden="true" class="sap-icon--feeder-arrow"></i>
        </button>
```

### Multiline

The multiline feed input displays a text field with multiple lines of text, which expands until a maximum height is reached.

```html
<div class="fd-feed-input"
    role="group"
    aria-label="Feed input height growth">
    <div class="fd-feed-input__container">

        <textarea class="fd-textarea fd-feed-input__textarea"
            placeholder="Post something here"
            required
            rows="4">With every line
            "textarea" grows upward
            until it reaches
            the max height
        </textarea>
        <button class="fd-button fd-feed-input__submit-button"
            role="button"
            aria-disabled="false"
            aria-label="Submit"
            title="Submit">
            <i role="presentation" aria-hidden="true" class="sap-icon--feeder-arrow"></i>
        </button>
```

### Max height

The max height feed input displays a text field with the maximum amount of text lines it can contain. Once the text field has reached the maximum height, a scrollbar appears to access the overflowing text.

```html
<div class="fd-feed-input"
    role="group"
    aria-label="Feed input over max height">
    <div class="fd-feed-input__container">

        <textarea
            class="fd-textarea fd-feed-input__textarea"
            placeholder="Post something here"
            required
            rows="18">X
            X
            X
            X
            X
            X
            X
            X
            X
            X
            X
            X
            X
            X
            X
            X
            X
            X
            X
            X
        </textarea>
        <button class="fd-button fd-feed-input__submit-button"
            role="button"
            aria-disabled="false"
            aria-label="Submit"
            title="Submit">
            <i role="presentation" aria-hidden="true" class="sap-icon--feeder-arrow"></i>
        </button>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/feed-input/feed-input.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
