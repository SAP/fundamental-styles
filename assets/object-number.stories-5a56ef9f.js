/* empty css                      */const p=`<div class="fddocs-container">
    <span class="fd-object-number fd-object-number--negative">
        <span class="fd-object-number__text fd-object-number__text--bold">-2,000.00</span><span class="fd-object-number__unit">EUR</span>
    </span>
    <span class="fd-object-number fd-object-number--critical">
        <span class="fd-object-number__text fd-object-number__text--bold">0.00</span><span class="fd-object-number__unit">EUR</span>
    </span>
    <span class="fd-object-number fd-object-number--positive">
        <span class="fd-object-number__text fd-object-number__text--bold">1,000.00</span><span class="fd-object-number__unit">EUR</span>
    </span>
    <span class="fd-object-number fd-object-number--informative">
        <span class="fd-object-number__text fd-object-number__text--bold">100.00</span><span class="fd-object-number__unit">EUR</span>
    </span>
    <span class="fd-object-number">
        <span class="fd-object-number__text fd-object-number__text--bold">999.00</span><span class="fd-object-number__unit">EUR</span>
    </span>
</div>
`,u=`<div class="fddocs-container">
    <span class="fd-object-number fd-object-number--large fd-object-number--negative">
        <span class="fd-object-number__text">-2,000.00</span><span class="fd-object-number__unit">EUR</span>
    </span>
    <span class="fd-object-number fd-object-number--large fd-object-number--critical">
        <span class="fd-object-number__text">0.00</span><span class="fd-object-number__unit">EUR</span>
    </span>
    <span class="fd-object-number fd-object-number--large fd-object-number--positive">
        <span class="fd-object-number__text">1,000.00</span><span class="fd-object-number__unit">EUR</span>
    </span>
    <span class="fd-object-number fd-object-number--large fd-object-number--informative">
        <span class="fd-object-number__text">100.00</span><span class="fd-object-number__unit">EUR</span>
    </span>
    <span class="fd-object-number fd-object-number--large">
        <span class="fd-object-number__text">999.00</span><span class="fd-object-number__unit">EUR</span>
    </span>
</div>
`,l=`<div class="fddocs-container">
    <span class="fd-object-number fd-object-number--negative">
        <span class="fd-object-number__text">-2,000.00</span><span class="fd-object-number__unit">EUR</span>
    </span>
    <span class="fd-object-number fd-object-number--critical">
        <span class="fd-object-number__text">0.00</span><span class="fd-object-number__unit">EUR</span>
    </span>
    <span class="fd-object-number fd-object-number--positive">
        <span class="fd-object-number__text">1,000.00</span><span class="fd-object-number__unit">EUR</span>
    </span>
    <span class="fd-object-number fd-object-number--informative">
        <span class="fd-object-number__text">100.00</span><span class="fd-object-number__unit">EUR</span>
    </span>
    <span class="fd-object-number">
        <span class="fd-object-number__text">999.00</span><span class="fd-object-number__unit">EUR</span>
    </span>
</div>
`,j={title:"Components/Object Number",parameters:{description:`
An object number represents a numeric attribute of an object and its unit. The object number should be displayed with semantics to provide more insight to the user about the object's value.

##Accessibility
Make sure that the object number is properly described and semantically understandable. For instance, if the color is describing the object number as negative, ensure that it is accompanied by either an icon, label, unit or attribute. Color should not be the only way the value state of the object is conveyed to the user.

##Usage
**Use the object number if:**

- You want to display the key number of an object.
- You need to display one or more numeric attributes of an object (for example, for objects you want to compare).

**Emphasize (bold) the object number if:**

- You want to represent the key numeric attributes on the page.
- It is being used as a line item status in a table.

**Do not use the object number if:**

- You want to display system messages.
- They are for decorative purposes only.
        `,tags:["f3","theme"]}},e=()=>l;e.parameters={docs:{description:{story:"\n There are different semantic statuses that can be applied to the object number by adding a modifier class.\n \n | **Status** | **Modifier class**              |\n | ----------: | :------------------------------- |\n | Positive    | `fd-object-number--positive`     |\n | Negative    | `fd-object-number--negative`     |\n | Critical    | `fd-object-number--critical`     |\n | Informative | `fd-object-number--informative`  |\n | None        | `fd-object-number__text` (class) |\n "}}};const n=()=>u;n.parameters={docs:{description:{story:"In some cases, it can be useful to enlarge the text for the object number. To display the object number in large text, add the `--large` modifier class to the element."}}};const t=()=>p;t.parameters={docs:{description:{story:"When there is a key numeric attribute on the page, it should be emphasized in bold text. To display the object number in bold text, add the `--bold` modifier class to the element."}}};var s,a,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"() => primaryExampleHtml",...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var r,c,b;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:"() => largeExampleHtml",...(b=(c=n.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var d,m,i;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"() => boldExampleHtml",...(i=(m=t.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const _=["Primary","Large","Bold"];export{t as Bold,n as Large,e as Primary,_ as __namedExportsOrder,j as default};
//# sourceMappingURL=object-number.stories-5a56ef9f.js.map
