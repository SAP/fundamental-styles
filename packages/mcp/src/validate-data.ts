#!/usr/bin/env node
/**
 * Data Quality Validator for fundamental-styles MCP Server
 *
 * This script analyzes the data files and reports quality issues:
 * - Generic component descriptions
 * - Missing HTML examples
 * - Tokens without purpose documentation
 * - Components with empty relatedComponents
 */

import { readFileSync } from 'fs';
import { resolve } from 'path';

interface ValidationIssue {
    type: 'description' | 'examples' | 'token' | 'relationships';
    severity: 'error' | 'warning' | 'info';
    component?: string;
    message: string;
    suggestion?: string;
}

function loadJson<T>(filePath: string): T {
    const fullPath = resolve(__dirname, '..', '..', '..', '..', 'docs', filePath);
    return JSON.parse(readFileSync(fullPath, 'utf-8'));
}

function hasGenericDescription(description: string, componentName: string): boolean {
    const desc = description.toLowerCase();
    const name = componentName.toLowerCase();

    return (
        desc.includes('component component') ||
        desc === `${name} component` ||
        desc === name ||
        desc.length < 20 ||
        desc.match(/^[a-z\s-]+ component$/i) !== null
    );
}

async function validateData(): Promise<ValidationIssue[]> {
    const issues: ValidationIssue[] = [];

    console.log('🔍 Loading data files...\n');

    // Load data
    const catalog: any = loadJson('component-catalog.json');
    const htmlExamples: any = loadJson('html-examples.json');
    const designTokens: any = loadJson('design-tokens.json');
    const relationships: any = loadJson('component-relationships.json');

    const components: any[] = [];
    for (const pkg of Object.values(catalog.packages as Record<string, any>)) {
        components.push(...pkg.components);
    }

    console.log(`✅ Loaded ${components.length} components\n`);

    // 1. Check component descriptions
    console.log('📝 Checking component descriptions...');
    let genericCount = 0;
    for (const comp of components) {
        if (hasGenericDescription(comp.description, comp.name)) {
            genericCount++;
            issues.push({
                type: 'description',
                severity: 'warning',
                component: comp.id,
                message: `Generic description: "${comp.description}"`,
                suggestion: 'Add a descriptive explanation of what the component does and when to use it.'
            });
        }
    }
    console.log(`   Found ${genericCount} generic descriptions (${Math.round(genericCount / components.length * 100)}%)\n`);

    // 2. Check for HTML examples
    console.log('📄 Checking HTML examples...');
    const examplesByComponent = new Map<string, number>();
    for (const example of htmlExamples.examples) {
        for (const compId of example.components) {
            examplesByComponent.set(compId, (examplesByComponent.get(compId) || 0) + 1);
        }
    }

    let missingExamples = 0;
    for (const comp of components) {
        if (!examplesByComponent.has(comp.id)) {
            missingExamples++;
            issues.push({
                type: 'examples',
                severity: 'info',
                component: comp.id,
                message: 'No curated HTML examples',
                suggestion: `Check Storybook for examples: ${comp.storybookUrl}`
            });
        }
    }
    console.log(`   ${components.length - missingExamples} components have examples, ${missingExamples} missing (${Math.round(missingExamples / components.length * 100)}%)\n`);

    // 3. Check design tokens
    console.log('🎨 Checking design tokens...');
    const tokens: any[] = [];
    const extractTokens = (obj: Record<string, any>) => {
        for (const value of Object.values(obj)) {
            if (value?.tokens) {
                tokens.push(...value.tokens);
            }
            if (value && typeof value === 'object' && !Array.isArray(value) && !value.tokens) {
                extractTokens(value);
            }
        }
    };
    extractTokens(designTokens);

    let noPurpose = 0;
    let noUsage = 0;
    for (const token of tokens) {
        if (!token.purpose || token.purpose.trim() === '') {
            noPurpose++;
        }
        if (!token.cssUsage || token.cssUsage.trim() === '') {
            noUsage++;
        }
    }

    console.log(`   Total tokens: ${tokens.length}`);
    console.log(`   Tokens without purpose: ${noPurpose} (${Math.round(noPurpose / tokens.length * 100)}%)`);
    console.log(`   Tokens without CSS usage: ${noUsage} (${Math.round(noUsage / tokens.length * 100)}%)\n`);

    if (noPurpose > tokens.length * 0.5) {
        issues.push({
            type: 'token',
            severity: 'error',
            message: `${noPurpose} tokens (${Math.round(noPurpose / tokens.length * 100)}%) lack purpose documentation`,
            suggestion: 'Add purpose field to tokens explaining what they control and when to use them.'
        });
    }

    // 4. Check component relationships
    console.log('🔗 Checking component relationships...');
    let emptyRelated = 0;
    for (const comp of components) {
        if (!comp.relatedComponents || comp.relatedComponents.length === 0) {
            emptyRelated++;
            if (comp.category) {
                // Only report for non-utility components
                issues.push({
                    type: 'relationships',
                    severity: 'info',
                    component: comp.id,
                    message: 'No related components documented',
                    suggestion: 'Add similar or complementary components to help users discover alternatives.'
                });
            }
        }
    }
    console.log(`   ${emptyRelated} components have no related components (${Math.round(emptyRelated / components.length * 100)}%)\n`);

    return issues;
}

