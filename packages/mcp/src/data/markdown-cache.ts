import { readdirSync, readFileSync, existsSync } from 'fs';
import { resolve, basename } from 'path';
import { ComponentMarkdownDoc } from './load-markdown-docs';

/**
 * LRU Cache for markdown documentation
 *
 * Implements lazy loading with a Least Recently Used (LRU) eviction policy.
 * This reduces memory usage from ~50MB (all docs) to ~5MB (configurable cache size).
 */
export class MarkdownDocCache {
    private cache = new Map<string, ComponentMarkdownDoc>();
    private accessOrder: string[] = [];
    private readonly maxSize: number;
    private readonly docsPath: string;
    private availableIds: Set<string> | null = null;

    constructor(maxSize: number = 50) {
        this.maxSize = maxSize;
        this.docsPath = this.resolveMarkdownDocsPath();
    }

    /** Resolve path to markdown docs directory — works both from source (dev) and from dist (npm). */
    private resolveMarkdownDocsPath(): string {
        // dist path: dist/packages/mcp/data/components/
        const distPath = resolve(__dirname, '..', '..', 'data', 'components');
        // source path: docs/components/
        const srcPath = resolve(__dirname, '..', '..', '..', '..', 'docs', 'components');

        if (existsSync(distPath)) {
            return distPath;
        }
        return srcPath;
    }

    /** Get list of available component IDs (lazy initialization) */
    private getAvailableIds(): Set<string> {
        if (this.availableIds === null) {
            this.availableIds = new Set();
            try {
                const files = readdirSync(this.docsPath).filter((f) => f.endsWith('.md') && f !== 'README.md');
                for (const file of files) {
                    this.availableIds.add(basename(file, '.md'));
                }
            } catch (error) {
                console.error('Failed to read markdown docs directory:', error);
            }
        }
        return this.availableIds;
    }

    /** Load a single markdown document from disk */
    private loadDoc(componentId: string): ComponentMarkdownDoc | null {
        const filePath = resolve(this.docsPath, `${componentId}.md`);

        try {
            const content = readFileSync(filePath, 'utf-8');
            const { frontmatter, body } = this.parseFrontmatter(content);
            const examples = this.extractExamples(body);

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

    /** Parse frontmatter from markdown content */
    private parseFrontmatter(content: string): { frontmatter: Record<string, unknown>; body: string } {
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
    private extractExamples(body: string): Array<{ title: string; html: string; description?: string }> {
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

    /** Update LRU access order */
    private updateAccessOrder(id: string): void {
        // Remove from current position
        const index = this.accessOrder.indexOf(id);
        if (index > -1) {
            this.accessOrder.splice(index, 1);
        }
        // Add to end (most recently used)
        this.accessOrder.push(id);
    }

    /** Evict least recently used item if cache is full */
    private evictIfNeeded(): void {
        if (this.cache.size >= this.maxSize && this.accessOrder.length > 0) {
            const lruId = this.accessOrder.shift();
            if (lruId) {
                this.cache.delete(lruId);
            }
        }
    }

    /**
     * Get a markdown document by ID (lazy loaded)
     * @param componentId Component ID (e.g., "button")
     * @returns ComponentMarkdownDoc or null if not found
     */
    get(componentId: string): ComponentMarkdownDoc | null {
        // Check cache first
        if (this.cache.has(componentId)) {
            this.updateAccessOrder(componentId);
            return this.cache.get(componentId)!;
        }

        // Load from disk
        const doc = this.loadDoc(componentId);
        if (doc) {
            this.evictIfNeeded();
            this.cache.set(componentId, doc);
            this.updateAccessOrder(componentId);
        }

        return doc;
    }

    /**
     * Get all available component IDs without loading documents
     * @returns Array of component IDs
     */
    keys(): string[] {
        return Array.from(this.getAvailableIds());
    }

    /**
     * Check if a component exists without loading it
     * @param componentId Component ID
     * @returns true if component exists
     */
    has(componentId: string): boolean {
        return this.getAvailableIds().has(componentId);
    }

    /**
     * Get cache statistics
     * @returns Object with cache metrics
     */
    getStats(): { size: number; maxSize: number; hitRate: number; totalComponents: number } {
        return {
            size: this.cache.size,
            maxSize: this.maxSize,
            hitRate: this.cache.size > 0 ? (this.accessOrder.length / this.cache.size) : 0,
            totalComponents: this.getAvailableIds().size
        };
    }

    /**
     * Clear the cache
     */
    clear(): void {
        this.cache.clear();
        this.accessOrder = [];
    }
}
