---
title: Table
id: table
keywords: table
sidebar: left-navigation-sidebar
toc: false
permalink: components/table.html
folder: components
tags: [development]
---

A table is a set of tabular data. Line items can support data, images and actions.
{: .docs-intro}

<br>

## Default Table

{% capture table-icon %}


<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin-bottom:0px;">Default Table</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
{% endcapture %}
{% include display-component.html component=table-icon %}

<br/>

## Table Without Borders
<ul>
<li>`--no-vertical-borders` modifier can be applied to render a table without vertical borders.</li>
<li>`--no-horizontal-borders` modifier can be applied to render a table without horizontal borders.</li>
</ul>
Both can be added to  `fd-table`, `fd-table__header`, or `fd-table__body`.

{% capture table-no-borders-icon %}
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin-bottom:0px;">Table Without Borders</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--no-horizontal-borders fd-table--no-vertical-borders">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>

<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin-bottom:0px;">Table Without Borders On Body</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body fd-table__body--no-horizontal-borders fd-table__body--no-vertical-borders">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
{% endcapture %}
{% include display-component.html component=table-no-borders-icon %}
<br />

## Table With Footer
Footer can be added by using `fd-table__footer` class with `tfoot` element.
It has to contain same size of columns as tbody and thead

{% capture table-icon %}
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin-bottom:0px;">Table With Footer Cozy Mode</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
    <tfoot class="fd-table__footer">
        <tr class="fd-table__row">
            <td class="fd-table__cell"></td>
            <td class="fd-table__cell"></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
        </tr>
    </tfoot>
</table>


<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin-bottom:0px;">Table With Footer Compact Mode</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--compact">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
    <tfoot class="fd-table__footer">
        <tr class="fd-table__row">
            <td class="fd-table__cell"></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell"></td>
        </tr>
    </tfoot>
</table>


<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin-bottom:0px;">Table With Footer Condensed Mode</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--condensed">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
    <tfoot class="fd-table__footer">
        <tr class="fd-table__row">
            <td class="fd-table__cell"></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell"></td>
        </tr>
    </tfoot>
</table>


{% endcapture %}
{% include display-component.html component=table-icon %}

<br />

## Interactive Rows and Columns
Interactive states of columns and row can be set by adding
<ul> 
    <li>For active state handler `--activable` modifier</li>
    <li>For hover state handler `--hoverable` modifier</li>
</ul>
{% capture table-icon %}

<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin-bottom:0px;">Interactive Table With Hoverable and Activable Cells and Rows</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--activable fd-table__cell--hoverable" scope="col">Hovering And</th>
            <th class="fd-table__cell fd-table__cell--activable fd-table__cell--hoverable" scope="col">Clicking</th>
            <th class="fd-table__cell fd-table__cell--activable fd-table__cell--hoverable" scope="col">On Header's Cell</th>
            <th class="fd-table__cell fd-table__cell--activable fd-table__cell--hoverable" scope="col">Will Trigger</th>
            <th class="fd-table__cell fd-table__cell--activable fd-table__cell--hoverable" scope="col">Color Change</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable">
            <td class="fd-table__cell">Clicking on any Cell</td>
            <td class="fd-table__cell">On This Row</td>
            <td class="fd-table__cell">Will cause</td>
            <td class="fd-table__cell">Highlight of Whole Row</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--activable">Clicking On Cell</td>
            <td class="fd-table__cell fd-table__cell--activable">Will cause</td>
            <td class="fd-table__cell fd-table__cell--activable">Highlight of cell</td>
            <td class="fd-table__cell fd-table__cell--activable">Last Name</td>
            <td class="fd-table__cell fd-table__cell--activable">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--hoverable">Hovering On Any Cell</td>
            <td class="fd-table__cell fd-table__cell--hoverable">Will Change</td>
            <td class="fd-table__cell fd-table__cell--hoverable">Background</td>
            <td class="fd-table__cell fd-table__cell--hoverable">Of Certain</td>
            <td class="fd-table__cell fd-table__cell--hoverable">Cell</td>
        </tr>
        <tr class="fd-table__row fd-table__row--hoverable">
            <td class="fd-table__cell">Hovering On Any Cell</td>
            <td class="fd-table__cell">And cells</td>
            <td class="fd-table__cell">Will Change</td>
            <td class="fd-table__cell">Background of Whole Row</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
{% endcapture %}
{% include display-component.html component=table-icon %}

