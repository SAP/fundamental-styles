#!/usr/bin/env node
/**
 * Update component-catalog.json descriptions from component-guidance.json
 *
 * This script enhances generic component descriptions in the catalog
 * by using the detailed descriptions from component-guidance.json
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const DOCS_PATH = resolve(process.cwd(), 'docs');

function loadJson<T>(filename: string): T {
    return JSON.parse(readFileSync(resolve(DOCS_PATH, filename), 'utf-8'));
}

function saveJson<T>(filename: string, data: T): void {
    writeFileSync(
        resolve(DOCS_PATH, filename),
        JSON.stringify(data, null, 2) + '\n',
        'utf-8'
    );
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

async function main() {
    console.log('🔧 Updating component descriptions from guidance...\n');

    // Load data
    const catalog: any = loadJson('component-catalog.json');
    const guidance: any = loadJson('component-guidance.json');

    let updatedCount = 0;
    let totalComponents = 0;

    // Update each package
    for (const [pkgName, pkg] of Object.entries(catalog.packages as Record<string, any>)) {
        for (const component of pkg.components) {
            totalComponents++;

            // Check if component has generic description
            if (hasGenericDescription(component.description, component.name)) {
                // Look for guidance
                const guidanceData = guidance.components[component.id];

                if (guidanceData?.description && guidanceData.description.length > 30) {
                    const oldDesc = component.description;
                    component.description = guidanceData.description;
                    updatedCount++;

                    console.log(`✅ ${component.id}`);
                    console.log(`   OLD: "${oldDesc}"`);
                    console.log(`   NEW: "${component.description.substring(0, 100)}${component.description.length > 100 ? '...' : ''}"`);
                    console.log();
                } else {
                    console.log(`⚠️  ${component.id}: No guidance description available`);
                }
            }
        }
    }

    // Save updated catalog
    if (updatedCount > 0) {
        saveJson('component-catalog.json', catalog);
        console.log(`\n✨ Updated ${updatedCount} of ${totalComponents} component descriptions`);
        console.log(`📝 Changes saved to docs/component-catalog.json\n`);
    } else {
        console.log('\n✅ All component descriptions are already good!\n');
    }
}

main().catch((error) => {
    console.error('❌ Error:', error);
    process.exit(1);
});
