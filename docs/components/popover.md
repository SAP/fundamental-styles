---
component: fd-popover
title: Components/Popover
category: Components
selector: fd-popover
cssFile: popover.css
sourcePath: packages/styles/stories/Components/popover/popover.stories.js
tags: []
dependencies: ["avatar","bar","button","icon","layout-grid","menu","popover","segmented-button"]
relatedComponents: ["avatar","bar","button","icon","layout-grid","menu","popover","segmented-button"]
stability: stable
generatedAt: 2026-05-28T20:12:00.353Z
---

# Components/Popover

The popover displays additional information for an object in a compact way without leaving the page. The component contains two essential elements: the control (trigger) and body (content). It can also be paired with a **Menu**, whereas the menu button would trigger a dropdown (body).

##Usage
**Use a popover if:**

- You need to define your own structure.
- You want to show UI elements that are not available with the quick view.

**Do not use a popover if:**

- The objects are in a master list (in this case, the details are shown in the details area).


##Guidelines
- As a general rule, it is suggested that one popover be revealed on the page at any given time. Opening one popover should close all others to prevent multiple layers and collisions of several popovers.
- Show status information as text fields in a content group. You can use semantic text colors.
- You can define a height for the popover. If the content exceeds the height, a scroll bar is displayed.

## Usage Guidelines

**Use a popover if:**

- You need to define your own structure.
- You want to show UI elements that are not available with the quick view.

## When Not To Use

- The objects are in a master list (in this case, the details are shown in the details area).

## Dependencies

This component depends on the following CSS files:

- `avatar.css`
- `bar.css`
- `button.css`
- `icon.css`
- `layout-grid.css`
- `menu.css`
- `popover.css`
- `segmented-button.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/popover.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/avatar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/bar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/layout-grid.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/menu.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/popover.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/segmented-button.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-popover">
    <div class="fd-popover__control">
        <button
            aria-controls="popoverHSF1"
            aria-expanded="true"
            aria-haspopup="true"
            class="fd-button"
            onclick="onPopoverClick('popoverHSF1');"
            role="button">
            <!- role is needed to override the combobox role due to aria-haspopup -->
            Header
        </button>
    </div>
    <div class="fd-popover__body" aria-hidden="false" id="popoverHSF1">
        <div class="fd-popover__body-header">
            <div class="fd-bar fd-bar--header">
                <div class="fd-bar__left">
                    <div class="fd-bar__element">
                        <button aria-label="previous options" class="fd-button fd-button--transparent">
                            <i class="sap-icon--navigation-left-arrow"></i>
                        </button>
                    </div>
                    <div class="fd-bar__element">
                        Header
                    </div>
                </div>
            </div>
        </div>
        <nav class="fd-menu" aria-label="options with header">
            <ul class="fd-menu__list fd-menu__list--no-shadow">
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Option 1</span>
                    </a>
                </li>
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Option 2</span>
                    </a>
                </li>
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Option 3</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>

<div class="fd-popover">
    <div class="fd-popover__control">
        <button
            aria-controls="popoverHSF2"
            aria-expanded="true"
            aria-haspopup="dialog"
            class="fd-button"
            onclick="onPopoverClick('popoverHSF2');"
            role="button">
            <!- role is needed to override the combobox role due to aria-haspopup -->
            Footer
        </button>
    </div>
    <div class="fd-popover__body" aria-hidden="false" id="popoverHSF2">
        <nav class="fd-menu" aria-label="options with footer">
            <ul class="fd-menu__list fd-menu__list--no-shadow">
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Option 1</span>
                    </a>
                </li>
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Option 2</span>
                    </a>
                </li>
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Option 3</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div class="fd-popover__body-footer">
            <div class="fd-bar is-compact fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--emphasized">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--transparent">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="fd-popover">
    <div class="fd-popover__control">
        <button
            aria-controls="popoverHSF3"
            aria-expanded="true"
            aria-haspopup="dialog"
            class="fd-button"
            onclick="onPopoverClick('popoverHSF3');"
            role="button">
            Header, subheader and footer
        </button>
    </div>
    <section
        aria-hidden="false"
        class="fd-popover__body"
        id="popoverHSF3"
        aria-label="Dialog Data 1"
        role="dialog">
        <header class="fd-popover__body-header">
            <div class="fd-bar fd-bar--header-with-subheader">
                <div class="fd-bar__left">
                    <div class="fd-bar__element">
                        <button
                            aria-label="back button"
                            class="fd-button fd-button--transparent">
                            <i class="sap-icon--navigation-left-arrow"></i>
                        </button>
                    </div>
                    <div id="popoverHeader" class="fd-bar__element">
                        Header
                    </div>
                </div>
            </div>
            <div class="fd-bar is-compact fd-bar--subheader">
                <div class="fd-bar__middle">
                    <div class="fd-bar__element">
                        <div class="fd-form-item">
                            <div class="fd-segmented-button" role="group" aria-label="Group label">
                                <button aria-label="email" class="fd-button fd-button--toggled" aria-pressed="true">
                                    <i class="sap-icon--email"></i>
                                </button>
                                <button  aria-label="phone" class="fd-button" aria-pressed="false">
                                    <i class="sap-icon--iphone"></i>
                                </button>
                                <button  aria-label="notification" class="fd-button" aria-pressed="false">
                                    <i class="sap-icon--notification-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <nav class="fd-menu" aria-label="options with header, subheader and footer">
            <ul class="fd-menu__list fd-menu__list--no-shadow">
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Option 1</span>
                    </a>
                </li>
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Option 2</span>
                    </a>
                </li>
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Option 3</span>
                    </a>
                </li>
            </ul>
        </nav>
        <footer class="fd-popover__body-footer">
            <div class="fd-bar is-compact fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--emphasized">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--transparent">Cancel</button>
                    </div>
                </div>
            </div>
        </footer>
    </section>
</div>

<div class="fd-popover">
    <div class="fd-popover__control">
        <button
            aria-controls="popoverHSF3wee"
            aria-expanded="true"
            aria-haspopup="dialog"
            class="fd-button"
            onclick="onPopoverClick('popoverHSF3wee');"
            role="button">
            Long text (title)
        </button>
    </div>
    <section
        aria-hidden="false"
        class="fd-popover__body"
        id="popoverHSF3wee"

        aria-label="Dialog Data 1"
        role="dialog">
        <header class="fd-popover__body-header">
            <div class="fd-bar fd-bar--header-with-subheader">
                <div class="fd-bar__left">
                    <div id="popoverHeaderHSF3wee" class="fd-bar__element">
                        <h5 class="fd-title fd-title--h5 fd-title--wrap" aria-label="text">Header Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellendus exercitationem debitis, ipsum quaerat quo excepturi.</h5>
                    </div>
                </div>
            </div>
            <div class="fd-bar is-compact fd-bar--subheader">
                <div class="fd-bar__middle">
                    <div class="fd-bar__element">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellendus exercitationem debitis, ipsum quaerat quo excepturi.
                    </div>
                </div>
            </div>
        </header>
        <nav class="fd-menu" aria-label="options with header, subheader and footer">
            <ul class="fd-menu__list fd-menu__list--no-shadow">
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Option 1</span>
                    </a>
                </li>
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Option 2</span>
                    </a>
                </li>
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Option 3</span>
                    </a>
                </li>
            </ul>
        </nav>
        <footer class="fd-popover__body-footer">
            <div class="fd-bar is-compact fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--emphasized">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--transparent">Cancel</button>
                    </div>
                </div>
            </div>
        </footer>
    </section>
</div>

<div class="fd-popover">
    <div class="fd-popover__control">
        <button
            aria-controls="popoverHSF3rq"
            aria-expanded="true"
            aria-haspopup="dialog"
            class="fd-button"
            onclick="onPopoverClick('popoverHSF3rq');"
            role="button">
            Long text
        </button>
    </div>
    <section
        aria-hidden="false"
        class="fd-popover__body"
        id="popoverHSF3rq"

        aria-label="Dialog Data 1"
        role="dialog">
        <header class="fd-popover__body-header">
            <div class="fd-bar fd-bar--header-with-subheader">
                <div class="fd-bar__left">
                    <div class="fd-bar__element">
                        <button
                            aria-label="back button"
                            class="fd-button fd-button--transparent">
                            <i class="sap-icon--navigation-left-arrow"></i>
                        </button>
                    </div>
                    <div id="popoverHeaderHSF3rq" class="fd-bar__element">
                        <span>
                            Header Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellendus exercitationem debitis, ipsum quaerat quo excepturi enim.
                        </span>
                    </div>
                </div>
            </div>
            <div class="fd-bar is-compact fd-bar--subheader">
                <div class="fd-bar__middle">
                    <div class="fd-bar__element">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellendus exercitationem debitis, ipsum quaerat quo excepturi enim.
                    </div>
                </div>
            </div>
        </header>
        <nav class="fd-menu" aria-label="options with header, subheader and footer">
            <ul class="fd-menu__list fd-menu__list--no-shadow">
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Option 1</span>
                    </a>
                </li>
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Option 2</span>
                    </a>
                </li>
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Option 3</span>
                    </a>
                </li>
            </ul>
        </nav>
        <footer class="fd-popover__body-footer">
            <div class="fd-bar is-compact fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--emphasized">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--transparent">Cancel</button>
                    </div>
                </div>
            </div>
        </footer>
    </section>
</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-popover--btp` | This extension of Popover is used by components and patterns in the BTP area |
| `fd-popover--right` | Style variant |

