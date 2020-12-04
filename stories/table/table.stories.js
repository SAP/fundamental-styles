// INCOMPLETE
export default {
    title: 'Components/Table',
    parameters: {
        description: 'A table is a set of tabular data. Line items can support data, images and actions.',
        docs: {
            iframeHeight: 500
        },
        components: [
            'button',
            'form-label',
            'fieldset',
            'icon',
            'link',
            'object-status',
            'table',
            'toolbar',
            'pagination',
            'popover',
            'list',
            'toolbar',
            'bar',
            'dialog',
            'input',
            'input-group',
            'multi-input',
            'checkbox',
            'select'
        ]
    }
};

export const primary = () => `
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Default Table</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

/**
 * * `--no-vertical-borders` modifier can be applied to render a table without vertical borders.
 * `--no-horizontal-borders` modifier can be applied to render a table without horizontal borders.

 Both can be added to  `fd-table`, `fd-table__header`, or `fd-table__body`.
 */

export const withoutBorders = () => `
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table Without Borders</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--no-horizontal-borders fd-table--no-vertical-borders">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

export const withoutBordersOnBody = () => `
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table Without Borders On Body</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body fd-table__body--no-horizontal-borders fd-table__body--no-vertical-borders">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

/** Footer can be added by using `fd-table__footer` class with `tfoot` element.
 It has to contain same size of columns as tbody and thead. */

export const withFooter = () => `
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table With Footer Cozy Mode</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
    <tfoot class="fd-table__footer">
        <tr class="fd-table__row">
            <td class="fd-table__cell"></td>
            <td class="fd-table__cell"></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
        </tr>
    </tfoot>
</table>`;

export const withFooterCompact = () => `
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table With Footer Compact Mode</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--compact">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
    <tfoot class="fd-table__footer">
        <tr class="fd-table__row">
            <td class="fd-table__cell"></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell"></td>
        </tr>
    </tfoot>
</table>
`;

export const withFooterCondensed = () => `
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table With Footer Condensed Mode</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--condensed">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
    <tfoot class="fd-table__footer">
        <tr class="fd-table__row">
            <td class="fd-table__cell"></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell"></td>
        </tr>
    </tfoot>
</table>
`;

/**
 * Interactive states of columns and row can be set by adding

 * For active state handler `--activable` modifier
 * For hover state handler `--hoverable` modifier
 */

export const interactiveRowsAndColumns = () => `
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Interactive Table With Hoverable and Activable Cells and Rows</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--activable fd-table__cell--hoverable" scope="col">Hovering And</th>
            <th class="fd-table__cell fd-table__cell--activable fd-table__cell--hoverable" scope="col">Clicking</th>
            <th class="fd-table__cell fd-table__cell--activable fd-table__cell--hoverable" scope="col">On Header's Cell</th>
            <th class="fd-table__cell fd-table__cell--activable fd-table__cell--hoverable" scope="col">Will Trigger</th>
            <th class="fd-table__cell fd-table__cell--activable fd-table__cell--hoverable" scope="col">Color Change</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable">
            <td class="fd-table__cell">Clicking on any Cell</td>
            <td class="fd-table__cell">On This Row</td>
            <td class="fd-table__cell">Will cause</td>
            <td class="fd-table__cell">Highlight of Whole Row</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--activable">Clicking On Cell</td>
            <td class="fd-table__cell fd-table__cell--activable">Will cause</td>
            <td class="fd-table__cell fd-table__cell--activable">Highlight of cell</td>
            <td class="fd-table__cell fd-table__cell--activable">Last Name</td>
            <td class="fd-table__cell fd-table__cell--activable">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--hoverable">Hovering On Any Cell</td>
            <td class="fd-table__cell fd-table__cell--hoverable">Will Change</td>
            <td class="fd-table__cell fd-table__cell--hoverable">Background</td>
            <td class="fd-table__cell fd-table__cell--hoverable">Of Certain</td>
            <td class="fd-table__cell fd-table__cell--hoverable">Cell</td>
        </tr>
        <tr class="fd-table__row fd-table__row--hoverable">
            <td class="fd-table__cell">Hovering On Any Cell</td>
            <td class="fd-table__cell">And cells</td>
            <td class="fd-table__cell">Will Change</td>
            <td class="fd-table__cell">Background of Whole Row</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

interactiveRowsAndColumns.storyName = 'Interactive Table With Hoverable and Activable Cells and Rows';

/**
 * A table can be set to have focusable rows by adding `fd-table__row--focusable` and a valid `tabindex` to the rows.
 * It is not recommended to use focusable rows simultaneously with focusable cells.
 */

export const focusableRows = () => `
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table With Focusable Rows</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table" role="grid">
    <thead class="fd-table__header">
        <tr class="fd-table__row fd-table__row--focusable" tabindex="-1">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row fd-table__row--focusable" tabindex="-1">
            <td class="fd-table__cell" role="gridcell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell" role="gridcell">First Name</td>
            <td class="fd-table__cell" role="gridcell">Middle Name</td>
            <td class="fd-table__cell" role="gridcell">Last Name</td>
            <td class="fd-table__cell" role="gridcell">01/26/17</td>
        </tr>
        <tr class="fd-table__row fd-table__row--focusable" tabindex="-1">
            <td class="fd-table__cell" role="gridcell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell" role="gridcell">First Name</td>
            <td class="fd-table__cell" role="gridcell">Middle Name</td>
            <td class="fd-table__cell" role="gridcell">Last Name</td>
            <td class="fd-table__cell" role="gridcell">01/26/17</td>
        </tr>
        <tr class="fd-table__row fd-table__row--focusable" tabindex="-1">
            <td class="fd-table__cell" role="gridcell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell" role="gridcell">First Name</td>
            <td class="fd-table__cell" role="gridcell">Middle Name</td>
            <td class="fd-table__cell" role="gridcell">Last Name</td>
            <td class="fd-table__cell" role="gridcell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

/**
 * A table can be set to have focusable cells by adding `fd-table__cell--focusable` and a valid `tabindex` to the cells.
 * It is not recommended to use focusable cells simultaneously with focusable rows.
 */

export const focusableCells = () => `
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table With Focusable Cells</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table" role="grid">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1" scope="col">Column Header</th>
            <th class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1" scope="col">Column Header</th>
            <th class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1" scope="col">Column Header</th>
            <th class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1" scope="col">Column Header</th>
            <th class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">First Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">Middle Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">Last Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">First Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">Middle Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">Last Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">First Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">Middle Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">Last Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

