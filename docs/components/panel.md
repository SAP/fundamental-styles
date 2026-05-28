---
component: fd-panel
title: Components/Panel
category: Components
selector: fd-panel
cssFile: panel.css
sourcePath: packages/styles/stories/Components/panel/panel.stories.js
tags: []
dependencies: ["button","icon","panel","segmented-button","toolbar"]
relatedComponents: ["button","icon","panel","segmented-button","toolbar"]
stability: stable
generatedAt: 2026-05-28T20:12:00.276Z
---

# Components/Panel

The panel is a container for grouping and displaying information. Panels are responsive and can be collapsed to save additional screen space.

##Usage
**Use the panel if:**

- You need to group or display information.
- You want to give users the option to hide this information.
- You want to show additional information on demand (for example, a panel could show optional input fields for an advanced search).


**Do not use the panel in:**

- The content area of a **Dynamic Page**.


##Types
There are two types of panels: fixed and expandable.

## Usage Guidelines

**Use the panel if:**

- You need to group or display information.
- You want to give users the option to hide this information.
- You want to show additional information on demand (for example, a panel could show optional input fields for an advanced search).

## When Not To Use

- The content area of a **Dynamic Page**.

## Dependencies

This component depends on the following CSS files:

- `button.css`
- `icon.css`
- `panel.css`
- `segmented-button.css`
- `toolbar.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/panel.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/panel.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/segmented-button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/toolbar.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-panel" aria-labelledby="__panel-title-6" role="form">
    <div class="fd-panel__header">
        <h4 class="fd-panel__title" id="__panel-title-6">Panel header</h4>
        <div class="fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
            <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"> </span>
            <div class="fd-segmented-button" role="group" aria-label="Group label">
                <button class="fd-button fd-button--toggled" aria-pressed="true">Left</button>
                <button class="fd-button" aria-pressed="false">Middle</button>
                <button class="fd-button" aria-pressed="false">Right</button>
            </div>
        </div>
    </div>
    <div role="region" aria-labelledby="__panel-title-6" class="fd-panel__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
        Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
        Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
        Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
        Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
        Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
    </div>
</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-panel--borderless` | Panel may have a border or not |
| `fd-panel--fixed` | Expandable panels are much like fixed panels, except their content can be expanded and collapsed (including the info toolbar, if available). |
| `fd-panel--sticky` | Sticky header can be achieved by applying the \ |
| `fd-panel--transparent` | The background of the content can be set to transparent by applying the \ |

## BEM Elements

This component uses the following BEM elements:

- `fd-panel__button`
- `fd-panel__content`
- `fd-panel__content--no-padding`
- `fd-panel__expand`
- `fd-panel__header`
- `fd-panel__title`

## Related Components

This component works with or depends on:

- `button`
- `icon`
- `panel`
- `segmented-button`
- `toolbar`

## Design Tokens

Key CSS variables used by this component:

- `--borderless`
- `--fdPanel_Border_Radius`
- `--fdPanel_Content_Background_Color`
- `--fdPanel_Content_Border_Bottom_Color`
- `--fdPanel_Content_Border_Bottom_Left_Radius`
- `--fdPanel_Content_Border_Bottom_Right_Radius`
- `--fdPanel_Content_Border_Top_Left_Radius`
- `--fdPanel_Content_Border_Top_Right_Radius`
- `--fdPanel_Content_Padding_Block`
- `--fdPanel_Content_Padding_Inline`
- `--fdPanel_Flex_Direction`
- `--fdPanel_Header_Border_Bottom_Left_Radius`
- `--fdPanel_Header_Border_Bottom_Right_Radius`
- `--fdPanel_Header_Border_Color`
- `--fdPanel_Header_Border_Top_Left_Radius`

*...and 5 more*

## Examples

### Fixed

