---
component: fd-dialog-docs-static
title: Components/Settings
category: Components
selector: fd-dialog-docs-static
cssFile: dialog-docs-static.css
sourcePath: packages/styles/stories/Components/settings/settings.stories.js
tags: ["uxc"]
dependencies: ["avatar","bar","button","dialog","form-group","form-item","form-label","icon","icon-tab-bar","input","input-group","list","message-strip","popover","select","settings","switch","title","toolbar"]
relatedComponents: ["avatar","bar","button","dialog","form-group","form-item","form-label","icon","icon-tab-bar","input","input-group","list","message-strip","popover","select","switch","title","toolbar"]
stability: stable
---

# Components/Settings

The Settings Dialog allows users to personalize their Fiori experience by adjusting various settings.<br><br> <h3>Layout and Structure</h3>
    The Settings Dialog follows a standard dialog format with a split layout inside the content area. On the left, a list of option groups is displayed. Selecting a group reveals its corresponding settings in the detail area on the right.<br><br> 
    <ul>
      <li><b>List Area - </b>The area which contains the list of settings.</li>
      <li><b>Detail Area - </b>This area contains:.
        <ul>
          <li><b>Header - </b>The area which contains the title and the header of the selected group is settings. Varies based on selection. It's built using Toolbar, IconTabBar and Bar components.</li>
          <li><b>Content - </b>Some detail pages may contain forms to lay out various controls depending on the type of settings. Content Area can be scrollable.</li>
        </ul>
      </li>
      <li><b>Footer - </b>Follows a standard Page Footer layout</li>
    </ul>
- <code>.fd-settings</code> applied on an element with class <code>.fd-dialog</code>
  - <code>.fd-settings\\_\\_dialog-content</code> applied on an element with class <code>.fd-dialog\\_\\_content</code>
    - <code>.fd-settings\\_\\_dialog-body</code> applied on an element with class <code>.fd-dialog\\_\\_body</code>
      - <code>.fd-settings\\_\\_list-area</code>
        - <code>.fd-settings\\_\\_list-container</code>
          - <code>.fd-settings\\_\\_list</code> with modifier <code>.fd-settings\\_\\_list--footer</code> applied on an element with class <code>.fd-list</code>
      - <code>.fd-settings\\_\\_detail-area</code>
          - <code>.fd-settings\\_\\_header</code>  applied on an element with class <code>.fd-bar fd-bar--header</code>
          - <code>.fd-settings\\_\\_tab-bar</code>  applied on an element with class <code>.fd-icon-tab-bar</code>
          - <code>.fd-settings\\_\\_content</code> with modifiers <code>.fd-settings\\_\\_content--no-background</code> and <code>.fd-settings\\_\\_content--no-padding</code> used individually or applied on an element with class <code>.fd-icon-tab-bar\\_\\_panel</code>

## Dependencies

This component depends on the following CSS files:

- `avatar.css`
- `bar.css`
- `button.css`
- `dialog.css`
- `form-group.css`
- `form-item.css`
- `form-label.css`
- `icon.css`
- `icon-tab-bar.css`
- `input.css`
- `input-group.css`
- `list.css`
- `message-strip.css`
- `popover.css`
- `select.css`
- `settings.css`
- `switch.css`
- `title.css`
- `toolbar.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/dialog-docs-static.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/avatar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/bar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/dialog.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/form-group.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/form-item.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/form-label.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon-tab-bar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/input.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/input-group.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/list.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/message-strip.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/popover.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/select.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/settings.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/switch.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/title.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/toolbar.css" rel="stylesheet">
```

## Basic Usage

```html
<section class="fd-dialog-docs-static fd-dialog fd-settings fd-dialog--active">
    <div
        class="fd-dialog__content fd-settings__dialog-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title-1"

        >
        <div class="fd-dialog__body fd-settings__dialog-body">
            <div class="fd-settings__container">
                <div class="fd-settings__list-area">
                    <div class="fd-bar fd-bar--header">
                        <div class="fd-bar__left">
                            <div class="fd-bar__element">
                                <h1 class="fd-title fd-title--h5" aria-label="text">Settings</h1>
                            </div>
                        </div>
                    </div>
                    <div class="fd-settings__list-container">
                        <ul
                            class="fd-list fd-list--navigation fd-list--navigation-indication fd-list--no-border fd-settings__list"
                            role="list"
                            >
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link is-selected">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--user-settings"></i>
                                    <span class="fd-list__title">User Account</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--palette"></i>
                                    <span class="fd-list__title">Appearance</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Language & Region</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--iphone"></i>
                                    <span class="fd-list__title">SAP Mobile Start Application</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--bell"></i>
                                    <span class="fd-list__title">Notifications</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="fd-settings__detail-area">
                    <div class="fd-bar fd-bar--header fd-settings__header">
                        <div class="fd-bar__left">
                            <div class="fd-bar__element">
                                <h2 class="fd-title fd-title--h5" aria-label="text">User Account</h2>
                            </div>
                        </div>
                    </div>

                    <div class="fd-settings__content fd-settings__content--no-background">
                        <div class="fd-settings__profile-card">
                            <span
                                class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail"

                                role="img"
                                aria-label="Alain Chevallier"
                                >
                                <i
                                    class="fd-avatar__zoom-icon sap-icon--edit"
                                    role="presentation"
                                    aria-hidden="true"
                                    ></i>
                                </span>
                                <h3 class="fd-settings__profile-card-name">Alain Chevallier</h3>
                                <div class="fd-settings__profile-card-subline">alain.chevallier@sap.com</div>
                                <div class="fd-settings__profile-card-subline">Delivery Manager, SAP SE</div>
                                <button class="fd-button" role="button" aria-label="Manage Account">
                                    <i role="presentation" class="sap-icon--user-settings"></i>
                                    <span class="fd-button__text">Manage Account</span>
                                </button>
                            </div>
                            <div class="fd-settings__content-container">
                                <div
                                    style="
                                    background: cornsilk;
                                    height: 17.3rem;
                                    width: 100%;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    "
                                    >
                                    Content Area
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="fd-dialog__footer fd-bar fd-bar--footer fd-settings__dialog-footer">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-dialog__decisive-button fd-button fd-button--transparent">Close</button>
                        </div>
                    </div>
                </footer>
            </section>
```

## States

| Class | Description |
|-------|-------------|
| `is-selected` | Selected state |

## Related Components

This component works with or depends on:

- `avatar`
- `bar`
- `button`
- `dialog`
- `form-group`
- `form-item`
- `form-label`
- `icon`
- `icon-tab-bar`
- `input`
- `input-group`
- `list`
- `message-strip`
- `popover`
- `select`
- `switch`
- `title`
- `toolbar`

## Examples

### User Account (L-XL-XXL)

