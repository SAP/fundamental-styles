---
component: fd-splitter
title: BTP/Splitter
category: BTP
selector: fd-splitter
cssFile: splitter.css
sourcePath: packages/styles/stories/BTP/splitter/splitter.stories.js
tags: ["btp"]
dependencies: ["button","icon","splitter"]
relatedComponents: ["button","icon","splitter"]
stability: stable
generatedAt: 2026-06-08T17:49:02.277Z
---

# BTP/Splitter

The Responsive Splitter Layout structures complex application content into defined areas. The areas are resizable manually and programmatically by external triggers such as buttons or menu entries. The split panes and their parent containers are parts of the splitter and have properties that can be changed to meet the application’s needs.

**Note**: Resizing logic you should implement yourself.

## Elements structure:

- **\

## Dependencies

This component depends on the following CSS files:

- `button.css`
- `icon.css`
- `splitter.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/splitter.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/splitter.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-splitter">
    <div class='fd-splitter__pane-container fd-splitter__pane-container--vertical'>
        <div class='fd-splitter__split-pane'>
            Transparent (Default)
        </div>

        <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
            <button class='fd-button fd-button--nested fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </button>
            <span class='fd-splitter__resizer-decoration-before'></span>
            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

        <div class='fd-splitter__split-pane fd-splitter__split-pane--translucent'>
            Translucent
        </div>

        <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
            <button class='fd-button fd-button--nested fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </button>
            <span class='fd-splitter__resizer-decoration-before'></span>
            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

        <div class='fd-splitter__split-pane fd-splitter__split-pane--solid'>
            Solid
        </div>
    </div>
</div>
```

## BEM Elements

This component uses the following BEM elements:

- `fd-splitter__pagination`
- `fd-splitter__pagination-item`
- `fd-splitter__pagination-item--active`
- `fd-splitter__pagination-item-dot`
- `fd-splitter__pane-container`
- `fd-splitter__pane-container--horizontal`
- `fd-splitter__pane-container--vertical`
- `fd-splitter__resizer`
- `fd-splitter__resizer--solid`
- `fd-splitter__resizer--translucent`
- `fd-splitter__resizer-decoration-after`
- `fd-splitter__resizer-decoration-before`
- `fd-splitter__resizer-grip`
- `fd-splitter__resizer-grip-icon`
- `fd-splitter__split-pane`
- `fd-splitter__split-pane--solid`
- `fd-splitter__split-pane--translucent`

## Related Components

This component works with or depends on:

- `button`
- `icon`
- `splitter`

## Design Tokens

Key CSS variables used by this component:

- `--active`
- `--fdSplitter_Pagination_Container_Height`
- `--fdSplitter_Pagination_Dot_Value`
- `--fdSplitter_Pane_Container_Flex_Direction`
- `--fdSplitter_Resizer_After_Background`
- `--fdSplitter_Resizer_Background`
- `--fdSplitter_Resizer_Before_Background`
- `--fdSplitter_Resizer_Border`
- `--fdSplitter_Resizer_Cursor`
- `--fdSplitter_Resizer_Flex_Direction`
- `--fdSplitter_Resizer_Gap`
- `--fdSplitter_Resizer_Grip_Cursor`
- `--fdSplitter_Resizer_Height`
- `--fdSplitter_Resizer_Line_Border_Radius`
- `--fdSplitter_Resizer_Line_Size`

*...and 5 more*

## Examples

### SplitPaneAnatomy

Split Pane is an independent container that may interact with other panes or pane containers. It holds the Pagination Bar when off-canvas panes are available. The default background is transparent. <br>For translucent background use the \

```html
<div class="fd-splitter">
    <div class='fd-splitter__pane-container fd-splitter__pane-container--vertical'>
        <div class='fd-splitter__split-pane'>
            Transparent (Default)
        </div>

        <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
            <button class='fd-button fd-button--nested fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </button>
            <span class='fd-splitter__resizer-decoration-before'></span>
            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

        <div class='fd-splitter__split-pane fd-splitter__split-pane--translucent'>
            Translucent
        </div>

        <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
            <button class='fd-button fd-button--nested fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </button>
            <span class='fd-splitter__resizer-decoration-before'></span>
            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

        <div class='fd-splitter__split-pane fd-splitter__split-pane--solid'>
            Solid
        </div>
    </div>
</div>
```

### GripAnatomy

Grip is the component that allows resizing of panes and pane containers. By default, its background is transparent. To apply <code>translucent</code> background to it use the <code>fd-splitter__resizer--translucent</code> modifier class to the <code>fd-splitter__resizer</code> base class. For <code>solid</code> background use <code>fd-splitter__resizer--solid</code>.

