---
component: fd-popover
title: Components/Quick View
category: Components
selector: fd-popover
cssFile: popover.css
sourcePath: packages/styles/stories/Components/quick-view/quick-view.stories.js
tags: []
dependencies: ["avatar","bar","button","dialog","form-group","form-item","form-label","form-layout-grid","icon","input","link","popover","quick-view","text","title"]
relatedComponents: ["avatar","bar","button","dialog","form-group","form-item","form-label","form-layout-grid","icon","input","link","popover","quick-view","text","title"]
stability: stable
generatedAt: 2026-06-01T19:23:59.836Z
---

# Components/Quick View

The quick view is similar to a popover but has a predefined structure, a fixed set of UI elements, and automatic UI rendering. Should be used in combination with the popover or dialog components

## Dependencies

This component depends on the following CSS files:

- `avatar.css`
- `bar.css`
- `button.css`
- `dialog.css`
- `form-group.css`
- `form-item.css`
- `form-label.css`
- `form-layout-grid.css`
- `icon.css`
- `input.css`
- `link.css`
- `popover.css`
- `quick-view.css`
- `text.css`
- `title.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/popover.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/avatar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/bar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/dialog.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/form-group.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/form-item.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/form-label.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/form-layout-grid.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/input.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/link.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/popover.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/quick-view.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/text.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/title.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-popover" >
    <div class="fd-popover__body" aria-hidden="false" id="popoverA1">
        <div class="fd-quick-view">
            <div class="fd-bar fd-bar--header">
                <div class="fd-bar__middle">
                    <div class="fd-bar__element">Company</div>
                </div>

                <div class="fd-quick-view__content">
                    <div class="fd-bar fd-bar--header-with-subheader">
                        <div class="fd-bar__left">
                            <span class="fd-avatar fd-avatar--s" role="presentation">
                                <i role="presentation" class="fd-avatar__icon sap-icon--building"></i>
                            </span>

                            <div class="fd-quick-view__subheader-text">
                                <h5 class="fd-title fd-title--h5">Company B</h5>

                                <div class="fd-quick-view__subtitle">
                                    Michael Adams
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="fd-form-group" role="group">
                        <div class="fd-form-group__header fd-form-group__header--no-border fd-form-group__header--no-padding" aria-labelledby="contactDetails">
                            <h4 class="fd-form-group__header-text" id="contactDetails">Contact Details</h4>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Phone</label>
                            <a class="fd-link" href="tel:+1 605 555 5555"><span class="fd-link__content">+1 605 555 5555</span></a>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Address</label>
                            <span class="fd-text">
                                781 Main Street Anytown, SD 57401, USA
                            </span>
                        </div>
                    </div>

                    <div class="fd-form-group" role="group">
                        <div class="fd-form-group__header fd-form-group__header--no-border fd-form-group__header--no-padding" aria-labelledby="mainContact">
                            <h4 class="fd-form-group__header-text" id="mainContact">Main Contact</h4>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Name</label>
                            <span class="fd-text">Michael Adams</span>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Mobile</label>
                            <a class="fd-link" href="tel:+1 605 555 5555"><span class="fd-link__content">+1 605 555 5555</span></a>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Mobile</label>
                            <a class="fd-link" href="tel:+1 605 555 5555"><span class="fd-link__content">+1 605 555 5555</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
```

## BEM Elements

This component uses the following BEM elements:

- `fd-popover__body`

## Related Components

This component works with or depends on:

- `avatar`
- `bar`
- `button`
- `dialog`
- `form-group`
- `form-item`
- `form-label`
- `form-layout-grid`
- `icon`
- `input`
- `link`
- `popover`
- `quick-view`
- `text`
- `title`

## Design Tokens

Key CSS variables used by this component:

- `--above`
- `--after`
- `--arrow`
- `--arrow-x-end`
- `--before`
- `--bottom`
- `--btp`
- `--center`
- `--display`
- `--dropdown`
- `--fdIcon_Button_Height`
- `--fdIcon_Button_Width`
- `--fdModal_BackgroundColor`
- `--fdPopover_Arrow_Size`
- `--fdPopover_Body_Border_Radius`

*...and 5 more*

## Examples

### Popover

QuickView component as popover

