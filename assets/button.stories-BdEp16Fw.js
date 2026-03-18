/* empty css                         *//* empty css             *//* empty css               *//* empty css                      */const n=`<div class="fddocs-button-container">
    <div class="fd-segmented-button" role="listbox" tabindex="-1" aria-multiselectable="true" aria-roledescription="Segmented button group" aria-orientation="horizontal">
        <button 
            role="option" 
            aria-label="Survey" 
            aria-roledescription="Segmented button" 
            aria-setsize="5" 
            aria-posinset="1" 
            aria-selected="false" 
            title="Survey" 
            class="fd-button">
            <i class="sap-icon--survey" role="presentation" aria-hidden="true"></i>
        </button> 

        <button 
            role="option" 
            aria-label="Chart" 
            aria-roledescription="Segmented button" 
            aria-setsize="5" 
            aria-posinset="2" 
            aria-selected="true" 
            title="Chart" 
            class="fd-button fd-button--toggled">
            <i class="sap-icon--pie-chart" role="presentation" aria-hidden="true"></i>
        </button>

        <button 
            role="option" 
            aria-label="Basket" 
            aria-roledescription="Segmented button" 
            aria-setsize="5" 
            aria-posinset="3" 
            aria-selected="false" 
            title="Basket" 
            class="fd-button">
            <i class="sap-icon--basket" role="presentation" aria-hidden="true"></i>
        </button>

        <button 
            role="option" 
            aria-label="Joule" 
            aria-roledescription="Segmented button" 
            aria-setsize="5" 
            aria-posinset="4" 
            aria-selected="true" 
            title="Joule" 
            class="fd-button fd-button--toggled">
            <i class="sap-icon--da" role="presentation" aria-hidden="true"></i>
        </button>

        <button 
            role="option" 
            aria-label="Pool" 
            aria-roledescription="Segmented button" 
            aria-setsize="5" 
            aria-posinset="5" 
            aria-selected="false" 
            title="Pool" 
            class="fd-button">
            <i class="sap-icon--pool" role="presentation" aria-hidden="true"></i>
        </button>
    </div>
</div>
`,a=`<div class="fddocs-button-container">
  <div class="fd-segmented-button fd-segmented-button--vertical" role="listbox" tabindex="-1" aria-multiselectable="true" aria-roledescription="Segmented button group" aria-orientation="vertical">
      <button 
        role="option"
        aria-roledescription="Segmented button"
        aria-setsize="7" 
        aria-posinset="1" 
        aria-selected="false"
        aria-label="Survey"
        title="Survey" 
        class="fd-button">
        <i class="sap-icon--survey" role="presentation" aria-hidden="true"></i>
      </button>
      
      <button
        role="option" 
        aria-roledescription="Segmented button"
        aria-setsize="7" 
        aria-posinset="2" 
        aria-selected="false"
        aria-label="Database" 
        title="Database"
        class="fd-button">
        <i class="sap-icon--database" role="presentation" aria-hidden="true"></i>
      </button>
      
      <button
        role="option" 
        aria-roledescription="Segmented button"
        aria-setsize="7" 
        aria-posinset="3" 
        aria-selected="true"
        aria-label="Chart" 
        title="Chart" 
        class="fd-button fd-button--toggled">
        <i class="sap-icon--pie-chart" role="presentation" aria-hidden="true"></i>
      </button>
      
      <button
        role="option"
        aria-roledescription="Segmented button" 
        aria-setsize="7" 
        aria-posinset="4" 
        aria-selected="false"
        aria-label="Basket"
        title="Basket" 
        class="fd-button">
        <i class="sap-icon--basket" role="presentation" aria-hidden="true"></i>
      </button>
      
      <button
        role="option"
        aria-roledescription="Segmented button"
        aria-setsize="7" 
        aria-posinset="5" 
        aria-selected="true" 
        aria-label="Calendar" 
        title="Calendar" 
        class="fd-button fd-button--toggled">
        <i class="sap-icon--calendar" role="presentation" aria-hidden="true"></i>
      </button>
      
      <button 
        role="option"
        aria-roledescription="Segmented button"
        aria-setsize="7" 
        aria-posinset="6" 
        aria-selected="false"
        aria-label="Favorite"
        title="Favorite" 
        class="fd-button">
        <i class="sap-icon--favorite" role="presentation" aria-hidden="true"></i>
      </button>
      
      <button
        role="option"
        aria-roledescription="Segmented button" 
        aria-setsize="7" 
        aria-posinset="7" 
        aria-selected="false"
        aria-label="Pool" 
        title="Pool" 
        class="fd-button">
        <i class="sap-icon--pool" role="presentation" aria-hidden="true"></i>
      </button>
  </div>
</div>
`,l={title:"Components/Buttons/Segmented Button",parameters:{description:'The segmented button displays a group of options. Only one option can be active at a time, while the others remain or become inactive when the initial option is selected.\nThis button type was previously known as "button group" and is comparable to a radio button group.\nIt can be displayed by using the container with `fd-segmented-button` class with `role="group"` and the `aria-label="Group label"` attribute.\nActive button should have `aria-pressed="true"` and `fd-button--toggled` class and inactive buttons should have `aria-pressed="false"` \n\n**New Feature:** Multiple items can be selected at a time.\n    ',tags:["f3","a11y","theme"]}},e=()=>n;e.storyName="Segmented button";e.parameters={docs:{description:{story:""}}};const t=()=>a;t.storyName="Vertical alignment";t.parameters={docs:{description:{story:`Segmented button can also be rendered vertically if \`.fd-segmented-button--vertical\` class modifier is added.
      <div class="fd-message-strip fd-message-strip--no-icon fd-message-strip--information" role="note" aria-live="assertive" id="message-strip-1" aria-labelledby="message-strip-1">
        <b class="fd-message-strip__text">
          Vertical segmented button should only be used with icon-only buttons.
        </b>
      </div>
      `}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => segmentedButtonExampleHtml",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => segmentedButtonVerticalExampleHtml",...t.parameters?.docs?.source}}};const d=["SegmentedButton","Vertical"];export{e as SegmentedButton,t as Vertical,d as __namedExportsOrder,l as default};
