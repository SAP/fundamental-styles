/* empty css                  *//* empty css                   *//* empty css              */const d=`<div class="fd-form-item">
        <label class="fd-form-label fd-form-label--required" for="input-1c">Required Input:</label>
        <input class="fd-input" type="text" id="input-1c" placeholder="Field placeholder text">
    </div>
`,p=`<div class="fd-form-item">
        <label class="fd-form-label" for="input-1">Default input:</label>
        <input class="fd-input" type="text" id="input-1" placeholder="Field placeholder text">
    </div>
`,u={title:"Components/Forms/Form Item",parameters:{description:`
A form item is essentially a label positioned above an input field. When the user places their cursor in the input field, the field is highlighted in blue to indicate that it’s active.
        `,tags:["f3","a11y","theme"]}},e=()=>p;e.storyName="Default";e.parameters={docs:{description:{story:`The default form item displays a label placed above an empty input field with placeholder text that can be replaced with regular text.
        `}}};const t=()=>d;t.parameters={docs:{description:{story:"To indicate to the user that it’s required to fill out an input field, add the `--required` modifier class to the `fd-form-label` element.\n        "}}};var r,a,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:"() => primaryExampleHtml",...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var l,s,o;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"() => requiredExampleHtml",...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const f=["Primary","Required"];export{e as Primary,t as Required,f as __namedExportsOrder,u as default};
//# sourceMappingURL=form-item.stories-6e770f25.js.map
