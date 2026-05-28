---
component: fd-input-group
title: Components/Cx Side Navigation
category: Components
selector: fd-input-group
cssFile: input-group.css
sourcePath: packages/cx/stories/Components/cx-side-navigation/cx-side-navigation.stories.js
tags: ["cx","theme"]
dependencies: ["side-nav"]
relatedComponents: ["side-nav"]
stability: stable
generatedAt: 2026-05-28T16:47:21.276Z
---

# Components/Cx Side Navigation

The Side Navigation can display structures of up to three levels.
<br><br>In the <code>Wide</code> variant:
- The first levels always shows an icon
- If first-level items have children, they show the expand/collapse arrows
- Second level items do not display an icon and are not indented
- If second-level items have children, they show the expand/collapse arrows
- Third level items do not display an icon and are indented by 2 rem (32px)

<br>
In the <code>Narrow</code> variant:
- The first levels always shows an icon
- If first-level items have children, they show the expand/collapse arrows
- If first-level items have children, and they are clicked, the popover displays the First-level item in bold letters, then the second level items in regular.
- Second level items do not display an icon and are not indented
- If second-level items have children, they show the expand/collapse arrows
- Third level items do not display an icon and are indented by 2 rem (32px)

## Dependencies

This component depends on the following CSS files:

- `side-nav.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/input-group.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/side-nav.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fdx-side-nav">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Home</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link is-selected" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--unfavorite"></i>
                        <span class="fdx-nested-list__title">Favorites</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--account"></i>
                        <span class="fdx-nested-list__title">Customer Management</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--crm-sales"></i>
                        <span class="fdx-nested-list__title">Sales</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--customer-view"></i>
                        <span class="fdx-nested-list__title">Products</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--marketing-campaign"></i>
                        <span class="fdx-nested-list__title">Marketing</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--manager-insight"></i>
                        <span class="fdx-nested-list__title">Reports</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--official-service"></i>
                        <span class="fdx-nested-list__title">Manufacturing</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--lead"></i>
                        <span class="fdx-nested-list__title">Cost</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--sys-help"></i>
                        <span class="fdx-nested-list__title">Help</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--customer-financial-fact-sheet"></i>
                        <span class="fdx-nested-list__title">Finance</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item fdx-nested-list__item--quick-create">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--add"></i>
                        <span class="fdx-nested-list__title">Quick Create</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Product Settings</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
```

## States

| Class | Description |
|-------|-------------|
| `is-selected` | Selected state |

## BEM Elements

This component uses the following BEM elements:

- `fd-input-group__addon`
- `fd-input-group__addon--button`
- `fd-input-group__button`
- `fd-input-group__input`

## Related Components

This component works with or depends on:

- `side-nav`

## Examples

### Cosy Wide With Icon, 1 Level

```html
<div class="fdx-side-nav">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Home</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link is-selected" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--unfavorite"></i>
                        <span class="fdx-nested-list__title">Favorites</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--account"></i>
                        <span class="fdx-nested-list__title">Customer Management</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--crm-sales"></i>
                        <span class="fdx-nested-list__title">Sales</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--customer-view"></i>
                        <span class="fdx-nested-list__title">Products</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--marketing-campaign"></i>
                        <span class="fdx-nested-list__title">Marketing</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--manager-insight"></i>
                        <span class="fdx-nested-list__title">Reports</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--official-service"></i>
                        <span class="fdx-nested-list__title">Manufacturing</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--lead"></i>
                        <span class="fdx-nested-list__title">Cost</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--sys-help"></i>
                        <span class="fdx-nested-list__title">Help</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--customer-financial-fact-sheet"></i>
                        <span class="fdx-nested-list__title">Finance</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item fdx-nested-list__item--quick-create">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--add"></i>
                        <span class="fdx-nested-list__title">Quick Create</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Product Settings</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
```

### Cosy Wide Text Only, 1 Level

<b>Important: </b>This type of Side Navigation does not have <code>Narrow</code> variant.

```html
<div class="fdx-side-nav">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list fdx-nested-list--text-only level-1" aria-label="Main Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link is-selected" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>

        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list fdx-nested-list--text-only level-1" aria-label="Utility Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
```

