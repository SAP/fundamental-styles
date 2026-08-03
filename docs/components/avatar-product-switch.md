---
component: fd-avatar
title: Components/Product Switch
category: Components
selector: fd-avatar
cssFile: avatar.css
sourcePath: packages/styles/stories/Components/product-switch/product-switch.stories.js
tags: []
dependencies: ["avatar","button","icon","popover","product-switch","shellbar"]
relatedComponents: ["avatar","button","icon","popover","product-switch","shellbar"]
stability: stable
---

# Components/Product Switch

The Product Switch, also known as App Launcher, provides users with role-based access to several products or lines of businesses (LoBs). The product switch displays an icon button that triggers a **Popover** with the products or LoBs. Because it is designed to be as simple as possible, the product switch only has one level of navigation.

##Usage
**Use the Product Switch (App Launcher) if:**

-	You want to give your users access to several different products or LoBs within the same UI.


**Do not use the Product Switch (App Launcher) if:**

-	You want your users to navigate within the current product. In this case, use a Product Menu (see **Shellbar**).

## Usage Guidelines

**Use the Product Switch (App Launcher) if:**

-	You want to give your users access to several different products or LoBs within the same UI.

## When Not To Use

-	You want your users to navigate within the current product. In this case, use a Product Menu (see **Shellbar**).

## Dependencies

This component depends on the following CSS files:

- `avatar.css`
- `button.css`
- `icon.css`
- `popover.css`
- `product-switch.css`
- `shellbar.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/avatar.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/avatar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/popover.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/product-switch.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/shellbar.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-product-switch__body">
    <ul class="fd-product-switch__list" role="menu">
        <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Home Home Home Home Home Home Home Home Central Home Central Home Central Home Central Home" aria-posinset="1" aria-setsize="14">
            <span class="fd-avatar fd-avatar--sm fd-avatar--transparent" role="img" aria-label="Home">
                <i role="presentation" aria-hidden="true" class="fd-avatar__icon sap-icon--home"></i>
            </span>
            <div class="fd-product-switch__text">
                <div class="fd-product-switch__title">Home Home Home Home Home Home Home Home</div>
                <div class="fd-product-switch__subtitle">Central Home Central Home Central Home Central Home</div>
            </div>
        </li>
        <li class="fd-product-switch__item selected" tabindex="0" role="menuitem" aria-label="Analytics Cloud Analytics Cloud Analytics Cloud" aria-posinset="2" aria-setsize="14">
            <span
                class="fd-avatar fd-avatar--sm fd-avatar--thumbnail"

                role="img"
                aria-label="Avatar landscape"
                ></span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Analytics Cloud Analytics Cloud</div>
                    <div class="fd-product-switch__subtitle">Analytics Cloud</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Catalog Ariba" aria-posinset="3" aria-setsize="14">
                <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Catalog">
                    <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--contacts"></i>
                </span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Catalog</div>
                    <div class="fd-product-switch__subtitle">Ariba</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Guided Buying" aria-posinset="4" aria-setsize="14">
                <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Guided Buying">
                    <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--credit-card"></i>
                </span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Guided Buying</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Strategic Procurement" aria-posinset="5" aria-setsize="14">
                <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Strategic Procurement">
                    <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--cart-3"></i>
                </span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Strategic Procurement</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Travel &amp; Expense Concur" aria-posinset="6" aria-setsize="14">
                <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Travel &amp; Expense">
                    <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--flight"></i>
                </span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Travel & Expense</div>
                    <div class="fd-product-switch__subtitle">Concur</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Vendor Management Fieldglass" aria-posinset="7" aria-setsize="14">
                <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Vendor Management">
                    <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--shipping-status"></i>
                </span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Vendor Management</div>
                    <div class="fd-product-switch__subtitle">Fieldglass</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Human Capital Management Human Capital Management" aria-posinset="8" aria-setsize="14">
                <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Human Capital Management">
                    <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--customer"></i>
                </span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Human Capital Management Human Capital Management</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Sales Cloud Sales Cloud" aria-posinset="9" aria-setsize="14">
                <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Sales Cloud">
                    <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--sales-notification"></i>
                </span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Sales Cloud</div>
                    <div class="fd-product-switch__subtitle">Sales Cloud</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Commerce Cloud Commerce Cloud" aria-posinset="10" aria-setsize="14">
                <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Commerce Cloud">
                    <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--retail-store"></i>
                </span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Commerce Cloud</div>
                    <div class="fd-product-switch__subtitle">Commerce Cloud</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Marketing Cloud Marketing Cloud" aria-posinset="11" aria-setsize="14">
                <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Marketing Cloud">
                    <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--marketing-campaign"></i>
                </span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Marketing Cloud</div>
                    <div class="fd-product-switch__subtitle">Marketing Cloud</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Service Cloud" aria-posinset="12" aria-setsize="14">
                <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Service Cloud">
                    <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--family-care"></i>
                </span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Service Cloud</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Customer Data Cloud" aria-posinset="13" aria-setsize="14">
                <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Customer Data Cloud">
                    <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--customer-briefing"></i>
                </span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Customer Data Cloud</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="S/4HANA" aria-posinset="14" aria-setsize="14">
                <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="S/4HANA">
                    <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--batch-payments"></i>
                </span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">S/4HANA</div>
                </div>
            </li>
        </ul>
    </div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-avatar--sm` | For smaller screens (mobile), the product switch is displayed in list format |
