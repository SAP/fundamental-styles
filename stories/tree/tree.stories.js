import '../../dist/button.css';
import '../../dist/checkbox.css';
import '../../dist/icon.css';
import '../../dist/form-item.css';
import '../../dist/menu.css';
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

The tree is like a list containing hierarchical data. It acts as a container for items, with the possibility to expand and collapse nodes. The tree changes the indentation per level dynamically when the user expands a node, based on number of levels currently showing. The first tree level (ul element) has a class <code class="docs-code">expanded-level-*</code> which keeps track of which level is currently expanded. The indentation rules are the same for compact and cozy mode.

### WRAPPING BEHAVIOUR

The default behaviour of the list item is no wrapping. To allow wrapping use the <code class="docs-code">fd-tree\\_\\_content--wrap</code> modifier class applied on the <code class="docs-code">fd-tree\\_\\_content</code> element.

### MODES

There are 2 modes: Default(Tablet and Mobile) and Compact (Desktop). For compact mode apply the <code class="docs-code">fd-tree--compact</code> modifier class to each fd-tree element.

### INTERACTIVE STATES

By default tree items do not have hover state. The <code class="docs-code">fd-tree--hoverable</code> modifier class applied to the first tree level (ul element) can enable the hover state.
For selected state apply the is-selected class to the <code class="docs-code">fd-tree\\_\\_item-container</code> element.

### Levels
The Tree currently supports up to 17 levels. More levels can be added per request.



<span style="color: darkred; font-weight: bold;">NOTE: In some examples the expander is not interactive (will not show/hide the next level). Its purpose in these cases is simply to demonstrate the indentation rules.
        `,
        docs: { iframeHeight: 500 },
        tags: ['development']
    }
};

export const treeWithExpandedLevel1 = () => `
<ul role="tree" aria-label="Root Tree" id="TREE1L1" class="fd-tree level-1 expanded-level-1">
    <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <button class="fd-tree__expander is-expanded" aria-controls="TREE1L2" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true"></button>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
        <ul role="group" class="fd-tree level-2" id="TREE1L2" aria-hidden="false">
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container">
                    <button class="fd-tree__expander" aria-label="Expander"></button>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container">
                    <div class="fd-tree__content">
                        <span class="sap-icon--account sap-icon--l"></span>
                        <span class="fd-tree__text" style="margin: 0 0.5rem;">Level 2</span>
                    </div>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container">
                    <div class="fd-tree__content">
                        <span class="sap-icon--leads sap-icon--l"></span>
                        <span class="fd-tree__text" style="margin: 0 0.5rem;">Level 2</span>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Very long text that does not wrap ... perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</span>
            </div>
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <div class="fd-tree__content fd-tree__content--wrap">
                <span class="fd-tree__text">Very long text with wrapping behaviour ... perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</span>
            </div>
        </div>
    </li>
</ul>


<br>
<h4>Compact</h4>
<br>

<ul role="tree" aria-label="Root Tree" id="TREE1CL1" class="fd-tree fd-tree--compact level-1 expanded-level-1">
    <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <button class="fd-tree__expander is-expanded" aria-controls="TREE1CL2" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true"></button>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
        <ul role="group" class="fd-tree fd-tree--compact level-2" id="TREE1CL2" aria-hidden="false">
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container">
                    <button class="fd-tree__expander" aria-label="Expander"></button>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container">
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container">
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
</ul>
`;

treeWithExpandedLevel1.parameters = {
    docs: {
        iframeHeight: 650,
        storyDescription: `
