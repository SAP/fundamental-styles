/* empty css             *//* empty css                     *//* empty css                *//* empty css             *//* empty css               *//* empty css             */const c=`<div class='fddocs-icon-tab-container' style="min-height: 800px;">
<div class="fd-icon-tab-bar">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section1" id="tab1">
                <span class="fd-icon-tab-bar__tag">Attachments (16)</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--dnd-separator">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section2" aria-selected="true" id="tab2">
                <span class="fd-icon-tab-bar__tag">Info</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--dnd-preview" style="position: absolute; left: 128px; top: 10px">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section3" id="tab3">
                <span class="fd-icon-tab-bar__tag">Approvals (42)</span>
            </a>
    </ul>
</div>
</div>
`,b=`<div class='fddocs-icon-tab-container' style="min-height: 800px;">
<div class="fd-icon-tab-bar">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--dnd-hovered">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section1" id="tab1">
                <span class="fd-icon-tab-bar__tag">Attachments (16)</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section2" aria-selected="true" id="tab2">
                <span class="fd-icon-tab-bar__tag">Info</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--dnd-preview" style="position: absolute; left: 20px; top: 10px;">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section3" id="tab3">
                <span class="fd-icon-tab-bar__tag">Approvals (42)</span>
            </a>
    </ul>
</div>
</div>
`,v={title:"Dev/Drag and Drop Icon Tab Bar",parameters:{description:`
The Drag and Drop Icon Tab Bar can be used for styling state for drag and drop actions.


<br><br><br>
      `,tags:["f3","theme","development"]}},a=()=>b;a.storyName="Hovered tab state";a.parameters={docs:{description:{story:""}}};const t=()=>c;t.storyName="Separator hovered tab state";t.parameters={docs:{description:{story:""}}};var e,r,s;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:"() => hoveredTabExampleHtml",...(s=(r=a.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var n,o,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"() => separatorHoveredTabExampleHtml",...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const h=["HoveredTab","SeparatorHoveredTab"];export{a as HoveredTab,t as SeparatorHoveredTab,h as __namedExportsOrder,v as default};
//# sourceMappingURL=dnd-icon-tab-bar.stories-f944e156.js.map
