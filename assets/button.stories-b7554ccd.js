var r=Object.defineProperty,p=Object.defineProperties;var c=Object.getOwnPropertyDescriptors;var e=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var l=(a,t,n)=>t in a?r(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,o=(a,t)=>{for(var n in t||(t={}))f.call(t,n)&&l(a,n,t[n]);if(e)for(var n of e(t))v.call(t,n)&&l(a,n,t[n]);return a},i=(a,t)=>p(a,c(t));/* empty css             *//* empty css               *//* empty css                     */const h=`<p>Default state:</p>
<div class="fddocs-button-container">
    <div class="fd-button-split fd-button-split--emphasized" role="group" aria-label="button-split">
        <button class="fd-button fd-button--emphasized" aria-label="button">
            <span class="fd-button-split__text">Emphasized</span>
        </button>
        <button class="fd-button fd-button--emphasized" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>

    <div class="fd-button-split" role="group" aria-label="button-split">
        <button class="fd-button" aria-label="button">
            <span class="fd-button-split__text">Standard</span>
        </button>
        <button class="fd-button" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>

    <div class="fd-button-split fd-button-split--transparent" role="group" aria-label="button-split">
        <button class="fd-button fd-button--transparent" aria-label="button">
            <span class="fd-button-split__text">Transparent</span>
        </button>
        <button class="fd-button fd-button--transparent" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>

    <div class="fd-button-split fd-button-split--ghost" role="group" aria-label="button-split">
        <button class="fd-button fd-button--ghost" aria-label="button">
            <span class="fd-button-split__text">Ghost</span>
        </button>
        <button class="fd-button fd-button--ghost" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>

    <div class="fd-button-split fd-button-split--positive" role="group" aria-label="button-split">
        <button class="fd-button fd-button--positive" aria-label="button">
            <span class="fd-button-split__text">Positive</span>
        </button>
        <button class="fd-button fd-button--positive" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>

    <div class="fd-button-split fd-button-split--negative" role="group" aria-label="button-split">
        <button class="fd-button fd-button--negative" aria-label="button">
            <span class="fd-button-split__text">Negative</span>
        </button>
        <button class="fd-button fd-button--negative" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>

    <div class="fd-button-split fd-button-split--attention" role="group" aria-label="button-split">
        <button class="fd-button fd-button--attention" aria-label="button">
            <span class="fd-button-split__text">Attention</span>
        </button>
        <button class="fd-button fd-button--attention" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>

    <div class="fd-button-split fd-button-split--attention" role="group" aria-label="button-split">
        <button class="fd-button fd-button--attention" aria-label="button">
            <i class="sap-icon--cart"></i>
            <span class="fd-button-split__text">Attention</span>
        </button>
        <button class="fd-button fd-button--attention" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>

    <div class="fd-button-split fd-button-split--negative" role="group" aria-label="button-split">
        <button class="fd-button fd-button--negative" aria-label="button">
            <i class="sap-icon--cart"></i>
        </button>
        <button class="fd-button fd-button--negative" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
</div>
<p>Arrow toggled:</p>
<div class="fddocs-button-container">
    <div class="fd-button-split fd-button-split--emphasized is-hover" role="group" aria-label="button-split">
        <button class="fd-button fd-button--emphasized" aria-label="button">
            <span class="fd-button-split__text">Emphasized</span>
        </button>
        <button class="fd-button fd-button--emphasized is-active" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>

    <div class="fd-button-split is-hover" role="group" aria-label="button-split">
        <button class="fd-button" aria-label="button">
            <span class="fd-button-split__text">Standard</span>
        </button>
        <button class="fd-button is-active" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>

    <div class="fd-button-split fd-button-split--transparent is-hover" role="group" aria-label="button-split">
        <button class="fd-button fd-button--transparent" aria-label="button">
            <span class="fd-button-split__text">Transparent</span>
        </button>
        <button class="fd-button fd-button--transparent is-active" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>

    <div class="fd-button-split fd-button-split--ghost is-hover" role="group" aria-label="button-split">
        <button class="fd-button fd-button--ghost" aria-label="button">
            <span class="fd-button-split__text">Ghost</span>
        </button>
        <button class="fd-button fd-button--ghost is-active" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>

    <div class="fd-button-split fd-button-split--positive is-hover" role="group" aria-label="button-split">
        <button class="fd-button fd-button--positive" aria-label="button">
            <span class="fd-button-split__text">Positive</span>
        </button>
        <button class="fd-button fd-button--positive is-active" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>

    <div class="fd-button-split fd-button-split--negative is-hover" role="group" aria-label="button-split">
        <button class="fd-button fd-button--negative" aria-label="button">
            <span class="fd-button-split__text">Negative</span>
        </button>
        <button class="fd-button fd-button--negative is-active" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>

    <div class="fd-button-split fd-button-split--attention is-hover" role="group" aria-label="button-split">
        <button class="fd-button fd-button--attention" aria-label="button">
            <span class="fd-button-split__text">Attention</span>
        </button>
        <button class="fd-button fd-button--attention is-active" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>

    <div class="fd-button-split fd-button-split--attention is-hover" role="group" aria-label="button-split">
        <button class="fd-button fd-button--attention" aria-label="button">
            <i class="sap-icon--cart"></i>
            <span class="fd-button-split__text">Attention</span>
        </button>
        <button class="fd-button fd-button--attention is-active" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>

    <div class="fd-button-split fd-button-split--negative is-hover" role="group" aria-label="button-split">
        <button class="fd-button fd-button--negative" aria-label="button">
            <i class="sap-icon--cart"></i>
        </button>
        <button class="fd-button fd-button--negative is-active" aria-expanded="false">
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
</div>
`,_={title:"Components/Buttons/Button Split",parameters:{description:`The split menu button has two separate areas: the text label and the arrow down icon.
The separator between them indicates that each area results in a different action, giving the user two choices: trigger the main action or open the menu.

**If the default action is displayed as an icon only, all the menu items must contain icons.**

The split menu button can behave in two different ways:

1. The main button triggers the default action set by the developer. If no default action is defined, the first item in the menu list should be the default.
2. The main button triggers the last action chosen by the user from the menu list. Initially, it triggers the default action. However, when the user selects a different action, the default switches to the last action selected by the user.
    
The split menu button can be displayed by using container with \`fd-button-split\` class with \`role=”group”\` and the \`aria-label=”button-split”\` attribute.
`,tags:["f3","a11y","theme"]}},s=()=>h;s.storyName="Split menu button";s.parameters={docs:{description:{story:`
`}}};var u,b,d;s.parameters=i(o({},s.parameters),{docs:i(o({},(u=s.parameters)==null?void 0:u.docs),{source:o({originalSource:"() => splitMenuButtonExampleHtml"},(d=(b=s.parameters)==null?void 0:b.docs)==null?void 0:d.source)})});const y=["SplitMenuButton"];export{s as SplitMenuButton,y as __namedExportsOrder,_ as default};
