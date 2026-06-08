---
component: fd-table
title: Components/Table
category: Components
selector: fd-table
cssFile: table.css
sourcePath: packages/styles/stories/Components/table/table.stories.js
tags: []
dependencies: ["bar","button","checkbox","dialog","fieldset","form-label","icon","input","input-group","link","list","menu","object-marker","object-number","object-status","pagination","popover","select","table","text","title","toolbar"]
relatedComponents: ["bar","button","checkbox","dialog","fieldset","form-label","icon","input","input-group","link","list","menu","object-marker","object-number","object-status","pagination","popover","select","table","text","title","toolbar"]
stability: stable
generatedAt: 2026-06-08T17:49:01.621Z
---

# Components/Table

A table contains a set of line items and usually comprises rows (with each row showing one line item) and columns. Line items can contain data of any kind, but also interactive elements, for example, for editing the data, navigating, or triggering actions relating to the line item.
To display large amounts of data in tabular form, several table components are provided. These are divided into two groups, each of which is defined by a consistent feature set:

- Fully responsive tables
- Desktop-centric tables


##Usage
**Use the responsive table if:**

- The table content should be flexible and visually appealing. The responsive table offers the most flexibility in regards to its content because multiple components can be used. In addition, different rows can be based on different item templates.
- The focus lies on working on line items, not on individual cells.
- A main use case involves selecting one or more items, for which details are needed in order to choose the correct item.
- Line items are independent of each other and no operation across columns is needed.
- You want to have only one implementation for all devices.


**Use the grid table if:**

- You need to display more than 1,000 rows at the same time.
- The cell level and the spatial relationship between cells are more important than the line item, such as if users need to recognize patterns in the data, like in waterfall charts.
- Comparing items is a major use case. The grid table layout remains stable irrespective of the screen width. In addition, a cell only ever contains one component.
- You need an analytical table, but you cannot provide an analytical binding.


**Do not use the table if:**

- You want to display a simple hierarchical dataset.
- You want to use a hierarchical master list for a master-detail scenario using the **Flexible Column Layout**.
- Using a tree table would be too complex.
- The main use case involves selecting one of several hierarchical items with only a few details per item.

In these cases, use the **Tree** instead.

## Usage Guidelines

**Use the responsive table if:**

- The table content should be flexible and visually appealing. The responsive table offers the most flexibility in regards to its content because multiple components can be used. In addition, different rows can be based on different item templates.
- The focus lies on working on line items, not on individual cells.
- A main use case involves selecting one or more items, for which details are needed in order to choose the correct item.
- Line items are independent of each other and no operation across columns is needed.
- You want to have only one implementation for all devices.

## When Not To Use

- You want to display a simple hierarchical dataset.
- You want to use a hierarchical master list for a master-detail scenario using the **Flexible Column Layout**.
- Using a tree table would be too complex.
- The main use case involves selecting one of several hierarchical items with only a few details per item.

In these cases, use the **Tree** instead.

## Dependencies

This component depends on the following CSS files:

- `bar.css`
- `button.css`
- `checkbox.css`
- `dialog.css`
- `fieldset.css`
- `form-label.css`
- `icon.css`
- `input.css`
- `input-group.css`
- `link.css`
- `list.css`
- `menu.css`
- `object-marker.css`
- `object-number.css`
- `object-status.css`
- `pagination.css`
- `popover.css`
- `select.css`
- `table.css`
- `text.css`
- `title.css`
- `toolbar.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/table.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/bar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/checkbox.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/dialog.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/fieldset.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/form-label.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/input.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/input-group.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/link.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/list.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/menu.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/object-marker.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/object-number.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/object-status.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/pagination.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/popover.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/select.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/table.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/text.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/title.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/toolbar.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-toolbar fd-toolbar--title fd-toolbar-active">
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">
                <div class="fd-table__text fd-table__text--no-wrap">
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                </div>
            </td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">
                <div class="fd-table__text">
                    Very long Text Wrapped, limited by max-width
                    Very long Text Wrapped, limited by max-width
                    Very long Text Wrapped, limited by max-width
                    Very long Text Wrapped, limited by max-width
                </div>
            </td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>

<h4>Individual non-interactive header cells</h4>
<div class="fd-toolbar fd-toolbar--title fd-toolbar-active">
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--non-interactive" scope="col">Non-interactive Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell fd-table__cell--non-interactive" scope="col">Non-interactive Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">
                <div class="fd-table__text fd-table__text--no-wrap">
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                </div>
            </td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">
                <div class="fd-table__text">
                    Very long Text Wrapped, limited by max-width
                    Very long Text Wrapped, limited by max-width
                    Very long Text Wrapped, limited by max-width
                    Very long Text Wrapped, limited by max-width
                </div>
            </td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>

<h4>Non-interactive header cells</h4>
<div class="fd-toolbar fd-toolbar--title fd-toolbar-active">
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header fd-table__header--non-interactive">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">
                <div class="fd-table__text fd-table__text--no-wrap">
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                </div>
            </td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">
                <div class="fd-table__text">
                    Very long Text Wrapped, limited by max-width
                    Very long Text Wrapped, limited by max-width
                    Very long Text Wrapped, limited by max-width
                    Very long Text Wrapped, limited by max-width
                </div>
            </td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-table--condensed` | Table can be displayed with a footer |
| `fd-table--fixed` | Table can display fixed header, footer and columns (both, on the left and right) |
| `fd-table--group` | Table can have group rows, to get this do the following:

- Add \ |
| `fd-table--no-horizontal-borders` | Style variant |
| `fd-table--no-outer-border` | Style variant |
| `fd-table--no-vertical-borders` | Style variant |
| `fd-table--pop-in` | The responsive table can be displayed in pop-in mode for mobile and tablet screens |
| `fd-table--responsive` | Responsive table allows navigation from a line item |
| `fd-table--tree` | Table can show tree-like rows, to get this do the following:

- Add \ |

## States

| Class | Description |
|-------|-------------|
| `is-selected` | Selected state |

## BEM Elements

This component uses the following BEM elements:

- `fd-table__body`
- `fd-table__body--no-horizontal-borders`
- `fd-table__body--no-vertical-borders`
- `fd-table__caption`
- `fd-table__cell`
- `fd-table__cell--activable`
- `fd-table__cell--checkbox`
- `fd-table__cell--error`
- `fd-table__cell--expand`
- `fd-table__cell--fit-content`
- `fd-table__cell--fixed`
- `fd-table__cell--fixed-end`
- `fd-table__cell--fixed-end-last`
- `fd-table__cell--fixed-last`
- `fd-table__cell--focusable`
- `fd-table__cell--group`
- `fd-table__cell--hoverable`
- `fd-table__cell--information`
- `fd-table__cell--navigated`
- `fd-table__cell--no-data`
- `fd-table__cell--no-padding`
- `fd-table__cell--non-interactive`
- `fd-table__cell--status-indicator`
- `fd-table__cell--status-indicator--error`
- `fd-table__cell--status-indicator--information`
- `fd-table__cell--status-indicator--valid`
- `fd-table__cell--status-indicator--warning`
- `fd-table__cell--valid`
- `fd-table__cell--warning`
- `fd-table__checkbox`
- `fd-table__checkbox-label`
- `fd-table__expand`
- `fd-table__expand--open`
- `fd-table__footer`
- `fd-table__header`
- `fd-table__header--non-interactive`
- `fd-table__icon`
- `fd-table__icon--navigation`
- `fd-table__inner`
- `fd-table__popover`
- `fd-table__row`
- `fd-table__row--activable`
- `fd-table__row--focusable`
- `fd-table__row--hoverable`
- `fd-table__row--main`
- `fd-table__row--secondary`
- `fd-table__sr-only`
- `fd-table__text`
- `fd-table__text--no-wrap`
- `fd-table__text--title`

## Related Components

This component works with or depends on:

- `bar`
- `button`
- `checkbox`
- `dialog`
- `fieldset`
- `form-label`
- `icon`
- `input`
- `input-group`
- `link`
- `list`
- `menu`
- `object-marker`
- `object-number`
- `object-status`
- `pagination`
- `popover`
- `select`
- `table`
- `text`
- `title`
- `toolbar`

## Design Tokens

Key CSS variables used by this component:

- `--activable`
- `--checkbox`
- `--clickable`
- `--fdTable_Border_Radius`
- `--fdTable_Cell_Height`
- `--fdTable_Cell_Horizontal_Border_Style`
- `--fdTable_Cell_Vertical_Border_Style`
- `--fdTable_Condensed_Focus_Outline_Offset`
- `--fdTable_Header_Cell_Active_Background`
- `--fdTable_Header_Cell_Height`
- `--fdTable_Header_Cell_Hover_Active_Color`
- `--fdTable_Header_Cell_Hover_Background`
- `--fdTable_Header_Horizontal_Border`
- `--fdTable_Hover_Down_Color`
- `--fit-content`

