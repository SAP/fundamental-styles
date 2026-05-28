---
component: fd-menu
title: Components/Menu
category: Components
selector: fd-menu
cssFile: menu.css
sourcePath: packages/styles/stories/Components/menu/menu.stories.js
tags: []
dependencies: ["bar","button","dialog","icon","input","menu","title"]
relatedComponents: ["bar","button","dialog","icon","input","menu","title"]
stability: stable
generatedAt: 2026-06-01T19:23:59.548Z
---

# Components/Menu

The menu component is the listing structure with optional headers to create menus.

Commonly used as the contents when composing "dropdowns", "contextual menus", etc, when paired with the popover component.

## Dependencies

This component depends on the following CSS files:

- `bar.css`
- `button.css`
- `dialog.css`
- `icon.css`
- `input.css`
- `menu.css`
- `title.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/menu.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/bar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/dialog.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/input.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/menu.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/title.css" rel="stylesheet">
```

## Basic Usage

```html
<nav aria-label="navigation menu" class="fd-menu">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 1</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 2</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 3</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 4</span>
            </a>
        </li>
    </ul>
</nav>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-menu--icons` | Style variant |
| `fd-menu--mobile` | The basic structure of a menu in mobile where it opens as a dialog |
| `fd-menu--overflow` | The `fd-menu--overflow` modifier class will clip the content and add a vertical scroll to the element |

## States

| Class | Description |
|-------|-------------|
| `is-active` | Active state |
| `is-disabled` | Disabled state |
| `is-expanded` | Expanded state |
| `is-focus` | Focus state |
| `is-hover` | Hover state |
| `is-selected` | Selected state |

## BEM Elements

This component uses the following BEM elements:

- `fd-menu__active-dot`
- `fd-menu__addon-after`
- `fd-menu__addon-after--active`
- `fd-menu__addon-after--submenu`
- `fd-menu__addon-before`
- `fd-menu__checkmark`
- `fd-menu__content`
- `fd-menu__input`
- `fd-menu__item`
- `fd-menu__link`
- `fd-menu__list`
- `fd-menu__list--no-shadow`
- `fd-menu__shortcut`
- `fd-menu__sublist`
- `fd-menu__subtitle`
- `fd-menu__title`

## Related Components

This component works with or depends on:

- `bar`
- `button`
- `dialog`
- `icon`
- `input`
- `menu`
- `title`

## Design Tokens

Key CSS variables used by this component:

- `--active`
- `--fdButton_Menu_Border_Radius`
- `--fdMenu_Active_Dot_Size`
- `--fdMenu_Active_State_Focus`
- `--fdMenu_Affordance_Arrow_Size`
- `--fdMenu_Icon_Color`
- `--fdMenu_Icon_Width`
- `--fdMenu_Item_Background_Color`
- `--fdMenu_Item_Border_Bottom_Color`
- `--fdMenu_Item_Spacing_Left`
- `--fdMenu_Item_Spacing_Right`
- `--fdMenu_Link_Height`
- `--fdMenu_Shortcut_Color`
- `--fdMenu_Shortcut_Color_Active`
- `--fdMenu_Shortcut_Color_Regular`

*...and 5 more*

## Examples

### Default

The basic structure of a menu. Place the menu item title in a \

```html
<nav aria-label="navigation menu" class="fd-menu">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 1</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 2</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 3</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 4</span>
            </a>
        </li>
    </ul>
</nav>
```

### Vertical overflow

The `fd-menu--overflow` modifier class will clip the content and add a vertical scroll to the element. You need to manually set the max-height of the element on the `fd-menu` level. For example: `style=

```html
<nav aria-label="navigation menu" class="fd-menu fd-menu--overflow">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 1</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 2</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 3</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 4</span>
            </a>
        </li>
    </ul>
