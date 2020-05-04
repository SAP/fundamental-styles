---
title: Table
id: table
keywords: table
sidebar: left-navigation-sidebar
toc: false
permalink: components/table.html
folder: components
---

A table is a set of tabular data. Line items can support data, images and actions.
{: .docs-intro}

<br>

## Default Table

{% capture table-icon %}
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col"></th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><span class=" fd-image--s fd-image--circle" aria-label="Image label"
            style="background-image: url('https://placeimg.com/400/400/nature');">
            </span></td>
            <td class="fd-table__cell"><a href="#" class="fd-has-font-weight-semi">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><span class=" fd-image--s fd-image--circle" aria-label="Image label"
            style="background-image: url('https://placeimg.com/400/400/nature');">
            </span></td>
            <td class="fd-table__cell"><a href="#" class="fd-has-font-weight-semi">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><span class=" fd-image--s fd-image--circle" aria-label="Image label"
            style="background-image: url('https://placeimg.com/400/400/nature');">
            </span></td>
            <td class="fd-table__cell"><a href="#" class="fd-has-font-weight-semi">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
{% endcapture %}
{% include display-component.html component=table-icon %}

<br />

## Table with no borders

`fd-table--no-borders` can be applied to render a table with no borders

{% capture table-icon %}
<table class="fd-table fd-table--no-borders">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col"></th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><span class=" fd-image--s fd-image--circle" aria-label="Image label"
            style="background-image: url('https://placeimg.com/400/400/nature');">
            </span></td>
            <td class="fd-table__cell"><a href="#" class="fd-has-font-weight-semi">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><span class=" fd-image--s fd-image--circle" aria-label="Image label"
            style="background-image: url('https://placeimg.com/400/400/nature');">
            </span></td>
            <td class="fd-table__cell"><a href="#" class="fd-has-font-weight-semi">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><span class=" fd-image--s fd-image--circle" aria-label="Image label"
            style="background-image: url('https://placeimg.com/400/400/nature');">
            </span></td>
            <td class="fd-table__cell"><a href="#" class="fd-has-font-weight-semi">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
{% endcapture %}
{% include display-component.html component=table-icon %}

<br />

## Table with stripes

`fd-table--striped` can be applied to render a table with zebra stripes

{% capture table-icon %}
<table class="fd-table fd-table--striped">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col"></th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><span class=" fd-image--s fd-image--circle" aria-label="Image label"
            style="background-image: url('https://placeimg.com/400/400/nature');">
            </span></td>
            <td class="fd-table__cell"><a href="#" class="fd-has-font-weight-semi">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><span class=" fd-image--s fd-image--circle" aria-label="Image label"
            style="background-image: url('https://placeimg.com/400/400/nature');">
            </span></td>
            <td class="fd-table__cell"><a href="#" class="fd-has-font-weight-semi">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><span class=" fd-image--s fd-image--circle" aria-label="Image label"
            style="background-image: url('https://placeimg.com/400/400/nature');">
            </span></td>
            <td class="fd-table__cell"><a href="#" class="fd-has-font-weight-semi">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
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

{% capture table-checkbox %}
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">
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
            <th class="fd-table__cell" scope="col">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez612">
                <label class="fd-checkbox__label" for="Ai4ez612"></label>
            </th>
            <td class="fd-table__cell"><a class="fd-has-font-weight-semi">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez6130">
                <label class="fd-checkbox__label" for="Ai4ez6130"></label>
            </th>
            <td class="fd-table__cell"><a class="fd-has-font-weight-semi">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez614">
                <label class="fd-checkbox__label" for="Ai4ez614"></label>
            </th>
            <td class="fd-table__cell"><a class="fd-has-font-weight-semi">user.name@email.com</a></td>
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
Table rows support semantic row highlighting with the modifiers `fd-table__row--success`, `fd-table__row--warning`, `fd-table__row--error` and `fd-table__row--information` 

