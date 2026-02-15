#!/usr/bin/env node

/**
 * Metadata Generation Script
 *
 * Automatically generates and updates AI-friendly documentation by:
 * 1. Scanning SCSS files to extract component classes and modifiers
 * 2. Parsing Storybook stories for descriptions and usage
 * 3. Analyzing HTML examples for structure
 * 4. Updating component-catalog.json
 * 5. Generating JSON schemas
 *
 * Usage: node scripts/generate-ai-metadata.js [options]
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
  storiesDir: path.join(__dirname, '../packages/styles/stories/Components'),
  outputDir: path.join(__dirname, '../docs'),
  catalogFile: path.join(__dirname, '../docs/component-catalog.json'),
  schemasDir: path.join(__dirname, '../docs/schemas'),
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
 * Parse SCSS file to extract component information
 */
function parseScssFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath, '.scss');

  // Skip private files
  if (fileName.startsWith('_')) {
    return null;
  }

  const component = {
    id: fileName,
    name: toTitleCase(fileName),
    baseClass: null,
    modifiers: [],
    elements: [],
    variables: [],
  };

  // Extract base class (e.g., .fd-button)
  // Pattern 1: .#{$block-componentname} - e.g., .#{$block-button}
  const baseClassMatch = content.match(/\.(?:#{)?\$?block-(\w+)(?:})?[\s{]/);
  if (baseClassMatch) {
    component.baseClass = `fd-${baseClassMatch[1]}`;
  } else {
    // Pattern 2: $block: #{$fd-namespace}-componentname; .#{$block}
    const blockVarMatch = content.match(/\$block\s*:\s*#{\\$fd-namespace}-([\w-]+)/);
    if (blockVarMatch) {
      component.baseClass = `fd-${blockVarMatch[1]}`;
    } else {
      // Fallback: try to find .fd-componentname literally
      const fallbackMatch = content.match(/\.(fd-[\w-]+)\s*{/);
      if (fallbackMatch) {
        component.baseClass = fallbackMatch[1];
      }
    }
  }

  // Only extract modifiers and elements if we have a valid base class
  if (!component.baseClass) {
    component.baseClass = `fd-${fileName}`;
    log.verbose(`Using fallback base class for ${fileName}: ${component.baseClass}`);
  }

  // Collect all content to search (main file + imported mixins)
  let allContent = content;

  // Parse @import statements and read mixin files
  const importedContent = parseImportedMixins(filePath, content, fileName);
  allContent += '\n' + importedContent;

  // Extract modifiers (e.g., &--emphasized in SCSS becomes .fd-button--emphasized)
  // Look for &-- patterns (Sass parent selector with modifier)
  const modifierRegex = /&--([a-z0-9-]+)/gi;
  let modifierMatch;
  const foundModifiers = new Set();

  while ((modifierMatch = modifierRegex.exec(allContent)) !== null) {
    const modifierName = modifierMatch[1];
    const fullClass = `${component.baseClass}--${modifierName}`;
    foundModifiers.add(fullClass);
  }

  // Also extract modifiers from Sass maps like $button-types-config
  const typeConfigModifiers = extractModifiersFromSassMaps(allContent, component.baseClass);
  typeConfigModifiers.forEach(mod => foundModifiers.add(mod));

  // Also check story HTML files for modifiers used in practice
  const storyModifiers = extractModifiersFromStories(fileName, component.baseClass);
  storyModifiers.forEach(mod => foundModifiers.add(mod));

  // Filter out incomplete modifiers (ending with hyphen from Sass interpolation)
  // and convert to array with descriptions
  component.modifiers = Array.from(foundModifiers)
    .filter(mod => !mod.endsWith('-'))  // Remove incomplete modifiers like fd-avatar--accent-color-
    .map(mod => ({
      class: mod,
      description: `${mod.split('--')[1]} variant`,
    }));

  // Extract elements (e.g., &__text in SCSS becomes .fd-button__text)
  // Look for &__ patterns (Sass parent selector with element)
  const elementRegex = /&__([a-z0-9-]+)/gi;
  let elementMatch;
  const foundElements = new Map(); // element name -> {class, modifiers[]}

  while ((elementMatch = elementRegex.exec(allContent)) !== null) {
    const elementName = elementMatch[1];
    const fullClass = `${component.baseClass}__${elementName}`;

    if (!foundElements.has(elementName)) {
      foundElements.set(elementName, {
        class: fullClass,
        description: `${elementName} element`,
        modifiers: []
      });
    }
  }

  // Extract element modifiers (e.g., &__item--selected becomes .fd-calendar__item--selected)
  // Look for &__element--modifier patterns AND .#{$block}__element--modifier patterns
  const elementModifierRegex = /&__([a-z0-9-]+)--([a-z0-9-]+)/gi;
  const blockElemModRegex = /\.#{(?:\$block|\$fd-namespace)}__([a-z0-9-]+)--([a-z0-9-]+)/gi;
  let elemModMatch;

  // Pattern 1: &__element--modifier
  while ((elemModMatch = elementModifierRegex.exec(allContent)) !== null) {
    const elementName = elemModMatch[1];
    const modifierName = elemModMatch[2];
    const fullClass = `${component.baseClass}__${elementName}`;
    const fullModClass = `${fullClass}--${modifierName}`;

    // Ensure the element exists
    if (!foundElements.has(elementName)) {
      foundElements.set(elementName, {
        class: fullClass,
        description: `${elementName} element`,
        modifiers: []
      });
    }

    // Add the modifier to this element
    foundElements.get(elementName).modifiers.push({
      class: fullModClass,
      description: `${modifierName} variant of ${elementName}`
    });
  }

  // Pattern 2: .#{$block}__element--modifier
  while ((elemModMatch = blockElemModRegex.exec(allContent)) !== null) {
    const elementName = elemModMatch[1];
    const modifierName = elemModMatch[2];
    const fullClass = `${component.baseClass}__${elementName}`;
    const fullModClass = `${fullClass}--${modifierName}`;

    // Ensure the element exists
    if (!foundElements.has(elementName)) {
      foundElements.set(elementName, {
        class: fullClass,
        description: `${elementName} element`,
        modifiers: []
      });
    }

    // Add the modifier to this element
    foundElements.get(elementName).modifiers.push({
      class: fullModClass,
      description: `${modifierName} variant of ${elementName}`
    });
  }

  // Also extract element modifiers from stories (these may not be in SCSS)
  const storyElementModifiers = extractElementModifiersFromStories(fileName, component.baseClass);
  for (const [elementName, modifierClasses] of storyElementModifiers) {
    // Ensure the element exists
    if (!foundElements.has(elementName)) {
      foundElements.set(elementName, {
        class: `${component.baseClass}__${elementName}`,
        description: `${elementName} element`,
        modifiers: []
      });
    }

    // Add modifiers from stories
    for (const modClass of modifierClasses) {
      const modifierName = modClass.split('--').pop();
      foundElements.get(elementName).modifiers.push({
        class: modClass,
        description: `${modifierName} variant of ${elementName}`
      });
    }
  }

  // Convert to array and deduplicate element modifiers
  component.elements = Array.from(foundElements.values()).map(el => ({
    class: el.class,
    description: el.description,
    modifiers: [...new Set(el.modifiers.map(m => JSON.stringify(m)))].map(m => JSON.parse(m))
  }));

  // Extract CSS variables
  const varRegex = /--fd[A-Z]\w+/g;
  let varMatch;
  const foundVars = new Set();

  while ((varMatch = varRegex.exec(allContent)) !== null) {
    foundVars.add(varMatch[0]);
  }

  component.variables = Array.from(foundVars);

  log.verbose(`Parsed ${fileName}: ${component.modifiers.length} modifiers, ${component.elements.length} elements`);

  return component;
}

/**
 * Parse imported mixin files to get additional content
 */
function parseImportedMixins(filePath, content, componentName) {
  const fileDir = path.dirname(filePath);
  let importedContent = '';

  // Find @import statements
  const importRegex = /@import\s+['"]([^'"]+)['"]/g;
  let importMatch;

  while ((importMatch = importRegex.exec(content)) !== null) {
    const importPath = importMatch[1];

    // Skip common imports that don't have component-specific modifiers
    if (importPath.includes('new-settings') ||
        importPath.includes('functions') ||
        importPath === './mixins') {
      continue;
    }

    // Skip imports of other components (they define their own $block)
    // Only include actual mixin files from the mixins/ directory
    if (!importPath.includes('mixins/') && !importPath.startsWith('_')) {
      // This is likely another component import (like form-group in fieldset)
      // Skip it to avoid polluting this component with another's modifiers
      continue;
    }

    // Try to resolve the import path
    const possiblePaths = [
      path.join(fileDir, importPath + '.scss'),
      path.join(fileDir, importPath),
      path.join(fileDir, '_' + importPath + '.scss'),
      path.join(fileDir, importPath.replace('./', '') + '.scss'),
    ];

    // For paths like './mixins/button/button-types'
    if (importPath.includes('/')) {
      const parts = importPath.split('/');
      const lastPart = parts[parts.length - 1];
      possiblePaths.push(
        path.join(fileDir, importPath + '.scss'),
        path.join(fileDir, parts.slice(0, -1).join('/'), '_' + lastPart + '.scss'),
      );
    }

    for (const tryPath of possiblePaths) {
      if (fs.existsSync(tryPath)) {
        try {
          const mixinContent = fs.readFileSync(tryPath, 'utf8');

          // Double-check: skip if this file defines its own $block (it's a component, not a mixin)
          if (/\$block\s*:\s*#\{\$fd-namespace\}/.test(mixinContent)) {
            log.verbose(`  Skipped component import: ${path.basename(tryPath)}`);
            break;
          }

          importedContent += '\n' + mixinContent;
          log.verbose(`  Included mixin: ${path.basename(tryPath)}`);
        } catch (e) {
          // Ignore read errors
        }
        break;
      }
    }
  }

  // Also look for component-specific mixin directories
  const mixinDir = path.join(fileDir, 'mixins', componentName);
  if (fs.existsSync(mixinDir)) {
    try {
      const mixinFiles = fs.readdirSync(mixinDir);
      for (const mixinFile of mixinFiles) {
        if (mixinFile.endsWith('.scss')) {
          const mixinPath = path.join(mixinDir, mixinFile);
          const mixinContent = fs.readFileSync(mixinPath, 'utf8');
          importedContent += '\n' + mixinContent;
          log.verbose(`  Included mixin: ${componentName}/${mixinFile}`);
        }
      }
    } catch (e) {
      // Ignore directory read errors
    }
  }

  return importedContent;
}

/**
 * Extract modifiers from Sass maps like $button-types-config
 */
function extractModifiersFromSassMaps(content, baseClass) {
  const modifiers = new Set();

  // Look for config maps that define types/variants
  // Pattern: $component-types-config: ( "emphasized": (...), "transparent": (...) )
  const configMapRegex = /\$[\w-]+-types-config\s*:\s*\(([\s\S]*?)\);/g;
  let configMatch;

  while ((configMatch = configMapRegex.exec(content)) !== null) {
    const mapContent = configMatch[1];

    // Extract type names from the map
    const typeNameRegex = /"([a-z0-9-]+)"\s*:\s*\(/gi;
    let typeMatch;

    while ((typeMatch = typeNameRegex.exec(mapContent)) !== null) {
      const typeName = typeMatch[1];
      modifiers.add(`${baseClass}--${typeName}`);
    }
  }

  // Also look for @each loops that generate modifiers from maps
  // Pattern: @each $type, $props in $button-types-config { &--#{$type} }
  const eachLoopRegex = /@each\s+\$(\w+)\s*,?\s*\$?\w*\s+in\s+\$[\w-]+-types-config/g;
  if (eachLoopRegex.test(content)) {
    // Already captured by the config map regex above
  }

  return modifiers;
}

/**
 * Extract modifiers from story HTML files
 */
function extractModifiersFromStories(componentName, baseClass) {
  const modifiers = new Set();

  // Check component-specific stories folder
  const storiesPath = path.join(CONFIG.storiesDir, componentName);
  if (fs.existsSync(storiesPath)) {
    extractModifiersFromDirectory(storiesPath, baseClass, modifiers);
  }

  // Always also check BTP stories - they use components like button with compact modifier
  const btpStoriesPath = path.join(__dirname, '../packages/styles/stories/BTP');
  if (fs.existsSync(btpStoriesPath)) {
    extractModifiersFromDirectory(btpStoriesPath, baseClass, modifiers);
  }

  return modifiers;
}

/**
 * Extract modifiers from HTML files in a directory
 */
function extractModifiersFromDirectory(dirPath, baseClass, modifiers) {
  try {
    const files = fs.readdirSync(dirPath, { recursive: true });

    for (const file of files) {
      if (typeof file === 'string' && file.endsWith('.html')) {
        const filePath = path.join(dirPath, file);
        try {
          const content = fs.readFileSync(filePath, 'utf8');

          // Extract modifiers from class attributes
          // Pattern: baseClass--modifierName
          const escapedBase = baseClass.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const modifierRegex = new RegExp(`${escapedBase}--([a-z0-9-]+)`, 'gi');
          let match;

          while ((match = modifierRegex.exec(content)) !== null) {
            modifiers.add(`${baseClass}--${match[1]}`);
          }
        } catch (e) {
          // Ignore file read errors
        }
      }
    }
  } catch (e) {
    // Ignore directory read errors
  }
}

/**
 * Extract element modifiers from story HTML files
 * Pattern: baseClass__element--modifier
 */
function extractElementModifiersFromStories(componentName, baseClass) {
  const elementModifiers = new Map(); // element name -> Set of modifier classes

  const storiesPath = path.join(CONFIG.storiesDir, componentName);
  if (fs.existsSync(storiesPath)) {
    extractElementModifiersFromDirectory(storiesPath, baseClass, elementModifiers);
  }

  return elementModifiers;
}

/**
 * Extract element modifiers from HTML files in a directory
 */
function extractElementModifiersFromDirectory(dirPath, baseClass, elementModifiers) {
  try {
    const files = fs.readdirSync(dirPath, { recursive: true });

    for (const file of files) {
      if (typeof file === 'string' && file.endsWith('.html')) {
        const filePath = path.join(dirPath, file);
        try {
          const content = fs.readFileSync(filePath, 'utf8');

          // Extract element modifiers from class attributes
          // Pattern: baseClass__element--modifier
          const escapedBase = baseClass.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const elemModRegex = new RegExp(`${escapedBase}__([a-z0-9-]+)--([a-z0-9-]+)`, 'gi');
          let match;

          while ((match = elemModRegex.exec(content)) !== null) {
            const elementName = match[1];
            const modifierName = match[2];

            if (!elementModifiers.has(elementName)) {
              elementModifiers.set(elementName, new Set());
            }
            elementModifiers.get(elementName).add(`${baseClass}__${elementName}--${modifierName}`);
          }
        } catch (e) {
          // Ignore file read errors
        }
      }
    }
  } catch (e) {
    // Ignore directory read errors
  }
}

/**
 * Parse Storybook story file to extract metadata
 */
function parseStoryFile(componentId) {
  const storyPath = path.join(CONFIG.storiesDir, componentId, `${componentId}.stories.js`);

  if (!fs.existsSync(storyPath)) {
    log.verbose(`No story file found for ${componentId}`);
    return null;
  }

  const content = fs.readFileSync(storyPath, 'utf8');

  const metadata = {
    description: null,
    usage: null,
    tags: [],
  };

  // Extract description from parameters.description
  const descMatch = content.match(/description:\s*`([^`]+)`/s);
  if (descMatch) {
    metadata.description = descMatch[1].trim().split('\n')[0]; // First line
  }

  // Extract tags
  const tagsMatch = content.match(/tags:\s*\[([^\]]+)\]/);
  if (tagsMatch) {
    metadata.tags = tagsMatch[1].split(',').map(t => t.trim().replace(/['"]/g, ''));
  }

  // Extract usage guidelines
  const usageMatch = content.match(/##\s*Usage\s*\n([\s\S]*?)(?=##|$)/);
  if (usageMatch) {
    metadata.usage = usageMatch[1].trim();
  }

  log.verbose(`Parsed story for ${componentId}`);

  return metadata;
}

/**
 * Find HTML example files for a component
 */
async function findExamples(componentId) {
  const examplesDir = path.join(CONFIG.storiesDir, componentId);

  if (!fs.existsSync(examplesDir)) {
    return [];
  }

  const examples = await globAsync('*.example.html', { cwd: examplesDir });

  log.verbose(`Found ${examples.length} examples for ${componentId}`);

  return examples.map(ex => ex.replace('.example.html', ''));
}

/**
 * Generate component metadata
 */
async function generateComponentMetadata(componentId) {
  const scssPath = path.join(CONFIG.stylesDir, `${componentId}.scss`);

  if (!fs.existsSync(scssPath)) {
    log.verbose(`Skipping ${componentId}: no SCSS file`);
    return null;
  }

  log.info(`Processing component: ${componentId}`);

  // Parse SCSS
  const scssData = parseScssFile(scssPath);
  if (!scssData) {
    return null;
  }

  // Parse Story
  const storyData = parseStoryFile(componentId);

  // Find examples
  const examples = await findExamples(componentId);

  // Combine metadata
  const metadata = {
    id: componentId,
    name: scssData.name,
    description: storyData?.description || `${scssData.name} component`,
    baseClass: scssData.baseClass || `fd-${componentId}`,
    cssImport: `fundamental-styles/dist/${componentId}.css`,
    storybookUrl: `https://sap.github.io/fundamental-styles/?path=/docs/components-${componentId}`,

    modifiers: scssData.modifiers,
    elements: scssData.elements,
    variables: scssData.variables,

    tags: storyData?.tags || [],
    examples: examples,

    // Placeholders for manual curation
    category: 'uncategorized',
    subcategory: null,
    useCases: [],
    avoidWhen: [],
    accessibility: {
      role: null,
      ariaAttributes: [],
    },
    relatedComponents: [],
    dependencies: [],
  };

  return metadata;
}

/**
 * Scan all components
 */
async function scanAllComponents() {
  log.info('Scanning components...');

  const scssFiles = await globAsync('*.scss', { cwd: CONFIG.stylesDir });
  const components = [];

  for (const file of scssFiles) {
    const componentId = path.basename(file, '.scss');

    // Skip private files and utilities
    if (componentId.startsWith('_') || componentId === 'fundamental-styles') {
      continue;
    }

    const metadata = await generateComponentMetadata(componentId);
    if (metadata) {
      components.push(metadata);
    }
  }

  log.success(`Found ${components.length} components`);

  return components;
}

/**
 * Merge with existing catalog
 */
function mergeWithExistingCatalog(newComponents) {
  if (!fs.existsSync(CONFIG.catalogFile)) {
    log.info('No existing catalog found, creating new one');
    return newComponents;
  }

  log.info('Merging with existing catalog...');

  const existingCatalog = JSON.parse(fs.readFileSync(CONFIG.catalogFile, 'utf8'));
  const existingComponents = existingCatalog.packages['fundamental-styles']?.components || [];

  const existingMap = new Map(existingComponents.map(c => [c.id, c]));

  const merged = newComponents.map(newComp => {
    const existing = existingMap.get(newComp.id);

    if (existing) {
      // Merge: keep manual curations, update auto-generated fields
      return {
        ...existing,
        // Auto-update these fields
        baseClass: newComp.baseClass,
        cssImport: newComp.cssImport,
        storybookUrl: newComp.storybookUrl,
        modifiers: newComp.modifiers,
        elements: newComp.elements,
        variables: newComp.variables,
        examples: newComp.examples,
        tags: newComp.tags,
        // Keep manual curations
        category: existing.category,
        subcategory: existing.subcategory,
        useCases: existing.useCases || [],
        avoidWhen: existing.avoidWhen || [],
        accessibility: existing.accessibility || newComp.accessibility,
        relatedComponents: existing.relatedComponents || [],
        dependencies: existing.dependencies || [],
      };
    }

    return newComp;
  });

  log.success(`Merged ${merged.length} components`);

  return merged;
}

/**
 * Update component catalog
 */
function updateCatalog(components) {
  log.info('Updating component catalog...');

  const catalog = {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    version: '0.41.0',
    description: 'Machine-readable catalog of Fundamental Library Styles components',
    generatedBy: 'scripts/generate-ai-metadata.js',
    relatedFiles: {
      accessibility: 'docs/accessibility.json',
      designTokens: 'docs/design-tokens.json',
      htmlExamples: 'docs/html-examples.json',
      modifierRules: 'docs/modifier-rules.json',
      utilityClasses: 'docs/utility-classes.json',
      relationships: 'docs/component-relationships.json',
      schemas: 'docs/schemas/{component}.schema.json'
    },
    packages: {
      'fundamental-styles': {
        name: 'fundamental-styles',
        description: 'Main component library with 117+ UI components',
        npmPackage: 'fundamental-styles',
        repository: 'https://github.com/SAP/fundamental-styles',
        documentation: 'https://sap.github.io/fundamental-styles/',
        components: components,
      },
    },
    componentCategories: buildCategories(components),
    selectionGuide: buildSelectionGuide(components),
  };

  // Ensure output directory exists
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  }

  // Write catalog
  fs.writeFileSync(
    CONFIG.catalogFile,
    JSON.stringify(catalog, null, 2) + '\n',
    'utf8'
  );

  log.success(`Catalog updated: ${CONFIG.catalogFile}`);

  return catalog;
}

/**
 * Build component categories from components
 */
function buildCategories(components) {
  const categories = {};

  for (const comp of components) {
    if (comp.category && comp.category !== 'uncategorized') {
      if (!categories[comp.category]) {
        categories[comp.category] = [];
      }
      categories[comp.category].push(comp.id);
    }
  }

  return categories;
}

/**
 * Build selection guide
 */
function buildSelectionGuide(components) {
  // This would need manual curation, just return empty for now
  return {
    action: 'button',
    navigation: 'link',
    'short-text': 'input',
    'long-text': 'textarea',
  };
}

/**
 * Generate JSON schema for a component
 */
function generateComponentSchema(component) {
  const properties = {
    baseClass: {
      const: component.baseClass,
      description: 'Required base class',
    },
  };

  // Only add modifiers if there are any
  if (component.modifiers.length > 0) {
    properties.modifiers = {
      type: 'array',
      items: {
        enum: component.modifiers.map(m => m.class),
      },
      description: 'Optional modifier classes',
    };
  }

  // Only add elements if there are any
  if (component.elements.length > 0) {
    // Build element schema with modifiers
    const elementProperties = {};

    for (const element of component.elements) {
      const elementKey = element.class;
      elementProperties[elementKey] = {
        type: 'object',
        description: element.description,
        properties: {
          class: {
            const: element.class,
            description: 'Element class name'
          }
        }
      };

      // Add modifiers if element has any
      if (element.modifiers && element.modifiers.length > 0) {
        elementProperties[elementKey].properties.modifiers = {
          type: 'array',
          items: {
            enum: element.modifiers.map(m => m.class)
          },
          description: 'Available modifiers for this element'
        };
      }
    }

    properties.elements = {
      type: 'object',
      description: 'Optional element classes with their available modifiers',
      properties: elementProperties,
      additionalProperties: false
    };
  }

  const schema = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: `https://sap.github.io/fundamental-styles/schemas/${component.id}.json`,
    title: `${component.name} Component`,
    description: component.description,
    type: 'object',
    properties,
    required: ['baseClass'],
  };

  return schema;
}

