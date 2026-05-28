import { readdirSync, readFileSync } from 'fs';
import { resolve, basename } from 'path';

export interface ComponentMarkdownDoc {
    /** Component ID (filename without .md) */
    id: string;
    /** Raw markdown content */
    content: string;
    /** Parsed frontmatter */
    frontmatter: {
        component: string;
        title: string;
        selector: string;
        cssFile: string;
        category?: string;
        subcategory?: string;
        package?: string;
        description?: string;
        tags?: string[];
        relatedComponents?: string[];
    };
    /** HTML examples extracted from markdown */
    examples: Array<{
        /** Example title from heading or first line */
        title: string;
        /** HTML content */
        html: string;
        /** Description if available */
        description?: string;
    }>;
}

/** Resolve path to markdown docs directory — works both from source (dev) and from dist (npm). */
function resolveMarkdownDocsPath(): string {
    // dist path: dist/packages/mcp/data/components/
    const distPath = resolve(__dirname, '..', '..', 'data', 'components');
    // source path: docs/components/
    const srcPath = resolve(__dirname, '..', '..', '..', '..', 'docs', 'components');

    try {
        readdirSync(distPath);
        return distPath;
    } catch {
        return srcPath;
    }
}

/** Parse frontmatter from markdown content */
function parseFrontmatter(content: string): { frontmatter: Record<string, unknown>; body: string } {
    const frontmatterMatch = content.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);

    if (!frontmatterMatch) {
        return { frontmatter: {}, body: content };
    }

    const [, frontmatterText, body] = frontmatterMatch;
    const frontmatter: Record<string, unknown> = {};

    // Simple YAML parser for common types
    const lines = frontmatterText.split('\n');
    let currentKey = '';

    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;

        // Array item
        if (trimmed.startsWith('- ')) {
            if (currentKey && Array.isArray(frontmatter[currentKey])) {
                (frontmatter[currentKey] as string[]).push(trimmed.slice(2).trim());
            }
            continue;
        }

        // Key-value pair
        const match = trimmed.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
        if (match) {
            const [, key, value] = match;
            currentKey = key;

            // Empty value means array follows
            if (!value) {
                frontmatter[key] = [];
            } else {
                // Try to parse as number or boolean
                if (value === 'true') {
                    frontmatter[key] = true;
                } else if (value === 'false') {
                    frontmatter[key] = false;
                } else if (/^\d+$/.test(value)) {
                    frontmatter[key] = parseInt(value, 10);
                } else {
                    // Remove quotes if present
                    frontmatter[key] = value.replace(/^["']|["']$/g, '');
                }
            }
        }
    }

    return { frontmatter, body };
}

/** Extract HTML examples from markdown code blocks */
function extractExamples(body: string): Array<{ title: string; html: string; description?: string }> {
    const examples: Array<{ title: string; html: string; description?: string }> = [];

    // Find all HTML code blocks with optional preceding heading
    const htmlBlockRegex = /(?:^|\n)(?:#{2,4}\s+(.+?)\n)?(?:(.+?)\n)?```html\n([\s\S]+?)\n```/g;

    let match;
    while ((match = htmlBlockRegex.exec(body)) !== null) {
        const [, heading, descriptionLine, html] = match;

        examples.push({
            title: heading || descriptionLine || 'Example',
            html: html.trim(),
            description: heading ? descriptionLine?.trim() : undefined
        });
    }

    return examples;
}

/** Load all component markdown documentation files */
export function loadMarkdownDocs(): Map<string, ComponentMarkdownDoc> {
    const docs = new Map<string, ComponentMarkdownDoc>();
    const docsDir = resolveMarkdownDocsPath();

    try {
        const files = readdirSync(docsDir).filter((f) => f.endsWith('.md') && f !== 'README.md');

        for (const file of files) {
            const filePath = resolve(docsDir, file);
            const content = readFileSync(filePath, 'utf-8');
            const id = basename(file, '.md');

            const { frontmatter, body } = parseFrontmatter(content);
            const examples = extractExamples(body);

            docs.set(id, {
                id,
                content,
                frontmatter: {
                    component: (frontmatter['component'] as string) || id,
                    title: (frontmatter['title'] as string) || id,
                    selector: (frontmatter['selector'] as string) || '',
                    cssFile: (frontmatter['cssFile'] as string) || '',
                    category: frontmatter['category'] as string | undefined,
                    subcategory: frontmatter['subcategory'] as string | undefined,
                    package: frontmatter['package'] as string | undefined,
                    description: frontmatter['description'] as string | undefined,
                    tags: frontmatter['tags'] as string[] | undefined,
                    relatedComponents: frontmatter['relatedComponents'] as string[] | undefined
                },
                examples
            });
        }
    } catch (error) {
        console.error('Failed to load markdown docs:', error);
    }

    return docs;
}

/** Get markdown documentation for a specific component */
export function getMarkdownDoc(componentId: string): ComponentMarkdownDoc | null {
    const docsDir = resolveMarkdownDocsPath();
    const filePath = resolve(docsDir, `${componentId}.md`);

    try {
        const content = readFileSync(filePath, 'utf-8');
        const { frontmatter, body } = parseFrontmatter(content);
        const examples = extractExamples(body);

        return {
            id: componentId,
            content,
            frontmatter: {
                component: (frontmatter['component'] as string) || componentId,
                title: (frontmatter['title'] as string) || componentId,
                selector: (frontmatter['selector'] as string) || '',
                cssFile: (frontmatter['cssFile'] as string) || '',
                category: frontmatter['category'] as string | undefined,
                subcategory: frontmatter['subcategory'] as string | undefined,
                package: frontmatter['package'] as string | undefined,
                description: frontmatter['description'] as string | undefined,
                tags: frontmatter['tags'] as string[] | undefined,
                relatedComponents: frontmatter['relatedComponents'] as string[] | undefined
            },
            examples
        };
    } catch {
        return null;
    }
}
