---
component: fd-pagination
title: Components/Pagination
category: Components
selector: fd-pagination
cssFile: pagination.css
sourcePath: packages/styles/stories/Components/pagination/pagination.stories.js
tags: ["btp",""]
dependencies: ["button","form-label","icon","input","list","pagination","popover","select"]
relatedComponents: ["button","form-label","icon","input","list","pagination","popover","select"]
stability: stable
generatedAt: 2026-05-28T16:47:21.049Z
---

# Components/Pagination

Pagination allows users to separate their content into discrete pages, making it easier to digest and navigate through. Pagination is commonly used for tables and tiles.

##Usage
**Use pagination if:**

- The user needs to search through several related items (over 30 is a good basis)
- The content contains products that users can choose from
- You want to allow users to bookmark pages
- You want your content to be optimized for search

##Details
- > 9 pages: 9 elements should be shown (including pages, more symbols and the current page), use input for the current page
- < 9 pages, add \

## Usage Guidelines

**Use pagination if:**

- The user needs to search through several related items (over 30 is a good basis)
- The content contains products that users can choose from
- You want to allow users to bookmark pages
- You want your content to be optimized for search

## Dependencies

This component depends on the following CSS files:

- `button.css`
- `form-label.css`
- `icon.css`
- `input.css`
- `list.css`
- `pagination.css`
- `popover.css`
- `select.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/pagination.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/form-label.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/input.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/list.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/pagination.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/popover.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/select.css" rel="stylesheet">
```

## Basic Usage

```html
<h3>> 9 Pages</h3>
<div class="fd-pagination">
    <nav class="fd-pagination__nav" role="navigation" aria-label="first page example, pagination with more than 9 pages">
        <a href="#" class="fd-button fd-button--transparent fd-pagination__button fd-pagination__button--mobile" aria-label="First page" aria-disabled="true">
            <i class="sap-icon sap-icon--media-rewind"></i>
        </a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__button" aria-label="Previous page" aria-disabled="true">
            <i class="sap-icon sap-icon--navigation-left-arrow"></i>
        </a>

        <label class="fd-form-label fd-pagination__label" id="firstPageInputPage" aria-label="Page input, Current page, Page 1">Page:</label>

        <input aria-labelledby="firstPageInputPage firstPageInputOf" class="fd-input fd-pagination__input" type="number" min="1" max="500" value="1" required />

        <label class="fd-form-label fd-pagination__label" id="firstPageInputOf">of 500</label>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 2">2</a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 3">3</a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 4">4</a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 5">5</a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 6">6</a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 7">7</a>

        <span class="fd-pagination__more" role="presentation"></span>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 500">500</a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__button" aria-label="Next page" aria-disabled="false">
            <i class="sap-icon sap-icon--navigation-right-arrow"></i>
        </a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__button fd-pagination__button--mobile" aria-label="Last page" aria-disabled="false">
            <i class="sap-icon sap-icon--media-forward"></i>
        </a>
    </nav>

    <div class="fd-pagination__total">
        <span class="fd-form-label fd-pagination__total-label">500 Results</span>
    </div>
</div>

<h3>< 9 Pages</h3>

<div class="fd-pagination fd-pagination--short">
    <nav class="fd-pagination__nav" role="navigation" aria-label="first page example, pagination with less than 9 pages">
        <a href="#" class="fd-button fd-button--transparent fd-pagination__button fd-pagination__button--mobile" aria-label="First page" aria-disabled="true">
            <i class="sap-icon sap-icon--media-rewind"></i>
        </a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__button" aria-label="Previous page" aria-disabled="true">
            <i class="sap-icon sap-icon--navigation-left-arrow"></i>
        </a>

        <label class="fd-form-label fd-pagination__label" id="firstPageInputShortPage" aria-label="Page input, Current page, Page 1">Page:</label>

        <input aria-labelledby="firstPageInputShortPage firstPageInputShortOf" class="fd-input fd-pagination__input" type="number" min="1" max="3" value="1" required />

        <label class="fd-form-label fd-pagination__label" id="firstPageInputShortOf">of 3</label>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link is-active" aria-label="Current Page, Page 1" aria-current="true">1</a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 2">2</a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 3">3</a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__button" aria-label="Next page" aria-disabled="false">
            <i class="sap-icon sap-icon--navigation-right-arrow"></i>
        </a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__button fd-pagination__button--mobile" aria-label="Last page" aria-disabled="false">
            <i class="sap-icon sap-icon--media-forward"></i>
        </a>
    </nav>

    <div class="fd-pagination__total">
        <span class="fd-form-label fd-pagination__total-label">3 Results</span>
    </div>
</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-pagination--mobile` | Pagination component is responsive by default |
| `fd-pagination--short` | Style variant |