| `fd-avatar--thumbnail` | Style variant |
| `fd-avatar--transparent` | Style variant |

## BEM Elements

This component uses the following BEM elements:

- `fd-avatar__icon`

## Related Components

This component works with or depends on:

- `avatar`
- `button`
- `icon`
- `popover`
- `product-switch`
- `shellbar`

## Design Tokens

Key CSS variables used by this component:

- `--accent-color-`
- `--background-contain`
- `--border`
- `--circle`
- `--fdAvatarActiveColor`
- `--fdAvatarActiveHoverColor`
- `--fdAvatarBackgroundActiveColor`
- `--fdAvatarBackgroundActiveHoverColor`
- `--fdAvatarBackgroundColor`
- `--fdAvatarBackgroundSize`
- `--fdAvatarBorderActiveColor`
- `--fdAvatarBorderActiveHoverColor`
- `--fdAvatarBorderColor`
- `--fdAvatarBorderHoverColor`
- `--fdAvatarBorderRadius`

*...and 5 more*

## Examples

### Large

Product switch is displayed with a maximum of 4 columns on large desktop screens. When the popover contains too many items, it will grow until the maximum is reached. Once the maximum is reached, the popover can be scrolled vertically.

```html
<div class="fd-product-switch__body">
    <ul class="fd-product-switch__list" role="menu">
        <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Home Home Home Home Home Home Home Home Central Home Central Home Central Home Central Home" aria-posinset="1" aria-setsize="14">
            <span class="fd-avatar fd-avatar--sm fd-avatar--transparent" role="img" aria-label="Home">
                <i role="presentation" aria-hidden="true" class="fd-avatar__icon sap-icon--home"></i>
            </span>
            <div class="fd-product-switch__text">
                <div class="fd-product-switch__title">Home Home Home Home Home Home Home Home</div>
                <div class="fd-product-switch__subtitle">Central Home Central Home Central Home Central Home</div>
            </div>
        </li>
        <li class="fd-product-switch__item selected" tabindex="0" role="menuitem" aria-label="Analytics Cloud Analytics Cloud Analytics Cloud" aria-posinset="2" aria-setsize="14">
            <span
                class="fd-avatar fd-avatar--sm fd-avatar--thumbnail"

                role="img"
                aria-label="Avatar landscape"
                ></span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Analytics Cloud Analytics Cloud</div>
                    <div class="fd-product-switch__subtitle">Analytics Cloud</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Catalog Ariba" aria-posinset="3" aria-setsize="14">
                <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Catalog">
                    <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--contacts"></i>
                </span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Catalog</div>
                    <div class="fd-product-switch__subtitle">Ariba</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Guided Buying" aria-posinset="4" aria-setsize="14">
                <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Guided Buying">
                    <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--credit-card"></i>
                </span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Guided Buying</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Strategic Procurement" aria-posinset="5" aria-setsize="14">
                <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Strategic Procurement">
                    <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--cart-3"></i>
                </span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Strategic Procurement</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Travel &amp; Expense Concur" aria-posinset="6" aria-setsize="14">
                <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Travel &amp; Expense">
                    <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--flight"></i>
                </span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Travel & Expense</div>
                    <div class="fd-product-switch__subtitle">Concur</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Vendor Management Fieldglass" aria-posinset="7" aria-setsize="14">
                <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Vendor Management">
                    <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--shipping-status"></i>
                </span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Vendor Management</div>
                    <div class="fd-product-switch__subtitle">Fieldglass</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Human Capital Management Human Capital Management" aria-posinset="8" aria-setsize="14">
                <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Human Capital Management">
                    <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--customer"></i>
                </span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Human Capital Management Human Capital Management</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Sales Cloud Sales Cloud" aria-posinset="9" aria-setsize="14">
                <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Sales Cloud">
                    <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--sales-notification"></i>
                </span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Sales Cloud</div>
                    <div class="fd-product-switch__subtitle">Sales Cloud</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Commerce Cloud Commerce Cloud" aria-posinset="10" aria-setsize="14">
                <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Commerce Cloud">
                    <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--retail-store"></i>
                </span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Commerce Cloud</div>
                    <div class="fd-product-switch__subtitle">Commerce Cloud</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Marketing Cloud Marketing Cloud" aria-posinset="11" aria-setsize="14">
                <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Marketing Cloud">
                    <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--marketing-campaign"></i>
                </span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Marketing Cloud</div>
                    <div class="fd-product-switch__subtitle">Marketing Cloud</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Service Cloud" aria-posinset="12" aria-setsize="14">
                <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Service Cloud">
                    <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--family-care"></i>
                </span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Service Cloud</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Customer Data Cloud" aria-posinset="13" aria-setsize="14">
                <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Customer Data Cloud">
                    <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--customer-briefing"></i>
                </span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Customer Data Cloud</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="S/4HANA" aria-posinset="14" aria-setsize="14">
                <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="S/4HANA">
                    <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--batch-payments"></i>
                </span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">S/4HANA</div>
                </div>
            </li>
        </ul>
    </div>
```

