import { readFileSync, readdirSync } from 'fs';
import { resolve, basename } from 'path';
import {
    AccessibilityFile,
    ComponentCatalog,
    ComponentMetadata,
    DesignToken,
    HtmlExamplesFile,
    ModifierRules,
    RelationshipsFile,
    UtilityClassesFile
} from '../types/component-metadata';

function readJson<T>(filePath: string): T | null {
    try {
        return JSON.parse(readFileSync(filePath, 'utf-8'));
    } catch {
        return null;
    }
}

/** Resolve path to a data file — works both from source (development) and from dist (npm). */
export function resolveDataPath(fileName: string): string {
    // __dirname is src/data/ (source) or dist/packages/mcp/src/data/ (compiled)
    // dist data is at dist/packages/mcp/data/ (two levels up from src/data/)
    const distPath = resolve(__dirname, '..', '..', 'data', fileName);
    // Source data is at <repo>/docs/ (five levels up from packages/mcp/src/data/)
    const srcPath = resolve(__dirname, '..', '..', '..', '..', 'docs', fileName);
    try {
        readFileSync(distPath, 'utf-8');
        return distPath;
    } catch {
        return srcPath;
    }
}

export interface LoadedCatalog {
    version: string;
    components: ComponentMetadata[];
    modifierRules: ModifierRules | null;
    relationships: RelationshipsFile | null;
    accessibility: AccessibilityFile | null;
    utilityClasses: UtilityClassesFile | null;
    designTokens: DesignToken[];
    htmlExamples: HtmlExamplesFile | null;
}

export function loadCatalog(): LoadedCatalog {
    // Component catalog
    const catalog = readJson<ComponentCatalog>(resolveDataPath('component-catalog.json'));
    const components: ComponentMetadata[] = [];
    if (catalog) {
        for (const pkg of Object.values(catalog.packages)) {
            components.push(...pkg.components);
        }
    }

    // Modifier rules
    const modifierRules = readJson<ModifierRules>(resolveDataPath('modifier-rules.json'));

    // Component relationships
    const relationships = readJson<RelationshipsFile>(resolveDataPath('component-relationships.json'));

    // Accessibility
    const accessibility = readJson<AccessibilityFile>(resolveDataPath('accessibility.json'));

    // Utility classes
    const utilityClasses = readJson<UtilityClassesFile>(resolveDataPath('utility-classes.json'));

    // Design tokens — flatten from categorized structure
    const designTokens: DesignToken[] = [];
    const tokensFile = readJson<Record<string, unknown>>(resolveDataPath('design-tokens.json'));
    if (tokensFile) {
        // Extract tokens from all levels: top-level sections and nested categories
        const extractTokens = (obj: Record<string, unknown>) => {
            for (const [key, value] of Object.entries(obj)) {
                if (key.startsWith('$') || key === 'totalTokens' || key === 'description' ||
                    key === 'version' || key === 'generatedBy' || key === 'source' ||
                    key === 'relatedFiles') {
                    continue;
                }
                const section = value as Record<string, unknown>;
                if (section && typeof section === 'object') {
                    if (Array.isArray(section['tokens'])) {
                        for (const token of section['tokens'] as DesignToken[]) {
                            designTokens.push(token);
                        }
                    }
                    // Recurse into nested objects (e.g., "categories" contains sub-objects)
                    if (!Array.isArray(section) && typeof section === 'object' && !section['tokens']) {
                        extractTokens(section as Record<string, unknown>);
                    }
                }
            }
        };
        extractTokens(tokensFile);
    }

    // HTML examples
    const htmlExamples = readJson<HtmlExamplesFile>(resolveDataPath('html-examples.json'));

    return {
        version: catalog?.version ?? 'unknown',
        components,
        modifierRules,
        relationships,
        accessibility,
        utilityClasses,
        designTokens,
        htmlExamples
    };
}

/** Read a text/markdown file from the data directory. Returns null if not found. */
export function readDataFile(fileName: string): string | null {
    try {
        return readFileSync(resolveDataPath(fileName), 'utf-8');
    } catch {
        return null;
    }
}

/** Resolve path to a schema file — works from source and dist. */
function resolveSchemaPath(schemaName: string): string {
    const distPath = resolve(__dirname, '..', '..', 'data', 'schemas', schemaName);
    const srcPath = resolve(__dirname, '..', '..', '..', '..', 'docs', 'schemas', schemaName);
    try {
        readFileSync(distPath, 'utf-8');
        return distPath;
    } catch {
        return srcPath;
    }
}

/** List all available component schema names (without .schema.json suffix). */
export function listSchemas(): string[] {
    // Try dist first, then source
    const distDir = resolve(__dirname, '..', '..', 'data', 'schemas');
    const srcDir = resolve(__dirname, '..', '..', '..', '..', 'docs', 'schemas');
    let dir = distDir;
    try {
        readdirSync(distDir);
    } catch {
        dir = srcDir;
    }
    try {
        return readdirSync(dir)
            .filter((f) => f.endsWith('.schema.json'))
            .map((f) => f.replace('.schema.json', ''));
    } catch {
        return [];
    }
}

/** Read a component JSON Schema by component id. */
export function readSchema(componentId: string): string | null {
    try {
        return readFileSync(resolveSchemaPath(`${componentId}.schema.json`), 'utf-8');
    } catch {
        return null;
    }
}
