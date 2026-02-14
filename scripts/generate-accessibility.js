#!/usr/bin/env node

/**
 * Generate Accessibility Metadata
 *
 * Extracts accessibility patterns (ARIA attributes, roles, keyboard support)
 * from story HTML files and generates accessibility documentation for each component.
 *
 * Usage: node scripts/generate-accessibility.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONFIG = {
  storiesPath: path.join(__dirname, '../packages/styles/stories/Components'),
  formsPath: path.join(__dirname, '../packages/styles/stories/Components/Forms'),
  outputFile: path.join(__dirname, '../docs/accessibility.json'),
  catalogFile: path.join(__dirname, '../docs/component-catalog.json'),
};

// Map of semantic roles to their common keyboard interactions
const KEYBOARD_BY_ROLE = {
  'button': ['Enter', 'Space'],
  'checkbox': ['Space'],
  'radio': ['Arrow keys', 'Space'],
  'combobox': ['Arrow keys', 'Enter', 'Escape'],
  'listbox': ['Arrow keys', 'Enter'],
  'menu': ['Arrow keys', 'Enter', 'Escape'],
  'menuitem': ['Enter', 'Space'],
  'tab': ['Arrow keys'],
  'tablist': ['Arrow keys'],
  'tree': ['Arrow keys', 'Enter', 'Space'],
  'treeitem': ['Arrow keys', 'Enter', 'Space'],
  'dialog': ['Escape', 'Tab'],
  'slider': ['Arrow keys'],
  'switch': ['Space', 'Enter'],
  'link': ['Enter'],
  'option': ['Enter', 'Space'],
};

// Common ARIA attributes and their purposes
const ARIA_PURPOSES = {
  'aria-label': 'Accessible name when no visible text',
  'aria-labelledby': 'References visible label element',
  'aria-describedby': 'References description element',
  'aria-expanded': 'Indicates expandable state (true/false)',
  'aria-haspopup': 'Indicates popup type (menu/listbox/dialog)',
  'aria-pressed': 'Toggle button state (true/false)',
  'aria-selected': 'Selection state in a list',
  'aria-checked': 'Checkbox/radio checked state',
  'aria-disabled': 'Disabled state (use with disabled attr)',
  'aria-hidden': 'Hide from screen readers (decorative)',
  'aria-live': 'Announces dynamic content changes',
  'aria-modal': 'Indicates modal dialog',
  'aria-controls': 'References controlled element',
  'aria-owns': 'Defines parent-child relationship',
  'aria-current': 'Indicates current item (page/step/date)',
  'aria-invalid': 'Indicates validation error',
  'aria-required': 'Indicates required field',
  'aria-readonly': 'Indicates read-only field',
  'aria-level': 'Hierarchy level (headings, tree)',
  'aria-setsize': 'Total items in set',
  'aria-posinset': 'Position in set',
  'aria-activedescendant': 'Active child element',
  'aria-roledescription': 'Custom role description',
};

function extractAriaFromHtml(htmlContent) {
  const patterns = {
    roles: new Map(),
    ariaAttrs: new Map(),
    tabindex: new Set(),
  };

  // Extract role attributes
  const roleMatches = htmlContent.matchAll(/role="([^"]+)"/g);
  for (const match of roleMatches) {
    const role = match[1];
    if (role !== 'presentation' && role !== 'none') {
      patterns.roles.set(role, (patterns.roles.get(role) || 0) + 1);
    }
  }

  // Extract aria-* attributes
  const ariaMatches = htmlContent.matchAll(/aria-([a-z-]+)="([^"]*)"/g);
  for (const match of ariaMatches) {
    const attr = `aria-${match[1]}`;
    const value = match[2];
    if (!patterns.ariaAttrs.has(attr)) {
      patterns.ariaAttrs.set(attr, new Set());
    }
    patterns.ariaAttrs.get(attr).add(value);
  }

  // Extract tabindex
  const tabindexMatches = htmlContent.matchAll(/tabindex="([^"]+)"/g);
  for (const match of tabindexMatches) {
    patterns.tabindex.add(match[1]);
  }

  return patterns;
}

function analyzeComponent(componentPath, componentName) {
  const result = {
    roles: new Map(),
    ariaAttrs: new Map(),
    tabindex: new Set(),
    fileCount: 0,
  };

  if (!fs.existsSync(componentPath)) {
    return null;
  }

  const files = fs.readdirSync(componentPath).filter(f => f.endsWith('.html'));
  result.fileCount = files.length;

  for (const file of files) {
    const content = fs.readFileSync(path.join(componentPath, file), 'utf8');
    const patterns = extractAriaFromHtml(content);

    // Merge roles
    for (const [role, count] of patterns.roles) {
      result.roles.set(role, (result.roles.get(role) || 0) + count);
    }

    // Merge aria attrs
    for (const [attr, values] of patterns.ariaAttrs) {
      if (!result.ariaAttrs.has(attr)) {
        result.ariaAttrs.set(attr, new Set());
      }
      for (const v of values) {
        result.ariaAttrs.get(attr).add(v);
      }
    }

    // Merge tabindex
    for (const t of patterns.tabindex) {
      result.tabindex.add(t);
    }
  }

  return result;
}

function generateAccessibilityData(analysis, componentId) {
  if (!analysis || analysis.fileCount === 0) {
    return null;
  }

  const data = {
    roles: [],
    requiredAttrs: [],
    optionalAttrs: [],
    keyboardSupport: [],
    focusManagement: null,
    notes: [],
  };

  // Process roles (sort by frequency)
  const sortedRoles = [...analysis.roles.entries()].sort((a, b) => b[1] - a[1]);
  for (const [role, count] of sortedRoles) {
    data.roles.push(role);
    // Add keyboard support for known roles
    if (KEYBOARD_BY_ROLE[role]) {
      for (const key of KEYBOARD_BY_ROLE[role]) {
        if (!data.keyboardSupport.includes(key)) {
          data.keyboardSupport.push(key);
        }
      }
    }
  }

  // Process ARIA attributes
  const commonRequired = ['aria-label', 'aria-labelledby', 'aria-describedby'];
  const stateAttrs = ['aria-expanded', 'aria-selected', 'aria-pressed', 'aria-checked', 'aria-disabled'];

  for (const [attr, values] of analysis.ariaAttrs) {
    const valuesArray = [...values];
    const attrInfo = {
      name: attr,
      purpose: ARIA_PURPOSES[attr] || 'See WAI-ARIA specification',
      exampleValues: valuesArray.slice(0, 3),
    };

    // Categorize as required or optional
    if (commonRequired.includes(attr)) {
      if (attr === 'aria-label' && !analysis.ariaAttrs.has('aria-labelledby')) {
        attrInfo.when = 'Required when no visible text label';
        data.requiredAttrs.push(attrInfo);
      } else {
        data.optionalAttrs.push(attrInfo);
      }
    } else if (stateAttrs.includes(attr)) {
      attrInfo.when = 'Required for interactive state';
      data.requiredAttrs.push(attrInfo);
    } else if (attr !== 'aria-hidden') {
      data.optionalAttrs.push(attrInfo);
    }
  }

  // Focus management
  if (analysis.tabindex.has('0') || analysis.tabindex.has('-1')) {
    data.focusManagement = 'Uses tabindex for focus management';
    if (analysis.tabindex.has('-1')) {
      data.notes.push('Uses tabindex="-1" for programmatic focus');
    }
  }

  // Role-specific notes
  if (data.roles.includes('dialog')) {
    data.notes.push('Modal dialogs require focus trap');
    data.notes.push('Use aria-modal="true" for modals');
  }
  if (data.roles.includes('combobox')) {
    data.notes.push('Requires aria-expanded and aria-haspopup');
    data.notes.push('Use aria-activedescendant for active option');
  }
  if (data.roles.includes('tree') || data.roles.includes('treeitem')) {
    data.notes.push('Use aria-level for hierarchy depth');
    data.notes.push('Use aria-expanded for expandable items');
  }

  return data;
}

async function main() {
  console.log('🔍 Extracting accessibility patterns from stories...\n');

  const componentDirs = [];

  // Get main component directories
  if (fs.existsSync(CONFIG.storiesPath)) {
    const dirs = fs.readdirSync(CONFIG.storiesPath, { withFileTypes: true });
    for (const dir of dirs) {
      if (dir.isDirectory() && dir.name !== 'Forms' && dir.name !== 'Icons') {
        componentDirs.push({
          name: dir.name.toLowerCase().replace(/ /g, '-'),
          path: path.join(CONFIG.storiesPath, dir.name),
        });
      }
    }
  }

  // Get Forms subdirectories
  if (fs.existsSync(CONFIG.formsPath)) {
    const formDirs = fs.readdirSync(CONFIG.formsPath, { withFileTypes: true });
    for (const dir of formDirs) {
      if (dir.isDirectory()) {
        componentDirs.push({
          name: dir.name.toLowerCase().replace(/ /g, '-'),
          path: path.join(CONFIG.formsPath, dir.name),
        });
      }
    }
  }

  console.log(`Found ${componentDirs.length} component directories\n`);

  const accessibility = {};
  let withData = 0;
  let withoutData = 0;

  for (const comp of componentDirs) {
    const analysis = analyzeComponent(comp.path, comp.name);
    if (analysis && analysis.fileCount > 0) {
      const data = generateAccessibilityData(analysis, comp.name);
      if (data && (data.roles.length > 0 || data.requiredAttrs.length > 0)) {
        accessibility[comp.name] = data;
        withData++;
        console.log(`✅ ${comp.name}: ${data.roles.length} roles, ${data.requiredAttrs.length + data.optionalAttrs.length} ARIA attrs`);
      } else {
        withoutData++;
      }
    } else {
      withoutData++;
    }
  }

  // Build output
  const output = {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "description": "Accessibility metadata extracted from fundamental-styles story examples",
    "version": "1.0.0",
    "generatedBy": "scripts/generate-accessibility.js",
    "source": "packages/styles/stories/Components/**/*.html",
    "totalComponents": Object.keys(accessibility).length,
    "relatedFiles": {
      "componentCatalog": "docs/component-catalog.json",
      "htmlExamples": "docs/html-examples.json"
    },

    "globalGuidelines": {
      "focusIndicator": "All interactive elements must have visible focus indicator",
      "colorContrast": "Use theme tokens which ensure WCAG AA contrast ratios",
      "semanticHtml": "Use semantic HTML elements when available (button, input, etc.)",
      "labelRequired": "All form inputs need associated labels or aria-label",
      "iconButtons": "Icon-only buttons require aria-label",
      "liveRegions": "Use aria-live for dynamic content updates",
      "highContrastThemes": "Use sap_horizon_hcb/hcw for high contrast mode"
    },

    "commonPatterns": {
      "disabledState": {
        "html": "disabled aria-disabled=\"true\"",
        "note": "Use both disabled attribute AND aria-disabled for full support"
      },
      "requiredField": {
        "html": "required aria-required=\"true\"",
        "note": "Use fd-form-label--required for visual indicator"
      },
      "errorState": {
        "html": "class=\"is-error\" aria-invalid=\"true\" aria-describedby=\"error-id\"",
        "note": "Link input to error message with aria-describedby"
      },
      "expandableControl": {
        "html": "aria-expanded=\"false\" aria-controls=\"panel-id\" aria-haspopup=\"true\"",
        "note": "Update aria-expanded when state changes"
      },
      "selectedItem": {
        "html": "aria-selected=\"true\"",
        "note": "Use on list items, tabs, tree items"
      },
      "decorativeIcon": {
        "html": "aria-hidden=\"true\" role=\"presentation\"",
        "note": "Hide icons that don't convey information"
      }
    },

    "components": accessibility
  };

  // Write output
  fs.writeFileSync(CONFIG.outputFile, JSON.stringify(output, null, 2) + '\n', 'utf8');

  console.log(`\n📊 Summary:`);
  console.log(`   Components with accessibility data: ${withData}`);
  console.log(`   Components without patterns: ${withoutData}`);
  console.log(`\n✅ Generated: ${CONFIG.outputFile}`);
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
