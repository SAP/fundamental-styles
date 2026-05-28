---
component: fd-dialog-docs-static
title: Patterns/Busy Indicator
category: patterns
selector: fd-dialog-docs-static
cssFile: dialog-docs-static.css
sourcePath: packages/common-css/stories/patterns/busy-indicator/busy-indicator.stories.js
tags: []
dependencies: ["sap-busy-indicator"]
relatedComponents: ["sap-busy-indicator"]
stability: stable
generatedAt: 2026-06-01T19:24:00.413Z
---

# Patterns/Busy Indicator

The busy indicator component informs the user about an ongoing operation. Only one busy indicator should be shown at a time.

## Sizes

| **Size** | &nbsp;&nbsp; **rem** &nbsp;&nbsp; | **Modifier class** |
| :------- | :-------------------------------- | -----------------: |
| Default  | &nbsp;&nbsp; 0.5 rem                | none               |
| M        | &nbsp;&nbsp; 1 rem                | \

## Dependencies

This component depends on the following CSS files:

- `sap-busy-indicator.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/dialog-docs-static.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/sap-busy-indicator.css" rel="stylesheet">
```

## Basic Usage

```html

```

## Related Components

This component works with or depends on:

- `sap-busy-indicator`

## Examples

### Standard

The standard busy indicator animates a sequence of cascading dots expanding and shrinking in a loop. The component comes in three sizes detailed above. To display the busy indicator, use the `sap-busy-indicator` class. If you want to display a certain size, add the modifier class of the desired size i.e. `--m` to the element.

```html

```

### ContrastMode

The busy indicator also comes in contrast mode and displays white dots against a dark background. To apply contrast mode, add `contrast` into the element i.e. `sap-busy-indicator--m contrast`.

```html

```

### ExtendedBusyIndicator

If more information needs to be displayed with the loading animation, it is replaced by the Extended Busy Indicator `sap-busy-indicator-extended`. The additional information is wrapped in an element with `sap-busy-indicator-extended__label` class.

```html
<div class="sap-busy-indicator-extended">

    <div class="sap-busy-indicator-extended__label">loading data...</div>
</div>
```

### ExtendedBusyIndicatorInsideMessageToast

At the Page level the Busy Indicator should always be placed in a container. The simplest form of container will be centred on the page and inherit the color values from Message Toast.

```html
<div class="fd-message-toast sap-busy-indicator-extended sap-busy-indicator-extended--message-toast">

    <div class="sap-busy-indicator-extended__label">loading data...</div>
</div>
```

### BusyDialog

The busy dialog informs the user about an ongoing operation. During the operation, the entire screen is blocked.

```html
<section class="fd-dialog-docs-static fd-dialog fd-dialog--active">
    <div class="fd-dialog__content fd-dialog__content--s" role="dialog" aria-modal="true"
        aria-labelledby="dialog-title-2">
        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5" id="dialog-title-2">
                        Loading Data
                    </h2>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body">
            <div class="sap-busy-indicator-dialog">
                <p class="sap-text">
                    ... now loading data from a far far away server from far far away.
                </p>

            </div>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--transparent">Cancel</button>
                </div>
            </div>
        </footer>
    </section>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/common-css/stories/patterns/busy-indicator/busy-indicator.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
