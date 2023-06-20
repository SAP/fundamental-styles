/* empty css             */const T=`
<span class="fd-avatar fd-avatar--accent-color-1 fd-avatar--40" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-2 fd-avatar--40" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-3 fd-avatar--40" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-4 fd-avatar--40" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-5 fd-avatar--40" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-6 fd-avatar--96" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-7 fd-avatar--96" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-8 fd-avatar--96" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-9 fd-avatar--96" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
<span class="fd-avatar fd-avatar--accent-color-10 fd-avatar--96" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>
`,k=`
<span class="fd-avatar fd-avatar--40 fd-avatar--circle fd-avatar--transparent" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>

<span class="fd-avatar fd-avatar--96 fd-avatar--circle fd-avatar--transparent" aria-label="Wendy Wallace">WW</span>
`,E=`
<span class="fd-avatar fd-avatar--40 fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/portraits/L_80x80_M1.png')" role="img" aria-label="John Doe"></span>

<span class="fd-avatar fd-avatar--96 fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/portraits/L_80x80_F3.png')" role="img" aria-label="John Doe"></span>

`,C=`
<span class="fd-avatar fd-avatar--40 fd-avatar--circle" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>

<span class="fd-avatar fd-avatar--96 fd-avatar--circle" aria-label="Wendy Wallace">AlK</span>
`,W=`
<span class="fd-avatar fd-avatar--40 fd-avatar--accent-color-1" aria-label="Wendy Wallace">AlK</span>
<span class="fd-avatar fd-avatar--96 fd-avatar--accent-color-2" aria-label="Wendy Wallace">AlK</span>
`,I=`
<span class="fd-avatar fd-avatar--40" role="presentation">
    <i role="presentation" class="fd-avatar__icon sap-icon--washing-machine"></i>
</span>
<span class="fd-avatar fd-avatar--96" role="presentation">
    <i role="presentation" class="fd-avatar__icon sap-icon--washing-machine"></i>
</span>

`;const w={title:"BTP/Avatar",parameters:{description:`This is an extension to the <a href="https://fundamental-styles.netlify.app/?path=/docs/components-avatar--icon">Avatar</a> which introduces additional avatar sizes that are consumed by components and patterns in the BTP area. 

## Sizes

| **Size** | **rem** | **Modifier class** |
| :---------: | :----------: | :---------------: |
| 40 | &nbsp;&nbsp; &nbsp;&nbsp;2.5 rem&nbsp;&nbsp; &nbsp;&nbsp; | &nbsp;&nbsp; &nbsp;&nbsp; \`fd-avatar--40\`&nbsp;&nbsp; &nbsp;&nbsp; |
| 96 | &nbsp;&nbsp; &nbsp;&nbsp;6 rem&nbsp;&nbsp; &nbsp;&nbsp; | &nbsp;&nbsp; &nbsp;&nbsp; \`fd-avatar--96\`&nbsp;&nbsp; &nbsp;&nbsp; |

<br><br><br>
`,tags:["btp"]}},a=()=>I;a.parameters={docs:{story:{iframeHeight:200},description:{story:'The icon avatar can be used to display non-interactive icons. If you want the icon to be interactive, use the **Button** component with an icon inside instead. <br><br>When using the icon avatar for illustrative purposes only, include `role="presentation"` in the element.'}}};const e=()=>W;e.parameters={docs:{story:{iframeHeight:200},description:{story:"The initials avatar can display up to three alphabetical characters representing the first and last name(s) of a person, for example: MvV for Marjolein van Veen. The order in which the first and last name(s) are displayed depends on the language-specific settings.<br><br> When there is no equivalent text for the avatar, include `aria-label` in the element. This isn’t necessary if the avatar is used for illustrative purposes only. See **Icon** above."}}};const s=()=>C;s.parameters={docs:{story:{iframeHeight:200},description:{story:"A circle style can be displayed by adding the `fd-avatar--circle` modifier class to the `fd-avatar` base class."}}};const r=()=>E;r.parameters={docs:{story:{iframeHeight:200},description:{story:"\nA background image can be displayed by adding the `fd-avatar--thumbnail` modifier class.\nThere are two options to set the background: Cover (default) and Contain.\n\n- <b>Cover:</b> The size of the image is scaled up to completely cover the control area. As a result, parts of the image may be outside the shape.\n- <b>Contain:</b> The image is scaled down to fit into the control area. The entire image is displayed, but might not fully fill the shape. In this case, the control displays a default background color. The image itself is always centered inside the shape.\n\nChanging the default `background-size: cover` to `background-size: contain` CSS property can be achieved by adding `fd-avatar--background-contain` modifier class."}}};const n=()=>k;n.parameters={docs:{story:{iframeHeight:200},description:{story:"A transparent style can be displayed by adding the `fd-avatar--transparent` modifier class to the `fd-avatar` base class. This can be useful for displaying descriptive illustrations and decorative pictures, for example."}}};const t=()=>T;t.parameters={docs:{story:{iframeHeight:200},description:{story:"To change the accent background color, add the `fd-avatar--accent-color-*` class with the number indicating the desired color. The color options include numbers ranging from 1 to 10, for example: `fd-avatar--accent-color-10`."}}};var o,i,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:"() => iconExampleHtml",...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,p,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"() => initialsExampleHtml",...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var f,v,m;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"() => circleExampleHtml",...(m=(v=s.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var b,h,u;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:"() => backgroundImageExampleHtml",...(u=(h=r.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var g,y,_;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:"() => transparentExampleHtml",...(_=(y=n.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var A,x,H;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:"() => accentColorsExampleHtml",...(H=(x=t.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};const z=["Icon","Initials","Circle","BackgroundImage","Transparent","AccentColors"];export{t as AccentColors,r as BackgroundImage,s as Circle,a as Icon,e as Initials,n as Transparent,z as __namedExportsOrder,w as default};
//# sourceMappingURL=avatar.stories-3aad8bac.js.map
