# fundamental-styles

CSS component library for SAP Design System. Framework-agnostic, works with any web technology.

## Quick Lookup - "I need a..."

| Need | Component | Class |
|------|-----------|-------|
| Button | button | `fd-button` |
| Text input | input | `fd-input` |
| Dropdown/Select | select | `fd-select` |
| Checkbox | checkbox | `fd-checkbox` |
| Radio button | radio | `fd-radio` |
| Toggle switch | switch | `fd-switch` |
| Link | link | `fd-link` |
| Modal/Popup | dialog | `fd-dialog` |
| Tooltip | popover | `fd-popover` |
| Dropdown menu | menu | `fd-menu` |
| Data table | table | `fd-table` |
| List of items | list | `fd-list` |
| Card/Tile | card | `fd-card` |
| Tabs | tabs | `fd-tabs` |
| Alert/Banner | alert, message-strip | `fd-alert`, `fd-message-strip` |
| Loading spinner | busy-indicator | `fd-busy-indicator` |
| Form field | form-item | `fd-form-item` |
| Icon | icon | `sap-icon--{name}` |

## Packages

| Package | Purpose | Install |
|---------|---------|---------|
| `fundamental-styles` | 120 UI components | `npm i fundamental-styles` |
| `@fundamental-styles/common-css` | Utility classes (margins, flex) | `npm i @fundamental-styles/common-css` |

## Quick Start

```html
<!-- 1. Theme (required) -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- 2. Components (pick what you need) -->
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/input.css" rel="stylesheet">
```

## Component Classes (fd-*)

**BEM Pattern**: `fd-{component}`, `fd-{component}--{modifier}`, `fd-{component}__{element}`

### Buttons
```html
<button class="fd-button">Default</button>
<button class="fd-button fd-button--emphasized">Primary Action</button>
<button class="fd-button fd-button--positive">Approve</button>
<button class="fd-button fd-button--negative">Reject</button>
<button class="fd-button fd-button--transparent">Ghost/Tertiary</button>
<button class="fd-button fd-button--compact">Compact Size</button>

<!-- Button with icon -->
<button class="fd-button">
  <span class="sap-icon--add"></span> Add Item
</button>

<!-- Icon-only button -->
<button class="fd-button" aria-label="Settings">
  <span class="sap-icon--settings"></span>
</button>

<!-- Disabled state -->
<button class="fd-button" disabled aria-disabled="true">Disabled</button>
```

### Form Inputs
```html
<!-- Text input -->
<input class="fd-input" type="text" placeholder="Enter text">
<input class="fd-input fd-input--compact" type="text">

<!-- States -->
<input class="fd-input is-error" type="text">     <!-- Invalid -->
<input class="fd-input is-success" type="text">   <!-- Valid -->
<input class="fd-input is-warning" type="text">   <!-- Warning -->
<input class="fd-input" disabled>                 <!-- Disabled -->
<input class="fd-input" readonly>                 <!-- Read-only -->

<!-- Complete form field -->
<div class="fd-form-item">
  <label class="fd-form-label fd-form-label--required" for="name">Name</label>
  <input class="fd-input" id="name" type="text">
</div>

<!-- With error message -->
<div class="fd-form-item">
  <label class="fd-form-label" for="email">Email</label>
  <input class="fd-input is-error" id="email" type="email" aria-describedby="email-error">
  <span class="fd-form-message fd-form-message--error" id="email-error">Invalid email</span>
</div>
```

### Select/Dropdown
```html
<div class="fd-select">
  <div class="fd-select__control">
    <span class="fd-select__text-content">Select an option</span>
    <span class="fd-select__button">
      <span class="sap-icon--slim-arrow-down"></span>
    </span>
  </div>
</div>
```

### Checkbox & Radio
```html
<!-- Checkbox -->
<div class="fd-checkbox">
  <input type="checkbox" class="fd-checkbox__input" id="cb1">
  <label class="fd-checkbox__label" for="cb1">Option</label>
</div>

<!-- Radio -->
<div class="fd-radio">
  <input type="radio" class="fd-radio__input" id="r1" name="group">
  <label class="fd-radio__label" for="r1">Option</label>
</div>
```

### Table
```html
<table class="fd-table">
  <thead class="fd-table__header">
    <tr class="fd-table__row">
      <th class="fd-table__cell">Name</th>
      <th class="fd-table__cell">Status</th>
    </tr>
  </thead>
  <tbody class="fd-table__body">
    <tr class="fd-table__row">
      <td class="fd-table__cell">Item 1</td>
      <td class="fd-table__cell">Active</td>
    </tr>
    <tr class="fd-table__row is-selected">  <!-- Selected row -->
      <td class="fd-table__cell">Item 2</td>
      <td class="fd-table__cell">Pending</td>
    </tr>
  </tbody>
</table>
```

