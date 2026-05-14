---
name: component-guidance-layout
description: 'Fiori guidelines for layout structures such as Card, Panel, Dynamic Page, Flexible Column Layout, etc'
user-invocable: false
metadata:
    tags: ['components', 'layout', 'containers', 'structure']
    keywords:
        [
            'action-bar',
            'bar',
            'card',
            'dynamic-page',
            'dynamic-side-content',
            'flexible-column-layout',
            'layout-panel',
            'panel',
            'settings',
            'tool-layout',
            'wizard',
            'page-layout',
            'sidebar'
        ]
---

# Component Guidance - Layout & Containers

Layout structures and container components.

## When to Use This Skill

Use this skill when:

- The user asks "Should I use [component] for [use case]?"
- The user needs to choose between similar components
- The user asks about component best practices
- The user wants to know when NOT to use a component

This skill covers: Action Bar, Bar, Card, Dynamic Page, Dynamic Side Content, Flexible Column Layout, Layout Panel, Panel, Settings, Tool Layout, Wizard

## Action Bar

**Description:**
The action bar displays at the top of the page, and includes the page's title, description, back button and action buttons. It provides page-level navigation and actions.

**When to use:**

- Display the page title and description at the top of the page
- Provide a back button for navigation to the previous page
- Show page-level action buttons that affect all items or the entire view
- Control settings of the UI that apply globally to the page
- Display actions at the top of the screen that are always visible

**When to avoid:**

- ❌ Finalizing actions at the bottom of the screen → Use `fd-bar` with footer mode instead
- ❌ Item-specific actions → Use `fd-toolbar` for item-level controls
- ❌ Application-level navigation → Use `fd-shellbar` instead

**Best practices:**

- ✅ Use the `fd-title` component with proper semantic heading levels (H1 styled as H3)
- ✅ Include a back button on the left side for navigation hierarchy
- ✅ Place page title and description prominently
- ✅ Position primary actions on the right side
- ✅ Use `fd-button--emphasized` for the primary page action
- ✅ Keep action buttons concise and clearly labeled
- ✅ Make the action bar sticky (fixed to top) for long scrolling pages
- ⚠️ Limit the number of action buttons (3-5 maximum)
- ⚠️ For accessibility, the page title must be an H1 (use `fd-title` with `--h3` for visual styling)
- ❌ Don't duplicate actions that appear elsewhere on the page

---

---

## Bar

**Description:**
The bar is a container that can hold text, titles, buttons, and input elements. It provides a structured layout for page headers, subheaders, footers, and floating footers.

**When to use:**

- Page headers, subheaders, footers, and floating footers used on a page, dialog, or popover
- Container for a small number of components
- Dialog headers and footers
- Page-level bars with title and actions
- Footer bars with action buttons

**When to avoid:**

- ❌ Container for a larger number of components with built-in overflow menu → Use `fd-toolbar` instead

**Best practices:**

- ✅ Use `fd-bar--header` for header bars
- ✅ Use `fd-bar--subheader` for subheaders
- ✅ Use `fd-bar--footer` for footer bars
- ✅ Use `fd-bar--floating-footer` for floating footers
- ✅ Use `fd-bar__left` and `fd-bar__right` to position content
- ✅ Keep the number of components manageable (use toolbar for more complex layouts)
- ✅ Use `fd-bar__element` to wrap each component within the bar
- ⚠️ For many actions or overflow menus, use toolbar instead

---

---

## Card

**Description:**
A card is a container that represents an app or page, providing easy access and content preview. It consists of optional building blocks: Header, Extended Header, Numeric Content, Content, Footer, and Media Block. Cards display various content types including charts, lists, tables, objects, and text.

**When to use:**

- Give users easy access to an app or page relevant for a business task
- Show a KPI or preview of the most important content
- Let users complete a simple action without navigating to the underlying app
- Display content types like charts, lists, tables, objects, or informative text
- Offer cards on SAP Fiori launchpad or embed in other controls
- Focus on a single object/topic or a group of objects

