---
name: component-composition
description: How to combine fundamental-styles components correctly - required wrappers, nesting rules, and common composition patterns
metadata:
    tags: ['composition', 'structure', 'nesting', 'wrappers', 'patterns']
    keywords:
        [
            'composition',
            'combine-components',
            'nesting',
            'wrapper-elements',
            'form-item',
            'input-group',
            'popover',
            'dialog-structure',
            'required-wrappers',
            'component-hierarchy',
            'parent-child',
            'structure'
        ]
---

# Component Composition

This skill explains how to combine fundamental-styles components correctly, including required wrappers, nesting rules, and common composition patterns.

## When to Use This Skill

Use this skill when:

- The user asks "How do I combine [component A] with [component B]?"
- The user needs to understand component structure and nesting
- The user asks about required wrapper elements
- The user's component isn't working due to incorrect composition
- The user asks "Why do I need this wrapper element?"
- The user wants to understand parent-child relationships between components

---

## Core Composition Principles

### 1. Always Include Required Wrappers

Many components require specific wrapper elements to function correctly:

```html
<!-- ❌ Wrong - missing wrapper -->
<label class="fd-form-label">Name</label>
<input class="fd-input" />

<!-- ✅ Correct - wrapped in form-item -->
<div class="fd-form-item">
    <label class="fd-form-label">Name</label>
    <input class="fd-input" />
</div>
```

---

### 2. Follow the Component Hierarchy

Each component has a specific structure - don't skip levels:

```html
<!-- ❌ Wrong - missing table__row -->
<table class="fd-table">
    <tbody class="fd-table__body">
        <td class="fd-table__cell">Data</td>
    </tbody>
</table>

<!-- ✅ Correct - proper hierarchy -->
<table class="fd-table">
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell">Data</td>
        </tr>
    </tbody>
</table>
```

---

### 3. Understand Block Independence

Each component (block) is independent. Nesting blocks doesn't create a hierarchy:

```html
<!-- Both are independent blocks, not parent-child -->
<button class="fd-button">
    <i class="sap-icon--edit"></i>
</button>
```

`.fd-button` and `.sap-icon--edit` are two separate blocks living together, not a parent-child BEM relationship.

---

## Common Composition Patterns

### Form Item Composition

**Components:** Form Item + Form Label + Input + Form Message

**Structure:**

```html
<div class="fd-form-item">
    <label class="fd-form-label" for="input-id">Label Text</label>
    <input class="fd-input" id="input-id" type="text" />
</div>
```

**With validation message:**

```html
<div class="fd-form-item">
    <label class="fd-form-label fd-form-label--required" for="email">Email</label>
    <input class="fd-input is-error" id="email" type="email" aria-describedby="email-error" />
    <span class="fd-form-message fd-form-message--error" id="email-error"> Invalid email format </span>
</div>
```

**Why these wrappers?**

- `.fd-form-item` provides spacing and layout structure
- Keeps label, input, and message grouped together
- Enables proper responsive behavior

---

### Input Group Composition

**Components:** Input Group + Input + Button

**Basic input group:**

```html
<div class="fd-input-group">
    <input class="fd-input fd-input-group__input" type="text" placeholder="Search" />
    <span class="fd-input-group__addon fd-input-group__addon--button">
        <button class="fd-button fd-button--transparent" aria-label="Search">
            <i class="sap-icon--search"></i>
        </button>
    </span>
</div>
```

**With text addon:**

```html
<div class="fd-input-group">
    <span class="fd-input-group__addon fd-input-group__addon--before">$</span>
    <input class="fd-input fd-input-group__input" type="number" />
    <span class="fd-input-group__addon fd-input-group__addon--after">.00</span>
</div>
```

**Why these wrappers?**

- `.fd-input-group` establishes flex layout
- `.fd-input-group__input` modifier allows input to flex-grow
- `.fd-input-group__addon` positions addons correctly
- Ensures seamless visual connection between elements

---

### Popover + Menu (Contextual Menu)

**Components:** Popover (container) + Button (control/trigger) + Menu (body content)

**Structure:**

