---
component: fd-message-page
title: Components/Upload Collection
category: Components
selector: fd-message-page
cssFile: message-page.css
sourcePath: packages/styles/stories/Components/upload-collection/upload-collection.stories.js
tags: []
dependencies: ["button","form-group","icon","input","link","list","message-page","object-marker","object-status","upload-collection"]
relatedComponents: ["button","form-group","icon","input","link","list","message-page","object-marker","object-status","upload-collection"]
stability: stable
generatedAt: 2026-05-28T16:47:21.310Z
---

# Components/Upload Collection

The upload collection control allows users to upload single or multiple files from a device (desktop, tablet, or phone) to the SAP app. Typically, uploaded files appear in an Attachments tab. However, files can also be displayed elsewhere.

##Usage

**Use the upload collection if:**

-	You want to show a list of uploaded files that can be modified.
- You want to allow users to add or remove files, and to change the file names.
-	You are still using the old sap.ca.ui.FileUpload control.

**Do not use the byline list if:**

-	The user can upload only one file to the app. In this case, use the File Uploader control instead.

##Elements
The upload collection is essentially a byline list with a few additional elements

| Modifier/Class | Description |
| :--------------- | :--------------- |
| \

## Usage Guidelines

**Use the upload collection if:**

-	You want to show a list of uploaded files that can be modified.
- You want to allow users to add or remove files, and to change the file names.
-	You are still using the old sap.ca.ui.FileUpload control.

## When Not To Use

-	The user can upload only one file to the app. In this case, use the File Uploader control instead.

## Dependencies

This component depends on the following CSS files:

- `button.css`
- `form-group.css`
- `icon.css`
- `input.css`
- `link.css`
- `list.css`
- `message-page.css`
- `object-marker.css`
- `object-status.css`
- `upload-collection.css`

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
<link href="node_modules/fundamental-styles/dist/form-group.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/input.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/link.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/list.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/message-page.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/object-marker.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/object-status.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/upload-collection.css" rel="stylesheet">
```

## Basic Usage

```html
<ul class="fd-list fd-list--byline fd-upload-collection" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <a href="#" class="fd-list__title fd-link fd-upload-collection__title">File_Name.extension</a>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
            <div class="fd-upload-collection__status-group">
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--negative">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a negative status</span>
                </span>
                <span class="fd-upload-collection__text-separator"> </span>
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--positive">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a positive status</span>
                </span>
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent"><i class="sap-icon--edit"></i></button>
            <button aria-label="Delete" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interactive fd-upload-collection__item--interactive fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <div class="fd-upload-collection__title-container">
                <a href="#" class="fd-list__title fd-link fd-upload-collection__title">File_Name.extension</a>
                <div class="fd-object-marker">
                    <i class="fd-object-marker__icon sap-icon--request" aria-label="icon for request" role="img"></i>
                </div>
                <div class="fd-object-marker">
                    <i class="fd-object-marker__icon sap-icon--favorite" aria-label="icon for favourite" role="img"></i>
                </div>
            </div>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
            <div class="fd-upload-collection__status-group">
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--negative">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a negative status</span>
                </span>
                <span class="fd-upload-collection__text-separator"> </span>
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--positive">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a positive status</span>
                </span>
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent"><i class="sap-icon--edit"></i></button>
            <button aria-label="Delete" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <a href="#" class="fd-list__title fd-link fd-upload-collection__title">File_Name.extension</a>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
            <div class="fd-upload-collection__status-group">
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--negative">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a negative status</span>
                </span>
                <span class="fd-upload-collection__text-separator"> </span>
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--positive">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a positive status</span>
                </span>
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent"><i class="sap-icon--edit"></i></button>
            <button aria-label="Delete" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <a href="#" class="fd-list__title fd-link fd-upload-collection__title">
                Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_File_Name.extension
            </a>
            <div class="fd-upload-collection__description">
                This is the long long long long long long long long long long long long long long long long long long long file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an long long long long long long long long long long long long long long long long long long long additional description
            </div>
            <div class="fd-upload-collection__status-group">
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--negative">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">
                        This is a long long long long long long long long long long long negative status
                    </span>
                </span>
                <span class="fd-upload-collection__text-separator"> </span>
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--positive">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">
                        This is a long long long long long long long long long long long positive status
                    </span>
                </span>
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent"><i class="sap-icon--edit"></i></button>
            <button aria-label="Delete" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
        </div>
    </li>
