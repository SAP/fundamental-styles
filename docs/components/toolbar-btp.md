---
component: fd-toolbar
title: BTP/Title Bar
category: BTP
selector: fd-toolbar
cssFile: toolbar.css
sourcePath: packages/styles/stories/BTP/title-bar/title-bar.stories.js
tags: ["btp","horizon-only"]
dependencies: ["breadcrumb","button","icon","link","segmented-button","title-bar","toolbar"]
relatedComponents: ["breadcrumb","button","icon","link","segmented-button","title-bar","toolbar"]
stability: stable
generatedAt: 2026-06-08T17:49:02.282Z
---

# BTP/Title Bar

Title Bar is a composite control that uses a toolbar as a container and a title for labeling. It varies from the standard title control in its bold visual state and text size. In addition, the title bar comes in three variants:

- <b>Standard</b>&nbsp;- similar to the Fiori title but visually different
- <b>Title and Subtitle</b>&nbsp;- when an additional line of text is displayed below the title
- <b>Title and Info Icon</b>&nbsp;- when an additional icon is displayed right after the title

## Dependencies

This component depends on the following CSS files:

- `breadcrumb.css`
- `button.css`
- `icon.css`
- `link.css`
- `segmented-button.css`
- `title-bar.css`
- `toolbar.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/toolbar.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/breadcrumb.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/link.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/segmented-button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/title-bar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/toolbar.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-toolbar fd-toolbar--clear fd-toolbar--title-bar" role="toolbar" aria-label="Left, center, and right-aligned toolbar">
    <div class="fd-title-bar">
        <div class="fd-title-bar__container">
            <div class="fd-title-bar__title-container">
                <h4 class="fd-title-bar__title">Title</h4>
            </div>
        </div>
    </div>
    <span class="fd-toolbar__spacer"></span>
    <div class="fd-segmented-button" role="group" aria-label="Group label">
        <button class="fd-button fd-button--compact">View 1</button>
        <button class="fd-button fd-button--compact fd-button--toggled" aria-pressed="true">View 2</button>
        <button class="fd-button fd-button--compact">View 3</button>
    </div>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Filter">
        <i class="sap-icon--filter" role="presentation"></i>
    </button>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Sort">
        <i class="sap-icon--sort" role="presentation"></i>
    </button>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Group">
        <i class="sap-icon--group-2" role="presentation"></i>
    </button>
</div>

<div class="fd-toolbar fd-toolbar--clear fd-toolbar--title-bar" role="toolbar" aria-label="Left, center, and right-aligned toolbar">
    <div class="fd-title-bar">
        <div class="fd-title-bar__container">
            <div class="fd-title-bar__title-container">
                <h4 class="fd-title-bar__title">Title</h4>
                <button class="fd-button fd-button--nested" aria-label="information">
                    <i class="sap-icon--hint" role="presentation"></i>
                </button>
            </div>
            <span class="fd-title-bar__subtitle">Subtitle, byline, description</span>
        </div>
    </div>
    <span class="fd-toolbar__spacer"></span>
    <div class="fd-segmented-button" role="group" aria-label="Group label">
        <button class="fd-button fd-button--compact">View 1</button>
        <button class="fd-button fd-button--compact fd-button--toggled" aria-pressed="true">View 2</button>
        <button class="fd-button fd-button--compact">View 3</button>
    </div>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Filter">
        <i class="sap-icon--filter" role="presentation"></i>
    </button>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Sort">
        <i class="sap-icon--sort" role="presentation"></i>
    </button>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Group">
        <i class="sap-icon--group-2" role="presentation"></i>
    </button>
</div>

<div class="fd-toolbar fd-toolbar--clear fd-toolbar--title-bar" role="toolbar" aria-label="Left, center, and right-aligned toolbar">
    <div class="fd-title-bar">
        <div class="fd-title-bar__button-container">
            <button class="fd-button fd-button--compact fd-button--nested" aria-label="Back">
                <i class="sap-icon--navigation-left-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-title-bar__container">
            <div class="fd-title-bar__title-container">
                <h4 class="fd-title-bar__title">Title</h4>
                <button class="fd-button fd-button--nested" aria-label="information">
                    <i class="sap-icon--hint" role="presentation"></i>
                </button>
            </div>
            <span class="fd-title-bar__subtitle">Subtitle, byline, description</span>
        </div>
    </div>
    <span class="fd-toolbar__spacer"></span>
    <div class="fd-segmented-button" role="group" aria-label="Group label">
        <button class="fd-button fd-button--compact">View 1</button>
        <button class="fd-button fd-button--compact fd-button--toggled" aria-pressed="true">View 2</button>
        <button class="fd-button fd-button--compact">View 3</button>
    </div>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Filter">
        <i class="sap-icon--filter" role="presentation"></i>
    </button>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Sort">
        <i class="sap-icon--sort" role="presentation"></i>
    </button>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Group">
        <i class="sap-icon--group-2" role="presentation"></i>
    </button>
</div>

<div class="fd-toolbar fd-toolbar--clear fd-toolbar--title-bar" role="toolbar" aria-label="Left, center, and right-aligned toolbar">
    <div class="fd-title-bar">
        <div class="fd-title-bar__container">
            <ul class="fd-breadcrumb">
                <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Products</span></a><span class="fd-breadcrumb__separator" aria-hidden="true"></span></li>
                <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Suppliers</span></a><span class="fd-breadcrumb__separator" aria-hidden="true"></span></li>
            </ul>
            <div class="fd-title-bar__title-container">
                <h4 class="fd-title-bar__title">Title</h4>
                <button class="fd-button fd-button--nested" aria-label="information">
                    <i class="sap-icon--hint" role="presentation"></i>
                </button>
            </div>
            <span class="fd-title-bar__subtitle">Subtitle, byline, description</span>
        </div>
    </div>
    <span class="fd-toolbar__spacer"></span>
    <div class="fd-segmented-button" role="group" aria-label="Group label">
        <button class="fd-button fd-button--compact">View 1</button>
        <button class="fd-button fd-button--compact fd-button--toggled" aria-pressed="true">View 2</button>
        <button class="fd-button fd-button--compact">View 3</button>
    </div>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Filter">
        <i class="sap-icon--filter" role="presentation"></i>
    </button>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Sort">
        <i class="sap-icon--sort" role="presentation"></i>
    </button>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Group">
        <i class="sap-icon--group-2" role="presentation"></i>
    </button>
</div>

<div class="fd-toolbar fd-toolbar--clear fd-toolbar--title-bar" role="toolbar" aria-label="Left, center, and right-aligned toolbar">
    <div class="fd-title-bar">
        <div class="fd-title-bar__button-container">
            <button class="fd-button fd-button--compact fd-button--nested" aria-label="Back">
                <i class="sap-icon--navigation-left-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-title-bar__container">
            <ul class="fd-breadcrumb">
                <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Products</span></a><span class="fd-breadcrumb__separator" aria-hidden="true"></span></li>
                <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Suppliers</span></a><span class="fd-breadcrumb__separator" aria-hidden="true"></span></li>
            </ul>
            <div class="fd-title-bar__title-container">
                <h4 class="fd-title-bar__title">Title</h4>
                <button class="fd-button fd-button--nested" aria-label="information">
                    <i class="sap-icon--hint" role="presentation"></i>
                </button>
            </div>
            <span class="fd-title-bar__subtitle">Subtitle, byline, description</span>
        </div>
    </div>
    <span class="fd-toolbar__spacer"></span>
    <div class="fd-segmented-button" role="group" aria-label="Group label">
        <button class="fd-button fd-button--compact">View 1</button>
        <button class="fd-button fd-button--compact fd-button--toggled" aria-pressed="true">View 2</button>
        <button class="fd-button fd-button--compact">View 3</button>
    </div>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Filter">
        <i class="sap-icon--filter" role="presentation"></i>
    </button>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Sort">
        <i class="sap-icon--sort" role="presentation"></i>
    </button>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Group">
        <i class="sap-icon--group-2" role="presentation"></i>
    </button>
</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-toolbar--clear` | Style variant |
| `fd-toolbar--title-bar` | Style variant |

