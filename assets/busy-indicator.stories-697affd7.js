/* empty css                      *//* empty css               *//* empty css             *//* empty css            *//* empty css               *//* empty css              */const g=`<section class="fd-dialog-docs-static fd-dialog fd-dialog--active">
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
            <div class="sap-busy-indicator-dialog">
                <p class="sap-text">
                    ... now loading data from a far far away server from far far away.
                </p>
                <div class="sap-busy-indicator sap-busy-indicator--l" aria-hidden="false" aria-label="Loading">
                    <div class="sap-busy-indicator__circle"></div>
                    <div class="sap-busy-indicator__circle"></div>
                    <div class="sap-busy-indicator__circle"></div>
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
`,x=`
<div class="fd-message-toast sap-busy-indicator-extended sap-busy-indicator-extended--message-toast">
    <div class="sap-busy-indicator sap-busy-indicator--l" aria-hidden="false" aria-label="Loading">
        <div class="sap-busy-indicator__circle"></div>
        <div class="sap-busy-indicator__circle"></div>
        <div class="sap-busy-indicator__circle"></div>
    </div>
    <div class="sap-busy-indicator-extended__label">loading data...</div>
</div>`,I=`<div class="sap-busy-indicator-extended">
    <div class="sap-busy-indicator sap-busy-indicator--l" aria-hidden="false" aria-label="Loading">
        <div class="sap-busy-indicator__circle"></div>
        <div class="sap-busy-indicator__circle"></div>
        <div class="sap-busy-indicator__circle"></div>
    </div>
    <div class="sap-busy-indicator-extended__label">loading data...</div>
</div>`,T=`<div style="display:flex;justify-content:center;flex-direction:column;align-items:center;background-color:cadetblue;height:250px">
<div class="sap-busy-indicator sap-busy-indicator--l sap-busy-indicator--contrast" aria-hidden="false" aria-label="Loading">
    <div class="sap-busy-indicator__circle"></div>
    <div class="sap-busy-indicator__circle"></div>
    <div class="sap-busy-indicator__circle"></div>
</div>
</div>
`,E=`<div style="text-align: center">
    <div class="sap-busy-indicator sap-busy-indicator--l" aria-hidden="false" aria-label="Loading">
        <div class="sap-busy-indicator__circle"></div>
        <div class="sap-busy-indicator__circle"></div>
        <div class="sap-busy-indicator__circle"></div>
    </div><br /><br />
    <div class="sap-busy-indicator sap-busy-indicator--m" aria-hidden="false" aria-label="Loading">
        <div class="sap-busy-indicator__circle"></div>
        <div class="sap-busy-indicator__circle"></div>
        <div class="sap-busy-indicator__circle"></div>
    </div><br /><br />
    <div class="sap-busy-indicator" aria-hidden="false" aria-label="Loading">
        <div class="sap-busy-indicator__circle"></div>
        <div class="sap-busy-indicator__circle"></div>
        <div class="sap-busy-indicator__circle"></div>
    </div>
    </div>
`;const S={title:"Busy Indicator",parameters:{description:`The busy indicator component informs the user about an ongoing operation. Only one busy indicator should be shown at a time.

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
        `,tags:["f3","a11y","theme"]}},a=()=>E;a.parameters={docs:{description:{story:"The standard busy indicator animates a sequence of cascading dots expanding and shrinking in a loop. The component comes in three sizes detailed above. To display the busy indicator, use the `sap-busy-indicator` class. If you want to display a certain size, add the modifier class of the desired size i.e. `--m` to the element."}}};const s=()=>T;s.parameters={docs:{description:{story:"The busy indicator also comes in contrast mode and displays white dots against a dark background. To apply contrast mode, add `contrast` into the element i.e. `sap-busy-indicator--m contrast`."}}};const e=()=>I;e.parameters={docs:{description:{story:"If more information needs to be displayed with the loading animation, it is replaced by the Extended Busy Indicator `sap-busy-indicator-extended`. The additional information is wrapped in an element with `sap-busy-indicator-extended__label` class."}}};const i=()=>x;i.parameters={docs:{description:{story:"At the Page level the Busy Indicator should always be placed in a container. The simplest form of container will be centred on the page and inherit the color values from Message Toast."}}};const d=()=>g;d.parameters={docs:{description:{story:"The busy dialog informs the user about an ongoing operation. During the operation, the entire screen is blocked."}}};var n,t,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:"() => standardExampleHtml",...(o=(t=a.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var r,c,l;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:"() => contrastModeExampleHtml",...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,u,b;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:"() => extendedBusyIndicatorExampleHtml",...(b=(u=e.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var m,y,v;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:"() => extendedBusyIndicatorInsideMessageToastExampleHtml",...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var _,h,f;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:"() => desktopExampleHtml",...(f=(h=d.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const D=["Standard","ContrastMode","ExtendedBusyIndicator","ExtendedBusyIndicatorInsideMessageToast","BusyDialog"];export{d as BusyDialog,s as ContrastMode,e as ExtendedBusyIndicator,i as ExtendedBusyIndicatorInsideMessageToast,a as Standard,D as __namedExportsOrder,S as default};
//# sourceMappingURL=busy-indicator.stories-697affd7.js.map
