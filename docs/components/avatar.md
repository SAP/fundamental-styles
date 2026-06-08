---
component: fd-avatar
title: Components/Avatar
category: Components
selector: fd-avatar
cssFile: avatar.css
sourcePath: packages/styles/stories/Components/avatar/avatar.stories.js
tags: []
dependencies: ["avatar","icon"]
relatedComponents: ["avatar","icon"]
stability: stable
generatedAt: 2026-06-08T17:49:01.643Z
---

# Components/Avatar

The avatar control is used for presenting various images, including user profiles, user initials, placeholder images, icons, or business-related images like product pictures.


## Usage
Use avatar to display:

- A user’s image or initials
- Standardized images for business-related content (such as products, company logos, ad campaign images etc.)
- Icons
- Images with a transparent background
- Placeholder images

Do not use avatar if:

- You want to display an image for any other use case. Instead, use the **Image** component.
- You want to display images in a carousel. Instead, use the **Carousel** component.
- You want to display an interactive icon. Instead, use the **Button** component with an icon inside.

## Sizes
The avatar control is adaptive and has five predefined sizes. These are the same for both compact and cozy.

| **Size** | **rem** | &nbsp;&nbsp; **Use for images in…** | **Modifier class** |
| :--------- | ----------: | :----------------------- | :--------------- |
| XS | 2 rem | &nbsp;&nbsp; Table list items, Card list items &nbsp;&nbsp;  | \

## Dependencies

This component depends on the following CSS files:

- `avatar.css`
- `icon.css`

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
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
```

## Basic Usage

```html
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" role="img" aria-label="Avatar John Doe"></span>
<span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--thumbnail" role="img" aria-label="Avatar John Doe"></span>
<span class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--thumbnail" role="img" aria-label="Avatar John Doe"></span>
<span class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--thumbnail" role="img" aria-label="Avatar John Doe"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail" role="img" aria-label="Avatar John Doe"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--thumbnail" role="img" aria-label="Avatar John Doe"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--thumbnail fd-avatar--background-contain" role="img" aria-label="Avatar John Doe"></span>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-avatar--accent-color-` | The Avatar can have different background colors depending on the scenario |
| `fd-avatar--background-contain` | Style variant |
| `fd-avatar--border` | You can add a very subtle border to the avatar with the `fd-avatar--border` modifier class. |
| `fd-avatar--circle` | Placeholders are used when there is no other image available |
| `fd-avatar--indication-color-` | The Avatar can have different background colors depending on the scenario |
| `fd-avatar--l` | An avatar is a visual representation of an user or a product in the digital space |
| `fd-avatar--lg` | Style variant |
| `fd-avatar--m` | An avatar is a visual representation of an user or a product in the digital space |
| `fd-avatar--md` | Style variant |
| `fd-avatar--placeholder` | Placeholders are used when there is no other image available |
| `fd-avatar--s` | An avatar is a visual representation of an user or a product in the digital space |
| `fd-avatar--shell` | When used in Shell header context, an additional modifier class `fd-avatar--shell` should be added to the `fd-avatar` base class and the modifier class specifying the accent color `fd-avatar--accent-color-*`. |
| `fd-avatar--sm` | Style variant |
| `fd-avatar--thumbnail` | Style variant |
| `fd-avatar--tile` | An avatar with a tile icon background can be displayed by adding the `fd-avatar--tile` modifier class. |
| `fd-avatar--transparent` | A transparent style can be displayed by adding the `fd-avatar--transparent` modifier class to the `fd-avatar` base class |
| `fd-avatar--xl` | Style variant |
| `fd-avatar--xs` | Style variant |

## States

| Class | Description |
|-------|-------------|
| `is-active` | Active state |
| `is-disabled` | Disabled state |
| `is-focus` | Focus state |
| `is-hover` | Hover state |
| `is-toggled` | Toggled state |

## BEM Elements

This component uses the following BEM elements:

- `fd-avatar__icon`
- `fd-avatar__zoom-icon`
- `fd-avatar__zoom-icon--caution`
- `fd-avatar__zoom-icon--indication-`
- `fd-avatar__zoom-icon--information`
- `fd-avatar__zoom-icon--negative`
- `fd-avatar__zoom-icon--positive`

## Related Components

This component works with or depends on:

- `avatar`
- `icon`

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

### Image, Person

An avatar is a visual representation of an user or a product in the digital space. For representing a person, the circular shape is used. For representing a product or object, the square shape is used. <br/>
This type of Avatar requires the \

```html
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" role="img" aria-label="Avatar John Doe"></span>
<span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--thumbnail" role="img" aria-label="Avatar John Doe"></span>
<span class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--thumbnail" role="img" aria-label="Avatar John Doe"></span>
<span class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--thumbnail" role="img" aria-label="Avatar John Doe"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail" role="img" aria-label="Avatar John Doe"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--thumbnail" role="img" aria-label="Avatar John Doe"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--thumbnail fd-avatar--background-contain" role="img" aria-label="Avatar John Doe"></span>
```

### Initials

The initials avatar can display up to <b style="color: red;">three</b> alphabetical characters representing the first and last name(s) of a person, for example: MvV for Marjolein van Veen. The order in which the first and last name(s) are displayed depends on the language-specific settings. If more than 3 initials are required to display longer names, then a gender-neutral person icon should be displayed instead. If the three letters does not fit in the shape (e.g. WWW), then the genderneutral person icon is used as a fallback.

```html
<span class="fd-avatar fd-avatar--xs" role="img" aria-label="Avatar Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--sm" role="img" aria-label="Avatar Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--md" role="img" aria-label="Avatar Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--lg" role="img" aria-label="Avatar Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--xl" role="img" aria-label="Avatar Wendy Wallace">WW</span>
```

### Icon

Placeholders are used when there is no other image available. Avatar and standardized images require placeholders. The default placeholder for an avatar is a gender-neutral person icon inside a circle. The default placeholder for a business image is a neutral product icon inside a square.

```html
<span class="fd-avatar fd-avatar--xs" role="img" aria-label="Avatar">
    <i role="presentation" aria-hidden="true" aria-label="Product placeholder" class="fd-avatar__icon sap-icon--product"></i>