```html
<div class="fd-popover" >
    <div class="fd-popover__body" aria-hidden="false" id="popoverA1">
        <div class="fd-quick-view">
            <div class="fd-bar fd-bar--header">
                <div class="fd-bar__middle">
                    <div class="fd-bar__element">Company</div>
                </div>

                <div class="fd-quick-view__content">
                    <div class="fd-bar fd-bar--header-with-subheader">
                        <div class="fd-bar__left">
                            <span class="fd-avatar fd-avatar--s" role="presentation">
                                <i role="presentation" class="fd-avatar__icon sap-icon--building"></i>
                            </span>

                            <div class="fd-quick-view__subheader-text">
                                <h5 class="fd-title fd-title--h5">Company B</h5>

                                <div class="fd-quick-view__subtitle">
                                    Michael Adams
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="fd-form-group" role="group">
                        <div class="fd-form-group__header fd-form-group__header--no-border fd-form-group__header--no-padding" aria-labelledby="contactDetails">
                            <h4 class="fd-form-group__header-text" id="contactDetails">Contact Details</h4>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Phone</label>
                            <a class="fd-link" href="tel:+1 605 555 5555"><span class="fd-link__content">+1 605 555 5555</span></a>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Address</label>
                            <span class="fd-text">
                                781 Main Street Anytown, SD 57401, USA
                            </span>
                        </div>
                    </div>

                    <div class="fd-form-group" role="group">
                        <div class="fd-form-group__header fd-form-group__header--no-border fd-form-group__header--no-padding" aria-labelledby="mainContact">
                            <h4 class="fd-form-group__header-text" id="mainContact">Main Contact</h4>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Name</label>
                            <span class="fd-text">Michael Adams</span>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Mobile</label>
                            <a class="fd-link" href="tel:+1 605 555 5555"><span class="fd-link__content">+1 605 555 5555</span></a>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Mobile</label>
                            <a class="fd-link" href="tel:+1 605 555 5555"><span class="fd-link__content">+1 605 555 5555</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
```

### Dialog

QuickView component as dialog. Because of the dialog structure quick view title should be set within the dialog header but not in the quick view header

```html
<section class="fd-dialog-docs-static fd-dialog fd-dialog--active">
    <div class="fd-dialog__content" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
        <span class="fd-dialog__resize-handle"></span>
        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__middle">
                <div class="fd-bar__element" id="dialog-title">Company B</div>
            </div>
        </header>

        <div class="fd-dialog__body">
            <div class="fd-quick-view">
                <div class="fd-quick-view__content">
                    <div class="fd-bar fd-bar--header-with-subheader">
                        <div class="fd-bar__left">
                            <span class="fd-avatar fd-avatar--s" role="presentation">
                                <i role="presentation" class="fd-avatar__icon sap-icon--camera"></i>
                            </span>

                            <div class="fd-quick-view__subheader-text">
                                <h5 class="fd-title fd-title--h5">Company B</h5>

                                <div class="fd-quick-view__subtitle">
                                    Michael Adams
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="fd-form-group" role="group">
                        <div class="fd-form-item">
                            <label class="fd-form-label">Start Date:</label>
                            <span class="fd-text">01/01/2015</span>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">End Date:</label>
                            <span class="fd-text">31/12/2015</span>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Occurrence:</label>
                            <span class="fd-text">Weekly</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--emphasized">
                        Send reminder
                    </button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button">
                        Cancel
                    </button>
                </div>
            </div>
        </footer>
    </div>
</section>
```

### Without the header

QuickView without the header

```html
<div class="fd-popover" >
    <div class="fd-popover__body" aria-hidden="false" id="popoverA1">
        <div class="fd-quick-view">
            <div class="fd-quick-view__content">
                <div class="fd-bar fd-bar--header-with-subheader">
                    <div class="fd-bar__left">
                        <span class="fd-avatar fd-avatar--s" role="presentation">
                            <i role="presentation" class="fd-avatar__icon sap-icon--camera"></i>
                        </span>

                        <div class="fd-quick-view__subheader-text">
                            <h5 class="fd-title fd-title--h5">Company B</h5>

                            <div class="fd-quick-view__subtitle">
                                Michael Adams
                            </div>
                        </div>
                    </div>

                    <div class="fd-form-group" role="group">
                        <div class="fd-form-item">
                            <label class="fd-form-label">Start Date:</label>
                            <span class="fd-text">01/01/2015</span>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">End Date:</label>
                            <span class="fd-text">31/12/2015</span>
                        </div>
                        <div class="fd-form-item">
                            <label class="fd-form-label">Occurrence:</label>
                            <span class="fd-text">Weekly</span>
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

This documentation was automatically generated from: `packages/styles/stories/Components/quick-view/quick-view.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