### Cosy Narrow Popover with Dynamic Width

Side Navigation can react dynamically to long label texts in navigational items. In such case the width of the Side Navigation is adapted by the longest label. The label does not wrap or truncate. Use the modifier class <code>.fdx-side-nav--dynamic-width</code> for Side Navigation with dynamic width.

```html
<div class="fdx-side-nav fdx-side-nav--dynamic-width">
    <nav class="fdx-side-nav__main-navigation fd-scrollbar" aria-label="Main Menu">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Overview</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link is-selected" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--employee"></i>
                        <span class="fdx-nested-list__title">Sed do eiusmod tempor incididunt ut labore</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Nemo enim ipsam</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--lightbulb"></i>
                        <span class="fdx-nested-list__title">Neque porro quisquam est, qui dolorem ipsum</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--history"></i>
                        <span class="fdx-nested-list__title">Quis autem vel eum iure</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--future"></i>
                        <span class="fdx-nested-list__title">Excepteur sint occaecat cupidatat</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Ut enim ad minima veniam</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--lead"></i>
                        <span class="fdx-nested-list__title">Neque porro quisquam</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--notes"></i>
                        <span class="fdx-nested-list__title">Excepteur sint occaecat cupidatat</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Neque porro quisquam</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--log"></i>
                        <span class="fdx-nested-list__title">Ut enim ad minima veniam</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--phone"></i>
                        <span class="fdx-nested-list__title">Excepteur sint occaecat cupidatat</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--product"></i>
                        <span class="fdx-nested-list__title">Ut enim ad minima veniam</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Duis aute irure dolor </span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Neque porro quisquam</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
```

### Cosy Wide Text Only, 3 Levels

<b>Important: </b>This type of Side Navigation does not have <code>Narrow</code> variant.

```html
<div class="fdx-side-nav">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list fdx-nested-list--text-only level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <button class="fdx-nested-list__link" aria-expanded="true" aria-label="Expand Level 2">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                        <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                    </div>
                </button>
                <ul class="fdx-nested-list level-2" aria-hidden="false">
                    <li class="fdx-nested-list__item">
                        <button class="fdx-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                                <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                            </div>
                        </button>
                        <ul class="fdx-nested-list level-3" aria-hidden="false">
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link is-selected" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 3 Item</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list fdx-nested-list--text-only level-1" aria-label="Utility Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
```

### Cosy Wide With Icons, 3 Levels, Collapse Only

```html
<div class="fdx-side-nav">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list level-1" aria-labelledby="EX400H1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <button class="fdx-nested-list__link" aria-expanded="true" aria-label="Expand Level 2">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                        <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                    </div>
                </button>
                <ul class="fdx-nested-list level-2" aria-hidden="false">
                    <li class="fdx-nested-list__item">
                        <button class="fdx-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                                <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                            </div>
                        </button>
                        <ul class="fdx-nested-list level-3" aria-hidden="false">
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link is-selected" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list level-1" aria-label="Utility Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
```

### Cosy Wide With Icons, 3 Levels, Navigation and Collapse

```html
<div class="fdx-side-nav">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list level-1" aria-labelledby="EX400H1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <div class="fdx-nested-list__link" aria-expanded="true" aria-label="Expand Level 2">
                    <a class="fdx-nested-list__link-container" href="#">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </a>
                    <button class="fdx-nested-list__button">
                        <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
                    </button>
                </div>
                <ul class="fdx-nested-list level-2" aria-hidden="false">
                    <li class="fdx-nested-list__item">
                        <div class="fdx-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                            <a class="fdx-nested-list__link-container" href="#">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </a>
                            <button class="fdx-nested-list__button">
                                <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
                            </button>
                        </div>
                        <ul class="fdx-nested-list level-3" aria-hidden="false">
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link is-selected" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list level-1" aria-label="Utility Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
```

### Compact Wide With Icons, Level 2 Collapsed

For compact Side Navigation apply the <code>.fdx-side-nav--compact</code> modifier class with <code>.fdx-side-nav</code> base class, and <code>.fdx-nested-list--compact</code> modifier class with <code>.fdx-nested-list</code> base class.

