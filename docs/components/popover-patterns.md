---
component: fd-popover
title: Patterns/Multi ComboBox
category: Patterns
selector: fd-popover
cssFile: popover.css
sourcePath: packages/styles/stories/Patterns/multi-combo-box/multi-combo-box.stories.js
tags: []
dependencies: ["bar","button","checkbox","dialog","form-label","icon","input","input-group","layout-grid","link","list","popover","radio","title","token","tokenizer"]
relatedComponents: ["bar","button","checkbox","dialog","form-label","icon","input","input-group","layout-grid","link","list","popover","radio","title","token","tokenizer"]
stability: stable
---

# Patterns/Multi ComboBox

Multi ComboBox allows users to enter multiple values which are displayed as tokens. It provides an editable input field for filtering the list, and a dropdown menu with a list of the available options.
Users can also enter custom values if the entries are not validated by the application. Multi-selection is permitted.


##Usage
**Use the multi-combo box if:**
- The user needs to select one or more options from a long list of options.
- The values of the option list contain secondary information that does not need to be displayed right away.

**Do not use multi-combo box if**
- The user needs to choose between two options, such as ON or OFF and YES or NO.
- You need to display more than one attribute.
- You want to enable users to add custom values.
- Your use case requires all available options to be displayed right away, without any user interaction
- The user needs to search on multiple attributes.
- Your use case requires more options to choose from.

## Usage Guidelines

**Use the multi-combo box if:**
- The user needs to select one or more options from a long list of options.
- The values of the option list contain secondary information that does not need to be displayed right away.

## Dependencies

This component depends on the following CSS files:

- `bar.css`
- `button.css`
- `checkbox.css`
- `dialog.css`
- `form-label.css`
- `icon.css`
- `input.css`
- `input-group.css`
- `layout-grid.css`
- `link.css`
- `list.css`
- `popover.css`
- `radio.css`
- `title.css`
- `token.css`
- `tokenizer.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/popover.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/bar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/checkbox.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/dialog.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/form-label.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/input.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/input-group.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/layout-grid.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/link.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/list.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/popover.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/radio.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/title.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/token.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/tokenizer.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-form-item">
    <div class="fd-popover">
        <div class="fd-popover__control" role="combobox" aria-controls="F4GcX348a" aria-expanded="true" aria-haspopup="true">
            <div class="fd-input-group fd-input-group--control" tabindex="0">
                <div class="fd-tokenizer">
                    <div class="fd-tokenizer__inner">
                        <span class="fd-token" role="button" tabindex="0">
                            <span class="fd-token__text">
                                Apple
                            </span>
                            <button class="fd-token__close" aria-label="unselect option: Apple"></button>
                        </span>
                        <span class="fd-token" role="button" tabindex="0">
                            <span class="fd-token__text">
                                Orange
                            </span>
                            <button class="fd-token__close" aria-label="unselect option: Orange"></button>
                        </span>
                        <span class="fd-token" role="button" tabindex="0">
                            <span class="fd-token__text">
                                Kiwi
                            </span>
                            <button class="fd-token__close" aria-label="unselect option: Kiwi"></button>
                        </span>
                        <span class="fd-token" role="button" tabindex="0">
                            <span class="fd-token__text">
                                Banana
                            </span>
                            <button class="fd-token__close" aria-label="unselect option: Banana"></button>
                        </span>
                        <input class="fd-input fd-input-group__input fd-tokenizer__input" aria-label="multi input sample as form item"/>
                    </div>
                    <span class="fd-input-group__addon fd-input-group__addon--button">
                        <button class="fd-input-group__button fd-button fd-button--transparent" aria-controls="F4GcX348a" aria-expanded="false" aria-label="down arrow" aria-haspopup="true">
                            <i class="sap-icon--navigation-down-arrow"></i>
                        </button>
                    </span>
                </div>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcX348a">
                <div class="fd-popover__wrapper">
                    <ul class="fd-list fd-list--multi-input"  role="listbox" aria-multiselectable="true" aria-label="Fruits">
                        <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                            <div class="fd-form-item fd-list__form-item">
                                <input type="checkbox" class="fd-checkbox" id="Ai4ez620" checked aria-labelledby="Az0bg30">
                                <label tabindex="-1" class="fd-checkbox__label" for="Ai4e20">
                                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                                </label>
                            </div>
                            <span class="fd-list__title" id="Az0bg30">Apple</span>
                        </li>

                        <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                            <div class="fd-form-item fd-list__form-item">
                                <input type="checkbox" class="fd-checkbox" id="Ai4ez621" checked aria-labelledby="Az0bg31">
                                <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez621">
                                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                                </label>
                            </div>
                            <span class="fd-list__title" id="Az0bg31">Orange</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                            <div class="fd-form-item fd-list__form-item">
                                <input type="checkbox" class="fd-checkbox" id="Ai4ez622" checked aria-labelledby="Az0bg32">
                                <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez622">
                                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                                </label>
                            </div>
                            <span class="fd-list__title" id="Az0bg32">Banana</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <div class="fd-form-item fd-list__form-item">
                                <input type="checkbox" class="fd-checkbox" id="Ai4ez623" aria-labelledby="Az0bg33">
                                <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez623">
                                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                                </label>
                            </div>
                            <span class="fd-list__title" id="Az0bg33">Kiwi</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <div class="fd-form-item fd-list__form-item">
                                <input type="checkbox" class="fd-checkbox" id="Ai4ez624" aria-labelledby="Az0bg34">
                                <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez624">
                                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                                </label>
                            </div>
                            <span class="fd-list__title" id="Az0bg34">Lemon</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
```

