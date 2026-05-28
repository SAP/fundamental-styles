---
component: paddings
title: Layouts/Paddings
category: Layouts
selector: 
cssFile: 
sourcePath: packages/styles/stories/Layouts/paddings/paddings.stories.js
tags: []
dependencies: ["paddings"]
relatedComponents: ["paddings"]
stability: stable
generatedAt: 2026-05-28T16:47:21.423Z
---

# Layouts/Paddings

The CSS padding properties are used to generate space around an element's content, inside of any defined borders.
        With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element.
        We now provide a number of predefined padding clases which add predefined padding values.

## Dependencies

This component depends on the following CSS files:

- `paddings.css`

## Basic Usage

```html
<div class="docs-column-flex docs-column-flex--align-start">
    <div class="docs-layout-margins-paddings--color-14 fd-padding">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-grid-bg--color-7">container</div>
    </div>
</div>
```

## Related Components

This component works with or depends on:

- `paddings`

## Design Tokens

Key CSS variables used by this component:

- `--lg`
- `--md`
- `--none`
- `--sm`
- `--tiny`
- `--xl`

## Examples

### All-Round Padding

All-round padding appears on all sides of the container they are applied to. Use \

```html
<div class="docs-column-flex docs-column-flex--align-start">
    <div class="docs-layout-margins-paddings--color-14 fd-padding">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-grid-bg--color-7">container</div>
    </div>
</div>
```

### Double-Sided Padding

Double sided paddings appear on two opposite sides of the element. Use \

```html
<div class="docs-column-flex docs-column-flex--align-start">
    <div class="docs-layout-margins-paddings--color-14 fd-padding-begin-end--tiny">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-grid-bg--color-7">container(tiny)</div>
    </div>
    <div class="docs-layout-margins-paddings--color-14 fd-padding-begin-end--sm">
        <div class="docs-layout-margins-paddings  docs-layout-margins-paddings--width-sm docs-layout-grid-bg--color-7">container(sm)</div>
    </div>
    <div class="docs-layout-margins-paddings--color-14 fd-padding-begin-end--md">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width-md docs-layout-grid-bg--color-7">container(md)</div>
    </div>
    <div class="docs-layout-margins-paddings--color-14 fd-padding-begin-end--lg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width-lg docs-layout-grid-bg--color-7">container(lg)</div>
    </div>
</div>
```

### NoPadding

No padding classes remove existing container paddings. Use \

```html
<div class="docs-column-flex docs-column-flex--align-start">
    <div class="docs-layout-margins-paddings--color-14 docs-layout-margins-paddings--padded fd-padding--none">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-grid-bg--color-7">container</div>
    </div>
</div>
```

### ResponsivePadding

The responsive padding class adds a double sided padding inside a container based on its width. Use \

```html
<div class="docs-column-flex docs-column-flex--align-start">
    <div class="docs-layout-margins-paddings--color-14 fd-padding-responsive--sm">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width-sm docs-layout-grid-bg--color-7">container(sm)</div>
    </div>
    <div class="docs-layout-margins-paddings--color-14 fd-padding-responsive--md">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width-md docs-layout-grid-bg--color-7">container(md)</div>
    </div>
    <div class="docs-layout-margins-paddings--color-14 fd-padding-responsive--lg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width-md docs-layout-grid-bg--color-7">container(lg)</div>
    </div>
    <div class="docs-layout-margins-paddings--color-14 fd-padding-responsive--xl">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width-lg docs-layout-grid-bg--color-7">container(xl)</div>
    </div>
</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Layouts/paddings/paddings.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
