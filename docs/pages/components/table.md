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
            <td class="fd-table__cell">user.name@email.com</td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">user.name@email.com</td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">user.name@email.com</td>
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

## Table with no borders
<ul>
<li>`--no-vertical-borders` modifier can be applied to render a table without vertical borders.</li>
<li>`--no-horizontal-borders` modifier can be applied to render a table without horizontal borders.</li>
</ul>
Both can be added to  `fd-table`, `fd-table__header`, or `fd-table__body`

{% capture table-no-borders-icon %}
<h3>Table without Borders</h3>
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
            <td class="fd-table__cell">user.name@email.com</td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">user.name@email.com</td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">user.name@email.com</td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>

<h3>Table without Borders on body</h3>
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
            <td class="fd-table__cell">user.name@email.com</td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">user.name@email.com</td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">user.name@email.com</td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
{% endcapture %}
{% include display-component.html component=table-no-borders-icon %}
<br />

## Table with Footer

{% capture table-icon %}
<h3>Cozy Mode</h3>
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
            <td class="fd-table__cell">user.name@email.com</td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">user.name@email.com</td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">user.name@email.com</td>
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


<h3>Compact Mode</h3>
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
            <td class="fd-table__cell">user.name@email.com</td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">user.name@email.com</td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">user.name@email.com</td>
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


<h3>Condensed Mode</h3>
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
            <td class="fd-table__cell">user.name@email.com</td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">user.name@email.com</td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">user.name@email.com</td>
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

## Activable Rows and Columns


{% capture table-icon %}
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
        <tr class="fd-table__row fd-table__row--activable">
            <td class="fd-table__cell">Clicking on any cell</td>
            <td class="fd-table__cell">Of this row</td>
            <td class="fd-table__cell">Will cause</td>
            <td class="fd-table__cell">Higlight of whole row</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--activable">Clicking on cell</td>
            <td class="fd-table__cell fd-table__cell--activable">Will cause</td>
            <td class="fd-table__cell fd-table__cell--activable">Highlight of cell</td>
            <td class="fd-table__cell fd-table__cell--activable">Last Name</td>
            <td class="fd-table__cell fd-table__cell--activable">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">This row</td>
            <td class="fd-table__cell">And cells</td>
            <td class="fd-table__cell">Are not activable</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
{% endcapture %}
{% include display-component.html component=table-icon %}

<br />


## Table with checkbox
The checkbox input can be used at the beginning of each row to allow for bulk actions.
It is recommended to add the parameter `aria-selected="true"` to the row that is selected.
Also for cells, where checkbox is included should contain `fd-table__cell--checkbox` class.

{% capture table-checkbox %}
<h3>Cozy Mode</h3>
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
                <input type="checkbox" class="fd-checkbox" id="Ai4ez615">
                <label class="fd-checkbox__label" for="Ai4ez615"></label>
            </td>
            <td class="fd-table__cell"><a >user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez617">
                <label class="fd-checkbox__label" for="Ai4ez617"></label>
            </td>
            <td class="fd-table__cell"><a >user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input type="checkbox" class="fd-checkbox" id="Gi4ez611">
                <label class="fd-checkbox__label" for="Gi4ez611"></label>
            </td>
            <td class="fd-table__cell"><a >user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>


<h3>Compact Mode</h3>
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
                <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4HFHG1">
                <label class="fd-checkbox__label" for="Ai4HFHG1"></label>
            </td>
            <td class="fd-table__cell"><a >user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4JKHG1">
                <label class="fd-checkbox__label" for="Ai4JKHG1"></label>
            </td>
            <td class="fd-table__cell"><a >user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4JH23G1">
                <label class="fd-checkbox__label" for="Ai4JH23G1"></label>
            </td>
            <td class="fd-table__cell"><a >user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>


<h3>Condensed Mode</h3>
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
                <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4JHf87">
                <label class="fd-checkbox__label" for="Ai4JHf87"></label>
            </td>
            <td class="fd-table__cell"><a >user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4Jj67">
                <label class="fd-checkbox__label" for="Ai4Jj67"></label>
            </td>
            <td class="fd-table__cell"><a >user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="AGjtJj67">
                <label class="fd-checkbox__label" for="AGjtJj67"></label>
            </td>
            <td class="fd-table__cell"><a >user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
{% endcapture %}
{% include display-component.html component=table-checkbox %}

<br />


## Table with semantic row highlighting 
Table rows support semantic cells highlighting.
To achieve it there should be added cell with `fd-table__cell--status-indicator` class to every row.
If there is a need to use semantic mode on any of cells, one of that modifiers should be used
`--valid`, `--information`, `--error`, `--warning`

{% capture table-checkbox %}
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
            <td class="fd-table__cell"><a >user.name@email.com</a></td>
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
            <td class="fd-table__cell"><a >user.name@email.com</a></td>
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
            <td class="fd-table__cell"><a >user.name@email.com</a></td>
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
            <td class="fd-table__cell"><a >user.name@email.com</a></td>
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
            <td class="fd-table__cell"><a >user.name@email.com</a></td>
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
            <td class="fd-table__cell"><a >user.name@email.com</a></td>
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
            <td class="fd-table__cell"><a >user.name@email.com</a></td>
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
            <td class="fd-table__cell"><a >user.name@email.com</a></td>
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
            <td class="fd-table__cell"><a >user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>                    
    </tbody>
</table>
{% endcapture %}
{% include display-component.html component=table-checkbox %}

<br />

## Table with Contextual Menu
When more than three actions exist per row and/or space doesn't allow for actions,
a contextual menu can be substituted in order to display all actions in one menu.

{% capture table-actions %}
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
            <td class="fd-table__cell"><a >user.name@email.com</a></td>
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
            <td class="fd-table__cell"><a >user.name@email.com</a></td>
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
            <td class="fd-table__cell"><a >user.name@email.com</a></td>
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


## Table with Menu in Header

{% capture table-actions-header %}
<table class="fd-table" >
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col" aria-controls="popoverA1" aria-expanded="false" aria-haspopup="true">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        Column Header
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="popoverA1">
                        <nav class="fd-menu" id="">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a class="fd-menu__link" href="#">
                                        <span class="fd-menu__title">Option 1</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a >user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a >user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a >user.name@email.com</a></td>
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
