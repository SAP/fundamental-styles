---
component: fd-form-label
title: Components/Step Input
category: Components
selector: fd-form-label
cssFile: form-label.css
sourcePath: packages/styles/stories/Components/step-input/step-input.stories.js
tags: []
dependencies: ["button","form-item","form-label","icon","input","step-input"]
relatedComponents: ["button","form-item","form-label","icon","input","step-input"]
stability: stable
generatedAt: 2026-06-01T19:23:59.850Z
---

# Components/Step Input

The step input control allows the user to change the input values in predefined increments (steps).

##Usage
**Use the step input if:**

- The user needs to adjust amounts, quantities, or other values quickly.
- The user needs to adjust values for a specific step (for example, in a shopping cart).

**Do not use the step input if:**

- The user needs to enter a static number (for example, postal code, phone number, or ID). In this case, use **Input Field** instead.
- You want to display a value that rarely needs to be adjusted and does not pertain to a particular step. In this case, use **Input Field** instead.
- You want the user to enter dates and times. In this case, use the **Date Picker** or **Time Picker** pattern instead.

## Usage Guidelines

**Use the step input if:**

- The user needs to adjust amounts, quantities, or other values quickly.
- The user needs to adjust values for a specific step (for example, in a shopping cart).

## When Not To Use

- The user needs to enter a static number (for example, postal code, phone number, or ID). In this case, use **Input Field** instead.
- You want to display a value that rarely needs to be adjusted and does not pertain to a particular step. In this case, use **Input Field** instead.
- You want the user to enter dates and times. In this case, use the **Date Picker** or **Time Picker** pattern instead.

## Dependencies

This component depends on the following CSS files:

- `button.css`
- `form-item.css`
- `form-label.css`
- `icon.css`
- `input.css`
- `step-input.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/form-label.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/form-item.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/form-label.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/input.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/step-input.css" rel="stylesheet">
```

## Basic Usage

```html
<label class="fd-form-label" for="step-3">Default Step Input</label><div class="fd-step-input">
    <button aria-label="Step down" class="
        fd-button
        fd-button--transparent
        fd-step-input__button" onclick="stepInputValue('step-3', 'down');" tabindex="-1" type="button">
        <i class="sap-icon--less"></i>
    </button>
    <input class="fd-input fd-input--no-number-spinner fd-step-input__input" id="step-3" type="number" value="0" />
    <button aria-label="Step up" class="
        fd-button
        fd-button--transparent
        fd-step-input__button" onclick="stepInputValue('step-3', 'up');" tabindex="-1" type="button">
        <i class="sap-icon--add"></i>
    </button>
</div>
<label class="fd-form-label" for="step-3-focused">Focused Step Input</label><div class="fd-step-input is-focus">
    <button aria-label="Step down" class="
        fd-button
        fd-button--transparent
        fd-step-input__button is-focus" onclick="stepInputValue('step-3-focused', 'down');" tabindex="-1" type="button">
        <i class="sap-icon--less"></i>
    </button>
    <input class="fd-input fd-input--no-number-spinner fd-step-input__input" id="step-3-focused" type="number" value="0" />
    <button aria-label="Step up" class="
        fd-button
        fd-button--transparent
        fd-step-input__button" onclick="stepInputValue('step-3-focused', 'up');" tabindex="-1" type="button">
        <i class="sap-icon--add"></i>
    </button>
</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-form-label--unit-description` | Style variant |

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

## Related Components

This component works with or depends on:

- `button`
- `form-item`
- `form-label`
- `icon`
- `input`
- `step-input`

## Design Tokens

Key CSS variables used by this component:

- `--colon`
- `--disabled`
- `--inline-help`
- `--required`
- `--sapField_RequiredColor`
- `--sapField_TextColor`
- `--sapFontLargeSize`
- `--sapFontSize`
- `--stand-alone`
- `--unit-description`
- `--wrap`

## Examples

