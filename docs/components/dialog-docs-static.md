---
component: fd-dialog-docs-static
title: Components/Dialog
category: Components
selector: fd-dialog-docs-static
cssFile: dialog-docs-static.css
sourcePath: packages/styles/stories/Components/dialog/dialog.stories.js
tags: []
dependencies: ["bar","busy-indicator","button","checkbox","dialog","form-label","form-layout-grid","icon","input","input-group","layout-grid","list","popover","select","textarea","title"]
relatedComponents: ["bar","busy-indicator","button","checkbox","dialog","form-label","form-layout-grid","icon","input","input-group","layout-grid","list","popover","select","textarea","title"]
stability: stable
---

# Components/Dialog

The dialog component is a container that appears in response to an action made by the user. It interrupts the app’s current process to prompt the user for either information or a confirmation, which requires them to make a decision before the process can continue. Dialog displays in a fixed position and is activated by adding the \

## Dependencies

This component depends on the following CSS files:

- `bar.css`
- `busy-indicator.css`
- `button.css`
- `checkbox.css`
- `dialog.css`
- `form-label.css`
- `form-layout-grid.css`
- `icon.css`
- `input.css`
- `input-group.css`
- `layout-grid.css`
- `list.css`
- `popover.css`
- `select.css`
- `textarea.css`
- `title.css`

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
<link href="node_modules/fundamental-styles/dist/bar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/busy-indicator.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/checkbox.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/dialog.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/form-label.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/form-layout-grid.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/input.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/input-group.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/layout-grid.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/list.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/popover.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/select.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/textarea.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/title.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-dialog-docs-static fd-dialog fd-dialog--active">
    <div
        class="fd-dialog__content fd-dialog__content--s"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title-1"
        aria-describedby="dialog-description-1">
        <span class="fd-dialog__resize-handle" role="presentation" aria-hidden="true"></span>
        <header class="fd-dialog__header fd-bar">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5" id="dialog-title-1">
                        Dialog title
                    </h2>
                </div>
            </div>
        </header>
        <section class="fd-dialog__body">
            <span id="dialog-description-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
            </span>
            <div class="fd-dialog__loader">
            </div>
        </section>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button">
                        Begin button
                    </button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button">
                        End button
                    </button>
                </div>
            </div>
        </footer>
    </div>
```

## States

| Class | Description |
|-------|-------------|
| `is-selected` | Selected state |

## Related Components

This component works with or depends on:

- `bar`
- `busy-indicator`
- `button`
- `checkbox`
- `dialog`
- `form-label`
- `form-layout-grid`
- `icon`
- `input`
- `input-group`
- `layout-grid`
- `list`
- `popover`
- `select`
- `textarea`
- `title`

## Examples

### Default

The default dialog component displays a container comprising a header, title, and subheader; followed by a body (content area), loader, footer and action buttons. The container also features a resize handle in the bottom-right corner of the footer, see resizable dialog below for more information.

```html
<div class="fd-dialog-docs-static fd-dialog fd-dialog--active">
    <div
        class="fd-dialog__content fd-dialog__content--s"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title-1"
        aria-describedby="dialog-description-1">
        <span class="fd-dialog__resize-handle" role="presentation" aria-hidden="true"></span>
        <header class="fd-dialog__header fd-bar">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5" id="dialog-title-1">
                        Dialog title
                    </h2>
                </div>
            </div>
        </header>
        <section class="fd-dialog__body">
            <span id="dialog-description-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
            </span>
            <div class="fd-dialog__loader">
            </div>
        </section>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button">
                        Begin button
                    </button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button">
                        End button
                    </button>
                </div>
            </div>
        </footer>
    </div>
