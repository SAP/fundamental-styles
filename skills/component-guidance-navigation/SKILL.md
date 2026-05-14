---
name: component-guidance-navigation
description: Fiori guidelines for navigation components (8 components: Breadcrumb, Menu, Link, Shellbar, Vertical Navigation, etc.)
user-invocable: false
metadata:
  tags: ["components","navigation","wayfinding","menu"]
  keywords: ["breadcrumb","icon-tab-bar","link","menu","pagination","shellbar","toolbar","vertical-navigation","tabs","nav"]
---

# Component Guidance - Navigation

Navigation and wayfinding components.

## When to Use This Skill

Use this skill when:

- The user asks "Should I use [component] for [use case]?"
- The user needs to choose between similar components
- The user asks about component best practices
- The user wants to know when NOT to use a component

This skill covers: Breadcrumb, Icon Tab Bar, Link, Menu, Pagination, Shellbar, Toolbar, Vertical Navigation

## Breadcrumb

**Description:**
A breadcrumb (or breadcrumb trail) is a type of secondary navigation that indicates the position of a page in its application hierarchy. It is typically used for drilldown scenarios where users navigate through related object pages, tables, and charts.

**When to use:**

- Show secondary navigation on the object page
- Show navigation in a table
- Show navigation in charts
- Support a user flow that involves drilling down through multiple related object pages (Parent → Child 1 → Child 2 → Child 3)
- Display the current location in a hierarchy
- Enable navigation back to parent pages

**When to avoid:**

- ❌ Your hierarchy contains only one level
- ❌ Linking to other floorplans, such as overview pages or list reports
- ❌ Navigating across applications to unrelated object pages
- ❌ Linking to standalone object pages, such as fact sheets → Use global navigation instead

**Best practices:**

- ✅ Use separator modifiers: `fd-breadcrumb--backslash` or `fd-breadcrumb--double-greater-than`
- ✅ Current item can be displayed as non-interactive (without separator) or as a regular link
- ✅ Use overflow breadcrumb with `fd-popover` for long paths with insufficient horizontal space
- ✅ Make each breadcrumb item clickable to navigate to that level
- ✅ Display breadcrumbs horizontally in a single line
- ✅ Use overflow dropdown menu when there are too many levels
- ⚠️ Implement responsive behavior to collapse into dropdown on small screens
- ⚠️ Keep breadcrumb hierarchy meaningful and accurate

---

---

## Icon Tab Bar

**Description:**
Navigation and filtering control containing tabs that display icons, text, or both, linking to different content areas or views. Two key use cases: navigate between content sections or filter lists (showing all items or those matching specific attributes). Users switch tabs by clicking.

**When to use:**

- Business objects need to show multiple facets simultaneously
- Allow users to browse through different facets
- Need prominent or visual filter on top of a list
- Clear-cut process steps need visualization
- Navigate between different content sections on screen
- Filter lists with option to display all or filtered items

**When to avoid:**

- ❌ Planning to use only one single tab
- ❌ Displaying tabs in responsive table or grid layout → Use table toolbar instead
- ❌ Displaying hierarchical navigation → Use tree or breadcrumb instead
- ❌ Navigating to unrelated pages → Use links or navigation components instead

**Best practices:**

- ✅ Use for multiple facets of business objects
- ✅ Use for prominent visual filtering
- ✅ Each tab can display icon, text, or both
- ✅ Users switch between tabs by clicking
- ✅ Good for clear-cut process steps visualization
- ⚠️ Requires at least two tabs (not for single tab)
- ⚠️ For hierarchical navigation, use tree or breadcrumb instead

---

---

## Link

**Description:**
Link (hyperlink) is interactive text that allows users to navigate to another page or trigger events. Can include icons and supports touch target sizing for accessibility (WCAG 2.2 minimum touch target requirements).

**When to use:**

- Navigate to another page
- Trigger an event
- Point to an object or person (navigate to details or display in quick view)
- Use meaningful link text indicating what happens when clicked (e.g., "Open Sales Order")
- Primary action inside interactive containers (table cells, list items) - use `fd-link--touch-target` modifier

