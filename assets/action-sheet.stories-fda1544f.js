/* empty css               *//* empty css             *//* empty css                     *//* empty css                *//* empty css               */const c=`<div style="width: 350px; height: 600px; position: relative">
    <button class="fd-button fd-button--transparent"
            aria-label="More Options" aria-controls="actionSheetPhone" aria-expanded="true"
            aria-haspopup="true" onclick="toggleClass('actionSheetPhone', 'fd-action-sheet__wrapper--active');">
        <i class="sap-icon--settings"></i>
    </button>
    <div class="fd-action-sheet__wrapper fd-action-sheet__wrapper--active" id="actionSheetPhone">
        <h6 class="fd-action-sheet__title">Press cancel to hide action sheet</h6>
        <ul class="fd-action-sheet fd-action-sheet--mobile" role="list" aria-label="List of contextual options">
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--attachment"></i>
                    <span class="fd-button__text">Upload file</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--add"></i>
                    <span class="fd-button__text">Assign user</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--print"></i>
                    <span class="fd-button__text">Print</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--download"></i>
                    <span class="fd-button__text">Download</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left"
                        onclick="toggleClass('actionSheetPhone', 'fd-action-sheet__wrapper--active');">
                    <span class="fd-button__text">Decide Later</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--negative"
                        onclick="toggleClass('actionSheetPhone', 'fd-action-sheet__wrapper--active');">
                    <span class="fd-button__text">Cancel</span>
                </button>
            </li>
        </ul>
    </div>
</div>
`,d=`
<div class="fd-popover">
    <div class="fd-popover__control">
        <button class="fd-button fd-button--transparent"
                aria-label="More Options" aria-controls="actionSheetTablet" aria-expanded="true"
                aria-haspopup="true" onclick="onPopoverClick('actionSheetTablet');">
            <i class="sap-icon--settings"></i>
        </button>
    </div>
    <div class="fd-popover__body" aria-hidden="false" id="actionSheetTablet">
        <ul class="fd-action-sheet" role="list" aria-label="List of contextual options">
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--attachment"></i>
                    <span class="fd-button__text">Upload file</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--add"></i>
                    <span class="fd-button__text">Assign user</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--print"></i>
                    <span class="fd-button__text">Print</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left">
                    <i class="sap-icon--download"></i>
                    <span class="fd-button__text">Download</span>
                </button>
            </li>
            <li class="fd-action-sheet__item" role="listitem">
                <button class="fd-button fd-button--full-width fd-button--transparent fd-button--text-alignment-left"
                        onclick="onPopoverClick('actionSheetTablet');">
                    <span class="fd-button__text">Decide Later</span>
                </button>
            </li>
        </ul>
    </div>
</div>
<div style="height: 300px"></div>
`,h={title:"Components/Action Sheet",parameters:{description:`
An action sheet consists of a list of options a user can select from to complete an action. Actions can be
clustered if there is not enough space on the screen.

## Usage

**Use the action sheet if:**

- You need an option that provides more than one action.
- It is really important that the user stays in context on a phone.
- You only have a small number of actions.

**Do not use the action sheet if:**

- The menu provides only one option. In this case, consider using a **Button** instead.
- You need to show a hierarchical menu. In this case, use the menu button instead.
- Your users would benefit more from a split button, which offers an easily-accessible default action, with the option to include additional actions.

**Note:** The action sheet should be used in compact mode if targeting desktop users.

        `,tags:["a11y","f3","theme","responsive"]}},n=()=>d;n.parameters={docs:{story:{iframeHeight:300}}};const t=()=>c;t.parameters={docs:{story:{iframeHeight:800},description:{story:"To display the action sheet on mobile screens,\n        the container requires a `fd-action-sheet--mobile` modifier class and is additionally wrapped by `fd-action-sheet__wrapper`."}}};t.storyName="Mobile";var e,o,s;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:"() => defaultExampleHtml",...(s=(o=n.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var a,i,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:"() => actionSheetMobileExampleHtml",...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const m=["Default","ActionSheetMobile"];export{t as ActionSheetMobile,n as Default,m as __namedExportsOrder,h as default};
//# sourceMappingURL=action-sheet.stories-fda1544f.js.map
