---
component: label
title: Patterns/Label
category: patterns
selector: 
cssFile: 
sourcePath: packages/common-css/stories/patterns/label/label.stories.js
tags: []
dependencies: ["sap-label"]
relatedComponents: ["sap-label"]
stability: stable
generatedAt: 2026-05-28T16:47:21.417Z
---

# Patterns/Label

The following classes and mixin provide a way to style your labels per SAP design. 
<br><br>
<b>CSS Classes: </b><br><br>
<code>.sap-label</code><br>
<code>.sap-label-required</code><br>
<code>.sap-label-colon</code><br>
<code>.sap-label-colon-required</code><br><br><br>
<b>SCSS Mixin: </b>
<code>@include sap-label(<i style="color: red;">$required, $colon</i>)</code><br>
where <i style="color: red;">$required</i> and <i style="color: red;">$colon</i> are optional and can be set individually. <br>
- <code>@include sap-label($required: true)</code>: to display a label with asterisk<br>
- <code>@include sap-label($colon: true)</code>: to display a label with colon<br>
- <code>@include sap-label($required: true, $colon: true)</code>: to display a label with asterisk and colon<br>

## Dependencies

This component depends on the following CSS files:

- `sap-label.css`

## Basic Usage

```html
<label class="sap-label">Default Label</label>
<label class="sap-label-required">Required Label</label>
<label class="sap-label-colon">Colon Label</label>
<label class="sap-label-colon-required">Required Colon Label</label>
```

## Related Components

This component works with or depends on:

- `sap-label`

## Examples

### Examples

```html
<label class="sap-label">Default Label</label>
<label class="sap-label-required">Required Label</label>
<label class="sap-label-colon">Colon Label</label>
<label class="sap-label-colon-required">Required Colon Label</label>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/common-css/stories/patterns/label/label.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
