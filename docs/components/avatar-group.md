---
component: fd-avatar-group
title: Components/Avatar Group
category: Components
selector: fd-avatar-group
cssFile: avatar-group.css
sourcePath: packages/styles/stories/Components/avatar-group/avatar-group.stories.js
tags: []
dependencies: ["avatar","avatar-group","bar","button","form-group","form-item","form-label","form-layout-grid","icon","input","layout-grid","link","popover","quick-view","title"]
relatedComponents: ["avatar","avatar-group","bar","button","form-group","form-item","form-label","form-layout-grid","icon","input","layout-grid","link","popover","quick-view","title"]
stability: stable
generatedAt: 2026-06-08T17:49:01.959Z
---

# Components/Avatar Group

The avatar group displays a number of avatars, which act as a digital representation of a user. This control is useful for visualizing a team, project team members, or a group of employees, for example. <br />
        For detailed information check Fiori Design Guidelines for <a target="_blank" href="https://experience.sap.com/internal/fiori-design-web/avatar-group/">Avatar Group</a> component. 

<br />
## Usage

Use the **AvatarGroup** if:

- You want to display a group of avatars (more than two).
- You want to display several avatars which have something in common.

Do not use the **AvatarGroup** if:

- You want to display a single avatar.
- You want to display a gallery for simple images.
- You want to use it for other visual content than avatars.

<br />
## Sizes and spacings

The spacing between the items depends on the size of the avatars in the group. 

| **Size** | &nbsp;&nbsp; **Group type** | &nbsp;&nbsp; **Individual type** | **Modifier class** |
| :---------: | :----------: | :-----------------------: | :--------------- |
| XS | &nbsp;&nbsp; -0.75rem | &nbsp;&nbsp; 0.0625rem | \

## Dependencies

This component depends on the following CSS files:

