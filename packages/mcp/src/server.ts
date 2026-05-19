import { McpServer, ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { loadCatalog, LoadedCatalog, readDataFile, listSchemas, readSchema } from './data/load-catalog';
import { loadExamples, ComponentExample } from './data/load-examples';
import { findComponent as findComp, scoreMatch, truncate, enhanceDescription, checkDataQuality, checkTokenQuality, expandQuery, scoreSemanticMatch } from './helpers';
import { extractChangelog, compareVersions, baseVersion, ChangelogEntry } from './data/changelog-extractor';
import { suggestDependencies, detectPatterns } from './data/component-dependencies';
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
        componentGuidance: null,
        semanticTags: null
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
    `Search fundamental-styles CSS components by keyword with semantic understanding.
Searches across component names, base classes, patterns, use-cases, synonyms, and descriptions.
Returns results with confidence scores and match reasons.
Use this when you need to find a component by a partial name, pattern, or use-case keyword.`,
    {
        query: z.string().describe('Search keyword (e.g., "button", "dashboard", "master detail layout", "kpi metric")'),
        package: z
            .enum(['styles', 'common-css', 'cx'] as const)
            .optional()
            .describe('Restrict search to a specific package'),
        detailed: z.boolean().optional().default(false).describe('Include CSS imports, modifiers, match reasons, and usage examples (default: false)')
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

        // Expand query with semantic terms
        const expandedQuery = expandQuery(query);

        // Score all components using semantic matching
        const scored = components
            .map((c) => {
                const semanticTags = data.semanticTags?.components[c.id];
                return scoreSemanticMatch(c, lowerQuery, semanticTags, expandedQuery);
            })
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
                confidence: s.confidence,
                relevanceScore: s.score
            };

            // Add match reasons if detailed
            if (detailed && s.matchReasons.length > 0) {
                basicInfo['matchReasons'] = s.matchReasons.slice(0, 5);

                // Show matched semantic tags
                if (s.matchedTags.patterns.length > 0) {
                    basicInfo['matchedPatterns'] = s.matchedTags.patterns.slice(0, 3);
                }
                if (s.matchedTags.useCases.length > 0) {
                    basicInfo['matchedUseCases'] = s.matchedTags.useCases.slice(0, 3);
                }
                if (s.matchedTags.synonyms.length > 0) {
                    basicInfo['matchedSynonyms'] = s.matchedTags.synonyms.slice(0, 3);
                }
            }

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

        // Provide helpful search hints if no results
        let searchHints: Record<string, unknown> | undefined;
        if (results.length === 0) {
            searchHints = {
                message: `No components found for "${query}"`,
                suggestions: [
                    'Try broader terms (e.g., "button" instead of "primary action button")',
                    'Use pattern names (e.g., "master detail", "dashboard", "form")',
                    'Try category names (e.g., "navigation", "feedback", "forms")'
                ],
                commonPatterns: [
                    { pattern: 'Dashboard with KPIs', suggestedQuery: 'dashboard' },
                    { pattern: 'Master-detail layout', suggestedQuery: 'master detail' },
                    { pattern: 'Data table with filtering', suggestedQuery: 'table' },
                    { pattern: 'Form with validation', suggestedQuery: 'form' },
                    { pattern: 'Navigation menu', suggestedQuery: 'navigation' }
                ],
                browseByCategory: ['layout', 'navigation', 'forms', 'feedback', 'data-display']
            };
        }

        // Detect component categories and suggest relevant tools/skills
        const componentIds = new Set(results.map(r => r['id'] as string));
        const recommendations: any[] = [];

        // Layout pattern detection
        const layoutComponents = ['page', 'panel', 'shellbar', 'side-nav', 'dynamic-page', 'flexible-column-layout'];
        if (results.some(r => layoutComponents.includes(r['id'] as string))) {
            recommendations.push({
                tool: 'get_layout_patterns',
                reason: 'Found layout components. See complete UI layout patterns (navigation shell, master-detail, dashboard grid)',
                components: results.filter(r => layoutComponents.includes(r['id'] as string)).map(r => r['name']),
                skill: {
                    name: 'layout-patterns',
                    activation: 'Type /layout-patterns',
                    description: 'Comprehensive layout guidance: 7 complete patterns, responsive design, Fiori guidelines'
                }
            });
        }

        // Interactive component detection
        const interactiveComponents = ['table', 'dialog', 'popover', 'tabs', 'input', 'side-nav'];
        if (results.some(r => interactiveComponents.includes(r['id'] as string))) {
            recommendations.push({
                tool: 'get_interaction_patterns',
                reason: 'Found interactive components. See JavaScript patterns for sorting, validation, dialogs, and more',
                components: results.filter(r => interactiveComponents.includes(r['id'] as string)).map(r => r['name'])
            });
        }

        // Component guidance detection
        if (results.length > 0) {
            const firstComp = results[0]['id'] as string;
            // Determine which guidance skill is most relevant
            let guidanceSkill = 'component-guidance-forms';
            if (['table', 'list', 'tree', 'object-status'].includes(firstComp)) {
                guidanceSkill = 'component-guidance-data';
            } else if (['shellbar', 'side-nav', 'menu', 'breadcrumb', 'tabs'].includes(firstComp)) {
                guidanceSkill = 'component-guidance-navigation';
            } else if (['page', 'panel', 'bar', 'flexible-column-layout'].includes(firstComp)) {
                guidanceSkill = 'component-guidance-layout';
            } else if (['message-strip', 'popover', 'dialog', 'alert'].includes(firstComp)) {
                guidanceSkill = 'component-guidance-feedback';
            } else if (['button', 'link'].includes(firstComp)) {
                guidanceSkill = 'component-guidance-actions';
            }

            recommendations.push({
                tool: 'get_component_guidance',
                reason: 'Get best practices, when to use, and design guidelines for these components',
                example: `get_component_guidance("${firstComp}")`,
                skill: {
                    name: guidanceSkill,
                    activation: `Type /${guidanceSkill}`,
                    description: 'Deep-dive guidance: when to use/avoid, best practices, accessibility, Fiori compliance'
                }
            });
        }

        // Dense data detection
        const denseDataComponents = ['table', 'list', 'tree'];
        if (results.some(r => denseDataComponents.includes(r['id'] as string))) {
            const firstDenseComp = results.find(r => denseDataComponents.includes(r['id'] as string));
            recommendations.push({
                tip: 'content-density',
                reason: 'These components support compact mode (--compact) for dense UIs and desktop applications',
                modifier: firstDenseComp ? `${firstDenseComp['baseClass']}--compact` : undefined,
                skill: {
                    name: 'content-density',
                    activation: 'Type /content-density',
                    description: 'Complete density guide: cozy/compact/condensed modes, accessibility, responsive design'
                }
            });
        }

        return {
            content: [
                {
                    type: 'text' as const,
                    text: JSON.stringify({
                        query,
                        expandedTerms: expandedQuery.slice(0, 10),
                        count: results.length,
                        detailed,
                        results,
                        recommendations: recommendations.length > 0 ? recommendations : undefined,
                        searchHints
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
Use this when you need to see how to build the HTML for a component.

Smart output control: By default returns 3 essential examples optimized for AI context.
Use minimal: true for smallest output, or detailed: true with maxExamples for more.`,
    {
        component: z.string().describe('Component name, id, or base class (e.g., "button", "dialog")'),
        variant: z.string().optional().describe('Filter examples by variant keyword (e.g., "compact", "states", "emphasized")'),
        detailed: z.boolean().optional().default(false).describe('Include accessibility guidance, related components, and best practices (default: false)'),
        minimal: z.boolean().optional().default(false).describe('Return only 1-2 essential examples with stripped documentation artifacts (default: false)'),
        maxExamples: z.number().optional().default(3).describe('Maximum number of examples to return (default: 3, max: 20)')
    },
    async ({ component, variant, detailed, minimal = false, maxExamples = 3 }) => {
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

        // Smart example selection based on maxExamples and minimal flags
        const totalAvailableExamples = storyExamples.length + curatedExamples.length;
        const effectiveMaxExamples = Math.min(Math.max(1, maxExamples), 20);

        // Strip documentation artifacts if minimal mode
        const stripDocArtifacts = (html: string): string => {
            if (!minimal) return html;

            return html
                // Remove fddocs-* classes
                .replace(/class="[^"]*fddocs-[^"]*"/g, (match) => {
                    const cleaned = match.replace(/\s*fddocs-\S+/g, '');
                    return cleaned === 'class=""' ? '' : cleaned;
                })
                // Remove inline documentation comments (multiline safe)
                .replace(/<!--[\s\S]*?-->/g, '')
                // Remove excessive whitespace
                .replace(/\n\s*\n\s*\n/g, '\n\n')
                .trim();
        };

        // Prioritize examples: curated first (higher quality), then story examples
        let selectedStoryExamples = storyExamples;
        let selectedCuratedExamples = curatedExamples;

        // If minimal mode, prioritize basic/default examples
        if (minimal) {
            // Sort curated examples to prioritize basic/simple ones
            selectedCuratedExamples = curatedExamples.sort((a, b) => {
                const aScore = (a.id.includes('basic') ? 10 : 0) + (a.id.includes('simple') ? 5 : 0);
                const bScore = (b.id.includes('basic') ? 10 : 0) + (b.id.includes('simple') ? 5 : 0);
                return bScore - aScore;
            });

            // Sort story examples to prioritize basic/styles ones
            selectedStoryExamples = storyExamples.sort((a, b) => {
                const aScore = (a.name.includes('styles') || a.name.includes('basic') ? 10 : 0) +
                              (a.name.includes('default') ? 5 : 0);
                const bScore = (b.name.includes('styles') || b.name.includes('basic') ? 10 : 0) +
                              (b.name.includes('default') ? 5 : 0);
                return bScore - aScore;
            });
        }

        // Apply maxExamples limit - prioritize curated over story
        const curatedLimit = Math.min(selectedCuratedExamples.length, effectiveMaxExamples);
        selectedCuratedExamples = selectedCuratedExamples.slice(0, curatedLimit);

        const remaining = effectiveMaxExamples - curatedLimit;
        if (remaining > 0) {
            selectedStoryExamples = selectedStoryExamples.slice(0, remaining);
        } else {
            selectedStoryExamples = [];
        }

        const totalExamples = selectedStoryExamples.length + selectedCuratedExamples.length;

        // Calculate output size
        const calculateSize = (examples: { html: string }[]): number => {
            return examples.reduce((sum, ex) => sum + ex.html.length, 0);
        };

        const outputSizeBytes = calculateSize([...selectedStoryExamples, ...selectedCuratedExamples]);
        const outputSizeKB = (outputSizeBytes / 1024).toFixed(1);

        const result: Record<string, unknown> = {
            component: comp.name,
            baseClass: comp.baseClass,
            mode: minimal ? 'minimal' : (detailed ? 'detailed' : 'standard'),
            variant: variant ?? null,
            examplesReturned: totalExamples,
            totalExamplesAvailable: totalAvailableExamples,
            outputSize: `${outputSizeKB}KB`,
            // Curated examples FIRST (hand-crafted, higher quality)
            curatedExamples: selectedCuratedExamples.map((ex) => ({
                id: ex.id,
                description: ex.description,
                html: stripDocArtifacts(ex.html),
                sizeBytes: stripDocArtifacts(ex.html).length,
                quality: 'curated'
            })),
            // Story examples SECOND (auto-generated from Storybook)
            storyExamples: selectedStoryExamples.map((ex) => ({
                name: ex.name,
                description: ex.description,
                html: stripDocArtifacts(ex.html),
                sizeBytes: stripDocArtifacts(ex.html).length,
                quality: 'story',
                matchedVariant: variant ? (
                    ex.name.toLowerCase().includes(variant.toLowerCase()) ? 'name' :
                    ex.description.toLowerCase().includes(variant.toLowerCase()) ? 'description' : 'html'
                ) : undefined
            })),
            curatedExamplesCount: selectedCuratedExamples.length,
            storyExamplesCount: selectedStoryExamples.length,
            qualityNote: selectedCuratedExamples.length > 0
                ? 'Curated examples are hand-crafted and production-ready. Story examples are auto-generated from Storybook.'
                : 'Only story examples available for this component. For higher quality examples, check the layout patterns tool.'
        };

        // Add optimization suggestions if output is large or examples were truncated
        if (totalAvailableExamples > totalExamples) {
            result['note'] = `Showing ${totalExamples} of ${totalAvailableExamples} examples. Use maxExamples parameter to see more.`;
        }

        if (parseFloat(outputSizeKB) > 50 && !minimal) {
            result['suggestion'] = `Output is ${outputSizeKB}KB. Consider using minimal: true for ~90% size reduction or variant filter for specific examples.`;
        }

        // Add available variants for discoverability
        const allVariants = new Set<string>();
        [...storyExamples, ...curatedExamples].forEach(ex => {
            const exData = 'variant' in ex ? ex : null;
            if (exData && typeof exData.variant === 'string') {
                allVariants.add(exData.variant);
            }
            // Extract variants from example names/ids
            const text = ('name' in ex ? ex.name : ex.id).toLowerCase();
            if (text.includes('compact')) allVariants.add('compact');
            if (text.includes('emphasized')) allVariants.add('emphasized');
            if (text.includes('transparent')) allVariants.add('transparent');
            if (text.includes('navigation')) allVariants.add('navigation');
            if (text.includes('selection')) allVariants.add('selection');
        });

        if (allVariants.size > 0) {
            result['variantsAvailable'] = Array.from(allVariants);
        }

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

        // Content Density Options (always show for components that support it)
        const densityComponents = ['table', 'list', 'tree', 'input', 'button', 'bar', 'toolbar', 'card', 'panel'];
        if (densityComponents.includes(comp.id)) {
            result['contentDensity'] = {
                modes: [
                    { name: 'Cozy (default)', size: '44px touch targets', usage: 'Mobile, touch devices, accessibility' },
                    { name: 'Compact', size: '32px touch targets', usage: 'Desktop, mouse users, dense data views', modifier: `${comp.baseClass}--compact` },
                    { name: 'Condensed', size: 'Ultra-dense', usage: 'Power users, maximum data density', modifier: `${comp.baseClass}--condensed` }
                ],
                recommendation: 'Use cozy (default) on mobile/touch. Use compact on desktop for experienced users.',
                example: `<${comp.baseClass === 'fd-table' ? 'table' : 'div'} class="${comp.baseClass} ${comp.baseClass}--compact">`,
                learnMore: {
                    skill: 'content-density',
                    activation: 'Type /content-density',
                    description: 'Complete guide: when to use each mode, accessibility considerations, responsive design patterns'
                }
            };
        }

        // Recommendations for related tools/patterns
        const recommendations: any[] = [];

        // Interactive patterns recommendation
        const interactiveComponents = {
            'table': ['table-sorting', 'table-selection'],
            'dialog': ['dialog-open-close'],
            'popover': ['popover-toggle'],
            'tabs': ['tabs-switching'],
            'input': ['input-validation'],
            'side-nav': ['side-nav-collapse']
        };
        if (interactiveComponents[comp.id]) {
            recommendations.push({
                tool: 'get_interaction_patterns',
                reason: `Add JavaScript interactivity: ${interactiveComponents[comp.id].join(', ')}`,
                patterns: interactiveComponents[comp.id]
            });
        }

        // Layout patterns recommendation
        const layoutComponents = ['page', 'panel', 'shellbar', 'side-nav', 'dynamic-page'];
        if (layoutComponents.includes(comp.id)) {
            recommendations.push({
                tool: 'get_layout_patterns',
                reason: 'See complete UI layout patterns using this component',
                relevantPatterns: comp.id === 'shellbar' || comp.id === 'side-nav' ? ['layout-navigation-shell'] :
                                 comp.id === 'page' ? ['layout-master-detail', 'layout-dashboard-grid'] : [],
                skill: {
                    name: 'layout-patterns',
                    activation: 'Type /layout-patterns',
                    description: '7 complete patterns with composition guidance and responsive design'
                }
            });
        }

        // Component guidance recommendation (always relevant)
        if (!detailed) {
            // Determine which guidance skill is most relevant
            let guidanceSkill = 'component-guidance-forms';
            if (['table', 'list', 'tree', 'object-status'].includes(comp.id)) {
                guidanceSkill = 'component-guidance-data';
            } else if (['shellbar', 'side-nav', 'menu', 'breadcrumb', 'tabs'].includes(comp.id)) {
                guidanceSkill = 'component-guidance-navigation';
            } else if (['page', 'panel', 'bar', 'flexible-column-layout'].includes(comp.id)) {
                guidanceSkill = 'component-guidance-layout';
            } else if (['message-strip', 'popover', 'dialog', 'alert'].includes(comp.id)) {
                guidanceSkill = 'component-guidance-feedback';
            } else if (['button', 'link'].includes(comp.id)) {
                guidanceSkill = 'component-guidance-actions';
            }

            recommendations.push({
                tool: 'get_component_guidance',
                reason: 'Get best practices, when to use, and design guidelines',
                example: `get_component_guidance("${comp.id}")`,
                skill: {
                    name: guidanceSkill,
                    activation: `Type /${guidanceSkill}`,
                    description: 'Deep-dive guidance: when to use/avoid, accessibility, Fiori compliance'
                }
            });
        }

        // Dependency detection recommendation
        recommendations.push({
            tool: 'setup_project',
            reason: 'Get smart CSS dependency detection and setup instructions',
            example: `setup_project(components: ["${comp.id}"])`
        });

        if (recommendations.length > 0) {
            result['recommendations'] = recommendations;
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
    `Given a UI description, recommend which fundamental-styles CSS components to use with semantic understanding.
Describe what you want to build (e.g., "a login form", "a data table with filters",
"a dashboard with KPI metrics", "a master-detail layout") and get recommended components with their CSS classes, confidence scores, and usage guidance.
Returns composite patterns for complex UIs (e.g., suggests multiple components that work together).`,
    {
        description: z.string().describe('What you want to build (e.g., "a form with validation and submit button", "dashboard with kpi metrics", "master detail layout")')
    },
    async ({ description }) => {
        const lowerDesc = description.toLowerCase();
        const expandedTerms = expandQuery(description);

        // Detect composite patterns
        const compositePatterns: Array<{
            pattern: string;
            components: string[];
            description: string;
        }> = [];

        // Define composite pattern detection
        const compositeMatchers: Array<{
            keywords: string[];
            pattern: string;
            components: string[];
            description: string;
        }> = [
            {
                keywords: ['dashboard', 'kpi', 'metric'],
                pattern: 'Dashboard with KPI Metrics',
                components: ['card', 'numeric-content', 'object-status', 'layout-grid', 'title'],
                description: 'Use Card components in a grid layout, each containing numeric-content for KPI values and object-status for trend indicators'
            },
            {
                keywords: ['master', 'detail', 'split'],
                pattern: 'Master-Detail Layout',
                components: ['flexible-column-layout', 'list', 'dynamic-page', 'toolbar'],
                description: 'Use flexible-column-layout as container, list for master view, and dynamic-page for detail view'
            },
            {
                keywords: ['table', 'filter', 'search', 'toolbar'],
                pattern: 'Data Table with Filters',
                components: ['table', 'toolbar', 'search-field', 'input', 'button', 'pagination'],
                description: 'Use toolbar above table with search-field and filter inputs, table for data display, and pagination below'
            },
            {
                keywords: ['form', 'validation', 'submit'],
                pattern: 'Form with Validation',
                components: ['form-item', 'form-label', 'input', 'form-message', 'button', 'card'],
                description: 'Wrap in card, use form-item for each field (contains form-label, input, and form-message for errors), button for submit'
            },
            {
                keywords: ['login', 'signin', 'auth'],
                pattern: 'Login Form',
                components: ['card', 'form-item', 'form-label', 'input', 'button', 'link', 'message-strip'],
                description: 'Card container with form-items for username/password inputs, button for submit, link for "Forgot Password", message-strip for error messages'
            },
            {
                keywords: ['navigation', 'sidebar', 'menu'],
                pattern: 'Application Navigation',
                components: ['shellbar', 'side-nav', 'breadcrumb', 'page'],
                description: 'Shellbar at top for global nav and user menu, side-nav for main navigation, breadcrumb for current location, page for content'
            },
            {
                keywords: ['wizard', 'multi-step', 'stepper'],
                pattern: 'Multi-Step Wizard',
                components: ['wizard', 'bar', 'button', 'form-item', 'progress-indicator'],
                description: 'Use wizard for step navigation, bar for header/footer, progress-indicator for completion status, buttons for navigation'
            },
            {
                keywords: ['dialog', 'form', 'modal'],
                pattern: 'Dialog with Form',
                components: ['dialog', 'bar', 'form-item', 'input', 'button'],
                description: 'Dialog container with bar for header/footer, form-items for inputs in dialog body, buttons in footer for actions'
            },
            {
                keywords: ['upload', 'file', 'drag', 'drop'],
                pattern: 'File Upload',
                components: ['file-uploader', 'button', 'progress-indicator', 'upload-collection', 'message-strip'],
                description: 'Use file-uploader for file selection, button to trigger, progress-indicator for upload progress, upload-collection to display files, message-strip for errors'
            },
            {
                keywords: ['card', 'grid', 'tile', 'layout'],
                pattern: 'Card Grid Layout',
                components: ['layout-grid', 'card', 'title', 'button'],
                description: 'Use layout-grid or CSS grid for responsive layout, card for each item with title and content, button for actions'
            }
        ];

        // Detect composite patterns
        for (const matcher of compositeMatchers) {
            const matchCount = matcher.keywords.filter(kw => expandedTerms.includes(kw) || lowerDesc.includes(kw)).length;
            if (matchCount >= 2) {
                compositePatterns.push({
                    pattern: matcher.pattern,
                    components: matcher.components,
                    description: matcher.description
                });
            }
        }

        // Use semantic search to find matching components
        const allMatches = data.components
            .map((c) => {
                const semanticTags = data.semanticTags?.components[c.id];
                return scoreSemanticMatch(c, lowerDesc, semanticTags, expandedTerms);
            })
            .filter((s) => s.score > 0)
            .sort((a, b) => b.score - a.score);

        // Build recommendations
        const recommendations: Array<{
            component: string;
            baseClass: string;
            category: string;
            reason: string;
            confidence: 'high' | 'medium' | 'low';
            priority: number;
            suggestedUse?: string;
            matchedPatterns?: string[];
            matchedUseCases?: string[];
        }> = [];

        // If we detected composite patterns, prioritize those components
        if (compositePatterns.length > 0) {
            const compositeComponentIds = new Set<string>();
            compositePatterns.forEach(p => p.components.forEach(id => compositeComponentIds.add(id)));

            // Add composite pattern components first
            for (const match of allMatches) {
                if (compositeComponentIds.has(match.component.id) && recommendations.length < 15) {
                    const inPatterns = compositePatterns
                        .filter(p => p.components.includes(match.component.id))
                        .map(p => p.pattern);

                    recommendations.push({
                        component: match.component.name,
                        baseClass: match.component.baseClass,
                        category: match.component.category,
                        reason: match.matchReasons[0] || 'Part of recommended composite pattern',
                        confidence: match.confidence,
                        priority: 1,
                        suggestedUse: inPatterns.length > 0 ? `Used in: ${inPatterns.join(', ')}` : undefined,
                        matchedPatterns: match.matchedTags.patterns.slice(0, 3),
                        matchedUseCases: match.matchedTags.useCases.slice(0, 3)
                    });
                }
            }
        }

        // Add remaining high-scoring matches
        for (const match of allMatches) {
            if (!recommendations.some(r => r.baseClass === match.component.baseClass) && recommendations.length < 20) {
                // Determine priority based on confidence and specificity
                const priority = match.confidence === 'high' ? (compositePatterns.length > 0 ? 2 : 1) :
                                match.confidence === 'medium' ? 3 : 4;

                recommendations.push({
                    component: match.component.name,
                    baseClass: match.component.baseClass,
                    category: match.component.category,
                    reason: match.matchReasons[0] || 'Semantic match',
                    confidence: match.confidence,
                    priority,
                    matchedPatterns: match.matchedTags.patterns.length > 0 ? match.matchedTags.patterns.slice(0, 3) : undefined,
                    matchedUseCases: match.matchedTags.useCases.length > 0 ? match.matchedTags.useCases.slice(0, 3) : undefined
                });
            }
        }

        // Sort by priority, then confidence, then score
        const confidenceOrder = { high: 1, medium: 2, low: 3 };
        recommendations.sort((a, b) => {
            if (a.priority !== b.priority) return a.priority - b.priority;
            if (a.confidence !== b.confidence) return confidenceOrder[a.confidence] - confidenceOrder[b.confidence];
            return a.component.localeCompare(b.component);
        });

        // Limit results
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
                            interpretation: compositePatterns.length > 0
                                ? `Detected ${compositePatterns.length} composite pattern(s): ${compositePatterns.map(p => p.pattern).join(', ')}`
                                : 'Searching for individual component matches',
                            compositePatterns: compositePatterns.length > 0 ? compositePatterns : undefined,
                            expandedSearchTerms: expandedTerms.slice(0, 10),
                            summary: {
                                total: limitedRecommendations.length,
                                highConfidence: groupedByConfidence.high.length,
                                mediumConfidence: groupedByConfidence.medium.length,
                                lowConfidence: groupedByConfidence.low.length
                            },
                            recommendations: limitedRecommendations,
                            note: 'Use get_css_classes for full class details, get_component_html for usage examples, and get_component_relationships for composition guidance.'
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

        // Smart dependency detection
        let cssDependencies: string[] = [];
        let dependencyRecommendations: { css: string; reason: string }[] = [];
        let detectedPatterns: any[] = [];

        if (components && components.length > 0) {
            const deps = suggestDependencies(components);
            cssDependencies = Array.from(deps.required);
            dependencyRecommendations = Array.from(deps.recommended.entries()).map(([css, reason]) => ({
                css,
                reason
            }));
            detectedPatterns = deps.patterns;
        }

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
                cdnUrl: 'https://unpkg.com/@fundamental-styles/common-css@latest/dist/common-css.css',
                usage: "import '@fundamental-styles/common-css/dist/common-css.css';",
                examples: {
                    spacing: 'sap-margin-small, sap-padding-medium, sap-margin-top-tiny',
                    flexbox: 'sap-flex, sap-flex--center, sap-flex--justify-between, sap-flex--gap-small',
                    display: 'sap-display-none, sap-display-block, sap-display-inline-block'
                },
                whenToUse: 'Use for responsive layouts, spacing consistency, and quick prototyping without writing custom CSS'
            },
            {
                name: '@fundamental-styles/cx',
                description: 'CX-specific components (customer experience)',
                install: 'npm install @fundamental-styles/cx',
                whenToUse: 'Use for customer-facing experiences, support portals, and CX-specific patterns'
            }
        ];

        // Add smart dependency detection results if components were specified
        if (cssDependencies.length > 0 || dependencyRecommendations.length > 0) {
            result['smartDependencies'] = {
                description: 'Smart CSS dependency detection based on your selected components',
                selectedComponents: components,
                required: cssDependencies,
                recommended: dependencyRecommendations.map(d => ({
                    css: d.css,
                    reason: d.reason
                })),
                detectedPatterns: detectedPatterns.map(p => ({
                    pattern: p.name,
                    confidence: p.confidence,
                    reason: p.reason,
                    suggestedDependencies: p.suggestedDependencies,
                    exampleId: p.exampleId
                })),
                note: dependencyRecommendations.length > 0
                    ? `Based on your component selection, we detected ${dependencyRecommendations.length} recommended CSS file${dependencyRecommendations.length > 1 ? 's' : ''} that are commonly used together.`
                    : null
            };
        }

        // Add tool recommendations based on component selection
        const toolRecommendations: any[] = [];

        if (components && components.length > 0) {
            // Check for layout components
            const layoutComponents = ['page', 'panel', 'shellbar', 'side-nav', 'dynamic-page'];
            if (components.some(c => layoutComponents.includes(c))) {
                toolRecommendations.push({
                    tool: 'get_layout_patterns',
                    reason: 'You selected layout components. See complete UI patterns: navigation shell, master-detail, dashboard',
                    components: components.filter(c => layoutComponents.includes(c)),
                    skill: {
                        name: 'layout-patterns',
                        activation: 'Type /layout-patterns',
                        description: '7 complete patterns with composition guidance and responsive design'
                    }
                });
            }

            // Check for interactive components
            const interactiveComponents = ['table', 'dialog', 'popover', 'tabs', 'input'];
            if (components.some(c => interactiveComponents.includes(c))) {
                toolRecommendations.push({
                    tool: 'get_interaction_patterns',
                    reason: 'You selected interactive components. Add JavaScript patterns: sorting, validation, dialogs',
                    components: components.filter(c => interactiveComponents.includes(c))
                });
            }

            // Check for dense data components
            const denseComponents = ['table', 'list', 'tree'];
            if (components.some(c => denseComponents.includes(c))) {
                toolRecommendations.push({
                    tip: 'content-density',
                    reason: `Consider using compact mode (--compact) for desktop users with ${components.filter(c => denseComponents.includes(c)).join(', ')}`,
                    example: components.filter(c => denseComponents.includes(c)).map(c => `fd-${c}--compact`).join(', '),
                    skill: {
                        name: 'content-density',
                        activation: 'Type /content-density',
                        description: 'Complete guide: when to use each mode, accessibility, responsive design'
                    }
                });
            }

            // Always recommend component guidance
            toolRecommendations.push({
                tool: 'get_component_guidance',
                reason: 'Get best practices and design guidelines for your selected components',
                example: `get_component_guidance("${components[0]}")`
            });
        }

        if (toolRecommendations.length > 0) {
            result['toolRecommendations'] = toolRecommendations;
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
// Tool: get_layout_patterns
// ---------------------------------------------------------------------------
server.tool(
    'get_layout_patterns',
    `Get complete UI layout patterns with HTML examples.
Returns production-ready layout patterns for enterprise applications including master-detail, dashboard grids, and navigation shells.
Use this when building application layouts or page structures.`,
    {
        pattern: z.string().optional().describe('Filter to specific pattern (e.g., "master-detail", "dashboard", "navigation")'),
        includeCode: z.boolean().optional().default(true).describe('Include full HTML/CSS/JS code examples (default: true)')
    },
    async ({ pattern, includeCode = true }) => {
        // Get layout pattern examples from htmlExamples
        let layoutExamples = (data.htmlExamples?.examples ?? []).filter(ex => {
            const exData: any = ex;
            return ex.id.startsWith('layout-') ||
                   (exData.tags && Array.isArray(exData.tags) && exData.tags.includes('layout'));
        });

        // Filter by pattern if specified
        if (pattern) {
            const lowerPattern = pattern.toLowerCase();
            layoutExamples = layoutExamples.filter(ex => {
                const exData: any = ex;
                return ex.id.toLowerCase().includes(lowerPattern) ||
                       ex.description.toLowerCase().includes(lowerPattern) ||
                       (exData.tags && Array.isArray(exData.tags) && exData.tags.some((t: string) => t.toLowerCase().includes(lowerPattern)));
            });
        }

        if (layoutExamples.length === 0) {
            return {
                content: [{
                    type: 'text' as const,
                    text: JSON.stringify({
                        patterns: [],
                        totalPatterns: 0,
                        message: pattern
                            ? `No layout patterns found matching "${pattern}". Try: "master-detail", "dashboard", or "navigation"`
                            : 'No layout patterns available',
                        availablePatterns: (data.htmlExamples?.examples ?? [])
                            .filter(ex => ex.id.startsWith('layout-'))
                            .map(ex => ex.id.replace('layout-', ''))
                    }, null, 2)
                }]
            };
        }

        const result = {
            totalPatterns: layoutExamples.length,
            patternsReturned: layoutExamples.length,
            patterns: layoutExamples.map(ex => {
                const exData: any = ex;
                const patternInfo: any = {
                    id: ex.id,
                    name: ex.id.replace('layout-', '').split('-').map(w =>
                        w.charAt(0).toUpperCase() + w.slice(1)
                    ).join(' '),
                    description: ex.description,
                    components: ex.components,
                    useCases: exData.useCases || [],
                    complexity: exData.complexity || 'medium',
                    responsive: exData.responsive !== false,
                    javascriptRequired: exData.javascriptRequired || false
                };

                if (includeCode) {
                    patternInfo.htmlExample = ex.html;
                    patternInfo.sizeKB = (ex.html.length / 1024).toFixed(1);
                } else {
                    patternInfo.note = 'Use includeCode: true to get full HTML example';
                }

                if (exData.tags) {
                    patternInfo.tags = exData.tags;
                }

                return patternInfo;
            })
        };

        return {
            content: [{
                type: 'text' as const,
                text: JSON.stringify(result, null, 2)
            }]
        };
    }
);


// ---------------------------------------------------------------------------
// Tool: get_interaction_patterns
// ---------------------------------------------------------------------------
server.tool(
    'get_interaction_patterns',
    `Get JavaScript interaction patterns for fundamental-styles components.
Returns complete vanilla JS and React examples for common interactions like:
- Sortable tables, row selection
- Dialog open/close with focus management
- Collapsible navigation
- Input validation with error display
- Popover toggle
- Tab switching with keyboard navigation
Each pattern includes HTML, JavaScript (vanilla & React), CSS requirements, and accessibility guidance.
Use this when implementing interactive features or adding JavaScript behavior to components.`,
    {
        pattern: z
            .string()
            .optional()
            .describe('Specific pattern name (e.g., "table-sorting", "dialog-open-close"). Omit to see all patterns.'),
        component: z
            .string()
            .optional()
            .describe('Filter patterns by component (e.g., "table", "dialog")'),
        includeCode: z
            .boolean()
            .optional()
            .default(true)
            .describe('Include full JavaScript code examples (default: true)')
    },
    async ({ pattern, component, includeCode = true }) => {
        const interactionPatterns = readDataFile('interaction-patterns.json');

        if (!interactionPatterns) {
            return {
                content: [
                    {
                        type: 'text' as const,
                        text: 'Interaction patterns data not available.'
                    }
                ]
            };
        }

        const patternsData = JSON.parse(interactionPatterns);
        let patterns = Object.entries(patternsData.patterns).map(([id, p]: [string, any]) => ({
            id,
            ...p
        }));

        // Filter by pattern name
        if (pattern) {
            patterns = patterns.filter(p => p.id.toLowerCase().includes(pattern.toLowerCase()) ||
                p.name.toLowerCase().includes(pattern.toLowerCase()));
        }

        // Filter by component
        if (component) {
            patterns = patterns.filter(p =>
                p.components.some((c: string) => c.toLowerCase().includes(component.toLowerCase()))
            );
        }

        if (patterns.length === 0) {
            return {
                content: [
                    {
                        type: 'text' as const,
                        text: `No interaction patterns found${pattern ? ` for "${pattern}"` : ''}${component ? ` with component "${component}"` : ''}. Available patterns: ${Object.keys(patternsData.patterns).join(', ')}`
                    }
                ]
            };
        }

        // Format output
        const result: any = {
            version: patternsData.version,
            description: patternsData.description,
            patternsReturned: patterns.length,
            patterns: patterns.map((p: any) => {
                const formatted: any = {
                    id: p.id,
                    name: p.name,
                    description: p.description,
                    components: p.components,
                    requiredCSS: p.requiredCSS,
                    complexity: p.complexity,
                    interactionType: p.interactionType
                };

                if (includeCode) {
                    formatted.javascript = p.javascript;
                    formatted.html = p.html;
                }

                if (p.accessibility) {
                    formatted.accessibility = p.accessibility;
                }

                return formatted;
            })
        };

        // Add common pitfalls
        if (!pattern && !component) {
            result.commonPitfalls = patternsData.commonPitfalls;
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
// Tool: list_mcp_resources
// ---------------------------------------------------------------------------
server.tool(
    'list_mcp_resources',
    `List all available resources in the fundamental-styles MCP.
Shows tools, data categories, component counts, and available patterns.
Use this to discover what the MCP can help you with.`,
    {
        detailed: z.boolean().optional().default(false).describe('Include detailed breakdown of resources (default: false)')
    },
    async ({ detailed = false }) => {
        const layoutPatterns = (data.htmlExamples?.examples ?? []).filter(ex =>
            ex.id.startsWith('layout-')
        );

        const componentsByCategory = data.components.reduce((acc, comp) => {
            const cat = comp.category || 'Other';
            acc[cat] = (acc[cat] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);

        const result: any = {
            version: data.version,
            summary: {
                totalComponents: data.components.length,
                totalDesignTokens: data.designTokens.length,
                layoutPatterns: layoutPatterns.length,
                htmlExamples: data.htmlExamples?.totalExamples || 0,
                utilityClasses: data.utilityClasses ? Object.keys((data.utilityClasses as any).classes || {}).length : 0
            },
            tools: [
                {
                    name: 'search_components',
                    purpose: 'Find components by name, description, or use case',
                    example: 'search_components("button")',
                    whenToUse: 'When you need to discover which component to use for a specific need'
                },
                {
                    name: 'get_component',
                    purpose: 'Get detailed info about a specific component',
                    example: 'get_component("dialog")',
                    whenToUse: 'When you know the component name and need CSS classes, modifiers, and structure'
                },
                {
                    name: 'get_component_html',
                    purpose: 'Get HTML examples for a component',
                    example: 'get_component_html("table", minimal: true)',
                    whenToUse: 'When you need working HTML code to copy/paste'
                },
                {
                    name: 'get_layout_patterns',
                    purpose: 'Get complete UI layout patterns with code',
                    example: 'get_layout_patterns("master-detail")',
                    whenToUse: 'Building: navigation shell, master-detail view, dashboard grid, or complete page layouts'
                },
                {
                    name: 'get_interaction_patterns',
                    purpose: 'Get JavaScript patterns for interactive features',
                    example: 'get_interaction_patterns(component: "table")',
                    whenToUse: 'Adding interactivity: table sorting, dialog modals, input validation, tab switching'
                },
                {
                    name: 'get_component_guidance',
                    purpose: 'Get usage guidance and best practices',
                    example: 'get_component_guidance("dialog")',
                    whenToUse: 'Deciding which component to use, understanding when to use/avoid, best practices'
                },
                {
                    name: 'setup_project',
                    purpose: 'Get project setup with smart CSS dependency detection',
                    example: 'setup_project(components: ["dialog", "table"])',
                    whenToUse: 'Starting a new project or adding fundamental-styles to existing project'
                },
                {
                    name: 'get_design_tokens',
                    purpose: 'Search CSS design tokens/variables',
                    example: 'get_design_tokens("background")',
                    whenToUse: 'Customizing styles, theming, or building custom components'
                },
                {
                    name: 'get_css_classes',
                    purpose: 'Get detailed CSS class documentation',
                    example: 'get_css_classes("fd-button")',
                    whenToUse: 'Deep dive into specific component class structure and modifiers'
                }
            ],
            skillActivationGuide: {
                overview: 'Skills provide comprehensive guidance. Tools provide quick lookups and code generation.',
                layoutPatterns: {
                    skill: 'layout-patterns',
                    activation: 'Type /layout-patterns',
                    description: '7 complete UI patterns: navigation shell, master-detail, dashboard, form wizard',
                    relatedTool: 'get_layout_patterns',
                    triggers: ['Building page layouts', 'Navigation shell', 'Master-detail view', 'Dashboard grid'],
                    components: ['page', 'panel', 'shellbar', 'side-nav', 'dynamic-page'],
                    whenToUse: 'Use skill for learning/exploration. Use tool for quick code generation.'
                },
                interactionPatterns: {
                    relatedTool: 'get_interaction_patterns',
                    triggers: ['Adding JavaScript', 'Sortable tables', 'Dialog handling', 'Form validation', 'Tab switching'],
                    components: ['table', 'dialog', 'popover', 'tabs', 'input', 'side-nav'],
                    whenToUse: 'Use tool for implementation examples and code snippets'
                },
                componentGuidanceForms: {
                    skill: 'component-guidance-forms',
                    activation: 'Type /component-guidance-forms',
                    description: '26 form components: when to use, when to avoid, best practices, examples',
                    relatedTool: 'get_component_guidance (category: "forms")',
                    triggers: ['Choosing form components', 'Input design', 'Checkbox vs radio', 'Form validation'],
                    components: ['input', 'checkbox', 'radio', 'select', 'switch', 'textarea', 'file-uploader'],
                    whenToUse: 'Use skill for component selection. Use tool for HTML examples.'
                },
                componentGuidanceData: {
                    skill: 'component-guidance-data',
                    activation: 'Type /component-guidance-data',
                    description: '23 data display components: table, list, tree guidance with best practices',
                    relatedTool: 'get_component_guidance (category: "data-display")',
                    triggers: ['Data tables', 'Lists vs tables', 'Tree structures', 'Object status'],
                    components: ['table', 'list', 'tree', 'object-status', 'object-number'],
                    whenToUse: 'Use skill for design decisions. Use tool for implementation.'
                },
                componentGuidanceNavigation: {
                    skill: 'component-guidance-navigation',
                    activation: 'Type /component-guidance-navigation',
                    description: '8 navigation components: shellbar, side-nav, menu, breadcrumb guidance',
                    relatedTool: 'get_component_guidance (category: "navigation")',
                    triggers: ['Navigation patterns', 'Menu design', 'Breadcrumbs', 'Tabs'],
                    components: ['shellbar', 'side-nav', 'menu', 'breadcrumb', 'tabs'],
                    whenToUse: 'Use skill for navigation architecture. Use tool for code.'
                },
                componentGuidanceLayout: {
                    skill: 'component-guidance-layout',
                    activation: 'Type /component-guidance-layout',
                    description: '11 layout components: page, panel, bar, section guidance',
                    relatedTool: 'get_component_guidance (category: "layout")',
                    triggers: ['Layout containers', 'Page structure', 'Panels', 'Sections'],
                    components: ['page', 'panel', 'bar', 'section', 'dynamic-page'],
                    whenToUse: 'Use skill for layout architecture. Use tool for examples.'
                },
                componentGuidanceFeedback: {
                    skill: 'component-guidance-feedback',
                    activation: 'Type /component-guidance-feedback',
                    description: '15 feedback components: message-strip, dialog, popover guidance',
                    relatedTool: 'get_component_guidance (category: "feedback")',
                    triggers: ['Error messages', 'Dialogs', 'Notifications', 'Alerts'],
                    components: ['message-strip', 'dialog', 'popover', 'alert', 'notification'],
                    whenToUse: 'Use skill for UX decisions. Use tool for implementation.'
                },
                componentGuidanceActions: {
                    skill: 'component-guidance-actions',
                    activation: 'Type /component-guidance-actions',
                    description: '4 action components: button, link guidance with hierarchy',
                    relatedTool: 'get_component_guidance (category: "actions")',
                    triggers: ['Button styles', 'Link vs button', 'Action hierarchy'],
                    components: ['button', 'link'],
                    whenToUse: 'Use skill for action design patterns. Use tool for code.'
                },
                contentDensity: {
                    skill: 'content-density',
                    activation: 'Type /content-density',
                    description: 'Complete guide to cozy/compact/condensed modes, accessibility, responsive design',
                    relatedTool: 'get_component_html (contentDensity section)',
                    triggers: ['Dense data tables', 'Desktop UIs', 'Compact mode', 'Power users'],
                    components: ['table', 'list', 'tree', 'input', 'button', 'bar', 'toolbar'],
                    whenToUse: 'Use skill for design decisions. Use tool for implementation examples.'
                },
                bemNaming: {
                    skill: 'bem-naming',
                    activation: 'Type /bem-naming',
                    description: 'BEM naming conventions for fundamental-styles components',
                    triggers: ['Class naming', 'Custom components', 'CSS architecture'],
                    whenToUse: 'Building custom components or extending fundamental-styles'
                },
                componentComposition: {
                    skill: 'component-composition',
                    activation: 'Type /component-composition',
                    description: 'How to compose components together (e.g., dialog + form, table + toolbar)',
                    triggers: ['Component combinations', 'Complex patterns', 'Nested components'],
                    whenToUse: 'Building complex UIs with multiple interacting components'
                },
                dependencyDetection: {
                    tool: 'setup_project',
                    triggers: ['Project setup', 'Missing CSS', 'Component combinations'],
                    feature: 'Automatically detects required CSS based on selected components'
                }
            },
            quickStartWorkflows: {
                'Build a master-detail layout': [
                    '1. get_layout_patterns("master-detail") - Get complete HTML pattern',
                    '2. get_component_html("list") - Customize the list',
                    '3. get_interaction_patterns(component: "list") - Add selection'
                ],
                'Create a data table with sorting': [
                    '1. get_component_html("table") - Get table HTML',
                    '2. get_interaction_patterns(pattern: "table-sorting") - Add sorting logic',
                    '3. setup_project(components: ["table"]) - Get CSS dependencies'
                ],
                'Build a navigation shell': [
                    '1. get_layout_patterns("navigation-shell") - Get complete pattern',
                    '2. get_component_guidance("shellbar") - Understand best practices',
                    '3. get_interaction_patterns(component: "side-nav") - Add collapse logic'
                ],
                'Create a form with validation': [
                    '1. get_component_html("input") - Get form fields',
                    '2. get_interaction_patterns(pattern: "input-validation") - Add validation',
                    '3. setup_project(components: ["input", "button"]) - Get dependencies'
                ]
            },
            componentCategories: Object.entries(componentsByCategory)
                .sort(([, a], [, b]) => b - a)
                .map(([category, count]) => ({ category, count }))
        };

        if (detailed) {
            result.layoutPatterns = layoutPatterns.map(ex => ({
                id: ex.id,
                description: ex.description,
                components: ex.components
            }));

            result.topComponents = data.components
                .slice(0, 20)
                .map(c => ({ id: c.id, name: c.name, category: c.category }));
        }

        return {
            content: [{
                type: 'text' as const,
                text: JSON.stringify(result, null, 2)
            }]
        };
    }
);

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
