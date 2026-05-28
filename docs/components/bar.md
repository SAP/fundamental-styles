---
component: fd-bar
title: Components/Bar
category: Components
selector: fd-bar
cssFile: bar.css
sourcePath: packages/styles/stories/Components/bar/bar.stories.js
tags: []
dependencies: ["avatar","bar","button","icon","input","segmented-button","title"]
relatedComponents: ["avatar","bar","button","icon","input","segmented-button","title"]
stability: stable
generatedAt: 2026-05-28T16:47:20.730Z
---

# Components/Bar

The Bar is a container primarily used for displaying titles, buttons, and input controls. It serves as the foundational design and functionality for page headers, footers, dialogs, and popovers that require a header and/or footer. A header can consist of just a title or a title with a navigation button (back or home) at the front. A subheader can also be included in the header design. Footers can be either fixed or floating. The buttons in the footer are intended for finalizing actions, following a primary-to-tertiary hierarchy, and should be positioned in the right area. <br><br>

**The bar component has two modes:**

- Compact (default, desktop)
- Cozy (tablet and mobile)

## Usage
### Header
**Use the header bar if:**

- Your page contains several controls, and the actions are valid for the entire page.

**Do not use the header bar if:**

- You have closing or finalizing actions for the whole page. In this case, use a footer instead.

### Footer
**Use the footer bar if:**

- You have closing or finalizing actions on your page that apply to the whole page.

**Do not use the footer bar if:**

- You have different containers on your page (such as charts, tables, and forms) and the action influences only certain items. In this case, place the action as close to the corresponding item(s) as possible.
- You have global actions (such as *Edit* or *Delete*) that are not finalizing or closing actions. In this case, use a header instead.


### Buttons
- Use only icon buttons **or** text buttons. Icon and text should not be combined into one button.
- Buttons are sorted by usage i.e. from frequently-used to seldomly-used.

## Paddings

Modifier classes are available to adjust the paddings of the bar when it is being used in the \

## When Not To Use

- You have closing or finalizing actions for the whole page. In this case, use a footer instead.

## Dependencies

This component depends on the following CSS files:

- `avatar.css`
- `bar.css`
- `button.css`
- `icon.css`
- `input.css`
- `segmented-button.css`
- `title.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/bar.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/avatar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/bar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/input.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/segmented-button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/title.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-bar" role="toolbar" aria-label="Bar">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <h5 class="fd-title fd-title--h5" aria-label="text">TEXT</h5>
        </div>
    </div>
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-segmented-button" role="group" aria-label="Group label">
                <button aria-label="button" class="fd-button fd-button--toggled" aria-pressed="true">
                    <i class="sap-icon--email"></i>
                </button>
                <button aria-label="button" class="fd-button" aria-pressed="false">
                    <i class="sap-icon--iphone"></i>
                </button>
                <button aria-label="button" class="fd-button" aria-pressed="false">
                    <i class="sap-icon--notification-2"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span
                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"

                role="img" aria-label="John Doe"></span>
            </div>
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--transparent">
                    <i class="sap-icon--grid"></i>
                </button>
            </div>
        </div>
    </div>

    <div class="fd-bar" role="toolbar" aria-label="Bar">
        <div class="fd-bar__left">
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--transparent">
                    <i class="sap-icon--navigation-left-arrow"></i>
                </button>
            </div>
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--transparent">
                    <i class="sap-icon--home"></i>
                </button>
            </div>
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--transparent">
                    <i class="sap-icon--account"></i>
                </button>
            </div>
        </div>
        <div class="fd-bar__middle">
            <div class="fd-bar__element">
                <div class="fd-segmented-button" role="group" aria-label="Group label">
                    <button aria-label="button" class="fd-button fd-button--toggled" aria-pressed="true">
                        <i class="sap-icon--email"></i>
                    </button>
                    <button aria-label="button" class="fd-button" aria-pressed="false">
                        <i class="sap-icon--iphone"></i>
                    </button>
                    <button aria-label="button" class="fd-button" aria-pressed="false">
                        <i class="sap-icon--notification-2"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="fd-bar__right">
            <div class="fd-bar__element">
                <span
                    class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"

                    role="img" aria-label="John Doe"></span>
                </div>
                <div class="fd-bar__element">
                    <button aria-label="button" class="fd-button fd-button--transparent">
                        <i class="sap-icon--grid"></i>
                    </button>
                </div>
            </div>
        </div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-bar--floating-footer` | Style variant |