**When to avoid:**

- ❌ Cards for the same application should have distinct information from one another
- ❌ Don't make cards editable - card sizes vary depending on layout and are fixed

**Best practices:**

- ✅ Use optional building blocks: Header, Extended Header, Numeric Content, Content, Footer, Media Block
- ✅ Place Header either above or below Content (not separated with a line)
- ✅ Card width adapts to its parent container
- ✅ Each card should focus on either a single object/topic or a group of objects
- ✅ Ensure cards referencing the same application have distinct information
- ⚠️ Card sizes are not editable and vary depending on layout
- ⚠️ All building blocks (Header, Content, Footer, etc.) are optional

---

---

## Dynamic Page

**Description:**
Dynamic Page is foundation for all SAP pages. Generic layout supporting various use cases with variable header and page content. Header is collapsible to help users focus on content while keeping important header info and actions readily available. Uses foundation layout components (dynamic page header, footer toolbar).

**When to use:**

- Build freestyle application using SAP foundation layout components
- Need collapsible header for focus on page content
- Use dynamic page header and footer toolbar
- Standard SAP page layout required
- Variable content in header and page
- Multiple sections with collapsible header

**When to avoid:**

- ❌ Only small amount of information → Use Dialog instead
- ❌ Simple content that fits in dialog → Use Dialog
- ❌ If using Dynamic Page is unavoidable for small content → Use letterboxing to mitigate

**Best practices:**

- ✅ Foundation for all SAP pages
- ✅ Generic layout supporting various use cases
- ✅ Variable content in header and page
- ✅ Collapsible header for content focus
- ✅ Important header info and actions remain readily available
- ✅ Use dynamic page header component
- ✅ Use footer toolbar component
- ✅ Use letterboxing when displaying small amounts of information
- ⚠️ Avoid for very small amounts of information
- ⚠️ Consider Dialog for simple content
- ❌ Don't use when Dialog would suffice

---

---

## Dynamic Side Content

**Description:**
Dynamic Side Content is layout control displaying supplemental content in separate area to support understanding of main content. Two elements: side content section (`.fd-dynamic-side__side`) and main content section (`.fd-dynamic-side__main`). Screen width ratio varies based on available space - side displays left/right or bottom if space limited.

**When to use:**

- Display information enriching main content and helping users perform tasks
- Information only makes sense side-by-side with main container
- Content influences main content (filter for list, settings for chart, details for map)
- Supplemental content supports main content understanding
- Need adaptive layout based on screen size
- Side-by-side display of related information

**When to avoid:**

- ❌ Critical information that must always be visible → Include in main content
- ❌ Key functions needed even without side content → Put in main area
- ❌ Content not related to main area → Use separate section
- ❌ Small screens where side content is inaccessible → Ensure key info in main

**Best practices:**

- ✅ Side content enriches main content
- ✅ Use `.fd-dynamic-side__side` for side content section
- ✅ Use `.fd-dynamic-side__main` for main content section
- ✅ Screen width ratio varies based on available space
- ✅ Display side content left or right (default)
- ✅ Display at bottom if space limited
- ✅ Users can access all key functions and critical info without side content
- ✅ Use for filters, settings, details supporting main content
- ✅ Information only makes sense displayed side-by-side
- ⚠️ Key functions must remain accessible without side content
- ⚠️ Critical information should not depend on side content visibility
- ❌ Don't put essential info only in side content

---

---

## Flexible Column Layout

**Description:**
Flexible Column Layout is layout control displaying multiple floorplans on single page. Enables faster, more fluid navigation between floorplans than page-by-page. Offers layouts with up to 3 columns (1, 2, 3). Users can resize columns, switch layouts, view rightmost column in full screen. Responsive for desktop and mobile.

**When to use:**

- Create list-detail or list-detail-detail layout
- Enable drill-down or navigation between floorplans
- Faster navigation between multiple floorplans
- Display up to 3 columns of related content
- Allow users to resize columns and switch layouts
- Responsive design needed for desktop and mobile

