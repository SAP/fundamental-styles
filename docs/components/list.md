---
component: fd-list
title: Components/Object List
category: Components
selector: fd-list
cssFile: list.css
sourcePath: packages/styles/stories/Components/object-list/object-list.stories.js
tags: []
dependencies: ["avatar","icon","list","object-identifier","object-list","object-marker","object-number","object-status"]
relatedComponents: ["avatar","icon","list","object-identifier","object-list","object-marker","object-number","object-status"]
stability: stable
generatedAt: 2026-05-28T16:47:21.094Z
---

# Components/Object List

An object list is a type of list that consists of object list items, where each item provides a quick
overview of an object. Object list items should only contain essential information for the user to identify
what objects to prioritize. Avoid long descriptive texts as the text space is limited and will truncate.

**Object list items can display the following elements:**

- Title of the object
- Avatar
- Object display components such as **Object Identifier**, **Object Number**, **Object Attribute**, **Object Marker** and **Object Status**
- Introductory text indicating the origin of the object, such as _Forwarded by..._ or _On Behalf of..._
- Icon that identifies the object
- The first status line can contain indicator icons for locked items, favorites, or items that have been
  flagged for follow-up

##Usage
**Use the object list if:**

- You want to display brief details to the user.

**Do not use the object list if:**

- You want to display detailed information to the user.
- You want to trigger more than one event, as each object list item should contain one link.

##Modifiers

The object list item can display several object display components with semantic statuses.
Below are examples of how to add semantic statuses to the components:

| **Status** | <span style="margin-left: 2rem;">**Object Number**</span> | <span style="margin-left: 2rem;">**Object Status**</span> |
| :---- | :-------------- | :-------------- |
| Positive| <code style="margin-left: 2rem;">fd-object-number--positive</code> | <code style="margin-left: 2rem;">fd-object-status--positive</code> |
| Negative| <code style="margin-left: 2rem;">fd-object-number--negative</code> | <code style="margin-left: 2rem;">fd-object-status--negative</code> |
| Critical| <code style="margin-left: 2rem;">fd-object-number--critical</code> | <code style="margin-left: 2rem;">fd-object-status--critical</code> |
| Informative| <code style="margin-left: 2rem;">fd-object-number--informative</code> | <code style="margin-left: 2rem;">fd-object-status--informative</code> |


## Structure
**Object list consists of the following elements:**

  - \

## Usage Guidelines

**Use the object list if:**

- You want to display brief details to the user.

## When Not To Use

- You want to display detailed information to the user.
- You want to trigger more than one event, as each object list item should contain one link.

## Dependencies

This component depends on the following CSS files:

- `avatar.css`
- `icon.css`
- `list.css`
- `object-identifier.css`
- `object-list.css`
- `object-marker.css`
- `object-number.css`
- `object-status.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/list.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/avatar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/list.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/object-identifier.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/object-list.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/object-marker.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/object-number.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/object-status.css" rel="stylesheet">
```

## Basic Usage