- `avatar.css`
- `avatar-group.css`
- `bar.css`
- `button.css`
- `form-group.css`
- `form-item.css`
- `form-label.css`
- `form-layout-grid.css`
- `icon.css`
- `input.css`
- `layout-grid.css`
- `link.css`
- `popover.css`
- `quick-view.css`
- `title.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/avatar-group.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/avatar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/avatar-group.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/bar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/form-group.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/form-item.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/form-label.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/form-layout-grid.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/input.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/layout-grid.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/link.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/popover.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/quick-view.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/title.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-avatar-group fd-avatar-group--individual-type fd-avatar-group--sm">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <span
                class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                aria-label="Avatar Jason Smith"
                title="Jason Smith"
                tabindex="0"
                aria-haspopup="true"
                aria-expanded="false"
                onclick="onPopoverClick('popover_avatar_5z28edb');">JS
            </span>
            <div class="fd-popover__body" aria-hidden="false" id="popover_avatar_5z28edb">
                <div class="fd-quick-view">
                    <div class="fd-bar fd-bar--header">
                        <div class="fd-bar__middle">
                            <div class="fd-bar__element">
                                <h1 class="fd-title fd-title--h5">Business Card</h1>
                            </div>
                        </div>
                    </div>

                    <div class="fd-quick-view__content">
                        <div class="fd-bar fd-bar--header-with-subheader">
                            <div class="fd-bar__left">
                                <span
                                    class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                                    role="img"
                                    aria-label="Avatar Jason Smith">
                                    JS
                                </span>
                                <div class="fd-quick-view__subheader-text">
                                    <h5 class="fd-title fd-title--h5">Jason Smith</h5>
                                    <p class="fd-quick-view__subtitle">Marketing Manager</p>
                                </div>
                            </div>
                        </div>
                        <div class="fd-form-group" role="group">
                            <div class="fd-form-group__header" aria-labelledby="contactDetails_5z28edb">
                                <p class="fd-form-group__header-text" id="contactDetails_5z28edb">Contact Details</p>
                            </div>
                            <div class="fd-form-item">
                                <label class="fd-form-label">Mobile</label>
                                <a class="fd-link" href="tel:+89181818181"><span class="fd-link__content">+89181818181</span></a>
                            </div>
                            <div class="fd-form-item">
                                <label class="fd-form-label">Phone</label>
                                <a class="fd-link" href="tel:+2828282828"><span class="fd-link__content">+2828282828</span></a>
                            </div>
                            <div class="fd-form-item">
                                <label class="fd-form-label">Email</label>
                                <a class="fd-link" href="mailto:hello@fundamental.com"><span class="fd-link__content">hello@fundamental.com</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-popover">
            <div class="fd-popover__control">
                <span
                    class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                    role="button"
                    aria-label="Avatar Sarah Parker"
                    title="Sarah Parker"
                    tabindex="0"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onclick="onPopoverClick('popover_avatar_spbw4q');">
                    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
                </span>
            </div>
            <div class="fd-popover__body" aria-hidden="true" id="popover_avatar_spbw4q">
                <div class="fd-quick-view">
                    <div class="fd-bar fd-bar--header">
                        <div class="fd-bar__middle">
                            <div class="fd-bar__element">
                                <h1 class="fd-title fd-title--h5 fd-title--wrap">Business Card Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto perferendis sapiente velit excepturi rerum eligendi, nihil impedit exercitationem temporibus ex autem illo. Inventore, commodi molestias hic at quod saepe aut.</h1>
                            </div>
                        </div>
                    </div>

                    <div class="fd-quick-view__content">
                        <div class="fd-bar fd-bar--header-with-subheader">
                            <div class="fd-bar__left">
                                <span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border" role="img" aria-label="Avatar Wendy Wallace" title="Wendy Wallace">WW</span>
                                <div class="fd-quick-view__subheader-text">
                                    <h5 class="fd-title fd-title--h5 fd-title--wrap">Sarah Parker Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam pariatur ratione vitae doloremque numquam!</h5>
                                    <p class="fd-quick-view__subtitle fd-quick-view__subtitle--wrap">Visual Designer Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore officiis sunt, nostrum et adipisci excepturi accusamus odit ea doloribus ducimus sapiente culpa maxime sit aliquam! Mollitia qui ducimus porro unde?</p>
                                </div>
                            </div>
                        </div>
                        <div class="fd-form-group" role="group">
                            <div class="fd-form-group__header" aria-labelledby="contactDetails_spbw4q">
                                <p class="fd-form-group__header-text fd-form-group__header-text--wrap" id="contactDetails_spbw4q">Contact Details Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro beatae veritatis eum ratione, cumque rerum libero fugiat consequuntur totam fuga, assumenda quisquam vero earum excepturi, eius ullam in similique! Laborum.</p>
                            </div>
                            <div class="fd-form-item">
                                <label class="fd-form-label">Mobile</label>
                                <a class="fd-link" href="tel:+89181818181">
                                    <span class="fd-link__content">+89181818181</span>
                                </a>
                            </div>
                            <div class="fd-form-item">
                                <label class="fd-form-label fd-form-label--wrap">Phone Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi totam doloremque ipsa natus magnam rerum repudiandae autem, beatae reprehenderit aspernatur, cupiditate aliquam doloribus quaerat maiores dolores! Rerum amet expedita vitae.</label>
                                <a class="fd-link" href="tel:+2828282828">
                                    <span class="fd-link__content">
                                        +28282828283745873657816578265782456784568256834567384563845637845637845637485387453
                                    </span>
                                </a>
                            </div>
                            <div class="fd-form-item">
                                <label class="fd-form-label fd-form-label--wrap">Email Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aperiam ipsa, odit similique modi accusamus! Architecto, voluptatum voluptatibus temporibus dolor aspernatur repellendus, voluptas enim nobis libero vel, exercitationem tempora iure.</label>
                                <a class="fd-link" href="mailto:hello@fundamental.com">
                                    <span class="fd-link__content">
                                        helloloremvoluptatumvoluptatibustemporibus_doloraspernaturrepellendus_remvoluptatumvoluptatibus@fundamental.com
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-popover">
            <div class="fd-popover__control">
                <span
                    class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"
                    role="button"
                    aria-label="Avatar Christian Bow"
                    title="Christian Bow"
                    tabindex="0"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onclick="onPopoverClick('popover_avatar_4ahzcg');">
                </span>
            </div>
            <div class="fd-popover__body" aria-hidden="true" id="popover_avatar_4ahzcg">
                <div class="fd-quick-view">
                    <div class="fd-bar fd-bar--header">
                        <div class="fd-bar__middle">
                            <div class="fd-bar__element">
                                <h1 class="fd-title fd-title--h5">Business Card</h1>
                            </div>
                        </div>
                    </div>

                    <div class="fd-quick-view__content">
                        <div class="fd-bar fd-bar--header-with-subheader">
                            <div class="fd-bar__left">
                                <span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border fd-avatar--thumbnail" role="img" alt="Christian Bow" title="Christian Bow"></span>
                                <div class="fd-quick-view__subheader-text">
                                    <h5 class="fd-title fd-title--h5">Christian Bow</h5>
                                    <p class="fd-quick-view__subtitle">Marketing Manager</p>
                                </div>
                            </div>
                        </div>
                        <div class="fd-form-group" role="group">
                            <div class="fd-form-group__header" aria-labelledby="contactDetails_4ahzcg">
                                <p class="fd-form-group__header-text" id="contactDetails_4ahzcg">Contact Details</p>
                            </div>
                            <div class="fd-form-item">
                                <label class="fd-form-label">Mobile</label>
                                <a class="fd-link" href="tel:+89181818181">+89181818181</a>
                            </div>
                            <div class="fd-form-item">
                                <label class="fd-form-label">Phone</label>
                                <a class="fd-link" href="tel:+2828282828">+2828282828</a>
                            </div>
                            <div class="fd-form-item">
                                <label class="fd-form-label">Email</label>
                                <a class="fd-link" href="mailto:hello@fundamental.com">hello@fundamental.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-popover">
            <div class="fd-popover__control">
                <span
                    class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                    role="button"
                    aria-label="Avatar Endy Wallace"
                    title="Endy Wallace"
                    tabindex="0"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onclick="onPopoverClick('popover_avatar_qc1f1jf');">EW
                </span>
            </div>
            <div class="fd-popover__body" aria-hidden="true" id="popover_avatar_qc1f1jf">
                <div class="fd-quick-view">
                    <div class="fd-bar fd-bar--header">
                        <div class="fd-bar__middle">
                            <div class="fd-bar__element">
                                <h1 class="fd-title fd-title--h5">Business Card</h1>
                            </div>
                        </div>
                    </div>

                    <div class="fd-quick-view__content">
                        <div class="fd-bar fd-bar--header-with-subheader">
                            <div class="fd-bar__left">
                                <span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border" role="img" aria-label="Avatar Endy Wallace" title="Endy Wallace">EW</span>
                                <div class="fd-quick-view__subheader-text">
                                    <h5 class="fd-title fd-title--h5">Endy Wallace</h5>
                                    <p class="fd-quick-view__subtitle">Software Developer</p>
                                </div>
                            </div>
                        </div>
                        <div class="fd-form-group" role="group">
                            <div class="fd-form-group__header" aria-labelledby="contactDetails_qc1f1jf">
                                <p class="fd-form-group__header-text" id="contactDetails_qc1f1jf">Contact Details</p>
                            </div>
                            <div class="fd-form-item">
                                <label class="fd-form-label">Mobile</label>
                                <a class="fd-link" href="tel:+89181818181">+89181818181</a>
                            </div>
                            <div class="fd-form-item">
                                <label class="fd-form-label">Phone</label>
                                <a class="fd-link" href="tel:+2828282828">+2828282828</a>
                            </div>
                            <div class="fd-form-item">
                                <label class="fd-form-label">Email</label>
                                <a class="fd-link" href="mailto:hello@fundamental.com">hello@fundamental.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="fd-popover">
            <div class="fd-popover__control">
                <span
                    class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--overflow"
                    tabindex="0"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onclick="onPopoverClick('popover_avatar_more_aoiwjth');">+4
                </span>
            </div>

            <div class="fd-popover__body" aria-hidden="true" id="popover_avatar_more_aoiwjth">
                <div class="fd-popover__wrapper">
                    <div class="fd-popover__body-header">
                        <div class="fd-bar fd-bar--header">
                            <div class="fd-bar__middle">
                                <div class="fd-bar__element">
                                    <h1 class="fd-title fd-title--h5">Team Members (4)</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="fd-avatar-group__overflow-body">
                        <span
                            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                            role="button"
                            aria-label="Avatar Gordon Smith"
                            title="Gordon Smith"
                            tabindex="0">
                            <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
                        </span>

                        <span
                            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"

                            role="button"
                            alt="John Doe"
                            title="John Doe"
                            tabindex="0">
                        </span>

                        <span
                            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                            role="button"
                            aria-label="Avatar John Moe"
                            title="John Moe"
                            tabindex="0">JM
                        </span>

                        <span
                            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                            role="button"
                            aria-label="Avatar Joe Bloggs"
                            title="Joe Bloggs"
                            tabindex="0">JB
                        </span>
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
| `fd-avatar-group--group-type` | Style variant |
| `fd-avatar-group--individual-type` | Style variant |
| `fd-avatar-group--lg` | Style variant |
| `fd-avatar-group--md` | Style variant |
| `fd-avatar-group--sm` | Style variant |
| `fd-avatar-group--vertical` | Style variant |
| `fd-avatar-group--xl` | Style variant |
| `fd-avatar-group--xs` | Style variant |

## States

| Class | Description |
|-------|-------------|
| `is-active` | Active state |
| `is-compact` | Compact state |
| `is-disabled` | Disabled state |
| `is-focus` | Focus state |
| `is-hover` | Hover state |

## BEM Elements

This component uses the following BEM elements:

- `fd-avatar-group__overflow-body`
- `fd-avatar-group__popover-control`

## Related Components

This component works with or depends on:

- `avatar`
- `avatar-group`
- `bar`
- `button`
- `form-group`
- `form-item`
- `form-label`
- `form-layout-grid`
- `icon`
- `input`
- `layout-grid`
- `link`
- `popover`
- `quick-view`
- `title`

## Design Tokens

Key CSS variables used by this component:

- `--fdAvatarActiveColor`
- `--fdAvatarActiveHoverColor`
- `--fdAvatarBackgroundActiveColor`
- `--fdAvatarBackgroundActiveHoverColor`
- `--fdAvatarBackgroundColor`
- `--fdAvatarBorderActiveColor`
- `--fdAvatarBorderActiveHoverColor`
- `--fdAvatarBorderColor`
- `--fdAvatarBorderHoverColor`
- `--fdAvatarColor`
- `--fdAvatarGroupItemsGap`
- `--fdAvatarGroupItemsSpacingX`
- `--fdAvatarGroupItemsSpacingY`
- `--fdAvatarGroup_Focus_Outline_Offset`
- `--fdAvatarGroup_Focus_Outline_Radius`

*...and 5 more*

## Examples

### IndividualType

```html
<div class="fd-avatar-group fd-avatar-group--individual-type fd-avatar-group--sm">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <span
                class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                aria-label="Avatar Jason Smith"
                title="Jason Smith"
                tabindex="0"
                aria-haspopup="true"
                aria-expanded="false"
                onclick="onPopoverClick('popover_avatar_5z28edb');">JS
            </span>
            <div class="fd-popover__body" aria-hidden="false" id="popover_avatar_5z28edb">
                <div class="fd-quick-view">
                    <div class="fd-bar fd-bar--header">
                        <div class="fd-bar__middle">
                            <div class="fd-bar__element">
                                <h1 class="fd-title fd-title--h5">Business Card</h1>
                            </div>
                        </div>
                    </div>

                    <div class="fd-quick-view__content">
                        <div class="fd-bar fd-bar--header-with-subheader">
                            <div class="fd-bar__left">
                                <span
                                    class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                                    role="img"
                                    aria-label="Avatar Jason Smith">
                                    JS
                                </span>
                                <div class="fd-quick-view__subheader-text">
                                    <h5 class="fd-title fd-title--h5">Jason Smith</h5>
                                    <p class="fd-quick-view__subtitle">Marketing Manager</p>
                                </div>
                            </div>
                        </div>
                        <div class="fd-form-group" role="group">
                            <div class="fd-form-group__header" aria-labelledby="contactDetails_5z28edb">
                                <p class="fd-form-group__header-text" id="contactDetails_5z28edb">Contact Details</p>
                            </div>
                            <div class="fd-form-item">
                                <label class="fd-form-label">Mobile</label>
                                <a class="fd-link" href="tel:+89181818181"><span class="fd-link__content">+89181818181</span></a>
                            </div>
                            <div class="fd-form-item">
                                <label class="fd-form-label">Phone</label>
                                <a class="fd-link" href="tel:+2828282828"><span class="fd-link__content">+2828282828</span></a>
                            </div>
                            <div class="fd-form-item">
                                <label class="fd-form-label">Email</label>
                                <a class="fd-link" href="mailto:hello@fundamental.com"><span class="fd-link__content">hello@fundamental.com</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-popover">
            <div class="fd-popover__control">
                <span
                    class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                    role="button"
                    aria-label="Avatar Sarah Parker"
                    title="Sarah Parker"
                    tabindex="0"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onclick="onPopoverClick('popover_avatar_spbw4q');">
                    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
                </span>
            </div>
            <div class="fd-popover__body" aria-hidden="true" id="popover_avatar_spbw4q">
                <div class="fd-quick-view">
                    <div class="fd-bar fd-bar--header">
                        <div class="fd-bar__middle">
                            <div class="fd-bar__element">
                                <h1 class="fd-title fd-title--h5 fd-title--wrap">Business Card Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto perferendis sapiente velit excepturi rerum eligendi, nihil impedit exercitationem temporibus ex autem illo. Inventore, commodi molestias hic at quod saepe aut.</h1>
                            </div>
                        </div>
                    </div>

                    <div class="fd-quick-view__content">
                        <div class="fd-bar fd-bar--header-with-subheader">
                            <div class="fd-bar__left">
                                <span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border" role="img" aria-label="Avatar Wendy Wallace" title="Wendy Wallace">WW</span>
                                <div class="fd-quick-view__subheader-text">
                                    <h5 class="fd-title fd-title--h5 fd-title--wrap">Sarah Parker Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam pariatur ratione vitae doloremque numquam!</h5>
                                    <p class="fd-quick-view__subtitle fd-quick-view__subtitle--wrap">Visual Designer Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore officiis sunt, nostrum et adipisci excepturi accusamus odit ea doloribus ducimus sapiente culpa maxime sit aliquam! Mollitia qui ducimus porro unde?</p>
                                </div>
                            </div>
                        </div>
                        <div class="fd-form-group" role="group">
                            <div class="fd-form-group__header" aria-labelledby="contactDetails_spbw4q">
                                <p class="fd-form-group__header-text fd-form-group__header-text--wrap" id="contactDetails_spbw4q">Contact Details Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro beatae veritatis eum ratione, cumque rerum libero fugiat consequuntur totam fuga, assumenda quisquam vero earum excepturi, eius ullam in similique! Laborum.</p>
                            </div>
                            <div class="fd-form-item">
                                <label class="fd-form-label">Mobile</label>
                                <a class="fd-link" href="tel:+89181818181">
                                    <span class="fd-link__content">+89181818181</span>
                                </a>
                            </div>
                            <div class="fd-form-item">
                                <label class="fd-form-label fd-form-label--wrap">Phone Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi totam doloremque ipsa natus magnam rerum repudiandae autem, beatae reprehenderit aspernatur, cupiditate aliquam doloribus quaerat maiores dolores! Rerum amet expedita vitae.</label>
                                <a class="fd-link" href="tel:+2828282828">
                                    <span class="fd-link__content">
                                        +28282828283745873657816578265782456784568256834567384563845637845637845637485387453
                                    </span>
                                </a>
                            </div>
                            <div class="fd-form-item">
                                <label class="fd-form-label fd-form-label--wrap">Email Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aperiam ipsa, odit similique modi accusamus! Architecto, voluptatum voluptatibus temporibus dolor aspernatur repellendus, voluptas enim nobis libero vel, exercitationem tempora iure.</label>
                                <a class="fd-link" href="mailto:hello@fundamental.com">
                                    <span class="fd-link__content">
                                        helloloremvoluptatumvoluptatibustemporibus_doloraspernaturrepellendus_remvoluptatumvoluptatibus@fundamental.com
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-popover">
            <div class="fd-popover__control">
                <span
                    class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"
                    role="button"
                    aria-label="Avatar Christian Bow"
                    title="Christian Bow"
                    tabindex="0"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onclick="onPopoverClick('popover_avatar_4ahzcg');">
                </span>
            </div>
            <div class="fd-popover__body" aria-hidden="true" id="popover_avatar_4ahzcg">
                <div class="fd-quick-view">
                    <div class="fd-bar fd-bar--header">
                        <div class="fd-bar__middle">
                            <div class="fd-bar__element">
                                <h1 class="fd-title fd-title--h5">Business Card</h1>
                            </div>
                        </div>
                    </div>

                    <div class="fd-quick-view__content">
                        <div class="fd-bar fd-bar--header-with-subheader">
                            <div class="fd-bar__left">
                                <span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border fd-avatar--thumbnail" role="img" alt="Christian Bow" title="Christian Bow"></span>
                                <div class="fd-quick-view__subheader-text">
                                    <h5 class="fd-title fd-title--h5">Christian Bow</h5>
                                    <p class="fd-quick-view__subtitle">Marketing Manager</p>
                                </div>
                            </div>
                        </div>
                        <div class="fd-form-group" role="group">
                            <div class="fd-form-group__header" aria-labelledby="contactDetails_4ahzcg">
                                <p class="fd-form-group__header-text" id="contactDetails_4ahzcg">Contact Details</p>
                            </div>
                            <div class="fd-form-item">
                                <label class="fd-form-label">Mobile</label>
                                <a class="fd-link" href="tel:+89181818181">+89181818181</a>
                            </div>
                            <div class="fd-form-item">
                                <label class="fd-form-label">Phone</label>
                                <a class="fd-link" href="tel:+2828282828">+2828282828</a>
                            </div>
                            <div class="fd-form-item">
                                <label class="fd-form-label">Email</label>
                                <a class="fd-link" href="mailto:hello@fundamental.com">hello@fundamental.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-popover">
            <div class="fd-popover__control">
                <span
                    class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                    role="button"
                    aria-label="Avatar Endy Wallace"
                    title="Endy Wallace"
                    tabindex="0"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onclick="onPopoverClick('popover_avatar_qc1f1jf');">EW
                </span>
            </div>
            <div class="fd-popover__body" aria-hidden="true" id="popover_avatar_qc1f1jf">
                <div class="fd-quick-view">
                    <div class="fd-bar fd-bar--header">
                        <div class="fd-bar__middle">
                            <div class="fd-bar__element">
                                <h1 class="fd-title fd-title--h5">Business Card</h1>
                            </div>
                        </div>
                    </div>

                    <div class="fd-quick-view__content">
                        <div class="fd-bar fd-bar--header-with-subheader">
                            <div class="fd-bar__left">
                                <span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border" role="img" aria-label="Avatar Endy Wallace" title="Endy Wallace">EW</span>
                                <div class="fd-quick-view__subheader-text">
                                    <h5 class="fd-title fd-title--h5">Endy Wallace</h5>
                                    <p class="fd-quick-view__subtitle">Software Developer</p>
                                </div>
                            </div>
                        </div>
                        <div class="fd-form-group" role="group">
                            <div class="fd-form-group__header" aria-labelledby="contactDetails_qc1f1jf">
                                <p class="fd-form-group__header-text" id="contactDetails_qc1f1jf">Contact Details</p>
                            </div>
                            <div class="fd-form-item">
                                <label class="fd-form-label">Mobile</label>
                                <a class="fd-link" href="tel:+89181818181">+89181818181</a>
                            </div>
                            <div class="fd-form-item">
                                <label class="fd-form-label">Phone</label>
                                <a class="fd-link" href="tel:+2828282828">+2828282828</a>
                            </div>
                            <div class="fd-form-item">
                                <label class="fd-form-label">Email</label>
                                <a class="fd-link" href="mailto:hello@fundamental.com">hello@fundamental.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="fd-popover">
            <div class="fd-popover__control">
                <span
                    class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--overflow"
                    tabindex="0"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onclick="onPopoverClick('popover_avatar_more_aoiwjth');">+4
                </span>
            </div>

            <div class="fd-popover__body" aria-hidden="true" id="popover_avatar_more_aoiwjth">
                <div class="fd-popover__wrapper">
                    <div class="fd-popover__body-header">
                        <div class="fd-bar fd-bar--header">
                            <div class="fd-bar__middle">
                                <div class="fd-bar__element">
                                    <h1 class="fd-title fd-title--h5">Team Members (4)</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="fd-avatar-group__overflow-body">
                        <span
                            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                            role="button"
                            aria-label="Avatar Gordon Smith"
                            title="Gordon Smith"
                            tabindex="0">
                            <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
                        </span>

                        <span
                            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"

                            role="button"
                            alt="John Doe"
                            title="John Doe"
                            tabindex="0">
                        </span>

                        <span
                            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                            role="button"
                            aria-label="Avatar John Moe"
                            title="John Moe"
                            tabindex="0">JM
                        </span>

                        <span
                            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                            role="button"
                            aria-label="Avatar Joe Bloggs"
                            title="Joe Bloggs"
                            tabindex="0">JB
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

