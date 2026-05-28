---
component: fd-horizontal-navigation
title: Patterns/Horizontal Navigation
category: Patterns
selector: fd-horizontal-navigation
cssFile: horizontal-navigation.css
sourcePath: packages/styles/stories/Patterns/horizontal-navigation/horizontal-navigation.stories.js
tags: ["btp"]
dependencies: ["avatar","button","form-label","horizontal-navigation","icon","icon-tab-bar","input-group","list","popover","text","title","tool-header"]
relatedComponents: ["avatar","button","form-label","horizontal-navigation","icon","icon-tab-bar","input-group","list","popover","text","title","tool-header"]
stability: stable
generatedAt: 2026-05-28T20:12:00.981Z
---

# Patterns/Horizontal Navigation

The Horizontal Navigation is an optional layout to the Vertical Navigation. One application should use the Horizontal Tabs Navigation alternatively to the Side Navigation, depending on its requirements, mainly related to the complexity of navigable items.
Preferably the Horizontal Navigation is suitable for a maximum of seven to nine primary items.

It displays the navigation items respectively in horizontal mode. The Tabs are displayed underneath the Tool Header, enabling the navigation into another page and context within the same Application while the Tool Header and the Tabs remain static.

The Horizontal Navigation Tabs are built with the IconTabBar component with two additional modifier classes \

## Dependencies

This component depends on the following CSS files:

- `avatar.css`
- `button.css`
- `form-label.css`
- `horizontal-navigation.css`
- `icon.css`
- `icon-tab-bar.css`
- `input-group.css`
- `list.css`
- `popover.css`
- `text.css`
- `title.css`
- `tool-header.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/horizontal-navigation.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/avatar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/form-label.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/horizontal-navigation.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon-tab-bar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/input-group.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/list.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/popover.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/text.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/title.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/tool-header.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-horizontal-navigation">
    <div class="fd-tool-header">
        <div class="fd-tool-header__group">
            <div class="fd-tool-header__element">
                <img class="fd-tool-header__logo" src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" alt="SAP">
                <div class="fd-tool-header__element">
                    <h4 class="fd-title fd-title--h5 fd-tool-header__title">Product Name</h4>
                </div>
                <div class="fd-tool-header__element">
                    <label class="fd-form-label fd-tool-header__label" for="input-1">Second Title</label>
                </div>
            </div>
            <div class="fd-tool-header__group">
                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--transparent fd-tool-header__button" aria-label="search">
                        <i class="sap-icon--search"></i>
                    </button>
                </div>
                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--transparent fd-tool-header__button" aria-label="task">
                        <i class="sap-icon--circle-task"></i>
                    </button>
                </div>
                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--transparent fd-tool-header__button" aria-label="notification">
                        <i class="sap-icon--bell"></i>
                    </button>
                </div>
                <div class="fd-tool-header__element">
                    <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" role="img" aria-label="John Doe"></span>
                </div>
                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--transparent fd-tool-header__button" aria-label="user menu control">
                        <i class="sap-icon--grid"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="fd-icon-tab-bar fd-icon-tab-bar--navigation fd-icon-tab-bar--navigation-horizontal fd-icon-tab-bar--sm">
            <ul role="tablist" class="fd-icon-tab-bar__header">
                <li role="presentation" class="fd-icon-tab-bar__item">
                    <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab1">
                        <span class="fd-icon-tab-bar__tag">Section 1</span>
                    </a>
                </li>
                <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
                    <a role="tab" class="fd-icon-tab-bar__tab" aria-selected="true" id="tab2" tabindex="0">
                        <span class="fd-icon-tab-bar__tag">Section 2</span>
                    </a>

                    <div class="fd-popover fd-icon-tab-bar__popover">
                        <div class="fd-popover__control">
                            <div class="fd-icon-tab-bar__button-container">
                                <button class="fd-button fd-button--transparent  fd-icon-tab-bar__button" aria-controls="popoverA1" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverA1');" aria-label="open menu button">
                                    <i class="sap-icon--slim-arrow-down"></i>
                                </button>
                            </div>
                        </div>
                        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" aria-hidden="false" id="popoverA1">
                            <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
                                <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                    <a tabindex="0" class="fd-list__link">
                                        <span class="fd-list__title">Subsection 1</span>
                                    </a>
                                </li>
                                <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                    <a tabindex="0" class="fd-list__link">
                                        <span class="fd-list__title">Subsection 2</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li role="presentation" class="fd-icon-tab-bar__item">
                    <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3">
                        <span class="fd-icon-tab-bar__tag">Section 3</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
```

