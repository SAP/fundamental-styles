import treeRowsTableExampleHtml from "./tree-rows-table.example.html?raw";
import groupRowsInTableExampleHtml from "./group-rows-in-table.example.html?raw";
import noDataTableExampleHtml from "./no-data-table.example.html?raw";
import gridTableExampleHtml from "./grid-table.example.html?raw";
import responsiveTablePopInModeExampleHtml from "./responsive-table-pop-in-mode.example.html?raw";
import responsiveTableExampleHtml from "./responsive-table.example.html?raw";
import navIndicatorsExampleHtml from "./nav-indicators.example.html?raw";
import navIconExampleHtml from "./nav-icon.example.html?raw";
import fixColumnHeaderExampleHtml from "./fix-column-header.example.html?raw";
import menuHeaderExampleHtml from "./menu-header.example.html?raw";
import contextualMenuExampleHtml from "./contextual-menu.example.html?raw";
import advancedToolbarExampleHtml from "./advanced-toolbar.example.html?raw";
import paginationExampleHtml from "./pagination.example.html?raw";
import condensedCheckboxExampleHtml from "./condensed-checkbox.example.html?raw";
import checkboxExampleHtml from "./checkbox.example.html?raw";
import focusableCellsExampleHtml from "./focusable-cells.example.html?raw";
import focusableRowsExampleHtml from "./focusable-rows.example.html?raw";
import semanticRowsExampleHtml from "./semantic-rows.example.html?raw";
import interactiveExampleHtml from "./interactive.example.html?raw";
import condensedFooterExampleHtml from "./condensed-footer.example.html?raw";
import footerExampleHtml from "./footer.example.html?raw";
import noOuterBorderExampleHtml from "./no-outer-border.example.html?raw";
import borderlessbodyExampleHtml from "./borderlessbody.example.html?raw";
import borderlessExampleHtml from "./borderless.example.html?raw";
import primaryExampleHtml from "./primary.example.html?raw";
import '../../../src/button.scss';
import '../../../src/form-label.scss';
import '../../../src/fieldset.scss';
import '../../../src/icon.scss';
import '../../../src/link.scss';
import '../../../src/object-status.scss';
import '../../../src/table.scss';
import '../../../src/toolbar.scss';
import '../../../src/pagination.scss';
import '../../../src/popover.scss';
import '../../../src/list.scss';
import '../../../src/toolbar.scss';
import '../../../src/bar.scss';
import '../../../src/dialog.scss';
import '../../../src/input.scss';
import '../../../src/input-group.scss';
import '../../../src/checkbox.scss';
import '../../../src/select.scss';
import '../../../src/menu.scss';
import '../../../src/text.scss';
import '../../../src/object-number.scss';
import '../../../src/object-marker.scss';
// INCOMPLETE
export default {
  title: 'Components/Table',
  parameters: {
    description: `
A table contains a set of line items and usually comprises rows (with each row showing one line item) and columns. Line items can contain data of any kind, but also interactive elements, for example, for editing the data, navigating, or triggering actions relating to the line item.
To display large amounts of data in tabular form, several table components are provided. These are divided into two groups, each of which is defined by a consistent feature set:

- Fully responsive tables
- Desktop-centric tables


##Usage
**Use the responsive table if:**

- The table content should be flexible and visually appealing. The responsive table offers the most flexibility in regards to its content because multiple components can be used. In addition, different rows can be based on different item templates.
- The focus lies on working on line items, not on individual cells.
- A main use case involves selecting one or more items, for which details are needed in order to choose the correct item.
- Line items are independent of each other and no operation across columns is needed.
- You want to have only one implementation for all devices.


**Use the grid table if:**

- You need to display more than 1,000 rows at the same time.
- The cell level and the spatial relationship between cells are more important than the line item, such as if users need to recognize patterns in the data, like in waterfall charts.
- Comparing items is a major use case. The grid table layout remains stable irrespective of the screen width. In addition, a cell only ever contains one component.
- You need an analytical table, but you cannot provide an analytical binding.


**Do not use the table if:**

- You want to display a simple hierarchical dataset.
- You want to use a hierarchical master list for a master-detail scenario using the **Flexible Column Layout**.
- Using a tree table would be too complex.
- The main use case involves selecting one of several hierarchical items with only a few details per item.

In these cases, use the **Tree** instead.
        `,
    components: ['button', 'form-label', 'fieldset', 'icon', 'link', 'object-status', 'table', 'toolbar', 'pagination', 'popover', 'list', 'toolbar', 'bar', 'dialog', 'input', 'input-group', 'checkbox', 'select', 'menu', 'text', 'object-number', 'object-marker']
  }
};
export const Primary = () => primaryExampleHtml;
Primary.parameters = {
  docs: {
    description: {
      story: `
The primary table contains columns with headers, and rows with links. In the first column, links are displayed. To display links within a table, add the \`fd-link\` class within the table data.
    `
    }
  }
};
export const Borderless = () => borderlessExampleHtml;
Borderless.parameters = {
  docs: {
    description: {
      story: `
Table can be displayed without borders that separate the columns, column headers, and rows. To display a borderless table, add the \`fd-table--no-horizontal-borders\` and \`fd-table--no-vertical-borders\` modifier classes to the main element.

**Note:** You can remove borders on individual cells by adding the above-mentioned modifier classes to them only.

    `
    }
  }
};
export const Borderlessbody = () => borderlessbodyExampleHtml;
Borderlessbody.storyName = 'Borderless (body)';
Borderlessbody.parameters = {
  docs: {
    description: {
      story: `
Table can be displayed without borders that separate the columns and rows only, leaving the column headers with borders. To display a borderless table body, add the  \`fd-table--no-horizontal-borders\` and \`fd-table--no-vertical-borders\` modifier classes to the body element.
    `
    }
  }
};
export const NoOuterBorder = () => noOuterBorderExampleHtml;
NoOuterBorder.storyName = 'No outer Border';
NoOuterBorder.parameters = {
  docs: {
    description: {
      story: `
Table can be displayed without outer borders, might be needed when used inside some other element. To display a table without outer border, add the \`fd-table--no-outer-border\` modifier class to the main element.
    `
    }
  }
};
export const Footer = () => footerExampleHtml;
Footer.parameters = {
  docs: {
    description: {
      story: `
Table can be displayed with a footer. To display a table footer, add the \`fd-table__footer\` class with a \`tfoot\` element. It must contain the same amount and size of columns as the table head and body containers.
    `
    }
  }
};
export const CondensedFooter = () => condensedFooterExampleHtml;
CondensedFooter.storyName = 'Footer (condensed)';
CondensedFooter.parameters = {
  docs: {
    description: {
      story: `
Similar to the previous example, table can be displayed with a footer in condensed mode (for desktop screens). To display a condensed table, add the \`fd-table--condensed\` modifier class to the main element.
    `
    }
  }
};
export const Interactive = () => interactiveExampleHtml;
Interactive.parameters = {
  docs: {
    description: {
      story: `
The table component can be interactive with hoverable and activable cells and rows.

Interaction | Modifier class
:------------- | :------------------
Activate | \`--activable\`
Hover | \`--hoverable\`
    `
    }
  }
};
export const SemanticRows = () => semanticRowsExampleHtml;
SemanticRows.storyName = 'Semantic';
SemanticRows.parameters = {
  docs: {
    description: {
      story: `
The table component can display highlight indicators to classify certain items with semantic states. To display status indicators in table, add the \`fd-table__cell--status-indicator\` modifier class to each row.

**To display semantic highlight indicators, add the following modifier classes to \`fd-table__cell--status-indicator\`:**

Semantic states | Modifier class
:-------------------- | :-----------------
Valid | \`--valid\`
Warning | \`--warning\`
Error | \`--error\`
Information | \`--information\`
    `
    }
  }
};
export const FocusableRows = () => focusableRowsExampleHtml;
FocusableRows.storyName = 'Focusable rows';
FocusableRows.parameters = {
  docs: {
    description: {
      story: `
Table can display focusable rows by adding the \`fd-table__row--focusable\` modifier class and a valid \`tabindex\` to the rows. It is not recommended to use focusable rows simultaneously with focusable cells.
    `
    }
  }
};
export const FocusableCells = () => focusableCellsExampleHtml;
FocusableCells.storyName = 'Focusable cells';
FocusableCells.parameters = {
  docs: {
    description: {
      story: `
Table can display focusable cells by adding the \`fd-table__cell--focusable\` modifier class and a valid \`tabindex\` to the cells. It is not recommended to use focusable cells simultaneously with focusable rows.
    `
    }
  }
};
export const Checkbox = () => checkboxExampleHtml;
Checkbox.parameters = {
  docs: {
    description: {
      story: `
Table can display checkboxes to allow the user to perform bulk actions.
To display checkboxes in table, add the \`fd-table__cell--checkbox\` modifier class to the appropriate cell.
It is recommended to add the parameter \`aria-selected="true"\` to the row that is selected.
Also recommended to add class \`fd-table__checkbox\` to the checkbox (input) and \`fd-table__checkbox-label\` class to the checkbox label to have appropriate styles.
    `
    }
  }
};
export const CondensedCheckbox = () => condensedCheckboxExampleHtml;
CondensedCheckbox.storyName = 'Checkbox (condensed)';
CondensedCheckbox.parameters = {
  docs: {
    description: {
      story: `
Table can be displayed with checkboxes in condensed mode. To display checkboxes in table, add the \`fd-table__cell--checkbox\` modifier class to the appropriate cell. It is recommended to add the parameter \`aria-selected="true"\` to the row that is selected.


To display the table in condensed mode, add the \`fd-table--condensed\` modifier class to the table element.
    `
    }
  }
};
export const Pagination = () => paginationExampleHtml;
Pagination.parameters = {
  docs: {
    description: {
      story: `
Table can be displayed with bottom pagination by adding the \`fd-pagination\` class after the table.
    `
    }
  }
};
export const AdvancedToolbar = () => advancedToolbarExampleHtml;
AdvancedToolbar.storyName = 'Advanced toolbar';
AdvancedToolbar.parameters = {
  docs: {
    description: {
      story: `
The table component can be displayed with an advanced **Toolbar**, which allows users to customize their table. In this example, buttons trigger **Dialogs**. To display an advanced toolbar, pair \`fd-dialog\` components with an \`fd-toolbar\` component.
    `
    }
  }
};
export const ContextualMenu = () => contextualMenuExampleHtml;
ContextualMenu.storyName = 'Contextual menu';
ContextualMenu.parameters = {
  docs: {
    description: {
      story: `
Table can display a contextual menu containing actions if there is not enough space in a given row. It is recommended to use a contextual menu if there are more than three actions. To display table with a contextual menu, add the \`fd-popover\` component to any given cell. See **Popover** for more details.
    `
    }
  }
};
export const MenuHeader = () => menuHeaderExampleHtml;
MenuHeader.storyName = 'Menu header';
MenuHeader.parameters = {
  docs: {
    description: {
      story: `
Table can display menu options from a popover within headers. The example below demonstrates headers containing customization actions such as _Ascending_ and _Descending_. To display a menu within a header, add the \`fd-table__popover\` class to the header cells.
    `
    }
  }
};
export const FixColumnHeader = () => fixColumnHeaderExampleHtml;
FixColumnHeader.storyName = 'Fixed header, footer and columns';
FixColumnHeader.parameters = {
  docs: {
    description: {
      story: `
Table can display fixed header, footer and columns (both, on the left and right).

At first, wrap the table in a element with the \`fd-table--fixed\` class.

Header and footer are fixed by default and will stay in the same position, but to have scrollbars you have to limit the table's width and height;

To fix columns on the left, add the \`fd-table__cell--fixed\` modifier class to the cell element in each row.
Then apply \`.fd-table__cell--fixed-last\` to every last fixed cell in every row to have a special border after it.

To fix columns on the right, add the \`fd-table__cell--fixed-end\` modifier class to the cell element in each row.
Then apply \`.fd-table__cell--fixed-end-last\` to every last fixed cell in every row to have a special border before it.

If you have more than one fixed column on the left or right, you have to set the position left (or right) for the columns starting from 2nd.

It’s important to hardcode the width of the columns, otherwise the cells will be squished.
    `
    },
  }
};
export const NavIcon = () => navIconExampleHtml;
NavIcon.storyName = 'Navigation from table rows';
NavIcon.parameters = {
  docs: {
    description: {
      story: `
Responsive table allows navigation from a line item. For that purpose you need to add a column with the icon \`sap-icon--slim-arrow-right\` at the end. The entire line needs to be clickable

You have an option to add icon button \`sap-icon--navigation-right-arrow\` as a separate column for non responsive table.
    `
    }
  }
};
export const NavIndicators = () => navIndicatorsExampleHtml;
NavIndicators.storyName = 'Navigation indicators';
NavIndicators.parameters = {
  docs: {
    description: {
      story: `

The table component can display navigation indicators. When multi-selection is used in a master-detail scenario, it is not clear which item was last opened, you can mark it as a “navigated” indicator, as indicated in the second row, to mark an item that is currently open. To display a navigated indicator, add the \`fd-table__cell--navigated\` class to the desired table cell.
    `
    }
  }
};
export const ResponsiveTable = () => responsiveTableExampleHtml;
ResponsiveTable.parameters = {
  docs: {
    description: {
      story: `
The desktop responsive table should contain \`fd-table--responsive\` modifier.
    `
    }
  }
};
export const ResponsiveTablePopInMode = () => responsiveTablePopInModeExampleHtml;
ResponsiveTablePopInMode.storyName = 'Responsive Table (pop-in mode)';
ResponsiveTablePopInMode.parameters = {
  docs: {
    description: {
      story: `
The responsive table can be displayed in pop-in mode for mobile and tablet screens. To display responsive table in pop-in mode, add the \`fd-table--pop-in\` modifier class to the main element and remove the borders (see borderless example). In pop-in mode, a row actually contains two rows:
-	\`fd-table__row--main\`
-	\`fd-table__row--secondary\`

**Note:** cells with titles and text should be wrapped in paragraph tags.

    `
    }
  }
};
export const GridTable = () => gridTableExampleHtml;
GridTable.parameters = {
  docs: {
    description: {
      story: `
Grid tables can contain various input elements inside of cells, such as checkboxes, input fields, links and drop-down menus.

####Accessibility
Information about the table such as a title, summary, and/or keyboard navigation instructions should be provided in captions for screen readers. To caption table information, use the \`fd-table__caption\` class.
    `
    }
  }
};
export const NoDataTable = () => noDataTableExampleHtml;
NoDataTable.storyName = 'Table without data';
NoDataTable.parameters = {
  docs: {
    description: {
      story: `
Table can indicate that there is no data to display.
    `
    }
  }
};
export const GroupRowsInTable = () => groupRowsInTableExampleHtml;
GroupRowsInTable.storyName = 'Table with group rows';
GroupRowsInTable.parameters = {
  docs: {
    description: {
      story: `
Table can have group rows, to get this do the following:

- Add \`fd-table--group\` class to the table
- Add \`colspan\` with the appropriate value to the group cell
- Add \`fd-table__cell--group\` to the group cell
- Add \`data-nesting-level\` attribute with the appropriate value (counting starts from 1) to the first cell of every row

Group cell intended to have glyph which indicates expand/collapsed state, to get it to do the following:

- Add \`fd-table__cell--expand\` class to the group cell
- Add an element with class \`fd-table__expand\` inside the group cell
- Use \`fd-table__expand--open\` class on the element to indicate expanded state

Intended to have up to 20 levels deep, not more.

Please consider that you need to implement expanding/collapsing functionality by yourself.
    `
    }
  }
};
export const TreeRowsTable = () => treeRowsTableExampleHtml;
TreeRowsTable.storyName = 'Tree Table';
TreeRowsTable.parameters = {
  docs: {
    description: {
      story: `
Table can show tree-like rows, to get this do the following:

- Add \`fd-table--tree\` class to the table
- Add \`data-nesting-level\` attribute with the appropriate value (counting starts from 1) to the first cell of every row

Tree table cells intended to have a glyph which indicates expanded/collapsed state, to get it to do the following:

- Add \`fd-table__cell--tree-expand\` class to the first cell if the row has children
- Add an element with class \`fd-table__expand\` inside the tree cell if the row has children
- Use \`fd-table__expand--open\` class on the element to indicate expanded state

Intended to have up to 20 levels deep, not more.

Please consider that you need to implement expanding/collapsing functionality by yourself.
    `
    }
  }
};