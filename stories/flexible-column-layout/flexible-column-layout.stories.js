export default {
    title: 'Layouts/Flexible Column',
    parameters: {
        description: `asdasd`,
        tags: ['f3', 'theme', 'development'],
        components: ['button', 'flexible-column-layout', 'icon']
    }
};

export const threeColumnsLayout = () => `
<div class="fd-flexible-column-layout">
    <div class="fd-flexible-column-layout__column" style="width: 25%">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--tall docs-layout-grid-bg--color-7"></div>
    </div>
    <div class="fd-flexible-column-layout__separator">
        <button class="fd-button fd-button--compact fd-button--transparent fd-flexible-column-layout__button" 
                aria-label="Expand">
            <i class="sap-icon--slim-arrow-right" role="presentation"></i>
        </button>
    </div>
    <div class="fd-flexible-column-layout__column" style="width: 50%">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--tall docs-layout-grid-bg--color-8"></div>
    </div>
    <div class="fd-flexible-column-layout__separator">
        <button class="fd-button fd-button--compact fd-button--transparent fd-flexible-column-layout__button"
                aria-label="Expand">
            <i class="sap-icon--slim-arrow-left" role="presentation"></i>
        </button>       
    </div>
    <div class="fd-flexible-column-layout__column" style="width: 25%">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--tall docs-layout-grid-bg--color-9"></div>
    </div>
</div>`;



export const twoColumnsLayout = () => `
<div style="max-width: 1200px">
    <div class="fd-flexible-column-layout">
        <div class="fd-flexible-column-layout__column" style="width: 33%">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--tall docs-layout-grid-bg--color-9"></div>
        </div>
        <div class="fd-flexible-column-layout__separator">
            <button class="fd-button fd-button--compact fd-button--transparent fd-flexible-column-layout__button" 
                    aria-label="Expand">
                <i class="sap-icon--slim-arrow-right" role="presentation"></i>
            </button>
        </div>
        <div class="fd-flexible-column-layout__column" style="width: 67%">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--tall docs-layout-grid-bg--color-8"></div>
        </div>
        <div class="fd-flexible-column-layout__separator">
            <button class="fd-button fd-button--compact fd-button--transparent fd-flexible-column-layout__button" 
                    aria-label="Expand">
                <i class="sap-icon--slim-arrow-left" role="presentation"></i>
            </button>
        </div>
        <div class="fd-flexible-column-layout__column fd-flexible-column-layout__column--hidden" style="width: 0">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--tall docs-layout-grid-bg--color-7"></div>
        </div>
    </div>
</div>`;

export const oneColumnsLayout = () => `
<div style="max-width: 600px">
    <div class="fd-flexible-column-layout">
        <div class="fd-flexible-column-layout__column fd-flexible-column-layout__column--hidden" style="width: 0">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--tall docs-layout-grid-bg--color-9"></div>
        </div>
        <div class="fd-flexible-column-layout__separator">
            <button class="fd-button fd-button--compact fd-button--transparent fd-flexible-column-layout__button" 
                    aria-label="Expand">
                <i class="sap-icon--slim-arrow-right" role="presentation"></i>
            </button>
        </div>
        <div class="fd-flexible-column-layout__column" style="width: 100%">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--tall docs-layout-grid-bg--color-8"></div>
        </div>
        <div class="fd-flexible-column-layout__separator">
            <button class="fd-button fd-button--compact fd-button--transparent fd-flexible-column-layout__button" 
                    aria-label="Expand">
                <i class="sap-icon--slim-arrow-left" role="presentation"></i>
            </button>
        </div>
        <div class="fd-flexible-column-layout__column fd-flexible-column-layout__column--hidden" style="width: 0">
            <div class="docs-layout-grid-bg docs-layout-grid-bg--tall docs-layout-grid-bg--color-7"></div>
        </div>
    </div>
</div>`;