## States

| Class | Description |
|-------|-------------|
| `is-compact` | Compact state |

## BEM Elements

This component uses the following BEM elements:

- `fd-popover__body`
- `fd-popover__body--above`
- `fd-popover__body--after`
- `fd-popover__body--arrow-bottom`
- `fd-popover__body--arrow-left`
- `fd-popover__body--arrow-right`
- `fd-popover__body--arrow-x-center`
- `fd-popover__body--arrow-x-end`
- `fd-popover__body--arrow-y-bottom`
- `fd-popover__body--arrow-y-center`
- `fd-popover__body--before`
- `fd-popover__body--bottom`
- `fd-popover__body--center`
- `fd-popover__body--left`
- `fd-popover__body--middle`
- `fd-popover__body--no-arrow`
- `fd-popover__body--padding`
- `fd-popover__body--resizable`
- `fd-popover__body--right`
- `fd-popover__body-content`
- `fd-popover__body-footer`
- `fd-popover__body-footer--center`
- `fd-popover__body-header`
- `fd-popover__control`
- `fd-popover__resize-handle`
- `fd-popover__wrapper`

## Related Components

This component works with or depends on:

- `avatar`
- `bar`
- `button`
- `icon`
- `layout-grid`
- `menu`
- `popover`
- `segmented-button`

## Design Tokens

Key CSS variables used by this component:

- `--above`
- `--after`
- `--arrow`
- `--arrow-x-end`
- `--before`
- `--bottom`
- `--btp`
- `--center`
- `--display`
- `--dropdown`
- `--fdIcon_Button_Height`
- `--fdIcon_Button_Width`
- `--fdModal_BackgroundColor`
- `--fdPopover_Arrow_Size`
- `--fdPopover_Body_Border_Radius`

*...and 5 more*

## Examples

### Body variants

There are several variants of the popover body that can be displayed depending on the use case.

| Variant | Modifier class | Description
:------ | :------------- | :---------------
Header | \

