---
component: fd-layout-panel
title: Layouts/Layout Panel
category: Layouts
selector: fd-layout-panel
cssFile: layout-panel.css
sourcePath: packages/styles/stories/Layouts/layout-panel/layout-panel.stories.js
tags: []
dependencies: ["button","layout-panel","title"]
relatedComponents: ["button","layout-panel","title"]
stability: stable
generatedAt: 2026-05-28T20:12:00.890Z
---

# Layouts/Layout Panel

Layout Panels are used to encapsulate part of the content, form elements, lists, collections, etc., on a page.

  Place patterns and interactions within panels on your pages to achieve focus and separation for the tasks at-hand with the information displayed inside the panel.

  ## Elements
  - \

## Dependencies

This component depends on the following CSS files:

- `button.css`
- `layout-panel.css`
- `title.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/layout-panel.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/layout-panel.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/title.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-layout-panel">
    <div class="fd-layout-panel__header">
        <div class="fd-layout-panel__head">
            <div class="fd-layout-panel__title">
                <h5 class="fd-title fd-title--h5">
                    .fd-layout-panel__title
                </h5>
            </div>
            <p class="fd-layout-panel__description">
                .fd-layout-panel__description
            </p>
        </div>
        <div class="fd-layout-panel__actions">
            .fd-layout-panel__actions
        </div>
    </div>
    <div class="fd-layout-panel__filters" id="">
        .fd-layout-panel__filters
    </div>
    <div class="fd-layout-panel__body">
        .fd-layout-panel__body
    </div>
    <div class="fd-layout-panel__footer">
        .fd-layout-panel__footer
    </div>
</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-layout-panel--transparent` | Style variant |

## BEM Elements

This component uses the following BEM elements:

- `fd-layout-panel__actions`
- `fd-layout-panel__body`
- `fd-layout-panel__description`
- `fd-layout-panel__filters`
- `fd-layout-panel__footer`
- `fd-layout-panel__footer--end`
- `fd-layout-panel__footer--start`
- `fd-layout-panel__head`
- `fd-layout-panel__header`
- `fd-layout-panel__title`

## Related Components

This component works with or depends on:

- `button`
- `layout-panel`
- `title`

## Design Tokens

Key CSS variables used by this component:

- `--bleed`
- `--end`
- `--full-bleed`
- `--sapContent_LabelColor`
- `--sapFontSmallSize`
- `--sapGroup_ContentBackground`
- `--sapGroup_TitleBorderColor`
- `--sapGroup_TitleFontSize`
- `--sapGroup_TitleTextColor`
- `--sapGroup_Title_FontSize`
- `--sapNeutralTextColor`
- `--start`
- `--transparent`

## Examples

### Primary

```html
<div class="fd-layout-panel">
    <div class="fd-layout-panel__header">
        <div class="fd-layout-panel__head">
            <div class="fd-layout-panel__title">
                <h5 class="fd-title fd-title--h5">
                    .fd-layout-panel__title
                </h5>
            </div>
            <p class="fd-layout-panel__description">
                .fd-layout-panel__description
            </p>
        </div>
        <div class="fd-layout-panel__actions">
            .fd-layout-panel__actions
        </div>
    </div>
    <div class="fd-layout-panel__filters" id="">
        .fd-layout-panel__filters
    </div>
    <div class="fd-layout-panel__body">
        .fd-layout-panel__body
    </div>
    <div class="fd-layout-panel__footer">
        .fd-layout-panel__footer
    </div>
</div>
```

### TransparentBackground

```html
<div class="fd-layout-panel fd-layout-panel--transparent">
    <div class="fd-layout-panel__header">
        <div class="fd-layout-panel__head">
            <div class="fd-layout-panel__title">
                <h5 class="fd-title fd-title--h5">
                    .fd-layout-panel__title
                </h5>
            </div>
            <p class="fd-layout-panel__description">
                .fd-layout-panel__description
            </p>
        </div>
        <div class="fd-layout-panel__actions">
            <button class="fd-button fd-button--emphasized">Action</button>
        </div>
    </div>
    <div class="fd-layout-panel__filters" id="">
        .fd-layout-panel__filters
    </div>
    <div class="fd-layout-panel__body">
        .fd-layout-panel__body
    </div>
    <div class="fd-layout-panel__footer">
        .fd-layout-panel__footer
    </div>
</div>
```

### FooterVariations

```html
<div class="fd-layout-panel">
    <div class="fd-layout-panel__header">
        <div class="fd-layout-panel__head">
            <div class="fd-layout-panel__title">
                <h5 class="fd-title fd-title--h5">
                    .fd-layout-panel__title
                </h5>
            </div>
            <p class="fd-layout-panel__description">
                .fd-layout-panel__description
            </p>
        </div>
        <div class="fd-layout-panel__actions">
            .fd-layout-panel__actions
        </div>
    </div>
    <div class="fd-layout-panel__filters" id="">
        .fd-layout-panel__filters
    </div>
    <div class="fd-layout-panel__body">
        .fd-layout-panel__body
    </div>
    <div class="fd-layout-panel__footer fd-layout-panel__footer--end">
        .fd-layout-panel__footer.fd-layout-panel__footer--end
    </div>
</div>
<div class="fd-layout-panel">
    <div class="fd-layout-panel__header">
        <div class="fd-layout-panel__head">
            <div class="fd-layout-panel__title">
                <h5 class="fd-title fd-title--h5">
                    .fd-layout-panel__title
                </h5>
            </div>
            <p class="fd-layout-panel__description">
                .fd-layout-panel__description
            </p>
        </div>
        <div class="fd-layout-panel__actions">
            .fd-layout-panel__actions
        </div>
    </div>
    <div class="fd-layout-panel__filters" id="">
        .fd-layout-panel__filters
    </div>
    <div class="fd-layout-panel__body">
        .fd-layout-panel__body
    </div>
    <div class="fd-layout-panel__footer fd-layout-panel__footer--start">
        .fd-layout-panel__footer.fd-layout-panel__footer--start
    </div>
</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Layouts/layout-panel/layout-panel.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
