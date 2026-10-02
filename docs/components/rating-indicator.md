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
---

# Components/Rating Indicator

The rating indicator displays a group of icons (usually stars) that indicate a rating.
It allows users to rate content on a numeric scale, typically from 1 (lowest) to 5 (highest).
Although the maximum is 7, it is highly recommended to use the default of 5.

##Structure
Each star is a `fd-rating-indicator__item` (`<li>`) containing two `fd-rating-indicator__icon` (`<span>`) elements.
The first span is clipped to the left half of the star, the second to the right half.
Add `fd-rating-indicator__icon--selected` to a span to render it in the rated color;
omit it (or add `--unselected`) to render in the unrated color.
This split allows half-star precision without additional markup.

The `fd-rating-indicator__list` (`<ul>`) carries `aria-hidden="true"` — it is purely visual.
The `fd-rating-indicator__container` is the single accessible element.

##Usage
Use the rating indicator in forms, tables, or in a dialog box.

##Keyboard interaction (interactive mode)
The `fd-rating-indicator__container` element uses `role="slider"` and `aria-roledescription="Rating Indicator"`.
The consuming framework is responsible for handling keyboard events and updating `aria-valuenow` and `aria-valuetext`
on the container, and toggling `--selected` / `--unselected` on the icon spans. Required key bindings per Fiori spec:

| Key | Action |
| :-- | :----- |
| Arrow Up / Arrow Right | Increment value by 1; no-op at maximum |
| Arrow Down / Arrow Left | Decrement value by 1; no-op at minimum |
| Home | Set to minimum value |
| End | Set to maximum value |
| Space / Enter / Return | Increment by 1; wrap to minimum when at maximum |
| Digit key (1–9) | Set value directly; if greater than maximum, set to maximum |

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
<h4>LG Size</h4>
<div class="fd-rating-indicator fd-rating-indicator--lg">
    <div
        class="fd-rating-indicator__container"
        role="slider"
        tabindex="0"
        aria-label="Star Rating"
        aria-roledescription="Rating Indicator"
        aria-valuemin="0"
        aria-valuemax="5"
        aria-valuenow="2"
        aria-valuetext="2 of 5"
        >
        <ul class="fd-rating-indicator__list" aria-hidden="true">
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
        </ul>
    </div>
    <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
</div>

<div class="fd-rating-indicator">
    <div
        class="fd-rating-indicator__container"
        role="slider"
        tabindex="0"
        aria-label="Star Rating"
        aria-roledescription="Rating Indicator"
        aria-valuemin="0"
        aria-valuemax="5"
        aria-valuenow="2"
        aria-valuetext="2 of 5"
        >
        <ul class="fd-rating-indicator__list" aria-hidden="true">
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
        </ul>
    </div>
    <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
</div>

<h4>SM Size</h4>
<div class="fd-rating-indicator fd-rating-indicator--sm">
    <div
        class="fd-rating-indicator__container"
        role="slider"
        tabindex="0"
        aria-label="Star Rating"
        aria-roledescription="Rating Indicator"
        aria-valuemin="0"
        aria-valuemax="5"
        aria-valuenow="2"
        aria-valuetext="2 of 5"
        >
        <ul class="fd-rating-indicator__list" aria-hidden="true">
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
        </ul>
    </div>
    <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
</div>

