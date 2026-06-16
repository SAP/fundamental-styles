#!/usr/bin/env node

/**
 * Tests for release-guard helpers.
 *
 * Validates three resilience behaviours:
 *   1. Duplicate tag detection — fails fast if tag already exists locally/remotely
 *   2. Git-before-npm ordering — enforced by workflow step order (asserted below)
 *   3. npm publish idempotency — skips already-published versions without error
 *
 * Run: node .github/actions/release-guard/test-release-guard.mjs
 */

import { execSync } from 'child_process';
import { mkdtempSync, rmSync, writeFileSync, readFileSync } from 'fs';
import { tmpdir } from 'os';
import { join, resolve } from 'path';
import { checkTagExists, simulateNpmPublish } from './index.mjs';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function makeGitRepo(dir) {
    execSync('git init', { cwd: dir, stdio: 'pipe' });
    execSync('git config user.email "test@test.com"', { cwd: dir, stdio: 'pipe' });
    execSync('git config user.name "Test"', { cwd: dir, stdio: 'pipe' });
    writeFileSync(join(dir, 'README.md'), 'init');
    execSync('git add .', { cwd: dir, stdio: 'pipe' });
    execSync('git commit -m "init"', { cwd: dir, stdio: 'pipe' });
}

let passed = 0;
let failed = 0;

function assert(name, condition, detail = '') {
    if (condition) {
        console.log(`   ✅ PASSED: ${name}`);
        passed++;
    } else {
        console.log(`   ❌ FAILED: ${name}${detail ? ' — ' + detail : ''}`);
        failed++;
    }
}

// ---------------------------------------------------------------------------
// Suite 1: checkTagExists
// ---------------------------------------------------------------------------

console.log('\n🧪 Suite 1: checkTagExists\n' + '='.repeat(60));

{
    const dir = mkdtempSync(join(tmpdir(), 'rg-test-'));
    try {
        makeGitRepo(dir);

        assert('returns false when tag does not exist', checkTagExists('v1.2.3', dir) === false);

        execSync('git tag v1.2.3', { cwd: dir, stdio: 'pipe' });

        assert('returns true when tag exists', checkTagExists('v1.2.3', dir) === true);
        assert('returns false for a different tag that does not exist', checkTagExists('v1.2.4', dir) === false);
    } finally {
        rmSync(dir, { recursive: true, force: true });
    }
}

// ---------------------------------------------------------------------------
// Suite 2: simulateNpmPublish (idempotency)
// ---------------------------------------------------------------------------

console.log('\n🧪 Suite 2: simulateNpmPublish idempotency\n' + '='.repeat(60));

{
    const registry = new Set();

    const first = simulateNpmPublish('fundamental-styles', '0.41.8-rc.5', registry);
    assert('first publish succeeds', first.published === true);
    assert('registry contains version after first publish', registry.has('fundamental-styles@0.41.8-rc.5'));

    const second = simulateNpmPublish('fundamental-styles', '0.41.8-rc.5', registry);
    assert('second publish of same version is skipped', second.published === false);
    assert('second publish does not throw', second.error === null);

    const third = simulateNpmPublish('fundamental-styles', '0.41.8-rc.6', registry);
    assert('publish of new version succeeds', third.published === true);
}

// ---------------------------------------------------------------------------
// Suite 3: workflow step ordering contract
// ---------------------------------------------------------------------------

console.log('\n🧪 Suite 3: workflow step ordering\n' + '='.repeat(60));

{
    const workflowPath = resolve('.github/workflows/create-release.yml');
    let workflowYml = '';
    try {
        workflowYml = readFileSync(workflowPath, 'utf8');
    } catch { /* file missing — assertions below will fail */ }

    const pushIdx = workflowYml.indexOf('Push changes');
    const publishIdx = workflowYml.indexOf('Publish packages to NPM');
    const guardIdx = workflowYml.indexOf('Check tag does not already exist');
    const lernaIdx = workflowYml.indexOf('Update using lerna');

    assert('workflow file is readable', workflowYml.length > 0, 'create-release.yml not found');
    assert(
        '"Push changes" step appears before "Publish packages to NPM"',
        pushIdx !== -1 && publishIdx !== -1 && pushIdx < publishIdx,
        `pushIdx=${pushIdx}, publishIdx=${publishIdx}`
    );
    assert('"Check tag does not already exist" step is present', guardIdx !== -1);
    assert(
        'tag guard appears before "Update using lerna"',
        guardIdx !== -1 && lernaIdx !== -1 && guardIdx < lernaIdx,
        `guardIdx=${guardIdx}, lernaIdx=${lernaIdx}`
    );
}

// ---------------------------------------------------------------------------
// Results
// ---------------------------------------------------------------------------

console.log('\n' + '='.repeat(60));
console.log(`\n📊 Results: ${passed} passed, ${failed} failed\n`);

if (failed > 0) process.exit(1);
