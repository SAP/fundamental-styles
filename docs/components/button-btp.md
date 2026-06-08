---
component: fd-button
title: BTP/Button
category: BTP
selector: fd-button
cssFile: button.css
sourcePath: packages/styles/stories/BTP/button/button.stories.js
tags: ["btp","horizon-only"]
dependencies: ["button","icon"]
relatedComponents: ["button","icon"]
stability: stable
generatedAt: 2026-06-08T17:49:02.251Z
---

# BTP/Button



## Dependencies

This component depends on the following CSS files:

- `button.css`
- `icon.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
```

## Basic Usage

```html
<button class="fd-button fd-button--tool-header" aria-label="Home">
    <i class="sap-icon--home" role="presentation"></i>
</button>

<button class="fd-button fd-button--tool-header is-hover" aria-label="Home">
    <i class="sap-icon--home" role="presentation"></i>
</button>

<button class="fd-button fd-button--tool-header is-active" aria-label="Home">
    <i class="sap-icon--home" role="presentation"></i>
</button>

<button class="fd-button fd-button--tool-header is-focus" aria-label="Home">
    <i class="sap-icon--home" role="presentation"></i>
</button>

<button class="fd-button fd-button--tool-header is-disabled" aria-label="Home">
    <i class="sap-icon--home" role="presentation"></i>
</button>

<h4>with badge</h4>
<button class="fd-button fd-button--tool-header" aria-label="Home">
    <i class="sap-icon--home" role="presentation"></i>
    <span class="fd-button__badge"></span>
</button>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-button--nested` | The Nested button is also intended to be used within the controls and patterns for the <b>BTP</b> area |
| `fd-button--nested-square` | Use the <code>.fd-button--nested-square</code> modifier class with the <code>.fd-button</code> base class for aquare nested button. |
| `fd-button--tool-header` | Tool Header Button This is a BTP extension of the Button The code is done this way (not overwriting the CSS variables of Button) in case we need to move to a separate component or library in future |

## States

| Class | Description |
|-------|-------------|
| `is-active` | Active state |
| `is-disabled` | Disabled state |
| `is-focus` | Focus state |
| `is-hover` | Hover state |

## BEM Elements

This component uses the following BEM elements:

- `fd-button__badge`

## Related Components

This component works with or depends on:

- `button`
- `icon`

## Design Tokens

Key CSS variables used by this component:

- `--attention`
- `--decisive`
- `--fdButton_Badge_Height`
- `--fdButton_Badge_Margin`
- `--fdButton_Badge_Margin_Inline_Start`
- `--fdButton_Badge_Offset`
- `--fdButton_Badge_Padding_Inline`
- `--fdButton_Badge_Position`
- `--fdButton_Badge_Position_Attention`
- `--fdButton_Badge_Size_Attention`
- `--fdButton_Badge_Width`
- `--fdButton_Clickable_Height`
- `--fdButton_Compact_Height`
- `--fdButton_Font_Family`
- `--fdButton_Height`

*...and 5 more*

## Examples

### ToolHeaderButton

The Tool Header button is based on the Button (Horizon) Transparent/LiteButton, but has over-styling of the shape, size and interaction states. It is intended to be used within the controls and patterns for the  <b>BTP</b> area. Use the <code>.fd-button--tool-header</code> modifier class for this type of button.

```html
<button class="fd-button fd-button--tool-header" aria-label="Home">
    <i class="sap-icon--home" role="presentation"></i>
</button>

<button class="fd-button fd-button--tool-header is-hover" aria-label="Home">
    <i class="sap-icon--home" role="presentation"></i>
</button>

<button class="fd-button fd-button--tool-header is-active" aria-label="Home">
    <i class="sap-icon--home" role="presentation"></i>
</button>

<button class="fd-button fd-button--tool-header is-focus" aria-label="Home">
    <i class="sap-icon--home" role="presentation"></i>
</button>

<button class="fd-button fd-button--tool-header is-disabled" aria-label="Home">
    <i class="sap-icon--home" role="presentation"></i>
</button>

<h4>with badge</h4>
<button class="fd-button fd-button--tool-header" aria-label="Home">
    <i class="sap-icon--home" role="presentation"></i>
    <span class="fd-button__badge"></span>
</button>
```

### NestedButton

The Nested button is also intended to be used within the controls and patterns for the <b>BTP</b> area. Use the <code>.fd-button--nested</code> modifier class with the <code>.fd-button</code> base class for this type of button.

```html
<button class="fd-button fd-button--nested" aria-label="Close">
    <i class="sap-icon--decline" role="presentation"></i>
</button>

<button class="fd-button fd-button--nested is-hover" aria-label="Close">
    <i class="sap-icon--decline" role="presentation"></i>
</button>

<button class="fd-button fd-button--nested is-active" aria-label="Close">
    <i class="sap-icon--decline" role="presentation"></i>
</button>

<button class="fd-button fd-button--nested is-focus" aria-label="Close">
    <i class="sap-icon--decline" role="presentation"></i>
</button>

<button class="fd-button fd-button--nested is-disabled" aria-label="Close">
    <i class="sap-icon--decline" role="presentation"></i>
</button>
```

### NestedSquareButton

Use the <code>.fd-button--nested-square</code> modifier class with the <code>.fd-button</code> base class for aquare nested button.

```html
<button class="fd-button fd-button--nested-square" aria-label="Close">
    <i class="sap-icon--decline" role="presentation"></i>
</button>

<button class="fd-button fd-button--nested-square is-hover" aria-label="Close">
    <i class="sap-icon--decline" role="presentation"></i>
</button>

<button class="fd-button fd-button--nested-square is-active" aria-label="Close">
    <i class="sap-icon--decline" role="presentation"></i>
</button>

<button class="fd-button fd-button--nested-square is-focus" aria-label="Close">
    <i class="sap-icon--decline" role="presentation"></i>
</button>

<button class="fd-button fd-button--nested-square is-disabled" aria-label="Close">
    <i class="sap-icon--decline" role="presentation"></i>
</button>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/BTP/button/button.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
