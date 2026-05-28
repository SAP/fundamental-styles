---
component: fd-fieldset
title: Components/Forms/Checkbox
category: Components
selector: fd-fieldset
cssFile: fieldset.css
sourcePath: packages/styles/stories/Components/Forms/checkbox/checkbox.stories.js
tags: []
dependencies: []
relatedComponents: []
stability: stable
generatedAt: 2026-05-28T16:47:21.081Z
---

# Components/Forms/Checkbox

A checkbox lets the user set a binary value such as “true/false”. When the user selects the checkbox, it toggles between:

- **Checked**: the state described by the checkbox text applies, or that the item has been chosen.
- **Un-checked**: the state described by the checkbox is not applied.
- **Tri-state**: a state that indicates it is neither checked nor unchecked. JavaScript must be used to set the input's 'indeterminate' property to true. The main purpose of the tri-state is to represent a mixed selection of states of dependent input fields. If some (but not all) of the dependent fields are selected, the checkbox shows a partially selected state. This is only a visual state and can’t be achieved by a direct user interaction. In this example the indeterminate state is set on page load.

Note: With checkboxes, all options are visible, and the user can make one or more selections.

##Usage
**Use the checkbox if:**

- Only one option can be selected or deselected, for example to accept terms of use. Use it only if the meaning is obvious.
- A group or a list of options can be selected independently of each other.
- the options are displayed right away without any user interaction.
- An intermediate selection state (tri-state) is required when multiple sub-options are grouped under a parent option. The tri-state will represent that multiple (but not all) sub-options are selected in the list.

**Do not use the checkbox if:**

- The user needs to choose multiple options from a large list. Use a **Combo Box Input** instead.
- The user can choose only one option from a list. Use **Radio Buttons**, a **Select**, or a **List** instead.
- The user needs to perform instantaneous actions that do not need reviewing or confirming. Consider using a **Switch** instead.
- There is not enough space available on the screen. Use a **Combo Box** instead.

## Usage Guidelines

**Use the checkbox if:**

- Only one option can be selected or deselected, for example to accept terms of use. Use it only if the meaning is obvious.
- A group or a list of options can be selected independently of each other.
- the options are displayed right away without any user interaction.
- An intermediate selection state (tri-state) is required when multiple sub-options are grouped under a parent option. The tri-state will represent that multiple (but not all) sub-options are selected in the list.

## When Not To Use

- The user needs to choose multiple options from a large list. Use a **Combo Box Input** instead.
- The user can choose only one option from a list. Use **Radio Buttons**, a **Select**, or a **List** instead.
- The user needs to perform instantaneous actions that do not need reviewing or confirming. Consider using a **Switch** instead.
- There is not enough space available on the screen. Use a **Combo Box** instead.

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/fieldset.css" rel="stylesheet">

```

## Basic Usage

```html
<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Required checkbox</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez61rc" aria-required="true">
            <label class="fd-checkbox__label fd-checkbox__label--required" for="Ai4ez61rc">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Required Checkbox</span>
                </span>
            </label>
        </div>
    </div>
</fieldset>
```

## BEM Elements

This component uses the following BEM elements:

- `fd-fieldset__legend`

## Examples

### Required

To show that a checkbox input is required, use the \

```html
<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Required checkbox</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez61rc" aria-required="true">
            <label class="fd-checkbox__label fd-checkbox__label--required" for="Ai4ez61rc">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Required Checkbox</span>
                </span>
            </label>
        </div>
    </div>
</fieldset>
```

### Inline

Checkboxes can display horizontally in a line. To display them this way, add the `fd-checkbox__label--inline` modifier class to the element.

```html
<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Inline checkboxes</legend>
    <div class="fd-form-group fd-form-group--inline">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez619" disabled checked aria-disabled="true">
            <label class="fd-checkbox__label" for="Ai4ez619">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Carrots</span>
                </span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez617">
            <label class="fd-checkbox__label" for="Ai4ez617">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Potatoes</span>
                </span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez618" checked>
            <label class="fd-checkbox__label" for="Ai4ez618">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Tomatoes</span>
                </span>
            </label>
        </div>
    </div>
</fieldset>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/Forms/checkbox/checkbox.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
