import 'fn/src/fn-table.scss';
import 'styles/src/icon.scss';
import 'fn/src/fn-avatar.scss';
import 'fn/src/fn-checkbox.scss';
import 'fn/src/fn-info-label.scss';
import 'fn/src/fn-button.scss';
import 'fn/src/fn-link.scss';
import 'fn/src/fn-object-status.scss';
import 'fn/src/fn-info-label.scss';

export default {
  title: 'Table',
  parameters: {
    description: `
The table is an un-opinionated component that can contain a variety of cells with their own components.
        `,
    tags: []
  }
};
const localStyles = `
<style>
    .docs-story {
        background: white;
    }
</style>
`;
export const Primary = () => `${localStyles}
<table class="fn-table">
    <thead>
        <tr class="fn-table__row">
            <th class="fn-table__header" scope="col">Column Header</th>
            <th class="fn-table__header" scope="col">Column Header</th>
            <th class="fn-table__header" scope="col">Column Header</th>
            <th class="fn-table__header" scope="col">Column Header</th>
            <th class="fn-table__header" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody>
        <tr class="fn-table__row">
            <td class="fn-table__cell"><a class="fn-link">user.name@email.com</a></td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">01/26/17</td>
        </tr>
        <tr class="fn-table__row">
            <td class="fn-table__cell"><a class="fn-link">user.name@email.com</a></td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">01/26/17</td>
        </tr>
        <tr class="fn-table__row">
            <td class="fn-table__cell"><a class="fn-link">user.name@email.com</a></td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">01/26/17</td>
        </tr>
        <tr class="fn-table__row">
            <td class="fn-table__cell"><a class="fn-link">user.name@email.com</a></td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;
Primary.storyName = 'Standard Table';
export const Checkboxes = () => `${localStyles}
<table class="fn-table">
    <thead>
        <tr class="fn-table__row">
            <th class="fn-table__header" scope="col">
                <div class="fn-checkbox fn-table__header-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" id="checkbox-1" name="checkbox-1" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                </div>
                Column Header
            </th>
            <th class="fn-table__header" scope="col">Column Header</th>
            <th class="fn-table__header" scope="col">Column Header</th>
            <th class="fn-table__header" scope="col">Column Header</th>
            <th class="fn-table__header" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody>
        <tr class="fn-table__row">
            <td class="fn-table__cell">
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" id="checkbox-1" name="checkbox-1" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                </div>
                Table cell with checkbox
            </td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">01/26/17</td>
        </tr>
        <tr class="fn-table__row">
            <td class="fn-table__cell">
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" id="checkbox-1" name="checkbox-1" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                </div>
                Table cell with checkbox
            </td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">01/26/17</td>
        </tr>
        <tr class="fn-table__row">
            <td class="fn-table__cell">
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" id="checkbox-1" name="checkbox-1" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                </div>
                Table cell with checkbox
            </td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">01/26/17</td>
        </tr>
        <tr class="fn-table__row">
            <td class="fn-table__cell">
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" id="checkbox-1" name="checkbox-1" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                </div>
                Table cell with checkbox
            </td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;
