# fundamental-styles agent guide

This is a framework-independent CSS library. Read [CLAUDE.md](CLAUDE.md) for component conventions, documentation sources and package layout. Component SCSS lives in `packages/*/src`; Storybook examples live in `packages/*/stories`. Use design tokens, BEM classes, logical properties and the existing component patterns.

## Codebase exploration with Graphify

Use the local graph to locate code, style dependencies and examples before broad source searches. The repository skill is [.claude/skills/graphify/SKILL.md](.claude/skills/graphify/SKILL.md); human setup is [docs/GRAPHIFY.md](docs/GRAPHIFY.md).

- Check freshness with the skill's build command plus --check. If the CLI and dependencies are installed, build a missing or stale graph with node .claude/skills/graphify/scripts/build.mjs.
- Start with graphify query "question" --budget 1200. For a known class, mixin or file, add --seed "exact name". Use graphify path for relationships and graphify affected with a relation filter for dependents.
- Read the source files and lines returned by the graph before changing code or making factual claims. The graph indexes source relationships; it does not prove Sass resolution, rendered layout or accessibility.
- If Graphify is unavailable, a query has no match, or a result is ambiguous, narrow once using a precise name or returned ID, then use targeted rg and source reads as needed. Continue the task and report the gap.
- Refresh after source changes with the repository build command. Plain graphify update . and automatic Graphify Git hooks do not run the SCSS/HTML adapter.
- Keep graphify-out/ local and ignored. Build and refresh are local and need no model, API key, MCP server or Git hooks.

For HTML/CSS generation, use docs/components and the existing component guidance skills. For visual changes, verify the affected Storybook examples in a browser.
