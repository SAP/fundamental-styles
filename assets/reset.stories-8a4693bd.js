var p=Object.defineProperty,c=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var a=(t,e,n)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,s=(t,e)=>{for(var n in e||(e={}))x.call(e,n)&&a(t,n,e[n]);if(i)for(var n of i(e))g.call(e,n)&&a(t,n,e[n]);return t},o=(t,e)=>c(t,f(e));const b=`<div>
<pre>
@mixin sap-reset {
  font-family: "72", "72full", Arial, Helvetica, sans-serif;
  font-size: var(--sapFontSize);
  line-height: normal;
  color: var(--sapTextColor);
  font-weight: normal;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: 0;
  text-indent: 0;
  list-style-type: none;
  
  &::before,
  &::after {
    box-sizing: inherit;
    font-size: inherit;
  }
}
</pre>


</div>`,y={title:"Component Reset",parameters:{description:`
      `}},r=()=>b;r.storyName="Mixin sap-reset";r.parameters={docs:{description:{story:"The <code>sap-reset()</code> mixin can be added to any HTML element to remove some of the default styling coming from the browsers. "}}};var m,d,l;r.parameters=o(s({},r.parameters),{docs:o(s({},(m=r.parameters)==null?void 0:m.docs),{source:s({originalSource:"() => resetExampleHtml"},(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source)})});const u=["Reset"];export{r as Reset,u as __namedExportsOrder,y as default};
