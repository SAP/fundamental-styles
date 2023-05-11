import partialItemsExampleHtml from "./partial-items.example.html?raw";
import footerExampleHtml from "./footer.example.html?raw";
import moreExampleHtml from "./more.example.html?raw";
import filterInfobarExampleHtml from "./filter-infobar.example.html?raw";
import highlightExampleHtml from "./highlight.example.html?raw";
import statesExampleHtml from "./states.example.html?raw";
import groupExampleHtml from "./group.example.html?raw";
import deleteModeExampleHtml from "./delete-mode.example.html?raw";
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
  title: 'Components/Grid List/Grid List',
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
export const DeleteMode = () => deleteModeExampleHtml;
DeleteMode.storyName = 'Delete mode';
DeleteMode.parameters = {
  docs: {
    description: {
      story: `
This places a Delete button on the right side of an item toolbar.
To turn on the Delete mode, add the \`fd-grid-list--mode-delete\` modifier class to the main element.
`
    }
  }
};
export const Group = () => groupExampleHtml;
Group.parameters = {
  docs: {
    description: {
      story: `
If grouped, a group header is displayed above all items which belong to the corresponding group. The group header is not interactive.
To create grid list group headers use \`fd-grid-list__group-header\` class.
    `
    }
  }
};
export const States = () => statesExampleHtml;
States.parameters = {
  docs: {
    description: {
      story: `
To apply state, add the corresponding class \`.fd-grid-list__item--(unread|error|locked|draft)\` to the \`.fd-grid-list__item\`.
    `
    }
  }
};
export const Highlight = () => highlightExampleHtml;
Highlight.parameters = {
  docs: {
    description: {
      story: `
A highlight indicator is shown in front of the item it needs to show that an item needs attention.
To add highlight indicator, add a span element with \`.fd-grid-list__highlight fd-grid-list__highlight--(success|warning|error|neutral)\` class, before the item body element
    `
    }
  }
};
export const FilterInfobar = () => filterInfobarExampleHtml;
FilterInfobar.parameters = {
  docs: {
    description: {
      story: `
The filter information panel displays the selected filters.
To show filter information panel, follow the current example.
`
    }
  }
};
export const More = () => moreExampleHtml;
More.storyName = '"More" Button';
More.parameters = {
  docs: {
    description: {
      story: `
The More button loads more items to the front end if not all items have yet been loaded.
To show "More" button, follow the current example.
`
    }
  }
};
export const Footer = () => footerExampleHtml;
Footer.parameters = {
  docs: {
    description: {
      story: `
The footer can be used to display additional static information relating to the content.
To create a grid list footer, follow the current example.
`
    }
  }
};
export const PartialItems = () => partialItemsExampleHtml;
PartialItems.storyName = 'No height / Partial Items';
PartialItems.parameters = {
  docs: {
    description: {
      story: `
It's possible to have items without some parts like image, title & description or body.

But please note that by default items have equal height set by the tallest item, you can overwrite it by yourself or use
class \`fd-grid-list__item--height-auto\` to set item's height to auto.
`
    }
  }
};