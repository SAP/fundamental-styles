---
component: fd-object-status
title: Components/Object Status
category: Components
selector: fd-object-status
cssFile: object-status.css
sourcePath: packages/styles/stories/Components/object-status/object-status.stories.js
tags: []
dependencies: ["icon","object-status"]
relatedComponents: ["icon","object-status"]
stability: stable
---

# Components/Object Status

Object Status is a short text that represents the semantic status of an object. It has a semantic
color and an optional icon. Typically, the object status is used in the dynamic page header and as a status
attribute of a line item in a table.

## Dependencies

This component depends on the following CSS files:

- `icon.css`
- `object-status.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/object-status.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/object-status.css" rel="stylesheet">
```

## Basic Usage

```html
<span class="fd-object-status fd-object-status--negative">
    <i class="fd-object-status__icon sap-icon--error" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Negative</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Invalid Entry</span>
</span>
<span class="fd-object-status fd-object-status--critical">
    <i class="fd-object-status__icon sap-icon--alert" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Critical</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Warning issued</span>
</span>
<span class="fd-object-status fd-object-status--positive">
    <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Positive</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Entry successfully validated</span>
</span>
<span class="fd-object-status fd-object-status--informative">
    <i class="fd-object-status__icon sap-icon--information" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Info</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Informative entry</span>
</span>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-object-status--critical` | Style variant |
| `fd-object-status--icon-only` | Object status icon only |
| `fd-object-status--indication-` | Object Status with Generic Indication Colors |
| `fd-object-status--informative` | Style variant |
| `fd-object-status--inverted` | Inverted Object Status(optional inverted visualization) determines whether the background color reflects the set state
 instead of the control's text |
