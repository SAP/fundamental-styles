---
component: fd-flexible-column-layout
title: Layouts/Flexible Column
category: Layouts
selector: fd-flexible-column-layout
cssFile: flexible-column-layout.css
sourcePath: packages/styles/stories/Layouts/flexible-column-layout/flexible-column-layout.stories.js
tags: []
dependencies: ["button","flexible-column-layout","icon"]
relatedComponents: ["button","flexible-column-layout","icon"]
stability: stable
generatedAt: 2026-06-08T17:49:02.507Z
---

# Layouts/Flexible Column

The flexible column layout is a layout control that displays multiple floorplans on a single page.
This allows faster and more fluid navigation between multiple floorplans than the usual page-by-page navigation.
The flexible column layout offers different layouts with up to three columns.
Users can expand the column they want to focus on, switch between different layouts, and view the rightmost column in full screen mode.

### Background Designs
- \

## Dependencies

This component depends on the following CSS files:

- `button.css`
- `flexible-column-layout.css`
- `icon.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/flexible-column-layout.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/flexible-column-layout.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-flexible-column-layout">

    <div class="fd-flexible-column-layout__separator">
        <button class="fd-button fd-button--transparent fd-flexible-column-layout__button"
            aria-label="Expand">
            <i class="sap-icon--slim-arrow-right" role="presentation"></i>
        </button>
    </div>

    <div class="fd-flexible-column-layout__separator">
        <button class="fd-button fd-button--transparent fd-flexible-column-layout__button"
            aria-label="Expand">
            <i class="sap-icon--slim-arrow-left" role="presentation"></i>
        </button>
    </div>

</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-flexible-column-layout--translucent` | Flexible Column Layout with translucent separators
- Max width of the device: \ |
| `fd-flexible-column-layout--transparent` | Flexible Column with transparent separators
- Width of the device: Max: \ |

## BEM Elements

This component uses the following BEM elements:

- `fd-flexible-column-layout__button`
- `fd-flexible-column-layout__column`
- `fd-flexible-column-layout__column--hidden`
- `fd-flexible-column-layout__separator`

## Related Components

This component works with or depends on:

- `button`
- `flexible-column-layout`
- `icon`

## Design Tokens

Key CSS variables used by this component:

- `--fdFlexibleColumnLayoutToggleImage`
- `--fdFlexibleColumnLayout_Background_Solid`
- `--fdFlexibleColumnLayout_Background_Translucent`
- `--fdFlexibleColumnLayout_Background_Transparent`
- `--fdFlexibleColumnLayout_Border`
- `--fdFlexibleColumnLayout_Toggle_Image_Color`
- `--hidden`
- `--translucent`
- `--transparent`

## Examples

### ThreeColumnsLayout

- Minimum width of the device: \

```html
<div class="fd-flexible-column-layout">

    <div class="fd-flexible-column-layout__separator">
        <button class="fd-button fd-button--transparent fd-flexible-column-layout__button"
            aria-label="Expand">
            <i class="sap-icon--slim-arrow-right" role="presentation"></i>
        </button>
    </div>

    <div class="fd-flexible-column-layout__separator">
        <button class="fd-button fd-button--transparent fd-flexible-column-layout__button"
            aria-label="Expand">
            <i class="sap-icon--slim-arrow-left" role="presentation"></i>
        </button>
    </div>

</div>
```

### TwoColumnsLayout

Flexible Column with transparent separators
- Width of the device: Max: \

```html
<div class="fd-flexible-column-layout fd-flexible-column-layout--transparent">
    <div class="fd-flexible-column-layout__column">

        <div class="fd-flexible-column-layout__separator">
            <button class="fd-button fd-button--transparent fd-flexible-column-layout__button"
                aria-label="Expand">
                <i class="sap-icon--slim-arrow-right" role="presentation"></i>
            </button>
        </div>

        <div class="fd-flexible-column-layout__separator">
            <button class="fd-button fd-button--transparent fd-flexible-column-layout__button"
                aria-label="Expand">
                <i class="sap-icon--slim-arrow-left" role="presentation"></i>
            </button>
        </div>

    </div>
</div>
```

### OneColumnsLayout

Flexible Column Layout with translucent separators
- Max width of the device: \

```html
<div class="fd-flexible-column-layout fd-flexible-column-layout--translucent">
    <div class="fd-flexible-column-layout__column fd-flexible-column-layout__column--hidden">

        <div class="fd-flexible-column-layout__separator">
            <button class="fd-button fd-button--transparent fd-flexible-column-layout__button"
                aria-label="Expand">
                <i class="sap-icon--slim-arrow-right" role="presentation"></i>
            </button>
        </div>

        <div class="fd-flexible-column-layout__separator">
            <button class="fd-button fd-button--transparent fd-flexible-column-layout__button"
                aria-label="Expand">
                <i class="sap-icon--slim-arrow-left" role="presentation"></i>
            </button>
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

This documentation was automatically generated from: `packages/styles/stories/Layouts/flexible-column-layout/flexible-column-layout.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