<h4>XS Size</h4>
<div class="fd-rating-indicator fd-rating-indicator--xs">
    <div
        class="fd-rating-indicator__container"
        role="slider"
        tabindex="0"
        aria-label="Star Rating"
        aria-roledescription="Rating Indicator"
        aria-valuemin="0"
        aria-valuemax="5"
        aria-valuenow="2"
        aria-valuetext="2 of 5"
        >
        <ul class="fd-rating-indicator__list" aria-hidden="true">
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
        </ul>
    </div>
    <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-rating-indicator--display-mode` | Use display mode for any read-only rating — display-only forms, object headers, cards, facets, and
inline running text |
| `fd-rating-indicator--lg` | The icon size is controlled by the `--ratingIndicator_Font_Size` CSS variable |
| `fd-rating-indicator--md` | Style variant |
| `fd-rating-indicator--sm` | The icon size is controlled by the `--ratingIndicator_Font_Size` CSS variable |
| `fd-rating-indicator--xs` | The icon size is controlled by the `--ratingIndicator_Font_Size` CSS variable |

## States

| Class | Description |
|-------|-------------|
| `is-readonly` | Readonly state |

## BEM Elements

This component uses the following BEM elements:

- `fd-rating-indicator__container`
- `fd-rating-indicator__dynamic-text`
- `fd-rating-indicator__icon`
- `fd-rating-indicator__icon--selected`
- `fd-rating-indicator__icon--unselected`
- `fd-rating-indicator__item`
- `fd-rating-indicator__list`

## Component Structure

Each star is a `fd-rating-indicator__item` (`<li>`) containing two `fd-rating-indicator__icon` (`<span>`) elements.
The first span is clipped to the left half of the star, the second to the right half.
Add `fd-rating-indicator__icon--selected` to a span to render it in the rated color;
omit it (or add `--unselected`) to render in the unrated color.
This split allows half-star precision without additional markup.

The `fd-rating-indicator__list` (`<ul>`) carries `aria-hidden="true"` — it is purely visual.
The `fd-rating-indicator__container` is the single accessible element.

## Related Components

This component works with or depends on:

- `icon`
- `rating-indicator`

## Design Tokens

Key CSS variables used by this component:

- `--fdRatingIndicator_Container_Border_Radius`
- `--lg`
- `--md`
- `--ratingIndicator_Color`
- `--ratingIndicator_Container_Outline`
- `--ratingIndicator_Cursor`
- `--ratingIndicator_Font_Size`
- `--ratingIndicator_Inline_Spacing`
- `--ratingIndicator_Item_Spacing`
- `--ratingIndicator_Margin_Block`
- `--ratingIndicator_Opacity`
- `--ratingIndicator_Opacity_Hover`
- `--sapContent_DisabledOpacity`
- `--sapContent_FocusColor`
- `--sapContent_FocusStyle`

*...and 5 more*

## Examples

### Sizes

The icon size is controlled by the `--ratingIndicator_Font_Size` CSS variable.
Use the modifier classes below to select a named size. Compact and condensed modes reduce the surrounding
margin (`margin-block`) but do not change the icon size.

| **Size**        | **rem**    | **Modifier class**        |
| :----------     | :--------- | -----------------------:  |
| Extra small     | 0.75rem    | `--xs`                  |
| Small           | 1.375rem   | `--sm`                  |
| Medium/Default  | 1.5rem     | _n/a_                     |
| Large           | 2rem       | `--lg`                  |

Compact and condensed content density reduces `margin-block` automatically — apply the density class at the page or shell level (`sap-is-compact` / `sap-is-condensed`).

```html
<h4>LG Size</h4>
<div class="fd-rating-indicator fd-rating-indicator--lg">
    <div
        class="fd-rating-indicator__container"
        role="slider"
        tabindex="0"
        aria-label="Star Rating"
        aria-roledescription="Rating Indicator"
        aria-valuemin="0"
        aria-valuemax="5"
        aria-valuenow="2"
        aria-valuetext="2 of 5"
        >
        <ul class="fd-rating-indicator__list" aria-hidden="true">
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
        </ul>
    </div>
    <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
</div>

<div class="fd-rating-indicator">
    <div
        class="fd-rating-indicator__container"
        role="slider"
        tabindex="0"
        aria-label="Star Rating"
        aria-roledescription="Rating Indicator"
        aria-valuemin="0"
        aria-valuemax="5"
        aria-valuenow="2"
        aria-valuetext="2 of 5"
        >
        <ul class="fd-rating-indicator__list" aria-hidden="true">
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
        </ul>
    </div>
    <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
</div>

