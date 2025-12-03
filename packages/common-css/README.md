## What is SAP UI Common CSS?

The Common CSS package provides a comprehensive collection of utility CSS classes and SCSS mixins designed to simplify styling for SAP applications. It offers a complete toolkit for applying spacing, colors, typography, shadows, positioning, borders, flex layouts, and more without writing custom CSS, ensuring consistency with the SAP Design System.

**Key Features:**

- ✅ **Utility CSS Classes** – Apply predefined styles for spacing (margin/padding), colors, typography, borders, shadows, flexbox, positioning, display, overflow, and more
- ✅ **SCSS Mixins & Variables** – Build custom, reusable styles with parameters for maximum flexibility
- ✅ **SAP Design System Aligned** – All values and patterns align with SAP theming standards
- ✅ **BEM Naming Convention** – Clear and predictable class names (e.g., `sap-margin-small`, `sap-padding-inline-tiny`)
- ✅ **Full and Modular Builds** – Use the entire library or import only what you need (e.g., colors, borders, spacing)
- ✅ **Responsive & Container Queries** – Built-in support for responsive design and modern container queries
- ✅ **RTL Support** – Automatic right-to-left layout support for international applications
- ✅ **Theming Integration** – Works seamlessly with SAP theming variables via @sap-theming/theming-base-content



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
│   ├── common-css.css                  // Full build with all utilities
│   ├── sap-colors.css                  // Color utilities
│   ├── sap-main-colors.css             // Main color palette
│   ├── sap-border.css                  // Border utilities
│   ├── sap-border-radius.css           // Border radius utilities
│   ├── sap-margin.css                  // Margin spacing utilities
│   ├── sap-padding.css                 // Padding spacing utilities
│   ├── sap-content-paddings.css        // Responsive content padding utilities
│   ├── sap-shadow.css                  // Shadow utilities
│   ├── sap-elevation.css               // Z-index elevation utilities
│   ├── sap-typography.css              // Font family and size utilities
│   ├── sap-text.css                    // Text utilities
│   ├── sap-heading.css                 // Heading utilities
│   ├── sap-label.css                   // Label utilities
│   ├── sap-title.css                   // Title utilities
│   ├── sap-flex.css                    // Flexbox utilities
│   ├── sap-display.css                 // Display utilities
│   ├── sap-position.css                // Position utilities
│   ├── sap-overflow.css                // Overflow utilities
│   ├── sap-container-type.css          // Container query utilities
│   ├── sap-busy-indicator.css          // Busy indicator utilities
│   ├── sap-normalize.css               // Normalize/reset styles
│   └── sap-sr-only.css                 // Screen reader utilities
│
├── sass/
│   ├── _common-mixins.scss             // 80+ utility mixins
│   ├── _common-variables.scss          // Design tokens and variables
│   └── _common-settings.scss           // Default configuration

