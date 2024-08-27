var H=Object.defineProperty,T=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var r=(e,t,n)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,o=(e,t)=>{for(var n in t||(t={}))y.call(t,n)&&r(e,n,t[n]);if(c)for(var n of c(t))C.call(t,n)&&r(e,n,t[n]);return e},s=(e,t)=>T(e,q(t));/* empty css             *//* empty css               */const g=`<h4>normal</h4>
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


`,x=`<h4>normal</h4>
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


`,w=`<h4>normal</h4>
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


`,E="BTP button is an over-style over the Button(Horizon) and is intended to be used within the controls and patterns for the BTP area.\nBTP over-styling adds wo additional button types: `tool header` and `nested`\n",_={title:"BTP/Button",parameters:{description:E,tags:["a11y","btp","horizon-only"]}},a=()=>g;a.parameters={docs:{description:{story:`The Tool Header button is based on the Button (Horizon) Transparent/LiteButton, but has over-styling of the shape, size and interaction states. It is intended to be used within the controls and patterns for the  <b>BTP</b> area. Use the <code>.fd-button--tool-header</code> modifier class for this type of button.
`}}};const d=()=>x;d.parameters={docs:{description:{story:`The Nested button is also intended to be used within the controls and patterns for the <b>BTP</b> area. Use the <code>.fd-button--nested</code> modifier class with the <code>.fd-button</code> base class for this type of button.
`}}};const i=()=>w;i.parameters={docs:{description:{story:`Use the <code>.fd-button--nested-square</code> modifier class with the <code>.fd-button</code> base class for aquare nested button.
`}}};var l,u,b;a.parameters=s(o({},a.parameters),{docs:s(o({},(l=a.parameters)==null?void 0:l.docs),{source:o({originalSource:"() => toolHeaderButtonExampleHtml"},(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source)})});var f,h,p;d.parameters=s(o({},d.parameters),{docs:s(o({},(f=d.parameters)==null?void 0:f.docs),{source:o({originalSource:"() => nestedButtonExampleHtml"},(p=(h=d.parameters)==null?void 0:h.docs)==null?void 0:p.source)})});var m,v,B;i.parameters=s(o({},i.parameters),{docs:s(o({},(m=i.parameters)==null?void 0:m.docs),{source:o({originalSource:"() => nestedSquareButtonExampleHtml"},(B=(v=i.parameters)==null?void 0:v.docs)==null?void 0:B.source)})});const z=["ToolHeaderButton","NestedButton","NestedSquareButton"];export{d as NestedButton,i as NestedSquareButton,a as ToolHeaderButton,z as __namedExportsOrder,_ as default};
