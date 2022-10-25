import '../../../src/calendar.scss';
import '../../../src/input-group.scss';
import '../../../src/popover.scss';
import '../../../src/title.scss';
import '../../../src/button.scss';
import '../../../src/input.scss';
import '../../../src/form-label.scss';
import '../../../src/icon.scss';
import '../../../src/bar.scss';
import '../../../src/dialog.scss';
import '../../../src/segmented-button.scss';
export default {
    title: 'Patterns/Date Picker',
    parameters: {
        description: `The date picker provides responsive behavior that allows for simple operation on all devices. It is smaller in compact mode and provides a touch-friendly size in cozy mode.

The date picker lets users select a localized date using touch, mouse, or keyboard input.
      
It consists of two parts:
      
- **Input Field**: The user can enter a date directly or select it using the date picker
      
- **Date Picker**: The user can see a day view, month view, year view, or year ranges.
      

##Usage

Use the **DatePicker** if:
      
-    The user needs to enter a single date or a date range.
-    The user needs to navigate directly from one month or year to another.
      `,
        tags: ['f3', 'a11y', 'theme']
    }
};

export const DefaultAndCompactSizes = () => `<div style="display:flex;justify-content:space-around;height:400px">
<div class="fd-docs-date-picker">
  <div class="fd-popover">
    <div class="fd-popover__control is-expanded">
      <label class="fd-form-label" for="defaultDatepicker">Default</label>
      <div class="fd-input-group">
        <input id="defaultDatepicker" class="fd-input fd-input-group__input" type="text" value="" placeholder="Pick a date"
          onfocus="
            setElAttr('Itcgq828', 'aria-hidden', 'false');
            setElAttr('kd9sg8dihf', 'aria-expanded', 'true');
          "
          >
        <span class="fd-input-group__addon fd-input-group__addon--button">
        <button
          id="kd9sg8dihf"
          onclick="
              toggleElAttrs('Itcgq828', ['aria-hidden']);
              toggleElAttrs('kd9sg8dihf', ['aria-expanded']);
          "
          class="fd-input-group__button fd-popover__control fd-button fd-button--transparent"
          aria-controls="Itcgq828"
          aria-expanded="true"
          aria-haspopup="true"
          aria-label="Choose Date">
              <i class="sap-icon--appointment-2"></i>
          </button>
        </span>
      </div>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false" id="Itcgq828">
      <div class="fd-calendar">
        <div class="fd-calendar__header">
          <div class="fd-calendar__navigation">
            <div class="fd-calendar__action">
              <button class="fd-button fd-button--transparent" aria-label="Previous" aria-disabled="true">
                  <i class="sap-icon--slim-arrow-left"></i>
              </button>
            </div>
            <div class="fd-calendar__action">
              <button class="fd-button fd-button--transparent" aria-expanded="false">September</button>
            </div>
            <div class="fd-calendar__action">
              <button class="fd-button fd-button--transparent" aria-expanded="false">2018</button>
            </div>
            <div class="fd-calendar__action">
              <button class="fd-button fd-button--transparent" aria-label="Next">
                  <i class="sap-icon--slim-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="fd-calendar__content">
          <div class="fd-calendar__dates" id="YeayX297" aria-hidden="false">
            <table class="fd-calendar__table" role="grid">
              <thead class="fd-calendar__group">
                <tr class="fd-calendar__row">
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
                  <td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
                    <span class="fd-calendar__text">29</span>
                  </td>
                  <td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
                    <span class="fd-calendar__text">30</span>
                  </td>
                  <td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
                    <span class="fd-calendar__text">31</span>
                  </td>
                  <td class="fd-calendar__item is-disabled" role="gridcell">
                    <span class="fd-calendar__text">1</span>
                  </td>
                  <td class="fd-calendar__item is-disabled" role="gridcell">
                    <span class="fd-calendar__text">2</span>
                  </td>
                  <td class="fd-calendar__item is-disabled" role="gridcell">
                    <span class="fd-calendar__text">3</span>
                  </td>
                  <td class="fd-calendar__item is-disabled" role="gridcell">
                    <span class="fd-calendar__text">4</span>
                  </td>
                </tr>
                <tr class="fd-calendar__row">
                  <td class="fd-calendar__item is-disabled" role="gridcell">
                    <span class="fd-calendar__text">5</span>
                  </td>
                  <td class="fd-calendar__item fd-calendar__item--current" role="gridcell">
                    <span class="fd-calendar__text">6</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">7</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">8</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">9</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">10</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">11</span>
                  </td>
                </tr>
                <tr class="fd-calendar__row">
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">12</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">13</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">14</span>
                  </td>
                  <td class="fd-calendar__item is-selected" role="gridcell">
                    <span class="fd-calendar__text">15</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">16</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">17</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">18</span>
                  </td>
                </tr>
                <tr class="fd-calendar__row">
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">19</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">20</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">21</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">22</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">23</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">24</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">25</span>
                  </td>
                </tr>
                <tr class="fd-calendar__row">
                  <td class="fd-calendar__item is-blocked" role="gridcell">
                    <span class="fd-calendar__text">26</span>
                  </td>
                  <td class="fd-calendar__item is-blocked" role="gridcell">
                    <span class="fd-calendar__text">27</span>
                  </td>
                  <td class="fd-calendar__item is-blocked" role="gridcell">
                    <span class="fd-calendar__text">28</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">29</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">30</span>
                  </td>
                  <td class="fd-calendar__item fd-calendar__item--other-month" role="gridcell">
                    <span class="fd-calendar__text">1</span>
                  </td>
                  <td class="fd-calendar__item fd-calendar__item--other-month" role="gridcell">
                    <span class="fd-calendar__text">2</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<br>
<div class="fd-docs-date-picker">
  <div class="fd-popover">
    <div class="fd-popover__control is-expanded">
      <label class="fd-form-label" for="compactDatepicker">Compact</label>
      <div class="fd-input-group">
        <input id="compactDatepicker" type="text" value="" placeholder="Pick a date"
          class="fd-input fd-input--compact fd-input-group__input"
          onfocus="
            setElAttr('Itcgq82', 'aria-hidden', 'false');
            setElAttr('fmaiot78aiwohf', 'aria-expanded', 'true');
          ">
        <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--compact">
        <button class="fd-button fd-button--transparent fd-button--compact fd-input-group__button fd-popover__control"
          id="fmaiot78aiwohf"
          onclick="
              toggleElAttrs('Itcgq82', ['aria-hidden']);
              toggleElAttrs('fmaiot78aiwohf', ['aria-expanded']);
          "
          aria-controls="Itcgq82"
          aria-expanded="true"
          aria-haspopup="true"
          aria-label="Choose Date">
              <i class="sap-icon--appointment-2"></i>
          </button>
        </span>
      </div>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false" id="Itcgq82">
      <div class="fd-calendar fd-calendar--compact">
        <div class="fd-calendar__header">
          <div class="fd-calendar__navigation">
            <div class="fd-calendar__action">
              <button class="fd-button fd-button--transparent fd-button--compact" aria-label="Previous" aria-disabled="true">
                  <i class="sap-icon--slim-arrow-left"></i>
              </button>
            </div>
            <div class="fd-calendar__action">
              <button class="fd-button fd-button--transparent fd-button--compact" aria-expanded="false">September</button>
            </div>
            <div class="fd-calendar__action">
              <button class="fd-button fd-button--transparent fd-button--compact" aria-expanded="false">2018</button>
            </div>
            <div class="fd-calendar__action">
              <button class="fd-button fd-button--transparent fd-button--compact" aria-label="Next">
                  <i class="sap-icon--slim-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="fd-calendar__content">
          <div class="fd-calendar__dates" id="YeayX298" aria-hidden="false">
            <table class="fd-calendar__table" role="grid">
              <thead class="fd-calendar__group">
                <tr class="fd-calendar__row">
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
                  <td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
                    <span class="fd-calendar__text">29</span>
                  </td>
                  <td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
                    <span class="fd-calendar__text">30</span>
                  </td>
                  <td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
                    <span class="fd-calendar__text">31</span>
                  </td>
                  <td class="fd-calendar__item is-disabled" role="gridcell">
                    <span class="fd-calendar__text">1</span>
                  </td>
                  <td class="fd-calendar__item is-disabled" role="gridcell">
                    <span class="fd-calendar__text">2</span>
                  </td>
                  <td class="fd-calendar__item is-disabled" role="gridcell">
                    <span class="fd-calendar__text">3</span>
                  </td>
                  <td class="fd-calendar__item is-disabled" role="gridcell">
                    <span class="fd-calendar__text">4</span>
                  </td>
                </tr>
                <tr class="fd-calendar__row">
                  <td class="fd-calendar__item is-disabled" role="gridcell">
                    <span class="fd-calendar__text">5</span>
                  </td>
                  <td class="fd-calendar__item fd-calendar__item--current" role="gridcell">
                    <span class="fd-calendar__text">6</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">7</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">8</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">9</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">10</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">11</span>
                  </td>
                </tr>
                <tr class="fd-calendar__row">
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">12</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">13</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">14</span>
                  </td>
                  <td class="fd-calendar__item is-selected" role="gridcell">
                    <span class="fd-calendar__text">15</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">16</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">17</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">18</span>
                  </td>
                </tr>
                <tr class="fd-calendar__row">
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">19</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">20</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">21</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">22</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">23</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">24</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">25</span>
                  </td>
                </tr>
                <tr class="fd-calendar__row">
                  <td class="fd-calendar__item is-blocked" role="gridcell">
                    <span class="fd-calendar__text">26</span>
                  </td>
                  <td class="fd-calendar__item is-blocked" role="gridcell">
                    <span class="fd-calendar__text">27</span>
                  </td>
                  <td class="fd-calendar__item is-blocked" role="gridcell">
                    <span class="fd-calendar__text">28</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">29</span>
                  </td>
                  <td class="fd-calendar__item" role="gridcell">
                    <span class="fd-calendar__text">30</span>
                  </td>
                  <td class="fd-calendar__item fd-calendar__item--other-month" role="gridcell">
                    <span class="fd-calendar__text">1</span>
                  </td>
                  <td class="fd-calendar__item fd-calendar__item--other-month" role="gridcell">
                    <span class="fd-calendar__text">2</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
`;