</nav>
```

### MobileMode

The basic structure of a menu in mobile where it opens as a dialog. Use class `fd-menu--mobile` on menu container level. Example shows the parent menu\

```html
<div

    class="fd-dialog fd-dialog-docs-static fd-select-docs-max-height fd-dialog--active"
    id="select-dialog-example"
    >
    <section aria-labelledby="exampleSubMenuHeader" class="fd-dialog__content fd-dialog__content--mobile" role="dialog">
        <header aria-label="bar-header" class="fd-dialog__header fd-bar fd-bar--header">

        </header>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <nav
                aria-label="example sub-menu options"
                class="fd-menu fd-menu--mobile fd-menu--icons"
                id="parent-menu"
                tabindex="-1"
                >
                <ul class="fd-menu__list" role="menu">
                    <li class="fd-menu__item" role="presentation">
                        <a class="fd-menu__link" href="#" role="menuitem">
                            <span class="fd-menu__addon-before"
                                ><i class="sap-icon--grid" role="presentation"></i
                                ></span>
                                <span class="fd-menu__title">Option 1</span>
                                <span class="fd-menu__addon-after"
                                    ><i class="sap-icon--wrench" role="presentation"></i
                                    ></span>
                                </a>
                            </li>
                            <li class="fd-menu__item" role="presentation">
                                <a class="fd-menu__link is-active" href="#" role="menuitem">
                                    <span class="fd-menu__addon-before"
                                        ><i class="sap-icon--accept" role="presentation"></i
                                        ></span>
                                        <span class="fd-menu__title">Option 2</span>
                                        <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                                    </a>
                                </li>
                                <li class="fd-menu__item" role="presentation">
                                    <a class="fd-menu__link" href="#" role="menuitem">
                                        <span class="fd-menu__title">Option 3</span>
                                        <span class="fd-menu__addon-after"
                                            ><i class="sap-icon--lightbulb" role="presentation"></i
                                            ></span>
                                        </a>
                                    </li>
                                    <li class="fd-menu__item" role="presentation">
                                        <a class="fd-menu__link" href="#" role="menuitem">
                                            <span class="fd-menu__addon-before"
                                                ><i class="sap-icon--grid" role="presentation"></i
                                                ></span>
                                                <span class="fd-menu__title">Option 4</span>
                                                <span class="fd-menu__addon-after"
                                                    ><i class="sap-icon--history" role="presentation"></i
                                                    ></span>
                                                </a>
                                            </li>
                                            <li class="fd-menu__item" role="presentation">
                                                <a class="fd-menu__link" href="#" role="menuitem">
                                                    <span class="fd-menu__addon-before"
                                                        ><i class="sap-icon--grid" role="presentation"></i
                                                        ></span>
                                                        <span class="fd-menu__title">Option 4</span>
                                                        <span class="fd-menu__shortcut">Ctrl+Alt+L</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <footer class="fd-dialog__footer fd-bar fd-bar--footer">
                                        <div class="fd-bar__right">
                                            <div class="fd-bar__element">
                                                <button
                                                    aria-label="close options dialog"
                                                    class="fd-button fd-button--light fd-dialog__decisive-button"
                                                    >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    </footer>
                                </section>

                                <div

                                    class="fd-dialog fd-dialog-docs-static fd-select-docs-max-height fd-dialog--active"
                                    id="select-dialog-example-inner"
                                    >
                                    <section aria-labelledby="subOptionHeader" class="fd-dialog__content fd-dialog__content--mobile" role="dialog">
                                        <header class="fd-dialog__header fd-bar fd-bar--header">
                                            <div class="fd-bar__left">
                                                <div class="fd-bar__element">
                                                    <button aria-label="Show main menu options" class="fd-button fd-button--transparent">
                                                        <i class="sap-icon--navigation-left-arrow" role="presentation"></i>
                                                    </button>
                                                </div>
                                                <div class="fd-bar__element">
                                                    <h3 class="fd-title fd-title--h5" id="subOptionHeader">Option 2</h3>
                                                </div>
                                            </div>
                                        </header>
                                        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
                                            <nav aria-label="option 2 sub-options" class="fd-menu fd-menu--mobile">
                                                <ul class="fd-menu__sublist" role="menu">
                                                    <li class="fd-menu__item" role="presentation">
                                                        <a class="fd-menu__link" href="#" role="menuitem">
                                                            <span class="fd-menu__title">Sub-option 1</span>
                                                        </a>
                                                    </li>
                                                    <li class="fd-menu__item" role="presentation">
                                                        <a class="fd-menu__link" href="#" role="menuitem">
                                                            <span class="fd-menu__title">Sub-option 2</span>
                                                        </a>
                                                    </li>
                                                    <li class="fd-menu__item" role="presentation">
                                                        <a class="fd-menu__link" href="#" role="menuitem">
                                                            <span class="fd-menu__title">Sub-option 3</span>
                                                        </a>
                                                    </li>
                                                    <li class="fd-menu__item" role="presentation">
                                                        <a class="fd-menu__link" href="#" role="menuitem">
                                                            <span class="fd-menu__title">Sub-option 4</span>
                                                        </a>
                                                    </li>
                                                    <li class="fd-menu__item" role="presentation">
                                                        <a class="fd-menu__link" href="#" role="menuitem">
                                                            <span class="fd-menu__title"
                                                                >Sub-option 5 with very very very very very very very very very very very very long
                                                                text</span
                                                                >
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                            <footer class="fd-dialog__footer fd-bar fd-bar--footer">
                                                <div class="fd-bar__right">
                                                    <div class="fd-bar__element">
                                                        <button
                                                            aria-label="close options dialog"
                                                            class="fd-button fd-button--light fd-dialog__decisive-button"
                                                            >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                            </footer>
                                        </section>
