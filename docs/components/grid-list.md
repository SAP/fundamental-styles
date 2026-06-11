---
component: fd-grid-list
title: Components/Grid List/Grid List
category: Components
selector: fd-grid-list
cssFile: grid-list.css
sourcePath: packages/styles/stories/Components/Grid List/list-grid/grid-list.stories.js
tags: []
dependencies: []
relatedComponents: []
stability: stable
generatedAt: 2026-06-08T17:49:02.089Z
---

# Components/Grid List/Grid List

As with the list and the responsive table, the grid list displays a set of items. In contrast to both controls, the grid list displays the items not in rows, but in a grid.
The grid list is usually used as an alternative view for a list or table. It is ideal for displaying images, charts, object cards, and other content, which profit from more height (but less width).

##Usage
**Use the grid list if:**

- Your content is “visual” and profits from the rectangular format of the items. This is true for e.g. images, charts, and object cards.
- The focus is on items, not on cells. The grid list shows complete items.
- You want to display a homogeneous set of basic data.
- You need to sort, group, or filter simple data sets.
- As an alternative view for tables or lists, if the content profits from the different format.

**Do not use the grid list if:**

- Your content is not appropriate for a card-like format. For example, do not use the grid list for displaying a wall of text. Use a table instead.
- The main use case is to select one item from a very small number of items, without viewing additional details. In this case, a select or combo box might be more appropriate.
- Data needs to be structured in a hierarchical manner. In this case, a tree might be more appropriate.
- You need an overview of a large amount of data. In this case, use a chart.
- You just need it for layout reasons. In this case, use a layout container such as the CSSGrid.
- You want to manage complex datasets that need to be extensively sorted, grouped, filtered, or edited. In this case, use a table.

## Usage Guidelines

**Use the grid list if:**

- Your content is “visual” and profits from the rectangular format of the items. This is true for e.g. images, charts, and object cards.
- The focus is on items, not on cells. The grid list shows complete items.
- You want to display a homogeneous set of basic data.
- You need to sort, group, or filter simple data sets.
- As an alternative view for tables or lists, if the content profits from the different format.

## When Not To Use

- Your content is not appropriate for a card-like format. For example, do not use the grid list for displaying a wall of text. Use a table instead.
- The main use case is to select one item from a very small number of items, without viewing additional details. In this case, a select or combo box might be more appropriate.
- Data needs to be structured in a hierarchical manner. In this case, a tree might be more appropriate.
- You need an overview of a large amount of data. In this case, use a chart.
- You just need it for layout reasons. In this case, use a layout container such as the CSSGrid.
- You want to manage complex datasets that need to be extensively sorted, grouped, filtered, or edited. In this case, use a table.

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/grid-list.css" rel="stylesheet">