```html
<div class="fd-popover">
    <!-- Control/Trigger -->
    <div class="fd-popover__control">
        <button class="fd-button fd-button--transparent" aria-label="More actions">
            <i class="sap-icon--overflow"></i>
        </button>
    </div>

    <!-- Body with Menu -->
    <div class="fd-popover__body" aria-hidden="true">
        <nav class="fd-menu">
            <ul class="fd-menu__list">
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Edit</span>
                    </a>
                </li>
                <li class="fd-menu__item">
                    <a class="fd-menu__link" href="#">
                        <span class="fd-menu__title">Delete</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>
```

**Why this composition?**

- `.fd-popover` manages positioning and visibility
- `.fd-popover__control` wraps the trigger element
- `.fd-popover__body` contains the content (menu, form, etc.)
- Separates trigger from content for proper overlay behavior

---

### Dialog Composition

**Components:** Dialog + Bar (header/footer) + Title + Button

**Structure:**

```html
<div class="fd-dialog fd-dialog--active">
    <div class="fd-dialog__content">
        <!-- Header -->
        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 class="fd-title fd-title--h5">Dialog Title</h3>
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent" aria-label="Close">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </div>
        </header>

        <!-- Body -->
        <div class="fd-dialog__body">
            <p>Dialog content goes here</p>
        </div>

        <!-- Footer -->
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent">Cancel</button>
                </div>
            </div>
        </footer>
    </div>
</div>
```

**Why this structure?**

- `.fd-dialog` is the overlay container
- `.fd-dialog__content` contains all dialog content
- `.fd-dialog__header` uses `.fd-bar` for consistent header layout
- `.fd-dialog__footer` uses `.fd-bar` for consistent footer layout
- `.fd-bar__left` / `.fd-bar__right` position elements
- `.fd-bar__element` wraps each item in the bar

---

### Button + Icon + Text

**Components:** Button + Icon + Button Text

**Icon-only button (no text):**

```html
<button class="fd-button fd-button--transparent" aria-label="Edit">
    <i class="sap-icon--edit"></i>
</button>
```

**Button with icon and text:**

```html
<button class="fd-button fd-button--emphasized">
    <i class="sap-icon--save" role="presentation" aria-hidden="true"></i>
    <span class="fd-button__text">Save</span>
</button>
```

**Why the difference?**

- Icon-only: needs `aria-label` for accessibility (no visible text)
- Icon + text: text provides label, icon is decorative (`aria-hidden="true"`)
- `.fd-button__text` wrapper allows proper spacing between icon and text

---

### Table + Toolbar + Pagination

**Components:** Toolbar + Table + Pagination

**Structure:**

```html
<!-- Toolbar above table -->
<div class="fd-toolbar">
    <div class="fd-toolbar__group">
        <button class="fd-button fd-button--transparent fd-button--compact">
            <i class="sap-icon--add" role="presentation" aria-hidden="true"></i>
            <span class="fd-button__text">Add</span>
        </button>
    </div>
</div>

<!-- Table -->
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell">Name</th>
            <th class="fd-table__cell">Status</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell">John Doe</td>
            <td class="fd-table__cell">Active</td>
        </tr>
    </tbody>
</table>

<!-- Pagination below table -->
<div class="fd-pagination">
    <nav class="fd-pagination__nav">
        <a href="#" class="fd-button fd-button--transparent" aria-label="Previous">
            <i class="sap-icon--navigation-left-arrow"></i>
        </a>
        <a href="#" class="fd-button fd-button--transparent">1</a>
        <a href="#" class="fd-button fd-button--transparent is-active" aria-current="page">2</a>
        <a href="#" class="fd-button fd-button--transparent">3</a>
        <a href="#" class="fd-button fd-button--transparent" aria-label="Next">
            <i class="sap-icon--navigation-right-arrow"></i>
        </a>
    </nav>
</div>
```

**Why separate components?**

- Each is an independent block
- Toolbar provides actions for the table
- Table displays data
- Pagination controls data navigation
- Keeping them separate allows flexible positioning

---

### Checkbox/Radio + Label

**Components:** Checkbox/Radio + Label

