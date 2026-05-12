# Enhancing Skills with MCP Server Data

This guide explains how to use data from the fundamental-styles MCP server to enhance the Agent Skills.

## Overview

The **MCP server** and **Skills** serve complementary purposes:
- **MCP Server** → Structured data (JSON) for programmatic access
- **Skills** → Conversational guidance (Markdown) for AI assistants

You can use MCP data to **auto-generate** or **enhance** skill content!

## Data Sources from MCP

The MCP server loads data from these files (see `packages/mcp/src/data/load-catalog.ts`):

| File | Content | Use for Skills |
|------|---------|----------------|
| `docs/component-use-cases.json` | When to use, avoid, best practices | ✅ **Component Guidance Skill** |
| `docs/component-catalog.json` | CSS classes, modifiers, elements | HTML examples in skills |
| `docs/html-examples.json` | Curated HTML patterns | Layout Patterns Skill |
| `docs/accessibility.json` | ARIA patterns, keyboard nav | Accessibility guidance |
| `docs/design-tokens.json` | CSS custom properties | Theming skill |
| `docs/component-relationships.json` | Related components | Component recommendations |

## Strategy 1: Generate Component Guidance from JSON

### Current State (Manual)

Right now, `skills/component-guidance.md` contains **manually written** guidance for Avatar, Button, Input, Dialog, Table, and Message Strip.

### Future State (Semi-Automated)

You can **generate** component guidance from `docs/component-use-cases.json`!

**Example script** (`scripts/generate-component-guidance-skill.js`):

```javascript
const fs = require('fs');
const path = require('path');

// Load use cases data
const useCases = JSON.parse(
  fs.readFileSync('docs/component-use-cases.json', 'utf-8')
);

// Template for each component
function generateComponentSection(componentId, data) {
  const { description, useCases, avoidWhen, bestPractices, relatedComponents, fioriGuidelinesUrl } = data;

  let markdown = `## ${capitalize(componentId)}\n\n`;

  if (description) {
    markdown += `**Description:**\n${description}\n\n`;
  }

  if (useCases && useCases.length > 0) {
    markdown += `**When to use:**\n`;
    useCases.forEach(useCase => {
      markdown += `- ${useCase}\n`;
    });
    markdown += `\n`;
  }

  if (avoidWhen && avoidWhen.length > 0) {
    markdown += `**When to avoid:**\n`;
    avoidWhen.forEach(avoid => {
      markdown += `- ❌ ${avoid}\n`;
    });
    markdown += `\n`;
  }

  if (bestPractices && bestPractices.length > 0) {
    markdown += `**Best practices:**\n`;
    bestPractices.forEach(practice => {
      const prefix = practice.startsWith("Don't") || practice.startsWith("Avoid") ? '❌' : '✅';
      markdown += `- ${prefix} ${practice}\n`;
    });
    markdown += `\n`;
  }

  if (relatedComponents && relatedComponents.length > 0) {
    markdown += `**Related components:**\n`;
    relatedComponents.forEach(comp => {
      markdown += `- \`fd-${comp}\`\n`;
    });
    markdown += `\n`;
  }

  if (fioriGuidelinesUrl) {
    markdown += `**Fiori Guidelines:** ${fioriGuidelinesUrl}\n\n`;
  }

  markdown += `---\n\n`;

  return markdown;
}

function capitalize(str) {
  return str.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}

// Generate skill file
let skillContent = `# Component Guidance Skill

This skill provides SAP Fiori Design Guidelines for fundamental-styles components.

## When to Use This Skill

Use this skill when the user asks about when/how to use a component.

---

`;

// Iterate through all components in use-cases
Object.entries(useCases.useCases).forEach(([componentId, data]) => {
  skillContent += generateComponentSection(componentId, data);
});

// Write to file
fs.writeFileSync(
  'skills/component-guidance.md',
  skillContent,
  'utf-8'
);

console.log('✅ Generated component-guidance.md from MCP data');
```

**Run it:**
```bash
node scripts/generate-component-guidance-skill.js
```

**Result:** `skills/component-guidance.md` is auto-generated from `docs/component-use-cases.json`!

## Strategy 2: Generate Layout Patterns from HTML Examples

### Current State (Manual)

`skills/layout-patterns.md` contains **manually created** patterns (login form, master-detail, etc.).

### Future State (Semi-Automated)

You can **extract** patterns from `docs/html-examples.json` and Storybook examples!

**Example:** Extract the "Login Form" pattern from existing HTML examples:

```javascript
const fs = require('fs');
const htmlExamples = JSON.parse(
  fs.readFileSync('docs/html-examples.json', 'utf-8')
);

