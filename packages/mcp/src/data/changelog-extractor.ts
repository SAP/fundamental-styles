import { readFileSync } from 'fs';
import { resolve } from 'path';

export interface ChangelogEntry {
    version: string;
    date: string | null;
    type: 'breaking' | 'feature' | 'fix' | 'deprecation';
    scope: string | null;
    description: string;
    issueUrl: string | null;
}

/** Resolve CHANGELOG.md path — works from source and dist. */
function resolveChangelogPath(): string {
    // dist: dist/packages/mcp/src/data/ → need to go up to repo root
    const distPath = resolve(__dirname, '..', '..', 'data', 'CHANGELOG.md');
    const srcPath = resolve(__dirname, '..', '..', '..', '..', 'CHANGELOG.md');
    try {
        readFileSync(distPath, 'utf-8');
        return distPath;
    } catch {
        return srcPath;
    }
}

export function extractChangelog(): ChangelogEntry[] {
    let content: string;
    try {
        content = readFileSync(resolveChangelogPath(), 'utf-8');
    } catch {
        return [];
    }

    const entries: ChangelogEntry[] = [];
    const lines = content.split('\n');

    let currentVersion = '';
    let currentDate: string | null = null;
    let currentSection: 'features' | 'fixes' | 'breaking' | null = null;

    for (const line of lines) {
        // Match version headers: ## [0.41.1-rc.7](...) (2026-04-07) or # [0.41.0](...)
        const versionMatch = line.match(/^#{1,2}\s+\[([^\]]+)\](?:\([^)]*\))?\s*(?:\((\d{4}-\d{2}-\d{2})\))?/);
        if (versionMatch) {
            currentVersion = versionMatch[1];
            currentDate = versionMatch[2] || null;
            currentSection = null;
            continue;
        }

        // Match section headers
        if (line.match(/^###\s+BREAKING\s+CHANGES?/i)) {
            currentSection = 'breaking';
            continue;
        }
        if (line.match(/^###\s+Features?/i)) {
            currentSection = 'features';
            continue;
        }
        if (line.match(/^###\s+Bug\s+Fixes?/i)) {
            currentSection = 'fixes';
            continue;
        }

        // Skip version-bump-only or empty entries
        if (!currentVersion || !currentSection) continue;

        // Match entry lines: - **scope:** description (#issue) (commit)
        // Format is **scope:** (colon inside bold markers)
        const entryMatch = line.match(/^-\s+\*\*([^*:]+):\*\*\s+(.+)/);
        if (entryMatch) {
            const scope = entryMatch[1].trim();
            let description = entryMatch[2].trim();

            // Extract issue URL if present
            const issueMatch = description.match(/\[#(\d+)\]\(([^)]+)\)/);
            const issueUrl = issueMatch ? issueMatch[2] : null;

            // Clean description: remove commit hash links
            description = description.replace(/\s*\(\[[a-f0-9]+\]\([^)]+\)\)\s*$/, '').trim();

            let type: ChangelogEntry['type'];
            if (currentSection === 'breaking') {
                type = 'breaking';
            } else if (currentSection === 'features') {
                type = 'feature';
            } else {
                type = 'fix';
            }

            // Check for deprecation in description
            if (description.toLowerCase().includes('deprecat')) {
                type = 'deprecation';
            }

            entries.push({
                version: currentVersion,
                date: currentDate,
                type,
                scope,
                description,
                issueUrl
            });
            continue;
        }

        // Also match unscoped breaking change lines: - description
        if (currentSection === 'breaking') {
            const unscopedMatch = line.match(/^-\s+(.+)/);
            if (unscopedMatch) {
                const description = unscopedMatch[1].trim();
                // Try to extract scope from description
                const scopeMatch = description.match(/^\*\*([^*:]+):\*\*\s+(.+)/);
                entries.push({
                    version: currentVersion,
                    date: currentDate,
                    type: 'breaking',
                    scope: scopeMatch ? scopeMatch[1].trim() : null,
                    description: scopeMatch ? scopeMatch[2].trim() : description,
                    issueUrl: null
                });
            }
        }
    }

    return entries;
}

/** Simple version comparison for semver with RC support. */
export function compareVersions(a: string, b: string): number {
    const [aBase, aPre] = a.split('-');
    const [bBase, bPre] = b.split('-');
    const pa = aBase.split('.').map(Number);
    const pb = bBase.split('.').map(Number);
    for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
        const diff = (pa[i] ?? 0) - (pb[i] ?? 0);
        if (diff !== 0) return diff;
    }
    // Same base version: stable > RC
    if (!aPre && bPre) return 1;
    if (aPre && !bPre) return -1;
    if (aPre && bPre) {
        const aRc = parseInt(aPre.replace(/\D+/g, ''), 10) || 0;
        const bRc = parseInt(bPre.replace(/\D+/g, ''), 10) || 0;
        return aRc - bRc;
    }
    return 0;
}

/** Get base version (strip RC suffix). */
export function baseVersion(version: string): string {
    return version.replace(/-.*$/, '');
}
