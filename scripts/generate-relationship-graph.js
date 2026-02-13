#!/usr/bin/env node

/**
 * Component Relationship Graph Generator
 *
 * Analyzes component dependencies and relationships to create a visual graph.
 * Generates:
 * - Component dependency tree
 * - "Uses" relationships (which components use which)
 * - "Similar to" relationships
 * - Visual diagram in mermaid format
 * - JSON data for programmatic use
 *
 * Usage: node scripts/generate-relationship-graph.js [options]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';
import globPkg from 'glob';

const globAsync = promisify(globPkg.glob);

// ES module equivalents of __dirname and __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  stylesDir: path.join(__dirname, '../packages/styles/src'),
  catalogFile: path.join(__dirname, '../docs/component-catalog.json'),
  outputDir: path.join(__dirname, '../docs'),
  graphFile: path.join(__dirname, '../docs/component-relationships.json'),
  mermaidFile: path.join(__dirname, '../docs/component-graph.md'),
  verbose: process.argv.includes('--verbose'),
};

// Logging utility
const log = {
  info: (msg) => console.log(`ℹ️  ${msg}`),
  success: (msg) => console.log(`✅ ${msg}`),
  warn: (msg) => console.warn(`⚠️  ${msg}`),
  error: (msg) => console.error(`❌ ${msg}`),
  verbose: (msg) => CONFIG.verbose && console.log(`   ${msg}`),
};

/**
 * Load component catalog
 */
function loadCatalog() {
  if (!fs.existsSync(CONFIG.catalogFile)) {
    log.warn('Component catalog not found. Run generate-ai-metadata.js first.');
    return null;
  }

  const catalog = JSON.parse(fs.readFileSync(CONFIG.catalogFile, 'utf8'));
  return catalog.packages['fundamental-styles']?.components || [];
}

/**
 * Parse SCSS file to find dependencies
 */
function findScssImports(componentId) {
  const scssPath = path.join(CONFIG.stylesDir, `${componentId}.scss`);

  if (!fs.existsSync(scssPath)) {
    return [];
  }

  const content = fs.readFileSync(scssPath, 'utf8');
  const imports = [];

  // Find @import statements
  const importRegex = /@import\s+['"]([^'"]+)['"]/g;
  let match;

  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];

    // Extract component name from import path
    // e.g., "./button" or "../button" or "button"
    const componentMatch = importPath.match(/([a-z-]+)(?:\.scss)?$/);
    if (componentMatch) {
      const component = componentMatch[1];
      // Skip private files and utilities
      if (!component.startsWith('_') && component !== 'fundamental-styles') {
        imports.push(component);
      }
    }
  }

  log.verbose(`Found ${imports.length} imports in ${componentId}`);
  return imports;
}

/**
 * Find components that use the same CSS variables
 */
function findSharedVariables(components) {
  const variableMap = new Map(); // variable -> [components using it]

  for (const comp of components) {
    if (!comp.variables || comp.variables.length === 0) continue;

    for (const variable of comp.variables) {
      if (!variableMap.has(variable)) {
        variableMap.set(variable, []);
      }
      variableMap.get(variable).push(comp.id);
    }
  }

  // Build relationships based on shared variables
  const relationships = [];

  for (const [variable, componentIds] of variableMap.entries()) {
    if (componentIds.length > 1) {
      // These components share styling through variables
      for (let i = 0; i < componentIds.length; i++) {
        for (let j = i + 1; j < componentIds.length; j++) {
          relationships.push({
            from: componentIds[i],
            to: componentIds[j],
            type: 'shares-styling',
            sharedVariables: [variable],
          });
        }
      }
    }
  }

  log.verbose(`Found ${relationships.length} styling relationships`);
  return relationships;
}

/**
 * Analyze component categories for similarity
 */
function findSimilarComponents(components) {
  const categoryMap = new Map(); // category -> [components]

  for (const comp of components) {
    const key = `${comp.category}:${comp.subcategory || 'none'}`;
    if (!categoryMap.has(key)) {
      categoryMap.set(key, []);
    }
    categoryMap.get(key).push(comp.id);
  }

  const relationships = [];

  for (const [category, componentIds] of categoryMap.entries()) {
    if (componentIds.length > 1) {
      // These components are similar (same category)
      for (let i = 0; i < componentIds.length; i++) {
        for (let j = i + 1; j < componentIds.length; j++) {
          relationships.push({
            from: componentIds[i],
            to: componentIds[j],
            type: 'similar',
            reason: category,
          });
        }
      }
    }
  }

  log.verbose(`Found ${relationships.length} similarity relationships`);
  return relationships;
}

/**
 * Extract relationships from catalog metadata
 */
