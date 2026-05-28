---
component: fd-button
title: Components/Buttons/Button
category: Components
selector: fd-button
cssFile: button.css
sourcePath: packages/styles/stories/Components/button/button.stories.js
tags: []
dependencies: ["button","button-split","icon","menu","popover","segmented-button"]
relatedComponents: ["button","button-split","icon","menu","popover","segmented-button"]
stability: stable
generatedAt: 2026-06-01T19:23:59.610Z
---

# Components/Buttons/Button

The button component is used to trigger an action. All buttons are characterized by the \

## Dependencies

This component depends on the following CSS files:

- `button.css`
- `button-split.css`
- `icon.css`
- `menu.css`
- `popover.css`
- `segmented-button.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/button-split.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/menu.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/popover.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/segmented-button.css" rel="stylesheet">
```

## Basic Usage

```html
<button role="button" class="fd-button">
    <span class="fd-button__text">Default Button</span>
</button>
<button role="button" class="fd-button fd-button--emphasized">
    <span class="fd-button__text">Emphasized Button</span>
</button>
<button role="button" class="fd-button fd-button--ghost">
    <span class="fd-button__text">Ghost Button</span>
</button>
<button role="button" class="fd-button fd-button--positive">
    <span class="fd-button__text">Positive Button</span>
</button>
<button role="button" class="fd-button fd-button--negative">
    <span class="fd-button__text">Negative Button</span>
</button>
<button role="button" class="fd-button fd-button--attention">
    <span class="fd-button__text">Attention Button</span>
</button>
<button role="button" class="fd-button fd-button--transparent">
    <span class="fd-button__text">Transparent Button</span>
</button>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-button--attention` | Attention button - Requires user attention. Used for actions that need special attention but aren't necessarily positive or negative. Should always be accompanied by descriptive text. |
| `fd-button--emphasized` | Emphasized button - Primary action button. Used to indicate the main/primary action on a screen. Should be used sparingly - typically only one per page or section. |
| `fd-button--ghost` | Ghost button - Secondary highlighted actions. Used when a page has a primary action but you need to highlight a secondary action. Common in content toolbars where you want visual emphasis without competing with the primary button. |
| `fd-button--menu` | Menu button modifier. The menu button is the default trigger for dropdown menus. It's tightly coupled with the Menu component and cannot be used independently. |
| `fd-button--negative` | Negative button - Destructive or reject actions. Used for negative semantic actions like "Delete", "Reject", or "Cancel". Should always be accompanied by text to clarify the destructive action. |
| `fd-button--positive` | Positive button - Affirmative or accept actions. Used for positive semantic actions like "Accept", "Approve", or "Confirm". Should always be accompanied by text to clarify the action. |
| `fd-button--toggled` | A toggle button switches between two states |
| `fd-button--transparent` | Transparent button - Secondary actions in toolbars. Used for negative path actions within headers/footers, and secondary toolbar actions. Has minimal visual weight with transparent background by default. |

## States

| Class | Description |
|-------|-------------|
| `is-disabled` | Disabled state |

## BEM Elements

This component uses the following BEM elements:

- `fd-button__badge`
- `fd-button__badge--attention`
- `fd-button__instructions`
- `fd-button__text`

## Related Components

This component works with or depends on:

- `button`
- `button-split`
- `icon`
- `menu`
- `popover`
- `segmented-button`

## Design Tokens

Key CSS variables used by this component:

- `--attention`
- `--decisive`
- `--fdButton_Badge_Height`
- `--fdButton_Badge_Margin`
- `--fdButton_Badge_Margin_Inline_Start`
- `--fdButton_Badge_Offset`
- `--fdButton_Badge_Padding_Inline`
- `--fdButton_Badge_Position`
- `--fdButton_Badge_Position_Attention`
- `--fdButton_Badge_Size_Attention`
- `--fdButton_Badge_Width`
- `--fdButton_Clickable_Height`
- `--fdButton_Compact_Height`
- `--fdButton_Font_Family`
- `--fdButton_Height`

*...and 5 more*

## Examples

