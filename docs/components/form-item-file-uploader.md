---
component: fd-form-item
title: Components/File Uploader
category: Components
selector: fd-form-item
cssFile: form-item.css
sourcePath: packages/styles/stories/Components/file-uploader/file-uploader.stories.js
tags: []
dependencies: ["button","file-uploader","form-item","form-label","info-label","input","message-strip","object-status"]
relatedComponents: ["button","file-uploader","form-item","form-label","info-label","input","message-strip","object-status"]
stability: stable
generatedAt: 2026-06-01T19:23:59.985Z
---

# Components/File Uploader

The File Uploader component allows the user to select the files from the system to upload.
It is an opinionated composition of the input and button components.

##Usage

Use the File Uploader if:

* The user needs to select the files to upload by browsing the system folders.
* The user needs to select the files based on specific file formats to upload.

## Usage Guidelines

Use the File Uploader if:

* The user needs to select the files to upload by browsing the system folders.
* The user needs to select the files based on specific file formats to upload.

## Dependencies

This component depends on the following CSS files:

- `button.css`
- `file-uploader.css`
- `form-item.css`
- `form-label.css`
- `info-label.css`
- `input.css`
- `message-strip.css`
- `object-status.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/form-item.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/file-uploader.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/form-item.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/form-label.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/info-label.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/input.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/message-strip.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/object-status.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-form-item">
    <label class="fd-form-label" id="browse_input1_label" >Upload Document</label>
    <div class="fd-file-uploader">
        <div class="fd-file-uploader__container">
            <input
            aria-labelledby="browse_input1_label"
            class="fd-input fd-file-uploader__input"
            onclick="browseFile('input1');"
            title="Select a file"
            type="text"
            id="browse_input1"
            autocomplete="off"
            placeholder="Select a file"
            >

            <button
                class="fd-button"
                onclick="browseFile('input1');"
                id="file-uploader-button-1"
                aria-label="Select a file for uploading">
                Browse...
            </button>
        </div>

        <input
        aria-labelledby="browse_input1_label"
        hidden
        id="input1"
        class="fd-file-uploader__hidden"
        type="file"
        onchange="selectFile(this,'browse_input1')">
    </div>
</div>
```

## States

| Class | Description |
|-------|-------------|
| `is-error` | Error state |
| `is-information` | Information state |
| `is-success` | Success state |
| `is-warning` | Warning state |

## Related Components

This component works with or depends on:

- `button`
- `file-uploader`
- `form-item`
- `form-label`
- `info-label`
- `input`
- `message-strip`
- `object-status`

## Design Tokens

Key CSS variables used by this component:

- `--horizontal`

## Examples

### Default

File Uploader is a composition of the \

```html
<div class="fd-form-item">
    <label class="fd-form-label" id="browse_input1_label" >Upload Document</label>
    <div class="fd-file-uploader">
        <div class="fd-file-uploader__container">
            <input
            aria-labelledby="browse_input1_label"
            class="fd-input fd-file-uploader__input"
            onclick="browseFile('input1');"
            title="Select a file"
            type="text"
            id="browse_input1"
            autocomplete="off"
            placeholder="Select a file"
            >

            <button
                class="fd-button"
                onclick="browseFile('input1');"
                id="file-uploader-button-1"
                aria-label="Select a file for uploading">
                Browse...
            </button>
        </div>

        <input
        aria-labelledby="browse_input1_label"
        hidden
        id="input1"
        class="fd-file-uploader__hidden"
        type="file"
        onchange="selectFile(this,'browse_input1')">
    </div>
</div>
```

### After Selecting

Once the user selects files, update the input and the hidden div to include the file names. The hidden div will announce the file names only once when the value changes.