**Checkbox structure:**

```html
<input type="checkbox" class="fd-checkbox" id="checkbox-1" />
<label class="fd-checkbox__label" for="checkbox-1">
    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
    <span class="fd-checkbox__label-container">
        <span class="fd-checkbox__text">Accept terms and conditions</span>
    </span>
</label>
```

**Radio structure:**

```html
<input type="radio" class="fd-radio" id="radio-1" name="group" />
<label class="fd-radio__label" for="radio-1">
    <span class="fd-radio__text">Option 1</span>
</label>
```

**Why this structure?**

- Input comes first (required for `:checked` CSS selectors)
- Label wraps visual elements
- `.fd-checkbox__checkmark` is the custom styled checkbox
- `.fd-checkbox__label-container` and `.fd-checkbox__text` allow proper text wrapping

---

### Panel + Content

**Components:** Panel + Panel Header + Panel Body

**Structure:**

```html
<div class="fd-panel">
    <div class="fd-panel__header">
        <h3 class="fd-panel__title">Panel Title</h3>
        <button class="fd-button fd-button--transparent fd-panel__button" aria-label="Expand">
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
    <div class="fd-panel__content">
        <p>Panel content goes here</p>
    </div>
</div>
```

**Expandable panel:**

```html
<div class="fd-panel fd-panel--expandable">
    <div class="fd-panel__header">
        <h3 class="fd-panel__title">Expandable Panel</h3>
        <button class="fd-button fd-button--transparent fd-panel__button" aria-label="Expand" aria-expanded="false">
            <i class="sap-icon--slim-arrow-right"></i>
        </button>
    </div>
    <div class="fd-panel__content" hidden>
        <p>Collapsible content</p>
    </div>
</div>
```

**Why this structure?**

- `.fd-panel` is the container
- `.fd-panel__header` contains title and expand button
- `.fd-panel__content` holds the body content
- `--expandable` modifier enables collapse/expand behavior

---

### List + List Items

**Components:** List + List Item + List Title + List Text

**Basic list:**

```html
<ul class="fd-list">
    <li class="fd-list__item">
        <span class="fd-list__title">Item 1</span>
    </li>
    <li class="fd-list__item">
        <span class="fd-list__title">Item 2</span>
    </li>
</ul>
```

**List with byline (additional text):**

```html
<ul class="fd-list fd-list--byline">
    <li class="fd-list__item">
        <div class="fd-list__content">
            <div class="fd-list__title">John Doe</div>
            <div class="fd-list__byline">Software Engineer</div>
        </div>
    </li>
    <li class="fd-list__item">
        <div class="fd-list__content">
            <div class="fd-list__title">Jane Smith</div>
            <div class="fd-list__byline">Product Manager</div>
        </div>
    </li>
</ul>
```

**Why these elements?**

- `.fd-list` establishes the list container
- `.fd-list__item` wraps each list entry
- `.fd-list__content` groups title and byline
- `.fd-list__title` is the main text
- `.fd-list__byline` is secondary/supporting text

---

### Card Structure

**Components:** Card + Card Header + Card Content

**Structure:**

```html
<div class="fd-card">
    <div class="fd-card__header">
        <h3 class="fd-card__title">Card Title</h3>
        <div class="fd-card__subtitle">Subtitle text</div>
    </div>
    <div class="fd-card__content">
        <p>Card content goes here</p>
    </div>
    <div class="fd-card__footer">
        <button class="fd-button fd-button--transparent">Action</button>
    </div>
</div>
```

**Why this structure?**

- `.fd-card` is the container with shadow/border
- `.fd-card__header` groups title and subtitle
- `.fd-card__content` holds the main content
- `.fd-card__footer` (optional) contains actions

---

### Breadcrumb Composition

**Components:** Breadcrumb + Breadcrumb Item + Link

**Structure:**

```html
<nav aria-label="Breadcrumb">
    <ul class="fd-breadcrumb">
        <li class="fd-breadcrumb__item">
            <a class="fd-breadcrumb__link" href="#">Home</a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-breadcrumb__link" href="#">Products</a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-breadcrumb__link" aria-current="page">Details</a>
        </li>
    </ul>
</nav>
```

