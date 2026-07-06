/* empty css               *//* empty css             *//* empty css              *//* empty css                         *//* empty css               *//* empty css            *//* empty css              */const i=`
<div style="margin-bottom: 2rem;"></div>
<br>
<div style="position: relative;background: darkgray; height: 400px; width: 70%; margin-inline: auto;">
    <div class="fd-bar fd-bar--floating-footer fd-bar--home-page-xl" role="toolbar" aria-label="Floating Footer">
        <div class="fd-bar__right">
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
            </div>
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
            </div>
        </div>
    </div>
</div>`,d=`
<div class="fd-bar fd-bar--footer" role="toolbar" aria-label="Footer">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            Footer Text
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
        </div>
    </div>
</div>`,l=`
<div class="fd-bar fd-bar--header-with-subheader" role="toolbar" aria-label="Header">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">
                <i class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">
                <i class="sap-icon--home"></i>
            </button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">
                <i class="sap-icon--account"></i>
            </button>
        </div>
    </div>
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-segmented-button" role="group" aria-label="Group label">
                <button aria-label="button" class="fd-button fd-button--compact fd-button--toggled" aria-pressed="true">
                    <i class="sap-icon--email"></i>
                </button>
                <button aria-label="button" class="fd-button fd-button--compact" aria-pressed="false">
                    <i class="sap-icon--iphone"></i>
                </button>
                <button aria-label="button" class="fd-button fd-button--compact" aria-pressed="false">
                    <i class="sap-icon--notification-2"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span
                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
                style="background-image: url('/assets/images/avatars/1.svg')"
                role="img" aria-label="John Doe"></span>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">
                <i class="sap-icon--grid"></i>
            </button>
        </div>
    </div>
</div>
<div class="fd-bar fd-bar--subheader" role="toolbar" aria-label="Subheader">
    <div class="fd-bar__middle">
        <div class="fd-bar__element fd-bar__element--full-width">
            <input class="fd-input fd-input--compact fd-input-group__input" type="text" id="" name="" value="1234568910 " aria-label="input">
        </div>
    </div>
</div>
`,b=`<div class="fd-bar fd-bar--subheader" role="toolbar" aria-label="Subheader">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">
                <i class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">
                <i class="sap-icon--home"></i>
            </button>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span
                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
                style="background-image: url('/assets/images/avatars/1.svg')"
                role="img" aria-label="John Doe"></span>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--compact fd-button--transparent">
                <i class="sap-icon--grid"></i>
            </button>
        </div>
    </div>
</div>

<br><br>
<div><b>Full width element</b></div>
<br>
<div class="fd-bar fd-bar--subheader" role="toolbar" aria-label="Subheader">
    <div class="fd-bar__middle">
        <div class="fd-bar__element fd-bar__element--full-width">
            <input class="fd-input fd-input--compact fd-input-group__input" type="text" id="" name="" value="1234568910" aria-label="input">
        </div>
    </div>
</div>
`,c=`<div class="fd-bar fd-bar--header" role="toolbar" aria-label="Header">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent">
                <i class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent">
                <i class="sap-icon--home"></i>
            </button>
        </div>
        <div class="fd-bar__element">
            Header Text
        </div>
    </div>
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-segmented-button" role="group" aria-label="Group label">
                <button aria-label="button" class="fd-button fd-button--toggled" aria-pressed="true">
                    <i class="sap-icon--email"></i>
                </button>
                <button aria-label="button" class="fd-button" aria-pressed="false">
                    <i class="sap-icon--iphone"></i>
                </button>
                <button aria-label="button" class="fd-button" aria-pressed="false">
                    <i class="sap-icon--notification-2"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span
                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
                style="background-image: url('/assets/images/avatars/1.svg')"
                role="img" aria-label="John Doe"></span>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent">
                <i class="sap-icon--grid"></i>
            </button>
        </div>
    </div>
</div>`,u=`<div class="fd-bar fd-bar--responsive-paddings" role="toolbar" aria-label="Responsive Bar">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent">
                <i class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent">
                <i class="sap-icon--home"></i>
            </button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent">
                <i class="sap-icon--account"></i>
            </button>
        </div>
    </div>
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-segmented-button" role="group" aria-label="Group label">
                <button aria-label="button" class="fd-button fd-button--toggled" aria-pressed="true">
                    <i class="sap-icon--email"></i>
                </button>
                <button aria-label="button" class="fd-button" aria-pressed="false">
                    <i class="sap-icon--iphone"></i>
                </button>
                <button aria-label="button" class="fd-button" aria-pressed="false">
                    <i class="sap-icon--notification-2"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span
                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
                style="background-image: url('/assets/images/avatars/1.svg')"
                role="img" aria-label="John Doe"></span>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent">
                <i class="sap-icon--grid"></i>
            </button>
        </div>
    </div>
</div>
`,f=`<div class="fd-bar" role="toolbar" aria-label="Bar">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <h5 class="fd-title fd-title--h5" aria-label="text">TEXT</h5>
        </div>
    </div>
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-segmented-button" role="group" aria-label="Group label">
                <button aria-label="button" class="fd-button fd-button--toggled" aria-pressed="true">
                    <i class="sap-icon--email"></i>
                </button>
                <button aria-label="button" class="fd-button" aria-pressed="false">
                    <i class="sap-icon--iphone"></i>
                </button>
                <button aria-label="button" class="fd-button" aria-pressed="false">
                    <i class="sap-icon--notification-2"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
        <span
            class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
            style="background-image: url('/assets/images/avatars/1.svg')"
            role="img" aria-label="John Doe"></span>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent">
                <i class="sap-icon--grid"></i>
            </button>
        </div>
    </div>
</div>

<br><br>

<div class="fd-bar" role="toolbar" aria-label="Bar">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent">
                <i class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent">
                <i class="sap-icon--home"></i>
            </button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent">
                <i class="sap-icon--account"></i>
            </button>
        </div>
    </div>
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-segmented-button" role="group" aria-label="Group label">
                <button aria-label="button" class="fd-button fd-button--toggled" aria-pressed="true">
                    <i class="sap-icon--email"></i>
                </button>
                <button aria-label="button" class="fd-button" aria-pressed="false">
                    <i class="sap-icon--iphone"></i>
                </button>
                <button aria-label="button" class="fd-button" aria-pressed="false">
                    <i class="sap-icon--notification-2"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <span
                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
                style="background-image: url('/assets/images/avatars/1.svg')"
                role="img" aria-label="John Doe"></span>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent">
                <i class="sap-icon--grid"></i>
            </button>
        </div>
    </div>
</div>
`,x={title:"Components/Bar",parameters:{description:`The Bar is a container primarily used for displaying titles, buttons, and input controls. It serves as the foundational design and functionality for page headers, footers, dialogs, and popovers that require a header and/or footer. A header can consist of just a title or a title with a navigation button (back or home) at the front. A subheader can also be included in the header design. Footers can be either fixed or floating. The buttons in the footer are intended for finalizing actions, following a primary-to-tertiary hierarchy, and should be positioned in the right area. <br><br>

**The bar component has two modes:**

- Compact (default, desktop)
- Cozy (tablet and mobile)

## Usage
### Header
**Use the header bar if:**

- Your page contains several controls, and the actions are valid for the entire page.

**Do not use the header bar if:**

- You have closing or finalizing actions for the whole page. In this case, use a footer instead.

### Footer
**Use the footer bar if:**

- You have closing or finalizing actions on your page that apply to the whole page.

**Do not use the footer bar if:**

- You have different containers on your page (such as charts, tables, and forms) and the action influences only certain items. In this case, place the action as close to the corresponding item(s) as possible.
- You have global actions (such as *Edit* or *Delete*) that are not finalizing or closing actions. In this case, use a header instead.


### Buttons
- Use only icon buttons **or** text buttons. Icon and text should not be combined into one button.
- Buttons are sorted by usage i.e. from frequently-used to seldomly-used.

## Paddings

Modifier classes are available to adjust the paddings of the bar when it is being used in the \`fd-page\`. Alternatively the \`--responsive-paddings\` modifier may be used to apply this styles automatically.

| **Padding**     | &nbsp;&nbsp; **Amount** | **Modifier class** |
| :-------------- | ----------------: | :----------------------- | ---------------: |
| \`s / sm\`      | &nbsp;&nbsp; 1rem | \`fd-bar--page-s\` **or** \`fd-bar--page-sm\` |
| \`s / sm\`      | &nbsp;&nbsp; 1rem | \`fd-bar--home-page-s\` **or** \`fd-bar--home-page-sm\` |
| \`m_l / md_lg\` | &nbsp;&nbsp; 2rem | \`fd-bar--page-m_l\` **or** \`fd-bar--page-md_lg\` |
| \`m_l / md_lg\` | &nbsp;&nbsp; 2rem | \`fd-bar--home-page-m_l\` **or** \`fd-bar--home-page-md_lg\` |
| \`xl \`         | &nbsp;&nbsp; 3rem | \`fd-bar--page-xl\` |
| \`xl\`          | &nbsp;&nbsp; 3rem | \`fd-bar--home-page-xl\` |
        `,tags:[]}},a=()=>f;a.parameters={docs:{story:{},description:{story:"The default bar contains a back button, page title, segmented button and product switch button."}}};const t=()=>u;t.parameters={docs:{story:{},description:{story:"Responsive paddings can be added to the Bar component with the `fd-bar--responsive-paddings` modifier class. The value of the paddings will automatically change depending on the screen size."}}};const n=()=>c;n.parameters={docs:{story:{},description:{story:"For Bar designed as a **Header** add the `fd-bar--header` modifier class to the `fd-bar` base class."}}};const e=()=>b;e.parameters={docs:{story:{},description:{story:"For Bar designed as a **Subheader** add the `fd-bar--subheader` modifier class to the `fd-bar` base class."}}};const s=()=>l;s.parameters={docs:{story:{},description:{story:"When combining Header + Subheader underneath only the subheader will get the shadow and not the header. For this type of Bar design use the `fd-bar--header-with-subheader` modifier class. "}}};const o=()=>d;o.parameters={docs:{story:{},description:{story:"The **Footer** design is achieved by adding the `fd-bar--footer` modifier class to the `fd-bar` base class."}}};const r=()=>i;r.parameters={docs:{story:{},description:{story:"The **Floating Footer** floats above the page at the bottom of the screen and is always visible when scrolling. For this type of Bar design add the `fd-bar--floating-footer` modifier class to the `fd-bar` base class."}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => defaultExampleHtml",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => responsiveExampleHtml",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => headerExampleHtml",...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => subheaderExampleHtml",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => headerWithSubheaderExampleHtml",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"() => footerExampleHtml",...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"() => floatingFooterExampleHtml",...r.parameters?.docs?.source}}};const w=["Default","Responsive","Header","Subheader","HeaderWithSubheader","Footer","FloatingFooter"];export{a as Default,r as FloatingFooter,o as Footer,n as Header,s as HeaderWithSubheader,t as Responsive,e as Subheader,w as __namedExportsOrder,x as default};
