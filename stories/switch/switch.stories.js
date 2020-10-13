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
        components: ['form-label', 'switch', 'icon']
    }
};


export const basic = () => `
<div class="fd-form-group">
    <div class="fd-form-item">
        <div class="fd-form-label" id="label1">Default (Cozy) Switch</div>
        <label class="fd-switch__label">
            <span class="fd-switch">
                <input class="fd-switch__input" type="checkbox" name="" value="" aria-labelledby="label1" id="y21YO3251">
                <div class="fd-switch__wrapper">
                    <div class="fd-switch__track">
                        <span class="fd-switch__handle" role="presentation"></span>
                    </div>
                </div>
            </span>
        </label>
    </div>
    <div class="fd-form-item">
        <div class="fd-form-label" id="label2">Compact Switch</div>
        <label class="fd-switch__label">
            <span class="fd-switch fd-switch--compact">
                <input class="fd-switch__input" type="checkbox" name="" value="" aria-labelledby="label2" id="y21YO3431">
                <div class="fd-switch__wrapper">
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
        <label class="fd-switch__label">
            <span class="fd-switch__text">Off</span> 
            <span class="fd-switch">
                <input class="fd-switch__input" type="checkbox" name="" aria-labelledby="label3" value="" id="y21Y677251">
                <div class="fd-switch__wrapper">
                    <div class="fd-switch__track">
                        <span class="fd-switch__handle" role="presentation"></span>
                    </div>
                </div>
            </span>
        </label>
    </div>
    <div class="fd-form-item">
        <div class="fd-form-label" id="label4">With On Text</div>
        <label class="fd-switch__label">
            <span class="fd-switch__text">On</span> 
            <span class="fd-switch">
                <input class="fd-switch__input" checked type="checkbox" aria-labelledby="label4" name="" value="" id="y21653431">
                <div class="fd-switch__wrapper">
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
        <label class="fd-switch__label">
            <span class="fd-switch fd-switch--semantic">
                <input class="fd-switch__input" type="checkbox" aria-labelledby="label5" name="" value="" id="y21YO3251">
                <div class="fd-switch__wrapper">
                    <div class="fd-switch__track">
                        <i role="presentation" class="fd-switch__icon--on fd-switch__icon sap-icon--accept"></i>
                        <span class="fd-switch__handle" role="presentation"></span>
                        <i role="presentation" class="fd-switch__icon--off fd-switch__icon sap-icon--decline"></i>
                    </div>
                </div>
            </span>
        </label>
    </div>
    <div class="fd-form-item">
        <label class="fd-form-label" id="label6">Semantic Compact Switch</label>
        <label class="fd-switch__label">
            <span class="fd-switch fd-switch--semantic fd-switch--compact">
                <input class="fd-switch__input" type="checkbox" name="" aria-labelledby="label6" value="" id="y21YO3431">
                <div class="fd-switch__wrapper">
                    <div class="fd-switch__track">
                        <i role="presentation" class="fd-switch__icon--on fd-switch__icon sap-icon--accept"></i>
                        <span class="fd-switch__handle" role="presentation"></span>
                        <i role="presentation" class="fd-switch__icon--off fd-switch__icon sap-icon--decline"></i>
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

export const rtl = () => `
<div dir="rtl">
    <label class="fd-switch__label" for="y21YO3911">
        <span class="fd-switch fd-switch--semantic" >
            <input class="fd-switch__input" type="checkbox" name="" value="" id="y21YO3911" aria-label="Rtl Semantic Cozy">
            <div class="fd-switch__wrapper">
                <div class="fd-switch__track">
                    <i role="presentation" class="fd-switch__icon--on fd-switch__icon sap-icon--accept"></i>
                    <span class="fd-switch__handle" role="presentation"></span>
                    <i role="presentation" class="fd-switch__icon--off fd-switch__icon sap-icon--decline"></i>
                </div>
            </div>
        </span>
    </label>
    <label class="fd-switch__label" for="y21YO3912">
        <span class="fd-switch fd-switch--semantic fd-switch--compact" >
            <input class="fd-switch__input" type="checkbox" name="" value="" id="y21YO3912" aria-label="Rtl Semantic Compact">
            <div class="fd-switch__wrapper">
                <div class="fd-switch__track">
                   <i role="presentation" class="fd-switch__icon--on fd-switch__icon sap-icon--accept"></i>
                   <span class="fd-switch__handle" role="presentation"></span>
                   <i role="presentation" class="fd-switch__icon--off fd-switch__icon sap-icon--decline"></i>
               </div>
            </div>
        </span>
    </label>
    <label class="fd-switch__label" for="y21YO3913">
        <span class="fd-switch fd-switch--compact">
            <input class="fd-switch__input" type="checkbox" name="" value="" id="y21YO3913" aria-label="Rtl Compact">
            <div class="fd-switch__wrapper">
                <div class="fd-switch__track">
                   <span class="fd-switch__handle" role="presentation"></span>
               </div>
            </div>
        </span>
    </label>
    <label class="fd-switch__label" for="y21YO3914">
        <span class="fd-switch">
            <input class="fd-switch__input" type="checkbox" name="" value="" id="y21YO3914" aria-label="Rtl Default">
            <div class="fd-switch__wrapper">
                <div class="fd-switch__track">
                   <span class="fd-switch__handle" role="presentation"></span>
               </div>
            </div>
        </span>
    </label>
</div>`;

rtl.parameters = {
    docs: {
        iframeHeight: 200
    }
};

