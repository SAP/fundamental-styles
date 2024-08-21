var S=Object.defineProperty,E=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var t=(i,s,a)=>s in i?S(i,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[s]=a,d=(i,s)=>{for(var a in s||(s={}))R.call(s,a)&&t(i,a,s[a]);if(g)for(var a of g(s))N.call(s,a)&&t(i,a,s[a]);return i},n=(i,s)=>E(i,H(s));/* empty css                 */const A=`<div class="docs-column-flex docs-column-flex--align-start">
        <div class="docs-layout-margins-paddings--color-14 fd-padding-responsive--sm">
            <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width-sm docs-layout-grid-bg--color-7">container(sm)</div>
        </div>
        <br />
        <div class="docs-layout-margins-paddings--color-14 fd-padding-responsive--md">
            <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width-md docs-layout-grid-bg--color-7">container(md)</div>
        </div>
        <br />
        <div class="docs-layout-margins-paddings--color-14 fd-padding-responsive--lg">
            <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width-md docs-layout-grid-bg--color-7">container(lg)</div>
        </div>
        <br />
        <div class="docs-layout-margins-paddings--color-14 fd-padding-responsive--xl">
            <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width-lg docs-layout-grid-bg--color-7">container(xl)</div>
        </div>
    </div>
`,D=`<div class="docs-column-flex docs-column-flex--align-start">
        <div class="docs-layout-margins-paddings--color-14 docs-layout-margins-paddings--padded fd-padding--none">
            <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-grid-bg--color-7">container</div>
        </div>
    </div>
`,M=`<div class="docs-column-flex docs-column-flex--align-start">
        <div class="docs-layout-margins-paddings--color-14 fd-padding-begin-end--tiny">
            <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-grid-bg--color-7">container(tiny)</div>
        </div>
        <br />
        <div class="docs-layout-margins-paddings--color-14 fd-padding-begin-end--sm">
            <div class="docs-layout-margins-paddings  docs-layout-margins-paddings--width-sm docs-layout-grid-bg--color-7">container(sm)</div>
        </div>
        <br />
        <div class="docs-layout-margins-paddings--color-14 fd-padding-begin-end--md">
            <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width-md docs-layout-grid-bg--color-7">container(md)</div>
        </div>
        <br />
        <div class="docs-layout-margins-paddings--color-14 fd-padding-begin-end--lg">
            <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width-lg docs-layout-grid-bg--color-7">container(lg)</div>
        </div>
    </div>
`,T=`<div class="docs-column-flex docs-column-flex--align-start">
        <div class="docs-layout-margins-paddings--color-14 fd-padding">
            <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-grid-bg--color-7">container</div>
        </div>
    </div>
`,_={title:"Layouts/Paddings",parameters:{description:`The CSS padding properties are used to generate space around an element's content, inside of any defined borders.
        With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element.
        We now provide a number of predefined padding clases which add predefined padding values.`,tags:["f3","theme"]}},o=()=>T;o.storyName="All-Round Padding";o.parameters={docs:{description:{story:"All-round padding appears on all sides of the container they are applied to. Use `fd-padding`\n        class to apply a padding of 1rem."}}};const e=()=>M;e.storyName="Double-Sided Padding";e.parameters={docs:{description:{story:"Double sided paddings appear on two opposite sides of the element. Use `fd-padding-begin-end`\n        class with any of the following modifiers:\n\n| Element | Modifier class |\n| ----------------: | :------------ |\n| Tiny | `fd-padding-begin-end--tiny` |\n| Small | `fd-padding-begin-end--sm` |\n| Medium | `fd-padding-begin-end--md` |\n| Large | `fd-padding-begin-end--lg` |\n"}}};const r=()=>D;r.parameters={docs:{description:{story:"No padding classes remove existing container paddings. Use `fd-padding--none`\n        modifier to remove existing padding. Place the no padding classes last to make sure they will be applied."}}};const l=()=>A;l.parameters={docs:{description:{story:"The responsive padding class adds a double sided padding inside a container based on its width. Use `fd-padding-responsive`\n        class with any of the following modifiers:\n\n| Element | Modifier class |\n| ----------------: | :------------ |\n| Small | `fd-padding-responsive--sm` |\n| Medium | `fd-padding-responsive--md` |\n| Large | `fd-padding-responsive--lg` |\n| Extra-large | `fd-padding-responsive--xl` |\n"}}};var c,p,m;o.parameters=n(d({},o.parameters),{docs:n(d({},(c=o.parameters)==null?void 0:c.docs),{source:d({originalSource:"() => allRoundPaddingExampleHtml"},(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source)})});var u,v,y;e.parameters=n(d({},e.parameters),{docs:n(d({},(u=e.parameters)==null?void 0:u.docs),{source:d({originalSource:"() => doubleSidedPaddingExampleHtml"},(y=(v=e.parameters)==null?void 0:v.docs)==null?void 0:y.source)})});var f,b,h;r.parameters=n(d({},r.parameters),{docs:n(d({},(f=r.parameters)==null?void 0:f.docs),{source:d({originalSource:"() => noPaddingExampleHtml"},(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source)})});var x,P,w;l.parameters=n(d({},l.parameters),{docs:n(d({},(x=l.parameters)==null?void 0:x.docs),{source:d({originalSource:"() => responsivePaddingExampleHtml"},(w=(P=l.parameters)==null?void 0:P.docs)==null?void 0:w.source)})});const C=["AllRoundPadding","DoubleSidedPadding","NoPadding","ResponsivePadding"];export{o as AllRoundPadding,e as DoubleSidedPadding,r as NoPadding,l as ResponsivePadding,C as __namedExportsOrder,_ as default};
