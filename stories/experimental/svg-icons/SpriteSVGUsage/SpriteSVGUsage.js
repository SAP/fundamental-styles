import description from '!!raw-loader!./docs.md?raw';
import sprite from '../../../../src/icons/fiori-sprite.svg';
import styles from '../../../../src/icons/fn-icons-sprite.scss';

styles.use();

const baseClass = 'fn-icon-sprite';

const getIcon = (size = 16, color = 'default') => {
    return `
        <svg class="${baseClass} ${baseClass}--size-${size} ${baseClass}--color-${color}">
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
            Positive color: ${getIcon(40, 'positive')}
        </div>`;
};

spriteSVGUsage.parameters = {
    docs: {
        description: {
            story: description
        }
    }
};
