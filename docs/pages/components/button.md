---
title: Button
id: button
keywords: button, buttons
sidebar: left-navigation-sidebar
toc: false
permalink: components/button.html
folder: components
---

Buttons allow users to perform actions. All the buttons require base class `fd-button` and additional modifier for all the flavours.

{% capture button %}
<button class="fd-button">Create</button>
<button class="fd-button sap-icon--cart"></button>
<button class="fd-button fd-button--emphasized ">Save</button>
{% endcapture %}
{% include display-component.html component=button %}

{: .docs-intro}
There are 4 button types:
- **Simple button** for one action.
- **Toggle button** for switching between different states.
- **Segmented button** for a group of options.
- **Menu button** with a group of actions.

<br>


## Design Types
- **Default Button**
- **Emphasized Button** Used for primary action
- **Ghost Button** It is used for secondary actions or primary button in case there is already a page primary button
- **Standard Button** Neutral or informative (secondary) actions
- **Positive Button** Used for positive (secondary) actions
- **Negative Button** Used for negative (secondary) actions
- **Attention Button** 
- **Transparent Button** Used for secondary or negative path actions

{% capture button %}
<button class="fd-button">Default Button</button>
<button class="fd-button fd-button--emphasized">Emphasized Button</button>
<button class="fd-button fd-button--ghost">Ghost Button</button>
<button class="fd-button fd-button--standard">Standard Button</button>
<button class="fd-button fd-button--positive">Positive Button</button>
<button class="fd-button fd-button--negative">Negative Button</button>
<button class="fd-button fd-button--attention">Attention Button</button>
<button class="fd-button fd-button--transparent">Transparent Button</button>
{% endcapture %}
{% include display-component.html component=button %}

<br> 

## Button Types

### Simple Button
It is recommended to use simple button for specific actions, such as *Create, Edit, Save, Approve, Reject, Accept, Decline, OK, Cancel*
All the Design type buttons can be used as simple buttons.

### Toggle Button
Use toggle button in a toolbar to activate/deactivate item or element. Another user case is to switch between different states.



### Segmented Button (previously known as Button Group)
Group a series of buttons together on a single line with the segmented button. Only one of the options can be active, the others remain or become inactive. Pressing an option activates it. This type of buttons is comparable to a radio button group.

{% capture button-group-small %}
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
{% endcapture %}
{% include display-component.html component=button-group-small %}

## Menu Button
Button with multiple actions. 
There are two different types of menu buttons. Both can contain items with submenus.

### Regular Menu Button
When the user activates the button, the menu opens. This is the default type.

{% capture button-menu %}
<button class="fd-button fd-button--menu">Action Button</button>
<button class="fd-button fd-button--standard fd-button--menu">Standard Button</button>
<button class="fd-button fd-button--positive fd-button--menu">Positive Button</button>
<button class="fd-button fd-button--negative fd-button--menu">Negative Button</button>
<button class="fd-button fd-button--attention fd-button--menu">Attention Button</button>
<br><br>
<button class="fd-button fd-button--menu" aria-disabled="true">Action Button</button>
<button class="fd-button fd-button--standard fd-button--menu" aria-disabled="true">Standard Button</button>
<button class="fd-button fd-button--positive fd-button--menu" aria-disabled="true">Positive Button</button>
<button class="fd-button fd-button--negative fd-button--menu" aria-disabled="true">Negative Button</button>
<button class="fd-button fd-button--attention fd-button--menu" aria-disabled="true">Attention Button</button>
<br><br>
<button class="fd-button fd-button--emphasized fd-button--menu sap-icon--cart">Add to Cart</button>
<button class="fd-button fd-button--menu sap-icon--cart">Add to Cart</button>
<button class="fd-button fd-button--light fd-button--menu sap-icon--cart">Add to Cart</button>
<button class="fd-button fd-button--emphasized fd-button--menu fd-button--positive sap-icon--accept">Approve</button>
<button class="fd-button fd-button--negative fd-button--menu sap-icon--decline">Reject</button>
<button class="fd-button fd-button--attention fd-button--menu sap-icon--warning">Attention</button>
<br><br>
<button class="fd-button fd-button--menu sap-icon--cart"></button>
<button class="fd-button fd-button--light fd-button--menu sap-icon--cart"></button>
<button class="fd-button fd-button--standard fd-button--menu sap-icon--filter"></button>
<button class="fd-button fd-button--menu fd-button--positive sap-icon--accept"></button>
<button class="fd-button fd-button--menu fd-button--negative sap-icon--decline"></button>
<button class="fd-button fd-button--menu fd-button--attention sap-icon--warning"></button>
<br><br>
<button class="fd-button fd-button--menu">Default</button>
<button class="fd-button fd-button--compact fd-button--menu">Compact</button>
{% endcapture %}
{% include display-component.html component=button-menu %}

### Split Menu Button
It is separate into 2 areas: the text label and the icon. The separator between them signals that the two areas result in different actions. The user has two choices: activating the text label on the button triggers the action. Activating the arrow opens the menu. The split button consolidates a variety of commands, especially when one of the commands is used more often.

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
          <li><a role="button" class="fd-menu__item">Add to list</a>
        </li>
          <li><a role="button" class="fd-menu__item">Save for later</a>
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
          <li><a role="button" class="fd-menu__item">Add to list</a>
        </li>
          <li><a role="button" class="fd-menu__item">Save for later</a>
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
Add more examples
<button class="fd-button">Save</button>
<button class="fd-button fd-button--compact">Edit</button>
{% endcapture %}
{% include display-component.html component=button %}

