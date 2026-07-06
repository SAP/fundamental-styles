/* empty css               *//* empty css             *//* empty css                   *//* empty css                *//* empty css                                        */const a=`<h4>Default</h4>
<div class="fd-toolbar fd-toolbar--ai" role="toolbar" aria-label="AI toolbar">
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--transparent" aria-label="AI writing Assistant" title="AI writing Assistant (Shift+F4)">
        <i class="sap-icon--ai"></i>
    </button>
</div>
<br>
<h4>Loading</h4>
<div class="fd-toolbar fd-toolbar--ai is-active" role="toolbar" aria-label="AI toolbar">
    <label class="fd-form-label fd-form-label--stand-alone">Performing AI Prompt</label>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--transparent" aria-label="AI writing assistant generating" title="Stop Generating (Esc)">
        <i class="sap-icon--stop"></i>
    </button>
</div>
<br>
<h4>No versioning</h4>
<div class="fd-toolbar fd-toolbar--ai is-active" role="toolbar" aria-label="AI toolbar">
    <label class="fd-form-label fd-form-label--stand-alone">Performed AI Prompt</label>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--transparent" aria-label="AI Writing Assistant" title="AI writing Assistant (Shift+F4)">
        <i class="sap-icon--ai"></i>
    </button>
</div>
<br>
<h4>Versioning</h4>
<div class="fd-toolbar fd-toolbar--ai is-active" role="toolbar" aria-label="AI toolbar">
    <div class="fd-ai-writing-assistant-versioning">
        <button aria-label="Previous Version" title="Previous Version (Shift+Ctrl+Z)" class="fd-button fd-button--transparent">
            <i class="sap-icon--navigation-left-arrow"></i>
        </button>
        <label class="fd-form-label fd-form-label--stand-alone">3 / 3</label>
        <button aria-label="Next Version" title="Next Version (Shift+Ctrl+Y)" class="fd-button fd-button--transparent" disabled>
            <i class="sap-icon--navigation-right-arrow"></i>
        </button>
    </div>
    <label class="fd-form-label fd-form-label--stand-alone">Performed AI Prompt</label>
    <span class="fd-toolbar__spacer"></span>
    <button class="fd-button fd-button--transparent" aria-label="AI Writing Assistant" title="AI writing Assistant (Shift+F4)">
        <i class="sap-icon--ai"></i>
    </button>
</div>`,r={title:"AI/Patterns/Writing Assistant Toolbar",parameters:{description:`The AI writing assistant toolbar is part of AI writing assistant pattern for text areas and rich text editors. It allows users to access AI writing assistant capabilities within Text Areas and Rich Text Editor.

<b>Anatomy:</b><br>
AI Writing Assistant Toolbar extends the toolbar component to enable new AI-specific interactions and is composed by:
<br>
<ul>
    <li>Toolbar Container: Embedded at the bottom of the Text Area or Rich Text Editor, the toolbar spans the entire width of the parent component.</li>
    <li>AI Icon Menu Button: Positioned on the right side of the AI toolbar, it indicates AI writing assistance and provides a menu with AI prompts for fine-tuning the content.</li>
    <li>Performed AI Prompt: Uses the label component to display the AI prompt applied to this version of the content is shown to the right of the versioning element.</li>
    <li>Versioning: Positioned within the AI writing assistant toolbar, it includes:
      <ul>
        <li>previous version icon for navigation</li>
        <li>version indicator</li>
        <li>next version icon for navigation</li>
      </ul>
      This versioning feature allows users to view different versions of AI-generated content.
    </li>
</ul>

<br><b>Note: The component is in an experimental state.</b>`,tags:["ai","experimental"]}},t=()=>a;t.parameters={docs:{description:{story:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => aiWritingAssistantToolbarExampleHtml",...t.parameters?.docs?.source}}};const l=["AIWritingAssistantToolbar"];export{t as AIWritingAssistantToolbar,l as __namedExportsOrder,r as default};
