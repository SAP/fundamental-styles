/* empty css                 *//* empty css                  *//* empty css               *//* empty css             *//* empty css                   *//* empty css             *//* empty css                */const t=`<h4>For Joule</h4>
<div>
    <label class="fd-form-label">Created with <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">Joule</span></a>. Verify results before using them.</label>
</div>
<br>
<h4>For SAP Business AI</h4>
<div>
    <label class="fd-form-label fd-form-label--required" aria-required="true">Created with <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">SAP Business AI</span></a>. Verify results before using them.</label>
</div>

<br>
<h4>With Text Area</h4>
<div style="max-width: 80%;">
    <div class="fd-form-item">
        <div class="fd-form-item__label-container">
            <label class="fd-form-label" for="textarea-ai-1">How will you measure this goal? </label>
            <button class="fd-button">
                <i class="sap-icon--ai"></i>
                <span class="fd-button__text">Revise</span>
                <i class="sap-icon--slim-arrow-down"></i>
            </button>
        </div>
        <div role="textbox" contenteditable="true" aria-multiline="true" class="fd-textarea fd-textarea--ai is-information" id="textarea-ai-1" placeholder="Write something here" rows="5"><p class="fd-ai-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eligendi quae recusandae rem illum? <mark>Vel minus corrupti in numquam qui eius totam!</mark> Sequi aut molestiae minus inventore. Sapiente, officia possimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos fugiat quas cum, voluptas consequuntur totam aliquam illum aspernatur corrupti consectetur sint eaque sequi magni alias aliquid saepe quod ab voluptates.</p>
        </div>
        <div class="fd-textarea-counter-container">
            <label class="fd-form-label">Created with <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">Joule</span></a>. Verify results before using them.</label>
            <div class="fd-textarea-counter">150 characters left</div>
        </div>
       
    </div>
</div>`,c={title:"AI/Patterns/Notice",parameters:{description:`The "AI Notice" pattern provides clear references about the quality and reliability of AI-generated results in written text. It is an essential part of the broader "messaging patterns" associated with AI services and integrates with other AI interaction patterns like explainability and feedback. This pattern helps users understand the trustworthiness of AI-generated content, enhancing transparency and confidence. It's especially useful in environments where AI-generated information is key, such as collaborative platforms, educational tools, content creation apps, and informational websites.
<br><b>Note: The component is in an experimental state.</b>`,tags:["ai","experimental"]}},e=()=>t;e.parameters={docs:{description:{story:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => aiNoticeExampleHtml",...e.parameters?.docs?.source}}};const d=["AINotice"];export{e as AINotice,d as __namedExportsOrder,c as default};
