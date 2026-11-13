# Explore the repository with Graphify

Graphify provides a local, searchable map of source relationships and an interactive HTML graph. Use it to find component files, trace Storybook imports, find mixin callers, and locate CSS token users or HTML examples.

## Prerequisites

Graphify is optional contributor tooling. To build and use the local graph, you need:

- Git and the repository's Node.js/Yarn versions, with `yarn install` completed; see the [README](../README.md).
- Python 3.10 or newer. The uv installation command below selects Python 3.10 and can download it if needed.
- [uv](https://docs.astral.sh/uv/getting-started/installation/) (recommended), or an existing pipx installation with Python 3.10+.
- The tested package `graphifyy==0.9.93`, which provides the `graphify` command on your PATH.

Each clone or worktree needs an initial local graph build. No API key or model is required.

## Setup

Install the repository's normal dependencies with yarn install. Install [uv](https://docs.astral.sh/uv/getting-started/installation/) once, then install the tested Graphify release:

```bash
uv tool install --python 3.10 'graphifyy==0.9.93'
graphify --version
```

The Python package is `graphifyy`; the executable is `graphify`. On macOS with Homebrew, install uv with `brew install uv`. If your shell cannot find `graphify`, run `uv tool update-shell` and restart the shell.

If you already use pipx with Python 3.10+, install the same pinned package with `pipx install 'graphifyy==0.9.93'`.

From the repository root, build the graph:

```bash
node .claude/skills/graphify/scripts/build.mjs
```

This uses local extraction and needs no API key or model. Each clone or worktree needs its own build. Graphify is optional contributor tooling; it is not a runtime dependency.

## Questions you can answer

| Question                                    | Command                                                                                 |
| ------------------------------------------- | --------------------------------------------------------------------------------------- |
| Which styles select the button class?       | graphify query "button styles" --seed "fd-button" --context defines_class --budget 1200 |
| Which styles call fd-reset?                 | graphify affected "fd-reset" --relation uses_mixin --depth 1                            |
| Which files reference this CSS token?       | graphify affected "--sapButton_Background" --relation uses_token --depth 1              |
| Which HTML examples use this class?         | graphify affected "fd-button--ghost" --relation uses_class --depth 1                    |
| How does the button story reach its styles? | graphify path "Components/button/button.stories.js" "packages/styles/src/button.scss"   |
| What connects to the button class?          | graphify explain "fd-button"                                                            |

Natural-language queries match graph labels and traverse relationships. An exact --seed helps when keyword matching selects unrelated nodes. If a command lists ambiguous candidates, use a returned ID. If output is truncated, narrow the seed or relation before increasing the budget. No match means the graph did not locate it; use rg and inspect source.

## Browse visually

Open graphify-out/graph.html in your browser. On macOS:

```bash
open graphify-out/graph.html
```

Search for fd-button or fd-reset, select a node, and inspect its connections. The visualization uses JavaScript libraries from a CDN, so the browser needs network access. For a text overview, read graphify-out/GRAPH_REPORT.md. Source files and lines in query output let you verify relationships in your editor.

Community filters use labels based on each group's most connected node and size. These are local navigation labels, not model-generated architectural descriptions.

## Keep it current

After source changes, run the same build command. Check freshness without rebuilding:

```bash
node .claude/skills/graphify/scripts/build.mjs --check
```

Exit 0 means current; exit 1 means missing or stale. build.json records the source hashes, tool version and build time. The build uses a temporary output and replaces the published artifacts after extraction and export succeed, so a failed extraction retains the previous graph. Generated graphify-out/ files are ignored by Git.

Use the repository command for refreshes. Plain graphify update ., watch, and automatic Graphify Git hooks do not run our SCSS/HTML adapter. Git hooks and an MCP server are unnecessary for this setup.

## How agents use it

[AGENTS.md](../AGENTS.md) and [CLAUDE.md](../CLAUDE.md) route codebase exploration through Graphify with a source-search fallback. Claude Code discovers [.claude/skills/graphify/SKILL.md](../.claude/skills/graphify/SKILL.md); Codex discovers the same skill through .agents/skills/graphify. Other agents can follow AGENTS.md or run the CLI commands directly.

## Coverage and limits

Graphify 0.9.93's native extractor handles the supported JavaScript/TypeScript and other code files, but skips SCSS and treats HTML as semantic input. The repository adapter adds local relationships from `packages/*/src/**/*.scss`, `packages/*/stories/**/*.example.html`, and their static JavaScript/TypeScript imports. It also links existing component Markdown docs to top-level stylesheets by filename.

The adapter parses SCSS with the repository's existing postcss-scss dependency. It indexes local Sass imports, mixin declarations and calls, CSS custom-property definitions and var() references, and literal or simply interpolated fd/sap selectors. HTML indexing captures literal class attributes and excludes comments. The library's token.scss source is included explicitly even though Graphify's generic sensitive-filename filter skips it.

This is a source map: mixins are grouped by name, simple selector interpolation assumes the default fd/sap namespace, and dynamic Sass, nested selector expansion, module scope and computed HTML classes are not fully evaluated. Source relationships do not establish CSS cascade, visual correctness, accessibility or complete runtime impact. Verify changes against source and Storybook.

The default build does not use semantic extraction, read images or send repository content to a model. Generated metadata is excluded by .graphifyignore. For documentation content, use docs/components and the existing component guidance skills.

To verify adapter changes:

```bash
node --test .claude/skills/graphify/scripts/verify.mjs
```
