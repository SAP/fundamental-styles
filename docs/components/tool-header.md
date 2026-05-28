---
component: fd-tool-header
title: BTP/Tool Header
category: BTP
selector: fd-tool-header
cssFile: tool-header.css
sourcePath: packages/styles/stories/BTP/tool-header/tool-header.stories.js
tags: ["btp","deprecated","horizon-only"]
dependencies: ["avatar","button","icon","message-strip","search-field","tool-header"]
relatedComponents: ["avatar","button","icon","message-strip","search-field","tool-header"]
stability: deprecated
generatedAt: 2026-05-28T16:47:21.425Z
---

# BTP/Tool Header

> **⚠️ DEPRECATED**: This component is deprecated and should not be used in new projects.

The Tool Header exists on all BTP tools. It is the uppermost section of the tool. It is always visible to give users access to various functions. <br>
<div class="fd-message-strip fd-message-strip--no-icon fd-message-strip--warning fd-message-strip--link"><p class="fd-message-strip__text" id="message-strip-text-4">
    This component is deprecated. Please use the <a class="fd-link fd-link--emphasized" href="../?path=/docs/sap-fiori-components-shellbar--docs" target="_blank">SHELLBAR</a> component instead.</p></div>

## Structure
- <code>fd-tool-header</code> -&nbsp;<b>(required)</b> Tool Header Container element. Holds all Tool Header UI elements
        - <code>fd-tool-header--menu</code> -&nbsp; if the Tool Header has a Menu Button
- <code>fd-tool-header__group</code> -&nbsp; groups UI elements. The spacing between the groups is 0.75rem;
        - <code>fd-tool-header__group--hidden</code> -&nbsp;modifier class to hide an entire group;
        - <code>fd-tool-header__group--menu</code> -&nbsp;modifier class for the group element that contains the Menu Button;
        - <code>fd-tool-header__group--center</code> -&nbsp;modifier class for the group element that contains the Search/Context Switch;
        - <code>fd-tool-header__group--actions</code> -&nbsp;modifier class for the group element that contains the <b>custom</b> and <b>system</b> actions;

- <code>fd-tool-header__element</code> -&nbsp;a wrapping HTML element around every UI control. The spacing between individual elements in the group is 0.375rem;
        - <code>fd-tool-header__element--hidden</code> -&nbsp;modifier class to hide an element depending on the screen size;

- <code>fd-tool-header__logo</code> -&nbsp;<b>(required)</b> the logo is the logo of the company using the tool. The SAP logo is used as default. The logo is an interactive element that always navigates to the tool's homepage. 

- <code>fd-tool-header__product-name</code> -&nbsp;<b>(required)</b> the Product Name is the official name of the tool. 

- <code>fd-tool-header__second-title</code> -&nbsp; the Second Title is an optional second text identifier of the tool. 

- <code>fd-tool-header__separator</code> -&nbsp; The Separator is an optional element that adds space between the <b>Custom Actions Area</b> (optional), <b>System Actions Area</b> (optional) and <b>User Avatar</b> (required).

## Dependencies

This component depends on the following CSS files:

- `avatar.css`
- `button.css`
- `icon.css`
- `message-strip.css`
- `search-field.css`
- `tool-header.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/tool-header.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/avatar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/message-strip.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/search-field.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/tool-header.css" rel="stylesheet">
```

## Basic Usage