<br />


## Table With Checkbox
The checkbox input can be used at the beginning of each row to allow for bulk actions.
It is recommended to add the parameter `aria-selected="true"` to the row that is selected.
Also for cells that include a checkbox should contain the `fd-table__cell--checkbox` class.

{% capture table-checkbox %}

<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin-bottom:0px;">Table With Checkbox Cozy Mode</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--checkbox" scope="col">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez611">
                <label class="fd-checkbox__label" for="Ai4ez611"></label>
            </th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row" aria-selected="true">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input type="checkbox" checked class="fd-checkbox" id="Ai4ez615">
                <label class="fd-checkbox__label" for="Ai4ez615"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez617">
                <label class="fd-checkbox__label" for="Ai4ez617"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input type="checkbox" class="fd-checkbox" id="Gi4ez611">
                <label class="fd-checkbox__label" for="Gi4ez611"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>



<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin-bottom:0px;">Table With Checkbox Compact Mode</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--compact">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--checkbox" scope="col">
                <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4HF611">
                <label class="fd-checkbox__label" for="Ai4HF611"></label>
            </th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row" aria-selected="true">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input type="checkbox" checked class="fd-checkbox fd-checkbox--compact" id="Ai4HFHG1">
                <label class="fd-checkbox__label" for="Ai4HFHG1"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4JKHG1">
                <label class="fd-checkbox__label" for="Ai4JKHG1"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4JH23G1">
                <label class="fd-checkbox__label" for="Ai4JH23G1"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>



<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin-bottom:0px;">Table With Checkbox Condensed Mode</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--condensed">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--checkbox" scope="col">
                <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4JH2BF87">
                <label class="fd-checkbox__label" for="Ai4JH2BF87"></label>
            </th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row" aria-selected="true">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input type="checkbox" checked class="fd-checkbox fd-checkbox--compact" id="Ai4JHf87">
                <label class="fd-checkbox__label" for="Ai4JHf87"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4Jj67">
                <label class="fd-checkbox__label" for="Ai4Jj67"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="AGjtJj67">
                <label class="fd-checkbox__label" for="AGjtJj67"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
{% endcapture %}
{% include display-component.html component=table-checkbox %}

<br />

## Table With Pagination

{% capture table-pagination %}
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin-bottom:0px;">Table With Pagination at The Bottom</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Name</th>
            <th class="fd-table__cell" scope="col">Status</th>
            <th class="fd-table__cell" scope="col">Price</th>
            <th class="fd-table__cell" scope="col">Country</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell">Banana</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--positive">
                    Available
                </span>
            </td>
            <td class="fd-table__cell">5 EUR</td>
            <td class="fd-table__cell">India</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">Pineapple</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--negative">
                    Out of stock
                </span>
            </td>
            <td class="fd-table__cell">2 EUR</td>
            <td class="fd-table__cell">Mexico</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">Orange</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--informative">
                    Temporary unavailable
                </span>
            </td>
            <td class="fd-table__cell">6 EUR</td>
            <td class="fd-table__cell">Spain</td>
        </tr>
    </tbody>
</table>
<div class="fd-pagination">
    <span class="fd-pagination__total">Showing 3 of 30 items</span>
    <nav class="fd-pagination__nav">
        <a href="#" class="fd-pagination__link fd-pagination__link--previous" aria-label="Next" aria-disabled="false"></a>
        <a href="#" class="fd-pagination__link">1</a>
        <a href="#" class="fd-pagination__link is-selected">2</a>
        <a href="#" class="fd-pagination__link">3</a>
        <span class="fd-pagination__more" role="presentation"></span>
        <a href="#" class="fd-pagination__link">10</a>
        <a href="#" class="fd-pagination__link fd-pagination__link--next" aria-label="Next" aria-disabled="false"></a>
    </nav>
</div>
{% endcapture %}
{% include display-component.html component=table-pagination %}
<br/>

## Table With Advanced Toolbar
Advanced Toolbar can be used to customize table. Certain buttons trigger dialogs, where user can set some data.

