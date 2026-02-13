# AI Documentation Test Suite

27 automated tests validating generated documentation.

## Usage

```bash
yarn generate:ai-metadata && yarn generate:relationships
yarn test:ai-docs
```

## Test Coverage

| Category | Tests | Validates |
|----------|-------|-----------|
| Component Catalog | 10 | JSON structure, required fields, 120+ components, `fd-*` naming, no duplicates |
| JSON Schemas | 3 | All 120 schemas exist, valid JSON, proper enums |
| Relationships | 6 | Valid structure, matching counts, no broken references |
| Element Modifiers | 2 | BEM convention, 39 modifiers across 16 components |
| Data Consistency | 3 | Recent updates, version matching |

**Total**: 27 tests, 122 files validated, 100% pass rate

## Troubleshooting

```bash
# Missing schema
Error: Schema missing for component: new-component
Fix:   yarn generate:ai-metadata

# Outdated relationships
Error: Component count mismatch
Fix:   yarn generate:relationships

# Invalid reference
Error: Relationship references unknown component: tooltip
Fix:   Edit docs/component-catalog.json (remove invalid reference)
       yarn generate:relationships

# Invalid base class
Error: Component has invalid baseClass: null--contrast
Fix:   Bug in SCSS parsing - check generate-ai-metadata.js
```

## CI/CD

Tests run in `.github/workflows/ai-documentation.yml` before checking for changes. Exit code 1 fails CI.

---

**Script**: [test-ai-documentation.js](../scripts/test-ai-documentation.js)
