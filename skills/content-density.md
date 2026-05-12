# Content Density in Fundamental Styles

SAP Fiori provides content density modes that allow you to render components at different sizes to optimize for different devices and use cases.

## When to Use This Skill

Use this skill when you need to:
- Choose between cozy, compact, or condensed modes
- Apply content density to your application or specific sections
- Understand when to use touch-friendly vs information-dense layouts
- Optimize UI for different device types (touch vs mouse/keyboard)

## Content Density Modes

### Cozy Mode (Default)

**Description:**
Cozy mode displays components with dimensions large enough for fingertip interaction. The default touch area is 2.75 rem (44 px).

**When to use:**
- Touch screen devices (mobile, tablets)
- Products that benefit from spacious layouts
- Apps where user comfort is prioritized over information density
- Default mode when no density class is specified

**Metrics:**
- Touch area: 2.75 rem (44 px)
- Larger spacing between components
- Optimized for finger interaction

**Best practices:**
- ✅ Use for entire app on touch devices
- ✅ Set as default for mobile-first applications
- ✅ Use when users need larger tap targets

### Compact Mode

**Description:**
Compact mode reduces component dimensions to display more information on screen. The touch area is reduced to 2 rem (32 px). Font sizes remain the same, but components and spacing are smaller.

**When to use:**
- Devices operated with mouse and keyboard
- Desktop applications
- Products requiring high information density
- Data-heavy interfaces (tables, forms, dashboards)

**Metrics:**
- Touch area: 2 rem (32 px)
- Smaller margins and padding
- Same font size as cozy mode
- Visually more compact appearance

**Best practices:**
- ✅ Use for entire app on desktop devices
- ✅ Set as default for products requiring high information density
- ✅ Use for data tables and complex forms
- ✅ Apply at application level, not per component

### Condensed Mode

**Description:**
Condensed mode further reduces component dimensions and letter spacing for maximum information density. Primarily used on small screens or very information-dense layouts.

**When to use:**
- Small screens with limited space
- Tables with many columns
- Apps requiring maximum information density
- Components that explicitly support condensed mode

**Fallback behavior:**
If a component doesn't support condensed mode under `.is-condensed`, it will automatically fall back to compact mode.

**Best practices:**
- ⚠️ Use sparingly - can reduce readability
- ✅ Best for data tables
- ✅ Test thoroughly for usability

## Implementation

### Application-Level Density

Always set content density at the application level by adding the class to `<body>` or `<html>`:

```html
<!-- Cozy mode (default) -->
<body>
  <button class="fd-button">Button is cozy</button>
</body>

<!-- Compact mode -->
<body class="is-compact">
  <button class="fd-button">Button is compact</button>
  <input class="fd-input" type="text">
  <table class="fd-table">...</table>
</body>

<!-- Condensed mode -->
<body class="is-condensed">
  <button class="fd-button">Button is visually compact</button>
  <table class="fd-table">
    <!-- Table is visually condensed if supported -->
  </table>
</body>
```

### Section-Level Density

For specific sections, apply the class to a container element:

```html
<body>
  <!-- Cozy by default -->
  <div class="fd-card">
    <div class="fd-card__header">Card Header</div>
    <div class="fd-card__content">Card Content</div>

    <!-- Only footer is compact -->
    <div class="fd-card__footer is-compact">
      <button class="fd-button fd-button--positive">Save</button>
      <button class="fd-button fd-button--negative">Cancel</button>
    </div>
  </div>
</body>
```

### Overriding Inherited Density

Content density is inherited from parent elements. Override by applying a different class:

```html
<body class="is-compact">
  <!-- All buttons are compact by default -->
  <button class="fd-button">Compact button</button>

  <div>
    <div>
      <!-- Inherits compact from body -->
      <button class="fd-button">Compact button</button>
    </div>

    <!-- Override section to cozy -->
    <div class="is-cozy">
      <div>
        <!-- Inherits cozy from parent div -->
        <button class="fd-button">Cozy button</button>
      </div>

      <!-- Explicitly set back to compact -->
      <button class="fd-button is-compact">Compact button</button>
    </div>
  </div>
</body>
```

