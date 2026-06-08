---
component: title
title: Titles
category: page-title
selector: 
cssFile: 
sourcePath: packages/common-css/stories/page-title/title.stories.js
tags: []
dependencies: []
relatedComponents: []
stability: stable
generatedAt: 2026-06-08T17:49:02.271Z
---

# Titles

Page Title, Section Title, and Subsection Title can be used as building blocks for home pages. These elements follow a responsive spacing system for horizontal padding, which can be disabled using the <code>.no-inline-padding</code> modifier class.

Typically, there is only one <b>Page Title</b> (optional), displayed in the content area above the group name. The top padding of a <b>Section Title</b> varies depending on whether a <b>Page Title</b> is present. Additionally, the vertical padding of a <b>Section Title</b> depends on its position — whether it is the first <b>Section Title</b> on the page or situated between sections. <br><b>Subsection Title</b> has no padding-top, but if there's no <b>Section Title</b>, than <b>Subsection Title</b> adds 1rem padding-top.

## Basic Usage

```html
<div class="sap-page-title sap-bg-color-errorBackground">Page Title</div>
<div class="sap-section-title sap-bg-color-informationBackground">Section Title (first, after Page Title)</div>
<div class="sap-subsection-title sap-bg-color-warningBackground">Subsection Title</div>

<div class="sap-section-title sap-bg-color-informationBackground">Section Title (between sections)</div>
<div class="sap-subsection-title sap-bg-color-warningBackground">Subsection Title</div>
```

## Examples

### Page Title, Section Title and Subsection Title

The first <b>Section Title</b> under the <b>Page Title</b> has a 0.5rem top padding. Between sections, the top padding is 3rem for XL, L, and M screens, and 2rem for S screens.<br><br><b style="color: red">NOTE: The background color for the titles is added for illustration purposes.</b>

```html
<div class="sap-page-title sap-bg-color-errorBackground">Page Title</div>
<div class="sap-section-title sap-bg-color-informationBackground">Section Title (first, after Page Title)</div>
<div class="sap-subsection-title sap-bg-color-warningBackground">Subsection Title</div>

<div class="sap-section-title sap-bg-color-informationBackground">Section Title (between sections)</div>
<div class="sap-subsection-title sap-bg-color-warningBackground">Subsection Title</div>
```

### Section Title and Subsection Title (no Page Title)

When there is no <b>Page Title</b>, the first <b>Section Title</b> has a top padding of 1.5rem. The padding between sections remains the same: 3rem for XL, L, and M screens, and 2rem for S screens. <br><br><b style="color: red">NOTE: The background color for the titles is added for illustration purposes.</b>

```html
<div class="sap-section-title sap-bg-color-informationBackground">Section Title (first)</div>
<div class="sap-subsection-title sap-bg-color-warningBackground">Subsection Title</div>

<div class="sap-section-title sap-bg-color-informationBackground">Section Title (between sections)</div>
<div class="sap-subsection-title sap-bg-color-warningBackground">Subsection Title</div>
```

### NoInlinePadding

To disable the responsive horizontal (inline) paddings add <code>.no-inline-padding</code> on the title element.

```html
<div class="sap-page-title no-inline-padding sap-bg-color-errorBackground">Page Title</div>
<div class="sap-section-title no-inline-padding sap-bg-color-informationBackground">Section Title (first)</div>
<div class="sap-subsection-title no-inline-padding sap-bg-color-warningBackground">Subsection Title</div>

<div class="sap-section-title no-inline-padding sap-bg-color-informationBackground">Section Title (between sections)</div>
<div class="sap-subsection-title no-inline-padding sap-bg-color-warningBackground">Subsection Title</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/common-css/stories/page-title/title.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
