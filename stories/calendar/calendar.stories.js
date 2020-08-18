import '../../dist/calendar.css';

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
- <code class="docs-code">fd-calendar</code> calendar's main container that defines the width of calendar
  - <code class="docs-code">fd-calendar\\_\\_header</code> header section of calendar
    - <code class="docs-code">fd-calendar\\_\\_navigation</code> container used for grouping the row of navigation controls
      - <code class="docs-code">fd-calendar\\_\\_action</code> calendar's action buttons
      - <code class="docs-code">fd-calendar\\_\\_close-button--navigation</code> close button inside navigation panel on mobile devices without dialog header
    - <code class="docs-code">fd-calendar\\_\\_close-button</code> button inside dialog header on mobile devices
  - <code class="docs-code">fd-calendar\\_\\_content</code> calendar's body container
    - <code class="docs-code">fd-calendar\\_\\_table</code> groups table elements representing calendar items
      - <code class="docs-code">fd-calendar\\_\\_group</code> groups calendar rows with the same destination
        - <code class="docs-code">fd-calendar\\_\\_row</code> groups calendar grid items in one row
          - <code class="docs-code">fd-calendar\\_\\_item</code> represents calendar grid item
            - <code class="docs-code">fd-calendar\\_\\_text</code> represents content of calendar grid item
          - <code class="docs-code">fd-calendar\\_\\_special-day</code> represents calendar grid item with a special marker

## Modifiers

### General

These modifier classes are used to display the general look of the calendar component.\n
| Modifier class | Use to... |
| -------------:| :------------- |
| <code class="docs-code">fd-calendar--compact</code> | Display calendar in compact mode
| <code class="docs-code">fd-calendar--mobile-landscape</code> | Display calendar in landscape mode for mobile
| <code class="docs-code">fd-calendar--mobile-portrait</code> | Display calendar in portrait mode for mobile
| <code class="docs-code">fd-calendar\\_\\_content--months</code> | Display calendar months
| <code class="docs-code">fd-calendar\\_\\_content--years</code> | Display calendar years
| <code class="docs-code">fd-calendar\\_\\_content--screen-reader-only</code> | Display calendar content when only readable to screen readers

### Navigation

These modifier classes are used to display various calendar navigation actions.\n
| Modifier class | Use to... |
| --------------:| :------------- |
| <code class="docs-code">fd-calendar\\_\\_navigation--main</code> | Limit main navigation width on mobile devices in landscape mode and create space for an optional _Close_ button
| <code class="docs-code">fd-calendar\\_\\_action--arrow-left</code> | Display _Previous_ navigation button
| <code class="docs-code">fd-calendar\\_\\_action--arrow-right</code> | Display _Next_ navigation button
| <code class="docs-code">fd-calendar\\_\\_close-button--navigation</code> | Place close button correctly inside calendar's navigation panel

### Grid elements

These modifier classes are used to style various calendar grid elements.\n

| Modifier class | | Use to... |
| -------------:| ------------- | :-------------- |
| <code class="docs-code">fd-calendar\\_\\_item</code> | <div class="fd-calendar__item" style="max-width: 2rem;"> <span class="fd-calendar__text" role="button">30</span> </div> | Represent calendar cell
| <code class="docs-code">fd-calendar\\_\\_item--weekend</code> | <div class="fd-calendar__item fd-calendar__item--weekend" style="max-width: 2rem;"><span class="fd-calendar__text" role="button">30</span></div> | Style weekend days
| <code class="docs-code">fd-calendar\\_\\_item--other-month</code> | <div class="fd-calendar__item fd-calendar__item--other-month" style="max-width: 2rem;"><span class="fd-calendar__text" role="button">30</span></div> | Style days outside of current month
| <code class="docs-code">fd-calendar\\_\\_item--current</code> | <div class="fd-calendar__item fd-calendar__item--current" style="max-width: 2rem;"><span class="fd-calendar__text" role="button">30</span></div> | Style current day, month or year
| <code class="docs-code">fd-calendar\\_\\_item--range</code> | <div class="fd-calendar__item fd-calendar__item--range" style="max-width: 2rem;"><span class="fd-calendar__text" role="button">30</span></div> | Style calendar elements placed between start and end range
| <code class="docs-code">fd-calendar\\_\\_item--side-helper</code> | <div class="fd-calendar__item fd-calendar__item--side-helper" style="max-width: 2rem;"><span class="fd-calendar__text" role="button">30</span></div> | Style calendar grid side helpers like week number or day shortcut