## States

| Class | Description |
|-------|-------------|
| `is-selected` | Selected state |
| `is-success` | Success state |

## BEM Elements

This component uses the following BEM elements:

- `fd-popover__body`
- `fd-popover__body--dropdown`
- `fd-popover__body--dropdown-fill`
- `fd-popover__body--no-arrow`
- `fd-popover__control`
- `fd-popover__wrapper`

## Related Components

This component works with or depends on:

- `bar`
- `button`
- `checkbox`
- `dialog`
- `form-label`
- `icon`
- `input`
- `input-group`
- `layout-grid`
- `link`
- `list`
- `popover`
- `radio`
- `title`
- `token`
- `tokenizer`

## Design Tokens

Key CSS variables used by this component:

- `--above`
- `--after`
- `--arrow`
- `--arrow-x-end`
- `--before`
- `--bottom`
- `--btp`
- `--center`
- `--display`
- `--dropdown`
- `--fdIcon_Button_Height`
- `--fdIcon_Button_Width`
- `--fdModal_BackgroundColor`
- `--fdPopover_Arrow_Size`
- `--fdPopover_Body_Border_Radius`

*...and 5 more*

## Examples

### AsFormItem

Note that the popover body width is restricted to a max of 37.5rem to avoid readability issues in large-width popovers.
Applications are free to override this in their custom styles if needed and own any readability issues arising from this override.

