/* empty css                   */const a=`<style>
    .color-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
    }
    .color-item {
        background: #fff;
        border: 0.0625rem solid #e4e4e4;
        border-radius: 0.5rem;
        padding: 1rem;
        text-align: center;
    }
    .color-sample {
        font-size: 1.5rem;
        font-weight: 600;
        padding: 1rem;
        background: #f7f8fa;
        border-radius: 0.25rem;
        margin-bottom: 0.75rem;
    }
    .color-label {
        font-size: 0.8125rem;
        font-weight: 600;
        color: #32363a;
        margin-bottom: 0.25rem;
    }
    .color-var {
        font-size: 0.6875rem;
        font-family: 'Courier New', monospace;
        color: #6a6d70;
    }
</style>

<div class="color-grid">
    <div class="color-item">
        <div class="color-sample sap-color-indicationColor_1">TEXT</div>
        <div class="color-label">indicationColor_1</div>
        <div class="color-var">--sapIndicationColor_1</div>
    </div>
    <div class="color-item">
        <div class="color-sample sap-color-indicationColor_2">TEXT</div>
        <div class="color-label">indicationColor_2</div>
        <div class="color-var">--sapIndicationColor_2</div>
    </div>
    <div class="color-item">
        <div class="color-sample sap-color-indicationColor_3">TEXT</div>
        <div class="color-label">indicationColor_3</div>
        <div class="color-var">--sapIndicationColor_3</div>
    </div>
    <div class="color-item">
        <div class="color-sample sap-color-indicationColor_4">TEXT</div>
        <div class="color-label">indicationColor_4</div>
        <div class="color-var">--sapIndicationColor_4</div>
    </div>
    <div class="color-item">
        <div class="color-sample sap-color-indicationColor_5">TEXT</div>
        <div class="color-label">indicationColor_5</div>
        <div class="color-var">--sapIndicationColor_5</div>
    </div>
    <div class="color-item">
        <div class="color-sample sap-color-tile_TextColor">TEXT</div>
        <div class="color-label">tile_TextColor</div>
        <div class="color-var">--sapTile_TextColor</div>
    </div>
    <div class="color-item">
        <div class="color-sample sap-color-legendColor1">TEXT</div>
        <div class="color-label">legendColor1</div>
        <div class="color-var">--sapLegendColor1</div>
    </div>
    <div class="color-item">
        <div class="color-sample sap-color-legendColor10">TEXT</div>
        <div class="color-label">legendColor10</div>
        <div class="color-var">--sapLegendColor10</div>
    </div>
    <div class="color-item">
        <div class="color-sample sap-color-chart_OrderedColor_4">TEXT</div>
        <div class="color-label">chart_OrderedColor_4</div>
        <div class="color-var">--sapChart_OrderedColor_4</div>
    </div>
    <div class="color-item">
        <div class="color-sample sap-color-chart_OrderedColor_10">TEXT</div>
        <div class="color-label">chart_OrderedColor_10</div>
        <div class="color-var">--sapChart_OrderedColor_10</div>
    </div>
</div>
`,c=`<style>
    .color-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
    }
    .color-item {
        background: #fff;
        border: 0.0625rem solid #e4e4e4;
        border-radius: 0.5rem;
        padding: 1rem;
        text-align: center;
    }
    .color-bg-swatch {
        height: 80px;
        border-radius: 0.25rem;
        margin-bottom: 0.75rem;
        border: 0.0625rem solid rgba(0, 0, 0, 0.1);
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    }
    .color-label {
        font-size: 0.8125rem;
        font-weight: 600;
        color: #32363a;
        margin-bottom: 0.25rem;
    }
    .color-var {
        font-size: 0.6875rem;
        font-family: 'Courier New', monospace;
        color: #6a6d70;
    }
</style>

<div class="color-grid">
    <div class="color-item">
        <div class="color-bg-swatch sap-bg-color-legendBackgroundColor1"></div>
        <div class="color-label">legendBackgroundColor1</div>
        <div class="color-var">--sapLegendBackgroundColor1</div>
    </div>
    <div class="color-item">
        <div class="color-bg-swatch sap-bg-color-legendBackgroundColor2"></div>
        <div class="color-label">legendBackgroundColor2</div>
        <div class="color-var">--sapLegendBackgroundColor2</div>
    </div>
    <div class="color-item">
        <div class="color-bg-swatch sap-bg-color-legendBackgroundColor5"></div>
        <div class="color-label">legendBackgroundColor5</div>
        <div class="color-var">--sapLegendBackgroundColor5</div>
    </div>
    <div class="color-item">
        <div class="color-bg-swatch sap-bg-color-legendBackgroundColor6"></div>
        <div class="color-label">legendBackgroundColor6</div>
        <div class="color-var">--sapLegendBackgroundColor6</div>
    </div>
    <div class="color-item">
        <div class="color-bg-swatch sap-bg-color-legendBackgroundColor8"></div>
        <div class="color-label">legendBackgroundColor8</div>
        <div class="color-var">--sapLegendBackgroundColor8</div>
    </div>
    <div class="color-item">
        <div class="color-bg-swatch sap-bg-color-tile_Background"></div>
        <div class="color-label">tile_Background</div>
        <div class="color-var">--sapTile_Background</div>
    </div>
    <div class="color-item">
        <div class="color-bg-swatch sap-bg-color-pageHeader_Background"></div>
        <div class="color-label">pageHeader_Background</div>
        <div class="color-var">--sapPageHeader_Background</div>
    </div>
    <div class="color-item">
        <div class="color-bg-swatch sap-bg-color-progress_Value_NegativeBackground"></div>
        <div class="color-label">progress_Value_NegativeBackground</div>
        <div class="color-var">--sapProgress_Value_NegativeBackground</div>
    </div>
    <div class="color-item">
        <div class="color-bg-swatch sap-bg-color-button_Information_Background"></div>
        <div class="color-label">button_Information_Background</div>
        <div class="color-var">--sapButton_Information_Background</div>
    </div>
    <div class="color-item">
        <div class="color-bg-swatch sap-bg-color-button_Critical_Background"></div>
        <div class="color-label">button_Critical_Background</div>
        <div class="color-var">--sapButton_Critical_Background</div>
    </div>
    <div class="color-item">
        <div class="color-bg-swatch sap-bg-color-avatar_5_Background"></div>
        <div class="color-label">avatar_5_Background</div>
        <div class="color-var">--sapAvatar_5_Background</div>
    </div>
</div>
`,n={title:"Colors/All Colors",parameters:{description:""}},r=`
<style>
    .demo div {
        display: flex;
        height: 4rem;
        width: 8rem;
    }
</style>
`,o=()=>`
${r}
${a}
`;o.parameters={docs:{description:{story:`To set the text color of an element use the class <code>.sap-color-<i style="color: red;">colorName</i></code>, where <i style="color: red;">colorName</i> is the base of the css variable from the SAP-theming package that represent the desired color. <br><br><b>SCSS Mixin:</b> <code>@include  sap-color(colorName)</code>
            `}}};const l=()=>`
${r}
${c}
`;l.parameters={docs:{description:{story:`To set the background color of an element use the class <code>.sap-bg-color-<i style="color: red;">colorName</i></code>, where <i style="color: red;">colorName</i> is the base of the css variable from the SAP-theming package that represent the desired color. <br><br><b>SCSS Mixin:</b><code>@include  sap-bg-color(colorName)</code>
            `}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"() => `\n${localStyles}\n${allTextColorExampleHtml}\n`",...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"() => `\n${localStyles}\n${allBackgroundColorExampleHtml}\n`",...l.parameters?.docs?.source}}};const i=["AllTextColor","AllBackgroundColor"];export{l as AllBackgroundColor,o as AllTextColor,i as __namedExportsOrder,n as default};
