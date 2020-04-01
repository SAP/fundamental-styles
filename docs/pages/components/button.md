---
title: Button
id: button
keywords: button, buttons
sidebar: left-navigation-sidebar
toc: false
permalink: components/button.html
folder: components
---
{: .docs-intro}
Buttons allow users to perform actions. All the buttons require the fd-buttonbase class and an additional modifier for each of the flavours.

{% capture button %}
<button class="fd-button">Create</button>
<button class="fd-button sap-icon--cart"></button>
<button class="fd-button fd-button--emphasized ">Save</button>
{% endcapture %}
{% include display-component.html component=button %}

There are 3 button types:

- **Simple button** for one action
<!-- - **Toggle button** for switching between different states -->
- **Segmented button** for a group of options
- **Menu button** for a group of actions

<br>

## Design Types

- **Default Button** or Standard Button for neutral or informative (secondary) actions
- **Emphasized Button** Used for primary action
- **Ghost Button**  Used for secondary actions or primary button in cases where there is already a primary button on the page
- **Positive Button** Used for positive (secondary) actions
- **Negative Button** Used for negative (secondary) actions
- **Attention Button**
- **Transparent Button** Used for secondary or negative path actions

{% capture button %}
<button class="fd-button">Default Button</button>
<button class="fd-button fd-button--emphasized">Emphasized Button</button>
<button class="fd-button fd-button--ghost">Ghost Button</button>
<button class="fd-button fd-button--positive">Positive Button</button>
<button class="fd-button fd-button--negative">Negative Button</button>
<button class="fd-button fd-button--attention">Attention Button</button>
<button class="fd-button fd-button--transparent">Transparent Button</button>
{% endcapture %}
{% include display-component.html component=button %}

<br>

## Button Types

### Simple Button

It is recommended to use simple button for specific actions, such as _Create, Edit, Save, Approve, Reject, Accept, Decline, OK, Cancel_.
All the Design type buttons can be used as simple buttons.

<!-- ### Toggle Button

Use the toggle button in a toolbar to activate/deactivate an item or element. It can also be used to switch between different states.


{% capture button %}
<button class="fd-button is-selected">Default Button</button>
<button class="fd-button fd-button--negative is-selected">Negative Toggled Button</button>
<button class="fd-button fd-button--attention is-selected">Attention Button</button>
{% endcapture %}
{% include display-component.html component=button %} -->

### Segmented Button (previously known as Button Group)

Group a series of buttons together on a single line with the segmented button. Only one of the options can be active at a time, the others remain or become inactive. The option can be activated by clicking on it. This type of button is comparable to a radio button group.

{% capture button-group-small %}

<div class="fd-segmented-button" role="group" aria-label="Group label">
  <button class="fd-button sap-icon--survey"></button>
  <button class="fd-button sap-icon--pie-chart is-selected" aria-pressed="true"></button>
  <button class="fd-button sap-icon--pool"></button>
</div>

<div class="fd-segmented-button" role="group" aria-label="Group label">
  <button class="fd-button fd-button--compact is-selected" aria-pressed="true">Left</button>
  <button class="fd-button fd-button--compact">Middle</button>
  <button class="fd-button fd-button--compact">Right</button>
</div>
{% endcapture %}
{% include display-component.html component=button-group-small %}

## Menu Button

The Menu Button allows for multiple actions.
There are two different types of menu buttons. Both can contain items with submenus.

### Regular Menu Button

When the user activates the button, the menu opens. This is the default type.

