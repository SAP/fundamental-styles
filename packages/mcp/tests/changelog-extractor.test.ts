import { describe, it, expect } from 'vitest';
import { extractChangelog, compareVersions, baseVersion } from '../src/data/changelog-extractor';

describe('extractChangelog', () => {
    const entries = extractChangelog();

    it('should extract entries from CHANGELOG.md', () => {
        expect(entries.length).toBeGreaterThan(0);
    });

    it('should have required fields on each entry', () => {
        for (const entry of entries.slice(0, 20)) {
            expect(entry.version).toBeDefined();
            expect(entry.type).toMatch(/^(breaking|feature|fix|deprecation)$/);
            expect(entry.description).toBeDefined();
            expect(entry.description.length).toBeGreaterThan(0);
        }
    });

    it('should extract breaking changes', () => {
        const breaking = entries.filter((e) => e.type === 'breaking');
        expect(breaking.length).toBeGreaterThan(0);
    });

    it('should extract features', () => {
        const features = entries.filter((e) => e.type === 'feature');
        expect(features.length).toBeGreaterThan(0);
    });

    it('should extract bug fixes', () => {
        const fixes = entries.filter((e) => e.type === 'fix');
        expect(fixes.length).toBeGreaterThan(0);
    });

    it('should extract scoped entries (e.g., styles)', () => {
        const scoped = entries.filter((e) => e.scope === 'styles');
        expect(scoped.length).toBeGreaterThan(0);
    });

    it('should extract issue URLs where present', () => {
        const withIssues = entries.filter((e) => e.issueUrl !== null);
        expect(withIssues.length).toBeGreaterThan(0);
        for (const entry of withIssues.slice(0, 5)) {
            expect(entry.issueUrl).toMatch(/^https:\/\/github\.com/);
        }
    });

    it('should extract version dates', () => {
        const withDates = entries.filter((e) => e.date !== null);
        expect(withDates.length).toBeGreaterThan(0);
        for (const entry of withDates.slice(0, 5)) {
            expect(entry.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
        }
    });
});

describe('compareVersions', () => {
    it('should compare major versions', () => {
        expect(compareVersions('1.0.0', '0.9.0')).toBeGreaterThan(0);
        expect(compareVersions('0.9.0', '1.0.0')).toBeLessThan(0);
    });

    it('should compare minor versions', () => {
        expect(compareVersions('0.41.0', '0.40.0')).toBeGreaterThan(0);
        expect(compareVersions('0.40.0', '0.41.0')).toBeLessThan(0);
    });

    it('should compare patch versions', () => {
        expect(compareVersions('0.41.2', '0.41.1')).toBeGreaterThan(0);
        expect(compareVersions('0.41.1', '0.41.2')).toBeLessThan(0);
    });

    it('should treat stable as greater than RC', () => {
        expect(compareVersions('0.41.0', '0.41.0-rc.5')).toBeGreaterThan(0);
        expect(compareVersions('0.41.0-rc.5', '0.41.0')).toBeLessThan(0);
    });

    it('should compare RC numbers', () => {
        expect(compareVersions('0.41.0-rc.10', '0.41.0-rc.5')).toBeGreaterThan(0);
        expect(compareVersions('0.41.0-rc.5', '0.41.0-rc.10')).toBeLessThan(0);
    });

    it('should return 0 for equal versions', () => {
        expect(compareVersions('0.41.0', '0.41.0')).toBe(0);
        expect(compareVersions('0.41.0-rc.3', '0.41.0-rc.3')).toBe(0);
    });
});

describe('baseVersion', () => {
    it('should strip RC suffix', () => {
        expect(baseVersion('0.41.0-rc.5')).toBe('0.41.0');
        expect(baseVersion('0.41.1-rc.120')).toBe('0.41.1');
    });

    it('should return stable versions unchanged', () => {
        expect(baseVersion('0.41.0')).toBe('0.41.0');
        expect(baseVersion('1.0.0')).toBe('1.0.0');
    });
});
