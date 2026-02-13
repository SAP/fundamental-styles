# Table Component

> **Quick Reference**: Structured data table for displaying and interacting with tabular data

## Overview

The Table component displays data in rows and columns with support for sorting, selection, and various visual styles. Use it for structured data that users need to compare, scan, or interact with.

## When to Use

✅ **Use Table for:**
- Structured tabular data
- Data comparison across rows
- Sortable columns
- Selectable rows
- Large datasets

❌ **Don't use Table for:**
- Simple lists → Use [List](../list) component
- Visual card layouts → Use [Grid List](../grid-list)
- Few items → Consider simpler alternatives

## Installation

```bash
npm install fundamental-styles
```

## Import

```javascript
import 'fundamental-styles/dist/table.css';
```

## Basic Usage

```html
<table class="fd-table">
  <thead class="fd-table__header">
    <tr class="fd-table__row">
      <th class="fd-table__cell">Name</th>
      <th class="fd-table__cell">Status</th>
      <th class="fd-table__cell">Price</th>
    </tr>
  </thead>
  <tbody class="fd-table__body">
    <tr class="fd-table__row">
      <td class="fd-table__cell">Product 1</td>
      <td class="fd-table__cell">Available</td>
      <td class="fd-table__cell">$100</td>
    </tr>
    <tr class="fd-table__row">
      <td class="fd-table__cell">Product 2</td>
      <td class="fd-table__cell">Out of Stock</td>
      <td class="fd-table__cell">$200</td>
    </tr>
  </tbody>
</table>
```

## Table Variants

### Compact Table
```html
<table class="fd-table fd-table--compact">
  <!-- More rows in less space -->
</table>
```

### Condensed Table
```html
<table class="fd-table fd-table--condensed">
  <!-- Most compact variant -->
</table>
```

### No Borders
```html
<!-- No horizontal borders -->
<table class="fd-table fd-table--no-horizontal-borders">
</table>

<!-- No vertical borders -->
<table class="fd-table fd-table--no-vertical-borders">
</table>
```

## Modifiers

| Modifier | Description |
|----------|-------------|
| `fd-table--compact` | Compact density |
| `fd-table--condensed` | Most compact density |
| `fd-table--no-horizontal-borders` | Remove horizontal borders |
| `fd-table--no-vertical-borders` | Remove vertical borders |
| `fd-table--responsive` | Responsive behavior |

## Selectable Rows

```html
<table class="fd-table">
  <thead class="fd-table__header">
    <tr class="fd-table__row">
      <th class="fd-table__cell fd-table__cell--checkbox">
        <input type="checkbox" class="fd-checkbox" aria-label="Select all" />
      </th>
      <th class="fd-table__cell">Product</th>
      <th class="fd-table__cell">Price</th>
    </tr>
  </thead>
  <tbody class="fd-table__body">
    <tr class="fd-table__row" aria-selected="false">
      <td class="fd-table__cell fd-table__cell--checkbox">
        <input type="checkbox" class="fd-checkbox" aria-label="Select row" />
      </td>
      <td class="fd-table__cell">Product 1</td>
      <td class="fd-table__cell">$100</td>
    </tr>
  </tbody>
</table>
```

## Sortable Columns

```html
<thead class="fd-table__header">
  <tr class="fd-table__row">
    <th class="fd-table__cell">
      <button class="fd-table__sort-button" aria-label="Sort by Name">
        Name
        <i class="fd-table__icon sap-icon--sort"></i>
      </button>
    </th>
    <th class="fd-table__cell">
      <button class="fd-table__sort-button" aria-label="Sort by Price, descending">
        Price
        <i class="fd-table__icon sap-icon--sort-descending"></i>
      </button>
    </th>
  </tr>
</thead>
```

## Accessibility

### Semantic HTML
Always use proper table elements:
- `<table>` with `class="fd-table"`
- `<thead>`, `<tbody>`, `<tfoot>` for structure
- `<th>` for headers
- `<td>` for data cells

### ARIA Attributes
```html
<table class="fd-table" role="table" aria-label="Products">
  <thead class="fd-table__header">
    <tr class="fd-table__row" role="row">
      <th class="fd-table__cell" role="columnheader">Name</th>
    </tr>
  </thead>
  <tbody class="fd-table__body">
    <tr class="fd-table__row" role="row" aria-selected="false">
      <td class="fd-table__cell" role="cell">Product</td>
    </tr>
  </tbody>
</table>
```

