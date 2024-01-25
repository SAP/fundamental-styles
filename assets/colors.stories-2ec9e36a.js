const d=`<h3>brandColor (--sapBrandColor)</h3>
<div class="sap-color-brandColor">TEXT</div>
<br>
<h3>positiveTextColor (--sapPositiveTextColor)</h3>
<div class="sap-color-positiveTextColor">TEXT</div>
<br>
<h3>criticalTextColor (--sapCriticalTextColor)</h3>
<div class="sap-color-criticalTextColor">TEXT</div>
<br>
<h3>negativeTextColor (--sapNegativeTextColor)</h3>
<div class="sap-color-negativeTextColor">TEXT</div>
<br>
<h3>informativeTextColor (--sapInformativeTextColor)</h3>
<div class="sap-color-informativeTextColor">TEXT</div>
<br>
<h3>neutralTextColor (--sapNeutralTextColor)</h3>
<div class="sap-color-neutralTextColor">TEXT</div>
`,i=`<h3>brandColor (--sapBrandColor)</h3>
<div class="demo sap-bg-color-brandColor"></div>
<br>
<h3>errorBackground (--sapErrorBackground)</h3>
<div class="demo sap-bg-color-errorBackground"></div>
<br>
<h3>warningBackground (--sapWarningBackground)</h3>
<div class="demo sap-bg-color-warningBackground"></div>
<br>
<h3>successBackground (--sapSuccessBackground)</h3>
<div class="demo sap-bg-color-successBackground"></div>
<br>
<h3>informationBackground (--sapInformationBackground)</h3>
<div class="demo sap-bg-color-informationBackground"></div>
<br>
<h3>neutralBackground (--sapNeutralBackground)</h3>
<div class="demo sap-bg-color-neutralBackground"></div>
`,p={title:"Colors",parameters:{description:""}},t=`
<style>
    div.demo {
        display: flex;
        height: 4rem;
        width: 8rem;
    }
</style>
`,o=()=>`
${t}
${d}
`;o.parameters={docs:{description:{story:`To set the text color of an element use the class <code>.sap-color-<i style="color: red;">colorName</i></code>, where <i style="color: red;">colorName</i> is the base of the css variable from the SAP-theming package that represent the desired color. <br><br>
            <b>SCSS Mixin:</b> 
            <code>@include  sap-color(colorName)</code>
            `}}};const r=()=>`
${t}
${i}
`;r.parameters={docs:{description:{story:`To set the background color of an element use the class <code>.sap-bg-color-<i style="color: red;">colorName</i></code>, where <i style="color: red;">colorName</i> is the base of the css variable from the SAP-theming package that represent the desired color. <br><br>
            <b>SCSS Mixin:</b> 
            <code>@include  sap-bg-color(colorName)</code>
            `}}};var e,a,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:"() => `\n${localStyles}\n${textColorExampleHtml}\n`",...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var l,c,n;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"() => `\n${localStyles}\n${backgroundColorExampleHtml}\n`",...(n=(c=r.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const m=["TextColor","BackgroundColor"];export{r as BackgroundColor,o as TextColor,m as __namedExportsOrder,p as default};
