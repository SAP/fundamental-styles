const s=`
<span>Header Text in Size 3: </span><span class="sap-font-header-3">Used in dynamic page header, object page header</span><br><br><br><br>
<span>Standard Text: </span><span class="sap-font-standard-text">Used in text control</span><br><br><br><br>
<span>Small Detail Text: </span><span class="sap-font-small-detail-text">Used in time stamps, small bylines</span><br><br><br><br>
<span>Standard Field Text: </span><span class="sap-font-standard-field-text">Used in input field, feed input, text area</span><br><br><br><br>
<span>Labels: </span><span class="sap-font-label">Used in labels</span><br><br><br><br>
<span>Descriptions: </span><span class="sap-font-description">Used in object attribute</span><br><br><br><br>
`,n=`
<span>Normal: </span><p class="sap-font-line-height" style="background: cyan;">Line Height</p><br><br>
<span>1.5: </span><p class="sap-font-line-height-long" style="background: cyan;">Line Height</p><br><br>
`,l=`
<span>Header-6: </span><span class="sap-font-size-header-6">Font Size</span><br><br>
<span>Header-5: </span><span class="sap-font-size-header-5">Font Size</span><br><br>
<span>Header-4: </span><span class="sap-font-size-header-4">Font Size</span><br><br>
<span>Header-3: </span><span class="sap-font-size-header-3">Font Size</span><br><br>
<span>Header-2: </span><span class="sap-font-size-header-2">Font Size</span><br><br>
<span>Header-1: </span><span class="sap-font-size-header-1">Font Size</span><br><br>
<span>Small: </span><span class="sap-font-size-small">Font Size</span><br><br>
<span>Medium: </span><span class="sap-font-size-medium">Font Size</span><br><br>
<span>Large: </span><span class="sap-font-size-large">Font Size</span><br><br>
`,i=`
<span>Regular: </span><span class="sap-font-family-regular">Font Family</span><br><br>
<span>Light: </span><span class="sap-font-family-light">Font Family</span><br><br>
<span>Bold: </span><span class="sap-font-family-bold">Font Family</span><br><br>
<span>Semibold: </span><span class="sap-font-family-semibold">Font Family</span><br><br>
<span>Semibold Duplex: </span><span class="sap-font-family-semibold-duplex">Font Family</span><br><br>
<span>Monospaced Regular: </span><span class="sap-font-family-monospaced-regular">Font Family</span><br><br>
<span>Monospaced Bold: </span><span class="sap-font-family-monospaced-bold">Font Family</span><br><br>
<span>Black: </span><span class="sap-font-family-black">Font Family</span><br><br>
<span>Header: </span><span class="sap-font-family-header">Font Family</span><br><br>
`,r={title:"Typography",parameters:{description:`
      `}},e=()=>i;e.parameters={docs:{description:{story:`To set the <b>font-family</b> of an element use the <code>.sap-font-family-<i style="color: red;">type</i></code>class or the <code>@include sap-font-family(<i style="color: red;">type</i>)</code> mixin <br>
where <i style="color: red;">type</i> can be one of the following:
<ul>
<li>regular</li>
<li>light</li>
<li>bold</li>
<li>semibold</li>
<li>semibold-duplex</li>
<li>monospaced-regular</li>
<li>monospaced-bold</li>
<li>black</li>
<li>header</li>
</ul>
      
      

<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tr>
        <th style="padding: 0.25rem;">Type</th>
        <th style="padding: 0.25rem;">Variable</th>
        <th style="padding: 0.25rem;">Resultant Style</th>
        <th style="padding: 0.25rem;">Class</th>
        <th style="padding: 0.25rem;">Mixin</th>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Regular</td>
        <td style="padding: 0.25rem;"><code>var(--sapFontFamily)</code></td>
        <td style="padding: 0.25rem;">font-family: "72", "72full", Arial, Helvetica, sans-serif;</td>
        <td style="padding: 0.25rem;"><code>.sap-font-family-regular</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-font-family(regular)</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Light</td>
        <td style="padding: 0.25rem;"><code>var(--sapFontLightFamily)</code></td>
        <td style="padding: 0.25rem;">font-family: "72-Light" , "72-Lightfull" , "72" , "72full" , Arial, Helvetica, sans-serif;</td>
        <td style="padding: 0.25rem;"><code>.sap-font-family-light</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-font-family(light)</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Bold</td>
        <td style="padding: 0.25rem;"><code>var(--sapFontBoldFamily)</code></td>
        <td style="padding: 0.25rem;">font-family: "72-Bold" , "72-Boldfull" , "72" , "72full" , Arial, Helvetica, sans-serif;</td>
        <td style="padding: 0.25rem;"><code>.sap-font-family-bold</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-font-family(bold)</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Semibold</td>
        <td style="padding: 0.25rem;"><code>var(--sapFontSemiboldFamily)</code></td>
        <td style="padding: 0.25rem;">font-family: "72-Semibold", "72-Semiboldfull", "72", "72full", Arial, Helvetica, sans-serif;</td>
        <td style="padding: 0.25rem;"><code>.sap-font-family-semibold</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-font-family(semibold)</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Semibold Duplex</td>
        <td style="padding: 0.25rem;"><code>var(--sapFontSemiboldDuplexFamily)</code></td>
        <td style="padding: 0.25rem;">font-family: "72-SemiboldDuplex", "72-SemiboldDuplexfull", "72", "72full", Arial, Helvetica, sans-serif</td>
        <td style="padding: 0.25rem;"><code>.sap-font-family-semibold-duplex</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-font-family(semibold-duplex)</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Monospaced Regular</td>
        <td style="padding: 0.25rem;"><code>var(--sapContent_MonospaceFontFamily)</code></td>
        <td style="padding: 0.25rem;">font-family: "72Mono", "72Monofull", Lucida Console, monospace;</td>
        <td style="padding: 0.25rem;"><code>.sap-font-family-monospaced-regular</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-font-family(monospaced-regular)</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Monospaced Bold</td>
        <td style="padding: 0.25rem;"><code>var(--sapContent_MonospaceBoldFontFamily)</code></td>
        <td style="padding: 0.25rem;">font-family: "72Mono-Bold", "72Mono-Boldfull", Lucida Console, monospace;</td>
        <td style="padding: 0.25rem;"><code>.sap-font-family-monospaced-bold</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-font-family(monospaced-bold)</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Black</td>
        <td style="padding: 0.25rem;"><code>var(--sapFontBlackFamily)</code></td>
        <td style="padding: 0.25rem;">font-family: "72Black", "72", "72full", Arial, Helvetica, sans-serif</td>
        <td style="padding: 0.25rem;"><code>.sap-font-family-black</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-font-family(black)</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Header</td>
         <td style="padding: 0.25rem;"><code>var(--sapFontHeaderFamily)</code></td>
        <td style="padding: 0.25rem;">font-family: "72", "72full", Arial, Helvetica, sans-serif;</td>
        <td style="padding: 0.25rem;"><code>.sap-font-family-header</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-font-family(header)</code></td>
    </tr>
</table>`}}};const d=()=>l;d.parameters={docs:{description:{story:`To set the <b>font-size</b> of an element use the <code>.sap-font-size-<i style="color: red;">value</i></code>class or the <code>@include sap-font-size(<i style="color: red;">value</i>)</code> mixin <br>where <i style="color: red;">value</i> can be one of the following:
<ul>
<li>header-6</li>
<li>header-5</li>
<li>header-4</li>
<li>header-3</li>
<li>header-2</li>
<li>header-1</li>
<li>small</li>
<li>medium</li>
<li>large</li>
</ul>
      
<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tr>
        <th style="padding: 0.25rem;">Type</th>
        <th style="padding: 0.25rem;">Variable</th>
        <th style="padding: 0.25rem;">Resultant Style</th>
        <th style="padding: 0.25rem;">Class</th>
        <th style="padding: 0.25rem;">Mixin</th>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Header 6</td>
        <td style="padding: 0.25rem;"><code>var(--sapFontHeader6Size)</code></td>
        <td style="padding: 0.25rem;">font-size: 0.875rem; (14px)</td>
        <td style="padding: 0.25rem;"><code>.sap-font-size-header-6</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-font-size(header-6)</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Header 5</td>
        <td style="padding: 0.25rem;"><code>var(--sapFontHeader5Size)</code></td>
        <td style="padding: 0.25rem;">font-size: 1rem; (16px)</td>
        <td style="padding: 0.25rem;"><code>.sap-font-size-header-5</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-font-size(header-5)</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Header 4</td>
        <td style="padding: 0.25rem;"><code>var(--sapFontHeader4Size)</code></td>
        <td style="padding: 0.25rem;">font-size: 1.125rem; (18px)</td>
        <td style="padding: 0.25rem;"><code>.sap-font-size-header-4</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-font-size(header-4)</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Header 3</td>
        <td style="padding: 0.25rem;"><code>var(--sapFontHeader3Size)</code></td>
        <td style="padding: 0.25rem;">font-size: 1.25rem; (20px)</td>
        <td style="padding: 0.25rem;"><code>.sap-font-size-header-3</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-font-size(header-3)</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Header 2</td>
        <td style="padding: 0.25rem;"><code>var(--sapFontHeader2Size)</code></td>
        <td style="padding: 0.25rem;">font-size: 1.5rem; (24px)</td>
        <td style="padding: 0.25rem;"><code>.sap-font-size-header-2</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-font-size(header-2)</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Header 1</td>
        <td style="padding: 0.25rem;"><code>var(--sapFontHeader1Size)</code></td>
        <td style="padding: 0.25rem;">font-size: 2.25rem; (36px)</td>
        <td style="padding: 0.25rem;"><code>.sap-font-size-header-1</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-font-size(header-1)</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Small</td>
        <td style="padding: 0.25rem;"><code>var(--sapFontSmallSize)</code></td>
        <td style="padding: 0.25rem;">font-size: 0.75rem; (12px)</td>
        <td style="padding: 0.25rem;"><code>.sap-font-size-small</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-font-size(small)</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Medium</td>
        <td style="padding: 0.25rem;"><code>var(--sapFontSize)</code></td>
        <td style="padding: 0.25rem;">font-size: 0.875rem; (14px)</td>
        <td style="padding: 0.25rem;"><code>.sap-font-size-medium</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-font-size(medium)</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Large</td>
        <td style="padding: 0.25rem;"><code>var(--sapFontLargeSize)</code></td>
        <td style="padding: 0.25rem;">font-size: 1rem; (16px)</td>
        <td style="padding: 0.25rem;"><code>.sap-font-size-large</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-font-size(large)</code></td>
    </tr>
</table>`}}};const t=()=>n;t.parameters={docs:{description:{story:`In general, there is no line height applied to text, as the line height e.g. affects the padding.
If a more generous line height is required for long continuous text, a consistent line height of 1.5 is recommended.

Use the <code>.sap-font-line-height</code> class to apply <b>normal</b> line-height to the elements and <code>.sap-font-line-height-long</code> class for <b>1.5</b> line-height. 
<br><br>
<b>SCSS Mixin: </b> <code>@include sap-font-line-height(<i style="color:red;">$value</i>)</code>. Omit the value for <b>normal</b> line-height: <code>@include sap-font-line-height()</code>.
`}}};const a=()=>s;a.parameters={docs:{description:{story:`<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
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
        <td style="padding: 0.25rem;"><code>.sap-font-header-3</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-font(header-3)</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Standard Text</td>
        <td style="padding: 0.25rem;">font-family: "72", "72full", Arial, Helvetica, sans-serif;
         font-size: 14px; color: #32363a;</td>
        <td style="padding: 0.25rem;">Text control</td>
        <td style="padding: 0.25rem;"><code>.sap-font-standard-text</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-font(standard-text)</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Small Detail Text</td>
        <td style="padding: 0.25rem;">font-family: "72", "72full", Arial, Helvetica, sans-serif;
         font-size: 12px; color: #6a6d70;</td>
        <td style="padding: 0.25rem;">Time stamps, small bylines</td>
        <td style="padding: 0.25rem;"><code>.sap-font-small-detail-text</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-font(small-detail-text)</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Standard Field Text</td>
        <td style="padding: 0.25rem;">font-family: "72", "72full", Arial, Helvetica, sans-serif;
         font-size: 14px; color: #32363a;</td>
        <td style="padding: 0.25rem;">Input field, feed input, text area</td>
        <td style="padding: 0.25rem;"><code>.sap-font-standard-field-text</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-font(standard-field-text)</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Labels</td>
        <td style="padding: 0.25rem;">font-family: "72", "72full", Arial, Helvetica, sans-serif;
         font-size: 14px; color: #6a6d70;</td>
        <td style="padding: 0.25rem;">Labels</td>
        <td style="padding: 0.25rem;"><code>.sap-font-label</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-font(label)</code></td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Descriptions</td>
        <td style="padding: 0.25rem;">font-family: "72", "72full", Arial, Helvetica, sans-serif;
         font-size: 14px; color: #6a6d70;</td>
        <td style="padding: 0.25rem;">Object attribute</td>
        <td style="padding: 0.25rem;"><code>.sap-font-description</code></td>
        <td style="padding: 0.25rem;"><code>@include sap-font(description)</code></td>
    </tr>
</table>`}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => fontFamilyExampleHtml",...e.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"() => fontSizeExampleHtml",...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => lineHeightExampleHtml",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => commonCasesExampleHtml",...a.parameters?.docs?.source}}};const o=["FontFamily","FontSize","LineHeight","CommonCases"];export{a as CommonCases,e as FontFamily,d as FontSize,t as LineHeight,o as __namedExportsOrder,r as default};
