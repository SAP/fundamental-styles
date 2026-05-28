---
component: fd-icon-tab-bar
title: Components/Icon Tab Bar
category: Components
selector: fd-icon-tab-bar
cssFile: icon-tab-bar.css
sourcePath: packages/styles/stories/Components/icon-tab-bar/icon-tab-bar.stories.js
tags: []
dependencies: ["button","icon","icon-tab-bar","list","menu","popover"]
relatedComponents: ["button","icon","icon-tab-bar","list","menu","popover"]
stability: stable
generatedAt: 2026-05-28T20:12:00.579Z
---

# Components/Icon Tab Bar

The Icon Tab Bar can be used for navigation within an object, or as a filter. Each tab of the component links to a different content area or view.

##Usage
**Use the icon tab bar if:**

- Your business objects need to show multiple facets at the same time.
- You want to allow the user to browse through these facets.
- You need a prominent or very visual filter on top of a list.
- You have clear-cut process steps that need to be visualized.

**Do not use the icon tab bar if:**

- You plan to use only a single tab.

##Semantic colors
Only use semantic colors if it is important for users to know that they need to take action (for example, to indicate errors or critical situations requiring action). Otherwise, use the neutral default colors. To add semantic color to a tab use a modifier class from the table below on \

## Usage Guidelines

**Use the icon tab bar if:**

- Your business objects need to show multiple facets at the same time.
- You want to allow the user to browse through these facets.
- You need a prominent or very visual filter on top of a list.
- You have clear-cut process steps that need to be visualized.

## When Not To Use

- You plan to use only a single tab.

## Dependencies

This component depends on the following CSS files:

- `button.css`
- `icon.css`
- `icon-tab-bar.css`
- `list.css`
- `menu.css`
- `popover.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/icon-tab-bar.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon-tab-bar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/list.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/menu.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/popover.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-icon-tab-bar">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section1" id="tab1">
                <span class="fd-icon-tab-bar__tag">Info</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section2" aria-selected="true" id="tab2">
                <span class="fd-icon-tab-bar__tag">Attachments (16)</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section3" id="tab3">
                <span class="fd-icon-tab-bar__tag">Approvals (42)</span>
            </a>
        </li>
    </ul>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section1" aria-labelledby="tab1">
        Section 1
    </section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section2" aria-labelledby="tab2" hidden>
        Section 2
    </section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section3" aria-labelledby="tab3" hidden>
        Section 3
    </section>
</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-icon-tab-bar--counters` | The text-only variant is one of the most common types |
| `fd-icon-tab-bar--filter` | The tab bar as a filter has two parts: <br>- An “all” tab on the left - shows the total number of items, and describes the type of item (for example, 189 Products).<br>-  Tabs for specific filters - the tab text indicates the filter attribute |
| `fd-icon-tab-bar--icon` | <code>NOTE: This is no longer recommended.</code> Counters can be shown on top of labels |
| `fd-icon-tab-bar--icon-only` | The Icon tabs are rounded tabs that can be populated with any icon |
| `fd-icon-tab-bar--lg` | Style variant |
| `fd-icon-tab-bar--md` | Style variant |
| `fd-icon-tab-bar--navigation` | The Navigation Tab Bar is the main/default navigation displayed on the SAP launchpad home page |
| `fd-icon-tab-bar--navigation-flat` | Style variant |
| `fd-icon-tab-bar--process` | You can also use the tab bar to depict a process |
| `fd-icon-tab-bar--responsive-paddings` | For an Icon Tab Bar with responsive paddings that adjust based on the screen size add the `fd-icon-tab-bar--responsive-paddings` modifier class. |
| `fd-icon-tab-bar--sm` | The text-only variant is one of the most common types |
| `fd-icon-tab-bar--xl` | Style variant |
| `fd-icon-tab-bar--xxl` | Style variant |

## States

| Class | Description |
|-------|-------------|
| `is-active` | Active state |
| `is-focus` | Focus state |
| `is-hover` | Hover state |

## BEM Elements

This component uses the following BEM elements:

- `fd-icon-tab-bar__arrow`
- `fd-icon-tab-bar__badge`
- `fd-icon-tab-bar__button`
- `fd-icon-tab-bar__button-container`
- `fd-icon-tab-bar__container`
- `fd-icon-tab-bar__container--filter`
- `fd-icon-tab-bar__counter`
- `fd-icon-tab-bar__details`
- `fd-icon-tab-bar__filter-counter`
- `fd-icon-tab-bar__filter-label`
- `fd-icon-tab-bar__header`
- `fd-icon-tab-bar__header--left-offset`
- `fd-icon-tab-bar__icon`
- `fd-icon-tab-bar__icon-separator`
- `fd-icon-tab-bar__item`
- `fd-icon-tab-bar__item--closable`
- `fd-icon-tab-bar__item--critical`
- `fd-icon-tab-bar__item--dnd-hovered`
- `fd-icon-tab-bar__item--dnd-preview`
- `fd-icon-tab-bar__item--dnd-separator`
- `fd-icon-tab-bar__item--dnd-separator-end`
- `fd-icon-tab-bar__item--informative`
- `fd-icon-tab-bar__item--multi-click`
- `fd-icon-tab-bar__item--negative`
- `fd-icon-tab-bar__item--overflow`
- `fd-icon-tab-bar__item--positive`
- `fd-icon-tab-bar__item--single-click`
- `fd-icon-tab-bar__item--with-separator`
- `fd-icon-tab-bar__label`
- `fd-icon-tab-bar__line-separator`
- `fd-icon-tab-bar__list`
- `fd-icon-tab-bar__list-item`
- `fd-icon-tab-bar__list-item--closable`
- `fd-icon-tab-bar__list-item--informative`
- `fd-icon-tab-bar__list-item--positive`
- `fd-icon-tab-bar__list-item-counter`
- `fd-icon-tab-bar__list-item-icon`
- `fd-icon-tab-bar__list-item-icon-container`
- `fd-icon-tab-bar__list-item-title`
- `fd-icon-tab-bar__list-link`
- `fd-icon-tab-bar__overflow`
- `fd-icon-tab-bar__overflow-text`
- `fd-icon-tab-bar__panel`
- `fd-icon-tab-bar__popover`
- `fd-icon-tab-bar__popover-body`
- `fd-icon-tab-bar__separator`
- `fd-icon-tab-bar__tab`
- `fd-icon-tab-bar__tab-container`
- `fd-icon-tab-bar__tag`

## Related Components

This component works with or depends on:

- `button`
- `icon`
- `icon-tab-bar`
- `list`
- `menu`
- `popover`

## Design Tokens

Key CSS variables used by this component:

- `--animated`
- `--closable`
- `--counters`
- `--dnd-hovered`
- `--dnd-preview`
- `--dnd-separator`
- `--fdButtonBackgroundColor`
- `--fdButtonBorderColor`
- `--fdButtonColor`
- `--fdButton_Hover_Shadow`
- `--fdIconTabBar_Arrow_Color`
- `--fdIconTabBar_Badge_Background`
- `--fdIconTabBar_Badge_Background_After`
- `--fdIconTabBar_Button_Shell_Background_Color_Active`
- `--fdIconTabBar_Button_Shell_Background_Color_Hover`

*...and 5 more*

## Examples

### Text Only (Inline mode)

The text-only variant is one of the most common types. It allows longer labels, and can also display counters next to the text to indicate the number of items on the tab page. The labels of the tabs do not get truncated. The full text is always shown. As a result, you need to ensure that your labels do not become too long. They should still be easy to read on smaller screens. The control has the same look and feel in Cozy and Compact mode.