### IndividualTypeVertical

```html
<div class="is-compact">

    <div dir="ltr">
        <div class="fd-avatar-group fd-avatar-group--individual-type fd-avatar-group--sm fd-avatar-group--vertical">
            <div class="fd-popover">
                <div class="fd-popover__control">
                    <span
                        class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                        role="button"
                        aria-label="Avatar Jason Smith"
                        title="Jason Smith"
                        tabindex="0"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onclick="onPopoverClick('popover_avatar_5z28edb-v');">JS
                    </span>
                    <div class="fd-popover__body fd-popover__body--after fd-popover__body--arrow-left" aria-hidden="true" id="popover_avatar_5z28edb-v">
                        <div class="fd-quick-view">
                            <div class="fd-bar fd-bar--header">
                                <div class="fd-bar__middle">
                                    <div class="fd-bar__element">
                                        <h1 class="fd-title fd-title--h5">Business Card</h1>
                                    </div>
                                </div>
                            </div>

                            <div class="fd-quick-view__content">
                                <div class="fd-bar fd-bar--header-with-subheader">
                                    <div class="fd-bar__left">
                                        <span
                                            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                                            role="img"
                                            aria-label="Avatar Jason Smith">JS
                                        </span>
                                        <div class="fd-quick-view__subheader-text">
                                            <h5 class="fd-title fd-title--h5">Jason Smith</h5>
                                            <p class="fd-quick-view__subtitle">Marketing Manager</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="fd-form-group" role="group">
                                    <div class="fd-form-group__header fd-form-group__header--no-border fd-form-group__header--no-padding" aria-labelledby="contactDetails_5z28edb-v">
                                        <h4 id="contactDetails_5z28edb-v">Contact Details</h4>
                                    </div>
                                    <div class="fd-form-item">
                                        <label class="fd-form-label">Mobile</label>
                                        <a class="fd-link" href="tel:+89181818181"><span class="fd-link__content">+89181818181</span></a>
                                    </div>
                                    <div class="fd-form-item">
                                        <label class="fd-form-label">Phone</label>
                                        <a class="fd-link" href="tel:+2828282828"><span class="fd-link__content">+2828282828</span></a>
                                    </div>
                                    <div class="fd-form-item">
                                        <label class="fd-form-label">Email</label>
                                        <a class="fd-link" href="mailto:hello@fundamental.com"><span class="fd-link__content">hello@fundamental.com</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <span
                            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                            role="button"
                            aria-label="Avatar Sarah Parker"
                            title="Sarah Parker"
                            tabindex="0"
                            aria-haspopup="true"
                            aria-expanded="false"
                            onclick="onPopoverClick('popover_avatar_spbw4q-v');">
                            <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
                        </span>
                    </div>
                    <div class="fd-popover__body fd-popover__body--after fd-popover__body--arrow-left" aria-hidden="true" id="popover_avatar_spbw4q-v">
                        <div class="fd-quick-view">
                            <div class="fd-bar fd-bar--header">
                                <div class="fd-bar__middle">
                                    <div class="fd-bar__element">
                                        <h1 class="fd-title fd-title--h5">Business Card</h1>
                                    </div>
                                </div>
                            </div>

                            <div class="fd-quick-view__content">
                                <div class="fd-bar fd-bar--header-with-subheader">
                                    <div class="fd-bar__left">
                                        <span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border" role="img" aria-label="Avatar Sarah Parker">SP</span>
                                        <div class="fd-quick-view__subheader-text">
                                            <h5 class="fd-title fd-title--h5">Sarah Parker</h5>
                                            <p class="fd-quick-view__subtitle">Visual Designer</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="fd-form-group" role="group">
                                    <div class="fd-form-group__header fd-form-group__header--no-border fd-form-group__header--no-padding" aria-labelledby="contactDetails_spbw4q-v">
                                        <h4 class="fd-form-group__header-text" id="contactDetails_spbw4q-v">Contact Details</h4>
                                    </div>
                                    <div class="fd-form-item">
                                        <label class="fd-form-label">Mobile</label>
                                        <a class="fd-link" href="tel:+89181818181">+89181818181</a>
                                    </div>
                                    <div class="fd-form-item">
                                        <label class="fd-form-label">Phone</label>
                                        <a class="fd-link" href="tel:+2828282828">+2828282828</a>
                                    </div>
                                    <div class="fd-form-item">
                                        <label class="fd-form-label">Email</label>
                                        <a class="fd-link" href="mailto:hello@fundamental.com">hello@fundamental.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <span
                            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"
                            role="button"
                            alt="Portrait of Christian Bow"
                            aria-label="Avatar Christian Bow"
                            title="Christian Bow"
                            tabindex="0"
                            aria-haspopup="true"
                            aria-expanded="false"
                            onclick="onPopoverClick('popover_avatar_4ahzcg-v');">
                        </span>
                    </div>
                    <div class="fd-popover__body fd-popover__body--after fd-popover__body--arrow-left" aria-hidden="true" id="popover_avatar_4ahzcg-v">
                        <div class="fd-quick-view">
                            <div class="fd-bar fd-bar--header">
                                <div class="fd-bar__middle">
                                    <div class="fd-bar__element">
                                        <h1 class="fd-title fd-title--h5">Business Card</h1>
                                    </div>
                                </div>
                            </div>

                            <div class="fd-quick-view__content">
                                <div class="fd-bar fd-bar--header-with-subheader">
                                    <div class="fd-bar__left">
                                        <span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border fd-avatar--thumbnail" role="img" alt="Portrait of Christian Bow"></span>
                                        <div class="fd-quick-view__subheader-text">
                                            <h5 class="fd-title fd-title--h5">Christian Bow</h5>
                                            <p class="fd-quick-view__subtitle">Marketing Manager</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="fd-form-group" role="group">
                                    <div class="fd-form-group__header fd-form-group__header--no-border fd-form-group__header--no-padding" aria-labelledby="contactDetails_4ahzcg-v">
                                        <h4 id="contactDetails_4ahzcg-v">Contact Details</h4>
                                    </div>
                                    <div class="fd-form-item">
                                        <label class="fd-form-label">Mobile</label>
                                        <a class="fd-link" href="tel:+89181818181">+89181818181</a>
                                    </div>
                                    <div class="fd-form-item">
                                        <label class="fd-form-label">Phone</label>
                                        <a class="fd-link" href="tel:+2828282828">+2828282828</a>
                                    </div>
                                    <div class="fd-form-item">
                                        <label class="fd-form-label">Email</label>
                                        <a class="fd-link" href="mailto:hello@fundamental.com">hello@fundamental.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <span
                            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                            role="button"
                            aria-label="Avatar Endy Wallace"
                            title="Endy Wallace"
                            tabindex="0"
                            aria-haspopup="true"
                            aria-expanded="false"
                            onclick="onPopoverClick('popover_avatar_qc1f1jf-v');">EW
                        </span>
                    </div>
                    <div class="fd-popover__body fd-popover__body--after fd-popover__body--arrow-left" aria-hidden="true" id="popover_avatar_qc1f1jf-v">
                        <div class="fd-quick-view">
                            <div class="fd-bar fd-bar--header">
                                <div class="fd-bar__middle">
                                    <div class="fd-bar__element">
                                        <h1 class="fd-title fd-title--h5">Business Card</h1>
                                    </div>
                                </div>
                            </div>

                            <div class="fd-quick-view__content">
                                <div class="fd-bar fd-bar--header-with-subheader">
                                    <div class="fd-bar__left">
                                        <span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border" role="img" aria-label="Avatar Endy Wallace">EW</span>
                                        <div class="fd-quick-view__subheader-text">
                                            <h5 class="fd-title fd-title--h5">Endy Wallace</h5>
                                            <p class="fd-quick-view__subtitle">Software Developer</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="fd-form-group" role="group">
                                    <div class="fd-form-group__header fd-form-group__header--no-border fd-form-group__header--no-padding" aria-labelledby="contactDetails_qc1f1jf-v">
                                        <h4 id="contactDetails_qc1f1jf-v">Contact Details</h4>
                                    </div>
                                    <div class="fd-form-item">
                                        <label class="fd-form-label">Mobile</label>
                                        <a class="fd-link" href="tel:+89181818181">+89181818181</a>
                                    </div>
                                    <div class="fd-form-item">
                                        <label class="fd-form-label">Phone</label>
                                        <a class="fd-link" href="tel:+2828282828">+2828282828</a>
                                    </div>
                                    <div class="fd-form-item">
                                        <label class="fd-form-label">Email</label>
                                        <a class="fd-link" href="mailto:hello@fundamental.com">hello@fundamental.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <span
                            class="fd-avatar fd-avatar--accent-color-2  fd-avatar--sm fd-avatar--circle fd-avatar--overflow"
                            tabindex="0"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                            onclick="onPopoverClick('popover_avatar_more_aoiwjth-v');">+4
                        </span>
                    </div>

                    <div class="fd-popover__body fd-popover__body--after fd-popover__body--arrow-left" aria-hidden="true" id="popover_avatar_more_aoiwjth-v">
                        <div class="fd-popover__wrapper">
                            <div class="fd-popover__body-header">
                                <div class="fd-bar fd-bar--header">
                                    <div class="fd-bar__middle">
                                        <div class="fd-bar__element">
                                            <h1 class="fd-title fd-title--h5">Team Members (4)</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="fd-avatar-group__overflow-body">
                                <span
                                    class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                                    role="button"
                                    aria-label="Avatar Gordon Smith"
                                    title="Gordon Smith"
                                    tabindex="0">
                                    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
                                </span>

                                <span
                                    class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"

                                    role="button"
                                    alt="Portrait of Adam Doe"
                                    title="Adam Doe"
                                    tabindex="0">
                                </span>

                                <span
                                    class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                                    role="button"
                                    aria-label="Avatar Mandy Moore"
                                    title="Mandy Moore"
                                    tabindex="0">JM
                                </span>

                                <span
                                    class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                                    role="button"
                                    aria-label="Avatar Jimi Bloggs"
                                    title="Jimi Bloggs"
                                    tabindex="0">JB
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
```

