/* empty css                   */const e=`<h3>indicationColor_1 (--sapIndicationColor_1)</h3>
<div class="sap-color-indicationColor_1">TEXT</div>
<br>
<h3>indicationColor_2 (--sapIndicationColor_2)</h3>
<div class="sap-color-indicationColor_2">TEXT</div>
<br>
<h3>indicationColor_3 (--sapIndicationColor_3)</h3>
<div class="sap-color-indicationColor_3">TEXT</div>
<br>
<h3>indicationColor_4 (--sapIndicationColor_4)</h3>
<div class="sap-color-indicationColor_4">TEXT</div>
<br>
<h3>indicationColor_5 (--sapIndicationColor_5)</h3>
<div class="sap-color-indicationColor_5">TEXT</div>
<br>
<h3>tile_TextColor (--sapTile_TextColor)</h3>
<div class="sap-color-tile_TextColor">TEXT</div>
<br>
<h3>legendColor1 (--sapLegendColor1)</h3>
<div class="sap-color-legendColor1">TEXT</div>
<br>
<h3>legendColor10 (--sapLegendColor10)</h3>
<div class="sap-color-legendColor10">TEXT</div>
<br>
<h3>chart_OrderedColor_4 (--sapChart_OrderedColor_4)</h3>
<div class="sap-color-chart_OrderedColor_4">TEXT</div>
<br>
<h3>chart_OrderedColor_10 (--sapChart_OrderedColor_10)</h3>
<div class="sap-color-chart_OrderedColor_10">TEXT</div>
`,l=`<div class="demo">
    <h3>legendBackgroundColor1 (--sapLegendBackgroundColor1)</h3>
    <div class="sap-bg-color-legendBackgroundColor1"></div>
    <br>
    <h3>legendBackgroundColor2 (--sapLegendBackgroundColor2)</h3>
    <div class="sap-bg-color-legendBackgroundColor2"></div>
    <br>
    <h3>legendBackgroundColor5 (--sapLegendBackgroundColor5)</h3>
    <div class="sap-bg-color-legendBackgroundColor5"></div>
    <br>
    <h3>legendBackgroundColor6 (--sapLegendBackgroundColor6)</h3>
    <div class="sap-bg-color-legendBackgroundColor6"></div>
    <br>
    <h3>legendBackgroundColor8 (--sapLegendBackgroundColor8)</h3>
    <div class="sap-bg-color-legendBackgroundColor8"></div>
    <br>
    <h3>tile_Background (--sapTile_Background)</h3>
    <div class="sap-bg-color-tile_Background"></div>

    <br>
    <h3>pageHeader_Background (--sapPageHeader_Background)</h3>
    <div class="sap-bg-color-pageHeader_Background"></div>

    <br>
    <h3>progress_Value_NegativeBackground (--sapProgress_Value_NegativeBackground)</h3>
    <div class="sap-bg-color-progress_Value_NegativeBackground"></div>

    <br>
    <h3>button_Information_Background (--sapButton_Information_Background)</h3>
    <div class="sap-bg-color-button_Information_Background"></div>

    <br>
    <h3>button_Critical_Background (--sapButton_Critical_Background)</h3>
    <div class="sap-bg-color-button_Critical_Background"></div>

    <br>
    <h3>avatar_5_Background (--sapAvatar_5_Background)</h3>
    <div class="sap-bg-color-avatar_5_Background"></div>
</div>
`,d={title:"Colors/All Colors",parameters:{description:""}},a=`
<style>
    .demo div {
        display: flex;
        height: 4rem;
        width: 8rem;
    }
</style>
`,o=()=>`
${a}
${e}
`;o.parameters={docs:{description:{story:`To set the text color of an element use the class <code>.sap-color-<i style="color: red;">colorName</i></code>, where <i style="color: red;">colorName</i> is the base of the css variable from the SAP-theming package that represent the desired color. <br><br><b>SCSS Mixin:</b> <code>@include  sap-color(colorName)</code>
            `}}};const r=()=>`
${a}
${l}
`;r.parameters={docs:{description:{story:`To set the background color of an element use the class <code>.sap-bg-color-<i style="color: red;">colorName</i></code>, where <i style="color: red;">colorName</i> is the base of the css variable from the SAP-theming package that represent the desired color. <br><br><b>SCSS Mixin:</b><code>@include  sap-bg-color(colorName)</code>
            `}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"() => `\n${localStyles}\n${allTextColorExampleHtml}\n`",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"() => `\n${localStyles}\n${allBackgroundColorExampleHtml}\n`",...r.parameters?.docs?.source}}};const s=["AllTextColor","AllBackgroundColor"];export{r as AllBackgroundColor,o as AllTextColor,s as __namedExportsOrder,d as default};
