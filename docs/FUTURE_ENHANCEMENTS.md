# Future Enhancements

Based on AI agent testing and external AI agent feedback.

## External AI Agent Feedback (2026-02-14)

Feedback from an AI agent attempting to use fundamental-styles from fundamental-ngx repository.

### What Worked
- AI Component Index referenced in README
- Consistent BEM naming convention (`fd-{component}`, `sap-margin-{size}`)
- Comprehensive utility classes

### What Failed
| Issue | Impact | Current State |
|-------|--------|---------------|
| No CLAUDE.md | First place AI agents look | 404 |
| No llms.txt | Standard AI discovery file | Missing |
| CSS classes not in README | Had to parse node_modules | Only in source |
| Storybook not AI-accessible | Returns JS, not CSS | No fallback |
| Design tokens scattered | No single reference | In SCSS files |
| Package structure unclear | Which package for what? | Not documented |

---

## Priority 0: AI Discoverability (NEW - From Feedback)

### 1. Create CLAUDE.md (CRITICAL) ✅ DONE

**Status**: Completed 2026-02-14
**Location**: `/CLAUDE.md` (root)
**Contains**:
- Package overview and install commands
- Quick start HTML examples
- Common component examples (button, input, table, dialog)
- Utility classes reference (sap-margin, sap-flex, sap-padding)
- Design tokens reference (--sap* variables)
- Theme list
- Links to detailed docs

### 2. Create llms.txt (HIGH) ✅ DONE

**Status**: Completed 2026-02-14
**Location**: `/llms.txt` (root)
**Contains**: Package overview, AI resource links, quick start, naming conventions

### 3. Update README.md with AI Section (MEDIUM) ✅ DONE

**Status**: Completed 2026-02-14
**Contains**: Table with links to CLAUDE.md, llms.txt, ai-component-index.md, component-catalog.json, component-relationships.json

### 4. Add Utility Classes to JSON (MEDIUM) ✅ DONE

**Status**: Completed 2026-02-14
**Location**: `/docs/utility-classes.json`
**Script**: `scripts/generate-utility-classes.js`
**Statistics**: 13 categories, 227 classes

**Categories**:
- margin, padding, flex, display
- shadow, borderRadius, border
- typography, heading, elevation
- position, overflow, accessibility

---

## Priority 1: Critical Gaps (Must Fix)

### 1. Add Accessibility Information (CRITICAL)

**Issue**: 87% of components missing accessibility metadata
**Impact**: Generates inaccessible HTML, legal compliance risk

**What's needed for each component:**
```json
{
  "accessibility": {
    "role": "button",
    "required": ["aria-label if no text"],
    "optional": ["aria-pressed for toggle"],
    "keyboardSupport": ["Enter", "Space"],
    "focusManagement": "Visible focus indicator required"
  }
}
```

**Components to prioritize** (top 30 by usage):
- Interactive: button, link, input, select, checkbox, radio, textarea
- Dialogs: dialog, popover, message-box, alert
- Navigation: tabs, breadcrumb, shellbar, side-nav
- Data display: table, list, tree, card

**Approach**:
1. Automated: Extract from SCSS/stories where possible
2. Manual: Fill remaining components (accessibility requires human expertise)
3. Validation: Test with screen readers

### 2. Add Use Case Guidance (HIGH)

**Issue**: 83% of components have no use cases
**Impact**: 30% wrong component selection

**What's needed:**
```json
{
  "useCases": [
    "Critical page-level errors requiring immediate attention",
    "System-wide warnings affecting all users"
  ],
  "avoidWhen": [
    "Inline validation errors (use message-strip)",
    "Temporary confirmations (use message-toast)"
  ]
}
```

**Example confusion points identified:**
- 5 feedback components (alert, message-strip, message-toast, notification, message-page) - no guidance on which to use
- Navigation components (side-nav vs vertical-nav vs navigation-list) - unclear differences
- Form components overlapping purposes

**Top 20 components needing use cases:**
1. button, input, form-item, form-label
2. table, list, card, panel
3. dialog, popover, alert, message-strip
4. link, breadcrumb, tabs
5. checkbox, radio, select, textarea

## Priority 2: Helpful Improvements

### 3. Modifier Combination Rules (MEDIUM)

**Issue**: 20% invalid class combinations
**Impact**: Invalid HTML that may not render correctly

**What's needed:**
```json
{
  "modifierRules": {
    "mutuallyExclusive": [
      ["fd-button--emphasized", "fd-button--ghost", "fd-button--transparent"]
    ],
    "recommended": [
      ["fd-button--emphasized", "fd-button--compact"]
    ]
  }
}
```

**Approach**: Analyze SCSS for conflicting styles, document in schemas

### 4. More HTML Examples (LOW)

**Issue**: Complex components need full structural examples
**Impact**: 10% slower implementation for complex components

**Needed for:**
- Table (with sortable columns, selectable rows)
- Calendar (with full structure)
- Form patterns (login, registration, search)
- Dialog (with header, body, footer structure)

## Optional Enhancements (Phase 3 & 4)

### YAML Templates
- Create `.yaml` templates for common component patterns
- Include pre-filled accessibility attributes

### Component Selector Decision Tree
- Interactive decision tree for component selection
- Question-based navigation

### Storybook Data Export
- Export Storybook stories to JSON
- Include rendered examples

### Data Attributes in HTML Examples
- Add `data-component`, `data-modifier` attributes
- Enables easier AI parsing
- **Effort**: 1-2 hours

### AI Agent Testing
- Test with Claude Code, GitHub Copilot, GPT-4
- Document which agents work best

### Best Practices Documentation
- How to prompt AI agents effectively
- Common patterns and anti-patterns

### Tutorials
- "Build a form with AI assistance"
- "Create a data table"
- "Implement navigation"

**Completed**: Button, Input, Table, Dialog

**Remaining** (16 components):
- Select, Checkbox, Radio, Link, Popover
- Card, Alert, Message Strip, Icon, Avatar
- Shellbar, Textarea, Form Item, Form Label, List
- Menu

**Note**: With full automation in place, individual component READMEs are less critical. The component-catalog.json now has all 120 components documented.

---

## Recommendation

**Immediate priorities** (from external feedback):
1. Create CLAUDE.md - 1-2 hours, immediate AI discoverability
2. Create llms.txt - 30 min, standard AI discovery
3. Document utility classes - 2-3 hours, most common use case

**High-impact priorities** (from testing):
4. Add accessibility - Legal requirement, 90% improvement
5. Add use cases - 30% better component selection

**Combined impact**: 70% → 95%+ effectiveness

**Medium priorities**:
6. Design tokens reference - Enables theming
7. Modifier rules - Prevent invalid combinations
8. HTML examples - Faster implementation

---

## Summary Table

| Priority | Task | Effort | Impact | Status |
|----------|------|--------|--------|--------|
| P0 | CLAUDE.md | 1-2h | Critical | ✅ Done |
| P0 | llms.txt | 30m | High | ✅ Done |
| P0 | README AI section | 15m | Medium | ✅ Done |
| P0 | Utility classes in JSON | 2-3h | High | ✅ Done |
| P1 | Accessibility info | 3-4h | Critical | Pending |
| P1 | Use case guidance | 2-3h | High | Pending |
| P2 | Design tokens | 2-3h | Medium | Pending |
| P2 | Modifier rules | 1-2h | Medium | Pending |
| P2 | HTML examples | 2-3h | Low | Pending |

---

**Last Updated**: 2026-02-14
**Status**: Priorities identified from internal testing + external AI agent feedback
**Expected Impact**: 70% → 95%+ effectiveness

