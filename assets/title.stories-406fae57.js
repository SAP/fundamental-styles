var S=Object.defineProperty,f=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var l=(n,e,i)=>e in n?S(n,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[e]=i,t=(n,e)=>{for(var i in e||(e={}))y.call(e,i)&&l(n,i,e[i]);if(d)for(var i of d(e))P.call(e,i)&&l(n,i,e[i]);return n},o=(n,e)=>f(n,w(e));/* empty css                   */const k=`<div style="width: 100%; min-height: 600px;">
    <div class="sap-page-title sap-bg-color-errorBackground">Page Title</div>
    <div class="sap-section-title sap-bg-color-informationBackground">Section Title (first, after Page Title)</div>
    <div class="sap-subsection-title sap-bg-color-warningBackground">Subsection Title</div>
    <div style="width: 100%; min-height: 100px;"></div>
    <div class="sap-section-title sap-bg-color-informationBackground">Section Title (between sections)</div>
    <div class="sap-subsection-title sap-bg-color-warningBackground">Subsection Title</div>
</div>`,B=`<div style="width: 100%; min-height: 600px;">
    <div class="sap-section-title sap-bg-color-informationBackground">Section Title (first)</div>
    <div class="sap-subsection-title sap-bg-color-warningBackground">Subsection Title</div>
    <div style="width: 100%; min-height: 100px;"></div>
    <div class="sap-section-title sap-bg-color-informationBackground">Section Title (between sections)</div>
    <div class="sap-subsection-title sap-bg-color-warningBackground">Subsection Title</div>
</div>`,x=`<div style="width: 100%; min-height: 600px;">
    <div class="sap-page-title no-inline-padding sap-bg-color-errorBackground">Page Title</div>
    <div class="sap-section-title no-inline-padding sap-bg-color-informationBackground">Section Title (first)</div>
    <div class="sap-subsection-title no-inline-padding sap-bg-color-warningBackground">Subsection Title</div>
    <div style="width: 100%; min-height: 100px;"></div>
    <div class="sap-section-title no-inline-padding sap-bg-color-informationBackground">Section Title (between sections)</div>
    <div class="sap-subsection-title no-inline-padding sap-bg-color-warningBackground">Subsection Title</div>
</div>`,H={title:"Titles",parameters:{description:`Page Title, Section Title, and Subsection Title can be used as building blocks for home pages. These elements follow a responsive spacing system for horizontal padding, which can be disabled using the <code>.no-inline-padding</code> modifier class.

Typically, there is only one <b>Page Title</b> (optional), displayed in the content area above the group name. The top padding of a <b>Section Title</b> varies depending on whether a <b>Page Title</b> is present. Additionally, the vertical padding of a <b>Section Title</b> depends on its position — whether it is the first <b>Section Title</b> on the page or situated between sections. <br>
<b>Subsection Title</b> has no padding-top, but if there's no <b>Section Title</b>, than <b>Subsection Title</b> adds 1rem padding-top.`}},s=()=>k;s.storyName="Page Title, Section Title and Subsection Title";s.parameters={docs:{description:{story:`The first <b>Section Title</b> under the <b>Page Title</b> has a 0.5rem top padding. Between sections, the top padding is 3rem for XL, L, and M screens, and 2rem for S screens.<br><br>
      <b style="color: red">NOTE: The background color for the titles is added for illustration purposes.</b>`}}};const a=()=>B;a.storyName="Section Title and Subsection Title (no Page Title)";a.parameters={docs:{description:{story:`When there is no <b>Page Title</b>, the first <b>Section Title</b> has a top padding of 1.5rem. The padding between sections remains the same: 3rem for XL, L, and M screens, and 2rem for S screens. <br><br>
      <b style="color: red">NOTE: The background color for the titles is added for illustration purposes.</b>`}}};const r=()=>x;r.storyName="";r.parameters={docs:{description:{story:"To disable the responsive horizontal (inline) paddings add <code>.no-inline-padding</code> on the title element."}}};var c,p,g;s.parameters=o(t({},s.parameters),{docs:o(t({},(c=s.parameters)==null?void 0:c.docs),{source:t({originalSource:"() => withPageTitleExampleHtml"},(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source)})});var b,m,h;a.parameters=o(t({},a.parameters),{docs:o(t({},(b=a.parameters)==null?void 0:b.docs),{source:t({originalSource:"() => noPageTitleExampleHtml"},(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source)})});var u,T,v;r.parameters=o(t({},r.parameters),{docs:o(t({},(u=r.parameters)==null?void 0:u.docs),{source:t({originalSource:"() => noInlinePaddingExampleHtml"},(v=(T=r.parameters)==null?void 0:T.docs)==null?void 0:v.source)})});const I=["Home","NoPageTitle","NoInlinePadding"];export{s as Home,r as NoInlinePadding,a as NoPageTitle,I as __namedExportsOrder,H as default};
