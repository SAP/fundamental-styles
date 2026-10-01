#!/usr/bin/env node

/**
 * Validate component documentation markdown files
 * Checks frontmatter structure, required sections, and content quality
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const DOCS_DIR = process.env.FUNDAMENTAL_DOCS_DIR
    ? path.resolve(process.env.FUNDAMENTAL_DOCS_DIR)
    : path.join(__dirname, '..', 'docs', 'components');
const SCHEMA_PATH = path.join(__dirname, 'schemas', 'component-frontmatter.schema.json');

// Required sections in documentation
const REQUIRED_SECTIONS = ['# ', '## Accessibility'];

// Optional but recommended sections
const RECOMMENDED_SECTIONS = ['## Modifiers', '## States', '## Examples'];

// Validation results
const results = {
    total: 0,
    passed: 0,
    failed: 0,
    warnings: 0,
    errors: []
};

/**
 * Parse frontmatter from markdown file
 */
function parseFrontmatter(content) {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---/;
    const match = content.match(frontmatterRegex);

    if (!match) {
        return { error: 'No frontmatter found', data: null };
    }

    try {
        const frontmatterText = match[1];
        const lines = frontmatterText.split('\n');
        const data = {};

        for (const line of lines) {
            const colonIndex = line.indexOf(':');
            if (colonIndex === -1) continue;

            const key = line.substring(0, colonIndex).trim();
            let value = line.substring(colonIndex + 1).trim();

            // Parse JSON arrays
            if (value.startsWith('[') && value.endsWith(']')) {
                try {
                    value = JSON.parse(value);
                } catch (e) {
                    return { error: `Invalid JSON array for key "${key}": ${value}`, data: null };
                }
            }

            data[key] = value;
        }

        return { error: null, data };
    } catch (err) {
        return { error: `Failed to parse frontmatter: ${err.message}`, data: null };
    }
}

/**
 * Validate frontmatter against JSON schema
 */
function validateFrontmatter(frontmatter, schema) {
    const ajv = new Ajv({ allErrors: true, strict: false });
    addFormats(ajv);

    const validate = ajv.compile(schema);
    const valid = validate(frontmatter);

    if (!valid) {
        return {
            valid: false,
            errors: validate.errors.map((err) => ({
                path: err.instancePath || err.dataPath,
                message: err.message,
                params: err.params
            }))
        };
    }

    return { valid: true, errors: [] };
}

/**
 * Check for required sections in markdown content
 */
function checkRequiredSections(content, frontmatter) {
    const issues = [];
    const warnings = [];
    const requiredSections = frontmatter.cssFile
        ? [...REQUIRED_SECTIONS, '## Installation', '## Basic Usage']
        : REQUIRED_SECTIONS;

    // Check required sections
    for (const section of requiredSections) {
        if (!content.includes(section)) {
            issues.push(`Missing required section: "${section}"`);
        }
    }

    // Check recommended sections
    for (const section of RECOMMENDED_SECTIONS) {
        if (!content.includes(section)) {
            warnings.push(`Missing recommended section: "${section}"`);
        }
    }

    return { issues, warnings };
}

/**
 * Validate HTML code blocks
 */