When Level 1 is expanded to show Level 2, Level 2 is idented by 1.5rem.
Only Level 1 tree (ul element) needs to have the <code class="docs-code">expanded-level-*</code> modifier class in order to keep track of which level is currently expanded.
`
    }
};

export const treeWithExpandedLevel2AndHoverableTreeItems = () => `
<ul role="tree" aria-label="Root Tree" id="TREE2L1" class="fd-tree fd-tree--hoverable level-1 expanded-level-2">
    <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <button class="fd-tree__expander is-expanded" aria-controls="TREE2L2" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true"></button>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
        <ul role="group" class="fd-tree level-2" id="TREE2L2" aria-hidden="false">
            <li role="treeitem" aria-level="2" aria-expanded="true" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container">
                    <button class="fd-tree__expander is-expanded" aria-controls="TREE2L3" aria-haspopup="true" aria-label="Expand level 3" aria-expanded="true"></button>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
                <ul role="group" class="fd-tree level-3" id="TREE2L3" aria-hidden="false">
                    <li role="treeitem" aria-level="3" class="fd-tree__item">
                        <div tabindex="0" class="fd-tree__item-container">
                            <button class="fd-tree__expander" aria-label="Expander"></button>
                            <div class="fd-tree__content">
                                <span class="fd-tree__text">Level 3</span>
                            </div>
                        </div>
                    </li>
                    <li role="treeitem" aria-level="3" class="fd-tree__item">
                        <div tabindex="0" class="fd-tree__item-container">
                            <div class="fd-tree__content">
                                <span class="fd-tree__text">Level 3</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container">
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
</ul>

<br>
<h4>Compact</h4>
<br>

<ul role="tree" aria-label="Root Tree" id="TREE2CL1" class="fd-tree fd-tree--hoverable fd-tree--compact level-1 expanded-level-2">
    <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <button class="fd-tree__expander is-expanded" aria-controls="TREE2CL2" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true"></button>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
        <ul role="group" class="fd-tree fd-tree--compact level-2" id="TREE2CL2" aria-hidden="false">
            <li role="treeitem" aria-level="2" aria-expanded="true" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container">
                    <button class="fd-tree__expander is-expanded" aria-controls="TREE2CL3" aria-haspopup="true" aria-label="Expand level 3" aria-expanded="true"></button>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
                <ul role="group" class="fd-tree fd-tree--compact level-3" id="TREE2CL3" aria-hidden="false">
                    <li role="treeitem" aria-level="3" class="fd-tree__item">
                        <div tabindex="0" class="fd-tree__item-container">
                            <button class="fd-tree__expander" aria-label="Expander"></button>
                            <div class="fd-tree__content">
                                <span class="fd-tree__text">Level 3</span>
                            </div>
                        </div>
                    </li>
                    <li role="treeitem" aria-level="3" class="fd-tree__item">
                        <div tabindex="0" class="fd-tree__item-container">
                            <div class="fd-tree__content">
                                <span class="fd-tree__text">Level 3</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container">
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
</ul>
`;

treeWithExpandedLevel2AndHoverableTreeItems.parameters = {
    docs: {
        iframeHeight: 700,
        storyDescription: `
When Level 2 is expanded to show Level 3, Level 2 changes to be indented by 1rem, Level 3 is indented by 2.5rem.

For hoverable tree items add the <code class="docs-code">fd-tree--hoverable</code> modifier class to the first tree level (ul element).
`
    }
};


export const treeWithExpandedLevel3 = () => `
<ul role="tree" aria-label="Root Tree" id="TREE3L1" class="fd-tree level-1 expanded-level-3">
    <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <button class="fd-tree__expander is-expanded" aria-controls="TREE3L2" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true"></button>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
        <ul role="group" class="fd-tree level-2" id="TREE3L2" aria-hidden="false">
            <li role="treeitem" aria-level="2" aria-expanded="true" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container">
                    <button class="fd-tree__expander is-expanded" aria-controls="TREE3L3" aria-haspopup="true" aria-label="Expand level 3" aria-expanded="true"></button>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
                <ul role="group" class="fd-tree level-3" id="TREE3L3" aria-hidden="false">
                    <li role="treeitem" aria-level="3" aria-expanded="true" class="fd-tree__item">
                        <div tabindex="0" class="fd-tree__item-container">
                            <button class="fd-tree__expander is-expanded" aria-controls="TREE3L4" aria-haspopup="true" aria-label="Expand level 4" aria-expanded="true"></button>
                            <div class="fd-tree__content">
                                <span class="fd-tree__text">Level 3</span>
                            </div>
                        </div>
                        <ul role="group" class="fd-tree level-4" id="TREE3L4" aria-hidden="false">
                            <li role="treeitem" aria-level="4" class="fd-tree__item">
                                <div tabindex="0" class="fd-tree__item-container">
                                    <button class="fd-tree__expander" aria-label="Expander"></button>
                                    <div class="fd-tree__content">
                                        <span class="fd-tree__text">Level 4</span>
                                    </div>
                                </div>
                            </li>
                            <li role="treeitem" aria-level="4" class="fd-tree__item">
                                <div tabindex="0" class="fd-tree__item-container">
                                    <div class="fd-tree__content">
                                        <span class="fd-tree__text">Level 4</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li role="treeitem" aria-level="3" class="fd-tree__item">
                        <div tabindex="0" class="fd-tree__item-container">
                            <div class="fd-tree__content">
                                <span class="fd-tree__text">Level 3</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container">
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
</ul>