<br>

## Icon and Text

The buttons can have icon and/or text. The recommendation is to have either text or icon. Use icon for buttons only for very basic standard icon metaphores (e.g. *Back to previous screen, Create a new item, Remove from list, Edit, ...*)

All buttons styles can be used with an icon. You can use the `sap-icon--{icon-name}` class to attach an icon to the button.
Full list of all the available icons can be found on the <a href="icon.html">icons page</a>.
{% capture button %}
<button class="fd-button fd-button--emphasized sap-icon--cart">Add to Cart</button>
<button class="fd-button sap-icon--cart">Add to Cart</button>
<button class="fd-button fd-button--light sap-icon--cart">Add to Cart</button>
<button class="fd-button fd-button--positive sap-icon--accept">Approve</button>
<button class="fd-button fd-button--negative sap-icon--decline">Reject</button>
<button class="fd-button fd-button--attention sap-icon--warning">Attention</button>
<br><br>
<button class="fd-button sap-icon--cart"></button>
<button class="fd-button fd-button--light sap-icon--cart"></button>
<button class="fd-button fd-button--standard sap-icon--filter"></button>
<button class="fd-button fd-button--positive sap-icon--accept"></button>
<button class="fd-button fd-button--negative sap-icon--decline"></button>
<button class="fd-button fd-button--attention sap-icon--decline"></button>
{% endcapture %}
{% include display-component.html component=button %}



## Standard button state
The buttons can also be set to a state:

* **Normal**: The default state of the button. It can be clicked/tapped to perform the corresponding action.
* **Selected**: Used to signal this button is selected among other buttons. This state can be rendered using `is-selected` class or `aria-selected="true"` attribute for accessibility.
* **Disabled**: It cannot be clicked/tapped. This state can be rendered using `is-disabled` class or `aria-disabled="true"` attribute for accessibility.

{% capture button-standard-state %}
<button class="fd-button fd-button--emphasized">Normal State</button>
<button class="fd-button fd-button--emphasized" aria-selected="true">Selected State</button>
<button class="fd-button fd-button--emphasized" aria-disabled="true">Disabled State</button>
<br><br>
<button class="fd-button">Normal State</button>
<button class="fd-button" aria-selected="true">Selected State</button>
<button class="fd-button" aria-disabled="true">Disabled State</button>
<br><br>
<button class="fd-button fd-button--light">Normal State</button>
<button class="fd-button fd-button--light" aria-selected="true">Selected State</button>
<button class="fd-button fd-button--light" aria-disabled="true">Disabled State</button>
<br><br>
<button class="fd-button fd-button--standard">Normal State</button>
<button class="fd-button fd-button--standard" aria-selected="true">Selected State</button>
<button class="fd-button fd-button--standard" aria-disabled="true">Disabled State</button>
<br><br>
<button class="fd-button fd-button--positive">Normal State</button>
<button class="fd-button fd-button--positive" aria-selected="true">Selected State</button>
<button class="fd-button fd-button--positive" aria-disabled="true">Disabled State</button>
<br><br>
<button class="fd-button fd-button--negative">Normal State</button>
<button class="fd-button fd-button--negative" aria-selected="true">Selected State</button>
<button class="fd-button fd-button--negative" aria-disabled="true">Disabled State</button>
<br><br>
<button class="fd-button fd-button--attention">Normal State</button>
<button class="fd-button fd-button--attention" aria-selected="true">Selected State</button>
<button class="fd-button fd-button--attention" aria-disabled="true">Disabled State</button>
{% endcapture %}

{% include display-component.html component=button-standard-state %}







The priority of buttons within a page should be considered. For instance, only use the main button once within a page or dialog.
Color is also important. For instance, the most important button has a blue background where as a red button should only be used if the action it performs is potentially destructive.

<br>

## Button RTL support

{% capture button-group-small %}
<div dir="rtl">
  <button class="fd-button fd-button--emphasized sap-icon--cart">Add to Cart</button>
  <button class="fd-button sap-icon--cart">Add to Cart</button>
  <button class="fd-button fd-button--light sap-icon--cart">Add to Cart</button>
  <button class="fd-button fd-button--positive sap-icon--accept">Approve</button>
  <button class="fd-button fd-button--negative sap-icon--decline">Reject</button>
  <button class="fd-button fd-button--attention sap-icon--warning">Attention</button>
  <br><br>
  <button class="fd-button fd-button--emphasized fd-button--menu sap-icon--cart">Add to Cart</button>
  <button class="fd-button fd-button--menu sap-icon--cart">Add to Cart</button>
  <button class="fd-button fd-button--light fd-button--menu sap-icon--cart">Add to Cart</button>
  <br><br>
  <button class="fd-button sap-icon--cart"></button>
  <button class="fd-button fd-button--light sap-icon--cart"></button>
  <button class="fd-button fd-button--standard sap-icon--filter"></button>
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
