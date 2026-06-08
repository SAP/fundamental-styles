---
component: fd-rating-indicator
title: Components/Rating Indicator
category: Components
selector: fd-rating-indicator
cssFile: rating-indicator.css
sourcePath: packages/styles/stories/Components/rating-indicator/rating-indicator.stories.js
tags: []
dependencies: ["icon","rating-indicator"]
relatedComponents: ["icon","rating-indicator"]
stability: stable
generatedAt: 2026-06-08T17:49:02.169Z
---

# Components/Rating Indicator

The rating indicator displays a group of icons or images (usually stars) that indicate a rating.
It allows users to rate content on a numeric scale, typically from 1 (lowest) to 5 (highest).
Although the maximum amount is 7 for the icons or images, it is highly recommended to display the default amount of 5.

##Usage
Use the rating indicator in forms, tables, or in a dialog box.

## Usage Guidelines

Use the rating indicator in forms, tables, or in a dialog box.

## Dependencies

This component depends on the following CSS files:

- `icon.css`
- `rating-indicator.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/rating-indicator.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/rating-indicator.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="example-container">
    <span>Default (Medium):</span>
    <div class="fd-rating-indicator fd-rating-indicator--hide-dynamic-text">
        <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
            <input aria-label="0 star" type="radio" class="fd-rating-indicator__input fd-rating-indicator__input--zero-rating" id="rating-0" name="rating" value="0">
            <label class="fd-rating-indicator__label fd-rating-indicator__label--zero-rating" for="rating-0" aria-hidden="true"></label>

            <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-1" name="rating" value="1">
            <label class="fd-rating-indicator__label" for="rating-1"></label>

            <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-2" name="rating" value="2" checked>
            <label class="fd-rating-indicator__label" for="rating-2"></label>

            <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-3" name="rating" value="3">
            <label class="fd-rating-indicator__label" for="rating-3"></label>

            <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-4" name="rating" value="4">
            <label class="fd-rating-indicator__label" for="rating-4"></label>

            <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-5" name="rating" value="5">
            <label class="fd-rating-indicator__label" for="rating-5"></label>
        </div>
        <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
    </div>
</div>

<div class="example-container">
    <span>Extra small:</span>
    <div class="fd-rating-indicator fd-rating-indicator--xs">
        <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
            <input aria-label="0 star" type="radio" class="fd-rating-indicator__input fd-rating-indicator__input--zero-rating" id="rating-xs-0" name="rating-xs" value="0">
            <label class="fd-rating-indicator__label fd-rating-indicator__label--zero-rating" for="rating-xs-0" aria-hidden="true"></label>

            <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-xs-1" name="rating-xs" value="1">
            <label class="fd-rating-indicator__label" for="rating-xs-1"></label>

            <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-xs-2" name="rating-xs" value="2" checked>
            <label class="fd-rating-indicator__label" for="rating-xs-2"></label>

            <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-xs-3" name="rating-xs" value="3">
            <label class="fd-rating-indicator__label" for="rating-xs-3"></label>

            <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-xs-4" name="rating-xs" value="4">
            <label class="fd-rating-indicator__label" for="rating-xs-4"></label>

            <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-xs-5" name="rating-xs" value="5">
            <label class="fd-rating-indicator__label" for="rating-xs-5"></label>
        </div>

        <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
    </div>
</div>

<div class="example-container">
    <span>Small:</span>
    <div class="fd-rating-indicator fd-rating-indicator--sm">
        <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
            <input aria-label="0 star" type="radio" class="fd-rating-indicator__input fd-rating-indicator__input--zero-rating" id="rating-s-0" name="rating-s" value="0">
            <label class="fd-rating-indicator__label fd-rating-indicator__label--zero-rating" for="rating-s-0" aria-hidden="true"></label>

            <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-s-1" name="rating-s" value="1">
            <label class="fd-rating-indicator__label" for="rating-s-1"></label>

            <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-s-2" name="rating-s" value="2" checked>
            <label class="fd-rating-indicator__label" for="rating-s-2"></label>

            <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-s-3" name="rating-s" value="3">
            <label class="fd-rating-indicator__label" for="rating-s-3"></label>

            <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-s-4" name="rating-s" value="4">
            <label class="fd-rating-indicator__label" for="rating-s-4"></label>

            <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-s-5" name="rating-s" value="5">
            <label class="fd-rating-indicator__label" for="rating-s-5"></label>
        </div>

        <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
    </div>
</div>

<div class="example-container">
    <span>Large:</span>
    <div class="fd-rating-indicator fd-rating-indicator--lg">
        <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
            <input aria-label="0 star" type="radio" class="fd-rating-indicator__input fd-rating-indicator__input--zero-rating" id="rating-l-0" name="rating-l" value="0">
            <label class="fd-rating-indicator__label fd-rating-indicator__label--zero-rating" for="rating-l-0" aria-hidden="true"></label>

            <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-l-1" name="rating-l" value="1">
            <label class="fd-rating-indicator__label" for="rating-l-1"></label>

            <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-l-2" name="rating-l" value="2" checked>
            <label class="fd-rating-indicator__label" for="rating-l-2"></label>

            <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-l-3" name="rating-l" value="3">
            <label class="fd-rating-indicator__label" for="rating-l-3"></label>

            <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-l-4" name="rating-l" value="4">
            <label class="fd-rating-indicator__label" for="rating-l-4"></label>

            <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-l-5" name="rating-l" value="5">
            <label class="fd-rating-indicator__label" for="rating-l-5"></label>
        </div>
        <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
    </div>
</div>

<div class="example-container">
    <span>Cozy:</span>
    <div class="fd-rating-indicator">
        <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
            <input aria-label="0 star" type="radio" class="fd-rating-indicator__input fd-rating-indicator__input--zero-rating" id="rating-cozy-0" name="rating-cozy" value="0">
            <label class="fd-rating-indicator__label fd-rating-indicator__label--zero-rating" for="rating-cozy-0" aria-hidden="true"></label>

            <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-cozy-1" name="rating-cozy" value="1">
            <label class="fd-rating-indicator__label" for="rating-cozy-1"></label>

            <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-cozy-2" name="rating-cozy" value="2" checked>
            <label class="fd-rating-indicator__label" for="rating-cozy-2"></label>

            <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-cozy-3" name="rating-cozy" value="3">
            <label class="fd-rating-indicator__label" for="rating-cozy-3"></label>

            <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-cozy-4" name="rating-cozy" value="4">
            <label class="fd-rating-indicator__label" for="rating-cozy-4"></label>

            <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-cozy-5" name="rating-cozy" value="5">
            <label class="fd-rating-indicator__label" for="rating-cozy-5"></label>
        </div>
        <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
    </div>
</div>

<div class="example-container">
    <span>Compact:</span>
    <div class="fd-rating-indicator fd-rating-indicator--compact">
        <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
            <input aria-label="0 star" type="radio" class="fd-rating-indicator__input fd-rating-indicator__input--zero-rating" id="rating-compact-0" name="rating-compact" value="0">
            <label class="fd-rating-indicator__label fd-rating-indicator__label--zero-rating" for="rating-compact-0" aria-hidden="true"></label>

            <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-compact-1" name="rating-compact" value="1">
            <label class="fd-rating-indicator__label" for="rating-compact-1"></label>

            <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-compact-2" name="rating-compact" value="2" checked>
            <label class="fd-rating-indicator__label" for="rating-compact-2"></label>

            <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-compact-3" name="rating-compact" value="3">
            <label class="fd-rating-indicator__label" for="rating-compact-3"></label>

            <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-compact-4" name="rating-compact" value="4">
            <label class="fd-rating-indicator__label" for="rating-compact-4"></label>

            <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-compact-5" name="rating-compact" value="5">
            <label class="fd-rating-indicator__label" for="rating-compact-5"></label>
        </div>
        <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
    </div>
</div>

<div class="example-container">
    <span>Condensed:</span>
    <div class="fd-rating-indicator fd-rating-indicator--condensed">
        <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
            <input aria-label="0 star" type="radio" class="fd-rating-indicator__input fd-rating-indicator__input--zero-rating" id="rating-condensed-0" name="rating-condensed" value="0">
            <label class="fd-rating-indicator__label fd-rating-indicator__label--zero-rating" for="rating-condensed-0" aria-hidden="true"></label>

            <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-condensed-1" name="rating-condensed" value="1">
            <label class="fd-rating-indicator__label" for="rating-condensed-1"></label>

            <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-condensed-2" name="rating-condensed" value="2" checked>
            <label class="fd-rating-indicator__label" for="rating-condensed-2"></label>

            <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-condensed-3" name="rating-condensed" value="3">
            <label class="fd-rating-indicator__label" for="rating-condensed-3"></label>

            <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-condensed-4" name="rating-condensed" value="4">
            <label class="fd-rating-indicator__label" for="rating-condensed-4"></label>

            <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-condensed-5" name="rating-condensed" value="5">
            <label class="fd-rating-indicator__label" for="rating-condensed-5"></label>
        </div>
        <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
    </div>
</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-rating-indicator--compact` | Style variant |
| `fd-rating-indicator--condensed` | Style variant |
| `fd-rating-indicator--display-mode` | Style variant |
| `fd-rating-indicator--half-star` | Style variant |
| `fd-rating-indicator--hide-dynamic-text` | Style variant |
| `fd-rating-indicator--icon` | To make the rating indicator to use custom icons needs to be added class \ |
| `fd-rating-indicator--lg` | Style variant |
| `fd-rating-indicator--non-interactive` | If you want to include a rating indicator in a display-only form,
add the \ |
| `fd-rating-indicator--sm` | | **Size**       | **rem**    | **Modifier class**        |
| :----------    | :--------- | -----------------------:  |
| Extra small    | 0.75rem    | \ |
| `fd-rating-indicator--xs` | Style variant |

