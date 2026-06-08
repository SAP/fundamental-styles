---
component: fd-action-bar
title: Components/Action Bar
category: Components
selector: fd-action-bar
cssFile: action-bar.css
sourcePath: packages/styles/stories/Components/action-bar/action-bar.stories.js
tags: ["non-f3"]
dependencies: ["action-bar","button","icon","menu","popover","title"]
relatedComponents: ["action-bar","button","icon","menu","popover","title"]
stability: stable
generatedAt: 2026-06-08T17:49:01.822Z
---

# Components/Action Bar

The action bar displays at the top of the page, and includes the page’s title, description, back button and action buttons.

##Usage
**Use action bar if:**

-	You want to control the settings of the UI, which affects all items.
-	You want to display actions at the top of the screen.

For the page title, a Title component is utilized that is an H1 but visually styled as an H3. As the first heading on the page, for accessibility purposes it must be an H1. See the Title component page for further information on semantic versus visual heading levels.

**Do not use action bar if:**

-	You want to display finalizing actions at the bottom of the screen. Instead, use the **Bar** component and choose a footer.

Note: You may want to display components from right to left on the screen for international purposes. To display them as such, add the \

## Usage Guidelines

**Use action bar if:**

-	You want to control the settings of the UI, which affects all items.
-	You want to display actions at the top of the screen.

For the page title, a Title component is utilized that is an H1 but visually styled as an H3. As the first heading on the page, for accessibility purposes it must be an H1. See the Title component page for further information on semantic versus visual heading levels.

## When Not To Use

-	You want to display finalizing actions at the bottom of the screen. Instead, use the **Bar** component and choose a footer.

Note: You may want to display components from right to left on the screen for international purposes. To display them as such, add the \

## Dependencies

This component depends on the following CSS files:

- `action-bar.css`
- `button.css`
- `icon.css`
- `menu.css`
- `popover.css`
- `title.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/action-bar.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/action-bar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/menu.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/popover.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/title.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-action-bar" role="banner" aria-labelledby="action-bar-title-1" aria-describedby="action-bar-desc-1">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <button type="button" aria-label="Go back" title="Go back" class="fd-button fd-button--transparent">
                <i  role="presentation" aria-hidden="true" class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>
        <div class="fd-action-bar__title">
            <h1 id="action-bar-title-1" class="fd-title fd-title--h3">Page Title</h1>
        </div>
        <div class="fd-action-bar__actions" role="group" aria-label="Page actions">
            <button type="button" aria-label="Save" class="fd-button">Save</button>
            <button type="button" aria-label="Submit" class="fd-button fd-button--emphasized">Submit</button>
        </div>
    </div>
    <p id="action-bar-desc-1" class="fd-action-bar__description fd-action-bar__description--back">Action bar Description </p>
</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-action-bar--m` | The default action bar displays a page title, description, back button and action buttons |
| `fd-action-bar--s` | The default action bar displays a page title, description, back button and action buttons |
| `fd-action-bar--xl` | This action bar is responsive and fits the XL size required for larger screens of 1440px or more |

## BEM Elements

This component uses the following BEM elements:

- `fd-action-bar__actions`
- `fd-action-bar__back`
- `fd-action-bar__description`
- `fd-action-bar__description--back`
- `fd-action-bar__header`
- `fd-action-bar__title`

## Related Components

This component works with or depends on:

- `action-bar`
- `button`
- `icon`
- `menu`
- `popover`
- `title`

## Design Tokens

Key CSS variables used by this component:

- `--back`
- `--fdActionBarInlinePadding`
- `--lg`
- `--m_l`
- `--md`
- `--s`
- `--sapContent_HeaderShadow`
- `--sapContent_LabelColor`
- `--sapFontHeaderFamily`
- `--sapGroup_TitleTextColor`
- `--sapPageHeader_Background`
- `--sm`
- `--xl`

## Examples

### Default

The default action bar displays a page title, description, back button and action buttons. To display a back button, add the `fd-action-bar__description--back` modifier class to the description element.

```html
<div class="fd-action-bar" role="banner" aria-labelledby="action-bar-title-1" aria-describedby="action-bar-desc-1">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <button type="button" aria-label="Go back" title="Go back" class="fd-button fd-button--transparent">
                <i  role="presentation" aria-hidden="true" class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>
        <div class="fd-action-bar__title">
            <h1 id="action-bar-title-1" class="fd-title fd-title--h3">Page Title</h1>
        </div>
        <div class="fd-action-bar__actions" role="group" aria-label="Page actions">
            <button type="button" aria-label="Save" class="fd-button">Save</button>
            <button type="button" aria-label="Submit" class="fd-button fd-button--emphasized">Submit</button>
        </div>
    </div>
    <p id="action-bar-desc-1" class="fd-action-bar__description fd-action-bar__description--back">Action bar Description </p>
</div>
```

