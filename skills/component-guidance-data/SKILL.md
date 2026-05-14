---
name: component-guidance-data
description: Fiori guidelines for data display components (23 components: Table, List, Tree, Avatar, Calendar, Icons, etc.)
user-invocable: false
metadata:
  tags: ["components","data","display","visualization"]
  keywords: ["table","list","tree","avatar","avatar-group","calendar","carousel","icon","title","object-identifier","object-number","object-status","object-marker","object-list","feed-list","grid-list","micro-process-flow","generic-tile","generic-tag","illustrated-message","info-label","variant-management"]
  component_count: 23
---

# Component Guidance - Data Display

Components for displaying collections and structured data.

## When to Use This Skill

Use this skill when:

- The user asks "Should I use [component] for [use case]?"
- The user needs to choose between similar components
- The user asks about component best practices
- The user wants to know when NOT to use a component

This skill covers: Avatar, Avatar Group, Calendar, Carousel, Feed Input, Feed List Item, Generic Tag, Generic Tile, Grid List, Icon, Illustrated Message, Info Label, List, Micro Process Flow, Object Identifier, Object List, Object Marker, Object Number, Object Status, Table, Title, Tree, Variant Management

## Avatar

**Description:**
Avatars are visual representations of users, products, or business entities, helping people quickly identify them within an application. Users can be shown with their own photos or initials, while products can be depicted with representative images or logos.

**When to use:**

- Display user photos, initials, or placeholders for personal identification
- Show standardized images for business content such as products, parts, logos, or campaign visuals
- Represent concepts or entities with icons when images aren't available
- Present images with transparent backgrounds when needed for clarity or design fit
- Provide placeholder images when no other source image is available
- Apply avatars consistently in places like lists, cards, and headers to create familiarity and a uniform visual pattern across the interface

**When to avoid:**

- ❌ Display pictures in a sequence, such as a slideshow or carousel → Use `fd-carousel` instead
- ❌ Display an interactive icon → Use `fd-button` with an icon inside instead

**Best practices:**

- ✅ Use a circle shape (`fd-avatar--circle`) for people
- ✅ Use a square shape for product or business-related images (default shape)
- ✅ Use the predefined sizes: `fd-avatar--xs`, `fd-avatar--s`, `fd-avatar--m`, `fd-avatar--l`, `fd-avatar--xl`
- ✅ For product icons, replace the default icon with a more suitable icon for your use case
- ✅ Provide a clear alternative text (`alt` attribute) for the avatar image
- ✅ For interactive avatars with badges, provide both a tooltip and alternative text
- ⚠️ Avoid unnecessarily large image files (optimize images)
- ⚠️ Avoid badges on avatars smaller than size S
- ❌ Don't attach click actions directly to icons in the avatar (wrap in a button instead)

---

---

## Avatar Group

**Description:**
The avatar group is a visual element that displays several avatars together, indicating that more than one person or business entity is associated with an item. It's typically used to represent a group of people who belong together – for example, members of a project team or department.

**When to use:**

- Display a group of at least two people
- Display several people who share something in common, such as a project or a team
- Show team members, collaborators, or participants
- Indicate multiple people associated with an item or task

**When to avoid:**

- ❌ Display a gallery of simple images → Use carousel instead
- ❌ Display a single avatar → Use `fd-avatar` instead
- ❌ Show visual content other than avatars
- ❌ Show unrelated media or content types

**Best practices:**

- ✅ Always display avatar groups horizontally
- ✅ Use the group type when it's more important to show the avatar group as a whole
- ✅ Use the individual type when users need to focus on each person in the avatar group
- ✅ Use the avatar group to display at least two avatars
- ✅ Use size S by default for most layouts
- ⚠️ Use sizes M or L only when avatars are key to the page
- ⚠️ Display at minimum two avatars (for single avatar, use `fd-avatar`)

---

---

## Calendar

**Description:**
The calendar lets users select single dates, multiple days, entire weeks, or date ranges. It displays all time-related data (year, month, week, day, date) at a glance and is typically used within a date picker pattern combined with input group and popover.

**When to use:**

- Select a single date, multiple days, entire weeks, or a date range
- Display multiple months at once
- Calendar needs to be always visible and prominent
- Users need to see year, month, week, weekday and date at a glance (e.g., selecting based on day of week)
- Support locale-specific date formats by allowing visual date selection
- Highlight special days or hide/disable specific days

