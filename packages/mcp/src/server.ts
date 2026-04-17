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
        htmlExamples: null
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

        const summary = components.map((c) => ({
            id: c.id,
            name: c.name,
            baseClass: c.baseClass,
            category: c.category,
            description: truncate(c.description, 120)
        }));

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
