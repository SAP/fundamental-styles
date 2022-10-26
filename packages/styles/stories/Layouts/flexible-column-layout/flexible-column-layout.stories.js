import '../../../src/button.scss';
import '../../../src/flexible-column-layout.scss';
import '../../../src/icon.scss';
export default {
    title: 'Layouts/Flexible Column',
    parameters: {
        description: `
The flexible column layout is a layout control that displays multiple floorplans on a single page.
This allows faster and more fluid navigation between multiple floorplans than the usual page-by-page navigation.
The flexible column layout offers different layouts with up to three columns.
Users can expand the column they want to focus on, switch between different layouts, and view the rightmost column in full screen mode.

### Background Designs
- \`fd-flexible-column-layout\`: solid (default)
- \`fd-flexible-column-layout--translucent\`: translucent
- \`fd-flexible-column-layout--transparent\`: transparent
`,
        tags: ['f3', 'theme', 'development']
    }
};

export const ThreeColumnsLayout = () => `
<div class="fd-flexible-column-layout">
    <div class="fd-flexible-column-layout__column" style="width: 25%">
            <div class="docs-layout-grid-bg--tall"></div>
    </div>
    <div class="fd-flexible-column-layout__separator">
        <button class="fd-button fd-button--compact fd-button--transparent fd-flexible-column-layout__button"
                aria-label="Expand">
            <i class="sap-icon--slim-arrow-right" role="presentation"></i>
        </button>
    </div>
    <div class="fd-flexible-column-layout__column" style="width: 50%">
            <div class="docs-layout-grid-bg--tall"></div>
    </div>
    <div class="fd-flexible-column-layout__separator">
        <button class="fd-button fd-button--compact fd-button--transparent fd-flexible-column-layout__button"
                aria-label="Expand">
            <i class="sap-icon--slim-arrow-left" role="presentation"></i>
        </button>
    </div>
    <div class="fd-flexible-column-layout__column" style="width: 25%">
            <div class="docs-layout-grid-bg--tall"></div>
    </div>
</div>`;
ThreeColumnsLayout.parameters = {
    docs: {
        description: {
            story: `
- Minimum width of the device: \`1281px\`
- Wide column width: \`50%\`
- Narrow columns width: \`25%\`
`
        }
    }
};

export const TwoColumnsLayout = () => `
<div style="max-width: 1200px">
    <div class="fd-flexible-column-layout">
        <div class="fd-flexible-column-layout__column" style="width: 33%">
            <div class="docs-layout-grid-bg--tall"></div>
        </div>
        <div class="fd-flexible-column-layout__separator">
            <button class="fd-button fd-button--compact fd-button--transparent fd-flexible-column-layout__button"
                    aria-label="Expand">
                <i class="sap-icon--slim-arrow-right" role="presentation"></i>
            </button>
        </div>
        <div class="fd-flexible-column-layout__column" style="width: 67%">
            <div class="docs-layout-grid-bg--tall"></div>
        </div>
        <div class="fd-flexible-column-layout__separator">
            <button class="fd-button fd-button--compact fd-button--transparent fd-flexible-column-layout__button"
                    aria-label="Expand">
                <i class="sap-icon--slim-arrow-left" role="presentation"></i>
            </button>
        </div>
        <div class="fd-flexible-column-layout__column fd-flexible-column-layout__column--hidden" style="width: 0">
            <div class="docs-layout-grid-bg--tall"></div>
        </div>
    </div>
</div>`;
TwoColumnsLayout.parameters = {
    docs: {
        description: {
            story: `
- Width of the device: Max: \`1280px\`, Min: 961px
- Wide column width: \`67%\`
- Narrow column width: \`33%\`
`
        }
    }
};

export const OneColumnsLayout = () => `
<div style="max-width: 600px">
    <div class="fd-flexible-column-layout">
        <div class="fd-flexible-column-layout__column fd-flexible-column-layout__column--hidden" style="width: 0">
            <div class="docs-layout-grid-bg--tall"></div>
        </div>
        <div class="fd-flexible-column-layout__separator">
            <button class="fd-button fd-button--compact fd-button--transparent fd-flexible-column-layout__button"
                    aria-label="Expand">
                <i class="sap-icon--slim-arrow-right" role="presentation"></i>
            </button>
        </div>
        <div class="fd-flexible-column-layout__column" style="width: 100%">
            <div class="docs-layout-grid-bg--tall"></div>
        </div>
        <div class="fd-flexible-column-layout__separator">
            <button class="fd-button fd-button--compact fd-button--transparent fd-flexible-column-layout__button"
                    aria-label="Expand">
                <i class="sap-icon--slim-arrow-left" role="presentation"></i>
            </button>
        </div>
        <div class="fd-flexible-column-layout__column fd-flexible-column-layout__column--hidden" style="width: 0">
            <div class="docs-layout-grid-bg--tall"></div>
        </div>
    </div>
</div>`;
OneColumnsLayout.parameters = {
    docs: {
        description: {
            story: `
- Max width of the device: \`960px\`
- Column width: \`100%\`
`
        }
    }
};


