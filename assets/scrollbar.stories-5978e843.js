/* empty css                  */const r=`
    <div style="width: 300px; height: 100px" class="fd-scrollbar">
        <div style="width: 9000px; height: 9000px;"></div>
    </div>
`,a={title:"Components/Scrollbar",parameters:{description:`
Themeable scrollbar is the scrollbar component made accordingly to the Fiori 3 design guidelines.
Using the themeable scrollbar is preferred over the browser's default in the components that support having scrollbars and made accordingly to the Fiori 3 design guidelines.
Themeable scrollbar works in Chrome, Safari, and other WebKit-based browsers and partially works in Firefox (no hover effects).
Component not working in the IE, default scrollbar is shown instead.
            `,tags:["f3","theme","development"]}},e=()=>r;e.storyName="Default";e.parameters={docs:{description:{story:"To use themeable scrollbar use `fd-scrollbar` class on scrollable element.\n"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => defaultExampleExampleHtml",...e.parameters?.docs?.source}}};const t=["DefaultExample"];export{e as DefaultExample,t as __namedExportsOrder,a as default};
