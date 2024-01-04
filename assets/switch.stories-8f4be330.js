/* empty css                   *//* empty css             */const f=`
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
</div>`,p=`
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
</div>`,_=`
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
`;const b={title:"Components/Switch",parameters:{description:`
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

  `}},s=()=>_;s.storyName="Default";s.parameters={docs:{description:{story:`The default switch displays what resembles a physical switch that toggles between an active and inactive state. It is displayed in cozy mode, which is ideal for mobile and small tablet screens. The switch should always be accompanied by a label that indicates its purpose.
        `}}};const t=()=>f;t.parameters={docs:{description:{story:"The switch can be displayed with semantic colors, such as green for active and red for inactive. To display a semantic switch, add the `fd-switch—semantic` modifier class to the main element.\n        "}}};const e=()=>p;e.storyName="Text Switch";e.parameters={docs:{description:{story:"For technical compatibility reasons, it is also possible – although not advised – to have a switch that contains a text element, instead of an icon. Add the `fd-switch--text` modifier class to the main element."}}};var i,a,n;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:"() => basicExampleHtml",...(n=(a=s.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var c,l,o;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"() => semanticSwitchExampleHtml",...(o=(l=t.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var d,r,h;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:"() => withTextExampleHtml",...(h=(r=e.parameters)==null?void 0:r.docs)==null?void 0:h.source}}};const v=["Basic","SemanticSwitch","WithText"];export{s as Basic,t as SemanticSwitch,e as WithText,v as __namedExportsOrder,b as default};
