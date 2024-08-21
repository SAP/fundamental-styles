var H=Object.defineProperty,g=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var m=(l,t,a)=>t in l?H(l,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[t]=a,e=(l,t)=>{for(var a in t||(t={}))D.call(t,a)&&m(l,a,t[a]);if(n)for(var a of n(t))C.call(t,a)&&m(l,a,t[a]);return l},r=(l,t)=>g(l,T(t));/* empty css                  *//* empty css                   *//* empty css              */const I=`<div class="fd-form-item">
        <label class="fd-form-label" for="input-05">Disabled Input</label>
        <input class="fd-input" type="text" id="input-05" disabled placeholder="Field placeholder text">
    </div>
`,S=`<div class="fd-form-item">
        <label class="fd-form-label fd-form-label--colon" for="input-1d">Input With Colon</label>
        <input class="fd-input" type="text" id="input-1d" placeholder="Field placeholder text">
    </div>
`,w=`<div class="fd-form-item">
        <label class="fd-form-label fd-form-label--colon fd-form-label--required" for="input-1c">Required Input</label>
        <input class="fd-input" type="text" id="input-1c" placeholder="Field placeholder text">
    </div>
`,R=`<div class="fd-form-item">
        <label class="fd-form-label" for="input-1">Default input</label>
        <input class="fd-input" type="text" id="input-1" placeholder="Field placeholder text">
    </div>
`,k={title:"Components/Forms/Form Label",parameters:{description:`
Form labels are used to identify form elements such as input fields, checkboxes and radio buttons. This component is best used as a child element of the **Form Item** component.
        `,tags:["f3","a11y","theme"]}},o=()=>R;o.storyName="Default";o.parameters={docs:{description:{story:"\nThe default form label is displayed in grey text above an input field. To display a form label, add the `fd-form-label` class as a child element of the `fd-form-item` element.\n        "}}};const s=()=>w;s.parameters={docs:{description:{story:"\nTo indicate to the user that it’s required to fill out an input field, add the `--required` modifier class to the `fd-form-label` element.\n        "}}};const d=()=>S;d.parameters={docs:{description:{story:"\nA form label can be displayed with a colon that does not disappear when truncated. To achieve this, add the `--colon` modifier class to the `fd-form-label` element.\n        "}}};const i=()=>I;i.parameters={docs:{description:{story:"\nA form label can be displayed as disabled to indicate to the users that it cannot be interacted with. To display a disabled form label, add the `is-disabled` class to the `fd-input` element.\n        "}}};var c,p,f;o.parameters=r(e({},o.parameters),{docs:r(e({},(c=o.parameters)==null?void 0:c.docs),{source:e({originalSource:"() => primaryExampleHtml"},(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source)})});var u,b,h;s.parameters=r(e({},s.parameters),{docs:r(e({},(u=s.parameters)==null?void 0:u.docs),{source:e({originalSource:"() => requiredExampleHtml"},(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source)})});var y,x,v;d.parameters=r(e({},d.parameters),{docs:r(e({},(y=d.parameters)==null?void 0:y.docs),{source:e({originalSource:"() => colonExampleHtml"},(v=(x=d.parameters)==null?void 0:x.docs)==null?void 0:v.source)})});var E,q,F;i.parameters=r(e({},i.parameters),{docs:r(e({},(E=i.parameters)==null?void 0:E.docs),{source:e({originalSource:"() => disabledExampleHtml"},(F=(q=i.parameters)==null?void 0:q.docs)==null?void 0:F.source)})});const N=["Primary","Required","Colon","Disabled"];export{d as Colon,i as Disabled,o as Primary,s as Required,N as __namedExportsOrder,k as default};