### Button styles

- **Default button** is used for neutral or informative (secondary) actions.
- **Emphasized button** is used to indicate the primary action on the screen.
- **Ghost button** is used to trigger secondary actions. If a page already has a primary action, but you also need to highlight the most important action in a content toolbar, use the ghost style.
- **Positive button** is used to trigger positive semantic actions, such as _Accept_ and should always be accompanied by text.
- **Negative button** is used to trigger negative semantic actions, such as _Reject_ and should always be accompanied by text.
- **Attention button** is used to trigger a semantic action that needs attention and should always be accompanied by text.
- **Transparent button** is used to trigger a negative path action within a header or footer bar, and secondary actions in toolbars.

```html
<button role="button" class="fd-button">
    <span class="fd-button__text">Default Button</span>
</button>
<button role="button" class="fd-button fd-button--emphasized">
    <span class="fd-button__text">Emphasized Button</span>
</button>
<button role="button" class="fd-button fd-button--ghost">
    <span class="fd-button__text">Ghost Button</span>
</button>
<button role="button" class="fd-button fd-button--positive">
    <span class="fd-button__text">Positive Button</span>
</button>
<button role="button" class="fd-button fd-button--negative">
    <span class="fd-button__text">Negative Button</span>
</button>
<button role="button" class="fd-button fd-button--attention">
    <span class="fd-button__text">Attention Button</span>
</button>
<button role="button" class="fd-button fd-button--transparent">
    <span class="fd-button__text">Transparent Button</span>
</button>
```

### Toggle button

A toggle button switches between two states. First is the active state, second is inactive. Use the toggle button for secondary actions.
Active (toggled) button should have \

```html
<button role="button" class="fd-button" aria-pressed="false">Default Toggle</button>
<button role="button" class="fd-button fd-button--emphasized" aria-pressed="false">Emphasized Toggle</button>
<button role="button" class="fd-button fd-button--ghost" aria-pressed="false">Ghost Toggle</button>
<button role="button" class="fd-button fd-button--positive" aria-pressed="false">Positive Toggle</button>
<button role="button" class="fd-button fd-button--negative" aria-pressed="false">Negative Toggle</button>
<button role="button" class="fd-button fd-button--attention" aria-pressed="false">Attention Toggle</button>
<button role="button" class="fd-button fd-button--transparent" aria-pressed="false">Transparent Toggle</button>
<button role="button" class="fd-button fd-button--toggled" aria-pressed="true">Default Toggle</button>
<button role="button" class="fd-button fd-button--emphasized fd-button--toggled" aria-pressed="true">Emphasized Toggle</button>
<button role="button" class="fd-button fd-button--ghost fd-button--toggled" aria-pressed="true">Ghost Toggle</button>
<button role="button" class="fd-button fd-button--positive fd-button--toggled" aria-pressed="true">Positive Toggle</button>
<button role="button" class="fd-button fd-button--negative fd-button--toggled" aria-pressed="true">Negative Toggle</button>
<button role="button" class="fd-button fd-button--attention fd-button--toggled" aria-pressed="true">Attention Toggle</button>
<button role="button" class="fd-button fd-button--transparent fd-button--toggled" aria-pressed="true">Transparent Toggle</button>
<button role="button" class="fd-button fd-button--toggled" aria-pressed="false" disabled>Default Toggle</button>
<button role="button" class="fd-button fd-button--emphasized fd-button--toggled" aria-pressed="false" disabled>Emphasized Toggle</button>
<button role="button" class="fd-button fd-button--ghost fd-button--toggled" aria-pressed="false" disabled>Ghost Toggle</button>
<button role="button" class="fd-button fd-button--positive fd-button--toggled" aria-pressed="false" disabled>Positive Toggle</button>
<button role="button" class="fd-button fd-button--negative fd-button--toggled" aria-pressed="false" disabled>Negative Toggle</button>
<button role="button" class="fd-button fd-button--attention fd-button--toggled" aria-pressed="false" disabled>Attention Toggle</button>
<button role="button" class="fd-button fd-button--transparent fd-button--toggled" aria-pressed="false" disabled>Transparent Toggle</button>
```

