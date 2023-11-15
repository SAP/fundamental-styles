/* empty css                  *//* empty css                   *//* empty css              */const h=`<div class="fd-form-item">
        <label class="fd-form-label" for="input-05">Disabled Input</label>
        <input class="fd-input" type="text" id="input-05" disabled placeholder="Field placeholder text">
    </div>
`,y=`<div class="fd-form-item">
        <label class="fd-form-label fd-form-label--colon" for="input-1d">Input With Colon</label>
        <input class="fd-input" type="text" id="input-1d" placeholder="Field placeholder text">
    </div>
`,x=`<div class="fd-form-item">
        <label class="fd-form-label fd-form-label--colon fd-form-label--required" for="input-1c">Required Input</label>
        <input class="fd-input" type="text" id="input-1c" placeholder="Field placeholder text">
    </div>
`,v=`<div class="fd-form-item">
        <label class="fd-form-label" for="input-1">Default input</label>
        <input class="fd-input" type="text" id="input-1" placeholder="Field placeholder text">
    </div>
`,H={title:"Components/Forms/Form Label",parameters:{description:`
Form labels are used to identify form elements such as input fields, checkboxes and radio buttons. This component is best used as a child element of the **Form Item** component.
        `,tags:["f3","a11y","theme"]}},e=()=>v;e.storyName="Default";e.parameters={docs:{description:{story:"\nThe default form label is displayed in grey text above an input field. To display a form label, add the `fd-form-label` class as a child element of the `fd-form-item` element.\n        "}}};const t=()=>x;t.parameters={docs:{description:{story:"\nTo indicate to the user that it’s required to fill out an input field, add the `--required` modifier class to the `fd-form-label` element.\n        "}}};const a=()=>y;a.parameters={docs:{description:{story:"\nA form label can be displayed with a colon that does not disappear when truncated. To achieve this, add the `--colon` modifier class to the `fd-form-label` element.\n        "}}};const l=()=>h;l.parameters={docs:{description:{story:"\nA form label can be displayed as disabled to indicate to the users that it cannot be interacted with. To display a disabled form label, add the `is-disabled` class to the `fd-input` element.\n        "}}};var r,o,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:"() => primaryExampleHtml",...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var d,i,n;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"() => requiredExampleHtml",...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var m,c,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"() => colonExampleHtml",...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var f,u,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:"() => disabledExampleHtml",...(b=(u=l.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const g=["Primary","Required","Colon","Disabled"];export{a as Colon,l as Disabled,e as Primary,t as Required,g as __namedExportsOrder,H as default};
//# sourceMappingURL=form-label.stories-b77a9f6f.js.map