DefaultAndCompactSizes.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `The date-picker component is a composition of the \`input-group\`, \`popover\` and \`calendar\` components. 
          It can be displayed in compact mode by adding the \`fd-input--compact\`, \`fd-button--compact\`, \`fd-calendar--compact\` 
          to the building blocks of the component.`


        }
    }
};

export const TodaySelectionButton = () => `<div class="fd-docs-date-picker" style="height:450px">
<div class="fd-popover">
  <div class="fd-popover__control is-expanded">
  <label class="fd-form-label" for="todaySelectionDateInput">en-US DatePicker with today selection</label>
    <div class="fd-input-group">
      <input id="todaySelectionDateInput" class="fd-input fd-input-group__input" type="text" value="" placeholder="Pick a date"
        onfocus="
          setElAttr('amksodaidasdjs', 'aria-hidden', 'false');
          setElAttr('mfapof8aosdusjd', 'aria-expanded', 'true');
        ">
      <span class="fd-input-group__addon fd-input-group__addon--button">
      <button
        id="mfapof8aosdusjd"
        onclick="
            toggleElAttrs('amksodaidasdjs', ['aria-hidden']);
            toggleElAttrs('mfapof8aosdusjd', ['aria-expanded']);
        "
        class="fd-input-group__button fd-popover__control fd-button fd-button--transparent"
        aria-controls="amksodaidasdjs"
        aria-expanded="true"
        aria-haspopup="true"
        aria-label="Choose Date">
          <i class="sap-icon--appointment-2"></i>
        </button>
      </span>
    </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false" id="amksodaidasdjs">
    <div class="fd-calendar">
      <div class="fd-calendar__header">
        <div class="fd-calendar__navigation">
          <div class="fd-calendar__action">
            <button class="fd-button fd-button--transparent" aria-label="Previous" aria-disabled="true">
              <i class="sap-icon--slim-arrow-left"></i>
            </button>
          </div>
          <div class="fd-calendar__action">
            <button class="fd-button fd-button--transparent" aria-expanded="false">September</button>
          </div>
          <div class="fd-calendar__action">
            <button class="fd-button fd-button--transparent" aria-expanded="false">2018</button>
          </div>
          <div class="fd-calendar__action">
            <button class="fd-button fd-button--transparent" aria-label="Next">
              <i class="sap-icon--slim-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="fd-calendar__content">
        <div class="fd-calendar__dates" id="YeayX299" aria-hidden="false">
          <table class="fd-calendar__table" role="grid">
            <thead class="fd-calendar__group">
              <tr class="fd-calendar__row">
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
                <td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
                  <span class="fd-calendar__text">29</span>
                </td>
                <td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
                  <span class="fd-calendar__text">30</span>
                </td>
                <td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
                  <span class="fd-calendar__text">31</span>
                </td>
                <td class="fd-calendar__item is-disabled" role="gridcell">
                  <span class="fd-calendar__text">1</span>
                </td>
                <td class="fd-calendar__item is-disabled" role="gridcell">
                  <span class="fd-calendar__text">2</span>
                </td>
                <td class="fd-calendar__item is-disabled" role="gridcell">
                  <span class="fd-calendar__text">3</span>
                </td>
                <td class="fd-calendar__item is-disabled" role="gridcell">
                  <span class="fd-calendar__text">4</span>
                </td>
              </tr>
              <tr class="fd-calendar__row">
                <td class="fd-calendar__item is-disabled" role="gridcell">
                  <span class="fd-calendar__text">5</span>
                </td>
                <td class="fd-calendar__item fd-calendar__item--current" role="gridcell">
                  <span class="fd-calendar__text">6</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">7</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">8</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">9</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">10</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">11</span>
                </td>
              </tr>
              <tr class="fd-calendar__row">
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">12</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">13</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">14</span>
                </td>
                <td class="fd-calendar__item is-selected" role="gridcell">
                  <span class="fd-calendar__text">15</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">16</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">17</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">18</span>
                </td>
              </tr>
              <tr class="fd-calendar__row">
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">19</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">20</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">21</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">22</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">23</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">24</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">25</span>
                </td>
              </tr>
              <tr class="fd-calendar__row">
                <td class="fd-calendar__item is-blocked" role="gridcell">
                  <span class="fd-calendar__text">26</span>
                </td>
                <td class="fd-calendar__item is-blocked" role="gridcell">
                  <span class="fd-calendar__text">27</span>
                </td>
                <td class="fd-calendar__item is-blocked" role="gridcell">
                  <span class="fd-calendar__text">28</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">29</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">30</span>
                </td>
                <td class="fd-calendar__item fd-calendar__item--other-month" role="gridcell">
                  <span class="fd-calendar__text">1</span>
                </td>
                <td class="fd-calendar__item fd-calendar__item--other-month" role="gridcell">
                  <span class="fd-calendar__text">2</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="fd-dialog__footer fd-bar fd-bar--footer fd-bar--cosy">
      <div class="fd-bar__right">
        <div class="fd-bar__element">
        <button class="fd-dialog__decisive-button fd-button"
          onClick="
            setValue('todaySelectionDateInput', new Date().toLocaleDateString('en-US'));
            setAriaHidden('Itcgq829',true);
          " >
          Today
        </button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
`;

