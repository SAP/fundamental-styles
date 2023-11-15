/* empty css             *//* empty css               */const b=`<h4>normal</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--tool-header" aria-label="Home">
        <i class="sap-icon--home" role="presentation"></i>
    </button>
</div>

<h4>hover</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--tool-header is-hover" aria-label="Home">
        <i class="sap-icon--home" role="presentation"></i>
    </button>
</div>

<h4>active</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--tool-header is-active" aria-label="Home">
        <i class="sap-icon--home" role="presentation"></i>
    </button>
</div>

<h4>focus</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--tool-header is-focus" aria-label="Home">
        <i class="sap-icon--home" role="presentation"></i>
    </button>
</div>

<h4>disabled</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--tool-header is-disabled" aria-label="Home">
        <i class="sap-icon--home" role="presentation"></i>
    </button>
</div>

<h4>with badge</h4>
<button class="fd-button fd-button--tool-header" aria-label="Home">
    <i class="sap-icon--home" role="presentation"></i>
    <span class="fd-button__badge"></span>
</button>


`,f=`<h4>normal</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--nested" aria-label="Close">
        <i class="sap-icon--decline" role="presentation"></i>
    </button>
</div>

<h4>hover</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--nested is-hover" aria-label="Close">
        <i class="sap-icon--decline" role="presentation"></i>
    </button>
</div>

<h4>active</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--nested is-active" aria-label="Close">
        <i class="sap-icon--decline" role="presentation"></i>
    </button>
</div>

<h4>focus</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--nested is-focus" aria-label="Close">
        <i class="sap-icon--decline" role="presentation"></i>
    </button>
</div>

<h4>disabled</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--nested is-disabled" aria-label="Close">
        <i class="sap-icon--decline" role="presentation"></i>
    </button>
</div>


`,h=`<h4>normal</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--nested-square" aria-label="Close">
        <i class="sap-icon--decline" role="presentation"></i>
    </button>
</div>

<h4>hover</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--nested-square is-hover" aria-label="Close">
        <i class="sap-icon--decline" role="presentation"></i>
    </button>
</div>

<h4>active</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--nested-square is-active" aria-label="Close">
        <i class="sap-icon--decline" role="presentation"></i>
    </button>
</div>

<h4>focus</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--nested-square is-focus" aria-label="Close">
        <i class="sap-icon--decline" role="presentation"></i>
    </button>
</div>

<h4>disabled</h4>
<div class="fddocs-container fddocs-button-container">
    <button class="fd-button fd-button--nested-square is-disabled" aria-label="Close">
        <i class="sap-icon--decline" role="presentation"></i>
    </button>
</div>


`,p="BTP button is an over-style over the Button(Horizon) and is intended to be used within the controls and patterns for the BTP area.\nBTP over-styling adds wo additional button types: `tool header` and `nested`\n",B={title:"BTP/Button",parameters:{description:p,tags:["a11y","btp","horizon-only"]}},t=()=>b;t.parameters={docs:{description:{story:`The Tool Header button is based on the Button (Horizon) Transparent/LiteButton, but has over-styling of the shape, size and interaction states. It is intended to be used within the controls and patterns for the  <b>BTP</b> area. Use the <code>.fd-button--tool-header</code> modifier class for this type of button.
`}}};const n=()=>f;n.parameters={docs:{description:{story:`The Nested button is also intended to be used within the controls and patterns for the <b>BTP</b> area. Use the <code>.fd-button--nested</code> modifier class with the <code>.fd-button</code> base class for this type of button.
`}}};const o=()=>h;o.parameters={docs:{description:{story:`Use the <code>.fd-button--nested-square</code> modifier class with the <code>.fd-button</code> base class for aquare nested button.
`}}};var e,s,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:"() => toolHeaderButtonExampleHtml",...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var d,i,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"() => nestedButtonExampleHtml",...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var r,l,u;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:"() => nestedSquareButtonExampleHtml",...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const H=["ToolHeaderButton","NestedButton","NestedSquareButton"];export{n as NestedButton,o as NestedSquareButton,t as ToolHeaderButton,H as __namedExportsOrder,B as default};
//# sourceMappingURL=button.stories-80ff6ba2.js.map