### States
These modifier classes are used to style various states of calendar grid elements.\n
| Modifier class | | Use to... |
| -------------:| ------------- | :-------------- |
| <code class="docs-code">is-focus</code> | <div class="fd-calendar__item is-focus" style="max-width: 2rem;"><span class="fd-calendar__text" role="button">30</span></div> | Style focused calendar elements
| <code class="docs-code">is-active</code> | <div class="fd-calendar__item is-active" style="max-width: 2rem;"><span class="fd-calendar__text" role="button">30</span></div> | Style selected calendar elements
| <code class="docs-code">is-disabled</code> | <div class="docs-calendar-table__element fd-calendar__item is-disabled" style="max-width: 2rem;"><span class="fd-calendar__text" role="button">30</span></div> | Style disabled calendar elements

### Special days
These classes are used to style calendar grid elements with colors, which are identified by numeric modifier classes.\n

| Modifier class | Color |
|-:|:-|
| <code class="docs-code">fd-calendar\\_\\_special-day--1</code>|  <div  class="fd-calendar__item fd-calendar__special-day--1"><span class="fd-calendar__text" role="button">30</span></div>
| <code class="docs-code">fd-calendar\\_\\_special-day--2</code> | <div  class="fd-calendar__item fd-calendar__special-day--2"><span class="fd-calendar__text" role="button">30</span></div> | 
| <code class="docs-code">fd-calendar\\_\\_special-day--3</code> | <div  class="fd-calendar__item fd-calendar__special-day--3"><span class="fd-calendar__text" role="button">30</span></div> | 
| <code class="docs-code">fd-calendar\\_\\_special-day--4</code> | <div  class="fd-calendar__item fd-calendar__special-day--4"><span class="fd-calendar__text" role="button">30</span></div> | 
| <code class="docs-code">fd-calendar\\_\\_special-day--5</code> | <div  class="fd-calendar__item fd-calendar__special-day--5"><span class="fd-calendar__text" role="button">30</span></div> | 
| <code class="docs-code">fd-calendar\\_\\_special-day--6</code> | <div  class="fd-calendar__item fd-calendar__special-day--6"><span class="fd-calendar__text" role="button">30</span></div> | 
| <code class="docs-code">fd-calendar\\_\\_special-day--7</code> | <div  class="fd-calendar__item fd-calendar__special-day--7"><span class="fd-calendar__text" role="button">30</span></div> | 
| <code class="docs-code">fd-calendar\\_\\_special-day--8</code> | <div  class="fd-calendar__item fd-calendar__special-day--8"><span class="fd-calendar__text" role="button">30</span></div> | 
| <code class="docs-code">fd-calendar\\_\\_special-day--9</code> | <div  class="fd-calendar__item fd-calendar__special-day--9"><span class="fd-calendar__text" role="button">30</span></div> | 
| <code class="docs-code">fd-calendar\\_\\_special-day--10</code> | <div  class="fd-calendar__item fd-calendar__special-day--10"><span class="fd-calendar__text" role="button">30</span></div> | 
| <code class="docs-code">fd-calendar\\_\\_special-day--11</code> | <div  class="fd-calendar__item fd-calendar__special-day--11"><span class="fd-calendar__text" role="button">30</span></div> | 
| <code class="docs-code">fd-calendar\\_\\_special-day--12</code> | <div  class="fd-calendar__item fd-calendar__special-day--12"><span class="fd-calendar__text" role="button">30</span></div> | 
| <code class="docs-code">fd-calendar\\_\\_special-day--13</code> | <div  class="fd-calendar__item fd-calendar__special-day--13"><span class="fd-calendar__text" role="button">30</span></div> | 
| <code class="docs-code">fd-calendar\\_\\_special-day--14</code> | <div  class="fd-calendar__item fd-calendar__special-day--14"><span class="fd-calendar__text" role="button">30</span></div> | 
| <code class="docs-code">fd-calendar\\_\\_special-day--15</code> | <div  class="fd-calendar__item fd-calendar__special-day--15"><span class="fd-calendar__text" role="button">30</span></div> | 
| <code class="docs-code">fd-calendar\\_\\_special-day--16</code> | <div  class="fd-calendar__item fd-calendar__special-day--16"><span class="fd-calendar__text" role="button">30</span></div> | 
| <code class="docs-code">fd-calendar\\_\\_special-day--17</code> | <div  class="fd-calendar__item fd-calendar__special-day--17"><span class="fd-calendar__text" role="button">30</span></div> | 
| <code class="docs-code">fd-calendar\\_\\_special-day--18</code> | <div  class="fd-calendar__item fd-calendar__special-day--18"><span class="fd-calendar__text" role="button">30</span></div> | 
| <code class="docs-code">fd-calendar\\_\\_special-day--19</code> | <div  class="fd-calendar__item fd-calendar__special-day--19"><span class="fd-calendar__text" role="button">30</span></div> | 
| <code class="docs-code">fd-calendar\\_\\_special-day--20</code> | <div  class="fd-calendar__item fd-calendar__special-day--20"><span class="fd-calendar__text" role="button">30</span></div> | 
`,
        tags: ['f3', 'a11y', 'theme']
    }
};

export const days = () => `
<div style="display: flex; justify-content: space-around;">
    <div class="fd-calendar">
        <header class="fd-calendar__header">
            <div class="fd-calendar__navigation">
                <div class="fd-calendar__action fd-calendar__action--arrow-left">
                    <button type="button" class="fd-button fd-button--transparent sap-icon--slim-arrow-left" aria-label="Previous"/>
                </div>
                <div class="fd-calendar__action">
                    <button type="button" class="fd-button fd-button--transparent">January</button>
                </div>
                <div class="fd-calendar__action">
                    <button type="button" class="fd-button fd-button--transparent">2018</button>
                </div>
                <div class="fd-calendar__action fd-calendar__action--arrow-right">
                    <button type="button" class="fd-button fd-button--transparent sap-icon--slim-arrow-right" aria-label="Next"/>
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
    </div>
