---
component: fd-dialog
title: Patterns/Combobox Input
category: Patterns
selector: fd-dialog
cssFile: dialog.css
sourcePath: packages/styles/stories/Patterns/combobox-input/combobox-input.stories.js
tags: []
dependencies: ["bar","button","dialog","form-item","form-label","icon","input","input-group","list","popover","radio","title"]
relatedComponents: ["bar","button","dialog","form-item","form-label","icon","input","input-group","list","popover","radio","title"]
stability: stable
generatedAt: 2026-06-08T17:49:02.424Z
---

# Patterns/Combobox Input

The Combobox Input component is an opinionated composition of the input group, popover and list components.
The popover and \

## Dependencies

This component depends on the following CSS files:

- `bar.css`
- `button.css`
- `dialog.css`
- `form-item.css`
- `form-label.css`
- `icon.css`
- `input.css`
- `input-group.css`
- `list.css`
- `popover.css`
- `radio.css`
- `title.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/dialog.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/bar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/dialog.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/form-item.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/form-label.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/input.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/input-group.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/list.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/popover.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/radio.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/title.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-form-item">
    <label for="comboboxAsFormItem" class="fd-form-label">Combobox as a form item</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="amsfiaufuaskhjd" aria-expanded="true" aria-haspopup="true"
            id="ansioda7dh">
            <div class="fd-input-group fd-input-group--control">
                <input type="text" class="fd-input fd-input-group__input" id="comboboxAsFormItem" placeholder="Select Fruit">
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button
                        id="ansid87arfgj"
                        aria-label="show/hide fruit options"
                        aria-controls="amsfiaufuaskhjd"
                        aria-expanded="true"
                        aria-haspopup="true"
                        class="fd-input-group__button fd-button fd-button--transparent">
                        <i class="sap-icon--navigation-down-arrow"></i></button>
                    </span>
                </div>
                <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="amsfiaufuaskhjd">
                    <div class="fd-popover__wrapper docs-max-height">
                        <ul aria-label="fruit options" class="fd-list fd-list--dropdown" role="listbox">
                            <li role="option" tabindex="0" class="fd-list__item is-selected">
                                <span class="fd-list__title">
                                    <span class="fd-list__bold">App</span>le
                                    </span>
                                </li>
                                <li role="option" tabindex="0" class="fd-list__item">
                                    <span class="fd-list__title">Orange</span>
                                </li>
                                <li role="option" tabindex="0" class="fd-list__item">
                                    <span class="fd-list__title">Banana</span>
                                </li>
                                <li role="option" tabindex="0" class="fd-list__item">
                                    <span class="fd-list__title">Kiwi</span>
                                </li>
                                <li role="option" tabindex="0" class="fd-list__item">
                                    <span class="fd-list__title">Nectarine</span>
                                </li>
                                <li role="option" tabindex="0" class="fd-list__item">
                                    <span class="fd-list__title">Apricots</span>
                                </li>
                                <li role="option" tabindex="0" class="fd-list__item">
                                    <span class="fd-list__title">Peache</span>
                                </li>
                                <li role="option" tabindex="0" class="fd-list__item">
                                    <span class="fd-list__title">Plum</span>
                                </li>
                                <li role="option" tabindex="0" class="fd-list__item">
                                    <span class="fd-list__title">Mango</span>
                                </li>
                                <li role="option" tabindex="0" class="fd-list__item">
                                    <span class="fd-list__title">Strawberry</span>
                                </li>
                                <li role="option" tabindex="0" class="fd-list__item">
                                    <span class="fd-list__title">Blueberry</span>
                                </li>
                                <li role="option" tabindex="0" class="fd-list__item">
                                    <span class="fd-list__title">Watermelon</span>
                                </li>
                                <li role="option" tabindex="0" class="fd-list__item">
                                    <span class="fd-list__title">Honeydew</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-dialog--active` | Style variant |

## States

| Class | Description |
|-------|-------------|
| `is-selected` | Selected state |
| `is-success` | Success state |

## BEM Elements

This component uses the following BEM elements:

- `fd-dialog__body`
- `fd-dialog__body--no-vertical-padding`
- `fd-dialog__content`
- `fd-dialog__content--mobile`
- `fd-dialog__decisive-button`
- `fd-dialog__footer`
- `fd-dialog__header`
- `fd-dialog__subheader`

## Related Components

This component works with or depends on:

- `bar`
- `button`
- `dialog`
- `form-item`
- `form-label`
- `icon`
- `input`
- `input-group`
- `list`
- `popover`
- `radio`
- `title`

## Design Tokens

Key CSS variables used by this component:

- `--active`
- `--draggable`
- `--mobile`
- `--no-backdrop`
- `--no-horizontal-padding`
- `--no-mobile-stretch`
- `--no-vertical-padding`
- `--sapButton_Lite_TextColor`
- `--sapElement_BorderCornerRadius`
- `--targeted`

## Examples

### AsFormItem

Note that the popover body width is restricted to a max of 37.5rem to avoid readability issues in large-width popovers.
Applications are free to override this in their custom styles if needed and own any readability issues arising from this override.

```html
<div class="fd-form-item">
    <label for="comboboxAsFormItem" class="fd-form-label">Combobox as a form item</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="amsfiaufuaskhjd" aria-expanded="true" aria-haspopup="true"
            id="ansioda7dh">
            <div class="fd-input-group fd-input-group--control">
                <input type="text" class="fd-input fd-input-group__input" id="comboboxAsFormItem" placeholder="Select Fruit">
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button
                        id="ansid87arfgj"
                        aria-label="show/hide fruit options"
                        aria-controls="amsfiaufuaskhjd"
                        aria-expanded="true"
                        aria-haspopup="true"
                        class="fd-input-group__button fd-button fd-button--transparent">
                        <i class="sap-icon--navigation-down-arrow"></i></button>
                    </span>
                </div>
                <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="amsfiaufuaskhjd">
                    <div class="fd-popover__wrapper docs-max-height">
                        <ul aria-label="fruit options" class="fd-list fd-list--dropdown" role="listbox">
                            <li role="option" tabindex="0" class="fd-list__item is-selected">
                                <span class="fd-list__title">
                                    <span class="fd-list__bold">App</span>le
                                    </span>
                                </li>
                                <li role="option" tabindex="0" class="fd-list__item">
                                    <span class="fd-list__title">Orange</span>
                                </li>
                                <li role="option" tabindex="0" class="fd-list__item">
                                    <span class="fd-list__title">Banana</span>
                                </li>
                                <li role="option" tabindex="0" class="fd-list__item">
                                    <span class="fd-list__title">Kiwi</span>
                                </li>
                                <li role="option" tabindex="0" class="fd-list__item">
                                    <span class="fd-list__title">Nectarine</span>
                                </li>
                                <li role="option" tabindex="0" class="fd-list__item">
                                    <span class="fd-list__title">Apricots</span>
                                </li>
                                <li role="option" tabindex="0" class="fd-list__item">
                                    <span class="fd-list__title">Peache</span>
                                </li>
                                <li role="option" tabindex="0" class="fd-list__item">
                                    <span class="fd-list__title">Plum</span>
                                </li>
                                <li role="option" tabindex="0" class="fd-list__item">
                                    <span class="fd-list__title">Mango</span>
                                </li>
                                <li role="option" tabindex="0" class="fd-list__item">
                                    <span class="fd-list__title">Strawberry</span>
                                </li>
                                <li role="option" tabindex="0" class="fd-list__item">
                                    <span class="fd-list__title">Blueberry</span>
                                </li>
                                <li role="option" tabindex="0" class="fd-list__item">
                                    <span class="fd-list__title">Watermelon</span>
                                </li>
                                <li role="option" tabindex="0" class="fd-list__item">
                                    <span class="fd-list__title">Honeydew</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
```

### TwoItemsAndItemsGrouping

The \