```html
<section class="fd-dialog-docs-static fd-dialog fd-settings fd-dialog--active">
    <div
        class="fd-dialog__content fd-settings__dialog-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title-1"

        >
        <div class="fd-dialog__body fd-settings__dialog-body">
            <div class="fd-settings__container">
                <div class="fd-settings__list-area">
                    <div class="fd-bar fd-bar--header">
                        <div class="fd-bar__left">
                            <div class="fd-bar__element">
                                <h1 class="fd-title fd-title--h5" aria-label="text">Settings</h1>
                            </div>
                        </div>
                    </div>
                    <div class="fd-settings__list-container">
                        <ul
                            class="fd-list fd-list--navigation fd-list--navigation-indication fd-list--no-border fd-settings__list"
                            role="list"
                            >
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link is-selected">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--user-settings"></i>
                                    <span class="fd-list__title">User Account</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--palette"></i>
                                    <span class="fd-list__title">Appearance</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Language & Region</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--iphone"></i>
                                    <span class="fd-list__title">SAP Mobile Start Application</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--bell"></i>
                                    <span class="fd-list__title">Notifications</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="fd-settings__detail-area">
                    <div class="fd-bar fd-bar--header fd-settings__header">
                        <div class="fd-bar__left">
                            <div class="fd-bar__element">
                                <h2 class="fd-title fd-title--h5" aria-label="text">User Account</h2>
                            </div>
                        </div>
                    </div>

                    <div class="fd-settings__content fd-settings__content--no-background">
                        <div class="fd-settings__profile-card">
                            <span
                                class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail"

                                role="img"
                                aria-label="Alain Chevallier"
                                >
                                <i
                                    class="fd-avatar__zoom-icon sap-icon--edit"
                                    role="presentation"
                                    aria-hidden="true"
                                    ></i>
                                </span>
                                <h3 class="fd-settings__profile-card-name">Alain Chevallier</h3>
                                <div class="fd-settings__profile-card-subline">alain.chevallier@sap.com</div>
                                <div class="fd-settings__profile-card-subline">Delivery Manager, SAP SE</div>
                                <button class="fd-button" role="button" aria-label="Manage Account">
                                    <i role="presentation" class="sap-icon--user-settings"></i>
                                    <span class="fd-button__text">Manage Account</span>
                                </button>
                            </div>
                            <div class="fd-settings__content-container">
                                <div
                                    style="
                                    background: cornsilk;
                                    height: 17.3rem;
                                    width: 100%;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    "
                                    >
                                    Content Area
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="fd-dialog__footer fd-bar fd-bar--footer fd-settings__dialog-footer">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-dialog__decisive-button fd-button fd-button--transparent">Close</button>
                        </div>
                    </div>
                </footer>
            </section>
```

### Appearance (L-XL-XXL)

