---
component: fd-list
title: Components/List/Byline
category: Components
selector: fd-list
cssFile: list.css
sourcePath: packages/styles/stories/Components/List/list/byline/byline-list.stories.js
tags: []
dependencies: []
relatedComponents: []
stability: stable
---

# Components/List/Byline

Byline lists allow users to extend standard list items with additional content. To display a byline list, add the \

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/list.css" rel="stylesheet">

```

## Basic Usage

```html
<h4>Standard size</h4>
<ul class="fd-list fd-list--byline" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title">List Item Title</div>
            <div class="fd-list__byline">Byline (description)</div>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title">List item with no byline</div>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
            ></span>
            <div class="fd-list__content">
                <div class="fd-list__title">List item with 2-column byline</div>
                <div class="fd-list__byline fd-list__byline--2-col">
                    <div class="fd-list__byline-left">First text item in byline (standard text)</div>
                    <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
                </div>
            </div>
        </li>
        <li role="listitem" tabindex="0" class="fd-list__item">
            <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
            <div class="fd-list__content">
                <div class="fd-list__title">List item with no byline</div>
            </div>
        </li>
        <li role="listitem" tabindex="0" class="fd-list__item">
            <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
                ></span>
                <div class="fd-list__content">
                    <div class="fd-list__title">List item with 2-column byline</div>
                    <div class="fd-list__byline fd-list__byline--2-col">
                        <div class="fd-list__byline-left">First text item in byline (standard text)</div>
                        <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
                    </div>
                </div>
            </li>
            <li role="listitem" tabindex="0" class="fd-list__item">
                <div class="fd-list__content">
                    <div class="fd-list__title">Text-only list item</div>
                    <div class="fd-list__byline">Byline (description)</div>
                </div>
            </li>
        </ul>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-list--byline` | The default byline list dislays list items in the standard size, which is ideal for mobile |
| `fd-list--navigation` | Byline list items can contain navigation links |
| `fd-list--navigation-indication` | Style variant |
| `fd-list--no-border` | Style variant |
| `fd-list--selection` | Byline list items can contain navigation links |
| `fd-list--unread-indicator` | Style variant |
| `fd-list--wrap` | By default, long title and byline text is truncated with an ellipsis |

## States

| Class | Description |
|-------|-------------|
| `is-active` | Active state |
| `is-focus` | Focus state |
| `is-hover` | Hover state |
| `is-navigated` | Navigated state |
| `is-selected` | Selected state |

## BEM Elements

This component uses the following BEM elements:

- `fd-list__button`
- `fd-list__byline`
- `fd-list__byline--`
- `fd-list__byline--wrap`
- `fd-list__byline-left`
- `fd-list__byline-right`
- `fd-list__byline-right--informative`
- `fd-list__byline-right--positive`
- `fd-list__content`
- `fd-list__form-item`
- `fd-list__group-header`
- `fd-list__item`
- `fd-list__item--interractive`
- `fd-list__item--link`
- `fd-list__item--unread`
- `fd-list__item--wrap`
- `fd-list__item-counter`
- `fd-list__link`
- `fd-list__link--more`
- `fd-list__link--navigation-indicator`
- `fd-list__notification`
- `fd-list__thumbnail`
- `fd-list__title`
- `fd-list__title--wrap`

## Examples

### Default

The default byline list dislays list items in the standard size, which is ideal for mobile. To display the byline list in compact mode (for desktop), add the \

```html
<h4>Standard size</h4>
<ul class="fd-list fd-list--byline" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title">List Item Title</div>
            <div class="fd-list__byline">Byline (description)</div>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title">List item with no byline</div>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
            ></span>
            <div class="fd-list__content">
                <div class="fd-list__title">List item with 2-column byline</div>
                <div class="fd-list__byline fd-list__byline--2-col">
                    <div class="fd-list__byline-left">First text item in byline (standard text)</div>
                    <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
                </div>
            </div>
        </li>
        <li role="listitem" tabindex="0" class="fd-list__item">
            <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
            <div class="fd-list__content">
                <div class="fd-list__title">List item with no byline</div>
            </div>
        </li>
        <li role="listitem" tabindex="0" class="fd-list__item">
            <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
                ></span>
                <div class="fd-list__content">
                    <div class="fd-list__title">List item with 2-column byline</div>
                    <div class="fd-list__byline fd-list__byline--2-col">
                        <div class="fd-list__byline-left">First text item in byline (standard text)</div>
                        <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
                    </div>
                </div>
            </li>
            <li role="listitem" tabindex="0" class="fd-list__item">
                <div class="fd-list__content">
                    <div class="fd-list__title">Text-only list item</div>
                    <div class="fd-list__byline">Byline (description)</div>
                </div>
            </li>
        </ul>
