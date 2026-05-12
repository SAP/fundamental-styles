# Layout Patterns Skill

This skill provides common UI layout patterns using fundamental-styles components. Use this to build complete, production-ready interfaces by combining multiple components correctly.

## When to Use This Skill

Use this skill when:
- The user asks "How do I build a [pattern name]?"
- The user needs to combine multiple components
- The user wants a complete working example
- The user asks about common UI patterns (login, dashboard, master-detail, etc.)

---

## Pattern 1: Login Form

A complete login form with email/password fields, validation, and action buttons.

**Components used:**
- `fd-form-item` - Form field containers
- `fd-form-label` - Field labels
- `fd-input` - Text inputs
- `fd-button` - Action buttons
- `fd-message-strip` - Error feedback

**When to use:**
- Authentication pages
- Sign-in forms
- User credential entry

**Complete example:**
```html
<div style="max-width: 400px; margin: 2rem auto;">
  <!-- Error message (hidden by default) -->
  <div class="fd-message-strip fd-message-strip--error" role="alert" style="display: none;" id="login-error">
    <p class="fd-message-strip__text">
      Invalid email or password. Please try again.
    </p>
  </div>

  <form>
    <!-- Email field -->
    <div class="fd-form-item">
      <label class="fd-form-label fd-form-label--required" for="email">
        Email
      </label>
      <input
        class="fd-input"
        type="email"
        id="email"
        placeholder="name@example.com"
        required
        aria-required="true"
      >
    </div>

    <!-- Password field -->
    <div class="fd-form-item">
      <label class="fd-form-label fd-form-label--required" for="password">
        Password
      </label>
      <input
        class="fd-input"
        type="password"
        id="password"
        placeholder="Enter your password"
        required
        aria-required="true"
      >
    </div>

    <!-- Action buttons -->
    <div class="fd-form-item">
      <button class="fd-button fd-button--emphasized" type="submit" style="width: 100%;">
        Sign In
      </button>
    </div>

    <div class="fd-form-item" style="text-align: center;">
      <a href="#" class="fd-link">Forgot password?</a>
    </div>
  </form>
</div>
```

**Key points:**
- Use `fd-form-label--required` for required fields
- Add `aria-required="true"` for accessibility
- Use `fd-button--emphasized` for the primary action
- Hide error message by default, show with JavaScript on validation failure
- Use semantic HTML5 input types (`email`, `password`)

---

## Pattern 2: Master-Detail Layout

A two-column layout with a master list on the left and detail panel on the right. Clicking an item in the master list shows its details.

**Components used:**
- `fd-list` - Master list (left)
- `fd-panel` - Detail panel (right)
- `fd-toolbar` - Actions bar
- `fd-button` - Action buttons

**When to use:**
- Email clients (inbox + message detail)
- File browsers (folders + file preview)
- Settings pages (categories + options)
- Any list-detail relationship

