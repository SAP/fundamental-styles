---
name: review-pr
description: Review a pull request in fundamental-styles against SCSS coding standards, accessibility guidelines, BEM conventions, and project patterns. Use when the user says "review pr", "review pull request", "check pr", or provides a PR number to review.
argument-hint: "PR-number"
---

# PR Review: #$0

Perform a comprehensive review of pull request #$0 in the fundamental-styles repository, checking against project coding standards, accessibility requirements, and architectural patterns.

## Setup

If `$0` is empty or not a number, ask the user for a PR number before proceeding.

## Fetch PR Context

Gather all necessary information about the PR:

```bash
# PR metadata and description
gh pr view $0 --json title,body,author,state,isDraft,labels

# Full diff for review
gh pr diff $0

# List of changed files
gh pr diff $0 --name-only
```

## Review Checklist

Review each changed file against the applicable sections below. Report findings grouped by severity:
- **Blocking**: Must fix before merge (breaks functionality, violates critical standards)
- **Suggestion**: Should fix (best practices, maintainability)
- **Nit**: Optional improvements (style preferences, minor optimizations)

### 1. Commit & PR Format

Verify commit messages and PR title follow the conventional format:

**Expected format:** `<type>(<scope>): <subject>`

**Valid types:**
- `feat` - New feature or component
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - CSS/SCSS styling changes (not code style)
- `refactor` - Code refactoring without behavior change
- `test` - Adding or updating tests
- `build` - Build system or dependency changes
- `ci` - CI/CD configuration changes
- `chore` - Maintenance tasks

**Valid scopes:**
- `styles` - SCSS/CSS changes
- `docs` - Documentation
- `ci` - CI/CD
- Component names (e.g., `button`, `card`, `table`)

**Rules:**
- [ ] PR title follows format
- [ ] Commit messages follow format
- [ ] No `WIP` prefix unless marked as draft
- [ ] Scope is specific and accurate

### 2. SCSS Code Style (for *.scss files)

Check against `.claude/skills/scss-style-guide.md` standards:

#### BEM Naming
- [ ] Block variable defined: `$block: #{$fd-namespace}-component-name;`
- [ ] Block classes: `.#{$block}`
- [ ] Element classes: `.#{$block}__element`
- [ ] Modifier classes: `.#{$block}--modifier`
- [ ] No deviations from strict BEM pattern

#### Self-Contained Components
- [ ] **CRITICAL**: No styling of other components (e.g., `.fd-card .fd-button { }`)
- [ ] No cross-component dependencies
- [ ] Component works in isolation

#### Reset Mixin
- [ ] `@include fd-reset();` present at start of every block
- [ ] `@include fd-reset();` present for every element
- [ ] `fd-reset()` NOT used in modifiers (correct)

#### CSS Custom Properties Pattern
- [ ] CSS variables defined for all customizable properties
- [ ] Variable naming: `--fd{Component}_{Property}` format (e.g., `--fdCard_Background`)
- [ ] Properties use `var(--fdComponent_Property)` syntax
- [ ] Modifiers override variables, NOT properties directly
- [ ] Example:
  ```scss
  // ✅ CORRECT
  .#{$block} {
    --fdCard_Background: var(--sapTile_Background);
    background: var(--fdCard_Background);
    
    &--transparent {
      --fdCard_Background: transparent; // Override variable
    }
  }
  
  // ❌ WRONG
  .#{$block} {
    background: var(--sapTile_Background);
    
    &--transparent {
      background: transparent; // Setting property directly
    }
  }
  ```

#### Units & Values
- [ ] **BLOCKING**: No `px` units anywhere (use `rem`)
- [ ] Border widths in rem (e.g., `0.0625rem` = 1px)
- [ ] Theming variables used when available (e.g., `var(--sapTextColor)`)
- [ ] Unitless values for line-height, flex, z-index
- [ ] Zero doesn't need units (`margin: 0;`)

#### RTL Support - CRITICAL
- [ ] **BLOCKING**: No directional properties: `margin-left`, `margin-right`, `padding-left`, `padding-right`, `left`, `right`, `border-left`, `border-right`
- [ ] Logical properties used for horizontal spacing:
  - `margin-inline-start`, `margin-inline-end`, `margin-inline`
  - `padding-inline-start`, `padding-inline-end`, `padding-inline`
  - `inset-inline-start`, `inset-inline-end`
- [ ] Logical properties used for borders:
  - `border-inline-start`, `border-inline-end`
  - `border-start-start-radius`, `border-start-end-radius`