<br>
<h4>Compact</h4>
<br>

<ul role="tree" aria-label="Root Tree" id="TREE3CL1" class="fd-tree fd-tree--compact level-1 expanded-level-3">
    <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <button class="fd-tree__expander is-expanded" aria-controls="TREE3CL2" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true"></button>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
        <ul role="group" class="fd-tree fd-tree--compact level-2" id="TREE3CL2" aria-hidden="false">
            <li role="treeitem" aria-level="2" aria-expanded="true" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container">
                    <button class="fd-tree__expander is-expanded" aria-controls="TREE3CL3" aria-haspopup="true" aria-label="Expand level 3" aria-expanded="true"></button>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
                <ul role="group" class="fd-tree fd-tree--compact level-3" id="TREE3CL3" aria-hidden="false">
                    <li role="treeitem" aria-level="3" aria-expanded="true" class="fd-tree__item">
                        <div tabindex="0" class="fd-tree__item-container">
                            <button class="fd-tree__expander is-expanded" aria-controls="TREE3CL4" aria-haspopup="true" aria-label="Expand level 4" aria-expanded="true"></button>
                            <div class="fd-tree__content">
                                <span class="fd-tree__text">Level 3</span>
                            </div>
                        </div>
                        <ul role="group" class="fd-tree fd-tree--compact level-4" id="TREE3CL4" aria-hidden="false">
                            <li role="treeitem" aria-level="4" class="fd-tree__item">
                                <div tabindex="0" class="fd-tree__item-container">
                                    <button class="fd-tree__expander" aria-label="Expander"></button>
                                    <div class="fd-tree__content">
                                        <span class="fd-tree__text">Level 4</span>
                                    </div>
                                </div>
                            </li>
                            <li role="treeitem" aria-level="4" class="fd-tree__item">
                                <div tabindex="0" class="fd-tree__item-container">
                                    <div class="fd-tree__content">
                                        <span class="fd-tree__text">Level 4</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li role="treeitem" aria-level="3" class="fd-tree__item">
                        <div tabindex="0" class="fd-tree__item-container">
                            <div class="fd-tree__content">
                                <span class="fd-tree__text">Level 3</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container">
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
</ul>
`;

treeWithExpandedLevel3.parameters = {
    docs: {
        iframeHeight: 900,
        storyDescription: `
Indentations are calculated with 0.5rem up to level 6.

When Level 3 is expanded to show Level 4:

- Level 2 changes to be indented by 0.5rem
- Level 3 changes to be indented by 1rem
- Level 4 changes to be indented by 1.5rem

This indentation repeats when level 4 and 5 are triggered.