*...and 5 more*

## Examples

### Primary

The primary table contains columns with headers, and rows with links. In the first column, links are displayed. To display links within a table, add the \

```html
<div class="fd-toolbar fd-toolbar--title fd-toolbar-active">
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">
                <div class="fd-table__text fd-table__text--no-wrap">
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                </div>
            </td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">
                <div class="fd-table__text">
                    Very long Text Wrapped, limited by max-width
                    Very long Text Wrapped, limited by max-width
                    Very long Text Wrapped, limited by max-width
                    Very long Text Wrapped, limited by max-width
                </div>
            </td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>

<h4>Individual non-interactive header cells</h4>
<div class="fd-toolbar fd-toolbar--title fd-toolbar-active">
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--non-interactive" scope="col">Non-interactive Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell fd-table__cell--non-interactive" scope="col">Non-interactive Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">
                <div class="fd-table__text fd-table__text--no-wrap">
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                </div>
            </td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">
                <div class="fd-table__text">
                    Very long Text Wrapped, limited by max-width
                    Very long Text Wrapped, limited by max-width
                    Very long Text Wrapped, limited by max-width
                    Very long Text Wrapped, limited by max-width
                </div>
            </td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>

<h4>Non-interactive header cells</h4>
<div class="fd-toolbar fd-toolbar--title fd-toolbar-active">
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header fd-table__header--non-interactive">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">
                <div class="fd-table__text fd-table__text--no-wrap">
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                </div>
            </td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">
                <div class="fd-table__text">
                    Very long Text Wrapped, limited by max-width
                    Very long Text Wrapped, limited by max-width
                    Very long Text Wrapped, limited by max-width
                    Very long Text Wrapped, limited by max-width
                </div>
            </td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
```

### Borderless

Table can be displayed without borders that separate the columns, column headers, and rows. To display a borderless table, add the \

```html
<div class="fd-toolbar fd-toolbar--title fd-toolbar-active">
    <h4 class="fd-title fd-title--h4 fd-toolbar__title">Table Without Borders</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--no-horizontal-borders fd-table--no-vertical-borders">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
```

### Borderless (body)

Table can be displayed without borders that separate the columns and rows only, leaving the column headers with borders. To display a borderless table body, add the  \

```html
<div class="fd-toolbar fd-toolbar--title fd-toolbar-active">
    <h4 class="fd-title fd-title--h4 fd-toolbar__title">Table Without Borders On Body</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body fd-table__body--no-horizontal-borders fd-table__body--no-vertical-borders">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
```

### No outer Border

Table can be displayed without outer borders, might be needed when used inside some other element. To display a table without outer border, add the \

```html
<div class="fd-toolbar fd-toolbar--title fd-toolbar-active">
    <h4 class="fd-title fd-title--h4 fd-toolbar__title">Table Without Outer Borders</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--no-outer-border">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
```

### Footer (condensed)

Table can be displayed with a footer. To display a table footer, add the \

```html
<div class="fd-toolbar fd-toolbar--title fd-toolbar-active">
    <h4 class="fd-title fd-title--h4 fd-toolbar__title">Table With Footer Cozy Mode</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
    <tfoot class="fd-table__footer">
        <tr class="fd-table__row">
            <td class="fd-table__cell"></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell"></td>
        </tr>
    </tfoot>
</table>
```

### Footer (condensed)

Similar to the previous example, table can be displayed with a footer in condensed mode (for desktop screens). To display a condensed table, add the \

```html
<div class="fd-toolbar fd-toolbar--title fd-toolbar-active">
    <h4 class="fd-title fd-title--h4 fd-toolbar__title">Table With Footer Condensed Mode</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--condensed">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
    <tfoot class="fd-table__footer">
        <tr class="fd-table__row">
            <td class="fd-table__cell"></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell"></td>
        </tr>
    </tfoot>
</table>
```

### Interactive

The table component can be interactive with hoverable and activable cells and rows.

| Interaction | Modifier class |
| :------------- | :------------------ |
| Activate | \

```html
<div class="fd-toolbar fd-toolbar--title fd-toolbar-active">
    <h4 class="fd-title fd-title--h4 fd-toolbar__title">Interactive Table With Hoverable and Activable Cells and Rows</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--activable fd-table__cell--hoverable" scope="col">Hovering And</th>
            <th class="fd-table__cell fd-table__cell--activable fd-table__cell--hoverable" scope="col">Clicking</th>
            <th class="fd-table__cell fd-table__cell--activable fd-table__cell--hoverable" scope="col">On Header's Cell</th>
            <th class="fd-table__cell fd-table__cell--activable fd-table__cell--hoverable" scope="col">Will Trigger</th>
            <th class="fd-table__cell fd-table__cell--activable fd-table__cell--hoverable" scope="col">Color Change</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable">
            <td class="fd-table__cell">Clicking on any Cell</td>
            <td class="fd-table__cell"><p class="fd-text">On This Row will cause</p></td>
            <td class="fd-table__cell">
                <span class="fd-object-number fd-object-number--negative">
                    <span class="fd-object-number__text">-2,000.00</span><span class="fd-object-number__unit">EUR</span>
                </span>
            </td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--negative">
                    <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
                    <span class="fd-object-status__text">Highlight of Whole Row</span>
                </span>
            </td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--activable">Clicking On Cell</td>
            <td class="fd-table__cell fd-table__cell--activable">
                <a class="fd-object-marker fd-object-marker--link">
                    <i class="fd-object-marker__icon sap-icon--private" role="presentation"></i>
                    <span class="fd-object-marker__text">Will cause</span>
                </a>
            </td>
            <td class="fd-table__cell fd-table__cell--activable">Highlight of cell</td>
            <td class="fd-table__cell fd-table__cell--activable">Last Name</td>
            <td class="fd-table__cell fd-table__cell--activable">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--hoverable">Hovering On Any Cell</td>
            <td class="fd-table__cell fd-table__cell--hoverable">Will Change</td>
            <td class="fd-table__cell fd-table__cell--hoverable">Background</td>
            <td class="fd-table__cell fd-table__cell--hoverable">Of Certain</td>
            <td class="fd-table__cell fd-table__cell--hoverable">Cell</td>
        </tr>
        <tr class="fd-table__row fd-table__row--hoverable">
            <td class="fd-table__cell">Hovering On Any Cell</td>
            <td class="fd-table__cell">And cells</td>
            <td class="fd-table__cell">Will Change</td>
            <td class="fd-table__cell">Background of Whole Row</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
```

### Semantic

The table component can display highlight indicators to classify certain items with semantic states. To display status indicators in table, add the \

```html
<div class="fd-toolbar fd-toolbar--title fd-toolbar-active">
    <h4 class="fd-title fd-title--h4 fd-toolbar__title">Table with Semantic Rows</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--status-indicator"></th>
            <th class="fd-table__cell fd-table__cell--checkbox" scope="col">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai9ez611">
                <label class="fd-checkbox__label" for="Ai9ez611"><span class="fd-checkbox__checkmark" aria-hidden="true"></span></label>
            </th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai9ek611">
                <label class="fd-checkbox__label" for="Ai9ek611"><span class="fd-checkbox__checkmark" aria-hidden="true"></span></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell"><p class="fd-text">First Name</p></td>
            <td class="fd-table__cell"><p class="fd-text">Last Name</p></td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator fd-table__cell--status-indicator--valid"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai9ek673">
                <label class="fd-checkbox__label" for="Ai9ek673"><span class="fd-checkbox__checkmark" aria-hidden="true"></span></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell fd-table__cell--valid">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai9ek69s">
                <label class="fd-checkbox__label" for="Ai9ek69s"><span class="fd-checkbox__checkmark" aria-hidden="true"></span></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator fd-table__cell--status-indicator--warning"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai9ekk69s">
                <label class="fd-checkbox__label" for="Ai9ekk69s"><span class="fd-checkbox__checkmark" aria-hidden="true"></span></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell fd-table__cell--warning">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai73k69s">
                <label class="fd-checkbox__label" for="Ai73k69s"><span class="fd-checkbox__checkmark" aria-hidden="true"></span></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator fd-table__cell--status-indicator--error"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai734F6s">
                <label class="fd-checkbox__label" for="Ai734F6s"><span class="fd-checkbox__checkmark" aria-hidden="true"></span></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell fd-table__cell--error">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai73HE36s">
                <label class="fd-checkbox__label" for="Ai73HE36s"><span class="fd-checkbox__checkmark" aria-hidden="true"></span></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator fd-table__cell--status-indicator--information"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai7JDE36s">
                <label class="fd-checkbox__label" for="Ai7JDE36s"><span class="fd-checkbox__checkmark" aria-hidden="true"></span></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell fd-table__cell--information">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai7JGD6s">
                <label class="fd-checkbox__label" for="Ai7JGD6s"><span class="fd-checkbox__checkmark" aria-hidden="true"></span></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link"><span class="fd-link__content">user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
```