```html
<section class="fd-dialog-docs-static fd-dialog fd-settings fd-dialog--active">
    <div
        class="fd-dialog__content fd-settings__dialog-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title-1"

        >
        <div class="fd-dialog__body fd-settings__dialog-body">
            <div class="fd-settings__container">
                <div class="fd-settings__list-area">
                    <div class="fd-bar fd-bar--header">
                        <div class="fd-bar__left">
                            <div class="fd-bar__element">
                                <h1 class="fd-title fd-title--h5" aria-label="text">Settings</h1>
                            </div>
                        </div>
                    </div>
                    <div class="fd-settings__list-container">
                        <ul
                            class="fd-list fd-list--navigation fd-list--navigation-indication fd-list--no-border fd-settings__list"
                            role="list"
                            >
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--user-settings"></i>
                                    <span class="fd-list__title">User Account</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link is-selected">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--palette"></i>
                                    <span class="fd-list__title">Appearance</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Language & Region</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--iphone"></i>
                                    <span class="fd-list__title">SAP Mobile Start Application</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--bell"></i>
                                    <span class="fd-list__title">Notifications</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="fd-settings__detail-area">
                    <div class="fd-bar fd-bar--header fd-settings__header">
                        <div class="fd-bar__left">
                            <div class="fd-bar__element">
                                <h2 class="fd-title fd-title--h5" aria-label="text">Appearance</h2>
                            </div>
                        </div>
                    </div>

                    <div class="fd-settings__content fd-settings__content--no-background">
                        <div class="fd-settings__content-container">
                            <div
                                style="
                                background: cornsilk;
                                height: 5rem;
                                width: 100%;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                "
                                >
                                Content Area
                            </div>
                        </div>

                        <div class="fd-toolbar fd-toolbar--title" role="toolbar" aria-label="Title toolbar">
                            <h3 class="fd-title fd-title--h4 fd-toolbar__title">Themes</h3>
                        </div>
                        <ul class="fd-list fd-list--theme" role="list">
                            <li role="listitem" class="fd-list__group-header">
                                <span class="fd-list__title">Coca Cola</span>
                            </li>
                            <li role="listitem" tabindex="0" class="fd-list__item">
                                <span
                                    class="fd-avatar fd-avatar--sm fd-avatar--accent-color-7"
                                    role="img"
                                    aria-label="Avatar"
                                    >
                                    <i
                                        role="presentation"
                                        aria-hidden="true"
                                        aria-label="Product placeholder"
                                        class="fd-avatar__icon sap-icon--product"
                                        ></i>
                                    </span>
                                    <div class="fd-list__content">
                                        <span class="fd-list__title"
                                            >Automatic (based on your operating system settings)</span
                                            >
                                        </div>
                                    </li>
                                    <li role="listitem" tabindex="0" class="fd-list__item">
                                        <span
                                            class="fd-avatar fd-avatar--sm fd-avatar--accent-color-7"
                                            role="img"
                                            aria-label="Avatar"
                                            >
                                            <i
                                                role="presentation"
                                                aria-hidden="true"
                                                aria-label="Product placeholder"
                                                class="fd-avatar__icon sap-icon--product"
                                                ></i>
                                            </span>
                                            <div class="fd-list__content">
                                                <span class="fd-list__title">Coca Cola Light</span>
                                            </div>
                                        </li>
                                        <li role="listitem" tabindex="0" class="fd-list__item">
                                            <span
                                                class="fd-avatar fd-avatar--sm fd-avatar--accent-color-7"
                                                role="img"
                                                aria-label="Avatar"
                                                >
                                                <i
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    aria-label="Product placeholder"
                                                    class="fd-avatar__icon sap-icon--product"
                                                    ></i>
                                                </span>
                                                <div class="fd-list__content">
                                                    <span class="fd-list__title">Coca Cola Dark</span>
                                                </div>
                                            </li>
                                            <li role="listitem" tabindex="0" class="fd-list__item">
                                                <span
                                                    class="fd-avatar fd-avatar--sm fd-avatar--accent-color-7"
                                                    role="img"
                                                    aria-label="Avatar"
                                                    >
                                                    <i
                                                        role="presentation"
                                                        aria-hidden="true"
                                                        aria-label="Product placeholder"
                                                        class="fd-avatar__icon sap-icon--product"
                                                        ></i>
                                                    </span>
                                                    <div class="fd-list__content">
                                                        <span class="fd-list__title">Coca Cola Light (High Contrast)</span>
                                                    </div>
                                                </li>
                                                <li role="listitem" tabindex="0" class="fd-list__item">
                                                    <span
                                                        class="fd-avatar fd-avatar--sm fd-avatar--accent-color-7"
                                                        role="img"
                                                        aria-label="Avatar"
                                                        >
                                                        <i
                                                            role="presentation"
                                                            aria-hidden="true"
                                                            aria-label="Product placeholder"
                                                            class="fd-avatar__icon sap-icon--product"
                                                            ></i>
                                                        </span>
                                                        <div class="fd-list__content">
                                                            <span class="fd-list__title">Coca Cola Dark (High Contrast)</span>
                                                        </div>
                                                    </li>

                                                    <li role="listitem" class="fd-list__group-header">
                                                        <span class="fd-list__title">SAP Horizon</span>
                                                    </li>
                                                    <li role="listitem" tabindex="0" class="fd-list__item">
                                                        <span
                                                            class="fd-avatar fd-avatar--sm fd-avatar--accent-color-7"
                                                            role="img"
                                                            aria-label="Avatar"
                                                            >
                                                            <i
                                                                role="presentation"
                                                                aria-hidden="true"
                                                                aria-label="Product placeholder"
                                                                class="fd-avatar__icon sap-icon--product"
                                                                ></i>
                                                            </span>
                                                            <div class="fd-list__content">
                                                                <span class="fd-list__title"
                                                                    >Automatic (based on your operating system settings)</span
                                                                    >
                                                                </div>
                                                            </li>
                                                            <li role="listitem" tabindex="0" class="fd-list__item">
                                                                <span
                                                                    class="fd-avatar fd-avatar--sm fd-avatar--accent-color-7"
                                                                    role="img"
                                                                    aria-label="Avatar"
                                                                    >
                                                                    <i
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        aria-label="Product placeholder"
                                                                        class="fd-avatar__icon sap-icon--product"
                                                                        ></i>
                                                                    </span>
                                                                    <div class="fd-list__content">
                                                                        <span class="fd-list__title">Morning Horizon</span>
                                                                    </div>
                                                                </li>
                                                                <li role="listitem" tabindex="0" class="fd-list__item">
                                                                    <span
                                                                        class="fd-avatar fd-avatar--sm fd-avatar--accent-color-7"
                                                                        role="img"
                                                                        aria-label="Avatar"
                                                                        >
                                                                        <i
                                                                            role="presentation"
                                                                            aria-hidden="true"
                                                                            aria-label="Product placeholder"
                                                                            class="fd-avatar__icon sap-icon--product"
                                                                            ></i>
                                                                        </span>
                                                                        <div class="fd-list__content">
                                                                            <span class="fd-list__title">Evening Horizon</span>
                                                                        </div>
                                                                    </li>
                                                                    <li role="listitem" tabindex="0" class="fd-list__item">
                                                                        <span
                                                                            class="fd-avatar fd-avatar--sm fd-avatar--accent-color-7"
                                                                            role="img"
                                                                            aria-label="Avatar"
                                                                            >
                                                                            <i
                                                                                role="presentation"
                                                                                aria-hidden="true"
                                                                                aria-label="Product placeholder"
                                                                                class="fd-avatar__icon sap-icon--product"
                                                                                ></i>
                                                                            </span>
                                                                            <div class="fd-list__content">
                                                                                <span class="fd-list__title">High Contrast White (Horizon)</span>
                                                                            </div>
                                                                        </li>
                                                                        <li role="listitem" tabindex="0" class="fd-list__item">
                                                                            <span
                                                                                class="fd-avatar fd-avatar--sm fd-avatar--accent-color-7"
                                                                                role="img"
                                                                                aria-label="Avatar"
                                                                                >
                                                                                <i
                                                                                    role="presentation"
                                                                                    aria-hidden="true"
                                                                                    aria-label="Product placeholder"
                                                                                    class="fd-avatar__icon sap-icon--product"
                                                                                    ></i>
                                                                                </span>
                                                                                <div class="fd-list__content">
                                                                                    <span class="fd-list__title">High Contrast Black (Horizon)</span>
                                                                                </div>
                                                                            </li>
                                                                            <li role="listitem" class="fd-list__group-header">
                                                                                <span class="fd-list__title">SAP Quartz</span>
                                                                            </li>
                                                                            <li role="listitem" tabindex="0" class="fd-list__item">
                                                                                <span
                                                                                    class="fd-avatar fd-avatar--sm fd-avatar--accent-color-7"
                                                                                    role="img"
                                                                                    aria-label="Avatar"
                                                                                    >
                                                                                    <i
                                                                                        role="presentation"
                                                                                        aria-hidden="true"
                                                                                        aria-label="Product placeholder"
                                                                                        class="fd-avatar__icon sap-icon--product"
                                                                                        ></i>
                                                                                    </span>
                                                                                    <div class="fd-list__content">
                                                                                        <span class="fd-list__title"
                                                                                            >Automatic (based on your operating system settings)</span
                                                                                            >
                                                                                        </div>
                                                                                    </li>
                                                                                    <li role="listitem" tabindex="0" class="fd-list__item">
                                                                                        <span
                                                                                            class="fd-avatar fd-avatar--sm fd-avatar--accent-color-7"
                                                                                            role="img"
                                                                                            aria-label="Avatar"
                                                                                            >
                                                                                            <i
                                                                                                role="presentation"
                                                                                                aria-hidden="true"
                                                                                                aria-label="Product placeholder"
                                                                                                class="fd-avatar__icon sap-icon--product"
                                                                                                ></i>
                                                                                            </span>
                                                                                            <div class="fd-list__content">
                                                                                                <span class="fd-list__title">Quartz Light</span>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li role="listitem" tabindex="0" class="fd-list__item">
                                                                                            <span
                                                                                                class="fd-avatar fd-avatar--sm fd-avatar--accent-color-7"
                                                                                                role="img"
                                                                                                aria-label="Avatar"
                                                                                                >
                                                                                                <i
                                                                                                    role="presentation"
                                                                                                    aria-hidden="true"
                                                                                                    aria-label="Product placeholder"
                                                                                                    class="fd-avatar__icon sap-icon--product"
                                                                                                    ></i>
                                                                                                </span>
                                                                                                <div class="fd-list__content">
                                                                                                    <span class="fd-list__title">Quartz Dark</span>
                                                                                                </div>
                                                                                            </li>
                                                                                            <li role="listitem" tabindex="0" class="fd-list__item">
                                                                                                <span
                                                                                                    class="fd-avatar fd-avatar--sm fd-avatar--accent-color-7"
                                                                                                    role="img"
                                                                                                    aria-label="Avatar"
                                                                                                    >
                                                                                                    <i
                                                                                                        role="presentation"
                                                                                                        aria-hidden="true"
                                                                                                        aria-label="Product placeholder"
                                                                                                        class="fd-avatar__icon sap-icon--product"
                                                                                                        ></i>
                                                                                                    </span>
                                                                                                    <div class="fd-list__content">
                                                                                                        <span class="fd-list__title">High Contrast White (Quartz)</span>
                                                                                                    </div>
                                                                                                </li>
                                                                                                <li role="listitem" tabindex="0" class="fd-list__item">
                                                                                                    <span
                                                                                                        class="fd-avatar fd-avatar--sm fd-avatar--accent-color-7"
                                                                                                        role="img"
                                                                                                        aria-label="Avatar"
                                                                                                        >
                                                                                                        <i
                                                                                                            role="presentation"
                                                                                                            aria-hidden="true"
                                                                                                            aria-label="Product placeholder"
                                                                                                            class="fd-avatar__icon sap-icon--product"
                                                                                                            ></i>
                                                                                                        </span>
                                                                                                        <div class="fd-list__content">
                                                                                                            <span class="fd-list__title">High Contrast Black (Quartz)</span>
                                                                                                        </div>
                                                                                                    </li>
                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <footer class="fd-dialog__footer fd-bar fd-bar--footer fd-settings__dialog-footer">
                                                                                        <div class="fd-bar__right">
                                                                                            <div class="fd-bar__element">
                                                                                                <button class="fd-dialog__decisive-button fd-button fd-button--transparent">Close</button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </footer>
                                                                                </section>
```

