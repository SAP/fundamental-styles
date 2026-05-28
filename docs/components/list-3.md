---
component: fd-list
title: Components/List/Standard
category: Components
selector: fd-list
cssFile: list.css
sourcePath: packages/styles/stories/Components/List/list/standard/standard-list.stories.js
tags: []
dependencies: []
relatedComponents: []
stability: stable
generatedAt: 2026-05-28T16:47:21.266Z
---

# Components/List/Standard

In SAP, we distinguish between tables and lists. Both usually contain homogeneous data, but lists generally have rather basic data, while the data in tables tend to be more complex. Lists are mostly used in the master list for a master-detail scenario using the flexible column layout, as well as in **Popovers** or **Dialogs**.

##Usage
**Use the standard list if:**

- You want to display a homogeneous set of basic data.
- You need to sort, group, or filter simple datasets.
- You need to display a single-level hierarchy rather than using a complex tree table to support this simple use case.


**Do not use the standard list if:**

- You want to manage complex datasets that need to be extensively sorted, grouped, filtered, or edited. In this case, use a **Table**.
- You work with complex hierarchies. In this case, use a **Tree**.

## Usage Guidelines

**Use the standard list if:**

- You want to display a homogeneous set of basic data.
- You need to sort, group, or filter simple datasets.
- You need to display a single-level hierarchy rather than using a complex tree table to support this simple use case.

## When Not To Use

- You want to manage complex datasets that need to be extensively sorted, grouped, filtered, or edited. In this case, use a **Table**.
- You work with complex hierarchies. In this case, use a **Tree**.

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/list.css" rel="stylesheet">

```

## Basic Usage

```html
<ul class="fd-list" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 1</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 2</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 3</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 4</span>
    </li>
</ul>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-list--navigation` | Standard list items can contain navigation links |
| `fd-list--navigation-indication` | Style variant |
| `fd-list--no-border` | Style variant |
| `fd-list--search-results` | To be used in a popover containing sophisticated search results. |
| `fd-list--selection` | Standard list items can display checkboxes that users can select from |

## States

| Class | Description |
|-------|-------------|
| `is-active` | Active state |
| `is-focus` | Focus state |
| `is-hover` | Hover state |
| `is-navigated` | Navigated state |
| `is-selected` | Selected state |

## BEM Elements

This component uses the following BEM elements:

- `fd-list__button`
- `fd-list__content`
- `fd-list__footer`
- `fd-list__form-item`
- `fd-list__group-header`
- `fd-list__icon`
- `fd-list__infinite-scroll`
- `fd-list__info-label`
- `fd-list__item`
- `fd-list__item--action`
- `fd-list__item--byline`
- `fd-list__item--growing`
- `fd-list__item--inactive`
- `fd-list__item--interractive`
- `fd-list__item--link`
- `fd-list__item--suggestion`
- `fd-list__item--unread`
- `fd-list__item-counter`
- `fd-list__link`
- `fd-list__link--navigation-indicator`
- `fd-list__secondary`
- `fd-list__secondary--critical`
- `fd-list__secondary--informative`
- `fd-list__secondary--negative`
- `fd-list__secondary--positive`
- `fd-list__subline`
- `fd-list__thumbnail`
- `fd-list__title`
- `fd-list__title--scope`
- `fd-list__title-text`

## Examples

### Default

The default standard list displays list items in the standard size, which is ideal for mobile. To display the standard list in compact mode (for desktop), add the \

```html
<ul class="fd-list" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 1</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 2</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 3</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 4</span>
    </li>
</ul>
```

### Unread

The \

```html
<h4>Unread Options</h4>
<ul class="fd-list" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--unread">
        <span class="fd-list__title">List item 1 Unread</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--unread">
        <span class="fd-list__title">List item 2 Unread</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 3 Read</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 4 Read</span>
    </li>