{% capture table-checkbox %}
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez615">
                <label class="fd-checkbox__label" for="Ai4ez615"></label>
            </th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez616">
                <label class="fd-checkbox__label" for="Ai4ez616"></label>
            </th>
            <td class="fd-table__cell"><a class="fd-has-font-weight-semi">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row fd-table__row--success">
            <th class="fd-table__cell" scope="col">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez617">
                <label class="fd-checkbox__label" for="Ai4ez617"></label>
            </th>
            <td class="fd-table__cell"><a class="fd-has-font-weight-semi">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez618">
                <label class="fd-checkbox__label" for="Ai4ez618"></label>
            </th>
            <td class="fd-table__cell"><a class="fd-has-font-weight-semi">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
         <tr class="fd-table__row fd-table__row--warning">
            <th class="fd-table__cell" scope="col">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez619">
                <label class="fd-checkbox__label" for="Ai4ez619"></label>
            </th>
            <td class="fd-table__cell"><a class="fd-has-font-weight-semi">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez610">
                <label class="fd-checkbox__label" for="Ai4ez610"></label>
            </th>
            <td class="fd-table__cell"><a class="fd-has-font-weight-semi">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
         <tr class="fd-table__row fd-table__row--error">
            <th class="fd-table__cell" scope="col">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez6111">
                <label class="fd-checkbox__label" for="Ai4ez6111"></label>
            </th>
            <td class="fd-table__cell"><a class="fd-has-font-weight-semi">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>  
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez6112">
                <label class="fd-checkbox__label" for="Ai4ez6112"></label>
            </th>
            <td class="fd-table__cell"><a class="fd-has-font-weight-semi">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
         <tr class="fd-table__row fd-table__row--information">
            <th class="fd-table__cell" scope="col">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez6113">
                <label class="fd-checkbox__label" for="Ai4ez6113"></label>
            </th>
            <td class="fd-table__cell"><a class="fd-has-font-weight-semi">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>   
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez6114">
                <label class="fd-checkbox__label" for="Ai4ez6114"></label>
            </th>
            <td class="fd-table__cell"><a class="fd-has-font-weight-semi">user.name@email.com</a></td>
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
            <td class="fd-table__cell"><a class="fd-has-font-weight-semi">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
            <td class="fd-table__cell">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <button class="fd-button fd-button--transparent sap-icon--overflow" aria-controls="pQqQR213a" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="pQqQR213a">
                        <nav class="fd-menu fd-menu--compact">
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
            </td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-has-font-weight-semi">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
            <td class="fd-table__cell">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <button class="fd-button fd-button--transparent sap-icon--overflow" aria-controls="lkjlkj23" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="lkjlkj23">
                        <nav class="fd-menu fd-menu--compact">
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
            </td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-has-font-weight-semi">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
            <td class="fd-table__cell">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <button class="fd-button fd-button--transparent sap-icon--overflow" aria-controls="uu4324" aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="uu4324">
                        <nav class="fd-menu fd-menu--compact">
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
            </td>
        </tr>
    </tbody>
</table>
{% endcapture %}
{% include display-component.html component=table-actions %}

<br />

## Table with Sortable Column Headers
{% capture table-sort %}
<table class="fd-table">
   <thead class="fd-table__header">
      <tr class="fd-table__row">
         <th class="fd-table__cell fd-table__sort-column" scope="col">Header Column</th>
         <th class="fd-table__cell fd-table__sort-column" scope="col">Header Column</th>
         <th class="fd-table__cell fd-table__sort-column" scope="col">Header Column</th>
      </tr>
   </thead>
   <tbody class="fd-table__body">
      <tr class="fd-table__row">
         <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
         <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
         <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
      </tr>
      <tr class="fd-table__row">
          <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
          <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
          <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
      </tr>
      <tr class="fd-table__row">
          <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
          <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
          <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
      </tr>
   </tbody>
</table>
{% endcapture %}
{% include display-component.html component=table-sort %}

<br>

## Table with Sortable Column Headers - Ascending
{% capture table-sort %}
<table class="fd-table">
   <thead class="fd-table__header">
      <tr class="fd-table__row">
         <th class="fd-table__cell fd-table__sort-column fd-table__sort-column--asc" scope="col">Header Column</th>
         <th class="fd-table__cell fd-table__sort-column" scope="col">Header Column</th>
         <th class="fd-table__cell fd-table__sort-column" scope="col">Header Column</th>
      </tr>
   </thead>
   <tbody class="fd-table__body">
      <tr class="fd-table__row">
         <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
         <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
         <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
      </tr>
      <tr class="fd-table__row">
          <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
          <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
          <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
      </tr>
      <tr class="fd-table__row">
          <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
          <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
          <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
      </tr>
   </tbody>
</table>
{% endcapture %}
{% include display-component.html component=table-sort %}

<br>

## Table with Sortable Column Headers - Descinding
{% capture table-sort %}
<table class="fd-table">
   <thead class="fd-table__header">
      <tr class="fd-table__row">
         <th class="fd-table__cell fd-table__sort-column fd-table__sort-column--dsc" scope="col">Header Column</th>
         <th class="fd-table__cell fd-table__sort-column" scope="col">Header Column</th>
         <th class="fd-table__cell fd-table__sort-column" scope="col">Header Column</th>
      </tr>
   </thead>
   <tbody class="fd-table__body">
      <tr class="fd-table__row">
         <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
         <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
         <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
      </tr>
      <tr class="fd-table__row">
          <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
          <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
          <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
      </tr>
      <tr class="fd-table__row">
          <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
          <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
          <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
      </tr>
   </tbody>
