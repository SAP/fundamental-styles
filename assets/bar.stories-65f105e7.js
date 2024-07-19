var J=Object.defineProperty,L=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var f=(s,n,e)=>n in s?J(s,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[n]=e,a=(s,n)=>{for(var e in n||(n={}))W.call(n,e)&&f(s,e,n[e]);if(u)for(var e of u(n))Y.call(n,e)&&f(s,e,n[e]);return s},t=(s,n)=>L(s,C(n));/* empty css               *//* empty css             *//* empty css              *//* empty css                         *//* empty css               *//* empty css            *//* empty css              */const P=`
<div style="margin-bottom: 2rem;"></div>
<br>
<div style="position: relative;background: darkgray; height: 400px; width: 70%; margin-inline: auto;">
    <div class="fd-bar fd-bar--floating-footer fd-bar--home-page-xl">
        <div class="fd-bar__right">
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
            </div>
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
            </div>
        </div>
    </div>
</div>`,U=`
<div class="fd-bar fd-bar--footer">
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
        </div>
    </div>
</div>`,A=`
<div class="fd-bar fd-bar--header-with-subheader">
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
<div class="fd-bar fd-bar--subheader">
    <div class="fd-bar__middle">
        <div class="fd-bar__element fd-bar__element--full-width">
            <input class="fd-input fd-input--compact fd-input-group__input" type="text" id="" name="" value="1234568910 " aria-label="input">
        </div>
    </div>
</div>
`,R=`<div class="fd-bar fd-bar--subheader">
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
<div class="fd-bar fd-bar--subheader">
    <div class="fd-bar__middle">
        <div class="fd-bar__element fd-bar__element--full-width">
            <input class="fd-input fd-input--compact fd-input-group__input" type="text" id="" name="" value="1234568910" aria-label="input">
        </div>
    </div>
</div>
`,X=`<div class="fd-bar fd-bar--header">
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
</div>`,j=`<div class="fd-bar fd-bar--responsive-paddings">
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
`,q=`<div class="fd-bar">
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

<div class="fd-bar">
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
`,ta={title:"Components/Bar",parameters:{description:`The bar component is a container that holds titles, buttons and input controls. Its contents are distributed into three areas: left, middle and right. This component’s primary function is to display page **headers** and **footers**. It is mainly used to construct a **Page**, and acts as a building block for other components like **Dialog**, **Popover** etc. A bar can be designed as an Header, Subheader, Fixed Footer or Floating Footer. <br><br>

**The bar component has two modes:**

- Compact
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

| **Padding** | &nbsp;&nbsp; **Amount** | **Modifier class** |
| :--------- | ----------: | :----------------------- | ---------------: |
| S / SM      | &nbsp;&nbsp; 1rem | \`fd-bar--page-s\` **or** \`fd-bar--page-sm\` |
| S / SM      | &nbsp;&nbsp; 1rem | \`fd-bar--home-page-s\` **or** \`fd-bar--home-page-sm\` |
| M_L / MD_LG | &nbsp;&nbsp; 2rem | \`fd-bar--page-m_l\` **or** \`fd-bar--page-md_lg\` |
| M_L / MD_LG | &nbsp;&nbsp; 2rem | \`fd-bar--home-page-m_l\` **or** \`fd-bar--home-page-md_lg\` |
| XL          | &nbsp;&nbsp; 3rem | \`fd-bar--page-xl\` |
| XL          | &nbsp;&nbsp; 3rem | \`fd-bar--home-page-xl\` |
        `,tags:["v1"]}},o=()=>q;o.parameters={docs:{story:{},description:{story:"The default bar contains a back button, page title, segmented button and product switch button."}}};const i=()=>j;i.parameters={docs:{story:{},description:{story:"Responsive paddings can be added to the Bar component with the `fd-bar--responsive-paddings` modifier class. The value of the paddings will automatically change depending on the screen size."}}};const r=()=>X;r.parameters={docs:{story:{},description:{story:"For Bar designed as a **Header** add the `fd-bar--header` modifier class to the `fd-bar` base class."}}};const d=()=>R;d.parameters={docs:{story:{},description:{story:"For Bar designed as a **Subheader** add the `fd-bar--subheader` modifier class to the `fd-bar` base class."}}};const l=()=>A;l.parameters={docs:{story:{},description:{story:"When combining Header + Subheader underneath only the subheader will get the shadow and not the header. For this type of Bar design use the `fd-bar--header-with-subheader` modifier class. "}}};const b=()=>U;b.parameters={docs:{story:{},description:{story:"The **Footer** design is achieved by adding the `fd-bar--footer` modifier class to the `fd-bar` base class."}}};const c=()=>P;c.parameters={docs:{story:{},description:{story:"The **Floating Footer** floats above the page at the bottom of the screen and is always visible when scrolling. For this type of Bar design add the `fd-bar--floating-footer` modifier class to the `fd-bar` base class."}}};var p,m,v;o.parameters=t(a({},o.parameters),{docs:t(a({},(p=o.parameters)==null?void 0:p.docs),{source:a({originalSource:"() => defaultExampleHtml"},(v=(m=o.parameters)==null?void 0:m.docs)==null?void 0:v.source)})});var h,g,_;i.parameters=t(a({},i.parameters),{docs:t(a({},(h=i.parameters)==null?void 0:h.docs),{source:a({originalSource:"() => responsiveExampleHtml"},(_=(g=i.parameters)==null?void 0:g.docs)==null?void 0:_.source)})});var y,x,w;r.parameters=t(a({},r.parameters),{docs:t(a({},(y=r.parameters)==null?void 0:y.docs),{source:a({originalSource:"() => headerExampleHtml"},(w=(x=r.parameters)==null?void 0:x.docs)==null?void 0:w.source)})});var H,S,F;d.parameters=t(a({},d.parameters),{docs:t(a({},(H=d.parameters)==null?void 0:H.docs),{source:a({originalSource:"() => subheaderExampleHtml"},(F=(S=d.parameters)==null?void 0:S.docs)==null?void 0:F.source)})});var E,D,k;l.parameters=t(a({},l.parameters),{docs:t(a({},(E=l.parameters)==null?void 0:E.docs),{source:a({originalSource:"() => headerWithSubheaderExampleHtml"},(k=(D=l.parameters)==null?void 0:D.docs)==null?void 0:k.source)})});var T,B,M;b.parameters=t(a({},b.parameters),{docs:t(a({},(T=b.parameters)==null?void 0:T.docs),{source:a({originalSource:"() => footerExampleHtml"},(M=(B=b.parameters)==null?void 0:B.docs)==null?void 0:M.source)})});var z,G,I;c.parameters=t(a({},c.parameters),{docs:t(a({},(z=c.parameters)==null?void 0:z.docs),{source:a({originalSource:"() => floatingFooterExampleHtml"},(I=(G=c.parameters)==null?void 0:G.docs)==null?void 0:I.source)})});const na=["Default","Responsive","Header","Subheader","HeaderWithSubheader","Footer","FloatingFooter"];export{o as Default,c as FloatingFooter,b as Footer,r as Header,l as HeaderWithSubheader,i as Responsive,d as Subheader,na as __namedExportsOrder,ta as default};
