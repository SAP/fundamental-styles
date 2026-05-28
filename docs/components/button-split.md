---
component: fd-button-split
title: Components/Buttons/Button Split
category: Components
selector: fd-button-split
cssFile: button-split.css
sourcePath: packages/styles/stories/Components/button-split/button.stories.js
tags: []
dependencies: ["button","button-split","icon"]
relatedComponents: ["button","button-split","icon"]
stability: stable
generatedAt: 2026-06-01T19:23:59.749Z
---

# Components/Buttons/Button Split

The split menu button has two separate areas: the text label and the arrow down icon.
The separator between them indicates that each area results in a different action, giving the user two choices: trigger the main action or open the menu.

**If the default action is displayed as an icon only, all the menu items must contain icons.**

The split menu button can behave in two different ways:

1. The main button triggers the default action set by the developer. If no default action is defined, the first item in the menu list should be the default.
2. The main button triggers the last action chosen by the user from the menu list. Initially, it triggers the default action. However, when the user selects a different action, the default switches to the last action selected by the user.
    
The split menu button can be displayed by using container with \

## Dependencies

This component depends on the following CSS files:

- `button.css`
- `button-split.css`
- `icon.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/button-split.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/button-split.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-button-split fd-button-split--emphasized" role="group" tabindex="-1" aria-label="Split Button" tabindex="-1">
    <button role="button" class="fd-button fd-button--emphasized">
        <span class="fd-button-split__text" id="emphasized">Emphasized</span>
    </button>
    <button role="button" class="fd-button fd-button--emphasized" aria-expanded="false" title="Open Menu" aria-haspopup="menu" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button">
        <span class="fd-button-split__text">Standard</span>
    </button>
    <button role="button" class="fd-button" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split fd-button-split--transparent" role="group" tabindex="-1" aria-label="Split Button" tabindex="-1">
    <button role="button" class="fd-button fd-button--transparent">
        <span class="fd-button-split__text">Transparent</span>
    </button>
    <button role="button" class="fd-button fd-button--transparent" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split fd-button-split--ghost" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button fd-button--ghost">
        <span class="fd-button-split__text">Ghost</span>
    </button>
    <button role="button" class="fd-button fd-button--ghost" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split fd-button-split--positive" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button fd-button--positive">
        <span class="fd-button-split__text">Positive</span>
    </button>
    <button role="button" class="fd-button fd-button--positive" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split fd-button-split--negative" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button fd-button--negative">
        <span class="fd-button-split__text">Negative</span>
    </button>
    <button role="button" class="fd-button fd-button--negative" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split fd-button-split--attention" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button fd-button--attention">
        <span class="fd-button-split__text">Attention</span>
    </button>
    <button role="button" class="fd-button fd-button--attention" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split fd-button-split--attention" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button fd-button--attention">
        <i class="sap-icon--cart"></i>
        <span class="fd-button-split__text">Attention</span>
    </button>
    <button role="button" class="fd-button fd-button--attention" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split fd-button-split--negative" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button fd-button--negative">
        <i class="sap-icon--cart"></i>
    </button>
    <button role="button" class="fd-button fd-button--negative" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>
<p>Arrow toggled:</p>
<div class="fd-button-split fd-button-split--emphasized is-hover" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button fd-button--emphasized">
        <span class="fd-button-split__text">Emphasized</span>
    </button>
    <button role="button" class="fd-button fd-button--emphasized is-active" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split is-hover" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button">
        <span class="fd-button-split__text">Standard</span>
    </button>
    <button role="button" class="fd-button is-active" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split fd-button-split--transparent is-hover" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button fd-button--transparent">
        <span class="fd-button-split__text">Transparent</span>
    </button>
    <button role="button" class="fd-button fd-button--transparent is-active" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split fd-button-split--ghost is-hover" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button fd-button--ghost">
        <span class="fd-button-split__text">Ghost</span>
    </button>
    <button role="button" class="fd-button fd-button--ghost is-active" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split fd-button-split--positive is-hover" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button fd-button--positive">
        <span class="fd-button-split__text">Positive</span>
    </button>
    <button role="button" class="fd-button fd-button--positive is-active" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split fd-button-split--negative is-hover" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button fd-button--negative">
        <span class="fd-button-split__text">Negative</span>
    </button>
    <button role="button" class="fd-button fd-button--negative is-active" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split fd-button-split--attention is-hover" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button fd-button--attention">
        <span class="fd-button-split__text">Attention</span>
    </button>
    <button role="button" class="fd-button fd-button--attention is-active" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split fd-button-split--attention is-hover" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button fd-button--attention">
        <i class="sap-icon--cart"></i>
        <span class="fd-button-split__text">Attention</span>
    </button>
    <button role="button" class="fd-button fd-button--attention is-active" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split fd-button-split--negative is-hover" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button fd-button--negative">
        <i class="sap-icon--cart"></i>
    </button>
    <button role="button" class="fd-button fd-button--negative is-active" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-button-split--attention` | Style variant |
| `fd-button-split--emphasized` | Style variant |
| `fd-button-split--ghost` | Style variant |
| `fd-button-split--negative` | Style variant |
| `fd-button-split--positive` | Style variant |
| `fd-button-split--transparent` | Style variant |