</ul>
```

### Interactive

The \

```html
<h4>Interactive Items</h4>
<ul class="fd-list" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
        <span class="fd-list__title">Regular State</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive is-hover">
        <span class="fd-list__title">Hover State</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive is-active">
        <span class="fd-list__title">Down/Active State</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive is-selected">
        <span class="fd-list__title">Selected State</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive is-hover is-selected">
        <span class="fd-list__title">Hover on Selected State</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive is-focus">
        <span class="fd-list__title">Focus State</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive is-focus is-selected">
        <span class="fd-list__title">Focus Selected State</span>
    </li>
</ul>
```

### Navigation

Standard list items can contain navigation links. To add navigation, add the \

```html
<ul class="fd-list fd-list--navigation" role="list">
    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
        <a tabindex="0" class="fd-list__link">
            <span class="fd-list__title">List item 1</span>
        </a>
    </li>
    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
        <a tabindex="0" class="fd-list__link">
            <i role="presentation" class="fd-list__icon sap-icon--history"></i>
            <span class="fd-list__title">List item 2</span>
        </a>
    </li>
    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
        <a tabindex="0" class="fd-list__link">
            <span class="fd-list__title">List item 3</span>
            <i role="presentation" class="fd-list__icon sap-icon--map"></i>
        </a>
    </li>
</ul>
```

### Buttons

```html
<ul class="fd-list" role="list">
    <li tabindex="-1" role="listitem" class="fd-list__item">
        <span class="fd-list__title">List item 1</span>
        <button class="fd-button fd-button--transparent fd-list__button">
            <i class="sap-icon--edit"></i>
        </button>
    </li>
    <li tabindex="-1" role="listitem" class="fd-list__item">
        <span class="fd-list__title">List item 1</span>
        <button class="fd-button fd-button--transparent fd-list__button">
            <i class="sap-icon--decline"></i>
        </button>
    </li>
    <li tabindex="-1" role="listitem" class="fd-list__item">
        <span class="fd-list__title">List item 2</span>
        <button class="fd-button fd-button--transparent fd-list__button">
            <i class="sap-icon--edit"></i>
        </button>
        <button class="fd-button fd-button--transparent fd-list__button">
            <i class="sap-icon--decline"></i>
        </button>
    </li>
</ul>
```

### Navigation indicators

If only a subset of the list items is navigable you should indicate them with an arrow icon. To display navigation indicators, add the \

```html
<ul class="fd-list fd-list--navigation fd-list--navigation-indication" role="list">
    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
        <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
            <span class="fd-list__title">List item 1</span>
        </a>
    </li>
    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
        <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator is-selected" href="#">
            <i role="presentation" class="fd-list__icon sap-icon--history"></i>
            <span class="fd-list__title">List item 2</span>
        </a>
    </li>
    <li tabindex="0" role="listitem" class="fd-list__item">
        <i role="presentation" class="fd-list__icon sap-icon--history"></i>
        <span class="fd-list__title">List item 3</span>
    </li>
    <li tabindex="0" role="listitem" class="fd-list__item">
        <span class="fd-list__title">List item 4</span>
        <i role="presentation" class="fd-list__icon sap-icon--map"></i>
    </li>
    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
        <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator is-navigated" href="#">
            <span class="fd-list__title">List item 5</span>
            <i role="presentation" class="fd-list__icon sap-icon--map"></i>
        </a>
    </li>
    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link is-selected">
        <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator is-navigated" href="#">
            <span class="fd-list__title">List item 5</span>
            <i role="presentation" class="fd-list__icon sap-icon--map"></i>
        </a>
    </li>
</ul>
```

### Action

Standard list items can display actions that users can choose from. To display actions, add the \

```html
<h4>Standard</h4>
<ul class="fd-list" role="list">
    <li role="listitem" class="fd-list__item fd-list__item--action">
        <button class="fd-list__title">Forward</button>
    </li>
    <li role="listitem" class="fd-list__item fd-list__item--action">
        <button class="fd-list__title">Save</button>
    </li>
    <li role="listitem" class="fd-list__item fd-list__item--action">
        <button class="fd-list__title">Action</button>
    </li>
</ul>