{% capture button-menu %}
<button class="fd-button fd-button--menu">Action Button</button>
<button class="fd-button fd-button--ghost fd-button--menu">Ghost Button</button>
<button class="fd-button fd-button--positive fd-button--menu">Positive Button</button>
<button class="fd-button fd-button--negative fd-button--menu">Negative Button</button>
<button class="fd-button fd-button--attention fd-button--menu">Attention Button</button>
<br><br>
<button class="fd-button fd-button--menu" aria-disabled="true" disabled>Action Button</button>
<button class="fd-button fd-button--ghost fd-button--menu" aria-disabled="true" disabled>Ghost Button</button>
<button class="fd-button fd-button--positive fd-button--menu" aria-disabled="true" disabled>Positive Button</button>
<button class="fd-button fd-button--negative fd-button--menu" aria-disabled="true" disabled>Negative Button</button>
<button class="fd-button fd-button--attention fd-button--menu" aria-disabled="true" disabled>Attention Button</button>
<br><br>
<button class="fd-button fd-button--emphasized fd-button--menu sap-icon--cart">Add to Cart</button>
<button class="fd-button fd-button--menu sap-icon--cart">Add to Cart</button>
<button class="fd-button fd-button--transparent fd-button--menu sap-icon--cart">Add to Cart</button>
<button class="fd-button fd-button--emphasized fd-button--menu fd-button--positive sap-icon--accept">Approve</button>
<button class="fd-button fd-button--negative fd-button--menu sap-icon--decline">Reject</button>
<button class="fd-button fd-button--attention fd-button--menu sap-icon--warning">Attention</button>
<br><br>
<button class="fd-button fd-button--menu sap-icon--cart"></button>
<button class="fd-button fd-button--transparent fd-button--menu sap-icon--cart"></button>
<button class="fd-button fd-button fd-button--menu sap-icon--filter"></button>
<button class="fd-button fd-button--menu fd-button--positive sap-icon--accept"></button>
<button class="fd-button fd-button--menu fd-button--negative sap-icon--decline"></button>
<button class="fd-button fd-button--menu fd-button--attention sap-icon--warning"></button>
<br><br>
<button class="fd-button fd-button--menu">Default</button>
<button class="fd-button fd-button--compact fd-button--menu">Compact</button>
{% endcapture %}
{% include display-component.html component=button-menu %}

### Split Menu Button

The menu button can also be split into 2 areas: the text label and the icon. The separator between them signals that the two areas result in different actions. The user has two choices: 1- activating the text label on the button triggers the action or 2- activating the arrow opens the menu. The split button consolidates a variety of commands, especially when one of the commands is used more often.

In split mode, the text label depends on the default action. If the default action is displayed as an icon only, all the menu items must contain icons.

**Split Menu Button Behaviors**
The split menu button can have two different behaviors:

The button always triggers the default action set by the app developer. If no default action has been defined, the first item in the menu list becomes the default.
The button triggers the last action chosen by the user. Initially, it also triggers the default action. However, when the user selects a different action, this user action becomes the default, and the button text label changes accordingly. The button has a fixed size and the text truncates if the menu item exceeds the available width (as with the combo box).

{% capture button-split %}

<div class="fd-button-split fd-has-margin-right-small" role="group" aria-label="button-split">
  <button class="fd-button sap-icon--cart" aria-label="button">Button with text</button>
  <button class="fd-button sap-icon--slim-arrow-down" aria-controls="t4c0o273" aria-haspopup="true" 
  aria-expanded="false" aria-label="More"></button>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right"  aria-hidden="true" 
  id="t4c0o273">
    <nav class="fd-menu">
        <ul class="fd-menu__list">
          <li class="fd-menu__item">
              <a class="fd-menu__link" role="button" href="#">
                  <span class="fd-menu__title">Add to list</span>
              </a>
          </li>
          <li class="fd-menu__item">
              <a class="fd-menu__link" role="button" href="#">
                  <span class="fd-menu__title">Save for later</span>
              </a>
          </li>
        </ul>
    </nav>
  </div>
</div>

<div class="fd-button-split" role="group" aria-label="button-split">
  <button class="fd-button fd-button--emphasized sap-icon--cart" aria-label="button">Button with text</button>
  <button class="fd-button fd-button--emphasized sap-icon--slim-arrow-down" aria-controls="t4c0o2732" 
  aria-haspopup="true" aria-expanded="false" aria-label="More"></button>
  <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right"  aria-hidden="true" 
    id="t4c0o2732">
    <nav class="fd-menu">
        <ul class="fd-menu__list">
          <li class="fd-menu__item">
              <a class="fd-menu__link" role="button" href="#">
                  <span class="fd-menu__title">Add to list</span>
              </a>
          </li>
          <li class="fd-menu__item">
              <a class="fd-menu__link" role="button" href="#">
                  <span class="fd-menu__title">Save for later</span>
              </a>
          </li>
        </ul>
    </nav>
  </div>
