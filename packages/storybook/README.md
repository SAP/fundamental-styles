# Storybook

**Internal Package** - For fundamental-styles contributors and maintainers.

This package contains the Storybook configuration and setup for the fundamental-styles interactive documentation site (https://sap.github.io/fundamental-styles/).

## What's Inside

- **Storybook configuration** - Main Storybook setup, addons, and build settings
- **Decorators** - Global decorators that wrap component stories (theme provider, layout containers)
- **Story interfaces** - TypeScript types and utilities for writing component stories
- **Preview configuration** - Settings for the Storybook preview pane (themes, viewport sizes, backgrounds)
- **Manager configuration** - Customizations for the Storybook navigation sidebar and controls

## Purpose

This package orchestrates the entire documentation site by:
1. Configuring Storybook's build system (Vite for preview, ESBuild for manager)
2. Integrating `@fundamental-styles/doc-ui` components into the Storybook UI
3. Loading package metadata from `@fundamental-styles/configuration`
4. Setting up theme switching and live component previews
5. Generating the static documentation site for deployment

## Usage

Run the documentation site locally:
```bash
npm start
```

Build the static site for deployment:
```bash
npm run build
```

## For Contributors

When adding new Storybook functionality:
1. Update `.storybook/` configuration files as needed
2. Add new decorators in `src/lib/decorators/` if required
3. Test theme switching works for all components
4. Verify the build completes successfully with `npm run build`

This package is not published to npm - it's the internal documentation build system.
