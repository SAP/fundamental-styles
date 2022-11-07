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
| \`fd-calendar--compact\` | Display calendar in compact mode
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

export const Days = () => `<div style="display: flex; justify-content: space-around;">
    <section class="fd-calendar">
        <header class="fd-calendar__header">
            <div class="fd-calendar__navigation">
                <div class="fd-calendar__action fd-calendar__action--arrow-left">
                    <button type="button" class="fd-button fd-button--transparent" aria-label="Previous">
                        <i class="sap-icon--slim-arrow-left"></i>
                    </button>
                </div>
                <div class="fd-calendar__action">
                    <button type="button" class="fd-button fd-button--transparent">January</button>
                </div>
                <div class="fd-calendar__action">
                    <button type="button" class="fd-button fd-button--transparent">2018</button>
                </div>
                <div class="fd-calendar__action fd-calendar__action--arrow-right">
                    <button type="button" class="fd-button fd-button--transparent" aria-label="Next">
                        <i class="sap-icon--slim-arrow-right"></i>
                    </button>
                </div>
            </div>
        </header>
        <div class="fd-calendar__content fd-calendar__content--dates" id="IO0cp341">
            <table class="fd-calendar__table" role="grid">
                <thead class="fd-calendar__group">
                    <tr class="fd-calendar__row">
                        <th class="fd-calendar__item fd-calendar__item--side-helper"></th>
                        <th class="fd-calendar__item fd-calendar__item--side-helper">
                            <span class="fd-calendar__text" role="button">S</span>
                        </th>
                        <th class="fd-calendar__item fd-calendar__item--side-helper">
                            <span class="fd-calendar__text" role="button">M</span>
                        </th>
                        <th class="fd-calendar__item fd-calendar__item--side-helper">
                            <span class="fd-calendar__text" role="button">T</span>
                        </th>
                        <th class="fd-calendar__item fd-calendar__item--side-helper">
                            <span class="fd-calendar__text" role="button">W</span>
                        </th>
                        <th class="fd-calendar__item fd-calendar__item--side-helper">
                            <span class="fd-calendar__text" role="button">T</span>
                        </th>
                        <th class="fd-calendar__item fd-calendar__item--side-helper">
                            <span class="fd-calendar__text" role="button">F</span>
                        </th>
                        <th class="fd-calendar__item fd-calendar__item--side-helper">
                            <span class="fd-calendar__text" role="button">S</span>
                        </th>
                    </tr>
                </thead>
                <tbody class="fd-calendar__group">
                    <tr class="fd-calendar__row">
                        <td class="fd-calendar__item fd-calendar__item--side-helper">
                            <span class="fd-calendar__text" role="button">1</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                            <span class="fd-calendar__text" role="button">30</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                            <span class="fd-calendar__text" role="button">31</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <span class="fd-calendar__text" role="button">1</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <span class="fd-calendar__text" role="button">2</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <span class="fd-calendar__text" role="button">3</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                            <span class="fd-calendar__text" role="button">4</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                            <span class="fd-calendar__text" role="button">5</span>
                        </td>
                    </tr>
                    <tr class="fd-calendar__row">
                        <td class="fd-calendar__item fd-calendar__item--side-helper">
                            <span class="fd-calendar__text" role="button">2</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <span class="fd-calendar__text" role="button">6</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <span class="fd-calendar__text" role="button">7</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <span class="fd-calendar__text" role="button">8</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <span class="fd-calendar__text" role="button">9</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <span class="fd-calendar__text" role="button">10</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                            <span class="fd-calendar__text" role="button">11</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                            <span class="fd-calendar__text" role="button">12</span>
                        </td>
                    </tr>
                    <tr class="fd-calendar__row">
                        <td class="fd-calendar__item fd-calendar__item--side-helper">
                            <span class="fd-calendar__text" role="button">3</span>
                        </td>
                        <td aria-selected="true" role="gridcell" class="fd-calendar__item is-active fd-calendar__item--range">
                            <span class="fd-calendar__text" role="button">13</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--range">
                            <span class="fd-calendar__text" role="button">14</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--range">
                            <span class="fd-calendar__text" role="button">15</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--range">
                            <span class="fd-calendar__text" role="button">16</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--range">
                            <span class="fd-calendar__text" role="button">17</span>
                        </td>
                        <td aria-selected="true" role="gridcell"
                            class="fd-calendar__item fd-calendar__item--weekend
                                fd-calendar__item--current is-active fd-calendar__special-day--1">
                            <span class="fd-calendar__text" role="button">18</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend fd-calendar__special-day--1">
                            <span class="fd-calendar__text" role="button">19</span>
                        </td>
                    </tr>
                    <tr class="fd-calendar__row">
                        <td class="fd-calendar__item fd-calendar__item--side-helper">
                            <span class="fd-calendar__text" role="button">4</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <span class="fd-calendar__text" role="button">20</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <span class="fd-calendar__text" role="button">21</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <span class="fd-calendar__text" role="button">22</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <span class="fd-calendar__text" role="button">23</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__special-day--3">
                            <span class="fd-calendar__text" role="button">24</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend fd-calendar__special-day--3">
                            <span class="fd-calendar__text" role="button">25</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                            <span class="fd-calendar__text" role="button">26</span>
                        </td>
                    </tr>
                    <tr class="fd-calendar__row">
                        <td class="fd-calendar__item fd-calendar__item--side-helper">
                            <span class="fd-calendar__text" role="button">5</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <span class="fd-calendar__text" role="button">27</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <span class="fd-calendar__text" role="button">28</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                            <span class="fd-calendar__text" role="button">1</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                            <span class="fd-calendar__text" role="button">2</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                            <span class="fd-calendar__text" role="button">3</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                            <span class="fd-calendar__text" role="button">4</span>
                        </td>
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                            <span class="fd-calendar__text" role="button">5</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
    </section>