```

### Sizes

By default, dialog’s body has no horizontal paddings. If horizontal paddings are added, they should behave responsively based on dialog's window width.

####Horizontal padding

These modifier classes are used to display horizontal padding for dialog's header, subheader, body and footer in various sizes.

| rem | min-width | max width | modifier class |
| ---- | ---------- | ---------- | ----------- |
| 0 | _n/a_ | _n/a_ | \

```html
<div class="fd-dialog-docs-static fd-dialog fd-dialog--active">
    <div
        class="fd-dialog__content fd-dialog__content--s"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title-2"
        aria-describedby="dialog-description-2"
        >

        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5" id="dialog-title-2">
                        Small Dialog
                    </h2>
                </div>
            </div>
        </header>

        <section class="fd-dialog__body" id="dialog-description-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </section>

        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--emphasized">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--transparent">Cancel</button>
                </div>
            </div>
        </footer>
    </div>
    <div class="fd-dialog-docs-static fd-dialog fd-dialog--active">
        <div
            class="fd-dialog__content fd-dialog__content--m"
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title-3"
            aria-describedby="dialog-description-3"
            >

            <header class="fd-dialog__header fd-bar fd-bar--header">
                <div class="fd-bar__left">
                    <div class="fd-bar__element">
                        <h2 class="fd-title fd-title--h5" id="dialog-title-3">
                            Medium Dialog
                        </h2>
                    </div>
                </div>
            </header>

            <section class="fd-dialog__body" id="dialog-description-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </section>

            <footer class="fd-dialog__footer fd-bar fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-dialog__decisive-button fd-button fd-button--emphasized">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button class="fd-dialog__decisive-button fd-button fd-button--transparent">Cancel</button>
                    </div>
                </div>
            </footer>
        </div>
        <div class="fd-dialog-docs-static fd-dialog fd-dialog--active">
            <div
                class="fd-dialog__content fd-dialog__content--l"
                role="dialog"
                aria-modal="true"
                aria-labelledby="dialog-title-4"
                aria-describedby="dialog-description-4"
                >

                <header class="fd-dialog__header fd-bar fd-bar--header">
                    <div class="fd-bar__left">
                        <div class="fd-bar__element">
                            <h2 class="fd-title fd-title--h5" id="dialog-title-4">
                                Large Dialog
                            </h2>
                        </div>
                    </div>
                </header>

                <section class="fd-dialog__body" id="dialog-description-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </section>

                <footer class="fd-dialog__footer fd-bar fd-bar--footer">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-dialog__decisive-button fd-button fd-button--emphasized">Save</button>
                        </div>
                        <div class="fd-bar__element">
                            <button class="fd-dialog__decisive-button fd-button fd-button--transparent">Cancel</button>
                        </div>
                    </div>
                </footer>
            </div>

            <div class="fd-dialog-docs-static fd-dialog fd-dialog--active">
                <div
                    class="fd-dialog__content fd-dialog__content--xl"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="dialog-title-5"
                    aria-describedby="dialog-description-5"
                    >

                    <header class="fd-dialog__header fd-bar fd-bar--header">
                        <div class="fd-bar__left">
                            <div class="fd-bar__element">
                                <h2 class="fd-title fd-title--h5" id="dialog-title-5">
                                    Extra Large Dialog
                                </h2>
                            </div>
                        </div>
                    </header>

                    <section class="fd-dialog__body" id="dialog-description-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    </section>

                    <footer class="fd-dialog__footer fd-bar fd-bar--footer">
                        <div class="fd-bar__right">
                            <div class="fd-bar__element">
                                <button class="fd-dialog__decisive-button fd-button fd-button--emphasized">Save</button>
                            </div>
                            <div class="fd-bar__element">
                                <button class="fd-dialog__decisive-button fd-button fd-button--transparent">Cancel</button>
                            </div>
                        </div>
                    </footer>
                </div>
```

### Resizable

Dialog can also be displayed with a resize handle by adding a span element with a \

```html
<div class="fd-dialog-docs-static fd-dialog fd-dialog--active">
    <div
        class="fd-dialog__content fd-dialog__content--s"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title-6"
        aria-describedby="dialog-description-6"
        >
        <span class="fd-dialog__resize-handle" role="presentation" aria-hidden="true"></span>

        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5" id="dialog-title-6">
                        Lorem ipsum
                    </h2>
                </div>
            </div>
        </header>

        <section class="fd-dialog__body" id="dialog-description-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </section>

        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--emphasized">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--transparent">Cancel</button>
                </div>
            </div>
        </footer>
    </div>
