export default {
    title: 'Experimental/Input',
    parameters: {
        description: `**Modifier classes for text field:**

| Style&nbsp;&nbsp;&nbsp;&nbsp;      | Modifier class                |
| ---------------------------------- | ----------------------------- |
| default&nbsp;&nbsp;&nbsp;&nbsp;    | \`none\`                      |
| info&nbsp;&nbsp;&nbsp;&nbsp;| \`fn-input--info\`|
| critical&nbsp;&nbsp;&nbsp;&nbsp;   | \`fn-input--critical\`    |
| negative&nbsp;&nbsp;&nbsp;&nbsp;   | \`fn-input--negative\`      |
| positive&nbsp;&nbsp;&nbsp;&nbsp;   | \`fn-input--positive\`    |

<br><br>

        `,
        components: ['fn-input', 'fn-input', 'icon']
    }
};

const localStyles = `
<style>
    .docs-fn-container {
        display: grid;
        grid-template-columns: 0.5fr 2fr;
        column-gap: 0.1rem;
        row-gap: 0.1rem;
        background: white;
        padding: 1rem;
        justify-items: center;
        align-items: center;
    }

    .docs-fn-header-container {
        display: flex;
        align-items: center;
    }

    .docs-fn-header-container code {
        margin: 0 1rem;
    }
</style>
`;

export const defaultInput = () => `${localStyles}
<div class="docs-fn-container">
    <div><b>normal</b></div>
    <div class="fn-input">
        <input class="fn-input__text-field" type="text" id="field-1" placeholder="Placeholder" />
        <div class="fn-input__border"></div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>hover</b></div>
    <div class="fn-input">
        <input class="fn-input__text-field is-hover" type="text" id="field-2" placeholder="Placeholder" />
        <div class="fn-input__border"></div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>active</b></div>
    <div class="fn-input">
        <input class="fn-input__text-field is-active" type="text" id="field-3" placeholder="Placeholder" />
        <div class="fn-input__border"></div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>focus</b></div>
    <div class="fn-input">
        <input class="fn-input__text-field is-focus" type="text" id="field-4" placeholder="Placeholder" />
        <div class="fn-input__border"></div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>disabled</b></div>
    <div class="fn-input">
        <input class="fn-input__text-field" type="text" id="field-5" placeholder="Placeholder" disabled />
        <div class="fn-input__border"></div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>readonly</b></div>
    <div class="fn-input">
        <input class="fn-input__text-field" type="text" id="field-6" placeholder="Placeholder" readonly />
        <div class="fn-input__border"></div>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>display</b></div>
    <div class="fn-input">
        <input class="fn-input__text-field is-display" type="text" id="field-7" placeholder="Placeholder" />
        <div class="fn-input__border"></div>
    </div>
</div>
`;

defaultInput.storyName = 'Default Input';
defaultInput.parameters = {
    docs: {
        iframeHeight: 500
    }
};

export const infoInput = () => `${localStyles}
<div class="docs-fn-container">
    <div><b>normal</b></div>
    <div class="fn-input fn-input--info">
        <input class="fn-input__text-field" type="text" id="field-8" placeholder="Placeholder" />
        <div class="fn-input__border"></div>
        <span class="sap-icon sap-icon--information"></span>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>hover</b></div>
    <div class="fn-input fn-input--info">
        <input class="fn-input__text-field is-hover" type="text" id="field-9" placeholder="Placeholder" />
        <div class="fn-input__border"></div>
        <span class="sap-icon sap-icon--information"></span>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>active</b></div>
    <div class="fn-input fn-input--info">
        <input class="fn-input__text-field is-active" type="text" id="field-10" placeholder="Placeholder" />
        <div class="fn-input__border"></div>
        <span class="sap-icon sap-icon--information"></span>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>focus</b></div>
    <div class="fn-input fn-input--info">
        <input class="fn-input__text-field is-focus" type="text" id="field-11" placeholder="Placeholder" />
        <div class="fn-input__border"></div>
        <span class="sap-icon sap-icon--information"></span>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>disabled</b></div>
    <div class="fn-input fn-input--info">
        <input class="fn-input__text-field" type="text" id="field-12" placeholder="Placeholder" disabled />
        <div class="fn-input__border"></div>
        <span class="sap-icon sap-icon--information"></span>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>readonly</b></div>
    <div class="fn-input fn-input--info">
        <input class="fn-input__text-field" type="text" id="field-13" placeholder="Placeholder" readonly />
        <div class="fn-input__border"></div>
        <span class="sap-icon sap-icon--information"></span>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>display</b></div>
    <div class="fn-input fn-input--info">
        <input class="fn-input__text-field is-display" type="text" id="field-14" placeholder="Placeholder" />
        <div class="fn-input__border"></div>
        <span class="sap-icon sap-icon--information"></span>
    </div>
</div>
`;

infoInput.storyName = 'Info Input';
infoInput.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Add the `.fn-input--info` modifier class to `.fn-input` for Info Input.'
    }
};