```html
<div class="fd-icon-tab-bar">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section1" id="tab1">
                <span class="fd-icon-tab-bar__tag">Info</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section2" aria-selected="true" id="tab2">
                <span class="fd-icon-tab-bar__tag">Attachments (16)</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section3" id="tab3">
                <span class="fd-icon-tab-bar__tag">Approvals (42)</span>
            </a>
        </li>
    </ul>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section1" aria-labelledby="tab1">
        Section 1
    </section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section2" aria-labelledby="tab2" hidden>
        Section 2
    </section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section3" aria-labelledby="tab3" hidden>
        Section 3
    </section>
</div>
```

### Text Only (Inline mode) Semantic Colors

```html
<div class="fd-icon-tab-bar">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--positive">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section1" aria-selected="true" id="tab1">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--negative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section2" aria-selected="true" id="tab2">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--critical">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section3" aria-selected="true" id="tab3">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--informative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section4" aria-selected="true" id="tab4">
                <span class="fd-icon-tab-bar__tag">Section 4</span>
            </a>
        </li>
    </ul>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section1" aria-labelledby="tab1">Section 1</section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section2" aria-labelledby="tab2" hidden>Section 2</section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section3" aria-labelledby="tab3" hidden>Section 3</section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section4" aria-labelledby="tab4" hidden>Section 4</section>
</div>
```

### Counters and Text

<code>NOTE: This is no longer recommended.</code> Counters can be shown on top of labels. In this case you need to apply the `fd-icon-tab-bar--counters` modifier class. <br> The control has the same look and feel in Cozy and Compact mode.

```html
<div class="fd-icon-tab-bar fd-icon-tab-bar--counters">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section1" id="tab1">
                <span class="fd-icon-tab-bar__tag">Info</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section2" aria-selected="true" id="tab2">
                <span class="fd-icon-tab-bar__counter">16</span>
                <span class="fd-icon-tab-bar__tag">Attachments</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section3" id="tab3">
                <span class="fd-icon-tab-bar__counter">42</span>
                <span class="fd-icon-tab-bar__tag">Approvals</span>
            </a>
        </li>
    </ul>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section1" aria-labelledby="tab1">
        Section 1
    </section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section2" aria-labelledby="tab2" hidden>
        Section 2
    </section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section3" aria-labelledby="tab3" hidden>
        Section 3
    </section>
</div>
```

### IconOnly

The Icon tabs are rounded tabs that can be populated with any icon. The labels in this case are omitted and counters are optional. You need to apply the `fd-icon-tab-bar--icon-only` modifier class for this type of tabs.

```html
<div class="fd-icon-tab-bar fd-icon-tab-bar--icon-only">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section1" id="tab1">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--account" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">2</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section2" aria-selected="true" id="tab2">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--product" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">23</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section3" id="tab3">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--present" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">10</span>
                </div>
            </a>
        </li>
    </ul>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section1" aria-labelledby="tab1">
        Section 1
    </section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section2" aria-labelledby="tab2" hidden>
        Section 2
    </section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section3" aria-labelledby="tab3" hidden>
        Section 3
    </section>
</div>
```

### Icon Only Semantic Colors

```html
<div class="fd-icon-tab-bar fd-icon-tab-bar--icon-only">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--positive">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab1">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--history" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">2</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--negative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab2">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--card" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">23</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--critical">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--cart" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">10</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--informative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab4">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--cart" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">10</span>
                </div>
            </a>
        </li>
    </ul>
</div>
```

### Icon

To display Icon Tabs with labels and counters you need to apply the `fd-icon-tab-bar--icon` modifier class. The counters are optional and can be ommited. The label is always positioned at the bottom. If you decide to use labels, use them for all tabs. The badge is rendered at the top right hand corner of the icon container. Consider using shorter labels or text tabs (without icons), since text tabs cannot get truncated.

```html
<div class="fd-icon-tab-bar fd-icon-tab-bar--icon">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="1">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--filter" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab2">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--customer" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">99</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--chain-link" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">56 of 123</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
        </li>
    </ul>
</div>

<div class="fd-icon-tab-bar fd-icon-tab-bar--icon">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--positive">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab7">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--play" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--negative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab8">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--unfavorite" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--critical">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab9">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--shipping-status" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
        </li>
    </ul>
</div>
```

### Process

You can also use the tab bar to depict a process. In this case, each tab stands for one step. You need to add the `fd-icon-tab-bar--process` modifier class and a sibling html element with `fd-icon-tab-bar__separator` class to the tab.

```html
<div class="fd-icon-tab-bar fd-icon-tab-bar--icon fd-icon-tab-bar--process">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab1">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--person-placeholder" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__badge"></span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
            <span class="fd-icon-tab-bar__separator">
                <i class="sap-icon--process" role="presentation"></i>
            </span>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab2">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--paper-plane" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
            <span class="fd-icon-tab-bar__separator">
                <i class="sap-icon--process" role="presentation"></i>
            </span>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--loan" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
        </li>
    </ul>
</div>

<div class="fd-icon-tab-bar fd-icon-tab-bar--icon fd-icon-tab-bar--process">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--positive">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab7">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--nutrition-activity" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
            <span class="fd-icon-tab-bar__separator">
                <i class="sap-icon--process" role="presentation"></i>
            </span>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--negative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab8">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--vehicle-repair" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
            <span class="fd-icon-tab-bar__separator">
                <i class="sap-icon--process" role="presentation"></i>
            </span>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--critical">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab9">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--palette" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
        </li>
    </ul>
</div>

<div class="fd-icon-tab-bar fd-icon-tab-bar--process">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab10">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
            <span class="fd-icon-tab-bar__separator">
                <i class="sap-icon--process" role="presentation"></i>
            </span>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab11">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
            <span class="fd-icon-tab-bar__separator">
                <i class="sap-icon--process" role="presentation"></i>
            </span>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab12">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
    </ul>
</div>
```

### Filter

The tab bar as a filter has two parts: <br>- An “all” tab on the left - shows the total number of items, and describes the type of item (for example, 189 Products).<br>-  Tabs for specific filters - the tab text indicates the filter attribute. It is recommended to show a counter on every tab.<br>You need to add the \

```html
<div class="fd-icon-tab-bar fd-icon-tab-bar--filter">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab"  aria-selected="true" href="#" id="tab1">
                <div class="fd-icon-tab-bar__container fd-icon-tab-bar__container--filter">
                    <span class="fd-icon-tab-bar__filter-counter">ÇN</span>
                    <span class="fd-icon-tab-bar__filter-label">ProductsN</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab2">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--letter" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__badge"></span>
                    <span class="fd-icon-tab-bar__counter">2</span>
                </div>
                <div class="fd-icon-tab-bar__label">Ok</div>

            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--activate" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">23</span>
                </div>
                <div class="fd-icon-tab-bar__label">Heavy</div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab4">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--jam" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">10</span>
                </div>
                <div class="fd-icon-tab-bar__label">Overweight</div>
            </a>
        </li>
    </ul>
</div>

<div class="fd-icon-tab-bar fd-icon-tab-bar--filter">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab9">
                <div class="fd-icon-tab-bar__container fd-icon-tab-bar__container--filter">
                    <span class="fd-icon-tab-bar__filter-counter">ÇN</span>
                    <span class="fd-icon-tab-bar__filter-label">ProductsN</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--negative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab10">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--text-color" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">2</span>
                </div>
                <div class="fd-icon-tab-bar__label">Ok</div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--critical">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab11">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--touch" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">23</span>
                </div>
                <div class="fd-icon-tab-bar__label">Heavy</div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--positive">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab12">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--feedback" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">10</span>
                </div>
                <div class="fd-icon-tab-bar__label">Overweight</div>
            </a>
        </li>
    </ul>
</div>
```

### Overflow

Tabs can have an overflow to either sides of the control. Depending on if the order is fixed (process steps) or can be rearranged (tabs). For processes with a fixed order, an overflow to both sides is used. For tabs that can be rearranged, only one overflow will be displayed on the right side.

