---
component: fd-shellbar
title: Components/Shellbar
category: Components
selector: fd-shellbar
cssFile: shellbar.css
sourcePath: packages/styles/stories/Components/shellbar/shellbar.stories.js
tags: ["uxc"]
dependencies: ["avatar","button","icon","input-group","menu","object-marker","object-status","popover","product-switch","select","shellbar","switch","toolbar"]
relatedComponents: ["avatar","button","icon","input-group","menu","object-marker","object-status","popover","product-switch","select","shellbar","switch","toolbar"]
stability: stable
generatedAt: 2026-06-01T19:23:59.728Z
---

# Components/Shellbar

The Shell Bar serves as the topmost section across all SAP products, providing users with a way to orient themselves within the diverse SAP product landscape. It is always visible and offers relevant information about the current context, including product and brand details, while also providing access to specific functions such as search, notifications, user profiles, and more.

**Shellbar has two primary container groups:**

-	Product: for branding and product elements.
-	Actions: for search, product links, and user settings.

##Elements
<ul>
    <li>\

## Dependencies

This component depends on the following CSS files:

- `avatar.css`
- `button.css`
- `icon.css`
- `input-group.css`
- `menu.css`
- `object-marker.css`
- `object-status.css`
- `popover.css`
- `product-switch.css`
- `select.css`
- `shellbar.css`
- `switch.css`
- `toolbar.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/shellbar.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/avatar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/input-group.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/menu.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/object-marker.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/object-status.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/popover.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/product-switch.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/select.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/shellbar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/switch.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/toolbar.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-shellbar" role="banner" aria-label="Shell Bar">
    <div class="fd-shellbar__group fd-shellbar__group--product">
        <div class="fd-shellbar__branding" role="link" tabindex="0" aria-label="SAP Corporate Portal Home">
            <span class="fd-shellbar__logo">
                <img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" height="32" alt="SAP">
            </span>
            <span class="fd-shellbar__title">Corporate Portal</span>
        </div>
        <div class="fd-shellbar__group fd-shellbar__group--actions">
            <div class="fd-shellbar__action">
                <div class="fd-popover fd-popover--right">
                    <div class="fd-popover__control">
                        <div class="fd-button fd-button--transparent fd-shellbar__button fd-user-menu__control" aria-controls="WV3AY276bb" aria-expanded="false" aria-haspopup="true" role="button" tabindex="0">
                            <span
                                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail fd-shellbar__avatar--circle"

                                aria-label="William Wallingham">
                            </span>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true" id="WV3AY276bb">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a role="button" class="fd-menu__link">
                                        <span class="fd-menu__title">Settings</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a role="button" class="fd-menu__link">
                                        <span class="fd-menu__title">Sign Out</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
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
| `fd-shellbar--md` | Style variant |
| `fd-shellbar--responsive-paddings` | When Side Navigation is displayed, the left and right spacing is fixed at 1rem (16px) for alignment with the navigation panel |
| `fd-shellbar--side-nav` | The following elements of the Shell Bar are optional:
<ul>
  <li><b>Side Navigation Button:</b> expands or collapses a vertical navigation panel for local navigation, and is mandatory in the Shell Bar if side navigation is used |
| `fd-shellbar--sm` | The following elements of the Shell Bar are optional:
<ul>
  <li><b>Side Navigation Button:</b> expands or collapses a vertical navigation panel for local navigation, and is mandatory in the Shell Bar if side navigation is used |

## States

| Class | Description |
|-------|-------------|
| `is-focus` | Focus state |
| `is-toggled` | Toggled state |

## BEM Elements

This component uses the following BEM elements:

- `fd-shellbar__action`
- `fd-shellbar__avatar--circle`
- `fd-shellbar__branding`
- `fd-shellbar__button`
- `fd-shellbar__button--menu`
- `fd-shellbar__group`
- `fd-shellbar__group--actions`
- `fd-shellbar__group--context-area`
- `fd-shellbar__group--full-width`
- `fd-shellbar__group--product`
- `fd-shellbar__logo`
- `fd-shellbar__search-cancel`
- `fd-shellbar__search-category`
- `fd-shellbar__search-category--collapsed`
- `fd-shellbar__search-dropdown`
- `fd-shellbar__search-field`
- `fd-shellbar__search-field-addon`
- `fd-shellbar__search-field-category`
- `fd-shellbar__search-field-helper`
- `fd-shellbar__search-field-input`
- `fd-shellbar__search-submit`
- `fd-shellbar__separator`
- `fd-shellbar__spacer`
- `fd-shellbar__title`
- `fd-shellbar__toolbar`

## Related Components

This component works with or depends on:

- `avatar`
- `button`
- `icon`
- `input-group`
- `menu`
- `object-marker`
- `object-status`
- `popover`
- `product-switch`
- `select`
- `shellbar`
- `switch`
- `toolbar`

## Design Tokens

Key CSS variables used by this component:

- `--actions`
- `--basis-auto`
- `--center`
- `--circle`
- `--collapsed`
- `--context-area`
- `--copilot`
- `--desktop`
- `--fdButtonBackgroundColor`
- `--fdButtonBorderColor`
- `--fdButtonColor`
- `--fdButtonIconColor`
- `--fdButton_Clickable_Height`
- `--fdButton_Focus_Border_Radius`
- `--fdButton_Height`

*...and 5 more*

## Examples

### Shell Bar with Mandatory Elements

The Shell Bar has 2 mandatory components: 
  <ul>
  <li><b>Branding:</b> Visual branding elements, such as the SAP or company logo (mandatory), the Product Name (mandatory) and Solution Name (optional). Clicking on the Branding navigates users back to the product's home page. Use the official SAP product name and logo by default, allowing customers to customize the logo and sub-brand text if needed, but avoid including "SAP" in the product name. The solution name, optional and limited to 40 characters, should only be used with the product name in exceptional cases and not for app names or navigation. </li>
  <li><b>User Profile:</b> offers access to user-specific settings and displays either an image or initials.</li>
  </ul>

```html
<div class="fd-shellbar" role="banner" aria-label="Shell Bar">
    <div class="fd-shellbar__group fd-shellbar__group--product">
        <div class="fd-shellbar__branding" role="link" tabindex="0" aria-label="SAP Corporate Portal Home">
            <span class="fd-shellbar__logo">
                <img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" height="32" alt="SAP">
            </span>
            <span class="fd-shellbar__title">Corporate Portal</span>
        </div>
        <div class="fd-shellbar__group fd-shellbar__group--actions">
            <div class="fd-shellbar__action">
                <div class="fd-popover fd-popover--right">
                    <div class="fd-popover__control">
                        <div class="fd-button fd-button--transparent fd-shellbar__button fd-user-menu__control" aria-controls="WV3AY276bb" aria-expanded="false" aria-haspopup="true" role="button" tabindex="0">
                            <span
                                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail fd-shellbar__avatar--circle"

                                aria-label="William Wallingham">
                            </span>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true" id="WV3AY276bb">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a role="button" class="fd-menu__link">
                                        <span class="fd-menu__title">Settings</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a role="button" class="fd-menu__link">
                                        <span class="fd-menu__title">Sign Out</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Shell Bar with Optional Elements

The following elements of the Shell Bar are optional:
<ul>
  <li><b>Side Navigation Button:</b> expands or collapses a vertical navigation panel for local navigation, and is mandatory in the Shell Bar if side navigation is used. In this case, the left spacing is fixed to 0.875rem to ensure alignment with the navigation panel. Right spacing is fixed to 1rem. </li>
  <li><b>Back Button: </b> back navigation</li>
  <li><b>Additional Context Area:</b> for containers holding product-related elements like system or status information, and should include components relevant to the entire product, not specific applications, while avoiding content meant for other Shell Bar elements.</li>
  <li><b>Search:</b> the search field in the Shell Bar can be expanded or collapsed based on screen size, and on smaller screens (S), it may be collapsed or moved to the overflow menu if multiple action icons are present.</li>
  <li><b>Joule:</b> AI Assistant</li>
  <li><b>Notifications:</b> are optional, but if enabled, the icon will display with a badge indicating the notification count.</li>
  <li><b>Additional Actions:</b> You can add unlimited custom actions to the Shell Bar, but it's recommended to limit them to seven, ensuring they impact the entire product, use icon-only buttons, and include tooltips. The order is flexible, except for the Support action, which is always placed on the right.</li>
  <li><b>Help:</b> used to trigger the help functionality within products.</li>
  <li><b>Feedback:</b> used to trigger the "Leave Feedback" functionality within products.</li>
  <li><b>Product Switch:</b> used for global navigation, allowing users to switch between different SAP products and services.</li>
  <li><b>Separator:</b> creates a small distance between elements in additional context area.</li>
  <li><b>Spacer:</b> creates space between groups of elements in context area. Visually separates the context area into left and right group.</li>
