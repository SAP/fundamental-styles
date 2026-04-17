import { describe, it, expect } from 'vitest';
import { loadExamples } from '../src/data/load-examples';

describe('loadExamples', () => {
    const examples = loadExamples();

    it('should load examples as a map', () => {
        expect(examples).toBeInstanceOf(Map);
        expect(examples.size).toBeGreaterThan(50);
    });

    it('should have button examples', () => {
        const buttonExamples = examples.get('button');
        expect(buttonExamples).toBeDefined();
        expect(buttonExamples!.length).toBeGreaterThan(0);
    });

    it('should have dialog examples', () => {
        const dialogExamples = examples.get('dialog');
        expect(dialogExamples).toBeDefined();
        expect(dialogExamples!.length).toBeGreaterThan(0);
    });

    it('should have valid example structure', () => {
        for (const [componentId, componentExamples] of examples) {
            for (const ex of componentExamples) {
                expect(ex.component).toBe(componentId);
                expect(ex.name).toBeDefined();
                expect(ex.name.length).toBeGreaterThan(0);
                expect(ex.description).toBeDefined();
                expect(ex.html).toBeDefined();
                expect(ex.html.length).toBeGreaterThan(0);
            }
            // Only check first few components
            break;
        }
    });

    it('should have HTML content in examples', () => {
        const buttonExamples = examples.get('button');
        expect(buttonExamples).toBeDefined();
        for (const ex of buttonExamples!) {
            expect(ex.html).toContain('fd-button');
        }
    });
});
