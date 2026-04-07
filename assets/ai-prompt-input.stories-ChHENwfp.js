/* empty css               *//* empty css             *//* empty css             *//* empty css                     *//* empty css              *//* empty css                    *//* empty css                     *//* empty css                */const t=`<h4>User prompt with no input</h4>
<div>
    <div class="fd-prompt-input" style="width: 270px;">
        <label class="fd-form-label" for="input-1">User prompt:</label>
        <div class="fd-prompt-input__wrapper">
            <div class="fd-prompt-input__inner-wrapper">
                <div class="fd-input-group">
                    <input class="fd-input fd-input fd-input-group__input" type="text" placeholder="Ask me anything..." id="input-1">
                    <span class="fd-input-group__addon fd-input-group__addon--button">
                        <button class="fd-input-group__button fd-button fd-button--transparent fd-button" aria-label="Clear">
                            <i class="sap-icon--decline"></i>
                        </button>
                    </span>
                </div>
                <span class="fd-prompt-input__counter">10 characters remaining</span>
            </div>
            <button aria-label="Add to cart" class="fd-button fd-button--emphasized" disabled>
                <i class="sap-icon--paper-plane"></i>
            </button>
        </div>
    </div>
</div>

<br>
<h4>User prompt with input</h4>
<div>
    <div class="fd-prompt-input" style="width: 270px;">
        <label class="fd-form-label" for="input-1">User prompt:</label>
        <div class="fd-prompt-input__wrapper">
            <div class="fd-prompt-input__inner-wrapper">
                <div class="fd-input-group">
                    <input class="fd-input fd-input fd-input-group__input" type="text" placeholder="Ask me anything..." value="input">
                    <span class="fd-input-group__addon fd-input-group__addon--button">
                        <button class="fd-input-group__button fd-button fd-button--transparent fd-button" aria-label="Clear">
                            <i class="sap-icon--decline"></i>
                        </button>
                    </span>
                </div>
                <span class="fd-prompt-input__counter">5 characters remaining</span>
            </div>
            <button aria-label="Add to cart" class="fd-button fd-button--emphasized">
                <i class="sap-icon--paper-plane"></i>
            </button>
        </div>
    </div>
</div>

<br>
<h4>User prompt with input and error</h4>
<div>
    <div class="fd-prompt-input" style="width: 270px;">
        <label class="fd-form-label" for="input-1">User prompt:</label>
        <div class="fd-prompt-input__wrapper">
            <div class="fd-prompt-input__inner-wrapper">
                <div class="fd-form-input-message-group fd-popover">
                    <div class="fd-popover__control" aria-controls="popoverError" aria-expanded="true" aria-haspopup="true">
                        <div class="fd-input-group is-error">
                            <input class="fd-input fd-input fd-input-group__input" type="text" placeholder="Ask me anything..." value="exceeding characters">
                            <span class="fd-input-group__addon fd-input-group__addon--button">
                                <button class="fd-input-group__button fd-button fd-button--transparent fd-button" aria-label="Clear">
                                    <i class="sap-icon--decline"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="false" id="popoverError">
                        <div class="fd-form-message fd-form-message--error" >Error message</div>
                    </div>
                </div>
                <span class="fd-prompt-input__counter">10 characters over the limit</span>
            </div>
            <button aria-label="Add to cart" class="fd-button fd-button--emphasized">
                <i class="sap-icon--paper-plane"></i>
            </button>
        </div>
    </div>
</div>`,u={title:"AI/Components/Prompt Input",parameters:{description:`The Prompt Input component allows the user to write custom instructions in natural language, so that AI is guided to generate content tailored to user needs.
<br><b>Note: The component is in an experimental state.</b>`,tags:["ai","experimental"]}},n=()=>t;n.parameters={docs:{description:{story:"The Prompt Input is built on top of [Input Group](https://fundamental-styles.netlify.app/?path=/docs/sap-fiori-components-forms-input-group--docs) and inherits its states (disabled, read-only, information, etc.)."}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => aiPromptInputExampleHtml",...n.parameters?.docs?.source}}};const l=["AIPromptInput"];export{n as AIPromptInput,l as __namedExportsOrder,u as default};