## BEM Elements

This component uses the following BEM elements:

- `fd-rating-indicator__container`
- `fd-rating-indicator__dynamic-text`
- `fd-rating-indicator__input`
- `fd-rating-indicator__input--zero-rating`
- `fd-rating-indicator__label`
- `fd-rating-indicator__label--zero-rating`
- `fd-rating-indicator__label-rated`
- `fd-rating-indicator__label-unrated`

## Related Components

This component works with or depends on:

- `icon`
- `rating-indicator`

## Design Tokens

Key CSS variables used by this component:

- `--display-mode`
- `--fdRating_Indicator_Border_Radius`
- `--fdRating_Indicator_Disabled_Control_Opacity`
- `--fdRating_Indicator_Disabled_Selected_Color`
- `--fdRating_Indicator_Disabled_Unselected_Color`
- `--fdRating_Indicator_Display_Only_Selected_Color`
- `--fdRating_Indicator_Focus_Outline_Offset`
- `--fdRating_Indicator_Selected_Hover_Opacity`
- `--fdRating_Indicator_View_Mode_Unselected_Icon_Size_Ratio`
- `--fontSize`
- `--half-star`
- `--hide-dynamic-text`
- `--icon`
- `--non-interactive`
- `--sapContent_FocusColor`

*...and 5 more*

## Examples

### Sizes

| **Size**       | **rem**    | **Modifier class**        |
| :----------    | :--------- | -----------------------:  |
| Extra small    | 0.75rem    | \