</ul>

```html
<div class="fd-shellbar fd-shellbar--side-nav" role="banner" aria-label="Shell Bar">
    <div class="fd-shellbar__group fd-shellbar__group--product">
        <button aria-label="Main Navigation" aria-expanded="false" class="fd-button fd-button--transparent fd-shellbar__button">
            <i class="sap-icon--menu2"></i>
        </button>

        <button aria-label="Back Navigation" aria-expanded="false" class="fd-button fd-button--transparent fd-shellbar__button">
            <i class="sap-icon--nav-back"></i>
        </button>

        <div class="fd-shellbar__branding" role="link" tabindex="0" aria-label="SAP Corporate Portal Solution Name Home">
            <span class="fd-shellbar__logo"><img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" height="32" alt="SAP"></span>
            <span class="fd-shellbar__title">Corporate Portal</span>
        </div>
        <div class="fd-shellbar__group fd-shellbar__group--context-area" role="group" aria-label="Additional info">
            <span class="fd-shellbar__separator"></span>
            <div class="fd-popover">
                <div class="fd-popover__control">
                    <button
                        class="fd-button fd-button--transparent fd-shellbar__button fd-shellbar__button--menu fd-button--menu"
                        onclick="onPopoverClick('9GLB269412ow2');"
                        aria-controls="9GLB269412ow2"
                        aria-haspopup="true"
                        aria-expanded="false"
                        >
                        <span class="fd-button__text">EMEA</span>
                        <i class="sap-icon--slim-arrow-down"></i>
                    </button>
                </div>
                <div
                    class="fd-popover__body fd-popover__body--no-arrow"
                    aria-hidden="true"
                    id="9GLB269412ow2"
                    >
                    <nav class="fd-menu">
                        <ul class="fd-menu__list fd-menu__list--no-shadow">
                            <li class="fd-menu__item">
                                <a role="button" class="fd-menu__link">
                                    <span class="fd-menu__title">Application A</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a role="button" class="fd-menu__link">
                                    <span class="fd-menu__title">Application B</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a role="button" class="fd-menu__link">
                                    <span class="fd-menu__title">Application C</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a role="button" class="fd-menu__link">
                                    <span class="fd-menu__title">Application D</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <span class="fd-shellbar__separator"></span>
            <span class="sap-icon sap-icon--globe sap-icon--color-information"></span>
            <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-5">
                <span class="fd-object-status__text">Environment</span>
            </span>
            <span class="fd-shellbar__spacer"></span>
            <div class="fd-object-marker">
                <span class="fd-object-marker__text">New Feature</span>
            </div>
            <label class="fd-switch">
                <span class="fd-switch__control">
                    <input class="fd-switch__input" type="checkbox" name="" value="" aria-labelledby="label1" id="y21YO3251">
                    <div class="fd-switch__slider">
                        <div class="fd-switch__track">
                            <i role="presentation" class="fd-switch__icon fd-switch__icon--on sap-icon--accept"></i>
                            <span class="fd-switch__handle" role="presentation"></span>
                            <i role="presentation" class="fd-switch__icon fd-switch__icon--off sap-icon--less"></i>
                        </div>
                    </div>
                </span>
            </label>
            <span class="fd-shellbar__separator"></span>
        </div>
        <div class="fd-shellbar__group fd-shellbar__group--actions">
            <div class="fd-shellbar__action">
                <div class="fd-popover fd-popover--right">
                    <div class="fd-popover__control">
                        <div class="fd-button fd-button--transparent fd-shellbar__button fd-user-menu__control"
                            onclick="onPopoverClick('MKFAY276wed')" aria-controls="MKFAY276wed" aria-expanded="false"
                            aria-haspopup="dialog" role="button" tabindex="0" aria-label="User Menu" title="User Menu">
                            <span
                                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail fd-shellbar__avatar--circle"

                                aria-label="William Wallingham">
                            </span>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true"
                        id="MKFAY276wed">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a role="button" class="fd-menu__link">
                                        <span class="fd-menu__title">Settings</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a role="button" class="fd-menu__link">
                                        <span class="fd-menu__title">Sign Out</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <div class="fd-shellbar fd-shellbar--side-nav" role="banner" aria-label="Shell Bar">
                <div class="fd-shellbar__group fd-shellbar__group--product">
                    <button aria-label="Main Navigation" aria-expanded="false" class="fd-button fd-button--transparent fd-shellbar__button">
                        <i class="sap-icon--menu2"></i>
                    </button>
                    <div class="fd-shellbar__branding" role="link" tabindex="0" aria-label="SAP Corporate Portal Solution Name Home">
                        <span class="fd-shellbar__logo"><img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" height="32" alt="SAP"></span>
                        <span class="fd-shellbar__title">Corporate Portal</span>
                    </div>
                    <div class="fd-shellbar__group fd-shellbar__group--context-area" role="group" aria-label="Additional info">
                        <span class="fd-shellbar__separator"></span>
                        <div class="fd-popover">
                            <div class="fd-popover__control">
                                <button
                                    class="fd-button fd-button--transparent fd-shellbar__button fd-shellbar__button--menu fd-button--menu"
                                    onclick="onPopoverClick('9GLB269412874');"
                                    aria-controls="9GLB269412874"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    >
                                    <span class="fd-button__text">EMEA</span>
                                    <i class="sap-icon--slim-arrow-down"></i>
                                </button>
                            </div>
                            <div
                                class="fd-popover__body fd-popover__body--no-arrow"
                                aria-hidden="true"
                                id="9GLB269412874"
                                >
                                <nav class="fd-menu">
                                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                                        <li class="fd-menu__item">
                                            <a role="button" class="fd-menu__link">
                                                <span class="fd-menu__title">Application A</span>
                                            </a>
                                        </li>
                                        <li class="fd-menu__item">
                                            <a role="button" class="fd-menu__link">
                                                <span class="fd-menu__title">Application B</span>
                                            </a>
                                        </li>
                                        <li class="fd-menu__item">
                                            <a role="button" class="fd-menu__link">
                                                <span class="fd-menu__title">Application C</span>
                                            </a>
                                        </li>
                                        <li class="fd-menu__item">
                                            <a role="button" class="fd-menu__link">
                                                <span class="fd-menu__title">Application D</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div class="fd-shellbar__group fd-shellbar__group--actions">
                        <div class="fd-shellbar__action">
                            <div id="JKHhjk7234k22" class="fd-input-group fd-shellbar__search-field">
                                <input
                                aria-label="search-input"
                                type="text"

                                class="fd-input fd-input-group__input fd-shellbar__search-field-input"
                                id="F4GcX348b1"
                                placeholder="Search everything"
                                />
                                <div
                                    class="fd-input-group__addon fd-shellbar__search-field-addon fd-shellbar__search-cancel fd-input-group__addon--button"
                                    >
                                    <button
                                        aria-label="button-search"
                                        class="fd-shellbar__button fd-button fd-button--transparent"
                                        >
                                        <i class="sap-icon--decline"></i>
                                    </button>
                                </div>
                                <div
                                    class="fd-input-group__addon fd-shellbar__search-field-addon fd-shellbar__search-submit fd-input-group__addon--button"
                                    >
                                    <button
                                        aria-label="button-search"
                                        class="fd-shellbar__button fd-button fd-button--transparent"
                                        >
                                        <i class="sap-icon--search"></i>
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div class="fd-shellbar__action">
                            <button
                                class="fd-button fd-button--transparent fd-shellbar__button"
                                aria-label="Joule Digital Assitant" aria-haspopup="dialog" aria-expanded="false" title="Joule Digital Assitant">
                                <i class="sap-icon--da"></i>
                            </button>
                        </div>
                        <div class="fd-shellbar__action">
                            <button
                                class="fd-button fd-button--transparent fd-shellbar__button"
                                aria-label="Notifications"
                                title="Notifications"
                                aria-haspopup="dialog" aria-expanded="false"
                                >
                                <i class="sap-icon--bell"></i>
                                <span class="fd-button__badge">72</span>
                            </button>
                        </div>
                        <div class="fd-shellbar__action">
                            <button
                                class="fd-button fd-button--transparent fd-shellbar__button"
                                aria-label="Feedback" aria-haspopup="dialog" aria-expanded="false" title="Feedback">
                                <i class="sap-icon--feedback"></i>
                            </button>
                        </div>
                        <div class="fd-shellbar__action">
                            <button
                                class="fd-button fd-button--transparent fd-shellbar__button"
                                aria-label="Help" aria-haspopup="dialog" aria-expanded="false" title="Help">
                                <i class="sap-icon--sys-help"></i>
                            </button>
                        </div>
                        <div class="fd-shellbar__action">
                            <div class="fd-popover fd-popover--right">
                                <div class="fd-popover__control">
                                    <div class="fd-button fd-button--transparent fd-shellbar__button fd-user-menu__control"
                                        onclick="onPopoverClick('MKFAY276')" aria-controls="MKFAY276" aria-expanded="false"
                                        aria-haspopup="dialog" role="button" tabindex="0" aria-label="User Menu" title="User Menu">
                                        <span
                                            class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail fd-shellbar__avatar--circle"

                                            aria-label="William Wallingham">
                                        </span>
                                    </div>
                                </div>
                                <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true"
                                    id="MKFAY276">
                                    <nav class="fd-menu">
                                        <ul class="fd-menu__list fd-menu__list--no-shadow">
                                            <li class="fd-menu__item">
                                                <a role="button" class="fd-menu__link">
                                                    <span class="fd-menu__title">Settings</span>
                                                </a>
                                            </li>
                                            <li class="fd-menu__item">
                                                <a role="button" class="fd-menu__link">
                                                    <span class="fd-menu__title">Sign Out</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div class="fd-shellbar__action">
                                    <div class="fd-product-switch">
                                        <div class="fd-popover fd-popover--right">
                                            <button
                                                class="fd-button fd-button--transparent fd-shellbar__button fd-popover__control"
                                                aria-label="Product Switcher"
                                                title="Product Switcher"
                                                aria-controls="product-switch-body"
                                                aria-expanded="false"
                                                aria-haspopup="dialog"
                                                onclick="onPopoverClick('product-switch-body')">
                                                <i class="sap-icon--grid"></i>
                                            </button>
                                            <div class="fd-popover__body fd-popover__body--right" aria-hidden="true"
                                                id="product-switch-body">
                                                <div class="fd-product-switch__body">
                                                    <ul class="fd-product-switch__list">
                                                        <li class="fd-product-switch__item">

                                                            <div class="fd-product-switch__text">
                                                                <div class="fd-product-switch__title">Home</div>
                                                                <div class="fd-product-switch__subtitle">Central Home</div>
                                                            </div>
                                                        </li>
                                                        <li class="fd-product-switch__item selected">

                                                            <div class="fd-product-switch__text">
                                                                <div class="fd-product-switch__title">Analytics Cloud</div>
                                                                <div class="fd-product-switch__subtitle">Analytics Cloud</div>
                                                            </div>
                                                        </li>
                                                        <li class="fd-product-switch__item">

                                                            <div class="fd-product-switch__text">
                                                                <div class="fd-product-switch__title">Catalog</div>
                                                                <div class="fd-product-switch__subtitle">Ariba</div>
                                                            </div>
                                                        </li>
                                                        <li class="fd-product-switch__item">

                                                            <div class="fd-product-switch__text">
                                                                <div class="fd-product-switch__title">Guided Buying</div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
```

