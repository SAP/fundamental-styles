---
name: accessibility-guide
description: Accessibility guidelines for writing component examples in fundamental-styles with proper ARIA, semantic HTML, and WCAG compliance
---

# Accessibility Guide for fundamental-styles

**When to use this skill:**

- Writing HTML examples for component documentation
- Creating new component demos
- Reviewing component accessibility
- Fixing accessibility issues in examples
- Questions about ARIA roles and attributes

## Core Principles

### 1. Semantic HTML First

Always prefer native HTML elements over ARIA roles when possible.

✅ **DO:**

```html
<button>Click me</button>
<nav>...</nav>
<header>...</header>
<input type="checkbox" />
```

❌ **DON'T:**

```html
<div role="button">Click me</div>
<div role="navigation">...</div>
<div role="banner">...</div>
<div role="checkbox"></div>
```

**Why:** Native elements provide built-in keyboard support, focus management, and semantics without JavaScript.

### 2. Labels MUST Be Properly Connected

Every form control must have an accessible label.

✅ **DO - Use `for` and `id`:**

```html
<label for="username">Username:</label> <input id="username" type="text" name="username" />
```

✅ **DO - Nested label (alternative):**

```html
<label>
    Username:
    <input type="text" name="username" />
</label>
```

✅ **DO - Using `aria-labelledby` for complex labels:**

```html
<span id="label-firstname">First Name</span>
<span id="label-required">(required)</span>
<input type="text" aria-labelledby="label-firstname label-required" />
```

❌ **DON'T - Missing connection:**

```html
<label>Username</label>
<input type="text" />
<!-- No for/id connection -->
```

❌ **DON'T - Non-existent ID reference:**

```html
<label for="nonexistent">Username</label>
<input id="username" type="text" />
<!-- Mismatched IDs -->
```

### 3. ID References Must Be Valid

When using `aria-labelledby`, `aria-describedby`, or `for` attributes, the referenced IDs **must exist in the DOM**.

✅ **DO:**

```html
<h2 id="dialog-title">Confirm Action</h2>
<div role="dialog" aria-labelledby="dialog-title" aria-describedby="dialog-desc">
    <p id="dialog-desc">Are you sure you want to proceed?</p>
    <button>Confirm</button>
</div>
```

❌ **DON'T:**

```html
<div role="dialog" aria-labelledby="missing-title">
    <!-- ID 'missing-title' doesn't exist -->
</div>
```

**Validation checklist:**

- [ ] Every `for` attribute points to an existing `id`
- [ ] Every `aria-labelledby` references existing ID(s)
- [ ] Every `aria-describedby` references existing ID(s)
- [ ] Every `aria-controls` references existing ID(s)
- [ ] IDs are unique within the page

## ARIA Role Requirements

### Roles That Require Companion Attributes

Some ARIA roles **only work when paired with specific attributes**. Missing these makes the component inaccessible.

#### 1. Range Widgets (slider, spinbutton, progressbar, scrollbar)

**MUST include:**

- `aria-valuenow` - Current value
- `aria-valuemin` - Minimum value
- `aria-valuemax` - Maximum value

✅ **DO:**

```html
<div role="slider" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" aria-label="Volume" tabindex="0"></div>

<div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" aria-label="Upload progress">60%</div>
```

❌ **DON'T:**

```html
<div role="slider" aria-label="Volume" tabindex="0"></div>
<!-- Missing aria-valuenow, aria-valuemin, aria-valuemax -->
```

**Optional but recommended:**

- `aria-valuetext` - Human-readable value (e.g., "Small", "50%", "$1,000")

#### 2. Checked/Selectable Widgets (checkbox, radio, switch, option, menuitemcheckbox, menuitemradio, tab)

**MUST include:**

- `aria-checked` for checkbox, radio, switch, menuitemcheckbox, menuitemradio
- `aria-selected` for option, tab

✅ **DO:**

```html
<div role="checkbox" aria-checked="false" aria-label="Subscribe to newsletter" tabindex="0"></div>

<button role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1">Tab 1</button>

<div role="option" aria-selected="false">Option 1</div>
```

