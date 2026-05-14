---
name: component-guidance-feedback
description: 'Fiori guidelines for feedback components such as Message Strip, Notification, Dialog, Progress Indicator, etc'
user-invocable: false
metadata:
    tags: ['components', 'feedback', 'messages', 'status', 'alerts']
    keywords:
        [
            'message-strip',
            'message-toast',
            'message-box',
            'message-page',
            'message-popover',
            'notification',
            'popover',
            'action-sheet',
            'busy-indicator',
            'progress-indicator',
            'rating-indicator',
            'status-indicator',
            'skeleton',
            'quick-view',
            'contextual-menu',
            'dialog',
            'toast',
            'alert'
        ]
---

# Component Guidance - Feedback & Status

Components for user feedback, messages, and status indication.

## When to Use This Skill

Use this skill when:

- The user asks "Should I use [component] for [use case]?"
- The user needs to choose between similar components
- The user asks about component best practices
- The user wants to know when NOT to use a component

This skill covers: Action Sheet, Busy Indicator, Contextual Menu, Message Box, Message Page, Message Popover, Message Strip, Message Toast, Notification, Popover, Progress Indicator, Quick View, Rating Indicator, Skeleton, Status Indicator

## Action Sheet

**Description:**
An action sheet consists of a list of options a user can select from to complete an action. Actions can be clustered if there is not enough space on the screen. Action sheets are typically used on mobile devices.

**When to use:**

- You need an option that provides more than one action
- It is really important that the user stays in context on a phone
- You only have a small number of actions (typically 3-8)
- You want a mobile-optimized action menu
- You need a touch-friendly interface for selecting from multiple options
- You want to display actions in a bottom sheet on mobile devices

**When to avoid:**

- ❌ The menu provides only one option → Use a button instead
- ❌ You need to show a hierarchical menu → Use `fd-menu` button instead
- ❌ Desktop applications → Use `fd-menu` or `fd-popover` instead for better desktop UX
- ❌ Your users would benefit more from a split button → Use `fd-split-button` which offers an easy-to-access default action with additional options

**Best practices:**

- ✅ Use action sheets primarily for mobile/touch interfaces
- ✅ Keep the number of actions manageable (3-8 options)
- ✅ Use clear, action-oriented labels (verbs like "Share", "Delete", "Copy")
- ✅ Place destructive actions at the bottom with visual distinction (red color)
- ✅ Always include a "Cancel" option to dismiss the action sheet
- ✅ Make touch targets large enough (minimum 44x44 pixels)
- ✅ Use icons alongside text for better scannability
- ⚠️ On desktop, consider using a menu or popover instead
- ⚠️ Don't use action sheets for complex nested menus
- ❌ Don't use for single actions (just use a button)

---

---

## Busy Indicator

**Description:**
The busy indicator informs the user about an ongoing operation. It indicates an unspecified amount of wait time.

**When to use:**

- Indicate an unspecified amount of wait time that is longer than 1 second
- When progress can't be estimated or doesn't need to be visualized in detail
- Only part of the application or a particular component is affected

**When to avoid:**

- ❌ The operation takes less than 1 second
- ❌ The progress can be measured → Use progress indicator instead
- ❌ You need to indicate that a larger part of the screen is loading, such as during a page load → Use a placeholder loading animation instead
- ❌ You need to block the screen to prevent the user from interacting with the app → Use a busy dialog instead

**Best practices:**

- ✅ Only show one busy indicator at a time
- ✅ Use for operations longer than 1 second
- ✅ Don't block user interaction with other parts of the interface
- ⚠️ Consider using progress indicator if the operation progress can be measured
- ⚠️ Use busy dialog if you need to block the entire screen

---

---

## Contextual Menu

**Description:**
Contextual Menu is opinionated composition of Popover and Menu components with styled button. Uses More icon or "More" word to indicate additional options. On click/tap, contextual menu opens. Composed from Popover and Menu - no own CSS. Only one menu open at a time.

**When to use:**

- More options than room to display
- Indicate additional options with More icon or "More" text
- Overflow menu for actions
- Context-specific actions menu
- Space-constrained action display
- Composition of Popover and Menu needed