## States

| Class | Description |
|-------|-------------|
| `is-active` | Active state |
| `is-selected` | Selected state |

## BEM Elements

This component uses the following BEM elements:

- `fd-pagination__button`
- `fd-pagination__button--mobile`
- `fd-pagination__input`
- `fd-pagination__label`
- `fd-pagination__link`
- `fd-pagination__more`
- `fd-pagination__nav`
- `fd-pagination__per-page`
- `fd-pagination__per-page-label`
- `fd-pagination__total`
- `fd-pagination__total-label`

## Related Components

This component works with or depends on:

- `button`
- `form-label`
- `icon`
- `input`
- `list`
- `pagination`
- `popover`
- `select`

## Design Tokens

Key CSS variables used by this component:

- `--fdButton_Outline_Offset`
- `--fdPaginationMoreWidth`
- `--fdPagination_Elements_Spacing`
- `--fdPagination_Placeholder_Dots_Width`
- `--fdPagination_Placeholder_Dots_Width_Compact`
- `--mobile`
- `--short`
- `--toggled`

## Examples

### First page

First and Previous page buttons are disabled when first page is active.

```html
<h3>> 9 Pages</h3>
<div class="fd-pagination">
    <nav class="fd-pagination__nav" role="navigation" aria-label="first page example, pagination with more than 9 pages">
        <a href="#" class="fd-button fd-button--transparent fd-pagination__button fd-pagination__button--mobile" aria-label="First page" aria-disabled="true">
            <i class="sap-icon sap-icon--media-rewind"></i>
        </a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__button" aria-label="Previous page" aria-disabled="true">
            <i class="sap-icon sap-icon--navigation-left-arrow"></i>
        </a>

        <label class="fd-form-label fd-pagination__label" id="firstPageInputPage" aria-label="Page input, Current page, Page 1">Page:</label>

        <input aria-labelledby="firstPageInputPage firstPageInputOf" class="fd-input fd-pagination__input" type="number" min="1" max="500" value="1" required />

        <label class="fd-form-label fd-pagination__label" id="firstPageInputOf">of 500</label>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 2">2</a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 3">3</a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 4">4</a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 5">5</a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 6">6</a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 7">7</a>

        <span class="fd-pagination__more" role="presentation"></span>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 500">500</a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__button" aria-label="Next page" aria-disabled="false">
            <i class="sap-icon sap-icon--navigation-right-arrow"></i>
        </a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__button fd-pagination__button--mobile" aria-label="Last page" aria-disabled="false">
            <i class="sap-icon sap-icon--media-forward"></i>
        </a>
    </nav>

    <div class="fd-pagination__total">
        <span class="fd-form-label fd-pagination__total-label">500 Results</span>
    </div>
</div>

<h3>< 9 Pages</h3>

<div class="fd-pagination fd-pagination--short">
    <nav class="fd-pagination__nav" role="navigation" aria-label="first page example, pagination with less than 9 pages">
        <a href="#" class="fd-button fd-button--transparent fd-pagination__button fd-pagination__button--mobile" aria-label="First page" aria-disabled="true">
            <i class="sap-icon sap-icon--media-rewind"></i>
        </a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__button" aria-label="Previous page" aria-disabled="true">
            <i class="sap-icon sap-icon--navigation-left-arrow"></i>
        </a>

        <label class="fd-form-label fd-pagination__label" id="firstPageInputShortPage" aria-label="Page input, Current page, Page 1">Page:</label>

        <input aria-labelledby="firstPageInputShortPage firstPageInputShortOf" class="fd-input fd-pagination__input" type="number" min="1" max="3" value="1" required />

        <label class="fd-form-label fd-pagination__label" id="firstPageInputShortOf">of 3</label>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link is-active" aria-label="Current Page, Page 1" aria-current="true">1</a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 2">2</a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 3">3</a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__button" aria-label="Next page" aria-disabled="false">
            <i class="sap-icon sap-icon--navigation-right-arrow"></i>
        </a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__button fd-pagination__button--mobile" aria-label="Last page" aria-disabled="false">
            <i class="sap-icon sap-icon--media-forward"></i>
        </a>
    </nav>

    <div class="fd-pagination__total">
        <span class="fd-form-label fd-pagination__total-label">3 Results</span>
    </div>
</div>
```

### Middle pages