**When to avoid:**

- ❌ Build workbench or tools layout → Not for main column with side columns
- ❌ Display additional content enriching main content → Use Dynamic Side Content instead
- ❌ Create dashboard with context-independent pages → Not appropriate
- ❌ Open multiple instances of same object type → Use multi-instance handling floorplan
- ❌ Split single object into multiple columns → Not designed for this
- ❌ Display only small amount of information → Overkill
- ❌ Embed SAP Fiori launchpad or overview page in columns → Not supported

**Best practices:**

- ✅ Generic layout container - does not provide content itself
- ✅ Supports 1, 2, or 3 columns
- ✅ Users can freely resize columns
- ✅ Users can switch between different layouts
- ✅ Rightmost column viewable in full screen mode
- ✅ Responsive behavior for desktop and mobile
- ✅ Optimized layout loaded based on screen width
- ✅ Best for list-detail or list-detail-detail patterns
- ✅ Enables drill-down navigation
- ⚠️ Not meant for main column with side columns
- ⚠️ Use Dynamic Side Content for enriching main content
- ❌ Don't use for workbench/tools layouts

---

---

## Layout Panel

**Description:**
Layout Panels encapsulate part of content, form elements, lists, collections on a page. Place patterns and interactions within panels to achieve focus and separation for tasks with information displayed inside panel. Organizes content into distinct sections.

**When to use:**

- Encapsulate part of content on page
- Group form elements together
- Display lists or collections in contained area
- Achieve focus and separation for tasks
- Organize information into distinct sections
- Create visual boundaries between content areas
- Group related content and interactions

**When to avoid:**

- ❌ Single piece of content that doesn't need grouping → Use directly on page
- ❌ Full-page layouts → Use Dynamic Page or other layout controls
- ❌ Very small content that looks cramped in panel → Use directly on page
- ❌ Unnecessary visual separation → Avoid panel overhead

**Best practices:**

- ✅ Encapsulate content, form elements, lists, collections
- ✅ Place patterns and interactions within panels
- ✅ Achieve focus and separation for tasks
- ✅ Display information inside panel with clear boundaries
- ✅ Group related content together
- ✅ Use for organizing page sections
- ✅ Provide visual separation between content areas
- ✅ Help users focus on specific task or information group
- ⚠️ Don't overuse - too many panels can fragment UI
- ⚠️ Ensure content benefits from panel encapsulation
- ❌ Don't use for single items that don't need grouping

---

---

## Panel

**Description:**
Panel is a container for grouping and displaying information. Panels are responsive and can be collapsed to save screen space. Available in two types: fixed (always visible) and expandable (collapsible).

**When to use:**

- Group or display related information together
- Give users option to hide information to save space
- Show additional information on demand (e.g., optional advanced search fields)
- Create collapsible sections for better content organization
- Display optional content that doesn't need to be visible at all times

**When to avoid:**

- ❌ In the content area of Dynamic Page → Use Dynamic Page's native sections instead
- ❌ For critical information that must always be visible → Use fixed container instead
- ❌ Single piece of content that doesn't need grouping → Use plain container

**Best practices:**

- ✅ Use expandable type for optional or supplementary content
- ✅ Use fixed type for important information that should always be visible
- ✅ Provide clear panel titles that describe the grouped content
- ✅ Start with collapsed state for non-essential information
- ✅ Start with expanded state for frequently accessed content
- ✅ Keep panel content focused and related
- ✅ Use consistent panel styling throughout the application
- ⚠️ Avoid nesting too many panels (2 levels maximum)
- ⚠️ Don't hide critical information in collapsed panels
- ❌ Don't use panels in Dynamic Page content areas

---

---

## Settings

**Description:**
Settings Dialog allows users to personalize their Fiori experience by adjusting various settings. Standard dialog format with split layout: list of option groups on left, corresponding settings details on right. Built using Toolbar, IconTabBar, Bar, and form components.

**When to use:**

