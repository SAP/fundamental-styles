const r=`<div class="fd-form-header">
    <h4 class="fd-form-header__text">Form Header</h4>
</div>
`,t={title:"Components/Forms/Form Header",parameters:{description:`
Form headers are essentially titles that provide users with more context about a group of input fields. For instance, a form header titled with “Personal information” would categorize input fields with labels: “Name, Address, etc.”
`,tags:[]}},e=()=>r;e.storyName="Default";e.parameters={docs:{description:{story:`
Default form headers are displayed in text that does not wrap but truncates into an ellipsis.
`}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => primaryExampleHtml",...e.parameters?.docs?.source}}};const a=["Primary"];export{e as Primary,a as __namedExportsOrder,t as default};