| `fd-object-status--large` | Style variant |
| `fd-object-status--link` | If the object status is used as a link, a hover effect is shown on non-touch devices |
| `fd-object-status--negative` | Object Status can display the semantic status of an object: negative (class: \ |
| `fd-object-status--neutral` | Style variant |
| `fd-object-status--positive` | Style variant |
| `fd-object-status--truncate` | By default, Object Status text goes on multiple lines based on the max width that is set for the element |

## States

| Class | Description |
|-------|-------------|
| `is-active` | Active state |
| `is-focus` | Focus state |
| `is-hover` | Hover state |
| `is-visited` | Visited state |

## BEM Elements

This component uses the following BEM elements:

- `fd-object-status__icon`
- `fd-object-status__sr-only`
- `fd-object-status__text`

## Related Components

This component works with or depends on:

- `icon`
- `object-status`

## Design Tokens

Key CSS variables used by this component:

- `--fdElementIconColor`
- `--fdElementTextColor`
- `--fdObjectStatus_Accent_Color_1_Focus`
- `--fdObjectStatus_Accent_Color_2_Focus`
- `--fdObjectStatus_Accent_Color_3_Focus`
- `--fdObjectStatus_Accent_Color_4_Focus`
- `--fdObjectStatus_Accent_Color_5_Focus`
- `--fdObjectStatus_Accent_Color_6_Focus`
- `--fdObjectStatus_Accent_Color_7_Focus`
- `--fdObjectStatus_Accent_Color_8_Focus`
- `--fdObjectStatus_Active_Text_Indication_Color_1`
- `--fdObjectStatus_Active_Text_Indication_Color_10`
- `--fdObjectStatus_Active_Text_Indication_Color_2`
- `--fdObjectStatus_Active_Text_Indication_Color_3`
- `--fdObjectStatus_Active_Text_Indication_Color_4`

*...and 5 more*

## Examples

### Primary

Object Status can display the semantic status of an object: negative (class: \

```html
<span class="fd-object-status fd-object-status--negative">
    <i class="fd-object-status__icon sap-icon--error" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Negative</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Invalid Entry</span>
</span>
<span class="fd-object-status fd-object-status--critical">
    <i class="fd-object-status__icon sap-icon--alert" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Critical</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Warning issued</span>
</span>
<span class="fd-object-status fd-object-status--positive">
    <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Positive</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Entry successfully validated</span>
</span>
<span class="fd-object-status fd-object-status--informative">
    <i class="fd-object-status__icon sap-icon--information" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Info</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Informative entry</span>
</span>
```

### Icon

Object status icon only

```html
<span class="fd-object-status fd-object-status--negative">
    <i class="fd-object-status__icon sap-icon--error" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Invalid Entry</span>
</span>
<span class="fd-object-status fd-object-status--critical">
    <i class="fd-object-status__icon sap-icon--alert" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Warning issued</span>
</span>
<span class="fd-object-status fd-object-status--positive">
    <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Entry successfully validated</span>
</span>
<span class="fd-object-status fd-object-status--informative">
    <i class="fd-object-status__icon sap-icon--information" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Informative entry</span>
</span>
```

### Text

Object status text only

```html
<span class="fd-object-status fd-object-status--negative">
    <span class="fd-object-status__text">Negative</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Invalid Entry</span>
</span>
<span class="fd-object-status fd-object-status--critical">
    <span class="fd-object-status__text">Critical</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Warning issued</span>
</span>
<span class="fd-object-status fd-object-status--positive">
    <span class="fd-object-status__text">Positive</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Entry successfully validated</span>
</span>
<span class="fd-object-status fd-object-status--informative">
    <span class="fd-object-status__text">Info</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Informative entry</span>
</span>
<span class="fd-object-status">
    <span class="fd-object-status__text">Neutral</span>
    <span class="fd-object-status__sr-only">Object Status</span>
</span>
```

### IconAndText

Object status icon and text

```html
<span class="fd-object-status fd-object-status--negative">
    <i class="fd-object-status__icon sap-icon--error" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Negative</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Invalid Entry</span>
</span>
<span class="fd-object-status fd-object-status--critical">
    <i class="fd-object-status__icon sap-icon--alert" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Critical</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Warning issued</span>
</span>
<span class="fd-object-status fd-object-status--positive">
    <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Positive</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Entry successfully validated</span>
</span>
<span class="fd-object-status fd-object-status--informative">
    <i class="fd-object-status__icon sap-icon--information" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Info</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Informative entry</span>
</span>
<span class="fd-object-status fd-object-status--neutral">
    <i class="fd-object-status__icon sap-icon--circle-task-2" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Neutral</span>
    <span class="fd-object-status__sr-only">Object Status</span>
</span>
```

### GenericIndicationColors

Object Status with Generic Indication Colors

```html
<span class="fd-object-status fd-object-status--indication-1">
    <span class="fd-object-status__text">Dark Red</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Indication Color 1</span>
</span>
<span class="fd-object-status fd-object-status--indication-2">
    <span class="fd-object-status__text">Red</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Indication Color 2</span>
</span>
<span class="fd-object-status fd-object-status--indication-3">
    <span class="fd-object-status__text">Yellow</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Indication Color 3</span>
</span>
<span class="fd-object-status fd-object-status--indication-4">
    <span class="fd-object-status__text">Green</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Indication Color 4</span>
</span>
<span class="fd-object-status fd-object-status--indication-5">
    <span class="fd-object-status__text">Blue</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Indication Color 5</span>
</span>
<span class="fd-object-status fd-object-status--indication-6">
    <span class="fd-object-status__text">Teal</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Indication Color 6</span>
</span>
<span class="fd-object-status fd-object-status--indication-7">
    <span class="fd-object-status__text">Purple</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Indication Color 7</span>
</span>
<span class="fd-object-status fd-object-status--indication-8">
    <span class="fd-object-status__text">Pink</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Indication Color 8</span>
</span>
```

### ClickableObjectStatus

If the object status is used as a link, a hover effect is shown on non-touch devices.
 If the object status is shown using a combination of icon and text, there is no hover effect for the icon.
 If Object Status has to be clicked/tabbed by the user add the \

```html
<h3>Regular State</h3>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--negative fd-object-status--link">
    <i class="fd-object-status__icon sap-icon--error" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Negative</span>
    <span class="fd-object-status__sr-only">Invalid Entry</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--critical fd-object-status--link">
    <i class="fd-object-status__icon sap-icon--alert" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Critical</span>
    <span class="fd-object-status__sr-only">Warning issued</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--positive fd-object-status--link">
    <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Positive</span>
    <span class="fd-object-status__sr-only">Entry successfully validated</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--informative fd-object-status--link" tabindex="0">
    <i class="fd-object-status__icon sap-icon--information" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Info</span>
    <span class="fd-object-status__sr-only">Informative entry</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link" tabindex="0">
    <span class="fd-object-status__text">Neutral</span>
    <span class="fd-object-status__sr-only">Neutral entry</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-1">
    <span class="fd-object-status__text">Dark Red</span>
    <span class="fd-object-status__sr-only">Indication Color 1</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-2">
    <span class="fd-object-status__text">Red</span>
    <span class="fd-object-status__sr-only">Indication Color 2</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-3">
    <span class="fd-object-status__text">Yellow</span>
    <span class="fd-object-status__sr-only">Indication Color 3</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-4">
    <span class="fd-object-status__text">Green</span>
    <span class="fd-object-status__sr-only">Indication Color 4</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-5">
    <span class="fd-object-status__text">Blue</span>
    <span class="fd-object-status__sr-only">Indication Color 5</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-6" tabindex="0">
    <span class="fd-object-status__text">Teal</span>
    <span class="fd-object-status__sr-only">Indication Color 6</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-7" tabindex="0">
    <span class="fd-object-status__text">Purple</span>
    <span class="fd-object-status__sr-only">Indication Color 7</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-8" tabindex="0">
    <span class="fd-object-status__text">Pink</span>
    <span class="fd-object-status__sr-only">Indication Color 8</span>
</div>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--negative fd-object-status--link is-hover">
    <i class="fd-object-status__icon sap-icon--error" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Negative</span>
    <span class="fd-object-status__sr-only">Invalid Entry</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--critical fd-object-status--link is-hover">
    <i class="fd-object-status__icon sap-icon--alert" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Critical</span>
    <span class="fd-object-status__sr-only">Warning issued</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--positive fd-object-status--link is-hover">
    <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Positive</span>
    <span class="fd-object-status__sr-only">Entry successfully validated</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--informative fd-object-status--link is-hover" tabindex="0">
    <i class="fd-object-status__icon sap-icon--information" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Info</span>
    <span class="fd-object-status__sr-only">Informative entry</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link is-hover" tabindex="0">
    <span class="fd-object-status__text">Neutral</span>
    <span class="fd-object-status__sr-only">Neutral entry</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-1 is-hover">
    <span class="fd-object-status__text">Dark Red</span>
    <span class="fd-object-status__sr-only">Indication Color 1</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-2 is-hover">
    <span class="fd-object-status__text">Red</span>
    <span class="fd-object-status__sr-only">Indication Color 2</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-3 is-hover">
    <span class="fd-object-status__text">Yellow</span>
    <span class="fd-object-status__sr-only">Indication Color 3</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-4 is-hover">
    <span class="fd-object-status__text">Green</span>
    <span class="fd-object-status__sr-only">Indication Color 4</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-5 is-hover">
    <span class="fd-object-status__text">Blue</span>
    <span class="fd-object-status__sr-only">Indication Color 5</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-6 is-hover" tabindex="0">
    <span class="fd-object-status__text">Teal</span>
    <span class="fd-object-status__sr-only">Indication Color 6</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-7 is-hover" tabindex="0">
    <span class="fd-object-status__text">Purple</span>
    <span class="fd-object-status__sr-only">Indication Color 7</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-8 is-hover" tabindex="0">
    <span class="fd-object-status__text">Pink</span>
    <span class="fd-object-status__sr-only">Indication Color 8</span>
</div>
<h3>Down State</h3>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--negative fd-object-status--link is-active">
    <i class="fd-object-status__icon sap-icon--error" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Negative</span>
    <span class="fd-object-status__sr-only">Invalid Entry</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--critical fd-object-status--link is-active">
    <i class="fd-object-status__icon sap-icon--alert" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Critical</span>
    <span class="fd-object-status__sr-only">Warning issued</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--positive fd-object-status--link is-active">
    <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Positive</span>
    <span class="fd-object-status__sr-only">Entry successfully validated</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--informative fd-object-status--link is-active" tabindex="0">
    <i class="fd-object-status__icon sap-icon--information" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Info</span>
    <span class="fd-object-status__sr-only">Informative entry</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link is-active" tabindex="0">
    <span class="fd-object-status__text">Neutral</span>
    <span class="fd-object-status__sr-only">Neutral entry</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-1 is-active">
    <span class="fd-object-status__text">Dark Red</span>
    <span class="fd-object-status__sr-only">Indication Color 1</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-2 is-active">
    <span class="fd-object-status__text">Red</span>
    <span class="fd-object-status__sr-only">Indication Color 2</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-3 is-active">
    <span class="fd-object-status__text">Yellow</span>
    <span class="fd-object-status__sr-only">Indication Color 3</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-4 is-active">
    <span class="fd-object-status__text">Green</span>
    <span class="fd-object-status__sr-only">Indication Color 4</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-5 is-active">
    <span class="fd-object-status__text">Blue</span>
    <span class="fd-object-status__sr-only">Indication Color 5</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-6 is-active" tabindex="0">
    <span class="fd-object-status__text">Teal</span>
    <span class="fd-object-status__sr-only">Indication Color 6</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-7 is-active" tabindex="0">
    <span class="fd-object-status__text">Purple</span>
    <span class="fd-object-status__sr-only">Indication Color 7</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-8 is-active" tabindex="0">
    <span class="fd-object-status__text">Pink</span>
    <span class="fd-object-status__sr-only">Indication Color 8</span>
</div>
<h3>Visited State</h3>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--negative fd-object-status--link is-visited">
    <i class="fd-object-status__icon sap-icon--error" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Negative</span>
    <span class="fd-object-status__sr-only">Invalid Entry</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--critical fd-object-status--link is-visited">
    <i class="fd-object-status__icon sap-icon--alert" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Critical</span>
    <span class="fd-object-status__sr-only">Warning issued</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--positive fd-object-status--link is-visited">
    <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Positive</span>
    <span class="fd-object-status__sr-only">Entry successfully validated</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--informative fd-object-status--link is-visited" tabindex="0">
    <i class="fd-object-status__icon sap-icon--information" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Info</span>
    <span class="fd-object-status__sr-only">Informative entry</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link is-visited" tabindex="0">
    <span class="fd-object-status__text">Neutral</span>
    <span class="fd-object-status__sr-only">Neutral entry</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-1 is-visited">
    <span class="fd-object-status__text">Dark Red</span>
    <span class="fd-object-status__sr-only">Indication Color 1</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-2 is-visited">
    <span class="fd-object-status__text">Red</span>
    <span class="fd-object-status__sr-only">Indication Color 2</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-3 is-visited">
    <span class="fd-object-status__text">Yellow</span>
    <span class="fd-object-status__sr-only">Indication Color 3</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-4 is-visited">
    <span class="fd-object-status__text">Green</span>
    <span class="fd-object-status__sr-only">Indication Color 4</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-5 is-visited">
    <span class="fd-object-status__text">Blue</span>
    <span class="fd-object-status__sr-only">Indication Color 5</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-6 is-visited" tabindex="0">
    <span class="fd-object-status__text">Teal</span>
    <span class="fd-object-status__sr-only">Indication Color 6</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-7 is-visited" tabindex="0">
    <span class="fd-object-status__text">Purple</span>
    <span class="fd-object-status__sr-only">Indication Color 7</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-8 is-visited" tabindex="0">
    <span class="fd-object-status__text">Pink</span>
    <span class="fd-object-status__sr-only">Indication Color 8</span>
</div>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--negative fd-object-status--link is-focus">
    <i class="fd-object-status__icon sap-icon--error" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Negative</span>
    <span class="fd-object-status__sr-only">Invalid Entry</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--critical fd-object-status--link is-focus">
    <i class="fd-object-status__icon sap-icon--alert" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Critical</span>
    <span class="fd-object-status__sr-only">Warning issued</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--positive fd-object-status--link is-focus">
    <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Positive</span>
    <span class="fd-object-status__sr-only">Entry successfully validated</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--informative fd-object-status--link is-focus" tabindex="0">
    <i class="fd-object-status__icon sap-icon--information" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Info</span>
    <span class="fd-object-status__sr-only">Informative entry</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link is-focus" tabindex="0">
    <span class="fd-object-status__text">Neutral</span>
    <span class="fd-object-status__sr-only">Neutral entry</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-1 is-focus">
    <span class="fd-object-status__text">Dark Red</span>
    <span class="fd-object-status__sr-only">Indication Color 1</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-2 is-focus">
    <span class="fd-object-status__text">Red</span>
    <span class="fd-object-status__sr-only">Indication Color 2</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-3 is-focus">
    <span class="fd-object-status__text">Yellow</span>
    <span class="fd-object-status__sr-only">Indication Color 3</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-4 is-focus">
    <span class="fd-object-status__text">Green</span>
    <span class="fd-object-status__sr-only">Indication Color 4</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-5 is-focus">
    <span class="fd-object-status__text">Blue</span>
    <span class="fd-object-status__sr-only">Indication Color 5</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-6 is-focus" tabindex="0">
    <span class="fd-object-status__text">Teal</span>
    <span class="fd-object-status__sr-only">Indication Color 6</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-7 is-focus" tabindex="0">
    <span class="fd-object-status__text">Purple</span>
    <span class="fd-object-status__sr-only">Indication Color 7</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--link fd-object-status--indication-8 is-focus" tabindex="0">
    <span class="fd-object-status__text">Pink</span>
    <span class="fd-object-status__sr-only">Indication Color 8</span>
</div>
```

### LargeObjectStatus

```html
<span class="fd-object-status fd-object-status--large fd-object-status--negative">
    <i class="fd-object-status__icon sap-icon--error" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Negative</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Invalid Entry</span>
</span>
<span class="fd-object-status fd-object-status--large fd-object-status--critical">
    <i class="fd-object-status__icon sap-icon--alert" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Critical</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Warning issued</span>
</span>
<span class="fd-object-status fd-object-status--large fd-object-status--positive">
    <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Positive</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Entry successfully validated</span>
</span>
<span class="fd-object-status fd-object-status--large fd-object-status--informative">
    <i class="fd-object-status__icon sap-icon--information" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Info</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Informative Entry</span>
</span>
<span class="fd-object-status fd-object-status--large">
    <span class="fd-object-status__text">Neutral</span>
    <span class="fd-object-status__sr-only">Object Status</span>
</span>
```

### Inverted

Inverted Object Status(optional inverted visualization) determines whether the background color reflects the set state
 instead of the control's text. Use the inverted object status if the information is crucial for the user’s actions and needs to stand out visually.
 Inverted Object Status is achieved by adding the \

```html
<span class="fd-object-status fd-object-status--negative fd-object-status--inverted">
    <span class="fd-object-status__text">Inverted Negative</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Invalid Entry</span>
</span>
<span class="fd-object-status fd-object-status--critical fd-object-status--inverted">
    <span class="fd-object-status__text">Inverted Warning</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Warning issued</span>
</span>
<span class="fd-object-status fd-object-status--positive fd-object-status--inverted">
    <span class="fd-object-status__text">Inverted Success</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Entry successfully validated</span>
</span>
<span class="fd-object-status fd-object-status--informative fd-object-status--inverted">
    <span class="fd-object-status__text">Inverted informative</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Informative entry</span>
</span>
<span class="fd-object-status fd-object-status--inverted">
    <span class="fd-object-status__text">Inverted Neutral</span>
    <span class="fd-object-status__sr-only">Object Status</span>
</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--negative">
    <i class="fd-object-status__icon sap-icon--error" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--negative">
    <i class="fd-object-status__icon sap-icon--error" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Negative</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Invalid Entry</span>
</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--critical">
    <i class="fd-object-status__icon sap-icon--alert" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Critical</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Warning issued</span>
</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--positive">
    <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Positive</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Entry successfully validated</span>
</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--informative">
    <i class="fd-object-status__icon sap-icon--information" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Informative</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Informative entry</span>
</span>
<span class="fd-object-status fd-object-status--inverted">
    <span class="fd-object-status__text">Neutral</span>
    <span class="fd-object-status__sr-only">Object Status</span>
</span>

<h4>Large Inverted Object Status</h4>
<span class="fd-object-status fd-object-status--negative fd-object-status--inverted fd-object-status--large">
    <span class="fd-object-status__text">Inverted Negative</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Invalid Entry</span>
</span>
<span class="fd-object-status fd-object-status--critical fd-object-status--inverted fd-object-status--large">
    <span class="fd-object-status__text">Inverted Warning</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Warning issued</span>
</span>
<span class="fd-object-status fd-object-status--positive fd-object-status--inverted fd-object-status--large">
    <span class="fd-object-status__text">Inverted Success</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Entry successfully validated</span>
</span>
<span class="fd-object-status fd-object-status--informative fd-object-status--inverted fd-object-status--large">
    <span class="fd-object-status__text">Inverted informative</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Informative entry</span>
</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--large">
    <span class="fd-object-status__text">Inverted Neutral</span>
    <span class="fd-object-status__sr-only">Object Status</span>
</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--negative fd-object-status--large fd-object-status--icon-only">
    <i class="fd-object-status__icon sap-icon--error" role="presentation" aria-hidden="true"></i>
</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--negative fd-object-status--large">
    <i class="fd-object-status__icon sap-icon--error" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Negative</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Invalid Entry</span>
</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--critical fd-object-status--large">
    <i class="fd-object-status__icon sap-icon--alert" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Critical</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Warning issued</span>
</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--positive fd-object-status--large">
    <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Positive</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Entry successfully validated</span>
</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--informative fd-object-status--large">
    <i class="fd-object-status__icon sap-icon--information" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Informative</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Informative entry</span>
</span>
<span class="fd-object-status fd-object-status--inverted fd-object-status--large">
    <span class="fd-object-status__text">Neutral</span>
    <span class="fd-object-status__sr-only">Object Status</span>
</span>
```

### InvertedStates

```html
<h4>Regular</h4>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link">
    <span class="fd-object-status__text">Neutral</span>
    <span class="fd-object-status__sr-only">Neutral Entry</span>
</div>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--informative">
    <i class="fd-object-status__icon sap-icon--information" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Information</span>
    <span class="fd-object-status__sr-only">Informative Entry</span>
</div>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--critical">
    <i class="fd-object-status__icon sap-icon--alert" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Information</span>
    <span class="fd-object-status__sr-only">Warning issued</span>
</div>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--positive">
    <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Information</span>
    <span class="fd-object-status__sr-only">Entry successfully validated</span>
</div>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--negative">
    <i class="fd-object-status__icon sap-icon--error" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Information</span>
    <span class="fd-object-status__sr-only">Invalid Entry</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link is-hover">
    <span class="fd-object-status__text">Neutral</span>
    <span class="fd-object-status__sr-only">Neutral Entry</span>
</div>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--informative is-hover">
    <i class="fd-object-status__icon sap-icon--information" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Information</span>
    <span class="fd-object-status__sr-only">Informative Entry</span>
</div>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--critical is-hover">
    <i class="fd-object-status__icon sap-icon--alert" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Information</span>
    <span class="fd-object-status__sr-only">Warning issued</span>
</div>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--positive is-hover">
    <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Information</span>
    <span class="fd-object-status__sr-only">Entry successfully validated</span>
</div>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--negative is-hover">
    <i class="fd-object-status__icon sap-icon--error" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Information</span>
    <span class="fd-object-status__sr-only">Invalid Entry</span>
</div>

<h4>Down</h4>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link is-active">
    <span class="fd-object-status__text">Neutral</span>
    <span class="fd-object-status__sr-only">Neutral Entry</span>
</div>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--informative is-active">
    <i class="fd-object-status__icon sap-icon--information" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Information</span>
    <span class="fd-object-status__sr-only">Informative Entry</span>
</div>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--critical is-active">
    <i class="fd-object-status__icon sap-icon--alert" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Information</span>
    <span class="fd-object-status__sr-only">Warning issued</span>
</div>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--positive is-active">
    <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Information</span>
    <span class="fd-object-status__sr-only">Entry successfully validated</span>
</div>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--negative is-active">
    <i class="fd-object-status__icon sap-icon--error" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Information</span>
    <span class="fd-object-status__sr-only">Invalid Entry</span>
</div>

<h4>Regular, Focus</h4>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link is-focus">
    <span class="fd-object-status__text">Neutral</span>
    <span class="fd-object-status__sr-only">Neutral Entry</span>
</div>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--informative is-focus">
    <i class="fd-object-status__icon sap-icon--information" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Information</span>
    <span class="fd-object-status__sr-only">Informative Entry</span>
</div>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--critical is-focus">
    <i class="fd-object-status__icon sap-icon--alert" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Information</span>
    <span class="fd-object-status__sr-only">Warning issued</span>
</div>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--positive is-focus">
    <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Information</span>
    <span class="fd-object-status__sr-only">Entry successfully validated</span>
</div>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--negative is-focus">
    <i class="fd-object-status__icon sap-icon--error" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Information</span>
    <span class="fd-object-status__sr-only">Invalid Entry</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link is-hover is-focus">
    <span class="fd-object-status__text">Neutral</span>
    <span class="fd-object-status__sr-only">Neutral Entry</span>
</div>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--informative is-hover is-focus">
    <i class="fd-object-status__icon sap-icon--information" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Information</span>
    <span class="fd-object-status__sr-only">Informative Entry</span>
</div>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--critical is-hover is-focus">
    <i class="fd-object-status__icon sap-icon--alert" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Information</span>
    <span class="fd-object-status__sr-only">Warning issued</span>
</div>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--positive is-hover is-focus">
    <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Information</span>
    <span class="fd-object-status__sr-only">Entry successfully validated</span>
</div>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--negative is-hover is-focus">
    <i class="fd-object-status__icon sap-icon--error" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Information</span>
    <span class="fd-object-status__sr-only">Invalid Entry</span>
</div>
```

### InvertedIndication

Inverted indication colors

```html
<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-1">
    <span class="fd-object-status__text">Indication1</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Indication Color 1</span>
</span>

<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-2">
    <span class="fd-object-status__text">Indication2</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Indication Color 2</span>
</span>

<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-3">
    <span class="fd-object-status__text">Indication3</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Indication Color 3</span>
</span>

<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-4">
    <span class="fd-object-status__text">Indication4</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Indication Color 4</span>
</span>

<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-5">
    <span class="fd-object-status__text">Indication5</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Indication Color 5</span>
</span>

<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-6">
    <span class="fd-object-status__text">Indication6</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Indication Color 6</span>
</span>

<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-7">
    <span class="fd-object-status__text">Indication7</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Indication Color 7</span>
</span>

<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-8">
    <span class="fd-object-status__text">Indication8</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Indication Color 8</span>
</span>

<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-9">
    <span class="fd-object-status__text">Indication9</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Indication Color 9</span>
</span>

<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-10">
    <span class="fd-object-status__text">Indication10</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Indication Color 10</span>
</span>
<h4>Clickable Inverted Object Status (Regular)</h4>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-1" >
    <span class="fd-object-status__text">Indication1</span>
    <span class="fd-object-status__sr-only">Indication Color 1</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-2" >
    <span class="fd-object-status__text">Indication2</span>
    <span class="fd-object-status__sr-only">Indication Color 2</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-3" >
    <span class="fd-object-status__text">Indication3</span>
    <span class="fd-object-status__sr-only">Indication Color 3</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-4" >
    <span class="fd-object-status__text">Indication4</span>
    <span class="fd-object-status__sr-only">Indication Color 4</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-5" >
    <span class="fd-object-status__text">Indication5</span>
    <span class="fd-object-status__sr-only">Indication Color 5</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-6" >
    <span class="fd-object-status__text">Indication6</span>
    <span class="fd-object-status__sr-only">Indication Color 6</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-7" >
    <span class="fd-object-status__text">Indication7</span>
    <span class="fd-object-status__sr-only">Indication Color 7</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-8" >
    <span class="fd-object-status__text">Indication8</span>
    <span class="fd-object-status__sr-only">Indication Color 8</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-9" >
    <span class="fd-object-status__text">Indication9</span>
    <span class="fd-object-status__sr-only">Indication Color 9</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-10" >
    <span class="fd-object-status__text">Indication10</span>
    <span class="fd-object-status__sr-only">Indication Color 10</span>
</div>

<h4>Clickable Inverted Object Status (Hover)</h4>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-1 is-hover" >
    <span class="fd-object-status__text">Indication1</span>
    <span class="fd-object-status__sr-only">Indication Color 1</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-2 is-hover" >
    <span class="fd-object-status__text">Indication2</span>
    <span class="fd-object-status__sr-only">Indication Color 2</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-3 is-hover" >
    <span class="fd-object-status__text">Indication3</span>
    <span class="fd-object-status__sr-only">Indication Color 3</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-4 is-hover" >
    <span class="fd-object-status__text">Indication4</span>
    <span class="fd-object-status__sr-only">Indication Color 4</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-5 is-hover" >
    <span class="fd-object-status__text">Indication5</span>
    <span class="fd-object-status__sr-only">Indication Color 5</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-6 is-hover" >
    <span class="fd-object-status__text">Indication6</span>
    <span class="fd-object-status__sr-only">Indication Color 6</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-7 is-hover" >
    <span class="fd-object-status__text">Indication7</span>
    <span class="fd-object-status__sr-only">Indication Color 7</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-8 is-hover" >
    <span class="fd-object-status__text">Indication8</span>
    <span class="fd-object-status__sr-only">Indication Color 8</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-9 is-hover" >
    <span class="fd-object-status__text">Indication9</span>
    <span class="fd-object-status__sr-only">Indication Color 9</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-10 is-hover" >
    <span class="fd-object-status__text">Indication10</span>
    <span class="fd-object-status__sr-only">Indication Color 10</span>
</div>

<h4>Clickable Inverted Object Status (Active/Down)</h4>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-1 is-active" >
    <span class="fd-object-status__text">Indication1</span>
    <span class="fd-object-status__sr-only">Indication Color 1</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-2 is-active" >
    <span class="fd-object-status__text">Indication2</span>
    <span class="fd-object-status__sr-only">Indication Color 2</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-3 is-active" >
    <span class="fd-object-status__text">Indication3</span>
    <span class="fd-object-status__sr-only">Indication Color 3</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-4 is-active" >
    <span class="fd-object-status__text">Indication4</span>
    <span class="fd-object-status__sr-only">Indication Color 4</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-5 is-active" >
    <span class="fd-object-status__text">Indication5</span>
    <span class="fd-object-status__sr-only">Indication Color 5</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-6 is-active" >
    <span class="fd-object-status__text">Indication6</span>
    <span class="fd-object-status__sr-only">Indication Color 6</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-7 is-active" >
    <span class="fd-object-status__text">Indication7</span>
    <span class="fd-object-status__sr-only">Indication Color 7</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-8 is-active" >
    <span class="fd-object-status__text">Indication8</span>
    <span class="fd-object-status__sr-only">Indication Color 8</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-9 is-active" >
    <span class="fd-object-status__text">Indication9</span>
    <span class="fd-object-status__sr-only">Indication Color 9</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-10 is-active" >
    <span class="fd-object-status__text">Indication10</span>
    <span class="fd-object-status__sr-only">Indication Color 10</span>
</div>

<h4>Clickable Inverted Object Status (Focus)</h4>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-1 is-focus" >
    <span class="fd-object-status__text">Indication1</span>
    <span class="fd-object-status__sr-only">Indication Color 1</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-2 is-focus" >
    <span class="fd-object-status__text">Indication2</span>
    <span class="fd-object-status__sr-only">Indication Color 2</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-3 is-focus" >
    <span class="fd-object-status__text">Indication3</span>
    <span class="fd-object-status__sr-only">Indication Color 3</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-4 is-focus" >
    <span class="fd-object-status__text">Indication4</span>
    <span class="fd-object-status__sr-only">Indication Color 4</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-5 is-focus" >
    <span class="fd-object-status__text">Indication5</span>
    <span class="fd-object-status__sr-only">Indication Color 5</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-6 is-focus" >
    <span class="fd-object-status__text">Indication6</span>
    <span class="fd-object-status__sr-only">Indication Color 6</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-7 is-focus" >
    <span class="fd-object-status__text">Indication7</span>
    <span class="fd-object-status__sr-only">Indication Color 7</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-8 is-focus" >
    <span class="fd-object-status__text">Indication8</span>
    <span class="fd-object-status__sr-only">Indication Color 8</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-9 is-focus" >
    <span class="fd-object-status__text">Indication9</span>
    <span class="fd-object-status__sr-only">Indication Color 9</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-10 is-focus" >
    <span class="fd-object-status__text">Indication10</span>
    <span class="fd-object-status__sr-only">Indication Color 10</span>
</div>
```

### InvertedIndicationSecondary

Secondary Set of Inverted indication colors

```html
<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-1b">
    <span class="fd-object-status__text">Indication1b</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Indication Color 1b</span>
</span>

<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-2b">
    <span class="fd-object-status__text">Indication2b</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Indication Color 2b</span>
</span>

<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-3b">
    <span class="fd-object-status__text">Indication3b</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Indication Color 3b</span>
</span>

<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-4b">
    <span class="fd-object-status__text">Indication4b</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Indication Color 4b</span>
</span>

<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-5b">
    <span class="fd-object-status__text">Indication5b</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Indication Color 5b</span>
</span>

<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-6b">
    <span class="fd-object-status__text">Indication6b</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Indication Color 6b</span>
</span>

<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-7b">
    <span class="fd-object-status__text">Indication7b</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Indication Color 7b</span>
</span>

<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-8b">
    <span class="fd-object-status__text">Indication8b</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Indication Color 8b</span>
</span>

<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-9b">
    <span class="fd-object-status__text">Indication9b</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Indication Color 9b</span>
</span>

<span class="fd-object-status fd-object-status--inverted fd-object-status--indication-1b0">
    <span class="fd-object-status__text">Indication10b</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Indication Color 10b</span>
</span>
<h4>Clickable Inverted Object Status (Regular)</h4>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-1b" >
    <span class="fd-object-status__text">Indication1b</span>
    <span class="fd-object-status__sr-only">Indication Color 1b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-2b" >
    <span class="fd-object-status__text">Indication2b</span>
    <span class="fd-object-status__sr-only">Indication Color 2b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-3b" >
    <span class="fd-object-status__text">Indication3b</span>
    <span class="fd-object-status__sr-only">Indication Color 3b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-4b" >
    <span class="fd-object-status__text">Indication4b</span>
    <span class="fd-object-status__sr-only">Indication Color 4b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-5b" >
    <span class="fd-object-status__text">Indication5b</span>
    <span class="fd-object-status__sr-only">Indication Color 5b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-6b" >
    <span class="fd-object-status__text">Indication6b</span>
    <span class="fd-object-status__sr-only">Indication Color 6b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-7b" >
    <span class="fd-object-status__text">Indication7b</span>
    <span class="fd-object-status__sr-only">Indication Color 7b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-8b" >
    <span class="fd-object-status__text">Indication8b</span>
    <span class="fd-object-status__sr-only">Indication Color 8b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-9b" >
    <span class="fd-object-status__text">Indication9b</span>
    <span class="fd-object-status__sr-only">Indication Color 9b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-1b0" >
    <span class="fd-object-status__text">Indication10b</span>
    <span class="fd-object-status__sr-only">Indication Color 10b</span>
</div>

<h4>Clickable Inverted Object Status (Hover)</h4>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-1b is-hover" >
    <span class="fd-object-status__text">Indication1b</span>
    <span class="fd-object-status__sr-only">Indication Color 1b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-2b is-hover" >
    <span class="fd-object-status__text">Indication2b</span>
    <span class="fd-object-status__sr-only">Indication Color 2b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-3b is-hover" >
    <span class="fd-object-status__text">Indication3b</span>
    <span class="fd-object-status__sr-only">Indication Color 3b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-4b is-hover" >
    <span class="fd-object-status__text">Indication4b</span>
    <span class="fd-object-status__sr-only">Indication Color 4b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-5b is-hover" >
    <span class="fd-object-status__text">Indication5b</span>
    <span class="fd-object-status__sr-only">Indication Color 5b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-6b is-hover" >
    <span class="fd-object-status__text">Indication6b</span>
    <span class="fd-object-status__sr-only">Indication Color 6b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-7b is-hover" >
    <span class="fd-object-status__text">Indication7b</span>
    <span class="fd-object-status__sr-only">Indication Color 7b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-8b is-hover" >
    <span class="fd-object-status__text">Indication8b</span>
    <span class="fd-object-status__sr-only">Indication Color 8b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-9b is-hover" >
    <span class="fd-object-status__text">Indication9b</span>
    <span class="fd-object-status__sr-only">Indication Color 9b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-1b0 is-hover" >
    <span class="fd-object-status__text">Indication10b</span>
    <span class="fd-object-status__sr-only">Indication Color 10b</span>
</div>

<h4>Clickable Inverted Object Status (Active/Down)</h4>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-1b is-active" >
    <span class="fd-object-status__text">Indication1b</span>
    <span class="fd-object-status__sr-only">Indication Color 1b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-2b is-active" >
    <span class="fd-object-status__text">Indication2b</span>
    <span class="fd-object-status__sr-only">Indication Color 2b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-3b is-active" >
    <span class="fd-object-status__text">Indication3b</span>
    <span class="fd-object-status__sr-only">Indication Color 3b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-4b is-active" >
    <span class="fd-object-status__text">Indication4b</span>
    <span class="fd-object-status__sr-only">Indication Color 4b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-5b is-active" >
    <span class="fd-object-status__text">Indication5b</span>
    <span class="fd-object-status__sr-only">Indication Color 5b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-6b is-active" >
    <span class="fd-object-status__text">Indication6b</span>
    <span class="fd-object-status__sr-only">Indication Color 6b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-7b is-active" >
    <span class="fd-object-status__text">Indication7b</span>
    <span class="fd-object-status__sr-only">Indication Color 7b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-8b is-active" >
    <span class="fd-object-status__text">Indication8b</span>
    <span class="fd-object-status__sr-only">Indication Color 8b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-9b is-active" >
    <span class="fd-object-status__text">Indication9b</span>
    <span class="fd-object-status__sr-only">Indication Color 9b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-1b0 is-active" >
    <span class="fd-object-status__text">Indication10b</span>
    <span class="fd-object-status__sr-only">Indication Color 10b</span>
</div>

<h4>Clickable Inverted Object Status (Focus)</h4>
<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-1b is-focus" >
    <span class="fd-object-status__text">Indication1b</span>
    <span class="fd-object-status__sr-only">Indication Color 1b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-2b is-focus" >
    <span class="fd-object-status__text">Indication2b</span>
    <span class="fd-object-status__sr-only">Indication Color 2b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-3b is-focus" >
    <span class="fd-object-status__text">Indication3b</span>
    <span class="fd-object-status__sr-only">Indication Color 3b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-4b is-focus" >
    <span class="fd-object-status__text">Indication4b</span>
    <span class="fd-object-status__sr-only">Indication Color 4b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-5b is-focus" >
    <span class="fd-object-status__text">Indication5b</span>
    <span class="fd-object-status__sr-only">Indication Color 5b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-6b is-focus" >
    <span class="fd-object-status__text">Indication6b</span>
    <span class="fd-object-status__sr-only">Indication Color 6b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-7b is-focus" >
    <span class="fd-object-status__text">Indication7b</span>
    <span class="fd-object-status__sr-only">Indication Color 7b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-8b is-focus" >
    <span class="fd-object-status__text">Indication8b</span>
    <span class="fd-object-status__sr-only">Indication Color 8b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-9b is-focus" >
    <span class="fd-object-status__text">Indication9b</span>
    <span class="fd-object-status__sr-only">Indication Color 9b</span>
</div>

<div role="button" tabindex="0" aria-roledescription="Object Status Button" class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-1b0 is-focus" >
    <span class="fd-object-status__text">Indication10b</span>
    <span class="fd-object-status__sr-only">Indication Color 10b</span>
</div>
```

### Object Status with single line text with ellipsis

By default, Object Status text goes on multiple lines based on the max width that is set for the element. For a single line text with ellipsis add the <code>fd-object-status--truncate</code> modifier class to the <code>fd-object-status</code> base class.

```html
<span class="fd-object-status fd-object-status--negative">
    <i class="fd-object-status__icon sap-icon--error" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Default behaviour of Object Status with very long text. The text goes on multiple lines.</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Invalid Entry</span>
</span>

<span class="fd-object-status fd-object-status--critical fd-object-status--truncate">
    <i class="fd-object-status__icon sap-icon--alert" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Object Status with text truncation with ellipsis</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Warning issued</span>
</span>

<span class="fd-object-status fd-object-status--negative fd-object-status--inverted fd-object-status--truncate">
    <span class="fd-object-status__text">Inverted Negative with very, very long text which truncates</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Invalid Entry</span>
</span>

<span class="fd-object-status fd-object-status--large fd-object-status--positive fd-object-status--truncate">
    <i class="fd-object-status__icon sap-icon--sys-enter-2" role="presentation" aria-hidden="true"></i>
    <span class="fd-object-status__text">Positive with very, very long text which truncates</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Entry successfully validated</span>
</span>

<span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-8 fd-object-status--truncate" tabindex="0">
    <span class="fd-object-status__text">Indication8 with very, very long text which truncates</span>
    <span class="fd-object-status__sr-only">Object Status</span>
    <span class="fd-object-status__sr-only">Indication Color 8</span>
</span>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/object-status/object-status.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
