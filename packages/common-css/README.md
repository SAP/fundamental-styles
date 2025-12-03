## What is SAP UI Common CSS?

The SAP UI Common CSS Package provides a collection of utility CSS classes and SCSS mixins designed to simplify styling for SAP applications. It allows developers to apply spacing, colors, typography, shadows, positioning, and more without writing custom CSS, ensuring consistency with the SAP Design System.

**Key Features:**

- ✅ Utility CSS Classes – Apply predefined styles for margin, padding, colors, font sizes, borders, shadows, and more.
- ✅ SCSS Mixins – Build custom, reusable styles with parameters for flexibility.
- ✅ SAP Design System – The values and patterns align with SAP Design System.
- ✅ BEM Naming Convention – Clear and predictable class names.
- ✅ Full and Modular Builds – Use the entire library or import only what you need (e.g., colors, borders, spacing).
- ✅ Supports Theming – Works seamlessly with SAP theming variables via @sap-theming/theming-base-content.



## SAP UI Common CSS Package included in Fundamental Styles

SAP UI Common CSS Package is part of the Fundamental Styles. If you have installed the Fundamental Styles in your project, you automatically get the SAP UI Common CSS Package.

Learn more at [http://sap.github.io/fundamental-styles/](http://sap.github.io/fundamental-styles/)


## SAP UI Common CSS Package on its own

SAP UI Common CSS Package can stand on its own. To install the package:

```bash
npm i @fundamental-styles/common-css
```

## Theming Prerequisites
The package uses SAP theming variables for colors, sizes, and spacing.

To ensure proper theming:

- Install @sap-theming/theming-base-content
- Ensure your build includes the theming styles (usually provided by SAP Fundamental Styles or your SAP UI library)

```bash
npm install @sap-theming/theming-base-content
```
Links:
- [@sap-theming/theming-base-content on NPM](https://www.npmjs.com/package/@sap-theming/theming-base-content)
- [Theming Base Content on GitHub](https://github.com/SAP/theming-base-content)


## Usage Options

### 1. Use Precompiled CSS
Include the compiled CSS file from the dist folder.
Full build:
```bash
<link rel="stylesheet" href="node_modules/@fundamental-styles/common-css/dist/common-css.css" />
```

Modular imports (e.g., only colors or borders):

```bash
<link rel="stylesheet" href="node_modules/@fundamental-styles/common-css/dist/sap-colors.css" />
<link rel="stylesheet" href="node_modules/@fundamental-styles/common-css/dist/sap-border.css" />

```

### 2. Import CSS in Your Stylesheet
If you are using a build tool like Webpack, Vite, or Parcel, you can import the CSS files directly:

```bash
// Import the full build
@import "~@fundamental-styles/common-css/dist/common-css.css";

// Or import specific modules
@import "~@fundamental-styles/common-css/dist/sap-colors.css";
@import "~@fundamental-styles/common-css/dist/sap-border.css";

```

### 3. Use SCSS Mixins for Customization
If your project uses SCSS, you can leverage the provided mixins and variables for custom values and consistent design.

The sass folder includes:
- _common-mixins.scss 
- _common-variables.scss
- _common-settings.scss

```bash
@import "~@fundamental-styles/common-css/sass/_common-variables.scss";
@import "~@fundamental-styles/common-css/sass/_common-mixins.scss";

.my-element {
  @include sap-padding(1rem);
}

.card {
  @include sap-border-radius(0.5rem);
}

```

## Folder Structure

```bash
@fundamental-styles/common-css/
│
├── dist/
│   ├── common-css.css          // Full build
│   ├── sap-colors.css          // Colors only
│   ├── sap-border.css          // Borders only
│   ├── ...                     // Other modular files
│
├── sass/
│   ├── _common-mixins.scss      // Utility mixins
│   ├── _common-variables.scss   // Design tokens
│   ├── _common-settings.scss    // Default configuration

```

## Examples

### Using Utility Classes

```bash
<div class="sap-margin-small sap-padding-inline-tiny sap-border-radius-element sap-shadow-level-1">
  Example with utility classes
</div>
```

### Using SCSS Mixins
```bash
.my-box {
  @include sap-padding(large, x);
  @include sap-shadow(level-2);
}
```

## Additional Resources
- [Fundamental Styles Documentation](https://sap.github.io/fundamental-styles/?path=/docs/docs-introduction--docs)
- [Theming Base Content on GitHub](https://github.com/SAP/theming-base-content)