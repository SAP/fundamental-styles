export default {
    title: 'Components/Switch',
    parameters: {
        description: `
 The Switch is meant to resemble a physical switch and allow a user to turn a setting “on” or “off”. 
 It should be used to switch between two states/modes: active or inactive.
 <b>Use a checkbox instead:</b>

 - If it is not clear if the control is showing a state or action. 
 - If there are more than two options.
  `,
        components: ['form-label', 'switch', 'icon', 'form']
    }
};


export const basic = () => `
<div class="fd-form-group">
    <div class="fd-form-item">
        <div class="fd-form-label" id="label1">Default (Cozy) Switch</div>
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
        <div class="fd-form-label" id="label2">Compact Switch</div>
        <label class="fd-switch fd-switch--compact">
            <span class="fd-switch__control">
                <input class="fd-switch__input" type="checkbox" name="" value="" aria-labelledby="label2" id="y21YO3431">
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
    <div class="fd-form-item">
        <div class="fd-form-label" id="label8">Disabled Compact Switch</div>
        <label class="fd-switch fd-switch--compact is-disabled">
            <span class="fd-switch__control">
                <input class="fd-switch__input" type="checkbox" name="" value="" aria-labelledby="label8" id="y21Y13491">
                <div class="fd-switch__slider">
                    <div class="fd-switch__track">
                        <span class="fd-switch__handle" role="presentation"></span>
                    </div>
                </div>
            </span>
        </label>
    </div>
</div>
`;

basic.storyName = 'Default';
basic.parameters = {
    docs: {
        iframeHeight: 150
    }
};

export const withText = () => `
<div class="fd-form-group">
    <div class="fd-form-item">
        <div class="fd-form-label" id="label3">With Off Text</div>
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
        <div class="fd-form-label" id="label4">With On Text</div>
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
        <div class="fd-form-label" id="label9">Disabled With Text</div>
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
</div>`;

withText.parameters = {
    docs: {
        iframeHeight: 150
    }
};

export const semanticSwitch = () => `
<div class="fd-form-group">
    <div class="fd-form-item">
        <label class="fd-form-label" id="label5">Semantic Switch</label>
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
    <div class="fd-form-item">
        <label class="fd-form-label" id="label6">Semantic Compact Switch</label>
        <label class="fd-switch fd-switch--semantic fd-switch--compact">
            <span class="fd-switch__control">
                <input class="fd-switch__input" type="checkbox" name="" aria-labelledby="label6" value="" id="y21YO3431">
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
</div>`;

semanticSwitch.parameters = {
    docs: {
        iframeHeight: 150,
        storyDescription: '`fd-switch--semantic` modifier renders semnatic colors and icons inside the switch'
    }
};