```html
<div class="fd-popover">
    <div class="fd-popover__control">
        <button
            aria-controls="popoverHSF1"
            aria-expanded="true"
            aria-haspopup="true"
            class="fd-button"
            onclick="onPopoverClick('popoverHSF1');"
            role="button">
            <!- role is needed to override the combobox role due to aria-haspopup -->
            Header
        </button>
    </div>
    <div class="fd-popover__body" aria-hidden="false" id="popoverHSF1">
        <div class="fd-popover__body-header">
            <div class="fd-bar fd-bar--header">
                <div class="fd-bar__left">
                    <div class="fd-bar__element">
                        <button aria-label="previous options" class="fd-button fd-button--transparent">
                            <i class="sap-icon--navigation-left-arrow"></i>
                        </button>
                    </div>
                    <div class="fd-bar__element">
                        Header
                    </div>
                </div>
            </div>
        </div>
        <nav class="fd-menu" aria-label="options with header">
            <ul class="fd-menu__list fd-menu__list--no-shadow">
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Option 1</span>
                    </a>
                </li>
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Option 2</span>
                    </a>
                </li>
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Option 3</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>

<div class="fd-popover">
    <div class="fd-popover__control">
        <button
            aria-controls="popoverHSF2"
            aria-expanded="true"
            aria-haspopup="dialog"
            class="fd-button"
            onclick="onPopoverClick('popoverHSF2');"
            role="button">
            <!- role is needed to override the combobox role due to aria-haspopup -->
            Footer
        </button>
    </div>
    <div class="fd-popover__body" aria-hidden="false" id="popoverHSF2">
        <nav class="fd-menu" aria-label="options with footer">
            <ul class="fd-menu__list fd-menu__list--no-shadow">
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Option 1</span>
                    </a>
                </li>
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Option 2</span>
                    </a>
                </li>
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Option 3</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div class="fd-popover__body-footer">
            <div class="fd-bar is-compact fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--emphasized">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--transparent">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="fd-popover">
    <div class="fd-popover__control">
        <button
            aria-controls="popoverHSF3"
            aria-expanded="true"
            aria-haspopup="dialog"
            class="fd-button"
            onclick="onPopoverClick('popoverHSF3');"
            role="button">
            Header, subheader and footer
        </button>
    </div>
    <section
        aria-hidden="false"
        class="fd-popover__body"
        id="popoverHSF3"
        aria-label="Dialog Data 1"
        role="dialog">
        <header class="fd-popover__body-header">
            <div class="fd-bar fd-bar--header-with-subheader">
                <div class="fd-bar__left">
                    <div class="fd-bar__element">
                        <button
                            aria-label="back button"
                            class="fd-button fd-button--transparent">
                            <i class="sap-icon--navigation-left-arrow"></i>
                        </button>
                    </div>
                    <div id="popoverHeader" class="fd-bar__element">
                        Header
                    </div>
                </div>
            </div>
            <div class="fd-bar is-compact fd-bar--subheader">
                <div class="fd-bar__middle">
                    <div class="fd-bar__element">
                        <div class="fd-form-item">
                            <div class="fd-segmented-button" role="group" aria-label="Group label">
                                <button aria-label="email" class="fd-button fd-button--toggled" aria-pressed="true">
                                    <i class="sap-icon--email"></i>
                                </button>
                                <button  aria-label="phone" class="fd-button" aria-pressed="false">
                                    <i class="sap-icon--iphone"></i>
                                </button>
                                <button  aria-label="notification" class="fd-button" aria-pressed="false">
                                    <i class="sap-icon--notification-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <nav class="fd-menu" aria-label="options with header, subheader and footer">
            <ul class="fd-menu__list fd-menu__list--no-shadow">
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Option 1</span>
                    </a>
                </li>
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Option 2</span>
                    </a>
                </li>
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Option 3</span>
                    </a>
                </li>
            </ul>
        </nav>
        <footer class="fd-popover__body-footer">
            <div class="fd-bar is-compact fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--emphasized">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--transparent">Cancel</button>
                    </div>
                </div>
            </div>
        </footer>
    </section>
</div>

<div class="fd-popover">
    <div class="fd-popover__control">
        <button
            aria-controls="popoverHSF3wee"
            aria-expanded="true"
            aria-haspopup="dialog"
            class="fd-button"
            onclick="onPopoverClick('popoverHSF3wee');"
            role="button">
            Long text (title)
        </button>
    </div>
    <section
        aria-hidden="false"
        class="fd-popover__body"
        id="popoverHSF3wee"

        aria-label="Dialog Data 1"
        role="dialog">
        <header class="fd-popover__body-header">
            <div class="fd-bar fd-bar--header-with-subheader">
                <div class="fd-bar__left">
                    <div id="popoverHeaderHSF3wee" class="fd-bar__element">
                        <h5 class="fd-title fd-title--h5 fd-title--wrap" aria-label="text">Header Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellendus exercitationem debitis, ipsum quaerat quo excepturi.</h5>
                    </div>
                </div>
            </div>
            <div class="fd-bar is-compact fd-bar--subheader">
                <div class="fd-bar__middle">
                    <div class="fd-bar__element">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellendus exercitationem debitis, ipsum quaerat quo excepturi.
                    </div>
                </div>
            </div>
        </header>
        <nav class="fd-menu" aria-label="options with header, subheader and footer">
            <ul class="fd-menu__list fd-menu__list--no-shadow">
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Option 1</span>
                    </a>
                </li>
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Option 2</span>
                    </a>
                </li>
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Option 3</span>
                    </a>
                </li>
            </ul>
        </nav>
        <footer class="fd-popover__body-footer">
            <div class="fd-bar is-compact fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--emphasized">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--transparent">Cancel</button>
                    </div>
                </div>
            </div>
        </footer>
    </section>
</div>

<div class="fd-popover">
    <div class="fd-popover__control">
        <button
            aria-controls="popoverHSF3rq"
            aria-expanded="true"
            aria-haspopup="dialog"
            class="fd-button"
            onclick="onPopoverClick('popoverHSF3rq');"
            role="button">
            Long text
        </button>
    </div>
    <section
        aria-hidden="false"
        class="fd-popover__body"
        id="popoverHSF3rq"

        aria-label="Dialog Data 1"
        role="dialog">
        <header class="fd-popover__body-header">
            <div class="fd-bar fd-bar--header-with-subheader">
                <div class="fd-bar__left">
                    <div class="fd-bar__element">
                        <button
                            aria-label="back button"
                            class="fd-button fd-button--transparent">
                            <i class="sap-icon--navigation-left-arrow"></i>
                        </button>
                    </div>
                    <div id="popoverHeaderHSF3rq" class="fd-bar__element">
                        <span>
                            Header Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellendus exercitationem debitis, ipsum quaerat quo excepturi enim.
                        </span>
                    </div>
                </div>
            </div>
            <div class="fd-bar is-compact fd-bar--subheader">
                <div class="fd-bar__middle">
                    <div class="fd-bar__element">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellendus exercitationem debitis, ipsum quaerat quo excepturi enim.
                    </div>
                </div>
            </div>
        </header>
        <nav class="fd-menu" aria-label="options with header, subheader and footer">
            <ul class="fd-menu__list fd-menu__list--no-shadow">
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Option 1</span>
                    </a>
                </li>
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Option 2</span>
                    </a>
                </li>
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Option 3</span>
                    </a>
                </li>
            </ul>
        </nav>
        <footer class="fd-popover__body-footer">
            <div class="fd-bar is-compact fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--emphasized">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--transparent">Cancel</button>
                    </div>
                </div>
            </div>
        </footer>
    </section>
</div>
```

