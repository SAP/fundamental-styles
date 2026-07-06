/* empty css                 *//* empty css                 *//* empty css                   *//* empty css                  *//* empty css                   *//* empty css               *//* empty css             *//* empty css                          *//* empty css                       *//* empty css                */const t=`<h4>First loading time (while analyzing the request)</h4>
<div class="fd-form-item">
    <div class="fd-form-item__label-container">
        <button class="fd-button">
            <i class="sap-icon--stop"></i>
            <span class="fd-button__text">Stop Generating</span>
        </button>
    </div>
    <div class="fd-popover__control" aria-controls="popoverAI1" aria-expanded="false" aria-haspopup="true">
        <div role="textbox" class="fd-textarea fd-textarea--ai is-information" id="textarea-ai-1" placeholder="Write something here" rows="5"><div role="progressbar" aria-valuetext="busy" aria-labelledby="ai-busy-indicator-text" class="fd-ai-busy-indicator">
                <span class="sap-icon sap-icon--ai"></span>
                <span id="ai-busy-indicator-text" class="fd-ai-busy-indicator__text">Analyzing request...</span>
            </div>

            <div role="progressbar" aria-valuetext="busy" aria-busy="true" class="fd-ai-loading-bar"></div>
        </div>
    </div>
</div>
<br><br>
<h4>Second loading time (while generating the results)</h4>
<div class="fd-form-item">
    <div class="fd-form-item__label-container">
        <button class="fd-button">
            <i class="sap-icon--stop"></i>
            <span class="fd-button__text">Stop Generating</span>
        </button>
    </div>
    <div class="fd-popover__control" aria-controls="popoverAI1" aria-expanded="false" aria-haspopup="true">
        <div role="textbox" class="fd-textarea fd-textarea--ai is-information" id="textarea-ai-1" placeholder="Write something here" rows="5"><p class="fd-ai-text fd-ai-text--loading">This is a text being generated inside a textarea lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eligendi quae recusandae rem illum...</p>

            <div role="progressbar" aria-valuetext="busy" aria-busy="true" class="fd-ai-loading-bar"></div>
        </div>
    </div>
</div>
`,u={title:"AI/Patterns/Progress Indicator",parameters:{description:`AI Progress Indicator provides information about the status of a user's request while they wait for the content to be generated. The main goal of this pattern is to keep the user engaged and informed, manage their expectations and show that the system is actively working. 
        <br><br>
<b>Use Progress Indicator: </b>
<ul>
    <li>when the duration of the AI generation process is uncertain</li>
    <li>to show users that the system is actively working</li>
    <li>when you need to keep users informed about the status of their request</li>
    <li>to provide real-time updates on the progress of the AI task</li>
</ul><br>
<b>Do not use Progress Indicator: </b>
<ul>
    <li>for operations that take less than one second</li>
    <li>when providing a time estimate for the process</li>
    <li>in non-AI scenarios</li>
</ul>
<b>Note: The component is in an experimental state.</b>`,tags:["ai","experimental"]}},e=()=>t;e.parameters={docs:{description:{story:`AI Progress Indicator pattern extends the following components to enable new AI-specific interactions:
<ul>
    <li><b>AI button</b> (Stop generating Button): provides user the option to stop the generation at any given time.  For more information see AI button.</li>
    <li><b>AI Icon</b>: AI icon with looped animation conveys to users that AI processes are actively underway. Text string keeps users updated on the status of their request. We advise the usage of the standard UI text ”Analyzing request...". For more information see AI busy indicator.</li>
    <li><b>AI Busy Indicator</b>: informs the user about an ongoing operation powered by AI</li>
    <li><b>AI Loading bar</b>: an animated gradient bar visually reinforces that the system is actively processing tasks. For more information see AI loading bar.</li>
    <li><b>Text area</b></li>
    <li><b>Rich text editor</b></li>
</ul>`}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => aiProgressIndicatorExampleHtml",...e.parameters?.docs?.source}}};const m=["AIProgressIndicator"];export{e as AIProgressIndicator,m as __namedExportsOrder,u as default};
