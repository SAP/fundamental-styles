# Automation Scripts

Scripts for maintaining AI-friendly documentation.

## Scripts

### generate-ai-metadata.js

Extracts component metadata from SCSS/stories, generates JSON schemas.

**Usage**:
```bash
yarn generate:ai-metadata
node scripts/generate-ai-metadata.js --verbose
```

**Updates**:
- `docs/component-catalog.json` - Auto-updates technical fields, preserves manual curations
- `docs/schemas/*.schema.json` - Generates JSON schema per component

**Preserves** (manual): `category`, `subcategory`, `useCases`, `avoidWhen`, `accessibility`, `relatedComponents`

**Run after**:
- Adding/modifying components
- Updating SCSS or stories
- Before releases
- In CI/CD pipeline

### generate-relationship-graph.js

Analyzes dependencies and relationships, creates Mermaid diagram.

**Usage**:
```bash
yarn generate:relationships
node scripts/generate-relationship-graph.js --verbose
```

**Generates**:
- `docs/component-relationships.json` - Graph data with analytics
- `docs/component-graph.md` - Mermaid visualization

**Includes**: Direct dependencies, related components, shared styling, similarity groups

**Run after**:
- Running `generate-ai-metadata.js`
- Adding/modifying components
- Before releases

### test-ai-documentation.js

Validates generated documentation (27 tests).

**Usage**:
```bash
yarn test:ai-docs
```

**Validates**: Catalog structure, schemas, relationships, element modifiers, consistency

See [AI_DOCUMENTATION_TESTS.md](../docs/AI_DOCUMENTATION_TESTS.md) for details.

### categorize-components.js

Categorizes all 120 components into 22 categories.

**Usage**:
```bash
node scripts/categorize-components.js
```

## CI/CD Integration

GitHub Actions workflow (`.github/workflows/ai-documentation.yml`):

**Pull Requests**: Generate, validate, fail if outdated
**Main Branch**: Generate, auto-commit with `[ci skip]`

**To fix outdated docs in PR**:
```bash
yarn generate:ai-metadata && yarn generate:relationships
git add docs/ && git commit -m "chore: update AI documentation" && git push
```

## Workflows

**Add component**:
```bash
# 1. Create SCSS, stories, examples
# 2. Generate
yarn generate:ai-metadata
# 3. Curate docs/component-catalog.json (category, useCases, accessibility)
# 4. Generate relationships
yarn generate:relationships
# 5. Test and commit
yarn test:ai-docs
git add docs/ packages/ && git commit -m "feat: add component"
```

**Modify component**:
```bash
# 1. Edit files
# 2. Update and commit
yarn generate:ai-metadata && yarn generate:relationships && yarn test:ai-docs
git add docs/ && git commit -m "feat: update component"
```

## Git Hooks

Example `.husky/pre-commit`:
```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# Check if component files changed
SCSS_CHANGED=$(git diff --cached --name-only | grep -E "packages/styles/src/.*\.scss$" || true)

if [ -n "$SCSS_CHANGED" ]; then
  echo "Regenerating AI documentation..."
  yarn generate:ai-metadata
  yarn generate:relationships
  git add docs/
fi
```

## Troubleshooting

**Changes not appearing**: Run with `--verbose`, check file paths, verify file doesn't start with `_`

**Manual curations overwritten**: Script preserves manual fields. If issue occurs, restore from git and report bug.

**Dependencies missing**: Run `npm install`

## Documentation

- [AI_DOCUMENTATION_SYSTEM.md](../docs/AI_DOCUMENTATION_SYSTEM.md) - System overview
- [AI_DOCUMENTATION_TESTS.md](../docs/AI_DOCUMENTATION_TESTS.md) - Test suite
- [FUTURE_ENHANCEMENTS.md](../docs/FUTURE_ENHANCEMENTS.md) - Identified gaps

---

**Last Updated**: 2026-02-13