{% capture table-toolbar %}
<div class="fd-dialog" id="filter-dialog-example">
    <div class="fd-dialog__content" role="dialog" aria-modal="true" aria-labelledby="dialog-filter">
        <header class="fd-dialog__header fd-bar">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 class="fd-dialog__title" id="dialog-filter">
                        Filter By
                    </h3>
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <span class="sap-icon--filter"></span>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <ul class="fd-list fd-list--compact">
              <li class="fd-list__item">
                  <span class="fd-list__title">Name</span>
              </li>
              <li class="fd-list__item">
                  <span class="fd-list__title">Status</span>
              </li>
              <li class="fd-list__item">
                  <span class="fd-list__title">Price</span>
              </li>
              <li class="fd-list__item">
                  <span class="fd-list__title">Country</span>
              </li>
            </ul>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--emphasized fd-button--compact" onclick="toggleDialog('filter-dialog-example', false)">OK</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--transparent fd-button--compact" onclick="toggleDialog('filter-dialog-example', false)">Cancel</button>
                </div>
            </div>
        </footer>
    </div>
</div>
<div class="fd-dialog" id="settings-dialog-example">
    <div class="fd-dialog__content" role="dialog" aria-modal="true" aria-labelledby="dialog-settings">
        <header class="fd-dialog__header fd-bar fd-bar--header-with-subheader">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 class="fd-dialog__title" id="dialog-settings">
                        Columns
                    </h3>
                </div>
            </div>
        </header>
        <div class="fd-dialog__subheader fd-bar fd-bar--subheader">
            <div class="fd-bar__middle">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--icon fd-button--transparent fd-button--compact sap-icon--arrow-top"></button>
                    <button class="fd-button fd-button--icon fd-button--transparent fd-button--compact sap-icon--arrow-bottom"></button>
                </div>
                <div class="fd-bar__element fd-bar__element--full-width">
                    <div class="fd-input-group">
                        <input class="fd-input fd-input-group__input fd-input--compact" type="text" placeholder="Search...">
                        <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--compact">
                            <button class="fd-button fd-input-group__button fd-button--icon fd-button--transparent fd-button--compact sap-icon--search"></button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <ul class="fd-list fd-list--multi-input fd-list--compact">
                <li class="fd-list__item is-selected" role="option">
                  <input type="checkbox" checked class="fd-checkbox fd-checkbox--compact fd-list__input" id="GGi4ezFD1">
                  <label class="fd-checkbox__label fd-checkbox__label--compact fd-list__label" for="GGi4ezFD1">
                      <span class="fd-list__title">All</span>
                  </label>
                </li>
                <li class="fd-list__item is-selected" role="option">
                  <input type="checkbox" checked class="fd-checkbox fd-checkbox--compact fd-list__input" id="GGi4ez641">
                  <label class="fd-checkbox__label fd-checkbox__label--compact fd-list__label" for="GGi4ez641">
                      <span class="fd-list__title">Name</span>
                  </label>
                </li>
                <li class="fd-list__item is-selected" role="option">
                  <input type="checkbox" checked class="fd-checkbox fd-checkbox--compact fd-list__input" id="Ai4FGFG612">
                  <label class="fd-checkbox__label fd-checkbox__label--compact fd-list__label" for="Ai4FGFG612">
                      <span class="fd-list__title">Status</span>
                  </label>
                </li>
                <li class="fd-list__item is-selected" role="option">
                  <input type="checkbox" checked class="fd-checkbox fd-checkbox--compact fd-list__input" id="Ai4e88614">
                  <label class="fd-checkbox__label fd-checkbox__label--compact fd-list__label" for="Ai4e88614">
                      <span class="fd-list__title">Price</span>
                  </label>
                </li>
                <li class="fd-list__item is-selected" role="option">
                  <input type="checkbox" checked class="fd-checkbox fd-checkbox--compact fd-list__input" id="Ai4egh6024">
                  <label class="fd-checkbox__label fd-checkbox__label--compact fd-list__label" for="Ai4egh6024">
                      <span class="fd-list__title">Country</span>
                  </label>
                </li>
            </ul>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--emphasized fd-button--compact" onclick="toggleDialog('settings-dialog-example', false)">OK</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--transparent fd-button--compact" onclick="toggleDialog('settings-dialog-example', false)">Cancel</button>
                </div>
            </div>
        </footer>
    </div>
