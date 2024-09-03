var f=Object.defineProperty,v=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var c=(e,a,t)=>a in e?f(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,r=(e,a)=>{for(var t in a||(a={}))u.call(a,t)&&c(e,t,a[t]);if(i)for(var t of i(a))g.call(a,t)&&c(e,t,a[t]);return e},o=(e,a)=>v(e,h(a));/* empty css             *//* empty css                     *//* empty css                *//* empty css             *//* empty css               *//* empty css             */const x=`<div class='fddocs-icon-tab-container' style="min-height: 800px;">
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
`,T=`<div class='fddocs-icon-tab-container' style="min-height: 800px;">
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
`,B={title:"Dev/Drag and Drop Icon Tab Bar",parameters:{description:`
The Drag and Drop Icon Tab Bar can be used for styling state for drag and drop actions.


<br><br><br>
      `,tags:["f3","theme","development"]}},s=()=>T;s.storyName="Hovered tab state";s.parameters={docs:{description:{story:""}}};const n=()=>x;n.storyName="Separator hovered tab state";n.parameters={docs:{description:{story:""}}};var b,d,l;s.parameters=o(r({},s.parameters),{docs:o(r({},(b=s.parameters)==null?void 0:b.docs),{source:r({originalSource:"() => hoveredTabExampleHtml"},(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source)})});var p,_,m;n.parameters=o(r({},n.parameters),{docs:o(r({},(p=n.parameters)==null?void 0:p.docs),{source:r({originalSource:"() => separatorHoveredTabExampleHtml"},(m=(_=n.parameters)==null?void 0:_.docs)==null?void 0:m.source)})});const w=["HoveredTab","SeparatorHoveredTab"];export{s as HoveredTab,n as SeparatorHoveredTab,w as __namedExportsOrder,B as default};
