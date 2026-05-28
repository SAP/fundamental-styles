---
component: fd-search-field
title: BTP/Search Field
category: Components
selector: fd-search-field
cssFile: search-field.css
sourcePath: packages/styles/stories/Components/search-field/search-field.stories.js
tags: ["btp"]
dependencies: ["button","dialog","form-item","form-label","form-message","icon","layout-grid","list","popover","search-field","select","toolbar"]
relatedComponents: ["button","dialog","form-item","form-label","form-message","icon","layout-grid","list","popover","search-field","select","toolbar"]
stability: stable
generatedAt: 2026-05-28T20:12:00.604Z
---

# BTP/Search Field

The Search Field component is intended to be used in BTP Tool Header.

## Dependencies

This component depends on the following CSS files:

- `button.css`
- `dialog.css`
- `form-item.css`
- `form-label.css`
- `form-message.css`
- `icon.css`
- `layout-grid.css`
- `list.css`
- `popover.css`
- `search-field.css`
- `select.css`
- `toolbar.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/search-field.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/dialog.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/form-item.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/form-label.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/form-message.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/layout-grid.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/list.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/popover.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/search-field.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/select.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/toolbar.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-search-field">
    <span role="presentation" aria-hidden="true" class="fd-search-field__icon sap-icon--search"></span>
    <input placeholder="Search Anything" type="search" aria-label="Search" class="fd-search-field__input">

    <div class="fd-search-field__actions">
        <div class="fd-search-field__action-container">
            <button class="fd-button fd-button--nested" aria-label="Close">
                <i class="sap-icon--decline" role="presentation"></i>
            </button>
            <div class="fd-search-field__action-container">
                <button class="fd-button fd-button--nested" aria-label="Search" aria-disabled="true" tabindex="-1">
                    <i class="sap-icon--slim-arrow-right" role="presentation"></i>
                </button>
            </div>
        </div>
    </div>

    <div class="fd-search-field">
        <span role="presentation" aria-hidden="true" class="fd-search-field__icon sap-icon--search"></span>
        <input placeholder="Search Anything" type="search" aria-label="Search" class="fd-search-field__input is-hover">

        <div class="fd-search-field__actions">
            <div class="fd-search-field__action-container">
                <button class="fd-button fd-button--nested" aria-label="Close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button>
            </div>
            <div class="fd-search-field__action-container">
                <button class="fd-button fd-button--nested" aria-label="Search" aria-disabled="true" tabindex="-1">
                    <i class="sap-icon--slim-arrow-right" role="presentation"></i>
                </button>
            </div>
        </div>
    </div>

    <div class="fd-search-field">
        <span role="presentation" aria-hidden="true" class="fd-search-field__icon sap-icon--search"></span>
        <input placeholder="Search Anything" type="search" aria-label="Search" class="fd-search-field__input is-focus">

        <div class="fd-search-field__actions">
            <div class="fd-search-field__action-container">
                <button class="fd-button fd-button--nested" aria-label="Close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button>
            </div>
            <div class="fd-search-field__action-container">
                <button class="fd-button fd-button--nested" aria-label="Search" aria-disabled="true" tabindex="-1">
                    <i class="sap-icon--slim-arrow-right" role="presentation"></i>
                </button>
            </div>
        </div>
    </div>

    <h4>typed text</h4>
    <div class="fd-search-field">
        <span role="presentation" aria-hidden="true" class="fd-search-field__icon sap-icon--search"></span>
        <input placeholder="Search Anything" type="search" aria-label="Search" class="fd-search-field__input" value="Typing">

        <div class="fd-search-field__actions">
            <div class="fd-search-field__action-container">
                <button class="fd-button fd-button--nested" aria-label="Close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button>
            </div>
            <div class="fd-search-field__action-container">
                <button class="fd-button fd-button--nested is-focus" aria-label="Search" aria-disabled="false">
                    <i class="sap-icon--slim-arrow-right" role="presentation"></i>
                </button>
            </div>
        </div>
    </div>
</div>
```

## States

| Class | Description |
|-------|-------------|
| `is-focus` | Focus state |
| `is-hover` | Hover state |

## BEM Elements

