#!/usr/bin/env node

/**
 * Generate Design Tokens JSON
 *
 * Extracts --sap* CSS variables from the theming base content
 * and organizes them into categories for AI agent consumption.
 *
 * Usage: node scripts/generate-design-tokens.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONFIG = {
  themingFile: path.join(__dirname, '../node_modules/@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon/css_variables.css'),
  outputFile: path.join(__dirname, '../docs/design-tokens.json'),
};

// Categories for organizing tokens
const CATEGORIES = {
  // Core colors
  'brand': { pattern: /^--sap(Brand|Base|Highlight|Active|Selected)/, description: 'Brand and highlight colors' },
  'background': { pattern: /^--sapBackground/, description: 'Page and container backgrounds' },
  'text': { pattern: /^--sap(Text|Title|Link|Content_Label|Content_Contrast)/, description: 'Text and label colors' },

  // Semantic colors
  'semantic': { pattern: /^--sap(Positive|Negative|Critical|Informative|Neutral|Error|Warning|Success|Information)(?!.*Button)/, description: 'Semantic status colors' },
  'indication': { pattern: /^--sapIndication/, description: 'Indication colors (1-8)' },
  'accent': { pattern: /^--sapAccent/, description: 'Accent colors (1-10)' },

  // Component-specific
  'button': { pattern: /^--sapButton/, description: 'Button colors and styles' },
  'field': { pattern: /^--sapField/, description: 'Form field colors and borders' },
  'list': { pattern: /^--sapList/, description: 'List and table colors' },
  'group': { pattern: /^--sapGroup/, description: 'Group and panel colors' },
  'tile': { pattern: /^--sapTile/, description: 'Tile and card colors' },
  'shell': { pattern: /^--sapShell/, description: 'Shell and navigation colors' },
  'toolbar': { pattern: /^--sapToolbar/, description: 'Toolbar colors' },
  'popover': { pattern: /^--sapPopover/, description: 'Popover and dialog colors' },
  'avatar': { pattern: /^--sapAvatar/, description: 'Avatar colors (1-10)' },

  // Typography
  'font': { pattern: /^--sapFont/, description: 'Font families and sizes' },

  // Spacing and sizing
  'element': { pattern: /^--sapElement/, description: 'Element heights and borders' },
  'content': { pattern: /^--sapContent(?!_)/, description: 'Content spacing and dimensions' },
  'content_ui': { pattern: /^--sapContent_/, description: 'Content UI elements (icons, shadows, focus)' },

  // Layout
  'page': { pattern: /^--sapPage/, description: 'Page header and footer' },
  'object': { pattern: /^--sapObject/, description: 'Object header colors' },
  'infobar': { pattern: /^--sapInfobar/, description: 'Infobar colors' },

  // Other
  'scrollbar': { pattern: /^--sapScrollBar/, description: 'Scrollbar colors' },
  'slider': { pattern: /^--sapSlider/, description: 'Slider colors' },
  'progress': { pattern: /^--sapProgress/, description: 'Progress indicator colors' },
  'message': { pattern: /^--sapMessage/, description: 'Message colors' },
  'chart': { pattern: /^--sapChart/, description: 'Chart colors' },
  'legend': { pattern: /^--sapLegend/, description: 'Legend colors' },
  'assistant': { pattern: /^--sapAssistant/, description: 'AI Assistant colors' },
};

function parseTokensFromCSS(cssContent) {
  const tokens = {};
  const tokenRegex = /--sap[A-Za-z_0-9]+\s*:\s*([^;]+);/g;
  let match;

  while ((match = tokenRegex.exec(cssContent)) !== null) {
    const fullMatch = match[0];
    const varNameMatch = fullMatch.match(/--sap[A-Za-z_0-9]+/);
    if (varNameMatch) {
      const varName = varNameMatch[0];
      const value = match[1].trim();
      tokens[varName] = value;
    }
  }

  return tokens;
}

function categorizeTokens(tokens) {
  const categorized = {};
  const uncategorized = [];

  // Initialize categories
  for (const [category, config] of Object.entries(CATEGORIES)) {
    categorized[category] = {
      description: config.description,
      tokens: []
    };
  }

  // Categorize each token
  for (const [varName, value] of Object.entries(tokens)) {
    let found = false;

    for (const [category, config] of Object.entries(CATEGORIES)) {
      if (config.pattern.test(varName)) {
        categorized[category].tokens.push({
          name: varName,
          value: value,
          cssUsage: `var(${varName})`
        });
        found = true;
        break;
      }
    }

    if (!found) {
      uncategorized.push({ name: varName, value });
    }
  }

  // Sort tokens within each category
  for (const category of Object.values(categorized)) {
    category.tokens.sort((a, b) => a.name.localeCompare(b.name));
  }

  return { categorized, uncategorized };
}

function getMostUsefulTokens() {
  return {
    "Essential Tokens (Most Used)": {
      description: "The most commonly needed design tokens for basic styling",
      tokens: [
        { name: "--sapBackgroundColor", purpose: "Page background", cssUsage: "background-color: var(--sapBackgroundColor)" },
        { name: "--sapTextColor", purpose: "Primary text color", cssUsage: "color: var(--sapTextColor)" },
        { name: "--sapLinkColor", purpose: "Link color", cssUsage: "color: var(--sapLinkColor)" },
        { name: "--sapBrandColor", purpose: "Brand/primary color", cssUsage: "color: var(--sapBrandColor)" },
        { name: "--sapPositiveColor", purpose: "Success/green", cssUsage: "color: var(--sapPositiveColor)" },
        { name: "--sapNegativeColor", purpose: "Error/red", cssUsage: "color: var(--sapNegativeColor)" },
        { name: "--sapCriticalColor", purpose: "Warning/orange", cssUsage: "color: var(--sapCriticalColor)" },
        { name: "--sapInformativeColor", purpose: "Info/blue", cssUsage: "color: var(--sapInformativeColor)" },
        { name: "--sapNeutralColor", purpose: "Neutral/gray", cssUsage: "color: var(--sapNeutralColor)" },
        { name: "--sapGroup_ContentBackground", purpose: "Card/panel background", cssUsage: "background-color: var(--sapGroup_ContentBackground)" },
        { name: "--sapContent_LabelColor", purpose: "Label text color", cssUsage: "color: var(--sapContent_LabelColor)" },
        { name: "--sapFontFamily", purpose: "Default font", cssUsage: "font-family: var(--sapFontFamily)" },
        { name: "--sapFontSize", purpose: "Default font size", cssUsage: "font-size: var(--sapFontSize)" },
        { name: "--sapElement_Height", purpose: "Standard element height", cssUsage: "height: var(--sapElement_Height)" },
        { name: "--sapElement_Compact_Height", purpose: "Compact element height", cssUsage: "height: var(--sapElement_Compact_Height)" },
        { name: "--sapButton_BorderCornerRadius", purpose: "Button border radius", cssUsage: "border-radius: var(--sapButton_BorderCornerRadius)" },
        { name: "--sapField_BorderCornerRadius", purpose: "Input field radius", cssUsage: "border-radius: var(--sapField_BorderCornerRadius)" },
        { name: "--sapContent_Shadow1", purpose: "Light shadow", cssUsage: "box-shadow: var(--sapContent_Shadow1)" },
        { name: "--sapContent_Shadow2", purpose: "Medium shadow", cssUsage: "box-shadow: var(--sapContent_Shadow2)" },
        { name: "--sapContent_FocusColor", purpose: "Focus outline color", cssUsage: "outline-color: var(--sapContent_FocusColor)" },
      ]
    }
  };
}

async function main() {
  console.log('Generating design tokens JSON...\n');

  // Check if theming file exists
  if (!fs.existsSync(CONFIG.themingFile)) {
    console.error('Error: Theming file not found. Run npm install first.');
    console.error('Expected:', CONFIG.themingFile);
    process.exit(1);
  }

  // Read and parse CSS
  const cssContent = fs.readFileSync(CONFIG.themingFile, 'utf8');
  const tokens = parseTokensFromCSS(cssContent);

  console.log(`Found ${Object.keys(tokens).length} design tokens\n`);

  // Categorize tokens
  const { categorized, uncategorized } = categorizeTokens(tokens);

  // Get most useful tokens
  const essentialTokens = getMostUsefulTokens();

  // Build output
  const output = {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "description": "SAP Design Tokens (CSS Custom Properties) for fundamental-styles theming",
    "version": "1.0.0",
    "generatedBy": "scripts/generate-design-tokens.js",
    "source": "@sap-theming/theming-base-content (sap_horizon)",
    "totalTokens": Object.keys(tokens).length,
    "relatedFiles": {
      "componentCatalog": "docs/component-catalog.json",
      "utilityClasses": "docs/utility-classes.json"
    },

    ...essentialTokens,

    "categories": categorized,

    "themes": {
      "description": "Available theme files",
      "files": [
        { "name": "sap_horizon", "file": "sap_horizon.css", "description": "Default light theme (Horizon)" },
        { "name": "sap_horizon_dark", "file": "sap_horizon_dark.css", "description": "Dark theme (Horizon Dark)" },
        { "name": "sap_horizon_hcb", "file": "sap_horizon_hcb.css", "description": "High Contrast Black" },
        { "name": "sap_horizon_hcw", "file": "sap_horizon_hcw.css", "description": "High Contrast White" },
        { "name": "sap_fiori_3", "file": "sap_fiori_3.css", "description": "Fiori 3 (legacy)" },
        { "name": "sap_fiori_3_dark", "file": "sap_fiori_3_dark.css", "description": "Fiori 3 Dark (legacy)" }
      ]
    },

    "usage": {
      "description": "How to use design tokens",
      "examples": [
        {
          "title": "Custom CSS with tokens",
          "code": ".my-component {\n  background: var(--sapGroup_ContentBackground);\n  color: var(--sapTextColor);\n  border-radius: var(--sapElement_BorderCornerRadius);\n  box-shadow: var(--sapContent_Shadow1);\n}"
        },
        {
          "title": "Semantic colors for states",
          "code": ".success { color: var(--sapPositiveColor); }\n.error { color: var(--sapNegativeColor); }\n.warning { color: var(--sapCriticalColor); }\n.info { color: var(--sapInformativeColor); }"
        }
      ]
    }
  };

  // Write output
  fs.writeFileSync(CONFIG.outputFile, JSON.stringify(output, null, 2) + '\n', 'utf8');

  // Print summary
  console.log('Categories:');
  for (const [name, data] of Object.entries(categorized)) {
    if (data.tokens.length > 0) {
      console.log(`  ${name}: ${data.tokens.length} tokens`);
    }
  }

  if (uncategorized.length > 0) {
    console.log(`  uncategorized: ${uncategorized.length} tokens`);
  }

  console.log(`\n✅ Generated: ${CONFIG.outputFile}`);
  console.log(`   Total: ${Object.keys(tokens).length} tokens`);
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