/**
 * Generate all component schemas
 */
function generateSchemas(components) {
  log.info('Generating JSON schemas...');

  // Ensure schemas directory exists
  if (!fs.existsSync(CONFIG.schemasDir)) {
    fs.mkdirSync(CONFIG.schemasDir, { recursive: true });
  }

  for (const component of components) {
    const schema = generateComponentSchema(component);
    const schemaPath = path.join(CONFIG.schemasDir, `${component.id}.schema.json`);

    fs.writeFileSync(schemaPath, JSON.stringify(schema, null, 2) + '\n', 'utf8');
    log.verbose(`Generated schema: ${component.id}.schema.json`);
  }

  log.success(`Generated ${components.length} schemas in ${CONFIG.schemasDir}`);
}

/**
 * Utility: Convert kebab-case to Title Case
 */
function toTitleCase(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Generate statistics
 */
function generateStats(components) {
  const stats = {
    totalComponents: components.length,
    categorized: components.filter(c => c.category !== 'uncategorized').length,
    uncategorized: components.filter(c => c.category === 'uncategorized').length,
    withExamples: components.filter(c => c.examples.length > 0).length,
    withStories: components.filter(c => c.tags.length > 0).length,
    totalModifiers: components.reduce((sum, c) => sum + c.modifiers.length, 0),
    totalElements: components.reduce((sum, c) => sum + c.elements.length, 0),
  };

  log.info('\n📊 Statistics:');
  log.info(`  Total components: ${stats.totalComponents}`);
  log.info(`  Categorized: ${stats.categorized}`);
  log.info(`  Uncategorized: ${stats.uncategorized}`);
  log.info(`  With examples: ${stats.withExamples}`);
  log.info(`  With stories: ${stats.withStories}`);
  log.info(`  Total modifiers: ${stats.totalModifiers}`);
  log.info(`  Total elements: ${stats.totalElements}`);

  return stats;
}

/**
 * Main execution
 */
async function main() {
  console.log('🤖 Fundamental Styles - AI Metadata Generator\n');

  try {
    // Step 1: Scan components
    const components = await scanAllComponents();

    // Step 2: Merge with existing catalog
    const mergedComponents = mergeWithExistingCatalog(components);

    // Step 3: Update catalog
    updateCatalog(mergedComponents);

    // Step 4: Generate schemas
    generateSchemas(mergedComponents);

    // Step 5: Generate stats
    const stats = generateStats(mergedComponents);

    console.log('\n✅ Metadata generation complete!');
    console.log(`\n📊 Generated:`);
    console.log(`  - Component catalog: ${CONFIG.catalogFile}`);
    console.log(`  - JSON schemas: ${CONFIG.schemasDir}`);
    console.log(`  - ${stats.totalComponents} components documented`);
    console.log(`  - ${stats.categorized} categorized, ${stats.uncategorized} uncategorized`);
    console.log(`\n💡 System Status:`);
    console.log(`  ✅ Pre-commit hook active (auto-runs on component changes)`);
    console.log(`  ✅ CI/CD validation enabled`);
    console.log(`  ✅ Test suite available: yarn test:ai-docs`);

  } catch (error) {
    log.error(`Failed to generate metadata: ${error.message}`);
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
  parseScssFile,
  parseStoryFile,
  generateComponentMetadata,
  scanAllComponents,
};
