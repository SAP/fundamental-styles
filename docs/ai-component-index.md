# AI Component Index - Fundamental Library Styles

> **For AI Agents**: This index provides a structured overview of all 120 components available in Fundamental Library Styles. Use this to quickly identify the right component for your task.

## Overview

Fundamental Library Styles is a comprehensive HTML/CSS component library for building enterprise applications with the SAP Design System. All components follow:
- **BEM naming convention**: `fd-{component}`, `fd-{component}__{element}`, `fd-{component}--{modifier}`
- **Self-contained styling**: No style bleeding in or out
- **Accessibility-first**: WCAG 2.0 AA compliant with semantic HTML and ARIA support
- **Theme-able**: Supports 11 SAP themes (Horizon, Horizon Dark, High Contrast)
- **Framework-agnostic**: Works with any web technology

## How to Use This Index

1. **Find your component**: Browse by category or search by keyword
2. **Check the use case**: Understand when to use this component
3. **Import the CSS**: Use the import path provided
4. **View examples**: Visit Storybook link for HTML reference implementations

## Package Information

| Package | Description | NPM Install |
|---------|-------------|-------------|
| `fundamental-styles` | Main component library (120 components) | `npm install fundamental-styles` |
| `@fundamental-styles/common-css` | Utility CSS classes and mixins | `npm install @fundamental-styles/common-css` |
| `@fundamental-styles/cx` | Customer Experience components | `npm install @fundamental-styles/cx` |

---

## Components by Category

### 🎯 Interactive Elements & Buttons

| Component | Description | Primary Use Case | CSS Import |
|-----------|-------------|------------------|------------|
| **button** | Action trigger with multiple styles | Trigger actions, submit forms, open dialogs | `fundamental-styles/dist/button.css` |
| **button-split** | Button with main action + dropdown menu | Combined primary action with additional options | `fundamental-styles/dist/button-split.css` |
| **segmented-button** | Group of buttons for single selection | Toggle between views or options in a group | `fundamental-styles/dist/segmented-button.css` |
| **link** | Navigation link | Navigate to different pages or sections | `fundamental-styles/dist/link.css` |
| **menu** | Contextual menu with actions | Display list of actions or options | `fundamental-styles/dist/menu.css` |
| **action-sheet** | Mobile-optimized action menu | Present actions on mobile devices | `fundamental-styles/dist/action-sheet.css` |

**AI Tip**: Use `button` for actions, `link` for navigation. Never use a button for page navigation.

---

### 📝 Form Components & Input

| Component | Description | Primary Use Case | CSS Import |
|-----------|-------------|------------------|------------|
| **input** | Single-line text input | Collect short text, numbers, emails | `fundamental-styles/dist/input.css` |
| **input-group** | Input with addons (icons, buttons) | Enhanced inputs with actions or context | `fundamental-styles/dist/input-group.css` |
| **textarea** | Multi-line text input | Collect long-form text content | `fundamental-styles/dist/textarea.css` |
| **checkbox** | Multiple selection control | Select multiple options from a list | `fundamental-styles/dist/checkbox.css` |
| **radio** | Single selection control | Select one option from a group | `fundamental-styles/dist/radio.css` |
| **switch** | Binary toggle control | Enable/disable features or settings | `fundamental-styles/dist/switch.css` |
| **select** | Dropdown selection | Choose one option from many | `fundamental-styles/dist/select.css` |
| **search-field** | Search input with icon | Search and filter functionality | `fundamental-styles/dist/search-field.css` |
| **file-uploader** | File selection control | Upload files to the application | `fundamental-styles/dist/file-uploader.css` |
| **slider** | Range selection control | Select numeric value from range | `fundamental-styles/dist/slider.css` |
| **step-input** | Numeric input with increment/decrement | Adjust numeric values precisely | `fundamental-styles/dist/step-input.css` |
| **prompt-input** | AI prompt input field | Collect AI prompts or commands | `fundamental-styles/dist/prompt-input.css` |

**AI Tip**: Always include proper labels and ARIA attributes for accessibility.