</div>
`;

Days.parameters = {
    docs: {
        iframeHeight: 400,
        description: {
            story: 'The calendar component can display days of the month by adding the `fd-calendar__content--dates` class to the container element.'
        }
    }
};


export const Months = () => `<div style="display: flex; justify-content: space-around;">
        <section class="fd-calendar">
            <header class="fd-calendar__header">
                <div class="fd-calendar__navigation">
                    <div class="fd-calendar__action fd-calendar__action--arrow-left">
                        <button type="button" class="fd-button fd-button--transparent" aria-label="Previous">
                            <i class="sap-icon--slim-arrow-left"></i>
                        </button>
                    </div>
                    <div class="fd-calendar__action">
                        <button type="button" class="fd-button fd-button--transparent">2018</button>
                    </div>
                    <div class="fd-calendar__action fd-calendar__action--arrow-right">
                        <button type="button" class="fd-button fd-button--transparent" aria-label="Next">
                            <i class="sap-icon--slim-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </header>
            <div class="fd-calendar__content fd-calendar__content--months" id="1jjVw927">
                <table class="fd-calendar__table" role="grid">
                    <tbody class="fd-calendar__group">
                        <tr class="fd-calendar__row">
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--current">
                                <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                    <span class="fd-calendar__text">January</span>
                                </button>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                    <span class="fd-calendar__text">February</span>
                                </button>
                            </td>
                            <td aria-selected="true" role="gridcell" class="fd-calendar__item">
                                <button class="fd-button fd-button--transparent fd-calendar__item-button is-active" type="button">
                                    <span class="fd-calendar__text">March</span>
                                </button>
                            </td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td role="gridcell" class="fd-calendar__item">
                                <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                    <span class="fd-calendar__text">April</span>
                                </button>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                    <span class="fd-calendar__text">May</span>
                                </button>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                    <span class="fd-calendar__text">June</span>
                                </button>
                            </td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td role="gridcell" class="fd-calendar__item">
                                <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                    <span class="fd-calendar__text">July</span>
                                </button>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                    <span class="fd-calendar__text">August</span>
                                </button>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                    <span class="fd-calendar__text">September</span>
                                </button>
                            </td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td role="gridcell" class="fd-calendar__item">
                                <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                    <span class="fd-calendar__text">October</span>
                                </button>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                    <span class="fd-calendar__text">November</span>
                                </button>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                    <span class="fd-calendar__text">December</span>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">
                Use arrow keys to navigate dates
            </div>
        </section>
    </div>
