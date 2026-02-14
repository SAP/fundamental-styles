# Future Enhancements

Based on AI agent testing and identified gaps in the current system.

## Test Results Summary

**Overall System Performance**: 70% effective
- Component discovery: 100% success
- Class generation: 90% valid HTML
- Component selection: 70% correct choice
- Accessibility compliance

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

**High-impact priorities** :
1. Add accessibility - Legal requirement, 90% improvement
2. Add use cases - 30% better component selection

This would bring system effectiveness from **70% → 95%**.

**Medium priorities** :
3. Modifier rules - Prevent invalid combinations
4. HTML examples - Faster implementation

**Optional enhancements** - Consider based on user feedback and AI agent usage patterns.

---

**Test Date**: 2026-02-13
**Status**: Priorities identified, implementation optional
**Expected Impact**: 70% → 95% effectiveness

