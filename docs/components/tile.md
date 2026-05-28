---
component: fd-tile
title: Components/Generic Tiles
category: Components
selector: fd-tile
cssFile: tile.css
sourcePath: packages/styles/stories/Components/generic-tile/generic-tile.stories.js
tags: []
dependencies: ["badge","button","icon","numeric-content","tile"]
relatedComponents: ["badge","button","icon","numeric-content","tile"]
stability: stable
generatedAt: 2026-05-28T16:47:21.126Z
---

# Components/Generic Tiles

The generic tile is a container that represents an app on the SAP Fiori launchpad home page. They can display types of content based on the data supplied from the app. In addition, they can contain an icon, information text, a title, KPIs, counters and charts. Tiles move to the next row if there is insufficient horizontal screen space to display them all.

##Guidelines

**Do's**

- Only use tiles on the launchpad home page. Don’t use them anywhere else.
- In the content area, only show content types described on this page. For example, don’t play videos, animations, or gifs in the tiles.
- If you are not showing a KPI or a chart, try to show an icon instead to help users to distinguish the tiles.
- Use short tile names.

**Don'ts**

- Do not use the status area for error messages.
- Do not use the tile subtitle for explanations. Use the subtitle only if you need a differentiator (such as a specific view on the data).
- Do not use icons on KPI tiles; only use icons on basic launch tiles or monitoring tiles.
- Do not show icons next to a counter when you expect 5 digits or more.
- Do not develop your own icons or use custom icons.

##Modifiers

Generic tiles can display different elements and/or semantic states depending on the type of content being shown.

Modifier class | Description
:-------- | :-------------------
\

## Dependencies

This component depends on the following CSS files:

- `badge.css`
- `button.css`
- `icon.css`
- `numeric-content.css`
- `tile.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/tile.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/badge.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/numeric-content.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/tile.css" rel="stylesheet">
```

## Basic Usage

