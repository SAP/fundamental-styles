import 'icons/src/fn-icons-independent.scss';

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
            story: `
Include \`@fundamental-styles/fn-icons/dist/fn-icons-independent.css\` in your document and then you can use
this method

- \`fn-icon\` is basic class which should be applied to every icon.
- \`fn-icon--{icon-name}\` modifier class is for selecting which icon should be rendered.
- \`fn-icon--size-{size}\` modifier class is for sizing rendered icon. \`size\` can be
   one of \`16\`, \`18\`, \`20\`, \`22\`, \`24\`, \`26\`, \`28\`, \`30\`, \`32\`, \`34\`, \`36\`, \`38\`, \`40\`
- \`fn-icon--color-{color-name}\` modifier class for setting color of the icon. \`color-name\` can be
   one of \`default\`, \`contrast\`, \`non-interactive\`, \`tile\`, \`marker\`, \`critical\`, \`negative\`, \`neutral\`, \`positive\`
            `
        }
    }
};
