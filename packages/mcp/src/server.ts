import { McpServer, ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { loadCatalog, LoadedCatalog, readDataFile, listSchemas, readSchema } from './data/load-catalog';
import { loadExamples, ComponentExample } from './data/load-examples';
import { findComponent as findComp, scoreMatch, truncate, enhanceDescription, checkDataQuality, checkTokenQuality } from './helpers';
import { extractChangelog, compareVersions, baseVersion, ChangelogEntry } from './data/changelog-extractor';
import {
    ComponentMetadata,
    PACKAGE_ALIAS_MAP,
    PackageAlias
} from './types/component-metadata';

// Load data at startup
let data: LoadedCatalog;
let examples: Map<string, ComponentExample[]>;
let changelog: ChangelogEntry[];

try {
    data = loadCatalog();
} catch {
    data = {
        version: 'unknown',
        components: [],
        modifierRules: null,
        relationships: null,
        accessibility: null,
        utilityClasses: null,
        designTokens: [],
        htmlExamples: null,
        componentUseCases: null,
        componentGuidance: null
    };
    console.error('Warning: Failed to load component catalog data.');
}

try {
    examples = loadExamples();
} catch {
    examples = new Map();
    console.error('Warning: Failed to load HTML examples.');
}

try {
    changelog = extractChangelog();
} catch {
    changelog = [];
    console.error('Warning: Failed to load changelog data.');
}

const server = new McpServer({
    name: 'fundamental-styles',
    version: data.version
});

// ---------------------------------------------------------------------------
// Tool: list_components
// ---------------------------------------------------------------------------
server.tool(
    'list_components',
    `List all fundamental-styles CSS components. Returns component name, base CSS class, description, and category.
Optionally filter by package (styles, common-css, cx) or category.
Use this to discover what CSS components are available.`,
    {
        package: z
            .enum(['styles', 'common-css', 'cx'] as const)
            .optional()
            .describe('Filter by package'),
        category: z.string().optional().describe('Filter by category (e.g., "buttons", "navigation", "feedback")'),
        detailed: z.boolean().optional().default(false).describe('Include modifiers, elements, and usage info (default: false)')
    },
    async ({ package: pkg, category, detailed }) => {
        let components = data.components;

        if (pkg) {
            const fullPackage = PACKAGE_ALIAS_MAP[pkg as PackageAlias];
            if (fullPackage) {
                components = components.filter((c) => c.cssImport.startsWith(fullPackage));
            }
        }

        if (category) {
            const lowerCategory = category.toLowerCase();
            components = components.filter(
                (c) =>
                    c.category?.toLowerCase().includes(lowerCategory) ||
                    c.subcategory?.toLowerCase().includes(lowerCategory)
            );
        }

        const summary = components.map((c) => {
            // Try to get enhanced description from component guidance
            const guidance = data.componentGuidance?.components[c.id];
            const { description, enhanced } = enhanceDescription(c, guidance);

            const basicInfo: Record<string, unknown> = {
                id: c.id,
                name: c.name,
                baseClass: c.baseClass,
                category: guidance?.category || c.category,
                description: truncate(description, 120)
            };

            // Add enhanced flag if description was improved
            if (enhanced && detailed) {
                basicInfo['descriptionEnhanced'] = true;
            }

            // Add detailed information if requested
            if (detailed) {
                basicInfo['modifierCount'] = c.modifiers?.length ?? 0;
                basicInfo['elementCount'] = c.elements?.length ?? 0;
                basicInfo['cssImport'] = c.cssImport;

                // Sample modifiers (first 5)
                if (c.modifiers && c.modifiers.length > 0) {
                    basicInfo['sampleModifiers'] = c.modifiers.slice(0, 5);
                }

                // Use cases
                if (c.useCases && c.useCases.length > 0) {
                    basicInfo['useCases'] = c.useCases;
                }

                // Related components
                if (c.relatedComponents && c.relatedComponents.length > 0) {
                    basicInfo['relatedComponents'] = c.relatedComponents.slice(0, 3);
                }

                // Tags
                if (c.tags && c.tags.length > 0) {
                    basicInfo['tags'] = c.tags;
                }

                // Data quality warnings
                const hasExamples = (examples.get(c.id)?.length ?? 0) > 0 ||
                    (data.htmlExamples?.examples ?? []).some((ex) => ex.components.includes(c.id));

                const qualityWarnings = checkDataQuality(c, {
                    hasExamples,
                    hasGuidance: Boolean(guidance)
                });

                if (Object.keys(qualityWarnings).length > 0) {
                    basicInfo['dataQuality'] = qualityWarnings;
                }
            }

            return basicInfo;
        });

        return {
            content: [
                {
                    type: 'text' as const,
                    text: JSON.stringify({
                        count: summary.length,
                        detailed,
                        components: summary
                    }, null, 2)
                }
            ]
        };
    }
);

// ---------------------------------------------------------------------------
// Tool: search_components
// ---------------------------------------------------------------------------
server.tool(
    'search_components',
    `Search fundamental-styles CSS components by keyword. Searches across component names,
base classes, modifiers, element classes, descriptions, and CSS variables.
Use this when you need to find a component by a partial name or feature keyword.`,
    {
        query: z.string().describe('Search keyword (e.g., "button", "table", "date", "navigation")'),
        package: z
            .enum(['styles', 'common-css', 'cx'] as const)
            .optional()
            .describe('Restrict search to a specific package'),
        detailed: z.boolean().optional().default(false).describe('Include CSS imports, modifiers, and usage examples (default: false)')
    },
    async ({ query, package: pkg, detailed }) => {
        const lowerQuery = query.toLowerCase();
        let components = data.components;

        if (pkg) {
            const fullPackage = PACKAGE_ALIAS_MAP[pkg as PackageAlias];
            if (fullPackage) {
                components = components.filter((c) => c.cssImport.startsWith(fullPackage));
            }
        }

        const scored = components
            .map((c) => ({ component: c, score: scoreMatch(c, lowerQuery) }))
            .filter((s) => s.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, 20);

        const results = scored.map((s) => {
            const basicInfo: Record<string, unknown> = {
                id: s.component.id,
                name: s.component.name,
                baseClass: s.component.baseClass,
                category: s.component.category,
                description: truncate(s.component.description, 150),
                relevance: s.score
            };

            // Add detailed information if requested
            if (detailed) {
                basicInfo['cssImport'] = s.component.cssImport;

                // Sample modifiers
                if (s.component.modifiers && s.component.modifiers.length > 0) {
                    basicInfo['sampleModifiers'] = s.component.modifiers.slice(0, 5);
                    basicInfo['totalModifiers'] = s.component.modifiers.length;
                }

                // Usage examples count
                const exampleCount = (examples.get(s.component.id)?.length ?? 0) +
                    (data.htmlExamples?.examples ?? []).filter((ex) => ex.components.includes(s.component.id)).length;
                if (exampleCount > 0) {
                    basicInfo['htmlExamplesAvailable'] = exampleCount;
                }

                // Related components
                if (s.component.relatedComponents && s.component.relatedComponents.length > 0) {
                    basicInfo['relatedComponents'] = s.component.relatedComponents.slice(0, 3);
                }

                // Storybook URL
                if (s.component.storybookUrl) {
                    basicInfo['storybookUrl'] = s.component.storybookUrl;
                }
            }

            return basicInfo;
        });

        return {
            content: [
                {
                    type: 'text' as const,
                    text: JSON.stringify({
                        query,
                        count: results.length,
                        detailed,
                        results
                    }, null, 2)
                }
            ]
        };
    }
);

// ---------------------------------------------------------------------------
// Tool: get_css_classes
// ---------------------------------------------------------------------------
server.tool(
    'get_css_classes',
    `Get the full BEM class hierarchy for a fundamental-styles CSS component.
Returns the block class, all element classes, modifier classes, state classes,
CSS custom properties, and mutually exclusive modifier rules.
Use this when you need to know exactly what CSS classes to apply.`,
    {
        component: z.string().describe('Component name, id, or base class (e.g., "button", "fd-button", "dialog")'),
        detailed: z.boolean().optional().default(false).describe('Include full schema, constraints, and examples (default: false)')
    },
    async ({ component, detailed }) => {
        const comp = findComponent(component);

        if (!comp) {
            return {
                content: [
                    {
                        type: 'text' as const,
                        text: `Component "${component}" not found. Use search_components to find available components.`
                    }
                ]
            };
        }

        const result: Record<string, unknown> = {
            id: comp.id,
            name: comp.name,
            baseClass: comp.baseClass,
            cssImport: comp.cssImport,
            modifiers: comp.modifiers,
            elements: comp.elements,
            variables: comp.variables,
            tags: comp.tags
        };

        // Add modifier rules if available
        if (data.modifierRules?.components?.[comp.id]) {
            result['modifierRules'] = data.modifierRules.components[comp.id];
        }

        // Add detailed information if requested
        if (detailed) {
            // Add accessibility requirements
            const a11yData = data.accessibility?.components?.[comp.id];
            if (a11yData) {
                result['accessibilityInfo'] = {
                    roles: a11yData.roles,
                    ariaAttributes: a11yData.ariaAttributes,
                    keyboardPatterns: a11yData.keyboardPatterns
                };
            }

            // Add usage constraints
            if (comp.useCases && comp.useCases.length > 0) {
                result['useCases'] = comp.useCases;
            }
            if (comp.avoidWhen && comp.avoidWhen.length > 0) {
                result['avoidWhen'] = comp.avoidWhen;
            }

            // Add dependencies
            if (comp.dependencies && comp.dependencies.length > 0) {
                result['dependencies'] = comp.dependencies;
            }

            // Add component relationships
            if (data.relationships) {
                const outgoing = data.relationships.relationships.filter((r) => r.from === comp.id);
                const incoming = data.relationships.relationships.filter((r) => r.to === comp.id);

                if (outgoing.length > 0 || incoming.length > 0) {
                    result['relationships'] = {
                        imports: outgoing.filter((r) => r.type === 'imports').map((r) => r.to),
                        related: outgoing.filter((r) => r.type === 'related').map((r) => r.to),
                        similar: outgoing.filter((r) => r.type === 'similar').map((r) => r.to),
                        sharesStyling: outgoing.filter((r) => r.type === 'shares-styling').map((r) => r.to)
                    };
                }
            }

            // Add HTML examples count
            const exampleCount = (examples.get(comp.id)?.length ?? 0) +
                (data.htmlExamples?.examples ?? []).filter((ex) => ex.components.includes(comp.id)).length;
            if (exampleCount > 0) {
                result['htmlExamplesAvailable'] = exampleCount;
                result['suggestion'] = 'Use get_component_html to see usage examples';
            }
        }

        return {
            content: [
                {
                    type: 'text' as const,
                    text: JSON.stringify(result, null, 2)
                }
            ]
        };
    }
);

// ---------------------------------------------------------------------------
// Tool: get_component_html
// ---------------------------------------------------------------------------
server.tool(
    'get_component_html',
    `Get working HTML examples for a fundamental-styles CSS component.
Returns real HTML snippets showing correct class usage, ARIA attributes, and structure.
Use this when you need to see how to build the HTML for a component.`,
    {
        component: z.string().describe('Component name, id, or base class (e.g., "button", "dialog")'),
        variant: z.string().optional().describe('Filter examples by variant keyword (e.g., "compact", "states", "emphasized")'),
        detailed: z.boolean().optional().default(false).describe('Include accessibility guidance, related components, and best practices (default: false)')
    },
    async ({ component, variant, detailed }) => {
        const comp = findComponent(component);

        if (!comp) {
            return {
                content: [
                    {
                        type: 'text' as const,
                        text: `Component "${component}" not found. Use search_components to find available components.`
                    }
                ]
            };
        }

        // Get story examples
        let storyExamples = examples.get(comp.id) ?? [];
        let curatedExamples = (data.htmlExamples?.examples ?? []).filter((ex) =>
            ex.components.includes(comp.id)
        );

        // Filter by variant if specified
        if (variant) {
            const lowerVariant = variant.toLowerCase();

            // Filter story examples by name, description, OR HTML content (to catch class modifiers)
            storyExamples = storyExamples.filter(
                (ex) =>
                    ex.name.toLowerCase().includes(lowerVariant) ||
                    ex.description.toLowerCase().includes(lowerVariant) ||
                    ex.html.toLowerCase().includes(lowerVariant)
            );

            // Filter curated examples by description or HTML content
            curatedExamples = curatedExamples.filter(
                (ex) =>
                    ex.description.toLowerCase().includes(lowerVariant) ||
                    ex.html.toLowerCase().includes(lowerVariant) ||
                    ex.id.toLowerCase().includes(lowerVariant)
            );
        }

        const totalExamples = storyExamples.length + curatedExamples.length;

        const result: Record<string, unknown> = {
            component: comp.name,
            baseClass: comp.baseClass,
            variant: variant ?? null,
            storyExamples: storyExamples.map((ex) => ({
                name: ex.name,
                description: ex.description,
                html: ex.html,
                matchedVariant: variant ? (
                    ex.name.toLowerCase().includes(variant.toLowerCase()) ? 'name' :
                    ex.description.toLowerCase().includes(variant.toLowerCase()) ? 'description' : 'html'
                ) : undefined
            })),
            curatedExamples: curatedExamples.map((ex) => ({
                id: ex.id,
                description: ex.description,
                html: ex.html
            })),
            totalExamples,
            storyExamplesCount: storyExamples.length,
            curatedExamplesCount: curatedExamples.length
        };

        // Add detailed information if requested
        if (detailed) {
            // Add accessibility guidance
            const a11yData = data.accessibility?.components?.[comp.id];
            if (a11yData) {
                result['accessibility'] = {
                    roles: a11yData.roles,
                    ariaAttributes: a11yData.ariaAttributes,
                    keyboardPatterns: a11yData.keyboardPatterns,
                    notes: a11yData.notes
                };
            }

            // Add component guidance
            const guidance = data.componentGuidance?.components[comp.id];
            if (guidance) {
                result['guidance'] = {
                    whenToUse: guidance.whenToUse,
                    whenToAvoid: guidance.whenToAvoid,
                    bestPractices: guidance.bestPractices
                };
            }

            // Add related components
            if (comp.relatedComponents && comp.relatedComponents.length > 0) {
                result['relatedComponents'] = comp.relatedComponents;
            }

            // Add available modifiers
            if (comp.modifiers && comp.modifiers.length > 0) {
                result['availableModifiers'] = comp.modifiers.slice(0, 20);
            }

            // Add CSS variables
            if (comp.variables && comp.variables.length > 0) {
                result['cssVariables'] = comp.variables.slice(0, 10);
            }
        }

        if (totalExamples === 0) {
            // Provide helpful feedback about why no examples were found
            const totalAvailable = (examples.get(comp.id)?.length ?? 0) +
                (data.htmlExamples?.examples ?? []).filter((ex) => ex.components.includes(comp.id)).length;

            if (variant && totalAvailable > 0) {
                return {
                    content: [
                        {
                            type: 'text' as const,
                            text: JSON.stringify(
                                {
                                    component: comp.name,
                                    baseClass: comp.baseClass,
                                    variant: variant,
                                    note: `No examples found matching variant "${variant}". ${totalAvailable} total examples available for this component.`,
                                    suggestion: `Try without the variant filter, or try variants like: "compact", "states", "emphasized", "transparent"`,
                                    availableModifiers: comp.modifiers?.slice(0, 10) ?? []
                                },
                                null,
                                2
                            )
                        }
                    ]
                };
            }

            return {
                content: [
                    {
                        type: 'text' as const,
                        text: JSON.stringify(
                            {
                                component: comp.name,
                                baseClass: comp.baseClass,
                                storybookUrl: comp.storybookUrl,
                                note: 'No HTML examples found. Check the Storybook docs for usage patterns.'
                            },
                            null,
                            2
                        )
                    }
                ]
            };
        }

        return {
            content: [
                {
                    type: 'text' as const,
                    text: JSON.stringify(result, null, 2)
                }
            ]
        };
    }
);

// ---------------------------------------------------------------------------
// Tool: get_design_tokens
// ---------------------------------------------------------------------------
server.tool(
    'get_design_tokens',
    `Search SAP design tokens (CSS custom properties) for fundamental-styles theming.
Returns token names, purposes, and CSS usage examples.
Use this when styling components or building custom layouts with theme-aware values.`,
    {
        query: z.string().describe('What to look for (e.g., "background", "font", "button", "border")'),
        category: z
            .string()
            .optional()
            .describe('Filter by token category (e.g., "brand", "button", "field", "semantic")'),
        limit: z.number().optional().default(50).describe('Maximum number of tokens to return (default: 50, max: 200)'),
        offset: z.number().optional().default(0).describe('Pagination offset (default: 0)')
    },
    async ({ query, category, limit = 50, offset = 0 }) => {
        const lowerQuery = query.toLowerCase();
        let tokens = data.designTokens;

        // Apply category filter
        if (category) {
            const lowerCat = category.toLowerCase();
            tokens = tokens.filter(
                (t) => t.name.toLowerCase().includes(lowerCat) || (t.purpose ?? '').toLowerCase().includes(lowerCat)
            );
        }

        // Apply query filter
        const allMatches = tokens.filter(
            (t) =>
                t.name.toLowerCase().includes(lowerQuery) ||
                (t.purpose ?? '').toLowerCase().includes(lowerQuery) ||
                (t.cssUsage ?? '').toLowerCase().includes(lowerQuery) ||
                (t.value ?? '').toLowerCase().includes(lowerQuery)
        );

        if (allMatches.length === 0) {
            return {
                content: [
                    {
                        type: 'text' as const,
                        text: JSON.stringify(
                            {
                                query,
                                category,
                                matches: 0,
                                note: 'No tokens found. Try broader terms like "color", "background", "font", or "border".'
                            },
                            null,
                            2
                        )
                    }
                ]
            };
        }

        // Deduplicate by token name (keep first occurrence)
        const seenNames = new Set<string>();
        const deduplicated = allMatches.filter((t) => {
            if (seenNames.has(t.name)) {
                return false;
            }
            seenNames.add(t.name);
            return true;
        });

        // Group tokens by semantic category (extracted from token name)
        const grouped: Record<string, typeof deduplicated> = {};
        for (const token of deduplicated) {
            // Extract category from token name (e.g., sapBackground -> Background, sapButton -> Button)
            const match = token.name.match(/^sap([A-Z][a-z]+)/);
            const groupName = match ? match[1] : 'Other';

            if (!grouped[groupName]) {
                grouped[groupName] = [];
            }
            grouped[groupName].push(token);
        }

        // Sort groups by size (most tokens first)
        const sortedGroups = Object.entries(grouped)
            .sort(([, a], [, b]) => b.length - a.length)
            .reduce((acc, [key, value]) => {
                acc[key] = value;
                return acc;
            }, {} as Record<string, typeof deduplicated>);

        // Apply pagination
        const maxLimit = Math.min(limit, 200);
        const paginatedTokens = deduplicated.slice(offset, offset + maxLimit);

        // Identify commonly used tokens (those with short, semantic names)
        const commonTokens = paginatedTokens
            .filter((t) => {
                const name = t.name.toLowerCase();
                return (
                    name.includes('background') ||
                    name.includes('text') ||
                    name.includes('border') ||
                    name === 'sapbrandcolor' ||
                    name === 'sappositivecolor' ||
                    name === 'sapnegativecolor' ||
                    name === 'sapcriticalcolor' ||
                    name === 'sapinformativecolor'
                );
            })
            .map((t) => t.name);

        // Check token data quality
        const qualityStats = {
            complete: 0,
            partial: 0,
            minimal: 0
        };

        const tokensWithQuality = paginatedTokens.map((token) => {
            const quality = checkTokenQuality(token);
            qualityStats[quality.completeness]++;

            return {
                ...token,
                _dataQuality: quality.completeness
            };
        });

        const result = {
            query,
            category: category ?? null,
            pagination: {
                total: deduplicated.length,
                showing: paginatedTokens.length,
                offset,
                limit: maxLimit,
                hasMore: offset + maxLimit < deduplicated.length,
                nextOffset: offset + maxLimit < deduplicated.length ? offset + maxLimit : null
            },
            dataQuality: {
                complete: qualityStats.complete,
                partial: qualityStats.partial,
                minimal: qualityStats.minimal,
                note: qualityStats.minimal > qualityStats.complete ?
                    'Most tokens lack purpose/usage documentation. Use token names and CSS inspection for guidance.' :
                    null
            },
            groupedByCategory: Object.entries(sortedGroups).map(([name, tokens]) => ({
                category: name,
                count: tokens.length,
                tokens: tokens.slice(0, 3).map((t) => t.name) // Show first 3 token names as preview
            })),
            commonlyUsed: commonTokens,
            tokens: tokensWithQuality
        };

        return {
            content: [
                {
                    type: 'text' as const,
                    text: JSON.stringify(result, null, 2)
                }
            ]
        };
    }
);

// ---------------------------------------------------------------------------
// Tool: get_accessibility_guide
// ---------------------------------------------------------------------------
server.tool(
    'get_accessibility_guide',
    `Get accessibility guidance for a fundamental-styles CSS component.
Returns ARIA roles, attributes, interactive elements, keyboard patterns, and notes.
Also includes global accessibility guidelines and common patterns.
Use this when building accessible UIs with fundamental-styles.`,
    {
        component: z.string().describe('Component name or id (e.g., "button", "dialog", "table")')
    },
    async ({ component }) => {
        const comp = findComponent(component);

        if (!comp) {
            return {
                content: [
                    {
                        type: 'text' as const,
                        text: `Component "${component}" not found. Use search_components to find available components.`
                    }
                ]
            };
        }

        const a11yData = data.accessibility?.components?.[comp.id];

        const result: Record<string, unknown> = {
            component: comp.name,
            baseClass: comp.baseClass
        };

        if (a11yData) {
            result['roles'] = a11yData.roles;
            result['ariaAttributes'] = a11yData.ariaAttributes;
            result['interactiveElements'] = a11yData.interactiveElements;
            result['keyboardPatterns'] = a11yData.keyboardPatterns;
            result['notes'] = a11yData.notes;
        } else {
            result['note'] = 'No specific accessibility data for this component.';
        }

        // Include global guidelines
        if (data.accessibility?.globalGuidelines) {
            result['globalGuidelines'] = data.accessibility.globalGuidelines;
        }

        // Include common patterns relevant to this component
        if (data.accessibility?.commonPatterns) {
            result['commonPatterns'] = data.accessibility.commonPatterns;
        }

        // Include accessibility info from the catalog
        if (comp.accessibility) {
            result['catalogAccessibility'] = comp.accessibility;
        }

        return {
            content: [
                {
                    type: 'text' as const,
                    text: JSON.stringify(result, null, 2)
                }
            ]
        };
    }
);

// ---------------------------------------------------------------------------
// Tool: get_utility_classes
// ---------------------------------------------------------------------------
server.tool(
    'get_utility_classes',
    `Browse and search utility CSS classes from @fundamental-styles/common-css.
Includes spacing (margins, paddings), flexbox, typography, colors, shadows, and more.
Use this when you need helper classes for layout, spacing, or visual styling.`,
    {
        query: z.string().optional().describe('Search keyword (e.g., "margin", "flex", "center")'),
        category: z
            .string()
            .optional()
            .describe('Filter by category (e.g., "margin", "padding", "flex", "typography", "shadow")')
    },
    async ({ query, category }) => {
        if (!data.utilityClasses) {
            return {
                content: [
                    {
                        type: 'text' as const,
                        text: JSON.stringify({ error: 'Utility classes data not available.' }, null, 2)
                    }
                ]
            };
        }

        const categories = data.utilityClasses.categories;
        let results: Array<{ category: string; class: string; description: string }> = [];

        for (const [catKey, cat] of Object.entries(categories)) {
            if (category && !catKey.toLowerCase().includes(category.toLowerCase())) {
                continue;
            }
            for (const cls of cat.classes) {
                results.push({
                    category: catKey,
                    class: cls.class,
                    description: cls.description
                });
            }
        }

        if (query) {
            const lowerQuery = query.toLowerCase();
            results = results.filter(
                (r) =>
                    r.class.toLowerCase().includes(lowerQuery) ||
                    r.description.toLowerCase().includes(lowerQuery) ||
                    r.category.toLowerCase().includes(lowerQuery)
            );
        }

        results = results.slice(0, 50);

        return {
            content: [
                {
                    type: 'text' as const,
                    text: JSON.stringify({ query, category, count: results.length, classes: results }, null, 2)
                }
            ]
        };
    }
);

// ---------------------------------------------------------------------------
// Tool: recommend_components
// ---------------------------------------------------------------------------
server.tool(
    'recommend_components',
    `Given a UI description, recommend which fundamental-styles CSS components to use.
Describe what you want to build (e.g., "a login form", "a data table with filters",
"a master-detail layout") and get recommended components with their CSS classes and confidence scores.`,
    {
        description: z.string().describe('What you want to build (e.g., "a form with validation and submit button", "something clickable")')
    },
    async ({ description }) => {
        const lowerDesc = description.toLowerCase();
        const recommendations: Array<{
            component: string;
            baseClass: string;
            category: string;
            reason: string;
            confidence: 'high' | 'medium' | 'low';
            priority: number;
        }> = [];

        // Handle vague queries with general-purpose components
        const vaguePhrases = ['something', 'anything', 'component', 'element', 'clickable', 'interactive', 'thing'];
        const isVague = vaguePhrases.some((phrase) => lowerDesc.includes(phrase));

        if (isVague) {
            // For vague queries, recommend the most common general-purpose components
            const generalPurpose = [
                { id: 'button', reason: 'Primary interactive element - for actions and triggers', confidence: 'high' as const, priority: 1 },
                { id: 'link', reason: 'For navigation and hyperlinks', confidence: 'high' as const, priority: 2 },
                { id: 'input', reason: 'For user text input', confidence: 'medium' as const, priority: 3 },
                { id: 'icon', reason: 'Visual indicators and actions', confidence: 'medium' as const, priority: 4 },
                { id: 'menu', reason: 'For dropdown actions and selections', confidence: 'medium' as const, priority: 5 }
            ];

            // Filter by specific hints if present
            if (lowerDesc.includes('click')) {
                generalPurpose.unshift(
                    { id: 'button', reason: 'Clickable action - primary use case for buttons', confidence: 'high' as const, priority: 1 }
                );
            }

            for (const item of generalPurpose) {
                const comp = data.components.find((c) => c.id === item.id);
                if (comp && !recommendations.some((r) => r.baseClass === comp.baseClass)) {
                    recommendations.push({
                        component: comp.name,
                        baseClass: comp.baseClass,
                        category: comp.category,
                        reason: item.reason,
                        confidence: item.confidence,
                        priority: item.priority
                    });
                }
            }
        } else {
            // Pattern-based recommendations with confidence scores
            for (const [pattern, componentIds] of Object.entries(UI_PATTERNS)) {
                const keywords = pattern.split('|');
                const matchedKeywords = keywords.filter((kw) => lowerDesc.includes(kw));

                if (matchedKeywords.length > 0) {
                    // Confidence based on specificity of match
                    const confidence: 'high' | 'medium' | 'low' =
                        matchedKeywords.length >= 2 ? 'high' :
                        matchedKeywords[0].length > 4 ? 'high' : 'medium';

                    for (const id of componentIds) {
                        const comp = data.components.find((c) => c.id === id);
                        if (comp && !recommendations.some((r) => r.component === comp.name)) {
                            // Determine priority and specificity
                            const isCore = ['button', 'input', 'form-item', 'form-label'].includes(id);
                            const isSpecialized = id.includes('-') && !isCore;

                            recommendations.push({
                                component: comp.name,
                                baseClass: comp.baseClass,
                                category: comp.category,
                                reason: `Matches "${matchedKeywords.join('", "')}" - ${isCore ? 'essential component' : isSpecialized ? 'specialized variant' : 'recommended for this use case'}`,
                                confidence,
                                priority: isCore ? 1 : isSpecialized ? 3 : 2
                            });
                        }
                    }
                }
            }

            // Keyword fallback search with lower confidence
            if (recommendations.length < 3) {
                const words = lowerDesc.split(/\s+/).filter((w) => w.length > 3);
                for (const word of words) {
                    const matches = data.components
                        .filter(
                            (c) =>
                                c.id.includes(word) ||
                                c.name.toLowerCase().includes(word) ||
                                c.category?.toLowerCase().includes(word) ||
                                c.baseClass.includes(word)
                        )
                        .slice(0, 3);

                    for (const comp of matches) {
                        if (!recommendations.some((r) => r.baseClass === comp.baseClass)) {
                            recommendations.push({
                                component: comp.name,
                                baseClass: comp.baseClass,
                                category: comp.category,
                                reason: `Component name/category matches "${word}"`,
                                confidence: 'low',
                                priority: 4
                            });
                        }
                    }
                }
            }
        }

        // Sort by priority, then confidence, then alphabetically
        const confidenceOrder = { high: 1, medium: 2, low: 3 };
        recommendations.sort((a, b) => {
            if (a.priority !== b.priority) return a.priority - b.priority;
            if (a.confidence !== b.confidence) return confidenceOrder[a.confidence] - confidenceOrder[b.confidence];
            return a.component.localeCompare(b.component);
        });

        // Limit results and group by confidence
        const limitedRecommendations = recommendations.slice(0, 15);
        const groupedByConfidence = {
            high: limitedRecommendations.filter((r) => r.confidence === 'high'),
            medium: limitedRecommendations.filter((r) => r.confidence === 'medium'),
            low: limitedRecommendations.filter((r) => r.confidence === 'low')
        };

        return {
            content: [
                {
                    type: 'text' as const,
                    text: JSON.stringify(
                        {
                            description,
                            isVagueQuery: isVague,
                            summary: {
                                total: limitedRecommendations.length,
                                highConfidence: groupedByConfidence.high.length,
                                mediumConfidence: groupedByConfidence.medium.length,
                                lowConfidence: groupedByConfidence.low.length
                            },
                            recommendations: limitedRecommendations,
                            note: 'Use get_css_classes for full class details and get_component_html for usage examples.'
                        },
                        null,
                        2
                    )
                }
            ]
        };
    }
);

// ---------------------------------------------------------------------------
// Tool: get_component_relationships
// ---------------------------------------------------------------------------
server.tool(
    'get_component_relationships',
    `Show what CSS components depend on, compose with, or are alternatives to a given component.
Returns import dependencies, related components, and similar components.
Use this when building complex layouts to understand component composition.`,
    {
        component: z.string().describe('Component name or id (e.g., "button", "dialog", "table")')
    },
    async ({ component }) => {
        const comp = findComponent(component);

        if (!comp) {
            return {
                content: [
                    {
                        type: 'text' as const,
                        text: `Component "${component}" not found. Use search_components to find available components.`
                    }
                ]
            };
        }

        if (!data.relationships) {
            return {
                content: [
                    {
                        type: 'text' as const,
                        text: JSON.stringify(
                            { component: comp.name, error: 'Relationship data not available.' },
                            null,
                            2
                        )
                    }
                ]
            };
        }

        const outgoing = data.relationships.relationships.filter((r) => r.from === comp.id);
        const incoming = data.relationships.relationships.filter((r) => r.to === comp.id);

        const result = {
            component: comp.name,
            baseClass: comp.baseClass,
            category: comp.category,
            relatedComponents: comp.relatedComponents,
            dependencies: comp.dependencies,
            useCases: comp.useCases,
            avoidWhen: comp.avoidWhen,
            outgoingRelationships: outgoing.map((r) => ({
                target: r.to,
                type: r.type,
                bidirectional: r.bidirectional
            })),
            incomingRelationships: incoming.map((r) => ({
                source: r.from,
                type: r.type,
                bidirectional: r.bidirectional
            }))
        };

        return {
            content: [
                {
                    type: 'text' as const,
                    text: JSON.stringify(result, null, 2)
                }
            ]
        };
    }
);

// ---------------------------------------------------------------------------
// Tool: get_component_guidance
// ---------------------------------------------------------------------------
server.tool(
    'get_component_guidance',
    `Get Fiori Design Guidelines for a component including when to use it, when to avoid it, and best practices.
Returns detailed guidance from SAP Fiori Design System including use cases, anti-patterns, and design tips.
Can also compare multiple components (e.g., "dialog vs message-box vs popover") to help choose the right one.
Use this when you need to understand if a component is appropriate for a specific use case, need design guidance,
or want to compare similar components to make the right choice.`,
    {
        component: z.string().describe('Component name or id (e.g., "avatar", "button", "table"), or comparison query (e.g., "dialog vs message-box")')
    },
    async ({ component }) => {
        // Check if this is a comparison query (contains "vs", "or", "versus")
        const isComparison = /\s+(vs\.?|versus|or)\s+/i.test(component);

        if (isComparison) {
            // Extract component names from comparison query
            const componentNames = component
                .split(/\s+(?:vs\.?|versus|or)\s+/i)
                .map((name) => name.trim().toLowerCase());

            const comparedComponents: Array<{
                component: string;
                baseClass: string;
                category: string;
                description?: string;
                whenToUse?: string[];
                whenToAvoid?: string[];
                bestPractices?: string[];
                relatedComponents?: string[];
            }> = [];

            // Gather guidance for each component
            for (const name of componentNames) {
                const comp = findComponent(name);
                if (!comp) continue;

                const guidance = data.componentGuidance?.components[comp.id];
                if (!guidance) {
                    comparedComponents.push({
                        component: comp.name,
                        baseClass: comp.baseClass,
                        category: comp.category,
                        description: comp.description
                    });
                } else {
                    comparedComponents.push({
                        component: comp.name,
                        baseClass: comp.baseClass,
                        category: guidance.category || comp.category,
                        description: guidance.description,
                        whenToUse: guidance.whenToUse,
                        whenToAvoid: guidance.whenToAvoid,
                        bestPractices: guidance.bestPractices,
                        relatedComponents: guidance.relatedComponents
                    });
                }
            }

            if (comparedComponents.length === 0) {
                return {
                    content: [
                        {
                            type: 'text' as const,
                            text: `No components found for comparison: "${component}". Use search_components to find available components.`
                        }
                    ]
                };
            }

            // Generate comparison summary
            const comparison = {
                query: component,
                type: 'comparison',
                componentsCompared: comparedComponents.length,
                components: comparedComponents,
                summary: generateComparisonSummary(comparedComponents)
            };

            return {
                content: [
                    {
                        type: 'text' as const,
                        text: JSON.stringify(comparison, null, 2)
                    }
                ]
            };
        }

        // Single component query
        const comp = findComponent(component);

        if (!comp) {
            return {
                content: [
                    {
                        type: 'text' as const,
                        text: `Component "${component}" not found. Use search_components to find available components.`
                    }
                ]
            };
        }

        // Check if component guidance data is available
        if (!data.componentGuidance) {
            return {
                content: [
                    {
                        type: 'text' as const,
                        text: JSON.stringify(
                            { component: comp.name, error: 'Component guidance data not available.' },
                            null,
                            2
                        )
                    }
                ]
            };
        }

        // Get guidance from the new comprehensive guidance file
        const guidance = data.componentGuidance.components[comp.id];

        if (!guidance) {
            return {
                content: [
                    {
                        type: 'text' as const,
                        text: JSON.stringify(
                            {
                                component: comp.name,
                                baseClass: comp.baseClass,
                                note: 'No specific Fiori design guidance available for this component yet.',
                                suggestion: 'Check the component catalog or Fiori Design Guidelines website.'
                            },
                            null,
                            2
                        )
                    }
                ]
            };
        }

        const result: Record<string, unknown> = {
            component: comp.name,
            baseClass: comp.baseClass,
            category: guidance.category
        };

        if (guidance.description) {
            result['description'] = guidance.description;
        }

        if (guidance.whenToUse && guidance.whenToUse.length > 0) {
            result['whenToUse'] = guidance.whenToUse;
        }

        if (guidance.whenToAvoid && guidance.whenToAvoid.length > 0) {
            result['whenToAvoid'] = guidance.whenToAvoid;
        }

        if (guidance.bestPractices && guidance.bestPractices.length > 0) {
            result['bestPractices'] = guidance.bestPractices;
        }

        if (guidance.relatedComponents && guidance.relatedComponents.length > 0) {
            result['relatedComponents'] = guidance.relatedComponents;
            result['comparisonHint'] = `To compare ${comp.name} with alternatives, try: get_component_guidance with "${comp.name} vs ${guidance.relatedComponents[0]}"`;
        }

        return {
            content: [
                {
                    type: 'text' as const,
                    text: JSON.stringify(result, null, 2)
                }
            ]
        };
    }
);

/** Generate a comparison summary highlighting key differences between components. */
function generateComparisonSummary(components: Array<{ component: string; category: string; whenToUse?: string[]; whenToAvoid?: string[] }>): string {
    if (components.length < 2) {
        return 'Not enough components to compare.';
    }

    const summaryParts: string[] = [];

    // Compare categories
    const categories = [...new Set(components.map((c) => c.category))];
    if (categories.length === 1) {
        summaryParts.push(`All components are in the ${categories[0]} category.`);
    } else {
        summaryParts.push(`Comparing components from different categories: ${categories.join(', ')}.`);
    }

    // Highlight key differences in use cases
    const componentsWithGuidance = components.filter((c) => c.whenToUse && c.whenToUse.length > 0);
    if (componentsWithGuidance.length >= 2) {
        summaryParts.push(`Key differences: ${componentsWithGuidance.map((c) => `${c.component} is best for ${c.whenToUse?.[0]}`).join('; ')}.`);
    }

    // Highlight what to avoid
    const componentsWithAvoidance = components.filter((c) => c.whenToAvoid && c.whenToAvoid.length > 0);
    if (componentsWithAvoidance.length > 0) {
        summaryParts.push(`Avoid: ${componentsWithAvoidance.map((c) => `${c.component} should not be used for ${c.whenToAvoid?.[0]}`).join('; ')}.`);
    }

    return summaryParts.join(' ') || 'Limited guidance available for comparison.';
}

// ---------------------------------------------------------------------------
// Tool: get_theme_info
// ---------------------------------------------------------------------------
server.tool(
    'get_theme_info',
    `List available SAP design themes for fundamental-styles and their descriptions.
Returns theme names, descriptions, and CSS import paths.
Use this when you need to set up theming or understand theme options.`,
    {
        theme: z.string().optional().describe('Specific theme name for details (e.g., "sap_horizon_dark")')
    },
    async ({ theme }) => {
        const themes = AVAILABLE_THEMES;

        if (theme) {
            const found = themes.find((t) => t.id === theme || t.id.includes(theme.toLowerCase()));
            if (!found) {
                return {
                    content: [
                        {
                            type: 'text' as const,
                            text: JSON.stringify(
                                {
                                    query: theme,
                                    error: `Theme "${theme}" not found.`,
                                    available: themes.map((t) => t.id)
                                },
                                null,
                                2
                            )
                        }
                    ]
                };
            }
            return {
                content: [
                    {
                        type: 'text' as const,
                        text: JSON.stringify(found, null, 2)
                    }
                ]
            };
        }

        return {
            content: [
                {
                    type: 'text' as const,
                    text: JSON.stringify(
                        {
                            count: themes.length,
                            themes,
                            note: 'Include the theme CSS before component CSS. sap_horizon is the recommended default.'
                        },
                        null,
                        2
                    )
                }
            ]
        };
    }
);

// ---------------------------------------------------------------------------
// Tool: get_migration_guide
// ---------------------------------------------------------------------------
server.tool(
    'get_migration_guide',
    `Get migration guidance for upgrading fundamental-styles between versions.
Returns breaking changes, deprecations, new features, and bug fixes.
Filter by component scope and version range. Use this when upgrading fundamental-styles
or checking what changed between releases. By default, shows changes from the last 6 months,
prioritizing breaking changes and deprecations.`,
    {
        component: z.string().optional().describe('Filter by component scope (e.g., "button", "dialog", "table")'),
        from_version: z.string().optional().describe('Starting version (e.g., "0.39.0"). Defaults to 6 months ago if not specified.'),
        to_version: z.string().optional().describe('Ending version (e.g., "0.41.0"). Omit for latest.'),
        type: z
            .enum(['breaking', 'feature', 'fix', 'deprecation'] as const)
            .optional()
            .describe('Filter by change type. Defaults to prioritizing breaking changes and deprecations.'),
        limit: z.number().optional().default(100).describe('Maximum number of changes to return (default: 100)')
    },
    async ({ component, from_version, to_version, type, limit = 100 }) => {
        if (changelog.length === 0) {
            return {
                content: [
                    {
                        type: 'text' as const,
                        text: JSON.stringify({ error: 'Changelog data not available.' }, null, 2)
                    }
                ]
            };
        }

        let entries = changelog;

        // Default to last 6 months if no from_version specified
        if (!from_version) {
            const sixMonthsAgo = new Date();
            sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

            // Find entries from the last 6 months
            entries = entries.filter((e) => {
                if (!e.date) return false;
                const entryDate = new Date(e.date);
                return entryDate >= sixMonthsAgo;
            });
        } else {
            // Filter by version range
            entries = entries.filter((e) => compareVersions(e.version, from_version) >= 0);
        }

        if (to_version) {
            entries = entries.filter((e) => compareVersions(e.version, to_version) <= 0);
        }

        // Filter by component scope
        if (component) {
            const lowerComp = component.toLowerCase();
            entries = entries.filter(
                (e) =>
                    e.scope?.toLowerCase() === lowerComp ||
                    e.scope?.toLowerCase().includes(lowerComp) ||
                    e.description.toLowerCase().includes(lowerComp)
            );
        }

        // Filter by type
        if (type) {
            entries = entries.filter((e) => e.type === type);
        }

        // Deduplicate: collapse RC entries into stable releases
        const deduped = deduplicateEntries(entries);

        // Prioritize breaking changes and deprecations if no type filter specified
        let prioritizedEntries = deduped;
        if (!type) {
            const breakingAndDeprecations = deduped.filter(
                (e) => e.type === 'breaking' || e.type === 'deprecation'
            );
            const otherEntries = deduped.filter(
                (e) => e.type !== 'breaking' && e.type !== 'deprecation'
            );
            prioritizedEntries = [...breakingAndDeprecations, ...otherEntries];
        }

        // Apply limit
        const limitedEntries = prioritizedEntries.slice(0, limit);

        // Group by version
        const byVersion: Record<string, ChangelogEntry[]> = {};
        for (const entry of limitedEntries) {
            const key = entry.version;
            if (!byVersion[key]) {
                byVersion[key] = [];
            }
            byVersion[key].push(entry);
        }

        // Sort versions descending
        const sortedVersions = Object.keys(byVersion).sort((a, b) => compareVersions(b, a));

        // Count changes by type
        const typeCounts = {
            breaking: deduped.filter((e) => e.type === 'breaking').length,
            deprecation: deduped.filter((e) => e.type === 'deprecation').length,
            feature: deduped.filter((e) => e.type === 'feature').length,
            fix: deduped.filter((e) => e.type === 'fix').length
        };

        const result = {
            query: { component, from_version, to_version, type },
            summary: {
                totalMatching: deduped.length,
                showing: limitedEntries.length,
                byType: typeCounts,
                actionRequired: typeCounts.breaking + typeCounts.deprecation,
                prioritized: !type ? 'Breaking changes and deprecations shown first' : null
            },
            versions: sortedVersions.map((v) => {
                const versionEntries = byVersion[v];
                const hasBreaking = versionEntries.some((e) => e.type === 'breaking');
                const hasDeprecation = versionEntries.some((e) => e.type === 'deprecation');

                return {
                    version: v,
                    date: versionEntries[0]?.date ?? null,
                    severity: hasBreaking ? 'breaking' : hasDeprecation ? 'deprecation' : 'normal',
                    actionRequired: hasBreaking || hasDeprecation,
                    changes: versionEntries.map((e) => ({
                        type: e.type,
                        scope: e.scope,
                        description: e.description,
                        issueUrl: e.issueUrl,
                        actionRequired: e.type === 'breaking' || e.type === 'deprecation'
                    }))
                };
            })
        };

        if (limitedEntries.length === 0) {
            const totalAvailable = changelog.length;
            return {
                content: [
                    {
                        type: 'text' as const,
                        text: JSON.stringify(
                            {
                                ...result,
                                note: `No matching changelog entries found. ${totalAvailable} total entries available.`,
                                suggestion: 'Try broader filters, remove the component filter, or extend the date range.'
                            },
                            null,
                            2
                        )
                    }
                ]
            };
        }

        return {
            content: [
                {
                    type: 'text' as const,
                    text: JSON.stringify(result, null, 2)
                }
            ]
        };
    }
);

// ---------------------------------------------------------------------------
// Tool: setup_project
// ---------------------------------------------------------------------------
server.tool(
    'setup_project',
    `Get comprehensive quick start setup instructions for fundamental-styles in a new project.
Returns detailed step-by-step instructions for both CDN and NPM installation approaches,
including theme setup, font configuration, component imports, and best practices.
Use this when starting a new project, for quick start guidance, or helping users get started with fundamental-styles.
Keywords: quick start, getting started, setup, initial setup, new project, bootstrap, scaffold`,
    {
        approach: z
            .enum(['cdn', 'npm', 'both'] as const)
            .default('both')
            .describe('Installation approach: "cdn" for CDN-only, "npm" for NPM-only, "both" for both approaches'),
        themes: z
            .enum([
                'sap_horizon',
                'sap_horizon_dark',
                'sap_horizon_hcb',
                'sap_horizon_hcw',
                'sap_fiori_3',
                'sap_fiori_3_dark',
                'sap_fiori_3_hcb',
                'sap_fiori_3_hcw',
                'all',
                'all_horizon',
                'all_fiori',
                'all_dark',
                'all_light',
                'all_high_contrast'
            ] as const)
            .default('sap_horizon')
            .describe('Theme to include. Individual themes (sap_horizon, sap_horizon_dark, etc.) or presets (all, all_horizon, all_fiori, all_dark, all_light, all_high_contrast)'),
        componentMode: z
            .enum(['all', 'selective'] as const)
            .default('selective')
            .describe('Import all components or selective components (default: selective)'),
        components: z
            .array(z.string())
            .optional()
            .describe('Specific components to include (e.g., ["button", "input", "table"]). Only used with componentMode="selective"')
    },
    async ({ approach, themes, componentMode, components }) => {
        const componentList = components || ['button', 'input', 'form-item', 'form-label'];

        // All available themes
        const allThemes = [
            'sap_horizon',
            'sap_horizon_dark',
            'sap_horizon_hcb',
            'sap_horizon_hcw',
            'sap_fiori_3',
            'sap_fiori_3_dark',
            'sap_fiori_3_hcb',
            'sap_fiori_3_hcw'
        ];

        // Theme presets
        const horizonThemes = ['sap_horizon', 'sap_horizon_dark', 'sap_horizon_hcb', 'sap_horizon_hcw'];
        const fioriThemes = ['sap_fiori_3', 'sap_fiori_3_dark', 'sap_fiori_3_hcb', 'sap_fiori_3_hcw'];
        const darkThemes = ['sap_horizon_dark', 'sap_fiori_3_dark'];
        const lightThemes = ['sap_horizon', 'sap_fiori_3'];
        const highContrastThemes = ['sap_horizon_hcb', 'sap_horizon_hcw', 'sap_fiori_3_hcb', 'sap_fiori_3_hcw'];

        // Determine which themes to include based on selection
        let selectedThemes: string[];

        switch (themes) {
            case 'all':
                selectedThemes = allThemes;
                break;
            case 'all_horizon':
                selectedThemes = horizonThemes;
                break;
            case 'all_fiori':
                selectedThemes = fioriThemes;
                break;
            case 'all_dark':
                selectedThemes = darkThemes;
                break;
            case 'all_light':
                selectedThemes = lightThemes;
                break;
            case 'all_high_contrast':
                selectedThemes = highContrastThemes;
                break;
            default:
                // Individual theme name
                selectedThemes = [themes];
        }

        // Build theme-specific instructions for each selected theme
        const themeInstructions = selectedThemes.map(theme => {
            const themeBaseUrl = `https://unpkg.com/@sap-theming/theming-base-content/content/Base/baseLib/${theme}/css_variables.css`;
            const themeFundUrl = `https://unpkg.com/fundamental-styles@latest/dist/theming/${theme}.css`;

            const themeNpmBase = `@sap-theming/theming-base-content/content/Base/baseLib/${theme}/css_variables.css`;
            const themeNpmFund = `fundamental-styles/dist/theming/${theme}.css`;

            return {
                theme,
                cdn: {
                    themeBaseUrl,
                    themeFundUrl
                },
                npm: {
                    themeNpmBase,
                    themeNpmFund
                }
            };
        });

        // Use the first theme for the main example
        const primaryTheme = themeInstructions[0];

        const result: Record<string, unknown> = {
            library: 'fundamental-styles',
            version: data.version,
            themes: selectedThemes,
            primaryTheme: primaryTheme.theme,
            approach: approach
        };

        // CDN Instructions
        if (approach === 'cdn' || approach === 'both') {
            const cdnComponentLinks = componentMode === 'all'
                ? ['<link href="https://unpkg.com/fundamental-styles@latest/dist/fundamental-styles.css" rel="stylesheet">']
                : componentList.map(c => `<link href="https://unpkg.com/fundamental-styles@latest/dist/${c}.css" rel="stylesheet">`);

            result['cdn'] = {
                description: 'CDN installation requires no build tools. Perfect for prototyping or static HTML projects.',
                primaryTheme: primaryTheme.theme,
                themes: themeInstructions.map(t => ({
                    theme: t.theme,
                    themeBaseUrl: t.cdn.themeBaseUrl,
                    themeFundUrl: t.cdn.themeFundUrl
                })),
                steps: [
                    {
                        step: 1,
                        title: 'Add Theme CSS to <head>',
                        description: selectedThemes.length > 1
                            ? `Two CSS files are REQUIRED for themes to work. Order matters. Showing setup for ${primaryTheme.theme} (primary theme). See 'themes' array for ${selectedThemes.length - 1} additional theme${selectedThemes.length > 2 ? 's' : ''}.`
                            : 'Two CSS files are REQUIRED for themes to work. Order matters.',
                        code: `<!-- 1. Theme base variables (required) -->
<link href="${primaryTheme.cdn.themeBaseUrl}" rel="stylesheet">

<!-- 2. Fundamental Styles theme customizations (required) -->
<link href="${primaryTheme.cdn.themeFundUrl}" rel="stylesheet">`,
                        language: 'html'
                    },
                    {
                        step: 2,
                        title: 'Add Component CSS',
                        description: componentMode === 'all'
                            ? 'Import all components in one file (larger bundle size)'
                            : 'Import only the components you need (smaller bundle size)',
                        code: cdnComponentLinks.join('\n'),
                        language: 'html'
                    },
                    {
                        step: 3,
                        title: 'Set Base Font Size',
                        description: 'Required for proper component sizing per SAP Design specifications',
                        code: `<style>
  html {
    font-size: 16px; /* Required for proper component sizing */
  }
</style>`,
                        language: 'html'
                    },
                    {
                        step: 4,
                        title: 'Use Components in HTML',
                        description: 'Components use BEM naming: fd-{component}, fd-{component}--{modifier}',
                        code: `<button class="fd-button fd-button--emphasized">Click Me</button>
<input class="fd-input" type="text" placeholder="Enter text">`,
                        language: 'html'
                    }
                ],
                completeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fundamental Styles - Getting Started</title>

  <!-- 1. Theme base variables (required) -->
  <link href="${primaryTheme.cdn.themeBaseUrl}" rel="stylesheet">

  <!-- 2. Fundamental Styles theme customizations (required) -->
  <link href="${primaryTheme.cdn.themeFundUrl}" rel="stylesheet">

  <!-- 3. Component CSS -->
${cdnComponentLinks.map(l => '  ' + l).join('\n')}

  <!-- 4. Base font size (required) -->
  <style>
    html {
      font-size: 16px;
    }
    body {
      font-family: '72', Arial, sans-serif;
      padding: 2rem;
    }
  </style>
</head>
<body>
  <h1>Hello Fundamental Styles!</h1>

  <div class="fd-form-item" style="margin-bottom: 1rem;">
    <label class="fd-form-label" for="name">Name</label>
    <input class="fd-input" id="name" type="text" placeholder="Enter your name">
  </div>

  <button class="fd-button fd-button--emphasized">Submit</button>
  <button class="fd-button fd-button--transparent">Cancel</button>
</body>
</html>`,
                notes: [
                    '📌 Pin to specific version for production: https://unpkg.com/fundamental-styles@0.41.6/dist/...',
                    '⚠️ Always include BOTH theme CSS files (base variables + fundamental theme)',
                    '🎨 Fonts and icons are included automatically from @sap-theming/theming-base-content',
                    '🔗 No JavaScript required - fundamental-styles is CSS-only',
                    selectedThemes.length > 1 ? `🎨 ${selectedThemes.length} theme${selectedThemes.length > 1 ? 's' : ''} available - see 'themes' array for alternatives` : null
                ].filter(Boolean)
            };
        }

        // NPM Instructions
        if (approach === 'npm' || approach === 'both') {
            const npmComponentImports = componentMode === 'all'
                ? ["import 'fundamental-styles/dist/fundamental-styles.css';"]
                : componentList.map(c => `import 'fundamental-styles/dist/${c}.css';`);

            result['npm'] = {
                description: 'NPM installation for modern build tools (Webpack, Vite, Rollup, etc.)',
                primaryTheme: primaryTheme.theme,
                themes: themeInstructions.map(t => ({
                    theme: t.theme,
                    themeNpmBase: t.npm.themeNpmBase,
                    themeNpmFund: t.npm.themeNpmFund
                })),
                steps: [
                    {
                        step: 1,
                        title: 'Install Packages',
                        description: 'fundamental-styles requires @sap-theming/theming-base-content for themes, fonts, and icons',
                        commands: [
                            'npm install fundamental-styles @sap-theming/theming-base-content'
                        ],
                        language: 'bash'
                    },
                    {
                        step: 2,
                        title: 'Import Theme CSS',
                        description: selectedThemes.length > 1
                            ? `Import in your main JavaScript/TypeScript entry point (e.g., main.js, index.js, App.tsx). Showing ${primaryTheme.theme} (primary theme). See 'themes' array for ${selectedThemes.length - 1} additional theme${selectedThemes.length > 2 ? 's' : ''}.`
                            : 'Import in your main JavaScript/TypeScript entry point (e.g., main.js, index.js, App.tsx)',
                        code: `// 1. Theme base variables (required)
import '${primaryTheme.npm.themeNpmBase}';

// 2. Fundamental Styles theme customizations (required)
import '${primaryTheme.npm.themeNpmFund}';`,
                        language: 'javascript'
                    },
                    {
                        step: 3,
                        title: 'Import Component CSS',
                        description: componentMode === 'all'
                            ? 'Import all components (larger bundle, simpler imports)'
                            : 'Import only what you need (smaller bundle, recommended for production)',
                        code: npmComponentImports.join('\n'),
                        language: 'javascript'
                    },
                    {
                        step: 4,
                        title: 'Configure Bundler for Fonts',
                        description: 'Ensure your bundler can handle font files from node_modules',
                        frameworks: {
                            webpack: {
                                description: 'Add file-loader or asset/resource rule',
                                code: `// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\\.(woff|woff2|ttf|eot|svg)$/,
        type: 'asset/resource'
      }
    ]
  }
};`,
                                language: 'javascript'
                            },
                            vite: {
                                description: 'Vite handles fonts automatically, no configuration needed',
                                code: '// No configuration needed - Vite handles fonts out of the box ✅',
                                language: 'javascript'
                            },
                            create_react_app: {
                                description: 'CRA handles fonts automatically',
                                code: '// No configuration needed - CRA handles fonts out of the box ✅',
                                language: 'javascript'
                            },
                            angular: {
                                description: 'Add font paths to angular.json assets',
                                code: `// angular.json
{
  "projects": {
    "your-app": {
      "architect": {
        "build": {
          "options": {
            "assets": [
              {
                "glob": "**/*",
                "input": "node_modules/@sap-theming/theming-base-content/content/Base/baseLib/${primaryTheme.theme}/fonts",
                "output": "/fonts"
              }
            ]
          }
        }
      }
    }
  }
}`,
                                language: 'json'
                            }
                        }
                    },
                    {
                        step: 5,
                        title: 'Set Base Font Size',
                        description: 'Add to your global CSS file (e.g., index.css, globals.css, styles.css)',
                        code: `html {
  font-size: 16px; /* Required for proper component sizing */
}

body {
  font-family: '72', Arial, sans-serif;
  margin: 0;
  padding: 0;
}`,
                        language: 'css'
                    },
                    {
                        step: 6,
                        title: 'Use Components',
                        description: 'Use fundamental-styles classes in your HTML/JSX/templates',
                        code: `<button className="fd-button fd-button--emphasized">Click Me</button>
<input className="fd-input" type="text" placeholder="Enter text" />`,
                        language: 'jsx'
                    }
                ],
                notes: [
                    '📦 Always install BOTH packages: fundamental-styles AND @sap-theming/theming-base-content',
                    '⚠️ Import theme CSS before component CSS',
                    '🎨 Fonts are located in @sap-theming/theming-base-content/content/Base/baseLib/{theme}/fonts/',
                    '🔧 Most modern bundlers (Vite, CRA, Next.js) handle fonts automatically',
                    '📝 For TypeScript, no @types package needed - fundamental-styles is CSS-only',
                    selectedThemes.length > 1 ? `🎨 ${selectedThemes.length} theme${selectedThemes.length > 1 ? 's' : ''} available - see 'themes' array for alternatives` : null
                ].filter(Boolean)
            };
        }

        // Common information for both approaches
        result['nextSteps'] = {
            componentExplorer: 'https://sap.github.io/fundamental-styles/',
            documentation: [
                'CLAUDE.md - Quick reference for AI agents: https://github.com/SAP/fundamental-styles/blob/main/CLAUDE.md',
                'Component catalog (JSON): Use list_components tool',
                'HTML examples: Use get_html_examples tool',
                'Component guidance: Use get_component_guidance tool'
            ],
            commonPatterns: {
                buttons: 'fd-button, fd-button--emphasized (primary), fd-button--transparent (ghost)',
                forms: 'fd-form-item + fd-form-label + fd-input/fd-checkbox/fd-radio',
                states: 'is-error, is-success, is-warning, is-disabled, is-selected',
                sizing: 'fd-{component}--compact for dense UIs',
                icons: 'sap-icon--{icon-name} (e.g., sap-icon--add, sap-icon--delete)'
            },
            availableThemes: [
                'sap_horizon (default, light)',
                'sap_horizon_dark',
                'sap_horizon_hcb (high contrast black)',
                'sap_horizon_hcw (high contrast white)',
                'sap_fiori_3 (Quartz light)',
                'sap_fiori_3_dark'
            ]
        };

        result['troubleshooting'] = [
            {
                issue: 'Components look unstyled or broken',
                solution: 'Verify BOTH theme CSS files are loaded (base variables + fundamental theme)'
            },
            {
                issue: 'Fonts not loading',
                solution: 'Ensure @sap-theming/theming-base-content is installed and bundler can handle font files'
            },
            {
                issue: 'Icons not showing',
                solution: 'Icons come from @sap-theming/theming-base-content theme CSS. Verify theme is loaded correctly.'
            },
            {
                issue: 'Component sizes are wrong',
                solution: 'Set html { font-size: 16px; } in your global CSS'
            },
            {
                issue: 'CSS conflicts with existing styles',
                solution: 'fundamental-styles uses BEM naming (fd-*) to minimize conflicts. Check specificity issues.'
            }
        ];

        result['additionalPackages'] = [
            {
                name: '@fundamental-styles/common-css',
                description: 'Utility classes for margins, padding, flexbox, display (sap-* classes)',
                install: 'npm install @fundamental-styles/common-css',
                usage: "import '@fundamental-styles/common-css/dist/common-css.css';"
            },
            {
                name: '@fundamental-styles/cx',
                description: 'CX-specific components (customer experience)',
                install: 'npm install @fundamental-styles/cx'
            }
        ];

        return {
            content: [
                {
                    type: 'text' as const,
                    text: JSON.stringify(result, null, 2)
                }
            ]
        };
    }
);

/** Deduplicate changelog entries — collapse RC entries when the same change also appears in a stable release. */
function deduplicateEntries(entries: ChangelogEntry[]): ChangelogEntry[] {
    const stableEntries = entries.filter((e) => !e.version.includes('-'));
    const rcEntries = entries.filter((e) => e.version.includes('-'));

    // Build a set of stable entry keys for fast lookup
    const stableKeys = new Set(
        stableEntries.map((e) => `${baseVersion(e.version)}|${e.type}|${e.scope ?? ''}|${normalizeDesc(e.description)}`)
    );

    // Keep RC entries only if there's no corresponding stable entry
    const uniqueRcEntries = rcEntries.filter((e) => {
        const key = `${baseVersion(e.version)}|${e.type}|${e.scope ?? ''}|${normalizeDesc(e.description)}`;
        return !stableKeys.has(key);
    });

    return [...stableEntries, ...uniqueRcEntries].sort((a, b) => compareVersions(b.version, a.version));
}

/** Normalize description for dedup comparison — strip trailing whitespace and issue links. */
function normalizeDesc(desc: string): string {
    return desc.replace(/\s*\[#\d+\]\([^)]+\)/g, '').trim().toLowerCase();
}

// ---------------------------------------------------------------------------
// Resource: component catalog
// ---------------------------------------------------------------------------
server.resource('component-catalog', 'fundamental-styles://components/catalog', async (uri) => ({
    contents: [
        {
            uri: uri.href,
            mimeType: 'application/json',
            text: JSON.stringify(
                { version: data.version, componentCount: data.components.length, components: data.components },
                null,
                2
            )
        }
    ]
}));

// ---------------------------------------------------------------------------
// Resource: AI component index (curated markdown overview)
// ---------------------------------------------------------------------------
server.resource(
    'ai-component-index',
    'fundamental-styles://docs/ai-component-index',
    async (uri) => {
        const content = readDataFile('ai-component-index.md');
        return {
            contents: [
                {
                    uri: uri.href,
                    mimeType: 'text/markdown',
                    text: content ?? 'AI component index not available.'
                }
            ]
        };
    }
);

// ---------------------------------------------------------------------------
// Resource: component relationship graph (Mermaid diagram)
// ---------------------------------------------------------------------------
server.resource(
    'component-graph',
    'fundamental-styles://docs/component-graph',
    async (uri) => {
        const content = readDataFile('component-graph.md');
        return {
            contents: [
                {
                    uri: uri.href,
                    mimeType: 'text/markdown',
                    text: content ?? 'Component graph not available.'
                }
            ]
        };
    }
);

// ---------------------------------------------------------------------------
// Resource: component use cases
// ---------------------------------------------------------------------------
server.resource(
    'component-use-cases',
    'fundamental-styles://docs/component-use-cases',
    async (uri) => {
        const content = readDataFile('component-use-cases.json');
        return {
            contents: [
                {
                    uri: uri.href,
                    mimeType: 'application/json',
                    text: content ?? '{"error": "Component use cases not available."}'
                }
            ]
        };
    }
);

// ---------------------------------------------------------------------------
// Resource template: per-component JSON Schema
// ---------------------------------------------------------------------------
const schemaNames = listSchemas();

server.resource(
    'component-schema',
    new ResourceTemplate('fundamental-styles://schemas/{componentId}', {
        list: async () => ({
            resources: schemaNames.map((name) => ({
                uri: `fundamental-styles://schemas/${name}`,
                name: `${name} schema`,
                mimeType: 'application/json' as const
            }))
        })
    }),
    async (uri, variables) => {
        const componentId = variables['componentId'] as string;
        const content = readSchema(componentId);
        if (!content) {
            return {
                contents: [
                    {
                        uri: uri.href,
                        mimeType: 'application/json',
                        text: JSON.stringify(
                            {
                                error: `Schema for "${componentId}" not found.`,
                                available: schemaNames.slice(0, 20),
                                total: schemaNames.length
                            },
                            null,
                            2
                        )
                    }
                ]
            };
        }
        return {
            contents: [
                {
                    uri: uri.href,
                    mimeType: 'application/json',
                    text: content
                }
            ]
        };
    }
);

