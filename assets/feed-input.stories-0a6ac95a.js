/* empty css               *//* empty css                 *//* empty css               *//* empty css             */const o=`    <div class="fd-feed-input"
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
`,d=`    <div class="fd-feed-input"
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
`,l=`    <div class="fd-feed-input"
         role="region"
         aria-label="Feed input empty example">
        <div class="fd-avatar fd-avatar--s fd-avatar--placeholder fd-feed-input__thumb"
             role="img"
             aria-label="John Doe"
             title="John Doe">
             <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true" aria-label="Image placeholder"></i>
        </div>
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
`,u=`    <div class="fd-feed-input"
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
`,m=`    <div class="fd-feed-input is-disabled"
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
`,p=`    <div class="fd-feed-input"
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
`,c=`<div class="fd-feed-input"
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
`;const x={title:"Components/Feed Input",parameters:{description:`The feed input is specifically designed for users to type their own notes or comments and post them to a corresponding feed.

##Usage
**Use the feed input if:**

- A user needs to input small amounts of text without formatting.
- You expect multiple instances, such as notes or feed entries.

**Do not use the feed input if:**

- The user needs to format the text (rich text editor).
- You need only a single text box instance. In this case, use the **Textarea** component (for multiple lines) or the text control (for a single line).

`,tags:["f3","a11y","theme"]}},e=()=>c;e.storyName="Default";e.parameters={docs:{description:{story:"The default feed input displays an empty text field with an inactive submit button."}}};const a=()=>p;a.storyName="With text";a.parameters={docs:{description:{story:"The input with text displays some text, activating the submit button."}}};const i=()=>m;i.parameters={docs:{description:{story:"The disabled feed input displays a text field and submit button that users cannot interact with."}}};const t=()=>u;t.storyName="No thumbnail";t.parameters={docs:{description:{story:"Although the default feed input has a thumbnail, it is possible to remove it. Without a thumbnail, the input area size increases automatically."}}};const n=()=>l;n.storyName="Generic thumbnail";n.parameters={docs:{description:{story:"A generic thumbnail will be displayed if no image has been chosen by the user."}}};const r=()=>d;r.storyName="Multiline";r.parameters={docs:{description:{story:"The multiline feed input displays a text field with multiple lines of text, which expands until a maximum height is reached."}}};const s=()=>o;s.storyName="Max height";s.parameters={docs:{description:{story:"The max height feed input displays a text field with the maximum amount of text lines it can contain. Once the text field has reached the maximum height, a scrollbar appears to access the overflowing text."}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => standardExampleHtml",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => notEmptyExampleHtml",...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => disabledExampleHtml",...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => withoutUserImageExampleHtml",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => placeholderImageExampleHtml",...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"() => inputGrowthExampleHtml",...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => overMaxHeightExampleHtml",...s.parameters?.docs?.source}}};const v=["Standard","NotEmpty","Disabled","WithoutUserImage","PlaceholderImage","InputGrowth","OverMaxHeight"];export{i as Disabled,r as InputGrowth,a as NotEmpty,s as OverMaxHeight,n as PlaceholderImage,e as Standard,t as WithoutUserImage,v as __namedExportsOrder,x as default};