```

### Attachment

The Attachment List shares the same specification as the Standard List with Byline. The only difference is that if two text items are set within the Byline row, the text aligned to the right is always standard text (i.e. not semantic text)

```html
<h4>Standard size</h4>
<ul class="fd-list fd-list--byline" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--attachment-photo"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title">Title</div>
            <div class="fd-list__byline">Byline (description)</div>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--pdf-attachment"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title">List item with no byline</div>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--attachment-text-file"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title">List item with 2-column byline</div>
            <div class="fd-list__byline fd-list__byline--2-col">
                <div class="fd-list__byline-left">First text item in byline (standard text)</div>
                <div class="fd-list__byline-right">Second text item in byline (standard text)</div>
            </div>
        </div>
    </li>
</ul>
```

### Selection with navigation

Byline list items can contain navigation links. To add navigation, add the \

```html
<ul class="fd-list fd-list--byline fd-list--navigation" role="list">
    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link">
        <a tabindex="0" class="fd-list__link" href="#">
            <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
            <div class="fd-list__content">
                <div class="fd-list__title">Title</div>
                <div class="fd-list__byline">Byline (description)</div>
            </div>
        </a>
    </li>
    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link is-selected">
        <a tabindex="0" class="fd-list__link" href="#">
            <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
            <div class="fd-list__content">
                <div class="fd-list__title">List item with no byline</div>
            </div>
        </a>
    </li>
    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link">
        <a tabindex="0" class="fd-list__link" href="#">
            <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
                ></span>
                <div class="fd-list__content">
                    <div class="fd-list__title">List item with 2-column byline</div>
                    <div class="fd-list__byline fd-list__byline--2-col">
                        <div class="fd-list__byline-left">First text item in byline (standard text)</div>
                        <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
                    </div>
                </div>
            </a>
        </li>
        <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link">
            <a tabindex="0" class="fd-list__link" href="#">
                <div class="fd-list__content">
                    <div class="fd-list__title">Text-only list item</div>
                    <div class="fd-list__byline">Byline (description)</div>
                </div>
            </a>
        </li>
    </ul>
```

### Buttons

```html
<ul class="fd-list fd-list--byline" role="list">
    <li role="listitem" class="fd-list__item">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <span class="fd-list__title fd-list__title--wrap">List item 1</span>
            <span class="fd-list__byline">Byline (description) List item 1 </span>
        </div>
        <button class="fd-button fd-button--transparent fd-list__button" aria-label="Edit>
            <i class="sap-icon--edit"></i>
        </button>
        <button class="fd-button fd-button--transparent fd-list__button" aria-label="Decline">
            <i class="sap-icon--decline"></i>
        </button>
    </li>
    <li role="listitem" class="fd-list__item">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <span class="fd-list__title fd-list__title--wrap"
                >Title that wraps. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat, duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</span
                >
                <span class="fd-list__byline fd-list__byline--wrap"
                    >Byline that wraps. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit
                    neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin elementum sapien vel enim facilisis, at faucibus
                    nibh ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas</span
                    >
                </div>
                <button class="fd-button fd-button--transparent fd-list__button" aria-label="Edit">
                    <i class="sap-icon--edit"></i>
                </button>
                <button class="fd-button fd-button--transparent fd-list__button" aria-label="Decline">
                    <i class="sap-icon--decline"></i>
                </button>
            </li>
        </ul>
