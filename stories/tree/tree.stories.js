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
<div class="fd-tree fd-tree--header">
    <div class="fd-tree__row fd-tree__row--header">
        <div class="fd-tree__col fd-tree__col--control">
            <button class="fd-tree__control" aria-label="Expand all" aria-controls="tWsod582" aria-pressed="false" onclick="onControlClick('tWsod582');"></button>
            Column Header
        </div>
        <div class="fd-tree__col">
            Column Header
        </div>
        <div class="fd-tree__col">
            Column Header
        </div>
        <div class="fd-tree__col">
            Status
        </div>
        <div class="fd-tree__col fd-tree__col--actions">
        </div>
    </div>
</div>
<ul class="fd-tree" id="tWsod582" role="tree">
    <li class="fd-tree__item" role="treeitem" id="inYUX852" aria-expanded="false">
        <div class="fd-tree__row">
            <div class="fd-tree__col fd-tree__col--control">
                <button class="fd-tree__control" aria-label="Expand" aria-controls="inYUX852"
                aria-pressed="false" onclick="onControlClick('inYUX852');"></button>
                First Level
            </div>
            <div class="fd-tree__col">
                Secondary Value
            </div>
            <div class="fd-tree__col">
                Secondary Value
            </div>
            <div class="fd-tree__col">
                    Inactive
            </div>
            <div class="fd-tree__col fd-tree__col--actions">
               <div class="fd-popover fd-popover--right">
                    <div class="fd-popover__control">
                        <button class="fd-button fd-button--transparent sap-icon--overflow" aria-controls="j2lk3j" 
                        aria-haspopup="true" aria-expanded="false" aria-label="More" onclick="onControlClick('j2lk3j');"></button>
                    </div>
                    <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="j2lk3j">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Edit</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Lock</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Duplicate</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Delete</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <ul class="fd-tree__group fd-tree__group--sublevel-1 is-hidden" role="group" aria-hidden="true">
            <li class="fd-tree__item" role="treeitem" id="Bxd8s850" aria-expanded="false">
                <div class="fd-tree__row">
                    <div class="fd-tree__col fd-tree__col--control">
                        <button class="fd-tree__control" aria-label="Expand" aria-controls="Bxd8s850"
                        aria-pressed="false" onclick="onControlClick('Bxd8s850');"></button>
                        Second Level
                    </div>
                    <div class="fd-tree__col">
                        Secondary Value
                    </div>
                    <div class="fd-tree__col">
                        Secondary Value
                    </div>
                    <div class="fd-tree__col">
                            Inactive
                    </div>
                    <div class="fd-tree__col fd-tree__col--actions">
                        <div class="fd-popover fd-popover--right">
                            <div class="fd-popover__control">
                                <button class="fd-button fd-button--transparent sap-icon--overflow" aria-controls="lklkj3"
                                aria-haspopup="true" aria-expanded="false" aria-label="More" onclick="onControlClick('lklkj3');"></button>
                            </div>
                            <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="lklkj3">
                                <nav class="fd-menu">
                                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                                        <li class="fd-menu__item">
                                            <a href="#" class="fd-menu__link">
                                                <span class="fd-menu__title">Edit</span>
                                            </a>
                                        </li>
                                        <li class="fd-menu__item">
                                            <a href="#" class="fd-menu__link">
                                                <span class="fd-menu__title">Lock</span>
                                            </a>
                                        </li>
                                        <li class="fd-menu__item">
                                            <a href="#" class="fd-menu__link">
                                                <span class="fd-menu__title">Duplicate</span>
                                            </a>
                                        </li>
                                        <li class="fd-menu__item">
                                            <a href="#" class="fd-menu__link">
                                                <span class="fd-menu__title">Delete</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="fd-tree__group fd-tree__group--sublevel-2 is-hidden" role="group" aria-hidden="true">
                    <li class="fd-tree__item" role="treeitem" id="qz9hB117" aria-expanded="false">
                        <div class="fd-tree__row">
                            <div class="fd-tree__col fd-tree__col--control">
                                <button class="fd-tree__control" aria-label="Expand" aria-controls="qz9hB117"
                                aria-pressed="false" onclick="onControlClick('qz9hB117');"></button>
                                Third Level
                            </div>
                            <div class="fd-tree__col">
                                Secondary Value
                            </div>
                            <div class="fd-tree__col">
                                Secondary Value
                            </div>
                            <div class="fd-tree__col">
                                    Inactive
                            </div>
                            <div class="fd-tree__col fd-tree__col--actions">
                                <div class="fd-popover fd-popover--right">
                                    <div class="fd-popover__control">
                                        <button class="fd-button fd-button--transparent sap-icon--overflow" aria-controls="asofjh3"
                                        aria-haspopup="true" aria-expanded="false" aria-label="More" onclick="onControlClick('asofjh3');"></button>
                                    </div>
                                    <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="asofjh3">
                                        <nav class="fd-menu">
                                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                                <li class="fd-menu__item">
                                                    <a href="#" class="fd-menu__link">
                                                        <span class="fd-menu__title">Edit</span>
                                                    </a>
                                                </li>
                                                <li class="fd-menu__item">
                                                    <a href="#" class="fd-menu__link">
                                                        <span class="fd-menu__title">Lock</span>
                                                    </a>
                                                </li>
                                                <li class="fd-menu__item">
                                                    <a href="#" class="fd-menu__link">
                                                        <span class="fd-menu__title">Duplicate</span>
                                                    </a>
                                                </li>
                                                <li class="fd-menu__item">
                                                    <a href="#" class="fd-menu__link">
                                                        <span class="fd-menu__title">Delete</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul class="fd-tree__group fd-tree__group--sublevel-3 is-hidden"
                        role="group" aria-hidden="true">
                            <li class="fd-tree__item" role="treeitem">
                                <div class="fd-tree__row">
                                    <div class="fd-tree__col fd-tree__col--control">
                                        Fourth Level
                                    </div>
                                    <div class="fd-tree__col">
                                        Secondary Value
                                    </div>
                                    <div class="fd-tree__col">
                                        Secondary Value
                                    </div>
                                    <div class="fd-tree__col">
                                            Inactive
                                    </div>
                                    <div class="fd-tree__col fd-tree__col--actions">
                                       <div class="fd-popover fd-popover--right">
                                            <div class="fd-popover__control">
                                                <button class="fd-button fd-button--transparent sap-icon--overflow" aria-controls="iouh3"
                                                aria-haspopup="true" aria-expanded="false" aria-label="More" onclick="onControlClick('iouh3');"></button>
                                            </div>
                                            <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="iouh3">
                                                <nav class="fd-menu">
                                                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                                                        <li class="fd-menu__item">
                                                            <a href="#" class="fd-menu__link">
                                                                <span class="fd-menu__title">Edit</span>
                                                            </a>
                                                        </li>
                                                        <li class="fd-menu__item">
                                                            <a href="#" class="fd-menu__link">
                                                                <span class="fd-menu__title">Lock</span>
                                                            </a>
                                                        </li>
                                                        <li class="fd-menu__item">
                                                            <a href="#" class="fd-menu__link">
                                                                <span class="fd-menu__title">Duplicate</span>
                                                            </a>
                                                        </li>
                                                        <li class="fd-menu__item">
                                                            <a href="#" class="fd-menu__link">
                                                                <span class="fd-menu__title">Delete</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="fd-tree__item" role="treeitem">
                <div class="fd-tree__row">
                    <div class="fd-tree__col fd-tree__col--control">
                        Second Level
                    </div>
                    <div class="fd-tree__col">
                        Secondary Value
                    </div>
                    <div class="fd-tree__col">
                        Secondary Value
                    </div>
                    <div class="fd-tree__col">
                            Default
                    </div>
                    <div class="fd-tree__col fd-tree__col--actions">
                        <div class="fd-popover fd-popover--right">
                            <div class="fd-popover__control">
                                <button class="fd-button fd-button--transparent sap-icon--overflow" aria-controls="jk3333"
                                aria-haspopup="true" aria-expanded="false" aria-label="More" onclick="onControlClick('jk3333');"></button>
                            </div>
                            <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="jk3333">
                                <nav class="fd-menu">
                                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                                        <li class="fd-menu__item">
                                            <a href="#" class="fd-menu__link">
                                                <span class="fd-menu__title">Edit</span>
                                            </a>
                                        </li>
                                        <li class="fd-menu__item">
                                            <a href="#" class="fd-menu__link">
                                                <span class="fd-menu__title">Lock</span>
                                            </a>
                                        </li>
                                        <li class="fd-menu__item">
                                            <a href="#" class="fd-menu__link">
                                                <span class="fd-menu__title">Duplicate</span>
                                            </a>
                                        </li>
                                        <li class="fd-menu__item">
                                            <a href="#" class="fd-menu__link">
                                                <span class="fd-menu__title">Delete</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li class="fd-tree__item" role="treeitem" id="lkEDI899" aria-expanded="false">
        <div class="fd-tree__row">
            <div class="fd-tree__col fd-tree__col--control">
                <button class="fd-tree__control" aria-label="Expand" aria-controls="lkEDI899"
                aria-pressed="false" onclick="onControlClick('lkEDI899');"></button>
                First Level
            </div>
            <div class="fd-tree__col">
                Secondary Value
            </div>
            <div class="fd-tree__col">
                Secondary Value
            </div>
            <div class="fd-tree__col">
                    Default
            </div>
            <div class="fd-tree__col fd-tree__col--actions">
                <div class="fd-popover fd-popover--right">
                    <div class="fd-popover__control">
                        <button class="fd-button fd-button--transparent sap-icon--overflow" aria-controls="asdhjb3"
                        aria-haspopup="true" aria-expanded="false" aria-label="More" onclick="onControlClick('asdhjb3');"></button>
                    </div>
                    <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="asdhjb3">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Edit</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Lock</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Duplicate</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Delete</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <ul class="fd-tree__group fd-tree__group--sublevel-1 is-hidden" role="group" aria-hidden="true">
            <li class="fd-tree__item" role="treeitem">
                <div class="fd-tree__row">
                    <div class="fd-tree__col fd-tree__col--control">
                        Second Level
                    </div>
                    <div class="fd-tree__col">
                        Secondary Value
                    </div>
                    <div class="fd-tree__col">
                        Secondary Value
                    </div>
                    <div class="fd-tree__col">
                            Inactive
                    </div>
                    <div class="fd-tree__col fd-tree__col--actions">
                        <div class="fd-popover fd-popover--right">
                            <div class="fd-popover__control">
                                <button class="fd-button fd-button--transparent sap-icon--overflow" aria-controls="hkjhkjh3"
                                aria-haspopup="true" aria-expanded="false" aria-label="More" onclick="onControlClick('hkjhkjh3');"></button>
                            </div>
                            <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="hkjhkjh3">
                                <nav class="fd-menu">
                                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                                        <li class="fd-menu__item">
                                            <a href="#" class="fd-menu__link">
                                                <span class="fd-menu__title">Edit</span>
                                            </a>
                                        </li>
                                        <li class="fd-menu__item">
                                            <a href="#" class="fd-menu__link">
                                                <span class="fd-menu__title">Lock</span>
                                            </a>
                                        </li>
                                        <li class="fd-menu__item">
                                            <a href="#" class="fd-menu__link">
                                                <span class="fd-menu__title">Duplicate</span>
                                            </a>
                                        </li>
                                        <li class="fd-menu__item">
                                            <a href="#" class="fd-menu__link">
                                                <span class="fd-menu__title">Delete</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li class="fd-tree__item" role="treeitem">
        <div class="fd-tree__row">
            <div class="fd-tree__col fd-tree__col--control">
                First Level
            </div>
            <div class="fd-tree__col">
                Secondary Value
            </div>
            <div class="fd-tree__col">
                Secondary Value
            </div>
            <div class="fd-tree__col">
                    Inactive
            </div>
            <div class="fd-tree__col fd-tree__col--actions">
                <div class="fd-popover fd-popover--right">
                    <div class="fd-popover__control">
                        <button class="fd-button fd-button--transparent sap-icon--overflow" aria-controls="ggiuhwer"
                        aria-haspopup="true" aria-expanded="false" aria-label="More" onclick="onControlClick('ggiuhwer');"></button>
                    </div>
                    <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="ggiuhwer">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Edit</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Lock</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Duplicate</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Delete</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </li>
