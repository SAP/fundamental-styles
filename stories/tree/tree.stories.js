import '../../dist/button.css';
import '../../dist/icon.css';
import '../../dist/menu.css';
import '../../dist/popover.css';
import '../../dist/tree.css';

export default {
    title: 'Components/Tree',
    parameters: {
        description: `A tree is used to display data in a visual hierarchy.

Items that contain additional items are called nodes, while items that do not contain any other items are called leaves. 
If available, a single topmost node is called a root node. Apart from the hierarchical structure of its nodes and leaves, a tree is similar to a list.`,
        docs: { iframeHeight: 500 },
        tags: ['development']
    }
};

export const primaryTree = () => `
<ul role="tree" aria-label="Root Tree" id="TREE1L1" class="fd-tree level-1 expanded-level-1">
    <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <button class="fd-tree__expander is-expanded" aria-controls="TREE1L2" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true"></button>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
            <span class="fd-tree__navigation-indication"></span>
            <button class="fd-button fd-button--transparent sap-icon--decline"></button>
        </div>
        <ul role="group" class="fd-tree level-2" id="TREE1L2" aria-hidden="false">
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container">
                    <button class="fd-tree__expander" aria-label="Expander"></button>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                    <button class="fd-button fd-button--transparent sap-icon--decline"></button>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container">
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                    <button class="fd-button fd-button--transparent sap-icon--decline"></button>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div tabindex="0" class="fd-tree__item-container">
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                    <button class="fd-button fd-button--transparent sap-icon--decline"></button>
                </div>
            </li>
        </ul>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
            <button class="fd-button fd-button--transparent sap-icon--decline"></button>
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Very long text that does not wrap ... perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</span>
            </div>
            <span class="fd-tree__navigation-indication"></span>
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div tabindex="0" class="fd-tree__item-container">
            <div class="fd-tree__content fd-tree__content--wrap">
                <span class="fd-tree__text">Very long text with wrapping behaviour ... perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</span>
            </div>
            <button class="fd-button fd-button--transparent sap-icon--decline"></button>
        </div>
    </li>
</ul>

`;
