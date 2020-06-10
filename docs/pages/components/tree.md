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

## Tree with Expanded Level 1

{% capture tree %}
<ul class="fd-tree level-1 expanded-level-1">
    <li class="fd-tree__item">
        <div class="fd-tree__content">
            <span class="fd-tree__expander is-expanded" aria-controls="TREE1L2" aria-haspopup="true" aria-expanded="true" aria-label="Expand level 2"></span>
            <span class="fd-tree__text">Level 1</span>
        </div>
        <ul class="fd-tree level-2" id="TREE1L2" aria-hidden="false">
            <li class="fd-tree__item">
                <div class="fd-tree__content">
                    <span class="fd-tree__expander"></span>
                    <span class="fd-tree__text">Level 2</span>
                </div>
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
            <span class="fd-tree__text">Level 1</span>
        </div>
    </li>
    <li class="fd-tree__item">
        <div class="fd-tree__content">
            <span class="fd-tree__text">Level 1</span>
        </div>
    </li>
</ul>
{% endcapture %}
{% include display-component.html component=tree %}

<br>

## Tree with Expanded Level 2

{% capture tree %}
<ul class="fd-tree level-1 expanded-level-2">
    <li class="fd-tree__item">
        <div class="fd-tree__content">
            <span class="fd-tree__expander is-expanded" aria-controls="TREE2L2" aria-haspopup="true" aria-expanded="true" aria-label="Expand level 2"></span>
            <span class="fd-tree__text">Level 1</span>
        </div>
        <ul class="fd-tree level-2" id="TREE2L2" aria-hidden="false">
            <li class="fd-tree__item">
                <div class="fd-tree__content">
                    <span class="fd-tree__expander is-expanded" aria-controls="TREE2L3" aria-haspopup="true" aria-expanded="true" aria-label="Expand level 3"></span>
                    <span class="fd-tree__text">Level 2</span>
                </div>
                <ul class="fd-tree level-3" id="TREE2L3" aria-hidden="false">
                    <li class="fd-tree__item">
                        <div class="fd-tree__content">
                            <span class="fd-tree__expander"></span>
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
        </ul>
    </li>
    <li class="fd-tree__item">
        <div class="fd-tree__content">
            <span class="fd-tree__text">Level 1</span>
        </div>
    </li>
    <li class="fd-tree__item">
        <div class="fd-tree__content">
            <span class="fd-tree__text">Level 1</span>
        </div>
    </li>
</ul>
{% endcapture %}
{% include display-component.html component=tree %}

<br>

## Tree with Expanded Level 3

{% capture tree %}
<ul class="fd-tree level-1 expanded-level-3">
    <li class="fd-tree__item">
        <div class="fd-tree__content">
            <span class="fd-tree__expander is-expanded" aria-controls="TREE3L2" aria-haspopup="true" aria-expanded="true" aria-label="Expand level 2"></span>
            <span class="fd-tree__text">Level 1</span>
        </div>
        <ul class="fd-tree level-2" id="TREE3L2" aria-hidden="false">
            <li class="fd-tree__item">
                <div class="fd-tree__content">
                    <span class="fd-tree__expander is-expanded" aria-controls="TREE3L3" aria-haspopup="true" aria-expanded="true" aria-label="Expand level 3"></span>
                    <span class="fd-tree__text">Level 2</span>
                </div>
                <ul class="fd-tree level-3" id="TREE3L3" aria-hidden="false">
                    <li class="fd-tree__item">
                        <div class="fd-tree__content">
                            <span class="fd-tree__expander is-expanded" aria-controls="TREE3L4" aria-haspopup="true" aria-expanded="true" aria-label="Expand level 4"></span>
                            <span class="fd-tree__text">Level 3</span>
                        </div>
                        <ul class="fd-tree level-4" id="TREE3L4" aria-hidden="false">
                            <li class="fd-tree__item">
                                <div class="fd-tree__content">
                                    <span class="fd-tree__expander"></span>
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
                </ul>
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
            <span class="fd-tree__text">Level 1</span>
        </div>
    </li>
    <li class="fd-tree__item">
        <div class="fd-tree__content">
            <span class="fd-tree__text">Level 1</span>
        </div>
    </li>
</ul>
{% endcapture %}
{% include display-component.html component=tree %}


<br>

## Tree with Expanded Level 6

