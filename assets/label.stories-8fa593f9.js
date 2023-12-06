const o=`<label class="sap-label">Default Label</label>
<br>
<label class="sap-label-required">Required Label</label>
<br>
<label class="sap-label-colon">Colon Label</label>
<br>
<label class="sap-label-colon-required">Required Colon Label</label>
<br>`;const s={title:"Label",parameters:{description:`The following classes and mixin provide a way to style your labels per SAP design. 
<br><br>
<b>CSS Classes: </b><br><br>
<code>.sap-label</code><br>
<code>.sap-label-required</code><br>
<code>.sap-label-colon</code><br>
<code>.sap-label-colon-required</code><br><br><br>
<b>SCSS Mixin: </b>
<code>@include sap-label(<i style="color: red;">$required, $colon</i>)</code><br>
where <i style="color: red;">$required</i> and <i style="color: red;">$colon</i> are optional and can be set individually. <br>
- <code>@include sap-label($required: true)</code>: to display a label with asterisk<br>
- <code>@include sap-label($colon: true)</code>: to display a label with colon<br>
- <code>@include sap-label($required: true, $colon: true)</code>: to display a label with asterisk and colon<br>`}},e=()=>o;e.storyName="Examples";var l,a,r;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"() => defaultExampleExampleHtml",...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const b=["DefaultExample"];export{e as DefaultExample,b as __namedExportsOrder,s as default};
//# sourceMappingURL=label.stories-8fa593f9.js.map