async function main() {
    console.log('═══════════════════════════════════════════════════════════');
    console.log('  fundamental-styles Data Quality Validator');
    console.log('═══════════════════════════════════════════════════════════\n');

    try {
        const issues = await validateData();

        // Summary by type
        console.log('\n📊 Summary by Issue Type:');
        console.log('─────────────────────────────────────────────────────────────');

        const byType = {
            description: issues.filter(i => i.type === 'description').length,
            examples: issues.filter(i => i.type === 'examples').length,
            token: issues.filter(i => i.type === 'token').length,
            relationships: issues.filter(i => i.type === 'relationships').length
        };

        console.log(`  Descriptions:    ${byType.description} issues`);
        console.log(`  HTML Examples:   ${byType.examples} issues`);
        console.log(`  Design Tokens:   ${byType.token} issues`);
        console.log(`  Relationships:   ${byType.relationships} issues`);
        console.log(`  ${'─'.repeat(59)}`);
        console.log(`  Total:           ${issues.length} issues\n`);

        // Summary by severity
        const bySeverity = {
            error: issues.filter(i => i.severity === 'error').length,
            warning: issues.filter(i => i.severity === 'warning').length,
            info: issues.filter(i => i.severity === 'info').length
        };

        console.log('📊 Summary by Severity:');
        console.log('─────────────────────────────────────────────────────────────');
        console.log(`  🔴 Errors:    ${bySeverity.error}`);
        console.log(`  🟡 Warnings:  ${bySeverity.warning}`);
        console.log(`  🔵 Info:      ${bySeverity.info}\n`);

        // Print detailed issues if requested
        if (process.argv.includes('--detailed')) {
            console.log('\n📋 Detailed Issues:\n');
            for (const issue of issues.slice(0, 50)) {
                const icon = issue.severity === 'error' ? '🔴' : issue.severity === 'warning' ? '🟡' : '🔵';
                console.log(`${icon} [${issue.type}] ${issue.component ? `${issue.component}: ` : ''}${issue.message}`);
                if (issue.suggestion) {
                    console.log(`   💡 ${issue.suggestion}`);
                }
                console.log();
            }

            if (issues.length > 50) {
                console.log(`... and ${issues.length - 50} more issues\n`);
            }
        }

        console.log('✨ Validation complete!\n');
        console.log('💡 Run with --detailed flag to see specific issues\n');

        // Exit with error code if there are errors
        process.exit(bySeverity.error > 0 ? 1 : 0);

    } catch (error) {
        console.error('❌ Validation failed:', error);
        process.exit(1);
    }
}

main();