```

### Draggable

Dialog can be draggable, enabling the user to drag the container around with their cursor on a desktop screen.

| Modifier class | Modification |
| ----------------: | :------------ |
| \

```html
<div class="fd-dialog-docs-static fd-dialog fd-dialog--active">
    <div
        class="fd-dialog__content fd-dialog__content--draggable-grab fd-dialog__content--s"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title-7"
        aria-describedby="dialog-description-7"
        >
        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5" id="dialog-title-7">
                        Lorem ipsum
                    </h2>
                </div>
            </div>
        </header>

        <section class="fd-dialog__body" id="dialog-description-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </section>

        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--emphasized">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--transparent">Cancel</button>
                </div>
            </div>
        </footer>
    </div>
```

### Selectable

The selectable dialog displays list items in the content area that can be selected. Users can search items from the list, select one or more items, and finalize their choice by selecting the _Select_ button. To display the selectable dialog, include the \

```html
<div class="fd-dialog-docs-static fd-dialog fd-dialog--active" id="select-dialog-example">
    <div
        class="fd-dialog__content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title-8"
        >
        <header class="fd-dialog__header fd-bar fd-bar--header-with-subheader">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5" id="dialog-title-8">
                        Select Dialog
                    </h2>
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent">Clear</button>
                </div>
            </div>
        </header>

        <section class="fd-dialog__subheader fd-bar fd-bar--subheader">
            <div class="fd-bar__middle">
                <div class="fd-input-group">
                    <input class="fd-input fd-input-group__input" type="text" aria-label="search" placeholder="Search...">
                    <span class="fd-input-group__addon fd-input-group__addon--button">
                        <button class="fd-button fd-input-group__button fd-button--icon fd-button--transparent" aria-label="perform search">
                            <i class="sap-icon--search" role="presentation"></i>
                        </button>
                    </span>
                </div>
            </div>
        </section>

        <section class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <ul class="fd-list fd-list--selection fd-list--no-border" aria-label="selection list" role="listbox">
                <li role="option" tabindex="0" class="fd-list__item">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez4" aria-labelledby="Az0bg4">
                        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez4">
                            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        </label>
                    </div>
                    <span class="fd-list__title" id="Az0bg4">List item 1</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez5" checked aria-labelledby="Az0bg5">
                        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez5">
                            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        </label>
                    </div>
                    <span class="fd-list__title" id="Az0bg5">List item 2</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item is-selected">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez6" checked aria-labelledby="Az0bg6">
                        <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6">
                            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        </label>
                    </div>
                    <span class="fd-list__title" id="Az0bg6">List item 3</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4e44" aria-labelledby="440bg6">
                        <label tabindex="-1" class="fd-checkbox__label" for="Ai4e44">
                            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        </label>
                    </div>
                    <span class="fd-list__title" id="440bg6">List item 4</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4e55" aria-labelledby="550bg6">
                        <label tabindex="-1" class="fd-checkbox__label" for="Ai4e55">
                            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        </label>
                    </div>
                    <span class="fd-list__title" id="550bg6">List item 5</span>
                </li>
                <li role="option" tabindex="0" class="fd-list__item">
                    <div class="fd-form-item fd-list__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4e66" aria-labelledby="660bg6">
                        <label tabindex="-1" class="fd-checkbox__label" for="Ai4e66">
                            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        </label>
                    </div>
                    <span class="fd-list__title" id="660bg6">List item 6</span>
                </li>
            </ul>
            <span class="fd-list__footer">
                2 items selected
            </span>
        </section>

        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--emphasized">Select</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--transparent">Cancel</button>
                </div>
            </div>
        </footer>
    </div>