```html
<h4>Without Menu Button (default)</h4>
<div class="fd-tool-header fd-tool-header--compact">
    <div class="fd-tool-header__group">
        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Back navigation" title="Back navigation">
                <i class="sap-icon--slim-arrow-left" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <img
            class="fd-tool-header__logo"
            src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png"
            srcset="
            //unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x,
            //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x,
            //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x
            "
            alt="SAP logo"
            aria-label="SAP logo"
            title="SAP logo"
            role="button"
            tabindex="0"
            />
        </div>

        <div class="fd-tool-header__element">
            <div class="fd-tool-header__product-name">Product Name</div>
        </div>

        <div class="fd-tool-header__element">
            <div class="fd-tool-header__second-title">Second Title</div>
        </div>
    </div>

    <div class="fd-tool-header__group fd-tool-header__group--center">
        <div class="fd-tool-header__element">
            <div class="fd-search-field">
                <span role="presentation" aria-hidden="true" class="fd-search-field__icon sap-icon--search"></span>
                <input placeholder="Search Anything" type="search" aria-label="Search" class="fd-search-field__input">

                <div class="fd-search-field__actions">
                    <div class="fd-search-field__action-container">
                        <button class="fd-button fd-button--nested" aria-label="Close">
                            <i class="sap-icon--decline" role="presentation"></i>
                        </button>
                    </div>
                    <div class="fd-search-field__action-container">
                        <button class="fd-button fd-button--nested" aria-label="Search" aria-disabled="true" tabindex="-1">
                            <i class="sap-icon--slim-arrow-right" role="presentation"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="fd-tool-header__group fd-tool-header__group--actions">
        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Search" title="Search">
                <i class="sap-icon--search" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 1" title="Action 1">
                <i class="sap-icon--source-code" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 2" title="Action 2">
                <i class="sap-icon--picture" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <span class="fd-tool-header__separator"></span>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 3" title="Action 3">
                <i class="sap-icon--action-settings" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 4" title="Action 4">
                <i class="sap-icon--bell" role="presentation"></i>
                <span class="fd-button__badge"></span>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Action 5" title="Action 5">
                <i class="sap-icon--overflow" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Action 6" title="Action 6">
                <i class="sap-icon--microphone" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <span class="fd-tool-header__separator"></span>
        </div>

        <div class="fd-tool-header__element">
            <span
                class="fd-avatar fd-avatar--40 fd-avatar--circle fd-avatar--thumbnail"

                role="button"
                tabindex="0"
                title="John Doe"
                aria-label="John Doe"
                ></span>
            </div>
        </div>
    </div>

    <h4>With Menu Button</h4>
    <div class="fd-tool-header fd-tool-header--menu fd-tool-header--compact">
        <div class="fd-tool-header__group fd-tool-header__group--menu">
            <div class="fd-tool-header__element">
                <button class="fd-button fd-button--tool-header" aria-label="Small Size Navigation" title="Small Size Navigation">
                    <i class="sap-icon--menu2" role="presentation"></i>
                </button>
            </div>
        </div>

        <div class="fd-tool-header__group">
            <div class="fd-tool-header__element fd-tool-header__element--hidden">
                <button class="fd-button fd-button--tool-header" aria-label="Back Navigation" title="Back Navigation">
                    <i class="sap-icon--slim-arrow-left" role="presentation"></i>
                </button>
            </div>

            <div class="fd-tool-header__element">
                <img
                class="fd-tool-header__logo"
                src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png"
                srcset="
                //unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x,
                //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x,
                //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x
                "
                alt="SAP logo"
                aria-label="SAP logo"
                title="SAP logo"
                role="button"
                tabindex="0"
                />
            </div>

            <div class="fd-tool-header__element">
                <div class="fd-tool-header__product-name">Product Name</div>
            </div>

            <div class="fd-tool-header__element">
                <div class="fd-tool-header__second-title">Second Title</div>
            </div>
        </div>

        <div class="fd-tool-header__group fd-tool-header__group--center">
            <div class="fd-tool-header__element">
                <div class="fd-search-field">
                    <span role="presentation" aria-hidden="true" class="fd-search-field__icon sap-icon--search"></span>
                    <input placeholder="Search Anything" type="search" aria-label="Search" class="fd-search-field__input">

                    <div class="fd-search-field__actions">
                        <div class="fd-search-field__action-container">
                            <button class="fd-button fd-button--nested" aria-label="Close">
                                <i class="sap-icon--decline" role="presentation"></i>
                            </button>
                        </div>
                        <div class="fd-search-field__action-container">
                            <button class="fd-button fd-button--nested" aria-label="Search" aria-disabled="true" tabindex="-1">
                                <i class="sap-icon--slim-arrow-right" role="presentation"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="fd-tool-header__group fd-tool-header__group--actions">
            <div class="fd-tool-header__element fd-tool-header__element--hidden">
                <button class="fd-button fd-button--tool-header" aria-label="Search" title="Search">
                    <i class="sap-icon--search" role="presentation"></i>
                </button>
            </div>

            <div class="fd-tool-header__element">
                <button class="fd-button fd-button--tool-header" aria-label="Action 1" title="Action 1">
                    <i class="sap-icon--source-code" role="presentation"></i>
                </button>
            </div>

            <div class="fd-tool-header__element">
                <button class="fd-button fd-button--tool-header" aria-label="Action 2" title="Action 2">
                    <i class="sap-icon--picture" role="presentation"></i>
                </button>
            </div>

            <div class="fd-tool-header__element">
                <span class="fd-tool-header__separator"></span>
            </div>

            <div class="fd-tool-header__element">
                <button class="fd-button fd-button--tool-header" aria-label="Action 3" title="Action 3">
                    <i class="sap-icon--action-settings" role="presentation"></i>
                </button>
            </div>

            <div class="fd-tool-header__element">
                <button class="fd-button fd-button--tool-header" aria-label="Action 4" title="Action 4">
                    <i class="sap-icon--bell" role="presentation"></i>
                    <span class="fd-button__badge"></span>
                </button>
            </div>

            <div class="fd-tool-header__element fd-tool-header__element--hidden">
                <button class="fd-button fd-button--tool-header" aria-label="Action 5" title="Action 5">
                    <i class="sap-icon--overflow" role="presentation"></i>
                </button>
            </div>

            <div class="fd-tool-header__element fd-tool-header__element--hidden">
                <button class="fd-button fd-button--tool-header" aria-label="Action 6" title="Action 6">
                    <i class="sap-icon--microphone" role="presentation"></i>
                </button>
            </div>

            <div class="fd-tool-header__element">
                <span class="fd-tool-header__separator"></span>
            </div>

            <div class="fd-tool-header__element">
                <span
                    class="fd-avatar fd-avatar--40 fd-avatar--circle fd-avatar--thumbnail"

                    role="button"
                    tabindex="0"
                    title="John Doe"
                    aria-label="John Doe"
                    ></span>
                </div>
            </div>
        </div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-tool-header--compact` | Style variant |