<h4>Action List item with other list items </h4>
<ul class="fd-list" role="list">
    <li role="listitem" class="fd-list__item">
        <span class="fd-list__title">List Item 1</span>
    </li>
    <li role="listitem" class="fd-list__item">
        <span class="fd-list__title">List Item 2</span>
    </li>
    <li role="listitem" class="fd-list__item">
        <span class="fd-list__title">List Item 3</span>
    </li>
    <li role="listitem" class="fd-list__item fd-list__item--action">
        <button class="fd-list__title">Action</button>
    </li>
</ul>

<h4>Growing List Item with Busy Indicator </h4>
<ul class="fd-list" role="list">
    <li role="listitem" class="fd-list__item">
        <span class="fd-list__title">List Item 1</span>
    </li>
    <li role="listitem" class="fd-list__item">
        <span class="fd-list__title">List Item 2</span>
    </li>
    <li role="listitem" class="fd-list__item">
        <span class="fd-list__title">List Item 3</span>
    </li>
    <li role="listitem" class="fd-list__item fd-list__item--action fd-list__item--growing">
        <button class="fd-list__title">
            <span class="fd-busy-indicator--m" aria-hidden="false" aria-label="Loading">
                <span class="fd-busy-indicator__circle"></span>
                <span class="fd-busy-indicator__circle"></span>
                <span class="fd-busy-indicator__circle"></span>
            </span>
            <span class="fd-list__title-text">More</span>
        </button>
    </li>
</ul>
```

### Secondary data

To display secondary data in standard list items, add a span element with \

```html
<ul class="fd-list" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 1</span>
        <span class="fd-list__secondary">Neutral Status</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 2</span>
        <span class="fd-list__secondary fd-list__secondary--positive">Positive Status</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 3</span>
        <span class="fd-list__secondary fd-list__secondary--critical">Critical Status</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 4</span>
        <span class="fd-list__secondary fd-list__secondary--negative">Negative Status</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">Wrapping Rules for Long Text lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        <span class="fd-list__secondary fd-list__secondary--informative">Informative Status Wrapping Rules for Long Text lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
    </li>
</ul>
```

### ItemCounter

The item counter is vertically aligned within the list item, to the right. The maximum number of digits is 5. In case of more digits, the formatting and the transformation is left to the applications. It's recommended to avoid combining item counter to other list variations and status texts.

```html
<ul class="fd-list" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 1</span>
        <span class="fd-list__item-counter">12345</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 2</span>
        <span class="fd-list__item-counter">12345</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <i role="presentation" class="fd-list__icon sap-icon--lightbulb"></i>
        <span class="fd-list__title">List item 3</span>
        <span class="fd-list__item-counter">12345</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <i role="presentation" class="fd-list__icon sap-icon--cart"></i>
        <span class="fd-list__title">List item 4</span>
        <span class="fd-list__item-counter">12345</span>
    </li>
</ul>
```

### Icon

To display an icon inside standard list items, add the \

```html
<ul class="fd-list" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item">
        <i role="presentation" class="fd-list__icon sap-icon--cart"></i>
        <span class="fd-list__title">List item 1</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <i role="presentation" class="fd-list__icon sap-icon--wrench"></i>
        <span class="fd-list__title">List item 2</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 3</span>
        <i role="presentation" class="fd-list__icon sap-icon--lightbulb"></i>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 4</span>
        <i role="presentation" class="fd-list__icon sap-icon--history"></i>
    </li>
</ul>
```

### Group

Standard list items can be displayed with headers, separating the items into groups. To add group headers, add the \

```html
<ul class="fd-list" role="list">
    <li role="listitem" class="fd-list__group-header">
        <span class="fd-list__title">Group header 1</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 1</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 2</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 3</span>
    </li>
    <li role="listitem" class="fd-list__group-header">
        <span class="fd-list__title">Group header 2</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 4</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 5</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 6</span>
    </li>
</ul>
```

### Footer

The standard list can display a footer by adding a span element with an \

```html
<ul class="fd-list" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 1</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 2</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 3</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 4</span>
    </li>
</ul>
<span class="fd-list__footer">
    Footer text
</span>
```

### Borderless

To display a borderless standard list, add the \

```html
<ul class="fd-list fd-list--no-border" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 1</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 2</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 3</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 4</span>
    </li>