```

## Basic Usage

```html
<div class="fd-grid-list fd-grid-list--mode-delete">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--12">
                <div class="fd-toolbar fd-toolbar--solid is-compact">
                    <span>Products (420)</span>

                    <span class="fd-toolbar__spacer"></span>

                    <button class="fd-button  fd-button--transparent" aria-label="Sort">
                        <i class="sap-icon--sort"></i>
                    </button>

                    <button class="fd-button fd-button--transparent" aria-label="Filter">
                        <i class="sap-icon--filter"></i>
                    </button>

                    <button class="fd-button fd-button--transparent" aria-label="Group">
                        <i class="sap-icon--group-2"></i>
                    </button>
                </div>
            </div>

            <div class="fd-row">
                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item fd-grid-list__item--link">
                        <div class="fd-toolbar is-compact fd-grid-list__item-toolbar">
                            <span class="fd-toolbar__spacer"></span>

                            <span class="fd-grid-list__item-counter" aria-label="Item has 10 children">10</span>

                            <button class="fd-button fd-button--transparent" aria-label="Delete">
                                <i class="sap-icon--decline"></i>
                            </button>

                            <span class="fd-grid-list__item-navigation-indicator" aria-label="Navigation">
                                <i class="sap-icon--navigation-right-arrow"></i>
                            </span>
                        </div>

                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">john_li@example.com</span></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item">
                        <div class="fd-toolbar is-compact fd-grid-list__item-toolbar">
                            <span class="fd-toolbar__spacer"></span>

                            <button class="fd-button fd-button--transparent" aria-label="Edit">
                                <i class="sap-icon--edit"></i>
                            </button>

                            <button class="fd-button fd-button--transparent" aria-label="Delete">
                                <i class="sap-icon--decline"></i>
                            </button>
                        </div>

                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">john_li@example.com</span></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item">
                        <div class="fd-toolbar is-compact fd-grid-list__item-toolbar">
                            <span class="fd-toolbar__spacer"></span>

                            <button class="fd-button fd-button--transparent" aria-label="Delete">
                                <i class="sap-icon--decline"></i>
                            </button>
                        </div>

                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">john_li@example.com</span></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item">
                        <div class="fd-toolbar is-compact fd-grid-list__item-toolbar">
                            <span class="fd-toolbar__spacer"></span>
                            <button class="fd-button fd-button--transparent" aria-label="Delete">
                                <i class="sap-icon--decline"></i>
                            </button>
                        </div>

                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">john_li@example.com</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-grid-list--mode-delete` | Style variant |

## States

| Class | Description |
|-------|-------------|
| `is-compact` | Compact state |

## BEM Elements

This component uses the following BEM elements:

- `fd-grid-list__filter`
- `fd-grid-list__footer`
- `fd-grid-list__group-header`
- `fd-grid-list__group-header--no-margin`
- `fd-grid-list__highlight`
- `fd-grid-list__highlight--critical`
- `fd-grid-list__highlight--negative`
- `fd-grid-list__highlight--neutral`
- `fd-grid-list__highlight--positive`
- `fd-grid-list__item`
- `fd-grid-list__item--draft`
- `fd-grid-list__item--height-auto`
- `fd-grid-list__item--link`
- `fd-grid-list__item--locked`
- `fd-grid-list__item--unread`
- `fd-grid-list__item-body`
- `fd-grid-list__item-body-actions`
- `fd-grid-list__item-content`
- `fd-grid-list__item-counter`
- `fd-grid-list__item-header`
- `fd-grid-list__item-image`
- `fd-grid-list__item-navigation-indicator`
- `fd-grid-list__item-subtitle`
- `fd-grid-list__item-title`
- `fd-grid-list__item-toolbar`
- `fd-grid-list__more`
- `fd-grid-list__more-description`
- `fd-grid-list__more-title`

## Examples

### Delete mode

This places a Delete button on the right side of an item toolbar.
To turn on the Delete mode, add the \

