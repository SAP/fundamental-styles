---
component: fd-slider
title: Components/Slider
category: Components
selector: fd-slider
cssFile: slider.css
sourcePath: packages/styles/stories/Components/slider/slider.stories.js
tags: []
dependencies: ["slider"]
relatedComponents: ["slider"]
stability: stable
---

# Components/Slider

There are two types of sliders, <a href="https://experience.sap.com/internal/fiori-design-web/slider/">Standard Slider</a> and  <a href="https://experience.sap.com/internal/fiori-design-web/range-slider/">Range Slider</a>. The standard slider is a control that enables the user to adjust single values within a specified numerical range. The range slider enables the user to select a value range within a predefined numerical interval.

##Usage
**Use the slider if:**

-	you want to change values with graphical support.


**Use the range slide if:**

- you want to select a value range within a predefined numerical interval. If you want to specify only a single value within a predefined numerical interval, use the slider instead.

## Responsiveness
The slider itself is not responsive. It adjusts to the responsiveness of its parent container by recalculating and resizing the width of the control.

## Components
- **Track: ** a horizontal bar which visually represents the range between a minimum and maximum value. A portion of the slider represents the current value or a range.
- **Tick Marks:** vertical elements that allow the slider to snap to predefined values
- **Handles:**	interactive elements which can be dragged horizontally to change the current slider value or range
- **Labels:**	the text or numeric representation of a tick mark value
- **Helper Area:**	the area where the input and the tooltip are shown.


## Accessibility
To ensure that both the standard and range sliders are accessible, a div element with class \

## Usage Guidelines

**Use the slider if:**

-	you want to change values with graphical support.

## Dependencies

This component depends on the following CSS files:

- `slider.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/slider.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/slider.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="slider-container">
    <div class="fd-slider">
        <div class="fd-slider__inner">

        </div>
    </div>
</div>
<div class="slider-container">
    <div class="fd-slider">
        <div class="fd-slider__inner">

        </div>
    </div>
</div>
<div class="slider-container">
    <div class="fd-slider">
        <div class="fd-slider__inner">

        </div>
    </div>
</div>
<div class="slider-container">
    <div class="fd-slider">
        <div class="fd-slider__inner">

        </div>
    </div>
</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-slider--lg` | Style variant |
| `fd-slider--range` | The range slider displays a track with two handles, indicating that a range between two values can be selected |
| `fd-slider--vertical` | By default, the slider is not responsive |

## States

| Class | Description |
|-------|-------------|
| `is-active` | Active state |
| `is-focus` | Focus state |
| `is-hover` | Hover state |

## BEM Elements

This component uses the following BEM elements:

- `fd-slider__handle`
- `fd-slider__inner`
- `fd-slider__label`
- `fd-slider__labels`
- `fd-slider__tick`
- `fd-slider__tick--in-range`
- `fd-slider__tick-wrapper`
- `fd-slider__ticks`
- `fd-slider__track`
- `fd-slider__track-focus-range`
- `fd-slider__track-range`

## Related Components

This component works with or depends on:

- `slider`

## Design Tokens

Key CSS variables used by this component:

- `--fdSlider_Active_Handle_Background`
- `--fdSlider_Active_Handle_Border`
- `--fdSlider_Active_Tick_Background`
- `--fdSlider_Endpoint_Active_Background`
- `--fdSlider_Endpoint_Active_Border`
- `--fdSlider_Endpoint_Background`
- `--fdSlider_Endpoint_Border`
- `--fdSlider_Endpoint_Size`
- `--fdSlider_Focus_Handle_Background`
- `--fdSlider_Focus_Handle_Border`
- `--fdSlider_Focus_Handle_Display`
- `--fdSlider_Focus_Range_Outline`
- `--fdSlider_Handle_Active_Height`
- `--fdSlider_Handle_Active_Width`
- `--fdSlider_Handle_Background`

*...and 5 more*

## Examples

### Standard

The standard slider displays a track with a handle. When the user hovers over the handle, a hand cursor appears. The user can either drag and drop the handle or click on the bar to change the slider setting.

```html
<div class="slider-container">
    <div class="fd-slider">
        <div class="fd-slider__inner">

        </div>
    </div>
</div>
<div class="slider-container">
    <div class="fd-slider">
        <div class="fd-slider__inner">

        </div>
    </div>
</div>
<div class="slider-container">
    <div class="fd-slider">
        <div class="fd-slider__inner">

        </div>
    </div>
</div>
<div class="slider-container">
    <div class="fd-slider">
        <div class="fd-slider__inner">

        </div>
    </div>
</div>
```

