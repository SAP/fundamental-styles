var r=Object.defineProperty,f=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var c=(a,n,s)=>n in a?r(a,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[n]=s,i=(a,n)=>{for(var s in n||(n={}))_.call(n,s)&&c(a,s,n[s]);if(t)for(var s of t(n))h.call(n,s)&&c(a,s,n[s]);return a},l=(a,n)=>f(a,k(n));/* empty css             *//* empty css             */const x={title:"Components/Link",parameters:{description:`A link (also known as hyperlink) is an interactive text element that allows users to navigate to another page or trigger a certain event.

##Usage

**Use a link if:**

- You want to navigate to another page.
- You want to trigger an event.
- You want to point to an object or person. If so, you can either navigate to the object or person’s details or display them in a quick view after the link is triggered.

** Do not use a link if:**

- You could use a **Button** to trigger the action instead.
- There is no target or reference to be linked to.

##Accessibility
Use a meaningful link text that indicates what will happen when the user interacts with the link i.e. *Open Sales Order*.
Avoid texts such as *Click Here* or *Link*, as these do not make it clear to the user what the purpose of the link is.
`,tags:["f3","a11y","theme"]}},u=`
<style>

    .docs-link-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        column-gap: 0.1rem;
        row-gap: 0.1rem;
        padding: 1rem;
        justify-items: center;
        align-items: center;
    }

    .docs-link-container > div {
        text-align: center;
    }

    .docs-link-container--inverted {
        background-color:var(--sapShellColor)
    }
</style>
`,e=()=>`${u}

<div class="docs-link-container">
    <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">Link</span></a>
    <a href="#" class="fd-link is-active" tabindex="0"><span class="fd-link__content">Active</span></a>
    <a href="#" class="fd-link is-focus" tabindex="0"><span class="fd-link__content">Focused</span></a>
    <a href="#" class="fd-link" aria-disabled="true" tabindex="0"><span class="fd-link__content">Disabled</span></a>
</div>
<div class="docs-link-container">
    <a href="#" class="fd-link fd-link--emphasized" tabindex="0"><span class="fd-link__content">Emphasized link</span></a>
    <a href="#" class="fd-link fd-link--emphasized is-active" tabindex="0"><span class="fd-link__content">Active</span></a>
    <a href="#" class="fd-link fd-link--emphasized is-focus" tabindex="0"><span class="fd-link__content">Focused</span></a>
    <a href="#" class="fd-link fd-link--emphasized" aria-disabled="true" tabindex="0"><span class="fd-link__content">Disabled</span></a>
</div>
<div class="docs-link-container">
    <a href="#" class="fd-link fd-link--subtle"><span class="fd-link__content">Subtle link</span></a>
    <a href="#" class="fd-link fd-link--subtle is-active"><span class="fd-link__content">Active</span></a>
    <a href="#" class="fd-link fd-link--subtle is-focus"><span class="fd-link__content">Focused</span></a>
    <a href="#" class="fd-link fd-link--subtle" aria-disabled="true"><span class="fd-link__content">Disabled</span></a>
</div>
<div class="docs-link-container docs-link-container--inverted">
    <a href="#" class="fd-link fd-link--inverted"><span class="fd-link__content">Inverted link</span></a>
    <a href="#" class="fd-link fd-link--inverted is-active"><span class="fd-link__content">Active</span></a>
    <a href="#" class="fd-link fd-link--inverted is-focus"><span class="fd-link__content">Focused</span></a>
    <a href="#" class="fd-link fd-link--inverted" aria-disabled="true"><span class="fd-link__content">Disabled</span></a>
</div>
<div class="docs-link-container">
    <a href="#" class="fd-link" tabindex="0">
        <span class="fd-link__content">Right icon link</span>
        <span class="sap-icon--delete sap-icon--s"></span>
    </a>
    <a href="#" class="fd-link is-active" tabindex="0">
        <span class="fd-link__content">Active</span>
        <span class="sap-icon--delete sap-icon--s"></span>
    </a>
    <a href="#" class="fd-link is-focus" tabindex="0">
        <span class="fd-link__content">Focused</span>
        <span class="sap-icon--delete sap-icon--s"></span>
    </a>
    <a href="#" class="fd-link" aria-disabled="true" tabindex="0">
        <span class="fd-link__content">Disabled</span>
        <span class="sap-icon--delete sap-icon--s"></span>
    </a>
</div>
<div class="docs-link-container">
    <a href="#" class="fd-link" tabindex="0">
        <span class="sap-icon--delete sap-icon--s"></span>
        <span class="fd-link__content">Left icon link</span>
    </a>
    <a href="#" class="fd-link is-active" tabindex="0">
        <span class="sap-icon--delete sap-icon--s"></span>
        <span class="fd-link__content">Active</span>
    </a>
    <a href="#" class="fd-link is-focus" tabindex="0">
        <span class="sap-icon--delete sap-icon--s"></span>
        <span class="fd-link__content">Focused</span>
    </a>
    <a href="#" class="fd-link" aria-disabled="true" tabindex="0">
        <span class="sap-icon--delete sap-icon--s"></span>
        <span class="fd-link__content">Disabled</span>
    </a>
</div>
`;e.storyName="Types";e.parameters={docs:{description:{story:`There are different types of links for various use cases.

| Types | Modifier class | Use to... |
| ----:| :--------------- | :--------------|
| Default | *n/a* | Display a simple link. |
| Subtle | \`fd-link--subtle\` | Distinguish between important (default) and less important (subtle) links in tables with large data lists. |
| Disabled | \`fd-link--disabled\` | Display a link that a user cannot interactive with. |
| Inverted | \`fd-link--inverted\` | Display a link in a **Shell Bar**. |

###Icons
You can display a link with an icon placed on either side of the link text.

| Icon style | Modifier class |
| ----------: | :-------------|
| Left Arrow | \`sap-icon--slim-arrow-left sap-icon--s\` |
| Right Arrow | \`sap-icon--slim-arrow-right sap-icon--s\` |
`}}};var d,o,p;e.parameters=l(i({},e.parameters),{docs:l(i({},(d=e.parameters)==null?void 0:d.docs),{source:i({originalSource:`() => \`\${localStyles}

<div class="docs-link-container">
    <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">Link</span></a>
    <a href="#" class="fd-link is-active" tabindex="0"><span class="fd-link__content">Active</span></a>
    <a href="#" class="fd-link is-focus" tabindex="0"><span class="fd-link__content">Focused</span></a>
    <a href="#" class="fd-link" aria-disabled="true" tabindex="0"><span class="fd-link__content">Disabled</span></a>
</div>
<div class="docs-link-container">
    <a href="#" class="fd-link fd-link--emphasized" tabindex="0"><span class="fd-link__content">Emphasized link</span></a>
    <a href="#" class="fd-link fd-link--emphasized is-active" tabindex="0"><span class="fd-link__content">Active</span></a>
    <a href="#" class="fd-link fd-link--emphasized is-focus" tabindex="0"><span class="fd-link__content">Focused</span></a>
    <a href="#" class="fd-link fd-link--emphasized" aria-disabled="true" tabindex="0"><span class="fd-link__content">Disabled</span></a>
</div>
<div class="docs-link-container">
    <a href="#" class="fd-link fd-link--subtle"><span class="fd-link__content">Subtle link</span></a>
    <a href="#" class="fd-link fd-link--subtle is-active"><span class="fd-link__content">Active</span></a>
    <a href="#" class="fd-link fd-link--subtle is-focus"><span class="fd-link__content">Focused</span></a>
    <a href="#" class="fd-link fd-link--subtle" aria-disabled="true"><span class="fd-link__content">Disabled</span></a>
</div>
<div class="docs-link-container docs-link-container--inverted">
    <a href="#" class="fd-link fd-link--inverted"><span class="fd-link__content">Inverted link</span></a>
    <a href="#" class="fd-link fd-link--inverted is-active"><span class="fd-link__content">Active</span></a>
    <a href="#" class="fd-link fd-link--inverted is-focus"><span class="fd-link__content">Focused</span></a>
    <a href="#" class="fd-link fd-link--inverted" aria-disabled="true"><span class="fd-link__content">Disabled</span></a>
</div>
<div class="docs-link-container">
    <a href="#" class="fd-link" tabindex="0">
        <span class="fd-link__content">Right icon link</span>
        <span class="sap-icon--delete sap-icon--s"></span>
    </a>
    <a href="#" class="fd-link is-active" tabindex="0">
        <span class="fd-link__content">Active</span>
        <span class="sap-icon--delete sap-icon--s"></span>
    </a>
    <a href="#" class="fd-link is-focus" tabindex="0">
        <span class="fd-link__content">Focused</span>
        <span class="sap-icon--delete sap-icon--s"></span>
    </a>
    <a href="#" class="fd-link" aria-disabled="true" tabindex="0">
        <span class="fd-link__content">Disabled</span>
        <span class="sap-icon--delete sap-icon--s"></span>
    </a>
</div>
<div class="docs-link-container">
    <a href="#" class="fd-link" tabindex="0">
        <span class="sap-icon--delete sap-icon--s"></span>
        <span class="fd-link__content">Left icon link</span>
    </a>
    <a href="#" class="fd-link is-active" tabindex="0">
        <span class="sap-icon--delete sap-icon--s"></span>
        <span class="fd-link__content">Active</span>
    </a>
    <a href="#" class="fd-link is-focus" tabindex="0">
        <span class="sap-icon--delete sap-icon--s"></span>
        <span class="fd-link__content">Focused</span>
    </a>
    <a href="#" class="fd-link" aria-disabled="true" tabindex="0">
        <span class="sap-icon--delete sap-icon--s"></span>
        <span class="fd-link__content">Disabled</span>
    </a>
</div>
\``},(p=(o=e.parameters)==null?void 0:o.docs)==null?void 0:p.source)})});const g=["Primary"];export{e as Primary,g as __namedExportsOrder,x as default};
