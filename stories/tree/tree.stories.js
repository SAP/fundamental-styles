import '../../dist/button.css';
import '../../dist/checkbox.css';
import '../../dist/icon.css';
import '../../dist/radio.css';
import '../../dist/tree.css';

export default {
    title: 'Components/Tree',
    parameters: {
        description: `Unlike tree tables, trees are used for rather basic data.


### USE THE TREE IF:
- You need to display the key identifier of hierarchically structured items
- Selecting one or more items out of a set of hierarchically structured items is a main use case.
- The hierarchy has a restricted number of levels (up to about 12, depending on the content) and items (around 200).
- You want to have only one implementation for all devices.

### DO NOT USE THE TREE IF:

- The main use case is to select one item from a very small number of non-hierarchical items, without viewing additional details. In this case, a select or combo box might be more appropriate.
- Items are not structured hierarchically. Use a list instead.
- The hierarchy turns out to have only two levels. In this case, use a grouped list.
- The hierarchy turns out to be just a categorization based on several details of the item. In this case, an analytical table provides multi-level grouping. Note that the analytical table is not fully responsive. It is only available for desktops and tablets, so you will need to take an adaptive approach by offering an additional UI for smartphones.
- You need to display very deep hierarchies with additional data per item. In this case, use a tree table. Note that the tree table is not fully responsive. It is only available for desktops and tablets, so you will need to take an adaptive approach by offering an additional UI for smartphones.
- The structure contains more than around 200 items. In this case, use the tree table. It is optimized for large item sets and provides better performance. Note that the tree table is not fully responsive. It is only available for desktops and tablets, so you will need to take an adaptive approach by offering an additional UI for smartphones.
- You need an overview of a large amount of data. In this case, use a chart.

### RESPONSIVENESS

The tree is like a list containing hierarchical data. It acts as a container for items, with the possibility to expand and collapse nodes. The tree changes the indentation per level dynamically when the user expands a node, based on number of levels currently showing. The root tree has a class <code class="docs-code">.expanded-level-*</code> which keeps track of which level is currently expanded. The indentation rules are the same for compact and cozy mode.

### WRAPPING BEHAVIOUR

The default behaviour of the list item is no wrapping. To allow wrapping use the <code class="docs-code">.fd-tree\\_\\_content--wrap</code> modifier class applied on the <code class="docs-code">.fd-tree\\_\\_content</code> element.

### MODES

There are 2 modes: Default(Tablet and Mobile) and Compact (Desktop). For compact mode apply the <code class="docs-code">.fd-tree--compact</code> modifier class to the root tree.

### INTERACTIVE STATES

By default tree items are not interactive. Items with single and multiple selection (radio buttons and checkboxes) can have <code class="docs-code">selected</code> state by adding <code class="docs-code">.is-selected</code> to the 
<code class="docs-code">fd-tree\\_\\_item-container</code> element.

For navigation links or clickable items add the <code class="docs-code">.fd-tree--active</code> modifier class to the root tree.

### Levels

The Tree currently supports up to 12 levels. More levels can be added per request.

<span style="color: darkred; font-weight: bold;">NOTE: In some examples the expander is not interactive (will not show/hide the next level). Its purpose in these cases is simply to demonstrate the indentation rules.</span>
`,
        docs: { iframeHeight: 400 },
        tags: ['development']
    }
};

export const treeWithExpandedLevel1 = () => `
<ul role="tree" aria-label="Root Tree" id="TREE1L1" class="fd-tree expanded-level-1">
    <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
        <div class="fd-tree__item-container">
            <button tabindex="0" class="fd-tree__expander is-expanded" aria-controls="TREE1L2" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true"></button>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
        <ul role="group" class="fd-tree" id="TREE1L2" aria-hidden="false">
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container">
                    <button tabindex="0" class="fd-tree__expander" aria-label="Expander"></button>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container">
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container">
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1 with very long text that does not wrap ... perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</span>
            </div>
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container">
            <div class="fd-tree__content fd-tree__content--wrap">
                <span class="fd-tree__text">Level 1 with very long text and wrapping behaviour ... perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</span>
            </div>
        </div>
    </li>
</ul>

<br><br>

<h3>Compact Mode </h3>

<ul role="tree" aria-label="Root Tree" id="TREE1CL1" class="fd-tree fd-tree--compact expanded-level-1">
    <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
        <div class="fd-tree__item-container">
            <button tabindex="0" class="fd-tree__expander is-expanded" aria-controls="TREE1CL2" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true"></button>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
        <ul role="group" class="fd-tree" id="TREE1CL2" aria-hidden="false">
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container">
                    <button tabindex="0" class="fd-tree__expander" aria-label="Expander"></button>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container">
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container">
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1 with very long text that does not wrap ... perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</span>
            </div>
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container">
            <div class="fd-tree__content fd-tree__content--wrap">
                <span class="fd-tree__text">Level 1 with very long text and wrapping behaviour ... perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</span>
            </div>
        </div>
    </li>
</ul>
`;

