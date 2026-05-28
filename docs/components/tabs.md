---
component: fd-tabs
title: Deprecated/Components/Tabs
category: Deprecated
selector: fd-tabs
cssFile: tabs.css
sourcePath: packages/styles/stories/Deprecated/Components/tabs/tabs.stories.js
tags: ["deprecated"]
dependencies: []
relatedComponents: []
stability: deprecated
generatedAt: 2026-05-28T20:12:00.455Z
---

# Deprecated/Components/Tabs

> **⚠️ DEPRECATED**: This component is deprecated and should not be used in new projects.

Tabs are based on the folder metaphor and used to separate content into different sections. Tabs should be ordered based on priority to create visual hierarchy.
    
## DEPRECATED

This component is deprecated. Please use the *Icon Tab Bar* component instead.

## Usage
**Use tabs if:**

- Your business objects need to show multiple facets at the same time.
- You want to allow the user to browse through these facets.
- You need a prominent or very visual filter on top of a list.
- You have clear-cut process steps that need to be visualized.


**Do not use tabs if:**

- You plan to use only one single tab.


## Horizontal padding

By default, tabs have no horizontal paddings. If horizontal paddings are added, they should behave responsively based on the screen width.

These modifier classes are used to display horizontal padding for tabs in various sizes.

| rem&nbsp;&nbsp; | Min-width&nbsp;&nbsp; | Max-width&nbsp;&nbsp; | Modifier class |
| ---- | ---------- | ---------- | ----------- |
| 1rem&nbsp;&nbsp; | _n/a_ | 599 px | \

## When Not To Use

- You plan to use only one single tab.

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/tabs.css" rel="stylesheet">

```

## Basic Usage

```html
<ul class="fd-tabs" role="tablist">
    <li role="tab" class="fd-tabs__item" aria-controls="fuCwV550">
        <a class="fd-tabs__link" href="#fuCwV550">
            <span class="fd-tabs__tag">
                Link
            </span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item" aria-selected="true" aria-controls="AiWfz165">
        <a class="fd-tabs__link" href="#AiWfz165">
            <span class="fd-tabs__tag">
                Selected
            </span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item" aria-controls="7ae0T849">
        <a class="fd-tabs__link" href="#7ae0T849">
            <span class="fd-tabs__tag">
                Link
            </span>
        </a>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="fuCwV550" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="AiWfz165" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="7ae0T849" role="tabpanel">
    Nullam ut
</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-tabs--filter` | Tabs can be displayed in filter mode, indicating to the user that a value has been filtered into separate tabs |
| `fd-tabs--icon-only` | Style variant |
| `fd-tabs--l` | By default, tabs are displayed in a bar and are either inactive or active (highlighted in blue) |
| `fd-tabs--process` | Tabs can be displayed in subsequent steps, indicating to the user that there is a process to follow |
| `fd-tabs--s` | By default, tabs are displayed in a bar and are either inactive or active (highlighted in blue) |
| `fd-tabs--xl` | Style variant |

## States

| Class | Description |
|-------|-------------|
| `is-selected` | Selected state |

## BEM Elements

This component uses the following BEM elements:

- `fd-tabs__count`
- `fd-tabs__counter-header`
- `fd-tabs__header`
- `fd-tabs__icon`
- `fd-tabs__item`
- `fd-tabs__item--error`
- `fd-tabs__item--header`
- `fd-tabs__item--information`
- `fd-tabs__item--neutral`
- `fd-tabs__item--success`
- `fd-tabs__item--warning`
- `fd-tabs__label`
- `fd-tabs__link`
- `fd-tabs__overflow`
- `fd-tabs__panel`
- `fd-tabs__process`
- `fd-tabs__process-icon`
- `fd-tabs__separator`
- `fd-tabs__tag`

## Examples

### Default

By default, tabs are displayed in a bar and are either inactive or active (highlighted in blue). The bar can also contain actions that apply to the whole page. The example below illustrates the tabs component in cozy mode with no horizontal padding.

```html
<ul class="fd-tabs" role="tablist">
    <li role="tab" class="fd-tabs__item" aria-controls="fuCwV550">
        <a class="fd-tabs__link" href="#fuCwV550">
            <span class="fd-tabs__tag">
                Link
            </span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item" aria-selected="true" aria-controls="AiWfz165">
        <a class="fd-tabs__link" href="#AiWfz165">
            <span class="fd-tabs__tag">
                Selected
            </span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item" aria-controls="7ae0T849">
        <a class="fd-tabs__link" href="#7ae0T849">
            <span class="fd-tabs__tag">
                Link
            </span>
        </a>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="fuCwV550" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="AiWfz165" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="7ae0T849" role="tabpanel">
    Nullam ut