This component uses the following BEM elements:

- `fd-search-field__action-container`
- `fd-search-field__actions`
- `fd-search-field__icon`
- `fd-search-field__input`
- `fd-search-field__underline`

## Related Components

This component works with or depends on:

- `button`
- `dialog`
- `form-item`
- `form-label`
- `form-message`
- `icon`
- `layout-grid`
- `list`
- `popover`
- `search-field`
- `select`
- `toolbar`

## Design Tokens

Key CSS variables used by this component:

- `--fdButton_Nested_Color`
- `--fdSearchField_Action_Container_Size`
- `--fdSearchField_Action_Container_Size_Compact`
- `--fdSearchField_Actions_Offset`
- `--fdSearchField_Actions_Offset_Compact`
- `--fdSearchField_Background`
- `--fdSearchField_Background_Focus`
- `--fdSearchField_Background_Hover`
- `--fdSearchField_Background_Normal`
- `--fdSearchField_BorderRadius`
- `--fdSearchField_Border_Color`
- `--fdSearchField_Border_Radius`
- `--fdSearchField_Box_Shadow`
- `--fdSearchField_Clear_Button_Display`
- `--fdSearchField_Color`

*...and 5 more*

## Examples

### Default

```html
<div class="fd-search-field">
    <span role="presentation" aria-hidden="true" class="fd-search-field__icon sap-icon--search"></span>
    <input placeholder="Search Anything" type="search" aria-label="Search" class="fd-search-field__input">

    <div class="fd-search-field__actions">
        <div class="fd-search-field__action-container">
            <button class="fd-button fd-button--nested" aria-label="Close">
                <i class="sap-icon--decline" role="presentation"></i>
            </button>
            <div class="fd-search-field__action-container">
                <button class="fd-button fd-button--nested" aria-label="Search" aria-disabled="true" tabindex="-1">
                    <i class="sap-icon--slim-arrow-right" role="presentation"></i>
                </button>
            </div>
        </div>
    </div>

    <div class="fd-search-field">
        <span role="presentation" aria-hidden="true" class="fd-search-field__icon sap-icon--search"></span>
        <input placeholder="Search Anything" type="search" aria-label="Search" class="fd-search-field__input is-hover">

        <div class="fd-search-field__actions">
            <div class="fd-search-field__action-container">
                <button class="fd-button fd-button--nested" aria-label="Close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button>
            </div>
            <div class="fd-search-field__action-container">
                <button class="fd-button fd-button--nested" aria-label="Search" aria-disabled="true" tabindex="-1">
                    <i class="sap-icon--slim-arrow-right" role="presentation"></i>
                </button>
            </div>
        </div>
    </div>

    <div class="fd-search-field">
        <span role="presentation" aria-hidden="true" class="fd-search-field__icon sap-icon--search"></span>
        <input placeholder="Search Anything" type="search" aria-label="Search" class="fd-search-field__input is-focus">

        <div class="fd-search-field__actions">
            <div class="fd-search-field__action-container">
                <button class="fd-button fd-button--nested" aria-label="Close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button>
            </div>
            <div class="fd-search-field__action-container">
                <button class="fd-button fd-button--nested" aria-label="Search" aria-disabled="true" tabindex="-1">
                    <i class="sap-icon--slim-arrow-right" role="presentation"></i>
                </button>
            </div>
        </div>
    </div>

    <h4>typed text</h4>
    <div class="fd-search-field">
        <span role="presentation" aria-hidden="true" class="fd-search-field__icon sap-icon--search"></span>
        <input placeholder="Search Anything" type="search" aria-label="Search" class="fd-search-field__input" value="Typing">

        <div class="fd-search-field__actions">
            <div class="fd-search-field__action-container">
                <button class="fd-button fd-button--nested" aria-label="Close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button>
            </div>
            <div class="fd-search-field__action-container">
                <button class="fd-button fd-button--nested is-focus" aria-label="Search" aria-disabled="false">
                    <i class="sap-icon--slim-arrow-right" role="presentation"></i>
                </button>
            </div>
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

This documentation was automatically generated from: `packages/styles/stories/Components/search-field/search-field.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