### Default

The default step input displays an input field with a plus and minus icon on opposing sides to either increase or decrease the value. It is displayed in cozy mode, which is ideal for mobile and tablet screens.

```html
<label class="fd-form-label" for="step-3">Default Step Input</label><div class="fd-step-input">
    <button aria-label="Step down" class="
        fd-button
        fd-button--transparent
        fd-step-input__button" onclick="stepInputValue('step-3', 'down');" tabindex="-1" type="button">
        <i class="sap-icon--less"></i>
    </button>
    <input class="fd-input fd-input--no-number-spinner fd-step-input__input" id="step-3" type="number" value="0" />
    <button aria-label="Step up" class="
        fd-button
        fd-button--transparent
        fd-step-input__button" onclick="stepInputValue('step-3', 'up');" tabindex="-1" type="button">
        <i class="sap-icon--add"></i>
    </button>
</div>
<label class="fd-form-label" for="step-3-focused">Focused Step Input</label><div class="fd-step-input is-focus">
    <button aria-label="Step down" class="
        fd-button
        fd-button--transparent
        fd-step-input__button is-focus" onclick="stepInputValue('step-3-focused', 'down');" tabindex="-1" type="button">
        <i class="sap-icon--less"></i>
    </button>
    <input class="fd-input fd-input--no-number-spinner fd-step-input__input" id="step-3-focused" type="number" value="0" />
    <button aria-label="Step up" class="
        fd-button
        fd-button--transparent
        fd-step-input__button" onclick="stepInputValue('step-3-focused', 'up');" tabindex="-1" type="button">
        <i class="sap-icon--add"></i>
    </button>
</div>
```

### States

Step input can be displayed in various states such as Success, Information, Error and Warning.

**To display step input in a semantic state, add the following classes to the main elements:**

| State | Class |
| :------ | :----------- |
| Success | \

```html
<label class="fd-form-label" for="step-5">Success Step Input</label><div class="fd-step-input is-success">
    <button aria-label="Step down" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-5', 'down');"
        tabindex="-1" type="button">
        <i class="sap-icon--less"></i>
    </button>
    <input class="
    fd-input
    fd-input--no-number-spinner
    fd-step-input__input
    " id="step-5" type="number" value="0">
    <button aria-label="Step up" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-5', 'up');"
        tabindex="-1" type="button">
        <i class="sap-icon--add"></i>
    </button>
</div>

<label class="fd-form-label" for="step-6">Information Step Input</label><div class="fd-step-input is-information">
    <button aria-label="Step down" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-6', 'down');"
        tabindex="-1" type="button">
        <i class="sap-icon--less"></i>
    </button>
    <input class="
    fd-input
    fd-input--no-number-spinner
    fd-step-input__input
    " id="step-6" type="number" value="0">
    <button aria-label="Step up" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-6', 'up');"
        tabindex="-1" type="button">
        <i class="sap-icon--add"></i>
    </button>
</div>
<label class="fd-form-label" for="step-7">Error Step Input</label><div class="fd-step-input is-error">
    <button aria-label="Step down" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-7', 'down');"
        tabindex="-1" type="button">
        <i class="sap-icon--less"></i>
    </button>
    <input class="
    fd-input
    fd-input--no-number-spinner
    fd-step-input__input
    " id="step-7" type="number" value="0">
    <button aria-label="Step up" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-7', 'up');"
        tabindex="-1" type="button">
        <i class="sap-icon--add"></i>
    </button>
</div>

<label class="fd-form-label" for="step-8">Warning Step Input</label><div class="fd-step-input is-warning">
    <button aria-label="Step down" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-8', 'down');"
        tabindex="-1" type="button">
        <i class="sap-icon--less"></i>
    </button>
    <input class="
    fd-input
    fd-input--no-number-spinner
    fd-step-input__input
    " id="step-8" type="number" value="0">
    <button aria-label="Step up" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-8', 'up');"
        tabindex="-1" type="button">
        <i class="sap-icon--add"></i>
    </button>
</div>
```

