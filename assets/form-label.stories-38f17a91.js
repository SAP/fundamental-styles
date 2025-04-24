/* empty css                  *//* empty css                   *//* empty css              */const r=`<div class="fd-form-item">
        <label class="fd-form-label" for="input-05">Disabled Input</label>
        <input class="fd-input" type="text" id="input-05" disabled placeholder="Field placeholder text">
    </div>
`,o=`<div class="fd-form-item">
        <label class="fd-form-label fd-form-label--colon" for="input-1d">Input With Colon</label>
        <input class="fd-input" type="text" id="input-1d" placeholder="Field placeholder text">
    </div>
`,s=`<div class="fd-form-item">
        <label class="fd-form-label fd-form-label--colon fd-form-label--required" for="input-1c">Required Input</label>
        <input class="fd-input" type="text" id="input-1c" placeholder="Field placeholder text">
    </div>
`,d=`<div class="fd-form-item">
        <label class="fd-form-label" for="input-1">Default input</label>
        <input class="fd-input" type="text" id="input-1" placeholder="Field placeholder text">
    </div>
`,c={title:"Components/Forms/Form Label",parameters:{description:`
Form labels are used to identify form elements such as input fields, checkboxes and radio buttons. This component is best used as a child element of the **Form Item** component.
        `,tags:["f3","a11y","theme"]}},e=()=>d;e.storyName="Default";e.parameters={docs:{description:{story:"\nThe default form label is displayed in grey text above an input field. To display a form label, add the `fd-form-label` class as a child element of the `fd-form-item` element.\n        "}}};const t=()=>s;t.parameters={docs:{description:{story:"\nTo indicate to the user that it’s required to fill out an input field, add the `--required` modifier class to the `fd-form-label` element.\n        "}}};const a=()=>o;a.parameters={docs:{description:{story:"\nA form label can be displayed with a colon that does not disappear when truncated. To achieve this, add the `--colon` modifier class to the `fd-form-label` element.\n        "}}};const l=()=>r;l.parameters={docs:{description:{story:"\nA form label can be displayed as disabled to indicate to the users that it cannot be interacted with. To display a disabled form label, add the `is-disabled` class to the `fd-input` element.\n        "}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => primaryExampleHtml",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => requiredExampleHtml",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => colonExampleHtml",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"() => disabledExampleHtml",...l.parameters?.docs?.source}}};const p=["Primary","Required","Colon","Disabled"];export{a as Colon,l as Disabled,e as Primary,t as Required,p as __namedExportsOrder,c as default};
