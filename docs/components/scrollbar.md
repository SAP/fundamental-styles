---
component: fd-scrollbar
title: Components/Scrollbar
category: Components
selector: fd-scrollbar
cssFile: scrollbar.css
sourcePath: packages/styles/stories/Components/scrollbar/scrollbar.stories.js
tags: []
dependencies: ["scrollbar"]
relatedComponents: ["scrollbar"]
stability: stable
generatedAt: 2026-05-28T16:47:20.991Z
---

# Components/Scrollbar

Themeable scrollbar is the scrollbar component made accordingly to the Fiori 3 design guidelines.
Using the themeable scrollbar is preferred over the browser's default in the components that support having scrollbars and made accordingly to the Fiori 3 design guidelines.
Themeable scrollbar works in Chrome, Safari, and other WebKit-based browsers and partially works in Firefox (no hover effects).
Component not working in the IE, default scrollbar is shown instead.

## Dependencies

This component depends on the following CSS files:

- `scrollbar.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/scrollbar.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/scrollbar.css" rel="stylesheet">
```

## Basic Usage

```html

```

## Related Components

This component works with or depends on:

- `scrollbar`

## Design Tokens

Key CSS variables used by this component:

- `--container`
- `--fdScrollbar_Border_Radius`
- `--fdScrollbar_Track_Color`

## Examples

### Default

To use themeable scrollbar use \

```html

```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/scrollbar/scrollbar.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