</div>
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin-bottom:0px;">Table With Advanced Shellbar</h4>
    <div class="fd-toolbar__spacer"></div>
    <button class="fd-button fd-button--compact fd-button--transparent sap-icon--filter" onclick="toggleDialog('filter-dialog-example', true)"></button>
    <button class="fd-button fd-button--compact fd-button--transparent sap-icon--action-settings" onclick="toggleDialog('settings-dialog-example', true)"></button>
</div>
<table class="fd-table fd-table--compact">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Name</th>
            <th class="fd-table__cell" scope="col">Status</th>
            <th class="fd-table__cell" scope="col">Price</th>
            <th class="fd-table__cell" scope="col">Country</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell">Banana</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--positive">
                    Available
                </span>
            </td>
            <td class="fd-table__cell">5 EUR</td>
            <td class="fd-table__cell">India</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">Pineapple</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--negative">
                    Out of stock
                </span>
            </td>
            <td class="fd-table__cell">2 EUR</td>
            <td class="fd-table__cell">Mexico</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">Orange</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--informative">
                    Temporary unavailable
                </span>
            </td>
            <td class="fd-table__cell">6 EUR</td>
            <td class="fd-table__cell">Spain</td>
        </tr>
    </tbody>
</table>
{% endcapture %}
{% include display-component.html component=table-toolbar %}

<br />

## Responsive Table
Responsive table is not that different than basic table, there should be used some modifiers, to remove borders.
For Pop-in example markup is changed, one row is transformed to 2 rows with `fd-table__row--main` and `fd-table__row--secondary`
modifiers. Also some cells should be merged into paragraphs.
{% capture table-responsive %}
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin-bottom:0px;">Responsive Table</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--no-horizontal-borders">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--checkbox">
                <input type="checkbox" class="fd-checkbox" id="kqqzPI">
                <label class="fd-checkbox__label" for="kqqzPI"></label>
            </th>
            <th class="fd-table__cell" scope="col">Name</th>
            <th class="fd-table__cell" scope="col">Status</th>
            <th class="fd-table__cell" scope="col">Price</th>
            <th class="fd-table__cell" scope="col">Country</th>
            <th class="fd-table__cell"></th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input type="checkbox" class="fd-checkbox" id="EWuzWh">
                <label class="fd-checkbox__label" for="EWuzWh"></label>
            </td>
            <td class="fd-table__cell">Banana</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--positive">
                    Available
                </span>
            </td>
            <td class="fd-table__cell">5 EUR</td>
            <td class="fd-table__cell">India</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                <span class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow"></span>
            </td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input type="checkbox" class="fd-checkbox" id="19j0Sc">
                <label class="fd-checkbox__label" for="19j0Sc"></label>
            </td>
            <td class="fd-table__cell">Pineapple</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--negative">
                    Out of stock
                </span>
            </td>
            <td class="fd-table__cell">2 EUR</td>
            <td class="fd-table__cell">Mexico</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                <span class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow"></span>
            </td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input type="checkbox" class="fd-checkbox" id="a7SfGX">
                <label class="fd-checkbox__label" for="a7SfGX"></label>
            </td>
            <td class="fd-table__cell">Orange</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--informative">
                    Temporary unavailable
                </span>
            </td>
            <td class="fd-table__cell">6 EUR</td>
            <td class="fd-table__cell">Spain</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                <span class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow"></span>
            </td>
        </tr>
    </tbody>
</table>

