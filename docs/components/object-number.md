---
component: fd-object-number
title: Components/Object Number
category: Components
selector: fd-object-number
cssFile: object-number.css
sourcePath: packages/styles/stories/Components/object-number/object-number.stories.js
tags: []
dependencies: ["object-number"]
relatedComponents: ["object-number"]
stability: stable
generatedAt: 2026-05-28T20:12:00.624Z
---

# Components/Object Number

An object number represents a numeric attribute of an object and its unit. The object number should be displayed with semantics to provide more insight to the user about the object's value.

##Accessibility
Make sure that the object number is properly described and semantically understandable. For instance, if the color is describing the object number as negative, ensure that it is accompanied by either an icon, label, unit or attribute. Color should not be the only way the value state of the object is conveyed to the user.

##Usage
**Use the object number if:**

- You want to display the key number of an object.
- You need to display one or more numeric attributes of an object (for example, for objects you want to compare).

**Emphasize (bold) the object number if:**

- You want to represent the key numeric attributes on the page.
- It is being used as a line item status in a table.

**Do not use the object number if:**

- You want to display system messages.
- They are for decorative purposes only.

## Usage Guidelines

**Use the object number if:**

- You want to display the key number of an object.
- You need to display one or more numeric attributes of an object (for example, for objects you want to compare).

## When Not To Use

- You want to display system messages.
- They are for decorative purposes only.

## Dependencies

This component depends on the following CSS files:

- `object-number.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/object-number.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/object-number.css" rel="stylesheet">
```

## Basic Usage

```html
<span class="fd-object-number fd-object-number--negative">
    <span class="fd-object-number__text">-2,000.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Value State Error</span>
</span>
<span class="fd-object-number fd-object-number--critical">
    <span class="fd-object-number__text">0.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Value State Warning</span>
</span>
<span class="fd-object-number fd-object-number--positive">
    <span class="fd-object-number__text">1,000.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Value State Success</span>
</span>
<span class="fd-object-number fd-object-number--informative">
    <span class="fd-object-number__text">100.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Value State Information</span>
</span>
<span class="fd-object-number">
    <span class="fd-object-number__text">999.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Value State Neutral</span>
</span>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-object-number--critical` | Style variant |
| `fd-object-number--informative` | Style variant |
| `fd-object-number--interactive` | To make an object number interactive, add the \ |
| `fd-object-number--inverted` | To display the object number with an inverted style, add the \ |
| `fd-object-number--large` | In some cases, it can be useful to enlarge the text for the object number |
| `fd-object-number--negative` | Style variant |
| `fd-object-number--positive` | There are different semantic statuses that can be applied to the object number by adding a modifier class |

## BEM Elements

This component uses the following BEM elements:

- `fd-object-number__sr-only`
- `fd-object-number__text`
- `fd-object-number__text--bold`
- `fd-object-number__unit`

## Related Components

This component works with or depends on:

- `object-number`

## Design Tokens

Key CSS variables used by this component:

- `--bold`
- `--fdObjectNumber_Background`
- `--fdObjectNumber_Border`
- `--fdObjectNumber_Border_Color`
- `--fdObjectNumber_Border_Radius`
- `--fdObjectNumber_Color`
- `--fdObjectNumber_Cursor`
- `--fdObjectNumber_Font_Family`
- `--fdObjectNumber_Font_Size`
- `--fdObjectNumber_Line_Height`
- `--fdObjectNumber_Min_Height`
- `--fdObjectNumber_Padding`
- `--fdObjectNumber_Text_Decoration`
- `--fdObjectNumber_Text_Font_Weight`
- `--fdObjectNumber_Text_Shadow`

*...and 5 more*

## Examples

### SemanticStatus

There are different semantic statuses that can be applied to the object number by adding a modifier class.

| **Status** | **Modifier class**                  | 
| ----------: | :-------------------------------   |
| Neutral     |   none (default)                     |
| Positive    | \

```html
<span class="fd-object-number fd-object-number--negative">
    <span class="fd-object-number__text">-2,000.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Value State Error</span>
</span>
<span class="fd-object-number fd-object-number--critical">
    <span class="fd-object-number__text">0.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Value State Warning</span>
</span>
<span class="fd-object-number fd-object-number--positive">
    <span class="fd-object-number__text">1,000.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Value State Success</span>
</span>
<span class="fd-object-number fd-object-number--informative">
    <span class="fd-object-number__text">100.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Value State Information</span>
</span>
<span class="fd-object-number">
    <span class="fd-object-number__text">999.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Value State Neutral</span>
</span>
```

### Large

In some cases, it can be useful to enlarge the text for the object number. To display the object number in large text, add the \