```html
<div class="example-container">
    <span>Default (Medium):</span>
    <div class="fd-rating-indicator fd-rating-indicator--hide-dynamic-text">
        <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
            <input aria-label="0 star" type="radio" class="fd-rating-indicator__input fd-rating-indicator__input--zero-rating" id="rating-0" name="rating" value="0">
            <label class="fd-rating-indicator__label fd-rating-indicator__label--zero-rating" for="rating-0" aria-hidden="true"></label>

            <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-1" name="rating" value="1">
            <label class="fd-rating-indicator__label" for="rating-1"></label>

            <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-2" name="rating" value="2" checked>
            <label class="fd-rating-indicator__label" for="rating-2"></label>

            <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-3" name="rating" value="3">
            <label class="fd-rating-indicator__label" for="rating-3"></label>

            <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-4" name="rating" value="4">
            <label class="fd-rating-indicator__label" for="rating-4"></label>

            <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-5" name="rating" value="5">
            <label class="fd-rating-indicator__label" for="rating-5"></label>
        </div>
        <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
    </div>
</div>

<div class="example-container">
    <span>Extra small:</span>
    <div class="fd-rating-indicator fd-rating-indicator--xs">
        <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
            <input aria-label="0 star" type="radio" class="fd-rating-indicator__input fd-rating-indicator__input--zero-rating" id="rating-xs-0" name="rating-xs" value="0">
            <label class="fd-rating-indicator__label fd-rating-indicator__label--zero-rating" for="rating-xs-0" aria-hidden="true"></label>

            <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-xs-1" name="rating-xs" value="1">
            <label class="fd-rating-indicator__label" for="rating-xs-1"></label>

            <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-xs-2" name="rating-xs" value="2" checked>
            <label class="fd-rating-indicator__label" for="rating-xs-2"></label>

            <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-xs-3" name="rating-xs" value="3">
            <label class="fd-rating-indicator__label" for="rating-xs-3"></label>

            <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-xs-4" name="rating-xs" value="4">
            <label class="fd-rating-indicator__label" for="rating-xs-4"></label>

            <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-xs-5" name="rating-xs" value="5">
            <label class="fd-rating-indicator__label" for="rating-xs-5"></label>
        </div>

        <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
    </div>
</div>

<div class="example-container">
    <span>Small:</span>
    <div class="fd-rating-indicator fd-rating-indicator--sm">
        <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
            <input aria-label="0 star" type="radio" class="fd-rating-indicator__input fd-rating-indicator__input--zero-rating" id="rating-s-0" name="rating-s" value="0">
            <label class="fd-rating-indicator__label fd-rating-indicator__label--zero-rating" for="rating-s-0" aria-hidden="true"></label>

            <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-s-1" name="rating-s" value="1">
            <label class="fd-rating-indicator__label" for="rating-s-1"></label>

            <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-s-2" name="rating-s" value="2" checked>
            <label class="fd-rating-indicator__label" for="rating-s-2"></label>

            <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-s-3" name="rating-s" value="3">
            <label class="fd-rating-indicator__label" for="rating-s-3"></label>

            <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-s-4" name="rating-s" value="4">
            <label class="fd-rating-indicator__label" for="rating-s-4"></label>

            <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-s-5" name="rating-s" value="5">
            <label class="fd-rating-indicator__label" for="rating-s-5"></label>
        </div>

        <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
    </div>
</div>

<div class="example-container">
    <span>Large:</span>
    <div class="fd-rating-indicator fd-rating-indicator--lg">
        <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
            <input aria-label="0 star" type="radio" class="fd-rating-indicator__input fd-rating-indicator__input--zero-rating" id="rating-l-0" name="rating-l" value="0">
            <label class="fd-rating-indicator__label fd-rating-indicator__label--zero-rating" for="rating-l-0" aria-hidden="true"></label>

            <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-l-1" name="rating-l" value="1">
            <label class="fd-rating-indicator__label" for="rating-l-1"></label>

            <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-l-2" name="rating-l" value="2" checked>
            <label class="fd-rating-indicator__label" for="rating-l-2"></label>

            <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-l-3" name="rating-l" value="3">
            <label class="fd-rating-indicator__label" for="rating-l-3"></label>

            <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-l-4" name="rating-l" value="4">
            <label class="fd-rating-indicator__label" for="rating-l-4"></label>

            <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-l-5" name="rating-l" value="5">
            <label class="fd-rating-indicator__label" for="rating-l-5"></label>
        </div>
        <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
    </div>
</div>

<div class="example-container">
    <span>Cozy:</span>
    <div class="fd-rating-indicator">
        <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
            <input aria-label="0 star" type="radio" class="fd-rating-indicator__input fd-rating-indicator__input--zero-rating" id="rating-cozy-0" name="rating-cozy" value="0">
            <label class="fd-rating-indicator__label fd-rating-indicator__label--zero-rating" for="rating-cozy-0" aria-hidden="true"></label>

            <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-cozy-1" name="rating-cozy" value="1">
            <label class="fd-rating-indicator__label" for="rating-cozy-1"></label>

            <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-cozy-2" name="rating-cozy" value="2" checked>
            <label class="fd-rating-indicator__label" for="rating-cozy-2"></label>

            <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-cozy-3" name="rating-cozy" value="3">
            <label class="fd-rating-indicator__label" for="rating-cozy-3"></label>

            <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-cozy-4" name="rating-cozy" value="4">
            <label class="fd-rating-indicator__label" for="rating-cozy-4"></label>

            <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-cozy-5" name="rating-cozy" value="5">
            <label class="fd-rating-indicator__label" for="rating-cozy-5"></label>
        </div>
        <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
    </div>
</div>

<div class="example-container">
    <span>Compact:</span>
    <div class="fd-rating-indicator fd-rating-indicator--compact">
        <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
            <input aria-label="0 star" type="radio" class="fd-rating-indicator__input fd-rating-indicator__input--zero-rating" id="rating-compact-0" name="rating-compact" value="0">
            <label class="fd-rating-indicator__label fd-rating-indicator__label--zero-rating" for="rating-compact-0" aria-hidden="true"></label>

            <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-compact-1" name="rating-compact" value="1">
            <label class="fd-rating-indicator__label" for="rating-compact-1"></label>

            <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-compact-2" name="rating-compact" value="2" checked>
            <label class="fd-rating-indicator__label" for="rating-compact-2"></label>

            <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-compact-3" name="rating-compact" value="3">
            <label class="fd-rating-indicator__label" for="rating-compact-3"></label>

            <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-compact-4" name="rating-compact" value="4">
            <label class="fd-rating-indicator__label" for="rating-compact-4"></label>

            <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-compact-5" name="rating-compact" value="5">
            <label class="fd-rating-indicator__label" for="rating-compact-5"></label>
        </div>
        <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
    </div>
</div>

<div class="example-container">
    <span>Condensed:</span>
    <div class="fd-rating-indicator fd-rating-indicator--condensed">
        <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
            <input aria-label="0 star" type="radio" class="fd-rating-indicator__input fd-rating-indicator__input--zero-rating" id="rating-condensed-0" name="rating-condensed" value="0">
            <label class="fd-rating-indicator__label fd-rating-indicator__label--zero-rating" for="rating-condensed-0" aria-hidden="true"></label>

            <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-condensed-1" name="rating-condensed" value="1">
            <label class="fd-rating-indicator__label" for="rating-condensed-1"></label>

            <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-condensed-2" name="rating-condensed" value="2" checked>
            <label class="fd-rating-indicator__label" for="rating-condensed-2"></label>

            <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-condensed-3" name="rating-condensed" value="3">
            <label class="fd-rating-indicator__label" for="rating-condensed-3"></label>

            <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-condensed-4" name="rating-condensed" value="4">
            <label class="fd-rating-indicator__label" for="rating-condensed-4"></label>

            <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-condensed-5" name="rating-condensed" value="5">
            <label class="fd-rating-indicator__label" for="rating-condensed-5"></label>
        </div>
        <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
    </div>
</div>
```

### Custom icons

To make the rating indicator to use custom icons needs to be added class \