```html
<h3>Regular</h3>
<button class="fd-icon-tab-bar__overflow">
    <span class="fd-icon-tab-bar__overflow-text">+2</span>
    <i class="sap-icon--slim-arrow-down" role="presentation"></i>
</button>
<button class="fd-icon-tab-bar__overflow">
    <span class="fd-icon-tab-bar__overflow-text">More</span>
    <i class="sap-icon--slim-arrow-down" role="presentation"></i>
</button>

<button class="fd-icon-tab-bar__overflow is-hover">
    <span class="fd-icon-tab-bar__overflow-text">+2</span>
    <i class="sap-icon--slim-arrow-down" role="presentation"></i>
</button>
<button class="fd-icon-tab-bar__overflow is-hover">
    <span class="fd-icon-tab-bar__overflow-text">More</span>
    <i class="sap-icon--slim-arrow-down" role="presentation"></i>
</button>

<button class="fd-icon-tab-bar__overflow is-active">
    <span class="fd-icon-tab-bar__overflow-text">+2</span>
    <i class="sap-icon--slim-arrow-down" role="presentation"></i>
</button>
<button class="fd-icon-tab-bar__overflow is-active">
    <span class="fd-icon-tab-bar__overflow-text">More</span>
    <i class="sap-icon--slim-arrow-down" role="presentation"></i>
</button>

<button class="fd-icon-tab-bar__overflow is-focus">
    <span class="fd-icon-tab-bar__overflow-text">+2</span>
    <i class="sap-icon--slim-arrow-down" role="presentation"></i>
</button>
<button class="fd-icon-tab-bar__overflow is-focus">
    <span class="fd-icon-tab-bar__overflow-text">More</span>
    <i class="sap-icon--slim-arrow-down" role="presentation"></i>
</button>

<div class="fd-icon-tab-bar fd-icon-tab-bar--process">
    <ul role="tablist" class="fd-icon-tab-bar__header fd-icon-tab-bar__header--left-offset">
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--overflow">
            <button class="fd-icon-tab-bar__overflow">
                <span class="fd-icon-tab-bar__overflow-text">+2</span>
                <i class="sap-icon--slim-arrow-down" role="presentation"></i>
            </button>
        </li>
        <li tabindex="-1" class="fd-icon-tab-bar__icon-separator" role="presentation">
            <span class="sap-icon--process"></span>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab1">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
        <li tabindex="-1" class="fd-icon-tab-bar__icon-separator" role="presentation">
            <span class="sap-icon--process"></span>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab2">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li tabindex="-1" class="fd-icon-tab-bar__icon-separator" role="presentation">
            <span class="sap-icon--process"></span>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
        <li tabindex="-1" class="fd-icon-tab-bar__icon-separator" role="presentation">
            <span class="sap-icon--process"></span>
        </li>
        <li
            role="presentation"
            class="fd-icon-tab-bar__item fd-icon-tab-bar__item--overflow"

            >
            <button class="fd-icon-tab-bar__overflow">
                <span class="fd-icon-tab-bar__overflow-text">+3</span>
                <i class="sap-icon--slim-arrow-down" role="presentation"></i>
            </button>
        </li>
    </ul>
</div>
<div class="fd-icon-tab-bar">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab4">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
                <span class="fd-icon-tab-bar__badge"></span>
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
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--overflow">
            <button class="fd-icon-tab-bar__overflow">
                <span class="fd-icon-tab-bar__overflow-text">More</span>
                <i class="sap-icon--slim-arrow-down" role="presentation"></i>
            </button>
        </li>
    </ul>
</div>
```

### Universal Icon Tab Bar Single Click Area

When there is only one click area per tab (also including tabs with sub-items), regular tabs get selected immediately after the click is released. Tabs with sub-items trigger the expansion of a menu (Popover) showing its sub-items. The parent tab title remains displayed when its child is select.<br>You need to apply the \

```html
<div class='fddocs-icon-tab-container'>
    <div class="fd-icon-tab-bar fd-icon-tab-bar--xl">
        <ul role="tablist" class="fd-icon-tab-bar__header">
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab111">
                    <span class="fd-icon-tab-bar__tag">Section 1</span>
                    <span class="fd-icon-tab-bar__badge"></span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--single-click">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <a role="tab" class="fd-icon-tab-bar__tab" tabindex="0" aria-selected="true" id="tab222" aria-controls="popoverA1" aria-expanded="true" aria-haspopup="true" onclick="onPopoverClick('popoverA1');">
                            <div class="fd-icon-tab-bar__tab-container">
                                <span class="fd-icon-tab-bar__tag">Section 2</span>
                                <span class="fd-icon-tab-bar__arrow">
                                    <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                                </span>
                                <span class="fd-icon-tab-bar__badge"></span>
                            </div>
                        </a>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" aria-hidden="false" id="popoverA1">
                        <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
                            <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 1</span>
                                    <span class="fd-icon-tab-bar__badge"></span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="2" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 1.1</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="3" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 1.1.1</span>
                                    <span class="fd-icon-tab-bar__badge"></span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="4" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 1.1.1.1</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="5" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 1.1.1.1.1</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 2</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--single-click">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab333a">
                    <div class="fd-icon-tab-bar__tab-container">
                        <span class="fd-icon-tab-bar__tag">Section 3</span>
                        <span class="fd-icon-tab-bar__arrow">
                            <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                        </span>
                    </div>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--single-click">
                <a role="tab" class="fd-icon-tab-bar__tab is-hover" href="#" id="tab333b">
                    <div class="fd-icon-tab-bar__tab-container">
                        <span class="fd-icon-tab-bar__tag">Section 4 (hover)</span>
                        <span class="fd-icon-tab-bar__arrow">
                            <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                        </span>
                    </div>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--single-click">
                <a role="tab" class="fd-icon-tab-bar__tab is-focus" href="#" id="tab333c">
                    <div class="fd-icon-tab-bar__tab-container">
                        <span class="fd-icon-tab-bar__tag">Section 5 (focus)</span>
                        <span class="fd-icon-tab-bar__arrow">
                            <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                        </span>
                    </div>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--single-click">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <a role="tab" class="fd-icon-tab-bar__tab" tabindex="0" aria-selected="true" id="tab222sef" aria-controls="popoverA1d" aria-expanded="true" aria-haspopup="true" onclick="onPopoverClick('popoverA1d');">
                            <div class="fd-icon-tab-bar__tab-container">
                                <span class="fd-icon-tab-bar__tag">Section 6</span>
                                <span class="fd-icon-tab-bar__arrow">
                                    <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                                </span>
                                <span class="fd-icon-tab-bar__badge"></span>
                            </div>
                        </a>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" aria-hidden="false" id="popoverA1d">
                        <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
                            <li class="fd-icon-tab-bar__line-separator" role="presentation" tabindex="-1"></li>
                            <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 1</span>
                                    <span class="fd-icon-tab-bar__badge"></span>
                                </a>
                            </li>
                            <li class="fd-icon-tab-bar__line-separator" role="presentation" tabindex="-1"></li>
                            <li tabindex="-1" role="listitem" aria-level="2" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 1.1</span>
                                </a>
                            </li>
                            <li class="fd-icon-tab-bar__line-separator" role="presentation" tabindex="-1"></li>
                            <li tabindex="-1" role="listitem" aria-level="3" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 1.1.1</span>
                                    <span class="fd-icon-tab-bar__badge"></span>
                                </a>
                            </li>
                            <li class="fd-icon-tab-bar__line-separator" role="presentation" tabindex="-1"></li>
                            <li tabindex="-1" role="listitem" aria-level="4" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 1.1.1.1</span>
                                </a>
                            </li>
                            <li class="fd-icon-tab-bar__line-separator" role="presentation" tabindex="-1"></li>
                            <li tabindex="-1" role="listitem" aria-level="5" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 1.1.1.1.1</span>
                                </a>
                            </li>
                            <li class="fd-icon-tab-bar__line-separator" role="presentation" tabindex="-1"></li>
                            <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 2</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </div>

    <div class='fd-icon-tab-bar fd-icon-tab-bar--icon'>
        <ul role='tablist' class='fd-icon-tab-bar__header'>
            <li role='presentation' class='fd-icon-tab-bar__item'>
                <a role='tab' class='fd-icon-tab-bar__tab' href='#' aria-selected='true' id='tab1'>
                    <div class='fd-icon-tab-bar__container'>
                        <span class='fd-icon-tab-bar__icon'>
                            <i class='sap-icon--filter' role='presentation'></i>
                        </span>
                    </div>
                    <div class='fd-icon-tab-bar__details'>
                        <span class='fd-icon-tab-bar__label'>Description</span>
                    </div>
                </a>
            </li>
            <li role='presentation' class='fd-icon-tab-bar__item'>
                <a role='tab' class='fd-icon-tab-bar__tab' href='#' id='tab2'>
                    <div class='fd-icon-tab-bar__container'>
                        <span class='fd-icon-tab-bar__icon'>
                            <i class='sap-icon--customer' role='presentation'></i>
                        </span>
                    </div>
                    <div class='fd-icon-tab-bar__details'>
                        <span class='fd-icon-tab-bar__counter'>99</span>
                        <span class='fd-icon-tab-bar__label'>Description</span>
                    </div>
                </a>
            </li>
            <li role='presentation' class='fd-icon-tab-bar__item'>
                <a role='tab' class='fd-icon-tab-bar__tab' href='#' id='tab3'>
                    <div class='fd-icon-tab-bar__container'>
                        <span class='fd-icon-tab-bar__icon'>
                            <i class='sap-icon--chain-link' role='presentation'></i>
                        </span>
                    </div>
                    <div class='fd-icon-tab-bar__details'>
                        <span class='fd-icon-tab-bar__counter'>56 of 123</span>
                        <span class='fd-icon-tab-bar__label'>Description</span>
                    </div>
                </a>
            </li>
            <li role='presentation' class='fd-icon-tab-bar__item fd-icon-tab-bar__item--overflow'>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <button class='fd-icon-tab-bar__overflow is-active'>
                            <span class='fd-icon-tab-bar__overflow-text'>More</span>
                            <i class='sap-icon--slim-arrow-down' role='presentation'></i>
                        </button>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" style='top: 2.3rem'>
                        <ul role="list" class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list">
                            <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item fd-icon-tab-bar__list-item--informative">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-icon-tab-bar__list-item-icon-container">
                                        <span class="fd-list__icon fd-icon-tab-bar__list-item-icon">
                                            <i class="sap-icon--letter" role="presentation"></i>
                                        </span>
                                    </span>
                                    <span class="fd-list__title fd-icon-tab-bar__list-item-title">Description</span>
                                    <span class="fd-list__counter fd-icon-tab-bar__list-item-counter">(12)</span>
                                </a>
                            </li>
                            <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-icon-tab-bar__list-item-icon-container">
                                        <span class="fd-list__icon fd-icon-tab-bar__list-item-icon">
                                            <i class="sap-icon--activate" role="presentation"></i>
                                        </span>
                                    </span>
                                    <span class="fd-list__title fd-icon-tab-bar__list-item-title">Description</span>
                                    <span class="fd-list__counter fd-icon-tab-bar__list-item-counter">(227)</span>
                                </a>
                            </li>
                            <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item fd-icon-tab-bar__list-item--positive">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-icon-tab-bar__list-item-icon-container">
                                        <span class="fd-list__icon fd-icon-tab-bar__list-item-icon">
                                            <i class="sap-icon--jam" role="presentation"></i>
                                        </span>
                                    </span>
                                    <span class="fd-list__title fd-icon-tab-bar__list-item-title">Description</span>
                                    <span class="fd-list__counter fd-icon-tab-bar__list-item-counter">(0)</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </li>
        </ul>
    </div>
</div>
```