### Dialog/Modal
```html
<div class="fd-dialog fd-dialog--active">
  <div class="fd-dialog__content">
    <header class="fd-dialog__header fd-bar fd-bar--header">
      <div class="fd-bar__left">
        <div class="fd-bar__element">
          <h3 class="fd-title fd-title--h5">Dialog Title</h3>
        </div>
      </div>
      <div class="fd-bar__right">
        <div class="fd-bar__element">
          <button class="fd-button fd-button--transparent" aria-label="Close">
            <span class="sap-icon--decline"></span>
          </button>
        </div>
      </div>
    </header>
    <div class="fd-dialog__body">Content here</div>
    <footer class="fd-dialog__footer fd-bar fd-bar--footer">
      <div class="fd-bar__right">
        <button class="fd-button fd-button--emphasized">Save</button>
        <button class="fd-button fd-button--transparent">Cancel</button>
      </div>
    </footer>
  </div>
</div>
```

### Alert/Message Strip
```html
<!-- Inline message -->
<div class="fd-message-strip fd-message-strip--error" role="alert">
  <p class="fd-message-strip__text">Error message here</p>
</div>
<div class="fd-message-strip fd-message-strip--success" role="alert">
  <p class="fd-message-strip__text">Success message</p>
</div>
<div class="fd-message-strip fd-message-strip--warning" role="alert">
  <p class="fd-message-strip__text">Warning message</p>
</div>
<div class="fd-message-strip fd-message-strip--information" role="alert">
  <p class="fd-message-strip__text">Info message</p>
</div>
```

### Icons
```html
<!-- Icon syntax: sap-icon--{icon-name} -->
<span class="sap-icon--home"></span>
<span class="sap-icon--settings"></span>
<span class="sap-icon--add"></span>
<span class="sap-icon--delete"></span>
<span class="sap-icon--edit"></span>
<span class="sap-icon--search"></span>
<span class="sap-icon--filter"></span>
<span class="sap-icon--save"></span>
<span class="sap-icon--cancel"></span>
<span class="sap-icon--accept"></span>
<span class="sap-icon--decline"></span>
<span class="sap-icon--slim-arrow-down"></span>
<span class="sap-icon--slim-arrow-right"></span>

<!-- Full icon list: https://sap.github.io/fundamental-styles/?path=/docs/components-icons-sap-icons -->
```

## State Classes

Apply these to components for different states:

| Class | Usage |
|-------|-------|
| `is-disabled` | Disabled (use with `disabled` attr) |
| `is-selected` | Selected item |
| `is-active` | Active/pressed state |
| `is-focus` | Focused state |
| `is-error` | Error/invalid state |
| `is-success` | Success/valid state |
| `is-warning` | Warning state |
| `is-information` | Information state |

## Utility Classes (sap-*)

From `@fundamental-styles/common-css`:

### Spacing
```
/* Margins - all sides */
sap-margin-tiny|small|medium|large

/* Margins - specific side */
sap-margin-top-tiny      sap-margin-bottom-small
sap-margin-begin-medium  sap-margin-end-large
sap-margin-x-small       sap-margin-y-medium

/* Padding - same pattern */
sap-padding-tiny|small|medium|large
sap-padding-top-*|bottom-*|begin-*|end-*
```

### Flexbox
```
sap-flex                     /* display: flex */
sap-flex--column             /* flex-direction: column */
sap-flex--row                /* flex-direction: row */
sap-flex--center             /* justify + align center */
sap-flex--justify-center     /* justify-content: center */
sap-flex--align-items-center /* align-items: center */
sap-flex--wrap               /* flex-wrap: wrap */
sap-flex--gap-tiny|small|medium|large
```

### Display
```
sap-display-none             /* Hide element */
sap-display-block
sap-display-inline-block
```

## Design Tokens (CSS Variables)

```css
/* Backgrounds */
--sapBackgroundColor           /* Page background */
--sapGroup_ContentBackground   /* Card/panel background */

/* Text */
--sapTextColor                 /* Primary text */
--sapContent_LabelColor        /* Labels */
--sapLink_Color                /* Links */

/* Semantic colors */
--sapPositiveColor             /* Success/green */
--sapNegativeColor             /* Error/red */
--sapCriticalColor             /* Warning/orange */
--sapInformativeColor          /* Info/blue */
```

## Themes

Available in `fundamental-styles/dist/theming/`:
- `sap_horizon.css` (default light)
- `sap_horizon_dark.css`
- `sap_horizon_hcb.css` (high contrast black)
- `sap_horizon_hcw.css` (high contrast white)

## Key Patterns

1. **Always include a theme** - Components need theme CSS
2. **BEM naming** - `fd-component`, `fd-component--modifier`, `fd-component__element`
3. **Compact mode** - Add `--compact` modifier for dense UIs
4. **Accessibility** - Use semantic HTML, proper ARIA attributes, `aria-label` for icon buttons

## More Resources

- **Full component list**: [docs/ai-component-index.md](docs/ai-component-index.md)
- **Component schemas**: [docs/schemas/*.json](docs/schemas/)
- **Utility classes**: [docs/utility-classes.json](docs/utility-classes.json)
- **Visual examples**: https://sap.github.io/fundamental-styles/
