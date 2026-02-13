#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CATALOG_FILE = path.join(__dirname, '../docs/component-catalog.json');

function auditDocumentation() {
  const catalog = JSON.parse(fs.readFileSync(CATALOG_FILE, 'utf8'));
  const components = catalog.packages['fundamental-styles'].components;

  const stats = {
    total: components.length,
    missingUseCases: 0,
    missingAvoidWhen: 0,
    missingAccessibility: 0,
    missingRelated: 0,
    emptyDescriptions: 0,
  };

  const issues = [];

  for (const comp of components) {
    const compIssues = [];

    if (!comp.useCases || comp.useCases.length === 0) {
      stats.missingUseCases++;
      compIssues.push('Missing use cases');
    }

    if (!comp.avoidWhen || comp.avoidWhen.length === 0) {
      stats.missingAvoidWhen++;
      compIssues.push('Missing avoidWhen guidance');
    }

    if (!comp.accessibility || !comp.accessibility.role) {
      stats.missingAccessibility++;
      compIssues.push('Missing accessibility role');
    }

    if (!comp.relatedComponents || comp.relatedComponents.length === 0) {
      stats.missingRelated++;
      compIssues.push('Missing related components');
    }

    if (!comp.description || (comp.description.includes('component') && comp.description.length < 50)) {
      stats.emptyDescriptions++;
      compIssues.push('Generic/short description');
    }

    if (compIssues.length > 0) {
      issues.push({
        id: comp.id,
        name: comp.name,
        issues: compIssues,
      });
    }
  }

  console.log('📊 Documentation Completeness Audit\n');
  console.log(`Total Components: ${stats.total}\n`);
  console.log('Missing Fields:');
  console.log(`  Use Cases: ${stats.missingUseCases} (${((stats.missingUseCases / stats.total) * 100).toFixed(1)}%)`);
  console.log(`  AvoidWhen: ${stats.missingAvoidWhen} (${((stats.missingAvoidWhen / stats.total) * 100).toFixed(1)}%)`);
  console.log(`  Accessibility: ${stats.missingAccessibility} (${((stats.missingAccessibility / stats.total) * 100).toFixed(1)}%)`);
  console.log(`  Related Components: ${stats.missingRelated} (${((stats.missingRelated / stats.total) * 100).toFixed(1)}%)`);
  console.log(`  Poor Descriptions: ${stats.emptyDescriptions} (${((stats.emptyDescriptions / stats.total) * 100).toFixed(1)}%)\n`);

  console.log(`Components Needing Improvement: ${issues.length}\n`);

  if (issues.length > 0) {
    console.log('Top 10 Components to Improve:');
    issues.slice(0, 10).forEach((item, i) => {
      console.log(`\n${i + 1}. ${item.name} (${item.id})`);
      item.issues.forEach(issue => console.log(`   - ${issue}`));
    });
  }
}

auditDocumentation();
