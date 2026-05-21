---
name: component-guidance-forms
description: 'Fiori guidelines for form controls and input components such as Checkbox, Input, Select, Textarea, Date Picker, etc'
metadata:
    tags: ['components', 'forms', 'inputs', 'validation', 'data-entry']
    keywords:
        [
            'checkbox',
            'radio',
            'input',
            'textarea',
            'select',
            'date-picker',
            'time-picker',
            'combobox',
            'multi-input',
            'switch',
            'slider',
            'tokenizer',
            'file-uploader',
            'form-validation',
            'form-label',
            'form-message',
            'input-group',
            'step-input',
            'upload-collection'
        ]
---

# Component Guidance - Forms & Inputs

Form controls and input components for data entry.

## When to Use This Skill

Use this skill when:

- The user asks "Should I use [component] for [use case]?"
- The user needs to choose between similar components
- The user asks about component best practices
- The user wants to know when NOT to use a component

This skill covers: Checkbox, Combobox Input, Date Picker, Fieldset, File Uploader, Form Grid, Form Group, Form Header, Form Item, Form Label, Form Message, Input, Input Group, Multi ComboBox, Multi Input, Radio, Select, Slider, Step Input, Switch, Textarea, Time, Time Picker, Token, Tokenizer, Upload Collection

## Checkbox