| `fd-tool-header--menu` | When <b>menu button</b> is present use the <code>fd-tool-header--menu</code> modifier class with the <code>fd-tool-header</code> base class |

## States

| Class | Description |
|-------|-------------|
| `is-focus` | Focus state |

## BEM Elements

This component uses the following BEM elements:

- `fd-tool-header__elemen`
- `fd-tool-header__element`
- `fd-tool-header__element--hidden`
- `fd-tool-header__element--hiddent`
- `fd-tool-header__group`
- `fd-tool-header__group--actions`
- `fd-tool-header__group--center`
- `fd-tool-header__group--hidden`
- `fd-tool-header__group--menu`
- `fd-tool-header__logo`
- `fd-tool-header__product-name`
- `fd-tool-header__second-title`
- `fd-tool-header__separator`

## Component Structure

- <code>fd-tool-header</code> -&nbsp;<b>(required)</b> Tool Header Container element. Holds all Tool Header UI elements
        - <code>fd-tool-header--menu</code> -&nbsp; if the Tool Header has a Menu Button
- <code>fd-tool-header__group</code> -&nbsp; groups UI elements. The spacing between the groups is 0.75rem;
        - <code>fd-tool-header__group--hidden</code> -&nbsp;modifier class to hide an entire group;
        - <code>fd-tool-header__group--menu</code> -&nbsp;modifier class for the group element that contains the Menu Button;
        - <code>fd-tool-header__group--center</code> -&nbsp;modifier class for the group element that contains the Search/Context Switch;
        - <code>fd-tool-header__group--actions</code> -&nbsp;modifier class for the group element that contains the <b>custom</b> and <b>system</b> actions;

- <code>fd-tool-header__element</code> -&nbsp;a wrapping HTML element around every UI control. The spacing between individual elements in the group is 0.375rem;
        - <code>fd-tool-header__element--hidden</code> -&nbsp;modifier class to hide an element depending on the screen size;

- <code>fd-tool-header__logo</code> -&nbsp;<b>(required)</b> the logo is the logo of the company using the tool. The SAP logo is used as default. The logo is an interactive element that always navigates to the tool's homepage. 

- <code>fd-tool-header__product-name</code> -&nbsp;<b>(required)</b> the Product Name is the official name of the tool. 

- <code>fd-tool-header__second-title</code> -&nbsp; the Second Title is an optional second text identifier of the tool. 

- <code>fd-tool-header__separator</code> -&nbsp; The Separator is an optional element that adds space between the <b>Custom Actions Area</b> (optional), <b>System Actions Area</b> (optional) and <b>User Avatar</b> (required).

## Related Components

This component works with or depends on:

- `avatar`
- `button`
- `icon`
- `message-strip`
- `search-field`
- `tool-header`

## Design Tokens

Key CSS variables used by this component:

- `--actions`
- `--center`
- `--fdToolHeader_Border_Color`
- `--fdToolHeader_Min_Height`
- `--fdToolHeader_Padding_Left`
- `--fdToolHeader_Padding_Right`
- `--hidden`
- `--menu`
- `--sapContent_FocusColor`
- `--sapContent_FocusStyle`
- `--sapContent_FocusWidth`
- `--sapContent_LineHeight`
- `--sapFontBlackFamily`
- `--sapFontFamily`
- `--sapShellColor`

*...and 5 more*

## Examples

### Desktop

When <b>menu button</b> is present use the <code>fd-tool-header--menu</code> modifier class with the <code>fd-tool-header</code> base class. Additionally, apply the <code>fd-tool-header__group--menu</code> modifier to the <code>fd-tool-header__group</code> wrapping element.

