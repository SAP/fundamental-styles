#!/usr/bin/env node

/**
 * Copy release-time-generated data into the built MCP package.
 *
 * `docs/component-catalog.json` and `docs/schemas/` are gitignored (they are
 * regenerated at release time by `generate:ai-metadata`, see .gitignore). Nx's
 * `@nx/js:tsc` asset copier skips gitignored files, so the `docs/*.json` asset
 * glob in project.json silently drops them — which is exactly how the package
 * shipped with an empty catalog (issue #6420). This step copies them in
 * explicitly, bypassing the gitignore-aware globber, and runs after `build-tsc`.
 *
 * It is wired into `mcp:build` so local, `build`, and `build:prod` runs all get
 * the data — not just CI. If the generated source is absent (a plain dev build
 * where metadata hasn't been generated) it warns and exits 0 so unrelated local
 * builds aren't blocked; the authoritative publish gate lives in the release
 * workflow. When the source IS present, a build-time guard fails the build
 * rather than ship an empty catalog.
 */

import { existsSync, mkdirSync, copyFileSync, readdirSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
// packages/mcp/scripts -> repo root
const repoRoot = resolve(scriptDir, '..', '..', '..');
const docsDir = join(repoRoot, 'docs');
const distDataDir = join(repoRoot, 'dist', 'packages', 'mcp', 'data');

const CATALOG = 'component-catalog.json';
const srcCatalog = join(docsDir, CATALOG);

if (!existsSync(srcCatalog)) {
    console.warn(
        `[mcp build] ⚠️  docs/${CATALOG} not found — skipping generated-asset copy.\n` +
            `             Run "yarn generate:ai-metadata" before building a publishable MCP package.`
    );
    process.exit(0);
}

mkdirSync(distDataDir, { recursive: true });
copyFileSync(srcCatalog, join(distDataDir, CATALOG));

// Component JSON schemas live under docs/schemas/ and are gitignored too.
const srcSchemasDir = join(docsDir, 'schemas');
let schemaCount = 0;
if (existsSync(srcSchemasDir)) {
    const destSchemasDir = join(distDataDir, 'schemas');
    mkdirSync(destSchemasDir, { recursive: true });
    for (const file of readdirSync(srcSchemasDir)) {
        if (file.endsWith('.schema.json')) {
            copyFileSync(join(srcSchemasDir, file), join(destSchemasDir, file));
            schemaCount++;
        }
    }
}

// Build-time guard: never ship a catalog that parses to zero components.
const copied = JSON.parse(readFileSync(join(distDataDir, CATALOG), 'utf-8'));
const componentCount = Object.values(copied.packages ?? {}).reduce(
    (total, pkg) => total + (pkg?.components?.length ?? 0),
    0
);

if (componentCount === 0) {
    console.error(
        `[mcp build] ❌ ${CATALOG} was copied but contains 0 components — refusing to ship an empty catalog.`
    );
    process.exit(1);
}

console.log(
    `[mcp build] ✅ Copied ${CATALOG} (${componentCount} components) and ${schemaCount} schemas into dist/packages/mcp/data`
);
