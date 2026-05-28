---
component: fd-skeleton
title: Components/Skeleton
category: Components
selector: fd-skeleton
cssFile: skeleton.css
sourcePath: packages/styles/stories/Components/skeleton/skeleton.stories.js
tags: []
dependencies: ["skeleton"]
relatedComponents: ["skeleton"]
stability: stable
generatedAt: 2026-05-28T16:47:20.981Z
---

# Components/Skeleton

Placeholder loading is a type of busy indicator that provides the user with a skeleton page as a placeholder while the content is still loading. The aim is to inform the user of the ongoing loading progress.
    \r\nA skeleton page shows the frame of the final content without the content being fully loaded. Visually, skeleton pages are grey boxes with animations to indicate loading activity.
    \r\nSkeleton pages are used to create an impression of speed and reliability when an app encounters performance barriers. They provide a generic preview of the layout, which makes the app seem to load faster. This improves the overall user experience.
    \r\nThe Placeholder Skeleton is made up of Placeholder Shapes that aim to give an idea of how the actual content will look like. The placeholders can take various forms, depending on the type of content that is being loaded.

## Dependencies

This component depends on the following CSS files:

- `skeleton.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/skeleton.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/skeleton.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-skeleton">
    <svg width="100%" height="100%" class="fd-skeleton__canvas">
        <defs>
            <linearGradient id="skeletonGradient">
                <stop offset="0" class="fd-skeleton__outer">
                </stop>
                <stop class="fd-skeleton__middle">
                    <animate attributeName="offset" values="0; 0; 0.5; 1; 1" dur="2s" repeatCount="indefinite">

                    </animate>
                </stop>
                <stop offset="1" class="fd-skeleton__outer">

                </stop>
            </linearGradient>
            <mask id="fd-skeleton-0">
                <rect x="0" y="0" width="100%" rx="4" height="100%" class="ng-star-inserted"></rect>
            </mask>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" mask="url(#fd-skeleton-0)">

        </rect>
    </svg>
</div>
```

## BEM Elements

This component uses the following BEM elements:

- `fd-skeleton__canvas`
- `fd-skeleton__middle`
- `fd-skeleton__outer`

## Related Components

This component works with or depends on:

- `skeleton`

## Design Tokens

Key CSS variables used by this component:

- `--fdSkeletonGradientMiddleColor`
- `--sapContent_Placeholderloading_Background`

## Examples

### Rectangle

An example of a rectangular placeholder

```html
<div class="fd-skeleton">
    <svg width="100%" height="100%" class="fd-skeleton__canvas">
        <defs>
            <linearGradient id="skeletonGradient">
                <stop offset="0" class="fd-skeleton__outer">
                </stop>
                <stop class="fd-skeleton__middle">
                    <animate attributeName="offset" values="0; 0; 0.5; 1; 1" dur="2s" repeatCount="indefinite">

                    </animate>
                </stop>
                <stop offset="1" class="fd-skeleton__outer">

                </stop>
            </linearGradient>
            <mask id="fd-skeleton-0">
                <rect x="0" y="0" width="100%" rx="4" height="100%" class="ng-star-inserted"></rect>
            </mask>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" mask="url(#fd-skeleton-0)">

        </rect>
    </svg>
</div>
```

### Circle

An example of a circular placeholder

```html
<div class="fd-skeleton">
    <svg width="100%" height="100%" class="fd-skeleton__canvas">
        <defs>
            <linearGradient id="skeletonGradient">
                <stop offset="0" class="fd-skeleton__outer"></stop>
                <stop class="fd-skeleton__middle">
                    <animate attributeName="offset" values="0; 0; 0.5; 1; 1" dur="2s" repeatCount="indefinite"></animate>
                </stop>
                <stop offset="1" class="fd-skeleton__outer"></stop>
            </linearGradient>
            <mask id="fd-skeleton-2">
                <circle cx="50%" cy="50%" r="50%" class="ng-star-inserted"></circle>
            </mask>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" mask="url(#fd-skeleton-2)"></rect>
    </svg>
</div>
```

### Lines

Examples of lines placeholders (3 and 2 lines)

```html
<p>3 lines</p>
<div class="fd-skeleton">
    <svg width="100%" height="100%" class="fd-skeleton__canvas">
        <defs>
            <linearGradient id="skeletonGradient">
                <stop offset="0" class="fd-skeleton__outer"></stop>
                <stop class="fd-skeleton__middle">
                    <animate attributeName="offset" values="0; 0; 0.5; 1; 1" dur="2s" repeatCount="indefinite"></animate>
                </stop>
                <stop offset="1" class="fd-skeleton__outer"></stop>
            </linearGradient>
            <mask id="fd-skeleton-4">
                <rect x="0" width="100%" rx="4" height="8" y="0" class="ng-star-inserted"></rect>
                <rect x="0" width="100%" rx="4" height="8" y="20" class="ng-star-inserted"></rect>
                <rect x="0" width="60%" rx="4" height="8" y="40" class="ng-star-inserted"></rect>
            </mask>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" mask="url(#fd-skeleton-4)">

        </rect>
    </svg>
</div>

<p>2 lines</p>
<div class="fd-skeleton">
    <svg width="100%" height="100%" class="fd-skeleton__canvas">
        <defs>
            <linearGradient id="skeletonGradient">
                <stop offset="0" class="fd-skeleton__outer"></stop>
                <stop class="fd-skeleton__middle">
                    <animate attributeName="offset" values="0; 0; 0.5; 1; 1" dur="2s" repeatCount="indefinite"></animate>
                </stop>
                <stop offset="1" class="fd-skeleton__outer"></stop>
            </linearGradient>
            <mask id="fd-skeleton-5">
                <rect x="0" width="100%" rx="4" height="8" y="0" class="ng-star-inserted"></rect>
                <rect x="0" width="60%" rx="4" height="8" y="20" class="ng-star-inserted"></rect>
            </mask>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" mask="url(#fd-skeleton-5)">

        </rect>
    </svg>
</div>
```

### ComplexExamples

The library allows setting customly build examples like this one

```html
<div class="fd-skeleton">
    <svg width="100%" height="100%" class="fd-skeleton__canvas">
        <defs>
            <linearGradient id="skeletonGradient">
                <stop offset="0" class="fd-skeleton__outer"></stop>
                <stop class="fd-skeleton__middle">
                    <animate attributeName="offset" values="0; 0; 0.5; 1; 1" dur="2s" repeatCount="indefinite"></animate>
                </stop>
                <stop offset="1" class="fd-skeleton__outer"></stop>
            </linearGradient>
            <mask id="fd-skeleton-8">
                <circle cx="25" cy="25" r="25"></circle>
                <rect x="60" y="0" width="100" height="16" rx="4"></rect>
                <rect x="60" y="30" width="60" height="12" rx="4"></rect>
                <rect x="0" y="60" width="160" height="8" rx="4"></rect>
                <rect x="0" y="80" width="160" height="8" rx="4"></rect>
                <rect x="0" y="100" width="100" height="8" rx="4"></rect>
            </mask>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" mask="url(#fd-skeleton-8)"></rect>
    </svg>
</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/skeleton/skeleton.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