```html
<div class="example-container">
    <div class="fd-rating-indicator fd-rating-indicator--icon">
        <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
            <input aria-label="0 star" type="radio" class="fd-rating-indicator__input fd-rating-indicator__input--zero-rating" id="rating-icon-0" name="rating-icon" value="0">
            <label class="fd-rating-indicator__label fd-rating-indicator__label--zero-rating" for="rating-icon-0" aria-hidden="true"></label>

            <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-icon-1" name="rating-icon" value="1">
            <label class="fd-rating-indicator__label" for="rating-icon-1">
                <i class="fd-rating-indicator__label-rated sap-icon--notification"></i>
                <i class="fd-rating-indicator__label-unrated sap-icon--bo-strategy-management"></i>
            </label>

            <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-icon-2" name="rating-icon" value=2" checked>
            <label class="fd-rating-indicator__label" for="rating-icon-2">
                <i class="fd-rating-indicator__label-rated sap-icon--notification"></i>
                <i class="fd-rating-indicator__label-unrated sap-icon--bo-strategy-management"></i>
            </label>

            <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-icon-3" name="rating-icon" value="3">
            <label class="fd-rating-indicator__label" for="rating-icon-3">
                <i class="fd-rating-indicator__label-rated sap-icon--notification"></i>
                <i class="fd-rating-indicator__label-unrated sap-icon--bo-strategy-management"></i>
            </label>

            <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-icon-4" name="rating-icon" value="4">
            <label class="fd-rating-indicator__label" for="rating-icon-4">
                <i class="fd-rating-indicator__label-rated sap-icon--notification"></i>
                <i class="fd-rating-indicator__label-unrated sap-icon--bo-strategy-management"></i>
            </label>

            <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-icon-5" name="rating-icon" value="5">
            <label class="fd-rating-indicator__label" for="rating-icon-5">
                <i class="fd-rating-indicator__label-rated sap-icon--notification"></i>
                <i class="fd-rating-indicator__label-unrated sap-icon--bo-strategy-management"></i>
            </label>
        </div>
        <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
    </div>
</div>
```

### Half values

To display half values with the rating indicator i.e 2.5 stars, add the \

```html
<div class="example-container">
    <span>Default:</span>
    <div class="fd-rating-indicator fd-rating-indicator--half-star">
        <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
            <input aria-label="0 star" type="radio" class="fd-rating-indicator__input fd-rating-indicator__input--zero-rating" id="rating-half-sizes-0" name="rating-half-sizes" value="0">
            <label class="fd-rating-indicator__label fd-rating-indicator__label--zero-rating" for="rating-half-sizes-0" aria-hidden="true"></label>

            <input aria-label="half star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-05" name="rating-half-sizes" value="0.5">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-05"></label>

            <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-1" name="rating-half-sizes" value="1">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-1"></label>

            <input aria-label="1 and half star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-15" name="rating-half-sizes" value="1.5">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-15"></label>

            <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-2" name="rating-half-sizes" value=2">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-2"></label>

            <input aria-label="2 and half star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-25" name="rating-half-sizes" value="2.5" checked>
            <label class="fd-rating-indicator__label" for="rating-half-sizes-25"></label>

            <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-3" name="rating-half-sizes" value="3">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-3"></label>

            <input aria-label="3 and half star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-35" name="rating-half-sizes" value="3.5">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-35"></label>

            <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-4" name="rating-half-sizes" value="4">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-4"></label>

            <input aria-label="4 and half star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-45" name="rating-half-sizes" value="4.5">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-45"></label>

            <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-5" name="rating-half-sizes" value="5">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-5"></label>
        </div>
        <span class="fd-rating-indicator__dynamic-text">(2.5 of 5)</span>
    </div>
</div>

<div class="example-container">
    <span>Custome icons:</span>
    <div class="fd-rating-indicator fd-rating-indicator--half-star fd-rating-indicator--icon">
        <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
            <input aria-label="0 star" type="radio" class="fd-rating-indicator__input fd-rating-indicator__input--zero-rating" id="rating-half-sizes-custome-icons-0" name="rating-half-sizes-custome-icons" value="0">
            <label class="fd-rating-indicator__label fd-rating-indicator__label--zero-rating" for="rating-half-sizes-custome-icons-0" aria-hidden="true"></label>

            <input aria-label="half star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-custome-icons-05" name="rating-half-sizes-custome-icons" value="0.5">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-custome-icons-05">
                <i class="fd-rating-indicator__label-rated sap-icon--notification"></i>
                <i class="fd-rating-indicator__label-unrated sap-icon--bo-strategy-management"></i>
            </label>

            <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-custome-icons-1" name="rating-half-sizes-custome-icons" value="1">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-custome-icons-1">
                <i class="fd-rating-indicator__label-rated sap-icon--notification"></i>
                <i class="fd-rating-indicator__label-unrated sap-icon--bo-strategy-management"></i>
            </label>

            <input aria-label="1 and half star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-custome-icons-15" name="rating-half-sizes-custome-icons" value="1.5">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-custome-icons-15">
                <i class="fd-rating-indicator__label-rated sap-icon--notification"></i>
                <i class="fd-rating-indicator__label-unrated sap-icon--bo-strategy-management"></i>
            </label>

            <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-custome-icons-2" name="rating-half-sizes-custome-icons" value=2">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-custome-icons-2">
                <i class="fd-rating-indicator__label-rated sap-icon--notification"></i>
                <i class="fd-rating-indicator__label-unrated sap-icon--bo-strategy-management"></i>
            </label>

            <input aria-label="2 and half star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-custome-icons-25" name="rating-half-sizes-custome-icons" value="2.5" checked>
            <label class="fd-rating-indicator__label" for="rating-half-sizes-custome-icons-25">
                <i class="fd-rating-indicator__label-rated sap-icon--notification"></i>
                <i class="fd-rating-indicator__label-unrated sap-icon--bo-strategy-management"></i>
            </label>

            <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-custome-icons-3" name="rating-half-sizes-custome-icons" value="3">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-custome-icons-3">
                <i class="fd-rating-indicator__label-rated sap-icon--notification"></i>
                <i class="fd-rating-indicator__label-unrated sap-icon--bo-strategy-management"></i>
            </label>

            <input aria-label="3 and half star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-custome-icons-35" name="rating-half-sizes-custome-icons" value="3.5">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-custome-icons-35">
                <i class="fd-rating-indicator__label-rated sap-icon--notification"></i>
                <i class="fd-rating-indicator__label-unrated sap-icon--bo-strategy-management"></i>
            </label>

            <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-custome-icons-4" name="rating-half-sizes-custome-icons" value="4">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-custome-icons-4">
                <i class="fd-rating-indicator__label-rated sap-icon--notification"></i>
                <i class="fd-rating-indicator__label-unrated sap-icon--bo-strategy-management"></i>
            </label>

            <input aria-label="4 and half star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-custome-icons-45" name="rating-half-sizes-custome-icons" value="4.5">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-custome-icons-45">
                <i class="fd-rating-indicator__label-rated sap-icon--notification"></i>
                <i class="fd-rating-indicator__label-unrated sap-icon--bo-strategy-management"></i>
            </label>

            <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-custome-icons-5" name="rating-half-sizes-custome-icons" value="5">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-custome-icons-5">
                <i class="fd-rating-indicator__label-rated sap-icon--notification"></i>
                <i class="fd-rating-indicator__label-unrated sap-icon--bo-strategy-management"></i>
            </label>
        </div>
        <span class="fd-rating-indicator__dynamic-text">(2.5 of 5)</span>
    </div>
</div>

<div class="example-container">
    <span>Custome icons and size --lg:</span>
    <div class="fd-rating-indicator fd-rating-indicator--half-star fd-rating-indicator--icon fd-rating-indicator--lg">
        <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
            <input aria-label="0 star" type="radio" class="fd-rating-indicator__input fd-rating-indicator__input--zero-rating" id="rating-half-sizes-custome-icons-lg-0" name="rating-half-sizes-custome-icons-lg" value="0">
            <label class="fd-rating-indicator__label fd-rating-indicator__label--zero-rating" for="rating-half-sizes-custome-icons-lg-0" aria-hidden="true"></label>

            <input aria-label="half star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-custome-icons-lg-05" name="rating-half-sizes-custome-icons-lg" value="0.5">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-custome-icons-lg-05">
                <i class="fd-rating-indicator__label-rated sap-icon--notification"></i>
                <i class="fd-rating-indicator__label-unrated sap-icon--bo-strategy-management"></i>
            </label>

            <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-custome-icons-lg-1" name="rating-half-sizes-custome-icons-lg" value="1">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-custome-icons-lg-1">
                <i class="fd-rating-indicator__label-rated sap-icon--notification"></i>
                <i class="fd-rating-indicator__label-unrated sap-icon--bo-strategy-management"></i>
            </label>

            <input aria-label="1 and half star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-custome-icons-lg-15" name="rating-half-sizes-custome-icons-lg" value="1.5">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-custome-icons-lg-15">
                <i class="fd-rating-indicator__label-rated sap-icon--notification"></i>
                <i class="fd-rating-indicator__label-unrated sap-icon--bo-strategy-management"></i>
            </label>

            <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-custome-icons-lg-2" name="rating-half-sizes-custome-icons-lg" value=2">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-custome-icons-lg-2">
                <i class="fd-rating-indicator__label-rated sap-icon--notification"></i>
                <i class="fd-rating-indicator__label-unrated sap-icon--bo-strategy-management"></i>
            </label>

            <input aria-label="2 and half star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-custome-icons-lg-25" name="rating-half-sizes-custome-icons-lg" value="2.5" checked>
            <label class="fd-rating-indicator__label" for="rating-half-sizes-custome-icons-lg-25">
                <i class="fd-rating-indicator__label-rated sap-icon--notification"></i>
                <i class="fd-rating-indicator__label-unrated sap-icon--bo-strategy-management"></i>
            </label>

            <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-custome-icons-lg-3" name="rating-half-sizes-custome-icons-lg" value="3">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-custome-icons-lg-3">
                <i class="fd-rating-indicator__label-rated sap-icon--notification"></i>
                <i class="fd-rating-indicator__label-unrated sap-icon--bo-strategy-management"></i>
            </label>

            <input aria-label="3 and half star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-custome-icons-lg-35" name="rating-half-sizes-custome-icons-lg" value="3.5">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-custome-icons-lg-35">
                <i class="fd-rating-indicator__label-rated sap-icon--notification"></i>
                <i class="fd-rating-indicator__label-unrated sap-icon--bo-strategy-management"></i>
            </label>

            <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-custome-icons-lg-4" name="rating-half-sizes-custome-icons-lg" value="4">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-custome-icons-lg-4">
                <i class="fd-rating-indicator__label-rated sap-icon--notification"></i>
                <i class="fd-rating-indicator__label-unrated sap-icon--bo-strategy-management"></i>
            </label>

            <input aria-label="4 and half star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-custome-icons-lg-45" name="rating-half-sizes-custome-icons-lg" value="4.5">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-custome-icons-lg-45">
                <i class="fd-rating-indicator__label-rated sap-icon--notification"></i>
                <i class="fd-rating-indicator__label-unrated sap-icon--bo-strategy-management"></i>
            </label>

            <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-half-sizes-custome-icons-lg-5" name="rating-half-sizes-custome-icons-lg" value="5">
            <label class="fd-rating-indicator__label" for="rating-half-sizes-custome-icons-lg-5">
                <i class="fd-rating-indicator__label-rated sap-icon--notification"></i>
                <i class="fd-rating-indicator__label-unrated sap-icon--bo-strategy-management"></i>
            </label>
        </div>
        <span class="fd-rating-indicator__dynamic-text">(2.5 of 5)</span>
    </div>
</div>
```

