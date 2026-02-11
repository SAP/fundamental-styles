import { Bumper } from 'conventional-recommended-bump';
import { loadPreset } from 'conventional-changelog-preset-loader';
import { execSync } from 'child_process';
import { writeFileSync, mkdtempSync, rmSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';

const tempDir = mkdtempSync(join(tmpdir(), 'test-bump-'));
try {
  // Initialize git repo
  execSync('git init', { cwd: tempDir, stdio: 'pipe' });
  execSync('git config user.email "test@test.com"', { cwd: tempDir, stdio: 'pipe' });
  execSync('git config user.name "Test User"', { cwd: tempDir, stdio: 'pipe' });
  
  writeFileSync(join(tempDir, 'package.json'), JSON.stringify({ version: '0.41.0-rc.103' }));
  execSync('git add .', { cwd: tempDir, stdio: 'pipe' });
  execSync('git commit -m "initial"', { cwd: tempDir, stdio: 'pipe' });
  execSync('git tag v0.41.0-rc.103', { cwd: tempDir, stdio: 'pipe' });
  
  writeFileSync(join(tempDir, 'test.txt'), 'test');
  execSync('git add .', { cwd: tempDir, stdio: 'pipe' });
  const commitMsgFile = join(tempDir, 'commit-msg.txt');
  writeFileSync(commitMsgFile, `fix(styles): update\n\nBREAKING CHANGE: test`);
  execSync(`git commit -F "${commitMsgFile}"`, { cwd: tempDir, stdio: 'pipe' });
  
  const config = await loadPreset({
    name: 'conventionalcommits',
    preMajor: true
  });
  
  console.log('Config structure:', Object.keys(config));
  console.log('Has whatBump at root?', 'whatBump' in config);
  console.log('Has recommendedBumpOpts?', 'recommendedBumpOpts' in config);
  
  const bumper = new Bumper(tempDir)
    .config(config.recommendedBumpOpts)
    .tag({ prefix: 'v' });
  
  const release = await bumper.bump();
  console.log('Release type:', release.releaseType);
  console.log('Reason:', release.reason);
} finally {
  rmSync(tempDir, { recursive: true, force: true });
}