## BEM Elements

This component uses the following BEM elements:

- `fd-toolbar__spacer`

## Related Components

This component works with or depends on:

- `breadcrumb`
- `button`
- `icon`
- `link`
- `segmented-button`
- `title-bar`
- `toolbar`

## Design Tokens

Key CSS variables used by this component:

- `--active`
- `--ai`
- `--auto`
- `--clear`
- `--fade-in`
- `--fade-out`
- `--fdTitle_Color`
- `--fdTitle_Font_Size`
- `--fdToolbar_Auto_Background`
- `--fdToolbar_Background`
- `--fdToolbar_Border_Bottom`
- `--fdToolbar_Border_Top`
- `--fdToolbar_Height`
- `--fdToolbar_Info_Color`
- `--fdToolbar_Info_Outline_Color`

*...and 5 more*

## Examples

### Desktop

```html
<div class="fd-toolbar fd-toolbar--clear fd-toolbar--title-bar" role="toolbar" aria-label="Left, center, and right-aligned toolbar">
    <div class="fd-title-bar">
        <div class="fd-title-bar__container">
            <div class="fd-title-bar__title-container">
                <h4 class="fd-title-bar__title">Title</h4>
            </div>
        </div>
    </div>
    <span class="fd-toolbar__spacer"></span>
    <div class="fd-segmented-button" role="group" aria-label="Group label">
        <button class="fd-button fd-button--compact">View 1</button>
        <button class="fd-button fd-button--compact fd-button--toggled" aria-pressed="true">View 2</button>
        <button class="fd-button fd-button--compact">View 3</button>
    </div>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Filter">
        <i class="sap-icon--filter" role="presentation"></i>
    </button>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Sort">
        <i class="sap-icon--sort" role="presentation"></i>
    </button>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Group">
        <i class="sap-icon--group-2" role="presentation"></i>
    </button>
</div>

<div class="fd-toolbar fd-toolbar--clear fd-toolbar--title-bar" role="toolbar" aria-label="Left, center, and right-aligned toolbar">
    <div class="fd-title-bar">
        <div class="fd-title-bar__container">
            <div class="fd-title-bar__title-container">
                <h4 class="fd-title-bar__title">Title</h4>
                <button class="fd-button fd-button--nested" aria-label="information">
                    <i class="sap-icon--hint" role="presentation"></i>
                </button>
            </div>
            <span class="fd-title-bar__subtitle">Subtitle, byline, description</span>
        </div>
    </div>
    <span class="fd-toolbar__spacer"></span>
    <div class="fd-segmented-button" role="group" aria-label="Group label">
        <button class="fd-button fd-button--compact">View 1</button>
        <button class="fd-button fd-button--compact fd-button--toggled" aria-pressed="true">View 2</button>
        <button class="fd-button fd-button--compact">View 3</button>
    </div>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Filter">
        <i class="sap-icon--filter" role="presentation"></i>
    </button>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Sort">
        <i class="sap-icon--sort" role="presentation"></i>
    </button>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Group">
        <i class="sap-icon--group-2" role="presentation"></i>
    </button>
</div>

<div class="fd-toolbar fd-toolbar--clear fd-toolbar--title-bar" role="toolbar" aria-label="Left, center, and right-aligned toolbar">
    <div class="fd-title-bar">
        <div class="fd-title-bar__button-container">
            <button class="fd-button fd-button--compact fd-button--nested" aria-label="Back">
                <i class="sap-icon--navigation-left-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-title-bar__container">
            <div class="fd-title-bar__title-container">
                <h4 class="fd-title-bar__title">Title</h4>
                <button class="fd-button fd-button--nested" aria-label="information">
                    <i class="sap-icon--hint" role="presentation"></i>
                </button>
            </div>
            <span class="fd-title-bar__subtitle">Subtitle, byline, description</span>
        </div>
    </div>
    <span class="fd-toolbar__spacer"></span>
    <div class="fd-segmented-button" role="group" aria-label="Group label">
        <button class="fd-button fd-button--compact">View 1</button>
        <button class="fd-button fd-button--compact fd-button--toggled" aria-pressed="true">View 2</button>
        <button class="fd-button fd-button--compact">View 3</button>
    </div>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Filter">
        <i class="sap-icon--filter" role="presentation"></i>
    </button>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Sort">
        <i class="sap-icon--sort" role="presentation"></i>
    </button>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Group">
        <i class="sap-icon--group-2" role="presentation"></i>
    </button>
</div>

<div class="fd-toolbar fd-toolbar--clear fd-toolbar--title-bar" role="toolbar" aria-label="Left, center, and right-aligned toolbar">
    <div class="fd-title-bar">
        <div class="fd-title-bar__container">
            <ul class="fd-breadcrumb">
                <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Products</span></a><span class="fd-breadcrumb__separator" aria-hidden="true"></span></li>
                <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Suppliers</span></a><span class="fd-breadcrumb__separator" aria-hidden="true"></span></li>
            </ul>
            <div class="fd-title-bar__title-container">
                <h4 class="fd-title-bar__title">Title</h4>
                <button class="fd-button fd-button--nested" aria-label="information">
                    <i class="sap-icon--hint" role="presentation"></i>
                </button>
            </div>
            <span class="fd-title-bar__subtitle">Subtitle, byline, description</span>
        </div>
    </div>
    <span class="fd-toolbar__spacer"></span>
    <div class="fd-segmented-button" role="group" aria-label="Group label">
        <button class="fd-button fd-button--compact">View 1</button>
        <button class="fd-button fd-button--compact fd-button--toggled" aria-pressed="true">View 2</button>
        <button class="fd-button fd-button--compact">View 3</button>
    </div>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Filter">
        <i class="sap-icon--filter" role="presentation"></i>
    </button>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Sort">
        <i class="sap-icon--sort" role="presentation"></i>
    </button>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Group">
        <i class="sap-icon--group-2" role="presentation"></i>
    </button>
</div>

<div class="fd-toolbar fd-toolbar--clear fd-toolbar--title-bar" role="toolbar" aria-label="Left, center, and right-aligned toolbar">
    <div class="fd-title-bar">
        <div class="fd-title-bar__button-container">
            <button class="fd-button fd-button--compact fd-button--nested" aria-label="Back">
                <i class="sap-icon--navigation-left-arrow" role="presentation"></i>
            </button>
        </div>
        <div class="fd-title-bar__container">
            <ul class="fd-breadcrumb">
                <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Products</span></a><span class="fd-breadcrumb__separator" aria-hidden="true"></span></li>
                <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Suppliers</span></a><span class="fd-breadcrumb__separator" aria-hidden="true"></span></li>
            </ul>
            <div class="fd-title-bar__title-container">
                <h4 class="fd-title-bar__title">Title</h4>
                <button class="fd-button fd-button--nested" aria-label="information">
                    <i class="sap-icon--hint" role="presentation"></i>
                </button>
            </div>
            <span class="fd-title-bar__subtitle">Subtitle, byline, description</span>
        </div>
    </div>
    <span class="fd-toolbar__spacer"></span>
    <div class="fd-segmented-button" role="group" aria-label="Group label">
        <button class="fd-button fd-button--compact">View 1</button>
        <button class="fd-button fd-button--compact fd-button--toggled" aria-pressed="true">View 2</button>
        <button class="fd-button fd-button--compact">View 3</button>
    </div>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Filter">
        <i class="sap-icon--filter" role="presentation"></i>
    </button>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Sort">
        <i class="sap-icon--sort" role="presentation"></i>
    </button>
    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Group">
        <i class="sap-icon--group-2" role="presentation"></i>
    </button>
</div>
```