```html
<div class="fd-panel" aria-labelledby="__panel-title-6" role="form">
    <div class="fd-panel__header">
        <h4 class="fd-panel__title" id="__panel-title-6">Panel header</h4>
        <div class="fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
            <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"> </span>
            <div class="fd-segmented-button" role="group" aria-label="Group label">
                <button class="fd-button fd-button--toggled" aria-pressed="true">Left</button>
                <button class="fd-button" aria-pressed="false">Middle</button>
                <button class="fd-button" aria-pressed="false">Right</button>
            </div>
        </div>
    </div>
    <div role="region" aria-labelledby="__panel-title-6" class="fd-panel__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
        Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
        Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
        Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
        Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
        Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
    </div>
</div>
```

### Expandable

Expandable panels are much like fixed panels, except their content can be expanded and collapsed (including the info toolbar, if available).

```html
<div class="fd-panel" aria-labelledby="__panel-title-7" role="form">
    <div class="fd-panel__header">
        <div class="fd-panel__expand">
            <button class="fd-button fd-button--transparent fd-panel__button" onclick="toggleExpandedButton(event)"
                aria-expanded="false" aria-haspopup="true" aria-label="expand/collapse panel" aria-controls="__panel-7">
                <i class="sap-icon--slim-arrow-right"></i>
            </button>
        </div>
        <h4 class="fd-panel__title" id="__panel-title-7">Panel header collapsed</h4>
        <div class="fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
            <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"> </span>
            <div class="fd-segmented-button" role="group" aria-label="Group label">
                <button class="fd-button fd-button--toggled" aria-pressed="true">Left</button>
                <button class="fd-button" aria-pressed="false">Middle</button>
                <button class="fd-button" aria-pressed="false">Right</button>
            </div>
        </div>
    </div>
    <div role="region" aria-labelledby="__panel-title-7" class="fd-panel__content" aria-hidden="true" id="__panel-7">
        <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
            Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
            Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
            Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
            Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
            Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
        </span>
    </div>
</div>

<div class="fd-panel" aria-labelledby="__panel-title-8" role="form">
    <div class="fd-panel__header">
        <div class="fd-panel__expand">
            <button class="fd-button fd-button--transparent fd-panel__button" aria-expanded="true" onclick="toggleExpandedButton(event)"
                aria-haspopup="true" aria-label="expand/collapse panel" aria-controls="__panel-8">
                <i class="sap-icon--slim-arrow-down"></i>
            </button>
        </div>
        <h4 class="fd-panel__title" id="__panel-title-8">Panel header expanded</h4>
    </div>
    <div role="region" aria-labelledby="__panel-title-8" class="fd-panel__content" aria-hidden="false" id="__panel-8">
        <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
            Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
            Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
            Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
            Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
            Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
        </span>
    </div>
</div>
```

### Fixed height

When the height of the panel's content is set to a fixed size, the content area becomes scrollable.