## Device-Specific Recommendations

### Touch Devices (Mobile/Tablet)
```html
<body class="is-cozy">
  <!-- Use cozy mode for entire app -->
</body>
```

**Why:** Ensures adequate touch targets (44 px minimum) for fingertip interaction.

### Mouse/Keyboard Devices (Desktop)
```html
<body class="is-compact">
  <!-- Use compact mode for entire app -->
</body>
```

**Why:** Maximizes screen real estate and information density when precise pointer interaction is available.

### Hybrid Devices (Touchscreen Laptops)

Give users the option to switch between modes:

```html
<!-- Default to compact, allow user preference -->
<body class="is-compact" id="app-root">
  <button onclick="toggleDensity()">Switch to Cozy</button>
</body>

<script>
function toggleDensity() {
  const body = document.getElementById('app-root');
  if (body.classList.contains('is-compact')) {
    body.classList.remove('is-compact');
    body.classList.add('is-cozy');
  } else {
    body.classList.remove('is-cozy');
    body.classList.add('is-compact');
  }
}
</script>
```

## Important Rules

### ❌ NEVER Mix Modes on Same Page

**Bad - Mixed densities on same hierarchy:**
```html
<body>
  <button class="fd-button is-compact">Compact</button>
  <button class="fd-button is-cozy">Cozy</button>  <!-- Inconsistent! -->
</body>
```

**Good - Consistent density:**
```html
<body class="is-compact">
  <button class="fd-button">Compact</button>
  <button class="fd-button">Compact</button>
</body>
```

### ✅ Always Set at Application Level

**Bad - Per-component density:**
```html
<body>
  <button class="fd-button is-compact">Button 1</button>
  <input class="fd-input is-compact" type="text">
  <table class="fd-table is-compact">...</table>
</body>
```

**Good - Application-level density:**
```html
<body class="is-compact">
  <button class="fd-button">Button 1</button>
  <input class="fd-input" type="text">
  <table class="fd-table">...</table>
</body>
```

### ✅ Section-Level Overrides Are Acceptable

When you need a specific section to differ (e.g., a compact toolbar in an otherwise cozy app):

```html
<body class="is-cozy">
  <main>
    <button class="fd-button">Cozy button</button>
  </main>

  <!-- Toolbar can be compact for more actions -->
  <div class="fd-toolbar is-compact">
    <button class="fd-button">Action 1</button>
    <button class="fd-button">Action 2</button>
    <button class="fd-button">Action 3</button>
  </div>
</body>
```

## Component-Specific Modifiers

Some components have `--compact` modifiers that work independently of the `.is-compact` class:

```html
<!-- Using global class -->
<body class="is-compact">
  <button class="fd-button">Automatically compact</button>
</body>

<!-- Using component modifier -->
<body>
  <button class="fd-button fd-button--compact">Explicitly compact</button>
</body>
```

**Best practice:** Prefer global `.is-compact` class over individual `--compact` modifiers for consistency.

## Metrics and Technical Details

### Base Unit System

SAP Fiori uses the **rem unit** (root em):
- **1 rem = 16 pixels** (browser default)
- Ensures consistent sizing and zooming across all browsers
- Components scale proportionally with root font size

### Size Comparison

| Mode | Touch Area | Row Height | Component Size | Use Case |
|------|-----------|------------|----------------|----------|
| **Cozy** | 2.75 rem (44 px) | Large | Spacious | Touch devices |
| **Compact** | 2 rem (32 px) | Medium | Dense | Mouse/keyboard |
| **Condensed** | ~1.5 rem (24 px) | Small | Very dense | Tables, small screens |

### Spacing Changes

In compact mode:
- **Margins** between components are reduced
- **Padding** inside components is smaller
- **Line height** may be adjusted
- **Font size** remains the same as cozy mode

## Examples by Component Type

### Buttons

