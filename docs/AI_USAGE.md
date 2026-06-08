# AI Agent Usage Guide

This document explains how AI coding assistants (LLMs, coding agents, MCP servers) can discover and use fundamental-styles documentation.

## Overview

fundamental-styles provides **AI-consumable documentation** extracted from Storybook stories. This enables AI agents to generate correct HTML/CSS markup without needing to parse TypeScript or run build tools.

## Documentation Format

### Location
- **Component docs**: `docs/components/` (140+ markdown files)
- **Index**: `docs/components/README.md`
- **Schemas**: `docs/schemas/` (JSON schemas per component)
- **Examples**: `docs/html-examples.json` (complete HTML patterns)
- **Accessibility**: `docs/accessibility.json` (ARIA patterns for 72 components)
- **Design tokens**: `docs/design-tokens.json` (1,522 CSS variables)

### Markdown Structure

Each component has a markdown file with:

```markdown
---
component: fd-button
title: Components/Buttons/Button
category: Components
selector: fd-button
cssFile: button.css
sourcePath: packages/styles/stories/Components/button/button.stories.js
generatedAt: 2026-05-28T15:39:34.902Z
---

# Button

Description...

## Installation
npm install instructions + CSS imports

## Basic Usage
Simple HTML example

## Modifiers
Table of all fd-{component}--{modifier} classes

## States
Table of all is-{state} classes

## Examples
Multiple code snippets from Storybook stories

## Accessibility
ARIA requirements

## Source
Link back to source story file
```

## Discovery Methods

### 1. Package.json Metadata (Recommended)

AI agents should read the `aiDocs` field in `package.json`:

```json
{
  "name": "fundamental-styles",
  "aiDocs": {
    "format": "markdown",
    "location": "./docs/components/",
    "index": "./docs/components/README.md",
    "schemas": "./docs/schemas/",
    "usage": "See docs/AI_USAGE.md for integration guide"
  }
}
```

**How to use:**
1. Parse `node_modules/fundamental-styles/package.json`
2. Check for `aiDocs` field
3. Read `docs/components/README.md` for component list
4. Fetch specific component markdown as needed

### 2. CLAUDE.md (Claude Code Specific)

For Claude Code users, the root `CLAUDE.md` file contains:
- Quick reference table (I need a... → component)
- Common patterns
- Direct links to `docs/components/`

**Usage**: Claude Code automatically loads `CLAUDE.md` as project instructions.

### 3. Direct File Access

Component docs are predictable and can be loaded directly:

```
docs/components/{component-name}.md
```

Examples:
- `docs/components/button.md`
- `docs/components/input.md`
- `docs/components/table.md`

**Naming convention**: Remove `fd-` prefix from selector.
- `fd-button` → `button.md`
- `fd-input-group` → `input-group.md`

## Integration Examples

### Example 1: Claude Code Agent

```markdown
<!-- In your project's CLAUDE.md -->

# Project Name

## Component Library

We use fundamental-styles for UI components.
Component docs: node_modules/fundamental-styles/docs/components/

Common components:
- Buttons: docs/components/button.md
- Forms: docs/components/input.md, docs/components/select.md
- Tables: docs/components/table.md

When generating UI, always reference the component markdown for correct class names.
```

### Example 2: GitHub Copilot

When Copilot encounters:
```html
<button class="fd-
```

It should:
1. Check if `fundamental-styles` is installed
2. Read `node_modules/fundamental-styles/package.json` → `aiDocs.location`
3. Load `docs/components/button.md`
4. Suggest completions from the "Modifiers" table

### Example 3: Cursor AI

User: "@fundamental-styles show me all button variants"

Cursor:
1. Searches workspace for `fundamental-styles`
2. Finds `node_modules/fundamental-styles/docs/components/button.md`
3. Parses markdown, extracts "Modifiers" section
4. Displays table with code snippets

### Example 4: MCP Server (Advanced)

A dedicated MCP server can expose fundamental-styles via tools:

```typescript
// fundamental-styles-mcp
{
  "tools": [
    {
      "name": "search_component",
      "description": "Search for components by keyword",
      "inputSchema": {
        "type": "object",
        "properties": {
          "query": { "type": "string" }
        }
      }
    },
    {
      "name": "get_component_docs",
      "description": "Get full markdown for a component",
      "inputSchema": {
        "type": "object",
        "properties": {
          "component": { "type": "string" }
        }
      }
    }
  ]
}
```

**Implementation**: Parse `docs/components/*.md` files and serve via MCP protocol.

## Best Practices for AI Agents

### 1. Always Read Component Docs First

❌ **Don't guess class names from training data**
```html
<!-- AI guessing from outdated training data -->
<button class="fd-button fd-button--primary">
```

✅ **Read docs first, then generate**
```html
<!-- After reading docs/components/button.md -->
<button class="fd-button fd-button--emphasized">
```

### 2. Include Required CSS Imports

Always include theme + component CSS:
```html
<link href="fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">
<link href="fundamental-styles/dist/button.css" rel="stylesheet">
```

### 3. Use Frontmatter Metadata

Each markdown file has frontmatter with:
- `selector`: Base CSS class (e.g., `fd-button`)
- `cssFile`: Required CSS file (e.g., `button.css`)
- `category`: Component category (Components, BTP, Patterns)

Use this to provide accurate suggestions.

### 4. Combine Multiple Sources

For complete context, combine:
1. **Component markdown** (`docs/components/button.md`) - Basic usage
2. **JSON schema** (`docs/schemas/button.json`) - Complete API
3. **HTML examples** (`docs/html-examples.json`) - Full patterns
4. **Accessibility** (`docs/accessibility.json`) - ARIA requirements

