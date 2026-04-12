# @fundamental-styles/mcp

MCP (Model Context Protocol) server that exposes [fundamental-styles](https://github.com/SAP/fundamental-styles) CSS component metadata to AI coding assistants.

Provides 11 tools and 1 resource covering 120+ CSS components, 1500+ design tokens, 484 HTML examples, accessibility guides, utility classes, and migration guidance.

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

| Tool | Description | Key Params |
|------|-------------|------------|
| `list_components` | List all CSS components with names, base classes, and categories | `package`, `category` |
| `search_components` | Keyword search across names, classes, modifiers, descriptions | `query`, `package` |
| `get_css_classes` | Full BEM class hierarchy — block, elements, modifiers, states, variables | `component` |
| `get_component_html` | Working HTML examples from 484 story files | `component`, `variant` |
| `get_design_tokens` | Search 1500+ SAP CSS custom properties | `query`, `category` |
| `get_accessibility_guide` | ARIA roles, attributes, keyboard patterns per component | `component` |
| `get_utility_classes` | Browse margin, padding, flex, typography helper classes | `query`, `category` |
| `recommend_components` | Describe a UI, get matching component recommendations | `description` |
| `get_component_relationships` | Dependencies, composition, and alternatives for a component | `component` |
| `get_theme_info` | List 12 available SAP themes with CSS import paths | `theme` |
| `get_migration_guide` | Breaking changes, deprecations, and features between versions | `component`, `from_version`, `to_version`, `type` |

### Resource

| URI | Description |
|-----|-------------|
| `fundamental-styles://components/catalog` | Full component catalog as JSON |
| `fundamental-styles://docs/ai-component-index` | Curated AI-friendly component overview (Markdown) |
| `fundamental-styles://docs/component-graph` | Component relationship graph (Mermaid diagram) |
| `fundamental-styles://docs/component-use-cases` | Use cases, anti-patterns, and decision guides per component |
| `fundamental-styles://schemas/{componentId}` | Per-component JSON Schema (122 schemas, e.g. `schemas/button`) |

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
```

## Data Sources

The server reads pre-built JSON files from `docs/` and HTML examples from `packages/styles/stories/`:

| Source | Content |
|--------|---------|
| `docs/component-catalog.json` | 120+ components with BEM classes, modifiers, elements |
| `docs/design-tokens.json` | 1,522 CSS custom properties from sap_horizon |
| `docs/accessibility.json` | ARIA patterns for 72 components |
| `docs/modifier-rules.json` | Mutually exclusive modifier validation rules |
| `docs/component-relationships.json` | 307 component relationships |
| `docs/utility-classes.json` | Utility CSS classes from common-css |
| `docs/html-examples.json` | Curated complex HTML patterns |
| `packages/styles/stories/**/*.example.html` | 484 component HTML examples |
| `CHANGELOG.md` | Version history for migration guidance |

All data is bundled into the npm package at build time — no runtime file path dependencies.

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

Runs 61 tests across 4 test files using vitest:

- `tests/server.test.ts` — Tool integration tests (30 tests)
- `tests/load-catalog.test.ts` — Data loading tests (10 tests)
- `tests/load-examples.test.ts` — HTML example loading tests (5 tests)
- `tests/changelog-extractor.test.ts` — Changelog parsing and version comparison tests (16 tests)

### Manual testing

The easiest way to test interactively is with the MCP Inspector:

```bash
npx nx inspect mcp
```

You can also test via raw stdio after building:

```bash
printf '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"test","version":"1.0"}}}\n{"jsonrpc":"2.0","method":"notifications/initialized"}\n{"jsonrpc":"2.0","id":2,"method":"tools/list","params":{}}\n' | node dist/packages/mcp/src/index.js
```

### Updating data

The MCP server reads from `docs/*.json`, which are generated by existing scripts:

```bash
yarn generate:ai-docs
```

This runs `scripts/generate-ai-metadata.js` and related generators. After regenerating, rebuild the MCP package to bundle the updated data:

```bash
yarn generate:ai-docs && npx nx build mcp
```

No new tooling is needed — the existing pipeline handles data generation. When a developer adds or changes a component:

1. They update SCSS + stories as usual
2. `yarn generate:ai-docs` regenerates `docs/*.json`
3. `npx nx build mcp` bundles the updated data
4. Next npm publish includes the latest data

### Project structure

```
packages/mcp/
├── src/
│   ├── index.ts                    # Entry point (#!/usr/bin/env node)
│   ├── server.ts                   # McpServer setup, all 11 tools, resource
│   ├── helpers.ts                  # findComponent, scoreMatch, truncate
│   ├── data/
│   │   ├── load-catalog.ts         # Load & merge docs/*.json at startup
│   │   ├── load-examples.ts        # Load & index stories/**/*.example.html
│   │   └── changelog-extractor.ts  # Parse CHANGELOG.md for migration tool
│   └── types/
│       └── component-metadata.ts   # TypeScript interfaces for all data shapes
├── tests/
│   ├── server.test.ts              # Tool integration tests
│   ├── load-catalog.test.ts        # Data loading tests
│   ├── load-examples.test.ts       # HTML example loading tests
│   └── changelog-extractor.test.ts # Changelog parsing tests
├── project.json                    # Nx build & test config
├── package.json                    # npm package config
├── tsconfig.json                   # TypeScript config
└── tsconfig.lib.json               # TypeScript build config
```

### Adding a new tool

1. Define the tool in `src/server.ts` using `server.tool(name, description, zodSchema, handler)`
2. Add data loading if needed (new file in `src/data/`)
3. Add tests in `tests/`
4. Rebuild and verify: `npx nx build mcp && npx nx test mcp`

## License

Apache-2.0