```

### Interractive

The \

```html
<ul class="fd-list fd-list--byline" role="list">
    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--interractive">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title">Title</div>
            <div class="fd-list__byline">Byline</div>
        </div>
    </li>
    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--interractive is-hover">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title">Hover State</div>
            <div class="fd-list__byline">Byline</div>
        </div>
    </li>
    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--interractive is-active">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title">Active State</div>
            <div class="fd-list__byline">Byline</div>
        </div>
    </li>
    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--interractive is-selected">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title">Selected State</div>
            <div class="fd-list__byline">Byline</div>
        </div>
    </li>
    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--interractive is-selected is-hover">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title">Selected and Hover States</div>
            <div class="fd-list__byline">Byline</div>
        </div>
    </li>
    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--interractive is-focus">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title">Focus States</div>
            <div class="fd-list__byline">Byline</div>
        </div>
    </li>
    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--interractive is-selected is-focus">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title">Selected and Focus States</div>
            <div class="fd-list__byline">Byline</div>
        </div>
    </li>
</ul>
```

### Navigation indicators

If only some of the list items are navigable, you should indicate them with an arrow icon. To display navigation indicators, add the \

```html
<ul class="fd-list fd-list--byline fd-list--navigation fd-list--navigation-indication" role="list">
    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link ">
        <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
            <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
            <div class="fd-list__content">
                <div class="fd-list__title fd-list__title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</div>
                <div class="fd-list__byline fd-list__byline--wrap">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin elementum sapien vel enim facilisis, at faucibus nibh ornare. Pellentesque habitant morbi tristique senectus et netus</div>
            </div>
        </a>
    </li>
    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link is-selected">
        <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator is-navigated" href="#">
            <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
            <div class="fd-list__content">
                <div class="fd-list__title">List item with no byline</div>
            </div>
        </a>
    </li>
    <li role="listitem" tabindex="-1" class="fd-list__item">
        <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
            ></span>
            <div class="fd-list__content">
                <div class="fd-list__title">List item with 2-column byline</div>
                <div class="fd-list__byline fd-list__byline--2-col">
                    <div class="fd-list__byline-left">First text item in byline (standard text)</div>
                    <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
                </div>
            </div>
        </li>
    </ul>
```

### Borderless

To display a borderless byline list, add the \

```html
<ul class="fd-list fd-list--no-border fd-list--byline" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title">Title</div>
            <div class="fd-list__byline">Byline (description)</div>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title">list item with no byline</div>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
            style="background-image: url('assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg'); background-size:cover;"></span>
            <div class="fd-list__content">
                <div class="fd-list__title">List item with 2-column byline</div>
                <div class="fd-list__byline fd-list__byline--2-col">
                    <div class="fd-list__byline-left">First text item in byline (standard text)</div>
                    <div class="fd-list__byline-right fd-list__byline-right--positive">Second text item in byline (positive)</div>
                </div>
            </div>
        </li>
        <li role="listitem" tabindex="0" class="fd-list__item">
            <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--world"></i></span>
            <div class="fd-list__content">
                <div class="fd-list__title fd-list__title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</div>
                <div class="fd-list__byline fd-list__byline--2-col">
                    <div class="fd-list__byline-left">First text item in byline (standard text)</div>
                    <div class="fd-list__byline-right fd-list__byline-right--informative">Second text item in byline (information)</div>
                </div>
            </div>
        </li>
    </ul>