`;

Months.parameters = {
    docs: {
        iframeHeight: 400,
        description: {
            story: 'The calendar component can display months in a year by adding the `fd-calendar__content--months` class to the container element.'
        }
    }
};

export const Years = () => `<div style="display: flex; justify-content: space-around; margin-bottom: 1rem; flex-wrap: wrap;">
    <section class="fd-calendar" style="margin-bottom: 1rem;">
        <header class="fd-calendar__header">
            <div class="fd-calendar__navigation">
                <div class="fd-calendar__action fd-calendar__action--arrow-left">
                    <button type="button" class="fd-button fd-button--transparent" aria-label="Previous">
                        <i class="sap-icon--slim-arrow-left"></i>
                    </button>
                </div>
                <div class="fd-calendar__action">
                    <button type="button" class="fd-button fd-button--transparent">2018 - 2037</button>
                </div>
                <div class="fd-calendar__action fd-calendar__action--arrow-right">
                    <button type="button" class="fd-button fd-button--transparent" aria-label="Next">
                        <i class="sap-icon--slim-arrow-right"></i>
                    </button>
                </div>
            </div>
        </header>
        <div class="fd-calendar__content fd-calendar__content--years " id="57YUZ521">
            <table class="fd-calendar__table" role="grid">
                <tbody class="fd-calendar__group">
                    <tr class="fd-calendar__row">
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--current">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2018</span>
                            </button>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2019</span>
                            </button>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2020</span>
                            </button>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2021</span>
                            </button>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2022</span>
                            </button>
                        </td>
                    </tr>
                    <tr class="fd-calendar__row">
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2023</span>
                            </button>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2024</span>
                            </button>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2025</span>
                            </button>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2026</span>
                            </button>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button is-active" type="button">
                                <span class="fd-calendar__text">2027</span>
                            </button>
                        </td>
                    </tr>
                    <tr class="fd-calendar__row">
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2028</span>
                            </button>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2029</span>
                            </button>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2030</span>
                            </button>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2031</span>
                            </button>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2032</span>
                            </button>
                        </td>
                    </tr>
                    <tr class="fd-calendar__row">
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2033</span>
                            </button>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2034</span>
                            </button>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2035</span>
                            </button>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2036</span>
                            </button>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2037</span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
    </section>
    <section class="fd-calendar" style="margin-bottom: 1rem;">
        <header class="fd-calendar__header">
            <div class="fd-calendar__navigation">
                <div class="fd-calendar__action fd-calendar__action--arrow-left">
                    <button type="button" class="fd-button fd-button--transparent" aria-label="Previous">
                        <i class="sap-icon--slim-arrow-left"></i>
                    </button>
                </div>
                <div class="fd-calendar__action fd-calendar__action--arrow-right">
                    <button type="button" class="fd-button fd-button--transparent" aria-label="Next">
                        <i class="sap-icon--slim-arrow-right"></i>
                    </button>
                </div>
            </div>
        </header>
        <div class="fd-calendar__content fd-calendar__content--years" id="57YUZ522">
            <table class="fd-calendar__table" role="grid">
                <tbody class="fd-calendar__group">
                    <tr class="fd-calendar__row">
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2010 - 2020</span>
                            </button>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2021 - 2031</span>
                            </button>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2032 - 2042</span>
                            </button>
                        </td>
                    </tr>
                    <tr class="fd-calendar__row">
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2043 - 2053</span>
                            </button>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2054 - 2064</span>
                            </button>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2065- 2075</span>
                            </button>
                        </td>
                    </tr>
                    <tr class="fd-calendar__row">
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--current">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2076 - 2086</span>
                            </button>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2087 - 2097</span>
                            </button>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2098 - 2108</span>
                            </button>
                        </td>
                    </tr>
                    <tr class="fd-calendar__row">
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2109 - 2119</span>
                            </button>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2120 - 2130</span>
                            </button>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button is-active" type="button">
                                <span class="fd-calendar__text">2131 - 2141</span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
    </section>
