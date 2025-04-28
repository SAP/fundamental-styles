/* empty css             *//* empty css               */const s=`<div class="fd-splitter" style="height: 100px">
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
`,a=`<div class="fd-splitter" style="height: 600px;">
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
</div>`,r=`<div class="fd-splitter" style="height: 300px; padding: 2rem;">
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
</div>`,o=`<h2>Vertical</h2>
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
`;const d={title:"BTP/Splitter",parameters:{description:"The Responsive Splitter Layout structures complex application content into defined areas. The areas are resizable manually and programmatically by external triggers such as buttons or menu entries. The split panes and their parent containers are parts of the splitter and have properties that can be changed to meet the application’s needs.\n\n**Note**: Resizing logic you should implement yourself.\n\nElements structure:\n* `fd-splitter` Component\n  * `fd-splitter__pane-container` Container for panes that has the same orientation.\n    * `fd-splitter__pane-container--vertical` Modifier class for the container to set panes orientation to vertical (align in columns).\n    * `fd-splitter__pane-container--horizontal` Modifier class for the container to set panes orientation to horizontal (align in rows).\n  * `fd-splitter__split-pane`- An independent container that may interact with other panes or pane containers. Holds the Pagination Bar when off-canvas panes are available. The default background is transparent.\n    *  `fd-splitter__split-pane--translucent`- Modifier class for translucent (`var(--sapBackgroundColor)`) background .\n    *  `fd-splitter__split-pane--solid`- Modifier class for solid (`var(--sapGroup_ContentBackground)`) background.\n  * `fd-splitter__resizer`- The component that allows resizing of panes and pane containers.\n    * `fd-splitter__resizer--translucent`- Modifier class to apply transluent background to the resizer.\n    * `fd-splitter__resizer--solid`- Modifier class to apply solid background to the resizer.\n  * `fd-splitter__resizer-decoration-before` Resizer decoration element.\n  * `fd-splitter__resizer-grip` Resizer grip element.\n  * `fd-splitter__resizer-decoration-after` Resizer decoration element.\n  * `fd-splitter__pagination` Pagination element.\n  * `fd-splitter__pagination-item` Pagination item element.\n    * `fd-splitter__pagination-item--active` Modifier class for the active pagination item.\n  * `fd-splitter__pagination-item-dot` Pagination item dot element.\n",tags:["btp"]}},t=()=>r;t.parameters={docs:{description:{story:"Split Pane is an independent container that may interact with other panes or pane containers. It holds the Pagination Bar when off-canvas panes are available. The default background is transparent. <br>\n      For translucent background use the `fd-splitter__split-pane--translucent` modifier class. <br>For solid background use the `fd-splitter__split-pane--solid` modifier class."}}};const e=()=>o;e.parameters={docs:{description:{story:"Grip is the component that allows resizing of panes and pane containers. By default, its background is transparent. To apply <code>translucent</code> background to it use the <code>fd-splitter__resizer--translucent</code> modifier class to the <code>fd-splitter__resizer</code> base class. For <code>solid</code> background use <code>fd-splitter__resizer--solid</code>."}}};const n=()=>s;n.parameters={docs:{description:{story:`
Not all the panes should be visible at the same time. Some of them might be just hidden or goes off-canvas at certain breakpoint.
Navigate into off-canvas panes possible via the navigation. Navigation should be placed in root container.
There should be only one or two root panes. In case there is only one on-canvas root pane navigation will be shown just below, having the full width.
Otherwise navigation will be shown below the right root pane.

**Note:** Navigation logic you should implement yourself.
`}}};const i=()=>a;i.parameters={docs:{description:{story:`
Content can be split by the vertical areas (columns) or by the horizontal areas (rows).

**Note:** You should explicitly set the dimensions of the splitter component and of the every area otherwise it will be set to the size of the content.
`}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => splitPaneAnatomyExampleHtml",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => gripAnatomyExampleHtml",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => paginationExampleHtml",...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => defaultExampleHtml",...i.parameters?.docs?.source}}};const c=["SplitPaneAnatomy","GripAnatomy","PaginationBarAnatomy","Examples"];export{i as Examples,e as GripAnatomy,n as PaginationBarAnatomy,t as SplitPaneAnatomy,c as __namedExportsOrder,d as default};