</div>
```

### Counters

Tabs can be displayed with counters to indicate that there are a number of resources the user can or should access. To display counters, wrap the \

```html
<ul class="fd-tabs fd-tabs--xl" role="tablist">
    <li role="tab" class="fd-tabs__item" aria-controls="d9vOir">
        <a class="fd-tabs__link" href="#d9vOir">
            <p class="fd-tabs__count">13</p>
            <span class="fd-tabs__tag">
                Link
            </span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item" aria-controls="bSj6ft" aria-selected="true">
        <a class="fd-tabs__link" href="#bSj6ft">
            <p class="fd-tabs__count">1</p>
            <span class="fd-tabs__tag">
                Selected
            </span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item" aria-controls="VrHfHi">
        <a class="fd-tabs__link" href="#VrHfHi">
            <p class="fd-tabs__count">97</p>
            <span class="fd-tabs__tag">
                Link
            </span>
        </a>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="d9vOir" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="bSj6ft" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="VrHfHi" role="tabpanel">
    Nullam ut
</div>
```

### Navigable

Tabs can be navigable by applying the \

```html
<nav class="fd-tabs fd-tabs--l" role="navigation">
    <span class="fd-tabs__item" aria-controls="kf8369">
        <a class="fd-tabs__link" href="#kf8369">
            <span class="fd-tabs__tag">
                Link
            </span>
        </a>
    </span>
    <span class="fd-tabs__item is-selected" aria-controls="9uQ282">
        <a class="fd-tabs__link" href="#9uQ282">
            <span class="fd-tabs__tag">
                Selected
            </span>
        </a>
    </span>
    <span class="fd-tabs__item" aria-controls="DGl707">
        <a class="fd-tabs__link" href="#DGl707">
            <span class="fd-tabs__tag">
                Link
            </span>
        </a>
    </span>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</nav>
<div class="fd-tabs__panel" aria-expanded="false" id="kf8369" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="9uQ282" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="DGl707" role="tabpanel">
    Nullam ut
</div>
```

### Icon

Tabs can display icons instead of text with the \

```html
<ul class="fd-tabs fd-tabs--s fd-tabs--icon-only" role="tablist">
    <li role="tab" class="fd-tabs__item" aria-controls="pliA92">
        <a class="fd-tabs__link" href="#pliA92">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">12</p>
            </span>
        </a>
    </li>
    <li role="tab" aria-selected="true" class="fd-tabs__item" aria-controls="ZAN8Hd">
        <a class="fd-tabs__link" href="#ZAN8Hd">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">15</p>
            </span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item" aria-controls="QrQ5Cl">
        <a class="fd-tabs__link" href="#QrQ5Cl">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">1</p>
            </span>
        </a>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="pliA92" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="ZAN8Hd" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="QrQ5Cl" role="tabpanel">
    Nullam ut
</div>
```

### Process mode

Tabs can be displayed in subsequent steps, indicating to the user that there is a process to follow. To display tabs in process mode, add the \

```html
<ul class="fd-tabs fd-tabs--l fd-tabs--process" role="tablist">
    <li role="tab" class="fd-tabs__item" aria-controls="NoQLy6">
        <a class="fd-tabs__link" href="#NoQLy6">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
            </span>
            <div class="fd-tabs__process">
                <span class="fd-tabs__label">58 of 122 items</span>
                <span class="fd-tabs__label">Description</span>
            </div>
        </a>
        <span class="fd-tabs__process-icon"></span>
    </li>
    <li role="tab" class="fd-tabs__item" aria-controls="h4yBDR">
        <a class="fd-tabs__link" href="#h4yBDR">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
            </span>
            <div class="fd-tabs__process">
                <span class="fd-tabs__label">22 of 122 items</span>
                <span class="fd-tabs__label">Description</span>
            </div>
        </a>
        <span class="fd-tabs__process-icon"></span>
    </li>
    <li role="tab" class="fd-tabs__item" aria-controls="nd1EMQ">
        <a class="fd-tabs__link" href="#nd1EMQ">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
            </span>
            <div class="fd-tabs__process">
                <span class="fd-tabs__label">42 of 122 items</span>
                <span class="fd-tabs__label">Description</span>
            </div>
        </a>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-right" role="presentation"></i>
    </button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="NoQLy6" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="h4yBDR" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="nd1EMQ" role="tabpanel">
    Tincidunt nunc
</div>
```

### Filter mode

Tabs can be displayed in filter mode, indicating to the user that a value has been filtered into separate tabs. To display tabs in filter mode, add the \

```html
<ul class="fd-tabs fd-tabs--l fd-tabs--filter" role="tablist">
    <li role="tab" class="fd-tabs__item fd-tabs__item--header" aria-controls="5ZkDVE">
        <a class="fd-tabs__link" href="#5ZkDVE">
            <span class="fd-tabs__header">
                <span class="fd-tabs__counter-header">100</span>
                <span class="fd-tabs__label">products</span>
            </span>
        </a>
    </li>

    <li role="tab" class="fd-tabs__item" aria-controls="znvnwr">
        <a class="fd-tabs__link" href="#znvnwr">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">35</p>
            </span>
            <span class="fd-tabs__label">Description</span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item" aria-controls="oyYpL7">
        <a class="fd-tabs__link" href="#oyYpL7">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">5</p>
            </span>
            <span class="fd-tabs__label">Description</span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item" aria-controls="gRpu9H">
        <a class="fd-tabs__link" href="#gRpu9H">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">60</p>
            </span>
            <span class="fd-tabs__label">Description</span>
        </a>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="5ZkDVE" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="znvnwr" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="oyYpL7" role="tabpanel">
    Nullam ut
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="gRpu9H" role="tabpanel">
    Occaecat cupidatat
