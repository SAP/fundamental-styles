---
component: fd-message-toast
title: Components/Message Toast
category: Components
selector: fd-message-toast
cssFile: message-toast.css
sourcePath: packages/styles/stories/Components/message-toast/message-toast.stories.js
tags: []
dependencies: ["message-toast"]
relatedComponents: ["message-toast"]
stability: stable
generatedAt: 2026-06-08T17:49:02.060Z
---

# Components/Message Toast

The message toast is a small, non-disruptive popup for success messages that disappears automatically after a few seconds. When message toast is displayed, it is always centered horizontally at the bottom of the screen and fades in and out automatically.

Note: The timing and duration of the message toast is defined by the application, the standard value being 3000 ms. The duration can be above 3000 ms, but it's not recommended to be less than that value.

##Usage

**Use message toast if:**

- To display a short success message.
- To avoid interrupting the user while they are performing an action.
- To confirm a successful action.


**Do not use the message toast if:**

- You want to display an error or warning message.
- You want to interrupt users while they are performing an action.
- You want to make sure that users read the message before they leave the page.

## Usage Guidelines

**Use message toast if:**

- To display a short success message.
- To avoid interrupting the user while they are performing an action.
- To confirm a successful action.

## When Not To Use

- You want to display an error or warning message.
- You want to interrupt users while they are performing an action.
- You want to make sure that users read the message before they leave the page.

## Dependencies

This component depends on the following CSS files:

- `message-toast.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/message-toast.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/message-toast.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-message-toast" role="alert">Product added</div>
<div class="fd-message-toast" role="alert">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
```

## Related Components

This component works with or depends on:

- `message-toast`

## Design Tokens

Key CSS variables used by this component:

- `--sapContent_ContrastTextColor`
- `--sapContent_Lite_Shadow`
- `--sapElement_BorderCornerRadius`
- `--sapFontFamily`
- `--sapFontSize`
- `--sapIndicationColor_9_Background`

## Examples

### Default

The default message toast displays a simple popup with non-interactive text. The text wraps once it reaches the max-width of 15rem.

```html
<div class="fd-message-toast" role="alert">Product added</div>
<div class="fd-message-toast" role="alert">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/message-toast/message-toast.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
