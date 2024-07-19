var H=Object.defineProperty,N=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var p=(n,s,t)=>s in n?H(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t,e=(n,s)=>{for(var t in s||(s={}))k.call(s,t)&&p(n,t,s[t]);if(l)for(var t of l(s))F.call(s,t)&&p(n,t,s[t]);return n},a=(n,s)=>N(n,q(s));/* empty css                     *//* empty css             *//* empty css               *//* empty css             */const P=`<div style="height: 600px; width: 100%;">
    <div class="fd-message-page">
        <div class="fd-message-page__container">
            <div class="fd-message-page__icon-container">
                <i role="presentation" class="sap-icon--documents fd-message-page__icon"></i>
            </div>
            <div role="status" aria-live="polite" class="fd-message-page__content">
                <div class="fd-message-page__title">
                    Sorry, we can't find the page
                </div>
                <div class="fd-message-page__subtitle">
                    <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.
                    <i>Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</i>
                </div>
                <div class="fd-message-page__actions">
                    <button
                        class="fd-button fd-button--emphasized"
                        style="margin: 0 0.25rem;">
                        Contact Support
                    </button>
                    <button class="fd-button">Reload Page</button>
                </div>
                <div class="fd-message-page__more">
                    <button
                        class="fd-button fd-button--transparent">
                        Show Details
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
`,C=`<div style="height: 600px; width: 100%;">
    <div class="fd-message-page">
        <div class="fd-message-page__container">
            <div class="fd-message-page__icon-container">
                <i role="presentation" class="sap-icon--document fd-message-page__icon"></i>
            </div>
            <div role="status" aria-live="polite" class="fd-message-page__content">
                <div class="fd-message-page__title">
                    Sorry, we can’t find this page.
                </div>
                <div class="fd-message-page__subtitle">
                    <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">Home Page</span></a>
                </div>
            </div>
        </div>
    </div>
</div>
`,M=`<div style="height: 600px; width: 100%;">
    <div class="fd-message-page">
        <div class="fd-message-page__container">
            <div class="fd-message-page__icon-container">
                <i role="presentation" class="sap-icon--product fd-message-page__icon"></i>
            </div>
            <div role="status" aria-live="polite" class="fd-message-page__content">
                <div class="fd-message-page__title">
                    No items are currently available.
                </div>
            </div>
        </div>
    </div>
</div>
`,B=`<div style="height: 600px; width: 100%;">
    <div class="fd-message-page">
        <div class="fd-message-page__container">
            <div class="fd-message-page__icon-container">
                <i role="presentation" class="sap-icon--search fd-message-page__icon"></i>
            </div>
            <div role="status" aria-live="polite" class="fd-message-page__content">
                <div class="fd-message-page__title">
                    No matching items found.
                </div>
            </div>
        </div>
    </div>
</div>
`,D=`<div style="height: 600px; width: 100%;">
    <div class="fd-message-page">
        <div class="fd-message-page__container">
            <div class="fd-message-page__icon-container">
                <i role="presentation" class="sap-icon--filter fd-message-page__icon"></i>
            </div>
            <div role="status" aria-live="polite" class="fd-message-page__content">
                <div class="fd-message-page__title">
                    No matching items found.
                </div>
                <div class="fd-message-page__subtitle">
                    Check the filter settings.
                </div>
            </div>
        </div>
    </div>
</div>
`,O={title:"Components/Message Page",parameters:{description:`Message page displays a message to the user when an app or list is empty or if an error has occurred. The text and icon on the message page changes depending on the use case, however, the layout stays the same. It is responsive and adjusts to fit the available screen space.

**The message page can be used in the following situations:**

- Filter with no results
- Search with no results
- Empty app
- Too many items
- Item saved as a tile that is no longer available
- Error

##Guidelines
- The icon is mandatory and can vary depending on the message. The default icon is \`.sap-icon--documents\`.
- The title is also mandatory. Add a description with further details if needed.
- The message should be as concise as possible.
        `,tags:["f3","a11y","theme","development"]}},r=()=>D;r.parameters={docs:{description:{story:"The filter message page is displayed when the user has set a filter and there are no results. This message then prompts the user to remove or re-evaluate the filter they set for the page. It is mandatory to use the `.sap-icon--filter`  icon.\n    "}}};const d=()=>B;d.parameters={docs:{description:{story:"The search message page is displayed when a user has searched for something, but there are no results for that inquiry. It is mandatory to use the `.sap-icon--search` icon.\n    "}}};const i=()=>M;i.storyName="No items";i.parameters={docs:{description:{story:"Message page displays a message indicating that there are no items when the user attempts to view a page that is supposed to contain items, but they are either not available or do not exist. It is mandatory to use either the `.sap-icon--product` icon, or another icon that matches your use case.\n        "}}};const c=()=>C;c.parameters={docs:{description:{story:"The error message page is displayed when the user attempts to view a page but an error has occurred, resulting in no available content. If you can, provide a link to the app start screen in the error message. It is mandatory to use the `.sap-icon--document` icon.\n    "}}};const o=()=>P;o.storyName="Formatted text and buttons";o.parameters={docs:{description:{story:`The message page with formatted text and buttons is useful for when you want to add formatted text (bold, italic, underline and/or bullet points) and buttons to the action area. It's highly recommended not to add more than two buttons.
    `}}};var m,g,u;r.parameters=a(e({},r.parameters),{docs:a(e({},(m=r.parameters)==null?void 0:m.docs),{source:e({originalSource:"() => filterExampleHtml"},(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source)})});var h,v,f;d.parameters=a(e({},d.parameters),{docs:a(e({},(h=d.parameters)==null?void 0:h.docs),{source:e({originalSource:"() => searchExampleHtml"},(f=(v=d.parameters)==null?void 0:v.docs)==null?void 0:f.source)})});var _,y,b;i.parameters=a(e({},i.parameters),{docs:a(e({},(_=i.parameters)==null?void 0:_.docs),{source:e({originalSource:"() => noItemsExampleHtml"},(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source)})});var x,w,E;c.parameters=a(e({},c.parameters),{docs:a(e({},(x=c.parameters)==null?void 0:x.docs),{source:e({originalSource:"() => errorExampleHtml"},(E=(w=c.parameters)==null?void 0:w.docs)==null?void 0:E.source)})});var I,S,T;o.parameters=a(e({},o.parameters),{docs:a(e({},(I=o.parameters)==null?void 0:I.docs),{source:e({originalSource:"() => buttonsExampleHtml"},(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source)})});const R=["Filter","Search","NoItems","Error","Buttons"];export{o as Buttons,c as Error,r as Filter,i as NoItems,d as Search,R as __namedExportsOrder,O as default};
