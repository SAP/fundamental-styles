const n=`<div>
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


</div>`,t={title:"Component Reset",parameters:{description:`
      `}},e=()=>n;e.storyName="Mixin sap-reset";e.parameters={docs:{description:{story:"The <code>sap-reset()</code> mixin can be added to any HTML element to remove some of the default styling coming from the browsers. "}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => resetExampleHtml",...e.parameters?.docs?.source}}};const r=["Reset"];export{e as Reset,r as __namedExportsOrder,t as default};
