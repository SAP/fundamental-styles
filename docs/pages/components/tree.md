---
title: Tree
id: tree
keywords: tree
sidebar: left-navigation-sidebar
toc: false
permalink: components/tree.html
folder: components
---

A tree is used to display data in a visual hierarchy.
{: .docs-intro}

Items that contain additional items are called nodes, while items that do not contain any other items are called leaves. If available, a single topmost node is called a root node. Apart from the hierarchical structure of its nodes and leaves, a tree is similar to a list.

<br>

## Tree with multiple levels and actions

{% capture tree %}
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
                <span class="fd-label">
                    Inactive
                </span>
            </div>
            <div class="fd-tree__col fd-tree__col--actions">
               <div class="fd-popover">
                    <div class="fd-popover__control">
                        <button class="fd-button fd-button--light sap-icon--overflow" aria-controls="j2lk3j" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
                    </div>
                    <div class="fd-popover__body" aria-hidden="true" id="j2lk3j">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list">
                                <li><a href="#" class="fd-menu__item">Edit</a></li>
                                <li><a href="#" class="fd-menu__item">Lock</a></li>
                                <li><a href="#" class="fd-menu__item">Duplicate</a></li>
                                <li><a href="#" class="fd-menu__item">Delete</a></li>
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
                        <span class="fd-label">
                            Inactive
                        </span>
                    </div>
                    <div class="fd-tree__col fd-tree__col--actions">
                        <div class="fd-popover">
                            <div class="fd-popover__control">
                                <button class="fd-button fd-button--light sap-icon--overflow" aria-controls="lklkj3" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
                            </div>
                            <div class="fd-popover__body" aria-hidden="true" id="lklkj3">
                                <nav class="fd-menu">
                                    <ul class="fd-menu__list">
                                        <li><a href="#" class="fd-menu__item">Edit</a></li>
                                        <li><a href="#" class="fd-menu__item">Lock</a></li>
                                        <li><a href="#" class="fd-menu__item">Duplicate</a></li>
                                        <li><a href="#" class="fd-menu__item">Delete</a></li>
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
                                <span class="fd-label">
                                    Inactive
                                </span>
                            </div>
                            <div class="fd-tree__col fd-tree__col--actions">
                                <div class="fd-popover">
                                    <div class="fd-popover__control">
                                        <button class="fd-button fd-button--light sap-icon--overflow" aria-controls="asofjh3" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
                                    </div>
                                    <div class="fd-popover__body" aria-hidden="true" id="asofjh3">
                                        <nav class="fd-menu">
                                            <ul class="fd-menu__list">
                                                <li><a href="#" class="fd-menu__item">Edit</a></li>
                                                <li><a href="#" class="fd-menu__item">Lock</a></li>
                                                <li><a href="#" class="fd-menu__item">Duplicate</a></li>
                                                <li><a href="#" class="fd-menu__item">Delete</a></li>
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
                                        <span class="fd-label">
                                            Inactive
                                        </span>
                                    </div>
                                    <div class="fd-tree__col fd-tree__col--actions">
                                       <div class="fd-popover">
                                            <div class="fd-popover__control">
                                                <button class="fd-button fd-button--light sap-icon--overflow" aria-controls="iouh3" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
                                            </div>
                                            <div class="fd-popover__body" aria-hidden="true" id="iouh3">
                                                <nav class="fd-menu">
                                                    <ul class="fd-menu__list">
                                                        <li><a href="#" class="fd-menu__item">Edit</a></li>
                                                        <li><a href="#" class="fd-menu__item">Lock</a></li>
                                                        <li><a href="#" class="fd-menu__item">Duplicate</a></li>
                                                        <li><a href="#" class="fd-menu__item">Delete</a></li>
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
                        <span class="fd-label">
                            Default
                        </span>
                    </div>
                    <div class="fd-tree__col fd-tree__col--actions">
                        <div class="fd-popover">
                            <div class="fd-popover__control">
                                <button class="fd-button fd-button--light sap-icon--overflow" aria-controls="jk3333" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
                            </div>
                            <div class="fd-popover__body" aria-hidden="true" id="jk3333">
                                <nav class="fd-menu">
                                    <ul class="fd-menu__list">
                                        <li><a href="#" class="fd-menu__item">Edit</a></li>
                                        <li><a href="#" class="fd-menu__item">Lock</a></li>
                                        <li><a href="#" class="fd-menu__item">Duplicate</a></li>
                                        <li><a href="#" class="fd-menu__item">Delete</a></li>
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
                <span class="fd-label">
                    Default
                </span>
            </div>
            <div class="fd-tree__col fd-tree__col--actions">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <button class="fd-button fd-button--light sap-icon--overflow" aria-controls="asdhjb3" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
                    </div>
                    <div class="fd-popover__body" aria-hidden="true" id="asdhjb3">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list">
                                <li><a href="#" class="fd-menu__item">Edit</a></li>
                                <li><a href="#" class="fd-menu__item">Lock</a></li>
                                <li><a href="#" class="fd-menu__item">Duplicate</a></li>
                                <li><a href="#" class="fd-menu__item">Delete</a></li>
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
                        <span class="fd-label">
                            Inactive
                        </span>
                    </div>
                    <div class="fd-tree__col fd-tree__col--actions">
                        <div class="fd-popover">
                            <div class="fd-popover__control">
                                <button class="fd-button fd-button--light sap-icon--overflow" aria-controls="hkjhkjh3" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
                            </div>
                            <div class="fd-popover__body" aria-hidden="true" id="hkjhkjh3">
                                <nav class="fd-menu">
                                    <ul class="fd-menu__list">
                                        <li><a href="#" class="fd-menu__item">Edit</a></li>
                                        <li><a href="#" class="fd-menu__item">Lock</a></li>
                                        <li><a href="#" class="fd-menu__item">Duplicate</a></li>
                                        <li><a href="#" class="fd-menu__item">Delete</a></li>
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
                <span class="fd-label">
                    Inactive
                </span>
            </div>
            <div class="fd-tree__col fd-tree__col--actions">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <button class="fd-button fd-button--light sap-icon--overflow" aria-controls="ggiuhwer" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
                    </div>
                    <div class="fd-popover__body" aria-hidden="true" id="ggiuhwer">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list">
                                <li><a href="#" class="fd-menu__item">Edit</a></li>
                                <li><a href="#" class="fd-menu__item">Lock</a></li>
                                <li><a href="#" class="fd-menu__item">Duplicate</a></li>
                                <li><a href="#" class="fd-menu__item">Delete</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </li>
</ul>
{% endcapture %}

{% include display-component.html component=tree %}
