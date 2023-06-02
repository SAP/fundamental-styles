/* empty css                 */const y=`<div class="docs-column-flex docs-column-flex--align-start">
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
`,f=`<div class="docs-column-flex docs-column-flex--align-start">
        <div class="docs-layout-margins-paddings--color-14 docs-layout-margins-paddings--padded fd-padding--none">
            <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-grid-bg--color-7">container</div>
        </div>
    </div>
`,b=`<div class="docs-column-flex docs-column-flex--align-start">
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
`,h=`<div class="docs-column-flex docs-column-flex--align-start">
        <div class="docs-layout-margins-paddings--color-14 fd-padding">
            <div class="docs-layout-margins-paddings docs-layout-margins-paddings--width docs-layout-grid-bg--color-7">container</div>
        </div>
    </div>
`,P={title:"Layouts/Paddings",parameters:{description:`The CSS padding properties are used to generate space around an element's content, inside of any defined borders.
        With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element.
        We now provide a number of predefined padding clases which add predefined padding values.`,tags:["f3","theme"]}},d=()=>h;d.storyName="All-Round Padding";d.parameters={docs:{description:{story:"All-round padding appears on all sides of the container they are applied to. Use `fd-padding`\n        class to apply a padding of 1rem."}}};const s=()=>b;s.storyName="Double-Sided Padding";s.parameters={docs:{description:{story:"Double sided paddings appear on two opposite sides of the element. Use `fd-padding-begin-end`\n        class with any of the following modifiers:\n\n| Element | Modifier class |\n| ----------------: | :------------ |\n| Tiny | `fd-padding-begin-end--tiny` |\n| Small | `fd-padding-begin-end--sm` |\n| Medium | `fd-padding-begin-end--md` |\n| Large | `fd-padding-begin-end--lg` |\n"}}};const a=()=>f;a.parameters={docs:{description:{story:"No padding classes remove existing container paddings. Use `fd-padding--none`\n        modifier to remove existing padding. Place the no padding classes last to make sure they will be applied."}}};const i=()=>y;i.parameters={docs:{description:{story:"The responsive padding class adds a double sided padding inside a container based on its width. Use `fd-padding-responsive`\n        class with any of the following modifiers:\n\n| Element | Modifier class |\n| ----------------: | :------------ |\n| Small | `fd-padding-responsive--sm` |\n| Medium | `fd-padding-responsive--md` |\n| Large | `fd-padding-responsive--lg` |\n| Extra-large | `fd-padding-responsive--xl` |\n"}}};var n,o,e;d.parameters={...d.parameters,docs:{...(n=d.parameters)==null?void 0:n.docs,source:{originalSource:"() => allRoundPaddingExampleHtml",...(e=(o=d.parameters)==null?void 0:o.docs)==null?void 0:e.source}}};var r,l,g;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:"() => doubleSidedPaddingExampleHtml",...(g=(l=s.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var t,c,p;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:"() => noPaddingExampleHtml",...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,v;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:"() => responsivePaddingExampleHtml",...(v=(u=i.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const w=["AllRoundPadding","DoubleSidedPadding","NoPadding","ResponsivePadding"];export{d as AllRoundPadding,s as DoubleSidedPadding,a as NoPadding,i as ResponsivePadding,w as __namedExportsOrder,P as default};
//# sourceMappingURL=paddings.stories-2a0d1e02.js.map
