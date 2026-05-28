---
component: fd-card
title: Layouts/Fixed Card Layout
category: Layouts
selector: fd-card
cssFile: card.css
sourcePath: packages/styles/stories/Layouts/fixed-card-layout/fixed-card-layout.stories.js
tags: []
dependencies: ["avatar","card","checkbox","fixed-card-layout","icon","list","numeric-content","object-status","table"]
relatedComponents: ["avatar","card","checkbox","fixed-card-layout","icon","list","numeric-content","object-status","table"]
stability: stable
generatedAt: 2026-05-28T16:47:21.542Z
---

# Layouts/Fixed Card Layout

The fixed card layout is a layout for the overview page. The cards have a fixed width, and the height is determined by the card type and the embedded control.

## Dependencies

This component depends on the following CSS files:

- `avatar.css`
- `card.css`
- `checkbox.css`
- `fixed-card-layout.css`
- `icon.css`
- `list.css`
- `numeric-content.css`
- `object-status.css`
- `table.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/card.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/avatar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/card.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/checkbox.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/fixed-card-layout.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/list.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/numeric-content.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/object-status.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/table.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-fixed-card-layout__card-layout fd-fixed-card-layout__card-layout--columns-3" >
    <div class="fd-fixed-card-layout__card">
        <div class="fd-card" role="region" aria-label="List Card Example 1">
            <div class="fd-card__header" role="group" aria-roledescription="Card Header" aria-labelledby="list-card-title-1">
                <div class="fd-card__header-main">
                    <div class="fd-card__header-main-container">
                        <div class="fd-card__header-text">
                            <div class="fd-card__title-area">
                                <div class="fd-card__title" id="list-card-title-1" role="heading" aria-level="3">Quick Links</div>
                            </div>
                        </div>
                    </div>
                    <div class="fd-card__header-main-actions">
                        <span class="fd-object-status fd-card__counter">2 of 20</span>
                    </div>
                </div>
            </div>
            <div class="fd-card__content" role="group" aria-roledescription="Card Content">
                <ul class="fd-list fd-list--no-border" role="list">
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--cart"></i>
                        <span class="fd-list__title">List item 1</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--wrench"></i>
                        <span class="fd-list__title">List item 2</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--leads"></i>
                        <span class="fd-list__title">List item 3</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--batch-payments"></i>
                        <span class="fd-list__title">List item 4</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--retail-store"></i>
                        <span class="fd-list__title">List item 5</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--travel-expense"></i>
                        <span class="fd-list__title">List item 6</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="fd-fixed-card-layout__card">
        <div class="fd-card fd-card--object" role="region" aria-label="Object Card Example 1">
            <div class="fd-card__header" role="group" aria-roledescription="Card Header" aria-labelledby="object-card-title-1">
                <div class="fd-card__header-main">
                    <div class="fd-card__header-main-container" role="button" tabindex="0">
                        <span
                            class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail fd-card__avatar"

                            role="img"
                            aria-label="John Doe">
                        </span>
                        <div class="fd-card__header-text">
                            <div class="fd-card__title-area">
                                <div class="fd-card__title" id="object-card-title-1" role="heading" aria-level="3">Card Title</div>
                            </div>
                            <div class="fd-card__subtitle-area">
                                <div class="fd-card__subtitle">Card Subtitle</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-card__content" role="group" aria-roledescription="Card Content">
                <div class="fd-card__content-container">
                    <div class="fd-card__content-section">
                        <div class="fd-card__content-title-container">Group Title 1</div>
                        <div class="fd-card__content-group">
                            <div class="fd-card__content-group-text">
                                <span>Label</span>
                                <span>Text</span>
                            </div>
                        </div>
                        <div class="fd-card__content-group">
                            <div class="fd-card__content-group-text">
                                <span>Label</span>
                                <span>Text</span>
                            </div>
                        </div>
                        <div class="fd-card__content-group">
                            <div class="fd-card__content-group-text">
                                <span>Label</span>
                                <span>Text</span>
                            </div>
                        </div>
                    </div>
                    <div class="fd-card__content-section">
                        <div class="fd-card__content-title-container">Group Title 2</div>
                        <div class="fd-card__content-group">
                            <div class="fd-card__content-group-text">
                                <span>Label</span>
                                <span>Text</span>
                            </div>
                        </div>
                        <div class="fd-card__content-group">
                            <div class="fd-card__content-group-text">
                                <span>Label</span>
                                <span>Text</span>
                            </div>
                        </div>
                        <div class="fd-card__content-group">
                            <div class="fd-card__content-group-text">
                                <span>Label Only</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="fd-fixed-card-layout__card">
        <div class="fd-card" role="region" aria-label="List Card Example 2">
            <div class="fd-card__header" role="group" aria-roledescription="Card Header" aria-labelledby="list-card-title-2">
                <div class="fd-card__header-main">
                    <div class="fd-card__header-main-container">
                        <div class="fd-card__header-text">
                            <div class="fd-card__title-area">
                                <div class="fd-card__title" id="list-card-title-2" role="heading" aria-level="3">Quick Links</div>
                            </div>
                        </div>
                    </div>
                    <div class="fd-card__header-main-actions">
                        <span class="fd-object-status fd-card__counter">2 of 20</span>
                    </div>
                </div>
            </div>
            <div class="fd-card__content" role="group" aria-roledescription="Card Content">
                <ul class="fd-list fd-list--no-border" role="list">
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--cart"></i>
                        <span class="fd-list__title">List item 1</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--wrench"></i>
                        <span class="fd-list__title">List item 2</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--leads"></i>
                        <span class="fd-list__title">List item 3</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--batch-payments"></i>
                        <span class="fd-list__title">List item 4</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--retail-store"></i>
                        <span class="fd-list__title">List item 5</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--travel-expense"></i>
                        <span class="fd-list__title">List item 6</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="fd-fixed-card-layout__card">
        <div class="fd-card fd-card--table" role="region" aria-label="Table Card Example 1">
            <div class="fd-card__header" role="group" aria-roledescription="Card Header" aria-labelledby="table-card-title-1">
                <div class="fd-card__header-main">
                    <div class="fd-card__header-main-container" role="button" tabindex="0">
                        <div class="fd-card__header-text">
                            <div class="fd-card__title-area">
                                <div class="fd-card__title" id="table-card-title-1" role="heading" aria-level="3">Table Card</div>
                            </div>
                        </div>
                    </div>
                    <div class="fd-card__header-main-actions">
                        <span class="fd-object-status fd-card__counter">2 of 20</span>
                    </div>
                </div>
            </div>
            <div class="fd-card__content" role="group" aria-roledescription="Card Content">
                <table class="fd-table fd-table--no-horizontal-borders fd-table--no-vertical-borders fd-table--no-outer-border fd-table--top-border">
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
                            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                                <i role="presentation" class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow"></i>
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
                            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                                <i role="presentation" class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow"></i>
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
                            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                                <i role="presentation" class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div class="fd-fixed-card-layout__card">
        <div class="fd-card" role="region" aria-label="List Card Example 3">
            <div class="fd-card__header" role="group" aria-roledescription="Card Header" aria-labelledby="list-card-title-3">
                <div class="fd-card__header-main">
                    <div class="fd-card__header-main-container">
                        <div class="fd-card__header-text">
                            <div class="fd-card__title-area">
                                <div class="fd-card__title" id="list-card-title-3" role="heading" aria-level="3">Quick Links</div>
                            </div>
                        </div>
                    </div>
                    <div class="fd-card__header-main-actions">
                        <span class="fd-object-status fd-card__counter">2 of 20</span>
                    </div>
                </div>
            </div>
            <div class="fd-card__content" role="group" aria-roledescription="Card Content">
                <ul class="fd-list fd-list--no-border" role="list">
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--cart"></i>
                        <span class="fd-list__title">List item 1</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--wrench"></i>
                        <span class="fd-list__title">List item 2</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--leads"></i>
                        <span class="fd-list__title">List item 3</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--batch-payments"></i>
                        <span class="fd-list__title">List item 4</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="fd-fixed-card-layout__card">
        <div class="fd-card" role="region" aria-label="List Card Example 4">
            <div class="fd-card__header" role="group" aria-roledescription="Card Header" aria-labelledby="list-card-title-4">
                <div class="fd-card__header-main">
                    <div class="fd-card__header-main-container">
                        <div class="fd-card__header-text">
                            <div class="fd-card__title-area">
                                <div class="fd-card__title" id="list-card-title-4" role="heading" aria-level="3">Quick Links</div>
                            </div>
                        </div>
                    </div>
                    <div class="fd-card__header-main-actions">
                        <span class="fd-object-status fd-card__counter">2 of 20</span>
                    </div>
                </div>
            </div>
            <div class="fd-card__content" role="group" aria-roledescription="Card Content">
                <ul class="fd-list fd-list--no-border" role="list">
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--cart"></i>
                        <span class="fd-list__title">List item 1</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--wrench"></i>
                        <span class="fd-list__title">List item 2</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--leads"></i>
                        <span class="fd-list__title">List item 3</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--batch-payments"></i>
                        <span class="fd-list__title">List item 4</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--retail-store"></i>
                        <span class="fd-list__title">List item 5</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--travel-expense"></i>
                        <span class="fd-list__title">List item 6</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--lead"></i>
                        <span class="fd-list__title">List item 7</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--laptop"></i>
                        <span class="fd-list__title">List item 8</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--log"></i>
                        <span class="fd-list__title">List item 9</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="fd-fixed-card-layout__card">
        <div class="fd-card fd-card--object" role="region" aria-label="Object Card Example 2">
            <div class="fd-card__header" role="group" aria-roledescription="Card Header" aria-labelledby="object-card-title-2">
                <div class="fd-card__header-main">
                    <div class="fd-card__header-main-container" role="button" tabindex="0">
                        <span
                            class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail fd-card__avatar"

                            role="img"
                            aria-label="John Doe">
                        </span>
                        <div class="fd-card__header-text">
                            <div class="fd-card__title-area">
                                <div class="fd-card__title" id="object-card-title-2" role="heading" aria-level="3">Card Title</div>
                            </div>
                            <div class="fd-card__subtitle-area">
                                <div class="fd-card__subtitle">Card Subtitle</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-card__content" role="group" aria-roledescription="Card Content">
                <div class="fd-card__content-container">
                    <div class="fd-card__content-section">
                        <div class="fd-card__content-title-container">Group Title 1</div>
                        <div class="fd-card__content-group">
                            <div class="fd-card__content-group-text">
                                <span>Label</span>
                                <span>Text</span>
                            </div>
                        </div>
                        <div class="fd-card__content-group">
                            <div class="fd-card__content-group-text">
                                <span>Label</span>
                                <span>Text</span>
                            </div>
                        </div>
                        <div class="fd-card__content-group">
                            <div class="fd-card__content-group-text">
                                <span>Label</span>
                                <span>Text</span>
                            </div>
                        </div>
                    </div>
                    <div class="fd-card__content-section">
                        <div class="fd-card__content-title-container">Group Title 2</div>
                        <div class="fd-card__content-group">
                            <div class="fd-card__content-group-text">
                                <span>Label</span>
                                <span>Text</span>
                            </div>
                        </div>
                        <div class="fd-card__content-group">
                            <div class="fd-card__content-group-text">
                                <span>Label</span>
                                <span>Text</span>
                            </div>
                        </div>
                        <div class="fd-card__content-group">
                            <div class="fd-card__content-group-text">
                                <span>Label Only</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="fd-fixed-card-layout__card">
        <div class="fd-card" role="region" aria-label="List Card Example 5">
            <div class="fd-card__header" role="group" aria-roledescription="Card Header" aria-labelledby="list-card-title-5">
                <div class="fd-card__header-main">
                    <div class="fd-card__header-main-container">
                        <div class="fd-card__header-text">
                            <div class="fd-card__title-area">
                                <div class="fd-card__title" id="list-card-title-5" role="heading" aria-level="3">Quick Links</div>
                            </div>
                        </div>
                    </div>
                    <div class="fd-card__header-main-actions">
                        <span class="fd-object-status fd-card__counter">2 of 20</span>
                    </div>
                </div>
            </div>
            <div class="fd-card__content" role="group" aria-roledescription="Card Content">
                <ul class="fd-list fd-list--no-border" role="list">
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--cart"></i>
                        <span class="fd-list__title">List item 1</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--wrench"></i>
                        <span class="fd-list__title">List item 2</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--leads"></i>
                        <span class="fd-list__title">List item 3</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--batch-payments"></i>
                        <span class="fd-list__title">List item 4</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--retail-store"></i>
                        <span class="fd-list__title">List item 5</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--travel-expense"></i>
                        <span class="fd-list__title">List item 6</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="fd-fixed-card-layout__card">
        <div class="fd-card fd-card--table" role="region" aria-label="Table Card Example 2">
            <div class="fd-card__header" role="group" aria-roledescription="Card Header" aria-labelledby="table-card-title-2">
                <div class="fd-card__header-main">
                    <div class="fd-card__header-main-container" role="button" tabindex="0">
                        <div class="fd-card__header-text">
                            <div class="fd-card__title-area">
                                <div class="fd-card__title" id="table-card-title-2" role="heading" aria-level="3">Table Card</div>
                            </div>
                        </div>
                    </div>
                    <div class="fd-card__header-main-actions">
                        <span class="fd-object-status fd-card__counter">2 of 20</span>
                    </div>
                </div>
            </div>
            <div class="fd-card__content" role="group" aria-roledescription="Card Content">
                <table class="fd-table fd-table--no-horizontal-borders fd-table--no-vertical-borders fd-table--no-outer-border fd-table--top-border">
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
                            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                                <i role="presentation" class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow"></i>
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
                            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                                <i role="presentation" class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow"></i>
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
                            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                                <i role="presentation" class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-card--object` | Style variant |
