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
</div>`,c={title:"Colors/Main Colors",parameters:{description:""}},e=`
<style>
    .demo div {
        display: flex;
        height: 4rem;
        width: 8rem;
    }
</style>
`,o=()=>`
${e}
${n}
`;o.parameters={docs:{description:{story:`<style>
.color-mixin-example {
    background: #f7f8fa;
    border: 0.0625rem solid #eaecee;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-block: 1rem;
}
.color-mixin-example h4 {
    margin: 0 0 0.75rem 0;
    color: #0a6ed1;
    font-size: 1rem;
    font-weight: 600;
}
.color-mixin-example p {
    font-size: 0.875rem;
    color: #6a6d70;
    margin: 0 0 0.75rem 0;
}
.color-mixin-example pre {
    background: #fff;
    border: 0.0625rem solid #e4e4e4;
    border-radius: 0.25rem;
    padding: 0.75rem 1rem;
    margin: 0.5rem 0 0 0;
    font-size: 0.875rem;
    font-family: 'Courier New', Courier, monospace;
    color: #32363a;
    overflow-x: auto;
}
.color-mixin-example code {
    background: #fff;
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    font-size: 0.8125rem;
    border: 0.0625rem solid #e4e4e4;
}
</style>

<div class="color-mixin-example">
    <h4>CSS Class</h4>
    <p>To set the text color of an element use the class <code>.sap-color-<i style="color: #d93025;">colorName</i></code></p>
    <p>Where <code><i style="color: #d93025;">colorName</i></code> is the base of the CSS variable from SAP theming (e.g., <code>brandColor</code>, <code>textColor</code>, <code>negativeColor</code>)</p>
</div>

<div class="color-mixin-example">
    <h4>SCSS Mixin</h4>
    <p>Apply text color using the mixin:</p>
    <pre>@include sap-color(<i style="color: #d93025;">colorName</i>);</pre>
    <p style="margin-top: 0.75rem;"><strong>Example:</strong></p>
    <pre>.my-element {
        @include sap-color(brandColor);
}</pre>
</div>`}}};const r=()=>`
${e}
${a}
`;r.parameters={docs:{description:{story:`<style>
.color-mixin-example {
    background: #f7f8fa;
    border: 0.0625rem solid #eaecee;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-block: 1rem;
}
.color-mixin-example h4 {
    margin: 0 0 0.75rem 0;
    color: #0a6ed1;
    font-size: 1rem;
    font-weight: 600;
}
.color-mixin-example p {
    font-size: 0.875rem;
    color: #6a6d70;
    margin: 0 0 0.75rem 0;
}
.color-mixin-example pre {
    background: #fff;
    border: 0.0625rem solid #e4e4e4;
    border-radius: 0.25rem;
    padding: 0.75rem 1rem;
    margin: 0.5rem 0 0 0;
    font-size: 0.875rem;
    font-family: 'Courier New', Courier, monospace;
    color: #32363a;
    overflow-x: auto;
}
.color-mixin-example code {
    background: #fff;
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    font-size: 0.8125rem;
    border: 0.0625rem solid #e4e4e4;
}
</style>

<div class="color-mixin-example">
    <h4>CSS Class</h4>
    <p>To set the background color of an element use the class <code>.sap-bg-color-<i style="color: #d93025;">colorName</i></code></p>
    <p>Where <code><i style="color: #d93025;">colorName</i></code> is the base of the CSS variable from SAP theming (e.g., <code>brandColor</code>, <code>backgroundColor</code>, <code>negativeColor</code>)</p>
</div>

<div class="color-mixin-example">
    <h4>SCSS Mixin</h4>
    <p>Apply background color using the mixin:</p>
    <pre>@include sap-bg-color(<i style="color: #d93025;">colorName</i>);</pre>
    <p style="margin-top: 0.75rem;"><strong>Example:</strong></p>
    <pre>.my-element {
        @include sap-bg-color(brandColor);
}</pre>
</div>`}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"() => `\n${localStyles}\n${mainTextColorExampleHtml}\n`",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"() => `\n${localStyles}\n${mainBackgroundColorExampleHtml}\n`",...r.parameters?.docs?.source}}};const l=["MainTextColor","MainBackgroundColor"];export{r as MainBackgroundColor,o as MainTextColor,l as __namedExportsOrder,c as default};
