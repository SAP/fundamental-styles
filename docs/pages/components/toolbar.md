---
title: Toolbar
id: toolbar
keywords: toolbar
sidebar: left-navigation-sidebar
toc: false
permalink: components/toolbar.html
folder: components
summary:
---

The toolbar enables the user to change the UI or trigger an action. For example, the toolbar allows the user to change views, manipulate data or objects, navigate to another page, perform generic actions, and so on.  It is most commonly used to display buttons, labels, selects and various other input controls.
{: .docs-intro}

## Toolbar types

### Solid

The toolbar has a solid background by default.

{% capture toolbar %}

  <div class="fd-toolbar fd-toolbar--solid">
    <span>Title</span>
    <button class="fd-button fd-button--compact fd-button--transparent">Action1</button>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"> </span>
    <button class="fd-button fd-button--compact fd-button--transparent">Action2</button>
    <button class="fd-button fd-button--compact fd-button--transparent">Action3</button>
    <span class="fd-toolbar__separator"></span>
    <button class="fd-button fd-button--compact fd-button--transparent sap-icon--survey"></button>
    <button class="fd-button fd-button--compact fd-button--transparent sap-icon--pool"></button>
    <button class="fd-button fd-button--compact fd-button--transparent sap-icon--pie-chart"></button>
  </div>

{% endcapture %}
{% include display-component.html component=toolbar %}

### Auto

The toolbar can be inserted into other controls and can inherit the design from the parent control by passing `auto` to the `fd-toolbar` class.

{% capture toolbar %}

  <div class="fd-toolbar fd-toolbar--clear fd-toolbar--auto">
    <button class="fd-button fd-button--compact fd-button--transparent">Action</button>
    <button class="fd-button fd-button--compact fd-button--transparent">Action2</button>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"> </span>
    <button class="fd-button fd-button--compact fd-button--transparent">Action3</button>
    <button class="fd-button fd-button--compact fd-button--transparent">Action4</button>
    <span class="fd-toolbar__separator"></span>
    <button class="fd-button fd-button--compact fd-button--transparent sap-icon--survey"></button>
    <button class="fd-button fd-button--compact fd-button--transparent sap-icon--pool"></button>
    <button class="fd-button fd-button--compact fd-button--transparent sap-icon--pie-chart"></button>
  </div>

{% endcapture %}
{% include display-component.html component=toolbar %}

### Transparent

The toolbar also supports a transparent background which can be achieved by passing `transparent` to the `fd-toolbar` class.

{% capture toolbar %}

  <div class="fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
    <button class="fd-button fd-button--compact fd-button--transparent">Action1</button>
    <button class="fd-button fd-button--compact fd-button--transparent">Action2</button>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"> </span>
    <button class="fd-button fd-button--compact fd-button--transparent">Action3</button>
    <button class="fd-button fd-button--compact fd-button--transparent">Action4</button>
    <span class="fd-toolbar__separator"></span>
    <button class="fd-button fd-button--compact fd-button--transparent sap-icon--survey"></button>
    <button class="fd-button fd-button--compact fd-button--transparent sap-icon--pool"></button>
    <button class="fd-button fd-button--compact fd-button--transparent sap-icon--pie-chart"></button>
  </div>

{% endcapture %}
{% include display-component.html component=toolbar %}

### Info

The Info toolbar is commonly used to show information (text or icons) and is slightly smaller than the regular toolbar in size. It can be achieved by passing `info` to the `fd-toolbar` class.

{% capture toolbar %}

  <div class="fd-toolbar fd-toolbar--info">
    3 item selected
  </div>

{% endcapture %}
{% include display-component.html component=toolbar %}

### Title

The Title toolbar should be used whenever a title needs to be included. It can be achieved by passing `title` to the `fd-toolbar` class.

{% capture toolbar %}

  <div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin-bottom:0px;">Title</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
    <button class="fd-button fd-button--compact fd-button--transparent">opt1</button>
    <button class="fd-button fd-button--compact fd-button--transparent">opt2</button>
  </div>

{% endcapture %}
{% include display-component.html component=toolbar %}

## Active toolbar

The Active toolbar can be used to enable hover and select behaviours in toolbar by passing `active` in the `fd-toolbar` class.