- Level 5 is indented by 2rem
- Level 6 is indented by 2.5rem
`
    }
};

export const treeWithExpandedLevel6 = () => `
<ul role="tree" aria-label="Root Tree" id="TREE6L1" class="fd-tree level-1 expanded-level-6">
    <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <button class="fd-tree__expander is-expanded" aria-controls="TREE6L2" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true"></button>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
        <ul role="group" class="fd-tree level-2" id="TREE6L2" aria-hidden="false">
            <li role="treeitem" aria-level="2" aria-expanded="true" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container">
                    <button class="fd-tree__expander is-expanded" aria-controls="TREE6L3" aria-haspopup="true" aria-label="Expand level 3" aria-expanded="true"></button>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
                <ul role="group" class="fd-tree level-3" id="TREE6L3" aria-hidden="false">
                    <li role="treeitem" aria-level="3" aria-expanded="true" class="fd-tree__item">
                        <div tabindex="0" class="fd-tree__item-container">
                            <button class="fd-tree__expander is-expanded" aria-controls="TREE6L4" aria-haspopup="true" aria-label="Expand level 4" aria-expanded="true"></button>
                            <div class="fd-tree__content">
                                <span class="fd-tree__text">Level 3</span>
                            </div>
                        </div>
                        <ul role="group" class="fd-tree level-4" id="TREE6L4" aria-hidden="false">
                            <li role="treeitem" aria-level="4" aria-expanded="true" class="fd-tree__item">
                                <div tabindex="0" class="fd-tree__item-container">
                                    <button class="fd-tree__expander is-expanded" aria-controls="TREE6L5" aria-haspopup="true" aria-label="Expand level 5" aria-expanded="true"></button>
                                    <div class="fd-tree__content">
                                        <span class="fd-tree__text">Level 4</span>
                                    </div>
                                </div>
                                <ul role="group" class="fd-tree level-5" id="TREE6L5" aria-hidden="false">
                                    <li role="treeitem" aria-level="5" aria-expanded="true"  class="fd-tree__item">
                                        <div tabindex="0" class="fd-tree__item-container">
                                            <button class="fd-tree__expander is-expanded" aria-controls="TREE6L6" aria-haspopup="true" aria-label="Expand level 6" aria-expanded="true"></button>
                                            <div class="fd-tree__content">
                                                <span class="fd-tree__text">Level 5</span>
                                            </div>
                                        </div>
                                        <ul role="group" class="fd-tree level-6" id="TREE6L6" aria-hidden="false">
                                            <li role="treeitem" aria-level="6" aria-expanded="true" class="fd-tree__item">
                                                <div tabindex="0" class="fd-tree__item-container">
                                                    <button class="fd-tree__expander is-expanded" aria-controls="TREE6L7" aria-haspopup="true" aria-label="Expand level 7" aria-expanded="true"></button>
                                                    <div class="fd-tree__content">
                                                        <span class="fd-tree__text">Level 6</span>
                                                    </div>
                                                </div>
                                                <ul role="group" class="fd-tree level-7" id="TREE6L7" aria-hidden="false">
                                                    <li role="treeitem" aria-level="7" class="fd-tree__item">
                                                        <div tabindex="0" class="fd-tree__item-container">
                                                            <button class="fd-tree__expander" aria-label="Expander"></button>
                                                            <div class="fd-tree__content">
                                                                <span class="fd-tree__text">Level 7</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li role="treeitem" aria-level="7" class="fd-tree__item">
                                                        <div tabindex="0" class="fd-tree__item-container">
                                                            <div class="fd-tree__content">
                                                                <span class="fd-tree__text">Level 7</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li role="treeitem" aria-level="6" class="fd-tree__item">
                                                <div tabindex="0" class="fd-tree__item-container">
                                                    <div class="fd-tree__content">
                                                        <span class="fd-tree__text">Level 6</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li role="treeitem" aria-level="5" class="fd-tree__item">
                                        <div tabindex="0" class="fd-tree__item-container">
                                            <div class="fd-tree__content">
                                                <span class="fd-tree__text">Level 5</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li role="treeitem" aria-level="4" class="fd-tree__item">
                                <div tabindex="0" class="fd-tree__item-container">
                                    <div class="fd-tree__content">
                                        <span class="fd-tree__text">Level 4</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li role="treeitem" aria-level="3" class="fd-tree__item">
                        <div tabindex="0" class="fd-tree__item-container">
                            <div class="fd-tree__content">
                                <span class="fd-tree__text">Level 3</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container">
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
</ul>

<br>
<h4>Compact</h4>
<br>