function* scanHTMLTokens(html) {
    const rawTextElements = new Set(['iframe', 'noembed', 'noframes', 'script', 'style', 'textarea', 'title', 'xmp']);
    let cursor = 0;
    let rawTextElement = null;

    while (cursor < html.length) {
        if (rawTextElement) {
            const closingTagRegex = new RegExp(`</\\s*${rawTextElement}\\s*>`, 'gi');
            closingTagRegex.lastIndex = cursor;
            const closingTagMatch = closingTagRegex.exec(html);
            if (!closingTagMatch) {
                return;
            }

            yield {
                value: closingTagMatch[0],
                index: closingTagMatch.index,
                end: closingTagRegex.lastIndex
            };
            cursor = closingTagRegex.lastIndex;
            rawTextElement = null;
            continue;
        }

        const tokenStart = html.indexOf('<', cursor);
        if (tokenStart < 0) {
            return;
        }

        if (html.startsWith('<!--', tokenStart)) {
            const commentEnd = html.indexOf('-->', tokenStart + 4);
            if (commentEnd < 0) {
                return;
            }

            const tokenEnd = commentEnd + 3;
            yield { value: html.slice(tokenStart, tokenEnd), index: tokenStart, end: tokenEnd };
            cursor = tokenEnd;
            continue;
        }

        if (html.startsWith('<![CDATA[', tokenStart)) {
            const cdataEnd = html.indexOf(']]>', tokenStart + 9);
            if (cdataEnd < 0) {
                return;
            }

            const tokenEnd = cdataEnd + 3;
            yield { value: html.slice(tokenStart, tokenEnd), index: tokenStart, end: tokenEnd };
            cursor = tokenEnd;
            continue;
        }

        let tagCursor = tokenStart + 1;
        if (html[tagCursor] === '/') {
            tagCursor++;
        }

        const isDeclaration = html[tagCursor] === '!' || html[tagCursor] === '?';
        if (!isDeclaration && !/[a-z]/i.test(html[tagCursor] ?? '')) {
            cursor = tokenStart + 1;
            continue;
        }

        let quote = null;
        let quotedGreaterThan = -1;
        let tokenEnd = -1;
        for (let index = tagCursor + 1; index < html.length; index++) {
            const character = html[index];
            if (quote) {
                if (character === quote) {
                    quote = null;
                    quotedGreaterThan = -1;
                } else if (character === '>') {
                    quotedGreaterThan = index;
                } else if (character === '<' && quotedGreaterThan >= 0) {
                    tokenEnd = quotedGreaterThan + 1;
                    break;
                }
            } else if (character === '"' || character === "'") {
                let previousIndex = index - 1;
                while (/\s/.test(html[previousIndex] ?? '')) {
                    previousIndex--;
                }
                if (html[previousIndex] === '=') {
                    quote = character;
                }
            } else if (character === '>') {
                tokenEnd = index + 1;
                break;
            }
        }

        if (tokenEnd < 0) {
            return;
        }

        const value = html.slice(tokenStart, tokenEnd);
        yield { value, index: tokenStart, end: tokenEnd };
        cursor = tokenEnd;

        const tagMatch = value.match(/^<\s*(\/?)\s*([a-z][a-z0-9:-]*)\b/i);
        if (tagMatch && !tagMatch[1] && !/\/\s*>$/.test(value) && rawTextElements.has(tagMatch[2].toLowerCase())) {
            rawTextElement = tagMatch[2].toLowerCase();
        }
    }
}

