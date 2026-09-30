import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { generateMarkdown, parseStoryFile } from '../../../scripts/extract-docs.js';
import { SCHEMA_PATH, validateHTMLBlocks } from '../../../scripts/validate-docs.js';

const temporaryDirectories: string[] = [];

function createStoryFixture(description: string, html: string, followingHtml?: string): string {
    const fixtureDirectory = mkdtempSync(join(tmpdir(), 'fundamental-styles-docs-'));
    temporaryDirectories.push(fixtureDirectory);

    const storyPath = join(fixtureDirectory, 'stories', 'Components', 'fixture', 'fixture.stories.js');
    const examplePath = join(fixtureDirectory, 'stories', 'Components', 'fixture', 'fixture.example.html');
    const fixtureSource = `
import fixtureExample from './fixture.example.html?raw';
${followingHtml ? "import followingExample from './following.example.html?raw';" : ''}

export default {
    title: 'Components/Fixture',
    parameters: { description: \`Fixture documentation.\` }
};

export const Fixture = () => fixtureExample;
Fixture.parameters = { docs: { description: { story: \`${description}\` } } };
${followingHtml ? '\nexport const Following = () => followingExample;' : ''}
`;

    mkdirSync(join(fixtureDirectory, 'stories', 'Components', 'fixture'), { recursive: true });
    writeFileSync(storyPath, fixtureSource, 'utf8');
    writeFileSync(examplePath, html, 'utf8');
    if (followingHtml) {
        writeFileSync(
            join(fixtureDirectory, 'stories', 'Components', 'fixture', 'following.example.html'),
            followingHtml,
            'utf8'
        );
    }

    return storyPath;
}

afterEach(() => {
    temporaryDirectories.splice(0).forEach((directory) => rmSync(directory, { recursive: true, force: true }));
});

describe('documentation extractor', () => {
    it('extracts a complete story description containing escaped Markdown backticks', () => {
        const storyPath = createStoryFixture(
            'Commit \\`aria-hidden\\`, \\`inert\\`, and the active class atomically after the transition.',
            '<div class="fd-fixture"></div>'
        );

        const component = parseStoryFile(storyPath);

        expect(component.stories[0].description).toBe(
            'Commit `aria-hidden`, `inert`, and the active class atomically after the transition.'
        );
    });

    it('removes an inline-style demo wrapper without removing a nested div close', () => {
        const storyPath = createStoryFixture(
            'Nested fixture.',
            `<div style="display: grid">
    <div class="fd-fixture">
        <div class="fd-fixture__content">
            Content
        </div>
        <p>Sibling content</p>
    </div>
</div>`
        );

        const markdown = generateMarkdown(parseStoryFile(storyPath));
        const basicUsage = markdown.split('## Basic Usage')[1]?.split('##')[0] ?? '';
        const htmlBlock = basicUsage.match(/```html\s*([\s\S]*?)```/)?.[1].trim() ?? '';
        const container = document.createElement('div');
        container.innerHTML = htmlBlock;

        expect(htmlBlock).not.toContain('style=');
        expect(htmlBlock.match(/<div\b/g)).toHaveLength(htmlBlock.match(/<\/div>/g)?.length ?? 0);
        expect(container.children).toHaveLength(1);
        expect(container.querySelector('.fd-fixture')?.children).toHaveLength(2);
        expect(container.querySelector('.fd-fixture__content + p')?.textContent).toBe('Sibling content');
    });

    it('removes an unclosed inline-style-only demo wrapper', () => {
        const storyPath = createStoryFixture(
            'Unclosed demo wrapper fixture.',
            `<div style="min-height: 20rem">
    <div class="fd-fixture">Content</div>`
        );

        const markdown = generateMarkdown(parseStoryFile(storyPath));
        const basicUsage = markdown.split('## Basic Usage')[1]?.split('##')[0] ?? '';
        const htmlBlock = basicUsage.match(/```html\s*([\s\S]*?)```/)?.[1].trim() ?? '';

        expect(htmlBlock).toBe('<div class="fd-fixture">Content</div>');
    });

    it('keeps multiline div openings balanced across nested, sibling, and following examples', () => {
        const storyPath = createStoryFixture(
            'Multiline fixture.',
            `<div
    class="fd-fixture"
    aria-label="Primary fixture"
>
    <div class="fd-fixture__content">
        <span>Nested content</span>
    </div>
    <p class="fd-fixture__sibling">Sibling content</p>
</div>`,
            `<div
    class="fd-fixture fd-fixture--following"
    aria-label="Following fixture"
>
    <span>Following example</span>
</div>`
        );

        const markdown = generateMarkdown(parseStoryFile(storyPath));
        const examples = markdown.split('## Examples')[1] ?? '';
        const htmlBlocks = [...examples.matchAll(/```html\s*([\s\S]*?)```/g)].map((match) => match[1].trim());

        expect(htmlBlocks).toHaveLength(2);
        htmlBlocks.forEach((htmlBlock) => {
            expect(htmlBlock.match(/<div\b/g)).toHaveLength(htmlBlock.match(/<\/div>/g)?.length ?? 0);
        });

        const primaryContainer = document.createElement('div');
        primaryContainer.innerHTML = htmlBlocks[0];
        expect(primaryContainer.children).toHaveLength(1);
        expect(primaryContainer.querySelector('.fd-fixture__content + .fd-fixture__sibling')?.textContent).toBe(
            'Sibling content'
        );
        expect(primaryContainer.querySelector('.fd-fixture--following')).toBeNull();

        const followingContainer = document.createElement('div');
        followingContainer.innerHTML = htmlBlocks[1];
        expect(followingContainer.children).toHaveLength(1);
        expect(followingContainer.querySelector('.fd-fixture--following')?.textContent).toContain('Following example');
        expect(followingContainer.querySelector('.fd-fixture__content')).toBeNull();
    });

    it('repairs incomplete paired tags within each generated example', () => {
        const storyPath = createStoryFixture(
            'Incomplete source fixture.',
            `<div class="fd-fixture">
    <ul>
        <li>Item
    </ul>`,
            `<section class="fd-fixture__following">
    <p>Following example</p>
</section>`
        );

        const markdown = generateMarkdown(parseStoryFile(storyPath));
        const examples = markdown.split('## Examples')[1] ?? '';
        const htmlBlocks = [...examples.matchAll(/```html\s*([\s\S]*?)```/g)].map((match) => match[1].trim());

        expect(htmlBlocks).toHaveLength(2);
        htmlBlocks.forEach((htmlBlock) => {
            expect(validateHTMLBlocks(`\`\`\`html\n${htmlBlock}\n\`\`\``).errors).toEqual([]);
        });
        expect(htmlBlocks[0]).toContain('</li>');
        expect(htmlBlocks[0]).toContain('</div>');
        expect(htmlBlocks[0]).not.toContain('Following example');
        expect(htmlBlocks[1]).toContain('Following example');
    });

    it('repairs incomplete HTML fences embedded in story descriptions', () => {
        const storyPath = createStoryFixture(
            'Use this fragment:\n\\`\\`\\`html\n<ul class="fd-fixture__list">\n\\`\\`\\`',
            '<div class="fd-fixture"></div>'
        );

        const markdown = generateMarkdown(parseStoryFile(storyPath));
        const descriptionBlock =
            [...markdown.matchAll(/```html\s*([\s\S]*?)```/g)]
                .map((match) => match[1].trim())
                .find((htmlBlock) => htmlBlock.includes('fd-fixture__list')) ?? '';

        expect(descriptionBlock).toBe('<ul class="fd-fixture__list">\n</ul>');
        expect(validateHTMLBlocks(markdown).errors).toEqual([]);
    });

    it('does not copy trailing whitespace from source prose into generated Markdown', () => {
        const storyPath = createStoryFixture(
            'First generated line.  \nSecond generated line.',
            '<div class="fd-fixture"></div>'
        );

        const markdown = generateMarkdown(parseStoryFile(storyPath));

        expect(markdown).not.toMatch(/[ \t]+$/m);
    });
});