### ResponsivePaddings

When Side Navigation is displayed, the left and right spacing is fixed at 1rem (16px) for alignment with the navigation panel. Without Side Navigation, the Shell Bar follows the Responsive Spacing System: 1rem for Size S, 2rem for Sizes M and L, and 3rem for Sizes XL and XXL (48px). Apply <code>fd-shellbar--responsive-paddings</code> modifier class for responsive paddings, and <code>fd-shellbar--side-nav</code> for fix paddings with Side Navigation.

```html
<div class="fd-shellbar fd-shellbar--responsive-paddings" role="banner" aria-label="Shell Bar">
    <div class="fd-shellbar__group fd-shellbar__group--product">
        <div class="fd-shellbar__branding" role="link" tabindex="0" aria-label="SAP Corporate Portal Solution Name Home">
            <span class="fd-shellbar__logo"><img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" height="32" alt="SAP"></span>

            <span class="fd-shellbar__title">Corporate Portal</span>
        </div>
        <div class="fd-shellbar__group fd-shellbar__group--actions">
            <div class="fd-shellbar__action">
                <div id="JKHhjk7234k" class="fd-input-group fd-shellbar__search-field">
                    <div
                        class="fd-input-group__addon fd-shellbar__search-field-category fd-input-group__addon--button"
                        >
                        <div class="fd-select">
                            <button
                                aria-expanded="false"
                                aria-haspopup="listbox"
                                aria-labelledby="cozySelectLabel cozySelectValue"
                                class="fd-select__control fd-shellbar__search-category"
                                id="cozySelectCombobox"
                                onclick="
                                toggleElAttrs('h0C6A325', ['aria-hidden']);
                                toggleElAttrs('cozySelectCombobox', ['aria-expanded']);
                                "
                                value="List Item 1"
                                tabindex="0"
                                >
                                <span is="cozySelectValue" class="fd-select__text-content"
                                    >List Item 1</span
                                    >
                                    <span
                                        class="fd-button fd-button--transparent fd-select__button fd-shellbar__search-dropdown"
                                        >
                                        <i class="sap-icon--slim-arrow-down"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <input
                        aria-label="search-input"
                        type="text"
                        onfocus="addClass('JKHhjk7234kwedf', 'is-focus')"
                        onblur="removeClass('JKHhjk7234kwedf', 'is-focus')"
                        class="fd-input fd-input-group__input fd-shellbar__search-field-input"
                        id="F4GcX348b1"
                        placeholder="Search everything"
                        />
                        <div
                            class="fd-input-group__addon fd-shellbar__search-field-addon fd-shellbar__search-cancel fd-input-group__addon--button"
                            >
                            <button
                                aria-label="button-search"
                                class="fd-shellbar__button fd-button fd-button--transparent"
                                >
                                <i class="sap-icon--decline"></i>
                            </button>
                        </div>
                        <div
                            class="fd-input-group__addon fd-shellbar__search-field-addon fd-shellbar__search-submit fd-input-group__addon--button"
                            >
                            <button
                                aria-label="button-search"
                                class="fd-shellbar__button fd-button fd-button--transparent"
                                >
                                <i class="sap-icon--search"></i>
                            </button>
                        </div>

                    </div>
                </div>
                <div class="fd-shellbar__action">
                    <button
                        class="fd-button fd-button--transparent fd-shellbar__button"
                        aria-label="Joule Digital Assitant" aria-haspopup="dialog" aria-expanded="false" title="Joule Digital Assitant">
                        <i class="sap-icon--da"></i>
                    </button>
                </div>
                <div class="fd-shellbar__action">
                    <button
                        class="fd-button fd-button--transparent fd-shellbar__button"
                        aria-label="Notifications"
                        title="Notifications"
                        aria-haspopup="dialog" aria-expanded="false"
                        >
                        <i class="sap-icon--bell"></i>
                        <span class="fd-button__badge">72</span>
                    </button>
                </div>
                <div class="fd-shellbar__action">
                    <button
                        class="fd-button fd-button--transparent fd-shellbar__button"
                        aria-label="Feedback" aria-haspopup="dialog" aria-expanded="false" title="Feedback">
                        <i class="sap-icon--feedback"></i>
                    </button>
                </div>
                <div class="fd-shellbar__action">
                    <button
                        class="fd-button fd-button--transparent fd-shellbar__button"
                        aria-label="Help" aria-haspopup="dialog" aria-expanded="false" title="Help">
                        <i class="sap-icon--sys-help"></i>
                    </button>
                </div>
                <div class="fd-shellbar__action">
                    <div class="fd-popover fd-popover--right">
                        <div class="fd-popover__control">
                            <div class="fd-button fd-button--transparent fd-shellbar__button fd-user-menu__control"
                                onclick="onPopoverClick('HSTTDY276')" aria-controls="HSTTDY276" aria-expanded="false"
                                aria-haspopup="dialog" role="button" tabindex="0" aria-label="User Menu" title="User Menu">
                                <span
                                    class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail fd-shellbar__avatar--circle"

                                    aria-label="William Wallingham">
                                </span>
                            </div>
                        </div>
                        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true"
                            id="HSTTDY276">
                            <nav class="fd-menu">
                                <ul class="fd-menu__list fd-menu__list--no-shadow">
                                    <li class="fd-menu__item">
                                        <a role="button" class="fd-menu__link">
                                            <span class="fd-menu__title">Settings</span>
                                        </a>
                                    </li>
                                    <li class="fd-menu__item">
                                        <a role="button" class="fd-menu__link">
                                            <span class="fd-menu__title">Sign Out</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="fd-shellbar__action">
                            <div class="fd-product-switch">
                                <div class="fd-popover fd-popover--right">
                                    <button
                                        class="fd-button fd-button--transparent fd-shellbar__button fd-popover__control"
                                        aria-label="Product Switcher"
                                        title="Product Switcher"
                                        aria-controls="YSGDGFD82347"
                                        aria-expanded="false"
                                        aria-haspopup="dialog"
                                        onclick="onPopoverClick('YSGDGFD82347')">
                                        <i class="sap-icon--grid"></i>
                                    </button>
                                    <div class="fd-popover__body fd-popover__body--right" aria-hidden="true"
                                        id="YSGDGFD82347">
                                        <div class="fd-product-switch__body">
                                            <ul class="fd-product-switch__list">
                                                <li class="fd-product-switch__item">

                                                    <div class="fd-product-switch__text">
                                                        <div class="fd-product-switch__title">Home</div>
                                                        <div class="fd-product-switch__subtitle">Central Home</div>
                                                    </div>
                                                </li>
                                                <li class="fd-product-switch__item selected">

                                                    <div class="fd-product-switch__text">
                                                        <div class="fd-product-switch__title">Analytics Cloud</div>
                                                        <div class="fd-product-switch__subtitle">Analytics Cloud</div>
                                                    </div>
                                                </li>
                                                <li class="fd-product-switch__item">

                                                    <div class="fd-product-switch__text">
                                                        <div class="fd-product-switch__title">Catalog</div>
                                                        <div class="fd-product-switch__subtitle">Ariba</div>
                                                    </div>
                                                </li>
                                                <li class="fd-product-switch__item">

                                                    <div class="fd-product-switch__text">
                                                        <div class="fd-product-switch__title">Guided Buying</div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="fd-shellbar fd-shellbar--responsive-paddings" role="banner" aria-label="Shell Bar">
                                    <div class="fd-shellbar__group fd-shellbar__group--product">
                                        <div class="fd-shellbar__branding" role="link" tabindex="0" aria-label="SAP Corporate Portal Solution Name Home">
                                            <span class="fd-shellbar__logo"><img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" width="48" height="24" alt="SAP"></span>

                                            <span class="fd-shellbar__title">Corporate Portal</span>
                                        </div>
                                        <div class="fd-shellbar__group fd-shellbar__group--actions">
                                            <div class="fd-shellbar__action">
                                                <div id="JKHhjk7234k" class="fd-input-group fd-shellbar__search-field">
                                                    <div
                                                        class="fd-input-group__addon fd-shellbar__search-field-category fd-input-group__addon--button"
                                                        >
                                                        <div class="fd-select">
                                                            <button
                                                                aria-expanded="false"
                                                                aria-haspopup="listbox"
                                                                aria-labelledby="cozySelectLabel cozySelectValue"
                                                                class="fd-select__control fd-shellbar__search-category fd-shellbar__search-category--collapsed"
                                                                id="cozySelectCombobox2"
                                                                onclick="
                                                                toggleElAttrs('h0C6A3254', ['aria-hidden']);
                                                                toggleElAttrs('cozySelectCombobox2', ['aria-expanded']);
                                                                "
                                                                value="List Item 1"
                                                                tabindex="0"
                                                                >
                                                                <span is="cozySelectValue" class="fd-select__text-content"
                                                                    >List Item 1</span
                                                                    >
                                                                    <span
                                                                        class="fd-button fd-button--transparent fd-select__button fd-shellbar__search-dropdown"
                                                                        >
                                                                        <i class="sap-icon--slim-arrow-down"></i>
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <input
                                                        aria-label="search-input"
                                                        type="text"
                                                        onfocus="addClass('JKHhjk7234kwedfd', 'is-focus')"
                                                        onblur="removeClass('JKHhjk7234kwedfd', 'is-focus')"
                                                        class="fd-input fd-input-group__input fd-shellbar__search-field-input"
                                                        id="F4GcX348b1d"
                                                        placeholder="Search everything"
                                                        />
                                                        <div
                                                            class="fd-input-group__addon fd-shellbar__search-field-addon fd-shellbar__search-cancel fd-input-group__addon--button"
                                                            >
                                                            <button
                                                                aria-label="button-search"
                                                                class="fd-shellbar__button fd-button fd-button--transparent"
                                                                >
                                                                <i class="sap-icon--decline"></i>
                                                            </button>
                                                        </div>
                                                        <div
                                                            class="fd-input-group__addon fd-shellbar__search-field-addon fd-shellbar__search-submit fd-input-group__addon--button"
                                                            >
                                                            <button
                                                                aria-label="button-search"
                                                                class="fd-shellbar__button fd-button fd-button--transparent"
                                                                >
                                                                <i class="sap-icon--search"></i>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="fd-shellbar__action">
                                                    <button
                                                        class="fd-button fd-button--transparent fd-shellbar__button"
                                                        aria-label="Joule Digital Assitant" aria-haspopup="dialog" aria-expanded="false" title="Joule Digital Assitant">
                                                        <i class="sap-icon--da"></i>
                                                    </button>
                                                </div>
                                                <div class="fd-shellbar__action">
                                                    <button
                                                        class="fd-button fd-button--transparent fd-shellbar__button"
                                                        aria-label="Notifications"
                                                        title="Notifications"
                                                        aria-haspopup="dialog" aria-expanded="false"
                                                        >
                                                        <i class="sap-icon--bell"></i>
                                                        <span class="fd-button__badge">72</span>
                                                    </button>
                                                </div>
                                                <div class="fd-shellbar__action">
                                                    <button
                                                        class="fd-button fd-button--transparent fd-shellbar__button"
                                                        aria-label="Feedback" aria-haspopup="dialog" aria-expanded="false" title="Feedback">
                                                        <i class="sap-icon--feedback"></i>
                                                    </button>
                                                </div>
                                                <div class="fd-shellbar__action">
                                                    <button
                                                        class="fd-button fd-button--transparent fd-shellbar__button"
                                                        aria-label="Help" aria-haspopup="dialog" aria-expanded="false" title="Help">
                                                        <i class="sap-icon--sys-help"></i>
                                                    </button>
                                                </div>
                                                <div class="fd-shellbar__action">
                                                    <div class="fd-popover fd-popover--right">
                                                        <div class="fd-popover__control">
                                                            <div class="fd-button fd-button--transparent fd-shellbar__button fd-user-menu__control"
                                                                onclick="onPopoverClick('HSTTDY276f')" aria-controls="HSTTDY276f" aria-expanded="false"
                                                                aria-haspopup="dialog" role="button" tabindex="0" aria-label="User Menu" title="User Menu">
                                                                <span
                                                                    class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail fd-shellbar__avatar--circle"

                                                                    aria-label="William Wallingham">
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true"
                                                            id="HSTTDY276f">
                                                            <nav class="fd-menu">
                                                                <ul class="fd-menu__list fd-menu__list--no-shadow">
                                                                    <li class="fd-menu__item">
                                                                        <a role="button" class="fd-menu__link">
                                                                            <span class="fd-menu__title">Settings</span>
                                                                        </a>
                                                                    </li>
                                                                    <li class="fd-menu__item">
                                                                        <a role="button" class="fd-menu__link">
                                                                            <span class="fd-menu__title">Sign Out</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </nav>
                                                        </div>
                                                        <div class="fd-shellbar__action">
                                                            <div class="fd-product-switch">
                                                                <div class="fd-popover fd-popover--right">
                                                                    <button
                                                                        class="fd-button fd-button--transparent fd-shellbar__button fd-popover__control"
                                                                        aria-label="Product Switcher"
                                                                        title="Product Switcher"
                                                                        aria-controls="YSGDGFD82347"
                                                                        aria-expanded="false"
                                                                        aria-haspopup="dialog"
                                                                        onclick="onPopoverClick('YSGDGFD82347')">
                                                                        <i class="sap-icon--grid"></i>
                                                                    </button>
                                                                    <div class="fd-popover__body fd-popover__body--right" aria-hidden="true"
                                                                        id="YSGDGFD82347">
                                                                        <div class="fd-product-switch__body">
                                                                            <ul class="fd-product-switch__list">
                                                                                <li class="fd-product-switch__item">

                                                                                    <div class="fd-product-switch__text">
                                                                                        <div class="fd-product-switch__title">Home</div>
                                                                                        <div class="fd-product-switch__subtitle">Central Home</div>
                                                                                    </div>
                                                                                </li>
                                                                                <li class="fd-product-switch__item selected">

                                                                                    <div class="fd-product-switch__text">
                                                                                        <div class="fd-product-switch__title">Analytics Cloud</div>
                                                                                        <div class="fd-product-switch__subtitle">Analytics Cloud</div>
                                                                                    </div>
                                                                                </li>
                                                                                <li class="fd-product-switch__item">

                                                                                    <div class="fd-product-switch__text">
                                                                                        <div class="fd-product-switch__title">Catalog</div>
                                                                                        <div class="fd-product-switch__subtitle">Ariba</div>
                                                                                    </div>
                                                                                </li>
                                                                                <li class="fd-product-switch__item">

                                                                                    <div class="fd-product-switch__text">
                                                                                        <div class="fd-product-switch__title">Guided Buying</div>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
```

