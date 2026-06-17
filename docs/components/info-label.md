---
component: fd-info-label
title: Components/Info Label
category: Components
selector: fd-info-label
cssFile: info-label.css
sourcePath: packages/styles/stories/Components/info-label/info-label.stories.js
tags: ["btp"]
dependencies: ["icon","info-label"]
relatedComponents: ["icon","info-label"]
stability: stable
---

# Components/Info Label

Info Label is a small non-interactive numeric or text-based label.
Its primary use is to add user-defined characteristic to an object.
Use the Info Label base class with following modifiers:

| **Accent** | **Modifier class** |
| :--------- | :---------------: |
| Accent 1 - Mango | \

## Dependencies

This component depends on the following CSS files:

- `icon.css`
- `info-label.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/info-label.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/info-label.css" rel="stylesheet">
```

## Basic Usage

```html
<span class="fd-info-label fd-info-label--accent-color-1">
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">color 1</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-2">
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">color 2</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-3">
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">color 3</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-4">
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">color 4</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-5">
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">color 5</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-6">
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">color 6</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-7">
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">color 7</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-8">
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">color 8</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-9">
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">color 9</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-10">
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">color 10</span>
</span>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-info-label--accent-color-` | Style variant |
| `fd-info-label--display` | Style variant |

## BEM Elements

This component uses the following BEM elements:

- `fd-info-label__icon`
- `fd-info-label__sr-only`
- `fd-info-label__text`

## Related Components

This component works with or depends on:

- `icon`
- `info-label`

## Design Tokens

Key CSS variables used by this component:

- `--accent-color-`
- `--display`
- `--fdInfoLabel_Background`
- `--fdInfoLabel_Background_Color_Accent_7`
- `--fdInfoLabel_Border_Color`
- `--fdInfoLabel_Border_Radius`
- `--fdInfoLabel_Color`
- `--fdInfoLabel_Color_Accent_7`
- `--fdInfoLabel_Height`
- `--fdInfoLabel_Icon_Size`
- `--fdInfoLabel_Label_Font_Size`
- `--fdInfoLabel_Margin`
- `--fdInfoLabel_Padding`
- `--fdInfo_Label_Background_Color1`
- `--fdInfo_Label_Background_Color10`

*...and 5 more*

## Examples

### ColorFlavors

```html
<span class="fd-info-label fd-info-label--accent-color-1">
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">color 1</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-2">
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">color 2</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-3">
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">color 3</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-4">
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">color 4</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-5">
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">color 5</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-6">
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">color 6</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-7">
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">color 7</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-8">
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">color 8</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-9">
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">color 9</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-10">
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">color 10</span>
</span>
```

### InfoLabelWithIcon

```html
<span class="fd-info-label fd-info-label--accent-color-1">
    <i role="presentation" aria-hidden="true" class="fd-info-label__icon sap-icon--dark-mode"></i>
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">Color 1</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-2">
    <i role="presentation" aria-hidden="true" class="fd-info-label__icon sap-icon--dark-mode"></i>
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">Color 2</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-3">
    <i role="presentation" aria-hidden="true" class="fd-info-label__icon sap-icon--dark-mode"></i>
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">Color 3</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-4">
    <i role="presentation" aria-hidden="true" class="fd-info-label__icon sap-icon--dark-mode"></i>
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">Color 4</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-5">
    <i role="presentation" aria-hidden="true" class="fd-info-label__icon sap-icon--dark-mode"></i>
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">Color 5</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-6">
    <i role="presentation" aria-hidden="true" class="fd-info-label__icon sap-icon--dark-mode"></i>
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">Color 6</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-7">
    <i role="presentation" aria-hidden="true" class="fd-info-label__icon sap-icon--dark-mode"></i>
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">Color 7</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-8">
    <i role="presentation" aria-hidden="true" class="fd-info-label__icon sap-icon--dark-mode"></i>
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">Color 8</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-9">
    <i role="presentation" aria-hidden="true" class="fd-info-label__icon sap-icon--dark-mode"></i>
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">Color 9</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-10">
    <i role="presentation" aria-hidden="true" class="fd-info-label__icon sap-icon--dark-mode"></i>
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">Color 10</span>
</span>
```

### DisplayModeInfoLabel

```html
<span class="fd-info-label fd-info-label--accent-color-1 fd-info-label--display">
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">color 1</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-2 fd-info-label--display">
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">color 2</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-3 fd-info-label--display">
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">color 3</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-4 fd-info-label--display">
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">color 4</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-5 fd-info-label--display">
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">color 5</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-6 fd-info-label--display">
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">color 6</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-7 fd-info-label--display">
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">color 7</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-8 fd-info-label--display">
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">color 8</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-9 fd-info-label--display">
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">color 9</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-10 fd-info-label--display">
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">color 10</span>
</span>

<span class="fd-info-label fd-info-label--accent-color-1 fd-info-label--display">
    <i role="presentation" class="fd-info-label__icon sap-icon--dark-mode"></i>
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">Color 1</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-2 fd-info-label--display">
    <i role="presentation" class="fd-info-label__icon sap-icon--dark-mode"></i>
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">Color 2</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-3 fd-info-label--display">
    <i role="presentation" class="fd-info-label__icon sap-icon--dark-mode"></i>
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">Color 3</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-4 fd-info-label--display">
    <i role="presentation" class="fd-info-label__icon sap-icon--dark-mode"></i>
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">Color 4</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-5 fd-info-label--display">
    <i role="presentation" class="fd-info-label__icon sap-icon--dark-mode"></i>
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">Color 5</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-6 fd-info-label--display">
    <i role="presentation" class="fd-info-label__icon sap-icon--dark-mode"></i>
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">Color 6</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-7 fd-info-label--display">
    <i role="presentation" class="fd-info-label__icon sap-icon--dark-mode"></i>
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">Color 7</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-8 fd-info-label--display">
    <i role="presentation" class="fd-info-label__icon sap-icon--dark-mode"></i>
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">Color 8</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-9 fd-info-label--display">
    <i role="presentation" class="fd-info-label__icon sap-icon--dark-mode"></i>
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">Color 9</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-10 fd-info-label--display">
    <i role="presentation" class="fd-info-label__icon sap-icon--dark-mode"></i>
    <span class="fd-info-label__sr-only">Info Label</span>
    <span class="fd-info-label__text">Color 10</span>
</span>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/info-label/info-label.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
