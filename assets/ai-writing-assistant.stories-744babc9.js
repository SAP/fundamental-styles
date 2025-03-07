/* empty css                 *//* empty css                  *//* empty css              *//* empty css                    *//* empty css               *//* empty css             *//* empty css                   *//* empty css             *//* empty css             *//* empty css                *//* empty css                                        */const t=`<h4>With empty field</h4>
<div class="fd-form-item">
    <label class="fd-form-label fd-form-label--required" aria-required="true" for="ai-wa-1">Label:</label>
    <div class="fd-ai-writing-assistant">
        <div class="fd-input-group">
            <input class="fd-input fd-input-group__input" type="text" placeholder="Placeholder" id="ai-wa-1" name="">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button class="fd-input-group__button fd-button fd-button--icon fd-button--transparent" aria-label="Navigation">
                    <i class="sap-icon--ai"></i>
                </button>
            </span>
        </div>
    </div>
</div>

<div style="margin-block: 2rem 1rem;">The AI writing assistant appears when selection focus is on the input field.</div>
<div class="fd-form-item">
    <label class="fd-form-label fd-form-label--required" aria-required="true" for="ai-wa-2">Label:</label>
    <div class="fd-ai-writing-assistant">
        <div class="fd-input-group is-focus">
            <input class="fd-input fd-input-group__input is-focus" type="text" placeholder="Placeholder" id="ai-wa-2" name="">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button class="fd-input-group__button fd-button fd-button--icon fd-button--transparent" aria-label="Navigation">
                    <i class="sap-icon--ai"></i>
                </button>
            </span>
        </div>
    </div>
</div>

<div style="margin-block: 2rem 1rem;">For empty input fields the AI writing assistant menu is limited to the ”generate” prompt.</div>
<div class="fd-form-item">
    <label class="fd-form-label fd-form-label--required" aria-required="true" for="ai-wa-3">Label:</label>
    <div class="fd-ai-writing-assistant">
        <div class="fd-input-group is-focus">
            <input class="fd-input fd-input-group__input is-focus" type="text" placeholder="Placeholder" id="ai-wa-3" name="">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button class="fd-input-group__button fd-button fd-button--icon fd-button--transparent" aria-label="Navigation">
                    <i class="sap-icon--ai"></i>
                </button>
            </span>
        </div>
        <nav class="fd-menu">
            <ul class="fd-menu__list" role="menu">
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <span class="fd-menu__title">Generate</span>
                        <span class="fd-menu__shortcut">Ctrl + Enter</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>

<br><br>
<h4>With user input</h4>
<div style="margin-block: 2rem 1rem;">AI writing assistant appear on focus on the input field.</div>
<div class="fd-form-item">
    <label class="fd-form-label fd-form-label--required" aria-required="true" for="ai-wa-5">Label:</label>
    <div class="fd-ai-writing-assistant">
        <div class="fd-input-group">
            <input class="fd-input fd-input-group__input" type="text" placeholder="Placeholder" id="ai-wa-5" name="" value="Fellowship">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button class="fd-input-group__button fd-button fd-button--icon fd-button--transparent" aria-label="Navigation">
                    <i class="sap-icon--ai"></i>
                </button>
            </span>
        </div>
    </div>
</div>

<br><br>
<div style="margin-block: 2rem 1rem;">The user click on the AI writing assistant button it opens a menu with AI actions configured by the product team to be performed within the input field. If there is no previous AI content on the field the only option is ”Generate”</div>
<div style="height: 100px;"></div>

<div class="fd-form-item">
    <label class="fd-form-label fd-form-label--required" aria-required="true" for="ai-wa-6">Label:</label>
    <div class="fd-ai-writing-assistant">
        <div class="fd-input-group is-focus">
            <input class="fd-input fd-input-group__input" type="text" placeholder="Placeholder" id="ai-wa-6" name="" value="Fellowship">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button class="fd-input-group__button fd-button fd-button--icon fd-button--transparent is-active" aria-label="Navigation">
                    <i class="sap-icon--ai"></i>
                </button>
            </span>
        </div>
        <nav class="fd-menu">
            <ul class="fd-menu__list" role="menu">
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <span class="fd-menu__title">Regenerate</span>
                        <span class="fd-menu__shortcut">Ctrl + Enter</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <span class="fd-menu__title">Fix Spelling and Grammar</span>
                    </a>
                </li>
                <li class="fd-menu__item has-separator" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <span class="fd-menu__title">Translate</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>

<br><br>
<div style="margin-block: 2rem 1rem;">One second after the user triggers the content generation AI Progress Indicator appears inside the input in information value state.  The AI writing assistant button transitions to a stop generating button and the menu is not accessible until the generation process ends.</div>
<div class="fd-form-item">
    <label class="fd-form-label fd-form-label--required" aria-required="true" for="ai-wa-7">Label:</label>
    <div class="fd-ai-writing-assistant">
        <div class="fd-input-group is-focus is-highlight">
            <input class="fd-input fd-input-group__input" type="text" placeholder="Placeholder" id="ai-wa-7" name="" value="Analyzing request...">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button class="fd-input-group__button fd-button fd-button--icon fd-button--transparent" aria-label="Navigation">
                    <i class="sap-icon--stop"></i>
                </button>
            </span>
        </div>
    </div>
</div>

<br><br>
<div style="margin-block: 2rem 1rem;">Once the generation process is completed or stopped by the user, the AI Progress indicator disappear, the "Stop Generating" button transitions back into an AI writing assistant icon menu button, the AI text highlight pattern is applied to generated text.</div>
<div class="fd-form-item">
    <label class="fd-form-label fd-form-label--required" aria-required="true" for="ai-wa-8">Label:</label>
    <div class="fd-ai-writing-assistant">
        <div class="fd-input-group is-focus is-highlight">
            <input class="fd-input fd-input-group__input" type="text" placeholder="Placeholder" id="ai-wa-8" name="" value="AI Design Fellowship">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button class="fd-input-group__button fd-button fd-button--icon fd-button--transparent" aria-label="Navigation">
                    <i class="sap-icon--ai"></i>
                </button>
            </span>
        </div>
    </div>
</div>

<br><br>
<div style="margin-block: 2rem 1rem;">User can keep fine-tuning the results by selecting actions from the menu and navigate through the different versions of content through the versioning element,</div>
<div style="height: 100px;"></div>

<div class="fd-form-item">
    <label class="fd-form-label fd-form-label--required" aria-required="true" for="ai-wa-9">Label:</label>
    <div class="fd-ai-writing-assistant">
        <div class="fd-input-group is-focus is-highlight">
            <input class="fd-input fd-input-group__input" type="text" placeholder="Placeholder" id="ai-wa-9" name="" value="Fellowship">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button class="fd-input-group__button fd-button fd-button--icon fd-button--transparent is-active" aria-label="Navigation">
                    <i class="sap-icon--ai"></i>
                </button>
            </span>
        </div>
        <nav class="fd-menu">
            <ul class="fd-menu__list" role="menu">
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <span class="fd-menu__title">Regenerate</span>
                        <span class="fd-menu__shortcut">Ctrl + Enter</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <span class="fd-menu__title">Fix Spelling and Grammar</span>
                    </a>
                </li>
                <li class="fd-menu__item has-separator" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <span class="fd-menu__title">Translate</span>
                    </a>
                </li>
                <li class="fd-menu__item has-separator" role="presentation">
                    <div class="fd-ai-writing-assistant-versioning">
                        <button aria-label="Previous Version" title="Previous Version (Shift+Ctrl+Z)" class="fd-button fd-button--transparent">
                            <i class="sap-icon--navigation-left-arrow"></i>
                        </button>
                        <label class="fd-form-label fd-form-label--stand-alone">2 / 2</label>
                        <button aria-label="Next Version" title="Next Version (Shift+Ctrl+Y)" class="fd-button fd-button--transparent" disabled>
                            <i class="sap-icon--navigation-right-arrow"></i>
                        </button>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
</div>


<br><br>
<div style="margin-block: 2rem 1rem;">After generating content wth th AI writing assistant, from a populated field versioning allows to navigate back to the original content. The input field inherits its former value state.</div>
<div style="height: 100px;"></div>

<div class="fd-form-item">
    <label class="fd-form-label fd-form-label--required" aria-required="true" for="ai-wa-10">Label:</label>
    <div class="fd-ai-writing-assistant">
        <div class="fd-input-group is-focus">
            <input class="fd-input fd-input-group__input" type="text" placeholder="Placeholder" id="ai-wa-10" name="" value="Fellowship">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button class="fd-input-group__button fd-button fd-button--icon fd-button--transparent is-active" aria-label="Navigation">
                    <i class="sap-icon--ai"></i>
                </button>
            </span>
        </div>
        <nav class="fd-menu">
            <ul class="fd-menu__list" role="menu">
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <span class="fd-menu__title">Regenerate</span>
                        <span class="fd-menu__shortcut">Ctrl + Enter</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <span class="fd-menu__title">Fix Spelling and Grammar</span>
                    </a>
                </li>
                <li class="fd-menu__item has-separator" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <span class="fd-menu__title">Translate</span>
                    </a>
                </li>
                <li class="fd-menu__item has-separator" role="presentation">
                    <div class="fd-ai-writing-assistant-versioning">
                        <button aria-label="Previous Version" title="Previous Version (Shift+Ctrl+Z)" class="fd-button fd-button--transparent" disabled>
                            <i class="sap-icon--navigation-left-arrow"></i>
                        </button>
                        <label class="fd-form-label fd-form-label--stand-alone">1 / 2</label>
                        <button aria-label="Next Version" title="Next Version (Shift+Ctrl+Y)" class="fd-button fd-button--transparent">
                            <i class="sap-icon--navigation-right-arrow"></i>
                        </button>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
</div>`;const c={title:"AI/Patterns/Writing Assistant",parameters:{description:`The AI Writing Assistant simplifies interactions with generative AI, improving task efficiency and creating an intuitive, valuable user experience.
It integrates with input fields, textareas and riche text editors, assisting users in crafting, refining, and enhancing text through Quick Prompts. These prompts, designed by prompt engineers who specialize in quality, guide the AI's output. The AI Writing Assistant Menu offers writing-focused options like "Change Tone," "Adjust Length," "Translate," and "Analyze Text," which can be applied to all or part of the text.

<b>Use Writing Assistant: </b>
<ul>
    <li>for repetitive or common text editing tasks within a workflow.</li>
    <li>when minimizing user bias in writing prompts is important.</li>
    <li>when consistent and predictable outcomes are essential.</li>
    <li>use recommended AI action labels.</li>
    <li>always pair with the AI Notice pattern.</li>
    <li>to ensure users are aware they're interacting with AI.</li>
    <li>to enable the AI Writing Assistant only on key fields in longer forms for optimal performance.</li>
    <li>to ensure text areas and rich text editors have a proper minimum height to accommodate the AI Writing Assistant</li>
</ul>

<b>Do not use Writing Assistant: </b>
<ul>
  <li>with AI Menu Button Quick Prompts.</li>
  <li>where AI-assisted editing is unlikely to add value.</li>
  <li>when the AI lacks context for high-quality results; consider custom or guided prompts instead.</li>
  <li>for non-AI functions.</li>
  <li>avoid mixing AI and non-AI functions in the AI Writing Assistant menu and toolbar.</li>
</ul>

<br><b>Note: The component is in an experimental state.</b>`,tags:["ai","experimental"]}},n=()=>t;n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => aiWritingAssistantInputsExampleHtml",...n.parameters?.docs?.source}}};const m=["AIWritingAssistantForInputFileds"];export{n as AIWritingAssistantForInputFileds,m as __namedExportsOrder,c as default};