</span>
<span class="fd-avatar fd-avatar--sm" role="img" aria-label="Avatar">
    <i role="presentation" aria-hidden="true" aria-label="Product placeholder" class="fd-avatar__icon sap-icon--product"></i>
</span>
<span class="fd-avatar fd-avatar--md" role="img" aria-label="Avatar">
    <i role="presentation" aria-hidden="true" aria-label="Product placeholder" class="fd-avatar__icon sap-icon--product"></i>
</span>
<span class="fd-avatar fd-avatar--lg" role="img" aria-label="Avatar">
    <i role="presentation" aria-hidden="true" aria-label="Product placeholder" class="fd-avatar__icon sap-icon--product"></i>
</span>
<span class="fd-avatar fd-avatar--xl" role="img" aria-label="Avatar">
    <i role="presentation" aria-hidden="true" aria-label="Product placeholder" class="fd-avatar__icon sap-icon--product"></i>
</span>

<span class="fd-avatar fd-avatar--xs fd-avatar--circle" role="img" aria-label="Avatar">
    <i role="presentation" aria-hidden="true" aria-label="User placeholder" class="fd-avatar__icon sap-icon--person-placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--sm fd-avatar--circle" role="img" aria-label="Avatar">
    <i role="presentation" aria-hidden="true" aria-label="User placeholder" class="fd-avatar__icon sap-icon--person-placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--md fd-avatar--circle" role="img" aria-label="Avatar">
    <i role="presentation" aria-hidden="true" aria-label="User placeholder" class="fd-avatar__icon sap-icon--person-placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--lg fd-avatar--circle" role="img" aria-label="Avatar">
    <i role="presentation" aria-hidden="true" aria-label="User placeholder" class="fd-avatar__icon sap-icon--person-placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle" role="img" aria-label="Avatar">
    <i role="presentation" aria-hidden="true" aria-label="User placeholder" class="fd-avatar__icon sap-icon--person-placeholder"></i>
