---
name: bem-naming
description: BEM (Block Element Modifier) methodology and naming conventions used in fundamental-styles with real examples
metadata:
    tags: ['bem', 'naming', 'conventions', 'methodology', 'css', 'classes']
    keywords:
        [
            'bem',
            'block-element-modifier',
            'naming-convention',
            'css-classes',
            'fd-prefix',
            'modifier',
            'element',
            'double-underscore',
            'double-hyphen',
            'class-names'
        ]
---

# BEM Naming in Fundamental Styles

This skill explains the BEM (Block Element Modifier) methodology used in fundamental-styles and provides naming patterns with real examples.

## When to Use This Skill

Use this skill when:

- The user asks "How do I name CSS classes in fundamental-styles?"
- The user asks about BEM methodology
- The user wants to understand class naming patterns
- The user asks "What does `fd-button--emphasized` mean?"
- The user needs to create custom variants or understand modifier classes
- The user asks about the `fd-` prefix

---

## What is BEM?

**BEM** stands for **Block Element Modifier** - a naming convention for CSS classes that makes code more readable, maintainable, and predictable.

### BEM Structure

```
.block { }
.block__element { }
.block--modifier { }
.block__element--modifier { }
```

### BEM in Fundamental Styles

All fundamental-styles components use the `fd-` prefix and follow strict BEM conventions:

```
.fd-{block}
.fd-{block}__{element}
.fd-{block}--{modifier}
.fd-{block}__{element}--{modifier}
```

---

## The Three Parts of BEM

### 1. Block (Component)

The **block** is the top-level component - a standalone, meaningful entity.

**Pattern:** `.fd-{block-name}`

**Examples:**

- `.fd-button` - Button component
- `.fd-input` - Input component
- `.fd-card` - Card component
- `.fd-table` - Table component
- `.fd-dialog` - Dialog component

**Rules:**

- ✅ Use lowercase
- ✅ Use hyphens for multi-word blocks: `.fd-message-strip`
- ✅ Always prefix with `fd-`
- ❌ Don't nest block classes (`.fd-button .fd-icon` is two blocks, not nested)

---

### 2. Element (Sub-component)

An **element** is a part of a block that has no meaning outside its parent block. Uses double underscores `__`.

**Pattern:** `.fd-{block}__{element-name}`

**Examples:**

- `.fd-button__text` - Text inside a button
- `.fd-table__cell` - Cell inside a table
- `.fd-table__row` - Row inside a table
- `.fd-dialog__header` - Header inside a dialog
- `.fd-dialog__body` - Body inside a dialog
- `.fd-dialog__footer` - Footer inside a dialog
- `.fd-card__header` - Header inside a card
- `.fd-input__addon` - Addon inside an input group

**Rules:**

- ✅ Elements belong to their block: `.fd-button__text` only exists inside `.fd-button`
- ✅ Use double underscores `__` to separate block and element
- ✅ Elements can have multiple words: `.fd-button__text-content`
- ❌ Don't create grandchild elements: `.fd-block__element__subelement` - flatten instead

---

### 3. Modifier (Variation)

A **modifier** defines the appearance, state, or behavior of a block or element. Uses double hyphens `--`.

**Pattern:**

- `.fd-{block}--{modifier-name}` (block modifier)
- `.fd-{block}__{element}--{modifier-name}` (element modifier)

**Examples - Block Modifiers:**

- `.fd-button--emphasized` - Primary/emphasized button style
- `.fd-button--positive` - Positive semantic button (green)
- `.fd-button--negative` - Negative semantic button (red)
- `.fd-button--transparent` - Transparent button style
- `.fd-button--compact` - Compact size button
- `.fd-input--compact` - Compact size input
- `.fd-table--compact` - Compact size table

**Examples - Element Modifiers:**

- `.fd-table__cell--status` - Status cell variant
- `.fd-table__row--activable` - Row that can be activated
- `.fd-list__item--link` - List item styled as link

**Rules:**

- ✅ Use double hyphens `--` to separate block/element and modifier
- ✅ Add modifier to the base class: `class="fd-button fd-button--emphasized"`
- ✅ Modifiers can be combined: `class="fd-button fd-button--emphasized fd-button--compact"`
- ❌ Never use modifier alone: ❌ `class="fd-button--emphasized"` without `.fd-button`

---

## Real Example: Button Component

### Block (Base Button)

```html
<button class="fd-button">Default Button</button>
```

**Class:** `.fd-button`
**What it is:** The block - represents the button component itself

---

### Element (Button Text)

```html
<button class="fd-button">
    <i class="sap-icon--accept"></i>
    <span class="fd-button__text">Accept</span>
</button>
```

**Class:** `.fd-button__text`
**What it is:** An element - the text portion inside the button
**Why:** Allows styling the text separately from icons

---

### Modifiers (Button Variants)

#### Visual Style Modifiers

```html
<!-- Emphasized (Primary) -->
<button class="fd-button fd-button--emphasized">Save</button>

<!-- Transparent (Ghost) -->
<button class="fd-button fd-button--transparent">Cancel</button>
```

**Classes:** `.fd-button--emphasized`, `.fd-button--transparent`
**What they are:** Modifiers that change button appearance

---

#### Semantic Modifiers

```html
<!-- Positive (Success/Approve) -->
<button class="fd-button fd-button--positive">Approve</button>

<!-- Negative (Danger/Reject) -->
<button class="fd-button fd-button--negative">Reject</button>

<!-- Critical (Warning) -->
<button class="fd-button fd-button--attention">Warning</button>
```

**Classes:** `.fd-button--positive`, `.fd-button--negative`, `.fd-button--attention`
**What they are:** Semantic modifiers with color meaning