**When to avoid:**

- ❌ Power users entering data fast → Use date picker instead
- ❌ Keyboard is primary input device → Use date picker instead
- ❌ Limited screen space where permanent calendar display takes too much room → Use date picker instead
- ❌ Primary goal is selecting a date range → Use date range selection instead
- ❌ Displaying range of weekdays in a single row → Use calendar date interval instead
- ❌ Comparing calendars from different people → Use planning calendar instead
- ❌ Selecting combined date and time values → Use date/time picker instead

**Best practices:**

- ✅ Use within date picker pattern (calendar + input group + popover) rather than standalone
- ✅ Enable visual date selection to bypass locale-specific format interpretation
- ✅ Highlight special days when relevant to user's task
- ✅ Allow navigation between months and years
- ⚠️ Calendar is rarely used as a standalone component - usually part of date picker pattern
- ⚠️ Consider date picker for keyboard-heavy or data-entry workflows

---

---

## Carousel

**Description:**
The carousel allows users to browse through a set of items, displaying one or several items at a time with navigation to next or previous items. It's best suited for browsing images and includes optional paging indicators. The content area automatically adjusts to available screen space.

**When to use:**

- Display items that need strong visual representation
- Show items sequentially or side by side
- Browse through a set of images where viewing one by one helps distinguish between items
- Comparison scenarios where displaying several items side by side is useful
- Any sap.m control can be contained (not limited to images)

**When to avoid:**

- ❌ Displaying uniform items that don't benefit from individual presentation
- ❌ Items that don't require sequential browsing or visual distinction

**Best practices:**

- ✅ Use paging indicator to show user's current position in the set
- ✅ Content area automatically adjusts to available screen space
- ✅ Navigation buttons float on left/right or appear in page indicator area (non-touch devices)
- ✅ Support swipe gestures on touchable devices (buttons hidden automatically)
- ✅ Add visually hidden div with `role="region"` and `aria-live="polite"` as sibling to `.fd-carousel`
- ✅ Update aria-live region dynamically via JavaScript for content changes
- ✅ Display Message Page with `sap-icon--document` for empty state (no pages loaded)
- ⚠️ Ensure accessibility by announcing content changes to screen readers
- ⚠️ Navigation method adapts automatically: buttons for non-touch, swipe for touch devices

---

---

## Feed Input

**Description:**
The feed input is designed for users to type notes or comments and post them to a corresponding feed. It handles small amounts of unformatted text across multiple instances like notes or feed entries.

**When to use:**

- User needs to input small amounts of text without formatting
- Multiple instances are expected, such as notes or feed entries
- Adding comments or posts to a feed
- Quick text input for social or collaborative features

**When to avoid:**

- ❌ User needs to format text (rich text editor) → Use rich text editor instead
- ❌ Only a single text box instance is needed → Use textarea (multiple lines) or text control (single line) instead

**Best practices:**

- ✅ Use for unformatted text input only
- ✅ Design for multiple instances (feed scenarios)
- ✅ Keep interface simple and focused on quick text entry
- ⚠️ Consider textarea for single-instance multi-line text needs
- ⚠️ Consider text control for single-line text input

---

---

## Feed List Item

**Description:**
The feed list displays feed list items that each consist of a username, written entry, optional image, and a byline (timestamp or attribute as free text). It's designed for displaying homogenous feed entries.

**When to use:**

- Multiple instances are expected, such as notes or feed entries
- Items in the feed list are homogenous
- User needs to input small amounts of text without formatting
- Display existing feed entries with username, content, and metadata

**When to avoid:**

- ❌ User needs to format text (rich text editor) → Use rich text editor instead
- ❌ Only a single text box instance is needed → Use Text Area instead
- ❌ Displaying empty fields for user to input feed entries → Use Feed Input instead

**Best practices:**

- ✅ Each item includes username, written entry, and optional image
- ✅ Include byline with timestamp or attribute as free text
- ✅ Keep items homogenous for consistent feed appearance
- ✅ Use Feed Input component for creating new feed entries
- ⚠️ Feed list is for displaying existing entries, not for input
- ⚠️ Pair with Feed Input for complete feed functionality

---

---

## Generic Tag