### Medium

If there are 6 (or less) items to display, it is recommended to use the 3-column layout (medium). To display a medium-sized product switch, add the \

```html
<div class="fd-product-switch__body fd-product-switch__body--col-3">
    <ul class="fd-product-switch__list" role="menu">
        <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Home Home Home Home Home Home Home Central Home Central Home Central Home Central Home" aria-posinset="1" aria-setsize="5">
            <span class="fd-avatar fd-avatar--sm fd-avatar--transparent" role="img" aria-label="Home">
                <i role="presentation" aria-hidden="true" class="fd-avatar__icon sap-icon--home"></i>
            </span>
            <div class="fd-product-switch__text">
                <div class="fd-product-switch__title">Home Home Home Home Home Home Home</div>
                <div class="fd-product-switch__subtitle">Central Home Central Home Central Home Central Home</div>
            </div>
        </li>
        <li class="fd-product-switch__item selected" tabindex="0" role="menuitem" aria-label="Analytics Cloud Analytics Cloud Analytics Cloud" aria-posinset="2" aria-setsize="5">
            <span
                class="fd-avatar fd-avatar--sm fd-avatar--thumbnail"

                role="img"
                aria-label="Analytics Cloud"
                ></span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Analytics Cloud</div>
                    <div class="fd-product-switch__subtitle">Analytics Cloud</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Catalog Ariba" aria-posinset="3" aria-setsize="5">
                <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Catalog">
                    <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--contacts"></i>
                </span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Catalog</div>
                    <div class="fd-product-switch__subtitle">Ariba</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Guided Buying" aria-posinset="4" aria-setsize="5">
                <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Guided Buying">
                    <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--credit-card"></i>
                </span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Guided Buying</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Strategic Procurement" aria-posinset="5" aria-setsize="5">
                <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Strategic Procurement">
                    <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--cart-3"></i>
                </span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">Strategic Procurement</div>
                </div>
            </li>
        </ul>
    </div>
```

### Small

For smaller screens (mobile), the product switch is displayed in list format. To achieve this style, add the \

