const c=`<style>
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
    .section-title {
        font-size: 1rem;
        font-weight: 600;
        color: #0a6ed1;
        margin: 2rem 0 1rem 0;
        padding-bottom: 0.5rem;
        border-bottom: 0.0625rem solid #eaecee;
    }
    .section-title:first-child {
        margin-top: 0;
    }
</style>

<h3 class="section-title">Brand & Base Colors</h3>
<div class="color-grid">
    <div class="color-item">
        <div class="color-sample sap-color-brandColor">TEXT</div>
        <div class="color-label">brandColor</div>
        <div class="color-var">--sapBrandColor</div>
    </div>
    <div class="color-item">
        <div class="color-sample sap-color-textColor">TEXT</div>
        <div class="color-label">textColor</div>
        <div class="color-var">--sapTextColor</div>
    </div>
    <div class="color-item">
        <div class="color-sample sap-color-neutralColor">TEXT</div>
        <div class="color-label">neutralColor</div>
        <div class="color-var">--sapNeutralColor</div>
    </div>
</div>

<h3 class="section-title">Semantic Colors</h3>
<div class="color-grid">
    <div class="color-item">
        <div class="color-sample sap-color-negativeColor">TEXT</div>
        <div class="color-label">negativeColor</div>
        <div class="color-var">--sapNegativeColor</div>
    </div>
    <div class="color-item">
        <div class="color-sample sap-color-criticalColor">TEXT</div>
        <div class="color-label">criticalColor</div>
        <div class="color-var">--sapCriticalColor</div>
    </div>
    <div class="color-item">
        <div class="color-sample sap-color-positiveColor">TEXT</div>
        <div class="color-label">positiveColor</div>
        <div class="color-var">--sapPositiveColor</div>
    </div>
    <div class="color-item">
        <div class="color-sample sap-color-informativeColor">TEXT</div>
        <div class="color-label">informativeColor</div>
        <div class="color-var">--sapInformativeColor</div>
    </div>
</div>

<h3 class="section-title">Semantic Text Colors</h3>
<div class="color-grid">
    <div class="color-item">
        <div class="color-sample sap-color-positiveTextColor">TEXT</div>
        <div class="color-label">positiveTextColor</div>
        <div class="color-var">--sapPositiveTextColor</div>
    </div>
    <div class="color-item">
        <div class="color-sample sap-color-criticalTextColor">TEXT</div>
        <div class="color-label">criticalTextColor</div>
        <div class="color-var">--sapCriticalTextColor</div>
    </div>
    <div class="color-item">
        <div class="color-sample sap-color-negativeTextColor">TEXT</div>
        <div class="color-label">negativeTextColor</div>
        <div class="color-var">--sapNegativeTextColor</div>
    </div>
    <div class="color-item">
        <div class="color-sample sap-color-informativeTextColor">TEXT</div>
        <div class="color-label">informativeTextColor</div>
        <div class="color-var">--sapInformativeTextColor</div>
    </div>
    <div class="color-item">
        <div class="color-sample sap-color-neutralTextColor">TEXT</div>
        <div class="color-label">neutralTextColor</div>
        <div class="color-var">--sapNeutralTextColor</div>
    </div>
</div>

<h3 class="section-title">Accent Colors</h3>
<div class="color-grid">
    <div class="color-item">
        <div class="color-sample sap-color-accentColor1">TEXT</div>
        <div class="color-label">accentColor1</div>
        <div class="color-var">--sapAccentColor1</div>
    </div>
    <div class="color-item">
        <div class="color-sample sap-color-accentColor2">TEXT</div>
        <div class="color-label">accentColor2</div>
        <div class="color-var">--sapAccentColor2</div>
    </div>
    <div class="color-item">
        <div class="color-sample sap-color-accentColor3">TEXT</div>
        <div class="color-label">accentColor3</div>
        <div class="color-var">--sapAccentColor3</div>
    </div>
    <div class="color-item">
        <div class="color-sample sap-color-accentColor4">TEXT</div>
        <div class="color-label">accentColor4</div>
        <div class="color-var">--sapAccentColor4</div>
    </div>
    <div class="color-item">
        <div class="color-sample sap-color-accentColor5">TEXT</div>
        <div class="color-label">accentColor5</div>
        <div class="color-var">--sapAccentColor5</div>
    </div>
    <div class="color-item">
        <div class="color-sample sap-color-accentColor6">TEXT</div>
        <div class="color-label">accentColor6</div>
        <div class="color-var">--sapAccentColor6</div>
    </div>
    <div class="color-item">
        <div class="color-sample sap-color-accentColor7">TEXT</div>
        <div class="color-label">accentColor7</div>
        <div class="color-var">--sapAccentColor7</div>
    </div>
    <div class="color-item">
        <div class="color-sample sap-color-accentColor8">TEXT</div>
        <div class="color-label">accentColor8</div>
        <div class="color-var">--sapAccentColor8</div>
    </div>
    <div class="color-item">
        <div class="color-sample sap-color-accentColor9">TEXT</div>
        <div class="color-label">accentColor9</div>
        <div class="color-var">--sapAccentColor9</div>
    </div>
    <div class="color-item">
        <div class="color-sample sap-color-accentColor10">TEXT</div>
        <div class="color-label">accentColor10</div>
        <div class="color-var">--sapAccentColor10</div>
    </div>
</div>
`,a=`<style>
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
    .section-title {
        font-size: 1rem;
        font-weight: 600;
        color: #0a6ed1;
        margin: 2rem 0 1rem 0;
        padding-bottom: 0.5rem;
        border-bottom: 0.0625rem solid #eaecee;
    }
    .section-title:first-child {
        margin-top: 0;
    }
</style>

<h3 class="section-title">Base Background</h3>
<div class="color-grid">
    <div class="color-item">
        <div class="color-bg-swatch sap-bg-color-backgroundColor"></div>
        <div class="color-label">backgroundColor</div>
        <div class="color-var">--sapBackgroundColor</div>
    </div>
</div>

<h3 class="section-title">Semantic Backgrounds</h3>
<div class="color-grid">
    <div class="color-item">
        <div class="color-bg-swatch sap-bg-color-errorBackground"></div>
        <div class="color-label">errorBackground</div>
        <div class="color-var">--sapErrorBackground</div>
    </div>
    <div class="color-item">
        <div class="color-bg-swatch sap-bg-color-warningBackground"></div>
        <div class="color-label">warningBackground</div>
        <div class="color-var">--sapWarningBackground</div>
    </div>
    <div class="color-item">
        <div class="color-bg-swatch sap-bg-color-successBackground"></div>
        <div class="color-label">successBackground</div>
        <div class="color-var">--sapSuccessBackground</div>
    </div>
    <div class="color-item">
        <div class="color-bg-swatch sap-bg-color-informationBackground"></div>
        <div class="color-label">informationBackground</div>
        <div class="color-var">--sapInformationBackground</div>
    </div>
    <div class="color-item">
        <div class="color-bg-swatch sap-bg-color-neutralBackground"></div>
        <div class="color-label">neutralBackground</div>
        <div class="color-var">--sapNeutralBackground</div>
    </div>
</div>

<h3 class="section-title">Accent Backgrounds</h3>
<div class="color-grid">
    <div class="color-item">
        <div class="color-bg-swatch sap-bg-color-accentBackgroundColor1"></div>
        <div class="color-label">accentBackgroundColor1</div>
        <div class="color-var">--sapAccentBackgroundColor1</div>
    </div>
    <div class="color-item">
        <div class="color-bg-swatch sap-bg-color-accentBackgroundColor2"></div>
        <div class="color-label">accentBackgroundColor2</div>
        <div class="color-var">--sapAccentBackgroundColor2</div>
    </div>
    <div class="color-item">
        <div class="color-bg-swatch sap-bg-color-accentBackgroundColor3"></div>
        <div class="color-label">accentBackgroundColor3</div>
        <div class="color-var">--sapAccentBackgroundColor3</div>
    </div>
    <div class="color-item">
        <div class="color-bg-swatch sap-bg-color-accentBackgroundColor4"></div>
        <div class="color-label">accentBackgroundColor4</div>
        <div class="color-var">--sapAccentBackgroundColor4</div>
    </div>
    <div class="color-item">
        <div class="color-bg-swatch sap-bg-color-accentBackgroundColor5"></div>
        <div class="color-label">accentBackgroundColor5</div>
        <div class="color-var">--sapAccentBackgroundColor5</div>
    </div>
    <div class="color-item">
        <div class="color-bg-swatch sap-bg-color-accentBackgroundColor6"></div>
        <div class="color-label">accentBackgroundColor6</div>
        <div class="color-var">--sapAccentBackgroundColor6</div>
    </div>
    <div class="color-item">
        <div class="color-bg-swatch sap-bg-color-accentBackgroundColor7"></div>
        <div class="color-label">accentBackgroundColor7</div>
        <div class="color-var">--sapAccentBackgroundColor7</div>
    </div>
    <div class="color-item">
        <div class="color-bg-swatch sap-bg-color-accentBackgroundColor8"></div>
        <div class="color-label">accentBackgroundColor8</div>
        <div class="color-var">--sapAccentBackgroundColor8</div>
    </div>
    <div class="color-item">
        <div class="color-bg-swatch sap-bg-color-accentBackgroundColor9"></div>
        <div class="color-label">accentBackgroundColor9</div>
        <div class="color-var">--sapAccentBackgroundColor9</div>
    </div>
    <div class="color-item">
        <div class="color-bg-swatch sap-bg-color-accentBackgroundColor10"></div>
        <div class="color-label">accentBackgroundColor10</div>
        <div class="color-var">--sapAccentBackgroundColor10</div>
    </div>
</div>
`,i={title:"Colors/Main Colors",parameters:{description:""}},r=`
<style>
    .demo div {
        display: flex;
        height: 4rem;
        width: 8rem;
    }
</style>
`,o=()=>`
${r}
${c}
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
</div>`}}};const l=()=>`
${r}
${a}
`;l.parameters={docs:{description:{story:`<style>
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
</div>`}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"() => `\n${localStyles}\n${mainTextColorExampleHtml}\n`",...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"() => `\n${localStyles}\n${mainBackgroundColorExampleHtml}\n`",...l.parameters?.docs?.source}}};const s=["MainTextColor","MainBackgroundColor"];export{l as MainBackgroundColor,o as MainTextColor,s as __namedExportsOrder,i as default};
