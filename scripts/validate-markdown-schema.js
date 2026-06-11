#!/usr/bin/env node

/**
 * Validate markdown frontmatter against JSON schema
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import glob from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SCHEMA_PATH = path.join(__dirname, '..', 'docs', 'schemas', 'component-markdown.schema.json');
const COMPONENTS_DIR = path.join(__dirname, '..', 'docs', 'components');

/**
 * Simple JSON Schema validator (subset of features)
 */
class SimpleValidator {
    constructor(schema) {
        this.schema = schema;
        this.errors = [];
    }

    validate(data) {
        this.errors = [];
        this.validateObject(data, this.schema, 'root');
        return this.errors.length === 0;
    }

    validateObject(data, schema, path) {
        // Check required fields
        if (schema.required) {
            schema.required.forEach(field => {
                if (!(field in data)) {
                    this.errors.push(`${path}: Missing required field "${field}"`);
                }
            });
        }

        // Check each property
        if (schema.properties) {
            Object.keys(data).forEach(key => {
                if (schema.properties[key]) {
                    this.validateProperty(data[key], schema.properties[key], `${path}.${key}`);
                } else if (schema.additionalProperties === false) {
                    this.errors.push(`${path}: Unexpected property "${key}"`);
                }
            });
        }
    }

    validateProperty(value, schema, path) {
        // Type check
        if (schema.type) {
            const actualType = Array.isArray(value) ? 'array' : typeof value;
            if (actualType !== schema.type) {
                this.errors.push(`${path}: Expected type "${schema.type}", got "${actualType}"`);
                return;
            }
        }

        // String validations
        if (schema.type === 'string') {
            if (schema.minLength && value.length < schema.minLength) {
                this.errors.push(`${path}: String too short (min: ${schema.minLength})`);
            }
            if (schema.pattern) {
                const regex = new RegExp(schema.pattern);
                if (!regex.test(value)) {
                    this.errors.push(`${path}: Does not match pattern "${schema.pattern}"`);
                }
            }
            if (schema.format === 'date-time') {
                try {
                    const date = new Date(value);
                    if (isNaN(date.getTime())) {
                        this.errors.push(`${path}: Invalid date-time format`);
                    }
                } catch (e) {
                    this.errors.push(`${path}: Invalid date-time format`);
                }
            }
        }

        // Array validations
        if (schema.type === 'array') {
            if (schema.items) {
                value.forEach((item, index) => {
                    this.validateProperty(item, schema.items, `${path}[${index}]`);
                });
            }
            if (schema.uniqueItems) {
                const seen = new Set();
                value.forEach((item, index) => {
                    const key = JSON.stringify(item);
                    if (seen.has(key)) {
                        this.errors.push(`${path}[${index}]: Duplicate item`);
                    }
                    seen.add(key);
                });
            }
        }

        // Enum check
        if (schema.enum) {
            if (!schema.enum.includes(value)) {
                this.errors.push(`${path}: Value "${value}" not in enum [${schema.enum.join(', ')}]`);
            }
        }
    }
}

/**
 * Extract frontmatter from markdown
 */
function extractFrontmatter(content) {
    const match = content.match(/^---\n([\s\S]+?)\n---/);
    if (!match) {
        return null;
    }

    const frontmatter = {};
    const lines = match[1].split('\n');

    for (const line of lines) {
        const colonIndex = line.indexOf(':');
        if (colonIndex > 0) {
            const key = line.substring(0, colonIndex).trim();
            let value = line.substring(colonIndex + 1).trim();

            // Parse JSON arrays/objects
            if (value.startsWith('[') || value.startsWith('{')) {
                try {
                    value = JSON.parse(value);
                } catch (e) {
                    // Keep as string if not valid JSON
                }
            }

            frontmatter[key] = value;
        }
    }

    return frontmatter;
}

/**
 * Validate all component markdown files
 */
function validateAllMarkdown() {
    console.log('📋 Validating Component Markdown Files\n');

    // Load schema
    const schema = JSON.parse(fs.readFileSync(SCHEMA_PATH, 'utf-8'));
    console.log(`✓ Loaded schema from ${path.basename(SCHEMA_PATH)}\n`);

    // Find all markdown files
    const mdFiles = glob.sync(`${COMPONENTS_DIR}/*.md`).filter(f => !f.endsWith('README.md'));
    console.log(`Found ${mdFiles.length} markdown files to validate\n`);

    let validCount = 0;
    let invalidCount = 0;
    const validator = new SimpleValidator(schema);

    mdFiles.forEach(file => {
        const basename = path.basename(file);
        const content = fs.readFileSync(file, 'utf-8');

        // Extract frontmatter
        const frontmatter = extractFrontmatter(content);

        if (!frontmatter) {
            console.log(`❌ ${basename}: No frontmatter found`);
            invalidCount++;
            return;
        }

        // Validate against schema
        if (validator.validate(frontmatter)) {
            validCount++;
        } else {
            console.log(`❌ ${basename}:`);
            validator.errors.forEach(err => {
                console.log(`   ${err}`);
            });
            invalidCount++;
        }
    });

    // Summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 Validation Summary');
    console.log('='.repeat(60));
    console.log(`Total Files: ${mdFiles.length}`);
    console.log(`Valid: ${validCount} ✓`);
    console.log(`Invalid: ${invalidCount} ✗`);
    console.log(`Success Rate: ${((validCount / mdFiles.length) * 100).toFixed(1)}%`);
    console.log('='.repeat(60) + '\n');

    if (invalidCount > 0) {
        console.log('❌ Validation failed');
        process.exit(1);
    } else {
        console.log('✅ All files valid!');
        process.exit(0);
    }
}

// Run validation
validateAllMarkdown();