---

### 📋 Form Layout & Structure

| Component | Description | Primary Use Case | CSS Import |
|-----------|-------------|------------------|------------|
| **form-group** | Container for related form elements | Group related inputs together | `fundamental-styles/dist/form-group.css` |
| **form-item** | Individual form field container | Wrap single input with label | `fundamental-styles/dist/form-item.css` |
| **form-label** | Form field label | Label form inputs | `fundamental-styles/dist/form-label.css` |
| **form-header** | Section header in forms | Organize form into sections | `fundamental-styles/dist/form-header.css` |
| **form-message** | Validation messages | Display errors or help text | `fundamental-styles/dist/form-message.css` |
| **form-layout-grid** | Responsive form grid layout | Create multi-column forms | `fundamental-styles/dist/form-layout-grid.css` |
| **fieldset** | Group of related inputs | Group form controls semantically | `fundamental-styles/dist/fieldset.css` |

---

### 📊 Data Display & Tables

| Component | Description | Primary Use Case | CSS Import |
|-----------|-------------|------------------|------------|
| **table** | Structured data table | Display and interact with tabular data | `fundamental-styles/dist/table.css` |
| **list** | Vertical list of items | Display simple or complex list items | `fundamental-styles/dist/list.css` |
| **grid-list** | Grid layout for items | Display items in responsive grid | `fundamental-styles/dist/grid-list.css` |
| **tree** | Hierarchical data structure | Display nested/hierarchical data | `fundamental-styles/dist/tree.css` |
| **object-list** | List of business objects | Display structured business data | `fundamental-styles/dist/object-list.css` |

**AI Tip**: Use `table` for data that needs sorting/filtering, `list` for simple displays, `grid-list` for visual content.

---

### 🗓️ Date & Time

| Component | Description | Primary Use Case | CSS Import |
|-----------|-------------|------------------|------------|
| **calendar** | Date picker calendar | Select dates or date ranges | `fundamental-styles/dist/calendar.css` |
| **time** | Time display | Show formatted time values | `fundamental-styles/dist/time.css` |
| **timepicker** | Time selection control | Select specific times | `fundamental-styles/dist/timepicker.css` |

---

### 🧭 Navigation Components

| Component | Description | Primary Use Case | CSS Import |
|-----------|-------------|------------------|------------|
| **shellbar** | Application header bar | Main application navigation and branding | `fundamental-styles/dist/shellbar.css` |
| **side-nav** | Vertical navigation sidebar | Main navigation for sections | `fundamental-styles/dist/side-nav.css` |
| **vertical-nav** | Vertical navigation list | Secondary vertical navigation | `fundamental-styles/dist/vertical-nav.css` |
| **horizontal-navigation** | Horizontal navigation tabs | Top-level navigation across sections | `fundamental-styles/dist/horizontal-navigation.css` |
| **breadcrumb** | Hierarchical navigation trail | Show current location in hierarchy | `fundamental-styles/dist/breadcrumb.css` |
| **tabs** | Tab navigation | Switch between views in same context | `fundamental-styles/dist/tabs.css` |
| **icon-tab-bar** | Icon-based tab navigation | Tab navigation with icons and counts | `fundamental-styles/dist/icon-tab-bar.css` |
| **pagination** | Page navigation controls | Navigate through paginated data | `fundamental-styles/dist/pagination.css` |
| **navigation** | General navigation container | Create custom navigation structures | `fundamental-styles/dist/navigation.css` |
| **navigation-list** | Nested navigation list | Multi-level navigation | `fundamental-styles/dist/navigation-list.css` |
| **navigation-menu** | Navigation with menu items | Combined navigation and menu | `fundamental-styles/dist/navigation-menu.css` |
| **wizard** | Step-by-step navigation | Guide users through multi-step process | `fundamental-styles/dist/wizard.css` |

**AI Tip**: Use `shellbar` for app-level navigation, `side-nav` for section navigation, `tabs` for view switching.

---

### 🏗️ Layout Components