</div>

<div style="display: flex; justify-content: space-around; flex-wrap: wrap;">
    <section class="fd-calendar" style="margin-bottom: 1rem;">
        <header class="fd-calendar__header">
            <div class="fd-calendar__navigation">
                <div class="fd-calendar__action fd-calendar__action--arrow-left">
                    <button type="button" class="fd-button fd-button--transparent" aria-label="Previous">
                        <i class="sap-icon--slim-arrow-left"></i>
                    </button>
                </div>
                <div class="fd-calendar__action">
                    <button type="button" class="fd-button fd-button--transparent">2010 - 2097</button>
                </div>
                <div class="fd-calendar__action fd-calendar__action--arrow-right">
                    <button type="button" class="fd-button fd-button--transparent" aria-label="Next">
                        <i class="sap-icon--slim-arrow-right"></i>
                    </button>
                </div>
            </div>
        </header>
        <div class="fd-calendar__content fd-calendar__content--years" id="57YUZ523">
            <table class="fd-calendar__table" role="grid">
                <tbody class="fd-calendar__group">
                    <tr class="fd-calendar__row">
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2010 BC - 2020 BC</span>
                            </button>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2021 BC - 2031 BC</span>
                            </button>
                        </td>
                    </tr>
                    <tr class="fd-calendar__row">
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button is-active" type="button">
                                <span class="fd-calendar__text">2032 BC - 2042 BC</span>
                            </button>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2043 BC - 2053 BC</span>
                            </button>
                        </td>
                    </tr>
                    <tr class="fd-calendar__row">
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--current">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2054 BC - 2064 BC</span>
                            </button>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2065 BC - 2075 BC</span>
                            </button>
                        </td>
                    </tr>
                    <tr class="fd-calendar__row">
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2076 BC - 2086 BC</span>
                            </button>
                        </td>
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2087 BC - 2097 BC</span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
    </section>
    <section class="fd-calendar" style="margin-bottom: 1rem;">
        <header class="fd-calendar__header">
            <div class="fd-calendar__navigation">
                <div class="fd-calendar__action fd-calendar__action--arrow-left">
                    <button type="button" class="fd-button fd-button--transparent" aria-label="Previous">
                        <i class="sap-icon--slim-arrow-left"></i>
                    </button>
                </div>
                <div class="fd-calendar__action">
                    <button type="button" class="fd-button fd-button--transparent">2010 - 2053</button>
                </div>
                <div class="fd-calendar__action fd-calendar__action--arrow-right">
                    <button type="button" class="fd-button fd-button--transparent" aria-label="Next">
                        <i class="sap-icon--slim-arrow-right"></i>
                    </button>
                </div>
            </div>
        </header>
        <div class="fd-calendar__content fd-calendar__content--years " id="57YUZ524">
            <table class="fd-calendar__table" role="grid">
                <tbody class="fd-calendar__group">
                    <tr class="fd-calendar__row">
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2010 Showa - 2020 Showa</span>
                            </button>
                        </td>
                    </tr>
                    <tr class="fd-calendar__row">
                        <td role="gridcell" class="fd-calendar__item fd-calendar__item--current">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button is-active" type="button">
                                <span class="fd-calendar__text">2021 Showa - 2031 Showa</span>
                            </button>
                        </td>
                    </tr>
                    <tr class="fd-calendar__row is-active">
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2032 Showa - 2042 Showa</span>
                            </button>
                        </td>
                    </tr>
                    <tr class="fd-calendar__row">
                        <td role="gridcell" class="fd-calendar__item">
                            <button class="fd-button fd-button--transparent fd-calendar__item-button" type="button">
                                <span class="fd-calendar__text">2043 Showa - 2053 Showa</span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
    </section>