### Focusable rows

Table can display focusable rows by adding the \

```html
<div class="fd-toolbar fd-toolbar--title fd-toolbar-active">
    <h4 class="fd-title fd-title--h4 fd-toolbar__title">Table With Focusable Rows</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table" role="grid">
    <thead class="fd-table__header">
        <tr class="fd-table__row fd-table__row--focusable" tabindex="-1">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row fd-table__row--focusable" tabindex="-1">
            <td class="fd-table__cell" role="gridcell"><a class="fd-link"><span>user.name@email.com</span></a></td>
            <td class="fd-table__cell" role="gridcell">First Name</td>
            <td class="fd-table__cell" role="gridcell">Middle Name</td>
            <td class="fd-table__cell" role="gridcell">Last Name</td>
            <td class="fd-table__cell" role="gridcell">01/26/17</td>
        </tr>
        <tr class="fd-table__row fd-table__row--focusable" tabindex="-1">
            <td class="fd-table__cell" role="gridcell"><a class="fd-link"><span>user.name@email.com</span></a></td>
            <td class="fd-table__cell" role="gridcell">First Name</td>
            <td class="fd-table__cell" role="gridcell">Middle Name</td>
            <td class="fd-table__cell" role="gridcell">Last Name</td>
            <td class="fd-table__cell" role="gridcell">01/26/17</td>
        </tr>
    </tbody>
</table>
```

### Focusable cells

Table can display focusable cells by adding the \

```html
<div class="fd-toolbar fd-toolbar--title fd-toolbar-active">
    <h4 class="fd-title fd-title--h4 fd-toolbar__title">Table With Focusable Cells</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table" role="grid">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1" scope="col">Column Header</th>
            <th class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1" scope="col">Column Header</th>
            <th class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1" scope="col">Column Header</th>
            <th class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1" scope="col">Column Header</th>
            <th class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1"><a class="fd-link"><span>user.name@email.com</span></a></td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">First Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">Middle Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">Last Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1"><a class="fd-link"><span>user.name@email.com</span></a></td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">First Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">Middle Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">Last Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">01/26/17</td>
        </tr>
    </tbody>
</table>
```

### Checkbox (condensed)

Table can display checkboxes to allow the user to perform bulk actions.
To display checkboxes in table, add the \

```html
<div class="fd-toolbar fd-toolbar--title fd-toolbar-active">
    <h4 class="fd-title fd-title--h4 fd-toolbar__title">Table With Checkbox</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--checkbox" scope="col">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-table__checkbox" id="Ai4ez611">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="Ai4ez611">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                </label>
            </th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row" aria-selected="true">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox fd-table__checkbox" id="Ai4ez615">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="Ai4ez615">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                </label>
            </td>
            <td class="fd-table__cell"><a class="fd-link"><span>user.name@email.com</span></a></td>
            <td class="fd-table__cell"><span class="fd-table__text">First Name</span></td>
            <td class="fd-table__cell"><span class="fd-table__text">Last Name</span></td>
            <td class="fd-table__cell"><span class="fd-table__text">01/26/17</span></td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-table__checkbox" id="Ai4ez617">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="Ai4ez617">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                </label>
            </td>
            <td class="fd-table__cell"><a class="fd-link"><span>user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-table__checkbox" id="Gi4ez611">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="Gi4ez611">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                </label>
            </td>
            <td class="fd-table__cell"><a class="fd-link"><span>user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
```

### Checkbox (condensed)

Table can be displayed with checkboxes in condensed mode. To display checkboxes in table, add the \

```html
<div class="fd-toolbar fd-toolbar--title fd-toolbar-active">
    <h4 class="fd-title fd-title--h4 fd-toolbar__title">Table With Checkbox Condensed Mode</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--condensed">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--checkbox" scope="col">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-table__checkbox" id="Ai4JH2BF87">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="Ai4JH2BF87">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                </label>
            </th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row" aria-selected="true">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox fd-table__checkbox" id="Ai4JHf87">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="Ai4JHf87">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                </label>
            </td>
            <td class="fd-table__cell"><a class="fd-link"><span>user.name@email.com</span></a></td>
            <td class="fd-table__cell"><span class="fd-table__text">First Name</span></td>
            <td class="fd-table__cell"><span class="fd-table__text">Last Name</span></td>
            <td class="fd-table__cell"><span class="fd-table__text">01/26/17</span></td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-table__checkbox" id="Ai4Jj67">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="Ai4Jj67">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                </label>
            </td>
            <td class="fd-table__cell"><a class="fd-link"><span>user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-table__checkbox" id="AGjtJj67">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="AGjtJj67">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                </label>
            </td>
            <td class="fd-table__cell"><a class="fd-link"><span>user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
```

### Pagination

Table can be displayed with bottom pagination by adding the \

```html
<div class="fd-toolbar fd-toolbar--title fd-toolbar-active">
    <h4 class="fd-title fd-title--h4 fd-toolbar__title">Table With Pagination at The Bottom</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Name</th>
            <th class="fd-table__cell" scope="col">Status</th>
            <th class="fd-table__cell" scope="col">Price</th>
            <th class="fd-table__cell" scope="col">Country</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell">Banana</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--positive">
                    Available
                </span>
            </td>
            <td class="fd-table__cell">5 EUR</td>
            <td class="fd-table__cell">India</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">Pineapple</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--negative">
                    Out of stock
                </span>
            </td>
            <td class="fd-table__cell">2 EUR</td>
            <td class="fd-table__cell">Mexico</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">Orange</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--informative">
                    Temporary unavailable
                </span>
            </td>
            <td class="fd-table__cell">6 EUR</td>
            <td class="fd-table__cell">Spain</td>
        </tr>
    </tbody>
</table>

<div class='fd-pagination'>
    <nav class='fd-pagination__nav'>
        <a href='#' class='fd-button fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='First' aria-disabled='false'>
            <i class='sap-icon sap-icon--media-rewind'></i>
        </a>

        <a href='#' class='fd-button fd-button--transparent fd-pagination__button' aria-label='Previous' aria-disabled='false'>
            <i class='sap-icon sap-icon--navigation-left-arrow'></i>
        </a>

        <a href='#' class='fd-button fd-button--transparent fd-pagination__link'>1</a>

        <label class='fd-form-label fd-pagination__label' for='secondPageInput'>Page:</label>

        <input id='secondPageInput' class='fd-input fd-pagination__input' type='number' min='1' max='10' value='2' required />

        <a href='#' class='fd-button fd-button--transparent fd-pagination__link'>3</a>

        <span class='fd-pagination__more' role='presentation'></span>

        <a href='#' class='fd-button fd-button--transparent fd-pagination__link'>10</a>

        <a href='#' class='fd-button fd-button--transparent fd-pagination__button' aria-label='Next' aria-disabled='false'>
            <i class='sap-icon sap-icon--navigation-right-arrow'></i>
        </a>

        <a href='#' class='fd-button fd-button--transparent fd-pagination__button fd-pagination__button--mobile' aria-label='Last' aria-disabled='false'>
            <i class='sap-icon sap-icon--media-forward'></i>
        </a>
    </nav>

    <div class='fd-pagination__total'>
        <span class='fd-form-label fd-pagination__total-label'>30 Results</span>
    </div>
</div>
```

### Advanced toolbar

The table component can be displayed with an advanced **Toolbar**, which allows users to customize their table. In this example, buttons trigger **Dialogs**. To display an advanced toolbar, pair \

