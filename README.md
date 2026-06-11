# Fundamental Library Styles

### Lightweight, framework-agnostic CSS component library

<a href="https://badge.fury.io/js/fundamental-styles"><img src="https://badge.fury.io/js/fundamental-styles.svg" alt="NPM Version"/></a><a href="https://github.com/SAP/fundamental-styles/actions"><img src="https://github.com/SAP/fundamental-styles/actions/workflows/create-release.yml/badge.svg?branch=main" alt="CI Status"/></a><a href="https://www.npmjs.com/package/fundamental-styles"><img src="https://img.shields.io/npm/dm/fundamental-styles?label=downloads" alt="NPM Downloads"/></a><a href="https://join.slack.com/t/ui-fundamentals/shared_invite/enQtNTIzOTU0Mzc2NTc5LWQzZWI5MWFhYjE5OTc4YzliN2JhOTc1ZjQxZTg1YjZiMWZiYzRkNjMwYzgyMmFkYmNhZDVjMWE5MDIzOWEzMmM"><img src="https://img.shields.io/badge/slack-ui--fundamentals-blue.svg?logo=slack" alt="Slack"/></a><a href="https://api.reuse.software/info/github.com/SAP/fundamental-styles"><img src="https://api.reuse.software/badge/github.com/SAP/fundamental-styles" alt="REUSE status"/></a><a href="https://storybook.js.org/"><img src="https://raw.githubusercontent.com/storybookjs/brand/main/badge/badge-storybook.svg" alt="Storybook"/></a><a href="https://fundamental-styles.netlify.app"><img src="https://img.shields.io/badge/Hosted%20on-Netlify-00C7B7?style=flat&logo=netlify&logoColor=white" alt="Hosted on Netlify"/></a>

A lightweight CSS library for building SAP applications. Framework-agnostic—works with Angular, React, Vue, or vanilla HTML. Provides ready-to-use components and styles that help you create consistent, professional SAP applications quickly.

## 🚀 Quick Start

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- 1. Theme CSS (required) -->
  <link href="https://unpkg.com/@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon/css_variables.css" rel="stylesheet">
  <link href="https://unpkg.com/fundamental-styles@latest/dist/theming/sap_horizon.css" rel="stylesheet">

  <!-- 2. Component CSS -->
  <link href="https://unpkg.com/fundamental-styles@latest/dist/button.css" rel="stylesheet">
  <link href="https://unpkg.com/fundamental-styles@latest/dist/input.css" rel="stylesheet">
</head>
<body>
  <button class="fd-button fd-button--emphasized">Hello World</button>
  <input class="fd-input" type="text" placeholder="Enter text">
</body>
</html>
```


## 📦 Installation

### ⬇️ NPM (Recommended)

```bash
npm install fundamental-styles @sap-theming/theming-base-content
```

**Import in your JavaScript/TypeScript:**

```javascript
// Theme CSS (required)
import '@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon/css_variables.css';
import 'fundamental-styles/dist/theming/sap_horizon.css';

// Option A: All components
import 'fundamental-styles/dist/fundamental-styles.css';