**When to avoid:**

- ❌ Few actions that fit in available space → Display actions directly
- ❌ Primary actions → Display prominently, not in overflow menu
- ❌ Navigation items → Use navigation menu instead
- ❌ Complex nested menus → Consider different pattern

**Best practices:**

- ✅ Composed from Popover and Menu components
- ✅ No own CSS - completely composed from other components
- ✅ Use More icon or "More" text to indicate more options
- ✅ Opens on click or tap
- ✅ Only one menu open at a time
- ✅ Opening one menu closes all other menus
- ✅ Clicking away from menu closes it
- ✅ Use for overflow actions when space limited
- ✅ Use styled button for trigger
- ⚠️ Ensure only one menu open at any time
- ⚠️ Close menu on outside click
- ❌ Don't keep multiple menus open simultaneously

---

---

## Message Box

**Description:**
Message box displays a dialog with a simple message to the user. Unlike popover, it can relay messages unrelated to UI (e.g., technical errors). Inherits Dialog look/behavior (excluding drag/resize). Displays semantic colors and icons: Error, Warning, Success, Information, Confirmation.

**When to use:**

- Display non-field-related messages
- Interrupt user while performing an action
- Display error, warning, success, confirmation, or information messages
- Interrupt user for other reasons
- User needs to acknowledge the message
- User needs to make a decision (include two action buttons)

**When to avoid:**

- ❌ Displaying short success message → Use Message Toast instead
- ❌ Message can be shown directly in form field → Show in form field

**Best practices:**

- ✅ Include two action buttons when user decision is required before continuing
- ✅ Primary action button explicitly displays the action in text
- ✅ Secondary button provides cancel option
- ✅ Use semantic colors and icons: error, warning, success, information, confirmation
- ✅ Inherits Dialog look and behavior (no dragging/resizing)
- ✅ Can relay messages unrelated to UI (technical errors, system messages)
- ⚠️ Interrupts user flow - use appropriately
- ⚠️ For short success messages, use Message Toast instead

---

---

## Message Page

**Description:**
Message page displays messages when an app/list is empty or an error occurs. Text and icon change by use case (filter no results, search no results, empty app, too many items, unavailable tile, error), but layout stays consistent. Responsive and adjusts to screen space.

**When to use:**

- Filter with no results (mandatory `.sap-icon--filter` icon)
- Search with no results (mandatory `.sap-icon--search` icon)
- Empty app or no items available (mandatory `.sap-icon--product` or matching icon)
- Too many items to display
- Saved tile no longer available
- Error occurred preventing content display (mandatory `.sap-icon--document` icon)
- Add formatted text (bold, italic, underline, bullet points) and buttons to action area

**When to avoid:**

- ❌ Short transient messages → Use message toast instead
- ❌ Field-specific errors → Use form validation messages

**Best practices:**

- ✅ Icon is mandatory (varies by message type, default: `.sap-icon--documents`)
- ✅ Title is mandatory; add description with details if needed
- ✅ Keep message as concise as possible
- ✅ Filter message: use `.sap-icon--filter` icon, prompt to remove/re-evaluate filter
- ✅ Search message: use `.sap-icon--search` icon
- ✅ No items message: use `.sap-icon--product` or appropriate icon
- ✅ Error message: use `.sap-icon--document` icon, provide link to app start screen if possible
- ✅ Formatted text variant: supports bold, italic, underline, bullet points, and buttons
- ⚠️ Don't add more than two buttons (highly recommended)
- ⚠️ Responsive layout adjusts to available screen space

---

---

## Message Popover

**Description:**
Message Popover displays a summarized list of different message types (error, warning, success, information) in one list. Provides systematic way to navigate and explore details for each message. Adaptive/responsive: renders as dialog with close button on phones, as popover on tablets+. Works with technical message manager to populate list.

**When to use:**

- Display multiple messages to the user
- Ensure all content is visible on any device
- Centrally manage messages and show without interrupting user
- Messages related to form entries or triggered by finalizing actions (e.g., Save)
- Form fields are hidden when scrolling and issues may not be visible otherwise
- Users can browse messages by type and navigate to details
- Users can jump directly from message to affected field on UI