```html
<div class="fdx-side-nav fdx-side-nav--compact">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list fdx-nested-list--compact level-1" aria-labelledby="EX500H1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <button class="fdx-nested-list__link is-selected" aria-expanded="false" aria-label="Expand Level 2">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                        <i class="fdx-nested-list__arrow sap-icon--navigation-right-arrow" role="presentation"></i>
                    </div>
                </button>

                <ul class="fdx-nested-list level-2" aria-hidden="true">
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list fdx-nested-list--compact level-1" aria-label="Utility Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
```

### Compact Wide With Icons, Level 2 Collapsed, Navigation and Collapse

For compact Side Navigation apply the <code>.fdx-side-nav--compact</code> modifier class with <code>.fdx-side-nav</code> base class, and <code>.fdx-nested-list--compact</code> modifier class with <code>.fdx-nested-list</code> base class.

```html
<div class="fdx-side-nav fdx-side-nav--compact">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list fdx-nested-list--compact level-1" aria-labelledby="EX500H1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <div class="fdx-nested-list__link is-selected" aria-expanded="false" aria-label="Expand Level 2">
                    <a class="fdx-nested-list__link-container" href="#">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </a>
                    <button class="fdx-nested-list__button">
                        <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                    </button>
                </div>

                <ul class="fdx-nested-list level-2" aria-hidden="true">
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list fdx-nested-list--compact level-1" aria-label="Utility Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
```

### Cosy Narrow, Levels 2 and 3 in Popover Hidden

For <code>Narrow</code> variant of Side Navigation apply <code>.fdx-side-nav--narrow</code> modifier class to <code>.fdx-side-nav</code> base class.

```html
<script>
    const togglerButton = document.getElementById("navigation_toggler");

    togglerButton.addEventListener("click", () => {
    const navigation = document.getElementById("narrow_navigation");
    let shouldExpand = navigation.classList.contains("fdx-side-nav--narrow");

    if (shouldExpand) {
    navigation.classList.remove("fdx-side-nav--narrow");
    } else {
    navigation.classList.add("fdx-side-nav--narrow");
    }

    setTimeout(() => {
    if (shouldExpand) {
    navigation.classList.remove("fdx-side-nav--narrow-animated-items");
    } else {
    navigation.classList.add("fdx-side-nav--narrow-animated-items");
    }
    }, shouldExpand ? 200 : 0);
    });
</script>

<button class="fd-button" id="navigation_toggler">Toggle navigation narrow state</button>

<div class="fdx-side-nav fdx-side-nav--narrow fdx-side-nav--narrow-animated-items" id="narrow_navigation">
    <nav class="fdx-side-nav__main-navigation">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item fd-popover">
                <button class="fdx-nested-list__link fd-popover__control is-selected" aria-expanded="false" aria-label="Expand Level 2">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item with some long text to display line wrapping</span>
                        <i class="fdx-nested-list__arrow sap-icon--navigation-right-arrow" role="presentation"></i>
                    </div>
                </button>
            </li>

            <li class="fdx-nested-list__item fd-popover">
                <div class="fdx-nested-list__link fd-popover__control" aria-expanded="false" aria-label="Expand Level 2">
                    <a class="fdx-nested-list__link-container" href="#">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </a>
                    <button class="fdx-nested-list__button">
                        <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                    </button>
                </div>
            </li>

            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--bar-chart"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
```

### Cosy Narrow with Vertical Overflow Behaviour, Levels 2 and 3 in Popover Hidden

```html
<div class="fdx-side-nav fdx-side-nav--narrow">
    <nav class="fdx-side-nav__main-navigation">
        <button class="fd-button fd-button--standard fdx-side-nav__button" aria-label="Move up"><i class="sap-icon--navigation-up-arrow"></i></button>
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item fd-popover">
                <button class="fdx-nested-list__link fd-popover__control is-selected" aria-expanded="false" aria-label="Expand Level 2">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                        <i class="fdx-nested-list__arrow sap-icon--navigation-right-arrow" role="presentation"></i>
                    </div>
                </button>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--bar-chart"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
        <button class="fd-button fd-button--standard fdx-side-nav__button" aria-label="Move up"><i class="sap-icon--navigation-down-arrow"></i></button>
    </nav>
    <nav class="fdx-side-nav__utility">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
```

