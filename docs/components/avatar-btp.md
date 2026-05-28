---
component: fd-avatar
title: BTP/Avatar
category: BTP
selector: fd-avatar
cssFile: avatar.css
sourcePath: packages/styles/stories/BTP/avatar/avatar.stories.js
tags: ["btp","horizon-only"]
dependencies: ["btp/avatar","icon"]
relatedComponents: ["icon"]
stability: stable
generatedAt: 2026-05-28T20:12:00.768Z
---

# BTP/Avatar

This is an extension to the <a href="https://fundamental-styles.netlify.app/?path=/docs/components-avatar--icon">Avatar</a> which introduces additional avatar sizes that are consumed by components and patterns in the BTP area. 

## Sizes

| **Size** | **rem** | **Modifier class** |
| :---------: | :----------: | :---------------: |
| 40 | &nbsp;&nbsp; &nbsp;&nbsp;2.5 rem&nbsp;&nbsp; &nbsp;&nbsp; | &nbsp;&nbsp; &nbsp;&nbsp; \

## Dependencies

This component depends on the following CSS files:

- `btp/avatar.css`
- `icon.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/avatar.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/btp/avatar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
```

## Basic Usage

```html
<span class="fd-avatar fd-avatar--40" role="presentation">
    <i role="presentation" class="fd-avatar__icon sap-icon--washing-machine"></i>
</span>
<span class="fd-avatar fd-avatar--96" role="presentation">
    <i role="presentation" class="fd-avatar__icon sap-icon--washing-machine"></i>
</span>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-avatar--accent-color-` | Style variant |
| `fd-avatar--circle` | Style variant |
| `fd-avatar--thumbnail` | Style variant |
| `fd-avatar--transparent` | Style variant |

## BEM Elements

This component uses the following BEM elements:

- `fd-avatar__icon`

## Related Components

This component works with or depends on:

- `icon`

## Design Tokens

Key CSS variables used by this component:

- `--accent-color-`
- `--background-contain`
- `--border`
- `--circle`
- `--fdAvatarActiveColor`
- `--fdAvatarActiveHoverColor`
- `--fdAvatarBackgroundActiveColor`
- `--fdAvatarBackgroundActiveHoverColor`
- `--fdAvatarBackgroundColor`
- `--fdAvatarBackgroundSize`
- `--fdAvatarBorderActiveColor`
- `--fdAvatarBorderActiveHoverColor`
- `--fdAvatarBorderColor`
- `--fdAvatarBorderHoverColor`
- `--fdAvatarBorderRadius`

*...and 5 more*

## Examples

### Icon

```html
<span class="fd-avatar fd-avatar--40" role="presentation">
    <i role="presentation" class="fd-avatar__icon sap-icon--washing-machine"></i>
</span>
<span class="fd-avatar fd-avatar--96" role="presentation">
    <i role="presentation" class="fd-avatar__icon sap-icon--washing-machine"></i>
</span>
```

### Initials

```html
<span class="fd-avatar fd-avatar--40 fd-avatar--accent-color-1" aria-label="Wendy Wallace">AlK</span>
<span class="fd-avatar fd-avatar--96 fd-avatar--accent-color-2" aria-label="Wendy Wallace">AlK</span>
```

### Circle

```html
<span class="fd-avatar fd-avatar--40 fd-avatar--circle" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>

<span class="fd-avatar fd-avatar--96 fd-avatar--circle" aria-label="Wendy Wallace">AlK</span>
```

### BackgroundImage

```html
<span class="fd-avatar fd-avatar--40 fd-avatar--circle fd-avatar--thumbnail" role="img" aria-label="John Doe"></span>

<span class="fd-avatar fd-avatar--96 fd-avatar--circle fd-avatar--thumbnail" role="img" aria-label="John Doe"></span>
```

### Transparent

```html
<span class="fd-avatar fd-avatar--40 fd-avatar--circle fd-avatar--transparent" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>

<span class="fd-avatar fd-avatar--96 fd-avatar--circle fd-avatar--transparent" aria-label="Wendy Wallace">WW</span>
```

### AccentColors

```html
<span class="fd-avatar fd-avatar--accent-color-1 fd-avatar--40" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-2 fd-avatar--40" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-3 fd-avatar--40" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-4 fd-avatar--40" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-5 fd-avatar--40" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-6 fd-avatar--96" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-7 fd-avatar--96" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-8 fd-avatar--96" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-9 fd-avatar--96" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--96" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/BTP/avatar/avatar.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
