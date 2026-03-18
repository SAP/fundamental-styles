import colorsExampleHtml from "./colors.example.html?raw";
import backgroundsExampleHtml from "./backgrounds.example.html?raw";
import sizesExampleHtml from "./sizes.example.html?raw";
import '../../../../../src/button.scss';
import '../../../../../src/button-split.scss';
import '../../../../../src/icon.scss';
import '../../../../../src/menu.scss';
import '../../../../../src/popover.scss';
import '../../../../../src/segmented-button.scss';
import data from './data.json';
export default {
  title: 'Components/Icons/SAP Icons',
  parameters: {
    description: `Icons are used to provide visual clarity, save screen space, and help guide users as they navigate an application. They are often used as visual elements within other components, although they can be used independently, given that they can be read by screen readers or have a tooltip for accessibility purposes. See [Project Confirguration](https://sap.github.io/fundamental-styles/?path=/docs/introduction--overview#icons) for instructions on how to use the SAP icon font on your page.

##Usage
**Use the icon if:**

- You want to display an icon for illustrative purposes only, without interaction states, acting as a non-interactive icon/pictogram.
- You intend to pair the icon with another method of communication i.e. with text or a tooltip.


Note: If an icon needs to be selected or have any interaction states, it is recommended to use the transparent button style. See **Button** for more details on how to implement it.
          `,
    tags: ['development']
  }
};
export const Sizes = () => sizesExampleHtml;
Sizes.parameters = {
  docs: {
    description: {
      story: 'Icons don’t have predefined sizes because they align with the font size value. They are vector graphics, meaning they can be easily resized without compromising their appearance. And because icons are essentially a font, there are unlimited sizes.'
    }
  }
};
export const Colors = () => colorsExampleHtml;
Colors.parameters = {
  docs: {
    description: {
      story: `There are different semantic statuses that can be applied to the icon by adding a modifier class.<br><br>

| **Status**      | **Modifier class**               |
| --------------: | :------------------------------- |
| Default         | \`sap-icon--color-default\`        |
| Contrast        | \`sap-icon--color-contrast\`       |
| Non-interactive | \`sap-icon--color-non-interactive\`|
| Tile            | \`sap-icon--color-tile\`           |
| Marker          | \`sap-icon--color-marker\`         |
| Critical        | \`sap-icon--color-critical\`       |
| Negative        | \`sap-icon--color-negative\`       |
| Neutral         | \`sap-icon--color-neutral\`        |
| Positive        | \`sap-icon--color-positive\`       |`
    }
  }
};

export const Backgrounds = () => backgroundsExampleHtml;
Backgrounds.parameters = {
  docs: {
    description: {
      story: `There are different semantic statuses that can be applied to the icon background by adding a modifier class.<br><br>

| **Status**      | **Modifier class**               |
| --------------: | :------------------------------- |
| Default         | \`sap-icon--background-default\`        |
| Contrast        | \`sap-icon--background-contrast\`       |
| Non-interactive | \`sap-icon--background-non-interactive\`|
| Tile            | \`sap-icon--background-tile\`           |
| Marker          | \`sap-icon--background-marker\`         |
| Critical        | \`sap-icon--background-critical\`       |
| Negative        | \`sap-icon--background-negative\`       |
| Neutral         | \`sap-icon--background-neutral\`        |
| Positive        | \`sap-icon--background-positive\`       |`
    }
  }
};

export const AvailableIcons = () => {
  const div = document.createElement('div');
  div.className = 'fddocs-container';
  div.style.cssText = 'display:flex;flex-wrap:wrap;gap:0.5rem';
  div.innerHTML = data.icons.map(icon => {
    return '<div class="fddocs-container--icon" style="display:flex;flex-direction:column;align-items:center;width:8rem;padding:0.5rem;text-align:center">' + `<span class="sap-icon sap-icon--${icon}" role="presentation" aria-hidden="true" aria-label="${icon}" style="font-size:2rem"></span>` + `<div style="font-size:0.625rem;word-break:break-all">.sap-icon--${icon}</div>` + '</div>';
  }).join('');
  return div.outerHTML;
};
AvailableIcons.parameters = {
  docs: {
    description: {
      story: 'There are several icons available. To display any one of these icons, add the `sap-icon--{icon-name}` modifier class identifying the icon style to the `sap-icon` class. For example, for a search icon, add `sap-icon sap-icon--search` with the desired font size value.'
    }
  },
  skipRTLSnapshot: true
};