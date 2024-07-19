var P=Object.defineProperty,N=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var f=(i,s,t)=>s in i?P(i,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[s]=t,e=(i,s)=>{for(var t in s||(s={}))z.call(s,t)&&f(i,t,s[t]);if(p)for(var t of p(s))B.call(s,t)&&f(i,t,s[t]);return i},n=(i,s)=>N(i,k(s));/* empty css                    *//* empty css                     */const F=`
<section class='fd-section '>
    <div class='fd-section__header'>
        <h2 class='fd-section__title'>section with h2 headline</h2>
        <div class='fd-section__actions'>action part</div>
    </div>
    Section Content
    <div class='fd-section__footer'>footer part</div>
</section>

<section class='fd-section '>
    <div class='fd-section__header'>
        <h3 class='fd-section__title'>section with h3 headline</h3>
            <div class='fd-section__actions'>action part</div>
    </div>
    Section Content
    <div class='fd-section__footer'>footer part</div>
</section>

<section class='fd-section '>
    <div class='fd-section__header'>
        <h4 class='fd-section__title'>section with h4 headline</h4>
        <div class='fd-section__actions'>action part</div>
    </div>
    Section Content
    <div class='fd-section__footer'>footer part</div>
</section>

<section class='fd-section '>
    <div class='fd-section__header'>
        <h5 class='fd-section__title'>section with h5 headline</h5>
        <div class='fd-section__actions'>action part</div>
    </div>
    Section Content
    <div class='fd-section__footer'>footer part</div>
</section>

<section class='fd-section '>
    <div class='fd-section__header'>
        <h6 class='fd-section__title'>section with h6 headline</h6>
        <div class='fd-section__actions'>action part</div>
    </div>
Section Content
    <div class='fd-section__footer'>footer part</div>
</section>
`,O=`<section class='fd-section '>
    Simple Section
</section>

<section class='fd-section '>
    <div class='fd-section__header'>
        <h3 class='fd-section__title'>Section Title</h3>
    </div>
    Section Content
</section>

<section class='fd-section '>
    <div class='fd-section__header'>
        <h3 class='fd-section__title'>Title</h3>
        <div class='fd-section__actions'>action section</div>
    </div>
    Section Content
</section>

<section class='fd-section '>
    <div class='fd-section__header'>
        <h3 class='fd-section__title'>Title</h3>
        <div class='fd-section__actions'>action part</div>
    </div>
    Section Content
    <div class='fd-section__footer'>footer part</div>
</section>

<section class='fd-section fd-section--full-bleed'>
    <div class='fd-section__header'>
        <h3 class='fd-section__title'>Title</h3>
        <div class='fd-section__actions'>action part</div>
    </div>
    Section Content with Full Bleed
    <div class='fd-section__footer'>footer part</div>
</section>

<section class='fd-section '>Simple Section</section>
`,Y=`<section class="fd-section">
    <div class="fd-section__header">
      <h3 class="fd-section__title">Section title</h3>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            fd-layout-panel
        </div>
    </div>
</section>
`,j=`<section class="fd-section">
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__header">
            <div class="fd-layout-panel__head">
                <h3 class="fd-layout-panel__title">
                    .fd-layout-panel__title
                </h3>
                <p class="fd-layout-panel__description">
                    .fd-layout-panel__description
                </p>
            </div>
            <div class="fd-layout-panel__actions">
                .fd-layout-panel__actions
            </div>
        </div>
        <div class="fd-layout-panel__filters" id="">
            .fd-layout-panel__filters
        </div>
        <div class="fd-layout-panel__body">
            .fd-layout-panel__body
        </div>
        <div class="fd-layout-panel__footer">
            .fd-layout-panel__footer
        </div>
    </div>
</section>
`,q=`<section class="fd-section">
    <div class="fd-container">
      <div class="fd-row">
      <div class="fd-col fd-col--4">
        <div class="fd-layout-panel">
            <div class="fd-layout-panel__body">
                <p>.fd-layout-panel</p>
            </div>
        </div>
      </div>
      <div class="fd-col fd-col--4">

        <div class="fd-layout-panel">
            <div class="fd-layout-panel__body">
                <p>.fd-layout-panel</p>
            </div>
        </div>
      </div>
      <div class="fd-col fd-col--4">
        <div class="fd-layout-panel">
            <div class="fd-layout-panel__body">
                <p>.fd-layout-panel</p>
            </div>
        </div>
      </div>
      <div class="fd-col fd-col--4">
        <div class="fd-layout-panel">
            <div class="fd-layout-panel__body">
                <p>.fd-layout-panel</p>
            </div>
        </div>
      </div>
      <div class="fd-col fd-col--4">
        <div class="fd-layout-panel">
            <div class="fd-layout-panel__body">
                <p>.fd-layout-panel</p>
            </div>
        </div>
      </div>
      </div>
    </div>
</section>
`,A=`<section class="fd-section">
    .fd-section
</section>
<section class="fd-section">
    .fd-section
</section>
<section class="fd-section">
    .fd-section
</section>
`;const K={title:"Layouts/Section",parameters:{description:"\nThe section is a page-level structure container used to divide a page into stacked sections with appropriate padding applied. These should be used to separate large groups of content on a page.\n\nYou will generally use a section inside a page container which will give you the appropriate side margins. Since a section is full-width by default it can be used as a well with background colors or images.\n\nCan hold two child types:\n- `.fd-layout-panel`\n- `.fd-container`, `.fd-row` and `fd-col--[num]` can be used to organize panels or content when a grid layout is not desired.",tags:["non-f3"]}},o=()=>A;o.storyName="Section Structure";o.parameters={docs:{description:{story:""}}};const a=()=>q;a.storyName="With Layout Grid";a.parameters={docs:{description:{story:`
Shows an example with the grid span helper class.
This is most appropriate when displaying a collection of content in a linear order.`}}};const c=()=>j;c.storyName="With Panels";c.parameters={docs:{description:{story:`
Shows an alternate layout option using columns.
This may be more appropriate depending on the need to maintain source order and structure.`}}};const d=()=>Y;d.storyName="With Headers";d.parameters={docs:{description:{story:"Header and title elements are available when necessary to label content groups."}}};const l=()=>O;l.parameters={docs:{disable:!0}};const r=()=>F;r.parameters={docs:{disable:!0}};var _,v,u;o.parameters=n(e({},o.parameters),{docs:n(e({},(_=o.parameters)==null?void 0:_.docs),{source:e({originalSource:"() => structureExampleHtml"},(u=(v=o.parameters)==null?void 0:v.docs)==null?void 0:u.source)})});var h,m,y;a.parameters=n(e({},a.parameters),{docs:n(e({},(h=a.parameters)==null?void 0:h.docs),{source:e({originalSource:"() => sectionLayoutGridExampleHtml"},(y=(m=a.parameters)==null?void 0:m.docs)==null?void 0:y.source)})});var S,g,w;c.parameters=n(e({},c.parameters),{docs:n(e({},(S=c.parameters)==null?void 0:S.docs),{source:e({originalSource:"() => sectionPanelsExampleHtml"},(w=(g=c.parameters)==null?void 0:g.docs)==null?void 0:w.source)})});var H,b,x;d.parameters=n(e({},d.parameters),{docs:n(e({},(H=d.parameters)==null?void 0:H.docs),{source:e({originalSource:"() => sectionHeadersExampleHtml"},(x=(b=d.parameters)==null?void 0:b.docs)==null?void 0:x.source)})});var E,T,C;l.parameters=n(e({},l.parameters),{docs:n(e({},(E=l.parameters)==null?void 0:E.docs),{source:e({originalSource:"() => testingSimpleSectionExampleHtml"},(C=(T=l.parameters)==null?void 0:T.docs)==null?void 0:C.source)})});var W,L,G;r.parameters=n(e({},r.parameters),{docs:n(e({},(W=r.parameters)==null?void 0:W.docs),{source:e({originalSource:"() => testingSectionWithHeadlinesExampleHtml"},(G=(L=r.parameters)==null?void 0:L.docs)==null?void 0:G.source)})});const M=["Structure","SectionLayoutGrid","SectionPanels","SectionHeaders","TestingSimpleSection","TestingSectionWithHeadlines"];export{d as SectionHeaders,a as SectionLayoutGrid,c as SectionPanels,o as Structure,r as TestingSectionWithHeadlines,l as TestingSimpleSection,M as __namedExportsOrder,K as default};