<ul role="tree" aria-label="Root Tree" id="TREE6CL1" class="fd-tree fd-tree--compact level-1 expanded-level-6">
    <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <button class="fd-tree__expander is-expanded" aria-controls="TREE6CL2" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true"></button>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
        <ul role="group" class="fd-tree fd-tree--compact level-2" id="TREE6CL2" aria-hidden="false">
            <li role="treeitem" aria-level="2" aria-expanded="true" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container">
                    <button class="fd-tree__expander is-expanded" aria-controls="TREE6CL3" aria-haspopup="true" aria-label="Expand level 3" aria-expanded="true"></button>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
                <ul role="group" class="fd-tree fd-tree--compact level-3" id="TREE6CL3" aria-hidden="false">
                    <li role="treeitem" aria-level="3" aria-expanded="true" class="fd-tree__item">
                        <div tabindex="0" class="fd-tree__item-container">
                            <button class="fd-tree__expander is-expanded" aria-controls="TREE6CL4" aria-haspopup="true" aria-label="Expand level 4" aria-expanded="true"></button>
                            <div class="fd-tree__content">
                                <span class="fd-tree__text">Level 3</span>
                            </div>
                        </div>
                        <ul role="group" class="fd-tree fd-tree--compact level-4" id="TREE6CL4" aria-hidden="false">
                            <li role="treeitem" aria-level="4" aria-expanded="true" class="fd-tree__item">
                                <div tabindex="0" class="fd-tree__item-container">
                                    <button class="fd-tree__expander is-expanded" aria-controls="TREE6CL5" aria-haspopup="true" aria-label="Expand level 5" aria-expanded="true"></button>
                                    <div class="fd-tree__content">
                                        <span class="fd-tree__text">Level 4</span>
                                    </div>
                                </div>
                                <ul role="group" class="fd-tree fd-tree--compact level-5" id="TREE6CL5" aria-hidden="false">
                                    <li role="treeitem" aria-level="5" aria-expanded="true"  class="fd-tree__item">
                                        <div tabindex="0" class="fd-tree__item-container">
                                            <button class="fd-tree__expander is-expanded" aria-controls="TREE6CL6" aria-haspopup="true" aria-label="Expand level 6" aria-expanded="true"></button>
                                            <div class="fd-tree__content">
                                                <span class="fd-tree__text">Level 5</span>
                                            </div>
                                        </div>
                                        <ul role="group" class="fd-tree fd-tree--compact level-6" id="TREE6CL6" aria-hidden="false">
                                            <li role="treeitem" aria-level="6" aria-expanded="true" class="fd-tree__item">
                                                <div tabindex="0" class="fd-tree__item-container">
                                                    <button class="fd-tree__expander is-expanded" aria-controls="TREE6CL7" aria-haspopup="true" aria-label="Expand level 7" aria-expanded="true"></button>
                                                    <div class="fd-tree__content">
                                                        <span class="fd-tree__text">Level 6</span>
                                                    </div>
                                                </div>
                                                <ul role="group" class="fd-tree fd-tree--compact level-7" id="TREE6CL7" aria-hidden="false">
                                                    <li role="treeitem" aria-level="7" class="fd-tree__item">
                                                        <div tabindex="0" class="fd-tree__item-container">
                                                            <button class="fd-tree__expander" aria-label="Expander"></button>
                                                            <div class="fd-tree__content">
                                                                <span class="fd-tree__text">Level 7</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li role="treeitem" aria-level="7" class="fd-tree__item">
                                                        <div tabindex="0" class="fd-tree__item-container">
                                                            <div class="fd-tree__content">
                                                                <span class="fd-tree__text">Level 7</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li role="treeitem" aria-level="6" class="fd-tree__item">
                                                <div tabindex="0" class="fd-tree__item-container">
                                                    <div class="fd-tree__content">
                                                        <span class="fd-tree__text">Level 6</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li role="treeitem" aria-level="5" class="fd-tree__item">
                                        <div tabindex="0" class="fd-tree__item-container">
                                            <div class="fd-tree__content">
                                                <span class="fd-tree__text">Level 5</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li role="treeitem" aria-level="4" class="fd-tree__item">
                                <div tabindex="0" class="fd-tree__item-container">
                                    <div class="fd-tree__content">
                                        <span class="fd-tree__text">Level 4</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li role="treeitem" aria-level="3" class="fd-tree__item">
                        <div tabindex="0" class="fd-tree__item-container">
                            <div class="fd-tree__content">
                                <span class="fd-tree__text">Level 3</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container">
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
</ul>
`;

treeWithExpandedLevel6.parameters = {
    docs: {
        iframeHeight: 1350,
        storyDescription: `
When Level 6 is expanded to show up to 24 levels:

Indentations are calculated with 0.25rem

- Level 2 Changes to be indented by 0.25rem
- Level 3 Changes to be indented by 0.5rem
- Level 4 Changes to be indented by 0.75rem
- Level 5 Changes to be indented by 1rem
- Level 6 Changes to be indented by 1.25rem

