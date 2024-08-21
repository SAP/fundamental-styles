var x=Object.defineProperty,g=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var d=(s,e,n)=>e in s?x(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n,t=(s,e)=>{for(var n in e||(e={}))v.call(e,n)&&d(s,n,e[n]);if(b)for(var n of b(e))E.call(e,n)&&d(s,n,e[n]);return s},a=(s,e)=>g(s,y(e));/* empty css                      */const U=`<div class="fddocs-container">
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
`,R=`<div class="fddocs-container">
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
`,w=`<div class="fddocs-container">
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
`,k={title:"Components/Object Number",parameters:{description:`
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
        `,tags:["f3","theme"]}},o=()=>w;o.parameters={docs:{description:{story:"\n There are different semantic statuses that can be applied to the object number by adding a modifier class.\n \n | **Status** | **Modifier class**              |\n | ----------: | :------------------------------- |\n | Positive    | `fd-object-number--positive`     |\n | Negative    | `fd-object-number--negative`     |\n | Critical    | `fd-object-number--critical`     |\n | Informative | `fd-object-number--informative`  |\n | None        | `fd-object-number__text` (class) |\n "}}};const r=()=>R;r.parameters={docs:{description:{story:"In some cases, it can be useful to enlarge the text for the object number. To display the object number in large text, add the `--large` modifier class to the element."}}};const c=()=>U;c.parameters={docs:{description:{story:"When there is a key numeric attribute on the page, it should be emphasized in bold text. To display the object number in bold text, add the `--bold` modifier class to the element."}}};var m,i,p;o.parameters=a(t({},o.parameters),{docs:a(t({},(m=o.parameters)==null?void 0:m.docs),{source:t({originalSource:"() => primaryExampleHtml"},(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source)})});var u,l,f;r.parameters=a(t({},r.parameters),{docs:a(t({},(u=r.parameters)==null?void 0:u.docs),{source:t({originalSource:"() => largeExampleHtml"},(f=(l=r.parameters)==null?void 0:l.docs)==null?void 0:f.source)})});var j,_,h;c.parameters=a(t({},c.parameters),{docs:a(t({},(j=c.parameters)==null?void 0:j.docs),{source:t({originalSource:"() => boldExampleHtml"},(h=(_=c.parameters)==null?void 0:_.docs)==null?void 0:h.source)})});const N=["Primary","Large","Bold"];export{c as Bold,r as Large,o as Primary,N as __namedExportsOrder,k as default};