### GroupType

```html
<div class="fd-popover">
    <div class="fd-popover__control fd-avatar-group__popover-control"
        role="button"
        tabindex="0"
        aria-label="Has popup type dialog conjoined avatars, 6 avatars displayed, 8 avatars hidden, activate for complete list"
        aria-haspopup="true"
        aria-expanded="false"
        onclick="onPopoverClick('popover_avatar-group_tztuj');">
        <div class="fd-avatar-group fd-avatar-group--group-type fd-avatar-group--md">
            <span
                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border"
                role="img"
                aria-label="Wendy Wallace">WW
            </span>

            <span
                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border"
                role="img"
                aria-label="Simon Drew">
                <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
            </span>

            <span
                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"
                role="img"
                alt="Portrait of Brad Coehn">
            </span>

            <span
                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border"
                role="img"
                aria-label="Endy Wallace">EW
            </span>

            <span
                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border"
                role="img"
                aria-label="Whitney Copper">
                <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
            </span>

            <span
                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"

                role="img"
                alt="Portrait of John Doe">
            </span>

            <span
                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--overflow"
                role="button"
                tabindex="-1">+8
            </span>
        </div>

        <div class="fd-popover__body" aria-hidden="false" id="popover_avatar-group_tztuj">
            <div class="fd-popover__wrapper">
                <div class="fd-popover__body-header">
                    <div class="fd-bar fd-bar--header">
                        <div class="fd-bar__middle">
                            <div class="fd-bar__element">
                                <h1 class="fd-title fd-title--h5">Team Members (14)</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fd-avatar-group__overflow-body">
                    <span class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border" role="img" aria-label="Wendy Wallace">WW</span>

                    <span class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border" role="img" aria-label="Sarah Smith">
                        <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation"></i>
                    </span>

                    <span class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border fd-avatar--thumbnail" role="img" alt="Portrait of Alex Cardigan"></span>

                    <span class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border" role="img" aria-label="Endy Wallace">EW</span>

                    <span class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border" role="img" aria-label="Whitney Bow">
                        <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation"></i>
                    </span>

                    <span class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border fd-avatar--thumbnail" role="img" alt="Portrait of Maria Berrigton"></span>

                    <span class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border" role="img" aria-label="Andy Wallace">AW</span>

                    <span class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border" role="img" aria-label="John Carter">
                        <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation"></i>
                    </span>

                    <span class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border fd-avatar--thumbnail" role="img" alt="Portrait of Brian Tracey"></span>

                    <span class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border" role="img" aria-label="Jared Moe">JM</span>

                    <span class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border" role="img" aria-label="Ben Bloggs">BB</span>

                    <span class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border" role="img" aria-label="Simon Swan">
                        <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation"></i>
                    </span>

                    <span class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border fd-avatar--thumbnail" role="img" alt="Portrait of Mike Simons"></span>

                    <span class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border" role="img" aria-label="Fred Bloggs">FB</span>

                    <span class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border" role="img" aria-label="Cameran Alleman">CA</span>
                </div>
            </div>
        </div>
    </div>

    <h4>XS size</h4>
    <div class="fd-avatar-group fd-avatar-group--group-type fd-avatar-group--xs">
        <span
            class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--border"
            role="img"
            aria-label="Wendy Wallace">WW
        </span>

        <span
            class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--border"
            role="img"
            aria-label="Simon Drew">
            <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
        </span>

        <span
            class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"
            role="img"
            alt="Portrait of Brad Coehn">
        </span>

        <span
            class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--border"
            role="img"
            aria-label="Endy Wallace">EW
        </span>

        <span
            class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--border"
            role="img"
            aria-label="Whitney Copper">
            <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
        </span>

        <span
            class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"

            role="img"
            alt="Portrait of John Doe">
        </span>

        <span
            class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--overflow"
            role="button"
            tabindex="-1">+8
        </span>
    </div>

    <h4>SM size</h4>
    <div class="fd-avatar-group fd-avatar-group--group-type fd-avatar-group--sm">
        <span
            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
            role="img"
            aria-label="Wendy Wallace">WW
        </span>

        <span
            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
            role="img"
            aria-label="Simon Drew">
            <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
        </span>

        <span
            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"
            role="img"
            alt="Portrait of Brad Coehn">
        </span>

        <span
            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
            role="img"
            aria-label="Endy Wallace">EW
        </span>

        <span
            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
            role="img"
            aria-label="Whitney Copper">
            <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
        </span>

        <span
            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"

            role="img"
            alt="Portrait of John Doe">
        </span>

        <span
            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--overflow"
            role="button"
            tabindex="-1">+8
        </span>
    </div>

    <h4>MD size</h4>
    <div class="fd-avatar-group fd-avatar-group--group-type fd-avatar-group--md">
        <span
            class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border"
            role="img"
            aria-label="Wendy Wallace">WW
        </span>

        <span
            class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border"
            role="img"
            aria-label="Simon Drew">
            <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
        </span>

        <span
            class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"
            role="img"
            alt="Portrait of Brad Coehn">
        </span>

        <span
            class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border"
            role="img"
            aria-label="Endy Wallace">EW
        </span>

        <span
            class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border"
            role="img"
            aria-label="Whitney Copper">
            <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
        </span>

        <span
            class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"

            role="img"
            alt="Portrait of John Doe">
        </span>

        <span
            class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--overflow"
            role="button"
            tabindex="-1">+8
        </span>
    </div>

    <h4>LG size</h4>
    <div class="fd-avatar-group fd-avatar-group--group-type fd-avatar-group--lg">
        <span
            class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border"
            role="img"
            aria-label="Wendy Wallace">WW
        </span>

        <span
            class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border"
            role="img"
            aria-label="Simon Drew">
            <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
        </span>

        <span
            class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"
            role="img"
            alt="Portrait of Brad Coehn">
        </span>

        <span
            class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border"
            role="img"
            aria-label="Endy Wallace">EW
        </span>

        <span
            class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border"
            role="img"
            aria-label="Whitney Copper">
            <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
        </span>

        <span
            class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"

            role="img"
            alt="Portrait of John Doe">
        </span>

        <span
            class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--overflow"
            role="button"
            tabindex="-1">+8
        </span>
    </div>

    <h4>XL size</h4>
    <div class="fd-avatar-group fd-avatar-group--group-type fd-avatar-group--xl">
        <span
            class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--border"
            role="img"
            aria-label="Wendy Wallace">WW
        </span>

        <span
            class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--border"
            role="img"
            aria-label="Simon Drew">
            <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
        </span>

        <span
            class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"
            role="img"
            alt="Portrait of Brad Coehn">
        </span>

        <span
            class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--border"
            role="img"
            aria-label="Endy Wallace">EW
        </span>

        <span
            class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--border"
            role="img"
            aria-label="Whitney Copper">
            <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
        </span>

        <span
            class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"

            role="img"
            alt="Portrait of John Doe">
        </span>

        <span
            class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--overflow"
            role="button"
            tabindex="-1">+8
        </span>
    </div>
```