</table>
{% endcapture %}
{% include display-component.html component=table-sort %}

<br>

## Table with Column Headers with context menu
{% capture table-sort %}
<table class="fd-table">
   <thead class="fd-table__header">
      <tr class="fd-table__row">
         <th class="fd-table__cell fd-table__context-menu" aria-controls="col1" aria-haspopup="true" scope="col" >
            <div class="fd-popover">
               <div class="fd-popover__control">
                  <span class="fd-table__context-menu-label">Header Column</span>
               </div>
               <div class="fd-popover__body fd-popover__body--no-arrow"  aria-hidden="true" id="col1">
                   <div class="fd-menu fd-menu--compact">
                       <ul class="fd-menu__list fd-menu__list--no-shadow">
                           <li class="fd-menu__item">
                               <div class="fd-menu__link">
                                   <span class="fd-menu__title">Ascending</span>
                               </div>
                           </li>
                           <li class="fd-menu__item">
                               <div class="fd-menu__link">
                                   <span class="fd-menu__title">Decensing</span>
                               </div>
                           </li>
                           <li class="fd-menu__item">
                               <div class="fd-menu__link">
                                   <span class="fd-menu__title">Fix Column</span>
                               </div>
                           </li>
                       </ul>
                   </div>
               </div>
            </div>
         </th>
         <th class="fd-table__cell fd-table__context-menu" aria-controls="col2" aria-haspopup="true" scope="col" >
            <div class="fd-popover">
               <div class="fd-popover__control">
                  <span class="fd-table__context-menu-label">Header Column</span>
               </div>
               <div class="fd-popover__body fd-popover__body--no-arrow"  aria-hidden="true" id="col2">
                  <div class="fd-menu fd-menu--compact">
                     <ul class="fd-menu__list fd-menu__list--no-shadow">
                         <li class="fd-menu__item">
                             <div class="fd-menu__link">
                                 <span class="fd-menu__title">Ascending</span>
                             </div>
                         </li>
                         <li class="fd-menu__item">
                             <div class="fd-menu__link">
                                 <span class="fd-menu__title">Decensing</span>
                             </div>
                         </li>
                         <li class="fd-menu__item">
                             <div class="fd-menu__link">
                                 <span class="fd-menu__title">Fix Column</span>
                             </div>
                         </li>
                     </ul>
                 </div>
               </div>
            </div>
         </th>
         <th class="fd-table__cell fd-table__context-menu" aria-controls="col3" aria-haspopup="true" scope="col" >
            <div class="fd-popover">
               <div class="fd-popover__control">
                  <span class="fd-table__context-menu-label">Header Column</span>
               </div>
               <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="col3">
                    <div class="fd-menu fd-menu--compact">
                       <ul class="fd-menu__list fd-menu__list--no-shadow">
                           <li class="fd-menu__item">
                               <div class="fd-menu__link">
                                   <span class="fd-menu__title">Ascending</span>
                               </div>
                           </li>
                           <li class="fd-menu__item">
                               <div class="fd-menu__link">
                                   <span class="fd-menu__title">Decensing</span>
                               </div>
                           </li>
                           <li class="fd-menu__item">
                               <div class="fd-menu__link">
                                   <span class="fd-menu__title">Fix Column</span>
                               </div>
                           </li>
                       </ul>
                   </div>
               </div>
            </div>
         </th>
      </tr>
   </thead>
   <tbody class="fd-table__body">
      <tr class="fd-table__row">
         <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
         <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
         <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
      </tr>
      <tr class="fd-table__row">
          <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
          <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
          <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
      </tr>
      <tr class="fd-table__row">
          <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
          <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
          <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
      </tr>
   </tbody>
</table>
{% endcapture %}
{% include display-component.html component=table-sort %}

<br>

## Table with Fix Column Header and context menu

* A column can be fixed by applying the `fd-table_fixed_col` css class a desired number for column width (`width: 200px` inline style in the example below)
* The `fd-table--fixed` wrapper need to be offset(`padding-left:200px`) by the same amount as defined for column width.
* `fd-table--fixed-wrapper` need to have a defined with as well to enable horizontal scrolling.