### Disabled

To disable rating indicator, the \

```html
<div class="example-container">
    <p>Default:</p>
    <div class="fd-rating-indicator" aria-disabled="true">
        <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
            <input
            aria-label="0 star"
            type="radio"
            class="fd-rating-indicator__input fd-rating-indicator__input--zero-rating"
            id="rating-disabled-0"
            name="rating-disabled"
            value="0"
            disabled
            />
            <label
                class="fd-rating-indicator__label fd-rating-indicator__label--zero-rating"
                for="rating-disabled-0"
                aria-hidden="true"
                ></label>

                <input
                aria-label="1 star"
                type="radio"
                class="fd-rating-indicator__input"
                id="rating-disabled-1"
                name="rating-disabled"
                value="1"
                disabled
                />
                <label class="fd-rating-indicator__label" for="rating-disabled-1"></label>

                <input
                aria-label="2 star"
                type="radio"
                class="fd-rating-indicator__input"
                id="rating-disabled-2"
                name="rating-disabled"
                value="2"
                disabled
                checked
                />
                <label class="fd-rating-indicator__label" for="rating-disabled-2"></label>

                <input
                aria-label="3 star"
                type="radio"
                class="fd-rating-indicator__input"
                id="rating-disabled-3"
                name="rating-disabled"
                value="3"
                disabled
                />
                <label class="fd-rating-indicator__label" for="rating-disabled-3"></label>

                <input
                aria-label="4 star"
                type="radio"
                class="fd-rating-indicator__input"
                id="rating-disabled-4"
                name="rating-disabled"
                value="4"
                disabled
                />
                <label class="fd-rating-indicator__label" for="rating-disabled-4"></label>

                <input
                aria-label="5 star"
                type="radio"
                class="fd-rating-indicator__input"
                id="rating-disabled-5"
                name="rating-disabled"
                value="5"
                disabled
                />
                <label class="fd-rating-indicator__label" for="rating-disabled-5"></label>
            </div>
            <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
        </div>
    </div>
    <div class="example-container">
        <p>Default:</p>
        <div class="fd-rating-indicator fd-rating-indicator--half-star" aria-disabled="true">
            <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
                <input
                aria-label="0 star"
                type="radio"
                class="fd-rating-indicator__input fd-rating-indicator__input--zero-rating"
                id="rating-disabled-half-0"
                name="rating-disabled-half"
                value="0"
                disabled
                />
                <label
                    class="fd-rating-indicator__label fd-rating-indicator__label--zero-rating"
                    for="rating-disabled-half-0"
                    aria-hidden="true"
                    ></label>

                    <input
                    aria-label="half star"
                    type="radio"
                    class="fd-rating-indicator__input"
                    id="rating-disabled-half-05"
                    name="rating-disabled-half"
                    value="0.5"
                    disabled
                    />
                    <label class="fd-rating-indicator__label" for="rating-disabled-half-05"></label>

                    <input
                    aria-label="1 star"
                    type="radio"
                    class="fd-rating-indicator__input"
                    id="rating-disabled-half-1"
                    name="rating-disabled-half"
                    value="1"
                    disabled
                    />
                    <label class="fd-rating-indicator__label" for="rating-disabled-half-1"></label>

                    <input
                    aria-label="1 and half star"
                    type="radio"
                    class="fd-rating-indicator__input"
                    id="rating-disabled-half-15"
                    name="rating-disabled-half"
                    value="1.5"
                    disabled
                    />
                    <label class="fd-rating-indicator__label" for="rating-disabled-half-15"></label>

                    <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-disabled-half-2"
                    name="rating-disabled-half" value=2">
                    <label class="fd-rating-indicator__label" for="rating-disabled-half-2"></label>

                    <input
                    aria-label="2 and half star"
                    type="radio"
                    class="fd-rating-indicator__input"
                    id="rating-disabled-half-25"
                    name="rating-disabled-half"
                    value="2.5"
                    checked
                    disabled
                    />
                    <label class="fd-rating-indicator__label" for="rating-disabled-half-25"></label>

                    <input
                    aria-label="3 star"
                    type="radio"
                    class="fd-rating-indicator__input"
                    id="rating-disabled-half-3"
                    name="rating-disabled-half"
                    value="3"
                    disabled
                    />
                    <label class="fd-rating-indicator__label" for="rating-disabled-half-3"></label>

                    <input
                    aria-label="3 and half star"
                    type="radio"
                    class="fd-rating-indicator__input"
                    id="rating-disabled-half-35"
                    name="rating-disabled-half"
                    value="3.5"
                    disabled
                    />
                    <label class="fd-rating-indicator__label" for="rating-disabled-half-35"></label>

                    <input
                    aria-label="4 star"
                    type="radio"
                    class="fd-rating-indicator__input"
                    id="rating-disabled-half-4"
                    name="rating-disabled-half"
                    value="4"
                    disabled
                    />
                    <label class="fd-rating-indicator__label" for="rating-disabled-half-4"></label>

                    <input
                    aria-label="4 and half star"
                    type="radio"
                    class="fd-rating-indicator__input"
                    id="rating-disabled-half-45"
                    name="rating-disabled-half"
                    value="4.5"
                    disabled
                    />
                    <label class="fd-rating-indicator__label" for="rating-disabled-half-45"></label>

                    <input
                    aria-label="5 star"
                    type="radio"
                    class="fd-rating-indicator__input"
                    id="rating-disabled-half-5"
                    name="rating-disabled-half"
                    value="5"
                    disabled
                    />
                    <label class="fd-rating-indicator__label" for="rating-disabled-half-5"></label>
                </div>
                <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
            </div>
        </div>
```

