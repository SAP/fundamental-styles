---
component: fd-popover
title: Components/User Menu
category: Components
selector: fd-popover
cssFile: popover.css
sourcePath: packages/styles/stories/Components/user-menu/user-menu.stories.js
tags: ["uxc"]
dependencies: ["avatar","badge","bar","button","icon","input","input-group","list","menu","message-strip","navigation-list","notification","panel","popover","shellbar","tabs","title","toolbar","user-menu"]
relatedComponents: ["avatar","badge","bar","button","icon","input","input-group","list","menu","message-strip","navigation-list","notification","panel","popover","shellbar","tabs","title","toolbar","user-menu"]
stability: stable
generatedAt: 2026-06-08T17:49:01.803Z
---

# Components/User Menu

The User Menu is an integral part of the Shell Bar, accessible by clicking the avatar located at its far-right end. It provides user-specific options and remains available across all screens. In addition to standard options, the User Menu can include product-specific functionality.
    <br>
    The User Menu can display the following:
<ul>
    <li>Current user information</li>
    <li>Switch between accounts</li>
    <li>User Menu items</li>
</ul>

### When to use
<ul>
    <li>To present user-specific information, settings, and actions.</li>
    <li>To enable account switching.</li>
    <li>To display product-related and legal information.</li>
    <li>To facilitate Sign In or Sign Out actions.</li>
</ul>

### When not to use
<ul>
    <li>Navigation: Avoid including navigational elements.</li>
    <li>Home Page Customization: Exclude items related to customizing the home page.</li>
    <li>Inactive Items: Hide inactive items instead of displaying them as disabled.</li>
    <li>Content Overload: Keep the menu concise by limiting links to essential items only.</li>
    <li>Dynamic Content: Avoid altering the menu content within the product.</li>
</ul>
    
### Anatomy
The User Menu popover is composed of the following components:

<b>Custom Popover Header</b><br>
Represents the current user and includes:

<ul>
    <li>Popover: Contains the entire User Menu content.</li>
    <li>Avatar: A key visual element displaying the user's profile picture. If no profile picture is available, it shows the user's initials. If the user is not signed in, an icon is displayed.</li>
    <li>Title: A required UI element showing the user's First and Last names. To truncate long titles use the <code>.fd-user-menu\\_\\_user-name--truncate</code> modifier class.</li>
    <li>Subtitle 1 (subline): An optional secondary identifier, such as user ID or email.</li>
    <li>Subtitle 2 (subline): An optional identifier, such as role, position, organization, or unit.</li>
    <li>Subtitle 3 (subline): An optional identifier, such as role, position, organization, or unit. To truncate long subtitles use the <code>.fd-user-menu\\_\\_subline--truncate</code> modifier class.</li>
    <li>Manage Account Button: Links to account settings.</li>
</ul>

<b>Content Container</b><br>
Holds user account and menu items:

<ul>
  <li>
    Panel
    <ul>
      <li>Includes a header with an Add Account button and a list of accounts.</li>
      <li>The Other Accounts section (optional) allows users to sign in with or switch between accounts.</li>
    </ul>
  </li>
  <li>
    List
    <ul>
      <li>Displays List Items for user accounts.</li>
      <li>Hosts mandatory menu items (e.g., Settings, Legal Information, About, Sign In/Out) and custom items.</li>
    </ul>
  </li>
</ul>

## Dependencies

This component depends on the following CSS files:

- `avatar.css`
- `badge.css`
- `bar.css`
- `button.css`
- `icon.css`
- `input.css`
- `input-group.css`
- `list.css`
- `menu.css`
- `message-strip.css`
- `navigation-list.css`
- `notification.css`
- `panel.css`
- `popover.css`
- `shellbar.css`
- `tabs.css`
- `title.css`
- `toolbar.css`
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
<link href="node_modules/fundamental-styles/dist/badge.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/bar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/input.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/input-group.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/list.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/menu.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/message-strip.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/navigation-list.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/notification.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/panel.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/popover.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/shellbar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/tabs.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/title.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/toolbar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/user-menu.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-popover fd-popover--right fd-user-menu">
    <div class="fd-popover__body fd-popover__body--right" aria-hidden="false" id="userMenu1">
        <div class="fd-popover__wrapper fd-user-menu__popover-wrapper">
            <div class="fd-user-menu__body">
                <div class="fd-user-menu__header">
                    <span
                        class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--thumbnail"
                        aria-label="Avatar"

                        >
                        <i
                            class="fd-avatar__zoom-icon sap-icon--edit"
                            aria-label="Edit"
                            role="presentation"
                            aria-hidden="true"
                            ></i>
                        </span>
                        <div class="fd-user-menu__header-container">
                            <div class="fd-user-menu__user-name">Lisa Miller</div>
                            <div class="fd-user-menu__subline">lisa.miller@test.com</div>
                            <div class="fd-user-menu__subline">User Experience Designer</div>
                            <div class="fd-user-menu__subline">Primary Employment</div>
                        </div>
                        <div class="fd-user-menu__header-content-area">
                            Header Content Area
                        </div>
                    </div>
                    <div class="fd-user-menu__content-container">
                        <nav class="fd-menu fd-menu--icons fd-user-menu__menu">
                            <ul class="fd-menu__list fd-user-menu__menu-list" role="menu">
                                <li class="fd-menu__item" role="presentation">
                                    <a class="fd-menu__link" href="#" role="menuitem">
                                        <span class="fd-menu__addon-before">
                                            <i class="sap-icon--action-settings" role="presentation"></i>
                                        </span>
                                        <span class="fd-menu__title">Settings</span>
                                    </a>
                                </li>

                                <li class="fd-menu__item" role="presentation">
                                    <span
                                        class="fd-menu__link has-child is-expanded"
                                        aria-controls="EX100M2A"
                                        aria-expanded="true"
                                        aria-haspopup="true"
                                        role="menuitem"
                                        >
                                        <span class="fd-menu__addon-before">
                                            <i class="sap-icon--card" role="presentation"></i>
                                        </span>
                                        <div class="fd-menu__content">
                                            <span class="fd-menu__title">Menu Item</span>
                                            <span class="fd-menu__subtitle">Sub-menu List Item</span>
                                        </div>
                                        <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                                    </span>

                                    <ul
                                        class="fd-menu__sublist fd-menu__sublist--icons"
                                        id="EX100M2A"
                                        aria-hidden="false"
                                        role="menu"
                                        >
                                        <li class="fd-menu__item" role="presentation">
                                            <a class="fd-menu__link" href="#" role="menuitem">
                                                <span class="fd-menu__addon-before"
                                                    ><i class="sap-icon--card" role="presentation"></i
                                                    ></span>
                                                    <span class="fd-menu__title">Sub-menu Item</span>
                                                </a>
                                            </li>
                                            <li class="fd-menu__item" role="presentation">
                                                <a class="fd-menu__link" href="#" role="menuitem">
                                                    <span class="fd-menu__title">Sub-menu Item</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="fd-menu__item" role="presentation">
                                        <a class="fd-menu__link" href="#" role="menuitem">
                                            <span class="fd-menu__addon-before">
                                                <i class="sap-icon--official-service" role="presentation"></i>
                                            </span>
                                            <span class="fd-menu__title">Legal Information</span>
                                        </a>
                                    </li>

                                    <li class="fd-menu__item" role="presentation">
                                        <a class="fd-menu__link" href="#" role="menuitem">
                                            <span class="fd-menu__addon-before">
                                                <i class="sap-icon--message-information" role="presentation"></i>
                                            </span>
                                            <span class="fd-menu__title">About</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="fd-bar fd-bar--footer">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button aria-label="button" class="fd-button fd-button--transparent">
                                <i class="sap-icon--log"></i>
                                <span class="fd-button__text"> Sign Out</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="fd-popover fd-popover--right fd-user-menu">
            <div class="fd-popover__body fd-popover__body--right" aria-hidden="false" id="userMenu1">
                <div class="fd-popover__wrapper fd-user-menu__popover-wrapper">
                    <div class="fd-user-menu__body">
                        <div class="fd-user-menu__header">
                            <span
                                class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--thumbnail"
                                aria-label="Avatar"

                                >
                                <i
                                    class="fd-avatar__zoom-icon sap-icon--edit"
                                    aria-label="Edit"
                                    role="presentation"
                                    aria-hidden="true"
                                    ></i>
                                </span>
                                <div class="fd-user-menu__header-container">
                                    <div class="fd-user-menu__user-name">Lisa Miller</div>
                                    <div class="fd-user-menu__subline">lisa.miller@test.com</div>
                                    <div class="fd-user-menu__subline">User Experience Designer</div>
                                    <div class="fd-user-menu__subline">Primary Employment</div>
                                </div>
                                <div class="fd-user-menu__header-content-area">
                                    <div
                                        role="note"
                                        aria-labelledby="message-strip-hidden-text-2 message-strip-text-2"
                                        class="fd-message-strip fd-message-strip--information"
                                        >
                                        <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-2"
                                            >Information Bar Closable</span
                                            >

                                            <div class="fd-message-strip__icon-container" aria-hidden="true">
                                                <span
                                                    class="sap-icon sap-icon--message-information"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    ></span>
                                                </div>

                                                <p class="fd-message-strip__text" id="message-strip-text-2">
                                                    This is an information massage.
                                                </p>
                                            </div>
                                        </div>
                                        <button aria-label="Manage Account" class="fd-button">
                                            <i class="sap-icon--user-settings"></i>
                                            <span class="fd-button__text">Manage Account</span>
                                        </button>
                                    </div>
                                    <div class="fd-user-menu__content-container">
                                        <div class="fd-panel fd-user-menu__panel" aria-labelledby="__panel-title-8" role="form">
                                            <div class="fd-panel__header">
                                                <div class="fd-panel__expand">
                                                    <button
                                                        class="fd-button fd-button--transparent fd-panel__button"
                                                        aria-expanded="true"
                                                        aria-haspopup="true"
                                                        aria-label="expand/collapse panel"
                                                        aria-controls="__panel-8"
                                                        >
                                                        <i class="sap-icon--slim-arrow-down"></i>
                                                    </button>
                                                </div>
                                                <h4 class="fd-panel__title" id="__panel-title-8">Accounts (3)</h4>
                                                <div class="fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                                                    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"> </span>
                                                    <button
                                                        class="fd-button fd-button--transparent"
                                                        aria-label="Add Account"
                                                        title="Add Account"
                                                        >
                                                        <i class="sap-icon--user-edit"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div
                                                role="region"
                                                aria-labelledby="__panel-title-8"
                                                class="fd-panel__content fd-panel__content--no-padding"
                                                aria-hidden="false"
                                                id="__panel-8"
                                                >
                                                <ul class="fd-list fd-list--subline" role="list">
                                                    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
                                                        <span
                                                            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--thumbnail"

                                                            role="img"
                                                            aria-label="Jane Doe"
                                                            ></span>
                                                            <div class="fd-list__content">
                                                                <div class="fd-list__title">Lisa Miller Lorem</div>
                                                                <div class="fd-list__subline">lisa.miller@test.com</div>
                                                                <div class="fd-list__subline">Delivery Manager</div>
                                                            </div>
                                                            <span class="fd-list__active-indicator sap-icon--sys-enter-2"></span>
                                                        </li>
                                                        <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
                                                            <span
                                                                class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--thumbnail"

                                                                role="img"
                                                                aria-label="John Doe"
                                                                ></span>
                                                                <div class="fd-list__content">
                                                                    <div class="fd-list__title">John Doe</div>
                                                                    <div class="fd-list__subline">john.doe@test.com</div>
                                                                    <div class="fd-list__subline">Project Manager</div>
                                                                </div>
                                                            </li>
                                                            <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
                                                                <span
                                                                    class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--accent-color-10"
                                                                    aria-role="img"
                                                                    aria-label="Jane Doe"
                                                                    >JD</span
                                                                    >
                                                                    <div class="fd-list__content">
                                                                        <div class="fd-list__title">Jane Doe</div>
                                                                        <div class="fd-list__subline">jane.doe@test.com</div>
                                                                        <div class="fd-list__subline">User Experience Designer</div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <nav class="fd-menu fd-menu--icons fd-user-menu__menu">
                                                        <ul class="fd-menu__list fd-user-menu__menu-list" role="menu">
                                                            <li class="fd-menu__item" role="presentation">
                                                                <a class="fd-menu__link" href="#" role="menuitem">
                                                                    <span class="fd-menu__addon-before">
                                                                        <i class="sap-icon--action-settings" role="presentation"></i>
                                                                    </span>
                                                                    <span class="fd-menu__title">Settings</span>
                                                                </a>
                                                            </li>

                                                            <li class="fd-menu__item" role="presentation">
                                                                <span
                                                                    class="fd-menu__link has-child is-expanded"
                                                                    aria-controls="EX100M2B"
                                                                    aria-expanded="true"
                                                                    aria-haspopup="true"
                                                                    role="menuitem"
                                                                    >
                                                                    <span class="fd-menu__addon-before">
                                                                        <i class="sap-icon--card" role="presentation"></i>
                                                                    </span>
                                                                    <div class="fd-menu__content">
                                                                        <span class="fd-menu__title"
                                                                            >Menu Item Lorem ipsum dolor sit amet consectetur, adipisicing
                                                                            elit.</span
                                                                            >
                                                                            <span class="fd-menu__subtitle"
                                                                                >Sub-menu List Item Consectetur reprehenderit, cumque iusto molestiae
                                                                                doloribus assumenda omnis eveniet</span
                                                                                >
                                                                            </div>

                                                                            <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                                                                        </span>

                                                                        <ul class="fd-menu__sublist" id="EX100M2B" aria-hidden="false" role="menu">
                                                                            <li class="fd-menu__item" role="presentation">
                                                                                <a class="fd-menu__link" href="#" role="menuitem">
                                                                                    <div class="fd-menu__content">
                                                                                        <span class="fd-menu__title"
                                                                                            >Sub-menu Item 1 Consectetur reprehenderit, cumque iusto
                                                                                            molestiae doloribus assumenda omnis eveniet</span
                                                                                            >
                                                                                        </div>
                                                                                        <span class="fd-menu__addon-after fd-menu__addon-after--active"
                                                                                            ><i class="sap-icon--accept" role="presentation"></i
                                                                                            ></span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li class="fd-menu__item" role="presentation">
                                                                                        <a class="fd-menu__link" href="#" role="menuitem">
                                                                                            <span class="fd-menu__title fd-menu__title--truncate"
                                                                                                >Sub-menu Item 2 Consectetur reprehenderit, cumque iusto molestiae
                                                                                                doloribus assumenda omnis eveniet</span
                                                                                                >
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>

                                                                                <li class="fd-menu__item" role="presentation">
                                                                                    <a class="fd-menu__link" href="#" role="menuitem">
                                                                                        <span class="fd-menu__addon-before">
                                                                                            <i class="sap-icon--official-service" role="presentation"></i>
                                                                                        </span>
                                                                                        <div class="fd-menu__content">
                                                                                            <span class="fd-menu__title fd-menu__title--truncate"
                                                                                                >Menu Item Lorem ipsum dolor sit amet consectetur, adipisicing
                                                                                                elit.</span
                                                                                                >
                                                                                                <span class="fd-menu__subtitle fd-menu__subtitle--truncate"
                                                                                                    >Sub-menu List Item Consectetur reprehenderit, cumque iusto molestiae
                                                                                                    doloribus assumenda omnis eveniet</span
                                                                                                    >
                                                                                                </div>
                                                                                            </a>
                                                                                        </li>

                                                                                        <li class="fd-menu__item" role="presentation">
                                                                                            <a class="fd-menu__link" href="#" role="menuitem">
                                                                                                <span class="fd-menu__addon-before">
                                                                                                    <i class="sap-icon--message-information" role="presentation"></i>
                                                                                                </span>
                                                                                                <span class="fd-menu__title">About</span>
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </nav>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="fd-bar fd-bar--footer">
                                                                        <div class="fd-bar__right">
                                                                            <div class="fd-bar__element">
                                                                                <button aria-label="button" class="fd-button fd-button--transparent">
                                                                                    <i class="sap-icon--log"></i>
                                                                                    <span class="fd-button__text"> Sign Out</span>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="fd-popover fd-popover--right fd-user-menu">
                                                                        <div class="fd-popover__body fd-popover__body--right" aria-hidden="false" id="userMenu1">
                                                                            <div class="fd-popover__wrapper fd-user-menu__popover-wrapper">
                                                                                <div class="fd-user-menu__body">
                                                                                    <div class="fd-user-menu__header">
                                                                                        <span
                                                                                            class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--thumbnail"
                                                                                            aria-label="Avatar"

                                                                                            >
                                                                                            <i
                                                                                                class="fd-avatar__zoom-icon sap-icon--edit"
                                                                                                aria-label="Edit"
                                                                                                role="presentation"
                                                                                                aria-hidden="true"
                                                                                                ></i>
                                                                                            </span>
                                                                                            <div class="fd-user-menu__header-container">
                                                                                                <div class="fd-user-menu__user-name">
                                                                                                    Lisa Miller Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa consequuntur
                                                                                                    cum voluptate iure tenetu!
                                                                                                </div>
                                                                                                <div class="fd-user-menu__subline">
                                                                                                    lisa.miller@test.com Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
                                                                                                    quod accusamus quis magnam, reprehenderit anim.
                                                                                                </div>
                                                                                                <div class="fd-user-menu__subline">
                                                                                                    A very long subline 2 that can be displayed by wrapping behaviour in the subtitle like
                                                                                                    this.
                                                                                                </div>
                                                                                                <div class="fd-user-menu__subline fd-user-menu__subline--truncate">
                                                                                                    A very long subline 3 that can be truncated with ellipsis
                                                                                                </div>
                                                                                            </div>
                                                                                            <button aria-label="Manage Account" class="fd-button">
                                                                                                <i class="sap-icon--user-settings"></i>
                                                                                                <span class="fd-button__text">Manage Account</span>
                                                                                            </button>
                                                                                        </div>
                                                                                        <div class="fd-user-menu__content-container">
                                                                                            <div class="fd-panel fd-user-menu__panel" aria-labelledby="__panel-title-8" role="form">
                                                                                                <div class="fd-panel__header">
                                                                                                    <div class="fd-panel__expand">
                                                                                                        <button
                                                                                                            class="fd-button fd-button--transparent fd-panel__button"
                                                                                                            aria-expanded="true"
                                                                                                            aria-haspopup="true"
                                                                                                            aria-label="expand/collapse panel"
                                                                                                            aria-controls="__panel-8"
                                                                                                            >
                                                                                                            <i class="sap-icon--slim-arrow-down"></i>
                                                                                                        </button>
                                                                                                    </div>
                                                                                                    <h4 class="fd-panel__title" id="__panel-title-8">Accounts (3)</h4>
                                                                                                    <div class="fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                                                                                                        <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"> </span>
                                                                                                        <button
                                                                                                            class="fd-button fd-button--transparent"
                                                                                                            aria-label="Add Account"
                                                                                                            title="Add Account"
                                                                                                            >
                                                                                                            <i class="sap-icon--user-edit"></i>
                                                                                                        </button>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    role="region"
                                                                                                    aria-labelledby="__panel-title-8"
                                                                                                    class="fd-panel__content fd-panel__content--no-padding"
                                                                                                    aria-hidden="false"
                                                                                                    id="__panel-8"
                                                                                                    >
                                                                                                    <ul class="fd-list fd-list--subline" role="list">
                                                                                                        <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
                                                                                                            <span
                                                                                                                class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--thumbnail"

                                                                                                                role="img"
                                                                                                                aria-label="Jane Doe"
                                                                                                                ></span>
                                                                                                                <div class="fd-list__content">
                                                                                                                    <div class="fd-list__title">
                                                                                                                        Lisa Miller Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                                                                                        Autem minima ex distinctio dolores vitae!
                                                                                                                    </div>
                                                                                                                    <div class="fd-list__subline">
                                                                                                                        lisa.miller@test.com Lorem, ipsum dolor sit amet consectetur adipisicing
                                                                                                                        elit.
                                                                                                                    </div>
                                                                                                                    <div class="fd-list__subline">
                                                                                                                        Delivery Manager Lorem ipsum dolor sit amet consectetur adipisicing
                                                                                                                        elit.
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <span class="fd-list__active-indicator sap-icon--sys-enter-2"></span>
                                                                                                            </li>
                                                                                                            <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
                                                                                                                <span
                                                                                                                    class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--thumbnail"

                                                                                                                    role="img"
                                                                                                                    aria-label="John Doe"
                                                                                                                    ></span>
                                                                                                                    <div class="fd-list__content">
                                                                                                                        <div class="fd-list__title fd-list__title--truncate">
                                                                                                                            John Doe Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
                                                                                                                            minima ex distinctio dolores vitae!
                                                                                                                        </div>
                                                                                                                        <div class="fd-list__subline fd-list__subline--truncate">
                                                                                                                            john.doe@test.com ipsum dolor sit amet consectetur adipisicing elit.
                                                                                                                            Autem minima ex distinctio dolores vitae!
                                                                                                                        </div>
                                                                                                                        <div class="fd-list__subline fd-list__subline--truncate">
                                                                                                                            Project Manager ipsum dolor sit amet consectetur adipisicing elit. Autem
                                                                                                                            minima ex distinctio dolores vitae!
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </li>
                                                                                                                <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
                                                                                                                    <span
                                                                                                                        class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--accent-color-10"
                                                                                                                        aria-role="img"
                                                                                                                        aria-label="Jane Doe"
                                                                                                                        >JD</span
                                                                                                                        >
                                                                                                                        <div class="fd-list__content">
                                                                                                                            <div class="fd-list__title">Jane Doe</div>
                                                                                                                            <div class="fd-list__subline">jane.doe@test.com</div>
                                                                                                                            <div class="fd-list__subline">User Experience Designer</div>
                                                                                                                        </div>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <nav class="fd-menu fd-menu--icons fd-user-menu__menu">
                                                                                                            <ul class="fd-menu__list fd-user-menu__menu-list" role="menu">
                                                                                                                <li class="fd-menu__item" role="presentation">
                                                                                                                    <a class="fd-menu__link" href="#" role="menuitem">
                                                                                                                        <span class="fd-menu__addon-before">
                                                                                                                            <i class="sap-icon--action-settings" role="presentation"></i>
                                                                                                                        </span>
                                                                                                                        <span class="fd-menu__title">Settings</span>
                                                                                                                    </a>
                                                                                                                </li>

                                                                                                                <li class="fd-menu__item" role="presentation">
                                                                                                                    <span
                                                                                                                        class="fd-menu__link has-child"
                                                                                                                        aria-expanded="false"
                                                                                                                        aria-haspopup="true"
                                                                                                                        role="menuitem"
                                                                                                                        >
                                                                                                                        <span class="fd-menu__addon-before">
                                                                                                                            <i class="sap-icon--card" role="presentation"></i>
                                                                                                                        </span>
                                                                                                                        <span class="fd-menu__title">Menu Item</span>
                                                                                                                        <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                                                                                                                    </span>
                                                                                                                </li>

                                                                                                                <li class="fd-menu__item" role="presentation">
                                                                                                                    <a class="fd-menu__link" href="#" role="menuitem">
                                                                                                                        <span class="fd-menu__addon-before">
                                                                                                                            <i class="sap-icon--official-service" role="presentation"></i>
                                                                                                                        </span>
                                                                                                                        <span class="fd-menu__title">Legal Information</span>
                                                                                                                    </a>
                                                                                                                </li>

                                                                                                                <li class="fd-menu__item" role="presentation">
                                                                                                                    <a class="fd-menu__link" href="#" role="menuitem">
                                                                                                                        <span class="fd-menu__addon-before">
                                                                                                                            <i class="sap-icon--message-information" role="presentation"></i>
                                                                                                                        </span>
                                                                                                                        <span class="fd-menu__title">About</span>
                                                                                                                    </a>
                                                                                                                </li>
                                                                                                            </ul>
                                                                                                        </nav>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="fd-bar fd-bar--footer">
                                                                                                <div class="fd-bar__right">
                                                                                                    <div class="fd-bar__element">
                                                                                                        <button aria-label="button" class="fd-button fd-button--transparent">
                                                                                                            <i class="sap-icon--log"></i>
                                                                                                            <span class="fd-button__text"> Sign Out</span>
                                                                                                        </button>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-popover--right` | Style variant |

## States

| Class | Description |
|-------|-------------|
| `is-expanded` | Expanded state |

## BEM Elements

This component uses the following BEM elements:

- `fd-popover__body`
- `fd-popover__body--right`
- `fd-popover__wrapper`

## Related Components

This component works with or depends on:

- `avatar`
- `badge`
- `bar`
- `button`
- `icon`
- `input`
- `input-group`
- `list`
- `menu`
- `message-strip`
- `navigation-list`
- `notification`
- `panel`
- `popover`
- `shellbar`
- `tabs`
- `title`
- `toolbar`
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

### Default

```html
<div class="fd-popover fd-popover--right fd-user-menu">
    <div class="fd-popover__body fd-popover__body--right" aria-hidden="false" id="userMenu1">
        <div class="fd-popover__wrapper fd-user-menu__popover-wrapper">
            <div class="fd-user-menu__body">
                <div class="fd-user-menu__header">
                    <span
                        class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--thumbnail"
                        aria-label="Avatar"

                        >
                        <i
                            class="fd-avatar__zoom-icon sap-icon--edit"
                            aria-label="Edit"
                            role="presentation"
                            aria-hidden="true"
                            ></i>
                        </span>
                        <div class="fd-user-menu__header-container">
                            <div class="fd-user-menu__user-name">Lisa Miller</div>
                            <div class="fd-user-menu__subline">lisa.miller@test.com</div>
                            <div class="fd-user-menu__subline">User Experience Designer</div>
                            <div class="fd-user-menu__subline">Primary Employment</div>
                        </div>
                        <div class="fd-user-menu__header-content-area">
                            Header Content Area
                        </div>
                    </div>
                    <div class="fd-user-menu__content-container">
                        <nav class="fd-menu fd-menu--icons fd-user-menu__menu">
                            <ul class="fd-menu__list fd-user-menu__menu-list" role="menu">
                                <li class="fd-menu__item" role="presentation">
                                    <a class="fd-menu__link" href="#" role="menuitem">
                                        <span class="fd-menu__addon-before">
                                            <i class="sap-icon--action-settings" role="presentation"></i>
                                        </span>
                                        <span class="fd-menu__title">Settings</span>
                                    </a>
                                </li>

                                <li class="fd-menu__item" role="presentation">
                                    <span
                                        class="fd-menu__link has-child is-expanded"
                                        aria-controls="EX100M2A"
                                        aria-expanded="true"
                                        aria-haspopup="true"
                                        role="menuitem"
                                        >
                                        <span class="fd-menu__addon-before">
                                            <i class="sap-icon--card" role="presentation"></i>
                                        </span>
                                        <div class="fd-menu__content">
                                            <span class="fd-menu__title">Menu Item</span>
                                            <span class="fd-menu__subtitle">Sub-menu List Item</span>
                                        </div>
                                        <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                                    </span>

                                    <ul
                                        class="fd-menu__sublist fd-menu__sublist--icons"
                                        id="EX100M2A"
                                        aria-hidden="false"
                                        role="menu"
                                        >
                                        <li class="fd-menu__item" role="presentation">
                                            <a class="fd-menu__link" href="#" role="menuitem">
                                                <span class="fd-menu__addon-before"
                                                    ><i class="sap-icon--card" role="presentation"></i
                                                    ></span>
                                                    <span class="fd-menu__title">Sub-menu Item</span>
                                                </a>
                                            </li>
                                            <li class="fd-menu__item" role="presentation">
                                                <a class="fd-menu__link" href="#" role="menuitem">
                                                    <span class="fd-menu__title">Sub-menu Item</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="fd-menu__item" role="presentation">
                                        <a class="fd-menu__link" href="#" role="menuitem">
                                            <span class="fd-menu__addon-before">
                                                <i class="sap-icon--official-service" role="presentation"></i>
                                            </span>
                                            <span class="fd-menu__title">Legal Information</span>
                                        </a>
                                    </li>

                                    <li class="fd-menu__item" role="presentation">
                                        <a class="fd-menu__link" href="#" role="menuitem">
                                            <span class="fd-menu__addon-before">
                                                <i class="sap-icon--message-information" role="presentation"></i>
                                            </span>
                                            <span class="fd-menu__title">About</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="fd-bar fd-bar--footer">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button aria-label="button" class="fd-button fd-button--transparent">
                                <i class="sap-icon--log"></i>
                                <span class="fd-button__text"> Sign Out</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="fd-popover fd-popover--right fd-user-menu">
            <div class="fd-popover__body fd-popover__body--right" aria-hidden="false" id="userMenu1">
                <div class="fd-popover__wrapper fd-user-menu__popover-wrapper">
                    <div class="fd-user-menu__body">
                        <div class="fd-user-menu__header">
                            <span
                                class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--thumbnail"
                                aria-label="Avatar"

                                >
                                <i
                                    class="fd-avatar__zoom-icon sap-icon--edit"
                                    aria-label="Edit"
                                    role="presentation"
                                    aria-hidden="true"
                                    ></i>
                                </span>
                                <div class="fd-user-menu__header-container">
                                    <div class="fd-user-menu__user-name">Lisa Miller</div>
                                    <div class="fd-user-menu__subline">lisa.miller@test.com</div>
                                    <div class="fd-user-menu__subline">User Experience Designer</div>
                                    <div class="fd-user-menu__subline">Primary Employment</div>
                                </div>
                                <div class="fd-user-menu__header-content-area">
                                    <div
                                        role="note"
                                        aria-labelledby="message-strip-hidden-text-2 message-strip-text-2"
                                        class="fd-message-strip fd-message-strip--information"
                                        >
                                        <span class="fd-message-strip__sr-only" id="message-strip-hidden-text-2"
                                            >Information Bar Closable</span
                                            >

                                            <div class="fd-message-strip__icon-container" aria-hidden="true">
                                                <span
                                                    class="sap-icon sap-icon--message-information"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    ></span>
                                                </div>

                                                <p class="fd-message-strip__text" id="message-strip-text-2">
                                                    This is an information massage.
                                                </p>
                                            </div>
                                        </div>
                                        <button aria-label="Manage Account" class="fd-button">
                                            <i class="sap-icon--user-settings"></i>
                                            <span class="fd-button__text">Manage Account</span>
                                        </button>
                                    </div>
                                    <div class="fd-user-menu__content-container">
                                        <div class="fd-panel fd-user-menu__panel" aria-labelledby="__panel-title-8" role="form">
                                            <div class="fd-panel__header">
                                                <div class="fd-panel__expand">
                                                    <button
                                                        class="fd-button fd-button--transparent fd-panel__button"
                                                        aria-expanded="true"
                                                        aria-haspopup="true"
                                                        aria-label="expand/collapse panel"
                                                        aria-controls="__panel-8"
                                                        >
                                                        <i class="sap-icon--slim-arrow-down"></i>
                                                    </button>
                                                </div>
                                                <h4 class="fd-panel__title" id="__panel-title-8">Accounts (3)</h4>
                                                <div class="fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                                                    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"> </span>
                                                    <button
                                                        class="fd-button fd-button--transparent"
                                                        aria-label="Add Account"
                                                        title="Add Account"
                                                        >
                                                        <i class="sap-icon--user-edit"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div
                                                role="region"
                                                aria-labelledby="__panel-title-8"
                                                class="fd-panel__content fd-panel__content--no-padding"
                                                aria-hidden="false"
                                                id="__panel-8"
                                                >
                                                <ul class="fd-list fd-list--subline" role="list">
                                                    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
                                                        <span
                                                            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--thumbnail"

                                                            role="img"
                                                            aria-label="Jane Doe"
                                                            ></span>
                                                            <div class="fd-list__content">
                                                                <div class="fd-list__title">Lisa Miller Lorem</div>
                                                                <div class="fd-list__subline">lisa.miller@test.com</div>
                                                                <div class="fd-list__subline">Delivery Manager</div>
                                                            </div>
                                                            <span class="fd-list__active-indicator sap-icon--sys-enter-2"></span>
                                                        </li>
                                                        <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
                                                            <span
                                                                class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--thumbnail"

                                                                role="img"
                                                                aria-label="John Doe"
                                                                ></span>
                                                                <div class="fd-list__content">
                                                                    <div class="fd-list__title">John Doe</div>
                                                                    <div class="fd-list__subline">john.doe@test.com</div>
                                                                    <div class="fd-list__subline">Project Manager</div>
                                                                </div>
                                                            </li>
                                                            <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
                                                                <span
                                                                    class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--accent-color-10"
                                                                    aria-role="img"
                                                                    aria-label="Jane Doe"
                                                                    >JD</span
                                                                    >
                                                                    <div class="fd-list__content">
                                                                        <div class="fd-list__title">Jane Doe</div>
                                                                        <div class="fd-list__subline">jane.doe@test.com</div>
                                                                        <div class="fd-list__subline">User Experience Designer</div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <nav class="fd-menu fd-menu--icons fd-user-menu__menu">
                                                        <ul class="fd-menu__list fd-user-menu__menu-list" role="menu">
                                                            <li class="fd-menu__item" role="presentation">
                                                                <a class="fd-menu__link" href="#" role="menuitem">
                                                                    <span class="fd-menu__addon-before">
                                                                        <i class="sap-icon--action-settings" role="presentation"></i>
                                                                    </span>
                                                                    <span class="fd-menu__title">Settings</span>
                                                                </a>
                                                            </li>

                                                            <li class="fd-menu__item" role="presentation">
                                                                <span
                                                                    class="fd-menu__link has-child is-expanded"
                                                                    aria-controls="EX100M2B"
                                                                    aria-expanded="true"
                                                                    aria-haspopup="true"
                                                                    role="menuitem"
                                                                    >
                                                                    <span class="fd-menu__addon-before">
                                                                        <i class="sap-icon--card" role="presentation"></i>
                                                                    </span>
                                                                    <div class="fd-menu__content">
                                                                        <span class="fd-menu__title"
                                                                            >Menu Item Lorem ipsum dolor sit amet consectetur, adipisicing
                                                                            elit.</span
                                                                            >
                                                                            <span class="fd-menu__subtitle"
                                                                                >Sub-menu List Item Consectetur reprehenderit, cumque iusto molestiae
                                                                                doloribus assumenda omnis eveniet</span
                                                                                >
                                                                            </div>

                                                                            <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                                                                        </span>

                                                                        <ul class="fd-menu__sublist" id="EX100M2B" aria-hidden="false" role="menu">
                                                                            <li class="fd-menu__item" role="presentation">
                                                                                <a class="fd-menu__link" href="#" role="menuitem">
                                                                                    <div class="fd-menu__content">
                                                                                        <span class="fd-menu__title"
                                                                                            >Sub-menu Item 1 Consectetur reprehenderit, cumque iusto
                                                                                            molestiae doloribus assumenda omnis eveniet</span
                                                                                            >
                                                                                        </div>
                                                                                        <span class="fd-menu__addon-after fd-menu__addon-after--active"
                                                                                            ><i class="sap-icon--accept" role="presentation"></i
                                                                                            ></span>
                                                                                        </a>
                                                                                    </li>
                                                                                    <li class="fd-menu__item" role="presentation">
                                                                                        <a class="fd-menu__link" href="#" role="menuitem">
                                                                                            <span class="fd-menu__title fd-menu__title--truncate"
                                                                                                >Sub-menu Item 2 Consectetur reprehenderit, cumque iusto molestiae
                                                                                                doloribus assumenda omnis eveniet</span
                                                                                                >
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>

                                                                                <li class="fd-menu__item" role="presentation">
                                                                                    <a class="fd-menu__link" href="#" role="menuitem">
                                                                                        <span class="fd-menu__addon-before">
                                                                                            <i class="sap-icon--official-service" role="presentation"></i>
                                                                                        </span>
                                                                                        <div class="fd-menu__content">
                                                                                            <span class="fd-menu__title fd-menu__title--truncate"
                                                                                                >Menu Item Lorem ipsum dolor sit amet consectetur, adipisicing
                                                                                                elit.</span
                                                                                                >
                                                                                                <span class="fd-menu__subtitle fd-menu__subtitle--truncate"
                                                                                                    >Sub-menu List Item Consectetur reprehenderit, cumque iusto molestiae
                                                                                                    doloribus assumenda omnis eveniet</span
                                                                                                    >
                                                                                                </div>
                                                                                            </a>
                                                                                        </li>

                                                                                        <li class="fd-menu__item" role="presentation">
                                                                                            <a class="fd-menu__link" href="#" role="menuitem">
                                                                                                <span class="fd-menu__addon-before">
                                                                                                    <i class="sap-icon--message-information" role="presentation"></i>
                                                                                                </span>
                                                                                                <span class="fd-menu__title">About</span>
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </nav>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="fd-bar fd-bar--footer">
                                                                        <div class="fd-bar__right">
                                                                            <div class="fd-bar__element">
                                                                                <button aria-label="button" class="fd-button fd-button--transparent">
                                                                                    <i class="sap-icon--log"></i>
                                                                                    <span class="fd-button__text"> Sign Out</span>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="fd-popover fd-popover--right fd-user-menu">
                                                                        <div class="fd-popover__body fd-popover__body--right" aria-hidden="false" id="userMenu1">
                                                                            <div class="fd-popover__wrapper fd-user-menu__popover-wrapper">
                                                                                <div class="fd-user-menu__body">
                                                                                    <div class="fd-user-menu__header">
                                                                                        <span
                                                                                            class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--thumbnail"
                                                                                            aria-label="Avatar"

                                                                                            >
                                                                                            <i
                                                                                                class="fd-avatar__zoom-icon sap-icon--edit"
                                                                                                aria-label="Edit"
                                                                                                role="presentation"
                                                                                                aria-hidden="true"
                                                                                                ></i>
                                                                                            </span>
                                                                                            <div class="fd-user-menu__header-container">
                                                                                                <div class="fd-user-menu__user-name">
                                                                                                    Lisa Miller Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa consequuntur
                                                                                                    cum voluptate iure tenetu!
                                                                                                </div>
                                                                                                <div class="fd-user-menu__subline">
                                                                                                    lisa.miller@test.com Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
                                                                                                    quod accusamus quis magnam, reprehenderit anim.
                                                                                                </div>
                                                                                                <div class="fd-user-menu__subline">
                                                                                                    A very long subline 2 that can be displayed by wrapping behaviour in the subtitle like
                                                                                                    this.
                                                                                                </div>
                                                                                                <div class="fd-user-menu__subline fd-user-menu__subline--truncate">
                                                                                                    A very long subline 3 that can be truncated with ellipsis
                                                                                                </div>
                                                                                            </div>
                                                                                            <button aria-label="Manage Account" class="fd-button">
                                                                                                <i class="sap-icon--user-settings"></i>
                                                                                                <span class="fd-button__text">Manage Account</span>
                                                                                            </button>
                                                                                        </div>
                                                                                        <div class="fd-user-menu__content-container">
                                                                                            <div class="fd-panel fd-user-menu__panel" aria-labelledby="__panel-title-8" role="form">
                                                                                                <div class="fd-panel__header">
                                                                                                    <div class="fd-panel__expand">
                                                                                                        <button
                                                                                                            class="fd-button fd-button--transparent fd-panel__button"
                                                                                                            aria-expanded="true"
                                                                                                            aria-haspopup="true"
                                                                                                            aria-label="expand/collapse panel"
                                                                                                            aria-controls="__panel-8"
                                                                                                            >
                                                                                                            <i class="sap-icon--slim-arrow-down"></i>
                                                                                                        </button>
                                                                                                    </div>
                                                                                                    <h4 class="fd-panel__title" id="__panel-title-8">Accounts (3)</h4>
                                                                                                    <div class="fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                                                                                                        <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"> </span>
                                                                                                        <button
                                                                                                            class="fd-button fd-button--transparent"
                                                                                                            aria-label="Add Account"
                                                                                                            title="Add Account"
                                                                                                            >
                                                                                                            <i class="sap-icon--user-edit"></i>
                                                                                                        </button>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    role="region"
                                                                                                    aria-labelledby="__panel-title-8"
                                                                                                    class="fd-panel__content fd-panel__content--no-padding"
                                                                                                    aria-hidden="false"
                                                                                                    id="__panel-8"
                                                                                                    >
                                                                                                    <ul class="fd-list fd-list--subline" role="list">
                                                                                                        <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
                                                                                                            <span
                                                                                                                class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--thumbnail"

                                                                                                                role="img"
                                                                                                                aria-label="Jane Doe"
                                                                                                                ></span>
                                                                                                                <div class="fd-list__content">
                                                                                                                    <div class="fd-list__title">
                                                                                                                        Lisa Miller Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                                                                                        Autem minima ex distinctio dolores vitae!
                                                                                                                    </div>
                                                                                                                    <div class="fd-list__subline">
                                                                                                                        lisa.miller@test.com Lorem, ipsum dolor sit amet consectetur adipisicing
                                                                                                                        elit.
                                                                                                                    </div>
                                                                                                                    <div class="fd-list__subline">
                                                                                                                        Delivery Manager Lorem ipsum dolor sit amet consectetur adipisicing
                                                                                                                        elit.
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <span class="fd-list__active-indicator sap-icon--sys-enter-2"></span>
                                                                                                            </li>
                                                                                                            <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
                                                                                                                <span
                                                                                                                    class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--thumbnail"

                                                                                                                    role="img"
                                                                                                                    aria-label="John Doe"
                                                                                                                    ></span>
                                                                                                                    <div class="fd-list__content">
                                                                                                                        <div class="fd-list__title fd-list__title--truncate">
                                                                                                                            John Doe Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
                                                                                                                            minima ex distinctio dolores vitae!
                                                                                                                        </div>
                                                                                                                        <div class="fd-list__subline fd-list__subline--truncate">
                                                                                                                            john.doe@test.com ipsum dolor sit amet consectetur adipisicing elit.
                                                                                                                            Autem minima ex distinctio dolores vitae!
                                                                                                                        </div>
                                                                                                                        <div class="fd-list__subline fd-list__subline--truncate">
                                                                                                                            Project Manager ipsum dolor sit amet consectetur adipisicing elit. Autem
                                                                                                                            minima ex distinctio dolores vitae!
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </li>
                                                                                                                <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
                                                                                                                    <span
                                                                                                                        class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--accent-color-10"
                                                                                                                        aria-role="img"
                                                                                                                        aria-label="Jane Doe"
                                                                                                                        >JD</span
                                                                                                                        >
                                                                                                                        <div class="fd-list__content">
                                                                                                                            <div class="fd-list__title">Jane Doe</div>
                                                                                                                            <div class="fd-list__subline">jane.doe@test.com</div>
                                                                                                                            <div class="fd-list__subline">User Experience Designer</div>
                                                                                                                        </div>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <nav class="fd-menu fd-menu--icons fd-user-menu__menu">
                                                                                                            <ul class="fd-menu__list fd-user-menu__menu-list" role="menu">
                                                                                                                <li class="fd-menu__item" role="presentation">
                                                                                                                    <a class="fd-menu__link" href="#" role="menuitem">
                                                                                                                        <span class="fd-menu__addon-before">
                                                                                                                            <i class="sap-icon--action-settings" role="presentation"></i>
                                                                                                                        </span>
                                                                                                                        <span class="fd-menu__title">Settings</span>
                                                                                                                    </a>
                                                                                                                </li>

                                                                                                                <li class="fd-menu__item" role="presentation">
                                                                                                                    <span
                                                                                                                        class="fd-menu__link has-child"
                                                                                                                        aria-expanded="false"
                                                                                                                        aria-haspopup="true"
                                                                                                                        role="menuitem"
                                                                                                                        >
                                                                                                                        <span class="fd-menu__addon-before">
                                                                                                                            <i class="sap-icon--card" role="presentation"></i>
                                                                                                                        </span>
                                                                                                                        <span class="fd-menu__title">Menu Item</span>
                                                                                                                        <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                                                                                                                    </span>
                                                                                                                </li>

                                                                                                                <li class="fd-menu__item" role="presentation">
                                                                                                                    <a class="fd-menu__link" href="#" role="menuitem">
                                                                                                                        <span class="fd-menu__addon-before">
                                                                                                                            <i class="sap-icon--official-service" role="presentation"></i>
                                                                                                                        </span>
                                                                                                                        <span class="fd-menu__title">Legal Information</span>
                                                                                                                    </a>
                                                                                                                </li>

                                                                                                                <li class="fd-menu__item" role="presentation">
                                                                                                                    <a class="fd-menu__link" href="#" role="menuitem">
                                                                                                                        <span class="fd-menu__addon-before">
                                                                                                                            <i class="sap-icon--message-information" role="presentation"></i>
                                                                                                                        </span>
                                                                                                                        <span class="fd-menu__title">About</span>
                                                                                                                    </a>
                                                                                                                </li>
                                                                                                            </ul>
                                                                                                        </nav>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="fd-bar fd-bar--footer">
                                                                                                <div class="fd-bar__right">
                                                                                                    <div class="fd-bar__element">
                                                                                                        <button aria-label="button" class="fd-button fd-button--transparent">
                                                                                                            <i class="sap-icon--log"></i>
                                                                                                            <span class="fd-button__text"> Sign Out</span>
                                                                                                        </button>
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

This documentation was automatically generated from: `packages/styles/stories/Components/user-menu/user-menu.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