0.25rem is added to each indentation up to level 24
`
    }
};

export const treeWithIndependentSelection = () => `
<ul role="tree" aria-label="Root Tree" id="TREE1ISL1" class="fd-tree fd-tree--hoverable fd-tree--independent-selection level-1 expanded-level-1">
    <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <div class="fd-form-item fd-tree__form-item">
                <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox" id="Ai4ez2">
                <label tabindex="-1" class="fd-checkbox__label fd-tree__checkbox-label" for="Ai4ez2"></label>
            </div>
            <button class="fd-tree__expander is-expanded" aria-controls="TREE1ISL2" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true"></button>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
        <ul role="group" class="fd-tree fd-tree--independent-selection level-2" id="TREE1ISL2" aria-hidden="false">
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container">
                    <div class="fd-form-item fd-tree__form-item">
                        <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox" id="Ai4ez3">
                        <label tabindex="-1" class="fd-checkbox__label fd-tree__checkbox-label" for="Ai4ez3"></label>
                    </div>
                    <button class="fd-tree__expander" aria-label="Expander"></button>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container is-selected">
                    <div class="fd-form-item fd-tree__form-item">
                        <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox" id="Ai4ez4" checked>
                        <label tabindex="-1" class="fd-checkbox__label fd-tree__checkbox-label" for="Ai4ez4"></label>
                    </div>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container">
                    <div class="fd-form-item fd-tree__form-item">
                        <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox" id="Ai4ez5">
                        <label tabindex="-1" class="fd-checkbox__label fd-tree__checkbox-label" for="Ai4ez5"></label>
                    </div>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container is-selected">
            <div class="fd-form-item fd-tree__form-item">
                <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox" id="Ai4ez6" checked>
                <label tabindex="-1" class="fd-checkbox__label fd-tree__checkbox-label" for="Ai4ez6"></label>
            </div>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <div class="fd-form-item fd-tree__form-item">
                <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox" id="Ai4ez7">
                <label tabindex="-1" class="fd-checkbox__label fd-tree__checkbox-label" for="Ai4ez7"></label>
            </div>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
</ul>

<br>
<h4>Compact</h4>
<br>