<h4>SM Size</h4>
<div class="fd-rating-indicator fd-rating-indicator--sm">
    <div
        class="fd-rating-indicator__container"
        role="slider"
        tabindex="0"
        aria-label="Star Rating"
        aria-roledescription="Rating Indicator"
        aria-valuemin="0"
        aria-valuemax="5"
        aria-valuenow="2"
        aria-valuetext="2 of 5"
        >
        <ul class="fd-rating-indicator__list" aria-hidden="true">
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
        </ul>
    </div>
    <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
</div>

<h4>XS Size</h4>
<div class="fd-rating-indicator fd-rating-indicator--xs">
    <div
        class="fd-rating-indicator__container"
        role="slider"
        tabindex="0"
        aria-label="Star Rating"
        aria-roledescription="Rating Indicator"
        aria-valuemin="0"
        aria-valuemax="5"
        aria-valuenow="2"
        aria-valuetext="2 of 5"
        >
        <ul class="fd-rating-indicator__list" aria-hidden="true">
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
        </ul>
    </div>
    <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
</div>
```

### Custom icons

To use custom icons, replace the default `sap-icon--favorite` / `sap-icon--unfavorite` icon classes
on each `fd-rating-indicator__icon` span with your chosen icon names.

Use the rated icon (e.g. `sap-icon--notification`) on spans that are `--selected`,
and the unrated icon (e.g. `sap-icon--bo-strategy-management`) on spans that are `--unselected`.

```html
<div class="example-container">
    <div class="fd-rating-indicator">
        <div
            class="fd-rating-indicator__container"
            role="slider"
            tabindex="0"
            aria-label="Star Rating"
            aria-roledescription="Rating Indicator"
            aria-valuemin="0"
            aria-valuemax="5"
            aria-valuenow="2"
            aria-valuetext="2 of 5"
            >
            <ul class="fd-rating-indicator__list" aria-hidden="true">
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--notification fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                    <span class="sap-icon sap-icon--notification fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--notification fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                    <span class="sap-icon sap-icon--notification fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--bo-strategy-management fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                    <span class="sap-icon sap-icon--bo-strategy-management fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--bo-strategy-management fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                    <span class="sap-icon sap-icon--bo-strategy-management fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--bo-strategy-management fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                    <span class="sap-icon sap-icon--bo-strategy-management fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                </li>
            </ul>
        </div>
        <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
    </div>
</div>
```

### Half values

To display a half-star value (e.g. 2.5), add `fd-rating-indicator--half-star` to the outer element
and set `aria-valuenow="2.5"` / `aria-valuetext="2.5 of 5"` on the container.

For the boundary star (the one at the fractional position), mark only the **first** (left-half) span as
`--selected` and the **second** (right-half) span as `--unselected`. Stars below the boundary are
fully selected (both spans `--selected`); stars above are fully unselected (both spans `--unselected`).

```html
<div class="example-container">
    <span>Default:</span>
    <div class="fd-rating-indicator">
        <div
            class="fd-rating-indicator__container"
            role="slider"
            tabindex="0"
            aria-label="Star Rating"
            aria-roledescription="Rating Indicator"
            aria-valuemin="0"
            aria-valuemax="5"
            aria-valuenow="2.5"
            aria-valuetext="2.5 of 5"
            >
            <ul class="fd-rating-indicator__list" aria-hidden="true">
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                    <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                    <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                </li>
            </ul>
        </div>
        <span class="fd-rating-indicator__dynamic-text">(2.5 of 5)</span>
    </div>
</div>