### Language & Region (L-XL-XXL)

```html
<section class="fd-dialog-docs-static fd-dialog fd-settings fd-dialog--active">
    <div
        class="fd-dialog__content fd-settings__dialog-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title-1"

        >
        <div class="fd-dialog__body fd-settings__dialog-body">
            <div class="fd-settings__container">
                <div class="fd-settings__list-area">
                    <div class="fd-bar fd-bar--header">
                        <div class="fd-bar__left">
                            <div class="fd-bar__element">
                                <h1 class="fd-title fd-title--h5" aria-label="text">Settings</h1>
                            </div>
                        </div>
                    </div>
                    <div class="fd-settings__list-container">
                        <ul
                            class="fd-list fd-list--navigation fd-list--navigation-indication fd-list--no-border fd-settings__list"
                            role="list"
                            >
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--user-settings"></i>
                                    <span class="fd-list__title">User Account</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--palette"></i>
                                    <span class="fd-list__title">Appearance</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link is-selected">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Language & Region</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--iphone"></i>
                                    <span class="fd-list__title">SAP Mobile Start Application</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--bell"></i>
                                    <span class="fd-list__title">Notifications</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="fd-settings__detail-area">
                    <div class="fd-bar fd-bar--header fd-settings__header">
                        <div class="fd-bar__left">
                            <div class="fd-bar__element">
                                <h2 class="fd-title fd-title--h5" aria-label="text">Language & Region</h2>
                            </div>
                        </div>
                    </div>

                    <div class="fd-settings__content fd-settings__content--no-background">
                        <div
                            role="note"
                            aria-labelledby="message-strip-hidden-text message-strip-text"
                            class="fd-message-strip fd-message-strip--information"
                            >
                            <span class="fd-message-strip__sr-only" id="message-strip-hidden-text"
                                >Information Bar</span
                                >

                                <div class="fd-message-strip__icon-container" aria-hidden="true">
                                    <span
                                        class="sap-icon sap-icon--message-information"
                                        role="presentation"
                                        aria-hidden="true"
                                        ></span>
                                    </div>

                                    <p class="fd-message-strip__text" id="message-strip-text">
                                        Close to apply your chosen language - the page will reload.
                                    </p>
                                </div>

                                <div class="fd-form-group">
                                    <div class="fd-form-item">
                                        <label for="form-item-1" class="fd-form-label">Display Language:</label>
                                        <div class="fd-input-group fd-input-group--control">
                                            <input
                                            type="text"
                                            class="fd-input fd-input-group__input"
                                            id="form-item-1"
                                            value="English (United States)"
                                            />
                                            <span class="fd-input-group__addon fd-input-group__addon--button">
                                                <button
                                                    aria-label="show/hide language options"
                                                    class="fd-input-group__button fd-button fd-button--transparent"
                                                    >
                                                    <i class="sap-icon--navigation-down-arrow"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </div>

                                    <div class="fd-form-item">
                                        <label for="form-item-1" class="fd-form-label">Region:</label>
                                        <div class="fd-input-group fd-input-group--control">
                                            <input
                                            type="text"
                                            class="fd-input fd-input-group__input"
                                            id="form-item-2"
                                            value="United States"
                                            />
                                            <span class="fd-input-group__addon fd-input-group__addon--button">
                                                <button
                                                    aria-label="show/hide region options"
                                                    class="fd-input-group__button fd-button fd-button--transparent"
                                                    >
                                                    <i class="sap-icon--navigation-down-arrow"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </div>

                                    <div class="fd-form-item">
                                        <label for="form-item-3" class="fd-form-label">Date Format:</label>
                                        <div class="fd-input-group fd-input-group--control">
                                            <input
                                            type="text"
                                            class="fd-input fd-input-group__input"
                                            id="form-item-3"
                                            value="MM.DD.YYYY"
                                            />
                                            <span class="fd-input-group__addon fd-input-group__addon--button">
                                                <button
                                                    aria-label="show/hide date format options"
                                                    class="fd-input-group__button fd-button fd-button--transparent"
                                                    >
                                                    <i class="sap-icon--navigation-down-arrow"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </div>

                                    <div class="fd-form-item">
                                        <label for="form-item-4" class="fd-form-label">Time Format:</label>
                                        <div class="fd-input-group fd-input-group--control">
                                            <input
                                            type="text"
                                            class="fd-input fd-input-group__input"
                                            id="form-item-4"
                                            value="12 Hour"
                                            />
                                            <span class="fd-input-group__addon fd-input-group__addon--button">
                                                <button
                                                    aria-label="show/hide time format options"
                                                    class="fd-input-group__button fd-button fd-button--transparent"
                                                    >
                                                    <i class="sap-icon--navigation-down-arrow"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </div>

                                    <div class="fd-form-item">
                                        <label for="form-item-5" class="fd-form-label">Time Zone:</label>
                                        <div class="fd-input-group fd-input-group--control">
                                            <input
                                            type="text"
                                            class="fd-input fd-input-group__input"
                                            id="form-item-5"
                                            value="GMT-5:00 Eastern Time (US & Canada)"
                                            />
                                            <span class="fd-input-group__addon fd-input-group__addon--button">
                                                <button
                                                    aria-label="show/hide time zone options"
                                                    class="fd-input-group__button fd-button fd-button--transparent"
                                                    >
                                                    <i class="sap-icon--navigation-down-arrow"></i>
                                                </button>
                                            </span>
                                        </div>

                                        <div class="fd-form-item">
                                            <label for="form-item-6" class="fd-form-label">Currency:</label>
                                            <div class="fd-input-group fd-input-group--control">
                                                <input
                                                type="text"
                                                class="fd-input fd-input-group__input"
                                                id="form-item-6"
                                                value="USD - United States Dollar"
                                                />
                                                <span class="fd-input-group__addon fd-input-group__addon--button">
                                                    <button
                                                        aria-label="show/hide currency options"
                                                        class="fd-input-group__button fd-button fd-button--transparent"
                                                        >
                                                        <i class="sap-icon--navigation-down-arrow"></i>
                                                    </button>
                                                </span>
                                            </div>

                                            <div class="fd-form-item">
                                                <label for="form-item-7" class="fd-form-label">Number Format:</label>
                                                <div class="fd-input-group fd-input-group--control">
                                                    <input
                                                    type="text"
                                                    class="fd-input fd-input-group__input"
                                                    id="form-item-7"
                                                    value="1,234.56"
                                                    />
                                                    <span class="fd-input-group__addon fd-input-group__addon--button">
                                                        <button
                                                            aria-label="show/hide number format options"
                                                            class="fd-input-group__button fd-button fd-button--transparent"
                                                            >
                                                            <i class="sap-icon--navigation-down-arrow"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                                <footer class="fd-dialog__footer fd-bar fd-bar--footer fd-settings__dialog-footer">
                                                    <div class="fd-bar__right">
                                                        <div class="fd-bar__element">
                                                            <button class="fd-dialog__decisive-button fd-button fd-button--transparent">Close</button>
                                                        </div>
                                                    </div>
                                                </footer>
                                            </section>
```