</span>
```

### Circle

The circular shape is used mainly to represent a person. For this type of Avatar use the `fd-avatar--circle` modifier class with the `fd-avatar` base class. Business images display a product, company, object, logo, or other business-related content. Always use a square (default) for business images.

```html
<span class="fd-avatar fd-avatar--xs fd-avatar--circle" role="img" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--sm fd-avatar--circle" role="img" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--md fd-avatar--circle" role="img" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--lg fd-avatar--circle" role="img" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle" role="img" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xs fd-avatar--circle" role="img" aria-label="Avatar Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--sm fd-avatar--circle" role="img" aria-label="Avatar Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--md fd-avatar--circle" role="img" aria-label="Avatar Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--lg fd-avatar--circle" role="img" aria-label="Avatar Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle" role="img" aria-label="Avatar Wendy Wallace">WW</span>
```

### Transparent

A transparent style can be displayed by adding the `fd-avatar--transparent` modifier class to the `fd-avatar` base class. This can be useful for displaying descriptive illustrations and decorative pictures, for example.

```html
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--transparent" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--transparent" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--transparent" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--transparent" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--transparent" aria-label="Avatar Wendy Wallace" role="img">WW</span>
<span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--transparent" aria-label="Avatar Wendy Wallace" role="img">WW</span>
<span class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--transparent" aria-label="Avatar Wendy Wallace" role="img">WW</span>
<span class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--transparent" aria-label="Avatar Wendy Wallace" role="img">WW</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent" aria-label="Avatar Wendy Wallace" role="img">WW</span>
```

### PlaceholderBackground

An avatar with a placeholder background can be displayed by adding the `fd-avatar--placeholder` modifier class.

```html
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--placeholder" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--placeholder" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--placeholder" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--placeholder" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--placeholder" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
```

### TileIconBackground

An avatar with a tile icon background can be displayed by adding the `fd-avatar--tile` modifier class.

```html
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--tile" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--tile" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--tile" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--tile" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--tile" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
```

### Color variations

The Avatar can have different background colors depending on the scenario. To change the accent or indication background color, add the `fd-avatar--accent-color-*` or `fd-avatar--indication-color-*` class with the number indicating the desired color. The color options include numbers ranging from 1 to 10, for example: `fd-avatar--accent-color-10` or `fd-avatar--indication-color-7`.

```html
<span class="fd-avatar fd-avatar--accent-color-1 fd-avatar--md" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-2 fd-avatar--md" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-3 fd-avatar--md" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-4 fd-avatar--md" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-5 fd-avatar--md" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-6 fd-avatar--md" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-7 fd-avatar--md" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-8 fd-avatar--md" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-9 fd-avatar--md" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--md" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-1 fd-avatar--md" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-2 fd-avatar--md" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-3 fd-avatar--md" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-4 fd-avatar--md" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-5 fd-avatar--md" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-6 fd-avatar--md" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-7 fd-avatar--md" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-8 fd-avatar--md" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-9 fd-avatar--md" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-10 fd-avatar--md" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
```

### Color variations in Shell header context

When used in Shell header context, an additional modifier class `fd-avatar--shell` should be added to the `fd-avatar` base class and the modifier class specifying the accent color `fd-avatar--accent-color-*`.

```html
<span class="fd-avatar fd-avatar--shell fd-avatar--accent-color-1 fd-avatar--md" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--shell fd-avatar--accent-color-2 fd-avatar--md" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--shell fd-avatar--accent-color-3 fd-avatar--md" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--shell fd-avatar--accent-color-4 fd-avatar--md" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--shell fd-avatar--accent-color-5 fd-avatar--md" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--shell fd-avatar--accent-color-6 fd-avatar--md" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--shell fd-avatar--accent-color-7 fd-avatar--md" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--shell fd-avatar--accent-color-8 fd-avatar--md" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--shell fd-avatar--accent-color-9 fd-avatar--md" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--shell fd-avatar--accent-color-10 fd-avatar--md" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
```

### Badge

Each interactive avatar type can have an optional badge and icon assigned. A badge is used to indicate that the avatar is interactive. An icon is used to indicate the action triggered by clicking the avatar (e.g. edit images, take a picture, zoom in).

```html
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--accent-color-1" tabindex="0" role="button" aria-label="Avatar" aria-description="Edit badge. To activate press spacebar." title="Edit Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
    <i class="fd-avatar__zoom-icon sap-icon--edit" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--accent-color-2" tabindex="0" role="button" aria-label="Avatar" aria-description="Edit badge. To activate press spacebar." title="Edit Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
    <i class="fd-avatar__zoom-icon sap-icon--edit" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--accent-color-3" tabindex="0" role="button" aria-label="Avatar" aria-description="Edit badge. To activate press spacebar." title="Edit Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
    <i class="fd-avatar__zoom-icon sap-icon--edit" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--accent-color-4" tabindex="0" role="button" aria-label="Avatar" aria-description="Edit badge. To activate press spacebar." title="Edit Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
    <i class="fd-avatar__zoom-icon sap-icon--edit" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--accent-color-5" tabindex="0" role="button" aria-label="Avatar" aria-description="Edit badge. To activate press spacebar." title="Edit Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
    <i class="fd-avatar__zoom-icon sap-icon--edit" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-6 fd-avatar--xs" tabindex="0" role="button" aria-label="Wendy Wallace" aria-description="Edit badge. To activate press spacebar." title="Edit Avatar">WW
    <i class="fd-avatar__zoom-icon sap-icon--edit" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-7 fd-avatar--sm" tabindex="0" role="button" aria-label="Wendy Wallace" aria-description="Edit badge. To activate press spacebar." title="Edit Avatar">WW
    <i class="fd-avatar__zoom-icon sap-icon--edit" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-8 fd-avatar--md" tabindex="0" role="button" aria-label="Wendy Wallace" aria-description="Edit badge. To activate press spacebar." title="Edit Avatar">WW
    <i class="fd-avatar__zoom-icon sap-icon--edit" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-9 fd-avatar--lg" tabindex="0" role="button" aria-label="Wendy Wallace" aria-description="Edit badge. To activate press spacebar." title="Edit Avatar">WW
    <i class="fd-avatar__zoom-icon sap-icon--edit" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--xl" tabindex="0" role="button" aria-label="Wendy Wallace" aria-description="Edit badge. To activate press spacebar." title="Edit Avatar">WW
    <i class="fd-avatar__zoom-icon sap-icon--edit" role="presentation" aria-hidden="true"></i>