---

#### Size Modifiers

```html
<!-- Compact size -->
<button class="fd-button fd-button--compact">Compact</button>
```

**Class:** `.fd-button--compact`
**What it is:** Size modifier for dense layouts

---

### Combining Modifiers

Multiple modifiers can be combined on the same element:

```html
<button class="fd-button fd-button--emphasized fd-button--compact">Save</button>
```

**Result:** A button that is both emphasized (primary style) and compact (smaller size)

**Pattern:**

```
class="fd-button fd-button--{modifier1} fd-button--{modifier2}"
```

---

## Common Patterns Across Components

### Size Modifiers

Most components support `--compact` for dense layouts:

```html
<button class="fd-button fd-button--compact">Button</button>
<input class="fd-input fd-input--compact" />
<table class="fd-table fd-table--compact">
    ...
</table>
```

---

### Semantic State Modifiers

Many components use semantic colors:

```html
<!-- Positive (green/success) -->
<span class="fd-object-status fd-object-status--positive">Active</span>
<button class="fd-button fd-button--positive">Approve</button>

<!-- Negative (red/error) -->
<span class="fd-object-status fd-object-status--negative">Error</span>
<button class="fd-button fd-button--negative">Reject</button>

<!-- Critical (orange/warning) -->
<span class="fd-object-status fd-object-status--critical">Warning</span>
<div class="fd-message-strip fd-message-strip--warning">...</div>

<!-- Informative (blue/info) -->
<span class="fd-object-status fd-object-status--informative">Info</span>
<div class="fd-message-strip fd-message-strip--information">...</div>
```

**Semantic states:** `--positive`, `--negative`, `--critical`, `--informative`

---

### State Classes

Fundamental styles also uses state classes with `is-` prefix for dynamic states:

```html
<!-- Error state -->
<input class="fd-input is-error" />

<!-- Success state -->
<input class="fd-input is-success" />

<!-- Disabled state -->
<button class="fd-button" disabled aria-disabled="true">Disabled</button>

<!-- Selected state -->
<tr class="fd-table__row is-selected">
    ...
</tr>

<!-- Active state -->
<div class="fd-list__item is-active">...</div>
```

**State classes:** `is-error`, `is-success`, `is-warning`, `is-disabled`, `is-selected`, `is-active`, `is-focus`

**Note:** State classes are NOT BEM modifiers - they're separate utility classes for dynamic states.

---

## More Complex Example: Table

```html
<table class="fd-table fd-table--compact">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--checkbox">
                <input type="checkbox" class="fd-checkbox" />
            </th>
            <th class="fd-table__cell">Name</th>
            <th class="fd-table__cell">Status</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row is-selected">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input type="checkbox" class="fd-checkbox" checked />
            </td>
            <td class="fd-table__cell">John Doe</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--positive">Active</span>
            </td>
        </tr>
    </tbody>
</table>
```

**BEM breakdown:**

- **Block:** `.fd-table` (with modifier `--compact`)
- **Elements:** `.fd-table__header`, `.fd-table__body`, `.fd-table__row`, `.fd-table__cell`
- **Element Modifier:** `.fd-table__cell--checkbox`
- **State Class:** `is-selected` on the row

---

## Why BEM?

### Benefits

1. **Clarity:** Class names explain their purpose
    - `.fd-button__text` - clearly text inside a button
    - `.fd-button--emphasized` - clearly a button variation

2. **No conflicts:** BEM prevents naming collisions
    - `.fd-dialog__header` won't conflict with `.fd-card__header`

3. **Predictability:** Easy to guess class names
    - If there's `.fd-input`, there's probably `.fd-input--compact`

4. **Maintainability:** Easy to find and update styles
    - All button variants start with `.fd-button--`

5. **Scalability:** Works well in large codebases
    - Clear hierarchy and relationships

---

## Quick Reference

| Pattern                              | Example                     | Meaning                 |
| ------------------------------------ | --------------------------- | ----------------------- |
| `.fd-{block}`                        | `.fd-button`                | Component itself        |
| `.fd-{block}__{element}`             | `.fd-button__text`          | Part of component       |
| `.fd-{block}--{modifier}`            | `.fd-button--emphasized`    | Variant of component    |
| `.fd-{block}__{element}--{modifier}` | `.fd-table__cell--checkbox` | Variant of element      |
| `is-{state}`                         | `is-selected`               | Dynamic state (NOT BEM) |

---

## Best Practices

✅ **Do:**

- Always include the base class: `class="fd-button fd-button--emphasized"`
- Use BEM for component structure: `.fd-dialog__header`
- Use modifiers for variants: `.fd-button--positive`
- Use state classes for dynamic states: `is-selected`
- Combine multiple modifiers: `fd-button fd-button--emphasized fd-button--compact`

❌ **Don't:**

- Use modifier alone: ❌ `class="fd-button--emphasized"` (missing `.fd-button`)
- Create deep nesting: ❌ `.fd-block__element__subelement`
- Mix BEM with other conventions: ❌ `.fd-button.emphasized`
- Use camelCase: ❌ `.fd-buttonText` (use `.fd-button__text`)

---

## Summary

**BEM Formula:**

```
.fd-{block}                              → Component
.fd-{block}__{element}                   → Part of component
.fd-{block}--{modifier}                  → Variant of component
.fd-{block}__{element}--{modifier}       → Variant of element
```

**Remember:**

- `fd-` = fundamental-styles prefix
- `__` = element separator (double underscore)
- `--` = modifier separator (double hyphen)
- Base class + modifiers: `fd-button fd-button--emphasized`