// Option B: Only components you need (smaller bundle)
import 'fundamental-styles/dist/button.css';
import 'fundamental-styles/dist/input.css';
import 'fundamental-styles/dist/icon.css';
```

**Or import in your SCSS/CSS:**

```scss
@import 'fundamental-styles/dist/fundamental-styles.css';
```

### 🌐 CDN

```html
<!-- Theme CSS -->
<link href="https://unpkg.com/@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon/css_variables.css" rel="stylesheet">
<link href="https://unpkg.com/fundamental-styles@latest/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- All components -->
<link href="https://unpkg.com/fundamental-styles@latest/dist/fundamental-styles.css" rel="stylesheet">
```

**Pin to specific version:**

```html
<link href="https://unpkg.com/fundamental-styles@0.41.4/dist/fundamental-styles.css" rel="stylesheet">
```

**Use prerelease version:**

```html
<link href="https://unpkg.com/fundamental-styles@prerelease/dist/fundamental-styles.css" rel="stylesheet">
```


## 👋 Hello World Example

Complete working example with buttons, forms, and messages:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fundamental Styles - Hello World</title>

  <!-- Theme base variables -->
  <link href="https://unpkg.com/@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon/css_variables.css" rel="stylesheet">

  <!-- Fundamental Styles theme -->
  <link href="https://unpkg.com/fundamental-styles@latest/dist/theming/sap_horizon.css" rel="stylesheet">

  <!-- Fundamental Styles components -->
  <link href="https://unpkg.com/fundamental-styles@latest/dist/button.css" rel="stylesheet">
  <link href="https://unpkg.com/fundamental-styles@latest/dist/input.css" rel="stylesheet">
  <link href="https://unpkg.com/fundamental-styles@latest/dist/form-item.css" rel="stylesheet">
  <link href="https://unpkg.com/fundamental-styles@latest/dist/form-label.css" rel="stylesheet">
  <link href="https://unpkg.com/fundamental-styles@latest/dist/message-strip.css" rel="stylesheet">
  <link href="https://unpkg.com/fundamental-styles@latest/dist/icon.css" rel="stylesheet">
</head>
<body style="padding: 2rem; font-family: '72', Arial, sans-serif;">

  <h1>Welcome to Fundamental Styles</h1>

  <!-- Form with input -->
  <div class="fd-form-item" style="margin-bottom: 1rem;">
    <label class="fd-form-label" for="name-input">Your Name</label>
    <input class="fd-input" id="name-input" type="text" placeholder="Enter your name">
  </div>

  <!-- Buttons -->
  <div style="margin-bottom: 1rem;">
    <button class="fd-button fd-button--emphasized">Submit</button>
    <button class="fd-button">Cancel</button>
    <button class="fd-button fd-button--transparent">
      <span class="sap-icon--settings"></span> Settings
    </button>
  </div>

  <!-- Message strips -->
  <div class="fd-message-strip fd-message-strip--success" role="alert" style="margin-bottom: 0.5rem;">
    <p class="fd-message-strip__text">Success! Your form is ready.</p>
  </div>

  <div class="fd-message-strip fd-message-strip--information" role="alert">
    <p class="fd-message-strip__text">
      <span class="sap-icon--hint"></span>
      Explore more components at
      <a href="https://sap.github.io/fundamental-styles/" target="_blank">sap.github.io/fundamental-styles</a>
    </p>
  </div>

</body>
</html>
```

## 🎨 Theming

### ⚡ Available Themes

| Theme | Description | Path |
|-------|-------------|------|
| `sap_horizon` | Morning Horizon (Light) | `dist/theming/sap_horizon.css` |
| `sap_horizon_dark` | Evening Horizon (Dark) | `dist/theming/sap_horizon_dark.css` |
| `sap_horizon_hcb` | Horizon High Contrast Black | `dist/theming/sap_horizon_hcb.css` |
| `sap_horizon_hcw` | Horizon High Contrast White | `dist/theming/sap_horizon_hcw.css` |
| `sap_horizon_set` | Horizon Set | `dist/theming/sap_horizon_set.css` |
| `sap_fiori_3` | Quartz Light | `dist/theming/sap_fiori_3.css` |
| `sap_fiori_3_dark` | Quartz Dark | `dist/theming/sap_fiori_3_dark.css` |
| `sap_fiori_3_hcb` | Quartz High Contrast Black | `dist/theming/sap_fiori_3_hcb.css` |
| `sap_fiori_3_hcw` | Quartz High Contrast White | `dist/theming/sap_fiori_3_hcw.css` |
| `sap_fiori_3_light_dark` | Quartz Auto (Depending on the OS Settings) | `dist/theming/sap_fiori_3_light_dark.css` |
| `sap_fiori_3_set` | Quartz Set | `dist/theming/sap_fiori_3_set.css` |
| `sap_belize` | Belize (legacy) | `dist/theming/sap_belize.css` |