### GroupTypeVertical

```html
<div class="fd-popover">
    <div class="fd-popover__control fd-avatar-group__popover-control"
        role="button"
        tabindex="0"
        aria-label="Conjoined avatars, 6 avatars displayed, 8 avatars hidden, activate for complete list"
        aria-haspopup="true"
        aria-expanded="false"
        onclick="onPopoverClick('popover_avatar-group_tztuj-v');">
        <div class="fd-avatar-group fd-avatar-group--group-type fd-avatar-group--lg fd-avatar-group--vertical">
            <span
                class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border"
                role="img"
                aria-label="Wendy Wallace">WW
            </span>

            <span
                class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border"
                role="img"
                aria-label="Simon Dane">
                <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
            </span>

            <span
                class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"
                role="img"
                alt="Portrait of Michael Smith">
            </span>

            <span
                class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border"
                role="img"
                aria-label="Endy Wallace">EW
            </span>

            <span
                class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border"
                role="img"
                aria-label="Whitney Copper">
                <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
            </span>

            <span
                class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"

                role="img"
                alt="Portrait of James Johnson">
            </span>

            <span
                class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--overflow"
                role="button"
                tabindex="-1">+8
            </span>
        </div>

        <div class="fd-popover__body fd-popover__body--after fd-popover__body--arrow-left" aria-hidden="true" id="popover_avatar-group_tztuj-v">
            <div class="fd-popover__wrapper">
                <div class="fd-popover__body-header">
                    <div class="fd-bar fd-bar--header">
                        <div class="fd-bar__middle">
                            <div class="fd-bar__element">
                                <h1 class="fd-title fd-title--h5">Team Members (14)</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fd-avatar-group__overflow-body">
                    <span class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border" role="img" aria-label="Wendy Wallace">WW</span>

                    <span class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border" role="img" aria-label="Sarah Smith">
                        <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation"></i>
                    </span>

                    <span class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border fd-avatar--thumbnail" role="img" alt="Portrait of William Smith"></span>

                    <span class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border" role="img" aria-label="Endy Wallace" title="Endy Wallace">EW</span>

                    <span class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border" role="img" aria-label="Whitney Bow">
                        <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation"></i>
                    </span>

                    <span class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border fd-avatar--thumbnail" role="img" alt="Portrait of Mitch Walters"></span>

                    <span class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border" role="img" aria-label="Andy Wallace">AW</span>

                    <span class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border" role="img" aria-label="John Carter">
                        <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation"></i>
                    </span>

                    <span class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border fd-avatar--thumbnail" role="img" alt="Portrait of Melanie Burke"></span>

                    <span class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border" role="img" aria-label="John Moe">JM</span>

                    <span class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border" role="img" aria-label="Ben Bloggs">BB</span>

                    <span class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border" role="img" aria-label="Simon Swan">
                        <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation"></i>
                    </span>

                    <span class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border fd-avatar--thumbnail" role="img" alt="Portrait of Maria Caffrey"></span>

                    <span class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border" role="img" aria-label="Fred Bloggs">FB</span>

                    <span class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border" role="img" aria-label="Jan Alleman">JA</span>
                </div>
            </div>
        </div>
    </div>

    <div class="fd-avatar-group fd-avatar-group--group-type fd-avatar-group--xs fd-avatar-group--vertical" role="button" tabindex="0" aria-label="Conjoined avatars. 6 displayed, 8 hidden. Activate for complete list.">
        <span
            class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--border"
            role="img"
            aria-label="Wendy Wallace">WW
        </span>

        <span
            class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--border"
            role="img"
            aria-label="Simon Dane">
            <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
        </span>

        <span
            class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"
            role="img"
            alt="Portrait of Michael Smith">
        </span>

        <span
            class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--border"
            role="img"
            aria-label="Endy Wallace">EW
        </span>

        <span
            class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--border"
            role="img"
            aria-label="Whitney Copper">
            <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
        </span>

        <span
            class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"

            role="img"
            alt="Portrait of James Johnson">
        </span>

        <span
            class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--overflow"
            role="button"
            tabindex="-1">+8
        </span>

        <div class="fd-avatar-group fd-avatar-group--group-type fd-avatar-group--sm fd-avatar-group--vertical" role="button" tabindex="0" aria-label="Conjoined avatars. 6 displayed, 8 hidden. Activate for complete list.">
            <span
                class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                role="img"
                aria-label="Wendy Wallace">WW
            </span>

            <span
                class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                role="img"
                aria-label="Simon Dane">
                <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
            </span>

            <span
                class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"
                role="img"
                alt="Portrait of Michael Smith">
            </span>

            <span
                class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                role="img"
                aria-label="Endy Wallace">EW
            </span>

            <span
                class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                role="img"
                aria-label="Whitney Copper">
                <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
            </span>

            <span
                class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"

                role="img"
                alt="Portrait of James Johnson">
            </span>

            <span
                class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--overflow"
                role="button"
                tabindex="-1">+8
            </span>
        </div>

        <div class="fd-avatar-group fd-avatar-group--group-type fd-avatar-group--md fd-avatar-group--vertical" role="button" tabindex="0" aria-label="Conjoined avatars. 6 displayed, 8 hidden. Activate for complete list.">
            <span
                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border"
                role="img"
                aria-label="Wendy Wallace">WW
            </span>

            <span
                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border"
                role="img"
                aria-label="Simon Dane">
                <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
            </span>

            <span
                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"
                role="img"
                alt="Portrait of Michael Smith">
            </span>

            <span
                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border"
                role="img"
                aria-label="Endy Wallace">EW
            </span>

            <span
                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border"
                role="img"
                aria-label="Whitney Copper">
                <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
            </span>

            <span
                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"

                role="img"
                alt="Portrait of James Johnson">
            </span>

            <span
                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--overflow"
                role="button"
                tabindex="-1">+8
            </span>
        </div>

        <div class="fd-avatar-group fd-avatar-group--group-type fd-avatar-group--lg fd-avatar-group--vertical" role="button" tabindex="0" aria-label="Conjoined avatars. 6 displayed, 8 hidden. Activate for complete list.">
            <span
                class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border"
                role="img"
                aria-label="Wendy Wallace">WW
            </span>

            <span
                class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border"
                role="img"
                aria-label="Simon Dane">
                <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
            </span>

            <span
                class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"
                role="img"
                alt="Portrait of Michael Smith">
            </span>

            <span
                class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border"
                role="img"
                aria-label="Endy Wallace">EW
            </span>

            <span
                class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border"
                role="img"
                aria-label="Whitney Copper">
                <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
            </span>

            <span
                class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"

                role="img"
                alt="Portrait of James Johnson">
            </span>

            <span
                class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--overflow"
                role="button"
                tabindex="-1">+8
            </span>
        </div>

        <div class="fd-avatar-group fd-avatar-group--group-type fd-avatar-group--xl fd-avatar-group--vertical" role="button" tabindex="0" aria-label="Conjoined avatars. 6 displayed, 8 hidden. Activate for complete list.">
            <span
                class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--border"
                role="img"
                aria-label="Wendy Wallace">WW
            </span>

            <span
                class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--border"
                role="img"
                aria-label="Simon Dane">
                <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
            </span>

            <span
                class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"
                role="img"
                alt="Portrait of Michael Smith">
            </span>

            <span
                class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--border"
                role="img"
                aria-label="Endy Wallace">EW
            </span>

            <span
                class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--border"
                role="img"
                aria-label="Whitney Copper">
                <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
            </span>

            <span
                class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"

                role="img"
                alt="Portrait of James Johnson">
            </span>

            <span
                class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--overflow"
                role="button"
                tabindex="-1">+8
            </span>
        </div>
    </div>
```