### Display mode

Data can be presented as label-value field pairs without editable fields in display-only forms, see <a href="../?path=/docs/components-forms-form-grid--s-size">Form Grid</a> for more details.
If you want to include a rating indicator in a display-only form, add the \

```html
<div class="example-container">
    <p>Default:</p>
    <div class="fd-rating-indicator fd-rating-indicator--display-mode">
        <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
            <input
            aria-label="0 star"
            type="radio"
            class="fd-rating-indicator__input fd-rating-indicator__input--zero-rating"
            id="rating-display-mode-0"
            name="rating-display-mode"
            value="0"
            disabled
            />
            <label
                class="fd-rating-indicator__label fd-rating-indicator__label--zero-rating"
                for="rating-display-mode-0"
                aria-hidden="true"
                ></label>

                <input
                aria-label="1 star"
                type="radio"
                class="fd-rating-indicator__input"
                id="rating-display-mode-1"
                name="rating-display-mode"
                value="1"
                disabled
                />
                <label class="fd-rating-indicator__label" for="rating-display-mode-1"></label>

                <input
                aria-label="2 star"
                type="radio"
                class="fd-rating-indicator__input"
                id="rating-display-mode-2"
                name="rating-display-mode"
                value="2"
                disabled
                checked
                />
                <label class="fd-rating-indicator__label" for="rating-display-mode-2"></label>

                <input
                aria-label="3 star"
                type="radio"
                class="fd-rating-indicator__input"
                id="rating-display-mode-3"
                name="rating-display-mode"
                value="3"
                disabled
                />
                <label class="fd-rating-indicator__label" for="rating-display-mode-3"></label>

                <input
                aria-label="4 star"
                type="radio"
                class="fd-rating-indicator__input"
                id="rating-display-mode-4"
                name="rating-display-mode"
                value="4"
                disabled
                />
                <label class="fd-rating-indicator__label" for="rating-display-mode-4"></label>

                <input
                aria-label="5 star"
                type="radio"
                class="fd-rating-indicator__input"
                id="rating-display-mode-5"
                name="rating-display-mode"
                value="5"
                disabled
                />
                <label class="fd-rating-indicator__label" for="rating-display-mode-5"></label>
            </div>
            <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
        </div>
    </div>
    <div class="example-container">
        <p>Half values:</p>
        <div class="fd-rating-indicator fd-rating-indicator--half-star fd-rating-indicator--display-mode">
            <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
                <input
                aria-label="0 star"
                type="radio"
                class="fd-rating-indicator__input fd-rating-indicator__input--zero-rating"
                id="rating-display-mode-half-0"
                name="rating-display-mode-half"
                value="0"
                disabled
                />
                <label
                    class="fd-rating-indicator__label fd-rating-indicator__label--zero-rating"
                    for="rating-display-mode-half-0"
                    aria-hidden="true"
                    ></label>

                    <input
                    aria-label="half star"
                    type="radio"
                    class="fd-rating-indicator__input"
                    id="rating-display-mode-half-05"
                    name="rating-display-mode-half"
                    value="0.5"
                    disabled
                    />
                    <label class="fd-rating-indicator__label" for="rating-display-mode-half-05"></label>

                    <input
                    aria-label="1 star"
                    type="radio"
                    class="fd-rating-indicator__input"
                    id="rating-display-mode-half-1"
                    name="rating-display-mode-half"
                    value="1"
                    disabled
                    />
                    <label class="fd-rating-indicator__label" for="rating-display-mode-half-1"></label>

                    <input
                    aria-label="1 and half star"
                    type="radio"
                    class="fd-rating-indicator__input"
                    id="rating-display-mode-half-15"
                    name="rating-display-mode-half"
                    value="1.5"
                    disabled
                    />
                    <label class="fd-rating-indicator__label" for="rating-display-mode-half-15"></label>

                    <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-display-mode-half-2"
                    name="rating-display-mode-half" value=2">
                    <label class="fd-rating-indicator__label" for="rating-display-mode-half-2"></label>

                    <input
                    aria-label="2 and half star"
                    type="radio"
                    class="fd-rating-indicator__input"
                    id="rating-display-mode-half-25"
                    name="rating-display-mode-half"
                    value="2.5"
                    checked
                    disabled
                    />
                    <label class="fd-rating-indicator__label" for="rating-display-mode-half-25"></label>

                    <input
                    aria-label="3 star"
                    type="radio"
                    class="fd-rating-indicator__input"
                    id="rating-display-mode-half-3"
                    name="rating-display-mode-half"
                    value="3"
                    disabled
                    />
                    <label class="fd-rating-indicator__label" for="rating-display-mode-half-3"></label>

                    <input
                    aria-label="3 and half star"
                    type="radio"
                    class="fd-rating-indicator__input"
                    id="rating-display-mode-half-35"
                    name="rating-display-mode-half"
                    value="3.5"
                    disabled
                    />
                    <label class="fd-rating-indicator__label" for="rating-display-mode-half-35"></label>

                    <input
                    aria-label="4 star"
                    type="radio"
                    class="fd-rating-indicator__input"
                    id="rating-display-mode-half-4"
                    name="rating-display-mode-half"
                    value="4"
                    disabled
                    />
                    <label class="fd-rating-indicator__label" for="rating-display-mode-half-4"></label>

                    <input
                    aria-label="4 and half star"
                    type="radio"
                    class="fd-rating-indicator__input"
                    id="rating-display-mode-half-45"
                    name="rating-display-mode-half"
                    value="4.5"
                    disabled
                    />
                    <label class="fd-rating-indicator__label" for="rating-display-mode-half-45"></label>

                    <input
                    aria-label="5 star"
                    type="radio"
                    class="fd-rating-indicator__input"
                    id="rating-display-mode-half-5"
                    name="rating-display-mode-half"
                    value="5"
                    disabled
                    />
                    <label class="fd-rating-indicator__label" for="rating-display-mode-half-5"></label>
                </div>
                <span class="fd-rating-indicator__dynamic-text">(2.5 of 5)</span>
            </div>
        </div>
```