```html
<div class="fd-grid-list fd-grid-list--mode-delete">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--12">
                <div class="fd-toolbar fd-toolbar--solid is-compact">
                    <span>Products (420)</span>

                    <span class="fd-toolbar__spacer"></span>

                    <button class="fd-button  fd-button--transparent" aria-label="Sort">
                        <i class="sap-icon--sort"></i>
                    </button>

                    <button class="fd-button fd-button--transparent" aria-label="Filter">
                        <i class="sap-icon--filter"></i>
                    </button>

                    <button class="fd-button fd-button--transparent" aria-label="Group">
                        <i class="sap-icon--group-2"></i>
                    </button>
                </div>
            </div>

            <div class="fd-row">
                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item fd-grid-list__item--link">
                        <div class="fd-toolbar is-compact fd-grid-list__item-toolbar">
                            <span class="fd-toolbar__spacer"></span>

                            <span class="fd-grid-list__item-counter" aria-label="Item has 10 children">10</span>

                            <button class="fd-button fd-button--transparent" aria-label="Delete">
                                <i class="sap-icon--decline"></i>
                            </button>

                            <span class="fd-grid-list__item-navigation-indicator" aria-label="Navigation">
                                <i class="sap-icon--navigation-right-arrow"></i>
                            </span>
                        </div>

                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">john_li@example.com</span></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item">
                        <div class="fd-toolbar is-compact fd-grid-list__item-toolbar">
                            <span class="fd-toolbar__spacer"></span>

                            <button class="fd-button fd-button--transparent" aria-label="Edit">
                                <i class="sap-icon--edit"></i>
                            </button>

                            <button class="fd-button fd-button--transparent" aria-label="Delete">
                                <i class="sap-icon--decline"></i>
                            </button>
                        </div>

                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">john_li@example.com</span></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item">
                        <div class="fd-toolbar is-compact fd-grid-list__item-toolbar">
                            <span class="fd-toolbar__spacer"></span>

                            <button class="fd-button fd-button--transparent" aria-label="Delete">
                                <i class="sap-icon--decline"></i>
                            </button>
                        </div>

                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">john_li@example.com</span></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item">
                        <div class="fd-toolbar is-compact fd-grid-list__item-toolbar">
                            <span class="fd-toolbar__spacer"></span>
                            <button class="fd-button fd-button--transparent" aria-label="Delete">
                                <i class="sap-icon--decline"></i>
                            </button>
                        </div>

                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">john_li@example.com</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Group

If grouped, a group header is displayed above all items which belong to the corresponding group. The group header is not interactive.
To create grid list group headers use \

```html
<div class="fd-grid-list">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--12">
                <div class="fd-toolbar is-compact fd-toolbar--solid">
                    <span>Products (420)</span>

                    <span class="fd-toolbar__spacer"></span>

                    <button class="fd-button fd-button--transparent" aria-label="Sort">
                        <i class="sap-icon--sort"></i>
                    </button>

                    <button class="fd-button fd-button--transparent" aria-label="Filter">
                        <i class="sap-icon--filter"></i>
                    </button>

                    <button class="fd-button fd-button--transparent" aria-label="Group">
                        <i class="sap-icon--group-2"></i>
                    </button>
                </div>
            </div>

            <div class="fd-row">
                <div class="fd-col fd-col--12">
                    <div class="fd-grid-list__group-header fd-grid-list__group-header--no-margin" tabindex="0" aria-label="Group Title: Grouped by Company A">
                        Company: Company A
                    </div>
                </div>

                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item fd-grid-list__item--link">
                        <div class="fd-toolbar fd-grid-list__item-toolbar">
                            <span class="fd-toolbar__spacer"></span>

                            <span class="fd-grid-list__item-counter" aria-label="Item has 10 children">10</span>

                            <span class="fd-grid-list__item-navigation-indicator" aria-label="Navigation">
                                <i class="sap-icon--navigation-right-arrow"></i>
                            </span>
                        </div>

                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">john_li@example.com</span></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div tabindex="0" class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item">
                        <div class="fd-toolbar is-compact fd-grid-list__item-toolbar">
                            <span class="fd-toolbar__spacer"></span>

                            <button class="fd-button fd-button--transparent" aria-label="Edit">
                                <i class="sap-icon--edit"></i>
                            </button>
                        </div>

                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">john_li@example.com</span></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="fd-col fd-col--12">
                    <div class="fd-grid-list__group-header" tabindex="0" aria-label="Group Title: Grouped by Company B">
                        Company: Company B
                    </div>
                </div>

                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item">
                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">john_li@example.com</span></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div tabindex="0" class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item">
                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">john_li@example.com</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
