import multiSelectModeExampleHtml from "./multi-select-mode.example.html?raw";
import singleSelectRightModeExampleHtml from "./single-select-right-mode.example.html?raw";
import singleSelectLeftModeExampleHtml from "./single-select-left-mode.example.html?raw";
import singleSelectMasterModeExampleHtml from "./single-select-master-mode.example.html?raw";
import noneModeExampleHtml from "./none-mode.example.html?raw";
import '../../../../src/grid-list.scss';
import '../../../../src/layout-grid.scss';
import '../../../../src/toolbar.scss';
import '../../../../src/button.scss';
import '../../../../src/icon.scss';
import '../../../../src/title.scss';
import '../../../../src/radio.scss';
import '../../../../src/checkbox.scss';
import '../../../../src/avatar.scss';
import '../../../../src/link.scss';
import '../../../../src/object-status.scss';
export default {
  title: 'Components/Grid List/Selection',
  parameters: {
    description: `
As with the list and the responsive table, the grid list displays a set of items. In contrast to both controls, the grid list displays the items not in rows, but in a grid.
The grid list is usually used as an alternative view for a list or table. It is ideal for displaying images, charts, object cards, and other content, which profit from more height (but less width).

##Usage
**Use the grid list if:**

- Your content is “visual” and profits from the rectangular format of the items. This is true for e.g. images, charts, and object cards.
- The focus is on items, not on cells. The grid list shows complete items.
- You want to display a homogeneous set of basic data.
- You need to sort, group, or filter simple data sets.
- As an alternative view for tables or lists, if the content profits from the different format.

**Do not use the grid list if:**

- Your content is not appropriate for a card-like format. For example, do not use the grid list for displaying a wall of text. Use a table instead.
- The main use case is to select one item from a very small number of items, without viewing additional details. In this case, a select or combo box might be more appropriate.
- Data needs to be structured in a hierarchical manner. In this case, a tree might be more appropriate.
- You need an overview of a large amount of data. In this case, use a chart.
- You just need it for layout reasons. In this case, use a layout container such as the CSSGrid.
- You want to manage complex datasets that need to be extensively sorted, grouped, filtered, or edited. In this case, use a table.
    `,
    tags: ['f3', 'a11y', 'theme', 'development'],
    components: ['grid-list', 'layout-grid', 'toolbar', 'button', 'icon', 'title', 'radio', 'checkbox', 'avatar', 'link', 'object-status']
  }
};
export const NoneMode = () => noneModeExampleHtml;
NoneMode.storyName = 'None mode';
NoneMode.parameters = {
  docs: {
    description: {
      story: 'Items cannot be selected but can still use "navigation", which allows click handling on specific items.'
    }
  }
};
export const SingleSelectMasterMode = () => singleSelectMasterModeExampleHtml;
SingleSelectMasterMode.storyName = 'Single select mode';
SingleSelectMasterMode.parameters = {
  docs: {
    description: {
      story: `
One item in the grid list can be selected. Need click on an item to select it.
To turn on the Single select mode, add the \`fd-grid-list--mode-single-select\` modifier class to the main element.
        `
    }
  }
};
export const SingleSelectLeftMode = () => singleSelectLeftModeExampleHtml;
SingleSelectLeftMode.storyName = 'Single select left mode';
SingleSelectLeftMode.parameters = {
  docs: {
    description: {
      story: `
One item in the grid list can be selected. For this, the grid list provides radio buttons on the left side of each item toolbar.
To turn on the Single select left mode, add the \`fd-grid-list--mode-single-select-left\` modifier class to the main element.
`
    }
  }
};
export const SingleSelectRightMode = () => singleSelectRightModeExampleHtml;
SingleSelectRightMode.storyName = 'Single select right mode';
SingleSelectRightMode.parameters = {
  docs: {
    description: {
      story: `
One item in the grid list can be selected. For this, the grid list provides radio buttons on the left side of each item toolbar.
To turn on the Single select right mode, add the \`fd-grid-list--mode-single-select-right\` modifier class to the main element.
`
    }
  }
};
export const MultiSelectMode = () => multiSelectModeExampleHtml;
MultiSelectMode.storyName = 'Multi select mode';
MultiSelectMode.parameters = {
  docs: {
    description: {
      story: `
Users can select one or more items. For this, the grid list provides checkboxes on the left side of each item toolbar.
To turn on the Multi select mode, add the \`fd-grid-list--mode-multi-select\` modifier class to the main element.
`
    }
  }
};