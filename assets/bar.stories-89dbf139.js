/* empty css               *//* empty css             *//* empty css              *//* empty css                         *//* empty css               *//* empty css            *//* empty css              */const F=`
<div style="margin-bottom: 2rem;"><b>Default (desktop)</b></div>
<br>
<div style="position: relative;">
    <div class="fd-bar fd-bar--floating-footer">
        <div class="fd-bar__right">
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
            </div>
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
            </div>
        </div>
    </div>
</div>
<br><br>
<div style="margin-bottom: 2rem;"><b>Cozy (tablet and mobile)</b></div>
<br>
<div style="position: relative;">
    <div class="fd-bar fd-bar--floating-footer fd-bar--cozy">
        <div class="fd-bar__right">
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--emphasized">Save</button>
            </div>
            <div class="fd-bar__element">
                <button aria-label="button" class="fd-button fd-button--transparent">Cancel</button>
            </div>
        </div>
    </div>
</div>
`,G=`
<div><b>Default (desktop)</b></div>
<br>
<div class="fd-bar fd-bar--footer">
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
        </div>
    </div>
</div>
<br><br>
<div><b>Cozy (tablet and mobile)</b></div>
<br>
<div class="fd-bar fd-bar--footer fd-bar--cozy">
    <div class="fd-bar__right">
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--emphasized">Save</button>
        </div>
        <div class="fd-bar__element">
            <button aria-label="button" class="fd-button fd-button--transparent">Cancel</button>
        </div>
    </div>
</div>
`,J=`
<div><b>Default (desktop)</b></div>
<br>
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
`,Y=`
<div><b>Default (desktop)</b></div>
<br>
<div class="fd-bar fd-bar--subheader">
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
<div><b>Cozy (tablet and mobile)</b></div>
<br>
<div class="fd-bar fd-bar--subheader fd-bar--cozy">
    <div class="fd-bar__middle">
        <div class="fd-bar__element">
            <div class="fd-form-item">
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
    </div>
</div>
<br><br>
<div><b>Full width element</b></div>
<br>
<div class="fd-bar fd-bar--subheader fd-bar--cozy">
    <div class="fd-bar__middle">
        <div class="fd-bar__element fd-bar__element--full-width">
            <input class="fd-input fd-input--compact fd-input-group__input" type="text" id="" name="" value="1234568910" aria-label="input">
        </div>
    </div>
</div>
`,L=`
<div><b>Default (desktop)</b></div>
<br>
<div class="fd-bar fd-bar--header">
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
<br><br>
<div><b>Cozy (tablet and mobile)</b></div>
<br>
<div class="fd-bar fd-bar--header fd-bar--cozy">
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
`,M=`<div class="fd-bar fd-bar--responsive-paddings">
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
`,P=`<div class="fd-bar fd-bar--cozy">
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
`,U=`
<p><b>Compact bar with compact elements</b></p>
<div class="fd-bar">
    <div class="fd-bar__left">
        <div class="fd-bar__element">
            <h5 class="fd-title fd-title--h5" aria-label="text">TEXT</h5>
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
`,O={title:"Components/Bar",parameters:{description:`The bar component is a container that holds titles, buttons and input controls. Its contents are distributed into three areas: left, middle and right. This component’s primary function is to display page **headers** and **footers**. It is mainly used to construct a **Page**, and acts as a building block for other components like **Dialog**, **Popover** etc.
        <br><br>

**The bar component has two modes:**

- Default (desktop)
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
| S | &nbsp;&nbsp; 1rem | \`--page-s\` |
| S | &nbsp;&nbsp; 1rem | \`--home-page-s\` |
| M_L | &nbsp;&nbsp; 2rem | \`--page-m_l\` |
| M_L | &nbsp;&nbsp; 2rem | \`--home-page-m_l\` |
| XL | &nbsp;&nbsp; 3rem | \`--page-xl\` |
| XL | &nbsp;&nbsp; 3rem | \`--home-page-xl\` |
        `,tags:["f3","a11y","theme"]}},a=()=>U;a.parameters={docs:{story:{iframeHeight:200},description:{story:"The default bar contains a back button, page title, segmented button and product switch button. It can be displayed by using the `fd-bar` class, and is responsive to desktop screen sizes. The default bar is in compact mode."}}};const t=()=>P;t.parameters={docs:{story:{iframeHeight:100},description:{story:"The cozy bar contains a back button, icon buttons, segmented button and product switch button. It is responsive to tablet and mobile screen sizes. To apply cozy mode, add the `--cozy` modifier class to the container element."}}};const n=()=>M;n.parameters={docs:{story:{iframeHeight:100},description:{story:"The bar can be made responsive with the `--responsive-paddings` modifier class. The paddings will automatically change with the screen size."}}};const e=()=>L;e.parameters={docs:{story:{iframeHeight:350},description:{story:"The header bar contains actions that impact the entire page. It can be displayed by adding the `--header` modifier class to the container element."}}};const s=()=>Y;s.parameters={docs:{story:{iframeHeight:450},description:{story:"To change the header bar into a subheader, add the `--subheader` modifier class to the container element."}}};const o=()=>J;o.parameters={docs:{story:{iframeHeight:250},description:{story:"To add a subheader under a header bar, the container element should have the `--header-with-subheader` modifier class, which will remove the element’s box shadow."}}};const i=()=>G;i.parameters={docs:{story:{iframeHeight:150},description:{story:"The footer bar should display only closing and finalizing action buttons that impact the entire page such as *Save* or *Cancel*. It can be displayed by adding the `--footer` modifier class to the container element."}}};const d=()=>F;d.parameters={docs:{story:{iframeHeight:150},description:{story:"The floating footer bar should also display only finalizing action buttons that impact the entire page. This type floats above the page at the bottom of the screen and is always visible when scrolling. It can be displayed by adding the `--floating-footer` modifier class to the container element."}}};var r,l,b;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:"() => defaultExampleHtml",...(b=(l=a.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};var c,u,f;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"() => cozyExampleHtml",...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var p,m,v;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:"() => responsiveExampleHtml",...(v=(m=n.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var h,g,_;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:"() => headerExampleHtml",...(_=(g=e.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var y,x,z;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:"() => subheaderExampleHtml",...(z=(x=s.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var H,w,S;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:"() => headerWithSubheaderExampleHtml",...(S=(w=o.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var D,E,k;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:"() => footerExampleHtml",...(k=(E=i.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var T,C,I;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:"() => floatingFooterExampleHtml",...(I=(C=d.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const K=["Default","Cozy","Responsive","Header","Subheader","HeaderWithSubheader","Footer","FloatingFooter"];export{t as Cozy,a as Default,d as FloatingFooter,i as Footer,e as Header,o as HeaderWithSubheader,n as Responsive,s as Subheader,K as __namedExportsOrder,O as default};
//# sourceMappingURL=bar.stories-89dbf139.js.map
