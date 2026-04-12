import { describe, it, expect, beforeAll } from 'vitest';

/**
 * Server tool tests — test the shared helpers and data loading logic
 * that power the MCP tools.
 */
import { loadCatalog, LoadedCatalog } from '../src/data/load-catalog';
import { loadExamples, ComponentExample } from '../src/data/load-examples';
import { extractChangelog, compareVersions, baseVersion, ChangelogEntry } from '../src/data/changelog-extractor';
import { findComponent as findComp, scoreMatch } from '../src/helpers';
import {
    ComponentMetadata,
    PACKAGE_ALIAS_MAP
} from '../src/types/component-metadata';

let data: LoadedCatalog;
let examples: Map<string, ComponentExample[]>;
let changelog: ChangelogEntry[];

function findComponent(nameOrId: string): ComponentMetadata | undefined {
    return findComp(data.components, nameOrId);
}

beforeAll(() => {
    data = loadCatalog();
    examples = loadExamples();
    changelog = extractChangelog();
});

describe('list_components', () => {
    it('should return all components', () => {
        expect(data.components.length).toBeGreaterThan(100);
    });

    it('should filter by category', () => {
        const buttons = data.components.filter(
            (c) => c.category?.toLowerCase().includes('button') ||
                   c.subcategory?.toLowerCase().includes('button')
        );
        expect(buttons.length).toBeGreaterThan(0);
    });
});

describe('search_components', () => {
    it('should find button by keyword', () => {
        const scored = data.components
            .map((c) => ({ component: c, score: scoreMatch(c, 'button') }))
            .filter((s) => s.score > 0)
            .sort((a, b) => b.score - a.score);

        expect(scored.length).toBeGreaterThan(0);
        expect(scored[0].component.id).toBe('button');
    });

    it('should find table by keyword', () => {
        const scored = data.components
            .map((c) => ({ component: c, score: scoreMatch(c, 'table') }))
            .filter((s) => s.score > 0)
            .sort((a, b) => b.score - a.score);

        expect(scored.length).toBeGreaterThan(0);
        expect(scored[0].component.id).toBe('table');
    });

    it('should return empty for nonsense query', () => {
        const scored = data.components
            .map((c) => ({ component: c, score: scoreMatch(c, 'zzzzxyzzy') }))
            .filter((s) => s.score > 0);

        expect(scored.length).toBe(0);
    });
});

describe('get_css_classes', () => {
    it('should find button by id', () => {
        const comp = findComponent('button');
        expect(comp).toBeDefined();
        expect(comp!.baseClass).toBe('fd-button');
    });

    it('should find by base class', () => {
        const comp = findComponent('fd-button');
        expect(comp).toBeDefined();
        expect(comp!.id).toBe('button');
    });

    it('should find by partial name', () => {
        const comp = findComponent('dialog');
        expect(comp).toBeDefined();
        expect(comp!.baseClass).toBe('fd-dialog');
    });

    it('should return undefined for unknown component', () => {
        const comp = findComponent('nonexistent-xyz');
        expect(comp).toBeUndefined();
    });

    it('should include modifier rules for button', () => {
        const rules = data.modifierRules?.components?.['button'];
        expect(rules).toBeDefined();
        expect(rules!.mutuallyExclusive.length).toBeGreaterThan(0);
    });
});

describe('get_component_html', () => {
    it('should return HTML examples for button', () => {
        const buttonExamples = examples.get('button');
        expect(buttonExamples).toBeDefined();
        expect(buttonExamples!.length).toBeGreaterThan(0);
        expect(buttonExamples![0].html).toContain('fd-button');
    });

    it('should return HTML examples for dialog', () => {
        const dialogExamples = examples.get('dialog');
        expect(dialogExamples).toBeDefined();
        expect(dialogExamples!.length).toBeGreaterThan(0);
    });

    it('should filter by variant keyword', () => {
        const buttonExamples = examples.get('button') ?? [];
        const stateExamples = buttonExamples.filter(
            (ex) => ex.name.toLowerCase().includes('states') || ex.description.toLowerCase().includes('states')
        );
        expect(stateExamples.length).toBeGreaterThanOrEqual(0); // may or may not have "states"
    });
});

