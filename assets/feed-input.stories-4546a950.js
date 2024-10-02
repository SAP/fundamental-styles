var q=Object.defineProperty,M=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var c=(s,a,n)=>a in s?q(s,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[a]=n,e=(s,a)=>{for(var n in a||(a={}))k.call(a,n)&&c(s,n,a[n]);if(p)for(var n of p(a))G.call(a,n)&&c(s,n,a[n]);return s},t=(s,a)=>M(s,U(a));/* empty css               *//* empty css                 *//* empty css               *//* empty css             */const O=`    <div class="fd-feed-input"
         role="region"
         aria-label="Feed input over max height">
        <div class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-input__thumb"
             style="background-image: url('assets/images/avatars/4.svg')"
             role="img"
             aria-label="John Doe"
             title="John Doe"></div>
        <textarea class="fd-textarea fd-feed-input__textarea"
                  placeholder="Post something here"
                  aria-label="Feed message"
                  required
                  rows="18">X
X
X
X
X
X
X
X
X
X
X
X
X
X
X
X
X
X
X
X</textarea>
        <button class="fd-button fd-feed-input__submit-button"
                aria-label="Send"
                aria-disabled="false"
                title="Send">
            <i role="presentation" class="sap-icon--feeder-arrow"></i>
        </button>
    </div>
`,A=`    <div class="fd-feed-input"
         role="region"
         aria-label="Feed input height growth">
        <div class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-input__thumb"
             style="background-image: url('assets/images/avatars/4.svg')"
             role="img"
             aria-label="John Doe"
             title="John Doe"></div>
        <textarea class="fd-textarea fd-feed-input__textarea"
                  placeholder="Post something here"
                  aria-label="Feed"
                  required
                  rows="4">
With every line
"textarea" grows upward
until it reaches
the max height
        </textarea>
        <button class="fd-button fd-feed-input__submit-button"
                aria-label="Send"
                aria-disabled="false"
                title="Send">
            <i role="presentation" class="sap-icon--feeder-arrow"></i>
        </button>
    </div>
`,Y=`    <div class="fd-feed-input"
         role="region"
         aria-label="Feed input empty example">
        <div class="fd-avatar fd-avatar--s fd-avatar--placeholder sap-icon--person-placeholder fd-feed-input__thumb"
             role="img"
             aria-label="John Doe"
             title="John Doe"></div>
        <textarea class="fd-textarea fd-feed-input__textarea"
                  placeholder="Post something here"
                  aria-label="Feed message"
                  required
                  rows="1">With generic user image</textarea>
        <button class="fd-button fd-feed-input__submit-button"
                aria-label="Send"
                title="Send">
            <i role="presentation" class="sap-icon--feeder-arrow"></i>
        </button>
    </div>
`,z=`    <div class="fd-feed-input"
         role="region"
         aria-label="Feed input empty example">
        <textarea class="fd-textarea fd-feed-input__textarea"
                  placeholder="Post something here"
                  aria-label="Feed message"
                  required
                  rows="1">Without user image</textarea>
        <button class="fd-button fd-feed-input__submit-button"
                aria-label="Send"
                title="Send">
            <i role="presentation" class="sap-icon--feeder-arrow"></i>
        </button>
    </div>
`,C=`    <div class="fd-feed-input is-disabled"
         role="region"
         aria-label="Feed input disabled example">
        <div class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-input__thumb"
             style="background-image: url('assets/images/avatars/4.svg')"
             role="img"
             aria-label="John Doe"
             title="John Doe"></div>
        <textarea class="fd-textarea fd-feed-input__textarea"
                  placeholder="Post something here"
                  aria-label="Feed message"
                  required
                  rows="1"
                  aria-disabled="true"
                  disabled>Disabled</textarea>
        <button class="fd-button fd-feed-input__submit-button"
                aria-label="Send"
                aria-disabled="true"
                disabled
                title="Send">
            <i role="presentation" class="sap-icon--feeder-arrow"></i>
        </button>
    </div>
`,j=`    <div class="fd-feed-input"
         role="region"
         aria-label="Feed input with one row text">
        <div class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-input__thumb"
             style="background-image: url('assets/images/avatars/4.svg')"
             role="img"
             aria-label="John Doe"
             title="John Doe"></div>
        <textarea class="fd-textarea fd-feed-input__textarea"
                  placeholder="Post something here"
                  aria-label="Feed message"
                  required
                  rows="1">"When there is text, the submit button becomes active.</textarea>
        <button class="fd-button
                fd-feed-input__submit-button"
                aria-label="Send"
                aria-disabled="false"
                title="Send">
            <i role="presentation" class="sap-icon--feeder-arrow"></i>
        </button>
    </div>
`,B=`<div class="fd-feed-input"
         role="region"
         aria-label="Feed input empty example">
        <div class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-input__thumb"
             style="background-image: url('assets/images/avatars/4.svg')"
             role="img"
             aria-label="John Doe"
             title="John Doe"></div>
        <textarea class="fd-textarea fd-feed-input__textarea"
                  placeholder="Post something here"
                  aria-label="Feed message"
                  required
                  rows="1"></textarea>
        <button class="fd-button fd-feed-input__submit-button"
                aria-label="Send"
                aria-disabled="true"
                disabled
                title="Send">
            <i role="presentation" class="sap-icon--feeder-arrow"></i>
        </button>
    </div>
`;const Z={title:"Components/Feed Input",parameters:{description:`The feed input is specifically designed for users to type their own notes or comments and post them to a corresponding feed.

##Usage
**Use the feed input if:**

- A user needs to input small amounts of text without formatting.
- You expect multiple instances, such as notes or feed entries.

**Do not use the feed input if:**

- The user needs to format the text (rich text editor).
- You need only a single text box instance. In this case, use the **Textarea** component (for multiple lines) or the text control (for a single line).

`,tags:["f3","a11y","theme"]}},r=()=>B;r.storyName="Default";r.parameters={docs:{description:{story:"The default feed input displays an empty text field with an inactive submit button."}}};const i=()=>j;i.storyName="With text";i.parameters={docs:{description:{story:"The input with text displays some text, activating the submit button."}}};const m=()=>C;m.parameters={docs:{description:{story:"The disabled feed input displays a text field and submit button that users cannot interact with."}}};const o=()=>z;o.storyName="No thumbnail";o.parameters={docs:{description:{story:"Although the default feed input has a thumbnail, it is possible to remove it. Without a thumbnail, the input area size increases automatically."}}};const d=()=>Y;d.storyName="Generic thumbnail";d.parameters={docs:{description:{story:"A generic thumbnail will be displayed if no image has been chosen by the user."}}};const l=()=>A;l.storyName="Multiline";l.parameters={docs:{description:{story:"The multiline feed input displays a text field with multiple lines of text, which expands until a maximum height is reached."}}};const u=()=>O;u.storyName="Max height";u.parameters={docs:{description:{story:"The max height feed input displays a text field with the maximum amount of text lines it can contain. Once the text field has reached the maximum height, a scrollbar appears to access the overflowing text."}}};var h,f,b;r.parameters=t(e({},r.parameters),{docs:t(e({},(h=r.parameters)==null?void 0:h.docs),{source:e({originalSource:"() => standardExampleHtml"},(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source)})});var g,x,v;i.parameters=t(e({},i.parameters),{docs:t(e({},(g=i.parameters)==null?void 0:g.docs),{source:e({originalSource:"() => notEmptyExampleHtml"},(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source)})});var _,y,w;m.parameters=t(e({},m.parameters),{docs:t(e({},(_=m.parameters)==null?void 0:_.docs),{source:e({originalSource:"() => disabledExampleHtml"},(w=(y=m.parameters)==null?void 0:y.docs)==null?void 0:w.source)})});var S,X,E;o.parameters=t(e({},o.parameters),{docs:t(e({},(S=o.parameters)==null?void 0:S.docs),{source:e({originalSource:"() => withoutUserImageExampleHtml"},(E=(X=o.parameters)==null?void 0:X.docs)==null?void 0:E.source)})});var H,D,F;d.parameters=t(e({},d.parameters),{docs:t(e({},(H=d.parameters)==null?void 0:H.docs),{source:e({originalSource:"() => placeholderImageExampleHtml"},(F=(D=d.parameters)==null?void 0:D.docs)==null?void 0:F.source)})});var I,J,N;l.parameters=t(e({},l.parameters),{docs:t(e({},(I=l.parameters)==null?void 0:I.docs),{source:e({originalSource:"() => inputGrowthExampleHtml"},(N=(J=l.parameters)==null?void 0:J.docs)==null?void 0:N.source)})});var P,T,W;u.parameters=t(e({},u.parameters),{docs:t(e({},(P=u.parameters)==null?void 0:P.docs),{source:e({originalSource:"() => overMaxHeightExampleHtml"},(W=(T=u.parameters)==null?void 0:T.docs)==null?void 0:W.source)})});const $=["Standard","NotEmpty","Disabled","WithoutUserImage","PlaceholderImage","InputGrowth","OverMaxHeight"];export{m as Disabled,l as InputGrowth,i as NotEmpty,u as OverMaxHeight,d as PlaceholderImage,r as Standard,o as WithoutUserImage,$ as __namedExportsOrder,Z as default};