**Description:**
Generic tag displays complementary information like key performance indicators (KPIs) or status details, providing additional context without users leaving the current page. Typically appears in dynamic page headers or object page header areas following the title.

**When to use:**

- Display complementary information for an object (e.g., KPI)
- Show status details or additional context
- Place in dynamic page header or object page header area following the title
- Provide non-intrusive contextual information

**When to avoid:**

- ❌ Decorative purposes
- ❌ Navigation

**Best practices:**

- ✅ Use for complementary information like KPIs and status
- ✅ Place in header area following the title
- ✅ Provide additional context without requiring page navigation
- ✅ Use in dynamic page header or object page header area
- ⚠️ Should be informational, not interactive or decorative
- ⚠️ Not for navigation purposes

---

---

## Generic Tile

**Description:**
Generic tile is a container representing an app on the SAP Fiori launchpad home page. Displays various content types including icons, information text, titles, KPIs, counters, and charts. Tiles automatically move to the next row when horizontal space is insufficient.

**When to use:**

- Display apps on SAP Fiori launchpad home page
- Show content types: KPIs, charts, icons, information text, titles, counters
- Use icons on basic launch tiles or monitoring tiles (when not showing KPI or chart)
- Display different content types based on data from the app

**When to avoid:**

- ❌ Using tiles anywhere other than launchpad home page
- ❌ Showing content types not described in guidelines (videos, animations, gifs)
- ❌ Using status area for error messages
- ❌ Using tile subtitle for explanations (only for differentiators like specific data views)
- ❌ Using icons on KPI tiles (only on basic launch or monitoring tiles)
- ❌ Showing icons next to counter expecting 5+ digits
- ❌ Developing custom icons (use standard icons only)

**Best practices:**

- ✅ Only use on launchpad home page
- ✅ Show icons to help distinguish tiles when not showing KPI or chart
- ✅ Use short tile names
- ✅ Use modifiers: `fd-numeric-content__scale--text`, `fd-tile--feed`, `fd-tile--double`, `fd-tile--container—list`
- ✅ Use deviation arrows: `sap-icon--down` or `sap-icon--up` in scale factor area
- ✅ Tiles automatically wrap to next row when space is insufficient
- ⚠️ Icons only on basic launch or monitoring tiles, not KPI tiles
- ⚠️ Avoid icons next to counters with 5+ digits
- ⚠️ Use subtitle only for differentiators, not explanations

---

---

## Grid List

**Description:**
Grid list displays items in a grid format (not rows), ideal for visual content like images, charts, and object cards that benefit from more height. Usually used as an alternative view for lists or tables, focusing on complete items rather than cells.

**When to use:**

- Visual content that benefits from rectangular card format (images, charts, object cards)
- Focus on complete items rather than individual cells
- Display homogeneous set of basic data
- Sort, group, or filter simple data sets
- Alternative view for tables or lists when content benefits from grid format

**When to avoid:**

- ❌ Content not appropriate for card format (e.g., wall of text) → Use table instead
- ❌ Selecting one item from very small number without viewing details → Use select or combo box instead
- ❌ Data structured hierarchically → Use tree instead
- ❌ Overview of large amount of data → Use chart instead
- ❌ Layout purposes only → Use layout container like CSS Grid instead
- ❌ Managing complex datasets needing extensive sorting, grouping, filtering, or editing → Use table instead

**Best practices:**

- ✅ Best for visual content (images, charts, object cards)
- ✅ Items displayed in grid, not rows
- ✅ Focus on complete items rather than cells
- ✅ Use for homogeneous basic data sets
- ✅ Good alternative view format for lists or tables
- ⚠️ Content should profit from rectangular card-like format
- ⚠️ Not suitable for hierarchical data or complex dataset management

---

---

## Icon

**Description:**
Icons provide visual clarity, save screen space, and guide users during navigation. Used as visual elements within other components or independently (when readable by screen readers or have tooltips). Non-interactive by nature for illustrative purposes only.

**When to use:**

- Display icon for illustrative purposes without interaction states (non-interactive icon/pictogram)
- Pair icon with another communication method (text or tooltip)
- Use as visual elements within other components
- Save screen space while maintaining clarity
- Guide users during navigation

**When to avoid:**

- ❌ Icon needs to be selected or have interaction states → Use transparent button style instead

**Best practices:**