Pagination can display middle pages to increase reachability. The ellipsis will not only display before the last page but also after the first page, showing two pages before & two after the current page. In sum 9 elements are shown: first page + more + 2 pages before + current page + 2 pages after + more + last page.

```html
<h3>> 9 Pages</h3>
<div class="fd-pagination">
    <nav class="fd-pagination__nav" role="navigation" aria-label="middle page example, pagination with more than 9 pages">
        <a href="#" class="fd-button fd-button--transparent fd-pagination__button fd-pagination__button--mobile" aria-label="First page" aria-disabled="false">
            <i class="sap-icon sap-icon--media-rewind"></i>
        </a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__button" aria-label="Previous page" aria-disabled="false">
            <i class="sap-icon sap-icon--navigation-left-arrow"></i>
        </a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 1">1</a>

        <span class="fd-pagination__more" role="presentation"></span>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 298">298</a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 299">299</a>

        <label class="fd-form-label fd-pagination__label" id="middlePageInputPage" aria-label="Page input, Current page, Page 300">Page:</label>

        <input aria-labelledby="middlePageInputPage middlePageInputOf" class="fd-input fd-pagination__input" type="number" min="1" max="500" value="300" required />

        <label class="fd-form-label fd-pagination__label" id="middlePageInputOf">of 500</label>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 301">301</a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 302">302</a>

        <span class="fd-pagination__more" role="presentation"></span>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 500">500</a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__button" aria-label="Next page" aria-disabled="false">
            <i class="sap-icon sap-icon--navigation-right-arrow"></i>
        </a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__button fd-pagination__button--mobile" aria-label="Last page" aria-disabled="false">
            <i class="sap-icon sap-icon--media-forward"></i>
        </a>
    </nav>

    <div class="fd-pagination__total">
        <span class="fd-form-label fd-pagination__total-label">500 Results</span>
    </div>
</div>

<h3>< 9 Pages</h3>

<div class="fd-pagination fd-pagination--short">
    <nav class="fd-pagination__nav"  role="navigation" aria-label="middle page example, pagination with less than 9 pages">
        <a href="#" class="fd-button fd-button--transparent fd-pagination__button fd-pagination__button--mobile" aria-label="First page" aria-disabled="false">
            <i class="sap-icon sap-icon--media-rewind"></i>
        </a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__button" aria-label="Previous page" aria-disabled="false">
            <i class="sap-icon sap-icon--navigation-left-arrow"></i>
        </a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 1">1</a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link is-active" aria-label="Current page, Page 2" aria-current="true">2</a>

        <label class="fd-form-label fd-pagination__label" id="middlePageInputShortPage" aria-label="Page input, Current page, Page 1">Page:</label>

        <input aria-labelledby="middlePageInputShortPage middlePageInputShortOf" class="fd-input fd-pagination__input" type="number" min="1" max="3" value="2" required />

        <label class="fd-form-label fd-pagination__label" id="middlePageInputShortOf">of 3</label>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 3">3</a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__button" aria-label="Next page" aria-disabled="false">
            <i class="sap-icon sap-icon--navigation-right-arrow"></i>
        </a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__button fd-pagination__button--mobile" aria-label="Last page" aria-disabled="false">
            <i class="sap-icon sap-icon--media-forward"></i>
        </a>
    </nav>

    <div class="fd-pagination__total">
        <span class="fd-form-label fd-pagination__total-label">3 Results</span>
    </div>
</div>
```

### Last page

Last and Next page buttons are disabled when last page is active.