### CosyNarrowPopover

```html
<h3>Level 1 Header</h3>
<div class="fd-popover">
    <div class="fd-popover__control">

        <nav class="fdx-side-nav__popover-body fd-popover__body fd-popover__body--no-arrow"">
            <ul class="fdx-nested-list level-2">
                <li class="fdx-nested-list__item fdx-nested-list__item--header">
                    <h3 class="fdx-nested-list__link">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Sales</span>
                        </div>
                    </h3>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <button class="fdx-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                            <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                        </div>
                    </button>
                    <ul class="fdx-nested-list level-3" aria-hidden="false">
                        <li class="fdx-nested-list__item">
                            <a class="fdx-nested-list__link" href="#">
                                <div class="fdx-nested-list__link-container">
                                    <span class="fdx-nested-list__title">Level 3 Item</span>
                                </div>
                            </a>
                        </li>
                        <li class="fdx-nested-list__item">
                            <a class="fdx-nested-list__link" href="#">
                                <div class="fdx-nested-list__link-container">
                                    <span class="fdx-nested-list__title">Level 3 Item</span>
                                </div>
                            </a>
                        </li>
                        <li class="fdx-nested-list__item">
                            <a class="fdx-nested-list__link" href="#">
                                <div class="fdx-nested-list__link-container">
                                    <span class="fdx-nested-list__title">Level 3 Item</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>

<h3>Level 1 Navigation</h3>
<div class="fd-popover">
    <div class="fd-popover__control">

        <nav class="fdx-side-nav__popover-body fd-popover__body fd-popover__body--no-arrow"">
            <ul class="fdx-nested-list level-2">
                <li class="fdx-nested-list__item fdx-nested-list__item--header">
                    <a class="fdx-nested-list__link">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Sales</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <button class="fdx-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                            <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                        </div>
                    </button>
                    <ul class="fdx-nested-list level-3" aria-hidden="false">
                        <li class="fdx-nested-list__item">
                            <a class="fdx-nested-list__link" href="#">
                                <div class="fdx-nested-list__link-container">
                                    <span class="fdx-nested-list__title">Level 3 Item</span>
                                </div>
                            </a>
                        </li>
                        <li class="fdx-nested-list__item">
                            <a class="fdx-nested-list__link" href="#">
                                <div class="fdx-nested-list__link-container">
                                    <span class="fdx-nested-list__title">Level 3 Item</span>
                                </div>
                            </a>
                        </li>
                        <li class="fdx-nested-list__item">
                            <a class="fdx-nested-list__link" href="#">
                                <div class="fdx-nested-list__link-container">
                                    <span class="fdx-nested-list__title">Level 3 Item</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>
```

### Cosy Narrow Popover with Dynamic Width

Side Navigation Popover can react dynamically to long label texts in navigational items. In such case the width of the Side Navigation Popover is adapted by the longest label. The label does not wrap or truncate. Use the modifier class <code>.fdx-side-nav__popover-body--dynamic-width</code> modifier class with <code>.fdx-side-nav__popover-body</code> base class for Side Navigation Popover with dynamic width.

```html
<div class="fd-popover">
    <div class="fd-popover__control">

        <nav class="fdx-side-nav__popover-body fdx-side-nav__popover-body--dynamic-width fd-popover__body fd-popover__body--no-arrow"">
            <ul class="fdx-nested-list level-2">
                <li class="fdx-nested-list__item fdx-nested-list__item--header">
                    <h3 class="fdx-nested-list__link">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Sales</span>
                        </div>
                    </h3>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <button class="fdx-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                            <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                        </div>
                    </button>
                    <ul class="fdx-nested-list level-3" aria-hidden="false">
                        <li class="fdx-nested-list__item">
                            <a class="fdx-nested-list__link" href="#">
                                <div class="fdx-nested-list__link-container">
                                    <span class="fdx-nested-list__title">Level 3 Item</span>
                                </div>
                            </a>
                        </li>
                        <li class="fdx-nested-list__item">
                            <a class="fdx-nested-list__link" href="#">
                                <div class="fdx-nested-list__link-container">
                                    <span class="fdx-nested-list__title">Level 3 Item</span>
                                </div>
                            </a>
                        </li>
                        <li class="fdx-nested-list__item">
                            <a class="fdx-nested-list__link" href="#">
                                <div class="fdx-nested-list__link-container">
                                    <span class="fdx-nested-list__title">Level 3 Item</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>
```