<br>
<div style="max-width: 450px">
    <div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
        <h4 style="margin-bottom:0px;">Responsive Table - Pop-in mode</h4>
        <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
    </div>
    <table class="fd-table fd-table--no-horizontal-borders fd-table--no-vertical-borders fd-table--pop-in">
        <tbody class="fd-table__body">
            <tr class="fd-table__row fd-table__row--main fd-table__row--activable fd-table__row--hoverable">
                <td class="fd-table__cell">
                    <p class="fd-table__text fd-table__text--title">Banana</p>
                    <p class="fd-table__text">India</p>
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content">
                    5 EUR
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                    <span class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow"></span>
                </td>
            </tr>
            <tr class="fd-table__row fd-table__row--secondary">
                <td class="fd-table__cell" colspan="100%">
                    <p class="fd-table__text">
                        <label class="fd-form-label">Status:</label>
                        <span class="fd-object-status fd-object-status--positive">
                            Available
                        </span>
                    </p>
                    <p class="fd-table__text">
                        <label class="fd-form-label">Date Of Expire:</label>
                        12.01.12
                    </p>
                </td>
            </tr>
            <tr class="fd-table__row fd-table__row--main fd-table__row--activable fd-table__row--hoverable">
                <td class="fd-table__cell">
                    <p class="fd-table__text fd-table__text--title">Very long name for orange, which no one expected, forces text wrapping into another line.</p>
                    <p class="fd-table__text">Spain</p>
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content">
                    6 EUR
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                    <span class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow"></span>
                </td>
            </tr>
            <tr class="fd-table__row fd-table__row--secondary">
                <td class="fd-table__cell" colspan="100%">
                    <p class="fd-table__text">
                        <label class="fd-form-label">Status:</label>
                        <span class="fd-object-status fd-object-status--negative">
                            Out of stock
                        </span>
                    </p>
                    <p class="fd-table__text">
                        <label class="fd-form-label">Date Of Expire:</label>
                        12.01.12
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<br>
<div style="max-width: 450px">
    <div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
        <h4 style="margin-bottom:0px;">Responsive Table - Pop-in Mode with Checkboxes and Navigation Indicator</h4>
        <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
    </div>
    <table class="fd-table fd-table--no-horizontal-borders fd-table--no-vertical-borders fd-table--pop-in">
        <tbody class="fd-table__body">
            <tr class="fd-table__row fd-table__row--main">
                <td class="fd-table__cell fd-table__cell--checkbox">
                    <input type="checkbox" class="fd-checkbox" id="CWkhTG">
                    <label class="fd-checkbox__label" for="CWkhTG"></label>
                </td>
                <td class="fd-table__cell">
                    <p class="fd-table__text fd-table__text--title">Banana</p>
                    <p class="fd-table__text">India</p>
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content">
                    5 EUR
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                    <span class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow"></span>
                </td>
            </tr>
            <tr class="fd-table__row fd-table__row--secondary">
                <td class="fd-table__cell fd-table__cell--checkbox"></td>
                <td class="fd-table__cell" colspan="100%">
                    <p class="fd-table__text">
                        <label class="fd-form-label">Status:</label>
                        <span class="fd-object-status fd-object-status--positive">
                            Available
                        </span>
                    </p>
                    <p class="fd-table__text">
                        <label class="fd-form-label">Date Of Expire:</label>
                        12.01.12
                    </p>
                </td>
            </tr>
            <tr class="fd-table__row fd-table__row--main">
                <td class="fd-table__cell fd-table__cell--checkbox">
                    <input type="checkbox" class="fd-checkbox" id="Yeas6w">
                    <label class="fd-checkbox__label" for="Yeas6w"></label>
                </td>
                <td class="fd-table__cell">
                    <p class="fd-table__text fd-table__text--title">Very long name for orange, which no one expected, forces text wrapping into another line.</p>
                    <p class="fd-table__text">Spain</p>
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content">
                    6 EUR
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                    <span class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow"></span>
                </td>
            </tr>
            <tr class="fd-table__row fd-table__row--secondary">
                <td class="fd-table__cell fd-table__cell--checkbox"></td>
                <td class="fd-table__cell" colspan="100%">
                    <p class="fd-table__text">
                        <label class="fd-form-label">Status:</label>
                        <span class="fd-object-status fd-object-status--negative">
                            Out of stock
                        </span>
                    </p>
                    <p class="fd-table__text">
                        <label class="fd-form-label">Date Of Expire:</label>
                        12.01.12
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
</div>
{% endcapture %}
{% include display-component.html component=table-responsive %}


