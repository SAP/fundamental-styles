---
component: fd-button
title: BTP/Button
category: BTP
selector: fd-button
cssFile: button.css
sourcePath: packages/styles/stories/BTP/button/button.stories.js
generatedAt: 2026-05-28T16:01:41.599Z
---

# BTP/Button



## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
```

## Basic Usage

```html
<h4>normal</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--tool-header" aria-label="Home">
        <i class="sap-icon--home" role="presentation"></i>
    </button>
</div>

<h4>hover</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--tool-header is-hover" aria-label="Home">
        <i class="sap-icon--home" role="presentation"></i>
    </button>
</div>

<h4>active</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--tool-header is-active" aria-label="Home">
        <i class="sap-icon--home" role="presentation"></i>
    </button>
</div>

<h4>focus</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--tool-header is-focus" aria-label="Home">
        <i class="sap-icon--home" role="presentation"></i>
    </button>
</div>

<h4>disabled</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--tool-header is-disabled" aria-label="Home">
        <i class="sap-icon--home" role="presentation"></i>
    </button>
</div>

<h4>with badge</h4>
<button class="fd-button fd-button--tool-header" aria-label="Home">
    <i class="sap-icon--home" role="presentation"></i>
    <span class="fd-button__badge"></span>
</button>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-button--nested` | The Nested button is also intended to be used within the controls and patterns for the <b>BTP</b> area. Use the <code>.fd-button--nested</code> modifier class with the <code>.fd-button</code> base class for this type of button. |
| `fd-button--nested-square` | Use the <code>.fd-button--nested-square</code> modifier class with the <code>.fd-button</code> base class for aquare nested button. |
| `fd-button--tool-header` | The Tool Header button is based on the Button (Horizon) Transparent/LiteButton, but has over-styling of the shape, size and interaction states. It is intended to be used within the controls and patterns for the  <b>BTP</b> area. Use the <code>.fd-button--tool-header</code> modifier class for this type of button. |

## States

| Class | Description |
|-------|-------------|
| `is-active` | Active state |
| `is-disabled` | Disabled state |
| `is-focus` | Focus state |
| `is-hover` | Hover state |

## Examples

### ToolHeaderButton

The Tool Header button is based on the Button (Horizon) Transparent/LiteButton, but has over-styling of the shape, size and interaction states. It is intended to be used within the controls and patterns for the  <b>BTP</b> area. Use the <code>.fd-button--tool-header</code> modifier class for this type of button.

```html
<h4>normal</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--tool-header" aria-label="Home">
        <i class="sap-icon--home" role="presentation"></i>
    </button>
</div>

<h4>hover</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--tool-header is-hover" aria-label="Home">
        <i class="sap-icon--home" role="presentation"></i>
    </button>
</div>

<h4>active</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--tool-header is-active" aria-label="Home">
        <i class="sap-icon--home" role="presentation"></i>
    </button>
</div>

<h4>focus</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--tool-header is-focus" aria-label="Home">
        <i class="sap-icon--home" role="presentation"></i>
    </button>
</div>

<h4>disabled</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--tool-header is-disabled" aria-label="Home">
        <i class="sap-icon--home" role="presentation"></i>
    </button>
</div>

<h4>with badge</h4>
<button class="fd-button fd-button--tool-header" aria-label="Home">
    <i class="sap-icon--home" role="presentation"></i>
    <span class="fd-button__badge"></span>
</button>
```

### NestedButton

The Nested button is also intended to be used within the controls and patterns for the <b>BTP</b> area. Use the <code>.fd-button--nested</code> modifier class with the <code>.fd-button</code> base class for this type of button.

```html
<h4>normal</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--nested" aria-label="Close">
        <i class="sap-icon--decline" role="presentation"></i>
    </button>
</div>

<h4>hover</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--nested is-hover" aria-label="Close">
        <i class="sap-icon--decline" role="presentation"></i>
    </button>
</div>

<h4>active</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--nested is-active" aria-label="Close">
        <i class="sap-icon--decline" role="presentation"></i>
    </button>
</div>

<h4>focus</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--nested is-focus" aria-label="Close">
        <i class="sap-icon--decline" role="presentation"></i>
    </button>
</div>

<h4>disabled</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--nested is-disabled" aria-label="Close">
        <i class="sap-icon--decline" role="presentation"></i>
    </button>
</div>
```

### NestedSquareButton

Use the <code>.fd-button--nested-square</code> modifier class with the <code>.fd-button</code> base class for aquare nested button.

```html
<h4>normal</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--nested-square" aria-label="Close">
        <i class="sap-icon--decline" role="presentation"></i>
    </button>
</div>

<h4>hover</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--nested-square is-hover" aria-label="Close">
        <i class="sap-icon--decline" role="presentation"></i>
    </button>
</div>

<h4>active</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--nested-square is-active" aria-label="Close">
        <i class="sap-icon--decline" role="presentation"></i>
    </button>
</div>

<h4>focus</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--nested-square is-focus" aria-label="Close">
        <i class="sap-icon--decline" role="presentation"></i>
    </button>
</div>

<h4>disabled</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--nested-square is-disabled" aria-label="Close">
        <i class="sap-icon--decline" role="presentation"></i>
    </button>
</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/BTP/button/button.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