| `fd-bar--footer` | Style variant |
| `fd-bar--header` | Style variant |
| `fd-bar--header-with-subheader` | Style variant |
| `fd-bar--home-page-xl` | Style variant |
| `fd-bar--responsive-paddings` | Style variant |
| `fd-bar--subheader` | Style variant |

## BEM Elements

This component uses the following BEM elements:

- `fd-bar__element`
- `fd-bar__element--full-width`
- `fd-bar__left`
- `fd-bar__middle`
- `fd-bar__right`

## Related Components

This component works with or depends on:

- `avatar`
- `bar`
- `button`
- `icon`
- `input`
- `segmented-button`
- `title`

## Design Tokens

Key CSS variables used by this component:

- `--fdBar_Background`
- `--fdBar_Border_Radius`
- `--fdBar_Element_Text_Color`
- `--fdBar_Element_Text_Font_Family`
- `--fdBar_Element_Text_Font_Size`
- `--fdBar_Floating_Footer_Offset_X`
- `--fdBar_Floating_Footer_Offset_Y`
- `--fdBar_Height`
- `--fdBar_Padding_Bottom`
- `--fdBar_Padding_Top`
- `--fdBar_Padding_X`
- `--fdBar_Shadow`
- `--fdBar_Z_Index`
- `--floating-footer`
- `--footer`

*...and 5 more*

## Examples

### Default

```html
<div class="fd-bar" role="toolbar" aria-label="Bar">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <h5 class="fd-title fd-title--h5" aria-label="text">TEXT</h5>
        </div>
    </div>
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-segmented-button" role="group" aria-label="Group label">
                <button aria-label="button" class="fd-button fd-button--toggled" aria-pressed="true">
                    <i class="sap-icon--email"></i>
                </button>
                <button aria-label="button" class="fd-button" aria-pressed="false">
                    <i class="sap-icon--iphone"></i>
                </button>
                <button aria-label="button" class="fd-button" aria-pressed="false">
                    <i class="sap-icon--notification-2"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span
                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"

                role="img" aria-label="John Doe"></span>
            </div>
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--transparent">
                    <i class="sap-icon--grid"></i>
                </button>
            </div>
        </div>
    </div>

    <div class="fd-bar" role="toolbar" aria-label="Bar">
        <div class="fd-bar__left">
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--transparent">
                    <i class="sap-icon--navigation-left-arrow"></i>
                </button>
            </div>
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--transparent">
                    <i class="sap-icon--home"></i>
                </button>
            </div>
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--transparent">
                    <i class="sap-icon--account"></i>
                </button>
            </div>
        </div>
        <div class="fd-bar__middle">
            <div class="fd-bar__element">
                <div class="fd-segmented-button" role="group" aria-label="Group label">
                    <button aria-label="button" class="fd-button fd-button--toggled" aria-pressed="true">
                        <i class="sap-icon--email"></i>
                    </button>
                    <button aria-label="button" class="fd-button" aria-pressed="false">
                        <i class="sap-icon--iphone"></i>
                    </button>
                    <button aria-label="button" class="fd-button" aria-pressed="false">
                        <i class="sap-icon--notification-2"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="fd-bar__right">
            <div class="fd-bar__element">
                <span
                    class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"

                    role="img" aria-label="John Doe"></span>
                </div>
                <div class="fd-bar__element">
                    <button aria-label="button" class="fd-button fd-button--transparent">
                        <i class="sap-icon--grid"></i>
                    </button>
                </div>
            </div>
        </div>
```

### Responsive