<ul role="tree" aria-label="Root Tree" id="TREE1ISCL1" class="fd-tree fd-tree--compact fd-tree--hoverable fd-tree--independent-selection level-1 expanded-level-4">
    <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <div class="fd-form-item fd-tree__form-item">
                <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox fd-checkbox--compact" id="CAi4ez2">
                <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label" for="CAi4ez2"></label>
            </div>
            <button class="fd-tree__expander is-expanded" aria-controls="TREE1ISCL2" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true"></button>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
        <ul role="group" class="fd-tree fd-tree--compact fd-tree--independent-selection level-2" id="TREE1ISCL2" aria-hidden="false">
            <li role="treeitem" aria-level="2" aria-expanded="true" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container">
                    <div class="fd-form-item fd-tree__form-item">
                        <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox fd-checkbox--compact" id="CAi4ez3">
                        <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label" for="CAi4ez3"></label>
                    </div>
                    <button class="fd-tree__expander is-expanded" aria-controls="TREE1ISCL3" aria-haspopup="true" aria-label="Expand level 3" aria-expanded="true"></button>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
                <ul role="group" class="fd-tree fd-tree--compact fd-tree--independent-selection level-3" id="TREE1ISCL3" aria-hidden="false">
                    <li role="treeitem" aria-level="3" aria-expanded="true" class="fd-tree__item">
                        <div tabindex="0" class="fd-tree__item-container">
                            <div class="fd-form-item fd-tree__form-item">
                                <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox fd-checkbox--compact" id="CAi4ez3AA">
                                <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label" for="CAi4ez3AA"></label>
                            </div>
                            <button class="fd-tree__expander is-expanded" aria-controls="TREE1ISCL4" aria-haspopup="true" aria-label="Expand level 4" aria-expanded="true"></button>
                            <div class="fd-tree__content">
                                <span class="fd-tree__text">Level 3</span>
                            </div>
                        </div>
                        <ul role="group" class="fd-tree fd-tree--compact fd-tree--independent-selection level-4" id="TREE1ISCL4" aria-hidden="false">
                            <li role="treeitem" aria-level="4" aria-expanded="true" class="fd-tree__item">
                                <div tabindex="0" class="fd-tree__item-container">
                                    <div class="fd-form-item fd-tree__form-item">
                                        <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox fd-checkbox--compact" id="CAi4ez3CC">
                                        <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label" for="CAi4ez3CC"></label>
                                    </div>
                                    <button class="fd-tree__expander is-expanded" aria-controls="TREE1ISCL5" aria-haspopup="true" aria-label="Expand level 5" aria-expanded="true"></button>
                                    <div class="fd-tree__content">
                                        <span class="fd-tree__text">Level 4</span>
                                    </div>
                                </div>
                                <ul role="group" class="fd-tree fd-tree--compact fd-tree--independent-selection level-5" id="TREE1ISCL5" aria-hidden="false">
                                    <li role="treeitem" aria-level="5" class="fd-tree__item">
                                        <div tabindex="0" class="fd-tree__item-container">
                                            <div class="fd-form-item fd-tree__form-item">
                                                <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox fd-checkbox--compact" id="CAi4ezEE">
                                                <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label" for="CAi4ezEE"></label>
                                            </div>
                                            <div class="fd-tree__content">
                                                <span class="fd-tree__text">Level 5</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li role="treeitem" aria-level="5" class="fd-tree__item">
                                        <div tabindex="0" class="fd-tree__item-container">
                                            <div class="fd-form-item fd-tree__form-item">
                                                <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox fd-checkbox--compact" id="CAi4ez4FF">
                                                <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label" for="CAi4ez4FF"></label>
                                            </div>
                                            <div class="fd-tree__content">
                                                <span class="fd-tree__text">Level 5</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li role="treeitem" aria-level="4" class="fd-tree__item">
                                <div tabindex="0" class="fd-tree__item-container">
                                    <div class="fd-form-item fd-tree__form-item">
                                        <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox fd-checkbox--compact" id="CAi4ez4DD">
                                        <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label" for="CAi4ez4DD"></label>
                                    </div>
                                    <div class="fd-tree__content">
                                        <span class="fd-tree__text">Level 4</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li role="treeitem" aria-level="3" class="fd-tree__item">
                        <div tabindex="0" class="fd-tree__item-container">
                            <div class="fd-form-item fd-tree__form-item">
                                <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox fd-checkbox--compact" id="CAi4ez4BB">
                                <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label" for="CAi4ez4BB"></label>
                            </div>
                            <div class="fd-tree__content">
                                <span class="fd-tree__text">Level 3</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container is-selected">
                    <div class="fd-form-item fd-tree__form-item">
                        <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox fd-checkbox--compact" id="CAi4ez4" checked>
                        <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label" for="CAi4ez4"></label>
                    </div>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container">
                    <div class="fd-form-item fd-tree__form-item">
                        <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox fd-checkbox--compact" id="CAi4ez5">
                        <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label" for="CAi4ez5"></label>
                    </div>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container is-selected">
            <div class="fd-form-item fd-tree__form-item">
                <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox fd-checkbox--compact" id="CAi4ez6" checked>
                <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label" for="CAi4ez6"></label>
            </div>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <div class="fd-form-item fd-tree__form-item">
                <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox fd-checkbox--compact" id="CAi4ez7">
                <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label" for="CAi4ez7"></label>
            </div>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
</ul>
`;

treeWithIndependentSelection.parameters = {
    docs: {
        iframeHeight: 800,
        storyDescription: `Apply the <code class="docs-code">fd-tree--independent-selection</code> modifier class to each <code class="docs-code">fd-tree element</code>.