{% capture toolbar %}

  <div class="fd-toolbar fd-toolbar--active fd-toolbar--solid">
    <span>Title</span>
    <button class="fd-button fd-button--compact fd-button--transparent">Action1</button>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"> </span>
    <button class="fd-button fd-button--compact fd-button--transparent">Action2</button>
    <button class="fd-button fd-button--compact fd-button--transparent">Action3</button>
    <span class="fd-toolbar__separator"></span>
    <button class="fd-button fd-button--compact fd-button--transparent">Action4</button>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"> </span>
    <button class="fd-button fd-button--compact fd-button--transparent">Action5</button>
  </div>

{% endcapture %}
{% include display-component.html component=toolbar %}

## Spacer

Spacers can be used to fill any remaining space either automatically or manually within a toolbar.

### Auto

To create a spacer that automatically fills the remaining width in the toolbar, pass `auto` in the `fd-toolbar_spacer` class.

{% capture toolbar %}

  <div class="fd-toolbar fd-toolbar--info fd-toolbar--active">
    <span>text</span>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
    <span>text</span>
  </div>

{% endcapture %}
{% include display-component.html component=toolbar %}

### Fixed

To set the width of a spacer manually, pass the desired width using the `fixed` and `style` modifiers in the `fd-toolbar_spacer` class as seen below.

{% capture toolbar %}

  <div class="fd-toolbar fd-toolbar--info">
    <span>text</span>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--fixed" style="width:150px;"></span>
    <span>text</span>
  </div>

{% endcapture %}
{% include display-component.html component=toolbar %}

## Separator

Separators should be used to visually separate items from each other.

{% capture toolbar %}

  <div class="fd-toolbar fd-toolbar--info">
    <span>text</span>
    <span class="fd-toolbar__separator"></span>
    <span>text</span>
  </div>
  
  <br>
  
  <div class="fd-toolbar fd-toolbar--solid">
    <span>text</span>
    <span class="fd-toolbar__separator"></span>
    <span>text</span>
  </div>

{% endcapture %}
{% include display-component.html component=toolbar %}

## Size

The default size of the toolbar is compact but this can be changed by passing the `fd-toolbar--cozy` modifier in the `fd-toolbar` class.

{% capture toolbar %}

  <div class="fd-toolbar fd-toolbar--solid fd-toolbar--cozy">
    <span>Title</span>
    <button class="fd-button fd-button--compact fd-button--transparent">Button</button>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"> </span>
    <button class="fd-button fd-button--compact fd-button--transparent">Button</button>
    <button class="fd-button fd-button--compact fd-button--transparent">Button</button>
    <span class="fd-toolbar__separator"></span>
    <button class="fd-button fd-button--compact fd-button--transparent sap-icon--survey"></button>
    <button class="fd-button fd-button--compact fd-button--transparent sap-icon--pool"></button>
    <button class="fd-button fd-button--compact fd-button--transparent sap-icon--pie-chart"></button>
  </div>

{% endcapture %}
{% include display-component.html component=toolbar %}

## Overflow

The only addition OverflowToolbar has is the ability to place input elements in a popover when
there is not enough space

{% capture toolbar %}

  <div class="fd-toolbar fd-toolbar--solid fd-toolbar--cozy">
    <span>Title</span>
    <button class="fd-button fd-button--compact fd-button--transparent">Button</button>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"> </span>
    <button class="fd-button fd-button--compact fd-button--transparent">Button</button>
    <button class="fd-button fd-button--compact fd-button--transparent">Button</button>
    <span class="fd-toolbar__separator"></span>
    <div class="fd-popover fd-toolbar__overflow">
      <div class="fd-popover__control">
        <button class="fd-button fd-button--transparent fd-button--compact sap-icon--overflow"
          aria-controls="wgxzK85912"
          aria-haspopup="true"
          aria-expanded="false"
          aria-label="More"></button>
      </div>
      <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow"
        aria-hidden="true"
        id="wgxzK85912">
        <div class="fd-toolbar__overflow__body">
          <label class="fd-label fd-toolbar__overflow__label">Label</label>
          <button class="fd-button fd-button--compact fd-button--transparent">Edit</button>
          <span class="fd-toolbar__separator"></span>
          <label class="fd-form-label fd-toolbar__overflow__form-label">Form label</label>
          <button class="fd-button fd-button--compact fd-button--negative">Delete</button>
          <span class="fd-toolbar__separator"></span>
          <button class="fd-button fd-button--compact fd-button--sucess">Assign</button>
          <button class="fd-button fd-button--compact fd-button--attention">Exit</button>
        </div>
      </div>
    </div>
  </div>
{% endcapture %}
{% include display-component.html component=toolbar %}