### Best Practices
- ✅ Provide table caption or aria-label
- ✅ Use `<th>` for all column headers
- ✅ Add scope attribute: `scope="col"` for headers
- ✅ Include aria-sort for sorted columns
- ✅ Mark selected rows with `aria-selected="true"`

## Cell Types

### Text Cell
```html
<td class="fd-table__cell">Plain text</td>
```

### Checkbox Cell
```html
<td class="fd-table__cell fd-table__cell--checkbox">
  <input type="checkbox" class="fd-checkbox" />
</td>
```

### Status Cell
```html
<td class="fd-table__cell">
  <span class="fd-object-status fd-object-status--positive">
    <i class="fd-object-status__icon sap-icon--sys-enter-2"></i>
    <span class="fd-object-status__text">Available</span>
  </span>
</td>
```

### Action Cell
```html
<td class="fd-table__cell fd-table__cell--fit-content">
  <button class="fd-button fd-button--transparent" aria-label="Edit">
    <i class="sap-icon--edit"></i>
  </button>
</td>
```

## Complete Example

```html
<table class="fd-table" aria-label="Product Inventory">
  <thead class="fd-table__header">
    <tr class="fd-table__row">
      <th class="fd-table__cell fd-table__cell--checkbox">
        <input type="checkbox" class="fd-checkbox" aria-label="Select all" />
      </th>
      <th class="fd-table__cell" scope="col">
        <button class="fd-table__sort-button">
          Product Name
          <i class="fd-table__icon sap-icon--sort"></i>
        </button>
      </th>
      <th class="fd-table__cell" scope="col">Status</th>
      <th class="fd-table__cell" scope="col">Price</th>
      <th class="fd-table__cell" scope="col">Actions</th>
    </tr>
  </thead>
  <tbody class="fd-table__body">
    <tr class="fd-table__row" aria-selected="false">
      <td class="fd-table__cell fd-table__cell--checkbox">
        <input type="checkbox" class="fd-checkbox" aria-label="Select Product 1" />
      </td>
      <td class="fd-table__cell">Product 1</td>
      <td class="fd-table__cell">
        <span class="fd-object-status fd-object-status--positive">
          Available
        </span>
      </td>
      <td class="fd-table__cell">$100.00</td>
      <td class="fd-table__cell fd-table__cell--fit-content">
        <button class="fd-button fd-button--transparent" aria-label="Edit Product 1">
          <i class="sap-icon--edit"></i>
        </button>
      </td>
    </tr>
  </tbody>
</table>
```

## Related Components

- [List](../list) - For simple non-tabular lists
- [Grid List](../grid-list) - For card-based layouts
- [Tree](../tree) - For hierarchical data
- [Pagination](../pagination) - For table pagination
- [Toolbar](../toolbar) - For table actions
- [Object Status](../object-status) - For status cells

## Resources

- **Live Examples**: [Storybook - Table](https://sap.github.io/fundamental-styles/?path=/docs/components-table)
- **Source Code**: [GitHub](https://github.com/SAP/fundamental-styles/tree/main/packages/styles/src/table.scss)
- **Component Catalog**: [component-catalog.json](../../docs/component-catalog.json)

## Design Guidelines

### Best Practices
- ✅ Keep tables simple and scannable
- ✅ Align numbers to the right
- ✅ Use compact/condensed for many rows
- ✅ Provide sorting for large datasets
- ✅ Consider pagination for >50 rows
- ❌ Don't use tables for layout
- ❌ Don't make tables too wide (horizontal scroll is poor UX)

### Column Guidelines
- **Recommended**: 3-8 columns for optimal readability
- **Maximum**: 12 columns before considering alternative layouts
- **Priority**: Show most important columns first

### Performance
- For 100+ rows, implement virtual scrolling
- For 1000+ rows, consider server-side pagination
- Keep row heights consistent for better performance

---

**Component ID**: `table`
**Category**: Data Display
**Package**: `fundamental-styles`
**Version**: 0.41.0+