</div>

{% endcapture %}
{% include display-component.html component=button-split %}

<br>

## Content Density - Button Sizes

All the buttons support the cozy and compact form factors.

{% capture button %}
<button class="fd-button">Save</button>
<button class="fd-button fd-button sap-icon--cart">Add to Cart</button>
<button class="fd-button fd-button--ghost sap-icon--cart">Add to Cart</button>
<button class="fd-button fd-button--emphasized sap-icon--cart">Add to Cart</button>
<button class="fd-button fd-button--transparent sap-icon--cart">Add to Cart</button>
<button class="fd-button fd-button--positive sap-icon--accept">Approve</button>
<button class="fd-button fd-button--negative sap-icon--decline">Reject</button>
<button class="fd-button fd-button--attention sap-icon--warning">Attention</button>
<br><br>
<button class="fd-button fd-button--compact">Edit</button>
<button class="fd-button fd-button fd-button--compact">Edit</button>
<button class="fd-button fd-button--ghost fd-button--compact">Edit</button>
<button class="fd-button fd-button--emphasized fd-button--compact sap-icon--cart">Add to Cart</button>
<button class="fd-button fd-button--transparent fd-button--compact sap-icon--cart">Add to Cart</button>
<button class="fd-button fd-button--positive fd-button--compact sap-icon--accept">Approve</button>
<button class="fd-button fd-button--negative fd-button--compact sap-icon--decline">Reject</button>
<button class="fd-button fd-button--attention fd-button--compact sap-icon--warning">Attention</button>
{% endcapture %}
{% include display-component.html component=button %}

<br>

## Icon and Text

The buttons can contain icons and/or text. The recommendation is to use either one or the other, not both. Use icon for buttons that contain very basic standard icon metaphors (e.g. _Back to previous screen, Create a new item, Remove from list, Edit, ..._)

All button styles can be used with an icon. You can use the `sap-icon--{icon-name}` class to attach an icon to the button.
The full list of all the available icons can be found on the <a href="icon.html">icons page</a>.
{% capture button %}
<button class="fd-button fd-button--emphasized sap-icon--cart">Add to Cart</button>
<button class="fd-button sap-icon--cart">Add to Cart</button>
<button class="fd-button fd-button--transparent sap-icon--cart">Add to Cart</button>
<button class="fd-button fd-button sap-icon--cart">Add to Cart</button>
<button class="fd-button fd-button--ghost sap-icon--cart">Add to Cart</button>
<button class="fd-button fd-button--positive sap-icon--accept">Approve</button>
<button class="fd-button fd-button--negative sap-icon--decline">Reject</button>
<button class="fd-button fd-button--attention sap-icon--warning">Attention</button>
<br><br>
<button class="fd-button sap-icon--cart"></button>
<button class="fd-button fd-button--transparent sap-icon--cart"></button>
<button class="fd-button fd-button sap-icon--filter"></button>
<button class="fd-button fd-button--ghost sap-icon--filter"></button>
<button class="fd-button fd-button--positive sap-icon--accept"></button>
<button class="fd-button fd-button--negative sap-icon--decline"></button>
<button class="fd-button fd-button--attention sap-icon--decline"></button>
{% endcapture %}
{% include display-component.html component=button %}

## Standard button state

The button provides feedback for "normal", "hover", "selected", "focus" and "disabled" states:

- **Normal**: The default state of the button. It can be clicked/tapped to perform the corresponding action.
- **Selected**: Used to signal that this button is selected among other buttons. This state can be rendered using the `is-selected` class or the `aria-selected="true"` attribute for accessibility.
- **Disabled**: It cannot be clicked/tapped. This state can be rendered using the `is-disabled` class and the `aria-disabled="true"` attribute for accessibility.