### Universal Icon Tab Bar Multi Click Area

In case of two click areas for tabs with sub-tabs, the behaviour for regular tabs (without sub-items) remains unchanged, like described above the tabs get selected immediately. Tabs with two click areas behave differently: when the main part of the tab is clicked, it is highlighted and then selected immediately. Clicking the second area opens a menu (Popover) containing the sub-items. Once a sub-item is clicked, the main tab is highlighted as selected.

```html
<div class="fd-icon-tab-bar fd-icon-tab-bar--md">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="multiClick1">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
            <a role="tab" class="fd-icon-tab-bar__tab" aria-selected="true" id="tab2" tabindex="0">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>

            <div class="fd-popover fd-icon-tab-bar__popover">
                <div class="fd-popover__control">
                    <div class="fd-icon-tab-bar__button-container">
                        <button class="fd-button fd-button--transparent  fd-icon-tab-bar__button" aria-controls="popoverA3" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverA3');" aria-label="open menu button">
                            <i class="sap-icon--slim-arrow-down"></i>
                        </button>
                        <span class="fd-icon-tab-bar__badge"></span>
                    </div>
                </div>
                <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" aria-hidden="false" id="popoverA3">
                    <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
                        <li tabindex="-1" class="fd-icon-tab-bar__icon-separator" role="presentation">
                            <span class="sap-icon--process"></span>
                        </li>
                        <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                            <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                <span class="fd-list__title">Subsection 1</span>
                                <span class="fd-icon-tab-bar__badge"></span>
                            </a>
                        </li>
                        <li tabindex="-1" class="fd-icon-tab-bar__icon-separator" role="presentation">
                            <span class="sap-icon--process"></span>
                        </li>
                        <li tabindex="-1" role="listitem" aria-level="2" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                            <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link is-focus">
                                <span class="fd-list__title">Subsection 1.1 (focus)</span>
                            </a>
                        </li>
                        <li tabindex="-1" class="fd-icon-tab-bar__icon-separator" role="presentation">
                            <span class="sap-icon--process"></span>
                        </li>
                        <li tabindex="-1" role="listitem" aria-level="3" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                            <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link is-hover">
                                <span class="fd-list__title">Subsection 1.1.1 (hover)</span>
                            </a>
                        </li>
                        <li tabindex="-1" class="fd-icon-tab-bar__icon-separator" role="presentation">
                            <span class="sap-icon--process"></span>
                        </li>
                        <li tabindex="-1" role="listitem" aria-level="4" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                            <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                <span class="fd-list__title">Subsection 1.1.1.1</span>
                            </a>
                        </li>
                        <li tabindex="-1" class="fd-icon-tab-bar__icon-separator" role="presentation">
                            <span class="sap-icon--process"></span>
                        </li>
                        <li tabindex="-1" role="listitem" aria-level="5" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                            <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                <span class="fd-list__title">Subsection 1.1.1.1.1</span>
                            </a>
                        </li>
                        <li tabindex="-1" class="fd-icon-tab-bar__icon-separator" role="presentation">
                            <span class="sap-icon--process"></span>
                        </li>
                        <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                            <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                <span class="fd-list__title">Subsection 2</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
            <div class="fd-popover fd-icon-tab-bar__popover">
                <div class="fd-popover__control">
                    <div class="fd-icon-tab-bar__button-container">
                        <button class="fd-button fd-button--transparent fd-icon-tab-bar__button">
                            <i class="sap-icon--slim-arrow-down"></i>
                        </button>
                    </div>
                </div>
            </div>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
            <a role="tab" class="fd-icon-tab-bar__tab is-hover" href="#" id="tab4">
                <span class="fd-icon-tab-bar__tag">Section 4 (hover)</span>
            </a>
            <div class="fd-popover fd-icon-tab-bar__popover">
                <div class="fd-popover__control">

                    <div class="fd-icon-tab-bar__button-container">
                        <button class="fd-button fd-button--transparent fd-icon-tab-bar__button">
                            <i class="sap-icon--slim-arrow-down"></i>
                        </button>
                    </div>
                </div>
            </div>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab4b">
                <span class="fd-icon-tab-bar__tag">Section 5 (btn hover)</span>
            </a>
            <div class="fd-popover fd-icon-tab-bar__popover">
                <div class="fd-popover__control">

                    <div class="fd-icon-tab-bar__button-container">
                        <button class="fd-button fd-button--transparent fd-icon-tab-bar__button is-hover">
                            <i class="sap-icon--slim-arrow-down"></i>
                        </button>
                    </div>
                </div>
            </div>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
            <a role="tab" class="fd-icon-tab-bar__tab is-focus" href="#" id="tab5">
                <span class="fd-icon-tab-bar__tag">Section 6 (focus)</span>
            </a>
            <div class="fd-popover fd-icon-tab-bar__popover">
                <div class="fd-popover__control">
                    <div class="fd-icon-tab-bar__button-container">
                        <button class="fd-button fd-button--transparent fd-icon-tab-bar__button is-focus">
                            <i class="sap-icon--slim-arrow-down"></i>
                        </button>
                    </div>
                </div>
            </div>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
            <a role="tab" class="fd-icon-tab-bar__tab" aria-selected="true" href="#" id="tab5b">
                <span class="fd-icon-tab-bar__tag">Section 7 (selected, btn hover)</span>
            </a>
            <div class="fd-popover fd-icon-tab-bar__popover">
                <div class="fd-popover__control">
                    <div class="fd-icon-tab-bar__button-container">
                        <button class="fd-button fd-button--transparent fd-icon-tab-bar__button is-hover">
                            <i class="sap-icon--slim-arrow-down"></i>
                        </button>
                    </div>
                </div>
            </div>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
            <a role="tab" class="fd-icon-tab-bar__tab" aria-selected="true" href="#" id="tab5c">
                <span class="fd-icon-tab-bar__tag">Section 8 (selected)</span>
            </a>
            <div class="fd-popover fd-icon-tab-bar__popover">
                <div class="fd-popover__control">
                    <div class="fd-icon-tab-bar__button-container">
                        <button class="fd-button fd-button--transparent fd-icon-tab-bar__button">
                            <i class="sap-icon--slim-arrow-down"></i>
                        </button>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</div>
```