| Component | Description | Primary Use Case | CSS Import |
|-----------|-------------|------------------|------------|
| **page** | Main page container | Structure full page layouts | `fundamental-styles/dist/page.css` |
| **page-footer** | Page footer container | Footer content and actions | `fundamental-styles/dist/page-footer.css` |
| **section** | Content section container | Divide page into sections | `fundamental-styles/dist/section.css` |
| **layout** | Flexible layout container | Create custom layouts | `fundamental-styles/dist/layout.css` |
| **layout-grid** | Grid layout system | Create responsive grid layouts | `fundamental-styles/dist/layout-grid.css` |
| **layout-panel** | Panel within layouts | Resizable panels in layout | `fundamental-styles/dist/layout-panel.css` |
| **dynamic-page** | Responsive page with header | Page with collapsible header | `fundamental-styles/dist/dynamic-page.css` |
| **dynamic-side-content** | Responsive side content | Main content with side panel | `fundamental-styles/dist/dynamic-side-content.css` |
| **flexible-column-layout** | Multi-column responsive layout | Master-detail-detail patterns | `fundamental-styles/dist/flexible-column-layout.css` |
| **tool-layout** | Tool/utility layout | Layout for tool applications | `fundamental-styles/dist/tool-layout.css` |
| **splitter** | Resizable split panes | Create resizable layout sections | `fundamental-styles/dist/splitter.css` |

**AI Tip**: Start with `page` for basic layouts, use `dynamic-page` for headers that collapse on scroll.

---

### 📦 Containers & Cards

| Component | Description | Primary Use Case | CSS Import |
|-----------|-------------|------------------|------------|
| **card** | Content card container | Group related content visually | `fundamental-styles/dist/card.css` |
| **tile** | Clickable tile for navigation | Launch applications or navigate | `fundamental-styles/dist/tile.css` |
| **panel** | Expandable content panel | Show/hide detailed content | `fundamental-styles/dist/panel.css` |
| **facet** | Grouped information display | Display structured information | `fundamental-styles/dist/facet.css` |
| **fixed-card-layout** | Fixed grid of cards | Dashboard with fixed card positions | `fundamental-styles/dist/fixed-card-layout.css` |
| **resizable-card-layout** | Resizable card grid | Dashboard with resizable cards | `fundamental-styles/dist/resizable-card-layout.css` |

---

### 💬 Dialogs & Overlays

| Component | Description | Primary Use Case | CSS Import |
|-----------|-------------|------------------|------------|
| **dialog** | Modal dialog window | Display important information or forms | `fundamental-styles/dist/dialog.css` |
| **popover** | Contextual popup | Show additional info on click/hover | `fundamental-styles/dist/popover.css` |
| **message-box** | Confirmation dialog | Ask for user confirmation | `fundamental-styles/dist/message-box.css` |
| **quick-view** | Compact information popover | Show object details quickly | `fundamental-styles/dist/quick-view.css` |

**AI Tip**: Use `dialog` for critical decisions, `popover` for supplementary info, `message-box` for confirmations.

---

### 📢 Feedback & Notifications

| Component | Description | Primary Use Case | CSS Import |
|-----------|-------------|------------------|------------|
| **alert** | Important message banner | Display critical system messages | `fundamental-styles/dist/alert.css` |
| **message-strip** | Inline informational message | Show contextual feedback messages | `fundamental-styles/dist/message-strip.css` |
| **message-toast** | Temporary notification | Show brief confirmations or errors | `fundamental-styles/dist/message-toast.css` |
| **notification** | Notification list item | Display system notifications | `fundamental-styles/dist/notification.css` |
| **message-page** | Full page message | Show error or empty states | `fundamental-styles/dist/message-page.css` |
| **message-popover** | Messages in popover | Show multiple messages in popup | `fundamental-styles/dist/message-popover.css` |
| **busy-indicator** | Loading spinner | Indicate loading state | `fundamental-styles/dist/busy-indicator.css` |
| **progress-indicator** | Progress bar | Show task progress | `fundamental-styles/dist/progress-indicator.css` |
| **skeleton** | Loading placeholder | Show content structure while loading | `fundamental-styles/dist/skeleton.css` |