| `fd-card--table` | Style variant |

## BEM Elements

This component uses the following BEM elements:

- `fd-card__avatar`
- `fd-card__content`
- `fd-card__content-container`
- `fd-card__content-group`
- `fd-card__content-group-text`
- `fd-card__content-section`
- `fd-card__content-title-container`
- `fd-card__counter`
- `fd-card__header`
- `fd-card__header-main`
- `fd-card__header-main-actions`
- `fd-card__header-main-container`
- `fd-card__header-text`
- `fd-card__subtitle`
- `fd-card__subtitle-area`
- `fd-card__title`
- `fd-card__title-area`

## Related Components

This component works with or depends on:

- `avatar`
- `card`
- `checkbox`
- `fixed-card-layout`
- `icon`
- `list`
- `numeric-content`
- `object-status`
- `table`

## Design Tokens

Key CSS variables used by this component:

- `--analytical`
- `--banner`
- `--bg-legend-`
- `--bg-shell-`
- `--bottom-aligned`
- `--fdCard_Background`
- `--fdCard_Border`
- `--fdCard_Border_Corner_Radius`
- `--fdCard_Box_Shadow`
- `--fdCard_Box_Shadow_Hover`
- `--fdCard_Box_Shadow_Regular`
- `--fdCard_Content_Border_Radius`
- `--fdCard_Counter_Margin`
- `--fdCard_Focus_Outline_Offset`
- `--fdCard_Focus_Outline_Radius`