- Allow users to personalize application experience
- Adjust various application settings
- Organize settings into logical groups
- Provide comprehensive settings management interface
- Split settings into categories for better organization

**When to avoid:**

- ❌ Single setting or preference → Use inline control or simple dialog
- ❌ Quick toggles needed → Use menu with switches
- ❌ Settings that affect single page only → Use page-level controls
- ❌ Simple on/off preferences → Use switch or checkbox in context

**Best practices:**

- ✅ Use split layout: list area (left) and detail area (right)
- ✅ List area contains groups of settings
- ✅ Detail area shows settings for selected group
- ✅ Detail header varies based on selection (built with Toolbar, IconTabBar, Bar)
- ✅ Use forms in content area to lay out controls
- ✅ Make content area scrollable if needed
- ✅ Use standard Page Footer layout for actions
- ✅ Group related settings together logically
- ✅ Provide clear labels and descriptions for settings
- ✅ Save/Cancel actions in footer
- ⚠️ Organize settings into meaningful groups
- ⚠️ Consider providing search for many settings
- ❌ Don't overwhelm with too many ungrouped settings

---

---

## Tool Layout

**Description:**
Tool Layout consists of three main areas: Tool Header (always present, top-aligned with global actions and navigation controls), Navigation (side navigation in expanded/snapped variants), and Content (empty container for any content). Complete layout structure for tool-based applications.

**When to use:**

- Build tool-based applications
- Need top-aligned header with global actions
- Need side navigation control
- Structure with header, navigation, and content areas
- Applications requiring persistent navigation
- Tool or workspace layouts

**When to avoid:**

- ❌ Simple page layouts → Use Dynamic Page
- ❌ Content-focused pages without tools → Use other layout controls
- ❌ No navigation needed → Simpler layout appropriate
- ❌ Dashboard layouts → Use appropriate dashboard layout

**Best practices:**

- ✅ Tool Header always present at top
- ✅ Header contains global actions and controls navigation
- ✅ Navigation is side navigation (expanded or snapped variants)
- ✅ Content is empty container that can hold any content
- ✅ Three main areas: header, navigation, content
- ✅ Top-aligned UI element for header
- ✅ Side navigation in all variants
- ✅ Flexible content area
- ⚠️ Tool Header is required - always present
- ⚠️ Ensure proper structure with all three areas
- ❌ Don't use for simple content pages

---

---

## Wizard

**Description:**
Wizard guides user through long or unfamiliar task by dividing into sections, revealing information in digestible way. Consists of walkthrough screen (input required info) and summary page (read-only review before submission). Two types: standard (linear, known steps) and branching (non-linear, variable steps). Supports 3-8 steps, optional steps allowed.

**When to use:**

- User has to accomplish long or unfamiliar task
- Task consists of minimum 3 and maximum 8 steps
- Linear progression through known steps (standard type)
- Non-linear progression with variable steps (branching type)
- Multi-step data entry or configuration
- Complex process needs guidance
- Final review before submission needed

**When to avoid:**

- ❌ Task has only 2 steps → Use simple two-page flow or dialog
- ❌ Task has more than 8 steps → Break into multiple smaller wizards
- ❌ Task format familiar to user → Use standard form
- ❌ Simple single-page form → No wizard needed

**Best practices:**

- ✅ Standard type: total steps known, linear progression, fixed step count
- ✅ Branching type: steps not known, variable count, non-linear progression
- ✅ 3-8 steps (minimum 3, maximum 8)
- ✅ Label optional steps as "Optional"
- ✅ Allow skipping optional steps
- ✅ Include walkthrough screen for input
- ✅ Include summary page for read-only review
- ✅ Use in full-screen or flexible column layout
- ✅ Navigate back to originating page after completion/cancellation
- ✅ No navigation to next page from wizard
- ✅ Show progress indicator (current step / total steps)
- ✅ Provide Next/Back navigation buttons
- ⚠️ For 2 steps, use simpler approach
- ⚠️ For >8 steps, split into multiple wizards
- ❌ Don't use for familiar tasks

---

---
