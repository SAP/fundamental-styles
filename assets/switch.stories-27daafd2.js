var u=Object.defineProperty,x=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var d=(i,s,e)=>s in i?u(i,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[s]=e,t=(i,s)=>{for(var e in s||(s={}))g.call(s,e)&&d(i,e,s[e]);if(o)for(var e of o(s))S.call(s,e)&&d(i,e,s[e]);return i},a=(i,s)=>x(i,y(s));/* empty css                   *//* empty css             */const k=`
<div class="fd-form-group">
    <div class="fd-form-item">
        <label class="fd-form-label" id="label5">Semantic switch</label>
        <label class="fd-switch fd-switch--semantic">
            <span class="fd-switch__control">
                <input class="fd-switch__input" type="checkbox" aria-labelledby="label5" name="" value="" id="y21YO3251">
                <div class="fd-switch__slider">
                    <div class="fd-switch__track">
                        <i role="presentation" class="fd-switch__icon fd-switch__icon--on sap-icon--accept"></i>
                        <span class="fd-switch__handle" role="presentation"></span>
                        <i role="presentation" class="fd-switch__icon fd-switch__icon--off sap-icon--decline"></i>
                    </div>
                </div>
            </span>
        </label>
    </div>
</div>`,T=`
<div class="fd-form-group">
    <div class="fd-form-item">
        <div class="fd-form-label" id="label3">Text Switch (off)</div>
        <label class="fd-switch fd-switch--text">
            <span class="fd-switch__control">
                <input class="fd-switch__input" type="checkbox" name="" aria-labelledby="label3" value="" id="y21Y677251">
                <div class="fd-switch__slider">
                    <div class="fd-switch__track">
                        <span class="fd-switch__text fd-switch__text--on">on</span>
                        <span class="fd-switch__handle" role="presentation"></span>
                        <span class="fd-switch__text fd-switch__text--off">off</span>
                    </div>
                </div>
            </span>
        </label>
    </div>
    <div class="fd-form-item">
        <div class="fd-form-label" id="label4">Text Switch (on)</div>
        <label class="fd-switch fd-switch--text">
            <span class="fd-switch__control">
                <input class="fd-switch__input" checked type="checkbox" aria-labelledby="label4" name="" value="" id="y21653431">
                <div class="fd-switch__slider">
                    <div class="fd-switch__track">
                        <span class="fd-switch__text fd-switch__text--on">on</span>
                        <span class="fd-switch__handle" role="presentation"></span>
                        <span class="fd-switch__text fd-switch__text--off">off</span>
                    </div>
                </div>
            </span>
        </label>
    </div>
</div>`,E=`
<div class="fd-form-group">
    <div class="fd-form-item">
        <div class="fd-form-label" id="label1">Default Switch</div>
        <label class="fd-switch">
            <span class="fd-switch__control">
                <input class="fd-switch__input" type="checkbox" name="" value="" aria-labelledby="label1" id="y21YO3251">
                <div class="fd-switch__slider">
                    <div class="fd-switch__track">
                        <i role="presentation" class="fd-switch__icon fd-switch__icon--on sap-icon--accept"></i>
                        <span class="fd-switch__handle" role="presentation"></span>
                        <i role="presentation" class="fd-switch__icon fd-switch__icon--off sap-icon--less"></i>
                    </div>
                </div>
            </span>
        </label>
    </div>
    <div class="fd-form-item">
        <div class="fd-form-label" id="label7">Disabled Switch</div>
        <label class="fd-switch is-disabled">
            <span class="fd-switch__control">
                <input class="fd-switch__input" type="checkbox" name="" value="" aria-labelledby="label7" id="y21Y13431">
                <div class="fd-switch__slider">
                    <div class="fd-switch__track">
                        <i role="presentation" class="fd-switch__icon fd-switch__icon--on sap-icon--accept"></i>
                        <span class="fd-switch__handle" role="presentation"></span>
                        <i role="presentation" class="fd-switch__icon fd-switch__icon--off sap-icon--less"></i>
                    </div>
                </div>
            </span>
        </label>
    </div>
</div>
`;const I={title:"Components/Switch",parameters:{description:`
The switch mimics a physical switch, allowing users to set individual features (such as personalization or display settings) to either active or inactive. What the switch controls should be clarified with an inline label, while the state it’s currently in should be displayed on the switch itself.


##Usage
**Use the switch if:**

-	You want to enable users to set something as active or inactive (for example, within a **Dialog**).
-	You need to clearly show the mode or state of a setting.
-	The change takes immediate effect.


**Do not use the switch if:**

-	The user has to choose several options or perform extra steps for changes to become effective.
-	The setting requires a confirmation action or _Submit_ button before it can take effect. In this case, use a **Checkbox** instead.
-	It’s not clear if the control is showing a state or an action. In this case, use a **Checkbox** instead.

  `}},n=()=>E;n.storyName="Default";n.parameters={docs:{description:{story:`The default switch displays what resembles a physical switch that toggles between an active and inactive state. It is displayed in cozy mode, which is ideal for mobile and small tablet screens. The switch should always be accompanied by a label that indicates its purpose.
        `}}};const l=()=>k;l.parameters={docs:{description:{story:"The switch can be displayed with semantic colors, such as green for active and red for inactive. To display a semantic switch, add the `fd-switch—semantic` modifier class to the main element.\n        "}}};const c=()=>T;c.storyName="Text Switch";c.parameters={docs:{description:{story:"For technical compatibility reasons, it is also possible – although not advised – to have a switch that contains a text element, instead of an icon. Add the `fd-switch--text` modifier class to the main element."}}};var r,h,f;n.parameters=a(t({},n.parameters),{docs:a(t({},(r=n.parameters)==null?void 0:r.docs),{source:t({originalSource:"() => basicExampleHtml"},(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source)})});var p,_,w;l.parameters=a(t({},l.parameters),{docs:a(t({},(p=l.parameters)==null?void 0:p.docs),{source:t({originalSource:"() => semanticSwitchExampleHtml"},(w=(_=l.parameters)==null?void 0:_.docs)==null?void 0:w.source)})});var m,b,v;c.parameters=a(t({},c.parameters),{docs:a(t({},(m=c.parameters)==null?void 0:m.docs),{source:t({originalSource:"() => withTextExampleHtml"},(v=(b=c.parameters)==null?void 0:b.docs)==null?void 0:v.source)})});const C=["Basic","SemanticSwitch","WithText"];export{n as Basic,l as SemanticSwitch,c as WithText,C as __namedExportsOrder,I as default};