❌ **DON'T:**

```html
<div role="checkbox" aria-label="Subscribe" tabindex="0"></div>
<!-- Missing aria-checked -->

<button role="tab">Tab 1</button>
<!-- Missing aria-selected -->
```

#### 3. Expandable Widgets (combobox, disclosure, menu with submenus)

**MUST include:**

- `aria-expanded` - "true" when expanded, "false" when collapsed

✅ **DO:**

```html
<button aria-expanded="false" aria-controls="submenu-1">File Menu</button>
<ul id="submenu-1" hidden>
    <li>New</li>
    <li>Open</li>
</ul>

<div role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-owns="listbox-1">
    <input type="text" />
    <ul role="listbox" id="listbox-1" hidden>
        ...
    </ul>
</div>
```

❌ **DON'T:**

```html
<button aria-controls="submenu-1">File Menu</button>
<!-- Missing aria-expanded -->
```

#### 4. Popup Triggers (combobox, menu button)

**MUST include:**

- `aria-haspopup` - Type of popup ("menu", "listbox", "tree", "grid", "dialog", or "true")

✅ **DO:**

```html
<button aria-haspopup="menu" aria-expanded="false">Options</button>

<div role="combobox" aria-haspopup="listbox" aria-expanded="false">
    <input type="text" />
</div>
```

#### 5. Set Position Attributes (aria-posinset, aria-setsize)

**These MUST be used together** when not all items are present in the DOM (e.g., virtual scrolling, lazy loading).

✅ **DO:**

```html
<!-- Showing items 1, 3, 11, 19 out of 118 total -->
<ul role="listbox">
    <li role="option" aria-setsize="118" aria-posinset="1">Item 1</li>
    <li role="option" aria-setsize="118" aria-posinset="3">Item 3</li>
    <li role="option" aria-setsize="118" aria-posinset="11">Item 11</li>
    <li role="option" aria-setsize="118" aria-posinset="19">Item 19</li>
</ul>
```

❌ **DON'T:**

```html
<li role="option" aria-posinset="3">Item 3</li>
<!-- Missing aria-setsize -->
```

**When to omit:**

- When all items are in the DOM (browser can calculate automatically)
- Set `aria-setsize="-1"` if total size is unknown

#### 6. Set Orientation (menu, menubar, toolbar, listbox, slider, tablist, tree)

Some roles have implicit orientation. Override when needed.

**Defaults:**

- `menu` → implicit `aria-orientation="vertical"`
- `menubar` → implicit `aria-orientation="horizontal"`
- `slider` → implicit `aria-orientation="horizontal"`
- `tablist` → implicit `aria-orientation="horizontal"`

✅ **DO - Override when different from default:**

```html
<!-- Horizontal menu needs explicit orientation -->
<div role="menu" aria-orientation="horizontal">
    <button role="menuitem">File</button>
    <button role="menuitem">Edit</button>
</div>

<!-- Vertical tabs need explicit orientation -->
<div role="tablist" aria-orientation="vertical">
    <button role="tab">Tab 1</button>
    <button role="tab">Tab 2</button>
</div>
```

#### 7. Modal Dialogs

**MUST include:**

- `aria-modal="true"` (or `aria-modal="false"` for non-modal)
- `aria-labelledby` OR `aria-label` to name the dialog

✅ **DO:**

```html
<div role="dialog" aria-modal="true" aria-labelledby="dialog-title">
    <h2 id="dialog-title">Confirm Delete</h2>
    <p>Are you sure?</p>
    <button>Cancel</button>
    <button>Delete</button>
</div>
```

❌ **DON'T:**

```html
<div role="dialog">
    <h2>Confirm Delete</h2>
    <!-- Missing aria-modal and aria-labelledby -->
</div>
```

### Composite Widgets - Container Requirements

Some roles **require specific child roles** to be valid.

#### 1. Radio Groups

`radiogroup` MUST contain `radio` elements.

✅ **DO:**

