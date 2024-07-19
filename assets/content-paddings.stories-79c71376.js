var v=Object.defineProperty,b=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var p=(e,t,d)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:d}):e[t]=d,n=(e,t)=>{for(var d in t||(t={}))u.call(t,d)&&p(e,d,t[d]);if(r)for(var d of r(t))S.call(t,d)&&p(e,d,t[d]);return e},s=(e,t)=>b(e,x(t));const w=`<h3>Responsive</h3>
<div class="sap-container-type-inline-size">
    <div class="demo sap-content-paddings-home">
        <div></div>
    </div>
</div>
<br>
<h3>Size SM</h3>
<div class="demo sap-content-paddings-home-sm">
    <div></div>
</div>
<br>
<h3>Size MD</h3>
<div class="demo sap-content-paddings-home-md">
    <div></div>
</div>
<br>
<h3>Size LG</h3>
<div class="demo sap-content-paddings-home-lg">
    <div></div>
</div>
<br>
<h3>Size XL</h3>
<div class="demo sap-content-paddings-home-xl">
    <div></div>
</div>
`,f=`<h3>Responsive</h3>
<div class="sap-container-type-inline-size">
    <div class="demo sap-content-paddings-container">
        <div></div>
    </div>
</div>
<br>
<h3>Size SM</h3>
<div class="demo sap-content-paddings-container-sm">
    <div></div>
</div>
<br>
<h3>Size MD</h3>
<div class="demo sap-content-paddings-container-md">
    <div></div>
</div>
<br>
<h3>Size LG</h3>
<div class="demo sap-content-paddings-container-lg">
    <div></div>
</div>
<br>
<h3>Size XL</h3>
<div class="demo sap-content-paddings-container-xl">
    <div></div>
</div>
`,C={title:"Content Paddings",parameters:{description:`Content containers (Page, Dynamic Page, Object Page, Tab Container, Icon Tab Bar, Wizard) can hold any types of controls and layouts that are needed to visualize application content. The content areas of these controls should by default use responsive paddings which value is determined by the container width.
      `}},y=`
<style>
    div.demo {
        height: 2rem;
        max-width: 100%;
        background: #69ADF8;
    }
    .demo div {
        height: 100%;
        width: 100%;
        background: #E2EEFF;
    }
</style>
`,i=()=>`
${y}
${w}
`;i.storyName="Home (content area)";i.parameters={docs:{description:{story:`
<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <thead>
        <tr>
            <th style="padding: 0.25rem;">Size</th>
            <th style="padding: 0.25rem;">Container Width</th>
            <th style="padding: 0.25rem;">Container Padding</th>
            <th style="padding: 0.25rem;">Class</th>
            <th style="padding: 0.25rem;">Mixin</th>
        </tr>
    </thead>
    <tbody>
    <tr>
        <td style="padding: 0.25rem;">SM</td>
        <td style="padding: 0.25rem;">max-width: 599px</td>
        <td style="padding: 0.25rem;">padding-left: 0.5rem; <br>padding-right: 0.5rem;</td>
        <td style="padding: 0.25rem;">.sap-content-paddings-home-sm</td>
        <td style="padding: 0.25rem;">@include sap-content-paddings(home, sm);</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">MD</td>
        <td style="padding: 0.25rem;">min-width: 600px, <br>max-width: 1023px</td>
        <td style="padding: 0.25rem;">padding-left: 2rem; <br>padding-right: 2rem;</td>
        <td style="padding: 0.25rem;">.sap-content-paddings-home-md</td>
        <td style="padding: 0.25rem;">@include sap-content-paddings(home, md);</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">LG</td>
        <td style="padding: 0.25rem;">min-width: 1024px, <br>max-width: 1439px</td>
        <td style="padding: 0.25rem;">padding-left: 2rem; <br>padding-right: 2rem;</td>
        <td style="padding: 0.25rem;">.sap-content-paddings-home-lg</td>
        <td style="padding: 0.25rem;">@include sap-content-paddings(home, lg);</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">XL</td>
        <td style="padding: 0.25rem;">min-width: 1440px</td>
        <td style="padding: 0.25rem;">padding-left: 3rem; <br>padding-right: 3rem;</td>
        <td style="padding: 0.25rem;">.sap-content-paddings-home-xl</td>
        <td style="padding: 0.25rem;">@include sap-content-paddings(home, xl);</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Default</td>
        <td style="padding: 0.25rem;">responsive</td>
        <td style="padding: 0.25rem;">based on screen size</td>
        <td style="padding: 0.25rem;">.sap-content-paddings-home</td>
        <td style="padding: 0.25rem;">@include sap-content-paddings(home, default); <br> or @include sap-content-paddings(home);</td>
    </tr>
    </tbody>
</table>`}}};const a=()=>`
${y}
${f}
`;a.storyName="Content containers";a.parameters={docs:{description:{story:`
<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tr>
        <th style="padding: 0.25rem;">Size</th>
        <th style="padding: 0.25rem;">Container Width</th>
        <th style="padding: 0.25rem;">Container Padding</th>
        <th style="padding: 0.25rem;">Class</th>
        <th style="padding: 0.25rem;">Mixin</th>
    </tr>
    <tr>
        <th style="padding: 0.25rem;">SM</th>
        <th style="padding: 0.25rem;">max-width: 599px</th>
        <th style="padding: 0.25rem;">padding-left: 1rem; <br>padding-right: 1rem;</th>
        <th style="padding: 0.25rem;">.sap-content-paddings-container-sm</th>
        <th style="padding: 0.25rem;">@include sap-content-paddings(container, sm);</th>
    </tr>
    <tr>
        <th style="padding: 0.25rem;">MD</th>
        <th style="padding: 0.25rem;">min-width: 600px, <br>max-width: 1023px</th>
        <th style="padding: 0.25rem;">padding-left: 2rem; <br>padding-right: 2rem;</th>
        <th style="padding: 0.25rem;">.sap-content-paddings-container-md</th>
        <th style="padding: 0.25rem;">@include sap-content-paddings(container, md);</th>
    </tr>
    <tr>
        <th style="padding: 0.25rem;">LG</th>
        <th style="padding: 0.25rem;">min-width: 1024px, <br>max-width: 1439px</th>
        <th style="padding: 0.25rem;">padding-left: 2rem; <br>padding-right: 2rem;</th>
        <th style="padding: 0.25rem;">.sap-content-paddings-container-lg</th>
        <th style="padding: 0.25rem;">@include sap-content-paddings(container, lg);</th>
    </tr>
    <tr>
        <th style="padding: 0.25rem;">XL</th>
        <th style="padding: 0.25rem;">min-width: 1440px</th>
        <th style="padding: 0.25rem;">padding-left: 3rem; <br>padding-right: 3rem;</th>
        <th style="padding: 0.25rem;">.sap-content-paddings-container-xl</th>
        <th style="padding: 0.25rem;">@include sap-content-paddings(container, xl);</th>
    </tr>
    <tr>
        <th style="padding: 0.25rem;">Default</th>
        <th style="padding: 0.25rem;">responsive</th>
        <th style="padding: 0.25rem;">based on screen size</th>
        <th style="padding: 0.25rem;">.sap-content-paddings-container</th>
        <th style="padding: 0.25rem;">@include sap-content-paddings(container, default); <br> or @include sap-content-paddings(container);</th>
    </tr>
</table>`}}};var o,m,l;i.parameters=s(n({},i.parameters),{docs:s(n({},(o=i.parameters)==null?void 0:o.docs),{source:n({originalSource:"() => `\n${localStyles}\n${homeExampleHtml}\n`"},(l=(m=i.parameters)==null?void 0:m.docs)==null?void 0:l.source)})});var h,g,c;a.parameters=s(n({},a.parameters),{docs:s(n({},(h=a.parameters)==null?void 0:h.docs),{source:n({originalSource:"() => `\n${localStyles}\n${containerExampleHtml}\n`"},(c=(g=a.parameters)==null?void 0:g.docs)==null?void 0:c.source)})});const E=["HomeExample","ContainerExample"];export{a as ContainerExample,i as HomeExample,E as __namedExportsOrder,C as default};