- ✅ Use for illustrative purposes only (non-interactive)
- ✅ Always pair with text or tooltip for accessibility
- ✅ Ensure screen reader compatibility
- ✅ For interactive icons, use transparent button style (see Button component)
- ⚠️ Icons alone don't provide sufficient accessibility without text/tooltip
- ⚠️ For selectable icons, use Button component with transparent style

---

---

## Illustrated Message

**Description:**
Illustrated messages engage users and add personality using SVG illustrations (from SAP Moments library), paired with heading, description, and optional call-to-action button. Available in sizes: Large (default), Medium, Small, Extra Small, and Base (no illustration). Supports responsive container for Large size.

**When to use:**

- Clarify situations with engaging visuals (empty states, errors, success)
- Add personality to user experience
- Explain reason for empty state
- Provide details and next steps
- Guide users with optional call-to-action button
- Use SVG illustrations from SAP Moments library

**When to avoid:**

- ❌ When simple text message suffices without visual engagement
- ❌ Dense data displays where illustrations distract

**Best practices:**

- ✅ Always pair illustration with message (heading + description)
- ✅ Heading explains reason for state, preferably single line
- ✅ Description adds details and next steps (3 lines or less)
- ✅ Include CTA button when there's a clear next step (optional but recommended)
- ✅ Use sizes: Large (`.fd-illustrated-message`), Medium (`--medium`), Small (`--small`), Extra Small (`--xsmall`), Base (`--base`, no illustration)
- ✅ Use `.fd-illustrated-message-responsive-container` for Large size responsiveness (inline content query)
- ✅ Legacy modifiers still supported: `--scene` (Large), `--dialog` (Medium), `--spot` (Small), `--dot` (Extra Small)
- ⚠️ Illustration must come from SAP Moments library (use SVG)
- ⚠️ Base type has no illustration (text only)

---

---

## Info Label

**Description:**
Info Label is a small non-interactive numeric or text-based label (BTP component). Primary use is adding user-defined characteristics to objects. Supports 10 accent colors and display mode.

**When to use:**

- Add user-defined characteristic to an object
- Display small non-interactive numeric or text-based labels
- Categorize or tag objects with visual color coding
- Display mode for larger presentation (use `fd-info-label--display`)

**When to avoid:**

- ❌ Interactive labels or tags → Use different component
- ❌ Large amounts of text → Use other text components

**Best practices:**

- ✅ Use accent color modifiers: `fd-info-label--accent-color-1` through `--accent-color-10`
- ✅ Accent colors: 1-Mango, 2-Red, 3-Raspberry, 4-Pink, 5-Indigo, 6-Blue, 7-Teal (Default), 8-Green, 9-Cyan, 10-Grey
- ✅ Use `fd-info-label--display` modifier for display mode
- ✅ Default accent is Teal (accent-color-7)
- ✅ Non-interactive by design
- ⚠️ BTP-specific component
- ⚠️ Use for small labels only (numeric or short text)

---

---

## List

**Description:**
Lists display homogeneous basic data, distinguished from tables (which handle complex data). Used in master lists for master-detail scenarios with flexible column layout, popovers, and dialogs. Supports byline variant for additional content and semantic status.

**When to use:**

- Display homogeneous set of basic data
- Sort, group, or filter simple datasets
- Display single-level hierarchy (simpler than tree table)
- Include additional text in list items (byline list with `fd-list--byline`)
- Present semantic status in list items (byline list)
- Display accounts in user menu (subline with third line)

**When to avoid:**

- ❌ Managing complex datasets needing extensive sorting, grouping, filtering, or editing → Use table instead
- ❌ Working with complex hierarchies → Use tree instead
- ❌ Including objects in list items (when using byline list) → Use Object List instead

**Best practices:**

- ✅ Use for homogeneous basic data (not complex data)
- ✅ Use in master-detail scenarios with flexible column layout
- ✅ Use in popovers or dialogs
- ✅ Add `fd-list--byline` modifier for byline list (additional text/semantic status)
- ✅ Byline list extends standard list items with additional content
- ✅ Support single-level hierarchies (simpler use case)
- ⚠️ Lists for basic data, tables for complex data
- ⚠️ Use tree for complex hierarchies, not list

---

---

## Micro Process Flow

**Description:**
Micro Process Flow visualizes the state of individual items in a linear workflow. Can be embedded in lists or tables. Responsive, adapts to parent container size. Supports simple wrap or overflow with navigation arrows for long processes.

