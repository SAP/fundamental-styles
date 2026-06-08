---
component: fd-page
title: Layouts/Page
category: Layouts
selector: fd-page
cssFile: page.css
sourcePath: packages/styles/stories/Layouts/page/page.stories.js
tags: []
dependencies: ["bar","button","form-item","form-label","icon","input","page"]
relatedComponents: ["bar","button","form-item","form-label","icon","input","page"]
stability: stable
generatedAt: 2026-06-08T17:49:02.264Z
---

# Layouts/Page

- \

## Dependencies

This component depends on the following CSS files:

- `bar.css`
- `button.css`
- `form-item.css`
- `form-label.css`
- `icon.css`
- `input.css`
- `page.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/page.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/bar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/form-item.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/form-label.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/input.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/page.css" rel="stylesheet">
```

## Basic Usage

```html
<main class="fd-page">
    <header>
        <div class="fd-bar fd-bar--page fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent" aria-label="Go back">
                        <i class="sap-icon--navigation-left-arrow"></i>
                    </button>
                </div>
                <div class="fd-bar__element">
                    Header Title
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent" aria-label="See more">
                        <i class="sap-icon--grid"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>
    <div class="fd-page__content" role="region">
        Page Content
    </div>
    <footer>
        <div class="fd-bar fd-bar--page fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent">Cancel</button>
                </div>
            </div>
        </div>
    </footer>
</main>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-page--home` | Home page with List Background Design, Floating Footer and Responsive Behaviour - XL |
| `fd-page--list` | Home page with List Background Design, Floating Footer and Responsive Behaviour - XL |
| `fd-page--transparent` | Page with Transparent Background Design, Header with SubHeader, and Responsive Behaviour - M_L |

## BEM Elements

This component uses the following BEM elements:

- `fd-page__content`
- `fd-page__content--m`
- `fd-page__content--xl`

## Related Components

This component works with or depends on:

- `bar`
- `button`
- `form-item`
- `form-label`
- `icon`
- `input`
- `page`

## Design Tokens

Key CSS variables used by this component:

- `--S`
- `--fdPage_Background`
- `--fdPage_List_Background`
- `--fdPage_Transparent_Background`
- `--home`
- `--list`
- `--m_l`
- `--s`
- `--sapBackgroundColor`
- `--solid`
- `--transparent`
- `--xl`

## Examples

### BasicPage

```html
<main class="fd-page">
    <header>
        <div class="fd-bar fd-bar--page fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent" aria-label="Go back">
                        <i class="sap-icon--navigation-left-arrow"></i>
                    </button>
                </div>
                <div class="fd-bar__element">
                    Header Title
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent" aria-label="See more">
                        <i class="sap-icon--grid"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>
    <div class="fd-page__content" role="region">
        Page Content
    </div>
    <footer>
        <div class="fd-bar fd-bar--page fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent">Cancel</button>
                </div>
            </div>
        </div>
    </footer>
</main>
```

### TransparentPage

Page with Transparent Background Design, Header with SubHeader, and Responsive Behaviour - M_L

```html
<main class="fd-page fd-page--transparent">
    <header>
        <div class="fd-bar fd-bar--page-m_l fd-bar--header-with-subheader">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent" aria-label="Go back">
                        <i class="sap-icon--navigation-left-arrow"></i>
                    </button>
                </div>
                <div class="fd-bar__element">
                    Header Title
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent" aria-label="See more">
                        <i class="sap-icon--overflow"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>
    <div class="fd-bar fd-bar--page-m_l fd-bar--subheader">
        <div class="fd-bar__middle">
            <div class="fd-bar__element fd-bar__element--full-width">
                <div class="fd-form-item fd-form-item--horizontal">
                    <label class="fd-form-label" for="input-1">
                        Field Text:
                    </label>
                    <input class="fd-input" type="text" id="input-1" placeholder="Field placeholder text">
                </div>
            </div>
        </div>
    </div>
    <div class="fd-page__content--m_l" role="region">
        Page Content
    </div>
    <footer>
        <div class="fd-bar fd-bar--page-m_l fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent">Cancel</button>
                </div>
            </div>
        </div>
    </footer>
</main>
```

### ResponsivePage

Home page with List Background Design, Floating Footer and Responsive Behaviour - XL

```html
<main class="fd-page fd-page--home fd-page--list">
    <header>
        <div class="fd-bar fd-bar--home-page-xl fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent" aria-label="Go back">
                        <i class="sap-icon--navigation-left-arrow"></i>
                    </button>
                </div>
                <div class="fd-bar__element">
                    Header Title
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent" aria-label="See more">
                        <i class="sap-icon--overflow"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>
    <div class="fd-page__content--xl" role="region">
        Page Content
    </div>
    <footer>
        <div class="fd-bar fd-bar--home-page-xl fd-bar--floating-footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent">Cancel</button>
                </div>
            </div>
        </div>
    </footer>
</main>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Layouts/page/page.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
