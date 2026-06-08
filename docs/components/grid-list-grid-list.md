---
component: fd-grid-list
title: Components/Grid List/Selection
category: Components
selector: fd-grid-list
cssFile: grid-list.css
sourcePath: packages/styles/stories/Components/Grid List/list-grid-select/grid-list-select.stories.js
tags: []
dependencies: []
relatedComponents: []
stability: stable
generatedAt: 2026-06-08T17:49:02.217Z
---

# Components/Grid List/Selection

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
<div class="fd-grid-list">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--12">
                <div class="fd-toolbar is-compact fd-toolbar--solid">
                    <span>Products (420)</span>

                    <span class="fd-toolbar__spacer"></span>

                    <button class="fd-button fd-button--transparent" aria-label="Pool">
                        <i class="sap-icon--sort"></i>
                    </button>

                    <button class="fd-button fd-button--transparent" aria-label="Chart">
                        <i class="sap-icon--filter"></i>
                    </button>

                    <button class="fd-button fd-button--transparent" aria-label="Chart">
                        <i class="sap-icon--group-2"></i>
                    </button>
                </div>
            </div>

            <div class="fd-row">
                <div class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item fd-grid-list__item--link is-navigated">
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

                                <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">john_li@example.com</span></a>
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

                                <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">john_li@example.com</span></a>
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

                                <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">john_li@example.com</span></a>
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

                                <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">john_li@example.com</span></a>
                            </div>
                        </div>
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
            </div>
        </div>
    </div>
</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-grid-list--mode-multi-select` | Style variant |
| `fd-grid-list--mode-single-select` | Style variant |
| `fd-grid-list--mode-single-select-left` | Style variant |
| `fd-grid-list--mode-single-select-right` | Style variant |

## States

| Class | Description |
|-------|-------------|
| `is-compact` | Compact state |
| `is-navigated` | Navigated state |
| `is-selected` | Selected state |

## BEM Elements

This component uses the following BEM elements:

- `fd-grid-list__checkbox-input`
- `fd-grid-list__checkbox-label`
- `fd-grid-list__item`
- `fd-grid-list__item--link`
- `fd-grid-list__item-body`
- `fd-grid-list__item-content`
- `fd-grid-list__item-counter`
- `fd-grid-list__item-header`
- `fd-grid-list__item-image`
- `fd-grid-list__item-navigation-indicator`
- `fd-grid-list__item-subtitle`
- `fd-grid-list__item-title`
- `fd-grid-list__item-toolbar`
- `fd-grid-list__radio-input`
- `fd-grid-list__radio-label`

## Examples

### None mode

Items cannot be selected but can still use

```html
<div class="fd-grid-list">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--12">
                <div class="fd-toolbar is-compact fd-toolbar--solid">
                    <span>Products (420)</span>

                    <span class="fd-toolbar__spacer"></span>

                    <button class="fd-button fd-button--transparent" aria-label="Pool">
                        <i class="sap-icon--sort"></i>
                    </button>

                    <button class="fd-button fd-button--transparent" aria-label="Chart">
                        <i class="sap-icon--filter"></i>
                    </button>

                    <button class="fd-button fd-button--transparent" aria-label="Chart">
                        <i class="sap-icon--group-2"></i>
                    </button>
                </div>
            </div>

            <div class="fd-row">
                <div class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item fd-grid-list__item--link is-navigated">
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

                                <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">john_li@example.com</span></a>
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

                                <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">john_li@example.com</span></a>
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

                                <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">john_li@example.com</span></a>
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

                                <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">john_li@example.com</span></a>
                            </div>
                        </div>
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
            </div>
        </div>
    </div>
