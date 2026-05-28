---
component: fd-form-item
title: Components/Forms/Form Label
category: Components
selector: fd-form-item
cssFile: form-item.css
sourcePath: packages/styles/stories/Components/Forms/form-label/form-label.stories.js
tags: []
dependencies: []
relatedComponents: []
stability: stable
generatedAt: 2026-06-01T19:23:59.990Z
---

# Components/Forms/Form Label

Form labels are used to identify form elements such as input fields, checkboxes and radio buttons. This component is best used as a child element of the **Form Item** component.

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
    <label class="fd-form-label" for="default-input">Full Name</label>
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

Use the default form label when the field is optional and does not require special styling or behavior.

```html
<div class="fd-form-item">
    <label class="fd-form-label" for="default-input">Full Name</label>
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

To visually and programmatically indicate a required field, add the <code>fd-form-label--required</code> modifier to the label and use the <code>required</code> and <code>aria-required="true"</code> attributes on the input.

```html
<div class="fd-form-item">
    <label class="fd-form-label fd-form-label--required" for="required-email">Email Address</label>
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

### Colon

To display a label with a colon, add the <code>fd-form-label--colon</code> modifier.

```html
<div class="fd-form-item">
    <label class="fd-form-label fd-form-label--colon" for="input-with-colon">Job Title</label>
    <input
    class="fd-input"
    type="text"
    id="input-with-colon"
    name="job-title"
    placeholder="e.g., Software Engineer">
</div>
```

### Disabled

There are 3 ways to visually show that a label is disabled:
1. Add <code>aria-disabled="true"</code>. This communicates to assistive technologies (like screen readers) that the label is representing a disabled UI element.
2. Add <code>is-disabled</code> class to <code>fd-form-label</code> class.
3. Add <code>fd-form-label--disabled</code> modifier class to <code>fd-form-label</code> class.

```html
<div class="fd-form-item">
    <label class="fd-form-label" for="disabled-input" aria-disabled="true">Organization</label>
    <input
    class="fd-input"
    type="text"
    id="disabled-input"
    name="organization"
    value="SAP"
    disabled>
</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/Forms/form-label/form-label.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