```html
<body class="is-compact">
  <!-- All buttons are compact -->
  <button class="fd-button fd-button--emphasized">Save</button>
  <button class="fd-button">Cancel</button>
  <button class="fd-button fd-button--transparent">More</button>
</body>
```

### Forms

```html
<body class="is-compact">
  <div class="fd-form-item">
    <label class="fd-form-label" for="name">Name</label>
    <input class="fd-input" id="name" type="text">
  </div>

  <div class="fd-form-item">
    <label class="fd-form-label" for="email">Email</label>
    <input class="fd-input" id="email" type="email">
  </div>
</body>
```

### Tables

```html
<body class="is-compact">
  <table class="fd-table">
    <thead class="fd-table__header">
      <tr class="fd-table__row">
        <th class="fd-table__cell">Name</th>
        <th class="fd-table__cell">Status</th>
        <th class="fd-table__cell">Date</th>
      </tr>
    </thead>
    <tbody class="fd-table__body">
      <tr class="fd-table__row">
        <td class="fd-table__cell">Item 1</td>
        <td class="fd-table__cell">Active</td>
        <td class="fd-table__cell">2026-05-12</td>
      </tr>
    </tbody>
  </table>
</body>
```

### Lists

```html
<body class="is-compact">
  <ul class="fd-list">
    <li class="fd-list__item">
      <span class="fd-list__title">List Item 1</span>
    </li>
    <li class="fd-list__item">
      <span class="fd-list__title">List Item 2</span>
    </li>
  </ul>
</body>
```

## Decision Guide

### Choose Cozy when:
- ✅ Primary users are on touch devices
- ✅ Accessibility and ease of interaction are priorities
- ✅ Layout has adequate space
- ✅ App has fewer than 10 interactive elements per screen

### Choose Compact when:
- ✅ Primary users are on desktop with mouse/keyboard
- ✅ High information density is required
- ✅ Users need to see many items at once (tables, lists)
- ✅ Screen space is limited but not critically small

### Choose Condensed when:
- ✅ Working with data tables with many columns
- ✅ Absolute maximum density is required
- ✅ Users are experienced and tolerant of small targets
- ⚠️ Use with caution - test thoroughly

### Set default based on product needs:
- **Information-dense products** → Default to compact
- **Spacious, user-friendly products** → Default to cozy
- **Hybrid devices** → Offer user preference toggle

## Common Patterns

### Compact Toolbar with Cozy Content

```html
<body class="is-cozy">
  <!-- Compact toolbar for more actions -->
  <div class="fd-toolbar is-compact">
    <button class="fd-button">Action 1</button>
    <button class="fd-button">Action 2</button>
    <button class="fd-button">Action 3</button>
  </div>

  <!-- Cozy content area -->
  <main>
    <div class="fd-form-item">
      <label class="fd-form-label" for="field">Label</label>
      <input class="fd-input" id="field" type="text">
    </div>
  </main>
</body>
```

### Responsive Density

```html
<body>
  <style>
    /* Cozy on mobile, compact on desktop */
    @media (max-width: 1023px) {
      body { /* cozy by default */ }
    }

    @media (min-width: 1024px) {
      body {
        /* Apply compact on larger screens */
      }
    }
  </style>

  <script>
    // Add class based on screen size
    if (window.innerWidth >= 1024) {
      document.body.classList.add('is-compact');
    }
  </script>
</body>
```

## Accessibility Considerations

- **Cozy mode** meets WCAG 2.1 touch target size requirements (44x44 px minimum)
- **Compact mode** may not meet touch target minimums - use only for mouse/keyboard interaction
- **Condensed mode** is not recommended for touch devices or users with motor impairments
- Always test usability with actual users when choosing density

## Resources

- [SAP Design Guidelines - Cozy & Compact](https://experience.sap.com/fiori-design-web/cozy-compact)
- [Fundamental Styles Documentation](https://sap.github.io/fundamental-styles/)
- [WCAG 2.1 - Target Size Requirements](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