```html
<div class="fd-form-item">
    <div class="fd-popover">
        <div class="fd-popover__control" role="combobox" aria-controls="F4GcX348a" aria-expanded="true" aria-haspopup="true">
            <div class="fd-input-group fd-input-group--control" tabindex="0">
                <div class="fd-tokenizer">
                    <div class="fd-tokenizer__inner">
                        <span class="fd-token" role="button" tabindex="0">
                            <span class="fd-token__text">
                                Apple
                            </span>
                            <button class="fd-token__close" aria-label="unselect option: Apple"></button>
                        </span>
                        <span class="fd-token" role="button" tabindex="0">
                            <span class="fd-token__text">
                                Orange
                            </span>
                            <button class="fd-token__close" aria-label="unselect option: Orange"></button>
                        </span>
                        <span class="fd-token" role="button" tabindex="0">
                            <span class="fd-token__text">
                                Kiwi
                            </span>
                            <button class="fd-token__close" aria-label="unselect option: Kiwi"></button>
                        </span>
                        <span class="fd-token" role="button" tabindex="0">
                            <span class="fd-token__text">
                                Banana
                            </span>
                            <button class="fd-token__close" aria-label="unselect option: Banana"></button>
                        </span>
                        <input class="fd-input fd-input-group__input fd-tokenizer__input" aria-label="multi input sample as form item"/>
                    </div>
                    <span class="fd-input-group__addon fd-input-group__addon--button">
                        <button class="fd-input-group__button fd-button fd-button--transparent" aria-controls="F4GcX348a" aria-expanded="false" aria-label="down arrow" aria-haspopup="true">
                            <i class="sap-icon--navigation-down-arrow"></i>
                        </button>
                    </span>
                </div>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcX348a">
                <div class="fd-popover__wrapper">
                    <ul class="fd-list fd-list--multi-input"  role="listbox" aria-multiselectable="true" aria-label="Fruits">
                        <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                            <div class="fd-form-item fd-list__form-item">
                                <input type="checkbox" class="fd-checkbox" id="Ai4ez620" checked aria-labelledby="Az0bg30">
                                <label tabindex="-1" class="fd-checkbox__label" for="Ai4e20">
                                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                                </label>
                            </div>
                            <span class="fd-list__title" id="Az0bg30">Apple</span>
                        </li>

                        <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                            <div class="fd-form-item fd-list__form-item">
                                <input type="checkbox" class="fd-checkbox" id="Ai4ez621" checked aria-labelledby="Az0bg31">
                                <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez621">
                                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                                </label>
                            </div>
                            <span class="fd-list__title" id="Az0bg31">Orange</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                            <div class="fd-form-item fd-list__form-item">
                                <input type="checkbox" class="fd-checkbox" id="Ai4ez622" checked aria-labelledby="Az0bg32">
                                <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez622">
                                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                                </label>
                            </div>
                            <span class="fd-list__title" id="Az0bg32">Banana</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <div class="fd-form-item fd-list__form-item">
                                <input type="checkbox" class="fd-checkbox" id="Ai4ez623" aria-labelledby="Az0bg33">
                                <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez623">
                                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                                </label>
                            </div>
                            <span class="fd-list__title" id="Az0bg33">Kiwi</span>
                        </li>
                        <li role="option" tabindex="0" class="fd-list__item">
                            <div class="fd-form-item fd-list__form-item">
                                <input type="checkbox" class="fd-checkbox" id="Ai4ez624" aria-labelledby="Az0bg34">
                                <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez624">
                                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                                </label>
                            </div>
                            <span class="fd-list__title" id="Az0bg34">Lemon</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Grouping

In cases where the list items need to be categorized into groups, it is possible to add headers for each category as seen below.

```html
<div class="fd-popover">
    <div class="fd-popover__control" role="combobox" aria-controls="F4H8X34a" aria-expanded="true" aria-haspopup="true">
        <div class="fd-input-group fd-input-group--control"  tabindex="0">
            <div class="fd-tokenizer">
                <div class="fd-tokenizer__inner">
                    <span class="fd-token" role="button" tabindex="0">
                        <span class="fd-token__text">
                            Apple
                        </span>
                        <button class="fd-token__close" aria-label="unselect option: Apple"></button>
                    </span>
                    <span class="fd-token" role="button" tabindex="0">
                        <span class="fd-token__text">
                            Orange
                        </span>
                        <button class="fd-token__close" aria-label="unselect option: Orange"></button>
                    </span>
                    <span class="fd-token" role="button" tabindex="0">
                        <span class="fd-token__text">
                            Kiwi
                        </span>
                        <button class="fd-token__close" aria-label="unselect option: Kiwi"></button>
                    </span>
                    <span class="fd-tokenizer__indicator">2 more</span>
                    <input class="fd-input fd-input-group__input fd-tokenizer__input" aria-label="multi input sample as group item" />
                </div>
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button class="fd-input-group__button fd-button fd-button--transparent" aria-label="down arrow" aria-controls="F4H8X34a" aria-expanded="false" aria-haspopup="true">
                        <i class="sap-icon--navigation-down-arrow"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4H8X34a">
            <div class="fd-popover__wrapper">
                <label class="fd-list__group-header" id="selectMultipleFruitsLabel">
                    <span class="fd-list__title">Fruits</span>
                </label>
                <ul class="fd-list fd-list--multi-input" role="listbox" aria-multiselectable="true" aria-labelledby="selectMultipleFruitsLabel">
                    <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                        <div class="fd-form-item fd-list__form-item">
                            <input type="checkbox" class="fd-checkbox" id="Ai4ez625" checked aria-labelledby="Az0bg35">
                            <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez625">
                                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                            </label>
                        </div>
                        <span class="fd-list__title" id="Az0bg35">Apple</span>
                    </li>

                    <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                        <div class="fd-form-item fd-list__form-item">
                            <input type="checkbox" class="fd-checkbox" id="Ai4ez626" checked aria-labelledby="Az0bg36">
                            <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez626">
                                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                            </label>
                        </div>
                        <span class="fd-list__title" id="Az0bg36">Orange</span>
                    </li>
                    <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                        <div class="fd-form-item fd-list__form-item">
                            <input type="checkbox" class="fd-checkbox" id="Ai4ez627" checked aria-labelledby="Az0bg37">
                            <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez627">
                                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                            </label>
                        </div>
                        <span class="fd-list__title" id="Az0bg37">Banana</span>
                    </li>
                    <li role="option" tabindex="0" class="fd-list__item">
                        <div class="fd-form-item fd-list__form-item">
                            <input type="checkbox" class="fd-checkbox" id="Ai4ez628" aria-labelledby="Az0bg38">
                            <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez628">
                                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                            </label>
                        </div>
                        <span class="fd-list__title" id="Az0bg38">Kiwi</span>
                    </li>
                    <li role="option" tabindex="0" class="fd-list__item">
                        <div class="fd-form-item fd-list__form-item">
                            <input type="checkbox" class="fd-checkbox" id="Ai4ez629" aria-labelledby="Az0bg39">
                            <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez629">
                                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                            </label>
                        </div>
                        <span class="fd-list__title" id="Az0bg39">Lemon</span>
                    </li>
                </ul>
                <label class="fd-list__group-header" id="selectMultipleVegsLabel">
                    <span class="fd-list__title">Vegetables</span>
                </label>
                <ul class="fd-list fd-list--multi-input" role="listbox" aria-multiselectable="true" aria-labelledby="selectMultipleVegsLabel">
                    <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                        <div class="fd-form-item fd-list__form-item">
                            <input type="checkbox" class="fd-checkbox" id="Ai4ez630" checked aria-labelledby="Az0bg40">
                            <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez630">
                                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                            </label>
                        </div>
                        <span class="fd-list__title" id="Az0bg40">Onion</span>
                    </li>

                    <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                        <div class="fd-form-item fd-list__form-item">
                            <input type="checkbox" class="fd-checkbox" id="Ai4ez631" checked aria-labelledby="Az0bg41">
                            <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez632">
                                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                            </label>
                        </div>
                        <span class="fd-list__title" id="Az0bg41">Tomato</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