```html
<h4 id="objectListItemHeader">Object List Item</h4>
<ul class="fd-list fd-object-list" role="list" aria-labelledby="objectListItemHeader">
    <li role="listitem" tabindex="0" class="fd-list__item fd-object-list__item">
        <div class="fd-object-list__container">
            <div class="fd-object-list__intro">
                Optional inline text very very very long
            </div>
            <div class="fd-object-list__header">
                <span class="fd-avatar fd-avatar--s"
                    >
                </span>
                <div class="fd-object-list__header-left">
                    <div class="fd-object-identifier fd-object-list__object-identifier">
                        <p class="fd-object-identifier__title">
                            Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
                        </p>
                    </div>
                </div>
                <div class="fd-object-list__header-right">
                    <span class="fd-object-number fd-object-list__object-number">
                        <span class="fd-object-number__text">457.00</span>
                        <span class="fd-object-number__unit">Euro</span>
                    </span>
                </div>
            </div>
            <div class="fd-object-list__content">
                <div class="fd-object-list__row">
                    <div class="fd-object-list__row-left">
                        <div class="fd-object-list__object-attribute">

                            First Attribute
                        </div>
                    </div>
                    <div class="fd-object-list__row-right">
                        <div class="fd-object-marker">
                            <i class="fd-object-marker__icon sap-icon--flag"
                                aria-label="icon for flag"></i>
                            </div>
                            <div class="fd-object-marker">
                                <i class="fd-object-marker__icon sap-icon--favorite" aria-label="icon for favourite"></i>
                            </div>
                        </div>
                    </div>
                    <div class="fd-object-list__row">
                        <div class="fd-object-list__row-left">
                            <div class="fd-object-list__object-attribute">
                                Second Attribute
                            </div>
                        </div>
                        <div class="fd-object-list__row-right">
                            <span class="fd-object-status fd-object-status--critical">
                                <span class="fd-object-status__text">Critical very very very long</span>
                            </span>
                        </div>
                    </div>
                    <div class="fd-object-list__row">
                        <div class="fd-object-list__row-left">
                            <div class="fd-object-list__object-attribute">
                                Third Attribute
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li role="listitem" tabindex="0" class="fd-list__item fd-object-list__item">
            <div class="fd-object-list__container">
                <div class="fd-object-list__intro">
                    Optional inline text very very very long
                </div>
                <div class="fd-object-list__header">
                    <span class="fd-avatar fd-avatar--s"
                        >
                    </span>
                    <div class="fd-object-list__header-left">
                        <div class="fd-object-identifier fd-object-list__object-identifier">
                            <p class="fd-object-identifier__title">
                                Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
                            </p>
                        </div>
                    </div>
                    <div class="fd-object-list__header-right">
                        <span class="fd-object-number fd-object-list__object-number">
                            <span class="fd-object-number__text">956.00</span>
                            <span class="fd-object-number__unit">Euro</span>
                        </span>
                    </div>
                </div>
                <div class="fd-object-list__content">
                    <div class="fd-object-list__row">
                        <div class="fd-object-list__row-left">
                            <div class="fd-object-list__object-attribute">
                                First Attribute
                            </div>
                        </div>
                        <div class="fd-object-list__row-right">
                            <span class="fd-object-status fd-object-status--negative">
                                <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
                                <span class="fd-object-status__text">Negative</span>
                            </span>
                        </div>
                    </div>
                    <div class="fd-object-list__row">
                        <div class="fd-object-list__row-left">
                            <div class="fd-object-list__object-attribute">
                                Second Attribute
                            </div>
                        </div>
                        <div class="fd-object-list__row-right">
                            <span class="fd-object-status fd-object-status--negative">
                                <span class="fd-object-status__text">Negative</span>
                            </span>
                        </div>
                    </div>
                    <div class="fd-object-list__row">
                        <div class="fd-object-list__row-left">
                            <div class="fd-object-list__object-attribute">
                                Third Attribute
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li role="listitem" tabindex="0" class="fd-list__item fd-object-list__item">
            <div class="fd-object-list__container">
                <div class="fd-object-list__intro">
                    Optional inline text very very very long
                </div>
                <div class="fd-object-list__header">
                    <span class="fd-avatar fd-avatar--s"
                        >
                    </span>
                    <div class="fd-object-list__header-left">
                        <div class="fd-object-identifier fd-object-list__object-identifier">
                            <p class="fd-object-identifier__title">
                                Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
                            </p>
                        </div>
                    </div>
                    <div class="fd-object-list__header-right">
                        <span class="fd-object-number fd-object-number--informative fd-object-list__object-number">
                            <span class="fd-object-number__text">956.00</span>
                            <span class="fd-object-number__unit">Euro</span>
                        </span>
                    </div>
                </div>
                <div class="fd-object-list__content">
                    <div class="fd-object-list__row">

                        <div class="fd-object-list__row-right">
                            <span class="fd-object-status fd-object-status--inverted fd-object-status--critical">
                                <span class="fd-object-status__text">Warning</span>
                            </span>
                        </div>
                    </div>
                    <div class="fd-object-list__row">

                        <div class="fd-object-list__row-right">
                            <span class="fd-object-status fd-object-status--critical">
                                <span class="fd-object-status__text">Critical</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li role="listitem" tabindex="0" class="fd-list__item fd-object-list__item">
            <div class="fd-object-list__container">
                <div class="fd-object-list__intro">
                    Optional inline text very very very long
                </div>
                <div class="fd-object-list__header">
                    <span class="fd-avatar fd-avatar--s"
                        >
                    </span>
                    <div class="fd-object-list__header-left">
                        <div class="fd-object-identifier fd-object-list__object-identifier">
                            <p class="fd-object-identifier__title">
                                Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
                            </p>
                        </div>
                    </div>
                    <div class="fd-object-list__header-right">
                        <span class="fd-object-number fd-object-number--negative fd-object-list__object-number">
                            <span class="fd-object-number__text">457.00</span>
                            <span class="fd-object-number__unit">Euro</span>
                        </span>
                    </div>
                </div>
                <div class="fd-object-list__content">
                    <div class="fd-object-list__row">
                        <div class="fd-object-list__row-left">
                            <div class="fd-object-list__object-attribute">
                                First Attribute
                            </div>
                        </div>
                        <div class="fd-object-list__row-right">
                            <div class="fd-object-marker">
                                <i class="fd-object-marker__icon sap-icon--user-edit" role="presentation"></i>
                                <span class="fd-object-marker__text">Draft</span>
                            </div>
                        </div>
                    </div>
                    <div class="fd-object-list__row">
                        <div class="fd-object-list__row-left">
                            <div class="fd-object-list__object-attribute">
                                Second Attribute
                            </div>
                        </div>
                    </div>
                    <div class="fd-object-list__row">
                        <div class="fd-object-list__row-left">
                            <div class="fd-object-list__object-attribute">
                                Third Attribute
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-list--navigation` | An object list can display links that the users can navigate to |
| `fd-list--navigation-object` | An object list can display links that the users can navigate to |
| `fd-list--no-border` | Object list items can be displayed without borders |
| `fd-list--selection` | Object list items can be selectable by adding the `fd-list--selection` and `fd-list--selection-row` modifier classes to the main element. |
| `fd-list--selection-row` | Object list items can be selectable by adding the `fd-list--selection` and `fd-list--selection-row` modifier classes to the main element. |

