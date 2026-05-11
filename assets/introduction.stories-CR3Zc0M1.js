import{t as s,D as a}from"./iframe-BNJx2YhD.js";import{R as e}from"./IntroductionPageWrapper-BxbnsAet.js";import"./preload-helper-CR6acF8F.js";const i=`# Common CSS

A collection of utility CSS classes and SCSS mixins for styling SAP applications. Common CSS provides ready-to-use classes for spacing, layout, typography, colors, and more, eliminating the need to write custom CSS for common styling patterns.

Built to align with the SAP Design System, Common CSS supports responsive design, accessibility standards, and automatic right-to-left (RTL) layout.

## ✨ Features

- **Utility-first CSS** — Ready-to-use classes for rapid prototyping
- **80+ SCSS mixins** — Build custom components with flexible mixins
- **BEM naming** — Clear and predictable class names
- **Logical properties** — Automatic RTL support for international apps
- **Container queries** — Modern responsive design support
- **Modular imports** — Optimize bundle size by importing only what you need
- **Theme-aware** — Seamlessly integrates with SAP Design System variables
- **Accessibility-first** — Built with semantic utilities and ARIA support

## 🚀 Quick Start

### 📦 Installation

\`\`\`bash
npm install @fundamental-styles/common-css
\`\`\`

**💡 Already using fundamental-styles?** Common CSS is included automatically.

### 🎨 Theming Requirements

**Required dependency:** Common CSS needs SAP theming variables to work properly.

\`\`\`bash
npm install @sap-theming/theming-base-content
\`\`\`

### ⚙️ Basic Usage

**Load order matters:** Always load theme variables before Common CSS:

\`\`\`html
<!-- 1. Theme variables first -->
<link href="https://unpkg.com/@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon/css_variables.css" rel="stylesheet">

<!-- 2. Then Common CSS -->
<link href="https://unpkg.com/@fundamental-styles/common-css@latest/dist/common-css.css" rel="stylesheet">
\`\`\`

### 📦 Modular Imports

Import only what you need to reduce bundle size:

\`\`\`javascript
// Import all utilities
import '@fundamental-styles/common-css/dist/common-css.css';

// Or import specific modules only
import '@fundamental-styles/common-css/dist/sap-margin.css';
import '@fundamental-styles/common-css/dist/sap-padding.css';
import '@fundamental-styles/common-css/dist/sap-flex.css';
import '@fundamental-styles/common-css/dist/sap-display.css';
import '@fundamental-styles/common-css/dist/sap-shadow.css';
import '@fundamental-styles/common-css/dist/sap-border.css';
import '@fundamental-styles/common-css/dist/sap-border-radius.css';
import '@fundamental-styles/common-css/dist/sap-colors.css';
import '@fundamental-styles/common-css/dist/sap-typography.css';
import '@fundamental-styles/common-css/dist/sap-heading.css';
\`\`\`


## 👋 Hello World Example

Copy this HTML file and open it in your browser to see Common CSS in action:

<details>
<summary><strong>📄 View Complete Example</strong></summary>

\`\`\`html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Common CSS - Hello World</title>

    <!-- Theme base variables (required for colors and spacing) -->
    <link
      href="https://unpkg.com/@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon/css_variables.css"
      rel="stylesheet" />

    <!-- Common CSS utilities -->
    <link
      href="https://unpkg.com/@fundamental-styles/common-css@latest/dist/common-css.css"
      rel="stylesheet" />

    <style>
      body {
        font-family:
          "72",
          -apple-system,
          BlinkMacSystemFont,
          "Segoe UI",
          Arial,
          sans-serif;
        line-height: 1.6;
        background-color: var(--sapBackgroundColor, #f5f5f5);
      }
    </style>
  </head>
  <body class="sap-margin-medium">
    <h1
      class="sap-heading-h1 sap-margin-bottom-medium sap-color-indicationColor_1">
      Common CSS Utilities Demo
    </h1>

    <!-- Card with spacing, border, shadow -->
    <div
      class="sap-bg-color-tile_Background sap-has-shadow-level-0 sap-border-radius-element sap-padding sap-margin-block-end-medium">
      <h2
        class="sap-heading-h3 sap-margin-bottom-small sap-color-indicationColor_2">
        Spacing & Layout
      </h2>

      <p class="sap-margin-bottom-small">
        This card demonstrates utility classes for <strong>padding</strong>,
        <strong>margin</strong>, <strong>border-radius</strong>, and
        <strong>shadows</strong>.
      </p>

      <p>Notice the consistent spacing and elevated shadow effect.</p>
    </div>

    <!-- Flexbox layout -->
    <div
      class="sap-flex sap-flex--row sap-flex--gap-small sap-flex--wrap sap-margin-bottom-large">
      <div
        class="sap-padding-inline-medium sap-border-radius-button sap-bg-color-avatar_2_Background sap-color-legendColor4">
        Tag 1
      </div>

      <div
        class="sap-padding-inline-medium sap-border-radius-button sap-bg-color-avatar_3_Background sap-color-legendColor5">
        Tag 2
      </div>

      <div
        class="sap-padding-inline-medium sap-border-radius-button sap-bg-color-avatar_6_Background sap-color-legendColor6">
        Tag 3
      </div>
    </div>

    <!-- Different spacing sizes -->
    <div
      class="sap-flex sap-flex--column sap-flex--gap-small sap-border-radius-element sap-margin-block-end-large">
      <div class="sap-padding-inline-tiny sap-bg-color-avatar_5_Background">
        <strong>Tiny Padding</strong>
      </div>
      <div class="sap-padding-inline-small sap-bg-color-avatar_6_Background">
        <strong>Small Padding</strong>
      </div>
      <div class="sap-padding-inline-medium sap-bg-color-avatar_7_Background">
        <strong>Medium Padding</strong>
      </div>
      <div class="sap-padding-inline-large sap-bg-color-avatar_8_Background">
        <strong>Large Padding</strong>
      </div>
    </div>

    <!-- Shadows demonstration -->
    <div
      class="sap-flex sap-flex--row sap-flex--gap-medium sap-flex--wrap sap-margin-bottom-large">
      <div class="sap-padding sap-border-radius-element sap-has-shadow-level-0">
        Level 0 Shadow
      </div>

      <div class="sap-padding sap-border-radius-element sap-has-shadow-level-1">
        Level 1 Shadow
      </div>

      <div class="sap-padding sap-border-radius-element sap-has-shadow-level-2">
        Level 2 Shadow
      </div>
    </div>

    <!-- Typography -->
    <div
      class="sap-padding sap-border-radius-element sap-has-shadow-critical sap-bg-color-legendBackgroundColor8">
      <h3
        class="sap-heading-h4 sap-margin-block-tiny sap-border-block-end-style-double sap-border-block-end-color-assistant">
        Typography Utilities
      </h3>

      <p
        class="sap-font-size-small sap-margin-bottom-tiny sap-color-indicationColor_3">
        Small text size (sap-font-size-small)
      </p>

      <p
        class="sap-font-size-medium sap-margin-bottom-tiny sap-color-indicationColor_4">
        Medium text size (sap-font-size-medium)
      </p>

      <p class="sap-font-size-large sap-color-legendColor1">
        Large text size (sap-font-size-large)
      </p>
    </div>
  </body>
</html>
\`\`\`

</details>


## 📖 Core Concepts

### 📝 Naming Convention

Common CSS uses **BEM notation** for complex utilities:

| Type | Pattern | Example |
|------|---------|---------|
| **Simple utilities** | \`sap-{property}-{value}\` | \`sap-padding-medium\` |
| **With modifiers** | \`sap-{block} sap-{block}--{modifier}\` | \`sap-flex sap-flex--row\` |
| **With states** | \`sap-has-{state}-{value}\` | \`sap-has-shadow-level-1\` |

**⚠️ Important:** Flex utilities require both base class and modifier:

\`\`\`html
<!-- ✅ Correct -->
<div class="sap-flex sap-flex--row">...</div>

<!-- ❌ Wrong -->
<div class="sap-flex-row">...</div>
\`\`\`


## 📘 Usage Guide

Common CSS provides two ways to apply styles to your application:

### CSS Utility Classes

**Use when:** You need quick, consistent styling that follows SAP Design System patterns. Perfect for rapid prototyping and standard layouts.

**How it works:** Add predefined classes directly to your HTML elements. Each class applies specific styling that aligns with SAP design guidelines.

**Example:** \`<div class="sap-margin-medium sap-padding-small">Content</div>\`

### SCSS Mixins

**Use when:** You're building custom components that need more flexibility or need to integrate spacing into your own CSS classes. Mixins allow you to customize parameters and create variations beyond the predefined utility classes.

**How it works:** Import mixins into your SCSS files and include them in your custom classes with optional parameters for fine-grained control.

**Example:** \`@include sap-padding(medium); @include sap-margin(custom-value, block-end);\`


### Spacing

#### CSS Utility Classes

<details>
<summary><strong>📄 Spacing Example</strong></summary>

\`\`\`html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Spacing Utilities</title>

    <!-- Theme variables (required) -->
    <link
      href="https://unpkg.com/@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon/css_variables.css"
      rel="stylesheet" />

    <!-- Modular imports - only spacing utilities -->
    <link
      href="https://unpkg.com/@fundamental-styles/common-css@latest/dist/sap-margin.css"
      rel="stylesheet" />
    <link
      href="https://unpkg.com/@fundamental-styles/common-css@latest/dist/sap-padding.css"
      rel="stylesheet" />

    <link
      href="https://unpkg.com/@fundamental-styles/common-css@latest/dist/sap-colors.css"
      rel="stylesheet" />

    <style>
      body {
        font-family: "72", Arial, sans-serif;
        background: var(--sapBackgroundColor);
        padding: 20px;
      }
    </style>
  </head>
  <body>
    <h2>Spacing Utilities Demo</h2>

    <div
      class="sap-bg-color-legendBackgroundColor1 sap-margin-small sap-padding">
      <strong>Margin and padding on all sides</strong>
    </div>

    <div
      class="sap-bg-color-legendBackgroundColor2 sap-margin-block-medium sap-padding-inline-medium">
      <strong>Medium vertical margin and medium horizontal padding</strong>
    </div>

    <div
      class="sap-bg-color-legendBackgroundColor5 sap-margin-responsive sap-padding-responsive">
      <strong>Responsive margin and padding</strong> - Adjusts based on screen
      size
    </div>
  </body>
</html>
\`\`\`

</details>

#### SCSS Mixins

\`\`\`scss
@import "@fundamental-styles/common-css/sass/common-mixins";

.my-card {
  @include sap-padding(medium);
  @include sap-margin(large, block-end);
}

.custom-spacing {
  @include sap-padding-responsive();
  @include sap-margin(small, x);
}
\`\`\`

## ⚡ Quick Reference

### 📋 Most Common Classes

| Need | Class | Example |
|------|-------|---------|
| **Spacing** | \`sap-padding\`, \`sap-margin-*\` | \`sap-margin-bottom-medium\` |
| **Flexbox** | \`sap-flex sap-flex--*\` | \`sap-flex sap-flex--row sap-flex--gap-small\` |
| **Shadows** | \`sap-has-shadow-*\` | \`sap-has-shadow-level-1\` |
| **Radius** | \`sap-border-radius-*\` | \`sap-border-radius-element\` |
| **Typography** | \`sap-heading-*\`, \`sap-font-size-*\` | \`sap-heading-h2\` |
| **Display** | \`sap-display-*\` | \`sap-display-none\` |
| **Hide text** | \`sap-sr-only\` | \`sap-sr-only\` |

## 📚 Resources

- 📚 [Full Documentation](https://sap.github.io/fundamental-styles/)
- 🎨 [Theming Base Content](https://github.com/SAP/theming-base-content)`,r={title:"Introduction",component:()=>null,parameters:{docs:{container:a,page:e(i),theme:s},previewTabs:{canvas:{hidden:!0}},viewMode:"docs",visualDisabled:!0,docsOnly:!0}},n={render:()=>"<div></div>",parameters:{storyshots:{disable:!0},docsOnly:!0}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    /*
      this will serve as default redirect to the docs page,
      otherwise it will render this empty div without ability
      to select 'docs'
     */
    return '<div></div>';
  },
  parameters: {
    storyshots: {
      disable: true
    },
    docsOnly: true
  }
}`,...n.parameters?.docs?.source}}};const d=["CommonCSS"];export{n as CommonCSS,d as __namedExportsOrder,r as default};