function extractCatalogRelationships(components) {
  const relationships = [];

  for (const comp of components) {
    // Related components
    if (comp.relatedComponents && comp.relatedComponents.length > 0) {
      for (const relatedId of comp.relatedComponents) {
        relationships.push({
          from: comp.id,
          to: relatedId,
          type: 'related',
          bidirectional: true,
        });
      }
    }

    // Dependencies
    if (comp.dependencies && comp.dependencies.length > 0) {
      for (const depId of comp.dependencies) {
        relationships.push({
          from: comp.id,
          to: depId,
          type: 'depends-on',
          bidirectional: false,
        });
      }
    }
  }

  log.verbose(`Found ${relationships.length} catalog relationships`);
  return relationships;
}

/**
 * Build complete relationship graph
 */
async function buildRelationshipGraph(components) {
  log.info('Building relationship graph...');

  const relationships = [];
  const componentMap = new Map(components.map(c => [c.id, c]));

  // 1. Find SCSS imports (direct dependencies)
  for (const comp of components) {
    const imports = findScssImports(comp.id);
    for (const importedId of imports) {
      if (componentMap.has(importedId)) {
        relationships.push({
          from: comp.id,
          to: importedId,
          type: 'imports',
          bidirectional: false,
        });
      }
    }
  }

  // 2. Extract relationships from catalog
  relationships.push(...extractCatalogRelationships(components));

  // 3. Find components with shared variables
  relationships.push(...findSharedVariables(components));

  // 4. Find similar components by category
  relationships.push(...findSimilarComponents(components));

  // Deduplicate relationships
  const uniqueRelationships = deduplicateRelationships(relationships);

  log.success(`Built graph with ${uniqueRelationships.length} relationships`);

  return {
    components: components.map(c => ({
      id: c.id,
      name: c.name,
      category: c.category,
      subcategory: c.subcategory,
    })),
    relationships: uniqueRelationships,
  };
}

/**
 * Deduplicate relationships
 */
function deduplicateRelationships(relationships) {
  const seen = new Set();
  const unique = [];

  for (const rel of relationships) {
    // Create a unique key for this relationship
    const key = rel.bidirectional
      ? [rel.from, rel.to].sort().join('::') + '::' + rel.type
      : `${rel.from}::${rel.to}::${rel.type}`;

    if (!seen.has(key)) {
      seen.add(key);
      unique.push(rel);
    }
  }

  return unique;
}

/**
 * Generate Mermaid diagram
 */
function generateMermaidDiagram(graph) {
  log.info('Generating Mermaid diagram...');

  const lines = [
    '# Component Relationship Graph',
    '',
    'This diagram shows relationships between Fundamental Styles components.',
    '',
    '## Legend',
    '- **Solid arrows** (-->): Direct dependencies (imports)',
    '- **Dashed arrows** (-.->): Related components',
    '- **Thick arrows** (==>): Similar components (same category)',
    '',
    '## Full Graph',
    '',
    '```mermaid',
    'graph TB',
  ];

  // Group components by category
  const categoryMap = new Map();
  for (const comp of graph.components) {
    const category = comp.category || 'uncategorized';
    if (!categoryMap.has(category)) {
      categoryMap.set(category, []);
    }
    categoryMap.get(category).push(comp);
  }

  // Add nodes with grouping
  for (const [category, comps] of categoryMap.entries()) {
    lines.push(`  subgraph cat_${category.replace(/\s+/g, '_')}`);
    for (const comp of comps) {
      lines.push(`    ${comp.id}["${comp.name}"]`);
    }
    lines.push('  end');
  }

  lines.push('');

  // Add relationships
  for (const rel of graph.relationships) {
    let arrow;
    switch (rel.type) {
      case 'imports':
      case 'depends-on':
        arrow = '-->';
        break;
      case 'related':
        arrow = '-.->';
        break;
      case 'similar':
      case 'shares-styling':
        arrow = '==>';
        break;
      default:
        arrow = '---';
    }

    lines.push(`  ${rel.from} ${arrow} ${rel.to}`);
  }

  lines.push('```');
  lines.push('');

  // Add statistics
  lines.push('## Statistics');
  lines.push('');
  lines.push(`- **Total Components**: ${graph.components.length}`);
  lines.push(`- **Total Relationships**: ${graph.relationships.length}`);

  const typeCount = {};
  for (const rel of graph.relationships) {
    typeCount[rel.type] = (typeCount[rel.type] || 0) + 1;
  }

  lines.push('- **Relationships by Type**:');
  for (const [type, count] of Object.entries(typeCount)) {
    lines.push(`  - ${type}: ${count}`);
  }

  lines.push('');
  lines.push('## Category Distribution');
  lines.push('');
  for (const [category, comps] of categoryMap.entries()) {
    lines.push(`- **${category}**: ${comps.length} components`);
  }

  lines.push('');
  lines.push('---');
  lines.push(`**Generated**: ${new Date().toISOString().split('T')[0]}`);
  lines.push('**Script**: `scripts/generate-relationship-graph.js`');
  lines.push(''); // Ensure trailing newline

  return lines.join('\n');
}

