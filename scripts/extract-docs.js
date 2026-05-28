#!/usr/bin/env node

/**
 * Extract component documentation from Storybook stories
 * Generates AI-consumable markdown files from .stories.js files
 */

import fs from 'fs';
import path from 'path';
import glob from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Output directory
const OUTPUT_DIR = path.join(__dirname, '..', 'docs', 'components');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Extract design tokens from SCSS file
 */
function extractDesignTokens(scssFilePath) {
    if (!fs.existsSync(scssFilePath)) return [];

    const content = fs.readFileSync(scssFilePath, 'utf-8');
    const tokens = new Set();

    // Extract CSS variables (--varName)
    const cssVarRegex = /--([a-zA-Z][a-zA-Z0-9_-]*)/g;
    let match;
    while ((match = cssVarRegex.exec(content)) !== null) {
        tokens.add(`--${match[1]}`);
    }

    // Extract SAP design tokens (var(--sapTokenName))
    const sapTokenRegex = /var\(--sap([a-zA-Z][a-zA-Z0-9_]*)\)/g;
    while ((match = sapTokenRegex.exec(content)) !== null) {
        tokens.add(`--sap${match[1]}`);
    }

    return Array.from(tokens).sort();
}

/**
 * Extract JSDoc comments for modifiers and classes
 */