```html
<h4>Without Menu Button (default)</h4>
<div class="fd-tool-header fd-tool-header--compact">
    <div class="fd-tool-header__group">
        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Back navigation" title="Back navigation">
                <i class="sap-icon--slim-arrow-left" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <img
            class="fd-tool-header__logo"
            src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png"
            srcset="
            //unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x,
            //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x,
            //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x
            "
            alt="SAP logo"
            aria-label="SAP logo"
            title="SAP logo"
            role="button"
            tabindex="0"
            />
        </div>

        <div class="fd-tool-header__element">
            <div class="fd-tool-header__product-name">Product Name</div>
        </div>

        <div class="fd-tool-header__element">
            <div class="fd-tool-header__second-title">Second Title</div>
        </div>
    </div>

    <div class="fd-tool-header__group fd-tool-header__group--center">
        <div class="fd-tool-header__element">
            <div class="fd-search-field">
                <span role="presentation" aria-hidden="true" class="fd-search-field__icon sap-icon--search"></span>
                <input placeholder="Search Anything" type="search" aria-label="Search" class="fd-search-field__input">

                <div class="fd-search-field__actions">
                    <div class="fd-search-field__action-container">
                        <button class="fd-button fd-button--nested" aria-label="Close">
                            <i class="sap-icon--decline" role="presentation"></i>
                        </button>
                    </div>
                    <div class="fd-search-field__action-container">
                        <button class="fd-button fd-button--nested" aria-label="Search" aria-disabled="true" tabindex="-1">
                            <i class="sap-icon--slim-arrow-right" role="presentation"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="fd-tool-header__group fd-tool-header__group--actions">
        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Search" title="Search">
                <i class="sap-icon--search" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 1" title="Action 1">
                <i class="sap-icon--source-code" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 2" title="Action 2">
                <i class="sap-icon--picture" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <span class="fd-tool-header__separator"></span>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 3" title="Action 3">
                <i class="sap-icon--action-settings" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 4" title="Action 4">
                <i class="sap-icon--bell" role="presentation"></i>
                <span class="fd-button__badge"></span>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Action 5" title="Action 5">
                <i class="sap-icon--overflow" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Action 6" title="Action 6">
                <i class="sap-icon--microphone" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <span class="fd-tool-header__separator"></span>
        </div>

        <div class="fd-tool-header__element">
            <span
                class="fd-avatar fd-avatar--40 fd-avatar--circle fd-avatar--thumbnail"

                role="button"
                tabindex="0"
                title="John Doe"
                aria-label="John Doe"
                ></span>
            </div>
        </div>
    </div>

    <h4>With Menu Button</h4>
    <div class="fd-tool-header fd-tool-header--menu fd-tool-header--compact">
        <div class="fd-tool-header__group fd-tool-header__group--menu">
            <div class="fd-tool-header__element">
                <button class="fd-button fd-button--tool-header" aria-label="Small Size Navigation" title="Small Size Navigation">
                    <i class="sap-icon--menu2" role="presentation"></i>
                </button>
            </div>
        </div>

        <div class="fd-tool-header__group">
            <div class="fd-tool-header__element fd-tool-header__element--hidden">
                <button class="fd-button fd-button--tool-header" aria-label="Back Navigation" title="Back Navigation">
                    <i class="sap-icon--slim-arrow-left" role="presentation"></i>
                </button>
            </div>

            <div class="fd-tool-header__element">
                <img
                class="fd-tool-header__logo"
                src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png"
                srcset="
                //unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x,
                //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x,
                //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x
                "
                alt="SAP logo"
                aria-label="SAP logo"
                title="SAP logo"
                role="button"
                tabindex="0"
                />
            </div>

            <div class="fd-tool-header__element">
                <div class="fd-tool-header__product-name">Product Name</div>
            </div>

            <div class="fd-tool-header__element">
                <div class="fd-tool-header__second-title">Second Title</div>
            </div>
        </div>

        <div class="fd-tool-header__group fd-tool-header__group--center">
            <div class="fd-tool-header__element">
                <div class="fd-search-field">
                    <span role="presentation" aria-hidden="true" class="fd-search-field__icon sap-icon--search"></span>
                    <input placeholder="Search Anything" type="search" aria-label="Search" class="fd-search-field__input">

                    <div class="fd-search-field__actions">
                        <div class="fd-search-field__action-container">
                            <button class="fd-button fd-button--nested" aria-label="Close">
                                <i class="sap-icon--decline" role="presentation"></i>
                            </button>
                        </div>
                        <div class="fd-search-field__action-container">
                            <button class="fd-button fd-button--nested" aria-label="Search" aria-disabled="true" tabindex="-1">
                                <i class="sap-icon--slim-arrow-right" role="presentation"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="fd-tool-header__group fd-tool-header__group--actions">
            <div class="fd-tool-header__element fd-tool-header__element--hidden">
                <button class="fd-button fd-button--tool-header" aria-label="Search" title="Search">
                    <i class="sap-icon--search" role="presentation"></i>
                </button>
            </div>

            <div class="fd-tool-header__element">
                <button class="fd-button fd-button--tool-header" aria-label="Action 1" title="Action 1">
                    <i class="sap-icon--source-code" role="presentation"></i>
                </button>
            </div>

            <div class="fd-tool-header__element">
                <button class="fd-button fd-button--tool-header" aria-label="Action 2" title="Action 2">
                    <i class="sap-icon--picture" role="presentation"></i>
                </button>
            </div>

            <div class="fd-tool-header__element">
                <span class="fd-tool-header__separator"></span>
            </div>

            <div class="fd-tool-header__element">
                <button class="fd-button fd-button--tool-header" aria-label="Action 3" title="Action 3">
                    <i class="sap-icon--action-settings" role="presentation"></i>
                </button>
            </div>

            <div class="fd-tool-header__element">
                <button class="fd-button fd-button--tool-header" aria-label="Action 4" title="Action 4">
                    <i class="sap-icon--bell" role="presentation"></i>
                    <span class="fd-button__badge"></span>
                </button>
            </div>

            <div class="fd-tool-header__element fd-tool-header__element--hidden">
                <button class="fd-button fd-button--tool-header" aria-label="Action 5" title="Action 5">
                    <i class="sap-icon--overflow" role="presentation"></i>
                </button>
            </div>

            <div class="fd-tool-header__element fd-tool-header__element--hidden">
                <button class="fd-button fd-button--tool-header" aria-label="Action 6" title="Action 6">
                    <i class="sap-icon--microphone" role="presentation"></i>
                </button>
            </div>

            <div class="fd-tool-header__element">
                <span class="fd-tool-header__separator"></span>
            </div>

            <div class="fd-tool-header__element">
                <span
                    class="fd-avatar fd-avatar--40 fd-avatar--circle fd-avatar--thumbnail"

                    role="button"
                    tabindex="0"
                    title="John Doe"
                    aria-label="John Doe"
                    ></span>
                </div>
            </div>
        </div>
```