</div>
`;

Years.parameters = {
    docs: {
        iframeHeight: 700,
        description: {
            story: 'The calendar component can display a range of years in various ways: short-term, long-term, year ranges etc. Add the `fd-calendar__content--years` class to the container element, and adjust the number of columns, rows, and content to fit your use case.'
        }
    }
};

export const Compact = () => `<div style="display: flex; justify-content: space-around;">
    <div class="fd-calendar fd-calendar--compact">
        <header class="fd-calendar__header">
            <div class="fd-calendar__navigation">
                <div class="fd-calendar__action fd-calendar__action--arrow-left">
                    <button type="button" class="fd-button fd-button--compact fd-button--transparent" aria-label="Previous">
                        <i class="sap-icon--slim-arrow-left"></i>
                    </button>
                </div>
                <div class="fd-calendar__action">
                    <button type="button" class="fd-button fd-button--compact fd-button--transparent"
                        aria-expanded="false">January</button>
                </div>
                <div class="fd-calendar__action">
                    <button type="button" class="fd-button fd-button--compact fd-button--transparent"
                        aria-expanded="true">2018</button>
                </div>
                <div class="fd-calendar__action fd-calendar__action--arrow-right">
                    <button type="button" class="fd-button fd-button--compact fd-button--transparent" aria-label="Next">
                        <i class="sap-icon--slim-arrow-right"></i>
                    </button>
                </div>
            </div>
        </header>
        <div class="fd-calendar__content fd-calendar__content--dates" id="IO0cp341">
            <table class="fd-calendar__table" role="grid">
                <thead class="fd-calendar__group">
                <tr class="fd-calendar__row">
                    <th class="fd-calendar__item fd-calendar__item--side-helper"></th>
                    <th class="fd-calendar__item fd-calendar__item--side-helper">
                        <span class="fd-calendar__text" role="button">S</span>
                    </th>
                    <th class="fd-calendar__item fd-calendar__item--side-helper">
                        <span class="fd-calendar__text" role="button">M</span>
                    </th>
                    <th class="fd-calendar__item fd-calendar__item--side-helper">
                        <span class="fd-calendar__text" role="button">T</span>
                    </th>
                    <th class="fd-calendar__item fd-calendar__item--side-helper">
                        <span class="fd-calendar__text" role="button">W</span>
                    </th>
                    <th class="fd-calendar__item fd-calendar__item--side-helper">
                        <span class="fd-calendar__text" role="button">T</span>
                    </th>
                    <th class="fd-calendar__item fd-calendar__item--side-helper">
                        <span class="fd-calendar__text" role="button">F</span>
                    </th>
                    <th class="fd-calendar__item fd-calendar__item--side-helper">
                        <span class="fd-calendar__text" role="button">S</span>
                    </th>
                </tr>
                </thead>
                <tbody class="fd-calendar__group">
                <tr class="fd-calendar__row">
                    <td class="fd-calendar__item fd-calendar__item--side-helper">
                        <span class="fd-calendar__text" role="button">1</span>
                    </td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                        <span class="fd-calendar__text" role="button">30</span></td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                        <span class="fd-calendar__text" role="button">31</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">1</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">3</span></td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                        <span class="fd-calendar__text" role="button">4</span></td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                        <span class="fd-calendar__text" role="button">5</span></td>
                </tr>
                <tr class="fd-calendar__row">
                    <td class="fd-calendar__item fd-calendar__item--side-helper">
                        <span class="fd-calendar__text" role="button">2</span>
                    </td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">6</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">7</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">8</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">9</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">10</span></td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                        <span class="fd-calendar__text" role="button">11</span></td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                        <span class="fd-calendar__text" role="button">12</span></td>
                </tr>
                <tr class="fd-calendar__row">
                    <td class="fd-calendar__item fd-calendar__item--side-helper">
                        <span class="fd-calendar__text" role="button">3</span>
                    </td>
                    <td aria-selected="true" role="gridcell" class="fd-calendar__item is-active fd-calendar__item--range">
                        <span class="fd-calendar__text" role="button">13</span></td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--range">
                        <span class="fd-calendar__text" role="button">14</span></td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--range">
                        <span class="fd-calendar__text" role="button">15</span></td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--range">
                        <span class="fd-calendar__text" role="button">16</span></td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--range">
                        <span class="fd-calendar__text" role="button">17</span></td>
                    <td aria-selected="true" role="gridcell" class="fd-calendar__item fd-calendar__item--weekend fd-calendar__item--current is-active fd-calendar__special-day--1">
                        <span class="fd-calendar__text" role="button">18</span></td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend fd-calendar__special-day--1">
                        <span class="fd-calendar__text" role="button">19</span></td>
                </tr>
                <tr class="fd-calendar__row">
                    <td class="fd-calendar__item fd-calendar__item--side-helper">
                        <span class="fd-calendar__text" role="button">4</span>
                    </td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">20</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">21</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">22</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">23</span></td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__special-day--3">
                        <span class="fd-calendar__text" role="button">24</span></td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend fd-calendar__special-day--3">
                        <span class="fd-calendar__text" role="button">25</span></td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                        <span class="fd-calendar__text" role="button">26</span></td>
                </tr>
                <tr class="fd-calendar__row">
                    <td class="fd-calendar__item fd-calendar__item--side-helper">
                        <span class="fd-calendar__text" role="button">5</span>
                    </td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">27</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">28</span></td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                        <span class="fd-calendar__text" role="button">1</span></td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                        <span class="fd-calendar__text" role="button">2</span></td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                        <span class="fd-calendar__text" role="button">3</span></td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                        <span class="fd-calendar__text" role="button">4</span></td>
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                        <span class="fd-calendar__text" role="button">5</span></td>
                </tr>
                </tbody>
            </table>
        </div>
        <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
    </div>