{% capture tree %}
<ul class="fd-tree level-1 expanded-level-6">
    <li class="fd-tree__item">
        <div class="fd-tree__content">
            <span class="fd-tree__expander is-expanded" aria-controls="TREE6L2" aria-haspopup="true" aria-expanded="true" aria-label="Expand level 2"></span>
            <span class="fd-tree__text">Level 1</span>
        </div>
        <ul class="fd-tree level-2" id="TREE6L2" aria-hidden="false">
            <li class="fd-tree__item">
                <div class="fd-tree__content">
                    <span class="fd-tree__expander is-expanded" aria-controls="TREE6L3" aria-haspopup="true" aria-expanded="true" aria-label="Expand level 3"></span>
                    <span class="fd-tree__text">Level 2</span>
                </div>
                <ul class="fd-tree level-3" id="TREE6L3" aria-hidden="false">
                    <li class="fd-tree__item">
                        <div class="fd-tree__content">
                            <span class="fd-tree__expander is-expanded" aria-controls="TREE6L4" aria-haspopup="true" aria-expanded="true" aria-label="Expand level 4"></span>
                            <span class="fd-tree__text">Level 3</span>
                        </div>
                        <ul class="fd-tree level-4" id="TREE6L4" aria-hidden="false">
                            <li class="fd-tree__item">
                                <div class="fd-tree__content">
                                    <span class="fd-tree__expander is-expanded" aria-controls="TREE6L5" aria-haspopup="true" aria-expanded="true" aria-label="Expand level 5"></span>
                                    <span class="fd-tree__text">Level 4</span>
                                </div>
                                <ul class="fd-tree level-5" id="TREE6L5" aria-hidden="false">
                                    <li class="fd-tree__item">
                                        <div class="fd-tree__content">
                                            <span class="fd-tree__expander is-expanded" aria-controls="TREE6L6" aria-haspopup="true" aria-expanded="true" aria-label="Expand level 6"></span>
                                            <span class="fd-tree__text">Level 5</span>
                                        </div>
                                        <ul class="fd-tree level-6" id="TREE6L6" aria-hidden="false">
                                            <li class="fd-tree__item">
                                                <div class="fd-tree__content">
                                                    <span class="fd-tree__expander is-expanded" aria-controls="TREE6L7" aria-haspopup="true" aria-expanded="true" aria-label="Expand level 7"></span>
                                                    <span class="fd-tree__text">Level 6</span>
                                                </div>
                                                <ul class="fd-tree level-7" id="TREE6L7" aria-hidden="false">
                                                    <li class="fd-tree__item">
                                                        <div class="fd-tree__content">
                                                            <span class="fd-tree__expander"></span>
                                                            <span class="fd-tree__text">Level 7</span>
                                                        </div>
                                                    </li>
                                                    <li class="fd-tree__item">
                                                        <div class="fd-tree__content">
                                                            <span class="fd-tree__text">Level 7</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="fd-tree__item">
                                                <div class="fd-tree__content">
                                                    <span class="fd-tree__text">Level 6</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="fd-tree__item">
                                        <div class="fd-tree__content">
                                            <span class="fd-tree__text">Level 5</span>
                                        </div>
                                    </li>
                                </ul>
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
                </ul>
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
            <span class="fd-tree__text">Level 1</span>
        </div>
    </li>
    <li class="fd-tree__item">
        <div class="fd-tree__content">
            <span class="fd-tree__text">Level 1</span>
        </div>
    </li>
</ul>
{% endcapture %}
{% include display-component.html component=tree %}


<br>

## Tree with Expanded Level 25

{% capture tree %}
<ul class="fd-tree level-25 expanded-level-25">
    <li class="fd-tree__item">
        <div class="fd-tree__content">
            <span class="fd-tree__expander is-expanded" aria-controls="TREE25L26" aria-haspopup="true" aria-expanded="true" aria-label="Expand level 26"></span>
            <span class="fd-tree__text">Level 25</span>
        </div>
        <ul class="fd-tree level-26" id="TREE25L26" aria-hidden="false">
            <li class="fd-tree__item">
                <div class="fd-tree__content">
                    <span class="fd-tree__expander"></span>
                    <span class="fd-tree__text">Level 26</span>
                </div>
            </li>
            <li class="fd-tree__item">
                <div class="fd-tree__content">
                    <span class="fd-tree__text">Level 26</span>
                </div>
            </li>
        </ul>
    </li>
    <li class="fd-tree__item">
        <div class="fd-tree__content">
            <span class="fd-tree__text">Level 25</span>
        </div>
    </li>
    <li class="fd-tree__item">
        <div class="fd-tree__content">
            <span class="fd-tree__text">Level 25</span>
        </div>
    </li>
</ul>
{% endcapture %}
{% include display-component.html component=tree %}

<br>

