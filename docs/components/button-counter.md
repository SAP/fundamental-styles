---
component: fd-button
title: Components/Counter
category: Components
selector: fd-button
cssFile: button.css
sourcePath: packages/styles/stories/Components/counter/counter.stories.js
tags: []
dependencies: ["button","counter","icon","tabs"]
relatedComponents: ["button","counter","icon","tabs"]
stability: stable
generatedAt: 2026-06-01T19:23:59.660Z
---

# Components/Counter



## Dependencies

This component depends on the following CSS files:

- `button.css`
- `counter.css`
- `icon.css`
- `tabs.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/counter.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/tabs.css" rel="stylesheet">
```

## Basic Usage

```html
<span class="fd-counter" aria-label="Unread count">5</span>
<span class="fd-counter" aria-label="Unread count">25</span>
<span class="fd-counter" aria-label="Unread count">101</span>
<span class="fd-counter" aria-label="Unread count">999+</span>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-button--transparent` | Transparent button - Secondary actions in toolbars. Used for negative path actions within headers/footers, and secondary toolbar actions. Has minimal visual weight with transparent background by default. |

## Related Components

This component works with or depends on:

- `button`
- `counter`
- `icon`
- `tabs`

## Design Tokens

Key CSS variables used by this component:

- `--attention`
- `--decisive`
- `--fdButton_Badge_Height`
- `--fdButton_Badge_Margin`
- `--fdButton_Badge_Margin_Inline_Start`
- `--fdButton_Badge_Offset`
- `--fdButton_Badge_Padding_Inline`
- `--fdButton_Badge_Position`
- `--fdButton_Badge_Position_Attention`
- `--fdButton_Badge_Size_Attention`
- `--fdButton_Badge_Width`
- `--fdButton_Clickable_Height`
- `--fdButton_Compact_Height`
- `--fdButton_Font_Family`
- `--fdButton_Height`

*...and 5 more*

## Examples

### Standalone

A counter with a red badge displayed as a standalone component.

```html
<span class="fd-counter" aria-label="Unread count">5</span>
<span class="fd-counter" aria-label="Unread count">25</span>
<span class="fd-counter" aria-label="Unread count">101</span>
<span class="fd-counter" aria-label="Unread count">999+</span>
```

### Text

A counter with a red badge can be inserted in the paragraph.

```html
<p>Lorem ipsum <span class="fd-counter" aria-label="Unread count">5</span> </p>
```

### Tabs

A counter and red badge appears in right-hand of the tab item every time a new item is added to the list. The value of the number change as new items are added.

```html
<ul class="fd-tabs" role="tablist">
    <li class="fd-tabs__item" role="tab">
        <a class="fd-tabs__link" href="#AvcVC566">Link
            <span class="fd-counter" aria-label="Unread count">25</span></a>
        </li>
        <li class="fd-tabs__item" role="tab" aria-selected="true">
            <a class="fd-tabs__link" href="#5mxO9110">
                <span class="fd-tabs__tag">Selected</span>
            </a>
        </li>
        <li class="fd-tabs__item" role="tab">
            <a class="fd-tabs__link" href="#r0pk3445">Link</a>
        </li>
        <li class="fd-tabs__item" role="tab" aria-disabled="true">
            <a class="fd-tabs__link">Disabled</a>
        </li>
    </ul>
```

### Notification

A counter and red badge appears over the upper right-hand corner of the notification icon every time a new notification is added to the list. It displays the number of new notifications.

```html
<button class="fd-button fd-button--transparent" aria-label="Notifications">
    <i class="sap-icon--bell"></i>
    <span class="fd-counter fd-counter--notification" aria-label="Unread count">1</span>
</button>

<button class="fd-button fd-button--transparent" aria-label="Notifications">
    <i class="sap-icon--bell"></i>
    <span class="fd-counter fd-counter--notification" aria-label="Unread count">20</span>
</button>

<button class="fd-button fd-button--transparent" aria-label="Notifications">
    <i class="sap-icon--bell"></i>
    <span class="fd-counter fd-counter--notification" aria-label="Unread count">300</span>
</button>

<button class="fd-button fd-button--transparent" aria-label="Notifications">
    <i class="sap-icon--bell"></i>
    <span class="fd-counter fd-counter--notification" aria-label="Unread count">999+</span>
</button>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/counter/counter.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
