#!/usr/bin/env node

/**
 * Utility Classes JSON Generator
 *
 * Generates a machine-readable JSON file documenting all utility classes
 * from @fundamental-styles/common-css package.
 *
 * Usage: node scripts/generate-utility-classes.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONFIG = {
  outputFile: path.join(__dirname, '../docs/utility-classes.json'),
  verbose: process.argv.includes('--verbose'),
};

const log = {
  info: (msg) => console.log(`ℹ️  ${msg}`),
  success: (msg) => console.log(`✅ ${msg}`),
  error: (msg) => console.error(`❌ ${msg}`),
};

/**
 * Generate all utility class definitions
 * These are derived from the SCSS variables in common-css
 */
function generateUtilityClasses() {
  const sizes = ['tiny', 'small', 'medium', 'large'];
  const sides = ['top', 'bottom', 'begin', 'end', 'x', 'y', 'block-start', 'block-end', 'inline-start', 'inline-end', 'inline', 'block'];

  const utilities = {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    version: '0.41.0',
    generatedBy: 'scripts/generate-utility-classes.js',
    package: '@fundamental-styles/common-css',
    description: 'Utility CSS classes for spacing, layout, typography, and visual styling',

    categories: {},
  };

  // Margin utilities
  utilities.categories.margin = {
    description: 'Spacing utilities for margins',
    prefix: 'sap-margin',
    cssFile: 'sap-margin.css',
    classes: generateSpacingClasses('sap-margin', sizes, sides, {
      responsive: { class: 'sap-margin-responsive', description: 'Responsive margins based on viewport' },
      negative: sizes.map(s => ({ class: `sap-margin-${s}-negative`, description: `Negative horizontal margin (${s})` })),
      none: sides.filter(s => !['x', 'y', 'inline', 'block'].includes(s)).map(s => ({
        class: `sap-margin-${s}-none`,
        description: `Remove ${s} margin`
      })),
    }),
  };

  // Padding utilities
  utilities.categories.padding = {
    description: 'Spacing utilities for padding',
    prefix: 'sap-padding',
    cssFile: 'sap-padding.css',
    classes: [
      { class: 'sap-padding', description: 'Default padding' },
      ...sizes.map(s => ({ class: `sap-padding-x-${s}`, description: `Horizontal padding (${s})` })),
      ...sizes.map(s => ({ class: `sap-padding-inline-${s}`, description: `Inline padding (${s})` })),
      { class: 'sap-padding-responsive', description: 'Responsive padding based on viewport' },
      { class: 'sap-padding-responsive-container', description: 'Responsive container padding' },
      { class: 'sap-padding-none', description: 'Remove all padding' },
    ],
  };

  // Flex utilities
  utilities.categories.flex = {
    description: 'Flexbox layout utilities',
    prefix: 'sap-flex',
    cssFile: 'sap-flex.css',
    classes: [
      // Base
      { class: 'sap-flex', description: 'Enable flexbox (display: flex)' },

      // Direction
      { class: 'sap-flex--row', description: 'Flex direction: row' },
      { class: 'sap-flex--row-reverse', description: 'Flex direction: row-reverse' },
      { class: 'sap-flex--column', description: 'Flex direction: column' },
      { class: 'sap-flex--column-reverse', description: 'Flex direction: column-reverse' },

      // Wrap
      { class: 'sap-flex--nowrap', description: 'No wrapping (default)' },
      { class: 'sap-flex--wrap', description: 'Allow wrapping' },
      { class: 'sap-flex--wrap-reverse', description: 'Wrap in reverse' },

      // Justify content
      ...['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'start', 'end', 'left', 'right'].map(v => ({
        class: `sap-flex--justify-${v}`,
        description: `justify-content: ${v}`,
      })),

      // Align items
      ...['stretch', 'flex-start', 'flex-end', 'center', 'baseline', 'start', 'end', 'self-start', 'self-end'].map(v => ({
        class: `sap-flex--align-items-${v}`,
        description: `align-items: ${v}`,
      })),

      // Align content
      ...['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch', 'start', 'end', 'baseline'].map(v => ({
        class: `sap-flex--align-content-${v}`,
        description: `align-content: ${v}`,
      })),

      // Gap
      ...sizes.map(s => ({ class: `sap-flex--gap-${s}`, description: `Gap between flex items (${s})` })),
      ...sizes.map(s => ({ class: `sap-flex--row-gap-${s}`, description: `Row gap (${s})` })),
      ...sizes.map(s => ({ class: `sap-flex--column-gap-${s}`, description: `Column gap (${s})` })),

      // Center shorthand
      { class: 'sap-flex--center', description: 'Center both axes (justify + align center)' },
      { class: 'sap-flex--center-column', description: 'Center both axes with column direction' },

      // Child properties
      ...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => ({ class: `sap-flex-order-${i}`, description: `Set flex order to ${i}` })),
      ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => ({ class: `sap-flex-grow-${i}`, description: `Set flex-grow to ${i}` })),
      ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => ({ class: `sap-flex-shrink-${i}`, description: `Set flex-shrink to ${i}` })),

      // Align self
      ...['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'].map(v => ({
        class: `sap-flex-align-self-${v}`,
        description: `align-self: ${v}`,
      })),
    ],
  };

  // Display utilities
  const displayTypes = ['inline', 'block', 'contents', 'flex', 'grid', 'inline-block', 'inline-flex', 'inline-grid', 'none'];
  utilities.categories.display = {
    description: 'Display property utilities',
    prefix: 'sap-display',
    cssFile: 'sap-display.css',
    classes: displayTypes.map(type => ({
      class: `sap-display-${type}`,
      description: `display: ${type}`,
    })),
  };

  // Shadow utilities
  utilities.categories.shadow = {
    description: 'Box shadow and text shadow utilities',
    prefix: 'sap-has-shadow',
    cssFile: 'sap-shadow.css',
    classes: [
      // Box shadows (from $sap-box-shadow-types)
      { class: 'sap-has-shadow-level-0', description: 'No shadow (level 0)' },
      { class: 'sap-has-shadow-level-1', description: 'Subtle shadow (level 1)' },
      { class: 'sap-has-shadow-level-2', description: 'Medium shadow (level 2)' },
      { class: 'sap-has-shadow-level-3', description: 'Strong shadow (level 3)' },
      { class: 'sap-has-shadow-header', description: 'Header shadow' },
      { class: 'sap-has-shadow-shell', description: 'Shell shadow' },
      { class: 'sap-has-shadow-none', description: 'Remove shadow' },
      { class: 'sap-has-shadow-interaction', description: 'Interaction shadow' },
      { class: 'sap-has-shadow-selected', description: 'Selected state shadow' },
      { class: 'sap-has-shadow-negative', description: 'Negative/error shadow' },
      { class: 'sap-has-shadow-critical', description: 'Critical/warning shadow' },
      { class: 'sap-has-shadow-positive', description: 'Positive/success shadow' },
      { class: 'sap-has-shadow-informative', description: 'Informative shadow' },
      { class: 'sap-has-shadow-neutral', description: 'Neutral shadow' },
      { class: 'sap-has-shadow-color', description: 'Shadow color utility' },
      { class: 'sap-has-shadow-inverted-color', description: 'Inverted/contrast shadow color' },
      // Text shadows (from $sap-text-shadow-types)
      { class: 'sap-has-shadow-text', description: 'Text shadow' },
      { class: 'sap-has-shadow-contrast-text', description: 'Contrast text shadow' },
      { class: 'sap-has-shadow-group-title-text', description: 'Group title text shadow' },
      { class: 'sap-has-shadow-emphasized-text', description: 'Emphasized text shadow' },
    ],
  };

  // Border radius utilities
  utilities.categories.borderRadius = {
    description: 'Border radius utilities',
    prefix: 'sap-border-radius',
    cssFile: 'sap-border-radius.css',
    classes: [
      { class: 'sap-border-radius-element', description: 'Element border radius' },
      { class: 'sap-border-radius-button', description: 'Button border radius' },
      { class: 'sap-border-radius-field', description: 'Field border radius' },
      { class: 'sap-border-radius-group', description: 'Group border radius' },
      { class: 'sap-border-radius-popover', description: 'Popover border radius' },
      { class: 'sap-border-radius-tile', description: 'Tile border radius' },
    ],
  };

  // Border utilities
  utilities.categories.border = {
    description: 'Border style, width, and color utilities',
    prefix: 'sap-border',
    cssFile: 'sap-border.css',
    classes: [
      // Border styles
      ...['solid', 'dashed', 'dotted', 'double', 'hidden', 'none'].map(style => ({
        class: `sap-border-style-${style}`,
        description: `border-style: ${style}`,
      })),
      // Border widths
      ...['1', '2', '3', '4'].map(w => ({
        class: `sap-border-width-${w}`,
        description: `Border width ${w} (${w === '1' ? '1px' : w === '2' ? '2px' : w === '3' ? '3px' : '4px'})`,
      })),
      // Semantic border colors
      ...['error', 'warning', 'success', 'information', 'neutral'].map(type => ({
        class: `sap-border-color-${type}`,
        description: `${type.charAt(0).toUpperCase() + type.slice(1)} border color`,
      })),
    ],
  };

  // Typography utilities
  utilities.categories.typography = {
    description: 'Font family, size, and weight utilities',
    prefix: 'sap-font',
    cssFile: 'sap-typography.css',
    classes: [
      // Font families
      { class: 'sap-font-regular', description: 'Regular font family' },
      { class: 'sap-font-light', description: 'Light font family' },
      { class: 'sap-font-bold', description: 'Bold font family' },
      { class: 'sap-font-semibold', description: 'Semibold font family' },
      { class: 'sap-font-header', description: 'Header font family' },
      // Font sizes
      { class: 'sap-font-size-small', description: 'Small font size' },
      { class: 'sap-font-size-medium', description: 'Medium font size (default)' },
      { class: 'sap-font-size-large', description: 'Large font size' },
      ...['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map(h => ({
        class: `sap-font-size-header-${h.slice(1)}`,
        description: `Header ${h.slice(1)} font size`,
      })),
    ],
  };

  // Heading utilities
  utilities.categories.heading = {
    description: 'Heading style utilities',
    prefix: 'sap-heading',
    cssFile: 'sap-heading.css',
    classes: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map(h => ({
      class: `sap-heading-${h}`,
      description: `Heading ${h.slice(1)} style`,
    })),
  };

  // Elevation utilities
  utilities.categories.elevation = {
    description: 'Elevation/z-index utilities',
    prefix: 'sap-elevation',
    cssFile: 'sap-elevation.css',
    classes: [
      { class: 'sap-elevation-level-0', description: 'Base level (no elevation)' },
      { class: 'sap-elevation-level-1', description: 'Level 1 elevation' },
      { class: 'sap-elevation-level-2', description: 'Level 2 elevation' },
      { class: 'sap-elevation-level-3', description: 'Level 3 elevation (dialogs)' },
    ],
  };

  // Position utilities
  utilities.categories.position = {
    description: 'CSS position utilities',
    prefix: 'sap-position',
    cssFile: 'sap-position.css',
    classes: ['static', 'fixed', 'absolute', 'relative', 'sticky'].map(pos => ({
      class: `sap-position-${pos}`,
      description: `position: ${pos}`,
    })),
  };

  // Overflow utilities
  utilities.categories.overflow = {
    description: 'Overflow behavior utilities',
    prefix: 'sap-overflow',
    cssFile: 'sap-overflow.css',
    classes: [
      { class: 'sap-overflow-visible', description: 'overflow: visible' },
      { class: 'sap-overflow-hidden', description: 'overflow: hidden' },
      { class: 'sap-overflow-scroll', description: 'overflow: scroll' },
      { class: 'sap-overflow-auto', description: 'overflow: auto' },
      { class: 'sap-overflow-x-hidden', description: 'overflow-x: hidden' },
      { class: 'sap-overflow-y-hidden', description: 'overflow-y: hidden' },
      { class: 'sap-overflow-x-auto', description: 'overflow-x: auto' },
      { class: 'sap-overflow-y-auto', description: 'overflow-y: auto' },
    ],
  };

  // Screen reader only
  utilities.categories.accessibility = {
    description: 'Accessibility utilities',
    prefix: 'sap-sr',
    cssFile: 'sap-sr-only.css',
    classes: [
      { class: 'sap-sr-only', description: 'Visually hidden but accessible to screen readers' },
    ],
  };

  // Add statistics
  let totalClasses = 0;
  for (const category of Object.values(utilities.categories)) {
    totalClasses += category.classes.length;
  }

  utilities.statistics = {
    totalCategories: Object.keys(utilities.categories).length,
    totalClasses: totalClasses,
  };

  return utilities;
}

