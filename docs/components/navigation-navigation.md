---
component: fd-navigation
title: BTP/Navigation/Horizontal Navigation
category: BTP
selector: fd-navigation
cssFile: navigation.css
sourcePath: packages/styles/stories/BTP/Navigation/horizontal/navigation-horizontal.stories.js
tags: ["btp","horizon-only"]
dependencies: []
relatedComponents: []
stability: stable
generatedAt: 2026-05-28T20:12:00.959Z
---

# BTP/Navigation/Horizontal Navigation

The navigation is one of the signature design elements of BTP Tools.
## Navigation Types:
- <b>Vertical Navigation - Expanded</b>. The default navigation visualization provides a logical grouping of navigation items and two levels of hierarchy.
- <b>Vertical Navigation - Snapped</b>. The snapped vertical navigation variant reduces the navigation width to free horizontal space.
- <b>Vertical Navigation - Popup</b>. An alternative to the expanded/snapped variant, which places the navigation items in a popup.
- <b>Horizontal Navigation</b>&nbsp;- The horizontal variant allows for infinite levels of navigation hierarchy through cascading menus.


## Usage
### Recommended
- Use the navigation to switch between different pages of your tool.
- Use expanded vertical navigation for unknown users.
- Use persistence and display the last state the vertical navigation was in for know users.
- Use the snapped variant when the content area displays multi-column content relationships.
- Use the popup variant to display between 3 and 7 navigation items without hierarchy.
- Use the horizontal navigation variant to display more than two levels of hierarchy.
- Use nouns for the titles of navigation items.

### Not Recommended
- Avoid using the navigation for switching between tools. Use the mega menu instead.
- Avoid using the navigation to switch contexts or views. Use tabs or segmented buttons instead.
- Avoid using verbs for the titles of navigation items. Use nouns instead.
- Avoid using the Navigation Items for both navigation and groups. Use only one of the options.
- Avoid having more than three levels of hierarchy in the horizontal variant.
- Avoid using icons in secondary navigation and navigation groups.
- Avoid using spacers to separate navigation content. Use separators instead.
- Avoid using dividers to separate groups. Use separators instead.
- Avoid using the bottom navigation area for service information. Use settings and user menu instead.

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/navigation.css" rel="stylesheet">