## States

| Class | Description |
|-------|-------------|
| `is-active` | Active state |
| `is-hover` | Hover state |

## BEM Elements

This component uses the following BEM elements:

- `fd-button-split__text`

## Related Components

This component works with or depends on:

- `button`
- `button-split`
- `icon`

## Design Tokens

Key CSS variables used by this component:

- `--emphasized`
- `--fdButtonPrioritizedBackgroundColor`
- `--fdButtonPrioritizedBorderColor`
- `--fdButtonSplit_Separator_Offset`
- `--fdButtonSplit_Text_Max_Width`
- `--fdButton_Border_Radius_Left`
- `--fdButton_Border_Radius_Left_RTL`
- `--fdButton_Border_Radius_Outline_Left`
- `--fdButton_Border_Radius_Outline_Left_RTL`
- `--fdButton_Border_Radius_Outline_Right`
- `--fdButton_Border_Radius_Outline_Right_RTL`
- `--fdButton_Border_Radius_Right`
- `--fdButton_Border_Radius_Right_RTL`
- `--fdButton_Ghost_Background`
- `--fdButton_Menu_Attention_Shadow_Color`

*...and 5 more*

## Examples

### Split menu button

```html
<div class="fd-button-split fd-button-split--emphasized" role="group" tabindex="-1" aria-label="Split Button" tabindex="-1">
    <button role="button" class="fd-button fd-button--emphasized">
        <span class="fd-button-split__text" id="emphasized">Emphasized</span>
    </button>
    <button role="button" class="fd-button fd-button--emphasized" aria-expanded="false" title="Open Menu" aria-haspopup="menu" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button">
        <span class="fd-button-split__text">Standard</span>
    </button>
    <button role="button" class="fd-button" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split fd-button-split--transparent" role="group" tabindex="-1" aria-label="Split Button" tabindex="-1">
    <button role="button" class="fd-button fd-button--transparent">
        <span class="fd-button-split__text">Transparent</span>
    </button>
    <button role="button" class="fd-button fd-button--transparent" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split fd-button-split--ghost" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button fd-button--ghost">
        <span class="fd-button-split__text">Ghost</span>
    </button>
    <button role="button" class="fd-button fd-button--ghost" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split fd-button-split--positive" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button fd-button--positive">
        <span class="fd-button-split__text">Positive</span>
    </button>
    <button role="button" class="fd-button fd-button--positive" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split fd-button-split--negative" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button fd-button--negative">
        <span class="fd-button-split__text">Negative</span>
    </button>
    <button role="button" class="fd-button fd-button--negative" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split fd-button-split--attention" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button fd-button--attention">
        <span class="fd-button-split__text">Attention</span>
    </button>
    <button role="button" class="fd-button fd-button--attention" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split fd-button-split--attention" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button fd-button--attention">
        <i class="sap-icon--cart"></i>
        <span class="fd-button-split__text">Attention</span>
    </button>
    <button role="button" class="fd-button fd-button--attention" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split fd-button-split--negative" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button fd-button--negative">
        <i class="sap-icon--cart"></i>
    </button>
    <button role="button" class="fd-button fd-button--negative" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>
<p>Arrow toggled:</p>
<div class="fd-button-split fd-button-split--emphasized is-hover" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button fd-button--emphasized">
        <span class="fd-button-split__text">Emphasized</span>
    </button>
    <button role="button" class="fd-button fd-button--emphasized is-active" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split is-hover" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button">
        <span class="fd-button-split__text">Standard</span>
    </button>
    <button role="button" class="fd-button is-active" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split fd-button-split--transparent is-hover" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button fd-button--transparent">
        <span class="fd-button-split__text">Transparent</span>
    </button>
    <button role="button" class="fd-button fd-button--transparent is-active" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split fd-button-split--ghost is-hover" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button fd-button--ghost">
        <span class="fd-button-split__text">Ghost</span>
    </button>
    <button role="button" class="fd-button fd-button--ghost is-active" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split fd-button-split--positive is-hover" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button fd-button--positive">
        <span class="fd-button-split__text">Positive</span>
    </button>
    <button role="button" class="fd-button fd-button--positive is-active" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split fd-button-split--negative is-hover" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button fd-button--negative">
        <span class="fd-button-split__text">Negative</span>
    </button>
    <button role="button" class="fd-button fd-button--negative is-active" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split fd-button-split--attention is-hover" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button fd-button--attention">
        <span class="fd-button-split__text">Attention</span>
    </button>
    <button role="button" class="fd-button fd-button--attention is-active" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split fd-button-split--attention is-hover" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button fd-button--attention">
        <i class="sap-icon--cart"></i>
        <span class="fd-button-split__text">Attention</span>
    </button>
    <button role="button" class="fd-button fd-button--attention is-active" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>

<div class="fd-button-split fd-button-split--negative is-hover" role="group" tabindex="-1" aria-label="button-split">
    <button role="button" class="fd-button fd-button--negative">
        <i class="sap-icon--cart"></i>
    </button>
    <button role="button" class="fd-button fd-button--negative is-active" aria-expanded="false" title="Open Menu" aria-haspopup="menu">
        <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
    </button>
</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/button-split/button.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