```

### MatchPopoverBodySize

The default length size of the popover body is often different from the text length.
The body length can be adjusted to match the text length by adding the \

```html
<div class="fd-popover">
    <div class="fd-popover__control" role="combobox" aria-controls="F4HGFHX34a" aria-expanded="true" aria-haspopup="true">
        <div class="fd-input-group fd-input-group--control" tabindex="0">
            <div class="fd-tokenizer">
                <div class="fd-tokenizer__inner">
                    <span class="fd-token" role="button" tabindex="0">
                        <span class="fd-token__text">
                            Apple
                        </span>
                        <button class="fd-token__close" aria-label="unselect option: Apple"></button>
                    </span>
                    <span class="fd-token" role="button" tabindex="0">
                        <span class="fd-token__text">
                            Orange
                        </span>
                        <button class="fd-token__close" aria-label="unselect option: Orange"></button>
                    </span>
                    <span class="fd-token" role="button" tabindex="0">
                        <span class="fd-token__text">
                            Kiwi
                        </span>
                        <button class="fd-token__close" aria-label="unselect option: Kiwi"></button>
                    </span>
                    <span class="fd-tokenizer__indicator">2 more</span>
                    <input class="fd-input fd-input-group__input fd-tokenizer__input"  aria-label="multi input sample popover size body"/>
                </div>
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button class="fd-input-group__button fd-button fd-button--transparent" aria-label="down arrow" aria-controls="F4HGFHX34a" aria-expanded="false" aria-haspopup="true">
                        <i class="sap-icon--navigation-down-arrow"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="false" id="F4HGFHX34a">
            <div class="fd-popover__wrapper">
                <ul class="fd-list fd-list--multi-input"  role="listbox" aria-multiselectable="true" aria-label="fruits">
                    <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                        <div class="fd-form-item fd-list__form-item">
                            <input type="checkbox" class="fd-checkbox" id="Ai4ez633" checked aria-labelledby="Az0bg42">
                            <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez633">
                                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                            </label>
                        </div>
                        <span class="fd-list__title" id="Az0bg42">Apple</span>
                    </li>

                    <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                        <div class="fd-form-item fd-list__form-item">
                            <input type="checkbox" class="fd-checkbox" id="Ai4ez634" checked aria-labelledby="Az0bg43">
                            <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez634">
                                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                            </label>
                        </div>
                        <span class="fd-list__title" id="Az0bg43">Orange</span>
                    </li>
                    <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                        <div class="fd-form-item fd-list__form-item">
                            <input type="checkbox" class="fd-checkbox" id="Ai4ez635" checked aria-labelledby="Az0bg44">
                            <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez635">
                                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                            </label>
                        </div>
                        <span class="fd-list__title" id="Az0bg44">Banana</span>
                    </li>
                    <li role="option" tabindex="0" class="fd-list__item">
                        <div class="fd-form-item fd-list__form-item">
                            <input type="checkbox" class="fd-checkbox" id="Ai4ez636" aria-labelledby="Az0bg45">
                            <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez636">
                                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                            </label>
                        </div>
                        <span class="fd-list__title" id="Az0bg45">Kiwi</span>
                    </li>
                    <li role="option" tabindex="0" class="fd-list__item">
                        <div class="fd-form-item fd-list__form-item">
                            <input type="checkbox" class="fd-checkbox" id="Ai4ez637" aria-labelledby="Az0bg46">
                            <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez637">
                                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                            </label>
                        </div>
                        <span class="fd-list__title" id="Az0bg46">Lemon</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
