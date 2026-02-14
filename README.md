# Fundamental Library Styles

<a href="https://badge.fury.io/js/fundamental-styles"><img src="https://badge.fury.io/js/fundamental-styles.svg" alt="NPM Version"/></a>
<img src="https://github.com/SAP/fundamental-styles/actions/workflows/create-release.yml/badge.svg?branch=main" alt="CI Status"/>
<img src="https://img.shields.io/npm/dm/fundamental-styles?label=npm%20downloads" alt="NPM Downloads">
<a href="https://join.slack.com/t/ui-fundamentals/shared_invite/enQtNTIzOTU0Mzc2NTc5LWQzZWI5MWFhYjE5OTc4YzliN2JhOTc1ZjQxZTg1YjZiMWZiYzRkNjMwYzgyMmFkYmNhZDVjMWE5MDIzOWEzMmM">
<img src="https://img.shields.io/badge/slack-ui--fundamentals-blue.svg?logo=slack" alt="Slack">
</a>
<a href="https://api.reuse.software/info/github.com/SAP/fundamental-styles">
    <img src="https://api.reuse.software/badge/github.com/SAP/fundamental-styles" alt="REUSE status">
</a>
<a href="https://storybook.js.org/">
    <img src="https://raw.githubusercontent.com/storybookjs/brand/main/badge/badge-storybook.svg" alt="StorybookJS"/>
</a>

<a href="https://www.netlify.com">
  <img src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="Deploys by Netlify" />
</a>

## What is Fundamental Library Styles?

Fundamental Library Styles is a lightweight presentation layer that can be used in conjunction with any UI framework, such as Angular, React, Vue, etc. By utilizing the Fundamental Styles library, which includes a collection of stylesheets and HTML tags, developers can create visually consistent and professional-looking Fiori applications in any web-based technology of their choice.

## For AI Agents

Quick reference and machine-readable documentation:

| Resource | Description |
|----------|-------------|
| [CLAUDE.md](CLAUDE.md) | Quick reference with examples |
| [llms.txt](llms.txt) | Standard AI discovery file |
| [docs/ai-component-index.md](docs/ai-component-index.md) | Full component guide (120 components) |
| [docs/component-catalog.json](docs/component-catalog.json) | Machine-readable component catalog |
| [docs/utility-classes.json](docs/utility-classes.json) | Utility classes (227 classes) |
| [docs/component-relationships.json](docs/component-relationships.json) | Component dependencies |

