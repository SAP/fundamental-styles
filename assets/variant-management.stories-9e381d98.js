/* empty css               *//* empty css              */const m=`
<div class="fd-variant-management">
  <div class="fd-variant-management__header" tabindex="0">
    <h4 class="fd-title fd-variant-management__title fd-title--h3">
      Changed variant
    </h4>
    <span class="fd-variant-management__dirty-indicator">*</span>
    <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
      <i role="presentation" class="sap-icon--slim-arrow-down"></i>
    </button>
  </div>
</div>
<div class="fd-variant-management">
  <div class="fd-variant-management__header" tabindex="0">
    <h4 class="fd-title fd-variant-management__title fd-title--h3">
      Changed variant
    </h4>
    <span class="fd-variant-management__dirty-indicator fd-variant-management__dirty-indicator--custom">
      changed
    </span>
    <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
      <i role="presentation" class="sap-icon--slim-arrow-down"></i>
    </button>
  </div>
</div>
`;const u={title:"Components/Variant Management",parameters:{description:`Variants store filter settings which have been defined, for example, within the filter bar.
    The filter settings consist of filter parameters, selection fields and layout.
    This control enables the user to load, save, and change variants.
    In some cases, the table settings are also saved within a variant.
    In the context of tables, this control is used to save, manage, and load table settings which include layout, column visibility, sorting, and grouping.`,tags:["f3","theme","development"]}},a=()=>Array.from({length:6},(e,l)=>l+1).map(e=>`
  <div class="fd-variant-management">
    <div class="fd-variant-management__header" tabindex="0">
      <h4 class="fd-title fd-variant-management__title fd-title--h${e}">
        Variant Title H${e}
      </h4>
      <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
        <i role="presentation" class="sap-icon--slim-arrow-down"></i>
      </button>
    </div>
  </div>
  `).join(`
`);a.storyName="Header sizes";a.parameters={docs:{description:{story:`
<p>By using the title control the variant management control can be set to any header level size.
This is important when setting the variant management into an object or Dynamic page header area.</p>
<p><strong>Variant management should by default have the Title control with fd-title--h3 class in dynamic page header
  and fd-title--h4 if used in table header/toolbar above tables.</strong></p>
          `}}};const t=()=>m;t.storyName="Dirty state";t.parameters={docs:{description:{story:`
<p>Variant management supports dirty indicator in cases when selected variant has been modified but not saved.</p>
<p>It can be either an asterisk sign, or a human-readable text.</p>
          `}}};var n,i,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const headers = Array.from({
    length: 6
  }, (_, i) => i + 1);
  return headers.map(header => \`
  <div class="fd-variant-management">
    <div class="fd-variant-management__header" tabindex="0">
      <h4 class="fd-title fd-variant-management__title fd-title--h\${header}">
        Variant Title H\${header}
      </h4>
      <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
        <i role="presentation" class="sap-icon--slim-arrow-down"></i>
      </button>
    </div>
  </div>
  \`).join('\\n');
}`,...(s=(i=a.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var r,d,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:"() => dirtyLabelExampleHtml",...(o=(d=t.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};const b=["HeaderSizes","DirtyLabel"];export{t as DirtyLabel,a as HeaderSizes,b as __namedExportsOrder,u as default};
//# sourceMappingURL=variant-management.stories-9e381d98.js.map
