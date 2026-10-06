import { describe, expect, it } from 'vitest';
import { withContentDensity } from '../src/lib/decorators/contentDensity';

const story = () => '<span>Story</span>';

const renderWithParameters = (parameters: Record<string, unknown>) =>
    withContentDensity(story, {
        globals: { contentDensity: 'compact' },
        parameters
    });

describe('withContentDensity', () => {
    it('can be disabled with the contentDensity parameter', () => {
        expect(renderWithParameters({ contentDensity: { disable: true } })).toBe(story());
    });

    it('is not disabled by the directionality parameter', () => {
        expect(renderWithParameters({ directionality: { disable: true } })).toContain('class="is-compact"');
    });
});
