var p=Object.defineProperty,c=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var d=(t,e,r)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,s=(t,e)=>{for(var r in e||(e={}))u.call(e,r)&&d(t,r,e[r]);if(i)for(var r of i(e))h.call(e,r)&&d(t,r,e[r]);return t},o=(t,e)=>c(t,f(e));const y=`<div class="fd-form-header">
        <span class="fd-form-header__text">Form Header</span>
    </div>
`;const H={title:"Components/Forms/Form Header",parameters:{description:`
Form headers are essentially titles that provide users with more context about a group of input fields. For instance, a form header titled with “Personal information” would categorize input fields with labels: “Name, Address, etc.”
`,tags:["f3","theme"]}},a=()=>y;a.storyName="Default";a.parameters={docs:{description:{story:`
Default form headers are displayed in text that does not wrap but truncates into an ellipsis.
`}}};var m,n,l;a.parameters=o(s({},a.parameters),{docs:o(s({},(m=a.parameters)==null?void 0:m.docs),{source:s({originalSource:"() => primaryExampleHtml"},(l=(n=a.parameters)==null?void 0:n.docs)==null?void 0:l.source)})});const w=["Primary"];export{a as Primary,w as __namedExportsOrder,H as default};