*...and 5 more*

## Examples

### Fixed card layout with 3 columns

Cards arrangement in a 3 column layout.
* Use \

```html
<div class="fd-fixed-card-layout__card-layout fd-fixed-card-layout__card-layout--columns-3" >
    <div class="fd-fixed-card-layout__card">
        <div class="fd-card" role="region" aria-label="List Card Example 1">
            <div class="fd-card__header" role="group" aria-roledescription="Card Header" aria-labelledby="list-card-title-1">
                <div class="fd-card__header-main">
                    <div class="fd-card__header-main-container">
                        <div class="fd-card__header-text">
                            <div class="fd-card__title-area">
                                <div class="fd-card__title" id="list-card-title-1" role="heading" aria-level="3">Quick Links</div>
                            </div>
                        </div>
                    </div>
                    <div class="fd-card__header-main-actions">
                        <span class="fd-object-status fd-card__counter">2 of 20</span>
                    </div>
                </div>
            </div>
            <div class="fd-card__content" role="group" aria-roledescription="Card Content">
                <ul class="fd-list fd-list--no-border" role="list">
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--cart"></i>
                        <span class="fd-list__title">List item 1</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--wrench"></i>
                        <span class="fd-list__title">List item 2</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--leads"></i>
                        <span class="fd-list__title">List item 3</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--batch-payments"></i>
                        <span class="fd-list__title">List item 4</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--retail-store"></i>
                        <span class="fd-list__title">List item 5</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--travel-expense"></i>
                        <span class="fd-list__title">List item 6</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="fd-fixed-card-layout__card">
        <div class="fd-card fd-card--object" role="region" aria-label="Object Card Example 1">
            <div class="fd-card__header" role="group" aria-roledescription="Card Header" aria-labelledby="object-card-title-1">
                <div class="fd-card__header-main">
                    <div class="fd-card__header-main-container" role="button" tabindex="0">
                        <span
                            class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail fd-card__avatar"

                            role="img"
                            aria-label="John Doe">
                        </span>
                        <div class="fd-card__header-text">
                            <div class="fd-card__title-area">
                                <div class="fd-card__title" id="object-card-title-1" role="heading" aria-level="3">Card Title</div>
                            </div>
                            <div class="fd-card__subtitle-area">
                                <div class="fd-card__subtitle">Card Subtitle</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-card__content" role="group" aria-roledescription="Card Content">
                <div class="fd-card__content-container">
                    <div class="fd-card__content-section">
                        <div class="fd-card__content-title-container">Group Title 1</div>
                        <div class="fd-card__content-group">
                            <div class="fd-card__content-group-text">
                                <span>Label</span>
                                <span>Text</span>
                            </div>
                        </div>
                        <div class="fd-card__content-group">
                            <div class="fd-card__content-group-text">
                                <span>Label</span>
                                <span>Text</span>
                            </div>
                        </div>
                        <div class="fd-card__content-group">
                            <div class="fd-card__content-group-text">
                                <span>Label</span>
                                <span>Text</span>
                            </div>
                        </div>
                    </div>
                    <div class="fd-card__content-section">
                        <div class="fd-card__content-title-container">Group Title 2</div>
                        <div class="fd-card__content-group">
                            <div class="fd-card__content-group-text">
                                <span>Label</span>
                                <span>Text</span>
                            </div>
                        </div>
                        <div class="fd-card__content-group">
                            <div class="fd-card__content-group-text">
                                <span>Label</span>
                                <span>Text</span>
                            </div>
                        </div>
                        <div class="fd-card__content-group">
                            <div class="fd-card__content-group-text">
                                <span>Label Only</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="fd-fixed-card-layout__card">
        <div class="fd-card" role="region" aria-label="List Card Example 2">
            <div class="fd-card__header" role="group" aria-roledescription="Card Header" aria-labelledby="list-card-title-2">
                <div class="fd-card__header-main">
                    <div class="fd-card__header-main-container">
                        <div class="fd-card__header-text">
                            <div class="fd-card__title-area">
                                <div class="fd-card__title" id="list-card-title-2" role="heading" aria-level="3">Quick Links</div>
                            </div>
                        </div>
                    </div>
                    <div class="fd-card__header-main-actions">
                        <span class="fd-object-status fd-card__counter">2 of 20</span>
                    </div>
                </div>
            </div>
            <div class="fd-card__content" role="group" aria-roledescription="Card Content">
                <ul class="fd-list fd-list--no-border" role="list">
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--cart"></i>
                        <span class="fd-list__title">List item 1</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--wrench"></i>
                        <span class="fd-list__title">List item 2</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--leads"></i>
                        <span class="fd-list__title">List item 3</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--batch-payments"></i>
                        <span class="fd-list__title">List item 4</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--retail-store"></i>
                        <span class="fd-list__title">List item 5</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--travel-expense"></i>
                        <span class="fd-list__title">List item 6</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="fd-fixed-card-layout__card">
        <div class="fd-card fd-card--table" role="region" aria-label="Table Card Example 1">
            <div class="fd-card__header" role="group" aria-roledescription="Card Header" aria-labelledby="table-card-title-1">
                <div class="fd-card__header-main">
                    <div class="fd-card__header-main-container" role="button" tabindex="0">
                        <div class="fd-card__header-text">
                            <div class="fd-card__title-area">
                                <div class="fd-card__title" id="table-card-title-1" role="heading" aria-level="3">Table Card</div>
                            </div>
                        </div>
                    </div>
                    <div class="fd-card__header-main-actions">
                        <span class="fd-object-status fd-card__counter">2 of 20</span>
                    </div>
                </div>
            </div>
            <div class="fd-card__content" role="group" aria-roledescription="Card Content">
                <table class="fd-table fd-table--no-horizontal-borders fd-table--no-vertical-borders fd-table--no-outer-border fd-table--top-border">
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
                            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                                <i role="presentation" class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow"></i>
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
                            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                                <i role="presentation" class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow"></i>
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
                            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                                <i role="presentation" class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div class="fd-fixed-card-layout__card">
        <div class="fd-card" role="region" aria-label="List Card Example 3">
            <div class="fd-card__header" role="group" aria-roledescription="Card Header" aria-labelledby="list-card-title-3">
                <div class="fd-card__header-main">
                    <div class="fd-card__header-main-container">
                        <div class="fd-card__header-text">
                            <div class="fd-card__title-area">
                                <div class="fd-card__title" id="list-card-title-3" role="heading" aria-level="3">Quick Links</div>
                            </div>
                        </div>
                    </div>
                    <div class="fd-card__header-main-actions">
                        <span class="fd-object-status fd-card__counter">2 of 20</span>
                    </div>
                </div>
            </div>
            <div class="fd-card__content" role="group" aria-roledescription="Card Content">
                <ul class="fd-list fd-list--no-border" role="list">
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--cart"></i>
                        <span class="fd-list__title">List item 1</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--wrench"></i>
                        <span class="fd-list__title">List item 2</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--leads"></i>
                        <span class="fd-list__title">List item 3</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--batch-payments"></i>
                        <span class="fd-list__title">List item 4</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="fd-fixed-card-layout__card">
        <div class="fd-card" role="region" aria-label="List Card Example 4">
            <div class="fd-card__header" role="group" aria-roledescription="Card Header" aria-labelledby="list-card-title-4">
                <div class="fd-card__header-main">
                    <div class="fd-card__header-main-container">
                        <div class="fd-card__header-text">
                            <div class="fd-card__title-area">
                                <div class="fd-card__title" id="list-card-title-4" role="heading" aria-level="3">Quick Links</div>
                            </div>
                        </div>
                    </div>
                    <div class="fd-card__header-main-actions">
                        <span class="fd-object-status fd-card__counter">2 of 20</span>
                    </div>
                </div>
            </div>
            <div class="fd-card__content" role="group" aria-roledescription="Card Content">
                <ul class="fd-list fd-list--no-border" role="list">
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--cart"></i>
                        <span class="fd-list__title">List item 1</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--wrench"></i>
                        <span class="fd-list__title">List item 2</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--leads"></i>
                        <span class="fd-list__title">List item 3</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--batch-payments"></i>
                        <span class="fd-list__title">List item 4</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--retail-store"></i>
                        <span class="fd-list__title">List item 5</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--travel-expense"></i>
                        <span class="fd-list__title">List item 6</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--lead"></i>
                        <span class="fd-list__title">List item 7</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--laptop"></i>
                        <span class="fd-list__title">List item 8</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--log"></i>
                        <span class="fd-list__title">List item 9</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="fd-fixed-card-layout__card">
        <div class="fd-card fd-card--object" role="region" aria-label="Object Card Example 2">
            <div class="fd-card__header" role="group" aria-roledescription="Card Header" aria-labelledby="object-card-title-2">
                <div class="fd-card__header-main">
                    <div class="fd-card__header-main-container" role="button" tabindex="0">
                        <span
                            class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail fd-card__avatar"

                            role="img"
                            aria-label="John Doe">
                        </span>
                        <div class="fd-card__header-text">
                            <div class="fd-card__title-area">
                                <div class="fd-card__title" id="object-card-title-2" role="heading" aria-level="3">Card Title</div>
                            </div>
                            <div class="fd-card__subtitle-area">
                                <div class="fd-card__subtitle">Card Subtitle</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-card__content" role="group" aria-roledescription="Card Content">
                <div class="fd-card__content-container">
                    <div class="fd-card__content-section">
                        <div class="fd-card__content-title-container">Group Title 1</div>
                        <div class="fd-card__content-group">
                            <div class="fd-card__content-group-text">
                                <span>Label</span>
                                <span>Text</span>
                            </div>
                        </div>
                        <div class="fd-card__content-group">
                            <div class="fd-card__content-group-text">
                                <span>Label</span>
                                <span>Text</span>
                            </div>
                        </div>
                        <div class="fd-card__content-group">
                            <div class="fd-card__content-group-text">
                                <span>Label</span>
                                <span>Text</span>
                            </div>
                        </div>
                    </div>
                    <div class="fd-card__content-section">
                        <div class="fd-card__content-title-container">Group Title 2</div>
                        <div class="fd-card__content-group">
                            <div class="fd-card__content-group-text">
                                <span>Label</span>
                                <span>Text</span>
                            </div>
                        </div>
                        <div class="fd-card__content-group">
                            <div class="fd-card__content-group-text">
                                <span>Label</span>
                                <span>Text</span>
                            </div>
                        </div>
                        <div class="fd-card__content-group">
                            <div class="fd-card__content-group-text">
                                <span>Label Only</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="fd-fixed-card-layout__card">
        <div class="fd-card" role="region" aria-label="List Card Example 5">
            <div class="fd-card__header" role="group" aria-roledescription="Card Header" aria-labelledby="list-card-title-5">
                <div class="fd-card__header-main">
                    <div class="fd-card__header-main-container">
                        <div class="fd-card__header-text">
                            <div class="fd-card__title-area">
                                <div class="fd-card__title" id="list-card-title-5" role="heading" aria-level="3">Quick Links</div>
                            </div>
                        </div>
                    </div>
                    <div class="fd-card__header-main-actions">
                        <span class="fd-object-status fd-card__counter">2 of 20</span>
                    </div>
                </div>
            </div>
            <div class="fd-card__content" role="group" aria-roledescription="Card Content">
                <ul class="fd-list fd-list--no-border" role="list">
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--cart"></i>
                        <span class="fd-list__title">List item 1</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--wrench"></i>
                        <span class="fd-list__title">List item 2</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--leads"></i>
                        <span class="fd-list__title">List item 3</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--batch-payments"></i>
                        <span class="fd-list__title">List item 4</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--retail-store"></i>
                        <span class="fd-list__title">List item 5</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--travel-expense"></i>
                        <span class="fd-list__title">List item 6</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="fd-fixed-card-layout__card">
        <div class="fd-card fd-card--table" role="region" aria-label="Table Card Example 2">
            <div class="fd-card__header" role="group" aria-roledescription="Card Header" aria-labelledby="table-card-title-2">
                <div class="fd-card__header-main">
                    <div class="fd-card__header-main-container" role="button" tabindex="0">
                        <div class="fd-card__header-text">
                            <div class="fd-card__title-area">
                                <div class="fd-card__title" id="table-card-title-2" role="heading" aria-level="3">Table Card</div>
                            </div>
                        </div>
                    </div>
                    <div class="fd-card__header-main-actions">
                        <span class="fd-object-status fd-card__counter">2 of 20</span>
                    </div>
                </div>
            </div>
            <div class="fd-card__content" role="group" aria-roledescription="Card Content">
                <table class="fd-table fd-table--no-horizontal-borders fd-table--no-vertical-borders fd-table--no-outer-border fd-table--top-border">
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
                            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                                <i role="presentation" class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow"></i>
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
                            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                                <i role="presentation" class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow"></i>
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
                            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                                <i role="presentation" class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
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

This documentation was automatically generated from: `packages/styles/stories/Layouts/fixed-card-layout/fixed-card-layout.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