```

### List with separated items

Separators can be added between Menu Items by adding the \

```html
<nav class="fd-menu">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 1</span>
            </a>
        </li>
        <li class="fd-menu__item has-separator" role="presentation">
            <a class="fd-menu__link is-selected" href="#" role="menuitem">
                <span class="fd-menu__title">Option 2</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 3</span>
            </a>
        </li>
        <li class="fd-menu__item has-separator" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 4</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 5</span>
            </a>
        </li>
    </ul>
</nav>
```

### List different states

Simulate different states to show state behaviour between the items.

- For simulating hover state, use class \

```html
<nav aria-label="navbar" class="fd-menu">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 1- Regular</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link is-hover" href="#" role="menuitem">
                <span class="fd-menu__title">Option 2 - Hover</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link is-active" href="#" role="menuitem">
                <span class="fd-menu__title">Option 3 - Active</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link is-selected" href="#" role="menuitem">
                <span class="fd-menu__title">Option 4 - Selected</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link is-selected is-hover" href="#" role="menuitem">
                <span class="fd-menu__title">Option 5 - Selected-Hover</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link is-disabled" href="#" role="menuitem" tabindex="-1">
                <span class="fd-menu__title">Option 6 - Disabled</span>
            </a>
        </li>
    </ul>
</nav>

<nav class="fd-menu fd-menu--icons">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__addon-before"><i class="sap-icon--grid" role="presentation"></i></span>
                <span class="fd-menu__title">Option 1 - Regular</span>
                <span class="fd-menu__shortcut">Ctrl + A</span>
                <span class="fd-menu__addon-after"><i class="sap-icon--wrench" role="presentation"></i></span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link is-hover" href="#" role="menuitem">
                <span class="fd-menu__addon-before"><i class="sap-icon--accept" role="presentation"></i></span>
                <span class="fd-menu__title">Option 2 - Hover</span>
                <span class="fd-menu__shortcut">Ctrl + A</span>
                <span class="fd-menu__addon-after"><i class="sap-icon--history" role="presentation"></i></span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link is-active" href="#" role="menuitem">
                <span class="fd-menu__addon-before"><i class="sap-icon--wrench" role="presentation"></i></span>
                <span class="fd-menu__title">Option 3 - Active</span>
                <span class="fd-menu__shortcut">Ctrl + A</span>
                <span class="fd-menu__addon-after"><i class="sap-icon--lightbulb" role="presentation"></i></span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link is-selected" href="#" role="menuitem">
                <span class="fd-menu__title">Option 3 - Selected</span>
                <span class="fd-menu__shortcut">Ctrl + A</span>
                <span class="fd-menu__addon-after"><i class="sap-icon--lightbulb" role="presentation"></i></span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link is-selected is-hover" href="#" role="menuitem">
                <span class="fd-menu__addon-before"><i class="sap-icon--cart" role="presentation"></i></span>
                <span class="fd-menu__title">Option 4 - Selected Hover</span>
                <span class="fd-menu__shortcut">Ctrl + A</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link is-disabled" href="#" role="menuitem">
                <span class="fd-menu__addon-before"><i class="sap-icon--cart" role="presentation"></i></span>
                <span class="fd-menu__title">Option 4 - Disabled</span>
                <span class="fd-menu__shortcut">Ctrl + A</span>
                <span class="fd-menu__addon-after"><i class="sap-icon--history" role="presentation"></i></span>
            </a>
        </li>
    </ul>