treeWithExpandedLevel1.parameters = {
    docs: {
        iframeHeight: 950,
        storyDescription: `
When Level 1 is expanded to show Level 2, Level 2 is indented by 1.5rem.
Only the root tree (ul element) needs to have the <code class="docs-code">.expanded-level-*</code> modifier class to indicate which level is currently expanded.
`
    }
};

export const treeWithExpandedLevel2AndNoBorders = () => `
<ul role="tree" aria-label="Root Tree" id="TREE2L1" class="fd-tree fd-tree--no-border expanded-level-2">
    <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
        <div class="fd-tree__item-container">
            <button tabindex="0" class="fd-tree__expander is-expanded" aria-controls="TREE2L2" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true"></button>
            <div class="fd-tree__content">
                <span class="sap-icon--e-care sap-icon--l fd-tree__icon"></span>
                <span class="fd-tree__text">Level 1</span>
            </div>
            <button aria-label="Edit button" class="fd-button fd-button--transparent sap-icon--edit"></button>
            <button aria-label="Delete button" class="fd-button fd-button--transparent sap-icon--decline"></button>
        </div>
        <ul role="group" class="fd-tree" id="TREE2L2" aria-hidden="false">
            <li role="treeitem" aria-level="2" aria-expanded="true" class="fd-tree__item">
                <div class="fd-tree__item-container">
                    <button tabindex="0" class="fd-tree__expander is-expanded" aria-controls="TREE2L3" aria-haspopup="true" aria-label="Expand level 3" aria-expanded="true"></button>
                    <div class="fd-tree__content">
                        <span class="sap-icon--account sap-icon--l fd-tree__icon"></span>
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                    <button aria-label="Edit button" class="fd-button fd-button--transparent sap-icon--edit"></button>
                    <button aria-label="Delete button" class="fd-button fd-button--transparent sap-icon--decline"></button>
                </div>
                <ul role="group" class="fd-tree" id="TREE2L3" aria-hidden="false">
                    <li role="treeitem" aria-level="3" class="fd-tree__item">
                        <div class="fd-tree__item-container">
                            <button tabindex="0" class="fd-tree__expander" aria-label="Expander"></button>
                            <div class="fd-tree__content">
                                <span class="sap-icon--product sap-icon--l fd-tree__icon"></span>
                                <span class="fd-tree__text">Level 3</span>
                            </div>
                            <button aria-label="Edit button" class="fd-button fd-button--transparent sap-icon--edit"></button>
                            <button aria-label="Delete button" class="fd-button fd-button--transparent sap-icon--decline"></button>
                        </div>
                    </li>
                    <li role="treeitem" aria-level="3" class="fd-tree__item">
                        <div class="fd-tree__item-container">
                            <div class="fd-tree__content">
                                <span class="sap-icon--history sap-icon--l fd-tree__icon"></span>
                                <span class="fd-tree__text">Level 3</span>
                            </div>
                            <button aria-label="Edit button" class="fd-button fd-button--transparent sap-icon--edit"></button>
                            <button aria-label="Delete button" class="fd-button fd-button--transparent sap-icon--decline"></button>
                        </div>
                    </li>
                </ul>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container">
                    <div class="fd-tree__content">
                        <span class="sap-icon--competitor sap-icon--l fd-tree__icon"></span>
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                    <button aria-label="Edit button" class="fd-button fd-button--transparent sap-icon--edit"></button>
                    <button aria-label="Delete button" class="fd-button fd-button--transparent sap-icon--decline"></button>
                </div>
            </li>
        </ul>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container">
            <div class="fd-tree__content">
                <span class="sap-icon--batch-payments sap-icon--l fd-tree__icon"></span>
                <span class="fd-tree__text">Level 1</span>
            </div>
            <button aria-label="Edit button" class="fd-button fd-button--transparent sap-icon--edit"></button>
            <button aria-label="Delete button" class="fd-button fd-button--transparent sap-icon--decline"></button>
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container">
            <div class="fd-tree__content">
                <span class="sap-icon--favorite sap-icon--l fd-tree__icon"></span>
                <span class="fd-tree__text">Level 1</span>
            </div>
            <button aria-label="Edit button" class="fd-button fd-button--transparent sap-icon--edit"></button>
            <button aria-label="Delete button" class="fd-button fd-button--transparent sap-icon--decline"></button>
        </div>
    </li>
</ul>
`;

