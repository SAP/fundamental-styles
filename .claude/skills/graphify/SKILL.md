---
name: graphify
description: Explore fundamental-styles code, Sass imports and mixins, CSS tokens, and Storybook HTML examples with the local Graphify graph. Use for codebase navigation, relationship queries, impact analysis, or building and refreshing this repository's graph.
---

# Graphify for fundamental-styles

Run commands from the repository root. Setup and limitations: [docs/GRAPHIFY.md](../../../docs/GRAPHIFY.md).

## Build or refresh

Prerequisites: Git, the repository's Node.js/Yarn versions with yarn install completed, and graphify on PATH. The CLI requires Python 3.10+; the setup guide uses uv to provision it. See [Graphify prerequisites](../../../docs/GRAPHIFY.md#prerequisites) for installation and PATH setup.

Check the CLI with graphify --version. The adapter is tested with graphifyy 0.9.93. If it is absent, follow the human setup guide; do not install globally without the session's authorization.

Run node .claude/skills/graphify/scripts/build.mjs --check. Exit 1 means missing or stale; build with node .claude/skills/graphify/scripts/build.mjs. This combines local AST extraction with the existing postcss-scss parser and literal HTML class indexing. It writes only ignored graphify-out/ artifacts and makes no model calls.

Refresh with this same command after edits. Native graphify update, watch and Git hooks omit the adapter. A failed build leaves the previous graph available; report the failure and use source reads until rebuilt.

## Query

- Start with graphify query "question" --budget 1200. Prefer an exact class, mixin or path; add --seed "exact name" to avoid unrelated keyword matches.
- Use graphify path "Components/button/button.stories.js" "packages/styles/src/button.scss" to trace imports.
- Use graphify affected "fd-reset" --relation uses_mixin --depth 1 for mixin callers. Use --relation uses_token for CSS token users and --relation uses_class for HTML examples. Broad hubs can return many files; narrow by the task's component.
- Use graphify explain "fd-button" for a small neighborhood. Read GRAPH_REPORT.md only for a broad architecture overview.
- Exit 3 means ambiguous: choose a returned exact label or ID. Exit 4 means no match: use targeted rg and source reads. Do not repeatedly rebuild to compensate for an unsupported query.

Read located source and lines to verify a result. Sass symbols are connected by name, selectors use the default fd/sap namespace, and HTML indexing covers literal class attributes in .example.html files. These are navigation clues, not compiler resolution or browser evidence. If exploration is delegated, include these query and fallback rules in the delegate's instructions.