## Table With Semantic Row Highlighting 
To show that an item needs attention, you can show a highlight indicator next to the item. This can be achieved by passing the `fd-table__cell--status-indicator` class to each row.
Other indicators such as semantic states and modes can be added using the `--valid`, `--information`, `--error`, `--warning`modifiers.

{% capture table-highlight %}

<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin-bottom:0px;">Table with Semantic Rows</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--status-indicator"></th>
            <th class="fd-table__cell fd-table__cell--checkbox" scope="col">
                <input type="checkbox" class="fd-checkbox" id="Ai9ez611">
                <label class="fd-checkbox__label" for="Ai9ez611"></label>
            </th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input type="checkbox" class="fd-checkbox" id="Ai9ek611">
                <label class="fd-checkbox__label" for="Ai9ek611"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator fd-table__cell--status-indicator--valid"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input type="checkbox" class="fd-checkbox" id="Ai9ek673">
                <label class="fd-checkbox__label" for="Ai9ek673"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell fd-table__cell--valid">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input type="checkbox" class="fd-checkbox" id="Ai9ek69s">
                <label class="fd-checkbox__label" for="Ai9ek69s"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
         <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator fd-table__cell--status-indicator--warning"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input type="checkbox" class="fd-checkbox" id="Ai9ekk69s">
                <label class="fd-checkbox__label" for="Ai9ekk69s"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell fd-table__cell--warning">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input type="checkbox" class="fd-checkbox" id="Ai73k69s">
                <label class="fd-checkbox__label" for="Ai73k69s"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
         <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator fd-table__cell--status-indicator--error"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input type="checkbox" class="fd-checkbox" id="Ai734F6s">
                <label class="fd-checkbox__label" for="Ai734F6s"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell fd-table__cell--error">01/26/17</td>
        </tr>  
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input type="checkbox" class="fd-checkbox" id="Ai73HE36s">
                <label class="fd-checkbox__label" for="Ai73HE36s"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
         <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator fd-table__cell--status-indicator--information"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input type="checkbox" class="fd-checkbox" id="Ai7JDE36s">
                <label class="fd-checkbox__label" for="Ai7JDE36s"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell fd-table__cell--information">01/26/17</td>
        </tr>   
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input type="checkbox" class="fd-checkbox" id="Ai7JGD6s">
                <label class="fd-checkbox__label" for="Ai7JGD6s"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>                    
    </tbody>
</table>
{% endcapture %}
{% include display-component.html component=table-highlight %}

<br />


{% capture table-merge-cells %}
To merge cells, the `--no-horizontal-border` or `--no-vertical-border` modifier should be added.
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin-bottom:0px;">Table with Merged Cells</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Name</th>
            <th class="fd-table__cell" scope="col">Status</th>
            <th class="fd-table__cell" scope="col">Price</th>
            <th class="fd-table__cell" scope="col">Country</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row fd-table__row--activable">
            <td class="fd-table__cell fd-table__cell--no-horizontal-border fd-table__cell--no-vertical-border">Banana</td>
            <td class="fd-table__cell fd-table__cell--no-vertical-border">
                <span class="fd-object-status fd-object-status--positive">
                    Available
                </span>
            </td>
            <td class="fd-table__cell">5 EUR</td>
            <td class="fd-table__cell">India</td>
        </tr>
        <tr class="fd-table__row fd-table__row--activable">
            <td class="fd-table__cell fd-table__cell--no-horizontal-border">Pineapple</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--negative">
                    Out of stock
                </span>
            </td>
            <td class="fd-table__cell">2 EUR</td>
            <td class="fd-table__cell">Mexico</td>
        </tr>
        <tr class="fd-table__row fd-table__row--activable">
            <td class="fd-table__cell">Orange</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--informative">
                    Temporary unavailable
                </span>
            </td>
            <td class="fd-table__cell">6 EUR</td>
            <td class="fd-table__cell">Spain</td>
        </tr>
    </tbody>
</table>
{% endcapture %}
{% include display-component.html component=table-merge-cells %}

<br>

## Table With Contextual Menu
When more than three actions exist per row and/or there isn't enough space for the required actions,
a contextual menu can be substituted to display all actions in one menu.

{% capture table-actions %}