## States

| Class | Description |
|-------|-------------|
| `is-active` | Active state |
| `is-selected` | Selected state |

## BEM Elements

This component uses the following BEM elements:

- `fd-list__item`
- `fd-list__item--link`
- `fd-list__link`

## Component Structure

**Object list consists of the following elements:**

  - \

## Related Components

This component works with or depends on:

- `avatar`
- `icon`
- `list`
- `object-identifier`
- `object-list`
- `object-marker`
- `object-number`
- `object-status`

## Examples

### Standard

The standard object list item displays a title, introductory text, an avatar and object display components. It is recommended to display avatar in size S, therefore add the `fd-avatar--s` modifier class to the `fd-avatar` element.

```html
<h4 id="objectListItemHeader">Object List Item</h4>
<ul class="fd-list fd-object-list" role="list" aria-labelledby="objectListItemHeader">
    <li role="listitem" tabindex="0" class="fd-list__item fd-object-list__item">
        <div class="fd-object-list__container">
            <div class="fd-object-list__intro">
                Optional inline text very very very long
            </div>
            <div class="fd-object-list__header">
                <span class="fd-avatar fd-avatar--s"
                    >
                </span>
                <div class="fd-object-list__header-left">
                    <div class="fd-object-identifier fd-object-list__object-identifier">
                        <p class="fd-object-identifier__title">
                            Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
                        </p>
                    </div>
                </div>
                <div class="fd-object-list__header-right">
                    <span class="fd-object-number fd-object-list__object-number">
                        <span class="fd-object-number__text">457.00</span>
                        <span class="fd-object-number__unit">Euro</span>
                    </span>
                </div>
            </div>
            <div class="fd-object-list__content">
                <div class="fd-object-list__row">
                    <div class="fd-object-list__row-left">
                        <div class="fd-object-list__object-attribute">

                            First Attribute
                        </div>
                    </div>
                    <div class="fd-object-list__row-right">
                        <div class="fd-object-marker">
                            <i class="fd-object-marker__icon sap-icon--flag"
                                aria-label="icon for flag"></i>
                            </div>
                            <div class="fd-object-marker">
                                <i class="fd-object-marker__icon sap-icon--favorite" aria-label="icon for favourite"></i>
                            </div>
                        </div>
                    </div>
                    <div class="fd-object-list__row">
                        <div class="fd-object-list__row-left">
                            <div class="fd-object-list__object-attribute">
                                Second Attribute
                            </div>
                        </div>
                        <div class="fd-object-list__row-right">
                            <span class="fd-object-status fd-object-status--critical">
                                <span class="fd-object-status__text">Critical very very very long</span>
                            </span>
                        </div>
                    </div>
                    <div class="fd-object-list__row">
                        <div class="fd-object-list__row-left">
                            <div class="fd-object-list__object-attribute">
                                Third Attribute
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li role="listitem" tabindex="0" class="fd-list__item fd-object-list__item">
            <div class="fd-object-list__container">
                <div class="fd-object-list__intro">
                    Optional inline text very very very long
                </div>
                <div class="fd-object-list__header">
                    <span class="fd-avatar fd-avatar--s"
                        >
                    </span>
                    <div class="fd-object-list__header-left">
                        <div class="fd-object-identifier fd-object-list__object-identifier">
                            <p class="fd-object-identifier__title">
                                Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
                            </p>
                        </div>
                    </div>
                    <div class="fd-object-list__header-right">
                        <span class="fd-object-number fd-object-list__object-number">
                            <span class="fd-object-number__text">956.00</span>
                            <span class="fd-object-number__unit">Euro</span>
                        </span>
                    </div>
                </div>
                <div class="fd-object-list__content">
                    <div class="fd-object-list__row">
                        <div class="fd-object-list__row-left">
                            <div class="fd-object-list__object-attribute">
                                First Attribute
                            </div>
                        </div>
                        <div class="fd-object-list__row-right">
                            <span class="fd-object-status fd-object-status--negative">
                                <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
                                <span class="fd-object-status__text">Negative</span>
                            </span>
                        </div>
                    </div>
                    <div class="fd-object-list__row">
                        <div class="fd-object-list__row-left">
                            <div class="fd-object-list__object-attribute">
                                Second Attribute
                            </div>
                        </div>
                        <div class="fd-object-list__row-right">
                            <span class="fd-object-status fd-object-status--negative">
                                <span class="fd-object-status__text">Negative</span>
                            </span>
                        </div>
                    </div>
                    <div class="fd-object-list__row">
                        <div class="fd-object-list__row-left">
                            <div class="fd-object-list__object-attribute">
                                Third Attribute
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li role="listitem" tabindex="0" class="fd-list__item fd-object-list__item">
            <div class="fd-object-list__container">
                <div class="fd-object-list__intro">
                    Optional inline text very very very long
                </div>
                <div class="fd-object-list__header">
                    <span class="fd-avatar fd-avatar--s"
                        >
                    </span>
                    <div class="fd-object-list__header-left">
                        <div class="fd-object-identifier fd-object-list__object-identifier">
                            <p class="fd-object-identifier__title">
                                Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
                            </p>
                        </div>
                    </div>
                    <div class="fd-object-list__header-right">
                        <span class="fd-object-number fd-object-number--informative fd-object-list__object-number">
                            <span class="fd-object-number__text">956.00</span>
                            <span class="fd-object-number__unit">Euro</span>
                        </span>
                    </div>
                </div>
                <div class="fd-object-list__content">
                    <div class="fd-object-list__row">

                        <div class="fd-object-list__row-right">
                            <span class="fd-object-status fd-object-status--inverted fd-object-status--critical">
                                <span class="fd-object-status__text">Warning</span>
                            </span>
                        </div>
                    </div>
                    <div class="fd-object-list__row">

                        <div class="fd-object-list__row-right">
                            <span class="fd-object-status fd-object-status--critical">
                                <span class="fd-object-status__text">Critical</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li role="listitem" tabindex="0" class="fd-list__item fd-object-list__item">
            <div class="fd-object-list__container">
                <div class="fd-object-list__intro">
                    Optional inline text very very very long
                </div>
                <div class="fd-object-list__header">
                    <span class="fd-avatar fd-avatar--s"
                        >
                    </span>
                    <div class="fd-object-list__header-left">
                        <div class="fd-object-identifier fd-object-list__object-identifier">
                            <p class="fd-object-identifier__title">
                                Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
                            </p>
                        </div>
                    </div>
                    <div class="fd-object-list__header-right">
                        <span class="fd-object-number fd-object-number--negative fd-object-list__object-number">
                            <span class="fd-object-number__text">457.00</span>
                            <span class="fd-object-number__unit">Euro</span>
                        </span>
                    </div>
                </div>
                <div class="fd-object-list__content">
                    <div class="fd-object-list__row">
                        <div class="fd-object-list__row-left">
                            <div class="fd-object-list__object-attribute">
                                First Attribute
                            </div>
                        </div>
                        <div class="fd-object-list__row-right">
                            <div class="fd-object-marker">
                                <i class="fd-object-marker__icon sap-icon--user-edit" role="presentation"></i>
                                <span class="fd-object-marker__text">Draft</span>
                            </div>
                        </div>
                    </div>
                    <div class="fd-object-list__row">
                        <div class="fd-object-list__row-left">
                            <div class="fd-object-list__object-attribute">
                                Second Attribute
                            </div>
                        </div>
                    </div>
                    <div class="fd-object-list__row">
                        <div class="fd-object-list__row-left">
                            <div class="fd-object-list__object-attribute">
                                Third Attribute
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
```