function validateHTMLBlocks(content) {
    const errors = [];
    const warnings = [];
    const voidElements = new Set([
        'area',
        'base',
        'br',
        'col',
        'embed',
        'hr',
        'img',
        'input',
        'link',
        'meta',
        'param',
        'source',
        'track',
        'wbr'
    ]);

    // Find all HTML code blocks
    const htmlBlockRegex = /```html\s*([\s\S]*?)```/g;
    let match;
    let blockIndex = 0;

    while ((match = htmlBlockRegex.exec(content)) !== null) {
        blockIndex++;
        const html = match[1];
        const openTags = [];
        for (const htmlToken of scanHTMLTokens(html)) {
            const tag = htmlToken.value;
            if (tag.startsWith('<!--') || tag.startsWith('<!') || tag.startsWith('<?')) {
                continue;
            }

            const tagMatch = tag.match(/^<\s*(\/?)\s*([a-z][a-z0-9:-]*)\b/i);
            if (!tagMatch) {
                continue;
            }

            const tagName = tagMatch[2].toLowerCase();
            const isClosing = Boolean(tagMatch[1]);
            if (voidElements.has(tagName) || (!isClosing && /\/\s*>$/.test(tag))) {
                continue;
            }

            if (!isClosing) {
                openTags.push(tagName);
                continue;
            }

            const expectedTag = openTags.at(-1);
            if (!expectedTag) {
                errors.push(`HTML block ${blockIndex}: Unmatched closing tag </${tagName}>`);
                continue;
            }

            if (expectedTag !== tagName) {
                errors.push(
                    `HTML block ${blockIndex}: Misnested closing tag </${tagName}>; expected </${expectedTag}>`
                );
                const matchingOpeningIndex = openTags.lastIndexOf(tagName);
                if (matchingOpeningIndex >= 0) {
                    openTags.splice(matchingOpeningIndex);
                }
                continue;
            }

            openTags.pop();
        }

        if (openTags.length > 0) {
            errors.push(
                `HTML block ${blockIndex}: Unclosed tag${openTags.length === 1 ? '' : 's'}: ${openTags
                    .map((tagName) => `<${tagName}>`)
                    .join(', ')}`
            );
        }

        // Check for common issues
        if (html.includes('fddocs-')) {
            warnings.push(`HTML block ${blockIndex}: Contains 'fddocs-' classes (should be cleaned)`);
        }

        if (html.includes('style=')) {
            warnings.push(`HTML block ${blockIndex}: Contains inline styles (should be removed)`);
        }

        if (html.includes('data-testid') || html.includes('data-test')) {
            warnings.push(`HTML block ${blockIndex}: Contains test attributes (should be removed)`);
        }

        if (html.includes('<br>') || html.includes('<br/>')) {
            warnings.push(`HTML block ${blockIndex}: Contains <br> tags (should be removed)`);
        }

        // Check for proper indentation (should be 4 spaces)
        const lines = html.split('\n').filter((l) => l.trim());
        if (lines.length > 0) {
            const firstLine = lines[0];
            if (firstLine.startsWith('  ') && !firstLine.startsWith('    ')) {
                warnings.push(`HTML block ${blockIndex}: Uses 2-space indentation (should be 4 spaces)`);
            }
        }
    }

    return { errors, warnings };
}

/**
 * Validate modifier table format
 */
function validateModifierTable(content) {
    const issues = [];

    if (!content.includes('## Modifiers')) {
        return issues; // Optional section
    }

    const modifierSection = content.split('## Modifiers')[1]?.split('##')[0];
    if (!modifierSection) return issues;

    // Check for table format
    if (!modifierSection.includes('| Class | Description |')) {
        issues.push('Modifier section exists but table header is malformed');
    }

    // Check for empty descriptions
    const tableRows = modifierSection.split('\n').filter((line) => line.startsWith('|') && !line.includes('Class'));
    for (const row of tableRows) {
        const cells = row
            .split('|')
            .map((c) => c.trim())
            .filter((c) => c);
        if (cells.length >= 2 && (!cells[1] || cells[1] === 'Style variant')) {
            issues.push(`Modifier "${cells[0]}" has generic or missing description`);
        }
    }

    return issues;
}

/**
 * Validate a single markdown file
 */