```html
<label for="twoItems" class="fd-form-label">Product prices</label>
<div class="fd-popover">
    <div class="fd-popover__control" aria-controls="F4GRTGLK6" aria-expanded="true" aria-haspopup="true"
        id="124qqdf34"
        onclick="
        toggleElAttrs('F4GRTGLK6', ['aria-hidden']);
        toggleElAttrs('124qqdf34', ['aria-expanded']);
        toggleElAttrs('f32rafsef', ['aria-expanded']);
        ">
        <div class="fd-input-group fd-input-group--control">
            <input type="text" class="fd-input fd-input-group__input" id="twoItems" placeholder="Select Product">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button
                    id="f32rafsef"
                    aria-label="show/hide fruit options"
                    aria-controls="F4GRTGLK6"
                    aria-expanded="true"
                    aria-haspopup="true"
                    class="fd-input-group__button fd-button fd-button--transparent fd-select__button">
                    <i class="sap-icon--navigation-down-arrow"></i>
                </button>
            </span>
            <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GRTGLK6">
                <div class="fd-popover__wrapper">
                    <ul aria-label="fruit options" class="fd-list fd-list--dropdown" role="listbox">
                        <li class="fd-list__item is-selected" role="option" tabindex="0">
                            <span class="fd-list__title">Product 1</span>
                            <span class="fd-list__secondary">1000 EUR</span>
                        </li>
                        <li class="fd-list__item" role="option" tabindex="0">
                            <span class="fd-list__title">Product 2</span>
                            <span class="fd-list__secondary">750 EUR</span>
                        </li>
                        <li class="fd-list__item" role="option" tabindex="0">
                            <span class="fd-list__title">Product 3</span>
                            <span class="fd-list__secondary">780 EUR</span>
                        </li>
                        <li class="fd-list__item" role="option" tabindex="0">
                            <span class="fd-list__title">Product 4</span>
                            <span class="fd-list__secondary">40 EUR</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <label for="groupedItems" class="fd-form-label">Fruits and Vegetables</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="F4GcXLK6" aria-expanded="true" aria-haspopup="true"
            id="mad09sudka"
            onclick="
            toggleElAttrs('F4GcXLK6', ['aria-hidden']);
            toggleElAttrs('mad09sudka', ['aria-expanded']);
            toggleElAttrs('masioda8sdh', ['aria-expanded']);
            ">
            <div class="fd-input-group fd-input-group--control">
                <input type="text" class="fd-input fd-input-group__input" id="groupedItems" placeholder="Select Ingredient">
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button
                        id="masioda8sdh"
                        aria-label="show/hide fruit options"
                        aria-controls="F4GcXLK6"
                        aria-expanded="true"
                        aria-haspopup="true"
                        class="fd-input-group__button fd-button fd-button--transparent">
                        <i class="sap-icon--navigation-down-arrow"></i>
                    </button>
                </span>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcXLK6">
                <div class="fd-popover__wrapper">
                    <label id="fruitListHeader" class="fd-list__group-header">
                        <span class="fd-list__title">Fruits</span>
                    </label>
                    <ul aria-labelledby="fruitListHeader" class="fd-list fd-list--dropdown" role="listbox">
                        <li role="option" tabindex="0" class="fd-list__item is-selected">
                            <span class="fd-list__title">Apple</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Orange</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Banana</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Kiwi</span>
                        </li>
                    </ul>
                    <label id="vegListHeader" class="fd-list__group-header">
                        <span class="fd-list__title">Vegetables</span>
                    </label>
                    <ul aria-labelledby="vegListHeader" class="fd-list fd-list--dropdown" role="listbox">
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Tomato</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Onion</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Spinach</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Potato</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
```

### MatchPopoverBodySize

The default length size of the popover body is often different from the text length.
The body length can be adjusted to match the text length by adding the \

```html
<label for="matchPopoverBodySize" class="fd-form-label">Match Popover Body Size</label>
<div class="fd-popover">
    <div class="fd-popover__control" aria-controls="F4HTFDLK6" aria-expanded="true" aria-haspopup="true"
        id="anmsdic0a8dh"
        onclick="
        toggleElAttrs('F4HTFDLK6', ['aria-hidden']);
        toggleElAttrs('anmsdic0a8dh', ['aria-expanded']);
        toggleElAttrs('samdoia8fhg', ['aria-expanded']);
        ">
        <div class="fd-input-group fd-input-group--control">
            <input type="text" class="fd-input fd-input-group__input" id="matchPopoverBodySize" placeholder="Select Ingredient">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button
                    id="samdoia8fhg"
                    aria-label="show/hide fruit options"
                    aria-controls="F4HTFDLK6"
                    aria-expanded="true"
                    aria-haspopup="true"
                    class="fd-input-group__button fd-button fd-button--transparent">
                    <i class="sap-icon--navigation-down-arrow"></i>
                </button>
            </span>
            <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="false" id="F4HTFDLK6">
                <div class="fd-popover__wrapper">
                    <ul aria-label="fruit options" class="fd-list fd-list--dropdown" role="listbox">
                        <li role="option" tabindex="0" class="fd-list__item is-selected">
                            <span class="fd-list__title">Apple</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Orange</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Banana</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Kiwi</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
```

### DisabledAndReadOnly

To disable a \

```html
<label for="disabledCombobox" class="fd-form-label">Disabled</label>
<div class="fd-popover">
    <div class="fd-popover__control" aria-controls="F4GcX348" aria-expanded="false" aria-haspopup="true" aria-disabled="true" disabled>
        <div class="fd-input-group fd-input-group--control" aria-disabled="true" disabled>
            <input id="disabledCombobox" type="text" class="fd-input fd-input-group__input" id="" value="Orange" placeholder="Select Fruit">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button aria-label="show/hide options button" class="fd-input-group__button fd-button fd-button--transparent fd-select__button">
                    <i class="sap-icon--navigation-down-arrow"></i>
                </button>
            </span>
        </div>
    </div>
    <label for="readonlyCombobox" class="fd-form-label">Readonly</label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="F4GcX348" aria-expanded="false" aria-haspopup="false" aria-readonly="true" readonly>
            <input type="text" class="fd-input fd-input-group__input" id="readonlyCombobox" value="Orange" aria-readonly="true" readonly>
        </div>
    </div>
</div>
```