### Actions in Overflow Toolbar

Controls like Search, Notifications, Joule, Help, and Feedback can be placed inside an Overflow Toolbar(clear type).

```html
<div class="fd-shellbar fd-shellbar--side-nav" role="banner" aria-label="Shell Bar">
    <div class="fd-shellbar__group fd-shellbar__group--product">
        <button aria-label="Main Navigation" aria-expanded="false" class="fd-button fd-button--transparent fd-shellbar__button">
            <i class="sap-icon--menu2"></i>
        </button>
        <div class="fd-shellbar__branding" role="link" tabindex="0" aria-label="SAP Corporate Portal Solution Name Home">
            <span class="fd-shellbar__logo"><img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" height="32" alt="SAP"></span>

            <span class="fd-shellbar__title">Corporate Portal</span>
        </div>
        <div class="fd-shellbar__group fd-shellbar__group--context-area" role="group" aria-label="Additional info">
            <span class="fd-shellbar__separator"></span>
            <div class="fd-popover">
                <div class="fd-popover__control">
                    <button
                        class="fd-button fd-button--transparent fd-shellbar__button fd-shellbar__button--menu fd-button--menu"
                        onclick="onPopoverClick('9GLB269412874');"
                        aria-controls="9GLB269412874"
                        aria-haspopup="true"
                        aria-expanded="false"
                        >
                        <span class="fd-button__text">EMEA</span>
                        <i class="sap-icon--slim-arrow-down"></i>
                    </button>
                </div>
                <div
                    class="fd-popover__body fd-popover__body--no-arrow"
                    aria-hidden="true"
                    id="9GLB269412874"
                    >
                    <nav class="fd-menu">
                        <ul class="fd-menu__list fd-menu__list--no-shadow">
                            <li class="fd-menu__item">
                                <a role="button" class="fd-menu__link">
                                    <span class="fd-menu__title">Application A</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a role="button" class="fd-menu__link">
                                    <span class="fd-menu__title">Application B</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a role="button" class="fd-menu__link">
                                    <span class="fd-menu__title">Application C</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a role="button" class="fd-menu__link">
                                    <span class="fd-menu__title">Application D</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <div class="fd-shellbar__group fd-shellbar__group--actions">
            <div class="fd-toolbar fd-toolbar--clear fd-toolbar--transparent fd-shellbar__toolbar" role="toolbar" aria-label="Toolbar">
                <div id="YDGFD82347TED" class="fd-input-group fd-shellbar__search-field">
                    <input
                    aria-label="search-input"
                    type="text"
                    onfocus="addClass('YDGFD82347TED', 'is-focus')"
                    onblur="removeClass('YDGFD82347TED', 'is-focus')"
                    class="fd-input fd-input-group__input fd-shellbar__search-field-input"
                    id="F4GcX348b1"
                    placeholder="Search everything"
                    />
                    <div
                        class="fd-input-group__addon fd-shellbar__search-field-addon fd-shellbar__search-cancel fd-input-group__addon--button"
                        >
                        <button
                            aria-label="button-search"
                            class="fd-shellbar__button fd-button fd-button--transparent"
                            >
                            <i class="sap-icon--decline"></i>
                        </button>
                    </div>
                    <div
                        class="fd-input-group__addon fd-shellbar__search-field-addon fd-shellbar__search-submit fd-input-group__addon--button"
                        >
                        <button
                            aria-label="button-search"
                            class="fd-shellbar__button fd-button fd-button--transparent"
                            >
                            <i class="sap-icon--search"></i>
                        </button>
                    </div>

                </div>
                <button
                    class="fd-button fd-button--transparent fd-shellbar__button"
                    aria-label="Joule Digital Assitant" aria-haspopup="dialog" aria-expanded="false" title="Joule Digital Assitant">
                    <i class="sap-icon--da"></i>
                </button>
                <button
                    class="fd-button fd-button--transparent fd-shellbar__button"
                    aria-label="Notifications"
                    title="Notifications"
                    aria-haspopup="dialog" aria-expanded="false"
                    >
                    <i class="sap-icon--bell"></i>
                    <span class="fd-button__badge">72</span>
                </button>
                <button
                    class="fd-button fd-button--transparent fd-shellbar__button"
                    aria-label="Feedback" aria-haspopup="dialog" aria-expanded="false" title="Feedback">
                    <i class="sap-icon--feedback"></i>
                </button>
                <button
                    class="fd-button fd-button--transparent fd-shellbar__button"
                    aria-label="Help" aria-haspopup="dialog" aria-expanded="false" title="Help">
                    <i class="sap-icon--sys-help"></i>
                </button>
            </div>
            <div class="fd-shellbar__action">
                <div class="fd-popover fd-popover--right">
                    <div class="fd-popover__control">
                        <div class="fd-button fd-button--transparent fd-shellbar__button fd-user-menu__control"
                            onclick="onPopoverClick('MKFAY276YRW')" aria-controls="MKFAY276YRW" aria-expanded="false"
                            aria-haspopup="dialog" role="button" tabindex="0" aria-label="User Menu" title="User Menu">
                            <span
                                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail fd-shellbar__avatar--circle"

                                aria-label="William Wallingham">
                            </span>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true"
                        id="MKFAY276YRW">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a role="button" class="fd-menu__link">
                                        <span class="fd-menu__title">Settings</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a role="button" class="fd-menu__link">
                                        <span class="fd-menu__title">Sign Out</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="fd-shellbar__action">
                        <div class="fd-product-switch">
                            <div class="fd-popover fd-popover--right">
                                <button
                                    class="fd-button fd-button--transparent fd-shellbar__button fd-popover__control"
                                    aria-label="Product Switcher"
                                    title="Product Switcher"
                                    aria-controls="UYYAY276YRW"
                                    aria-expanded="false"
                                    aria-haspopup="dialog"
                                    onclick="onPopoverClick('UYYAY276YRW')">
                                    <i class="sap-icon--grid"></i>
                                </button>
                                <div class="fd-popover__body fd-popover__body--right" aria-hidden="true"
                                    id="UYYAY276YRW">
                                    <div class="fd-product-switch__body">
                                        <ul class="fd-product-switch__list">
                                            <li class="fd-product-switch__item">

                                                <div class="fd-product-switch__text">
                                                    <div class="fd-product-switch__title">Home</div>
                                                    <div class="fd-product-switch__subtitle">Central Home</div>
                                                </div>
                                            </li>
                                            <li class="fd-product-switch__item selected">

                                                <div class="fd-product-switch__text">
                                                    <div class="fd-product-switch__title">Analytics Cloud</div>
                                                    <div class="fd-product-switch__subtitle">Analytics Cloud</div>
                                                </div>
                                            </li>
                                            <li class="fd-product-switch__item">

                                                <div class="fd-product-switch__text">
                                                    <div class="fd-product-switch__title">Catalog</div>
                                                    <div class="fd-product-switch__subtitle">Ariba</div>
                                                </div>
                                            </li>
                                            <li class="fd-product-switch__item">

                                                <div class="fd-product-switch__text">
                                                    <div class="fd-product-switch__title">Guided Buying</div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
```

