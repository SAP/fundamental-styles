var h=Object.defineProperty,b=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var d=(r,e,t)=>e in r?h(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,a=(r,e)=>{for(var t in e||(e={}))x.call(e,t)&&d(r,t,e[t]);if(o)for(var t of o(e))q.call(e,t)&&d(r,t,e[t]);return r},l=(r,e)=>b(r,y(e));/* empty css                  *//* empty css                   *//* empty css              */const v=`<div class="fd-form-item">
        <label class="fd-form-label fd-form-label--required" for="input-1c">Required Input:</label>
        <input class="fd-input" type="text" id="input-1c" placeholder="Field placeholder text">
    </div>
`,g=`<div class="fd-form-item">
        <label class="fd-form-label" for="input-1">Default input:</label>
        <input class="fd-input" type="text" id="input-1" placeholder="Field placeholder text">
    </div>
`,R={title:"Components/Forms/Form Item",parameters:{description:`
A form item is essentially a label positioned above an input field. When the user places their cursor in the input field, the field is highlighted in blue to indicate that it’s active.
        `,tags:["f3","a11y","theme"]}},i=()=>g;i.storyName="Default";i.parameters={docs:{description:{story:`The default form item displays a label placed above an empty input field with placeholder text that can be replaced with regular text.
        `}}};const s=()=>v;s.parameters={docs:{description:{story:"To indicate to the user that it’s required to fill out an input field, add the `--required` modifier class to the `fd-form-label` element.\n        "}}};var p,m,n;i.parameters=l(a({},i.parameters),{docs:l(a({},(p=i.parameters)==null?void 0:p.docs),{source:a({originalSource:"() => primaryExampleHtml"},(n=(m=i.parameters)==null?void 0:m.docs)==null?void 0:n.source)})});var c,u,f;s.parameters=l(a({},s.parameters),{docs:l(a({},(c=s.parameters)==null?void 0:c.docs),{source:a({originalSource:"() => requiredExampleHtml"},(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source)})});const _=["Primary","Required"];export{i as Primary,s as Required,_ as __namedExportsOrder,R as default};