```html
<div class="fd-bar fd-bar--responsive-paddings" role="toolbar" aria-label="Responsive Bar">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent">
                <i class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent">
                <i class="sap-icon--home"></i>
            </button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent">
                <i class="sap-icon--account"></i>
            </button>
        </div>
    </div>
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-segmented-button" role="group" aria-label="Group label">
                <button aria-label="button" class="fd-button fd-button--toggled" aria-pressed="true">
                    <i class="sap-icon--email"></i>
                </button>
                <button aria-label="button" class="fd-button" aria-pressed="false">
                    <i class="sap-icon--iphone"></i>
                </button>
                <button aria-label="button" class="fd-button" aria-pressed="false">
                    <i class="sap-icon--notification-2"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span
                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"

                role="img" aria-label="John Doe"></span>
            </div>
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--transparent">
                    <i class="sap-icon--grid"></i>
                </button>
            </div>
        </div>
    </div>
```

### Header

```html
<div class="fd-bar fd-bar--header" role="toolbar" aria-label="Header">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent">
                <i class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent">
                <i class="sap-icon--home"></i>
            </button>
        </div>
        <div class="fd-bar__element">
            Header Text
        </div>
    </div>
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-segmented-button" role="group" aria-label="Group label">
                <button aria-label="button" class="fd-button fd-button--toggled" aria-pressed="true">
                    <i class="sap-icon--email"></i>
                </button>
                <button aria-label="button" class="fd-button" aria-pressed="false">
                    <i class="sap-icon--iphone"></i>
                </button>
                <button aria-label="button" class="fd-button" aria-pressed="false">
                    <i class="sap-icon--notification-2"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span
                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"

                role="img" aria-label="John Doe"></span>
            </div>
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--transparent">
                    <i class="sap-icon--grid"></i>
                </button>
            </div>
        </div>
    </div>
```

### Subheader

```html
<div class="fd-bar fd-bar--subheader" role="toolbar" aria-label="Subheader">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">
                <i class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">
                <i class="sap-icon--home"></i>
            </button>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span
                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"

                role="img" aria-label="John Doe"></span>
            </div>
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--compact fd-button--transparent">
                    <i class="sap-icon--grid"></i>
                </button>
            </div>
        </div>
    </div>

    <div><b>Full width element</b></div>
    <div class="fd-bar fd-bar--subheader" role="toolbar" aria-label="Subheader">
        <div class="fd-bar__middle">
            <div class="fd-bar__element fd-bar__element--full-width">
                <input class="fd-input fd-input--compact fd-input-group__input" type="text" id="" name="" value="1234568910" aria-label="input">
            </div>
        </div>
    </div>
```

### HeaderWithSubheader

```html
<div class="fd-bar fd-bar--header-with-subheader" role="toolbar" aria-label="Header">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">
                <i class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">
                <i class="sap-icon--home"></i>
            </button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">
                <i class="sap-icon--account"></i>
            </button>
        </div>
    </div>
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-segmented-button" role="group" aria-label="Group label">
                <button aria-label="button" class="fd-button fd-button--compact fd-button--toggled" aria-pressed="true">
                    <i class="sap-icon--email"></i>
                </button>
                <button aria-label="button" class="fd-button fd-button--compact" aria-pressed="false">
                    <i class="sap-icon--iphone"></i>
                </button>
                <button aria-label="button" class="fd-button fd-button--compact" aria-pressed="false">
                    <i class="sap-icon--notification-2"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span
                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"

                role="img" aria-label="John Doe"></span>
            </div>
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">
                    <i class="sap-icon--grid"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="fd-bar fd-bar--subheader" role="toolbar" aria-label="Subheader">
        <div class="fd-bar__middle">
            <div class="fd-bar__element fd-bar__element--full-width">
                <input class="fd-input fd-input--compact fd-input-group__input" type="text" id="" name="" value="1234568910 " aria-label="input">
            </div>
        </div>
    </div>
```

### Footer

```html
<div class="fd-bar fd-bar--footer" role="toolbar" aria-label="Footer">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            Footer Text
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
        </div>
    </div>
</div>
```

### FloatingFooter

```html
<div class="fd-bar fd-bar--floating-footer fd-bar--home-page-xl" role="toolbar" aria-label="Floating Footer">
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
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

This documentation was automatically generated from: `packages/styles/stories/Components/bar/bar.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