### Badges

The Tab attention badge is applied as a visual eye-catcher to indicate a change within a Tab. <br>The badge is a span element with \

```html
<div class="fd-icon-tab-bar">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section11" id="tab1">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section12" aria-selected="true" id="tab2">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section13" id="tab3">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
    </ul>
</div>

<div class="fd-icon-tab-bar">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--positive">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section21" aria-selected="true" id="tab4">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--negative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section22" aria-selected="true" id="tab5">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--critical">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section23" aria-selected="true" id="tab6">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--informative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section24" aria-selected="true" id="tab7">
                <span class="fd-icon-tab-bar__tag">Section 4</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
    </ul>
</div>

<div class="fd-icon-tab-bar fd-icon-tab-bar--counters">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--positive">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section41" id="tab8">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--negative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section42" aria-selected="true" id="tab9">
                <span class="fd-icon-tab-bar__counter">23</span>
                <span class="fd-icon-tab-bar__tag">Section 2</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--critical">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section43" id="tab10">
                <span class="fd-icon-tab-bar__counter">10</span>
                <span class="fd-icon-tab-bar__tag">Section 3</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--informative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section44" id="tab11">
                <span class="fd-icon-tab-bar__counter">10</span>
                <span class="fd-icon-tab-bar__tag">Section 4</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
    </ul>
</div>
<div class="fd-icon-tab-bar fd-icon-tab-bar--icon-only">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--positive">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab12">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--history" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__badge"></span>
                    <span class="fd-icon-tab-bar__counter">2</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--negative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab13">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--card" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__badge"></span>
                    <span class="fd-icon-tab-bar__counter">23</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--critical">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab14">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--cart" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__badge"></span>
                    <span class="fd-icon-tab-bar__counter">10</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--informative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab15">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--cart" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__badge"></span>
                    <span class="fd-icon-tab-bar__counter">10</span>
                </div>
            </a>
        </li>
    </ul>
</div>
```

### Responsive Paddings

For an Icon Tab Bar with responsive paddings that adjust based on the screen size add the `fd-icon-tab-bar--responsive-paddings` modifier class.

```html
<div class="fd-icon-tab-bar fd-icon-tab-bar--responsive-paddings">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section11" id="tab1">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section12" aria-selected="true" id="tab2">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section13" id="tab3">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
    </ul>
</div>
```

### Responsive Paddings

For an Icon Tab Bar with responsive paddings that adjust based on the screen size add the `fd-icon-tab-bar--responsive-paddings` modifier class.

```html
<h4>SM (1rem) paddings</h4>
<div class="fd-icon-tab-bar fd-icon-tab-bar--sm">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab1">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab2">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
    </ul>
</div>
<h4>MD (2rem) paddings</h4>
<div class="fd-icon-tab-bar fd-icon-tab-bar--md">
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
    </ul>
</div>
<h4>LG (2rem) paddings</h4>
<div class="fd-icon-tab-bar fd-icon-tab-bar--lg">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab7">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab8">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab9">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
    </ul>
</div>
<h4>XL (3rem) paddings</h4>
<div class="fd-icon-tab-bar fd-icon-tab-bar--xl">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab13">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab14">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab15">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
    </ul>
</div>
<h4>XXL (3rem) paddings</h4>
<div class="fd-icon-tab-bar fd-icon-tab-bar--xxl">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab16">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab17">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab18">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
    </ul>
</div>
```

### Navigation Icon Tab Bar (Shell Navigation)

The Navigation Tab Bar is the main/default navigation displayed on the SAP launchpad home page. It offers the user an easy access to multiple pages per space. The background color of the Shell Navigation is connected the Home/Shell Header to properly differentiate the global shell navigation versus any application specific navigation. The Navigation Bar snaps to top and remains visible while scrolling. It is not visible in App view. <br>The implementation is based on UniversalIconTabBar with some different color parameters that are specific to Shell Bar. <br>If there are more Tabs than the screen can accommodate, the remaining Tabs move into an Overflow.

