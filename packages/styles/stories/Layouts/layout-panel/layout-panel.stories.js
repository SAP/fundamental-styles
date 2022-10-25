import '../../../src/layout-panel.scss';
import '../../../src/title.scss';
export default {
    title: 'Layouts/Layout Panel',
    parameters: {
        description: `
  Layout Panels are used to encapsulate part of the content, form elements, lists, collections, etc., on a page.

  Place patterns and interactions within panels on your pages to achieve focus and separation for the tasks at-hand with the information displayed inside the panel.

  ## Elements
  - \`.fd-layout-panel__header\`: Layout Panel header.
  - \`.fd-layout-panel__head\`: Container for title and description.
  - \`.fd-layout-panel__title\`: Title of the Layout Panel.
  - \`.fd-layout-panel__description\`: Title of the description.
  - \`.fd-layout-panel__actions\`: Layout Panel level actions such as add, remove, delete, sort, etc.
  - \`.fd-layout-panel__filters\`: Layout Panel level filters that is specific to the data being displayed within the panel.
  - \`.fd-layout-panel__body\`: Main content of the Layout Panel can that hold lists, table, tree, text, form or any other infomation.
  - \`.fd-layout-panel__footer\`: Layout Panel footer can be utilized for pagination, secondary actions, add more data, etc.
      `
    }
};

export const Primary = () => `<div class="fd-layout-panel">
  <div class="fd-layout-panel__header">
    <div class="fd-layout-panel__head">
      <div class="fd-layout-panel__title">
        <h3 class="fd-title fd-title--h5">
          .fd-layout-panel__title
        </h3>
      </div>
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