```html
<div class="fd-dialog" id="filter-dialog-example">
    <section class="fd-dialog__content" role="dialog" aria-modal="true" aria-labelledby="dialog-filter">
        <header class="fd-dialog__header fd-bar">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 class="fd-dialog__title" id="dialog-filter">
                        Filter By
                    </h3>
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <span class="sap-icon--filter"></span>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <ul class="fd-list">
                <li class="fd-list__item">
                    <span class="fd-list__title">Name</span>
                </li>
                <li class="fd-list__item">
                    <span class="fd-list__title">Status</span>
                </li>
                <li class="fd-list__item">
                    <span class="fd-list__title">Price</span>
                </li>
                <li class="fd-list__item">
                    <span class="fd-list__title">Country</span>
                </li>
            </ul>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button aria-label="navigation" class="fd-dialog__decisive-button fd-button fd-button--emphasized" onclick="toggleClass('filter-dialog-example', 'fd-dialog--active')">OK</button>
                </div>
                <div class="fd-bar__element">
                    <button aria-label="navigation" class="fd-dialog__decisive-button fd-button fd-button--transparent" onclick="toggleClass('filter-dialog-example', 'fd-dialog--active')">Cancel</button>
                </div>
            </div>
        </footer>
    </section>
</div>
<div class="fd-dialog" id="settings-dialog-example">
    <section class="fd-dialog__content" role="dialog" aria-modal="true" aria-labelledby="dialog-settings">
        <header class="fd-dialog__header fd-bar fd-bar--header-with-subheader">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 class="fd-dialog__title" id="dialog-settings">
                        Columns
                    </h3>
                </div>
            </div>
        </header>
        <div class="fd-dialog__subheader fd-bar fd-bar--subheader">
            <div class="fd-bar__middle">
                <div class="fd-bar__element">
                    <button aria-label="navigation" class="fd-button fd-button--icon fd-button--transparent">
                        <i class="sap-icon--arrow-top"></i>
                    </button>
                    <button aria-label="navigation" class="fd-button fd-button--icon fd-button--transparent">
                        <i class="sap-icon--arrow-bottom"></i>
                    </button>
                </div>
                <div class="fd-bar__element fd-bar__element--full-width">
                    <div class="fd-input-group">
                        <input aria-labelledby="dialog-settings"
                        class="fd-input fd-input-group__input" type="text" placeholder="Search...">
                        <span class="fd-input-group__addon fd-input-group__addon--button">
                            <button aria-label="navigation"
                                class="fd-button fd-input-group__button fd-button--icon fd-button--transparent">
                                <i class="sap-icon--search"></i>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <ul aria-labelledby="dialog-settings" class="fd-list fd-list--multi-input"
                aria-multiselectable="true" role="listbox">
                <li class="fd-list__item is-selected" role="option">
                    <input aria-label="checkbox" type="checkbox" checked
                    class="fd-checkbox fd-list__input" id="GGi4ezFD1">
                    <label class="fd-checkbox__label fd-list__label" for="GGi4ezFD1">
                        <div class="fd-checkbox__label-container"><span class="fd-checkbox__text">All</span></div>
                    </label>
                </li>
                <li class="fd-list__item is-selected" role="option">
                    <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox fd-list__input" id="GGi4ez641">
                    <label class="fd-checkbox__label fd-list__label" for="GGi4ez641">
                        <div class="fd-checkbox__label-container"><span class="fd-checkbox__text">Name</span></div>
                    </label>
                </li>
                <li class="fd-list__item is-selected" role="option">
                    <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4FGFG612">
                    <label class="fd-checkbox__label fd-list__label" for="Ai4FGFG612">
                        <div class="fd-checkbox__label-container"><span class="fd-checkbox__text">Status</span></div>
                    </label>
                </li>
                <li class="fd-list__item is-selected" role="option">
                    <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4e88614">
                    <label class="fd-checkbox__label fd-list__label" for="Ai4e88614">
                        <div class="fd-checkbox__label-container"><span class="fd-checkbox__text">Price</span></div>
                    </label>
                </li>
                <li class="fd-list__item is-selected" role="option">
                    <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4egh6024">
                    <label class="fd-checkbox__label fd-list__label" for="Ai4egh6024">
                        <div class="fd-checkbox__label-container"><span class="fd-checkbox__text">Country</span></div>
                    </label>
                </li>
            </ul>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button aria-label="navigation" class="fd-dialog__decisive-button fd-button fd-button--emphasized" onclick="toggleClass('settings-dialog-example', 'fd-dialog--active')">OK</button>
                </div>
                <div class="fd-bar__element">
                    <button aria-label="navigation" class="fd-dialog__decisive-button fd-button fd-button--transparent" onclick="toggleClass('settings-dialog-example', 'fd-dialog--active')">Cancel</button>
                </div>
            </div>
        </footer>
    </section>
</div>
<div class="fd-toolbar fd-toolbar--title fd-toolbar-active">
    <h4 class="fd-title fd-title--h4 fd-toolbar__title">Table With Advanced Shellbar</h4>

    <button aria-label="navigation" class="fd-button fd-button--transparent" onclick="toggleClass('filter-dialog-example', 'fd-dialog--active')">
        <i class="sap-icon--filter"></i>
    </button>
    <button aria-label="navigation" class="fd-button fd-button--transparent" onclick="toggleClass('settings-dialog-example', 'fd-dialog--active')">
        <i class="sap-icon--action-settings"></i>
    </button>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Name</th>
            <th class="fd-table__cell" scope="col">Status</th>
            <th class="fd-table__cell" scope="col">Price</th>
            <th class="fd-table__cell" scope="col">Country</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell">Banana</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--positive">
                    Available
                </span>
            </td>
            <td class="fd-table__cell">5 EUR</td>
            <td class="fd-table__cell">India</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">Pineapple</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--negative">
                    Out of stock
                </span>
            </td>
            <td class="fd-table__cell">2 EUR</td>
            <td class="fd-table__cell">Mexico</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">Orange</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--informative">
                    Temporary unavailable
                </span>
            </td>
            <td class="fd-table__cell">6 EUR</td>
            <td class="fd-table__cell">Spain</td>
        </tr>
    </tbody>
</table>
```

### Contextual menu

Table can display a contextual menu containing actions if there is not enough space in a given row. It is recommended to use a contextual menu if there are more than three actions. To display table with a contextual menu, add the \

```html
<div class="fd-toolbar fd-toolbar--title fd-toolbar-active">
    <h4 class="fd-title fd-title--h4 fd-toolbar__title">Table with Contextual Menu</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
    <table class="fd-table" >
        <thead class="fd-table__header">
            <tr class="fd-table__row">
                <th class="fd-table__cell" scope="col">Column Header</th>
                <th class="fd-table__cell" scope="col">Column Header</th>
                <th class="fd-table__cell" scope="col">Column Header</th>
                <th class="fd-table__cell" scope="col">
                    <span class="fd-table__sr-only">Row Actions</span>
                </th>
            </tr>
        </thead>
        <tbody class="fd-table__body">
            <tr class="fd-table__row">
                <td class="fd-table__cell"><a class="fd-link"><span>user.name@email.com</span></a></td>
                <td class="fd-table__cell">First Name</td>
                <td class="fd-table__cell">01/26/17</td>
                <td class="fd-table__cell fd-table__cell--fit-content">
                    <div class="fd-popover">
                        <div class="fd-popover__control">
                            <button aria-label="navigation" class="fd-button fd-button--transparent" aria-controls="pQqQRFF3" aria-haspopup="true" aria-expanded="false" aria-label="More"
                                onclick="onPopoverClick('pQqQRFF3')">
                                <i class="sap-icon--overflow"></i>
                            </button>
                        </div>
                        <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="pQqQRFF3">
                            <nav class="fd-menu">
                                <ul class="fd-menu__list fd-menu__list--no-shadow">
                                    <li class="fd-menu__item">
                                        <a href="#" class="fd-menu__link">
                                            <span class="fd-menu__title">Option 1</span>
                                        </a>
                                    </li>
                                    <li class="fd-menu__item">
                                        <a href="#" class="fd-menu__link">
                                            <span class="fd-menu__title">Option 2</span>
                                        </a>
                                    </li>
                                    <li class="fd-menu__item">
                                        <a href="#" class="fd-menu__link">
                                            <span class="fd-menu__title">Option 3</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </td>
            </tr>
            <tr class="fd-table__row">
                <td class="fd-table__cell"><a class="fd-link"><span>user.name@email.com</span></a></td>
                <td class="fd-table__cell">First Name</td>
                <td class="fd-table__cell">01/26/17</td>
                <td class="fd-table__cell fd-table__cell--fit-content">
                    <div class="fd-popover">
                        <div class="fd-popover__control">
                            <button aria-label="navigation" class="fd-button fd-button--transparent" aria-controls="G54qQRFF3" aria-haspopup="true" aria-expanded="false" aria-label="More" onclick="onPopoverClick('G54qQRFF3')">
                                <i class="sap-icon--overflow"></i>
                            </button>
                        </div>
                        <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="G54qQRFF3">
                            <nav class="fd-menu">
                                <ul class="fd-menu__list fd-menu__list--no-shadow">
                                    <li class="fd-menu__item">
                                        <a href="#" class="fd-menu__link">
                                            <span class="fd-menu__title">Option 1</span>
                                        </a>
                                    </li>
                                    <li class="fd-menu__item">
                                        <a href="#" class="fd-menu__link">
                                            <span class="fd-menu__title">Option 2</span>
                                        </a>
                                    </li>
                                    <li class="fd-menu__item">
                                        <a href="#" class="fd-menu__link">
                                            <span class="fd-menu__title">Option 3</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
```

### Menu header

Table can display menu options from a popover within headers. The example below demonstrates headers containing customization actions such as _Ascending_ and _Descending_. To display a menu within a header, add the \