function extractJSDocComments(scssFilePath) {
    if (!fs.existsSync(scssFilePath)) return {};

    const content = fs.readFileSync(scssFilePath, 'utf-8');
    const comments = {};

    // Match JSDoc-style comments before class definitions  (&--modifier)
    const jsdocRegex = /\/\*\*\s*([\s\S]*?)\*\/\s*(?:\.|&--([a-z-]+))/g;
    let match;

    while ((match = jsdocRegex.exec(content)) !== null) {
        const [, commentText, className] = match;
        if (className) {
            // Clean up the comment text
            const cleaned = commentText
                .split('\n')
                .map(line => line.replace(/^\s*\*\s?/, '').trim())
                .filter(line => line.length > 0)
                .join(' ');

            if (cleaned.length > 0) {
                comments[className] = cleaned;
            }
        }
    }

    // Also check the button-types mixin file for type modifiers
    const mixinPath = scssFilePath.replace(/([^/]+)\.scss$/, 'mixins/$1/_$1-types.scss');
    if (fs.existsSync(mixinPath)) {
        const mixinContent = fs.readFileSync(mixinPath, 'utf-8');

        // Match JSDoc before quoted button type names in config maps
        // Pattern: /** comment */ "typename": (
        const typeJsdocRegex = /\/\*\*\s*([\s\S]*?)\*\/\s*"([a-z-]+)":\s*\(/g;
        let typeMatch;

        while ((typeMatch = typeJsdocRegex.exec(mixinContent)) !== null) {
            const [, commentText, typeName] = typeMatch;
            const cleaned = commentText
                .split('\n')
                .map(line => line.replace(/^\s*\*\s?/, '').trim())
                .filter(line => line.length > 0)
                .join(' ');

            if (cleaned.length > 0 && !comments[typeName]) {
                comments[typeName] = cleaned;
            }
        }
    }

    return comments;
}

/**
 * Extract related components from story file
 */
function extractRelatedComponents(content) {
    const related = new Set();

    // Extract from import statements
    const importRegex = /import\s+['"`]\.\.\/\.\.\/\.\.\/src\/([a-z-]+)\.scss['"`]/g;
    let match;

    while ((match = importRegex.exec(content)) !== null) {
        const component = match[1];
        // Skip mixins, settings, and common files
        if (!component.startsWith('_') &&
            !component.includes('mixin') &&
            !component.includes('setting') &&
            !component.includes('common')) {
            related.add(component);
        }
    }

    return Array.from(related).sort();
}

/**
 * Extract structure information from description
 */
function extractStructure(description) {
    const structureMatch = description.match(/##\s*Structure\s+([\s\S]*?)(?=\n##|$)/);
    if (!structureMatch) return null;

    const structureText = structureMatch[1].trim();

    // Extract BEM elements and modifiers from structure section
    const elements = [];
    const modifiers = [];

    const lines = structureText.split('\n');
    for (const line of lines) {
        // Look for element patterns: `fd-component__element`
        const elementMatch = line.match(/`(fd-[a-z-]+__[a-z-]+)`/);
        if (elementMatch) {
            elements.push(elementMatch[1]);
        }

        // Look for modifier patterns: `fd-component--modifier`
        const modifierMatch = line.match(/`(fd-[a-z-]+--[a-z-]+)`/);
        if (modifierMatch) {
            modifiers.push(modifierMatch[1]);
        }
    }

    return {
        text: structureText,
        elements: [...new Set(elements)],
        modifiers: [...new Set(modifiers)]
    };
}

/**
 * Extract component version/stability info
 */
function extractStability(content, category, tags) {
    // Check if component is deprecated
    const isDeprecated = category.toLowerCase().includes('deprecated') ||
                        tags.some(tag => tag.toLowerCase().includes('deprecated')) ||
                        content.toLowerCase().includes('@deprecated');

    // Check if it's experimental/dev
    const isExperimental = category.toLowerCase() === 'dev' ||
                          tags.some(tag => tag.toLowerCase().includes('experimental')) ||
                          content.toLowerCase().includes('@experimental');

    return {
        status: isDeprecated ? 'deprecated' : (isExperimental ? 'experimental' : 'stable'),
        isDeprecated,
        isExperimental
    };
}

/**
 * Parse a story file and extract component information
 */
function parseStoryFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const relativePath = path.relative(process.cwd(), filePath);

    // Extract component info from file structure
    const pathParts = filePath.split(path.sep);
    const fileName = path.basename(filePath, '.stories.js');

    // Determine component category (Components, BTP, Patterns, etc.)
    const storiesIndex = pathParts.indexOf('stories');
    const category = storiesIndex >= 0 ? pathParts[storiesIndex + 1] : 'Unknown';
    const subcategory = storiesIndex >= 0 && pathParts[storiesIndex + 2] ? pathParts[storiesIndex + 2] : '';

    // Extract title from export default
    const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
    const title = titleMatch ? titleMatch[1] : fileName;

    // Extract main description from parameters
    const descriptionMatch = content.match(/description:\s*`([^`]+)`/s);
    const description = descriptionMatch ? descriptionMatch[1].trim() : '';

    // Extract tags from parameters
    const tags = [];
    const tagsMatch = content.match(/tags:\s*\[([^\]]+)\]/);
    if (tagsMatch) {
        const tagsList = tagsMatch[1].split(',').map(t => t.trim().replace(/['"]/g, ''));
        tags.push(...tagsList);
    }

    // Extract CSS/SCSS imports (dependencies)
    const dependencies = [];
    const importCSSRegex = /import\s+['"`]\.\.\/\.\.\/\.\.\/src\/([^'"`]+\.scss)['"`]/g;
    let cssMatch;
    while ((cssMatch = importCSSRegex.exec(content)) !== null) {
        const depFile = cssMatch[1];
        if (!depFile.startsWith('_')) { // Skip partials
            dependencies.push(depFile.replace('.scss', ''));
        }
    }

    // Extract usage guidelines from description
    const usageMatch = description.match(/##Usage\s+([\s\S]*?)(?=\n##|\n\*\*|$)/);
    const usage = usageMatch ? usageMatch[1].trim() : '';

    // Extract "Do not use" guidelines
    const doNotUseMatch = description.match(/\*\*Do not use[^:]*:\*\*\s+([\s\S]*?)(?=\n##|\n\*\*Use|$)/);
    const doNotUse = doNotUseMatch ? doNotUseMatch[1].trim() : '';

    // NEW: Extract structure information
    const structure = extractStructure(description);

    // NEW: Extract stability/status
    const stability = extractStability(content, category, tags);

    // NEW: Extract related components
    const relatedComponents = extractRelatedComponents(content);

    // Extract all HTML example imports
    const htmlImports = [];
    const importRegex = /import\s+(\w+).*?from\s+['"`]\.\/([^'"`]+\.html)\?raw['"`]/g;
    let importMatch;
    while ((importMatch = importRegex.exec(content)) !== null) {
        const [, varName, htmlFile] = importMatch;
        const htmlPath = path.join(path.dirname(filePath), htmlFile);
        if (fs.existsSync(htmlPath)) {
            htmlImports.push({
                varName,
                htmlFile,
                htmlPath,
                content: fs.readFileSync(htmlPath, 'utf-8')
            });
        }
    }

    // Extract story exports and their descriptions
    const stories = [];

    // Pattern: export const Name = () => htmlVar;
    const simpleExportRegex = /export const (\w+) = \(\) => (\w+);/g;
    let match;
    const exportMap = new Map();

    while ((match = simpleExportRegex.exec(content)) !== null) {
        const [, exportName, htmlVar] = match;
        exportMap.set(exportName, { exportName, htmlVar });
    }

    // Extract story names and descriptions for each export
    exportMap.forEach((data, exportName) => {
        // Find storyName
        const storyNameRegex = new RegExp(`${exportName}\\.storyName = ['"\`]([^'"\`]+)['"\`]`);
        const storyNameMatch = content.match(storyNameRegex);
        const storyName = storyNameMatch ? storyNameMatch[1] : exportName;

        // Find description (try backtick format first)
        const descRegex = new RegExp(`${exportName}\\.parameters = \\{[^}]*docs:\\s*\\{[^}]*description:\\s*\\{[^}]*story:\\s*\`([^\`]+)\``, 's');
        const descMatch = content.match(descRegex);
        let storyDescription = descMatch ? descMatch[1].trim() : '';

        // Try single/double quote format
        if (!storyDescription) {
            const descRegex2 = new RegExp(`${exportName}\\.parameters = \\{[^}]*docs:\\s*\\{[^}]*description:\\s*\\{[^}]*story:\\s*['"]([^'"]+)['"]`, 's');
            const descMatch2 = content.match(descRegex2);
            storyDescription = descMatch2 ? descMatch2[1].trim() : '';
        }

        const htmlImport = htmlImports.find(imp => imp.varName === data.htmlVar);

        stories.push({
            exportName: data.exportName,
            storyName,
            description: storyDescription,
            html: htmlImport ? htmlImport.content : null,
            htmlFile: htmlImport ? htmlImport.htmlFile : null
        });
    });

    // Extract component selector (fd-*)
    let selector = '';
    if (htmlImports.length > 0) {
        const firstHtml = htmlImports[0].content;
        const selectorMatch = firstHtml.match(/class="(fd-[a-z-]+)(?:\s|")/);
        selector = selectorMatch ? selectorMatch[1] : '';
    }

    // Extract modifiers from HTML examples with enhanced descriptions
    const modifiers = new Map(); // Use Map to store modifier -> description
    htmlImports.forEach(imp => {
        if (selector) {
            const modifierRegex = new RegExp(`${selector}--([a-z-]+)`, 'g');
            let modMatch;
            while ((modMatch = modifierRegex.exec(imp.content)) !== null) {
                const modName = modMatch[1];
                if (!modifiers.has(modName)) {
                    modifiers.set(modName, null); // Will be filled from story descriptions
                }
            }
        }
    });

    // Match modifiers to story descriptions
    stories.forEach(story => {
        if (story.description) {
            modifiers.forEach((_, modName) => {
                // Check if story mentions this modifier
                if (story.storyName.toLowerCase().includes(modName) ||
                    story.description.toLowerCase().includes(modName) ||
                    story.description.toLowerCase().includes(modName.replace(/-/g, ' '))) {

                    // Extract first sentence as description
                    const sentences = story.description.split(/[.!?]\s/);
                    if (sentences.length > 0 && !modifiers.get(modName)) {
                        modifiers.set(modName, sentences[0].trim());
                    }
                }
            });
        }
    });

    // Extract state classes (is-*)
    const states = new Set();
    htmlImports.forEach(imp => {
        const stateRegex = /\bis-([a-z-]+)/g;
        let stateMatch;
        while ((stateMatch = stateRegex.exec(imp.content)) !== null) {
            states.add(stateMatch[1]);
        }
    });

    // NEW: Extract BEM elements from HTML (fd-component__element)
    const elements = new Set();
    htmlImports.forEach(imp => {
        if (selector) {
            const elementRegex = new RegExp(`${selector}__([a-z-]+)`, 'g');
            let elementMatch;
            while ((elementMatch = elementRegex.exec(imp.content)) !== null) {
                elements.add(elementMatch[1]);
            }
        }
    });

    // NEW: Try to find and parse SCSS file for design tokens and JSDoc comments
    let designTokens = [];
    let jsdocComments = {};
    const scssPath = path.join(path.dirname(filePath), '..', '..', '..', 'src', `${selector ? selector.replace('fd-', '') : fileName}.scss`);
    if (fs.existsSync(scssPath)) {
        designTokens = extractDesignTokens(scssPath);
        jsdocComments = extractJSDocComments(scssPath);
    }

    // Enhance modifier descriptions with JSDoc comments
    const enhancedModifiers = Array.from(modifiers.entries()).map(([name, desc]) => {
        const jsdocDesc = jsdocComments[name];
        return {
            name,
            description: jsdocDesc || desc || 'Style variant'
        };
    }).sort((a, b) => a.name.localeCompare(b.name));

    return {
        fileName,
        title,
        category,
        subcategory,
        selector,
        description,
        usage,
        doNotUse,
        tags,
        dependencies: Array.from(new Set(dependencies)).sort(),
        stories,
        modifiers: enhancedModifiers,
        states: Array.from(states).sort(),
        elements: Array.from(elements).sort(),
        sourcePath: relativePath,
        cssFile: selector ? `${selector.replace('fd-', '')}.css` : '',
        // NEW metadata fields
        structure: structure || { text: '', elements: [], modifiers: [] },
        stability: stability.status,
        isDeprecated: stability.isDeprecated,
        isExperimental: stability.isExperimental,
        relatedComponents: relatedComponents,
        designTokens: designTokens.slice(0, 20), // Limit to top 20 most relevant tokens
        hasJSDocComments: Object.keys(jsdocComments).length > 0
    };
}

/**
 * Clean HTML by removing documentation-specific wrappers and markup
 */
function cleanHTML(html) {
    let cleaned = html;

    // Remove all fddocs container divs with any classes and inline styles
    // Pattern: <div class="fddocs-*" ...>
    cleaned = cleaned.replace(/<div[^>]*class="[^"]*fddocs-[^"]*"[^>]*>[\s\n]*/g, '');

    // Remove closing divs with fddocs comments
    cleaned = cleaned.replace(/[\s\n]*<\/div>[\s\n]*<!--\s*\.fddocs[^>]*-->/g, '');

    // Remove <br> tags used for spacing in demos
    cleaned = cleaned.replace(/<br\s*\/?>\s*/g, '');

    // Split into lines for more granular processing
    const lines = cleaned.split('\n');
    const processedLines = [];
    let skipDepth = 0;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();

        // Skip empty lines at the start
        if (processedLines.length === 0 && trimmed === '') {
            continue;
        }

        // Skip h1-h6 headers that are just demo labels
        if (trimmed.match(/^<h[1-6][^>]*>(?:Default|Example|States?|Inactive|Active|Disabled|Normal|Selected|Hover|Focus|Toggled):?[^<]*<\/h[1-6]>$/i)) {
            continue;
        }

        // Skip paragraph wrappers that are just state labels
        if (trimmed.match(/^<p[^>]*>(?:Default state:|Inactive state:|Active state:|hover|active|focus|disabled|normal|selected):?<\/p>$/i)) {
            continue;
        }

        // Skip div wrappers with only inline styles (demo layout divs)
        if (trimmed.match(/^<div\s+style="[^"]*">\s*$/)) {
            skipDepth++;
            continue;
        }

        // Track depth and skip corresponding closing divs
        if (skipDepth > 0 && trimmed === '</div>') {
            skipDepth--;
            continue;
        }

        // Remove inline style attributes from any remaining tags (but keep the tag)
        let processedLine = line;

        // Remove style attributes but preserve the rest of the tag
        processedLine = processedLine.replace(/\s+style="[^"]*"/g, '');

        // Remove Angular/Vue template syntax
        processedLine = processedLine.replace(/\[attr\.[^\]]+\]="[^"]*"/g, '');

        // Remove data-* attributes used for testing
        processedLine = processedLine.replace(/\s+data-[a-z-]+="[^"]*"/g, '');

        // Clean up divs that now have no attributes
        processedLine = processedLine.replace(/<div\s+>/g, '<div>');

        // Skip lines that are now just empty divs
        const processedTrimmed = processedLine.trim();
        if (processedTrimmed === '<div>' || processedTrimmed === '<div></div>') {
            // Check if this is wrapping actual content
            const nextLine = lines[i + 1]?.trim();
            if (!nextLine || nextLine === '</div>') {
                continue;
            }
        }

        processedLines.push(processedLine);
    }

    cleaned = processedLines.join('\n');

    // Post-processing cleanup

    // Remove orphaned closing divs (ones that don't have matching opening)
    let divDepth = 0;
    const finalLines = cleaned.split('\n').filter(line => {
        const trimmed = line.trim();

        // Track div depth
        const openDivs = (line.match(/<div[^>]*>/g) || []).length;
        const closeDivs = (line.match(/<\/div>/g) || []).length;

        divDepth += openDivs;
        divDepth -= closeDivs;

        // Remove lines that are just a closing div and would make depth negative
        if (trimmed === '</div>' && divDepth < 0) {
            divDepth = 0; // Reset
            return false;
        }

        return true;
    });

    cleaned = finalLines.join('\n');

    // Remove empty divs
    cleaned = cleaned.replace(/<div[^>]*>\s*<\/div>/g, '');
    cleaned = cleaned.replace(/<div[^>]*>\n\s*<\/div>/g, '');

    // Remove excessive blank lines (more than 1 consecutive)
    cleaned = cleaned.replace(/\n\s*\n\s*\n+/g, '\n\n');

    // Normalize indentation
    cleaned = normalizeIndentation(cleaned);

    return cleaned;
}

/**
 * Normalize HTML indentation for clean output
 */
function normalizeIndentation(html) {
    const lines = html.split('\n');
    let indentLevel = 0;
    const indentSize = 4; // 4 spaces
    const normalized = [];

    // Self-closing tags and tags that don't need closing
    const selfClosing = ['br', 'hr', 'img', 'input', 'link', 'meta', 'area', 'base', 'col', 'embed', 'param', 'source', 'track'];

    for (const line of lines) {
        const trimmed = line.trim();

        if (!trimmed) {
            normalized.push('');
            continue;
        }

        // Check for closing tags
        const closingTag = trimmed.match(/^<\/([a-z][a-z0-9]*)/i);
        if (closingTag) {
            indentLevel = Math.max(0, indentLevel - 1);
        }

        // Add the line with proper indentation
        const indent = ' '.repeat(indentLevel * indentSize);
        normalized.push(indent + trimmed);

        // Check for opening tags (but not self-closing)
        const openingTag = trimmed.match(/^<([a-z][a-z0-9]*)/i);
        const isSelfClosing = trimmed.endsWith('/>') || (openingTag && selfClosing.includes(openingTag[1].toLowerCase()));
        const hasClosingOnSameLine = trimmed.match(/<\/[a-z][a-z0-9]*>\s*$/i);

        if (openingTag && !isSelfClosing && !hasClosingOnSameLine && !closingTag) {
            indentLevel++;
        }
    }

    return normalized.join('\n').trim();
}

/**
 * Generate markdown documentation for a component
 */
function generateMarkdown(componentData) {
    const {
        title, selector, description, usage, doNotUse, tags, dependencies, stories,
        modifiers, states, elements, category, sourcePath, cssFile, structure,
        stability, isDeprecated, isExperimental, relatedComponents, designTokens
    } = componentData;

    let md = `---
component: ${selector || componentData.fileName}
title: ${title}
category: ${category}
selector: ${selector}
cssFile: ${cssFile}
sourcePath: ${sourcePath}
tags: ${JSON.stringify(tags)}
dependencies: ${JSON.stringify(dependencies)}
relatedComponents: ${JSON.stringify(relatedComponents || [])}
stability: ${stability}
generatedAt: ${new Date().toISOString()}
---

# ${title}

`;

    // Add deprecation/experimental warning at the top
    if (isDeprecated) {
        md += `> **⚠️ DEPRECATED**: This component is deprecated and should not be used in new projects.\n\n`;
    } else if (isExperimental) {
        md += `> **🧪 EXPERIMENTAL**: This component is experimental and its API may change.\n\n`;
    }

    md += `${description}\n\n`;

    // Add usage guidelines if available
    if (usage) {
        md += `## Usage Guidelines

${usage}

`;
    }

    // Add "do not use" section if available
    if (doNotUse) {
        md += `## When Not To Use

${doNotUse}

`;
    }

    // Add dependencies if present
    if (dependencies.length > 0) {
        md += `## Dependencies

This component depends on the following CSS files:

${dependencies.map(dep => `- \`${dep}.css\``).join('\n')}

`;
    }

    // Add installation section if we have a CSS file
    if (cssFile) {
        md += `## Installation

\`\`\`bash
npm install fundamental-styles
\`\`\`

\`\`\`html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/${cssFile}" rel="stylesheet">
${dependencies.length > 0 ? '\n<!-- Include dependencies -->\n' + dependencies.map(dep => `<link href="node_modules/fundamental-styles/dist/${dep}.css" rel="stylesheet">`).join('\n') : ''}
\`\`\`

`;
    }

    // Add basic usage from first example
    if (stories.length > 0 && stories[0].html) {
        const cleaned = cleanHTML(stories[0].html);
        md += `## Basic Usage

\`\`\`html
${cleaned}
\`\`\`

`;
    }

    // Add modifiers section
    if (modifiers.length > 0) {
        md += `## Modifiers

| Class | Description |
|-------|-------------|
`;
        modifiers.forEach(mod => {
            const modClass = `${selector}--${mod.name}`;
            const desc = mod.description || 'Style variant';
            md += `| \`${modClass}\` | ${desc} |\n`;
        });
        md += '\n';
    }

    // Add states section
    if (states.length > 0) {
        md += `## States

| Class | Description |
|-------|-------------|
`;
        states.forEach(state => {
            md += `| \`is-${state}\` | ${state.charAt(0).toUpperCase() + state.slice(1)} state |\n`;
        });
        md += '\n';
    }

    // NEW: Add BEM elements section
    if (elements && elements.length > 0) {
        md += `## BEM Elements

This component uses the following BEM elements:

`;
        elements.forEach(element => {
            md += `- \`${selector}__${element}\`\n`;
        });
        md += '\n';
    }

    // NEW: Add structure section if available
    if (structure && structure.text) {
        md += `## Component Structure

${structure.text}

`;
    }

    // NEW: Add related components section
    if (relatedComponents && relatedComponents.length > 0) {
        md += `## Related Components

This component works with or depends on:

`;
        relatedComponents.forEach(comp => {
            md += `- \`${comp}\`\n`;
        });
        md += '\n';
    }

    // NEW: Add design tokens section (if available)
    if (designTokens && designTokens.length > 0) {
        md += `## Design Tokens

Key CSS variables used by this component:

`;
        designTokens.slice(0, 15).forEach(token => {
            md += `- \`${token}\`\n`;
        });
        if (designTokens.length > 15) {
            md += `\n*...and ${designTokens.length - 15} more*\n`;
        }
        md += '\n';
    }

    // Add all examples from stories
    if (stories.length > 0) {
        md += `## Examples\n\n`;

        stories.forEach(story => {
            md += `### ${story.storyName}\n\n`;

            if (story.description) {
                md += `${story.description}\n\n`;
            }

            if (story.html) {
                const cleaned = cleanHTML(story.html);
                md += `\`\`\`html
${cleaned}
\`\`\`

`;
            }
        });
    }

    // Add accessibility note
    md += `## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

`;

    // Add source reference
    md += `## Source

This documentation was automatically generated from: \`${sourcePath}\`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
`;

    return md;
}

