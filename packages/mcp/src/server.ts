import { McpServer, ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { loadCatalog, LoadedCatalog, readDataFile, listSchemas, readSchema } from './data/load-catalog';
import { loadExamples, ComponentExample } from './data/load-examples';
import { findComponent as findComp, scoreMatch, truncate } from './helpers';
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
        category: z.string().optional().describe('Filter by category (e.g., "buttons", "navigation", "feedback")')
    },
    async ({ package: pkg, category }) => {
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
            const description = guidance?.description || c.description;

            return {
                id: c.id,
                name: c.name,
                baseClass: c.baseClass,
                category: guidance?.category || c.category,
                description: truncate(description, 120)
            };
        });

        return {
            content: [
                {
                    type: 'text' as const,
                    text: JSON.stringify({ count: summary.length, components: summary }, null, 2)
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
            .describe('Restrict search to a specific package')
    },
    async ({ query, package: pkg }) => {
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

        const results = scored.map((s) => ({
            id: s.component.id,
            name: s.component.name,
            baseClass: s.component.baseClass,
            category: s.component.category,
            description: truncate(s.component.description, 150),
            relevance: s.score
        }));

        return {
            content: [
                {
                    type: 'text' as const,
                    text: JSON.stringify({ query, count: results.length, results }, null, 2)
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
        component: z.string().describe('Component name, id, or base class (e.g., "button", "fd-button", "dialog")')
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
        variant: z.string().optional().describe('Filter examples by variant keyword (e.g., "compact", "states")')
    },
    async ({ component, variant }) => {
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

        if (variant) {
            const lowerVariant = variant.toLowerCase();
            storyExamples = storyExamples.filter(
                (ex) =>
                    ex.name.toLowerCase().includes(lowerVariant) ||
                    ex.description.toLowerCase().includes(lowerVariant)
            );
        }

        // Get curated examples from html-examples.json
        const curatedExamples = (data.htmlExamples?.examples ?? []).filter((ex) =>
            ex.components.includes(comp.id)
        );

        const result = {
            component: comp.name,
            baseClass: comp.baseClass,
            storyExamples: storyExamples.map((ex) => ({
                name: ex.name,
                description: ex.description,
                html: ex.html
            })),
            curatedExamples: curatedExamples.map((ex) => ({
                id: ex.id,
                description: ex.description,
                html: ex.html
            })),
            totalExamples: storyExamples.length + curatedExamples.length
        };

        if (result.totalExamples === 0) {
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
            .describe('Filter by token category (e.g., "brand", "button", "field", "semantic")')
    },
    async ({ query, category }) => {
        const lowerQuery = query.toLowerCase();
        let tokens = data.designTokens;

        if (category) {
            // Re-load from source to filter by category section
            // For now, filter by token name containing the category
            const lowerCat = category.toLowerCase();
            tokens = tokens.filter(
                (t) => t.name.toLowerCase().includes(lowerCat) || (t.purpose ?? '').toLowerCase().includes(lowerCat)
            );
        }

        const matches = tokens
            .filter(
                (t) =>
                    t.name.toLowerCase().includes(lowerQuery) ||
                    (t.purpose ?? '').toLowerCase().includes(lowerQuery) ||
                    (t.cssUsage ?? '').toLowerCase().includes(lowerQuery) ||
                    (t.value ?? '').toLowerCase().includes(lowerQuery)
            )
            .slice(0, 50);

        if (matches.length === 0) {
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

        return {
            content: [
                {
                    type: 'text' as const,
                    text: JSON.stringify({ query, category, count: matches.length, tokens: matches }, null, 2)
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
"a master-detail layout") and get recommended components with their CSS classes.`,
    {
        description: z.string().describe('What you want to build (e.g., "a form with validation and submit button")')
    },
    async ({ description }) => {
        const lowerDesc = description.toLowerCase();
        const recommendations: Array<{
            component: string;
            baseClass: string;
            category: string;
            reason: string;
        }> = [];

        // Pattern-based recommendations
        for (const [pattern, componentIds] of Object.entries(UI_PATTERNS)) {
            const keywords = pattern.split('|');
            if (keywords.some((kw) => lowerDesc.includes(kw))) {
                for (const id of componentIds) {
                    const comp = data.components.find((c) => c.id === id);
                    if (comp && !recommendations.some((r) => r.component === comp.name)) {
                        recommendations.push({
                            component: comp.name,
                            baseClass: comp.baseClass,
                            category: comp.category,
                            reason: `Matches "${keywords[0]}" pattern`
                        });
                    }
                }
            }
        }

        // Keyword fallback search
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
                            reason: `Name/category matches "${word}"`
                        });
                    }
                }
            }
        }

        return {
            content: [
                {
                    type: 'text' as const,
                    text: JSON.stringify(
                        {
                            description,
                            recommendations: recommendations.slice(0, 15),
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
Use this when you need to understand if a component is appropriate for a specific use case or need design guidance.`,
    {
        component: z.string().describe('Component name or id (e.g., "avatar", "button", "table")')
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
or checking what changed between releases.`,
    {
        component: z.string().optional().describe('Filter by component scope (e.g., "button", "dialog", "table")'),
        from_version: z.string().optional().describe('Starting version (e.g., "0.39.0"). Omit for all history.'),
        to_version: z.string().optional().describe('Ending version (e.g., "0.41.0"). Omit for latest.'),
        type: z
            .enum(['breaking', 'feature', 'fix', 'deprecation'] as const)
            .optional()
            .describe('Filter by change type')
    },
    async ({ component, from_version, to_version, type }) => {
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

        // Filter by version range
        if (from_version) {
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
        // If a change appears in both rc.X and the stable release, keep only the stable one
        const deduped = deduplicateEntries(entries);

        // Group by version
        const byVersion: Record<string, ChangelogEntry[]> = {};
        for (const entry of deduped) {
            const key = entry.version;
            if (!byVersion[key]) {
                byVersion[key] = [];
            }
            byVersion[key].push(entry);
        }

        // Sort versions descending
        const sortedVersions = Object.keys(byVersion).sort((a, b) => compareVersions(b, a));

        const result = {
            query: { component, from_version, to_version, type },
            totalEntries: deduped.length,
            versions: sortedVersions.map((v) => ({
                version: v,
                date: byVersion[v][0]?.date ?? null,
                changes: byVersion[v].map((e) => ({
                    type: e.type,
                    scope: e.scope,
                    description: e.description,
                    issueUrl: e.issueUrl
                }))
            }))
        };

        if (deduped.length === 0) {
            return {
                content: [
                    {
                        type: 'text' as const,
                        text: JSON.stringify(
                            {
                                ...result,
                                note: 'No matching changelog entries found. Try broader filters or omit the version range.'
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
    `Get comprehensive setup instructions for fundamental-styles in a new project.
Returns detailed step-by-step instructions for both CDN and NPM installation approaches,
including theme setup, font configuration, component imports, and best practices.
Use this when starting a new project or helping users get started with fundamental-styles.`,
    {
        approach: z
            .enum(['cdn', 'npm', 'both'] as const)
            .default('both')
            .describe('Installation approach: "cdn" for CDN-only, "npm" for NPM-only, "both" for both approaches'),
        themes: z
            .union([
                z.enum([
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
                ] as const),
                z.array(z.enum([
                    'sap_horizon',
                    'sap_horizon_dark',
                    'sap_horizon_hcb',
                    'sap_horizon_hcw',
                    'sap_fiori_3',
                    'sap_fiori_3_dark',
                    'sap_fiori_3_hcb',
                    'sap_fiori_3_hcw'
                ] as const))
            ])
            .optional()
            .describe('Theme(s) to include. Can be: single theme name, array of theme names, or preset ("all", "all_horizon", "all_fiori", "all_dark", "all_light", "all_high_contrast"). If not provided, defaults to "sap_horizon"'),
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

        // Determine which themes to include
        let selectedThemes: string[];

        if (!themes) {
            // Default: single sap_horizon theme
            selectedThemes = ['sap_horizon'];
        } else if (Array.isArray(themes)) {
            // Array of specific themes
            if (themes.includes('all' as any)) {
                selectedThemes = allThemes;
            } else {
                selectedThemes = themes as string[];
            }
        } else {
            // Single value (preset or theme name)
            const preset = themes as string;
            switch (preset) {
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
                    // Single theme name
                    selectedThemes = [preset];
            }
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

        const result: any = {
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

            result.cdn = {
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

            result.npm = {
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
        result.nextSteps = {
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

        result.troubleshooting = [
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

        result.additionalPackages = [
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
