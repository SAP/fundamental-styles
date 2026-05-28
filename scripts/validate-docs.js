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
const DOCS_DIR = path.join(__dirname, '..', 'docs', 'components');
const SCHEMA_PATH = path.join(__dirname, '..', 'docs', 'schemas', 'component-frontmatter.schema.json');

// Required sections in documentation
const REQUIRED_SECTIONS = [
    '# ',           // Title
    '## Installation',
    '## Basic Usage',
    '## Accessibility'
];

// Optional but recommended sections
const RECOMMENDED_SECTIONS = [
    '## Modifiers',
    '## States',
    '## Examples'
];

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
            errors: validate.errors.map(err => ({
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
function checkRequiredSections(content, filePath) {
    const issues = [];
    const warnings = [];

    // Check required sections
    for (const section of REQUIRED_SECTIONS) {
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
function validateHTMLBlocks(content, filePath) {
    const issues = [];

    // Find all HTML code blocks
    const htmlBlockRegex = /```html\s*([\s\S]*?)```/g;
    let match;
    let blockIndex = 0;

    while ((match = htmlBlockRegex.exec(content)) !== null) {
        blockIndex++;
        const html = match[1];

        // Check for common issues
        if (html.includes('fddocs-')) {
            issues.push(`HTML block ${blockIndex}: Contains 'fddocs-' classes (should be cleaned)`);
        }

        if (html.includes('style=')) {
            issues.push(`HTML block ${blockIndex}: Contains inline styles (should be removed)`);
        }

        if (html.includes('data-testid') || html.includes('data-test')) {
            issues.push(`HTML block ${blockIndex}: Contains test attributes (should be removed)`);
        }

        if (html.includes('<br>') || html.includes('<br/>')) {
            issues.push(`HTML block ${blockIndex}: Contains <br> tags (should be removed)`);
        }

        // Check for proper indentation (should be 4 spaces)
        const lines = html.split('\n').filter(l => l.trim());
        if (lines.length > 0) {
            const firstLine = lines[0];
            if (firstLine.startsWith('  ') && !firstLine.startsWith('    ')) {
                issues.push(`HTML block ${blockIndex}: Uses 2-space indentation (should be 4 spaces)`);
            }
        }
    }

    return issues;
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
    const tableRows = modifierSection.split('\n').filter(line => line.startsWith('|') && !line.includes('Class'));
    for (const row of tableRows) {
        const cells = row.split('|').map(c => c.trim()).filter(c => c);
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
            schemaErrors.forEach(err => {
                const errorMsg = `Frontmatter validation: ${err.path} ${err.message}`;
                results.errors.push({ file: relativePath, error: errorMsg });
                console.log(`  ❌ ${errorMsg}`);
            });
            return;
        }

        // Check required sections
        const { issues: sectionIssues, warnings: sectionWarnings } = checkRequiredSections(content, filePath);
        if (sectionIssues.length > 0) {
            results.failed++;
            sectionIssues.forEach(issue => {
                results.errors.push({ file: relativePath, error: issue });
                console.log(`  ❌ ${issue}`);
            });
            return;
        }

        // Check for warnings
        if (sectionWarnings.length > 0) {
            results.warnings += sectionWarnings.length;
            sectionWarnings.forEach(warning => {
                console.log(`  ⚠️  ${warning}`);
            });
        }

        // Validate HTML blocks
        const htmlIssues = validateHTMLBlocks(content, filePath);
        if (htmlIssues.length > 0) {
            results.warnings += htmlIssues.length;
            htmlIssues.forEach(issue => {
                console.log(`  ⚠️  ${issue}`);
            });
        }

        // Validate modifier table
        const modifierIssues = validateModifierTable(content);
        if (modifierIssues.length > 0) {
            results.warnings += modifierIssues.length;
            modifierIssues.forEach(issue => {
                console.log(`  ⚠️  ${issue}`);
            });
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
    const files = fs.readdirSync(DOCS_DIR)
        .filter(f => f.endsWith('.md') && f !== 'README.md')
        .map(f => path.join(DOCS_DIR, f))
        .sort();

    console.log(`Found ${files.length} component documentation files\n`);
    console.log('='.repeat(60));

    // Validate each file
    files.forEach(file => validateFile(file, schema));

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
            errors.forEach(err => console.log(`    - ${err}`));
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

export { validateFile, parseFrontmatter, validateFrontmatter };
