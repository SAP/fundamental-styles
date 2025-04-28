/* empty css               *//* empty css                 *//* empty css               *//* empty css             */const o=`<div class="fd-feed-input"
    role="group"
    aria-label="Feed input over max height">
    <div class="fd-feed-input__container">
        <div 
            class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-input__thumb"
            style="background-image: url('assets/images/avatars/4.svg')"
            role="img"
            aria-label="John Doe"></div>
        <textarea 
            class="fd-textarea fd-feed-input__textarea"
            placeholder="Post something here"
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
X
        </textarea>
        <button class="fd-button fd-feed-input__submit-button"
            role="button"
            aria-disabled="false"
            aria-label="Submit"
            title="Submit">
            <i role="presentation" aria-hidden="true" class="sap-icon--feeder-arrow"></i>
        </button>
    </div>
</div>
`,d=`    <div class="fd-feed-input"
        role="group"
        aria-label="Feed input height growth">
        <div class="fd-feed-input__container">
            <div class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-input__thumb"
                style="background-image: url('assets/images/avatars/4.svg')"
                role="img"
                aria-label="John Doe">
            </div>
            <textarea class="fd-textarea fd-feed-input__textarea"
                placeholder="Post something here"
                required
                rows="4">With every line
"textarea" grows upward
until it reaches
the max height
            </textarea>
            <button class="fd-button fd-feed-input__submit-button"
                role="button"
                aria-disabled="false"
                aria-label="Submit"
                title="Submit">
                <i role="presentation" aria-hidden="true" class="sap-icon--feeder-arrow"></i>
            </button>
         </div>
    </div>
`,l=`    <div class="fd-feed-input"
        role="group"
        aria-label="Feed input empty example">
        <div class="fd-feed-input__container">
            <div class="fd-avatar fd-avatar--s fd-avatar--placeholder fd-feed-input__thumb"
                role="img"
                aria-label="John Doe">
                <i class="fd-avatar__icon sap-icon--person-placeholder" role="presentation" aria-hidden="true"></i>
            </div>
            <textarea class="fd-textarea fd-feed-input__textarea"
                placeholder="Post something here"
                required
                rows="1">With generic user image
            </textarea>
            <button 
                class="fd-button fd-feed-input__submit-button"
                role="button"
                aria-label="Submit"
                title="Submit">
                <i role="presentation" aria-hidden="true" class="sap-icon--feeder-arrow"></i>
            </button>
        </div>
    </div>
`,u=`<div class="fd-feed-input"
    role="group"
    aria-label="Feed input empty example">
    <div class="fd-feed-input__container">
        <textarea class="fd-textarea fd-feed-input__textarea"
            placeholder="Post something here"
            required
            rows="1">Without user image
        </textarea>
        <button class="fd-button fd-feed-input__submit-button"
            role="button"
            aria-label="Submit"
            title="Submit">
            <i role="presentation" aria-hidden="true" class="sap-icon--feeder-arrow"></i>
        </button>
    </div>
</div>
`,p=`    <div class="fd-feed-input is-disabled"
        role="group"
        aria-label="Feed input disabled example">
        <div class="fd-feed-input__container">
            <div class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-input__thumb"
                style="background-image: url('assets/images/avatars/4.svg')"
                role="img"
                aria-label="John Doe"></div>
            <textarea class="fd-textarea fd-feed-input__textarea"
                placeholder="Post something here"
                required
                rows="1"
                aria-disabled="true"
                disabled>Disabled</textarea>
            <button class="fd-button fd-feed-input__submit-button"
                disabled
                role="button"
                aria-label="Submit"
                aria-disabled="true"
                title="Submit">
                <i role="presentation" aria-hidden="true" class="sap-icon--feeder-arrow"></i>
            </button>
        </div>
    </div>
`,m=`<div class="fd-feed-input"
    role="group"
    aria-label="Feed input with one row text">
    <div class="fd-feed-input__container">
        <div class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-input__thumb"
            style="background-image: url('assets/images/avatars/4.svg')"
            role="img"
            aria-label="John Doe">
        </div>
        <textarea class="fd-textarea fd-feed-input__textarea"
            placeholder="Post something here"
            required
            rows="1">When there is text, the submit button becomes active.
        </textarea>
        <button 
            class="fd-button fd-feed-input__submit-button"
            aria-label="Submit"
            aria-disabled="false"
            title="Submit"
            role="button"
        >
            <i role="presentation" aria-hidden="true" class="sap-icon--feeder-arrow"></i>
        </button>
    </div>
</div>
`,c=`<div class="fd-feed-input"
         role="group"
         aria-label="Feed input empty example">
        <div class="fd-feed-input__container">
            <div class="fd-avatar fd-avatar--s fd-avatar--thumbnail fd-feed-input__thumb"
                style="background-image: url('assets/images/avatars/4.svg')"
                role="img"
                aria-label="John Doe"></div>
            <textarea class="fd-textarea fd-feed-input__textarea"
                placeholder="Post something here"
                required
                rows="1"></textarea>
            <button class="fd-button fd-feed-input__submit-button"
                disabled
                role="button"
                aria-disabled="true"
                aria-label="Submit"
                title="Submit">
                <i role="presentation" aria-hidden="true" class="sap-icon--paper-plane"></i>
            </button>
        </div>
    </div>
`;const x={title:"Components/Feed Input",parameters:{description:`The feed input is specifically designed for users to type their own notes or comments and post them to a corresponding feed.

##Usage
**Use the feed input if:**

- A user needs to input small amounts of text without formatting.
- You expect multiple instances, such as notes or feed entries.

**Do not use the feed input if:**

- The user needs to format the text (rich text editor).
- You need only a single text box instance. In this case, use the **Textarea** component (for multiple lines) or the text control (for a single line).

`,tags:["f3","a11y","theme"]}},e=()=>c;e.storyName="Default";e.parameters={docs:{description:{story:"The default feed input displays an empty text field with an inactive submit button."}}};const t=()=>m;t.storyName="With text";t.parameters={docs:{description:{story:"The input with text displays some text, activating the submit button."}}};const s=()=>p;s.parameters={docs:{description:{story:"The disabled feed input displays a text field and submit button that users cannot interact with."}}};const a=()=>u;a.storyName="No thumbnail";a.parameters={docs:{description:{story:"Although the default feed input has a thumbnail, it is possible to remove it. Without a thumbnail, the input area size increases automatically."}}};const n=()=>l;n.storyName="Generic thumbnail";n.parameters={docs:{description:{story:"A generic thumbnail will be displayed if no image has been chosen by the user."}}};const r=()=>d;r.storyName="Multiline";r.parameters={docs:{description:{story:"The multiline feed input displays a text field with multiple lines of text, which expands until a maximum height is reached."}}};const i=()=>o;i.storyName="Max height";i.parameters={docs:{description:{story:"The max height feed input displays a text field with the maximum amount of text lines it can contain. Once the text field has reached the maximum height, a scrollbar appears to access the overflowing text."}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => standardExampleHtml",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => notEmptyExampleHtml",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => disabledExampleHtml",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => withoutUserImageExampleHtml",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => placeholderImageExampleHtml",...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"() => inputGrowthExampleHtml",...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => overMaxHeightExampleHtml",...i.parameters?.docs?.source}}};const v=["Standard","NotEmpty","Disabled","WithoutUserImage","PlaceholderImage","InputGrowth","OverMaxHeight"];export{s as Disabled,r as InputGrowth,t as NotEmpty,i as OverMaxHeight,n as PlaceholderImage,e as Standard,a as WithoutUserImage,v as __namedExportsOrder,x as default};
