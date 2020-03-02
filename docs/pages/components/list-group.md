---
title: List Group
id: list-group
keywords: list group, lists group, list, lists, groups
sidebar: left-navigation-sidebar
toc: false
permalink: components/list-group.html
folder: components
---

> **DEPRECATED**. Use the [List](list.html) component instead.
{: .docs-deprecated}

Lists and tables are similar as both usually contain a vertical list of data, but lists generally contain basic data and tables tend to hold more complex data.
{: .docs-intro}
If the list is a complex hierarchy, it is best to use a tree.

<br>

## Simple List

A link can be used to allow the user to access more details about the item.

{% capture list-group-default %}
<ul class="fd-list-group">
    <li class="fd-list-group__item">
        List item 1
    </li>
    <li class="fd-list-group__item">
        List item 2
    </li>
    <li class="fd-list-group__item">
        List item 3 - Lorem ipsum dolor sit amet, consectetur sed do
    </li>
    <li class="fd-list-group__item">
        List item 4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    </li>
</ul>
{% endcapture %}

{% include display-component.html component=list-group-default %}

<br>

## Lists with Action

The List item can contain quick actions.

{% capture list-group-action %}
<ul class="fd-list-group">
    <li class="fd-list-group__item">
        List item 1
        <span class="fd-list-group__action">
            <button class="fd-button  fd-button--transparent sap-icon--edit" aria-label="Edit"></button>
        </span>
    </li>
    <li class="fd-list-group__item">
        List item 2
        <span class="fd-list-group__action">
            <button class="fd-button  fd-button--transparent sap-icon--edit" aria-label="Edit"></button>
        </span>
    </li>
    <li class="fd-list-group__item">
        List item 3 - Lorem ipsum dolor sit amet, consectetur sed do
        <span class="fd-list-group__action">
            <button class="fd-button  fd-button--transparent sap-icon--edit" aria-label="Edit"></button>
        </span>
    </li>
    <li class="fd-list-group__item">
        List item 4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        <span class="fd-list-group__action">
            <button class="fd-button  fd-button--transparent sap-icon--edit" aria-label="Edit"></button>
        </span>
    </li>
</ul>
{% endcapture %}

{% include display-component.html component=list-group-action %}

<br>


## List with Checkboxes

Checkboxes can be include on the left of each line for such purposes as bulk actions.

{% capture list-group-actions-form %}
<ul class="fd-list-group">
    <li class="fd-list-group__item">
        <label class="fd-form-label" for="121Sd939">
            <input type="checkbox" class="fd-checkbox" id="121Sd939">
            List item 1
        </label>
    </li>
    <li class="fd-list-group__item">
        <label class="fd-form-label" for="CndSd399">
            <input type="checkbox" class="fd-checkbox" id="CndSd399">
            List item 2 sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </label>
    </li>
    <li class="fd-list-group__item">
        <label class="fd-form-label" for="S8jyH416">
            <input type="checkbox" class="fd-checkbox" id="S8jyH416">
            List item 3
        </label>
    </li>
</ul>
{% endcapture %}
{% include display-component.html component=list-group-actions-form %}
