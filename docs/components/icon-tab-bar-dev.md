---
component: fd-icon-tab-bar
title: Dev/Drag and Drop Icon Tab Bar
category: Dev
selector: fd-icon-tab-bar
cssFile: icon-tab-bar.css
sourcePath: packages/styles/stories/Dev/dnd-icon-tab-bar/dnd-icon-tab-bar.stories.js
tags: []
dependencies: ["button","icon","icon-tab-bar","list","menu","popover"]
relatedComponents: ["button","icon","icon-tab-bar","list","menu","popover"]
stability: experimental
generatedAt: 2026-05-28T16:47:21.516Z
---

# Dev/Drag and Drop Icon Tab Bar

> **🧪 EXPERIMENTAL**: This component is experimental and its API may change.

The Drag and Drop Icon Tab Bar can be used for styling state for drag and drop actions.


<br><br><br>

## Dependencies

This component depends on the following CSS files:

- `button.css`
- `icon.css`
- `icon-tab-bar.css`
- `list.css`
- `menu.css`
- `popover.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/icon-tab-bar.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon-tab-bar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/list.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/menu.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/popover.css" rel="stylesheet">
```

## Basic Usage

```html
<div class='fddocs-icon-tab-container'>
    <div class="fd-icon-tab-bar">
        <ul role="tablist" class="fd-icon-tab-bar__header">
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--dnd-hovered">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#section1" id="tab1">
                    <span class="fd-icon-tab-bar__tag">Attachments (16)</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#section2" aria-selected="true" id="tab2">
                    <span class="fd-icon-tab-bar__tag">Info</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--dnd-preview">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#section3" id="tab3">
                    <span class="fd-icon-tab-bar__tag">Approvals (42)</span>
                </a>
            </ul>
        </div>
    </div>
```

## BEM Elements

This component uses the following BEM elements:

- `fd-icon-tab-bar__header`
- `fd-icon-tab-bar__item`
- `fd-icon-tab-bar__item--dnd-hovered`
- `fd-icon-tab-bar__item--dnd-preview`
- `fd-icon-tab-bar__item--dnd-separator`
- `fd-icon-tab-bar__tab`
- `fd-icon-tab-bar__tag`

## Related Components

This component works with or depends on:

- `button`
- `icon`
- `icon-tab-bar`
- `list`
- `menu`
- `popover`

## Design Tokens

Key CSS variables used by this component:

- `--animated`
- `--closable`
- `--counters`
- `--dnd-hovered`
- `--dnd-preview`
- `--dnd-separator`
- `--fdButtonBackgroundColor`
- `--fdButtonBorderColor`
- `--fdButtonColor`
- `--fdButton_Hover_Shadow`
- `--fdIconTabBar_Arrow_Color`
- `--fdIconTabBar_Badge_Background`
- `--fdIconTabBar_Badge_Background_After`
- `--fdIconTabBar_Button_Shell_Background_Color_Active`
- `--fdIconTabBar_Button_Shell_Background_Color_Hover`

*...and 5 more*

## Examples

### Hovered tab state

```html
<div class='fddocs-icon-tab-container'>
    <div class="fd-icon-tab-bar">
        <ul role="tablist" class="fd-icon-tab-bar__header">
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--dnd-hovered">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#section1" id="tab1">
                    <span class="fd-icon-tab-bar__tag">Attachments (16)</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#section2" aria-selected="true" id="tab2">
                    <span class="fd-icon-tab-bar__tag">Info</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--dnd-preview">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#section3" id="tab3">
                    <span class="fd-icon-tab-bar__tag">Approvals (42)</span>
                </a>
            </ul>
        </div>
    </div>
```

### Separator hovered tab state

```html
<div class='fddocs-icon-tab-container'>
    <div class="fd-icon-tab-bar">
        <ul role="tablist" class="fd-icon-tab-bar__header">
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#section1" id="tab1">
                    <span class="fd-icon-tab-bar__tag">Attachments (16)</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--dnd-separator">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#section2" aria-selected="true" id="tab2">
                    <span class="fd-icon-tab-bar__tag">Info</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--dnd-preview">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#section3" id="tab3">
                    <span class="fd-icon-tab-bar__tag">Approvals (42)</span>
                </a>
            </ul>
        </div>
    </div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Dev/dnd-icon-tab-bar/dnd-icon-tab-bar.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