```

### ReadOnlyAndDisabled

To make the \

```html
<div class="fd-container">
    <div class="fd-row">
        <div class="fd-col fd-col--6">
            <div class="fd-popover">
                <div class="fd-popover__control" role="combobox" aria-controls="F4GcX3X8a" aria-expanded="false" aria-haspopup="false">
                    <div class="fd-input-group fd-input-group--control" readonly aria-readonly="true"  tabindex="0">
                        <div class="fd-tokenizer fd-tokenizer--readonly">
                            <div class="fd-tokenizer__inner">
                                <span class="fd-token fd-token--readonly" role="button">
                                    <span class="fd-token__text">
                                        Bibendum
                                    </span>
                                </span>
                                <span class="fd-token fd-token--readonly" role="button">
                                    <span class="fd-token__text">
                                        Lorem
                                    </span>
                                </span>
                                <span class="fd-token fd-token--readonly" role="button">
                                    <span class="fd-token__text">
                                        Dolor
                                    </span>
                                </span>
                                <span class="fd-token fd-token--readonly" role="button">
                                    <span class="fd-token__text">
                                        Filter
                                    </span>
                                </span>
                                <span class="fd-token fd-token--readonly">
                                    <span class="fd-token__text">
                                        Lorem
                                    </span>
                                </span>
                                <span class="fd-tokenizer__indicator">
                                    <div class="fd-popover">
                                        <div class="fd-popover__control fd-input-group__control" aria-controls="F4GF5348a" aria-expanded="false" aria-haspopup="true" aria-label="multi combobox">
                                            <span class="fd-tokenizer__indicator" role="button">
                                                4 more
                                            </span>
                                        </div>

                                    </div>
                                </span>
                                <input class="fd-input fd-input-group__input fd-tokenizer__input" readonly aria-readonly="true"  aria-label="multi input readonly or disabled" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-col fd-col--6">
            <div class="fd-popover">
                <div class="fd-popover__control" role="combobox" aria-expanded="false" aria-haspopup="true" aria-disabled="true" disabled>
                    <div class="fd-input-group fd-input-group--control"  aria-disabled="true" disabled  tabindex="0">
                        <div class="fd-tokenizer">
                            <div class="fd-tokenizer__inner">
                                <span class="fd-token fd-token--readonly" role="button">
                                    <span class="fd-token__text">
                                        Bibendum
                                    </span>
                                </span>
                                <span class="fd-token fd-token--readonly" role="button">
                                    <span class="fd-token__text">
                                        Lorem
                                    </span>
                                </span>
                                <span class="fd-token fd-token--readonly" role="button">
                                    <span class="fd-token__text">
                                        Dolor
                                    </span>
                                </span>
                                <span class="fd-token fd-token--readonly" role="button">
                                    <span class="fd-token__text">
                                        Filter
                                    </span>
                                </span>
                                <span class="fd-token fd-token--readonly">
                                    <span class="fd-token__text">
                                        Lorem
                                    </span>
                                </span>
                                <span class="fd-tokenizer__indicator">
                                    <div class="fd-popover">
                                        <div class="fd-popover__control fd-input-group__control" aria-controls="F4GcX34Xa" aria-expanded="false" aria-haspopup="true" aria-label="multi combobox">
                                            <span class="fd-tokenizer__indicator" role="button">
                                                4 more
                                            </span>
                                        </div>

                                    </div>
                                </span>
                                <input class="fd-input fd-input-group__input fd-tokenizer__input"  aria-label="multi input read only or disabled"/>
                            </div>
                        </div>
                        <span class="fd-input-group__addon fd-input-group__addon--button">
                            <button tabindex="-1" class="fd-input-group__button fd-button fd-button--transparent" aria-label="down arrow">
                                <i class="sap-icon--navigation-down-arrow"></i>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Semantic

