---
component: fd-container
title: Components/Forms/Form Group
category: Components
selector: fd-container
cssFile: container.css
sourcePath: packages/styles/stories/Components/Forms/form-group/form-group.stories.js
tags: []
dependencies: []
relatedComponents: []
stability: stable
generatedAt: 2026-06-01T19:23:59.988Z
---

# Components/Forms/Form Group

Form groups are used to assemble form elements with labels, messages, and help containers.

These components can be used alone. For example, the \

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/container.css" rel="stylesheet">

```

## Basic Usage

```html
<div class="fd-form-group">
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-1">Default input:</label>
        <input class="fd-input" type="text" id="input-1" placeholder="Field placeholder text">
    </div>
</div>
```

## Examples

### Default

```html
<div class="fd-form-group">
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-1">Default input:</label>
        <input class="fd-input" type="text" id="input-1" placeholder="Field placeholder text">
    </div>
</div>
```

### Required

To indicate to the user that it's required to fill out an input field, add the \

```html
<div class="fd-form-group">
    <div class="fd-form-item">
        <label class="fd-form-label fd-form-label--required" for="input-1c">Required Input:</label>
        <input class="fd-input" type="text" id="input-1c" placeholder="Field placeholder text">
    </div>
</div>
```

### Group header

Form groups can be grouped together under a header with the \

```html
<div class="fd-form-group" role="group" aria-labelledby="basicGroupHeader">
    <div class="fd-form-group__header">
        <h4 class="fd-form-group__header-text" id="basicGroupHeader">Group Header</h4>
    </div>
</div>

<div class="fd-form-group" role="group" aria-labelledby="noPaddingGroupHeader">
    <div class="fd-form-group__header fd-form-group__header--no-padding">
        <h4 class="fd-form-group__header-text" id="noPaddingGroupHeader">Group Header without inline padding</h4>
    </div>
</div>

<div class="fd-form-group" role="group" aria-labelledby="noBorderGroupHeader">
    <div class="fd-form-group__header fd-form-group__header--no-border">
        <h4 class="fd-form-group__header-text" id="noBorderGroupHeader">Group Header without border</h4>
    </div>
</div>

<div class="fd-form-group" role="group" aria-labelledby="noBorderNoPaddingGroupHeader">
    <div class="fd-form-group__header fd-form-group__header--no-border fd-form-group__header--no-padding">
        <h4 class="fd-form-group__header-text" id="noBorderNoPaddingGroupHeader">Group Header without border and padding</h4>
    </div>
</div>
```

### Group header (form grid)

When group headers are displayed in a **Form Grid**, paddings are added to the groups.

```html
<form class="fd-container fd-form-layout-grid-container">
    <div class="fd-row">
        <!-- Group 1 -->
        <div class="fd-form-group fd-form-group--with-spacing fd-col fd-col-md--6 fd-col-lg--6 fd-col-xl--6 fd-col--wrap" role="group" aria-labelledby="grid1GroupHeader">
            <div class="fd-form-group__header" id="grid1GroupHeader">
                <h4 class="fd-form-group__header-text">Personal Information</h4>
            </div>

            <div class="fd-form-item fd-row">
                <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
                    <label class="fd-form-label" for="input-14-name">Full Name:</label>
                </div>
                <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
                    <input class="fd-input" type="text" id="input-14-name" placeholder="e.g., Amelia Perry" value="Amelia Perry">
                </div>
            </div>

            <div class="fd-form-item fd-row">
                <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
                    <label class="fd-form-label" for="input-14x-name">City of Residence:</label>
                </div>
                <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
                    <input class="fd-input" type="text" id="input-14x-name" placeholder="e.g., New York" value="New York">
                </div>
            </div>

            <div class="fd-form-item fd-row">
                <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
                    <label class="fd-form-label" for="input-14y-name">Job Title:</label>
                </div>
                <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
                    <input class="fd-input" type="text" id="input-14y-name" placeholder="e.g., Product Designer" value="Product Designer">
                </div>
            </div>
        </div>

        <!-- Group 2 -->
        <div class="fd-form-group fd-form-group--with-spacing fd-col fd-col-md--6 fd-col-lg--6 fd-col-xl--6 fd-col--wrap" role="group" aria-labelledby="grid2GroupHeader">
            <div class="fd-form-group__header">
                <h4 class="fd-form-group__header-text" id="grid2GroupHeader">Contact Details</h4>
            </div>

            <div class="fd-form-item fd-row">
                <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
                    <label class="fd-form-label" for="input-14a-name">Email Address:</label>
                </div>
                <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
                    <input class="fd-input" type="email" id="input-14a-name" placeholder="e.g., amelia.perry@example.com" value="amelia.perry@example.com">
                </div>
            </div>

            <div class="fd-form-item fd-row">
                <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
                    <label class="fd-form-label" for="input-14b-name">Phone Number:</label>
                </div>
                <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
                    <input class="fd-input" type="tel" id="input-14b-name" placeholder="e.g., +1 555 123 4567" value="+1 555 123 4567">
                </div>
            </div>

            <div class="fd-form-item fd-row">
                <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
                    <label class="fd-form-label" for="input-14c-name">LinkedIn Profile:</label>
                </div>
                <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
                    <input class="fd-input" type="url" id="input-14c-name" placeholder="e.g., linkedin.com/in/amelia-perry" value="linkedin.com/in/amelia-perry">
                </div>
            </div>
        </div>

        <!-- Group 3 -->
        <div class="fd-form-group fd-form-group--with-spacing fd-col fd-col-md--6 fd-col-lg--6 fd-col-xl--6 fd-col--wrap" role="group" aria-labelledby="grid3GroupHeader">
            <div class="fd-form-group__header">
                <h class="fd-form-group__header-text" id="grid3GroupHeader">Security Questions</h>
            </div>

            <div class="fd-form-item fd-row">
                <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
                    <label class="fd-form-label" for="input-14j-name">What was your childhood nickname?</label>
                </div>
                <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
                    <input class="fd-input" type="text" id="input-14j-name" placeholder="e.g., Mimi" value="Mimi">
                </div>
            </div>

            <div class="fd-form-item fd-row">
                <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
                    <label class="fd-form-label" for="input-14h-name">What was the name of your first pet?</label>
                </div>
                <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
                    <input class="fd-input" type="text" id="input-14h-name" placeholder="e.g., Charlie" value="Charlie">
                </div>
            </div>

            <div class="fd-form-item fd-row">
                <div class="fd-col fd-col-md--2 fd-col-lg--4 fd-col-xl--12">
                    <label class="fd-form-label" for="input-14k-name">What city were you born in?</label>
                </div>
                <div class="fd-col fd-col-md--10 fd-col-lg--8 fd-col-xl--12">
                    <input class="fd-input" type="text" id="input-14k-name" placeholder="e.g., Boston" value="Boston">
                </div>
            </div>
        </div>

    </div>
</form>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/Forms/form-group/form-group.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