```

## Basic Usage

```html
<nav
    class="fd-navigation fd-navigation--horizontal"
    aria-label="Horizontal Navigation">
    <div class="fd-navigation__container">
        <ul
            class="fd-navigation__list"
            role="menubar"
            aria-label="Horizontal Navigation"
            >
            <li role="none" tabindex="-1" class="fd-navigation__list-item fd-navigation__list-item--home" aria-hidden="true">
                <div
                    class="fd-navigation__item"
                    aria-current="page"
                    aria-selected="true"
                    aria-expanded="false"
                    role="menuitem"
                    >
                    <a class="fd-navigation__link" role="link" href="#">
                        <span class="fd-navigation__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
                        <span class="fd-navigation__text">Home</span>
                        <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                    </a>
                </li>

                <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                    <div
                        class="fd-navigation__item"
                        aria-current="false"
                        aria-expanded="false"
                        role="menuitem"
                        >
                        <a class="fd-navigation__link" role="link" href="#">
                            <span class="fd-navigation__icon sap-icon--calendar" role="presentation" aria-hidden="true"></span>
                            <span class="fd-navigation__text">Appointment</span>
                            <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                        </a>
                    </div>
                </li>

                <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                    <div
                        class="fd-navigation__item"
                        aria-current="false"
                        aria-expanded="false"
                        role="menuitem"
                        >
                        <a class="fd-navigation__link" role="link" href="#">
                            <span class="fd-navigation__icon sap-icon--database" role="presentation" aria-hidden="true"></span>
                            <span class="fd-navigation__text">Data</span>
                            <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                        </a>
                    </li>

                    <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            aria-current="false"
                            aria-expanded="false"
                            role="menuitem"
                            >
                            <a class="fd-navigation__link" role="link" href="#">
                                <span class="fd-navigation__icon sap-icon--attachment" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Attachment</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                            </a>
                        </li>

                        <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                            <div
                                class="fd-navigation__item"
                                aria-current="false"
                                aria-expanded="false"
                                role="menuitem"
                                >
                                <a class="fd-navigation__link" role="link" href="#">
                                    <span class="fd-navigation__icon sap-icon--create-entry-time" role="presentation" aria-hidden="true"></span>
                                    <span class="fd-navigation__text">Time</span>
                                    <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                </a>
                            </li>

                            <li role="none" tabindex="-1" class="fd-navigation__list-item fd-popover" aria-hidden="true">
                                <div
                                    class="fd-navigation__item fd-popover__control"
                                    aria-current="false"
                                    aria-expanded="true"
                                    aria-haspopup="tree"
                                    role="menuitem"
                                    >
                                    <a class="fd-navigation__link" role="button" tabindex="0">
                                        <span class="fd-navigation__icon sap-icon--basket" role="presentation" aria-hidden="true"></span>
                                        <span class="fd-navigation__text">Basket</span>
                                        <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                        <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator"></span>
                                    </a>
                                    <div class="fd-navigation__list-container fd-popover__body fd-popover__body--no-arrow"  aria-hidden="false">
                                        <div class="fd-navigation__list-wrapper fd-popover__wrapper">
                                            <ul class="fd-navigation__list fd-navigation__list--child-items" role="tree" aria-roledescription="Navigation List Tree - Child Items" tabindex="-1" aria-hidden="true">
                                                <li class="fd-navigation__list-item" aria-hidden="true">
                                                    <div class="fd-navigation__item fd-navigation__item--child" aria-level="1" role="treeitem" title="Future Orders" aria-roledescription="Navigation List Menu Item - Child" aria-expanded="false" aria-selected="false">
                                                        <a class="fd-navigation__link" role="link" href="#">
                                                            <span class="fd-navigation__text">Future Orders</span>
                                                            <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li class="fd-navigation__list-item" aria-hidden="true">
                                                    <div class="fd-navigation__item fd-navigation__item--child" aria-level="1" role="treeitem" title="Current Orders" aria-roledescription="Navigation List Menu Item - Child" aria-expanded="false" aria-selected="true">
                                                        <a class="fd-navigation__link" role="link" href="#">
                                                            <span class="fd-navigation__text">Current Orders (selected)</span>
                                                            <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li class="fd-navigation__list-item" aria-hidden="true">
                                                    <div class="fd-navigation__item fd-navigation__item--child" aria-level="1" role="treeitem" title="Past Orders" aria-roledescription="Navigation List Menu Item - Child" aria-expanded="false" aria-selected="false">
                                                        <a class="fd-navigation__link" role="link" href="#">
                                                            <span class="fd-navigation__text">Past Orders</span>
                                                            <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li class="fd-navigation__list-item" aria-hidden="true">
                                                    <div class="fd-navigation__item fd-navigation__item--child" aria-level="1" role="treeitem" title="Lost Orders" aria-roledescription="Navigation List Menu Item - Child" aria-expanded="false" aria-selected="false">
                                                        <a class="fd-navigation__link" role="link" href="#">
                                                            <span class="fd-navigation__text">Lost Orders</span>
                                                            <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li class="fd-navigation__list-item" aria-hidden="true">
                                                    <div class="fd-navigation__item fd-navigation__item--child" aria-level="1" role="treeitem" title="Forgotten Orders" aria-roledescription="Navigation List Menu Item - Child" aria-expanded="false" aria-selected="false">
                                                        <a class="fd-navigation__link" role="link" href="#">
                                                            <span class="fd-navigation__text">Forgotten Orders (external link)</span>
                                                            <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                                            <span class="fd-navigation__external-link-indicator" role="presentation" aria-hidden="true" aria-label="external link indicator"></span>
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                                    <div
                                        class="fd-navigation__item"
                                        aria-current="false"
                                        aria-expanded="false"
                                        role="menuitem"
                                        >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__icon sap-icon--shield" role="presentation" aria-hidden="true"></span>
                                            <span class="fd-navigation__text">Shield</span>
                                            <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                        </a>
                                    </li>

                                    <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item"
                                            aria-current="false"
                                            aria-expanded="false"
                                            role="menuitem"
                                            >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__icon sap-icon--action-settings" role="presentation" aria-hidden="true"></span>
                                                <span class="fd-navigation__text">Cog</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                                <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
                                            </a>
                                        </li>

                                        <li class="fd-navigation__list-item fd-navigation__list-item--spacer" role="presentation" aria-hidden="true">
                                        </li>

                                        <li role="none" tabindex="-1" class="fd-navigation__list-item fd-navigation__list-item--overflow" aria-hidden="true">
                                            <div
                                                class="fd-navigation__item"
                                                aria-current="false"
                                                aria-expanded="true"
                                                role="menuitem"
                                                >
                                                <a class="fd-navigation__link" role="button" tabindex="0">
                                                    <span class="fd-navigation__icon sap-icon--overflow" role="presentation" aria-hidden="true"></span>
                                                </a>
                                                <div class="fd-navigation__list-container fd-navigation__list-container--menu fd-menu" aria-hidden="false" id="navMenuOverflow">
                                                    <div class="fd-navigation__list-wrapper">
                                                        <ul
                                                            class="fd-navigation__list fd-navigation__list--parent-items fd-menu__list"
                                                            role="menu"
                                                            aria-roledescription="Navigation List Tree"
                                                            tabindex="-1">

                                                            <li class="fd-navigation__list-item" aria-hidden="true">
                                                                <div
                                                                    class="fd-navigation__item fd-navigation__item--overflow"
                                                                    role="menuitem"
                                                                    aria-disabled="false"
                                                                    aria-posinset="1"
                                                                    aria-setsize="3"
                                                                    aria-haspopup="false"
                                                                    aria-labelledby="txt-1"
                                                                    aria-expanded="false"
                                                                    >
                                                                    <a class="fd-navigation__link" role="link" href="#">
                                                                        <span class="fd-navigation__icon sap-icon--notes" role="presentation" aria-hidden="true"></span>
                                                                        <span class="fd-navigation__text" id="txt-1">Parent Item</span>
                                                                        <span class="fd-navigation__selection-indicator"></span>
                                                                    </a>
                                                                </div>
                                                            </li>

                                                            <li class="fd-navigation__list-item" aria-hidden="true">
                                                                <div
                                                                    class="fd-navigation__item fd-navigation__item--overflow"
                                                                    role="menuitem"
                                                                    aria-disabled="false"
                                                                    aria-posinset="2"
                                                                    aria-setsize="3"
                                                                    aria-haspopup="menu"
                                                                    aria-labelledby="txt-2"
                                                                    aria-expanded="true"
                                                                    aria-owns="children-menu"
                                                                    >
                                                                    <a class="fd-navigation__link" role="button" tabindex="0" aria-controls="navPopover3">
                                                                        <span class="fd-navigation__icon sap-icon--horizontal-bar-chart" role="presentation" aria-hidden="true"></span>
                                                                        <span class="fd-navigation__text" id="txt-2">Parent Item</span>
                                                                        <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                                                        <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
                                                                    </a>
                                                                </div>
                                                                <div
                                                                    class="fd-navigation__list-container fd-navigation__list-container--submenu"
                                                                    aria-hidden="false">
                                                                    <div class="fd-navigation__list-wrapper">
                                                                        <ul
                                                                            class="fd-navigation__list fd-navigation__list--child-items" id="children-menu"
                                                                            role="menu"
                                                                            aria-roledescription="Navigation List Tree - Children Items"
                                                                            tabindex="-1"
                                                                            >
                                                                            <li class="fd-navigation__list-item" aria-hidden="true">
                                                                                <div
                                                                                    class="fd-navigation__item fd-navigation__item--child fd-navigation__item--submenu-child"
                                                                                    aria-labelledby="txt-child-1"
                                                                                    role="menuitem"
                                                                                    aria-posinset="1"
                                                                                    aria-setsize="3"
                                                                                    aria-disabled="false"
                                                                                    aria-selected="false"
                                                                                    >
                                                                                    <a class="fd-navigation__link" role="link" href="#">
                                                                                        <span class="fd-navigation__text" id="txt-child-1">Child Item</span>
                                                                                        <span class="fd-navigation__selection-indicator"></span>
                                                                                    </a>
                                                                                </div>
                                                                            </li>
                                                                            <li class="fd-navigation__list-item" aria-hidden="true">
                                                                                <div
                                                                                    class="fd-navigation__item fd-navigation__item--child fd-navigation__item--submenu-child"
                                                                                    aria-labelledby="txt-child-2"
                                                                                    role="menuitem"
                                                                                    aria-posinset="2"
                                                                                    aria-setsize="3"
                                                                                    aria-disabled="false"
                                                                                    aria-selected="false"
                                                                                    >
                                                                                    <a class="fd-navigation__link" role="link" href="#">
                                                                                        <span class="fd-navigation__text" id="txt-child-2">Child Item</span>
                                                                                        <span class="fd-navigation__selection-indicator"></span>
                                                                                    </a>
                                                                                </li>
                                                                                <li class="fd-navigation__list-item" aria-hidden="true">
                                                                                    <div
                                                                                        class="fd-navigation__item fd-navigation__item--child fd-navigation__item--submenu-child"
                                                                                        aria-labelledby="txt-child-3"
                                                                                        role="menuitem"
                                                                                        aria-posinset="3"
                                                                                        aria-setsize="3"
                                                                                        aria-disabled="false"
                                                                                        aria-selected="true"
                                                                                        >
                                                                                        <a class="fd-navigation__link" role="link" href="#">
                                                                                            <span class="fd-navigation__text" id="txt-child-3">Child Item</span>
                                                                                            <span class="fd-navigation__selection-indicator"></span>
                                                                                        </a>
                                                                                    </li>

                                                                                </ul>
                                                                            </li>

                                                                            <li class="fd-navigation__list-item" aria-hidden="true">
                                                                                <div
                                                                                    class="fd-navigation__item fd-navigation__item--overflow"
                                                                                    role="menuitem"
                                                                                    aria-disabled="false"
                                                                                    aria-posinset="3"
                                                                                    aria-setsize="3"
                                                                                    aria-haspopup="false"
                                                                                    aria-labelledby="txt-3"
                                                                                    aria-expanded="false"
                                                                                    >
                                                                                    <a class="fd-navigation__link" role="link" href="#">
                                                                                        <span class="fd-navigation__icon sap-icon--notes" role="presentation" aria-hidden="true"></span>
                                                                                        <span class="fd-navigation__text" id="txt-3">Parent Item</span>
                                                                                        <span class="fd-navigation__selection-indicator"></span>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </nav>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-navigation--horizontal` | Horizontal Navigation is an optional alternative to the Vertical Navigation variant. |

## BEM Elements

This component uses the following BEM elements:

- `fd-navigation__container`
- `fd-navigation__external-link-indicator`
- `fd-navigation__has-children-indicator`
- `fd-navigation__icon`
- `fd-navigation__item`
- `fd-navigation__item--child`
- `fd-navigation__item--overflow`
- `fd-navigation__item--submenu-child`
- `fd-navigation__item--with-expander`
- `fd-navigation__link`
- `fd-navigation__list`
- `fd-navigation__list--child-items`
- `fd-navigation__list--parent-items`
- `fd-navigation__list-container`
- `fd-navigation__list-container--menu`
- `fd-navigation__list-container--submenu`
- `fd-navigation__list-item`
- `fd-navigation__list-item--home`
- `fd-navigation__list-item--overflow`
- `fd-navigation__list-item--spacer`
- `fd-navigation__list-wrapper`
- `fd-navigation__selection-indicator`
- `fd-navigation__text`

## Examples

### Horizontal Navigation

Horizontal Navigation is an optional alternative to the Vertical Navigation variant.

```html
<nav
    class="fd-navigation fd-navigation--horizontal"
    aria-label="Horizontal Navigation">
    <div class="fd-navigation__container">
        <ul
            class="fd-navigation__list"
            role="menubar"
            aria-label="Horizontal Navigation"
            >
            <li role="none" tabindex="-1" class="fd-navigation__list-item fd-navigation__list-item--home" aria-hidden="true">
                <div
                    class="fd-navigation__item"
                    aria-current="page"
                    aria-selected="true"
                    aria-expanded="false"
                    role="menuitem"
                    >
                    <a class="fd-navigation__link" role="link" href="#">
                        <span class="fd-navigation__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
                        <span class="fd-navigation__text">Home</span>
                        <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                    </a>
                </li>

                <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                    <div
                        class="fd-navigation__item"
                        aria-current="false"
                        aria-expanded="false"
                        role="menuitem"
                        >
                        <a class="fd-navigation__link" role="link" href="#">
                            <span class="fd-navigation__icon sap-icon--calendar" role="presentation" aria-hidden="true"></span>
                            <span class="fd-navigation__text">Appointment</span>
                            <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                        </a>
                    </div>
                </li>

                <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                    <div
                        class="fd-navigation__item"
                        aria-current="false"
                        aria-expanded="false"
                        role="menuitem"
                        >
                        <a class="fd-navigation__link" role="link" href="#">
                            <span class="fd-navigation__icon sap-icon--database" role="presentation" aria-hidden="true"></span>
                            <span class="fd-navigation__text">Data</span>
                            <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                        </a>
                    </li>

                    <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                        <div
                            class="fd-navigation__item"
                            aria-current="false"
                            aria-expanded="false"
                            role="menuitem"
                            >
                            <a class="fd-navigation__link" role="link" href="#">
                                <span class="fd-navigation__icon sap-icon--attachment" role="presentation" aria-hidden="true"></span>
                                <span class="fd-navigation__text">Attachment</span>
                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                            </a>
                        </li>

                        <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                            <div
                                class="fd-navigation__item"
                                aria-current="false"
                                aria-expanded="false"
                                role="menuitem"
                                >
                                <a class="fd-navigation__link" role="link" href="#">
                                    <span class="fd-navigation__icon sap-icon--create-entry-time" role="presentation" aria-hidden="true"></span>
                                    <span class="fd-navigation__text">Time</span>
                                    <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                </a>
                            </li>

                            <li role="none" tabindex="-1" class="fd-navigation__list-item fd-popover" aria-hidden="true">
                                <div
                                    class="fd-navigation__item fd-popover__control"
                                    aria-current="false"
                                    aria-expanded="true"
                                    aria-haspopup="tree"
                                    role="menuitem"
                                    >
                                    <a class="fd-navigation__link" role="button" tabindex="0">
                                        <span class="fd-navigation__icon sap-icon--basket" role="presentation" aria-hidden="true"></span>
                                        <span class="fd-navigation__text">Basket</span>
                                        <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                        <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator"></span>
                                    </a>
                                    <div class="fd-navigation__list-container fd-popover__body fd-popover__body--no-arrow"  aria-hidden="false">
                                        <div class="fd-navigation__list-wrapper fd-popover__wrapper">
                                            <ul class="fd-navigation__list fd-navigation__list--child-items" role="tree" aria-roledescription="Navigation List Tree - Child Items" tabindex="-1" aria-hidden="true">
                                                <li class="fd-navigation__list-item" aria-hidden="true">
                                                    <div class="fd-navigation__item fd-navigation__item--child" aria-level="1" role="treeitem" title="Future Orders" aria-roledescription="Navigation List Menu Item - Child" aria-expanded="false" aria-selected="false">
                                                        <a class="fd-navigation__link" role="link" href="#">
                                                            <span class="fd-navigation__text">Future Orders</span>
                                                            <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li class="fd-navigation__list-item" aria-hidden="true">
                                                    <div class="fd-navigation__item fd-navigation__item--child" aria-level="1" role="treeitem" title="Current Orders" aria-roledescription="Navigation List Menu Item - Child" aria-expanded="false" aria-selected="true">
                                                        <a class="fd-navigation__link" role="link" href="#">
                                                            <span class="fd-navigation__text">Current Orders (selected)</span>
                                                            <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li class="fd-navigation__list-item" aria-hidden="true">
                                                    <div class="fd-navigation__item fd-navigation__item--child" aria-level="1" role="treeitem" title="Past Orders" aria-roledescription="Navigation List Menu Item - Child" aria-expanded="false" aria-selected="false">
                                                        <a class="fd-navigation__link" role="link" href="#">
                                                            <span class="fd-navigation__text">Past Orders</span>
                                                            <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li class="fd-navigation__list-item" aria-hidden="true">
                                                    <div class="fd-navigation__item fd-navigation__item--child" aria-level="1" role="treeitem" title="Lost Orders" aria-roledescription="Navigation List Menu Item - Child" aria-expanded="false" aria-selected="false">
                                                        <a class="fd-navigation__link" role="link" href="#">
                                                            <span class="fd-navigation__text">Lost Orders</span>
                                                            <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li class="fd-navigation__list-item" aria-hidden="true">
                                                    <div class="fd-navigation__item fd-navigation__item--child" aria-level="1" role="treeitem" title="Forgotten Orders" aria-roledescription="Navigation List Menu Item - Child" aria-expanded="false" aria-selected="false">
                                                        <a class="fd-navigation__link" role="link" href="#">
                                                            <span class="fd-navigation__text">Forgotten Orders (external link)</span>
                                                            <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                                            <span class="fd-navigation__external-link-indicator" role="presentation" aria-hidden="true" aria-label="external link indicator"></span>
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                                    <div
                                        class="fd-navigation__item"
                                        aria-current="false"
                                        aria-expanded="false"
                                        role="menuitem"
                                        >
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span class="fd-navigation__icon sap-icon--shield" role="presentation" aria-hidden="true"></span>
                                            <span class="fd-navigation__text">Shield</span>
                                            <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                        </a>
                                    </li>

                                    <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                                        <div
                                            class="fd-navigation__item"
                                            aria-current="false"
                                            aria-expanded="false"
                                            role="menuitem"
                                            >
                                            <a class="fd-navigation__link" role="link" href="#">
                                                <span class="fd-navigation__icon sap-icon--action-settings" role="presentation" aria-hidden="true"></span>
                                                <span class="fd-navigation__text">Cog</span>
                                                <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                                <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
                                            </a>
                                        </li>

                                        <li class="fd-navigation__list-item fd-navigation__list-item--spacer" role="presentation" aria-hidden="true">
                                        </li>

                                        <li role="none" tabindex="-1" class="fd-navigation__list-item fd-navigation__list-item--overflow" aria-hidden="true">
                                            <div
                                                class="fd-navigation__item"
                                                aria-current="false"
                                                aria-expanded="true"
                                                role="menuitem"
                                                >
                                                <a class="fd-navigation__link" role="button" tabindex="0">
                                                    <span class="fd-navigation__icon sap-icon--overflow" role="presentation" aria-hidden="true"></span>
                                                </a>
                                                <div class="fd-navigation__list-container fd-navigation__list-container--menu fd-menu" aria-hidden="false" id="navMenuOverflow">
                                                    <div class="fd-navigation__list-wrapper">
                                                        <ul
                                                            class="fd-navigation__list fd-navigation__list--parent-items fd-menu__list"
                                                            role="menu"
                                                            aria-roledescription="Navigation List Tree"
                                                            tabindex="-1">

                                                            <li class="fd-navigation__list-item" aria-hidden="true">
                                                                <div
                                                                    class="fd-navigation__item fd-navigation__item--overflow"
                                                                    role="menuitem"
                                                                    aria-disabled="false"
                                                                    aria-posinset="1"
                                                                    aria-setsize="3"
                                                                    aria-haspopup="false"
                                                                    aria-labelledby="txt-1"
                                                                    aria-expanded="false"
                                                                    >
                                                                    <a class="fd-navigation__link" role="link" href="#">
                                                                        <span class="fd-navigation__icon sap-icon--notes" role="presentation" aria-hidden="true"></span>
                                                                        <span class="fd-navigation__text" id="txt-1">Parent Item</span>
                                                                        <span class="fd-navigation__selection-indicator"></span>
                                                                    </a>
                                                                </div>
                                                            </li>

                                                            <li class="fd-navigation__list-item" aria-hidden="true">
                                                                <div
                                                                    class="fd-navigation__item fd-navigation__item--overflow"
                                                                    role="menuitem"
                                                                    aria-disabled="false"
                                                                    aria-posinset="2"
                                                                    aria-setsize="3"
                                                                    aria-haspopup="menu"
                                                                    aria-labelledby="txt-2"
                                                                    aria-expanded="true"
                                                                    aria-owns="children-menu"
                                                                    >
                                                                    <a class="fd-navigation__link" role="button" tabindex="0" aria-controls="navPopover3">
                                                                        <span class="fd-navigation__icon sap-icon--horizontal-bar-chart" role="presentation" aria-hidden="true"></span>
                                                                        <span class="fd-navigation__text" id="txt-2">Parent Item</span>
                                                                        <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                                                        <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
                                                                    </a>
                                                                </div>
                                                                <div
                                                                    class="fd-navigation__list-container fd-navigation__list-container--submenu"
                                                                    aria-hidden="false">
                                                                    <div class="fd-navigation__list-wrapper">
                                                                        <ul
                                                                            class="fd-navigation__list fd-navigation__list--child-items" id="children-menu"
                                                                            role="menu"
                                                                            aria-roledescription="Navigation List Tree - Children Items"
                                                                            tabindex="-1"
                                                                            >
                                                                            <li class="fd-navigation__list-item" aria-hidden="true">
                                                                                <div
                                                                                    class="fd-navigation__item fd-navigation__item--child fd-navigation__item--submenu-child"
                                                                                    aria-labelledby="txt-child-1"
                                                                                    role="menuitem"
                                                                                    aria-posinset="1"
                                                                                    aria-setsize="3"
                                                                                    aria-disabled="false"
                                                                                    aria-selected="false"
                                                                                    >
                                                                                    <a class="fd-navigation__link" role="link" href="#">
                                                                                        <span class="fd-navigation__text" id="txt-child-1">Child Item</span>
                                                                                        <span class="fd-navigation__selection-indicator"></span>
                                                                                    </a>
                                                                                </div>
                                                                            </li>
                                                                            <li class="fd-navigation__list-item" aria-hidden="true">
                                                                                <div
                                                                                    class="fd-navigation__item fd-navigation__item--child fd-navigation__item--submenu-child"
                                                                                    aria-labelledby="txt-child-2"
                                                                                    role="menuitem"
                                                                                    aria-posinset="2"
                                                                                    aria-setsize="3"
                                                                                    aria-disabled="false"
                                                                                    aria-selected="false"
                                                                                    >
                                                                                    <a class="fd-navigation__link" role="link" href="#">
                                                                                        <span class="fd-navigation__text" id="txt-child-2">Child Item</span>
                                                                                        <span class="fd-navigation__selection-indicator"></span>
                                                                                    </a>
                                                                                </li>
                                                                                <li class="fd-navigation__list-item" aria-hidden="true">
                                                                                    <div
                                                                                        class="fd-navigation__item fd-navigation__item--child fd-navigation__item--submenu-child"
                                                                                        aria-labelledby="txt-child-3"
                                                                                        role="menuitem"
                                                                                        aria-posinset="3"
                                                                                        aria-setsize="3"
                                                                                        aria-disabled="false"
                                                                                        aria-selected="true"
                                                                                        >
                                                                                        <a class="fd-navigation__link" role="link" href="#">
                                                                                            <span class="fd-navigation__text" id="txt-child-3">Child Item</span>
                                                                                            <span class="fd-navigation__selection-indicator"></span>
                                                                                        </a>
                                                                                    </li>

                                                                                </ul>
                                                                            </li>

                                                                            <li class="fd-navigation__list-item" aria-hidden="true">
                                                                                <div
                                                                                    class="fd-navigation__item fd-navigation__item--overflow"
                                                                                    role="menuitem"
                                                                                    aria-disabled="false"
                                                                                    aria-posinset="3"
                                                                                    aria-setsize="3"
                                                                                    aria-haspopup="false"
                                                                                    aria-labelledby="txt-3"
                                                                                    aria-expanded="false"
                                                                                    >
                                                                                    <a class="fd-navigation__link" role="link" href="#">
                                                                                        <span class="fd-navigation__icon sap-icon--notes" role="presentation" aria-hidden="true"></span>
                                                                                        <span class="fd-navigation__text" id="txt-3">Parent Item</span>
                                                                                        <span class="fd-navigation__selection-indicator"></span>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </nav>
