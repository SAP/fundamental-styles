# fundamental-styles Agent Skills

Agent Skills for [fundamental-styles](https://github.com/SAP/fundamental-styles) — portable, structured knowledge files that teach AI coding assistants how to work with SAP's CSS component library.

Skills provide domain-specific guidance that goes beyond what a general-purpose LLM knows out of the box.

## Available Skills

| Skill | Description |
|-------|-------------|
| **component-guidance** | SAP Fiori Design Guidelines for components — when to use, when to avoid, and best practices for Avatar, Button, Input, Dialog, Table, Message Strip, and more |
| **layout-patterns** | Common UI layout patterns — login forms, master-detail layouts, data tables with actions, multi-step wizards, forms with validation, dialogs, and dashboards |

## Installation

### Install all fundamental-styles skills

```bash
npx skills add "SAP/fundamental-styles"
```

This downloads the skill files into your project (`.claude/skills/` or `.skills/`) so that AI assistants (Claude Code, Copilot, Cursor, etc.) can pick them up automatically.

### Install a specific skill

```bash
npx skills add "SAP/fundamental-styles" --skill "component-guidance"
npx skills add "SAP/fundamental-styles" --skill "layout-patterns"
```

## What Are Skills?

Skills are **Markdown files** that contain structured knowledge about how to use a library or framework. They're written in a conversational style that AI assistants can understand and apply when helping you write code.

### Skills vs. Documentation

| Traditional Docs | Agent Skills |
|------------------|--------------|
| Reference material | Procedural guidance |
| "What classes exist" | "How do I build X?" |
| Searchable by humans | Automatically loaded by AI |
| Component-focused | Pattern-focused |

### Skills vs. MCP Servers

fundamental-styles provides **both** Skills and an [MCP server](../packages/mcp/):

| MCP Server | Skills |
|------------|--------|
| Structured data lookup | Conversational guidance |
| Programmatic API | Natural language |
| "What CSS classes does button have?" | "Should I use button or link here?" |
| Component catalog, HTML examples, design tokens | "How do I build a login form?" |

**Use both together** for the best experience! The MCP server provides data, skills provide guidance.

## Using Skills

Once installed, AI assistants automatically have access to the skills. You don't need to do anything special!

### Example Interactions

**Before skills:**
> You: "Should I use Avatar for product logos?"
>
> AI: "Yes, you can use Avatar. Here are the CSS classes..."

**After skills:**
> You: "Should I use Avatar for product logos?"
>
> AI: "Yes! Use `fd-avatar` with the default **square shape** for product logos. The Fiori guidelines specifically recommend squares for business content. Use circles for people. Also, provide a clear `alt` attribute and avoid unnecessarily large image files."

### Questions Skills Can Answer

**Component Guidance Skill:**
- "Should I use Avatar or Icon for this?"
- "Can I make an Avatar clickable?"
- "What's the difference between Dialog and Popover?"
- "When should I use Message Strip vs Alert?"

**Layout Patterns Skill:**
- "How do I build a login form with validation?"
- "Show me a master-detail layout pattern"
- "What's the best way to structure a data table with actions?"
- "How do I create a multi-step wizard?"

## Skill Contents

### component-guidance.md

Covers these components with full Fiori Design Guidelines:
- **Avatar** - User photos, product images, initials
- **Button** - Primary, secondary, tertiary actions
- **Input** - Text fields, validation states
- **Dialog** - Modal windows, confirmations
- **Table** - Data grids, selection, actions
- **Message Strip** - Inline feedback messages

Each component includes:
- ✅ **When to use** - Appropriate use cases
- ❌ **When to avoid** - Anti-patterns and alternatives
- 💡 **Best practices** - Design tips and guidelines
- 🔗 **Related components** - Similar or complementary components
- 📝 **Example code** - Working HTML snippets
- 🌐 **Fiori Guidelines link** - Official documentation

### layout-patterns.md

Complete working examples for:
1. **Login Form** - Email/password with validation
2. **Master-Detail Layout** - List + detail panel
3. **Data Table with Actions** - Bulk selection, row actions
4. **Multi-Step Wizard** - Step-by-step forms
5. **Form with Validation** - Field states, error messages
6. **Dialog with Form** - Modal data entry
7. **Dashboard with Cards** - Metrics, lists, status

Each pattern includes:
- 🎯 **When to use** - Appropriate use cases
- 🧩 **Components used** - List of fundamental-styles components
- 💻 **Complete example** - Production-ready HTML
- 🔑 **Key points** - Implementation tips
- ♿ **Accessibility notes** - ARIA patterns and keyboard support

## Contributing

Want to add more components or patterns?

1. **Component Guidance**: Add new components to `component-guidance.md` following the Avatar/Button structure
2. **Layout Patterns**: Add new patterns to `layout-patterns.md` following the existing format
3. **Update manifest**: Add metadata to `skills.json`
4. **Test**: Try the skill with an AI assistant
5. **Submit PR**: Share your improvements!

## Complementary Tools

### MCP Server

Install the [fundamental-styles MCP server](../packages/mcp/) for programmatic access to component data:

```bash
npx -y @fundamental-styles/mcp
```

The MCP server provides:
- Component catalog (120+ components)
- CSS class lookup
- HTML examples
- Design tokens
- Accessibility guidelines
- Component relationships

### Documentation

- **Visual examples**: https://sap.github.io/fundamental-styles/
- **Fiori Design Guidelines**: https://www.sap.com/design-system/fiori-design-web/
- **Component catalog**: `docs/component-catalog.json`
- **AI-friendly index**: `docs/ai-component-index.md`

## License

Apache-2.0 - Same as fundamental-styles

## Support

- **Issues**: https://github.com/SAP/fundamental-styles/issues
- **Discussions**: https://github.com/SAP/fundamental-styles/discussions
- **Slack**: #fundamental-styles (SAP internal)