### GroupTypeInteractionStates

```html
<div><b>Regular</b></div><div class="fd-popover">
    <div class="fd-popover__control fd-avatar-group__popover-control"
        role="button"
        tabindex="0"
        aria-label="Conjoined avatars. 6 displayed, 8 hidden. Activate for complete list.">
        <div class="fd-avatar-group fd-avatar-group--group-type fd-avatar-group--md">
            <span
                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--accent-color-1"
                role="img"
                aria-label="Wendy Wallace">WW
            </span>

            <span
                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--accent-color-2"
                role="img"
                aria-label="Simon Doe">
                <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
            </span>

            <span
                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--thumbnail"
                role="img"
                alt="Portrait of Ben Johnson">
            </span>

            <span
                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--accent-color-3"
                role="img"
                aria-label="Endy Wallace">EW
            </span>

            <span
                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border"
                role="img"
                aria-label="Whitney Copper">
                <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
            </span>

            <span
                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"

                role="img"
                alt="Portrait of Brian Tracey">
            </span>

            <span
                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--overflow"
                role="button"
                tabindex="-1">+8
            </span>
        </div>
    </div>

    <div><b>Hover</b></div><div class="fd-popover">
        <div class="fd-popover__control fd-avatar-group__popover-control"
            role="button"
            tabindex="0"
            aria-label="Conjoined avatars. 6 displayed, 8 hidden. Activate for complete list.">
            <div class="fd-avatar-group fd-avatar-group--group-type fd-avatar-group--md is-hover">

                <span
                    class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--accent-color-1"
                    role="img"
                    aria-label="Wendy Wallace">WW
                </span>

                <span
                    class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--accent-color-2"
                    role="img"
                    aria-label="Simon Doe">
                    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
                </span>

                <span
                    class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--thumbnail"
                    role="img"
                    alt="Portrait of Ben Johnson">
                </span>

                <span
                    class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--accent-color-3"
                    role="img"
                    aria-label="Endy Wallace">EW
                </span>

                <span
                    class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border"
                    role="img"
                    aria-label="Whitney Copper">
                    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
                </span>

                <span
                    class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"

                    role="img"
                    alt="Portrait of Brian Tracey">
                </span>

                <span
                    class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--overflow"
                    role="button"
                    tabindex="-1">+8
                </span>
            </div>
        </div>

        <div><b>Active/Toggled</b></div><div class="fd-popover">
            <div class="fd-popover__control fd-avatar-group__popover-control"
                role="button"
                tabindex="0"
                aria-label="Conjoined avatars. 6 displayed, 8 hidden. Activate for complete list.">
                <div class="fd-avatar-group fd-avatar-group--group-type fd-avatar-group--md is-active">
                    <span
                        class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--accent-color-1"
                        role="img"
                        aria-label="Wendy Wallace">WW
                    </span>

                    <span
                        class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--accent-color-2"
                        role="img"
                        aria-label="Simon Doe">
                        <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
                    </span>

                    <span
                        class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--thumbnail"
                        role="img"
                        alt="Portrait of Ben Johnson">
                    </span>

                    <span
                        class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--accent-color-3"
                        role="img"
                        aria-label="Endy Wallace">EW
                    </span>

                    <span
                        class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border"
                        role="img"
                        aria-label="Whitney Copper">
                        <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
                    </span>

                    <span
                        class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"

                        role="img"
                        alt="Portrait of Brian Tracey">
                    </span>

                    <span
                        class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--overflow"
                        role="button"
                        tabindex="-1">+8
                    </span>
                </div>
            </div>

            <div><b>Disabled</b></div><div class="fd-popover">
                <div class="fd-popover__control fd-avatar-group__popover-control"
                    role="button"
                    aria-label="Conjoined avatars. 6 displayed, 8 hidden. Activate for complete list.">
                    <div class="fd-avatar-group fd-avatar-group--group-type fd-avatar-group--md is-disabled">
                        <span
                            class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--accent-color-1"
                            role="img"
                            aria-label="Wendy Wallace">WW
                        </span>

                        <span
                            class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--accent-color-2"
                            role="img"
                            aria-label="Simon Doe">
                            <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
                        </span>

                        <span
                            class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--thumbnail"
                            role="img"
                            alt="Portrait of Ben Johnson">
                        </span>

                        <span
                            class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--accent-color-3"
                            role="img"
                            aria-label="Endy Wallace">EW
                        </span>

                        <span
                            class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border"
                            role="img"
                            aria-label="Whitney Copper">
                            <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
                        </span>

                        <span
                            class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"

                            role="img"
                            alt="Portrait of Brian Tracey">
                        </span>

                        <span
                            class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--overflow"
                            role="button"
                            tabindex="-1">+8
                        </span>
                    </div>
                </div>

                <div><b>Focus</b></div><div class="fd-popover">
                    <div class="fd-popover__control fd-avatar-group__popover-control"
                        role="button"
                        tabindex="0"
                        aria-label="Conjoined avatars. 6 displayed, 8 hidden. Activate for complete list.">
                        <div class="fd-avatar-group fd-avatar-group--group-type fd-avatar-group--md is-focus">
                            <span
                                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--accent-color-1"
                                role="img"
                                aria-label="Wendy Wallace">WW
                            </span>

                            <span
                                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--accent-color-2"
                                role="img"
                                aria-label="Simon Doe">
                                <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
                            </span>

                            <span
                                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--thumbnail"
                                role="img"
                                alt="Portrait of Ben Johnson">
                            </span>

                            <span
                                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--accent-color-3"
                                role="img"
                                aria-label="Endy Wallace">EW
                            </span>

                            <span
                                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border"
                                role="img"
                                aria-label="Whitney Copper">
                                <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
                            </span>

                            <span
                                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"

                                role="img"
                                alt="Portrait of Brian Tracey">
                            </span>

                            <span
                                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--overflow"
                                role="button"
                                tabindex="-1">+8963
                            </span>
                        </div>
                    </div>
```

