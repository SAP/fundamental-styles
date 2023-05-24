import portraitMobileExampleHtml from "./portrait-mobile.example.html?raw";
import landscapeMobileExampleHtml from "./landscape-mobile.example.html?raw";
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
  - \`fd-calendar__header\` header section of calendar
    - \`fd-calendar__navigation\` container used for grouping the row of navigation controls
      - \`fd-calendar__action\` calendar's action buttons
      - \`fd-calendar__close-button--navigation\` close button inside navigation panel on mobile devices without dialog header
  - \`fd-calendar__content\` calendar's body container
    - \`fd-calendar__table\` groups table elements representing calendar items
      - \`fd-calendar__group\` groups calendar rows with the same destination
        - \`fd-calendar__row\` groups calendar grid items in one row
          - \`fd-calendar__item\` represents calendar grid item
            - \`fd-calendar__text\` represents content of calendar grid item
          - \`fd-calendar__special-day\` represents calendar grid item with a special marker

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
| \`fd-calendar__close-button--navigation\` | Place close button correctly inside calendar's navigation panel

### Grid elements

These modifier classes are used to style various calendar grid elements.\n

<div class="fd-calendar">
    | Modifier class | | Use to... |
    | -------------:| ------------- | :-------------- |
    | <code>fd-calendar__item</code> | <div class="fd-calendar__item" style="max-width: 2rem;"> <span class="fd-calendar__text" role="button">30</span> </div> | Represent calendar cell
    | <code>fd-calendar__item--weekend</code> | <div class="fd-calendar__item fd-calendar__item--weekend" style="max-width: 2rem;"><span class="fd-calendar__text" role="button">30</span></div> | Style weekend days
    | <code>fd-calendar__item--other-month</code> | <div class="fd-calendar__item fd-calendar__item--other-month" style="max-width: 2rem;"><span class="fd-calendar__text" role="button">30</span></div> | Style days outside of current month
    | <code>fd-calendar__item--current</code> | <div class="fd-calendar__item fd-calendar__item--current" style="max-width: 2rem;"><span class="fd-calendar__text" role="button">30</span></div> | Style current day, month or year
    | <code>fd-calendar__item--range</code> | <div class="fd-calendar__item fd-calendar__item--range" style="max-width: 2rem;"><span class="fd-calendar__text" role="button">30</span></div> | Style calendar elements placed between start and end range
    | <code>fd-calendar__item--side-helper</code> | <div class="fd-calendar__item fd-calendar__item--side-helper" style="max-width: 2rem;"><span class="fd-calendar__text" role="button">30</span></div> | Style calendar grid side helpers like week number or day shortcut
</div>

### States

These modifier classes are used to style various states of calendar grid elements.

<div class="fd-calendar fd-calendar__content">
    | Modifier class | | Use to... |
    | -------------:| ------------- | :-------------- |
    | <code>is-focus</code> | <div class="fd-calendar__item is-focus" style="max-width: 2rem;"><span class="fd-calendar__text" role="button">30</span></div> | Style focused calendar elements
    | <code>is-active</code> | <div class="fd-calendar__item is-active" style="max-width: 2rem;"><span class="fd-calendar__text" role="button">30</span></div> | Style selected calendar elements
    | <code>is-disabled</code> | <div class="docs-calendar-table__element fd-calendar__item is-disabled" style="max-width: 2rem;"><span class="fd-calendar__text" role="button">30</span></div> | Style disabled calendar elements
</div>

### Special days
These classes are used to style calendar grid elements with colors, which are identified by numeric modifier classes.\n

<div class="fd-calendar">
    | Modifier class | Color |
    |-:|:-|
    | <code>fd-calendar__special-day--1</code> |  <div  class="fd-calendar__item fd-calendar__special-day--1"><span class="fd-calendar__text" role="button">30</span></div>
    | <code>fd-calendar__special-day--2</code> | <div  class="fd-calendar__item fd-calendar__special-day--2"><span class="fd-calendar__text" role="button">30</span></div> |
    | <code>fd-calendar__special-day--3</code> | <div  class="fd-calendar__item fd-calendar__special-day--3"><span class="fd-calendar__text" role="button">30</span></div> |
    | <code>fd-calendar__special-day--4</code> | <div  class="fd-calendar__item fd-calendar__special-day--4"><span class="fd-calendar__text" role="button">30</span></div> |
    | <code>fd-calendar__special-day--5</code> | <div  class="fd-calendar__item fd-calendar__special-day--5"><span class="fd-calendar__text" role="button">30</span></div> |
    | <code>fd-calendar__special-day--6</code> | <div  class="fd-calendar__item fd-calendar__special-day--6"><span class="fd-calendar__text" role="button">30</span></div> |
    | <code>fd-calendar__special-day--7</code> | <div  class="fd-calendar__item fd-calendar__special-day--7"><span class="fd-calendar__text" role="button">30</span></div> |
    | <code>fd-calendar__special-day--8</code> | <div  class="fd-calendar__item fd-calendar__special-day--8"><span class="fd-calendar__text" role="button">30</span></div> |
    | <code>fd-calendar__special-day--9</code> | <div  class="fd-calendar__item fd-calendar__special-day--9"><span class="fd-calendar__text" role="button">30</span></div> |
    | <code>fd-calendar__special-day--10</code> | <div  class="fd-calendar__item fd-calendar__special-day--10"><span class="fd-calendar__text" role="button">30</span></div> |
    | <code>fd-calendar__special-day--11</code> | <div  class="fd-calendar__item fd-calendar__special-day--11"><span class="fd-calendar__text" role="button">30</span></div> |
    | <code>fd-calendar__special-day--12</code> | <div  class="fd-calendar__item fd-calendar__special-day--12"><span class="fd-calendar__text" role="button">30</span></div> |
    | <code>fd-calendar__special-day--13</code> | <div  class="fd-calendar__item fd-calendar__special-day--13"><span class="fd-calendar__text" role="button">30</span></div> |
    | <code>fd-calendar__special-day--14</code> | <div  class="fd-calendar__item fd-calendar__special-day--14"><span class="fd-calendar__text" role="button">30</span></div> |
    | <code>fd-calendar__special-day--15</code> | <div  class="fd-calendar__item fd-calendar__special-day--15"><span class="fd-calendar__text" role="button">30</span></div> |
    | <code>fd-calendar__special-day--16</code> | <div  class="fd-calendar__item fd-calendar__special-day--16"><span class="fd-calendar__text" role="button">30</span></div> |
    | <code>fd-calendar__special-day--17</code> | <div  class="fd-calendar__item fd-calendar__special-day--17"><span class="fd-calendar__text" role="button">30</span></div> |
    | <code>fd-calendar__special-day--18</code> | <div  class="fd-calendar__item fd-calendar__special-day--18"><span class="fd-calendar__text" role="button">30</span></div> |
    | <code>fd-calendar__special-day--19</code> | <div  class="fd-calendar__item fd-calendar__special-day--19"><span class="fd-calendar__text" role="button">30</span></div> |
    | <code>fd-calendar__special-day--20</code> | <div  class="fd-calendar__item fd-calendar__special-day--20"><span class="fd-calendar__text" role="button">30</span></div> |
</div>
`,
    tags: ['f3', 'a11y', 'theme']
  }
};
export const Days = () => daysExampleHtml;
Days.parameters = {
  docs: {
    story: {
      iframeHeight: 400
    },
    description: {
      story: 'The calendar component can display days of the month by adding the `fd-calendar__content--dates` class to the container element.'
    }
  }
};
export const Months = () => monthsExampleHtml;
Months.parameters = {
  docs: {
    story: {
      iframeHeight: 400
    },
    description: {
      story: 'The calendar component can display months in a year by adding the `fd-calendar__content--months` class to the container element.'
    }
  }
};
export const Years = () => yearsExampleHtml;
Years.parameters = {
  docs: {
    story: {
      iframeHeight: 700
    },
    description: {
      story: 'The calendar component can display a range of years in various ways: short-term, long-term, year ranges etc. Add the `fd-calendar__content--years` class to the container element, and adjust the number of columns, rows, and content to fit your use case.'
    }
  }
};
export const LandscapeMobile = () => landscapeMobileExampleHtml;
LandscapeMobile.storyName = 'Landscape (mobile)';
LandscapeMobile.parameters = {
  docs: {
    story: {
      iframeHeight: 500
    },
    description: {
      story: `
While using a mobile in landscape mode, the calendar component is displayed from a **Dialog** window, taking up the full width and height of the screen.

Note: For landscape mode, no dialog header element should be used. However, a dialog footer is optional.

**If the dismiss button is placed within the calendar’s navigation area, then:**

- \`fd-calendar__navigation\` requires the \`fd-calendar__navigation--main\` class.
- the dismiss button requires the \`fd-calendar__close-button--navigation\` class.
`
    }
  }
};
export const PortraitMobile = () => portraitMobileExampleHtml;
PortraitMobile.storyName = 'Portrait (mobile)';
PortraitMobile.parameters = {
  docs: {
    story: {
      iframeHeight: 500
    },
    description: {
      story: `
While using a mobile in portrait mode, the calendar component is displayed from a **Dialog** window, taking up the full width and height of the screen. It can be displayed in this way by adding the \`fd-calendar--mobile-portrait\` class to the container element.

Note: For portrait mode, dialog header should always be used and the footer remains optional.

`
    }
  }
};