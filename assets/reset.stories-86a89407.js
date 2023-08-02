const i={title:"Component Reset",parameters:{description:`
      `}},e=()=>`<div>
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


</div>`;e.storyName="Mixin sap-reset";e.parameters={docs:{description:{story:"The <code>sap-reset()</code> mixin can be added to any HTML element to remove some of the default styling coming from the browsers. "}}};var n,r,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => \`<div>
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


</div>\``,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const o=["Reset"];export{e as Reset,o as __namedExportsOrder,i as default};
//# sourceMappingURL=reset.stories-86a89407.js.map