**When to avoid:**

- ❌ Action could be triggered by Button instead → Use Button
- ❌ No target or reference to link to
- ❌ Inline text or dense text areas where increased line height disrupts flow → Don't use `fd-link--touch-target`

**Best practices:**

- ✅ Use meaningful link text (e.g., "Open Sales Order" not "Click Here")
- ✅ Indicate purpose clearly (avoid generic texts like "Link" or "Click Here")
- ✅ Use `fd-link--touch-target` for links inside actionable containers (table rows, list items)
- ✅ `fd-link--touch-target` sets line height to 1.5rem (24px) for touch target requirements
- ✅ Can include icons
- ⚠️ Don't use `fd-link--touch-target` in inline text or dense areas (causes misalignment)
- ⚠️ Only use when there's a clear target or reference to link to

---

---

## Menu

**Description:**
Menu is a listing structure with optional headers for creating menus. Commonly used as contents for dropdowns, contextual menus, etc., when paired with the popover component.

**When to use:**

- Offer more than one action
- Users need to stay in a certain context
- Small number of actions available
- Create dropdowns or contextual menus (pair with popover component)

**When to avoid:**

- ❌ Providing only one option → Use button instead
- ❌ Users would benefit from split button (easy-to-access default action with option for other actions) → Use split button instead

**Best practices:**

- ✅ Use for multiple actions (not single action)
- ✅ Pair with popover component for dropdowns and contextual menus
- ✅ Include optional headers to organize menu items
- ✅ Keep number of actions small and manageable
- ✅ Helps users stay in context while choosing actions
- ⚠️ Requires more than one action (use button for single action)
- ⚠️ Consider split button when there's a clear default action

---

---

## Pagination

**Description:**
Pagination allows users to separate content into discrete pages, making it easier to digest and navigate through large sets of items. Commonly used for tables and tiles. Supports two display modes: standard (>9 pages with input) and short (<9 pages showing all).

**When to use:**

- User needs to search through several related items (over 30 items)
- Content contains products users can choose from
- Allow users to bookmark specific pages
- Optimize content for search engines
- Navigate through large data sets or product listings
- Display tables or tile collections with many items

**When to avoid:**

- ❌ Small data sets (under 30 items) → Show all items or use scrolling instead
- ❌ Real-time data that updates frequently → Use infinite scroll or live updates
- ❌ Content that should be viewed sequentially → Use stepper or wizard instead

**Best practices:**

- ✅ Use `fd-pagination--short` class for under 9 pages (shows all page buttons)
- ✅ For over 9 pages: show 9 elements (pages, more symbols, current page) with input field
- ✅ Highlight current page with active state button
- ✅ Include first/last page navigation buttons
- ✅ Show total number of items and current range
- ✅ Use input field for direct page navigation on large data sets
- ✅ Enable keyboard navigation (arrow keys, Enter)
- ✅ Maintain page state in URL for bookmarking
- ⚠️ Threshold of 30 items is a guideline - adjust based on item density
- ⚠️ Consider infinite scroll for mobile experiences
- ❌ Don't use pagination if all items fit comfortably on one screen

---

---

## Shellbar

**Description:**
Shellbar serves as the topmost section across all SAP products, helping users orient within SAP product landscape. Always visible, provides context about current location with product/brand details. Contains two container groups: Product (branding and product elements) and Actions (search, product links, user settings).

**When to use:**

- Topmost navigation section across SAP products
- Display product and brand information
- Provide access to search functionality
- Show notifications, user profile, and settings
- Offer product switching and navigation
- Maintain consistent orientation across applications
- Display product context and user actions

**When to avoid:**

- ❌ Application-specific navigation → Use side navigation or tabs
- ❌ Page-level actions → Use Action Bar instead
- ❌ Non-SAP products → May not fit branding requirements
- ❌ Simple single-page apps → May be unnecessary overhead