treeWithExpandedLevel2AndNoBorders.parameters = {
    docs: {
        iframeHeight: 400,
        storyDescription: `
When Level 2 expands to show Level 3, Level 2 indents by 1rem while Level 3 indents by 2.5rem.
<br>To remove the borders from the first level items apply the <code class="docs-code">.fd-tree--no-border</code> modifier class to the root tree.
<br>Icons can be added before and/or after the text as children of <code class="docs-code">.fd-tree\\_\\_content</code>.
<br>List items can have actions which are added as children of <code class="docs-code">.fd-tree\\_\\_item-container</code>.
`
    }
};


export const treeWithExpandedLevel3AndHighlightIndicators = () => `
<ul role="tree" aria-label="Root Tree" id="TREE3L1" class="fd-tree expanded-level-3">
    <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
        <div class="fd-tree__item-container has-highlight-indicator">
            <button class="fd-tree__expander is-expanded" aria-controls="TREE3L2" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true"></button>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
        <ul role="group" class="fd-tree" id="TREE3L2" aria-hidden="false">
            <li role="treeitem" aria-level="2" aria-expanded="true" class="fd-tree__item">
                <div class="fd-tree__item-container has-highlight-indicator--warning">
                    <button class="fd-tree__expander is-expanded" aria-controls="TREE3L3" aria-haspopup="true" aria-label="Expand level 3" aria-expanded="true"></button>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
                <ul role="group" class="fd-tree" id="TREE3L3" aria-hidden="false">
                    <li role="treeitem" aria-level="3" aria-expanded="true" class="fd-tree__item">
                        <div class="fd-tree__item-container has-highlight-indicator--error">
                            <button class="fd-tree__expander is-expanded" aria-controls="TREE3L4" aria-haspopup="true" aria-label="Expand level 4" aria-expanded="true"></button>
                            <div class="fd-tree__content">
                                <span class="fd-tree__text">Level 3</span>
                            </div>
                        </div>
                        <ul role="group" class="fd-tree" id="TREE3L4" aria-hidden="false">
                            <li role="treeitem" aria-level="4" class="fd-tree__item">
                                <div class="fd-tree__item-container has-highlight-indicator--success">
                                    <button class="fd-tree__expander" aria-label="Expander"></button>
                                    <div class="fd-tree__content">
                                        <span class="fd-tree__text">Level 4</span>
                                    </div>
                                </div>
                            </li>
                            <li role="treeitem" aria-level="4" class="fd-tree__item">
                                <div class="fd-tree__item-container">
                                    <div class="fd-tree__content">
                                        <span class="fd-tree__text">Level 4</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li role="treeitem" aria-level="3" class="fd-tree__item">
                        <div class="fd-tree__item-container">
                            <div class="fd-tree__content">
                                <span class="fd-tree__text">Level 3</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container">
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
</ul>
`;

treeWithExpandedLevel3AndHighlightIndicators.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `
Indentations are calculated with 0.5rem up to level 6.
When Level 3 is expanded to show Level 4:

- Level 2 indents by 0.5rem
- Level 3 indents by 1rem
- Level 4 indents by 1.5rem

This indentation repeats when level 4 and 5 are triggered.

- Level 5 indents by 2rem
- Level 6 indents by 2.5rem

Tree items can have highlight indicators. To apply a highlight indicator use the <code class="docs-code">.has-highlight-indicator--*</code> modifier class on the <code class="docs-code">.fd-tree\\_\\_item-container</code> element. 

Options include:

- **default** -<code class="docs-code">.has-highlight-indicator</code>
- **error** -<code class="docs-code">.has-highlight-indicator--error</code>
- **success** -<code class="docs-code">.has-highlight-indicator--success</code>
- **warning** -<code class="docs-code">.has-highlight-indicator--warning</code>
`
    }
};