```

### Selection

Byline list items can display checkboxes that users can select from. To display byline list items with selection, add the \

```html
<ul class="fd-list fd-list--selection fd-list--byline" role="listbox" aria-labelledby="O09lk9">
    <li role="option" tabindex="0" class="fd-list__item fd-list__item--wrap is-selected">
        <div class="fd-form-item fd-list__form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez6111Z" checked aria-labelledby="O09lk1">
            <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6111Z">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
            </label>
        </div>
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <span class="fd-list__title" id="O09lk1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, duis aute irure dolor in reprehenderit</span>
            <span class="fd-list__byline">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin elementum sapien vel enim facilisis</span>
        </div>
    </li>
    <li role="option" tabindex="0" class="fd-list__item">
        <div class="fd-form-item fd-list__form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez6112X" aria-labelledby="O09lk2">
            <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6112X">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
            </label>
        </div>
        <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
            ></span>
            <div class="fd-list__content">
                <div class="fd-list__title fd-list__title--wrap" id="O09lk2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</div>
                <div class="fd-list__byline fd-list__byline--wrap fd-list__byline--2-col">
                    <div class="fd-list__byline-left">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, excepteur sint occaecat cupidatat non proident</div>
                    <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
                </div>
            </div>
        </li>
        <li role="option" tabindex="0" class="fd-list__item">
            <div class="fd-form-item fd-list__form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez6113C" aria-labelledby="O09lk3">
                <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6113C">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                </label>
            </div>
            <div class="fd-list__content">
                <div class="fd-list__title" id="O09lk3">Text-only list item</div>
                <div class="fd-list__byline">Byline (description)</div>
            </div>
        </li>
    </ul>
```

### Selection with navigation

To display byline list items with selection and navigation, add these following modifier classes to the main element:

- \

```html
<ul class="fd-list fd-list--selection fd-list--byline fd-list--navigation fd-list--navigation-indication" role="listbox"
    aria-labelledby="Ki81L1">
    <li role="option" tabindex="0" class="fd-list__item">
        <div class="fd-form-item fd-list__form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez6118N" aria-labelledby="Ki81L2">
            <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6118N">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
            </label>
        </div>
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <span class="fd-list__title" id="Ki81L2">Title</span>
            <span class="fd-list__byline">Byline (description)</span>
        </div>
    </li>
    <li role="option" tabindex="-1" class="fd-list__item fd-list__item--link is-selected" aria-selected="true">
        <div class="fd-form-item fd-list__form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez6119N" checked aria-labelledby="Ki81L3">
            <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez6119N">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
            </label>
        </div>
        <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator is-navigated" href="#">
            <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
                ></span>
                <div class="fd-list__content">
                    <div class="fd-list__title" id="Ki81L3">List item with 2-column byline</div>
                    <div class="fd-list__byline fd-list__byline--2-col">
                        <div class="fd-list__byline-left">First text item in byline (standard text)</div>
                        <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
                    </div>
                </div>
            </a>
        </li>
        <li role="option" tabindex="-1" class="fd-list__item fd-list__item--link">
            <div class="fd-form-item fd-list__form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez61110N" aria-labelledby="Ki81L4">
                <label tabindex="-1" class="fd-checkbox__label" for="Ai4ez61110N">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                </label>
            </div>
            <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                <div class="fd-list__content">
                    <div class="fd-list__title" id="Ki81L4">Text-only list item</div>
                    <div class="fd-list__byline">Byline (description)</div>
                </div>
            </a>
        </li>
    </ul>
```

### Byline List with Counter

```html
<ul class="fd-list fd-list--byline" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title fd-list__title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</div>
            <div class="fd-list__byline fd-list__byline--wrap">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin elementum sapien vel enim facilisis, at faucibus nibh ornare. Pellentesque habitant morbi tristique senectus et netus</div>
        </div>
        <span class="fd-list__item-counter">123</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title">List item with no byline</div>
        </div>
        <span class="fd-list__item-counter">456</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
            style="background-image: url('assets/images/backgrounds/Godafoss_waterfall_in_northern_Iceland.jpg'); background-size:cover;"></span>
            <div class="fd-list__content">
                <div class="fd-list__title">List item with 2-column byline</div>
                <div class="fd-list__byline fd-list__byline--2-col">
                    <div class="fd-list__byline-left">First text item in byline (standard text)</div>
                    <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
                </div>
            </div>
            <span class="fd-list__item-counter">12345</span>
        </li>
        <li role="listitem" tabindex="0" class="fd-list__item">
            <div class="fd-list__content">
                <div class="fd-list__title">Text-only list item</div>
                <div class="fd-list__byline">Byline (description)</div>
            </div>
            <span class="fd-list__item-counter">67890</span>
        </li>
    </ul>