For a complete list of states supported by the \

```html
<div class="fd-popover">
    <div class="fd-popover__control fd-input-group__control" role="combobox" aria-controls="F4GcKJH8a" aria-expanded="true" aria-haspopup="true" aria-label="multi combobox">
        <div class="fd-input-group fd-input-group--control is-success"  tabindex="0">
            <div class="fd-tokenizer">
                <div class="fd-tokenizer__inner">
                    <span class="fd-token" role="button" tabindex="0">
                        <span class="fd-token__text">
                            Apple
                        </span>
                        <button class="fd-token__close" aria-label="unselect option: Apple"></button>
                    </span>
                    <span class="fd-token" role="button" tabindex="0">
                        <span class="fd-token__text">
                            Orange
                        </span>
                        <button class="fd-token__close" aria-label="unselect option: Orange"></button>
                    </span>
                    <span class="fd-token" role="button" tabindex="0">
                        <span class="fd-token__text">
                            Kiwi
                        </span>
                        <button class="fd-token__close" aria-label="unselect option: Kiwi"></button>
                    </span>
                    <span class="fd-tokenizer__indicator">4 more</span>
                    <input class="fd-input fd-input-group__input fd-tokenizer__input"  aria-label="multi input semantic" />
                </div>
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button class="fd-input-group__button fd-button fd-button--transparent" aria-label="down arrow" aria-controls="F4GcKJH8a" aria-expanded="false" aria-haspopup="true">
                        <i class="sap-icon--navigation-down-arrow"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcKJH8a">
            <div class="fd-popover__wrapper">
                <ul class="fd-list fd-list--multi-input fd-list--has-message"  role="listbox" aria-multiselectable="true" aria-label="Fruits">
                    <li class="fd-list__message fd-list__message--success" role="option">Success Message</li>
                    <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                        <div class="fd-form-item fd-list__form-item">
                            <input type="checkbox" class="fd-checkbox" id="Ai4ez638" checked aria-labelledby="Az0bg47">
                            <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez638">
                                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                            </label>
                        </div>
                        <span class="fd-list__title" id="Az0bg47">Apple</span>
                    </li>
                    <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                        <div class="fd-form-item fd-list__form-item">
                            <input type="checkbox" class="fd-checkbox" id="Ai4ez639" checked aria-labelledby="Az0bg48">
                            <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez639">
                                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                            </label>
                        </div>
                        <span class="fd-list__title" id="Az0bg48">Orange</span>
                    </li>
                    <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                        <div class="fd-form-item fd-list__form-item">
                            <input type="checkbox" class="fd-checkbox" id="Ai4ez640" checked aria-labelledby="Az0bg49">
                            <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez640">
                                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                            </label>
                        </div>
                        <span class="fd-list__title" id="Az0bg49">Banana</span>
                    </li>
                    <li role="option" tabindex="0" class="fd-list__item">
                        <div class="fd-form-item fd-list__form-item">
                            <input type="checkbox" class="fd-checkbox" id="Ai4ez641" aria-labelledby="Az0bg50">
                            <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez641">
                                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                            </label>
                        </div>
                        <span class="fd-list__title" id="Az0bg50">Kiwi</span>
                    </li>
                    <li role="option" tabindex="0" class="fd-list__item">
                        <div class="fd-form-item fd-list__form-item">
                            <input type="checkbox" class="fd-checkbox" id="Ai4ez642" aria-labelledby="Az0bg51">
                            <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez642">
                                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                            </label>
                        </div>
                        <span class="fd-list__title" id="Az0bg51">Lemon</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
```

### MobileMode

For mobile devices, or tablets, Multi ComboBox component should be displayed in fullscreen mode.
So instead of using popover and dropdown, it should be wrapped in \

