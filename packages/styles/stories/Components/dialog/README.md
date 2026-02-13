# Dialog Component

> **Quick Reference**: Modal dialog window for displaying important information or collecting user input

## Overview

The Dialog component creates a modal overlay that requires user interaction before returning to the main application. Use it for critical decisions, important information, or forms that need focused attention.

## When to Use

✅ **Use Dialog for:**
- Critical decisions requiring user attention
- Forms that need focus
- Multi-step workflows
- Confirmations for destructive actions
- Detailed information that would clutter the page

❌ **Don't use Dialog for:**
- Simple confirmations → Use [Message Box](../message-box)
- Supplementary info → Use [Popover](../popover)
- Non-critical content that doesn't need focus

## Installation

```bash
npm install fundamental-styles
```

## Import

```javascript
import 'fundamental-styles/dist/dialog.css';
```

## Basic Usage

```html
<div class="fd-dialog fd-dialog--active">
  <div class="fd-dialog__content">
    <header class="fd-dialog__header">
      <div class="fd-dialog__title">Dialog Title</div>
      <button class="fd-dialog__close" aria-label="Close">
        <i class="sap-icon--decline"></i>
      </button>
    </header>
    <div class="fd-dialog__body">
      Dialog content goes here...
    </div>
    <footer class="fd-dialog__footer fd-bar fd-bar--footer">
      <div class="fd-bar__right">
        <button class="fd-button" type="button">Cancel</button>
        <button class="fd-button fd-button--emphasized" type="button">Save</button>
      </div>
    </footer>
  </div>
</div>
```

## Dialog States

### Active/Visible
```html
<div class="fd-dialog fd-dialog--active">
  <!-- Dialog is visible -->
</div>
```

### Hidden (Default)
```html
<div class="fd-dialog">
  <!-- Dialog is hidden -->
</div>
```

## Dialog Sizes

### Default (Medium)
```html
<div class="fd-dialog fd-dialog--active">
  <!-- Default width -->
</div>
```

### Small
```html
<div class="fd-dialog fd-dialog--active">
  <div class="fd-dialog__content" style="width: 400px;">
    <!-- Small dialog content -->
  </div>
</div>
```

### Large
```html
<div class="fd-dialog fd-dialog--active">
  <div class="fd-dialog__content" style="width: 90%; max-width: 1200px;">
    <!-- Large dialog content -->
  </div>
</div>
```

## Dialog Structure

### Complete Dialog
```html
<div class="fd-dialog fd-dialog--active" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
  <!-- Backdrop -->
  <div class="fd-dialog__backdrop"></div>

  <!-- Dialog Content -->
  <div class="fd-dialog__content">
    <!-- Header (Required) -->
    <header class="fd-dialog__header fd-bar fd-bar--header">
      <div class="fd-bar__left">
        <div class="fd-bar__element">
          <h2 class="fd-dialog__title" id="dialog-title">
            Dialog Title
          </h2>
        </div>
      </div>
      <div class="fd-bar__right">
        <button class="fd-button fd-button--transparent" aria-label="Close" type="button">
          <i class="sap-icon--decline"></i>
        </button>
      </div>
    </header>

    <!-- Body (Required) -->
    <div class="fd-dialog__body">
      <p>Dialog content goes here. Can include forms, text, or other components.</p>
    </div>

    <!-- Footer (Optional) -->
    <footer class="fd-dialog__footer fd-bar fd-bar--footer">
      <div class="fd-bar__right">
        <div class="fd-bar__element">
          <button class="fd-button" type="button">
            <span class="fd-button__text">Cancel</span>
          </button>
        </div>
        <div class="fd-bar__element">
          <button class="fd-button fd-button--emphasized" type="button">
            <span class="fd-button__text">Save</span>
          </button>
        </div>
      </div>
    </footer>
  </div>
</div>
```

## Dialog with Form

```html
<div class="fd-dialog fd-dialog--active" role="dialog" aria-modal="true">
  <div class="fd-dialog__content">
    <header class="fd-dialog__header">
      <h2 class="fd-dialog__title">Add User</h2>
      <button class="fd-dialog__close" aria-label="Close">
        <i class="sap-icon--decline"></i>
      </button>
    </header>

    <div class="fd-dialog__body">
      <form>
        <div class="fd-form-item">
          <label class="fd-form-label fd-form-label--required" for="name">
            Name
          </label>
          <input type="text" class="fd-input" id="name" required />
        </div>

        <div class="fd-form-item">
          <label class="fd-form-label fd-form-label--required" for="email">
            Email
          </label>
          <input type="email" class="fd-input" id="email" required />
        </div>
      </form>
    </div>

    <footer class="fd-dialog__footer fd-bar fd-bar--footer">
      <div class="fd-bar__right">
        <button class="fd-button" type="button">Cancel</button>
        <button class="fd-button fd-button--emphasized" type="submit">Add</button>
      </div>
    </footer>
  </div>
</div>
```