```

### States

To apply state, add the corresponding class \

```html
<div class="fd-grid-list">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--12">
                <div class="fd-toolbar is-compact fd-toolbar--solid">
                    <span>Products (420)</span>

                    <span class="fd-toolbar__spacer"></span>

                    <button class="fd-button fd-button--transparent" aria-label="Sort">
                        <i class="sap-icon--sort"></i>
                    </button>

                    <button class="fd-button fd-button--transparent" aria-label="Filter">
                        <i class="sap-icon--filter"></i>
                    </button>

                    <button class="fd-button fd-button--transparent" aria-label="Group">
                        <i class="sap-icon--group-2"></i>
                    </button>
                </div>
            </div>

            <div class="fd-row">
                <div class="fd-col fd-col--12">
                    <div class="fd-grid-list__group-header fd-grid-list__group-header--no-margin" tabindex="0" aria-label="Group Title: Unread">
                        State: Unread
                    </div>
                </div>

                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item fd-grid-list__item--link fd-grid-list__item--unread">
                        <div class="fd-toolbar fd-grid-list__item-toolbar">
                            <span class="fd-toolbar__spacer"></span>

                            <span class="fd-grid-list__item-counter" aria-label="Item has 10 children">10</span>

                            <span class="fd-grid-list__item-navigation-indicator" aria-label="Navigation">
                                <i class="sap-icon--navigation-right-arrow"></i>
                            </span>
                        </div>

                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">john_li@example.com</span></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="fd-col fd-col--12">
                    <div class="fd-grid-list__group-header" tabindex="0"  aria-label="Group Title: Error">
                        State: Error
                    </div>
                </div>

                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item">
                        <span class="fd-grid-list__highlight fd-grid-list__highlight--negative" aria-label="Item is highlighted. Status: negative."></span>

                        <div class="fd-toolbar is-compact fd-grid-list__item-toolbar">
                            <span class="fd-toolbar__spacer"></span>

                            <button class="fd-button fd-button--transparent" aria-label="Edit">
                                <i class="sap-icon--edit"></i>
                            </button>
                        </div>

                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>

                            <div class="fd-grid-list__item-body-actions">
                                <span class="fd-object-status fd-object-status--negative">
                                    <span class="fd-object-status__text">(Contains errors)</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="fd-col fd-col--12">
                    <div class="fd-grid-list__group-header" tabindex="0">
                        State: Locked
                    </div>
                </div>

                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item fd-grid-list__item--locked">
                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>

                            <div class="fd-grid-list__item-body-actions">
                                <button class="fd-button is-compact fd-button--transparent" aria-label="Locked">
                                    <i class="sap-icon--private"></i>
                                    <span class="fd-button__text">Locked</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="fd-col fd-col--12">
                    <div class="fd-grid-list__group-header" tabindex="0">
                        State: Draft
                    </div>
                </div>

                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item fd-grid-list__item--draft">
                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>

                            <div class="fd-grid-list__item-body-actions">
                                <button class="fd-button is-compact fd-button--transparent" aria-label="Draft">
                                    Draft
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Highlight

A highlight indicator is shown in front of the item it needs to show that an item needs attention.
To add highlight indicator, add a span element with \

