---
component: fd-form-item
title: Components/Forms/Input Group
category: Components
selector: fd-form-item
cssFile: form-item.css
sourcePath: packages/styles/stories/Components/Forms/input-group/input-group.stories.js
tags: []
dependencies: []
relatedComponents: []
stability: stable
generatedAt: 2026-05-28T16:47:21.223Z
---

# Components/Forms/Input Group



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
    <label class="fd-form-label" for="aqwsde111">Amount</label>
    <div class="fd-input-group">
        <span class="fd-input-group__addon" aria-hidden="true">$</span>
        <input
        class="fd-input fd-input-group__input"
        type="text"
        placeholder="Placeholder"
        id="aqwsde111"
        name="amount"
        value="100.00"
        autocomplete="off"
        aria-describedby="input-group-note"
        >
        <div class="fd-input-group__sr-only" id="input-group-note">Enter amount in US dollars</div>
    </div>
</div>
```

## States

| Class | Description |
|-------|-------------|
| `is-disabled` | Disabled state |
| `is-error` | Error state |
| `is-focus` | Focus state |
| `is-information` | Information state |
| `is-readonly` | Readonly state |
| `is-success` | Success state |
| `is-warning` | Warning state |

## Examples

### Default

Basic Input Group with no additional elements or value state modifiers.

```html
<div class="fd-form-item">
    <label class="fd-form-label" for="aqwsde111">Amount</label>
    <div class="fd-input-group">
        <span class="fd-input-group__addon" aria-hidden="true">$</span>
        <input
        class="fd-input fd-input-group__input"
        type="text"
        placeholder="Placeholder"
        id="aqwsde111"
        name="amount"
        value="100.00"
        autocomplete="off"
        aria-describedby="input-group-note"
        >
        <div class="fd-input-group__sr-only" id="input-group-note">Enter amount in US dollars</div>
    </div>
</div>
```

### TextAddOn

An Input Group with a text add-on (e.g., currency or unit). The add-on can be positioned before, after, or on both sides of the input field to clarify the expected value format.

```html
<!-- Left Aligned Text Add-on -->
<div class="fd-form-item">
    <label class="fd-form-label" for="amount-usd-left">Left Aligned Text Add-on</label>
    <div class="fd-input-group">
        <span class="fd-input-group__addon" aria-hidden="true">$</span>
        <input
        class="fd-input fd-input-group__input"
        type="text"
        id="amount-usd-left"
        name="amount-usd-left"
        placeholder="Placeholder"
        value="100"
        autocomplete="off"
        aria-describedby="amount-usd-left-note">
        <div class="fd-input-group__sr-only" id="amount-usd-left-note">
            Enter amount in US dollars
        </div>
    </div>
</div>

<!-- Right Aligned Text Add-on -->
<div class="fd-form-item">
    <label class="fd-form-label" for="amount-euro-right">Right Aligned Text Add-on</label>
    <div class="fd-input-group">
        <input
        class="fd-input fd-input-group__input"
        type="text"
        id="amount-euro-right"
        name="amount-euro-right"
        placeholder="Placeholder"
        value="100"
        autocomplete="off"
        aria-describedby="amount-euro-right-note">
        <span class="fd-input-group__addon" aria-hidden="true">€</span>
        <div class="fd-input-group__sr-only" id="amount-euro-right-note">
            Enter amount in euro
        </div>
    </div>
</div>

<!-- Right Aligned Text Add-on With Right Aligned Input Text -->
<div class="fd-form-item">
    <label class="fd-form-label" for="amount-euro-right-align">Right Aligned Text Add-on With Right Aligned Input Text</label>
    <div class="fd-input-group">
        <input
        class="fd-input fd-input-group__input right-align"
        type="text"
        id="amount-euro-right-align"
        name="amount-euro-right-align"
        value="100"
        autocomplete="off"
        aria-describedby="amount-euro-right-align-note">
        <span class="fd-input-group__addon" aria-hidden="true">€</span>
        <div class="fd-input-group__sr-only" id="amount-euro-right-align-note">
            Enter amount in euro
        </div>
    </div>
</div>

