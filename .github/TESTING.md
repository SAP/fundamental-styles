# GitHub Actions Testing Guide

## Version Bump Tests

### Quick Start

Run tests from project root:

```bash
node .github/actions/bump-version/test-bump-version.mjs
```

### What Gets Tested

The test suite validates version bumping logic:

- **0.x versions**: Breaking changes bump MINOR (0.41.0 → 0.42.0), not MAJOR
- **1.x+ versions**: Breaking changes bump MAJOR (1.5.0 → 2.0.0)
- **Prerelease transitions**: Correctly moves between prerelease cycles (0.34.1-rc.10 → 0.35.0-rc.0)
- **Graduation to stable**: Prereleases become stable releases (0.64.0-rc.55 → 0.64.0)

### When to Run

- Before committing changes to `.github/actions/bump-version/index.mjs`
- After updating version-related dependencies
- When troubleshooting unexpected version bumps

### Understanding Results

**Success:**
```
📊 Test Results: 10 passed, 0 failed
```

**Failure:**
```
❌ FAILED: Expected major 0, got 1
```

### Troubleshooting

**"Cannot find module"** → Run `yarn install`

**Git errors** → Ensure git is configured:
```bash
git config --global user.email "test@example.com"
git config --global user.name "Test User"
```

### Adding Test Cases

Edit `test-bump-version.mjs` and add to the `tests` array:

```javascript
{
    name: 'Description of test',
    currentVersion: '0.41.0-rc.103',
    commitMessage: 'feat: add feature',
    expectedMajor: 0,
    expectedMinor: 41,
    expectedPatch: 0,
    expectedPrerelease: 104,
    isPrerelease: true
}
```

### References

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