### No back button

This action bar doesn’t display a back button.

```html
<div class="fd-action-bar" role="banner" aria-labelledby="action-bar-title-2" aria-describedby="action-bar-desc-2">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__title">
            <h1 id="action-bar-title-2" class="fd-title fd-title--h3">Page Title</h1>
        </div>
        <div class="fd-action-bar__actions" role="group" aria-label="Page actions">
            <button type="button" aria-label="Save" class="fd-button">Save</button>
            <button type="button" aria-label="Submit" class="fd-button fd-button--emphasized">Submit</button>
        </div>
    </div>
    <p id="action-bar-desc-2" class="fd-action-bar__description">Action bar Description </p>
</div>
```

### No description

This action bar doesn’t display a description.

```html
<div class="fd-action-bar" role="banner" aria-labelledby="action-bar-title-3">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <button type="button" aria-label="Go back" title="Go back" class="fd-button fd-button--transparent">
                <i  role="presentation" aria-hidden="true" class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>
        <div class="fd-action-bar__title">
            <h1 id="action-bar-title-3" class="fd-title fd-title--h3">Page Title</h1>
        </div>
        <div class="fd-action-bar__actions" role="group" aria-label="Page actions">
            <button type="button" aria-label="Save" class="fd-button">Save</button>
            <button type="button" aria-label="Submit" class="fd-button fd-button--emphasized">Submit</button>
        </div>
    </div>
</div>
```

### Descriptive

The descriptive action bar displays a long page title and description.

```html
<div class="fd-action-bar" role="banner" aria-labelledby="action-bar-title-4" aria-describedby="action-bar-desc-4">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <button type="button" aria-label="Go back" title="Go back" class="fd-button fd-button--transparent">
                <i  role="presentation" aria-hidden="true" class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>
        <div class="fd-action-bar__title">
            <h1 id="action-bar-title-4" class="fd-title fd-title--h3">Page Title Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Long.</h1>
        </div>
        <div class="fd-action-bar__actions" role="group"  aria-label="Page actions">
            <button type="button" aria-label="button" class="fd-button">Button</button>
            <button type="button" aria-label="button" class="fd-button">Button</button>
            <button type="button" aria-label="button" class="fd-button fd-button--emphasized">Button</button>
        </div>
    </div>
    <p id="action-bar-desc-4" class="fd-action-bar__description fd-action-bar__description--back">Action bar Description Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Long
    </p>
</div>
```

### Contextual

The contextual action bar displays a page title and contextual menu with several main actions. To display a contextual menu, add the `fd-popover` class to the`fd-action-bar__actions` element.

```html
<div class="fd-action-bar" role="banner" aria-labelledby="action-bar-title-5">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__title">
            <h1 id="action-bar-title-5" class="fd-title fd-title--h3">Page Title</h1>
        </div>
        <div class="fd-action-bar__actions">
            <div class="fd-popover">
                <div class="fd-popover__control">
                    <button
                        type="button"
                        class="fd-button fd-button--transparent"
                        aria-controls="wgxzK859"
                        aria-haspopup="true"
                        aria-expanded="true"
                        aria-label="More actions"
                        title="More actions"
                        onclick="onPopoverClick('wgxzK859');">
                        <i class="sap-icon--overflow" role="presentation" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="fd-popover__body fd-popover__body--right" aria-hidden="false" id="wgxzK859">
                    <div class="fd-menu">
                        <ul class="fd-menu__list fd-menu__list--no-shadow" role="menu" aria-label="More actions">
                            <li class="fd-menu__item" role="none">
                                <a class="fd-menu__link" role="menuitem" href="#">
                                    <span class="fd-menu__title">Edit</span>
                                </a>
                            </li>
                            <li class="fd-menu__item" role="none">
                                <a class="fd-menu__link" role="menuitem" href="#">
                                    <span class="fd-menu__title">Delete</span>
                                </a>
                            </li>
                            <li class="fd-menu__item" role="none">
                                <a class="fd-menu__link" role="menuitem" href="#">
                                    <span class="fd-menu__title">Assign</span>
                                </a>
                            </li>
                            <li class="fd-menu__item" role="none">
                                <a class="fd-menu__link" role="menuitem" href="#">
                                    <span class="fd-menu__title">Expire</span>
                                </a>
                            </li>
                            <li class="fd-menu__item" role="none">
                                <a class="fd-menu__link" role="menuitem" href="#">
                                    <span class="fd-menu__title">Archive</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Responsive (M-L)

This action bar is responsive and fits the M and L sizes required for tablet and small desktop screens. To display this size, add the `fd-action-bar--m\\_l` modifier class to the main element.

```html
<div
    class="fd-action-bar fd-action-bar--m_l"
    role="banner"
    aria-labelledby="action-bar-title-7"
    aria-describedby="action-bar-desc-7">

    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <button type="button" aria-label="Go back" title="Go back" class="fd-button fd-button--transparent">
                <i  role="presentation" aria-hidden="true" class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>

        <div class="fd-action-bar__title">
            <h1 id="action-bar-title-7" class="fd-title fd-title--h3">Page Title</h1>
        </div>

        <div class="fd-action-bar__actions" role="group" aria-label="Page actions">
            <button type="button" aria-label="Save" class="fd-button">Save</button>
            <button type="button" aria-label="Submit" class="fd-button fd-button--emphasized">Submit</button>
        </div>
    </div>

    <p id="action-bar-desc-7" class="fd-action-bar__description fd-action-bar__description--back">Action bar Description</p>