```

### Loading

Dialog can display a busy indicator that signals to the user that data is loading. To display a busy indicator in the content area, add the `fd-busy-indicator--l` to the `fd-dialog__loader` container element. Although the busy indicator is large in this example, you can choose a smaller size. See **Busy Indicator** for more sizes.

```html
<div class="fd-dialog-docs-static fd-dialog fd-dialog--active" id="loading-dialog-example">
    <div
        class="fd-dialog__content fd-dialog__content--s"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title-9"
        aria-describedby="dialog-description-9"
        >

        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5" id="dialog-title-9">
                        Loading Data...
                    </h2>
                </div>
            </div>
        </header>

        <section class="fd-dialog__body" id="dialog-description-8">
            <strong>Status:</strong> Connecting 127.0.0.1

            </section>

            <footer class="fd-dialog__footer fd-bar fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-dialog__decisive-button fd-button fd-button--transparent">Cancel</button>
                    </div>
                </div>
            </footer>
        </div>
```

### HorizontalForm

Horizontal Form displays all the components aligned horizontally. It is created by positioning the `fd-form-label` class and the `fd-input` class in the same row.

```html
<div class="fd-dialog-docs-static fd-dialog fd-dialog--active">
    <div
        class="fd-dialog__content fd-dialog__content--s"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title-2"
        >

        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5" id="dialog-title-22">
                        Form Dialog
                    </h2>
                </div>
            </div>
        </header>

        <section class="fd-dialog__body">
            <div class="fd-container fd-form-layout-grid-container fd-form-group">
                <div class="fd-row fd-form-item">
                    <div class="fd-col fd-col-md--2 fd-col-lg--4">
                        <label class="fd-form-label" for="input-222-name">Name:</label>
                    </div>
                    <div class="fd-col fd-col-md--10 fd-col-lg--8">
                        <input class="fd-input" type="text" id="input-222-name" placeholder="Enter First and Last Name" value="Amelia Perry">
                    </div>
                </div>
                <div class="fd-row fd-form-item">
                    <div class="fd-col fd-col-md--2 fd-col-lg--4">
                        <label class="fd-form-label fd-form-label--required" for="input-233-street">Street/No.: </label>
                    </div>
                    <div class="fd-col fd-col-md--10 fd-col-lg--8">
                        <div class="fd-row">
                            <div class="fd-col fd-col--4">
                                <input class="fd-input" type="text" id="input-233-street" placeholder="Enter address" value="Myrtle St.">
                            </div>
                            <div class="fd-col fd-col--8">
                                <input class="fd-input" type="text" id="input-233-number" aria-label="Street Number" placeholder="Enter Street Number" value="495">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="fd-row fd-form-item">
                    <div class="fd-col fd-col-md--2  fd-col-lg--4">
                        <label class="fd-form-label fd-form-label--required" for="input-233-zip">ZIP Code/City: </label>
                    </div>
                    <div class="fd-col fd-col-md--10  fd-col-lg--8">
                        <div class="fd-row">
                            <div class="fd-col fd-col--8">
                                <input class="fd-input" type="text" id="input-233-zip" placeholder="Enter ZIP Code" value="43823">
                            </div>
                            <div class="fd-col fd-col--4">
                                <input class="fd-input" type="text" id="input-233-city" placeholder="Enter City" aria-label="City" value="Downtown">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="fd-row fd-form-item">
                    <div class="fd-col fd-col-md--2 fd-col-lg--4">
                        <label class="fd-form-label" for="text-243-name">Bio: </label>
                    </div>
                    <div class="fd-col fd-col-md--10  fd-col-lg--8">
                        <textarea class="fd-textarea" id="text-243-name" >Disabled textarea</textarea>
                    </div>
                </div>

                <div class="fd-row fd-form-item">
                    <div class="fd-col fd-col-md--2  fd-col-lg--4">
                        <label class="fd-form-label" for="input-2-country">Country:</label>
                    </div>
                    <div class="fd-col fd-col-md--10  fd-col-lg--8">
                        <div class="fd-popover">
                            <div class="fd-popover__control">
                                <div class="fd-select">
                                    <div aria-controls="h031XCM509" aria-expanded="false" aria-haspopup="listbox" class="fd-select__control" aria-label="Country" tabindex="0">
                                        <span class="fd-select__text-content">US</span>
                                        <span class="fd-button fd-button--transparent fd-select__button">
                                            <i class="sap-icon--slim-arrow-down"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--emphasized">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--transparent">Cancel</button>
                </div>
            </div>
        </footer>
    </div>
