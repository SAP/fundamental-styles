import '../../../src/form-label.scss';
import '../../../src/switch.scss';
import '../../../src/icon.scss';
export default {
    title: 'Components/Switch',
    parameters: {
        description: `
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

  `
    }
};


export const Basic = () => `
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
        <div class="fd-form-label" id="label8">Disabled switch (compact)</div>
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

Basic.storyName = 'Default';
Basic.parameters = {
    docs: {
        iframeHeight: 350,
        description: {
            story: `The default switch displays what resembles a physical switch that toggles between an active and inactive state. It is displayed in cozy mode, which is ideal for mobile and small tablet screens. The switch should always be accompanied by a label that indicates its purpose.
        `
        }
    }
};

export const WithText = () => `
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
</div>`;

WithText.storyName = 'Optional text';
WithText.parameters = {
    docs: {
        iframeHeight: 350,
        description: {
            story: 'As mentioned in the previous example, a switch should always be accompanied by a label.'
        }
    }
};

export const SemanticSwitch = () => `
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
    <div class="fd-form-item">
        <label class="fd-form-label" id="label6">Semantic switch (compact)</label>
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

SemanticSwitch.storyName = 'States';
SemanticSwitch.parameters = {
    docs: {
        iframeHeight: 350,
        description: {
            story: `The switch can be displayed with semantic colors, such as green for active and red for inactive. To display a semantic switch, add the \`fd-switch—semantic\` modifier class to the main element.
        `
        }
    }
};