```html
<div class="fd-toolbar fd-toolbar--title fd-toolbar-active">
    <h4 class="fd-title fd-title--h4 fd-toolbar__title">Table with Popover in Headers</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table" >
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">
                <div class="fd-table__popover fd-popover">
                    <div class="fd-popover__control" aria-controls="popoverA1" aria-expanded="false" aria-haspopup="true">
                        <div class="fd-table__inner">
                            Column Header Ascending
                            <span class="fd-table__icon sap-icon--sort-ascending"></span>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="popoverA1">
                        <ul class="fd-list" role="list">
                            <li tabindex="0" role="listitem" class="fd-list__item">
                                <span class="fd-list__icon sap-icon--sort-descending"></span>
                                <span class="fd-list__title">Sort Descending</span>
                            </li>
                            <li tabindex="0" role="listitem" class="fd-list__item">
                                <span class="fd-list__icon sap-icon--sort-ascending"></span>
                                <span class="fd-list__title">Sort Ascendnig</span>
                            </li>
                            <li role="listitem" class="fd-list__item">
                                <span class="fd-list__icon sap-icon--filter"></span>
                                <div class="fd-form-item  fd-form-item--horizontal">
                                    <label class="fd-form-label" for="input-1d">Filter</label>
                                    <input class="fd-input" id="input-1d">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </th>
            <th class="fd-table__cell" scope="col">
                <div class="fd-table__popover fd-popover">
                    <div class="fd-popover__control" aria-controls="popoverA2" aria-expanded="false" aria-haspopup="true">
                        <div class="fd-table__inner">
                            Column Header Descending
                            <span class="fd-table__icon sap-icon--sort-descending"></span>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="popoverA2">
                        <ul class="fd-list" role="list">
                            <li tabindex="0" role="listitem" class="fd-list__item">
                                <span class="fd-list__icon sap-icon--sort-descending"></span>
                                <span class="fd-list__title">Sort Descending</span>
                            </li>
                            <li tabindex="0" role="listitem" class="fd-list__item">
                                <span class="fd-list__icon sap-icon--sort-ascending"></span>
                                <span class="fd-list__title">Sort Ascendnig</span>
                            </li>
                            <li role="listitem" class="fd-list__item">
                                <span class="fd-list__icon sap-icon--filter"></span>
                                <div class="fd-form-item  fd-form-item--horizontal">
                                    <label class="fd-form-label" for="input-1d">Filter</label>
                                    <input class="fd-input" id="input-1d2">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span>user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span>user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link"><span>user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
```

### Fixed header, footer and columns

Table can display fixed header, footer and columns (both, on the left and right).

At first, wrap the table in a element with the \

```html
<style>
    .fd-table--fixed {
    height: 300px;
    }

    .fd-table--fixed .fd-table__cell {
    min-width: 200px;
    max-width: 200px;
    }
</style>
<div class="fd-table--fixed">
    <table class="fd-table">
        <thead class="fd-table__header">
            <tr class="fd-table__row">
                <th class="fd-table__cell fd-table__cell--fixed fd-table__cell--fixed-last"  aria-haspopup="true" scope="col">
                    Header Column
                </th>
                <th class="fd-table__cell" scope="col">
                    Header Column
                </th>
                <th class="fd-table__cell" scope="col">
                    Header Column
                </th>
                <th class="fd-table__cell" scope="col">
                    Header Column
                </th>
                <th class="fd-table__cell" scope="col">
                    Header Column
                </th>
                <th class="fd-table__cell" scope="col">
                    Header Column
                </th>
                <th class="fd-table__cell" scope="col">
                    Header Column
                </th>
                <th class="fd-table__cell fd-table__cell--fixed-end fd-table__cell--fixed-end-last" scope="col">
                    Header Column
                </th>
            </tr>
        </thead>
        <tbody class="fd-table__body">
            <tr class="fd-table__row">
                <th class="fd-table__cell fd-table__cell--fixed fd-table__cell--fixed-last" scope="row">Row header</th>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell fd-table__cell--fixed-end fd-table__cell--fixed-end-last">Lorem ipsum dolor sit amet ipsum</td>
            </tr>
            <tr class="fd-table__row">
                <th class="fd-table__cell fd-table__cell--fixed fd-table__cell--fixed-last" scope="row">Row header</th>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell fd-table__cell--fixed-end fd-table__cell--fixed-end-last">Lorem ipsum dolor sit amet ipsum</td>
            </tr>
            <tr class="fd-table__row">
                <th class="fd-table__cell fd-table__cell--fixed fd-table__cell--fixed-last" scope="row">Row header</th>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell fd-table__cell--fixed-end fd-table__cell--fixed-end-last">Lorem ipsum dolor sit amet ipsum</td>
            </tr>
            <tr class="fd-table__row">
                <th class="fd-table__cell fd-table__cell--fixed fd-table__cell--fixed-last" scope="row">Row header</th>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell fd-table__cell--fixed-end fd-table__cell--fixed-end-last">Lorem ipsum dolor sit amet ipsum</td>
            </tr>
            <tr class="fd-table__row">
                <th class="fd-table__cell fd-table__cell--fixed fd-table__cell--fixed-last" scope="row">Row header</th>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell fd-table__cell--fixed-end fd-table__cell--fixed-end-last">Lorem ipsum dolor sit amet ipsum</td>
            </tr>
            <tr class="fd-table__row">
                <th class="fd-table__cell fd-table__cell--fixed fd-table__cell--fixed-last" scope="row">Row header</th>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell fd-table__cell--fixed-end fd-table__cell--fixed-end-last">Lorem ipsum dolor sit amet ipsum</td>
            </tr>
            <tr class="fd-table__row">
                <th class="fd-table__cell fd-table__cell--fixed fd-table__cell--fixed-last" scope="row">Row header</th>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                <td class="fd-table__cell fd-table__cell--fixed-end fd-table__cell--fixed-end-last">Lorem ipsum dolor sit amet ipsum</td>
            </tr>
        </tbody>
        <tfoot class="fd-table__footer">
            <tr class="fd-table__row">
                <td class="fd-table__cell"></td>
                <td class="fd-table__cell"></td>
                <td class="fd-table__cell"></td>
                <td class="fd-table__cell">Lorem ipsum dolor</td>
                <td class="fd-table__cell">Lorem ipsum dolor</td>
                <td class="fd-table__cell"></td>
                <td class="fd-table__cell"></td>
                <td class="fd-table__cell"></td>
            </tr>
        </tfoot>
    </table>
</div>
```

### Navigation from table rows

Responsive table allows navigation from a line item. For that purpose you need to add a column with the icon \

```html
<div class="fd-toolbar fd-toolbar--title fd-toolbar-active">
    <h4 class="fd-title fd-title--h4 fd-toolbar__title">Responsive Table - row navigation</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--responsive fd-table--no-horizontal-borders">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Name</th>
            <th class="fd-table__cell" scope="col">Status</th>
            <th class="fd-table__cell" scope="col">Price</th>
            <th class="fd-table__cell" scope="col">Country</th>
            <th class="fd-table__cell">
                <span class="fd-table__sr-only">Row Actions</span>
            </th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable">
            <td class="fd-table__cell">Banana</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--positive">
                    Available
                </span>
            </td>
            <td class="fd-table__cell">5 EUR</td>
            <td class="fd-table__cell">India</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                <i class="fd-table__icon fd-table__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
            </td>
        </tr>
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable">
            <td class="fd-table__cell">Pineapple</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--negative">
                    Out of stock
                </span>
            </td>
            <td class="fd-table__cell">2 EUR</td>
            <td class="fd-table__cell">Mexico</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                <i class="fd-table__icon fd-table__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
            </td>
        </tr>
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable">
            <td class="fd-table__cell">Orange</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--informative">
                    Temporary unavailable
                </span>
            </td>
            <td class="fd-table__cell">6 EUR</td>
            <td class="fd-table__cell">Spain</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                <i class="fd-table__icon fd-table__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
            </td>
        </tr>
    </tbody>
</table>
<div class="fd-toolbar fd-toolbar--title fd-toolbar-active">
    <h4 class="fd-title fd-title--h4 fd-toolbar__title">Table - icon button for navigation</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table ">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Name</th>
            <th class="fd-table__cell" scope="col">Status</th>
            <th class="fd-table__cell" scope="col">Price</th>
            <th class="fd-table__cell" scope="col">Country</th>
            <th class="fd-table__cell"></th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell">Banana</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--positive">
                    Available
                </span>
            </td>
            <td class="fd-table__cell">5 EUR</td>
            <td class="fd-table__cell">India</td>
            <td class="fd-table__cell fd-table__cell--fit-content">
                <button aria-label="navigation" class="fd-button fd-button--transparent">
                    <i class="sap-icon--navigation-right-arrow"></i>
                </button>
            </td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">Pineapple</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--negative">
                    Out of stock
                </span>
            </td>
            <td class="fd-table__cell">2 EUR</td>
            <td class="fd-table__cell">Mexico</td>
            <td class="fd-table__cell fd-table__cell--fit-content">
                <button aria-label="navigation" class="fd-button fd-button--transparent">
                    <i class="sap-icon--navigation-right-arrow"></i>
                </button>
            </td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">Orange</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--informative">
                    Temporary unavailable
                </span>
            </td>
            <td class="fd-table__cell">6 EUR</td>
            <td class="fd-table__cell">Spain</td>
            <td class="fd-table__cell fd-table__cell--fit-content">
                <button aria-label="navigation" class="fd-button fd-button--transparent">
                    <i class="sap-icon--navigation-right-arrow"></i>
                </button>
            </td>
        </tr>
    </tbody>
</table>
```