### Notifications (L-XL-XXL)

```html
<section class="fd-dialog-docs-static fd-dialog fd-settings fd-dialog--active">
    <div
        class="fd-dialog__content fd-settings__dialog-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title-1"

        >
        <div class="fd-dialog__body fd-settings__dialog-body">
            <div class="fd-settings__container">
                <div class="fd-settings__list-area">
                    <div class="fd-bar fd-bar--header">
                        <div class="fd-bar__left">
                            <div class="fd-bar__element">
                                <h5 class="fd-title fd-title--h5" aria-label="text">Settings</h5>
                            </div>
                        </div>
                    </div>
                    <div class="fd-settings__list-container">
                        <ul
                            class="fd-list fd-list--navigation fd-list--navigation-indication fd-list--no-border fd-settings__list"
                            role="list"
                            >
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--user-settings"></i>
                                    <div class="fd-list__title">User Account</div>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--palette"></i>
                                    <div class="fd-list__title">Appearance</div>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <div class="fd-list__title">Language & Region</div>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--iphone"></i>
                                    <div class="fd-list__title">SAP Mobile Start Application</div>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link is-selected">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--bell"></i>
                                    <div class="fd-list__title">Notifications</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="fd-settings__detail-area">
                    <div class="fd-bar fd-bar--header fd-settings__header">
                        <div class="fd-bar__left">
                            <div class="fd-bar__element">
                                <h5 class="fd-title fd-title--h5" aria-label="text">Notifications</h5>
                            </div>
                        </div>
                    </div>

                    <div class="fd-settings__content fd-settings__content--no-background">
                        <div
                            role="note"
                            aria-labelledby="message-strip-hidden-text message-strip-text"
                            class="fd-message-strip fd-message-strip--information"
                            >
                            <span class="fd-message-strip__sr-only" id="message-strip-hidden-text"
                                >Information Bar</span
                                >

                                <div class="fd-message-strip__icon-container" aria-hidden="true">
                                    <span
                                        class="sap-icon sap-icon--message-information"
                                        role="presentation"
                                        aria-hidden="true"
                                        ></span>
                                    </div>

                                    <p class="fd-message-strip__text" id="message-strip-text">
                                        Some settings are managed by your organization and cannot be changed.
                                    </p>
                                </div>

                                <ul class="fd-list fd-list--byline fd-list--notification" role="list">
                                    <li role="listitem" tabindex="0" class="fd-list__item">
                                        <div class="fd-list__content">
                                            <div class="fd-list__title">Allow Notifications</div>
                                        </div>
                                        <label class="fd-switch">
                                            <span class="fd-switch__control">
                                                <input checked class="fd-switch__input" type="checkbox" name="" value="" />
                                                <div class="fd-switch__slider">
                                                    <div class="fd-switch__track">
                                                        <i
                                                            role="presentation"
                                                            class="fd-switch__icon fd-switch__icon--on sap-icon--accept"
                                                            ></i>
                                                            <span class="fd-switch__handle" role="presentation"></span>
                                                            <i
                                                                role="presentation"
                                                                class="fd-switch__icon fd-switch__icon--off sap-icon--less"
                                                                ></i>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </label>
                                            </li>
                                        </ul>

                                        <ul class="fd-list fd-list--byline fd-list--notification" role="list">
                                            <li role="listitem" tabindex="0" class="fd-list__item">
                                                <div class="fd-list__content">
                                                    <div class="fd-list__title">Allow Banner Alerts</div>
                                                    <div class="fd-list__byline">Switch on Banner for Notifications</div>
                                                </div>
                                                <label class="fd-switch">
                                                    <span class="fd-switch__control">
                                                        <input checked class="fd-switch__input" type="checkbox" name="" value="" />
                                                        <div class="fd-switch__slider">
                                                            <div class="fd-switch__track">
                                                                <i
                                                                    role="presentation"
                                                                    class="fd-switch__icon fd-switch__icon--on sap-icon--accept"
                                                                    ></i>
                                                                    <span class="fd-switch__handle" role="presentation"></span>
                                                                    <i
                                                                        role="presentation"
                                                                        class="fd-switch__icon fd-switch__icon--off sap-icon--less"
                                                                        ></i>
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </label>
                                                    </li>
                                                </ul>

                                                <ul class="fd-list fd-list--byline fd-list--notification" role="list">
                                                    <li role="listitem" class="fd-list__group-header">
                                                        <div class="fd-list__title">Notification Group Title</div>
                                                    </li>
                                                    <li role="listitem" tabindex="0" class="fd-list__item">
                                                        <div class="fd-list__content">
                                                            <div class="fd-list__title">Notification Type</div>
                                                        </div>
                                                        <label class="fd-switch">
                                                            <span class="fd-switch__control">
                                                                <input checked class="fd-switch__input" type="checkbox" name="" value="" />
                                                                <div class="fd-switch__slider">
                                                                    <div class="fd-switch__track">
                                                                        <i
                                                                            role="presentation"
                                                                            class="fd-switch__icon fd-switch__icon--on sap-icon--accept"
                                                                            ></i>
                                                                            <span class="fd-switch__handle" role="presentation"></span>
                                                                            <i
                                                                                role="presentation"
                                                                                class="fd-switch__icon fd-switch__icon--off sap-icon--less"
                                                                                ></i>
                                                                            </div>
                                                                        </div>
                                                                    </span>
                                                                </label>
                                                                <button
                                                                    role="button"
                                                                    title="Click to navigate"
                                                                    class="fd-button fd-button--transparent"
                                                                    >
                                                                    <i
                                                                        class="sap-icon--navigation-right-arrow"
                                                                        role="presentation"
                                                                        aria-hidden="true"
                                                                        ></i>
                                                                    </button>
                                                                </li>
                                                                <li role="listitem" tabindex="0" class="fd-list__item">
                                                                    <div class="fd-list__content">
                                                                        <div class="fd-list__title">Notification Type</div>
                                                                    </div>
                                                                    <label class="fd-switch">
                                                                        <span class="fd-switch__control">
                                                                            <input checked class="fd-switch__input" type="checkbox" name="" value="" />
                                                                            <div class="fd-switch__slider">
                                                                                <div class="fd-switch__track">
                                                                                    <i
                                                                                        role="presentation"
                                                                                        class="fd-switch__icon fd-switch__icon--on sap-icon--accept"
                                                                                        ></i>
                                                                                        <span class="fd-switch__handle" role="presentation"></span>
                                                                                        <i
                                                                                            role="presentation"
                                                                                            class="fd-switch__icon fd-switch__icon--off sap-icon--less"
                                                                                            ></i>
                                                                                        </div>
                                                                                    </div>
                                                                                </span>
                                                                            </label>
                                                                            <button
                                                                                role="button"
                                                                                title="Click to navigate"
                                                                                class="fd-button fd-button--transparent"
                                                                                >
                                                                                <i
                                                                                    class="sap-icon--navigation-right-arrow"
                                                                                    role="presentation"
                                                                                    aria-hidden="true"
                                                                                    ></i>
                                                                                </button>
                                                                            </li>
                                                                            <li role="listitem" tabindex="0" class="fd-list__item">
                                                                                <div class="fd-list__content">
                                                                                    <div class="fd-list__title">Notification Type</div>
                                                                                </div>
                                                                                <label class="fd-switch">
                                                                                    <span class="fd-switch__control">
                                                                                        <input checked class="fd-switch__input" type="checkbox" name="" value="" />
                                                                                        <div class="fd-switch__slider">
                                                                                            <div class="fd-switch__track">
                                                                                                <i
                                                                                                    role="presentation"
                                                                                                    class="fd-switch__icon fd-switch__icon--on sap-icon--accept"
                                                                                                    ></i>
                                                                                                    <span class="fd-switch__handle" role="presentation"></span>
                                                                                                    <i
                                                                                                        role="presentation"
                                                                                                        class="fd-switch__icon fd-switch__icon--off sap-icon--less"
                                                                                                        ></i>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </span>
                                                                                        </label>
                                                                                        <button
                                                                                            role="button"
                                                                                            title="Click to navigate"
                                                                                            class="fd-button fd-button--transparent"
                                                                                            >
                                                                                            <i
                                                                                                class="sap-icon--navigation-right-arrow"
                                                                                                role="presentation"
                                                                                                aria-hidden="true"
                                                                                                ></i>
                                                                                            </button>
                                                                                        </li>
                                                                                        <li role="listitem" class="fd-list__group-header">
                                                                                            <div class="fd-list__title">Notification Group Title</div>
                                                                                        </li>
                                                                                        <li role="listitem" tabindex="0" class="fd-list__item">
                                                                                            <div class="fd-list__content">
                                                                                                <div class="fd-list__title">Notification Type</div>
                                                                                            </div>
                                                                                            <label class="fd-switch">
                                                                                                <span class="fd-switch__control">
                                                                                                    <input checked class="fd-switch__input" type="checkbox" name="" value="" />
                                                                                                    <div class="fd-switch__slider">
                                                                                                        <div class="fd-switch__track">
                                                                                                            <i
                                                                                                                role="presentation"
                                                                                                                class="fd-switch__icon fd-switch__icon--on sap-icon--accept"
                                                                                                                ></i>
                                                                                                                <span class="fd-switch__handle" role="presentation"></span>
                                                                                                                <i
                                                                                                                    role="presentation"
                                                                                                                    class="fd-switch__icon fd-switch__icon--off sap-icon--less"
                                                                                                                    ></i>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </span>
                                                                                                    </label>
                                                                                                    <button
                                                                                                        role="button"
                                                                                                        title="Click to navigate"
                                                                                                        class="fd-button fd-button--transparent"
                                                                                                        >
                                                                                                        <i
                                                                                                            class="sap-icon--navigation-right-arrow"
                                                                                                            role="presentation"
                                                                                                            aria-hidden="true"
                                                                                                            ></i>
                                                                                                        </button>
                                                                                                    </li>
                                                                                                    <li role="listitem" tabindex="0" class="fd-list__item">
                                                                                                        <div class="fd-list__content">
                                                                                                            <div class="fd-list__title">Notification Type</div>
                                                                                                        </div>
                                                                                                        <label class="fd-switch">
                                                                                                            <span class="fd-switch__control">
                                                                                                                <input checked class="fd-switch__input" type="checkbox" name="" value="" />
                                                                                                                <div class="fd-switch__slider">
                                                                                                                    <div class="fd-switch__track">
                                                                                                                        <i
                                                                                                                            role="presentation"
                                                                                                                            class="fd-switch__icon fd-switch__icon--on sap-icon--accept"
                                                                                                                            ></i>
                                                                                                                            <span class="fd-switch__handle" role="presentation"></span>
                                                                                                                            <i
                                                                                                                                role="presentation"
                                                                                                                                class="fd-switch__icon fd-switch__icon--off sap-icon--less"
                                                                                                                                ></i>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </span>
                                                                                                                </label>
                                                                                                                <button
                                                                                                                    role="button"
                                                                                                                    title="Click to navigate"
                                                                                                                    class="fd-button fd-button--transparent"
                                                                                                                    >
                                                                                                                    <i
                                                                                                                        class="sap-icon--navigation-right-arrow"
                                                                                                                        role="presentation"
                                                                                                                        aria-hidden="true"
                                                                                                                        ></i>
                                                                                                                    </button>
                                                                                                                </li>
                                                                                                                <li role="listitem" tabindex="0" class="fd-list__item">
                                                                                                                    <div class="fd-list__content">
                                                                                                                        <div class="fd-list__title">Notification Type</div>
                                                                                                                    </div>
                                                                                                                    <label class="fd-switch">
                                                                                                                        <span class="fd-switch__control">
                                                                                                                            <input checked class="fd-switch__input" type="checkbox" name="" value="" />
                                                                                                                            <div class="fd-switch__slider">
                                                                                                                                <div class="fd-switch__track">
                                                                                                                                    <i
                                                                                                                                        role="presentation"
                                                                                                                                        class="fd-switch__icon fd-switch__icon--on sap-icon--accept"
                                                                                                                                        ></i>
                                                                                                                                        <span class="fd-switch__handle" role="presentation"></span>
                                                                                                                                        <i
                                                                                                                                            role="presentation"
                                                                                                                                            class="fd-switch__icon fd-switch__icon--off sap-icon--less"
                                                                                                                                            ></i>
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                </span>
                                                                                                                            </label>
                                                                                                                            <button
                                                                                                                                role="button"
                                                                                                                                title="Click to navigate"
                                                                                                                                class="fd-button fd-button--transparent"
                                                                                                                                >
                                                                                                                                <i
                                                                                                                                    class="sap-icon--navigation-right-arrow"
                                                                                                                                    role="presentation"
                                                                                                                                    aria-hidden="true"
                                                                                                                                    ></i>
                                                                                                                                </button>
                                                                                                                            </li>
                                                                                                                        </ul>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <footer class="fd-dialog__footer fd-bar fd-bar--footer fd-settings__dialog-footer">
                                                                                                                <div class="fd-bar__right">
                                                                                                                    <div class="fd-bar__element">
                                                                                                                        <button class="fd-dialog__decisive-button fd-button fd-button--transparent">Close</button>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </footer>
                                                                                                        </section>
```

