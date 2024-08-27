var w=Object.defineProperty,k=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var d=(i,e,n)=>e in i?w(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n,t=(i,e)=>{for(var n in e||(e={}))E.call(e,n)&&d(i,n,e[n]);if(l)for(var n of l(e))A.call(e,n)&&d(i,n,e[n]);return i},s=(i,e)=>k(i,P(e));/* empty css             *//* empty css               */const S=`<div class="fd-splitter" style="height: 100px">
    <div class="fd-splitter__pane-container fd-splitter__pane-container--horizontal">
        <div class="fd-splitter__pagination">
            <button class="fd-button fd-button--nested fd-splitter__pagination-item">
                <span class="fd-splitter__pagination-item-dot"></span>
            </button>

            <button class="fd-button fd-button--nested fd-splitter__pagination-item fd-splitter__pagination-item--active">
                <span class="fd-splitter__pagination-item-dot"></span>
            </button>

            <button class="fd-button fd-button--nested fd-splitter__pagination-item">
                <span class="fd-splitter__pagination-item-dot"></span>
            </button>

            <button class="fd-button fd-button--nested fd-splitter__pagination-item">
                <span class="fd-splitter__pagination-item-dot"></span>
            </button>

            <button class="fd-button fd-button--nested fd-splitter__pagination-item">
                <span class="fd-splitter__pagination-item-dot"></span>
            </button>
        </div>
    </div>
</div>
`,T=`<div class="fd-splitter" style="height: 600px;">
    <div class='fd-splitter__pane-container fd-splitter__pane-container--vertical'>
        <div class='fd-splitter__split-pane fd-splitter__split-pane--solid'></div>

        <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
            <button class='fd-button fd-button--nested fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </button>
            <span class='fd-splitter__resizer-decoration-before'></span>
            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>


        <div class='fd-splitter__pane-container fd-splitter__pane-container--horizontal'>
            <div class='fd-splitter__split-pane fd-splitter__split-pane--solid'></div>

            <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="horizontal">
                <button class='fd-button fd-button--nested fd-splitter__resizer-grip' tabindex="-1">
                    <i class="sap-icon--horizontal-grip fd-splitter__resizer-grip-icon"></i>
                </button>
                <span class='fd-splitter__resizer-decoration-before'></span>
                <span class='fd-splitter__resizer-decoration-after'></span>
            </div>

            <div class='fd-splitter__split-pane fd-splitter__split-pane--solid'>
                <div style="height: 100%;"></div>
                <div class='fd-splitter__pagination'>
                    <button class="fd-button fd-button--nested fd-splitter__pagination-item">
                        <span class="fd-splitter__pagination-item-dot"></span>
                    </button>
        
                    <button class="fd-button fd-button--nested fd-splitter__pagination-item fd-splitter__pagination-item--active">
                        <span class="fd-splitter__pagination-item-dot"></span>
                    </button>
        
                    <button class="fd-button fd-button--nested fd-splitter__pagination-item">
                        <span class="fd-splitter__pagination-item-dot"></span>
                    </button>
        
                    <button class="fd-button fd-button--nested fd-splitter__pagination-item">
                        <span class="fd-splitter__pagination-item-dot"></span>
                    </button>
        
                    <button class="fd-button fd-button--nested fd-splitter__pagination-item">
                        <span class="fd-splitter__pagination-item-dot"></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>`,H=`<div class="fd-splitter" style="height: 300px; padding: 2rem;">
    <div class='fd-splitter__pane-container fd-splitter__pane-container--vertical'>
        <div class='fd-splitter__split-pane'>
            Transparent (Default)
        </div>

        <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
            <button class='fd-button fd-button--nested fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </button>
            <span class='fd-splitter__resizer-decoration-before'></span>
            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

        <div class='fd-splitter__split-pane fd-splitter__split-pane--translucent'>
            Translucent
        </div>

        <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
            <button class='fd-button fd-button--nested fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </button>
            <span class='fd-splitter__resizer-decoration-before'></span>
            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

        <div class='fd-splitter__split-pane fd-splitter__split-pane--solid'>
            Solid
        </div>
    </div>
</div>`,B=`<h2>Vertical</h2>
<div class="fd-splitter" style="height: 300px">
    <div class='fd-splitter__pane-container fd-splitter__pane-container--vertical'>
        <div class='fd-splitter__split-pane'></div>

        <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
            <button class='fd-button fd-button--nested fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </button>
            <span class='fd-splitter__resizer-decoration-before'></span>
            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

        <div class='fd-splitter__split-pane'></div>

        <div tabindex='0' class="fd-splitter__resizer fd-splitter__resizer--translucent" role="separator" aria-orienration="vertical">
            <button class='fd-button fd-button--nested fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </button>
            <span class='fd-splitter__resizer-decoration-before'></span>
            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

        <div class='fd-splitter__split-pane'></div>

        <div tabindex='0' class="fd-splitter__resizer fd-splitter__resizer--solid" role="separator" aria-orienration="vertical">
            <button class='fd-button fd-button--nested fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </button>
            <span class='fd-splitter__resizer-decoration-before'></span>
            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

        <div class='fd-splitter__split-pane'></div>
    </div>
</div>

<h2>Horizontal</h2>
<div class="fd-splitter" style="height: 160px">
    <div class='fd-splitter__pane-container fd-splitter__pane-container--horizontal'>
        <div class='fd-splitter__split-pane'></div>

        <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="horizontal">
            <button class='fd-button fd-button--nested fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--horizontal-grip fd-splitter__resizer-grip-icon"></i>
            </button>
            <span class='fd-splitter__resizer-decoration-before'></span>
            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

        <div class='fd-splitter__split-pane'></div>

        <div tabindex='0' class="fd-splitter__resizer fd-splitter__resizer--translucent" role="separator" aria-orienration="horizontal">
            <button class='fd-button fd-button--nested fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--horizontal-grip fd-splitter__resizer-grip-icon"></i>
            </button>
            <span class='fd-splitter__resizer-decoration-before'></span>
            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

        <div class='fd-splitter__split-pane'></div>

        <div tabindex='0' class="fd-splitter__resizer fd-splitter__resizer--solid" role="separator" aria-orienration="horizontal">
            <button class='fd-button fd-button--nested fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--horizontal-grip fd-splitter__resizer-grip-icon"></i>
            </button>
            <span class='fd-splitter__resizer-decoration-before'></span>
            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

        <div class='fd-splitter__split-pane'></div>
    </div>
</div>
`;const R={title:"BTP/Splitter",parameters:{description:"The Responsive Splitter Layout structures complex application content into defined areas. The areas are resizable manually and programmatically by external triggers such as buttons or menu entries. The split panes and their parent containers are parts of the splitter and have properties that can be changed to meet the application’s needs.\n\n**Note**: Resizing logic you should implement yourself.\n\nElements structure:\n* `fd-splitter` Component\n  * `fd-splitter__pane-container` Container for panes that has the same orientation.\n    * `fd-splitter__pane-container--vertical` Modifier class for the container to set panes orientation to vertical (align in columns).\n    * `fd-splitter__pane-container--horizontal` Modifier class for the container to set panes orientation to horizontal (align in rows).\n  * `fd-splitter__split-pane`- An independent container that may interact with other panes or pane containers. Holds the Pagination Bar when off-canvas panes are available. The default background is transparent.\n    *  `fd-splitter__split-pane--translucent`- Modifier class for translucent (`var(--sapBackgroundColor)`) background .\n    *  `fd-splitter__split-pane--solid`- Modifier class for solid (`var(--sapGroup_ContentBackground)`) background.\n  * `fd-splitter__resizer`- The component that allows resizing of panes and pane containers.\n    * `fd-splitter__resizer--translucent`- Modifier class to apply transluent background to the resizer.\n    * `fd-splitter__resizer--solid`- Modifier class to apply solid background to the resizer.\n  * `fd-splitter__resizer-decoration-before` Resizer decoration element.\n  * `fd-splitter__resizer-grip` Resizer grip element.\n  * `fd-splitter__resizer-decoration-after` Resizer decoration element.\n  * `fd-splitter__pagination` Pagination element.\n  * `fd-splitter__pagination-item` Pagination item element.\n    * `fd-splitter__pagination-item--active` Modifier class for the active pagination item.\n  * `fd-splitter__pagination-item-dot` Pagination item dot element.\n",tags:["btp"]}},a=()=>H;a.parameters={docs:{description:{story:"Split Pane is an independent container that may interact with other panes or pane containers. It holds the Pagination Bar when off-canvas panes are available. The default background is transparent. <br>\n      For translucent background use the `fd-splitter__split-pane--translucent` modifier class. <br>For solid background use the `fd-splitter__split-pane--solid` modifier class."}}};const r=()=>B;r.parameters={docs:{description:{story:"Grip is the component that allows resizing of panes and pane containers. By default, its background is transparent. To apply <code>translucent</code> background to it use the <code>fd-splitter__resizer--translucent</code> modifier class to the <code>fd-splitter__resizer</code> base class. For <code>solid</code> background use <code>fd-splitter__resizer--solid</code>."}}};const o=()=>S;o.parameters={docs:{description:{story:`
Not all the panes should be visible at the same time. Some of them might be just hidden or goes off-canvas at certain breakpoint.
Navigate into off-canvas panes possible via the navigation. Navigation should be placed in root container.
There should be only one or two root panes. In case there is only one on-canvas root pane navigation will be shown just below, having the full width.
Otherwise navigation will be shown below the right root pane.

**Note:** Navigation logic you should implement yourself.
`}}};const p=()=>T;p.parameters={docs:{description:{story:`
Content can be split by the vertical areas (columns) or by the horizontal areas (rows).

**Note:** You should explicitly set the dimensions of the splitter component and of the every area otherwise it will be set to the size of the content.
`}}};var c,_,f;a.parameters=s(t({},a.parameters),{docs:s(t({},(c=a.parameters)==null?void 0:c.docs),{source:t({originalSource:"() => splitPaneAnatomyExampleHtml"},(f=(_=a.parameters)==null?void 0:_.docs)==null?void 0:f.source)})});var u,b,v;r.parameters=s(t({},r.parameters),{docs:s(t({},(u=r.parameters)==null?void 0:u.docs),{source:t({originalSource:"() => gripAnatomyExampleHtml"},(v=(b=r.parameters)==null?void 0:b.docs)==null?void 0:v.source)})});var g,m,h;o.parameters=s(t({},o.parameters),{docs:s(t({},(g=o.parameters)==null?void 0:g.docs),{source:t({originalSource:"() => paginationExampleHtml"},(h=(m=o.parameters)==null?void 0:m.docs)==null?void 0:h.source)})});var z,x,y;p.parameters=s(t({},p.parameters),{docs:s(t({},(z=p.parameters)==null?void 0:z.docs),{source:t({originalSource:"() => defaultExampleHtml"},(y=(x=p.parameters)==null?void 0:x.docs)==null?void 0:y.source)})});const G=["SplitPaneAnatomy","GripAnatomy","PaginationBarAnatomy","Examples"];export{p as Examples,r as GripAnatomy,o as PaginationBarAnatomy,a as SplitPaneAnatomy,G as __namedExportsOrder,R as default};