### Control variants

As popover's triggers buttons, images, icons, and more can be used. In the example below, the **Avatar** and **Icon** act as triggers.

```html
<div class="fd-container">
    <div class="fd-row">
        <div class="fd-col--3 fd-col--offset-3">
            <div class="fd-popover fd-popover--right">
                <div class="fd-popover__control">
                    <span
                        class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail"
                        aria-controls="popoverB2"
                        aria-expanded="true"
                        aria-haspopup="true"
                        aria-label="Avatar"

                        onclick="onPopoverClick('popoverB2');"
                        role="button"
                        tabindex="0"></span>
                    </div>
                    <div class="fd-popover__body fd-popover__body--left" aria-hidden="false" id="popoverB2">
                        <nav class="fd-menu" aria-label="navigation items">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a class="fd-menu__link" href="#">
                                        <span class="fd-menu__title">Option 1</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a class="fd-menu__link" href="#">
                                        <span class="fd-menu__title">Option 2</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a class="fd-menu__link" href="#">
                                        <span class="fd-menu__title">Option 3</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a class="fd-menu__link" href="#">
                                        <span class="fd-menu__title">Option 4</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="fd-col--3 fd-col--offset-3">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <button
                            class="fd-button"
                            aria-label="Cart"
                            aria-controls="popoverB4"
                            aria-expanded="true"
                            aria-haspopup="true"
                            onclick="onPopoverClick('popoverB4');"
                            role="button">
                            <!- role is needed to override the combobox role due to aria-haspopup -->
                            <i class="sap-icon--cart" role="presentation"></i>
                        </button>
                    </div>
                    <div class="fd-popover__body" aria-hidden="false" id="popoverB4">
                        <nav class="fd-menu" aria-label="options triggered by icon button">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a class="fd-menu__link" href="#">
                                        <span class="fd-menu__title">Option 1</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a class="fd-menu__link" href="#">
                                        <span class="fd-menu__title">Option 2</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a class="fd-menu__link" href="#">
                                        <span class="fd-menu__title">Option 3</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a class="fd-menu__link" href="#">
                                        <span class="fd-menu__title">Option 4</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
```

### Scrollable

When the content overflows, the popover body can become scrollable. To achieve this, add element with class \

```html
<div class="fd-popover">
    <div class="fd-popover__control">
        <button
            class="fd-button"
            aria-controls="popoverF1"
            aria-expanded="true"
            aria-haspopup="true"
            onclick="onPopoverClick('popoverF1');"
            role="button">
            <!- role is needed to override the combobox role due to aria-haspopup -->
            Popover with overflow
        </button>
    </div>
    <div class="fd-popover__body" aria-hidden="false" id="popoverF1">
        <div class="fd-popover__wrapper">
            <nav class="fd-menu" aria-label="big navigation menu">
                <ul class="fd-menu__list fd-menu__list--no-shadow">
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 1</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 2</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 3</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 4</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 5</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 6</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 7</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 8</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</div>
```

### Placement

It's possible to show popover on different sides of the trigger. To do that apply the following modifier classes to the popover body element.

| Modifier | Description |
| :---- | :---------- |
| \