- [ ] Vertical spacing uses explicit properties:
  - `margin-block-start`, `margin-block-end`
  - `padding-block-start`, `padding-block-end`
- [ ] RTL mixins used when logical properties insufficient:
  - `@include fd-set-position-right()`
  - `@include fd-set-margin-left()`
- [ ] Physical corner names avoided when direction matters

#### State & Interactive Patterns
- [ ] State mixins used: `@include fd-hover()`, `@include fd-active()`, `@include fd-focus()`
- [ ] State changes use CSS variable overrides
- [ ] Interactive elements have cursor: pointer
- [ ] Focus states have sufficient contrast
- [ ] Disabled states prevent interaction

#### File Structure
- [ ] Correct imports: `@import "./new-settings";`, `@import "./mixins";`
- [ ] Block variable defined before usage
- [ ] Logical organization: variables → mixins → block → elements → modifiers → states

#### Nesting Depth
- [ ] Maximum 3 levels of nesting
- [ ] No tag selectors (e.g., `div`, `span`)
- [ ] No universal selectors (`*`)
- [ ] No complex specificity chains

#### Loops & Maps
- [ ] Repetitive patterns use `@each` loops
- [ ] Size variations use maps
- [ ] Color variations use maps
- [ ] No duplicate code for similar variations

#### Responsive & Compact
- [ ] Responsive breakpoints use mixins: `@include fd-media-sm()`, `@include fd-media-md()`
- [ ] Compact mode uses: `@include fd-compact-or-condensed()`
- [ ] Compact mode overrides variables, not properties

### 3. Accessibility (for HTML examples and patterns)

Check against `.claude/skills/accessibility-guide.md`:

#### Semantic HTML
- [ ] Native HTML elements used when possible (prefer `<button>` over `<div role="button">`)
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Lists use `<ul>`, `<ol>`, or `<dl>`
- [ ] Tables use `<table>` with proper headers

#### Labels & Form Controls
- [ ] **BLOCKING**: All form inputs have associated labels
- [ ] `for` attributes match existing `id` values
- [ ] Labels are properly connected (not orphaned)
- [ ] Icon-only buttons have `aria-label` or `aria-labelledby`

#### ARIA Roles & Required Attributes
Check that roles have their required companion attributes:

- [ ] **Range widgets** (`role="slider"`, `"progressbar"`) have:
  - `aria-valuenow`, `aria-valuemin`, `aria-valuemax`
- [ ] **Checkable widgets** (`role="checkbox"`, `"radio"`, `"switch"`) have:
  - `aria-checked="true|false"`
- [ ] **Selectable widgets** (`role="option"`, `"tab"`) have:
  - `aria-selected="true|false"`
- [ ] **Expandable widgets** (`role="combobox"`, disclosure buttons) have:
  - `aria-expanded="true|false"`
- [ ] **Popup triggers** have:
  - `aria-haspopup="menu|listbox|dialog|true"`
- [ ] **Modal dialogs** have:
  - `aria-modal="true"`
  - `aria-labelledby` or `aria-label`
- [ ] **Tabs interface**:
  - `tablist` contains `tab` elements
  - Each `tab` has `aria-selected`, `aria-controls`, unique `id`
  - Each `tabpanel` has matching `id` and `aria-labelledby`
- [ ] **Radio groups**:
  - `radiogroup` contains `radio` elements
  - Only one radio has `aria-checked="true"`
- [ ] **Menus**:
  - `menu`/`menubar` contains `menuitem` elements

#### ID References
- [ ] **BLOCKING**: All `aria-labelledby` values point to existing IDs
- [ ] **BLOCKING**: All `aria-describedby` values point to existing IDs
- [ ] **BLOCKING**: All `aria-controls` values point to existing IDs
- [ ] **BLOCKING**: All `for` attributes point to existing IDs
- [ ] IDs are unique within the page

#### Keyboard & Focus
- [ ] Interactive custom elements have `tabindex="0"` or `tabindex="-1"`
- [ ] No positive tabindex values (1, 2, 3, etc.)
- [ ] Focus indicators are visible
- [ ] Tab order is logical

#### Decorative vs Meaningful Content
- [ ] Decorative icons have `aria-hidden="true"`
- [ ] Meaningful icons have text alternatives
- [ ] Decorative images have empty alt (`alt=""`)
- [ ] Meaningful images have descriptive alt text

### 4. Component Patterns