## Related Components

This component works with or depends on:

- `avatar`
- `button`
- `form-label`
- `horizontal-navigation`
- `icon`
- `icon-tab-bar`
- `input-group`
- `list`
- `popover`
- `text`
- `title`
- `tool-header`

## Design Tokens

Key CSS variables used by this component:

- `--sapContent_HeaderShadow`

## Examples

### Horizontal Navigation Text Only

```html
<div class="fd-horizontal-navigation">
    <div class="fd-tool-header">
        <div class="fd-tool-header__group">
            <div class="fd-tool-header__element">
                <img class="fd-tool-header__logo" src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" alt="SAP">
                <div class="fd-tool-header__element">
                    <h4 class="fd-title fd-title--h5 fd-tool-header__title">Product Name</h4>
                </div>
                <div class="fd-tool-header__element">
                    <label class="fd-form-label fd-tool-header__label" for="input-1">Second Title</label>
                </div>
            </div>
            <div class="fd-tool-header__group">
                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--transparent fd-tool-header__button" aria-label="search">
                        <i class="sap-icon--search"></i>
                    </button>
                </div>
                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--transparent fd-tool-header__button" aria-label="task">
                        <i class="sap-icon--circle-task"></i>
                    </button>
                </div>
                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--transparent fd-tool-header__button" aria-label="notification">
                        <i class="sap-icon--bell"></i>
                    </button>
                </div>
                <div class="fd-tool-header__element">
                    <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" role="img" aria-label="John Doe"></span>
                </div>
                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--transparent fd-tool-header__button" aria-label="user menu control">
                        <i class="sap-icon--grid"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="fd-icon-tab-bar fd-icon-tab-bar--navigation fd-icon-tab-bar--navigation-horizontal fd-icon-tab-bar--sm">
            <ul role="tablist" class="fd-icon-tab-bar__header">
                <li role="presentation" class="fd-icon-tab-bar__item">
                    <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab1">
                        <span class="fd-icon-tab-bar__tag">Section 1</span>
                    </a>
                </li>
                <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
                    <a role="tab" class="fd-icon-tab-bar__tab" aria-selected="true" id="tab2" tabindex="0">
                        <span class="fd-icon-tab-bar__tag">Section 2</span>
                    </a>

                    <div class="fd-popover fd-icon-tab-bar__popover">
                        <div class="fd-popover__control">
                            <div class="fd-icon-tab-bar__button-container">
                                <button class="fd-button fd-button--transparent  fd-icon-tab-bar__button" aria-controls="popoverA1" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverA1');" aria-label="open menu button">
                                    <i class="sap-icon--slim-arrow-down"></i>
                                </button>
                            </div>
                        </div>
                        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" aria-hidden="false" id="popoverA1">
                            <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
                                <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                    <a tabindex="0" class="fd-list__link">
                                        <span class="fd-list__title">Subsection 1</span>
                                    </a>
                                </li>
                                <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                    <a tabindex="0" class="fd-list__link">
                                        <span class="fd-list__title">Subsection 2</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li role="presentation" class="fd-icon-tab-bar__item">
                    <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3">
                        <span class="fd-icon-tab-bar__tag">Section 3</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
```

### Horizontal Navigation Text Only Phone View