</div>
`;

days.parameters = {
    docs: {
        iframeHeight: 400,
        storyDescription: 'The calendar component can display days of the month by adding the <code>fd-calendar\\_\\_content--dates</code> class to the container element.'
    }
};


export const months = () => `
    <div style="display: flex; justify-content: space-around;">
        <div class="fd-calendar">
            <header class="fd-calendar__header">
                <div class="fd-calendar__navigation">
                    <div class="fd-calendar__action fd-calendar__action--arrow-left">
                        <button type="button" class="fd-button fd-button--transparent sap-icon--slim-arrow-left" aria-label="Previous"/>
                    </div>
                    <div class="fd-calendar__action">
                        <button type="button" class="fd-button fd-button--transparent">January</button>
                    </div>
                    <div class="fd-calendar__action">
                        <button type="button" class="fd-button fd-button--transparent">2018</button>
                    </div>
                    <div class="fd-calendar__action fd-calendar__action--arrow-right">
                        <button type="button" class="fd-button fd-button--transparent sap-icon--slim-arrow-right" aria-label="Next"/>
                    </div>
                </div>
            </header>
            <div class="fd-calendar__content fd-calendar__content--months" id="1jjVw927">
                <table class="fd-calendar__table" role="grid">
                    <tbody class="fd-calendar__group">
                        <tr class="fd-calendar__row">
                            <td role="gridcell" class="fd-calendar__item fd-calendar__item--current">
                                <span class="fd-calendar__text" role="button">January</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">February</span>
                            </td>
                            <td aria-selected="true" role="gridcell" class="fd-calendar__item is-active">
                                <span class="fd-calendar__text" role="button">March</span>
                            </td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">April</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">May</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">June</span>
                            </td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">July</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">August</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">September</span>
                            </td>
                        </tr>
                        <tr class="fd-calendar__row">
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">October</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">November</span>
                            </td>
                            <td role="gridcell" class="fd-calendar__item">
                                <span class="fd-calendar__text" role="button">December</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">
                Use arrow keys to navigate dates
            </div>
        </div>
    </div>
