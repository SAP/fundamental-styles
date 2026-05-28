---
component: media-queries
title: Media Queries
category: media-queries
selector: 
cssFile: 
sourcePath: packages/common-css/stories/media-queries/media-queries.stories.js
tags: []
dependencies: []
relatedComponents: []
stability: stable
generatedAt: 2026-05-28T16:47:21.437Z
---

# Media Queries



## Basic Usage

```html
<style>
    .border-example-card {
    background: #f7f8fa;
    border: 0.0625rem solid #eaecee;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-block-end: 1rem;
    }
    .border-example-card h4 {
    margin: 0 0 0.75rem 0;
    color: #0a6ed1;
    font-size: 0.9375rem;
    font-weight: 600;
    }
    .border-example-card pre {
    background: #fff;
    border: 0.0625rem solid #e4e4e4;
    border-radius: 0.25rem;
    padding: 0.75rem 1rem;
    margin: 0.5rem 0;
    font-size: 0.875rem;
    font-family: 'Courier New', Courier, monospace;
    color: #32363a;
    overflow-x: auto;
    line-height: 1.5;
    }
</style>

<div class="border-example-card">
    <h4>Minimum Width</h4>
    <pre>@include sap-media-min-width(400px) {
        div.example {
        font-size: 0.75rem;
        }
        }</pre>
    </div>

    <div class="border-example-card">
        <h4>Width Range (600px - 1023px)</h4>
        <pre>@include sap-media-range-width(600px, 1023px) {
            div.example {
            font-size: 1rem;
            }
            }</pre>
        </div>

        <div class="border-example-card">
            <h4>Width Range (1024px - 1439px)</h4>
            <pre>@include sap-media-range-width(1024px, 1439px) {
                div.example {
                font-size: 2rem;
                }
                }</pre>
            </div>

            <div class="border-example-card">
                <h4>Maximum Width</h4>
                <pre>@include sap-media-max-width(768px) {
                    div.example {
                    font-size: 0.875rem;
                    }
                    }</pre>
                </div>
```

## Examples

###  

```html
<style>
    .border-example-card {
    background: #f7f8fa;
    border: 0.0625rem solid #eaecee;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-block-end: 1rem;
    }
    .border-example-card h4 {
    margin: 0 0 0.75rem 0;
    color: #0a6ed1;
    font-size: 0.9375rem;
    font-weight: 600;
    }
    .border-example-card pre {
    background: #fff;
    border: 0.0625rem solid #e4e4e4;
    border-radius: 0.25rem;
    padding: 0.75rem 1rem;
    margin: 0.5rem 0;
    font-size: 0.875rem;
    font-family: 'Courier New', Courier, monospace;
    color: #32363a;
    overflow-x: auto;
    line-height: 1.5;
    }
</style>

<div class="border-example-card">
    <h4>Minimum Width</h4>
    <pre>@include sap-media-min-width(400px) {
        div.example {
        font-size: 0.75rem;
        }
        }</pre>
    </div>

    <div class="border-example-card">
        <h4>Width Range (600px - 1023px)</h4>
        <pre>@include sap-media-range-width(600px, 1023px) {
            div.example {
            font-size: 1rem;
            }
            }</pre>
        </div>

        <div class="border-example-card">
            <h4>Width Range (1024px - 1439px)</h4>
            <pre>@include sap-media-range-width(1024px, 1439px) {
                div.example {
                font-size: 2rem;
                }
                }</pre>
            </div>

            <div class="border-example-card">
                <h4>Maximum Width</h4>
                <pre>@include sap-media-max-width(768px) {
                    div.example {
                    font-size: 0.875rem;
                    }
                    }</pre>
                </div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/common-css/stories/media-queries/media-queries.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
