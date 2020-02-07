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
<button class="fd-button fd-button--emphasized">
  <span class="fd-button--content">Emphasized Button</span>
</button>
<button class="fd-button">
  <span class="fd-button--content">Regular Button</span>
</button>
<button class="fd-button fd-button--light">
  <span class="fd-button--content">Light Button</span>
</button>
{% endcapture %}
{% include display-component.html component=button %}

## Button Types

There are five button types that can be combined with the emphasis styles.
- **Action Button**: The default button
- **Standard Button**: Neutral or informative color
- **Positive Button**: Used for positive actions such as approved, ok, yes.
- **Medium Button**: Used for warnings or inside message strips
- **Negative Button**:Used for negative actions such as decline, cancel, no.


{% capture button %}
<button class="fd-button">
  <span class="fd-button--content">Action Button</span>
</button>
<button class="fd-button fd-button--standard">
  <span class="fd-button--content">Standard Button</span>
</button>
<button class="fd-button fd-button--positive">
  <span class="fd-button--content">Positive Button</span>
</button>
<button class="fd-button fd-button--negative">
  <span class="fd-button--content">Negative Button</span>
</button>
{% endcapture %}
{% include display-component.html component=button %}


## Button Sizes
There are two sizes.

> The compact size is only used on desktop and it is full size when used on a touch device.

{% capture button %}
<button class="fd-button">
  <span class="fd-button--content">Default</span>
</button>
<button class="fd-button fd-button--compact">
  <span class="fd-button--content">Compact</span>
</button>
{% endcapture %}
{% include display-component.html component=button %}


## Buttons with Icon
All buttons styles can be used with an icon. You can use the `sap-icon--{icon-name}` class to attach an icon to the button.
Full list of all the available icons can be found on the <a href="icon.html">icons page</a>.
{% capture button %}
<button class="fd-button fd-button--emphasized">
  <span class="fd-button--content sap-icon--cart">Add to Cart
  </span>
</button>
<button class="fd-button">
  <span class="fd-button--content sap-icon--cart">Add to Cart
  </span>
</button>
<button class="fd-button fd-button--light">
  <span class="fd-button--content sap-icon--cart">Add to Cart</span>
</button>
<button class="fd-button fd-button--positive">
  <span class="fd-button--content sap-icon--accept">Approve</span>
</button>
<button class="fd-button fd-button--negative">
  <span class="fd-button--content sap-icon--decline">Reject</span>
</button>

<br><br>

<button class="fd-button">
  <span class="fd-button--content sap-icon--cart"></span>
</button>
<button class="fd-button fd-button--light">
  <span class="fd-button--content sap-icon--cart"></span>
</button>
<button class="fd-button fd-button--standard">
  <span class="fd-button--content sap-icon--filter"></span>
</button>
<button class="fd-button fd-button--positive">
  <span class="fd-button--content sap-icon--accept"></span>
</button>
<button class="fd-button fd-button--negative">
  <span class="fd-button--content sap-icon--decline"></span>
</button>
{% endcapture %}
{% include display-component.html component=button %}


## Standard button state
The buttons can also be set to a state:

* **Normal**: The default state of the button. It can be clicked/tapped to perform the corresponding action.
* **Selected**: Used to signal this button is selected among other buttons. This state can be rendered using `is-selected` class or `aria-selected="true"` attribute for accessibility.
* **Disabled**: It cannot be clicked/tapped. This state can be rendered using `is-disabled` class or `aria-disabled="true"` attribute for accessibility.

{% capture button-standard-state %}
<button class="fd-button fd-button--emphasized">
  <span class="fd-button--content">Normal State</span>
</button>
<button class="fd-button fd-button--emphasized" aria-selected="true">
  <span class="fd-button--content">Selected State</span>
</button>
<button class="fd-button fd-button--emphasized" aria-disabled="true">
  <span class="fd-button--content">Disabled State</span>
</button>
<br><br>
<button class="fd-button">
  <span class="fd-button--content">Normal State</span>
</button>
<button class="fd-button" aria-selected="true">
  <span class="fd-button--content">Selected State</span>
</button>
<button class="fd-button" aria-disabled="true">
  <span class="fd-button--content">Disabled State</span>
</button>
<br><br>
<button class="fd-button fd-button--light">
  <span class="fd-button--content">Normal State</span>
</button>
<button class="fd-button fd-button--light" aria-selected="true">
  <span class="fd-button--content">Selected State</span>
</button>
<button class="fd-button fd-button--light" aria-disabled="true">
  <span class="fd-button--content">Disabled State</span>
</button>
<br><br>
<button class="fd-button fd-button--standard">
  <span class="fd-button--content">Normal State</span>
