---
component: fd-progress-indicator
title: Components/Progress Indicator
category: Components
selector: fd-progress-indicator
cssFile: progress-indicator.css
sourcePath: packages/styles/stories/Components/progress-indicator/progress-indicator.stories.js
tags: []
dependencies: ["icon","menu","popover","progress-indicator"]
relatedComponents: ["icon","menu","popover","progress-indicator"]
stability: stable
generatedAt: 2026-05-28T16:47:21.329Z
---

# Components/Progress Indicator

The progress indicator visualizes the current advancement of a process or a degree of accomplishment. The inside of the progress indicator is filled with color to indicate the state of progress. The advancement depends on the specific process. The progress is shown either using absolute numbers or the current percentage of completion together with a progress bar.

##Usage
**Use the progress indicator if:**

- You need to visually show a current status.
- You need to visually strengthen a current status.
- You need to make different states comparable to each other at a higher level.
- You want to show custom values as well as percentages.

**Do not use the progress indicator if:**

- Visual feedback is needed for an ongoing operation. Use a busy indicator instead.
- The progress is indeterminate. Use a busy indicator instead.
- You want to display a single value in the form of a fillable shape or a group of shapes that describe their context. Use the status indicator instead.

##Modifier classes

| State | Modifier class |
| :------------- | :----------------- |
| Mobile | \

## Usage Guidelines

**Use the progress indicator if:**

- You need to visually show a current status.
- You need to visually strengthen a current status.
- You need to make different states comparable to each other at a higher level.
- You want to show custom values as well as percentages.

## When Not To Use

- Visual feedback is needed for an ongoing operation. Use a busy indicator instead.
- The progress is indeterminate. Use a busy indicator instead.
- You want to display a single value in the form of a fillable shape or a group of shapes that describe their context. Use the status indicator instead.

## Dependencies

This component depends on the following CSS files:

- `icon.css`
- `menu.css`
- `popover.css`
- `progress-indicator.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/progress-indicator.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/menu.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/popover.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/progress-indicator.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-progress-indicator" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="0" aria-valuemax="100" aria-valuetext="0%" aria-label="0%">
    <div class="fd-progress-indicator__container">

        <div class="fd-progress-indicator__remaining">
            <span class="fd-progress-indicator__label">0%</span>
        </div>
    </div>
</div>

<div class="fd-progress-indicator" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="42" aria-valuemax="100" aria-valuetext="42%" aria-label="42%">
    <div class="fd-progress-indicator__container">

        <div class="fd-progress-indicator__remaining">
            <span class="fd-progress-indicator__label">42%</span>
        </div>
    </div>
</div>

<div class="fd-progress-indicator" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="69" aria-valuemax="100" aria-valuetext="69%" aria-label="69%">
    <div class="fd-progress-indicator__container">
        <div class="fd-progress-indicator__progress-bar">
            <span class="fd-progress-indicator__label">69%</span>
        </div>

    </div>
</div>

<div class="fd-progress-indicator" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="100" aria-valuemax="100" aria-valuetext="100%" aria-label="100%">
    <div class="fd-progress-indicator__container">
        <div class="fd-progress-indicator__progress-bar">
            <span class="fd-progress-indicator__label">100%</span>
        </div>

    </div>
</div>

<div class="fd-progress-indicator" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="80" aria-valuemax="100" aria-valuetext="80 of 100 MB" aria-label="80 of 100 MB">
    <div class="fd-progress-indicator__container">
        <div class="fd-progress-indicator__progress-bar">
            <span class="fd-progress-indicator__label">80 of 100 MB</span>
        </div>

    </div>
</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-progress-indicator--critical` | Style variant |
| `fd-progress-indicator--informative` | Style variant |
| `fd-progress-indicator--negative` | Style variant |
| `fd-progress-indicator--positive` | Style variant |

## BEM Elements

This component uses the following BEM elements:

- `fd-progress-indicator__container`
- `fd-progress-indicator__icon`
- `fd-progress-indicator__label`
- `fd-progress-indicator__overflow`
- `fd-progress-indicator__overflow-close`
- `fd-progress-indicator__progress-bar`
- `fd-progress-indicator__remaining`

## Related Components

This component works with or depends on:

- `icon`
- `menu`
- `popover`
- `progress-indicator`

## Design Tokens

Key CSS variables used by this component:

- `--containerBackground`
- `--containerBorderColor`
- `--display`
- `--fdProgress_Icon_Color_Critical`
- `--fdProgress_Icon_Color_Informative`
- `--fdProgress_Icon_Color_Negative`
- `--fdProgress_Icon_Color_Positive`
- `--fdProgress_Icon_Critical`
- `--fdProgress_Icon_Informative`
- `--fdProgress_Icon_Negative`
- `--fdProgress_Icon_Positive`
- `--fdProgress_Icon_Space_Before_Label`
- `--fdProgress_Indicator_Background_Color_Critical`
- `--fdProgress_Indicator_Background_Color_Informative`
- `--fdProgress_Indicator_Background_Color_Negative`

*...and 5 more*

## Examples

### Layout

Show the current progress as a percentage value between 0% and 100%.
Alternatively, you can show the current progress as text in addition to the bar.
In this case, the text is shown on the right of the bar if the progress is 50% or less. In all other cases, the progress is shown right-aligned on the bar itself
You also have the option of showing any application-specific text instead of a percentage.