{% capture button-standard-state %}
<button class="fd-button fd-button--emphasized">Normal State</button>
<button class="fd-button fd-button--emphasized is-selected" aria-selected="true">Selected State</button>
<button class="fd-button fd-button--emphasized" aria-disabled="true" disabled>Disabled State</button>
<br><br>
<button class="fd-button">Normal State</button>
<button class="fd-button is-selected" aria-selected="true">Selected State</button>
<button class="fd-button is-disabled" aria-disabled="true" disabled>Disabled State</button>
<br><br>
<button class="fd-button fd-button--transparent">Normal State</button>
<button class="fd-button fd-button--transparent is-selected" aria-selected="true">Selected State</button>
<button class="fd-button fd-button--transparent is-disabled" aria-disabled="true" disabled>Disabled State</button>
<br><br>
<button class="fd-button fd-button">Normal State</button>
<button class="fd-button fd-button is-selected" aria-selected="true">Selected State</button>
<button class="fd-button fd-button " aria-disabled="true" disabled>Disabled State</button>
<br><br>
<button class="fd-button fd-button--ghost">Normal State</button>
<button class="fd-button fd-button--ghost is-selected" aria-selected="true">Selected State</button>
<button class="fd-button fd-button--ghost" aria-disabled="true" disabled>Disabled State</button>
<br><br>
<button class="fd-button fd-button--positive">Normal State</button>
<button class="fd-button fd-button--positive is-selected" aria-selected="true">Selected State</button>
<button class="fd-button fd-button--positive" aria-disabled="true" disabled>Disabled State</button>
<br><br>
<button class="fd-button fd-button--negative">Normal State</button>
<button class="fd-button fd-button--negative is-selected" aria-selected="true">Selected State</button>
<button class="fd-button fd-button--negative" aria-disabled="true" disabled>Disabled State</button>
<br><br>
<button class="fd-button fd-button--attention">Normal State</button>
<button class="fd-button fd-button--attention is-selected" aria-selected="true">Selected State</button>
<button class="fd-button fd-button--attention" aria-disabled="true" disabled>Disabled State</button>
{% endcapture %}

{% include display-component.html component=button-standard-state %}

The priority of buttons within a page should be considered. For instance, only use the main button once within a page or dialog.
Color is also important. For instance, the most important button has a blue background whereas a red button should only be used if the action it performs is potentially destructive.

<br>

## Button RTL support

{% capture button-group-small %}

<div dir="rtl">
  <button class="fd-button fd-button--emphasized sap-icon--cart">Add to Cart</button>
  <button class="fd-button sap-icon--cart">Add to Cart</button>
  <button class="fd-button fd-button--transparent sap-icon--cart">Add to Cart</button>
  <button class="fd-button fd-button sap-icon--cart">Add to Cart</button>
  <button class="fd-button fd-button--ghost sap-icon--cart">Add to Cart</button>
  <button class="fd-button fd-button--positive sap-icon--accept">Approve</button>
  <button class="fd-button fd-button--negative sap-icon--decline">Reject</button>
  <button class="fd-button fd-button--attention sap-icon--warning">Attention</button>
  <br><br>
  <button class="fd-button fd-button--emphasized fd-button--menu sap-icon--cart">Add to Cart</button>
  <button class="fd-button fd-button--menu sap-icon--cart">Add to Cart</button>
  <button class="fd-button fd-button--transparent fd-button--menu sap-icon--cart">Add to Cart</button>
  <br><br>
  <button class="fd-button sap-icon--cart"></button>
  <button class="fd-button fd-button--transparent sap-icon--cart"></button>
  <button class="fd-button fd-button sap-icon--filter"></button>
  <button class="fd-button fd-button--ghost sap-icon--filter"></button>
  <button class="fd-button fd-button--positive sap-icon--accept"></button>
  <button class="fd-button fd-button--negative sap-icon--decline"></button>
  <button class="fd-button fd-button--attention sap-icon--decline"></button>
  <div class="fd-segmented-button" role="group" aria-label="Group label">
    <button class="fd-button sap-icon--survey"></button>
    <button class="fd-button sap-icon--pie-chart" aria-pressed="true"></button>
    <button class="fd-button sap-icon--pool"></button>
  </div>

  <div class="fd-segmented-button" role="group" aria-label="Group label">
    <button class="fd-button fd-button--compact" aria-pressed="true">Left</button>
    <button class="fd-button fd-button--compact">Middle</button>
    <button class="fd-button fd-button--compact">Right</button>
  </div>
</div>
{% endcapture %}
{% include display-component.html component=button-group-small %}