```html
<div class="fd-dialog fd-dialog-docs-static fd-select-docs-max-height fd-dialog--active" id="select-dialog-example">
    <div class="fd-dialog__content fd-dialog__content--mobile">
        <header class="fd-dialog__header fd-bar fd-bar--header-with-subheader">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 class="fd-title fd-title--h5">
                        Select Ingredient
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
                <div class="fd-bar__element">
                    <div class="fd-input-group" tabindex="0">
                        <div class="fd-tokenizer">
                            <div class="fd-tokenizer__inner">
                                <span class="fd-token" role="button" tabindex="0">
                                    <span class="fd-token__text">
                                        Apple
                                    </span>
                                    <button class="fd-token__close" aria-label="unselect option: Apple"></button>
                                </span>
                                <span class="fd-token" role="button" tabindex="0">
                                    <span class="fd-token__text">
                                        Orange
                                    </span>
                                    <button class="fd-token__close" aria-label="unselect option: Orange"></button>
                                </span>
                                <span class="fd-token" role="button" tabindex="0">
                                    <span class="fd-token__text">
                                        Kiwi
                                    </span>
                                    <button class="fd-token__close" aria-label="unselect option: Kiwi"></button>
                                </span>
                                <span class="fd-tokenizer__indicator">4 more</span>
                                <input class="fd-input fd-input-group__input fd-tokenizer__input"  aria-label="multi input mobile mode" />
                            </div>
                        </div>
                        <span class="fd-input-group__addon fd-input-group__addon--button">
                            <button class="fd-input-group__button fd-button fd-button--transparent" aria-label="down arrow">
                                <i class="sap-icon--navigation-down-arrow"></i>
                            </button>
                        </span>
                    </div>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent" aria-label="multi combobox mobilmode button">
                        <i class="sap-icon--multiselect-all"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <ul class="fd-list fd-list--multi-input fd-list--has-message fd-list--mobile"  role="listbox" aria-multiselectable="true" aria-label="Fruits">
                <li class="fd-list__message fd-list__message--success" role="option">Success Message</li>
                <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez64300" checked aria-labelledby="Az0bg52">
                        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez64300">
                            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        </label>
                    </div>
                    <span class="fd-list__title" id="Az0bg52">Apple</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez644" checked aria-labelledby="Az0bg53">
                        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez644">
                            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        </label>
                    </div>
                    <span class="fd-list__title" id="Az0bg53">Orange</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez645" checked aria-labelledby="Az0bg54">
                        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez645">
                            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        </label>
                    </div>
                    <span class="fd-list__title" id="Az0bg54">Banana</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez646" aria-labelledby="Az0bg55">
                        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez646">
                            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        </label>
                    </div>
                    <span class="fd-list__title" id="Az0bg55">Kiwi</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez647" aria-labelledby="Az0bg56">
                        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez647">
                            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        </label>
                    </div>
                    <span class="fd-list__title" id="Az0bg56">Lemon</span>
                </li>
            </ul>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized">OK</button>
                </div>
            </div>
        </footer>
    </div>
</div>
```

### Filtering

The user can filter selectable options by typing in the input. A button with the text "Show All" should be displayed, that when clicked, will clear the text in the input and show all options in the list.

```html
<div class="fd-popover">
    <div class="fd-popover__control" role="combobox" aria-controls="F4GcX348aB" aria-expanded="true" aria-haspopup="true">
        <div class="fd-input-group fd-input-group--control" tabindex="0">
            <div class="fd-tokenizer">
                <div class="fd-tokenizer__inner">
                    <span class="fd-token" role="button" tabindex="0">
                        <span class="fd-token__text">
                            Apple
                        </span>
                        <button class="fd-token__close" aria-label="unselect option: Apple"></button>
                    </span>
                    <span class="fd-token" role="button" tabindex="0">
                        <span class="fd-token__text">
                            Orange
                        </span>
                        <button class="fd-token__close" aria-label="unselect option: Orange"></button>
                    </span>
                    <span class="fd-token" role="button" tabindex="0">
                        <span class="fd-token__text">
                            Banana
                        </span>
                        <button class="fd-token__close" aria-label="unselect option: Banana"></button>
                    </span>
                    <input class="fd-input fd-input-group__input fd-tokenizer__input" value="A"  aria-label="multi input paramnetric"/>
                </div>
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button class="fd-input-group__button fd-button fd-button--transparent" aria-label="down arrow" aria-controls="F4GcX348aB" aria-expanded="false" aria-haspopup="true">
                        <i class="sap-icon--navigation-down-arrow"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcX348aB">
            <ul class="fd-list fd-list--multi-input"  role="listbox"  aria-multiselectable="true" aria-label="Fruits">
                <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez648" checked aria-labelledby="Az0bg57">
                        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez648">
                            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        </label>
                    </div>
                    <span class="fd-list__title" id="Az0bg57">Apple</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez649" checked aria-labelledby="Az0bg58">
                        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez649">
                            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        </label>
                    </div>
                    <span class="fd-list__title" id="Az0bg58">Orange</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez650" checked aria-labelledby="Az0bg59">
                        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez650">
                            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        </label>
                    </div>
                    <span class="fd-list__title" id="Az0bg59">Banana</span>
                </li>
            </ul>
            <span class="fd-list__footer fd-list__footer--right">
                <a class="fd-link" role="button" >Show All</a>
            </span>
        </div>
    </div>
</div>
```

