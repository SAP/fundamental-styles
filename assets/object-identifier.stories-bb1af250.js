/* empty css                          *//* empty css             *//* empty css              */const B=`
<div class="fd-object-identifier fd-object-identifier--medium">
    <p class="fd-object-identifier__title">NoteBook Basic 15</p>
    <p class="fd-object-identifier__text">Notebook Basic 15 with 2,80 GHz quad core, 15" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro</p>
</div>
`,y=`
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
`,x=`
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
`,v=`<div class="fd-object-identifier">
    <p class="fd-object-identifier__title fd-object-identifier__title--bold">NoteBook Basic 15</p>
</div>
`,T=`<div class="fd-object-identifier">
    <p class="fd-object-identifier__title">NoteBook Basic 15</p>
</div>
`,N={title:"Components/Object Identifier",parameters:{description:`
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
`,tags:["f3"]}},e=()=>T;e.storyName="Title";e.parameters={docs:{description:{story:"To display the object identifier as a title, add the `fd-object-identifier__title` modifier class to the main element."}}};const t=()=>v;t.storyName="Bold";t.parameters={docs:{description:{story:"To display the object identifier's title in bold, replace `fd-object-identifier__title`\n        with the `fd-object-identifier__title--bold` modifier class."}}};const i=()=>x;i.storyName="Link";i.parameters={docs:{description:{story:"To display the object identifier as a link, use anchor element with `.fd-link .fd-object-identifier__link` classes."}}};const s=()=>y;s.storyName="Descriptive";s.parameters={docs:{description:{story:"To display the object identifier's title with descriptive text, add an additional tag below the title container and a `fd-object-identifier__text` modifier class."}}};const o=()=>B;o.parameters={docs:{description:{story:"To display the object identifier title in medium size, add the `fd-object-identifier--medium` modifier."}}};var n,d,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"() => titleOnlyExampleHtml",...(a=(d=e.parameters)==null?void 0:d.docs)==null?void 0:a.source}}};var r,c,l;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:"() => boldTitleExampleHtml",...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var f,p,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:"() => titleAsLinkExampleHtml",...(b=(p=i.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var m,_,j;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:"() => titleAndTextExampleHtml",...(j=(_=s.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var h,u,k;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:"() => mediumSizeExampleHtml",...(k=(u=o.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};const A=["TitleOnly","BoldTitle","TitleAsLink","TitleAndText","MediumSize"];export{t as BoldTitle,o as MediumSize,s as TitleAndText,i as TitleAsLink,e as TitleOnly,A as __namedExportsOrder,N as default};
//# sourceMappingURL=object-identifier.stories-bb1af250.js.map