```html
<h4>With Overflow</h4>
<div class="fd-icon-tab-bar fd-icon-tab-bar--sm fd-icon-tab-bar--navigation">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab1">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab2">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--overflow">
            <button class="fd-icon-tab-bar__overflow">
                <span class="fd-icon-tab-bar__overflow-text">More</span>
                <i class="sap-icon--slim-arrow-down" role="presentation"></i>
            </button>
        </li>
    </ul>
</div>

<h4>With Multi Click Area</h4>
<div class="fd-icon-tab-bar fd-icon-tab-bar--navigation fd-icon-tab-bar--md">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tabA1">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
            <a role="tab" class="fd-icon-tab-bar__tab" id="tabA2" tabindex="0">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>

            <div class="fd-popover fd-icon-tab-bar__popover">
                <div class="fd-popover__control">
                    <div class="fd-icon-tab-bar__button-container">
                        <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-controls="popoverAO4" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverAO4');" aria-label="open menu button">
                            <i class="sap-icon--slim-arrow-down"></i>
                        </button>
                    </div>
                </div>
                <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" aria-hidden="false" id="popoverAO4">
                    <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
                        <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                            <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                <span class="fd-list__title">Subsection 1</span>
                            </a>
                        </li>
                        <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                            <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                <span class="fd-list__title">Subsection 2</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tabA3">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
            <a role="tab" class="fd-icon-tab-bar__tab" id="tabA4" tabindex="0">
                <span class="fd-icon-tab-bar__tag">Section 4</span>
            </a>

            <div class="fd-popover fd-icon-tab-bar__popover">
                <div class="fd-popover__control">
                    <div class="fd-icon-tab-bar__button-container">
                        <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-controls="popoverAaC" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverAaC');" aria-label="open menu button">
                            <i class="sap-icon--slim-arrow-down"></i>
                        </button>
                    </div>
                </div>
            </div>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tabA5">
                <span class="fd-icon-tab-bar__tag">Section 5</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
            <a role="tab" class="fd-icon-tab-bar__tab" aria-selected="true" id="tabA6" tabindex="0">
                <span class="fd-icon-tab-bar__tag">Section 6</span>
            </a>

            <div class="fd-popover fd-icon-tab-bar__popover">
                <div class="fd-popover__control">
                    <div class="fd-icon-tab-bar__button-container">
                        <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-controls="popoverAa1" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverAa1');" aria-label="open menu button">
                            <i class="sap-icon--slim-arrow-down"></i>
                        </button>
                    </div>
                </div>
            </div>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab6">
                <span class="fd-icon-tab-bar__tag">Section 7</span>
            </a>
        </li>
    </ul>
</div>

<h4>With Single Click Area</h4>
<div class="fd-icon-tab-bar fd-icon-tab-bar--navigation fd-icon-tab-bar--xl">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab7">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--single-click">
            <div class="fd-popover">
                <div class="fd-popover__control">
                    <a role="tab" class="fd-icon-tab-bar__tab" aria-selected="true" id="tab8" tabindex="0" aria-controls="popoverAO5" aria-expanded="true" aria-haspopup="true" onclick="onPopoverClick('popoverAO5');">
                        <div class="fd-icon-tab-bar__tab-container">
                            <span class="fd-icon-tab-bar__tag">Section 2</span>
                            <span class="fd-icon-tab-bar__arrow">
                                <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                            </span>
                        </div>
                    </a>
                </div>
                <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" aria-hidden="false" id="popoverAO5">
                    <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
                        <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                            <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                <span class="fd-list__title">Subsection 1</span>
                            </a>
                        </li>
                        <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                            <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                <span class="fd-list__title">Subsection 2</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab9">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--single-click">
            <div class="fd-popover">
                <div class="fd-popover__control">
                    <a role="tab" class="fd-icon-tab-bar__tab" id="tab10" tabindex="0" aria-expanded="true" aria-haspopup="true">
                        <div class="fd-icon-tab-bar__tab-container">
                            <span class="fd-icon-tab-bar__tag">Section 4</span>
                            <span class="fd-icon-tab-bar__arrow">
                                <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </li>
    </ul>
</div>
```

### Flat Navigation

The Flat Navigation offers the user an easy access to multiple pages per space. As the ShellNavigation (Fiori 3), the Flat Navigation is the main/default navigation displayed on the SAP Fiori launchpad home page. It snaps to top and remains visible while scrolling and is not visible in App view. <br>The Flat Navigation Concept allows putting all entities of a single space directly into the first level of the Top Level Navigation Bar for direct access. <br>Add the \

```html
<div class="fd-icon-tab-bar fd-icon-tab-bar--navigation fd-icon-tab-bar--navigation-flat fd-icon-tab-bar--md">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab11">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click fd-icon-tab-bar__item--with-separator">
            <a role="tab" class="fd-icon-tab-bar__tab" aria-selected="true" id="tab12" tabindex="0">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>

            <div class="fd-popover fd-icon-tab-bar__popover">
                <div class="fd-popover__control">
                    <div class="fd-icon-tab-bar__button-container">
                        <button class="fd-button fd-button--transparent  fd-icon-tab-bar__button" aria-label="open menu button">
                            <i class="sap-icon--slim-arrow-down"></i>
                        </button>
                    </div>
                </div>
            </div>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--with-separator">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab13">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab14">
                <span class="fd-icon-tab-bar__tag">Section 4</span>
            </a>
        </li>
    </ul>
</div>
```

### Tabs drag and drop

You can allow users to rearrange the tab order. If this feature is enabled, users can drag and drop tabs to reorder them, either directly on the tab bar or inside the overflow menu. It is also possible to drag and drop tabs from the tab bar to the overflow menu and vice versa. <br>There're 4 classes for drag and drop: 
<br>use \

```html
<div class="fd-icon-tab-bar">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--dnd-separator-end">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section1-1" id="tab1-1">
                <span class="fd-icon-tab-bar__tag">Insert After Item</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section1-2" aria-selected="true" id="tab1-2">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section1-3" id="tab1-3">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--dnd-separator">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section1-4" id="tab1-4">
                <span class="fd-icon-tab-bar__tag">Insert Before Item</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section1-5" id="tab1-5">
                <span class="fd-icon-tab-bar__tag">Section 5</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--dnd-preview">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section1-6" id="tab1-6">
                <span class="fd-icon-tab-bar__tag">Being dragged preview</span>
            </a>
        </li>
    </ul>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section1-1" aria-labelledby="tab1">
        Section 1
    </section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section1-2" aria-labelledby="tab2" hidden>
        Section 2
    </section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section1-3" aria-labelledby="tab3" hidden>
        Section 3
    </section>
</div>

<div class="fd-icon-tab-bar">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section2-1" id="tab2-1">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section2-2" aria-selected="true" id="tab2-2">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--dnd-hovered">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section2-3" id="tab2-3">
                <span class="fd-icon-tab-bar__tag">Insert Into Item</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section2-4" id="tab2-4">
                <span class="fd-icon-tab-bar__tag">Section 4</span>
            </a>
        </li>
    </ul>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section2-1" aria-labelledby="tab1">
        Section 1
    </section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section2-2" aria-labelledby="tab2" hidden>
        Section 2
    </section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section2-3" aria-labelledby="tab3" hidden>
        Section 3
    </section>
</div>

<div class="fd-icon-tab-bar">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section3-1" id="tab3-1">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section3-2" aria-selected="true" id="tab3-2">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3-3">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
            <a role="tab" class="fd-icon-tab-bar__tab" aria-selected="true" id="tab3-4" tabindex="0">
                <span class="fd-icon-tab-bar__tag">Section 4</span>
            </a>

            <div class="fd-popover fd-icon-tab-bar__popover">
                <div class="fd-popover__control">
                    <div class="fd-icon-tab-bar__button-container">
                        <button class="fd-button fd-button--transparent  fd-icon-tab-bar__button" aria-controls="popover3" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popover3');" aria-label="open menu button">
                            <i class="sap-icon--slim-arrow-down"></i>
                        </button>
                    </div>
                </div>
                <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" aria-hidden="false" id="popover3">
                    <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
                        <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                            <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                <span class="fd-list__title">Subsection 1</span>
                            </a>
                        </li>
                        <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item fd-icon-tab-bar__item--dnd-separator">
                            <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                <span class="fd-list__title">Insert Before Subsection</span>
                            </a>
                        </li>
                        <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                            <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                <span class="fd-list__title">Subsection 3</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3-5">
                <span class="fd-icon-tab-bar__tag">Section 5</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section3-4" id="tab3-6">
                <span class="fd-icon-tab-bar__tag">Section 6</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
            <a role="tab" class="fd-icon-tab-bar__tab" aria-selected="true" id="tab3-7" tabindex="0">
                <span class="fd-icon-tab-bar__tag">Section 7</span>
            </a>

            <div class="fd-popover fd-icon-tab-bar__popover">
                <div class="fd-popover__control">
                    <div class="fd-icon-tab-bar__button-container">
                        <button class="fd-button fd-button--transparent  fd-icon-tab-bar__button" aria-controls="popover4" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverAO4');" aria-label="open menu button">
                            <i class="sap-icon--slim-arrow-down"></i>
                        </button>
                    </div>
                </div>
                <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" aria-hidden="false" id="popover4">
                    <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
                        <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                            <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                <span class="fd-list__title">Subsection 1</span>
                            </a>
                        </li>
                        <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item fd-icon-tab-bar__item--dnd-separator-end">
                            <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                <span class="fd-list__title">Insert After Subsection</span>
                            </a>
                        </li>
                        <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                            <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                <span class="fd-list__title">Subsection 3</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    </ul>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section3-1" aria-labelledby="tab1">
        Section 1
    </section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section3-2" aria-labelledby="tab2" hidden>
        Section 2
    </section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section3-3" aria-labelledby="tab3" hidden>
        Section 3
    </section>
</div>

<div class="fd-icon-tab-bar">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section4-1" id="tab4-1">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section4-2" aria-selected="true" id="tab4-2">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab4-3">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
            <a role="tab" class="fd-icon-tab-bar__tab" aria-selected="true" id="tab4-4" tabindex="0">
                <span class="fd-icon-tab-bar__tag">Section 4</span>
            </a>

            <div class="fd-popover fd-icon-tab-bar__popover">
                <div class="fd-popover__control">
                    <div class="fd-icon-tab-bar__button-container">
                        <button class="fd-button fd-button--transparent  fd-icon-tab-bar__button" aria-controls="popoverAO4" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverAO4');" aria-label="open menu button">
                            <i class="sap-icon--slim-arrow-down"></i>
                        </button>
                    </div>
                </div>
                <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" aria-hidden="false" id="popoverAO4">
                    <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
                        <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                            <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                <span class="fd-list__title">Subsection 1</span>
                            </a>
                        </li>
                        <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item fd-icon-tab-bar__item--dnd-hovered">
                            <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                <span class="fd-list__title">Insert Into Subsection</span>
                            </a>
                        </li>
                        <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                            <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                <span class="fd-list__title">Subsection 3</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section4-4" id="tab4-5">
                <span class="fd-icon-tab-bar__tag">Section 5</span>
            </a>
        </li>
    </ul>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section1" aria-labelledby="tab1">
        Section 1
    </section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section2" aria-labelledby="tab2" hidden>
        Section 2
    </section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section3" aria-labelledby="tab3" hidden>
        Section 3
    </section>
</div>
```

