# Add Component to Guidance Skill - Workflow

**TEMPORARY SKILL** - Use this workflow when adding components to `component-guidance.md`

## Rules

### 1. Alphabetical Order
Components MUST be ordered alphabetically by component name. When adding a new component, find its correct alphabetical position.

Example order: Action Bar → Action Sheet → Avatar → Avatar Group → Bar → Breadcrumb → Busy Indicator → Button → ...

### 2. Required Sections (Exact Order)
Each component MUST have exactly these four sections in this order:

```markdown
## Component Name

**Description:**
[Brief description of what the component is and its purpose]

**When to use:**
- [Use case 1]
- [Use case 2]
- [Use case 3]

**When to avoid:**
- ❌ [Anti-pattern 1] → Use [alternative] instead
- ❌ [Anti-pattern 2] → Use [alternative] instead

**Best practices:**
- ✅ [Do this]
- ✅ [Do that]
- ⚠️ [Warning/consideration]
- ❌ [Don't do this]

---
```

**NEVER include:** Related components, Example usage, Key points, Fiori Guidelines links, or code examples.

### 3. File Updates
- ✅ Update `.claude/skills/component-guidance.md`
- ✅ Copy to `skills/component-guidance.md`
- ❌ Do NOT update MCP server files (`docs/component-use-cases.json`) - those will be batch-updated later

### 4. Optimize for Claude Code
- Keep descriptions concise (1-2 sentences max)
- Use bullet points for scannability
- Start "When to avoid" with ❌ emoji + anti-pattern → alternative
- Use ✅ for do's, ⚠️ for warnings, ❌ for don'ts in best practices
- Use component CSS class names (e.g., `fd-button--emphasized`) when relevant
- Be direct and actionable - no fluff

### 5. Skills Best Practices
- **Conversational tone** - Write like you're giving advice to a developer
- **Specific over generic** - "Use `fd-button--emphasized` for primary action" not "Use emphasis for important things"
- **Context matters** - Include WHY when it's not obvious
- **Consistent formatting** - Follow the exact structure above
- **Scannable** - Developers should find answers in 3 seconds

## Workflow Steps

When the user provides Fiori Design Guidelines text:

1. **Read the current file** to find the correct alphabetical position
2. **Extract and structure** the information into the four required sections
3. **Optimize text** - remove redundancy, make concise, add emojis
4. **Insert at correct position** alphabetically
5. **Copy to source directory**: `cp .claude/skills/component-guidance.md skills/component-guidance.md`
6. **Confirm completion** briefly

## Common Optimizations

### From Fiori Text → Skill Format

**Too verbose:**
> "The button component is a user interface element that allows users to trigger various actions and operations within the application"

**Optimized:**
> "Buttons trigger actions when clicked, such as submitting forms, saving data, or opening menus."

**Too generic:**
> "Use buttons for actions"

**Specific:**
> "Use emphasized button (`fd-button--emphasized`) for the primary action on the screen"

**Missing alternative:**
> "Don't use buttons for navigation"

**With alternative:**
> "❌ Linking to a different page → Use link instead"

## Quality Checklist

Before completing, verify:
- [ ] Component is in correct alphabetical position
- [ ] Exactly 4 sections (Description, When to use, When to avoid, Best practices)
- [ ] No forbidden sections (Related components, Example usage, etc.)
- [ ] Emojis used correctly (❌ for avoid, ✅ ⚠️ ❌ for practices)
- [ ] Text is concise and actionable
- [ ] CSS class names included where relevant
- [ ] Both files updated (.claude/skills/ and skills/)
- [ ] No code examples included
