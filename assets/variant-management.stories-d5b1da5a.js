/* empty css               *//* empty css              *//* empty css             */const o=`<div class="fd-variant-management">
  <div class="fd-variant-management__header" tabindex="0">
    <h1 class="fd-title fd-variant-management__title fd-title--h1">
      Variant Title H1
    </h1>
    <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
      <i role="presentation" class="sap-icon--slim-arrow-down"></i>
    </button>
  </div>
</div>
<br>
<div class="fd-variant-management">
  <div class="fd-variant-management__header" tabindex="0">
    <h2 class="fd-title fd-variant-management__title fd-title--h2">
      Variant Title H2
    </h2>
    <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
      <i role="presentation" class="sap-icon--slim-arrow-down"></i>
    </button>
  </div>
</div>
<br>
<div class="fd-variant-management">
  <div class="fd-variant-management__header" tabindex="0">
    <h3 class="fd-title fd-variant-management__title fd-title--h3">
      Variant Title H3
    </h3>
    <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
      <i role="presentation" class="sap-icon--slim-arrow-down"></i>
    </button>
  </div>
</div>
<br>
<div class="fd-variant-management">
  <div class="fd-variant-management__header" tabindex="0">
    <h4 class="fd-title fd-variant-management__title fd-title--h4">
      Variant Title H4
    </h4>
    <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
      <i role="presentation" class="sap-icon--slim-arrow-down"></i>
    </button>
  </div>
</div>
<br>
<div class="fd-variant-management">
  <div class="fd-variant-management__header" tabindex="0">
    <h5 class="fd-title fd-variant-management__title fd-title--h5">
      Variant Title H5
    </h5>
    <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
      <i role="presentation" class="sap-icon--slim-arrow-down"></i>
    </button>
  </div>
</div>
<br>
<div class="fd-variant-management">
  <div class="fd-variant-management__header" tabindex="0">
    <h6 class="fd-title fd-variant-management__title fd-title--h6">
      Variant Title H6
    </h6>
    <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
      <i role="presentation" class="sap-icon--slim-arrow-down"></i>
    </button>
  </div>
</div>
<br>
<div class="fd-variant-management">
  <div class="fd-variant-management__header" tabindex="0">
    <div class="fd-title fd-variant-management__title fd-variant-management__title--object-header" role="heading" aria-level="4">
      Object Header
    </div>
    <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
      <i role="presentation" class="sap-icon--slim-arrow-down"></i>
    </button>
  </div>
</div>
<br>
<div class="fd-variant-management">
  <div class="fd-variant-management__header" tabindex="0">
    <div class="fd-title fd-variant-management__title fd-variant-management__title--snapped-object-header" role="heading" aria-level="4">
      Snapped Object Header
    </div>
    <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
      <i role="presentation" class="sap-icon--slim-arrow-down"></i>
    </button>
  </div>
</div>
<br>
<div class="fd-variant-management">
  <div class="fd-variant-management__header" tabindex="0">
    <div class="fd-title fd-variant-management__title fd-variant-management__title--table" role="heading" aria-level="3">
      Table Header
    </div>
    <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
      <i role="presentation" class="sap-icon--slim-arrow-down"></i>
    </button>
  </div>
</div>
<br>
<div class="fd-variant-management">
  <div class="fd-variant-management__header" tabindex="0">
    <h4 class="fd-title fd-variant-management__title fd-title--h4 is-disabled">
      Disabled Variant Title H4
    </h4>
    <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button" disabled>
      <i role="presentation" class="sap-icon--slim-arrow-down"></i>
    </button>
  </div>
</div>`,l=`
<div class="fd-variant-management">
  <div class="fd-variant-management__header" tabindex="0">
    <h3 class="fd-title fd-variant-management__title fd-title--h3">
      Unsaved Variant Title
    </h3>
    <span class="fd-variant-management__dirty-indicator">*</span>
    <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
      <i role="presentation" class="sap-icon--slim-arrow-down"></i>
    </button>
  </div>
</div>
<div class="fd-variant-management">
  <div class="fd-variant-management__header" tabindex="0">
    <h3 class="fd-title fd-variant-management__title fd-title--h3">
      Unsaved Variant Title
    </h3>
    <span class="fd-variant-management__dirty-indicator fd-variant-management__dirty-indicator--custom">
      changed
    </span>
    <button aria-disabled="false" tabindex="0" aria-haspopup="true" class="fd-button fd-button--transparent fd-button--menu" type="button">
      <i role="presentation" class="sap-icon--slim-arrow-down"></i>
    </button>
  </div>
</div>
`;const f={title:"Components/Variant Management",parameters:{description:`Variants store filter settings which have been defined, for example, within the filter bar.
    The filter settings consist of filter parameters, selection fields and layout.
    This control enables the user to load, save, and change variants.
    In some cases, the table settings are also saved within a variant.
    In the context of tables, this control is used to save, manage, and load table settings which include layout, column visibility, sorting, and grouping.`,tags:["f3","theme","development"]}},t=()=>o;t.parameters={docs:{description:{story:`- <b>For matching the dynamic / object page header style:</b> add the modifier class <code>.fd-variant-management__title--object-header</code> to the <code>.fd-variant-management__title</code> base class.
- <b>For matching the dynamic / object page header style when the header is snapped or scrolled:</b> add the modifier class <code>.fd-variant-management__title--snapped-object-header</code> to the <code>.fd-variant-management__title</code> base class.
- <b>For matching the size of Headers within Tables:</b> add the modifier class <code>.fd-variant-management__title--title</code> to the <code>.fd-variant-management__title</code> base class.`}}};const a=()=>l;a.storyName="Dirty state";a.parameters={docs:{description:{story:`
<p>Variant management supports dirty indicator in cases when selected variant has been modified but not saved.</p>
<p>It can be either an asterisk sign, or a human-readable text.</p>`}}};var n,e,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"() => sizesExampleHtml",...(i=(e=t.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};var s,d,r;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:"() => dirtyLabelExampleHtml",...(r=(d=a.parameters)==null?void 0:d.docs)==null?void 0:r.source}}};const p=["Sizes","DirtyLabel"];export{a as DirtyLabel,t as Sizes,p as __namedExportsOrder,f as default};
//# sourceMappingURL=variant-management.stories-d5b1da5a.js.map