export const treeWithExpandedLevel6AndNavigationLinks = () => `
<ul role="tree" aria-label="Root Tree" id="TREE6CL1" class="fd-tree expanded-level-6">
    <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
        <div class="fd-tree__item-container fd-tree__item-container--active has-highlight-indicator--success">
            <button class="fd-tree__expander is-expanded" aria-controls="TREE6CL2" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true"></button>
            <a href="https://sap.github.io/fundamental/" class="fd-tree__content has-navigation-indicator">
                <span class="fd-tree__text">Level 1</span>
            </a>
        </div>
        <ul role="group" class="fd-tree" id="TREE6CL2" aria-hidden="false">
            <li role="treeitem" aria-level="2" aria-expanded="true" class="fd-tree__item">
                <div class="fd-tree__item-container has-highlight-indicator--warning">
                    <button class="fd-tree__expander is-expanded" aria-controls="TREE6CL3" aria-haspopup="true" aria-label="Expand level 3" aria-expanded="true"></button>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
                <ul role="group" class="fd-tree" id="TREE6CL3" aria-hidden="false">
                    <li role="treeitem" aria-level="3" aria-expanded="true" class="fd-tree__item">
                        <div class="fd-tree__item-container fd-tree__item-container--active has-highlight-indicator--error">
                            <button class="fd-tree__expander is-expanded" aria-controls="TREE6CL4" aria-haspopup="true" aria-label="Expand level 4" aria-expanded="true"></button>
                            <a href="https://sap.github.io/fundamental/" class="fd-tree__content has-navigation-indicator">
                                <span class="fd-tree__text">Level 3</span>
                            </a>
                        </div>
                        <ul role="group" class="fd-tree" id="TREE6CL4" aria-hidden="false">
                            <li role="treeitem" aria-level="4" aria-expanded="true" class="fd-tree__item">
                                <div class="fd-tree__item-container has-highlight-indicator">
                                    <button class="fd-tree__expander is-expanded" aria-controls="TREE6CL5" aria-haspopup="true" aria-label="Expand level 5" aria-expanded="true"></button>
                                    <div class="fd-tree__content">
                                        <span class="fd-tree__text">Level 4</span>
                                    </div>
                                </div>
                                <ul role="group" class="fd-tree" id="TREE6CL5" aria-hidden="false">
                                    <li role="treeitem" aria-level="5" aria-expanded="true"  class="fd-tree__item">
                                        <div class="fd-tree__item-container">
                                            <button class="fd-tree__expander is-expanded" aria-controls="TREE6CL6" aria-haspopup="true" aria-label="Expand level 6" aria-expanded="true"></button>
                                            <div class="fd-tree__content">
                                                <span class="fd-tree__text">Level 5</span>
                                            </div>
                                        </div>
                                        <ul role="group" class="fd-tree" id="TREE6CL6" aria-hidden="false">
                                            <li role="treeitem" aria-level="6" aria-expanded="true" class="fd-tree__item">
                                                <div class="fd-tree__item-container">
                                                    <button class="fd-tree__expander is-expanded" aria-controls="TREE6CL7" aria-haspopup="true" aria-label="Expand level 7" aria-expanded="true"></button>
                                                    <div class="fd-tree__content">
                                                        <span class="fd-tree__text">Level 6</span>
                                                    </div>
                                                </div>
                                                <ul role="group" class="fd-tree" id="TREE6CL7" aria-hidden="false">
                                                    <li role="treeitem" aria-level="7" class="fd-tree__item">
                                                        <div class="fd-tree__item-container">
                                                            <button class="fd-tree__expander" aria-label="Expander"></button>
                                                            <div class="fd-tree__content">
                                                                <span class="fd-tree__text">Level 7</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li role="treeitem" aria-level="7" class="fd-tree__item">
                                                        <div class="fd-tree__item-container">
                                                            <div class="fd-tree__content">
                                                                <span class="fd-tree__text">Level 7</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li role="treeitem" aria-level="6" class="fd-tree__item">
                                                <div class="fd-tree__item-container has-highlight-indicator">
                                                    <div class="fd-tree__content">
                                                        <span class="fd-tree__text">Level 6</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li role="treeitem" aria-level="5" class="fd-tree__item">
                                        <div class="fd-tree__item-container has-highlight-indicator--success">
                                            <div class="fd-tree__content">
                                                <span class="fd-tree__text">Level 5</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li role="treeitem" aria-level="4" class="fd-tree__item">
                                <div class="fd-tree__item-container fd-tree__item-container--active">
                                    <a href="https://sap.github.io/fundamental/" class="fd-tree__content has-navigation-indicator">
                                        <span class="fd-tree__text">Level 4</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li role="treeitem" aria-level="3" class="fd-tree__item">
                        <div class="fd-tree__item-container fd-tree__item-container--active">
                            <a href="https://sap.github.io/fundamental/" class="fd-tree__content has-navigation-indicator">
                                <span class="fd-tree__text">Level 3</span>
                            </a>
                        </div>
                    </li>
                </ul>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container">
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container fd-tree__item-container--active has-highlight-indicator--success is-navigated">
            <a href="https://sap.github.io/fundamental/" class="fd-tree__content has-navigation-indicator">
                <span class="fd-tree__text">Level 1</span>
            </a>
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container has-highlight-indicator--success">
        <a href="https://sap.github.io/fundamental/" class="fd-tree__content has-navigation-indicator">
            <span class="fd-tree__text">Level 1</span>
        </a>
        </div>
    </li>
</ul>

<br><br>

<h3>Tree with Expanded Level 6 and Active Tree Items (All Tree Items) </h3>
<ul role="tree" aria-label="Root Tree" id="TREE6L1" class="fd-tree fd-tree--active fd-tree--compact expanded-level-6">
    <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
        <div class="fd-tree__item-container has-highlight-indicator--success">
            <button class="fd-tree__expander is-expanded" aria-controls="TREE6L2" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true"></button>
            <a href="https://sap.github.io/fundamental/" class="fd-tree__content has-navigation-indicator">
                <span class="fd-tree__text">Level 1</span>
            </a>
        </div>
        <ul role="group" class="fd-tree" id="TREE6L2" aria-hidden="false">
            <li role="treeitem" aria-level="2" aria-expanded="true" class="fd-tree__item">
                <div class="fd-tree__item-container has-highlight-indicator--warning">
                    <button class="fd-tree__expander is-expanded" aria-controls="TREE6L3" aria-haspopup="true" aria-label="Expand level 3" aria-expanded="true"></button>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
                <ul role="group" class="fd-tree" id="TREE6L3" aria-hidden="false">
                    <li role="treeitem" aria-level="3" aria-expanded="true" class="fd-tree__item">
                        <div class="fd-tree__item-container has-highlight-indicator--error">
                            <button class="fd-tree__expander is-expanded" aria-controls="TREE6L4" aria-haspopup="true" aria-label="Expand level 4" aria-expanded="true"></button>
                            <a href="https://sap.github.io/fundamental/" class="fd-tree__content has-navigation-indicator">
                                <span class="fd-tree__text">Level 3</span>
                            </a>
                        </div>
                        <ul role="group" class="fd-tree" id="TREE6L4" aria-hidden="false">
                            <li role="treeitem" aria-level="4" aria-expanded="true" class="fd-tree__item">
                                <div class="fd-tree__item-container has-highlight-indicator">
                                    <button class="fd-tree__expander is-expanded" aria-controls="TREE6L5" aria-haspopup="true" aria-label="Expand level 5" aria-expanded="true"></button>
                                    <div class="fd-tree__content">
                                        <span class="fd-tree__text">Level 4</span>
                                    </div>
                                </div>
                                <ul role="group" class="fd-tree" id="TREE6L5" aria-hidden="false">
                                    <li role="treeitem" aria-level="5" aria-expanded="true"  class="fd-tree__item">
                                        <div class="fd-tree__item-container">
                                            <button class="fd-tree__expander is-expanded" aria-controls="TREE6L6" aria-haspopup="true" aria-label="Expand level 6" aria-expanded="true"></button>
                                            <div class="fd-tree__content">
                                                <span class="fd-tree__text">Level 5</span>
                                            </div>
                                        </div>
                                        <ul role="group" class="fd-tree" id="TREE6L6" aria-hidden="false">
                                            <li role="treeitem" aria-level="6" aria-expanded="true" class="fd-tree__item">
                                                <div class="fd-tree__item-container">
                                                    <button class="fd-tree__expander is-expanded" aria-controls="TREE6L7" aria-haspopup="true" aria-label="Expand level 7" aria-expanded="true"></button>
                                                    <div class="fd-tree__content">
                                                        <span class="fd-tree__text">Level 6</span>
                                                    </div>
                                                </div>
                                                <ul role="group" class="fd-tree" id="TREE6L7" aria-hidden="false">
                                                    <li role="treeitem" aria-level="7" class="fd-tree__item">
                                                        <div class="fd-tree__item-container">
                                                            <button class="fd-tree__expander" aria-label="Expander"></button>
                                                            <div class="fd-tree__content">
                                                                <span class="fd-tree__text">Level 7</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li role="treeitem" aria-level="7" class="fd-tree__item">
                                                        <div class="fd-tree__item-container">
                                                            <div class="fd-tree__content">
                                                                <span class="fd-tree__text">Level 7</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li role="treeitem" aria-level="6" class="fd-tree__item">
                                                <div class="fd-tree__item-container has-highlight-indicator">
                                                    <div class="fd-tree__content">
                                                        <span class="fd-tree__text">Level 6</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li role="treeitem" aria-level="5" class="fd-tree__item">
                                        <div class="fd-tree__item-container has-highlight-indicator--success">
                                            <div class="fd-tree__content">
                                                <span class="fd-tree__text">Level 5</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li role="treeitem" aria-level="4" class="fd-tree__item">
                                <div class="fd-tree__item-container">
                                    <a href="https://sap.github.io/fundamental/" class="fd-tree__content has-navigation-indicator">
                                        <span class="fd-tree__text">Level 4</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li role="treeitem" aria-level="3" class="fd-tree__item">
                        <div class="fd-tree__item-container">
                            <a href="https://sap.github.io/fundamental/" class="fd-tree__content has-navigation-indicator">
                                <span class="fd-tree__text">Level 3</span>
                            </a>
                        </div>
                    </li>
                </ul>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container">
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container has-highlight-indicator--success is-navigated">
            <a href="https://sap.github.io/fundamental/" class="fd-tree__content has-navigation-indicator">
                <span class="fd-tree__text">Level 1</span>
            </a>
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container has-highlight-indicator--success">
        <a href="https://sap.github.io/fundamental/" class="fd-tree__content has-navigation-indicator">
            <span class="fd-tree__text">Level 1</span>
        </a>
        </div>
    </li>
</ul>
`;