We are also working on [Angular](https://github.com/SAP/fundamental-ngx)
, [React](https://github.com/SAP/fundamental-react) and [Vue](https://github.com/SAP/fundamental-vue) implementations.

## Getting Started

The library is modular, so you can use as little or as much as you need.

### CDN

The fully compiled, minified library is available via [unpkg CDN](https://unpkg.com/) for inclusion in your application.

For `prerelease` version use

```html
<link href='https://unpkg.com/fundamental-styles@prerelease/dist/fundamental-styles.css' rel='stylesheet'>
```

For `latest` stable version use

```html
<link href='https://unpkg.com/fundamental-styles@latest/dist/fundamental-styles.css' rel='stylesheet'>
```

You can also include specific version of library into your html via using

```html
<link href='https://unpkg.com/fundamental-styles@{versionNumber}/dist/fundamental-styles.css' rel='stylesheet'>
```
where you should replace `{versionNumber}` with desired version number. For example with `0.20.3`

#### Theming
To use particular theme you need to include two CSS variables files:

```html
<link href='https://unpkg.com/@sap-theming/theming-base-content/content/Base/baseLib/{themeName}/css_variables.css' rel='stylesheet'>
```
```html
<link href='https://unpkg.com/fundamental-styles@{versionNumber}/dist/theming/{themeName}.css' rel='stylesheet'>
```
Available values for `themeName` are
`sap_horizon`,
`sap_horizon_dark`,
`sap_horizon_hcb`,
`sap_horizon_hcw`,
`sap_horizon_set`,
`sap_fiori_3`,
`sap_fiori_3_dark`,
`sap_fiori_3_hcb`,
`sap_fiori_3_hcw`,
`sap_fiori_3_set`,
`sap_fiori_3_light_dark`

### NPM Package

The compiled CSS for the full library and modules, e.g., core, layout, etc., are distributed
via [NPM](https://www.npmjs.com/package/fundamental-styles).

#### Installation

````
npm install fundamental-styles --save
````

Or with yarn:

````
yarn add fundamental-styles
````

> NOTE: We only distribute compiled CSS for each component, not the full project or HTML for specific components.

#### Usage

After installation, you can import the styles into your project in several ways:

**Option 1: Import in JavaScript/TypeScript**

If you're using a bundler like Webpack, Vite, or Rollup, you can import the CSS directly in your JavaScript/TypeScript files:

```javascript
// Import all styles
import 'fundamental-styles/dist/fundamental-styles.css';
```

**Option 2: Import in SCSS/CSS files**

You can also import in your main stylesheet:

```scss
/* Import all styles */
@import 'fundamental-styles/dist/fundamental-styles.css';
```

**Option 3: Import specific components**

To reduce bundle size, you can import only the components you need:

```javascript
// Import specific component styles
import 'fundamental-styles/dist/icon.css';
import 'fundamental-styles/dist/button.css';
import 'fundamental-styles/dist/input.css';
```

#### Theming with NPM

When using the NPM package, you'll also need to install the theming base content:

```bash
npm install @sap-theming/theming-base-content --save
```

Then import the theme CSS files:

```javascript
// Import theme base variables
import '@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon/css_variables.css';

// Import fundamental-styles theme customizations
import 'fundamental-styles/dist/theming/sap_horizon.css';

// Import fundamental-styles components
import 'fundamental-styles/dist/fundamental-styles.css';
```

Available theme names: `sap_horizon`, `sap_horizon_dark`, `sap_horizon_hcb`, `sap_horizon_hcw`, `sap_horizon_set`, `sap_fiori_3`, `sap_fiori_3_dark`, `sap_fiori_3_hcb`, `sap_fiori_3_hcw`, `sap_fiori_3_set`, `sap_fiori_3_light_dark`


### Icons

See the [Icon Component](https://fundamental-styles.netlify.app/?path=/docs/components-icons-sap-icons--sizes) for a
list of icon class names. See Project Configuration below for instructions to include SAP Fiori icons in your project.

### Project Configuration

This project does not contain fonts and icons - they must be added to your project separately. Download the @sap-theming/theming-base-content library. After adding fonts and icons to your project, include the following in your CSS
(The icon font files have different design for Fiori 3 themes and they can be found in the folder `@sap-theming/theming-base-content/content/Base/baseLib/baseTheme/fonts/`) as opposed to Horizon where the icons are stored in the subfolder fonts `@sap-theming/theming-base-content/content/Base/sap_horizon/baseTheme/fonts/`. It would require to include everything from `@sap-theming/theming-base-content/content/Base/baseLib/`.

```html {
    font-size: 16px;
}
```


## Working with the Project

### Download and Installation

1. **Clone Repository** Clone the repo using the git software of your choice or using the git command `git clone https://github.com/SAP/fundamental-styles.git`

2. **Install NPM Dependencies**: `npm install`

3. **Serve the development playground and documentation website locally**
    1. If you want to serve with development environment run `npm start` 
    2. For production build serve run `npm run start:prod`

### Project Dependencies

The project has the following prerequisites:

* Git (for downloading this repo)
* [Node LTS](https://nodejs.org/)

## SLA

Our Service Level Agreement. Fundamental Library Styles is aiming to deliver:

### SLA - What

* Consumable CSS that strives for [Fiori](https://www.sap.com/products/fiori.html) compliance.
* Reference HTML specification that consuming libraries **MUST** adhere to.

### SLA - How

* Theme-able components built on top of [SAP Theming Base Content](https://github.com/SAP/theming-base-content) by
  consuming the CSS Custom Properties delivered by the theming library
* Self-contained styles. That is, each component's style file contains all the styling needed to be rendered properly.
  External styling won't bleed-in internal styling won't bleed-out. `Bleeding in` means that CSS global reset won't
  affect the component and `bleeding out` means that the component styling should not affect other HTML elements)
* Accessibility support
    * Accessibility - Color contrast support for WCAG 2.0 level AA (4.5:1 for typical text)
    * Accessibility - Semantic HTML reference
    * Accessibility - Aria attributes noted when possible in HTML reference

This library is also being consumed by [Fundamental Library for Angular](https://github.com/SAP/fundamental-ngx)
, [Fundamental Library for React](https://github.com/SAP/fundamental-react),
and [Fundamental Library for Vue](https://github.com/SAP/fundamental-vue).

The above SLA is the primary difference between this library and the
earlier [Fundamental](https://github.com/SAP/fundamental).

## Support

If you encounter an issue, you can create a [ticket](https://github.com/SAP/fundamental-styles/issues/new/choose) or
post on
the [Fundamentals Slack channel](https://join.slack.com/t/ui-fundamentals/shared_invite/zt-6op8woeb-0~uRqrGZeMm3updfQehbaw)
.

## Contributing

If you want to contribute, please check
the [SAP Contribution Guidelines](https://github.com/SAP/.github/blob/main/CONTRIBUTING.md), 
the [Contribution Guidelines](https://github.com/SAP/fundamental-styles/wiki/Contribution-Guidelines). Also check
the [Development Guidelines](https://github.com/SAP/fundamental-styles/wiki/Development-Guidelines)
and [Visual Testing Guide](https://github.com/SAP/fundamental-styles/wiki/Visual-testing-with-Chromatic).

## Versioning

The `fundamental-styles` library follows [Semantic Versioning](https://semver.org/). These components strictly adhere to
the `[MAJOR].[MINOR].[PATCH]` numbering system (also known as `[BREAKING].[FEATURE].[FIX]`).

Merges to the `main` branch will be published as a prerelease. Pre-releases will include an **rc** version (_
e.g._ `[MAJOR].[MINOR].[PATCH]-rc.[RC]`).

The following circumstances will be considered a MAJOR or BREAKING change:

* Dropping existing classnames, CSS variables, color names, color groups, spacing parameters
* The existing underlying HTML markup of a component is altered
* Non-visual HTML attribute changes/additions (such as `role`, `aria-*`, `data-*`)
  > Note: Fundamental Styles provides CSS directly, and HTML as reference to consumers. Because of the reference relationship of the HTML seen in Fundamental Styles, we want to be very clear when we alter that reference so that it is properly reflected in JS implementation libraries. Because of this, even non-visual changes will be treated as breaking.

The following circumstances will NOT be considered a MAJOR or BREAKING change:

* Introducing new classnames, CSS variables, color names, color groups, spacing parameters
* Adding or modifying CSS properties and values of existing classnames.

## Fundamental Library GitHub Repository

The Fundamental Library GitHub Repository is a monorepo package that allows the reusage of other packages while keeping them isolated from one another. The Fundamental Library GitHub Repository consist of:

[Customer Experience Package](https://github.com/SAP/fundamental-styles/tree/main/packages/cx)
[Fundamental Library Next Package](https://github.com/SAP/fundamental-styles/tree/main/packages/fn)
[Common Css](https://github.com/SAP/fundamental-styles/tree/main/packages/common-css)
[Styles Package](https://github.com/SAP/fundamental-styles/tree/main/packages/styles)


## Thanks

<a href="https://www.chromatic.com/"><img src="https://user-images.githubusercontent.com/321738/84662277-e3db4f80-af1b-11ea-88f5-91d67a5e59f6.png" width="153" height="30" alt="Chromatic" /></a>

Thanks to [Chromatic](https://www.chromatic.com/) for providing the visual testing platform that helps us review UI
changes and catch visual regressions.