`
    }
};

export const treeWithDependentSelection = () => `
<ul role="tree" aria-label="Root Tree" id="TREE1DSL1" class="fd-tree fd-tree--dependent-selection fd-tree--hoverable level-1 expanded-level-1">
    <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <button class="fd-tree__expander is-expanded" aria-controls="TREE1DSL2" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true"></button>
            <div class="fd-form-item fd-tree__form-item">
                <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox" id="Ai4ez8">
                <label tabindex="-1" class="fd-checkbox__label fd-tree__checkbox-label" for="Ai4ez8"></label>
            </div>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
        <ul role="group" class="fd-tree fd-tree--dependent-selection level-2" id="TREE1DSL2" aria-hidden="false">
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container">
                    <button class="fd-tree__expander" aria-label="Expander" aria-expanded="true"></button>
                    <div class="fd-form-item fd-tree__form-item">
                        <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox" id="Ai4ez9">
                        <label tabindex="-1" class="fd-checkbox__label fd-tree__checkbox-label" for="Ai4ez9"></label>
                    </div>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container is-selected">
                    <div class="fd-form-item fd-tree__form-item">
                        <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox" id="Ai4ez10" checked>
                        <label tabindex="-1" class="fd-checkbox__label fd-tree__checkbox-label" for="Ai4ez10"></label>
                    </div>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container">
                    <div class="fd-form-item fd-tree__form-item">
                        <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox" id="Ai4ez11">
                        <label tabindex="-1" class="fd-checkbox__label fd-tree__checkbox-label" for="Ai4ez11"></label>
                    </div>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container is-selected">
            <div class="fd-form-item fd-tree__form-item">
                <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox" id="Ai4ez12" checked>
                <label tabindex="-1" class="fd-checkbox__label fd-tree__checkbox-label" for="Ai4ez12"></label>
            </div>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <div class="fd-form-item fd-tree__form-item">
                <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox" id="Ai4ez13">
                <label tabindex="-1" class="fd-checkbox__label fd-tree__checkbox-label" for="Ai4ez13"></label>
            </div>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
</ul>

<br>
<h4>Compact</h4>
<br>

<ul role="tree" aria-label="Root Tree" id="TREE1DCSL1" class="fd-tree fd-tree--compact fd-tree--dependent-selection level-1 expanded-level-2">
    <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <button class="fd-tree__expander is-expanded" aria-controls="TREE1DCSL2" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true"></button>
            <div class="fd-form-item fd-tree__form-item">
                <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox fd-checkbox--compact" id="CAi4ez8">
                <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="CAi4ez8"></label>
            </div>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
        <ul role="group" class="fd-tree fd-tree--compact fd-tree--dependent-selection level-2" id="TREE1DCSL2" aria-hidden="false">
            <li role="treeitem" aria-level="2" aria-expanded="true" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container">
                    <button class="fd-tree__expander is-expanded" aria-controls="TREE1DCSL3" aria-haspopup="true" aria-label="Expand level 3" aria-expanded="true"></button>
                    <div class="fd-form-item fd-tree__form-item">
                        <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox fd-checkbox--compact" id="CAi4ez9">
                        <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="CAi4ez9"></label>
                    </div>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
                <ul role="group" class="fd-tree fd-tree--compact fd-tree--dependent-selection level-3" id="TREE1DCSL3" aria-hidden="false">
                    <li role="treeitem" aria-level="3" class="fd-tree__item">
                        <div tabindex="0" class="fd-tree__item-container">
                            <div class="fd-form-item fd-tree__form-item">
                                <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox fd-checkbox--compact" id="CAi4ez9e">
                                <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="CAi4ez9e"></label>
                            </div>
                            <div class="fd-tree__content">
                                <span class="fd-tree__text">Level 3</span>
                            </div>
                        </div>
                    </li>
                    <li role="treeitem" aria-level="3" class="fd-tree__item">
                        <div tabindex="0" class="fd-tree__item-container">
                            <div class="fd-form-item fd-tree__form-item">
                                <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox fd-checkbox--compact" id="CAi4ez10t">
                                <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="CAi4ez10t"></label>
                            </div>
                            <div class="fd-tree__content">
                                <span class="fd-tree__text">Level 3</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container is-selected">
                    <div class="fd-form-item fd-tree__form-item">
                        <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox fd-checkbox--compact" id="CAi4ez10" checked>
                        <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="CAi4ez10"></label>
                    </div>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container">
                    <div class="fd-form-item fd-tree__form-item">
                        <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox fd-checkbox--compact" id="CAi4ez11">
                        <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="CAi4ez11"></label>
                    </div>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <div class="fd-form-item fd-tree__form-item">
                <input aria-label="checkbox-label" type="checkbox" class="fd-checkbox fd-checkbox--compact" id="CAi4ez13">
                <label tabindex="-1" class="fd-checkbox__label fd-checkbox__label--compact" for="CAi4ez13"></label>
            </div>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
</ul>
`;

treeWithDependentSelection.parameters = {
    docs: {
        iframeHeight: 650,
        storyDescription: `Apply the <code class="docs-code">fd-tree--dependent-selection</code> modifier class to each <code class="docs-code">fd-tree element</code>.
        `
    }
};
