import '../../../src/layout-panel.scss';
import '../../../src/title.scss';
import '../../../src/button.scss';

export default {
    title: 'Layouts/Layout Panel',
    parameters: {
        description: `
  Layout Panels are used to encapsulate part of the content, form elements, lists, collections, etc., on a page.

  Place patterns and interactions within panels on your pages to achieve focus and separation for the tasks at-hand with the information displayed inside the panel.

  ## Elements
  - \`.fd-layout-panel\`
    - \`.fd-layout-panel--transparent\`: for Layout Panel with transparent background
  - \`.fd-layout-panel__header\`
  - \`.fd-layout-panel__head\`: Container for title and description
  - \`.fd-layout-panel__title\`
  - \`.fd-layout-panel__description\`
  - \`.fd-layout-panel__actions\`: Layout Panel actions such as add, remove, delete, sort, etc.
  - \`.fd-layout-panel__filters\`: Layout Panel filters that is specific to the data being displayed within the panel
  - \`.fd-layout-panel__body\`: Main content of the Layout Panel can that hold lists, table, tree, text, form or any other infomation. 
    - \`.fd-layout-panel__body--bleed\`: removes the paddings on the body.
  - \`.fd-layout-panel__footer\`: Layout Panel footer can be utilized for pagination, secondary actions, add more data, etc. 
    - \`.fd-layout-panel__footer--start\`: position the content of the footer to the left
    - \`.fd-layout-panel__footer--end\`: position the content of the footer to the right
      `
    }
};

export const Primary = () => `<div class="fd-layout-panel">
  <div class="fd-layout-panel__header">
    <div class="fd-layout-panel__head">
      <div class="fd-layout-panel__title">
        <h5 class="fd-title fd-title--h5">
          .fd-layout-panel__title
        </h5>
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

export const TransparentBackground = () => `<div class="fd-layout-panel fd-layout-panel--transparent">
  <div class="fd-layout-panel__header">
    <div class="fd-layout-panel__head">
      <div class="fd-layout-panel__title">
        <h5 class="fd-title fd-title--h5">
          .fd-layout-panel__title
        </h5>
      </div>
      <p class="fd-layout-panel__description">
        .fd-layout-panel__description
      </p>
    </div>
    <div class="fd-layout-panel__actions">
      <button class="fd-button fd-button--emphasized">Action</button>
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

export const FooterVariations = () => `<div class="fd-layout-panel">
  <div class="fd-layout-panel__header">
    <div class="fd-layout-panel__head">
      <div class="fd-layout-panel__title">
        <h5 class="fd-title fd-title--h5">
          .fd-layout-panel__title
        </h5>
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
  <div class="fd-layout-panel__footer fd-layout-panel__footer--end">
    .fd-layout-panel__footer.fd-layout-panel__footer--end
  </div>
</div>
<br><br>
<div class="fd-layout-panel">
  <div class="fd-layout-panel__header">
    <div class="fd-layout-panel__head">
      <div class="fd-layout-panel__title">
        <h5 class="fd-title fd-title--h5">
          .fd-layout-panel__title
        </h5>
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
  <div class="fd-layout-panel__footer fd-layout-panel__footer--start">
    .fd-layout-panel__footer.fd-layout-panel__footer--start
  </div>
</div>
`;
