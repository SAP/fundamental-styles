---
component: fd-panel
title: Layouts/Margins
category: Layouts
selector: fd-panel
cssFile: panel.css
sourcePath: packages/styles/stories/Layouts/margins/margins.stories.js
tags: []
dependencies: ["margins","panel"]
relatedComponents: ["margins","panel"]
stability: stable
---

# Layouts/Margins

The CSS margin properties are used to create space around elements, outside of any defined borders.
        With CSS, you have full control over the margins. There are properties for setting the margin for each side of an element.
        We now provide a number of predefined margin clases which add predefined margin values.

## Dependencies

This component depends on the following CSS files:

- `margins.css`
- `panel.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/panel.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/margins.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/panel.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="docs-column-flex docs-column-flex--align-start">
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin--tiny">container(tiny)</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin--sm">container(sm)</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin--md">container(md)</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin--lg">container(lg)</div>
    </div>
</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-panel--fixed` | Style variant |

## BEM Elements

This component uses the following BEM elements:

- `fd-panel__header`
- `fd-panel__title`

## Related Components

This component works with or depends on:

- `margins`
- `panel`

## Design Tokens

Key CSS variables used by this component:

- `--borderless`
- `--fdPanel_Border_Radius`
- `--fdPanel_Content_Background_Color`
- `--fdPanel_Content_Border_Bottom_Color`
- `--fdPanel_Content_Border_Bottom_Left_Radius`
- `--fdPanel_Content_Border_Bottom_Right_Radius`
- `--fdPanel_Content_Border_Top_Left_Radius`
- `--fdPanel_Content_Border_Top_Right_Radius`
- `--fdPanel_Content_Padding_Block`
- `--fdPanel_Content_Padding_Inline`
- `--fdPanel_Flex_Direction`
- `--fdPanel_Header_Border_Bottom_Left_Radius`
- `--fdPanel_Header_Border_Bottom_Right_Radius`
- `--fdPanel_Header_Border_Color`
- `--fdPanel_Header_Border_Top_Left_Radius`

*...and 5 more*

## Examples

### All-Round Margin

All-round margin appears on all sides of the container they are applied to. Use \

```html
<div class="docs-column-flex docs-column-flex--align-start">
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin--tiny">container(tiny)</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin--sm">container(sm)</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin--md">container(md)</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin--lg">container(lg)</div>
    </div>
</div>
```

### Single-Sided Margin Top

Single sided margins appear on only one of the sides of the element:

- top - displayed on top of the element
- end - displayed on the right side and in right-to-left mode on the left side of the element
- bottom - displayed on the bottom of the element
- begin - displayed on the left side and in right-to-left mode on the right side of the element.

Use \

```html
<div class="docs-column-flex docs-column-flex--align-start">
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin-top--tiny">container(tiny)</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin-top--sm">container(sm)</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin-top--md">container(md)</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin-top--lg">container(lg)</div>
    </div>
</div>
```

### Single-Sided Margin End

```html
<div class="docs-column-flex docs-column-flex--align-start">
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin-end--tiny">container(tiny)</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin-end--sm">container(sm)</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin-end--md">container(md)</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin-end--lg">container(lg)</div>
    </div>
</div>
```

### Single-Sided Margin Bottom

```html
<div class="docs-column-flex docs-column-flex--align-start">
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin-bottom--tiny">container(tiny)</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin-bottom--sm">container(sm)</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin-bottom--md">container(md)</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin-bottom--lg">container(lg)</div>
    </div>
</div>
```

### Single-Sided Margin Begin

```html
<div class="docs-column-flex docs-column-flex--align-start">
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin-begin--tiny">container(tiny)</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13  fd-margin-begin--sm">container(sm)</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin-begin--md">container(md)</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin-begin--lg">container(lg)</div>
    </div>
</div>
```

### Double-Sided Margin Top-Bottom

Double sided margins appear on two opposite sides of the element.

- top-bottom - displayed on top and bottom of the element
- begin-end - displayed on left and right side of the element

Use \

```html
<div class="docs-column-flex docs-column-flex--align-start">
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin-top-bottom--tiny">container(tiny)</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin-top-bottom--sm">container(sm)</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin-top-bottom--md">container(md)</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin-top-bottom--lg">container(lg)</div>
    </div>
</div>
```

### Double-Sided Margin Begin-End

```html
<div class="docs-column-flex docs-column-flex--align-start">
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin-begin-end--tiny">container(tiny)</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin-begin-end--sm">container(sm)</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin-begin-end--md">container(md)</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin-begin-end--lg">container(lg)</div>
    </div>
</div>
```

### NoMargin

No margin classes remove existing container margins. Use \

```html
<div class="docs-column-flex docs-column-flex--align-start">
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 docs-layout-margins-paddings--margin fd-margin--none">container</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 docs-layout-margins-paddings--margin fd-margin-top--none">container</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        container</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 docs-layout-margins-paddings--margin fd-margin-bottom--none">container</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        container</div>
```

### ResponsiveMargin

The responsive margins class adds a margin around an element based on the width of the container the element is in. Use \

```html
<div class="docs-column-flex docs-column-flex--align-start">
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin-responsive--sm">container(sm)</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin-responsive--md">container(md)</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin-responsive--lg">container(lg)</div>
    </div>
    <div class="docs-layout-margins-paddings--secondary-bg">
        <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-margins-paddings--color-13 fd-margin-responsive--xl">container(xl)</div>
    </div>
</div>
```

### Double-Sided Negative Margin Begin-End

The negative margin class adds a double sided negative margin to an element. This is useful when aligning elements with built-in paddings.
  Use \

```html
<div class="docs-column-flex docs-layout-margins-paddings--padded">
    <div class="fd-panel fd-panel--fixed fd-margin-negative-begin-end--tiny">
        <div class="fd-panel__header">
            <h1 class="fd-panel__title" title="Panel header">Panel header</h1>
        </div>
    </div>

    <div class="fd-panel fd-panel--fixed fd-margin-negative-begin-end--sm">
        <div class="fd-panel__header">
            <h1 class="fd-panel__title" title="Panel header">Panel header</h1>
        </div>
    </div>
    <div class="fd-panel fd-panel--fixed fd-margin-negative-begin-end--md">
        <div class="fd-panel__header">
            <h1 class="fd-panel__title" title="Panel header">Panel header</h1>
        </div>
    </div>
    <div class="fd-panel fd-panel--fixed fd-margin-negative-begin-end--lg">
        <div class="fd-panel__header">
            <h1 class="fd-panel__title" title="Panel header">Panel header</h1>
        </div>
    </div>
</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Layouts/margins/margins.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