<!-- Left and Right Aligned Text Add-ons -->
<div class="fd-form-item">
    <label class="fd-form-label" for="amount-usd-both">Left and Right Aligned Text Add-ons</label>
    <div class="fd-input-group">
        <span class="fd-input-group__addon" aria-hidden="true">$</span>
        <input
        class="fd-input fd-input-group__input"
        type="text"
        id="amount-usd-both"
        name="amount-usd-both"
        placeholder="Placeholder"
        value="65"
        autocomplete="off"
        aria-describedby="amount-usd-both-note">
        <span class="fd-input-group__addon" aria-hidden="true">.00</span>
        <div class="fd-input-group__sr-only" id="amount-usd-both-note">
            Enter amount in US dollars
        </div>
    </div>
</div>
```

### InputWithIcons

Demonstrates how to use an icon as an add-on. Typically used for visual cues like visibility toggles, status, or type indication.

```html
<!-- Input with icon on the left -->
<div class="fd-form-item">
    <label class="fd-form-label" for="input-icon-left">Input with icon on the left</label>
    <div class="fd-input-group">
        <span class="fd-input-group__addon">
            <span class="sap-icon--employee" role="presentation" aria-hidden="true"></span>
        </span>
        <input
        class="fd-input fd-input-group__input"
        type="text"
        id="input-icon-left"
        name="employee-name"
        placeholder="Name"
        autocomplete="off"
        aria-describedby="input-icon-left-note">
        <div class="fd-input-group__sr-only" id="input-icon-left-note">
            Employee name
        </div>
    </div>
</div>

<!-- Input with icon on the right -->
<div class="fd-form-item">
    <label class="fd-form-label" for="input-icon-right">Input with icon on the right</label>
    <div class="fd-input-group">
        <input
        class="fd-input fd-input-group__input"
        type="text"
        id="input-icon-right"
        name="visibility-toggle"
        placeholder="Enter content"
        autocomplete="off"
        aria-describedby="input-icon-right-note">
        <span class="fd-input-group__addon">
            <span class="sap-icon--hide" role="presentation" aria-hidden="true"></span>
        </span>
        <div class="fd-input-group__sr-only" id="input-icon-right-note">
            Enter content to toggle visibility
        </div>
    </div>
</div>

<!-- Input with icon on the right and right-aligned text -->
<div class="fd-form-item">
    <label class="fd-form-label" for="input-icon-right-align">Input with icon on the right and right aligned input text</label>
    <div class="fd-input-group">
        <input
        class="fd-input fd-input-group__input right-align"
        type="text"
        id="input-icon-right-align"
        name="secure-entry"
        placeholder="Enter content"
        autocomplete="off"
        aria-describedby="input-icon-right-align-note">
        <span class="fd-input-group__addon">
            <span class="sap-icon--hide" role="presentation" aria-hidden="true"></span>
        </span>
        <div class="fd-input-group__sr-only" id="input-icon-right-align-note">
            Right-aligned input for secure entry
        </div>
    </div>
</div>
```

### InputWithActions

An Input Group with a button add-on. Supports buttons with either text or icons, typically used for actions like submit, search, or trigger.

```html
<!-- Input with text add-on button (right) -->
<div class="fd-form-item">
    <label class="fd-form-label" for="input-text-action-right">Input with text add-on</label>
    <div class="fd-input-group">
        <input
        class="fd-input fd-input-group__input"
        type="text"
        id="input-text-action-right"
        name="text-action-right"
        placeholder="Placeholder"
        autocomplete="off"
        value="100">
        <span class="fd-input-group__addon fd-input-group__addon--button">
            <button
                class="fd-input-group__button fd-button fd-button--transparent"
                type="button"
                aria-label="Submit value">
                Submit
            </button>
        </span>
    </div>
</div>

<!-- Input with icon action (right) -->
<div class="fd-form-item">
    <label class="fd-form-label" for="input-icon-action-right">Input with icon action</label>
    <div class="fd-input-group">
        <input
        class="fd-input fd-input-group__input"
        type="text"
        id="input-icon-action-right"
        name="icon-action-right"
        placeholder="Placeholder"
        autocomplete="off"
        value="100">
        <span class="fd-input-group__addon fd-input-group__addon--button">
            <button
                class="fd-input-group__button fd-button fd-button--icon fd-button--transparent"
                type="button"
                aria-label="Show options">
                <i class="sap-icon--navigation-down-arrow" aria-hidden="true" role="presentation"></i>
            </button>
        </span>
    </div>
</div>

