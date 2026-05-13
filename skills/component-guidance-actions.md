# Component Guidance - Actions & Controls

Interactive elements and controls for user actions.

## When to Use This Skill

Use this skill when:
- The user asks "Should I use [component] for [use case]?"
- The user needs to choose between similar components
- The user asks about component best practices
- The user wants to know when NOT to use a component

This skill covers: Button, Product Switch, Scrollbar, User Menu

## Button

**Description:**
Buttons enable users to trigger actions in applications, from submitting data to opening menus or toggling views. They are available in different types and visual styles to reflect purpose, priority, and intent. Button behavior and appearance can change depending on user interaction, layout context, or the type of task.

**When to use:**
- Trigger specific actions such as Create/Edit/Save, Approve/Reject, Accept/Decline, OK/Cancel
- Use toggle buttons in a toolbar to activate or deactivate an object or element
- Use toggle buttons to switch between different states
- Use segmented button in toolbar to select one option from a small group (e.g., Year/Month/Day, Small/Medium/Large)
- Use menu button if you need a menu that provides more than one option
- Use split button to offer a group of actions when one option is used more often than the others

**When to avoid:**
- ❌ Linking to a different page or object → Use link instead
- ❌ Displaying general navigation functions → Use Home or breadcrumbs instead
- ❌ Navigating within a multi-step process → Use wizard instead
- ❌ Letting users upload content → Use upload set control instead
- ❌ Letting users select from multiple related options → Use radio buttons or checkboxes instead
- ❌ Using toggle button to trigger an activity, flow, or process (such as Create, Edit, or Save) → Use button instead
- ❌ Using toggle button to display a large number of options → Use menu button instead
- ❌ Using split button to switch between different states → Use toggle button or switch instead
- ❌ Using split button for standalone actions with no additional options → Use button instead

**Best practices:**
- ✅ Use default button for neutral or informative (secondary) actions
- ✅ Use emphasized button (`fd-button--emphasized`) to indicate the primary action on the screen
- ✅ Use ghost button to trigger secondary actions or highlight the most important action in a content toolbar
- ✅ Use positive button (`fd-button--positive`) to trigger positive semantic actions (e.g., Accept) - always with text
- ✅ Use negative button (`fd-button--negative`) to trigger negative semantic actions (e.g., Reject) - always with text
- ✅ Use attention button (`fd-button--attention`) to trigger semantic actions that need attention - always with text
- ✅ Use transparent button (`fd-button--transparent`) for negative path actions in header/footer bars and secondary actions in toolbars
- ✅ Use toggle button to switch between two states or activate/deactivate an element in a toolbar
- ✅ Use segmented button for selecting one option from a small group
- ✅ Use menu button for groups of multiple actions
- ✅ Use split button when one option is used more often than others in a group of actions
- ⚠️ Only use one emphasized button per page/dialog (indicates primary action)
- ⚠️ Always include descriptive text or `aria-label` for icon-only buttons

---

---

## Product Switch

**Description:**
Product Switch provides role-based access to multiple products or lines of business (LoBs). Displays an icon button that triggers a Popover with products/LoBs. Single-level navigation only. Typically placed in Shellbar on far-right side.

**When to use:**
- Give users access to several different products or LoBs within same UI
- Switch between applications or product lines
- Provide role-based product navigation
- Display product portfolio in enterprise applications
- Enable cross-product navigation from Shellbar

**When to avoid:**
- ❌ Navigation within current product → Use product menu in Shellbar instead
- ❌ Multi-level navigation hierarchy → Use side navigation or menu
- ❌ Few products that fit in main navigation → Include in primary nav
- ❌ Single product application → Not needed

**Best practices:**
- ✅ Place in Shellbar on far-right side
- ✅ Use SAP Icon Fonts or Avatar component (size S, 48x48 px) for product icons
- ✅ Support PNG, JPG, and SVG formats for avatars
- ✅ Render all icons within 48x48 px bounding box for consistency
- ✅ Trigger Popover on click to display product list
- ✅ Keep navigation single-level only
- ✅ Provide clear product names and icons
- ✅ Show user's accessible products based on role/permissions
- ⚠️ Maintain visual consistency across all product icons
- ⚠️ Limit to products user has access to
- ❌ Don't use for intra-product navigation

---

---

## Scrollbar

**Description:**
Themeable Scrollbar follows Fiori 3 design guidelines. Preferred over browser's default scrollbar in components that support custom scrollbars. Works in Chrome, Safari, WebKit-based browsers; partial support in Firefox (no hover); IE shows default scrollbar.

**When to use:**
- In components with scrollable content following Fiori 3 guidelines
- Consistent theming across the application
- WebKit-based browsers (Chrome, Safari, Edge Chromium)
- Need themed scrollbar matching SAP design system

**When to avoid:**
- ❌ IE browser (not supported) → Default scrollbar shown automatically
- ❌ Content that fits without scrolling → No scrollbar needed
- ❌ Native scrolling behavior is required for specific UX

**Best practices:**
- ✅ Preferred over browser default in Fiori 3 components
- ✅ Automatically themed to match SAP design system
- ✅ Works best in Chrome, Safari, and WebKit browsers
- ✅ Gracefully degrades in Firefox (no hover effects)
- ✅ Falls back to default scrollbar in IE
- ✅ Consistent with other Fiori components
- ⚠️ Firefox has partial support - hover effects won't work
- ⚠️ IE falls back to default browser scrollbar
- ⚠️ Test scrollbar appearance across target browsers
- ❌ Don't rely on hover effects in Firefox

---

---

## User Menu

**Description:**
User Menu is integral part of Shell Bar, accessed by clicking avatar at far-right end. Provides user-specific options available across all screens. Displays current user info, account switching, user menu items, product-specific functionality. Can include sign in/out actions, settings, legal information.

**When to use:**
- Present user-specific information, settings, and actions
- Enable account switching
- Display product-related and legal information
- Facilitate Sign In or Sign Out actions
- Show current user information
- Access user preferences and settings
- Display user-specific menu items

**When to avoid:**
- ❌ Navigation elements → Use side navigation or main menu
- ❌ Home page customization items → Use page-level controls
- ❌ Inactive items → Hide instead of showing as disabled
- ❌ Content overload → Keep concise, limit to essential items
- ❌ Dynamic content changes within product → Keep menu stable

**Best practices:**
- ✅ Part of Shell Bar, accessed via avatar at far-right
- ✅ Available across all screens
- ✅ Display current user information
- ✅ Enable switching between accounts
- ✅ Include product-specific functionality when relevant
- ✅ Show Sign In/Sign Out actions
- ✅ Display user settings and preferences
- ✅ Include product-related and legal information
- ✅ Keep menu concise - essential items only
- ✅ Hide inactive items rather than disabling
- ⚠️ Avoid navigation - use for user-specific actions only
- ⚠️ Don't alter menu content dynamically within product
- ❌ Don't include home page customization
- ❌ Don't overload with too many links

---

---