### Navigation indicators

The table component can display navigation indicators. When multi-selection is used in a master-detail scenario, it is not clear which item was last opened, you can mark it as a “navigated” indicator, as indicated in the second row, to mark an item that is currently open. To display a navigated indicator, add the \

```html
<div class="fd-toolbar fd-toolbar--title fd-toolbar-active">
    <h4 class="fd-title fd-title--h4 fd-toolbar__title">Table with Navigation Indication State</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--no-horizontal-borders">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="kqqzPI44">
                <label class="fd-checkbox__label" for="kqqzPI44"><span class="fd-checkbox__checkmark" aria-hidden="true"></span></label>
            </th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">
                <span class="fd-table__sr-only">Row Actions</span>
            </th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable" aria-selected="true">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox" id="EWuzWh33">
                <label class="fd-checkbox__label" for="EWuzWh33"><span class="fd-checkbox__checkmark" aria-hidden="true"></span></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link"><span>user.name@email.com</span></a></td>
            <td class="fd-table__cell"><span class="fd-table__text">First Name</span></td>
            <td class="fd-table__cell"><span class="fd-table__text">Last Name</span></td>
            <td class="fd-table__cell"><span class="fd-table__text">01/26/17</span></td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                <i class="fd-table__icon fd-table__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
            </td>
        </tr>
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable" aria-selected="true">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox" id="EWuzWh334">
                <label class="fd-checkbox__label" for="EWuzWh334"><span class="fd-checkbox__checkmark" aria-hidden="true"></span></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link"><span>user.name@email.com</span></a></td>
            <td class="fd-table__cell"><span class="fd-table__text">First Name</span></td>
            <td class="fd-table__cell"><span class="fd-table__text">Last Name</span></td>
            <td class="fd-table__cell"><span class="fd-table__text">01/26/17</span></td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--navigated fd-table__cell--no-padding">
                <i class="fd-table__icon fd-table__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
            </td>
        </tr>
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="EWuzWh335">
                <label class="fd-checkbox__label" for="EWuzWh335"><span class="fd-checkbox__checkmark" aria-hidden="true"></span></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link"><span>user.name@email.com</span></a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                <i class="fd-table__icon fd-table__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
            </td>
        </tr>
    </tbody>
</table>
```

### ResponsiveTable

The desktop responsive table should contain \

```html
<div class="fd-toolbar fd-toolbar--title fd-toolbar-active">
    <h4 class="fd-title fd-title--h4 fd-toolbar__title">Responsive Table</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--responsive fd-table--no-horizontal-borders">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="kqqzPI">
                <label class="fd-checkbox__label" for="kqqzPI"><span class="fd-checkbox__checkmark" aria-hidden="true"></span></label>
            </th>
            <th class="fd-table__cell" scope="col">Name</th>
            <th class="fd-table__cell" scope="col">Status</th>
            <th class="fd-table__cell" scope="col">Price</th>
            <th class="fd-table__cell" scope="col">Country</th>
            <th class="fd-table__cell">
                <span class="fd-table__sr-only">Row Actions</span>
            </th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="EWuzWh">
                <label class="fd-checkbox__label" for="EWuzWh"><span class="fd-checkbox__checkmark" aria-hidden="true"></span></label>
            </td>
            <td class="fd-table__cell">Banana</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--positive">
                    Available
                </span>
            </td>
            <td class="fd-table__cell">5 EUR</td>
            <td class="fd-table__cell">India</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                <i class="fd-table__icon fd-table__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
            </td>
        </tr>
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="19j0Sc">
                <label class="fd-checkbox__label" for="19j0Sc"><span class="fd-checkbox__checkmark" aria-hidden="true"></span></label>
            </td>
            <td class="fd-table__cell">Pineapple</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--negative">
                    Out of stock
                </span>
            </td>
            <td class="fd-table__cell">2 EUR</td>
            <td class="fd-table__cell">Mexico</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                <i class="fd-table__icon fd-table__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
            </td>
        </tr>
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="a7SfGX">
                <label class="fd-checkbox__label" for="a7SfGX"><span class="fd-checkbox__checkmark" aria-hidden="true"></span></label>
            </td>
            <td class="fd-table__cell">Orange</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--informative">
                    Temporary unavailable
                </span>
            </td>
            <td class="fd-table__cell">6 EUR</td>
            <td class="fd-table__cell">Spain</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                <i class="fd-table__icon fd-table__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
            </td>
        </tr>
    </tbody>
</table>
```

### Responsive Table (pop-in mode)

The responsive table can be displayed in pop-in mode for mobile and tablet screens. To display responsive table in pop-in mode, add the \

```html
<div class="fd-toolbar fd-toolbar--title fd-toolbar-active">
    <h4 class="fd-title fd-title--h4 fd-toolbar__title">Responsive Table - Pop-in mode</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
    <table class="fd-table fd-table--responsive fd-table--no-horizontal-borders fd-table--no-vertical-borders fd-table--pop-in">
        <thead class="fd-table__header">
            <tr class="fd-table__row">
                <th class="fd-table__cell" scope="col">Name</th>
                <th class="fd-table__cell" scope="col">Price</th>
                <th class="fd-table__cell" scope="col"></th>
            </tr>
        </thead>
        <tbody class="fd-table__body">
            <tr class="fd-table__row fd-table__row--main fd-table__row--activable fd-table__row--hoverable">
                <td class="fd-table__cell">
                    <p class="fd-table__text fd-table__text--title">Banana</p>
                    <p class="fd-table__text">India</p>
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content">
                    5 EUR
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                    <i class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow" role="presentation"></i>
                </td>
            </tr>
            <tr class="fd-table__row fd-table__row--secondary">
                <td class="fd-table__cell" colspan="100%">
                    <p class="fd-table__text">
                        <label class="fd-form-label">Status:</label>
                        <span class="fd-object-status fd-object-status--positive">
                            Available
                        </span>
                    </p>
                    <p class="fd-table__text">
                        <label class="fd-form-label">Date Of Expire:</label>
                        12.01.12
                    </p>
                </td>
            </tr>
            <tr class="fd-table__row fd-table__row--main fd-table__row--activable fd-table__row--hoverable">
                <td class="fd-table__cell">
                    <p class="fd-table__text fd-table__text--title">Very long name for orange, which no one expected, forces text wrapping into another line.</p>
                    <p class="fd-table__text">Spain</p>
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content">
                    6 EUR
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                    <i class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow" role="presentation"></i>
                </td>
            </tr>
            <tr class="fd-table__row fd-table__row--secondary">
                <td class="fd-table__cell" colspan="100%">
                    <p class="fd-table__text">
                        <label class="fd-form-label">Status:</label>
                        <span class="fd-object-status fd-object-status--negative">
                            Out of stock
                        </span>
                    </p>
                    <p class="fd-table__text">
                        <label class="fd-form-label">Date Of Expire:</label>
                        12.01.12
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<div class="fd-toolbar fd-toolbar--title fd-toolbar-active">
    <h4 class="fd-title fd-title--h4 fd-toolbar__title">Responsive Table - Pop-in Mode with Checkboxes and Navigation Indicator</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
    <table class="fd-table fd-table--responsive fd-table--no-horizontal-borders fd-table--no-vertical-borders fd-table--pop-in">
        <thead class="fd-table__header">
            <tr class="fd-table__row">
                <th class="fd-table__cell fd-table__cell--checkbox" scope="col">
                    <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-table__checkbox" id="Ai4ez611b">
                    <label class="fd-checkbox__label fd-table__checkbox-label" for="Ai4ez611b">
                        <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    </label>
                </th>
                <th class="fd-table__cell" scope="col">Name</th>
                <th class="fd-table__cell" scope="col">Price</th>
                <th class="fd-table__cell" scope="col"></th>
            </tr>
        </thead>
        <tbody class="fd-table__body">
            <tr class="fd-table__row fd-table__row--main">
                <td class="fd-table__cell fd-table__cell--checkbox">
                    <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="EWuzWh">
                    <label class="fd-checkbox__label" for="EWuzWh"><span class="fd-checkbox__checkmark" aria-hidden="true"></span></label>
                </td>
                <td class="fd-table__cell">
                    <p class="fd-table__text fd-table__text--title">Banana</p>
                    <p class="fd-table__text">India</p>
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content">
                    5 EUR
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                    <i class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow" role="presentation"></i>
                </td>
            </tr>
            <tr class="fd-table__row fd-table__row--secondary">
                <td class="fd-table__cell fd-table__cell--checkbox"></td>
                <td class="fd-table__cell" colspan="100%">
                    <p class="fd-table__text">
                        <label class="fd-form-label">Status:</label>
                        <span class="fd-object-status fd-object-status--positive">
                            Available
                        </span>
                    </p>
                    <p class="fd-table__text">
                        <label class="fd-form-label">Date Of Expire:</label>
                        12.01.12
                    </p>
                </td>
            </tr>
            <tr class="fd-table__row fd-table__row--main">
                <td class="fd-table__cell fd-table__cell--checkbox">
                    <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Yeas6w">
                    <label class="fd-checkbox__label" for="Yeas6w"><span class="fd-checkbox__checkmark" aria-hidden="true"></span></label>
                </td>
                <td class="fd-table__cell">
                    <p class="fd-table__text fd-table__text--title">Very long name for orange, which no one expected, forces text wrapping into another line.</p>
                    <p class="fd-table__text">Spain</p>
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content">
                    6 EUR
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                    <i class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow" role="presentation"></i>
                </td>
            </tr>
            <tr class="fd-table__row fd-table__row--secondary">
                <td class="fd-table__cell fd-table__cell--checkbox"></td>
                <td class="fd-table__cell" colspan="100%">
                    <p class="fd-table__text">
                        <label class="fd-form-label">Status:</label>
                        <span class="fd-object-status fd-object-status--negative">
                            Out of stock
                        </span>
                    </p>
                    <p class="fd-table__text">
                        <label class="fd-form-label">Date Of Expire:</label>
                        12.01.12
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
</div>
```