</div>
`;

Compact.parameters = {
    docs: {
        iframeHeight: 300,
        description: {
            story: 'The calendar component can be displayed in compact mode by adding the `fd-calendar--compact` class to the container element.'
        }
    }
};

export const LandscapeMobile = () => `<div class="fd-dialog-docs-static fd-calendar-mobile-docs-static--landscape fd-dialog fd-dialog--active">
    <div class="fd-dialog__content fd-dialog__content--s fd-dialog__content--mobile">
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <div class="fd-calendar fd-calendar--mobile-landscape">
                <header class="fd-calendar__header">
                    <div class="fd-calendar__navigation fd-calendar__navigation--main">
                        <div class="fd-calendar__action fd-calendar__action--arrow-left">
                            <button type="button" class="fd-button fd-button--transparent" aria-label="Previous">
                                <i class="sap-icon--slim-arrow-left"></i>
                            </button>
                        </div>
                        <div class="fd-calendar__action">
                            <button type="button" class="fd-button fd-button--transparent">January</button>
                        </div>
                        <div class="fd-calendar__action">
                            <button type="button" class="fd-button fd-button--transparent">2018</button>
                        </div>
                        <div class="fd-calendar__action fd-calendar__action--arrow-right">
                            <button type="button" class="fd-button fd-button--transparent" aria-label="Next">
                                <i class="sap-icon--slim-arrow-right"></i>
                            </button>
                        </div>
                        <button type="button" class="fd-button fd-button--transparent fd-calendar__close-button--navigation" aria-label="Close">
                            <i class="sap-icon--decline"></i>
                        </button>
                    </div>
                </header>
                <div class="fd-calendar__content fd-calendar__content--dates" id="Xh8Gr283">
                    <table class="fd-calendar__table" role="grid">
                        <thead class="fd-calendar__group">
                        <tr class="fd-calendar__row">
                            <th class="fd-calendar__item fd-calendar__item--side-helper"></th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">S</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">M</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">T</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">W</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">T</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">F</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">S</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody class="fd-calendar__group">
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">1</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">29</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">30</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">31</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">1</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">3</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">4</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">2</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">5</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--current">
                                <span class="fd-calendar__text" role="button">6</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">7</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">8</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">9</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">10</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">11</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">3</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">12</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">13</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">14</span></td>
                            <td aria-selected="true" role="gridcell" class="fd-calendar__item is-active">
                                <span class="fd-calendar__text" role="button">15</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">16</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">17</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">18</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">4</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">19</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">20</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">21</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">22</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">23</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">24</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">25</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">5</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">26</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">27</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">28</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">29</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">30</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">1</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">2</span></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer fd-bar--cozy">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--emphasized">
                        OK
                    </button>
                </div>
            </div>
        </footer>
    </div>