/**
 * Generate dependency tree for a specific component
 */
function generateDependencyTree(componentId, graph, visited = new Set()) {
  if (visited.has(componentId)) {
    return null; // Circular dependency
  }

  visited.add(componentId);

  const component = graph.components.find(c => c.id === componentId);
  if (!component) return null;

  const dependencies = graph.relationships
    .filter(r => r.from === componentId && (r.type === 'imports' || r.type === 'depends-on'))
    .map(r => r.to);

  const tree = {
    id: componentId,
    name: component.name,
    dependencies: dependencies.map(depId =>
      generateDependencyTree(depId, graph, new Set(visited))
    ).filter(Boolean),
  };

  return tree;
}

/**
 * Find most connected components
 */
function findHubComponents(graph) {
  const connectionCount = new Map();

  for (const comp of graph.components) {
    connectionCount.set(comp.id, 0);
  }

  for (const rel of graph.relationships) {
    connectionCount.set(rel.from, (connectionCount.get(rel.from) || 0) + 1);
    connectionCount.set(rel.to, (connectionCount.get(rel.to) || 0) + 1);
  }

  const sorted = Array.from(connectionCount.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  return sorted.map(([id, count]) => ({
    id,
    name: graph.components.find(c => c.id === id)?.name,
    connections: count,
  }));
}

/**
 * Save relationship graph
 */
function saveRelationshipGraph(graph) {
  log.info('Saving relationship graph...');

  // Ensure output directory exists
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  }

  // Add metadata
  const enrichedGraph = {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    version: '0.41.0',
    generatedBy: 'scripts/generate-relationship-graph.js',
    ...graph,
    analytics: {
      totalComponents: graph.components.length,
      totalRelationships: graph.relationships.length,
      hubComponents: findHubComponents(graph),
      relationshipTypes: graph.relationships.reduce((acc, rel) => {
        acc[rel.type] = (acc[rel.type] || 0) + 1;
        return acc;
      }, {}),
    },
  };

  // Save JSON
  fs.writeFileSync(
    CONFIG.graphFile,
    JSON.stringify(enrichedGraph, null, 2),
    'utf8'
  );

  log.success(`Relationship graph saved: ${CONFIG.graphFile}`);

  // Save Mermaid diagram
  const mermaid = generateMermaidDiagram(graph);
  fs.writeFileSync(CONFIG.mermaidFile, mermaid, 'utf8');

  log.success(`Mermaid diagram saved: ${CONFIG.mermaidFile}`);

  return enrichedGraph;
}

/**
 * Generate statistics
 */
function generateStats(graph) {
  const stats = {
    totalComponents: graph.components.length,
    totalRelationships: graph.relationships.length,
    avgConnectionsPerComponent: (graph.relationships.length * 2 / graph.components.length).toFixed(2),
    hubComponents: findHubComponents(graph).length,
  };

  log.info('\n📊 Statistics:');
  log.info(`  Total components: ${stats.totalComponents}`);
  log.info(`  Total relationships: ${stats.totalRelationships}`);
  log.info(`  Avg connections per component: ${stats.avgConnectionsPerComponent}`);
  log.info(`  Hub components (top 10): ${stats.hubComponents}`);

  const hubComponents = findHubComponents(graph);
  if (hubComponents.length > 0) {
    log.info('\n  Most connected components:');
    for (const hub of hubComponents.slice(0, 5)) {
      log.info(`    - ${hub.name} (${hub.id}): ${hub.connections} connections`);
    }
  }

  return stats;
}

/**
 * Main execution
 */
async function main() {
  console.log('🔗 Fundamental Styles - Component Relationship Graph Generator\n');

  try {
    // Step 1: Load catalog
    const components = loadCatalog();
    if (!components || components.length === 0) {
      log.error('No components found in catalog. Run generate-ai-metadata.js first.');
      process.exit(1);
    }

    log.success(`Loaded ${components.length} components from catalog`);

    // Step 2: Build relationship graph
    const graph = await buildRelationshipGraph(components);

    // Step 3: Save graph
    const enrichedGraph = saveRelationshipGraph(graph);

    // Step 4: Generate stats
    const stats = generateStats(graph);

    console.log('\n✅ Relationship graph generation complete!');
    console.log(`\n📊 Generated:`);
    console.log(`  - Relationship graph: ${CONFIG.graphFile}`);
    console.log(`  - Mermaid diagram: ${CONFIG.mermaidFile}`);
    console.log(`\n💡 Files ready for AI agent consumption`);
    console.log(`  See docs/DEVELOPER_WORKFLOW.md for usage guidelines`);

  } catch (error) {
    log.error(`Failed to generate relationship graph: ${error.message}`);
    if (CONFIG.verbose) {
      console.error(error);
    }
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

// ES module export
export {
  loadCatalog,
  findScssImports,
  buildRelationshipGraph,
  generateMermaidDiagram,
};