### CompactNarrow

For <code>Narrow</code> variant of Side Navigation in compact mode apply <code>.fdx-side-nav--narrow</code> and <code>.fdx-side-nav--compact</code> modifier classed to <code>.fdx-side-nav</code> base class.

```html
<div class="fdx-side-nav fdx-side-nav--compact fdx-side-nav--narrow">
    <nav class="fdx-side-nav__main-navigation">
        <ul class="fdx-nested-list fdx-nested-list--compact level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item fd-popover">
                <button class="fdx-nested-list__link fd-popover__control is-selected" aria-expanded="false" aria-label="Expand Level 2">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                        <i class="fdx-nested-list__arrow sap-icon--navigation-right-arrow" role="presentation"></i>
                    </div>
                </button>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--bar-chart"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility">
        <ul class="fdx-nested-list fdx-nested-list--compact level-1" aria-label="Utility Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
```

### Compact Narrow with Vertical Overflow Behaviour, Levels 2 and 3 in Popover Hidden

```html
<div class="fdx-side-nav fdx-side-nav--compact fdx-side-nav--narrow">
    <nav class="fdx-side-nav__main-navigation">
        <button class="fd-button fd-button--standard fd-button--compact fdx-side-nav__button" aria-label="Move up"><i class="sap-icon--navigation-up-arrow"></i></button>
        <ul class="fdx-nested-list fdx-nested-list--compact level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item fd-popover">
                <button class="fdx-nested-list__link fd-popover__control is-selected" aria-expanded="false" aria-label="Expand Level 2">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                        <i class="fdx-nested-list__arrow sap-icon--navigation-right-arrow" role="presentation"></i>
                    </div>
                </button>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--bar-chart"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
        <button class="fd-button fd-button--standard fd-button--compact fdx-side-nav__button" aria-label="Move up"><i class="sap-icon--navigation-down-arrow"></i></button>
    </nav>
    <nav class="fdx-side-nav__utility">
        <ul class="fdx-nested-list fdx-nested-list--compact level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
```

### CompactNarrowPopover

```html
<div class="fd-popover">
    <div class="fd-popover__control">

        <nav class="fdx-side-nav__popover-body fd-popover__body fd-popover__body--no-arrow"">
            <ul class="fdx-nested-list fdx-nested-list--compact level-2">
                <li class="fdx-nested-list__item fdx-nested-list__item--header">
                    <h3 class="fdx-nested-list__link">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Sales</span>
                        </div>
                    </h3>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <button class="fdx-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                            <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                        </div>
                    </button>
                    <ul class="fdx-nested-list level-3" aria-hidden="false">
                        <li class="fdx-nested-list__item">
                            <a class="fdx-nested-list__link" href="#">
                                <div class="fdx-nested-list__link-container">
                                    <span class="fdx-nested-list__title">Level 3 Item</span>
                                </div>
                            </a>
                        </li>
                        <li class="fdx-nested-list__item">
                            <a class="fdx-nested-list__link" href="#">
                                <div class="fdx-nested-list__link-container">
                                    <span class="fdx-nested-list__title">Level 3 Item</span>
                                </div>
                            </a>
                        </li>
                        <li class="fdx-nested-list__item">
                            <a class="fdx-nested-list__link" href="#">
                                <div class="fdx-nested-list__link-container">
                                    <span class="fdx-nested-list__title">Level 3 Item</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>
```

### Cosy Wide With Icon and Filter Integration, 1 Level

```html
<div class="fdx-side-nav">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <div class="fd-input-group fdx-side-nav__input-group">
            <input class="fd-input fd-input-group__input" type="text" placeholder="Filter">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button class="fd-input-group__button fd-button fd-button--icon fd-button--transparent" aria-label="Search">
                    <i class="sap-icon--search"></i>
                </button>
            </span>
        </div>
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link is-selected" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--employee"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--lightbulb"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
```

