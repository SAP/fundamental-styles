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

The toolbar enables the user to change the UI or trigger an action. For example, the toolbar allows the user to change views, manipulate data or objects, navigate to another page, perform generic actions, and so on.  It is usually used for buttons (with an icon or text).
{: .docs-intro}

## Toolbar types

### Solid

The toolbar has a solid background

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

The toolbar can be inserted into other controls and if the design is "Auto" then it inherits the design from parent control

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

The content of the toolbar will be displayed transparent

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

The toolbar appears smaller than the regular size to show information(e.g: text, icon)

{% capture toolbar %}

  <div class="fd-toolbar fd-toolbar--info">
    3 item selected
  </div>

{% endcapture %}
{% include display-component.html component=toolbar %}

### Title

Title toolbar should be used whenever title needs to be included

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

When active toolbar class is added, then it enables hover and select behaviour on toolbar

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

Its role is to fill remaining space either automatically or manually and place item regarding to it

### Auto

The toolbar can be inserted into other controls and can inherit the design from the parent control by adding `auto` to the `fd-toolbar` class

{% capture toolbar %}

  <div class="fd-toolbar fd-toolbar--info fd-toolbar--active">
    <span>text</span>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
    <span>text</span>
  </div>

{% endcapture %}
{% include display-component.html component=toolbar %}

### Fixed

Developer has to set width for spacer

{% capture toolbar %}

  <div class="fd-toolbar fd-toolbar--info">
    <span>text</span>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--fixed" style="width:150px;"></span>
    <span>text</span>
  </div>

{% endcapture %}
{% include display-component.html component=toolbar %}

## Separator

Its role is to visually separate items from each other
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

Default size is compact but this can be changed using `fd-toolbar--cozy` modifier

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