/**
 * The checkbox input can be used at the beginning of each row to allow for bulk actions.
 It is recommended to add the parameter `aria-selected="true"` to the row that is selected.
 Also for cells that include a checkbox should contain the `fd-table__cell--checkbox` class.
 */

export const withCheckbox = () => `
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table With Checkbox Cozy Mode</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--checkbox" scope="col">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai4ez611">
                <label class="fd-checkbox__label" for="Ai4ez611"></label>
            </th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row" aria-selected="true">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox" id="Ai4ez615">
                <label class="fd-checkbox__label" for="Ai4ez615"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai4ez617">
                <label class="fd-checkbox__label" for="Ai4ez617"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Gi4ez611">
                <label class="fd-checkbox__label" for="Gi4ez611"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

export const withCheckboxCompact = () => `
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table With Checkbox Compact Mode</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--compact">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--checkbox" scope="col">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4HF611">
                <label class="fd-checkbox__label" for="Ai4HF611"></label>
            </th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row" aria-selected="true">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox fd-checkbox--compact" id="Ai4HFHG1">
                <label class="fd-checkbox__label" for="Ai4HFHG1"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4JKHG1">
                <label class="fd-checkbox__label" for="Ai4JKHG1"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4JH23G1">
                <label class="fd-checkbox__label" for="Ai4JH23G1"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

export const withCheckboxCondensed = () => `
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table With Checkbox Condensed Mode</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--condensed">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--checkbox" scope="col">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4JH2BF87">
                <label class="fd-checkbox__label" for="Ai4JH2BF87"></label>
            </th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row" aria-selected="true">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox fd-checkbox--compact" id="Ai4JHf87">
                <label class="fd-checkbox__label" for="Ai4JHf87"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4Jj67">
                <label class="fd-checkbox__label" for="Ai4Jj67"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-checkbox--compact" id="AGjtJj67">
                <label class="fd-checkbox__label" for="AGjtJj67"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

export const withPagination = () => `
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table With Pagination at The Bottom</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Name</th>
            <th class="fd-table__cell" scope="col">Status</th>
            <th class="fd-table__cell" scope="col">Price</th>
            <th class="fd-table__cell" scope="col">Country</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell">Banana</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--positive">
                    Available
                </span>
            </td>
            <td class="fd-table__cell">5 EUR</td>
            <td class="fd-table__cell">India</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">Pineapple</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--negative">
                    Out of stock
                </span>
            </td>
            <td class="fd-table__cell">2 EUR</td>
            <td class="fd-table__cell">Mexico</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">Orange</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--informative">
                    Temporary unavailable
                </span>
            </td>
            <td class="fd-table__cell">6 EUR</td>
            <td class="fd-table__cell">Spain</td>
        </tr>
    </tbody>
</table>
<div class="fd-pagination">
    <span class="fd-pagination__total">Showing 3 of 30 items</span>
    <nav class="fd-pagination__nav">
        <a href="#" class="fd-pagination__link fd-pagination__link--previous" aria-label="Next" aria-disabled="false"></a>
        <a href="#" class="fd-pagination__link">1</a>
        <a href="#" class="fd-pagination__link is-selected">2</a>
        <a href="#" class="fd-pagination__link">3</a>
        <span class="fd-pagination__more" role="presentation"></span>
        <a href="#" class="fd-pagination__link">10</a>
        <a href="#" class="fd-pagination__link fd-pagination__link--next" aria-label="Next" aria-disabled="false"></a>
    </nav>
</div>
`;

/** Advanced Toolbar can be used to customize table. Certain buttons trigger dialogs, where user can set some data. */

export const withAdvancedToolbar = () => `
<div class="fd-dialog" id="filter-dialog-example">
    <section class="fd-dialog__content" role="dialog" aria-modal="true" aria-labelledby="dialog-filter">
        <header class="fd-dialog__header fd-bar">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 class="fd-dialog__title" id="dialog-filter">
                        Filter By
                    </h3>
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <span class="sap-icon--filter"></span>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <ul class="fd-list fd-list--compact">
              <li class="fd-list__item">
                  <span class="fd-list__title">Name</span>
              </li>
              <li class="fd-list__item">
                  <span class="fd-list__title">Status</span>
              </li>
              <li class="fd-list__item">
                  <span class="fd-list__title">Price</span>
              </li>
              <li class="fd-list__item">
                  <span class="fd-list__title">Country</span>
              </li>
            </ul>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button aria-label="navigation" class="fd-dialog__decisive-button fd-button fd-button--emphasized fd-button--compact" onclick="toggleClass('filter-dialog-example', 'fd-dialog--active')">OK</button>
                </div>
                <div class="fd-bar__element">
                    <button aria-label="navigation" class="fd-dialog__decisive-button fd-button fd-button--transparent fd-button--compact" onclick="toggleClass('filter-dialog-example', 'fd-dialog--active')">Cancel</button>
                </div>
            </div>
        </footer>
    </section>