```html
<div role="button" aria-label="button" tabindex="0" class="fd-tile">

    <div class="fd-tile__content">11 x 11rem</div>

</div>
<div role="button" aria-label="button" tabindex="0" class="fd-tile fd-tile--s">

    <div class="fd-tile__content">9.25 x 9.25rem</div>

</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-tile--action` | The badge tile displays very short and important information at the top right corner of the tile |
| `fd-tile--double` | Style variant |
| `fd-tile--feed` | The feed tile displays a news feed with a news headline, the source, and a time stamp |
| `fd-tile--kpi` | As the name suggests, the launch tile is used for when users need to launch an application from the launchpad |
| `fd-tile--launch` | As the name suggests, the launch tile is used for when users need to launch an application from the launchpad |
| `fd-tile--line` | As the name suggests, the launch tile is used for when users need to launch an application from the launchpad |
| `fd-tile--s` | Generic tiles can be displayed in two tile dimensions: the default 1x1, and 2x1 (with the addition of a \ |
| `fd-tile--slide` | The slide tile displays a news headline, a background image, the news source, and a time stamp |

## States

| Class | Description |
|-------|-------------|
| `is-compact` | Compact state |
| `is-disabled` | Disabled state |

## BEM Elements

This component uses the following BEM elements:

- `fd-tile__action-close`
- `fd-tile__action-container`
- `fd-tile__action-indicator`
- `fd-tile__background-img`
- `fd-tile__container`
- `fd-tile__content`
- `fd-tile__content--`
- `fd-tile__content-byline`
- `fd-tile__content-text`
- `fd-tile__dot`
- `fd-tile__dot--active`
- `fd-tile__footer`
- `fd-tile__footer--`
- `fd-tile__footer-text`
- `fd-tile__header`
- `fd-tile__header--`
- `fd-tile__header-content`
- `fd-tile__logo`
- `fd-tile__overlay`
- `fd-tile__page-indicator`
- `fd-tile__profile-img`
- `fd-tile__refresh`
- `fd-tile__section`
- `fd-tile__subtitle`
- `fd-tile__title`
- `fd-tile__title-container`
- `fd-tile__toggle`
- `fd-tile__toggle--pause`

## Related Components

This component works with or depends on:

- `badge`
- `button`
- `icon`
- `numeric-content`
- `tile`

## Design Tokens

Key CSS variables used by this component:

- `--action`
- `--active`
- `--double`
- `--fdGenericTileLineHeight`
- `--fdGenericTileLineTileHeight`
- `--fdGenericTileLineTileMaxHeight`
- `--fdGenericTileTitleHorizontalSpacing`
- `--fdSlide_Tile_Background_Color`
- `--fdSlide_Tile_Background_Opacity`
- `--fdSlide_Tile_Indicator_Active_Dot_Border`
- `--fdSlide_Tile_Indicator_Active_Dot_Color`
- `--fdSlide_Tile_Indicator_Ative_Dot_Size`
- `--fdSlide_Tile_Indicator_Dot_Border`
- `--fdSlide_Tile_Indicator_Dot_Color`
- `--fdSlide_Tile_Indicator_Dot_Opacity`

*...and 5 more*

## Examples

### Sizes

Generic tiles can be displayed in two tile dimensions: the default 1x1, and 2x1 (with the addition of a \

```html
<div role="button" aria-label="button" tabindex="0" class="fd-tile">

    <div class="fd-tile__content">11 x 11rem</div>

</div>
<div role="button" aria-label="button" tabindex="0" class="fd-tile fd-tile--s">

    <div class="fd-tile__content">9.25 x 9.25rem</div>

</div>
```

### Layout

The layout of the generic tile is fixed with designated areas for the header, content area and footer.

**The common elements displayed in generic tiles are:**

| Element | Class | Description |
| :------ | :------------- | :----------- |
| Header (mandatory) | \

```html
<div role="button" aria-label="button" tabindex="0" class="fd-tile">
    <div class="fd-tile__title">.fd-tile__title</div>
    <div class="fd-tile__subtitle">.fd-tile__subtitle</div>
</div>
.fd-tile__content</div>
.fd-tile__footer</div>
<div role="button" aria-label="button" tabindex="0" class="fd-tile fd-tile--double">
    <div class="fd-tile__title">.fd-tile__title</div>
    <div class="fd-tile__subtitle">.fd-tile__subtitle</div>
</div>
.fd-tile__content</div>
.fd-tile__footer</div>
<div role="button" aria-label="button" tabindex="0" class="fd-tile fd-tile--s">
    <div class="fd-tile__title">.fd-tile__title</div>
    <div class="fd-tile__subtitle">.fd-tile__subtitle</div>
</div>
.fd-tile__content</div>
.fd-tile__footer</div>
<div role="button" aria-label="button" tabindex="0" class="fd-tile fd-tile--s fd-tile--double">
    <div class="fd-tile__title">.fd-tile__title</div>
    <div class="fd-tile__subtitle">.fd-tile__subtitle</div>
</div>
.fd-tile__content</div>
.fd-tile__footer</div>
```

### Columns

The header, content and footer of generic tile can be split into two columns with a 0.25rem vertical padding. Use the (\

```html

```

### Launch tile

As the name suggests, the launch tile is used for when users need to launch an application from the launchpad. It can display several elements, such as a header, subtitle, refresh button, footer, KPIs and images. The header can contain a maximum of 3 lines; all 3 lines can be used for the title or one of the lines can be used for a subtitle. If a fourth line title or an optional subtitle line is required, the \

```html
<h4>Launch tile with numeric content and launch icon</h4>
<div role="button" tabindex="0" class="fd-tile fd-tile--launch">
    <div class="fd-tile__header">
        <div class="fd-tile__title">Title</div>
        <div class="fd-tile__subtitle">Subtitle</div>
    </div>
    <div class="fd-tile__content">
        <div class="fd-numeric-content">
            <div class="fd-numeric-content__launch-icon-container">
                <i role="presentation" class="fd-numeric-content__launch-icon sap-icon--line-charts"></i>
            </div>
            <div class="fd-numeric-content__kpi-container">
                <div class="fd-numeric-content__kpi fd-numeric-content__kpi--negative">1Ñç</div>
            </div>
            <div class="fd-numeric-content__scale-container">
                <div class="fd-numeric-content__scale fd-numeric-content__scale--negative">
                    <i role="presentation" class="fd-numeric-content__scale-arrow sap-icon--down"></i>
                    <span class="fd-numeric-content__scale-text">M</span>
                </div>
            </div>
        </div>
    </div>
    <div class="fd-tile__footer fd-tile__footer--2-col">
        <div class="fd-tile__section">
            <i class="fd-tile__refresh sap-icon--refresh" aria-label="Refresh"></i>
            <span class="fd-tile__footer-text">Now</span>
        </div>
        <div class="fd-tile__section"><span class="fd-tile__footer-text">Footer</span></div>
    </div>
</div>
<div role="button" tabindex="0" class="fd-tile fd-tile--launch fd-tile--s">
    <div class="fd-tile__header">
        <div class="fd-tile__title">Title</div>
        <div class="fd-tile__subtitle">Subtitle</div>
    </div>
    <div class="fd-tile__content">
        <div class="fd-numeric-content fd-numeric-content--small-tile">
            <div class="fd-numeric-content__launch-icon-container">
                <i role="presentation" class="fd-numeric-content__launch-icon sap-icon--line-charts"></i>
            </div>
            <div class="fd-numeric-content__kpi-container">
                <div class="fd-numeric-content__kpi fd-numeric-content__kpi--positive">1234</div>
            </div>
        </div>
    </div>
    <div class="fd-tile__footer">
        <span class="fd-tile__footer-text">Unit, Notification</span>
    </div>
</div>
<h4>Launch tile with combined header and content</h4>
<div role="button" tabindex="0" class="fd-tile fd-tile--launch">
    <div class="fd-tile__header-content">
        <div class="fd-tile__title">Title: Lorem ipsum dolor sit amet, consectetur elit</div>
        <div class="fd-tile__subtitle">Subtitle</div>
    </div>
    <div class="fd-tile__footer fd-tile__footer--2-col">
        <div class="fd-tile__section">
            <i class="fd-tile__refresh sap-icon--refresh" aria-label="Refresh"></i>
            <span class="fd-tile__footer-text">Now</span>
        </div>
        <div class="fd-tile__section"><span class="fd-tile__footer-text">Footer</span></div>
    </div>
</div>
<div role="button" tabindex="0" class="fd-tile fd-tile--s fd-tile--launch">
    <div class="fd-tile__header-content">
        <div class="fd-tile__title">Title: Lorem ipsum dolor sit amet, consectetur elit</div>
        <div class="fd-tile__subtitle">Subtitle</div>
    </div>
    <div class="fd-tile__footer fd-tile__footer--2-col">
        <div class="fd-tile__section">
            <i class="fd-tile__refresh sap-icon--refresh" aria-label="Refresh"></i>
            <span class="fd-tile__footer-text">Now</span>
        </div>
        <div class="fd-tile__section"><span class="fd-tile__footer-text">Footer</span></div>
    </div>
</div>
<h4>Launch tile (profile)</h4>
<div role="button" tabindex="0" class="fd-tile fd-tile--launch">
    <div class="fd-tile__header">
        <div class="fd-tile__title">Title</div>
        <div class="fd-tile__subtitle">Subtitle</div>
    </div>
    <div class="fd-tile__content">
        <span class="fd-tile__profile-img" role="img" aria-label="Profile Image"></span>
    </div>
    <div class="fd-tile__footer">
        <span class="fd-tile__footer-text">Footer</span>
    </div>
</div>
<div role="button" tabindex="0" class="fd-tile fd-tile--launch fd-tile--s">
    <div class="fd-tile__header">
        <div class="fd-tile__title">Title</div>
        <div class="fd-tile__subtitle">Subtitle</div>
    </div>
    <div class="fd-tile__content">
        <span class="fd-tile__profile-img" role="img" aria-label="Profile Image"></span>
    </div>
    <div class="fd-tile__footer">
        <span class="fd-tile__footer-text">Unit, Notification</span>
    </div>
</div>
<h4>Launch tile (logo)</h4>
<div role="button" tabindex="0" class="fd-tile fd-tile--launch">
    <div class="fd-tile__header">
        <div class="fd-tile__title">Title</div>
        <div class="fd-tile__subtitle">Subtitle</div>
    </div>
    <div class="fd-tile__content">
        <img class="fd-tile__logo" src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" alt="SAP">
    </div>
    <div class="fd-tile__footer">
        <span class="fd-tile__footer-text">Footer</span>
    </div>
</div>
<div role="button" tabindex="0" class="fd-tile fd-tile--launch fd-tile--s">
    <div class="fd-tile__header">
        <div class="fd-tile__title">Title</div>
        <div class="fd-tile__subtitle">Subtitle</div>
    </div>
    <div class="fd-tile__content">
        <img class="fd-tile__logo" src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" alt="SAP">
    </div>
    <div class="fd-tile__footer">
        <span class="fd-tile__footer-text">Unit, Notification</span>
    </div>
</div>
```

### KPI tile

A KPI tile displays key performance indicators that are used to measure and monitor a company’s performance at a strategic and operational level. The tile displays the KPI values as large, easy-to-recognize digits. In addition, you can show deviation arrows, semantic values, and scaling factors. The number of digits is limited by the size of the tiles. To display a KPI tile, add the \

```html
<h4>KPI tile with numeric content (size L)</h4>
<div role="button" tabindex="0" class="fd-tile fd-tile--kpi">
    <div class="fd-tile__header">
        <div class="fd-tile__title">Title</div>
        <div class="fd-tile__subtitle">Subtitle</div>
    </div>
    <div class="fd-tile__content">
        <div class="fd-numeric-content">
            <div class="fd-numeric-content__kpi-container">
                <div class="fd-numeric-content__kpi">1Ñç</div>
            </div>
            <div class="fd-numeric-content__scale-container">
                <div class="fd-numeric-content__scale">
                    <i role="presentation" class="fd-numeric-content__scale-arrow sap-icon--down"></i>
                    <span class="fd-numeric-content__scale-text">M</span>
                </div>
            </div>
        </div>
    </div>
    <div class="fd-tile__footer fd-tile__footer--2-col">
        <div class="fd-tile__section">
            <i class="fd-tile__refresh sap-icon--refresh" aria-label="Refresh"></i>
            <span class="fd-tile__footer-text">Now</span>
        </div>
        <div class="fd-tile__section"><span class="fd-tile__footer-text">Footer</span></div>
    </div>
</div>
<div role="button" tabindex="0" class="fd-tile fd-tile--kpi fd-tile--s">
    <div class="fd-tile__header">
        <div class="fd-tile__title">Title</div>
        <div class="fd-tile__subtitle">Subtitle</div>
    </div>
    <div class="fd-tile__content">
        <div class="fd-numeric-content fd-numeric-content--small-tile">
            <div class="fd-numeric-content__kpi-container">
                <div class="fd-numeric-content__kpi">1Ñç</div>
            </div>
            <div class="fd-numeric-content__scale-container">
                <div class="fd-numeric-content__scale">
                    <i role="presentation" class="fd-numeric-content__scale-arrow sap-icon--down"></i>
                    <span class="fd-numeric-content__scale-text">milçM</span>
                </div>
            </div>
        </div>
    </div>
    <div class="fd-tile__footer fd-tile__footer--2-col">
        <div class="fd-tile__section">
            <i class="fd-tile__refresh sap-icon--refresh" aria-label="Refresh"></i>
            <span class="fd-tile__footer-text">Now</span>
        </div>
        <div class="fd-tile__section"><span class="fd-tile__footer-text">Footer</span></div>
    </div>
</div>
<h4>KPI tile with numeric content (size M)</h4>
<div role="button" tabindex="0" class="fd-tile fd-tile--kpi">
    <div class="fd-tile__header">
        <div class="fd-tile__title">Title: Eiusmod tempor incididunt ut labore </div>
    </div>
    <div class="fd-tile__content">
        <div class="fd-numeric-content fd-numeric-content--m">
            <div class="fd-numeric-content__kpi-container">
                <div class="fd-numeric-content__kpi fd-numeric-content__kpi--positive">123</div>
            </div>
            <div class="fd-numeric-content__scale-container">
                <div class="fd-numeric-content__scale fd-numeric-content__scale--positive">
                    <i role="presentation" class="fd-numeric-content__scale-arrow sap-icon--down"></i>
                </div>
            </div>
        </div>
    </div>
    <div class="fd-tile__footer">
        <span class="fd-tile__footer-text">Unit, Notification</span>
    </div>
</div>
<div role="button" tabindex="0" class="fd-tile fd-tile--kpi fd-tile--s">
    <div class="fd-tile__header">
        <div class="fd-tile__title">Title: Eiusmod tempor incididunt</div>
        <div class="fd-tile__subtitle">Subtitle</div>
    </div>
    <div class="fd-tile__content">
        <div class="fd-numeric-content fd-numeric-content--m fd-numeric-content--small-tile">
            <div class="fd-numeric-content__kpi-container">
                <div class="fd-numeric-content__kpi fd-numeric-content__kpi--negative">-889</div>
            </div>
            <div class="fd-numeric-content__scale-container">
                <div class="fd-numeric-content__scale fd-numeric-content__scale--negative">
                    <i role="presentation" class="fd-numeric-content__scale-arrow sap-icon--up"></i>
                </div>
            </div>
        </div>
    </div>
    <div class="fd-tile__footer">
        <span class="fd-tile__footer-text">Unit, Notification</span>
    </div>
</div>
<h4>KPI tile with numeric content (size S)</h4>
<div role="button" tabindex="0" class="fd-tile fd-tile--kpi">
    <div class="fd-tile__header">
        <div class="fd-tile__title">Title</div>
    </div>
    <div class="fd-tile__content">
        <div class="fd-numeric-content fd-numeric-content--s">
            <div class="fd-numeric-content__kpi-container">
                <div class="fd-numeric-content__kpi fd-numeric-content__kpi--critical">12</div>
            </div>
            <div class="fd-numeric-content__scale-container">
                <div class="fd-numeric-content__scale fd-numeric-content__scale--critical">
                    <i role="presentation" class="fd-numeric-content__scale-arrow sap-icon--down"></i>
                    <span class="fd-numeric-content__scale-text">%</span>
                </div>
            </div>
        </div>
    </div>
    <div class="fd-tile__footer">
        <span class="fd-tile__footer-text">Unit</span>
    </div>
</div>
<div role="button" tabindex="0" class="fd-tile fd-tile--kpi fd-tile--s">
    <div class="fd-tile__header">
        <div class="fd-tile__title">Title</div>
        <div class="fd-tile__subtitle">Subtitle</div>
    </div>
    <div class="fd-tile__content">
        <div class="fd-numeric-content fd-numeric-content--small-tile fd-numeric-content--m">
            <div class="fd-numeric-content__kpi-container">
                <div class="fd-numeric-content__kpi fd-numeric-content__kpi--informative">1.95</div>
            </div>
        </div>
    </div>
    <div class="fd-tile__footer">
        <span class="fd-tile__footer-text">CAD, Current quarter</span>
    </div>
</div>
```

### Feed tile

The feed tile displays a news feed with a news headline, the source, and a time stamp. It shows new notifications in 10-second intervals, and tile content is updated every five minutes. If there are no new notifications, the most recent notifications are displayed. The feed tile’s headline uses the full width of the container and does not contain an icon. To display a feed tile, add the \

```html
<div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--feed">
    <div class="fd-tile__header">
        <div class="fd-tile__title">Title: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
        <div class="fd-tile__subtitle">Subtitle</div>
    </div>
    <div class="fd-tile__content fd-tile__content--2-col">
        <div class="fd-tile__section">
            <div class="fd-tile__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua.</div>
            <div class="fd-tile__content-byline">About 1 minute ago</div>
        </div>
        <div class="fd-tile__section">
            <div class="fd-numeric-content">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi">35</div>
                </div>
            </div>
        </div>
    </div>
    <div class="fd-tile__footer">
        <span class="fd-tile__footer-text">Footer</span>
    </div>
</div>
<div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--s fd-tile--feed">
    <div class="fd-tile__header">
        <div class="fd-tile__title">Title: Sed do eiusmod</div>
        <div class="fd-tile__subtitle">Subtitle</div>
    </div>
    <div class="fd-tile__content fd-tile__content--2-col">
        <div class="fd-tile__section">
            <div class="fd-tile__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod.</div>
            <div class="fd-tile__content-byline">About 1 minute ago</div>
        </div>
        <div class="fd-tile__section">
            <div class="fd-numeric-content fd-numeric-content--m">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--negative">9</div>
                </div>
            </div>
        </div>
    </div>
    <div class="fd-tile__footer">
        <span class="fd-tile__footer-text">Footer</span>
    </div>
</div>
```

### Badge tile

The badge tile displays very short and important information at the top right corner of the tile. It's recommended to add a badge to a tile when it has been newly added. Badges are not displayed when in action/edit mode.

```html
<div role="button" tabindex="0" class="fd-tile fd-tile--launch">
    <div class="fd-badge">Badge</div>
    <div class="fd-tile__header">
        <div class="fd-tile__title">Launch tile title</div>
        <div class="fd-tile__subtitle">Subtitle</div>
    </div>
    <div class="fd-tile__content">
        <span class="fd-tile__profile-img" role="img" aria-label="Profile Image"></span>
    </div>
    <div class="fd-tile__footer">
        <span class="fd-tile__footer-text">Footer</span>
    </div>
</div>
<div role="button" tabindex="0" class="fd-tile fd-tile--launch fd-tile--s">
    <div class="fd-badge">Badge with very very very very very very very very very long text</div>
    <div class="fd-tile__header">
        <div class="fd-tile__title">Launch tile title</div>
        <div class="fd-tile__subtitle">Subtitle</div>
    </div>
    <div class="fd-tile__content">
        <span class="fd-tile__profile-img" role="img" aria-label="Profile Image"></span>
    </div>
    <div class="fd-tile__footer">
        <span class="fd-tile__footer-text">Unit, Notification</span>
    </div>
</div>
<div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--feed">
    <div class="fd-badge">New</div>
    <div class="fd-tile__header">
        <div class="fd-tile__title">Feed tile title: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
        <div class="fd-tile__subtitle">Subtitle</div>
    </div>
    <div class="fd-tile__content fd-tile__content--2-col">
        <div class="fd-tile__section">
            <div class="fd-tile__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua.</div>
            <div class="fd-tile__content-byline">About 1 minute ago</div>
        </div>
        <div class="fd-tile__section">
            <div class="fd-numeric-content">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi">35</div>
                </div>
            </div>
        </div>
    </div>
    <div class="fd-tile__footer">
        <span class="fd-tile__footer-text">Footer</span>
    </div>
</div>
<div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--s fd-tile--feed">
    <div class="fd-badge">Badge with very very very very very very very very very long text</div>
    <div class="fd-tile__header">
        <div class="fd-tile__title">Feed tile title: Sed do eiusmod</div>
        <div class="fd-tile__subtitle">Subtitle</div>
    </div>
    <div class="fd-tile__content fd-tile__content--2-col">
        <div class="fd-tile__section">
            <div class="fd-tile__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod.</div>
            <div class="fd-tile__content-byline">About 1 minute ago</div>
        </div>
        <div class="fd-tile__section">
            <div class="fd-numeric-content fd-numeric-content--m">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--negative">9</div>
                </div>
            </div>
        </div>
    </div>
    <div class="fd-tile__footer">
        <span class="fd-tile__footer-text">Footer</span>
    </div>
</div>
```

### Slide tile

The slide tile displays a news headline, a background image, the news source, and a time stamp. A start and pause button are always displayed on touch devices and can be revealed on desktops by hovering the mouse over the tile. The dots on the bottom of each tile identify the number of pages they contain.
To display a slide tile, add the \

```html
<div role="button" tabindex="0" class="fd-tile fd-tile--slide">

    <button aria-label="toggle play button" class="fd-tile__toggle"></button>
    <div class="fd-tile__container">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Wind Map: Monitoring Real-Time</div>
            <div class="fd-tile__subtitle">SAP News</div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">May 14, 2020</span>
        </div>
        <div class="fd-tile__page-indicator">
            <span class="fd-tile__dot"></span>
            <span class="fd-tile__dot"></span>
            <span class="fd-tile__dot fd-tile__dot--active"></span>
            <span class="fd-tile__dot"></span>
            <span class="fd-tile__dot"></span>
        </div>
    </div>
</div>
<div role="button" tabindex="0" class="fd-tile fd-tile--slide fd-tile--s">

    <button aria-label="toggle play button" class="fd-tile__toggle"></button>
    <div class="fd-tile__container">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Wind Map: Monitoring Real-Time</div>
            <div class="fd-tile__subtitle">SAP News</div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">May 14, 2020</span>
        </div>
        <div class="fd-tile__page-indicator">
            <span class="fd-tile__dot"></span>
            <span class="fd-tile__dot"></span>
            <span class="fd-tile__dot fd-tile__dot--active"></span>
            <span class="fd-tile__dot"></span>
            <span class="fd-tile__dot"></span>
        </div>
    </div>
</div>
<div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--slide">

    <button aria-label="toggle pause button" class="fd-tile__toggle fd-tile__toggle--pause"></button>
    <div class="fd-tile__container">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Wind Map: Monitoring Real-Time and Forecasted Wind Conditions Across the Globe</div>
            <div class="fd-tile__subtitle">SAP News</div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">May 14, 2020</span>
        </div>
        <div class="fd-tile__page-indicator">
            <span class="fd-tile__dot"></span>
            <span class="fd-tile__dot"></span>
            <span class="fd-tile__dot fd-tile__dot--active"></span>
            <span class="fd-tile__dot"></span>
            <span class="fd-tile__dot"></span>
            <span class="fd-tile__dot"></span>
            <span class="fd-tile__dot"></span>
        </div>
    </div>
</div>
<div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--s fd-tile--slide">

    <button aria-label="toggle pause button" class="fd-tile__toggle fd-tile__toggle--pause"></button>
    <div class="fd-tile__container">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Wind Map: Monitoring Real-Time and Forecasted Wind Conditions Across the Globe</div>
            <div class="fd-tile__subtitle">SAP News</div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">May 14, 2020</span>
        </div>
        <div class="fd-tile__page-indicator">
            <span class="fd-tile__dot"></span>
            <span class="fd-tile__dot"></span>
            <span class="fd-tile__dot fd-tile__dot--active"></span>
            <span class="fd-tile__dot"></span>
            <span class="fd-tile__dot"></span>
            <span class="fd-tile__dot"></span>
            <span class="fd-tile__dot"></span>
        </div>
    </div>
</div>
```

### Link tile

The link tile displays links in a separate area below the tiles area and comprise a title and optional subtitle. They can be in list format or they can float above the content. Link tiles can also be viewed in action mode, displaying a close button at the top and an actions button on the bottom. To display a link tile, add the \

```html
<h4>Link tile: Floating behaviour</h4>
<div class="fd-tile-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title</div>
            <div class="fd-tile__subtitle">Subtitle</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title with very very very very very very long text</div>
            <div class="fd-tile__subtitle">Subtitle with very very very very very very long text</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title</div>
            <div class="fd-tile__subtitle">Subtitle</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
            <div class="fd-tile__subtitle">Subtitle: Aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title: Perspiciatis unde omnis iste natus error sit voluptatem</div>
            <div class="fd-tile__subtitle">Subtitle: Enim ipsam voluptatem </div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title: Iusto odio dignissimos ducimus</div>
            <div class="fd-tile__subtitle">Subtitle: Lorem ipsum dolor sit amet</div>
        </div>
    </div>
</div>
<h4>Link tile: List behaviour</h4>
<div class="fd-tile-container fd-tile-container--list">
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title</div>
            <div class="fd-tile__subtitle">Subtitle</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title with very very very very very very long text</div>
            <div class="fd-tile__subtitle">Subtitle with very very very very very very long text</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title</div>
            <div class="fd-tile__subtitle">Subtitle</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div class="fd-tile__subtitle">Subtitle: Aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Very long title: Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</div>
            <div class="fd-tile__subtitle">Very long subtitle: Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title: Iusto odio dignissimos ducimus</div>
            <div class="fd-tile__subtitle">Subtitle: Lorem ipsum dolor sit amet</div>
        </div>
    </div>
</div>
<h4>Link tile: Floating behaviour with badge</h4>
<div class="fd-tile-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Title</div>
            </div>
            <div class="fd-tile__subtitle">Subtitle</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Title with very very very very very very long text</div>
            </div>
            <div class="fd-tile__subtitle">Subtitle with very very very very very very long text</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Title</div>
            </div>
            <div class="fd-tile__subtitle">Subtitle</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Title: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div class="fd-tile__subtitle">Subtitle: Aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Title</div>
            </div>
            <div class="fd-tile__subtitle">Subtitle</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Title: Perspiciatis unde omnis iste natus error</div>
            </div>
            <div class="fd-tile__subtitle">Subtitle: Enim ipsam voluptatem quia voluptas</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Title: Accusamus dignissimos ducimus</div>
            </div>
            <div class="fd-tile__subtitle">Subtitle: Facilis distinctio</div>
        </div>
    </div>
</div>
<h4>Link tile: List behaviour with badge</h4>
<div class="fd-tile-container fd-tile-container--list">
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Title</div>
            </div>
            <div class="fd-tile__subtitle">Subtitle</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Title: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div class="fd-tile__subtitle">Subtitle: Aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Very long title: Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</div>
            </div>
            <div class="fd-tile__subtitle">Very long subtitle: Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Title: Accusamus et iusto odio dignissimos ducimus</div>
            </div>
            <div class="fd-tile__subtitle">Subtitle: Facilis est et expedita distinctio</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Title: Iusto odio dignissimos ducimus</div>
            </div>
            <div class="fd-tile__subtitle">Subtitle: Lorem ipsum dolor sit amet</div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--line">
        <div class="fd-tile__header">
            <div class="fd-tile__title-container">
                <div class="fd-badge">Badge</div>
                <div class="fd-tile__title">Title: Praesentium voluptatum deleniti atque</div>
            </div>
            <div class="fd-tile__subtitle">Subtitle: Aute irure dolor in reprehenderit</div>
        </div>
    </div>
</div>
<h4>Link tile: Floating behaviour action mode</h4>
<div class="fd-tile-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title</div>
            <div class="fd-tile__subtitle">Subtitle</div>
        </div>
        <div class="fd-tile__action-container">
            <button aria-label="indicator button" tabindex="-1" class="fd-button is-compact fd-button--transparent fd-tile__action-indicator">
                <i class="sap-icon--overflow"></i>
            </button>
            <button aria-label="close button" class="fd-button is-compact fd-button--transparent fd-tile__action-close">
                <i class="sap-icon--decline" role="presentation"></i>
            </button></div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Title with very very very very very very long text</div>
                <div class="fd-tile__subtitle">Subtitle with very very very very very very long text</div>
            </div>
            <div class="fd-tile__action-container">
                <button aria-label="indicator button" tabindex="-1" class="fd-button is-compact fd-button--transparent fd-tile__action-indicator">
                    <i class="sap-icon--overflow" role="presentation"></i>
                </button>
                <button aria-label="close button" class="fd-button is-compact fd-button--transparent fd-tile__action-close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Title</div>
                <div class="fd-tile__subtitle">Subtitle</div>
            </div>
            <div class="fd-tile__action-container">
                <button aria-label="indicator button" tabindex="-1" class="fd-button is-compact fd-button--transparent fd-tile__action-indicator">
                    <i class="sap-icon--overflow" role="presentation"></i>
                </button>
                <button aria-label="close button" class="fd-button is-compact fd-button--transparent fd-tile__action-close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button></div>
            </div>
            <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
                <div class="fd-tile__header">
                    <div class="fd-tile__title">Title: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <div class="fd-tile__subtitle">Subtitle: Aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
                </div>
                <div class="fd-tile__action-container">
                    <button aria-label="indicator button" tabindex="-1" class="fd-button is-compact fd-button--transparent fd-tile__action-indicator">
                        <i class="sap-icon--overflow" role="presentation"></i>
                    </button>
                    <button aria-label="close button" class="fd-button is-compact fd-button--transparent fd-tile__action-close">
                        <i class="sap-icon--decline" role="presentation"></i>
                    </button></div>
                </div>
                <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action is-disabled">
                    <div class="fd-tile__header">
                        <div class="fd-tile__title">Disabled title: Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</div>
                        <div class="fd-tile__subtitle">Subtitle: Enim ipsam voluptatem quia</div>
                    </div>
                    <div class="fd-tile__action-container">
                        <button aria-label="indicator button" tabindex="-1" class="fd-button is-compact fd-button--transparent fd-tile__action-indicator">
                            <i class="sap-icon--overflow" role="presentation"></i>
                        </button>
                        <button aria-label="close button" class="fd-button is-compact fd-button--transparent fd-tile__action-close">
                            <i class="sap-icon--decline" role="presentation"></i>
                        </button></div>
                    </div>
                    <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
                        <div class="fd-tile__header">
                            <div class="fd-tile__title">Title: Iusto odio dignissimos ducimus</div>
                            <div class="fd-tile__subtitle">Subtitle: Lorem ipsum dolor sit amet</div>
                        </div>
                        <div class="fd-tile__action-container">
                            <button aria-label="indicator button" tabindex="-1" class="fd-button is-compact fd-button--transparent fd-tile__action-indicator">
                                <i class="sap-icon--overflow" role="presentation"></i>
                            </button>
                            <button aria-label="close button" class="fd-button is-compact fd-button--transparent fd-tile__action-close">
                                <i class="sap-icon--decline" role="presentation"></i>
                            </button></div>
                        </div>
                    </div>
```

### Action mode

While a tile is in action mode, a close button is displayed on the top right-hand corner of the tile. The action icon is displayed on the bottom right-hand corner, and is only an indicator. The click/touch area fills the entire tile, excluding the area reserved for the close button. To display generic tile in action mode, add the \

```html
<div role="button" tabindex="0" class="fd-tile fd-tile--launch fd-tile--action">

    <button aria-label="close button" class="fd-button is-compact fd-button--transparent fd-tile__action-close">
        <i class="sap-icon--decline" role="presentation"></i>
    </button><button aria-label="indicator button" tabindex="-1" class="fd-button is-compact fd-button--transparent fd-tile__action-indicator">
    <i class="sap-icon--overflow" role="presentation"></i>
</button>
<div class="fd-tile__header">
    <div class="fd-tile__title">Title</div>
    <div class="fd-tile__subtitle">Subtitle</div>
</div>
<div class="fd-tile__content">
    <span class="fd-tile__profile-img" role="img" aria-label="Profile Image"></span>
</div>
<div class="fd-tile__footer">
    <span class="fd-tile__footer-text">Footer Text</span>
</div>
</div>
<div role="button" tabindex="0" class="fd-tile fd-tile--launch fd-tile--s fd-tile--action">

    <button aria-label="close button" class="fd-button is-compact fd-button--transparent fd-tile__action-close">
        <i class="sap-icon--decline" role="presentation"></i>
    </button><button aria-label="indicator button" tabindex="-1" class="fd-button is-compact fd-button--transparent fd-tile__action-indicator">
    <i class="sap-icon--overflow" role="presentation"></i>
</button>
<div class="fd-tile__header">
    <div class="fd-tile__title">Title</div>
    <div class="fd-tile__subtitle">Subtitle</div>
</div>
<div class="fd-tile__content">
    <span class="fd-tile__profile-img" role="img" aria-label="Profile Image"></span>
</div>
<div class="fd-tile__footer">
    <span class="fd-tile__footer-text">Unit, Notification</span>
</div>
</div>
<div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--slide fd-tile--action">

    <button aria-label="toggle button" class="fd-tile__toggle fd-tile__toggle--pause"></button>
    <button aria-label="close button" class="fd-button is-compact fd-button--transparent fd-tile__action-close">
        <i class="sap-icon--decline" role="presentation"></i>
    </button><button aria-label="indicator button" tabindex="-1" class="fd-button is-compact fd-button--transparent fd-tile__action-indicator">
    <i class="sap-icon--overflow" role="presentation"></i>
</button>
<div class="fd-tile__container">
    <div class="fd-tile__header">
        <div class="fd-tile__title">Wind Map: Monitoring Real-Time and Forecasted Wind Conditions Across the Globe</div>
        <div class="fd-tile__subtitle">SAP News</div>
    </div>
    <div class="fd-tile__footer">
        <span class="fd-tile__footer-text">May 14, 2020</span>
    </div>
    <div class="fd-tile__page-indicator">
        <span class="fd-tile__dot"></span>
        <span class="fd-tile__dot"></span>
        <span class="fd-tile__dot fd-tile__dot--active"></span>
        <span class="fd-tile__dot"></span>
        <span class="fd-tile__dot"></span>
        <span class="fd-tile__dot"></span>
        <span class="fd-tile__dot"></span>
    </div>
</div>
</div>
<div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--s fd-tile--slide fd-tile--action">

    <button aria-label="toggle button" class="fd-tile__toggle fd-tile__toggle--pause"></button>
    <button aria-label="close button" class="fd-button is-compact fd-button--transparent fd-tile__action-close">
        <i class="sap-icon--decline" role="presentation"></i>
    </button><button aria-label="indicator button" tabindex="-1" class="fd-button is-compact fd-button--transparent fd-tile__action-indicator">
    <i class="sap-icon--overflow" role="presentation"></i>
</button>
<div class="fd-tile__container">
    <div class="fd-tile__header">
        <div class="fd-tile__title">Wind Map: Monitoring Real-Time and Forecasted Wind Conditions Across the Globe</div>
        <div class="fd-tile__subtitle">SAP News</div>
    </div>
    <div class="fd-tile__footer">
        <span class="fd-tile__footer-text">May 14, 2020</span>
    </div>
    <div class="fd-tile__page-indicator">
        <span class="fd-tile__dot"></span>
        <span class="fd-tile__dot"></span>
        <span class="fd-tile__dot fd-tile__dot--active"></span>
        <span class="fd-tile__dot"></span>
        <span class="fd-tile__dot"></span>
        <span class="fd-tile__dot"></span>
        <span class="fd-tile__dot"></span>
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

This documentation was automatically generated from: `packages/styles/stories/Components/generic-tile/generic-tile.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