### Non-interactive

If you want to include a rating indicator in a display-only form,
add the \

```html
<div class="example-container">
    <p>Default:</p>
    <div class="fd-rating-indicator fd-rating-indicator--non-interactive">
        <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
            <input
            aria-label="0 star"
            type="radio"
            class="fd-rating-indicator__input fd-rating-indicator__input--zero-rating"
            id="rating-non-interactive-mode-0"
            name="rating-non-interactive-mode"
            value="0"
            disabled
            />
            <label
                class="fd-rating-indicator__label fd-rating-indicator__label--zero-rating"
                for="rating-non-interactive-mode-0"
                aria-hidden="true"
                ></label>

                <input
                aria-label="1 star"
                type="radio"
                class="fd-rating-indicator__input"
                id="rating-non-interactive-mode-1"
                name="rating-non-interactive-mode"
                value="1"
                disabled
                />
                <label class="fd-rating-indicator__label" for="rating-non-interactive-mode-1"></label>

                <input
                aria-label="2 star"
                type="radio"
                class="fd-rating-indicator__input"
                id="rating-non-interactive-mode-2"
                name="rating-non-interactive-mode"
                value="2"
                disabled
                checked
                />
                <label class="fd-rating-indicator__label" for="rating-non-interactive-mode-2"></label>

                <input
                aria-label="3 star"
                type="radio"
                class="fd-rating-indicator__input"
                id="rating-non-interactive-mode-3"
                name="rating-non-interactive-mode"
                value="3"
                disabled
                />
                <label class="fd-rating-indicator__label" for="rating-non-interactive-mode-3"></label>

                <input
                aria-label="4 star"
                type="radio"
                class="fd-rating-indicator__input"
                id="rating-non-interactive-mode-4"
                name="rating-non-interactive-mode"
                value="4"
                disabled
                />
                <label class="fd-rating-indicator__label" for="rating-non-interactive-mode-4"></label>

                <input
                aria-label="5 star"
                type="radio"
                class="fd-rating-indicator__input"
                id="rating-non-interactive-mode-5"
                name="rating-non-interactive-mode"
                value="5"
                disabled
                />
                <label class="fd-rating-indicator__label" for="rating-non-interactive-mode-5"></label>
            </div>
            <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
        </div>
    </div>

    <div class="example-container">
        <p>Half values:</p>
        <div class="fd-rating-indicator fd-rating-indicator--half-star fd-rating-indicator--non-interactive">
            <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
                <input
                aria-label="0 star"
                type="radio"
                class="fd-rating-indicator__input fd-rating-indicator__input--zero-rating"
                id="rating-non-interactive-mode-half-0"
                name="rating-non-interactive-mode-half"
                value="0"
                disabled
                />
                <label
                    class="fd-rating-indicator__label fd-rating-indicator__label--zero-rating"
                    for="rating-non-interactive-mode-half-0"
                    aria-hidden="true"
                    ></label>

                    <input
                    aria-label="half star"
                    type="radio"
                    class="fd-rating-indicator__input"
                    id="rating-non-interactive-mode-half-05"
                    name="rating-non-interactive-mode-half"
                    value="0.5"
                    disabled
                    />
                    <label class="fd-rating-indicator__label" for="rating-non-interactive-mode-half-05"></label>

                    <input
                    aria-label="1 star"
                    type="radio"
                    class="fd-rating-indicator__input"
                    id="rating-non-interactive-mode-half-1"
                    name="rating-non-interactive-mode-half"
                    value="1"
                    disabled
                    />
                    <label class="fd-rating-indicator__label" for="rating-non-interactive-mode-half-1"></label>

                    <input
                    aria-label="1 and half star"
                    type="radio"
                    class="fd-rating-indicator__input"
                    id="rating-non-interactive-mode-half-15"
                    name="rating-non-interactive-mode-half"
                    value="1.5"
                    disabled
                    />
                    <label class="fd-rating-indicator__label" for="rating-non-interactive-mode-half-15"></label>

                    <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-non-interactive-mode-half-2"
                    name="rating-non-interactive-mode-half" value=2">
                    <label class="fd-rating-indicator__label" for="rating-non-interactive-mode-half-2"></label>

                    <input
                    aria-label="2 and half star"
                    type="radio"
                    class="fd-rating-indicator__input"
                    id="rating-non-interactive-mode-half-25"
                    name="rating-non-interactive-mode-half"
                    value="2.5"
                    checked
                    disabled
                    />
                    <label class="fd-rating-indicator__label" for="rating-non-interactive-mode-half-25"></label>

                    <input
                    aria-label="3 star"
                    type="radio"
                    class="fd-rating-indicator__input"
                    id="rating-non-interactive-mode-half-3"
                    name="rating-non-interactive-mode-half"
                    value="3"
                    disabled
                    />
                    <label class="fd-rating-indicator__label" for="rating-non-interactive-mode-half-3"></label>

                    <input
                    aria-label="3 and half star"
                    type="radio"
                    class="fd-rating-indicator__input"
                    id="rating-non-interactive-mode-half-35"
                    name="rating-non-interactive-mode-half"
                    value="3.5"
                    disabled
                    />
                    <label class="fd-rating-indicator__label" for="rating-non-interactive-mode-half-35"></label>

                    <input
                    aria-label="4 star"
                    type="radio"
                    class="fd-rating-indicator__input"
                    id="rating-non-interactive-mode-half-4"
                    name="rating-non-interactive-mode-half"
                    value="4"
                    disabled
                    />
                    <label class="fd-rating-indicator__label" for="rating-non-interactive-mode-half-4"></label>

                    <input
                    aria-label="4 and half star"
                    type="radio"
                    class="fd-rating-indicator__input"
                    id="rating-non-interactive-mode-half-45"
                    name="rating-non-interactive-mode-half"
                    value="4.5"
                    disabled
                    />
                    <label class="fd-rating-indicator__label" for="rating-non-interactive-mode-half-45"></label>

                    <input
                    aria-label="5 star"
                    type="radio"
                    class="fd-rating-indicator__input"
                    id="rating-non-interactive-mode-half-5"
                    name="rating-non-interactive-mode-half"
                    value="5"
                    disabled
                    />
                    <label class="fd-rating-indicator__label" for="rating-non-interactive-mode-half-5"></label>
                </div>
                <span class="fd-rating-indicator__dynamic-text">(2.5 of 5)</span>
            </div>
        </div>
```