### Notifications Details (L-XL-XXL)

```html
<section class="fd-dialog-docs-static fd-dialog fd-settings fd-dialog--active">
    <div
        class="fd-dialog__content fd-settings__dialog-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title-1"

        >
        <div class="fd-dialog__body fd-settings__dialog-body">
            <div class="fd-settings__container">
                <div class="fd-settings__list-area">
                    <div class="fd-bar fd-bar--header">
                        <div class="fd-bar__left">
                            <div class="fd-bar__element">
                                <h1 class="fd-title fd-title--h5" aria-label="text">Settings</h1>
                            </div>
                        </div>
                    </div>
                    <div class="fd-settings__list-container">
                        <ul
                            class="fd-list fd-list--navigation fd-list--navigation-indication fd-list--no-border fd-settings__list"
                            role="list"
                            >
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--user-settings"></i>
                                    <div class="fd-list__title">User Account</div>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--palette"></i>
                                    <div class="fd-list__title">Appearance</div>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <div class="fd-list__title">Language & Region</div>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--iphone"></i>
                                    <div class="fd-list__title">SAP Mobile Start Application</div>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link is-selected">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--bell"></i>
                                    <div class="fd-list__title">Notifications</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="fd-settings__detail-area">
                    <div class="fd-bar fd-bar--header fd-settings__header">
                        <div class="fd-bar__left">
                            <div class="fd-bar__element">
                                <button aria-label="button" class="fd-button fd-button--transparent">
                                    <i class="sap-icon--navigation-left-arrow"></i>
                                </button>
                            </div>
                            <div class="fd-bar__element">
                                <h2 class="fd-title fd-title--h5" aria-label="text">Notifications Type</h2>
                            </div>
                        </div>
                    </div>

                    <div class="fd-settings__content fd-settings__content--no-background">
                        <p class="fd-text">Description Text</p>

                        <h3 class="fd-title fd-title--h5">Notification Preferences</h3>

                        <ul class="fd-list fd-list--byline fd-list--notification" role="list">
                            <li role="listitem" tabindex="0" class="fd-list__item">
                                <div class="fd-list__content">
                                    <div class="fd-list__title">Notifications Panel</div>
                                    <div class="fd-list__byline">
                                        Receive notifications through the central panel in the web application.
                                    </div>
                                </div>
                                <label class="fd-switch">
                                    <span class="fd-switch__control">
                                        <input checked class="fd-switch__input" type="checkbox" name="" value="" />
                                        <div class="fd-switch__slider">
                                            <div class="fd-switch__track">
                                                <i
                                                    role="presentation"
                                                    class="fd-switch__icon fd-switch__icon--on sap-icon--accept"
                                                    ></i>
                                                    <span class="fd-switch__handle" role="presentation"></span>
                                                    <i
                                                        role="presentation"
                                                        class="fd-switch__icon fd-switch__icon--off sap-icon--less"
                                                        ></i>
                                                    </div>
                                                </div>
                                            </span>
                                        </label>
                                    </li>
                                    <li role="listitem" tabindex="0" class="fd-list__item">
                                        <div class="fd-list__content">
                                            <div class="fd-list__title">Banner Alerts</div>
                                            <div class="fd-list__byline">
                                                In addition, receive notifications instantly as a fly-in banner while working
                                            </div>
                                        </div>
                                        <label class="fd-switch">
                                            <span class="fd-switch__control">
                                                <input checked class="fd-switch__input" type="checkbox" name="" value="" />
                                                <div class="fd-switch__slider">
                                                    <div class="fd-switch__track">
                                                        <i
                                                            role="presentation"
                                                            class="fd-switch__icon fd-switch__icon--on sap-icon--accept"
                                                            ></i>
                                                            <span class="fd-switch__handle" role="presentation"></span>
                                                            <i
                                                                role="presentation"
                                                                class="fd-switch__icon fd-switch__icon--off sap-icon--less"
                                                                ></i>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </label>
                                            </li>
                                            <li role="listitem" tabindex="0" class="fd-list__item">
                                                <div class="fd-list__content">
                                                    <div class="fd-list__title">
                                                        Push Notifications Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                        Eveniet doloremque modi deserunt ipsam
                                                    </div>
                                                    <div class="fd-list__byline">
                                                        Receive notifications instantly on your mobile device cupiditate neque sed fuga
                                                        nemo blanditiis vel aliquam possimus inventore. Iure molestias culpa minima
                                                        voluptates, dolorum enim.
                                                    </div>
                                                </div>
                                                <label class="fd-switch">
                                                    <span class="fd-switch__control">
                                                        <input checked class="fd-switch__input" type="checkbox" name="" value="" />
                                                        <div class="fd-switch__slider">
                                                            <div class="fd-switch__track">
                                                                <i
                                                                    role="presentation"
                                                                    class="fd-switch__icon fd-switch__icon--on sap-icon--accept"
                                                                    ></i>
                                                                    <span class="fd-switch__handle" role="presentation"></span>
                                                                    <i
                                                                        role="presentation"
                                                                        class="fd-switch__icon fd-switch__icon--off sap-icon--less"
                                                                        ></i>
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </label>
                                                    </li>
                                                    <li role="listitem" tabindex="0" class="fd-list__item">
                                                        <div class="fd-list__content">
                                                            <div class="fd-list__title">Email</div>
                                                            <div class="fd-list__byline">
                                                                Receive notifications by email at your registered email address
                                                            </div>
                                                        </div>
                                                        <label class="fd-switch">
                                                            <span class="fd-switch__control">
                                                                <input checked class="fd-switch__input" type="checkbox" name="" value="" />
                                                                <div class="fd-switch__slider">
                                                                    <div class="fd-switch__track">
                                                                        <i
                                                                            role="presentation"
                                                                            class="fd-switch__icon fd-switch__icon--on sap-icon--accept"
                                                                            ></i>
                                                                            <span class="fd-switch__handle" role="presentation"></span>
                                                                            <i
                                                                                role="presentation"
                                                                                class="fd-switch__icon fd-switch__icon--off sap-icon--less"
                                                                                ></i>
                                                                            </div>
                                                                        </div>
                                                                    </span>
                                                                </label>
                                                            </li>
                                                            <li role="listitem" tabindex="0" class="fd-list__item">
                                                                <div class="fd-list__content">
                                                                    <div class="fd-list__title">Frequency</div>
                                                                    <div class="fd-list__byline">Choose the frequency of receiving a notification</div>
                                                                </div>
                                                                <div class="fd-popover">
                                                                    <div class="fd-popover__control" aria-expanded="false" aria-haspopup="true">
                                                                        <div class="fd-select">
                                                                            <div
                                                                                role="combobox"
                                                                                aria-roledescription="Contains item list for selection"
                                                                                aria-haspopup="listbox"
                                                                                aria-expanded="false"
                                                                                class="fd-select__control"
                                                                                value="Immediate"
                                                                                tabindex="0"
                                                                                >
                                                                                <span class="fd-select__text-content">Immediate</span>

                                                                                <span
                                                                                    role="button"
                                                                                    tabindex="-1"
                                                                                    aria-label="Selection options"
                                                                                    title="Selection options"
                                                                                    class="fd-button fd-button--transparent fd-select__button"
                                                                                    >
                                                                                    <i
                                                                                        class="sap-icon--slim-arrow-down"
                                                                                        role="presentation"
                                                                                        aria-hidden="true"
                                                                                        ></i>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <footer class="fd-dialog__footer fd-bar fd-bar--footer fd-settings__dialog-footer">
                                                    <div class="fd-bar__right">
                                                        <div class="fd-bar__element">
                                                            <button class="fd-dialog__decisive-button fd-button fd-button--transparent">Close</button>
                                                        </div>
                                                    </div>
                                                </footer>
                                            </section>
```

