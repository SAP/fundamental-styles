var k=Object.defineProperty,w=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var d=(n,t,e)=>t in n?k(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,a=(n,t)=>{for(var e in t||(t={}))v.call(t,e)&&d(n,e,t[e]);if(l)for(var e of l(t))H.call(t,e)&&d(n,e,t[e]);return n},s=(n,t)=>w(n,E(t));/* empty css             *//* empty css               *//* empty css             */const S=`
<button class="fd-button fd-button--transparent" aria-label="Notifications">
    <i class="sap-icon--bell"></i>
    <span class="fd-counter fd-counter--notification" aria-label="Unread count">1</span>
</button>

<button class="fd-button fd-button--transparent" aria-label="Notifications">
    <i class="sap-icon--bell"></i>
    <span class="fd-counter fd-counter--notification" aria-label="Unread count">20</span>
</button>

<button class="fd-button fd-button--transparent" aria-label="Notifications">
    <i class="sap-icon--bell"></i>
    <span class="fd-counter fd-counter--notification" aria-label="Unread count">300</span>
</button>

<button class="fd-button fd-button--transparent" aria-label="Notifications">
    <i class="sap-icon--bell"></i>
    <span class="fd-counter fd-counter--notification" aria-label="Unread count">999+</span>
</button>
`,A=`<ul class="fd-tabs" role="tablist">
    <li class="fd-tabs__item" role="tab">
        <a class="fd-tabs__link" href="#AvcVC566">Link
        <span class="fd-counter" aria-label="Unread count">25</span></a>
    </li>
    <li class="fd-tabs__item" role="tab" aria-selected="true">
        <a class="fd-tabs__link" href="#5mxO9110">
            <span class="fd-tabs__tag">Selected</span>
        </a>
    </li>
    <li class="fd-tabs__item" role="tab">
        <a class="fd-tabs__link" href="#r0pk3445">Link</a>
    </li>
    <li class="fd-tabs__item" role="tab" aria-disabled="true">
        <a class="fd-tabs__link">Disabled</a>
    </li>
</ul>
`,T=`<p>Lorem ipsum <span class="fd-counter" aria-label="Unread count">5</span> </p>
`,C=`
<span class="fd-counter" aria-label="Unread count">5</span>
<span class="fd-counter" aria-label="Unread count">25</span>
<span class="fd-counter" aria-label="Unread count">101</span>
<span class="fd-counter" aria-label="Unread count">999+</span>
`;const D={title:"Components/Counter",parameters:{description:"Counter can be used as a standalone component or linked to another component. The counter of an item quickly shows how many detail elements are related, without having to navigate to the detail page.",tags:["f3","a11y","development"]}},r=()=>C;r.storyName="Standalone";r.parameters={docs:{description:{story:"A counter with a red badge displayed as a standalone component. "}}};const o=()=>T;o.storyName="Text";o.parameters={docs:{description:{story:"A counter with a red badge can be inserted in the paragraph."}}};const c=()=>A;c.parameters={docs:{description:{story:"A counter and red badge appears in right-hand of the tab item every time a new item is added to the list. The value of the number change as new items are added."}}};const i=()=>S;i.storyName="Notification";i.parameters={docs:{description:{story:"A counter and red badge appears over the upper right-hand corner of the notification icon every time a new notification is added to the list. It displays the number of new notifications."}}};var p,u,m;r.parameters=s(a({},r.parameters),{docs:s(a({},(p=r.parameters)==null?void 0:p.docs),{source:a({originalSource:"() => primaryExampleHtml"},(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source)})});var b,f,h;o.parameters=s(a({},o.parameters),{docs:s(a({},(b=o.parameters)==null?void 0:b.docs),{source:a({originalSource:"() => paragraphExampleHtml"},(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source)})});var g,_,y;c.parameters=s(a({},c.parameters),{docs:s(a({},(g=c.parameters)==null?void 0:g.docs),{source:a({originalSource:"() => tabsExampleHtml"},(y=(_=c.parameters)==null?void 0:_.docs)==null?void 0:y.source)})});var x,N,U;i.parameters=s(a({},i.parameters),{docs:s(a({},(x=i.parameters)==null?void 0:x.docs),{source:a({originalSource:"() => notifierExampleHtml"},(U=(N=i.parameters)==null?void 0:N.docs)==null?void 0:U.source)})});const I=["Primary","Paragraph","Tabs","Notifier"];export{i as Notifier,o as Paragraph,r as Primary,c as Tabs,I as __namedExportsOrder,D as default};