## Tree with Expanded Level 26

{% capture tree %}
<ul class="fd-tree level-25 expanded-level-26">
    <li class="fd-tree__item">
        <div class="fd-tree__content">
            <span class="fd-tree__expander is-expanded" aria-controls="TREE26L26" aria-haspopup="true" aria-expanded="true" aria-label="Expand level 26"></span>
            <span class="fd-tree__text">Level 25</span>
        </div>
        <ul class="fd-tree level-26" id="TREE26L26" aria-hidden="false">
            <li class="fd-tree__item">
                <div class="fd-tree__content">
                    <span class="fd-tree__expander is-expanded" aria-controls="TREE26L27" aria-haspopup="true" aria-expanded="true" aria-label="Expand level 27"></span>
                    <span class="fd-tree__text">Level 26</span>
                </div>
                <ul class="fd-tree level-27" id="TREE26L27" aria-hidden="false">
                    <li class="fd-tree__item">
                        <div class="fd-tree__content">
                            <span class="fd-tree__expander"></span>
                            <span class="fd-tree__text">Level 27</span>
                        </div>
                    </li>
                    <li class="fd-tree__item">
                        <div class="fd-tree__content">
                            <span class="fd-tree__text">Level 27</span>
                        </div>
                    </li>
                </ul>
            </li>
            <li class="fd-tree__item">
                <div class="fd-tree__content">
                    <span class="fd-tree__text">Level 26</span>
                </div>
            </li>
        </ul>
    </li>
    <li class="fd-tree__item">
        <div class="fd-tree__content">
            <span class="fd-tree__text">Level 25</span>
        </div>
    </li>
    <li class="fd-tree__item">
        <div class="fd-tree__content">
            <span class="fd-tree__text">Level 25</span>
        </div>
    </li>
</ul>
{% endcapture %}
{% include display-component.html component=tree %}


<br>

## Tree with Expanded Level 27

{% capture tree %}
<ul class="fd-tree level-25 expanded-level-27">
    <li class="fd-tree__item">
        <div class="fd-tree__content">
            <span class="fd-tree__expander is-expanded" aria-controls="TREE27L26" aria-haspopup="true" aria-expanded="true" aria-label="Expand level 26"></span>
            <span class="fd-tree__text">Level 25</span>
        </div>
        <ul class="fd-tree level-26" id="TREE27L26" aria-hidden="false">
            <li class="fd-tree__item">
                <div class="fd-tree__content">
                    <span class="fd-tree__expander is-expanded" aria-controls="TREE27L27" aria-haspopup="true" aria-expanded="true" aria-label="Expand level 27"></span>
                    <span class="fd-tree__text">Level 26</span>
                </div>
                <ul class="fd-tree level-27" id="TREE27L27" aria-hidden="false">
                    <li class="fd-tree__item">
                        <div class="fd-tree__content">
                            <span class="fd-tree__expander is-expanded" aria-controls="TREE27L28" aria-haspopup="true" aria-expanded="true" aria-label="Expand level 28"></span>
                            <span class="fd-tree__text">Level 27</span>
                        </div>
                        <ul class="fd-tree level-28" id="TREE27L28" aria-hidden="false">
                            <li class="fd-tree__item">
                                <div class="fd-tree__content">
                                    <span class="fd-tree__expander"></span>
                                    <span class="fd-tree__text">Level 28</span>
                                </div>
                            </li>
                            <li class="fd-tree__item">
                                <div class="fd-tree__content">
                                    <span class="fd-tree__text">Level 28</span>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="fd-tree__item">
                        <div class="fd-tree__content">
                            <span class="fd-tree__text">Level 27</span>
                        </div>
                    </li>
                </ul>
            </li>
            <li class="fd-tree__item">
                <div class="fd-tree__content">
                    <span class="fd-tree__text">Level 26</span>
                </div>
            </li>
        </ul>
    </li>
    <li class="fd-tree__item">
        <div class="fd-tree__content">
            <span class="fd-tree__text">Level 25</span>
        </div>
    </li>
    <li class="fd-tree__item">
        <div class="fd-tree__content">
            <span class="fd-tree__text">Level 25</span>
        </div>
    </li>
</ul>
{% endcapture %}
{% include display-component.html component=tree %}

<br>

## Tree with Expanded Level 30

