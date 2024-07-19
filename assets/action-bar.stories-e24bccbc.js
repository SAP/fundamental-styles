var R=Object.defineProperty,X=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var f=(s,n,e)=>n in s?R(s,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[n]=e,t=(s,n)=>{for(var e in n||(n={}))C.call(n,e)&&f(s,e,n[e]);if(u)for(var e of u(n))Y.call(n,e)&&f(s,e,n[e]);return s},a=(s,n)=>X(s,O(n));/* empty css               *//* empty css             *//* empty css              *//* empty css             *//* empty css                */const U=`<div style="width:319px;">
    <div class="fd-action-bar fd-action-bar--s">
        <div class="fd-action-bar__header">
            <div class="fd-action-bar__back">
                <button aria-label="Go Back" class="fd-button fd-button--transparent">
                    <i role="presentation" class="sap-icon--navigation-left-arrow"></i>
                </button>
            </div>
            <div class="fd-action-bar__title">
                <h1 class="fd-title fd-title--h3">Action Bar with description and back button</h1>
            </div>
            <div class="fd-action-bar__actions">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <button class="fd-button fd-button--transparent" onclick="onPopoverClick('wgxzK85');"
                        aria-controls="wgxzK85" aria-haspopup="true" aria-expanded="true" aria-label="More">
                            <i class="sap-icon--overflow"></i>
                        </button>
                    </div>
                    <div class="fd-popover__body fd-popover__body--right" aria-hidden="false" id="wgxzK85">
                        <nav class="fd-menu" id="">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a class="fd-menu__link" href="#">
                                        <span class="fd-menu__title">Option 1</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a class="fd-menu__link" href="#">
                                        <span class="fd-menu__title">Option 2</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a class="fd-menu__link" href="#">
                                        <span class="fd-menu__title">Option 3</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a class="fd-menu__link" href="#">
                                        <span class="fd-menu__title">Option 4</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div style="min-height: 200px"></div>
`,q=`<div class=" fd-action-bar fd-action-bar--xl">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <button aria-label="Go Back" class="fd-button fd-button--transparent">
                <i role="presentation" class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>
        <div class="fd-action-bar__title">
            <h1 class="fd-title fd-title--h3">Page Title</h1>
        </div>
        <div class="fd-action-bar__actions">
            <button aria-label="button" class="fd-button">Button</button>
            <button aria-label="button" class="fd-button fd-button--emphasized">Button</button>
        </div>
    </div>
    <p class="fd-action-bar__description fd-action-bar__description--back">Action bar Description </p>
</div>
`,I=`<div class="fd-action-bar fd-action-bar--m_l">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <button aria-label="Go Back" class="fd-button fd-button--transparent">
                <i role="presentation" class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>
        <div class="fd-action-bar__title">
            <h1 class="fd-title fd-title--h3">Page Title</h1>
        </div>
        <div class="fd-action-bar__actions">
            <button aria-label="button"class="fd-button">Button</button>
            <button aria-label="button"class="fd-button fd-button--emphasized">Button</button>
        </div>
    </div>
    <p class="fd-action-bar__description fd-action-bar__description--back">Action bar Description</p>
</div>
`,F=`<div class="fd-action-bar">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__title">
            <h1 class="fd-title fd-title--h3">Page Title</h1>
        </div>
        <div class="fd-action-bar__actions">
            <div class="fd-popover">
                <div class="fd-popover__control">
                    <button class="fd-button fd-button--transparent"
                    aria-controls="wgxzK859" aria-haspopup="true" aria-expanded="true" aria-label="More"
                    onclick="onPopoverClick('wgxzK859');">
                        <i class="sap-icon--overflow"></i>
                    </button>
                </div>
                <div class="fd-popover__body fd-popover__body--right" aria-hidden="false" id="wgxzK859">
                    <nav class="fd-menu" id="">
                        <ul class="fd-menu__list fd-menu__list--no-shadow">
                            <li class="fd-menu__item">
                                <a class="fd-menu__link" href="#">
                                    <span class="fd-menu__title">Edit</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a class="fd-menu__link" href="#">
                                    <span class="fd-menu__title">Delete</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a class="fd-menu__link" href="#">
                                    <span class="fd-menu__title">Assign</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a class="fd-menu__link" href="#">
                                    <span class="fd-menu__title">Expire</span>
                                </a>
                            </li>
                            <li class="fd-menu__item">
                                <a class="fd-menu__link" href="#">
                                    <span class="fd-menu__title">Archive</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
               </div>
            </div>
        </div>
    </div>
</div>
<div style="min-height: 200px"></div>
`,j=`<div class="fd-action-bar">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <button aria-label="Go Back" class="fd-button fd-button--transparent">
                <i role="presentation" class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>
        <div class="fd-action-bar__title">
            <h1 class="fd-title fd-title--h3">Page Title Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Long.</h1>
        </div>
        <div class="fd-action-bar__actions">
            <button aria-label="button"class="fd-button">Button</button>
            <button aria-label="button"class="fd-button">Button</button>
            <button aria-label="button"class="fd-button fd-button--emphasized">Button</button>
        </div>
    </div>
    <p class="fd-action-bar__description fd-action-bar__description--back">Action bar Description Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Long
    </p>
</div>
`,J=`<div class="fd-action-bar">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <button aria-label="Go Back" class="fd-button fd-button--transparent">
                <i  role="presentation" class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>
        <div class="fd-action-bar__title">
            <h1 class="fd-title fd-title--h3">Page Title</h1>
        </div>
        <div class="fd-action-bar__actions">
            <button aria-label="button"class="fd-button">Button</button>
            <button aria-label="button"class="fd-button fd-button--emphasized">Button</button>
        </div>
    </div>
</div>
`,Q=`<div class="fd-action-bar">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__title">
            <h1 class="fd-title fd-title--h3">Page Title</h1>
        </div>
        <div class="fd-action-bar__actions">
            <button aria-label="button"class="fd-button">Button</button>
            <button aria-label="button"class="fd-button fd-button--emphasized">Button</button>
        </div>
    </div>
    <p class="fd-action-bar__description">Action bar Description </p>
</div>
`,W=`<div class="fd-action-bar">
    <div class="fd-action-bar__header">
        <div class="fd-action-bar__back">
            <button aria-label="Go Back" class="fd-button fd-button--transparent">
                <i  role="presentation" class="sap-icon--navigation-left-arrow"></i>
            </button>
        </div>
        <div class="fd-action-bar__title">
            <h1 class="fd-title fd-title--h3">Page Title</h1>
        </div>
        <div class="fd-action-bar__actions">
            <button aria-label="button"class="fd-button">Button</button>
            <button aria-label="button"class="fd-button fd-button--emphasized">Button</button>
        </div>
    </div>
    <p class="fd-action-bar__description fd-action-bar__description--back">Action bar Description </p>
</div>
`;const st={title:"Components/Action Bar",parameters:{description:`The action bar displays at the top of the page, and includes the page’s title, description, back button and action buttons.

##Usage
**Use action bar if:**

-	You want to control the settings of the UI, which affects all items.
-	You want to display actions at the top of the screen.

For the page title, a Title component is utilized that is an H1 but visually styled as an H3. As the first heading on the page, for accessibility purposes it must be an H1. See the Title component page for further information on semantic versus visual heading levels.

**Do not use action bar if:**

-	You want to display finalizing actions at the bottom of the screen. Instead, use the **Bar** component and choose a footer.

Note: You may want to display components from right to left on the screen for international purposes. To display them as such, add the \`rtl\` directive to the main element.`,tags:["non-f3","a11y","theme"]}},i=()=>W;i.storyName="Default";i.parameters={docs:{description:{story:"The default action bar displays a page title, description, back button and action buttons. To display a back button, add the `fd-action-bar__description--back` modifier class to the description element."}}};const o=()=>Q;o.storyName="No back button";o.parameters={docs:{description:{story:"This action bar doesn’t display a back button."}}};const r=()=>J;r.storyName="No description";r.parameters={docs:{description:{story:"This action bar doesn’t display a description."}}};const c=()=>j;c.storyName="Descriptive";c.parameters={docs:{description:{story:"The descriptive action bar displays a long page title and description."}}};const d=()=>F;d.storyName="Contextual";d.parameters={docs:{description:{story:"The contextual action bar displays a page title and contextual menu with several main actions. To display a contextual menu, add the `fd-popover` class to the`fd-action-bar__actions` element."}}};const l=()=>I;l.storyName="Responsive (M-L)";l.parameters={docs:{description:{story:"This action bar is responsive and fits the M and L sizes required for tablet and small desktop screens. To display this size, add the `fd-action-bar--m\\_l` modifier class to the main element."}}};const p=()=>q;p.storyName="Responsive (XL)";p.parameters={docs:{description:{story:"This action bar is responsive and fits the XL size required for larger screens of 1440px or more. To display this size, add the `fd-action-bar--xl` modifier class to the main element."}}};const b=()=>U;b.parameters={docs:{description:{story:"This action bar is mobile responsive. To display the mobile action bar, add the `fd-action-bar--s` modifier class to the main element."}}};var m,_,v;i.parameters=a(t({},i.parameters),{docs:a(t({},(m=i.parameters)==null?void 0:m.docs),{source:t({originalSource:"() => backBtnExampleHtml"},(v=(_=i.parameters)==null?void 0:_.docs)==null?void 0:v.source)})});var h,y,V;o.parameters=a(t({},o.parameters),{docs:a(t({},(h=o.parameters)==null?void 0:h.docs),{source:t({originalSource:"() => noBackBtnExampleHtml"},(V=(y=o.parameters)==null?void 0:y.docs)==null?void 0:V.source)})});var g,k,B;r.parameters=a(t({},r.parameters),{docs:a(t({},(g=r.parameters)==null?void 0:g.docs),{source:t({originalSource:"() => backBtnNoDescriptionExampleHtml"},(B=(k=r.parameters)==null?void 0:k.docs)==null?void 0:B.source)})});var x,T,w;c.parameters=a(t({},c.parameters),{docs:a(t({},(x=c.parameters)==null?void 0:x.docs),{source:t({originalSource:"() => longTitleDescriptionExampleHtml"},(w=(T=c.parameters)==null?void 0:T.docs)==null?void 0:w.source)})});var E,H,z;d.parameters=a(t({},d.parameters),{docs:a(t({},(E=d.parameters)==null?void 0:E.docs),{source:t({originalSource:"() => actionsExampleHtml"},(z=(H=d.parameters)==null?void 0:H.docs)==null?void 0:z.source)})});var D,L,N;l.parameters=a(t({},l.parameters),{docs:a(t({},(D=l.parameters)==null?void 0:D.docs),{source:t({originalSource:"() => responsiveLExampleHtml"},(N=(L=l.parameters)==null?void 0:L.docs)==null?void 0:N.source)})});var A,P,S;p.parameters=a(t({},p.parameters),{docs:a(t({},(A=p.parameters)==null?void 0:A.docs),{source:t({originalSource:"() => responsiveXLExampleHtml"},(S=(P=p.parameters)==null?void 0:P.docs)==null?void 0:S.source)})});var G,K,M;b.parameters=a(t({},b.parameters),{docs:a(t({},(G=b.parameters)==null?void 0:G.docs),{source:t({originalSource:"() => mobileExampleHtml"},(M=(K=b.parameters)==null?void 0:K.docs)==null?void 0:M.source)})});const it=["BackBtn","NoBackBtn","BackBtnNoDescription","LongTitleDescription","Actions","ResponsiveL","ResponsiveXL","Mobile"];export{d as Actions,i as BackBtn,r as BackBtnNoDescription,c as LongTitleDescription,b as Mobile,o as NoBackBtn,l as ResponsiveL,p as ResponsiveXL,it as __namedExportsOrder,st as default};