### L-XL-XXL (with Tabs and overflowing content)

For large screen sizes, the Settings Dialog uses a fixed-width layout with scrollable content:
<ul>
  <li><b>L (1024px - 1439px)</b></li>
  <li><b>XL (1440px - 1919px)</b></li>
  <li><b>XXL (1920px and above)</b></li>
</ul>
<b>Dimensions:</b>
<ul>
  <li><b>Width:</b> Fixed at 960px</li>
  <li><b>Height:</b> 680px or 88% of screen height (whichever is smaller)</li>
</ul>
If the content height exceeds the available space, users can scroll through the content area.

```html
<section class="fd-dialog-docs-static fd-dialog fd-settings fd-dialog--active">
    <div
        class="fd-dialog__content fd-settings__dialog-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title-1"

        >
        <div class="fd-dialog__body fd-settings__dialog-body">
            <div class="fd-settings__container">
                <div class="fd-settings__list-area">
                    <div class="fd-bar fd-bar--header fd-bar--header-with-subheader">
                        <div class="fd-bar__left">
                            <div class="fd-bar__element">
                                <h1 class="fd-title fd-title--h5" aria-label="text">Settings</h1>
                            </div>
                        </div>
                    </div>
                    <div class="fd-bar fd-bar--subheader">
                        <div class="fd-bar__middle">
                            <div class="fd-bar__element fd-bar__element--full-width">
                                <input
                                class="fd-input fd-input-group__input"
                                type="text"
                                placeholder="Search"
                                aria-label="input"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="fd-settings__list-container">
                        <ul
                            class="fd-list fd-list--navigation fd-list--navigation-indication fd-list--no-border fd-settings__list"
                            role="list"
                            >
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                        </ul>

                        <ul
                            class="fd-list fd-list--navigation fd-list--navigation-indication fd-list--no-border fd-settings__list fd-settings__list--footer"
                            role="list"
                            >
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Fixed Settings Item</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="fd-settings__detail-area">
                    <div class="fd-bar fd-bar--header fd-settings__header">
                        <div class="fd-bar__left">
                            <div class="fd-bar__element">
                                <h2 class="fd-title fd-title--h5" aria-label="text">Settings Item</h2>
                            </div>
                        </div>
                    </div>

                    <div class="fd-icon-tab-bar fd-icon-tab-bar--sm fd-settings__tab-bar">
                        <ul role="tablist" class="fd-icon-tab-bar__header">
                            <li role="presentation" class="fd-icon-tab-bar__item">
                                <a
                                    role="tab"
                                    class="fd-icon-tab-bar__tab"
                                    aria-selected="true"
                                    href="#section1"
                                    id="tab1"
                                    >
                                    <span class="fd-icon-tab-bar__tag">Tab Text</span>
                                </a>
                            </li>
                            <li role="presentation" class="fd-icon-tab-bar__item">
                                <a role="tab" class="fd-icon-tab-bar__tab" href="#section2" id="tab2">
                                    <span class="fd-icon-tab-bar__tag">Tab Text</span>
                                </a>
                            </li>
                        </ul>
                        <section
                            role="tabpanel"
                            class="fd-icon-tab-bar__panel fd-settings__content fd-settings__content--no-background"
                            id="section1"
                            aria-labelledby="tab1"
                            >
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                            consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                            dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                            consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Sed ut
                            perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                            vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                            aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
                            reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
                            dolorem eum fugiat quo voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste natus
                            error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                            ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                            modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                            minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                            aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
                            velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
                            nulla pariatur? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                            quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                            consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                            dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                            consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Sed ut
                            perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                            vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                            aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
                            reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
                            dolorem eum fugiat quo voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste natus
                            error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                            ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                            modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                            minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                            aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
                            velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
                            nulla pariatur?
                        </section>
                        <section
                            role="tabpanel"
                            class="fd-icon-tab-bar__panel fd-settings__content"
                            id="section2"
                            aria-labelledby="tab2"
                            hidden
                            >
                            Section
                        </section>
                    </div>
                </div>
            </div>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer fd-settings__dialog-footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--emphasized">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--transparent">Close</button>
                </div>
            </div>
        </footer>
    </section>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/settings/settings.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