</nav>

<nav class="fd-menu">
    <ul class="fd-menu__list fd-menu__list--no-shadow" role="menu">
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 1 - Regular</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link is-hover" href="#" role="menuitem">
                <span class="fd-menu__title">Option 2 - Hover</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link is-active" href="#" role="menuitem">
                <span class="fd-menu__title">Option 3 - Active</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link is-selected" href="#" role="menuitem">
                <span class="fd-menu__title">Option 4 - Selected</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link is-selected is-hover" href="#" role="menuitem">
                <span class="fd-menu__title">Option 5 - Selected Hover</span>
            </a>
        </li>
        <li class="fd-menu__item is-disabled" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 6 - Disabled</span>
            </a>
        </li>
    </ul>
</nav>
```

### List with Icon

To create an addon before or after \

```html
<nav class="fd-menu fd-menu--icons">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link is-focus" href="#" role="menuitem">
                <span class="fd-menu__addon-before"><i class="sap-icon--grid" role="presentation"></i></span>
                <span class="fd-menu__title">Option 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis deserunt fugiat odio veniam nam similique molestiae adipisci quo quaerat.</span>
                <span class="fd-menu__addon-after"><i class="sap-icon--wrench" role="presentation"></i></span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__addon-before"><i class="sap-icon--accept" role="presentation"></i></span>
                <span class="fd-menu__title">Option 2</span>
                <span class="fd-menu__addon-after"><i class="sap-icon--history" role="presentation"></i></span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link is-focus" href="#" role="menuitem">
                <span class="fd-menu__addon-before"><i class="sap-icon--wrench" role="presentation"></i></span>
                <span class="fd-menu__title">Option 3</span>
                <span class="fd-menu__addon-after"><i class="sap-icon--lightbulb" role="presentation"></i></span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis deserunt fugiat odio veniam nam similique molestiae adipisci quo quaerat.</span>
                <span class="fd-menu__addon-after"><i class="sap-icon--lightbulb" role="presentation"></i></span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__addon-before"><i class="sap-icon--cart" role="presentation"></i></span>
                <span class="fd-menu__title">Option 4</span>
                <span class="fd-menu__shortcut">Ctrl + A</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__addon-before"><i class="sap-icon--cart" role="presentation"></i></span>
                <span class="fd-menu__title">Option 4</span>
                <span class="fd-menu__shortcut">Ctrl + A</span>
                <span class="fd-menu__addon-after"><i class="sap-icon--history" role="presentation"></i></span>
            </a>
        </li>
    </ul>
</nav>

<nav class="fd-menu fd-menu--icons">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link is-focus" href="#" role="menuitem">
                <span class="fd-menu__addon-before"><i class="sap-icon--grid" role="presentation"></i></span>
                <div class="fd-menu__content">
                    <span class="fd-menu__title">Menu List Item Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    <span class="fd-menu__subtitle">Sub-menu List Item Dolore nemo reiciendis consequuntur consequatur vero maxime.</span>
                    <span class="fd-menu__addon-after"><i class="sap-icon--wrench" role="presentation"></i></span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__addon-before"><i class="sap-icon--accept" role="presentation"></i></span>
                    <div class="fd-menu__content">
                        <span class="fd-menu__title">Menu List Item</span>
                        <span class="fd-menu__subtitle">Sub-menu List Item</span>
                    </div>
                    <span class="fd-menu__addon-after"><i class="sap-icon--history" role="presentation"></i></span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link is-focus" href="#" role="menuitem">
                    <span class="fd-menu__addon-before"><i class="sap-icon--wrench" role="presentation"></i></span>
                    <div class="fd-menu__content">
                        <span class="fd-menu__title">Menu List Item</span>
                        <span class="fd-menu__subtitle">Sub-menu List Item</span>
                    </div>
                    <span class="fd-menu__addon-after"><i class="sap-icon--lightbulb" role="presentation"></i></span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <div class="fd-menu__content">
                        <span class="fd-menu__title">Menu List Item</span>
                        <span class="fd-menu__subtitle">Sub-menu List Item</span>
                    </div>
                    <span class="fd-menu__addon-after fd-menu__addon-after--active"><i class="sap-icon--accept" role="presentation"></i></span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__addon-before"><i class="sap-icon--cart" role="presentation"></i></span>
                    <div class="fd-menu__content">
                        <span class="fd-menu__title">Menu List Item Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                        <span class="fd-menu__subtitle">Sub-menu List Item Iusto laboriosam illum maiores at. At provident officiis dolorum nisi.</span>
                    </div>
                    <span class="fd-menu__shortcut">Ctrl + A</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__addon-before"><i class="sap-icon--cart" role="presentation"></i></span>
                    <div class="fd-menu__content">
                        <span class="fd-menu__title">Menu List Item</span>
                        <span class="fd-menu__subtitle">Sub-menu List Item</span>
                    </div>
                    <span class="fd-menu__shortcut">Ctrl + A</span>
                    <span class="fd-menu__addon-after"><i class="sap-icon--history" role="presentation"></i></span>
                </a>
            </li>
        </ul>
    </nav>