### 🎯 How to Apply a Theme

**Always include TWO CSS files:**

> **⚠️ Required:** Both files are mandatory for themes to work correctly.

1. **Theme base variables** (from `@sap-theming/theming-base-content`)
2. **Fundamental Styles theme customizations** (from `fundamental-styles`)

**Example with CDN:**

```html
<!-- 1. Base variables -->
<link href="https://unpkg.com/@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon_dark/css_variables.css" rel="stylesheet">

<!-- 2. Theme customizations -->
<link href="https://unpkg.com/fundamental-styles@latest/dist/theming/sap_horizon_dark.css" rel="stylesheet">
```

**Example with NPM:**

```javascript
import '@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon_dark/css_variables.css';
import 'fundamental-styles/dist/theming/sap_horizon_dark.css';
```

### 🔤 Fonts and Icons

Fonts and icons are **not included** in `fundamental-styles`. They come from `@sap-theming/theming-base-content`.

> **💡 Important:** Always install `@sap-theming/theming-base-content` alongside `fundamental-styles` for fonts and icons to work properly.

#### Setup Steps:

**1. Install the theming package**

```bash
npm install @sap-theming/theming-base-content
```

**2. Configure your bundler to include fonts**

Fonts are located in the theming package:
- **Horizon themes**: `@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon/fonts/`
- **Quartz (Fiori 3) themes**: `@sap-theming/theming-base-content/content/Base/baseLib/baseTheme/fonts/`

Make sure your bundler (Webpack, Vite, etc.) can handle font files from node_modules.

**3. Set the base font size in your global CSS**

Add this to your main CSS file or `index.html`:

```css
html {
  font-size: 16px; /* Required for proper component sizing */
}
```

This ensures all components scale correctly. The `16px` base is required for SAP Design specifications.


## 📚 Documentation & Resources

### 📖 Quick Reference

