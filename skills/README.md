# Skills

Agent Skills for fundamental-styles provide AI assistants with comprehensive guidance on using the component library effectively. These skills help AI agents (like Claude Code) understand when to use components, best practices, and common patterns.

## What are Skills?

Skills are markdown-based documentation files specifically designed for AI assistants. They provide:

- **Component guidance** - When to use each component, when to avoid it, and best practices
- **Design patterns** - Common UI patterns and layouts
- **Naming conventions** - BEM methodology and class naming rules
- **Composition patterns** - How to combine components correctly

## Available Skills

fundamental-styles provides 10 comprehensive skills organized by topic:

### Component Guidance (6 skills)

Detailed guidance for all 87 components, organized by category:

- **Forms & Inputs** (26 components) - Form controls, inputs, validation
- **Navigation** (8 components) - Breadcrumbs, menus, links, toolbars
- **Layout & Containers** (11 components) - Cards, panels, page layouts
- **Data Display** (23 components) - Tables, lists, trees, avatars
- **Feedback & Status** (15 components) - Messages, notifications, progress
- **Actions & Controls** (4 components) - Buttons, switches, controls

### Additional Skills

- **Layout Patterns** - Complete page patterns (login forms, dashboards, master-detail, wizards)
- **BEM Naming** - Block Element Modifier methodology with examples
- **Component Composition** - How to combine components with required wrappers
- **Content Density** - Cozy, compact, and condensed modes for different devices

## Installation

> **Note:** Skills are available starting from version **0.41.7-rc.0**

### Install All Skills (Recommended)

Install the complete skills package with one command:

```bash
npx skills add SAP/fundamental-styles@v0.41.7-rc.0
```

This installs all 10 skills automatically.

### Install Individual Skills

If you only need specific skills, you can install them individually:

```bash
# Install only BEM naming guidance
npx skills add SAP/fundamental-styles@v0.41.7-rc.0 -s bem-naming

# Install only component composition
npx skills add SAP/fundamental-styles@v0.41.7-rc.0 -s component-composition

# Install multiple specific skills
npx skills add SAP/fundamental-styles@v0.41.7-rc.0 -s bem-naming,component-composition,layout-patterns
```

**Available skill IDs:**
- `component-guidance-forms`
- `component-guidance-navigation`
- `component-guidance-layout`
- `component-guidance-data`
- `component-guidance-feedback`
- `component-guidance-actions`
- `layout-patterns`
- `bem-naming`
- `component-composition`
- `content-density`

## How AI Agents Use Skills

When you ask an AI assistant like Claude Code a question, it automatically loads the relevant skill:

**Example interactions:**

```
You: "Should I use a checkbox or radio button?"
→ Loads: component-guidance-forms skill
→ Provides: Guidance on when to use each component

You: "How do I build a login form?"
→ Loads: layout-patterns skill
→ Provides: Complete login form example

You: "What does fd-button--emphasized mean?"
→ Loads: bem-naming skill
→ Provides: BEM naming explanation with examples

You: "How do I combine an input with a button?"
→ Loads: component-composition skill
→ Provides: Input Group composition pattern

You: "Should I use cozy or compact mode?"
→ Loads: content-density skill
→ Provides: Device-specific density recommendations
```

## Skill Structure

Each skill follows a consistent format:

### Component Guidance Skills

For each component, provides:

- **Description** - What the component is and does
- **When to use** - Appropriate use cases
- **When to avoid** - Anti-patterns and alternatives
- **Best practices** - Implementation guidelines

**Example:**

```markdown
## Button

**Description:**
Buttons enable users to trigger actions...

**When to use:**
- Trigger specific actions (Save, Cancel, Submit)
- Use toggle buttons in toolbars
- Use menu button for multiple options

**When to avoid:**
- ❌ Linking to a different page → Use link instead
- ❌ Navigating within process → Use wizard instead

**Best practices:**
- ✅ Use emphasized button for primary action
- ✅ Use semantic colors (positive, negative)
- ⚠️ Only one emphasized button per page
```