</div>
```

### WithSubmenu

Menu with an additional submenu that can be used for items that can be further grouped under a level but not necessarily visible to user always.

For a submenu, do the following:
- Specify \

```html
<nav class="fd-menu">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 1</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <!-- For submenu, have the parent menu item in its own span so that its states do not override the submenu states -->
            <span
                class="fd-menu__link has-child is-expanded"
                aria-controls="EX100M2"
                aria-expanded="true"
                aria-haspopup="true"
                role="menuitem"
                onclick="onPopoverClick('EX100M2')">
                <span class="fd-menu__title">Option 2 with submenu</span>
                <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
            </span>
            <ul class="fd-menu__sublist" id="EX100M2" aria-hidden="false" role="menu">
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <span class="fd-menu__title">Sub-option 1</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <div class="fd-menu__content">
                            <span class="fd-menu__title">Sub-option 1a</span>
                        </div>
                        <span class="fd-menu__addon-after fd-menu__addon-after--active"><i class="sap-icon--accept" role="presentation"></i></span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <div class="fd-menu__content">
                            <span class="fd-menu__title">Sub-option 1b</span>
                            <span class="fd-menu__subtitle">Subtitle List Item</span>
                        </div>
                        <span class="fd-menu__addon-after fd-menu__addon-after--active"><i class="sap-icon--accept" role="presentation"></i></span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link is-hover" href="#" role="menuitem">
                        <span class="fd-menu__title">Sub-option 2 - Hover</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link is-active" href="#" role="menuitem">
                        <span class="fd-menu__title">Sub-option 3 - Active</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link is-selected" href="#" role="menuitem">
                        <span class="fd-menu__title">Sub-option 4 - Selected</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link is-selected is-hover" href="#" role="menuitem">
                        <span class="fd-menu__title">Sub-option 5 - Selected Hover</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link is-disabled" href="#" role="menuitem">
                        <span class="fd-menu__title">Sub-option 6 - Disabled with very very very very very very very very long text</span>
                    </a>
                </li>
            </ul>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 3</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Option 4</span>
            </a>
        </li>
    </ul>
</nav>
```

### Extended Menu List Items (Segmented Button)

Each view of the segmented button gets its own menu item. The selected Button in the Segmented Button gets the Active Dot in front of the Menu List Item and is always separated with a separator. The 'segmented button menu items' cannot have an icon in front. Instead, the place is reserved for the Active Dot.

```html
<nav class="fd-menu fd-menu--icons">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item has-separator" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__addon-before"><i class="sap-icon--sort" role="presentation"></i></span>
                <span class="fd-menu__title">Sort</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__addon-before">
                    <span class="fd-menu__active-dot" role="presentation"></span>
                </span>
                <span class="fd-menu__title">View 1</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">View 2</span>
            </a>
        </li>
        <li class="fd-menu__item has-separator" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">View 3</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__addon-before"><i class="sap-icon--action-settings" role="presentation"></i></span>
                <span class="fd-menu__title">Settings</span>
            </a>
        </li>
    </ul>
</nav>
```

### Extended Menu List Items (Toggle Button)

The toggle button gets “transformed” into a menu item which can be toggled and untoggled. If the toggle button is toggled, then a checkmark appears in front of the text (on position of an icon). If It's not toggled, then the space is empty. It is not possible to show an icon for the toggle button in the menu. This spot is reserved for the checkmark.

```html
<nav class="fd-menu fd-menu--icons">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item has-separator" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__title">Toggle Button (untoggled)</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__addon-before"><i class="sap-icon--sort" role="presentation"></i></span>
                <span class="fd-menu__title">View 1</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__addon-before"><i class="sap-icon--action-settings" role="presentation"></i></span>
                <span class="fd-menu__title">View 2</span>
            </a>
        </li>
    </ul>