function validateFile(filePath, schema) {
    const relativePath = path.relative(DOCS_DIR, filePath);
    results.total++;

    console.log(`\nValidating: ${relativePath}`);

    try {
        const content = fs.readFileSync(filePath, 'utf-8');

        // Parse frontmatter
        const { error: fmError, data: frontmatter } = parseFrontmatter(content);
        if (fmError) {
            results.failed++;
            results.errors.push({ file: relativePath, error: fmError });
            console.log(`  ❌ ${fmError}`);
            return;
        }

        // Validate frontmatter against schema
        const { valid, errors: schemaErrors } = validateFrontmatter(frontmatter, schema);
        if (!valid) {
            results.failed++;
            schemaErrors.forEach((err) => {
                const errorMsg = `Frontmatter validation: ${err.path} ${err.message}`;
                results.errors.push({ file: relativePath, error: errorMsg });
                console.log(`  ❌ ${errorMsg}`);
            });
            return;
        }

        // Check required sections
        const { issues: sectionIssues, warnings: sectionWarnings } = checkRequiredSections(content, frontmatter);
        if (sectionIssues.length > 0) {
            results.failed++;
            sectionIssues.forEach((issue) => {
                results.errors.push({ file: relativePath, error: issue });
                console.log(`  ❌ ${issue}`);
            });
            return;
        }

        // Check for warnings
        if (sectionWarnings.length > 0) {
            results.warnings += sectionWarnings.length;
            sectionWarnings.forEach((warning) => {
                console.log(`  ⚠️  ${warning}`);
            });
        }

        // Validate HTML blocks
        const { errors: htmlErrors, warnings: htmlWarnings } = validateHTMLBlocks(content);
        if (htmlErrors.length > 0) {
            results.failed++;
            htmlErrors.forEach((issue) => {
                results.errors.push({ file: relativePath, error: issue });
                console.log(`  ❌ ${issue}`);
            });
        }

        if (htmlWarnings.length > 0) {
            results.warnings += htmlWarnings.length;
            htmlWarnings.forEach((issue) => {
                console.log(`  ⚠️  ${issue}`);
            });
        }

        // Validate modifier table
        const modifierIssues = validateModifierTable(content);
        if (modifierIssues.length > 0) {
            results.warnings += modifierIssues.length;
            modifierIssues.forEach((issue) => {
                console.log(`  ⚠️  ${issue}`);
            });
        }

        if (htmlErrors.length > 0) {
            return;
        }

        results.passed++;
        console.log(`  ✅ Valid`);
    } catch (err) {
        results.failed++;
        const errorMsg = `Exception: ${err.message}`;
        results.errors.push({ file: relativePath, error: errorMsg });
        console.log(`  ❌ ${errorMsg}`);
    }
}

/**
 * Main validation function
 */
function validateAllDocs() {
    console.log('📋 Component Documentation Validator\n');
    console.log('Loading schema...');

    // Load schema
    const schema = JSON.parse(fs.readFileSync(SCHEMA_PATH, 'utf-8'));
    console.log(`✅ Schema loaded: ${schema.title}\n`);

    // Find all markdown files
    const files = fs
        .readdirSync(DOCS_DIR)
        .filter((f) => f.endsWith('.md') && f !== 'README.md')
        .map((f) => path.join(DOCS_DIR, f))
        .sort();

    console.log(`Found ${files.length} component documentation files\n`);
    console.log('='.repeat(60));

    // Validate each file
    files.forEach((file) => validateFile(file, schema));

    // Print summary
    console.log('\n' + '='.repeat(60));
    console.log('\n📊 Validation Summary\n');
    console.log(`Total files:    ${results.total}`);
    console.log(`✅ Passed:      ${results.passed}`);
    console.log(`❌ Failed:      ${results.failed}`);
    console.log(`⚠️  Warnings:    ${results.warnings}`);
    console.log('');

    if (results.failed > 0) {
        console.log('❌ Validation failed!\n');
        console.log('Errors by file:');
        const errorsByFile = {};
        results.errors.forEach(({ file, error }) => {
            if (!errorsByFile[file]) errorsByFile[file] = [];
            errorsByFile[file].push(error);
        });

        Object.entries(errorsByFile).forEach(([file, errors]) => {
            console.log(`\n  ${file}:`);
            errors.forEach((err) => console.log(`    - ${err}`));
        });

        process.exit(1);
    } else {
        console.log('✅ All documentation files are valid!\n');
        if (results.warnings > 0) {
            console.log(`⚠️  ${results.warnings} warnings found (non-blocking)\n`);
        }
        process.exit(0);
    }
}

// Run validation
if (import.meta.url === `file://${process.argv[1]}`) {
    validateAllDocs();
}

export { SCHEMA_PATH, validateFile, validateHTMLBlocks, parseFrontmatter, validateFrontmatter };