**Complete example:**
```html
<div style="display: flex; gap: 1rem; height: 600px;">
  <!-- Master (List) -->
  <div style="flex: 0 0 300px; overflow-y: auto; border-right: 1px solid var(--sapGroup_ContentBorderColor);">
    <ul class="fd-list" role="listbox">
      <li class="fd-list__item is-selected" role="option" tabindex="0">
        <div class="fd-list__content">
          <div class="fd-list__title">Item 1</div>
          <div class="fd-list__byline">Last updated 2 hours ago</div>
        </div>
      </li>
      <li class="fd-list__item" role="option" tabindex="-1">
        <div class="fd-list__content">
          <div class="fd-list__title">Item 2</div>
          <div class="fd-list__byline">Last updated 5 hours ago</div>
        </div>
      </li>
      <li class="fd-list__item" role="option" tabindex="-1">
        <div class="fd-list__content">
          <div class="fd-list__title">Item 3</div>
          <div class="fd-list__byline">Last updated yesterday</div>
        </div>
      </li>
    </ul>
  </div>

  <!-- Detail (Panel) -->
  <div style="flex: 1; overflow-y: auto;">
    <div class="fd-panel">
      <!-- Toolbar with actions -->
      <div class="fd-toolbar">
        <div class="fd-toolbar__group">
          <button class="fd-button fd-button--transparent fd-button--compact">
            <i class="sap-icon--edit" role="presentation" aria-hidden="true"></i>
            <span class="fd-button__text">Edit</span>
          </button>
          <button class="fd-button fd-button--transparent fd-button--compact">
            <i class="sap-icon--delete" role="presentation" aria-hidden="true"></i>
            <span class="fd-button__text">Delete</span>
          </button>
          <button class="fd-button fd-button--transparent fd-button--compact">
            <i class="sap-icon--share" role="presentation" aria-hidden="true"></i>
            <span class="fd-button__text">Share</span>
          </button>
        </div>
      </div>

      <!-- Panel header -->
      <div class="fd-panel__header">
        <h3 class="fd-panel__title">Item 1 Details</h3>
        <p class="fd-panel__description">View and manage item information</p>
      </div>

      <!-- Panel body -->
      <div class="fd-panel__body">
        <div class="fd-form-item">
          <label class="fd-form-label">Name</label>
          <p>Item 1</p>
        </div>
        <div class="fd-form-item">
          <label class="fd-form-label">Status</label>
          <p>Active</p>
        </div>
        <div class="fd-form-item">
          <label class="fd-form-label">Description</label>
          <p>This is a detailed description of Item 1. It contains information about the item's properties, history, and current state.</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

**Key points:**
- Use flexbox for the two-column layout
- Set fixed width for master (e.g., `300px`)
- Use `is-selected` class on active list item
- Add `overflow-y: auto` for scrollable panels
- Use `fd-toolbar` for detail panel actions
- Implement keyboard navigation (arrow keys) for list items

---

## Pattern 3: Data Table with Actions

A table with selectable rows, bulk actions toolbar, and per-row action buttons.

**Components used:**
- `fd-table` - Data grid
- `fd-checkbox` - Row selection
- `fd-toolbar` - Bulk actions
- `fd-button` - Action buttons

**When to use:**
- User management tables
- Product catalogs
- Order lists
- Any data that needs bulk operations

**Complete example:**
```html
<!-- Toolbar with bulk actions (shown when rows are selected) -->
<div class="fd-toolbar">
  <div class="fd-toolbar__group">
    <span class="fd-toolbar__label">2 items selected</span>
  </div>
  <div class="fd-toolbar__group">
    <button class="fd-button fd-button--transparent fd-button--compact">
      <i class="sap-icon--delete" role="presentation" aria-hidden="true"></i>
      <span class="fd-button__text">Delete Selected</span>
    </button>
    <button class="fd-button fd-button--transparent fd-button--compact">
      <i class="sap-icon--email" role="presentation" aria-hidden="true"></i>
      <span class="fd-button__text">Send Email</span>
    </button>
  </div>
</div>