### Navigation

An object list can display links that the users can navigate to. To display a navigation object list, add the `fd-list--navigation-object` modifier class together with `fd-list--navigation` and the `fd-list__item--link` modifier class to the list elements that contain a link. All items should be navigable.

```html
<h4 id="objectListItemNavigation">Object List Item With Navigation</h4>

<div role="navigation">
    <ul class="fd-list fd-object-list fd-list--navigation-object fd-list--navigation" role="list" aria-labelledby="objectListItemNavigation">
        <li role="listitem" tabindex="0" class="fd-list__item fd-object-list__item fd-list__item--link">
            <a tabindex="0" class="fd-list__link" href="#">
                <div class="fd-object-list__container">
                    <div class="fd-object-list__intro">
                        Optional inline text very very very long
                    </div>
                    <div class="fd-object-list__header">
                        <span class="fd-avatar fd-avatar--s fd-avatar--circle"
                            >
                        </span>
                        <div class="fd-object-list__header-left">
                            <div class="fd-object-identifier fd-object-list__object-identifier">
                                <p class="fd-object-identifier__title">
                                    Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
                                </p>
                            </div>
                        </div>
                        <div class="fd-object-list__header-right">
                            <span class="fd-object-number fd-object-number--critical fd-object-list__object-number">
                                <span class="fd-object-number__text">457.00</span>
                                <span class="fd-object-number__unit">Euro</span>
                            </span>
                        </div>
                    </div>
                    <div class="fd-object-list__content">
                        <div class="fd-object-list__row">
                            <div class="fd-object-list__row-left">
                                <div class="fd-object-list__object-attribute">

                                    First Attribute
                                </div>
                            </div>
                            <div class="fd-object-list__row-right">
                                <div class="fd-object-marker">
                                    <i class="fd-object-marker__icon sap-icon--flag"
                                        aria-label="icon for flag"></i>
                                    </div>
                                    <div class="fd-object-marker">
                                        <i class="fd-object-marker__icon sap-icon--favorite" aria-label="icon for favourite"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="fd-object-list__row">
                                <div class="fd-object-list__row-left">
                                    <div class="fd-object-list__object-attribute">
                                        Second Attribute
                                    </div>
                                </div>
                                <div class="fd-object-list__row-right">
                                    <span class="fd-object-status">
                                        <span class="fd-object-status__text">Default</span>
                                    </span>
                                </div>
                            </div>
                            <div class="fd-object-list__row">
                                <div class="fd-object-list__row-left">
                                    <div class="fd-object-list__object-attribute">
                                        Third Attribute
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li role="listitem" tabindex="0" class="fd-list__item fd-object-list__item fd-list__item--link">
                <a tabindex="0" class="fd-list__link" href="#">
                    <div class="fd-object-list__container">
                        <div class="fd-object-list__intro">
                            Optional inline text very very very long
                        </div>
                        <div class="fd-object-list__header">
                            <span class="fd-avatar fd-avatar--s fd-avatar--circle"
                                >
                            </span>
                            <div class="fd-object-list__header-left">
                                <div class="fd-object-identifier fd-object-list__object-identifier">
                                    <p class="fd-object-identifier__title">
                                        Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
                                    </p>
                                </div>
                            </div>
                            <div class="fd-object-list__header-right">
                                <span class="fd-object-number fd-object-list__object-number">
                                    <span class="fd-object-number__text">956.00</span>
                                    <span class="fd-object-number__unit">Euro</span>
                                </span>
                            </div>
                        </div>
                        <div class="fd-object-list__content">
                            <div class="fd-object-list__row">
                                <div class="fd-object-list__row-left">
                                    <div class="fd-object-list__object-attribute">

                                        First Attribute
                                    </div>
                                </div>
                                <div class="fd-object-list__row-right">
                                    <span class="fd-object-status fd-object-status--negative">
                                        <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
                                        <span class="fd-object-status__text">Negative</span>
                                    </span>
                                </div>
                            </div>
                            <div class="fd-object-list__row">
                                <div class="fd-object-list__row-left">
                                    <div class="fd-object-list__object-attribute">
                                        Second Attribute
                                    </div>
                                </div>
                                <div class="fd-object-list__row-right">
                                    <span class="fd-object-status fd-object-status--positive">
                                        <span class="fd-object-status__text">Positive</span>
                                    </span>
                                </div>
                            </div>
                            <div class="fd-object-list__row">
                                <div class="fd-object-list__row-left">
                                    <div class="fd-object-list__object-attribute">
                                        Third Attribute
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
```

