var M=Object.defineProperty,H=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var p=(d,s,i)=>s in d?M(d,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):d[s]=i,a=(d,s)=>{for(var i in s||(s={}))L.call(s,i)&&p(d,i,s[i]);if(l)for(var i of l(s))S.call(s,i)&&p(d,i,s[i]);return d},e=(d,s)=>H(d,k(s));/* empty css                      *//* empty css               *//* empty css             *//* empty css            *//* empty css               *//* empty css              */const D=`<section class="fd-dialog-docs-static fd-dialog fd-dialog--active">
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
`,z=`
<div class="fd-message-toast sap-busy-indicator-extended sap-busy-indicator-extended--message-toast">
    <div class="sap-busy-indicator sap-busy-indicator--l" aria-hidden="false" aria-label="Loading">
        <div class="sap-busy-indicator__circle"></div>
        <div class="sap-busy-indicator__circle"></div>
        <div class="sap-busy-indicator__circle"></div>
    </div>
    <div class="sap-busy-indicator-extended__label">loading data...</div>
</div>`,C=`<div class="sap-busy-indicator-extended">
    <div class="sap-busy-indicator sap-busy-indicator--l" aria-hidden="false" aria-label="Loading">
        <div class="sap-busy-indicator__circle"></div>
        <div class="sap-busy-indicator__circle"></div>
        <div class="sap-busy-indicator__circle"></div>
    </div>
    <div class="sap-busy-indicator-extended__label">loading data...</div>
</div>`,O=`<div style="display:flex;justify-content:center;flex-direction:column;align-items:center;background-color:cadetblue;height:250px">
<div class="sap-busy-indicator sap-busy-indicator--l sap-busy-indicator--contrast" aria-hidden="false" aria-label="Loading">
    <div class="sap-busy-indicator__circle"></div>
    <div class="sap-busy-indicator__circle"></div>
    <div class="sap-busy-indicator__circle"></div>
</div>
</div>
`,U=`<div style="text-align: center">
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
`;const J={title:"Busy Indicator",parameters:{description:`The busy indicator component informs the user about an ongoing operation. Only one busy indicator should be shown at a time.

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
        `,tags:["f3","a11y","theme"]}},n=()=>U;n.parameters={docs:{description:{story:"The standard busy indicator animates a sequence of cascading dots expanding and shrinking in a loop. The component comes in three sizes detailed above. To display the busy indicator, use the `sap-busy-indicator` class. If you want to display a certain size, add the modifier class of the desired size i.e. `--m` to the element."}}};const t=()=>O;t.parameters={docs:{description:{story:"The busy indicator also comes in contrast mode and displays white dots against a dark background. To apply contrast mode, add `contrast` into the element i.e. `sap-busy-indicator--m contrast`."}}};const o=()=>C;o.parameters={docs:{description:{story:"If more information needs to be displayed with the loading animation, it is replaced by the Extended Busy Indicator `sap-busy-indicator-extended`. The additional information is wrapped in an element with `sap-busy-indicator-extended__label` class."}}};const r=()=>z;r.parameters={docs:{description:{story:"At the Page level the Busy Indicator should always be placed in a container. The simplest form of container will be centred on the page and inherit the color values from Message Toast."}}};const c=()=>D;c.parameters={docs:{description:{story:"The busy dialog informs the user about an ongoing operation. During the operation, the entire screen is blocked."}}};var u,b,m;n.parameters=e(a({},n.parameters),{docs:e(a({},(u=n.parameters)==null?void 0:u.docs),{source:a({originalSource:"() => standardExampleHtml"},(m=(b=n.parameters)==null?void 0:b.docs)==null?void 0:m.source)})});var y,v,_;t.parameters=e(a({},t.parameters),{docs:e(a({},(y=t.parameters)==null?void 0:y.docs),{source:a({originalSource:"() => contrastModeExampleHtml"},(_=(v=t.parameters)==null?void 0:v.docs)==null?void 0:_.source)})});var h,f,g;o.parameters=e(a({},o.parameters),{docs:e(a({},(h=o.parameters)==null?void 0:h.docs),{source:a({originalSource:"() => extendedBusyIndicatorExampleHtml"},(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source)})});var x,I,T;r.parameters=e(a({},r.parameters),{docs:e(a({},(x=r.parameters)==null?void 0:x.docs),{source:a({originalSource:"() => extendedBusyIndicatorInsideMessageToastExampleHtml"},(T=(I=r.parameters)==null?void 0:I.docs)==null?void 0:T.source)})});var E,B,w;c.parameters=e(a({},c.parameters),{docs:e(a({},(E=c.parameters)==null?void 0:E.docs),{source:a({originalSource:"() => desktopExampleHtml"},(w=(B=c.parameters)==null?void 0:B.docs)==null?void 0:w.source)})});const K=["Standard","ContrastMode","ExtendedBusyIndicator","ExtendedBusyIndicatorInsideMessageToast","BusyDialog"];export{c as BusyDialog,t as ContrastMode,o as ExtendedBusyIndicator,r as ExtendedBusyIndicatorInsideMessageToast,n as Standard,K as __namedExportsOrder,J as default};
