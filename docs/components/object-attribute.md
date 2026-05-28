---
component: fd-object-attribute
title: Dev/Object Attribute
category: Dev
selector: fd-object-attribute
cssFile: object-attribute.css
sourcePath: packages/styles/stories/Dev/object-attribute/object-attribute.stories.js
tags: []
dependencies: []
relatedComponents: []
stability: experimental
generatedAt: 2026-05-28T20:12:00.926Z
---

# Dev/Object Attribute

> **🧪 EXPERIMENTAL**: This component is experimental and its API may change.



## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/object-attribute.css" rel="stylesheet">

```

## Basic Usage

```html
<div class="fd-object-attribute" id="standardtext">Standard Object Attribute Text</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-object-attribute--link` | Style variant |

## Design Tokens

Key CSS variables used by this component:

- `--link`
- `--sapContent_DisabledOpacity`
- `--sapContent_LabelColor`
- `--sapLinkColor`
- `--sapLink_Hover_Color`
- `--sapLink_Visited_Color`

## Examples

### Text

```html
<div class="fd-object-attribute" id="standardtext">Standard Object Attribute Text</div>
```

### TextWithLink

```html
<a id="textwithlink" href="#" class="fd-object-attribute--link" tabindex="0">Text With Link</a>
```

### DisabledLink

```html
<a id="disabledlink" class="fd-object-attribute fd-object-attribute--link" aria-disabled="true">Disabled Object Attribute linked Text</a>
```

### TruncatedText

```html
<span id="truncated" class="fd-object-attribute" title="Truncate Very long Object Attribute Text">Truncate Very long Object Attribute Text</span>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Dev/object-attribute/object-attribute.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