### Overflow

The overflow Avatar inherits the styling of the secondary regular Button control. Applications can also choose to set the background color to a random or specific color from the Avatar. The span element has a \

```html
<div class="fd-avatar-group fd-avatar-group--individual-type fd-avatar-group--sm">
    <div class="fd-popover">
        <div class="fd-popover__control">
            <span
                class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                role="button"
                tabindex="0"
                aria-label="Wendy Wallace"
                title="Wendy Wallace">WW
            </span>
        </div>
        <div class="fd-popover">
            <div class="fd-popover__control">
                <span
                    class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                    role="button"
                    tabindex="0"
                    aria-label="Jason Goldwell"
                    title="Jason Goldwell">
                    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
                </span>
            </div>
        </div>
        <div class="fd-popover">
            <div class="fd-popover__control">
                <span
                    class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"
                    role="button"
                    alt="Portrait of Christian Bow"
                    title="Christian Bow"
                    tabindex="0">
                </span>
            </div>
        </div>
        <div class="fd-popover">
            <div class="fd-popover__control">
                <span
                    class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border" role="button"
                    aria-label="Endy Wallace"
                    tabindex="0"
                    title="Endy Wallace">EW</span>
                </div>
            </div>

            <div class="fd-popover">
                <div class="fd-popover__control">
                    <span
                        class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--overflow" tabindex="0"
                        role="button">+4
                    </span>
                </div>
            </div>
        </div>

        <div class="fd-avatar-group fd-avatar-group--individual-type fd-avatar-group--xs">
            <div class="fd-popover">
                <div class="fd-popover__control">
                    <span
                        class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--border"
                        role="button"
                        tabindex="0"
                        aria-label="Wendy Wallace"
                        title="Wendy Wallace">WW
                    </span>
                </div>
            </div>
            <div class="fd-popover">
                <div class="fd-popover__control">
                    <span
                        class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--border"
                        role="button"
                        tabindex="0"
                        aria-label="Jason Goldwell"
                        title="Jason Goldwell">
                        <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
            <div class="fd-popover">
                <div class="fd-popover__control">
                    <span
                        class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"
                        role="button"
                        alt="Portrait of Christian Bow"
                        title="Christian Bow"
                        tabindex="0">
                    </span>
                </div>
            </div>
            <div class="fd-popover">
                <div class="fd-popover__control">
                    <span
                        class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--border" role="button"
                        aria-label="Endy Wallace"
                        tabindex="0"
                        title="Endy Wallace">EW</span>
                    </div>
                </div>

                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <span
                            class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--overflow" tabindex="0"
                            role="button">+19796
                        </span>
                    </div>
                </div>
            </div>

            <div class="fd-avatar-group fd-avatar-group--individual-type fd-avatar-group--sm">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <span
                            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                            role="button"
                            tabindex="0"
                            aria-label="Wendy Wallace"
                            title="Wendy Wallace">WW
                        </span>
                    </div>
                </div>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <span
                            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                            role="button"
                            tabindex="0"
                            aria-label="Jason Goldwell"
                            title="Jason Goldwell">
                            <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <span
                            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"
                            role="button"
                            alt="Portrait of Christian Bow"
                            title="Christian Bow"
                            tabindex="0">
                        </span>
                    </div>
                </div>
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <span
                            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border" role="button"
                            aria-label="Endy Wallace"
                            tabindex="0"
                            title="Endy Wallace">EW</span>
                        </div>
                    </div>

                    <div class="fd-popover">
                        <div class="fd-popover__control">
                            <span
                                class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--overflow" tabindex="0"
                                role="button">+19796
                            </span>
                        </div>
                    </div>
                </div>

                <div class="fd-avatar-group fd-avatar-group--individual-type fd-avatar-group--md">
                    <div class="fd-popover">
                        <div class="fd-popover__control">
                            <span
                                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border"
                                role="button"
                                tabindex="0"
                                aria-label="Wendy Wallace"
                                title="Wendy Wallace">WW
                            </span>
                        </div>
                    </div>
                    <div class="fd-popover">
                        <div class="fd-popover__control">
                            <span
                                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border"
                                role="button"
                                tabindex="0"
                                aria-label="Jason Goldwell"
                                title="Jason Goldwell">
                                <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                    <div class="fd-popover">
                        <div class="fd-popover__control">
                            <span
                                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"
                                role="button"
                                alt="Portrait of Christian Bow"
                                title="Christian Bow"
                                tabindex="0">
                            </span>
                        </div>
                    </div>
                    <div class="fd-popover">
                        <div class="fd-popover__control">
                            <span
                                class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border" role="button"
                                aria-label="Endy Wallace"
                                tabindex="0"
                                title="Endy Wallace">EW</span>
                            </div>
                        </div>

                        <div class="fd-popover">
                            <div class="fd-popover__control">
                                <span
                                    class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--overflow" tabindex="0"
                                    role="button">+19796
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="fd-avatar-group fd-avatar-group--individual-type fd-avatar-group-lg">
                        <div class="fd-popover">
                            <div class="fd-popover__control">
                                <span
                                    class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border"
                                    role="button"
                                    tabindex="0"
                                    aria-label="Wendy Wallace"
                                    title="Wendy Wallace">WW
                                </span>
                            </div>
                        </div>
                        <div class="fd-popover">
                            <div class="fd-popover__control">
                                <span
                                    class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border"
                                    role="button"
                                    tabindex="0"
                                    aria-label="Jason Goldwell"
                                    title="Jason Goldwell">
                                    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                        <div class="fd-popover">
                            <div class="fd-popover__control">
                                <span
                                    class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"
                                    role="button"
                                    alt="Portrait of Christian Bow"
                                    title="Christian Bow"
                                    tabindex="0">
                                </span>
                            </div>
                        </div>
                        <div class="fd-popover">
                            <div class="fd-popover__control">
                                <span
                                    class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--border" role="button"
                                    aria-label="Endy Wallace"
                                    tabindex="0"
                                    title="Endy Wallace">EW</span>
                                </div>
                            </div>

                            <div class="fd-popover">
                                <div class="fd-popover__control">
                                    <span
                                        class="fd-avatar fd-avatar--lg fd-avatar--circle fd-avatar--overflow" tabindex="0"
                                        role="button">+19796
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="fd-avatar-group fd-avatar-group--individual-type fd-avatar-group-xl">
                            <div class="fd-popover">
                                <div class="fd-popover__control">
                                    <span
                                        class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--border"
                                        role="button"
                                        tabindex="0"
                                        aria-label="Wendy Wallace"
                                        title="Wendy Wallace">WW
                                    </span>
                                </div>
                            </div>
                            <div class="fd-popover">
                                <div class="fd-popover__control">
                                    <span
                                        class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--border"
                                        role="button"
                                        tabindex="0"
                                        aria-label="Jason Goldwell"
                                        title="Jason Goldwell">
                                        <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="fd-popover">
                                <div class="fd-popover__control">
                                    <span
                                        class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"
                                        role="button"
                                        alt="Portrait of Christian Bow"
                                        title="Christian Bow"
                                        tabindex="0">
                                    </span>
                                </div>
                            </div>
                            <div class="fd-popover">
                                <div class="fd-popover__control">
                                    <span
                                        class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--border" role="button"
                                        aria-label="Endy Wallace"
                                        tabindex="0"
                                        title="Endy Wallace">EW</span>
                                    </div>
                                </div>

                                <div class="fd-popover">
                                    <div class="fd-popover__control">
                                        <span
                                            class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--overflow" tabindex="0"
                                            role="button">+19796
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="fd-avatar-group fd-avatar-group--individual-type fd-avatar-group--sm">
                                <div class="fd-popover">
                                    <div class="fd-popover__control">
                                        <span
                                            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                                            role="button"
                                            tabindex="0"
                                            aria-label="Wendy Wallace"
                                            title="Wendy Wallace">WW
                                        </span>
                                    </div>
                                </div>
                                <div class="fd-popover">
                                    <div class="fd-popover__control">
                                        <span
                                            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                                            role="button"
                                            tabindex="0"
                                            aria-label="Jason Goldwell"
                                            title="Jason Goldwell">
                                            <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="fd-popover">
                                    <div class="fd-popover__control">
                                        <span
                                            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"
                                            role="button"
                                            alt="Portrait of Christian Bow"
                                            title="Christian Bow"
                                            tabindex="0">
                                        </span>
                                    </div>
                                </div>
                                <div class="fd-popover">
                                    <div class="fd-popover__control">
                                        <span
                                            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border" role="button"
                                            aria-label="Endy Wallace"
                                            tabindex="0"
                                            title="Endy Wallace">EW</span>
                                        </div>
                                    </div>

                                    <div class="fd-popover">
                                        <div class="fd-popover__control">
                                            <span
                                                class="fd-avatar fd-avatar--accent-color-5 fd-avatar--sm fd-avatar--circle fd-avatar--overflow" tabindex="0"
                                                role="button">+4
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="fd-avatar-group fd-avatar-group--individual-type fd-avatar-group--sm">
                                    <div class="fd-popover">
                                        <div class="fd-popover__control">
                                            <span
                                                class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                                                role="button"
                                                tabindex="0"
                                                aria-label="Wendy Wallace"
                                                title="Wendy Wallace">WW
                                            </span>
                                        </div>
                                    </div>
                                    <div class="fd-popover">
                                        <div class="fd-popover__control">
                                            <span
                                                class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                                                role="button"
                                                tabindex="0"
                                                aria-label="Jason Goldwell"
                                                title="Jason Goldwell">
                                                <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="fd-popover">
                                        <div class="fd-popover__control">
                                            <span
                                                class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"
                                                role="button"
                                                alt="Portrait of Christian Bow"
                                                title="Christian Bow"
                                                tabindex="0">
                                            </span>
                                        </div>
                                    </div>
                                    <div class="fd-popover">
                                        <div class="fd-popover__control">
                                            <span
                                                class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border" role="button"
                                                aria-label="Endy Wallace"
                                                tabindex="0"
                                                title="Endy Wallace">EW</span>
                                            </div>
                                        </div>

                                        <div class="fd-popover">
                                            <div class="fd-popover__control">
                                                <span
                                                    class="fd-avatar fd-avatar--sm fd-avatar--overflow" tabindex="0"
                                                    role="button">+4
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="fd-avatar-group fd-avatar-group--individual-type fd-avatar-group--sm">
                                        <div class="fd-popover">
                                            <div class="fd-popover__control">
                                                <span
                                                    class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                                                    role="button"
                                                    tabindex="0"
                                                    aria-label="Wendy Wallace"
                                                    title="Wendy Wallace">WW
                                                </span>
                                            </div>
                                        </div>
                                        <div class="fd-popover">
                                            <div class="fd-popover__control">
                                                <span
                                                    class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                                                    role="button"
                                                    tabindex="0"
                                                    aria-label="Jason Goldwell"
                                                    title="Jason Goldwell">
                                                    <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="fd-popover">
                                            <div class="fd-popover__control">
                                                <span
                                                    class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"
                                                    role="button"
                                                    alt="Portrait of Christian Bow"
                                                    title="Christian Bow"
                                                    tabindex="0">
                                                </span>
                                            </div>
                                        </div>
                                        <div class="fd-popover">
                                            <div class="fd-popover__control">
                                                <span
                                                    class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border" role="button"
                                                    aria-label="Endy Wallace"
                                                    tabindex="0"
                                                    title="Endy Wallace">EW</span>
                                                </div>
                                            </div>

                                            <div class="fd-popover">
                                                <div class="fd-popover__control">
                                                    <span
                                                        class="fd-avatar fd-avatar--sm fd-avatar--overflow" tabindex="0"
                                                        role="button">+19678
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="fd-avatar-group fd-avatar-group--individual-type fd-avatar-group--md">
                                            <div class="fd-popover">
                                                <div class="fd-popover__control">
                                                    <span
                                                        class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border"
                                                        role="button"
                                                        tabindex="0"
                                                        aria-label="Wendy Wallace"
                                                        title="Wendy Wallace">WW
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="fd-popover">
                                                <div class="fd-popover__control">
                                                    <span
                                                        class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border"
                                                        role="button"
                                                        tabindex="0"
                                                        aria-label="Jason Goldwell"
                                                        title="Jason Goldwell">
                                                        <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="fd-popover">
                                                <div class="fd-popover__control">
                                                    <span
                                                        class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"
                                                        role="button"
                                                        alt="Portrait of Christian Bow"
                                                        title="Christian Bow"
                                                        tabindex="0">
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="fd-popover">
                                                <div class="fd-popover__control">
                                                    <span
                                                        class="fd-avatar fd-avatar--md fd-avatar--circle fd-avatar--border" role="button"
                                                        aria-label="Endy Wallace"
                                                        tabindex="0"
                                                        title="Endy Wallace">EW</span>
                                                    </div>
                                                </div>

                                                <div class="fd-popover">
                                                    <div class="fd-popover__control">
                                                        <span
                                                            class="fd-avatar fd-avatar--md fd-avatar--overflow" tabindex="0"
                                                            role="button">+19678
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="fd-avatar-group fd-avatar-group--individual-type fd-avatar-group--sm">
                                                <div class="fd-popover">
                                                    <div class="fd-popover__control">
                                                        <span
                                                            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                                                            role="button"
                                                            tabindex="0"
                                                            aria-label="Wendy Wallace"
                                                            title="Wendy Wallace">WW
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="fd-popover">
                                                    <div class="fd-popover__control">
                                                        <span
                                                            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border"
                                                            role="button"
                                                            tabindex="0"
                                                            aria-label="Jason Goldwell"
                                                            title="Jason Goldwell">
                                                            <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="fd-popover">
                                                    <div class="fd-popover__control">
                                                        <span
                                                            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border fd-avatar--thumbnail"
                                                            role="button"
                                                            alt="Portrait of Christian Bow"
                                                            title="Christian Bow"
                                                            tabindex="0">
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="fd-popover">
                                                    <div class="fd-popover__control">
                                                        <span
                                                            class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--border" role="button"
                                                            aria-label="Endy Wallace"
                                                            tabindex="0"
                                                            title="Endy Wallace">EW</span>
                                                        </div>
                                                    </div>

                                                    <div class="fd-popover">
                                                        <div class="fd-popover__control">
                                                            <span
                                                                class="fd-avatar fd-avatar--sm fd-avatar--accent-color-8 fd-avatar--overflow" tabindex="0"
                                                                role="button">+4
                                                            </span>
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

This documentation was automatically generated from: `packages/styles/stories/Components/avatar-group/avatar-group.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
