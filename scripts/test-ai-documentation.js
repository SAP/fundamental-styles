#!/usr/bin/env node

/**
 * AI Documentation Tests
 *
 * Validates the output of AI documentation generation scripts:
 * - Component catalog structure and validity
 * - JSON schemas validity
 * - Component relationships validity
 * - Data consistency checks
 *
 * Usage: node scripts/test-ai-documentation.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Test configuration
const CATALOG_FILE = path.join(__dirname, '../docs/component-catalog.json');
const RELATIONSHIPS_FILE = path.join(__dirname, '../docs/component-relationships.json');
const SCHEMAS_DIR = path.join(__dirname, '../docs/schemas');

// Test results
let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const failures = [];

// Logging utilities
const log = {
  test: (msg) => console.log(`  ○ ${msg}`),
  pass: (msg) => {
    totalTests++;
    passedTests++;
    console.log(`  ✓ ${msg}`);
  },
  fail: (msg, details) => {
    totalTests++;
    failedTests++;
    console.log(`  ✗ ${msg}`);
    if (details) {
      console.log(`    ${details}`);
    }
    failures.push({ test: msg, details });
  },
  section: (msg) => console.log(`\n${msg}`),
  info: (msg) => console.log(`ℹ️  ${msg}`),
  success: (msg) => console.log(`✅ ${msg}`),
  error: (msg) => console.error(`❌ ${msg}`),
};

/**
 * Test: Component Catalog Exists
 */
function testCatalogExists() {
  log.section('📦 Component Catalog Tests');

  if (fs.existsSync(CATALOG_FILE)) {
    log.pass('Component catalog file exists');
  } else {
    log.fail('Component catalog file missing', `Expected: ${CATALOG_FILE}`);
    return null;
  }

  try {
    const catalog = JSON.parse(fs.readFileSync(CATALOG_FILE, 'utf8'));
    log.pass('Component catalog is valid JSON');
    return catalog;
  } catch (error) {
    log.fail('Component catalog is invalid JSON', error.message);
    return null;
  }
}

/**
 * Test: Component Catalog Structure
 */
function testCatalogStructure(catalog) {
  if (!catalog) return;

  // Test required top-level fields
  const requiredFields = ['$schema', 'version', 'lastUpdated', 'description', 'generatedBy', 'packages'];
  for (const field of requiredFields) {
    if (catalog[field]) {
      log.pass(`Catalog has required field: ${field}`);
    } else {
      log.fail(`Catalog missing required field: ${field}`);
    }
  }

  // Test packages structure
  if (catalog.packages && catalog.packages['fundamental-styles']) {
    log.pass('Catalog has fundamental-styles package');

    const pkg = catalog.packages['fundamental-styles'];
    if (pkg.components && Array.isArray(pkg.components)) {
      log.pass(`Catalog has components array (${pkg.components.length} components)`);
      return pkg.components;
    } else {
      log.fail('Catalog missing components array');
      return null;
    }
  } else {
    log.fail('Catalog missing fundamental-styles package');
    return null;
  }
}

/**
 * Test: Component Structure
 */
function testComponentStructure(components) {
  if (!components || components.length === 0) return;

  const requiredFields = ['id', 'name', 'baseClass', 'cssImport', 'category'];
  const optionalFields = ['description', 'modifiers', 'elements', 'variables', 'tags', 'examples', 'subcategory'];

  let validComponents = 0;
  let invalidComponents = 0;

  for (const component of components) {
    let isValid = true;

    // Check required fields
    for (const field of requiredFields) {
      if (!component[field]) {
        log.fail(`Component ${component.id || 'unknown'} missing required field: ${field}`);
        isValid = false;
      }
    }

    // Validate base class format
    if (component.baseClass && !component.baseClass.startsWith('fd-')) {
      log.fail(`Component ${component.id} has invalid baseClass: ${component.baseClass}`, 'Should start with "fd-"');
      isValid = false;
    }

    // Validate modifiers structure
    if (component.modifiers) {
      if (!Array.isArray(component.modifiers)) {
        log.fail(`Component ${component.id} modifiers should be an array`);
        isValid = false;
      } else {
        for (const modifier of component.modifiers) {
          if (!modifier.class || !modifier.description) {
            log.fail(`Component ${component.id} has invalid modifier structure`);
            isValid = false;
            break;
          }
        }
      }
    }

    // Validate elements structure
    if (component.elements) {
      if (!Array.isArray(component.elements)) {
        log.fail(`Component ${component.id} elements should be an array`);
        isValid = false;
      } else {
        for (const element of component.elements) {
          if (!element.class || !element.description) {
            log.fail(`Component ${component.id} has invalid element structure`);
            isValid = false;
            break;
          }

          // Validate element modifiers
          if (element.modifiers && !Array.isArray(element.modifiers)) {
            log.fail(`Component ${component.id} element ${element.class} modifiers should be an array`);
            isValid = false;
            break;
          }
        }
      }
    }

    if (isValid) {
      validComponents++;
    } else {
      invalidComponents++;
    }
  }

  if (invalidComponents === 0) {
    log.pass(`All ${validComponents} components have valid structure`);
  } else {
    log.fail(`${invalidComponents} components have invalid structure`);
  }

  // Test for duplicates
  const ids = components.map(c => c.id);
  const uniqueIds = new Set(ids);
  if (ids.length === uniqueIds.size) {
    log.pass('No duplicate component IDs');
  } else {
    log.fail('Found duplicate component IDs', `${ids.length} components, ${uniqueIds.size} unique IDs`);
  }
}