<!-- Table -->
<table class="fd-table">
  <thead class="fd-table__header">
    <tr class="fd-table__row">
      <th class="fd-table__cell" style="width: 50px;">
        <input
          type="checkbox"
          class="fd-checkbox"
          id="select-all"
          aria-label="Select all rows"
        >
        <label class="fd-checkbox__label" for="select-all"></label>
      </th>
      <th class="fd-table__cell" scope="col">Name</th>
      <th class="fd-table__cell" scope="col">Email</th>
      <th class="fd-table__cell" scope="col">Status</th>
      <th class="fd-table__cell" scope="col">Actions</th>
    </tr>
  </thead>
  <tbody class="fd-table__body">
    <tr class="fd-table__row is-selected">
      <td class="fd-table__cell">
        <input
          type="checkbox"
          class="fd-checkbox"
          id="row1"
          checked
          aria-label="Select row 1"
        >
        <label class="fd-checkbox__label" for="row1"></label>
      </td>
      <td class="fd-table__cell">John Doe</td>
      <td class="fd-table__cell">john.doe@example.com</td>
      <td class="fd-table__cell">
        <span class="fd-object-status fd-object-status--positive">Active</span>
      </td>
      <td class="fd-table__cell">
        <button class="fd-button fd-button--transparent fd-button--compact" aria-label="Edit John Doe">
          <i class="sap-icon--edit"></i>
        </button>
        <button class="fd-button fd-button--transparent fd-button--compact" aria-label="Delete John Doe">
          <i class="sap-icon--delete"></i>
        </button>
      </td>
    </tr>
    <tr class="fd-table__row is-selected">
      <td class="fd-table__cell">
        <input
          type="checkbox"
          class="fd-checkbox"
          id="row2"
          checked
          aria-label="Select row 2"
        >
        <label class="fd-checkbox__label" for="row2"></label>
      </td>
      <td class="fd-table__cell">Jane Smith</td>
      <td class="fd-table__cell">jane.smith@example.com</td>
      <td class="fd-table__cell">
        <span class="fd-object-status fd-object-status--critical">Inactive</span>
      </td>
      <td class="fd-table__cell">
        <button class="fd-button fd-button--transparent fd-button--compact" aria-label="Edit Jane Smith">
          <i class="sap-icon--edit"></i>
        </button>
        <button class="fd-button fd-button--transparent fd-button--compact" aria-label="Delete Jane Smith">
          <i class="sap-icon--delete"></i>
        </button>
      </td>
    </tr>
    <tr class="fd-table__row">
      <td class="fd-table__cell">
        <input
          type="checkbox"
          class="fd-checkbox"
          id="row3"
          aria-label="Select row 3"
        >
        <label class="fd-checkbox__label" for="row3"></label>
      </td>
      <td class="fd-table__cell">Bob Johnson</td>
      <td class="fd-table__cell">bob.johnson@example.com</td>
      <td class="fd-table__cell">
        <span class="fd-object-status fd-object-status--positive">Active</span>
      </td>
      <td class="fd-table__cell">
        <button class="fd-button fd-button--transparent fd-button--compact" aria-label="Edit Bob Johnson">
          <i class="sap-icon--edit"></i>
        </button>
        <button class="fd-button fd-button--transparent fd-button--compact" aria-label="Delete Bob Johnson">
          <i class="sap-icon--delete"></i>
        </button>
      </td>
    </tr>
  </tbody>
</table>
```

**Key points:**
- Use `fd-checkbox` in first column for row selection
- Add `is-selected` class to selected rows
- Show/hide toolbar based on selection state
- Use `fd-button--compact` for in-table actions
- Add descriptive `aria-label` for icon-only buttons
- Use `fd-object-status` for semantic status indicators

---

## Pattern 4: Multi-Step Wizard

A step-by-step wizard for complex forms or processes.

**Components used:**
- `fd-wizard` - Stepper navigation
- `fd-form-item` - Form fields
- `fd-input` - Input fields
- `fd-button` - Navigation buttons

**When to use:**
- Multi-step forms (signup, checkout, configuration)
- Guided workflows
- Setup wizards
- Complex data entry processes

**Complete example:**
```html
<div style="max-width: 800px; margin: 2rem auto;">
  <!-- Wizard navigation -->
  <div class="fd-wizard">
    <nav class="fd-wizard__navigation">
      <ul class="fd-wizard__steps">
        <li class="fd-wizard__step fd-wizard__step--completed">
          <div class="fd-wizard__step-wrapper">
            <span class="fd-wizard__step-indicator">
              <i class="sap-icon--accept"></i>
            </span>
            <div class="fd-wizard__step-content">
              <span class="fd-wizard__label">Personal Info</span>
            </div>
          </div>
        </li>
        <li class="fd-wizard__step fd-wizard__step--current">
          <div class="fd-wizard__step-wrapper">
            <span class="fd-wizard__step-indicator">2</span>
            <div class="fd-wizard__step-content">
              <span class="fd-wizard__label">Contact Details</span>
            </div>
          </div>
        </li>
        <li class="fd-wizard__step">
          <div class="fd-wizard__step-wrapper">
            <span class="fd-wizard__step-indicator">3</span>
            <div class="fd-wizard__step-content">
              <span class="fd-wizard__label">Review</span>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </div>

  <!-- Step content -->
  <div class="fd-wizard__content" style="margin-top: 2rem;">
    <h3>Step 2: Contact Details</h3>
    <p style="margin-bottom: 1rem;">Please provide your contact information.</p>

    <div class="fd-form-item">
      <label class="fd-form-label fd-form-label--required" for="phone">
        Phone Number
      </label>
      <input
        class="fd-input"
        type="tel"
        id="phone"
        placeholder="+1 (555) 123-4567"
        required
      >
    </div>

    <div class="fd-form-item">
      <label class="fd-form-label fd-form-label--required" for="email-wizard">
        Email
      </label>
      <input
        class="fd-input"
        type="email"
        id="email-wizard"
        placeholder="name@example.com"
        required
      >
    </div>

    <div class="fd-form-item">
      <label class="fd-form-label" for="address">
        Address
      </label>
      <textarea
        class="fd-textarea"
        id="address"
        rows="3"
        placeholder="Enter your address"
      ></textarea>
    </div>
  </div>

  <!-- Navigation buttons -->
  <div class="fd-wizard__footer" style="margin-top: 2rem; display: flex; justify-content: space-between;">
    <button class="fd-button fd-button--transparent">
      <i class="sap-icon--slim-arrow-left" role="presentation" aria-hidden="true"></i>
      <span class="fd-button__text">Previous</span>
    </button>
    <button class="fd-button fd-button--emphasized">
      <span class="fd-button__text">Next</span>
      <i class="sap-icon--slim-arrow-right" role="presentation" aria-hidden="true"></i>
    </button>
  </div>
