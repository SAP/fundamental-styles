var w=Object.defineProperty,z=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var v=(n,s,r)=>s in n?w(n,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[s]=r,a=(n,s)=>{for(var r in s||(s={}))M.call(s,r)&&v(n,r,s[r]);if(d)for(var r of d(s))K.call(s,r)&&v(n,r,s[r]);return n},e=(n,s)=>z(n,B(s));/* empty css               *//* empty css             */const D=`
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
`,J=`
<span class="fd-avatar fd-avatar--40 fd-avatar--circle fd-avatar--transparent" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>

<span class="fd-avatar fd-avatar--96 fd-avatar--circle fd-avatar--transparent" aria-label="Wendy Wallace">WW</span>
`,L=`
<span class="fd-avatar fd-avatar--40 fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/portraits/L_80x80_M1.png')" role="img" aria-label="John Doe"></span>

<span class="fd-avatar fd-avatar--96 fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/portraits/L_80x80_F3.png')" role="img" aria-label="John Doe"></span>

`,P=`
<span class="fd-avatar fd-avatar--40 fd-avatar--circle" aria-label="Avatar">
    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
</span>

<span class="fd-avatar fd-avatar--96 fd-avatar--circle" aria-label="Wendy Wallace">AlK</span>
`,V=`
<span class="fd-avatar fd-avatar--40 fd-avatar--accent-color-1" aria-label="Wendy Wallace">AlK</span>
<span class="fd-avatar fd-avatar--96 fd-avatar--accent-color-2" aria-label="Wendy Wallace">AlK</span>
`,j=`
<span class="fd-avatar fd-avatar--40" role="presentation">
    <i role="presentation" class="fd-avatar__icon sap-icon--washing-machine"></i>
</span>
<span class="fd-avatar fd-avatar--96" role="presentation">
    <i role="presentation" class="fd-avatar__icon sap-icon--washing-machine"></i>
</span>

`,G={title:"BTP/Avatar",parameters:{description:`This is an extension to the <a href="https://fundamental-styles.netlify.app/?path=/docs/components-avatar--icon">Avatar</a> which introduces additional avatar sizes that are consumed by components and patterns in the BTP area. 

## Sizes

| **Size** | **rem** | **Modifier class** |
| :---------: | :----------: | :---------------: |
| 40 | &nbsp;&nbsp; &nbsp;&nbsp;2.5 rem&nbsp;&nbsp; &nbsp;&nbsp; | &nbsp;&nbsp; &nbsp;&nbsp; \`fd-avatar--40\`&nbsp;&nbsp; &nbsp;&nbsp; |
| 96 | &nbsp;&nbsp; &nbsp;&nbsp;6 rem&nbsp;&nbsp; &nbsp;&nbsp; | &nbsp;&nbsp; &nbsp;&nbsp; \`fd-avatar--96\`&nbsp;&nbsp; &nbsp;&nbsp; |

<br><br><br>
`,tags:["btp","horizon-only"]}},t=()=>j;t.parameters={docs:{story:{},description:{story:'The icon avatar can be used to display non-interactive icons. If you want the icon to be interactive, use the **Button** component with an icon inside instead. <br><br>When using the icon avatar for illustrative purposes only, include `role="presentation"` in the element.'}}};const o=()=>V;o.parameters={docs:{story:{},description:{story:"The initials avatar can display up to three alphabetical characters representing the first and last name(s) of a person, for example: MvV for Marjolein van Veen. The order in which the first and last name(s) are displayed depends on the language-specific settings.<br><br> When there is no equivalent text for the avatar, include `aria-label` in the element. This isn’t necessary if the avatar is used for illustrative purposes only. See **Icon** above."}}};const i=()=>P;i.parameters={docs:{story:{},description:{story:"A circle style can be displayed by adding the `fd-avatar--circle` modifier class to the `fd-avatar` base class."}}};const c=()=>L;c.parameters={docs:{story:{},description:{story:"\nA background image can be displayed by adding the `fd-avatar--thumbnail` modifier class.\nThere are two options to set the background: Cover (default) and Contain.\n\n- <b>Cover:</b> The size of the image is scaled up to completely cover the control area. As a result, parts of the image may be outside the shape.\n- <b>Contain:</b> The image is scaled down to fit into the control area. The entire image is displayed, but might not fully fill the shape. In this case, the control displays a default background color. The image itself is always centered inside the shape.\n\nChanging the default `background-size: cover` to `background-size: contain` CSS property can be achieved by adding `fd-avatar--background-contain` modifier class."}}};const l=()=>J;l.parameters={docs:{story:{},description:{story:"A transparent style can be displayed by adding the `fd-avatar--transparent` modifier class to the `fd-avatar` base class. This can be useful for displaying descriptive illustrations and decorative pictures, for example."}}};const p=()=>D;p.parameters={docs:{story:{},description:{story:"To change the accent background color, add the `fd-avatar--accent-color-*` class with the number indicating the desired color. The color options include numbers ranging from 1 to 10, for example: `fd-avatar--accent-color-10`."}}};var f,m,b;t.parameters=e(a({},t.parameters),{docs:e(a({},(f=t.parameters)==null?void 0:f.docs),{source:a({originalSource:"() => iconExampleHtml"},(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source)})});var h,u,y;o.parameters=e(a({},o.parameters),{docs:e(a({},(h=o.parameters)==null?void 0:h.docs),{source:a({originalSource:"() => initialsExampleHtml"},(y=(u=o.parameters)==null?void 0:u.docs)==null?void 0:y.source)})});var g,_,A;i.parameters=e(a({},i.parameters),{docs:e(a({},(g=i.parameters)==null?void 0:g.docs),{source:a({originalSource:"() => circleExampleHtml"},(A=(_=i.parameters)==null?void 0:_.docs)==null?void 0:A.source)})});var x,T,k;c.parameters=e(a({},c.parameters),{docs:e(a({},(x=c.parameters)==null?void 0:x.docs),{source:a({originalSource:"() => backgroundImageExampleHtml"},(k=(T=c.parameters)==null?void 0:T.docs)==null?void 0:k.source)})});var E,C,H;l.parameters=e(a({},l.parameters),{docs:e(a({},(E=l.parameters)==null?void 0:E.docs),{source:a({originalSource:"() => transparentExampleHtml"},(H=(C=l.parameters)==null?void 0:C.docs)==null?void 0:H.source)})});var W,I,S;p.parameters=e(a({},p.parameters),{docs:e(a({},(W=p.parameters)==null?void 0:W.docs),{source:a({originalSource:"() => accentColorsExampleHtml"},(S=(I=p.parameters)==null?void 0:I.docs)==null?void 0:S.source)})});const N=["Icon","Initials","Circle","BackgroundImage","Transparent","AccentColors"];export{p as AccentColors,c as BackgroundImage,i as Circle,t as Icon,o as Initials,l as Transparent,N as __namedExportsOrder,G as default};
