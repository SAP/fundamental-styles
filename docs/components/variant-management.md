---
component: fd-variant-management
title: Components/Variant Management
category: Components
selector: fd-variant-management
cssFile: variant-management.css
sourcePath: packages/styles/stories/Components/variant-management/variant-management.stories.js
tags: []
dependencies: ["button","icon","title","variant-management"]
relatedComponents: ["button","icon","title","variant-management"]
stability: stable
generatedAt: 2026-06-08T17:49:02.203Z
---

# Components/Variant Management

Variants store filter settings which have been defined, for example, within the filter bar.
    The filter settings consist of filter parameters, selection fields and layout.
    This control enables the user to load, save, and change variants.
    In some cases, the table settings are also saved within a variant.
    In the context of tables, this control is used to save, manage, and load table settings which include layout, column visibility, sorting, and grouping.

## Dependencies

This component depends on the following CSS files:

- `button.css`
- `icon.css`
- `title.css`
- `variant-management.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/variant-management.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/title.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/variant-management.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-variant-management">
    <div class="fd-variant-management__header" tabindex="0">
        <h1 class="fd-title fd-variant-management__title fd-title--h1">
            Variant Title H1
        </h1>
        <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
            <i role="presentation" class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
</div>
<div class="fd-variant-management">
    <div class="fd-variant-management__header" tabindex="0">
        <h2 class="fd-title fd-variant-management__title fd-title--h2">
            Variant Title H2
        </h2>
        <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
            <i role="presentation" class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
</div>
<div class="fd-variant-management">
    <div class="fd-variant-management__header" tabindex="0">
        <h3 class="fd-title fd-variant-management__title fd-title--h3">
            Variant Title H3
        </h3>
        <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
            <i role="presentation" class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
</div>
<div class="fd-variant-management">
    <div class="fd-variant-management__header" tabindex="0">
        <h4 class="fd-title fd-variant-management__title fd-title--h4">
            Variant Title H4
        </h4>
        <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
            <i role="presentation" class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
</div>
<div class="fd-variant-management">
    <div class="fd-variant-management__header" tabindex="0">
        <h5 class="fd-title fd-variant-management__title fd-title--h5">
            Variant Title H5
        </h5>
        <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
            <i role="presentation" class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
</div>
<div class="fd-variant-management">
    <div class="fd-variant-management__header" tabindex="0">
        <h6 class="fd-title fd-variant-management__title fd-title--h6">
            Variant Title H6
        </h6>
        <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
            <i role="presentation" class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
</div>
<div class="fd-variant-management">
    <div class="fd-variant-management__header" tabindex="0">
        <div class="fd-title fd-variant-management__title fd-variant-management__title--object-header" role="heading" aria-level="4">
            Object Header
        </div>
        <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
            <i role="presentation" class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
</div>
<div class="fd-variant-management">
    <div class="fd-variant-management__header" tabindex="0">
        <div class="fd-title fd-variant-management__title fd-variant-management__title--snapped-object-header" role="heading" aria-level="4">
            Snapped Object Header
        </div>
        <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
            <i role="presentation" class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
</div>
<div class="fd-variant-management">
    <div class="fd-variant-management__header" tabindex="0">
        <div class="fd-title fd-variant-management__title fd-variant-management__title--table" role="heading" aria-level="3">
            Table Header
        </div>
        <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
            <i role="presentation" class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
</div>
<div class="fd-variant-management">
    <div class="fd-variant-management__header" tabindex="0">
        <h4 class="fd-title fd-variant-management__title fd-title--h4 is-disabled">
            Disabled Variant Title H4
        </h4>
        <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button" disabled>
            <i role="presentation" class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
</div>
```

## States

| Class | Description |
|-------|-------------|
| `is-disabled` | Disabled state |

## BEM Elements

This component uses the following BEM elements:

- `fd-variant-management__dirty-indicator`
- `fd-variant-management__dirty-indicator--custom`
- `fd-variant-management__header`
- `fd-variant-management__title`
- `fd-variant-management__title--object-header`
- `fd-variant-management__title--snapped-object-header`
- `fd-variant-management__title--table`

## Related Components

This component works with or depends on:

- `button`
- `icon`
- `title`
- `variant-management`

## Design Tokens

Key CSS variables used by this component:

- `--active`
- `--custom`
- `--fdTitle_Color`
- `--fdTitle_Font_Family`
- `--fdTitle_Font_Size`
- `--fdVariantManagementHeadingActiveColor`
- `--fdVariantManagementHeadingColor`
- `--fdVariantManagementHeadingHoverColor`
- `--object-header`
- `--sapContent_MarkerIconColor`
- `--sapContent_NonInteractiveIconColor`
- `--sapFontSmallSize`
- `--sapGroup_TitleTextColor`
- `--sapGroup_Title_FontSize`
- `--sapObjectHeader_Title_FontFamily`

*...and 4 more*

## Examples

### Sizes

- <b>For matching the dynamic / object page header style:</b> add the modifier class <code>.fd-variant-management__title--object-header</code> to the <code>.fd-variant-management__title</code> base class.
- <b>For matching the dynamic / object page header style when the header is snapped or scrolled:</b> add the modifier class <code>.fd-variant-management__title--snapped-object-header</code> to the <code>.fd-variant-management__title</code> base class.
- <b>For matching the size of Headers within Tables:</b> add the modifier class <code>.fd-variant-management__title--title</code> to the <code>.fd-variant-management__title</code> base class.

```html
<div class="fd-variant-management">
    <div class="fd-variant-management__header" tabindex="0">
        <h1 class="fd-title fd-variant-management__title fd-title--h1">
            Variant Title H1
        </h1>
        <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
            <i role="presentation" class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
</div>
<div class="fd-variant-management">
    <div class="fd-variant-management__header" tabindex="0">
        <h2 class="fd-title fd-variant-management__title fd-title--h2">
            Variant Title H2
        </h2>
        <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
            <i role="presentation" class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
</div>
<div class="fd-variant-management">
    <div class="fd-variant-management__header" tabindex="0">
        <h3 class="fd-title fd-variant-management__title fd-title--h3">
            Variant Title H3
        </h3>
        <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
            <i role="presentation" class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
</div>
<div class="fd-variant-management">
    <div class="fd-variant-management__header" tabindex="0">
        <h4 class="fd-title fd-variant-management__title fd-title--h4">
            Variant Title H4
        </h4>
        <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
            <i role="presentation" class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
</div>
<div class="fd-variant-management">
    <div class="fd-variant-management__header" tabindex="0">
        <h5 class="fd-title fd-variant-management__title fd-title--h5">
            Variant Title H5
        </h5>
        <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
            <i role="presentation" class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
</div>
<div class="fd-variant-management">
    <div class="fd-variant-management__header" tabindex="0">
        <h6 class="fd-title fd-variant-management__title fd-title--h6">
            Variant Title H6
        </h6>
        <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
            <i role="presentation" class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
</div>
<div class="fd-variant-management">
    <div class="fd-variant-management__header" tabindex="0">
        <div class="fd-title fd-variant-management__title fd-variant-management__title--object-header" role="heading" aria-level="4">
            Object Header
        </div>
        <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
            <i role="presentation" class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
</div>
<div class="fd-variant-management">
    <div class="fd-variant-management__header" tabindex="0">
        <div class="fd-title fd-variant-management__title fd-variant-management__title--snapped-object-header" role="heading" aria-level="4">
            Snapped Object Header
        </div>
        <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
            <i role="presentation" class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
</div>
<div class="fd-variant-management">
    <div class="fd-variant-management__header" tabindex="0">
        <div class="fd-title fd-variant-management__title fd-variant-management__title--table" role="heading" aria-level="3">
            Table Header
        </div>
        <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
            <i role="presentation" class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
</div>
<div class="fd-variant-management">
    <div class="fd-variant-management__header" tabindex="0">
        <h4 class="fd-title fd-variant-management__title fd-title--h4 is-disabled">
            Disabled Variant Title H4
        </h4>
        <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button" disabled>
            <i role="presentation" class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
</div>
```

### Dirty state

<p>Variant management supports dirty indicator in cases when selected variant has been modified but not saved.</p>
<p>It can be either an asterisk sign, or a human-readable text.</p>

```html
<div class="fd-variant-management">
    <div class="fd-variant-management__header" tabindex="0">
        <h3 class="fd-title fd-variant-management__title fd-title--h3">
            Unsaved Variant Title
        </h3>
        <span class="fd-variant-management__dirty-indicator">*</span>
        <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
            <i role="presentation" class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
</div>
<div class="fd-variant-management">
    <div class="fd-variant-management__header" tabindex="0">
        <h3 class="fd-title fd-variant-management__title fd-title--h3">
            Unsaved Variant Title
        </h3>
        <span class="fd-variant-management__dirty-indicator fd-variant-management__dirty-indicator--custom">
            changed
        </span>
        <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
            <i role="presentation" class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/variant-management/variant-management.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