#### Component Structure
- [ ] Component follows BEM structure
- [ ] Component has main documentation page
- [ ] Examples are complete and functional
- [ ] No missing closing tags
- [ ] Proper HTML5 structure

#### Design Tokens
- [ ] Uses SAP theming variables (`--sapTextColor`, `--sapTile_Background`, etc.)
- [ ] No hardcoded colors (use tokens)
- [ ] No hardcoded font sizes (use tokens)
- [ ] Tokens used consistently

#### States & Modifiers
- [ ] State classes follow convention: `is-error`, `is-disabled`, `is-selected`, `is-active`
- [ ] States use ARIA attributes where applicable: `aria-invalid`, `aria-disabled`, `aria-selected`
- [ ] Disabled state uses both `disabled` attribute AND `aria-disabled="true"`

### 5. Documentation

- [ ] New components have README.md or documentation page
- [ ] CLAUDE.md updated if component patterns change
- [ ] Breaking changes documented in PR description
- [ ] Migration guide provided for breaking changes
- [ ] Examples are self-contained and runnable

### 6. Testing & Quality

- [ ] Visual regression tests exist or updated (if applicable)
- [ ] New components have test coverage
- [ ] Examples are tested in major browsers
- [ ] RTL mode tested (if layout changes)
- [ ] Compact mode tested (if size changes)
- [ ] No console errors in examples

### 7. File Organization

- [ ] Component files in correct directory structure
- [ ] Consistent file naming (kebab-case)
- [ ] No unnecessary files
- [ ] No commented-out code blocks
- [ ] No debug statements left in code

## Common Anti-Patterns to Flag

Flag these as **Blocking** issues:

1. **Cross-component styling**: `.fd-card .fd-button { }`
2. **Missing fd-reset()**: Element without reset mixin
3. **Using px units**: Any `px` value in SCSS
4. **Directional properties**: `margin-left`, `padding-right`, `left`, `right`, `border-left`
5. **Setting properties in modifiers**: Instead of overriding variables
6. **Missing ARIA labels**: Icon-only buttons, form inputs
7. **Invalid ID references**: `aria-labelledby` pointing to non-existent ID
8. **Missing required ARIA attributes**: Slider without values, tab without aria-selected

## Output Format

Provide findings as a structured summary:

```markdown
## Review Summary: PR #1234

**Title:** [PR title]
**Author:** [author]
**Status:** [open/closed/merged]
**Overall Recommendation:** APPROVE / REQUEST CHANGES / COMMENT

---

### Blocking Issues (Must Fix)

#### [filename.scss:line]
- **Issue**: [Description of problem]
- **Fix**: [Specific fix with code example if applicable]

---

### Suggestions (Should Fix)

#### [filename.scss:line]
- **Issue**: [Description]
- **Improvement**: [Recommended approach]

---

### Nits (Optional)

#### [filename.scss:line]
- **Note**: [Minor improvement suggestion]

---

### Missing or Unclear

**Tests:**
- [ ] [List any new functionality that lacks tests]

**Documentation:**
- [ ] [List any API changes without docs]

**Breaking Changes:**
- [ ] [List any unannounced breaking changes]

---

### Positive Highlights

- [Mention good practices observed]
- [Call out particularly clean implementations]

---

### Next Steps

[Summarize what needs to happen before merge]
```

## Review Approach

1. **Start with structure**: Check commit format, PR title, overall organization
2. **File-by-file review**: Go through each changed file systematically
3. **Critical issues first**: Flag blocking issues immediately
4. **Context matters**: Consider if this is a new component, refactor, or bug fix
5. **Be specific**: Include line numbers and exact fixes
6. **Be constructive**: Explain WHY something is an issue and HOW to fix it
7. **Acknowledge good work**: Call out positive implementations

## Edge Cases

- **Refactoring PRs**: May have many changes; focus on consistency
- **Bug fixes**: Verify the fix doesn't introduce new issues
- **New components**: More thorough review of all patterns
- **Documentation PRs**: Focus on clarity, completeness, accuracy
- **Dependency updates**: Check for breaking changes in package.json

## Additional Resources

Reference the project style guides:
- [.claude/skills/scss-style-guide.md](/.claude/skills/scss-style-guide.md)
- [.claude/skills/accessibility-guide.md](/.claude/skills/accessibility-guide.md)
- [CLAUDE.md](/CLAUDE.md)

---

**Remember:** The goal is to maintain code quality, accessibility, and consistency across fundamental-styles while being constructive and helpful to contributors.