### Tablet

```html
<div class="fd-toolbar fd-toolbar--clear fd-toolbar--title-bar" role="toolbar" aria-label="Left, center, and right-aligned toolbar">
    <div class="fd-title-bar">
        <div class="fd-title-bar__button-container">
            <button class="fd-button fd-button--nested" aria-label="Back">
                <i class="sap-icon--navigation-left-arrow" role="presentation"></i>
            </button>
            <div class="fd-title-bar__container">
                <div class="fd-title-bar__title-container">
                    <h4 class="fd-title-bar__title">Title</h4>
                    <button class="fd-button fd-button--nested" aria-label="information">
                        <i class="sap-icon--hint" role="presentation"></i>
                    </button>
                </div>
                <span class="fd-title-bar__subtitle">Subtitle, byline, description</span>
            </div>
        </div>
        <span class="fd-toolbar__spacer"></span>
        <div class="fd-segmented-button" role="group" aria-label="Group label">
            <button class="fd-button">View 1</button>
            <button class="fd-button fd-button--toggled" aria-pressed="true">View 2</button>
            <button class="fd-button">View 3</button>
        </div>
        <button class="fd-button fd-button--transparent" aria-label="Filter">
            <i class="sap-icon--filter" role="presentation"></i>
        </button>
        <button class="fd-button fd-button--transparent" aria-label="Sort">
            <i class="sap-icon--sort" role="presentation"></i>
        </button>
        <button class="fd-button fd-button--transparent" aria-label="Group">
            <i class="sap-icon--group-2" role="presentation"></i>
        </button>
    </div>
</div>
```

