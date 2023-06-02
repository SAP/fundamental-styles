/* empty css                   *//* empty css             */const u=`<span class="fd-info-label fd-info-label--display">
    <span class="fd-info-label__text">system state</span>
</span>
<span class="fd-info-label fd-info-label--display fd-info-label--numeric">
    <span class="fd-info-label__text">42</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-2 fd-info-label--icon fd-info-label--display ">
    <i role="presentation" class="fd-info-label__icon sap-icon--upload-to-cloud"></i>
</span>
<span class="fd-info-label fd-info-label--accent-color-1 fd-info-label--icon fd-info-label--display">
    <i role="presentation" class="fd-info-label__icon sap-icon--future"></i>
    <span class="fd-info-label__text">Info Label</span>
</span>
`,x=`<span class="fd-info-label fd-info-label--numeric fd-info-label--accent-color-1">
    <span class="fd-info-label__text">6</span>
</span>
<span class="fd-info-label fd-info-label--numeric fd-info-label--accent-color-2">
    <span class="fd-info-label__text">6.2</span>
</span>
<span class="fd-info-label fd-info-label--numeric fd-info-label--accent-color-3">
    <span class="fd-info-label__text">42k</span>
</span>
`,I=`<span class="fd-info-label fd-info-label--accent-color-1 fd-info-label--icon">
    <i role="presentation" class="fd-info-label__icon sap-icon--future"></i>
    <span class="fd-info-label__text">Info Label</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-2 fd-info-label--icon">
    <i role="presentation" class="fd-info-label__icon sap-icon--upload-to-cloud"></i>
</span>
`,y=`<span class="fd-info-label fd-info-label--accent-color-1">
    <span class="fd-info-label__text">color 1</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-2">
    <span class="fd-info-label__text">color 2</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-3">
    <span class="fd-info-label__text">color 3</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-4">
    <span class="fd-info-label__text">color 4</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-5">
    <span class="fd-info-label__text">color 5</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-6">
    <span class="fd-info-label__text">color 6</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-7">
    <span class="fd-info-label__text">color 7</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-8">
    <span class="fd-info-label__text">color 8</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-9">
    <span class="fd-info-label__text">color 9</span>
</span>
<span class="fd-info-label fd-info-label--accent-color-10">
    <span class="fd-info-label__text">color 10</span>
</span>
`,E={title:"Components/Info Label",parameters:{description:`
Info Label is a small non-interactive numeric or text-based label.
Its primary use is to add user-defined characteristic to an object.
Use the Info Label base class with following modifiers:

- \`fd-info-label\`
    - \`fd-info-label--accent-color-*\`
    - \`fd-info-label--icon\`
    - \`fd-info-label--numeric\`
      `,tags:["btp","a11y","theme"]}},a=()=>y;a.parameters={docs:{description:{story:"Use the `fd-info-label--accent-color-*` modifier class to apply semantic color to Info Label.\n            Options include numbers from 1 to 10."}}};const n=()=>I;n.parameters={docs:{description:{story:"Use the `fd-info-label--icon` modifier class and icon type to create Info Label with Icon."}}};const l=()=>x;l.parameters={docs:{description:{story:"For Numeric Info Label use the `fd-info-label--numeric` modifier class."}}};const o=()=>u;o.parameters={docs:{description:{story:"For Display Only Info Label use the `fd-info-label--display` modifier class."}}};var s,e,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:"() => colorFlavorsExampleHtml",...(c=(e=a.parameters)==null?void 0:e.docs)==null?void 0:c.source}}};var f,i,t;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:"() => infoLabelWithIconExampleHtml",...(t=(i=n.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var r,p,d;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:"() => numericInfoLabelExampleHtml",...(d=(p=l.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var b,m,_;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:"() => displayOnlyInfoLabelExampleHtml",...(_=(m=o.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};const H=["ColorFlavors","InfoLabelWithIcon","NumericInfoLabel","DisplayOnlyInfoLabel"];export{a as ColorFlavors,o as DisplayOnlyInfoLabel,n as InfoLabelWithIcon,l as NumericInfoLabel,H as __namedExportsOrder,E as default};
//# sourceMappingURL=info-label.stories-ebe8b3d7.js.map