> 100% width on `fd-table--fixed-wrapper` will not render horizontal scrolling as the wrapper container will stretch to accommodate any overflow column width.

{% capture table-sort %}
<div class="fd-table--fixed-wrapper" style="width:800px;">
   <div class="fd-table--fixed">
      <table class="fd-table">
         <thead class="fd-table__header">
            <tr class="fd-table__row">
               <th class="fd-table__cell fd-table__context-menu fd-table__fixed-cell" style="left:0; width:200px" aria-controls="col1.2" aria-haspopup="true" scope="col">
                  <div class="fd-popover">
                     <div class="fd-popover__control">
                        <span class="fd-table__context-menu-label">Header Column</span>
                     </div>
                     <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="col1.2">
                        <div class="fd-menu fd-menu--compact">
                           <ul class="fd-menu__list fd-menu__list--no-shadow">
                               <li class="fd-menu__item">
                                   <div class="fd-menu__link is-active">
                                        <span class="fd-menu__addon-before sap-icon--accept"></span>
                                       <span class="fd-menu__title">Ascending</span>
                                   </div>
                               </li>
                               <li class="fd-menu__item">
                                   <div class="fd-menu__link">
                                       <span class="fd-menu__title">Decensing</span>
                                   </div>
                               </li>
                               <li class="fd-menu__item">
                                   <div class="fd-menu__link">
                                       <span class="fd-menu__title">Fix Column</span>
                                   </div>
                               </li>
                           </ul>
                       </div>
                     </div>
                  </div>
               </th>
               <th class="fd-table__cell fd-table__context-menu" aria-controls="col2.2" aria-haspopup="true" scope="col">
                  <div class="fd-popover">
                     <div class="fd-popover__control">
                        <span class="fd-table__context-menu-label">Header Column</span>
                     </div>
                     <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="col2.2">
                        <div class="fd-menu fd-menu--compact">
                           <ul class="fd-menu__list fd-menu__list--no-shadow">
                               <li class="fd-menu__item">
                                   <div class="fd-menu__link">
                                       <span class="fd-menu__title">Ascending</span>
                                   </div>
                               </li>
                               <li class="fd-menu__item">
                                   <div class="fd-menu__link">
                                       <span class="fd-menu__title">Decensing</span>
                                   </div>
                               </li>
                               <li class="fd-menu__item">
                                   <div class="fd-menu__link">
                                       <span class="fd-menu__title">Fix Column</span>
                                   </div>
                               </li>
                           </ul>
                       </div>
                     </div>
                  </div>
               </th>
               <th class="fd-table__cell fd-table__context-menu" aria-controls="col3.2" aria-haspopup="true" scope="col">
                  <div class="fd-popover">
                     <div class="fd-popover__control">
                        <span class="fd-table__context-menu-label">Header Column</span>
                     </div>
                     <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="col3.2">
                        <div class="fd-menu fd-menu--compact">
                           <ul class="fd-menu__list fd-menu__list--no-shadow">
                               <li class="fd-menu__item">
                                   <div class="fd-menu__link">
                                       <span class="fd-menu__title">Ascending</span>
                                   </div>
                               </li>
                               <li class="fd-menu__item">
                                   <div class="fd-menu__link">
                                       <span class="fd-menu__title">Decensing</span>
                                   </div>
                               </li>
                               <li class="fd-menu__item">
                                   <div class="fd-menu__link">
                                       <span class="fd-menu__title">Fix Column</span>
                                   </div>
                               </li>
                           </ul>
                       </div>
                    </div>
                  </div>
               </th>
               <th class="fd-table__cell fd-table__context-menu" aria-controls="col4.2" aria-haspopup="true" scope="col">
                  <div class="fd-popover">
                     <div class="fd-popover__control">
                        <span class="fd-table__context-menu-label">Header Column</span>
                     </div>
                     <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="col4.2">
                        <div class="fd-menu fd-menu--compact">
                           <ul class="fd-menu__list fd-menu__list--no-shadow">
                               <li class="fd-menu__item">
                                   <div class="fd-menu__link">
                                       <span class="fd-menu__title">Ascending</span>
                                   </div>
                               </li>
                               <li class="fd-menu__item">
                                   <div class="fd-menu__link">
                                       <span class="fd-menu__title">Decensing</span>
                                   </div>
                               </li>
                               <li class="fd-menu__item">
                                   <div class="fd-menu__link">
                                       <span class="fd-menu__title">Fix Column</span>
                                   </div>
                               </li>
                           </ul>
                       </div>
                     </div>
                  </div>
               </th>
               <th class="fd-table__cell fd-table__context-menu" aria-controls="col5.2" aria-haspopup="true" scope="col">
                  <div class="fd-popover">
                     <div class="fd-popover__control">
                        <span class="fd-table__context-menu-label">Header Column</span>
                     </div>
                     <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="col5.2">
                        <div class="fd-menu fd-menu--compact">
                           <ul class="fd-menu__list fd-menu__list--no-shadow">
                               <li class="fd-menu__item">
                                   <div class="fd-menu__link">
                                       <span class="fd-menu__title">Ascending</span>
                                   </div>
                               </li>
                               <li class="fd-menu__item">
                                   <div class="fd-menu__link">
                                       <span class="fd-menu__title">Decensing</span>
                                   </div>
                               </li>
                               <li class="fd-menu__item">
                                   <div class="fd-menu__link">
                                       <span class="fd-menu__title">Fix Column</span>
                                   </div>
                               </li>
                           </ul>
                       </div>
                     </div>
                  </div>
               </th>
               <th class="fd-table__cell fd-table__context-menu" aria-controls="col6.2" aria-haspopup="true" scope="col">
                  <div class="fd-popover">
                     <div class="fd-popover__control">
                        <span class="fd-table__context-menu-label">Header Column</span>
                     </div>
                     <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="col6.2">
                        <div class="fd-menu fd-menu--compact">
                           <ul class="fd-menu__list fd-menu__list--no-shadow">
                               <li class="fd-menu__item">
                                   <div class="fd-menu__link">
                                       <span class="fd-menu__title">Ascending</span>
                                   </div>
                               </li>
                               <li class="fd-menu__item">
                                   <div class="fd-menu__link">
                                       <span class="fd-menu__title">Decensing</span>
                                   </div>
                               </li>
                               <li class="fd-menu__item">
                                   <div class="fd-menu__link">
                                       <span class="fd-menu__title">Fix Column</span>
                                   </div>
                               </li>
                           </ul>
                       </div>
                     </div>
                  </div>
               </th>
               <th class="fd-table__cell fd-table__context-menu" aria-controls="col7.2" aria-haspopup="true" scope="col">
                  <div class="fd-popover">
                     <div class="fd-popover__control">
                        <span class="fd-table__context-menu-label">Header Column</span>
                     </div>
                     <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="col7.2">
                        <div class="fd-menu fd-menu--compact">
                           <ul class="fd-menu__list fd-menu__list--no-shadow">
                               <li class="fd-menu__item">
                                   <div class="fd-menu__link">
                                       <span class="fd-menu__title">Ascending</span>
                                   </div>
                               </li>
                               <li class="fd-menu__item">
                                   <div class="fd-menu__link">
                                       <span class="fd-menu__title">Decensing</span>
                                   </div>
                               </li>
                               <li class="fd-menu__item">
                                   <div class="fd-menu__link">
                                       <span class="fd-menu__title">Fix Column</span>
                                   </div>
                               </li>
                           </ul>
                       </div>
                     </div>
                  </div>
               </th>
               <th class="fd-table__cell fd-table__context-menu" aria-controls="col8.2" aria-haspopup="true" scope="col">
                  <div class="fd-popover">
                     <div class="fd-popover__control">
                        <span class="fd-table__context-menu-label">Header Column</span>
                     </div>
                     <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="col8.2">
                        <div class="fd-menu fd-menu--compact">
                           <ul class="fd-menu__list fd-menu__list--no-shadow">
                               <li class="fd-menu__item">
                                   <div class="fd-menu__link">
                                       <span class="fd-menu__title">Ascending</span>
                                   </div>
                               </li>
                               <li class="fd-menu__item">
                                   <div class="fd-menu__link">
                                       <span class="fd-menu__title">Decensing</span>
                                   </div>
                               </li>
                               <li class="fd-menu__item">
                                   <div class="fd-menu__link">
                                       <span class="fd-menu__title">Fix Column</span>
                                   </div>
                               </li>
                           </ul>
                       </div>
                     </div>
                  </div>
               </th>
            </tr>
         </thead>
         <tbody class="fd-table__body">
            <tr class="fd-table__row">
               <td class="fd-table__cell fd-table__fixed-cell" style="width:200px" scope="row">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
            </tr>
            <tr class="fd-table__row">
               <td class="fd-table__cell fd-table__fixed-cell" style="width:200px" scope="row">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
               <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
            </tr>
            <tr class="fd-table__row">
               <td class="fd-table__cell fd-table__fixed-cell" style="width:200px" scope="row">Lorem ipsum dolor sit amet ipsum</td>
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
{% include display-component.html component=table-sort %}