### Mobile

```html
<div class="fd-toolbar fd-toolbar--clear fd-toolbar--title-bar" role="toolbar" aria-label="Left, center, and right-aligned toolbar">
    <div class="fd-title-bar">
        <div class="fd-title-bar__button-container">
            <button class="fd-button fd-button--nested" aria-label="Back">
                <i class="sap-icon--navigation-left-arrow" role="presentation"></i>
            </button>
            <div class="fd-title-bar__container">
                <div class="fd-title-bar__title-container">
                    <h4 class="fd-title-bar__title">Title</h4>
                    <button class="fd-button fd-button--nested" aria-label="information">
                        <i class="sap-icon--hint" role="presentation"></i>
                    </button>
                </div>
                <span class="fd-title-bar__subtitle">Subtitle, byline, description</span>
            </div>
        </div>
        <span class="fd-toolbar__spacer"></span>

        <button class="fd-button fd-button--transparent" aria-label="Filter">
            <i class="sap-icon--filter" role="presentation"></i>
        </button>
        <button class="fd-button fd-button--transparent" aria-label="Sort">
            <i class="sap-icon--sort" role="presentation"></i>
        </button>
        <button class="fd-button fd-button--transparent" aria-label="Overflow">
            <i class="sap-icon--overflow" role="presentation"></i>
        </button>
    </div>
</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/BTP/title-bar/title-bar.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