`;

months.parameters = {
    docs: {
        iframeHeight: 400,
        storyDescription: 'The calendar component can display months in a year by adding the <code>fd-calendar\\_\\_content--months</code> class to the container element.'
    }
};

export const years = () => `
<div style="display: flex; justify-content: space-around; margin-bottom: 1rem; flex-wrap: wrap;">
    <div class="fd-calendar" style="margin-bottom: 1rem;">
    <header class="fd-calendar__header">
        <div class="fd-calendar__navigation">
			<div class="fd-calendar__action fd-calendar__action--arrow-left">
    			<button type="button" class="fd-button fd-button--transparent sap-icon--slim-arrow-left" aria-label="Previous"></button>
    		</div>
    		<div class="fd-calendar__action">
    			<button type="button" class="fd-button fd-button--transparent">January</button>
    		</div>
    		<div class="fd-calendar__action">
    			<button type="button" class="fd-button fd-button--transparent">2018</button>
    		</div>
    		<div class="fd-calendar__action fd-calendar__action--arrow-right">
    			<button type="button" class="fd-button fd-button--transparent sap-icon--slim-arrow-right" aria-label="Next"></button>
    		</div>
        </div>
    </header>
    <div class="fd-calendar__content fd-calendar__content--years " id="57YUZ521">
        <table class="fd-calendar__table" role="grid">
            <tbody class="fd-calendar__group">
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--current">
                        <span class="fd-calendar__text" role="button">2018</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2019</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2020</span></td>
                    <td role="gridcell" class="fd-calendar__item is-selected">
                        <span class="fd-calendar__text" role="button">2021</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2022</span></td>
                </tr>
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2023</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2024</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2025</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2026</span></td>
                    <td aria-selected="true" role="gridcell" class="fd-calendar__item is-active">
                        <span class="fd-calendar__text" role="button">2027</span></td>
                </tr>
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2028</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2029</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2030</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2031</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2032</span></td>
                </tr>
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2033</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2034</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2035</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2036</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2037</span></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
</div>
    <div class="fd-calendar" style="margin-bottom: 1rem;">
    <header class="fd-calendar__header">
        <div class="fd-calendar__navigation">
			<div class="fd-calendar__action fd-calendar__action--arrow-left">
    			<button type="button" class="fd-button fd-button--transparent sap-icon--slim-arrow-left" aria-label="Previous"></button>
    		</div>
    		<div class="fd-calendar__action">
    			<button type="button" class="fd-button fd-button--transparent">January</button>
    		</div>
    		<div class="fd-calendar__action">
    			<button type="button" class="fd-button fd-button--transparent">2018</button>
    		</div>
    		<div class="fd-calendar__action fd-calendar__action--arrow-right">
    			<button type="button" class="fd-button fd-button--transparent sap-icon--slim-arrow-right" aria-label="Next"></button>
    		</div>
        </div>
    </header>
    <div class="fd-calendar__content fd-calendar__content--years " id="57YUZ522">
        <table class="fd-calendar__table" role="grid">
            <tbody class="fd-calendar__group">
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2010 - 2020</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2021 - 2031</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2032 - 2042</span></td>
                </tr>
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2043 - 2053</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2054 - 2064</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2065 - 2075</span></td>
                </tr>
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--current">
                        <span class="fd-calendar__text" role="button">2076 - 2086</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2087 - 2097</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2098 - 2108</span></td>
                </tr>
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2109 - 2119</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2120 - 2130</span></td>
                    <td aria-selected="true" role="gridcell" class="fd-calendar__item is-active">
                        <span class="fd-calendar__text" role="button">2131 - 2141</span></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
</div>
</div>