```html
<div class="fd-horizontal-navigation">
    <div class="fd-tool-header fd-tool-header--sm">
        <div class="fd-tool-header__group">
            <div class="fd-tool-header__element">
                <img class="fd-tool-header__logo" src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png"
                srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x"
                alt="SAP">
                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--transparent fd-button--menu fd-tool-header__button"
                        aria-label="mega menu">
                        <i class="sap-icon--megamenu"></i>
                    </button>
                </div>
            </div>
            <div class="fd-tool-header__group">
                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--transparent fd-tool-header__button" aria-label="more items">
                        <i class="sap-icon--overflow"></i>
                    </button>
                </div>
                <div class="fd-tool-header__element">
                    <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
                        role="img"
                        aria-label="John Doe"></span>
                    </div>
                </div>
            </div>
            <div
                class="fd-icon-tab-bar fd-icon-tab-bar--navigation fd-icon-tab-bar--navigation-horizontal fd-icon-tab-bar--sm"
                >
                <ul role="tablist" class="fd-icon-tab-bar__header">
                    <li role="presentation" class="fd-icon-tab-bar__item">
                        <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab4">
                            <span class="fd-icon-tab-bar__tag">Section 1</span>
                        </a>
                    </li>
                    <li role="presentation" class="fd-icon-tab-bar__item">
                        <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab5">
                            <span class="fd-icon-tab-bar__tag">Section 2</span>
                        </a>
                    </li>
                    <li role="presentation" class="fd-icon-tab-bar__item">
                        <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab6">
                            <span class="fd-icon-tab-bar__tag">Section 3</span>
                        </a>
                    </li>
                    <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--overflow"
                        >
                        <div class="fd-popover fd-icon-tab-bar__popover">
                            <div class="fd-popover__control">
                                <button class="fd-icon-tab-bar__overflow" aria-controls="popoverA2" aria-expanded="false"
                                    aria-haspopup="true" onclick="onPopoverClick('popoverA2');"
                                    aria-label="open menu button">
                                    <span class="fd-icon-tab-bar__overflow-text">More</span>
                                    <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                                </button>
                            </div>
                            <div
                                class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body"
                                aria-hidden="false" id="popoverA2">
                                <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list"
                                    role="list">
                                    <li tabindex="-1" role="listitem" aria-level="1"
                                        class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                        <a tabindex="0" class="fd-list__link">
                                            <span class="fd-list__title">Section 4</span>
                                        </a>
                                    </li>
                                    <li tabindex="-1" role="listitem" aria-level="1"
                                        class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                        <a tabindex="0" class="fd-list__link">
                                            <span class="fd-list__title">Section 5</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
```

### Horizontal Navigation Text And Icon

Icon Tab Bars with Single Click Areas

```html
<div class="fd-horizontal-navigation">
    <div class="fd-tool-header">
        <div class="fd-tool-header__group">
            <div class="fd-tool-header__element">
                <img class="fd-tool-header__logo" src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" alt="SAP">
                <div class="fd-tool-header__element">
                    <h4 class="fd-title fd-title--h5 fd-tool-header__title">Product Name</h4>
                </div>
                <div class="fd-tool-header__element">
                    <label class="fd-form-label fd-tool-header__label" for="input-1">Second Title</label>
                </div>
            </div>
            <div class="fd-tool-header__group">
                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--transparent fd-tool-header__button" aria-label="search">
                        <i class="sap-icon--search"></i>
                    </button>
                </div>
                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--transparent fd-tool-header__button" aria-label="task">
                        <i class="sap-icon--circle-task"></i>
                    </button>
                </div>
                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--transparent fd-tool-header__button" aria-label="notification">
                        <i class="sap-icon--bell"></i>
                    </button>
                </div>
                <div class="fd-tool-header__element">
                    <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" role="img" aria-label="John Doe"></span>
                </div>
                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--transparent fd-tool-header__button" aria-label="user menu control">
                        <i class="sap-icon--grid"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="fd-icon-tab-bar fd-icon-tab-bar--navigation fd-icon-tab-bar--navigation-horizontal fd-icon-tab-bar--sm">
            <ul role="tablist" class="fd-icon-tab-bar__header">
                <li role="presentation" class="fd-icon-tab-bar__item">
                    <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab7">
                        <div class="fd-icon-tab-bar__tab-container">
                            <i class="sap-icon--home"></i>
                            <span class="fd-icon-tab-bar__tag">Section 1</span>
                        </div>
                    </a>
                </li>
                <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--single-click">
                    <div class="fd-popover">
                        <div class="fd-popover__control">
                            <a role="tab" class="fd-icon-tab-bar__tab" tabindex="0" aria-selected="true" id="tab8" aria-controls="popoverA3" aria-expanded="true" aria-haspopup="true" onclick="onPopoverClick('popoverA3');">
                                <div class="fd-icon-tab-bar__tab-container">
                                    <i class="sap-icon--internet-browser" role="presentation"></i>
                                    <span class="fd-icon-tab-bar__tag">Section 2</span>
                                    <span class="fd-icon-tab-bar__arrow">
                                        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" aria-hidden="false" id="popoverA3">
                            <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
                                <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                    <a tabindex="0" class="fd-list__link">
                                        <span class="fd-list__title">Subsection 1</span>
                                    </a>
                                </li>
                                <li tabindex="-1" role="listitem" aria-level="2" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                    <a tabindex="0" class="fd-list__link">
                                        <span class="fd-list__title">Subsection 1.1</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li role="presentation" class="fd-icon-tab-bar__item">
                    <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab9">
                        <div class="fd-icon-tab-bar__tab-container">
                            <i class="sap-icon--home-share"></i>
                            <span class="fd-icon-tab-bar__tag">Section 3</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
```