```html
<div class="fd-popover">
    <div class="fd-popover__control">
        <button
            class="fd-button"
            aria-controls="popoverF1"
            aria-expanded="true"
            aria-haspopup="true"
            onclick="onPopoverClick('popoverF1');"
            role="button"
            >
            <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
        </button>
        <div class="fd-popover__body fd-popover__body--above fd-popover__body--arrow-bottom" aria-hidden="false" id="popoverF1">
            <div class="fd-popover__wrapper">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1a"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1a');"
                role="button"
                >
                <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--above fd-popover__body--center fd-popover__body--arrow-bottom fd-popover__body--arrow-x-center" aria-hidden="false" id="popoverF1a">
            <div class="fd-popover__wrapper">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1b"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1b');"
                role="button"
                >
                <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--above fd-popover__body--right fd-popover__body--arrow-bottom fd-popover__body--arrow-x-end" aria-hidden="false" id="popoverF1b">
            <div class="fd-popover__wrapper">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>

<div class="fd-popover">
    <div class="fd-popover__control">
        <button
            class="fd-button"
            aria-controls="popoverF1c"
            aria-expanded="true"
            aria-haspopup="true"
            onclick="onPopoverClick('popoverF1c');"
            role="button"
            >
            <i class="sap-icon--navigation-left-arrow" role="presentation"></i>
        </button>
        <div class="fd-popover__body fd-popover__body--before fd-popover__body--arrow-right" aria-hidden="false" id="popoverF1c">
            <div class="fd-popover__wrapper">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1d"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1d');"
                role="button"
                >
                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--after fd-popover__body--arrow-left" aria-hidden="false" id="popoverF1d">
            <div class="fd-popover__wrapper">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>

<div class="fd-popover">
    <div class="fd-popover__control">
        <button
            class="fd-button"
            aria-controls="popoverF1e"
            aria-expanded="true"
            aria-haspopup="true"
            onclick="onPopoverClick('popoverF1e');"
            role="button"
            >
            <i class="sap-icon--navigation-left-arrow" role="presentation"></i>
        </button>
        <div class="fd-popover__body fd-popover__body--before fd-popover__body--middle fd-popover__body--arrow-right fd-popover__body--arrow-y-center" aria-hidden="false" id="popoverF1e">
            <div class="fd-popover__wrapper">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1f"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1f');"
                role="button"
                >
                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--after fd-popover__body--middle fd-popover__body--arrow-left fd-popover__body--arrow-y-center" aria-hidden="false" id="popoverF1f">
            <div class="fd-popover__wrapper">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>

<div class="fd-popover">
    <div class="fd-popover__control">
        <button
            class="fd-button"
            aria-controls="popoverF1g"
            aria-expanded="true"
            aria-haspopup="true"
            onclick="onPopoverClick('popoverF1g');"
            role="button"
            >
            <i class="sap-icon--navigation-left-arrow" role="presentation"></i>
        </button>
        <div class="fd-popover__body fd-popover__body--before fd-popover__body--bottom fd-popover__body--arrow-right fd-popover__body--arrow-y-bottom" aria-hidden="false" id="popoverF1g">
            <div class="fd-popover__wrapper">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1h"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1h');"
                role="button"
                >
                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--after fd-popover__body--bottom fd-popover__body--arrow-left fd-popover__body--arrow-y-bottom" aria-hidden="false" id="popoverF1h">
            <div class="fd-popover__wrapper">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>

<div class="fd-popover">
    <div class="fd-popover__control">
        <button
            class="fd-button"
            aria-controls="popoverF1i"
            aria-expanded="true"
            aria-haspopup="true"
            onclick="onPopoverClick('popoverF1i');"
            role="button"
            >
            <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
        </button>
        <div class="fd-popover__body" aria-hidden="false" id="popoverF1i">
            <div class="fd-popover__wrapper">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1j"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1j');"
                role="button"
                >
                <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--center fd-popover__body--arrow-x-center" aria-hidden="false" id="popoverF1j">
            <div class="fd-popover__wrapper">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF1k"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF1k');"
                role="button"
                >
                <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--right fd-popover__body--arrow-x-end" aria-hidden="false" id="popoverF1k">
            <div class="fd-popover__wrapper">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>
```

### NoArrow

It's possible to hide popover's arrow.
To achieve this apply the \

```html
<div class="fd-popover">
    <div class="fd-popover__control">
        <button
            class="fd-button"
            aria-controls="popoverF1"
            aria-expanded="true"
            aria-haspopup="true"
            onClick="onPopoverClick('popoverF1');"
            role="button"
            >
            <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
        </button>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false" id="popoverF1">
        <div class="fd-popover__wrapper">
            <nav class="fd-menu" aria-label="big navigation menu">
                <ul class="fd-menu__list fd-menu__list--no-shadow">
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 1</span>
                        </a>
                    </li>
                    <li class="fd-menu__item">
                        <a class="fd-menu__link" href="#">
                            <span class="fd-menu__title">Option 2</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</div>
```