```html
<div role="radiogroup" aria-labelledby="group-label">
    <span id="group-label">Select size:</span>
    <div role="radio" aria-checked="false" tabindex="0">Small</div>
    <div role="radio" aria-checked="true" tabindex="0">Medium</div>
    <div role="radio" aria-checked="false" tabindex="0">Large</div>
</div>
```

❌ **DON'T:**

```html
<!-- Isolated radio without radiogroup -->
<div role="radio" aria-checked="false">Small</div>
<div role="radio" aria-checked="false">Medium</div>
```

**Rules:**

- Only ONE radio can have `aria-checked="true"` within a radiogroup
- All radios in group must have `tabindex` (typically only checked one has `tabindex="0"`)

#### 2. Tab Interface

`tablist` MUST contain `tab` elements. Each `tab` should control a `tabpanel`.

✅ **DO:**

```html
<div role="tablist" aria-label="Product categories">
    <button role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1" tabindex="0">Electronics</button>
    <button role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2" tabindex="-1">Clothing</button>
</div>

<div role="tabpanel" id="panel-1" aria-labelledby="tab-1">Electronics content</div>
<div role="tabpanel" id="panel-2" aria-labelledby="tab-2" hidden>Clothing content</div>
```

❌ **DON'T:**

```html
<!-- Tab without tablist container -->
<button role="tab">Electronics</button>

<!-- Tablist without tabs -->
<div role="tablist">
    <button>Not a tab</button>
</div>

<!-- Tab not controlling any panel -->
<button role="tab" aria-selected="true">Tab 1</button>
<!-- No aria-controls pointing to tabpanel -->
```

**Rules:**

- Each `tab` should have `aria-controls` pointing to its `tabpanel`
- Each `tabpanel` should have `aria-labelledby` pointing to its `tab`
- Only ONE tab has `aria-selected="true"` at a time
- Selected tab has `tabindex="0"`, others have `tabindex="-1"`

#### 3. Menu / Menubar

`menu` or `menubar` MUST contain `menuitem`, `menuitemcheckbox`, or `menuitemradio` elements.

✅ **DO:**

```html
<nav role="menubar" aria-label="Main navigation">
    <button role="menuitem" aria-haspopup="menu" aria-expanded="false">File</button>
    <button role="menuitem" aria-haspopup="menu" aria-expanded="false">Edit</button>
</nav>

<ul role="menu">
    <li role="menuitem">New</li>
    <li role="menuitem">Open</li>
    <li role="separator"></li>
    <li role="menuitemcheckbox" aria-checked="true">Show toolbar</li>
</ul>
```

❌ **DON'T:**

```html
<div role="menu">
    <button>New</button>
    <!-- Missing role="menuitem" -->
</div>
```

**Note:** `role="separator"` is allowed but doesn't count toward set size.

#### 4. Listbox

`listbox` MUST contain `option` elements.

✅ **DO:**

```html
<ul role="listbox" aria-label="Countries">
    <li role="option" aria-selected="false">USA</li>
    <li role="option" aria-selected="true">Canada</li>
    <li role="option" aria-selected="false">Mexico</li>
</ul>
```

#### 5. Tree

`tree` MUST contain `treeitem` elements.

✅ **DO:**

```html
<ul role="tree" aria-label="File explorer">
    <li role="treeitem" aria-expanded="true" aria-level="1">
        Documents
        <ul role="group">
            <li role="treeitem" aria-level="2">File1.txt</li>
            <li role="treeitem" aria-level="2">File2.txt</li>
        </ul>
    </li>
</ul>
```

**Required for parent treeitems:**

- `aria-expanded` - Whether children are visible

**Recommended:**

- `aria-level` - Depth in hierarchy (1-indexed)

#### 6. Grid / Table

`grid` or `table` MUST contain `row` elements, which contain `gridcell` or `cell` elements.

✅ **DO:**

```html
<div role="grid" aria-label="Spreadsheet">
    <div role="row">
        <div role="columnheader">Name</div>
        <div role="columnheader">Age</div>
    </div>
    <div role="row">
        <div role="gridcell">John</div>
        <div role="gridcell">30</div>
    </div>
</div>
```