### Different values

It is possible to display the rating indicator with a different number of values.
It is highly recommended to use 5 as the maximum value, however you can go up to 7
if it is ideal for your use case.

```html
<div class="example-container">
    <div class="fd-rating-indicator">
        <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
            <input aria-label="0 star" type="radio" class="fd-rating-indicator__input fd-rating-indicator__input--zero-rating" id="rating-max-value-5-0" name="rating-max-value-5" value="0">
            <label class="fd-rating-indicator__label fd-rating-indicator__label--zero-rating" for="rating-max-value-5-0" aria-hidden="true"></label>

            <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-5-1" name="rating-max-value-5" value="1">
            <label class="fd-rating-indicator__label" for="rating-max-value-5-1"></label>

            <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-5-2" name="rating-max-value-5" value="2" checked>
            <label class="fd-rating-indicator__label" for="rating-max-value-5-2"></label>

            <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-5-3" name="rating-max-value-5" value="3">
            <label class="fd-rating-indicator__label" for="rating-max-value-5-3"></label>

            <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-5-4" name="rating-max-value-5" value="4">
            <label class="fd-rating-indicator__label" for="rating-max-value-5-4"></label>

            <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-5-5" name="rating-max-value-5" value="5">
            <label class="fd-rating-indicator__label" for="rating-max-value-5-5"></label>
        </div>
        <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
    </div>
</div>

<div class="example-container">
    <div class="fd-rating-indicator">
        <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
            <input aria-label="0 star" type="radio" class="fd-rating-indicator__input fd-rating-indicator__input--zero-rating" id="rating-max-value-6-0" name="rating-max-value-6" value="0">
            <label class="fd-rating-indicator__label fd-rating-indicator__label--zero-rating" for="rating-max-value-6-0" aria-hidden="true"></label>

            <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-6-1" name="rating-max-value-6" value="1">
            <label class="fd-rating-indicator__label" for="rating-max-value-6-1"></label>

            <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-6-2" name="rating-max-value-6" value="2" checked>
            <label class="fd-rating-indicator__label" for="rating-max-value-6-2"></label>

            <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-6-3" name="rating-max-value-6" value="3">
            <label class="fd-rating-indicator__label" for="rating-max-value-6-3"></label>

            <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-6-4" name="rating-max-value-6" value="4">
            <label class="fd-rating-indicator__label" for="rating-max-value-6-4"></label>

            <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-6-5" name="rating-max-value-6" value="5">
            <label class="fd-rating-indicator__label" for="rating-max-value-6-5"></label>

            <input aria-label="6 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-6-6" name="rating-max-value-6" value="6">
            <label class="fd-rating-indicator__label" for="rating-max-value-6-6"></label>
        </div>
        <span class="fd-rating-indicator__dynamic-text">(2 of 6)</span>
    </div>
</div>

<div class="example-container">
    <div class="fd-rating-indicator">
        <div class="fd-rating-indicator__container" aria-label="Star Rating (out of 5)">
            <input aria-label="0 star" type="radio" class="fd-rating-indicator__input fd-rating-indicator__input--zero-rating" id="rating-max-value-7-0" name="rating-max-value-7" value="0">
            <label class="fd-rating-indicator__label fd-rating-indicator__label--zero-rating" for="rating-max-value-7-0" aria-hidden="true"></label>

            <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-7-1" name="rating-max-value-7" value="1">
            <label class="fd-rating-indicator__label" for="rating-max-value-7-1"></label>

            <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-7-2" name="rating-max-value-7" value="2" checked>
            <label class="fd-rating-indicator__label" for="rating-max-value-7-2"></label>

            <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-7-3" name="rating-max-value-7" value="3">
            <label class="fd-rating-indicator__label" for="rating-max-value-7-3"></label>

            <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-7-4" name="rating-max-value-7" value="4">
            <label class="fd-rating-indicator__label" for="rating-max-value-7-4"></label>

            <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-7-5" name="rating-max-value-7" value="5">
            <label class="fd-rating-indicator__label" for="rating-max-value-7-5"></label>

            <input aria-label="6 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-7-6" name="rating-max-value-7" value="6">
            <label class="fd-rating-indicator__label" for="rating-max-value-7-6"></label>

            <input aria-label="7 star" type="radio" class="fd-rating-indicator__input" id="rating-max-value-7-7" name="rating-max-value-7" value="7">
            <label class="fd-rating-indicator__label" for="rating-max-value-7-7"></label>
        </div>
        <span class="fd-rating-indicator__dynamic-text">(2 of 7)</span>
    </div>
</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/rating-indicator/rating-indicator.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