**AI Tip**: Use `message-strip` for inline feedback, `message-toast` for temporary notifications, `alert` for critical messages.

---

### 🎨 Visual Elements

| Component | Description | Primary Use Case | CSS Import |
|-----------|-------------|------------------|------------|
| **icon** | SAP icon font | Display icons | `fundamental-styles/dist/icon.css` |
| **avatar** | User profile picture | Display user images or initials | `fundamental-styles/dist/avatar.css` |
| **avatar-group** | Multiple avatars | Show group of users | `fundamental-styles/dist/avatar-group.css` |
| **badge** | Count or status indicator | Show counts or states on elements | `fundamental-styles/dist/badge.css` |
| **status-indicator** | Visual status marker | Show status with color and icon | `fundamental-styles/dist/status-indicator.css` |
| **illustrated-message** | Large illustration with text | Empty states or welcome screens | `fundamental-styles/dist/illustrated-message.css` |
| **carousel** | Image/content carousel | Rotate through multiple items | `fundamental-styles/dist/carousel.css` |

---

### 🏷️ Tags & Tokens

| Component | Description | Primary Use Case | CSS Import |
|-----------|-------------|------------------|------------|
| **token** | Removable selection tag | Display selected items (multi-select) | `fundamental-styles/dist/token.css` |
| **tokenizer** | Container for tokens | Group multiple tokens | `fundamental-styles/dist/tokenizer.css` |
| **generic-tag** | Label or category tag | Categorize or label items | `fundamental-styles/dist/generic-tag.css` |
| **info-label** | Informational label | Display metadata or attributes | `fundamental-styles/dist/info-label.css` |
| **counter** | Numeric counter badge | Show counts | `fundamental-styles/dist/counter.css` |

---

### 📊 Business Objects & Data

| Component | Description | Primary Use Case | CSS Import |
|-----------|-------------|------------------|------------|
| **object-status** | Object status indicator | Show status of business objects | `fundamental-styles/dist/object-status.css` |
| **object-number** | Formatted number display | Display numeric business values | `fundamental-styles/dist/object-number.css` |
| **object-marker** | Object type marker | Indicate object type | `fundamental-styles/dist/object-marker.css` |
| **object-identifier** | Object title and description | Display object identity | `fundamental-styles/dist/object-identifier.css` |
| **object-attribute** | Key-value attribute pair | Display object properties | `fundamental-styles/dist/object-attribute.css` |
| **numeric-content** | Numeric metric display | Show KPIs and metrics | `fundamental-styles/dist/numeric-content.css` |
| **rating-indicator** | Star rating display | Show or collect ratings | `fundamental-styles/dist/rating-indicator.css` |
| **micro-process-flow** | Mini process visualization | Show workflow steps | `fundamental-styles/dist/micro-process-flow.css` |

---

### 📱 Social & Feed

| Component | Description | Primary Use Case | CSS Import |
|-----------|-------------|------------------|------------|
| **feed-input** | Social feed input | Compose posts or comments | `fundamental-styles/dist/feed-input.css` |
| **feed-list** | Social feed list | Display activity feed or timeline | `fundamental-styles/dist/feed-list.css` |

---

### 🛠️ Toolbars & Actions

| Component | Description | Primary Use Case | CSS Import |
|-----------|-------------|------------------|------------|
| **bar** | Horizontal bar with actions | Headers, footers, or action areas | `fundamental-styles/dist/bar.css` |
| **toolbar** | Action toolbar | Group actions for content | `fundamental-styles/dist/toolbar.css` |
| **action-bar** | Page-level action bar | Actions at page or object level | `fundamental-styles/dist/action-bar.css` |
| **tool-header** | Tool application header | Header for tool/utility apps | `fundamental-styles/dist/tool-header.css` |

---

### 📝 Typography & Text

