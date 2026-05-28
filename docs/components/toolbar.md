---
component: fd-toolbar
title: Components/Toolbar
category: Components
selector: fd-toolbar
cssFile: toolbar.css
sourcePath: packages/styles/stories/Components/toolbar/toolbar.stories.js
tags: []
dependencies: ["button","icon","popover","toolbar"]
relatedComponents: ["button","icon","popover","toolbar"]
stability: stable
generatedAt: 2026-05-28T16:47:20.909Z
---

# Components/Toolbar

The toolbar enables the user to change the UI or trigger an action. For example, the user can change views, manipulate data or objects, navigate to another page, perform generic actions, and so on. This component is usually paired with buttons, which are always right-aligned.

##Usage
**Toolbar actions can be as follows:**

- They can be independent of the current selection and not related to a specific item or object.
- They can be specific to the current object (user selects one item).
- They can apply to a set of items (user selects two or more items).
- They can control the settings for parts of the UI content. For example, an action can affect all items in a **Table**.

##Sizes
There are two sizes of the toolbar that should be chosen based on the type of device and its screen width.

| Size | Modifier class | Screen width | Device |
| :---- | :-------- | :--------- | :------- |
| Cozy | default | < 599 px | Mobile and small tablets |
| Compact | \

## Usage Guidelines

**Toolbar actions can be as follows:**

- They can be independent of the current selection and not related to a specific item or object.
- They can be specific to the current object (user selects one item).
- They can apply to a set of items (user selects two or more items).
- They can control the settings for parts of the UI content. For example, an action can affect all items in a **Table**.

## Dependencies

This component depends on the following CSS files:

- `button.css`
- `icon.css`
- `popover.css`
- `toolbar.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/toolbar.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/popover.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/toolbar.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-toolbar" role="toolbar" aria-label="Toolbar">
    <span class="fd-toolbar__spacer"> </span>
    <button class="fd-button fd-button--transparent">New</button>
    <button class="fd-button fd-button--transparent">Open</button>
    <button class="fd-button fd-button--transparent">Edit</button>
    <button class="fd-button fd-button--transparent">Delete</button>
    <span class="fd-toolbar__separator"></span>
    <button class="fd-button fd-button--transparent" aria-label="Survey">
        <i class="sap-icon--survey"></i>
    </button>
    <button class="fd-button fd-button--transparent" aria-label="Pool">
        <i class="sap-icon--pool"></i>
    </button>
    <button class="fd-button fd-button--transparent" aria-label="Chart">
        <i class="sap-icon--pie-chart"></i>
    </button>
</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-toolbar--active` | Style variant |
| `fd-toolbar--auto` | Style variant |
| `fd-toolbar--clear` | Style variant |
| `fd-toolbar--info` | Style variant |
| `fd-toolbar--solid` | Toolbar can be styled in various ways depending on the use case |
| `fd-toolbar--title` | Style variant |
| `fd-toolbar--transparent` | Style variant |

## States

| Class | Description |
|-------|-------------|
| `is-active` | Active state |
| `is-hover` | Hover state |

## BEM Elements

This component uses the following BEM elements:

- `fd-toolbar__overflow`
- `fd-toolbar__overflow-button`
- `fd-toolbar__overflow-label`
- `fd-toolbar__separator`
- `fd-toolbar__spacer`
- `fd-toolbar__spacer--fixed`
- `fd-toolbar__title`

## Related Components

This component works with or depends on:

- `button`
- `icon`
- `popover`
- `toolbar`

## Design Tokens

Key CSS variables used by this component:

- `--active`
- `--ai`
- `--auto`
- `--clear`
- `--fade-in`
- `--fade-out`
- `--fdTitle_Color`
- `--fdTitle_Font_Size`
- `--fdToolbar_Auto_Background`
- `--fdToolbar_Background`
- `--fdToolbar_Border_Bottom`
- `--fdToolbar_Border_Top`
- `--fdToolbar_Height`
- `--fdToolbar_Info_Color`
- `--fdToolbar_Info_Outline_Color`

*...and 5 more*

## Examples

### Primary

The primary toolbar displays several actions separated by icon buttons. It is displayed in cozy mode, which is ideal for mobile and small tablet screens.

```html
<div class="fd-toolbar" role="toolbar" aria-label="Toolbar">
    <span class="fd-toolbar__spacer"> </span>
    <button class="fd-button fd-button--transparent">New</button>
    <button class="fd-button fd-button--transparent">Open</button>
    <button class="fd-button fd-button--transparent">Edit</button>
    <button class="fd-button fd-button--transparent">Delete</button>
    <span class="fd-toolbar__separator"></span>
    <button class="fd-button fd-button--transparent" aria-label="Survey">
        <i class="sap-icon--survey"></i>
    </button>
    <button class="fd-button fd-button--transparent" aria-label="Pool">
        <i class="sap-icon--pool"></i>
    </button>
    <button class="fd-button fd-button--transparent" aria-label="Chart">
        <i class="sap-icon--pie-chart"></i>
    </button>
</div>
```

### Overflow

