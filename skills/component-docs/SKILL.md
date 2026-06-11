---
name: component-docs
description: Browse fundamental-styles component documentation with complete HTML examples from 140+ auto-generated markdown files. Use this when the user asks about component examples, modifiers, variants, HTML structure, or wants to see working code for any fundamental-styles component (button, table, input, dialog, etc.). Also trigger when they mention Storybook examples, CSS components, or need copy-paste-ready HTML.
metadata:
    tags: ['components', 'documentation', 'examples', 'html']
    keywords:
        [
            'component-examples',
            'html',
            'markdown',
            'documentation',
            'code-examples',
            'modifiers',
            'variants',
            'storybook',
            'fundamental-styles',
            'css-components',
            'fd-button',
            'fd-table',
            'fd-input',
            'working-html',
            'copy-paste'
        ]
---

# Component Documentation Browser

This skill provides access to comprehensive component documentation for fundamental-styles, SAP's CSS component library. Each component's documentation includes complete HTML examples with all variants, modifiers, states, and proper ARIA attributes extracted from Storybook stories.

## When to Use This Skill

Use this skill when the user:
- Asks for HTML examples of any fundamental-styles component
- Needs to see all variants/modifiers for a component (e.g., "show me all button types")
- Wants working, copy-paste-ready HTML code
- Mentions Storybook examples or stories
- Asks "how do I use component X?"
- Needs to understand component structure and nesting
- References specific components by name (button, table, dialog, input, etc.)

## How to Access Component Documentation

There are multiple ways to retrieve component documentation:

### Method 1: Read Markdown Files Directly

The documentation lives in `docs/components/` with one markdown file per component:

```
docs/components/button.md
docs/components/table.md
docs/components/input.md
docs/components/dialog.md
```

**When to use**: The user asks for a specific component by name, or you need complete documentation including frontmatter metadata.

Read the file and extract:
- Frontmatter (component name, selector, CSS file, category)
- All HTML examples with their headings
- Modifier descriptions

### Method 2: Use MCP Tool (if available)

If you have access to the `fundamental-styles` MCP server, use the `get_component_markdown` tool:

```
get_component_markdown("button")
→ Returns structured JSON with all examples

get_component_markdown("input", examplesOnly: true)
→ Returns just the HTML code blocks
```

**When to use**: MCP server is available and you need structured programmatic access to the documentation.

### Method 3: Browse the Component Index

Read `docs/components/README.md` to see all 140+ available components organized by category. Use this when the user asks "what components are available for X?" or needs to discover which component to use.

## Component Organization

Components are organized into these categories:

- **Actions** (4): button, link, menu, split-button
- **Forms** (26): input, select, checkbox, radio, textarea, switch, date-picker, time-picker, etc.
- **Navigation** (8): tabs, breadcrumb, side-nav, pagination, menu, shellbar, etc.
- **Layout** (11): panel, card, page, section, bar, toolbar, wizard, etc.
- **Data Display** (23): table, list, tree, avatar, calendar, icon, object-status, etc.
- **Feedback** (15): dialog, popover, message-strip, alert, notification, busy-indicator, etc.

## What the Documentation Contains

Each component markdown file includes:

1. **Frontmatter**: Component metadata (name, selector, CSS file, category, tags)
2. **HTML Examples**: Complete working code for every variant
3. **Modifiers**: All available modifier classes (e.g., `fd-button--emphasized`)
4. **States**: State classes (e.g., `is-disabled`, `is-selected`)
5. **Elements**: Child elements with their own modifiers (e.g., `fd-table__cell`)
6. **ARIA Attributes**: Proper accessibility markup

## Example Workflows

### User asks: "Show me button examples"

1. Read `docs/components/button.md`
2. Extract all HTML examples (there are 20+ variants)
3. Present relevant examples based on context:
   - Primary/emphasized buttons
   - Positive/negative buttons
   - Transparent/ghost buttons
   - Compact buttons
   - Icon buttons
   - Disabled states

### User asks: "How do I make a compact table?"

1. Read `docs/components/table.md`
2. Find the compact modifier section
3. Show HTML example with `fd-table--compact` class
4. Explain how compact mode works with other modifiers

### User asks: "What's available for navigation?"

1. Read `docs/components/README.md`
2. Extract the Navigation category section
3. List all navigation components with brief descriptions
4. Offer to show examples for any specific component

## Component Naming Conventions

Components follow BEM naming:
- **Base class**: `fd-{component}` (e.g., `fd-button`, `fd-table`)
- **Modifiers**: `fd-{component}--{modifier}` (e.g., `fd-button--emphasized`)
- **Elements**: `fd-{component}__{element}` (e.g., `fd-table__cell`)
- **States**: `is-{state}` (e.g., `is-disabled`, `is-selected`)

When users refer to components, they might use:
- Formal names: "button component", "table component"
- Just the component: "button", "table"
- CSS class: "fd-button", "fd-table"
- UI concept: "submit button", "data grid"

Map these to the correct markdown file (e.g., "submit button" → `button.md`).

## Tips for Using This Skill

1. **Always read the markdown file** - Don't guess at HTML structure or modifiers. The documentation is authoritative and complete.

2. **Look for multiple examples** - Most components have 10-20+ examples showing different use cases. Show the most relevant one, but mention others exist.

3. **Include ARIA attributes** - All examples include proper accessibility markup. Don't strip these out.

4. **Explain modifiers** - When showing an example with modifiers, briefly explain what each one does (the markdown has descriptions).

5. **Combine with other tools** - If the user needs to actually build something, combine this skill with file editing to create their component.

## Common Components Quick Reference

| User Need | Component | File |
|-----------|-----------|------|
| Button, link, action | button, link | button.md, link.md |
| Text input, password | input | input.md |
| Dropdown, select | select | select.md |
| Checkbox, radio | checkbox, radio | checkbox.md, radio.md |
| Toggle switch | switch | switch.md |
| Date picker | date-picker | date-picker.md |
| Data table | table | table.md |
| List of items | list | list.md |
| Modal, popup | dialog | dialog.md |
| Tooltip, help text | popover | popover.md |
| Alert, message | message-strip, alert | message-strip.md, alert.md |
| Tabs | tabs | tabs.md |
| Navigation menu | menu, side-nav | menu.md, side-nav.md |
| Form layout | form-item | form-item.md |
| Icons | icon | icon.md |

## Related Tools and Skills

- **MCP tool `get_component_markdown`**: Programmatic access to documentation (if MCP server available)
- **MCP tool `list_components`**: Browse all available components with filters
- **MCP tool `get_component_html`**: Get specific HTML variants
- **MCP tool `search_components`**: Search by keyword
- **Skill `/bem-naming`**: Learn BEM naming conventions for fundamental-styles
- **Skill `/component-composition`**: Learn how to combine components correctly

## Responding to the User

When the user asks for component documentation:

1. **Read the relevant markdown file(s)**
2. **Show the specific example(s) they need** - Don't dump all 20 examples, show 1-3 most relevant
3. **Explain the key modifiers** - Help them understand what classes do
4. **Provide context** - Brief note on when to use this variant
5. **Offer to show more** - "There are 15 other button variants available. Want to see others?"

Keep responses focused and practical. The goal is to help them build their UI, not to document every possible variation.
