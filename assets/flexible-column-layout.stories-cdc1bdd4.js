var _=Object.defineProperty,h=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var d=(n,l,t)=>l in n?_(n,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[l]=t,o=(n,l)=>{for(var t in l||(l={}))g.call(l,t)&&d(n,t,l[t]);if(u)for(var t of u(l))C.call(l,t)&&d(n,t,l[t]);return n},a=(n,l)=>h(n,w(l));/* empty css               *//* empty css             */const L=`
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
</div>`,E=`
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
</div>`,T=`
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
</div>`;const O={title:"Layouts/Flexible Column",parameters:{description:`
The flexible column layout is a layout control that displays multiple floorplans on a single page.
This allows faster and more fluid navigation between multiple floorplans than the usual page-by-page navigation.
The flexible column layout offers different layouts with up to three columns.
Users can expand the column they want to focus on, switch between different layouts, and view the rightmost column in full screen mode.

### Background Designs
- \`fd-flexible-column-layout\`: solid (default)
- \`fd-flexible-column-layout--translucent\`: translucent
- \`fd-flexible-column-layout--transparent\`: transparent
`,tags:["f3","theme","development"]}},e=()=>T;e.parameters={docs:{description:{story:"\n- Minimum width of the device: `1281px`\n- Wide column width: `50%`\n- Narrow columns width: `25%`\n"}}};const s=()=>E;s.parameters={docs:{description:{story:"\nFlexible Column with transparent separators\n- Width of the device: Max: `1280px`, Min: 961px\n- Wide column width: `67%`\n- Narrow column width: `33%`\n"}}};const i=()=>L;i.parameters={docs:{description:{story:"\nFlexible Column Layout with translucent separators\n- Max width of the device: `960px`\n- Column width: `100%`\n"}}};var r,c,m;e.parameters=a(o({},e.parameters),{docs:a(o({},(r=e.parameters)==null?void 0:r.docs),{source:o({originalSource:"() => threeColumnsLayoutExampleHtml"},(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source)})});var f,b,p;s.parameters=a(o({},s.parameters),{docs:a(o({},(f=s.parameters)==null?void 0:f.docs),{source:o({originalSource:"() => twoColumnsLayoutExampleHtml"},(p=(b=s.parameters)==null?void 0:b.docs)==null?void 0:p.source)})});var y,v,x;i.parameters=a(o({},i.parameters),{docs:a(o({},(y=i.parameters)==null?void 0:y.docs),{source:o({originalSource:"() => oneColumnsLayoutExampleHtml"},(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source)})});const S=["ThreeColumnsLayout","TwoColumnsLayout","OneColumnsLayout"];export{i as OneColumnsLayout,e as ThreeColumnsLayout,s as TwoColumnsLayout,S as __namedExportsOrder,O as default};
