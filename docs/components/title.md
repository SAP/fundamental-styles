---
component: fd-title
title: Components/Title
category: Components
selector: fd-title
cssFile: title.css
sourcePath: packages/styles/stories/Components/title/title.stories.js
tags: []
dependencies: ["title"]
relatedComponents: ["title"]
stability: stable
generatedAt: 2026-06-01T19:23:59.592Z
---

# Components/Title

A title component whose semantic level and visual appearance can be set separately, providing flexibility in design while adhering to accessibility best practices.

## Dependencies

This component depends on the following CSS files:

- `title.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/title.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/title.css" rel="stylesheet">
```

## Basic Usage

```html
<h1 class="fd-title fd-title--h1">Title Level 1</h1>
<h2 class="fd-title fd-title--h2">Title Level 2</h2>
<h3 class="fd-title fd-title--h3">Title Level 3</h3>
<h4 class="fd-title fd-title--h4">Title Level 4</h4>
<h5 class="fd-title fd-title--h5">Title Level 5</h5>
<h6 class="fd-title fd-title--h6">Title Level 6</h6>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-title--h` | There are 6 semantic levels of a heading element |
| `fd-title--wrap` | Add the `--wrap` modifier to cause the overflow text to wrap instead. |

## Related Components

This component works with or depends on:

- `title`

## Design Tokens

Key CSS variables used by this component:

- `--fdTitle_Color`
- `--fdTitle_Font_Family`
- `--fdTitle_Font_Size`
- `--h1`
- `--h2`
- `--h3`
- `--h4`
- `--h5`
- `--h6`
- `--sapFontHeader1Size`
- `--sapFontHeader2Size`
- `--sapFontHeader3Size`
- `--sapFontHeader4Size`
- `--sapFontHeader5Size`
- `--sapFontHeader6Size`

*...and 4 more*

## Examples

### Semantic Level

There are 6 semantic levels of a heading element. There should only be one H1 on a page, and headings should only appear in ascending order without skipping a level; i.e. even if there are only 3 levels on a page, the order must be H1-H2-H3, and no other levels used.

```html
<h1 class="fd-title fd-title--h1">Title Level 1</h1>
<h2 class="fd-title fd-title--h2">Title Level 2</h2>
<h3 class="fd-title fd-title--h3">Title Level 3</h3>
<h4 class="fd-title fd-title--h4">Title Level 4</h4>
<h5 class="fd-title fd-title--h5">Title Level 5</h5>
<h6 class="fd-title fd-title--h6">Title Level 6</h6>
```

### VisualLevel

If a design requires it, the visual level can be set to something different than the semantic level. This allows the sequential order to be maintained while providing flexibility in appearance.

```html
<h1 class="fd-title fd-title--h6">Title Level 1</h1>
<h2 class="fd-title fd-title--h5">Title Level 2</h2>
<h3 class="fd-title fd-title--h4">Title Level 3</h3>
<h4 class="fd-title fd-title--h3">Title Level 4</h4>
<h5 class="fd-title fd-title--h2">Title Level 5</h5>
<h6 class="fd-title fd-title--h1">Title Level 6</h6>
```

### Text Elision

By default the Title text overflow will be elided when longer than its container.

```html
<h1 class="fd-title fd-title--h1">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
<h2 class="fd-title fd-title--h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
<h3 class="fd-title fd-title--h3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
<h4 class="fd-title fd-title--h4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
<h5 class="fd-title fd-title--h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
<h6 class="fd-title fd-title--h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
```

### Text Wrapping

Add the `--wrap` modifier to cause the overflow text to wrap instead.

```html
<h1 class="fd-title fd-title--h1 fd-title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
<h2 class="fd-title fd-title--h2 fd-title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
<h3 class="fd-title fd-title--h3 fd-title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
<h4 class="fd-title fd-title--h4 fd-title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
<h5 class="fd-title fd-title--h5 fd-title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
<h6 class="fd-title fd-title--h6 fd-title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/title/title.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
