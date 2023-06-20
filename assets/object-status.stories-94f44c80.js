/* empty css                      *//* empty css             */const L=`<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--negative fd-object-status--truncate" style="max-width: 15rem;">
        <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
        <span class="fd-object-status__text">Default behaviour of Object Status with very long text. The text goes on multiple lines.</span>
    </span>
    <span class="fd-object-status fd-object-status--critical fd-object-status--truncate" style="max-width: 15rem;">
        <i class="fd-object-status__icon sap-icon--message-warning" role="presentation"></i>
        <span class="fd-object-status__text">Object Status with text truncation with ellipsis</span>
    </span>
    <span class="fd-object-status fd-object-status--negative fd-object-status--inverted fd-object-status--truncate" style="max-width: 15rem;">
        <span class="fd-object-status__text">Inverted Negative with very, very long text which truncates</span>
    </span>
    <span class="fd-object-status fd-object-status--large fd-object-status--positive fd-object-status--truncate" style="max-width: 15rem;">
        <i class="fd-object-status__icon sap-icon--message-success" role="presentation"></i>
        <span class="fd-object-status__text">Positive with very, very long text which truncates</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-8 fd-object-status--truncate" tabindex="0" style="max-width: 15rem;">
        <span class="fd-object-status__text">Indication8 with very, very long text which truncates</span>
    </span>
</div>
`,Y=`<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-1">
        <span class="fd-object-status__text">Indication1</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-2">
        <span class="fd-object-status__text">Indication2</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-3">
        <span class="fd-object-status__text">Indication3</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-4">
        <span class="fd-object-status__text">Indication4</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-5">
        <span class="fd-object-status__text">Indication5</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-6">
        <span class="fd-object-status__text">Indication6</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-7">
        <span class="fd-object-status__text">Indication7</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--indication-8">
        <span class="fd-object-status__text">Indication8</span>
    </span>
</div>

<h4>Clickable Inverted Object Status</h4>
<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-1" tabindex="0">
        <span class="fd-object-status__text">Indication1</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-2" tabindex="0">
        <span class="fd-object-status__text">Indication2</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-3" tabindex="0">
        <span class="fd-object-status__text">Indication3</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-4" tabindex="0">
        <span class="fd-object-status__text">Indication4</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-5" tabindex="0">
        <span class="fd-object-status__text">Indication5</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-6" tabindex="0">
        <span class="fd-object-status__text">Indication6</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-7" tabindex="0">
        <span class="fd-object-status__text">Indication7</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--link fd-object-status--indication-8" tabindex="0">
        <span class="fd-object-status__text">Indication8</span>
    </span>
</div>
`,z=`<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--negative fd-object-status--inverted">
        <span class="fd-object-status__text">Inverted Negative</span>
    </span>
    <span class="fd-object-status fd-object-status--critical fd-object-status--inverted">
        <span class="fd-object-status__text">Inverted Warning</span>
    </span>
    <span class="fd-object-status fd-object-status--positive fd-object-status--inverted">
        <span class="fd-object-status__text">Inverted Success</span>
    </span>
    <span class="fd-object-status fd-object-status--informative fd-object-status--inverted">
        <span class="fd-object-status__text">Inverted informative</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted">
        <span class="fd-object-status__text">Inverted Neutral</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--negative">
        <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--negative">
        <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
        <span class="fd-object-status__text">Negative</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--critical">
        <i class="fd-object-status__icon sap-icon--message-warning" role="presentation"></i>
        <span class="fd-object-status__text">Critical</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--positive">
        <i class="fd-object-status__icon sap-icon--message-success" role="presentation"></i>
        <span class="fd-object-status__text">Positive</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--informative">
        <i class="fd-object-status__icon sap-icon--message-information" role="presentation"></i>
        <span class="fd-object-status__text">Informative</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted">
        <span class="fd-object-status__text">Neutral</span>
    </span>
</div>

    <h4>Clickable Inverted Object Status</h4>
<div class="fddocs-container">
    <a class="fd-object-status fd-object-status--link fd-object-status--negative fd-object-status--inverted">
        <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
        <span class="fd-object-status__text">Inverted Negative</span>
    </a>
    <a class="fd-object-status fd-object-status--link fd-object-status--critical fd-object-status--inverted">
        <i class="fd-object-status__icon sap-icon--message-warning" role="presentation"></i>
        <span class="fd-object-status__text">Inverted Warning</span>
    </a>
    <a class="fd-object-status fd-object-status--link fd-object-status--positive fd-object-status--inverted">
        <i class="fd-object-status__icon sap-icon--message-success" role="presentation"></i>
        <span class="fd-object-status__text">Inverted Success</span>
    </a>
    <a class="fd-object-status fd-object-status--link fd-object-status--informative fd-object-status--inverted">
        <i class="fd-object-status__icon sap-icon--message-information" role="presentation"></i>
        <span class="fd-object-status__text">Inverted informative</span>
    </a>
    <a class="fd-object-status fd-object-status--link fd-object-status--inverted">
        <span class="fd-object-status__text">Inverted Neutral</span>
    </a>
</div>

  <h4>Large Inverted Object Status</h4>
  <div class="fddocs-container" style="align-items: baseline;">
    <span class="fd-object-status fd-object-status--negative fd-object-status--inverted fd-object-status--large">
        <span class="fd-object-status__text">Inverted Negative</span>
    </span>
    <span class="fd-object-status fd-object-status--critical fd-object-status--inverted fd-object-status--large">
        <span class="fd-object-status__text">Inverted Warning</span>
    </span>
    <span class="fd-object-status fd-object-status--positive fd-object-status--inverted fd-object-status--large">
        <span class="fd-object-status__text">Inverted Success</span>
    </span>
    <span class="fd-object-status fd-object-status--informative fd-object-status--inverted fd-object-status--large">
        <span class="fd-object-status__text">Inverted informative</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--large">
        <span class="fd-object-status__text">Inverted Neutral</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--negative fd-object-status--large">
        <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--negative fd-object-status--large">
        <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
        <span class="fd-object-status__text">Negative</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--critical fd-object-status--large">
        <i class="fd-object-status__icon sap-icon--message-warning" role="presentation"></i>
        <span class="fd-object-status__text">Critical</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--positive fd-object-status--large">
        <i class="fd-object-status__icon sap-icon--message-success" role="presentation"></i>
        <span class="fd-object-status__text">Positive</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--informative fd-object-status--large">
        <i class="fd-object-status__icon sap-icon--message-information" role="presentation"></i>
        <span class="fd-object-status__text">Informative</span>
    </span>
    <span class="fd-object-status fd-object-status--inverted fd-object-status--large">
        <span class="fd-object-status__text">Neutral</span>
    </span>
</div>
`,F=`<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--large fd-object-status--negative">
        <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
        <span class="fd-object-status__text">Negative</span>
    </span>
    <span class="fd-object-status fd-object-status--large fd-object-status--critical">
        <i class="fd-object-status__icon sap-icon--message-warning" role="presentation"></i>
        <span class="fd-object-status__text">Critical</span>
    </span>
    <span class="fd-object-status fd-object-status--large fd-object-status--positive">
        <i class="fd-object-status__icon sap-icon--message-success" role="presentation"></i>
        <span class="fd-object-status__text">Positive</span>
    </span>
    <span class="fd-object-status fd-object-status--large fd-object-status--informative">
        <i class="fd-object-status__icon sap-icon--message-information" role="presentation"></i>
        <span class="fd-object-status__text">Info</span>
    </span>
    <span class="fd-object-status fd-object-status--large">
        <span class="fd-object-status__text">Neutral</span>
    </span>
</div>
`,M=`<div class="fddocs-container">
    <a href="#"  class="fd-object-status fd-object-status--negative fd-object-status--link">
        <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
        <span class="fd-object-status__text">Negative</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--critical fd-object-status--link">
        <i class="fd-object-status__icon sap-icon--message-warning" role="presentation"></i>
        <span class="fd-object-status__text">Critical</span>
    </a>
    <a href="#"class="fd-object-status fd-object-status--positive fd-object-status--link">
        <i class="fd-object-status__icon sap-icon--message-success" role="presentation"></i>
        <span class="fd-object-status__text">Positive</span>
    </a>
    <span role="button" class="fd-object-status fd-object-status--informative fd-object-status--link" tabindex="0">
        <i class="fd-object-status__icon sap-icon--message-information" role="presentation"></i>
        <span class="fd-object-status__text">Info</span>
    </span>
    <span role="button" class="fd-object-status fd-object-status--link" tabindex="0">
        <span class="fd-object-status__text">Neutral</span>
    </span>

    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-1">
        <span class="fd-object-status__text">Dark Red</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-2">
        <span class="fd-object-status__text">Red</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-3">
        <span class="fd-object-status__text">Yellow</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-4">
        <span class="fd-object-status__text">Green</span>
    </a>
    <a href="#"  class="fd-object-status fd-object-status--link fd-object-status--indication-5">
        <span class="fd-object-status__text">Blue</span>
    </a>
    <span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-6" tabindex="0">
        <span class="fd-object-status__text">Teal</span>
    </span>
    <span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-7" tabindex="0">
        <span class="fd-object-status__text">Purple</span>
    </span>
    <span role="button" class="fd-object-status fd-object-status--link fd-object-status--indication-8" tabindex="0">
        <span class="fd-object-status__text">Pink</span>
    </span>
</div>
`,U=`<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--indication-1">
        <span class="fd-object-status__text">Dark Red</span>
    </span>
    <span class="fd-object-status fd-object-status--indication-2">
        <span class="fd-object-status__text">Red</span>
    </span>
    <span class="fd-object-status fd-object-status--indication-3">
        <span class="fd-object-status__text">Yellow</span>
    </span>
    <span class="fd-object-status fd-object-status--indication-4">
        <span class="fd-object-status__text">Green</span>
    </span>
    <span class="fd-object-status fd-object-status--indication-5">
        <span class="fd-object-status__text">Blue</span>
    </span>
    <span class="fd-object-status fd-object-status--indication-6">
        <span class="fd-object-status__text">Teal</span>
    </span>
    <span class="fd-object-status fd-object-status--indication-7">
        <span class="fd-object-status__text">Purple</span>
    </span>
    <span class="fd-object-status fd-object-status--indication-8">
        <span class="fd-object-status__text">Pink</span>
    </span>
</div>
`,q=`<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--negative">
        <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
        <span class="fd-object-status__text">Negative</span>
    </span>
    <span class="fd-object-status fd-object-status--critical">
        <i class="fd-object-status__icon sap-icon--message-warning" role="presentation"></i>
        <span class="fd-object-status__text">Critical</span>
    </span>
    <span class="fd-object-status fd-object-status--positive">
        <i class="fd-object-status__icon sap-icon--message-success" role="presentation"></i>
        <span class="fd-object-status__text">Positive</span>
    </span>
    <span class="fd-object-status fd-object-status--informative">
        <i class="fd-object-status__icon sap-icon--message-information" role="presentation"></i>
        <span class="fd-object-status__text">Info</span>
    </span>
    <span class="fd-object-status fd-object-status--neutral">
        <i class="fd-object-status__icon sap-icon--circle-task-2" role="presentation"></i>
        <span class="fd-object-status__text">Neutral</span>
    </span>
</div>
`,J=`<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--negative">
        <span class="fd-object-status__text">Negative</span>
    </span>
    <span class="fd-object-status fd-object-status--critical">
        <span class="fd-object-status__text">Critical</span>
    </span>
    <span class="fd-object-status fd-object-status--positive">
        <span class="fd-object-status__text">Positive</span>
    </span>
    <span class="fd-object-status fd-object-status--informative">
        <span class="fd-object-status__text">Info</span>
    </span>
    <span class="fd-object-status">
        <span class="fd-object-status__text">Neutral</span>
    </span>
</div>
`,K=`<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--negative">
        <i class="fd-object-status__icon sap-icon--message-error" aria-label="Negative"></i>
    </span>
    <span class="fd-object-status fd-object-status--critical">
        <i class="fd-object-status__icon sap-icon--message-warning" aria-label="Warning"></i>
    </span>
    <span class="fd-object-status fd-object-status--positive">
        <i class="fd-object-status__icon sap-icon--message-success" aria-label="Correct"></i>
    </span>
    <span class="fd-object-status fd-object-status--informative">
        <i class="fd-object-status__icon sap-icon--message-information" aria-label="More information"></i>
    </span>
</div>
`,Q=`<div class="fddocs-container">
    <span class="fd-object-status fd-object-status--negative">
        <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
        <span class="fd-object-status__text">Negative</span>
    </span>
    <span class="fd-object-status fd-object-status--critical">
        <i class="fd-object-status__icon sap-icon--message-warning" role="presentation"></i>
        <span class="fd-object-status__text">Critical</span>
    </span>
    <span class="fd-object-status fd-object-status--positive">
        <i class="fd-object-status__icon sap-icon--message-success" role="presentation"></i>
        <span class="fd-object-status__text">Positive</span>
    </span>
    <span class="fd-object-status fd-object-status--informative">
        <i class="fd-object-status__icon sap-icon--message-information" role="presentation"></i>
        <span class="fd-object-status__text">Info</span>
    </span>
</div>
`,Z={title:"Components/Object Status",parameters:{description:`Object Status is a short text that represents the semantic status of an object. It has a semantic
color and an optional icon. Typically, the object status is used in the dynamic page header and as a status
attribute of a line item in a table. `,tags:["f3","a11y","theme"]}},s=()=>Q;s.parameters={docs:{description:{story:"\n  Object Status can display the semantic status of an object: negative (class: `fd-object-status--negative`), critical\n  (class: `fd-object-status--critical`), positive (class: `fd-object-status--positive`),\n  informative (class: `fd-object-status--informative`), or none.\n            "}}};const a=()=>K;a.parameters={docs:{description:{story:"Object status icon only"}}};const e=()=>J;e.parameters={docs:{description:{story:"Object status text only"}}};const n=()=>q;n.parameters={docs:{description:{story:"Object status icon and text"}}};const c=()=>U;c.parameters={docs:{description:{story:"Object Status with Generic Indication Colors"}}};const o=()=>M;o.parameters={docs:{description:{story:`
 If the object status is used as a link, a hover effect is shown on non-touch devices.
 If the object status is shown using a combination of icon and text, there is no hover effect for the icon.
 If Object Status has to be clicked/tabbed by the user add the \`fd-object-status--link\` modifier class.
 `}}};const r=()=>F,i=()=>z;i.parameters={docs:{description:{story:`
 Inverted Object Status(optional inverted visualization) determines whether the background color reflects the set state
 instead of the control's text. Use the inverted object status if the information is crucial for the user’s actions and needs to stand out visually.
 Inverted Object Status is achieved by adding the \`fd-object-status--inverted\` modifier class.
            `}}};const d=()=>Y;d.parameters={docs:{description:{story:"Inverted indication colors"}}};const t=()=>L;t.storyName="Object Status with single line text with ellipsis";t.parameters={docs:{description:{story:`
  By default, Object Status text goes on multiple lines based on the max width that is set for the element. For a single line text with ellipsis add the <code>fd-object-status--truncate</code> modifier class to the <code>fd-object-status</code> base class.
            `}}};var u,p,l;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"() => primaryExampleHtml",...(l=(p=s.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var f,b,j;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"() => iconExampleHtml",...(j=(b=a.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var _,m,v;e.parameters={...e.parameters,docs:{...(_=e.parameters)==null?void 0:_.docs,source:{originalSource:"() => textExampleHtml",...(v=(m=e.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var x,g,h;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"() => iconAndTextExampleHtml",...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var I,k,y;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:"() => genericIndicationColorsExampleHtml",...(y=(k=c.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var S,w,O;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:"() => clickableObjectStatusExampleHtml",...(O=(w=o.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var E,N,H;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:"() => largeObjectStatusExampleHtml",...(H=(N=r.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var C,P,T;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:"() => invertedExampleHtml",...(T=(P=i.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var G,A,R;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:"() => invertedIndicationExampleHtml",...(R=(A=d.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var W,B,D;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:"() => truncateExampleExampleHtml",...(D=(B=t.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const $=["Primary","Icon","Text","IconAndText","GenericIndicationColors","ClickableObjectStatus","LargeObjectStatus","Inverted","InvertedIndication","TruncateExample"];export{o as ClickableObjectStatus,c as GenericIndicationColors,a as Icon,n as IconAndText,i as Inverted,d as InvertedIndication,r as LargeObjectStatus,s as Primary,e as Text,t as TruncateExample,$ as __namedExportsOrder,Z as default};
//# sourceMappingURL=object-status.stories-94f44c80.js.map