</span>
```

### ValueStates

Value States can be added to the Avatar badge. <br>For <b>positive</b> value state use the \

```html
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--accent-color-1" tabindex="0" role="button" aria-label="Avatar" aria-description="Edit badge. To activate press spacebar." title="Edit Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
    <i class="fd-avatar__zoom-icon sap-icon--edit" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--accent-color-2" tabindex="0" role="button" aria-label="Avatar" aria-description="Edit badge. To activate press spacebar." title="Edit Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
    <i class="fd-avatar__zoom-icon fd-avatar__zoom-icon--negative sap-icon--error" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--accent-color-3" tabindex="0" role="button" aria-label="Avatar" aria-description="Edit badge. To activate press spacebar." title="Edit Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
    <i class="fd-avatar__zoom-icon fd-avatar__zoom-icon--caution sap-icon--warning" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--accent-color-4" tabindex="0" role="button" aria-label="Avatar" aria-description="Edit badge. To activate press spacebar." title="Edit Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
    <i class="fd-avatar__zoom-icon fd-avatar__zoom-icon--positive sap-icon--sys-enter-2" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--accent-color-5" tabindex="0" role="button" aria-label="Avatar" aria-description="Edit badge. To activate press spacebar." title="Edit Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
    <i class="fd-avatar__zoom-icon fd-avatar__zoom-icon--information sap-icon--information" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-6 fd-avatar--xl" tabindex="0" role="button" aria-label="Wendy Wallace" aria-description="Edit badge. To activate press spacebar." title="Edit Avatar">WW
    <i class="fd-avatar__zoom-icon sap-icon--edit" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-7 fd-avatar--xl" tabindex="0" role="button" aria-label="Wendy Wallace" aria-description="Edit badge. To activate press spacebar." title="Edit Avatar">WW
    <i class="fd-avatar__zoom-icon fd-avatar__zoom-icon--negative sap-icon--message-error" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-8 fd-avatar--xl" tabindex="0" role="button" aria-label="Wendy Wallace" aria-description="Edit badge. To activate press spacebar." title="Edit Avatar">WW
    <i class="fd-avatar__zoom-icon fd-avatar__zoom-icon--caution sap-icon--message-warning" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-9 fd-avatar--xl" tabindex="0" role="button" aria-label="Wendy Wallace" aria-description="Edit badge. To activate press spacebar." title="Edit Avatar">WW
    <i class="fd-avatar__zoom-icon fd-avatar__zoom-icon--positive sap-icon--message-success" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--xl" tabindex="0" role="button" aria-label="Wendy Wallace" aria-description="Edit badge. To activate press spacebar." title="Edit Avatar">WW
    <i class="fd-avatar__zoom-icon fd-avatar__zoom-icon--information sap-icon--message-information" role="presentation" aria-hidden="true"></i>