```html
<h2>Vertical</h2>
<div class="fd-splitter">
    <div class='fd-splitter__pane-container fd-splitter__pane-container--vertical'>

        <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
            <button class='fd-button fd-button--nested fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </button>
            <span class='fd-splitter__resizer-decoration-before'></span>
            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

        <div tabindex='0' class="fd-splitter__resizer fd-splitter__resizer--translucent" role="separator" aria-orienration="vertical">
            <button class='fd-button fd-button--nested fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </button>
            <span class='fd-splitter__resizer-decoration-before'></span>
            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

        <div tabindex='0' class="fd-splitter__resizer fd-splitter__resizer--solid" role="separator" aria-orienration="vertical">
            <button class='fd-button fd-button--nested fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </button>
            <span class='fd-splitter__resizer-decoration-before'></span>
            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

    </div>
</div>

<h2>Horizontal</h2>
<div class="fd-splitter">
    <div class='fd-splitter__pane-container fd-splitter__pane-container--horizontal'>

        <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="horizontal">
            <button class='fd-button fd-button--nested fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--horizontal-grip fd-splitter__resizer-grip-icon"></i>
            </button>
            <span class='fd-splitter__resizer-decoration-before'></span>
            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

        <div tabindex='0' class="fd-splitter__resizer fd-splitter__resizer--translucent" role="separator" aria-orienration="horizontal">
            <button class='fd-button fd-button--nested fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--horizontal-grip fd-splitter__resizer-grip-icon"></i>
            </button>
            <span class='fd-splitter__resizer-decoration-before'></span>
            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

        <div tabindex='0' class="fd-splitter__resizer fd-splitter__resizer--solid" role="separator" aria-orienration="horizontal">
            <button class='fd-button fd-button--nested fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--horizontal-grip fd-splitter__resizer-grip-icon"></i>
            </button>
            <span class='fd-splitter__resizer-decoration-before'></span>
            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

    </div>
</div>
```

### PaginationBarAnatomy

Not all the panes should be visible at the same time. Some of them might be just hidden or goes off-canvas at certain breakpoint.
Navigate into off-canvas panes possible via the navigation. Navigation should be placed in root container.
There should be only one or two root panes. In case there is only one on-canvas root pane navigation will be shown just below, having the full width.
Otherwise navigation will be shown below the right root pane.

**Note:** Navigation logic you should implement yourself.

```html
<div class="fd-splitter">
    <div class="fd-splitter__pane-container fd-splitter__pane-container--horizontal">
        <div class="fd-splitter__pagination">
            <button class="fd-button fd-button--nested fd-splitter__pagination-item">
                <span class="fd-splitter__pagination-item-dot"></span>
            </button>

            <button class="fd-button fd-button--nested fd-splitter__pagination-item fd-splitter__pagination-item--active">
                <span class="fd-splitter__pagination-item-dot"></span>
            </button>

            <button class="fd-button fd-button--nested fd-splitter__pagination-item">
                <span class="fd-splitter__pagination-item-dot"></span>
            </button>

            <button class="fd-button fd-button--nested fd-splitter__pagination-item">
                <span class="fd-splitter__pagination-item-dot"></span>
            </button>

            <button class="fd-button fd-button--nested fd-splitter__pagination-item">
                <span class="fd-splitter__pagination-item-dot"></span>
            </button>
        </div>
    </div>
</div>
```

### Examples

Content can be split by the vertical areas (columns) or by the horizontal areas (rows).

**Note:** You should explicitly set the dimensions of the splitter component and of the every area otherwise it will be set to the size of the content.

```html
<div class="fd-splitter">
    <div class='fd-splitter__pane-container fd-splitter__pane-container--vertical'>

        <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
            <button class='fd-button fd-button--nested fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </button>
            <span class='fd-splitter__resizer-decoration-before'></span>
            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

        <div class='fd-splitter__pane-container fd-splitter__pane-container--horizontal'>

            <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="horizontal">
                <button class='fd-button fd-button--nested fd-splitter__resizer-grip' tabindex="-1">
                    <i class="sap-icon--horizontal-grip fd-splitter__resizer-grip-icon"></i>
                </button>
                <span class='fd-splitter__resizer-decoration-before'></span>
                <span class='fd-splitter__resizer-decoration-after'></span>
            </div>

            <div class='fd-splitter__split-pane fd-splitter__split-pane--solid'>

                <div class='fd-splitter__pagination'>
                    <button class="fd-button fd-button--nested fd-splitter__pagination-item">
                        <span class="fd-splitter__pagination-item-dot"></span>
                    </button>

                    <button class="fd-button fd-button--nested fd-splitter__pagination-item fd-splitter__pagination-item--active">
                        <span class="fd-splitter__pagination-item-dot"></span>
                    </button>

                    <button class="fd-button fd-button--nested fd-splitter__pagination-item">
                        <span class="fd-splitter__pagination-item-dot"></span>
                    </button>

                    <button class="fd-button fd-button--nested fd-splitter__pagination-item">
                        <span class="fd-splitter__pagination-item-dot"></span>
                    </button>

                    <button class="fd-button fd-button--nested fd-splitter__pagination-item">
                        <span class="fd-splitter__pagination-item-dot"></span>
                    </button>
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

This documentation was automatically generated from: `packages/styles/stories/BTP/splitter/splitter.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