// ---------------------------------------------------------------------------
// Helpers — delegate to shared helpers module
// ---------------------------------------------------------------------------
function findComponent(nameOrId: string): ComponentMetadata | undefined {
    return findComp(data.components, nameOrId);
}

// ---------------------------------------------------------------------------
// Theme metadata
// ---------------------------------------------------------------------------
const AVAILABLE_THEMES = [
    {
        id: 'sap_horizon',
        name: 'SAP Horizon (Morning)',
        description: 'Default light theme — recommended for new applications',
        cssImport: 'fundamental-styles/dist/theming/sap_horizon.css',
        family: 'horizon',
        mode: 'light'
    },
    {
        id: 'sap_horizon_dark',
        name: 'SAP Horizon (Evening)',
        description: 'Dark variant of the Horizon theme',
        cssImport: 'fundamental-styles/dist/theming/sap_horizon_dark.css',
        family: 'horizon',
        mode: 'dark'
    },
    {
        id: 'sap_horizon_hcb',
        name: 'SAP Horizon High Contrast Black',
        description: 'High contrast black for accessibility (WCAG AAA)',
        cssImport: 'fundamental-styles/dist/theming/sap_horizon_hcb.css',
        family: 'horizon',
        mode: 'high-contrast-black'
    },
    {
        id: 'sap_horizon_hcw',
        name: 'SAP Horizon High Contrast White',
        description: 'High contrast white for accessibility (WCAG AAA)',
        cssImport: 'fundamental-styles/dist/theming/sap_horizon_hcw.css',
        family: 'horizon',
        mode: 'high-contrast-white'
    },
    {
        id: 'sap_fiori_3',
        name: 'SAP Fiori 3 (Quartz Light)',
        description: 'Previous generation light theme — use for existing Fiori 3 applications',
        cssImport: 'fundamental-styles/dist/theming/sap_fiori_3.css',
        family: 'fiori3',
        mode: 'light'
    },
    {
        id: 'sap_fiori_3_dark',
        name: 'SAP Fiori 3 (Quartz Dark)',
        description: 'Previous generation dark theme',
        cssImport: 'fundamental-styles/dist/theming/sap_fiori_3_dark.css',
        family: 'fiori3',
        mode: 'dark'
    },
    {
        id: 'sap_fiori_3_hcb',
        name: 'SAP Fiori 3 High Contrast Black',
        description: 'Fiori 3 high contrast black for accessibility',
        cssImport: 'fundamental-styles/dist/theming/sap_fiori_3_hcb.css',
        family: 'fiori3',
        mode: 'high-contrast-black'
    },
    {
        id: 'sap_fiori_3_hcw',
        name: 'SAP Fiori 3 High Contrast White',
        description: 'Fiori 3 high contrast white for accessibility',
        cssImport: 'fundamental-styles/dist/theming/sap_fiori_3_hcw.css',
        family: 'fiori3',
        mode: 'high-contrast-white'
    },
    {
        id: 'sap_fiori_3_light_dark',
        name: 'SAP Fiori 3 Light Dark',
        description: 'Fiori 3 light dark variant',
        cssImport: 'fundamental-styles/dist/theming/sap_fiori_3_light_dark.css',
        family: 'fiori3',
        mode: 'light-dark'
    },
    {
        id: 'sap_belize',
        name: 'SAP Belize',
        description: 'Legacy theme — only for backward compatibility',
        cssImport: 'fundamental-styles/dist/theming/sap_belize.css',
        family: 'belize',
        mode: 'light'
    },
    {
        id: 'sap_belize_hcb',
        name: 'SAP Belize High Contrast Black',
        description: 'Legacy high contrast black theme',
        cssImport: 'fundamental-styles/dist/theming/sap_belize_hcb.css',
        family: 'belize',
        mode: 'high-contrast-black'
    },
    {
        id: 'sap_belize_hcw',
        name: 'SAP Belize High Contrast White',
        description: 'Legacy high contrast white theme',
        cssImport: 'fundamental-styles/dist/theming/sap_belize_hcw.css',
        family: 'belize',
        mode: 'high-contrast-white'
    }
];

