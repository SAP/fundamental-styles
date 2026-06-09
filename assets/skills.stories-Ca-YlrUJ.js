import{z as e,d as o}from"./iframe-C0hDTCBm.js";import{R as s}from"./IntroductionPageWrapper-CD7Om6_4.js";import"./preload-helper-CR6acF8F.js";const t=`# Skills

Agent Skills for fundamental-styles provide AI assistants with comprehensive guidance on using the component library effectively. These skills help AI agents (like Claude Code) understand when to use components, best practices, and common patterns.

## What are Skills?

Skills are markdown-based documentation files specifically designed for AI assistants. They provide:

- **Component guidance** - When to use each component, when to avoid it, and best practices
- **Design patterns** - Common UI patterns and layouts
- **Naming conventions** - BEM methodology and class naming rules
- **Composition patterns** - How to combine components correctly

## Available Skills

fundamental-styles provides 11 comprehensive skills organized by topic:

### Component Guidance (6 skills)

Detailed guidance for all 87 components, organized by category:

- **Forms & Inputs** (26 components) - Form controls, inputs, validation
- **Navigation** (8 components) - Breadcrumbs, menus, links, toolbars
- **Layout & Containers** (11 components) - Cards, panels, page layouts
- **Data Display** (23 components) - Tables, lists, trees, avatars
- **Feedback & Status** (15 components) - Messages, notifications, progress
- **Actions & Controls** (4 components) - Buttons, switches, controls

### Documentation & Reference

- **Component Documentation Browser** (140+ components) - Browse complete HTML examples with all variants and modifiers from auto-generated Storybook documentation

### Additional Skills

- **Layout Patterns** - Complete page patterns (login forms, dashboards, master-detail, wizards)
- **BEM Naming** - Block Element Modifier methodology with examples
- **Component Composition** - How to combine components with required wrappers
- **Content Density** - Cozy, compact, and condensed modes for different devices

## Installation

> **Note:** Skills are available starting from version **0.41.7-rc.0**

### Install All Skills (Recommended)

Install the complete skills package with one command:

\`\`\`bash
# Install at project level (default - only available in this project)
npx skills add SAP/fundamental-styles

# Or install globally (available across all your projects)
npx skills add SAP/fundamental-styles -g
\`\`\`

This installs all 11 skills automatically.

### Browse Available Skills

Before installing, you can preview what skills are available:

\`\`\`bash
# List all skills in the package without installing
npx skills add SAP/fundamental-styles -l
\`\`\`

### Install Individual Skills

If you only need specific skills, you can install them individually:

\`\`\`bash
# Install only BEM naming guidance
npx skills add SAP/fundamental-styles -s bem-naming

# Install only component documentation browser
npx skills add SAP/fundamental-styles -s component-docs

# Install multiple specific skills
npx skills add SAP/fundamental-styles -s bem-naming,component-docs,layout-patterns
\`\`\`

**Available skill IDs:**
- \`component-guidance-forms\`
- \`component-guidance-navigation\`
- \`component-guidance-layout\`
- \`component-guidance-data\`
- \`component-guidance-feedback\`
- \`component-guidance-actions\`
- \`component-docs\` ← **NEW: Browse 140+ component examples**
- \`layout-patterns\`
- \`bem-naming\`
- \`component-composition\`
- \`content-density\`

### Verify Installation

After installing, verify that skills are available:

\`\`\`bash
# List installed skills
npx skills list

# Or list global skills
npx skills list -g
\`\`\`

**In Claude Code**, test by typing a skill command:

\`\`\`
/component-guidance-forms
/component-docs
/bem-naming
/layout-patterns
\`\`\`

The skill content should load immediately. If skills don't appear, try restarting Claude Code.

## Skills vs MCP Tools

**fundamental-styles** provides two complementary ways to access information:

| Feature | Skills | MCP Tools |
|---------|--------|-----------|
| **Purpose** | Comprehensive learning & design guidance | Quick code lookups & generation |
| **Content** | When to use/avoid, best practices, design patterns | HTML examples, CSS dependencies, code snippets |
| **Activation** | Type \`/skill-name\` or AI auto-loads | Call tool functions (e.g., \`get_component_html\`) |
| **Length** | Detailed (5,941 lines across 10 skills) | Focused, concise responses |
| **Best For** | Learning, exploring, design decisions | Implementation, quick reference, setup |

### When to Use Each

**Use Skills for:**
- 🎓 Learning fundamental-styles for the first time
- 🤔 Design decisions ("Should I use table or list?")
- 📚 Understanding best practices and patterns
- 🏗️ Architecture decisions (layout patterns, composition)
- 📖 Browsing complete component examples with all variants
- ⚠️ Avoiding common mistakes

**Use MCP Tools for:**
- ⚡ Getting HTML code immediately
- 🔍 Looking up specific component details
- 🛠️ Project setup and CSS dependencies
- 📋 Quick reference during implementation
- 🎯 Finding specific design tokens or classes

## How AI Agents Use Skills

Skills can be activated in two ways:

### 1. Explicit Activation (Recommended)

Type the skill name as a command:

\`\`\`
Type: /layout-patterns
→ Loads the complete layout patterns skill
→ Shows 7 patterns: navigation shell, master-detail, dashboard, etc.

Type: /content-density
→ Loads content density guidance
→ Shows when to use cozy/compact/condensed modes

Type: /component-docs
→ Loads component documentation browser
→ Browse 140+ components with complete HTML examples

Type: /component-guidance-forms
→ Loads forms guidance
→ Shows all 26 form components with best practices
\`\`\`

### 2. Automatic Activation (Smart Detection)

AI assistants like Claude Code will automatically load relevant skills based on your questions:

\`\`\`
You: "Show me button component examples"
→ AI loads: component-docs skill
→ Provides: Complete button documentation with 20+ HTML examples

You: "Should I use a checkbox or radio button?"
→ AI loads: component-guidance-forms skill
→ Provides: Guidance on when to use each component

You: "How do I build a login form?"
→ AI loads: layout-patterns skill
→ Provides: Complete login form example

You: "What does fd-button--emphasized mean?"
→ AI loads: bem-naming skill
→ Provides: BEM naming explanation with examples

You: "Should I use cozy or compact mode?"
→ AI loads: content-density skill
→ Provides: Device-specific density recommendations
\`\`\`

### Discovery Through MCP Tools

MCP tools will recommend relevant skills in their responses:

\`\`\`
Call: search_components("table")
Response includes:
  🎓 Skill: component-guidance-data
  Activation: Type /component-guidance-data
  Description: Deep-dive guidance on tables, lists, trees

Call: get_component_html("shellbar")
Response includes:
  🎓 Skill: layout-patterns
  Activation: Type /layout-patterns
  Description: See complete navigation shell pattern
\`\`\`
`,c={title:"Docs / Skills",component:"",parameters:{docs:{container:o,page:s(t),theme:e},previewTabs:{canvas:{hidden:!0}},viewMode:"docs",visualDisabled:!0,docsOnly:!0}},n={render:()=>"<div></div>",parameters:{title:"Overview",storyshots:{disable:!0},viewMode:"docs",docsOnly:!0}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    /*
      this will serve as default redirect to the docs page,
      otherwise it will render this empty div without ability
      to select 'docs'
     */
    return '<div></div>';
  },
  parameters: {
    title: 'Overview',
    storyshots: {
      disable: true
    },
    viewMode: 'docs',
    docsOnly: true
  }
}`,...n.parameters?.docs?.source}}};const r=["Overview"];export{n as Overview,r as __namedExportsOrder,c as default};
