/* empty css               *//* empty css             */const n=`
<div style="max-width: 600px">
    <div class="fd-flexible-column-layout fd-flexible-column-layout--translucent">
        <div class="fd-flexible-column-layout__column fd-flexible-column-layout__column--hidden" style="width: 0">
            <div class="docs-layout-grid-bg--tall"></div>
        </div>
        <div class="fd-flexible-column-layout__separator">
            <button class="fd-button fd-button--transparent fd-flexible-column-layout__button"
                    aria-label="Expand">
                <i class="sap-icon--slim-arrow-right" role="presentation"></i>
            </button>
        </div>
        <div class="fd-flexible-column-layout__column" style="width: 100%">
            <div class="docs-layout-grid-bg--tall"></div>
        </div>
        <div class="fd-flexible-column-layout__separator">
            <button class="fd-button fd-button--transparent fd-flexible-column-layout__button"
                    aria-label="Expand">
                <i class="sap-icon--slim-arrow-left" role="presentation"></i>
            </button>
        </div>
        <div class="fd-flexible-column-layout__column fd-flexible-column-layout__column--hidden" style="width: 0">
            <div class="docs-layout-grid-bg--tall"></div>
        </div>
    </div>
</div>`,a=`
<div style="max-width: 1200px">
    <div class="fd-flexible-column-layout fd-flexible-column-layout--transparent">
        <div class="fd-flexible-column-layout__column" style="width: 33%">
            <div class="docs-layout-grid-bg--tall"></div>
        </div>
        <div class="fd-flexible-column-layout__separator">
            <button class="fd-button fd-button--transparent fd-flexible-column-layout__button"
                    aria-label="Expand">
                <i class="sap-icon--slim-arrow-right" role="presentation"></i>
            </button>
        </div>
        <div class="fd-flexible-column-layout__column" style="width: 67%">
            <div class="docs-layout-grid-bg--tall"></div>
        </div>
        <div class="fd-flexible-column-layout__separator">
            <button class="fd-button fd-button--transparent fd-flexible-column-layout__button"
                    aria-label="Expand">
                <i class="sap-icon--slim-arrow-left" role="presentation"></i>
            </button>
        </div>
        <div class="fd-flexible-column-layout__column fd-flexible-column-layout__column--hidden" style="width: 0">
            <div class="docs-layout-grid-bg--tall"></div>
        </div>
    </div>
</div>`,e=`
<div class="fd-flexible-column-layout">
    <div class="fd-flexible-column-layout__column" style="width: 25%">
            <div class="docs-layout-grid-bg--tall"></div>
    </div>
    <div class="fd-flexible-column-layout__separator">
        <button class="fd-button fd-button--transparent fd-flexible-column-layout__button"
                aria-label="Expand">
            <i class="sap-icon--slim-arrow-right" role="presentation"></i>
        </button>
    </div>
    <div class="fd-flexible-column-layout__column" style="width: 50%">
            <div class="docs-layout-grid-bg--tall"></div>
    </div>
    <div class="fd-flexible-column-layout__separator">
        <button class="fd-button fd-button--transparent fd-flexible-column-layout__button"
                aria-label="Expand">
            <i class="sap-icon--slim-arrow-left" role="presentation"></i>
        </button>
    </div>
    <div class="fd-flexible-column-layout__column" style="width: 25%">
            <div class="docs-layout-grid-bg--tall"></div>
    </div>
</div>`;const u={title:"Layouts/Flexible Column",parameters:{description:`
The flexible column layout is a layout control that displays multiple floorplans on a single page.
This allows faster and more fluid navigation between multiple floorplans than the usual page-by-page navigation.
The flexible column layout offers different layouts with up to three columns.
Users can expand the column they want to focus on, switch between different layouts, and view the rightmost column in full screen mode.

### Background Designs
- \`fd-flexible-column-layout\`: solid (default)
- \`fd-flexible-column-layout--translucent\`: translucent
- \`fd-flexible-column-layout--transparent\`: transparent
`,tags:["f3","theme","development"]}},l=()=>e;l.parameters={docs:{description:{story:"\n- Minimum width of the device: `1281px`\n- Wide column width: `50%`\n- Narrow columns width: `25%`\n"}}};const t=()=>a;t.parameters={docs:{description:{story:"\nFlexible Column with transparent separators\n- Width of the device: Max: `1280px`, Min: 961px\n- Wide column width: `67%`\n- Narrow column width: `33%`\n"}}};const o=()=>n;o.parameters={docs:{description:{story:"\nFlexible Column Layout with translucent separators\n- Max width of the device: `960px`\n- Column width: `100%`\n"}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"() => threeColumnsLayoutExampleHtml",...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => twoColumnsLayoutExampleHtml",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"() => oneColumnsLayoutExampleHtml",...o.parameters?.docs?.source}}};const d=["ThreeColumnsLayout","TwoColumnsLayout","OneColumnsLayout"];export{o as OneColumnsLayout,l as ThreeColumnsLayout,t as TwoColumnsLayout,d as __namedExportsOrder,u as default};
