---
component: fd-form-item
title: Components/Forms/Form Item
category: Components
selector: fd-form-item
cssFile: form-item.css
sourcePath: packages/styles/stories/Components/Forms/form-item/form-item.stories.js
tags: []
dependencies: []
relatedComponents: []
stability: stable
generatedAt: 2026-05-28T16:47:21.120Z
---

# Components/Forms/Form Item

A form item is a combination of a label and an input field. The label clearly describes the expected input, and is associated with the input for accessibility.

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/form-item.css" rel="stylesheet">

```

## Basic Usage

```html
<div class="fd-form-item">
    <label class="fd-form-label" for="default-input">Full Name:</label>
    <input
    class="fd-input"
    type="text"
    id="default-input"
    name="full-name"
    placeholder="e.g., Jane Doe"
    autocomplete="name">
</div>
```

## Examples

### Default

Use the default form item when the input is optional and does not require additional validation or indication.

```html
<div class="fd-form-item">
    <label class="fd-form-label" for="default-input">Full Name:</label>
    <input
    class="fd-input"
    type="text"
    id="default-input"
    name="full-name"
    placeholder="e.g., Jane Doe"
    autocomplete="name">
</div>
```

### Required

To mark an input as required, use the <code>fd-form-label--required</code> modifier. Also set <code>aria-required="true"</code> on the input to ensure screen readers announce the requirement.

```html
<div class="fd-form-item">
    <label class="fd-form-label fd-form-label--required" for="required-email">Email Address:</label>
    <input
    class="fd-input"
    type="email"
    id="required-email"
    name="email"
    placeholder="e.g., user@example.com"
    autocomplete="email"
    required
    aria-required="true">
</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/Forms/form-item/form-item.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