```

### List with long Title and Byline

By default, long title and byline text is truncated with an ellipsis. Wrapping can be enabled at three levels:

**List level** — add \

```html
<p class="fd-form-label">Default — truncation</p>
<ul class="fd-list fd-list--byline" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title">Annual Budget Review for Q3 and Q4 — please review the attached documents and provide your feedback before the end of the fiscal quarter to ensure timely processing.</div>
            <div class="fd-list__byline">Finance · Updated 2 hours ago by Michael Thompson, Senior Analyst, Global Finance Division, Central Europe · Reviewed by Anna Schmidt, Finance Controller · Pending approval from Regional CFO</div>
        </li>
    </ul>
</div>

<p class="fd-form-label">List level — <code>fd-list--wrap</code></p>
<ul class="fd-list fd-list--byline fd-list--wrap" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title">All titles wrap at list level, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</div>
            <div class="fd-list__byline">All bylines wrap too, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</div>
        </li>
    </ul>
</div>

<p class="fd-form-label">Item level — <code>fd-list__item--wrap</code> (collapsed and expanded states)</p>
<!-- The fd-list__link--more element is placed outside fd-list__title so it stays
visible even when the title truncates. -->
<ul class="fd-list fd-list--byline" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title">Collapsed — title truncated, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>
            <a href="#" class="fd-link fd-list__link--more" aria-expanded="false" tabindex="0"><span class="fd-link__content">More</span></a>
            <div class="fd-list__byline">Byline truncated, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
        </li>
        <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--wrap">
            <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
            <div class="fd-list__content">
                <div class="fd-list__title">Expanded — fd-list__item--wrap applied, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. <a href="#" class="fd-link fd-list__link--more" aria-expanded="true" tabindex="0"><span class="fd-link__content">Less</span></a></div>
                <div class="fd-list__byline">Byline wraps too, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
            </div>
        </li>
    </ul>
</div>

<div>
    <p class="fd-form-label">Element level — <code>fd-list__title--wrap</code> / <code>fd-list__byline--wrap</code></p>
    <ul class="fd-list fd-list--byline" role="list">
        <li role="listitem" tabindex="0" class="fd-list__item">
            <span class="fd-image--s fd-list__thumbnail" role="img" aria-label="Godafoss waterfall in northern Iceland"
                ></span>
                <div class="fd-list__content">
                    <div class="fd-list__title fd-list__title--wrap">Only the title wraps here, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</div>
                    <div class="fd-list__byline fd-list__byline--2-col fd-list__byline--wrap">
                        <div class="fd-list__byline-left">First text item in byline, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        <div class="fd-list__byline-right">Second text item (semantic)</div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
```

### With Group Header

```html
<h4>Standard size</h4>
<ul class="fd-list fd-list--byline" role="list">
    <li role="listitem" class="fd-list__group-header">
        <span class="fd-list__title">Group header 1</span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title">List Item Title</div>
            <div class="fd-list__byline">Byline (description)</div>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
        <div class="fd-list__content">
            <div class="fd-list__title">List item with no byline</div>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item">
        <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
            ></span>
            <div class="fd-list__content">
                <div class="fd-list__title">List item with 2-column byline</div>
                <div class="fd-list__byline fd-list__byline--2-col">
                    <div class="fd-list__byline-left">First text item in byline (standard text)</div>
                    <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
                </div>
            </div>
        </li>
        <li role="listitem" class="fd-list__group-header">
            <span class="fd-list__title">Group header 2</span>
        </li>
        <li role="listitem" tabindex="0" class="fd-list__item">
            <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
            <div class="fd-list__content">
                <div class="fd-list__title">List item with no byline</div>
            </div>
        </li>
        <li role="listitem" tabindex="0" class="fd-list__item">
            <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
                ></span>
                <div class="fd-list__content">
                    <div class="fd-list__title">List item with 2-column byline</div>
                    <div class="fd-list__byline fd-list__byline--2-col">
                        <div class="fd-list__byline-left">First text item in byline (standard text)</div>
                        <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
                    </div>
                </div>
            </li>
            <li role="listitem" tabindex="0" class="fd-list__item">
                <div class="fd-list__content">
                    <div class="fd-list__title">Text-only list item</div>
                    <div class="fd-list__byline">Byline (description)</div>
                </div>
            </li>
        </ul>