</div>
<div class="fd-dialog" id="settings-dialog-example">
    <section class="fd-dialog__content" role="dialog" aria-modal="true" aria-labelledby="dialog-settings">
        <header class="fd-dialog__header fd-bar fd-bar--header-with-subheader">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 class="fd-dialog__title" id="dialog-settings">
                        Columns
                    </h3>
                </div>
            </div>
        </header>
        <div class="fd-dialog__subheader fd-bar fd-bar--subheader">
            <div class="fd-bar__middle">
                <div class="fd-bar__element">
                    <button aria-label="navigation" class="fd-button fd-button--icon fd-button--transparent fd-button--compact">
                        <i class="sap-icon--arrow-top"></i>
                    </button>
                    <button aria-label="navigation" class="fd-button fd-button--icon fd-button--transparent fd-button--compact">
                        <i class="sap-icon--arrow-bottom"></i>
                    </button>
                </div>
                <div class="fd-bar__element fd-bar__element--full-width">
                    <div class="fd-input-group">
                        <input aria-labelledby="dialog-settings" 
                            class="fd-input fd-input-group__input fd-input--compact" type="text" placeholder="Search...">
                        <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--compact">
                            <button aria-label="navigation"
                                class="fd-button fd-input-group__button fd-button--icon fd-button--transparent fd-button--compact">
                                <i class="sap-icon--search"></i>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <ul aria-labelledby="dialog-settings" class="fd-list fd-list--multi-input fd-list--compact"
                aria-multiselectable="true" role="listbox">
                <li class="fd-list__item is-selected" role="option">
                  <input aria-label="checkbox" type="checkbox" checked
                    class="fd-checkbox fd-checkbox--compact fd-list__input" id="GGi4ezFD1">
                  <label class="fd-checkbox__label fd-checkbox__label--compact fd-list__label" for="GGi4ezFD1">
                      <span class="fd-list__title">All</span>
                  </label>
                </li>
                <li class="fd-list__item is-selected" role="option">
                  <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox fd-checkbox--compact fd-list__input" id="GGi4ez641">
                  <label class="fd-checkbox__label fd-checkbox__label--compact fd-list__label" for="GGi4ez641">
                      <span class="fd-list__title">Name</span>
                  </label>
                </li>
                <li class="fd-list__item is-selected" role="option">
                  <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox fd-checkbox--compact fd-list__input" id="Ai4FGFG612">
                  <label class="fd-checkbox__label fd-checkbox__label--compact fd-list__label" for="Ai4FGFG612">
                      <span class="fd-list__title">Status</span>
                  </label>
                </li>
                <li class="fd-list__item is-selected" role="option">
                  <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox fd-checkbox--compact fd-list__input" id="Ai4e88614">
                  <label class="fd-checkbox__label fd-checkbox__label--compact fd-list__label" for="Ai4e88614">
                      <span class="fd-list__title">Price</span>
                  </label>
                </li>
                <li class="fd-list__item is-selected" role="option">
                  <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox fd-checkbox--compact fd-list__input" id="Ai4egh6024">
                  <label class="fd-checkbox__label fd-checkbox__label--compact fd-list__label" for="Ai4egh6024">
                      <span class="fd-list__title">Country</span>
                  </label>
                </li>
            </ul>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button aria-label="navigation" class="fd-dialog__decisive-button fd-button fd-button--emphasized fd-button--compact" onclick="toggleClass('settings-dialog-example', 'fd-dialog--active')">OK</button>
                </div>
                <div class="fd-bar__element">
                    <button aria-label="navigation" class="fd-dialog__decisive-button fd-button fd-button--transparent fd-button--compact" onclick="toggleClass('settings-dialog-example', 'fd-dialog--active')">Cancel</button>
                </div>
            </div>
        </footer>
    </section>
</div>
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table With Advanced Shellbar</h4>
    <div class="fd-toolbar__spacer"></div>
    <button aria-label="navigation" class="fd-button fd-button--compact fd-button--transparent" onclick="toggleClass('filter-dialog-example', 'fd-dialog--active')">
        <i class="sap-icon--filter"></i>
    </button>
    <button aria-label="navigation" class="fd-button fd-button--compact fd-button--transparent" onclick="toggleClass('settings-dialog-example', 'fd-dialog--active')">
        <i class="sap-icon--action-settings"></i>
    </button>
</div>
<table class="fd-table fd-table--compact">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Name</th>
            <th class="fd-table__cell" scope="col">Status</th>
            <th class="fd-table__cell" scope="col">Price</th>
            <th class="fd-table__cell" scope="col">Country</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell">Banana</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--positive">
                    Available
                </span>
            </td>
            <td class="fd-table__cell">5 EUR</td>
            <td class="fd-table__cell">India</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">Pineapple</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--negative">
                    Out of stock
                </span>
            </td>
            <td class="fd-table__cell">2 EUR</td>
            <td class="fd-table__cell">Mexico</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">Orange</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--informative">
                    Temporary unavailable
                </span>
            </td>
            <td class="fd-table__cell">6 EUR</td>
            <td class="fd-table__cell">Spain</td>
        </tr>
    </tbody>
