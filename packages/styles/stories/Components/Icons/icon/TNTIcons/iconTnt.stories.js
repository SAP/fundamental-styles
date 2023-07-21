import colorsExampleHtml from "./colors.example.html?raw";
import sizesExampleHtml from "./sizes.example.html?raw";
import '../../../../../src/button.scss';
import '../../../../../src/button-split.scss';
import '../../../../../src/icon.scss';
import '../../../../../src/menu.scss';
import '../../../../../src/popover.scss';
import '../../../../../src/segmented-button.scss';
import dataTNT from './dataTNT.json';
export default {
  title: 'Components/Icons/TNT Icons',
  parameters: {
    description: `Icons are used to provide visual clarity, save screen space, and help guide users as they navigate an application. They are often used as visual elements within other components, although they can be used independently, given that they can be read by screen readers or have a tooltip for accessibility purposes. See [Project Confirguration](https://sap.github.io/fundamental-styles/?path=/docs/introduction-overview--page) for instructions on how to use the 'SAP-icons-TNT' icon font on your page.

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
    storyDescription: `
 There are different semantic statuses that can be applied to the icon by adding a modifier class.
 
 | **Status**      | **Modifier class**               |
 | --------------: | :------------------------------- |
 | Default         | \` sap-icon-TNT--color-default\`        |
 | Contrast        | \` sap-icon-TNT--color-contrast\`       |
 | Non-interactive | \` sap-icon-TNT--color-non-interactive\`|
 | Tile            | \` sap-icon-TNT--color-tile\`           |
 | Marker          | \` sap-icon-TNT--color-marker\`         |
 | Critical        | \` sap-icon-TNT--color-critical\`       |
 | Negative        | \` sap-icon-TNT--color-negative\`       |
 | Neutral         | \` sap-icon-TNT--color-neutral\`        |
 | Positive        | \` sap-icon-TNT--color-positive\`       |
 `
  }
};
export const TntIcons = () => {
  const div = document.createElement('div');
  div.className = 'fddocs-container';
  div.innerHTML = dataTNT.tntIcons.map(icon => {
    return '<div class="fddocs-container--icon">' + `<span class="sap-icon-TNT sap-icon-TNT--${icon}" style="font-size:3rem"></span>` + `<div>.sap-icon-TNT--${icon}</div>` + '</div><br />';
  }).join('');
  return div.outerHTML;
};
TntIcons.parameters = {
  docs: {
    description: {
      story: 'For icons of <b>SAP-icons-TNT</b> font-family add the `sap-icon-TNT--{icon-name}` modifier class identifying the icon style to the `sap-icon-TNT` class. For example, for an <i>exceptions</i> icon, add `sap-icon-TNT sap-icon-TNT--exceptions` with the desired font size value.'
    }
  },
  skipRTLSnapshot: true
};