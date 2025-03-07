/* empty css                    *//* empty css                     */const a=`
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
`,c=`<section class='fd-section '>
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
`,d=`<section class="fd-section">
    <div class="fd-section__header">
      <h3 class="fd-section__title">Section title</h3>
    </div>
    <div class="fd-layout-panel">
        <div class="fd-layout-panel__body">
            fd-layout-panel
        </div>
    </div>
</section>
`,l=`<section class="fd-section">
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
`,r=`<section class="fd-section">
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
`,p=`<section class="fd-section">
    .fd-section
</section>
<section class="fd-section">
    .fd-section
</section>
<section class="fd-section">
    .fd-section
</section>
`;const v={title:"Layouts/Section",parameters:{description:"\nThe section is a page-level structure container used to divide a page into stacked sections with appropriate padding applied. These should be used to separate large groups of content on a page.\n\nYou will generally use a section inside a page container which will give you the appropriate side margins. Since a section is full-width by default it can be used as a well with background colors or images.\n\nCan hold two child types:\n- `.fd-layout-panel`\n- `.fd-container`, `.fd-row` and `fd-col--[num]` can be used to organize panels or content when a grid layout is not desired.",tags:["non-f3"]}},e=()=>p;e.storyName="Section Structure";e.parameters={docs:{description:{story:""}}};const n=()=>r;n.storyName="With Layout Grid";n.parameters={docs:{description:{story:`
Shows an example with the grid span helper class.
This is most appropriate when displaying a collection of content in a linear order.`}}};const s=()=>l;s.storyName="With Panels";s.parameters={docs:{description:{story:`
Shows an alternate layout option using columns.
This may be more appropriate depending on the need to maintain source order and structure.`}}};const t=()=>d;t.storyName="With Headers";t.parameters={docs:{description:{story:"Header and title elements are available when necessary to label content groups."}}};const i=()=>c;i.parameters={docs:{disable:!0}};const o=()=>a;o.parameters={docs:{disable:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => structureExampleHtml",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => sectionLayoutGridExampleHtml",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => sectionPanelsExampleHtml",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => sectionHeadersExampleHtml",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => testingSimpleSectionExampleHtml",...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"() => testingSectionWithHeadlinesExampleHtml",...o.parameters?.docs?.source}}};const u=["Structure","SectionLayoutGrid","SectionPanels","SectionHeaders","TestingSimpleSection","TestingSectionWithHeadlines"];export{t as SectionHeaders,n as SectionLayoutGrid,s as SectionPanels,e as Structure,o as TestingSectionWithHeadlines,i as TestingSimpleSection,u as __namedExportsOrder,v as default};
