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
`,p={title:"Display",parameters:{description:o,docs:{story:{iframeHeight:500}}}},l=`
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
`,e=()=>`${l}
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
`;e.storyName="Display";e.parameters={docs:{story:{iframeHeight:500},description:{story:`
        `}}};const s=()=>`${l}
<a href="#">
    <span class="sap-icon sap-icon--account"></span>
    <span class="sap-sr-only">User Account</span>
</a>
`;s.storyName="Screen-reader-only elements";s.parameters={docs:{story:{iframeHeight:500},description:{story:`The <code>.sap-sr-only</code> class will hide the element visually without hiding it from screen readers. <br><br>
            <b>SCSS Mixin: </b>
            <code>@include sap-sr-only();</code>
        `}}};var n,d,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => \`\${localStyles}
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
\``,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var t,a,r;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`() => \`\${localStyles}
<a href="#">
    <span class="sap-icon sap-icon--account"></span>
    <span class="sap-sr-only">User Account</span>
</a>
\``,...(r=(a=s.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const y=["DisplayHelperClass","ScreenReaderOnly"];export{e as DisplayHelperClass,s as ScreenReaderOnly,y as __namedExportsOrder,p as default};
//# sourceMappingURL=display.stories-956199ff.js.map