</div>
`;
LandscapeMobile.storyName = 'Landscape (mobile)';
LandscapeMobile.parameters = {
    docs: {
        iframeHeight: 500,
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

export const PortraitMobile = () => `<div class="fd-dialog-docs-static fd-calendar-mobile-docs-static--portrait fd-dialog fd-dialog--active">
    <section class="fd-dialog__content fd-dialog__content--s fd-dialog__content--mobile" style="width: 375px; height: 600px;">
        <header class="fd-dialog__header fd-bar fd-bar--header fd-bar--cozy">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 class="fd-title fd-title--h5">
                        Pick a date
                    </h3>
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button type="button" class="fd-button fd-button--transparent" aria-label="Close">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <div class="fd-calendar fd-calendar--mobile-portrait">
                <header class="fd-calendar__header">
                    <div class="fd-calendar__navigation">
                        <div class="fd-segmented-button" role="group" aria-label="Switch Date/Time picker">
                            <button class="fd-button fd-button--toggled" aria-pressed="true">Date</button>
                            <button class="fd-button" aria-pressed="false">Time</button>
                        </div>
                    </div>
                    <div class="fd-calendar__navigation">
                        <div class="fd-calendar__action fd-calendar__action--arrow-left">
                            <button type="button" class="fd-button fd-button--transparent" aria-label="Previous">
                                <i class="sap-icon--slim-arrow-left"></i>
                            </button>
                        </div>
                        <div class="fd-calendar__action">
                            <button type="button" class="fd-button fd-button--transparent">January</button>
                        </div>
                        <div class="fd-calendar__action">
                            <button type="button" class="fd-button fd-button--transparent">2018</button>
                        </div>
                        <div class="fd-calendar__action fd-calendar__action--arrow-right">
                            <button type="button" class="fd-button fd-button--transparent" aria-label="Next">
                                <i class="sap-icon--slim-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </header>
                <div class="fd-calendar__content fd-calendar__content--dates" id="Xh8Gr283">
                    <table class="fd-calendar__table" role="grid">
                        <thead class="fd-calendar__group">
                        <tr class="fd-calendar__row">
                            <th class="fd-calendar__item fd-calendar__item--side-helper"></th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">S</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">M</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">T</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">W</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">T</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">F</span>
                            </th>
                            <th class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">S</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody class="fd-calendar__group">
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">1</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">29</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">30</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">31</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">1</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">2</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">3</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">4</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">2</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">5</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--current">
                                <span class="fd-calendar__text" role="button">6</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">7</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">8</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">9</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">10</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">11</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">3</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">12</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">13</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">14</span></td>
                            <td aria-selected="true" role="gridcell" class="fd-calendar__item is-active">
                                <span class="fd-calendar__text" role="button">15</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">16</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">17</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">18</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">4</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">19</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">20</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">21</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">22</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">23</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">24</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                                <span class="fd-calendar__text" role="button">25</span></td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td class="fd-calendar__item fd-calendar__item--side-helper">
                                <span class="fd-calendar__text" role="button">5</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">26</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">27</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">28</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">29</span></td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">30</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">1</span></td>
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                                <span class="fd-calendar__text" role="button">2</span></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
            </div>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer fd-bar--cozy">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--emphasized">
                        OK
                    </button>
                </div>
            </div>
        </footer>
    </section>
</div>
`;

PortraitMobile.storyName = 'Portrait (mobile)';
PortraitMobile.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `
While using a mobile in portrait mode, the calendar component is displayed from a **Dialog** window, taking up the full width and height of the screen. It can be displayed in this way by adding the \`fd-calendar--mobile-portrait\` class to the container element.

Note: For portrait mode, dialog header should always be used and the footer remains optional.

`
        }
    }
};
