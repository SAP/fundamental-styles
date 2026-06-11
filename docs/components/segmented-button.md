---
component: fd-segmented-button
title: Components/Buttons/Segmented Button
category: Components
selector: fd-segmented-button
cssFile: segmented-button.css
sourcePath: packages/styles/stories/Components/segmented-button/button.stories.js
tags: []
dependencies: ["button","icon","message-strip","segmented-button"]
relatedComponents: ["button","icon","message-strip","segmented-button"]
stability: stable
generatedAt: 2026-06-08T17:49:01.942Z
---

# Components/Buttons/Segmented Button

The segmented button displays a group of options. Only one option can be active at a time, while the others remain or become inactive when the initial option is selected.
This button type was previously known as "button group" and is comparable to a radio button group.
It can be displayed by using the container with \

## Dependencies

This component depends on the following CSS files:

- `button.css`
- `icon.css`
- `message-strip.css`
- `segmented-button.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/segmented-button.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/message-strip.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/segmented-button.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-segmented-button" role="listbox" tabindex="-1" aria-multiselectable="true" aria-roledescription="Segmented button group" aria-orientation="horizontal">
    <button
        role="option"
        aria-label="Survey"
        aria-roledescription="Segmented button"
        aria-setsize="5"
        aria-posinset="1"
        aria-selected="false"
        title="Survey"
        class="fd-button">
        <i class="sap-icon--survey" role="presentation" aria-hidden="true"></i>
    </button>

    <button
        role="option"
        aria-label="Chart"
        aria-roledescription="Segmented button"
        aria-setsize="5"
        aria-posinset="2"
        aria-selected="true"
        title="Chart"
        class="fd-button fd-button--toggled">
        <i class="sap-icon--pie-chart" role="presentation" aria-hidden="true"></i>
    </button>

    <button
        role="option"
        aria-label="Basket"
        aria-roledescription="Segmented button"
        aria-setsize="5"
        aria-posinset="3"
        aria-selected="false"
        title="Basket"
        class="fd-button">
        <i class="sap-icon--basket" role="presentation" aria-hidden="true"></i>
    </button>

    <button
        role="option"
        aria-label="Joule"
        aria-roledescription="Segmented button"
        aria-setsize="5"
        aria-posinset="4"
        aria-selected="true"
        title="Joule"
        class="fd-button fd-button--toggled">
        <i class="sap-icon--da" role="presentation" aria-hidden="true"></i>
    </button>

    <button
        role="option"
        aria-label="Pool"
        aria-roledescription="Segmented button"
        aria-setsize="5"
        aria-posinset="5"
        aria-selected="false"
        title="Pool"
        class="fd-button">
        <i class="sap-icon--pool" role="presentation" aria-hidden="true"></i>
    </button>
</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-segmented-button--vertical` | Segmented button can also be rendered vertically if \ |

## Related Components

This component works with or depends on:

- `button`
- `icon`
- `message-strip`
- `segmented-button`

## Design Tokens

Key CSS variables used by this component:

- `--fdButtonBackgroundColor`
- `--fdButtonBorderColor`
- `--fdButtonPrioritizedBackgroundColor`
- `--fdButtonPrioritizedBorderColor`
- `--fdButton_Border_Radius_Left`
- `--fdButton_Border_Radius_Left_RTL`
- `--fdButton_Border_Radius_Right`
- `--fdButton_Border_Radius_Right_RTL`
- `--fdButton_Segmented_Border_Offset`
- `--fdButton_Split_Background_Color`
- `--fdButton_Split_Border_Color`
- `--fdButton_Vertical_Border_Radius_Left`
- `--fdButton_Vertical_Border_Radius_Right`
- `--sapButton_Segment_BorderCornerRadius`
- `--sapButton_Selected_Background`

*...and 2 more*

## Examples

### Segmented button