</div>
```

### Single select mode

One item in the grid list can be selected. Need click on an item to select it.
To turn on the Single select mode, add the \

```html
<div class="fd-grid-list fd-grid-list--mode-single-select">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--12">
                <div class="fd-toolbar is-compact fd-toolbar--solid">
                    <span>Products (420)</span>

                    <span class="fd-toolbar__spacer"></span>

                    <button class="fd-button fd-button--transparent" aria-label="Pool">
                        <i class="sap-icon--sort"></i>
                    </button>

                    <button class="fd-button fd-button--transparent" aria-label="Chart">
                        <i class="sap-icon--filter"></i>
                    </button>

                    <button class="fd-button fd-button--transparent" aria-label="Chart">
                        <i class="sap-icon--group-2"></i>
                    </button>
                </div>
            </div>

            <div class="fd-row">
                <div class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item fd-grid-list__item--link">
                        <input type="radio" class="fd-radio is-compact fd-grid-list__radio-input" id="pDidh761" name="singleSelectMasterRadio">
                        <label class="fd-radio__label fd-grid-list__radio-label" for="pDidh761" aria-label="John Li, Product Owner, Company B"></label>

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

                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item">
                        <input type="radio" class="fd-radio is-compact fd-grid-list__radio-input" id="pDidh761123" name="singleSelectMasterRadio">
                        <label class="fd-radio__label fd-grid-list__radio-label" for="pDidh761123" aria-label="John Li, Product Owner, Company B"></label>

                        <div class="fd-toolbar fd-grid-list__item-toolbar">
                            <span class="fd-toolbar__spacer"></span>

                            <button class="fd-button is-compact fd-button--transparent" aria-label="Pool">
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

                <div  class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--3">
                    <div tabindex="0" class="fd-grid-list__item is-selected">
                        <input type="radio" class="fd-radio is-compact fd-grid-list__radio-input" id="pDidh7611234" name="singleSelectMasterRadio" aria-label="John Li, Product Owner, Company B" checked>
                        <label class="fd-radio__label fd-grid-list__radio-label" for="pDidh7611234"></label>

                        <div class="fd-toolbar fd-grid-list__item-toolbar">
                            <span class="fd-toolbar__spacer"></span>

                            <span class="fd-grid-list__item-counter" aria-label="Item has 5 children">5</span>
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
                        <input type="radio" class="fd-radio is-compact fd-grid-list__radio-input" id="pDidh761642" name="singleSelectMasterRadio" aria-label="John Li, Product Owner, Company B">
                        <label class="fd-radio__label fd-grid-list__radio-label" for="pDidh761642"></label>

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

### Single select left mode

One item in the grid list can be selected. For this, the grid list provides radio buttons on the left side of each item toolbar.
To turn on the Single select left mode, add the \

```html
<div class="fd-grid-list fd-grid-list--mode-single-select-left">
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
                        <div class="fd-toolbar is-compact fd-grid-list__item-toolbar">
                            <input type="radio" class="fd-radio fd-grid-list__radio-input" id="pDidh1761" name="singleSelectLeftRadio" aria-label="John Li, Product Owner, Company B">
                            <label class="fd-radio__label fd-grid-list__radio-label" for="pDidh1761" tabindex="-1"></label>

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
                    <div tabindex="0" class="fd-grid-list__item is-selected">
                        <div class="fd-toolbar is-compact fd-grid-list__item-toolbar">
                            <input type="radio" class="fd-radio fd-grid-list__radio-input" id="p1Didh1761" name="singleSelectLeftRadio" aria-label="John Li, Product Owner, Company B" checked>
                            <label class="fd-radio__label fd-grid-list__radio-label" for="p1Didh1761" tabindex="-1"></label>
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
                        <div class="fd-toolbar is-compact fd-grid-list__item-toolbar">
                            <input type="radio" class="fd-radio fd-grid-list__radio-input" id="p12Didh1761" name="singleSelectLeftRadio" aria-label="John Li, Product Owner, Company B">
                            <label class="fd-radio__label fd-grid-list__radio-label" for="p12Didh1761" tabindex="-1"></label>
                            <span class="fd-toolbar__spacer"></span>

                            <span class="fd-grid-list__item-counter" aria-label="Item has 5 children">5</span>
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
                            <input type="radio" class="fd-radio fd-grid-list__radio-input" id="p1x2Didh1761" name="singleSelectLeftRadio" aria-label="John Li, Product Owner, Company B">
                            <label class="fd-radio__label fd-grid-list__radio-label" for="p1x2Didh1761" tabindex="-1"></label>
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
            </div>
        </div>
    </div>
</div>
```

### Single select right mode

One item in the grid list can be selected. For this, the grid list provides radio buttons on the left side of each item toolbar.
To turn on the Single select right mode, add the \

