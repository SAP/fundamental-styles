/* empty css             *//* empty css               *//* empty css             */const h=`
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
`,g=`<ul class="fd-tabs" role="tablist">
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
`,_=`<p>Lorem ipsum <span class="fd-counter" aria-label="Unread count">5</span> </p>
`,y=`
<span class="fd-counter" aria-label="Unread count">5</span>
<span class="fd-counter" aria-label="Unread count">25</span>
<span class="fd-counter" aria-label="Unread count">101</span>
<span class="fd-counter" aria-label="Unread count">999+</span>
`;const k={title:"Components/Counter",parameters:{description:"Counter can be used as a standalone component or linked to another component. The counter of an item quickly shows how many detail elements are related, without having to navigate to the detail page.",tags:["f3","a11y","development"]}},a=()=>y;a.storyName="Standalone";a.parameters={docs:{description:{story:"A counter with a red badge displayed as a standalone component. "}}};const t=()=>_;t.storyName="Text";t.parameters={docs:{description:{story:"A counter with a red badge can be inserted in the paragraph."}}};const n=()=>g;n.parameters={docs:{description:{story:"A counter and red badge appears in right-hand of the tab item every time a new item is added to the list. The value of the number change as new items are added."}}};const e=()=>h;e.storyName="Notification";e.parameters={docs:{description:{story:"A counter and red badge appears over the upper right-hand corner of the notification icon every time a new notification is added to the list. It displays the number of new notifications."}}};var s,r,o;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:"() => primaryExampleHtml",...(o=(r=a.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var i,c,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"() => paragraphExampleHtml",...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,p,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"() => tabsExampleHtml",...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,b,f;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"() => notifierExampleHtml",...(f=(b=e.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const w=["Primary","Paragraph","Tabs","Notifier"];export{e as Notifier,t as Paragraph,a as Primary,n as Tabs,w as __namedExportsOrder,k as default};
//# sourceMappingURL=counter.stories-88918f0f.js.map