### Button With Badge

Button gets a badge in cases of collecting a number of items from various pages in order to trigger an action.
Currently the Emphasized, Standard, Ghost and Transparent type of buttons are recommended to be used with Badge.
\n**Counter Badges cannot contain more than 4 characters**.
\nFor **Attention Badge** use the <code>fd-button__badge--attention</code> modifier class with <code>fd-button__badge</code> base class.

```html
<h4>Counter Badge</h4>
<button class="fd-button" role="button">
    <span class="fd-button__text">Badge Button</span>
    <span class="fd-button__badge">3984</span>
</button>
<button class="fd-button" role="button" title="Add to cart">
    <i class="sap-icon--cart" role="presentation" aria-hidden="true"></i>
    <span class="fd-button__badge">3</span>
</button>

<h4>Attention Badge</h4>
<button class="fd-button" role="button">
    <span class="fd-button__text">Badge Button</span>
    <span class="fd-button__badge fd-button__badge--attention" aria-label="Tag Warning"></span>
</button>
<button class="fd-button" role="button" title="Add to cart">
    <i class="sap-icon--cart" role="presentation" aria-hidden="true"></i>
    <span class="fd-button__badge fd-button__badge--attention" aria-label="Tag Warning"></span>
</button>
```

### Menu button

The Menu Button is the default trigger for the Menu (Horizon) component and is tightly coupled with it—it cannot be used independently. While the Menu component can function on its own, the Menu Button relies on it to provide a dropdown.
<br>
As a type of button, the Menu Button inherits all standard button types and their respective styles and states.

There are two types of Menu Buttons:
- Default Menu Button-Triggers the dropdown menu on click.
- Split Menu Button-Offers separate actions: one for a primary action and one for the dropdown.

If a fixed width is applied to the Menu Button, the dropdown arrow icon should be right-aligned. The recommended maximum width is 12rem..

```html
<button role="button" class="fd-button fd-button--emphasized fd-button--menu" title="Menu">
    <span class="fd-button__text">Emphasized Button</span>
    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
</button>
<button role="button" class="fd-button fd-button--menu" title="Menu">
    <span class="fd-button__text">Default Button</span>
    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
</button>
<button role="button" class="fd-button fd-button--ghost fd-button--menu" title="Menu">
    <span class="fd-button__text">Ghost Button</span>
    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
</button>
<button role="button" class="fd-button fd-button--positive fd-button--menu" title="Menu">
    <span class="fd-button__text">Positive Button</span>
    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
</button>
<button role="button" class="fd-button fd-button--negative fd-button--menu" title="Menu">
    <span class="fd-button__text">Negative Button</span>
    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
</button>
<button role="button" class="fd-button fd-button--attention fd-button--menu" title="Menu">
    <span class="fd-button__text">Attention Button</span>
    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
</button>
<button role="button" class="fd-button fd-button--transparent fd-button--menu" title="Menu">
    <span class="fd-button__text">Transparent Button</span>
    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
</button>
<button role="button" class="fd-button fd-button--emphasized fd-button--menu" title="Menu">
    <i class="sap-icon--cart" role="presentation" aria-hidden="true"></i>
    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
</button>
<button role="button" class="fd-button fd-button--menu" title="Menu">
    <i class="sap-icon--cart" role="presentation" aria-hidden="true"></i>
    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
</button>
<button role="button" class="fd-button fd-button-ghost fd-button--menu" title="Menu">
    <i class="sap-icon--cart" role="presentation" aria-hidden="true"></i>
    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
</button>
<button role="button" class="fd-button fd-button--menu fd-button--positive" title="Menu">
    <i class="sap-icon--cart" role="presentation" aria-hidden="true"></i>
    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
</button>
<button role="button" class="fd-button fd-button--menu fd-button--negative" title="Menu">
    <i class="sap-icon--cart" role="presentation" aria-hidden="true"></i>
    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
</button>
<button role="button" class="fd-button fd-button--menu fd-button--attention" title="Menu">
    <i class="sap-icon--cart" role="presentation" aria-hidden="true"></i>
    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
</button>
<button role="button" class="fd-button fd-button--menu fd-button--transparent" title="Menu">
    <i class="sap-icon--cart" role="presentation" aria-hidden="true"></i>
    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
</button>
<h3>Fixed Width</h3>
<button role="button" class="fd-button fd-button--emphasized fd-button--menu" title="Menu">
    <span class="fd-button__text">Button</span>
    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
</button>
<button role="button" class="fd-button fd-button--menu" title="Menu">
    <span class="fd-button__text">Button</span>
    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
</button>
<button role="button" class="fd-button fd-button--menu" title="Menu">
    <i class="sap-icon--filter" role="presentation" aria-hidden="true"></i>
    <span class="fd-button__text">Button</span>
    <i class="sap-icon--slim-arrow-down" role="presentation" aria-hidden="true"></i>
</button>
```

