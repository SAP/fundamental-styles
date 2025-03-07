/* empty css                   */const n=`<div style="width: 100%; min-height: 600px;">
    <div class="sap-page-title sap-bg-color-errorBackground">Page Title</div>
    <div class="sap-section-title sap-bg-color-informationBackground">Section Title (first, after Page Title)</div>
    <div class="sap-subsection-title sap-bg-color-warningBackground">Subsection Title</div>
    <div style="width: 100%; min-height: 100px;"></div>
    <div class="sap-section-title sap-bg-color-informationBackground">Section Title (between sections)</div>
    <div class="sap-subsection-title sap-bg-color-warningBackground">Subsection Title</div>
</div>`,o=`<div style="width: 100%; min-height: 600px;">
    <div class="sap-section-title sap-bg-color-informationBackground">Section Title (first)</div>
    <div class="sap-subsection-title sap-bg-color-warningBackground">Subsection Title</div>
    <div style="width: 100%; min-height: 100px;"></div>
    <div class="sap-section-title sap-bg-color-informationBackground">Section Title (between sections)</div>
    <div class="sap-subsection-title sap-bg-color-warningBackground">Subsection Title</div>
</div>`,s=`<div style="width: 100%; min-height: 600px;">
    <div class="sap-page-title no-inline-padding sap-bg-color-errorBackground">Page Title</div>
    <div class="sap-section-title no-inline-padding sap-bg-color-informationBackground">Section Title (first)</div>
    <div class="sap-subsection-title no-inline-padding sap-bg-color-warningBackground">Subsection Title</div>
    <div style="width: 100%; min-height: 100px;"></div>
    <div class="sap-section-title no-inline-padding sap-bg-color-informationBackground">Section Title (between sections)</div>
    <div class="sap-subsection-title no-inline-padding sap-bg-color-warningBackground">Subsection Title</div>
</div>`,r={title:"Titles",parameters:{description:`Page Title, Section Title, and Subsection Title can be used as building blocks for home pages. These elements follow a responsive spacing system for horizontal padding, which can be disabled using the <code>.no-inline-padding</code> modifier class.

Typically, there is only one <b>Page Title</b> (optional), displayed in the content area above the group name. The top padding of a <b>Section Title</b> varies depending on whether a <b>Page Title</b> is present. Additionally, the vertical padding of a <b>Section Title</b> depends on its position — whether it is the first <b>Section Title</b> on the page or situated between sections. <br>
<b>Subsection Title</b> has no padding-top, but if there's no <b>Section Title</b>, than <b>Subsection Title</b> adds 1rem padding-top.`}},e=()=>n;e.storyName="Page Title, Section Title and Subsection Title";e.parameters={docs:{description:{story:`The first <b>Section Title</b> under the <b>Page Title</b> has a 0.5rem top padding. Between sections, the top padding is 3rem for XL, L, and M screens, and 2rem for S screens.<br><br>
      <b style="color: red">NOTE: The background color for the titles is added for illustration purposes.</b>`}}};const i=()=>o;i.storyName="Section Title and Subsection Title (no Page Title)";i.parameters={docs:{description:{story:`When there is no <b>Page Title</b>, the first <b>Section Title</b> has a top padding of 1.5rem. The padding between sections remains the same: 3rem for XL, L, and M screens, and 2rem for S screens. <br><br>
      <b style="color: red">NOTE: The background color for the titles is added for illustration purposes.</b>`}}};const t=()=>s;t.storyName="";t.parameters={docs:{description:{story:"To disable the responsive horizontal (inline) paddings add <code>.no-inline-padding</code> on the title element."}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => withPageTitleExampleHtml",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => noPageTitleExampleHtml",...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => noInlinePaddingExampleHtml",...t.parameters?.docs?.source}}};const d=["Home","NoPageTitle","NoInlinePadding"];export{e as Home,t as NoInlinePadding,i as NoPageTitle,d as __namedExportsOrder,r as default};