</ul>
`;

export const expandedTree = () => `
<div class="fd-tree fd-tree--header">
    <div class="fd-tree__row fd-tree__row--header">
        <div class="fd-tree__col fd-tree__col--control">
            <button class="fd-tree__control" aria-label="Expand all" aria-controls="tWsod582" aria-pressed="false"></button>
            Column Header
        </div>
        <div class="fd-tree__col">
            Column Header
        </div>
        <div class="fd-tree__col">
            Column Header
        </div>
        <div class="fd-tree__col">
            Status
        </div>
        <div class="fd-tree__col fd-tree__col--actions">
        </div>
    </div>
</div>
<ul class="fd-tree" id="tWsod582" role="tree">
    <li class="fd-tree__item" role="treeitem" id="inYUX852" aria-expanded="false">
        <div class="fd-tree__row">
            <div class="fd-tree__col fd-tree__col--control">
                <button class="fd-tree__control" aria-label="Expand" aria-controls="inYUX852"
                aria-pressed="false"></button>
                First Level
            </div>
            <div class="fd-tree__col">
                Secondary Value
            </div>
            <div class="fd-tree__col">
                Secondary Value
            </div>
            <div class="fd-tree__col">
                    Inactive
            </div>
            <div class="fd-tree__col fd-tree__col--actions">
               <div class="fd-popover fd-popover--right">
                    <div class="fd-popover__control">
                        <button class="fd-button fd-button--transparent sap-icon--overflow" aria-controls="j2lk3j" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
                    </div>
                    <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="j2lk3j">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Edit</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Lock</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Duplicate</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Delete</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <ul class="fd-tree__group fd-tree__group--sublevel-1" role="group" aria-hidden="false">
            <li class="fd-tree__item" role="treeitem" id="Bxd8s850" aria-expanded="false">
                <div class="fd-tree__row">
                    <div class="fd-tree__col fd-tree__col--control">
                        <button class="fd-tree__control" aria-label="Expand" aria-controls="Bxd8s850"
                        aria-pressed="false"></button>
                        Second Level
                    </div>
                    <div class="fd-tree__col">
                        Secondary Value
                    </div>
                    <div class="fd-tree__col">
                        Secondary Value
                    </div>
                    <div class="fd-tree__col">
                            Inactive
                    </div>
                    <div class="fd-tree__col fd-tree__col--actions">
                        <div class="fd-popover fd-popover--right">
                            <div class="fd-popover__control">
                                <button class="fd-button fd-button--transparent sap-icon--overflow" aria-controls="lklkj3" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
                            </div>
                            <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="lklkj3">
                                <nav class="fd-menu">
                                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                                        <li class="fd-menu__item">
                                            <a href="#" class="fd-menu__link">
                                                <span class="fd-menu__title">Edit</span>
                                            </a>
                                        </li>
                                        <li class="fd-menu__item">
                                            <a href="#" class="fd-menu__link">
                                                <span class="fd-menu__title">Lock</span>
                                            </a>
                                        </li>
                                        <li class="fd-menu__item">
                                            <a href="#" class="fd-menu__link">
                                                <span class="fd-menu__title">Duplicate</span>
                                            </a>
                                        </li>
                                        <li class="fd-menu__item">
                                            <a href="#" class="fd-menu__link">
                                                <span class="fd-menu__title">Delete</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="fd-tree__group fd-tree__group--sublevel-2" role="group" aria-hidden="false">
                    <li class="fd-tree__item" role="treeitem" id="qz9hB117" aria-expanded="false">
                        <div class="fd-tree__row">
                            <div class="fd-tree__col fd-tree__col--control">
                                <button class="fd-tree__control" aria-label="Expand" aria-controls="qz9hB117"
                                aria-pressed="false"></button>
                                Third Level
                            </div>
                            <div class="fd-tree__col">
                                Secondary Value
                            </div>
                            <div class="fd-tree__col">
                                Secondary Value
                            </div>
                            <div class="fd-tree__col">
                                    Inactive
                            </div>
                            <div class="fd-tree__col fd-tree__col--actions">
                                <div class="fd-popover fd-popover--right">
                                    <div class="fd-popover__control">
                                        <button class="fd-button fd-button--transparent sap-icon--overflow" aria-controls="asofjh3" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
                                    </div>
                                    <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="asofjh3">
                                        <nav class="fd-menu">
                                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                                <li class="fd-menu__item">
                                                    <a href="#" class="fd-menu__link">
                                                        <span class="fd-menu__title">Edit</span>
                                                    </a>
                                                </li>
                                                <li class="fd-menu__item">
                                                    <a href="#" class="fd-menu__link">
                                                        <span class="fd-menu__title">Lock</span>
                                                    </a>
                                                </li>
                                                <li class="fd-menu__item">
                                                    <a href="#" class="fd-menu__link">
                                                        <span class="fd-menu__title">Duplicate</span>
                                                    </a>
                                                </li>
                                                <li class="fd-menu__item">
                                                    <a href="#" class="fd-menu__link">
                                                        <span class="fd-menu__title">Delete</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul class="fd-tree__group fd-tree__group--sublevel-3"
                        role="group" aria-hidden="false">
                            <li class="fd-tree__item" role="treeitem">
                                <div class="fd-tree__row">
                                    <div class="fd-tree__col fd-tree__col--control">
                                        Fourth Level
                                    </div>
                                    <div class="fd-tree__col">
                                        Secondary Value
                                    </div>
                                    <div class="fd-tree__col">
                                        Secondary Value
                                    </div>
                                    <div class="fd-tree__col">
                                            Inactive
                                    </div>
                                    <div class="fd-tree__col fd-tree__col--actions">
                                       <div class="fd-popover fd-popover--right">
                                            <div class="fd-popover__control">
                                                <button class="fd-button fd-button--transparent sap-icon--overflow" aria-controls="iouh3" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
                                            </div>
                                            <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="iouh3">
                                                <nav class="fd-menu">
                                                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                                                        <li class="fd-menu__item">
                                                            <a href="#" class="fd-menu__link">
                                                                <span class="fd-menu__title">Edit</span>
                                                            </a>
                                                        </li>
                                                        <li class="fd-menu__item">
                                                            <a href="#" class="fd-menu__link">
                                                                <span class="fd-menu__title">Lock</span>
                                                            </a>
                                                        </li>
                                                        <li class="fd-menu__item">
                                                            <a href="#" class="fd-menu__link">
                                                                <span class="fd-menu__title">Duplicate</span>
                                                            </a>
                                                        </li>
                                                        <li class="fd-menu__item">
                                                            <a href="#" class="fd-menu__link">
                                                                <span class="fd-menu__title">Delete</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="fd-tree__item" role="treeitem">
                <div class="fd-tree__row">
                    <div class="fd-tree__col fd-tree__col--control">
                        Second Level
                    </div>
                    <div class="fd-tree__col">
                        Secondary Value
                    </div>
                    <div class="fd-tree__col">
                        Secondary Value
                    </div>
                    <div class="fd-tree__col">
                            Default
                    </div>
                    <div class="fd-tree__col fd-tree__col--actions">
                        <div class="fd-popover fd-popover--right">
                            <div class="fd-popover__control">
                                <button class="fd-button fd-button--transparent sap-icon--overflow" aria-controls="jk3333" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
                            </div>
                            <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="jk3333">
                                <nav class="fd-menu">
                                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                                        <li class="fd-menu__item">
                                            <a href="#" class="fd-menu__link">
                                                <span class="fd-menu__title">Edit</span>
                                            </a>
                                        </li>
                                        <li class="fd-menu__item">
                                            <a href="#" class="fd-menu__link">
                                                <span class="fd-menu__title">Lock</span>
                                            </a>
                                        </li>
                                        <li class="fd-menu__item">
                                            <a href="#" class="fd-menu__link">
                                                <span class="fd-menu__title">Duplicate</span>
                                            </a>
                                        </li>
                                        <li class="fd-menu__item">
                                            <a href="#" class="fd-menu__link">
                                                <span class="fd-menu__title">Delete</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li class="fd-tree__item" role="treeitem" id="lkEDI899" aria-expanded="false">
        <div class="fd-tree__row">
            <div class="fd-tree__col fd-tree__col--control">
                <button class="fd-tree__control" aria-label="Expand" aria-controls="lkEDI899"
                aria-pressed="false"></button>
                First Level
            </div>
            <div class="fd-tree__col">
                Secondary Value
            </div>
            <div class="fd-tree__col">
                Secondary Value
            </div>
            <div class="fd-tree__col">
                    Default
            </div>
            <div class="fd-tree__col fd-tree__col--actions">
                <div class="fd-popover fd-popover--right">
                    <div class="fd-popover__control">
                        <button class="fd-button fd-button--transparent sap-icon--overflow" aria-controls="asdhjb3" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
                    </div>
                    <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="asdhjb3">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Edit</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Lock</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Duplicate</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Delete</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <ul class="fd-tree__group fd-tree__group--sublevel-1" role="group" aria-hidden="false">
            <li class="fd-tree__item" role="treeitem">
                <div class="fd-tree__row">
                    <div class="fd-tree__col fd-tree__col--control">
                        Second Level
                    </div>
                    <div class="fd-tree__col">
                        Secondary Value
                    </div>
                    <div class="fd-tree__col">
                        Secondary Value
                    </div>
                    <div class="fd-tree__col">
                            Inactive
                    </div>
                    <div class="fd-tree__col fd-tree__col--actions">
                        <div class="fd-popover fd-popover--right">
                            <div class="fd-popover__control">
                                <button class="fd-button fd-button--transparent sap-icon--overflow" aria-controls="hkjhkjh3" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
                            </div>
                            <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="hkjhkjh3">
                                <nav class="fd-menu">
                                    <ul class="fd-menu__list fd-menu__list--no-shadow">
                                        <li class="fd-menu__item">
                                            <a href="#" class="fd-menu__link">
                                                <span class="fd-menu__title">Edit</span>
                                            </a>
                                        </li>
                                        <li class="fd-menu__item">
                                            <a href="#" class="fd-menu__link">
                                                <span class="fd-menu__title">Lock</span>
                                            </a>
                                        </li>
                                        <li class="fd-menu__item">
                                            <a href="#" class="fd-menu__link">
                                                <span class="fd-menu__title">Duplicate</span>
                                            </a>
                                        </li>
                                        <li class="fd-menu__item">
                                            <a href="#" class="fd-menu__link">
                                                <span class="fd-menu__title">Delete</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li class="fd-tree__item" role="treeitem">
        <div class="fd-tree__row">
            <div class="fd-tree__col fd-tree__col--control">
                First Level
            </div>
            <div class="fd-tree__col">
                Secondary Value
            </div>
            <div class="fd-tree__col">
                Secondary Value
            </div>
            <div class="fd-tree__col">
                    Inactive
            </div>
            <div class="fd-tree__col fd-tree__col--actions">
                <div class="fd-popover fd-popover--right">
                    <div class="fd-popover__control">
                        <button class="fd-button fd-button--transparent sap-icon--overflow" aria-controls="ggiuhwer" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
                    </div>
                    <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="ggiuhwer">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Edit</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Lock</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Duplicate</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Delete</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </li>
</ul>
`;

expandedTree.parameters = {
    docs: {
        disable: true
    }
};