```html
<div class="fd-form-item">
    <label class="fd-form-label"  id="browse_input2_label" >Upload Document</label>
    <div class="fd-file-uploader">
        <div class="fd-file-uploader__container">
            <input
            aria-labelledby="browse_input2_label"
            class="fd-input fd-file-uploader__input"
            onclick="browseFile('input1');"
            title="document.pdf"
            type="text"
            id="browse_input2"
            autocomplete="off"
            value="document.pdf"
            >
            <button
                class="fd-button"
                onclick="browseFile('input1');"
                id="file-uploader-button-1"
                aria-label="Select a file for uploading">Browse...
            </button>
        </div>
        <div class="fd-file-uploader__hidden" aria-live="polite" aria-atomic="true">document.pdf</div>
        <input
        aria-labelledby="browse_input2_label"
        hidden
        id="input1"
        class="fd-file-uploader__hidden"
        type="file"
        onchange="selectFile(this,'browse_input2')"
        >
    </div>
</div>
```

### Status

For Status File Uploader apply the corresponding status class `is-success`, `is-error`, `is-warning`, `is-information ` modifier to the input element.

```html
<div class="fd-form-item">
    <label class="fd-form-label" id="browse_input7_label">Upload Document (Success)</label>
    <div class="fd-file-uploader">
        <div class="fd-file-uploader__container">
            <input
            aria-labelledby="browse_input7_label"
            class="fd-input fd-file-uploader__input is-success"
            onclick="browseFile('input2');"
            id="browse_input7"
            type="text"
            title="Select a file"
            placeholder="Select a file"
            autocomplete="off"
            >
            <button
                class="fd-button fd-file-uploader__button"
                onclick="browseFile('input2');"
                id="file-uploader-button-7"
                aria-label="Select a file for uploading">Browse...
            </button>
        </div>

        <input
        aria-labelledby="browse_input7_label"
        hidden
        id="input6"
        class="fd-file-uploader__hidden"
        type="file"
        onchange="selectFile(this,'browse_input7')">
    </div>
</div>
<label class="fd-form-label" id="browse_input4_label">Upload Document (Error)</label>
<div class="fd-file-uploader">
    <div class="fd-file-uploader__container">
        <input
        aria-labelledby="browse_input4_label"
        class="fd-input fd-file-uploader__input is-error"
        onclick="browseFile('input2');"
        id="browse_input4"
        type="text"
        title="Select a file"
        placeholder="Select a file"
        autocomplete="off"
        >
        <button
            class="fd-button fd-file-uploader__button"
            onclick="browseFile('input2');"
            id="file-uploader-button-4"
            aria-label="Select a file for uploading">Browse...
        </button>
    </div>

    <input
    aria-labelledby="browse_input4_label"
    hidden
    id="input3"
    class="fd-file-uploader__hidden"
    type="file"
    onchange="selectFile(this,'browse_input4')">
</div>
<label class="fd-form-label" id="browse_input5_label">Upload Document (Warning)</label>
<div class="fd-file-uploader">
    <div class="fd-file-uploader__container">
        <input
        aria-labelledby="browse_input5_label"
        class="fd-input fd-file-uploader__input is-warning"
        onclick="browseFile('input2');"
        id="browse_input5"
        type="text"
        title="Select a file"
        placeholder="Select a file"
        autocomplete="off"
        >
        <button
            class="fd-button fd-file-uploader__button"
            onclick="browseFile('input2');"
            id="file-uploader-button-5"
            aria-label="Select a file for uploading">Browse...
        </button>
    </div>

    <input
    aria-labelledby="browse_input5_label"
    hidden
    id="input4"
    class="fd-file-uploader__hidden"
    type="file"
    onchange="selectFile(this,'browse_input5')">
</div>
<label class="fd-form-label" id="browse_input6_label">Upload Document (Information)</label>
<div class="fd-file-uploader">
    <div class="fd-file-uploader__container">
        <input
        aria-labelledby="browse_input6_label"
        class="fd-input fd-file-uploader__input is-information"
        onclick="browseFile('input2');"
        id="browse_input3"
        type="text"
        title="Select a file"
        placeholder="Select a file"
        autocomplete="off"
        >
        <button
            class="fd-button fd-file-uploader__button"
            onclick="browseFile('input2');"
            id="file-uploader-button-6"
            aria-label="Select a file for uploading">Browse...
        </button>
    </div>

    <input
    aria-labelledby="browse_input6_label"
    hidden
    id="input5"
    class="fd-file-uploader__hidden"
    type="file"
    onchange="selectFile(this,'browse_input6')">
</div>
```