### TwoColumnComboBox

The user can filter selectable having 2 options by typing in the input. A button with the text "Show All" should be displayed, that when clicked, will clear the text in the input and show all options in the list.

```html
<div class="fd-popover">
    <div class="fd-popover__control" role="combobox" aria-controls="F4GcX348aBb" aria-expanded="true" aria-haspopup="true">
        <div class="fd-input-group fd-input-group--control" tabindex="0">
            <div class="fd-tokenizer">
                <div class="fd-tokenizer__inner">
                    <span class="fd-token" role="button" tabindex="0">
                        <span class="fd-token__text">
                            Apple
                        </span>
                        <button class="fd-token__close" aria-label="unselect option: Apple"></button>
                    </span>
                    <span class="fd-token" role="button" tabindex="0">
                        <span class="fd-token__text">
                            Orange
                        </span>
                        <button class="fd-token__close" aria-label="unselect option: Orange"></button>
                    </span>
                    <span class="fd-token" role="button" tabindex="0">
                        <span class="fd-token__text">
                            Banana
                        </span>
                        <button class="fd-token__close" aria-label="unselect option: Banana"></button>
                    </span>
                    <input class="fd-input fd-input-group__input fd-tokenizer__input" value="A"  aria-label="multi input with two column" />
                </div>
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button class="fd-input-group__button fd-button fd-button--transparent" aria-label="down arrow" aria-controls="F4GcX348aBb" aria-expanded="false" aria-haspopup="true">
                        <i class="sap-icon--navigation-down-arrow"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcX348aBb">
            <ul class="fd-list fd-list--multi-input"  role="listbox" aria-multiselectable="true" aria-label="Fruits">
                <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez651" checked aria-labelledby="Az0bg59">
                        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez651">
                            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        </label>
                    </div>
                    <span class="fd-list__title" id="Az0bg59"><b>A</b>pple</span>
                    <span class="fd-list__secondary">A2</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez652" checked aria-labelledby="Az0bg60">
                        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez652">
                            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        </label>
                    </div>
                    <span class="fd-list__title" id="Az0bg60">Or<b>a</b>nge</span>
                    <span class="fd-list__secondary">A1</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez653" checked aria-labelledby="Az0bg61">
                        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez653">
                            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        </label>
                    </div>
                    <span class="fd-list__title" id="Az0bg61">B<b>a</b>nana</span>
                    <span class="fd-list__secondary">A3</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez654" aria-labelledby="Az0bg62">
                        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez654">
                            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        </label>
                    </div>
                    <span class="fd-list__title" id="Az0bg62"><b>A</b>pple</span>
                    <span class="fd-list__secondary">A1</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez655" aria-labelledby="Az0bg63">
                        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez655">
                            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        </label>
                    </div>
                    <span class="fd-list__title" id="Az0bg63">Or<b>a</b>nge</span>
                    <span class="fd-list__secondary">A2</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez656" aria-labelledby="Az0bg64">
                        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez656">
                            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        </label>
                    </div>
                    <span class="fd-list__title" id="Az0bg64">B<b>a</b>nana</span>
                    <span class="fd-list__secondary">A3</span>
                </li>
            </ul>
            <span class="fd-list__footer fd-list__footer--right">
                <a class="fd-link" role="button" >Show All</a>
            </span>
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

This documentation was automatically generated from: `packages/styles/stories/Patterns/multi-combo-box/multi-combo-box.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
