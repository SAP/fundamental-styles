import calExampleHtml from "./cal.html?raw";
import yearsExampleHtml from "./years.example.html?raw";
import monthsExampleHtml from "./months.example.html?raw";
import daysExampleHtml from "./days.example.html?raw";
import '../../../src/bar.scss';
import '../../../src/dialog.scss';
import '../../../src/tile.scss';
import '../../../src/calendar.scss';
import '../../../src/button.scss';
import '../../../src/segmented-button.scss';
import '../../../src/icon.scss';
export default {
  title: 'Components/Calendar',
  parameters: {
    description: `
The calendar component allows users to navigate to a single date, multiple days, whole week(s), or a date range, showing all time-related data within a given timeframe.

It is usually paired with components: **Input Group** and **Popover** to comprise **Date Picker**, which is considered a design pattern as the date picker does not contain components of its own. The calendar component is rarely, if ever, used as a standalone component.

See **Date Picker** in the patterns section.

## Usage
**Use the calendar if:**

- You want the user to select a single date, multiple days, whole week(s), or a date range.
- You want to display multiple months or years at once.
- The calendar always needs to be visible and prominent.
- Users need to see the year, month, week, weekday and date at a glance to decide which date to select. For example, a user might want to select a date based on the day of the week.
- Users might be used to different locale-specific date formats (such as day-month-year or month-day-year). Enabling them to select the date visually using the calendar bypasses format-specific interpretation.
- You want to highlight special days or hide/disable specific days.

**Do not use the calendar if:**

- The user is a power user who has to enter a lot of data fast. In this case, use the **Date Picker** pattern instead.
- The keyboard is the primary input device. In this case, use the **Date Picker** pattern instead.
- The available screen space is limited and displaying the calendar permanently would take up too much space.


## Structure

The following classes describe the block structure of the calendar component.\n
- \`fd-calendar\` calendar's main container that defines the width of calendar
  - \`fd-calendar__navigation\` container used for grouping the row of navigation controls
    - \`fd-calendar__action\` calendar's action buttons
  - \`fd-calendar__content\` calendar's body container
    - \`fd-calendar__group\` groups calendar rows with the same destination
    - \`fd-calendar__row\` groups calendar grid items in one row
        - \`fd-calendar__item\` represents calendar grid item
          - \`fd-calendar__text-wrapper\` element wrapping the date
            - \`fd-calendar__text\` represents the date

## Modifiers

### General

These modifier classes are used to display the general look of the calendar component.\n
| Modifier class | Use to... |
| -------------:| :------------- |
| \`fd-calendar--mobile-landscape\` | Display calendar in landscape mode for mobile
| \`fd-calendar--mobile-portrait\` | Display calendar in portrait mode for mobile
| \`fd-calendar__content--months\` | Display calendar months
| \`fd-calendar__content--years\` | Display calendar years
| \`fd-calendar__content--screen-reader-only\` | Display calendar content when only readable to screen readers

### Navigation

These modifier classes are used to display various calendar navigation actions.\n
| Modifier class | Use to... |
| --------------:| :------------- |
| \`fd-calendar__navigation--main\` | Limit main navigation width on mobile devices in landscape mode and create space for an optional _Close_ button
| \`fd-calendar__action--arrow-left\` | Display _Previous_ navigation button
| \`fd-calendar__action--arrow-right\` | Display _Next_ navigation button

### Grid elements

These modifier classes are used to style various calendar grid elements.\n

| Modifier class | Use to... |
| -------------:| :-------------- |
| \`fd-calendar__item\` | Represent calendar cell
| \`fd-calendar__item--weekend\` | Style weekend days
| \`fd-calendar__item--other\` | Style days outside of current month
| \`fd-calendar__item--today\` | Style today, current month or year
| \`fd-calendar__item--range\` | Style calendar elements placed between start and end range
| \`fd-calendar__item--selected\` | Style calendar selected elements or start and end dates of range selection
| \`fd-calendar__item--side-helper\` | Style calendar grid side helpers like week number or day shortcut


### States

These modifier classes are used to style various states of calendar grid elements.\n

| Modifier class | Use to... |
| -------------:| :-------------- |
| \`is-focus\` | Style focused calendar elements
| \`is-hover\` | Style hovered calendar elements
| \`is-disabled\` | Style disabled calendar elements


### Legend
These modifier classes are used to style calendar grid elements with colors.\n
| Modifier class | Use to... |
| -------------:| :-------------- |
| \`fd-calendar__row--legend\` | Create a row space for legend items 
| \`fd-calendar--legend__item\` | Create a legend container 
| \` fd-calendar--legend__item--circle\` | Makes the legend item representation a circle
| \` fd-calendar--legend__item--square\` | Makes the legend item representation a square
| \` fd-calendar--legend__item--text\` | Adds a descriptive title to the legend item
| \` fd-calendar--legend__item--text-description\` | Adds any additional information to the legend item

### Special days
The classes \`fd-calendar__item--legend-1\` ... \`fd-calendar__item--legend-20\` are used to style calendar grid elements with colors, which are identified by numeric modifier classes.\n
`,
    tags: ['f3', 'a11y', 'theme']
  }
};
export const CalendarDays = () => calExampleHtml;
CalendarDays.parameters = {
  docs: {
    description: "Day Types"
  }
}

export const Days = () => daysExampleHtml;
Days.parameters = {
  docs: {
   description: {
      story: 'The calendar component can display days of the month by adding the `fd-calendar__content--dates` class to the container element.'
    }
  }
};
export const Months = () => monthsExampleHtml;
Months.parameters = {
  docs: {
   description: {
      story: 'The calendar component can display months in a year by adding the `fd-calendar__content--months` class to the container element.'
    }
  }
};
export const Years = () => yearsExampleHtml;
Years.parameters = {
  docs: {
   description: {
      story: 'The calendar component can display a range of years in various ways: short-term, long-term, year ranges etc. Add the `fd-calendar__content--years` class to the container element, and adjust the number of columns, rows, and content to fit your use case.'
    }
  }
};