/**
 * Generate a unique filename for a component
 */
function generateUniqueFilename(componentData, existingFiles) {
    const { selector, title, category, subcategory } = componentData;

    // Base filename from selector or title
    let baseFilename = selector
        ? selector.replace('fd-', '')
        : title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    // If file doesn't exist, use base filename
    const baseFile = `${baseFilename}.md`;
    if (!existingFiles.has(baseFile)) {
        existingFiles.set(baseFile, componentData);
        return baseFile;
    }

    // File exists - check if it's a duplicate or different component
    const existing = existingFiles.get(baseFile);

    // Prioritize Components over Layouts/Patterns
    if (category === 'Components' && existing.category !== 'Components') {
        // Replace with Components version
        existingFiles.set(baseFile, componentData);
        return baseFile;
    }

    // If existing is Components, don't replace - create unique filename
    if (existing.category === 'Components' && category !== 'Components') {
        const uniqueFilename = `${baseFilename}-${category.toLowerCase()}.md`;
        existingFiles.set(uniqueFilename, componentData);
        return uniqueFilename;
    }

    // Both same priority - add subcategory or number
    if (subcategory) {
        const uniqueFilename = `${baseFilename}-${subcategory.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.md`;
        if (!existingFiles.has(uniqueFilename)) {
            existingFiles.set(uniqueFilename, componentData);
            return uniqueFilename;
        }
    }

    // Last resort - add number
    let counter = 2;
    let uniqueFilename;
    do {
        uniqueFilename = `${baseFilename}-${counter}.md`;
        counter++;
    } while (existingFiles.has(uniqueFilename));

    existingFiles.set(uniqueFilename, componentData);
    return uniqueFilename;
}