TodaySelectionButton.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `
The today selection button in the footer selects today's date in the system or user-preferred timezone and closes the DatePicker popover.
This date value then appears in the DatePicker's input field. If using a compact datepicker add the \`fd-button--compact\` class to this button.
`
        }
    }
};

export const TodayNavigationButton = () => `<div class="fd-docs-date-picker" style="height:500px">
<div class="fd-popover">
  <div class="fd-popover__control is-expanded">
    <label class="fd-form-label" for="todayNavigationDateInput">en-US DatePicker with today navigation</label>
    <div class="fd-input-group">
      <input id="todayNavigationDateInput" class="fd-input fd-input-group__input" type="text" value="" placeholder="Pick a date"
        onfocus="
          setElAttr('Itcgq830', 'aria-hidden', 'false');
          setElAttr('smniaof7ahfs', 'aria-expanded', 'true');
        ">
      <span class="fd-input-group__addon fd-input-group__addon--button">
      <button class="fd-input-group__button fd-popover__control fd-button fd-button--transparent"
          id="smniaof7ahfs"
          onclick="
              toggleElAttrs('Itcgq830', ['aria-hidden']);
              toggleElAttrs('smniaof7ahfs', ['aria-expanded']);
          "
        aria-controls="Itcgq830"
        aria-expanded="true"
        aria-haspopup="true"
        aria-label="Choose Date">
          <i class="sap-icon--appointment-2"></i>
        </button>
      </span>
    </div>
  </div>
  <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false" id="Itcgq830">
    <div class="fd-calendar">
      <div class="fd-calendar__header">
        <div class="fd-calendar__navigation">
          <div class="fd-calendar__action">
            <button class="fd-button fd-button--transparent" aria-label="Previous" aria-disabled="true">
              <i class="sap-icon--slim-arrow-left"></i>
            </button>
          </div>
          <div class="fd-calendar__action">
            <button class="fd-button fd-button--transparent" aria-expanded="false">September</button>
          </div>
          <div class="fd-calendar__action">
            <button class="fd-button fd-button--transparent" aria-expanded="false">2018</button>
          </div>
          <div class="fd-calendar__action">
            <button class="fd-button fd-button--transparent" aria-label="Next">
              <i class="sap-icon--slim-arrow-right"></i>
            </button>
          </div>
          <div class="fd-calendar__action">
            <button class="fd-button fd-button--transparent"
              aria-expanded="false"
              onClick="
                setValue('todayNavigationDateInput', new Date('9/6/2018').toLocaleDateString('en-US'));
                setFocus('mockToday');
                addClass('mockToday', 'is-active');
              "
              >
              Today
            </button>
          </div>
        </div>
      </div>
      <div class="fd-calendar__content">
        <div class="fd-calendar__dates" id="YeayX300" aria-hidden="false">
          <table class="fd-calendar__table" role="grid">
            <thead class="fd-calendar__group">
              <tr class="fd-calendar__row">
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
                <td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
                  <span class="fd-calendar__text">29</span>
                </td>
                <td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
                  <span class="fd-calendar__text">30</span>
                </td>
                <td class="fd-calendar__item fd-calendar__item--other-month is-disabled" role="gridcell">
                  <span class="fd-calendar__text">31</span>
                </td>
                <td class="fd-calendar__item is-disabled" role="gridcell">
                  <span class="fd-calendar__text">1</span>
                </td>
                <td class="fd-calendar__item is-disabled" role="gridcell">
                  <span class="fd-calendar__text">2</span>
                </td>
                <td class="fd-calendar__item is-disabled" role="gridcell">
                  <span class="fd-calendar__text">3</span>
                </td>
                <td class="fd-calendar__item is-disabled" role="gridcell">
                  <span class="fd-calendar__text">4</span>
                </td>
              </tr>
              <tr class="fd-calendar__row">
                <td class="fd-calendar__item is-disabled" role="gridcell">
                  <span class="fd-calendar__text">5</span>
                </td>
                <td id="mockToday" tabIndex="0" class="fd-calendar__item fd-calendar__item--current" role="gridcell">
                  <span class="fd-calendar__text">6</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">7</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">8</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">9</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">10</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">11</span>
                </td>
              </tr>
              <tr class="fd-calendar__row">
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">12</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">13</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">14</span>
                </td>
                <td class="fd-calendar__item is-selected" role="gridcell">
                  <span class="fd-calendar__text">15</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">16</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">17</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">18</span>
                </td>
              </tr>
              <tr class="fd-calendar__row">
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">19</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">20</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">21</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">22</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">23</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">24</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">25</span>
                </td>
              </tr>
              <tr class="fd-calendar__row">
                <td class="fd-calendar__item is-blocked" role="gridcell">
                  <span class="fd-calendar__text">26</span>
                </td>
                <td class="fd-calendar__item is-blocked" role="gridcell">
                  <span class="fd-calendar__text">27</span>
                </td>
                <td class="fd-calendar__item is-blocked" role="gridcell">
                  <span class="fd-calendar__text">28</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">29</span>
                </td>
                <td class="fd-calendar__item" role="gridcell">
                  <span class="fd-calendar__text">30</span>
                </td>
                <td class="fd-calendar__item fd-calendar__item--other-month" role="gridcell">
                  <span class="fd-calendar__text">1</span>
                </td>
                <td class="fd-calendar__item fd-calendar__item--other-month" role="gridcell">
                  <span class="fd-calendar__text">2</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<small>example considers today as 9/6/2018</small>
`;