### Semantic

For a complete list of states supported by the \

```html
<label for="semanticCombobox" class="fd-form-label">Semantic Combobox</label>
<div class="fd-popover">
    <div class="fd-popover__control" aria-controls="F4GcEX34" aria-expanded="true" aria-haspopup="true"
        id="mfa98agh4ih3"
        onclick="
        toggleElAttrs('F4GcEX34', ['aria-hidden']);
        toggleElAttrs('mfa98agh4ih3', ['aria-expanded']);
        toggleElAttrs('mpzjf2q09ugd', ['aria-expanded']);
        ">
        <div class="fd-input-group fd-input-group--control is-success">
            <input type="text" class="fd-input fd-input-group__input" id="semanticCombobox" placeholder="Select Fruit">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button id="mpzjf2q09ugd" aria-label="show/hide fruit options"
                    class="fd-input-group__button fd-button fd-button--transparent fd-select__button"
                    aria-controls="F4GcEX34" aria-expanded="true" aria-haspopup="true">
                    <i class="sap-icon--navigation-down-arrow"></i>
                </button>
            </span>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcEX34">
            <div class="fd-popover__wrapper">
                <span class="fd-list__message fd-list__message--success">Success message</span>
                <ul aria-label="fruit options" class="fd-list fd-list--has-message fd-list--dropdown" role="listbox">
                    <li role="option" tabindex="0" class="fd-list__item is-selected">
                        <span class="fd-list__title">
                            <span class="fd-list__bold">App</span>le
                            </span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Orange</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Banana</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <span class="fd-list__title">Kiwi</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
```

### Mobile

For mobile devices, or tablets, combobox component should be displayed in fullscreen mode.
So instead of using popover and dropdown, it should be wrapped in \

```html
<div class="fd-dialog fd-dialog-docs-static fd-select-docs-max-height fd-dialog--active"
    id="select-dialog-example">
    <section role="dialog" aria-labelledby="mobileDialogHeader" class="fd-dialog__content fd-dialog__content--mobile">
        <header class="fd-dialog__header fd-bar fd-bar--header-with-subheader">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 id="mobileDialogHeader" class="fd-title fd-title--h5">
                        Ingredients
                    </h3>
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent" aria-label="close">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </div>
        </header>
        <div class="fd-dialog__subheader fd-bar fd-bar--subheader">
            <div class="fd-bar__middle">
                <div class="fd-input-group fd-input-group--control">
                    <input aria-labelledby="mobileDialogHeader"
                    type="text" class="fd-input fd-input-group__input" value="Apple" id="mobileCombobox" placeholder="Select Ingredient">
                    <span class="fd-input-group__addon fd-input-group__addon--button">
                        <button aria-label="hide/show options" class="fd-input-group__button fd-button fd-button--transparent">
                            <i class="sap-icon--navigation-down-arrow"></i>
                        </button>
                    </span>
                </div>
            </div>
        </div>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <label id="fruitsMobileHeader" class="fd-list__group-header">
                <span class="fd-list__title">Fruits</span>
            </label>
            <ul aria-labelledby="fruitsMobileHeader" class="fd-list fd-list--dropdown fd-list--mobile" role="listbox">
                <li role="option" tabindex="0" class="fd-list__item is-selected">
                    <span class="fd-list__title">Apple</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <span class="fd-list__title">Orange</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <span class="fd-list__title">Banana</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <span class="fd-list__title">Kiwi</span>
                </li>
            </ul>
            <label id="vegMobileHeader" class="fd-list__group-header">
                <span class="fd-list__title">Vegetables</span>
            </label>
            <ul aria-labelledby="vegMobileHeader" class="fd-list fd-list--dropdown fd-list--mobile" role="listbox">
                <li role="option" tabindex="0" class="fd-list__item">
                    <span class="fd-list__title">Tomato</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <span class="fd-list__title">Onion</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <span class="fd-list__title">Spinach</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <span class="fd-list__title">Potato</span>
                </li>
            </ul>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-dialog__decisive-button">OK</button>
                </div>
            </div>
        </footer>
    </section>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Patterns/combobox-input/combobox-input.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