```html
<div class="fd-panel" aria-labelledby="__panel-title-fixed" role="form">
    <div class="fd-panel__header">
        <div class="fd-panel__expand">
            <button class="fd-button fd-button--transparent fd-panel__button" aria-expanded="true" onclick="toggleExpandedButton(event)"
                aria-haspopup="true" aria-label="expand/collapse panel" aria-controls="__panel-fixed">
                <i class="sap-icon--slim-arrow-down"></i>
            </button>
        </div>
        <h4 class="fd-panel__title" id="__panel-title-fixed">Panel header expanded</h4>
    </div>
    <div role="region" aria-labelledby="__panel-title-fixed" class="fd-panel__content" aria-hidden="false" id="__panel-fixed">
        <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
            Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
            Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
            Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
            Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
            Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed temporibus dolorum cupiditate recusandae quaerat aperiam facilis provident nemo nostrum porro corporis nesciunt ducimus, ad molestias adipisci soluta iure quam repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi placeat temporibus, eveniet modi nobis inventore debitis explicabo consectetur, sunt fugit suscipit dolore ab et ullam natus, in molestiae deserunt. Aperiam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum eveniet consequatur quis dolores, voluptatem et! Odit laboriosam, ducimus accusantium autem minus maxime excepturi, voluptatibus delectus sint animi soluta incidunt officia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam blanditiis fuga aspernatur dolore numquam culpa quos perspiciatis nobis ipsum soluta nostrum, consequatur ab, asperiores minus eum labore inventore maxime tempore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, deserunt nisi veritatis omnis corrupti id esse minus. Repellat cum maxime, ipsam quia voluptate doloremque similique esse rerum animi provident quos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nemo non perferendis odit necessitatibus eius dolorum nam dolor neque sed. Dolores obcaecati facilis voluptate temporibus eaque saepe reprehenderit, voluptatum repellendus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae temporibus repellendus nulla aliquam eos officiis molestias doloribus magnam, ullam sunt, explicabo similique delectus voluptatum laudantium doloremque at cum non esse! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius iusto odit saepe. Delectus optio reiciendis quia unde est excepturi blanditiis, nisi sed voluptatem obcaecati commodi illum dolorem architecto in officia! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
            Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
            Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
            Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
            Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
            Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed temporibus dolorum cupiditate recusandae quaerat aperiam facilis provident nemo nostrum porro corporis nesciunt ducimus, ad molestias adipisci soluta iure quam repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi placeat temporibus, eveniet modi nobis inventore debitis explicabo consectetur, sunt fugit suscipit dolore ab et ullam natus, in molestiae deserunt. Aperiam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum eveniet consequatur quis dolores, voluptatem et! Odit laboriosam, ducimus accusantium autem minus maxime excepturi, voluptatibus delectus sint animi soluta incidunt officia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam blanditiis fuga aspernatur dolore numquam culpa quos perspiciatis nobis ipsum soluta nostrum, consequatur ab, asperiores minus eum labore inventore maxime tempore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, deserunt nisi veritatis omnis corrupti id esse minus. Repellat cum maxime, ipsam quia voluptate doloremque similique esse rerum animi provident quos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nemo non perferendis odit necessitatibus eius dolorum nam dolor neque sed. Dolores obcaecati facilis voluptate temporibus eaque saepe reprehenderit, voluptatum repellendus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae temporibus repellendus nulla aliquam eos officiis molestias doloribus magnam, ullam sunt, explicabo similique delectus voluptatum laudantium doloremque at cum non esse! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius iusto odit saepe. Delectus optio reiciendis quia unde est excepturi blanditiis, nisi sed voluptatem obcaecati commodi illum dolorem architecto in officia!
        </span>
    </div>
</div>
```

### Borderless

Panel may have a border or not. For Panel without border use the \

```html
<div class="fd-panel fd-panel--borderless" aria-labelledby="__panel-title-1" role="form">
    <div class="fd-panel__header">
        <div class="fd-panel__expand">
            <button class="fd-button fd-button--transparent fd-panel__button" onclick="toggleExpandedButton(event)"
                aria-expanded="false" aria-haspopup="true" aria-label="expand/collapse panel" aria-controls="__panel-1">
                <i class="sap-icon--slim-arrow-right"></i>
            </button>
        </div>
        <h4 class="fd-panel__title" id="__panel-title-1">Panel header collapsed</h4>
        <div class="fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
            <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"> </span>
            <div class="fd-segmented-button" role="group" aria-label="Group label">
                <button class="fd-button fd-button--toggled" aria-pressed="true">Left</button>
                <button class="fd-button" aria-pressed="false">Middle</button>
                <button class="fd-button" aria-pressed="false">Right</button>
            </div>
        </div>
    </div>
    <div role="region" aria-labelledby="__panel-title-1" class="fd-panel__content" aria-hidden="true" id="__panel-1">
        <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
            Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
            Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
            Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
            Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
            Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
        </span>
    </div>
</div>

<div class="fd-panel fd-panel--borderless" aria-labelledby="__panel-title-2" role="form">
    <div class="fd-panel__header">
        <div class="fd-panel__expand">
            <button class="fd-button fd-button--transparent fd-panel__button" aria-expanded="true" onclick="toggleExpandedButton(event)"
                aria-haspopup="true" aria-label="expand/collapse panel" aria-controls="__panel-2">
                <i class="sap-icon--slim-arrow-down"></i>
            </button>
        </div>
        <h4 class="fd-panel__title" id="__panel-title-2">Panel header expanded</h4>
    </div>
    <div role="region" aria-labelledby="__panel-title-2" class="fd-panel__content" aria-hidden="false" id="__panel-2">
        <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
            Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
            Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
            Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
            Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
            Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
        </span>
    </div>
</div>

<div class="fd-panel fd-panel--fixed fd-panel--borderless" aria-labelledby="__panel-title-3" role="form">
    <div class="fd-panel__header">
        <h4 class="fd-panel__title" id="__panel-title-3">Panel header</h4>
        <div class="fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
            <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
            <div class="fd-segmented-button" role="group" aria-label="Group label">
                <button class="fd-button fd-button--toggled" aria-pressed="true">Left</button>
                <button class="fd-button" aria-pressed="false">Middle</button>
                <button class="fd-button" aria-pressed="false">Right</button>
            </div>
        </div>
    </div>
    <div role="region" aria-labelledby="__panel-title-3" class="fd-panel__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
        Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
        Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
        Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
        Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
        Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
    </div>
</div>
```

