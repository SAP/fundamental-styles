/* empty css             */const o=`The display property of an element specifies its display behaviour. For more information prease refer to the
<a href="https://www.w3schools.com/cssref/pr_class_display.asp"> W3Schools documentation</a>.
<br><br>
<b>CSS Class: </b>
<code>.sap-display-<i style="color: red;">type</i></code><br><br>
<b>SCSS Mixin: </b>
<code>@include sap-display(<i style="color: red;">type</i>);</code><br><br>
where <code style="color: red;">type</code> can be one of the following:  <br>
<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tbody>
    <tr>
        <td style="padding: 0.25rem;">inline</td>
        <td style="padding: 0.25rem;">inline-block</td>
        <td style="padding: 0.25rem;">inline-flex</td>
        <td style="padding: 0.25rem;">inline-grid</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">flex</td>
        <td style="padding: 0.25rem;">grid</td>
        <td style="padding: 0.25rem;">block</td>
        <td style="padding: 0.25rem;">none</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">contents</td>
        <td style="padding: 0.25rem;">list-item</td>
        <td style="padding: 0.25rem;">initial</td>
        <td style="padding: 0.25rem;">inherit</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">table</td>
        <td style="padding: 0.25rem;">inline-table</td>
        <td style="padding: 0.25rem;">table-row</td>
        <td style="padding: 0.25rem;">table-row-group</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">table-column</td>
        <td style="padding: 0.25rem;">table-column-group</td>
        <td style="padding: 0.25rem;">table-cell</td>
        <td style="padding: 0.25rem;">table-caption</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">table-header-group</td>
        <td style="padding: 0.25rem;">table-footer-group</td>
        <td style="padding: 0.25rem;">run-in</td>
    </tr>
    </tbody>
</table>
`,c=`
<h4>Display Flex</h4>
<div class="sap-docs-container">
    <section class="sap-display-flex">
        <div></div>
        <div></div>
        <div></div>
    </section>
</div>

<h4>Display Grid</h4>
<div class="sap-docs-container">
    <section class="sap-display-grid">
        <div></div>
        <div></div>
        <div></div>
    </section>
</div>

<h4>Display Inline-Block</h4>
<div class="sap-docs-container">
    <section>
        <div class="sap-display-inline-block"></div>
        <div class="sap-display-inline-block"></div>
        <div class="sap-display-inline-block"></div>
    </section>
</div>
`,p=`
<a href="#">
    <span class="sap-icon sap-icon--account"></span>
    <span class="sap-sr-only">User Account</span>
</a>
`,m={title:"Display",parameters:{description:o}},l=`
<style>
    .sap-docs-container section{
        background: #E2EEFF;
        min-height: 8rem;
        padding: 1rem;
    }
    .sap-docs-container div {
        background: #69ADF8;
        width: 4rem;
        min-height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.5rem;
        color: #fff;
        margin: 0.1rem;
    }
</style>
`,e=()=>`${l}${c}`;e.storyName="Display";e.parameters={docs:{description:{story:`
        `}}};const n=()=>`${l}${p}`;n.storyName="Screen-reader-only elements";n.parameters={docs:{description:{story:`The <code>.sap-sr-only</code> class will hide the element visually without hiding it from screen readers. <br><br>
            <b>SCSS Mixin: </b>
            <code>@include sap-sr-only();</code>
        `}}};var t,s,d;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:"() => `${localStyles}${displayHelperClassExampleHtml}`",...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var a,r,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:"() => `${localStyles}${screenReaderOnlyExampleHtml}`",...(i=(r=n.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const g=["DisplayHelperClass","ScreenReaderOnly"];export{e as DisplayHelperClass,n as ScreenReaderOnly,g as __namedExportsOrder,m as default};