</span>
```

### BadgeIndicationColors

The avatar's badge color is extended with the first set of  indication color palette. Use modifier classes \

```html
<span class="fd-avatar fd-avatar--xl fd-avatar--circle" tabindex="0" role="button" aria-label="Avatar" aria-description="Edit badge. To activate press spacebar." title="Edit Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
    <i class="fd-avatar__zoom-icon fd-avatar__zoom-icon--indication-1 sap-icon--heart" role="presentation" aria-hidden="true"></i>
</span>

<span class="fd-avatar fd-avatar--xl fd-avatar--circle" tabindex="0" role="button" aria-label="Avatar" aria-description="Edit badge. To activate press spacebar." title="Edit Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
    <i class="fd-avatar__zoom-icon fd-avatar__zoom-icon--indication-2 sap-icon--blur" role="presentation" aria-hidden="true"></i>
</span>

<span class="fd-avatar fd-avatar--xl fd-avatar--circle" tabindex="0" role="button" aria-label="Avatar" aria-description="Edit badge. To activate press spacebar." title="Edit Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
    <i class="fd-avatar__zoom-icon fd-avatar__zoom-icon--indication-3 sap-icon--circle-task" role="presentation" aria-hidden="true"></i>
</span>

<span class="fd-avatar fd-avatar--xl fd-avatar--circle" tabindex="0" role="button" aria-label="Avatar" aria-description="Edit badge. To activate press spacebar." title="Edit Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
    <i class="fd-avatar__zoom-icon fd-avatar__zoom-icon--indication-4 sap-icon--cancel" role="presentation" aria-hidden="true"></i>
</span>

<span class="fd-avatar fd-avatar--xl fd-avatar--circle" tabindex="0" role="button" aria-label="Avatar" aria-description="Edit badge. To activate press spacebar." title="Edit Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
    <i class="fd-avatar__zoom-icon fd-avatar__zoom-icon--indication-5 sap-icon--bell" role="presentation" aria-hidden="true"></i>
</span>

<span class="fd-avatar fd-avatar--xl" tabindex="0" role="button" aria-label="Wendy Wallace" aria-description="Edit badge. To activate press spacebar." title="Edit Avatar">WW
    <i class="fd-avatar__zoom-icon fd-avatar__zoom-icon--indication-6 sap-icon--cloud" role="presentation" aria-hidden="true"></i>
</span>

<span class="fd-avatar fd-avatar--xl" tabindex="0" role="button" aria-label="Wendy Wallace" aria-description="Edit badge. To activate press spacebar." title="Edit Avatar">WW
    <i class="fd-avatar__zoom-icon fd-avatar__zoom-icon--indication-7 sap-icon--up" role="presentation" aria-hidden="true"></i>
</span>

<span class="fd-avatar fd-avatar--xl" tabindex="0" role="button" aria-label="Wendy Wallace" aria-description="Edit badge. To activate press spacebar." title="Edit Avatar">WW
    <i class="fd-avatar__zoom-icon fd-avatar__zoom-icon--indication-8 sap-icon--locate-me" role="presentation" aria-hidden="true"></i>
</span>

<span class="fd-avatar fd-avatar--xl" tabindex="0" role="button" aria-label="Wendy Wallace" aria-description="Edit badge. To activate press spacebar." title="Edit Avatar">WW
    <i class="fd-avatar__zoom-icon fd-avatar__zoom-icon--indication-9 sap-icon--bookmark" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--xl" tabindex="0" role="button" aria-label="Wendy Wallace" aria-description="Edit badge. To activate press spacebar." title="Edit Avatar">WW
    <i class="fd-avatar__zoom-icon fd-avatar__zoom-icon--indication-10 sap-icon--addresses" role="presentation" aria-hidden="true"></i>