{% capture tree %}
<ul class="fd-tree level-25 expanded-level-30">
    <li class="fd-tree__item">
        <div class="fd-tree__content">
            <span class="fd-tree__expander is-expanded" aria-controls="TREE30L26" aria-haspopup="true" aria-expanded="true" aria-label="Expand level 26"></span>
            <span class="fd-tree__text">Level 25</span>
        </div>
        <ul class="fd-tree level-26" id="TREE30L26" aria-hidden="false">
            <li class="fd-tree__item">
                <div class="fd-tree__content">
                    <span class="fd-tree__expander is-expanded" aria-controls="TREE30L27" aria-haspopup="true" aria-expanded="true" aria-label="Expand level 27"></span>
                    <span class="fd-tree__text">Level 26</span>
                </div>
                <ul class="fd-tree level-27" id="TREE30L27" aria-hidden="false">
                    <li class="fd-tree__item">
                        <div class="fd-tree__content">
                            <span class="fd-tree__expander is-expanded" aria-controls="TREE30L28" aria-haspopup="true" aria-expanded="true" aria-label="Expand level 28"></span>
                            <span class="fd-tree__text">Level 27</span>
                        </div>
                        <ul class="fd-tree level-28" id="TREE30L28" aria-hidden="false">
                            <li class="fd-tree__item">
                                <div class="fd-tree__content">
                                    <span class="fd-tree__expander is-expanded" aria-controls="TREE30L29" aria-haspopup="true" aria-expanded="true" aria-label="Expand level 29"></span>
                                    <span class="fd-tree__text">Level 28</span>
                                </div>
                                <ul class="fd-tree level-29" id="TREE30L29" aria-hidden="false">
                                    <li class="fd-tree__item">
                                        <div class="fd-tree__content">
                                            <span class="fd-tree__expander is-expanded" aria-controls="TREE30L30" aria-haspopup="true" aria-expanded="true" aria-label="Expand level 30"></span>
                                            <span class="fd-tree__text">Level 29</span>
                                        </div>
                                        <ul class="fd-tree level-30" id="TREE30L30" aria-hidden="false">
                                            <li class="fd-tree__item">
                                                <div class="fd-tree__content">
                                                    <span class="fd-tree__expander is-expanded" aria-controls="TREE30L31" aria-haspopup="true" aria-expanded="true" aria-label="Expand level 31"></span>
                                                    <span class="fd-tree__text">Level 30</span>
                                                </div>
                                                <ul class="fd-tree level-31" id="TREE30L31" aria-hidden="false">
                                                    <li class="fd-tree__item">
                                                        <div class="fd-tree__content">
                                                            <span class="fd-tree__expander"></span>
                                                            <span class="fd-tree__text">Level 31</span>
                                                        </div>
                                                    </li>
                                                    <li class="fd-tree__item">
                                                        <div class="fd-tree__content">
                                                            <span class="fd-tree__text">Level 31</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="fd-tree__item">
                                                <div class="fd-tree__content">
                                                    <span class="fd-tree__text">Level 30</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="fd-tree__item">
                                        <div class="fd-tree__content">
                                            <span class="fd-tree__text">Level 29</span>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li class="fd-tree__item">
                                <div class="fd-tree__content">
                                    <span class="fd-tree__text">Level 28</span>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="fd-tree__item">
                        <div class="fd-tree__content">
                            <span class="fd-tree__text">Level 27</span>
                        </div>
                    </li>
                </ul>
            </li>
            <li class="fd-tree__item">
                <div class="fd-tree__content">
                    <span class="fd-tree__text">Level 26</span>
                </div>
            </li>
        </ul>
    </li>
    <li class="fd-tree__item">
        <div class="fd-tree__content">
            <span class="fd-tree__text">Level 25</span>
        </div>
    </li>
    <li class="fd-tree__item">
        <div class="fd-tree__content">
            <span class="fd-tree__text">Level 25</span>
        </div>
    </li>
</ul>
{% endcapture %}
{% include display-component.html component=tree %}

<br>

## Tree with Expanded Level 1 and Independent Selection

