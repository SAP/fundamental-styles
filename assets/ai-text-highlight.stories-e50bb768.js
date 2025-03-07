/* empty css                 *//* empty css                 *//* empty css                   *//* empty css                     *//* empty css                  *//* empty css                   *//* empty css                *//* empty css             *//* empty css               *//* empty css             *//* empty css                */const n=`<div style="max-width: 80%;">
    <h4>Regular</h4>
    <div class="fd-form-item">
        <div class="fd-form-item__label-container">
            <label class="fd-form-label" for="textarea-ai-1">How will you measure this goal? </label>
            <button class="fd-button">
                <i class="sap-icon--ai"></i>
                <span class="fd-button__text">Revise</span>
                <i class="sap-icon--slim-arrow-down"></i>
            </button>
        </div>
        <div class="fd-popover">
            <div class="fd-popover__control" aria-controls="popoverAI1" aria-expanded="false" aria-haspopup="true">
                <div role="textbox" contenteditable="true" aria-multiline="true" class="fd-textarea fd-textarea--ai is-information" id="textarea-ai-1" placeholder="Write something here" rows="5"><p class="fd-ai-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eligendi quae recusandae rem illum? <mark>Vel minus corrupti in numquam qui eius totam!</mark> Sequi aut molestiae minus inventore. Sapiente, officia possimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos fugiat quas cum, voluptas consequuntur totam aliquam illum aspernatur corrupti consectetur sint eaque sequi magni alias aliquid saepe quod ab voluptates.</p>
                </div>
            </div>
            <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="true" id="popoverAI1">
                <div class="fd-form-message fd-form-message--information">Information message</div>
            </div>
        </div>
    </div>

    <br><br><br>
    <h4>Text Area on Hover</h4>
    <div class="fd-form-item">
        <div class="fd-form-item__label-container">
            <label class="fd-form-label" for="textarea-ai-2">How will you measure this goal? </label>
            <button class="fd-button">
                <i class="sap-icon--ai"></i>
                <span class="fd-button__text">Revise</span>
                <i class="sap-icon--slim-arrow-down"></i>
            </button>
        </div>
        <div class="fd-popover">
            <div class="fd-popover__control" aria-controls="popoverAI2" aria-expanded="false" aria-haspopup="true">
                <div role="textbox" contenteditable="true" aria-multiline="true" class="fd-textarea fd-textarea--ai is-information is-hover" id="textarea-ai-2" placeholder="Write something here" rows="5"><p class="fd-ai-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eligendi quae recusandae rem illum? <mark>Vel minus corrupti in numquam qui eius totam!</mark> Sequi aut molestiae minus inventore. Sapiente, officia possimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos fugiat quas cum, voluptas consequuntur totam aliquam illum aspernatur corrupti consectetur sint eaque sequi magni alias aliquid saepe quod ab voluptates.</p>
                </div>
            </div>
            <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="true" id="popoverAI2">
                <div class="fd-form-message fd-form-message--information">Information message</div>
            </div>
        </div>
    </div>

    <br><br><br>
    <h4>Hover on AI-Text</h4>
    <div class="fd-form-item">
        <div class="fd-form-item__label-container">
            <label class="fd-form-label" for="textarea-ai-4">How will you measure this goal? </label>
            <div class="fd-popover">
                <div class="fd-popover__control">
                    <button class="fd-button">
                        <i class="sap-icon--ai"></i>
                        <span class="fd-button__text">Revise</span>
                        <i class="sap-icon--slim-arrow-down"></i>
                    </button>
                </div>
                <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false">
                    <nav class="fd-menu" style="overflow: visible;">
                        <ul class="fd-menu__list" role="menu">
                            <li class="fd-menu__item" role="presentation">
                                <a class="fd-menu__link" href="#" role="menuitem">
                                    <span class="fd-menu__title">Regenerate</span>
                                </a>
                            </li>
                            <li class="fd-menu__item" role="presentation">
                                <a class="fd-menu__link" href="#" role="menuitem">
                                    <span class="fd-menu__title">Fix Spelling & Grammar</span>
                                </a>
                            </li>
                            <li class="fd-menu__item" role="presentation">
                                <span
                                    class="fd-menu__link has-child"
                                    aria-controls="EX_AI_1"
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    role="menuitem"
                                    onclick="onPopoverClick('EX_AI_1')">
                                        <span class="fd-menu__title">Change Tone</span>
                                        <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                                </span>
                                <ul class="fd-menu__sublist" id="EX_AI_1" aria-hidden="true" role="menu">
                                    <li class="fd-menu__item" role="presentation">
                                        <a class="fd-menu__link" href="#" role="menuitem">
                                            <span class="fd-menu__title">Option 1</span>
                                        </a>
                                    </li>
                                    <li class="fd-menu__item" role="presentation">
                                        <a class="fd-menu__link" href="#" role="menuitem">
                                            <span class="fd-menu__title">Option 2</span>
                                        </a>
                                    </li>
                                    <li class="fd-menu__item" role="presentation">
                                        <a class="fd-menu__link" href="#" role="menuitem">
                                            <span class="fd-menu__title">Option 3</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="fd-menu__item" role="presentation">
                                <span
                                    class="fd-menu__link has-child"
                                    aria-controls="EX_AI_2"
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    role="menuitem"
                                    onclick="onPopoverClick('EX_AI_2')">
                                        <span class="fd-menu__title">Text Length</span>
                                        <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                                </span>
                                <ul class="fd-menu__sublist" id="EX_AI_2" aria-hidden="true" role="menu">
                                    <li class="fd-menu__item" role="presentation">
                                        <a class="fd-menu__link" href="#" role="menuitem">
                                            <span class="fd-menu__title">Short</span>
                                        </a>
                                    </li>
                                    <li class="fd-menu__item" role="presentation">
                                        <a class="fd-menu__link" href="#" role="menuitem">
                                            <span class="fd-menu__title">Medium</span>
                                        </a>
                                    </li>
                                    <li class="fd-menu__item" role="presentation">
                                        <a class="fd-menu__link" href="#" role="menuitem">
                                            <span class="fd-menu__title">Long</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="fd-menu__item" role="presentation">
                                <a class="fd-menu__link" href="#" role="menuitem">
                                    <span class="fd-menu__title">Bulleted List</span>
                                </a>
                            </li>
                            <li class="fd-menu__item" role="presentation">
                                <span
                                    class="fd-menu__link has-child"
                                    aria-controls="EX_AI_3"
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    role="menuitem"
                                    onclick="onPopoverClick('EX_AI_3')">
                                        <span class="fd-menu__title">Translate</span>
                                        <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                                </span>
                                <ul class="fd-menu__sublist" id="EX_AI_3" aria-hidden="true" role="menu">
                                    <li class="fd-menu__item" role="presentation">
                                        <a class="fd-menu__link" href="#" role="menuitem">
                                            <span class="fd-menu__title">English</span>
                                        </a>
                                    </li>
                                    <li class="fd-menu__item" role="presentation">
                                        <a class="fd-menu__link" href="#" role="menuitem">
                                            <span class="fd-menu__title">German</span>
                                        </a>
                                    </li>
                                    <li class="fd-menu__item" role="presentation">
                                        <a class="fd-menu__link" href="#" role="menuitem">
                                            <span class="fd-menu__title">Spanish</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <div class="fd-popover">
            <div class="fd-popover__control" aria-controls="popoverAI3" aria-expanded="false" aria-haspopup="true">
                <div role="textbox" contenteditable="true" aria-multiline="true" class="fd-textarea fd-textarea--ai is-information is-hover" id="textarea-ai-3" placeholder="Write something here" rows="5"><p class="fd-ai-text">Lorem ipsum dolor sit amet. <mark class="is-hover">Vel minus corrupti in numquam qui eius totam!</mark> Sequi aut molestiae minus inventore. Sapiente, officia possimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos fugiat quas cum, voluptas consequuntur totam aliquam illum aspernatur corrupti consectetur sint eaque sequi magni alias aliquid saepe quod ab voluptates.</p>
                </div>
            </div>
            <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="true" id="popoverAI3">
                <div class="fd-form-message fd-form-message--information">Information message</div>
            </div>
        </div>
    </div>


    <br><br><br>
    <div style="min-height: 100px;"></div>
</div>`,c={title:"AI/Patterns/Text Highlight",parameters:{description:`The AI Text Highlight pattern helps users differentiate between AI-generated and human-authored text. This clear distinction is vital for maintaining transparency and trust, especially as AI becomes more prevalent in applications. By visually distinguishing the two types of text, users can easily identify the source of the information, aiding in understanding the context and any potential biases. This pattern is especially useful in scenarios where both AI and human inputs are present.
<br><b>Note: The component is in an experimental state.</b>`,tags:["ai","experimental"]}},e=()=>n;e.parameters={docs:{description:{story:"The AI Text highlight pattern is always used on a block of text shown within components like Text Area, Rich Text Editor etc."}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => aiTextHighlightExampleHtml",...e.parameters?.docs?.source}}};const f=["AITextHighlight"];export{e as AITextHighlight,f as __namedExportsOrder,c as default};
