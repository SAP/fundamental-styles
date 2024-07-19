var p=Object.defineProperty,v=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var r=(o,e,i)=>e in o?p(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i,t=(o,e)=>{for(var i in e||(e={}))b.call(e,i)&&r(o,i,e[i]);if(a)for(var i of a(e))f.call(e,i)&&r(o,i,e[i]);return o},s=(o,e)=>v(o,m(e));const u=`<style>
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
`,y={title:"Elevation",parameters:{description:`The z-index property specifies the stack order of an element. In order for z-index to work the elements need to be positioned: relative (default), absolute, fixed, sticky.
        <br><br>
        <b>CSS Class: </b>
        <code>.sap-elevation-<i style="color: red;">index</i></code><br><br>
        <b>SCSS Mixin: </b>
        <code>@include sap-elevation(<i style="color: red;">index</i>, <i style="color: red;">position</i>);</code><br><br>
        where: <br><br>
        <code style="color: red;">-index</code>: is an integer from 0 to 50 <br><br>
        <code style="color: red;">-position</code>: (optional) is one of the following : relative, absolute, fixed, sticky. If the property is omitted, the default value (relative) is applied.<br>
      `}},n=()=>u;n.parameters={docs:{description:{story:""}}};var l,d,c;n.parameters=s(t({},n.parameters),{docs:s(t({},(l=n.parameters)==null?void 0:l.docs),{source:t({originalSource:"() => elevationExampleHtml"},(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source)})});const h=["Elevation"];export{n as Elevation,h as __namedExportsOrder,y as default};
