#!/usr/bin/env node

/**
 * Merge Accessibility Metadata
 *
 * Merges accessibility.json into component-catalog.json
 *
 * Usage: node scripts/merge-accessibility.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONFIG = {
  catalogFile: path.join(__dirname, '../docs/component-catalog.json'),
  accessibilityFile: path.join(__dirname, '../docs/accessibility.json'),
};

const log = {
  info: (msg) => console.log(`ℹ️  ${msg}`),
  success: (msg) => console.log(`✅ ${msg}`),
  warn: (msg) => console.warn(`⚠️  ${msg}`),
  error: (msg) => console.error(`❌ ${msg}`),
};

async function main() {
  console.log('🔧 Merging accessibility metadata into component catalog...\n');

  // Load files
  const catalog = JSON.parse(fs.readFileSync(CONFIG.catalogFile, 'utf8'));
  const accessibilityData = JSON.parse(fs.readFileSync(CONFIG.accessibilityFile, 'utf8'));

  const components = catalog.packages['fundamental-styles'].components;
  const accessibility = accessibilityData.components;

  let merged = 0;
  let skipped = 0;
  let notFound = 0;

  // Create a map for faster lookup (handle various ID formats)
  const accessibilityMap = new Map();
  for (const [key, value] of Object.entries(accessibility)) {
    accessibilityMap.set(key, value);
    // Also map with fd- prefix removed
    accessibilityMap.set(key.replace(/^fd-/, ''), value);
  }

  // Merge accessibility data
  for (const comp of components) {
    // Try different ID formats
    const lookupIds = [
      comp.id,
      comp.id.replace(/^fd-/, ''),
      comp.name?.toLowerCase(),
    ].filter(Boolean);

    let accessData = null;
    for (const id of lookupIds) {
      if (accessibilityMap.has(id)) {
        accessData = accessibilityMap.get(id);
        break;
      }
    }

    if (accessData) {
      // Only update if component doesn't already have accessibility data
      if (!comp.accessibility || Object.keys(comp.accessibility).length === 0) {
        comp.accessibility = {
          roles: accessData.roles || [],
          requiredAttributes: (accessData.requiredAttrs || []).map(a => ({
            name: a.name,
            purpose: a.purpose,
            when: a.when
          })),
          keyboardSupport: accessData.keyboardSupport || [],
          notes: accessData.notes || []
        };

        merged++;
        log.info(`Merged: ${comp.id}`);
      } else {
        skipped++;
      }
    } else {
      notFound++;
    }
  }

  // Write back
  fs.writeFileSync(CONFIG.catalogFile, JSON.stringify(catalog, null, 2) + '\n', 'utf8');

  console.log('\n📊 Summary:');
  log.success(`Merged: ${merged} components`);
  log.info(`Already had accessibility: ${skipped} components`);
  log.warn(`No accessibility data found: ${notFound} components`);

  console.log('\n✅ Accessibility metadata merged into component catalog!');
}

main().catch(err => {
  log.error(`Failed: ${err.message}`);
  process.exit(1);
});