```html
<div class="fd-product-switch__body fd-product-switch__body--mobile">
    <ul class="fd-product-switch__list" role="menu">
        <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Home Central Home" aria-posinset="1" aria-setsize="14">
            <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Home">
                <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--home"></i>
            </span>
            <div class="fd-product-switch__text">
                <div class="fd-product-switch__title">Home</div>
                <div class="fd-product-switch__subtitle">Central Home</div>
            </li>
            <li class="fd-product-switch__item selected" tabindex="0" role="menuitem" aria-label="Analytics Cloud Analytics Cloud Analytics Cloud Analytics Cloud Analytics Cloud Analytics Cloud Analytics Cloud Analytics Cloud Analytics Cloud Analytics Cloud Analytics Cloud Analytics Cloud Analytics Cloud" aria-posinset="2" aria-setsize="14">
                <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="SAP Start">
                    <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--business-objects-experience"></i>
                </span>
                <div class="fd-product-switch__text">
                    <div class="fd-product-switch__title">
                        Analytics Cloud Analytics Cloud Analytics Cloud Analytics Cloud
                    </div>
                    <div class="fd-product-switch__subtitle">Analytics Cloud Analytics Cloud Analytics Cloud Analytics Cloud Analytics</div>
                </div>
            </li>
            <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Catalog Ariba" aria-posinset="3" aria-setsize="14">
                <span
                    class="fd-avatar fd-avatar--sm fd-avatar--thumbnail"

                    role="img"
                    aria-label="SAP Ariba"
                    ></span>
                    <div class="fd-product-switch__text">
                        <div class="fd-product-switch__title">Catalog</div>
                        <div class="fd-product-switch__subtitle">Ariba</div>
                    </div>
                </li>
                <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Guided Buying" aria-posinset="4" aria-setsize="14">
                    <span
                        class="fd-avatar fd-avatar--sm fd-avatar--thumbnail"

                        role="img"
                        aria-label="Business Data Cloud"
                        ></span>
                        <div class="fd-product-switch__text">
                            <div class="fd-product-switch__title">Guided Buying</div>
                        </div>
                    </li>
                    <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Strategic Procurement" aria-posinset="5" aria-setsize="14">
                        <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Integration Suite">
                            <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--cart-3"></i>
                        </span>
                        <div class="fd-product-switch__text">
                            <div class="fd-product-switch__title">Strategic Procurement</div>
                        </div>
                    </li>
                    <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Travel &amp; Expense Concur" aria-posinset="6" aria-setsize="14">
                        <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="S/4HANA Cloud">
                            <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--flight"></i>
                        </span>
                        <div class="fd-product-switch__text">
                            <div class="fd-product-switch__title">Travel & Expense</div>
                            <div class="fd-product-switch__subtitle">Concur</div>
                        </div>
                    </li>
                    <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Vendor Management Fieldglass" aria-posinset="7" aria-setsize="14">
                        <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="SuccessFactors">
                            <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--shipping-status"></i>
                        </span>
                        <div class="fd-product-switch__text">
                            <div class="fd-product-switch__title">Vendor Management</div>
                            <div class="fd-product-switch__subtitle">Fieldglass</div>
                        </div>
                    </li>
                    <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Product Management (very long text) ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacus rhoncus, tempus diam non, mattis tellus." aria-posinset="8" aria-setsize="14">
                        <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Concur">
                            <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--customer"></i>
                        </span>
                        <div class="fd-product-switch__text">
                            <div class="fd-product-switch__title">
                                Product Management (very long text) ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lacus rhoncus, tempus diam non, mattis tellus.
                            </div>
                        </div>
                    </li>
                    <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Sales Cloud Sales Cloud" aria-posinset="9" aria-setsize="14">
                        <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Sales Cloud">
                            <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--sales-notification"></i>
                        </span>
                        <div class="fd-product-switch__text">
                            <div class="fd-product-switch__title">Sales Cloud</div>
                            <div class="fd-product-switch__subtitle">Sales Cloud</div>
                        </div>
                    </li>
                    <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Commerce Cloud Commerce Cloud" aria-posinset="10" aria-setsize="14">
                        <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Commerce Cloud">
                            <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--retail-store"></i>
                        </span>
                        <div class="fd-product-switch__text">
                            <div class="fd-product-switch__title">Commerce Cloud</div>
                            <div class="fd-product-switch__subtitle">Commerce Cloud</div>
                        </div>
                    </li>
                    <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Marketing Cloud Marketing Cloud" aria-posinset="11" aria-setsize="14">
                        <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Marketing Cloud">
                            <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--marketing-campaign"></i>
                        </span>
                        <div class="fd-product-switch__text">
                            <div class="fd-product-switch__title">Marketing Cloud</div>
                            <div class="fd-product-switch__subtitle">Marketing Cloud</div>
                        </div>
                    </li>
                    <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Service Cloud" aria-posinset="12" aria-setsize="14">
                        <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Service Cloud">
                            <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--family-care"></i>
                        </span>
                        <div class="fd-product-switch__text">
                            <div class="fd-product-switch__title">Service Cloud</div>
                        </div>
                    </li>
                    <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="Customer Data Cloud" aria-posinset="13" aria-setsize="14">
                        <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="Customer Data Cloud">
                            <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--customer-briefing"></i>
                        </span>
                        <div class="fd-product-switch__text">
                            <div class="fd-product-switch__title">Customer Data Cloud</div>
                        </div>
                    </li>
                    <li class="fd-product-switch__item" tabindex="0" role="menuitem" aria-label="S/4HANA" aria-posinset="14" aria-setsize="14">
                        <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="S/4HANA">
                            <i role="presentation" aria-hidden="true" class="fd-product-switch__icon sap-icon--batch-payments"></i>
                        </span>
                        <div class="fd-product-switch__text">
                            <div class="fd-product-switch__title">S/4HANA</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/product-switch/product-switch.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