Checkboxes.storyName = 'Table with Checkboxes';
Checkboxes.parameters = {
  docs: {
    description: {
      story: `
Table rows, including table headers, can have checkboxes.
`
    }
  }
};
export const Buttons = () => `${localStyles}
<table class="fn-table">
    <thead>
        <tr class="fn-table__row">
            <th class="fn-table__header" scope="col">Column Header</th>
            <th class="fn-table__header" scope="col">Column Header</th>
            <th class="fn-table__header" scope="col">Column Header</th>
            <th class="fn-table__header" scope="col">Column Header</th>
            <th class="fn-table__header" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody>
        <tr class="fn-table__row">
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">
                <div class="fn-table__end-container">
                    Table cell with end buttons
                    <button class="fn-button fn-button--icon-only fn-button--secondary">
                        <span class="sap-icon sap-icon--edit"></span>
                    </button>
                    <button class="fn-button fn-button--icon-only fn-button--secondary">
                        <span class="sap-icon sap-icon--decline"></span>
                    </button>
                </div>
            </td>
        </tr>
        <tr class="fn-table__row">
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">
                <div class="fn-table__end-container">
                    Table cell with text and navigation button
                    <button class="fn-button fn-button--icon-only fn-button--layout">
                        <span class="sap-icon sap-icon--navigation-right-arrow"></span>
                    </button>
                </div>
            </td>
        </tr>
        <tr class="fn-table__row">
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell fn-table__cell--no-hover">
                <div class="fn-table__end-container">
                    <button class="fn-button fn-button--icon-only fn-button--layout">
                        <span class="sap-icon sap-icon--navigation-right-arrow"></span>
                    </button>
                </div>
            </td>
        </tr>
    </tbody>
</table>
`;
Buttons.storyName = 'Table with Buttons';
Buttons.parameters = {
  docs: {
    description: {
      story: 'Buttons and navigation buttons can be added to table cells. If the table cell contains only the button and no text, add the modifier class `fn-table__cell--no-hover` to prevent hover styling.'
    }
  }
};
export const Byline = () => `${localStyles}
<table class="fn-table">
    <thead>
        <tr class="fn-table__row">
            <th class="fn-table__header" scope="col">Column Header</th>
            <th class="fn-table__header" scope="col">Column Header</th>
            <th class="fn-table__header" scope="col">Column Header</th>
            <th class="fn-table__header" scope="col">Column Header</th>
            <th class="fn-table__header" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody>
        <tr class="fn-table__row">
            <td class="fn-table__cell fn-table__cell--byline">
                <div class="fn-avatar fn-table__avatar fn-avatar--circle fn-avatar--m fn-avatar--indigo">
                    <div class="fn-avatar__initials">M</div>
                </div>
                <div class="fn-table__start-container">
                    <span class="fn-table__byline-title">Byline Table Cell with Avatar Title</span>
                    <span class="fn-lable__byline-text">Table Cell Byline Text</span>
                </div>
            </td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
        </tr>
        <tr class="fn-table__row">
            <td class="fn-table__cell fn-table__cell--byline">
                <div class="fn-table__start-container">
                    <span class="fn-table__byline-title">Byline Table Cell Title</span>
                    <span class="fn-lable__byline-text">Table Cell Byline Text</span>
                </div>
            </td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
        </tr>
        <tr class="fn-table__row">
            <td class="fn-table__cell fn-table__cell--byline">
                <div class="fn-table__start-container">
                    <span class="fn-table__byline-title">Byline Table Cell</span>
                    <div class="fn-object-status fn-object-status--byline fn-object-status--critical">
                        <span class="sap-icon sap-icon--status-critical"></span>
                        <div class="fn-object-status__text">Critical</div>
                    </div>
                </div>
            </td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
        </tr>
    </tbody>
</table>
`;
Byline.storyName = 'Table with Byline';
Byline.parameters = {
  docs: {
    description: {
      story: 'Table cells can contain additional data in the byline mode.'
    }
  }
};
export const Selected = () => `${localStyles}
<table class="fn-table">
    <thead>
        <tr class="fn-table__row">
            <th class="fn-table__header" scope="col">Column Header</th>
            <th class="fn-table__header" scope="col">Column Header</th>
            <th class="fn-table__header" scope="col">Column Header</th>
            <th class="fn-table__header" scope="col">Column Header</th>
            <th class="fn-table__header" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody>
        <tr class="fn-table__row">
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
        </tr>
        <tr class="fn-table__row is-selected">
            <td class="fn-table__cell">Selected Table Row</td>
            <td class="fn-table__cell">Selected Table Row</td>
            <td class="fn-table__cell">Selected Table Row</td>
            <td class="fn-table__cell">Selected Table Row</td>
            <td class="fn-table__cell">Selected Table Row</td>
        </tr>
        <tr class="fn-table__row">
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
        </tr>
        <tr class="fn-table__row">
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell is-selected">Selected Table cell</td>
            <td class="fn-table__cell">Table cell</td>
        </tr>
        <tr class="fn-table__row">
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
        </tr>
    </tbody>
</table>
`;
Selected.storyName = 'Table with Selected Rows / Cells';
Selected.parameters = {
  docs: {
    description: {
      story: 'Table cells or entire rows can be shown as selected with the `is-selected` class.'
    }
  }
};
export const Group = () => `${localStyles}
<table class="fn-table">
    <thead>
        <tr class="fn-table__row">
            <th class="fn-table__header" scope="col">Column Header</th>
            <th class="fn-table__header" scope="col">Column Header</th>
            <th class="fn-table__header" scope="col">Column Header</th>
            <th class="fn-table__header" scope="col">Column Header</th>
            <th class="fn-table__header" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody>
        <tr class="fn-table__row">
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
        </tr>
        <tr class="fn-table__row">
            <td class="fn-table__group-header">Group Header</td>
            <td class="fn-table__cell"></td>
            <td class="fn-table__cell"></td>
            <td class="fn-table__cell"></td>
            <td class="fn-table__cell"></td>
        </tr>
        <tr class="fn-table__row">
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
        </tr>
        <tr class="fn-table__row">
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
        </tr>
        <tr class="fn-table__row">
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
        </tr>
    </tbody>
</table>
`;
Group.storyName = 'Table with Group Headers';
Group.parameters = {
  docs: {
    description: {
      story: 'Group headers can be added to the table to separate sections of rows.'
    }
  }
};
export const Status = () => `${localStyles}
<table class="fn-table">
    <thead>
        <tr class="fn-table__row">
            <th class="fn-table__header" scope="col">Column Header</th>
            <th class="fn-table__header" scope="col">Column Header</th>
            <th class="fn-table__header" scope="col">Column Header</th>
            <th class="fn-table__header" scope="col">Column Header</th>
            <th class="fn-table__header" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody>
        <tr class="fn-table__row">
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">
                <div class="fn-object-status fn-object-status--byline fn-object-status--positive">
                    <span class="sap-icon sap-icon--status-positive"></span>
                    <div class="fn-object-status__text">Positive</div>
                </div>
            </td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">
                <span class="fn-info-label fn-info-label--yellow">
                    <span class="fn-info-label__circle"></span>
                <span class="fn-info-label__text">State</span>
            </td>
        </tr>
        <tr class="fn-table__row">
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">
                <div class="fn-object-status fn-object-status--byline fn-object-status--negative">
                    <span class="sap-icon sap-icon--status-negative"></span>
                    <div class="fn-object-status__text">Negative</div>
                </div>
            </td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">
                <span class="fn-info-label fn-info-label--crimson">
                    <span class="fn-info-label__circle"></span>
                <span class="fn-info-label__text">State</span>
            </td>
        </tr>
        <tr class="fn-table__row">
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">
                <div class="fn-object-status fn-object-status--byline fn-object-status--info">
                    <span class="sap-icon sap-icon--information"></span>
                    <div class="fn-object-status__text">Information</div>
                </div>
            </td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">
                <span class="fn-info-label fn-info-label--indigo">
                    <span class="fn-info-label__circle"></span>
                <span class="fn-info-label__text">State</span>
            </td>
        </tr>
        <tr class="fn-table__row">
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">
                <div class="fn-object-status fn-object-status--byline fn-object-status--critical">
                    <span class="sap-icon sap-icon--status-critical"></span>
                    <div class="fn-object-status__text">Critical</div>
                </div>
            </td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">
                <span class="fn-info-label fn-info-label--cyan">
                    <span class="fn-info-label__circle"></span>
                <span class="fn-info-label__text">State</span>
            </td>
        </tr>
    </tbody>
</table>
`;
Status.storyName = 'Table with Statuses and Info Labels';
Status.parameters = {
  docs: {
    description: {
      story: 'Table cells can also contain statuses and info labels'
    }
  }
};