</table>
`;

/**
 * Responsive table is not that different than basic table, there should be used some modifiers, to remove borders.
 For Pop-in example markup is changed, one row is transformed to 2 rows with `fd-table__row--main` and
 `fd-table__row--secondary`modifiers. Also some cells should be merged into paragraphs.
 */

export const responsiveTable = () => `
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Responsive Table</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--no-horizontal-borders">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="kqqzPI">
                <label class="fd-checkbox__label" for="kqqzPI"></label>
            </th>
            <th class="fd-table__cell" scope="col">Name</th>
            <th class="fd-table__cell" scope="col">Status</th>
            <th class="fd-table__cell" scope="col">Price</th>
            <th class="fd-table__cell" scope="col">Country</th>
            <th class="fd-table__cell"></th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="EWuzWh">
                <label class="fd-checkbox__label" for="EWuzWh"></label>
            </td>
            <td class="fd-table__cell">Banana</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--positive">
                    Available
                </span>
            </td>
            <td class="fd-table__cell">5 EUR</td>
            <td class="fd-table__cell">India</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                <i class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow" role="presentation"></i>
            </td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="19j0Sc">
                <label class="fd-checkbox__label" for="19j0Sc"></label>
            </td>
            <td class="fd-table__cell">Pineapple</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--negative">
                    Out of stock
                </span>
            </td>
            <td class="fd-table__cell">2 EUR</td>
            <td class="fd-table__cell">Mexico</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                <i class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow" role="presentation"></i>
            </td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="a7SfGX">
                <label class="fd-checkbox__label" for="a7SfGX"></label>
            </td>
            <td class="fd-table__cell">Orange</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--informative">
                    Temporary unavailable
                </span>
            </td>
            <td class="fd-table__cell">6 EUR</td>
            <td class="fd-table__cell">Spain</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                <i class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow" role="presentation"></i>
            </td>
        </tr>
    </tbody>
</table>`;

export const responsiveTablePopInMode = () => `
<div style="max-width: 450px">
    <div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
        <h4 style="margin: 0;">Responsive Table - Pop-in mode</h4>
        <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
    </div>
    <table class="fd-table fd-table--no-horizontal-borders fd-table--no-vertical-borders fd-table--pop-in">
        <tbody class="fd-table__body">
            <tr class="fd-table__row fd-table__row--main fd-table__row--activable fd-table__row--hoverable">
                <td class="fd-table__cell">
                    <p class="fd-table__text fd-table__text--title">Banana</p>
                    <p class="fd-table__text">India</p>
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content">
                    5 EUR
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                    <i class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow" role="presentation"></i>
                </td>
            </tr>
            <tr class="fd-table__row fd-table__row--secondary">
                <td class="fd-table__cell" colspan="100%">
                    <p class="fd-table__text">
                        <label class="fd-form-label">Status:</label>
                        <span class="fd-object-status fd-object-status--positive">
                            Available
                        </span>
                    </p>
                    <p class="fd-table__text">
                        <label class="fd-form-label">Date Of Expire:</label>
                        12.01.12
                    </p>
                </td>
            </tr>
            <tr class="fd-table__row fd-table__row--main fd-table__row--activable fd-table__row--hoverable">
                <td class="fd-table__cell">
                    <p class="fd-table__text fd-table__text--title">Very long name for orange, which no one expected, forces text wrapping into another line.</p>
                    <p class="fd-table__text">Spain</p>
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content">
                    6 EUR
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                    <i class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow" role="presentation"></i>
                </td>
            </tr>
            <tr class="fd-table__row fd-table__row--secondary">
                <td class="fd-table__cell" colspan="100%">
                    <p class="fd-table__text">
                        <label class="fd-form-label">Status:</label>
                        <span class="fd-object-status fd-object-status--negative">
                            Out of stock
                        </span>
                    </p>
                    <p class="fd-table__text">
                        <label class="fd-form-label">Date Of Expire:</label>
                        12.01.12
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<br>
<div style="max-width: 450px">
    <div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
        <h4 style="margin: 0;">Responsive Table - Pop-in Mode with Checkboxes and Navigation Indicator</h4>
        <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
    </div>
    <table class="fd-table fd-table--no-horizontal-borders fd-table--no-vertical-borders fd-table--pop-in">
        <tbody class="fd-table__body">
            <tr class="fd-table__row fd-table__row--main">
                <td class="fd-table__cell fd-table__cell--checkbox">
                    <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="CWkhTG">
                    <label class="fd-checkbox__label" for="CWkhTG"></label>
                </td>
                <td class="fd-table__cell">
                    <p class="fd-table__text fd-table__text--title">Banana</p>
                    <p class="fd-table__text">India</p>
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content">
                    5 EUR
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                    <i class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow" role="presentation"></i>
                </td>
            </tr>
            <tr class="fd-table__row fd-table__row--secondary">
                <td class="fd-table__cell fd-table__cell--checkbox"></td>
                <td class="fd-table__cell" colspan="100%">
                    <p class="fd-table__text">
                        <label class="fd-form-label">Status:</label>
                        <span class="fd-object-status fd-object-status--positive">
                            Available
                        </span>
                    </p>
                    <p class="fd-table__text">
                        <label class="fd-form-label">Date Of Expire:</label>
                        12.01.12
                    </p>
                </td>
            </tr>
            <tr class="fd-table__row fd-table__row--main">
                <td class="fd-table__cell fd-table__cell--checkbox">
                    <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Yeas6w">
                    <label class="fd-checkbox__label" for="Yeas6w"></label>
                </td>
                <td class="fd-table__cell">
                    <p class="fd-table__text fd-table__text--title">Very long name for orange, which no one expected, forces text wrapping into another line.</p>
                    <p class="fd-table__text">Spain</p>
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content">
                    6 EUR
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                    <i class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow" role="presentation"></i>
                </td>
            </tr>
            <tr class="fd-table__row fd-table__row--secondary">
                <td class="fd-table__cell fd-table__cell--checkbox"></td>
                <td class="fd-table__cell" colspan="100%">
                    <p class="fd-table__text">
                        <label class="fd-form-label">Status:</label>
                        <span class="fd-object-status fd-object-status--negative">
                            Out of stock
                        </span>
                    </p>
                    <p class="fd-table__text">
                        <label class="fd-form-label">Date Of Expire:</label>
                        12.01.12
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
</div>
`;

/**
 * To show that an item needs attention, you can show a highlight indicator next to the item.
 This can be achieved by passing the `fd-table__cell--status-indicator` class to each row.
 Other indicators such as semantic states and modes can be added using the `--valid`,
 `--information`, `--error`, `--warning` modifiers.
 */

export const semanticRows = () => `
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table with Semantic Rows</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--status-indicator"></th>
            <th class="fd-table__cell fd-table__cell--checkbox" scope="col">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai9ez611">
                <label class="fd-checkbox__label" for="Ai9ez611"></label>
            </th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai9ek611">
                <label class="fd-checkbox__label" for="Ai9ek611"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator fd-table__cell--status-indicator--valid"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai9ek673">
                <label class="fd-checkbox__label" for="Ai9ek673"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell fd-table__cell--valid">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai9ek69s">
                <label class="fd-checkbox__label" for="Ai9ek69s"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
         <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator fd-table__cell--status-indicator--warning"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai9ekk69s">
                <label class="fd-checkbox__label" for="Ai9ekk69s"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell fd-table__cell--warning">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai73k69s">
                <label class="fd-checkbox__label" for="Ai73k69s"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
         <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator fd-table__cell--status-indicator--error"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai734F6s">
                <label class="fd-checkbox__label" for="Ai734F6s"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell fd-table__cell--error">01/26/17</td>
        </tr>  
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai73HE36s">
                <label class="fd-checkbox__label" for="Ai73HE36s"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
         <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator fd-table__cell--status-indicator--information"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai7JDE36s">
                <label class="fd-checkbox__label" for="Ai7JDE36s"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell fd-table__cell--information">01/26/17</td>
        </tr>   
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai7JGD6s">
                <label class="fd-checkbox__label" for="Ai7JGD6s"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>                    
    </tbody>
