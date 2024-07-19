var n=Object.defineProperty,p=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var d=(a,e,l)=>e in a?n(a,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[e]=l,o=(a,e)=>{for(var l in e||(e={}))m.call(e,l)&&d(a,l,e[l]);if(b)for(var l of b(e))x.call(e,l)&&d(a,l,e[l]);return a},s=(a,e)=>p(a,u(e));const y=`<label class="sap-label">Default Label</label>
<br>
<label class="sap-label-required">Required Label</label>
<br>
<label class="sap-label-colon">Colon Label</label>
<br>
<label class="sap-label-colon-required">Required Colon Label</label>
<br>`;const E={title:"Label",parameters:{description:`The following classes and mixin provide a way to style your labels per SAP design. 
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
- <code>@include sap-label($required: true, $colon: true)</code>: to display a label with asterisk and colon<br>`}},r=()=>y;r.storyName="Examples";var c,i,t;r.parameters=s(o({},r.parameters),{docs:s(o({},(c=r.parameters)==null?void 0:c.docs),{source:o({originalSource:"() => defaultExampleExampleHtml"},(t=(i=r.parameters)==null?void 0:i.docs)==null?void 0:t.source)})});const $=["DefaultExample"];export{r as DefaultExample,$ as __namedExportsOrder,E as default};
