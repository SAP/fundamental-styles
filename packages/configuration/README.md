# Configuration

**Internal Package** - For fundamental-styles contributors and maintainers.

This package contains the centralized configuration for the Storybook documentation site. It manages the metadata and settings that power the interactive component catalog.

## What's Inside

- **Package definitions** - Metadata for all publishable packages (fundamental-styles, common-css, cx, theming-preview)
- **Theme configurations** - Available theme options and their file paths
- **Version management** - Historical version data for the version switcher in documentation
- **Storybook UI settings** - Package selector configuration and navigation structure

## Usage

This package is consumed internally by:
- `@fundamental-styles/storybook` - Main Storybook configuration
- `@fundamental-styles/doc-ui` - Documentation UI components (package selector, version switcher)

The configuration is imported at build time to generate the documentation site structure and enable theme switching in the live examples.

## For Contributors

When adding a new package or theme:
1. Update `src/lib/packages.ts` with package metadata
2. If adding a theme, update the theme definitions in the package config
3. Run `npm start` to verify the changes appear in Storybook

This package is not published to npm - it's internal build tooling only.
