const i=`<style>
    .sap-docs-container {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .sap-docs-container div {
        background: #69ADF8;
        width: 4rem;
        min-height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.5rem;
        color: #fff;
    }
</style>
<div class="sap-docs-container">
    <div class="sap-elevation-0">0</div>
    <div class="sap-elevation-1">1</div>
    <div class="sap-elevation-2">2</div>
    <div class="sap-elevation-3">3</div>
    <div class="sap-elevation-4">4</div>
    <div class="sap-elevation-5">5</div>
    <div class="sap-elevation-auto">Auto</div>
    <div class="sap-elevation-initial">Initial</div>
    <div class="sap-elevation-inherit">Inherit</div>
</div>
`,o={title:"Elevation",parameters:{description:`The z-index property specifies the stack order of an element. In order for z-index to work the elements need to be positioned: relative (default), absolute, fixed, sticky.
        <br><br>
        <b>CSS Class: </b>
        <code>.sap-elevation-<i style="color: red;">index</i></code><br><br>
        <b>SCSS Mixin: </b>
        <code>@include sap-elevation(<i style="color: red;">index</i>, <i style="color: red;">position</i>);</code><br><br>
        where: <br><br>
        <code style="color: red;">-index</code>: is an integer from 0 to 50 <br><br>
        <code style="color: red;">-position</code>: (optional) is one of the following : relative, absolute, fixed, sticky. If the property is omitted, the default value (relative) is applied.<br>
      `}},e=()=>i;e.parameters={docs:{description:{story:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => elevationExampleHtml",...e.parameters?.docs?.source}}};const n=["Elevation"];export{e as Elevation,n as __namedExportsOrder,o as default};