**When to use:**

- Show state of each step in linear, multi-step process
- Display progress of multiple items in list or table
- Default layout: icons with circular background, semantic colors, click events (SAP icon font)
- Custom layout: replace with other controls (status indicator, button, label, link, avatar)
- Dependent steps (default): connector lines between steps when completion is precondition for next step
- Independent steps: no connectors when steps can be processed in any order

**When to avoid:**

- ❌ Single-step process → Use progress indicator or object status instead
- ❌ Complex non-linear workflow → Use process flow instead

**Best practices:**

- ✅ Responsive: adapts to parent container size
- ✅ Simple wrap: steps wrap to new line if don't fit width
- ✅ Overflow mode: navigation arrows with hidden step count, scroll horizontally
- ✅ Default layout: icons with circular background, semantic colors, SAP icon font
- ✅ Custom layout: supports status indicator, button, label, link, avatar
- ✅ Dependent steps: use connector lines, indicate transition state with icons
- ✅ Independent steps: no connectors for non-sequential processing
- ⚠️ Use dependent steps when completion is precondition for next step
- ⚠️ Use independent steps when any-order processing is allowed

---

---

## Object Identifier

**Description:**
Object Identifier is short text representing the key identifier of an object, displayed in containers, tables, panels, popovers, and more. Text wraps if insufficient horizontal space. Comprises title text, optional descriptive text, and optional active state (link-like) that can trigger events.

**When to use:**

- Indicate key identifier on an object
- Display text instead of ID for easy readability
- Distinguish objects by IDs (display as descriptive text below title)
- Need interactive link-like behavior (active state) to trigger events

**When to avoid:**

- ❌ Displaying system messages
- ❌ Decorative purposes only

**Best practices:**

- ✅ Display text instead of ID for easy user readability
- ✅ If IDs necessary to distinguish objects, show as descriptive text below title text
- ✅ Comprises title text and optional descriptive text
- ✅ Optional active state resembles link and can trigger events
- ✅ Text wraps when insufficient horizontal space
- ✅ Can be displayed in various container types (tables, panels, popovers)
- ⚠️ Prioritize readable text over raw IDs
- ⚠️ Not for system messages or decorative purposes

---

---

## Object List

**Description:**
Object list consists of object list items providing quick object overviews. Each item shows essential information for prioritizing objects. Can display title, avatar, object display components (Identifier, Number, Attribute, Marker, Status), introductory text, icon, and status line with indicator icons.

**When to use:**

- Display brief details to user
- Quick overview of objects
- Show essential information for object identification and prioritization
- Display object display components: Object Identifier, Object Number, Object Attribute, Object Marker, Object Status
- Show introductory text (e.g., "Forwarded by...", "On Behalf of...")
- Display status line with indicator icons (locked, favorites, flagged for follow-up)

**When to avoid:**

- ❌ Displaying detailed information to user
- ❌ Triggering more than one event (each item should contain one link)

**Best practices:**

- ✅ Show only essential information for prioritization
- ✅ Avoid long descriptive texts (limited space, will truncate)
- ✅ Each item provides quick overview of object
- ✅ Use semantic status modifiers: `fd-object-number--positive/negative/critical/informative`, `fd-object-status--positive/negative/critical/informative`
- ✅ Can display: title, avatar, object components, introductory text, icon, status line
- ✅ Each object list item should contain one link
- ⚠️ Text space is limited - avoid long descriptions
- ⚠️ Only one event per item

---

---

## Object Marker

**Description:**
Object Marker indicates technical status of an object (draft, unsaved changes, locked, favorite, flagged). Displays technical state, not business lifecycle status. Can be represented as icon only, icon with text, or text only, depending on screen size.

**When to use:**

- Indicate technical status of object
- Display technical states: draft, unsaved changes, locked, favorite, flagged
- Adapt presentation to screen size (icon only, icon + text, text only)

**When to avoid:**

- ❌ Displaying status of object in business lifecycle → Use different component

**Best practices:**

- ✅ Use for technical status only (not business lifecycle)
- ✅ Represents states: draft, unsaved changes, locked, favorite, flagged
- ✅ Adaptive representation: icon only, icon with text, or text only
- ✅ Adjust display based on screen size
- ⚠️ Not for business lifecycle status
- ⚠️ Specifically for technical state indicators