{% capture tree %}
<ul class="fd-tree fd-tree--independent-selection level-1 expanded-level-1">
    <li class="fd-tree__item">
        <div class="fd-tree__content">
            <div class="fd-form-item fd-tree__form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez2">
                <label tabindex="-1" class="fd-checkbox__label fd-tree__checkbox-label" for="Ai4ez2"></label>
            </div>
            <span class="fd-tree__expander is-expanded" aria-controls="TREE1ISL2" aria-haspopup="true" aria-expanded="true" aria-label="Expand level 2"></span>
            <span class="fd-tree__text">Level 1</span>
        </div>
        <ul class="fd-tree level-2" id="TREE1ISL2" aria-hidden="false">
            <li class="fd-tree__item">
                <div class="fd-tree__content">
                    <div class="fd-form-item fd-tree__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez3">
                        <label tabindex="-1" class="fd-checkbox__label fd-tree__checkbox-label" for="Ai4ez3"></label>
                    </div>
                    <span class="fd-tree__expander"></span>
                    <span class="fd-tree__text">Level 2</span>
                </div>
            </li>
            <li class="fd-tree__item">
                <div class="fd-tree__content is-selected">
                    <div class="fd-form-item fd-tree__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez4" checked>
                        <label tabindex="-1" class="fd-checkbox__label fd-tree__checkbox-label" for="Ai4ez4"></label>
                    </div>
                    <span class="fd-tree__text">Level 2</span>
                </div>
            </li>
            <li class="fd-tree__item">
                <div class="fd-tree__content">
                    <div class="fd-form-item fd-tree__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez5">
                        <label tabindex="-1" class="fd-checkbox__label fd-tree__checkbox-label" for="Ai4ez5"></label>
                    </div>
                    <span class="fd-tree__text">Level 2</span>
                </div>
            </li>
        </ul>
    </li>
    <li class="fd-tree__item">
        <div class="fd-tree__content is-selected">
            <div class="fd-form-item fd-tree__form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez6" checked>
                <label tabindex="-1" class="fd-checkbox__label fd-tree__checkbox-label" for="Ai4ez6"></label>
            </div>
            <span class="fd-tree__text">Level 1</span>
        </div>
    </li>
    <li class="fd-tree__item">
        <div class="fd-tree__content">
            <div class="fd-form-item fd-tree__form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez7">
                <label tabindex="-1" class="fd-checkbox__label fd-tree__checkbox-label" for="Ai4ez7"></label>
            </div>
            <span class="fd-tree__text">Level 1</span>
        </div>
    </li>
</ul>
{% endcapture %}
{% include display-component.html component=tree %}

<br>

## Tree with Expanded Level 1 and Dependent Selection

{% capture tree %}
<ul class="fd-tree fd-tree--dependent-selection level-1 expanded-level-1">
    <li class="fd-tree__item">
        <div class="fd-tree__content">
            <span class="fd-tree__expander is-expanded" aria-controls="TREE1DSL2" aria-haspopup="true" aria-expanded="true" aria-label="Expand level 2"></span>
            <div class="fd-form-item fd-tree__form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez8">
                <label tabindex="-1" class="fd-checkbox__label fd-tree__checkbox-label" for="Ai4ez8"></label>
            </div>
            <span class="fd-tree__text">Level 1</span>
        </div>
        <ul class="fd-tree level-2" id="TREE1DSL2" aria-hidden="false">
            <li class="fd-tree__item">
                <div class="fd-tree__content">
                    <span class="fd-tree__expander"></span>
                    <div class="fd-form-item fd-tree__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez9">
                        <label tabindex="-1" class="fd-checkbox__label fd-tree__checkbox-label" for="Ai4ez9"></label>
                    </div>
                    <span class="fd-tree__text">Level 2</span>
                </div>
            </li>
            <li class="fd-tree__item">
                <div class="fd-tree__content is-selected">
                    <div class="fd-form-item fd-tree__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez10" checked>
                        <label tabindex="-1" class="fd-checkbox__label fd-tree__checkbox-label" for="Ai4ez10"></label>
                    </div>
                    <span class="fd-tree__text">Level 2</span>
                </div>
            </li>
            <li class="fd-tree__item">
                <div class="fd-tree__content">
                    <div class="fd-form-item fd-tree__form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez11">
                        <label tabindex="-1" class="fd-checkbox__label fd-tree__checkbox-label" for="Ai4ez11"></label>
                    </div>
                    <span class="fd-tree__text">Level 2</span>
                </div>
            </li>
        </ul>
    </li>
    <li class="fd-tree__item">
        <div class="fd-tree__content is-selected">
            <div class="fd-form-item fd-tree__form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez12" checked>
                <label tabindex="-1" class="fd-checkbox__label fd-tree__checkbox-label" for="Ai4ez12"></label>
            </div>
            <span class="fd-tree__text">Level 1</span>
        </div>
    </li>
    <li class="fd-tree__item">
        <div class="fd-tree__content">
            <div class="fd-form-item fd-tree__form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez13">
                <label tabindex="-1" class="fd-checkbox__label fd-tree__checkbox-label" for="Ai4ez13"></label>
            </div>
            <span class="fd-tree__text">Level 1</span>
        </div>
    </li>
</ul>
{% endcapture %}
{% include display-component.html component=tree %}