**With custom separator:**

```html
<ul class="fd-breadcrumb fd-breadcrumb--backslash">
    <li class="fd-breadcrumb__item">
        <a class="fd-breadcrumb__link" href="#">Home</a>
    </li>
    <li class="fd-breadcrumb__item">
        <a class="fd-breadcrumb__link" href="#">Products</a>
    </li>
    <li class="fd-breadcrumb__item">
        <span class="fd-breadcrumb__link" aria-current="page">Details</span>
    </li>
</ul>
```

**Why this structure?**

- `<nav>` with `aria-label="Breadcrumb"` for accessibility
- `.fd-breadcrumb` is the list container
- `.fd-breadcrumb__item` wraps each crumb
- `.fd-breadcrumb__link` for clickable items
- Current page uses `aria-current="page"`
- Separator modifiers: `--backslash`, `--double-greater-than`

---

### Message Strip Composition

**Components:** Message Strip + Message Strip Text

**Basic message:**

```html
<div class="fd-message-strip fd-message-strip--error" role="alert">
    <p class="fd-message-strip__text">Error: Unable to save changes</p>
</div>
```

**With dismiss button:**

```html
<div class="fd-message-strip fd-message-strip--warning" role="alert">
    <p class="fd-message-strip__text">Warning: Changes are not saved</p>
    <button class="fd-button fd-button--transparent fd-message-strip__close" aria-label="Close">
        <i class="sap-icon--decline"></i>
    </button>
</div>
```

**Why this structure?**

- `.fd-message-strip` is the container with semantic color
- `role="alert"` announces to screen readers
- `.fd-message-strip__text` contains the message
- `.fd-message-strip__close` (optional) allows dismissal

---

## Required vs Optional Wrappers

### Always Required

These wrappers are **mandatory** for the component to work:

| Component   | Required Wrapper                             | Why                    |
| ----------- | -------------------------------------------- | ---------------------- |
| Form fields | `.fd-form-item`                              | Layout and spacing     |
| Input group | `.fd-input-group`                            | Flex layout for addons |
| Popover     | `.fd-popover__control` + `.fd-popover__body` | Positioning logic      |
| Dialog      | `.fd-dialog__content`                        | Centering and sizing   |
| Table cells | `.fd-table__row`                             | Table structure        |
| List items  | `.fd-list__item`                             | List styling           |
| Menu items  | `.fd-menu__item`                             | Menu structure         |

---

### Optional Wrappers

These enhance functionality but aren't strictly required:

| Component | Optional Wrapper                | Benefit                |
| --------- | ------------------------------- | ---------------------- |
| Panel     | `.fd-panel__header`             | Structured header area |
| Card      | `.fd-card__header`              | Organized title area   |
| Button    | `.fd-button__text`              | Icon-text spacing      |
| Checkbox  | `.fd-checkbox__label-container` | Text wrapping          |

---

## Common Composition Mistakes

### ❌ Missing Base Class with Modifier

```html
<!-- Wrong -->
<button class="fd-button--emphasized">Save</button>

<!-- Correct -->
<button class="fd-button fd-button--emphasized">Save</button>
```

---

### ❌ Skipping Required Wrapper

```html
<!-- Wrong - missing form-item wrapper -->
<label class="fd-form-label">Name</label>
<input class="fd-input" />

<!-- Correct -->
<div class="fd-form-item">
    <label class="fd-form-label">Name</label>
    <input class="fd-input" />
</div>
```

---

### ❌ Wrong Element Order

```html
<!-- Wrong - label before input breaks :checked selector -->
<label class="fd-checkbox__label" for="cb1">
    <span class="fd-checkbox__checkmark"></span>
    <span class="fd-checkbox__text">Option</span>
</label>
<input type="checkbox" class="fd-checkbox" id="cb1" />

<!-- Correct - input first -->
<input type="checkbox" class="fd-checkbox" id="cb1" />
<label class="fd-checkbox__label" for="cb1">
    <span class="fd-checkbox__checkmark"></span>
    <span class="fd-checkbox__text">Option</span>
</label>
```