<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin-bottom:0px;">Table with Contextual Menu</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table" >
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col"></th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
            <td class="fd-table__cell fd-table__cell--fit-content">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <button class="fd-button fd-button--transparent sap-icon--overflow" aria-controls="pQqQRFF3" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
                    </div>
                    <div class="fd-popover__body" aria-hidden="true" id="pQqQRFF3">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 1</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 2</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 3</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
            <td class="fd-table__cell fd-table__cell--fit-content">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <button class="fd-button fd-button--transparent sap-icon--overflow" aria-controls="G54qQRFF3" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
                    </div>
                    <div class="fd-popover__body" aria-hidden="true" id="G54qQRFF3">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 1</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 2</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 3</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
            <td class="fd-table__cell fd-table__cell--fit-content">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <button class="fd-button fd-button--transparent sap-icon--overflow" aria-controls="G54JRFF3" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
                    </div>
                    <div class="fd-popover__body" aria-hidden="true" id="G54JRFF3">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 1</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 2</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 3</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
</table>
{% endcapture %}
{% include display-component.html component=table-actions %}

<br />


## Table With Menu In Header

{% capture table-actions-header %}
Some customization actions can be added to headers, the options will be displayed in popover. Those popover should be 
added with `fd-table__popover` class.
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin-bottom:0px;">Table with Popover in Headers</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table" >
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">
                <div class="fd-table__popover fd-popover">
                    <div class="fd-popover__control" aria-controls="popoverA1" aria-expanded="false" aria-haspopup="true">
                        <div class="fd-table__inner">
                            Column Header Ascending
                            <span class="fd-table__icon sap-icon--sort-ascending"></span>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="popoverA1">
                        <ul class="fd-list fd-list--compact" role="list">
                            <li tabindex="0" role="listitem" class="fd-list__item">
                                <span class="fd-list__icon sap-icon--sort-descending"></span>
                                <span class="fd-list__title">Sort Descending</span>
                            </li>
                            <li tabindex="0" role="listitem" class="fd-list__item">
                                <span class="fd-list__icon sap-icon--sort-ascending"></span>
                                <span class="fd-list__title">Sort Ascendnig</span>
                            </li>
                            <li role="listitem" class="fd-list__item">
                                <span class="fd-list__icon sap-icon--filter"></span>
                                <div class="fd-form-item  fd-form-item--horizontal">
                                    <label class="fd-form-label" for="input-1d">Filter</label>
                                    <input class="fd-input fd-input--compact" id="input-1d">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </th>
            <th class="fd-table__cell" scope="col">
                <div class="fd-table__popover fd-popover">
                    <div class="fd-popover__control" aria-controls="popoverA2" aria-expanded="false" aria-haspopup="true">
                        <div class="fd-table__inner">
                            Column Header Descending
                            <span class="fd-table__icon sap-icon--sort-descending"></span>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="popoverA2">
                        <ul class="fd-list fd-list--compact" role="list">
                            <li tabindex="0" role="listitem" class="fd-list__item">
                                <span class="fd-list__icon sap-icon--sort-descending"></span>
                                <span class="fd-list__title">Sort Descending</span>
                            </li>
                            <li tabindex="0" role="listitem" class="fd-list__item">
                                <span class="fd-list__icon sap-icon--sort-ascending"></span>
                                <span class="fd-list__title">Sort Ascendnig</span>
                            </li>
                            <li role="listitem" class="fd-list__item">
                                <span class="fd-list__icon sap-icon--filter"></span>
                                <div class="fd-form-item  fd-form-item--horizontal">
                                    <label class="fd-form-label" for="input-1d">Filter</label>
                                    <input class="fd-input fd-input--compact" id="input-1d2">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
{% endcapture %}
{% include display-component.html component=table-actions-header %}

<br />

## Table with Fix Column Header

To create fixed column, these steps need to be reproduced
* Wrap the table with element with class `fd-table--fixed` 
* Add `fd-table__cell--fixed` class to cell elements, it should be propagated to whole row
* Hard code the width of columns, otherwise the cells will be squashed

{% capture table-fixed %}
<style>
        .fd-table--fixed {
           padding-left: 200px;
        }
        [dir=rtl] .fd-table--fixed,
        .fd-table--fixed[dir=rtl] {
           padding-left: 0;
           padding-right: 200px;            
        }
        
        .fd-table--fixed .fd-table__cell {
            min-width: 200px;
            max-width: 200px;
        }