### 5. Stay Updated

Documentation is auto-generated from Storybook stories. To get latest:

```bash
# In the fundamental-styles repo
npm run docs:extract
```

This regenerates all `docs/components/*.md` files.

## Common Patterns

### Form with Validation
```html
<!-- Read: docs/components/input.md, form-item.md -->
<div class="fd-form-item">
  <label class="fd-form-label fd-form-label--required" for="email">Email</label>
  <input class="fd-input is-error" id="email" type="email" aria-describedby="email-error">
  <span class="fd-form-message fd-form-message--error" id="email-error">Invalid email</span>
</div>
```

### Data Table with Selection
```html
<!-- Read: docs/components/table.md -->
<table class="fd-table">
  <thead class="fd-table__header">
    <tr class="fd-table__row">
      <th class="fd-table__cell">Name</th>
      <th class="fd-table__cell">Status</th>
    </tr>
  </thead>
  <tbody class="fd-table__body">
    <tr class="fd-table__row is-selected">
      <td class="fd-table__cell">Selected Item</td>
      <td class="fd-table__cell">Active</td>
    </tr>
  </tbody>
</table>
```

### Modal Dialog
```html
<!-- Read: docs/components/dialog.md, bar.md -->
<div class="fd-dialog fd-dialog--active">
  <div class="fd-dialog__content">
    <header class="fd-dialog__header fd-bar fd-bar--header">
      <div class="fd-bar__left">
        <h3 class="fd-title fd-title--h5">Dialog Title</h3>
      </div>
    </header>
    <div class="fd-dialog__body">Content</div>
    <footer class="fd-dialog__footer fd-bar fd-bar--footer">
      <button class="fd-button fd-button--emphasized">Save</button>
    </footer>
  </div>
</div>
```

## Troubleshooting

### "Component not found"

**Problem**: AI can't find component docs

**Solutions**:
1. Check if `fundamental-styles` is installed: `ls node_modules/fundamental-styles`
2. Verify docs exist: `ls node_modules/fundamental-styles/docs/components/`
3. Check package.json has `aiDocs` field

### "Class names don't match CSS"

**Problem**: Generated HTML uses wrong classes

**Solutions**:
1. Ensure docs are up-to-date: `npm run docs:extract`
2. Cross-reference with `docs/schemas/{component}.json`
3. Check CSS file exists in `dist/` folder

### "Missing accessibility attributes"

**Problem**: Generated HTML lacks ARIA attributes

**Solutions**:
1. Read `docs/accessibility.json` for component
2. Check "Accessibility" section in component markdown
3. Refer to HTML examples in `docs/html-examples.json`

## Maintenance

### Regenerating Documentation

After updating Storybook stories:

```bash
npm run docs:extract
```

This:
1. Scans all `packages/*/stories/**/*.stories.js` files
2. Extracts HTML templates and descriptions
3. Generates `docs/components/*.md` for each component
4. Creates `docs/components/README.md` index

### Validation

Check generated docs are correct:

```bash
npm run test:ai-docs
```

This validates:
- Markdown files match actual CSS classes in `dist/`
- All components have documentation
- Frontmatter is valid

### CI/CD Integration

Add to your GitHub Actions workflow:

```yaml
- name: Generate AI docs
  run: npm run docs:extract

- name: Commit updated docs
  run: |
    git add docs/components/
    git commit -m "chore: update AI documentation [skip ci]" || true
```

## Contributing

### Adding New Components

When creating a new component story:

1. **Write the `.stories.js` file** with descriptive text
2. **Include HTML examples** in `.example.html` files
3. **Run extraction**: `npm run docs:extract`
4. **Verify output**: Check `docs/components/{component}.md`

### Improving Extraction

The extraction script is at `scripts/extract-docs.js`.

To improve it:
1. Parse additional metadata from stories
2. Better HTML cleanup (remove doc-specific wrappers)
3. Extract modifier descriptions from JSDoc comments
4. Add schema validation

### Testing with AI Agents

To test if AI can use the docs:

1. **Claude Code**: Add component to a test project, ask Claude to generate markup
2. **Copilot**: Type `<button class="fd-` and check suggestions
3. **Cursor**: Use `@fundamental-styles` and ask questions

## FAQ

**Q: Do I need to run Storybook to use these docs?**  
A: No. The markdown files are static and can be read directly.

**Q: How often should I regenerate docs?**  
A: After any changes to `.stories.js` files. Consider adding to pre-commit hook.

**Q: Can I use this with other AI tools?**  
A: Yes! The markdown format is universal. Any tool that can read files can use it.

**Q: What if my AI agent doesn't support package.json `aiDocs`?**  
A: Fall back to reading `CLAUDE.md` or directly accessing `docs/components/`.

**Q: Are there TypeScript types for components?**  
A: fundamental-styles is CSS-only (no JS). Check `docs/schemas/*.json` for structure.

## Resources

- **Live examples**: https://sap.github.io/fundamental-styles/
- **GitHub**: https://github.com/SAP/fundamental-styles
- **NPM**: https://www.npmjs.com/package/fundamental-styles
- **Design Guidelines**: https://experience.sap.com/fiori-design-web/

## Support

For AI integration questions:
- Open an issue: https://github.com/SAP/fundamental-styles/issues
- Tag with: `ai-documentation`

For component usage questions:
- See Storybook examples
- Check component markdown files
- Read CLAUDE.md quick reference
