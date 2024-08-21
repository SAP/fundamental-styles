var F=Object.defineProperty,P=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var m=(t,n,e)=>n in t?F(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,a=(t,n)=>{for(var e in n||(n={}))G.call(n,e)&&m(t,e,n[e]);if(f)for(var e of f(n))K.call(n,e)&&m(t,e,n[e]);return t},s=(t,n)=>P(t,B(n));/* empty css               *//* empty css             *//* empty css             */const X=`
<ul class="fd-tabs fd-tabs--l" role="tablist">
    <li role="tab" class="fd-tabs__item fd-tabs__item--error" aria-controls="5abyKZ">
        <a class="fd-tabs__link" href="#5abyKZ">
            <p class="fd-tabs__count">13</p>
            <span class="fd-tabs__tag">
                Error
            </span>
        </a>
    </li>
    <li role="tab" aria-selected="true" class="fd-tabs__item fd-tabs__item--information" aria-controls="wupC7s">
        <a class="fd-tabs__link is-selected" href="#wupC7s">
            <p class="fd-tabs__count">24</p>
            <span class="fd-tabs__tag">
                Information
            </span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item fd-tabs__item--warning" aria-controls="XlKpQM">
        <a class="fd-tabs__link" href="#XlKpQM">
            <p class="fd-tabs__count">31</p>
            <span class="fd-tabs__tag">
                Warning
            </span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item fd-tabs__item--success">
        <a class="fd-tabs__link" aria-controls="3dUJAI" href="#3dUJAI">
            <p class="fd-tabs__count">65</p>
            <span class="fd-tabs__tag">
                Success
            </span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item fd-tabs__item--neutral" aria-controls="TWlAup">
        <a class="fd-tabs__link" href="#TWlAup">
            <p class="fd-tabs__count">159</p>
            <span class="fd-tabs__tag">
                Neutral
            </span>
        </a>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="5abyKZ" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="wupC7s" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="XlKpQM" role="tabpanel">
    Nullam ut
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="3dUJAI" role="tabpanel">
    Tincidunt nunc
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="TWlAup" role="tabpanel">
    Occaecat cupidatat
</div>
`,U=`
<ul class="fd-tabs fd-tabs--l fd-tabs--filter" role="tablist">
    <li role="tab" class="fd-tabs__item fd-tabs__item--header" aria-controls="5ZkDVE">
        <a class="fd-tabs__link" href="#5ZkDVE">
            <span class="fd-tabs__header">
                <span class="fd-tabs__counter-header">150</span>
                <span class="fd-tabs__label">products</span>
            </span>
        </a>
    </li>
    <div class="fd-tabs__separator"></div>
    <li role="tab" class="fd-tabs__item fd-tabs__item--success" aria-controls="znvnwr">
        <a class="fd-tabs__link" href="#znvnwr">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">35</p>
            </span>
            <span class="fd-tabs__label">Success</span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item fd-tabs__item--warning" aria-controls="oyYpL7">
        <a class="fd-tabs__link" href="#oyYpL7">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">5</p>
            </span>
            <span class="fd-tabs__label">Warning</span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item fd-tabs__item--information" aria-controls="gRpu9H">
        <a class="fd-tabs__link" href="#gRpu9H">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">60</p>
            </span>
            <span class="fd-tabs__label">Information</span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item fd-tabs__item--error" aria-controls="gRpu1A">
        <a class="fd-tabs__link" href="#gRpu1A">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">50</p>
            </span>
            <span class="fd-tabs__label">Error</span>
        </a>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="5ZkDVE" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="znvnwr" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="oyYpL7" role="tabpanel">
    Nullam ut
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="gRpu9H" role="tabpanel">
    Occaecat cupidatat
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="gRpu1A" role="tabpanel">
    Nullam sit
</div>
`,j=`
<ul class="fd-tabs fd-tabs--l fd-tabs--icon-only" role="tablist">
    <li role="tab" class="fd-tabs__item fd-tabs__item--success" aria-controls="XTsSDD">
        <a class="fd-tabs__link" href="#XTsSDD">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">54</p>
            </span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item fd-tabs__item--warning" aria-selected="true" aria-controls="DomvG6">
      <a class="fd-tabs__link is-selected" href="#DomvG6">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">71</p>
            </span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item fd-tabs__item--information" aria-controls="DqIStt">
        <a class="fd-tabs__link" href="#DqIStt">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">23</p>
            </span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item fd-tabs__item--error" aria-controls="bRCSzS">
        <a class="fd-tabs__link" href="#bRCSzS">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">4</p>
            </span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item fd-tabs__item--neutral" aria-controls="xMN6I9">
        <a class="fd-tabs__link" href="#xMN6I9">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">100</p>
            </span>
        </a>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="XTsSDD" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="DomvG6" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="DqIStt" role="tabpanel">
    Nullam ut
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="bRCSzS" role="tabpanel">
    Quaerat voluptatem
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="xMN6I9" role="tabpanel">
    Occaecat cupidatat
</div>
`,q=`
<ul class="fd-tabs fd-tabs--l fd-tabs--filter" role="tablist">
    <li role="tab" class="fd-tabs__item fd-tabs__item--header" aria-controls="5ZkDVE">
        <a class="fd-tabs__link" href="#5ZkDVE">
            <span class="fd-tabs__header">
                <span class="fd-tabs__counter-header">100</span>
                <span class="fd-tabs__label">products</span>
            </span>
        </a>
    </li>
    <div class="fd-tabs__separator"></div>
    <li role="tab" class="fd-tabs__item" aria-controls="znvnwr">
        <a class="fd-tabs__link" href="#znvnwr">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">35</p>
            </span>
            <span class="fd-tabs__label">Description</span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item" aria-controls="oyYpL7">
        <a class="fd-tabs__link" href="#oyYpL7">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">5</p>
            </span>
            <span class="fd-tabs__label">Description</span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item" aria-controls="gRpu9H">
        <a class="fd-tabs__link" href="#gRpu9H">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">60</p>
            </span>
            <span class="fd-tabs__label">Description</span>
        </a>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="5ZkDVE" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="znvnwr" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="oyYpL7" role="tabpanel">
    Nullam ut
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="gRpu9H" role="tabpanel">
    Occaecat cupidatat
</div>
`,J=`
<ul class="fd-tabs fd-tabs--l fd-tabs--process" role="tablist">
    <li role="tab" class="fd-tabs__item" aria-controls="NoQLy6">
        <a class="fd-tabs__link" href="#NoQLy6">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
            </span>
            <div class="fd-tabs__process">
                <span class="fd-tabs__label">58 of 122 items</span>
                <span class="fd-tabs__label">Description</span>
            </div>
        </a>
        <span class="fd-tabs__process-icon"></span>
    </li>
    <li role="tab" class="fd-tabs__item" aria-controls="h4yBDR">
        <a class="fd-tabs__link" href="#h4yBDR">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
            </span>
            <div class="fd-tabs__process">
                <span class="fd-tabs__label">22 of 122 items</span>
                <span class="fd-tabs__label">Description</span>
            </div>
        </a>
        <span class="fd-tabs__process-icon"></span>
    </li>
    <li role="tab" class="fd-tabs__item" aria-controls="nd1EMQ">
        <a class="fd-tabs__link" href="#nd1EMQ">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
            </span>
            <div class="fd-tabs__process">
                <span class="fd-tabs__label">42 of 122 items</span>
                <span class="fd-tabs__label">Description</span>
            </div>
        </a>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-right" role="presentation"></i>
    </button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="NoQLy6" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="h4yBDR" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="nd1EMQ" role="tabpanel">
    Tincidunt nunc
</div>
`,$=`
<ul class="fd-tabs fd-tabs--s fd-tabs--icon-only" role="tablist">
    <li role="tab" class="fd-tabs__item" aria-controls="pliA92">
        <a class="fd-tabs__link" href="#pliA92">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">12</p>
            </span>
        </a>
    </li>
    <li role="tab" aria-selected="true" class="fd-tabs__item" aria-controls="ZAN8Hd">
      <a class="fd-tabs__link" href="#ZAN8Hd">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">15</p>
            </span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item" aria-controls="QrQ5Cl">
        <a class="fd-tabs__link" href="#QrQ5Cl">
            <span class="fd-tabs__icon">
                <i class="sap-icon--cart" role="presentation"></i>
                <p class="fd-tabs__count">1</p>
            </span>
        </a>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="pliA92" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="ZAN8Hd" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="QrQ5Cl" role="tabpanel">
    Nullam ut
</div>
`,aa=`
<nav class="fd-tabs fd-tabs--l" role="navigation">
    <span class="fd-tabs__item" aria-controls="kf8369">
        <a class="fd-tabs__link" href="#kf8369">
            <span class="fd-tabs__tag">
                Link
            </span>
        </a>
    </span>
    <span class="fd-tabs__item is-selected" aria-controls="9uQ282">
        <a class="fd-tabs__link" href="#9uQ282">
            <span class="fd-tabs__tag">
                Selected
            </span>
        </a>
    </span>
    <span class="fd-tabs__item" aria-controls="DGl707">
        <a class="fd-tabs__link" href="#DGl707">
            <span class="fd-tabs__tag">
                Link
            </span>
        </a>
    </span>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</nav>
<div class="fd-tabs__panel" aria-expanded="false" id="kf8369" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="9uQ282" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="DGl707" role="tabpanel">
    Nullam ut
</div>
`,sa=`
<ul class="fd-tabs fd-tabs--xl" role="tablist">
    <li role="tab" class="fd-tabs__item" aria-controls="d9vOir">
        <a class="fd-tabs__link" href="#d9vOir">
            <p class="fd-tabs__count">13</p>
            <span class="fd-tabs__tag">
                Link
            </span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item" aria-controls="bSj6ft" aria-selected="true">
        <a class="fd-tabs__link" href="#bSj6ft">
            <p class="fd-tabs__count">1</p>
            <span class="fd-tabs__tag">
                Selected
            </span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item" aria-controls="VrHfHi">
        <a class="fd-tabs__link" href="#VrHfHi">
            <p class="fd-tabs__count">97</p>
            <span class="fd-tabs__tag">
                Link
            </span>
        </a>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="d9vOir" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="bSj6ft" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="VrHfHi" role="tabpanel">
    Nullam ut
</div>
`,na=`
<ul class="fd-tabs" role="tablist">
    <li role="tab" class="fd-tabs__item" aria-controls="fuCwV550">
        <a class="fd-tabs__link" href="#fuCwV550">
            <span class="fd-tabs__tag">
                Link
            </span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item" aria-selected="true" aria-controls="AiWfz165">
        <a class="fd-tabs__link" href="#AiWfz165">
            <span class="fd-tabs__tag">
                Selected
            </span>
        </a>
    </li>
    <li role="tab" class="fd-tabs__item" aria-controls="7ae0T849">
        <a class="fd-tabs__link" href="#7ae0T849">
            <span class="fd-tabs__tag">
                Link
            </span>
        </a>
    </li>
    <button class="fd-button fd-button--transparent fd-tabs__overflow" aria-label="See More">
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</ul>
<div class="fd-tabs__panel" aria-expanded="false" id="fuCwV550" role="tabpanel">
    Lorem ipsum
</div>
<div class="fd-tabs__panel" aria-expanded="true" id="AiWfz165" role="tabpanel">
    Dolor sit
</div>
<div class="fd-tabs__panel" aria-expanded="false" id="7ae0T849" role="tabpanel">
    Nullam ut
</div>
`,ra={title:"Deprecated/Components/Tabs",parameters:{tags:["f3","a11y","theme"],description:`Tabs are based on the folder metaphor and used to separate content into different sections. Tabs should be ordered based on priority to create visual hierarchy.
## DEPRECATED

This component is deprecated. Please use the *Icon Tab Bar* component instead.

## Usage
**Use tabs if:**

- Your business objects need to show multiple facets at the same time.
- You want to allow the user to browse through these facets.
- You need a prominent or very visual filter on top of a list.
- You have clear-cut process steps that need to be visualized.


**Do not use tabs if:**

- You plan to use only one single tab.


## Horizontal padding

By default, tabs have no horizontal paddings. If horizontal paddings are added, they should behave responsively based on the screen width.

These modifier classes are used to display horizontal padding for tabs in various sizes.

| rem&nbsp;&nbsp; | Min-width&nbsp;&nbsp; | Max-width&nbsp;&nbsp; | Modifier class |
| ---- | ---------- | ---------- | ----------- |
| 1rem&nbsp;&nbsp; | _n/a_ | 599 px | \`fd-tabs--s\` |
| 2rem&nbsp;&nbsp; | 600 px | 1023 px | \`fd-tabs--m\` |
| 2rem&nbsp;&nbsp; | 1024 px | 1439 px| \`fd-tabs--l\` |
| 3rem&nbsp;&nbsp; | 1440 px | _n/a_ | \`fd-tabs--xl\` |

<br>
        `}},l=()=>na;l.storyName="Default";l.parameters={docs:{description:{story:`By default, tabs are displayed in a bar and are either inactive or active (highlighted in blue). The bar can also contain actions that apply to the whole page. The example below illustrates the tabs component in cozy mode with no horizontal padding.
        `}}};const i=()=>sa;i.storyName="Counters";i.parameters={docs:{description:{story:"Tabs can be displayed with counters to indicate that there are a number of resources the user can or should access. To display counters, wrap the `fd-tabs__count` class in paragraph tags below the `fd-tabs__link` element.\n\nIn the example below, the tabs component is optimized for an extra-large screen with the `fd-tabs--xl` modifier class, which adds 3rem horizontal paddings.\n        "}}};const r=()=>aa;r.storyName="Navigable";r.parameters={docs:{description:{story:"Tabs can be navigable by applying the `role=”navigation”` attribute to the main element.\n    "}}};const o=()=>$;o.storyName="Icon";o.parameters={docs:{description:{story:"Tabs can display icons instead of text with the ` fd-tabs__icon` class (see **Icon** for a list of available icons). To display icon tabs without text, you will also need to add the `fd-tabs--icon-only` modifier class to the main element.\n    "}}};const d=()=>J;d.storyName="Process mode";d.parameters={docs:{description:{story:"Tabs can be displayed in subsequent steps, indicating to the user that there is a process to follow. To display tabs in process mode, add the `fd-tabs--process` modifier class to the main element.\n    "}}};const c=()=>q;c.storyName="Filter mode";c.parameters={docs:{description:{story:"Tabs can be displayed in filter mode, indicating to the user that a value has been filtered into separate tabs. To display tabs in filter mode, add the `fd-tabs--filter` modifier class to the main element.\n    "}}};const p=()=>j;p.storyName="Semantic mode";p.parameters={docs:{description:{story:"Tabs can be displayed with semantic colors to indicate a status. To display semantic tabs, add the following modifier classes to the `fd-tabs__item` elements:\n\nState | Modifier class\n:------- | :---------------\nSuccess | `fd-tabs__item--success`\nWarning | `fd-tabs__item--warning`\nInformation | `fd-tabs__item--information`\nError | `fd-tabs__item--error`\nNeutral | `fd-tabs__item--neutral`\n        "}}};const b=()=>U;b.storyName="Semantic filter mode";b.parameters={docs:{description:{story:"Tabs can be displayed in filter mode with semantic colors. As detailed in the previous examples, add the `fd-tabs--filter` modifier class to the main element and add the semantic modifier classes to the `fd-tabs__item` elements (see **semantic mode** example for modifier class names).\n        "}}};const _=()=>X;_.storyName="Semantic inline";_.parameters={docs:{description:{story:"Tabs can be displayed with inline text in semantic colors. To display inline text tabs, add the `fd-tabs__tag` class below the `fd-tabs__link` element.\n        "}}};var u,h,v;l.parameters=s(a({},l.parameters),{docs:s(a({},(u=l.parameters)==null?void 0:u.docs),{source:a({originalSource:"() => primaryExampleHtml"},(v=(h=l.parameters)==null?void 0:h.docs)==null?void 0:v.source)})});var x,y,w;i.parameters=s(a({},i.parameters),{docs:s(a({},(x=i.parameters)==null?void 0:x.docs),{source:a({originalSource:"() => tabWithCountersExampleHtml"},(w=(y=i.parameters)==null?void 0:y.docs)==null?void 0:w.source)})});var g,k,S;r.parameters=s(a({},r.parameters),{docs:s(a({},(g=r.parameters)==null?void 0:g.docs),{source:a({originalSource:"() => navTabExampleHtml"},(S=(k=r.parameters)==null?void 0:k.docs)==null?void 0:S.source)})});var D,T,M;o.parameters=s(a({},o.parameters),{docs:s(a({},(D=o.parameters)==null?void 0:D.docs),{source:a({originalSource:"() => iconOnlyExampleHtml"},(M=(T=o.parameters)==null?void 0:T.docs)==null?void 0:M.source)})});var E,H,N;d.parameters=s(a({},d.parameters),{docs:s(a({},(E=d.parameters)==null?void 0:E.docs),{source:a({originalSource:"() => processModeExampleHtml"},(N=(H=d.parameters)==null?void 0:H.docs)==null?void 0:N.source)})});var L,I,z;c.parameters=s(a({},c.parameters),{docs:s(a({},(L=c.parameters)==null?void 0:L.docs),{source:a({originalSource:"() => filterModeExampleHtml"},(z=(I=c.parameters)==null?void 0:I.docs)==null?void 0:z.source)})});var A,C,Q;p.parameters=s(a({},p.parameters),{docs:s(a({},(A=p.parameters)==null?void 0:A.docs),{source:a({originalSource:"() => semanticModeExampleHtml"},(Q=(C=p.parameters)==null?void 0:C.docs)==null?void 0:Q.source)})});var R,W,O;b.parameters=s(a({},b.parameters),{docs:s(a({},(R=b.parameters)==null?void 0:R.docs),{source:a({originalSource:"() => semanticFilterModeExampleHtml"},(O=(W=b.parameters)==null?void 0:W.docs)==null?void 0:O.source)})});var V,Z,Y;_.parameters=s(a({},_.parameters),{docs:s(a({},(V=_.parameters)==null?void 0:V.docs),{source:a({originalSource:"() => semanticInlineExampleHtml"},(Y=(Z=_.parameters)==null?void 0:Z.docs)==null?void 0:Y.source)})});const oa=["Primary","TabWithCounters","NavTab","IconOnly","ProcessMode","FilterMode","SemanticMode","SemanticFilterMode","SemanticInline"];export{c as FilterMode,o as IconOnly,r as NavTab,l as Primary,d as ProcessMode,b as SemanticFilterMode,_ as SemanticInline,p as SemanticMode,i as TabWithCounters,oa as __namedExportsOrder,ra as default};