/**
 * Generate spacing classes (margin/padding)
 */
function generateSpacingClasses(prefix, sizes, sides, extras = {}) {
  const classes = [];

  // Base sizes (all sides)
  for (const size of sizes) {
    classes.push({
      class: `${prefix}-${size}`,
      description: `${size} spacing on all sides`,
    });
  }

  // Size + side combinations
  for (const size of sizes) {
    for (const side of sides) {
      // Skip compound sides for cleaner output
      if (['block-start', 'block-end', 'inline-start', 'inline-end', 'inline', 'block'].includes(side)) continue;
      classes.push({
        class: `${prefix}-${side}-${size}`,
        description: `${size} spacing on ${side}`,
      });
    }
  }

  // Add extras
  if (extras.responsive) {
    classes.push(extras.responsive);
  }
  if (extras.negative) {
    classes.push(...extras.negative);
  }
  if (extras.none) {
    classes.push(...extras.none);
  }

  return classes;
}

/**
 * Main function
 */
async function main() {
  console.log('🔧 Generating utility classes JSON...\n');

  try {
    const utilities = generateUtilityClasses();

    // Write JSON file
    fs.writeFileSync(
      CONFIG.outputFile,
      JSON.stringify(utilities, null, 2),
      'utf8'
    );

    log.success(`Generated: ${CONFIG.outputFile}`);
    log.info(`Categories: ${utilities.statistics.totalCategories}`);
    log.info(`Total classes: ${utilities.statistics.totalClasses}`);

    console.log('\n✅ Utility classes JSON generation complete!');

  } catch (error) {
    log.error(`Generation failed: ${error.message}`);
    process.exit(1);
  }
}

main();
