---
component: fd-off-screen
title: Dev/Off Screen
category: Dev
selector: fd-off-screen
cssFile: off-screen.css
sourcePath: packages/styles/stories/Dev/off-screen/off-screen.stories.js
tags: ["a11y"]
dependencies: ["off-screen","text"]
relatedComponents: ["off-screen","text"]
stability: experimental
generatedAt: 2026-06-01T19:24:00.258Z
---

# Dev/Off Screen

> **🧪 EXPERIMENTAL**: This component is experimental and its API may change.

For aria-live to read any change in element, we need to place element but it should not be visible to user.
            At the same time, it can not be made \

## Dependencies

This component depends on the following CSS files:

- `off-screen.css`
- `text.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/off-screen.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/off-screen.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/text.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-off-screen" aria-live="polite">
    This will be read, whenever this element changes.
</div>
<div class="fd-text">Text with aria-live is kept far left of the screen. so it will not be visible, but it will be read by screen reader.</div>
```

## Related Components

This component works with or depends on:

- `off-screen`
- `text`

## Examples

### Primary

For aria-live to read any change in element, we need to place element but it should not be visible to user.

```html
<div class="fd-off-screen" aria-live="polite">
    This will be read, whenever this element changes.
</div>
<div class="fd-text">Text with aria-live is kept far left of the screen. so it will not be visible, but it will be read by screen reader.</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Dev/off-screen/off-screen.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