</div>
```

**Key points:**
- Use `fd-wizard__step--completed` for finished steps
- Use `fd-wizard__step--current` for active step
- Show only the current step's content
- Validate current step before allowing "Next"
- Use "Previous" and "Next" buttons for navigation
- Change "Next" to "Finish" on the last step
- Implement keyboard navigation (arrow keys optional)

---

## Pattern 5: Form with Validation

A complete form with field validation, error messages, and proper accessibility.

**Components used:**
- `fd-form-item` - Form field containers
- `fd-form-label` - Labels
- `fd-input` - Text inputs
- `fd-select` - Dropdowns
- `fd-form-message` - Validation messages
- `fd-button` - Submit button

**When to use:**
- User registration forms
- Profile editing
- Data entry forms
- Any form requiring validation

**Complete example:**
```html
<form style="max-width: 600px;">
  <!-- Valid field -->
  <div class="fd-form-item">
    <label class="fd-form-label fd-form-label--required" for="username">
      Username
    </label>
    <input
      class="fd-input is-success"
      type="text"
      id="username"
      value="john.doe"
      aria-invalid="false"
    >
    <span class="fd-form-message fd-form-message--success">
      Username is available
    </span>
  </div>

  <!-- Invalid field -->
  <div class="fd-form-item">
    <label class="fd-form-label fd-form-label--required" for="email-form">
      Email
    </label>
    <input
      class="fd-input is-error"
      type="email"
      id="email-form"
      value="invalid-email"
      aria-invalid="true"
      aria-describedby="email-error"
    >
    <span class="fd-form-message fd-form-message--error" id="email-error">
      Please enter a valid email address
    </span>
  </div>

  <!-- Warning field -->
  <div class="fd-form-item">
    <label class="fd-form-label" for="password-form">
      Password
    </label>
    <input
      class="fd-input is-warning"
      type="password"
      id="password-form"
      value="weak"
      aria-describedby="password-warning"
    >
    <span class="fd-form-message fd-form-message--warning" id="password-warning">
      Password is weak. Consider using a stronger password.
    </span>
  </div>

  <!-- Information field -->
  <div class="fd-form-item">
    <label class="fd-form-label" for="bio">
      Bio
    </label>
    <textarea
      class="fd-textarea is-information"
      id="bio"
      rows="3"
      aria-describedby="bio-info"
    ></textarea>
    <span class="fd-form-message fd-form-message--information" id="bio-info">
      Tell us a bit about yourself (optional, max 500 characters)
    </span>
  </div>

  <!-- Select dropdown -->
  <div class="fd-form-item">
    <label class="fd-form-label fd-form-label--required" for="country">
      Country
    </label>
    <select class="fd-select" id="country" required>
      <option value="">Select a country</option>
      <option value="us">United States</option>
      <option value="uk">United Kingdom</option>
      <option value="ca">Canada</option>
    </select>
  </div>

  <!-- Submit button -->
  <div class="fd-form-item">
    <button class="fd-button fd-button--emphasized" type="submit">
      Save Changes
    </button>
    <button class="fd-button fd-button--transparent" type="button">
      Cancel
    </button>
  </div>
