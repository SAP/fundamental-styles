---
component: fd-object-identifier
title: Components/Object Identifier
category: Components
selector: fd-object-identifier
cssFile: object-identifier.css
sourcePath: packages/styles/stories/Components/object-identifier/object-identifier.stories.js
tags: []
dependencies: ["link","object-identifier","table"]
relatedComponents: ["link","object-identifier","table"]
stability: stable
generatedAt: 2026-06-01T19:24:00.130Z
---

# Components/Object Identifier

The object identifier is a short text that represents the key identifier of an object, and can be displayed in various types of containers, tables, panels, popovers and more. The text wraps if there is insufficient horizontal space.

The object identifier should be easily read by the users, preferably displaying text instead of an ID. If it necessary to distinguish objects by their IDs, then it should appear as descriptive text below the title text.

**The object number comprises:**

- A title text
- An optional descriptive text
- An active state (if desired) which resembles a link that can trigger an event

##Usage
**Use the object identifier if:**

- You want to indicate the key identifier on an object.

**Do not use the object identifier if:**

- You want to display system messages.
- They are for decorative purposes only.

## Usage Guidelines

**Use the object identifier if:**

- You want to indicate the key identifier on an object.

## When Not To Use

- You want to display system messages.
- They are for decorative purposes only.

## Dependencies

This component depends on the following CSS files:

- `link.css`
- `object-identifier.css`
- `table.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/object-identifier.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/link.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/object-identifier.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/table.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-object-identifier">
    <p class="fd-object-identifier__title">NoteBook Basic 15</p>
    <span class="fd-object-identifier__sr-only">Object Identifier</span>
</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-object-identifier--medium` | To display the object identifier title in medium size, add the `fd-object-identifier--medium` modifier. |

## BEM Elements

This component uses the following BEM elements:

- `fd-object-identifier__link`
- `fd-object-identifier__sr-only`
- `fd-object-identifier__text`
- `fd-object-identifier__title`
- `fd-object-identifier__title--bold`

## Related Components

This component works with or depends on:

- `link`
- `object-identifier`
- `table`

## Design Tokens

Key CSS variables used by this component:

- `--bold`
- `--fdObjectIdentifier_Font_Size`
- `--fdObjectIdentifier_Font_Weight`
- `--medium`
- `--sapContent_LabelColor`
- `--sapFontLargeSize`
- `--sapFontSize`
- `--sapList_TextColor`

## Examples

### Title

To display the object identifier as a title, add the `fd-object-identifier__title` modifier class to the main element.

```html
<div class="fd-object-identifier">
    <p class="fd-object-identifier__title">NoteBook Basic 15</p>
    <span class="fd-object-identifier__sr-only">Object Identifier</span>
</div>
```

### Bold

To display the object identifier's title in bold, replace \

```html
<div class="fd-object-identifier">
    <p class="fd-object-identifier__title fd-object-identifier__title--bold">NoteBook Basic 15</p>
    <span class="fd-object-identifier__sr-only">Object Identifier</span>
</div>
```

### Link

To display the object identifier as a link, use anchor element with `.fd-link .fd-object-identifier__link` classes.

```html
<div class="fd-object-identifier">
    <p class="fd-object-identifier__title">
        <a href="#" tabindex="0" class="fd-link fd-object-identifier__link" aria-label="Object Identifier">
            <span class="fd-link__content">NoteBook Basic 15</span>
        </a>
    </p>
</div>
<div class="fd-object-identifier">
    <p class="fd-object-identifier__title fd-object-identifier__title--bold">
        <a href="#" tabindex="0" class="fd-link fd-object-identifier__link" aria-label="Object Identifier">
            <span class="fd-link__content">NoteBook Basic 15</span>
        </a>
    </p>
</div>
```

### Descriptive

To display the object identifier\

```html
<div class="fd-object-identifier">
    <p class="fd-object-identifier__title">NoteBook Basic 15</p>
    <p class="fd-object-identifier__text">Notebook Basic 15 with 2,80 GHz quad core, 15" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro</p>
    <span class="fd-object-identifier__sr-only">Object Identifier</span>
</div>

<div class="fd-object-identifier">
    <p class="fd-object-identifier__title fd-object-identifier__title--bold">NoteBook Basic 15</p>
    <p class="fd-object-identifier__text">Notebook Basic 15 with 2,80 GHz quad core, 15" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro</p>
    <span class="fd-object-identifier__sr-only">Object Identifier</span>
</div>

<div class="fd-object-identifier">
    <p class="fd-object-identifier__title">
        <a href="#" tabindex="0" class="fd-link fd-object-identifier__link" aria-describedby="fd-object-identifier-desc-1 fd-object-identifier-text-1">
            <span class="fd-link__content">NoteBook Basic 15</span>
        </a>
    </p>
    <span class="fd-object-identifier__sr-only" aria-hidden="true" id="fd-object-identifier-desc-1">Object Identifier</span>
    <p class="fd-object-identifier__text" id="fd-object-identifier-text-1">Notebook Basic 15 with 2,80 GHz quad core, 15" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro</p>
</div>

<div class="fd-object-identifier">
    <p class="fd-object-identifier__title fd-object-identifier__title--bold">
        <a href="#" tabindex="0" class="fd-link fd-object-identifier__link" aria-describedby="fd-object-identifier-desc-2 fd-object-identifier-text-2">
            <span class="fd-link__content">NoteBook Basic 15</span>
        </a>
    </p>
    <span class="fd-object-identifier__sr-only" aria-hidden="true" id="fd-object-identifier-desc-2">Object Identifier</span>
    <p class="fd-object-identifier__text" id="fd-object-identifier-text-2">Notebook Basic 15 with 2,80 GHz quad core, 15" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro</p>
</div>
```

### MediumSize

To display the object identifier title in medium size, add the `fd-object-identifier--medium` modifier.

```html
<div class="fd-object-identifier fd-object-identifier--medium">
    <p class="fd-object-identifier__title">NoteBook Basic 15</p>
    <p class="fd-object-identifier__text">Notebook Basic 15 with 2,80 GHz quad core, 15" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro</p>
    <span class="fd-object-identifier__sr-only">Object Identifier</span>
</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/object-identifier/object-identifier.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