```html
<div class="fd-progress-indicator" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="0" aria-valuemax="100" aria-valuetext="0%" aria-label="0%">
    <div class="fd-progress-indicator__container">

        <div class="fd-progress-indicator__remaining">
            <span class="fd-progress-indicator__label">0%</span>
        </div>
    </div>
</div>

<div class="fd-progress-indicator" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="42" aria-valuemax="100" aria-valuetext="42%" aria-label="42%">
    <div class="fd-progress-indicator__container">

        <div class="fd-progress-indicator__remaining">
            <span class="fd-progress-indicator__label">42%</span>
        </div>
    </div>
</div>

<div class="fd-progress-indicator" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="69" aria-valuemax="100" aria-valuetext="69%" aria-label="69%">
    <div class="fd-progress-indicator__container">
        <div class="fd-progress-indicator__progress-bar">
            <span class="fd-progress-indicator__label">69%</span>
        </div>

    </div>
</div>

<div class="fd-progress-indicator" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="100" aria-valuemax="100" aria-valuetext="100%" aria-label="100%">
    <div class="fd-progress-indicator__container">
        <div class="fd-progress-indicator__progress-bar">
            <span class="fd-progress-indicator__label">100%</span>
        </div>

    </div>
</div>

<div class="fd-progress-indicator" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="80" aria-valuemax="100" aria-valuetext="80 of 100 MB" aria-label="80 of 100 MB">
    <div class="fd-progress-indicator__container">
        <div class="fd-progress-indicator__progress-bar">
            <span class="fd-progress-indicator__label">80 of 100 MB</span>
        </div>

    </div>
</div>
```

### States

The progress indicator can visualize different value states that are represented by various theme-dependent semantic colors. The states are: normal, success, warning, error, and information.

```html
<div class="fd-progress-indicator" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="42" aria-valuemax="100" aria-valuetext="42%" aria-label="42%">
    <div class="fd-progress-indicator__container">

        <div class="fd-progress-indicator__remaining">
            <span class="fd-progress-indicator__label">42%</span>
        </div>
    </div>
</div>

<div class="fd-progress-indicator fd-progress-indicator--informative" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="42" aria-valuemax="100" aria-valuetext="42%" aria-label="42%">
    <div class="fd-progress-indicator__container">

        <div class="fd-progress-indicator__remaining">
            <span class="fd-progress-indicator__icon"></span>
            <span class="fd-progress-indicator__label">42%</span>
        </div>
    </div>
</div>

<div class="fd-progress-indicator fd-progress-indicator--positive" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="42" aria-valuemax="100" aria-valuetext="42%" aria-label="42%">
    <div class="fd-progress-indicator__container">

        <div class="fd-progress-indicator__remaining">
            <span class="fd-progress-indicator__icon"></span>
            <span class="fd-progress-indicator__label">42%</span>
        </div>
    </div>
</div>

<div class="fd-progress-indicator fd-progress-indicator--critical" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="42" aria-valuemax="100" aria-valuetext="42%" aria-label="42%">
    <div class="fd-progress-indicator__container">

        <div class="fd-progress-indicator__remaining">
            <span class="fd-progress-indicator__icon"></span>
            <span class="fd-progress-indicator__label">42%</span>
        </div>
    </div>
</div>

<div class="fd-progress-indicator fd-progress-indicator--negative" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="42" aria-valuemax="100" aria-valuetext="42%" aria-label="42%">
    <div class="fd-progress-indicator__container">

        <div class="fd-progress-indicator__remaining">
            <span class="fd-progress-indicator__icon"></span>
            <span class="fd-progress-indicator__label">42%</span>
        </div>
    </div>
</div>
```

### Truncation Behaviour

If the length of the text exceeds the available space in the progress indicator, the text truncates. In this case, clicking the progress indicator displays an information popover with the full text.

```html
<div class="fd-progress-indicator fd-popover" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="70" aria-valuemax="100" aria-valuetext="In cases where the label is being truncated a small popover appears on click." aria-label="Progress Indicator">
    <div class="fd-progress-indicator__container fd-popover__control" onclick="onPopoverClick('popoverF0')">
        <div class="fd-progress-indicator__progress-bar">
            <span class="fd-progress-indicator__label">In cases where the label is being truncated a small popover appears on click.</span>

            <div class="fd-popover__body fd-popover__body--arrow-x-center" aria-hidden="false" id="popoverF0">
                <div class="fd-popover__wrapper">
                    <div class="fd-progress-indicator__overflow">
                        <span>In cases where the label is being truncated a small popover appears on click.</span>
                        <span class="fd-progress-indicator__overflow-close">
                            <i class="sap-icon sap-icon--decline"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="fd-progress-indicator fd-popover" tabindex="-1" role="progressbar" aria-valuemin="0" aria-valuenow="70" aria-valuemax="100" aria-valuetext="In cases where the label is being truncated a small popover appears on click." aria-label="Progress Indicator">
        <div class="fd-progress-indicator__container fd-popover__control" onclick="onPopoverClick('popoverF1')">

            <div class="fd-progress-indicator__remaining">
                <span class="fd-progress-indicator__label">In cases where the label is being truncated a small popover appears on click.</span>
            </div>
            <div class="fd-popover__body fd-popover__body--arrow-x-center" aria-hidden="false" id="popoverF1">
                <div class="fd-popover__wrapper">
                    <div class="fd-progress-indicator__overflow">
                        <span>In cases where the label is being truncated a small popover appears on click.</span>
                        <span class="fd-progress-indicator__overflow-close">
                            <i class="sap-icon sap-icon--decline"></i>
                        </span>
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

This documentation was automatically generated from: `packages/styles/stories/Components/progress-indicator/progress-indicator.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
