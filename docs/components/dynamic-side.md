---
component: fd-dynamic-side
title: Layouts/Dynamic Side Content
category: Layouts
selector: fd-dynamic-side
cssFile: dynamic-side.css
sourcePath: packages/styles/stories/Layouts/dynamic-side-content/dynamic-side-content.stories.js
tags: []
dependencies: ["dynamic-side-content"]
relatedComponents: ["dynamic-side-content"]
stability: stable
generatedAt: 2026-05-28T20:12:00.971Z
---

# Layouts/Dynamic Side Content

Dynamic side content is a layout control that displays supplemental content in a separate area to support the users' understanding of the main content displayed.

**The dynamic side content consists of two elements:**

*  \

## Dependencies

This component depends on the following CSS files:

- `dynamic-side-content.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/dynamic-side.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/dynamic-side-content.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-dynamic-side">
    <div class="fd-dynamic-side__side">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">Side</div>
    </div>
    <div class="fd-dynamic-side__main">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9">Main</div>
    </div>
</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-dynamic-side--below` | To display side content below the main content area, keep `fd-dynamic-side__side` as the last child element and add the `fd-dynamic-side--below` modifier class. |
| `fd-dynamic-side--equal-split` | The equal split mode provides users with a 50:50 view of the main content and side content, which enables users to show more data i.e |
| `fd-dynamic-side--md` | Style variant |
| `fd-dynamic-side--sm` | To display the dynamic side content for specific screen sizes, use the respective modifier classes:

| Size &nbsp;&nbsp; | Modifier class &nbsp;&nbsp; |
| :--- |:--- |
| Small &nbsp;&nbsp; | \ |
| `fd-dynamic-side--xl` | Style variant |

## BEM Elements

This component uses the following BEM elements:

- `fd-dynamic-side__main`
- `fd-dynamic-side__side`

## Related Components

This component works with or depends on:

- `dynamic-side-content`

## Examples

### Left

To display side content from the left, put `fd-dynamic-side__side` as the first child element of `fd-dynamic-side`.

```html
<div class="fd-dynamic-side">
    <div class="fd-dynamic-side__side">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">Side</div>
    </div>
    <div class="fd-dynamic-side__main">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9">Main</div>
    </div>
</div>
```

### Right

To display side content from the right, put `fd-dynamic-side__side` as the second child element of `fd-dynamic-side`.

```html
<div class="fd-dynamic-side">
    <div class="fd-dynamic-side__main">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9">Main</div>
    </div>
    <div class="fd-dynamic-side__side">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">Side</div>
    </div>
</div>
```

### Below

To display side content below the main content area, keep `fd-dynamic-side__side` as the last child element and add the `fd-dynamic-side--below` modifier class.

```html
<div class="fd-dynamic-side fd-dynamic-side--below">
    <div class="fd-dynamic-side__main">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9">Main</div>
    </div>
    <div class="fd-dynamic-side__side">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">Side</div>
    </div>
</div>
```

### Equal split

The equal split mode provides users with a 50:50 view of the main content and side content, which enables users to show more data i.e. for comparison purposes. To enable equal split mode, add the `fd-dynamic-side--equal-split` modifier class to the container.

```html
<div class="fd-dynamic-side fd-dynamic-side--equal-split">
    <div class="fd-dynamic-side__main">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9">Main</div>
    </div>
    <div class="fd-dynamic-side__side">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">Side</div>
    </div>
</div>
```

### Responsiveness

To display the dynamic side content for specific screen sizes, use the respective modifier classes:

| Size &nbsp;&nbsp; | Modifier class &nbsp;&nbsp; |
| :--- |:--- |
| Small &nbsp;&nbsp; | \

```html
<h4>On extra large screens, the main content area occupies 75% of the width.</h4>
<div class="fd-dynamic-side fd-dynamic-side--xl">
    <div class="fd-dynamic-side__side">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">Side</div>
    </div>
    <div class="fd-dynamic-side__main">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9">Main</div>
    </div>
</div>
<h4>On medium-sized screens, the main content area occupies 66.66% of the width.</h4>
<div class="fd-dynamic-side fd-dynamic-side--md">
    <div class="fd-dynamic-side__side">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">Side</div>
    </div>
    <div class="fd-dynamic-side__main">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9">Main</div>
    </div>
</div>
<h4>On small screens, the main content area occupies 100% of the width and the side content is hidden.</h4>
<div class="fd-dynamic-side fd-dynamic-side--sm">
    <div class="fd-dynamic-side__side">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">Side</div>
    </div>
    <div class="fd-dynamic-side__main">
        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9">Main</div>
    </div>
</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Layouts/dynamic-side-content/dynamic-side-content.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