### Tablet

The <b>second title</b> is not displayed on tablets. The <b>separator</b> between the actions areas is hidden on tablet portrait orientation. The separator between the actions and the user avatar is present in all views.

```html
<h4>Tablet - Landscape</h4>
<div class="fd-tool-header fd-tool-header--menu">
    <div class="fd-tool-header__group fd-tool-header__group--menu">
        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Small Size Navigation" title="Small Size Navigation">
                <i class="sap-icon--menu2" role="presentation"></i>
            </button>
        </div>
    </div>

    <div class="fd-tool-header__group">
        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Back Navigation" title="Back Navigation">
                <i class="sap-icon--slim-arrow-left" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <img
            class="fd-tool-header__logo"
            src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png"
            srcset="
            //unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x,
            //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x,
            //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x
            "
            alt="SAP logo"
            aria-label="SAP logo"
            title="SAP logo"
            role="button"
            tabindex="0"
            />
        </div>

        <div class="fd-tool-header__element">
            <div class="fd-tool-header__product-name">Product Name</div>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <div class="fd-tool-header__second-title">Second Title</div>
        </div>
    </div>

    <div class="fd-tool-header__group fd-tool-header__group--center">
        <div class="fd-tool-header__element">
            <div class="fd-search-field">
                <span role="presentation" aria-hidden="true" class="fd-search-field__icon sap-icon--search"></span>
                <input placeholder="Search Anything" type="search" aria-label="Search" class="fd-search-field__input">

                <div class="fd-search-field__actions">
                    <div class="fd-search-field__action-container">
                        <button class="fd-button fd-button--nested" aria-label="Close">
                            <i class="sap-icon--decline" role="presentation"></i>
                        </button>
                    </div>
                    <div class="fd-search-field__action-container">
                        <button class="fd-button fd-button--nested" aria-label="Search" aria-disabled="true" tabindex="-1">
                            <i class="sap-icon--slim-arrow-right" role="presentation"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="fd-tool-header__group fd-tool-header__group--actions">
        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Search" title="Search">
                <i class="sap-icon--search" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 1" title="Action 1">
                <i class="sap-icon--source-code" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 2" title="Action 2">
                <i class="sap-icon--picture" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <span class="fd-tool-header__separator"></span>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 3" title="Action 3">
                <i class="sap-icon--action-settings" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 4" title="Action 4">
                <i class="sap-icon--bell" role="presentation"></i>
                <span class="fd-button__badge"></span>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Action 5" title="Action 5">
                <i class="sap-icon--overflow" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Action 6" title="Action 6">
                <i class="sap-icon--microphone" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <span class="fd-tool-header__separator"></span>
        </div>

        <div class="fd-tool-header__element">
            <span
                class="fd-avatar fd-avatar--40 fd-avatar--circle fd-avatar--thumbnail"

                role="button"
                tabindex="0"
                title="John Doe"
                aria-label="John Doe"
                ></span>
            </div>
        </div>
    </div>

    <h4>Tablet - Portrait</h4>
    <div class="fd-tool-header fd-tool-header--menu">
        <div class="fd-tool-header__group fd-tool-header__group--menu">
            <div class="fd-tool-header__element">
                <button class="fd-button fd-button--tool-header" aria-label="Small Size Navigation" title="Small Size Navigation">
                    <i class="sap-icon--menu2" role="presentation"></i>
                </button>
            </div>
        </div>

        <div class="fd-tool-header__group">
            <div class="fd-tool-header__element fd-tool-header__element--hidden">
                <button class="fd-button fd-button--tool-header" aria-label="Back Navigation" title="Back Navigation">
                    <i class="sap-icon--slim-arrow-left" role="presentation"></i>
                </button>
            </div>

            <div class="fd-tool-header__element">
                <img
                class="fd-tool-header__logo"
                src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png"
                srcset="
                //unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x,
                //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x,
                //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x
                "
                alt="SAP logo"
                aria-label="SAP logo"
                title="SAP logo"
                role="button"
                tabindex="0"
                />
            </div>

            <div class="fd-tool-header__element">
                <div class="fd-tool-header__product-name">Product Name</div>
            </div>

            <div class="fd-tool-header__element">
                <div class="fd-tool-header__second-title">Second Title</div>
            </div>
        </div>

        <div class="fd-tool-header__group fd-tool-header__group--center fd-tool-header__group--hidden">
            <div class="fd-tool-header__element fd-tool-header__element--hidden">
                <div class="fd-search-field">
                    <span role="presentation" aria-hidden="true" class="fd-search-field__icon sap-icon--search"></span>
                    <input placeholder="Search Anything" type="search" aria-label="Search" class="fd-search-field__input">

                    <div class="fd-search-field__actions">
                        <div class="fd-search-field__action-container">
                            <button class="fd-button fd-button--nested" aria-label="Close">
                                <i class="sap-icon--decline" role="presentation"></i>
                            </button>
                        </div>
                        <div class="fd-search-field__action-container">
                            <button class="fd-button fd-button--nested" aria-label="Search" aria-disabled="true" tabindex="-1">
                                <i class="sap-icon--slim-arrow-right" role="presentation"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="fd-tool-header__group fd-tool-header__group--actions">
            <div class="fd-tool-header__element">
                <button class="fd-button fd-button--tool-header" aria-label="Search" title="Search">
                    <i class="sap-icon--search" role="presentation"></i>
                </button>
            </div>

            <div class="fd-tool-header__element">
                <button class="fd-button fd-button--tool-header" aria-label="Action 1" title="Action 1">
                    <i class="sap-icon--source-code" role="presentation"></i>
                </button>
            </div>

            <div class="fd-tool-header__element">
                <button class="fd-button fd-button--tool-header" aria-label="Action 2" title="Action 2">
                    <i class="sap-icon--picture" role="presentation"></i>
                </button>
            </div>

            <div class="fd-tool-header__element fd-tool-header__element--hidden">
                <span class="fd-tool-header__separator"></span>
            </div>

            <div class="fd-tool-header__element">
                <button class="fd-button fd-button--tool-header" aria-label="Action 3" title="Action 3">
                    <i class="sap-icon--action-settings" role="presentation"></i>
                </button>
            </div>

            <div class="fd-tool-header__element">
                <button class="fd-button fd-button--tool-header" aria-label="Action 4" title="Action 4">
                    <i class="sap-icon--bell" role="presentation"></i>
                    <span class="fd-button__badge"></span>
                </button>
            </div>

            <div class="fd-tool-header__element fd-tool-header__element--hidden">
                <button class="fd-button fd-button--tool-header" aria-label="Action 5" title="Action 5">
                    <i class="sap-icon--overflow" role="presentation"></i>
                </button>
            </div>

            <div class="fd-tool-header__element fd-tool-header__element--hidden">
                <button class="fd-button fd-button--tool-header" aria-label="Action 6" title="Action 6">
                    <i class="sap-icon--microphone" role="presentation"></i>
                </button>
            </div>

            <div class="fd-tool-header__element">
                <span class="fd-tool-header__separator"></span>
            </div>

            <div class="fd-tool-header__element">
                <span
                    class="fd-avatar fd-avatar--40 fd-avatar--circle fd-avatar--thumbnail"

                    role="button"
                    tabindex="0"
                    title="John Doe"
                    aria-label="John Doe"
                    ></span>
                </div>

            </div>
        </div>

        <h4>Tablet - Portrait (Expanded Search)</h4>
        <div class="fd-tool-header fd-tool-header--menu">
            <div class="fd-tool-header__group fd-tool-header__group--menu">
                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--tool-header" aria-label="Small Size Navigation" title="Small Size Navigation">
                        <i class="sap-icon--menu2" role="presentation"></i>
                    </button>
                </div>
            </div>

            <div class="fd-tool-header__group">
                <div class="fd-tool-header__element fd-tool-header__element--hidden">
                    <button class="fd-button fd-button--tool-header" aria-label="Back Navigation" title="Back Navigation">
                        <i class="sap-icon--slim-arrow-left" role="presentation"></i>
                    </button>
                </div>

                <div class="fd-tool-header__element">
                    <img
                    class="fd-tool-header__logo"
                    src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png"
                    srcset="
                    //unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x,
                    //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x,
                    //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x
                    "
                    alt="SAP logo"
                    aria-label="SAP logo"
                    title="SAP logo"
                    role="button"
                    tabindex="0"
                    />
                </div>

                <div class="fd-tool-header__element fd-tool-header__element--hidden">
                    <div class="fd-tool-header__product-name">Product Name</div>
                </div>

                <div class="fd-tool-header__element fd-tool-header__element--hidden">
                    <div class="fd-tool-header__second-title">Second Title</div>
                </div>
            </div>

            <div class="fd-tool-header__group fd-tool-header__group--center">
                <div class="fd-tool-header__element">
                    <div class="fd-search-field">
                        <span role="presentation" aria-hidden="true" class="fd-search-field__icon sap-icon--search"></span>
                        <input placeholder="Search Anything" type="search" aria-label="Search" class="fd-search-field__input is-focus">

                        <div class="fd-search-field__actions">
                            <div class="fd-search-field__action-container">
                                <button class="fd-button fd-button--nested" aria-label="Close">
                                    <i class="sap-icon--decline" role="presentation"></i>
                                </button>
                            </div>
                            <div class="fd-search-field__action-container">
                                <button class="fd-button fd-button--nested" aria-label="Search" aria-disabled="true" tabindex="-1">
                                    <i class="sap-icon--slim-arrow-right" role="presentation"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="fd-tool-header__group fd-tool-header__group--actions">
                <div class="fd-tool-header__element fd-tool-header__element--hidden">
                    <button class="fd-button fd-button--tool-header" aria-label="Search" title="Search">
                        <i class="sap-icon--search" role="presentation"></i>
                    </button>
                </div>

                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--tool-header" aria-label="Action 1" title="Action 1">
                        <i class="sap-icon--source-code" role="presentation"></i>
                    </button>
                </div>

                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--tool-header" aria-label="Action 2" title="Action 2">
                        <i class="sap-icon--picture" role="presentation"></i>
                    </button>
                </div>

                <div class="fd-tool-header__elemen fd-tool-header__element--hiddent">
                    <span class="fd-tool-header__separator"></span>
                </div>

                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--tool-header" aria-label="Action 3" title="Action 3">
                        <i class="sap-icon--action-settings" role="presentation"></i>
                    </button>
                </div>

                <div class="fd-tool-header__element">
                    <button class="fd-button fd-button--tool-header" aria-label="Action 4" title="Action 4">
                        <i class="sap-icon--bell" role="presentation"></i>
                        <span class="fd-button__badge"></span>
                    </button>
                </div>

                <div class="fd-tool-header__element fd-tool-header__element--hidden">
                    <button class="fd-button fd-button--tool-header" aria-label="Action 5" title="Action 5">
                        <i class="sap-icon--overflow" role="presentation"></i>
                    </button>
                </div>

                <div class="fd-tool-header__element fd-tool-header__element--hidden">
                    <button class="fd-button fd-button--tool-header" aria-label="Action 6" title="Action 6">
                        <i class="sap-icon--microphone" role="presentation"></i>
                    </button>
                </div>

                <div class="fd-tool-header__element">
                    <span class="fd-tool-header__separator"></span>
                </div>

                <div class="fd-tool-header__element">
                    <span
                        class="fd-avatar fd-avatar--40 fd-avatar--circle fd-avatar--thumbnail"

                        role="button"
                        tabindex="0"
                        title="John Doe"
                        aria-label="John Doe"
                        ></span>
                    </div>
                </div>
            </div>
```