</button>
<button class="fd-button fd-button--standard" aria-selected="true">
  <span class="fd-button--content">Selected State</span>
</button>
<button class="fd-button fd-button--standard" aria-disabled="true">
  <span class="fd-button--content">Disabled State</span>
</button>
<br><br>
<button class="fd-button fd-button--positive">
  <span class="fd-button--content">Normal State</span>
</button>
<button class="fd-button fd-button--positive" aria-selected="true">
  <span class="fd-button--content">Selected State</span>
</button>
<button class="fd-button fd-button--positive" aria-disabled="true">
  <span class="fd-button--content">Disabled State</span>
</button>
<br><br>
<button class="fd-button fd-button--negative">
  <span class="fd-button--content">Normal State</span>
</button>
<button class="fd-button fd-button--negative" aria-selected="true">
  <span class="fd-button--content">Selected State</span>
</button>
<button class="fd-button fd-button--negative" aria-disabled="true">
  <span class="fd-button--content">Disabled State</span>
</button>
{% endcapture %}

{% include display-component.html component=button-standard-state %}


# Button Group
Group a series of buttons together on a single line with the button group.

{% capture segmented-button-small %}
<div class="fd-segmented-button" role="group" aria-label="Group label">
  <button class="fd-button">
    <span class="fd-button--content sap-icon--survey"></span>
  </button>
  <button class="fd-button" aria-pressed="true">
    <span class="fd-button--content sap-icon--pie-chart"></span>
  </button>
  <button class="fd-button">
    <span class="fd-button--content sap-icon--pool"></span>
  </button>
</div>

<div class="fd-segmented-button" role="group" aria-label="Group label">
  <button class="fd-button fd-button--compact" aria-pressed="true">
    <span class="fd-button--content">Left</span>
  </button>
  <button class="fd-button fd-button--compact">
    <span class="fd-button--content">Middle</span>
  </button>
  <button class="fd-button fd-button--compact">
    <span class="fd-button--content">Right</span>
  </button>
</div>
{% endcapture %}
{% include display-component.html component=segmented-button-small %}

# Split Button
Button with multiple actions

{% capture button-split %}
<div class="fd-button-split" role="group" aria-label="button-split">
  <button class="fd-button" aria-label="button">
    <span class="fd-button--content sap-icon--cart">Button with text</span>
  </button>
  <button class="fd-button" aria-controls="t4c0o273" aria-haspopup="true" 
  aria-expanded="false" aria-label="More">
    <span class="fd-button--content sap-icon--slim-arrow-down"></span>
  </button>
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
  <button class="fd-button fd-button--emphasized" aria-label="button">
    <span class="fd-button--content sap-icon--cart">Button with text</span>
  </button>
  <button class="fd-button fd-button--emphasized" aria-controls="t4c0o2732" 
  aria-haspopup="true" aria-expanded="false" aria-label="More">
    <span class="fd-button--content sap-icon--slim-arrow-down"></span>
  </button>
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

<div class="fd-button-split" role="group" aria-label="button-split">
  <button class="fd-button fd-button--compact" aria-label="button">
    <span class="fd-button--content sap-icon--cart">Button with text</span>
  </button>
  <button class="fd-button fd-button--compact" aria-controls="t4c0o273" aria-haspopup="true" 
  aria-expanded="false" aria-label="More">
    <span class="fd-button--content sap-icon--slim-arrow-down"></span>
  </button>
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

{% endcapture %}
{% include display-component.html component=button-split %}

## Button RTL support