**When to avoid:**

- ❌ Need to interrupt the user (technical problems like network errors) → Use message box instead
- ❌ Using small dialog where message popover would obscure important information (e.g., form fields in focus) → Use highlighting and inline messages for form field validation instead

**Best practices:**

- ✅ Display multiple messages of different types in one list
- ✅ Works with technical message manager (auto-populates message list)
- ✅ Validation errors added automatically without interrupting user
- ✅ Users browse messages by type and navigate to details
- ✅ Allow users to jump from message to affected UI field
- ✅ Adaptive rendering: dialog on phones, popover on tablets+
- ✅ Does not interrupt user workflow
- ⚠️ For interrupting messages (network errors), use message box
- ⚠️ In small dialogs, use inline validation instead

---

---

## Message Strip

**Description:**
Message Strip enables embedding application-related messages in the application to draw user attention to important information in page context (warnings, state changes that could be easily missed). Used within detail areas and object contexts.

**When to use:**

- Provide information within the detail area of an object
- Inform user about status of an object
- Warn user about an issue
- Draw attention to important contextual information (warnings, state changes)
- Display application-related messages in page context

**When to avoid:**

- ❌ Displaying information within object page header → Use different component
- ❌ Displaying within a control → Use different component
- ❌ Displaying in master list → Use different component
- ❌ Displaying above page header → Use different component

**Best practices:**

- ✅ Use within detail area of objects
- ✅ Draw attention to important contextual information
- ✅ Use for warnings or state changes that could be missed
- ✅ Display application-related messages
- ✅ Keep in context of page content
- ⚠️ Not for use in object page header, controls, master list, or above page header
- ⚠️ Use for contextual messages, not global notifications

---

---

## Message Toast

**Description:**
Message Toast is a small, non-disruptive popup for short success messages that disappears automatically after a few seconds. Always centered horizontally at the bottom of screen, fades in/out automatically. Standard duration is 3000ms (can be longer, not recommended to be shorter).

**When to use:**

- Display short success message
- Avoid interrupting user while performing an action
- Confirm successful action
- Non-disruptive feedback for completed operations

**When to avoid:**

- ❌ Displaying error or warning messages → Use message strip or message box instead
- ❌ Interrupting users while performing an action → Use message box instead
- ❌ Need to ensure users read message before leaving page → Use message box or message strip instead

**Best practices:**

- ✅ Use for short success messages only
- ✅ Standard duration: 3000ms (can be longer, not shorter)
- ✅ Always centered horizontally at bottom of screen
- ✅ Fades in and out automatically
- ✅ Non-disruptive to user workflow
- ✅ Confirms successful actions without interruption
- ⚠️ Not for errors or warnings (use appropriate message components)
- ⚠️ Duration defined by application (minimum 3000ms recommended)

---

---

## Notification

**Description:**
Notifications should be well-instrumented, timed to provide value without being intrusive. Should be brief, concise, conveying specific information or prompting action. Used for reminders, alerts, and updates.

**When to use:**

- Reminders: upcoming events, appointments, deadlines, payments, tasks requiring attention/action
- Alerts: urgent information like business-critical alerts
- Updates: significant changes to user interests (status updates, workflow progress)
- Well-timed communication without interrupting user
- Action-oriented with clear call to action

**When to avoid:**

- ❌ Excessive notifications that frustrate users
- ❌ Overwhelming users with too many messages in short time span
- ❌ Non-relevant or non-useful information

**Best practices:**

- ✅ Clear on purpose (update, reminder, or alert)
- ✅ Concise and to the point
- ✅ Relevant and useful for user
- ✅ Well-timed
- ✅ Personalized where possible
- ✅ Action-oriented with clear call to action
- ✅ Transparent on importance (use importance indicator consistently)
- ✅ Well-paced (avoid overwhelming with too many messages)
- ✅ Consider user's perspective and context
- ✅ Group notifications for similar event types when threshold reached (reduces overall count for non-critical events)
- ⚠️ Provide value and relevance without overwhelming or interrupting
- ⚠️ Avoid excessive notifications that diminish effectiveness

---

---

## Popover

