export default {
    title: 'Experimental/Table',
    parameters: {
        description: `

        `,
        components: ['fn-table', 'icon', 'fn-avatar', 'fn-checkbox', 'fn-info-label', 'fn-button', 'fn-link']
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
      <td class="fn-table__cell">Table cell</td>
      <td class="fn-table__cell">Table cell</td>
      <td class="fn-table__cell">01/26/17</td>
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
    <tr class="fn-table__row">
      <td class="fn-table__cell"><a class="fn-link">user.name@email.com</a></td>
      <td class="fn-table__cell">First Name</td>
      <td class="fn-table__cell">Table cell</td>
      <td class="fn-table__cell">Table cell</td>
      <td class="fn-table__cell">01/26/17</td>
    </tr>
  </tbody>
</table>
`;

Primary.storyName = 'Table';