/**
 * Main extraction process
 */
function extractAllDocs() {
    console.log('🔍 Scanning for story files...\n');

    // Find all story files
    let storyFiles = glob.sync('packages/*/stories/**/*.stories.js', {
        ignore: ['**/node_modules/**', '**/introduction.stories.js']
    });

    // Sort files to prioritize main components over variants
    // 1. Components before other categories
    // 2. Shorter paths before longer paths (card before card-media)
    storyFiles.sort((a, b) => {
        const aIsComponent = a.includes('/Components/');
        const bIsComponent = b.includes('/Components/');

        if (aIsComponent && !bIsComponent) return -1;
        if (!aIsComponent && bIsComponent) return 1;

        // Both are components or both aren't - prefer shorter paths
        return a.length - b.length;
    });

    console.log(`Found ${storyFiles.length} story files\n`);

    let successCount = 0;
    let errorCount = 0;
    const components = [];
    const existingFiles = new Map();

    storyFiles.forEach(filePath => {
        try {
            console.log(`Processing: ${path.relative(process.cwd(), filePath)}`);

            const componentData = parseStoryFile(filePath);

            if (!componentData.selector && componentData.stories.length === 0) {
                console.log(`  ⚠️  Skipped (no component data found)\n`);
                return;
            }

            const markdown = generateMarkdown(componentData);
            const outputFileName = generateUniqueFilename(componentData, existingFiles);
            const outputPath = path.join(OUTPUT_DIR, outputFileName);

            fs.writeFileSync(outputPath, markdown);

            console.log(`  ✅ Generated: docs/components/${outputFileName}\n`);
            successCount++;

            components.push({
                name: componentData.fileName,
                title: componentData.title,
                selector: componentData.selector,
                category: componentData.category,
                file: outputFileName
            });
        } catch (error) {
            console.error(`  ❌ Error: ${error.message}\n`);
            errorCount++;
        }
    });

    // Generate index file
    generateIndexFile(components);

    console.log('\n' + '='.repeat(60));
    console.log(`✨ Extraction complete!`);
    console.log(`   Success: ${successCount} components`);
    console.log(`   Errors: ${errorCount}`);
    console.log(`   Output: docs/components/`);
    console.log('='.repeat(60) + '\n');
}