### Horizontal Navigation Text And Icon Phone View

Icon Tab Bars with Two Click Areas

```html
<div class="fd-horizontal-navigation">
    <div class="fd-tool-header fd-tool-header--sm">
        <div class="fd-tool-header__group">
            <div class="fd-tool-header__element">
                <img class="fd-tool-header__logo" src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" alt="SAP">
                <div class="fd-tool-header__element">
                    <h4 class="fd-title fd-title--h5 fd-tool-header__title">Product Name</h4>
                </div>
            </div>
            <div class="fd-tool-header__group">
                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--transparent fd-tool-header__button" aria-label="more items">
                        <i class="sap-icon--overflow"></i>
                    </button>
                </div>
                <div class="fd-tool-header__element">
                    <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" role="img" aria-label="John Doe"></span>
                </div>
            </div>
        </div>
        <div class="fd-icon-tab-bar fd-icon-tab-bar--navigation fd-icon-tab-bar--navigation-horizontal fd-icon-tab-bar--sm">
            <ul role="tablist" class="fd-icon-tab-bar__header">
                <li role="presentation" class="fd-icon-tab-bar__item">
                    <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab10">
                        <div class="fd-icon-tab-bar__tab-container">
                            <i class="sap-icon--home"></i>
                            <span class="fd-icon-tab-bar__tag">Section 1</span>
                        </div>
                    </a>
                </li>
                <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
                    <a role="tab" class="fd-icon-tab-bar__tab" aria-selected="true" id="tab11" tabindex="0">
                        <div class="fd-icon-tab-bar__tab-container">
                            <i class="sap-icon--family-care"></i>
                            <span class="fd-icon-tab-bar__tag">Section 2</span>
                        </div>
                    </a>
                    <div class="fd-popover fd-icon-tab-bar__popover">
                        <div class="fd-popover__control">
                            <div class="fd-icon-tab-bar__button-container">
                                <button class="fd-button fd-button--transparent  fd-icon-tab-bar__button" aria-controls="popoverA4" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverA4');" aria-label="open menu button">
                                    <i class="sap-icon--slim-arrow-down"></i>
                                </button>
                            </div>
                        </div>
                        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" aria-hidden="false" id="popoverA4">
                            <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
                                <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                    <a tabindex="0" class="fd-list__link">
                                        <span class="fd-list__title">Subsection 1</span>
                                    </a>
                                </li>
                                <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                    <a tabindex="0" class="fd-list__link">
                                        <span class="fd-list__title">Subsection 2</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li role="presentation" class="fd-icon-tab-bar__item">
                    <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab12">
                        <div class="fd-icon-tab-bar__tab-container">
                            <i class="sap-icon--monitor-payments"></i>
                            <span class="fd-icon-tab-bar__tag">Section 3</span>
                        </div>
                    </a>
                </li>
                <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--overflow">
                    <div class="fd-popover fd-icon-tab-bar__popover">
                        <div class="fd-popover__control">
                            <button class="fd-icon-tab-bar__overflow" aria-controls="popoverA5" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverA5');" aria-label="open menu button">
                                <span class="fd-icon-tab-bar__overflow-text">More</span>
                                <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                            </button>
                        </div>
                        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" aria-hidden="false" id="popoverA5">
                            <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
                                <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                    <a tabindex="0" class="fd-list__link">
                                        <i class="sap-icon--batch-payments" role="presentation"></i>
                                        <span class="fd-list__title">Section 4</span>
                                    </a>
                                </li>
                                <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                    <a tabindex="0" class="fd-list__link">
                                        <i class="sap-icon--credit-card" role="presentation"></i>
                                        <span class="fd-list__title">Section 5</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
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

This documentation was automatically generated from: `packages/styles/stories/Patterns/horizontal-navigation/horizontal-navigation.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
