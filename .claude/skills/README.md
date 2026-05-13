# fundamental-styles Agent Skills

This directory contains project-specific skills for Claude Code to assist with fundamental-styles development.

## What are Skills?

Skills are specialized knowledge modules that provide Claude with deep expertise in specific areas. When you invoke a skill, Claude loads detailed guidelines, patterns, and best practices into context to provide more accurate and consistent assistance.

## Available Skills

### 📋 scss-style-guide

**Purpose:** Comprehensive SCSS/CSS coding standards and patterns for fundamental-styles components.

**When to use:**
- Writing new SCSS component files
- Refactoring existing SCSS code
- Reviewing SCSS pull requests
- Questions about fundamental-styles CSS architecture
- Debugging style issues

**What it covers:**
- BEM (Block Element Modifier) methodology
- Self-contained component patterns
- CSS custom properties (variables) usage
- RTL (Right-to-Left) support with logical properties
- State management (hover, focus, active, disabled)
- Responsive breakpoints and compact mode
- Common mixins and utilities
- Anti-patterns to avoid
- Accessibility requirements
- Code organization best practices

**How to use:**

The skill is automatically invoked when working with SCSS files, but you can also explicitly reference it:

```
Can you review this SCSS code according to our style guide?
```

```
Using the SCSS style guide, help me refactor this component to use logical properties for RTL support
```

```
What's the correct way to handle hover states according to our standards?
```

**Key principles enforced:**
- ✅ Strict BEM naming: `.fd-component__element--modifier`
- ✅ Always use `@include fd-reset()` for blocks and elements
- ✅ CSS variables for state changes, not property overrides
- ✅ Logical properties for RTL: `margin-inline-start` not `margin-left`
- ✅ `rem` units, never `px`
- ✅ Maximum 3 levels of nesting
- ✅ Self-contained components (no cross-component styling)
- ✅ Use `@each` loops for repetitive patterns

---

### ♿ accessibility-guide

**Purpose:** Comprehensive accessibility guidelines for writing component examples with proper ARIA, semantic HTML, and WCAG compliance.

**When to use:**
- Writing HTML examples for component documentation
- Creating new component demos
- Reviewing component accessibility
- Fixing accessibility issues in examples
- Questions about ARIA roles and attributes
- Ensuring keyboard navigation works correctly

**What it covers:**
- Semantic HTML best practices
- Proper label connections (`for`, `id`, `aria-labelledby`)
- ARIA roles and their required companion attributes
- When to use native HTML vs ARIA
- ID reference validation rules
- Composite widget patterns (tabs, menus, radio groups)
- Common component accessibility patterns
- Keyboard interaction requirements
- Focus management
- Testing checklist and tools

**How to use:**

```
Help me make this button accessible
```

```
What ARIA attributes do I need for this custom select dropdown?
```

```
Review this form example for accessibility issues
```

```
How should I implement keyboard navigation for this tab component?
```

**Key principles enforced:**
- ✅ Use native HTML elements first (button, input, nav, etc.)
- ✅ All form inputs must have proper labels
- ✅ All ID references must point to existing elements
- ✅ Roles require specific companion attributes (e.g., slider needs aria-valuenow/min/max)
- ✅ Composite widgets must contain correct child roles
- ✅ Icon-only buttons must have `aria-label`
- ✅ Custom interactive elements need keyboard support
- ✅ Dialogs must have `aria-modal` and label
- ✅ Always use `aria-posinset` with `aria-setsize`

**Common mistakes prevented:**
- ❌ Icon-only button without label
- ❌ Form input without label connection
- ❌ `aria-labelledby` pointing to non-existent ID
- ❌ Slider without value attributes
- ❌ Tab without `aria-selected`
- ❌ Dialog without `aria-modal`
- ❌ Using ARIA when native HTML would work

## Skill Development

### Adding New Skills

1. Create a new `.md` file in `.claude/skills/`
2. Add frontmatter with metadata:
   ```yaml
   ---
   name: skill-name
   description: Brief description
   publishable: false  # true if sharing with community
   ---
   ```
3. Register in `skills.json`:
   ```json
   {
     "name": "skill-name",
     "path": "skill-name.md",
     "description": "Brief description",
     "publishable": false
   }
   ```

### Skill Guidelines

**Good skills are:**
- **Specific** - Focus on concrete patterns and practices
- **Actionable** - Provide clear do's and don'ts with examples
- **Maintainable** - Updated when patterns change
- **Scoped** - Cover a specific domain (SCSS, testing, architecture)

**Skills should include:**
- When to use this skill (trigger conditions)
- Real examples from the codebase
- Anti-patterns with corrections
- Quick reference sections or checklists
- Links to related documentation

## Project Context

fundamental-styles is a CSS component library implementing SAP's Fiori Design System. It's framework-agnostic and used across multiple SAP products.

**Key characteristics:**
- 120+ UI components
- BEM-based architecture
- Theme support (Horizon, High Contrast)
- RTL language support
- Compact/Cozy density modes
- Self-contained, independent components

## Resources

- **Project Docs:** https://sap.github.io/fundamental-styles/
- **GitHub:** https://github.com/SAP/fundamental-styles
- **Wiki:** https://github.com/SAP/fundamental-styles/wiki
- **Self-Contained Styles:** https://github.com/SAP/fundamental-styles/wiki/Self-Contained-Styles
