---
component: iconBusinessSuite
title: Components/Icons/BusinessSuiteInAppSymbol Icons
category: Components
selector: 
cssFile: 
sourcePath: packages/styles/stories/Components/Icons/icon/BusinessSuiteInAppSymbols/iconBusinessSuite.stories.js
generatedAt: 2026-05-28T15:51:35.540Z
---

# Components/Icons/BusinessSuiteInAppSymbol Icons

Icons are used to provide visual clarity, save screen space, and help guide users as they navigate an application. They are often used as visual elements within other components, although they can be used independently, given that they can be read by screen readers or have a tooltip for accessibility purposes. See [Project Confirguration](https://sap.github.io/fundamental-styles/?path=/docs/introduction-overview--page) for instructions on how to use the 'BusinessSuiteInAppSymbols' icon font on your page.

##Usage
**Use the icon if:**

- You want to display an icon for illustrative purposes only, without interaction states, acting as a non-interactive icon/pictogram.
- You intend to pair the icon with another method of communication i.e. with text or a tooltip.


Note: If an icon needs to be selected or have any interaction states, it is recommended to use the transparent button style. See **Button** for more details on how to implement it.

## Basic Usage

```html
<span class="sap-icon-businessSuiteInAppSymbols sap-icon-businessSuiteInAppSymbols--heart"></span>
    <br />
    <span class="sap-icon-businessSuiteInAppSymbols sap-icon-businessSuiteInAppSymbols--heart" style="font-size:2rem"></span>
    <br />
    <span class="sap-icon-businessSuiteInAppSymbols sap-icon-businessSuiteInAppSymbols--heart" style="font-size:5rem"></span>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `--background-contrast` | Style variant |
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
| `--heart` | Style variant |

## Examples

### Sizes

Icons don’t have predefined sizes because they align with the font size value. They are vector graphics, meaning they can be easily resized without compromising their appearance. And because icons are essentially a font, there are unlimited sizes.

```html
<span class="sap-icon-businessSuiteInAppSymbols sap-icon-businessSuiteInAppSymbols--heart"></span>
    <br />
    <span class="sap-icon-businessSuiteInAppSymbols sap-icon-businessSuiteInAppSymbols--heart" style="font-size:2rem"></span>
    <br />
    <span class="sap-icon-businessSuiteInAppSymbols sap-icon-businessSuiteInAppSymbols--heart" style="font-size:5rem"></span>
```

### Colors

```html
<span class="sap-icon-businessSuiteInAppSymbols sap-icon-businessSuiteInAppSymbols--heart" style="font-size:5rem"></span>
 <span class="sap-icon-businessSuiteInAppSymbols sap-icon-businessSuiteInAppSymbols--heart sap-icon-businessSuiteInAppSymbols--color-default" style="font-size:5rem"></span>
 <span class="sap-icon-businessSuiteInAppSymbols sap-icon-businessSuiteInAppSymbols--heart sap-icon-businessSuiteInAppSymbols--color-contrast sap-icon-businessSuiteInAppSymbols--background-contrast" style="font-size:5rem"></span>
 <span class="sap-icon-businessSuiteInAppSymbols sap-icon-businessSuiteInAppSymbols--heart sap-icon-businessSuiteInAppSymbols--color-non-interactive" style="font-size:5rem"></span>
 <span class="sap-icon-businessSuiteInAppSymbols sap-icon-businessSuiteInAppSymbols--heart sap-icon-businessSuiteInAppSymbols--color-tile" style="font-size:5rem"></span>
 <span class="sap-icon-businessSuiteInAppSymbols sap-icon-businessSuiteInAppSymbols--heart sap-icon-businessSuiteInAppSymbols--color-marker" style="font-size:5rem"></span>
 <span class="sap-icon-businessSuiteInAppSymbols sap-icon-businessSuiteInAppSymbols--heart sap-icon-businessSuiteInAppSymbols--color-critical" style="font-size:5rem"></span>
 <span class="sap-icon-businessSuiteInAppSymbols sap-icon-businessSuiteInAppSymbols--heart sap-icon-businessSuiteInAppSymbols--color-negative" style="font-size:5rem"></span>
 <span class="sap-icon-businessSuiteInAppSymbols sap-icon-businessSuiteInAppSymbols--heart sap-icon-businessSuiteInAppSymbols--color-neutral" style="font-size:5rem"></span>
 <span class="sap-icon-businessSuiteInAppSymbols sap-icon-businessSuiteInAppSymbols--heart sap-icon-businessSuiteInAppSymbols--color-positive" style="font-size:5rem"></span>
 <span class="sap-icon-businessSuiteInAppSymbols sap-icon-businessSuiteInAppSymbols--heart sap-icon-businessSuiteInAppSymbols--color-information" style="font-size:5rem"></span>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/Icons/icon/BusinessSuiteInAppSymbols/iconBusinessSuite.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
