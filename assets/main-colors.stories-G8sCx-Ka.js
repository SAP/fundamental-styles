const n=`<h3>brandColor (--sapBrandColor)</h3>
<div class="sap-color-brandColor">TEXT</div>
<br>
<h3>textColor (--sapTextColor)</h3>
<div class="sap-color-textColor">TEXT</div>
<br>
<h3>negativeColor (--sapNegativeColor)</h3>
<div class="sap-color-negativeColor">TEXT</div>
<br>
<h3>criticalColor (--sapCriticalColor)</h3>
<div class="sap-color-criticalColor">TEXT</div>
<br>
<h3>positiveColor (--sapPositiveColor)</h3>
<div class="sap-color-positiveColor">TEXT</div>
<br>
<h3>informativeColor (--sapInformativeColor)</h3>
<div class="sap-color-informativeColor">TEXT</div>
<br>
<h3>neutralColor (--sapNeutralColor)</h3>
<div class="sap-color-neutralColor">TEXT</div>
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
<h3>accentColor2 (--sapAccentColor2)</h3>
<div class="sap-color-accentColor2">TEXT</div>
<br>
<h3>accentColor3 (--sapAccentColor3)</h3>
<div class="sap-color-accentColor3">TEXT</div>
<br>
<h3>accentColor4 (--sapAccentColor4)</h3>
<div class="sap-color-accentColor4">TEXT</div>
<br>
<h3>accentColor5 (--sapAccentColor5)</h3>
<div class="sap-color-accentColor5">TEXT</div>
<br>
<h3>accentColor6 (--sapAccentColor6)</h3>
<div class="sap-color-accentColor6">TEXT</div>
<br>
<h3>accentColor7 (--sapAccentColor7)</h3>
<div class="sap-color-accentColor7">TEXT</div>
<br>
<h3>accentColor8 (--sapAccentColor8)</h3>
<div class="sap-color-accentColor8">TEXT</div>
<br>
<h3>accentColor9 (--sapAccentColor9)</h3>
<div class="sap-color-accentColor9">TEXT</div>
<br>
<h3>accentColor10 (--sapAccentColor10)</h3>
<div class="sap-color-accentColor10">TEXT</div>
`,a=`<div class="demo">
    <h3>backgroundColor (--sapBackgroundColor)</h3>
    <div class="sap-bg-color-backgroundColor"></div>

    <br>
    <h3>errorBackground (--sapErrorBackground)</h3>
    <div class="sap-bg-color-errorBackground"></div>

    <br>
    <h3>warningBackground (--sapWarningBackground)</h3>
    <div class="sap-bg-color-warningBackground"></div>

    <br>
    <h3>successBackground (--sapSuccessBackground)</h3>
    <div class="sap-bg-color-successBackground"></div>

    <br>
    <h3>informationBackground (--sapInformationBackground)</h3>
    <div class="sap-bg-color-informationBackground"></div>


    <br>
    <h3>neutralBackground (--sapNeutralBackground)</h3>
    <div class="sap-bg-color-neutralBackground"></div>

    <br>
    <h3>accentBackgroundColor1 (--sapAccentBackgroundColor1)</h3>
    <div class="sap-bg-color-accentBackgroundColor1"></div>


    <br>
    <h3>accentBackgroundColor2 (--sapAccentBackgroundColor2)</h3>
    <div class="sap-bg-color-accentBackgroundColor2"></div>


    <br>
    <h3>accentBackgroundColor3 (--sapAccentBackgroundColor3)</h3>
    <div class="sap-bg-color-accentBackgroundColor3"></div>


    <br>
    <h3>accentBackgroundColor4 (--sapAccentBackgroundColor4)</h3>
    <div class="sap-bg-color-accentBackgroundColor4"></div>


    <br>
    <h3>accentBackgroundColor5 (--sapAccentBackgroundColor5)</h3>
    <div class="sap-bg-color-accentBackgroundColor5"></div>


    <br>
    <h3>accentBackgroundColor6 (--sapAccentBackgroundColor6)</h3>
    <div class="sap-bg-color-accentBackgroundColor6"></div>


    <br>
    <h3>accentBackgroundColor7 (--sapAccentBackgroundColor7)</h3>
    <div class="sap-bg-color-accentBackgroundColor7"></div>


    <br>
    <h3>accentBackgroundColor8 (--sapAccentBackgroundColor8)</h3>
    <div class="sap-bg-color-accentBackgroundColor8"></div>

    <br>
    <h3>accentBackgroundColor9 (--sapAccentBackgroundColor9)</h3>
    <div class="sap-bg-color-accentBackgroundColor9"></div>


    <br>
    <h3>accentBackgroundColor10 (--sapAccentBackgroundColor10)</h3>
    <div class="sap-bg-color-accentBackgroundColor10"></div>
</div>`,l={title:"Colors/Main Colors",parameters:{description:""}},c=`
<style>
    .demo div {
        display: flex;
        height: 4rem;
        width: 8rem;
    }
</style>
`,o=()=>`
${c}
${n}
`;o.parameters={docs:{description:{story:`To set the text color of an element use the class <code>.sap-color-<i style="color: red;">colorName</i></code>, where <i style="color: red;">colorName</i> is the base of the css variable from the SAP-theming package that represent the desired color. <br><br><b>SCSS Mixin:</b> <code>@include  sap-color(colorName)</code>
            `}}};const r=()=>`
${c}
${a}
`;r.parameters={docs:{description:{story:`To set the background color of an element use the class <code>.sap-bg-color-<i style="color: red;">colorName</i></code>, where <i style="color: red;">colorName</i> is the base of the css variable from the SAP-theming package that represent the desired color. <br><br><b>SCSS Mixin:</b><code>@include  sap-bg-color(colorName)</code>
            `}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"() => `\n${localStyles}\n${mainTextColorExampleHtml}\n`",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"() => `\n${localStyles}\n${mainBackgroundColorExampleHtml}\n`",...r.parameters?.docs?.source}}};const s=["MainTextColor","MainBackgroundColor"];export{r as MainBackgroundColor,o as MainTextColor,s as __namedExportsOrder,l as default};