</table>
`;

/** To merge cells, the `--no-horizontal-border` or `--no-vertical-border` modifier should be added. */

export const mergedCells = () => `
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table with Merged Cells</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Name</th>
            <th class="fd-table__cell" scope="col">Status</th>
            <th class="fd-table__cell" scope="col">Price</th>
            <th class="fd-table__cell" scope="col">Country</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row fd-table__row--activable">
            <td class="fd-table__cell fd-table__cell--no-horizontal-border fd-table__cell--no-vertical-border">Banana</td>
            <td class="fd-table__cell fd-table__cell--no-vertical-border">
                <span class="fd-object-status fd-object-status--positive">
                    Available
                </span>
            </td>
            <td class="fd-table__cell">5 EUR</td>
            <td class="fd-table__cell">India</td>
        </tr>
        <tr class="fd-table__row fd-table__row--activable">
            <td class="fd-table__cell fd-table__cell--no-horizontal-border">Pineapple</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--negative">
                    Out of stock
                </span>
            </td>
            <td class="fd-table__cell">2 EUR</td>
            <td class="fd-table__cell">Mexico</td>
        </tr>
        <tr class="fd-table__row fd-table__row--activable">
            <td class="fd-table__cell">Orange</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--informative">
                    Temporary unavailable
                </span>
            </td>
            <td class="fd-table__cell">6 EUR</td>
            <td class="fd-table__cell">Spain</td>
        </tr>
    </tbody>
</table>
`;

/**
 * When more than three actions exist per row and/or there isn't enough space for the required actions,
 a contextual menu can be substituted to display all actions in one menu.
 */

export const tableWithContextualMenu = () => `
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table with Contextual Menu</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table" >
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col"></th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
            <td class="fd-table__cell fd-table__cell--fit-content">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <button aria-label="navigation" class="fd-button fd-button--transparent" aria-controls="pQqQRFF3" aria-haspopup="true" aria-expanded="false" aria-label="More">
                            <i class="sap-icon--overflow"></i>
                        </button>
                    </div>
                    <div class="fd-popover__body" aria-hidden="true" id="pQqQRFF3">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 1</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 2</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 3</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
            <td class="fd-table__cell fd-table__cell--fit-content">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <button aria-label="navigation" class="fd-button fd-button--transparent" aria-controls="G54qQRFF3" aria-haspopup="true" aria-expanded="false" aria-label="More">
                            <i class="sap-icon--overflow"></i>
                        </button>
                    </div>
                    <div class="fd-popover__body" aria-hidden="true" id="G54qQRFF3">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 1</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 2</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 3</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
            <td class="fd-table__cell fd-table__cell--fit-content">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <button aria-label="navigation" class="fd-button fd-button--transparent" aria-controls="G54JRFF3" aria-haspopup="true" aria-expanded="false" aria-label="More">
                            <i class="sap-icon--overflow"></i>
                        </button>
                    </div>
                    <div class="fd-popover__body" aria-hidden="true" id="G54JRFF3">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 1</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 2</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 3</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
