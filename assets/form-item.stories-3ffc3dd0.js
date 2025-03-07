/* empty css                  *//* empty css                   *//* empty css              */const r=`<div class="fd-form-item">
        <label class="fd-form-label fd-form-label--required" for="input-1c">Required Input:</label>
        <input class="fd-input" type="text" id="input-1c" placeholder="Field placeholder text">
    </div>
`,a=`<div class="fd-form-item">
        <label class="fd-form-label" for="input-1">Default input:</label>
        <input class="fd-input" type="text" id="input-1" placeholder="Field placeholder text">
    </div>
`,o={title:"Components/Forms/Form Item",parameters:{description:`
A form item is essentially a label positioned above an input field. When the user places their cursor in the input field, the field is highlighted in blue to indicate that it’s active.
        `,tags:["f3","a11y","theme"]}},e=()=>a;e.storyName="Default";e.parameters={docs:{description:{story:`The default form item displays a label placed above an empty input field with placeholder text that can be replaced with regular text.
        `}}};const t=()=>r;t.parameters={docs:{description:{story:"To indicate to the user that it’s required to fill out an input field, add the `--required` modifier class to the `fd-form-label` element.\n        "}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => primaryExampleHtml",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => requiredExampleHtml",...t.parameters?.docs?.source}}};const d=["Primary","Required"];export{e as Primary,t as Required,d as __namedExportsOrder,o as default};
