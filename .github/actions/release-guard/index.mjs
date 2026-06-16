import { execSync } from 'child_process';

/**
 * Check whether a git tag exists in the given repo directory (defaults to cwd).
 * Works on local tags — the CI workflow uses this after a fresh fetch so local
 * tags reflect remote state.
 *
 * @param {string} tag - e.g. "v0.41.8-rc.5"
 * @param {string} cwd - repo root (defaults to process.cwd())
 * @returns {boolean}
 */
export function checkTagExists(tag, cwd = process.cwd()) {
    try {
        const tags = execSync('git tag -l', { cwd, stdio: ['pipe', 'pipe', 'pipe'] })
            .toString()
            .split('\n')
            .map(t => t.trim())
            .filter(Boolean);
        return tags.includes(tag);
    } catch {
        return false;
    }
}

/**
 * Simulate an npm publish operation with idempotency.
 * Used in tests to verify the publish loop skips already-published versions.
 *
 * @param {string} packageName
 * @param {string} version
 * @param {Set<string>} registry - mutable set tracking published "name@version" entries
 * @returns {{ published: boolean, error: string|null }}
 */
export function simulateNpmPublish(packageName, version, registry) {
    const key = `${packageName}@${version}`;
    if (registry.has(key)) {
        return { published: false, error: null };
    }
    registry.add(key);
    return { published: true, error: null };
}
