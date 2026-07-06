/* empty css                 *//* empty css                 *//* empty css                   *//* empty css                     *//* empty css                  *//* empty css                   *//* empty css                *//* empty css             *//* empty css               *//* empty css               *//* empty css              *//* empty css            *//* empty css                         *//* empty css             *//* empty css               *//* empty css             *//* empty css                */const n=`
<div class="fd-popover">
    <div class="fd-popover__control">
        <button
            aria-controls="popoverHSF366"
            aria-expanded="true"
            aria-haspopup="dialog"
            class="fd-button"
            onclick="onPopoverClick('popoverHSF366');"
            role="button">
                Guided Prompt
        </button>
    </div>
    <section
        aria-hidden="false"
        class="fd-popover__body"
        id="popoverHSF366"
        aria-label="Dialog Data 1"
        role="dialog">
        <header class="fd-popover__body-header">
            <div class="fd-bar">
                <div class="fd-bar__left">
                    <div id="popoverHeader" class="fd-bar__element">
                        <h5 class="fd-title fd-title--h5" aria-label="text">Improve Text</h5>
                    </div>
                </div>
            </div>
        </header>
   
        <div class="fd-form-group fd-form-group--with-spacing" style="padding: 1rem; min-width: 500px;">
            <div class="fd-form-item">
                <label class="fd-form-label" id="structureLabel">Structure:</label>
                <div class="fd-popover">
                    <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
                        <div class="fd-select">
                            <button
                                aria-labelledby="structureLabel"
                                aria-expanded="true"
                                aria-haspopup="listbox"
                                class="fd-select__control"
                                id="structureSelect"
                                onclick="
                                    toggleElAttrs('select001', ['aria-hidden']);
                                    toggleElAttrs('structureSelect', ['aria-expanded']);
                                "
                                tabindex="0">
                                <span is="formSelectValue" class="fd-select__text-content">Paragraph</span>
                                <span class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div
                        aria-hidden="true"
                        class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown"
                        id="select001">
                        <ul
                            aria-labelledby="formSelectLabel"
                            class="fd-list fd-list--dropdown"
                            role="listbox">
                            <li
                                id="asFormItemSelectCombobox-currentlyFocusedItem"
                                class="fd-list__item is-selected"
                                role="option"
                                tabindex="0">
                                <span class="fd-list__title">
                                    Paragraph
                                </span>
                            </li>
                            <li class="fd-list__item"
                                role="option"
                                tabindex="-1">
                                <span class="fd-list__title">Paragraph</span>
                            </li>
                            <li class="fd-list__item"
                                role="option"
                                tabindex="-1">
                                <span class="fd-list__title">Paragraph</span>
                            </li>
                            <li class="fd-list__item"
                                role="option"
                                tabindex="-1">
                                <span class="fd-list__title">Paragraph</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="fd-form-item">
                <label class="fd-form-label" id="lengthLabel">Length:</label>
                <div class="fd-slider fd-slider--range">
                    <div class="fd-slider__inner">
                        <div class="fd-slider__track">
                        <div class="fd-slider__track-range" style="width: 40%">
                            <div class="fd-slider__track-focus-range" tabindex="0"></div>
                        </div>
                        </div>
                        <div class="fd-slider__handle" tabindex="0" role="slider" aria-label="range slider left" aria-valuemin="1" aria-valuemax="80" aria-valuenow="40" style="left: 40%;"></div>
                        <div class="fd-slider__handle" tabindex="0" role="slider" aria-label="range slider right" aria-valuemin="40" aria-valuemax="100" aria-valuenow="80" style="left: 80%;"></div>
                    </div>
                </div>
            </div>
            <div class="fd-form-item">
                <label class="fd-form-label" id="languageLabel">Language:</label>
                <div class="fd-popover">
                    <div class="fd-popover__control" aria-expanded="true" aria-haspopup="true">
                        <div class="fd-select">
                            <button
                                aria-labelledby="languageLabel"
                                aria-expanded="true"
                                aria-haspopup="listbox"
                                class="fd-select__control"
                                id="languageSelect"
                                onclick="
                                    toggleElAttrs('select002', ['aria-hidden']);
                                    toggleElAttrs('languageSelect', ['aria-expanded']);
                                "
                                tabindex="0">
                                <span is="formSelectValue" class="fd-select__text-content">English</span>
                                <span class="fd-button fd-button--transparent fd-select__button">
                                    <i class="sap-icon--slim-arrow-down"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div
                        aria-hidden="true"
                        class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown"
                        id="select002">
                        <ul
                            aria-labelledby="formSelectLabel"
                            class="fd-list fd-list--dropdown"
                            role="listbox">
                            <li
                                id="asFormItemSelectCombobox-currentlyFocusedItem"
                                class="fd-list__item is-selected"
                                role="option"
                                tabindex="0">
                                <span class="fd-list__title">
                                    English
                                </span>
                            </li>
                            <li class="fd-list__item"
                                role="option"
                                tabindex="-1">
                                <span class="fd-list__title">French</span>
                            </li>
                            <li class="fd-list__item"
                                role="option"
                                tabindex="-1">
                                <span class="fd-list__title">Spanish</span>
                            </li>
                            <li class="fd-list__item"
                                role="option"
                                tabindex="-1">
                                <span class="fd-list__title">Bulgarian</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="fd-form-item">
                <label class="fd-form-label" id="toneOfVoiceLabel">Tone Of Voice:</label>
                <div class="fd-segmented-button" role="group" aria-label="Group label">
                    <button aria-label="Survey" class="fd-button"><span class="fd-button__text">Casual</span></button>
                    <button aria-label="Chart" class="fd-button fd-button--toggled" aria-pressed="true"><span class="fd-button__text">Neutral</span></button>
                    <button aria-label="Pool" class="fd-button"><span class="fd-button__text">Formal</span></button>
                </div>
            </div>
        </div>

        <footer class="fd-popover__body-footer">
            <div class="fd-bar fd-bar--footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--emphasized">
                            <i class="sap-icon--ai"></i>
                            <span class="fd-button__text">Apply</span>
                        </button>
                    </div>
                    <div class="fd-bar__element">
                        <button class="fd-button fd-button--transparent"><span class="fd-button__text">Close</span></button>
                    </div>
                </div>
            </div>
        </footer>
    </section>
</div>
<div style="height: 400px;"></div>


`,g={title:"AI/Patterns/Guided Prompt",parameters:{description:`Guided prompts provide structured input-UIs to guide the user in instructing the generative Al model on the desired output. They are helpful when users want to specify certain attributes, styles, or parameters for the generated content.<br> Guided prompts offer control and precision in generating output that aligns with user preferences. All provided information is combined into a processable prompt in the back-end and the user only needs to select the desired option instead of verbalizing them in a custom prompt.<br><br>
    <b>Use Guided prompt when: </b>
<ul>
    <li>users are using the generative AI feature for specific, predefined use cases or queries</li>
    <li>the system can assist with a limited number of defined actions</li>
    <li>users lack expertise or experience in writing prompts</li>
    <li>users need the ability to customize and personalize inputs for flexibility</li>
    <li>consistency and predictability in the outcome are essential</li>
</ul><br>
<b>Do not use Guided prompt when: </b>
<ul>
    <li>users require a high level of flexibility to define outcomes (opt for custom prompts)</li>
    <li>the task involves only a few specific actions (consider using quick prompts)</li>
    <li>user intents or desired outcomes are unpredictable or undefined (use custom prompts)</li>
</ul>

<b>Anatomy:</b>A guided prompt is structured around a <b>container</b>, which provides the framework for the input content. The container can be any existing component within the Design System, such as a Popover, Dialog, Sidecontent, or Card, with the choice depending on the application's use case. <br>
The <b>input content</b> within the container includes a variety of input controls, selected based on the use case. It's important to use a diverse range of controls and avoid relying solely on drop-down menus. All controls should adhere to the Design System's visual, behavioral, and interaction guidelines.<br>
The <b>action</b> for the guided prompt is defined according to the use case and aligned with User Assistance. The placement of the action follows the container's general guidelines, while the button's visual design adheres to the AI-specific guidance. <br><br>

<b>Variants:</b> 
<b>Popover:</b> Ideal for guiding prompts tied to a specific input, such as text. It offers quick, limited options that directly affect the related content.<br>
<b>Dialog:</b> Suitable for more complex guided prompts. Avoid layering multiple dialogs.<br>
<b>Dynamic Side Content:</b> Useful for displaying dense information without losing connection to the main content. It's great for complex prompts without causing significant disruption.
<br><br><br><b>Note: The component is in an experimental state.</b>`,tags:["ai","experimental"]}},e=()=>n;e.parameters={docs:{description:{story:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => aiGuidedPromptExampleHtml",...e.parameters?.docs?.source}}};const x=["AIGuidedPrompt"];export{e as AIGuidedPrompt,x as __namedExportsOrder,g as default};
