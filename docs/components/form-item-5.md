---
component: fd-form-item
title: Components/Forms/Form Message
category: Components
selector: fd-form-item
cssFile: form-item.css
sourcePath: packages/styles/stories/Components/Forms/form-message/form-message.stories.js
tags: []
dependencies: []
relatedComponents: []
stability: stable
generatedAt: 2026-05-28T20:12:00.659Z
---

# Components/Forms/Form Message

The input control offers four value states, for which can be shown an additional value state text message when the focus is on the input field.


##Modifier classes.

Apply the following modifier classes to the \

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
    <label class="fd-form-label" for="input-success-field">Email Address</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="success-message" aria-expanded="true" aria-haspopup="true">
            <input
            class="fd-input is-success"
            type="email"
            id="input-success-field"
            placeholder="e.g., user@example.com"
            autocomplete="off"
            aria-describedby="input-success-message success-message"
            >
            <div class="fd-input__sr-only" id="input-success-message">Value State Success</div>
        </div>
        <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" id="success-message">
            <div class="fd-form-message fd-form-message--success">Email address looks good.</div>
        </div>
    </div>
</div>
```

## States

| Class | Description |
|-------|-------------|
| `is-error` | Error state |
| `is-information` | Information state |
| `is-success` | Success state |
| `is-warning` | Warning state |

## Examples

### Success

```html
<div class="fd-form-item">
    <label class="fd-form-label" for="input-success-field">Email Address</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="success-message" aria-expanded="true" aria-haspopup="true">
            <input
            class="fd-input is-success"
            type="email"
            id="input-success-field"
            placeholder="e.g., user@example.com"
            autocomplete="off"
            aria-describedby="input-success-message success-message"
            >
            <div class="fd-input__sr-only" id="input-success-message">Value State Success</div>
        </div>
        <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" id="success-message">
            <div class="fd-form-message fd-form-message--success">Email address looks good.</div>
        </div>
    </div>
</div>
```

### Error

```html
<div class="fd-form-item">
    <label class="fd-form-label" for="input-error-field">Username</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="error-message" aria-expanded="true" aria-haspopup="true">
            <input
            class="fd-input is-error"
            type="text"
            id="input-error-field"
            placeholder="e.g., johndoe123"
            autocomplete="off"
            aria-describedby="input-error-message error-message"
            aria-invalid="true"
            >
            <div class="fd-input__sr-only" id="input-error-message">Value State Error</div>
        </div>
        <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" id="error-message">
            <div class="fd-form-message fd-form-message--error">Username must be at least 6 characters.</div>
        </div>
    </div>
</div>
```

### Warning

```html
<div class="fd-form-item">
    <label class="fd-form-label" for="input-warning-field">Security Answer</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="warn-message" aria-expanded="true" aria-haspopup="true">
            <input
            class="fd-input is-warning"
            type="text"
            id="input-warning-field"
            placeholder="e.g., Your first pet's name"
            autocomplete="off"
            aria-describedby="input-warn-message warn-message"
            >
            <div class="fd-input__sr-only" id="input-warn-message">Value State Warning</div>
        </div>
        <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" id="warn-message">
            <div class="fd-form-message fd-form-message--warning">Make sure this is easy for you to remember.</div>
        </div>
    </div>
</div>
```

### Information

```html
<div class="fd-form-item">
    <label class="fd-form-label" for="input-info-field">Additional Notes</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="info-message" aria-expanded="true" aria-haspopup="true">
            <input
            class="fd-input is-information"
            type="text"
            id="input-info-field"
            placeholder="Optional"
            autocomplete="off"
            aria-describedby="input-info-message info-message"
            >
            <div class="fd-input__sr-only" id="input-info-message">Value State Information</div>
        </div>
        <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" id="info-message">
            <div class="fd-form-message fd-form-message--information">You can leave this blank if not applicable.</div>
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

This documentation was automatically generated from: `packages/styles/stories/Components/Forms/form-message/form-message.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
