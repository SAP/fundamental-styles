# Component Guidance - Index

Complete SAP Fiori Design Guidelines for all 87 fundamental-styles components, organized by category for optimal AI agent performance.

## How to Use

The component guidance is split into 6 focused categories. AI agents automatically load the relevant category based on your question.

## Categories

### 📝 Forms & Inputs (26 components)
**File:** `component-guidance-forms.md` (37KB)

Form controls and input components for data entry.

**Components:** Checkbox, Combobox Input, Date Picker, Fieldset, File Uploader, Form Grid, Form Group, Form Header, Form Item, Form Label, Form Message, Input, Input Group, Multi ComboBox, Multi Input, Radio, Select, Slider, Step Input, Switch, Textarea, Time, Time Picker, Token, Tokenizer, Upload Collection

---

### 🧭 Navigation (8 components)
**File:** `component-guidance-navigation.md` (12KB)

Navigation and wayfinding components.

**Components:** Breadcrumb, Icon Tab Bar, Link, Menu, Pagination, Shellbar, Toolbar, Vertical Navigation

---

### 📐 Layout & Containers (11 components)
**File:** `component-guidance-layout.md` (17KB)

Layout structures and container components.

**Components:** Action Bar, Bar, Card, Dynamic Page, Dynamic Side Content, Flexible Column Layout, Layout Panel, Panel, Settings, Tool Layout, Wizard

---

### 📊 Data Display (23 components)
**File:** `component-guidance-data.md` (33KB)

Components for displaying collections and structured data.

**Components:** Avatar, Avatar Group, Calendar, Carousel, Feed Input, Feed List Item, Generic Tag, Generic Tile, Grid List, Icon, Illustrated Message, Info Label, List, Micro Process Flow, Object Identifier, Object List, Object Marker, Object Number, Object Status, Table, Title, Tree, Variant Management

---

### 💬 Feedback & Status (15 components)
**File:** `component-guidance-feedback.md` (22KB)

Components for user feedback, messages, and status indication.

**Components:** Action Sheet, Busy Indicator, Contextual Menu, Message Box, Message Page, Message Popover, Message Strip, Message Toast, Notification, Popover, Progress Indicator, Quick View, Rating Indicator, Skeleton, Status Indicator

---

### ⚡ Actions & Controls (4 components)
**File:** `component-guidance-actions.md` (8KB)

Interactive elements and controls for user actions.

**Components:** Button, Product Switch, Scrollbar, User Menu

---

## Quick Reference

### When to use what?

**Need a form input?** → Check `component-guidance-forms.md`
- Single-line text: Input
- Multi-line text: Textarea
- Date selection: Date Picker
- Time selection: Time Picker
- Dropdown: Select or Combobox Input
- Multi-select: Multi ComboBox or Multi Input
- Yes/No choice: Switch or Checkbox
- Multiple independent options: Checkbox
- Single option from list: Radio

**Need navigation?** → Check `component-guidance-navigation.md`
- Page-to-page: Link
- Hierarchical: Vertical Navigation or Breadcrumb
- Top-level: Shellbar
- Actions: Toolbar or Menu

**Need layout?** → Check `component-guidance-layout.md`
- Page structure: Dynamic Page
- Multi-column: Flexible Column Layout
- Grouping content: Card or Panel
- Side content: Dynamic Side Content

**Need to show data?** → Check `component-guidance-data.md`
- Tabular: Table
- Hierarchical: Tree
- Simple list: List
- User/product representation: Avatar
- Calendar dates: Calendar

**Need user feedback?** → Check `component-guidance-feedback.md`
- Inline message: Message Strip
- Modal dialog: Message Box
- Toast notification: Message Toast
- Loading state: Busy Indicator or Skeleton
- Status: Status Indicator or Progress Indicator

**Need interactive controls?** → Check `component-guidance-actions.md`
- Trigger action: Button
- Switch products: Product Switch
- User options: User Menu

---

## Installation

```bash
npx skills add SAP/fundamental-styles
```

All category files are installed automatically with a single command.

---

## Component Count by Category

| Category | Components | File Size |
|----------|-----------|-----------|
| Forms & Inputs | 26 | 37KB |
| Data Display | 23 | 33KB |
| Feedback & Status | 15 | 22KB |
| Layout & Containers | 11 | 17KB |
| Navigation | 8 | 12KB |
| Actions & Controls | 4 | 8KB |
| **Total** | **87** | **129KB** |

---

## Why Split into Categories?

**Benefits:**
- ✅ Faster AI responses (loads 8-37KB instead of 130KB)
- ✅ More focused, relevant guidance
- ✅ Better token efficiency
- ✅ Easier maintenance
- ✅ Still one install command for users

**For AI Agents:**
Each category is optimally sized (8-37KB) for quick loading and processing.

**For Users:**
No extra work - install once, get all 87 components across all categories.
