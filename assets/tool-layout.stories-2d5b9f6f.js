const u=`<div class="fd-tool-layout">
    <div class="fd-tool-layout__container">
        <div class="fd-tool-layout__header-container">
            <div style="width: 100%; height: 3rem; background: #00677F;"></div>
        </div>
    </div>
    <div class="fd-tool-layout__container">
        <div class="fd-tool-layout__navigation-container">
            <div style="width: 15rem; height: 20rem; background: #00677F;"></div>
        </div>
        <div class="fd-tool-layout__content-container">
            <div style="width: 100%; height: 20rem; background: #00677F;"></div>
        </div>
    </div>
</div>

`,p=`<h4>With Vertical Navigation</h4>
<div style="width: 800px;">
    <div class="fd-tool-layout fd-tool-layout--tablet">
        <div class="fd-tool-layout__container">
            <div class="fd-tool-layout__header-container">
                <div style="width: 100%; height: 3rem; background: #00677F;"></div>
            </div>
        </div>
        <div class="fd-tool-layout__container">
            <div class="fd-tool-layout__navigation-container">
                <div style="width: 5rem; height: 20rem; background: #00677F;"></div>
            </div>
            <div class="fd-tool-layout__content-container">
                <div  style="width: 100%; height: 20rem; background: #00677F;"></div>
            </div>
        </div>
    </div>
</div>
<br><br>
<h4>With Horizontal Navigation</h4>
<div style="width: 800px;">
    <div class="fd-tool-layout fd-tool-layout--tablet">
        <div class="fd-tool-layout__container">
            <div class="fd-tool-layout__header-container">
                <div style="width: 100%; height: 3rem; background: #00677F;"></div>
            </div>
        </div>
        <div class="fd-tool-layout__container">
            <div class="fd-tool-layout__navigation-container fd-tool-layout__navigation-container--horizontal">
                <div style="width: 100%; height: 3rem; background: #00677F;"></div>
            </div>
            <div class="fd-tool-layout__content-container">
                <div style="width: 100%; height: 20rem; background: #00677F;"></div>
            </div>
        </div>
    </div>
</div>
`,h=`<div style="width: 20rem;">
    <div class="fd-tool-layout fd-tool-layout--phone">
        <div class="fd-tool-layout__container">
            <div class="fd-tool-layout__header-container">
                <div style="width: 100%; height: 3rem; background: #00677F;"></div>
            </div>
        </div>
        <div class="fd-tool-layout__container">
            <div class="fd-tool-layout__content-container">
                <div style="width: 100%; height: 20rem; background: #00677F;"></div>
            </div>
        </div>
    </div>
</div>
`;const y={title:"BTP/Tool Layout",parameters:{description:`The Tool Layout is an essential part of most BTP tools. The layout combines the Tool Header and the Navigation components in one consistent structure. In addition, it provides necessary interaction between the two components out of the box.
## Anatomy
- <b>Tool Header </b>- always present and is a top-aligned UI element that contains global actions and controls navigation
- <b>Navigation </b>- side navigation in all of its variants (expanded, snapped)
- <b>Content </b>- an empty container area that can hold any content.

## Structure
- <code>.fd-tool-layout</code>
  - <code>.fd-tool-layout--tablet</code>&nbsp; - modifier class for tablets
  - <code>.fd-tool-layout--phone</code>&nbsp; - modifier class for phones
- <code>.fd-tool-layout__container</code>
- <code>.fd-tool-layout__header-container</code>&nbsp; - wraping element around the Tool Header
- <code>.fd-tool-layout__navigation-container</code>&nbsp; - wraping element around the Navigation (all its variants)
  - <code>.fd-tool-layout__navigation-container--popup</code>&nbsp; - modifier class for when the navigation is a Popup
  - <code>.fd-tool-layout__navigation-container--horizontal</code>&nbsp; - modifier class for when the navigation is horizontal
- <code>.fd-tool-layout__content-container</code>&nbsp; - wraping element around the page content. By default, the background of the content area is <code>var(--sapBackgroundColor)</code>
  - <code>.fd-tool-layout__content-container--transparent</code>&nbsp; - modifier class to apply transparent background to the content area.
  - <code>.fd-tool-layout__content-container--list</code>&nbsp; - modifier class to apply list <code>var(--sapGroup_ContentBackground)</code> background to the content area.
`,tags:["btp","development","horizon-only"]}},o=()=>u;o.parameters={docs:{description:{story:""}}};const t=()=>p;t.parameters={docs:{description:{story:"Apply the <code>fd-tool-layout--tablet</code> modifier class for tablet devices."}}};const e=()=>h;e.parameters={docs:{description:{story:"Apply the <code>fd-tool-layout--phone</code> modifier class for mobile devices."}}};var n,a,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"() => desktopExampleHtml",...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var d,l,s;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"() => tabletExampleHtml",...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var r,c,v;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:"() => mobileExampleHtml",...(v=(c=e.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};const m=["Desktop","Tablet","Mobile"];export{o as Desktop,e as Mobile,t as Tablet,m as __namedExportsOrder,y as default};
//# sourceMappingURL=tool-layout.stories-2d5b9f6f.js.map
