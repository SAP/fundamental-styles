---
component: fd-object-marker
title: Components/Object Marker
category: Components
selector: fd-object-marker
cssFile: object-marker.css
sourcePath: packages/styles/stories/Components/object-marker/object-marker.stories.js
tags: []
dependencies: ["icon","object-marker"]
relatedComponents: ["icon","object-marker"]
stability: stable
generatedAt: 2026-05-28T20:12:00.621Z
---

# Components/Object Marker

Object marker indicates the technical status of an object. It display the technical state like (draft,
unsaved changes, locked, favorite, flagged). Use the object marker for this unless you want to display the status of the object in the business life cycle.
The technical status can be represented as an icon, with an icon and text, or as text only, depending on the screen size.

## Dependencies

This component depends on the following CSS files:

- `icon.css`
- `object-marker.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/object-marker.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/object-marker.css" rel="stylesheet">
```

## Basic Usage

```html
<span class="fd-object-marker__sr-only" id="status" aria-hidden="true">Status</span>

<div class="fd-object-marker" role="img" aria-labelledby="status fd-object-marker__desc-1">
    <i class="fd-object-marker__icon sap-icon--request" title="Request" aria-hidden="true"></i>
    <span class="fd-object-marker__sr-only" id="fd-object-marker__desc-1" aria-hidden="true">Request</span>
</div>
<div class="fd-object-marker" role="img" aria-labelledby="status fd-object-marker__desc-2">
    <i class="fd-object-marker__icon sap-icon--favorite" title="Favourite" aria-hidden="true"></i>
    <span class="fd-object-marker__sr-only" id="fd-object-marker__desc-2" aria-hidden="true">Favourite</span>
</div>
<div class="fd-object-marker" role="img" aria-labelledby="status fd-object-marker__desc-3">
    <i class="fd-object-marker__icon sap-icon--flag" title="Flag" aria-hidden="true"></i>
    <span class="fd-object-marker__sr-only" id="fd-object-marker__desc-3" aria-hidden="true">Flag</span>
</div>
<div class="fd-object-marker" role="img" aria-labelledby="status fd-object-marker__desc-4">
    <i class="fd-object-marker__icon sap-icon--user-edit" title="Edit" aria-hidden="true"></i>
    <span class="fd-object-marker__sr-only" id="fd-object-marker__desc-4" aria-hidden="true">Edit</span>
</div>
<div class="fd-object-marker" role="img" aria-labelledby="status fd-object-marker__desc-5">
    <i class="fd-object-marker__icon sap-icon--private" title="Private" aria-hidden="true"></i>
    <span class="fd-object-marker__sr-only" id="fd-object-marker__desc-5" aria-hidden="true">Private</span>
</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-object-marker--link` | If the object marker is used as a link, a hover effect is shown on non-touch devices |

## BEM Elements

This component uses the following BEM elements:

- `fd-object-marker__desc-`
- `fd-object-marker__icon`
- `fd-object-marker__sr-only`
- `fd-object-marker__text`

## Related Components

This component works with or depends on:

- `icon`
- `object-marker`

## Design Tokens

Key CSS variables used by this component:

- `--link`
- `--sapContent_LabelColor`
- `--sapContent_MarkerIconColor`

## Examples

### IconOnly

```html
<span class="fd-object-marker__sr-only" id="status" aria-hidden="true">Status</span>

<div class="fd-object-marker" role="img" aria-labelledby="status fd-object-marker__desc-1">
    <i class="fd-object-marker__icon sap-icon--request" title="Request" aria-hidden="true"></i>
    <span class="fd-object-marker__sr-only" id="fd-object-marker__desc-1" aria-hidden="true">Request</span>
</div>
<div class="fd-object-marker" role="img" aria-labelledby="status fd-object-marker__desc-2">
    <i class="fd-object-marker__icon sap-icon--favorite" title="Favourite" aria-hidden="true"></i>
    <span class="fd-object-marker__sr-only" id="fd-object-marker__desc-2" aria-hidden="true">Favourite</span>
</div>
<div class="fd-object-marker" role="img" aria-labelledby="status fd-object-marker__desc-3">
    <i class="fd-object-marker__icon sap-icon--flag" title="Flag" aria-hidden="true"></i>
    <span class="fd-object-marker__sr-only" id="fd-object-marker__desc-3" aria-hidden="true">Flag</span>
</div>
<div class="fd-object-marker" role="img" aria-labelledby="status fd-object-marker__desc-4">
    <i class="fd-object-marker__icon sap-icon--user-edit" title="Edit" aria-hidden="true"></i>
    <span class="fd-object-marker__sr-only" id="fd-object-marker__desc-4" aria-hidden="true">Edit</span>
</div>
<div class="fd-object-marker" role="img" aria-labelledby="status fd-object-marker__desc-5">
    <i class="fd-object-marker__icon sap-icon--private" title="Private" aria-hidden="true"></i>
    <span class="fd-object-marker__sr-only" id="fd-object-marker__desc-5" aria-hidden="true">Private</span>
</div>
```

### MarkerText

```html
<span class="fd-object-marker__sr-only" id="status" aria-hidden="true">Status</span>

<div class="fd-object-marker" aria-labelledby="status">
    <span class="fd-object-marker__text">Draft</span>
</div>
<div class="fd-object-marker" aria-labelledby="status">
    <span class="fd-object-marker__text">Locked</span>
</div>
```

### IconAndText

The Marker supports the Icon and Text mode of displaying the Object.

```html
<span class="fd-object-marker__sr-only" id="status" aria-hidden="true">Status</span>

<div class="fd-object-marker" aria-labelledby="status">
    <i class="fd-object-marker__icon sap-icon--request" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-marker__text">Request</span>
</div>
<div class="fd-object-marker" aria-labelledby="status">
    <i class="fd-object-marker__icon sap-icon--favorite" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-marker__text">Favourite</span>
</div>
<div class="fd-object-marker" aria-labelledby="status">
    <i class="fd-object-marker__icon sap-icon--flag" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-marker__text">Flag</span>
</div>
<div class="fd-object-marker" aria-labelledby="status">
    <i class="fd-object-marker__icon sap-icon--user-edit" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-marker__text">Draft</span>
</div>
<div class="fd-object-marker" aria-labelledby="status">
    <i class="fd-object-marker__icon sap-icon--private" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-marker__text">Locked</span>
</div>
```

### ClickableObjectMarker

If the object marker is used as a link, a hover effect is shown on non-touch devices. If the object marker is shown using a combination of icon and text, there is no hover effect for the icon. If Object Marker has to be clicked/tabbed by the user add the fd-object-marker--link modifier class.

```html
<span class="fd-object-marker__sr-only" id="fd-object-marker-status" aria-hidden="true">Status(active)</span>

<a href="#" tabindex="0" aria-labelledby="fd-object-marker-status fd-object-marker-text-1" class="fd-object-marker fd-object-marker--link">
    <i class="fd-object-marker__icon sap-icon--private" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-marker__text" id="fd-object-marker-text-1">Locked</span>
</a>
<a href="#" tabindex="0" aria-labelledby="fd-object-marker-status fd-object-marker-text-2" class="fd-object-marker fd-object-marker--link">
    <i class="fd-object-marker__icon sap-icon--user-edit" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-marker__text" id="fd-object-marker-text-2">Unsaved Changes</span>
</a>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/object-marker/object-marker.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