<div class="example-container">
    <span>Custom icons:</span>
    <div class="fd-rating-indicator">
        <div
            class="fd-rating-indicator__container"
            role="slider"
            tabindex="0"
            aria-label="Star Rating"
            aria-roledescription="Rating Indicator"
            aria-valuemin="0"
            aria-valuemax="5"
            aria-valuenow="2.5"
            aria-valuetext="2.5 of 5"
            >
            <ul class="fd-rating-indicator__list" aria-hidden="true">
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--notification fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                    <span class="sap-icon sap-icon--notification fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--notification fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                    <span class="sap-icon sap-icon--notification fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--notification fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                    <span class="sap-icon sap-icon--bo-strategy-management fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--bo-strategy-management fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                    <span class="sap-icon sap-icon--bo-strategy-management fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--bo-strategy-management fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                    <span class="sap-icon sap-icon--bo-strategy-management fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                </li>
            </ul>
        </div>
        <span class="fd-rating-indicator__dynamic-text">(2.5 of 5)</span>
    </div>
</div>

<div class="example-container">
    <span>Custom icons and size --lg:</span>
    <div class="fd-rating-indicator fd-rating-indicator--lg">
        <div
            class="fd-rating-indicator__container"
            role="slider"
            tabindex="0"
            aria-label="Star Rating"
            aria-roledescription="Rating Indicator"
            aria-valuemin="0"
            aria-valuemax="5"
            aria-valuenow="2.5"
            aria-valuetext="2.5 of 5"
            >
            <ul class="fd-rating-indicator__list" aria-hidden="true">
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--notification fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                    <span class="sap-icon sap-icon--notification fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--notification fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                    <span class="sap-icon sap-icon--notification fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--notification fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                    <span class="sap-icon sap-icon--bo-strategy-management fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--bo-strategy-management fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                    <span class="sap-icon sap-icon--bo-strategy-management fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--bo-strategy-management fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                    <span class="sap-icon sap-icon--bo-strategy-management fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                </li>
            </ul>
        </div>
        <span class="fd-rating-indicator__dynamic-text">(2.5 of 5)</span>
    </div>
</div>
```

### Disabled

To disable the rating indicator, add `aria-disabled="true"` to both the outer `fd-rating-indicator`
element and the `fd-rating-indicator__container`. The outer attribute triggers the disabled CSS
(reduced opacity, no hover effect, no focus ring); the container attribute communicates the disabled
state to assistive technology via the `role="slider"`.

```html
<div class="example-container">
    <div class="fd-rating-indicator" aria-disabled="true">
        <div
            class="fd-rating-indicator__container"
            role="slider"
            tabindex="0"
            aria-label="Star Rating"
            aria-roledescription="Rating Indicator"
            aria-valuemin="0"
            aria-valuemax="5"
            aria-valuenow="2"
            aria-valuetext="2 of 5"
            aria-disabled="true"
            >
            <ul class="fd-rating-indicator__list" aria-hidden="true">
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                    <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                    <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                </li>
            </ul>
        </div>
        <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
    </div>
</div>
```

### Display mode

Use display mode for any read-only rating — display-only forms, object headers, cards, facets, and
inline running text. Add `.fd-rating-indicator--display-mode` and `.is-readonly` to the
outer element. Keep `role="slider"` on the `__container` and add `aria-readonly="true"` so the
value and read-only state are both communicated to assistive technology. The `tabindex="0"` keeps
the element reachable by keyboard for screen reader navigation.

In display mode, unselected icons are rendered at 75% of the selected icon size.
This size reduction is a visual-only accessibility aid — it allows selected and unselected ratings to be distinguished by shape rather than color alone.
The smaller icons are scaled from their center and offset with additional margin so the overall control width stays stable.

```html
<h4>LG Size</h4>
<div class="fd-rating-indicator fd-rating-indicator--lg fd-rating-indicator--display-mode is-readonly">
    <div
        class="fd-rating-indicator__container"
        role="slider"
        tabindex="0"
        aria-label="Star Rating"
        aria-roledescription="Rating Indicator"
        aria-valuemin="0"
        aria-valuemax="5"
        aria-valuenow="2"
        aria-valuetext="2 of 5"
        aria-readonly="true"
        >
        <ul class="fd-rating-indicator__list" aria-hidden="true">
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
        </ul>
    </div>
    <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
</div>

