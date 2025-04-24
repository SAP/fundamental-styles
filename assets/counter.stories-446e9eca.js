/* empty css             *//* empty css               *//* empty css             */const s=`
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
`,r=`<ul class="fd-tabs" role="tablist">
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
`,o=`<p>Lorem ipsum <span class="fd-counter" aria-label="Unread count">5</span> </p>
`,i=`
<span class="fd-counter" aria-label="Unread count">5</span>
<span class="fd-counter" aria-label="Unread count">25</span>
<span class="fd-counter" aria-label="Unread count">101</span>
<span class="fd-counter" aria-label="Unread count">999+</span>
`;const p={title:"Components/Counter",parameters:{description:"Counter can be used as a standalone component or linked to another component. The counter of an item quickly shows how many detail elements are related, without having to navigate to the detail page.",tags:["f3","a11y","development"]}},a=()=>i;a.storyName="Standalone";a.parameters={docs:{description:{story:"A counter with a red badge displayed as a standalone component. "}}};const t=()=>o;t.storyName="Text";t.parameters={docs:{description:{story:"A counter with a red badge can be inserted in the paragraph."}}};const n=()=>r;n.parameters={docs:{description:{story:"A counter and red badge appears in right-hand of the tab item every time a new item is added to the list. The value of the number change as new items are added."}}};const e=()=>s;e.storyName="Notification";e.parameters={docs:{description:{story:"A counter and red badge appears over the upper right-hand corner of the notification icon every time a new notification is added to the list. It displays the number of new notifications."}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => primaryExampleHtml",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => paragraphExampleHtml",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => tabsExampleHtml",...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => notifierExampleHtml",...e.parameters?.docs?.source}}};const u=["Primary","Paragraph","Tabs","Notifier"];export{e as Notifier,t as Paragraph,a as Primary,n as Tabs,u as __namedExportsOrder,p as default};
