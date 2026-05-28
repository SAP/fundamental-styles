---
component: fd-popover
title: BTP/User Menu
category: BTP
selector: fd-popover
cssFile: popover.css
sourcePath: packages/styles/stories/BTP/user-menu/user-menu.stories.js
tags: ["btp"]
dependencies: ["avatar","bar","btp/avatar","button","icon","navigation","popover","user-menu"]
relatedComponents: ["avatar","bar","button","icon","navigation","popover","user-menu"]
stability: stable
generatedAt: 2026-05-28T16:47:21.399Z
---

# BTP/User Menu

The User Menu offers a range of options that are specific to the user and is accessible on all BTP tool screens. Users can access it by clicking on the avatar on the end side of the Tool Header. Apart from always available options, the User Menu can also contain tool-specific actions.

The BTP implementation extends the Visual Core implementation by adding the <code>.fd-user-menu--tool-header</code> modifier class to the <code>.fd-user-menu</code> base class.

## Dependencies

This component depends on the following CSS files:

- `avatar.css`
- `bar.css`
- `btp/avatar.css`
- `button.css`
- `icon.css`
- `navigation.css`
- `popover.css`
- `user-menu.css`

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
<link href="node_modules/fundamental-styles/dist/btp/avatar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/navigation.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/popover.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/user-menu.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="is-cozy">
    <div class="fd-popover fd-popover--right fd-user-menu fd-user-menu--tool-header">
        <div class="fd-popover__control">
            <span
                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
                aria-controls="popoverA1TH"
                aria-expanded="true"
                aria-haspopup="true"
                aria-label="Avatar"

                onclick="onPopoverClick('popoverA1TH');"
                role="button"
                tabindex="0"></span>
                <div class="fd-popover__body fd-popover__body--right fd-user-menu__popover-body" aria-hidden="false" id="popoverA1TH">
                    <div class="fd-user-menu__body">
                        <div class="fd-user-menu__header">
                            <span
                                class="fd-avatar fd-avatar--96 fd-avatar--circle fd-avatar--thumbnail fd-user-menu__avatar"
                                aria-label="Avatar"
                                ></span>
                            </div>
                            <div class="fd-user-menu__subheader">
                                <div class="fd-user-menu__user-name">Kevin Miller</div>
                                <div class="fd-user-menu__user-role">Design Expert</div>
                            </div>
                            <div class="fd-user-menu__navigation-menu">
                                <div class="fd-navigation">
                                    <ul class="fd-navigation__list" role="tree">
                                        <li class="fd-navigation__list-item" role="treeitem">
                                            <div
                                                class="fd-navigation__item fd-navigation__item--menu"
                                                title="User Account"
                                                aria-roledescription="Navigation List Tree Item"
                                                aria-selected="false"
                                                aria-expanded="false"
                                                >
                                                <a class="fd-navigation__link" role="link" href="#">
                                                    <span class="fd-navigation__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-navigation__text">User Account</span>
                                                    <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                </a>
                                            </div>

                                        </li>
                                        <li class="fd-navigation__list-item fd-popover" role="treeitem">
                                            <div
                                                class="fd-navigation__item fd-navigation__item--menu fd-popover__control"
                                                title="Settings"
                                                aria-roledescription="Navigation List Tree Item"
                                                aria-selected="false"
                                                aria-expanded="true"
                                                aria-haspopup="tree"
                                                >
                                                <a class="fd-navigation__link" role="link" href="#">
                                                    <span class="fd-navigation__icon sap-icon--action-settings" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-navigation__text">Settings</span>
                                                    <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                    <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
                                                </a>
                                            </div>
                                            <div class="fd-user-menu__navigation-submenu fd-popover__body fd-popover__body--before fd-popover__body--no-arrow" role="tree" aria-roledescription="User Menu Submenu">
                                                <div class="fd-popover__wrapper fd-user-menu__navigation-submenu-wrapper">
                                                    <ul class="fd-navigation__list fd-navigation__list--child-items">
                                                        <li class="fd-navigation__list-item" role="treeitem">
                                                            <div
                                                                class="fd-navigation__item fd-navigation__item--menu fd-navigation__item--child"
                                                                title="Personalization"
                                                                aria-roledescription="Navigation List Tree Item"
                                                                aria-selected="false"
                                                                aria-expanded="false"
                                                                >
                                                                <a class="fd-navigation__link" role="link" href="#">
                                                                    <span class="fd-navigation__text">Personalization</span>
                                                                    <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li class="fd-navigation__list-item" role="treeitem">
                                                            <div
                                                                class="fd-navigation__item fd-navigation__item--menu fd-navigation__item--child"
                                                                title="Users and Permissions"
                                                                aria-roledescription="Navigation List Tree Item"
                                                                aria-selected="false"
                                                                aria-expanded="false"
                                                                >
                                                                <a class="fd-navigation__link" role="link" href="#">
                                                                    <span class="fd-navigation__text">Users and Permissions</span>
                                                                    <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li class="fd-navigation__list-item" role="treeitem">
                                                            <div
                                                                class="fd-navigation__item fd-navigation__item--menu fd-navigation__item--child"
                                                                title="Product Settings"
                                                                aria-roledescription="Navigation List Tree Item"
                                                                aria-selected="false"
                                                                aria-expanded="false"
                                                                >
                                                                <a class="fd-navigation__link" role="link" href="#">
                                                                    <span class="fd-navigation__text">Product Settings</span>
                                                                    <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                                </a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="fd-navigation__list-item" role="treeitem">
                                            <div
                                                class="fd-navigation__item fd-navigation__item--menu"
                                                title="Product Specific"
                                                aria-roledescription="Navigation List Tree Item"
                                                aria-selected="false"
                                                aria-expanded="false"
                                                >
                                                <a class="fd-navigation__link" role="link" href="#">
                                                    <span class="fd-navigation__icon sap-icon--product" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-navigation__text">Product Specific</span>
                                                    <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                </a>
                                            </div>
                                        </li>
                                        <li class="fd-navigation__list-item" role="treeitem">
                                            <div
                                                class="fd-navigation__item fd-navigation__item--menu"
                                                title="Product Specific"
                                                aria-roledescription="Navigation List Tree Item"
                                                aria-selected="true"
                                                aria-expanded="false"
                                                >
                                                <a class="fd-navigation__link" role="link" href="#">
                                                    <span class="fd-navigation__icon sap-icon--flag" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-navigation__text">Product Specific</span>
                                                    <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                </a>
                                            </div>
                                        </li>
                                        <li class="fd-navigation__list-item" role="treeitem">
                                            <div
                                                class="fd-navigation__item fd-navigation__item--menu"
                                                title="Product Specific"
                                                aria-roledescription="Navigation List Tree Item"
                                                aria-selected="false"
                                                aria-expanded="false"
                                                >
                                                <a class="fd-navigation__link" role="link" href="#">
                                                    <span class="fd-navigation__icon sap-icon--card" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-navigation__text">Product Specific</span>
                                                    <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                </a>
                                            </li>
                                            <li class="fd-navigation__list-item" role="treeitem">
                                                <div
                                                    class="fd-navigation__item fd-navigation__item--menu"
                                                    title="Legal Information"
                                                    aria-roledescription="Navigation List Tree Item"
                                                    aria-selected="false"
                                                    aria-expanded="false"
                                                    >
                                                    <a class="fd-navigation__link" role="link" href="#">
                                                        <span class="fd-navigation__icon sap-icon--card" role="presentation" aria-hidden="true"></span>
                                                        <span class="fd-navigation__text">Legal Information</span>
                                                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                        <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div class="fd-user-menu__footer">
                                                <button class="fd-button fd-button--compact">Sign Out</button>
                                            </div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-popover--right` | Style variant |

## States

| Class | Description |
|-------|-------------|
| `is-cozy` | Cozy state |

## BEM Elements

This component uses the following BEM elements:

- `fd-popover__body`
- `fd-popover__body--before`
- `fd-popover__body--no-arrow`
- `fd-popover__body--right`
- `fd-popover__control`
- `fd-popover__wrapper`

## Related Components

This component works with or depends on:

- `avatar`
- `bar`
- `button`
- `icon`
- `navigation`
- `popover`
- `user-menu`

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

### Desktop

```html
<div class="is-cozy">
    <div class="fd-popover fd-popover--right fd-user-menu fd-user-menu--tool-header">
        <div class="fd-popover__control">
            <span
                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
                aria-controls="popoverA1TH"
                aria-expanded="true"
                aria-haspopup="true"
                aria-label="Avatar"

                onclick="onPopoverClick('popoverA1TH');"
                role="button"
                tabindex="0"></span>
                <div class="fd-popover__body fd-popover__body--right fd-user-menu__popover-body" aria-hidden="false" id="popoverA1TH">
                    <div class="fd-user-menu__body">
                        <div class="fd-user-menu__header">
                            <span
                                class="fd-avatar fd-avatar--96 fd-avatar--circle fd-avatar--thumbnail fd-user-menu__avatar"
                                aria-label="Avatar"
                                ></span>
                            </div>
                            <div class="fd-user-menu__subheader">
                                <div class="fd-user-menu__user-name">Kevin Miller</div>
                                <div class="fd-user-menu__user-role">Design Expert</div>
                            </div>
                            <div class="fd-user-menu__navigation-menu">
                                <div class="fd-navigation">
                                    <ul class="fd-navigation__list" role="tree">
                                        <li class="fd-navigation__list-item" role="treeitem">
                                            <div
                                                class="fd-navigation__item fd-navigation__item--menu"
                                                title="User Account"
                                                aria-roledescription="Navigation List Tree Item"
                                                aria-selected="false"
                                                aria-expanded="false"
                                                >
                                                <a class="fd-navigation__link" role="link" href="#">
                                                    <span class="fd-navigation__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-navigation__text">User Account</span>
                                                    <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                </a>
                                            </div>

                                        </li>
                                        <li class="fd-navigation__list-item fd-popover" role="treeitem">
                                            <div
                                                class="fd-navigation__item fd-navigation__item--menu fd-popover__control"
                                                title="Settings"
                                                aria-roledescription="Navigation List Tree Item"
                                                aria-selected="false"
                                                aria-expanded="true"
                                                aria-haspopup="tree"
                                                >
                                                <a class="fd-navigation__link" role="link" href="#">
                                                    <span class="fd-navigation__icon sap-icon--action-settings" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-navigation__text">Settings</span>
                                                    <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                    <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
                                                </a>
                                            </div>
                                            <div class="fd-user-menu__navigation-submenu fd-popover__body fd-popover__body--before fd-popover__body--no-arrow" role="tree" aria-roledescription="User Menu Submenu">
                                                <div class="fd-popover__wrapper fd-user-menu__navigation-submenu-wrapper">
                                                    <ul class="fd-navigation__list fd-navigation__list--child-items">
                                                        <li class="fd-navigation__list-item" role="treeitem">
                                                            <div
                                                                class="fd-navigation__item fd-navigation__item--menu fd-navigation__item--child"
                                                                title="Personalization"
                                                                aria-roledescription="Navigation List Tree Item"
                                                                aria-selected="false"
                                                                aria-expanded="false"
                                                                >
                                                                <a class="fd-navigation__link" role="link" href="#">
                                                                    <span class="fd-navigation__text">Personalization</span>
                                                                    <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li class="fd-navigation__list-item" role="treeitem">
                                                            <div
                                                                class="fd-navigation__item fd-navigation__item--menu fd-navigation__item--child"
                                                                title="Users and Permissions"
                                                                aria-roledescription="Navigation List Tree Item"
                                                                aria-selected="false"
                                                                aria-expanded="false"
                                                                >
                                                                <a class="fd-navigation__link" role="link" href="#">
                                                                    <span class="fd-navigation__text">Users and Permissions</span>
                                                                    <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li class="fd-navigation__list-item" role="treeitem">
                                                            <div
                                                                class="fd-navigation__item fd-navigation__item--menu fd-navigation__item--child"
                                                                title="Product Settings"
                                                                aria-roledescription="Navigation List Tree Item"
                                                                aria-selected="false"
                                                                aria-expanded="false"
                                                                >
                                                                <a class="fd-navigation__link" role="link" href="#">
                                                                    <span class="fd-navigation__text">Product Settings</span>
                                                                    <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                                </a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="fd-navigation__list-item" role="treeitem">
                                            <div
                                                class="fd-navigation__item fd-navigation__item--menu"
                                                title="Product Specific"
                                                aria-roledescription="Navigation List Tree Item"
                                                aria-selected="false"
                                                aria-expanded="false"
                                                >
                                                <a class="fd-navigation__link" role="link" href="#">
                                                    <span class="fd-navigation__icon sap-icon--product" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-navigation__text">Product Specific</span>
                                                    <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                </a>
                                            </div>
                                        </li>
                                        <li class="fd-navigation__list-item" role="treeitem">
                                            <div
                                                class="fd-navigation__item fd-navigation__item--menu"
                                                title="Product Specific"
                                                aria-roledescription="Navigation List Tree Item"
                                                aria-selected="true"
                                                aria-expanded="false"
                                                >
                                                <a class="fd-navigation__link" role="link" href="#">
                                                    <span class="fd-navigation__icon sap-icon--flag" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-navigation__text">Product Specific</span>
                                                    <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                </a>
                                            </div>
                                        </li>
                                        <li class="fd-navigation__list-item" role="treeitem">
                                            <div
                                                class="fd-navigation__item fd-navigation__item--menu"
                                                title="Product Specific"
                                                aria-roledescription="Navigation List Tree Item"
                                                aria-selected="false"
                                                aria-expanded="false"
                                                >
                                                <a class="fd-navigation__link" role="link" href="#">
                                                    <span class="fd-navigation__icon sap-icon--card" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-navigation__text">Product Specific</span>
                                                    <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                </a>
                                            </li>
                                            <li class="fd-navigation__list-item" role="treeitem">
                                                <div
                                                    class="fd-navigation__item fd-navigation__item--menu"
                                                    title="Legal Information"
                                                    aria-roledescription="Navigation List Tree Item"
                                                    aria-selected="false"
                                                    aria-expanded="false"
                                                    >
                                                    <a class="fd-navigation__link" role="link" href="#">
                                                        <span class="fd-navigation__icon sap-icon--card" role="presentation" aria-hidden="true"></span>
                                                        <span class="fd-navigation__text">Legal Information</span>
                                                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                        <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div class="fd-user-menu__footer">
                                                <button class="fd-button fd-button--compact">Sign Out</button>
                                            </div>