```

### Responsive (XL)

This action bar is responsive and fits the XL size required for larger screens of 1440px or more. To display this size, add the `fd-action-bar--xl` modifier class to the main element.

```html
<div
    class=" fd-action-bar fd-action-bar--xl"
    role="banner"
    aria-labelledby="action-bar-title-8"
    aria-describedby="action-bar-desc-8">

    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <button type="button" aria-label="Go back" title="Go back" class="fd-button fd-button--transparent">
                <i  role="presentation" aria-hidden="true" class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>

        <div class="fd-action-bar__title">
            <h1 id="action-bar-title-8" class="fd-title fd-title--h3">Page Title</h1>
        </div>

        <div class="fd-action-bar__actions" role="group" aria-label="Page actions">
            <button type="button" aria-label="Save" class="fd-button">Save</button>
            <button type="button" aria-label="Submit" class="fd-button fd-button--emphasized">Submit</button>
        </div>
    </div>
    <p id="action-bar-desc-8" class="fd-action-bar__description fd-action-bar__description--back">Action bar Description </p>
```

### Mobile

This action bar is mobile responsive. To display the mobile action bar, add the `fd-action-bar--s` modifier class to the main element.

```html
<div class="fd-action-bar fd-action-bar--s" role="banner" aria-labelledby="action-bar-title-6">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <button type="button" aria-label="Go back" title="Go back" class="fd-button fd-button--transparent">
                <i role="presentation" aria-hidden="true" class="sap-icon--navigation-left-arrow"></i>
            </button>
            <div class="fd-action-bar__title">
                <h1 id="action-bar-title-6" class="fd-title fd-title--h3">
                    Action Bar with description and back button
                </h1>
            </div>
            <div class="fd-action-bar__actions">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <button
                            type="button"
                            class="fd-button fd-button--transparent"
                            onclick="onPopoverClick('wgxzK85');"
                            aria-controls="wgxzK85"
                            aria-haspopup="true"
                            aria-expanded="true"
                            aria-label="More actions"
                            title="More actions">
                            <i class="sap-icon--overflow"></i>
                        </button>
                    </div>
                    <div class="fd-popover__body fd-popover__body--right" aria-hidden="false" id="wgxzK85">
                        <div class="fd-menu">
                            <ul class="fd-menu__list fd-menu__list--no-shadow" role="menu" aria-label="More actions">
                                <li class="fd-menu__item" role="none">
                                    <a class="fd-menu__link" role="menuitem" href="#">
                                        <span class="fd-menu__title">Option 1</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item" role="none">
                                    <a class="fd-menu__link" role="menuitem" href="#">
                                        <span class="fd-menu__title">Option 2</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item" role="none">
                                    <a class="fd-menu__link" role="menuitem" href="#">
                                        <span class="fd-menu__title">Option 3</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item" role="none">
                                    <a class="fd-menu__link" role="menuitem" href="#">
                                        <span class="fd-menu__title">Option 4</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
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

This documentation was automatically generated from: `packages/styles/stories/Components/action-bar/action-bar.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