/**
 * Generate index file listing all components
 */
function generateIndexFile(components) {
    let index = `# Component Documentation Index

This directory contains AI-consumable documentation extracted from Storybook stories.

**Generated:** ${new Date().toISOString()}
**Total Components:** ${components.length}

## Components by Category

`;

    // Group by category
    const byCategory = {};
    components.forEach(comp => {
        const cat = comp.category || 'Other';
        if (!byCategory[cat]) byCategory[cat] = [];
        byCategory[cat].push(comp);
    });

    // Sort categories
    const categories = Object.keys(byCategory).sort();

    categories.forEach(category => {
        index += `### ${category}\n\n`;
        index += `| Component | Selector | File |\n`;
        index += `|-----------|----------|------|\n`;

        byCategory[category]
            .sort((a, b) => a.title.localeCompare(b.title))
            .forEach(comp => {
                index += `| ${comp.title} | \`${comp.selector}\` | [${comp.file}](./${comp.file}) |\n`;
            });

        index += '\n';
    });

    index += `## Usage for AI Agents

These markdown files are designed to be consumed by AI coding assistants:

1. **Direct File Access**: Each component has its own markdown file
2. **Structured Format**: Consistent frontmatter with metadata
3. **Complete Examples**: Full HTML snippets from Storybook stories
4. **Modifier Reference**: All CSS modifier classes documented
5. **State Classes**: Interactive states (hover, active, disabled, etc.)

## Keeping Docs Updated

To regenerate this documentation:

\`\`\`bash
npm run docs:extract
\`\`\`

This should be run whenever component stories are updated.
`;

    const indexPath = path.join(OUTPUT_DIR, 'README.md');
    fs.writeFileSync(indexPath, index);
    console.log(`  ✅ Generated: docs/components/README.md\n`);
}

// Run the extraction
if (import.meta.url === `file://${process.argv[1]}`) {
    extractAllDocs();
}

export { parseStoryFile, generateMarkdown, extractAllDocs };
