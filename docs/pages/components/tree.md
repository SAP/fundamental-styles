---
title: Tree
id: tree
keywords: tree
sidebar: left-navigation-sidebar
toc: false
permalink: components/tree.html
folder: components
tags: [development]
---
> **UNDER REVIEW**. This component is under review. A new version will be implemented soon.
{: .docs-intro}
A tree is used to display data in a visual hierarchy.

Items that contain additional items are called nodes, while items that do not contain any other items are called leaves. If available, a single topmost node is called a root node. Apart from the hierarchical structure of its nodes and leaves, a tree is similar to a list.

<br>

## Tree with multiple levels and actions

{% capture tree %}
<ul class="fd-tree">
    <li class="fd-tree__item">
        <div class="fd-tree__content">
            <span class="fd-tree__expander" aria-controls="TREE1L2" aria-haspopup="true" aria-expanded="false" aria-label="Expand level 2"></span>
            <span class="fd-tree__text">Level 1</span>
        </div>
        <ul class="fd-tree level-2" id="TREE1L2" aria-hidden="true">
            <li class="fd-tree__item">
                <div class="fd-tree__content">
                    <span class="fd-tree__expander" aria-controls="TREE1L3" aria-haspopup="true" aria-expanded="false" aria-label="Expand level 3"></span>
                    <span class="fd-tree__text">Level 2</span>
                </div>
                <ul class="fd-tree level-3" id="TREE1L3" aria-hidden="true">
                    <li class="fd-tree__item">
                        <div class="fd-tree__content">
                            <span class="fd-tree__expander" aria-controls="TREE1L4" aria-haspopup="true" aria-expanded="false" aria-label="Expand level 4"></span>
                            <span class="fd-tree__text">Level 3</span>
                        </div>
                        <ul class="fd-tree level-4" id="TREE1L4" aria-hidden="true">
                            <li class="fd-tree__item">
                                <div class="fd-tree__content">
                                    <span class="fd-tree__text">Level 4</span>
                                </div>
                            </li>
                            <li class="fd-tree__item">
                                <div class="fd-tree__content">
                                    <span class="fd-tree__text">Level 4</span>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="fd-tree__item">
                        <div class="fd-tree__content">
                            <span class="fd-tree__text">Level 3</span>
                        </div>
                    </li>
                    <li class="fd-tree__item">
                        <div class="fd-tree__content">
                            <span class="fd-tree__text">Level 3</span>
                        </div>
                    </li>
                </ul>
            </li>
            <li class="fd-tree__item">
                <div class="fd-tree__content">
                    <span class="fd-tree__text">Level 2</span>
                </div>
            </li>
            <li class="fd-tree__item">
                <div class="fd-tree__content">
                    <span class="fd-tree__text">Level 2</span>
                </div>
            </li>
        </ul>
    </li>
    <li class="fd-tree__item">
        <div class="fd-tree__content">
            <span class="fd-tree__expander"></span>
            <span class="fd-tree__text">Level 1</span>
        </div>
    </li>
    <li class="fd-tree__item">
        <div class="fd-tree__content">
            <span class="fd-tree__expander"></span>
            <span class="fd-tree__text">Level 1</span>
        </div>
    </li>
</ul>
{% endcapture %}
{% include display-component.html component=tree %}
