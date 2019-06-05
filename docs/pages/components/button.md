---
title: Button
id: button
keywords: button, buttons
sidebar: left-navigation-sidebar
toc: false
permalink: components/button.html
folder: components
---

Buttons allow users to perform actions.
{: .docs-intro}
The priority of buttons within a page should be considered. For instance, only use the main button once within a page or modal.
Color is also important. For instance, the most important button has a blue background where as a red button should only be used if the action it performs is potentially destructive.

<br>

## Button Options
There are three emphasis styles used to indicate the importance of the button on the page.
- **Emphasized Button**: There should only be one highlighted button on the page. This is the primary call to action.
- **Regular Button**: The default button style and the most common button. There may be more than one on a page.
- **Light Button**: This is the lowest priority button and most often used with page content like appearing in a table or list. There may be more than one on the page.

{% capture button %}
<button class="fd-button--emphasized">Emphasized Button</button>
<button class="fd-button">Regular Button</button>
<button class="fd-button--light">Light Button</button>
{% endcapture %}
{% include display-component.html component=button %}

## Button Types

There are five button types that can be combined with the emphasis styles.
- **Action Button**: The default button
- **Standard Button**: Neutral or informative color
- **Positive Button**: Used for positive actions such as approved, ok, yes.
- **Medium Button**: Used for warnings or alert
- **Negative Button**:Used for negative actions such as decline, cancel, no.


{% capture button %}
<button class="fd-button">Action Button</button>
<button class="fd-button--standard">Standard Button</button>
<button class="fd-button--positive">Positive Button</button>
<button class="fd-button--medium">Medium Button</button>
<button class="fd-button--negative">Negative Button</button>
{% endcapture %}
{% include display-component.html component=button %}


## Button Sizes
There are two sizes.

> The compact size is only used on desktop and it is full size when used on a touch device.

{% capture button %}
<button class="fd-button">Default</button>
<button class="fd-button--compact">Compact</button>
{% endcapture %}
{% include display-component.html component=button %}


## Buttons with Icon
All buttons styles can be used with an icon. You can use the `sap-icon--{icon-name}` class to attach an icon to the button.
Full list of all the available icons can be found on the <a href="icon.html">icons page</a>.
{% capture button %}
<button class="fd-button--emphasized sap-icon--cart">Add to Cart</button>
<button class="fd-button sap-icon--cart">Add to Cart</button>
<button class="fd-button--light sap-icon--cart">Add to Cart</button>
<button class="fd-button--emphasized fd-button--positive sap-icon--accept">Approve</button>
<button class="fd-button--emphasized fd-button--negative sap-icon--decline">Reject</button>
<br><br>
<button class="fd-button sap-icon--cart"></button>
<button class="fd-button--light sap-icon--cart"></button>
<button class="fd-button--standard sap-icon--filter"></button>
<button class="fd-button--emphasized fd-button--positive sap-icon--accept"></button>
<button class="fd-button--emphasized fd-button--negative sap-icon--decline"></button>
{% endcapture %}
{% include display-component.html component=button %}


## Standard button state
The buttons can also be set to a state:

* **Normal**: The default state of the button. It can be clicked/tapped to perform the corresponding action.
* **Selected**: Used to signal this button is selected among other buttons. This state can be rendered using `is-selected` class or `aria-selected="true"` attribute for accessibility.
* **Disabled**: It cannot be clicked/tapped. This state can be rendered using `is-disabled` class or `aria-disabled="true"` attribute for accessibility.

{% capture button-standard-state %}
<button class="fd-button--emphasized">Normal State</button>
<button class="fd-button--emphasized" aria-selected="true">Selected State</button>
<button class="fd-button--emphasized" aria-disabled="true">Disabled State</button>
<br><br>
<button class="fd-button">Normal State</button>
<button class="fd-button" aria-selected="true">Selected State</button>
<button class="fd-button" aria-disabled="true">Disabled State</button>
<br><br>
<button class="fd-button--light">Normal State</button>
<button class="fd-button--light" aria-selected="true">Selected State</button>
<button class="fd-button--light" aria-disabled="true">Disabled State</button>
<br><br>
<button class="fd-button--standard">Normal State</button>
<button class="fd-button--standard" aria-selected="true">Selected State</button>
<button class="fd-button--standard" aria-disabled="true">Disabled State</button>
<br><br>
<button class="fd-button--positive">Normal State</button>
<button class="fd-button--positive" aria-selected="true">Selected State</button>
<button class="fd-button--positive" aria-disabled="true">Disabled State</button>
<br><br>
<button class=" fd-button--negative">Normal State</button>
<button class=" fd-button--negative" aria-selected="true">Selected State</button>
<button class=" fd-button--negative" aria-disabled="true">Disabled State</button>
{% endcapture %}

{% include display-component.html component=button-standard-state %}


# Button Group
Group a series of buttons together on a single line with the button group.

{% capture button-group-small %}
<div class="fd-button-group" role="group" aria-label="Group label">
  <button class="fd-button sap-icon--survey"></button>
  <button class="fd-button sap-icon--pie-chart" aria-pressed="true"></button>
  <button class="fd-button sap-icon--pool"></button>
</div>

<div class="fd-button-group" role="group" aria-label="Group label">
  <button class="fd-button fd-button--compact" aria-pressed="true">Left</button>
  <button class="fd-button fd-button--compact">Middle</button>
  <button class="fd-button fd-button--compact">Right</button>
</div>
{% endcapture %}
{% include display-component.html component=button-group-small %}

# Split Button

Button with multiple actions

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
  <button class="fd-button--emphasized sap-icon--cart" aria-label="button">Button with text</button>
  <button class="fd-button--emphasized sap-icon--slim-arrow-down" aria-controls="t4c0o2732" 
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

## Button RTL support


{% capture button-group-small %}
<div dir="rtl">
  <button class="fd-button--emphasized sap-icon--cart">Add to Cart</button>
  <button class="fd-button sap-icon--cart">Add to Cart</button>
  <button class="fd-button--light sap-icon--cart">Add to Cart</button>
  <button class="fd-button--emphasized fd-button--positive sap-icon--accept">Approve</button>
  <button class="fd-button--emphasized fd-button--negative sap-icon--decline">Reject</button>
  <br><br>
  <button class="fd-button sap-icon--cart"></button>
  <button class="fd-button--light sap-icon--cart"></button>
  <button class="fd-button--standard sap-icon--filter"></button>
  <button class="fd-button--emphasized fd-button--positive sap-icon--accept"></button>
  <button class="fd-button--emphasized fd-button--negative sap-icon--decline"></button>
  <div class="fd-button-group" role="group" aria-label="Group label">
    <button class="fd-button sap-icon--survey"></button>
    <button class="fd-button sap-icon--pie-chart" aria-pressed="true"></button>
    <button class="fd-button sap-icon--pool"></button>
  </div>

  <div class="fd-button-group" role="group" aria-label="Group label">
    <button class="fd-button fd-button--compact" aria-pressed="true">Left</button>
    <button class="fd-button fd-button--compact">Middle</button>
    <button class="fd-button fd-button--compact">Right</button>
  </div>
</div>
{% endcapture %}
{% include display-component.html component=button-group-small %}

<br>

<style media="screen">
  .fd-button,
  .fd-button-group,
  [class*="fd-button--"] {
    margin-right: 10px;
  }

  .fd-button-group [class*="fd-button"] {
    margin-right: 0px;
  }
  .fd-button-split .fd-button--emphasized,
  .fd-button-split .fd-button
  {
    margin-right: 0;
  }
</style>