```

### Tablet

```html
<div class="is-cozy">
    <div class="fd-popover fd-popover--right fd-user-menu fd-user-menu--tool-header">
        <div class="fd-popover__control">
            <span
                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
                aria-controls="popoverA2TH"
                aria-expanded="true"
                aria-haspopup="true"
                aria-label="Avatar"

                onclick="onPopoverClick('popoverA2TH');"
                role="button"
                tabindex="0"></span>
                <div class="fd-popover__body fd-popover__body--right fd-user-menu__popover-body" aria-hidden="false" id="popoverA2TH">
                    <div class="fd-user-menu__body fd-popover__wrapper">
                        <div class="fd-user-menu__header">
                            <span
                                class="fd-avatar fd-avatar--96 fd-avatar--circle fd-avatar--thumbnail fd-user-menu__avatar"
                                aria-label="Avatar"
                                ></span>
                            </div>
                            <div class="fd-user-menu__subheader">
                                <div class="fd-user-menu__user-name">Kevin Miller</div>
                                <div class="fd-user-menu__user-role">Design Expert</div>
                            </div>
                            <div class="fd-user-menu__navigation-menu">
                                <div class="fd-navigation fd-navigation--tablet">
                                    <ul class="fd-navigation__list" role="tree">
                                        <li class="fd-navigation__list-item" role="treeitem">
                                            <div
                                                class="fd-navigation__item fd-navigation__item--menu"
                                                title="User Account"
                                                aria-roledescription="Navigation List Tree Item"
                                                aria-selected="false"
                                                aria-expanded="false"
                                                >
                                                <a class="fd-navigation__link" role="link" href="#">
                                                    <span class="fd-navigation__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-navigation__text">User Account</span>
                                                    <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                </a>
                                            </div>

                                        </li>
                                        <li class="fd-navigation__list-item fd-popover" role="treeitem">
                                            <div
                                                class="fd-navigation__item fd-navigation__item--menu fd-popover__control"
                                                title="Settings"
                                                aria-roledescription="Navigation List Tree Item"
                                                aria-selected="false"
                                                aria-expanded="true"
                                                aria-haspopup="tree"
                                                >
                                                <a class="fd-navigation__link" role="link" href="#">
                                                    <span class="fd-navigation__icon sap-icon--action-settings" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-navigation__text">Settings</span>
                                                    <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                    <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
                                                </a>
                                            </div>
                                            <div class="fd-user-menu__navigation-submenu fd-popover__body fd-popover__body--before fd-popover__body--no-arrow" role="tree" aria-roledescription="User Menu Submenu">
                                                <div class="fd-popover__wrapper fd-user-menu__navigation-submenu-wrapper">
                                                    <ul class="fd-navigation__list fd-navigation__list--child-items">
                                                        <li class="fd-navigation__list-item" role="treeitem">
                                                            <div
                                                                class="fd-navigation__item fd-navigation__item--menu fd-navigation__item--child"
                                                                title="Personalization"
                                                                aria-roledescription="Navigation List Tree Item"
                                                                aria-selected="false"
                                                                aria-expanded="false"
                                                                >
                                                                <a class="fd-navigation__link" role="link" href="#">
                                                                    <span class="fd-navigation__text">Personalization</span>
                                                                    <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li class="fd-navigation__list-item" role="treeitem">
                                                            <div
                                                                class="fd-navigation__item fd-navigation__item--menu fd-navigation__item--child"
                                                                title="Users and Permissions"
                                                                aria-roledescription="Navigation List Tree Item"
                                                                aria-selected="false"
                                                                aria-expanded="false"
                                                                >
                                                                <a class="fd-navigation__link" role="link" href="#">
                                                                    <span class="fd-navigation__text">Users and Permissions</span>
                                                                    <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li class="fd-navigation__list-item" role="treeitem">
                                                            <div
                                                                class="fd-navigation__item fd-navigation__item--menu fd-navigation__item--child"
                                                                title="Product Settings"
                                                                aria-roledescription="Navigation List Tree Item"
                                                                aria-selected="false"
                                                                aria-expanded="false"
                                                                >
                                                                <a class="fd-navigation__link" role="link" href="#">
                                                                    <span class="fd-navigation__text">Product Settings</span>
                                                                    <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                                </a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="fd-navigation__list-item" role="treeitem">
                                            <div
                                                class="fd-navigation__item fd-navigation__item--menu"
                                                title="Product Specific"
                                                aria-roledescription="Navigation List Tree Item"
                                                aria-selected="false"
                                                aria-expanded="false"
                                                >
                                                <a class="fd-navigation__link" role="link" href="#">
                                                    <span class="fd-navigation__icon sap-icon--product" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-navigation__text">Product Specific</span>
                                                    <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                </a>
                                            </div>
                                        </li>
                                        <li class="fd-navigation__list-item" role="treeitem">
                                            <div
                                                class="fd-navigation__item fd-navigation__item--menu"
                                                title="Product Specific"
                                                aria-roledescription="Navigation List Tree Item"
                                                aria-selected="true"
                                                aria-expanded="false"
                                                >
                                                <a class="fd-navigation__link" role="link" href="#">
                                                    <span class="fd-navigation__icon sap-icon--flag" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-navigation__text">Product Specific</span>
                                                    <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                </a>
                                            </div>
                                        </li>
                                        <li class="fd-navigation__list-item" role="treeitem">
                                            <div
                                                class="fd-navigation__item fd-navigation__item--menu"
                                                title="Product Specific"
                                                aria-roledescription="Navigation List Tree Item"
                                                aria-selected="false"
                                                aria-expanded="false"
                                                >
                                                <a class="fd-navigation__link" role="link" href="#">
                                                    <span class="fd-navigation__icon sap-icon--card" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-navigation__text">Product Specific</span>
                                                    <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                </a>
                                            </li>
                                            <li class="fd-navigation__list-item" role="treeitem">
                                                <div
                                                    class="fd-navigation__item fd-navigation__item--menu"
                                                    title="Legal Information"
                                                    aria-roledescription="Navigation List Tree Item"
                                                    aria-selected="false"
                                                    aria-expanded="false"
                                                    >
                                                    <a class="fd-navigation__link" role="link" href="#">
                                                        <span class="fd-navigation__icon sap-icon--card" role="presentation" aria-hidden="true"></span>
                                                        <span class="fd-navigation__text">Legal Information</span>
                                                        <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                        <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div class="fd-user-menu__footer">
                                                <button class="fd-button">Sign Out</button>
                                            </div>