<!-- Input with two icon actions (right) -->
<div class="fd-form-item">
    <label class="fd-form-label" for="input-two-icon-actions">Input with 2 icon actions</label>
    <div class="fd-input-group">
        <input
        class="fd-input fd-input-group__input"
        type="text"
        id="input-two-icon-actions"
        name="two-icon-actions"
        placeholder="Placeholder"
        autocomplete="off"
        value="100">
        <span class="fd-input-group__addon fd-input-group__addon--button">
            <button
                class="fd-input-group__button fd-button fd-button--icon fd-button--transparent"
                type="button"
                aria-label="Clear input">
                <i class="sap-icon--decline" aria-hidden="true" role="presentation"></i>
            </button>
        </span>
        <span class="fd-input-group__addon fd-input-group__addon--button">
            <button
                class="fd-input-group__button fd-button fd-button--icon fd-button--transparent"
                type="button"
                aria-label="Search value">
                <i class="sap-icon--search" aria-hidden="true" role="presentation"></i>
            </button>
        </span>
    </div>
</div>

<!-- Input with text action on the left -->
<div class="fd-form-item">
    <label class="fd-form-label" for="input-text-action-left">Input with text action on left</label>
    <div class="fd-input-group">
        <span class="fd-input-group__addon fd-input-group__addon--button">
            <button
                class="fd-input-group__button fd-button fd-button--transparent"
                type="button"
                aria-label="Submit value">
                Action
            </button>
        </span>
        <input
        class="fd-input fd-input-group__input"
        type="text"
        id="input-text-action-left"
        name="text-action-left"
        placeholder="Placeholder"
        autocomplete="off"
        value="100">
    </div>
</div>
```

### States

Input Groups can visually represent different validation or feedback states such as success, error, warning, and information. Use modifier classes like `.is-success`, `.is-error`, `.is-warning`, or `.is-information` on the `.fd-input-group` container.

```html
<div class="fd-form-item">
    <label class="fd-form-label" for="input-success-1">Success</label>
    <div class="fd-input-group is-success">
        <span class="fd-input-group__addon" aria-hidden="true">$</span>
        <input class="fd-input fd-input-group__input" type="text" id="input-success-1" name="amountSuccess"
        value="100" placeholder="Enter amount" autocomplete="off" aria-describedby="input-success-1-note" />
        <div class="fd-input-group__sr-only" id="input-success-1-note">Value State Success</div>
    </div>
</div>

<div class="fd-form-item">
    <label class="fd-form-label" for="input-error-1">Error</label>
    <div class="fd-input-group is-error">
        <input class="fd-input fd-input-group__input" type="text" id="input-error-1" name="amountError" value="100"
        placeholder="Enter value" autocomplete="off" aria-describedby="input-error-1-note" />
        <span class="fd-input-group__addon" aria-hidden="true">
            <span class="sap-icon--hide" role="presentation" aria-hidden="true"></span>
        </span>
        <div class="fd-input-group__sr-only" id="input-error-1-note">Value State Error</div>
    </div>
</div>

<div class="fd-form-item">
    <label class="fd-form-label" for="input-warning-1">Warning</label>
    <div class="fd-input-group is-warning">
        <span class="fd-input-group__addon" aria-hidden="true">$</span>
        <input class="fd-input fd-input-group__input" type="text" id="input-warning-1" name="amountWarning" value="100"
        placeholder="Enter value" autocomplete="off" aria-describedby="input-warning-1-note" />
        <div class="fd-input-group__sr-only" id="input-warning-1-note">Value State Warning</div>
    </div>
</div>

<div class="fd-form-item">
    <label class="fd-form-label" for="input-info-1">Information</label>
    <div class="fd-input-group is-information">
        <input class="fd-input fd-input-group__input" type="text" id="input-info-1" name="infoInput" value="100"
        placeholder="Enter info" autocomplete="off" aria-describedby="input-info-1-note" />
        <span class="fd-input-group__addon fd-input-group__addon--button">
            <button class="fd-input-group__button fd-button fd-button--transparent" aria-label="Submit information input">
                Button
            </button>
        </span>
        <div class="fd-input-group__sr-only" id="input-info-1-note">Value State Information</div>
    </div>
</div>

<div class="fd-form-item">
    <label class="fd-form-label" for="input-disabled-1">Disabled</label>
    <div class="fd-input-group is-disabled">
        <span class="fd-input-group__addon" aria-hidden="true">$</span>
        <input class="fd-input fd-input-group__input" disabled type="text" id="input-disabled-1" name="disabledAmount"
        value="100" placeholder="Disabled input" autocomplete="off" aria-describedby="input-disabled-1-note" />
        <div class="fd-input-group__sr-only" id="input-disabled-1-note">This field cannot be edited</div>
    </div>
