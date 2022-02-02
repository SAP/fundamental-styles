import description from '!./docs.md?raw';

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
            Size 32: <span class="fn-icon fn-icon--accelerated fn-icon--size-32"></span>
        </div>
        <div class="example-container">
            Size 40: <span class="fn-icon fn-icon--accelerated fn-icon--size-40"></span>
        </div>
        <div class="example-container">
            Positive color: <span class="fn-icon fn-icon--accelerated fn-icon--size-40 fn-icon--color-positive"></span>
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
