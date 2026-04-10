import treeWithNoDataExampleHtml from "./tree-with-no-data.example.html?raw";
import selectionExampleHtml from "./selection.example.html?raw";
import navigableExampleHtml from "./navigable.example.html?raw";
import highlightIndicatorsExampleHtml from "./highlight-indicators.example.html?raw";
import borderlessExampleHtml from "./borderless.example.html?raw";
import primaryExampleHtml from "./primary.example.html?raw";
import '../../../src/button.scss';
import '../../../src/checkbox.scss';
import '../../../src/icon.scss';
import '../../../src/radio.scss';
import '../../../src/tree.scss';
export default {
  title: 'Components/Tree',
  parameters: {
    description: `Tree allows the user to display and work with a hierarchical set of items. Trees are mostly used in the master list for a master-detail scenario using the **Flexible Column Layout** and in **Popovers** or **Dialogs**. In certain use cases, they can also be used in the **Dynamic Page Layout**.
        Items that contain additional items are called nodes, while items that do not contain any other items are called leaves. If available, a single top-most node is called a root node. Apart from the hierarchical structure of its nodes and leaves, a tree is quite similar to a **List**.

##Usage
**Use the tree if:**

- You need to display the key identifier of hierarchically structured items (for example in the first column of the **Flexible Column Layout**.
- Selecting one or more items out of a set of hierarchically structured items is a main use case.
- The hierarchy has a restricted number of levels (up to about 12, depending on the content) and items (around 200).
- You want to have only one implementation for all devices.


**Do not use the tree if:**

- The main use case is to select one item from a very small number of non-hierarchical items, without viewing additional details. In this case, a **Select** or **Combobox Input** might be more appropriate.
- Items are not structured hierarchically. Use a **List** instead.
- The hierarchy turns out to have only two levels. In this case, use a **grouped list**.
- The hierarchy turns out to be just a categorization based on several details of the item. In this case, an **an analytical table** provides multi-level grouping. Note that the analytical table is not fully responsive. It is only available for desktops and tablets, so you will need to take an adaptive approach by offering an additional UI for smartphones.

##Behaviour
The tree is like a list containing hierarchical data. It acts as a container for items, with the possibility to expand and collapse nodes. The tree changes the indentation per level dynamically when the user expands a node, based on number of levels currently showing.
The root tree contains a \`expanded-level-*\` class which keeps track of the current expanded level. The indentation rules are the same for compact and cozy mode.

The default behaviour of the list item is that it does not wrap. To enable wrapping, add the \`fd-tree__content--wrap\` modifier class to the \`fd-tree__content\` element.


##States
By default, tree items are not interactive; however, there are a few ways to add states (hover, selected, active) depending on the status of the items.

State | Modifier/Class | Description
:----- | :-------------- | :-----------------
Active | \`fd-tree--active\` | If all tree items are navigable, add the modifier class to the main element.
Active | \`fd-tree__item-container--active\`&nbsp;&nbsp;&nbsp; | If only certain tree items are navigable, add the modifier class to the container.
Selected | \`is-selected\` | If tree items contain single and multiple selection (radio buttons and checkboxes), add the class to the container.
Navigated&nbsp;&nbsp;&nbsp; | \`is-navigated\` | If a certain tree item has been previously navigated, add the class to the container.

<br>
`,
    tags: ['f3', 'a11y', 'theme', 'development']
  }
};
export const Primary = () => primaryExampleHtml;
Primary.parameters = {
  docs: {
    description: {
      story: `
The primary tree component displays level 1 expanded to show level 2, which is indented by 1.5rem. Only the root tree (ul element) needs to have the \`expanded-level-*\` modifier class to indicate which level is currently expanded.`
    }
  }
};
export const Borderless = () => borderlessExampleHtml;
Borderless.parameters = {
  docs: {
    description: {
      story: `
Tree can be displayed without borders. To remove the borders from the first level items, add the \`fd-tree--no-border\` modifier class to the root tree. Additionally, tree list items can display actions, which are added as children of the \`fd-tree__item-container\` class.

####Icons
Icons can be added before and/or after the text as children of the \`fd-tree__content\` class.
        `
    }
  }
};
export const HighlightIndicators = () => highlightIndicatorsExampleHtml;
HighlightIndicators.storyName = 'Highlight indicators';
HighlightIndicators.parameters = {
  docs: {
    description: {
      story: `
Tree can display highlight indicators on tree items to indicate a status. In this example, each level indents by 0.5rem more than the previous level. For example, level 2 indents by 0.5, level 3 by 1rem and level 4 by 1.5rem (up to level 6).


To display tree items with highlight indicators, add the \`has-highlight-indicator--*\` modifier class to the \`fd-tree__item-container\` element.

**The semantic states of highlight indicators are:**

State | Modifier class
:------ | :------------------
Default | \` has-highlight-indicator\`
Error | \` has-highlight-indicator--error\`
Success | \` has-highlight-indicator--success\`
Warning | \` has-highlight-indicator--warning\`

`
    }
  }
};
export const Navigable = () => navigableExampleHtml;
Navigable.parameters = {
  docs: {
    description: {
      story: `
Tree can be displayed with navigation links by anchoring the \`href\` attribute with the \`fd-tree__content\` class. If only a subset of the tree items is navigable, you should indicate them with navigation arrows.

####Navigation arrows
To display navigation arrows in tree items, create an element with \`fd-tree__icon\` and \`fd-tree__icon--navigation\` classes inside \`fd-tree__item-container\` with the \`fd-tree__item-container--active\` modifier class applied.

**If all items are navigable:** Do not display arrows at all. In this case, add the \`fd-tree--active\` modifier class to the root tree. This will add states (hover, selected, active) to all tree items.

**If an item has been navigated:** When a user has navigated to an item but has since moved onto another item, you can indicate that it has been navigated to by adding the \`is-navigated\` class to the \`fd-tree__item-container\` element.

**Note:** In this example, each level indents by 0.25rem more than the previous level (up to level 12).

`
    }
  }
};
export const Selection = () => selectionExampleHtml;
Selection.parameters = {
  docs: {
    description: {
      story: `
Tree can be displayed with checkboxes, allowing the user to select multiple items. To display selected tree items, add the \`is-selected\` class to the \`fd-tree__item-container\` element.

####Form items
Form items can be added before or after the \`fd-tree__content\` element. The \`fd-tree__form-item \` class must be added together with the \`fd-form-item\` element.

- Multi-selection: use **Checkboxes**
- Single selection: use **Radio buttons**

`
    }
  }
};
export const TreeWithNoData = () => treeWithNoDataExampleHtml;
TreeWithNoData.storyName = 'No data';
TreeWithNoData.parameters = {
  docs: {
    description: {
      story: `
If there is no data to display, add the \`fd-tree--no-data\` modifier class to the root tree.
`
    }
  }
};