treeWithExpandedLevel6AndNavigationLinks.parameters = {
    docs: {
        iframeHeight: 1350,
        storyDescription: `
When Level 6 is expanded to show up to 12 levels:

Indentations are calculated with 0.25rem

- Level 2 indents by 0.25rem
- Level 3 indents by 0.5rem
- Level 4 indents by 0.75rem
- Level 5 indents by 1rem
- Level 6 indents by 1.25rem

0.25rem is added to each indentation up to level 12.

If only a subset of the tree items are navigable (contain links) you should indicate those by displaying a navigation arrow. This is achieved by applying the <code class="docs-code">.has-navigation-indicator</code> class to the <code class="docs-code">.fd-tree\\_\\_content</code> element and <code class="docs-code">.fd-tree\\_\\_item-container--active</code> modifier class to the <code class="docs-code">.fd-tree\\_\\_item-container</code>. 

Do not show arrows if all items are navigable. In this case apply the <code class="docs-code">.fd-tree--active</code> modifier class to the root tree. This will add states (hover, selected, active) to all tree items.

To indicate that an item has been navigated to, apply the <code class="docs-code">.is-navigated</code> class to the <code class="docs-code">.fd-tree\\_\\_item-container</code> element.

The <code class="docs-code">.fd-tree\\_\\_item-container--active</code> modifier class can be applied to tree items that have states (hover, selected, active), not necessarily containing links. If all tree items have states apply the <code class="docs-code">.fd-tree--active</code> modifier class to the root tree.
`
    }
};


