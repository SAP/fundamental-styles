# Utils

**Internal Package** - For fundamental-styles contributors and maintainers.

This package contains shared utility functions, helpers, and common code used across the fundamental-styles monorepo packages and build system.

## What's Inside

- **Build utilities** - Helper functions for the build process (file operations, path resolution)
- **Code generation helpers** - Utilities for generating component boilerplate and documentation
- **Shared types** - Common TypeScript types and interfaces used across multiple packages
- **Testing utilities** - Helper functions for unit tests and visual regression tests
- **String and data transformations** - Parsing, formatting, and manipulation utilities

## Usage

This package is consumed internally by:
- `@fundamental-styles/workspace-plugins` - Custom Nx executors and generators
- `@fundamental-styles/storybook` - Documentation site build process
- Other internal packages that need shared functionality

Import utilities where needed:
```typescript
import { helperFunction } from '@fundamental-styles/utils';
```

## Purpose

Centralizing common utilities prevents code duplication across the monorepo and ensures consistent behavior in build scripts, code generators, and tooling.

## For Contributors

When adding new utilities:
1. Add functions to appropriate files in `src/lib/`
2. Export them from `src/index.ts`
3. Add unit tests if the utility contains complex logic
4. Update this README if adding a significant new category of utilities

This package is not published to npm - it's internal monorepo tooling only.