### Closable Tabs

For closable tabs add the \

```html
<h4>Text Only</h4>
<div class="fd-icon-tab-bar">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--closable">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section1" id="tab1">
                <span class="fd-icon-tab-bar__tag">Info</span>
            </a>
            <div class="fd-icon-tab-bar__button-container">
                <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--closable">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section2" aria-selected="true" id="tab2">
                <span class="fd-icon-tab-bar__tag">Attachments (16)</span>
            </a>
            <div class="fd-icon-tab-bar__button-container">
                <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--closable">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section3" id="tab3">
                <span class="fd-icon-tab-bar__tag">Approvals (42)</span>
            </a>
            <div class="fd-icon-tab-bar__button-container">
                <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--closable">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section4" id="tab4">
                <span class="fd-icon-tab-bar__tag">Tab (btn hover)</span>
            </a>
            <div class="fd-icon-tab-bar__button-container">
                <button
                    class="fd-button fd-button--transparent fd-icon-tab-bar__button is-hover"
                    aria-label="close tab"
                    >
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--closable">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section4" id="tab5">
                <span class="fd-icon-tab-bar__tag">Tab (btn down with focus)</span>
            </a>
            <div class="fd-icon-tab-bar__button-container">
                <button
                    class="fd-button fd-button--transparent fd-icon-tab-bar__button is-focus is-active"
                    aria-label="close tab"
                    >
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </li>
    </ul>
</div>

<h4>Icon</h4>
<div class="fd-icon-tab-bar fd-icon-tab-bar--icon">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--closable">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="1">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--filter" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
            <div class="fd-icon-tab-bar__button-container">
                <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </li>
        <li
            role="presentation"
            class="fd-icon-tab-bar__item fd-icon-tab-bar__item--positive fd-icon-tab-bar__item--closable"
            >
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab7">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--play" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
            <div class="fd-icon-tab-bar__button-container">
                <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </li>
        <li
            role="presentation"
            class="fd-icon-tab-bar__item fd-icon-tab-bar__item--negative fd-icon-tab-bar__item--closable"
            >
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab8">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--unfavorite" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
            <div class="fd-icon-tab-bar__button-container">
                <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </li>
        <li
            role="presentation"
            class="fd-icon-tab-bar__item fd-icon-tab-bar__item--critical fd-icon-tab-bar__item--closable"
            >
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab9">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--shipping-status" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
            <div class="fd-icon-tab-bar__button-container">
                <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </li>
    </ul>
</div>

<h4>Icon Only</h4>
<div class="fd-icon-tab-bar fd-icon-tab-bar--icon-only">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--closable">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section1" id="tab1">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--account" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">2</span>
                </div>
            </a>
            <div class="fd-icon-tab-bar__button-container">
                <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--closable">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section2" aria-selected="true" id="tab2">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--product" role="presentation"></i>
                    </span>
                </div>
            </a>
            <div class="fd-icon-tab-bar__button-container">
                <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--closable">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section3" id="tab3">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--present" role="presentation"></i>
                    </span>
                </div>
            </a>
            <div class="fd-icon-tab-bar__button-container">
                <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </li>
    </ul>
</div>

<h4>Single Click Area</h4>
<div class="fd-icon-tab-bar">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li
            role="presentation"
            class="fd-icon-tab-bar__item fd-icon-tab-bar__item--single-click fd-icon-tab-bar__item--closable"
            >
            <div class="fd-popover">
                <div class="fd-popover__control">
                    <a
                        role="tab"
                        class="fd-icon-tab-bar__tab"
                        aria-selected="true"
                        id="tab8"
                        tabindex="0"
                        aria-controls="popoverITB1"
                        aria-expanded="true"
                        aria-haspopup="true"
                        onclick="onPopoverClick('popoverITB1');"
                        >
                        <div class="fd-icon-tab-bar__tab-container">
                            <span class="fd-icon-tab-bar__tag">Section 1</span>
                            <span class="fd-icon-tab-bar__arrow">
                                <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                            </span>
                        </div>
                    </a>
                </div>
                <div
                    class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body"
                    aria-hidden="false"
                    id="popoverITB1"
                    >
                    <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
                        <li
                            tabindex="-1"
                            role="listitem"
                            aria-level="1"
                            class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item fd-icon-tab-bar__list-item--closable"
                            >
                            <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                <span class="fd-list__title">Subsection 1</span>
                            </a>
                            <div class="fd-icon-tab-bar__button-container">
                                <button
                                    class="fd-button fd-button--transparent fd-icon-tab-bar__button"
                                    aria-label="close tab"
                                    >
                                    <i class="sap-icon--decline"></i>
                                </button>
                            </div>
                        </li>
                        <li
                            tabindex="-1"
                            role="listitem"
                            aria-level="2"
                            class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item fd-icon-tab-bar__list-item--closable"
                            >
                            <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                <span class="fd-list__title">Subsection 1.1</span>
                            </a>
                            <div class="fd-icon-tab-bar__button-container">
                                <button
                                    class="fd-button fd-button--transparent fd-icon-tab-bar__button"
                                    aria-label="close tab"
                                    >
                                    <i class="sap-icon--decline"></i>
                                </button>
                            </div>
                        </li>
                        <li
                            tabindex="-1"
                            role="listitem"
                            aria-level="1"
                            class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item fd-icon-tab-bar__list-item--closable"
                            >
                            <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                <span class="fd-list__title">Subsection 2</span>
                            </a>
                            <div class="fd-icon-tab-bar__button-container">
                                <button
                                    class="fd-button fd-button--transparent fd-icon-tab-bar__button"
                                    aria-label="close tab"
                                    >
                                    <i class="sap-icon--decline"></i>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="fd-icon-tab-bar__button-container">
                <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </li>
        <li
            role="presentation"
            class="fd-icon-tab-bar__item fd-icon-tab-bar__item--single-click fd-icon-tab-bar__item--closable"
            >
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab2single">
                <div class="fd-icon-tab-bar__tab-container">
                    <span class="fd-icon-tab-bar__tag">Section 2</span>
                    <span class="fd-icon-tab-bar__arrow">
                        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                    </span>
                </div>
            </a>
            <div class="fd-icon-tab-bar__button-container">
                <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </li>
    </ul>

    <h4>Multi Click Area</h4>
    <div class="fd-icon-tab-bar">
        <ul role="tablist" class="fd-icon-tab-bar__header">
            <li
                role="presentation"
                class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click fd-icon-tab-bar__item--closable"
                >
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab1multi">
                    <span class="fd-icon-tab-bar__tag">Section 1</span>
                </a>
                <div class="fd-popover fd-icon-tab-bar__popover">
                    <div class="fd-popover__control">
                        <div class="fd-icon-tab-bar__button-container">
                            <button class="fd-button fd-button--transparent fd-icon-tab-bar__button">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="fd-icon-tab-bar__button-container">
                    <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </li>
            <li
                role="presentation"
                class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click fd-icon-tab-bar__item--closable"
                >
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3multi">
                    <span class="fd-icon-tab-bar__tag">Section 2</span>
                </a>
                <div class="fd-popover fd-icon-tab-bar__popover">
                    <div class="fd-popover__control">
                        <div class="fd-icon-tab-bar__button-container">
                            <button class="fd-button fd-button--transparent fd-icon-tab-bar__button">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="fd-icon-tab-bar__button-container">
                    <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </li>
            <li
                role="presentation"
                class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click fd-icon-tab-bar__item--closable"
                >
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3multi" aria-selected="true">
                    <span class="fd-icon-tab-bar__tag">Section 3</span>
                </a>
                <div class="fd-popover fd-icon-tab-bar__popover">
                    <div class="fd-popover__control">
                        <div class="fd-icon-tab-bar__button-container">
                            <button class="fd-button fd-button--transparent fd-icon-tab-bar__button">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="fd-icon-tab-bar__button-container">
                    <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </li>
        </ul>
    </div>

    <h4>Overflow</h4>

    <div class="fd-icon-tab-bar fd-icon-tab-bar--icon">
        <ul role="tablist" class="fd-icon-tab-bar__header">
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--closable">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="1">
                    <div class="fd-icon-tab-bar__container">
                        <span class="fd-icon-tab-bar__icon">
                            <i class="sap-icon--filter" role="presentation"></i>
                        </span>
                    </div>
                    <div class="fd-icon-tab-bar__details">
                        <span class="fd-icon-tab-bar__label">Description</span>
                    </div>
                </a>
                <div class="fd-icon-tab-bar__button-container">
                    <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </li>
            <li
                role="presentation"
                class="fd-icon-tab-bar__item fd-icon-tab-bar__item--positive fd-icon-tab-bar__item--closable"
                >
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab7">
                    <div class="fd-icon-tab-bar__container">
                        <span class="fd-icon-tab-bar__icon">
                            <i class="sap-icon--play" role="presentation"></i>
                        </span>
                    </div>
                    <div class="fd-icon-tab-bar__details">
                        <span class="fd-icon-tab-bar__counter">2</span>
                        <span class="fd-icon-tab-bar__label">Description</span>
                    </div>
                </a>
                <div class="fd-icon-tab-bar__button-container">
                    <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </li>
            <li
                role="presentation"
                class="fd-icon-tab-bar__item fd-icon-tab-bar__item--negative fd-icon-tab-bar__item--closable"
                >
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab8">
                    <div class="fd-icon-tab-bar__container">
                        <span class="fd-icon-tab-bar__icon">
                            <i class="sap-icon--unfavorite" role="presentation"></i>
                        </span>
                    </div>
                    <div class="fd-icon-tab-bar__details">
                        <span class="fd-icon-tab-bar__counter">2</span>
                        <span class="fd-icon-tab-bar__label">Description</span>
                    </div>
                </a>
                <div class="fd-icon-tab-bar__button-container">
                    <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </li>
            <li
                role="presentation"
                class="fd-icon-tab-bar__item fd-icon-tab-bar__item--critical fd-icon-tab-bar__item--closable"
                >
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab9">
                    <div class="fd-icon-tab-bar__container">
                        <span class="fd-icon-tab-bar__icon">
                            <i class="sap-icon--shipping-status" role="presentation"></i>
                        </span>
                    </div>
                    <div class="fd-icon-tab-bar__details">
                        <span class="fd-icon-tab-bar__counter">2</span>
                        <span class="fd-icon-tab-bar__label">Description</span>
                    </div>
                </a>
                <div class="fd-icon-tab-bar__button-container">
                    <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </li>

            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--overflow">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <button class="fd-icon-tab-bar__overflow is-active">
                            <span class="fd-icon-tab-bar__overflow-text">More</span>
                            <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                        </button>
                    </div>
                    <div
                        class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body"

                        >
                        <ul role="list" class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list">
                            <li
                                role="listitem"
                                tabindex="-1"
                                class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item fd-icon-tab-bar__list-item--informative fd-icon-tab-bar__list-item--closable"
                                >
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-icon-tab-bar__list-item-icon-container">
                                        <span class="fd-list__icon fd-icon-tab-bar__list-item-icon">
                                            <i class="sap-icon--letter" role="presentation"></i>
                                        </span>
                                    </span>
                                    <span class="fd-list__title fd-icon-tab-bar__list-item-title">Description</span>
                                    <span class="fd-list__counter fd-icon-tab-bar__list-item-counter">(12)</span>
                                </a>
                                <div class="fd-icon-tab-bar__button-container">
                                    <button
                                        class="fd-button fd-button--transparent fd-icon-tab-bar__button"
                                        aria-label="close tab"
                                        >
                                        <i class="sap-icon--decline"></i>
                                    </button>
                                </div>
                            </li>
                            <li
                                role="listitem"
                                tabindex="-1"
                                class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item fd-icon-tab-bar__list-item--closable"
                                >
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-icon-tab-bar__list-item-icon-container">
                                        <span class="fd-list__icon fd-icon-tab-bar__list-item-icon">
                                            <i class="sap-icon--activate" role="presentation"></i>
                                        </span>
                                    </span>
                                    <span class="fd-list__title fd-icon-tab-bar__list-item-title">Description</span>
                                    <span class="fd-list__counter fd-icon-tab-bar__list-item-counter">(227)</span>
                                </a>
                                <div class="fd-icon-tab-bar__button-container">
                                    <button
                                        class="fd-button fd-button--transparent fd-icon-tab-bar__button"
                                        aria-label="close tab"
                                        >
                                        <i class="sap-icon--decline"></i>
                                    </button>
                                </div>
                            </li>
                            <li
                                role="listitem"
                                tabindex="-1"
                                class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item fd-icon-tab-bar__list-item--positive fd-icon-tab-bar__list-item--closable"
                                >
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-icon-tab-bar__list-item-icon-container">
                                        <span class="fd-list__icon fd-icon-tab-bar__list-item-icon">
                                            <i class="sap-icon--jam" role="presentation"></i>
                                        </span>
                                    </span>
                                    <span class="fd-list__title fd-icon-tab-bar__list-item-title">Description</span>
                                    <span class="fd-list__counter fd-icon-tab-bar__list-item-counter">(0)</span>
                                </a>
                                <div class="fd-icon-tab-bar__button-container">
                                    <button
                                        class="fd-button fd-button--transparent fd-icon-tab-bar__button"
                                        aria-label="close tab"
                                        >
                                        <i class="sap-icon--decline"></i>
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/icon-tab-bar/icon-tab-bar.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