</ul>
```

### Selection

Standard list items can display checkboxes that users can select from. To display standard list items with selection, add the \

```html
<ul class="fd-list fd-list--selection" role="listbox" aria-labelledby="XezW11">
    <li role="option" tabindex="0" class="fd-list__item">
        <div class="fd-form-item fd-list__form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez1" aria-labelledby="Az0bg1">
            <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez1">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
            </label>
        </div>
        <span class="fd-list__title" id="Az0bg1">List item 1</span>
    </li>
    <li role="option" tabindex="0" class="fd-list__item is-selected" aria-selected="true">
        <div class="fd-form-item fd-list__form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez2" checked aria-labelledby="Az0bg2">
            <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez2">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
            </label>
        </div>
        <span class="fd-list__title" id="Az0bg2">List item 2</span>
    </li>
    <li role="option" tabindex="0" class="fd-list__item">
        <div class="fd-form-item fd-list__form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez3" aria-labelledby="Az0bg3">
            <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez3">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
            </label>
        </div>
        <span class="fd-list__title" id="Az0bg3">List item 3</span>
    </li>
</ul>
```

### Inactive

Some list item can be made inactive, to make it non-clickable.

```html
<ul class="fd-list fd-list--navigation" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--link fd-list__item--inactive">
        <a tabindex="0" class="fd-list__link">
            <span class="fd-list__title">List item 1 - Inactive</span>
        </a>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--link">
        <a tabindex="0" class="fd-list__link">
            <span class="fd-list__title">List item 2</span>
        </a>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--link">
        <a tabindex="0" class="fd-list__link">
            <span class="fd-list__title">List item 3</span>
        </a>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--link">
        <a tabindex="0" class="fd-list__link">
            <span class="fd-list__title">List item 4</span>
        </a>
    </li>
</ul>
```

### Infinite scroll

If height for list is fixed and there are more list otem to show, then we should be able to scroll to next list items.

```html
<ul class="fd-list fd-list__infinite-scroll fddocs-list-height" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 1</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 2</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 3</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 4</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 5</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 6</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 7</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 8</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 9</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 10</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 11</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__title">List item 12</span>
    </li>