### Resizable

```html
<div class="fd-popover">
    <div class="fd-popover__control">
        <button
            class="fd-button"
            aria-controls="popoverF1r"
            aria-expanded="true"
            aria-haspopup="true"
            onclick="onPopoverClick('popoverF1r');"
            role="button"
            >
            <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
        </button>
        <div class="fd-popover__body fd-popover__body--above fd-popover__body--arrow-bottom fd-popover__body--resizable" aria-hidden="false" id="popoverF1r">
            <div class="fd-popover__wrapper">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>
            <span class="fd-popover__resize-handle" role="presentation" aria-hidden="true"></span>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF2r"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF2r');"
                role="button"
                >
                <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--above fd-popover__body--center fd-popover__body--arrow-bottom fd-popover__body--arrow-x-center fd-popover__body--resizable" aria-hidden="false" id="popoverF2r">
            <div class="fd-popover__wrapper">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 3</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 4</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <span class="fd-popover__resize-handle" role="presentation" aria-hidden="true"></span>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF3r"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF3r');"
                role="button"
                >
                <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--above fd-popover__body--right fd-popover__body--arrow-bottom fd-popover__body--arrow-x-end fd-popover__body--resizable" aria-hidden="false" id="popoverF3r">
            <div class="fd-popover__wrapper">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 5</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 6</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <span class="fd-popover__resize-handle" role="presentation" aria-hidden="true"></span>
        </div>
    </div>
</div>

<div class="fd-popover">
    <div class="fd-popover__control">
        <button
            class="fd-button"
            aria-controls="popoverF4r"
            aria-expanded="true"
            aria-haspopup="true"
            onclick="onPopoverClick('popoverF4r');"
            role="button"
            >
            <i class="sap-icon--navigation-left-arrow" role="presentation"></i>
        </button>
        <div class="fd-popover__body fd-popover__body--before fd-popover__body--arrow-right fd-popover__body--resizable" aria-hidden="false" id="popoverF4r">
            <div class="fd-popover__wrapper">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 7</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 8</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <span class="fd-popover__resize-handle" role="presentation" aria-hidden="true"></span>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF5r"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF5r');"
                role="button"
                >
                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--after fd-popover__body--arrow-left fd-popover__body--resizable" aria-hidden="false" id="popoverF5r">
            <div class="fd-popover__wrapper">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 9</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 10</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <span class="fd-popover__resize-handle" role="presentation" aria-hidden="true"></span>
        </div>
    </div>
</div>

<div class="fd-popover">
    <div class="fd-popover__control">
        <button
            class="fd-button"
            aria-controls="popoverF6r"
            aria-expanded="true"
            aria-haspopup="true"
            onclick="onPopoverClick('popoverF6r');"
            role="button"
            >
            <i class="sap-icon--navigation-left-arrow" role="presentation"></i>
        </button>
        <div class="fd-popover__body fd-popover__body--before fd-popover__body--middle fd-popover__body--arrow-right fd-popover__body--arrow-y-center fd-popover__body--resizable" aria-hidden="false" id="popoverF6r">
            <div class="fd-popover__wrapper">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 11</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 12</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <span class="fd-popover__resize-handle" role="presentation" aria-hidden="true"></span>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF7r"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF7r');"
                role="button"
                >
                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--after fd-popover__body--middle fd-popover__body--arrow-left fd-popover__body--arrow-y-center fd-popover__body--resizable" aria-hidden="false" id="popoverF7r">
            <div class="fd-popover__wrapper">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 13</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 14</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <span class="fd-popover__resize-handle" role="presentation" aria-hidden="true"></span>
        </div>
    </div>
</div>

<div class="fd-popover">
    <div class="fd-popover__control">
        <button
            class="fd-button"
            aria-controls="popoverF8r"
            aria-expanded="true"
            aria-haspopup="true"
            onclick="onPopoverClick('popoverF8r');"
            role="button"
            >
            <i class="sap-icon--navigation-left-arrow" role="presentation"></i>
        </button>
        <div class="fd-popover__body fd-popover__body--before fd-popover__body--bottom fd-popover__body--arrow-right fd-popover__body--arrow-y-bottom fd-popover__body--resizable" aria-hidden="false" id="popoverF8r">
            <div class="fd-popover__wrapper">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 15</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 16</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <span class="fd-popover__resize-handle" role="presentation" aria-hidden="true"></span>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF9r"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF9r');"
                role="button"
                >
                <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--after fd-popover__body--bottom fd-popover__body--arrow-left fd-popover__body--arrow-y-bottom fd-popover__body--resizable" aria-hidden="false" id="popoverF9r">
            <div class="fd-popover__wrapper">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 17</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 18</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <span class="fd-popover__resize-handle" role="presentation" aria-hidden="true"></span>
        </div>
    </div>
</div>

<div class="fd-popover">
    <div class="fd-popover__control">
        <button
            class="fd-button"
            aria-controls="popoverF10r"
            aria-expanded="true"
            aria-haspopup="true"
            onclick="onPopoverClick('popoverF10r');"
            role="button"
            >
            <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
        </button>
        <div class="fd-popover__body fd-popover__body--resizable" aria-hidden="false" id="popoverF10r">
            <div class="fd-popover__wrapper">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 19</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 20</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <span class="fd-popover__resize-handle" role="presentation" aria-hidden="true"></span>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF11r"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF11r');"
                role="button"
                >
                <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--center fd-popover__body--arrow-x-center fd-popover__body--resizable" aria-hidden="false" id="popoverF11r">
            <div class="fd-popover__wrapper">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 21</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 22</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <span class="fd-popover__resize-handle" role="presentation" aria-hidden="true"></span>
        </div>
    </div>

    <div class="fd-popover">
        <div class="fd-popover__control">
            <button
                class="fd-button"
                aria-controls="popoverF12r"
                aria-expanded="true"
                aria-haspopup="true"
                onclick="onPopoverClick('popoverF12r');"
                role="button"
                >
                <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-popover__body fd-popover__body--right fd-popover__body--arrow-x-end fd-popover__body--resizable" aria-hidden="false" id="popoverF12r">
            <div class="fd-popover__wrapper">
                <nav class="fd-menu" aria-label="big navigation menu">
                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 23</span>
                            </a>
                        </li>
                        <li class="fd-menu__item">
                            <a class="fd-menu__link" href="#">
                                <span class="fd-menu__title">Option 24</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <span class="fd-popover__resize-handle" role="presentation" aria-hidden="true"></span>
        </div>
    </div>
</div>
```

