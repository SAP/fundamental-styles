---
component: fd-button
title: Components/Action Sheet
category: Components
selector: fd-button
cssFile: button.css
sourcePath: packages/styles/stories/Components/action-sheet/action-sheet.stories.js
tags: []
dependencies: ["action-sheet","avatar","bar","button","icon","popover"]
relatedComponents: ["action-sheet","avatar","bar","button","icon","popover"]
stability: stable
generatedAt: 2026-05-28T16:47:21.104Z
---

# Components/Action Sheet

An action sheet consists of a list of options a user can select from to complete an action. Actions can be
clustered if there is not enough space on the screen.

## Usage

**Use the action sheet if:**

- You need an option that provides more than one action.
- It is really important that the user stays in context on a phone.
- You only have a small number of actions.

**Do not use the action sheet if:**

- The menu provides only one option. In this case, consider using a **Button** instead.
- You need to show a hierarchical menu. In this case, use the menu button instead.
- Your users would benefit more from a split button, which offers an easily-accessible default action, with the option to include additional actions.

**Note:** The action sheet should be used in compact mode if targeting desktop users.

## When Not To Use

- The menu provides only one option. In this case, consider using a **Button** instead.
- You need to show a hierarchical menu. In this case, use the menu button instead.
- Your users would benefit more from a split button, which offers an easily-accessible default action, with the option to include additional actions.

**Note:** The action sheet should be used in compact mode if targeting desktop users.

## Dependencies

This component depends on the following CSS files:

- `action-sheet.css`
- `avatar.css`
- `bar.css`
- `button.css`
- `icon.css`
- `popover.css`

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
<link href="node_modules/fundamental-styles/dist/action-sheet.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/avatar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/bar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/popover.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-popover">
    <div class="fd-popover__control">
        <button class="fd-button fd-button--transparent"
            aria-label="More Options" aria-controls="actionSheetTablet" aria-expanded="true"
            aria-haspopup="true" onclick="onPopoverClick('actionSheetTablet');">
            <i class="sap-icon--settings"></i>
        </button>
    </div>
    <div class="fd-popover__body" aria-hidden="false" id="actionSheetTablet">
        <ul class="fd-action-sheet" role="list" aria-label="List of contextual options">
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--attachment"></i>
                    <span class="fd-button__text">Upload file</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--add"></i>
                    <span class="fd-button__text">Assign user</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--print"></i>
                    <span class="fd-button__text">Print</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--download"></i>
                    <span class="fd-button__text">Download</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left"
                    onclick="onPopoverClick('actionSheetTablet');">
                    <span class="fd-button__text">Decide Later</span>
                </button>
            </li>
        </ul>
    </div>
</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-button--full-width` | Full-width button modifier. Makes the button expand to fill the full width of its container. Use for prominent actions in narrow containers or mobile layouts. |
| `fd-button--negative` | Negative button - Destructive or reject actions. Used for negative semantic actions like "Delete", "Reject", or "Cancel". Should always be accompanied by text to clarify the destructive action. |
| `fd-button--text-alignment-left` | Style variant |
| `fd-button--transparent` | Transparent button - Secondary actions in toolbars. Used for negative path actions within headers/footers, and secondary toolbar actions. Has minimal visual weight with transparent background by default. |

## BEM Elements

This component uses the following BEM elements:

- `fd-button__text`

## Related Components

This component works with or depends on:

- `action-sheet`
- `avatar`
- `bar`
- `button`
- `icon`
- `popover`

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

### Default

```html
<div class="fd-popover">
    <div class="fd-popover__control">
        <button class="fd-button fd-button--transparent"
            aria-label="More Options" aria-controls="actionSheetTablet" aria-expanded="true"
            aria-haspopup="true" onclick="onPopoverClick('actionSheetTablet');">
            <i class="sap-icon--settings"></i>
        </button>
    </div>
    <div class="fd-popover__body" aria-hidden="false" id="actionSheetTablet">
        <ul class="fd-action-sheet" role="list" aria-label="List of contextual options">
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--attachment"></i>
                    <span class="fd-button__text">Upload file</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--add"></i>
                    <span class="fd-button__text">Assign user</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--print"></i>
                    <span class="fd-button__text">Print</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--download"></i>
                    <span class="fd-button__text">Download</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left"
                    onclick="onPopoverClick('actionSheetTablet');">
                    <span class="fd-button__text">Decide Later</span>
                </button>
            </li>
        </ul>
    </div>
</div>
```

### Mobile

```html
<button class="fd-button fd-button--transparent"
    aria-label="More Options" aria-controls="actionSheetPhone" aria-expanded="true"
    aria-haspopup="true" onclick="toggleClass('actionSheetPhone', 'fd-action-sheet__wrapper--active');">
    <i class="sap-icon--settings"></i>
</button>
<div class="fd-action-sheet__wrapper fd-action-sheet__wrapper--active" id="actionSheetPhone">
    <div class="fd-bar fd-action-sheet__bar" role="toolbar" aria-label="Bar">
        <div class="fd-bar__left">
            <div class="fd-bar__element">
                <h6 class="fd-action-sheet__title">Control Title</h6>
            </div>
        </div>

        <ul class="fd-action-sheet fd-action-sheet--mobile" role="list" aria-label="List of contextual options">
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--attachment"></i>
                    <span class="fd-button__text">Upload file</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--add"></i>
                    <span class="fd-button__text">Assign user</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--print"></i>
                    <span class="fd-button__text">Print</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--download"></i>
                    <span class="fd-button__text">Download</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left"
                    onclick="toggleClass('actionSheetPhone', 'fd-action-sheet__wrapper--active');">
                    <span class="fd-button__text">Decide Later</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--negative"
                    onclick="toggleClass('actionSheetPhone', 'fd-action-sheet__wrapper--active');">
                    <span class="fd-button__text">Cancel</span>
                </button>
            </li>
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

This documentation was automatically generated from: `packages/styles/stories/Components/action-sheet/action-sheet.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
