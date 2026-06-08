---
component: fd-breadcrumb
title: Components/Breadcrumb
category: Components
selector: fd-breadcrumb
cssFile: breadcrumb.css
sourcePath: packages/styles/stories/Components/breadcrumb/breadcrumb.stories.js
tags: []
dependencies: ["breadcrumb","icon","link","list","popover"]
relatedComponents: ["breadcrumb","icon","link","list","popover"]
stability: stable
generatedAt: 2026-06-08T17:49:01.834Z
---

# Components/Breadcrumb

The breadcrumb component is a type of navigation that indicates the position of a page within the application’s page hierarchy. Users can navigate backward by selecting the previous pages in the navigation path.

##Usage
**Use breadcrumb if:**

- You want to show secondary navigation on the object page
- You want to show navigation in a table
- You want to show navigation in charts
- Use a breadcrumb only when the drilldown scenario leads to related object pages: parent object page / child object page 1 / child object page 2 / child object page 3.

**Do not use breadcrumb if:**

- Your hierarchy contains only one level.

**Do not include these elements in your breadcrumb path:**

- Other floorplans, such as overview pages and list reports
- Cross-application navigation to other object pages
- Independent object pages, such as fact sheets

## Usage Guidelines

**Use breadcrumb if:**

- You want to show secondary navigation on the object page
- You want to show navigation in a table
- You want to show navigation in charts
- Use a breadcrumb only when the drilldown scenario leads to related object pages: parent object page / child object page 1 / child object page 2 / child object page 3.

## When Not To Use

- Your hierarchy contains only one level.

**Do not include these elements in your breadcrumb path:**

- Other floorplans, such as overview pages and list reports
- Cross-application navigation to other object pages
- Independent object pages, such as fact sheets

## Dependencies

This component depends on the following CSS files:

- `breadcrumb.css`
- `icon.css`
- `link.css`
- `list.css`
- `popover.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/breadcrumb.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/breadcrumb.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/link.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/list.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/popover.css" rel="stylesheet">
```

## Basic Usage

```html
<nav aria-label="Breadcrumb Trail">
    <ol class="fd-breadcrumb">
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Root Page 1 of 7"><span class="fd-link__content">Products</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 2 of 7"><span class="fd-link__content">Suppliers</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 3 of 7"><span class="fd-link__content">Titanium</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 4 of 7"><span class="fd-link__content">Ultra Portable</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 5 of 7"><span class="fd-link__content">12 inch</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 6 of 7"><span class="fd-link__content">Super portable deluxe</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <span role="link" aria-current="page" aria-label="Current page 7 of 7">Laptop</span>
        </li>
    </ol>
</nav>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-breadcrumb--backslash` | Style variant |
| `fd-breadcrumb--double-backslash` | Style variant |
| `fd-breadcrumb--double-greater-than` | Style variant |
| `fd-breadcrumb--double-slash` | Style variant |
| `fd-breadcrumb--greater-than` | Style variant |

## BEM Elements

This component uses the following BEM elements:

- `fd-breadcrumb__item`
- `fd-breadcrumb__separator`

## Related Components

This component works with or depends on:

- `breadcrumb`
- `icon`
- `link`
- `list`
- `popover`

## Design Tokens

Key CSS variables used by this component:

- `--backslash`
- `--double-backslash`
- `--double-greater-than`
- `--double-slash`
- `--fdBreadcrumb_Separator`
- `--fdLink_Line_Height`
- `--greater-than`
- `--sapContent_LabelColor`
- `--sapTextColor`

## Examples

### Standard

The standard breadcrumb component displays several pages in text format separated by dividers, indicating a navigation path. Each page can be specifically selected to navigate to its corresponding page. It can be displayed by using the `fd-breadcrumb` class.