### Range

The range slider displays a track with two handles, indicating that a range between two values can be selected. To display a range slider, add the \

```html
<h3>Regular</h3>
<div class="slider-container slider-container--range">
    <div class="fd-slider fd-slider--range">
        <div class="fd-slider__inner">
            <div class="fd-slider__track">

            </div>

        </div>
    </div>
</div>

<div class="slider-container slider-container--range">
    <div class="fd-slider fd-slider--range">
        <div class="fd-slider__inner">
            <div class="fd-slider__track">

            </div>

        </div>
    </div>
</div>

<div class="slider-container slider-container--range">
    <div class="fd-slider fd-slider--range">
        <div class="fd-slider__inner">
            <div class="fd-slider__track">

            </div>

        </div>
    </div>
</div>

<div class="slider-container slider-container--range">
    <div class="fd-slider fd-slider--range">
        <div class="fd-slider__inner">
            <div class="fd-slider__track">

            </div>

        </div>
    </div>
</div>
```

### Ticks

The slider can display ticks on the bar to help guide the user. If a tick is in selected range (Active Area), the \

```html
<div class="slider-container">
    <div class="fd-slider">
        <div class="fd-slider__inner">

            <div class="fd-slider__tick-wrapper">

            </div>
        </div>
    </div>
</div>
```

### Ticks and labels

The slider can display labels that indicate the values of each tick. Labels can be displayed with the \

```html
<div class="slider-container">
    <div class="fd-slider">
        <div class="fd-slider__inner">

            <div class="fd-slider__tick-wrapper">

                <div class="fd-slider__labels">
                    <div class="fd-slider__label">0</div>
                    <div class="fd-slider__label">10</div>
                    <div class="fd-slider__label">20</div>
                    <div class="fd-slider__label">30</div>
                    <div class="fd-slider__label">40</div>
                    <div class="fd-slider__label">50</div>
                    <div class="fd-slider__label">60</div>
                    <div class="fd-slider__label">70</div>
                    <div class="fd-slider__label">80</div>
                    <div class="fd-slider__label">90</div>
                    <div class="fd-slider__label">100</div>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Mobile

By default, the slider is not responsive. However, to make the slider more mobile-friendly, you may enlarge the slider handle and its hit area by adding \

```html
<div class="slider-container">
    <div class="fd-slider fd-slider--lg">
        <div class="fd-slider__inner">

        </div>
    </div>
</div>
```

### Vertical Slider

By default, the slider is not responsive. However, to make the slider more mobile-friendly, you may enlarge the slider handle and its hit area by adding \

```html
<div>
    <p>Standard vertical slider</p>
    <div class="slider-container">
        <div class="fd-slider fd-slider--vertical">
            <div class="fd-slider__inner">

            </div>
            <div class="slider-container">
                <div class="fd-slider fd-slider--vertical">
                    <div class="fd-slider__inner">

                    </div>
                </div>
            </div>
            <div class="slider-container">
                <div class="fd-slider fd-slider--vertical">
                    <div class="fd-slider__inner">

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <p>Mobile vertical slider with ticks and labels</p>
        <div class="slider-container">
            <div class="fd-slider fd-slider--lg fd-slider--vertical">
                <div class="fd-slider__inner">

                    <div class="fd-slider__tick-wrapper">

                        <div class="fd-slider__labels">
                            <div class="fd-slider__label">0</div>
                            <div class="fd-slider__label">10</div>
                            <div class="fd-slider__label">20</div>
                            <div class="fd-slider__label">30</div>
                            <div class="fd-slider__label">40</div>
                            <div class="fd-slider__label">50</div>
                            <div class="fd-slider__label">60</div>
                            <div class="fd-slider__label">70</div>
                            <div class="fd-slider__label">80</div>
                            <div class="fd-slider__label">90</div>
                            <div class="fd-slider__label">100</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <p>Range slider</p>
        <div class="slider-container slider-container--range">
            <div class="fd-slider fd-slider--range fd-slider--vertical">
                <div class="fd-slider__inner">
                    <div class="fd-slider__track">

                    </div>

                </div>
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

This documentation was automatically generated from: `packages/styles/stories/Components/slider/slider.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
