var b=Object.defineProperty,p=Object.defineProperties;var l=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var c=(a,n,t)=>n in a?b(a,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[n]=t,o=(a,n)=>{for(var t in n||(n={}))m.call(n,t)&&c(a,t,n[t]);if(i)for(var t of i(n))f.call(n,t)&&c(a,t,n[t]);return a},e=(a,n)=>p(a,l(n));/* empty css             *//* empty css               *//* empty css             */const h=`<h4>AI Button</h4>
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
</div>`,g={title:"AI/Components/Button",parameters:{description:`The AI button is a button used in AI-related scenarios. It enables users to trigger actions by clicking or tapping the button, or by pressing the Enter key. The AI button can have one or more states. Each state have a name that identifies it and can have text, icon and end icon defined (in any combination) depending on the state purpose. <br>
        <b>Note: The component is in an experimental state.</b>`,tags:["ai","experimental"]}},s=()=>h;var r,d,u;s.parameters=e(o({},s.parameters),{docs:e(o({},(r=s.parameters)==null?void 0:r.docs),{source:o({originalSource:"() => aiButtonExampleHtml"},(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source)})});const A=["AIButton"];export{s as AIButton,A as __namedExportsOrder,g as default};