| Component | Description | Primary Use Case | CSS Import |
|-----------|-------------|------------------|------------|
| **title** | Styled heading | Display titles and headings | `fundamental-styles/dist/title.css` |
| **text** | Body text styles | Display formatted text content | `fundamental-styles/dist/text.css` |
| **code** | Code block display | Display code snippets | `fundamental-styles/dist/code.css` |

---

### 🤖 AI Components (New)

| Component | Description | Primary Use Case | CSS Import |
|-----------|-------------|------------------|------------|
| **ai-writing-assistant** | AI writing assistant UI | Integrate AI writing help | `fundamental-styles/dist/ai-writing-assistant.css` |
| **ai-writing-assistant-versioning** | Version control for AI content | Manage AI-generated versions | `fundamental-styles/dist/ai-writing-assistant-versioning.css` |
| **ai-busy-indicator** | AI-specific loading state | Show AI processing | `fundamental-styles/dist/ai-busy-indicator.css` |
| **ai-loading-bar** | AI progress bar | Show AI task progress | `fundamental-styles/dist/ai-loading-bar.css` |
| **ai-text** | AI-generated text display | Style AI-generated content | `fundamental-styles/dist/ai-text.css` |

---

### 🔧 Utility Components

| Component | Description | Primary Use Case | CSS Import |
|-----------|-------------|------------------|------------|
| **scrollbar** | Custom scrollbar styling | Style scrollable areas | `fundamental-styles/dist/scrollbar.css` |
| **helpers** | CSS helper classes | Utility classes for spacing, alignment | `fundamental-styles/dist/helpers.css` |
| **margins** | Margin utility classes | Apply consistent margins | `fundamental-styles/dist/margins.css` |
| **paddings** | Padding utility classes | Apply consistent paddings | `fundamental-styles/dist/paddings.css` |

---

### 🎯 Specialized Components

| Component | Description | Primary Use Case | CSS Import |
|-----------|-------------|------------------|------------|
| **product-switch** | Product switcher popup | Switch between SAP products | `fundamental-styles/dist/product-switch.css` |
| **variant-management** | View variant selector | Save and switch between views | `fundamental-styles/dist/variant-management.css` |
| **user-menu** | User profile menu | User settings and profile access | `fundamental-styles/dist/user-menu.css` |
| **upload-collection** | File upload manager | Manage uploaded files | `fundamental-styles/dist/upload-collection.css` |
| **title-bar** | Window title bar | Desktop-style window header | `fundamental-styles/dist/title-bar.css` |

---

## Customer Experience (CX) Components

| Component | Description | Primary Use Case | CSS Import |
|-----------|-------------|------------------|------------|
| **cx-side-navigation** | CX navigation sidebar | Left/right product navigation | `@fundamental-styles/cx/dist/side-nav.css` |

---

## Common CSS Utilities

For rapid development, use `@fundamental-styles/common-css` which provides:

### Utility Categories

| Category | Classes | Use Case |
|----------|---------|----------|
| **Spacing** | `sap-margin-*`, `sap-padding-*` | Consistent spacing (responsive) |
| **Colors** | `sap-color-*`, `sap-bg-color-*` | SAP color palette |
| **Typography** | `sap-font-*`, `sap-heading-*`, `sap-text-*` | Text styling |
| **Flexbox** | `sap-flex-*`, `sap-flex-center` | Flex layouts |
| **Display** | `sap-display-*` | Display utilities |
| **Borders** | `sap-border-*`, `sap-border-radius-*` | Border styling |
| **Shadows** | `sap-shadow-*` | Elevation shadows |
| **Position** | `sap-position-*` | Positioning |
| **Overflow** | `sap-overflow-*` | Overflow behavior |

**Import**: `import '@fundamental-styles/common-css/dist/common-css.css'`

---

## Quick Reference: Component Selection

### When user needs to...