```html
<nav aria-label="Breadcrumb Trail">
    <ol class="fd-breadcrumb">
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Root Page 1 of 7"><span class="fd-link__content">Products</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 2 of 7"><span class="fd-link__content">Suppliers</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 3 of 7"><span class="fd-link__content">Titanium</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 4 of 7"><span class="fd-link__content">Ultra Portable</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 5 of 7"><span class="fd-link__content">12 inch</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 6 of 7"><span class="fd-link__content">Super portable deluxe</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <span role="link" aria-current="page" aria-label="Current page 7 of 7">Laptop</span>
        </li>
    </ol>
</nav>
```

### Styles

Separator between the links can be configured with modifier classes added to the main \

```html
<h4>Slash (default)</h4>
<nav aria-label="Breadcrumb Trail">
    <ol class="fd-breadcrumb">
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Root Page 1 of 7"><span class="fd-link__content">Products</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 2 of 7"><span class="fd-link__content">Suppliers</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 3 of 7"><span class="fd-link__content">Titanium</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 4 of 7"><span class="fd-link__content">Ultra Portable</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 5 of 7"><span class="fd-link__content">12 inch</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 6 of 7"><span class="fd-link__content">Super portable deluxe</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <span role="link" aria-current="page" aria-label="Current page 7 of 7">Laptop</span>
        </li>
    </ol>
</nav>

<h4>Backslash</h4>
<nav aria-label="Breadcrumb Trail">
    <ol class="fd-breadcrumb fd-breadcrumb--backslash">
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Root Page 1 of 7"><span class="fd-link__content">Products</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 2 of 7"><span class="fd-link__content">Suppliers</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 3 of 7"><span class="fd-link__content">Titanium</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 4 of 7"><span class="fd-link__content">Ultra Portable</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 5 of 7"><span class="fd-link__content">12 inch</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 6 of 7"><span class="fd-link__content">Super portable deluxe</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <span role="link" aria-current="page" aria-label="Current page 7 of 7">Laptop</span>
        </li>
    </ol>
</nav>

<h4>Double slash</h4>
<nav aria-label="Breadcrumb Trail">
    <ol class="fd-breadcrumb fd-breadcrumb--double-slash">
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Root Page 1 of 7"><span class="fd-link__content">Products</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 2 of 7"><span class="fd-link__content">Suppliers</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 3 of 7"><span class="fd-link__content">Titanium</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 4 of 7"><span class="fd-link__content">Ultra Portable</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 5 of 7"><span class="fd-link__content">12 inch</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 6 of 7"><span class="fd-link__content">Super portable deluxe</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <span role="link" aria-current="page" aria-label="Current page 7 of 7">Laptop</span>
        </li>
    </ol>
</nav>

<h4>Double backslash</h4>
<nav aria-label="Breadcrumb Trail">
    <ol class="fd-breadcrumb fd-breadcrumb--double-backslash">
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Root Page 1 of 7"><span class="fd-link__content">Products</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 2 of 7"><span class="fd-link__content">Suppliers</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 3 of 7"><span class="fd-link__content">Titanium</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 4 of 7"><span class="fd-link__content">Ultra Portable</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 5 of 7"><span class="fd-link__content">12 inch</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 6 of 7"><span class="fd-link__content">Super portable deluxe</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <span role="link" aria-current="page" aria-label="Current page 7 of 7">Laptop</span>
        </li>
    </ol>
</nav>

<h4>Greater than</h4>
<nav aria-label="Breadcrumb Trail">
    <ol class="fd-breadcrumb fd-breadcrumb--greater-than">
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Root Page 1 of 7"><span class="fd-link__content">Products</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 2 of 7"><span class="fd-link__content">Suppliers</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 3 of 7"><span class="fd-link__content">Titanium</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 4 of 7"><span class="fd-link__content">Ultra Portable</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 5 of 7"><span class="fd-link__content">12 inch</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 6 of 7"><span class="fd-link__content">Super portable deluxe</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <span role="link" aria-current="page" aria-label="Current page 7 of 7">Laptop</span>
        </li>
    </ol>
</nav>

<h4>Double greater than</h4>
<nav aria-label="Breadcrumb Trail">
    <ol class="fd-breadcrumb fd-breadcrumb--double-greater-than">
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Root Page 1 of 7"><span class="fd-link__content">Products</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 2 of 7"><span class="fd-link__content">Suppliers</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 3 of 7"><span class="fd-link__content">Titanium</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 4 of 7"><span class="fd-link__content">Ultra Portable</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 5 of 7"><span class="fd-link__content">12 inch</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 6 of 7"><span class="fd-link__content">Super portable deluxe</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <span role="link" aria-current="page" aria-label="Current page 7 of 7">Laptop</span>
        </li>
    </ol>
</nav>
```