```html
<div class="fd-grid-list">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--12">
                <div class="fd-toolbar is-compact fd-toolbar--solid">
                    <span>Products (420)</span>

                    <span class="fd-toolbar__spacer"></span>

                    <button class="fd-button fd-button--transparent" aria-label="Sort">
                        <i class="sap-icon--sort"></i>
                    </button>

                    <button class="fd-button fd-button--transparent" aria-label="Filter">
                        <i class="sap-icon--filter"></i>
                    </button>

                    <button class="fd-button fd-button--transparent" aria-label="Group">
                        <i class="sap-icon--group-2"></i>
                    </button>
                </div>
            </div>

            <div class="fd-row">
                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item fd-grid-list__item--link">
                        <span class="fd-grid-list__highlight fd-grid-list__highlight--positive" aria-label="Item is highlighted. Status: positive."></span>

                        <div class="fd-toolbar fd-grid-list__item-toolbar">
                            <span class="fd-toolbar__spacer"></span>

                            <span class="fd-grid-list__item-counter" aria-label="Item has 10 children">10</span>

                            <span class="fd-grid-list__item-navigation-indicator" aria-label="Navigation">
                                <i class="sap-icon--navigation-right-arrow"></i>
                            </span>
                        </div>

                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item">
                        <span class="fd-grid-list__highlight fd-grid-list__highlight--negative" aria-label="Item is highlighted. Status: negative."></span>

                        <div class="fd-toolbar is-compact fd-grid-list__item-toolbar">
                            <span class="fd-toolbar__spacer"></span>

                            <button class="fd-button fd-button--transparent" aria-label="Edit">
                                <i class="sap-icon--edit"></i>
                            </button>
                        </div>

                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item">
                        <span class="fd-grid-list__highlight fd-grid-list__highlight--critical" aria-label="Item is highlighted. Status: critical."></span>

                        <div class="fd-toolbar fd-grid-list__item-toolbar">
                            <span class="fd-toolbar__spacer"></span>
                        </div>

                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item">
                        <span class="fd-grid-list__highlight fd-grid-list__highlight--neutral" aria-label="Item is highlighted. Status: neutral."></span>

                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

### FilterInfobar

The filter information panel displays the selected filters.
To show filter information panel, follow the current example.

```html
<div class="fd-grid-list">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--12">
                <div class="fd-toolbar is-compact fd-toolbar--solid">
                    <span>Products (420)</span>

                    <span class="fd-toolbar__spacer"></span>

                    <button class="fd-button fd-button--transparent" aria-label="Sort">
                        <i class="sap-icon--sort"></i>
                    </button>

                    <button class="fd-button fd-button--transparent" aria-label="Filter">
                        <i class="sap-icon--filter"></i>
                    </button>

                    <button class="fd-button fd-button--transparent" aria-label="Group">
                        <i class="sap-icon--group-2"></i>
                    </button>
                </div>
            </div>

            <div class="fd-row">
                <div class="fd-col fd-col--12">
                    <div class="fd-toolbar fd-toolbar--info fd-toolbar--active fd-grid-list__filter" tabindex="0">
                        Filtered by: Company (Company A, Company B)
                        <span class="fd-toolbar__spacer"></span>

                        <i class="sap-icon--decline"></i>
                    </div>
                </div>
            </div>

            <div class="fd-row">
                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item fd-grid-list__item--link">
                        <div class="fd-toolbar fd-grid-list__item-toolbar">
                            <span class="fd-toolbar__spacer"></span>

                            <span class="fd-grid-list__item-counter" aria-label="Item has 10 children">10</span>

                            <span class="fd-grid-list__item-navigation-indicator" aria-label="Navigation">
                                <i class="sap-icon--navigation-right-arrow"></i>
                            </span>
                        </div>

                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item">
                        <div class="fd-toolbar is-compact fd-grid-list__item-toolbar">
                            <span class="fd-toolbar__spacer"></span>

                            <button class="fd-button fd-button--transparent" aria-label="Edit">
                                <i class="sap-icon--edit"></i>
                            </button>
                        </div>

                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item">
                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item">
                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

### More

The More button loads more items to the front end if not all items have yet been loaded.
To show "More" button, follow the current example.