describe('documentation validator command', () => {
    it.each([
        ['unclosed', '<div>\n    <span>Content</span>'],
        ['misnested', '<div>\n    <span>Content</div>\n</span>']
    ])('reports %s paired tags in an HTML fence as blocking errors', (_caseName, html) => {
        const { errors } = validateHTMLBlocks(`\`\`\`html\n${html}\n\`\`\``);

        expect(errors).not.toHaveLength(0);
        expect(errors[0]).toContain('HTML block 1');
    });

    it('accepts valid multiline HTML with comments and void elements', () => {
        const markdown = `\`\`\`html
<!-- fixture comment -->
<div
    class="fd-fixture"
>
    <img src="fixture.svg" alt="">
    <span>Content</span>
</div>
\`\`\``;

        expect(validateHTMLBlocks(markdown).errors).toEqual([]);
    });

    it('exits nonzero for a malformed generated-document fixture', () => {
        const fixtureDirectory = mkdtempSync(join(tmpdir(), 'fundamental-styles-validator-'));
        temporaryDirectories.push(fixtureDirectory);
        writeFileSync(
            join(fixtureDirectory, 'malformed.md'),
            `---
component: fixture
title: Fixture
category: Components
sourcePath: packages/styles/stories/Components/fixture/fixture.stories.js
---

# Fixture

\`\`\`html
<div><span>Malformed</div>
\`\`\`

## Accessibility
`,
            'utf8'
        );

        const result = spawnSync('yarn', ['validate:docs'], {
            cwd: process.cwd(),
            encoding: 'utf8',
            env: { ...process.env, FORCE_COLOR: '0', FUNDAMENTAL_DOCS_DIR: fixtureDirectory }
        });

        expect(result.status).toBe(1);
        expect(result.stdout).toContain('Misnested closing tag </div>; expected </span>');
    });

    it('runs without the ignored release-generated frontmatter schema', () => {
        expect(SCHEMA_PATH).toBe(resolve('scripts/schemas/component-frontmatter.schema.json'));
        expect(existsSync(SCHEMA_PATH)).toBe(true);

        const result = spawnSync('yarn', ['validate:docs'], {
            cwd: process.cwd(),
            encoding: 'utf8',
            env: { ...process.env, FORCE_COLOR: '0' }
        });

        expect(result.status, `${result.stdout}\n${result.stderr}`).toBe(0);
    });
});