### Actions in Overflow Toolbar

Truncation and overflow logic of Shell Bar are based on priorities, such as when a component with a higher priority takes precedence over an element with a lower priority. <br><br>For all screen sizes the following elements are always displayed:
<ul>
  <li>Side Navigation Button (if used)</li>
  <li>Avatar (User Menu)</li>
  <li>Product Switcher (if used)</li>
</ul>

<div style="font-weight: bold; font-size: 1.2rem;">XXL (1920=>) / XL (1440 – 1919) / L (1024 - 1439) / M (600 - 1023)</div>
<br>
<b>Visible items:</b>

<ul>
  <li>Hamburger Menu</li>
  <li>Branding (Logo + Product Name)</li>
  <li>Additional context area</li>
  <li>Search positioned right (expanded or collapsed)</li>
  <li>Shell Actions Buttons (visible or hidden under overflow)</li>
  <li>User Profile</li>
  <li>Product Switcher</li>
</ul>

<div style="font-weight: bold; font-size: 1.2rem;">S (599<=)</div>
<br>
<b>Visible items:</b>

<ul>
  <li>Hamburger Menu</li>
  <li>Branding (Logo)</li>
  <li>Additional context area</li>
  <li>Overflow Button with all Shell Actions including search & notifications (if there are more than 1 action)</li>
  <li>User Profile</li>
  <li>Product Switcher</li>