### Focused

To enable the focused state add the \

```html
<label class="fd-form-label" for="step-20">Focused Step Input</label><div class="fd-step-input is-focus">
    <button aria-label="Step down" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-20', 'down');"
        tabindex="-1" type="button">
        <i class="sap-icon--less"></i>
    </button>
    <input class="
    fd-input
    fd-input--no-number-spinner
    fd-step-input__input
    " id="step-20" type="number" value="0">
    <button aria-label="Step up" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-20', 'up');"
        tabindex="-1" type="button">
        <i class="sap-icon--add"></i>
    </button>
</div>

<label class="fd-form-label" for="step-5">Success Step Input (Focused)</label><div class="fd-step-input is-success is-focus">
    <button aria-label="Step down" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-5', 'down');"
        tabindex="-1" type="button">
        <i class="sap-icon--less"></i>
    </button>
    <input class="
    fd-input
    fd-input--no-number-spinner
    fd-step-input__input
    " id="step-5" type="number" value="0">
    <button aria-label="Step up" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-5', 'up');"
        tabindex="-1" type="button">
        <i class="sap-icon--add"></i>
    </button>
</div>

<label class="fd-form-label" for="step-6">Information Step Input (Focused)</label><div class="fd-step-input is-information is-focus">
    <button aria-label="Step down" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-6', 'down');"
        tabindex="-1" type="button">
        <i class="sap-icon--less"></i>
    </button>
    <input class="
    fd-input
    fd-input--no-number-spinner
    fd-step-input__input
    " id="step-6" type="number" value="0">
    <button aria-label="Step up" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-6', 'up');"
        tabindex="-1" type="button">
        <i class="sap-icon--add"></i>
    </button>
</div>
<label class="fd-form-label" for="step-7">Error Step Input (Focused)</label><div class="fd-step-input is-error is-focus">
    <button aria-label="Step down" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-7', 'down');"
        tabindex="-1" type="button">
        <i class="sap-icon--less"></i>
    </button>
    <input class="
    fd-input
    fd-input--no-number-spinner
    fd-step-input__input
    " id="step-7" type="number" value="0">
    <button aria-label="Step up" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-7', 'up');"
        tabindex="-1" type="button">
        <i class="sap-icon--add"></i>
    </button>
</div>

<label class="fd-form-label" for="step-8">Warning Step Input (Focused)</label><div class="fd-step-input is-warning is-focus">
    <button aria-label="Step down" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-8', 'down');"
        tabindex="-1" type="button">
        <i class="sap-icon--less"></i>
    </button>
    <input class="
    fd-input
    fd-input--no-number-spinner
    fd-step-input__input
    " id="step-8" type="number" value="0">
    <button aria-label="Step up" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-8', 'up');"
        tabindex="-1" type="button">
        <i class="sap-icon--add"></i>
    </button>
</div>
```

### Disabled

Step input can be disabled by adding the \

```html
<label class="fd-form-label" for="step-13">Disabled Step Input</label><div class="fd-step-input is-disabled">
    <button aria-label="Step down" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-13', 'down');"
        tabindex="-1" type="button">
        <i class="sap-icon--less"></i>
    </button>
    <input class="
    fd-input
    fd-input--no-number-spinner
    fd-step-input__input
    " id="step-13" type="number" value="0" disabled>
    <button aria-label="Step up" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-13', 'up');"
        tabindex="-1" type="button">
        <i class="sap-icon--add"></i>
    </button>
</div>
```

### Read-only

Step input can be displayed as read-only by adding the \