<div style="display: flex; justify-content: space-around; flex-wrap: wrap;">
    <div class="fd-calendar" style="margin-bottom: 1rem;">
    <header class="fd-calendar__header">
        <div class="fd-calendar__navigation">
			<div class="fd-calendar__action fd-calendar__action--arrow-left">
    			<button type="button" class="fd-button fd-button--transparent sap-icon--slim-arrow-left" aria-label="Previous"></button>
    		</div>
    		<div class="fd-calendar__action">
    			<button type="button" class="fd-button fd-button--transparent">January</button>
    		</div>
    		<div class="fd-calendar__action">
    			<button type="button" class="fd-button fd-button--transparent">2018</button>
    		</div>
    		<div class="fd-calendar__action fd-calendar__action--arrow-right">
    			<button type="button" class="fd-button fd-button--transparent sap-icon--slim-arrow-right" aria-label="Next"></button>
    		</div>
        </div>
    </header>
    <div class="fd-calendar__content fd-calendar__content--years " id="57YUZ523">
        <table class="fd-calendar__table" role="grid">
            <tbody class="fd-calendar__group">
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2010 BC - 2020 BC</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2021 BC - 2031 BC</span></td>
                </tr>
                <tr class="fd-calendar__row">
                    <td aria-selected="true" role="gridcell" class="fd-calendar__item is-active">
                        <span class="fd-calendar__text" role="button">2032 BC - 2042 BC</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2043 BC - 2053 BC</span></td>
                </tr>
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__item fd-calendar__item--current">
                        <span class="fd-calendar__text" role="button">2054 BC - 2064 BC</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2065 BC - 2075 BC</span></td>
                </tr>
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2076 BC - 2086 BC</span></td>
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2087 BC - 2097 BC</span></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
</div>
    <div class="fd-calendar" style="margin-bottom: 1rem;">
    <header class="fd-calendar__header">
        <div class="fd-calendar__navigation">
			<div class="fd-calendar__action fd-calendar__action--arrow-left">
    			<button type="button" class="fd-button fd-button--transparent sap-icon--slim-arrow-left" aria-label="Previous"></button>
    		</div>
    		<div class="fd-calendar__action">
    			<button type="button" class="fd-button fd-button--transparent">January</button>
    		</div>
    		<div class="fd-calendar__action">
    			<button type="button" class="fd-button fd-button--transparent">2018</button>
    		</div>
    		<div class="fd-calendar__action fd-calendar__action--arrow-right">
    			<button type="button" class="fd-button fd-button--transparent sap-icon--slim-arrow-right" aria-label="Next"></button>
    		</div>
        </div>
    </header>
    <div class="fd-calendar__content fd-calendar__content--years " id="57YUZ524">
        <table class="fd-calendar__table" role="grid">
            <tbody class="fd-calendar__group">
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2010 Showa - 2020 Showa</span></td>
                </tr>
                <tr class="fd-calendar__row">
                    <td aria-selected="true" role="gridcell" class="fd-calendar__item fd-calendar__item--current is-active">
                        <span class="fd-calendar__text" role="button">2021 Showa - 2031 Showa</span></td>
                </tr>
                <tr class="fd-calendar__row is-active">
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2032 Showa - 2042 Showa</span></td>
                </tr>
                <tr class="fd-calendar__row">
                    <td role="gridcell" class="fd-calendar__item">
                        <span class="fd-calendar__text" role="button">2043 Showa - 2053 Showa</span></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
</div>
</div>
`;

years.parameters = {
    docs: {
        iframeHeight: 700,
        storyDescription: 'The calendar component can display a range of years in various ways: short-term, long-term, year ranges etc. Add the <code>fd-calendar\\_\\_content--years</code> class to the container element, and adjust the number of columns, rows, and content to fit your use case.'
    }
};

export const compact = () => `
<div style="display: flex; justify-content: space-around;">
    <div class="fd-calendar fd-calendar--compact">
        <header class="fd-calendar__header">
            <div class="fd-calendar__navigation">
                <div class="fd-calendar__action fd-calendar__action--arrow-left">
                    <button type="button" class="fd-button fd-button--compact fd-button--transparent sap-icon--slim-arrow-left" aria-label="Previous"></button>
                </div>
                <div class="fd-calendar__action">
                    <button type="button" class="fd-button fd-button--compact fd-button--transparent" aria-expanded="false" aria-controls="fm3cr569">January</button>
                </div>
                <div class="fd-calendar__action">
                    <button type="button" class="fd-button fd-button--compact fd-button--transparent" aria-expanded="true" aria-controls="bufLe361">2018</button>
                </div>
                <div class="fd-calendar__action fd-calendar__action--arrow-right">
                    <button type="button" class="fd-button fd-button--compact fd-button--transparent sap-icon--slim-arrow-right" aria-label="Next"></button>
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

