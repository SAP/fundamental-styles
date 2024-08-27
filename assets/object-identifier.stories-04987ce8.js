var w=Object.defineProperty,N=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var f=(o,t,s)=>t in o?w(o,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[t]=s,e=(o,t)=>{for(var s in t||(t={}))G.call(t,s)&&f(o,s,t[s]);if(l)for(var s of l(t))g.call(t,s)&&f(o,s,t[s]);return o},i=(o,t)=>N(o,A(t));/* empty css                          *//* empty css             *//* empty css              */const z=`
<div class="fd-object-identifier fd-object-identifier--medium">
    <p class="fd-object-identifier__title">NoteBook Basic 15</p>
    <p class="fd-object-identifier__text">Notebook Basic 15 with 2,80 GHz quad core, 15" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro</p>
</div>
`,E=`
<div class="fd-object-identifier">
    <p class="fd-object-identifier__title">NoteBook Basic 15</p>
    <p class="fd-object-identifier__text">Notebook Basic 15 with 2,80 GHz quad core, 15" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro</p>
</div>

<br>

<div class="fd-object-identifier">
    <p class="fd-object-identifier__title fd-object-identifier__title--bold">NoteBook Basic 15</p>
    <p class="fd-object-identifier__text">Notebook Basic 15 with 2,80 GHz quad core, 15" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro</p>
</div>

<br>

<div class="fd-object-identifier">
    <p class="fd-object-identifier__title">
        <a href="#" class="fd-link fd-object-identifier__link">
            <span class="fd-link__content">NoteBook Basic 15</span>
        </a>
    </p>
    <p class="fd-object-identifier__text">Notebook Basic 15 with 2,80 GHz quad core, 15" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro</p>
</div>

<br>

<div class="fd-object-identifier">
    <p class="fd-object-identifier__title fd-object-identifier__title--bold">
        <a href="#" class="fd-link fd-object-identifier__link">
            <span class="fd-link__content">NoteBook Basic 15</span>
        </a>
    </p>
    <p class="fd-object-identifier__text">Notebook Basic 15 with 2,80 GHz quad core, 15" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro</p>
</div>
`,L=`
<div class="fd-object-identifier">
    <p class="fd-object-identifier__title">
        <a href="#" class="fd-link fd-object-identifier__link">
            <span class="fd-link__content">NoteBook Basic 15</span>
        </a>
    </p>
</div>
<br>
<div class="fd-object-identifier">
    <p class="fd-object-identifier__title fd-object-identifier__title--bold">
        <a href="#" class="fd-link fd-object-identifier__link">
            <span class="fd-link__content">NoteBook Basic 15</span>
        </a>
    </p>
</div>
`,R=`<div class="fd-object-identifier">
    <p class="fd-object-identifier__title fd-object-identifier__title--bold">NoteBook Basic 15</p>
</div>
`,S=`<div class="fd-object-identifier">
    <p class="fd-object-identifier__title">NoteBook Basic 15</p>
</div>
`,I={title:"Components/Object Identifier",parameters:{description:`
The object identifier is a short text that represents the key identifier of an object, and can be displayed in various types of containers, tables, panels, popovers and more. The text wraps if there is insufficient horizontal space.

The object identifier should be easily read by the users, preferably displaying text instead of an ID. If it necessary to distinguish objects by their IDs, then it should appear as descriptive text below the title text.

**The object number comprises:**

- A title text
- An optional descriptive text
- An active state (if desired) which resembles a link that can trigger an event

##Usage
**Use the object identifier if:**

- You want to indicate the key identifier on an object.

**Do not use the object identifier if:**

- You want to display system messages.
- They are for decorative purposes only.
`,tags:["f3"]}},n=()=>S;n.storyName="Title";n.parameters={docs:{description:{story:"To display the object identifier as a title, add the `fd-object-identifier__title` modifier class to the main element."}}};const d=()=>R;d.storyName="Bold";d.parameters={docs:{description:{story:"To display the object identifier's title in bold, replace `fd-object-identifier__title`\n        with the `fd-object-identifier__title--bold` modifier class."}}};const a=()=>L;a.storyName="Link";a.parameters={docs:{description:{story:"To display the object identifier as a link, use anchor element with `.fd-link .fd-object-identifier__link` classes."}}};const r=()=>E;r.storyName="Descriptive";r.parameters={docs:{description:{story:"To display the object identifier's title with descriptive text, add an additional tag below the title container and a `fd-object-identifier__text` modifier class."}}};const c=()=>z;c.parameters={docs:{description:{story:"To display the object identifier title in medium size, add the `fd-object-identifier--medium` modifier."}}};var p,b,m;n.parameters=i(e({},n.parameters),{docs:i(e({},(p=n.parameters)==null?void 0:p.docs),{source:e({originalSource:"() => titleOnlyExampleHtml"},(m=(b=n.parameters)==null?void 0:b.docs)==null?void 0:m.source)})});var _,j,h;d.parameters=i(e({},d.parameters),{docs:i(e({},(_=d.parameters)==null?void 0:_.docs),{source:e({originalSource:"() => boldTitleExampleHtml"},(h=(j=d.parameters)==null?void 0:j.docs)==null?void 0:h.source)})});var u,k,B;a.parameters=i(e({},a.parameters),{docs:i(e({},(u=a.parameters)==null?void 0:u.docs),{source:e({originalSource:"() => titleAsLinkExampleHtml"},(B=(k=a.parameters)==null?void 0:k.docs)==null?void 0:B.source)})});var y,x,v;r.parameters=i(e({},r.parameters),{docs:i(e({},(y=r.parameters)==null?void 0:y.docs),{source:e({originalSource:"() => titleAndTextExampleHtml"},(v=(x=r.parameters)==null?void 0:x.docs)==null?void 0:v.source)})});var T,D,H;c.parameters=i(e({},c.parameters),{docs:i(e({},(T=c.parameters)==null?void 0:T.docs),{source:e({originalSource:"() => mediumSizeExampleHtml"},(H=(D=c.parameters)==null?void 0:D.docs)==null?void 0:H.source)})});const P=["TitleOnly","BoldTitle","TitleAsLink","TitleAndText","MediumSize"];export{d as BoldTitle,c as MediumSize,r as TitleAndText,a as TitleAsLink,n as TitleOnly,P as __namedExportsOrder,I as default};
