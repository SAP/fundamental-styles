/* empty css             *//* empty css                          */const t=`<div role="progressbar" aria-valuetext="busy" aria-labelledby="ai-busy-indicator-text" class="fd-ai-busy-indicator">
    <span class="sap-icon sap-icon--ai"></span>
    <span id="ai-busy-indicator-text" class="fd-ai-busy-indicator__text">Analyzing request...</span>
</div>`,s={title:"AI/Components/Busy Indicator",parameters:{description:`The AI busy indicator informs the user about an ongoing operation powered by AI and it's part of AI progress indicator pattern. For more information refer to AI progress indicator pattern.<br>
        <b>Note: AI Busy indicator is part of AI Progress Indicator pattern and is intended to be used in text generation scenarios within a text area or rich text editor. <br><br>The component is in an experimental state.</b>`,tags:["ai","experimental"]}},e=()=>t;e.parameters={docs:{description:{story:`The AI busy indicator component consists of two parts:
<br>
<b>Icon: </b>AI icon with looped animation (<b style="color: red;">the animation is in development</b>) conveys to users that AI processes are actively underway.<br>
<b>Text: </b>Keeps users updated on the status of their request. While AI is processing the request we advise the usage of the standard UI text ”Analyzing request...".`}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => aiBusyIndicatorExampleHtml",...e.parameters?.docs?.source}}};const i=["AIBusyIndicator"];export{e as AIBusyIndicator,i as __namedExportsOrder,s as default};