</ul>
```

### SearchResults

To be used in a popover containing sophisticated search results.

```html
<div class="fd-popover__body fd-popover__body--no-arrow" role="dialog" aria-modal="false" aria-label="Suggestions">
    <div class="fd-popover__body-header">
        <div class="fd-bar fd-bar--header-with-subheader fd-bar--initial-suggestion-title">
            <div class="fd-bar__left">
                <span class="fd-title fd-title--h6 fd-title--two-line-clamp">Try this! Try this! Try this! Try this! Try this! Try this! Try this! Try this! Try this! Try this! Try this! Try this! Try this! Try this! Try this! Try this! Try this! </span>
            </div>
            <div class="fd-bar fd-bar--subheader fd-bar--initial-suggestion-subline">
                <div class="fd-bar__left">
                    <span class="fd-text fd-text--subline">Search for example "All my open Objects" Search for example "All my open Objects" Search for example "All my open Objects" Search for example "All my open Objects" Search for example "All my open Objects" Search for example "All my open Objects" Search for example "All my open Objects"</span>
                </div>
            </div>
        </div>
        <div role="listbox" aria-label="Nine results are available in two groups.">
            <ul class="fd-list fd-list--navigation fd-list--search-results" role="group" aria-label="Recently Entered Elements / Top Rated">
                <li role="option" id="search-result-option-1" tabindex="0" aria-selected="true" aria-label="Viewed Element - Selected" class="fd-list__item is-selected fd-list__item--interractive fd-list__item--suggestion">
                    <i role="presentation" class="fd-list__icon sap-icon--history"></i>
                    <span class="fd-list__title">Viewed Element</span>
                </li>
                <li role="option" id="search-result-option-2" tabindex="0" class="fd-list__item fd-list__item--interractive fd-list__item--suggestion">
                    <i role="presentation" class="fd-list__icon sap-icon--history"></i>
                    <span class="fd-list__title">Viewed Element - To Be Deleted</span>
                    <button class="fd-button fd-button--transparent fd-list__button" aria-label="Refresh" title="Refresh">
                        <i class="sap-icon--refresh"></i>
                    </button>
                    <button class="fd-button fd-button--transparent fd-list__button" aria-label="Delete" title="Remove Suggestion">
                        <i class="sap-icon--decline"></i>
                    </button>
                </li>
                <li role="option" id="search-result-option-3" aria-label="Prefix + Viewed Element" tabindex="0" class="fd-list__item fd-list__item--interractive fd-list__item--suggestion">
                    <span class="fd-list__thumbnail">
                        <i role="presentation" class="fd-list__icon sap-icon--history"></i>
                    </span>
                    <span class="fd-list__info-label fd-info-label fd-info-label--accent-color-10">
                        <span class="fd-info-label__sr-only">Prefix Info Label</span>
                        <span class="fd-info-label__text">Prefix: </span>
                    </span>
                    <span class="fd-list__title">Viewed Element</span>
                </li>
                <li role="option" id="search-result-option-4" tabindex="0" class="fd-list__item fd-list__item--interractive fd-list__item--suggestion">
                    <i role="presentation" class="fd-list__icon sap-icon--search"></i>
                    <span class="fd-list__title">Search Term</span>
                </li>
                <li role="option" id="search-result-option-5" tabindex="0" class="fd-list__item fd-list__item--interractive fd-list__item--suggestion">
                    <i role="presentation" class="fd-list__icon sap-icon--history"></i>
                    <span class="fd-list__title">Viewed Element</span>
                </li>
            </ul>
            <ul class="fd-list fd-list--navigation fd-list--search-results" role="group">
                <li role="heading" aria-roledescription="Group Header" tabindex="0" class="fd-list__group-header" aria-owns="search-result-option-6 search-result-option-7 search-result-option-8 search-result-option-9">
                    <span class="fd-list__title">Group header</span>
                </li>
                <li role="option" id="search-result-option-6" tabindex="0" class="fd-list__item fd-list__item--interractive fd-list__item--byline">
                    <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" role="img" aria-label="Avatar John Doe"></span>
                    <div class="fd-list__content">
                        <div class="fd-list__title">List Item List Item List Item List Item List Item List Item List Item List Item List Item List Item List Item List Item List Item List Item List Item List Item </div>
                        <div class="fd-list__subline">Byline Byline Byline Byline Byline Byline Byline Byline Byline Byline Byline Byline Byline Byline Byline Byline Byline Byline Byline Byline Byline Byline Byline </div>
                    </div>
                    <button class="fd-button fd-button--transparent fd-list__button" aria-label="Delete" title="Remove Suggestion">
                        <i class="sap-icon--decline"></i>
                    </button>
                </li>
                <li role="option" id="search-result-option-7" tabindex="0" class="fd-list__item fd-list__item--interractive fd-list__item--suggestion">
                    <i role="presentation" class="fd-list__icon sap-icon--history"></i>
                    <span class="fd-list__title">Viewed Element</span>
                </li>
                <li role="option" id="search-result-option-8" tabindex="0" class="fd-list__item fd-list__item--interractive fd-list__item--suggestion">
                    <i role="presentation" class="fd-list__icon sap-icon--history"></i>
                    <span class="fd-list__title">View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element View Element </span>
                </li>
                <li role="option" id="search-result-option-9" tabindex="0" class="fd-list__item fd-list__item--interractive fd-list__item--suggestion">
                    <span class="fd-list__title fd-list__title--scope">Search in [Scope]</span>
                    <span class="fd-list__item-counter" role="tooltip" aria-label="Total Results 12345">12345</span>
                </li>
            </ul>
        </div>
        <div class="fd-popover__body-footer">
            <div class="fd-bar fd-bar--footer">
                <div class="fd-bar__middle">
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--transparent fd-button--full-width">Show All Search Results</button>
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

This documentation was automatically generated from: `packages/styles/stories/Components/List/list/standard/standard-list.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