**Description:**
Popover displays additional information for an object in a compact way without leaving the page. Contains control (trigger) and body (content). Can be paired with Menu for dropdown functionality. Supports header, footer, and scrollable variants with flexible placement options.

**When to use:**

- Show additional information on demand without navigation
- Define custom structure for supplementary content
- Display UI elements not available in Quick View
- Show contextual help or tooltips with rich content
- Trigger dropdown menus from buttons
- Display details for an object inline

**When to avoid:**

- ❌ Objects in master list → Use details area instead
- ❌ Critical information that should always be visible → Use inline content
- ❌ Complex forms or multi-step processes → Use Dialog instead
- ❌ Long-form content → Use separate page or panel

**Best practices:**

- ✅ Only one popover visible at a time - opening one closes all others
- ✅ Use `fd-popover__body-header` for header section
- ✅ Use `fd-popover__body-footer` for footer with actions
- ✅ Add `fd-popover-body__wrapper` inside body for scrollable content
- ✅ Define explicit height when content may overflow
- ✅ Show status information as text fields with semantic colors
- ✅ Use placement modifiers to position popover relative to trigger
- ✅ Align arrow with trigger using alignment modifiers
- ✅ Close popover on outside click or Escape key
- ⚠️ Avoid multiple layered popovers - causes collisions
- ⚠️ Set max-height and enable scrolling for long content
- ❌ Don't keep multiple popovers open simultaneously

---

---

## Progress Indicator

**Description:**
Progress Indicator visualizes current advancement of a process or degree of accomplishment. Inside filled with color to indicate progress state. Shows progress as absolute numbers or percentages with progress bar. Supports semantic states (normal, success, warning, error, information).

**When to use:**

- Visually show current status of a process
- Strengthen and communicate current status
- Make different states comparable at higher level
- Show custom values as well as percentages
- Display determinate progress (known completion percentage)
- Show progress between 0% and 100%

**When to avoid:**

- ❌ Ongoing operation needing visual feedback → Use Busy Indicator instead
- ❌ Indeterminate progress (unknown duration/completion) → Use Busy Indicator instead
- ❌ Single value in fillable shape describing context → Use Status Indicator instead
- ❌ Simple loading without progress tracking → Use Busy Indicator

**Best practices:**

- ✅ Show progress as percentage (0-100%) or with custom text
- ✅ Display text on right of bar if progress ≤50%, right-aligned on bar if >50%
- ✅ Use semantic state modifiers: `fd-progress-indicator--positive`, `--negative`, `--critical`, `--informative`
- ✅ Use `fd-progress-indicator--display` for display-only variant
- ✅ Use `fd-progress-indicator--mobile` for mobile optimization
- ✅ Long text truncates - click shows popover with full text
- ✅ Show application-specific text in addition to or instead of percentage
- ✅ Use semantic colors for different value states
- ⚠️ If text exceeds space, ensure truncation and popover functionality
- ⚠️ Choose appropriate state color to match process status
- ❌ Don't use for indeterminate progress

---

---

## Quick View

**Description:**
Quick View displays a concise overview of an object within a Popover. Shows information grouped into sections (e.g., contact details, company information). Inherits properties and responsiveness from Popover component.

**When to use:**

- Display concise overview of an object
- Show information about employee, company, or business entity
- Split information into logical groups
- Provide quick access to key details without full navigation
- Display grouped object information (contact, company, details)

**When to avoid:**

- ❌ Information not organized in groups → Use plain Popover with custom structure
- ❌ Complex detailed information about object → Use full detail page or Dialog
- ❌ Single piece of ungrouped information → Use Popover or tooltip
- ❌ Extensive data requiring scrolling → Use detail page

**Best practices:**

- ✅ Based on Popover - inherits same responsiveness
- ✅ Organize information into clear, logical groups
- ✅ Keep content concise - it's a "quick" view
- ✅ Use semantic grouping (e.g., Contact, Company, Address)
- ✅ Display most important information first
- ✅ Follow Popover best practices for positioning and behavior
- ✅ Provide link to full details if more information available
- ⚠️ Limit amount of information - avoid scrolling if possible
- ⚠️ Only show essential overview data
- ❌ Don't display complex nested structures