</ul>

<ul class="fd-list fd-list--byline fd-upload-collection fd-upload-collection--sm" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <a href="#" class="fd-list__title fd-link fd-upload-collection__title">File_Name.extension</a>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
            <div class="fd-upload-collection__status-group">
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--negative">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a negative status</span>
                </span>
                <span class="fd-upload-collection__text-separator"> </span>
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--positive">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a positive status</span>
                </span>
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent"><i class="sap-icon--edit"></i></button>
            <button aria-label="Delete" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <a href="#" class="fd-list__title fd-link fd-upload-collection__title">File_Name.extension</a>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
            <div class="fd-upload-collection__status-group">
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--negative">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a negative status</span>
                </span>
                <span class="fd-upload-collection__text-separator"> </span>
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--positive">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a positive status</span>
                </span>
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent"><i class="sap-icon--edit"></i></button>
            <button aria-label="Delete" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <a href="#" class="fd-list__title fd-link fd-upload-collection__title">File_Name.extension</a>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
            <div class="fd-upload-collection__status-group">
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--negative">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a negative status</span>
                </span>
                <span class="fd-upload-collection__text-separator"> </span>
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--positive">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a positive status</span>
                </span>
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent"><i class="sap-icon--edit"></i></button>
            <button aria-label="Delete" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
        </div>
    </li>
</ul>
```

## BEM Elements

This component uses the following BEM elements:

- `fd-message-page__container`
- `fd-message-page__content`
- `fd-message-page__icon`
- `fd-message-page__icon-container`
- `fd-message-page__subtitle`
- `fd-message-page__title`

## Related Components

This component works with or depends on:

- `button`
- `form-group`
- `icon`
- `input`
- `link`
- `list`
- `message-page`
- `object-marker`
- `object-status`
- `upload-collection`

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

### Default

The default upload collection.

```html
<ul class="fd-list fd-list--byline fd-upload-collection" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <a href="#" class="fd-list__title fd-link fd-upload-collection__title">File_Name.extension</a>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
            <div class="fd-upload-collection__status-group">
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--negative">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a negative status</span>
                </span>
                <span class="fd-upload-collection__text-separator"> </span>
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--positive">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a positive status</span>
                </span>
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent"><i class="sap-icon--edit"></i></button>
            <button aria-label="Delete" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interactive fd-upload-collection__item--interactive fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <div class="fd-upload-collection__title-container">
                <a href="#" class="fd-list__title fd-link fd-upload-collection__title">File_Name.extension</a>
                <div class="fd-object-marker">
                    <i class="fd-object-marker__icon sap-icon--request" aria-label="icon for request" role="img"></i>
                </div>
                <div class="fd-object-marker">
                    <i class="fd-object-marker__icon sap-icon--favorite" aria-label="icon for favourite" role="img"></i>
                </div>
            </div>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
            <div class="fd-upload-collection__status-group">
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--negative">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a negative status</span>
                </span>
                <span class="fd-upload-collection__text-separator"> </span>
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--positive">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a positive status</span>
                </span>
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent"><i class="sap-icon--edit"></i></button>
            <button aria-label="Delete" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <a href="#" class="fd-list__title fd-link fd-upload-collection__title">File_Name.extension</a>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
            <div class="fd-upload-collection__status-group">
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--negative">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a negative status</span>
                </span>
                <span class="fd-upload-collection__text-separator"> </span>
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--positive">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a positive status</span>
                </span>
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent"><i class="sap-icon--edit"></i></button>
            <button aria-label="Delete" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <a href="#" class="fd-list__title fd-link fd-upload-collection__title">
                Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_Long_File_Name.extension
            </a>
            <div class="fd-upload-collection__description">
                This is the long long long long long long long long long long long long long long long long long long long file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an long long long long long long long long long long long long long long long long long long long additional description
            </div>
            <div class="fd-upload-collection__status-group">
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--negative">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">
                        This is a long long long long long long long long long long long negative status
                    </span>
                </span>
                <span class="fd-upload-collection__text-separator"> </span>
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--positive">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">
                        This is a long long long long long long long long long long long positive status
                    </span>
                </span>
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent"><i class="sap-icon--edit"></i></button>
            <button aria-label="Delete" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
        </div>
    </li>