export const treeWithSelection = () => `
<h3>Multi Selection Left</h3>
<ul role="tree" aria-label="Root Tree" id="TREESELL1" class="fd-tree expanded-level-1">
    <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
        <div class="fd-tree__item-container is-selected">
            <button tabindex="0" class="fd-tree__expander is-expanded" aria-controls="TREESELL2" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true"></button>
            <div class="fd-form-item">
                <input type="checkbox" checked class="fd-checkbox" id="Ai4ez1">
                <label tabindex="-1" aria-label="checkbox" class="fd-checkbox__label" for="Ai4ez1"></label>
            </div>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
        <ul role="group" class="fd-tree" id="TREESELL2" aria-hidden="false">
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container">
                    <button tabindex="0" class="fd-tree__expander" aria-label="Expander"></button>
                    <div class="fd-form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez2">
                        <label tabindex="-1" aria-label="checkbox" class="fd-checkbox__label" for="Ai4ez2"></label>
                    </div>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container is-selected">
                    <div class="fd-form-item">
                        <input type="checkbox" checked class="fd-checkbox" id="Ai4ez3">
                        <label tabindex="-1" aria-label="checkbox" class="fd-checkbox__label" for="Ai4ez3"></label>
                    </div>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container">
                    <div class="fd-form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez4">
                        <label tabindex="-1" aria-label="checkbox" class="fd-checkbox__label" for="Ai4ez4"></label>
                    </div>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez5">
                <label tabindex="-1" aria-label="checkbox" class="fd-checkbox__label" for="Ai4ez5"></label>
            </div>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez6">
                <label tabindex="-1" aria-label="checkbox" class="fd-checkbox__label" for="Ai4ez6"></label>
            </div>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
</ul>

<br><br>

<h3>Multi Selection Right, Compact Mode</h3>

<ul role="tree" aria-label="Root Tree" id="TREESELCL1" class="fd-tree fd-tree--compact fd-tree--no-border expanded-level-1">
    <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
        <div class="fd-tree__item-container is-selected">
            <button tabindex="0" class="fd-tree__expander is-expanded" aria-controls="TREESELCL2" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true"></button>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" checked class="fd-checkbox fd-checkbox--compact" id="Ai4ezA">
                <label tabindex="-1" aria-label="checkbox" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ezA"></label>
            </div>
        </div>
        <ul role="group" class="fd-tree" id="TREESELCL2" aria-hidden="false">
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container">
                    <button tabindex="0" class="fd-tree__expander" aria-label="Expander"></button>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                    <div class="fd-form-item">
                        <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ezB">
                        <label tabindex="-1" aria-label="checkbox" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ezB"></label>
                    </div>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container">
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                    <div class="fd-form-item">
                        <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ezC">
                        <label tabindex="-1" aria-label="checkbox" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ezC"></label>
                    </div>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container">
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                    <div class="fd-form-item">
                        <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ezD">
                        <label tabindex="-1" aria-label="checkbox" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ezD"></label>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container is-selected">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div
            <div class="fd-form-item">
                <input type="checkbox" checked class="fd-checkbox fd-checkbox--compact" id="Ai4ezEE">
                <label tabindex="-1" aria-label="checkbox" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ezEE"></label>
            </div>
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ezF">
                <label tabindex="-1" aria-label="checkbox" class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ezF"></label>
            </div>
        </div>
    </li>
</ul>

<br><br>

<h3>Single Selection Left</h3>

<ul role="tree" aria-label="Root Tree" id="TREESESSLL1" class="fd-tree expanded-level-1">
    <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
        <div class="fd-tree__item-container is-selected">
            <button tabindex="0" class="fd-tree__expander is-expanded" aria-controls="TREESESSLL2" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true"></button>
            <div class="fd-form-item">
                <input type="radio" class="fd-radio" id="pDidh761" name="radio1" checked>
                <label class="fd-radio__label" aria-label="radio button" for="pDidh761"></label>
            </div>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
        <ul role="group" class="fd-tree" id="TREESESSLL2" aria-hidden="false">
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container">
                    <button tabindex="0" class="fd-tree__expander" aria-label="Expander"></button>
                    <div class="fd-form-item">
                        <input type="radio" class="fd-radio" id="pDidh7612" name="radio1">
                        <label class="fd-radio__label" aria-label="radio button" for="pDidh7612"></label>
                    </div>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container">
                    <div class="fd-form-item">
                        <input type="radio" class="fd-radio" id="pDidh7613" name="radio1">
                        <label class="fd-radio__label" aria-label="radio button" for="pDidh7613"></label>
                    </div>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container">
                    <div class="fd-form-item">
                        <input type="radio" class="fd-radio" id="pDidh764" name="radio3">
                        <label class="fd-radio__label" aria-label="radio button" for="pDidh764"></label>
                    </div>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container">
            <div class="fd-form-item">
            <input type="radio" class="fd-radio" id="pDidh76r4" name="radio3" disabled>
            <label class="fd-radio__label" aria-label="radio button" for="pDidh76r4"></label>
            </div>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container">
            <div class="fd-form-item">
                <input type="radio" class="fd-radio" id="pDidh764Y6" name="radio3" disabled>
                <label class="fd-radio__label" aria-label="radio button" for="pDidh764Y6"></label>
            </div>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
</ul>
`;