## Accessibility

### Required Attributes
```html
<div
  class="fd-dialog fd-dialog--active"
  role="dialog"
  aria-modal="true"
  aria-labelledby="dialog-title"
  aria-describedby="dialog-desc"
>
  <div class="fd-dialog__content">
    <h2 id="dialog-title">Dialog Title</h2>
    <div id="dialog-desc">Dialog description</div>
  </div>
</div>
```

### Focus Management
When dialog opens:
1. Focus should move to first focusable element
2. Focus must stay trapped within dialog
3. When dialog closes, focus returns to trigger element

### Keyboard Support
- **Escape**: Close dialog
- **Tab**: Cycle through focusable elements (trapped)
- **Shift + Tab**: Reverse cycle
- **Enter**: Activate focused button

### ARIA Attributes
- `role="dialog"` - Identifies as dialog
- `aria-modal="true"` - Marks as modal
- `aria-labelledby="..."` - Links to title
- `aria-describedby="..."` - Links to description
- `aria-hidden="true"` - On background content when dialog open

## Best Practices

### Design Guidelines
- ✅ Keep dialogs focused on one task
- ✅ Provide clear title describing the purpose
- ✅ Include both action and cancel buttons
- ✅ Place primary action on the right
- ✅ Make close button easily accessible
- ✅ Keep content concise
- ❌ Don't nest dialogs
- ❌ Don't use for non-critical information
- ❌ Don't make dialogs too large

### Button Placement
```
[Cancel] [Primary Action]  ← Right-aligned
```

### Size Guidelines
- **Small**: Simple confirmations (400px)
- **Medium**: Forms with 3-5 fields (600px)
- **Large**: Complex content (up to 90% viewport)

## Related Components

- [Message Box](../message-box) - For simple confirmations
- [Popover](../popover) - For supplementary info
- [Button](../button) - For dialog actions
- [Bar](../bar) - For header/footer structure
- [Form Item](../form-item) - For form fields in dialog

## Resources

- **Live Examples**: [Storybook - Dialog](https://sap.github.io/fundamental-styles/?path=/docs/components-dialog)
- **Source Code**: [GitHub](https://github.com/SAP/fundamental-styles/tree/main/packages/styles/src/dialog.scss)
- **Component Catalog**: [component-catalog.json](../../docs/component-catalog.json)

## JavaScript Behavior

The dialog component requires JavaScript for:
- Opening/closing (add/remove `fd-dialog--active`)
- Focus trapping
- Escape key handling
- Backdrop click handling
- Focus restoration

Example:
```javascript
// Open dialog
dialog.classList.add('fd-dialog--active');
document.body.style.overflow = 'hidden'; // Prevent background scroll

// Close dialog
dialog.classList.remove('fd-dialog--active');
document.body.style.overflow = ''; // Restore scroll
```

## Common Patterns

### Confirmation Dialog
```html
<div class="fd-dialog fd-dialog--active">
  <div class="fd-dialog__content" style="width: 400px;">
    <header class="fd-dialog__header">
      <h2 class="fd-dialog__title">Confirm Delete</h2>
    </header>
    <div class="fd-dialog__body">
      <p>Are you sure you want to delete this item? This action cannot be undone.</p>
    </div>
    <footer class="fd-dialog__footer fd-bar fd-bar--footer">
      <div class="fd-bar__right">
        <button class="fd-button">Cancel</button>
        <button class="fd-button fd-button--negative">Delete</button>
      </div>
    </footer>
  </div>
</div>
```

### Information Dialog
```html
<div class="fd-dialog fd-dialog--active">
  <div class="fd-dialog__content">
    <header class="fd-dialog__header">
      <h2 class="fd-dialog__title">Information</h2>
    </header>
    <div class="fd-dialog__body">
      <p>Your changes have been saved successfully.</p>
    </div>
    <footer class="fd-dialog__footer fd-bar fd-bar--footer">
      <div class="fd-bar__right">
        <button class="fd-button fd-button--emphasized">OK</button>
      </div>
    </footer>
  </div>
</div>
```

---

**Component ID**: `dialog`
**Category**: Overlays
**Package**: `fundamental-styles`
**Version**: 0.41.0+
