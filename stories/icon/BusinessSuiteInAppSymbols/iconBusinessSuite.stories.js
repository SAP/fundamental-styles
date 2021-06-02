import dataBusinessSuite from './dataBusinessSuite.json';

export default {
    title: 'Components/Icons/BusinessSuiteInAppSymbol Icons',
    parameters: {
        description: `Icons are used to provide visual clarity, save screen space, and help guide users as they navigate an application. They are often used as visual elements within other components, although they can be used independently, given that they can be read by screen readers or have a tooltip for accessibility purposes. See [Project Confirguration](https://sap.github.io/fundamental-styles/?path=/docs/introduction-overview--page) for instructions on how to use the 'BusinessSuiteInAppSymbols' icon font on your page.

##Usage
**Use the icon if:**

- You want to display an icon for illustrative purposes only, without interaction states, acting as a non-interactive icon/pictogram.
- You intend to pair the icon with another method of communication i.e. with text or a tooltip.


Note: If an icon needs to be selected or have any interaction states, it is recommended to use the transparent button style. See **Button** for more details on how to implement it.
          `,
        tags: ['development'],
        components: ['button', 'button-split', 'icon', 'menu', 'popover', 'segmented-button']
    }
};

export const sizes = () => `

    <span class="sap-icon-businessSuiteInAppSymbols sap-icon-businessSuiteInAppSymbols--heart"></span>
    <br />
    <span class="sap-icon-businessSuiteInAppSymbols sap-icon-businessSuiteInAppSymbols--heart" style="font-size:2rem"></span>
    <br />
    <span class="sap-icon-businessSuiteInAppSymbols sap-icon-businessSuiteInAppSymbols--heart" style="font-size:5rem"></span>
`;

sizes.parameters = {
    docs: {
        iframeHeight: 250,
        storyDescription: 'Icons don’t have predefined sizes because they align with the font size value. They are vector graphics, meaning they can be easily resized without compromising their appearance. And because icons are essentially a font, there are unlimited sizes.'
    }
};

/**
 * There are different semantic statuses that can be applied to the icon by adding a modifier class.
 *
 * | **Status**      | **Modifier class**               |
 * | --------------: | :------------------------------- |
 * | Default         | ` sap-icon-businessSuiteInAppSymbols--color-default`        |
 * | Contrast        | ` sap-icon-businessSuiteInAppSymbols--color-contrast`       |
 * | Non-interactive | ` sap-icon-businessSuiteInAppSymbols--color-non-interactive`|
 * | Tile            | ` sap-icon-businessSuiteInAppSymbols--color-tile`           |
 * | Marker          | ` sap-icon-businessSuiteInAppSymbols--color-marker`         |
 * | Critical        | ` sap-icon-businessSuiteInAppSymbols--color-critical`       |
 * | Negative        | ` sap-icon-businessSuiteInAppSymbols--color-negative`       |
 * | Neutral         | ` sap-icon-businessSuiteInAppSymbols--color-neutral`        |
 * | Positive        | ` sap-icon-businessSuiteInAppSymbols--color-positive`       |
 */

export const colors = () => `
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
 `;

export const businessSuiteIcons = () => {
    const div = document.createElement('div');
    div.className = 'fddocs-container';
    div.innerHTML = dataBusinessSuite.businessSuiteIcons.map((icon) => {
        return (
            '<div class="fddocs-container--icon">' +
                `<span class="sap-icon-businessSuiteInAppSymbols sap-icon-businessSuiteInAppSymbols--${icon}" style="font-size:3rem"></span>` +
                `<div>.sap-icon-businessSuiteInAppSymbols--${icon}</div>` +
            '</div><br />'
        );
    }).join('');
    return div.outerHTML;
};

businessSuiteIcons.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'For icons of <b>BusinessSuiteInAppSymbols</b> font-family add the <code>sap-icon-businessSuiteInAppSymbols--{icon-name}</code> modifier class identifying the icon style to the <code>sap-icon-businessSuiteInAppSymbols</code> class. For example, for a <i>heart</i> icon, add <code>sap-icon-businessSuiteInAppSymbols sap-icon-businessSuiteInAppSymbols--heart</code> with the desired font size value.'
    },
    skipRTLSnapshot: true
};