**Prefer native HTML:**

```html
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John</td>
            <td>30</td>
        </tr>
    </tbody>
</table>
```

## Common Component Patterns

### Pattern 1: Form with Label and Error Message

✅ **DO:**

```html
<div class="fd-form-item">
    <label class="fd-form-label fd-form-label--required" for="email"> Email </label>
    <input
        id="email"
        class="fd-input is-error"
        type="email"
        aria-invalid="true"
        aria-describedby="email-error"
        required
    />
    <span id="email-error" class="fd-form-message fd-form-message--error"> Please enter a valid email address </span>
</div>
```

**Key attributes:**

- `for` and `id` connect label to input
- `aria-invalid="true"` indicates error state
- `aria-describedby` points to error message ID
- `required` attribute for validation

### Pattern 2: Button with Icon

✅ **DO - Icon is decorative:**

```html
<button class="fd-button" aria-label="Close">
    <span class="sap-icon--decline" aria-hidden="true"></span>
</button>
```

✅ **DO - Icon with text:**

```html
<button class="fd-button">
    <span class="sap-icon--save" aria-hidden="true"></span>
    Save
</button>
```

❌ **DON'T - Missing label on icon-only button:**

```html
<button class="fd-button">
    <span class="sap-icon--decline"></span>
    <!-- No aria-label, no visible text -->
</button>
```

**Rules:**

- Icon-only buttons MUST have `aria-label` or `aria-labelledby`
- Decorative icons should have `aria-hidden="true"`
- Never rely on icon alone for meaning

### Pattern 3: Select / Dropdown

✅ **DO - Native select:**

```html
<label for="country">Country:</label>
<select id="country" class="fd-select">
    <option value="">Select a country</option>
    <option value="us">United States</option>
    <option value="ca">Canada</option>
</select>
```

✅ **DO - Custom select (combobox pattern):**

```html
<label for="country-input">Country:</label>
<div class="fd-select">
    <div
        class="fd-select__control"
        role="combobox"
        aria-expanded="false"
        aria-haspopup="listbox"
        aria-owns="country-listbox"
        tabindex="0"
        id="country-input"
    >
        <span class="fd-select__text-content">Select a country</span>
        <button class="fd-button fd-button--transparent fd-select__button" aria-label="Show options" tabindex="-1">
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
    <ul role="listbox" id="country-listbox" class="fd-select__menu" hidden>
        <li role="option" aria-selected="false">United States</li>
        <li role="option" aria-selected="false">Canada</li>
    </ul>
</div>
```

**Key attributes for custom select:**

- Combobox has `aria-expanded`, `aria-haspopup="listbox"`, `aria-owns`
- Listbox has matching `id`
- Options have `aria-selected`
- Button is `tabindex="-1"` (only combobox is in tab order)

### Pattern 4: Checkbox Group

✅ **DO:**

```html
<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Preferences</legend>

    <div class="fd-form-item">
        <input id="newsletter" type="checkbox" class="fd-checkbox" />
        <label class="fd-checkbox__label" for="newsletter">
            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
            <span class="fd-checkbox__text">Subscribe to newsletter</span>
        </label>
    </div>

    <div class="fd-form-item">
        <input id="updates" type="checkbox" class="fd-checkbox" />
        <label class="fd-checkbox__label" for="updates">
            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
            <span class="fd-checkbox__text">Receive product updates</span>
        </label>
    </div>
</fieldset>
```

**Rules:**

- Use `<fieldset>` and `<legend>` to group related checkboxes
- Each checkbox has unique `id` and matching `for` attribute
- Decorative checkmark element has `aria-hidden="true"`

### Pattern 5: Dialog / Modal

✅ **DO:**