```

### UnreadNotification

<span class="fd-info-label fd-info-label--accent-color-1"><span class="fd-info-label__text">non-fiori 3</span></span><br>

```html
<h4 id="O09lk8">Standard</h4>
<ul class="fd-list fd-list--byline fd-list--unread-indicator" role="listbox" aria-labelledby="O09lk9">
    <li role="option" tabindex="0" class="fd-list__item fd-list__item--unread is-selected">
        <span class="sap-icon--circle-task-2 fd-list__notification"></span>
        <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <span class="fd-list__title" id="O09lk1">Title</span>
            <span class="fd-list__byline">Byline (description)</span>
        </div>
    </li>
    <li role="option" tabindex="0" class="fd-list__item fd-list__item--unread">
        <span class="sap-icon--circle-task-2 fd-list__notification"></span>
        <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
            ></span>
            <div class="fd-list__content">
                <div class="fd-list__title" id="O09lk2">List item with 2-column byline</div>
                <div class="fd-list__byline fd-list__byline--2-col">
                    <div class="fd-list__byline-left">First text item in byline (standard text)</div>
                    <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
                </div>
            </div>
        </li>
        <li role="option" tabindex="0" class="fd-list__item">
            <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
                ></span>
                <div class="fd-list__content">
                    <div class="fd-list__title" id="O09lk2sdf">List item with 2-column byline</div>
                    <div class="fd-list__byline fd-list__byline--2-col">
                        <div class="fd-list__byline-left">First text item in byline (standard text)</div>
                        <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
                    </div>
                </div>
            </li>
            <li role="option" tabindex="0" class="fd-list__item fd-list__item--unread">
                <span class="sap-icon--circle-task-2 fd-list__notification"></span>
                <div class="fd-list__content">
                    <div class="fd-list__title" id="O09lk3">Text-only list item</div>
                    <div class="fd-list__byline">Byline (description)</div>
                </div>
            </li>
        </ul>

        <h4 id="O09lk9">Navigation</h4>
        <ul class="fd-list fd-list--byline fd-list--navigation fd-list--unread-indicator" role="list">
            <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link fd-list__item--unread">
                <span class="sap-icon--circle-task-2 fd-list__notification"></span>
                <a tabindex="0" class="fd-list__link" href="#">
                    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
                    <div class="fd-list__content">
                        <div class="fd-list__title">Title</div>
                        <div class="fd-list__byline">Byline (description)</div>
                    </div>
                </a>
            </li>
            <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link fd-list__item--unread is-selected">
                <span class="sap-icon--circle-task-2 fd-list__notification"></span>
                <a tabindex="0" class="fd-list__link" href="#">
                    <span class="fd-list__thumbnail"><i role="presentation" class="sap-icon--employee"></i></span>
                    <div class="fd-list__content">
                        <div class="fd-list__title">List item with no byline</div>
                    </div>
                </a>
            </li>
            <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link">
                <a tabindex="0" class="fd-list__link" href="#">
                    <span class="fd-image--s fd-list__thumbnail" aria-label="Godafoss waterfall in northern Iceland"
                        ></span>
                        <div class="fd-list__content">
                            <div class="fd-list__title">List item with 2-column byline</div>
                            <div class="fd-list__byline fd-list__byline--2-col">
                                <div class="fd-list__byline-left">First text item in byline (standard text)</div>
                                <div class="fd-list__byline-right">Second text item in byline (can be semantic)</div>
                            </div>
                        </div>
                    </a>
                </li>
                <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link">
                    <a tabindex="0" class="fd-list__link" href="#">
                        <div class="fd-list__content">
                            <div class="fd-list__title">Text-only list item</div>
                            <div class="fd-list__byline">Byline (description)</div>
                        </div>
                    </a>
                </li>
            </ul>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/List/list/byline/byline-list.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
