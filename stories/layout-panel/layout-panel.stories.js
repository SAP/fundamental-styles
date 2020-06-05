import '../../dist/layout-panel.css';

export default {
    title: 'Layouts/LayoutPanel',
    parameters: {
        description: `
  Layout Panels are used to encapsulate part of the content, form elements, lists, collections, etc., on a page.

  Place patterns and interactions within panels on your pages to achieve focus and separation for the tasks at-hand with the information displayed inside the panel.

  ## Elements
  - <code>.fd-layout-panel__header</code>: Layout Panel header.
  - <code>.fd-layout-panel__head</code>: Container for title and description.
  - <code>.fd-layout-panel__title</code>: Title of the Layout Panel.
  - <code>.fd-layout-panel__description</code>: Title of the description.
  - <code>.fd-layout-panel__actions</code>: Layout Panel level actions such as add, remove, delete, sort, etc.
  - <code>.fd-layout-panel__filters</code>: Layout Panel level filters that is specific to the data being displayed within the panel.
  - <code>.fd-layout-panel__body</code>: Main content of the Layout Panel can that hold lists, table, tree, text, form or any other infomation.
  - <code>.fd-layout-panel__footer</code>: Layout Panel footer can be utilized for pagination, secondary actions, add more data, etc.
      `
    }
};

export const primary = () => `
<div class="fd-layout-panel">
  <div class="fd-layout-panel__header">
    <div class="fd-layout-panel__head">
      <h3 class="fd-layout-panel__title">
        .fd-layout-panel__title
      </h3>
      <p class="fd-layout-panel__description">
        .fd-layout-panel__description
      </p>
    </div>
    <div class="fd-layout-panel__actions">
      .fd-layout-panel__actions
    </div>
  </div>
  <div class="fd-layout-panel__filters" id="">
    .fd-layout-panel__filters
  </div>
  <div class="fd-layout-panel__body">
    .fd-layout-panel__body
  </div>
  <div class="fd-layout-panel__footer">
    .fd-layout-panel__footer
  </div>
</div>
`;
