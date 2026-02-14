# Input Component

> **Quick Reference**: Single-line text input field for collecting user data

## Overview

The Input component is a fundamental form element used to collect short text data from users. It supports various states, types, and validation indicators.

## When to Use

✅ **Use Input for:**
- Short text entry (names, emails, numbers)
- Search fields
- Form data collection
- Single-line values

❌ **Don't use Input for:**
- Long-form text → Use [Textarea](../textarea) component
- Selections from a list → Use [Select](../select) component

## Installation

```bash
npm install fundamental-styles
```

## Import

```javascript
import 'fundamental-styles/dist/input.css';
```

## Basic Usage

```html
<input type="text" class="fd-input" placeholder="Enter text" />
```

### With Label (Recommended)
```html
<div class="fd-form-item">
  <label class="fd-form-label" for="input-1">
    Name
  </label>
  <input type="text" class="fd-input" id="input-1" placeholder="Enter your name" />
</div>
```

## Input Types

```html
<!-- Text Input -->
<input type="text" class="fd-input" />

<!-- Email Input -->
<input type="email" class="fd-input" />

<!-- Number Input -->
<input type="number" class="fd-input" />

<!-- Password Input -->
<input type="password" class="fd-input" />

<!-- Search Input -->
<input type="search" class="fd-input" />
```

## States

### Error State
```html
<input type="text" class="fd-input is-error" aria-invalid="true" aria-describedby="error-msg" />
<span id="error-msg" class="fd-form-message fd-form-message--error">
  This field is required
</span>
```

### Success State
```html
<input type="text" class="fd-input is-success" />
```

### Warning State
```html
<input type="text" class="fd-input is-warning" />
```

### Information State
```html
<input type="text" class="fd-input is-information" />
```

### Disabled State
```html
<input type="text" class="fd-input" disabled />
```

### Read-only State
```html
<input type="text" class="fd-input is-readonly" readonly value="Read-only value" />
```

## Modifiers

| Modifier | Description |
|----------|-------------|
| `fd-input--compact` | Compact size variant |
| `is-disabled` | Disabled state (add `disabled` attribute too) |
| `is-readonly` | Read-only state (add `readonly` attribute too) |
| `is-error` | Error/invalid state |
| `is-success` | Success/valid state |
| `is-warning` | Warning state |
| `is-information` | Information state |

## Compact Variant

```html
<input type="text" class="fd-input fd-input--compact" placeholder="Compact input" />
```

## Required Field

```html
<div class="fd-form-item">
  <label class="fd-form-label fd-form-label--required" for="input-required">
    Email
  </label>
  <input
    type="email"
    class="fd-input"
    id="input-required"
    required
    aria-required="true"
  />
</div>
```

## Accessibility

### Required Attributes
```html
<label for="unique-id">Label Text</label>
<input type="text" class="fd-input" id="unique-id" />
```

### ARIA Attributes
- `aria-label="..."` - When no visible label
- `aria-describedby="help-id"` - Link to help text
- `aria-invalid="true"` - For error state
- `aria-required="true"` - For required fields

### Best Practices
- ✅ Always associate with a label using `for` and `id`
- ✅ Provide clear error messages
- ✅ Use appropriate input `type` for better mobile keyboards
- ✅ Include placeholder text as helpful hints (not as labels)

## Validation

### Error with Message
```html
<div class="fd-form-item">
  <label class="fd-form-label fd-form-label--required" for="email-input">
    Email
  </label>
  <input
    type="email"
    class="fd-input is-error"
    id="email-input"
    aria-invalid="true"
    aria-describedby="email-error"
  />
  <span id="email-error" class="fd-form-message fd-form-message--error">
    Please enter a valid email address
  </span>
</div>
```

### Success with Message
```html
<div class="fd-form-item">
  <label class="fd-form-label" for="username-input">
    Username
  </label>
  <input
    type="text"
    class="fd-input is-success"
    id="username-input"
    value="john_doe"
  />
  <span class="fd-form-message fd-form-message--success">
    Username is available
  </span>
</div>
```

## Input Groups

For inputs with icons or buttons, use [Input Group](../input-group) component:

```html
<div class="fd-input-group">
  <input type="text" class="fd-input fd-input-group__input" placeholder="Search" />
  <span class="fd-input-group__addon fd-input-group__addon--button">
    <button class="fd-button" aria-label="Search">
      <i class="sap-icon--search"></i>
    </button>
  </span>
</div>
```

## Related Components

- [Input Group](../input-group) - Input with icons/buttons
- [Textarea](../textarea) - Multi-line text input
- [Select](../select) - Dropdown selection
- [Form Item](../form-item) - Form field container
- [Form Label](../form-label) - Input labels
- [Form Message](../form-message) - Validation messages

## Resources

- **Live Examples**: [Storybook - Input](https://sap.github.io/fundamental-styles/?path=/docs/components-forms-input)
- **Source Code**: [GitHub](https://github.com/SAP/fundamental-styles/tree/main/packages/styles/src/input.scss)
- **Component Catalog**: [component-catalog.json](../../docs/component-catalog.json)

## Design Guidelines

### Best Practices
- ✅ Use appropriate input types for better UX
- ✅ Provide inline validation feedback
- ✅ Keep labels short and descriptive
- ✅ Use placeholder text for format examples
- ✅ Show error messages below the input
- ❌ Don't use placeholder text as labels
- ❌ Don't make inputs too wide (30-40 characters max)

### Input Width Guidelines
- **Short**: Names, codes (10-20 chars)
- **Medium**: Emails, usernames (20-40 chars)
- **Long**: URLs, descriptions (40+ chars, consider textarea)

## Examples

### Email Input with Validation
```html
<div class="fd-form-item">
  <label class="fd-form-label fd-form-label--required" for="email">
    Email Address
  </label>
  <input
    type="email"
    class="fd-input"
    id="email"
    placeholder="name@example.com"
    required
    aria-required="true"
  />
</div>
```

### Number Input with Min/Max
```html
<div class="fd-form-item">
  <label class="fd-form-label" for="age">
    Age
  </label>
  <input
    type="number"
    class="fd-input"
    id="age"
    min="18"
    max="120"
    placeholder="18"
  />
</div>
```

### Search Input
```html
<input
  type="search"
  class="fd-input"
  placeholder="Search..."
  aria-label="Search"
/>
```

---

**Component ID**: `input`
**Category**: Forms
**Package**: `fundamental-styles`
**Version**: 0.41.0+