| User Need | Recommended Component(s) | Avoid |
|-----------|--------------------------|-------|
| **Trigger an action** | `button` | `link` (use for navigation) |
| **Navigate to another page** | `link` | `button` (use for actions) |
| **Enter short text** | `input` | `textarea` (use for long text) |
| **Enter long text** | `textarea` | `input` |
| **Select one from many** | `select`, `radio` | `checkbox` (for multiple) |
| **Select multiple items** | `checkbox` | `radio`, `select` |
| **Toggle on/off** | `switch` | `checkbox` |
| **Show tabular data** | `table` | `list` (for simple items) |
| **Show simple list** | `list` | `table` (for structured data) |
| **Display hierarchy** | `tree` | `list` |
| **Show critical message** | `alert`, `message-box` | `message-strip` |
| **Show inline feedback** | `message-strip` | `alert` |
| **Show temporary notification** | `message-toast` | `alert`, `dialog` |
| **Get user confirmation** | `message-box` | `dialog` |
| **Show detailed form/info** | `dialog` | `popover`, `message-box` |
| **Show supplementary info** | `popover` | `dialog` |
| **Navigate in app** | `side-nav`, `shellbar` | `tabs` |
| **Switch between views** | `tabs` | `side-nav` |
| **Show loading state** | `busy-indicator`, `skeleton` | Plain text |
| **Show progress** | `progress-indicator` | `busy-indicator` |

---

## Installation & Setup

### Full Library (All Components)

```bash
npm install fundamental-styles @sap-theming/theming-base-content
```

```javascript
// Import theme base variables
import '@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon/css_variables.css';

// Import theme customizations
import 'fundamental-styles/dist/theming/sap_horizon.css';

// Import all components
import 'fundamental-styles/dist/fundamental-styles.css';
```

### Modular Import (Tree-Shaking Friendly)

```javascript
// Import only components you need
import 'fundamental-styles/dist/button.css';
import 'fundamental-styles/dist/input.css';
import 'fundamental-styles/dist/table.css';
```

### With Common CSS Utilities

```bash
npm install @fundamental-styles/common-css
```

```javascript
import '@fundamental-styles/common-css/dist/common-css.css';
```

---

## Themes Available

| Theme Name | Theme ID | Description |
|------------|----------|-------------|
| **Horizon** | `sap_horizon` | Default modern theme |
| **Horizon Dark** | `sap_horizon_dark` | Dark mode variant |
| **Horizon HCB** | `sap_horizon_hcb` | High contrast black |
| **Horizon HCW** | `sap_horizon_hcw` | High contrast white |
| **Fiori 3** | `sap_fiori_3` | Legacy theme |
| **Fiori 3 Dark** | `sap_fiori_3_dark` | Legacy dark mode |

---

## Resources

- **Storybook Documentation**: https://sap.github.io/fundamental-styles/
- **GitHub Repository**: https://github.com/SAP/fundamental-styles
- **NPM Package**: https://www.npmjs.com/package/fundamental-styles
- **CDN**: https://unpkg.com/fundamental-styles@latest/dist/fundamental-styles.css

---

## Component Statistics

- **Total Components**: 120
- **Form Components**: 19
- **Navigation Components**: 12
- **Data Display**: 15
- **Layout Components**: 13
- **Feedback Components**: 14
- **AI Components**: 5
- **HTML Examples Available**: 654
- **Supported Themes**: 11

---

## For AI Agents: Best Practices

1. **Always import CSS** before using component HTML
2. **Follow BEM naming** strictly - don't improvise class names
3. **Include ARIA attributes** for accessibility
4. **Use semantic HTML** - proper elements for proper purposes
5. **Check component dependencies** - some components require others (e.g., menu button needs menu)
6. **Test with themes** - components work with all SAP themes
7. **Refer to examples** - check Storybook for HTML patterns
8. **Don't mix component styles** - each component is self-contained
9. **Use utility classes** from common-css for rapid prototyping
10. **Validate HTML structure** - follow the component's required structure

---

## Version Information

This index is for **Fundamental Library Styles v0.41.0**

Last updated: 2026-02-13

---

*This document is optimized for both AI agent consumption and human reference. For detailed usage examples and interactive documentation, visit the [Storybook documentation](https://sap.github.io/fundamental-styles/).*
