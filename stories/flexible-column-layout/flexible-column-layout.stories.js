export default {
    title: 'Layouts/Flexible Column',
    parameters: {
        description: `
The flexible column layout is a layout control that displays multiple floorplans on a single page. 
This allows faster and more fluid navigation between multiple floorplans than the usual page-by-page navigation. 
The flexible column layout offers different layouts with up to three columns. 
Users can expand the column they want to focus on, switch between different layouts, and view the rightmost column in full screen mode.

### Background Designs
- <code>fd-flexible-column-layout</code>: solid (default)
- <code>fd-flexible-column-layout--translucent</code>: translucent 
- <code>fd-flexible-column-layout--transparent</code>: transparent 
`,
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
threeColumnsLayout.storyName = 'Three Columns Layout';
threeColumnsLayout.parameters = {
    docs: {
        storyDescription: `
- Minimum width of the device: <code>1281px</code>
- Wide column width: <code>50%</code>
- Narrow columns width: <code>25%</code>
`
    }
};

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
twoColumnsLayout.storyName = 'Two Columns Layout';
twoColumnsLayout.parameters = {
    docs: {
        storyDescription: `
- Width of the device: Max: <code>1280px</code>, Min: 961px
- Wide column width: <code>67%</code>
- Narrow column width: <code>33%</code>
`
    }
};

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
oneColumnsLayout.storyName = 'One Columns Layout';
oneColumnsLayout.parameters = {
    docs: {
        storyDescription: `
- Max width of the device: <code>960px</code>
- Column width: <code>100%</code>
`
    }
};


