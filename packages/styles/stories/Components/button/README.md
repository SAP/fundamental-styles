# Button Component

> **Quick Reference**: Action trigger with multiple styles for different semantic meanings

## Overview

The Button component is the most fundamental interactive element in Fundamental Library Styles. It's used to trigger actions, submit forms, and initiate user interactions throughout the application.

## When to Use

✅ **Use Button for:**
- Triggering actions (save, submit, delete, etc.)
- Opening dialogs or overlays
- Submitting forms
- Primary and secondary actions
- Toggle states

❌ **Don't use Button for:**
- Navigating to a different page → Use [Link](../link) component instead

## Installation

```bash
npm install fundamental-styles
```

## Import

```javascript
// Import CSS
import 'fundamental-styles/dist/button.css';
```

## Basic Usage

### Default Button
```html
<button class="fd-button">
  <span class="fd-button__text">Default Button</span>
</button>
```

### Emphasized Button (Primary Action)
```html
<button class="fd-button fd-button--emphasized">
  <span class="fd-button__text">Primary Action</span>
</button>
```

### Button with Icon
```html
<button class="fd-button">
  <i class="sap-icon--accept" role="presentation"></i>
  <span class="fd-button__text">Accept</span>
</button>
```

## Button Types

| Type | Class | Use Case |
|------|-------|----------|
| **Default** | `fd-button` | Neutral or informative actions |
| **Emphasized** | `fd-button--emphasized` | Primary action on screen |
| **Ghost** | `fd-button--ghost` | Secondary actions in toolbars |
| **Positive** | `fd-button--positive` | Positive actions (Accept, Approve) |
| **Negative** | `fd-button--negative` | Negative actions (Reject, Delete) |
| **Attention** | `fd-button--attention` | Actions requiring attention |
| **Transparent** | `fd-button--transparent` | Headers, footers, toolbars |

## States

### Toggled State
```html
<button class="fd-button fd-button--toggled" aria-pressed="true">
  <span class="fd-button__text">Toggled</span>
</button>
```

### Disabled State
```html
<button class="fd-button" disabled>
  <span class="fd-button__text">Disabled</span>
</button>
```

## Modifiers

| Modifier | Description |
|----------|-------------|
| `fd-button--emphasized` | Primary action styling |
| `fd-button--ghost` | Ghost button style |
| `fd-button--positive` | Positive semantic styling |
| `fd-button--negative` | Negative semantic styling |
| `fd-button--attention` | Attention semantic styling |
| `fd-button--transparent` | Transparent background |
| `fd-button--toggled` | Active/toggled state |
| `fd-button--menu` | Menu trigger button (requires menu component) |
| `fd-button--compact` | Compact size variant |
| `fd-button--full-width` | Full width button |

## Sub-elements

| Element | Class | Required | Description |
|---------|-------|----------|-------------|
| Text | `fd-button__text` | No | Button text content |
| Badge | `fd-button__badge` | No | Badge for counts (max 4 characters) |
| Instructions | `fd-button__instructions` | No | Screen reader instructions (not visible) |

## Accessibility

### Required Attributes
```html
<button role="button" class="fd-button">
  <span class="fd-button__text">Button Text</span>
</button>
```

### ARIA Attributes
- `aria-pressed="true|false"` - For toggle buttons
- `aria-label="..."` - When button has no visible text
- `aria-disabled="true"` - For disabled state

### Keyboard Support
- **Enter/Space**: Activates the button
- **Tab**: Focuses the button

### Screen Reader
Always include either:
- Visible text via `fd-button__text`
- Or `aria-label` for icon-only buttons

## Examples

### Button with Badge
```html
<button class="fd-button">
  <span class="fd-button__text">Messages</span>
  <span class="fd-button__badge">5</span>
</button>
```

### Icon-Only Button
```html
<button class="fd-button" aria-label="Settings">
  <i class="sap-icon--settings" role="presentation"></i>
</button>
```

### Menu Button
```html
<button class="fd-button fd-button--menu" aria-haspopup="true" aria-expanded="false">
  <span class="fd-button__text">Actions</span>
</button>
<!-- Requires fd-menu component -->
```

## Related Components

- [Button Split](../button-split) - Button with main action and dropdown menu
- [Segmented Button](../segmented-button) - Group of buttons for selection
- [Link](../link) - For navigation (not actions)
- [Menu](../menu) - Works with menu button

## Resources

- **Live Examples**: [Storybook - Button](https://sap.github.io/fundamental-styles/?path=/docs/components-buttons-button)
- **Source Code**: [GitHub](https://github.com/SAP/fundamental-styles/tree/main/packages/styles/src/button.scss)
- **Component Catalog**: See [docs/component-catalog.json](../../docs/component-catalog.json)

## Design Guidelines

### Best Practices
- ✅ Use one emphasized button per screen for the primary action
- ✅ Use semantic colors (positive/negative) only when action is clear
- ✅ Keep button text short and action-oriented (3-5 words max)
- ✅ Provide clear visual feedback on hover/press
- ❌ Don't use buttons for navigation (use links)
- ❌ Don't have more than one emphasized button visible at once

### Button Hierarchy
1. **Emphasized** - Primary action (one per screen)
2. **Default** - Secondary actions
3. **Ghost** - Tertiary actions in toolbars
4. **Transparent** - Subtle actions in headers/footers

## Theme Support

All button types work with all SAP themes:
- Horizon themes (sap_horizon, sap_horizon_dark, etc.)
- Fiori 3 themes (sap_fiori_3, sap_fiori_3_dark, etc.)

## Browser Support

Follows fundamental-styles browser support policy (last 2 versions).

---

**Component ID**: `button`
**Category**: Interactive Elements
**Package**: `fundamental-styles`
**Version**: 0.41.0+