---

---

## Object Number

**Description:**
Object Number represents a numeric attribute of an object and its unit. Displayed with semantics to provide insight about object's value. Supports semantic statuses via modifier classes (neutral, positive, negative, critical, informative).

**When to use:**

- Display key number of an object
- Display one or more numeric attributes of an object (e.g., for comparison)
- Emphasize (bold) for key numeric attributes on page or line item status in table

**When to avoid:**

- ❌ Displaying system messages
- ❌ Decorative purposes only

**Best practices:**

- ✅ Properly describe and make semantically understandable (accessibility)
- ✅ If color describes value as negative, accompany with icon, label, unit, or attribute
- ✅ Color should not be only way value state is conveyed
- ✅ Use semantic status modifiers: `fd-object-number--positive`, `--negative`, `--critical`, `--informative` (neutral is default)
- ✅ Emphasize (bold) for key numeric attributes or table line item status
- ✅ Display with unit for clarity
- ⚠️ Ensure accessibility - don't rely on color alone for value state
- ⚠️ Include icon, label, unit, or attribute with color indicators

---

---

## Object Status

**Description:**
Object Status is a short text that represents the semantic status of an object. It has a semantic color and an optional icon. Typically used in dynamic page headers and as status attributes of line items in tables.

**When to use:**

- Display semantic status of an object with text and color
- Show status attribute in table line items
- Indicate object state in dynamic page headers
- Provide quick visual indication of object status with semantic meaning

**When to avoid:**

- ❌ Displaying detailed system messages → Use `fd-message-strip` instead
- ❌ Long status descriptions → Keep text short and concise
- ❌ Non-semantic decorative text → Use plain text instead

**Best practices:**

- ✅ Use semantic color modifiers: `fd-object-status--positive`, `--negative`, `--critical`, `--informative` (neutral is default)
- ✅ Add optional icon to reinforce status meaning
- ✅ Keep status text short and concise
- ✅ Color should not be only way status is conveyed (accessibility)
- ✅ Include icon or clear text label alongside color
- ✅ Use in tables for line item status indication
- ✅ Display in dynamic page headers for object-level status
- ⚠️ Ensure accessibility - don't rely on color alone for status meaning
- ⚠️ Accompany semantic colors with icons or descriptive text
- ❌ Don't use for lengthy descriptions or messages

---

---

## Table

**Description:**
Table contains set of line items with rows (each showing one line item) and columns. Items can contain data or interactive elements. Two groups: fully responsive tables and desktop-centric tables. Responsive table offers flexibility, grid table for large datasets (>1,000 rows) and analytical use cases.

**When to use:**

- Display large amounts of data in tabular form
- Flexible, visually appealing table content (responsive table)
- Focus on working with line items, not individual cells
- Select one or more items needing details to choose correctly
- Line items independent, no cross-column operations needed
- Single implementation for all devices
- Display >1,000 rows simultaneously (grid table)
- Cell-level and spatial relationships important (grid table)
- Comparing items is major use case (grid table)
- Need analytical table without analytical binding (grid table)

**When to avoid:**

- ❌ Simple hierarchical dataset → Use Tree instead
- ❌ Hierarchical master list for master-detail with Flexible Column Layout → Use Tree
- ❌ Tree table would be too complex → Use Tree
- ❌ Selecting hierarchical items with few details → Use Tree
- ❌ Very few items (under 5) → Consider List or Card layout

**Best practices:**

- ✅ Use responsive table for flexible content and visual appeal
- ✅ Responsive table allows multiple components and different item templates
- ✅ Use grid table for >1,000 rows
- ✅ Grid table maintains stable layout regardless of screen width
- ✅ Grid table cells contain only one component
- ✅ Include sorting, filtering, and search for large datasets
- ✅ Provide selection for line items when needed
- ✅ Use pagination for very large datasets
- ✅ Make column headers clear and descriptive
- ⚠️ Choose table type based on use case (responsive vs grid)
- ⚠️ Consider performance with large datasets
- ❌ Don't use table for hierarchical data - use Tree

---

---

## Title

**Description:**
Title is a simple, large-sized text with additional semantic information for accessibility. Unlike manually styled headings, titles can be used by assistive technologies (screen readers) to create hierarchical site map for faster navigation. Used by panel, toolbar, list components.

**When to use:**