```html
<div class="fd-dialog fd-dialog--active" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
    <div class="fd-dialog__content">
        <header class="fd-dialog__header">
            <h2 id="dialog-title" class="fd-title fd-title--h5">Confirm Action</h2>
            <button class="fd-button fd-button--transparent" aria-label="Close">
                <span class="sap-icon--decline" aria-hidden="true"></span>
            </button>
        </header>

        <div class="fd-dialog__body">
            <p>Are you sure you want to proceed?</p>
        </div>

        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <button class="fd-button fd-button--emphasized">Confirm</button>
            <button class="fd-button fd-button--transparent">Cancel</button>
        </footer>
    </div>
</div>
```

**Key attributes:**

- `role="dialog"` with `aria-modal="true"`
- `aria-labelledby` pointing to title ID
- Close button has `aria-label`
- Focus should be trapped within dialog when active
- First focusable element should receive focus on open

### Pattern 6: Tabs

✅ **DO:**

```html
<div class="fd-tabs">
    <ul class="fd-tabs__list" role="tablist" aria-label="Product sections">
        <li class="fd-tabs__item">
            <button
                class="fd-tabs__link"
                role="tab"
                aria-selected="true"
                aria-controls="tab-panel-1"
                id="tab-1"
                tabindex="0"
            >
                Overview
            </button>
        </li>
        <li class="fd-tabs__item">
            <button
                class="fd-tabs__link"
                role="tab"
                aria-selected="false"
                aria-controls="tab-panel-2"
                id="tab-2"
                tabindex="-1"
            >
                Specifications
            </button>
        </li>
    </ul>

    <div class="fd-tabs__panel" role="tabpanel" id="tab-panel-1" aria-labelledby="tab-1">Overview content</div>

    <div class="fd-tabs__panel" role="tabpanel" id="tab-panel-2" aria-labelledby="tab-2" hidden>
        Specifications content
    </div>
</div>
```

**Key attributes:**

- Tablist has `aria-label` or `aria-labelledby`
- Each tab has `aria-selected`, `aria-controls`, unique `id`
- Selected tab has `tabindex="0"`, others have `tabindex="-1"`
- Each tabpanel has `id` and `aria-labelledby` pointing to its tab
- Inactive panels have `hidden` attribute

### Pattern 7: Alert / Message Strip

✅ **DO:**

```html
<div class="fd-message-strip fd-message-strip--error" role="alert">
    <p class="fd-message-strip__text">There was an error processing your request.</p>
    <button class="fd-button fd-button--transparent fd-message-strip__close" aria-label="Dismiss alert">
        <span class="sap-icon--decline" aria-hidden="true"></span>
    </button>
</div>
```

**Key attributes:**

- `role="alert"` automatically has `aria-live="assertive"` and `aria-atomic="true"`
- Alerts are announced immediately by screen readers
- Close button has `aria-label`

**For status messages (less urgent):**

```html
<div class="fd-message-strip fd-message-strip--success" role="status">
    <p class="fd-message-strip__text">Changes saved successfully.</p>
</div>
```

### Pattern 8: Breadcrumb Navigation

✅ **DO:**

```html
<nav aria-label="Breadcrumb">
    <ol class="fd-breadcrumb">
        <li class="fd-breadcrumb__item">
            <a class="fd-breadcrumb__link" href="/">Home</a>
        </li>
        <li class="fd-breadcrumb__item">
            <a class="fd-breadcrumb__link" href="/products">Products</a>
        </li>
        <li class="fd-breadcrumb__item">
            <span class="fd-breadcrumb__link" aria-current="page"> Product Details </span>
        </li>
    </ol>
</nav>
```

**Key attributes:**

- Wrapped in `<nav>` with `aria-label="Breadcrumb"`
- Current page has `aria-current="page"`
- Use semantic list (`<ol>`) for structure

## Keyboard Interaction Requirements

Many ARIA roles require keyboard support. Document these in examples.

### Common Keyboard Patterns

