import { ComponentMetadata } from './types/component-metadata';
import { SemanticTags } from './types/semantic-tags';

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

/**
 * Query expansion - expand search terms with synonyms and related terms
 */
export function expandQuery(query: string): string[] {
    const queryLower = query.toLowerCase().trim();
    const expansions = new Set<string>([queryLower]);

    // Pattern-based expansions (maps common queries to related terms)
    const expansionMap: Record<string, string[]> = {
        'dashboard': ['kpi', 'metric', 'analytics', 'stats', 'overview', 'widget', 'grid'],
        'master detail': ['list-detail', 'split-view', 'two-pane', 'master-detail-layout', 'side-content'],
        'master-detail': ['list-detail', 'split-view', 'two-pane', 'master-detail-layout', 'side-content'],
        'table': ['data-grid', 'grid', 'spreadsheet', 'data-table', 'list'],
        'form': ['input', 'field', 'validation', 'login', 'registration'],
        'modal': ['dialog', 'popup', 'overlay', 'lightbox'],
        'popup': ['modal', 'dialog', 'overlay', 'popover'],
        'notification': ['message', 'alert', 'toast', 'banner'],
        'menu': ['dropdown', 'context-menu', 'action-menu'],
        'navigation': ['nav', 'menu', 'sidebar', 'side-nav'],
        'card': ['tile', 'panel', 'widget', 'container'],
        'metric': ['kpi', 'number', 'numeric', 'statistic'],
        'kpi': ['metric', 'number', 'numeric', 'dashboard'],
        'greeting': ['welcome', 'hello', 'title', 'message'],
        'hello world': ['greeting', 'welcome', 'title', 'text'],
        'login': ['form', 'auth', 'authentication', 'signin'],
        'data grid': ['table', 'spreadsheet', 'data-table'],
        'spreadsheet': ['table', 'data-grid', 'grid'],
        'filter': ['search', 'toolbar', 'input'],
        'sort': ['table', 'data-grid', 'toolbar'],
        'upload': ['file', 'attachment', 'file-uploader'],
        'click': ['button', 'link', 'action', 'interactive'],
        'message': ['notification', 'alert', 'toast', 'feedback']
    };

    // Add expansion terms
    for (const [pattern, terms] of Object.entries(expansionMap)) {
        if (queryLower.includes(pattern)) {
            terms.forEach(term => expansions.add(term));
        }
    }

    // Split multi-word queries and add individual words
    const words = queryLower.split(/[\s-]+/).filter(w => w.length > 2);
    words.forEach(word => expansions.add(word));

    return Array.from(expansions);
}

/**
 * Semantic score calculation - scores component against query using semantic tags
 */
export interface SemanticMatchResult {
    component: ComponentMetadata;
    score: number;
    confidence: 'high' | 'medium' | 'low';
    matchReasons: string[];
    matchedTags: {
        patterns: string[];
        useCases: string[];
        synonyms: string[];
    };
}

export function scoreSemanticMatch(
    component: ComponentMetadata,
    query: string,
    semanticTags?: SemanticTags,
    expandedQuery?: string[]
): SemanticMatchResult {
    let score = 0;
    const matchReasons: string[] = [];
    const matchedTags = { patterns: [] as string[], useCases: [] as string[], synonyms: [] as string[] };

    const queryTerms = expandedQuery || expandQuery(query);
    const queryLower = query.toLowerCase();

    // Base matching (always done)
    // Exact matches on core fields
    if (component.id === queryLower) {
        score += 100;
        matchReasons.push('Exact component ID match');
    } else if (component.id.includes(queryLower)) {
        score += 50;
        matchReasons.push('Component ID contains query');
    }

    if (component.baseClass === queryLower || component.baseClass === `fd-${queryLower}`) {
        score += 90;
        matchReasons.push('Exact CSS class match');
    } else if (component.baseClass.includes(queryLower)) {
        score += 40;
        matchReasons.push('CSS class contains query');
    }

    if (component.name.toLowerCase() === queryLower) {
        score += 80;
        matchReasons.push('Exact name match');
    } else if (component.name.toLowerCase().includes(queryLower)) {
        score += 35;
        matchReasons.push('Name contains query');
    }

    if (component.description.toLowerCase().includes(queryLower)) {
        score += 20;
        matchReasons.push('Description match');
    }

    if (component.category?.toLowerCase().includes(queryLower)) {
        score += 30;
        matchReasons.push('Category match');
    }

    // Semantic matching (if tags available)
    if (semanticTags) {
        // Pattern tags (highest priority - architectural patterns)
        for (const term of queryTerms) {
            for (const pattern of semanticTags.patterns) {
                if (pattern.toLowerCase().includes(term) || term.includes(pattern.toLowerCase())) {
                    score += 60;
                    matchedTags.patterns.push(pattern);
                    matchReasons.push(`Pattern match: "${pattern}"`);
                    break; // Count each pattern once
                }
            }
        }

        // Use-case tags (what developers are trying to build)
        for (const term of queryTerms) {
            for (const useCase of semanticTags.useCases) {
                if (useCase.toLowerCase().includes(term) || term.includes(useCase.toLowerCase())) {
                    score += 50;
                    matchedTags.useCases.push(useCase);
                    matchReasons.push(`Use-case match: "${useCase}"`);
                    break; // Count each use-case once
                }
            }
        }

        // Synonym tags (alternative names)
        for (const term of queryTerms) {
            for (const synonym of semanticTags.synonyms) {
                if (synonym.toLowerCase().includes(term) || term.includes(synonym.toLowerCase())) {
                    score += 45;
                    matchedTags.synonyms.push(synonym);
                    matchReasons.push(`Synonym match: "${synonym}"`);
                    break; // Count each synonym once
                }
            }
        }

        // Category tags
        for (const term of queryTerms) {
            for (const category of semanticTags.categories) {
                if (category.toLowerCase().includes(term) || term.includes(category.toLowerCase())) {
                    score += 25;
                    matchReasons.push(`Category match: "${category}"`);
                    break;
                }
            }
        }
    }

    // Search in modifiers
    for (const mod of component.modifiers) {
        if (mod.class.toLowerCase().includes(queryLower)) {
            score += 15;
            matchReasons.push(`Modifier match: ${mod.class}`);
            break;
        }
    }

    // Search in elements
    for (const el of component.elements) {
        if (el.class.toLowerCase().includes(queryLower)) {
            score += 10;
            matchReasons.push(`Element match: ${el.class}`);
            break;
        }
    }

    // Determine confidence
    let confidence: 'high' | 'medium' | 'low';
    if (score >= 80) {
        confidence = 'high';
    } else if (score >= 40) {
        confidence = 'medium';
    } else {
        confidence = 'low';
    }

    return {
        component,
        score,
        confidence,
        matchReasons,
        matchedTags
    };
}