| Resource | Description |
|----------|-------------|
| **[📘 Component Catalog](https://sap.github.io/fundamental-styles/)** | Live examples with code snippets |
| **[🤖 CLAUDE.md](https://github.com/SAP/fundamental-styles/blob/main/CLAUDE.md)** | Quick reference for AI agents & developers |
| **[🎨 Icon List](https://fundamental-styles.netlify.app/?path=/docs/sap-design-components-icons-sap-icons--docs)** | All available SAP icons |

### Machine-Readable Docs (for AI & Tooling)

| File | Description |
|------|-------------|
| [llms.txt](https://github.com/SAP/fundamental-styles/blob/main/llms.txt) | AI discovery file |
| [docs/ai-component-index.md](https://github.com/SAP/fundamental-styles/blob/main/docs/ai-component-index.md) | Component guide (120 components) |
| [docs/component-catalog.json](https://github.com/SAP/fundamental-styles/blob/main/docs/component-catalog.json) | JSON component catalog |
| [docs/utility-classes.json](https://github.com/SAP/fundamental-styles/blob/main/docs/utility-classes.json) | Utility classes (227 classes) |
| [docs/component-relationships.json](https://github.com/SAP/fundamental-styles/blob/main/docs/component-relationships.json) | Component dependencies |

### Framework Implementations

- **[Angular](https://github.com/SAP/fundamental-ngx)** - Angular wrapper components

## 📦 Monorepo Packages

This repository is a monorepo containing multiple packages:

### 🚀 Publishable Packages

| Package | Description | Install |
|---------|-------------|---------|
| **[fundamental-styles](https://github.com/SAP/fundamental-styles/tree/main/packages/styles)** | Core library (120+ components) | `npm i fundamental-styles` |
| **[common-css](https://github.com/SAP/fundamental-styles/tree/main/packages/common-css)** | Utility classes & SCSS mixins | `npm i @fundamental-styles/common-css` |
| **[cx](https://github.com/SAP/fundamental-styles/tree/main/packages/cx)** | CX-specific components | `npm i @fundamental-styles/cx` |
| **[theming-preview](https://github.com/SAP/fundamental-styles/tree/main/packages/theming-preview)** | SAP Theme Designer preview | `npm i @fundamental-styles/theming-preview` |

## 🛠️ Development

### 🎬 Setup

```bash
# Clone repository
git clone https://github.com/SAP/fundamental-styles.git
cd fundamental-styles

# Install dependencies
npm install

# Start development server
npm start

# Start with production build
npm run start:prod
```

### ⚙️ Prerequisites

- Git
- [Node.js LTS](https://nodejs.org/)

### Generated Files — Merge Conflict Setup

`docs/component-catalog.json` is generated by `yarn generate:ai-metadata` and frequently conflicts during merges. **One-time setup** after cloning:

```bash
./scripts/setup-git-config.sh
```

Or manually: `git config merge.ours.driver true`

When conflicts occur, your version is kept automatically. Just regenerate afterward:

```bash
yarn generate:ai-metadata
```

### 🤝 Contributing

- [SAP Contribution Guidelines](https://github.com/SAP/.github/blob/main/CONTRIBUTING.md)
- [Contribution Guidelines](https://github.com/SAP/fundamental-styles/wiki/Contribution-Guidelines)
- [Development Guidelines](https://github.com/SAP/fundamental-styles/wiki/Development-Guidelines)
- [Visual Testing Guide](https://github.com/SAP/fundamental-styles/wiki/Visual-testing-with-Chromatic)


## 📋 SLA (Service Level Agreement)

Our Service Level Agreement. Fundamental Library Styles is aiming to deliver:

### Core Commitments

This library provides:

- **SAP Design-compliant CSS** - Styles that follow SAP Design System standards
- **Reference HTML** - Exact markup structure that consuming libraries must follow
- **Framework compatibility** - Used by [Angular](https://github.com/SAP/fundamental-ngx), [React](https://github.com/SAP/fundamental-react), and [Vue](https://github.com/SAP/fundamental-vue) implementations

### How We Build It

- **Theme-able components** - Built on [SAP Theming Base Content](https://github.com/SAP/theming-base-content) using CSS Custom Properties
- **Self-contained styles** - Each component includes all necessary CSS with no external dependencies bleeding in or out
- **Accessibility first**
  - WCAG 2.0 Level AA color contrast (4.5:1 for text)
  - Semantic HTML structure
  - ARIA attributes included in reference HTML


## 🔢 Versioning

Follows [Semantic Versioning](https://semver.org/): `[MAJOR].[MINOR].[PATCH]`

### 🚨 Breaking Changes (MAJOR)

- Dropping existing classnames, CSS variables, color names, spacing parameters
- Altering HTML markup structure
- Non-visual attribute changes (`role`, `aria-*`, `data-*`)

> **Note:** Even non-visual HTML changes are breaking because this library provides reference HTML for JS framework implementations.

### ✅ Non-Breaking Changes (MINOR/PATCH)

- Adding new classnames, CSS variables, colors
- Modifying CSS properties/values of existing classes

### 📡 Release Channels

- **Stable**: `npm install fundamental-styles@latest`
- **Prerelease**: `npm install fundamental-styles@prerelease` (merges to `main` branch, includes `-rc.X` suffix)

## 💬 Support

- **[Create an issue](https://github.com/SAP/fundamental-styles/issues/new/choose)** - Bug reports & feature requests


## 🙏 Thanks

<a href="https://www.chromatic.com/"><img src="https://user-images.githubusercontent.com/321738/84662277-e3db4f80-af1b-11ea-88f5-91d67a5e59f6.png" width="153" height="30" alt="Chromatic" /></a>

Thanks to [Chromatic](https://www.chromatic.com/) for providing the visual testing platform that helps us review UI changes and catch visual regressions.