- Set title above table or form
- Show text in page header
- Create semantic heading hierarchy
- Need assistive technology support for navigation
- Used in panel, toolbar, or list components
- Display section or content headings

**When to avoid:**

- ❌ Text inside a text block → Use paragraph or span
- ❌ Text inside a form element → Use form label or legend
- ❌ Inline text within paragraphs → Use span or emphasis
- ❌ Decorative text without semantic meaning → Use styled text

**Best practices:**

- ✅ Provides semantic information for accessibility
- ✅ Used by screen readers for hierarchical site navigation
- ✅ Use above tables or forms as headings
- ✅ Use in page headers
- ✅ Use proper heading level (H1-H6) for document structure
- ✅ Maintain logical heading hierarchy
- ✅ Used by panel, toolbar, list components
- ✅ Large-sized text with semantic meaning
- ⚠️ Different from manually styled headings - has semantic value
- ⚠️ Don't skip heading levels (e.g., H1 to H4)
- ❌ Don't use inside text blocks or form elements

---

---

## Tree

**Description:**
Tree displays and works with hierarchical item sets. Nodes contain additional items, leaves don't. Single top-most node is root. Similar to List but hierarchical. Used in master lists (Flexible Column Layout), Popovers, Dialogs, Dynamic Page Layout. Expandable/collapsible nodes with dynamic indentation.

**When to use:**

- Display key identifier of hierarchically structured items
- Select one or more items from hierarchical set
- Hierarchy has restricted levels (up to ~12) and items (~200)
- Master list in Flexible Column Layout master-detail
- Single implementation for all devices
- Navigate hierarchical data structures
- Expand/collapse hierarchical nodes

**When to avoid:**

- ❌ Select from very small non-hierarchical items → Use Select or Combobox instead
- ❌ Items not structured hierarchically → Use List instead
- ❌ Only two hierarchy levels → Use grouped List instead
- ❌ Categorization based on item details → Use analytical table with multi-level grouping
- ❌ Large hierarchy (>12 levels or >200 items) → Consider alternative visualization

**Best practices:**

- ✅ Container for hierarchical items with expand/collapse
- ✅ Dynamic indentation per level when expanding nodes
- ✅ Root contains `expanded-level-*` class tracking current level
- ✅ Same indentation rules for compact and cozy modes
- ✅ Add `fd-tree__content--wrap` for text wrapping (default: no wrap)
- ✅ Use `fd-tree--active` for all navigable items
- ✅ Use `fd-tree__item-container--active` for specific navigable items
- ✅ Use `is-selected` class for selection (radio/checkbox)
- ✅ Use `is-navigated` class for previously navigated items
- ✅ Support hover, selected, active states
- ✅ Up to ~12 levels and ~200 items
- ⚠️ Default: items non-interactive, add states as needed
- ⚠️ Consider performance with large hierarchies
- ❌ Don't use for flat lists or simple two-level grouping

---

---

## Variant Management

**Description:**
Variant Management stores filter settings (filter parameters, selection fields, layout) defined in components like filter bar. Enables users to load, save, and change variants. In table context, saves and manages table settings including layout, column visibility, sorting, and grouping.

**When to use:**

- Store filter settings from filter bar
- Save filter parameters, selection fields, and layout
- Load, save, and change filter variants
- Manage table settings (layout, columns, sorting, grouping)
- Allow users to save personalized views
- Enable switching between different filter configurations
- Store table personalization settings

**When to avoid:**

- ❌ Simple filtering without save/load needs → Use basic filters
- ❌ No personalization required → Don't add variant management
- ❌ Single fixed view → No need for variants
- ❌ Temporary filters not worth saving → Use inline filters

**Best practices:**

- ✅ Store filter settings from filter bar
- ✅ Include filter parameters, selection fields, and layout
- ✅ Enable load, save, and change variant operations
- ✅ In tables: save layout, column visibility, sorting, grouping
- ✅ Allow users to name and manage their variants
- ✅ Provide default/standard variants
- ✅ Allow marking favorite/default variant
- ✅ Support sharing variants between users when appropriate
- ✅ Include variant descriptions for clarity
- ✅ Allow deleting user-created variants
- ⚠️ Clearly distinguish between personal and shared variants
- ⚠️ Protect system/standard variants from deletion
- ❌ Don't force variant usage for simple scenarios

---

---