```html
<div class="fd-grid-list">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--12">
                <div class="fd-toolbar is-compact fd-toolbar--solid">
                    <span>Products</span>

                    <span class="fd-toolbar__spacer"></span>

                    <button class="fd-button fd-button--transparent" aria-label="Sort">
                        <i class="sap-icon--sort"></i>
                    </button>

                    <button class="fd-button fd-button--transparent" aria-label="Filter">
                        <i class="sap-icon--filter"></i>
                    </button>

                    <button class="fd-button fd-button--transparent" aria-label="Group">
                        <i class="sap-icon--group-2"></i>
                    </button>
                </div>
            </div>

            <div class="fd-row">
                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item fd-grid-list__item--link">
                        <div class="fd-toolbar fd-grid-list__item-toolbar">
                            <span class="fd-toolbar__spacer"></span>

                            <span class="fd-grid-list__item-counter" aria-label="Item has 10 children">10</span>

                            <span class="fd-grid-list__item-navigation-indicator" aria-label="Navigation">
                                <i class="sap-icon--navigation-right-arrow"></i>
                            </span>
                        </div>

                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item">
                        <div class="fd-toolbar is-compact fd-grid-list__item-toolbar">
                            <span class="fd-toolbar__spacer"></span>

                            <button class="fd-button fd-button--transparent" aria-label="Edit">
                                <i class="sap-icon--edit"></i>
                            </button>
                        </div>

                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item">
                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item">
                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="fd-row">
                <div class="fd-col fd-col--12">
                    <div tabindex="0" role="button" class="fd-grid-list__more">
                        <h5 class="fd-title fd-title--h6 fd-grid-list__more-title">More</h5>
                        <p class="fd-grid-list__more-description">[ 5 / 10 ]</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Footer

The footer can be used to display additional static information relating to the content.
To create a grid list footer, follow the current example.

```html
<div class="fd-grid-list">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--12">
                <div class="fd-toolbar is-compact fd-toolbar--solid">
                    <span>Products (420)</span>

                    <span class="fd-toolbar__spacer"></span>

                    <button class="fd-button fd-button--transparent" aria-label="Sort">
                        <i class="sap-icon--sort"></i>
                    </button>

                    <button class="fd-button fd-button--transparent" aria-label="Filter">
                        <i class="sap-icon--filter"></i>
                    </button>

                    <button class="fd-button fd-button--transparent" aria-label="Group">
                        <i class="sap-icon--group-2"></i>
                    </button>
                </div>
            </div>

            <div class="fd-row">
                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item fd-grid-list__item--link">
                        <div class="fd-toolbar fd-grid-list__item-toolbar">
                            <span class="fd-toolbar__spacer"></span>

                            <span class="fd-grid-list__item-counter" aria-label="Item has 10 children">10</span>

                            <span class="fd-grid-list__item-navigation-indicator" aria-label="Navigation">
                                <i class="sap-icon--navigation-right-arrow"></i>
                            </span>
                        </div>

                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item">
                        <div class="fd-toolbar is-compact fd-grid-list__item-toolbar">
                            <span class="fd-toolbar__spacer"></span>

                            <button class="fd-button fd-button--transparent" aria-label="Edit">
                                <i class="sap-icon--edit"></i>
                            </button>
                        </div>

                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item">
                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item">
                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">John Li</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="fd-row">
                <div class="fd-col fd-col--12">
                    <div tabindex="0" class="fd-grid-list__footer">
                        This is footer text
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

### No height / Partial Items

It's possible to have items without some parts like image, title & description or body.

But please note that by default items have equal height set by the tallest item, you can overwrite it by yourself or use
class \

```html
<div class="fd-grid-list fd-grid-list--mode-delete">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--12">
                <div class="fd-toolbar fd-toolbar--solid">
                    <span>For every item class <code>fd-grid-list__item--height-auto</code> is applied.</span>
                </div>
            </div>

            <div class="fd-row">
                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item fd-grid-list__item--height-auto fd-grid-list__item--link">
                        <div class="fd-grid-list__item-body">
                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">No image</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>

                            <div class="fd-grid-list__item-content">
                                <p>781 Main Street</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item fd-grid-list__item--height-auto">
                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-content">
                                <p>No title & description</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item fd-grid-list__item--height-auto">
                        <div class="fd-grid-list__item-body">
                            <span class="fd-avatar fd-avatar--s fd-grid-list__item-image" role="presentation"></span>

                            <div class="fd-grid-list__item-header">
                                <h4 class="fd-title fd-title--h4 fd-grid-list__item-title">No body</h4>
                                <span class="fd-grid-list__item-subtitle">Product Owner, Company B</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item fd-grid-list__item--height-auto">
                        <div class="fd-grid-list__item-body">
                            <div class="fd-grid-list__item-content">
                                <p>No image, title & description</p>
                                <p>Anytown, SD 57401</p>
                                <p>USA</p>

                                <a href="#" class="fd-link" tabindex="0">john_li@example.com</a>
                            </div>
                        </div>
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

This documentation was automatically generated from: `packages/styles/stories/Components/Grid List/list-grid/grid-list.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