---

---

## Rating Indicator

**Description:**
Rating Indicator enables users to rate content or display existing ratings on a numeric scale. Most commonly uses 1 (lowest) to 5 (highest) star scale. Can be interactive (for collecting ratings) or display-only (for showing ratings).

**When to use:**

- Collect quantitative user feedback through star ratings
- User satisfaction surveys or product reviews
- Display popularity or quality of items, products, or content
- Showcase average ratings visually
- Enable users to rate items on numeric scale
- Show visual representation of ratings

**When to avoid:**

- ❌ Content that doesn't suit user ratings → Legal documents, terms of service, non-interactive content
- ❌ Adds unnecessary UI complexity with little anticipated interaction
- ❌ Binary feedback needed → Use thumbs up/down or like button instead
- ❌ Precise numeric input required → Use number input or slider

**Best practices:**

- ✅ Use standard 5-star scale for familiarity
- ✅ Make interactive for collecting user ratings
- ✅ Make read-only for displaying existing ratings
- ✅ Show half-stars for displaying average ratings (e.g., 3.5 stars)
- ✅ Include rating count or number of reviews alongside display
- ✅ Provide clear visual distinction between rated and unrated stars
- ✅ Enable keyboard navigation for accessibility
- ✅ Show hover state for interactive ratings
- ⚠️ Consider whether rating functionality adds value to your content
- ⚠️ Display average ratings with sufficient sample size
- ❌ Don't use for content that doesn't benefit from ratings

---

---

## Skeleton

**Description:**
Skeleton (Placeholder loading) is a busy indicator that provides users with a skeleton page as placeholder while content loads. Shows grey boxes with animations to indicate loading activity. Creates impression of speed and reliability, making app seem to load faster.

**When to use:**

- Display loading placeholder while content is being fetched
- Show frame of final content without actual data
- Create impression of faster loading
- Improve perceived performance
- Provide generic preview of layout during load
- Replace actual content during data fetching
- Display loading state for cards, lists, tables

**When to avoid:**

- ❌ Very fast loading (< 300ms) → No indicator needed or use simple spinner
- ❌ Indeterminate wait times → Use Busy Indicator instead
- ❌ Full-page loading → Use page-level Busy Indicator
- ❌ Background updates → Use subtle progress indicator

**Best practices:**

- ✅ Use Placeholder Shapes that match actual content layout
- ✅ Show grey boxes with loading animations
- ✅ Match skeleton structure to final content structure
- ✅ Use various shapes depending on content type being loaded
- ✅ Provide realistic preview of layout
- ✅ Improve perceived performance and user experience
- ✅ Use for content that takes time to load (images, data, lists)
- ✅ Replace skeleton with actual content smoothly
- ⚠️ Ensure skeleton layout matches final content structure
- ⚠️ Use for medium loading times (300ms - 3s)
- ❌ Don't show skeleton for instant loading

---

---

## Status Indicator

**Description:**
Status Indicator displays SVG images as pictorial representation of an object. Shows single value filled on numeric scale (1-100%) using filled shape with meaningful icon. Can be embedded in other controls and updated in real time.

**When to use:**

- Display single value with icon describing its context
- Show single value that updates in real time without page reload
- Visualize single value in grids, tables, or dialog boxes
- Provide meaningful association through icon usage
- Display fillable shape representing status or progress

**When to avoid:**

- ❌ Displaying single value within table → Use Progress Indicator or Radial Micro Chart instead
- ❌ Showing rating → Use Rating Indicator instead
- ❌ Decorative purposes with no meaningful information
- ❌ Multiple related values → Use different visualization

**Best practices:**

- ✅ Use filled shape to visualize single value (1-100%)
- ✅ Choose icon that provides meaningful context
- ✅ Can be embedded in other controls
- ✅ Enable real-time updates without page reload
- ✅ Use in grids, tables, or dialog boxes
- ✅ Provide clear visual indication of status through icon
- ✅ Ensure icon conveys meaningful information
- ⚠️ Icon should describe context, not be decorative only
- ⚠️ For table single values, consider Progress Indicator instead
- ❌ Don't use purely for decoration without meaning

---

---
