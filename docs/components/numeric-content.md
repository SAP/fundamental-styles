---
component: fd-numeric-content
title: Dev/Numeric Content
category: Dev
selector: fd-numeric-content
cssFile: numeric-content.css
sourcePath: packages/styles/stories/Dev/numeric-content/numeric-content.stories.js
tags: []
dependencies: []
relatedComponents: []
stability: experimental
generatedAt: 2026-05-28T20:12:00.920Z
---

# Dev/Numeric Content

> **🧪 EXPERIMENTAL**: This component is experimental and its API may change.



## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/numeric-content.css" rel="stylesheet">

```

## Basic Usage

```html
<div class="tile-content-playground">
    <div class="fd-numeric-content">
        <div class="fd-numeric-content__kpi-container">
            <div class="fd-numeric-content__kpi">1Ñç</div>
        </div>
        <div class="fd-numeric-content__scale-container">
            <div class="fd-numeric-content__scale">
                <i class="fd-numeric-content__scale-arrow sap-icon--down" aria-label="decrease"></i>
                <span class="fd-numeric-content__scale-text">M</span>
            </div>
        </div>
    </div>
</div>
<div class="tile-content-small-playground">
    <div class="fd-numeric-content fd-numeric-content--small-tile">
        <div class="fd-numeric-content__kpi-container">
            <div class="fd-numeric-content__kpi">1Ñç</div>
        </div>
        <div class="fd-numeric-content__scale-container">
            <div class="fd-numeric-content__scale">
                <i class="fd-numeric-content__scale-arrow sap-icon--down" aria-label="decrease"></i>
                <span class="fd-numeric-content__scale-text">milçM</span>
            </div>
        </div>
    </div>
</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-numeric-content--m` | Style variant |
| `fd-numeric-content--s` | Style variant |
| `fd-numeric-content--small-tile` | Style variant |

## BEM Elements

This component uses the following BEM elements:

- `fd-numeric-content__kpi`
- `fd-numeric-content__kpi--critical`
- `fd-numeric-content__kpi--informative`
- `fd-numeric-content__kpi--negative`
- `fd-numeric-content__kpi--positive`
- `fd-numeric-content__kpi-container`
- `fd-numeric-content__launch-icon`
- `fd-numeric-content__launch-icon-container`
- `fd-numeric-content__scale`
- `fd-numeric-content__scale--critical`
- `fd-numeric-content__scale--informative`
- `fd-numeric-content__scale--negative`
- `fd-numeric-content__scale--positive`
- `fd-numeric-content__scale-arrow`
- `fd-numeric-content__scale-container`
- `fd-numeric-content__scale-text`

## Design Tokens

Key CSS variables used by this component:

- `--critical`
- `--informative`
- `--m`
- `--negative`
- `--positive`
- `--s`
- `--sapCriticalTextColor`
- `--sapInformativeTextColor`
- `--sapNegativeTextColor`
- `--sapNeutralTextColor`
- `--sapPositiveTextColor`
- `--sapTile_IconColor`
- `--small-tile`

## Examples

### Large

```html
<div class="tile-content-playground">
    <div class="fd-numeric-content">
        <div class="fd-numeric-content__kpi-container">
            <div class="fd-numeric-content__kpi">1Ñç</div>
        </div>
        <div class="fd-numeric-content__scale-container">
            <div class="fd-numeric-content__scale">
                <i class="fd-numeric-content__scale-arrow sap-icon--down" aria-label="decrease"></i>
                <span class="fd-numeric-content__scale-text">M</span>
            </div>
        </div>
    </div>
</div>
<div class="tile-content-small-playground">
    <div class="fd-numeric-content fd-numeric-content--small-tile">
        <div class="fd-numeric-content__kpi-container">
            <div class="fd-numeric-content__kpi">1Ñç</div>
        </div>
        <div class="fd-numeric-content__scale-container">
            <div class="fd-numeric-content__scale">
                <i class="fd-numeric-content__scale-arrow sap-icon--down" aria-label="decrease"></i>
                <span class="fd-numeric-content__scale-text">milçM</span>
            </div>
        </div>
    </div>
</div>
```

### Medium

```html
<div class="tile-content-playground">
    <div class="fd-numeric-content fd-numeric-content--m">
        <div class="fd-numeric-content__kpi-container">
            <div class="fd-numeric-content__kpi fd-numeric-content__kpi--positive">123</div>
        </div>
        <div class="fd-numeric-content__scale-container">
            <div class="fd-numeric-content__scale fd-numeric-content__scale--positive">
                <i class="fd-numeric-content__scale-arrow sap-icon--down" aria-label="decrease"></i>
            </div>
        </div>
    </div>
</div>
<div class="tile-content-small-playground">
    <div class="fd-numeric-content fd-numeric-content--m fd-numeric-content--small-tile">
        <div class="fd-numeric-content__kpi-container">
            <div class="fd-numeric-content__kpi fd-numeric-content__kpi--negative">-889</div>
        </div>
        <div class="fd-numeric-content__scale-container">
            <div class="fd-numeric-content__scale fd-numeric-content__scale--negative">
                <i class="fd-numeric-content__scale-arrow sap-icon--down" aria-label="decrease"></i>
            </div>
        </div>
    </div>
