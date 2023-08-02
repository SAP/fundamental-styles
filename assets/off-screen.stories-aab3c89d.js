/* empty css             */const a=`<div class="fd-off-screen" aria-live="polite">
    This will be read, whenever this element changes.
</div>
<div class="fd-text">Text with aria-live is kept far left of the screen. so it will not be visible, but it will be read by screen reader.</div>
`;const n={title:"Dev/Off Screen",parameters:{description:"For aria-live to read any change in element, we need to place element but it should not be visible to user.\n            At the same time, it can not be made `visibility: hidden` or `display: none`, as screen reader will not be able to pick this element.\n            This component will make sure that element is not visible on screen but it can be read by screen reader.",tags:["a11y"]}},e=()=>a;e.parameters={docs:{description:{story:`For aria-live to read any change in element, we need to place element but it should not be visible to user.
`}}};var t,r,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:"() => primaryExampleHtml",...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const o=["Primary"];export{e as Primary,o as __namedExportsOrder,n as default};
//# sourceMappingURL=off-screen.stories-aab3c89d.js.map
