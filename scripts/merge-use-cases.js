#!/usr/bin/env node

/**
 * Merge Use Cases Script
 *
 * Merges component-use-cases.json into component-catalog.json
 *
 * Usage: node scripts/merge-use-cases.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONFIG = {
  catalogFile: path.join(__dirname, '../docs/component-catalog.json'),
  useCasesFile: path.join(__dirname, '../docs/component-use-cases.json'),
};

const log = {
  info: (msg) => console.log(`ℹ️  ${msg}`),
  success: (msg) => console.log(`✅ ${msg}`),
  warn: (msg) => console.warn(`⚠️  ${msg}`),
  error: (msg) => console.error(`❌ ${msg}`),
};

async function main() {
  console.log('🔧 Merging use cases into component catalog...\n');

  // Load files
  const catalog = JSON.parse(fs.readFileSync(CONFIG.catalogFile, 'utf8'));
  const useCasesData = JSON.parse(fs.readFileSync(CONFIG.useCasesFile, 'utf8'));

  const components = catalog.packages['fundamental-styles'].components;
  const useCases = useCasesData.useCases;

  let merged = 0;
  let skipped = 0;
  let alreadyHad = 0;

  // Merge use cases
  for (const comp of components) {
    const useCase = useCases[comp.id];

    if (useCase) {
      // Only update if component doesn't already have use cases OR they're empty
      if (!comp.useCases || comp.useCases.length === 0) {
        comp.useCases = useCase.useCases || [];
        comp.avoidWhen = useCase.avoidWhen || [];

        // Also add related components if available
        if (useCase.relatedComponents && useCase.relatedComponents.length > 0) {
          comp.relatedComponents = useCase.relatedComponents;
        }

        merged++;
        log.info(`Merged: ${comp.id}`);
      } else {
        alreadyHad++;
      }
    } else {
      skipped++;
    }
  }

  // Write back
  fs.writeFileSync(CONFIG.catalogFile, JSON.stringify(catalog, null, 2) + '\n', 'utf8');

  console.log('\n📊 Summary:');
  log.success(`Merged: ${merged} components`);
  log.info(`Already had use cases: ${alreadyHad} components`);
  log.warn(`No use cases available: ${skipped} components`);

  console.log('\n✅ Use cases merged into component catalog!');
}

main().catch(err => {
  log.error(`Failed: ${err.message}`);
  process.exit(1);
});