### GridTable

Grid tables can contain various input elements inside of cells, such as checkboxes, input fields, links and drop-down menus.

####Accessibility
Information about the table such as a title, summary, and/or keyboard navigation instructions should be provided in captions for screen readers. To caption table information, use the \

```html
<table class="fd-table" aria-describedby="FU4EwF6st">
    <caption class="fd-table__caption" id="FU4EwF6st" aria-live="polite">
        Inventory Status. Use arrow keys to navigate between cells.
    </caption>
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th id="fd-4C0WYEyPqUS" class="fd-table__cell fd-table__cell--checkbox" tabindex="-1">
                <div class="fd-form-item">
                    <input aria-checked="false" aria-label="Select all rows" class="fd-checkbox" id="fd-gEAc87vXrAR"
                    type="checkbox" value="" tabindex="-1" /><label for="fd-gEAc87vXrAR"
                    class="fd-form-label fd-checkbox__label"><span class="fd-checkbox__checkmark" aria-hidden="true"></span></label>
                </div>
            </th>
            <th id="fd-KWRjZC5EqkW" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Product Name
            </th>
            <th id="fd-NPWFoAxBzUa" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Product ID
            </th>
            <th id="fd-jtbiFXSC7Uy" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Quantity
            </th>
            <th id="fd-mQuRgWM6D0u" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Status
            </th>
            <th id="fd-hEzpEm5PMU2" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Supplier
            </th>
            <th id="fd-NujEpyB6EkG" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Image
            </th>
            <th id="fd-NMFoRAVbFky" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Heavy Weight
            </th>
            <th id="fd-OspcU6H7F0q" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Categories
            </th>
            <th id="fd-nEac1Ko5K0e" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Delivery Date
            </th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row" aria-selected="false">
            <td class="fd-table__cell fd-table__cell--checkbox" tabindex="-1">
                <div class="fd-form-item">
                    <input aria-checked="false" aria-label="Select row" class="fd-checkbox" id="fd-7EMZOUrG2eK"
                    name="Notebook Basic 15" type="checkbox" value="" tabindex="-1" />
                    <label for="fd-7EMZOUrG2eK" class="fd-form-label fd-checkbox__label"><span class="fd-checkbox__checkmark" aria-hidden="true"></span></label>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span>Notebook Basic 15</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <input aria-labelledby="fd-NPWFoAxBzUa" class="fd-input" name="Notebook Basic 15" type="text"
                value="HT-1000" tabindex="-1" />
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span>10</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span class="fd-object-status fd-object-status--positive">Available</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-form-item">
                    <div class="fd-popover fd-popover--full-width">
                        <div class="fd-popover__control">
                            <div class="fd-select" tabindex="-1" aria-labelledby="fd-hEzpEm5PMU2" aria-expanded="false"
                                aria-haspopup="listbox">
                                <div class="fd-select__control">
                                    <span class="fd-select__text-content">Very Best Screens</span>
                                    <span class="fd-button fd-button--transparent fd-select__button"><i aria-hidden="true"
                                        class="sap-icon--slim-arrow-down"
                                        role="img"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                        <a href="https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg"
                            class="fd-link" tabindex="-1">Show image</a>
                        </td>
                        <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                            <div class="fd-form-item">
                                <input aria-checked="false" aria-label="Heavy Weight" class="fd-checkbox" id="fd-tF03y4hjeLT"
                                type="checkbox" value="" tabindex="-1" /><label for="fd-tF03y4hjeLT"
                                class="fd-form-label fd-checkbox__label"><span class="fd-checkbox__checkmark" aria-hidden="true"></span></label>
                            </div>
                        </td>
                        <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                            <input aria-labelledby="fd-OspcU6H7F0q" class="fd-input" type="text" value="" tabindex="-1" />
                        </td>
                        <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                            <div class="fd-popover fd-popover--full-width">
                                <div class="fd-popover__control">
                                    <div aria-expanded="false" aria-haspopup="true" class="fd-input-group--control fd-input-group">
                                        <input aria-labelledby="fd-nEac1Ko5K0e" class="fd-input fd-input-group__input"
                                        placeholder="MM/DD/YYYY" type="text" value="" tabindex="-1" />
                                        <span class="fd-input-group__addon fd-input-group__addon--button">
                                            <button aria-label="Choose date"
                                                class="fd-button fd-button--transparent fd-input-group__button" type="button"
                                                tabindex="-1">
                                                <i aria-hidden="true" class="sap-icon--appointment-2" role="img"></i>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="fd-table__row" aria-selected="false">
                        <td class="fd-table__cell fd-table__cell--checkbox" tabindex="-1">
                            <div class="fd-form-item">
                                <input aria-checked="false" aria-label="Select row" class="fd-checkbox" id="fd-LbUmEre6JKj"
                                name="Notebook Basic 17" type="checkbox" value="" tabindex="-1" />
                                <label for="fd-LbUmEre6JKj" class="fd-form-label fd-checkbox__label"><span class="fd-checkbox__checkmark" aria-hidden="true"></span></label>
                            </div>
                        </td>
                        <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                            <span>Notebook Basic 17</span>
                        </td>
                        <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                            <input aria-labelledby="fd-NPWFoAxBzUa" class="fd-input" name="Notebook Basic 17" type="text"
                            value="HT-1001" tabindex="-1" />
                        </td>
                        <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                            <span>0</span>
                        </td>
                        <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                            <span class="fd-object-status fd-object-status--negative">Out of stock</span>
                        </td>
                        <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                            <div class="fd-form-item">
                                <div class="fd-popover fd-popover--full-width">
                                    <div class="fd-popover__control">
                                        <div class="fd-select" tabindex="-1" aria-labelledby="fd-hEzpEm5PMU2" aria-expanded="false"
                                            aria-haspopup="listbox">
                                            <div class="fd-select__control">
                                                <span class="fd-select__text-content">Fasttech</span>
                                                <span class="fd-button fd-button--transparent fd-select__button"><i aria-hidden="true"
                                                    class="sap-icon--slim-arrow-down"
                                                    role="img"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                                    <a href="https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1001.jpg"
                                        class="fd-link" tabindex="-1">Show image</a>
                                    </td>
                                    <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                                        <div class="fd-form-item">
                                            <input aria-checked="false" aria-label="Heavy Weight" class="fd-checkbox" id="fd-9WXDOs3SBLH"
                                            type="checkbox" value="" tabindex="-1" /><label for="fd-9WXDOs3SBLH"
                                            class="fd-form-label fd-checkbox__label"><span class="fd-checkbox__checkmark" aria-hidden="true"></span></label>
                                        </div>
                                    </td>
                                    <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                                        <input aria-labelledby="fd-OspcU6H7F0q" class="fd-input" type="text" value="" tabindex="-1" />
                                    </td>
                                    <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                                        <div class="fd-popover fd-popover--full-width">
                                            <div class="fd-popover__control">
                                                <div aria-expanded="false" aria-haspopup="true" class="fd-input-group--control fd-input-group">
                                                    <input aria-labelledby="fd-nEac1Ko5K0e" class="fd-input fd-input-group__input"
                                                    placeholder="MM/DD/YYYY" type="text" value="" tabindex="-1" />
                                                    <span class="fd-input-group__addon fd-input-group__addon--button">
                                                        <button aria-label="Choose date"
                                                            class="fd-button fd-button--transparent fd-input-group__button" type="button"
                                                            tabindex="-1">
                                                            <i aria-hidden="true" class="sap-icon--appointment-2" role="img"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="fd-table__row" aria-selected="false">
                                    <td class="fd-table__cell fd-table__cell--checkbox" tabindex="-1">
                                        <div class="fd-form-item">
                                            <input aria-checked="false" aria-label="Select row" class="fd-checkbox" id="fd-Cmvc_Hc7N3_"
                                            name="Notebook Basic 18" type="checkbox" value="" tabindex="-1" />
                                            <label for="fd-Cmvc_Hc7N3_" class="fd-form-label fd-checkbox__label"><span class="fd-checkbox__checkmark" aria-hidden="true"></span></label>
                                        </div>
                                    </td>
                                    <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                                        <span>Notebook Basic 18</span>
                                    </td>
                                    <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                                        <input aria-labelledby="fd-NPWFoAxBzUa" class="fd-input" name="Notebook Basic 18" type="text"
                                        value="HT-1002" tabindex="-1" />
                                    </td>
                                    <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                                        <span>13</span>
                                    </td>
                                    <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                                        <span class="fd-object-status fd-object-status--positive">Available</span>
                                    </td>
                                    <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                                        <div class="fd-form-item">
                                            <div class="fd-popover fd-popover--full-width">
                                                <div class="fd-popover__control">
                                                    <div class="fd-select" tabindex="-1" aria-labelledby="fd-hEzpEm5PMU2" aria-expanded="false"
                                                        aria-haspopup="listbox">
                                                        <div class="fd-select__control">
                                                            <span class="fd-select__text-content">Printers for All</span>
                                                            <span class="fd-button fd-button--transparent fd-select__button"><i aria-hidden="true"
                                                                class="sap-icon--slim-arrow-down"
                                                                role="img"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                                                <a href="https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1002.jpg"
                                                    class="fd-link" tabindex="-1">Show image</a>
                                                </td>
                                                <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                                                    <div class="fd-form-item">
                                                        <input aria-checked="false" aria-label="Heavy Weight" class="fd-checkbox" id="fd-Rzaro06MMoH"
                                                        type="checkbox" value="" tabindex="-1" /><label for="fd-Rzaro06MMoH"
                                                        class="fd-form-label fd-checkbox__label"><span class="fd-checkbox__checkmark" aria-hidden="true"></span></label>
                                                    </div>
                                                </td>
                                                <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                                                    <input aria-labelledby="fd-OspcU6H7F0q" class="fd-input" type="text" value="" tabindex="-1" />
                                                </td>
                                                <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                                                    <div class="fd-popover fd-popover--full-width">
                                                        <div class="fd-popover__control">
                                                            <div aria-expanded="false" aria-haspopup="true" class="fd-input-group--control fd-input-group">
                                                                <input aria-labelledby="fd-nEac1Ko5K0e" class="fd-input fd-input-group__input"
                                                                placeholder="MM/DD/YYYY" type="text" value="" tabindex="-1" />
                                                                <span class="fd-input-group__addon fd-input-group__addon--button">
                                                                    <button aria-label="Choose date"
                                                                        class="fd-button fd-button--transparent fd-input-group__button"
                                                                        type="button" tabindex="-1">
                                                                        <i aria-hidden="true" class="sap-icon--appointment-2" role="img"></i>
                                                                    </button>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
```