treeWithSelection.parameters = {
    docs: {
        iframeHeight: 1000,
        storyDescription: `
Form items can be added before or after the tree content <code class="docs-code">.fd-tree\\_\\_content</code>. For Multi Selection use checkboxes and for Single Selection use radio buttons. The <code class="docs-code">.fd-tree\\_\\_form-item</code> modifier class has to be applied together with <code class="docs-code">.fd-form-item</code>.
`
    }
};

export const treeWithNoData = () => `
<ul role="tree" aria-label="Root Tree" id="TREE1RTLND1" class="fd-tree fd-tree--no-data">
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container">
            <div class="fd-tree__content">
                <span class="fd-tree__text">No Data</span>
            </div>
        </div>
    </li>
</ul>
`;

treeWithNoData.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: `
Apply the <code class="docs-code">.fd-tree--no-data</code> modifier class to the root tree if there is no data to display.
`
    }
};

export const RTL = () => `
<div dir="rtl">
    <ul role="tree" aria-label="Root Tree" id="TREE1RTLL1" class="fd-tree fd-tree--active expanded-level-1">
        <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
            <div class="fd-tree__item-container  has-highlight-indicator--success is-navigated">
                <button class="fd-tree__expander is-expanded" aria-controls="TREE1RTLL2" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true"></button>
                <a href="https://sap.github.io/fundamental/" class="fd-tree__content has-navigation-indicator">
                    <span class="sap-icon--pie-chart sap-icon--l fd-tree__icon"></span>
                    <span class="fd-tree__text">Level 1</span>
                </a>
                <button aria-label="Edit button" class="fd-button fd-button--transparent sap-icon--edit"></button>
                <button aria-label="Delete button" class="fd-button fd-button--transparent sap-icon--decline"></button>
            </div>
            <ul role="group" class="fd-tree" id="TREE1RTLL2" aria-hidden="false">
                <li role="treeitem" aria-level="2" class="fd-tree__item">
                    <div class="fd-tree__item-container has-highlight-indicator--warning">
                        <button class="fd-tree__expander" aria-label="Expander"></button>
                        <div class="fd-tree__content">
                            <span class="sap-icon--money-bills sap-icon--l fd-tree__icon"></span>
                            <span class="fd-tree__text">Level 2</span>
                        </div>
                        <button aria-label="Edit button" class="fd-button fd-button--transparent sap-icon--edit"></button>
                        <button aria-label="Delete button" class="fd-button fd-button--transparent sap-icon--decline"></button>
                    </div>
                </li>
                <li role="treeitem" aria-level="2" class="fd-tree__item">
                    <div class="fd-tree__item-container">
                        <div class="fd-tree__content">
                            <span class="sap-icon--marketing-campaign sap-icon--l fd-tree__icon"></span>
                            <span class="fd-tree__text">Level 2</span>
                        </div>
                        <button aria-label="Edit button" class="fd-button fd-button--transparent sap-icon--edit"></button>
                        <button aria-label="Delete button" class="fd-button fd-button--transparent sap-icon--decline"></button>
                    </div>
                </li>
                <li role="treeitem" aria-level="2" class="fd-tree__item">
                    <div class="fd-tree__item-container">
                        <div class="fd-tree__content">
                            <span class="sap-icon--waiver sap-icon--l fd-tree__icon"></span>
                            <span class="fd-tree__text">Level 2</span>
                            <span class="sap-icon--e-learning sap-icon--l fd-tree__icon"></span>
                        </div>
                        <button aria-label="Edit button" class="fd-button fd-button--transparent sap-icon--edit"></button>
                        <button aria-label="Delete button" class="fd-button fd-button--transparent sap-icon--decline"></button>
                    </div>
                </li>
            </ul>
        </li>
        <li role="treeitem" aria-level="1" class="fd-tree__item">
            <div class="fd-tree__item-container">
                <div class="fd-tree__content">
                    <span class="sap-icon--home-share sap-icon--l fd-tree__icon"></span>
                    <span class="fd-tree__text">Level 1</span>
                    <span class="sap-icon--puzzle sap-icon--l fd-tree__icon"></span>
                </div>
                <button aria-label="Edit button" class="fd-button fd-button--transparent sap-icon--edit"></button>
                <button aria-label="Delete button" class="fd-button fd-button--transparent sap-icon--decline"></button>
            </div>
        </li>
        <li role="treeitem" aria-level="1" class="fd-tree__item">
            <div class="fd-tree__item-container is-navigated has-highlight-indicator--error">
                <a href="https://sap.github.io/fundamental/" class="fd-tree__content has-navigation-indicator">
                    <span class="sap-icon--overview-chart sap-icon--l fd-tree__icon"></span>
                    <span class="fd-tree__text">Very long text that does not wrap ... perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</span>
                </a>
            </div>
        </li>
        <li role="treeitem" aria-level="1" class="fd-tree__item">
            <div class="fd-tree__item-container has-highlight-indicator">
                <div class="fd-tree__content fd-tree__content--wrap">
                    <span class="sap-icon--e-care sap-icon--l fd-tree__icon"></span>
                    <span class="fd-tree__text">Very long text with wrapping behaviour ... perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</span>
                </div>
                <button aria-label="Edit button" class="fd-button fd-button--transparent sap-icon--edit"></button>
                <button aria-label="Delete button" class="fd-button fd-button--transparent sap-icon--decline"></button>
            </div>
        </li>
    </ul>
</div>
`;

RTL.parameters = {
    docs: {
        iframeHeight: 500
    }
};
