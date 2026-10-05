import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const actionPath = fileURLToPath(new URL('./index.mjs', import.meta.url));

const git = (cwd, ...args) => execFileSync('git', args, { cwd, stdio: 'pipe' });

test('generates notes for commits after the previous release', () => {
    const repository = mkdtempSync(join(tmpdir(), 'release-notes-'));
    const outputPath = join(repository, 'github-output');

    try {
        writeFileSync(outputPath, '');
        git(repository, 'init');
        git(repository, 'config', 'user.email', 'test@example.com');
        git(repository, 'config', 'user.name', 'Test User');

        writeFileSync(join(repository, 'lerna.json'), JSON.stringify({ version: '1.0.0' }));
        writeFileSync(
            join(repository, 'package.json'),
            JSON.stringify({ repository: 'https://github.com/SAP/fundamental-styles.git' })
        );
        git(repository, 'add', 'lerna.json', 'package.json');
        git(repository, 'commit', '-m', 'chore: initial release');
        git(repository, 'tag', 'v1.0.0');

        writeFileSync(join(repository, 'component.scss'), '.fd-test {}');
        git(repository, 'add', 'component.scss');
        git(repository, 'commit', '-m', 'fix(styles): restore release notes');

        writeFileSync(join(repository, 'lerna.json'), JSON.stringify({ version: '1.1.0' }));
        git(repository, 'add', 'lerna.json');
        git(repository, 'commit', '-m', 'chore(release): publish 1.1.0');
        git(repository, 'tag', 'v1.1.0');

        execFileSync(process.execPath, [actionPath], {
            cwd: repository,
            env: { ...process.env, GITHUB_OUTPUT: outputPath },
            stdio: 'pipe'
        });

        const output = readFileSync(outputPath, 'utf8');
        assert.match(output, /### Bug Fixes/);
        assert.match(output, /\* \*\*styles:\*\* restore release notes/);
        assert.ok(output.includes('https://github.com/SAP/fundamental-styles/commit/'));
    } finally {
        rmSync(repository, { recursive: true, force: true });
    }
});