### WrappingLongText

By default, side navigation will wrap long text into multiple lines if the width of the nav is not enough. Developers can modify this behaviour by adding <code>.fdx-side-nav--single-line</code> class modifier.

```html
<div class="fdx-side-nav">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item fdx-nested-list__item--group">
                <span class="fdx-nested-list__title">Group Header</span>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Overview</span>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link is-selected" href="#">
                        <div class="fdx-nested-list__link-container">
                            <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                            <span class="fdx-nested-list__title"
                                >Lorem ipsum dolor sit amet, consectetur adipiscing elit</span
                                >
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <i role="presentation" class="fdx-nested-list__icon sap-icon--employee"></i>
                                <span class="fdx-nested-list__title">Sed do eiusmod tempor incididunt ut labore</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                                <span class="fdx-nested-list__title">Nemo enim ipsam</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item fdx-nested-list__item--group">
                        <span class="fdx-nested-list__title">Group Header</span>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <i role="presentation" class="fdx-nested-list__icon sap-icon--lightbulb"></i>
                                <span class="fdx-nested-list__title">Neque porro quisquam est, qui dolorem ipsum</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <i role="presentation" class="fdx-nested-list__icon sap-icon--history"></i>
                                <span class="fdx-nested-list__title">Quis autem vel eum iure</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <i role="presentation" class="fdx-nested-list__icon sap-icon--future"></i>
                                <span class="fdx-nested-list__title">Excepteur sint occaecat cupidatat</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                                <span class="fdx-nested-list__title">Ut enim ad minima veniam</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <i role="presentation" class="fdx-nested-list__icon sap-icon--lead"></i>
                                <span class="fdx-nested-list__title">Neque porro quisquam</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <i role="presentation" class="fdx-nested-list__icon sap-icon--notes"></i>
                                <span class="fdx-nested-list__title">Excepteur sint occaecat cupidatat</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                                <span class="fdx-nested-list__title">Neque porro quisquam</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <i role="presentation" class="fdx-nested-list__icon sap-icon--log"></i>
                                <span class="fdx-nested-list__title">Ut enim ad minima veniam</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <i role="presentation" class="fdx-nested-list__icon sap-icon--phone"></i>
                                <span class="fdx-nested-list__title">Excepteur sint occaecat cupidatat</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <i role="presentation" class="fdx-nested-list__icon sap-icon--product"></i>
                                <span class="fdx-nested-list__title">Ut enim ad minima veniam</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
            <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
                <ul class="fdx-nested-list level-1">
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                                <span class="fdx-nested-list__title">Duis aute irure dolor </span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                                <span class="fdx-nested-list__title">Neque porro quisquam</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="fdx-side-nav fdx-side-nav--single-line">
            <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
                <ul class="fdx-nested-list level-1">
                    <li class="fdx-nested-list__item fdx-nested-list__item--group">
                        <span class="fdx-nested-list__title">Group Header</span>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                                <span class="fdx-nested-list__title">Overview</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link is-selected" href="#">
                            <div class="fdx-nested-list__link-container">
                                <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                                <span class="fdx-nested-list__title"
                                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit</span
                                    >
                                </div>
                            </a>
                        </li>
                        <li class="fdx-nested-list__item">
                            <a class="fdx-nested-list__link" href="#">
                                <div class="fdx-nested-list__link-container">
                                    <i role="presentation" class="fdx-nested-list__icon sap-icon--employee"></i>
                                    <span class="fdx-nested-list__title">Sed do eiusmod tempor incididunt ut labore</span>
                                </div>
                            </a>
                        </li>
                        <li class="fdx-nested-list__item">
                            <a class="fdx-nested-list__link" href="#">
                                <div class="fdx-nested-list__link-container">
                                    <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                                    <span class="fdx-nested-list__title">Nemo enim ipsam</span>
                                </div>
                            </a>
                        </li>
                        <li class="fdx-nested-list__item fdx-nested-list__item--group">
                            <span class="fdx-nested-list__title">Group Header</span>
                        </li>
                        <li class="fdx-nested-list__item">
                            <a class="fdx-nested-list__link" href="#">
                                <div class="fdx-nested-list__link-container">
                                    <i role="presentation" class="fdx-nested-list__icon sap-icon--lightbulb"></i>
                                    <span class="fdx-nested-list__title">Neque porro quisquam est, qui dolorem ipsum</span>
                                </div>
                            </a>
                        </li>
                        <li class="fdx-nested-list__item">
                            <a class="fdx-nested-list__link" href="#">
                                <div class="fdx-nested-list__link-container">
                                    <i role="presentation" class="fdx-nested-list__icon sap-icon--history"></i>
                                    <span class="fdx-nested-list__title">Quis autem vel eum iure</span>
                                </div>
                            </a>
                        </li>
                        <li class="fdx-nested-list__item">
                            <a class="fdx-nested-list__link" href="#">
                                <div class="fdx-nested-list__link-container">
                                    <i role="presentation" class="fdx-nested-list__icon sap-icon--future"></i>
                                    <span class="fdx-nested-list__title">Excepteur sint occaecat cupidatat</span>
                                </div>
                            </a>
                        </li>
                        <li class="fdx-nested-list__item">
                            <a class="fdx-nested-list__link" href="#">
                                <div class="fdx-nested-list__link-container">
                                    <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                                    <span class="fdx-nested-list__title">Ut enim ad minima veniam</span>
                                </div>
                            </a>
                        </li>
                        <li class="fdx-nested-list__item">
                            <a class="fdx-nested-list__link" href="#">
                                <div class="fdx-nested-list__link-container">
                                    <i role="presentation" class="fdx-nested-list__icon sap-icon--lead"></i>
                                    <span class="fdx-nested-list__title">Neque porro quisquam</span>
                                </div>
                            </a>
                        </li>
                        <li class="fdx-nested-list__item">
                            <a class="fdx-nested-list__link" href="#">
                                <div class="fdx-nested-list__link-container">
                                    <i role="presentation" class="fdx-nested-list__icon sap-icon--notes"></i>
                                    <span class="fdx-nested-list__title">Excepteur sint occaecat cupidatat</span>
                                </div>
                            </a>
                        </li>
                        <li class="fdx-nested-list__item">
                            <a class="fdx-nested-list__link" href="#">
                                <div class="fdx-nested-list__link-container">
                                    <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                                    <span class="fdx-nested-list__title">Neque porro quisquam</span>
                                </div>
                            </a>
                        </li>
                        <li class="fdx-nested-list__item">
                            <a class="fdx-nested-list__link" href="#">
                                <div class="fdx-nested-list__link-container">
                                    <i role="presentation" class="fdx-nested-list__icon sap-icon--log"></i>
                                    <span class="fdx-nested-list__title">Ut enim ad minima veniam</span>
                                </div>
                            </a>
                        </li>
                        <li class="fdx-nested-list__item">
                            <a class="fdx-nested-list__link" href="#">
                                <div class="fdx-nested-list__link-container">
                                    <i role="presentation" class="fdx-nested-list__icon sap-icon--phone"></i>
                                    <span class="fdx-nested-list__title">Excepteur sint occaecat cupidatat</span>
                                </div>
                            </a>
                        </li>
                        <li class="fdx-nested-list__item">
                            <a class="fdx-nested-list__link" href="#">
                                <div class="fdx-nested-list__link-container">
                                    <i role="presentation" class="fdx-nested-list__icon sap-icon--product"></i>
                                    <span class="fdx-nested-list__title">Ut enim ad minima veniam</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
                    <ul class="fdx-nested-list level-1">
                        <li class="fdx-nested-list__item">
                            <a class="fdx-nested-list__link" href="#">
                                <div class="fdx-nested-list__link-container">
                                    <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                                    <span class="fdx-nested-list__title">Duis aute irure dolor </span>
                                </div>
                            </a>
                        </li>
                        <li class="fdx-nested-list__item">
                            <a class="fdx-nested-list__link" href="#">
                                <div class="fdx-nested-list__link-container">
                                    <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                                    <span class="fdx-nested-list__title">Neque porro quisquam</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/cx/stories/Components/cx-side-navigation/cx-side-navigation.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