### Selection

Object list items can be selectable by adding the `fd-list--selection` and `fd-list--selection-row` modifier classes to the main element.

```html
<h4 id="objectListItemRowSelection">Object List Item With Row Selection</h4>
<ul class="fd-list fd-object-list fd-list--selection fd-list--selection-row" role="listbox" aria-labelledby="objectListItemRowSelection">
    <li role="option" aria-selected="true" tabindex="0" class="fd-list__item fd-object-list__item is-selected">
        <div class="fd-object-list__container">
            <div class="fd-object-list__intro">
                Optional inline text
                <div class="fd-object-list__header">
                    <div class="fd-object-list__header-left">
                        <div class="fd-object-identifier fd-object-list__object-identifier">
                            <p class="fd-object-identifier__title">
                                Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
                            </p>
                        </div>
                    </div>
                    <div class="fd-object-list__header-right">
                        <span class="fd-object-number fd-object-list__object-number">
                            <span class="fd-object-number__text">457.00</span>
                            <span class="fd-object-number__unit">Euro</span>
                        </span>
                    </div>
                </div>
                <div class="fd-object-list__content">
                    <div class="fd-object-list__row">
                        <div class="fd-object-list__row-left">
                            <div class="fd-object-list__object-attribute">

                                First Attribute
                            </div>
                        </div>
                        <div class="fd-object-list__row-right">
                            <div class="fd-object-marker">
                                <i class="fd-object-marker__icon sap-icon--flag"
                                    aria-label="icon for flag"></i>
                                </div>
                                <div class="fd-object-marker">
                                    <i class="fd-object-marker__icon sap-icon--favorite" aria-label="icon for favourite"></i>
                                </div>
                            </div>
                        </div>
                        <div class="fd-object-list__row">
                            <div class="fd-object-list__row-left">
                                <div class="fd-object-list__object-attribute">
                                    Second Attribute
                                </div>
                            </div>
                            <div class="fd-object-list__row-right">
                                <span class="fd-object-status fd-object-status--critical">
                                    <span class="fd-object-status__text">Avaliable</span>
                                </span>
                            </div>
                        </div>
                        <div class="fd-object-list__row">
                            <div class="fd-object-list__row-left">
                                <div class="fd-object-list__object-attribute">
                                    Third Attribute
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li role="option" aria-selected="false" tabindex="0" class="fd-list__item fd-object-list__item">
                <div class="fd-object-list__container">
                    <div class="fd-object-list__intro">
                        Optional inline text
                    </div>
                    <div class="fd-object-list__header">
                        <span class="fd-avatar fd-avatar--s"
                            >
                        </span>
                        <div class="fd-object-list__header-left">
                            <div class="fd-object-identifier fd-object-list__object-identifier">
                                <p class="fd-object-identifier__title">
                                    Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
                                </p>
                            </div>
                        </div>
                        <div class="fd-object-list__header-right">
                            <span class="fd-object-number fd-object-number--positive fd-object-list__object-number">
                                <span class="fd-object-number__text">666.00</span>
                                <span class="fd-object-number__unit">Euro</span>
                            </span>
                        </div>
                    </div>
                    <div class="fd-object-list__content">
                        <div class="fd-object-list__row">
                            <div class="fd-object-list__row-left">
                                <div class="fd-object-list__object-attribute">

                                    First Attribute
                                </div>
                            </div>
                            <div class="fd-object-list__row-right">
                                <span class="fd-object-status fd-object-status--negative">
                                    <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
                                    <span class="fd-object-status__text">Negative</span>
                                </span>
                            </div>
                        </div>
                        <div class="fd-object-list__row">
                            <div class="fd-object-list__row-left">
                                <div class="fd-object-list__object-attribute">
                                    Second Attribute
                                </div>
                            </div>
                            <div class="fd-object-list__row-right">
                                <span class="fd-object-status fd-object-status--informative">
                                    <span class="fd-object-status__text">Informative</span>
                                </span>
                            </div>
                        </div>
                        <div class="fd-object-list__row">
                            <div class="fd-object-list__row-left">
                                <div class="fd-object-list__object-attribute">
                                    Third Attribute
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
```