/**
 * Test: Component Categories
 */
function testComponentCategories(components) {
  if (!components) return;

  const categorized = components.filter(c => c.category && c.category !== 'uncategorized');
  const uncategorized = components.filter(c => !c.category || c.category === 'uncategorized');

  if (categorized.length > 0) {
    log.pass(`${categorized.length} components are categorized`);
  }

  if (uncategorized.length === 0) {
    log.pass('All components are categorized');
  } else {
    log.info(`${uncategorized.length} components are uncategorized (this is okay if intentional)`);
  }

  // List all categories
  const categories = new Set(components.map(c => c.category).filter(Boolean));
  log.info(`Found ${categories.size} categories: ${Array.from(categories).sort().join(', ')}`);
}

/**
 * Test: JSON Schemas
 */
function testSchemas(components) {
  log.section('📋 JSON Schema Tests');

  if (!fs.existsSync(SCHEMAS_DIR)) {
    log.fail('Schemas directory missing', `Expected: ${SCHEMAS_DIR}`);
    return;
  }

  log.pass('Schemas directory exists');

  if (!components) return;

  let validSchemas = 0;
  let invalidSchemas = 0;
  let missingSchemas = 0;

  for (const component of components) {
    const schemaPath = path.join(SCHEMAS_DIR, `${component.id}.schema.json`);

    if (!fs.existsSync(schemaPath)) {
      log.fail(`Schema missing for component: ${component.id}`);
      missingSchemas++;
      continue;
    }

    try {
      const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));

      // Validate schema structure
      const requiredSchemaFields = ['$schema', '$id', 'title', 'description', 'type', 'properties'];
      let isValid = true;

      for (const field of requiredSchemaFields) {
        if (!schema[field]) {
          log.fail(`Schema ${component.id} missing required field: ${field}`);
          isValid = false;
        }
      }

      // Validate baseClass property
      if (!schema.properties?.baseClass?.const) {
        log.fail(`Schema ${component.id} missing baseClass constant`);
        isValid = false;
      }

      // Validate modifiers if present
      if (schema.properties?.modifiers) {
        if (!schema.properties.modifiers.items?.enum) {
          log.fail(`Schema ${component.id} modifiers missing enum`);
          isValid = false;
        }
      }

      // Validate elements if present
      if (schema.properties?.elements) {
        if (schema.properties.elements.type !== 'object') {
          log.fail(`Schema ${component.id} elements should be type object`);
          isValid = false;
        }
      }

      if (isValid) {
        validSchemas++;
      } else {
        invalidSchemas++;
      }
    } catch (error) {
      log.fail(`Schema ${component.id} is invalid JSON`, error.message);
      invalidSchemas++;
    }
  }

  if (missingSchemas === 0) {
    log.pass('All components have schemas');
  } else {
    log.fail(`${missingSchemas} components missing schemas`);
  }

  if (invalidSchemas === 0) {
    log.pass(`All ${validSchemas} schemas are valid`);
  } else {
    log.fail(`${invalidSchemas} schemas are invalid`);
  }
}

/**
 * Test: Component Relationships
 */
function testRelationships(components) {
  log.section('🔗 Component Relationships Tests');

  if (!fs.existsSync(RELATIONSHIPS_FILE)) {
    log.fail('Relationships file missing', `Expected: ${RELATIONSHIPS_FILE}`);
    return;
  }

  log.pass('Relationships file exists');

  try {
    const relationships = JSON.parse(fs.readFileSync(RELATIONSHIPS_FILE, 'utf8'));
    log.pass('Relationships file is valid JSON');

    // Test structure
    if (relationships.components && relationships.relationships) {
      log.pass('Relationships has required structure');

      // Test components match
      if (components) {
        if (relationships.components.length === components.length) {
          log.pass(`Relationships includes all ${components.length} components`);
        } else {
          log.fail('Component count mismatch',
            `Catalog: ${components.length}, Relationships: ${relationships.components.length}`);
        }
      }

      // Test relationships validity
      const componentIds = new Set(relationships.components.map(c => c.id));
      let validRelationships = 0;
      let invalidRelationships = 0;

      for (const rel of relationships.relationships) {
        if (!rel.from || !rel.to || !rel.type) {
          log.fail('Relationship missing required fields', JSON.stringify(rel));
          invalidRelationships++;
          continue;
        }

        // Check if components exist
        if (!componentIds.has(rel.from)) {
          log.fail(`Relationship references unknown component: ${rel.from}`);
          invalidRelationships++;
          continue;
        }

        if (!componentIds.has(rel.to)) {
          log.fail(`Relationship references unknown component: ${rel.to}`);
          invalidRelationships++;
          continue;
        }

        validRelationships++;
      }

      if (invalidRelationships === 0) {
        log.pass(`All ${validRelationships} relationships are valid`);
      } else {
        log.fail(`${invalidRelationships} relationships are invalid`);
      }

      // Test analytics
      if (relationships.analytics) {
        log.pass('Relationships include analytics');

        if (relationships.analytics.hubComponents) {
          log.info(`Hub components identified: ${relationships.analytics.hubComponents.length}`);
        }
      }
    } else {
      log.fail('Relationships missing required structure');
    }
  } catch (error) {
    log.fail('Relationships file is invalid JSON', error.message);
  }
}

