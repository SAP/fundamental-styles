---
component: fd-navigation-menu
title: Dev/Navigation Menu
category: BTP
selector: fd-navigation-menu
cssFile: navigation-menu.css
sourcePath: packages/styles/stories/BTP/navigation-menu/navigation-menu.stories.js
tags: ["btp","horizon-only"]
dependencies: ["icon","navigation-menu"]
relatedComponents: ["icon","navigation-menu"]
stability: stable
---

# Dev/Navigation Menu



## Dependencies

This component depends on the following CSS files:

- `icon.css`
- `navigation-menu.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/navigation-menu.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/navigation-menu.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-navigation-menu">
    <div class="fd-navigation-menu__item" tabindex="0">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item (normal)
        </span>
    </div>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--has-children" tabindex="0">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item with children
        </span>
    </div>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--has-children" aria-expanded="true" tabindex="0">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item with children (expanded)
        </span>
    </div>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--has-link-indicator" tabindex="0">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item with external link indicator
        </span>
    </div>
    <div class="fd-navigation-menu__item is-hover" tabindex="0">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item (hover)
        </span>
    </div>
    <div class="fd-navigation-menu__item is-active" tabindex="0">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item (active)
        </span>
    </div>
    <div class="fd-navigation-menu__item is-selected" tabindex="0">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item (selected)
        </span>
    </div>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--has-children is-selected" tabindex="0">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item (selected) with children
        </span>
    </div>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--has-link-indicator is-selected" tabindex="0">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item (selected) with external link indicator
        </span>
    </div>
    <div class="fd-navigation-menu__item is-focus" tabindex="0">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item (focus)
        </span>
    </div>
    <div class="fd-navigation-menu__item is-disabled" tabindex="-1">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item (disabled)
        </span>
    </div>
</div>
```

## States

| Class | Description |
|-------|-------------|
| `is-active` | Active state |
| `is-disabled` | Disabled state |
| `is-focus` | Focus state |
| `is-hover` | Hover state |
| `is-selected` | Selected state |

## BEM Elements

This component uses the following BEM elements:

- `fd-navigation-menu__icon`
- `fd-navigation-menu__item`
- `fd-navigation-menu__item--child`
- `fd-navigation-menu__item--group`
- `fd-navigation-menu__item--has-children`
- `fd-navigation-menu__item--has-link-indicator`
- `fd-navigation-menu__text`

## Related Components

This component works with or depends on:

- `icon`
- `navigation-menu`

## Design Tokens

Key CSS variables used by this component:

- `--child`
- `--fdNavigationMenu_Item_Background`
- `--fdNavigationMenu_Item_Border_Bottom_Color`
- `--fdNavigationMenu_Item_Border_Bottom_Color_Normal`
- `--fdNavigationMenu_Item_Border_Color`
- `--fdNavigationMenu_Item_Border_Color_Active`
- `--fdNavigationMenu_Item_Border_Color_Hover`
- `--fdNavigationMenu_Item_Border_Color_Normal`
- `--fdNavigationMenu_Item_Border_Color_Selected`
- `--fdNavigationMenu_Item_Border_Radius`
- `--fdNavigationMenu_Item_Child_Indicator_Size`
- `--fdNavigationMenu_Item_Font_Size`
- `--fdNavigationMenu_Item_Font_Weight`
- `--fdNavigationMenu_Item_Has_Child_Indicator_Icon`
- `--fdNavigationMenu_Item_Has_Link_Indicator_Icon`

*...and 5 more*

## Examples

### Parent Navigation Menu Item

The Parent Navigation Menu Item has base class <code>.fd-navigation-menu__item</code>. <br>
      When the item has children use the <code>fd-navigation-menu__item--has-children</code> modifier class. <br>
      For item with external link indicator apply the <code>fd-navigation-menu__item--has-link-indicator</code> modifier class.

```html
<div class="fd-navigation-menu">
    <div class="fd-navigation-menu__item" tabindex="0">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item (normal)
        </span>
    </div>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--has-children" tabindex="0">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item with children
        </span>
    </div>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--has-children" aria-expanded="true" tabindex="0">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item with children (expanded)
        </span>
    </div>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--has-link-indicator" tabindex="0">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item with external link indicator
        </span>
    </div>
    <div class="fd-navigation-menu__item is-hover" tabindex="0">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item (hover)
        </span>
    </div>
    <div class="fd-navigation-menu__item is-active" tabindex="0">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item (active)
        </span>
    </div>
    <div class="fd-navigation-menu__item is-selected" tabindex="0">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item (selected)
        </span>
    </div>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--has-children is-selected" tabindex="0">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item (selected) with children
        </span>
    </div>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--has-link-indicator is-selected" tabindex="0">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item (selected) with external link indicator
        </span>
    </div>
    <div class="fd-navigation-menu__item is-focus" tabindex="0">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item (focus)
        </span>
    </div>
    <div class="fd-navigation-menu__item is-disabled" tabindex="-1">
        <span class="fd-navigation-menu__icon sap-icon--home" role="presentation" aria-hidden="true"></span>
        <span class="fd-navigation-menu__text">
            Menu Item (disabled)
        </span>
    </div>
</div>
```

### Child Navigation Menu Item

For Child Navigation Menu Item apply the <code>.fd-navigation-menu__item--child</code> modifier class to the <code>.fd-navigation-menu__item</code> base class.

```html
<div class="fd-navigation-menu">
    <div class="fd-navigation-menu__item fd-navigation-menu__item--child" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item (normal)
        </span>
    </div>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--child fd-navigation-menu__item--has-children" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item with children
        </span>
    </div>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--child fd-navigation-menu__item--has-children" aria-expanded="true" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item with children (expanded)
        </span>
    </div>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--child fd-navigation-menu__item--has-link-indicator" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item with external link indicator
        </span>
    </div>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--child is-hover" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item (hover)
        </span>
    </div>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--child is-active" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item (active)
        </span>
    </div>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--child is-selected" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item (selected)
        </span>
    </div>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--child is-focus" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item (focus)
        </span>
    </div>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--child is-disabled" tabindex="-1">
        <span class="fd-navigation-menu__text">
            Menu Item (disabled)
        </span>
    </div>
</div>
```

### Group Navigation Menu Item

For Group Navigation Menu Item apply the <code>.fd-navigation-menu__item--group</code> modifier class to the <code>.fd-navigation-menu__item</code> base class.

```html
<div class="fd-navigation-menu">
    <div class="fd-navigation-menu__item fd-navigation-menu__item--group" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item (normal)
        </span>
    </div>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--group fd-navigation-menu__item--has-children" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item with children
        </span>
    </div>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--group fd-navigation-menu__item--has-children" aria-expanded="true" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item with children (expanded)
        </span>
    </div>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--group fd-navigation-menu__item--has-link-indicator" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item with external link indicator
        </span>
    </div>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--group is-hover" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item (hover)
        </span>
    </div>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--group is-active" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item (active)
        </span>
    </div>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--group is-selected" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item (selected)
        </span>
    </div>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--group is-focus" tabindex="0">
        <span class="fd-navigation-menu__text">
            Menu Item (focus)
        </span>
    </div>
    <div class="fd-navigation-menu__item fd-navigation-menu__item--group is-disabled" tabindex="-1">
        <span class="fd-navigation-menu__text">
            Menu Item (disabled)
        </span>
    </div>
</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/BTP/navigation-menu/navigation-menu.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
