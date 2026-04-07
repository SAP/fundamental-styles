/* empty css                   *//* empty css                  *//* empty css                 *//* empty css               *//* empty css             *//* empty css             *//* empty css              *//* empty css            *//* empty css               *//* empty css                    */const s=`<div class="fd-message-box-docs-static fd-message-box fd-message-box--information fd-message-box--active">
    <section class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <i class="sap-icon--information"></i>
                    <h5 class="fd-title fd-title--h5">Information</h5>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
            <br>
            SAP CX AI Toolkit now provides embedded AI services. For more information, see the <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">SAP Help Portal</span></a>
            <br><br>
            <h6 class="fd-title fd-title--h6">Disclaimer</h6>
            <br>
            Artificial Intelligence (AI) generates results based on multiple sources. Outputs may contain errors and inaccuracies. Consider reviewing all generated results and adjust as necessary.
            <br><br>
            <div class="fd-form-group">
                <div class="fd-form-item">
                    <input type="checkbox" class="fd-checkbox" id="ai-ack">
                    <label class="fd-checkbox__label" for="ai-ack">
                        <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        <div class="fd-checkbox__label-container">
                            <span class="fd-checkbox__text">Don't show this message again</span>
                        </div>
                    </label>
                </div>
            </div>
        </div>
        <footer class="fd-bar fd-bar--footer fd-message-box__footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-message-box__decisive-button">
                        OK
                    </button>
                </div>
            </div>
        </footer>
    </section>
</div>`,p={title:"AI/Patterns/Acknowledgment",parameters:{description:`AI Acknowledgment provides users with important information and updates about an AI service in a standardized format. Its main goal is to educate users on the key aspects of AI-enabled applications, including potential risks, opportunities, and limitations. This helps set user expectations and fosters trust.

<b>Anatomy</b>
<ul>
    <li>Container: could be a Dialog or Message Box</li>
    <li>Illustrated Messages (optional): an image representing the AI service.
    Note: No specific AI illustrations are currently available. Please request new images if needed.
    </li>
    <li>Intro / Primary Message: The main message</li>
    <li>Headlines (optional): Descriptive headline for the paragraph.</li>
    <li>Reason / Key Aspects: The reason for this message</li>
    <li>Details / Link: Additional information and resources</li>
    <li>Checkbox Option: “Don't show this message again”</li>
</ul>
For more information see utilised/reused components in this pattern: Dialog, Message Box, and Illustrated Messages.

<br><b>Note: The component is in an experimental state.</b>`,tags:["ai","experimental"]}},e=()=>s;e.parameters={docs:{description:{story:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => aiAcknowledgmentExampleHtml",...e.parameters?.docs?.source}}};const f=["AIAcknowledgment"];export{e as AIAcknowledgment,f as __namedExportsOrder,p as default};