</table>
 `;

/**
 * Some customization actions can be added to headers, the options will be displayed in popover. Those popover should be
 added with `fd-table__popover` class.
 */

export const withMenuInHeader = () => `
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table with Popover in Headers</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table" >
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">
                <div class="fd-table__popover fd-popover">
                    <div class="fd-popover__control" aria-controls="popoverA1" aria-expanded="false" aria-haspopup="true">
                        <div class="fd-table__inner">
                            Column Header Ascending
                            <span class="fd-table__icon sap-icon--sort-ascending"></span>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="popoverA1">
                        <ul class="fd-list fd-list--compact" role="list">
                            <li tabindex="0" role="listitem" class="fd-list__item">
                                <span class="fd-list__icon sap-icon--sort-descending"></span>
                                <span class="fd-list__title">Sort Descending</span>
                            </li>
                            <li tabindex="0" role="listitem" class="fd-list__item">
                                <span class="fd-list__icon sap-icon--sort-ascending"></span>
                                <span class="fd-list__title">Sort Ascendnig</span>
                            </li>
                            <li role="listitem" class="fd-list__item">
                                <span class="fd-list__icon sap-icon--filter"></span>
                                <div class="fd-form-item  fd-form-item--horizontal">
                                    <label class="fd-form-label" for="input-1d">Filter</label>
                                    <input class="fd-input fd-input--compact" id="input-1d">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </th>
            <th class="fd-table__cell" scope="col">
                <div class="fd-table__popover fd-popover">
                    <div class="fd-popover__control" aria-controls="popoverA2" aria-expanded="false" aria-haspopup="true">
                        <div class="fd-table__inner">
                            Column Header Descending
                            <span class="fd-table__icon sap-icon--sort-descending"></span>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="popoverA2">
                        <ul class="fd-list fd-list--compact" role="list">
                            <li tabindex="0" role="listitem" class="fd-list__item">
                                <span class="fd-list__icon sap-icon--sort-descending"></span>
                                <span class="fd-list__title">Sort Descending</span>
                            </li>
                            <li tabindex="0" role="listitem" class="fd-list__item">
                                <span class="fd-list__icon sap-icon--sort-ascending"></span>
                                <span class="fd-list__title">Sort Ascendnig</span>
                            </li>
                            <li role="listitem" class="fd-list__item">
                                <span class="fd-list__icon sap-icon--filter"></span>
                                <div class="fd-form-item  fd-form-item--horizontal">
                                    <label class="fd-form-label" for="input-1d">Filter</label>
                                    <input class="fd-input fd-input--compact" id="input-1d2">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

/**
 * To create fixed column, these steps need to be reproduced
 * Wrap the table with element with class `fd-table--fixed`
 * Add `fd-table__cell--fixed` class to cell elements, it should be propagated to whole row
 * Hard code the width of columns, otherwise the cells will be squashed.
 */

export const fixColumnHeader = () => `
<style>
        .fd-table--fixed {
           padding-left: 200px;
        }
        [dir=rtl] .fd-table--fixed,
        .fd-table--fixed[dir=rtl] {
           padding-left: 0;
           padding-right: 200px;            
        }
        
        .fd-table--fixed .fd-table__cell {
            min-width: 200px;
            max-width: 200px;
        }
</style>
<div style="position: relative">
    <div class="fd-table--fixed">
      <table class="fd-table">
         <thead class="fd-table__header">
            <tr class="fd-table__row">
               <th class="fd-table__cell fd-table__cell--fixed"  aria-haspopup="true" scope="col">
                Header Column
               </th>
               <th class="fd-table__cell" scope="col">
                    Header Column
               </th>
               <th class="fd-table__cell" scope="col">
                    Header Column
               </th>
               <th class="fd-table__cell" scope="col">
                    Header Column
               </th>
               <th class="fd-table__cell" scope="col">
                    Header Column
               </th>
               <th class="fd-table__cell" scope="col">
                    Header Column
               </th>
               <th class="fd-table__cell" scope="col">
                    Header Column
               </th>
               <th class="fd-table__cell" scope="col">
                    Header Column
               </th>
            </tr>
         </thead>
         <tbody class="fd-table__body">
            <tr class="fd-table__row">
               <th class="fd-table__cell fd-table__cell--fixed" scope="row">Row header</th>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
            </tr>
            <tr class="fd-table__row">
               <th class="fd-table__cell fd-table__cell--fixed" scope="row">Row header</th>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
            </tr>
            <tr class="fd-table__row">
               <th class="fd-table__cell fd-table__cell--fixed" scope="row">Row header</th>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
            </tr>
         </tbody>
      </table>
    </div>
</div>
`;

/** Navigation can be indicated on a row in the final column using the `.fd-table__cell--navigated` class. */

export const navigationIndicationStates = () => `
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table with Navigation Indication State</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col"></th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
            <td class="fd-table__cell fd-table__cell--fit-content">
                <button aria-label="navigation" class="fd-button fd-button--transparent">
                    <i class="sap-icon--navigation-right-arrow"></i>
                </button>
            </td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--navigated">
                <button aria-label="navigation" class="fd-button fd-button--transparent">
                    <i class="sap-icon--navigation-right-arrow"></i>
                </button>
            </td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
            <td class="fd-table__cell fd-table__cell--fit-content">
                <button aria-label="navigation" class="fd-button fd-button--transparent">
                    <i class="sap-icon--navigation-right-arrow"></i>
                </button>
            </td>
        </tr>
    </tbody>
</table>
`;

/** Grid tables can contain various input elements inside of cells. Provide information about the table for screen readers (such as a title, summary, and / or keyboard navigation instructions) using the `fd-table__caption` class. */