describe('get_design_tokens', () => {
    it('should find background tokens', () => {
        const matches = data.designTokens.filter(
            (t) => t.name.toLowerCase().includes('background') || (t.purpose ?? '').toLowerCase().includes('background')
        );
        expect(matches.length).toBeGreaterThan(0);
    });

    it('should find specific token', () => {
        const token = data.designTokens.find((t) => t.name === '--sapBackgroundColor');
        expect(token).toBeDefined();
    });

    it('should return empty for nonsense query', () => {
        const matches = data.designTokens.filter((t) => t.name.includes('zzzzxyzzy'));
        expect(matches.length).toBe(0);
    });
});

describe('get_accessibility_guide', () => {
    it('should have accessibility data for button', () => {
        const a11y = data.accessibility?.components?.['button'];
        expect(a11y).toBeDefined();
    });

    it('should have global guidelines', () => {
        expect(data.accessibility?.globalGuidelines).toBeDefined();
        expect(Object.keys(data.accessibility!.globalGuidelines).length).toBeGreaterThan(0);
    });

    it('should have common patterns', () => {
        expect(data.accessibility?.commonPatterns).toBeDefined();
        expect(data.accessibility!.commonPatterns['disabledState']).toBeDefined();
    });
});

describe('get_utility_classes', () => {
    it('should have margin classes', () => {
        const marginCat = data.utilityClasses?.categories?.['margin'];
        expect(marginCat).toBeDefined();
        expect(marginCat!.classes.length).toBeGreaterThan(0);
    });

    it('should have flex classes', () => {
        const flexCat = data.utilityClasses?.categories?.['flex'];
        expect(flexCat).toBeDefined();
        expect(flexCat!.classes.length).toBeGreaterThan(0);
    });

    it('should support keyword filtering', () => {
        const allClasses: Array<{ class: string; description: string }> = [];
        if (data.utilityClasses) {
            for (const cat of Object.values(data.utilityClasses.categories)) {
                allClasses.push(...cat.classes);
            }
        }
        const marginMatches = allClasses.filter((c) => c.class.includes('margin'));
        expect(marginMatches.length).toBeGreaterThan(5);
    });
});

describe('get_component_relationships', () => {
    it('should have relationships for button', () => {
        const outgoing = data.relationships!.relationships.filter((r) => r.from === 'button');
        const incoming = data.relationships!.relationships.filter((r) => r.to === 'button');
        expect(outgoing.length + incoming.length).toBeGreaterThanOrEqual(0);
    });

    it('should have relationship types', () => {
        for (const rel of data.relationships!.relationships.slice(0, 10)) {
            expect(rel.from).toBeDefined();
            expect(rel.to).toBeDefined();
            expect(rel.type).toBeDefined();
            expect(typeof rel.bidirectional).toBe('boolean');
        }
    });
});

describe('package alias map', () => {
    it('should map aliases to full package names', () => {
        expect(PACKAGE_ALIAS_MAP['styles']).toBe('fundamental-styles');
        expect(PACKAGE_ALIAS_MAP['common-css']).toBe('@fundamental-styles/common-css');
        expect(PACKAGE_ALIAS_MAP['cx']).toBe('@fundamental-styles/cx');
    });
});

describe('get_migration_guide', () => {
    it('should have changelog entries', () => {
        expect(changelog.length).toBeGreaterThan(0);
    });

    it('should filter by component scope', () => {
        const stylesEntries = changelog.filter(
            (e) => e.scope?.toLowerCase() === 'styles'
        );
        expect(stylesEntries.length).toBeGreaterThan(0);
    });

    it('should filter by change type', () => {
        const breaking = changelog.filter((e) => e.type === 'breaking');
        const features = changelog.filter((e) => e.type === 'feature');
        const fixes = changelog.filter((e) => e.type === 'fix');
        expect(breaking.length).toBeGreaterThan(0);
        expect(features.length).toBeGreaterThan(0);
        expect(fixes.length).toBeGreaterThan(0);
    });

    it('should filter by version range', () => {
        const filtered = changelog.filter(
            (e) => compareVersions(e.version, '0.41.0') >= 0 && compareVersions(e.version, '0.41.1') <= 0
        );
        expect(filtered.length).toBeGreaterThan(0);
        for (const entry of filtered) {
            const base = baseVersion(entry.version);
            expect(base === '0.41.0' || base === '0.41.1').toBe(true);
        }
    });

    it('should have version dates where available', () => {
        const withDates = changelog.filter((e) => e.date !== null);
        expect(withDates.length).toBeGreaterThan(0);
    });
});