**Best practices:**

- ✅ Always visible at top of all pages
- ✅ Use Product container for branding and product elements
- ✅ Use Actions container for search, links, and user settings
- ✅ Include product name and logo
- ✅ Provide search access (if applicable)
- ✅ Show notifications icon with count badge
- ✅ Include user menu/profile access
- ✅ Add Product Switch for multi-product access
- ✅ Keep consistent across all pages in application
- ✅ Provide context about current product/location
- ⚠️ Don't overload with too many actions
- ⚠️ Maintain SAP branding guidelines
- ❌ Don't use for page-specific navigation

---

---

## Toolbar

**Description:**
Toolbar enables users to change UI or trigger actions (change views, manipulate data/objects, navigate, perform actions). Usually paired with buttons, which are always right-aligned. Actions can be independent, object-specific, apply to item sets, or control UI content settings.

**When to use:**

- Change views or UI settings
- Manipulate data or objects
- Navigate to another page
- Perform generic actions
- Actions independent of current selection
- Actions specific to current object (one selected item)
- Actions applying to set of items (multiple selections)
- Control settings for UI content (e.g., all items in Table)

**When to avoid:**

- ❌ Page-level actions → Use Action Bar instead
- ❌ Form actions (Submit/Cancel) → Use form footer buttons
- ❌ Navigation-only actions → Use breadcrumb or side navigation
- ❌ Single isolated action → Use standalone button

**Best practices:**

- ✅ Buttons are always right-aligned
- ✅ Support independent actions (not related to specific item)
- ✅ Support object-specific actions (one item selected)
- ✅ Support bulk actions (multiple items selected)
- ✅ Control settings for UI content portions (e.g., Table settings)
- ✅ Group related actions together
- ✅ Use icon buttons for common actions with tooltips
- ✅ Use text buttons for primary/emphasized actions
- ✅ Show/hide actions based on context (selection state)
- ✅ Disable unavailable actions rather than hiding when appropriate
- ⚠️ Keep action count reasonable (don't overcrowd)
- ⚠️ Consider overflow menu for many actions
- ❌ Don't mix toolbar with form submission buttons

---

---

## Vertical Navigation

**Description:**
Vertical Navigation is signature BTP Tools design element for page switching. Four variants: Expanded (default, logical grouping, two hierarchy levels), Snapped (reduced width, frees horizontal space), Popup (navigation in popup, 3-7 items without hierarchy), Horizontal (infinite levels via cascading menus). Use nouns for titles.

**When to use:**

- Switch between different pages of tool
- Expanded for unknown users
- Persistence showing last state for known users
- Snapped variant for multi-column content relationships
- Popup variant for 3-7 navigation items without hierarchy
- Horizontal variant for more than two hierarchy levels
- Use nouns for navigation item titles

**When to avoid:**

- ❌ Switching between tools → Use mega menu instead
- ❌ Switching contexts or views → Use tabs or segmented buttons
- ❌ Using verbs for titles → Use nouns instead
- ❌ Navigation items for both navigation and groups → Use only one option
- ❌ More than three hierarchy levels in horizontal → Keep simpler
- ❌ Icons in secondary navigation and groups → Avoid
- ❌ Spacers to separate content → Use separators instead
- ❌ Dividers to separate groups → Use separators instead
- ❌ Bottom area for service info → Use settings and user menu

**Best practices:**

- ✅ Expanded: default with logical grouping, two hierarchy levels
- ✅ Snapped: reduced width freeing horizontal space
- ✅ Popup: 3-7 items without hierarchy
- ✅ Horizontal: infinite levels via cascading menus
- ✅ Use persistence for known users (show last state)
- ✅ Expanded for unknown users
- ✅ Snapped for multi-column content relationships
- ✅ Use nouns for navigation item titles
- ✅ Use separators to separate content and groups
- ⚠️ Maximum three levels in horizontal variant
- ⚠️ Avoid icons in secondary navigation
- ❌ Don't use for tool switching or context switching

---

---