### Transparent

The background of the content can be set to transparent by applying the \

```html
<div class="fd-panel fd-panel--transparent" aria-labelledby="__panel-title-4" role="form">
    <div class="fd-panel__header">
        <div class="fd-panel__expand">
            <button onclick="toggleExpandedButton(event)" class="fd-button fd-button--transparent fd-panel__button" aria-expanded="true"
                aria-haspopup="true" aria-label="expand/collapse panel" aria-controls="__panel-4">
                <i class="sap-icon--slim-arrow-down"></i>
            </button>
        </div>
        <h4 class="fd-panel__title" id="__panel-title-4">Panel header expanded</h4>
    </div>
    <div role="region" aria-labelledby="__panel-title-4" class="fd-panel__content" aria-hidden="false" id="__panel-4">
        <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
            Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
            Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
            Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
            Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
            Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
        </span>
    </div>
</div>

<div class="fd-panel fd-panel--transparent" aria-labelledby="__panel-title-5" role="form">
    <div class="fd-panel__header">
        <h4 class="fd-panel__title" id="__panel-title-5">Panel header</h4>
        <div class="fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
            <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"> </span>
            <div class="fd-segmented-button" role="group" aria-label="Group label">
                <button class="fd-button fd-button--toggled" aria-pressed="true">Left</button>
                <button class="fd-button" aria-pressed="false">Middle</button>
                <button class="fd-button" aria-pressed="false">Right</button>
            </div>
        </div>
    </div>
    <div role="region" aria-labelledby="__panel-title-5" class="fd-panel__content fd-panel__content--no-padding">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
        Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
        Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
        Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
        Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.
        Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.
    </div>
</div>
```

### StickyHeader

Sticky header can be achieved by applying the \

```html
<div class="fd-panel fd-panel--sticky" aria-labelledby="__panel-title-sticky" role="form">
    <div class="fd-panel__header">
        <div class="fd-panel__expand">
            <button class="fd-button fd-button--transparent fd-panel__button" aria-expanded="true" onclick="toggleExpandedButton(event)"
                aria-haspopup="true" aria-label="expand/collapse panel" aria-controls="__panel-sticky">
                <i class="sap-icon--slim-arrow-down"></i>
            </button>
            <h4 class="fd-panel__title" id="__panel-title-sticky">Panel sticky header</h4>
        </div>
        <div role="region" aria-labelledby="__panel-title-sticky" class="fd-panel__content" aria-hidden="false" id="__panel-sticky">
            <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
                Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
                Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.

                Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
                Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
                Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.

                Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
                Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
                Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.

                Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
                Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
                Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.

                Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
                Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
                Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.

                Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
                Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
                Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.

                Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
                Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
                Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
                Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
                Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
                Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
                Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
                Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
                Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
                Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
                Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
                Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
                Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
                Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
                Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
                Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit.
                Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis.
                Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra.
                Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa.
            </span>
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

This documentation was automatically generated from: `packages/styles/stories/Components/panel/panel.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
