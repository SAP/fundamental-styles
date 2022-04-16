import description from '!!raw-loader!./docs.md?raw';
import sprite from '../../../../../src/icons/fiori-sprite.svg';
import styles from '../../../../../src/icons/fn-icons-sprite.scss';

styles.use();

const baseClass = 'fn-icon-sprite';

const getIcon = (size = 16, color = 'black') => {
    // noinspection CssInvalidPropertyValue
    return `
        <svg class="${baseClass}" style="fill: ${color}; width: ${size}px; height: ${size}px">
            <use xlink:href="${sprite}#fiori-accelerated"></use>
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
        <div class="example-container">
            Default size(16): ${getIcon()}
        </div>
        <div class="example-container">
            Size 32: ${getIcon(32)}
        </div>
        <div class="example-container">
            Size 40: ${getIcon(40)}
        </div>
        <div class="example-container">
            Green color: ${getIcon(40, 'green')}
        </div>`;
};

spriteSVGUsage.parameters = {
    docs: {
        description: {
            story: description
        }
    }
};