---

### ❌ Missing Icon Accessibility

```html
<!-- Wrong - icon-only button without label -->
<button class="fd-button">
    <i class="sap-icon--edit"></i>
</button>

<!-- Correct - with aria-label -->
<button class="fd-button" aria-label="Edit">
    <i class="sap-icon--edit"></i>
</button>
```

---

### ❌ Incorrect Hierarchy

```html
<!-- Wrong - missing table__row -->
<table class="fd-table">
    <tbody class="fd-table__body">
        <td class="fd-table__cell">Data</td>
    </tbody>
</table>

<!-- Correct -->
<table class="fd-table">
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell">Data</td>
        </tr>
    </tbody>
</table>
```

---

## Composition Decision Tree

### "Do I need a wrapper?"

1. **Check the component documentation** - Does it show a wrapper?
2. **Look for double underscores** - `.fd-component__element` means it must be inside `.fd-component`
3. **Test without it** - If layout breaks, you need it
4. **Common wrappers:**
    - Form fields → `.fd-form-item`
    - Input with addons → `.fd-input-group`
    - Popover content → `.fd-popover__body`
    - Dialog content → `.fd-dialog__content`
    - Bar items → `.fd-bar__element`

---

### "Which component goes inside which?"

**Container → Content relationship:**

```
fd-form-item
  └─ fd-form-label
  └─ fd-input
  └─ fd-form-message

fd-input-group
  └─ fd-input-group__addon
  └─ fd-input-group__input (with fd-input)
  └─ fd-input-group__addon

fd-popover
  └─ fd-popover__control
      └─ fd-button (trigger)
  └─ fd-popover__body
      └─ fd-menu (or any content)

fd-dialog
  └─ fd-dialog__content
      └─ fd-dialog__header (fd-bar)
      └─ fd-dialog__body
      └─ fd-dialog__footer (fd-bar)

fd-card
  └─ fd-card__header
  └─ fd-card__content
  └─ fd-card__footer

fd-panel
  └─ fd-panel__header
  └─ fd-panel__content

fd-table
  └─ fd-table__header
      └─ fd-table__row
          └─ fd-table__cell
  └─ fd-table__body
      └─ fd-table__row
          └─ fd-table__cell
```

---

## Quick Reference: Common Compositions

| Pattern             | Structure                                                                         |
| ------------------- | --------------------------------------------------------------------------------- |
| **Form Field**      | `fd-form-item` > `fd-form-label` + `fd-input` + `fd-form-message`                 |
| **Input Group**     | `fd-input-group` > `fd-input-group__addon` + `fd-input` + `fd-input-group__addon` |
| **Button + Icon**   | `fd-button` > `sap-icon` + `fd-button__text`                                      |
| **Contextual Menu** | `fd-popover` > `fd-popover__control` (button) + `fd-popover__body` (menu)         |
| **Dialog**          | `fd-dialog` > `fd-dialog__content` > header + body + footer                       |
| **Card**            | `fd-card` > `fd-card__header` + `fd-card__content` + `fd-card__footer`            |
| **Panel**           | `fd-panel` > `fd-panel__header` + `fd-panel__content`                             |
| **Table**           | `fd-table` > `fd-table__header/body` > `fd-table__row` > `fd-table__cell`         |
| **List**            | `fd-list` > `fd-list__item` > `fd-list__content` > `fd-list__title`               |
| **Checkbox**        | `input.fd-checkbox` + `label.fd-checkbox__label` > checkmark + text               |

---

## Summary

**Key Principles:**

1. Always include required wrappers (form-item, input-group, popover\_\_body, etc.)
2. Follow the documented component hierarchy (don't skip levels)
3. Icon-only buttons need `aria-label`
4. Icon + text buttons need `fd-button__text` wrapper
5. Always include base class before modifiers
6. Check component documentation for correct structure

**When in doubt:**

- Look for `__` (double underscore) - indicates element must be inside its block
- Check if layout/spacing looks wrong - you probably need a wrapper
- Reference the component guidance or layout patterns skills for examples