</div>

<div class="fd-form-item">
    <label class="fd-form-label" for="input-readonly-1">Read-Only</label>
    <div class="fd-input-group is-readonly">
        <input class="fd-input fd-input-group__input" readonly type="text" id="input-readonly-1" name="readonlyAmount"
        value="100" placeholder="Read-only value" autocomplete="off" aria-describedby="input-readonly-1-note" />
        <span class="fd-input-group__addon fd-input-group__addon--button">
            <button class="fd-input-group__button fd-button fd-button--transparent" aria-label="Submit (read-only)">
                Button
            </button>
        </span>
        <div class="fd-input-group__sr-only" id="input-readonly-1-note">Value cannot be changed</div>
    </div>
</div>
```

### Focus

The focussed state of Input Group is achieved by adding the `.is-focus` class to the parent element with class `.fd-input-group`.

```html
<!-- Default -->
<div class="fd-form-item">
    <label class="fd-form-label" for="input-default">Default</label>
    <div class="fd-input-group is-focus">
        <span class="fd-input-group__addon" aria-hidden="true">$</span>
        <input
        class="fd-input fd-input-group__input"
        type="text"
        id="input-default"
        name="defaultStateFocus"
        value="100"
        placeholder="Placeholder"
        autocomplete="off"
        aria-describedby="input-default-note">
        <div class="fd-input-group__sr-only" id="input-default-note">
            Enter an amount in USD
        </div>
    </div>
</div>

<!-- Error -->
<div class="fd-form-item">
    <label class="fd-form-label" for="input-error">Error State</label>
    <div class="fd-input-group is-error is-focus">
        <input
        class="fd-input fd-input-group__input"
        type="text"
        id="input-error"
        name="errorStateFocus"
        value="100"
        placeholder="Placeholder"
        autocomplete="off"
        aria-describedby="input-error-note">
        <span class="fd-input-group__addon">
            <span class="sap-icon--hide" role="presentation" aria-hidden="true"></span>
        </span>
        <div class="fd-input-group__sr-only" id="input-error-note">
            Value State Error: The entered value is invalid.
        </div>
    </div>
</div>

<!-- Success -->
<div class="fd-form-item">
    <label class="fd-form-label" for="input-success">Success State</label>
    <div class="fd-input-group is-success is-focus">
        <input
        class="fd-input fd-input-group__input"
        type="text"
        id="input-success"
        name="successStateFocus"
        value="100"
        placeholder="Placeholder"
        autocomplete="off"
        aria-describedby="input-success-note">
        <span class="fd-input-group__addon">
            <span class="sap-icon--hide" role="presentation" aria-hidden="true"></span>
        </span>
        <div class="fd-input-group__sr-only" id="input-success-note">
            Value State Success: The value entered is valid.
        </div>
    </div>
</div>

<!-- Warning -->
<div class="fd-form-item">
    <label class="fd-form-label" for="input-warning">Warning State</label>
    <div class="fd-input-group is-warning is-focus">
        <input
        class="fd-input fd-input-group__input"
        type="text"
        id="input-warning"
        name="warningStateFocus"
        value="100"
        placeholder="Placeholder"
        autocomplete="off"
        aria-describedby="input-warning-note">
        <span class="fd-input-group__addon">
            <span class="sap-icon--hide" role="presentation" aria-hidden="true"></span>
        </span>
        <div class="fd-input-group__sr-only" id="input-warning-note">
            Value State Warning: Please double-check this value.
        </div>
    </div>
</div>

<!-- Information -->
<div class="fd-form-item">
    <label class="fd-form-label" for="input-info">Information State</label>
    <div class="fd-input-group is-information is-focus">
        <input
        class="fd-input fd-input-group__input"
        type="text"
        id="input-info"
        name="infoStateFocus"
        value="100"
        placeholder="Placeholder"
        autocomplete="off"
        aria-describedby="input-info-note">
        <span class="fd-input-group__addon">
            <span class="sap-icon--hide" role="presentation" aria-hidden="true"></span>
        </span>
        <div class="fd-input-group__sr-only" id="input-info-note">
            Value State Information: The input is optional.
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

This documentation was automatically generated from: `packages/styles/stories/Components/Forms/input-group/input-group.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