</span>
```

### Borders

You can add a very subtle border to the avatar with the `fd-avatar--border` modifier class.

```html
<span class="fd-avatar fd-avatar--xs fd-avatar--transparent fd-avatar--border" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--sm fd-avatar--transparent fd-avatar--border" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--md fd-avatar--transparent fd-avatar--border" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--lg fd-avatar--transparent fd-avatar--border" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--transparent fd-avatar--border" aria-label="Avatar" role="img">
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
</span>
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--transparent fd-avatar--border" aria-label="Avatar Wendy Wallace" role="img">WW
</span>
<span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--transparent fd-avatar--border" aria-label="Avatar Wendy Wallace" role="img">WW
</span>
<span class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--transparent fd-avatar--border" aria-label="Avatar Wendy Wallace" role="img">WW
</span>
<span class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--transparent fd-avatar--border" aria-label="Avatar Wendy Wallace" role="img">WW
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent fd-avatar--border" aria-label="Avatar Wendy Wallace" role="img">WW
</span>
```

### Interactive

```html
<h3>Regular State</h3>
<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--accent-color-1" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--accent-color-2" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--accent-color-3" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--accent-color-4" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--accent-color-5" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-6 fd-avatar--xs" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-7 fd-avatar--s" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-8 fd-avatar--m" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-9 fd-avatar--l" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--xl" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--placeholder" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--tile" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" role="img" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--transparent fd-avatar--border" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent fd-avatar--border" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW
</span>

<span class="fd-avatar fd-avatar--circle fd-avatar--indication-color-1 fd-avatar--xs" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--circle fd-avatar--indication-color-2 fd-avatar--sm" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--circle fd-avatar--indication-color-3 fd-avatar--md" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--circle fd-avatar--indication-color-4 fd-avatar--lg" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--circle fd-avatar--indication-color-5 fd-avatar--xl" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-6 fd-avatar--xs" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-7 fd-avatar--sm" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-8 fd-avatar--md" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-9 fd-avatar--lg" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-10 fd-avatar--xl" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>

<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--accent-color-1 is-hover" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--accent-color-2 is-hover" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--accent-color-3 is-hover" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--accent-color-4 is-hover" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--accent-color-5 is-hover" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-6 fd-avatar--xs is-hover" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-7 fd-avatar--s is-hover" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-8 fd-avatar--m is-hover" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-9 fd-avatar--l is-hover" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--xl is-hover" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--placeholder is-hover" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--tile is-hover" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail is-hover" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" role="img" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent is-hover" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--transparent fd-avatar--border is-hover" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent fd-avatar--border is-hover" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW
</span>

<span class="fd-avatar fd-avatar--circle fd-avatar--indication-color-1 fd-avatar--xs is-hover" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--circle fd-avatar--indication-color-2 fd-avatar--sm is-hover" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--circle fd-avatar--indication-color-3 fd-avatar--md is-hover" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--circle fd-avatar--indication-color-4 fd-avatar--lg is-hover" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--circle fd-avatar--indication-color-5 fd-avatar--xl is-hover" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-6 fd-avatar--xs is-hover" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-7 fd-avatar--sm is-hover" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-8 fd-avatar--md is-hover" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-9 fd-avatar--lg is-hover" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-10 fd-avatar--xl is-hover" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>

<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--accent-color-1 is-active" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--accent-color-2 is-active" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--accent-color-3 is-active" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--accent-color-4 is-active" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--accent-color-5 is-active" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-6 fd-avatar--xs is-active" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-7 fd-avatar--s is-active" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-8 fd-avatar--m is-active" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-9 fd-avatar--l is-active" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--xl is-active" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--placeholder is-active" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--tile is-active" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail is-active" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" role="img" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent is-active" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--transparent fd-avatar--border is-active" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent fd-avatar--border is-active" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW
</span>

<span class="fd-avatar fd-avatar--circle fd-avatar--indication-color-1 fd-avatar--xs is-active" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--circle fd-avatar--indication-color-2 fd-avatar--sm is-active" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--circle fd-avatar--indication-color-3 fd-avatar--md is-active" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--circle fd-avatar--indication-color-4 fd-avatar--lg is-active" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--circle fd-avatar--indication-color-5 fd-avatar--xl is-active" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-6 fd-avatar--xs is-active" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-7 fd-avatar--sm is-active" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-8 fd-avatar--md is-active" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-9 fd-avatar--lg is-active" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-10 fd-avatar--xl is-active" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>

