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
        <div style="height: 600px; background: blue;"></div>
    </div>
    <div class="fd-flexible-column-layout__separator">
        <button class="fd-button fd-button--compact fd-button--transparent fd-flexible-column-layout__button" 
                aria-label="Expand">
            <i class="sap-icon--slim-arrow-right" role="presentation"></i>
        </button>
    </div>
    <div class="fd-flexible-column-layout__column" style="width: 50%">
        <div style="height: 600px; background: green;"></div>
    </div>
    <div class="fd-flexible-column-layout__separator">
        <button class="fd-button fd-button--compact fd-button--transparent fd-flexible-column-layout__button"
                aria-label="Expand">
            <i class="sap-icon--slim-arrow-left" role="presentation"></i>
        </button>       
    </div>
    <div class="fd-flexible-column-layout__column" style="width: 25%">
        <div style="height: 600px; background: red;"></div>
    </div>
</div>`;



export const twoColumnsLayout = () => `
<div class="fd-flexible-column-layout">
    <div class="fd-flexible-column-layout__column" style="width: 33%">
        <div style="height: 600px; background: blue;"></div>
    </div>
    <div class="fd-flexible-column-layout__separator">
        <button class="fd-button fd-button--compact fd-button--transparent fd-flexible-column-layout__button" 
                aria-label="Expand">
            <i class="sap-icon--slim-arrow-right" role="presentation"></i>
        </button>
    </div>
    <div class="fd-flexible-column-layout__column" style="width: 67%">
        <div style="height: 600px; background: green;"></div>
    </div>
</div>`;

export const oneColumnsLayout = () => `
<div class="fd-flexible-column-layout">
    <div class="fd-flexible-column-layout__column" style="width: 100%">
        <div style="height: 600px; background: green;"></div>
    </div>
</div>`;