export const gridTable = () => `<table class="fd-table" aria-describedby="FU4EwF6st">
    <caption class="fd-table__caption" id="FU4EwF6st" aria-live="polite">
        Inventory Status. Use arrow keys to navigate between cells.
    </caption>
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th id="fd-4C0WYEyPqUS" class="fd-table__cell fd-table__cell--checkbox" tabindex="-1">
                <div class="fd-form-item">
                    <input aria-checked="false" aria-label="Select all rows" class="fd-checkbox" id="fd-gEAc87vXrAR" type="checkbox" value="" tabindex="-1" /><label for="fd-gEAc87vXrAR" class="fd-form-label fd-checkbox__label"></label>
                </div>
            </th>
            <th id="fd-KWRjZC5EqkW" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Product Name
            </th>
            <th id="fd-NPWFoAxBzUa" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Product ID
            </th>
            <th id="fd-jtbiFXSC7Uy" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Quantity
            </th>
            <th id="fd-mQuRgWM6D0u" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Status
            </th>
            <th id="fd-hEzpEm5PMU2" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Supplier
            </th>
            <th id="fd-NujEpyB6EkG" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Image
            </th>
            <th id="fd-NMFoRAVbFky" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Heavy Weight
            </th>
            <th id="fd-OspcU6H7F0q" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Categories
            </th>
            <th id="fd-nEac1Ko5K0e" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Delivery Date
            </th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row" aria-selected="false">
            <td class="fd-table__cell fd-table__cell--checkbox" tabindex="-1">
                <div class="fd-form-item">
                    <input aria-checked="false" aria-label="Select row" class="fd-checkbox" id="fd-7EMZOUrG2eK" name="Notebook Basic 15" type="checkbox" value="" tabindex="-1" />
                    <label for="fd-7EMZOUrG2eK" class="fd-form-label fd-checkbox__label"></label>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span>Notebook Basic 15</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <input aria-labelledby="fd-NPWFoAxBzUa" class="fd-input" name="Notebook Basic 15" type="text" value="HT-1000" tabindex="-1" />
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span>10</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span class="fd-object-status fd-object-status--positive">Available</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-form-item">
                    <div class="fd-popover fd-popover--full-width">
                        <div class="fd-popover__control">
                            <div class="fd-select" tabindex="-1" aria-labelledby="fd-hEzpEm5PMU2" aria-expanded="false" aria-haspopup="listbox">
                                <div class="fd-select__control">
                                    <span class="fd-select__text-content">Very Best Screens</span>
                                    <span class="fd-button fd-button--transparent fd-select__button"><i aria-hidden="true" class="sap-icon--slim-arrow-down" role="img"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <a href="https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg" class="fd-link" tabindex="-1">Show image</a>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-form-item">
                    <input aria-checked="false" aria-label="Heavy Weight" class="fd-checkbox" id="fd-tF03y4hjeLT" type="checkbox" value="" tabindex="-1" /><label for="fd-tF03y4hjeLT" class="fd-form-label fd-checkbox__label"></label>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <input aria-labelledby="fd-OspcU6H7F0q" class="fd-input" type="text" value="" tabindex="-1" />
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-popover fd-popover--full-width">
                    <div class="fd-popover__control">
                        <div aria-expanded="false" aria-haspopup="true" class="fd-input-group--control fd-input-group">
                            <input aria-labelledby="fd-nEac1Ko5K0e" class="fd-input fd-input-group__input" placeholder="MM/DD/YYYY" type="text" value="" tabindex="-1" />
                            <span class="fd-input-group__addon fd-input-group__addon--button">
                                <button aria-label="Choose date" class="fd-button fd-button--transparent fd-input-group__button" type="button" tabindex="-1">
                                    <i aria-hidden="true" class="sap-icon--appointment-2" role="img"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
        <tr class="fd-table__row" aria-selected="false">
            <td class="fd-table__cell fd-table__cell--checkbox" tabindex="-1">
                <div class="fd-form-item">
                    <input aria-checked="false" aria-label="Select row" class="fd-checkbox" id="fd-LbUmEre6JKj" name="Notebook Basic 17" type="checkbox" value="" tabindex="-1" />
                    <label for="fd-LbUmEre6JKj" class="fd-form-label fd-checkbox__label"></label>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span>Notebook Basic 17</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <input aria-labelledby="fd-NPWFoAxBzUa" class="fd-input" name="Notebook Basic 17" type="text" value="HT-1001" tabindex="-1" />
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span>0</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span class="fd-object-status fd-object-status--negative">Out of stock</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-form-item">
                    <div class="fd-popover fd-popover--full-width">
                        <div class="fd-popover__control">
                            <div class="fd-select" tabindex="-1" aria-labelledby="fd-hEzpEm5PMU2" aria-expanded="false" aria-haspopup="listbox">
                                <div class="fd-select__control">
                                    <span class="fd-select__text-content">Fasttech</span>
                                    <span class="fd-button fd-button--transparent fd-select__button"><i aria-hidden="true" class="sap-icon--slim-arrow-down" role="img"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <a href="https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1001.jpg" class="fd-link" tabindex="-1">Show image</a>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-form-item">
                    <input aria-checked="false" aria-label="Heavy Weight" class="fd-checkbox" id="fd-9WXDOs3SBLH" type="checkbox" value="" tabindex="-1" /><label for="fd-9WXDOs3SBLH" class="fd-form-label fd-checkbox__label"></label>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <input aria-labelledby="fd-OspcU6H7F0q" class="fd-input" type="text" value="" tabindex="-1" />
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-popover fd-popover--full-width">
                    <div class="fd-popover__control">
                        <div aria-expanded="false" aria-haspopup="true" class="fd-input-group--control fd-input-group">
                            <input aria-labelledby="fd-nEac1Ko5K0e" class="fd-input fd-input-group__input" placeholder="MM/DD/YYYY" type="text" value="" tabindex="-1" />
                            <span class="fd-input-group__addon fd-input-group__addon--button">
                                <button aria-label="Choose date" class="fd-button fd-button--transparent fd-input-group__button" type="button" tabindex="-1">
                                    <i aria-hidden="true" class="sap-icon--appointment-2" role="img"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
        <tr class="fd-table__row" aria-selected="false">
            <td class="fd-table__cell fd-table__cell--checkbox" tabindex="-1">
                <div class="fd-form-item">
                    <input aria-checked="false" aria-label="Select row" class="fd-checkbox" id="fd-Cmvc_Hc7N3_" name="Notebook Basic 18" type="checkbox" value="" tabindex="-1" />
                    <label for="fd-Cmvc_Hc7N3_" class="fd-form-label fd-checkbox__label"></label>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span>Notebook Basic 18</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <input aria-labelledby="fd-NPWFoAxBzUa" class="fd-input" name="Notebook Basic 18" type="text" value="HT-1002" tabindex="-1" />
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span>13</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span class="fd-object-status fd-object-status--positive">Available</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-form-item">
                    <div class="fd-popover fd-popover--full-width">
                        <div class="fd-popover__control">
                            <div class="fd-select" tabindex="-1" aria-labelledby="fd-hEzpEm5PMU2" aria-expanded="false" aria-haspopup="listbox">
                                <div class="fd-select__control">
                                    <span class="fd-select__text-content">Printers for All</span>
                                    <span class="fd-button fd-button--transparent fd-select__button"><i aria-hidden="true" class="sap-icon--slim-arrow-down" role="img"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <a href="https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1002.jpg" class="fd-link" tabindex="-1">Show image</a>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-form-item">
                    <input aria-checked="false" aria-label="Heavy Weight" class="fd-checkbox" id="fd-Rzaro06MMoH" type="checkbox" value="" tabindex="-1" /><label for="fd-Rzaro06MMoH" class="fd-form-label fd-checkbox__label"></label>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <input aria-labelledby="fd-OspcU6H7F0q" class="fd-input" type="text" value="" tabindex="-1" />
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-popover fd-popover--full-width">
                    <div class="fd-popover__control">
                        <div aria-expanded="false" aria-haspopup="true" class="fd-input-group--control fd-input-group">
                                <input aria-labelledby="fd-nEac1Ko5K0e" class="fd-input fd-input-group__input" placeholder="MM/DD/YYYY" type="text" value="" tabindex="-1" />
                                <span class="fd-input-group__addon fd-input-group__addon--button">
                                    <button aria-label="Choose date" class="fd-button fd-button--transparent fd-input-group__button" type="button" tabindex="-1">
                                        <i aria-hidden="true" class="sap-icon--appointment-2" role="img"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
        <tr class="fd-table__row" aria-selected="false">
            <td class="fd-table__cell fd-table__cell--checkbox" tabindex="-1">
                <div class="fd-form-item">
                    <input aria-checked="false" aria-label="Select row" class="fd-checkbox" id="fd-kgZvkuwUtB-" name="Notebook Basic 19" type="checkbox" value="" tabindex="-1" />
                    <label for="fd-kgZvkuwUtB-" class="fd-form-label fd-checkbox__label"></label>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span>Notebook Basic 19</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <input aria-labelledby="fd-NPWFoAxBzUa" class="fd-input" name="Notebook Basic 19" type="text" value="HT-1003" tabindex="-1" />
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span>15</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span class="fd-object-status fd-object-status--positive">Available</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-form-item">
                    <div class="fd-popover fd-popover--full-width">
                        <div class="fd-popover__control">
                            <div class="fd-select" tabindex="-1" aria-labelledby="fd-hEzpEm5PMU2" aria-expanded="false" aria-haspopup="listbox">
                                <div class="fd-select__control">
                                    <span class="fd-select__text-content">Technocom</span>
                                    <span class="fd-button fd-button--transparent fd-select__button"><i aria-hidden="true" class="sap-icon--slim-arrow-down" role="img"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <a href="https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1003.jpg" class="fd-link" tabindex="-1">Show image</a>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-form-item">
                    <input aria-checked="false" aria-label="Heavy Weight" class="fd-checkbox" id="fd-LHL3aUwc6pZ" type="checkbox" value="" tabindex="-1" /><label for="fd-LHL3aUwc6pZ" class="fd-form-label fd-checkbox__label"></label>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <input aria-labelledby="fd-OspcU6H7F0q" class="fd-input" type="text" value="" tabindex="-1" />
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-popover fd-popover--full-width">
                    <div class="fd-popover__control">
                        <div aria-expanded="false" aria-haspopup="true" class="fd-input-group--control fd-input-group">
                            <input aria-labelledby="fd-nEac1Ko5K0e" class="fd-input fd-input-group__input" placeholder="MM/DD/YYYY" type="text" value="" tabindex="-1" />
                            <span class="fd-input-group__addon fd-input-group__addon--button">
                                <button aria-label="Choose date" class="fd-button fd-button--transparent fd-input-group__button" type="button" tabindex="-1">
                                    <i aria-hidden="true" class="sap-icon--appointment-2" role="img"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
</table>
`;
