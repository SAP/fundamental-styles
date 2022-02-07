export default {
    title: 'Experimental/Table',
    parameters: {
        description: `
The table is an un-opinionated component that can contain a variety of cells with their own components.
        `,
        components: ['fn-table', 'icon', 'fn-avatar', 'fn-checkbox', 'fn-info-label', 'fn-button', 'fn-link', 'fn-object-status', 'fn-info-label']
    }
};

export const Primary = () => `
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
            <td class="fn-table__cell">
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" id="checkbox-1" name="checkbox-1" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                </div>
                Table cell with checkbox
            </td>
            <td class="fn-table__cell">Table Cell</td>
            <td class="fn-table__cell">
                <span class="fn-info-label fn-info-label--indigo">
                    <span class="fn-info-label__circle"></span>
                <span class="fn-info-label__text">State</span>
            </td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
        </tr>
        <tr class="fn-table__row">
            <td class="fn-table__cell"><a class="fn-link">user.name@email.com</a></td>
            <td class="fn-table__cell">
            <div class="fn-table__text fn-table__text--no-wrap" style="max-width: 250px">
                Very long Text Not Wrapped, limited by max-width
                Very long Text Not Wrapped, limited by max-width
                Very long Text Not Wrapped, limited by max-width
                Very long Text Not Wrapped, limited by max-width
                Very long Text Not Wrapped, limited by max-width
                Very long Text Not Wrapped, limited by max-width
            </div>
            </td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell is-selected">Selected table cell</td>
            <td class="fn-table__cell">01/26/17</td>
        </tr>
        <tr class="fn-table__row">
            <td class="fn-table__group-header">Group Header</td>
            <td class="fn-table__cell"></td>
            <td class="fn-table__cell"></td>
            <td class="fn-table__cell"></td>
            <td class="fn-table__cell"></td>
        </tr>
        <tr class="fn-table__row">
            <td class="fn-table__cell"><a class="fn-link">user.name@email.com</a></td>
            <td class="fn-table__cell">
            <div class="fn-table__text" style="max-width: 250px">
                Very long Text Wrapped, limited by max-width
                Very long Text Wrapped, limited by max-width
                Very long Text Wrapped, limited by max-width
                Very long Text Wrapped, limited by max-width
            </div>
            </td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">01/26/17</td>
        </tr>
        <tr class="fn-table__row is-selected">
            <td class="fn-table__cell"><a class="fn-link">user.name@email.com</a></td>
            <td class="fn-table__cell">Selected row</td>
            <td class="fn-table__cell">Selected row</td>
            <td class="fn-table__cell">Selected row</td>
            <td class="fn-table__cell">01/26/17</td>
        </tr>
        <tr class="fn-table__row">
            <td class="fn-table__cell"><a class="fn-link">user.name@email.com</a></td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">
                <div class="fn-object-status fn-object-status--byline fn-object-status--positive">
                <span class="sap-icon sap-icon--status-positive"></span>
                <div class="fn-object-status__text">Positive</div>
            </div>
            </td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">
                <div class="fn-table__end-container">
                    Some text
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
            <td class="fn-table__cell">01/26/17</td>
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
            <td class="fn-table__cell">01/26/17</td>
        </tr>
        <tr class="fn-table__row">
            <td class="fn-table__cell"><a class="fn-link">user.name@email.com</a></td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">Table cell</td>
            <td class="fn-table__cell">
                <div class="fn-table__end-container">
                    Navigation
                    <button class="fn-button fn-button--icon-only fn-button--layout">
                        <span class="sap-icon sap-icon--navigation-right-arrow"></span>
                    </button>
                </div>
            </td>
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

Primary.storyName = 'Table';
