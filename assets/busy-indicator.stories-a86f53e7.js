/* empty css                       *//* empty css                      *//* empty css               *//* empty css             *//* empty css            *//* empty css               *//* empty css              */const n=`<section class="fd-dialog-docs-static fd-dialog fd-dialog--active">
    <div class="fd-dialog__content fd-dialog__content--s" role="dialog" aria-modal="true"
         aria-labelledby="dialog-title-2">
        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5" id="dialog-title-2">
                        Loading Data
                    </h2>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body">
            <div class="fd-busy-indicator-dialog">
                <p class="fd-text">
                    ... now loading data from a far far away server from far far away.
                </p>
                <div class="fd-busy-indicator fd-busy-indicator--l" aria-hidden="false" aria-label="Loading">
                    <div class="fd-busy-indicator__circle"></div>
                    <div class="fd-busy-indicator__circle"></div>
                    <div class="fd-busy-indicator__circle"></div>
                </div>
            </div>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--transparent">Cancel</button>
                </div>
            </div>
        </footer>
    </div>
</section>
`,t=`
<div class="fd-message-toast fd-busy-indicator-extended fd-busy-indicator-extended--message-toast">
    <div class="fd-busy-indicator fd-busy-indicator--l" aria-hidden="false" aria-label="Loading">
        <div class="fd-busy-indicator__circle"></div>
        <div class="fd-busy-indicator__circle"></div>
        <div class="fd-busy-indicator__circle"></div>
    </div>
    <div class="fd-busy-indicator-extended__label">loading data...</div>
</div>`,o=`<div class="fd-busy-indicator-extended">
    <div class="fd-busy-indicator fd-busy-indicator--l" aria-hidden="false" aria-label="Loading">
        <div class="fd-busy-indicator__circle"></div>
        <div class="fd-busy-indicator__circle"></div>
        <div class="fd-busy-indicator__circle"></div>
    </div>
    <div class="fd-busy-indicator-extended__label">loading data...</div>
</div>`,r=`<div style="display:flex;justify-content:center;flex-direction:column;align-items:center;background-color:cadetblue;height:250px">
<div class="fd-busy-indicator fd-busy-indicator--l fd-busy-indicator--contrast" aria-hidden="false" aria-label="Loading">
    <div class="fd-busy-indicator__circle"></div>
    <div class="fd-busy-indicator__circle"></div>
    <div class="fd-busy-indicator__circle"></div>
</div>
</div>
`,c=`<div style="text-align: center">
    <div class="fd-busy-indicator fd-busy-indicator--l" aria-hidden="false" aria-label="Loading">
        <div class="fd-busy-indicator__circle"></div>
        <div class="fd-busy-indicator__circle"></div>
        <div class="fd-busy-indicator__circle"></div>
    </div><br /><br />
    <div class="fd-busy-indicator fd-busy-indicator--m" aria-hidden="false" aria-label="Loading">
        <div class="fd-busy-indicator__circle"></div>
        <div class="fd-busy-indicator__circle"></div>
        <div class="fd-busy-indicator__circle"></div>
    </div><br /><br />
    <div class="fd-busy-indicator" aria-hidden="false" aria-label="Loading">
        <div class="fd-busy-indicator__circle"></div>
        <div class="fd-busy-indicator__circle"></div>
        <div class="fd-busy-indicator__circle"></div>
    </div>
    </div>
`,v={title:"Components/Busy Indicator",parameters:{description:`The busy indicator component informs the user about an ongoing operation. Only one busy indicator should be shown at a time.

## Sizes

| **Size** | &nbsp;&nbsp; **rem** &nbsp;&nbsp; | **Modifier class** |
| :------- | :-------------------------------- | -----------------: |
| Default  | &nbsp;&nbsp; 0.5 rem                | none               |
| M        | &nbsp;&nbsp; 1 rem                | \`--m\`   |
| L        | &nbsp;&nbsp; 2 rem                | \`--l\`   |

##Usage
**Use the busy indicator if:**

The ongoing operation only covers part of a screen that has multiple controls, and:

- You need to display additional information, or
- The user needs to be able to cancel the operation.


**Do not use the busy indicator if:**

- The operation takes less than one second.
- You need to block the screen because the user is not supposed to start another operation. In this case, use the **Busy Dialog** component.
        `,tags:["f3","a11y","theme"]}},a=()=>c;a.parameters={docs:{description:{story:"The standard busy indicator animates a sequence of cascading dots expanding and shrinking in a loop. The component comes in three sizes detailed above. To display the busy indicator, use the `fd-busy-indicator` class. If you want to display a certain size, add the modifier class of the desired size i.e. `--m` to the element."}}};const e=()=>r;e.parameters={docs:{description:{story:"The busy indicator also comes in contrast mode and displays white dots against a dark background. To apply contrast mode, add `contrast` into the element i.e. `fd-busy-indicator--m contrast`."}}};const i=()=>o;i.parameters={docs:{description:{story:"If more information needs to be displayed with the loading animation, it is replaced by the Extended Busy Indicator `fd-busy-indicator-extended`. The additional information is wrapped in an element with `fd-busy-indicator-extended__label` class."}}};const d=()=>t;d.parameters={docs:{description:{story:"At the Page level the Busy Indicator should always be placed in a container. The simplest form of container will be centred on the page and inherit the color values from Message Toast."}}};const s=()=>n;s.parameters={docs:{description:{story:"The busy dialog informs the user about an ongoing operation. During the operation, the entire screen is blocked."}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => standardExampleHtml",...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => contrastModeExampleHtml",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => extendedBusyIndicatorExampleHtml",...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"() => extendedBusyIndicatorInsideMessageToastExampleHtml",...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => busyDialogExampleHtml",...s.parameters?.docs?.source}}};const _=["Standard","ContrastMode","ExtendedBusyIndicator","ExtendedBusyIndicatorInsideMessageToast","BusyDialog"];export{s as BusyDialog,e as ContrastMode,i as ExtendedBusyIndicator,d as ExtendedBusyIndicatorInsideMessageToast,a as Standard,_ as __namedExportsOrder,v as default};
