---
component: fd-message-page
title: Components/Message Page
category: Components
selector: fd-message-page
cssFile: message-page.css
sourcePath: packages/styles/stories/Components/message-page/message-page.stories.js
tags: []
dependencies: ["button","icon","link","message-page"]
relatedComponents: ["button","icon","link","message-page"]
stability: stable
generatedAt: 2026-05-28T16:47:21.149Z
---

# Components/Message Page

Message page displays a message to the user when an app or list is empty or if an error has occurred. The text and icon on the message page changes depending on the use case, however, the layout stays the same. It is responsive and adjusts to fit the available screen space.

**The message page can be used in the following situations:**

- Filter with no results
- Search with no results
- Empty app
- Too many items
- Item saved as a tile that is no longer available
- Error

##Guidelines
- The icon is mandatory and can vary depending on the message. The default icon is \

## Dependencies

This component depends on the following CSS files:

- `button.css`
- `icon.css`
- `link.css`
- `message-page.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/message-page.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/link.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/message-page.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-message-page">
    <div class="fd-message-page__container">
        <div class="fd-message-page__icon-container">
            <i role="presentation" class="sap-icon--filter fd-message-page__icon"></i>
            <div role="status" aria-live="polite" class="fd-message-page__content">
                <div class="fd-message-page__title">
                    No matching items found.
                </div>
                <div class="fd-message-page__subtitle">
                    Check the filter settings.
                </div>
            </div>
        </div>
    </div>
</div>
```

## BEM Elements

This component uses the following BEM elements:

- `fd-message-page__actions`
- `fd-message-page__container`
- `fd-message-page__content`
- `fd-message-page__icon`
- `fd-message-page__icon-container`
- `fd-message-page__more`
- `fd-message-page__subtitle`
- `fd-message-page__title`

## Related Components

This component works with or depends on:

- `button`
- `icon`
- `link`
- `message-page`

## Design Tokens

Key CSS variables used by this component:

- `--center`
- `--fdMessage_Page_Container_Background`
- `--fdMessage_Page_Container_Corner_Radius`
- `--fdMessage_Page_Title_Margin_Bottom`
- `--fdMessage_Page_Title_Margin_Top`
- `--sapBackgroundColor`
- `--sapContent_LabelColor`
- `--sapContent_NonInteractiveIconColor`
- `--sapFontHeader2Size`
- `--sapFontHeader5Size`
- `--sapGroup_TitleTextColor`

## Examples

### Filter

The filter message page is displayed when the user has set a filter and there are no results. This message then prompts the user to remove or re-evaluate the filter they set for the page. It is mandatory to use the \

```html
<div class="fd-message-page">
    <div class="fd-message-page__container">
        <div class="fd-message-page__icon-container">
            <i role="presentation" class="sap-icon--filter fd-message-page__icon"></i>
            <div role="status" aria-live="polite" class="fd-message-page__content">
                <div class="fd-message-page__title">
                    No matching items found.
                </div>
                <div class="fd-message-page__subtitle">
                    Check the filter settings.
                </div>
            </div>
        </div>
    </div>
</div>
```

### Search

The search message page is displayed when a user has searched for something, but there are no results for that inquiry. It is mandatory to use the \

```html
<div class="fd-message-page">
    <div class="fd-message-page__container">
        <div class="fd-message-page__icon-container">
            <i role="presentation" class="sap-icon--search fd-message-page__icon"></i>
            <div role="status" aria-live="polite" class="fd-message-page__content">
                <div class="fd-message-page__title">
                    No matching items found.
                </div>
            </div>
        </div>
    </div>
</div>
```

### No items

Message page displays a message indicating that there are no items when the user attempts to view a page that is supposed to contain items, but they are either not available or do not exist. It is mandatory to use either the \

```html
<div class="fd-message-page">
    <div class="fd-message-page__container">
        <div class="fd-message-page__icon-container">
            <i role="presentation" class="sap-icon--product fd-message-page__icon"></i>
            <div role="status" aria-live="polite" class="fd-message-page__content">
                <div class="fd-message-page__title">
                    No items are currently available.
                </div>
            </div>
        </div>
    </div>
</div>
```

### Error

The error message page is displayed when the user attempts to view a page but an error has occurred, resulting in no available content. If you can, provide a link to the app start screen in the error message. It is mandatory to use the \

```html
<div class="fd-message-page">
    <div class="fd-message-page__container">
        <div class="fd-message-page__icon-container">
            <i role="presentation" class="sap-icon--document fd-message-page__icon"></i>
            <div role="status" aria-live="polite" class="fd-message-page__content">
                <div class="fd-message-page__title">
                    Sorry, we can’t find this page.
                </div>
                <div class="fd-message-page__subtitle">
                    <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">Home Page</span></a>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Formatted text and buttons

The message page with formatted text and buttons is useful for when you want to add formatted text (bold, italic, underline and/or bullet points) and buttons to the action area. It's highly recommended not to add more than two buttons.

```html
<div class="fd-message-page">
    <div class="fd-message-page__container">
        <div class="fd-message-page__icon-container">
            <i role="presentation" class="sap-icon--documents fd-message-page__icon"></i>
            <div role="status" aria-live="polite" class="fd-message-page__content">
                <div class="fd-message-page__title">
                    Sorry, we can't find the page
                </div>
                <div class="fd-message-page__subtitle">
                    <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur.
                        <i>Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.</i>
                        </div>
                        <div class="fd-message-page__actions">
                            <button
                                class="fd-button fd-button--emphasized"
                                >
                                Contact Support
                            </button>
                            <button class="fd-button">Reload Page</button>
                        </div>
                        <div class="fd-message-page__more">
                            <button
                                class="fd-button fd-button--transparent">
                                Show Details
                            </button>
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

This documentation was automatically generated from: `packages/styles/stories/Components/message-page/message-page.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