```

### Horizontal Navigation - Two-Click Area

```html
<nav class="fd-navigation fd-navigation--horizontal" aria-label="Horizontal Navigation">
    <div class="fd-navigation__container">
        <ul class="fd-navigation__list" role="menubar" aria-label="Horizontal Navigation">
            <li
                role="none"
                tabindex="-1"
                class="fd-navigation__list-item fd-navigation__list-item--home"
                aria-hidden="true"
                >
                <div
                    class="fd-navigation__item"
                    aria-current="page"
                    aria-selected="false"
                    aria-expanded="false"
                    role="menuitem"
                    >
                    <a class="fd-navigation__link" role="link" href="#">
                        <span
                            class="fd-navigation__icon sap-icon--home"
                            role="presentation"
                            aria-hidden="true"
                            ></span>
                            <span class="fd-navigation__text">Home</span>
                            <span
                                class="fd-navigation__selection-indicator"
                                role="presentation"
                                aria-hidden="true"
                                aria-label="selection indicator"
                                ></span>
                            </a>
                        </li>

                        <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                            <div class="fd-navigation__item" aria-current="false" aria-expanded="false" role="menuitem">
                                <a class="fd-navigation__link" role="link" href="#">
                                    <span
                                        class="fd-navigation__icon sap-icon--calendar"
                                        role="presentation"
                                        aria-hidden="true"
                                        ></span>
                                        <span class="fd-navigation__text">Appointment</span>
                                        <span
                                            class="fd-navigation__selection-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                            aria-label="selection indicator"
                                            ></span>
                                        </a>
                                    </div>
                                </li>

                                <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                                    <div class="fd-navigation__item" aria-current="false" aria-expanded="false" role="menuitem">
                                        <a class="fd-navigation__link" role="link" href="#">
                                            <span
                                                class="fd-navigation__icon sap-icon--database"
                                                role="presentation"
                                                aria-hidden="true"
                                                ></span>
                                                <span class="fd-navigation__text">Data</span>
                                                <span
                                                    class="fd-navigation__selection-indicator"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    aria-label="selection indicator"
                                                    ></span>
                                                </a>
                                            </div>
                                        </li>

                                        <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                                            <div class="fd-navigation__item" aria-current="false" aria-expanded="false" role="menuitem">
                                                <a class="fd-navigation__link" role="link" href="#">
                                                    <span
                                                        class="fd-navigation__icon sap-icon--attachment"
                                                        role="presentation"
                                                        aria-hidden="true"
                                                        ></span>
                                                        <span class="fd-navigation__text">Attachment</span>
                                                        <span
                                                            class="fd-navigation__selection-indicator"
                                                            role="presentation"
                                                            aria-hidden="true"
                                                            aria-label="selection indicator"
                                                            ></span>
                                                        </a>
                                                    </div>
                                                </li>

                                                <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                                                    <div class="fd-navigation__item" aria-current="false" aria-expanded="false" role="menuitem">
                                                        <a class="fd-navigation__link" role="link" href="#">
                                                            <span
                                                                class="fd-navigation__icon sap-icon--create-entry-time"
                                                                role="presentation"
                                                                aria-hidden="true"
                                                                ></span>
                                                                <span class="fd-navigation__text">Time</span>
                                                                <span
                                                                    class="fd-navigation__selection-indicator"
                                                                    role="presentation"
                                                                    aria-hidden="true"
                                                                    aria-label="selection indicator"
                                                                    ></span>
                                                                </a>
                                                            </div>
                                                        </li>

                                                        <li role="none" tabindex="-1" class="fd-navigation__list-item fd-popover" aria-hidden="true">
                                                            <div
                                                                class="fd-navigation__item fd-navigation__item--with-expander fd-popover__control"
                                                                aria-current="false"
                                                                aria-expanded="true"
                                                                aria-haspopup="tree"
                                                                role="menuitem"
                                                                >
                                                                <a class="fd-navigation__link" role="button" tabindex="0">
                                                                    <span
                                                                        class="fd-navigation__icon sap-icon--basket"
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        ></span>
                                                                        <span class="fd-navigation__text">Basket</span>
                                                                        <span
                                                                            class="fd-navigation__selection-indicator"
                                                                            role="presentation"
                                                                            aria-hidden="true"
                                                                            aria-label="selection indicator"
                                                                            ></span>
                                                                        </a>
                                                                        <span
                                                                            class="fd-navigation__has-children-indicator"
                                                                            role="button"
                                                                            aria-hidden="true"
                                                                            aria-label="Expand/Collapse"
                                                                            aria-expanded="true"
                                                                            ></span>
                                                                        </div>
                                                                        <div
                                                                            class="fd-navigation__list-container fd-popover__body fd-popover__body--no-arrow"
                                                                            aria-hidden="false"
                                                                            >
                                                                            <div class="fd-navigation__list-wrapper fd-popover__wrapper">
                                                                                <ul
                                                                                    class="fd-navigation__list fd-navigation__list--child-items"
                                                                                    role="tree"
                                                                                    aria-roledescription="Navigation List Tree - Child Items"
                                                                                    tabindex="-1"
                                                                                    aria-hidden="true"
                                                                                    >
                                                                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                                                                        <div
                                                                                            class="fd-navigation__item fd-navigation__item--child"
                                                                                            aria-level="1"
                                                                                            role="treeitem"
                                                                                            title="Future Orders"
                                                                                            aria-roledescription="Navigation List Menu Item - Child"
                                                                                            aria-expanded="false"
                                                                                            aria-selected="false"
                                                                                            >
                                                                                            <a class="fd-navigation__link" role="link" href="#">
                                                                                                <span class="fd-navigation__text">Future Orders</span>
                                                                                                <span
                                                                                                    class="fd-navigation__selection-indicator"
                                                                                                    role="presentation"
                                                                                                    aria-hidden="true"
                                                                                                    aria-label="selection indicator"
                                                                                                    ></span>
                                                                                                </a>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li class="fd-navigation__list-item" aria-hidden="true">
                                                                                            <div
                                                                                                class="fd-navigation__item fd-navigation__item--child"
                                                                                                aria-level="1"
                                                                                                role="treeitem"
                                                                                                title="Current Orders"
                                                                                                aria-roledescription="Navigation List Menu Item - Child"
                                                                                                aria-expanded="false"
                                                                                                aria-selected="true"
                                                                                                >
                                                                                                <a class="fd-navigation__link" role="link" href="#">
                                                                                                    <span class="fd-navigation__text">Current Orders (selected)</span>
                                                                                                    <span
                                                                                                        class="fd-navigation__selection-indicator"
                                                                                                        role="presentation"
                                                                                                        aria-hidden="true"
                                                                                                        aria-label="selection indicator"
                                                                                                        ></span>
                                                                                                    </a>
                                                                                                </li>
                                                                                                <li class="fd-navigation__list-item" aria-hidden="true">
                                                                                                    <div
                                                                                                        class="fd-navigation__item fd-navigation__item--child"
                                                                                                        aria-level="1"
                                                                                                        role="treeitem"
                                                                                                        title="Past Orders"
                                                                                                        aria-roledescription="Navigation List Menu Item - Child"
                                                                                                        aria-expanded="false"
                                                                                                        aria-selected="false"
                                                                                                        >
                                                                                                        <a class="fd-navigation__link" role="link" href="#">
                                                                                                            <span class="fd-navigation__text">Past Orders</span>
                                                                                                            <span
                                                                                                                class="fd-navigation__selection-indicator"
                                                                                                                role="presentation"
                                                                                                                aria-hidden="true"
                                                                                                                aria-label="selection indicator"
                                                                                                                ></span>
                                                                                                            </a>
                                                                                                        </li>
                                                                                                        <li class="fd-navigation__list-item" aria-hidden="true">
                                                                                                            <div
                                                                                                                class="fd-navigation__item fd-navigation__item--child"
                                                                                                                aria-level="1"
                                                                                                                role="treeitem"
                                                                                                                title="Lost Orders"
                                                                                                                aria-roledescription="Navigation List Menu Item - Child"
                                                                                                                aria-expanded="false"
                                                                                                                aria-selected="false"
                                                                                                                >
                                                                                                                <a class="fd-navigation__link" role="link" href="#">
                                                                                                                    <span class="fd-navigation__text">Lost Orders</span>
                                                                                                                    <span
                                                                                                                        class="fd-navigation__selection-indicator"
                                                                                                                        role="presentation"
                                                                                                                        aria-hidden="true"
                                                                                                                        aria-label="selection indicator"
                                                                                                                        ></span>
                                                                                                                    </a>
                                                                                                                </li>
                                                                                                                <li class="fd-navigation__list-item" aria-hidden="true">
                                                                                                                    <div
                                                                                                                        class="fd-navigation__item fd-navigation__item--child"
                                                                                                                        aria-level="1"
                                                                                                                        role="treeitem"
                                                                                                                        title="Forgotten Orders"
                                                                                                                        aria-roledescription="Navigation List Menu Item - Child"
                                                                                                                        aria-expanded="false"
                                                                                                                        aria-selected="false"
                                                                                                                        >
                                                                                                                        <a class="fd-navigation__link" role="link" href="#">
                                                                                                                            <span class="fd-navigation__text">Forgotten Orders (external link)</span>
                                                                                                                            <span
                                                                                                                                class="fd-navigation__selection-indicator"
                                                                                                                                role="presentation"
                                                                                                                                aria-hidden="true"
                                                                                                                                aria-label="selection indicator"
                                                                                                                                ></span>
                                                                                                                                <span
                                                                                                                                    class="fd-navigation__external-link-indicator"
                                                                                                                                    role="presentation"
                                                                                                                                    aria-hidden="true"
                                                                                                                                    aria-label="external link indicator"
                                                                                                                                    ></span>
                                                                                                                                </a>
                                                                                                                            </li>
                                                                                                                        </ul>
                                                                                                                    </li>

                                                                                                                    <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                                                                                                                        <div class="fd-navigation__item" aria-current="false" aria-expanded="false" role="menuitem">
                                                                                                                            <a class="fd-navigation__link" role="link" href="#">
                                                                                                                                <span
                                                                                                                                    class="fd-navigation__icon sap-icon--shield"
                                                                                                                                    role="presentation"
                                                                                                                                    aria-hidden="true"
                                                                                                                                    ></span>
                                                                                                                                    <span class="fd-navigation__text">Shield</span>
                                                                                                                                    <span
                                                                                                                                        class="fd-navigation__selection-indicator"
                                                                                                                                        role="presentation"
                                                                                                                                        aria-hidden="true"
                                                                                                                                        aria-label="selection indicator"
                                                                                                                                        ></span>
                                                                                                                                    </a>
                                                                                                                                </div>
                                                                                                                            </li>

                                                                                                                            <li role="none" tabindex="-1" class="fd-navigation__list-item" aria-hidden="true">
                                                                                                                                <div
                                                                                                                                    class="fd-navigation__item fd-navigation__item--with-expander"
                                                                                                                                    aria-current="false"
                                                                                                                                    aria-expanded="false"
                                                                                                                                    aria-selected="true"
                                                                                                                                    role="menuitem"
                                                                                                                                    >
                                                                                                                                    <a class="fd-navigation__link" role="link" href="#">
                                                                                                                                        <span
                                                                                                                                            class="fd-navigation__icon sap-icon--action-settings"
                                                                                                                                            role="presentation"
                                                                                                                                            aria-hidden="true"
                                                                                                                                            ></span>
                                                                                                                                            <span class="fd-navigation__text">Cog</span>
                                                                                                                                            <span
                                                                                                                                                class="fd-navigation__selection-indicator"
                                                                                                                                                role="presentation"
                                                                                                                                                aria-hidden="true"
                                                                                                                                                aria-label="selection indicator"
                                                                                                                                                ></span>
                                                                                                                                            </a>
                                                                                                                                            <span
                                                                                                                                                class="fd-navigation__has-children-indicator"
                                                                                                                                                role="button"
                                                                                                                                                aria-hidden="true"
                                                                                                                                                aria-label="Expand/Collapse"
                                                                                                                                                ></span>
                                                                                                                                            </li>

                                                                                                                                            <li
                                                                                                                                                class="fd-navigation__list-item fd-navigation__list-item--spacer"
                                                                                                                                                role="presentation"
                                                                                                                                                aria-hidden="true"
                                                                                                                                                ></li>

                                                                                                                                                <li
                                                                                                                                                    role="none"
                                                                                                                                                    tabindex="-1"
                                                                                                                                                    class="fd-navigation__list-item fd-navigation__list-item--overflow"
                                                                                                                                                    aria-hidden="true"
                                                                                                                                                    >
                                                                                                                                                    <div class="fd-navigation__item" aria-current="false" aria-expanded="true" role="menuitem">
                                                                                                                                                        <a class="fd-navigation__link" role="button" tabindex="0">
                                                                                                                                                            <span
                                                                                                                                                                class="fd-navigation__icon sap-icon--overflow"
                                                                                                                                                                role="presentation"
                                                                                                                                                                aria-hidden="true"
                                                                                                                                                                ></span>
                                                                                                                                                            </a>
                                                                                                                                                        </div>
                                                                                                                                                        <div
                                                                                                                                                            class="fd-navigation__list-container fd-navigation__list-container--menu fd-menu"
                                                                                                                                                            aria-hidden="false"
                                                                                                                                                            id="navMenuOverflow"
                                                                                                                                                            >
                                                                                                                                                            <div class="fd-navigation__list-wrapper">
                                                                                                                                                                <ul
                                                                                                                                                                    class="fd-navigation__list fd-navigation__list--parent-items fd-menu__list"
                                                                                                                                                                    role="menu"
                                                                                                                                                                    aria-roledescription="Navigation List Tree"
                                                                                                                                                                    tabindex="-1"
                                                                                                                                                                    >
                                                                                                                                                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                                                                                                                                                        <div
                                                                                                                                                                            class="fd-navigation__item fd-navigation__item--overflow"
                                                                                                                                                                            role="menuitem"
                                                                                                                                                                            aria-disabled="false"
                                                                                                                                                                            aria-posinset="1"
                                                                                                                                                                            aria-setsize="3"
                                                                                                                                                                            aria-haspopup="false"
                                                                                                                                                                            aria-labelledby="txt-1"
                                                                                                                                                                            aria-expanded="false"
                                                                                                                                                                            >
                                                                                                                                                                            <a class="fd-navigation__link" role="link" href="#">
                                                                                                                                                                                <span
                                                                                                                                                                                    class="fd-navigation__icon sap-icon--notes"
                                                                                                                                                                                    role="presentation"
                                                                                                                                                                                    aria-hidden="true"
                                                                                                                                                                                    ></span>
                                                                                                                                                                                    <span class="fd-navigation__text" id="txt-1">Parent Item</span>
                                                                                                                                                                                    <span class="fd-navigation__selection-indicator"></span>
                                                                                                                                                                                </a>
                                                                                                                                                                            </div>
                                                                                                                                                                        </li>

                                                                                                                                                                        <li class="fd-navigation__list-item" aria-hidden="true">
                                                                                                                                                                            <div
                                                                                                                                                                                class="fd-navigation__item fd-navigation__item--overflow"
                                                                                                                                                                                role="menuitem"
                                                                                                                                                                                aria-disabled="false"
                                                                                                                                                                                aria-posinset="2"
                                                                                                                                                                                aria-setsize="3"
                                                                                                                                                                                aria-haspopup="menu"
                                                                                                                                                                                aria-labelledby="txt-2"
                                                                                                                                                                                aria-expanded="true"
                                                                                                                                                                                aria-owns="children-menu"
                                                                                                                                                                                >
                                                                                                                                                                                <a
                                                                                                                                                                                    class="fd-navigation__link"
                                                                                                                                                                                    role="button"
                                                                                                                                                                                    tabindex="0"
                                                                                                                                                                                    aria-controls="navPopover3"
                                                                                                                                                                                    >
                                                                                                                                                                                    <span
                                                                                                                                                                                        class="fd-navigation__icon sap-icon--horizontal-bar-chart"
                                                                                                                                                                                        role="presentation"
                                                                                                                                                                                        aria-hidden="true"
                                                                                                                                                                                        ></span>
                                                                                                                                                                                        <span class="fd-navigation__text" id="txt-2">Parent Item</span>
                                                                                                                                                                                        <span
                                                                                                                                                                                            class="fd-navigation__selection-indicator"
                                                                                                                                                                                            role="presentation"
                                                                                                                                                                                            aria-hidden="true"
                                                                                                                                                                                            aria-label="selection indicator"
                                                                                                                                                                                            ></span>
                                                                                                                                                                                            <span
                                                                                                                                                                                                class="fd-navigation__has-children-indicator"
                                                                                                                                                                                                role="presentation"
                                                                                                                                                                                                aria-hidden="true"
                                                                                                                                                                                                aria-label="has children indicator, expanded"
                                                                                                                                                                                                ></span>
                                                                                                                                                                                            </a>
                                                                                                                                                                                            <div
                                                                                                                                                                                                class="fd-navigation__list-container fd-navigation__list-container--submenu"
                                                                                                                                                                                                aria-hidden="false"
                                                                                                                                                                                                >
                                                                                                                                                                                                <div class="fd-navigation__list-wrapper">
                                                                                                                                                                                                    <ul
                                                                                                                                                                                                        class="fd-navigation__list fd-navigation__list--child-items"
                                                                                                                                                                                                        id="children-menu"
                                                                                                                                                                                                        role="menu"
                                                                                                                                                                                                        aria-roledescription="Navigation List Tree - Children Items"
                                                                                                                                                                                                        tabindex="-1"
                                                                                                                                                                                                        >
                                                                                                                                                                                                        <li class="fd-navigation__list-item" aria-hidden="true">
                                                                                                                                                                                                            <div
                                                                                                                                                                                                                class="fd-navigation__item fd-navigation__item--child fd-navigation__item--submenu-child"
                                                                                                                                                                                                                aria-labelledby="txt-child-1"
                                                                                                                                                                                                                role="menuitem"
                                                                                                                                                                                                                aria-posinset="1"
                                                                                                                                                                                                                aria-setsize="3"
                                                                                                                                                                                                                aria-disabled="false"
                                                                                                                                                                                                                aria-selected="false"
                                                                                                                                                                                                                >
                                                                                                                                                                                                                <a class="fd-navigation__link" role="link" href="#">
                                                                                                                                                                                                                    <span class="fd-navigation__text" id="txt-child-1"
                                                                                                                                                                                                                        >Child Item</span
                                                                                                                                                                                                                        >
                                                                                                                                                                                                                        <span class="fd-navigation__selection-indicator"></span>
                                                                                                                                                                                                                    </a>
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                            </li>
                                                                                                                                                                                                            <li class="fd-navigation__list-item" aria-hidden="true">
                                                                                                                                                                                                                <div
                                                                                                                                                                                                                    class="fd-navigation__item fd-navigation__item--child fd-navigation__item--submenu-child"
                                                                                                                                                                                                                    aria-labelledby="txt-child-2"
                                                                                                                                                                                                                    role="menuitem"
                                                                                                                                                                                                                    aria-posinset="2"
                                                                                                                                                                                                                    aria-setsize="3"
                                                                                                                                                                                                                    aria-disabled="false"
                                                                                                                                                                                                                    aria-selected="false"
                                                                                                                                                                                                                    >
                                                                                                                                                                                                                    <a class="fd-navigation__link" role="link" href="#">
                                                                                                                                                                                                                        <span class="fd-navigation__text" id="txt-child-2"
                                                                                                                                                                                                                            >Child Item</span
                                                                                                                                                                                                                            >
                                                                                                                                                                                                                            <span class="fd-navigation__selection-indicator"></span>
                                                                                                                                                                                                                        </a>
                                                                                                                                                                                                                    </li>
                                                                                                                                                                                                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                                                                                                                                                                                                        <div
                                                                                                                                                                                                                            class="fd-navigation__item fd-navigation__item--child fd-navigation__item--submenu-child"
                                                                                                                                                                                                                            aria-labelledby="txt-child-3"
                                                                                                                                                                                                                            role="menuitem"
                                                                                                                                                                                                                            aria-posinset="3"
                                                                                                                                                                                                                            aria-setsize="3"
                                                                                                                                                                                                                            aria-disabled="false"
                                                                                                                                                                                                                            aria-selected="true"
                                                                                                                                                                                                                            >
                                                                                                                                                                                                                            <a class="fd-navigation__link" role="link" href="#">
                                                                                                                                                                                                                                <span class="fd-navigation__text" id="txt-child-3"
                                                                                                                                                                                                                                    >Child Item</span
                                                                                                                                                                                                                                    >
                                                                                                                                                                                                                                    <span class="fd-navigation__selection-indicator"></span>
                                                                                                                                                                                                                                </a>
                                                                                                                                                                                                                            </li>
                                                                                                                                                                                                                        </ul>
                                                                                                                                                                                                                    </li>

                                                                                                                                                                                                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                                                                                                                                                                                                        <div
                                                                                                                                                                                                                            class="fd-navigation__item fd-navigation__item--overflow"
                                                                                                                                                                                                                            role="menuitem"
                                                                                                                                                                                                                            aria-disabled="false"
                                                                                                                                                                                                                            aria-posinset="3"
                                                                                                                                                                                                                            aria-setsize="3"
                                                                                                                                                                                                                            aria-haspopup="false"
                                                                                                                                                                                                                            aria-labelledby="txt-3"
                                                                                                                                                                                                                            aria-expanded="false"
                                                                                                                                                                                                                            >
                                                                                                                                                                                                                            <a class="fd-navigation__link" role="link" href="#">
                                                                                                                                                                                                                                <span
                                                                                                                                                                                                                                    class="fd-navigation__icon sap-icon--notes"
                                                                                                                                                                                                                                    role="presentation"
                                                                                                                                                                                                                                    aria-hidden="true"
                                                                                                                                                                                                                                    ></span>
                                                                                                                                                                                                                                    <span class="fd-navigation__text" id="txt-3">Parent Item</span>
                                                                                                                                                                                                                                    <span class="fd-navigation__selection-indicator"></span>
                                                                                                                                                                                                                                </a>
                                                                                                                                                                                                                            </li>
                                                                                                                                                                                                                        </ul>
                                                                                                                                                                                                                    </li>
                                                                                                                                                                                                                </ul>
                                                                                                                                                                                                            </nav>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/BTP/Navigation/horizontal/navigation-horizontal.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