```

## What's Included

### Utility Classes Available

**Spacing:**
- Margin utilities: `sap-margin-{tiny|small|medium|large}`, `sap-margin-{side}-{size}`, `sap-margin-responsive`
- Padding utilities: `sap-padding-{tiny|small|medium|large}`, `sap-padding-{side}-{size}`, `sap-padding-responsive`
- Content padding utilities with responsive container queries

**Layout:**
- Flexbox utilities: `sap-flex-{direction}`, `sap-flex-gap-{size}`, `sap-flex-justify-{type}`, `sap-flex-align-{type}`, `sap-flex-wrap-{type}`
- Display utilities: `sap-display-{block|inline|flex|grid|none}`
- Position utilities: `sap-position-{absolute|relative|fixed|sticky}`
- Overflow utilities: `sap-overflow-{auto|hidden|scroll|visible}`
- Elevation utilities: `sap-elevation-{0-20}`

**Visual:**
- Color utilities: `sap-color-{colorName}`, `sap-bg-color-{colorName}`
- Border utilities: `sap-border-{width}-{style}-{color}`, `sap-border-radius-{element|button|field|group|popover|tile}`
- Shadow utilities: `sap-shadow-{level-0|level-1|level-2|level-3|header|shell}`

**Typography:**
- Font family: `sap-font-family-{regular|light|bold|semibold|monospaced-regular|monospaced-bold|black|header}`
- Font size: `sap-font-size-{small|medium|large|header-1|header-2|header-3|header-4|header-5|header-6}`
- Heading utilities: `sap-heading-{h1|h2|h3|h4|h5|h6}`
- Text utilities with line clamping, hyphenation, and wrapping support
- Label utilities with required/colon indicators

**Accessibility:**
- Screen reader only: `sap-sr-only`
- Normalize/reset styles

**Advanced:**
- Container query utilities: `sap-container-type-{inline-size|size|normal}`
- Busy indicator utilities
- Responsive design with media query support

### SCSS Mixins Available

Over 80 powerful mixins for custom styling, including:

**State Mixins:**
- `sap-hover`, `sap-active`, `sap-focus`, `sap-disabled`, `sap-selected`, `sap-readonly`, `sap-pressed`

**Layout Mixins:**
- `sap-flex($direction)`, `sap-flex-center`, `sap-flex-vertical-center`
- `sap-position($type, $top, $right, $bottom, $left)`, `sap-position-absolute-center`
- `sap-display($type)`

**Spacing Mixins:**
- `sap-padding($value, $side)`, `sap-padding-responsive`
- `sap-margin($value, $side)`, `sap-margin-responsive`
- `sap-content-paddings($type, $size)` with container query support

**Visual Mixins:**
- `sap-border($width, $style, $color, $pos)`, `sap-set-border-radius($value)`
- `sap-shadow($type)`, `sap-elevation($index)`
- `sap-color($color)`, `sap-bg-color($color)`

**Typography Mixins:**
- `sap-font-family($type)`, `sap-font-size($size)`, `sap-font($type)`
- `sap-heading($size)`, `sap-label($required, $colon)`, `sap-text($modifier)`
- `sap-ellipsis`

**Responsive Mixins:**
- `sap-media-sm`, `sap-media-md`, `sap-media-lg`, `sap-media-xl`
- `sap-container-query-sm`, `sap-container-query-md`, `sap-container-query-lg`, `sap-container-query-xl`

**Focus & Accessibility:**
- `sap-fiori-focus($offset, $alternative)`, `sap-fake-fiori-focus($offset, $radius, $alternative)`
- `sap-sr-only`

**RTL Support:**
- `sap-rtl` for automatic right-to-left layout handling
- RTL-aware padding, margin, and position mixins

## Examples

### Using Utility Classes

```html
<!-- Spacing and layout -->
<div class="sap-margin-small sap-padding-inline-tiny sap-flex-row sap-flex-gap-small">
  Flexbox container with margin and padding
</div>

<!-- Visual styling -->
<div class="sap-border-radius-element sap-shadow-level-1 sap-bg-color-neutral sap-padding-medium">
  Card with border radius, shadow, and background
</div>

<!-- Typography -->
<h1 class="sap-heading-h1 sap-margin-bottom-medium">Page Title</h1>
<p class="sap-font-standard-text sap-text">Regular text content</p>

<!-- Responsive padding with container queries -->
<div class="sap-container-type-inline-size sap-content-paddings-container-responsive">
  Responsive container
</div>
```

### Using SCSS Mixins

```scss
// Custom component with spacing and shadow
.my-card {
  @include sap-padding(medium);
  @include sap-margin(large, y);
  @include sap-shadow(level-2);
  @include sap-set-border-radius(element);
}

// Flexbox layout with gap
.toolbar {
  @include sap-flex-gap(small, '', row);
  @include sap-flex-align-items(center);
}

// Responsive content with container queries
.responsive-container {
  @include sap-container-type(inline-size);
  @include sap-padding-container-responsive();
}

// Custom heading with focus state
.custom-heading {
  @include sap-heading(h2);
  
  @include sap-fiori-focus(-0.1875rem) {
    // Focus styles automatically applied
  }
}

// RTL-aware positioning
.positioned-element {
  @include sap-set-position-left(1rem); // Automatically flips for RTL
  @include sap-set-padding-right(0.5rem); // Automatically flips for RTL
}
```

## Additional Resources
- [Fundamental Styles Documentation](https://sap.github.io/fundamental-styles/?path=/docs/docs-introduction--docs)
- [Theming Base Content on GitHub](https://github.com/SAP/theming-base-content)