### File Uploader with File List

<span class="fd-info-label fd-info-label--accent-color-3"><span class="fd-info-label__text">non-fiori 3</span></span><span style="margin-right: 0.5rem;"></span><span class="fd-info-label fd-info-label--accent-color-4"><span class="fd-info-label__text">CX</span></span>

```html
<div class="fd-form-item">
    <div class="fd-file-uploader">
        <div class="fd-file-uploader__container">
            <input
            class="fd-input fd-file-uploader__input"
            title="Select a file"
            type="text"
            autocomplete="off"
            placeholder="Select a file">
            <button class="fd-button" title="Browse for a file" aria-label="Select a file for uploading">
                Browse...
            </button>
        </div>

        <input hidden class="fd-file-uploader__hidden" type="file">
        <div class="fd-file-uploader__uploaded-files">
            <p class="fd-file-uploader__label">No File Selected</p>
        </div>
    </div>
</div>

<hr><div class="fd-form-item">
<div class="fd-file-uploader">
    <div class="fd-file-uploader__container">
        <input class="fd-input fd-file-uploader__input" title="Select a file" type="text" autocomplete="off" placeholder="Select a file">
        <button class="fd-button" title="Browse for a file" aria-label="Select a file for uploading">
            Browse...
        </button>
    </div>

    <input aria-labelledby="browse_input1_label" hidden class="fd-file-uploader__hidden" type="file">

    <div class="fd-file-uploader__uploaded-files">
        <h3 class="fd-file-uploader__label">File Selected:</h3>
        <ul class="fd-file-uploader__list">
            <li class="fd-file-uploader__list-item">
                <span class="fd-object-status fd-object-status--positive">
                    <i class="fd-object-status__icon sap-icon--message-success" role="presentation"></i>
                    <span class="fd-object-status__text">Filename.format</span>
                </span>
                <div class="fd-file-uploader__actions">
                    <button title="Download File" aria-label="Download" class="fd-button fd-button--transparent">
                        <i class="sap-icon--download"></i>
                    </button>
                    <button title="Delete File" aria-label="Delete" class="fd-button fd-button--transparent">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </li>
            <li class="fd-file-uploader__list-item">
                <span class="fd-object-status fd-object-status--positive">
                    <i class="fd-object-status__icon sap-icon--message-success" role="presentation"></i>
                    <span class="fd-object-status__text">Verylonglonglonglonglonglongfilename.format</span>
                </span>
                <div class="fd-file-uploader__actions">
                    <button title="Download File" aria-label="Download" class="fd-button fd-button--transparent">
                        <i class="sap-icon--download"></i>
                    </button>
                    <button title="Delete File" aria-label="Delete" class="fd-button fd-button--transparent">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </li>
        </ul>

        <h3 class="fd-file-uploader__label">Invalid Files:</h3>
        <ul class="fd-file-uploader__list">
            <li class="fd-file-uploader__list-item">
                <span class="fd-object-status fd-object-status--negative">
                    <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
                    <span class="fd-object-status__text">Negative Object Status</span>
                </span>
            </li>
            <li class="fd-file-uploader__list-item">
                <div class="fd-message-strip fd-message-strip--error fd-message-strip--no-icon" role="alert">
                    <p class="fd-message-strip__text">
                        Example text: File with 12343 bytes is too big. Maximum of 1 byte are allowed.
                    </p>
                </div>
            </li>
        </ul>
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

This documentation was automatically generated from: `packages/styles/stories/Components/file-uploader/file-uploader.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