```html
<h3>> 9 Pages</h3>
<div class="fd-pagination">
    <nav class="fd-pagination__nav" role="navigation" aria-label="last page example, pagination with more than 9 pages">
        <a href="#" class="fd-button fd-button--transparent fd-pagination__button fd-pagination__button--mobile" aria-label="First page" aria-disabled="false">
            <i class="sap-icon sap-icon--media-rewind"></i>
        </a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__button" aria-label="Previous page" aria-disabled="false">
            <i class="sap-icon sap-icon--navigation-left-arrow"></i>
        </a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 1">1</a>

        <span class="fd-pagination__more" role="presentation"></span>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 494">494</a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 495">495</a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 496">496</a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 497">497</a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 498">498</a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 499">499</a>

        <label class="fd-form-label fd-pagination__label" id="lastPageInputPage" aria-label="Page input, Current page, Page 500">Page:</label>

        <input aria-labelledby="lastPageInputPage lastPageInputOf" class="fd-input fd-pagination__input" type="number" min="1" max="500" value="500" required />

        <label class="fd-form-label fd-pagination__label" id="lastPageInputOf">of 500</label>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__button" aria-label="Next page" aria-disabled="true">
            <i class="sap-icon sap-icon--navigation-right-arrow"></i>
        </a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__button fd-pagination__button--mobile" aria-label="Last page" aria-disabled="true">
            <i class="sap-icon sap-icon--media-forward"></i>
        </a>
    </nav>

    <div class="fd-pagination__total">
        <span class="fd-form-label fd-pagination__total-label">500 Results</span>
    </div>
</div>

<h3>< 9 Pages</h3>

<div class="fd-pagination fd-pagination--short">
    <nav class="fd-pagination__nav" role="navigation" aria-label="last page example, pagination with less than 9 pages">
        <a href="#" class="fd-button fd-button--transparent fd-pagination__button fd-pagination__button--mobile" aria-label="First page" aria-disabled="false">
            <i class="sap-icon sap-icon--media-rewind"></i>
        </a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__button" aria-label="Previous page" aria-disabled="false">
            <i class="sap-icon sap-icon--navigation-left-arrow"></i>
        </a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 1">1</a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link"  aria-label="Goto page 2">2</a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__link is-active" aria-label="Current Page, page 3" aria-current="true">3</a>

        <label class="fd-form-label fd-pagination__label" id="lastPageInputShortPage" aria-label="Page input, Current page, Page 3">Page:</label>

        <input aria-labelledby="lastPageInputShortPage lastPageInputShortOf" class="fd-input fd-pagination__input" type="number" min="1" max="3" value="3" required />

        <label class="fd-form-label fd-pagination__label" id="lastPageInputShortOf">of 3</label>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__button" aria-label="Next page" aria-disabled="true">
            <i class="sap-icon sap-icon--navigation-right-arrow"></i>
        </a>

        <a href="#" class="fd-button fd-button--transparent fd-pagination__button fd-pagination__button--mobile" aria-label="Last page" aria-disabled="true">
            <i class="sap-icon sap-icon--media-forward"></i>
        </a>
    </nav>

    <div class="fd-pagination__total">
        <span class="fd-form-label fd-pagination__total-label">3 Results</span>
    </div>
</div>
```

### Per page

Additionally, per page section can be displayed with select to specify which number of items should be shown on the every page.

```html
<div class="fd-pagination">
    <div class="fd-pagination__per-page">
        <label class="fd-form-label fd-pagination__per-page-label" id="compactSelectLabel">Results per page: </label>

        <div class="fd-popover">
            <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
                <div class="fd-select">
                    <button
                        id="compactSelectCombobox"
                        onclick="toggleElAttrs('h0C6A326', ['aria-hidden']); toggleElAttrs('compactSelectCombobox', ['aria-expanded']);"
                        class="fd-select__control"
                        tabindex="0"
                        aria-labelledby="compactSelectLabel compactSelectValue"
                        aria-expanded="true" aria-haspopup="listbox">
                        <span id="compactSelectValue" class="fd-select__text-content">4</span>
                        <span class="fd-button fd-button--transparent fd-select__button">
                            <i class="sap-icon--slim-arrow-down"></i>
                        </span>
                    </button>
                </div>

                <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="false" id="h0C6A326">
                    <ul aria-activedescendant="compactSelectCombobox-currentlyFocusedItem" aria-labelledby="compactSelectLabel" class="fd-list fd-list--dropdown" role="listbox">
                        <li id="compactSelectCombobox-currentlyFocusedItem" class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
                            <span class="fd-list__title">4</span>
                        </li>
                        <li class="fd-list__item" role="option" tabindex="-1">
                            <span class="fd-list__title">8</span>
                        </li>
                        <li class="fd-list__item" role="option" tabindex="-1">
                            <span class="fd-list__title">16</span>
                        </li>
                        <li class="fd-list__item" role="option" tabindex="-1">
                            <span class="fd-list__title">32</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <nav class="fd-pagination__nav" role="navigation" aria-label="per page page example, pagination with more than 9 pages">
            <a href="#" class="fd-button fd-button--transparent fd-pagination__button fd-pagination__button--mobile" aria-label="First page" aria-disabled="false">
                <i class="sap-icon sap-icon--media-rewind"></i>
            </a>

            <a href="#" class="fd-button fd-button--transparent fd-pagination__button" aria-label="Previous page" aria-disabled="false">
                <i class="sap-icon sap-icon--navigation-left-arrow"></i>
            </a>

            <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 1">1</a>

            <span class="fd-pagination__more" role="presentation"></span>

            <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 494">494</a>

            <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 495">495</a>

            <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 496">496</a>

            <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 497">497</a>

            <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 498">498</a>

            <a href="#" class="fd-button fd-button--transparent fd-pagination__link" aria-label="Goto page 499">499</a>

            <label class="fd-form-label fd-pagination__label" id="perPageInputPage" aria-label="Page input, Current page, Page 500">Page:</label>

            <input aria-labelledby="perPageInputPage perPageInputOf" class="fd-input fd-pagination__input" type="number" min="1" max="500" value="500" required />

            <label class="fd-form-label fd-pagination__label" id="perPageInputOf">of 500</label>

            <a href="#" class="fd-button fd-button--transparent fd-pagination__button" aria-label="Next page" aria-disabled="true">
                <i class="sap-icon sap-icon--navigation-right-arrow"></i>
            </a>

            <a href="#" class="fd-button fd-button--transparent fd-pagination__button fd-pagination__button--mobile" aria-label="Last page" aria-disabled="true">
                <i class="sap-icon sap-icon--media-forward"></i>
            </a>
        </nav>

        <div class="fd-pagination__total">
            <span class="fd-form-label fd-pagination__total-label">500 Results</span>
        </div>
    </div>
</div>
```

