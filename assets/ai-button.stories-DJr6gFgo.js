/* empty css             *//* empty css               *//* empty css             */const t=`<h4>AI Button</h4>
<div class="fddocs-container fddocs-button-container fddocs-ai-button-container">
    <button class="fd-button">
        <i class="sap-icon--ai"></i>
        <span class="fd-button__text">Generate</span>
    </button>

    <button class="fd-button">
        <i class="sap-icon--stop"></i>
        <span class="fd-button__text">Stop Generation</span>
    </button>

    <button class="fd-button">
        <i class="sap-icon--ai"></i>
        <span class="fd-button__text">Revise</span>
        <i class="sap-icon--slim-arrow-down"></i>
    </button>
</div>


<br><br><br>
<h4>Icon-only AI Button</h4>
<div class="fddocs-container fddocs-button-container fddocs-ai-button-container">
    <button class="fd-button" aria-label="Generate">
        <i class="sap-icon--ai"></i>
    </button>

    <button class="fd-button" aria-label="Stop Generation">
        <i class="sap-icon--stop"></i>
    </button>

    <button class="fd-button" aria-label="Revise">
        <i class="sap-icon--ai"></i>
        <i class="sap-icon--slim-arrow-down"></i>
    </button>
</div>`,e={title:"AI/Components/Button",parameters:{description:`The AI button is a button used in AI-related scenarios. It enables users to trigger actions by clicking or tapping the button, or by pressing the Enter key. The AI button can have one or more states. Each state have a name that identifies it and can have text, icon and end icon defined (in any combination) depending on the state purpose. <br>
        <b>Note: The component is in an experimental state.</b>`,tags:["ai","experimental"]}},n=()=>t;n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => aiButtonExampleHtml",...n.parameters?.docs?.source}}};const i=["AIButton"];export{n as AIButton,i as __namedExportsOrder,e as default};