{% capture segmented-button-small %}
<div dir="rtl">
  <button class="fd-button fd-button--emphasized">
    <span class="fd-button--content sap-icon--cart">Add to Cart</span>
  </button>
  <button class="fd-button">
    <span class="fd-button--content sap-icon--cart">Add to Cart</span>
  </button>
  <button class="fd-button fd-button--light">
    <span class="fd-button--content sap-icon--cart">Add to Cart</span>
  </button>
  <button class="fd-button fd-button--positive">
    <span class="fd-button--content sap-icon--accept">Approve</span>
  </button>
  <button class="fd-button fd-button--negative">
    <span class="fd-button--content sap-icon--decline">Reject</span>
  </button>
  <br><br>
  <button class="fd-button fd-button--emphasized fd-button--menu">
    <span class="fd-button--content sap-icon--cart">Add to Cart</span>
  </button>
  <button class="fd-button fd-button--menu">
    <span class="fd-button--content sap-icon--cart">Add to Cart</span>
  </button>
  <button class="fd-button fd-button--light fd-button--menu">
    <span class="fd-button--content sap-icon--cart">Add to Cart</span>
  </button>
  <button class="fd-button fd-button--emphasized fd-button--positive fd-button--menu">
    <span class="fd-button--content sap-icon--accept">Approve</span>
  </button>
  <button class="fd-button fd-button--emphasized fd-button--negative fd-button--menu">
    <span class="fd-button--content sap-icon--decline">Reject</span>
  </button>
  <br><br>
  <button class="fd-button">
    <span class="fd-button--content sap-icon--cart"></span>
  </button>
  <button class="fd-button fd-button--light">
    <span class="fd-button--content sap-icon--cart"></span>
  </button>
  <button class="fd-button fd-button--standard">
    <span class="fd-button--content sap-icon--filter"></span>
  </button>
  <button class="fd-button fd-button--positive">
    <span class="fd-button--content sap-icon--accept"></span>
  </button>
  <button class="fd-button fd-button--negative">
    <span class="fd-button--content sap-icon--decline"></span>
  </button>
  <div class="fd-segmented-button" role="group" aria-label="Group label">
    <button class="fd-button">
      <span class="fd-button--content sap-icon--survey"></span>
    </button>
    <button class="fd-button" aria-pressed="true">
      <span class="fd-button--content sap-icon--pie-chart"></span>
    </button>
    <button class="fd-button">
      <span class="fd-button--content sap-icon--pool"></span>
    </button>
  </div>

  <div class="fd-segmented-button" role="group" aria-label="Group label">
    <button class="fd-button fd-button--compact" aria-pressed="true">
      <span class="fd-button--content">Left</span>
    </button>
    <button class="fd-button fd-button--compact">
      <span class="fd-button--content">Middle</span>
    </button>
    <button class="fd-button fd-button--compact">
      <span class="fd-button--content">Right</span>
    </button>
  </div>
</div>
{% endcapture %}
{% include display-component.html component=segmented-button-small %}


## Menu Button

{% capture button-menu %}
<button class="fd-button fd-button--menu">
  <span class="fd-button--content">Action Button</span>
</button>
<button class="fd-button fd-button--standard fd-button--menu">
  <span class="fd-button--content">Standard Button</span>
</button>
<button class="fd-button fd-button--positive fd-button--menu">
  <span class="fd-button--content">Positive Button</span>
</button>
<button class="fd-button fd-button--negative fd-button--menu">
  <span class="fd-button--content">Negative Button</span>
</button>
<br><br>
<button class="fd-button fd-button--menu" aria-disabled="true">
  <span class="fd-button--content">Action Button</span>
</button>
<button class="fd-button fd-button--standard fd-button--menu" aria-disabled="true">
  <span class="fd-button--content">Standard Button</span>
</button>
<button class="fd-button fd-button--positive fd-button--menu" aria-disabled="true">
  <span class="fd-button--content">Positive Button</span>
</button>
<button class="fd-button fd-button--negative fd-button--menu" aria-disabled="true">
  <span class="fd-button--content">Negative Button</span>
</button>
<br><br>
<button class="fd-button fd-button--emphasized fd-button--menu">
  <span class="fd-button--content sap-icon--cart">Add to Cart</span>
</button>
<button class="fd-button fd-button--menu">
  <span class="fd-button--content sap-icon--cart">Add to Cart</span>
</button>
<button class="fd-button fd-button--light fd-button--menu">
  <span class="fd-button--content sap-icon--cart">Add to Cart</span>
</button>
<button class="fd-button fd-button--emphasized fd-button--menu fd-button--positive">
  <span class="fd-button--content sap-icon--accept">Approve</span>
</button>
<button class="fd-button fd-button--negative fd-button--menu">
  <span class="fd-button--content sap-icon--decline">Reject</span>
</button>
<br><br>
<button class="fd-button fd-button--menu">
  <span class="fd-button--content sap-icon--cart"></span>
</button>
<button class="fd-button fd-button--light fd-button--menu ">
  <span class="fd-button--content sap-icon--cart"></span>
</button>
<button class="fd-button fd-button--standard fd-button--menu">
  <span class="fd-button--content sap-icon--filter"></span>
</button>
<button class="fd-button fd-button--menu fd-button--positive">
  <span class="fd-button--content sap-icon--accept"></span>
</button>
<button class="fd-button fd-button--menu fd-button--negative">
  <span class="fd-button--content sap-icon--decline"></span>
</button>
<br><br>
<button class="fd-button fd-button--menu">
  <span class="fd-button--content">Default</span>
</button>
<button class="fd-button fd-button--compact fd-button--menu">
  <span class="fd-button--content">Compact</span>
</button>
{% endcapture %}
{% include display-component.html component=button-menu %}