### Mobile

Pagination component is responsive by default. When the screen's size is smaller than 1024px in width mobile mode is shown and you have nothing to do. If you want to display pagination component always in mobile mode please add \

```html
<div class="fd-pagination fd-pagination--mobile">
    <div class="fd-pagination__per-page">
        <label class="fd-form-label fd-pagination__per-page-label" id="selectLabel">Results per page: </label>

        <div class="fd-popover">
            <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
                <div class="fd-select">
                    <button id="compactSelectCombobox"
                        onclick="toggleElAttrs('h0C6A327', ['aria-hidden']); toggleElAttrs('selectCombobox', ['aria-expanded']);"
                        class="fd-select__control" tabindex="0" aria-labelledby="selectLabel selectValue" aria-expanded="true" aria-haspopup="listbox">
                        <span id="selectValue" class="fd-select__text-content">4</span>
                        <span class="fd-button fd-button--transparent fd-select__button">
                            <i class="sap-icon--slim-arrow-down"></i>
                        </span>
                    </button>
                </div>

                <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="false" id="h0C6A327">
                    <ul aria-activedescendant="selectCombobox-currentlyFocusedItem" aria-labelledby="selectLabel" class="fd-list fd-list--dropdown fd-list" role="listbox">
                        <li id="selectCombobox-currentlyFocusedItem" class="fd-list__item is-selected" aria-selected="true" role="option" tabindex="0">
                            <span class="fd-list__title">4</span>
                        </li>
                        <li class="fd-list__item" role="option" tabindex="-1">
                            <span class="fd-list__title">8</span>
                        </li>
                        <li class="fd-list__item" role="option" tabindex="-1">
                            <span class="fd-list__title">16</span>
                        </li>
                        <li class="fd-list__item" role="option" tabindex="-1">
                            <span class="fd-list__title">32</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <nav class="fd-pagination__nav" role="navigation" aria-label="mobile mode example, pagination with more than 9 pages">
            <a href="#" class="fd-button fd-button--transparent fd-pagination__button fd-pagination__button--mobile" aria-label="First page" aria-disabled="false">
                <i class="sap-icon sap-icon--media-rewind"></i>
            </a>

            <a href="#" class="fd-button fd-button--transparent fd-pagination__button" aria-label="Previous page" aria-disabled="false">
                <i class="sap-icon sap-icon--navigation-left-arrow"></i>
            </a>

            <label class="fd-form-label fd-pagination__label" id="mobilePageInputPage" aria-label="Page input, Current page, Page 500">Page:</label>

            <input aria-labelledby="mobilePageInputPage cozyPageInputOf" class="fd-input fd-pagination__input" type="number" min="1" max="500" value="500" required />

            <label class="fd-form-label fd-pagination__label" id="mobilePageInputOf">of 500</label>

            <a href="#" class="fd-button fd-button--transparent fd-pagination__button" aria-label="Next page" aria-disabled="true">
                <i class="sap-icon sap-icon--navigation-right-arrow"></i>
            </a>

            <a href="#" class="fd-button fd-button--transparent fd-pagination__button fd-pagination__button--mobile" aria-label="Last page" aria-disabled="true">
                <i class="sap-icon sap-icon--media-forward"></i>
            </a>
        </nav>

        <div class="fd-pagination__total">
            <span class="fd-form-label fd-pagination__total-label">500 Results</span>
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

This documentation was automatically generated from: `packages/styles/stories/Components/pagination/pagination.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
