---
component: fd-fieldset
title: Components/Forms/Field Set
category: Components
selector: fd-fieldset
cssFile: fieldset.css
sourcePath: packages/styles/stories/Components/Forms/form-fieldset/form-fieldset.stories.js
tags: []
dependencies: []
relatedComponents: []
stability: stable
generatedAt: 2026-06-08T17:49:02.164Z
---

# Components/Forms/Field Set

A fieldset is used to give semantic meaning to a group of elements inside a form (e.g. Billing or Shipping Address).
Grouping fields together into a fieldset also provides styling and accessibility benefits.

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
    <legend class="fd-fieldset__legend">Checkboxes</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez611">
            <label class="fd-checkbox__label" for="Ai4ez611">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__text">
                    Field label
                </span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez612" checked>
            <label class="fd-checkbox__label" for="Ai4ez612">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__text">
                    Selected State
                </span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez613">
            <label class="fd-checkbox__label" for="Ai4ez613">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__text">
                    TriState Text
                </span>
            </label>
        </div>
    </div>
</fieldset>

<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Checkboxes disabled</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez614" disabled>
            <label class="fd-checkbox__label" for="Ai4ez614">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__text">
                    Field label
                </span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez615" disabled>
            <label class="fd-checkbox__label" for="Ai4ez615">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__text">
                    Field label
                </span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez616" disabled>
            <label class="fd-checkbox__label" for="Ai4ez616">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__text">
                    Field label
                </span>
            </label>
        </div>
    </div>
</fieldset>

<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Checkboxes inline</legend>
    <div class="fd-form-group fd-form-group--inline">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez617">
            <label class="fd-checkbox__label" for="Ai4ez617">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__text">
                    Field label
                </span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez618">
            <label class="fd-checkbox__label" for="Ai4ez618">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__text">
                    Field label
                </span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez619">
            <label class="fd-checkbox__label" for="Ai4ez619">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__text">
                    Field label
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

### CheckboxGroups

Checkbox groups should always be grouped using fieldset for accessibility reasons.

```html
<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Checkboxes</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez611">
            <label class="fd-checkbox__label" for="Ai4ez611">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__text">
                    Field label
                </span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez612" checked>
            <label class="fd-checkbox__label" for="Ai4ez612">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__text">
                    Selected State
                </span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez613">
            <label class="fd-checkbox__label" for="Ai4ez613">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__text">
                    TriState Text
                </span>
            </label>
        </div>
    </div>
</fieldset>

<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Checkboxes disabled</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez614" disabled>
            <label class="fd-checkbox__label" for="Ai4ez614">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__text">
                    Field label
                </span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez615" disabled>
            <label class="fd-checkbox__label" for="Ai4ez615">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__text">
                    Field label
                </span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez616" disabled>
            <label class="fd-checkbox__label" for="Ai4ez616">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__text">
                    Field label
                </span>
            </label>
        </div>
    </div>
</fieldset>

<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Checkboxes inline</legend>
    <div class="fd-form-group fd-form-group--inline">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez617">
            <label class="fd-checkbox__label" for="Ai4ez617">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__text">
                    Field label
                </span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez618">
            <label class="fd-checkbox__label" for="Ai4ez618">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__text">
                    Field label
                </span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez619">
            <label class="fd-checkbox__label" for="Ai4ez619">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__text">
                    Field label
                </span>
            </label>
        </div>
    </div>
</fieldset>
```

### RadioButtonGroups

Radio button groups should always be grouped using fieldset for accessibility reasons.

```html
<fieldset class="fd-fieldset" id="radio1">
    <legend class="fd-fieldset__legend">Radio Buttons</legend>
    <div class="fd-form__group">
        <div class="fd-form-item">
            <input type="radio" class="fd-radio" id="pDidh761" name="radio1" checked>
            <label class="fd-radio__label" for="pDidh761">
                <span class="fd-radio__text">Field label</span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="radio" class="fd-radio" id="pDidh7612" name="radio1">
            <label class="fd-radio__label" for="pDidh7612">
                <span class="fd-radio__text">Field label</span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="radio" class="fd-radio" id="pDidh7613" name="radio1">
            <label class="fd-radio__label" for="pDidh7613">
                <span class="fd-radio__text">Field label</span>
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

This documentation was automatically generated from: `packages/styles/stories/Components/Forms/form-fieldset/form-fieldset.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