export const criticalInput = () => `${localStyles}
<div class="docs-fn-container">
    <div><b>normal</b></div>
    <div class="fn-input fn-input--critical">
        <input class="fn-input__text-field" type="text" id="field-15" placeholder="Placeholder" />
        <div class="fn-input__border"></div>
        <span class="sap-icon sap-icon--alert"></span>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>hover</b></div>
    <div class="fn-input fn-input--critical">
        <input class="fn-input__text-field is-hover" type="text" id="field-16" placeholder="Placeholder" />
        <div class="fn-input__border"></div>
        <span class="sap-icon sap-icon--alert"></span>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>active</b></div>
    <div class="fn-input fn-input--critical">
        <input class="fn-input__text-field is-active" type="text" id="field-17" placeholder="Placeholder" />
        <div class="fn-input__border"></div>
        <span class="sap-icon sap-icon--alert"></span>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>focus</b></div>
    <div class="fn-input fn-input--critical">
        <input class="fn-input__text-field is-focus" type="text" id="field-18" placeholder="Placeholder" />
        <div class="fn-input__border"></div>
        <span class="sap-icon sap-icon--alert"></span>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>disabled</b></div>
    <div class="fn-input fn-input--critical">
        <input class="fn-input__text-field" type="text" id="field-19" placeholder="Placeholder" disabled />
        <div class="fn-input__border"></div>
        <span class="sap-icon sap-icon--alert"></span>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>readonly</b></div>
    <div class="fn-input fn-input--critical">
        <input class="fn-input__text-field" type="text" id="field-20" placeholder="Placeholder" readonly />
        <div class="fn-input__border"></div>
        <span class="sap-icon sap-icon--alert"></span>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>display</b></div>
    <div class="fn-input fn-input--critical">
        <input class="fn-input__text-field is-display" type="text" id="field-21" placeholder="Placeholder" />
        <div class="fn-input__border"></div>
        <span class="sap-icon sap-icon--alert"></span>
    </div>
</div>
`;

criticalInput.storyName = 'Critical Input';
criticalInput.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Add the `.fn-input--critical` modifier class to `.fn-input` for Critical Input.'
    }
};

export const negativeInput = () => `${localStyles}
<div class="docs-fn-container">
    <div><b>normal</b></div>
    <div class="fn-input fn-input--negative">
        <input class="fn-input__text-field" type="text" id="field-22" placeholder="Placeholder" />
        <div class="fn-input__border"></div>
        <span class="sap-icon sap-icon--error"></span>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>hover</b></div>
    <div class="fn-input fn-input--negative">
        <input class="fn-input__text-field is-hover" type="text" id="field-23" placeholder="Placeholder" />
        <div class="fn-input__border"></div>
        <span class="sap-icon sap-icon--error"></span>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>active</b></div>
    <div class="fn-input fn-input--negative">
        <input class="fn-input__text-field is-active" type="text" id="field-24" placeholder="Placeholder" />
        <div class="fn-input__border"></div>
        <span class="sap-icon sap-icon--error"></span>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>focus</b></div>
    <div class="fn-input fn-input--negative">
        <input class="fn-input__text-field is-focus" type="text" id="field-25" placeholder="Placeholder" />
        <div class="fn-input__border"></div>
        <span class="sap-icon sap-icon--error"></span>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>disabled</b></div>
    <div class="fn-input fn-input--negative">
        <input class="fn-input__text-field" type="text" id="field-26" placeholder="Placeholder" disabled />
        <div class="fn-input__border"></div>
        <span class="sap-icon sap-icon--error"></span>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>readonly</b></div>
    <div class="fn-input fn-input--negative">
        <input class="fn-input__text-field" type="text" id="field-27" placeholder="Placeholder" readonly />
        <div class="fn-input__border"></div>
        <span class="sap-icon sap-icon--error"></span>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>display</b></div>
    <div class="fn-input fn-input--negative">
        <input class="fn-input__text-field is-display" type="text" id="field-28" placeholder="Placeholder" />
        <div class="fn-input__border"></div>
        <span class="sap-icon sap-icon--error"></span>
    </div>
</div>
`;

negativeInput.storyName = 'Negative Input';
negativeInput.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Add the `.fn-input--negative` modifier class to `.fn-input` for Negative Input.'
    }
};


export const positiveInput = () => `${localStyles}
<div class="docs-fn-container">
    <div><b>normal</b></div>
    <div class="fn-input fn-input--positive">
        <input class="fn-input__text-field" type="text" id="field-29" placeholder="Placeholder" />
        <div class="fn-input__border"></div>
        <span class="sap-icon sap-icon--sys-enter-2"></span>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>hover</b></div>
    <div class="fn-input fn-input--positive">
        <input class="fn-input__text-field is-hover" type="text" id="field-30" placeholder="Placeholder" />
        <div class="fn-input__border"></div>
        <span class="sap-icon sap-icon--sys-enter-2"></span>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>active</b></div>
    <div class="fn-input fn-input--positive">
        <input class="fn-input__text-field is-active" type="text" id="field-31" placeholder="Placeholder" />
        <div class="fn-input__border"></div>
        <span class="sap-icon sap-icon--sys-enter-2"></span>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>focus</b></div>
    <div class="fn-input fn-input--positive">
        <input class="fn-input__text-field is-focus" type="text" id="field-32" placeholder="Placeholder" />
        <div class="fn-input__border"></div>
        <span class="sap-icon sap-icon--sys-enter-2"></span>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>disabled</b></div>
    <div class="fn-input fn-input--positive">
        <input class="fn-input__text-field" type="text" id="field-33" placeholder="Placeholder" disabled />
        <div class="fn-input__border"></div>
        <span class="sap-icon sap-icon--sys-enter-2"></span>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>readonly</b></div>
    <div class="fn-input fn-input--positive">
        <input class="fn-input__text-field" type="text" id="field-34" placeholder="Placeholder" readonly />
        <div class="fn-input__border"></div>
        <span class="sap-icon sap-icon--sys-enter-2"></span>
    </div>
</div>

<div class="docs-fn-container">
    <div><b>display</b></div>
    <div class="fn-input fn-input--positive">
        <input class="fn-input__text-field is-display" type="text" id="field-35" placeholder="Placeholder" />
        <div class="fn-input__border"></div>
        <span class="sap-icon sap-icon--sys-enter-2"></span>
    </div>
</div>
`;

positiveInput.storyName = 'Positive Input';
positiveInput.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'Add the `.fn-input--positive` modifier class to `.fn-input` for Positive Input.'
    }
};
