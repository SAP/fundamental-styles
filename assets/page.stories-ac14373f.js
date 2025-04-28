/* empty css            *//* empty css               *//* empty css                   *//* empty css                  *//* empty css             *//* empty css              */const t=`<main class="fd-page fd-page--home fd-page--list">
    <header>
        <div class="fd-bar fd-bar--home-page-xl fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent" aria-label="Go back">
                        <i class="sap-icon--navigation-left-arrow"></i>
                    </button>
                </div>
                <div class="fd-bar__element">
                     Header Title
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent" aria-label="See more">
                        <i class="sap-icon--overflow"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>
    <div class="fd-page__content--xl" role="region">
        <div style="height: 400px">
            Page Content
        </div>
    </div>
    <footer>
        <div class="fd-bar fd-bar--home-page-xl fd-bar--floating-footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent">Cancel</button>
                </div>
            </div>
        </div>
    </footer>
</main>
`,d=`<main class="fd-page fd-page--transparent">
    <header>
        <div class="fd-bar fd-bar--page-m_l fd-bar--header-with-subheader">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent" aria-label="Go back">
                        <i class="sap-icon--navigation-left-arrow"></i>
                    </button>
                </div>
                <div class="fd-bar__element">
                     Header Title
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent" aria-label="See more">
                        <i class="sap-icon--overflow"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>
    <div class="fd-bar fd-bar--page-m_l fd-bar--subheader">
        <div class="fd-bar__middle">
            <div class="fd-bar__element fd-bar__element--full-width">
                <div class="fd-form-item fd-form-item--horizontal">
                    <label class="fd-form-label" for="input-1">
                        Field Text:
                    </label>
                    <input class="fd-input" type="text" id="input-1" placeholder="Field placeholder text">
                </div>
            </div>
        </div>
    </div>
    <div class="fd-page__content--m_l" role="region">
        <div style="height: 400px">
            Page Content
        </div>
    </div>
    <footer>
        <div class="fd-bar fd-bar--page-m_l fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent">Cancel</button>
                </div>
            </div>
        </div>
    </footer>
</main>
`,s=`<main class="fd-page">
    <header>
        <div class="fd-bar fd-bar--page fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent" aria-label="Go back">
                        <i class="sap-icon--navigation-left-arrow"></i>
                    </button>
                </div>
                <div class="fd-bar__element">
                     Header Title
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent" aria-label="See more">
                        <i class="sap-icon--grid"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>
    <div class="fd-page__content" role="region">
        <div style="height: 400px">
            Page Content
        </div>
    </div>
    <footer>
        <div class="fd-bar fd-bar--page fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent">Cancel</button>
                </div>
            </div>
        </div>
    </footer>
</main>
`;const b={title:"Layouts/Page",parameters:{description:"\n - `fd-page`: standard (default)\n - `fd-page--solid`: solid\n - `fd-page--list`: list\n - `fd-page--transparent:` transparent\n\n\n ### CONTAINER HIERARCHY\n\n The elements used to construct a page are:\n\n - `fd-page`: The page-level wrapper\n - **Header**: Uses a Bar component with `fd-bar--page` and `fd-bar--header` modifier classes\n - **Header with SubHeader**: Uses a Bar component with `fd-bar--page` and `fd-bar--header-with-subheader` modifier classes\n - **SubHeader**: _(optional)_ Uses a Bar component with `fd-bar--page` and `fd-bar--subheader` modifier classes\n - **Content**: The page content is wrapped in `fd-page__content container`\n - **Footer**: _(optional)_ Uses a Bar component with `fd-bar--page` and `fd-bar--footer` modifier classes\n\n\n ### PAGE RESPONSIVE BEHAVIOUR\n\n The left and right spacings of the Bar and the Content could be adjusted according to the container width.\n\n - **default**: Bar component with `fd-bar--page modifier` class and `fd-page__content` class for the content\n - **Size S**: Bar component with additional `fd-bar--page-s` modifier class and `fd-page__content--s` modifier class for the content\n - **Size M & L**: Bar component with additional `fd-bar--page-m_l` modifier class and `fd-page__content--m_l` modifier class for the content\n - **Size XL**: Bar component with additional `fd-bar--page-xl` modifier class and `fd-page__content--xl` modifier class for the content\n",tags:["f3","a11y","theme"]}},a=()=>s;a.parameters={};const e=()=>d;e.parameters={docs:{description:{story:"Page with Transparent Background Design, Header with SubHeader, and Responsive Behaviour - M_L"}}};const n=()=>t;n.parameters={docs:{description:{story:"Home page with List Background Design, Floating Footer and Responsive Behaviour - XL"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => basicPageExampleHtml",...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => transparentPageExampleHtml",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => responsivePageExampleHtml",...n.parameters?.docs?.source}}};const p=["BasicPage","TransparentPage","ResponsivePage"];export{a as BasicPage,n as ResponsivePage,e as TransparentPage,p as __namedExportsOrder,b as default};