<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--accent-color-1 is-toggled is-hover" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--accent-color-2 is-toggled is-hover" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--accent-color-3 is-toggled is-hover" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--accent-color-4 is-toggled is-hover" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--accent-color-5 is-toggled is-hover" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-6 fd-avatar--xs is-toggled is-hover" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-7 fd-avatar--s is-toggled is-hover" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-8 fd-avatar--m is-toggled is-hover" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-9 fd-avatar--l is-toggled is-hover" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--xl is-toggled is-hover" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--placeholder is-toggled is-hover" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--tile is-toggled is-hover" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail is-toggled is-hover" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" role="img" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent is-toggled is-hover"  tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--transparent fd-avatar--border is-toggled is-hover"  tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent fd-avatar--border is-toggled is-hover" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW
</span>

<span class="fd-avatar fd-avatar--circle fd-avatar--indication-color-1 fd-avatar--xs is-hover is-active" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--circle fd-avatar--indication-color-2 fd-avatar--sm is-hover is-active" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--circle fd-avatar--indication-color-3 fd-avatar--md is-hover is-active" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--circle fd-avatar--indication-color-4 fd-avatar--lg is-hover is-active" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--circle fd-avatar--indication-color-5 fd-avatar--xl is-hover is-active" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-6 fd-avatar--xs is-hover is-active" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-7 fd-avatar--sm is-hover is-active" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-8 fd-avatar--md is-hover is-active" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-9 fd-avatar--lg is-hover is-active" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-10 fd-avatar--xl is-hover is-active" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>

<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--accent-color-1 is-disabled" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--accent-color-2 is-disabled" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--accent-color-3 is-disabled" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--accent-color-4 is-disabled" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--accent-color-5 is-disabled" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-6 fd-avatar--xs is-disabled" role="button" aria-label="Avatar Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-7 fd-avatar--s is-disabled" role="button" aria-label="Avatar Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-8 fd-avatar--m is-disabled" role="button" aria-label="Avatar Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-9 fd-avatar--l is-disabled" role="button" aria-label="Avatar Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--xl is-disabled" role="button" aria-label="Avatar Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--placeholder is-disabled" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--tile is-disabled" role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail is-disabled" role="button" role="img" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent is-disabled" role="button" aria-label="Avatar Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--transparent fd-avatar--border is-disabled"  role="button" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent fd-avatar--border is-disabled" role="button" aria-label="Avatar Wendy Wallace">WW
</span>

<span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--accent-color-1 is-focus" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--accent-color-2 is-focus" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--m fd-avatar--circle fd-avatar--accent-color-3 is-focus" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--l fd-avatar--circle fd-avatar--accent-color-4 is-focus" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--accent-color-5 is-focus" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-6 fd-avatar--xs is-focus" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-7 fd-avatar--s is-focus" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-8 fd-avatar--m is-focus" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-9 fd-avatar--l is-focus" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--xl is-focus" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--placeholder is-focus" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--tile is-focus" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail is-focus" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" role="img" aria-label="John Doe"></span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent is-focus" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--transparent fd-avatar--border is-focus" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--transparent fd-avatar--border is-focus" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" aria-label="Avatar Wendy Wallace">WW
</span>

<span class="fd-avatar fd-avatar--circle fd-avatar--indication-color-1 fd-avatar--xs is-focus" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--circle fd-avatar--indication-color-2 fd-avatar--sm is-focus" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--circle fd-avatar--indication-color-3 fd-avatar--md is-focus" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--circle fd-avatar--indication-color-4 fd-avatar--lg is-focus" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--circle fd-avatar--indication-color-5 fd-avatar--xl is-focus" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-6 fd-avatar--xs is-focus" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-7 fd-avatar--sm is-focus" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-8 fd-avatar--md is-focus" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-9 fd-avatar--lg is-focus" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-avatar fd-avatar--indication-color-10 fd-avatar--xl is-focus" aria-label="Avatar" tabindex="0" role="button" aria-roledescription="Avatar (Menu) Button" aria-haspopup="true" aria-expanded="false" aria-description="To activate press spacebar" >
    <i class="fd-avatar__icon sap-icon--product" role="presentation" aria-hidden="true"></i>
</span>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/avatar/avatar.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