<h4>MD Size (Default)</h4>
<div class="fd-rating-indicator fd-rating-indicator--md fd-rating-indicator--display-mode is-readonly">
    <div
        class="fd-rating-indicator__container"
        role="slider"
        tabindex="0"
        aria-label="Star Rating"
        aria-roledescription="Rating Indicator"
        aria-valuemin="0"
        aria-valuemax="5"
        aria-valuenow="2"
        aria-valuetext="2 of 5"
        aria-readonly="true"
        >
        <ul class="fd-rating-indicator__list" aria-hidden="true">
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
        </ul>
    </div>
    <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
</div>

<h4>SM Size</h4>
<div class="fd-rating-indicator fd-rating-indicator--sm fd-rating-indicator--display-mode is-readonly">
    <div
        class="fd-rating-indicator__container"
        role="slider"
        tabindex="0"
        aria-label="Star Rating"
        aria-roledescription="Rating Indicator"
        aria-valuemin="0"
        aria-valuemax="5"
        aria-valuenow="2"
        aria-valuetext="2 of 5"
        aria-readonly="true"
        >
        <ul class="fd-rating-indicator__list" aria-hidden="true">
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
        </ul>
    </div>
    <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
</div>

<h4>XS Size</h4>
<div class="fd-rating-indicator fd-rating-indicator--xs fd-rating-indicator--display-mode is-readonly">
    <div
        class="fd-rating-indicator__container"
        role="slider"
        tabindex="0"
        aria-label="Star Rating"
        aria-roledescription="Rating Indicator"
        aria-valuemin="0"
        aria-valuemax="5"
        aria-valuenow="2"
        aria-valuetext="2 of 5"
        aria-readonly="true"
        >
        <ul class="fd-rating-indicator__list" aria-hidden="true">
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
            <li class="fd-rating-indicator__item">
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
            </li>
        </ul>
    </div>
    <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
</div>
```

### Different values

It is possible to display the rating indicator with a different number of values.
It is highly recommended to use 5 as the maximum value, however you can go up to 7
if it is ideal for your use case.

```html
<div class="example-container">
    <div class="fd-rating-indicator">
        <div
            class="fd-rating-indicator__container"
            role="slider"
            tabindex="0"
            aria-label="Star Rating"
            aria-roledescription="Rating Indicator"
            aria-valuemin="0"
            aria-valuemax="5"
            aria-valuenow="2"
            aria-valuetext="2 of 5"
            >
            <ul class="fd-rating-indicator__list" aria-hidden="true">
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                    <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                    <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                </li>
            </ul>
        </div>
        <span class="fd-rating-indicator__dynamic-text">(2 of 5)</span>
    </div>
</div>

<div class="example-container">
    <div class="fd-rating-indicator">
        <div
            class="fd-rating-indicator__container"
            role="slider"
            tabindex="0"
            aria-label="Star Rating"
            aria-roledescription="Rating Indicator"
            aria-valuemin="0"
            aria-valuemax="6"
            aria-valuenow="2"
            aria-valuetext="2 of 6"
            >
            <ul class="fd-rating-indicator__list" aria-hidden="true">
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                    <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                    <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                </li>
            </ul>
        </div>
        <span class="fd-rating-indicator__dynamic-text">(2 of 6)</span>
    </div>
</div>

<div class="example-container">
    <div class="fd-rating-indicator">
        <div
            class="fd-rating-indicator__container"
            role="slider"
            tabindex="0"
            aria-label="Star Rating"
            aria-roledescription="Rating Indicator"
            aria-valuemin="0"
            aria-valuemax="7"
            aria-valuenow="2"
            aria-valuetext="2 of 7"
            >
            <ul class="fd-rating-indicator__list" aria-hidden="true">
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                    <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                    <span class="sap-icon sap-icon--favorite fd-rating-indicator__icon fd-rating-indicator__icon--selected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                </li>
                <li class="fd-rating-indicator__item">
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                    <span class="sap-icon sap-icon--unfavorite fd-rating-indicator__icon fd-rating-indicator__icon--unselected"></span>
                </li>
            </ul>
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