### Table without data

Table can indicate that there is no data to display.

```html
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">
                Header Column
            </th>
            <th class="fd-table__cell" scope="col">
                Header Column
            </th>
            <th class="fd-table__cell" scope="col">
                Header Column
            </th>
            <th class="fd-table__cell" scope="col">
                Header Column
            </th>
            <th class="fd-table__cell" scope="col">
                Header Column
            </th>
            <th class="fd-table__cell" scope="col">
                Header Column
            </th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td colspan="100%" class="fd-table__cell fd-table__cell--no-data">No Items available.</td>
        </tr>
    </tbody>
</table>
```

### Table with group rows

Table can have group rows, to get this do the following:

- Add \

```html
<table class="fd-table fd-table--group">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">
                Type
            </th>
            <th class="fd-table__cell" scope="col">
                First Name
            </th>
            <th class="fd-table__cell" scope="col">
                Last Name
            </th>
            <th class="fd-table__cell" scope="col">
                Date
            </th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row fd-table__row--hoverable fd-table__row--activable">
            <td class="fd-table__cell fd-table__cell--group fd-table__cell--expand fd-table__cell--focusable" colspan="4" tabindex="0">
                <span class="fd-table__expand fd-table__expand"></span><span class="fd-table__text--no-wrap">Group row (collapsed), level 1</span>
            </td>
        </tr>
        <tr class="fd-table__row fd-table__row--hoverable fd-table__row--activable">
            <td class="fd-table__cell fd-table__cell--group fd-table__cell--expand fd-table__cell--focusable" colspan="4" tabindex="0">
                <span class="fd-table__expand fd-table__expand--open"></span><span class="fd-table__text--no-wrap">Group row (expanded), level 1</span>
            </td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">Regular row, level 2</td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row fd-table__row--hoverable fd-table__row--activable">
            <td class="fd-table__cell fd-table__cell--group fd-table__cell--expand fd-table__cell--focusable" colspan="4" tabindex="0">
                <span class="fd-table__expand fd-table__expand--open"></span><span class="fd-table__text--no-wrap">Group row (expanded), level 2</span>
            </td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">Regular row, level 3</td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
```

### Tree Table

Table can show tree-like rows, to get this do the following:

- Add \

```html
<table class="fd-table fd-table--tree">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">
                Type
            </th>
            <th class="fd-table__cell" scope="col">
                First Name
            </th>
            <th class="fd-table__cell" scope="col">
                Last Name
            </th>
            <th class="fd-table__cell" scope="col">
                Date
            </th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell">
                Regular row, level 1
            </td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row fd-table__row--hoverable fd-table__row--activable">
            <td class="fd-table__cell fd-table__cell fd-table__cell--expand fd-table__cell--focusable" tabindex="0">
                <span class="fd-table__expand fd-table__expand"></span><span class="fd-table__text--no-wrap">Tree row, level 1, collapsed</span>
            </td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row fd-table__row--hoverable fd-table__row--activable">
            <td class="fd-table__cell fd-table__cell fd-table__cell--expand fd-table__cell--focusable" tabindex="0">
                <span class="fd-table__expand fd-table__expand--open"></span><span class="fd-table__text--no-wrap">Tree row, level 1, expanded</span>
            </td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell">
                Regular row, level 2
            </td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row fd-table__row--hoverable fd-table__row--activable">
            <td class="fd-table__cell fd-table__cell fd-table__cell--expand fd-table__cell--focusable" tabindex="0">
                <span class="fd-table__expand fd-table__expand"></span><span class="fd-table__text--no-wrap">Tree row, level 2, collapsed</span>
            </td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row fd-table__row--hoverable fd-table__row--activable">
            <td class="fd-table__cell fd-table__cell fd-table__cell--expand fd-table__cell--focusable" tabindex="0">
                <span class="fd-table__expand fd-table__expand--open"></span><span class="fd-table__text--no-wrap">Tree row, level 2, expanded</span>
            </td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell">
                Regular row, level 3
            </td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row fd-table__row--hoverable fd-table__row--activable">
            <td class="fd-table__cell fd-table__cell fd-table__cell--expand fd-table__cell--focusable" tabindex="0">
                <span class="fd-table__expand fd-table__expand fd-table__expand--open"></span><span class="fd-table__text--no-wrap">Tree row, level 3, collapsed</span>
            </td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell">
                Regular row, level 4
            </td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row fd-table__row--hoverable fd-table__row--activable">
            <td class="fd-table__cell fd-table__cell fd-table__cell--expand fd-table__cell--focusable" tabindex="0">
                <span class="fd-table__expand fd-table__expand fd-table__expand--open"></span><span class="fd-table__text--no-wrap">Tree row, level 4, collapsed</span>
            </td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell">
                Regular row, level 5
            </td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row fd-table__row--hoverable fd-table__row--activable">
            <td class="fd-table__cell fd-table__cell fd-table__cell--expand fd-table__cell--focusable" tabindex="0">
                <span class="fd-table__expand fd-table__expand fd-table__expand--open"></span><span class="fd-table__text--no-wrap">Tree row, level 5, collapsed</span>
            </td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell">
                Regular row, level 6
            </td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row fd-table__row--hoverable fd-table__row--activable">
            <td class="fd-table__cell fd-table__cell fd-table__cell--expand fd-table__cell--focusable" tabindex="0">
                <span class="fd-table__expand fd-table__expand"></span><span class="fd-table__text--no-wrap">Tree row, level 6, collapsed</span>
            </td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/table/table.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
