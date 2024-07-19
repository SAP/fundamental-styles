var F=Object.defineProperty,v=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var o=(d,t,a)=>t in d?F(d,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):d[t]=a,e=(d,t)=>{for(var a in t||(t={}))T.call(t,a)&&o(d,a,t[a]);if(p)for(var a of p(t))M.call(t,a)&&o(d,a,t[a]);return d},s=(d,t)=>v(d,L(t));const A=`
<span>Header Text in Size 3: </span><span class="sap-font-header-3">Used in dynamic page header, object page header</span><br><br>
<span>Standard Text: </span><span class="sap-font-standard-text">Used in text control</span><br><br>
<span>Small Detail Text: </span><span class="sap-font-small-detail-text">Used in time stamps, small bylines</span><br><br>
<span>Standard Field Text: </span><span class="sap-font-standard-field-text">Used in input field, feed input, text area</span><br><br>
<span>Labels: </span><span class="sap-font-label">Used in labels</span><br><br>
<span>Descriptions: </span><span class="sap-font-description">Used in object attribute</span><br><br>
`,C=`
<span>Normal: </span><p class="sap-font-line-height" style="background: cyan;">Line Height</p><br><br>
<span>1.4: </span><p class="sap-font-line-height-long" style="background: cyan;">Line Height</p><br><br>
`,B=`
<span>Header-6: </span><span class="sap-font-size-header-6">Font Size</span><br><br>
<span>Header-5: </span><span class="sap-font-size-header-5">Font Size</span><br><br>
<span>Header-4: </span><span class="sap-font-size-header-4">Font Size</span><br><br>
<span>Header-3: </span><span class="sap-font-size-header-3">Font Size</span><br><br>
<span>Header-2: </span><span class="sap-font-size-header-2">Font Size</span><br><br>
<span>Header-1: </span><span class="sap-font-size-header-1">Font Size</span><br><br>
<span>Small: </span><span class="sap-font-size-small">Font Size</span><br><br>
<span>Medium: </span><span class="sap-font-size-medium">Font Size</span><br><br>
<span>Large: </span><span class="sap-font-size-large">Font Size</span><br><br>
`,D=`
<span>Regular: </span><span class="sap-font-family-regular">Font Family</span><br><br>
<span>Light: </span><span class="sap-font-family-light">Font Family</span><br><br>
<span>Bold: </span><span class="sap-font-family-bold">Font Family</span><br><br>
<span>Semibold: </span><span class="sap-font-family-semibold">Font Family</span><br><br>
<span>Semibold Duplex: </span><span class="sap-font-family-semibold-duplex">Font Family</span><br><br>
<span>Monospaced Regular: </span><span class="sap-font-family-monospaced-regular">Font Family</span><br><br>
<span>Monospaced Bold: </span><span class="sap-font-family-monospaced-bold">Font Family</span><br><br>
<span>Black: </span><span class="sap-font-family-black">Font Family</span><br><br>
<span>Header: </span><span class="sap-font-family-header">Font Family</span><br><br>
`;const k={title:"Typography",parameters:{description:`
      `}},n=()=>D;n.parameters={docs:{description:{story:`To set the <b>font-family</b> of an element use the <code>.sap-font-family-<i style="color: red;">type</i></code>class or the <code>@include sap-font-family(<i style="color: red;">type</i>)</code> mixin with <i style="color: red;">type</i> being one of the following:<br> regular | light | bold | semibold | semibold-duplex | monospaced-regular | monospaced-bold | black | header 
<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tr>
        <th style="padding: 0.25rem;">Type</th>
        <th style="padding: 0.25rem;">Resultant Style</th>
        <th style="padding: 0.25rem;">Class</th>
        <th style="padding: 0.25rem;">Mixin</th>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Regular</td>
        <td style="padding: 0.25rem;">font-family: "72", "72full", Arial, Helvetica, sans-serif;</td>
        <td style="padding: 0.25rem;">.sap-font-family-regular</td>
        <td style="padding: 0.25rem;">@include sap-font-family(regular)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Light</td>
        <td style="padding: 0.25rem;">font-family: "72-Light" , "72-Lightfull" , "72" , "72full" , Arial, Helvetica, sans-serif;</td>
        <td style="padding: 0.25rem;">.sap-font-family-light</td>
        <td style="padding: 0.25rem;">@include sap-font-family(light)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Bold</td>
        <td style="padding: 0.25rem;">font-family: "72-Bold" , "72-Boldfull" , "72" , "72full" , Arial, Helvetica, sans-serif;</td>
        <td style="padding: 0.25rem;">.sap-font-family-bold</td>
        <td style="padding: 0.25rem;">@include sap-font-family(bold)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Semibold</td>
        <td style="padding: 0.25rem;">font-family: "72-Semibold", "72-Semiboldfull", "72", "72full", Arial, Helvetica, sans-serif;</td>
        <td style="padding: 0.25rem;">.sap-font-family-semibold</td>
        <td style="padding: 0.25rem;">@include sap-font-family(semibold)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Semibold Duplex</td>
        <td style="padding: 0.25rem;">font-family: "72-SemiboldDuplex", "72-SemiboldDuplexfull", "72", "72full", Arial, Helvetica, sans-serif</td>
        <td style="padding: 0.25rem;">.sap-font-family-semibold-duplex</td>
        <td style="padding: 0.25rem;">@include sap-font-family(semibold-duplex)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Monospaced Regular</td>
        <td style="padding: 0.25rem;">font-family: "72Mono", "72Monofull", Lucida Console, monospace;</td>
        <td style="padding: 0.25rem;">.sap-font-family-monospaced-regular</td>
        <td style="padding: 0.25rem;">@include sap-font-family(monospaced-regular)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Monospaced Bold</td>
        <td style="padding: 0.25rem;">font-family: "72Mono-Bold", "72Mono-Boldfull", Lucida Console, monospace;</td>
        <td style="padding: 0.25rem;">.sap-font-family-monospaced-bold</td>
        <td style="padding: 0.25rem;">@include sap-font-family(monospaced-bold)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Black</td>
        <td style="padding: 0.25rem;">font-family: "72Black", "72", "72full", Arial, Helvetica, sans-serif</td>
        <td style="padding: 0.25rem;">.sap-font-family-black</td>
        <td style="padding: 0.25rem;">@include sap-font-family(black)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Header</td>
        <td style="padding: 0.25rem;">font-family: "72", "72full", Arial, Helvetica, sans-serif;</td>
        <td style="padding: 0.25rem;">.sap-font-family-header</td>
        <td style="padding: 0.25rem;">@include sap-font-family(header)</td>
    </tr>
</table>`}}};const l=()=>B;l.parameters={docs:{description:{story:`To set the <b>font-size</b> of an element use the <code>.sap-font-size-<i style="color: red;">value</i></code>class or the <code>@include sap-font-size(<i style="color: red;">value</i>)</code> mixin with <i style="color: red;">value</i> being one of the following:<br> header-6 | header-5 | header-4 | header-3 | header-2 | header-1 | small | medium | large 
<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tr>
        <th style="padding: 0.25rem;">Type</th>
        <th style="padding: 0.25rem;">Resultant Style</th>
        <th style="padding: 0.25rem;">Class</th>
        <th style="padding: 0.25rem;">Mixin</th>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Header 6</td>
        <td style="padding: 0.25rem;">font-size: 0.875rem; (14px)</td>
        <td style="padding: 0.25rem;">.sap-font-size-header-6</td>
        <td style="padding: 0.25rem;">@include sap-font-size(header-6)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Header 5</td>
        <td style="padding: 0.25rem;">font-size: 1rem; (16px)</td>
        <td style="padding: 0.25rem;">.sap-font-size-header-5</td>
        <td style="padding: 0.25rem;">@include sap-font-size(header-5)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Header 4</td>
        <td style="padding: 0.25rem;">font-size: 1.125rem; (18px)</td>
        <td style="padding: 0.25rem;">.sap-font-size-header-4</td>
        <td style="padding: 0.25rem;">@include sap-font-size(header-4)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Header 3</td>
        <td style="padding: 0.25rem;">font-size: 1.25rem; (20px)</td>
        <td style="padding: 0.25rem;">.sap-font-size-header-3</td>
        <td style="padding: 0.25rem;">@include sap-font-size(header-3)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Header 2</td>
        <td style="padding: 0.25rem;">font-size: 1.5rem; (24px)</td>
        <td style="padding: 0.25rem;">.sap-font-size-header-2</td>
        <td style="padding: 0.25rem;">@include sap-font-size(header-2)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Header 1</td>
        <td style="padding: 0.25rem;">font-size: 2.25rem; (36px)</td>
        <td style="padding: 0.25rem;">.sap-font-size-header-1</td>
        <td style="padding: 0.25rem;">@include sap-font-size(header-1)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Small</td>
        <td style="padding: 0.25rem;">font-size: 0.75rem; (12px)</td>
        <td style="padding: 0.25rem;">.sap-font-size-small</td>
        <td style="padding: 0.25rem;">@include sap-font-size(small)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Medium</td>
        <td style="padding: 0.25rem;">font-size: 0.875rem; (14px)</td>
        <td style="padding: 0.25rem;">.sap-font-size-medium</td>
        <td style="padding: 0.25rem;">@include sap-font-size(medium)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Large</td>
        <td style="padding: 0.25rem;">font-size: 1rem; (16px)</td>
        <td style="padding: 0.25rem;">.sap-font-size-large</td>
        <td style="padding: 0.25rem;">@include sap-font-size(large)</td>
    </tr>
</table>`}}};const r=()=>C;r.parameters={docs:{description:{story:`In general, there is no line height applied to text, as the line height e.g. affects the padding.
If a more generous line height is required for long continuous text, a consistent line height of 1.4 is recommended.

Use the <code>.sap-font-line-height</code> class to apply <b>normal</b> line-height to the elements and <code>.sap-font-line-height-long</code> class for <b>1.4</b> line-height. 
<br><br>
<b>SCSS Mixin: </b> <code>@include sap-font-line-height(<i style="color:red;">$value</i>)</code>. Omit the value for <b>normal</b> line-height: <code>@include sap-font-line-height()</code>.
`}}};const i=()=>A;i.parameters={docs:{description:{story:`<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tr>
        <th style="padding: 0.25rem;">Description</th>
        <th style="padding: 0.25rem;">Resultant Style (Quartz Light)</th>
        <th style="padding: 0.25rem;">Usage Examples</th>
        <th style="padding: 0.25rem;">Class</th>
        <th style="padding: 0.25rem;">Mixin</th>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Header Text in Size 3</td>
        <td style="padding: 0.25rem;">font-family: "72", "72full", Arial, Helvetica, sans-serif;
         font-size: 20px; color: #32363a;</td>
        <td style="padding: 0.25rem;">Dynamic page header, object page header</td>
        <td style="padding: 0.25rem;">.sap-font-header-3</td>
        <td style="padding: 0.25rem;">@include sap-font(header-3)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Standard Text</td>
        <td style="padding: 0.25rem;">font-family: "72", "72full", Arial, Helvetica, sans-serif;
         font-size: 14px; color: #32363a;</td>
        <td style="padding: 0.25rem;">Text control</td>
        <td style="padding: 0.25rem;">.sap-font-standard-text</td>
        <td style="padding: 0.25rem;">@include sap-font(standard-text)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Small Detail Text</td>
        <td style="padding: 0.25rem;">font-family: "72", "72full", Arial, Helvetica, sans-serif;
         font-size: 12px; color: #6a6d70;</td>
        <td style="padding: 0.25rem;">Time stamps, small bylines</td>
        <td style="padding: 0.25rem;">.sap-font-small-detail-text</td>
        <td style="padding: 0.25rem;">@include sap-font(small-detail-text)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Standard Field Text</td>
        <td style="padding: 0.25rem;">font-family: "72", "72full", Arial, Helvetica, sans-serif;
         font-size: 14px; color: #32363a;</td>
        <td style="padding: 0.25rem;">Input field, feed input, text area</td>
        <td style="padding: 0.25rem;">.sap-font-standard-field-text</td>
        <td style="padding: 0.25rem;">@include sap-font(standard-field-text)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Labels</td>
        <td style="padding: 0.25rem;">font-family: "72", "72full", Arial, Helvetica, sans-serif;
         font-size: 14px; color: #6a6d70;</td>
        <td style="padding: 0.25rem;">Labels</td>
        <td style="padding: 0.25rem;">.sap-font-label</td>
        <td style="padding: 0.25rem;">@include sap-font(label)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Descriptions</td>
        <td style="padding: 0.25rem;">font-family: "72", "72full", Arial, Helvetica, sans-serif;
         font-size: 14px; color: #6a6d70;</td>
        <td style="padding: 0.25rem;">Object attribute</td>
        <td style="padding: 0.25rem;">.sap-font-description</td>
        <td style="padding: 0.25rem;">@include sap-font(description)</td>
    </tr>
</table>`}}};var m,f,y;n.parameters=s(e({},n.parameters),{docs:s(e({},(m=n.parameters)==null?void 0:m.docs),{source:e({originalSource:"() => fontFamilyExampleHtml"},(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source)})});var c,g,b;l.parameters=s(e({},l.parameters),{docs:s(e({},(c=l.parameters)==null?void 0:c.docs),{source:e({originalSource:"() => fontSizeExampleHtml"},(b=(g=l.parameters)==null?void 0:g.docs)==null?void 0:b.source)})});var h,u,x;r.parameters=s(e({},r.parameters),{docs:s(e({},(h=r.parameters)==null?void 0:h.docs),{source:e({originalSource:"() => lineHeightExampleHtml"},(x=(u=r.parameters)==null?void 0:u.docs)==null?void 0:x.source)})});var z,H,S;i.parameters=s(e({},i.parameters),{docs:s(e({},(z=i.parameters)==null?void 0:z.docs),{source:e({originalSource:"() => commonCasesExampleHtml"},(S=(H=i.parameters)==null?void 0:H.docs)==null?void 0:S.source)})});const U=["FontFamily","FontSize","LineHeight","CommonCases"];export{i as CommonCases,n as FontFamily,l as FontSize,r as LineHeight,U as __namedExportsOrder,k as default};
