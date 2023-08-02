/* empty css                   *//* empty css             */const p=`
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
</div>`,f=`
<div class="fd-form-group">
    <div class="fd-form-item">
        <div class="fd-form-label" id="label3">With inline text (off)</div>
        <label class="fd-switch">
            <span class="fd-switch__text">Off</span>
            <span class="fd-switch__control">
                <input class="fd-switch__input" type="checkbox" name="" aria-labelledby="label3" value="" id="y21Y677251">
                <div class="fd-switch__slider">
                    <div class="fd-switch__track">
                        <span class="fd-switch__handle" role="presentation"></span>
                    </div>
                </div>
            </span>
        </label>
    </div>
    <div class="fd-form-item">
        <div class="fd-form-label" id="label4">With inline text (on)</div>
        <label class="fd-switch">
            <span class="fd-switch__text">On</span>
            <span class="fd-switch__control">
                <input class="fd-switch__input" checked type="checkbox" aria-labelledby="label4" name="" value="" id="y21653431">
                <div class="fd-switch__slider">
                    <div class="fd-switch__track">
                        <span class="fd-switch__handle" role="presentation"></span>
                    </div>
                </div>
            </span>
        </label>
    </div>
    <div class="fd-form-item">
        <div class="fd-form-label" id="label9">Disabled with inline text (on)</div>
        <label class="fd-switch is-disabled">
            <span class="fd-switch__text">On</span>
            <span class="fd-switch__control">
                <input class="fd-switch__input" checked type="checkbox" aria-labelledby="label9" name="" value="" id="y29653431">
                <div class="fd-switch__slider">
                    <div class="fd-switch__track">
                        <span class="fd-switch__handle" role="presentation"></span>
                    </div>
                </div>
            </span>
        </label>
    </div>
</div>`,m=`
<div class="fd-form-group">
    <div class="fd-form-item">
        <div class="fd-form-label" id="label1">Default Switch</div>
        <label class="fd-switch">
            <span class="fd-switch__control">
                <input class="fd-switch__input" type="checkbox" name="" value="" aria-labelledby="label1" id="y21YO3251">
                <div class="fd-switch__slider">
                    <div class="fd-switch__track">
                        <span class="fd-switch__handle" role="presentation"></span>
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
                        <span class="fd-switch__handle" role="presentation"></span>
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

  `}},s=()=>m;s.storyName="Default";s.parameters={docs:{description:{story:`The default switch displays what resembles a physical switch that toggles between an active and inactive state. It is displayed in cozy mode, which is ideal for mobile and small tablet screens. The switch should always be accompanied by a label that indicates its purpose.
        `}}};const e=()=>f;e.storyName="Optional text";e.parameters={docs:{description:{story:"As mentioned in the previous example, a switch should always be accompanied by a label."}}};const a=()=>p;a.storyName="States";a.parameters={docs:{description:{story:"The switch can be displayed with semantic colors, such as green for active and red for inactive. To display a semantic switch, add the `fd-switch—semantic` modifier class to the main element.\n        "}}};var i,t,n;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:"() => basicExampleHtml",...(n=(t=s.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var c,l,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"() => withTextExampleHtml",...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var o,r,h;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:"() => semanticSwitchExampleHtml",...(h=(r=a.parameters)==null?void 0:r.docs)==null?void 0:h.source}}};const v=["Basic","WithText","SemanticSwitch"];export{s as Basic,a as SemanticSwitch,e as WithText,v as __namedExportsOrder,b as default};
//# sourceMappingURL=switch.stories-8eb0eff1.js.map
