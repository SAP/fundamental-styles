# MCP Server

MCP (Model Context Protocol) server that exposes [fundamental-styles](https://github.com/SAP/fundamental-styles) CSS component metadata to AI coding assistants.

## Quick Start

### With Claude Code

```json
// .claude/mcp.json
{
  "mcpServers": {
    "fundamental-styles": {
      "command": "npx",
      "args": ["-y", "@fundamental-styles/mcp"]
    }
  }
}
```

### With Cursor

```json
// .cursor/mcp.json
{
  "mcpServers": {
    "fundamental-styles": {
      "command": "npx",
      "args": ["-y", "@fundamental-styles/mcp"]
    }
  }
}
```

### With VS Code (Copilot)

```json
// .vscode/mcp.json
{
  "servers": {
    "fundamental-styles": {
      "command": "npx",
      "args": ["-y", "@fundamental-styles/mcp"],
      "type": "stdio"
    }
  }
}
```

### Direct invocation

```bash
npx -y @fundamental-styles/mcp
```

The server communicates over **stdio** using the MCP JSON-RPC protocol.

## Tools

| Tool | Description |
|------|-------------|
| `setup_project` | Complete setup instructions for CDN and NPM installations |
| `list_components` | List all CSS components with names, base classes, and categories |
| `search_components` | Keyword search across names, classes, modifiers, descriptions |
| `get_component_guidance` | Get component usage guidance - when to use, when to avoid, best practices |
| `get_css_classes` | Full BEM class hierarchy — block, elements, modifiers, states, variables |
| `get_component_html` | Working HTML examples from 484 story files |
| `get_design_tokens` | Search 1500+ SAP CSS custom properties |
| `get_accessibility_guide` | ARIA roles, attributes, keyboard patterns per component |
| `get_utility_classes` | Browse margin, padding, flex, typography helper classes |
| `recommend_components` | Describe a UI, get matching component recommendations |
| `get_component_relationships` | Dependencies, composition, and alternatives for a component |
| `get_theme_info` | List 12 available SAP themes with CSS import paths |
| `get_migration_guide` | Breaking changes, deprecations, and features between versions |


## Example Queries

```
"List all button-related components"
  → list_components with category "button"

"What CSS classes does the dialog component use?"
  → get_css_classes with component "dialog"

"Show me HTML for a compact table"
  → get_component_html with component "table", variant "compact"

"What broke between 0.40.0 and 0.41.0?"
  → get_migration_guide with from_version "0.40.0", to_version "0.41.0", type "breaking"

"What SAP design tokens are available for background colors?"
  → get_design_tokens with query "background"

"I need to build a login form"
  → recommend_components with description "a login form with validation"

"How do I get started with fundamental-styles?"
  → setup_project with approach "both", theme "sap_horizon"

"Set up fundamental-styles for my React app with dark theme"
  → setup_project with approach "npm", theme "sap_horizon_dark", componentMode "selective", components ["button", "input", "table"]
```


## Contributing

### Prerequisites

- Node.js 18+
- Yarn 4.x (the monorepo uses Yarn workspaces)

### Setup

```bash
# From the repo root
yarn install
```

### Build

```bash
npx nx build mcp
```

This compiles TypeScript and copies data assets (JSON files, HTML examples, CHANGELOG.md) into `dist/packages/mcp/`.

### Run (dev mode)

```bash
npx nx serve mcp
```

Runs the server directly from TypeScript source via `tsx` — no build step needed. Useful for quick iteration.

### Inspect (MCP Inspector UI)

```bash
npx nx inspect mcp
```

Opens the [MCP Inspector](https://github.com/modelcontextprotocol/inspector) — a web UI where you can browse tools, send requests, and see responses interactively. Great for debugging and exploring what the server exposes.

### Test

```bash
npx nx test mcp
```

### Data Quality Scripts

The MCP server includes utility scripts to maintain and improve the quality of component metadata:

#### Validate Data Quality

```bash
npx tsx packages/mcp/src/validate-data.ts
```

Analyzes all data files (`docs/*.json`) and reports quality issues:

- **Component descriptions**: Detects generic/placeholder descriptions
- **HTML examples**: Identifies components without curated examples
- **Design tokens**: Checks for missing `purpose` and `cssUsage` fields
- **Related components**: Finds components with empty relationship lists

**Output includes:**
- Summary by issue type (descriptions, examples, tokens, relationships)
- Summary by severity (errors, warnings, info)
- Overall data quality statistics

**Options:**
- `--detailed`: Show specific issues for each component (first 50 issues)

**Example:**
```bash
npx tsx packages/mcp/src/validate-data.ts --detailed

# Sample output:
# 📝 Checking component descriptions...
#    Found 14 generic descriptions (12%)
# 
# 📄 Checking HTML examples...
#    84 components have examples, 35 missing (29%)
# 
# 🎨 Checking design tokens...
#    Total tokens: 1485
#    Tokens without purpose: 1485 (99%)
```

**Use this when:**
- Adding new components to the catalog
- After bulk updates to data files
- Before publishing a new version
- Investigating why component info seems incomplete

#### Update Component Descriptions

```bash
npx tsx packages/mcp/src/update-descriptions.ts
```

Automatically enhances generic component descriptions by pulling better descriptions from `component-guidance.json`:

- Detects components with placeholder descriptions (e.g., "Component component", "badge", descriptions under 20 chars)
- Looks up detailed guidance for each component
- Replaces generic descriptions with meaningful ones from guidance data
- Saves updated catalog back to `docs/component-catalog.json`

**Example:**
```bash
npx tsx packages/mcp/src/update-descriptions.ts

# Sample output:
# ✅ badge
#    OLD: "badge"
#    NEW: "Badge - Display small, status-driven labels..."
# 
# ✅ button-split
#    OLD: "button-split component"
#    NEW: "Button Split - A button that splits into primary action and dropdown menu..."
# 
# ✨ Updated 12 of 119 component descriptions
```

**Use this when:**
- Adding new components that need better descriptions
- After updating component-guidance.json with new documentation
- Preparing data for a release
- Improving search relevance for recommend_components tool

**Workflow:**

1. Run validation to identify issues:
   ```bash
   npx tsx packages/mcp/src/validate-data.ts --detailed
   ```

2. Update descriptions from guidance:
   ```bash
   npx tsx packages/mcp/src/update-descriptions.ts
   ```

3. Validate again to verify improvements:
   ```bash
   npx tsx packages/mcp/src/validate-data.ts
   ```

4. Manually address remaining issues (add guidance docs, generate examples, etc.)

**Note:** These scripts modify source data files in `docs/`. Always review changes before committing.