| Component | Required Keys                      | Action                                       |
| --------- | ---------------------------------- | -------------------------------------------- |
| Button    | <kbd>Enter</kbd>, <kbd>Space</kbd> | Activate                                     |
| Link      | <kbd>Enter</kbd>                   | Follow link                                  |
| Checkbox  | <kbd>Space</kbd>                   | Toggle                                       |
| Radio     | <kbd>Arrow keys</kbd>              | Navigate between options                     |
| Tabs      | <kbd>Arrow keys</kbd>              | Navigate tabs, <kbd>Tab</kbd> moves to panel |
| Menu      | <kbd>Arrow keys</kbd>              | Navigate, <kbd>Enter</kbd> activate          |
| Dialog    | <kbd>Esc</kbd>                     | Close                                        |
| Combobox  | <kbd>Arrow keys</kbd>              | Navigate options, <kbd>Enter</kbd> select    |
| Slider    | <kbd>Arrow keys</kbd>              | Adjust value                                 |

### Focus Management

✅ **DO:**

```html
<!-- Ensure interactive elements are focusable -->
<div role="button" tabindex="0" onclick="...">Click me</div>

<!-- Move focus to dialog when opened -->
<div role="dialog" aria-modal="true" tabindex="-1">...</div>

<!-- Manage tab order in roving tabindex pattern -->
<div role="radiogroup">
    <div role="radio" tabindex="0">Option 1</div>
    <!-- Selected -->
    <div role="radio" tabindex="-1">Option 2</div>
    <!-- Not selected -->
</div>
```

❌ **DON'T:**

```html
<!-- Missing tabindex on interactive role -->
<div role="button">Click me</div>
<!-- Not keyboard accessible -->

<!-- Using positive tabindex values -->
<button tabindex="1">Bad practice</button>
```

**Rules:**

- Interactive custom elements MUST have `tabindex="0"` or `tabindex="-1"`
- Use `tabindex="-1"` for programmatically focusable elements
- Never use positive `tabindex` values (1, 2, 3, etc.)

## Testing Checklist

When creating component examples, verify:

### Semantic Structure

- [ ] Uses native HTML elements when possible
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Lists use `<ul>`, `<ol>`, or `<dl>`
- [ ] Tables use `<table>` with proper headers

### Labels & Names

- [ ] All form inputs have associated labels
- [ ] `for` attributes point to existing `id` values
- [ ] Icon-only buttons have `aria-label`
- [ ] Regions/landmarks have labels when multiple exist

### ARIA Roles & Attributes

- [ ] Required companion attributes are present
- [ ] All ID references (`aria-labelledby`, `aria-controls`, etc.) point to existing elements
- [ ] Composite widgets contain required child roles
- [ ] State attributes reflect current state (`aria-expanded`, `aria-checked`, `aria-selected`)

### Keyboard & Focus

- [ ] All interactive elements are keyboard accessible
- [ ] Custom interactive roles have appropriate `tabindex`
- [ ] Focus is visible
- [ ] Tab order is logical

### Screen Reader Testing

- [ ] Test with NVDA (Windows), JAWS (Windows), or VoiceOver (Mac/iOS)
- [ ] Verify accessible names are announced correctly
- [ ] Verify state changes are announced
- [ ] Verify alerts/live regions are announced

### Tools

- Use browser DevTools Accessibility inspector
- Run axe DevTools or WAVE extensions
- Validate with W3C HTML validator

## Resources

- **ARIA Authoring Practices:** https://www.w3.org/WAI/ARIA/apg/
- **MDN ARIA Reference:** https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA
- **WCAG 2.1 Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/
- **WebAIM Articles:** https://webaim.org/articles/

## Quick Reference

### Most Common Mistakes

1. ❌ Icon-only button without label
2. ❌ Form input without label connection
3. ❌ `aria-labelledby` pointing to non-existent ID
4. ❌ Role without required attributes (e.g., slider without values)
5. ❌ Custom widget without keyboard support
6. ❌ Using ARIA when native HTML would work
7. ❌ Missing `aria-expanded` on expandable widgets
8. ❌ Tab interface without `aria-selected`
9. ❌ Dialog without `aria-modal` and label
10. ❌ Using `aria-posinset` without `aria-setsize`

---

**Remember:** The first rule of ARIA is to use native HTML when possible. Only use ARIA roles and attributes when HTML semantics are insufficient.