The Overflow behaviour of the toolbar can place elements in an overflow state when there is not enough space to display all of them.
      The overflowing elements are represented by a button and upon interacting with the button a popover with a list of elements is shown. <br> The vertical spacing between the elements is achieved by additional modifier classes: <br>
- \

```html
<div class="fd-toolbar" role="toolbar" aria-label="Toolbar">
    <span>Products (34)</span>
    <button class="fd-button fd-button--transparent">Create</button>
    <span class="fd-toolbar__spacer"> </span>
    <button class="fd-button fd-button--transparent">Save</button>
    <button class="fd-button fd-button--transparent">Copy</button>
    <span class="fd-toolbar__separator"></span>
    <div class="fd-popover">
        <div class="fd-popover__control">
            <button class="fd-button fd-button--transparent"
                aria-controls="wgxzK85912"
                aria-haspopup="true"
                aria-expanded="true"
                id="amr9034qihr"
                onclick="toggleElAttrs('wgxzK85912', ['aria-hidden']);toggleElAttrs('amr9034qihr', ['aria-expanded']);"
                aria-label="More">
                <i class="sap-icon--overflow"></i>
            </button>
            <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow"
                aria-hidden="false"
                id="wgxzK85912">
                <div class="fd-toolbar__overflow">
                    <button class="fd-button fd-button--transparent fd-toolbar__overflow-button">Edit</button>
                    <span class="fd-toolbar__separator"></span>
                    <button class="fd-button fd-button--transparent fd-toolbar__overflow-button">Delete</button>
                    <span class="fd-toolbar__separator"></span>
                    <button class="fd-button fd-button--transparent fd-toolbar__overflow-button">Assign</button>
                    <button class="fd-button fd-button--transparent fd-toolbar__overflow-button">Exit</button>
                    <span class="fd-toolbar__separator"></span>
                    <label class="fd-label fd-toolbar__overflow-label">Label</label>
                    <label class="fd-form-label fd-toolbar__overflow-label">Form Label</label>
                </div>
            </div>
        </div>
    </div>
```

### Types

Toolbar can be styled in various ways depending on the use case.

| Types | Modifier class | Description |
| :-------- | :------------- | :--------------- |
| Solid | \

```html
<h3>Solid</h3>
<div class="fd-toolbar fd-toolbar--solid" role="toolbar" aria-label="Solid toolbar">
    <span>Products (23)</span>
    <button class="fd-button fd-button--transparent">Create</button>
    <span class="fd-toolbar__spacer "> </span>
    <button class="fd-button fd-button--transparent">Edit</button>
    <button class="fd-button fd-button--transparent">Delete</button>
    <span class="fd-toolbar__separator"></span>
    <button class="fd-button fd-button--transparent" aria-label="Survey">
        <i class="sap-icon--survey"></i>
    </button>
    <button class="fd-button fd-button--transparent" aria-label="Pool">
        <i class="sap-icon--pool"></i>
    </button>
    <button class="fd-button fd-button--transparent" aria-label="Chart">
        <i class="sap-icon--pie-chart"></i>
    </button>
    <h3>Transparent</h3>
    <div class="fd-toolbar fd-toolbar--transparent" role="toolbar" aria-label="Transparent toolbar">
        <button class="fd-button fd-button--transparent">Create</button>
        <button class="fd-button fd-button--transparent">Save</button>
        <span class="fd-toolbar__spacer"> </span>
        <button class="fd-button fd-button--transparent">Edit</button>
        <button class="fd-button fd-button--transparent">Delete</button>
        <span class="fd-toolbar__separator"></span>
        <button class="fd-button fd-button--transparent" aria-label="Survey">
            <i class="sap-icon--survey"></i>
        </button>
        <button class="fd-button fd-button--transparent" aria-label="Pool">
            <i class="sap-icon--pool"></i>
        </button>
        <button class="fd-button fd-button--transparent" aria-label="Chart">
            <i class="sap-icon--pie-chart"></i>
        </button>
    </div>
    <h3>Auto</h3>
    <div class="fd-toolbar fd-toolbar--auto" role="toolbar" aria-label="Auto toolbar">
        <button class="fd-button fd-button--transparent">Create</button>
        <span class="fd-toolbar__spacer"> </span>
        <button class="fd-button fd-button--transparent">Edit</button>
        <button class="fd-button fd-button--transparent">Delete</button>
        <span class="fd-toolbar__separator"></span>
        <button class="fd-button fd-button--transparent" aria-label="Survey">
            <i class="sap-icon--survey"></i>
        </button>
        <button class="fd-button fd-button--transparent" aria-label="Pool">
            <i class="sap-icon--pool"></i>
        </button>
        <button class="fd-button fd-button--transparent" aria-label="Chart">
            <i class="sap-icon--pie-chart"></i>
        </button>
    </div>
    <h3>Clear</h3>
    <div class="fd-toolbar fd-toolbar--clear" role="toolbar" aria-label="Clear toolbar">
        <span class="fd-toolbar__spacer "> </span>
        <button class="fd-button fd-button--transparent">Edit</button>
        <button class="fd-button fd-button--transparent">Delete</button>
        <span class="fd-toolbar__separator"></span>
        <button class="fd-button fd-button--transparent" aria-label="Survey">
            <i class="sap-icon--survey"></i>
        </button>
        <button class="fd-button fd-button--transparent" aria-label="Pool">
            <i class="sap-icon--pool"></i>
        </button>
        <button class="fd-button fd-button--transparent" aria-label="Chart">
            <i class="sap-icon--pie-chart"></i>
        </button>
    </div>
    <h3>Info (not active)</h3>
    <div class="fd-toolbar fd-toolbar--info" role="toolbar" aria-label="Info, not active toolbar">
        <span>3 item selected</span>
        <span class="fd-toolbar__spacer"></span>
        <i class="sap-icon--undo"></i>
    </div>
    <h3>Info (active)</h3>
    <div class="fd-toolbar fd-toolbar--info fd-toolbar--active" tabindex="0" role="toolbar" aria-label="Info, active toolbar">
        <span>3 item selected</span>
        <span class="fd-toolbar__spacer"></span>
        <i class="sap-icon--undo"></i>
    </div>
    <h3>Info (active, hover state)</h3>
    <div class="fd-toolbar fd-toolbar--info fd-toolbar--active is-hover" tabindex="0" role="toolbar" aria-label="Info, active toolbar, hover state">
        <span>3 item selected</span>
        <span class="fd-toolbar__spacer"></span>
        <i class="sap-icon--undo"></i>
    </div>
    <h3>Info (active, active state)</h3>
    <div class="fd-toolbar fd-toolbar--info fd-toolbar--active is-active" tabindex="0" role="toolbar" aria-label="Info, active toolbar, active state">
        <span>3 item selected</span>
        <span class="fd-toolbar__spacer"></span>
        <i class="sap-icon--undo"></i>
    </div>
    <h3>Title</h3>
    <div class="fd-toolbar fd-toolbar--title" role="toolbar" aria-label="Title toolbar">
        <h4 class="fd-title fd-title--h4 fd-toolbar__title">Products (104)</h4>
        <span class="fd-toolbar__spacer"></span>
        <button class="fd-button fd-button--transparent">Save</button>
        <button class="fd-button fd-button--transparent">Delete</button>
    </div>
</div>
```