// ---------------------------------------------------------------------------
// UI Pattern recommendations (CSS component ids)
// ---------------------------------------------------------------------------
const UI_PATTERNS: Record<string, string[]> = {
    'table|data table|grid': ['table', 'toolbar'],
    'form|input form|login|registration': ['form-item', 'form-label', 'input', 'form-message', 'checkbox', 'radio', 'select', 'button'],
    'dialog|modal|popup|confirm': ['dialog', 'bar', 'button'],
    'date|calendar|date picker': ['calendar', 'input-group', 'popover'],
    'navigation|nav|sidebar|side nav': ['side-nav', 'navigation', 'navigation-list'],
    'button|action|cta': ['button', 'button-split', 'segmented-button'],
    'list|items|feed': ['list', 'feed-list'],
    'menu|dropdown|context menu': ['menu', 'popover'],
    'tabs|tab|tabbed': ['tabs', 'icon-tab-bar'],
    'wizard|stepper|step|multi-step': ['wizard', 'bar', 'button'],
    'card|tile|overview': ['card', 'numeric-content'],
    'tree|hierarchy|nested': ['list'],
    'upload|file': ['file-uploader', 'button'],
    'search|filter': ['search-field', 'input-group', 'popover'],
    'toolbar|header bar|action bar': ['toolbar', 'bar', 'action-bar'],
    'notification|alert|message|toast': ['message-strip', 'message-toast', 'notification', 'alert'],
    'avatar|user|profile': ['avatar', 'avatar-group'],
    'pagination|paging': ['pagination'],
    'master detail|split|column': ['flexible-column-layout', 'dynamic-side-content'],
    'breadcrumb|path': ['breadcrumb'],
    'progress|loading|busy|spinner': ['busy-indicator', 'progress-indicator'],
    'panel|section|collapsible': ['panel', 'layout-panel'],
    'dynamic page|object page|detail': ['dynamic-page', 'bar'],
    'splitter|resizable|split view': ['splitter'],
    'slider|range': ['slider'],
    'switch|toggle': ['switch'],
    'link|anchor': ['link'],
    'badge|tag|status': ['badge', 'object-status', 'info-label'],
    'icon|symbol': ['icon'],
    'skeleton|placeholder|shimmer': ['skeleton'],
    'popover|tooltip|flyout': ['popover'],
    'rating|star': ['rating-indicator'],
    'carousel|slider|gallery': ['carousel'],
    'ai|assistant|prompt': ['prompt-input', 'ai-text', 'ai-busy-indicator']
};

// ---------------------------------------------------------------------------
// Start server
// ---------------------------------------------------------------------------
async function main(): Promise<void> {
    const transport = new StdioServerTransport();
    await server.connect(transport);
}

main().catch((error) => {
    console.error('MCP server failed to start:', error);
    process.exit(1);
});
