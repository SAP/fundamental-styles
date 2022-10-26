import 'icons/src/fn-icons-sprite.scss';
import sprite from 'icons/src/fiori-sprite.svg?uri';

const baseClass = 'fn-icon-sprite';

const getIcon = (size = 16, color = 'black') => {
    // noinspection CssInvalidPropertyValue
    return `
        <svg class='${baseClass}' style='fill: ${color}; width: ${size}px; height: ${size}px'>
            <use xlink:href='${sprite}#fiori-accelerated'></use>
        </svg>
    `;
};

export const spriteSVGUsage = () => {
    return `<style>
            .example-container {
                display: flex;
                align-items: center;
            }
        </style>
        <div class='example-container'>
            Default size(16): ${getIcon()}
        </div>
        <div class='example-container'>
            Size 32: ${getIcon(32)}
        </div>
        <div class='example-container'>
            Size 40: ${getIcon(40)}
        </div>
        <div class='example-container'>
            Green color: ${getIcon(40, 'green')}
        </div>`;
};

spriteSVGUsage.parameters = {
    docs: {
        description: {
            story: `
Include \`@fundamental-styles/fn-icons/dist/fn-icons-sprite.css\` in your document and then you can use
this method

- \`fn-icon-sprite\` is basic class which should be applied to every icon.
- \`fn-icon-sprite--size-{size}\` modifier class is for sizing rendered icon. \`size\` can be
  one of \`16\`, \`18\`, \`20\`, \`22\`, \`24\`, \`26\`, \`28\`, \`30\`, \`32\`, \`34\`, \`36\`, \`38\`, \`40\`
- \`fn-icon-sprite--color-{color-name}\` modifier class for setting color of the icon. \`color-name\` can be
  one of \`default\`, \`contrast\`, \`non-interactive\`, \`tile\`, \`marker\`, \`critical\`, \`negative\`, \`neutral\`, \`positive\`

Bear in mind that these modifier classes are optional. SVG tag is directly injected into the DOM and because of that,
you can manipulate it as you wish. You can create your own classes and assign them to SVG elements directly. That way
everything is in your hands.
            `
        }
    }
};