</style>
<div style="position: relative">
    <div class="fd-table--fixed">
      <table class="fd-table">
         <thead class="fd-table__header">
            <tr class="fd-table__row">
               <th class="fd-table__cell fd-table__cell--fixed"  aria-haspopup="true" scope="col">
                Header Column
               </th>
               <th class="fd-table__cell" scope="col">
                    Header Column
               </th>
               <th class="fd-table__cell" scope="col">
                    Header Column
               </th>
               <th class="fd-table__cell" scope="col">
                    Header Column
               </th>
               <th class="fd-table__cell" scope="col">
                    Header Column
               </th>
               <th class="fd-table__cell" scope="col">
                    Header Column
               </th>
               <th class="fd-table__cell" scope="col">
                    Header Column
               </th>
               <th class="fd-table__cell" scope="col">
                    Header Column
               </th>
            </tr>
         </thead>
         <tbody class="fd-table__body">
            <tr class="fd-table__row">
               <td class="fd-table__cell fd-table__cell--fixed" scope="row">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
            </tr>
            <tr class="fd-table__row">
               <td class="fd-table__cell fd-table__cell--fixed" scope="row">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
            </tr>
            <tr class="fd-table__row">
               <td class="fd-table__cell fd-table__cell--fixed" scope="row">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
            </tr>
         </tbody>
      </table>
    </div>
</div>

{% endcapture %}
{% include display-component.html component=table-fixed %}

<br/>


## Navigation Indication State
Navigation can be indicated on a row in the final column using the `.fd-table__cell--navigated` class.

{% capture table-navigation %}


<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin-bottom:0px;">Table with Navigation Indication State</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col"></th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
            <td class="fd-table__cell fd-table__cell--fit-content" scope="col">
                <button class="fd-button fd-button--transparent sap-icon--navigation-right-arrow"></button>
            </td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--navigated" scope="col">
                <button class="fd-button fd-button--transparent sap-icon--navigation-right-arrow"></button>
            </td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
            <td class="fd-table__cell fd-table__cell--fit-content" scope="col">
                <button class="fd-button fd-button--transparent sap-icon--navigation-right-arrow"></button>
            </td>
        </tr>
    </tbody>
</table>

<div dir="rtl"> 
    <div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
        <h4 style="margin-bottom:0px;">Table with Navigation Indication State on RTL</h4>
        <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
    </div>
    <table class="fd-table">
        <thead class="fd-table__header">
            <tr class="fd-table__row">
                <th class="fd-table__cell" scope="col">Column Header</th>
                <th class="fd-table__cell" scope="col">Column Header</th>
                <th class="fd-table__cell" scope="col">Column Header</th>
                <th class="fd-table__cell" scope="col">Column Header</th>
                <th class="fd-table__cell" scope="col"></th>
            </tr>
        </thead>
        <tbody class="fd-table__body">
            <tr class="fd-table__row">
                <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
                <td class="fd-table__cell">First Name</td>
                <td class="fd-table__cell">Last Name</td>
                <td class="fd-table__cell">01/26/17</td>
                <td class="fd-table__cell fd-table__cell--fit-content" scope="col">
                    <button class="fd-button fd-button--transparent sap-icon--navigation-left-arrow"></button>
                </td>
            </tr>
            <tr class="fd-table__row">
                <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
                <td class="fd-table__cell">First Name</td>
                <td class="fd-table__cell">Last Name</td>
                <td class="fd-table__cell">01/26/17</td>
                <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--navigated" scope="col">
                    <button class="fd-button fd-button--transparent sap-icon--navigation-left-arrow"></button>
                </td>
            </tr>
            <tr class="fd-table__row">
                <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
                <td class="fd-table__cell">First Name</td>
                <td class="fd-table__cell">Last Name</td>
                <td class="fd-table__cell">01/26/17</td>
                <td class="fd-table__cell fd-table__cell--fit-content" scope="col">
                    <button class="fd-button fd-button--transparent sap-icon--navigation-left-arrow"></button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
{% endcapture %}
{% include display-component.html component=table-navigation %}
