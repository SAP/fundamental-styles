import { readFileSync, readdirSync, statSync } from 'fs';
import { resolve, basename, dirname } from 'path';

export interface ComponentExample {
    component: string;
    name: string;
    description: string;
    html: string;
}

/** Resolve path to examples — works from both source and dist. */
function resolveExamplesDir(): string {
    // __dirname is src/data/ (source) or dist/packages/mcp/src/data/ (compiled)
    // dist examples at dist/packages/mcp/data/examples/
    const distPath = resolve(__dirname, '..', '..', 'data', 'examples');
    // Source examples at <repo>/packages/styles/stories/
    const srcPath = resolve(__dirname, '..', '..', '..', '..', 'packages', 'styles', 'stories');
    try {
        statSync(distPath);
        return distPath;
    } catch {
        return srcPath;
    }
}

function findExampleHtmlFiles(dir: string): string[] {
    const results: string[] = [];
    try {
        const entries = readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = resolve(dir, entry.name);
            if (entry.isDirectory()) {
                results.push(...findExampleHtmlFiles(fullPath));
            } else if (entry.name.endsWith('.example.html')) {
                results.push(fullPath);
            }
        }
    } catch {
        // directory may not exist
    }
    return results;
}

/**
 * Map story directory names to catalog component IDs where they differ.
 * The story folder names don't always match the catalog IDs.
 */
const EXAMPLE_ID_ALIASES: Record<string, string> = {
    'combobox-input': 'input-group',
    'context-menu': 'menu',
    'datepicker': 'calendar',
    'list-grid': 'grid-list',
    'list-grid-select': 'grid-list',
    'multi-combo-box': 'input-group',
    'multi-input': 'input-group',
    'side-navigation': 'side-nav',
    'time-picker': 'input-group',
    'vertical-navigation': 'vertical-nav',
    'generic-tile': 'tile',
    'facets': 'facet',
    'form-fieldset': 'fieldset',
    'dnd-icon-tab-bar': 'icon-tab-bar',
};

/** Convert a filename like "badge-on-button.example.html" → "Badge on button" */
function fileNameToDescription(fileName: string): string {
    const name = fileName.replace('.example.html', '');
    return name
        .split('-')
        .map((word, i) => (i === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word))
        .join(' ');
}

/** Extract component id from the file path. */
function extractComponentId(filePath: string, basePath: string): string {
    // Path is like .../Components/button/styles.example.html
    // or from dist: .../examples/Components/button/styles.example.html
    const relative = filePath.replace(basePath, '').replace(/^\//, '');
    const parts = relative.split('/');

    // Find the component directory name (the one after "Components", "Layouts", etc.)
    for (let i = 0; i < parts.length - 1; i++) {
        // The component folder is the one containing the .example.html file
        if (parts[i + 1] && parts[i + 1].endsWith('.example.html')) {
            return parts[i];
        }
    }
    return dirname(relative).split('/').pop() ?? 'unknown';
}

export function loadExamples(): Map<string, ComponentExample[]> {
    const examplesDir = resolveExamplesDir();
    const files = findExampleHtmlFiles(examplesDir);
    const byComponent = new Map<string, ComponentExample[]>();

    for (const filePath of files) {
        let componentId = extractComponentId(filePath, examplesDir);
        // Normalize using alias map
        if (EXAMPLE_ID_ALIASES[componentId]) {
            componentId = EXAMPLE_ID_ALIASES[componentId];
        }
        const fileName = basename(filePath);
        const html = readFileSync(filePath, 'utf-8');

        const example: ComponentExample = {
            component: componentId,
            name: fileName.replace('.example.html', ''),
            description: fileNameToDescription(fileName),
            html
        };

        const existing = byComponent.get(componentId) ?? [];
        existing.push(example);
        byComponent.set(componentId, existing);
    }

    return byComponent;
}
