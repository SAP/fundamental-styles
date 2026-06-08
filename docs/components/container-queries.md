---
component: container-queries
title: Container Queries
category: container-queries
selector: 
cssFile: 
sourcePath: packages/common-css/stories/container-queries/container-queries.stories.js
tags: []
dependencies: []
relatedComponents: []
stability: stable
generatedAt: 2026-06-08T17:49:02.427Z
---

# Container Queries

Container queries are similar to media queries, but they allow you to apply styles to an element based on the dimensions of the element's container rather than the device’s viewport. For more information please visit the <a target="_blank" title="MDN documentation website" href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries">MDN website</a>.   
        <br><br><br>
        <h3>Containment Context</h3>
        To define a container, you need to specify the <code>container-type</code> property on the element. The container-type can accept three options: size, inline-size, and normal. <br>
<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tbody>
    <tr>
        <td style="padding: 0.25rem;"><b>normal</b></td>
        <td style="padding: 0.25rem;">the element is not a query container for any container size, but it can be used to apply styles to the element</td>
        <td style="padding: 0.25rem;"><code>.sap-container-type-normal</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-container-type(normal)</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;"><b>size</b></td>
        <td style="padding: 0.25rem;">the container will not assume the position it has on the viewport, you must explicitly set the height and width of the container</td>
        <td style="padding: 0.25rem;"><code>.sap-container-type-size</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-container-type(size)</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;"><b>inline-size</b></td>
        <td style="padding: 0.25rem;">the element assumes the position it has on the viewport</td>
        <td style="padding: 0.25rem;"><code>.sap-container-type-inline-size</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-container-type(inline-size)</code></td>
    </tr>
    </tbody>
</table>
<br>
<h3>Mixins</h3>
<table style="width: 60%; border-collapse: collapse; margin-top: 1rem;text-align: left;">
    <tr>
        <th style="padding: 0.25rem;">Mixin</th>
        <th style="padding: 0.25rem;">Container width</th>
    </tr>
    <tr>
        <td style="padding: 0.25rem;"><code>@include sap-container-query-sm()</code></td>
        <td style="padding: 0.25rem;">max-width: 599px</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;"><code>@include sap-container-query-md()</code></td>
        <td style="padding: 0.25rem;">600px <= width <= 1023px</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;"><code>@include sap-container-query-lg()</code></td>
        <td style="padding: 0.25rem;">1024px <= width <= 1439px</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;"><code>@include sap-container-query-xl()</code></td>
        <td style="padding: 0.25rem;">min-width: 1440px</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;"><code>@include sap-container-query-from($width)</code></td>
        <td style="padding: 0.25rem;">user defined</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;"><code>@include sap-container-query-until($width)</code></td>
        <td style="padding: 0.25rem;">user defined</td>
    </tr>
</table>

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
    <h4>Container Type</h4>
    <pre>.article-container {
        @include sap-container-type(inline-size);
        }</pre>
    </div>

    <div class="border-example-card">
        <h4>Container Query - Minimum Width</h4>
        <pre>@include sap-container-query-from(640px) {
            .article {
            font-size: 20px;
            }
            }</pre>
        </div>

        <div class="border-example-card">
            <h4>Container Query - Maximum Width</h4>
            <pre>@include sap-container-query-to(640px) {
                .article {
                font-size: 16px;
                }
                }</pre>
            </div>

            <div class="border-example-card">
                <h4>Container Query - Range</h4>
                <pre>@include sap-container-query-between(480px, 768px) {
                    .article {
                    font-size: 18px;
                    }
                    }</pre>
                </div>
```

## Examples

### UsingTheMixins

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
    <h4>Container Type</h4>
    <pre>.article-container {
        @include sap-container-type(inline-size);
        }</pre>
    </div>

    <div class="border-example-card">
        <h4>Container Query - Minimum Width</h4>
        <pre>@include sap-container-query-from(640px) {
            .article {
            font-size: 20px;
            }
            }</pre>
        </div>

        <div class="border-example-card">
            <h4>Container Query - Maximum Width</h4>
            <pre>@include sap-container-query-to(640px) {
                .article {
                font-size: 16px;
                }
                }</pre>
            </div>

            <div class="border-example-card">
                <h4>Container Query - Range</h4>
                <pre>@include sap-container-query-between(480px, 768px) {
                    .article {
                    font-size: 18px;
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

This documentation was automatically generated from: `packages/common-css/stories/container-queries/container-queries.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