</div>
```

### Semantic mode

Tabs can be displayed with semantic colors to indicate a status. To display semantic tabs, add the following modifier classes to the \

```html
<ul class="fd-tabs fd-tabs--l fd-tabs--icon-only" role="tablist">
    <li role="tab" class="fd-tabs__item fd-tabs__item--success" aria-controls="XTsSDD">
        <a class="fd-tabs__link" href="#XTsSDD">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">54</p>
            </span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item fd-tabs__item--warning" aria-selected="true" aria-controls="DomvG6">
        <a class="fd-tabs__link is-selected" href="#DomvG6">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">71</p>
            </span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item fd-tabs__item--information" aria-controls="DqIStt">
        <a class="fd-tabs__link" href="#DqIStt">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">23</p>
            </span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item fd-tabs__item--error" aria-controls="bRCSzS">
        <a class="fd-tabs__link" href="#bRCSzS">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">4</p>
            </span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item fd-tabs__item--neutral" aria-controls="xMN6I9">
        <a class="fd-tabs__link" href="#xMN6I9">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">100</p>
            </span>
        </a>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="XTsSDD" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="DomvG6" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="DqIStt" role="tabpanel">
    Nullam ut
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="bRCSzS" role="tabpanel">
    Quaerat voluptatem
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="xMN6I9" role="tabpanel">
    Occaecat cupidatat
</div>
```

### Semantic filter mode

Tabs can be displayed in filter mode with semantic colors. As detailed in the previous examples, add the \

```html
<ul class="fd-tabs fd-tabs--l fd-tabs--filter" role="tablist">
    <li role="tab" class="fd-tabs__item fd-tabs__item--header" aria-controls="5ZkDVE">
        <a class="fd-tabs__link" href="#5ZkDVE">
            <span class="fd-tabs__header">
                <span class="fd-tabs__counter-header">150</span>
                <span class="fd-tabs__label">products</span>
            </span>
        </a>
    </li>

    <li role="tab" class="fd-tabs__item fd-tabs__item--success" aria-controls="znvnwr">
        <a class="fd-tabs__link" href="#znvnwr">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">35</p>
            </span>
            <span class="fd-tabs__label">Success</span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item fd-tabs__item--warning" aria-controls="oyYpL7">
        <a class="fd-tabs__link" href="#oyYpL7">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">5</p>
            </span>
            <span class="fd-tabs__label">Warning</span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item fd-tabs__item--information" aria-controls="gRpu9H">
        <a class="fd-tabs__link" href="#gRpu9H">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">60</p>
            </span>
            <span class="fd-tabs__label">Information</span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item fd-tabs__item--error" aria-controls="gRpu1A">
        <a class="fd-tabs__link" href="#gRpu1A">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">50</p>
            </span>
            <span class="fd-tabs__label">Error</span>
        </a>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="5ZkDVE" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="znvnwr" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="oyYpL7" role="tabpanel">
    Nullam ut
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="gRpu9H" role="tabpanel">
    Occaecat cupidatat
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="gRpu1A" role="tabpanel">
    Nullam sit
</div>
```

### Semantic inline

Tabs can be displayed with inline text in semantic colors. To display inline text tabs, add the \

```html
<ul class="fd-tabs fd-tabs--l" role="tablist">
    <li role="tab" class="fd-tabs__item fd-tabs__item--error" aria-controls="5abyKZ">
        <a class="fd-tabs__link" href="#5abyKZ">
            <p class="fd-tabs__count">13</p>
            <span class="fd-tabs__tag">
                Error
            </span>
        </a>
    </li>
    <li role="tab" aria-selected="true" class="fd-tabs__item fd-tabs__item--information" aria-controls="wupC7s">
        <a class="fd-tabs__link is-selected" href="#wupC7s">
            <p class="fd-tabs__count">24</p>
            <span class="fd-tabs__tag">
                Information
            </span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item fd-tabs__item--warning" aria-controls="XlKpQM">
        <a class="fd-tabs__link" href="#XlKpQM">
            <p class="fd-tabs__count">31</p>
            <span class="fd-tabs__tag">
                Warning
            </span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item fd-tabs__item--success">
        <a class="fd-tabs__link" aria-controls="3dUJAI" href="#3dUJAI">
            <p class="fd-tabs__count">65</p>
            <span class="fd-tabs__tag">
                Success
            </span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item fd-tabs__item--neutral" aria-controls="TWlAup">
        <a class="fd-tabs__link" href="#TWlAup">
            <p class="fd-tabs__count">159</p>
            <span class="fd-tabs__tag">
                Neutral
            </span>
        </a>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="5abyKZ" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="wupC7s" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="XlKpQM" role="tabpanel">
    Nullam ut
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="3dUJAI" role="tabpanel">
    Tincidunt nunc
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="TWlAup" role="tabpanel">
    Occaecat cupidatat
</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Deprecated/Components/tabs/tabs.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