// Find examples that match "form" + "validation"
const loginFormExamples = htmlExamples.examples.filter(ex =>
  ex.components.includes('input') &&
  ex.components.includes('button') &&
  ex.components.includes('form-item') &&
  ex.description.toLowerCase().includes('validation')
);

console.log('Found login form patterns:', loginFormExamples);
```

## Strategy 3: Keep Skills and MCP Data in Sync

### The Problem

When you add Avatar guidance to `docs/component-use-cases.json` (for the MCP server), you **also** need to update `skills/component-guidance.md` manually.

### The Solution

**One source of truth:** `docs/component-use-cases.json`

**Two outputs:**
1. **MCP Server** → Loads JSON directly via `get_component_guidance` tool
2. **Skills** → Auto-generated Markdown from the same JSON

**Workflow:**
1. Add/update component guidance in `docs/component-use-cases.json`
2. Run `yarn generate:skills` (new script)
3. Script generates `skills/component-guidance.md` from JSON
4. Commit both files
5. MCP server and Skills stay in sync automatically!

## Implementation Steps

### Step 1: Create the Generator Script

Add `scripts/generate-skills.js`:

```javascript
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('Generating Agent Skills from MCP data...\n');

// Generate component-guidance.md
generateComponentGuidanceSkill();

// Generate layout-patterns.md (future)
// generateLayoutPatternsSkill();

console.log('\n✅ Skills generated successfully!');

function generateComponentGuidanceSkill() {
  const useCases = JSON.parse(
    fs.readFileSync('docs/component-use-cases.json', 'utf-8')
  );

  // ... (implementation from Strategy 1)

  console.log('  → skills/component-guidance.md');
}
```

### Step 2: Add npm Script

In `package.json`:

```json
{
  "scripts": {
    "generate:skills": "node scripts/generate-skills.js",
    "generate:ai-docs": "node scripts/generate-ai-metadata.js && yarn generate:skills"
  }
}
```

### Step 3: Automate in CI/CD

Update `.github/workflows/` to run `yarn generate:skills` after `yarn generate:ai-docs`.

## Manual vs Auto-Generated Content

### Always Auto-Generate

- ✅ Component "When to Use / Avoid / Best Practices" sections
- ✅ Related components lists
- ✅ Fiori Guidelines links
- ✅ CSS class references

### Keep Manual

- 💡 **Detailed HTML examples** with explanations
- 💡 **"Key points"** sections with nuanced tips
- 💡 **Pattern combinations** (how to use multiple components together)
- 💡 **Troubleshooting advice** (common mistakes)
- 💡 **Narrative guidance** (conversational explanations)

**Why?** Auto-generated content is **accurate** but **dry**. Manual content adds **context, examples, and personality** that AI assistants love.

## Best Practice: Hybrid Approach

**Recommended structure for `component-guidance.md`:**

```markdown
## Avatar

<!-- AUTO-GENERATED from docs/component-use-cases.json -->
**Description:** [from JSON]

**When to use:** [from JSON]

**When to avoid:** [from JSON]

**Best practices:** [from JSON]

**Related components:** [from JSON]

<!-- MANUAL CONTENT STARTS HERE -->
**Example usage:**
[Curated HTML with inline comments explaining best practices]

**Common mistakes:**
- Don't forget to add alt text for accessibility
- Avoid nesting avatars inside buttons (wrap button around avatar instead)

**Advanced patterns:**
[Interactive avatar with badge, avatar in table cells, etc.]
```

## Measuring Impact

After deploying Skills + enhanced MCP tools, track:

1. **User questions about components** (before/after)
2. **Accuracy of AI recommendations** (manual spot-checks)
3. **Adoption of Skills** (downloads, GitHub stars)
4. **Issues created** about incorrect guidance
5. **Community contributions** (PRs to skills/)

## Next Steps

1. ✅ **Created** `skills/component-guidance.md` (manual, 6 components)
2. ✅ **Created** `skills/layout-patterns.md` (manual, 7 patterns)
3. ✅ **Created** `skills.json` manifest
4. ⏳ **Create** generator script (`scripts/generate-skills.js`)
5. ⏳ **Expand** `docs/component-use-cases.json` to cover all 120+ components
6. ⏳ **Automate** skill generation in CI/CD
7. ⏳ **Publish** skills to npm / GitHub for `npx skills add`
8. ⏳ **Measure** impact and iterate

---

**Key Takeaway:** Use MCP data as the **source of truth**, generate Skills from it, and add manual **narrative context** on top. Best of both worlds! 🎉