```html
<div class="fd-grid-list fd-grid-list--mode-single-select-right">
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
                            <input type="radio" class="fd-radio is-compact fd-grid-list__radio-input" id="pDidh1v761541" name="singleSelectRightRadio" aria-label="John Li, Product Owner, Company B">
                            <label class="fd-radio__label fd-grid-list__radio-label" for="pDidh1v761541" tabindex="-1"></label>

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
                    <div tabindex="0" class="fd-grid-list__item is-selected">
                        <div class="fd-toolbar is-compact fd-grid-list__item-toolbar">
                            <input type="radio" class="fd-radio fd-grid-list__radio-input" id="p1Didh1761g234" name="singleSelectRightRadio" aria-label="John Li, Product Owner, Company B" checked>
                            <label class="fd-radio__label fd-grid-list__radio-label" for="p1Didh1761g234" tabindex="-1"></label>

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
                        <div class="fd-toolbar is-compact fd-grid-list__item-toolbar">
                            <input type="radio" class="fd-radio fd-grid-list__radio-input" id="p12Didh176141w" name="singleSelectRightRadio" aria-label="John Li, Product Owner, Company B">
                            <label class="fd-radio__label fd-grid-list__radio-label" for="p12Didh176141w" tabindex="-1"></label>

                            <span class="fd-toolbar__spacer"></span>

                            <span class="fd-grid-list__item-counter" aria-label="Item has 5 children">5</span>
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
                            <input type="radio" class="fd-radio fd-grid-list__radio-input" id="p1x2Didh176132" name="singleSelectRightRadio" aria-label="John Li, Product Owner, Company B">
                            <label class="fd-radio__label fd-grid-list__radio-label" for="p1x2Didh176132" tabindex="-1"></label>

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
            </div>
        </div>
    </div>
</div>
```

### Multi select mode

Users can select one or more items. For this, the grid list provides checkboxes on the left side of each item toolbar.
To turn on the Multi select mode, add the \

```html
<div class="fd-grid-list fd-grid-list--mode-multi-select">
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
                    <div tabindex="0" class="fd-grid-list__item fd-grid-list__item--link is-selected">
                        <div class="fd-toolbar is-compact fd-grid-list__item-toolbar">
                            <div class="fd-form-item">
                                <input type="checkbox" class="fd-checkbox fd-grid-list__checkbox-input" id="Ai4ez611c" aria-label="John Li, Product Owner, Company B" checked>
                                <label class="fd-checkbox__label fd-grid-list__checkbox-label" for="Ai4ez611c" tabindex="-1">
                                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                                </label>
                            </div>

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
                            <div class="fd-form-item">
                                <input type="checkbox" class="fd-checkbox fd-grid-list__checkbox-input" id="Ai4ez611c2" aria-label="John Li, Product Owner, Company B">
                                <label class="fd-checkbox__label fd-grid-list__checkbox-label" for="Ai4ez611c2" tabindex="-1">
                                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                                </label>
                            </div>

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
                    <div tabindex="0" class="fd-grid-list__item is-selected">
                        <div class="fd-toolbar is-compact fd-grid-list__item-toolbar">
                            <div class="fd-form-item">
                                <input type="checkbox" class="fd-checkbox fd-grid-list__checkbox-input" id="Ai4ez611c3" aria-label="John Li, Product Owner, Company B" checked>
                                <label class="fd-checkbox__label fd-grid-list__checkbox-label" for="Ai4ez611c3" tabindex="-1">
                                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                                </label>
                            </div>

                            <span class="fd-toolbar__spacer"></span>

                            <span class="fd-grid-list__item-counter" aria-label="Item has 5 children">5</span>
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
                            <div class="fd-form-item">
                                <input type="checkbox" class="fd-checkbox fd-grid-list__checkbox-input" id="Ai4ez611c4" aria-label="John Li, Product Owner, Company B">
                                <label class="fd-checkbox__label fd-grid-list__checkbox-label" for="Ai4ez611c4" tabindex="-1">
                                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                                </label>
                            </div>

                            <span class="fd-toolbar__spacer"></span>

                            <span class="fd-grid-list__item-counter" aria-label="Item has 5 children">5</span>
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

This documentation was automatically generated from: `packages/styles/stories/Components/Grid List/list-grid-select/grid-list-select.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