### Separators

Separators should be used to visually separate items from each other. To display separators in toolbars, add the \

```html
<div class="fd-toolbar" role="toolbar" aria-label="Toolbar">
    <button class="fd-button fd-button--positive">Accept</button>
    <span class="fd-toolbar__separator"></span>
    <button class="fd-button fd-button--reject">Reject</button>
    <span class="fd-toolbar__separator"></span>
</div>
<div class="fd-toolbar fd-toolbar--solid" role="toolbar" aria-label="Toolbar">
    <span class="fd-toolbar__spacer"></span>
    <span class="fd-toolbar__separator"></span>
    <button class="fd-button fd-button--transparent" aria-label="Survey">
        <i class="sap-icon--survey"></i>
    </button>
    <span class="fd-toolbar__separator"></span>
    <button class="fd-button fd-button--transparent" aria-label="Pool">
        <i class="sap-icon--pool"></i>
    </button>
    <button class="fd-button fd-button--transparent" aria-label="Chart">
        <i class="sap-icon--pie-chart"></i>
    </button>
</div>
```

### Alignment

Toolbars are typically used for left/right alignment; however, they can be displayed in any way with the \

```html
<h3>Left and right-aligned</h3>
<div class="fd-toolbar" role="toolbar" aria-label="Left and right-aligned toolbar">
    <button class="fd-button fd-button--positive">Accept</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--reject">Reject</button>
</div>
<h3>Left-aligned</h3>
<div class="fd-toolbar" role="toolbar" aria-label="Left-aligned toolbar">
    <button class="fd-button fd-button--positive">Accept</button>
    <button class="fd-button fd-button--reject">Reject</button>
</div>
<h3>Centered</h3>
<div class="fd-toolbar" role="toolbar" aria-label="Centered toolbar">
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button">Centered</button>
    <span class="fd-toolbar__spacer"></span>
</div>
<h3>Right-aligned</h3>
<div class="fd-toolbar" role="toolbar" aria-label="Right-aligned toolbar">
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button">Right-aligned</button>
</div>
<h3>Left, center, and right-aligned</h3>
<div class="fd-toolbar" role="toolbar" aria-label="Left, center, and right-aligned toolbar">
    <button class="fd-button">Left-aligned</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button">Centered</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button">Right-aligned</button>
</div>
<h3>Spacers</h3>
<div class="fd-toolbar" role="toolbar" aria-label="Spacers toolbar">
    <button class="fd-button">Left-aligned</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button">Inside</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button">Inside</button>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button">Right-aligned</button>
</div>
<h3>Spacers with fixed width</h3>
<div class="fd-toolbar" role="toolbar" aria-label="Spacers with fixed width toolbar">
    <button class="fd-button fd-button--transparent">Accept</button>
    <button class="fd-button fd-button--transparent">Reject</button>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--fixed"></span>
    <button class="fd-button">Edit</button>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--fixed"></span>
    <button class="fd-button fd-button--transparent">Delete</button>
</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/toolbar/toolbar.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