compact.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: 'The calendar component can be displayed in compact mode by adding the <code>fd-calendar--compact</code> class to the container element.'
    }
};

export const LandscapeMobile = () => `
<div class="fd-dialog-docs-static fd-calendar-mobile-docs-static--landscape fd-dialog fd-dialog--active">
    <div class="fd-dialog__content fd-dialog__content--s fd-dialog__content--mobile">
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <div class="fd-calendar fd-calendar--mobile-landscape">
                <header class="fd-calendar__header">
                    <div class="fd-calendar__navigation fd-calendar__navigation--main">
                        <div class="fd-calendar__action fd-calendar__action--arrow-left">
                            <button type="button" class="fd-button fd-button--transparent sap-icon--slim-arrow-left" aria-label="Previous"></button>
                        </div>
                        <div class="fd-calendar__action">
                            <button type="button" class="fd-button fd-button--transparent">January</button>
                        </div>
                        <div class="fd-calendar__action">
                            <button type="button" class="fd-button fd-button--transparent">2018</button>
                        </div>
                        <div class="fd-calendar__action fd-calendar__action--arrow-right">
                            <button type="button" class="fd-button fd-button--transparent sap-icon--slim-arrow-right" aria-label="Next"></button>
                        </div>
                        <button type="button" class="fd-button fd-button--transparent fd-calendar__close-button fd-calendar__close-button--navigation" aria-label="Close"></button>
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
        storyDescription: `
While using a mobile in landscape mode, the calendar component is displayed from a **Dialog** window, taking up the full width and height of the screen.

Note: For landscape mode, no dialog header element should be used. However, a dialog footer is optional.
        
**If the** <code>fd-calendar\\_\\_close-button</code> **class is placed within the calendar’s navigation area, then:**
        
- <code class="docs-code">fd-calendar\\_\\_navigation</code> requires the <code class="docs-code">fd-calendar\\_\\_navigation--main</code> class.
- <code class="docs-code">fd-calendar\\_\\_close-button</code> requires the <code class="docs-code">fd-calendar\\_\\_close-button--navigation</code> class.
`
    }
};

export const PortraitMobile = () => `
<div class="fd-dialog-docs-static fd-calendar-mobile-docs-static--portrait fd-dialog fd-dialog--active">
    <div class="fd-dialog__content fd-dialog__content--s fd-dialog__content--mobile">
        <header class="fd-dialog__header fd-bar fd-bar--header fd-bar--cozy">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 class="fd-dialog__title">
                        Pick a date
                    </h3>
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button type="button" class="fd-button fd-button--transparent fd-calendar__close-button" aria-label="Close"></button>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <div class="fd-calendar fd-calendar--mobile-portrait">
                <header class="fd-calendar__header">
                    <div class="fd-calendar__navigation">
                        <div class="fd-segmented-button" role="group" aria-label="Switch Date/Time picker">
                            <button class="fd-button is-active">Date</button>
                            <button class="fd-button">Time</button>
                        </div>
                    </div>
                    <div class="fd-calendar__navigation">
                        <div class="fd-calendar__action fd-calendar__action--arrow-left">
                            <button type="button" class="fd-button fd-button--transparent sap-icon--slim-arrow-left" aria-label="Previous"></button>
                        </div>
                        <div class="fd-calendar__action">
                            <button type="button" class="fd-button fd-button--transparent">January</button>
                        </div>
                        <div class="fd-calendar__action">
                            <button type="button" class="fd-button fd-button--transparent">2018</button>
                        </div>
                        <div class="fd-calendar__action fd-calendar__action--arrow-right">
                            <button type="button" class="fd-button fd-button--transparent sap-icon--slim-arrow-right" aria-label="Next"></button>
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
    </div>
</div>
`;

PortraitMobile.storyName = 'Portrait (mobile)';
PortraitMobile.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `
While using a mobile in portrait mode, the calendar component is displayed from a **Dialog** window, taking up the full width and height of the screen. It can be displayed in this way by adding the <code>fd-calendar--mobile-portrait</code> class to the container element.

Note: For portrait mode, dialog header should always be used and the footer remains optional.
        
`
    }
};