### BTP Popover

This extension of Popover is used by components and patterns in the BTP area. Apply the <code>.fd-popover--btp</code> modifier class to <code>.fd-popover</code> base class. <br>To add padding to the Popover body use the <code>.fd-popover__body--padding</code> modifier class together with <code>.fd-popover__body</code> base class. <br>The content of the footer can be centered by using the <code>.fd-popover__body-footer--center</code> modifier.

```html
<div class="fd-container">
    <div class="fd-row">
        <div class="fd-col--3 fd-col--offset-3">
            <div class="fd-popover fd-popover--btp">
                <div class="fd-popover__control">
                    <button
                        class="fd-button"
                        aria-label="Cart"
                        aria-controls="popoverB4Btp"
                        aria-expanded="true"
                        aria-haspopup="true"
                        onclick="onPopoverClick('popoverB4Btp');"
                        role="button">
                        <i class="sap-icon--cart" role="presentation"></i>
                    </button>
                </div>
                <div class="fd-popover__body" aria-hidden="false" id="popoverB4Btp">
                    <div class="fd-popover__body-header">Header (optional, empty container)</div>
                    <div class="fd-popover__body-content">
                        Content (empty container)
                    </div>
                    <div class="fd-popover__body-footer">
                        Footer (optional, empty container)
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-col--3 fd-col--offset-3">
            <div class="fd-popover fd-popover--btp">
                <div class="fd-popover__control">
                    <button
                        class="fd-button"
                        aria-label="Cart"
                        aria-controls="popoverB4B"
                        aria-expanded="true"
                        aria-haspopup="true"
                        onclick="onPopoverClick('popoverB4B');"
                        role="button">
                        <i class="sap-icon--cart" role="presentation"></i>
                    </button>
                </div>
                <div class="fd-popover__body fd-popover__body--padding" aria-hidden="false" id="popoverB4BTP">
                    <div class="fd-popover__body-header">Header (optional, empty container)</div>
                    <div class="fd-popover__body-content">
                        Content (empty container)
                    </div>
                    <div class="fd-popover__body-footer fd-popover__body-footer--center">
                        Footer (optional, empty container)
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

This documentation was automatically generated from: `packages/styles/stories/Components/popover/popover.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