```

### Phone

```html
<div class="is-cozy">
    <div class="fd-popover fd-popover--right fd-user-menu fd-user-menu--tool-header">
        <div class="fd-popover__control">
            <span
                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
                aria-controls="popoverA3TH"
                aria-expanded="true"
                aria-haspopup="true"
                aria-label="Avatar"

                onclick="onPopoverClick('popoverA3TH');"
                role="button"
                tabindex="0"></span>
                <div class="fd-popover__body fd-popover__body--right fd-user-menu__popover-body" aria-hidden="false" id="popoverA3TH">
                    <div class="fd-user-menu__body fd-popover__wrapper">
                        <div class="fd-user-menu__header">
                            <span
                                class="fd-avatar fd-avatar--96 fd-avatar--circle fd-avatar--thumbnail fd-user-menu__avatar"
                                aria-label="Avatar"
                                ></span>
                            </div>
                            <div class="fd-user-menu__subheader">
                                <div class="fd-user-menu__user-name">Kevin Miller</div>
                                <div class="fd-user-menu__user-role">Design Expert</div>
                            </div>
                            <div class="fd-user-menu__navigation-menu">
                                <div class="fd-navigation fd-navigation--phone">
                                    <ul class="fd-navigation__list" role="tree">
                                        <li class="fd-navigation__list-item" role="treeitem">
                                            <div
                                                class="fd-navigation__item fd-navigation__item--menu"
                                                title="User Account"
                                                aria-roledescription="Navigation List Tree Item"
                                                aria-selected="false"
                                                aria-expanded="false"
                                                >
                                                <a class="fd-navigation__link" role="link" href="#">
                                                    <span class="fd-navigation__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-navigation__text">User Account</span>
                                                    <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                </a>
                                            </div>

                                        </li>
                                        <li class="fd-navigation__list-item" role="treeitem">
                                            <div
                                                class="fd-navigation__item fd-navigation__item--menu"
                                                title="Settings"
                                                aria-roledescription="Navigation List Tree Item"
                                                aria-selected="false"
                                                aria-expanded="true"
                                                >
                                                <a class="fd-navigation__link" role="link" href="#">
                                                    <span class="fd-navigation__icon sap-icon--action-settings" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-navigation__text">Settings</span>
                                                    <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                    <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
                                                </a>
                                            </div>
                                        </li>
                                        <li class="fd-navigation__list-item" role="treeitem">
                                            <div
                                                class="fd-navigation__item fd-navigation__item--menu"
                                                title="Product Specific"
                                                aria-roledescription="Navigation List Tree Item"
                                                aria-selected="false"
                                                aria-expanded="false"
                                                >
                                                <a class="fd-navigation__link" role="link" href="#">
                                                    <span class="fd-navigation__icon sap-icon--product" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-navigation__text">Product Specific</span>
                                                    <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                </a>
                                            </div>
                                        </li>
                                        <li class="fd-navigation__list-item" role="treeitem">
                                            <div
                                                class="fd-navigation__item fd-navigation__item--menu"
                                                title="Product Specific"
                                                aria-roledescription="Navigation List Tree Item"
                                                aria-selected="true"
                                                aria-expanded="false"
                                                >
                                                <a class="fd-navigation__link" role="link" href="#">
                                                    <span class="fd-navigation__icon sap-icon--flag" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-navigation__text">Product Specific</span>
                                                    <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                </a>
                                            </div>
                                        </li>
                                        <li class="fd-navigation__list-item" role="treeitem">
                                            <div
                                                class="fd-navigation__item fd-navigation__item--menu"
                                                title="Product Specific"
                                                aria-roledescription="Navigation List Tree Item"
                                                aria-selected="false"
                                                aria-expanded="false"
                                                >
                                                <a class="fd-navigation__link" role="link" href="#">
                                                    <span class="fd-navigation__icon sap-icon--card" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-navigation__text">Product Specific</span>
                                                    <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                </a>
                                            </div>
                                        </li>
                                        <li class="fd-navigation__list-item" role="treeitem">
                                            <div
                                                class="fd-navigation__item fd-navigation__item--menu"
                                                title="Legal Information"
                                                aria-roledescription="Navigation List Tree Item"
                                                aria-selected="false"
                                                aria-expanded="false"
                                                >
                                                <a class="fd-navigation__link" role="link" href="#">
                                                    <span class="fd-navigation__icon sap-icon--card" role="presentation" aria-hidden="true"></span>
                                                    <span class="fd-navigation__text">Legal Information</span>
                                                    <span class="fd-navigation__selection-indicator" aria-label="selection indicator"></span>
                                                    <span class="fd-navigation__has-children-indicator" role="presentation" aria-hidden="true" aria-label="has children indicator, expanded"></span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="fd-bar fd-bar--footer">
                                    <div class="fd-bar__right">
                                        <div class="fd-bar__element">
                                            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Sign Out</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="is-cozy">
                                    <div class="fd-popover fd-popover--right fd-user-menu fd-user-menu--tool-header">
                                        <div class="fd-popover__control">
                                            <span
                                                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
                                                aria-controls="popoverA4TH"
                                                aria-expanded="true"
                                                aria-haspopup="true"
                                                aria-label="Avatar"

                                                onclick="onPopoverClick('popoverA4TH');"
                                                role="button"
                                                tabindex="0"></span>
                                                <div class="fd-popover__body fd-popover__body--right fd-user-menu__popover-body" aria-hidden="false" id="popoverA4TH">
                                                    <div class="fd-user-menu__body fd-popover__wrapper">
                                                        <div class="fd-user-menu__navigation-menu">
                                                            <div class="fd-navigation fd-navigation--phone">
                                                                <ul class="fd-navigation__list"
                                                                    role="tree"
                                                                    aria-roledescription="Navigation List Tree"
                                                                    aria-hidden="false">
                                                                    <li class="fd-navigation__list-item" aria-hidden="true">
                                                                        <div class="fd-navigation__item fd-navigation__item--title" aria-level="1" role="treeitem" aria-expanded="true" aria-selected="false" >
                                                                            <a class="fd-navigation__link" role="button" tabindex="0">
                                                                                <span class="fd-navigation__icon sap-icon--navigation-left-arrow" role="presentation" aria-hidden="true"></span>
                                                                                <span class="fd-navigation__back-indicator" role="presentation" aria-hidden="true"></span>
                                                                                <span class="fd-navigation__text">Settings</span>
                                                                                <span class="fd-navigation__selection-indicator"></span>
                                                                            </a>
                                                                        </div>
                                                                        <ul
                                                                            class="fd-navigation__list fd-navigation__list--child-items"
                                                                            role="group"
                                                                            aria-roledescription="Navigation List Tree - Child Items"
                                                                            tabindex="-1"
                                                                            aria-hidden="true"
                                                                            >
                                                                            <li class="fd-navigation__list-item" aria-hidden="true">
                                                                                <div
                                                                                    class="fd-navigation__item fd-navigation__item--child fd-navigation__item--menu"
                                                                                    aria-level="2"
                                                                                    role="treeitem"
                                                                                    title="Personalization"
                                                                                    aria-roledescription="Navigation List Menu Item - Child"
                                                                                    aria-expanded="false"
                                                                                    aria-selected="false"
                                                                                    >
                                                                                    <a class="fd-navigation__link" role="link" href="#">
                                                                                        <span class="fd-navigation__text">Personalization</span>
                                                                                        <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                                                                    </a>
                                                                                </div>
                                                                            </li>
                                                                            <li class="fd-navigation__list-item" aria-hidden="true">
                                                                                <div
                                                                                    class="fd-navigation__item fd-navigation__item--child fd-navigation__item--menu"
                                                                                    aria-level="2"
                                                                                    role="treeitem"
                                                                                    title="Users and Permissions"
                                                                                    aria-roledescription="Navigation List Menu Item - Child"
                                                                                    aria-expanded="false"
                                                                                    aria-selected="true"
                                                                                    >
                                                                                    <a class="fd-navigation__link" role="link" href="#">
                                                                                        <span class="fd-navigation__text">Users and Permissions</span>
                                                                                        <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                                                                    </a>
                                                                                </div>
                                                                            </li>
                                                                            <li class="fd-navigation__list-item" aria-hidden="true">
                                                                                <div
                                                                                    class="fd-navigation__item fd-navigation__item--child fd-navigation__item--menu"
                                                                                    aria-level="2"
                                                                                    role="treeitem"
                                                                                    title="Product Settings"
                                                                                    aria-roledescription="Navigation List Menu Item - Child"
                                                                                    aria-expanded="false"
                                                                                    aria-selected="false"
                                                                                    >
                                                                                    <a class="fd-navigation__link" role="link" href="#">
                                                                                        <span class="fd-navigation__text">Product Settings</span>
                                                                                        <span class="fd-navigation__selection-indicator" role="presentation" aria-hidden="true" aria-label="selection indicator"></span>
                                                                                    </a>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
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

This documentation was automatically generated from: `packages/styles/stories/BTP/user-menu/user-menu.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