</form>
```

**Key points:**
- Use state classes: `is-error`, `is-success`, `is-warning`, `is-information`
- Pair states with matching `fd-form-message` components
- Link messages to inputs with `aria-describedby`
- Set `aria-invalid="true"` for error states
- Mark required fields with `fd-form-label--required`
- Validate on blur, not on every keystroke (better UX)
- Disable submit button until form is valid

---

## Pattern 6: Dialog with Form

A modal dialog containing a form for focused data entry.

**Components used:**
- `fd-dialog` - Modal container
- `fd-bar` - Header and footer
- `fd-form-item` - Form fields
- `fd-button` - Actions

**When to use:**
- Quick data entry without leaving current page
- Edit existing records
- Create new records in context
- Focused user input

**Complete example:**
```html
<div class="fd-dialog fd-dialog--active" role="dialog" aria-modal="true" aria-labelledby="dialog-form-title">
  <div class="fd-dialog__content" style="width: 500px;">
    <!-- Header -->
    <header class="fd-dialog__header fd-bar fd-bar--header">
      <div class="fd-bar__left">
        <div class="fd-bar__element">
          <h3 class="fd-title fd-title--h5" id="dialog-form-title">
            Create New User
          </h3>
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

    <!-- Body with form -->
    <div class="fd-dialog__body">
      <form id="user-form">
        <div class="fd-form-item">
          <label class="fd-form-label fd-form-label--required" for="dialog-name">
            Full Name
          </label>
          <input
            class="fd-input"
            type="text"
            id="dialog-name"
            placeholder="Enter full name"
            required
          >
        </div>

        <div class="fd-form-item">
          <label class="fd-form-label fd-form-label--required" for="dialog-email">
            Email
          </label>
          <input
            class="fd-input"
            type="email"
            id="dialog-email"
            placeholder="name@example.com"
            required
          >
        </div>

        <div class="fd-form-item">
          <label class="fd-form-label" for="dialog-role">
            Role
          </label>
          <select class="fd-select" id="dialog-role">
            <option value="user">User</option>
            <option value="admin">Administrator</option>
            <option value="editor">Editor</option>
          </select>
        </div>
      </form>
    </div>

    <!-- Footer with actions -->
    <footer class="fd-dialog__footer fd-bar fd-bar--footer">
      <div class="fd-bar__right">
        <div class="fd-bar__element">
          <button class="fd-button fd-button--emphasized" type="submit" form="user-form">
            Create User
          </button>
        </div>
        <div class="fd-bar__element">
          <button class="fd-button fd-button--transparent">
            Cancel
          </button>
        </div>
      </div>
    </footer>
  </div>
