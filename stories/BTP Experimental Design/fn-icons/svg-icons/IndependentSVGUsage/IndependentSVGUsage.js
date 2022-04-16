import description from '!!raw-loader!./docs.md?raw';
import styles from '../../../../../src/icons/fn-icons-independent.scss';

styles.use();

export const independentSVGUsage = () => {
    return `
        <style>
            .example-container {
                display: flex;
                align-items: center;
            }
        </style>
        <div class="example-container">
            Default size(16): <span class="fn-icon fn-icon--accelerated"></span>
        </div>
        <div class="example-container">
            Size 32: <span class="fn-icon fn-icon--accelerated" style="width: 32px; height: 32px"></span>
        </div>
        <div class="example-container">
            Size 40: <span class="fn-icon fn-icon--accelerated" style="width: 40px; height: 40px"></span>
        </div>
        <div class="example-container">
            Green color: <span class="fn-icon fn-icon--accelerated" style="width: 40px; height: 40px; background-color: green"></span>
        </div>
    `;
};

independentSVGUsage.parameters = {
    docs: {
        description: {
            story: description
        }
    }
};
