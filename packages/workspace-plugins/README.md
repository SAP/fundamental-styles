# Workspace Plugins

**Internal Package** - For fundamental-styles contributors and maintainers.

This package contains custom Nx workspace plugins (executors and generators) that automate build processes, code generation, and project management tasks for the fundamental-styles monorepo.

## What's Inside

### Executors

Custom Nx executors that run build and maintenance tasks:

- **`build`** - Builds packages and syncs versions across the monorepo. Used in CI/CD pipelines and local development.
- **`visual-stories`** - Generates visual regression test stories for Chromatic integration. Ensures UI changes are reviewed before merging.
- **`build-theming-preview`** - Specialized builder for the theming-preview package that generates Theme Designer-compatible output.
- **`sync-components`** - Synchronizes component metadata and documentation across packages.

### Generators

Code generators that scaffold new files and packages:

- **`create-package`** - Generates a new package with proper structure, configuration, and boilerplate.

## Usage

### Running Executors

Executors are invoked via Nx:

```bash
# Build a specific package
nx build fundamental-styles

# Generate visual stories for regression testing
nx visual-stories fundamental-styles

# Build theming preview package
nx build-theming-preview theming-preview
```

### Running Generators

Generators create new code from templates:

```bash
# Create a new package
nx generate @fundamental-styles/workspace-plugins:create-package my-package
```

## Purpose

These custom plugins automate repetitive tasks and enforce consistency across the monorepo:
- Standardized build processes for all packages
- Automated version synchronization
- Consistent package structure via generators
- Integration with visual regression testing tools

## For Contributors

When modifying workspace plugins:
1. Update executor/generator code in `src/executors/` or `src/generators/`
2. Update the schema.json file if adding new options
3. Test locally by running the executor/generator on an actual package
4. Update this README if adding new executors or generators

Refer to individual executor/generator README files in their directories for detailed documentation.

This package is not published to npm - it's internal monorepo tooling only.
