# AI Documentation System

Automated extraction, validation, and maintenance of machine-readable documentation for 120+ UI components.

**Status**: Production Ready | **Version**: 1.0.0 | **Updated**: 2026-02-13

## Architecture

```
SOURCE FILES (SCSS, stories, examples)
    ↓
GENERATION (extract classes, relationships, schemas)
    ↓
VALIDATION (27 automated tests)
    ↓
OUTPUT (catalog, schemas, relationships, graph)
    ↓
CI/CD (validate PRs, auto-commit to main)
```

## Scripts

| Script | Lines | Purpose |
|--------|-------|---------|
| generate-ai-metadata.js | 654 | Extract metadata from SCSS/stories, generate schemas |
| generate-relationship-graph.js | 560 | Build relationship graph, generate Mermaid diagram |
| test-ai-documentation.js | 470 | 27 tests validating all outputs |
| categorize-components.js | 239 | Categorize all 120 components |

**Usage**:
```bash
yarn generate:ai-metadata      # Extract metadata, generate schemas
yarn generate:relationships     # Build relationship graph
yarn test:ai-docs              # Run validation tests
```

## Generated Files

| File | Description |
|------|-------------|
| component-catalog.json | 120 components with metadata |
| schemas/*.schema.json | 120 JSON validation schemas |
| component-relationships.json | 307 relationships, analytics |
| component-graph.md | Mermaid visualization |

## Features

**Metadata Extraction**:
- BEM naming: `fd-component`, `fd-component--modifier`, `fd-component__element`, `fd-component__element--modifier`
- 120 components, 512 modifiers, 564 elements, 39 element modifiers
- Smart merging: auto-updates technical fields, preserves manual curations

**Relationship Graph**:
- Types: `imports`, `depends-on`, `related`, `shares-styling`, `similar`
- 307 relationships, 10 hub components, 5.13 avg connections

**CI/CD**:
- PRs: Generate, validate, fail if outdated
- Main: Generate, validate, auto-commit with `[ci skip]`
- Triggers: SCSS, story, or example changes

## Data Structures

**Component Catalog**:
```json
{
  "version": "0.41.0",
  "packages": {
    "fundamental-styles": {
      "components": [{
        "id": "button",
        "baseClass": "fd-button",
        "modifiers": [{"class": "fd-button--emphasized", "description": "..."}],
        "elements": [{"class": "fd-button__text", "modifiers": []}],
        "category": "buttons"
      }]
    }
  }
}
```

**JSON Schema**:
```json
{
  "title": "Button Component",
  "properties": {
    "baseClass": {"const": "fd-button"},
    "modifiers": {"items": {"enum": ["fd-button--emphasized", ...]}}
  }
}
```

**Relationships**:
```json
{
  "components": [{"id": "button", "name": "Button"}],
  "relationships": [{"from": "button", "to": "menu", "type": "related"}]
}
```

## Key Features

**Element Modifiers**: BEM element modifiers (`fd-component__element--modifier`) extracted from SCSS, validated in schemas

**Smart Merging**: Auto-updates `baseClass`, `modifiers`, `elements` | Preserves `category`, `useCases`, `accessibility`, `relatedComponents`

**CI Enforcement**: PRs fail if docs outdated, main branch auto-commits updates

## Maintenance

Fully automated via CI/CD. Manual updates only needed for:
- New component categorization
- Use cases and accessibility info
- Major refactoring

## Documentation

- [AI_DOCUMENTATION_TESTS.md](AI_DOCUMENTATION_TESTS.md) - Test suite
- [FUTURE_ENHANCEMENTS.md](FUTURE_ENHANCEMENTS.md) - Identified gaps and priorities

---

**Maintained by**: Automated CI/CD Pipeline