### SelectionWithNavigation

This object list is both selectable and navigable. To display selectable object list items with navigation, add the `fd-list--selection`, `fd-list--navigation` and `fd-list--navigation-object` modifier classes to the list and the `fd-list__item--link` modifier class to the list elements that contain links. All items should be navigable.

```html
<h4 id="objectListItemRowSelectionAndNavigation">Object List Item With Row Selection And Navigation</h4>
<div role="navigation">
    <ul class="fd-list fd-object-list fd-list--navigation-object fd-list--navigation fd-list--selection" role="listbox" aria-labelledby="objectListItemRowSelectionAndNavigation">
        <li role="option" aria-selected="true" tabindex="0" class="fd-list__item fd-object-list__item fd-list__item--link is-selected">
            <a tabindex="0" id="anchor" class="fd-list__link is-active">
                <div class="fd-object-list__container">
                    <div class="fd-object-list__intro">
                        Optional inline text
                    </div>
                    <div class="fd-object-list__header">
                        <span class="fd-avatar fd-avatar--s"
                            >
                        </span>
                        <div class="fd-object-list__header-left">
                            <div class="fd-object-identifier fd-object-list__object-identifier">
                                <p class="fd-object-identifier__title">
                                    Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
                                </p>
                            </div>
                        </div>
                        <div class="fd-object-list__header-right">
                            <span class="fd-object-number fd-object-list__object-number">
                                <span class="fd-object-number__text">457.00</span>
                                <span class="fd-object-number__unit">Euro</span>
                            </span>
                        </div>
                    </div>
                    <div class="fd-object-list__content">
                        <div class="fd-object-list__row">
                            <div class="fd-object-list__row-left">
                                <div class="fd-object-list__object-attribute">

                                    First Attribute
                                </div>
                            </div>
                            <div class="fd-object-list__row-right">
                                <div class="fd-object-marker">
                                    <i class="fd-object-marker__icon sap-icon--flag"
                                        aria-label="icon for flag"></i>
                                    </div>
                                    <div class="fd-object-marker">
                                        <i class="fd-object-marker__icon sap-icon--favorite" aria-label="icon for favourite"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="fd-object-list__row">
                                <div class="fd-object-list__row-left">
                                    <div class="fd-object-list__object-attribute">
                                        Second Attribute
                                    </div>
                                </div>
                                <div class="fd-object-list__row-right">
                                    <span class="fd-object-status fd-object-status--critical">
                                        <span class="fd-object-status__text">Avaliable</span>
                                    </span>
                                </div>
                            </div>
                            <div class="fd-object-list__row">
                                <div class="fd-object-list__row-left">
                                    <div class="fd-object-list__object-attribute">
                                        Third Attribute
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li role="option" aria-selected="true" tabindex="0" class="fd-list__item fd-object-list__item fd-list__item--link is-selected">
                <a tabindex="0" class="fd-list__link">
                    <div class="fd-object-list__container">
                        <div class="fd-object-list__intro">
                            Optional inline text
                        </div>
                        <div class="fd-object-list__header">
                            <span class="fd-avatar fd-avatar--s"
                                >
                            </span>
                            <div class="fd-object-list__header-left">
                                <div class="fd-object-identifier fd-object-list__object-identifier">
                                    <p class="fd-object-identifier__title">
                                        Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
                                    </p>
                                </div>
                            </div>
                            <div class="fd-object-list__header-right">
                                <span class="fd-object-number fd-object-list__object-number">
                                    <span class="fd-object-number__text">457.00</span>
                                    <span class="fd-object-number__unit">Euro</span>
                                </span>
                            </div>
                        </div>
                        <div class="fd-object-list__content">
                            <div class="fd-object-list__row">
                                <div class="fd-object-list__row-left">
                                    <div class="fd-object-list__object-attribute">

                                        First Attribute
                                    </div>
                                </div>
                                <div class="fd-object-list__row-right">
                                    <div class="fd-object-marker">
                                        <i class="fd-object-marker__icon sap-icon--flag"
                                            aria-label="icon for flag"></i>
                                        </div>
                                        <div class="fd-object-marker">
                                            <i class="fd-object-marker__icon sap-icon--favorite" aria-label="icon for favourite"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="fd-object-list__row">
                                    <div class="fd-object-list__row-left">
                                        <div class="fd-object-list__object-attribute">
                                            Second Attribute
                                        </div>
                                    </div>
                                    <div class="fd-object-list__row-right">
                                        <span class="fd-object-status fd-object-status--critical">
                                            <span class="fd-object-status__text">Avaliable</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="fd-object-list__row">
                                    <div class="fd-object-list__row-left">
                                        <div class="fd-object-list__object-attribute">
                                            Third Attribute
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <li role="option" aria-selected="false" tabindex="0" class="fd-list__item fd-object-list__item fd-list__item--link">
                    <a tabindex="0" class="fd-list__link">
                        <div class="fd-object-list__container">
                            <div class="fd-object-list__intro">
                                Optional inline text
                            </div>
                            <div class="fd-object-list__header">
                                <span class="fd-avatar fd-avatar--s"
                                    >
                                </span>
                                <div class="fd-object-list__header-left">
                                    <div class="fd-object-identifier fd-object-list__object-identifier">
                                        <p class="fd-object-identifier__title">
                                            Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
                                        </p>
                                    </div>
                                </div>
                                <div class="fd-object-list__header-right">
                                    <span class="fd-object-number fd-object-list__object-number">
                                        <span class="fd-object-number__text">666.00</span>
                                        <span class="fd-object-number__unit">Euro</span>
                                    </span>
                                </div>
                            </div>
                            <div class="fd-object-list__content">
                                <div class="fd-object-list__row">
                                    <div class="fd-object-list__row-left">
                                        <div class="fd-object-list__object-attribute">

                                            First Attribute
                                        </div>
                                    </div>
                                    <div class="fd-object-list__row-right">
                                        <span class="fd-object-status fd-object-status--negative">
                                            <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
                                            <span class="fd-object-status__text">Negative</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="fd-object-list__row">
                                    <div class="fd-object-list__row-left">
                                        <div class="fd-object-list__object-attribute">
                                            Second Attribute
                                        </div>
                                    </div>
                                    <div class="fd-object-list__row-right">
                                        <span class="fd-object-status fd-object-status--critical">
                                            <span class="fd-object-status__text">Critical</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="fd-object-list__row">
                                    <div class="fd-object-list__row-left">
                                        <div class="fd-object-list__object-attribute">
                                            Third Attribute
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
```