### Mobile

Phone specification depicts only deltas from the tablet specification. It is possible that actions will overflow on phones. In such cases, the overflowing actions are displayed in a dropdown menu. The <b>Product Name</b>, <b>Second Title</b>, and <b>Separator</b> between the actions areas are not displayed on phones.

```html
<h4>Phone</h4>
<div class="fd-tool-header fd-tool-header--menu">
    <div class="fd-tool-header__group fd-tool-header__group--menu">
        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Small Size Navigation" title="Small Size Navigation">
                <i class="sap-icon--menu2" role="presentation"></i>
            </button>
        </div>
    </div>

    <div class="fd-tool-header__group">
        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Back navigation" title="Back navigation">
                <i class="sap-icon--slim-arrow-left" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <img
            class="fd-tool-header__logo"
            src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png"
            srcset="
            //unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x,
            //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x,
            //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x
            "
            alt="SAP logo"
            aria-label="SAP logo"
            title="SAP logo"
            role="button"
            tabindex="0"
            />
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <div class="fd-tool-header__product-name">Product Name</div>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <div class="fd-tool-header__second-title">Second Title</div>
        </div>
    </div>

    <div class="fd-tool-header__group fd-tool-header__group--center fd-tool-header__group--hidden">
        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <div class="fd-search-field">
                <span role="presentation" aria-hidden="true" class="fd-search-field__icon sap-icon--search"></span>
                <input placeholder="Search Anything" type="search" aria-label="Search" class="fd-search-field__input">

                <div class="fd-search-field__actions">
                    <div class="fd-search-field__action-container">
                        <button class="fd-button fd-button--nested" aria-label="Close">
                            <i class="sap-icon--decline" role="presentation"></i>
                        </button>
                    </div>
                    <div class="fd-search-field__action-container">
                        <button class="fd-button fd-button--nested" aria-label="Search" aria-disabled="true" tabindex="-1">
                            <i class="sap-icon--slim-arrow-right" role="presentation"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="fd-tool-header__group fd-tool-header__group--actions">
        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Search" title="Search">
                <i class="sap-icon--search" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Action 1" title="Action 1">
                <i class="sap-icon--source-code" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Action 2" title="Action 2">
                <i class="sap-icon--picture" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <span class="fd-tool-header__separator"></span>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Action 3" title="Action 3">
                <i class="sap-icon--action-settings" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 4" title="Action 4">
                <i class="sap-icon--bell" role="presentation"></i>
                <span class="fd-button__badge"></span>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <button class="fd-button fd-button--tool-header" aria-label="Action 5" title="Action 5">
                <i class="sap-icon--overflow" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element fd-tool-header__element--hidden">
            <button class="fd-button fd-button--tool-header" aria-label="Action 6" title="Action 6">
                <i class="sap-icon--microphone" role="presentation"></i>
            </button>
        </div>

        <div class="fd-tool-header__element">
            <span class="fd-tool-header__separator"></span>
        </div>

        <div class="fd-tool-header__element">
            <span
                class="fd-avatar fd-avatar--40 fd-avatar--circle fd-avatar--thumbnail"

                role="button"
                tabindex="0"
                title="John Doe"
                aria-label="John Doe"
                ></span>
            </div>
        </div>
    </div>

    <h4>Phone (Expanded Search)</h4>
    <div class="fd-tool-header fd-tool-header--menu">
        <div class="fd-tool-header__group fd-tool-header__group--menu fd-tool-header__group--hidden">
            <div class="fd-tool-header__element fd-tool-header__element--hidden">
                <button class="fd-button fd-button--tool-header" aria-label="Small Size Navigation" title="Small Size Navigation">
                    <i class="sap-icon--menu2" role="presentation"></i>
                </button>
            </div>
        </div>

        <div class="fd-tool-header__group">
            <div class="fd-tool-header__element">
                <button class="fd-button fd-button--tool-header" aria-label="Back Navigation" title="Back Navigation">
                    <i class="sap-icon--slim-arrow-left" role="presentation"></i>
                </button>
            </div>

            <div class="fd-tool-header__element fd-tool-header__element--hidden">
                <img
                class="fd-tool-header__logo"
                src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png"
                srcset="
                //unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x,
                //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x,
                //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x
                "
                alt="SAP logo"
                aria-label="SAP logo"
                title="SAP logo"
                role="button"
                tabindex="0"
                />
            </div>

            <div class="fd-tool-header__element fd-tool-header__element--hidden">
                <div class="fd-tool-header__product-name">Product Name</div>
            </div>

            <div class="fd-tool-header__elemen fd-tool-header__element--hidden">
                <div class="fd-tool-header__second-title">Second Title</div>
            </div>
        </div>

        <div class="fd-tool-header__group fd-tool-header__group--center">
            <div class="fd-tool-header__element">
                <div class="fd-search-field">
                    <span role="presentation" aria-hidden="true" class="fd-search-field__icon sap-icon--search"></span>
                    <input placeholder="Search Anything" type="search" aria-label="Search" class="fd-search-field__input is-focus">

                    <div class="fd-search-field__actions">
                        <div class="fd-search-field__action-container">
                            <button class="fd-button fd-button--nested" aria-label="Close">
                                <i class="sap-icon--decline" role="presentation"></i>
                            </button>
                        </div>
                        <div class="fd-search-field__action-container">
                            <button class="fd-button fd-button--nested" aria-label="Search" aria-disabled="true" tabindex="-1">
                                <i class="sap-icon--slim-arrow-right" role="presentation"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="fd-tool-header__group fd-tool-header__group--actions">
            <div class="fd-tool-header__element fd-tool-header__element--hidden">
                <button class="fd-button fd-button--tool-header" aria-label="Search" title="Search">
                    <i class="sap-icon--search" role="presentation"></i>
                </button>
            </div>

            <div class="fd-tool-header__element fd-tool-header__element--hidden">
                <button class="fd-button fd-button--tool-header" aria-label="Action 1" title="Action 1">
                    <i class="sap-icon--source-code" role="presentation"></i>
                </button>
            </div>

            <div class="fd-tool-header__element fd-tool-header__element--hidden">
                <button class="fd-button fd-button--tool-header" aria-label="Action 2" title="Action 2">
                    <i class="sap-icon--picture" role="presentation"></i>
                </button>
            </div>

            <div class="fd-tool-header__element fd-tool-header__element--hidden">
                <span class="fd-tool-header__separator"></span>
            </div>

            <div class="fd-tool-header__element fd-tool-header__element--hidden">
                <button class="fd-button fd-button--tool-header" aria-label="Action 3" title="Action 3">
                    <i class="sap-icon--action-settings" role="presentation"></i>
                </button>
            </div>

            <div class="fd-tool-header__element fd-tool-header__element--hidden">
                <button class="fd-button fd-button--tool-header" aria-label="Action 4" title="Action 4">
                    <i class="sap-icon--bell" role="presentation"></i>
                    <span class="fd-button__badge"></span>
                </button>
            </div>

            <div class="fd-tool-header__element fd-tool-header__element--hidden">
                <button class="fd-button fd-button--tool-header" aria-label="Action 5" title="Action 5">
                    <i class="sap-icon--overflow" role="presentation"></i>
                </button>
            </div>

            <div class="fd-tool-header__element">
                <button class="fd-button fd-button--tool-header" aria-label="Action 6" title="Action 6">
                    <i class="sap-icon--microphone" role="presentation"></i>
                </button>
            </div>

            <div class="fd-tool-header__element fd-tool-header__element--hidden">
                <span class="fd-tool-header__separator"></span>
            </div>

            <div class="fd-tool-header__element fd-tool-header__element--hidden">
                <span
                    class="fd-avatar fd-avatar--40 fd-avatar--circle fd-avatar--thumbnail"

                    role="button"
                    tabindex="0"
                    title="John Doe"
                    aria-label="John Doe"
                    ></span>
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

This documentation was automatically generated from: `packages/styles/stories/BTP/tool-header/tool-header.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
