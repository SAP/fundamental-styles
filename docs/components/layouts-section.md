---
component: section
title: Layouts/Section
category: Layouts
selector: 
cssFile: 
sourcePath: packages/styles/stories/Layouts/section/section.stories.js
tags: ["non-f3"]
dependencies: ["layout","layout-grid","layout-panel","section"]
relatedComponents: ["layout","layout-grid","layout-panel","section"]
stability: stable
generatedAt: 2026-06-08T17:49:02.303Z
---

# Layouts/Section

The section is a page-level structure container used to divide a page into stacked sections with appropriate padding applied. These should be used to separate large groups of content on a page.

You will generally use a section inside a page container which will give you the appropriate side margins. Since a section is full-width by default it can be used as a well with background colors or images.

Can hold two child types:
- \

## Dependencies

This component depends on the following CSS files:

- `layout.css`
- `layout-grid.css`
- `layout-panel.css`
- `section.css`

## Basic Usage

```html
<section class="fd-section">
    .fd-section
</section>
<section class="fd-section">
    .fd-section
</section>
<section class="fd-section">
    .fd-section
</section>
```

## Related Components

This component works with or depends on:

- `layout`
- `layout-grid`
- `layout-panel`
- `section`

## Design Tokens

Key CSS variables used by this component:

- `--bleed`
- `--full-bleed`
- `--no-border`
- `--sapFontHeader2Size`
- `--sapTitleColor`
- `--sapToolbar_Background`

## Examples

### Section Structure

```html
<section class="fd-section">
    .fd-section
</section>
<section class="fd-section">
    .fd-section
</section>
<section class="fd-section">
    .fd-section
</section>
```

### With Layout Grid

Shows an example with the grid span helper class.
This is most appropriate when displaying a collection of content in a linear order.

```html
<section class="fd-section">
    <div class="fd-container">
        <div class="fd-row">
            <div class="fd-col fd-col--4">
                <div class="fd-layout-panel">
                    <div class="fd-layout-panel__body">
                        <p>.fd-layout-panel</p>
                    </div>
                </div>
            </div>
            <div class="fd-col fd-col--4">

                <div class="fd-layout-panel">
                    <div class="fd-layout-panel__body">
                        <p>.fd-layout-panel</p>
                    </div>
                </div>
            </div>
            <div class="fd-col fd-col--4">
                <div class="fd-layout-panel">
                    <div class="fd-layout-panel__body">
                        <p>.fd-layout-panel</p>
                    </div>
                </div>
            </div>
            <div class="fd-col fd-col--4">
                <div class="fd-layout-panel">
                    <div class="fd-layout-panel__body">
                        <p>.fd-layout-panel</p>
                    </div>
                </div>
            </div>
            <div class="fd-col fd-col--4">
                <div class="fd-layout-panel">
                    <div class="fd-layout-panel__body">
                        <p>.fd-layout-panel</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

### With Panels

Shows an alternate layout option using columns.
This may be more appropriate depending on the need to maintain source order and structure.

```html
<section class="fd-section">
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__header">
            <div class="fd-layout-panel__head">
                <h3 class="fd-layout-panel__title">
                    .fd-layout-panel__title
                </h3>
                <p class="fd-layout-panel__description">
                    .fd-layout-panel__description
                </p>
            </div>
            <div class="fd-layout-panel__actions">
                .fd-layout-panel__actions
            </div>
        </div>
        <div class="fd-layout-panel__filters" id="">
            .fd-layout-panel__filters
        </div>
        <div class="fd-layout-panel__body">
            .fd-layout-panel__body
        </div>
        <div class="fd-layout-panel__footer">
            .fd-layout-panel__footer
        </div>
    </div>
</section>
```

### With Headers

Header and title elements are available when necessary to label content groups.

```html
<section class="fd-section">
    <div class="fd-section__header">
        <h3 class="fd-section__title">Section title</h3>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            fd-layout-panel
        </div>
    </div>
</section>
```

### TestingSimpleSection

```html
<section class='fd-section '>
    Simple Section
</section>

<section class='fd-section '>
    <div class='fd-section__header'>
        <h3 class='fd-section__title'>Section Title</h3>
    </div>
    Section Content
</section>

<section class='fd-section '>
    <div class='fd-section__header'>
        <h3 class='fd-section__title'>Title</h3>
        <div class='fd-section__actions'>action section</div>
    </div>
    Section Content
</section>

<section class='fd-section '>
    <div class='fd-section__header'>
        <h3 class='fd-section__title'>Title</h3>
        <div class='fd-section__actions'>action part</div>
    </div>
    Section Content
    <div class='fd-section__footer'>footer part</div>
</section>

<section class='fd-section fd-section--full-bleed'>
    <div class='fd-section__header'>
        <h3 class='fd-section__title'>Title</h3>
        <div class='fd-section__actions'>action part</div>
    </div>
    Section Content with Full Bleed
    <div class='fd-section__footer'>footer part</div>
</section>

<section class='fd-section '>Simple Section</section>
```

### TestingSectionWithHeadlines

```html
<section class='fd-section '>
    <div class='fd-section__header'>
        <h2 class='fd-section__title'>section with h2 headline</h2>
        <div class='fd-section__actions'>action part</div>
    </div>
    Section Content
    <div class='fd-section__footer'>footer part</div>
</section>

<section class='fd-section '>
    <div class='fd-section__header'>
        <h3 class='fd-section__title'>section with h3 headline</h3>
        <div class='fd-section__actions'>action part</div>
    </div>
    Section Content
    <div class='fd-section__footer'>footer part</div>
</section>

<section class='fd-section '>
    <div class='fd-section__header'>
        <h4 class='fd-section__title'>section with h4 headline</h4>
        <div class='fd-section__actions'>action part</div>
    </div>
    Section Content
    <div class='fd-section__footer'>footer part</div>
</section>

<section class='fd-section '>
    <div class='fd-section__header'>
        <h5 class='fd-section__title'>section with h5 headline</h5>
        <div class='fd-section__actions'>action part</div>
    </div>
    Section Content
    <div class='fd-section__footer'>footer part</div>
</section>

<section class='fd-section '>
    <div class='fd-section__header'>
        <h6 class='fd-section__title'>section with h6 headline</h6>
        <div class='fd-section__actions'>action part</div>
    </div>
    Section Content
    <div class='fd-section__footer'>footer part</div>
</section>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Layouts/section/section.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