### Icon or text

These buttons contain either icons **or** text, as it is highly recommended not to combine the two.

**Use icon buttons for basic actions such as:**

- _Edit_
- _Back to previous screen_
- _Remove from list_ etc.


Make sure the default accessibility text for the icon is appropriate for your use case. If the text is not ideal, define an app-specific accessibility text.


All button styles can be paired with an icon. You can use the \

```html
<button role="button" class="fd-button fd-button--emphasized">
    <span class="fd-button__text">Add to Cart</span>
</button>
<button role="button" class="fd-button">
    <span class="fd-button__text">Add to Cart</span>
</button>
<button role="button" class="fd-button fd-button--transparent">
    <span class="fd-button__text">Add to Cart</span>
</button>
<button role="button" class="fd-button fd-button--ghost">
    <span class="fd-button__text">Add to Cart</span>
</button>
<button role="button" class="fd-button fd-button--positive">
    <span class="fd-button__text">Approve</span>
</button>
<button role="button" class="fd-button fd-button--negative">
    <span class="fd-button__text">Reject</span>
</button>
<button role="button" class="fd-button fd-button--attention">
    <span class="fd-button__text">Attention</span>
</button>
<button role="button" title="Add to cart" class="fd-button fd-button--emphasized">
    <i class="sap-icon--cart" role="presentation" aria-hidden="true"></i>
</button>
<button role="button" title="Add to cart" class="fd-button">
    <i class="sap-icon--cart" role="presentation" aria-hidden="true"></i>
</button>
<button role="button" title="Add to cart" class="fd-button fd-button--transparent">
    <i class="sap-icon--cart" role="presentation" aria-hidden="true"></i>
</button>
<button role="button" title="Filter" class="fd-button fd-button--ghost">
    <i class="sap-icon--filter" role="presentation" aria-hidden="true"></i>
</button>
<button role="button" title="Accept" class="fd-button fd-button--positive">
    <i class="sap-icon--accept" role="presentation" aria-hidden="true"></i>
</button>
<button role="button" title="Decline" class="fd-button fd-button--negative">
    <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
</button>
<button role="button" title="Decline" class="fd-button fd-button--attention">
    <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
</button>
<button aria-label="Add to cart" class="fd-button fd-button--emphasized">
    <i class="sap-icon--cart" role="presentation" aria-hidden="true"></i>
    <span class="fd-button__text">Add to Cart</span>
</button>
<button aria-label="Add to cart" class="fd-button">
    <i class="sap-icon--cart" role="presentation" aria-hidden="true"></i>
    <span class="fd-button__text">Add to Cart</span>
</button>
<button aria-label="Add to cart" class="fd-button fd-button--transparent">
    <i class="sap-icon--cart" role="presentation" aria-hidden="true"></i>
    <span class="fd-button__text">Add to Cart</span>
</button>
<button aria-label="Filter" class="fd-button fd-button--ghost">
    <i class="sap-icon--filter" role="presentation" aria-hidden="true"></i>
    <span class="fd-button__text">Filter</span>
</button>
<button aria-label="Accept" class="fd-button fd-button--positive">
    <i class="sap-icon--accept" role="presentation" aria-hidden="true"></i>
    <span class="fd-button__text">Accept</span>
</button>
<button aria-label="Decline" class="fd-button fd-button--negative">
    <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
    <span class="fd-button__text">Decline</span>
</button>
<button aria-label="Decline" class="fd-button fd-button--attention">
    <i class="sap-icon--decline" role="presentation" aria-hidden="true"></i>
    <span class="fd-button__text">Decline</span>
</button>
```