TodayNavigationButton.parameters = {
    docs: {
        iframeHeight: 450,
        description: {
            story: `
The today navigation button in the header navigates focus to today's date in the system or user-preferred timezone, selects it but does not close the DatePicker popover.
This is useful in displaying the DatePicker on mobile where DatePicker closes when user presses the OK button.
If using a compact datepicker add the \`fd-button--compact\` class to this button.

**Note: Using both today selection and navigation buttons on the same datepicker is not recommended, as it may lead to confusion.**
`
        }
    }
};

export const MobileLandscape = () => `<div class="fd-dialog-docs-static fd-calendar-mobile-docs-static--landscape fd-dialog fd-dialog--active">
<div class="fd-dialog__content fd-dialog__content--s fd-dialog__content--mobile">
  <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
    <div class="fd-calendar fd-calendar--mobile-landscape">
      <div class="fd-calendar__header">
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
          <button class="fd-dialog__decisive-button fd-button fd-button--transparent">Today</button>
          <button type="button" class="fd-button fd-button--transparent fd-calendar__close-button--navigation" aria-label="Close">
            <i class="sap-icon--decline"></i>
          </button>
        </div>
      </div>
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
                <span class="fd-calendar__text" role="button">29</span>
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
              <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                <span class="fd-calendar__text" role="button">3</span>
              </td>
              <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                <span class="fd-calendar__text" role="button">4</span>
              </td>
            </tr>
            <tr class="fd-calendar__row">
              <td class="fd-calendar__item fd-calendar__item--side-helper">
                <span class="fd-calendar__text" role="button">2</span>
              </td>
              <td role="gridcell" class="fd-calendar__item">
                <span class="fd-calendar__text" role="button">5</span>
              </td>
              <td role="gridcell" class="fd-calendar__item fd-calendar__item--current">
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
              <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                <span class="fd-calendar__text" role="button">10</span>
              </td>
              <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                <span class="fd-calendar__text" role="button">11</span>
              </td>
            </tr>
            <tr class="fd-calendar__row">
              <td class="fd-calendar__item fd-calendar__item--side-helper">
                <span class="fd-calendar__text" role="button">3</span>
              </td>
              <td role="gridcell" class="fd-calendar__item">
                <span class="fd-calendar__text" role="button">12</span>
              </td>
              <td role="gridcell" class="fd-calendar__item">
                <span class="fd-calendar__text" role="button">13</span>
              </td>
              <td role="gridcell" class="fd-calendar__item">
                <span class="fd-calendar__text" role="button">14</span>
              </td>
              <td aria-selected="true" role="gridcell" class="fd-calendar__item is-active">
                <span class="fd-calendar__text" role="button">15</span>
              </td>
              <td role="gridcell" class="fd-calendar__item">
                <span class="fd-calendar__text" role="button">16</span>
              </td>
              <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                <span class="fd-calendar__text" role="button">17</span>
              </td>
              <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                <span class="fd-calendar__text" role="button">18</span>
              </td>
            </tr>
            <tr class="fd-calendar__row">
              <td class="fd-calendar__item fd-calendar__item--side-helper">
                <span class="fd-calendar__text" role="button">4</span>
              </td>
              <td role="gridcell" class="fd-calendar__item">
                <span class="fd-calendar__text" role="button">19</span>
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
              <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                <span class="fd-calendar__text" role="button">24</span>
              </td>
              <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                <span class="fd-calendar__text" role="button">25</span>
              </td>
            </tr>
            <tr class="fd-calendar__row">
              <td class="fd-calendar__item fd-calendar__item--side-helper">
                <span class="fd-calendar__text" role="button">5</span>
              </td>
              <td role="gridcell" class="fd-calendar__item">
                <span class="fd-calendar__text" role="button">26</span>
              </td>
              <td role="gridcell" class="fd-calendar__item">
                <span class="fd-calendar__text" role="button">27</span>
              </td>
              <td role="gridcell" class="fd-calendar__item">
                <span class="fd-calendar__text" role="button">28</span>
              </td>
              <td role="gridcell" class="fd-calendar__item">
                <span class="fd-calendar__text" role="button">29</span>
              </td>
              <td role="gridcell" class="fd-calendar__item">
                <span class="fd-calendar__text" role="button">30</span>
              </td>
              <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                <span class="fd-calendar__text" role="button">1</span>
              </td>
              <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                <span class="fd-calendar__text" role="button">2</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="fd-dialog__footer fd-bar fd-bar--footer fd-bar--cosy">
    <div class="fd-bar__right">
      <div class="fd-bar__element">
        <button class="fd-dialog__decisive-button fd-button fd-button--emphasized">
        OK
        </button>
      </div>
    </div>
  </div>
</div>
</div>
`;