```html
<span class="fd-object-number fd-object-number--large fd-object-number--negative">
    <span class="fd-object-number__text">-2,000.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Value State Error</span>
</span>
<span class="fd-object-number fd-object-number--large fd-object-number--critical">
    <span class="fd-object-number__text">0.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Value State Warning</span>
</span>
<span class="fd-object-number fd-object-number--large fd-object-number--positive">
    <span class="fd-object-number__text">1,000.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Value State Success</span>
</span>
<span class="fd-object-number fd-object-number--large fd-object-number--informative">
    <span class="fd-object-number__text">100.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Value State Information</span>
</span>
<span class="fd-object-number fd-object-number--large">
    <span class="fd-object-number__text">999.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Value State Neutral</span>
</span>
```

### Bold

When there is a key numeric attribute on the page, it should be emphasized in bold text. To display the object number in bold text, add the \

```html
<span class="fd-object-number fd-object-number--negative">
    <span class="fd-object-number__text fd-object-number__text--bold">-2,000.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Emphasized, Value State Error</span>
</span>
<span class="fd-object-number fd-object-number--critical">
    <span class="fd-object-number__text fd-object-number__text--bold">0.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Emphasized, Value State Warning</span>
</span>
<span class="fd-object-number fd-object-number--positive">
    <span class="fd-object-number__text fd-object-number__text--bold">1,000.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Emphasized, Value State Success</span>
</span>
<span class="fd-object-number fd-object-number--informative">
    <span class="fd-object-number__text fd-object-number__text--bold">100.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Emphasized, Value State Information</span>
</span>
<span class="fd-object-number">
    <span class="fd-object-number__text fd-object-number__text--bold">999.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Emphasized, Value State Neutral</span>
</span>
```

### Interactive

To make an object number interactive, add the \

```html
<span class="fd-object-number fd-object-number--interactive fd-object-number--negative" role="button" tabindex="0">
    <span class="fd-object-number__text">-2,000.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Value State Error</span>
</span>
<span class="fd-object-number fd-object-number--interactive fd-object-number--critical" role="button" tabindex="0">
    <span class="fd-object-number__text">0.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Value State Warning</span>
</span>
<span class="fd-object-number fd-object-number--interactive fd-object-number--positive" role="button" tabindex="0">
    <span class="fd-object-number__text">1,000.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Value State Success</span>
</span>
<span class="fd-object-number fd-object-number--interactive fd-object-number--informative" role="button" tabindex="0">
    <span class="fd-object-number__text">100.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Value State Information</span>
</span>
<span class="fd-object-number fd-object-number--interactive" role="button" tabindex="0">
    <span class="fd-object-number__text">999.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Value State Neutral</span>
</span>
```

### Inverted

To display the object number with an inverted style, add the \

```html
<span class="fd-object-number fd-object-number--inverted fd-object-number--negative">
    <span class="fd-object-number__text">-2,000.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Value State Error</span>
</span>
<span class="fd-object-number fd-object-number--inverted fd-object-number--critical">
    <span class="fd-object-number__text">0.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Value State Warning</span>
</span>
<span class="fd-object-number fd-object-number--inverted fd-object-number--positive">
    <span class="fd-object-number__text">1,000.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Value State Success</span>
</span>
<span class="fd-object-number fd-object-number--inverted fd-object-number--informative">
    <span class="fd-object-number__text">100.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Value State Information</span>
</span>
<span class="fd-object-number fd-object-number--inverted">
    <span class="fd-object-number__text">999.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Value State Neutral</span>
</span>
```

### InvertedInteractive

To make an object number interactive, add the \

```html
<span class="fd-object-number fd-object-number--inverted fd-object-number--interactive fd-object-number--negative" role="button" tabindex="0">
    <span class="fd-object-number__text">-2,000.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Value State Error</span>
</span>
<span class="fd-object-number fd-object-number--inverted fd-object-number--interactive fd-object-number--critical" role="button" tabindex="0">
    <span class="fd-object-number__text">0.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Value State Warning</span>
</span>
<span class="fd-object-number fd-object-number--inverted fd-object-number--interactive fd-object-number--positive" role="button" tabindex="0">
    <span class="fd-object-number__text">1,000.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Value State Success</span>
</span>
<span class="fd-object-number fd-object-number--inverted fd-object-number--interactive fd-object-number--informative" role="button" tabindex="0">
    <span class="fd-object-number__text">100.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Value State Information</span>
</span>
<span class="fd-object-number fd-object-number--inverted fd-object-number--interactive" role="button" tabindex="0">
    <span class="fd-object-number__text">999.00</span><span class="fd-object-number__unit">EUR</span>
    <span class="fd-object-number__sr-only">Value State Neutral</span>
</span>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/object-number/object-number.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