```

### VerticalForm

Verical Form displays all the components aligned vertically. It is created by positioning the `fd-form-label` class above the `fd-input` class in seperate rows.

```html
<div class="fd-dialog-docs-static fd-dialog fd-dialog--active">
    <div
        class="fd-dialog__content fd-dialog__content--s"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title-2">

        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5" id="dialog-title-223">
                        Form Dialog
                    </h2>
                </div>
            </div>
        </header>

        <section class="fd-dialog__body">
            <div class="fd-container fd-form-layout-grid-container fd-form-layout-grid-container--vertical fd-form-group">
                <div class="fd-row fd-form-item">
                    <div class="fd-col">
                        <label class="fd-form-label" for="input-2224-name">Name:</label>
                    </div>
                    <div class="fd-col">
                        <input class="fd-input" type="text" id="input-2224-name" placeholder="Enter First and Last Name" value="Amelia Perry">
                    </div>
                </div>
                <div class="fd-row fd-form-item">
                    <div class="fd-col">
                        <label class="fd-form-label fd-form-label--required" for="input-2334-street">Street/No.: </label>
                    </div>
                    <div class="fd-col">
                        <div class="fd-row">
                            <div class="fd-col fd-col--4">
                                <input class="fd-input" type="text" id="input-2334-street" placeholder="Enter address" value="Myrtle St.">
                            </div>
                            <div class="fd-col fd-col--8">
                                <input class="fd-input" type="text" id="input-2334-number" aria-label="Street Number" placeholder="Enter Street Number" value="495">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="fd-row fd-form-item">
                    <div class="fd-col">
                        <label class="fd-form-label fd-form-label--required" for="input-2334-zip">ZIP Code/City: </label>
                    </div>
                    <div class="fd-col">
                        <div class="fd-row">
                            <div class="fd-col fd-col--8">
                                <input class="fd-input" type="text" id="input-2334-zip" placeholder="Enter ZIP Code" value="43823">
                            </div>
                            <div class="fd-col fd-col--4">
                                <input class="fd-input" type="text" id="input-2334-city" placeholder="Enter City" aria-label="City" value="Downtown">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="fd-row fd-form-item">
                    <div class="fd-col">
                        <label class="fd-form-label" for="text-2434-name">Bio: </label>
                    </div>
                    <div class="fd-col">
                        <textarea class="fd-textarea" id="text-2434-name" >Disabled textarea</textarea>
                    </div>
                </div>

                <div class="fd-row fd-form-item">
                    <div class="fd-col">
                        <label class="fd-form-label" for="input-2-country">Country:</label>
                    </div>
                    <div class="fd-col">
                        <div class="fd-popover">
                            <div class="fd-popover__control">
                                <div class="fd-select">
                                    <div aria-controls="h031XCM509" aria-expanded="false" aria-haspopup="listbox" class="fd-select__control" aria-label="Country" tabindex="0">
                                        <span class="fd-select__text-content">US</span>
                                        <span class="fd-button fd-button--transparent fd-select__button">
                                            <i class="sap-icon--slim-arrow-down"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--emphasized">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--transparent">Cancel</button>
                </div>
            </div>
        </footer>
    </div>
