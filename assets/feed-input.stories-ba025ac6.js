/* empty css               *//* empty css                 *//* empty css               *//* empty css             */const F=`    <div class="fd-feed-input"
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
`,I=`    <div class="fd-feed-input"
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
`,J=`    <div class="fd-feed-input"
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
`,N=`    <div class="fd-feed-input"
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
`,P=`    <div class="fd-feed-input is-disabled"
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
`,T=`    <div class="fd-feed-input"
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
`,W=`<div class="fd-feed-input"
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
`;const G={title:"Components/Feed Input",parameters:{description:`The feed input is specifically designed for users to type their own notes or comments and post them to a corresponding feed.

##Usage
**Use the feed input if:**

- A user needs to input small amounts of text without formatting.
- You expect multiple instances, such as notes or feed entries.

**Do not use the feed input if:**

- The user needs to format the text (rich text editor).
- You need only a single text box instance. In this case, use the **Textarea** component (for multiple lines) or the text control (for a single line).

`,tags:["f3","a11y","theme"]}},e=()=>W;e.storyName="Default";e.parameters={docs:{description:{story:"The default feed input displays an empty text field with an inactive submit button."}}};const t=()=>T;t.storyName="With text";t.parameters={docs:{description:{story:"The input with text displays some text, activating the submit button."}}};const i=()=>P;i.parameters={docs:{description:{story:"The disabled feed input displays a text field and submit button that users cannot interact with."}}};const a=()=>N;a.storyName="No thumbnail";a.parameters={docs:{description:{story:"Although the default feed input has a thumbnail, it is possible to remove it. Without a thumbnail, the input area size increases automatically."}}};const n=()=>J;n.storyName="Generic thumbnail";n.parameters={docs:{description:{story:"A generic thumbnail will be displayed if no image has been chosen by the user."}}};const s=()=>I;s.storyName="Multiline";s.parameters={docs:{description:{story:"The multiline feed input displays a text field with multiple lines of text, which expands until a maximum height is reached."}}};const r=()=>F;r.storyName="Max height";r.parameters={docs:{description:{story:"The max height feed input displays a text field with the maximum amount of text lines it can contain. Once the text field has reached the maximum height, a scrollbar appears to access the overflowing text."}}};var o,d,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"() => standardExampleHtml",...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,m,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"() => notEmptyExampleHtml",...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,h,f;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"() => disabledExampleHtml",...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,g,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:"() => withoutUserImageExampleHtml",...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var v,_,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:"() => placeholderImageExampleHtml",...(y=(_=n.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var w,S,X;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:"() => inputGrowthExampleHtml",...(X=(S=s.parameters)==null?void 0:S.docs)==null?void 0:X.source}}};var E,H,D;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:"() => overMaxHeightExampleHtml",...(D=(H=r.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};const O=["Standard","NotEmpty","Disabled","WithoutUserImage","PlaceholderImage","InputGrowth","OverMaxHeight"];export{i as Disabled,s as InputGrowth,t as NotEmpty,r as OverMaxHeight,n as PlaceholderImage,e as Standard,a as WithoutUserImage,O as __namedExportsOrder,G as default};
//# sourceMappingURL=feed-input.stories-ba025ac6.js.map