```html
<label class="fd-form-label" for="step-14">Temperature set to</label><div class="fd-form-item fd-form-item--horizontal">
    <div class="fd-step-input is-readonly">
        <button aria-label="Step down" class="
            fd-button
            fd-button--transparent
            fd-step-input__button"
            onclick="stepInputValue('step-14', 'down');"
            tabindex="-1" type="button">
            <i class="sap-icon--less"></i>
        </button>
        <input class="
        fd-input
        fd-input--no-number-spinner
        fd-step-input__input
        " id="step-14" type="number" readonly value="23">
        <button aria-label="Step up" class="
            fd-button
            fd-button--transparent
            fd-step-input__button"
            onclick="stepInputValue('step-14', 'up');"
            tabindex="-1" type="button">
            <i class="sap-icon--add"></i>
        </button>
    </div>
    <span class="fd-form-label fd-form-label--unit-description">Degree Celsius</span>
</div>
```

### FullWidth

For Step Input that takes the whole width of the container element add the \

```html
<label class="fd-form-label" for="step-3f">Default Step Input</label><div class="fd-step-input fd-step-input--full-width">
    <button aria-label="Step down" class="
        fd-button
        fd-button--transparent
        fd-step-input__button" onclick="stepInputValue('step-3f', 'down');" tabindex="-1" type="button">
        <i class="sap-icon--less"></i>
    </button>
    <input class="fd-input fd-input--no-number-spinner fd-step-input__input" id="step-3f" type="number" value="0" />
    <button aria-label="Step up" class="
        fd-button
        fd-button--transparent
        fd-step-input__button" onclick="stepInputValue('step-3f', 'up');" tabindex="-1" type="button">
        <i class="sap-icon--add"></i>
    </button>
</div>

<label class="fd-form-label" for="step-5f">Success Step Input</label><div class="fd-step-input is-success fd-step-input--full-width">
    <button aria-label="Step down" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-5f', 'down');"
        tabindex="-1" type="button">
        <i class="sap-icon--less"></i>
    </button>
    <input class="
    fd-input
    fd-input--no-number-spinner
    fd-step-input__input
    " id="step-5f" type="number" value="0">
    <button aria-label="Step up" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-5f', 'up');"
        tabindex="-1" type="button">
        <i class="sap-icon--add"></i>
    </button>
</div>

<label class="fd-form-label" for="step-6f">Information Step Input</label><div class="fd-step-input is-information fd-step-input--full-width">
    <button aria-label="Step down" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-6f', 'down');"
        tabindex="-1" type="button">
        <i class="sap-icon--less"></i>
    </button>
    <input class="
    fd-input
    fd-input--no-number-spinner
    fd-step-input__input
    " id="step-6f" type="number" value="0">
    <button aria-label="Step up" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-6f', 'up');"
        tabindex="-1" type="button">
        <i class="sap-icon--add"></i>
    </button>
</div>

<label class="fd-form-label" for="step-7f">Error Step Input</label><div class="fd-step-input is-error fd-step-input--full-width">
    <button aria-label="Step down" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-7f', 'down');"
        tabindex="-1" type="button">
        <i class="sap-icon--less"></i>
    </button>
    <input class="
    fd-input
    fd-input--no-number-spinner
    fd-step-input__input
    " id="step-7f" type="number" value="0">
    <button aria-label="Step up" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-7f', 'up');"
        tabindex="-1" type="button">
        <i class="sap-icon--add"></i>
    </button>
</div>

<label class="fd-form-label" for="step-8f">Warning Step Input</label><div class="fd-step-input is-warning fd-step-input--full-width">
    <button aria-label="Step down" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-8f', 'down');"
        tabindex="-1" type="button">
        <i class="sap-icon--less"></i>
    </button>
    <input class="
    fd-input
    fd-input--no-number-spinner
    fd-step-input__input
    " id="step-8f" type="number" value="0">
    <button aria-label="Step up" class="
        fd-button
        fd-button--transparent
        fd-step-input__button"
        onclick="stepInputValue('step-8f', 'up');"
        tabindex="-1" type="button">
        <i class="sap-icon--add"></i>
    </button>
</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/step-input/step-input.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
