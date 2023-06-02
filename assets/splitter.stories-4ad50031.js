/* empty css             *//* empty css               */const u=`
<div class="fd-splitter" style="height: 160px; background: #cccccc;">
    <div class='fd-splitter__pane-container fd-splitter__pane-container--vertical'>
        <div class='fd-splitter__split-pane'>
            Next resizer has default appearance.
        </div>

        <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
            <span class='fd-splitter__resizer-decoration-before'></span>

            <button class='fd-button fd-button--transparent fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </button>

            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>
        
        <div class='fd-splitter__split-pane'>
            Next resizer has translucent appearance.
        </div>

        <div tabindex='0' class="fd-splitter__resizer fd-splitter__resizer--translucent" role="separator" aria-orienration="vertical">
            <span class='fd-splitter__resizer-decoration-before'></span>

            <button class='fd-button fd-button--transparent fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </button>

            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>
        
        <div class='fd-splitter__split-pane'>
            Next resizer has transparent appearance.
        </div>
        
        <div tabindex='0' class="fd-splitter__resizer fd-splitter__resizer--transparent" role="separator" aria-orienration="vertical">
            <span class='fd-splitter__resizer-decoration-before'></span>

            <button class='fd-button fd-button--transparent fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </button>

            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>
        
        <div class='fd-splitter__split-pane'>
            Content
        </div>
    </div>
</div>`,z=`<h2>One root pane</h2>
<div class="fd-splitter" style="height: 160px">
    <div class='fd-splitter__pane-container fd-splitter__pane-container--horizontal'>
        <div class='fd-splitter__split-pane'>
            Content
        </div>

        <div class='fd-splitter__pagination'>
            <button class="fd-button fd-button--transparent fd-splitter__pagination-item fd-splitter__pagination-item--active">
                <span class="fd-splitter__pagination-item-dot"></span>
            </button>

            <button class="fd-button fd-button--transparent fd-splitter__pagination-item">
                <span class="fd-splitter__pagination-item-dot"></span>
            </button>
        </div>
    </div>
</div>

<h2>Two root panes</h2>

<div class="fd-splitter" style="height: 160px">
    <div class='fd-splitter__pane-container fd-splitter__pane-container--vertical'>
        <div class='fd-splitter__split-pane'>
            Content
        </div>

        <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
            <span class='fd-splitter__resizer-decoration-before'></span>

            <button class='fd-button fd-button--transparent fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </button>

            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

        <div class='fd-splitter__pane-container fd-splitter__pane-container--horizontal'>
            <div class='fd-splitter__split-pane'>
                Content
            </div>

            <div class='fd-splitter__pagination'>
                <button class="fd-button fd-button--transparent fd-splitter__pagination-item fd-splitter__pagination-item--active">
                    <span class="fd-splitter__pagination-item-dot"></span>
                </button>

                <button class="fd-button fd-button--transparent fd-splitter__pagination-item">
                    <span class="fd-splitter__pagination-item-dot"></span>
                </button>
            </div>
        </div>
    </div>
</div>`,m=`
<div class="fd-splitter" style="height: 160px">
    <div class='fd-splitter__pane-container fd-splitter__pane-container--vertical'>
        <div class='fd-splitter__split-pane'>
            Content, Level 0
        </div>

        <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
            <span class='fd-splitter__resizer-decoration-before'></span>

            <button class='fd-button fd-button--transparent fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </button>

            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

        <div class='fd-splitter__split-pane'>
            <div class='fd-splitter__pane-container fd-splitter__pane-container--horizontal'>
                <div class='fd-splitter__split-pane'>
                    Content, Level 1
                </div>

                <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
                    <span class='fd-splitter__resizer-decoration-before'></span>

                    <button class='fd-button fd-button--transparent fd-splitter__resizer-grip' tabindex='-1'>
                        <i class="sap-icon--horizontal-grip fd-splitter__resizer-grip-icon"></i>
                    </button>

                    <span class='fd-splitter__resizer-decoration-after'></span>
                </div>

                <div class='fd-splitter__split-pane'>
                    <div class='fd-splitter__pane-container fd-splitter__pane-container--vertical'>
                        <div class='fd-splitter__split-pane'>
                            Content, Level 2
                        </div>
        
                        <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
                            <span class='fd-splitter__resizer-decoration-before'></span>
        
                            <button class='fd-button fd-button--transparent fd-splitter__resizer-grip' tabindex='-1'>
                                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
                            </button>
        
                            <span class='fd-splitter__resizer-decoration-after'></span>
                        </div>
        
                        <div class='fd-splitter__split-pane'>
                            Content, Level 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`,g=`<h2>Vertical</h2>
<div class="fd-splitter" style="height: 160px">
    <div class='fd-splitter__pane-container fd-splitter__pane-container--vertical'>
        <div class='fd-splitter__split-pane'>
            Content
        </div>

        <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
            <span class='fd-splitter__resizer-decoration-before'></span>

            <button class='fd-button fd-button--transparent fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </button>

            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

        <div class='fd-splitter__split-pane'>
            Content
        </div>

        <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
            <span class='fd-splitter__resizer-decoration-before'></span>

            <button class='fd-button fd-button--transparent fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--vertical-grip fd-splitter__resizer-grip-icon"></i>
            </button>

            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

        <div class='fd-splitter__split-pane'>
            Content
        </div>
    </div>
</div>

<h2>Horizontal</h2>
<div class="fd-splitter" style="height: 160px">
    <div class='fd-splitter__pane-container fd-splitter__pane-container--horizontal'>
        <div class='fd-splitter__split-pane'>
            Content
        </div>

        <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
            <span class='fd-splitter__resizer-decoration-before'></span>

            <button class='fd-button fd-button--transparent fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--horizontal-grip fd-splitter__resizer-grip-icon"></i>
            </button>

            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

        <div class='fd-splitter__split-pane'>
            Content
        </div>

        <div tabindex='0' class="fd-splitter__resizer" role="separator" aria-orienration="vertical">
            <span class='fd-splitter__resizer-decoration-before'></span>

            <button class='fd-button fd-button--transparent fd-splitter__resizer-grip' tabindex="-1">
                <i class="sap-icon--horizontal-grip fd-splitter__resizer-grip-icon"></i>
            </button>

            <span class='fd-splitter__resizer-decoration-after'></span>
        </div>

        <div class='fd-splitter__split-pane'>
            Content
        </div>
    </div>
</div>
`;const y={title:"Components/Splitter",parameters:{description:"\nThe responsive splitter layout structures complex applications into defined areas. These areas may be resizable and are either distributed on one screen or across different areas, which may also be off-canvas. This depends on the device class and the requirements and settings of the application.\n\n**Note**: Resizing logic you should implement yourself.\n\nElements structure:\n* `fd-splitter` Component\n  * `fd-splitter__pane-container` Container for panes that has the same orientation.\n  * `fd-splitter__pane-container--vertical` Modifier class for the container to set panes orientation to vertical (align in columns).\n  * `fd-splitter__pane-container--horizontal` Modifier class for the container to set panes orientation to horizontal (align in rows).\n    * `fd-splitter__split-pane` Pane that can be resized.\n    * `fd-splitter__resizer` Resizer element.\n    * `fd-splitter__resizer--translucent` Modifier class for the resizer to change its look.\n    * `fd-splitter__resizer--transparent` Modifier class for the resizer to change its look.\n      * `fd-splitter__resizer-decoration-before` Resizer decoration element.\n      * `fd-splitter__resizer-grip` Resizer grip element.\n      * `fd-splitter__resizer-decoration-after` Resizer decoration element.\n    * `fd-splitter__pagination` Pagination element.\n      * `fd-splitter__pagination-item` Pagination item element.\n      * `fd-splitter__pagination-item--active` Modifier class for the active pagination item.\n        * `fd-splitter__pagination-item-dot` Pagination item dot element.\n",tags:["f3","theme"]}},t=()=>g;t.parameters={docs:{description:{story:`
Content can be split by the vertical areas (columns) or by the horizontal areas (rows).

**Note:** You should explicitly set the dimensions of the splitter component and of the every area otherwise it will be set to the size of the content.
`}}};const e=()=>m;e.parameters={docs:{description:{story:`
Splitter may contain nested containers with different orientations.
`}}};const n=()=>z;n.parameters={docs:{description:{story:`
Not all the panes should be visible at the same time. Some of them might be just hidden or goes off-canvas at certain breakpoint.
Navigate into off-canvas panes possible via the navigation. Navigation should be placed in root container.
There should be only one or two root panes. In case there is only one on-canvas root pane navigation will be shown just below, having the full width.
Otherwise navigation will be shown below the right root pane.

**Note:** Navigation logic you should implement yourself.
`}}};const i=()=>u;i.parameters={docs:{description:{story:`
While panes have transparent background resizer has its own by default
but it's possible to pick one from several options. To do that apply modifier class to the resizer element:
* \`fd-splitter__resizer--translucent\` Translucent appearance
* \`fd-splitter__resizer--transparent\` Transparent appearance
`}}};var s,r,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:"() => defaultExampleHtml",...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var o,p,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"() => mixedAndNestedExampleHtml",...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,c,_;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"() => paginationExampleHtml",...(_=(c=n.parameters)==null?void 0:c.docs)==null?void 0:_.source}}};var f,v,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:"() => resizerAppearanceExampleHtml",...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const C=["Default","MixedAndNested","Pagination","ResizerAppearance"];export{t as Default,e as MixedAndNested,n as Pagination,i as ResizerAppearance,C as __namedExportsOrder,y as default};
//# sourceMappingURL=splitter.stories-4ad50031.js.map