**Description:**
A checkbox lets users set a binary value (true/false). When selected, it toggles between checked (state applies), unchecked (state doesn't apply), and optionally tri-state/indeterminate (mixed selection of dependent fields). All options are visible, and users can make one or more independent selections.

**When to use:**

- Only one option can be selected or deselected (e.g., accept terms of use) when meaning is obvious
- A group or list of options can be selected independently of each other
- Options are displayed immediately without user interaction
- Intermediate selection state (tri-state) is required when multiple sub-options are grouped under a parent option

**When to avoid:**

- ❌ User needs to choose multiple options from a large list → Use Combo Box Input instead
- ❌ User can choose only one option from a list → Use Radio Buttons, Select, or List instead
- ❌ User needs to perform instantaneous actions without reviewing or confirming → Use Switch instead
- ❌ Not enough space available on screen → Use Combo Box instead

**Best practices:**

- ✅ Checked state means the described state applies or item is chosen
- ✅ Unchecked state means the described state doesn't apply
- ✅ Tri-state/indeterminate indicates neither checked nor unchecked (set via JavaScript `indeterminate` property)
- ✅ Use tri-state to represent mixed selection when some (but not all) dependent fields are selected
- ✅ All options visible without user interaction
- ⚠️ Tri-state is visual only and cannot be achieved by direct user interaction
- ⚠️ Use for independent selections where multiple options can be selected simultaneously

---

---

## Combobox Input

**Description:**
Combobox allows users to select item from predefined list. Provides editable input field for filtering list and dropdown menu with available options. If entries not validated by app, users can enter custom value. Combines input field with dropdown selection.

**When to use:**

- Select single item from long list of items
- List items are secondary information not needing immediate display
- Need filtering capability for large lists
- Allow custom entry if not validated
- Searchable dropdown needed
- Select from many options (more than select can handle comfortably)

**When to avoid:**

- ❌ Only two options → Use Switch instead
- ❌ Short list of items → Use Select component instead
- ❌ More than 200 list items → Use input field with select dialog or value help dialog
- ❌ Simple selection without filtering → Use Select

**Best practices:**

- ✅ Editable input field for filtering list
- ✅ Dropdown menu with available options
- ✅ Use for long lists of items
- ✅ Allow custom value entry if not validated by application
- ✅ List items are secondary - don't need immediate display
- ✅ Single item selection only
- ✅ Provide search/filter functionality
- ✅ Show filtered results as user types
- ⚠️ For 2 options, use Switch
- ⚠️ For short lists, Select is simpler
- ⚠️ For >200 items, use dialog-based selection
- ❌ Don't use for very short lists

---

---

## Date Picker

**Description:**
Date Picker lets users select localized date using touch, mouse, or keyboard input. Responsive behavior for all devices - compact mode (smaller) and cozy mode (touch-friendly). Two parts: Input Field (direct entry or picker) and Date Picker (day/month/year/year ranges views).

**When to use:**

- Users need to enter single date
- Navigate directly from one month or year to another
- Enter lots of data fast or primarily using keyboard
- Single date selection needed
- Responsive date input required
- Direct date entry or picker selection

**When to avoid:**

- ❌ Combined date and time input → Use Date/Time Picker instead
- ❌ Keep calendar visible and prominent → Use Calendar instead
- ❌ Enter date range → Use Date Range Picker instead
- ❌ Multiple dates selection → Use appropriate multi-date picker

**Best practices:**

- ✅ Input field for direct date entry or picker selection
- ✅ Date picker shows day view, month view, year view, year ranges
- ✅ Compact mode: smaller size
- ✅ Cozy mode: touch-friendly size
- ✅ Responsive behavior for all devices
- ✅ Use touch, mouse, or keyboard input
- ✅ Navigate directly between months/years
- ✅ Single date selection
- ✅ Localized date format
- ⚠️ For date+time, use Date/Time Picker
- ⚠️ For ranges, use Date Range Picker
- ❌ Don't use for date ranges

---

---

## Fieldset

**Description:**
A fieldset gives semantic meaning to a group of elements inside a form (e.g., Billing or Shipping Address). Grouping fields provides styling and accessibility benefits, and is especially important for checkbox groups and radio button groups.

**When to use:**

- Group related form elements semantically (e.g., Billing Address, Shipping Address)
- Group checkbox groups for accessibility
- Group radio button groups for accessibility
- Provide semantic structure to form sections

**When to avoid:**

- ❌ Grouping unrelated form elements together
- ❌ Using fieldset when simpler grouping methods suffice for non-form content

**Best practices:**

- ✅ Always use fieldset for checkbox groups (accessibility requirement)
- ✅ Always use fieldset for radio button groups (accessibility requirement)
- ✅ Use `<legend>` element to provide a label for the fieldset
- ✅ Provides both styling and accessibility benefits
- ✅ Use for semantic grouping of related form fields
- ⚠️ Checkbox and radio button groups should always be grouped with fieldset
- ⚠️ Essential for screen reader users to understand field relationships

---

---

## File Uploader

**Description:**
The file uploader lets users select and upload one or more files using their local file explorer. It's an opinionated composition of input and button components designed for simple upload tasks with automatic upload start upon file selection.

**When to use:**

- Upload one or more files using local file explorer
- Upload files by dragging and dropping
- Simple upload tasks where file management isn't needed
- Uploading single files (works best for this case)

**When to avoid:**

- ❌ Uploading large files that may take a long time → Use upload collection instead
- ❌ Users need to see upload status → Use upload collection instead
- ❌ Users need a preview of uploaded files → Use upload collection instead
- ❌ Users may need to rename uploaded files → Use upload collection instead
- ❌ Users need to manage multiple uploads (delete, rearrange, rename files) → Use upload collection instead

**Best practices:**

- ✅ Best suited for uploading single files
- ✅ Uploading starts automatically when files are selected
- ✅ Supports both file explorer selection and drag-and-drop
- ✅ Includes only input field or button for simplicity
- ⚠️ For multiple file management features, use upload collection component
- ⚠️ Not suitable for large files or when upload status visibility is required

---

---

## Form Grid

**Description:**
The form grid provides responsive layouts for forms on a 12-column grid with four breakpoints (Small <600px, Medium 601-1024px, Large 1025-1440px, Extra-large >1441px). It supports configurable label-field ratios (X:Y:Z format) and adapts layouts based on form width, not screen width.

**When to use:**

- Create responsive form layouts that adapt to different form widths
- Balance form layout between labels, fields, and empty columns
- Single-column layouts for mobile/dialogs (Small size)
- Two-column layouts for larger screens (Large/Extra-large sizes)
- Split-screen or full-screen form views with specific label-field ratios
- Forms requiring vertical layout (labels above fields) or horizontal layout (labels beside fields)

**When to avoid:**

- ❌ Simple forms that don't need responsive grid behavior
- ❌ When a simpler form layout component suffices

**Best practices:**

- ✅ Use single-column layout for small forms (mobile/dialogs) - labels above fields
- ✅ Use two-column layout for large/extra-large forms to avoid scrolling
- ✅ Adapt label-field ratio based on context: 2:10:0 (default medium), 4:7:1 (split-screen), 3:5:4 (full-screen)
- ✅ Use 4:8:0 ratio for long labels/input values at medium width
- ✅ All forms display vertical layout under Small breakpoint automatically
- ✅ Position form groups side-by-side in Z layout for large/extra-large sizes
- ✅ Use recommended column numbers to maximize screen space and avoid unnecessary scrolling
- ⚠️ Breakpoints depend on form width, not screen width
- ⚠️ Empty grid columns (Z in X:Y:Z ratio) prevent excessive input field stretching
- ⚠️ Change default label-field ratio according to your app's specific needs

---

---

## Form Group

**Description:**
Form groups assemble form elements with labels, messages, and help containers. Components like `fd-form__item` with label and control can be used independently when error messages aren't needed.

**When to use:**

- Assemble complete form elements with labels, controls, messages, and help text
- Group related form fields with validation messages
- Create structured form layouts with consistent spacing
- Need error messages, help text, or validation feedback alongside form fields

**When to avoid:**

- ❌ Simple form fields that don't need error messages or help text → Use `fd-form__item` alone instead
- ❌ When minimal form structure suffices

**Best practices:**

- ✅ Use full form group when error messages or help containers are needed
- ✅ Use `fd-form__item` with label and control alone for simpler fields without messages
- ✅ Components can be used independently based on needs
- ✅ Provides consistent structure for labels, controls, messages, and help text
- ⚠️ Not every form field needs the full form group structure
- ⚠️ Choose minimal necessary components to avoid over-engineering simple forms

---

---

## Form Header

**Description:**
Form headers are titles that provide context about a group of input fields. For example, "Personal Information" would categorize fields like Name, Address, etc.

**When to use:**

- Provide context and categorization for groups of input fields
- Organize form sections with descriptive titles
- Help users understand what information belongs in each form section
- Create visual hierarchy in long or complex forms

**When to avoid:**

- ❌ Single input field that doesn't need categorization
- ❌ When field labels alone provide sufficient context

**Best practices:**

- ✅ Use descriptive titles that clearly categorize the grouped fields (e.g., "Personal Information", "Billing Address")
- ✅ Place header before the related group of input fields
- ✅ Use for organizing complex forms into logical sections
- ✅ Helps users scan and navigate long forms efficiently
- ⚠️ Keep header text concise and meaningful
- ⚠️ Don't overuse - only when grouping provides real value

---

---

## Form Item

**Description:**
A form item combines a label and an input field. The label clearly describes the expected input and is associated with the input for accessibility.

**When to use:**

- Combine label and input field as a single form element
- Optional inputs that don't require validation or indication (default)
- Required inputs that need visual and accessible indication (use `fd-form-label--required`)
- Ensure accessible association between label and input

**When to avoid:**

- ❌ Input without a label (fails accessibility requirements)
- ❌ When more complex form structure with messages is needed → Use Form Group instead

**Best practices:**

- ✅ Use default form item for optional inputs without validation
- ✅ Mark required inputs with `fd-form-label--required` modifier class
- ✅ Set `aria-required="true"` on required input fields for screen readers
- ✅ Associate label with input using `for` attribute and matching `id`
- ✅ Label clearly describes the expected input
- ⚠️ Always provide accessible labels for form inputs
- ⚠️ Required fields need both visual indicator (modifier) and ARIA attribute

---

---

## Form Label

**Description:**
Form labels identify form elements like input fields, checkboxes, and radio buttons. Best used as a child element of Form Item component.

**When to use:**

- Identify any form element (input field, checkbox, radio button)
- Optional fields without special styling (default)
- Required fields with visual and programmatic indication (`fd-form-label--required`)
- Labels that need a colon displayed (`fd-form-label--colon`)
- Disabled form elements requiring visual indication

**When to avoid:**

- ❌ Form elements without labels (fails accessibility)
- ❌ Using label outside of form context

**Best practices:**

- ✅ Use default form label for optional fields
- ✅ Add `fd-form-label--required` modifier for required fields
- ✅ Use `required` and `aria-required="true"` attributes on input for required fields
- ✅ Add `fd-form-label--colon` modifier to display label with colon
- ✅ Show disabled state using one of three methods: `aria-disabled="true"`, `is-disabled` class, or `fd-form-label--disabled` modifier
- ✅ Best used as child element of Form Item component
- ⚠️ Disabled labels need both visual (class/modifier) and programmatic (`aria-disabled="true"`) indication
- ⚠️ Associate label with form element using `for` attribute

---

---

## Form Message

**Description:**
Form messages display value state text (success, error, warning, information) shown when focus is on the input field. They work with input control value states to provide feedback to users.

**When to use:**

- Display validation feedback for form inputs
- Show success messages after successful input
- Display error messages for invalid input
- Show warning messages for potential issues
- Provide informational messages about input requirements
- Communicate value state to users when input has focus

**When to avoid:**

- ❌ Messages unrelated to form validation or input state
- ❌ Critical system messages → Use message strip or alert instead

**Best practices:**

- ✅ Use `is-success`, `is-error`, `is-warning`, `is-information` classes on input element (`fd-input`)
- ✅ Use matching `fd-form-message--success`, `--error`, `--warning`, `--information` modifiers on message element
- ✅ Message appears when focus is on the input field
- ✅ Match input state class with corresponding message modifier
- ✅ Provide clear, actionable feedback in message text
- ⚠️ Four value states available: success, error, warning, information
- ⚠️ Input and message states must match for visual consistency

---

---

## Input

**Description:**
Text input fields allow users to enter and edit single-line text, numbers, dates, or times. They should always be paired with a label, and required fields should have an asterisk (\*). Features include autocomplete, suggestions, and value help for valid data entry.

**When to use:**

- Enter short, single-line text or numbers, dates, or times
- Enter password, URL, phone number, or email address
- Select a single item from a large dataset (more than 200 items)
- Find an object by searching multiple attributes (ID, city, customer name) - use with autocomplete and value help
- Select one or more items from a list (multi-input)
- Find items from a list by searching multiple attributes (combobox)

**When to avoid:**

- ❌ Entering dates and times → Use date picker, date range selection, or date/time picker instead
- ❌ Entering long texts → Use textarea instead
- ❌ Carrying out a search → Use search field instead
- ❌ Selecting multiple values → Use multi-combo box (<200 items) or multi-input field (>200 items) instead
- ❌ Selecting from small set of values (<20 items) → Consider select control instead

**Best practices:**

- ✅ Always pair input with a label
- ✅ Mark required fields with asterisk (\*) in label
- ✅ Use autocomplete and suggestions for better user experience
- ✅ Provide value help for complex data entry
- ✅ For small sets (<20 items), use select control
- ✅ For medium sets (20-200 items), use combo box
- ✅ For large sets (>200 items), use input with value help
- ⚠️ Single-line text only - use textarea for multi-line
- ⚠️ Required fields must have visual indicator (asterisk) in label

---

---

## Input Group

**Description:**
Input Group combines form inputs with add-ons (text, icons, or buttons) to help users understand the information being entered. Add-ons can be positioned before, after, or on both sides of the input field. Supports validation states (success, error, warning, information).

**When to use:**

- Add text add-ons to clarify value format (e.g., currency, units)
- Add icon add-ons as visual cues (visibility toggles, status indicators)
- Add button add-ons for actions (submit, search, trigger)
- Display validation or feedback states visually
- Provide context about expected input format or units

**When to avoid:**

- ❌ Simple inputs that don't need additional context → Use basic input instead
- ❌ Complex actions that need more than a simple button → Consider separate action buttons

**Best practices:**

- ✅ Position add-ons logically: before (prefix), after (suffix), or both sides
- ✅ Use text add-ons for units or currency symbols
- ✅ Use icon add-ons for visual cues (e.g., visibility toggle, status)
- ✅ Use button add-ons for actions like submit or search
- ✅ Apply state classes: `.is-success`, `.is-error`, `.is-warning`, `.is-information` on `.fd-input-group`
- ✅ Use `.is-focus` class on `.fd-input-group` for focused state
- ✅ Buttons can contain text or icons
- ⚠️ Add-ons should clarify or enhance input understanding, not clutter
- ⚠️ State modifiers must be applied to the input group container

---

---

## Multi ComboBox

**Description:**
Multi ComboBox enables users to select options from predefined list or enter custom text. Provides editable input field to filter list and dropdown arrow to open options. Select options have checkboxes permitting multiple selection. Combines filtering with multi-selection capability.

**When to use:**

- Select one or more options from long list (no more than ~200)
- Values contain secondary information not needing immediate display
- Multiple selection from filtered list needed
- Editable input for filtering options
- Multi-select with search/filter capability

**When to avoid:**

- ❌ Select multiple ranges → Use appropriate range selector
- ❌ Select or search multiple business objects → Use specialized selector
- ❌ Short list of items → Use simpler multi-select component
- ❌ Add custom values → Use Multi Input instead
- ❌ List contains >200 items → Use dialog-based selection

**Best practices:**

- ✅ Editable input field to filter list
- ✅ Dropdown arrow to open options list
- ✅ Checkboxes for multiple selection
- ✅ Use for long lists (up to ~200 items)
- ✅ Secondary information in values
- ✅ Filter as user types
- ✅ Show selected items as tokens
- ✅ Allow deselection of items
- ⚠️ Maximum ~200 items
- ⚠️ For custom values, use Multi Input
- ❌ Don't use for short lists

---

---

## Multi Input

**Description:**
Multi Input allows users to enter multiple values displayed as tokens. Provides editable input field for filtering list and dropdown menu with available options. If entries not validated, users can enter custom values. Supports value help for selecting/searching multiple business objects and ranges.

**When to use:**

- Provide value help to select or search multiple business objects
- Let users select multiple ranges (with value help)
- Enable users to add custom values
- Multiple values displayed as tokens
- Editable input for custom entries
- Value help dialog for complex selection

**When to avoid:**

- ❌ Choose multiple options from large list → Use Multi ComboBox instead
- ❌ Not enough space on screen → Consider alternative
- ❌ Choose only one option → Use single-select component
- ❌ Simple multi-selection without custom values → Use Multi ComboBox

**Best practices:**

- ✅ Multiple values displayed as tokens
- ✅ Editable input field for filtering
- ✅ Dropdown menu with available options
- ✅ Allow custom value entry if not validated
- ✅ Use value help for multiple business objects
- ✅ Support multiple range selection with value help
- ✅ Show selected values as removable tokens
- ✅ Enable custom value entry
- ✅ Provide value help dialog for complex scenarios
- ⚠️ For predefined-only options, use Multi ComboBox
- ⚠️ Requires adequate screen space
- ❌ Don't use for single selection

---

---

## Radio

**Description:**
Radio buttons provide mutually exclusive options, allowing users to select only one option from two or more choices. They only work in groups and are best for selecting from a small set of clearly different alternatives.

**When to use:**

- Users need to choose only one option from different alternatives
- Users need to see all options at once without interacting with a dropdown
- Small set of options (no more than 8)
- Users need to trigger an immediate change without pressing Submit
- Users need to choose quickly between at least two clearly different choices

**When to avoid:**

- ❌ Users need to select more than one option → Use checkboxes instead
- ❌ Users need to select items in a list → Use checkboxes or direct tap selection
- ❌ Users are expected to go with the most common option → Use dropdown with default instead
- ❌ Users are choosing between just two options → Use single checkbox or toggle switch instead
- ❌ More than 8 options to present → Use dropdown box or list view instead
- ❌ Options are numbers with fixed steps → Use slider control instead
- ❌ Users need to select a value from a range → Use slider instead

**Best practices:**

- ✅ Align radio buttons vertically, especially for long labels (easier to read and localize)
- ✅ Use horizontal alignment only for one-word labels (e.g., background color settings)
- ✅ Always align vertically in forms (label length varies across languages)
- ✅ Use group labels and padding to separate multiple radio button groups
- ✅ Default: long labels truncate with ellipsis
- ✅ Use `.fd-radio__label--wrap` modifier for labels that wrap to new line (set max-width on label)
- ✅ Use `.fd-radio__label--wrap-top-aligned` for top-left aligned wrapping labels
- ⚠️ Radio buttons only work in groups for mutually exclusive options
- ⚠️ Don't put two radio button groups next to each other without clear separation
- ⚠️ Maximum 8 options - use dropdown for more

---

---

## Select

**Description:**
Select component (dropdown) lets users pick one item from a small, predefined list. Can be placed in toolbars (chart, footer, header), forms, or tables. List stays hidden until opened.

**When to use:**

- Choose only one item from short list (typically 2-12 items)
- Users don't need to see all options at once
- Helpful to start with default selection (especially if one option used most often)
- Predefined list instead of free-form text input
- Logically grouped list with common items first, others sorted
- Space-saving alternative to radio buttons

**When to avoid:**

- ❌ Only two options → Use switch instead
- ❌ Very large set of items → Use combo box instead
- ❌ Display multiple attributes or search on multiple attributes → Use input field with select dialog or value help dialog
- ❌ Need to display all options without interaction → Use radio buttons instead
- ❌ More than 12 options → Consider combo box with search

**Best practices:**

- ✅ Keep texts concise, avoid complex content
- ✅ Define default selection whenever possible
- ✅ Sort values in meaningful order (common first, then alphabetical/numerical/topical)
- ✅ Use appropriate text for "not selected" option (not blank)
- ✅ Use fixed width (don't auto-adjust based on selection)
- ✅ In two-column layout, place most relevant value in first column
- ✅ Keep selection list items simple and scannable
- ⚠️ Avoid icons in selection list - if used, ensure they match text
- ⚠️ Avoid disabling selection options when possible
- ❌ Don't overload with too many options
- ❌ Don't use blank value for "not selected"

---

---

## Slider

**Description:**
Slider allows users to adjust a value along continuous or gradual range. Handles values that change smoothly (volume, brightness). Provides immediate visual feedback. Range Slider variant lets users select min/max value range within predefined interval.

**When to use:**

- Adjust value along continuous or gradual range
- Handle values that change smoothly (volume, brightness, saturation, contrast)
- Allow quick adjustments without typing
- Provide immediate visual feedback as handle moves
- Select min/max value range (use Range Slider)
- Display and adjust settings visually

**When to avoid:**

- ❌ Making specific choices (categories, list items) → Use radio buttons or checklists
- ❌ Without full accessibility support → Use dropdown or input field instead
- ❌ Space is limited (small screens) → Use smaller input options
- ❌ Precise numeric input needed → Use number input field
- ❌ Single value selection when Range Slider used → Use standard Slider

**Best practices:**

- ✅ Always label slider to indicate what selected value represents
- ✅ Keep custom slider labels short and meaningful
- ✅ Use steps that match required precision (smaller steps for exact values)
- ✅ Display unit of measurement (%, kg, °C) next to slider or input field
- ✅ Display current value near slider or in connected input field
- ✅ Choose appropriate size for use case
- ✅ Use stepped increments for predefined intervals
- ✅ Ensure values are clearly labeled for context
- ✅ Show current value as user interacts
- ✅ Ensure keyboard interaction support
- ✅ Provide visible value indicators and clear min/max labels
- ⚠️ Consider screen size - sliders take up space
- ⚠️ Match step size to precision requirements
- ❌ Don't use without accessibility support

---

---

## Step Input

**Description:**
Step Input allows users to adjust numeric values in predefined increments (steps) using buttons or direct input. Useful for quantities or measurements without manually typing every number. Supports keyboard and mouse interactions, customizable with min, max, and step values.

**When to use:**

- Adjust amounts, quantities, or numeric values quickly
- Change values in defined increments (e.g., shopping cart quantities)
- Need increment/decrement buttons for numeric input
- Users benefit from predefined step values
- Quick numeric adjustments needed

**When to avoid:**

- ❌ Fixed numbers (postal code, phone number, ID) → Use regular input field
- ❌ Values that rarely change or don't follow steps (account number) → Use regular input field
- ❌ Entering dates or times → Use Date Picker, Time Picker, or Date/Time Picker
- ❌ Free-form numeric input without increments → Use number input

**Best practices:**

- ✅ Provide increment/decrement buttons
- ✅ Allow direct input via keyboard
- ✅ Set appropriate min, max, and step values
- ✅ Support both keyboard and mouse interactions
- ✅ Use for quantities that change in defined steps
- ✅ Display current value clearly
- ✅ Disable buttons at min/max boundaries
- ✅ Use in shopping carts, quantity selectors, measurement adjustments
- ⚠️ Define reasonable step increments for use case
- ⚠️ Set min/max values to prevent invalid entries
- ❌ Don't use for fixed or rarely changing values

---

---

## Switch

**Description:**
Switch mimics a physical switch, allowing users to toggle individual features on or off. Mainly used for settings, personalization, and cases where impact is directly recognizable. Changes take immediate effect.

**When to use:**

- Set something as active or inactive (e.g., dialog, feature toggle)
- Clearly show mode or state of a setting
- Change takes immediate effect without confirmation
- Toggle between two mutually exclusive states (on/off)
- Settings and personalization options
- Binary choices with immediate impact

**When to avoid:**

- ❌ Additional steps required for changes to take effect → Use Checkbox instead
- ❌ Requires confirmation or Submit button → Use Checkbox instead
- ❌ Unclear if showing state or action → Use Checkbox instead
- ❌ More than two options → Use Radio buttons or Select
- ❌ Part of form requiring submission → Use Checkbox

**Best practices:**

- ✅ Use for immediate on/off toggles
- ✅ Clearly show current mode or state
- ✅ Use for settings and personalization
- ✅ Ensure impact of toggle is directly recognizable
- ✅ Provide clear labels describing what is being toggled
- ✅ Show visual feedback for on/off states
- ✅ Changes take effect immediately without confirmation
- ⚠️ Don't use if change requires confirmation
- ⚠️ Ensure it's clear whether showing state or action
- ❌ Don't use as part of form requiring Submit

---

---

## Textarea

**Description:**
Textarea is an input component that allows users to enter multiple lines of unformatted text. Optionally includes a character counter displayed below the textarea.

**When to use:**

- Users need to enter multiple lines of text
- Users need to enter unformatted text across several lines
- Display character count (entered or remaining) with counter feature
- Long-form text input without formatting requirements

**When to avoid:**

- ❌ Users only need to enter a single line of text → Use input component instead
- ❌ Users need to enter formatted text → Use rich text editor instead

**Best practices:**

- ✅ Use for multi-line unformatted text entry
- ✅ Add counter to display number of characters entered or remaining
- ✅ Counter is displayed below the textarea
- ✅ Provide clear label describing expected content
- ⚠️ For single-line text, use input component instead
- ⚠️ For formatted text needs, use rich text editor

---

---

## Time

**Description:**
Time component is used to select a time value. Can choose hours, minutes, seconds, and/or period of day. Rarely used alone - typically paired with Time Picker pattern. Supports time selection, time ranges, and detailed durations.

**When to use:**

- User needs to select a specific time
- User needs to select time range (start time and end time)
- User needs to select detailed duration (e.g., 1 minute 30 seconds)
- Precise time selection required
- Used within Time Picker pattern

**When to avoid:**

- ❌ Selecting simple duration (15min, 30min, 1hr, 2hr) → Use Select component instead
- ❌ Selecting date and time together → Use Date Picker (date/time variant) instead
- ❌ Approximate time needed → Consider simpler selection method
- ❌ Only hour selection needed → Use Select with hour options

**Best practices:**

- ✅ Typically used within Time Picker pattern
- ✅ Can select hours, minutes, seconds, and period (AM/PM)
- ✅ Use for precise time selection
- ✅ Use two time pickers for time ranges (start and end)
- ✅ Support detailed duration selection (minutes and seconds)
- ✅ Provide clear labels for time fields
- ✅ Use 12-hour or 24-hour format based on locale
- ✅ Enable keyboard input for faster entry
- ⚠️ For simple durations, Select is more appropriate
- ⚠️ For date+time, use Date Picker instead
- ❌ Don't use alone - pair with Time Picker pattern

---

---

## Time Picker

**Description:**
Time Picker lets users select localized time using touch, mouse, or keyboard in 12/24-hour format. Users can type directly or use visual clock face for hours, minutes, seconds. Contains time input field and time picker popover with clock faces. Supports cozy and compact modes.

**When to use:**

- Users need to select a time
- Users need to select time range (use two time pickers for start and end)
- Users need to select specific duration (e.g., 1 minute 30 seconds)
- Visual clock face selection is helpful
- Precise time input required

**When to avoid:**

- ❌ Selecting simple duration (15min, 30min, 1hr) → Use Select instead
- ❌ Selecting date and time together → Use Date Picker (date/time variant)
- ❌ Only approximate time needed → Simpler selection method

**Best practices:**

- ✅ Time input field for direct entry or button to open popover
- ✅ Time picker popover with clock faces (hours, minutes, optional seconds)
- ✅ Hours clock face shows 12 or 24 hours based on format
- ✅ Optional seconds clock face (omit if not relevant)
- ✅ AM/PM switch using segmented button (12-hour format)
- ✅ Optional "Now" button (transparent icon button)
- ✅ Footer with Bar component and decisive buttons
- ✅ Cozy mode for larger touch targets, compact mode for dense UIs
- ✅ Mobile (size S): popover opens in subview, not below input field
- ✅ Two input methods: direct entry or clock face selection
- ✅ Enable keyboard, mouse, and touch input
- ✅ Use two time pickers for time ranges
- ⚠️ On mobile, time input field opens time input popover with touch keyboard
- ⚠️ Choose format (12/24-hour) based on locale
- ❌ Don't force clock face only - allow direct text entry

---

---

## Token

**Description:**
Tokens are small items of information (similar to tags) that visualize previously selected items. Tokenizer is the container that handles tokens. Tokens can be added, removed, selected, or deselected. Used only with Tokenizer container in multi-combo box, multi-input, or value help dialog.

**When to use:**

- Visualize previously selected items
- Display multiple selections as removable tokens
- Used within Tokenizer container
- Multi-combo box implementation
- Multi-input control
- Value help dialog with multiple selections

**When to avoid:**

- ❌ Without Tokenizer container → Tokens require Tokenizer
- ❌ Single selection controls → Use other selection methods
- ❌ Outside multi-combo box, multi-input, or value help dialog → Not supported
- ❌ Static tags that cannot be removed → Use Generic Tag instead

**Best practices:**

- ✅ Only use with Tokenizer as container
- ✅ Use Tokenizer only in multi-combo box, multi-input, or value help dialog
- ✅ Tokens can be added, removed, selected, or deselected
- ✅ Visualize selected items as small information chunks
- ✅ Allow users to remove tokens individually
- ✅ Provide clear visual feedback for selected/deselected state
- ✅ Similar to tags but specifically for selected items
- ⚠️ Tokens require Tokenizer container - cannot be used standalone
- ⚠️ Limited to specific components (multi-combo box, multi-input, value help dialog)
- ❌ Don't use outside supported components

---

---

## Tokenizer

**Description:**
Tokenizer is a container that wraps multiple tokens. Used standalone or within input controls such as Multi Input. In cozy mode, users can swipe tokens left or right. Container for managing multiple token selections.

**When to use:**

- Container for multiple tokens
- Within Multi Input control
- Within Multi Combobox control
- As standalone component for token management
- Managing multiple selected items as tokens
- Need to display and manage removable selections

**When to avoid:**

- ❌ Single selection → Use other single-selection controls
- ❌ Static non-removable items → Use List or other display component
- ❌ Without tokens → No need for tokenizer
- ❌ Simple tag display → Use Generic Tag component

**Best practices:**

- ✅ Container that wraps multiple tokens
- ✅ Use in Multi Input, Multi Combobox, or standalone
- ✅ Cozy mode: users can swipe tokens left or right
- ✅ Allows adding, removing, selecting, deselecting tokens
- ✅ Provides container for token management
- ✅ Supports keyboard navigation between tokens
- ✅ Clear visual separation between tokens
- ⚠️ In cozy mode, enable swipe gestures for token interaction
- ⚠️ Ensure adequate space for token display
- ❌ Don't use without actual tokens

---

---

## Upload Collection

**Description:**
Upload Collection allows users to upload single or multiple files from device (desktop, tablet, phone) to SAP app. Shows list of uploaded files that can be modified. Users can add/remove files and change file names. Typically displayed in Attachments tab but can appear elsewhere.

**When to use:**

- Show list of uploaded files that can be modified
- Allow users to add or remove files
- Allow users to change file names
- Multiple file uploads needed
- Display uploaded attachments
- Manage collection of uploaded files
- Replacing old sap.ca.ui.FileUpload control

**When to avoid:**

- ❌ User can upload only one file → Use File Uploader control instead
- ❌ Files are read-only (no modification needed) → Use simple List
- ❌ Simple file selection without upload management → Use File Uploader

**Best practices:**

- ✅ Use for modifiable list of uploaded files
- ✅ Allow adding and removing files
- ✅ Allow changing file names
- ✅ Support single or multiple file uploads
- ✅ Works on desktop, tablet, and phone
- ✅ Typically display in Attachments tab
- ✅ Show file metadata (name, size, type, date)
- ✅ Provide delete/remove action for each file
- ✅ Allow file name editing
- ✅ Show upload progress for new files
- ⚠️ For single file upload, use File Uploader instead
- ⚠️ Consider file size limits and validation
- ❌ Don't use for single-file-only scenarios

---

---