</nav>

<nav class="fd-menu fd-menu--icons">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item has-separator" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__addon-before">
                    <i class="sap-icon--accept fd-menu__checkmark" role="presentation"></i>
                </span>
                <span class="fd-menu__title">Toggle Button (toggled)</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__addon-before"><i class="sap-icon--sort" role="presentation"></i></span>
                <span class="fd-menu__title">View 1</span>
            </a>
        </li>
        <li class="fd-menu__item" role="presentation">
            <a class="fd-menu__link" href="#" role="menuitem">
                <span class="fd-menu__addon-before"><i class="sap-icon--action-settings" role="presentation"></i></span>
                <span class="fd-menu__title">View 2</span>
            </a>
        </li>
    </ul>
</nav>
```

### Extended Menu List Items (Input)

An Input field can be placed in a menu item. When an input is placed in a menu item, the text serves as a label. When there is enough space on desktop-based devices, then the input field is positioned next to the text. If there's not enough space, it moves to the next line. The input field is always positioned below the label on mobile devices.

```html
<nav class="fd-menu fd-menu--icons">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item" role="presentation">
            <div class="fd-menu__link" role="presentation">
                <input class="fd-input fd-menu__input" type="text" id="input-1" placeholder="Field placeholder text">
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__addon-before"><i class="sap-icon--map" role="presentation"></i></span>
                    <span class="fd-menu__title">Add New Pin</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__addon-before"><i class="sap-icon--image-viewer" role="presentation"></i></span>
                    <span class="fd-menu__title">View 360</span>
                </a>
            </li>
        </ul>
    </nav>

    <nav class="fd-menu fd-menu--icons">
        <ul class="fd-menu__list" role="menu">
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__addon-before"><i class="sap-icon--map" role="presentation"></i></span>
                    <span class="fd-menu__title">Add New Pin</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <a class="fd-menu__link" href="#" role="menuitem">
                    <span class="fd-menu__addon-before"><i class="sap-icon--image-viewer" role="presentation"></i></span>
                    <span class="fd-menu__title">View 360</span>
                </a>
            </li>
            <li class="fd-menu__item" role="presentation">
                <div class="fd-menu__link" role="presentation">
                    <span class="fd-menu__addon-before"><i class="sap-icon--filter" role="presentation"></i></span>
                    <span class="fd-menu__title">Filter</span>
                    <input class="fd-input fd-menu__input" type="text" id="input-1" placeholder="Field placeholder text">
                </div>
            </li>
        </ul>
    </nav>
</div>
```

### Extended Menu List Items (Buttons as Menu Items)

The buttons are “transformed” into menu items. It is optional to add an icon and those could be replaced by product teams.

```html
<nav class="fd-menu fd-menu--icons">
    <ul class="fd-menu__list" role="menu">
        <li class="fd-menu__item" role="presentation">
            <button class="fd-menu__link" role="menuitem">
                <span class="fd-menu__title">Sort</span>
            </button>
        </li>
        <li class="fd-menu__item" role="presentation">
            <button class="fd-menu__link" role="menuitem">
                <span class="fd-menu__title">Edit</span>
            </button>
        </li>
        <li class="fd-menu__item" role="presentation">
            <button class="fd-menu__link" role="menuitem">
                <span class="fd-menu__title">Save</span>
            </button>
        </li>
        <li class="fd-menu__item" role="presentation">
            <button class="fd-menu__link" role="menuitem">
                <span class="fd-menu__addon-before"><i class="sap-icon--message-error" role="presentation"></i></span>
                <span class="fd-menu__title">Reject</span>
            </button>
        </li>
        <li class="fd-menu__item" role="presentation">
            <button class="fd-menu__link" role="menuitem">
                <span class="fd-menu__addon-before"><i class="sap-icon--message-success" role="presentation"></i></span>
                <span class="fd-menu__title">Accept</span>
            </button>
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

This documentation was automatically generated from: `packages/styles/stories/Components/menu/menu.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