```html
<div class="fd-segmented-button" role="listbox" tabindex="-1" aria-multiselectable="true" aria-roledescription="Segmented button group" aria-orientation="horizontal">
    <button
        role="option"
        aria-label="Survey"
        aria-roledescription="Segmented button"
        aria-setsize="5"
        aria-posinset="1"
        aria-selected="false"
        title="Survey"
        class="fd-button">
        <i class="sap-icon--survey" role="presentation" aria-hidden="true"></i>
    </button>

    <button
        role="option"
        aria-label="Chart"
        aria-roledescription="Segmented button"
        aria-setsize="5"
        aria-posinset="2"
        aria-selected="true"
        title="Chart"
        class="fd-button fd-button--toggled">
        <i class="sap-icon--pie-chart" role="presentation" aria-hidden="true"></i>
    </button>

    <button
        role="option"
        aria-label="Basket"
        aria-roledescription="Segmented button"
        aria-setsize="5"
        aria-posinset="3"
        aria-selected="false"
        title="Basket"
        class="fd-button">
        <i class="sap-icon--basket" role="presentation" aria-hidden="true"></i>
    </button>

    <button
        role="option"
        aria-label="Joule"
        aria-roledescription="Segmented button"
        aria-setsize="5"
        aria-posinset="4"
        aria-selected="true"
        title="Joule"
        class="fd-button fd-button--toggled">
        <i class="sap-icon--da" role="presentation" aria-hidden="true"></i>
    </button>

    <button
        role="option"
        aria-label="Pool"
        aria-roledescription="Segmented button"
        aria-setsize="5"
        aria-posinset="5"
        aria-selected="false"
        title="Pool"
        class="fd-button">
        <i class="sap-icon--pool" role="presentation" aria-hidden="true"></i>
    </button>
</div>
```

### Vertical alignment

Segmented button can also be rendered vertically if \

```html
<div class="fd-segmented-button fd-segmented-button--vertical" role="listbox" tabindex="-1" aria-multiselectable="true" aria-roledescription="Segmented button group" aria-orientation="vertical">
    <button
        role="option"
        aria-roledescription="Segmented button"
        aria-setsize="7"
        aria-posinset="1"
        aria-selected="false"
        aria-label="Survey"
        title="Survey"
        class="fd-button">
        <i class="sap-icon--survey" role="presentation" aria-hidden="true"></i>
    </button>

    <button
        role="option"
        aria-roledescription="Segmented button"
        aria-setsize="7"
        aria-posinset="2"
        aria-selected="false"
        aria-label="Database"
        title="Database"
        class="fd-button">
        <i class="sap-icon--database" role="presentation" aria-hidden="true"></i>
    </button>

    <button
        role="option"
        aria-roledescription="Segmented button"
        aria-setsize="7"
        aria-posinset="3"
        aria-selected="true"
        aria-label="Chart"
        title="Chart"
        class="fd-button fd-button--toggled">
        <i class="sap-icon--pie-chart" role="presentation" aria-hidden="true"></i>
    </button>

    <button
        role="option"
        aria-roledescription="Segmented button"
        aria-setsize="7"
        aria-posinset="4"
        aria-selected="false"
        aria-label="Basket"
        title="Basket"
        class="fd-button">
        <i class="sap-icon--basket" role="presentation" aria-hidden="true"></i>
    </button>

    <button
        role="option"
        aria-roledescription="Segmented button"
        aria-setsize="7"
        aria-posinset="5"
        aria-selected="true"
        aria-label="Calendar"
        title="Calendar"
        class="fd-button fd-button--toggled">
        <i class="sap-icon--calendar" role="presentation" aria-hidden="true"></i>
    </button>

    <button
        role="option"
        aria-roledescription="Segmented button"
        aria-setsize="7"
        aria-posinset="6"
        aria-selected="false"
        aria-label="Favorite"
        title="Favorite"
        class="fd-button">
        <i class="sap-icon--favorite" role="presentation" aria-hidden="true"></i>
    </button>

    <button
        role="option"
        aria-roledescription="Segmented button"
        aria-setsize="7"
        aria-posinset="7"
        aria-selected="false"
        aria-label="Pool"
        title="Pool"
        class="fd-button">
        <i class="sap-icon--pool" role="presentation" aria-hidden="true"></i>
    </button>
</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/segmented-button/button.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