### Button states

These button types indicate different states: normal, selected, disabled and focusable disabled.

- **Normal**: The button’s default state. It can be selected to perform a corresponding action.
- **Disabled**: It cannot be selected. This state can be displayed by using the \

```html
<button role="button" class="fd-button fd-button--emphasized">Normal State</button>
<button role="button" class="fd-button fd-button--emphasized" aria-disabled="true" disabled>Disabled State</button>
<button role="button" aria-disabled="true" aria-describedby="fd-ONXuqucVcF1" class="fd-button fd-button--emphasized is-disabled" type="button">Disabled Focusable</button>
<p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF1">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
<button role="button" class="fd-button">Normal State</button>
<button role="button" class="fd-button is-disabled" aria-disabled="true" disabled>Disabled State</button>
<button role="button" aria-disabled="true" aria-describedby="fd-ONXuqucVcF2" class="fd-button is-disabled" type="button">Disabled Focusable</button>
<p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF2">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
<button role="button" class="fd-button fd-button--transparent">Normal State</button>
<button role="button" class="fd-button fd-button--transparent is-disabled" aria-disabled="true" disabled>Disabled State</button>
<button role="button" aria-disabled="true" aria-describedby="fd-ONXuqucVcF3" class="fd-button fd-button--transparent is-disabled" type="button">Disabled Focusable</button>
<p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF3">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
<button role="button" class="fd-button fd-button">Normal State</button>
<button role="button" class="fd-button fd-button" aria-disabled="true" disabled>Disabled State</button>
<button role="button" aria-disabled="true" aria-describedby="fd-ONXuqucVcF4" class="fd-button fd-button is-disabled" type="button">Disabled Focusable</button>
<p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF4">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
<button role="button" class="fd-button fd-button--ghost">Normal State</button>
<button role="button" class="fd-button fd-button--ghost" aria-disabled="true" disabled>Disabled State</button>
<button role="button" aria-disabled="true" aria-describedby="fd-ONXuqucVcF5" class="fd-button fd-button--ghost is-disabled" type="button">Disabled Focusable</button>
<p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF5">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
<button role="button" class="fd-button fd-button--positive">Normal State</button>
<button role="button" class="fd-button fd-button--positive" aria-disabled="true" disabled>Disabled State</button>
<button role="button" aria-disabled="true" aria-describedby="fd-ONXuqucVcF6" class="fd-button fd-button--positive is-disabled" type="button">Disabled Focusable</button>
<p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF6">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
<button role="button" class="fd-button fd-button--negative">Normal State</button>
<button role="button" class="fd-button fd-button--negative" aria-disabled="true" disabled>Disabled State</button>
<button role="button" aria-disabled="true" aria-describedby="fd-ONXuqucVcF7" class="fd-button fd-button--negative is-disabled" type="button">Disabled Focusable</button>
<p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF7">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
<button role="button" class="fd-button fd-button--attention">Normal State</button>
<button role="button" class="fd-button fd-button--attention is-disabled" aria-disabled="true" disabled>Disabled State</button>
<button role="button" aria-disabled="true" aria-describedby="fd-ONXuqucVcF8" class="fd-button fd-button--attention is-disabled" type="button">Disabled Focusable</button>
<p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF8">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
```

### Focusable disabled

The disabled button can be focusable by adding the \

```html
<button role="button" aria-disabled="true" aria-describedby="fd-ONXuqucVcF" class="fd-button is-disabled" type="button">Disabled Focusable</button>
<p aria-live="assertive" class="fd-button__instructions" id="fd-ONXuqucVcF">This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.</p>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/button/button.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