MobileLandscape.storyName = 'Mobile landscape mode with today navigation';
MobileLandscape.parameters = {
    docs: {
        iframeHeight: 400,
        description: {
            story: 'The additional `Today` button displayed in the navigation part of the calendar, sets the focus to the current date. The landscape sizing and roation of thw the date picker is done by adding the `fd-calendar--mobile-landscape` class.'


        }
    }
};


export const MobilePortrait = () => `<div class="fd-dialog-docs-static fd-calendar-mobile-docs-static--portrait fd-dialog fd-dialog--active">
<div class="fd-dialog__content fd-dialog__content--s fd-dialog__content--mobile">
  <div class="fd-dialog__header fd-bar fd-bar--header fd-bar--cosy">
    <div class="fd-bar__left">
      <div class="fd-bar__element">
        <h3 class="fd-title fd-title--h5">
          Pick a date
        </h3>
      </div>
    </div>
    <div class="fd-bar__right">
      <div class="fd-bar__element">
        <button type="button" class="fd-button fd-button--transparent fd-calendar__close-button" aria-label="Close">
          <i class="sap-icon--decline"></i>
        </button>
      </div>
    </div>
  </div>
  <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
    <div class="fd-calendar fd-calendar--mobile-portrait">
      <div class="fd-calendar__header">
        <div class="fd-calendar__navigation">
          <div class="fd-segmented-button" role="group" aria-label="Switch Date/Time picker">
            <button aria-label="date-button" class="fd-button is-active">Date</button>
            <button aria-label="time-button" class="fd-button">Time</button>
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
          <button class="fd-dialog__decisive-button fd-button fd-button--transparent">Today</button>
        </div>
      </div>
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
                <span class="fd-calendar__text" role="button">29</span>
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
              <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                <span class="fd-calendar__text" role="button">3</span>
              </td>
              <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                <span class="fd-calendar__text" role="button">4</span>
              </td>
            </tr>
            <tr class="fd-calendar__row">
              <td class="fd-calendar__item fd-calendar__item--side-helper">
                <span class="fd-calendar__text" role="button">2</span>
              </td>
              <td role="gridcell" class="fd-calendar__item">
                <span class="fd-calendar__text" role="button">5</span>
              </td>
              <td role="gridcell" class="fd-calendar__item fd-calendar__item--current">
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
              <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                <span class="fd-calendar__text" role="button">10</span>
              </td>
              <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                <span class="fd-calendar__text" role="button">11</span>
              </td>
            </tr>
            <tr class="fd-calendar__row">
              <td class="fd-calendar__item fd-calendar__item--side-helper">
                <span class="fd-calendar__text" role="button">3</span>
              </td>
              <td role="gridcell" class="fd-calendar__item">
                <span class="fd-calendar__text" role="button">12</span>
              </td>
              <td role="gridcell" class="fd-calendar__item">
                <span class="fd-calendar__text" role="button">13</span>
              </td>
              <td role="gridcell" class="fd-calendar__item">
                <span class="fd-calendar__text" role="button">14</span>
              </td>
              <td aria-selected="true" role="gridcell" class="fd-calendar__item is-active">
                <span class="fd-calendar__text" role="button">15</span>
              </td>
              <td role="gridcell" class="fd-calendar__item">
                <span class="fd-calendar__text" role="button">16</span>
              </td>
              <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                <span class="fd-calendar__text" role="button">17</span>
              </td>
              <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                <span class="fd-calendar__text" role="button">18</span>
              </td>
            </tr>
            <tr class="fd-calendar__row">
              <td class="fd-calendar__item fd-calendar__item--side-helper">
                <span class="fd-calendar__text" role="button">4</span>
              </td>
              <td role="gridcell" class="fd-calendar__item">
                <span class="fd-calendar__text" role="button">19</span>
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
              <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                <span class="fd-calendar__text" role="button">24</span>
              </td>
              <td role="gridcell" class="fd-calendar__item fd-calendar__item--weekend">
                <span class="fd-calendar__text" role="button">25</span>
              </td>
            </tr>
            <tr class="fd-calendar__row">
              <td class="fd-calendar__item fd-calendar__item--side-helper">
                <span class="fd-calendar__text" role="button">5</span>
              </td>
              <td role="gridcell" class="fd-calendar__item">
                <span class="fd-calendar__text" role="button">26</span>
              </td>
              <td role="gridcell" class="fd-calendar__item">
                <span class="fd-calendar__text" role="button">27</span>
              </td>
              <td role="gridcell" class="fd-calendar__item">
                <span class="fd-calendar__text" role="button">28</span>
              </td>
              <td role="gridcell" class="fd-calendar__item">
                <span class="fd-calendar__text" role="button">29</span>
              </td>
              <td role="gridcell" class="fd-calendar__item">
                <span class="fd-calendar__text" role="button">30</span>
              </td>
              <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                <span class="fd-calendar__text" role="button">1</span>
              </td>
              <td role="gridcell" class="fd-calendar__item fd-calendar__item--other-month">
                <span class="fd-calendar__text" role="button">2</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div aria-live="polite" class="fd-calendar__content fd-calendar__content--screen-reader-only">Use arrow keys to navigate dates</div>
    </div>
  </div>
  <div class="fd-dialog__footer fd-bar fd-bar--footer fd-bar--cosy">
    <div class="fd-bar__right">
      <div class="fd-bar__element">
        <button class="fd-dialog__decisive-button fd-button fd-button--emphasized">
        OK
        </button>
      </div>
    </div>
  </div>
</div>
</div>
`;

MobilePortrait.storyName = 'Mobile portrait mode with today navigation';
MobilePortrait.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: 'Similar to the mobile landscape example, mobile portrait mode has a `Today` button. To make date picker visible in portrait mode, add the`fd-calendar--mobile-portrait` class.'


        }
    }
};