### CurrentItem

The Breadcrumbs component offers two visual styles for the last item: as a

```html
<nav aria-label="Breadcrumb Trail">
    <ol class="fd-breadcrumb">
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Root Page 1 of 7"><span class="fd-link__content">Products</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 2 of 7"><span class="fd-link__content">Suppliers</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 3 of 7"><span class="fd-link__content">Titanium</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 4 of 7"><span class="fd-link__content">Ultra Portable</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 5 of 7"><span class="fd-link__content">12 inch</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 6 of 7"><span class="fd-link__content">Super portable deluxe</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <span role="link" aria-current="page" aria-label="Current page 7 of 7">Laptop</span>
        </li>
    </ol>
</nav>
<nav aria-label="Breadcrumb Trail">
    <ol class="fd-breadcrumb">
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Root Page 1 of 7"><span class="fd-link__content">Products</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 2 of 7"><span class="fd-link__content">Suppliers</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 3 of 7"><span class="fd-link__content">Titanium</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 4 of 7"><span class="fd-link__content">Ultra Portable</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 5 of 7"><span class="fd-link__content">12 inch</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 6 of 7"><span class="fd-link__content">Super portable deluxe</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="page" aria-label="Current page 7 of 7"><span class="fd-link__content">Laptop</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
    </ol>
</nav>
```

### Overflow

```html
<nav aria-label="overflowing product breadcrumbs">
    <ol class="fd-breadcrumb">
        <li class="fd-breadcrumb__item"><div class="fd-popover">
            <div class="fd-popover__control">
                <div
                    aria-controls="breadcrumb1"
                    aria-expanded="true"
                    aria-haspopup="true"
                    aria-label="Show collapsed breadcrumbs"
                    class="fd-link"
                    onclick="onPopoverClick('breadcrumb1');"
                    onkeypress="isSpaceOrEnter(event, onPopoverClick('breadcrumb1'));"
                    role="button"
                    tabindex="0">
                    <span class="fd-link__content"><i role="presentation" class="sap-icon sap-icon--overflow"></i></span>
                    <i role="presentation" class="sap-icon sap-icon--slim-arrow-down"></i>
                    <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
                </div>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false" id="breadcrumb1">
                <div class="fd-popover__wrapper">
                    <ul class="fd-list fd-list--navigation" role="menu">
                        <li tabindex="-1" role="menuitem" class="fd-list__item fd-list__item--link">
                            <a class="fd-list__link" tabindex="0" href="#" aria-current="false" aria-label="Root Page 1 of 7"><span class="fd-list__title">Products</span></a>
                        </li>
                        <li tabindex="-1" role="menuitem" class="fd-list__item fd-list__item--link">
                            <a class="fd-list__link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 2 of 7"><span class="fd-list__title">Suppliers</span></a>
                        </li>
                        <li tabindex="-1" role="menuitem" class="fd-list__item fd-list__item--link">
                            <a class="fd-list__link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 3 of 7"><span class="fd-list__title">Titanium</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div></li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 4 of 7"><span class="fd-link__content">Ultra Portable</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 5 of 7"><span class="fd-link__content">12 inch</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-link" tabindex="0" href="#" aria-current="false" aria-label="Parent Page 6 of 7"><span class="fd-link__content">Super portable deluxe</span></a>
            <span class="fd-breadcrumb__separator" aria-hidden="true"></span>
        </li>
        <li class="fd-breadcrumb__item">
            <span role="link" aria-current="page" aria-label="Current page 7 of 7">Laptop</span>
        </li>
    </ol>
</nav>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/breadcrumb/breadcrumb.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