/**
 * Test: Element Modifiers
 */
function testElementModifiers(components) {
  log.section('🎨 Element Modifiers Tests');

  if (!components) return;

  let componentsWithElementModifiers = 0;
  let totalElementModifiers = 0;

  for (const component of components) {
    if (component.elements) {
      for (const element of component.elements) {
        if (element.modifiers && element.modifiers.length > 0) {
          componentsWithElementModifiers++;
          totalElementModifiers += element.modifiers.length;

          // Validate element modifier naming
          for (const modifier of element.modifiers) {
            const expectedPrefix = `${element.class}--`;
            if (!modifier.class.startsWith(expectedPrefix)) {
              log.fail(
                `Invalid element modifier: ${modifier.class}`,
                `Should start with ${expectedPrefix}`
              );
            }
          }

          break; // Count component only once
        }
      }
    }
  }

  if (totalElementModifiers > 0) {
    log.pass(`Found ${totalElementModifiers} element modifiers across ${componentsWithElementModifiers} components`);
  } else {
    log.info('No element modifiers found (this might be unexpected)');
  }

  // Test specific known components
  const calendar = components.find(c => c.id === 'calendar');
  if (calendar) {
    const itemElement = calendar.elements?.find(e => e.class === 'fd-calendar__item');
    if (itemElement && itemElement.modifiers && itemElement.modifiers.length > 0) {
      log.pass(`Calendar __item element has ${itemElement.modifiers.length} modifiers`);
    } else {
      log.fail('Calendar __item element missing modifiers', 'Expected modifiers like --today, --selected');
    }
  }
}

/**
 * Test: Data Consistency
 */
function testDataConsistency(catalog, components) {
  log.section('🔍 Data Consistency Tests');

  if (!catalog || !components) return;

  // Test lastUpdated is recent
  const lastUpdated = new Date(catalog.lastUpdated);
  const daysSinceUpdate = Math.floor((Date.now() - lastUpdated.getTime()) / (1000 * 60 * 60 * 24));

  if (daysSinceUpdate <= 7) {
    log.pass(`Catalog was updated recently (${daysSinceUpdate} days ago)`);
  } else {
    log.fail(`Catalog is outdated (${daysSinceUpdate} days old)`, 'Should be updated weekly');
  }

  // Test version matches
  const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8'));
  const catalogVersion = catalog.version;
  const packageVersion = packageJson.version;

  if (catalogVersion === packageVersion) {
    log.pass('Catalog version matches package.json');
  } else {
    log.info(`Catalog version (${catalogVersion}) differs from package.json (${packageVersion})`);
  }

  // Test category distribution
  const categoryCount = {};
  for (const component of components) {
    categoryCount[component.category] = (categoryCount[component.category] || 0) + 1;
  }

  const maxCategorySize = Math.max(...Object.values(categoryCount));
  const minCategorySize = Math.min(...Object.values(categoryCount).filter(c => c > 0));

  if (maxCategorySize / minCategorySize < 10) {
    log.pass('Category distribution is balanced');
  } else {
    log.info('Category distribution is imbalanced (this might be intentional)');
  }
}

/**
 * Main test runner
 */
async function runTests() {
  console.log('🧪 AI Documentation Test Suite\n');

  // Test 1: Catalog
  const catalog = testCatalogExists();
  const components = testCatalogStructure(catalog);
  testComponentStructure(components);
  testComponentCategories(components);

  // Test 2: Schemas
  testSchemas(components);

  // Test 3: Relationships
  testRelationships(components);

  // Test 4: Element Modifiers
  testElementModifiers(components);

  // Test 5: Consistency
  testDataConsistency(catalog, components);

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log(`\n📊 Test Results:`);
  console.log(`   Total: ${totalTests}`);
  console.log(`   Passed: ${passedTests} ✓`);
  console.log(`   Failed: ${failedTests} ✗`);
  console.log(`   Success Rate: ${((passedTests / totalTests) * 100).toFixed(1)}%`);

  if (failedTests > 0) {
    console.log('\n❌ Some tests failed');
    process.exit(1);
  } else {
    console.log('\n✅ All tests passed!');
    process.exit(0);
  }
}

// Run tests
runTests().catch(error => {
  console.error('💥 Test suite crashed:', error);
  process.exit(1);
});
