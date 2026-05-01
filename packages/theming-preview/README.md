# Theming Preview

**Publishable Package** - `npm install @fundamental-styles/theming-preview`

This package provides preview components for the SAP Theme Designer. It allows theme designers to see how fundamental-styles components will look with custom theme variables before finalizing and deploying themes.

## Purpose

When organizations create custom SAP themes using the SAP Theme Designer tool, they need to preview how UI components will render with their theme customizations. This package provides a gallery of fundamental-styles components specifically formatted for the Theme Designer's preview interface.

## What's Inside

- **Component previews** - HTML snapshots of fundamental-styles components
- **Theme Designer integration** - Properly formatted files that the Theme Designer can consume
- **Common UI patterns** - Buttons, inputs, tables, dialogs, and other components in various states

## Usage

### For Theme Designers

This package is typically consumed by the SAP Theme Designer tool automatically. When building a custom theme:

1. The Theme Designer loads this package's preview files
2. Your custom theme variables are applied to the previews
3. You can see how buttons, forms, tables, etc. will look with your theme
4. Make adjustments until satisfied, then export the theme

### For Developers

If you're building a custom theme workflow or tool:

```bash
npm install @fundamental-styles/theming-preview
```

The package contains pre-rendered component HTML that can be loaded with your theme CSS for preview purposes.

## For Contributors

When updating component previews:
1. Update component HTML in the source files
2. Ensure all component states are represented (default, hover, active, disabled, error)
3. Test with multiple themes to verify variables are applied correctly
4. Build with `npm run build`

The build process generates optimized preview files for the Theme Designer.