</div>
```

### Small

```html
<div class="tile-content-playground">
    <div class="fd-numeric-content fd-numeric-content--s">
        <div class="fd-numeric-content__kpi-container">
            <div class="fd-numeric-content__kpi fd-numeric-content__kpi--critical">12</div>
        </div>
        <div class="fd-numeric-content__scale-container">
            <div class="fd-numeric-content__scale fd-numeric-content__scale--critical">
                <i class="fd-numeric-content__scale-arrow sap-icon--down" aria-label="decrease"></i>
                <span class="fd-numeric-content__scale-text">%</span>
            </div>
        </div>
    </div>
</div>
<div class="tile-content-small-playground">
    <div class="fd-numeric-content fd-numeric-content--small-tile fd-numeric-content--m">
        <div class="fd-numeric-content__kpi-container">
            <div class="fd-numeric-content__kpi fd-numeric-content__kpi--informative">1.95</div>
        </div>
    </div>
</div>
```

### LaunchIconLarge

```html
<div class="tile-content-playground">
    <div class="fd-numeric-content">
        <div class="fd-numeric-content__launch-icon-container">
            <i class="fd-numeric-content__launch-icon sap-icon--line-charts" role="presentation"></i>
        </div>
        <div class="fd-numeric-content__kpi-container">
            <div class="fd-numeric-content__kpi">123</div>
        </div>
        <div class="fd-numeric-content__scale-container">
            <div class="fd-numeric-content__scale">
                <i class="fd-numeric-content__scale-arrow sap-icon--down" aria-label="decrease"></i>
                <span class="fd-numeric-content__scale-text">milçM</span>
            </div>
        </div>
    </div>
</div>
<div class="tile-content-small-playground">
    <div class="fd-numeric-content fd-numeric-content--small-tile">
        <div class="fd-numeric-content__launch-icon-container">
            <i class="fd-numeric-content__launch-icon sap-icon--line-charts" role="presentation"></i>
        </div>
        <div class="fd-numeric-content__kpi-container">
            <div class="fd-numeric-content__kpi fd-numeric-content__kpi--positive">1234</div>
        </div>
    </div>
</div>
```

### LaunchIconMedium

```html
<div class="tile-content-playground">
    <div class="fd-numeric-content fd-numeric-content--m">
        <div class="fd-numeric-content__launch-icon-container">
            <i class="fd-numeric-content__launch-icon sap-icon--line-charts" role="presentation"></i>
        </div>
        <div class="fd-numeric-content__kpi-container">
            <div class="fd-numeric-content__kpi fd-numeric-content__kpi--negative">-889</div>
        </div>
        <div class="fd-numeric-content__scale-container">
            <div class="fd-numeric-content__scale fd-numeric-content__scale--negative">
                <i class="fd-numeric-content__scale-arrow sap-icon--down" aria-label="decrease"></i>
                <span class="fd-numeric-content__scale-text">M</span>
            </div>
        </div>
    </div>
</div>
<div class="tile-content-small-playground">
    <div class="fd-numeric-content fd-numeric-content--m fd-numeric-content--small-tile">
        <div class="fd-numeric-content__launch-icon-container">
            <i class="fd-numeric-content__launch-icon sap-icon--line-charts" role="presentation"></i>
        </div>
        <div class="fd-numeric-content__kpi-container">
            <div class="fd-numeric-content__kpi fd-numeric-content__kpi--informative">-88 88</div>
        </div>
        <div class="fd-numeric-content__scale-container">
            <div class="fd-numeric-content__scale fd-numeric-content__scale--informative">
                <i class="fd-numeric-content__scale-arrow sap-icon--down" aria-label="decrease"></i>
                <span class="fd-numeric-content__scale-text">milÇ</span>
            </div>
        </div>
    </div>
</div>
```

### LaunchIconSmall

```html
<div class="tile-content-playground">
    <div class="fd-numeric-content fd-numeric-content--s">
        <div class="fd-numeric-content__launch-icon-container">
            <i class="fd-numeric-content__launch-icon sap-icon--line-charts" role="presentation"></i>
        </div>
        <div class="fd-numeric-content__kpi-container">
            <div class="fd-numeric-content__kpi fd-numeric-content__kpi--critical">123</div>
        </div>
        <div class="fd-numeric-content__scale-container">
            <div class="fd-numeric-content__scale fd-numeric-content__scale--critical">
                <i class="fd-numeric-content__scale-arrow sap-icon--up" aria-label="increase"></i>
                <span class="fd-numeric-content__scale-text">ÑÇmlč</span>
            </div>
        </div>
    </div>
</div>
<div class="tile-content-small-playground">
    <div class="fd-numeric-content fd-numeric-content--s fd-numeric-content--small-tile">
        <div class="fd-numeric-content__launch-icon-container">
            <i class="fd-numeric-content__launch-icon sap-icon--line-charts" role="presentation"></i>
        </div>
        <div class="fd-numeric-content__kpi-container">
            <div class="fd-numeric-content__kpi fd-numeric-content__kpi--positive">123</div>
        </div>
        <div class="fd-numeric-content__scale-container">
            <div class="fd-numeric-content__scale fd-numeric-content__scale--positive">
                <i class="fd-numeric-content__scale-arrow sap-icon--down" aria-label="decrease"></i>
                <span class="fd-numeric-content__scale-text">ÑÇmlč</span>
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

This documentation was automatically generated from: `packages/styles/stories/Dev/numeric-content/numeric-content.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
