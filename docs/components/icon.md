---
component: icon
title: Components/Icons/SAP Icons
category: Components
selector: 
cssFile: 
sourcePath: packages/styles/stories/Components/Icons/icon/SAPIcons/icon.stories.js
generatedAt: 2026-05-28T15:51:35.542Z
---

# Components/Icons/SAP Icons

Icons are used to provide visual clarity, save screen space, and help guide users as they navigate an application. They are often used as visual elements within other components, although they can be used independently, given that they can be read by screen readers or have a tooltip for accessibility purposes. See [Project Confirguration](https://sap.github.io/fundamental-styles/?path=/docs/introduction--overview#icons) for instructions on how to use the SAP icon font on your page.

##Usage
**Use the icon if:**

- You want to display an icon for illustrative purposes only, without interaction states, acting as a non-interactive icon/pictogram.
- You intend to pair the icon with another method of communication i.e. with text or a tooltip.


Note: If an icon needs to be selected or have any interaction states, it is recommended to use the transparent button style. See **Button** for more details on how to implement it.

## Basic Usage

```html
<div style="display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center;">
    <span class="sap-icon sap-icon--cart" role="presentation" aria-hidden="true" aria-label="cart"></span>
    <span class="sap-icon sap-icon--cart" role="presentation" aria-hidden="true" aria-label="cart" style="font-size: 2rem"></span>
    <span class="sap-icon sap-icon--cart" role="presentation" aria-hidden="true" aria-label="cart" style="font-size: 3rem"></span>
    <span class="sap-icon sap-icon--cart" role="presentation" aria-hidden="true" aria-label="cart" style="font-size: 4rem"></span>
    <span class="sap-icon sap-icon--cart" role="presentation" aria-hidden="true" aria-label="cart" style="font-size: 5rem"></span>
</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `--ai` | Style variant |
| `--background-contrast` | Style variant |
| `--background-critical` | Style variant |
| `--background-default` | Style variant |
| `--background-information` | Style variant |
| `--background-marker` | Style variant |
| `--background-negative` | Style variant |
| `--background-neutral` | Style variant |
| `--background-non-interactive` | Style variant |
| `--background-positive` | Style variant |
| `--background-tile` | Style variant |
| `--basket` | Style variant |
| `--calendar` | Style variant |
| `--cart` | Style variant |
| `--color-contrast` | Style variant |
| `--color-critical` | Style variant |
| `--color-default` | Style variant |
| `--color-information` | Style variant |
| `--color-marker` | Style variant |
| `--color-negative` | Style variant |
| `--color-neutral` | Style variant |
| `--color-non-interactive` | Style variant |
| `--color-positive` | Style variant |
| `--color-tile` | Style variant |
| `--complete` | Style variant |
| `--da` | Style variant |
| `--database` | Style variant |
| `--employee` | Style variant |
| `--favorite` | Style variant |
| `--hint` | Style variant |
| `--home` | Style variant |
| `--lightbulb` | Style variant |
| `--sap` | Style variant |
| `--video` | Style variant |
| `--wrench` | Style variant |

## States

| Class | Description |
|-------|-------------|
| `is-focus` | Focus state |

## Examples

### Sizes

Icons don’t have predefined sizes because they align with the font size value. They are vector graphics, meaning they can be easily resized without compromising their appearance. And because icons are essentially a font, there are unlimited sizes.

```html
<div style="display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center;">
    <span class="sap-icon sap-icon--cart" role="presentation" aria-hidden="true" aria-label="cart"></span>
    <span class="sap-icon sap-icon--cart" role="presentation" aria-hidden="true" aria-label="cart" style="font-size: 2rem"></span>
    <span class="sap-icon sap-icon--cart" role="presentation" aria-hidden="true" aria-label="cart" style="font-size: 3rem"></span>
    <span class="sap-icon sap-icon--cart" role="presentation" aria-hidden="true" aria-label="cart" style="font-size: 4rem"></span>
    <span class="sap-icon sap-icon--cart" role="presentation" aria-hidden="true" aria-label="cart" style="font-size: 5rem"></span>
</div>
```

### Colors

There are different semantic statuses that can be applied to the icon by adding a modifier class.<br><br>

| **Status**      | **Modifier class**               |
| --------------: | :------------------------------- |
| Default         | \

```html
<div style="display: flex; gap: 1.5rem; flex-wrap: wrap;">
    <span class="sap-icon sap-icon--da is-focus" style="font-size:2rem" tabindex="0" role="button" aria-label="diamond"></span>
    <span class="sap-icon sap-icon--da sap-icon--color-default" role="presentation" aria-label="diamond" style="font-size:2rem"></span>
    <span class="sap-icon sap-icon--da sap-icon--color-contrast" role="presentation" aria-hidden="true" aria-label="diamond" style="font-size:2rem; background: var(--sapContent_IconColor);"></span>
    <span class="sap-icon sap-icon--da sap-icon--color-non-interactive" role="presentation" aria-hidden="true" aria-label="diamond" style="font-size:2rem"></span>
    <span class="sap-icon sap-icon--da sap-icon--color-tile" role="presentation" aria-hidden="true" aria-label="diamond" style="font-size:2rem"></span>
    <span class="sap-icon sap-icon--da sap-icon--color-marker" role="presentation" aria-hidden="true" aria-label="diamond" style="font-size:2rem"></span>
    <span class="sap-icon sap-icon--da sap-icon--color-critical" role="presentation" aria-hidden="true" aria-label="diamond" style="font-size:2rem"></span>
    <span class="sap-icon sap-icon--da sap-icon--color-negative" role="presentation" aria-hidden="true" aria-label="diamond" style="font-size:2rem"></span>
    <span class="sap-icon sap-icon--da sap-icon--color-neutral" role="presentation" aria-hidden="true" aria-label="diamond" style="font-size:2rem"></span>
    <span class="sap-icon sap-icon--da sap-icon--color-positive" role="presentation" aria-hidden="true" aria-label="diamond" style="font-size:2rem"></span>
    <span class="sap-icon sap-icon--da sap-icon--color-information" role="presentation" aria-hidden="true" aria-label="diamond" style="font-size:2rem"></span>
</div>
<br><br>
<div style="display: flex; gap: 1.5rem; flex-wrap: wrap;">
    <span class="sap-icon sap-icon--ai" role="button" aria-label="ai" style="font-size:2rem; color: blueviolet;" tabindex="0"></span>
    <span class="sap-icon sap-icon--ai" role="presentation" aria-hidden="true" aria-label="ai" style="font-size:2rem; color: orangered;"></span>
    <span class="sap-icon sap-icon--ai" role="presentation" aria-hidden="true" aria-label="ai" style="font-size:2rem; color: olivedrab;"></span>
    <span class="sap-icon sap-icon--ai" role="presentation" aria-hidden="true" aria-label="ai" style="font-size:2rem; color: red;"></span>
    <span class="sap-icon sap-icon--ai" role="presentation" aria-hidden="true" aria-label="ai" style="font-size:2rem; color: orange;"></span>
    <span class="sap-icon sap-icon--ai" role="presentation" aria-hidden="true" aria-label="ai" style="font-size:2rem; color: var(--sapAccentColor1);"></span>
    <span class="sap-icon sap-icon--ai" role="presentation" aria-hidden="true" aria-label="ai" style="font-size:2rem; color: var(--sapAccentColor6);"></span>
    <span class="sap-icon sap-icon--ai" role="presentation" aria-hidden="true" aria-label="ai" style="font-size:2rem; color: #B40569;"></span>
    <span class="sap-icon sap-icon--ai" role="presentation" aria-hidden="true" aria-label="ai" style="font-size:2rem; color: #45617C;"></span>
    <span class="sap-icon sap-icon--ai" role="presentation" aria-hidden="true" aria-label="ai" style="font-size:2rem; color: var(--sapAccentBackgroundColor7);"></span>
    <span class="sap-icon sap-icon--ai" role="presentation" aria-hidden="true" aria-label="ai" style="font-size:2rem; color: var(--sapPositiveColor);"></span>
</div>
```

### Backgrounds

There are different semantic statuses that can be applied to the icon background by adding a modifier class.<br><br>

| **Status**      | **Modifier class**               |
| --------------: | :------------------------------- |
| Default         | \

```html
<div style="display: flex; gap: 1.5rem; flex-wrap: wrap;">
    <span class="sap-icon sap-icon--video is-focus" role="button" aria-label="video" style="font-size:2rem" tabindex="0"></span>
    <span class="sap-icon sap-icon--wrench sap-icon--background-default" role="presentation" aria-hidden="true" aria-label="wrench" style="font-size:2rem"></span>
    <span class="sap-icon sap-icon--lightbulb sap-icon--background-contrast" role="presentation" aria-hidden="true" aria-label="lightbulb" style="font-size:2rem"></span>
    <span class="sap-icon sap-icon--employee sap-icon--background-non-interactive" role="presentation" aria-hidden="true" aria-label="employee" style="font-size:2rem"></span>
    <span class="sap-icon sap-icon--complete sap-icon--background-tile" role="presentation" aria-hidden="true" aria-label="complete" style="font-size:2rem"></span>
    <span class="sap-icon sap-icon--basket sap-icon--background-marker" role="presentation" aria-hidden="true" aria-label="basket" style="font-size:2rem"></span>
    <span class="sap-icon sap-icon--calendar sap-icon--background-critical" role="presentation" aria-hidden="true" aria-label="calendar" style="font-size:2rem"></span>
    <span class="sap-icon sap-icon--hint sap-icon--background-negative" role="presentation" aria-hidden="true" aria-label="hint" style="font-size:2rem"></span>
    <span class="sap-icon sap-icon--favorite sap-icon--background-neutral" role="presentation" aria-hidden="true" aria-label="favorite" style="font-size:2rem"></span>
    <span class="sap-icon sap-icon--home sap-icon--background-positive" role="presentation" aria-hidden="true" aria-label="home" style="font-size:2rem"></span>
    <span class="sap-icon sap-icon--database sap-icon--background-information" role="presentation" aria-hidden="true" aria-label="database" style="font-size:2rem"></span>
</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/Icons/icon/SAPIcons/icon.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
