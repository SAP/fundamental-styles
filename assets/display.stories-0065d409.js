var h=Object.defineProperty,v=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var l=(t,e,n)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,s=(t,e)=>{for(var n in e||(e={}))f.call(e,n)&&l(t,n,e[n]);if(i)for(var n of i(e))S.call(e,n)&&l(t,n,e[n]);return t},r=(t,e)=>v(t,u(e));/* empty css             */const x=`The display property of an element specifies its display behaviour. For more information prease refer to the
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
`,w=`
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
`,D=`
<a href="#">
    <span class="sap-icon sap-icon--account"></span>
    <span class="sap-sr-only">User Account</span>
</a>
`,E={title:"Display",parameters:{description:x}},b=`
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
`,d=()=>`${b}${w}`;d.storyName="Display";d.parameters={docs:{description:{story:`
        `}}};const a=()=>`${b}${D}`;a.storyName="Screen-reader-only elements";a.parameters={docs:{description:{story:`The <code>.sap-sr-only</code> class will hide the element visually without hiding it from screen readers. <br><br>
            <b>SCSS Mixin: </b>
            <code>@include sap-sr-only();</code>
        `}}};var o,c,p;d.parameters=r(s({},d.parameters),{docs:r(s({},(o=d.parameters)==null?void 0:o.docs),{source:s({originalSource:"() => `${localStyles}${displayHelperClassExampleHtml}`"},(p=(c=d.parameters)==null?void 0:c.docs)==null?void 0:p.source)})});var y,m,g;a.parameters=r(s({},a.parameters),{docs:r(s({},(y=a.parameters)==null?void 0:y.docs),{source:s({originalSource:"() => `${localStyles}${screenReaderOnlyExampleHtml}`"},(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source)})});const H=["DisplayHelperClass","ScreenReaderOnly"];export{d as DisplayHelperClass,a as ScreenReaderOnly,H as __namedExportsOrder,E as default};