</ul>

<ul class="fd-list fd-list--byline fd-upload-collection fd-upload-collection--sm" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <a href="#" class="fd-list__title fd-link fd-upload-collection__title">File_Name.extension</a>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
            <div class="fd-upload-collection__status-group">
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--negative">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a negative status</span>
                </span>
                <span class="fd-upload-collection__text-separator"> </span>
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--positive">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a positive status</span>
                </span>
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent"><i class="sap-icon--edit"></i></button>
            <button aria-label="Delete" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <a href="#" class="fd-list__title fd-link fd-upload-collection__title">File_Name.extension</a>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
            <div class="fd-upload-collection__status-group">
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--negative">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a negative status</span>
                </span>
                <span class="fd-upload-collection__text-separator"> </span>
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--positive">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a positive status</span>
                </span>
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent"><i class="sap-icon--edit"></i></button>
            <button aria-label="Delete" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <a href="#" class="fd-list__title fd-link fd-upload-collection__title">File_Name.extension</a>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
            <div class="fd-upload-collection__status-group">
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--negative">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a negative status</span>
                </span>
                <span class="fd-upload-collection__text-separator"> </span>
                <span class="fd-object-status fd-upload-collection__status-group-item fd-object-status--positive">
                    <span class="fd-object-status__text fd-upload-collection__status-group-item-text">This is a positive status</span>
                </span>
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent"><i class="sap-icon--edit"></i></button>
            <button aria-label="Delete" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
        </div>
    </li>
</ul>
```

### Edit

Users can activate edit mode where the file name can be changed.

```html
<h4>Edit Mode</h4>

<ul class="fd-list fd-list--byline fd-upload-collection" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <div class="fd-upload-collection__form-item">
                <input class="fd-input" type="text" placeholder="Filename">
                <span class="fd-upload-collection__extension">.jpg</span>
            </div>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent">Ok</button>
            <button aria-label="Delete" class="fd-button fd-button--transparent">Cancel</button>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <div class="fd-upload-collection__form-item">
                <input class="fd-input" type="text" placeholder="Filename">
                <span class="fd-upload-collection__extension">.jpg</span>
            </div>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent">Ok</button>
            <button aria-label="Delete" class="fd-button fd-button--transparent">Cancel</button>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <div class="fd-upload-collection__form-item">
                <input class="fd-input" type="text" placeholder="Filename">
                <span class="fd-upload-collection__extension">.jpg</span>
            </div>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent">Ok</button>
            <button aria-label="Delete" class="fd-button fd-button--transparent">Cancel</button>
        </div>
    </li>
</ul>

<h4>Edit Mode - small</h4>

<ul class="fd-list fd-list--byline fd-upload-collection fd-upload-collection--sm" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <div class="fd-upload-collection__form-item">
                <input class="fd-input" type="text" placeholder="Filename">
                <span class="fd-upload-collection__extension">.jpg</span>
            </div>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button">Ok</button>
            <button aria-label="Delete" class="fd-button">Cancel</button>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <div class="fd-upload-collection__form-item">
                <input class="fd-input" type="text" placeholder="Filename">
                <span class="fd-upload-collection__extension">.jpg</span>
            </div>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button">Ok</button>
            <button aria-label="Delete" class="fd-button">Cancel</button>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <div class="fd-upload-collection__form-item">
                <input class="fd-input" type="text" placeholder="Filename">
                <span class="fd-upload-collection__extension">.jpg</span>
            </div>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button">Ok</button>
            <button aria-label="Delete" class="fd-button">Cancel</button>
        </div>
    </li>
</ul>
```

### NoData

Use a message page component when the user has yet to upload any files.

```html
<div class="fd-message-page">
    <div class="fd-message-page__container">
        <div class="fd-message-page__icon-container">
            <i role="presentation" class="sap-icon--attachment fd-message-page__icon"></i>
            <div role="status" aria-live="polite" class="fd-message-page__content">
                <div class="fd-message-page__title">
                    No files found.
                </div>
                <div class="fd-message-page__subtitle">
                    Drop files to upload, or use the "+" button.
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

This documentation was automatically generated from: `packages/styles/stories/Components/upload-collection/upload-collection.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
