# Doc UI

**Internal Package** - For fundamental-styles contributors and maintainers.

This package contains the React UI components, contexts, hooks, and TypeScript types that power the fundamental-styles documentation site (https://sap.github.io/fundamental-styles/).

## What's Inside

### Components
- **Package Selector** - Dropdown to switch between different package docs (fundamental-styles, common-css, cx)
- **Version Switcher** - Dropdown to navigate between different published versions
- **Theme Switcher** - Control for changing between available SAP themes (Horizon, Quartz, etc.)
- **Header** - Documentation site navigation and branding
- **Layout Components** - Page structure and responsive containers

### Contexts & Hooks
- React contexts for managing global state (selected package, theme, version)
- Custom hooks for accessing and updating documentation settings
- Type definitions for component props and configuration

## Usage

This package is consumed by `@fundamental-styles/storybook` to build the documentation site. It provides the interactive UI layer on top of Storybook's component stories.

## For Contributors

When modifying the documentation site UI:
1. Update components in `src/lib/components/`
2. Run `npm start` to see changes in the live Storybook instance
3. Ensure theme switching and package navigation still work correctly

This package is not published to npm - it's internal documentation tooling only.
