import { ComponentMetadata } from './types/component-metadata';

export function findComponent(
    components: ComponentMetadata[],
    nameOrId: string
): ComponentMetadata | undefined {
    const lower = nameOrId.toLowerCase();

    // Exact match on id
    const byId = components.find((c) => c.id === lower);
    if (byId) return byId;

    // Exact match on baseClass
    const byClass = components.find((c) => c.baseClass === lower || c.baseClass === `fd-${lower}`);
    if (byClass) return byClass;

    // Exact match on name
    const byName = components.find((c) => c.name.toLowerCase() === lower);
    if (byName) return byName;

    // Partial match on id
    const byPartialId = components.find((c) => c.id.includes(lower));
    if (byPartialId) return byPartialId;

    // Partial match on name
    const byPartialName = components.find((c) => c.name.toLowerCase().includes(lower));
    if (byPartialName) return byPartialName;

    return undefined;
}

export function scoreMatch(component: ComponentMetadata, query: string): number {
    let score = 0;

    if (component.id === query) score += 100;
    else if (component.id.includes(query)) score += 50;

    if (component.baseClass === query || component.baseClass === `fd-${query}`) score += 90;
    else if (component.baseClass.includes(query)) score += 40;

    if (component.name.toLowerCase() === query) score += 80;
    else if (component.name.toLowerCase().includes(query)) score += 35;

    if (component.description.toLowerCase().includes(query)) score += 20;
    if (component.category?.toLowerCase().includes(query)) score += 30;

    // Search in modifiers
    for (const mod of component.modifiers) {
        if (mod.class.toLowerCase().includes(query)) { score += 15; break; }
    }

    // Search in elements
    for (const el of component.elements) {
        if (el.class.toLowerCase().includes(query)) { score += 10; break; }
    }

    // Search in variables
    for (const v of component.variables) {
        if (v.toLowerCase().includes(query)) { score += 10; break; }
    }

    return score;
}

export function truncate(text: string, maxLength: number): string {
    if (!text) return '';
    const firstLine = text.split('\n')[0];
    if (firstLine.length <= maxLength) return firstLine;
    return firstLine.slice(0, maxLength - 3) + '...';
}

/**
 * Detect if a component has a generic/placeholder description
 */
export function hasGenericDescription(comp: ComponentMetadata): boolean {
    const desc = comp.description.toLowerCase();

    // Patterns that indicate generic descriptions
    return (
        desc.includes('component component') ||
        desc === `${comp.name.toLowerCase()} component` ||
        desc === comp.name.toLowerCase() ||
        desc.length < 20 ||
        desc.match(/^[a-z\s-]+ component$/i) !== null
    );
}

/**
 * Enhance a component description using available guidance data
 */
export function enhanceDescription(
    comp: ComponentMetadata,
    guidance?: { description?: string; whenToUse?: string[] }
): { description: string; enhanced: boolean } {
    // Use guidance description if available and better than catalog description
    if (guidance?.description && guidance.description.length > 30) {
        return { description: guidance.description, enhanced: true };
    }

    // If we have generic description but guidance has whenToUse, construct one
    if (hasGenericDescription(comp) && guidance?.whenToUse && guidance.whenToUse.length > 0) {
        const useCase = guidance.whenToUse[0];
        return {
            description: `${comp.name} - ${useCase}`,
            enhanced: true
        };
    }

    return { description: comp.description, enhanced: false };
}

/**
 * Create data quality warnings for a component
 */
export interface DataQualityWarnings {
    hasGenericDescription?: boolean;
    missingExamples?: boolean;
    emptyRelatedComponents?: boolean;
    suggestions?: string[];
}

export function checkDataQuality(
    comp: ComponentMetadata,
    options: {
        hasExamples: boolean;
        hasGuidance: boolean;
    }
): DataQualityWarnings {
    const warnings: DataQualityWarnings = {};
    const suggestions: string[] = [];

    // Check description quality
    if (hasGenericDescription(comp)) {
        warnings.hasGenericDescription = true;
        if (!options.hasGuidance) {
            suggestions.push('Component has a generic description. Use get_component_guidance for detailed information.');
        }
    }

    // Check for HTML examples
    if (!options.hasExamples) {
        warnings.missingExamples = true;
        suggestions.push(`No HTML examples available. Check the Storybook docs: ${comp.storybookUrl}`);
    }

    // Check for related components
    if (!comp.relatedComponents || comp.relatedComponents.length === 0) {
        warnings.emptyRelatedComponents = true;
        suggestions.push('No related components documented. Try search_components to find similar components.');
    }

    if (suggestions.length > 0) {
        warnings.suggestions = suggestions;
    }

    return warnings;
}

/**
 * Check design token data quality
 */
export interface TokenQualityInfo {
    hasPurpose: boolean;
    hasValue: boolean;
    hasCssUsage: boolean;
    completeness: 'complete' | 'partial' | 'minimal';
}

export function checkTokenQuality(token: {
    name: string;
    purpose?: string;
    value?: string;
    cssUsage?: string;
}): TokenQualityInfo {
    const hasPurpose = Boolean(token.purpose && token.purpose.trim().length > 0);
    const hasValue = Boolean(token.value && token.value.trim().length > 0);
    const hasCssUsage = Boolean(token.cssUsage && token.cssUsage.trim().length > 0);

    let completeness: 'complete' | 'partial' | 'minimal';
    if (hasPurpose && hasValue && hasCssUsage) {
        completeness = 'complete';
    } else if (hasPurpose || hasCssUsage) {
        completeness = 'partial';
    } else {
        completeness = 'minimal';
    }

    return { hasPurpose, hasValue, hasCssUsage, completeness };
}
