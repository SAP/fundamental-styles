/* empty css                   */const a=`<h3>brandColor (--sapBrandColor)</h3>
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
<br>
<h3>accentColor1 (--sapAccentColor1)</h3>
<div class="sap-color-accentColor1">TEXT</div>
<br>
<h3>accentColor9 (--sapAccentColor9)</h3>
<div class="sap-color-accentColor9">TEXT</div>
<br>
<h3>legendColor3 (--sapLegendColor3)</h3>
<div class="sap-color-legendColor3">TEXT</div>
<br>
<h3>legendColor8 (--sapLegendColor8)</h3>
<div class="sap-color-legendColor8">TEXT</div>
`,n=`<h3>brandColor (--sapBrandColor)</h3>
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

<br>
<h3>neutralBackground (--sapNeutralBackground)</h3>
<div class="demo sap-bg-color-neutralBackground"></div>

<br>
<h3>accentBackgroundColor1 (--sapAccentBackgroundColor1)</h3>
<div class="demo sap-bg-color-accentBackgroundColor1"></div>

<br>
<h3>accentBackgroundColor9 (--sapAccentBackgroundColor9)</h3>
<div class="demo sap-bg-color-accentBackgroundColor9"></div>

<br>
<h3>legendBackgroundColor5 (--sapLegendBackgroundColor5)</h3>
<div class="demo sap-bg-color-legendBackgroundColor5"></div>

<br>
<h3>legendBackgroundColor7 (--sapLegendBackgroundColor7)</h3>
<div class="demo sap-bg-color-legendBackgroundColor7"></div>
`,l={title:"Colors",parameters:{description:""}},e=`
<style>
    div.demo {
        display: flex;
        height: 4rem;
        width: 8rem;
    }
</style>
`,o=()=>`
${e}
${a}
`;o.parameters={docs:{description:{story:`To set the text color of an element use the class <code>.sap-color-<i style="color: red;">colorName</i></code>, where <i style="color: red;">colorName</i> is the base of the css variable from the SAP-theming package that represent the desired color. <br><br>
            <b>SCSS Mixin:</b> 
            <code>@include  sap-color(colorName)</code>
            `}}};const r=()=>`
${e}
${n}
`;r.parameters={docs:{description:{story:`To set the background color of an element use the class <code>.sap-bg-color-<i style="color: red;">colorName</i></code>, where <i style="color: red;">colorName</i> is the base of the css variable from the SAP-theming package that represent the desired color. <br><br>
            <b>SCSS Mixin:</b> 
            <code>@include  sap-bg-color(colorName)</code>
            `}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"() => `\n${localStyles}\n${textColorExampleHtml}\n`",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"() => `\n${localStyles}\n${backgroundColorExampleHtml}\n`",...r.parameters?.docs?.source}}};const s=["TextColor","BackgroundColor"];export{r as BackgroundColor,o as TextColor,s as __namedExportsOrder,l as default};
