---
component: fd-form-header
title: Components/Forms/Form Header
category: Components
selector: fd-form-header
cssFile: form-header.css
sourcePath: packages/styles/stories/Components/Forms/form-header/form-header.stories.js
tags: []
dependencies: []
relatedComponents: []
stability: stable
generatedAt: 2026-06-08T17:49:02.084Z
---

# Components/Forms/Form Header

Form headers are essentially titles that provide users with more context about a group of input fields. For instance, a form header titled with “Personal information” would categorize input fields with labels: “Name, Address, etc.”

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/form-header.css" rel="stylesheet">

```

## Basic Usage

```html
<div class="fd-form-header">
    <h4 class="fd-form-header__text">Form Header</h4>
</div>
```

## BEM Elements

This component uses the following BEM elements:

- `fd-form-header__text`

## Examples

### Default

Default form headers are displayed in text that does not wrap but truncates into an ellipsis.

```html
<div class="fd-form-header">
    <h4 class="fd-form-header__text">Form Header</h4>
</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/Forms/form-header/form-header.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