</div>
```

**Key points:**
- Set explicit width on `fd-dialog__content` (e.g., 500px)
- Use `form` element with unique `id`
- Link submit button to form with `form` attribute
- Place primary action (Create) on the right
- Place secondary action (Cancel) next to primary
- Close dialog on Cancel or X button click
- Close and refresh on successful submit

---

## Pattern 7: Dashboard with Cards

A dashboard layout with multiple cards showing key metrics and information.

**Components used:**
- `fd-card` - Information cards
- `fd-button` - Card actions
- CSS Grid - Layout

**When to use:**
- Application dashboards
- Analytics pages
- Overview screens
- KPI displays

**Complete example:**
```html
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; padding: 1rem;">
  <!-- Card 1: Metric -->
  <div class="fd-card">
    <div class="fd-card__header">
      <div class="fd-card__header-text">
        <h3 class="fd-card__title-area">Total Users</h3>
      </div>
    </div>
    <div class="fd-card__content">
      <div style="text-align: center; padding: 2rem 0;">
        <div style="font-size: 3rem; font-weight: bold; color: var(--sapPositiveColor);">
          1,234
        </div>
        <div style="color: var(--sapContent_LabelColor); margin-top: 0.5rem;">
          <i class="sap-icon--arrow-top" style="color: var(--sapPositiveColor);"></i>
          +12% from last month
        </div>
      </div>
    </div>
  </div>

  <!-- Card 2: List -->
  <div class="fd-card">
    <div class="fd-card__header">
      <div class="fd-card__header-text">
        <h3 class="fd-card__title-area">Recent Activity</h3>
      </div>
      <div class="fd-card__header-toolbar">
        <button class="fd-button fd-button--transparent fd-button--compact">
          View All
        </button>
      </div>
    </div>
    <div class="fd-card__content" style="padding: 0;">
      <ul class="fd-list">
        <li class="fd-list__item">
          <div class="fd-list__content">
            <div class="fd-list__title">User registered</div>
            <div class="fd-list__byline">2 minutes ago</div>
          </div>
        </li>
        <li class="fd-list__item">
          <div class="fd-list__content">
            <div class="fd-list__title">Order completed</div>
            <div class="fd-list__byline">15 minutes ago</div>
          </div>
        </li>
        <li class="fd-list__item">
          <div class="fd-list__content">
            <div class="fd-list__title">Payment processed</div>
            <div class="fd-list__byline">1 hour ago</div>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <!-- Card 3: Status -->
  <div class="fd-card">
    <div class="fd-card__header">
      <div class="fd-card__header-text">
        <h3 class="fd-card__title-area">System Status</h3>
      </div>
    </div>
    <div class="fd-card__content">
      <div class="fd-form-item">
        <label class="fd-form-label">API Server</label>
        <span class="fd-object-status fd-object-status--positive">
          <i class="sap-icon--status-positive"></i> Online
        </span>
      </div>
      <div class="fd-form-item">
        <label class="fd-form-label">Database</label>
        <span class="fd-object-status fd-object-status--positive">
          <i class="sap-icon--status-positive"></i> Connected
        </span>
      </div>
      <div class="fd-form-item">
        <label class="fd-form-label">Background Jobs</label>
        <span class="fd-object-status fd-object-status--critical">
          <i class="sap-icon--status-critical"></i> 2 Pending
        </span>
      </div>
    </div>
  </div>
</div>
```

**Key points:**
- Use CSS Grid with `auto-fit` and `minmax` for responsive layout
- Set minimum card width (e.g., 300px)
- Use `fd-card__header-toolbar` for card actions
- Remove padding from `fd-card__content` when using lists
- Use `fd-object-status` for status indicators
- Keep card content focused and concise

---

## General Pattern Tips

### Layout Best Practices
1. **Use CSS Grid** for card/tile layouts
2. **Use Flexbox** for single-axis layouts (toolbars, button groups)
3. **Set max-width** on forms and content areas (e.g., 600-800px)
4. **Add spacing** between components (1rem is a good default)
5. **Make layouts responsive** with media queries or auto-fit grids

### Component Composition
1. **Layer components logically** - Container → Content → Actions
2. **Use semantic HTML** - Forms use `<form>`, lists use `<ul>`/`<ol>`
3. **Group related actions** - Keep primary and secondary actions together
4. **Maintain consistent spacing** - Use `fd-form-item` for vertical spacing

### Accessibility
1. **Always include labels** - Use `fd-form-label` with `for` attribute
2. **Link errors to fields** - Use `aria-describedby`
3. **Set ARIA states** - `aria-invalid`, `aria-required`, `aria-expanded`
4. **Provide alternative text** - `aria-label` for icon buttons
5. **Manage focus** - Set focus on first field in dialogs

### State Management
1. **Show/hide components** based on user interaction
2. **Update CSS classes** for visual state (`is-selected`, `is-error`)
3. **Disable buttons** during async operations
4. **Clear forms** after successful submission
5. **Preserve form state** when closing dialogs (ask for confirmation)

For more patterns and component details, consult:
- Component Guidance Skill (`component-guidance.md`)
- MCP Server tools (`get_component_html`, `get_component_guidance`)
- Fiori Design Guidelines (https://www.sap.com/design-system/fiori-design-web/)
