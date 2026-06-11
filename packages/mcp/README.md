# MCP Server

MCP (Model Context Protocol) server that exposes [fundamental-styles](https://github.com/SAP/fundamental-styles) CSS component metadata to AI coding assistants.

## Quick Start

### With Claude Code

**Option 1: Using claude mcp add**

```bash
# Install for current directory only (default: --scope local)
claude mcp add fundamental-styles -- npx -y @fundamental-styles/mcp

# Or install a specific version
claude mcp add fundamental-styles -- npx -y @fundamental-styles/mcp@0.41.7-rc.3

# Make it available across ALL projects (user-level)
claude mcp add --scope user fundamental-styles -- npx -y @fundamental-styles/mcp

# Make it available for current project (project-level)
claude mcp add --scope project fundamental-styles -- npx -y @fundamental-styles/mcp
```

**Scope levels:**
- `local` (default): Adds to `.claude/mcp.json` in current directory
- `user`: Adds to `~/.claude/mcp.json` - available in all projects for your user account
- `project`: Adds to `.claude/mcp.json` in the project root (if in a git repo)

**Option 2: Manual configuration**

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

### MCP Inspector

The [MCP Inspector](https://github.com/modelcontextprotocol/inspector) is a web UI for testing MCP servers interactively:

```bash
# Start the inspector (from the repo root)
npx @modelcontextprotocol/inspector npx -y @fundamental-styles/mcp
```

This opens a browser UI where you can:
- Browse all 13 available tools
- Send test requests with custom parameters
- View formatted JSON responses
- Debug tool behavior without an AI client

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
| `get_component_markdown` | Complete markdown docs with all HTML examples and variants |
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

"Show me all button examples with modifiers"
  → get_component_markdown with component "button"

"Get just the HTML examples for input fields"
  → get_component_markdown with component "input", examplesOnly: true

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