</ul>

<br>
<b>Overflow</b>
The overflow is displayed via a Popover and is used when there is more than one action available; the button should show a toggled state when the Popover is active.

```html
<div class="fd-shellbar fd-shellbar--side-nav" role="banner" aria-label="Shell Bar">
    <div class="fd-shellbar__group fd-shellbar__group--product">
        <button aria-label="Main Navigation" aria-expanded="false" class="fd-button fd-button--transparent fd-shellbar__button">
            <i class="sap-icon--menu2"></i>
        </button>
        <div class="fd-shellbar__branding" role="link" tabindex="0" aria-label="SAP Corporate Portal Solution Name Home">
            <span class="fd-shellbar__logo"><img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" height="32" alt="SAP"></span>

            <span class="fd-shellbar__title">Corporate Portal</span>
        </div>
    </div>
    <div class="fd-shellbar__group fd-shellbar__group--actions">
        <div class="fd-shellbar__action">
            <div id="JKHhjk7234k22ierw" class="fd-input-group fd-shellbar__search-field">
                <input
                aria-label="search-input"
                type="text"
                onfocus="addClass('JKHhjk7234k22ierw', 'is-focus')"
                onblur="removeClass('JKHhjk7234k22ierw', 'is-focus')"
                class="fd-input fd-input-group__input fd-shellbar__search-field-input"
                id="F4GcX348b1"
                placeholder="Search everything"
                />
                <div
                    class="fd-input-group__addon fd-shellbar__search-field-addon fd-shellbar__search-cancel fd-input-group__addon--button"
                    >
                    <button
                        aria-label="button-search"
                        class="fd-shellbar__button fd-button fd-button--transparent"
                        >
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
                <div
                    class="fd-input-group__addon fd-shellbar__search-field-addon fd-shellbar__search-submit fd-input-group__addon--button"
                    >
                    <button
                        aria-label="button-search"
                        class="fd-shellbar__button fd-button fd-button--transparent"
                        >
                        <i class="sap-icon--search"></i>
                    </button>
                </div>

            </div>
        </div>
        <div class="fd-shellbar__action">
            <button
                class="fd-button fd-button--transparent fd-shellbar__button"
                aria-label="Joule Digital Assitant" aria-haspopup="dialog" aria-expanded="false" title="Joule Digital Assitant">
                <i class="sap-icon--da"></i>
            </button>
        </div>
        <div class="fd-shellbar__action">
            <button
                class="fd-button fd-button--transparent fd-shellbar__button"
                aria-label="Notifications"
                title="Notifications"
                aria-haspopup="dialog" aria-expanded="false"
                >
                <i class="sap-icon--bell"></i>
                <span class="fd-button__badge">72</span>
            </button>
        </div>
        <div class="fd-shellbar__action">
            <button
                class="fd-button fd-button--transparent fd-shellbar__button"
                aria-label="Feedback" aria-haspopup="dialog" aria-expanded="false" title="Feedback">
                <i class="sap-icon--feedback"></i>
            </button>
        </div>
        <div class="fd-shellbar__action">
            <button
                class="fd-button fd-button--transparent fd-shellbar__button"
                aria-label="Help" aria-haspopup="dialog" aria-expanded="false" title="Help">
                <i class="sap-icon--sys-help"></i>
            </button>
        </div>
        <div class="fd-shellbar__action">
            <div class="fd-popover fd-popover--right">
                <div class="fd-popover__control">
                    <div class="fd-button fd-button--transparent fd-shellbar__button fd-user-menu__control"
                        onclick="onPopoverClick('MKFAY276JAD')" aria-controls="MKFAY276JAD" aria-expanded="false"
                        aria-haspopup="dialog" role="button" tabindex="0" aria-label="User Menu" title="User Menu">
                        <span
                            class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail fd-shellbar__avatar--circle"

                            aria-label="William Wallingham">
                        </span>
                    </div>
                </div>
                <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true"
                    id="MKFAY276JAD">
                    <nav class="fd-menu">
                        <ul class="fd-menu__list fd-menu__list--no-shadow">
                            <li class="fd-menu__item">
                                <a role="button" class="fd-menu__link">
                                    <span class="fd-menu__title">Settings</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a role="button" class="fd-menu__link">
                                    <span class="fd-menu__title">Sign Out</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="fd-shellbar__action">
                    <div class="fd-product-switch">
                        <div class="fd-popover fd-popover--right">
                            <button
                                class="fd-button fd-button--transparent fd-shellbar__button fd-popover__control"
                                aria-label="Product Switcher"
                                title="Product Switcher"
                                aria-controls="POIYRQW"
                                aria-expanded="false"
                                aria-haspopup="dialog"
                                onclick="onPopoverClick('POIYRQW')">
                                <i class="sap-icon--grid"></i>
                            </button>
                            <div class="fd-popover__body fd-popover__body--right" aria-hidden="true"
                                id="POIYRQW">
                                <div class="fd-product-switch__body">
                                    <ul class="fd-product-switch__list">
                                        <li class="fd-product-switch__item">

                                            <div class="fd-product-switch__text">
                                                <div class="fd-product-switch__title">Home</div>
                                                <div class="fd-product-switch__subtitle">Central Home</div>
                                            </div>
                                        </li>
                                        <li class="fd-product-switch__item selected">

                                            <div class="fd-product-switch__text">
                                                <div class="fd-product-switch__title">Analytics Cloud</div>
                                                <div class="fd-product-switch__subtitle">Analytics Cloud</div>
                                            </div>
                                        </li>
                                        <li class="fd-product-switch__item">

                                            <div class="fd-product-switch__text">
                                                <div class="fd-product-switch__title">Catalog</div>
                                                <div class="fd-product-switch__subtitle">Ariba</div>
                                            </div>
                                        </li>
                                        <li class="fd-product-switch__item">

                                            <div class="fd-product-switch__text">
                                                <div class="fd-product-switch__title">Guided Buying</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="fd-shellbar fd-shellbar--side-nav" role="banner" aria-label="Shell Bar">
                            <div class="fd-shellbar__group fd-shellbar__group--product">
                                <button aria-label="Main Navigation" aria-expanded="false" class="fd-button fd-button--transparent fd-shellbar__button">
                                    <i class="sap-icon--menu2"></i>
                                </button>
                                <div class="fd-shellbar__branding" role="link" tabindex="0" aria-label="SAP Corporate Portal Solution Name Home">
                                    <span class="fd-shellbar__logo"><img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" width="48" height="24" alt="SAP"></span>

                                    <span class="fd-shellbar__title">Corporate Portal</span>
                                </div>
                            </div>
                            <div class="fd-shellbar__group fd-shellbar__group--actions">
                                <div class="fd-shellbar__action">
                                    <button
                                        class="fd-button fd-button--transparent fd-shellbar__button"
                                        aria-label="Search" aria-haspopup="dialog" aria-expanded="false" title="Search">
                                        <i class="sap-icon--search"></i>
                                    </button>
                                </div>
                                <div class="fd-shellbar__action">
                                    <button
                                        class="fd-button fd-button--transparent fd-shellbar__button"
                                        aria-label="Joule Digital Assitant" aria-haspopup="dialog" aria-expanded="false" title="Joule Digital Assitant">
                                        <i class="sap-icon--da"></i>
                                    </button>
                                </div>
                                <div class="fd-shellbar__action">
                                    <button
                                        class="fd-button fd-button--transparent fd-shellbar__button"
                                        aria-label="Notifications"
                                        title="Notifications"
                                        aria-haspopup="dialog" aria-expanded="false"
                                        >
                                        <i class="sap-icon--bell"></i>
                                        <span class="fd-button__badge">72</span>
                                    </button>
                                </div>
                                <div class="fd-shellbar__action">
                                    <button
                                        class="fd-button fd-button--transparent fd-shellbar__button"
                                        aria-label="Feedback" aria-haspopup="dialog" aria-expanded="false" title="Feedback">
                                        <i class="sap-icon--feedback"></i>
                                    </button>
                                </div>
                                <div class="fd-shellbar__action">
                                    <button
                                        class="fd-button fd-button--transparent fd-shellbar__button"
                                        aria-label="Help" aria-haspopup="dialog" aria-expanded="false" title="Help">
                                        <i class="sap-icon--sys-help"></i>
                                    </button>
                                </div>
                                <div class="fd-shellbar__action">
                                    <div class="fd-popover fd-popover--right">
                                        <div class="fd-popover__control">
                                            <div class="fd-button fd-button--transparent fd-shellbar__button fd-user-menu__control"
                                                onclick="onPopoverClick('MKFAY276sdfasdf')" aria-controls="MKFAY276sdfasdf" aria-expanded="false"
                                                aria-haspopup="dialog" role="button" tabindex="0" aria-label="User Menu" title="User Menu">
                                                <span
                                                    class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail fd-shellbar__avatar--circle"

                                                    aria-label="William Wallingham">
                                                </span>
                                            </div>
                                        </div>
                                        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true"
                                            id="MKFAY276sdfasdf">
                                            <nav class="fd-menu">
                                                <ul class="fd-menu__list fd-menu__list--no-shadow">
                                                    <li class="fd-menu__item">
                                                        <a role="button" class="fd-menu__link">
                                                            <span class="fd-menu__title">Settings</span>
                                                        </a>
                                                    </li>
                                                    <li class="fd-menu__item">
                                                        <a role="button" class="fd-menu__link">
                                                            <span class="fd-menu__title">Sign Out</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div class="fd-shellbar__action">
                                    <div class="fd-product-switch">
                                        <div class="fd-popover fd-popover--right">
                                            <button
                                                class="fd-button fd-button--transparent fd-shellbar__button fd-popover__control"
                                                aria-label="Product Switcher"
                                                title="Product Switcher"
                                                aria-controls="QWERTYI"
                                                aria-expanded="false"
                                                aria-haspopup="dialog"
                                                onclick="onPopoverClick('QWERTYI')">
                                                <i class="sap-icon--grid"></i>
                                            </button>
                                            <div class="fd-popover__body fd-popover__body--right" aria-hidden="true"
                                                id="QWERTYI">
                                                <div class="fd-product-switch__body">
                                                    <ul class="fd-product-switch__list">
                                                        <li class="fd-product-switch__item">

                                                            <div class="fd-product-switch__text">
                                                                <div class="fd-product-switch__title">Home</div>
                                                                <div class="fd-product-switch__subtitle">Central Home</div>
                                                            </div>
                                                        </li>
                                                        <li class="fd-product-switch__item selected">

                                                            <div class="fd-product-switch__text">
                                                                <div class="fd-product-switch__title">Analytics Cloud</div>
                                                                <div class="fd-product-switch__subtitle">Analytics Cloud</div>
                                                            </div>
                                                        </li>
                                                        <li class="fd-product-switch__item">

                                                            <div class="fd-product-switch__text">
                                                                <div class="fd-product-switch__title">Catalog</div>
                                                                <div class="fd-product-switch__subtitle">Ariba</div>
                                                            </div>
                                                        </li>
                                                        <li class="fd-product-switch__item">

                                                            <div class="fd-product-switch__text">
                                                                <div class="fd-product-switch__title">Guided Buying</div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="fd-shellbar fd-shellbar--md fd-shellbar--side-nav" role="banner" aria-label="Shell Bar">
                                            <div class="fd-shellbar__group fd-shellbar__group--product">
                                                <button aria-label="Main Navigation" aria-expanded="false" class="fd-button fd-button--transparent fd-shellbar__button">
                                                    <i class="sap-icon--menu2"></i>
                                                </button>
                                                <div class="fd-shellbar__branding" role="link" tabindex="0" aria-label="SAP Corporate Portal Solution Name Home">
                                                    <span class="fd-shellbar__logo"><img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" width="48" height="24" alt="SAP"></span>

                                                    <span class="fd-shellbar__title">Corporate Portal</span>
                                                </div>
                                            </div>
                                            <div class="fd-shellbar__group fd-shellbar__group--actions">
                                                <div class="fd-shellbar__action">
                                                    <button
                                                        class="fd-button fd-button--transparent fd-shellbar__button"
                                                        aria-label="Search" aria-haspopup="dialog" aria-expanded="false" title="Search">
                                                        <i class="sap-icon--search"></i>
                                                    </button>
                                                </div>
                                                <div class="fd-shellbar__action">
                                                    <div class="fd-popover fd-popover--right">
                                                        <div class="fd-popover__control">
                                                            <div class="fd-button fd-button--transparent fd-shellbar__button is-toggled"
                                                                onclick="onPopoverClick('QWTEFREQR')" aria-controls="QWTEFREQR" aria-expanded="true"
                                                                aria-haspopup="dialog" role="button" tabindex="0" aria-label="Overflow" title="Overflow">
                                                                <i class="sap-icon--overflow"></i>
                                                                <span class="fd-button__badge">72</span>
                                                            </div>
                                                        </div>
                                                        <div class="fd-popover__body fd-popover__body--right" aria-hidden="false"
                                                            id="QWTEFREQR">
                                                            <nav class="fd-menu fd-menu--icons">
                                                                <ul class="fd-menu__list fd-menu__list--no-shadow">
                                                                    <li class="fd-menu__item">
                                                                        <a role="button" class="fd-menu__link">
                                                                            <span class="fd-menu__addon-before"><i class="sap-icon--bell" role="presentation"></i></span>
                                                                            <span class="fd-menu__title">Notifications</span>
                                                                        </a>
                                                                    </li>
                                                                    <li class="fd-menu__item">
                                                                        <a role="button" class="fd-menu__link">
                                                                            <span class="fd-menu__addon-before"><i class="sap-icon--feedback" role="presentation"></i></span>
                                                                            <span class="fd-menu__title">Feedback</span>
                                                                        </a>
                                                                    </li>
                                                                    <li class="fd-menu__item">
                                                                        <a role="button" class="fd-menu__link">
                                                                            <span class="fd-menu__addon-before"><i class="sap-icon--sys-help" role="presentation"></i></span>
                                                                            <span class="fd-menu__title">Help</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </nav>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="fd-shellbar__action">
                                                    <div class="fd-popover fd-popover--right">
                                                        <div class="fd-popover__control">
                                                            <div class="fd-button fd-button--transparent fd-shellbar__button fd-user-menu__control"
                                                                onclick="onPopoverClick('YUTTYAY276')" aria-controls="YUTTYAY276" aria-expanded="false"
                                                                aria-haspopup="dialog" role="button" tabindex="0" aria-label="User Menu" title="User Menu">
                                                                <span
                                                                    class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail fd-shellbar__avatar--circle"

                                                                    aria-label="William Wallingham">
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true"
                                                            id="YUTTYAY276">
                                                            <nav class="fd-menu">
                                                                <ul class="fd-menu__list fd-menu__list--no-shadow">
                                                                    <li class="fd-menu__item">
                                                                        <a role="button" class="fd-menu__link">
                                                                            <span class="fd-menu__title">Settings</span>
                                                                        </a>
                                                                    </li>
                                                                    <li class="fd-menu__item">
                                                                        <a role="button" class="fd-menu__link">
                                                                            <span class="fd-menu__title">Sign Out</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </nav>
                                                        </div>
                                                        <div class="fd-shellbar__action">
                                                            <div class="fd-product-switch">
                                                                <div class="fd-popover fd-popover--right">
                                                                    <button
                                                                        class="fd-button fd-button--transparent fd-shellbar__button fd-popover__control"
                                                                        aria-label="Product Switcher"
                                                                        title="Product Switcher"
                                                                        aria-controls="NHYUJM,KI"
                                                                        aria-expanded="false"
                                                                        aria-haspopup="dialog"
                                                                        onclick="onPopoverClick('NHYUJM,KI')">
                                                                        <i class="sap-icon--grid"></i>
                                                                    </button>
                                                                    <div class="fd-popover__body fd-popover__body--right" aria-hidden="true"
                                                                        id="NHYUJM,KI">
                                                                        <div class="fd-product-switch__body">
                                                                            <ul class="fd-product-switch__list">
                                                                                <li class="fd-product-switch__item">

                                                                                    <div class="fd-product-switch__text">
                                                                                        <div class="fd-product-switch__title">Home</div>
                                                                                        <div class="fd-product-switch__subtitle">Central Home</div>
                                                                                    </div>
                                                                                </li>
                                                                                <li class="fd-product-switch__item selected">

                                                                                    <div class="fd-product-switch__text">
                                                                                        <div class="fd-product-switch__title">Analytics Cloud</div>
                                                                                        <div class="fd-product-switch__subtitle">Analytics Cloud</div>
                                                                                    </div>
                                                                                </li>
                                                                                <li class="fd-product-switch__item">

                                                                                    <div class="fd-product-switch__text">
                                                                                        <div class="fd-product-switch__title">Catalog</div>
                                                                                        <div class="fd-product-switch__subtitle">Ariba</div>
                                                                                    </div>
                                                                                </li>
                                                                                <li class="fd-product-switch__item">

                                                                                    <div class="fd-product-switch__text">
                                                                                        <div class="fd-product-switch__title">Guided Buying</div>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="fd-shellbar fd-shellbar--sm fd-shellbar--side-nav" role="banner" aria-label="Shell Bar">
                                                                    <div class="fd-shellbar__group fd-shellbar__group--product">
                                                                        <button aria-label="Main Navigation" aria-expanded="false" class="fd-button fd-button--transparent fd-shellbar__button">
                                                                            <i class="sap-icon--menu2"></i>
                                                                        </button>
                                                                        <div class="fd-shellbar__branding" role="link" tabindex="0" aria-label="SAP Corporate Portal Solution Name Home">
                                                                            <span class="fd-shellbar__logo"><img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" width="48" height="24" alt="SAP"></span>

                                                                            <span class="fd-shellbar__title">Corporate Portal</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="fd-shellbar__group fd-shellbar__group--actions">
                                                                        <div class="fd-shellbar__action">
                                                                            <div class="fd-popover fd-popover--right">
                                                                                <div class="fd-popover__control">
                                                                                    <div class="fd-button fd-button--transparent fd-shellbar__button is-toggled"
                                                                                        onclick="onPopoverClick('POWERRT')" aria-controls="POWERRT" aria-expanded="true"
                                                                                        aria-haspopup="dialog" role="button" tabindex="0" aria-label="Overflow" title="Overflow">
                                                                                        <i class="sap-icon--overflow"></i>
                                                                                        <span class="fd-button__badge">72</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="fd-popover__body fd-popover__body--right" aria-hidden="false"
                                                                                    id="POWERRT">
                                                                                    <nav class="fd-menu fd-menu--icons">
                                                                                        <ul class="fd-menu__list fd-menu__list--no-shadow">
                                                                                            <li class="fd-menu__item">
                                                                                                <a role="button" class="fd-menu__link">
                                                                                                    <span class="fd-menu__addon-before"><i class="sap-icon--search" role="presentation"></i></span>
                                                                                                    <span class="fd-menu__title">Search</span>
                                                                                                </a>
                                                                                            </li>
                                                                                            <li class="fd-menu__item">
                                                                                                <a role="button" class="fd-menu__link">
                                                                                                    <span class="fd-menu__addon-before"><i class="sap-icon--bell" role="presentation"></i></span>
                                                                                                    <span class="fd-menu__title">Notifications</span>
                                                                                                </a>
                                                                                            </li>
                                                                                            <li class="fd-menu__item">
                                                                                                <a role="button" class="fd-menu__link">
                                                                                                    <span class="fd-menu__addon-before"><i class="sap-icon--feedback" role="presentation"></i></span>
                                                                                                    <span class="fd-menu__title">Feedback</span>
                                                                                                </a>
                                                                                            </li>
                                                                                            <li class="fd-menu__item">
                                                                                                <a role="button" class="fd-menu__link">
                                                                                                    <span class="fd-menu__addon-before"><i class="sap-icon--sys-help" role="presentation"></i></span>
                                                                                                    <span class="fd-menu__title">Help</span>
                                                                                                </a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </nav>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="fd-shellbar__action">
                                                                            <div class="fd-popover fd-popover--right">
                                                                                <div class="fd-popover__control">
                                                                                    <div class="fd-button fd-button--transparent fd-shellbar__button fd-user-menu__control"
                                                                                        onclick="onPopoverClick('YWURFYWER')" aria-controls="YWURFYWER" aria-expanded="false"
                                                                                        aria-haspopup="dialog" role="button" tabindex="0" aria-label="User Menu" title="User Menu">
                                                                                        <span
                                                                                            class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail fd-shellbar__avatar--circle"

                                                                                            aria-label="William Wallingham">
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right" aria-hidden="true"
                                                                                    id="YWURFYWER">
                                                                                    <nav class="fd-menu">
                                                                                        <ul class="fd-menu__list fd-menu__list--no-shadow">
                                                                                            <li class="fd-menu__item">
                                                                                                <a role="button" class="fd-menu__link">
                                                                                                    <span class="fd-menu__title">Settings</span>
                                                                                                </a>
                                                                                            </li>
                                                                                            <li class="fd-menu__item">
                                                                                                <a role="button" class="fd-menu__link">
                                                                                                    <span class="fd-menu__title">Sign Out</span>
                                                                                                </a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </nav>
                                                                                </div>
                                                                                <div class="fd-shellbar__action">
                                                                                    <div class="fd-product-switch">
                                                                                        <div class="fd-popover fd-popover--right">
                                                                                            <button
                                                                                                class="fd-button fd-button--transparent fd-shellbar__button fd-popover__control"
                                                                                                aria-label="Product Switcher"
                                                                                                title="Product Switcher"
                                                                                                aria-controls="CVSNZCVSDCUY"
                                                                                                aria-expanded="false"
                                                                                                aria-haspopup="dialog"
                                                                                                onclick="onPopoverClick('CVSNZCVSDCUY')">
                                                                                                <i class="sap-icon--grid"></i>
                                                                                            </button>
                                                                                            <div class="fd-popover__body fd-popover__body--right" aria-hidden="true"
                                                                                                id="CVSNZCVSDCUY">
                                                                                                <div class="fd-product-switch__body">
                                                                                                    <ul class="fd-product-switch__list">
                                                                                                        <li class="fd-product-switch__item">

                                                                                                            <div class="fd-product-switch__text">
                                                                                                                <div class="fd-product-switch__title">Home</div>
                                                                                                                <div class="fd-product-switch__subtitle">Central Home</div>
                                                                                                            </div>
                                                                                                        </li>
                                                                                                        <li class="fd-product-switch__item selected">

                                                                                                            <div class="fd-product-switch__text">
                                                                                                                <div class="fd-product-switch__title">Analytics Cloud</div>
                                                                                                                <div class="fd-product-switch__subtitle">Analytics Cloud</div>
                                                                                                            </div>
                                                                                                        </li>
                                                                                                        <li class="fd-product-switch__item">

                                                                                                            <div class="fd-product-switch__text">
                                                                                                                <div class="fd-product-switch__title">Catalog</div>
                                                                                                                <div class="fd-product-switch__subtitle">Ariba</div>
                                                                                                            </div>
                                                                                                        </li>
                                                                                                        <li class="fd-product-switch__item">

                                                                                                            <div class="fd-product-switch__text">
                                                                                                                <div class="fd-product-switch__title">Guided Buying</div>
                                                                                                            </div>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div class="fd-shellbar fd-shellbar--sm fd-shellbar--side-nav" role="banner" aria-label="Shell Bar">
                                                                                            <div class="fd-shellbar__group fd-shellbar__group--actions fd-shellbar__group--full-width">
                                                                                                <div class="fd-shellbar__action">
                                                                                                    <div id="JKHhjk7234k22" class="fd-input-group fd-shellbar__search-field">
                                                                                                        <input
                                                                                                        aria-label="search-input"
                                                                                                        type="text"
                                                                                                        onfocus="addClass('JKHhjk7234k22', 'is-focus')"
                                                                                                        onblur="removeClass('JKHhjk7234k22', 'is-focus')"
                                                                                                        class="fd-input fd-input-group__input fd-shellbar__search-field-input"
                                                                                                        id="F4GcX348b1hbd"
                                                                                                        placeholder="Search everything"
                                                                                                        />
                                                                                                        <div
                                                                                                            class="fd-input-group__addon fd-shellbar__search-field-addon fd-shellbar__search-cancel fd-input-group__addon--button"
                                                                                                            >
                                                                                                            <button
                                                                                                                aria-label="button-search"
                                                                                                                class="fd-shellbar__button fd-button fd-button--transparent"
                                                                                                                >
                                                                                                                <i class="sap-icon--decline"></i>
                                                                                                            </button>
                                                                                                        </div>
                                                                                                        <div
                                                                                                            class="fd-input-group__addon fd-shellbar__search-field-addon fd-shellbar__search-submit fd-input-group__addon--button"
                                                                                                            >
                                                                                                            <button
                                                                                                                aria-label="button-search"
                                                                                                                class="fd-shellbar__button fd-button fd-button--transparent"
                                                                                                                >
                                                                                                                <i class="sap-icon--search"></i>
                                                                                                            </button>
                                                                                                        </div>

                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="fd-shellbar__action">
                                                                                                    <button class="fd-button fd-button--transparent fd-shellbar__button">
                                                                                                        <span class="fd-button__text">Cancel</span>
                                                                                                    </button>
                                                                                                </div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/shellbar/shellbar.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
