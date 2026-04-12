import { describe, it, expect } from 'vitest';
import { loadCatalog, readDataFile, listSchemas, readSchema } from '../src/data/load-catalog';

describe('loadCatalog', () => {
    const catalog = loadCatalog();

    it('should load components from component-catalog.json', () => {
        expect(catalog.components.length).toBeGreaterThan(100);
    });

    it('should have version info', () => {
        expect(catalog.version).toBeDefined();
        expect(catalog.version).not.toBe('unknown');
    });

    it('should load components with required fields', () => {
        for (const comp of catalog.components.slice(0, 10)) {
            expect(comp.id).toBeDefined();
            expect(comp.name).toBeDefined();
            expect(comp.baseClass).toBeDefined();
            expect(comp.baseClass).toMatch(/^fd-/);
            expect(Array.isArray(comp.modifiers)).toBe(true);
            expect(Array.isArray(comp.elements)).toBe(true);
        }
    });

    it('should load the button component with known modifiers', () => {
        const button = catalog.components.find((c) => c.id === 'button');
        expect(button).toBeDefined();
        expect(button!.baseClass).toBe('fd-button');
        expect(button!.modifiers.length).toBeGreaterThan(0);
        const modifierClasses = button!.modifiers.map((m) => m.class);
        expect(modifierClasses).toContain('fd-button--emphasized');
        expect(modifierClasses).toContain('fd-button--transparent');
    });

    it('should load modifier rules', () => {
        expect(catalog.modifierRules).not.toBeNull();
        expect(catalog.modifierRules!.components).toBeDefined();
        expect(catalog.modifierRules!.components['button']).toBeDefined();
    });

    it('should load relationships', () => {
        expect(catalog.relationships).not.toBeNull();
        expect(catalog.relationships!.relationships.length).toBeGreaterThan(100);
        expect(catalog.relationships!.components.length).toBeGreaterThan(50);
    });

    it('should load accessibility data', () => {
        expect(catalog.accessibility).not.toBeNull();
        expect(catalog.accessibility!.totalComponents).toBeGreaterThan(50);
        expect(catalog.accessibility!.globalGuidelines).toBeDefined();
    });

    it('should load utility classes', () => {
        expect(catalog.utilityClasses).not.toBeNull();
        expect(catalog.utilityClasses!.categories).toBeDefined();
        expect(catalog.utilityClasses!.categories['margin']).toBeDefined();
    });

    it('should load design tokens', () => {
        expect(catalog.designTokens.length).toBeGreaterThan(100);
        const bgToken = catalog.designTokens.find((t) => t.name === '--sapBackgroundColor');
        expect(bgToken).toBeDefined();
        expect(bgToken!.purpose).toBeDefined();
    });

    it('should load HTML examples', () => {
        expect(catalog.htmlExamples).not.toBeNull();
        expect(catalog.htmlExamples!.examples.length).toBeGreaterThan(5);
    });
});

describe('readDataFile', () => {
    it('should read ai-component-index.md', () => {
        const content = readDataFile('ai-component-index.md');
        expect(content).not.toBeNull();
        expect(content!.length).toBeGreaterThan(100);
        expect(content).toContain('fundamental-styles');
    });

    it('should read component-graph.md', () => {
        const content = readDataFile('component-graph.md');
        expect(content).not.toBeNull();
        expect(content!.length).toBeGreaterThan(100);
    });

    it('should read component-use-cases.json', () => {
        const content = readDataFile('component-use-cases.json');
        expect(content).not.toBeNull();
        const parsed = JSON.parse(content!);
        expect(parsed.useCases).toBeDefined();
    });

    it('should return null for nonexistent file', () => {
        const content = readDataFile('does-not-exist.json');
        expect(content).toBeNull();
    });
});

describe('schemas', () => {
    it('should list available schemas', () => {
        const schemas = listSchemas();
        expect(schemas.length).toBeGreaterThan(50);
        expect(schemas).toContain('button');
        expect(schemas).toContain('dialog');
    });

    it('should read a component schema', () => {
        const content = readSchema('button');
        expect(content).not.toBeNull();
        const parsed = JSON.parse(content!);
        expect(parsed.title).toContain('Button');
        expect(parsed.properties.baseClass.const).toBe('fd-button');
    });

    it('should return null for nonexistent schema', () => {
        const content = readSchema('nonexistent-xyz');
        expect(content).toBeNull();
    });
});