```

### TabletAndHybridDeviceSpecification

To properly support resizing for all input methods, the optional resize handle is context-dependent. Depending on the device, a full screen button is also shown for touch interaction.

```html
<h3>Tablet without mouse attached</h3>
<div>Full Screen Button: visible (<code>sap-icon--full-screen</code>)</div>
<div>Resize Handle: not visible</div>
<div class="fd-dialog-docs-static fd-dialog fd-dialog--active">
    <div
        class="fd-dialog__content fd-dialog__content--s"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title-12"
        aria-describedby="dialog-description-12"
        >
        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5" id="dialog-title-12">
                        Lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsumipsum lorem ipsum lorem ipsum
                        ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum
                        lorem ipsum lorem ipsum
                    </h2>
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button aria-label="Expand to full screen" class="fd-button fd-button--transparent">
                        <i class="sap-icon--full-screen"></i>
                    </button>
                </div>
            </div>
        </header>

        <section class="fd-dialog__body" id="dialog-description-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </section>

        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--emphasized">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--transparent">Cancel</button>
                </div>
            </div>
        </footer>
    </div>

    <h3>Tablet with mouse attached</h3>
    <div>Full Screen Button: visible (<code>sap-icon--full-screen</code>)</div>
    <div>Resize Handle: visible</div>
    <section class="fd-dialog-docs-static fd-dialog fd-dialog--active">
        <div
            class="fd-dialog__content fd-dialog__content--s"
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title-6"
            >
            <span class="fd-dialog__resize-handle"></span>
            <header class="fd-dialog__header fd-bar fd-bar--header">
                <div class="fd-bar__left">
                    <div class="fd-bar__element">
                        <h2 class="fd-title fd-title--h5" id="dialog-title-6">Lorem ipsum</h2>
                    </div>
                </div>
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button aria-label="Expand to full screen" class="fd-button fd-button--transparent">
                            <i class="sap-icon--full-screen"></i>
                        </button>
                    </div>
                </div>
            </header>
            <div class="fd-dialog__body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </div>
            <footer class="fd-dialog__footer fd-bar fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-dialog__decisive-button fd-button fd-button--emphasized">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button class="fd-dialog__decisive-button fd-button fd-button--transparent">Cancel</button>
                    </div>
                </div>
            </footer>
        </section>

        <h3>Hybrid device</h3>
        <div>Full Screen Button: visible (<code>sap-icon--full-screen</code>)</div>
        <div>Resize Handle: visible</div>
        <section class="fd-dialog-docs-static fd-dialog fd-dialog--active">
            <div
                class="fd-dialog__content fd-dialog__content--s"
                role="dialog"
                aria-modal="true"
                aria-labelledby="dialog-title-6"
                >
                <span class="fd-dialog__resize-handle"></span>
                <header class="fd-dialog__header fd-bar fd-bar--header fd-bar--compact">
                    <div class="fd-bar__left">
                        <div class="fd-bar__element">
                            <h2 class="fd-title fd-title--h5" id="dialog-title-6">Lorem ipsum</h2>
                        </div>
                    </div>
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button aria-label="Expand to full screen" class="fd-button fd-button--transparent">
                                <i class="sap-icon--full-screen"></i>
                            </button>
                        </div>
                    </div>
                </header>
                <div class="fd-dialog__body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </div>
                <footer class="fd-dialog__footer fd-bar fd-bar--compact fd-bar--footer">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-dialog__decisive-button fd-button fd-button--emphasized">Save</button>
                        </div>
                        <div class="fd-bar__element">
                            <button class="fd-dialog__decisive-button fd-button fd-button--transparent">Cancel</button>
                        </div>
                    </div>
                </footer>
            </section>

            <h3>Full screen</h3>
            <div>Full Screen Button: visible (<code>sap-icon--exitfullscreen</code>)</div>
            <div>Resize Handle: not visible</div>
            <section class="fd-dialog-docs-static fd-dialog fd-dialog--active">
                <div
                    class="fd-dialog__content fd-dialog__content--s fd-dialog__content--mobile"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="dialog-title-6"
                    >
                    <header class="fd-dialog__header fd-bar fd-bar--header">
                        <div class="fd-bar__left">
                            <div class="fd-bar__element">
                                <h2 class="fd-title fd-title--h5" id="dialog-title-6">Lorem ipsum</h2>
                            </div>
                        </div>
                        <div class="fd-bar__right">
                            <div class="fd-bar__element">
                                <button aria-label="Expand to full screen" class="fd-button fd-button--transparent">
                                    <i class="sap-icon--exitfullscreen"></i>
                                </button>
                            </div>
                        </div>
                    </header>
                    <div class="fd-dialog__body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    </div>
                    <footer class="fd-dialog__footer fd-bar fd-bar--footer">
                        <div class="fd-bar__right">
                            <div class="fd-bar__element">
                                <button class="fd-dialog__decisive-button fd-button fd-button--emphasized">Save</button>
                            </div>
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

This documentation was automatically generated from: `packages/styles/stories/Components/dialog/dialog.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