### Borderless

Object list items can be displayed without borders. To display a borderless list, add the `fd-list--no-border` modifier class to the list element.

```html
<h4 id="objectListItemBorderless">Borderless Object List Item</h4>
<ul class="fd-list fd-object-list fd-list--no-border" role="list" aria-labelledby="objectListItemBorderless">
    <li role="listitem" tabindex="0" class="fd-list__item fd-object-list__item">
        <div class="fd-object-list__container">
            <div class="fd-object-list__intro">
                Optional inline text very very very long
                <div class="fd-object-list__header">
                    <span class="fd-avatar fd-avatar--s"
                        >
                    </span>
                    <div class="fd-object-list__header-left">
                        <div class="fd-object-identifier fd-object-list__object-identifier">
                            <p class="fd-object-identifier__title">
                                Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
                            </p>
                        </div>
                    </div>
                    <div class="fd-object-list__header-right">
                        <span class="fd-object-number fd-object-list__object-number">
                            <span class="fd-object-number__text">457.00</span>
                            <span class="fd-object-number__unit">Euro</span>
                        </span>
                    </div>
                </div>
                <div class="fd-object-list__content">
                    <div class="fd-object-list__row">
                        <div class="fd-object-list__row-left">
                            <div class="fd-object-list__object-attribute">

                                First Attribute
                            </div>
                        </div>
                        <div class="fd-object-list__row-right">
                            <div class="fd-object-marker">
                                <i class="fd-object-marker__icon sap-icon--flag"
                                    aria-label="icon for flag"></i>
                                </div>
                                <div class="fd-object-marker">
                                    <i class="fd-object-marker__icon sap-icon--favorite" aria-label="icon for favourite"></i>
                                </div>
                            </div>
                        </div>
                        <div class="fd-object-list__row">
                            <div class="fd-object-list__row-left">
                                <div class="fd-object-list__object-attribute">
                                    Second Attribute
                                </div>
                            </div>
                            <div class="fd-object-list__row-right">
                                <span class="fd-object-status fd-object-status--positive">
                                    <span class="fd-object-status__text">Positive very very very long</span>
                                </span>
                            </div>
                        </div>
                        <div class="fd-object-list__row">
                            <div class="fd-object-list__row-left">
                                <div class="fd-object-list__object-attribute">
                                    Third Attribute
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li role="listitem" tabindex="0" class="fd-list__item fd-object-list__item">
                <div class="fd-object-list__container">
                    <div class="fd-object-list__intro">
                        Optional inline text very very very long
                    </div>
                    <div class="fd-object-list__header">
                        <span class="fd-avatar fd-avatar--s"
                            >
                        </span>
                        <div class="fd-object-list__header-left">
                            <div class="fd-object-identifier fd-object-list__object-identifier">
                                <p class="fd-object-identifier__title">
                                    Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
                                </p>
                            </div>
                        </div>
                        <div class="fd-object-list__header-right">
                            <span class="fd-object-number fd-object-number--critical fd-object-list__object-number">
                                <span class="fd-object-number__text">956.00</span>
                                <span class="fd-object-number__unit">Euro</span>
                            </span>
                        </div>
                    </div>
                    <div class="fd-object-list__content">
                        <div class="fd-object-list__row">
                            <div class="fd-object-list__row-left">
                                <div class="fd-object-list__object-attribute">

                                    First Attribute
                                </div>
                            </div>
                            <div class="fd-object-list__row-right">
                                <span class="fd-object-status fd-object-status--negative">
                                    <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
                                    <span class="fd-object-status__text">Negative</span>
                                </span>
                            </div>
                        </div>
                        <div class="fd-object-list__row">
                            <div class="fd-object-list__row-left">
                                <div class="fd-object-list__object-attribute">
                                    Second Attribute
                                </div>
                            </div>
                            <div class="fd-object-list__row-right">
                                <span class="fd-object-status fd-object-status--critical">
                                    <span class="fd-object-status__text">Critical</span>
                                </span>
                            </div>
                        </div>
                        <div class="fd-object-list__row">
                            <div class="fd-object-list__row-left">
                                <div class="fd-object-list__object-attribute">
                                    Third Attribute
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li role="listitem" tabindex="0" class="fd-list__item fd-object-list__item">
                <div class="fd-object-list__container">
                    <div class="fd-object-list__intro">
                        Optional inline text very very very long
                    </div>
                    <div class="fd-object-list__header">
                        <span class="fd-avatar fd-avatar--s"
                            >
                        </span>
                        <div class="fd-object-list__header-left">
                            <div class="fd-object-identifier fd-object-list__object-identifier">
                                <p class="fd-object-identifier__title">
                                    Fitbit Versa Smart Watch, Black Fitbit Versa Smart Watch
                                </p>
                            </div>
                        </div>
                        <div class="fd-object-list__header-right">
                            <span class="fd-object-number fd-object-list__object-number">
                                <span class="fd-object-number__text">956.00</span>
                                <span class="fd-object-number__unit">Euro</span>
                            </span>
                        </div>
                    </div>
                    <div class="fd-object-list__content">
                        <div class="fd-object-list__row">
                            <div class="fd-object-list__row-left">
                                <div class="fd-object-list__object-attribute">

                                    First Attribute
                                </div>
                            </div>
                            <div class="fd-object-list__row-right">
                                <span class="fd-object-status fd-object-status--inverted fd-object-status--critical">
                                    <span class="fd-object-status__text">Warning</span>
                                </span>
                            </div>
                        </div>
                        <div class="fd-object-list__row">
                            <div class="fd-object-list__row-left">
                                <div class="fd-object-list__object-attribute">
                                    Second Attribute
                                </div>
                            </div>
                            <div class="fd-object-list__row-right">
                                <span class="fd-object-status fd-object-status--critical">
                                    <span class="fd-object-status__text">Critical</span>
                                </span>
                            </div>
                        </div>
                        <div class="fd-object-list__row">
                            <div class="fd-object-list__row-left">
                                <div class="fd-object-list__object-attribute">
                                    Third Attribute
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/object-list/object-list.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
