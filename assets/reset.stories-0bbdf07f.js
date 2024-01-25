const s=`<div>
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


</div>`,o={title:"Component Reset",parameters:{description:`
      `}},e=()=>s;e.storyName="Mixin sap-reset";e.parameters={docs:{description:{story:"The <code>sap-reset()</code> mixin can be added to any HTML element to remove some of the default styling coming from the browsers. "}}};var n,t,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"() => resetExampleHtml",...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const i=["Reset"];export{e as Reset,i as __namedExportsOrder,o as default};
