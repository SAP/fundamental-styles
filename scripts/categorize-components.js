#!/usr/bin/env node

/**
 * Categorize Components Script
 *
 * Automatically categorizes components in component-catalog.json based on their purpose and type.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CATALOG_FILE = path.join(__dirname, '../docs/component-catalog.json');

// Category mappings based on component purpose
const CATEGORIZATION = {
  // Interactive Elements & Buttons
  'buttons': [
    'button', 'button-split', 'segmented-button', 'menu'
  ],

  // Form Components & Input
  'form-inputs': [
    'input', 'textarea', 'checkbox', 'radio', 'select', 'switch',
    'slider', 'step-input', 'file-uploader', 'rating-indicator',
    'search-field', 'input-group'
  ],

  // Form Layout & Structure
  'form-layout': [
    'form-item', 'form-label', 'form-group', 'form-header',
    'form-layout-grid', 'form-message', 'fieldset'
  ],

  // Data Display & Tables
  'data-display': [
    'table', 'list', 'grid-list', 'object-list', 'tree'
  ],

  // Date & Time
  'date-time': [
    'calendar', 'time', 'timepicker'
  ],

  // Navigation Components
  'navigation': [
    'link', 'breadcrumb', 'pagination', 'tabs', 'icon-tab-bar',
    'navigation', 'navigation-list', 'navigation-menu', 'side-nav',
    'vertical-nav', 'horizontal-navigation', 'shellbar'
  ],

  // Layout Components
  'layout': [
    'layout', 'layout-grid', 'layout-panel', 'splitter',
    'dynamic-side-content', 'flexible-column-layout',
    'fixed-card-layout', 'resizable-card-layout', 'tool-layout'
  ],

  // Containers & Cards
  'containers': [
    'card', 'panel', 'tile', 'facet', 'section', 'page', 'page-footer'
  ],

  // Dialogs & Overlays
  'dialogs': [
    'dialog', 'popover', 'message-popover', 'message-box',
    'quick-view'
  ],

  // Feedback & Notifications
  'feedback': [
    'alert', 'message-strip', 'message-toast', 'notification',
    'message-page', 'illustrated-message', 'busy-indicator',
    'progress-indicator', 'status-indicator', 'skeleton'
  ],

  // Visual Elements
  'visual': [
    'icon', 'avatar', 'avatar-group', 'badge', 'counter',
    'object-status', 'object-identifier', 'object-number',
    'info-label'
  ],

  // Tags & Tokens
  'tags': [
    'token', 'tokenizer', 'generic-tag', 'object-marker'
  ],

  // Business Objects & Data
  'business-objects': [
    'object-attribute', 'numeric-content'
  ],

  // Social & Feed
  'social': [
    'feed-input', 'feed-list'
  ],

  // Toolbars & Actions
  'toolbars': [
    'toolbar', 'action-bar', 'action-sheet', 'bar', 'title-bar',
    'tool-header'
  ],

  // Typography & Text
  'typography': [
    'text', 'title', 'code'
  ],

  // AI Components
  'ai-components': [
    'ai-busy-indicator', 'ai-loading-bar', 'ai-text',
    'ai-writing-assistant', 'ai-writing-assistant-versioning',
    'prompt-input'
  ],

  // Specialized Components
  'specialized': [
    'carousel', 'wizard', 'micro-process-flow', 'product-switch',
    'settings', 'user-menu', 'variant-management', 'upload-collection',
    'dynamic-page'
  ],

  // Utility Components
  'utilities': [
    'scrollbar', 'margins', 'paddings', 'helpers', 'off-screen'
  ],
};

// Subcategory mappings (more specific classification)
const SUBCATEGORIES = {
  // Buttons
  'button': 'action',
  'button-split': 'action',
  'segmented-button': 'selection',
  'menu': 'action',

  // Form Inputs
  'input': 'text',
  'textarea': 'text',
  'checkbox': 'selection',
  'radio': 'selection',
  'select': 'selection',
  'switch': 'toggle',
  'slider': 'numeric',
  'step-input': 'numeric',
  'rating-indicator': 'numeric',
  'search-field': 'search',
  'file-uploader': 'file',
  'input-group': 'composite',

  // Data Display
  'table': 'grid',
  'list': 'list',
  'grid-list': 'grid',
  'object-list': 'list',
  'tree': 'hierarchical',

  // Navigation
  'link': 'inline',
  'breadcrumb': 'hierarchical',
  'pagination': 'page',
  'tabs': 'tabs',
  'icon-tab-bar': 'tabs',
  'navigation-list': 'list',
  'side-nav': 'sidebar',
  'shellbar': 'header',

  // Dialogs
  'dialog': 'modal',
  'popover': 'popup',
  'message-box': 'confirmation',

  // Feedback
  'alert': 'banner',
  'message-strip': 'inline',
  'notification': 'toast',
  'busy-indicator': 'loading',
  'progress-indicator': 'loading',
};

function categorizeComponents() {
  console.log('📂 Categorizing components...\n');

  // Load catalog
  const catalog = JSON.parse(fs.readFileSync(CATALOG_FILE, 'utf8'));
  const components = catalog.packages['fundamental-styles'].components;

  // Create reverse lookup: component ID -> category
  const componentToCategory = {};
  const componentToSubcategory = {};

  for (const [category, componentIds] of Object.entries(CATEGORIZATION)) {
    for (const id of componentIds) {
      componentToCategory[id] = category;
      componentToSubcategory[id] = SUBCATEGORIES[id] || null;
    }
  }

  // Categorize each component
  let categorized = 0;
  let alreadyCategorized = 0;

  for (const component of components) {
    if (component.category !== 'uncategorized') {
      alreadyCategorized++;
      continue;
    }

    const category = componentToCategory[component.id];
    const subcategory = componentToSubcategory[component.id];

    if (category) {
      component.category = category;
      component.subcategory = subcategory;
      categorized++;
      console.log(`✅ ${component.id}: ${category}${subcategory ? '/' + subcategory : ''}`);
    } else {
      console.log(`⚠️  ${component.id}: no category mapping (left as uncategorized)`);
    }
  }

  // Save updated catalog
  fs.writeFileSync(CATALOG_FILE, JSON.stringify(catalog, null, 2), 'utf8');

  console.log(`\n📊 Summary:`);
  console.log(`  Newly categorized: ${categorized}`);
  console.log(`  Already categorized: ${alreadyCategorized}`);
  console.log(`  Total: ${categorized + alreadyCategorized}/${components.length}`);
  console.log(`  Remaining uncategorized: ${components.length - categorized - alreadyCategorized}`);
  console.log(`\n✅ Categorization complete!`);
  console.log(`📄 Updated: ${CATALOG_FILE}`);
}

categorizeComponents();
